import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, ShieldCheck, FileCheck, Clock } from 'lucide-react'
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge'

interface HeroSectionProps {
  city?: string
  headline?: string
  subheadline?: string
}

export function HeroSection({ city, headline, subheadline }: HeroSectionProps = {}) {
  // Default content for homepage
  const isHomePage = !city

  return (
    <section className="relative h-[580px] md:h-[900px] lg:h-[950px] flex items-start lg:items-center overflow-visible">
      {/* Background Image */}
      <Image
        src="/generated/hero.webp"
        alt={city ? `Professional Demolition Services - ${city} Idaho` : "Professional Demolition Services - Boise Idaho"}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center md:object-top lg:object-left"
        fetchPriority="high"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-[26rem] md:pt-[33rem] lg:pt-28 lg:pt-32 pb-6 md:pb-12 lg:pb-12">
        <div className="w-[120%] left-1/2 -translate-x-1/2 relative md:w-[120%] md:left-1/2 md:-translate-x-1/2 md:scale-75 lg:w-auto lg:left-auto lg:translate-x-0 lg:scale-100 max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-xl lg:ml-auto">
          <div className="bg-transparent md:bg-[rgba(0,0,0,0.7)] md:backdrop-blur-ios lg:rounded-lg border-0 md:border-[3px] lg:border-[6px] md:border-b-[3px] lg:border-b-[6px] border-[#10477d] px-0 py-6 md:py-6 lg:p-6 md:p-8 pt-20 md:pt-28 lg:pt-6 pb-4 md:pb-26 lg:pb-16 md:-mt-16 lg:mt-0 text-white text-center relative">
            {/* Google Rating Badge */}
            <GoogleReviewsBadge />

            {/* Main Headline */}
            {isHomePage ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-tight mb-4 -mt-8 md:mt-0">
                <span className="text-[#0b7fb6] text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white'}}>Boise</span> <br />Demolition
                <span className="hidden lg:block text-2xl mt-2 font-normal normal-case">Boise | Meridian | Nampa</span>
              </h1>
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-tight mb-4 -mt-8 md:mt-0">
                <span className="text-[#0b7fb6] text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white'}}>{city}</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Demolition Services</span>
              </h1>
            )}

            {/* Tagline */}
            <h2 className="hidden lg:block text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 italic">
              {subheadline || "We tear it down. We haul it away. You're done."}
            </h2>

            {/* Feature Badges - Hidden on mobile */}
            <div className="hidden md:flex text-sm sm:text-base md:text-2xl lg:text-lg text-white mb-4 md:mb-8 justify-center">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-fit">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5 flex-shrink-0 text-[#4a90e2]" />
                  <span>Locally owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5 flex-shrink-0 text-[#4a90e2]" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5 flex-shrink-0 text-[#4a90e2]" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5 flex-shrink-0 text-[#4a90e2]" />
                  <span>Same Day Service</span>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <h3 className="hidden md:block text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-wider mb-3 md:mb-4">
              Free Demolition Estimate
            </h3>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex flex-row gap-3 md:gap-4 mb-4 lg:mb-12 md:lg:mb-16 justify-center px-8 lg:px-0">
              <Button asChild size="lg" className="bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold text-lg md:text-2xl lg:text-2xl px-3 md:px-10 lg:px-8 lg:px-10 py-5 md:py-8 lg:py-6 lg:py-8 rounded-lg uppercase flex-1 lg:flex-1 sm:w-48 border-4 border-[#FFC845]">
                <a href="tel:2089435231">
                  <span className="md:hidden">Call Now</span>
                  <span className="hidden md:inline">(208) 943-5231</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
