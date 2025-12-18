import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare Your Property for Demolition in Boise | Demolition Pros',
  description: 'A little prep work before the demo crew arrives makes everything go smoother. Here\'s what Boise property owners should handle before demolition day.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs/preparing-property-for-demolition',
  },
}

export default function PreparingPropertyForDemolition() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/preparing-demolition-boise.webp"
          alt="Preparing Property for Demolition in Boise"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How to Prepare Your Property for Demolition
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've scheduled the demolition. The permits are handled. Now what? A little preparation before the crew arrives makes the whole process go smoother—and can save you money.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Some of this you can do yourself. Some requires coordination with professionals. Here's a practical checklist for Boise property owners preparing for demolition.
            </p>
          </div>
        </div>
      </section>

      {/* Remove Personal Property */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Remove All Personal Property
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              This sounds obvious, but you'd be surprised how often people leave things behind.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Walk through every room</strong> and remove anything you want to keep. Check closets, attics, basements, crawl spaces, garages, and outbuildings.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check less obvious spots:</strong> behind water heaters, in ceiling access panels, under deck structures, in tool sheds attached to the main building.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Important documents.</strong> People sometimes store papers in strange places. If there's any chance of important documents being in the structure, search thoroughly.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Sentimental items.</strong> Old photos, family heirlooms, and other irreplaceable items have been lost to demolition because someone assumed they'd already been removed. Double-check.
            </p>
          </div>
        </div>
      </section>

      {/* Utilities */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Coordinate Utility Disconnections
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              All utilities must be properly disconnected before demolition. This isn't optional—it's a safety requirement and usually part of the permit process.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electricity (Idaho Power).</strong> Schedule disconnection and meter removal. This needs to happen before demo, and there's often a waiting period.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Natural gas (Intermountain Gas).</strong> Gas lines need to be capped at the main by the utility company. Never rely on just turning off a valve—lines must be properly capped.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Water.</strong> City of Boise or your water district needs to shut off water at the meter. You'll likely need a permit for this.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sewer.</strong> Sewer connections may need to be capped properly per city requirements.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Other utilities.</strong> Cable, phone, and internet lines should be disconnected. Propane tanks need to be removed and lines capped.
            </p>
          </div>
        </div>
      </section>

      {/* Hazardous Materials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Handle Hazardous Materials
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If your building dates from before 1985, asbestos testing is typically required before demolition in Idaho.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos inspection.</strong> A certified inspector tests suspected materials. If asbestos is found, it must be removed by licensed abatement contractors before general demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lead paint.</strong> Pre-1978 buildings likely contain lead paint. While it doesn't always require pre-removal like asbestos, your demolition contractor should know about it and handle demo appropriately.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Chemical storage.</strong> Remove any paint, solvents, pesticides, oils, or other chemicals stored in the building. These can't go in with regular demolition debris.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Fuel tanks.</strong> Underground or above-ground fuel tanks require special handling and often have their own permit requirements. This includes old heating oil tanks.
            </p>
          </div>
        </div>
      </section>

      {/* Neighbor Communication */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Notify Neighbors
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Demolition is loud and dusty. Good neighbor relations go a long way:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Let them know it's happening.</strong> A quick conversation or note explaining the work and timeline prevents surprise complaints</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Share the schedule.</strong> If neighbors know it's only one or two days, they're more tolerant than if they don't know how long it will last</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Give your contact info.</strong> If they have concerns during the work, it's better they call you than the city</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Note any concerns.</strong> If neighbors mention specific worries—shared fences, parked cars, pets—pass these to the demolition crew</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Some Boise neighborhoods require formal notification or HOA approval. Check if this applies to your property.
            </p>
          </div>
        </div>
      </section>

      {/* Site Preparation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Prepare the Site
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Help ensure the demolition crew can work efficiently:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear access paths.</strong> Remove vehicles, lawn equipment, and other items that might block access for trucks and equipment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mark property lines.</strong> If there's any question about property boundaries, especially near adjacent structures, mark them clearly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Identify what stays.</strong> If there are trees, fences, outbuildings, or other features you want to keep, point them out to the crew and consider marking them.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Note underground features.</strong> Septic tanks, wells, buried fuel tanks, sprinkler systems, and other underground elements should be identified before heavy equipment starts working.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Call 811.</strong> Dial 811 to have underground utilities marked. This is free and required before any excavation work in Idaho.
            </p>
          </div>
        </div>
      </section>

      {/* What to Save */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Consider Salvage Opportunities
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before everything comes down, are there items worth salvaging?
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fixtures.</strong> Light fixtures, door hardware, bathroom fixtures, and kitchen elements can have salvage value if in good condition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Building materials.</strong> Old-growth lumber, brick, stone, and vintage flooring can be valuable. Architectural salvage companies sometimes buy these.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliances.</strong> Working appliances can be sold or donated rather than demolished.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Metals.</strong> Copper pipes, wiring, and other metals have scrap value. Your demo contractor may handle this, or you can remove them beforehand.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Good preparation makes demolition go faster and safer. Most of these items are straightforward—it just takes time to handle them.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              A professional demolition contractor will walk you through what needs to happen and can often help coordinate utilities and permits. But clearing personal property and handling hazardous materials typically need to happen before we arrive.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Questions about preparing your Boise property for demolition? Give us a call. We can discuss your specific situation and make sure everything's ready for a smooth demolition day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Planning a Demolition?
            </h2>
            <p className="text-gray-600 mb-8">
              We help Boise, Meridian, Nampa, and Treasure Valley property owners with demolition from start to finish—including preparation guidance. Call for a free estimate.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Demolition Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
