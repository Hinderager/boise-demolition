import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Demolition Services | Coming Soon',
  description: 'Professional demolition services in Boise, Idaho. Residential and commercial demolition, interior demo, and complete structure removal.',
  keywords: 'demolition, Boise, Idaho, residential demolition, commercial demolition, interior demolition',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
