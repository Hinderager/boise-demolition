import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Demolition West Boise Boise | Top Shelf',
  description: 'Demolition services in West Boise, Boise, Idaho. Local team, fair prices, same-day service available. Call (208) 943-5231.',
  keywords: ['demolition West Boise', 'demolition West Boise Boise', 'West Boise boise demolition'],
  alternates: {
    canonical: 'https://boise-demolition.com/cities-served/boise/west-boise',
  },
}

export default function WestBoisePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-dark-blue">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Cities Served</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/boise" className="hover:text-white">Boise</Link>
            <span className="mx-2">/</span>
            <span className="text-white">West Boise</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Demolition in West Boise
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-6">
            Need demolition services in the West Boise area? We can help.
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
                Demolition in West Boise, Boise
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>West Boise demolition projects range from residential to commercial. We handle tear-downs along State Street and throughout the surrounding neighborhoods.</p>
                <p>
                  West Boise is known for its suburban, convenient, family-oriented atmosphere.
                  With about ~30,000 residents, it's one of Boise's most distinctive areas.
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
                  <li className="text-gray-700">Kleiner Park</li>
                  <li className="text-gray-700">State Street Corridor</li>
                  <li className="text-gray-700">Boise State University (nearby)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  Key Streets We Serve
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">State Street</li>
                  <li className="text-gray-700">Glenwood Street</li>
                  <li className="text-gray-700">Gary Lane</li>
                  <li className="text-gray-700">Five Mile Road</li>
                </ul>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                What We Offer in West Boise
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Diverse mix of residential and commercial areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">State Street commercial corridor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proximity to Eagle and Garden City</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Growing population with new development</span>
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
                  <span className="text-gray-700">Free estimates for West Boise residents</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-dark-blue rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get a Free Quote in West Boise
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
            href="/cities-served/boise"
            className="inline-flex items-center gap-2 text-dark-blue font-medium hover:underline"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Boise Demolition
          </Link>
        </div>
      </section>
    </main>
  )
}
