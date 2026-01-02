import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const formData = await request.formData()

    const firstName = formData.get('first_name') as string
    const lastName = formData.get('last_name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const formType = formData.get('form_type') as string || 'microsite_form'
    const sourcePage = formData.get('source_page') as string || ''

    // Handle photo uploads
    const photoUrls: string[] = []

    for (let i = 0; i < 10; i++) {
      const photo = formData.get(`photo_${i}`) as File | null
      if (photo && photo.size > 0) {
        const timestamp = Date.now()
        const randomId = Math.random().toString(36).substring(7)
        const extension = photo.name.split('.').pop() || 'jpg'
        const fileName = `${formType}/${timestamp}-${randomId}.${extension}`

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('form-photos')
          .upload(fileName, photo, {
            contentType: photo.type,
            upsert: false
          })

        if (uploadError) {
          console.error('Photo upload error:', uploadError)
        } else if (uploadData) {
          const { data: urlData } = supabase.storage
            .from('form-photos')
            .getPublicUrl(fileName)

          photoUrls.push(urlData.publicUrl)
        }
      }
    }

    const submissionId = formData.get('submission_id') as string

    let data, error

    if (submissionId) {
      const updateData: Record<string, unknown> = {
        updated_at: new Date().toISOString()
      }

      if (email) updateData.email = email
      if (message) updateData.message = message
      if (photoUrls.length > 0) updateData.photo_urls = photoUrls

      const result = await supabase
        .from('web_form_submissions')
        .update(updateData)
        .eq('id', submissionId)
        .select()
        .single()

      data = result.data
      error = result.error
    } else {
      const result = await supabase
        .from('web_form_submissions')
        .insert({
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email || null,
          message: message || null,
          photo_urls: photoUrls.length > 0 ? photoUrls : null,
          form_type: formType,
          source_page: sourcePage
        })
        .select()
        .single()

      data = result.data
      error = result.error
    }

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to save form submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      id: data.id,
      photoUrls: photoUrls.length > 0 ? photoUrls : undefined
    })

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
