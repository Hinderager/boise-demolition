import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Do You Need a Demolition Permit in Boise? Idaho Requirements | Demolition Pros',
  description: 'The permit question trips up many property owners. Here\'s what Boise and Ada County actually require for demolition projects—and what happens if you skip it.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs/demolition-permits-boise-idaho',
  },
}

export default function DemolitionPermitsBoiseIdaho() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/demolition-permits-boise.webp"
          alt="Demolition Permits in Boise Idaho"
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
            Do You Need a Demolition Permit in Boise?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Quick answer: for most demolition work in Boise and Ada County, yes, you need a permit. But there are exceptions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The permit question trips up a lot of property owners. Some assume they can just tear something down on their own property. Others are told different things by different contractors. Let me clear it up.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what the City of Boise and surrounding Treasure Valley jurisdictions actually require.
            </p>
          </div>
        </div>
      </section>

      {/* When You Need a Permit */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                When You Need a Demolition Permit
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              In the City of Boise, you generally need a demolition permit for:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Complete building demolition.</strong> Tearing down any structure—house, garage, commercial building, shed over a certain size—requires a permit.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Partial structural demolition.</strong> Removing walls, roofs, or other structural elements as part of a renovation often requires permits, especially if they're load-bearing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Connected utility work.</strong> If the demolition involves disconnecting electrical, gas, water, or sewer services, permits and utility coordination are required.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Work in historic districts.</strong> Properties in Boise's historic districts have additional requirements and may need Historic Preservation Commission review.
            </p>
          </div>
        </div>
      </section>

      {/* When You Might Not Need One */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When You Might Not Need a Permit
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some smaller demolition projects may not require permits in Boise, though this varies by jurisdiction:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Small accessory structures.</strong> Sheds under a certain square footage (typically 120 sq ft) may be exempt. But check with the city—rules vary.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Interior non-structural demolition.</strong> Removing cabinets, fixtures, flooring, or non-load-bearing walls during a remodel may not require a separate demolition permit, though the overall remodel might need permits.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fence removal.</strong> Taking down a fence typically doesn't require a permit.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Important caveat:</strong> Just because you might not need a demolition permit doesn't mean you can skip other requirements. Utility disconnections, asbestos testing, and proper debris disposal still apply.
            </p>
          </div>
        </div>
      </section>

      {/* The Permit Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Boise Demolition Permit Process
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Getting a demolition permit in Boise involves several steps:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Step 1: Application.</strong> Submit an application to the City of Boise Planning and Development Services. This includes property information, scope of demolition, and contractor details.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Step 2: Asbestos inspection.</strong> For buildings built before 1985, you typically need an asbestos inspection before demolition can proceed. This is an Idaho DEQ requirement.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Step 3: Utility disconnections.</strong> Schedule disconnections with Idaho Power, Intermountain Gas, and city water/sewer. These must be completed and documented before demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Step 4: Permit issuance.</strong> Once requirements are met and fees are paid, the permit is issued.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Step 5: Final inspection.</strong> After demolition, a final inspection verifies the work was completed properly and the site is safe.
            </p>
          </div>
        </div>
      </section>

      {/* Permit Costs */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Permit Costs and Timeline
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Here's what to expect for Boise demolition permits:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Permit fees:</strong> Typically $100-400 depending on the scope and structure size</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Processing time:</strong> Usually 1-2 weeks for residential demolition permits</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Asbestos inspection:</strong> $200-500 depending on building size and inspector</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Utility disconnection fees:</strong> Vary by utility company</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Plan for the permit process to add 2-4 weeks to your project timeline. Rushing or skipping permits can result in much longer delays—and fines.
            </p>
          </div>
        </div>
      </section>

      {/* Different Jurisdictions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Different Rules in Different Areas
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The Treasure Valley includes multiple jurisdictions, each with slightly different requirements:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Meridian</strong> has its own permitting process through the Community Development Department. Generally similar requirements to Boise, but different forms and fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Nampa and Caldwell</strong> each have their own building departments with specific demolition permit requirements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ada County</strong> (unincorporated areas) processes permits through the county Development Services department.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Canyon County</strong> has separate requirements for properties outside city limits.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Without a Permit */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Happens If You Skip the Permit?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some property owners think they can just demo something and deal with it later. Here's why that's a bad idea:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Stop-work orders.</strong> If the city discovers unpermitted demolition in progress, they can halt work until permits are obtained—often with additional fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fines.</strong> Penalties for unpermitted work can range from hundreds to thousands of dollars.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Title issues.</strong> Unpermitted demolition can create problems when you try to sell the property. Buyers and title companies will discover the unpermitted work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Insurance problems.</strong> If something goes wrong during unpermitted work, your insurance may not cover damages or injuries.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Future building permits.</strong> Want to build something new on the site? Good luck getting permits when records show unpermitted demolition occurred there.
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
              For most demolition work in Boise and the Treasure Valley, you need a permit. The process isn't complicated, but it does take time and proper planning.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              A reputable demolition contractor handles permit coordination as part of the job. We know the requirements, have relationships with the permitting offices, and can usually expedite the process.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Not sure whether your specific project needs a permit? Call the City of Boise Planning and Development Services at (208) 384-3830, or give us a call. We can help you figure out what's required for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Planning a Demolition Project?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle permits as part of our demolition services throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free estimate.
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
