export default function ArtistsLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-neutral-900 py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="h-10 w-64 bg-neutral-700 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-neutral-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Movement Filters skeleton */}
        <div className="mb-8">
          <div className="h-4 w-40 bg-neutral-200 rounded animate-pulse mb-3" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-9 w-24 bg-neutral-100 rounded-full animate-pulse" />
            ))}
          </div>
        </div>

        {/* Results count skeleton */}
        <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse mb-6" />

        {/* Artists Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="aspect-square bg-neutral-200 animate-pulse" />
              <div className="p-4">
                <div className="flex gap-1 mb-3">
                  <div className="h-5 w-20 bg-amber-100 rounded-full animate-pulse" />
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-10 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
