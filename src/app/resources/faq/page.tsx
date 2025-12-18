import { Metadata } from 'next'
import { Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Boise Demolition Pros',
  description: 'Common questions about demolition services in Boise and the Treasure Valley. Get answers about permits, pricing, timelines, and what to expect.',
  alternates: { canonical: 'https://boise-demolition.com/resources/faq' },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Do I need a permit to demolish a structure on my property?",
      answer: "Usually, yes. Most cities in the Treasure Valley require permits for demolition work, especially for anything attached to your property like a garage, shed, or house. There are some exceptions for small, detached structures. We handle all the permit paperwork as part of our service—it's easier if we do it since we know what the city needs."
    },
    {
      question: "How much does demolition cost?",
      answer: "It depends on what you're tearing down, how big it is, and what's involved in hauling away the debris. A small shed might cost a few hundred dollars. A full house demolition runs several thousand. We give free quotes after seeing the site—it's the only way to give you an accurate number."
    },
    {
      question: "How long does a typical demolition take?",
      answer: "A garage or shed usually takes a day, sometimes two if it's big or complicated. A full house demo typically takes 3-5 days including cleanup. Commercial projects vary a lot depending on size and complexity. We'll give you a timeline when we quote the job."
    },
    {
      question: "What happens to the debris?",
      answer: "We haul it all away and dispose of it properly. Some materials get recycled (metal, concrete, clean wood), others go to the landfill. You don't have to worry about it—it's all included in our service."
    },
    {
      question: "Do you handle asbestos removal?",
      answer: "We work with certified asbestos abatement contractors for projects that need it. If your structure was built before 1980, there's a decent chance it contains asbestos. We'll assess it during the quote and coordinate the abatement if needed—but that's a separate service with separate specialists."
    },
    {
      question: "Can you demolish just part of a structure?",
      answer: "Yes, we do partial demolition and interior demo work all the time. Kitchen gut jobs, removing interior walls, tearing out old additions—whatever you need. We're careful to protect the parts of the structure you're keeping."
    },
    {
      question: "Will you damage my lawn or landscaping?",
      answer: "We do our best to minimize damage, but heavy equipment on grass will leave some marks. If you have specific landscape features you want protected, let us know upfront and we'll work around them. We'll also clean up any debris that spills onto your yard."
    },
    {
      question: "Do I need to disconnect utilities before demo?",
      answer: "Yes, all utilities (gas, electric, water, sewer) need to be disconnected before we start. You'll need to contact your utility companies to schedule shutoffs. We can advise you on the process, but the property owner has to make those calls."
    },
    {
      question: "Are you insured?",
      answer: "Fully insured and licensed. We carry general liability, workers' comp, and pollution liability insurance. If you need a certificate of insurance for your records or mortgage company, we can provide that."
    },
    {
      question: "Can you work in the winter?",
      answer: "Yes, we work year-round unless conditions are truly dangerous (heavy ice, for example). Snow slows things down a bit, but it doesn't stop demolition work."
    },
    {
      question: "Do you offer financing?",
      answer: "We don't offer in-house financing, but demolition costs are sometimes rolled into construction loans if you're rebuilding. Talk to your lender about options."
    },
    {
      question: "What if we find something unexpected during demo?",
      answer: "It happens—hidden structural issues, hazardous materials, underground tanks. We'll stop work, assess the situation, and give you options for how to proceed. Sometimes it adds cost and time, sometimes it doesn't. We'll be straight with you about what's involved."
    }
  ]

  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Common questions about demolition services in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Here are answers to the questions we hear most often. If you don't see your question here, give us a call—we're happy to talk through your specific situation.</p>
            </div>

            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">We're here to help. Give us a call and we'll walk you through whatever you need to know.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
