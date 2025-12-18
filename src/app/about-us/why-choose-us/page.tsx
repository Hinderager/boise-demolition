import { Metadata } from 'next'
import { Phone, CheckCircle, Shield, Clock, Truck, HardHat, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Demolition Pros',
  description: 'Learn why Treasure Valley homeowners and businesses choose Boise Demolition Pros. Licensed, insured, experienced, and committed to doing the job right.',
  alternates: { canonical: 'https://boise-demolition.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from other demo contractors.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We're not going to tell you we're the cheapest option in town—we're probably not. And we're not going to promise you the moon.</p>

              <p>What we will tell you is that we show up when we say we will, we do the work safely and professionally, and we clean up after ourselves. If that sounds basic, it is. But you'd be surprised how many contractors can't get those fundamentals right.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">We carry all required licenses and maintain comprehensive insurance. You're covered if something goes wrong, and we handle all the permit paperwork.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Experienced Crew</h3>
                <p className="text-gray-600">Our team has been doing this for years. We know how to handle different types of structures, tricky site conditions, and unexpected issues that come up.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Complete Service</h3>
                <p className="text-gray-600">We handle everything—permits, demolition, debris removal, site cleanup. You get one crew, one point of contact, one bill.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Reliable Timeline</h3>
                <p className="text-gray-600">We give you a realistic timeline and stick to it. If we say we'll be there Tuesday morning, we'll be there Tuesday morning.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">Our quotes include everything—labor, equipment, disposal, cleanup. No hidden fees or surprise charges at the end.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Local & Available</h3>
                <p className="text-gray-600">We're based in Boise and we work throughout the Treasure Valley. You'll get a local crew who knows the area and local regulations.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What We Don't Do</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>We don't work without proper permits. We don't cut corners on safety. We don't leave your property looking like a disaster zone. And we don't disappear halfway through a job.</p>

                <p>If you're looking for the absolute cheapest quote, you'll probably find it elsewhere. If you want professional demolition work done right, give us a call.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6">
              <h3 className="text-lg font-bold text-dark-blue mb-2">The Bottom Line</h3>
              <p className="text-gray-600">We're straightforward people who do demolition work for a living. We're good at it, we take it seriously, and we treat our customers fairly. That's really all there is to it.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
