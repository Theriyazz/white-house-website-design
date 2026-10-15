import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Serif_Gujarati, Plus_Jakarta_Sans, Righteous } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});

// One Gujarati family for every Gujarati line on the page: a modulated serif
// that sits beside Cormorant the way kankotri lettering sits beside English.
const gujarati = Noto_Serif_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-gujarati-serif",
});

// Closest Google font to the logo lettering: geometric, rounded, with the slanted "e" bar.
const logoFace = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo-face",
  preload: false,
});

const title = "White House | Wedding & Festive Menswear in Vadodara Since 1993";
const description =
  "Vadodara's trusted menswear house for 33 years. Sherwanis, Indo-western, Jodhpuri suits, kurta sets and made-to-measure tailoring. Visit us near Raopura Tower.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sherwani Vadodara",
    "ethnic wear Vadodara",
    "groom wear Vadodara",
    "wedding wear Raopura",
    "Jodhpuri suit Vadodara",
  ],
  openGraph: { title, description, type: "website", locale: "en_IN", siteName: site.name },
  // Concept demo with placeholder prices and reviews: keep it out of search results until launch.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description,
  telephone: site.phoneDisplay,
  foundingDate: String(site.founded),
  openingHours: "Mo-Su 10:00-21:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Raopura Tower, Main Road, Raopura",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390001",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviews,
  },
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${gujarati.variable} ${logoFace.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
