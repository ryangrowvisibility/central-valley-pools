import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const head = Figtree({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Figtree({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Central Valley Pools | Pool Cleaning & Repair in Merced, CA",
  description:
    "Family-owned weekly pool maintenance, pool cleaning, equipment repair and same-day emergency cleanups in Merced, CA. Owner Sherry and tech Gabriel. 5.0 stars from 11 Google reviews. Call (209) 947-8612.",
  openGraph: {
    title: "Central Valley Pools | Merced Pool Service",
    description: "Family-owned pool cleaning and repair in Merced. 5.0 stars on Google. Call (209) 947-8612.",
    type: "website",
    locale: "en_US",
    images: ["/images/p4.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
