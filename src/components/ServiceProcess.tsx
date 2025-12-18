import { Phone, ClipboardCheck, Truck, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'Give Us a Call',
    description: 'Tell us what you\'re dealing with. We\'ll listen and set up a time to come see the property. No charge for the estimate.',
  },
  {
    icon: ClipboardCheck,
    number: '2',
    title: 'We Come Take a Look',
    description: 'We\'ll walk through with you, figure out what needs to happen, and give you a price. No hidden fees, no surprises.',
  },
  {
    icon: Truck,
    number: '3',
    title: 'We Do the Cleanup',
    description: 'Our crew sorts through everything carefully. We donate what we can and dispose of the rest properly.',
  },
  {
    icon: Sparkles,
    number: '4',
    title: 'Deep Clean (Optional)',
    description: 'Once everything\'s out, we can deep clean the space so it\'s actually livable again.',
  },
]

export function ServiceProcess() {
  return (
    <section className="py-16 bg-gradient-to-br from-dark-blue to-gunmetal text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We keep the process simple. Here&apos;s what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile and last item) */}
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20" />

              <div className="relative bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-brand-yellow text-dark-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-4">
                  <step.icon className="w-full h-full text-brand-yellow" />
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
