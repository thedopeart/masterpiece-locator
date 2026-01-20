export default function SearchLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-neutral-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 w-48 bg-neutral-700 rounded animate-pulse mb-4" />
          {/* Search form skeleton */}
          <div className="max-w-2xl">
            <div className="h-12 w-full bg-neutral-700 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 rounded-xl p-4 mb-6">
              <div className="h-5 w-28 bg-neutral-200 rounded animate-pulse mb-4" />

              {/* Filter dropdowns */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="mb-4">
                  <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="h-10 w-full bg-neutral-200 rounded-lg animate-pulse" />
                </div>
              ))}
            </div>

            {/* Browse By skeleton */}
            <div className="bg-neutral-100 rounded-xl p-4">
              <div className="h-5 w-24 bg-neutral-200 rounded animate-pulse mb-3" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          {/* Results skeleton */}
          <div className="lg:col-span-3">
            {/* Artists section */}
            <div className="mb-8">
              <div className="h-6 w-32 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 animate-pulse" />
                    <div>
                      <div className="h-5 w-28 bg-neutral-200 rounded animate-pulse mb-1" />
                      <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Museums section */}
            <div className="mb-8">
              <div className="h-6 w-36 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 animate-pulse" />
                    <div>
                      <div className="h-5 w-36 bg-neutral-200 rounded animate-pulse mb-1" />
                      <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Artworks section */}
            <div>
              <div className="h-6 w-32 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}
