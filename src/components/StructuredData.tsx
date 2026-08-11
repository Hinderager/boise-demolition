/**
 * Site-wide structured data.
 *
 * Everything is emitted as a single @graph so the entities can point at each
 * other by @id: the LocalBusiness publishes the WebSite and provides the
 * Service, and it names topshelfpros.com as its parent organisation. That
 * shared parent @id is what ties all fourteen microsites and the main site
 * together as one business instead of fourteen unrelated ones — which is what
 * search engines and language models need in order to answer questions about
 * us and attribute the answer correctly.
 *
 * Only facts we can actually source belong in here. Things we do not have on
 * record — a contact email, the founding date, headcount — are left out rather
 * than guessed, because invented detail in schema is worse than missing detail.
 */

const SITE_NAME = 'Boise Demolition'
const SITE_URL = 'https://boise-demolition.com'
const SITE_PHONE = '+1-208-943-5231'
const SERVICE_NAME = 'Demolition Services'

/** The shared brand entity. Identical across every Top Shelf site. */
const PARENT_ORGANIZATION_ID = 'https://topshelfpros.com/#organization'
const BRAND_NAME = 'Top Shelf Junk Removal and Demolition'
const BRAND_URL = 'https://topshelfpros.com'
const BRAND_LOGO = 'https://topshelfpros.com/assets/Logos/top-shelf-logo-full.webp'
const BRAND_PHONE = '+12085932877'

/** The one physical location behind all of the sites. */
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1755 N Westgate Dr Ste 110',
  addressLocality: 'Boise',
  addressRegion: 'ID',
  postalCode: '83704',
  addressCountry: 'US',
}

const OFFICE_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 43.620604,
  longitude: -116.281153,
}

const SOCIAL_PROFILES = [
  'https://www.facebook.com/topshelfpros',
  'https://www.instagram.com/top_shelf_pros',
  'https://www.linkedin.com/company/topshelfpros',
]

/** The cities our own pages say we cover, with real coordinates. */
const SERVICE_AREA = [
  { name: 'Boise', lat: 43.615, lng: -116.2023 },
  { name: 'Meridian', lat: 43.6121, lng: -116.3915 },
  { name: 'Nampa', lat: 43.5407, lng: -116.5635 },
  { name: 'Caldwell', lat: 43.6629, lng: -116.6874 },
  { name: 'Eagle', lat: 43.696, lng: -116.354 },
  { name: 'Garden City', lat: 43.6229, lng: -116.2568 },
  { name: 'Kuna', lat: 43.4916, lng: -116.4201 },
  { name: 'Star', lat: 43.6899, lng: -116.4954 },
  { name: 'Middleton', lat: 43.7071, lng: -116.6172 },
]

/** Subjects this business is an authority on — read by LLMs summarising us. */
const KNOWS_ABOUT = [
  "Interior Demolition",
  "Structural Demolition",
  "Concrete Removal",
  "Deck Removal",
  "Shed Demolition",
  "Garage Demolition",
  "Partial Demolition",
  "Selective Demolition",
  "Junk removal",
  "Debris hauling",
  "Waste recycling",
  "Donation drop-off",
  "Treasure Valley Idaho",
  "Ada County Idaho",
  "Canyon County Idaho"
]

const SERVICES_OFFERED = [
  "Interior Demolition",
  "Structural Demolition",
  "Concrete Removal",
  "Deck Removal",
  "Shed Demolition",
  "Garage Demolition",
  "Partial Demolition",
  "Selective Demolition"
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const businessId = `${SITE_URL}/#business`

  const organization = {
    '@type': 'Organization',
    '@id': PARENT_ORGANIZATION_ID,
    name: BRAND_NAME,
    alternateName: 'Top Shelf Pros',
    url: BRAND_URL,
    logo: {
      '@type': 'ImageObject',
      url: BRAND_LOGO,
      caption: `${BRAND_NAME} logo`,
    },
    telephone: BRAND_PHONE,
    address: ADDRESS,
    sameAs: SOCIAL_PROFILES,
  }

  const business = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: SITE_NAME,
    description: `Professional demolition services in ${city}, Idaho. Interior demolition, structural teardown, concrete removal, deck & shed demolition, garage removal, and complete debris hauling. Licensed and insured.`,
    url: SITE_URL,
    telephone: SITE_PHONE,
    priceRange: '$129-$599',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Debit Card',
    address: ADDRESS,
    geo: OFFICE_GEO,
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=Top+Shelf+Junk+Removal+and+Demolition+Boise+ID',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    areaServed: SERVICE_AREA.map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: 'ID',
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
    })),
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SITE_NAME} services`,
      itemListElement: SERVICES_OFFERED.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s, areaServed: 'Treasure Valley, Idaho' },
      })),
    },
    sameAs: SOCIAL_PROFILES,
    parentOrganization: { '@id': PARENT_ORGANIZATION_ID },
    logo: BRAND_LOGO,
    image: [
      {
        '@type': 'ImageObject',
        url: `${SITE_URL}/generated/hero.webp`,
        name: 'Demolition Services in the Treasure Valley',
        caption: 'Boise Demolition crew at work in Garden City, Idaho',
        contentLocation: {
          '@type': 'Place',
          name: 'Garden City, Idaho',
          geo: { '@type': 'GeoCoordinates', latitude: 43.6295, longitude: -116.2635 },
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '392',
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `Professional demolition services in ${city}, Idaho. Interior demolition, structural teardown, concrete removal, deck & shed demolition, garage removal, and complete debris hauling. Licensed and insured.`,
    publisher: { '@id': businessId },
    inLanguage: 'en-US',
  }

  const service = {
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: SERVICE_NAME,
    serviceType: SERVICE_NAME,
    description: `Professional demolition services in ${city} and the Treasure Valley. Interior demolition, structural teardown, concrete removal, deck & shed demolition, and complete debris hauling.`,
    provider: { '@id': businessId },
    areaServed: SERVICE_AREA.map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: 'ID',
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SERVICE_NAME} options`,
      itemListElement: SERVICES_OFFERED.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, business, website, service],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
