import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building2, Hammer, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Services | Boise Demolition',
  description: 'Complete demolition services in Boise and the Treasure Valley. Residential, commercial, interior, and specialty demolition. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-demolition.com/services' },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Demolition Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional demolition services for residential and commercial properties throughout the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We handle all types of demolition projects. From small interior tear-outs to complete building demolition, we have the equipment and experience to get it done safely and efficiently.</p>
              <p>Every job includes debris removal, cleanup, and proper disposal. Licensed and insured in Idaho.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/residential-demolition" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Home className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Residential Demolition</h2>
                <p className="text-gray-600">House demolition, garage removal, deck teardown, and shed removal for residential properties.</p>
              </Link>

              <Link href="/services/commercial-demolition" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Building2 className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Commercial Demolition</h2>
                <p className="text-gray-600">Building demolition, warehouse teardown, and strip mall removal for commercial properties.</p>
              </Link>

              <Link href="/services/interior-demolition" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Hammer className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Interior Demolition</h2>
                <p className="text-gray-600">Kitchen, bathroom, and basement demolition. Interior tear-outs for remodeling projects.</p>
              </Link>

              <Link href="/services/specialty-demolition" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Wrench className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Specialty Demolition</h2>
                <p className="text-gray-600">Concrete removal, foundation removal, and pool demolition for specialized projects.</p>
              </Link>
            </div>

            <div className="mt-12 bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>✓ Complete demolition</li>
                  <li>✓ Debris removal and haul-away</li>
                  <li>✓ Site cleanup</li>
                  <li>✓ Proper disposal</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Licensed and insured</li>
                  <li>✓ Safety protocols</li>
                  <li>✓ Equipment and labor</li>
                  <li>✓ Free estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Demolition Services?</h2>
          <p className="text-gray-200 mb-6">Call us for a free quote and consultation.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
