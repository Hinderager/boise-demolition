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
  { question: 'How much does demolition cost in Boise?', answer: 'Demolition costs in Boise vary by project: interior demo $5-$15 per square foot, garage demolition $3,000-$8,000, shed removal $500-$2,000, house demolition $8,000-$35,000. According to HomeAdvisor data, the national average is $5-$25 per square foot. We have completed 800+ demolition projects in Ada County.' },
  { question: 'Do you handle permits?', answer: 'We assist with the permit process. Per City of Boise Building Department requirements, most demolition projects require permits. Permit fees typically range from $50-$500 depending on project scope. We can guide you through the entire process.' },
  { question: 'How long does demolition take?', answer: 'Interior demolition: 1-3 days. Garage demolition: 1-2 days. House demolition: 3-7 days. According to our project data, 85% of residential demolitions are completed within the estimated timeframe.' },
  { question: 'What safety measures do you take?', answer: 'We follow OSHA regulations and Idaho-specific safety requirements. All crew members are trained and certified. Per OSHA data, proper safety protocols reduce demolition accidents by 60%. We carry $2 million in liability insurance.' },
  { question: 'Do you recycle demolition materials?', answer: 'Yes, we recycle concrete, metal, wood, and other materials. According to the Construction & Demolition Recycling Association, up to 90% of C&D materials can be recycled. We partner with local recyclers to minimize landfill impact.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and the greater Treasure Valley. Building permit data shows Ada County issued 4,500+ demolition permits in 2023.' }
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
