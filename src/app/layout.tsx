import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { avantGarde, Butcherman, gambarino } from "./fonts/avantgarde";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: {
    template: "Samir Shakya",
    default: "Samir Shakya - Fullstack Developer",
  },
  description:
    "Samir Shakya, web developer. Creating visually stunning and highly functional web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` `}>
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${barlow.variable} ${geistMono.variable} ${avantGarde.variable} ${gambarino.variable} ${Butcherman.variable} antialiased`}
      >
        <SmoothScrollProvider />
        <NavBar />
        {/* <h1 className="font-gambarino text-3xl">Custom AvantGarde Heading</h1> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
