export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
  )
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-t-lg" />
      <div className="p-4 space-y-3">
        <div className="bg-gray-200 h-6 rounded w-3/4" />
        <div className="bg-gray-200 h-4 rounded" />
        <div className="bg-gray-200 h-4 rounded w-5/6" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse bg-gray-300 h-[580px] md:h-[900px] lg:h-[950px] w-full" />
  )
}
