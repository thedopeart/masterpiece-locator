export default function ArtworkLoading() {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <span className="text-neutral-300">/</span>
          <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
          <span className="text-neutral-300">/</span>
          <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* Hero Image skeleton */}
            <div className="mb-6">
              <div className="aspect-[4/3] md:aspect-[16/10] rounded-lg bg-neutral-200 animate-pulse" />
            </div>

            {/* Title skeleton */}
            <div className="mb-6">
              <div className="h-10 w-3/4 bg-neutral-200 rounded animate-pulse mb-3" />
              <div className="h-6 w-1/2 bg-neutral-200 rounded animate-pulse mb-3" />
              <div className="flex gap-2">
                <div className="h-7 w-24 bg-amber-100 rounded-full animate-pulse" />
                <div className="h-7 w-20 bg-amber-100 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Mobile sidebar skeleton */}
            <div className="lg:hidden space-y-4 mb-8">
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-10 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description skeleton */}
            <div className="mb-8 space-y-3">
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-neutral-200 rounded animate-pulse" />
            </div>

            {/* Historical Significance skeleton */}
            <div className="mb-8">
              <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-3" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Sidebar skeleton - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-16 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-10 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Museum Card */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-28 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="h-5 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-2/3 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="h-9 w-full bg-neutral-900 rounded animate-pulse mb-2" />
                <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse mx-auto" />
              </div>

              {/* Artist Card */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-20 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="h-5 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-1/2 bg-neutral-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-1/3 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="h-4 w-28 bg-amber-200 rounded animate-pulse" />
              </div>
            </div>
          </aside>
        </div>

        {/* Full-width sections */}
        <div className="mt-12">
          {/* Related artworks section skeleton */}
          <div className="mb-12 border-t border-neutral-200 pt-8">
            <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[3/4] bg-neutral-200 rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                  <div className="h-3 w-2/3 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* FAQ section skeleton */}
          <div className="mb-12 border-t border-neutral-200 pt-8">
            <div className="h-6 w-40 bg-neutral-200 rounded animate-pulse mb-4" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-neutral-200 rounded-lg p-4">
                  <div className="h-5 w-3/4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA skeleton */}
          <div className="border-t border-neutral-200 pt-8">
            <div className="bg-neutral-900 rounded-xl p-8 flex flex-col items-center">
              <div className="h-6 w-40 bg-neutral-700 rounded animate-pulse mb-2" />
              <div className="h-4 w-64 bg-neutral-700 rounded animate-pulse mb-6" />
              <div className="h-12 w-40 bg-amber-600 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
