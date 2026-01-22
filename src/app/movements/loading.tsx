export default function MovementsLoading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header skeleton */}
      <div className="bg-black py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex gap-2 mb-6">
            <div className="h-4 w-12 bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 w-4 bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 w-20 bg-neutral-700 rounded animate-pulse" />
          </div>

          <div className="h-10 w-48 bg-neutral-700 rounded animate-pulse mb-3" />
          <div className="h-6 w-96 bg-neutral-700 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Timeline skeleton */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:-translate-x-0.5" />

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`relative mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neutral-300 border-4 border-white shadow transform -translate-x-1/2"
                style={{ top: "24px" }}
              />

              {/* Content card skeleton */}
              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                  {/* Preview images skeleton */}
                  <div className="h-32 flex">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex-1 bg-neutral-200 animate-pulse" />
                    ))}
                  </div>

                  <div className="p-6">
                    {/* Era badge */}
                    <div className="h-5 w-24 bg-amber-100 rounded animate-pulse mb-2" />

                    {/* Title */}
                    <div className="h-7 w-40 bg-neutral-200 rounded animate-pulse mb-2" />

                    {/* Description */}
                    <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-1" />
                    <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse mb-4" />

                    {/* Characteristics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {[1, 2, 3].map((k) => (
                        <div key={k} className="h-6 w-20 bg-neutral-100 rounded animate-pulse" />
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
                      <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
