import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import { site, images } from "@/config/site";
import "./globals.css";

// Editorial serif for headlines
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Clean sans for body / navigation
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Handwritten accent ("Good Food. Brighter Days.")
const hand = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.fullName} | Carnegie, PA — Order Online`,
  description: site.description,
  keywords: ["Chinese restaurant Carnegie PA", "Chinese food near me", "Don Don", "Szechuan", "Hunan", "takeout Carnegie"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} — Chinese food, made better.`,
    description: site.description,
    images: [{ url: images.og, width: 1200, height: 630, alt: images.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — Chinese food, made better.`,
    description: site.description,
    images: [images.og],
  },
  robots: { index: true, follow: true },
};

/**
 * Local-business structured data. Extend with openingHoursSpecification,
 * priceRange, menu URL, etc. as needed.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.fullName,
  url: site.url,
  telephone: site.phone.href.replace("tel:", ""),
  servesCuisine: "Chinese",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  image: `${site.url}${images.og}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${hand.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
