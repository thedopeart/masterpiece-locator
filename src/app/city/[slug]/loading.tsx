export default function CityLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-10 w-40 bg-neutral-700 rounded animate-pulse mb-2" />
          <div className="h-6 w-24 bg-neutral-700 rounded animate-pulse mb-4" />
          <div className="h-4 w-48 bg-neutral-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Museums section skeleton */}
        <div className="mb-12">
          <div className="h-7 w-48 bg-neutral-200 rounded animate-pulse mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="h-40 bg-neutral-200 animate-pulse" />
                <div className="p-4">
                  <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artists section skeleton */}
        <div className="mb-12">
          <div className="h-7 w-40 bg-neutral-200 rounded animate-pulse mb-6" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 w-28 bg-neutral-100 rounded-full animate-pulse" />
            ))}
          </div>
        </div>

        {/* Masterpieces section skeleton */}
        <div className="mb-12">
          <div className="h-7 w-56 bg-neutral-200 rounded animate-pulse mb-6" />
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

        {/* CTA skeleton */}
        <div className="bg-neutral-100 rounded-xl p-8">
          <div className="flex flex-col items-center">
            <div className="h-6 w-56 bg-neutral-200 rounded animate-pulse mb-3" />
            <div className="h-4 w-72 bg-neutral-200 rounded animate-pulse mb-4" />
            <div className="h-12 w-44 bg-neutral-300 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
