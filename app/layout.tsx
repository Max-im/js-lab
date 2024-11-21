import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Container from '@mui/material/Container';
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "js-lab | Code Checking Platform",
  description: "A platform for checking and reviewing code. The most popular interview questions and tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen w-full">
          <Container maxWidth="lg" className="flex-grow">
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
