import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Demolition Pros',
  description: 'Contact Boise Demolition Pros for demolition services in the Treasure Valley. Call (208) 943-5231 for a free quote.',
  alternates: { canonical: 'https://boise-demolition.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Ready to discuss your demolition project? We're here to help.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Phone</h3>
                    <a href="tel:2089435231" className="text-lg text-gray-600 hover:text-[#0b7fb6]">(208) 943-5231</a>
                    <p className="text-sm text-gray-500 mt-1">Call for a free quote</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7am - 6pm</p>
                    <p className="text-gray-600">Sat: 8am - 4pm</p>
                    <p className="text-gray-600">Sun: By appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Service Area</h3>
                    <p className="text-gray-600">Treasure Valley, Idaho</p>
                    <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, Mountain Home & More</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now for a Free Quote</h3>
                <p className="text-gray-300 mb-6">Talk to a real person. We'll answer your questions and schedule a site visit if needed.</p>
                <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors">
                  <Phone className="w-6 h-6" />(208) 943-5231
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4 text-center">What to Expect When You Call</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>When you call, we'll ask you a few basic questions about your project:</p>
                <ul>
                  <li>What needs to be demolished?</li>
                  <li>Where is it located?</li>
                  <li>When do you need it done?</li>
                  <li>Any specific concerns or complications?</li>
                </ul>
                <p>If it sounds straightforward, we'll schedule a time to come look at the property and give you a written quote. No pressure, no obligation—just a clear answer on what it'll cost and when we can do it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
