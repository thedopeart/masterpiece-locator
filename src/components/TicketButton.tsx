import { getTicketUrl } from "@/config/affiliate-links";

type TicketVariant = "museum-primary" | "artwork" | "trail" | "practical";

interface TicketButtonProps {
  museumSlug: string;
  directTicketUrl?: string | null;
  variant: TicketVariant;
  isFreeAdmission?: boolean;
  skipTheLine?: boolean;
  className?: string;
}

const variantStyles: Record<TicketVariant, string> = {
  "museum-primary":
    "block w-full text-center bg-[#028161] text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-[#026b51] transition-colors shadow-md",
  artwork:
    "text-sm bg-black text-white px-3 py-1 rounded hover:bg-neutral-800 transition-colors",
  trail:
    "text-sm text-[#C9A84C] hover:text-[#b8973f] font-medium mt-2 inline-flex items-center gap-1",
  practical: "", // handled dynamically based on isFreeAdmission
};

export default function TicketButton({
  museumSlug,
  directTicketUrl,
  variant,
  isFreeAdmission = false,
  skipTheLine = false,
  className = "",
}: TicketButtonProps) {
  const ticket = getTicketUrl(museumSlug, directTicketUrl);
  if (!ticket) return null;

  const rel = ticket.isAffiliate ? "noopener sponsored" : "noopener noreferrer";

  // Practical variant has special styling and text
  if (variant === "practical") {
    const practicalClass = `block w-full text-center font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] ${
      isFreeAdmission
        ? "bg-green-600 hover:bg-green-700 text-white"
        : "bg-[#028161] hover:bg-[#026b51] text-white"
    } ${className}`;

    return (
      <a href={ticket.url} target="_blank" rel={rel} className={practicalClass}>
        <span className="text-xl">
          {isFreeAdmission ? "Book Free Entry" : "Buy Tickets"}
        </span>
        {isFreeAdmission ? (
          <span className="block text-sm font-semibold mt-1 opacity-90">
            Free timed entry available online
          </span>
        ) : (
          skipTheLine && (
            <span className="block text-sm font-semibold mt-1 opacity-90">
              Skip the line with online tickets
            </span>
          )
        )}
      </a>
    );
  }

  // Trail variant includes an arrow icon
  if (variant === "trail") {
    return (
      <a
        href={ticket.url}
        target="_blank"
        rel={rel}
        className={`${variantStyles.trail} ${className}`}
      >
        Get tickets
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }

  // Artwork variant: inline button (mobile & desktop)
  if (variant === "artwork") {
    // Desktop variant uses slightly different styles when className includes "py-2"
    return (
      <a
        href={ticket.url}
        target="_blank"
        rel={rel}
        className={`${variantStyles.artwork} ${className}`}
      >
        Buy Tickets
      </a>
    );
  }

  // Museum primary variant
  return (
    <a
      href={ticket.url}
      target="_blank"
      rel={rel}
      className={`${variantStyles["museum-primary"]} ${className}`}
    >
      Buy Tickets
    </a>
  );
}
