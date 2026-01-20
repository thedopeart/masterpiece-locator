export default function MuseumLoading() {
  return (
    <div className="bg-white">
      {/* Hero skeleton */}
      <div className="h-64 md:h-80 bg-neutral-300 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-40 bg-neutral-200 rounded animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Visiting Info skeleton */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="h-6 w-36 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="h-4 w-1/2 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="h-10 w-full bg-blue-200 rounded-lg animate-pulse" />
            </div>

            {/* Artists skeleton */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <div className="h-6 w-44 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description skeleton */}
            <div className="mb-8">
              <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
            </div>

            {/* Masterpieces skeleton */}
            <div>
              <div className="h-6 w-56 bg-neutral-200 rounded animate-pulse mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
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
