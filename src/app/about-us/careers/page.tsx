import { Metadata } from 'next'
import { Phone, HardHat, Truck, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | Boise Demolition Pros',
  description: 'Join the Boise Demolition Pros team. Career opportunities for demolition laborers, equipment operators, and experienced demo crews in the Treasure Valley.',
  alternates: { canonical: 'https://boise-demolition.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Looking for hardworking, reliable people to grow with us.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2>Why Work With Us?</h2>
              <p>We're growing, and we need good people who show up on time, work hard, and take pride in doing the job right. If that sounds like you, we'd like to talk.</p>

              <p>We pay fair wages, offer consistent work, and treat our crew with respect. Most of our team has been with us for years—that tells you something about how we operate.</p>

              <h2>What We Look For</h2>
              <ul>
                <li>Reliable transportation and a clean driving record</li>
                <li>Willingness to work physically demanding jobs</li>
                <li>Experience with demolition, construction, or general labor (preferred but not required)</li>
                <li>Ability to follow safety protocols</li>
                <li>Good attitude and team mentality</li>
              </ul>

              <h2>Current Opportunities</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Demo Laborers</h3>
                <p className="text-gray-600 mb-4">Full-time positions for general demolition work. No experience required—we'll train the right people.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Equipment Operators</h3>
                <p className="text-gray-600 mb-4">Looking for skilled excavator and skid steer operators with verifiable experience.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Ready to Apply?</h2>
              <p className="text-gray-600 mb-6">Give us a call to discuss opportunities. We'll keep it simple—just a straightforward conversation about the work and what you're looking for.</p>
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
