import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
  const [artworks, artists, museums] = await Promise.all([
    prisma.artwork.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { Artist: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
      select: {
        slug: true,
        title: true,
        imageUrl: true,
        Artist: { select: { name: true } },
      },
      take: 5,
      orderBy: [
        { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
        { searchVolumeTier: "asc" },
      ],
    }),
    prisma.artist.findMany({
      where: {
        name: { contains: query, mode: "insensitive" },
      },
      select: {
        slug: true,
        name: true,
        imageUrl: true,
        _count: { select: { Artwork: true } },
      },
      take: 3,
      orderBy: { Artwork: { _count: "desc" } },
    }),
    prisma.museum.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive" } },
        ],
      },
      select: {
        slug: true,
        name: true,
        city: true,
        imageUrl: true,
      },
      take: 3,
      orderBy: { Artwork: { _count: "desc" } },
    }),
  ]);

  return NextResponse.json({
    results: {
      artworks: artworks.map((a) => ({
        type: "artwork",
        slug: a.slug,
        title: a.title,
        subtitle: a.Artist?.name || "Unknown artist",
        imageUrl: a.imageUrl,
      })),
      artists: artists.map((a) => ({
        type: "artist",
        slug: a.slug,
        title: a.name,
        subtitle: `${a._count.Artwork} works`,
        imageUrl: a.imageUrl,
      })),
      museums: museums.map((m) => ({
        type: "museum",
        slug: m.slug,
        title: m.name,
        subtitle: m.city,
        imageUrl: m.imageUrl,
      })),
    },
  });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ results: { artworks: [], artists: [], museums: [] } }, { status: 500 });
  }
}
