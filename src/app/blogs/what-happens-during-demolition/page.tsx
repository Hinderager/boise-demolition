import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HardHat, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Actually Happens During a Demolition Project in Boise? | Demolition Pros',
  description: 'Step-by-step breakdown of the demolition process from initial assessment to final cleanup. Here\'s what Boise homeowners can expect when tearing down a structure.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs/what-happens-during-demolition',
  },
}

export default function WhatHappensDuringDemolition() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/demolition-process-boise.webp"
          alt="Demolition Process in Boise"
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
            What Actually Happens During a Demolition Project?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If you've never had anything demolished, the process might seem like a mystery. Trucks show up, things get loud, and suddenly there's a pile of rubble where a building used to be.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              But there's a lot more to it than just knocking things down. Professional demolition follows a specific sequence that keeps everyone safe and ensures the job is done right.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what actually happens when you hire a demolition crew for your Boise area project.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1: Assessment and Planning */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Phase 1: Assessment and Planning
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before anything gets torn down, we need to understand exactly what we're dealing with.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Site visit and evaluation.</strong> We walk through the property to assess the structure, note access points for equipment, identify potential hazards, and understand the scope of work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Age and material assessment.</strong> Older Boise buildings (pre-1985) require asbestos testing. We also identify construction types—wood frame, concrete, masonry—which affects equipment needs and timeline.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Permit requirements.</strong> Based on the project type and location, we determine what permits are needed from the City of Boise, Ada County, or other jurisdictions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Develop a demolition plan.</strong> This outlines the sequence of work, safety protocols, equipment needed, and debris handling. Larger or more complex projects require more detailed planning.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2: Pre-Demolition Work */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Phase 2: Pre-Demolition Preparation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A lot happens before the first wall comes down.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utility disconnection.</strong> All utilities—electricity, gas, water, sewer—must be properly disconnected. Not just turned off at the breaker, but disconnected at the source by the utility companies. This is a safety requirement and part of the permit process.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hazardous material abatement.</strong> If asbestos, lead paint, or other hazardous materials were found during assessment, licensed abatement contractors remove them before general demolition. This is required by law and protects everyone's health.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Soft strip (if needed).</strong> For some projects, we remove salvageable items first—fixtures, doors, windows, copper piping. This is called soft stripping and can reduce costs if materials have value.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Site preparation.</strong> We set up barriers, ensure safe access for equipment, and take steps to control dust and debris. Neighbors may be notified depending on the project size and location.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3: The Actual Demolition */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Phase 3: The Actual Demolition
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is what most people picture when they think of demolition. But even this "destruction" phase follows careful procedures.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Demolition sequence.</strong> We don't just start swinging. The structure is taken apart in a planned sequence that maintains stability and safety throughout. Typically this means working from top to bottom and from weakest to strongest elements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Equipment used.</strong> Depending on the project, we might use excavators with demolition attachments, skid steers, hand tools, or a combination. Smaller residential jobs often use smaller equipment to minimize site impact.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dust control.</strong> Water is often applied to materials during demolition to control dust. This is especially important in residential areas and is sometimes required by permit.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Material separation.</strong> As we work, we separate materials when possible. Concrete, metal, wood, and other materials may go to different destinations based on recycling options and disposal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How Long Does Each Phase Take?
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              For a typical Boise residential demolition (house, garage, outbuilding):
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Assessment and permits:</strong> 1-3 weeks depending on permit processing times and whether hazmat testing is needed</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Utility disconnection:</strong> 1-2 weeks (utility companies have their own schedules)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hazmat abatement (if needed):</strong> 1-5 days depending on scope</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Actual demolition:</strong> 1-3 days for most residential structures</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cleanup and debris removal:</strong> Usually same day or next day</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The demolition itself is usually the quickest part. Most of the time goes to preparation and coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 4: Debris Removal and Cleanup */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Phase 4: Debris Removal and Cleanup
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The building's down—now what? A lot of material needs to go somewhere.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Loading debris.</strong> Demolition debris is loaded into trucks for transport. For larger projects, we may have roll-off containers on site throughout the demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hauling to appropriate facilities.</strong> Different materials go different places. Concrete might go to a recycling facility. Mixed debris goes to appropriate transfer stations or landfills. We handle disposal according to Ada County and Idaho regulations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Site grading.</strong> Once debris is removed, we typically grade the site to leave it level and clean. The extent depends on your plans for the property.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Final inspection.</strong> Many demolition permits require a final inspection. We coordinate with inspectors to close out permits properly.
            </p>
          </div>
        </div>
      </section>

      {/* What You See vs What Happens */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What You See vs. What's Actually Happening
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              From the outside, demolition day looks chaotic. But there's method to what might look like madness:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Equipment positioning isn't random.</strong> Where we put machines matters for safety, efficiency, and protecting surrounding property. Operators are constantly aware of swing radius, load limits, and escape routes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Workers aren't just standing around.</strong> Team members have specific roles—spotters watching for hazards, people managing debris flow, others preparing areas for the next phase.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pauses are intentional.</strong> Sometimes we stop to reassess as conditions change. A wall might not fall as expected, or we might find something that requires attention before continuing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>The noise has patterns.</strong> Different sounds indicate different activities. Experienced crews work in rhythms that maximize efficiency while maintaining safety.
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
              Demolition involves more planning and coordination than most people realize. The actual knocking-down is just one part of a larger process that includes assessment, permits, safety preparation, and proper cleanup.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When you hire a professional demolition contractor in Boise, you're paying for all of it—the expertise to plan properly, the equipment to work efficiently, and the knowledge to handle whatever comes up.
            </p>

            <p className="text-gray-600 leading-relaxed">
              That's what separates professional demolition from just breaking things. The end result might look the same—an empty lot—but the path to get there matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Have Questions About Your Project?
            </h2>
            <p className="text-gray-600 mb-8">
              We're happy to walk you through what to expect for your specific demolition project in Boise, Meridian, Nampa, or anywhere in the Treasure Valley. Call for a free estimate.
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
