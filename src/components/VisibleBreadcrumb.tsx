'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

export function VisibleBreadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ name: 'Home', href: '/' }]

    if (pathname === '/') return items

    const segments = pathname.split('/').filter(Boolean)
    let currentPath = ''

    segments.forEach((segment) => {
      currentPath += '/' + segment
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      items.push({
        name,
        href: currentPath
      })
    })

    return items
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-rose-600 font-medium underline decoration-rose-600">{item.name}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-dark-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
