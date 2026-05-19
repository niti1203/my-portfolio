import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nitika — Full-Stack Developer & Graphic Designer",
  description:
    "Nitika is a Full-Stack Developer and Graphic Designer who builds robust backends, polished frontends, and scroll-stopping visuals. Currently an Analyst at Deloitte.",
  keywords: [
    "Nitika",
    "full-stack developer",
    "graphic designer",
    "Spring Boot",
    "TypeScript",
    "React",
    "Deloitte",
    "Thapar",
  ],
  authors: [{ name: "Nitika" }],
  openGraph: {
    title: "Nitika — Full-Stack Developer & Graphic Designer",
    description:
      "Nitika builds end-to-end digital products: robust backends, polished frontends, and visuals that stop the scroll.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col grain-overlay" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
