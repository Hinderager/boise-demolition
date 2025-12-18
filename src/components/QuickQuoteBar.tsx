'use client'

import { useQuoteForm } from '@/context/QuoteFormContext'

export function QuickQuoteBar() {
  const { mobileFormExpanded, setMobileFormExpanded, desktopFormExpanded, setDesktopFormExpanded } = useQuoteForm()

  return (
    <section id="quote-form" className={`pt-4 pb-0 -mt-4 -mb-0 md:-mb-16 border-0 z-0 md:z-20 overflow-visible relative before:content-[''] before:absolute before:-top-[140px] md:before:top-0 before:left-0 before:right-0 before:-z-10 after:content-[''] after:absolute after:-top-[140px] md:after:top-0 after:left-0 after:right-0 after:bg-[url('/assets/asset-7.webp')] after:bg-repeat after:bg-[length:800px] after:opacity-50 after:-z-[5] before:bg-[radial-gradient(ellipse_at_center,#2a6ab0_0%,#10477d_60%)] before:bottom-14 after:bottom-14 md:before:bottom-8 md:after:bottom-8`}>
      {/* Tagline with arrows - full width like original */}
      <div className="hidden md:flex items-center justify-center h-[40px] mb-4 w-full tagline-bar">
        <span className="text-white italic text-sm sm:text-base md:text-[1.5rem] font-semibold tracking-tight whitespace-nowrap">
          Professional demolition services since 2022
        </span>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .tagline-bar {
            background-image:
              url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='18,8 6,15 18,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='28,10 18,15 28,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E"),
              linear-gradient(white, white),
              linear-gradient(white, white),
              url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='2,10 12,15 2,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='12,8 24,15 12,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E");
            background-size: 30px 30px, calc(50% - 430px) 2px, calc(50% - 430px) 2px, 30px 30px;
            background-position: left 70px center, left 100px center, right 100px center, right 70px center;
            background-repeat: no-repeat;
          }
        }
      `}</style>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex justify-center gap-4 mb-6 px-4">
        <a
          href="tel:2083611982"
          className="px-8 py-3 rounded-lg font-bold text-lg uppercase bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] transition-all border-4 border-[#FFC845]"
        >
          Free Demolition Quote
        </a>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4">
        <div className="flex gap-1.5 mb-0">
          <a
            href="tel:2083611982"
            className="flex-1 py-3 font-bold text-sm uppercase transition-all rounded-lg bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] text-center"
          >
            Free Demolition Quote
          </a>
        </div>
        <p className="text-white text-center italic text-sm mt-6">
          Professional demolition services since 2022
        </p>
      </div>
    </section>
  )
}
