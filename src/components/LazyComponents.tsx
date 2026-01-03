'use client'

import dynamic from 'next/dynamic'

// Lazy load below-the-fold components for better LCP
export const LazyFAQ = dynamic(() => import('./FAQ').then(mod => mod.FAQ), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: true,
})

export const LazyMapSection = dynamic(() => import('./MapSection').then(mod => mod.MapSection), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />,
  ssr: false, // Map doesn't need SSR
})

export const LazyGoogleReviews = dynamic(() => import('./GoogleReviews').then(mod => mod.GoogleReviews), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64 rounded-lg" />,
  ssr: true,
})
