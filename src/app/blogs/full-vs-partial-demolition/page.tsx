import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Full Demolition vs Partial Demolition: Which Do You Need? | Demolition Pros',
  description: 'Sometimes you need to tear everything down. Sometimes just part. Here\'s how Boise property owners can decide which approach makes sense for their project.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs/full-vs-partial-demolition',
  },
}

export default function FullVsPartialDemolition() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/full-partial-demolition.webp"
          alt="Full vs Partial Demolition in Boise"
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
            Full Demolition vs Partial Demolition: Which Do You Need?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Some projects require taking everything down. Others just need targeted removal of specific areas. Understanding the difference helps you plan—and budget—your Boise demolition project correctly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Let's break down when each approach makes sense, what's involved, and the cost implications.
            </p>
          </div>
        </div>
      </section>

      {/* Full Demolition */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Is Full Demolition?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Full demolition means taking down an entire structure—house, garage, commercial building, whatever it is—down to the foundation or completely including the foundation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>When full demolition makes sense:</strong>
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The structure is beyond repair. Foundation problems, severe water damage, structural failure, or extensive pest damage can make renovation impractical. Sometimes starting fresh is cheaper than trying to save what's there.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              You're building something new. Many Boise lots have old, outdated structures that need to go before new construction can happen.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The building doesn't meet current codes. Bringing some older structures up to code costs more than demolition and new construction.
            </p>

            <p className="text-gray-600 leading-relaxed">
              You've acquired a property with a structure you don't want. Inherited homes, purchased lots with existing buildings, or properties with abandoned structures.
            </p>
          </div>
        </div>
      </section>

      {/* Partial Demolition */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Is Partial Demolition?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Partial demolition (also called selective demolition) removes specific portions of a structure while leaving the rest intact. This is more common in renovation projects.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Common partial demolition scenarios:</strong>
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Interior gut.</strong> Removing interior walls, floors, ceilings, and finishes while keeping the exterior shell. Common in whole-house renovations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Addition removal.</strong> Taking off an old addition—sunroom, porch, garage add-on—while keeping the original structure.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Wall removal.</strong> Removing interior walls to open up floor plans. May be load-bearing or non-load-bearing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Room conversion.</strong> Stripping a room (kitchen, bathroom, basement) down to studs before renovation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Outbuilding removal.</strong> Removing one structure (old shed, detached garage) while keeping the main building.
            </p>
          </div>
        </div>
      </section>

      {/* Complexity Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Which Is More Complex?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You might think partial demolition is simpler since you're removing less. That's not always true.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Full demolition</strong> is often more straightforward. You're taking everything down, so there's less concern about protecting remaining structures. The process can move quickly because you don't need to work around what stays.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Partial demolition</strong> requires more precision. You need to protect areas that remain, work around existing utilities, maintain structural integrity, and ensure clean transitions where old meets new.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Removing a wall that's load-bearing, for example, requires temporary supports, careful work around existing framing, and often more cleanup than taking down a whole room.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The skill involved is different. Full demolition is about efficiency and thoroughness. Partial demolition is about precision and protection.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Considerations */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Cost Factors for Each Type
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Both types of demolition involve similar cost categories, but the proportions differ:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Structure size:</strong> More square footage means more work and higher costs in both cases</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Materials involved:</strong> Concrete and masonry cost more to remove than wood framing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hazardous materials:</strong> Asbestos or lead abatement adds significant cost to either type</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Access:</strong> Tight sites or difficult access increase costs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Debris disposal:</strong> Hauling and dump fees are a significant portion of demo costs</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed mb-4">
              <strong>Full demolition</strong> often costs $5-15 per square foot for residential structures in the Boise area. A 1,500 sq ft house might run $7,500-22,500 depending on complexity.
            </p>

            <p className="text-blue-100 leading-relaxed">
              <strong>Partial demolition</strong> is harder to estimate by square foot because scope varies so much. Interior gut of a kitchen might be $2,000-5,000. Removing an addition might be $5,000-15,000. It depends entirely on what's involved.
            </p>
          </div>
        </div>
      </section>

      {/* Permits and Requirements */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Permit Requirements
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Both types typically require permits in Boise and surrounding areas, but the requirements differ:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Full demolition</strong> requires a demolition permit, utility disconnections, asbestos inspection (for pre-1985 buildings), and sometimes neighborhood notification.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Partial demolition</strong> may be covered under a renovation or building permit rather than a separate demolition permit. If you're removing walls, changing the footprint, or affecting structural elements, permits are required.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Even interior-only demolition may require permits if it involves structural changes. Check with the City of Boise or your local jurisdiction before starting work.
            </p>
          </div>
        </div>
      </section>

      {/* Making the Decision */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Decide What You Need
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Consider these questions:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What's the end goal?</strong> New construction on the site requires full demolition. Renovation typically involves partial demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What condition is the structure in?</strong> Severe foundation issues, structural damage, or extensive hazardous materials might make full demolition more practical than selective removal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What's the total project cost?</strong> Compare the cost of partial demolition plus renovation versus full demolition and new construction. Sometimes new construction is actually cheaper.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Do you have historical or sentimental value?</strong> Some structures are worth preserving even if renovation costs more. That's a personal decision.
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
              Full and partial demolition serve different purposes. Full demo clears the slate for new construction. Partial demo supports renovation while preserving parts of the structure.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Neither is inherently better—it depends on your project goals, the building's condition, and the overall economics.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you're not sure which approach makes sense for your Treasure Valley project, we can help you evaluate the options. Sometimes looking at a structure in person makes the right choice clear.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help Deciding?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle both full and partial demolition throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free assessment.
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
