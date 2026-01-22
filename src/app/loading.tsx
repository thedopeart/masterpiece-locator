export default function HomeLoading() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section skeleton - Compact */}
      <section className="bg-white py-8 md:py-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="h-10 w-80 bg-neutral-200 rounded animate-pulse mx-auto mb-3" />
          <div className="h-5 w-64 bg-neutral-200 rounded animate-pulse mx-auto mb-6" />
          {/* SearchBar skeleton */}
          <div className="max-w-xl mx-auto">
            <div className="h-14 bg-neutral-100 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Artworks skeleton */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 w-64 bg-neutral-200 rounded animate-pulse" />
          <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-neutral-200 animate-pulse" />
              <div className="p-4">
                <div className="h-5 w-3/4 bg-neutral-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-1/2 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-neutral-100 rounded-full animate-pulse" />
                  <div className="h-6 w-16 bg-neutral-100 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Artist & Museum skeleton */}
      <section className="bg-white py-12 border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Artists skeleton */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-7 w-40 bg-neutral-200 rounded animate-pulse" />
                <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-100">
                    <div className="w-16 h-16 rounded-full bg-neutral-200 animate-pulse flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Museums skeleton */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-7 w-32 bg-neutral-200 rounded animate-pulse" />
                <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg border border-neutral-100 overflow-hidden">
                    <div className="aspect-[16/9] bg-neutral-200 animate-pulse" />
                    <div className="p-4">
                      <div className="h-5 w-40 bg-neutral-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section skeleton */}
      <section className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 text-center animate-pulse">
          <div className="h-8 w-64 bg-neutral-700 rounded mx-auto mb-4" />
          <div className="h-5 w-80 bg-neutral-700 rounded mx-auto mb-8" />
          <div className="h-12 w-40 bg-neutral-600 rounded mx-auto" />
        </div>
      </section>
    </div>
  );
}
