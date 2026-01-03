import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Demolition Services Nampa, ID | Boise Demolition Pros',
  description: 'Professional demolition services in Nampa, Idaho. House demo, garage removal, commercial demolition & more. Licensed & insured. Call (208) 943-5231.',
  alternates: {
    canonical: 'https://boise-demolition.com/cities-served/nampa',
  },
}

const services = [
        { name: 'House Demolition', href: '/cities-served/nampa/house-demolition', description: 'Complete house demolition and removal services' },
        { name: 'Garage Demolition', href: '/cities-served/nampa/garage-demolition', description: 'Garage demolition for attached and detached garages' },
        { name: 'Shed Removal', href: '/cities-served/nampa/shed-removal', description: 'Fast, affordable shed removal and demolition' },
        { name: 'Deck Removal', href: '/cities-served/nampa/deck-removal', description: 'Professional deck removal and demolition' },
        { name: 'Pool Demolition', href: '/cities-served/nampa/pool-demolition', description: 'In-ground and above-ground pool removal' },
        { name: 'Commercial Demolition', href: '/cities-served/nampa/commercial-demolition', description: 'Commercial building demolition services' },
        { name: 'Concrete Removal', href: '/cities-served/nampa/concrete-removal', description: 'Concrete demolition and removal services' },
        { name: 'Interior Demolition', href: '/cities-served/nampa/interior-demolition', description: 'Interior gut-out and demolition for remodels' },
]

export default function NampaDemolitionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-[#FFC845]" />
            <span className="text-[#FFC845] font-semibold">Serving Nampa, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Demolition Services in Nampa</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center mb-8">Professional demolition services in Nampa, Idaho</p>
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
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>We serve all of Nampa, from downtown to the newer developments on the west side. Residential, commercial, and everything in between.</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Nampa Demolition Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold group-hover:text-[#0b7fb6]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center">Why Choose Us for Nampa Demolition?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Local & Experienced</h3>
                <p className="text-gray-600">We know Nampa and work throughout the area regularly. We understand local permit requirements and site conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed Idaho contractors with comprehensive insurance coverage for your protection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Complete Service</h3>
                <p className="text-gray-600">We handle permits, demolition, debris removal, and site cleanup. One crew from start to finish.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Fair Pricing</h3>
                <p className="text-gray-600">Transparent quotes with all costs included. No hidden fees or surprise charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started in Nampa?</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for a free quote on your demolition project.</p>
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Nampa Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/nampa/downtown-nampa"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Downtown Nampa</span>
                </Link>
                <Link
                  href="/cities-served/nampa/karcher"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Karcher</span>
                </Link>
                <Link
                  href="/cities-served/nampa/lake-lowell"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Lake Lowell</span>
                </Link>
                <Link
                  href="/cities-served/nampa/midway"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Midway</span>
                </Link>
              </div>
            </div>

          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
