export default function MovementsLoading() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <span className="text-neutral-300">/</span>
          <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
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
            <div className="lg:hidden mb-8">
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-20 bg-neutral-200 rounded animate-pulse mb-4" />
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-center">
                      <div className="h-8 w-12 bg-neutral-200 rounded animate-pulse mx-auto mb-1" />
                      <div className="h-3 w-16 bg-neutral-200 rounded animate-pulse mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Movement cards skeleton */}
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col sm:flex-row bg-white rounded-xl border border-neutral-200 overflow-hidden">
                  {/* Preview images */}
                  <div className="sm:w-48 h-32 sm:h-auto flex sm:flex-col shrink-0">
                    <div className="flex-1 bg-neutral-200 animate-pulse" />
                    <div className="flex-1 bg-neutral-200 animate-pulse" />
                  </div>

                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="h-5 w-20 bg-amber-100 rounded-full animate-pulse mb-2" />
                        <div className="h-6 w-40 bg-neutral-200 rounded animate-pulse mb-2" />
                        <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-1" />
                        <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse mb-3" />
                        <div className="flex gap-1 mb-3">
                          {[...Array(3)].map((_, j) => (
                            <div key={j} className="h-5 w-16 bg-neutral-100 rounded animate-pulse" />
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
                          <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="w-5 h-5 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
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
                      <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Browse by Era */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                <div className="h-5 w-28 bg-amber-200 rounded animate-pulse mb-3" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-10 bg-white rounded-lg animate-pulse" />
                  ))}
                </div>
              </div>

              {/* Popular Movements */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <div className="h-5 w-36 bg-neutral-200 rounded animate-pulse mb-3" />
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-200 animate-pulse" />
                      <div className="flex-1">
                        <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse mb-1" />
                        <div className="h-3 w-16 bg-neutral-200 rounded animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
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
