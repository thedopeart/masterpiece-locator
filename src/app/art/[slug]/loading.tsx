export default function ArtworkLoading() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Hero Image skeleton */}
        <div className="mb-8">
          <div className="aspect-[4/3] md:aspect-[16/10] rounded-lg bg-neutral-200 animate-pulse" />
        </div>

        {/* Title skeleton */}
        <div className="mb-8">
          <div className="h-10 w-3/4 bg-neutral-200 rounded animate-pulse mb-3" />
          <div className="h-6 w-1/2 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Where to See It skeleton */}
        <div className="bg-neutral-100 rounded-xl p-6 mb-8">
          <div className="h-6 w-40 bg-neutral-200 rounded animate-pulse mb-4" />
          <div className="h-5 w-64 bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-48 bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* About section skeleton */}
        <div className="mb-8">
          <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-4" />
          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Technical Details skeleton */}
        <div className="mb-8">
          <div className="h-6 w-40 bg-neutral-200 rounded animate-pulse mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
            <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
