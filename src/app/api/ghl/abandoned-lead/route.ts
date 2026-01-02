import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = 'https://n8n.srv1041426.hstgr.cloud/webhook/hoarding-lead-to-ghl'

interface LeadRequest {
  firstName: string
  lastName: string
  phone: string
  source: string
  message?: string
  photoUrls?: string[]
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadRequest = await request.json()

    if (!body.phone) {
      return NextResponse.json(
        { success: false, error: 'Phone is required' },
        { status: 400 }
      )
    }

    const digits = body.phone.replace(/\D/g, '').slice(-10)
    if (digits.length !== 10) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: body.firstName || 'Unknown',
        lastName: body.lastName || '',
        phone: digits,
        source: body.source || 'microsite',
        message: body.message || '',
        photoUrls: body.photoUrls || []
      })
    })

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text()
      console.error('n8n workflow error:', errorText)
      return NextResponse.json(
        { success: false, error: 'Failed to process lead' },
        { status: 500 }
      )
    }

    const result = await n8nResponse.json()

    return NextResponse.json({
      success: true,
      message: 'Lead processed via n8n',
      contactId: result.contactId
    })

  } catch (error) {
    console.error('Lead error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
