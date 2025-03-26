import Script from 'next/script';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import Analytics from './analytics';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/Header';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "JS-Lab | Solve Coding Challenges and Prepare for Technical Interviews";
const description =
  "JS-Lab offers coding challenges and technical interview tasks to help you sharpen your programming skills. Practice real-world coding problems and ace your next interview.";


export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://js-laboratory.vercel.app",
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://js-laboratory.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Interview Tasks OG Image`,
      },
    ],
    url: `https://js-laboratory.vercel.app/task`,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add GA script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}/>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": {title},
            "description": {description},
            "url": "https://js-laboratory.vercel.app",
            "image": "https://js-laboratory.vercel.app/og-image.jpg",
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen w-full min-w-[320px]">
          <Header />
          <div className="flex-grow container mx-auto lg:px-20">
            {children}
          </div>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
