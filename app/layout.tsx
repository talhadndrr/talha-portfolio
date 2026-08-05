import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://talhadundar.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hüseyin Talha Dündar | Yazılım Geliştirici",
    template: "%s | Hüseyin Talha Dündar",
  },
  description:
    "Hüseyin Talha Dündar'ın yazılım projeleri, web geliştirme çalışmaları, yetenekleri ve deneyimlerini sergileyen kişisel portföy sitesi.",
  keywords: [
    "Hüseyin Talha Dündar",
    "Talha Dündar",
    "yazılım geliştirici",
    "web geliştirici",
    "portföy",
    "JavaScript",
    "PHP",
    "Python",
    "C#",
    "C++",
    "Microsoft SQL Server",
  ],
  authors: [{ name: "Hüseyin Talha Dündar", url: siteUrl }],
  creator: "Hüseyin Talha Dündar",
  publisher: "Hüseyin Talha Dündar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title: "Hüseyin Talha Dündar | Yazılım Geliştirici",
    description:
      "Yazılım projelerimi, web geliştirme çalışmalarımı, yeteneklerimi ve deneyimlerimi keşfedin.",
    siteName: "Hüseyin Talha Dündar Portföy",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hüseyin Talha Dündar yazılım geliştirici portföyü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hüseyin Talha Dündar | Yazılım Geliştirici",
    description:
      "Yazılım projelerimi, web geliştirme çalışmalarımı, yeteneklerimi ve deneyimlerimi keşfedin.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060608",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
