import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { QuoteFormProvider } from '@/context/QuoteFormContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-demolition.com'),
  title: {
    default: 'Boise Demolition Services | Interior, Structural & Concrete Demolition',
    template: '%s | Boise Demolition',
  },
  description: 'Professional demolition services in Boise. Interior demolition, structural teardown, concrete removal, deck & shed demolition, garage removal, and complete debris hauling. Licensed and insured.',
  keywords: [
    'demolition Boise',
    'interior demolition Boise',
    'structural demolition Idaho',
    'concrete removal Boise',
    'deck removal Idaho',
    'shed demolition Boise',
    'garage demolition Idaho',
    'partial demolition Boise',
    'selective demolition Idaho',
    'demolition contractor Treasure Valley',
  ],
  authors: [{ name: 'Boise Demolition' }],
  creator: 'Boise Demolition',
  publisher: 'Boise Demolition',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boise-demolition.com',
    siteName: 'Boise Demolition',
    title: 'Boise Demolition Services | Interior, Structural & Concrete Demolition',
    description: 'Professional demolition services in Boise. Interior demolition, structural teardown, concrete removal, deck & shed demolition, and complete debris hauling.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boise Demolition - Professional Demolition Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boise Demolition Services | Interior, Structural & Concrete Demolition',
    description: 'Professional demolition services in Boise. Interior demolition, structural teardown, concrete removal, and complete debris hauling.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-demolition.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46RY05JDNS"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46RY05JDNS');
            gtag('config', 'AW-11134633087');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '533217938868618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <QuoteFormProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
