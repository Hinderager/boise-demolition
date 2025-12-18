'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, User, Phone, Mail, MessageSquare, Calendar, CheckCircle } from 'lucide-react'

type SchedulingFormProps = {
  city?: string
}

export function SchedulingForm({ city = 'Boise' }: SchedulingFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: '',
    description: '',
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Format phone number to (xxx)xxx-xxxx
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    const limited = digits.slice(0, 10)
    if (limited.length === 0) return ''
    if (limited.length <= 3) return `(${limited}`
    if (limited.length <= 6) return `(${limited.slice(0, 3)})${limited.slice(3)}`
    return `(${limited.slice(0, 3)})${limited.slice(3, 6)}-${limited.slice(6)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    const processedValue = name === 'phone' ? formatPhoneNumber(value) : value

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : processedValue,
    }))
  }

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length === 10
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      isValidPhone(formData.phone) &&
      formData.address.trim() !== '' &&
      formData.agreeToTerms &&
      (formData.email === '' || isValidEmail(formData.email))
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid() || isSubmitting) return

    setIsSubmitting(true)
    setError(null)

    try {
      // Submit to GHL webhook for junk removal calendar
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/YOUR_GHL_WEBHOOK_ID'
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact: {
            firstName: formData.fullName.split(' ')[0],
            lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
            phone: formData.phone,
            email: formData.email || undefined,
            address1: formData.address,
          },
          customField: {
            preferred_date: formData.preferredDate,
            description: formData.description,
            service_type: 'hoarding_cleanup',
            source_city: city,
            source_site: 'boise-hoarding-cleanup.com',
          },
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Form submission error:', err)
      setError('There was an error submitting your request. Please call us at (208) 361-1982.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="schedule-form" className="py-16 bg-fog">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your request and will contact you within 1 business hour to schedule your free estimate.
            </p>
            <p className="text-gray-600">
              Need immediate assistance? Call us at{' '}
              <a href="tel:2083611982" className="text-dark-blue font-bold underline hover:text-light-blue">
                (208) 361-1982
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="schedule-form" className="py-16 bg-fog">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
              Schedule Your Free Estimate
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we&apos;ll contact you to schedule a convenient time for your free, no-obligation estimate.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-cta-rose">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-cta-rose">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(208) 555-1234"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address <span className="text-cta-rose">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address, City, ID"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Situation (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the scope of work, number of rooms, any special considerations..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded accent-dark-blue"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                  I agree to receive calls and texts regarding my inquiry. Message and data rates may apply.{' '}
                  <a href="/privacy" className="text-dark-blue underline hover:text-light-blue">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={!isFormValid() || isSubmitting}
                className="w-full mt-4 py-6 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Request Free Estimate'}
              </Button>

              {/* Reassurance */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Your information is secure and will never be shared. We respect your privacy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
