import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter, FloatingActions } from "@/components/site";

export const metadata: Metadata = {
  title: "SR Associates | Electronics, Furniture & Home Appliances | Pollachi",
  description: "SR Associates is a trusted electronics, furniture, mobiles, and home appliances showroom in Pollachi offering genuine branded products, EMI options, delivery, and installation support.",
  openGraph: { title: "SR Associates | Make home feel more like you", description: "Explore trusted brands, thoughtful service and everything your home needs in Pollachi.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "SR Associates | Pollachi", description: "Everything your home needs, thoughtfully chosen." },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SR Associates",
  description: "Electronics, furniture, mobiles and home appliances showroom.",
  address: { "@type": "PostalAddress", addressLocality: "Pollachi", addressRegion: "Tamil Nadu", addressCountry: "IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /><SiteHeader />{children}<SiteFooter /><FloatingActions /></body></html>;
}
