export default function MuseumsLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-neutral-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-10 w-56 bg-neutral-700 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-neutral-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-neutral-50 rounded-lg p-4 text-center">
              <div className="h-8 w-12 mx-auto bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-20 mx-auto bg-neutral-200 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Country sections skeleton */}
        {[1, 2, 3].map((section) => (
          <div key={section} className="mb-12">
            <div className="h-7 w-32 bg-neutral-200 rounded animate-pulse mb-6" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                  <div className="h-32 bg-neutral-200 animate-pulse" />
                  <div className="p-4">
                    <div className="h-5 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse mb-3" />
                    <div className="flex justify-between">
                      <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-10 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
