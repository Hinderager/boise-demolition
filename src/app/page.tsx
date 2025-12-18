import { HeroSection } from '@/components/HeroSection'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { SectionDivider } from '@/components/SectionDivider'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesShowcase } from '@/components/ServicesShowcase'
import { GoogleReviews } from '@/components/GoogleReviews'
import { FAQ } from '@/components/FAQ'
import { MapSection } from '@/components/MapSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickQuoteBar />
      <SectionDivider />
      <ServicesGrid />
      <ServicesShowcase />
      <GoogleReviews />
      <FAQ />
      <MapSection />
    </>
  )
}
