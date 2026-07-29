import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, FileText, DollarSign, ListChecks } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Demolition Resources',
  description: 'Plain-English guides to demolition in Boise and the Treasure Valley: permit requirements, what drives the price, our step-by-step process, and common questions.',
  alternates: { canonical: 'https://boise-demolition.com/resources' },
}

const resources = [
  {
    icon: HelpCircle,
    name: 'Frequently Asked Questions',
    href: '/resources/faq',
    description: 'Timelines, insurance, utilities, cleanup, and the other things people ask before they book.',
  },
  {
    icon: FileText,
    name: 'Permits & Regulations',
    href: '/resources/permits',
    description: 'Which demo jobs need a permit in Boise, Meridian, and Nampa, and who pulls it.',
  },
  {
    icon: DollarSign,
    name: 'Pricing Guide',
    href: '/resources/pricing',
    description: 'What actually moves the price on a demo job, from structure size to disposal and access.',
  },
  {
    icon: ListChecks,
    name: 'Our Process',
    href: '/resources/process',
    description: 'What happens from the first phone call through final cleanup and walkthrough.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Straight answers on permits, pricing, and how a demo job runs.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Demolition trips people up because so much of it happens before anything gets torn down. Permits, utility shut-offs, asbestos checks &mdash; that&apos;s where projects stall.</p>
              <p>These guides cover the parts that surprise people, written the way we&apos;d explain it standing in your driveway. If your question isn&apos;t here, pick up the phone and ask.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{resource.name}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Talk About Your Project?</h2>
          <p className="text-gray-300 mb-6">Free estimates throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
