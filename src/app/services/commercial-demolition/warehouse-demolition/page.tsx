import { Metadata } from 'next'
import { Phone, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Warehouse Demolition Boise & Treasure Valley | Boise Demolition Pros',
  description: 'Industrial warehouse and distribution center demolition. Professional service in Boise, Meridian, Nampa & throughout the Treasure Valley. Call (208) 943-5231 for a free quote.',
  alternates: {
    canonical: 'https://boise-demolition.com/services/commercial-demolition/warehouse-demolition',
  },
}

export default function WarehouseDemolitionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Warehouse Demolition</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Industrial warehouse and distribution center demolition.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Warehouses and industrial buildings are built tough, which makes them more complex to demolish. Large spans, heavy construction, and sometimes contaminated sites.</p>
              <p>We have the heavy equipment needed for warehouse demo—excavators, loaders, crushers. We can handle steel frame buildings, concrete tilt-up construction, and everything in between.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Complete Service</h3>
                <p className="text-gray-600">We handle permits, demolition, debris removal, and site cleanup. One crew, one point of contact.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed demolition contractors with comprehensive insurance coverage for your protection.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Fast & Reliable</h3>
                <p className="text-gray-600">We show up on time and complete projects efficiently. No delays, no excuses.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">Free quotes with all costs included. No hidden fees or surprise charges.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Get a Free Quote</h2>
              <p className="text-gray-600 mb-6">Call us for a free, no-obligation quote on your warehouse demolition project.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark-blue mb-4">Serving the Entire Treasure Valley</h2>
            <p className="text-gray-600">Boise • Meridian • Nampa • Caldwell • Eagle • Garden City • Kuna • Star • Middleton • Mountain Home</p>
          </div>
        </div>
      </section>
    </main>
  )
}
