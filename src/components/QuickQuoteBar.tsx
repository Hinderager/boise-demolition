'use client'

import { useState, useRef, useEffect } from 'react'
import { Camera, Upload, X, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'

const ABANDONED_FORM_TIMEOUT = 5 * 60 * 1000

// Compress image using Canvas API
const compressImage = (file: File, maxWidth = 1200, quality = 0.75): Promise<File> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      let { width, height } = img
      if (width > maxWidth) {
        height = (height * maxWidth) / width
        width = maxWidth
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0, width, height)
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            })
            resolve(compressedFile)
          } else {
            resolve(file)
          }
        },
        'image/jpeg',
        quality
      )
    }
    img.onerror = () => resolve(file)
    img.src = URL.createObjectURL(file)
  })
}

export function QuickQuoteBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [photos, setPhotos] = useState<File[]>([])
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)
  const abandonedTimerRef = useRef<NodeJS.Timeout | null>(null)
  const formSubmittedRef = useRef(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [consentToContact, setConsentToContact] = useState(true)
  const [phoneError, setPhoneError] = useState('')
  const [submissionId, setSubmissionId] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (abandonedTimerRef.current) {
        clearTimeout(abandonedTimerRef.current)
      }
    }
  }, [])

  const isValidPhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, '')
    return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))
  }

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value)
      setFormData(prev => ({ ...prev, phone: formatted }))
      if (phoneError) setPhoneError('')
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (files.length === 0) return

    if (files.length + photos.length > 10) {
      alert('Maximum 10 photos allowed')
      return
    }

    // Compress images sequentially to avoid memory issues on mobile
    const compressedFiles: File[] = []
    for (const file of files) {
      try {
        const compressed = await compressImage(file)
        compressedFiles.push(compressed)
      } catch {
        // If compression fails, use original file
        compressedFiles.push(file)
      }
    }

    const newPhotos = [...photos, ...compressedFiles].slice(0, 10)
    setPhotos(newPhotos)

    const newPreviews = newPhotos.map(file => URL.createObjectURL(file))
    setPhotoPreviews(newPreviews)

    e.target.value = ''
  }

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    const newPreviews = photoPreviews.filter((_, i) => i !== index)
    setPhotos(newPhotos)
    setPhotoPreviews(newPreviews)
  }

  const sendLeadToGHL = async (
    firstName: string,
    lastName: string,
    phone: string,
    message?: string,
    photoUrls?: string[]
  ) => {
    try {
      await fetch('/api/ghl/abandoned-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          source: 'ms-demolition',
          message,
          photoUrls
        })
      })
    } catch (error) {
      console.error('Error sending lead to GHL:', error)
    }
  }

  const handleInitialClick = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert('Please enter your name')
      return
    }

    if (!formData.phone.trim()) {
      setPhoneError('Please enter your phone number')
      return
    }

    if (!isValidPhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number')
      return
    }

    const nameParts = formData.name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    const normalizedPhone = formData.phone.replace(/\D/g, '')

    formSubmittedRef.current = false
    if (abandonedTimerRef.current) {
      clearTimeout(abandonedTimerRef.current)
    }
    abandonedTimerRef.current = setTimeout(() => {
      if (!formSubmittedRef.current) {
        sendLeadToGHL(firstName, lastName, normalizedPhone)
      }
    }, ABANDONED_FORM_TIMEOUT)

    try {
      const submitData = new FormData()
      submitData.append('first_name', firstName)
      submitData.append('last_name', lastName)
      submitData.append('phone', normalizedPhone)
      submitData.append('form_type', 'demolition_microsite')
      submitData.append('source_page', window.location.pathname)

      const response = await fetch('/api/form-submission', {
        method: 'POST',
        body: submitData
      })

      const result = await response.json()
      if (result.success && result.id) {
        setSubmissionId(result.id)
      }
    } catch (error) {
      console.error('Error saving initial lead:', error)
    }

    setIsExpanded(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    formSubmittedRef.current = true
    if (abandonedTimerRef.current) {
      clearTimeout(abandonedTimerRef.current)
      abandonedTimerRef.current = null
    }

    try {
      const submitData = new FormData()

      const nameParts = formData.name.trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      if (submissionId) {
        submitData.append('submission_id', submissionId)
      } else {
        const normalizedPhone = formData.phone.replace(/\D/g, '')
        submitData.append('first_name', firstName)
        submitData.append('last_name', lastName)
        submitData.append('phone', normalizedPhone)
        submitData.append('form_type', 'demolition_microsite')
        submitData.append('source_page', window.location.pathname)
      }

      submitData.append('email', formData.email)
      submitData.append('message', formData.message)

      photos.forEach((photo, index) => {
        submitData.append(`photo_${index}`, photo)
      })

      const response = await fetch('/api/form-submission', {
        method: 'POST',
        body: submitData
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form')
      }

      const normalizedPhone = formData.phone.replace(/\D/g, '')
      sendLeadToGHL(firstName, lastName, normalizedPhone, formData.message, result.photoUrls)

      setSubmitStatus('success')

      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' })
        setPhotos([])
        setPhotoPreviews([])
        setIsExpanded(false)
        setSubmitStatus('idle')
        setSubmissionId(null)
      }, 3000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote-form" className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a6ab0_0%,#10477d_60%)] -z-10" />
      <div className="absolute inset-0 bg-[url('/assets/asset-7.webp')] bg-repeat bg-[length:800px] opacity-50 -z-[5]" />

      <div
        className="hidden md:flex items-center justify-center h-[40px] mb-4 w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='18,8 6,15 18,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='28,10 18,15 28,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E"), linear-gradient(white, white), linear-gradient(white, white), url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='2,10 12,15 2,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='12,8 24,15 12,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px, calc(50% - 390px) 2px, calc(50% - 390px) 2px, 30px 30px',
          backgroundPosition: 'left 70px center, left 100px center, right 100px center, right 70px center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span className="text-white italic text-sm sm:text-base md:text-[1.5rem] font-semibold tracking-tight whitespace-nowrap">
          Delivering fresh starts since 2022
        </span>
      </div>

      <div className="max-w-xl mx-auto px-4">
        <form onSubmit={isExpanded ? handleSubmit : handleInitialClick}>
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FFC845] transition-all"
            />
            <div className="flex-1">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none transition-all ${
                  phoneError ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-[#FFC845]'
                }`}
              />
              {phoneError && (
                <p className="text-red-400 text-xs mt-1">{phoneError}</p>
              )}
            </div>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-3 pt-1">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FFC845] transition-all"
              />

              <textarea
                name="message"
                placeholder="Tell us about your demolition project (optional)"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FFC845] transition-all resize-none"
              />

              <div className="bg-white/10 rounded-lg p-4 border-2 border-white/30">
                <p className="text-white/90 text-sm mb-3">Add photos (optional - helps with accurate quotes)</p>

                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all text-sm"
                  >
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all text-sm"
                  >
                    <Upload className="w-4 h-4" />
                    Upload
                  </button>
                </div>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                  className="hidden"
                />

                {photoPreviews.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {photoPreviews.map((preview, index) => (
                      <div key={index} className="relative w-16 h-16">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-white/60 text-xs mt-2">
                  {photos.length}/10 photos added
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !consentToContact}
            className={`w-full mt-3 px-8 py-3 rounded-lg font-bold text-lg uppercase transition-all border-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
              submitStatus === 'error'
                ? 'bg-red-500 border-red-500 text-white'
                : submitStatus === 'success'
                ? 'bg-green-500 border-green-500 text-white'
                : !consentToContact
                ? 'bg-gray-400 border-gray-400 text-gray-600'
                : 'bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] border-[#FFC845]'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              'Sent! We will call you soon.'
            ) : submitStatus === 'error' ? (
              'Error - Please try again'
            ) : (
              <>
                {isExpanded ? 'Send Quote Request' : 'Get Demolition Quote'}
                {!isExpanded && <ChevronDown className="w-5 h-5" />}
              </>
            )}
          </button>

          <label className="flex items-start gap-3 mt-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={consentToContact}
              onChange={(e) => setConsentToContact(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-white/50 bg-white/10 text-[#FFC845] focus:ring-[#FFC845] focus:ring-offset-0 cursor-pointer accent-[#FFC845]"
            />
            <span className="text-white/90 text-sm leading-tight">
              I agree to be contacted by phone or text at the number provided. Message and data rates may apply.
            </span>
          </label>

          {isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="w-full mt-2 text-white/70 hover:text-white text-sm flex items-center justify-center gap-1 transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              Show less
            </button>
          )}
        </form>

        <p className="md:hidden text-white text-center italic text-sm mt-4">
          Delivering fresh starts since 2022
        </p>
      </div>
    </section>
  )
}
