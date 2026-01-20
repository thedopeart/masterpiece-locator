export default function ArtistLoading() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Header skeleton - Image + Info + Bio */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Artist Image skeleton */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl bg-neutral-200 animate-pulse" />
          </div>

          {/* Artist Info + Bio skeleton */}
          <div className="flex-1">
            <div className="h-10 w-64 bg-neutral-200 rounded animate-pulse mb-3" />
            <div className="flex gap-3 mb-4">
              <div className="h-5 w-20 bg-neutral-200 rounded animate-pulse" />
              <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 mb-4">
              <div className="h-7 w-24 bg-amber-100 rounded-full animate-pulse" />
              <div className="h-7 w-28 bg-amber-100 rounded-full animate-pulse" />
            </div>
            {/* Biography skeleton */}
            <div className="space-y-2 mb-4 max-w-2xl">
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
            </div>
            <div className="h-4 w-36 bg-neutral-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Where to See skeleton */}
        <div className="mb-12">
          <div className="h-6 w-56 bg-neutral-200 rounded animate-pulse mb-6" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                {/* Image previews skeleton */}
                <div className="flex h-28">
                  <div className="flex-1 bg-neutral-200 animate-pulse" />
                  <div className="flex-1 bg-neutral-100 animate-pulse" />
                  <div className="flex-1 bg-neutral-200 animate-pulse" />
                </div>
                {/* Info skeleton */}
                <div className="p-4">
                  <div className="h-5 w-40 bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Works skeleton */}
        <div className="mb-12">
          <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-[4/3] bg-neutral-200 animate-pulse" />
                <div className="p-4">
                  <div className="h-5 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA skeleton */}
        <div className="bg-neutral-900 rounded-xl p-8">
          <div className="flex flex-col items-center">
            <div className="h-6 w-48 bg-neutral-700 rounded animate-pulse mb-3" />
            <div className="h-4 w-64 bg-neutral-700 rounded animate-pulse mb-4" />
            <div className="h-12 w-40 bg-neutral-700 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
