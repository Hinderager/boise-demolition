import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials | Boise Demolition Pros',
  description: 'Read reviews from satisfied customers across the Treasure Valley. See why homeowners and businesses trust Boise Demolition Pros for their demo projects.',
  alternates: { canonical: 'https://boise-demolition.com/about-us/testimonials' },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mike R.",
      location: "Boise, ID",
      service: "Garage Demolition",
      text: "Needed my old detached garage torn down. They showed up when they said they would, knocked it down in a day, and hauled everything away. Price was exactly what they quoted. No surprises.",
      rating: 5
    },
    {
      name: "Jennifer T.",
      location: "Meridian, ID",
      service: "Shed Removal",
      text: "Quick, professional, and reasonably priced. They handled the permit paperwork and had my old shed gone by the end of the week. Would definitely use them again.",
      rating: 5
    },
    {
      name: "Robert K.",
      location: "Nampa, ID",
      service: "Commercial Demolition",
      text: "We hired them to demo an old commercial building. They were thorough with the site prep, handled all the environmental stuff, and finished ahead of schedule. Solid crew.",
      rating: 5
    },
    {
      name: "Sarah M.",
      location: "Eagle, ID",
      service: "Deck Removal",
      text: "Our old deck was falling apart and needed to go. They gave us a fair quote, did the work carefully so they didn't damage our yard, and cleaned up everything. Very happy with how it turned out.",
      rating: 5
    },
    {
      name: "Tom D.",
      location: "Caldwell, ID",
      service: "House Demolition",
      text: "Tearing down a house is a big deal, and these guys handled it professionally from start to finish. They knew what they were doing, had all the right equipment, and didn't cut any corners. Highly recommend.",
      rating: 5
    },
    {
      name: "Lisa P.",
      location: "Boise, ID",
      service: "Interior Demolition",
      text: "Gut remodel project—they came in and stripped everything down to the studs. Fast, clean work. They were respectful of our neighbors and kept the dust contained. Would hire again.",
      rating: 5
    }
  ]

  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">See what our customers say about working with us.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>We let our work speak for itself. Here's what people have to say about their experience with Boise Demolition Pros.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-dark-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-600 mb-6">Join our list of satisfied customers across the Treasure Valley.</p>
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
