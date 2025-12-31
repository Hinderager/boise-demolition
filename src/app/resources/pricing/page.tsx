import { Metadata } from 'next'
import { Phone, DollarSign, Home, Warehouse, Hammer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Pricing Guide | Boise Demolition Pros',
  description: 'Understanding demolition costs in Boise and the Treasure Valley. Pricing factors, typical ranges, and what affects the cost of your demo project.',
  alternates: { canonical: 'https://boise-demolition.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Pricing Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Understanding what goes into demolition costs.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>People want to know what things cost—we get it. The problem with demolition pricing is that no two projects are exactly alike. A 200-square-foot shed costs different to demo depending on what it's made of, where it sits, and what's around it.</p>

              <p>That said, we can give you a general idea of what affects cost and typical price ranges for common projects.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">The Honest Truth About Pricing</h3>
              <p className="text-gray-600">Anyone who gives you a firm price without seeing your property is guessing. We provide free on-site quotes because that's the only way to give you an accurate number.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Affects Demolition Cost?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Size & Type of Structure</h3>
                <p className="text-gray-600">Bigger structures cost more to demo. A house costs more than a garage, which costs more than a shed. Type of construction matters too—concrete block costs more than wood frame.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Site Access</h3>
                <p className="text-gray-600">Can we get our equipment to it easily? Is it in a tight backyard? Do we need to protect surrounding structures? Access issues add time and complexity.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Materials & Hazards</h3>
                <p className="text-gray-600">Asbestos, lead paint, underground tanks, contaminated soil—any of these require special handling and disposal, which costs more.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Disposal & Cleanup</h3>
                <p className="text-gray-600">Landfill fees vary depending on what we're hauling. Hazardous waste costs more than clean fill. Distance to the disposal site matters too.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Permit Requirements</h3>
                <p className="text-gray-600">City permits, utility disconnects, environmental assessments—these add to the overall cost but they're not optional.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Timeline & Urgency</h3>
                <p className="text-gray-600">Standard scheduling is most cost-effective. Rush jobs or specific timing requirements may cost more due to scheduling constraints.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Typical Price Ranges</h2>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <Hammer className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Small Structures (Sheds, Small Decks)</h3>
                    <p className="text-gray-600 mb-2">Typical range: $500 - $2,000</p>
                    <p className="text-gray-600 text-sm">Small, accessible structures with straightforward disposal. Usually completed in a day.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <Home className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Medium Structures (Garages, Large Decks, Pools)</h3>
                    <p className="text-gray-600 mb-2">Typical range: $3,000 - $8,000</p>
                    <p className="text-gray-600 text-sm">Larger outbuildings, attached garages, in-ground pools. May take 1-3 days depending on complexity.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <Home className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Residential Houses</h3>
                    <p className="text-gray-600 mb-2">Typical range: $8,000 - $25,000+</p>
                    <p className="text-gray-600 text-sm">Full house demolition including foundation removal. Price varies widely based on size, construction type, and site conditions. Typically 3-7 days.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <Warehouse className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Commercial Buildings</h3>
                    <p className="text-gray-600 mb-2">Varies significantly - custom quote required</p>
                    <p className="text-gray-600 text-sm">Commercial demo depends on building size, construction type, environmental factors, and site logistics. Always requires detailed assessment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What's Included in Our Quotes</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] font-bold">•</span>
                  <span>Labor and equipment for complete demolition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] font-bold">•</span>
                  <span>Permit fees and paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] font-bold">•</span>
                  <span>Debris removal and disposal fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] font-bold">•</span>
                  <span>Site cleanup and grading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] font-bold">•</span>
                  <span>Insurance and licensing costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Get an Accurate Quote</h2>
              <p className="text-gray-600 mb-6">Every project is different. Let us take a look at your property and give you a real number you can count on.</p>
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
