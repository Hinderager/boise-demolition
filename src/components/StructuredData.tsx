// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does demolition cost in Boise?',
    answer: 'It depends on what you are tearing down. A small shed or deck might run $500-$2,000. Interior demo like a kitchen or bathroom is usually $1,500-$5,000. A full garage or small structure is typically $3,000-$8,000. Whole houses vary widely based on size and materials. We give free estimates after looking at your project.',
  },
  {
    question: 'Do I need a permit to demolish something?',
    answer: 'Most demolition in Boise requires a permit - especially for structures over 120 square feet or anything attached to your house. Sheds under that size often do not need one, but check with the city first. We can help you figure out what is required and handle the permit application if needed.',
  },
  {
    question: 'What happens to all the debris?',
    answer: 'We haul it all away - that is part of the service. Concrete, metal, and wood get recycled when possible. Everything else goes to the proper disposal facility. You do not have to worry about cleanup. The site gets left clean and ready for whatever you are doing next.',
  },
  {
    question: 'How long does a typical demolition take?',
    answer: 'A shed or deck? Usually done in a day. A garage takes 1-3 days depending on size. Interior demo for a kitchen or bathroom is typically a day or two. Full house demolitions take 3-7 days depending on the size and what is involved. We will give you a timeline when we quote the job.',
  },
  {
    question: 'Do you disconnect utilities before demolition?',
    answer: 'Yes, we coordinate with utility companies to shut off gas, electric, water, and sewer before we start. This is a critical safety step - especially for any structure with active utilities. We handle the coordination so you do not have to.',
  },
  {
    question: 'Can you demo just part of a building?',
    answer: 'Absolutely. That is called selective demolition, and we do it all the time. Maybe you just need one wall removed, or a bathroom gutted, or an old addition torn off. We protect what stays and carefully remove what goes. It is perfect for renovations.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry full liability insurance and workers comp. If something goes wrong - which it rarely does - you are covered. We can send you a certificate of insurance if you need it for permits or peace of mind.',
  },
  {
    question: 'What can you not demolish?',
    answer: 'We do not handle hazardous materials like asbestos or contaminated soil - those need specialists. Everything else is fair game: houses, garages, sheds, decks, concrete, you name it. If you are not sure, just ask. We will tell you straight if it is something we can do or not.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Demolition - ${city}`,
    "description": `Professional demolition services in ${city}, Idaho. Interior demolition, structural teardown, concrete removal, deck & shed demolition, garage removal, and complete debris hauling. Licensed and insured.`,
    "url": "https://boise-demolition.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Interior Demolition",
      "Structural Demolition",
      "Concrete Removal",
      "Deck Removal",
      "Shed Demolition",
      "Garage Demolition",
      "Partial Demolition",
      "Selective Demolition"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Demolition Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Top Shelf Demolition"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional demolition services in ${city} and the Treasure Valley. Interior demolition, structural teardown, concrete removal, deck & shed demolition, and complete debris hauling.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
