import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Residential Demolition',
    description: 'From complete house teardowns to partial structure removal, we handle residential demolition projects of all sizes. Our experienced crew works safely and efficiently, minimizing disruption to neighbors. All permits, utilities coordination, and debris removal handled for you.',
    image: '/generated/shed-demolition.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Shed & Garage Demolition',
    description: 'Old sheds, detached garages, carports, and outbuildings taken down and hauled away. We remove the structure, foundation if needed, and leave your property clean and ready for your next project. Fast, affordable, and hassle-free.',
    image: '/generated/deck-removal.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Interior Demolition',
    description: 'Gut renovations, kitchen and bathroom tearouts, flooring removal, and wall demolition. We carefully remove what needs to go while protecting what stays. Perfect for remodeling projects where you need a clean slate before construction begins.',
    image: '/generated/interior-demo.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Commercial Demolition',
    description: 'Office buildings, retail spaces, warehouses, and industrial facilities. We handle commercial demolition with the professionalism your project demands. Fully insured, permit assistance available, and complete debris removal included.',
    image: '/generated/fence-teardown.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of the Treasure Valley, we provide professional demolition and debris removal services!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
