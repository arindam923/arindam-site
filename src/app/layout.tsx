import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Web Development Agency",
  description:
    "Premium web and app templates to elevate your digital presence.",
  keywords:
    "web templates, app templates, web development, app development, UI kits, responsive design",
  openGraph: {
    title: "Modern Web Development Agency",
    description:
      "Premium web and app templates to elevate your digital presence.",
    url: "https://www.arindam.shop", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://www.arindam.shop/arshop.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Modern Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ArindamRoy89203", // Replace with your actual Twitter handle
    creator: "@ArindamRoy89203", // Replace with your actual Twitter handle
    title: "Modern Web Development Agency",
    description:
      "Premium web and app templates to elevate your digital presence.",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-neutral-950 w-full min-h-screen text-white ",
          inter.className
        )}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
