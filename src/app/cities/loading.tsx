export default function CitiesLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="h-10 w-56 bg-neutral-700 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-neutral-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="h-8 w-12 mx-auto bg-blue-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-14 mx-auto bg-neutral-200 rounded animate-pulse" />
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="h-8 w-12 mx-auto bg-green-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-16 mx-auto bg-neutral-200 rounded animate-pulse" />
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="h-8 w-12 mx-auto bg-purple-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-20 mx-auto bg-neutral-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Cities Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              {/* Preview Images skeleton */}
              <div className="h-40 bg-neutral-200 animate-pulse relative">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-6 w-24 bg-neutral-300 rounded animate-pulse mb-1" />
                  <div className="h-4 w-16 bg-neutral-300 rounded animate-pulse" />
                </div>
              </div>

              <div className="p-4">
                {/* Museums list skeleton */}
                <div className="mb-3">
                  <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse mb-2" />
                  <div className="space-y-1">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
