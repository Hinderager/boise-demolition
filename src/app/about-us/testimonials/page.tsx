import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Real Google reviews for Top Shelf Junk Removal and Demolition, the crew behind our demolition in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://boise-demolition.com/about-us/testimonials' },
}

// Real Google reviews for Top Shelf Junk Removal and Demolition.
// Do not add entries here that are not genuine reviews.
const reviews = [
  { author: 'Lynne Ripley', rating: 5, when: 'a month ago', text: 'I have worked with Top Shelf twice (once for junk pickup and once for sod pickup) and have had stellar experiences both times. They respond and schedule quickly, very professional and easy to work with. I have recommended them to friends as well and continue to highly recommend them.' },
  { author: 'Doug Hind', rating: 5, when: '2 months ago', text: 'Very easy to work with Eric, got the job scheduled and crew showed up on time. They were very respectful of our property, did exactly what was agreed upon and left things in very good shape ... very professional. I plan to use Top Shelf Junk Removal again and would highly recommend them for any size job.' },
  { author: 'Katrina Vincent', rating: 5, when: '5 months ago', text: 'We recently hired Top Shelf to assist a client who had been a long time tenant for the company I work for, it was a big project, riddled with challenges. They far exceeded my expectations. Not only did they arrive on time and get right to work, they treated our clients with kindness and respect. They were extremely helpful and hard working. They accommodated our needs for appointment times and seemed to really want to earn our business. I hope to be able to utilize their services again! Would very highly recommend.' },
  { author: 'Rachelle Tridle', rating: 5, when: '2 months ago', text: 'Top Shelf Junk Removers were awesome! They showed up on time, took everything that was quoted — plus a few extra items I had on site — with no hassle. Super fast, efficient, affordable, and even had change because I paid with cash! Great service all around. Highly recommend!' },
  { author: 'Jeff Rau', rating: 5, when: '4 months ago', text: 'Exceptional service and response from Top Shelf. Cleaning out a family home and we were able to fill a 15 cubic yard dumpster twice! Both deliveries were very timely and working with Top Shelf staff was great! Thank you for helping make our chore easier and efficient. I would easily recommend this business to others.' },
  { author: 'Cory', rating: 5, when: '3 months ago', text: 'I had a great experience with this junk removal business. He was punctual, professional, and worked efficiently to get everything loaded up quickly. He was friendly, easy to work with, and made the whole process simple and stress-free. If you need dependable junk removal services, I highly recommend him and would definitely call again.' },
  { author: 'Josephine Dougherty', rating: 5, when: 'a month ago', text: 'These guys are great and I seriously don&apos;t know why I didn&apos;t hire them 3 weeks ago!!! Keep in mind.... this is what they had to deal with and the backyard 1000% worse!!!' },
  { author: 'Kevin McSpadden', rating: 5, when: '6 months ago', text: 'Eric and Gabe were great. Positive attitude and tackled the job without complaint. Pricing was great and will definitely use them again!' },
  { author: 'Ian Arroyo', rating: 5, when: '2 months ago', text: 'Eric and his team do such a fantastic job. They are utmost professionals and really care about the people they serve. Ours was an international move and our container arrival date changed 5 times over five weeks and not once did they get frustrated. On the day of unloading, they were fun, kind, and engaged with our kids during an amazing unload. Nothing broken, damaged, or even put in the wrong place. 10/10 would recommend and will use them anytime we need movers. Thanks Eric!' },
  { author: 'Yakhsapet Mikulik', rating: 5, when: '11 months ago', text: 'Outstanding service by Top Shelf. I used them for my move and I couldn&apos;t be happier with the service. The movers were on time, professional, and incredibly careful with all of my belongings. They worked quickly and efficiently, yet made sure everything was handled with care. The team was friendly and respectful throughout the entire process, making a potentially stressful day go smoothly. I highly recommend Top Shelf to anyone in need of reliable and top-quality service.' },
]

const RATING = 5.0
const TOTAL_REVIEWS = 392

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Customers Say</h1>
          <div className="inline-block bg-white rounded-2xl px-8 py-5 shadow-md">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{RATING.toFixed(1)}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({TOTAL_REVIEWS} Google reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-10">
              These are real reviews left on Google for Top Shelf Junk Removal and Demolition &mdash; the same crew that handles our demolition. We
              haven&apos;t edited them, and we can&apos;t: Google reviews are tied to real accounts and the business can&apos;t change what they say.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.author} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <p className="text-sm font-bold text-dark-blue">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.when}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-10">
              Want to see the rest? Search <strong>Top Shelf Junk Removal and Demolition</strong> on Google to read all {TOTAL_REVIEWS} of them.
            </p>

            <p className="text-gray-600 mt-4">
              And if something ever goes wrong on your job, call us before you write a review. We&apos;d much rather come back and fix it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to book?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
