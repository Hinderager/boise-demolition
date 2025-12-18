import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const serviceAreas = [
  {
    name: 'Boise',
    href: '/boise',
    description: 'Idaho\'s capital city. Full hoarding cleanup services in Downtown, North End, Bench, and all Boise neighborhoods.',
  },
  {
    name: 'Meridian',
    href: '/meridian',
    description: 'Idaho\'s fastest-growing city. Serving all Meridian communities including Ten Mile, Lochsa Falls, and Paramount.',
  },
  {
    name: 'Nampa',
    href: '/nampa',
    description: 'Canyon County\'s largest city. Hoarding cleanup services throughout Nampa and surrounding areas.',
  },
  {
    name: 'Caldwell',
    href: '/caldwell',
    description: 'Serving all of Caldwell including downtown, residential areas, and rural properties.',
  },
  {
    name: 'Eagle',
    href: '/eagle',
    description: 'Discreet hoarding cleanup services in Eagle, including estates and large properties.',
  },
]

export function ServiceAreas() {
  return (
    <section className="py-16 bg-fog">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
            Hoarding Cleanup Service Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide professional hoarding cleanup services throughout the Treasure Valley. Click on your city to learn more.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-light-blue"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-light-blue/20 transition-colors">
                  <MapPin className="w-6 h-6 text-light-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                    {area.name}, Idaho
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-light-blue" />
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Don&apos;t see your city listed? We likely serve your area too!{' '}
            <a href="tel:2083611982" className="text-dark-blue font-bold underline hover:text-light-blue">
              Call (208) 361-1982
            </a>
            {' '}to confirm service availability.
          </p>
        </div>
      </div>
    </section>
  )
}
