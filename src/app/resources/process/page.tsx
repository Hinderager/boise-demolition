import { Metadata } from 'next'
import { Phone, ClipboardCheck, FileText, HardHat, Truck, Sparkles, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Demolition Process | Boise Demolition Pros',
  description: 'Step-by-step guide to our demolition process. From initial consultation to final cleanup, here is what to expect when you hire Boise Demolition Pros.',
  alternates: { canonical: 'https://boise-demolition.com/resources/process' },
}

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Demolition Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What to expect from start to finish.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Demolition isn't rocket science, but it does need to be done in a specific order and with proper planning. Here's how we approach every project, from the first phone call to the final cleanup.</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <Phone className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">1. Initial Contact & Consultation</h2>
                  <p className="text-gray-600 mb-3">You call us or fill out our contact form. We'll ask some basic questions about what you want demolished, where it's located, and when you'd like to have it done.</p>
                  <p className="text-gray-600">If it sounds like a straightforward project, we'll schedule a time to come look at the property. If it's complex, we might ask a few more questions first.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <ClipboardCheck className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">2. On-Site Assessment</h2>
                  <p className="text-gray-600 mb-3">We come to your property and take a look. We'll measure the structure, check for any complications (tight access, asbestos, underground utilities), and assess what equipment we'll need.</p>
                  <p className="text-gray-600 mb-3">This usually takes 15-30 minutes. We'll answer any questions you have and talk through the timeline.</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-600 italic">What we're looking for: Structure size and type, construction materials, site access, proximity to other buildings, utility locations, potential hazards, disposal requirements.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <FileText className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">3. Quote & Agreement</h2>
                  <p className="text-gray-600 mb-3">We'll send you a written quote that includes everything: labor, equipment, permits, disposal, cleanup. If you're good with the price and timeline, we'll send you a simple service agreement to sign.</p>
                  <p className="text-gray-600">No pressure, no hard sell. If you want to think about it or get other quotes, that's fine.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">4. Pre-Demolition Preparation</h2>
                  <p className="text-gray-600 mb-3">Once you sign the agreement, we handle the administrative stuff:</p>
                  <ul className="space-y-2 text-gray-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Apply for and obtain demolition permit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Coordinate asbestos inspection if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Schedule equipment and crew</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Arrange disposal logistics</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-4 mt-4">
                    <p className="text-sm text-gray-600"><strong>Your responsibility:</strong> You'll need to contact your utility companies to disconnect gas, electric, water, and sewer before we start. We'll give you a checklist and timeline.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <HardHat className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">5. Demolition Day</h2>
                  <p className="text-gray-600 mb-3">We show up with the crew and equipment. Depending on the project size, demolition might take a few hours or several days.</p>
                  <p className="text-gray-600 mb-3">Our process:</p>
                  <ul className="space-y-2 text-gray-600 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Set up safety perimeter and signage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Protect any areas that need protecting (landscaping, driveways, adjacent structures)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Systematically demolish the structure (typically starting from the roof down)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Remove foundation if required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC845] font-bold">•</span>
                      <span>Separate materials for recycling when possible</span>
                    </li>
                  </ul>
                  <p className="text-gray-600">You don't need to be there, but you're welcome to stop by and check on progress.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <Truck className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">6. Debris Removal</h2>
                  <p className="text-gray-600 mb-3">As we work, we load debris into trucks and haul it to the appropriate disposal facilities. Metal, concrete, and clean wood often get recycled. Everything else goes to the landfill.</p>
                  <p className="text-gray-600">This is all included in your quote—you don't pay extra for hauling or disposal.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">7. Site Cleanup & Grading</h2>
                  <p className="text-gray-600 mb-3">Once everything's demolished and hauled away, we clean up the site. We'll rake out debris, remove nails and screws, and do basic grading so you're left with a usable space.</p>
                  <p className="text-gray-600 mb-3">If you're planning to build on the site, you might want additional grading or excavation—we can do that too, or you can hire your builder to handle it.</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-600">Our cleanup includes removing all visible debris and leaving the site in a neat condition. If you want topsoil, seeding, or landscaping, that's a separate service.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#FFC845] rounded-full p-4 flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-dark-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-3">8. Final Walkthrough & Payment</h2>
                  <p className="text-gray-600 mb-3">We'll walk the site with you to make sure everything's done to your satisfaction. If there's anything we missed, we'll take care of it.</p>
                  <p className="text-gray-600">Once you're happy with the work, we'll send you the final invoice. We accept checks, cash, or credit cards.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Timeline Expectations</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Small projects (sheds, decks):</strong> Often completed in 1 day</p>
                <p><strong>Medium projects (garages):</strong> Typically 1-2 days</p>
                <p><strong>Large projects (houses):</strong> Usually 3-7 days</p>
                <p><strong>Commercial projects:</strong> Varies widely based on size and complexity</p>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">These are rough estimates. We'll give you a specific timeline when we quote your project.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">Let's talk about your project and walk through the process together.</p>
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
