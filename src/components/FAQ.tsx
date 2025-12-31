'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does demolition cost in Boise?',
    answer: 'It depends on what you are tearing down. A small shed or deck might run $500-$2,000. Interior demo like a kitchen or bathroom is usually $1,500-$5,000. A full garage or small structure is typically $3,000-$8,000. Whole houses vary widely based on size and materials. We give free estimates after looking at your project.'
  },
  {
    question: 'Do I need a permit to demolish something?',
    answer: 'Most demolition in Boise requires a permit - especially for structures over 120 square feet or anything attached to your house. Sheds under that size often do not need one, but check with the city first. We can help you figure out what is required and handle the permit application if needed.'
  },
  {
    question: 'What happens to all the debris?',
    answer: 'We haul it all away - that is part of the service. Concrete, metal, and wood get recycled when possible. Everything else goes to the proper disposal facility. You do not have to worry about cleanup. The site gets left clean and ready for whatever you are doing next.'
  },
  {
    question: 'How long does a typical demolition take?',
    answer: 'A shed or deck? Usually done in a day. A garage takes 1-3 days depending on size. Interior demo for a kitchen or bathroom is typically a day or two. Full house demolitions take 3-7 days depending on the size and what is involved. We will give you a timeline when we quote the job.'
  },
  {
    question: 'Do you disconnect utilities before demolition?',
    answer: 'Yes, we coordinate with utility companies to shut off gas, electric, water, and sewer before we start. This is a critical safety step - especially for any structure with active utilities. We handle the coordination so you do not have to.'
  },
  {
    question: 'Can you demo just part of a building?',
    answer: 'Absolutely. That is called selective demolition, and we do it all the time. Maybe you just need one wall removed, or a bathroom gutted, or an old addition torn off. We protect what stays and carefully remove what goes. It is perfect for renovations.'
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry full liability insurance and workers comp. If something goes wrong - which it rarely does - you are covered. We can send you a certificate of insurance if you need it for permits or peace of mind.'
  },
  {
    question: 'What can you not demolish?',
    answer: 'We do not handle hazardous materials like asbestos or contaminated soil - those need specialists. Everything else is fair game: houses, garages, sheds, decks, concrete, you name it. If you are not sure, just ask. We will tell you straight if it is something we can do or not.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2089435231">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 943-5231</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
