'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-slate-100/50 relative overflow-hidden">
      {/* Gradient dot pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-[#10477d]">Find Us</span>
        </h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-[#10477d] mb-6">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b7fb6] to-[#10477d] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                <p className="text-gray-700">Boise, ID and surrounding</p>
                <p className="text-gray-700">Treasure Valley communities</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b7fb6] to-[#10477d] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a href="tel:2083611982" className="text-[#0b7fb6] hover:text-[#10477d] font-semibold text-lg transition-colors">
                  (208) 361-1982
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b7fb6] to-[#10477d] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a href="mailto:info@topshelfpros.com" className="text-[#0b7fb6] hover:text-[#10477d] transition-colors">
                  info@topshelfpros.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b7fb6] to-[#10477d] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                <p className="text-gray-700">Monday - Saturday: 8:00 AM - 9:00 PM</p>
                <p className="text-gray-700">Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p>• Boise</p>
                <p>• Meridian</p>
                <p>• Nampa</p>
                <p>• Caldwell</p>
                <p>• Eagle</p>
                <p>• Kuna</p>
                <p>• Star</p>
                <p>• Garden City</p>
                <p>• Middleton</p>
                <p>• Hidden Springs</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d185000!2d-116.2806!3d43.6352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s1755+N+Westgate+Dr,+Boise,+ID!5e0!3m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Demolition Pros Service Area - Boise, Idaho"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
