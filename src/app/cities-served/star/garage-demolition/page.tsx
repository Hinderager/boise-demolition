import { Metadata } from 'next'
import { Phone, CheckCircle, Clock, Shield, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Garage Demolition Star, ID | Boise Demolition Pros',
  description: 'Garage demolition for attached and detached garages in Star, Idaho. Licensed, insured, professional service. Call (208) 943-5231 for a free quote.',
  alternates: {
    canonical: 'https://boise-demolition.com/cities-served/star/garage-demolition',
  },
}

export default function StarGarageDemolitionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-[#FFC845]" />
            <span className="text-[#FFC845] font-semibold">Star, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Garage Demolition in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center mb-8">Garage demolition for attached and detached garages in Star, Idaho</p>
          <div className="text-center">
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" />(208) 943-5231
            </a>
          </div>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Need a garage torn down in Star? We demo attached and detached garages throughout the area. We're careful to protect your house if it's an attached garage, and we coordinate utility disconnections if needed.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Complete Service</h3>
                <p className="text-gray-600">We handle permits, demolition, debris removal, and site cleanup throughout Star.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed demolition contractors with comprehensive insurance coverage.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Reliable Service</h3>
                <p className="text-gray-600">We show up on time and complete Star projects efficiently.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MapPin className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Local Experience</h3>
                <p className="text-gray-600">We know Star and understand local permit requirements.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Get a Free Quote in Star</h2>
              <p className="text-gray-600 mb-6">Call us for a free, no-obligation quote on your garage demolition project.</p>
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
