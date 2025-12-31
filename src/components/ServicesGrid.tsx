'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, Building2, Hammer, Truck } from 'lucide-react'
import { useQuoteForm } from '@/context/QuoteFormContext'

const services = [
  {
    icon: Home,
    title: 'Interior Demolition',
    description: 'Kitchen tearouts, bathroom demo, flooring removal, wall removal. We gut it so your contractor can rebuild it.',
  },
  {
    icon: Building2,
    title: 'Structural Demolition',
    description: 'Complete building teardown—houses, garages, sheds, barns. We handle permits, utilities, and safe demolition.',
  },
  {
    icon: Hammer,
    title: 'Concrete & Deck Removal',
    description: 'Driveways, patios, sidewalks, foundations, old decks. We break it up, haul it away, and leave the site clean.',
  },
  {
    icon: Truck,
    title: 'Selective Demolition',
    description: 'Remove only what needs to go. Perfect for renovations - we protect what stays and demo what does not.',
  },
]

export function ServicesGrid() {
  const { mobileFormExpanded, desktopFormExpanded } = useQuoteForm()

  return (
    <section id="services" className={`${mobileFormExpanded ? 'mt-0 pt-[4.5rem]' : '-mt-14 pt-[4.5rem]'} ${desktopFormExpanded ? 'md:mt-0 md:pt-36' : 'md:mt-0 md:pt-12'} pb-20 bg-gradient-to-b from-transparent via-blue-50/30 to-slate-100/50 relative overflow-hidden`}>
      {/* Gradient dot pattern background */}
      <div className="absolute inset-0 hidden md:block" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 10%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 10%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />
      {/* Mobile dot pattern */}
      <div className="absolute inset-0 md:hidden" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Demolition Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From partial tearouts to complete demolition—we handle it all
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group shadow-2xl hover:shadow-[0_20px_50px_rgba(16,_71,_125,_0.7)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-dark-blue flex flex-col"
                style={{
                  boxShadow: '0 10px 30px rgba(16, 71, 125, 0.3), 0 5px 15px rgba(16, 71, 125, 0.2)'
                }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-dark-blue to-[#2064aa] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-dark-blue mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <CardDescription className="text-base text-gray-600 flex-grow">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2089435231">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 943-5231</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
