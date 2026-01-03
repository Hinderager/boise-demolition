import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Demolition Tuscany Meridian | Top Shelf',
  description: 'Demolition services in Tuscany, Meridian, Idaho. Local team, fair prices, same-day service available. Call (208) 943-5231.',
  keywords: ['demolition Tuscany', 'demolition Tuscany Meridian', 'Tuscany meridian demolition'],
  alternates: {
    canonical: 'https://boise-demolition.com/cities-served/meridian/tuscany',
  },
}

export default function TuscanyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-dark-blue">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Cities Served</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/meridian" className="hover:text-white">Meridian</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Tuscany</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Demolition in Tuscany
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-6">
            Need demolition services in the Tuscany area? We can help.
          </p>
          <a
            href="tel:2089435231"
            className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 943-5231
          </a>
        </div>
      </section>

      <QuickQuoteBar />

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About the Neighborhood */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">
                Demolition in Tuscany, Meridian
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>Interior demo for Tuscany renovations. We work carefully in these quality homes.</p>
                <p>
                  Tuscany is known for its elegant, quiet, well-established atmosphere.
                  With about ~4,000 residents, it's one of Meridian's most distinctive areas.
                </p>
              </div>
            </div>

            {/* Neighborhood Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Local Landmarks
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Tuscany Subdivision Parks</li>
                  <li className="text-gray-700">Meridian Elementary Schools</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  Key Streets We Serve
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Tuscany Drive</li>
                  <li className="text-gray-700">Eagle Road</li>
                  <li className="text-gray-700">Victory Road</li>
                </ul>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                What We Offer in Tuscany
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Italian-inspired planned community</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tree-lined streets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Community pool and parks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Convenient location near Eagle Road</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Same-day and next-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Licensed and insured local team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free estimates for Tuscany residents</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-dark-blue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get a Free Quote in Tuscany
              </h3>
              <p className="text-gray-300 mb-6">
                Call now or request a quote online. We'll get back to you quickly.
              </p>
              <a
                href="tel:2089435231"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 943-5231
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Back to City Page */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/cities-served/meridian"
            className="inline-flex items-center gap-2 text-dark-blue font-medium hover:underline"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Meridian Demolition
          </Link>
        </div>
      </section>
    </main>
  )
}
