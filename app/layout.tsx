import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextUIProvider } from "@nextui-org/react";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/utils/cn";
import { gotham } from "@/utils/fonts";
import { longDescription } from "@/utils/config";
import { ReadOnlyChildren } from "@/utils/types";
import UIHelpers from "@/components/ui/UIHelpers/UIHelpers";
import Navbar from "@/components/ui/Navbar/Navbar";
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/wrapper/ErrorBoundary/ErrorBoundary';
import "./globals.css";

const NavIcons = dynamic(() => import('@/components/ui/NavIcons/NavIcons'));

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amanarya.com/"),

  title: {
    template: "%s | Portfolio",
    default: "Ayush Dwivedi",
  },
  authors: {
    name: "Ayush Dwivedi",
  },
  description: longDescription,
  openGraph: {
    title: "Ayush Dwivedi | Portfolio",
    description: longDescription,
    url: "https://www.amanarya.com/",
    siteName: "Ayush Dwivedi | Portfolio",
    images: "https://www.amanarya.com/logo.png",
    type: "website",
  },
  twitter: {
    title: "Ayush Dwivedi | Portfolio",
    description: longDescription,
    images: "https://www.amanarya.com/icon.png",
  },
  keywords: ["Ayush Dwivedi", "Portfolio", "Ayush Dwivedi Portfolio", "Ayush Dwivedi | Portfolio", "Ayush", "Ayush's Portfolio", "Ayush Portfolio", "Ayush", "Ayush portfolio", "Ayush's portfolio"],
  manifest: "https://www.amanarya.com/manifest.json",
  icons: [
    {
      "url": "https://www.amanarya.com/icon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "url": "https://www.amanarya.com/icon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "url": "https://www.amanarya.com/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "url": "https://www.amanarya.com/icon-1024x1024.png",
      "sizes": "1024x1024",
      "type": "image/png"
    },
    {
      "url": "https://www.amanarya.com/icon.png",
      "sizes": "234x203",
      "type": "image/png"
    },
    {
      "url": "https://www.amanarya.com/maskable_icon.png",
      "sizes": "1024x1024",
      "type": "image/png"
    }
  ],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 98%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(0 0% 7.8%)' },
  ],
}

export default function RootLayout({ children }: ReadOnlyChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(gotham.className, gotham.variable, 'antialiased', 'overflow-x-hidden')}>
        <ErrorBoundary>
          <ThemeProvider>
            <NextUIProvider>

              <Navbar />
              <NavIcons />

              <QueryProvider>
                {children}
              </QueryProvider>

              <UIHelpers />

              <Toaster position="top-center" reverseOrder={false} />

            </NextUIProvider>
          </ThemeProvider>
        </ErrorBoundary>

        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}
