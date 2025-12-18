import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldAlert, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Safety: What Boise Homeowners Should Know | Demolition Pros',
  description: 'Demolition involves real risks that many homeowners underestimate. Here\'s what to expect and how professionals keep everyone safe on Treasure Valley projects.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs/demolition-safety-what-homeowners-should-know',
  },
}

export default function DemolitionSafetyWhatHomeownersShouldKnow() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/demolition-safety-boise.webp"
          alt="Demolition Safety for Boise Homeowners"
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
            Demolition Safety: What Homeowners Should Know
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Demolition looks straightforward until something goes wrong. Walls don't always fall where you expect. Dust contains things you shouldn't breathe. Structures can shift unexpectedly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional demolition crews deal with these risks daily. They know what to look for and how to manage it. But as a homeowner hiring a demolition service, you should understand the safety considerations involved.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what we think about when approaching any demolition project in the Boise area.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Hazards */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Hidden Hazards in Older Boise Homes
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The Treasure Valley has homes from every era, and older buildings come with hazards you can't always see:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos.</strong> Common in homes built before 1985, asbestos was used in insulation, floor tiles, roofing, siding, and more. Disturbing asbestos-containing materials releases fibers that cause serious lung disease. Idaho requires testing before demolition of pre-1985 structures.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lead paint.</strong> Any home built before 1978 likely contains lead paint. Demolition creates lead dust that can contaminate the area and pose health risks, especially for children.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Old wiring.</strong> Knob-and-tube wiring, aluminum wiring, and other old electrical systems can be live even when you think power is off. Improper handling causes fires and electrocution.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Gas lines.</strong> Old gas lines may still be pressurized even after you think they're disconnected. Hitting a gas line during demolition can cause explosions.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Risks */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Structural Risks During Demolition
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Buildings don't always come apart predictably:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Partial collapses.</strong> Removing one section can cause other sections to fall unexpectedly. Professional demolition involves understanding load paths and sequencing the work safely.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hidden rot or damage.</strong> Structures that look solid may have hidden water damage, termite damage, or rot that makes them unstable. We've seen floors collapse and walls give way without warning because of unseen damage.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Heavy materials.</strong> Concrete, brick, and lumber are heavy. Improperly supported debris can shift and fall. Workers need to know how to work around and with heavy materials safely.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Adjacent structures.</strong> Partial demolition near remaining structures requires care to avoid damaging what's staying. This is especially important in attached homes or when removing additions.
            </p>
          </div>
        </div>
      </section>

      {/* How Professionals Handle Safety */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How Professional Crews Handle Safety
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Here's what a safety-conscious demolition process looks like:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Pre-demolition assessment.</strong> Walking through the structure to identify hazards, understand the building's construction, and plan the demolition sequence</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hazardous material testing.</strong> Asbestos and lead testing when required, with proper abatement before demolition begins</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Utility disconnection verification.</strong> Confirming all utilities are actually disconnected, not just supposedly turned off</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Site preparation.</strong> Barriers, dust control, and neighbor notification as appropriate</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Proper personal protective equipment.</strong> Hard hats, eye protection, respiratory protection, and appropriate footwear</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Controlled demolition sequence.</strong> Taking things apart in an order that maintains stability throughout the process</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              None of this is optional. It's how professionals work without getting hurt or causing damage.
            </p>
          </div>
        </div>
      </section>

      {/* DIY Demolition Risks */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Why DIY Demolition Can Be Dangerous
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We occasionally get calls from homeowners who started a demolition project and realized they were in over their heads. Here's what usually goes wrong:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Underestimating the work.</strong> Knocking down a wall looks easy on TV. In reality, it's heavy, dusty, dangerous work that generates far more debris than people expect.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Not knowing what's in the wall.</strong> Electrical wires, plumbing, HVAC ducts, and structural supports often run through walls. Hitting live wires or water lines mid-demolition creates serious problems.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No respiratory protection.</strong> Demolition dust contains all sorts of things you shouldn't breathe. Standard dust masks aren't adequate for many situations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Improper tool use.</strong> Sledgehammers, reciprocating saws, and other demo tools cause serious injuries when used improperly. We see a lot of hand and arm injuries from people who rented tools without proper training.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>No disposal plan.</strong> People tear things apart and then realize they have nowhere to put the debris. It sits in their yard or garage while they figure it out.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What to Expect During Professional Demolition
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When we're working on your property, here's what you can expect:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Noise.</strong> Demolition is loud. If we're working near neighbors, we'll typically notify them in advance and stick to reasonable hours.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dust.</strong> We control dust as much as possible, but some is inevitable. We may wet materials to reduce dust, and we take precautions to prevent dust from entering areas that should stay clean.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Debris.</strong> There will be a lot of it. We handle loading and hauling as part of the job—you shouldn't have piles sitting around.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Stay clear of the work area.</strong> For your safety, we'll establish work zones where you shouldn't enter during demolition. This isn't being territorial—it's keeping you safe.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Communication.</strong> We'll let you know what's happening, what to expect, and when the work will be complete. No surprises.
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
              Demolition involves real risks that professionals manage through training, experience, and proper procedures.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When you hire a demolition contractor, ask about their safety practices. Do they have insurance? Do they do hazardous material testing? How do they handle dust and debris? A legitimate contractor will have clear answers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The goal is to get your demolition project done without anyone getting hurt and without creating problems for your property. That takes more than just swinging a sledgehammer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Safe, Professional Demolition?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle demolition projects throughout Boise, Meridian, Nampa, and the Treasure Valley with proper safety protocols. Call for a free estimate.
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
