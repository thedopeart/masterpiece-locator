import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  // No template - each page controls its own keyword-focused title
  description:
    "Discover where to see the world's most famous paintings. Search museums, plan art trips, and find masterpieces near you.",
  openGraph: {
    type: "website",
    siteName: "Masterpiece Locator",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
        <Analytics debug={true} />
      </body>
    </html>
  );
}
