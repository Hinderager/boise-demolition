import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Cities We Serve',
  description: 'Demolition services across the Treasure Valley: Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, Garden City, Middleton, and Mountain Home. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-demolition.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', county: 'Ada County', description: 'House, garage, and interior demo across every Boise neighborhood.' },
  { name: 'Meridian', slug: 'meridian', county: 'Ada County', description: "Residential and commercial demolition in Idaho's fastest-growing city." },
  { name: 'Nampa', slug: 'nampa', county: 'Canyon County', description: 'Structure teardowns, concrete removal, and site clearing in Nampa.' },
  { name: 'Caldwell', slug: 'caldwell', county: 'Canyon County', description: 'Demo work for homes, outbuildings, and small commercial sites.' },
  { name: 'Eagle', slug: 'eagle', county: 'Ada County', description: 'Careful demolition on established lots and remodel projects.' },
  { name: 'Garden City', slug: 'garden-city', county: 'Ada County', description: 'Interior and structural demo along the Boise River corridor.' },
  { name: 'Kuna', slug: 'kuna', county: 'Ada County', description: 'Barns, sheds, and house demolition on acreage south of Boise.' },
  { name: 'Star', slug: 'star', county: 'Ada County', description: 'Demolition and lot clearing for new builds and rural properties.' },
  { name: 'Middleton', slug: 'middleton', county: 'Canyon County', description: 'Farm structure and residential demolition in and around Middleton.' },
  { name: 'Mountain Home', slug: 'mountain-home', county: 'Elmore County', description: 'Demolition and haul-off service out to Mountain Home.' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Demolition crews working across the Treasure Valley and beyond.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We&apos;re based here, so most of our jobs are a short drive away. That matters more than it sounds &mdash; permit rules, dump fees, and utility disconnects all work a little differently depending on which city you&apos;re in.</p>
              <p>Pick your city below to see what demolition looks like there, including the local permit office and the kind of work we do most in that area. Not on the list? Call us anyway. We travel.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-xl font-bold text-dark-blue">{city.name}</h2>
                      <p className="text-xs text-gray-500">{city.county}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{city.description}</p>
                  <p className="text-sm text-dark-blue font-medium mt-3">View demolition services &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Got a Structure That Needs to Come Down?</h2>
          <p className="text-gray-300 mb-6">Tell us where you are and what you&apos;re looking at. We&apos;ll give you a real number.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
