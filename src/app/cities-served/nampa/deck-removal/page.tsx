import { Metadata } from 'next'
import { Phone, CheckCircle, Clock, Shield, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Deck Removal Nampa, ID | Boise Demolition Pros',
  description: 'Professional deck removal and demolition in Nampa, Idaho. Licensed, insured, professional service. Call (208) 943-5231 for a free quote.',
  alternates: {
    canonical: 'https://boise-demolition.com/cities-served/nampa/deck-removal',
  },
}

export default function NampaDeckRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-[#FFC845]" />
            <span className="text-[#FFC845] font-semibold">Nampa, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Deck Removal in Nampa</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center mb-8">Professional deck removal and demolition in Nampa, Idaho</p>
          <div className="text-center">
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" />(208) 943-5231
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Old, rotted decks are safety hazards. If your Nampa deck has reached the end of its life, we'll remove it safely and efficiently. We take out the entire structure including railings, stairs, and support posts, then haul away all the debris.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Complete Service</h3>
                <p className="text-gray-600">We handle permits, demolition, debris removal, and site cleanup throughout Nampa.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed demolition contractors with comprehensive insurance coverage.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Reliable Service</h3>
                <p className="text-gray-600">We show up on time and complete Nampa projects efficiently.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MapPin className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Local Experience</h3>
                <p className="text-gray-600">We know Nampa and understand local permit requirements.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Get a Free Quote in Nampa</h2>
              <p className="text-gray-600 mb-6">Call us for a free, no-obligation quote on your deck removal project.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
