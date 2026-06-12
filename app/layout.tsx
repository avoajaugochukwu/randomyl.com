import { Instrument_Serif, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { metadata, jsonLd } from "./metadata";
import { buildSearchIndex } from "@/lib/search";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchIndex = buildSearchIndex();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex flex-col",
          instrumentSerif.variable,
          hankenGrotesk.variable,
          spaceMono.variable
        )}
      >
        <Header searchIndex={searchIndex} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics gaId="G-6M5JV3JERT" />
      </body>
    </html>
  );
}
