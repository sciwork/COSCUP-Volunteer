import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Yanone_Kaffeesatz } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderPadding from "@/components/HeaderPadding";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yanone-kaffeesatz",
});

export async function generateMetadata() {
  return {
    title: {
      default: "sciwork Volunteer",
      template: "sciwork Volunteer - %s",
    },
    description: "Science, code, and open source.",
    metadataBase: process.env.SITEURL && new URL(process.env.SITEURL),
    openGraph: {
      title: "sciwork Volunteer",
      description: "science, code, and open source.",
      url: process.env.SITEURL,
      siteName: "sciwork Volunteer",
      images: [
        {
          url: "/meta.jpg",
          width: 1024,
          height: 512,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "sciwork 2023",
      description: "science, code, and open source.",
      images: ["/meta.jpg"],
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "any",
        },
        {
          url: "/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
      ],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "tw-relative tw-flex tw-min-h-screen tw-w-full tw-flex-col tw-overscroll-none tw-bg-gray-200",
          inter.className,
          yanone.variable,
        )}
      >
        <Header className="tw-fixed tw-top-0 tw-z-10" />
        <HeaderPadding />
        <main className="tw-grow">{children}</main>
        <Footer />
        <div id="portal" />
      </body>
    </html>
  );
}
