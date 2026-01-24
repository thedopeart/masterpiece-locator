// Skeleton loading components for cards
export function ArtworkSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 break-inside-avoid animate-pulse">
      <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-neutral-200 rounded-md w-3/4" />
        <div className="h-4 bg-neutral-100 rounded-md w-1/2" />
        <div className="h-3 bg-neutral-100 rounded-md w-2/3" />
      </div>
    </div>
  );
}

export function ArtistSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-neutral-200 rounded-md w-3/4" />
        <div className="h-4 bg-neutral-100 rounded-md w-1/2" />
        <div className="h-3 bg-neutral-100 rounded-md w-1/4" />
      </div>
    </div>
  );
}

export function MuseumSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-[16/9] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-neutral-200 rounded-md w-3/4" />
        <div className="h-4 bg-neutral-100 rounded-md w-1/2" />
        <div className="h-3 bg-neutral-100 rounded-md w-1/3" />
      </div>
    </div>
  );
}

export function EraSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
      <div className="h-32 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
      <div className="p-4 space-y-2">
        <div className="h-5 bg-neutral-200 rounded-md w-2/3" />
        <div className="h-4 bg-neutral-100 rounded-md w-1/2" />
      </div>
    </div>
  );
}

export function CitySkeleton() {
  return (
    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
  );
}
