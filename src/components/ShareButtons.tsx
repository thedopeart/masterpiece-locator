"use client";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.35-.7-.35-1.74c0-1.63.95-2.85 2.13-2.85 1 0 1.5.75 1.5 1.66 0 1.02-.65 2.54-.98 3.95-.28 1.18.6 2.14 1.76 2.14 2.1 0 3.72-2.22 3.72-5.42 0-2.84-2.04-4.82-4.95-4.82-3.37 0-5.35 2.53-5.35 5.14 0 1.02.39 2.11.88 2.7.1.12.1.22.08.34l-.33 1.36c-.05.22-.17.26-.4.16-1.5-.7-2.43-2.9-2.43-4.66 0-3.8 2.76-7.28 7.96-7.28 4.18 0 7.43 2.98 7.43 6.96 0 4.15-2.62 7.5-6.25 7.5-1.22 0-2.37-.63-2.76-1.38l-.75 2.87c-.27 1.04-1 2.35-1.5 3.15A12 12 0 1 0 12 0z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Share:</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
          title={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
