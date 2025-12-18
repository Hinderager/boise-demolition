import { Metadata } from 'next'
import { Phone, Shield, FileCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Demolition Pros',
  description: 'Boise Demolition Pros is fully licensed and insured for all demolition work in Idaho. See our credentials and insurance coverage details.',
  alternates: { canonical: 'https://boise-demolition.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully credentialed and covered for your protection.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Demolition work carries real risks—to property, to people, and to the businesses involved. That's why we maintain all required licenses and carry comprehensive insurance on every job we do.</p>

              <p>We're not cutting corners or operating in a gray area. We're a legitimate, above-board demolition contractor with all our paperwork in order.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Shield className="w-12 h-12 text-[#FFC845] mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Licenses</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Idaho Contractor License (in good standing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">City of Boise Business License</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">EPA Lead-Safe Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">OSHA Safety Training (all crew members)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <FileCheck className="w-12 h-12 text-[#FFC845] mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Insurance</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">General Liability Insurance ($2M coverage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Workers' Compensation Insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Commercial Auto Insurance (all vehicles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Pollution Liability Insurance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What This Means for You</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>If something goes wrong on a job—and in demolition, things can go wrong—you're protected. Our insurance covers property damage, injuries, and environmental issues. You won't be left holding the bag for a contractor's mistake.</p>

                <p>We can provide certificates of insurance to your mortgage company, HOA, or anyone else who needs them. It's all part of doing business the right way.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Beware of Unlicensed Contractors</h3>
              <p className="text-gray-600">Not everyone with a truck and a sledgehammer is a legitimate demolition contractor. If someone can't show you proof of licensing and insurance, you're taking a huge risk. Don't do it.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Credentials?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
