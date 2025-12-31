import { Metadata } from 'next'
import { Phone, FileText, AlertCircle, CheckCircle, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Permits in Boise & Treasure Valley | Boise Demolition Pros',
  description: 'Understanding demolition permit requirements in Boise, Meridian, Nampa, and across the Treasure Valley. What you need to know about permits and regulations.',
  alternates: { canonical: 'https://boise-demolition.com/resources/permits' },
}

export default function PermitsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Permits & Regulations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What you need to know about permits in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>If you're planning to tear something down, you probably need a permit. It's not the most exciting part of a demo project, but it's important—and it's the law.</p>

              <p>The good news? We handle all the permit paperwork for you. We know what each city requires, we've done this hundreds of times, and we'll make sure everything's filed correctly.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#FFC845] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Why You Can't Skip the Permit</h3>
                  <p className="text-gray-600">Working without a permit can result in fines, stop-work orders, and complications when you try to sell your property. It's not worth the risk. Just get the permit.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">When You Need a Permit</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-dark-blue mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Usually Requires a Permit
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Houses and residential buildings</li>
                  <li>• Attached garages</li>
                  <li>• Commercial buildings</li>
                  <li>• Structures with foundations</li>
                  <li>• Buildings with utilities connected</li>
                  <li>• Structures over a certain square footage (varies by city)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-dark-blue mb-3">May Not Need a Permit</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Small, detached sheds (under 120 sq ft in most cities)</li>
                  <li>• Fences (sometimes)</li>
                  <li>• Temporary structures</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">Note: Rules vary by city. When in doubt, assume you need one.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Permit Requirements by City</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">City of Boise</h3>
                    <p className="text-gray-600 mb-2">Requires permits for demolition of most structures. Application includes site plan, utility disconnection confirmation, and asbestos survey for buildings built before 1980.</p>
                    <p className="text-sm text-gray-500">Processing time: 5-10 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">City of Meridian</h3>
                    <p className="text-gray-600 mb-2">Permit required for demolition of structures over 120 square feet or structures with permanent foundations. Must provide proof of utility disconnection.</p>
                    <p className="text-sm text-gray-500">Processing time: 3-7 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">City of Nampa</h3>
                    <p className="text-gray-600 mb-2">Demolition permits required for all structures attached to the property and most detached structures. Asbestos survey required for pre-1980 buildings.</p>
                    <p className="text-sm text-gray-500">Processing time: 5-10 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 className="w-8 h-8 text-[#FFC845] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Other Treasure Valley Cities</h3>
                    <p className="text-gray-600 mb-2">Caldwell, Eagle, Kuna, Star, and other cities have their own requirements. We're familiar with all local regulations and will handle whatever your city requires.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">The Permit Process</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFC845] text-dark-blue font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Site Assessment</h3>
                  <p className="text-gray-600">We visit your property, measure the structure, take photos, and note any special conditions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFC845] text-dark-blue font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Application Preparation</h3>
                  <p className="text-gray-600">We prepare the permit application with all required documentation (site plans, utility confirmations, etc.).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFC845] text-dark-blue font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Permit Submission</h3>
                  <p className="text-gray-600">We submit the application to the appropriate city department and pay the permit fees (included in your quote).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFC845] text-dark-blue font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Permit Approval</h3>
                  <p className="text-gray-600">The city reviews and approves the permit. We'll keep you updated on the status.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFC845] text-dark-blue font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Schedule Work</h3>
                  <p className="text-gray-600">Once the permit is issued, we schedule your demolition and get to work.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Other Requirements</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Utility Disconnection</h3>
                  <p>All utilities must be disconnected before demo begins. You'll need to contact your utility providers (gas, electric, water, sewer) to schedule shutoffs. We can guide you through this process.</p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Asbestos Survey</h3>
                  <p>Buildings constructed before 1980 typically require an asbestos survey before demolition. We coordinate with certified asbestos inspectors if needed.</p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Environmental Review</h3>
                  <p>Some properties require environmental assessments, especially if there's contamination, underground storage tanks, or other hazards.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">We Handle the Paperwork</h2>
              <p className="text-gray-600 mb-6">Permits aren't complicated, but they are specific. Let us deal with the red tape so you don't have to.</p>
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
