import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Specialty Demolition Services Treasure Valley | Boise Demolition Pros',
  description: 'Specialized demolition services including pools, concrete, and foundations. Serving Boise, Meridian, Nampa & the Treasure Valley. Call (208) 943-5231.',
  alternates: {
    canonical: 'https://boise-demolition.com/services/specialty-demolition',
  },
}

const services = [
        { name: 'Pool Demolition & Removal', href: '/services/specialty-demolition/pool-demolition', description: 'In-ground and above-ground pool demolition and removal.' },
        { name: 'Concrete Removal', href: '/services/specialty-demolition/concrete-removal', description: 'Concrete demolition, removal, and disposal services.' },
        { name: 'Foundation Removal', href: '/services/specialty-demolition/foundation-removal', description: 'Foundation excavation and removal services.' },
]

export default function SpecialtyDemolitionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialty Demolition Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Specialized demolition services including pools, concrete, and foundations.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Specialty Demolition Services</h2>
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

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Specialty Demolition Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for professional demolition services throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
