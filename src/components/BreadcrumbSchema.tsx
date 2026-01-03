'use client'

import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ siteName, siteUrl }: { siteName: string; siteUrl: string }) {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ name: 'Home', url: siteUrl }]

    if (pathname === '/') return items

    const segments = pathname.split('/').filter(Boolean)
    let currentPath = ''

    segments.forEach((segment, index) => {
      currentPath += '/' + segment
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      items.push({
        name,
        url: siteUrl + currentPath
      })
    })

    return items
  }

  const breadcrumbs = generateBreadcrumbs()

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
