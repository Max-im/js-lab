import Script from 'next/script';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Container from '@mui/material/Container';
import Footer from "@/components/Footer";
import Analytics from './analytics';

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

const title = "JS-Lab | Code Checking Platform";
const description = "A platform for checking and reviewing code. The most popular interview questions and tasks.";

export const metadata: Metadata = { title, description };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://js-laboratory.vercel.app" />
        {/* OpenGraph metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://js-laboratory.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://js-laboratory.vercel.app" />
        <meta property="og:type" content="website" />
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
            "url": "https://js-laboratory.vercel.app"
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen w-full min-w-[320px]">
          <Container maxWidth="xl" className="flex-grow">
            {children}
          </Container>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
