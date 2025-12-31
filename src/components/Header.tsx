'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serviceCategories = [
  {
    name: 'Residential Demolition',
    href: '/services/residential-demolition',
    services: [
      { name: 'House Demolition', href: '/services/residential-demolition/house-demolition' },
      { name: 'Garage Demolition', href: '/services/residential-demolition/garage-demolition' },
      { name: 'Shed Removal', href: '/services/residential-demolition/shed-removal' },
      { name: 'Deck Removal', href: '/services/residential-demolition/deck-removal' },
    ]
  },
  {
    name: 'Commercial Demolition',
    href: '/services/commercial-demolition',
    services: [
      { name: 'Building Demolition', href: '/services/commercial-demolition/building-demolition' },
      { name: 'Warehouse Demolition', href: '/services/commercial-demolition/warehouse-demolition' },
      { name: 'Strip Mall Demolition', href: '/services/commercial-demolition/strip-mall-demolition' },
    ]
  },
  {
    name: 'Interior Demolition',
    href: '/services/interior-demolition',
    services: [
      { name: 'Kitchen Demolition', href: '/services/interior-demolition/kitchen-demolition' },
      { name: 'Bathroom Demolition', href: '/services/interior-demolition/bathroom-demolition' },
      { name: 'Basement Demolition', href: '/services/interior-demolition/basement-demolition' },
    ]
  },
  {
    name: 'Specialty Demolition',
    href: '/services/specialty-demolition',
    services: [
      { name: 'Pool Demolition', href: '/services/specialty-demolition/pool-demolition' },
      { name: 'Concrete Removal', href: '/services/specialty-demolition/concrete-removal' },
      { name: 'Foundation Removal', href: '/services/specialty-demolition/foundation-removal' },
    ]
  },
]

const serviceAreas = [
  'Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle'
]

const resources = [
  { name: 'Demolition Process', href: '/demolition-process' },
  { name: 'Permits & Regulations', href: '/permits' },
  { name: 'Safety Practices', href: '/safety' },
  { name: 'Blog', href: '/blogs' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
    setCloseTimeout(timeout)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:pt-3 lg:px-4">
      <div className="lg:container lg:mx-auto lg:max-w-screen-2xl">
        <div className="bg-[#10477d] lg:rounded-lg border-b-2 lg:border-2 border-[#1e3a5f] shadow-xl px-2 sm:px-4 md:px-6 lg:px-8 flex items-center h-14 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center lg:flex-1 flex-1 justify-start">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              <span className="text-[#FFC845]">Boise</span> Demolition
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Services Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.href}>
                        <Link
                          href={category.href}
                          className="font-bold text-dark-blue hover:text-[#ff6b35] block mb-2"
                        >
                          {category.name}
                        </Link>
                        <ul className="space-y-1">
                          {category.services.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href="/services"
                      className="text-dark-blue font-semibold hover:text-[#ff6b35]"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('areas')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Service Areas</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'areas' && (
                <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="space-y-2">
                    {serviceAreas.map((area) => (
                      <li key={area}>
                        <Link href={`/cities-served/${area.toLowerCase()}`} className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                          {area}, Idaho
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="space-y-2">
                    {resources.map((resource) => (
                      <li key={resource.href}>
                        <Link href={resource.href} className="text-sm text-gray-600 hover:text-[#ff6b35] transition-colors">
                          {resource.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Phone Number - Call Now button on mobile, Phone number on desktop */}
          <div className="flex items-center flex-1 justify-center lg:justify-end">
            {/* Mobile: Call Now Button */}
            <a
              href="tel:2089435231"
              className="lg:hidden bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold px-4 py-1.5 rounded-lg text-sm"
            >
              Call Now
            </a>
            {/* Desktop: Phone Number */}
            <a
              href="tel:2089435231"
              className="hidden lg:flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors font-bold text-lg xl:text-xl whitespace-nowrap"
            >
              <Phone className="h-5 w-5 xl:h-6 xl:w-6" />
              <span>(208) 943-5231</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center flex-1 justify-end lg:hidden">
            <button
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-[#10477d] border-b-2 border-[#1e3a5f] max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-white font-semibold hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              <span className="text-white/60 text-sm font-medium pt-2">Services</span>
              {serviceCategories.map((category) => (
                <div key={category.href}>
                  <Link
                    href={category.href}
                    className="text-white font-medium hover:text-gray-200 pl-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}

              <span className="text-white/60 text-sm font-medium pt-2">Service Areas</span>
              {serviceAreas.map((area) => (
                <Link key={area} href={`/cities-served/${area.toLowerCase()}`} className="text-white/90 hover:text-white pl-4" onClick={() => setIsMobileMenuOpen(false)}>
                  {area}
                </Link>
              ))}
              <span className="text-white/60 text-sm font-medium pt-2">Resources</span>
              {resources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="text-white/90 hover:text-white pl-4" onClick={() => setIsMobileMenuOpen(false)}>
                  {resource.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold w-full">
                  <a href="tel:2089435231">Call Now</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
