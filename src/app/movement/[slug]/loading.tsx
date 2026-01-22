export default function MovementLoading() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <span className="text-neutral-300">/</span>
          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
          <span className="text-neutral-300">/</span>
          <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* Hero Header skeleton */}
            <div className="bg-neutral-900 rounded-2xl p-8 mb-8">
              <div className="h-6 w-32 bg-neutral-700 rounded-full animate-pulse mb-4" />
              <div className="h-10 w-3/4 bg-neutral-700 rounded animate-pulse mb-4" />
              <div className="space-y-2">
                <div className="h-5 w-full bg-neutral-800 rounded animate-pulse" />
                <div className="h-5 w-4/5 bg-neutral-800 rounded animate-pulse" />
              </div>
            </div>

            {/* Mobile sidebar skeleton */}
            <div className="lg:hidden space-y-4 mb-8">
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-24 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Artists Section skeleton */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="h-6 w-40 bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
              </div>
              <div className="grid gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-neutral-200 animate-pulse" />
                    <div className="flex-1">
                      <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar skeleton - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-24 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Characteristics */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                <div className="h-5 w-32 bg-amber-200 rounded animate-pulse mb-3" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 w-20 bg-white rounded-full animate-pulse" />
                  ))}
                </div>
              </div>

              {/* Notable Artists Preview */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-28 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="flex -space-x-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white animate-pulse" />
                  ))}
                </div>
                <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
          </aside>
        </div>

        {/* Masterpieces Section skeleton */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-[3/4] bg-neutral-200 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-neutral-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA skeleton */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-neutral-900 rounded-xl p-8 flex flex-col items-center">
            <div className="h-6 w-48 bg-neutral-700 rounded animate-pulse mb-2" />
            <div className="h-4 w-64 bg-neutral-700 rounded animate-pulse mb-6" />
            <div className="h-12 w-40 bg-amber-600 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
