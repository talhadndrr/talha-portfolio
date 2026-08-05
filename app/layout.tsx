import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    "Next.js",
    "JavaScript",
    "PHP",
    "Python",
    "C#",
    "Microsoft SQL Server",
  ],
  authors: [{ name: "Hüseyin Talha Dündar" }],
  creator: "Hüseyin Talha Dündar",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Hüseyin Talha Dündar | Yazılım Geliştirici",
    description:
      "Yazılım projelerimi, web geliştirme çalışmalarımı, yeteneklerimi ve deneyimlerimi keşfedin.",
    siteName: "Hüseyin Talha Dündar Portföy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hüseyin Talha Dündar | Yazılım Geliştirici",
    description:
      "Yazılım projelerimi, web geliştirme çalışmalarımı, yeteneklerimi ve deneyimlerimi keşfedin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060608",
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