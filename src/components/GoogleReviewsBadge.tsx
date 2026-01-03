'use client'

import { Star } from 'lucide-react'

export function GoogleReviewsBadge() {
  return (
    <div className="absolute -top-8 md:-top-12 lg:-bottom-10 md:lg:-bottom-12 lg:top-auto left-1/2 transform -translate-x-1/2">
      {/* Mobile: Compact badge */}
      <div className="md:hidden bg-white rounded-xl min-h-[52px] px-3 py-2 shadow-lg inline-block">
        <div className="flex items-center justify-center gap-2">
          {/* Google Logo - Smaller */}
          <div className="flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>
          {/* Rating Content - Compact */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-[#FFC845]">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-[#FFC845] text-[#FFC845]" />
                ))}
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-700">323+ Reviews</div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet: Full badge */}
      <div className="hidden md:block bg-white rounded-2xl min-h-[100px] px-4 py-3 shadow-lg">
        <div className="flex items-center justify-center gap-3">
          {/* Google Logo */}
          <div className="flex-shrink-0 bg-white rounded-full shadow-md p-1">
            <svg width="72" height="72" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>
          {/* Rating Content */}
          <div className="flex flex-col items-start">
            <div className="text-lg font-bold text-gray-900 mb-0.5">Google Rating</div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-3xl font-bold text-[#FFC845]">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FFC845] text-[#FFC845]" />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-900">
              <span className="font-bold text-base">323+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
