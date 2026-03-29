import type { Metadata } from "next";
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
  title: "BEIRUX — Digital Product Studio",
  description:
    "BEIRUX is a full-service digital product studio built for the AI era. We design, build, and ship everything a business needs to exist and thrive online.",
  keywords: ["digital agency", "AI", "product studio", "web development", "design"],
  openGraph: {
    title: "BEIRUX — Digital Product Studio",
    description:
      "We design, build, and ship everything a business needs to exist and thrive online.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
