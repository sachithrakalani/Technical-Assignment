import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanka Stayz | Discover Your Perfect Stay",
  description:
    "Find beautiful villas, holiday homes and unique stays across Sri Lanka.",
  icons: {
    icon: "/images/image1.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-emerald-950">
        <Navbar />
        <div id="content" tabIndex={-1} className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
