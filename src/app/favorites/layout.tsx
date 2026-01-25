import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favorites | Saved Artworks & Masterpieces",
  description:
    "Your saved artworks collection. Bookmark famous paintings and masterpieces to find them later. Create your personal art gallery.",
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
