import { Suspense } from 'react';
import Head from 'next/head';
import { Metadata } from 'next';
import TasksContent from './TasksContent';

const title = 'JS-Lab | Programming Tasks for Interview Preparation';
const description = 'Master your coding skills with expert-designed programming tasks. Perfect for interview preparation and sharpening problem-solving abilities.';

export const metadata: Metadata = { 
  title,
  description,
  alternates: {
    canonical: 'https://js-laboratory.vercel.app/task',
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
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": `https://js-laboratory.vercel.app/task/`,
      "potentialAction": {
          "@type": "SearchAction",
          "target": "https://js-laboratory.vercel.app/search?level={search_term}",
          "query-input": "required name=search_term"
        }
    }),
  }
};

export default function Tasks() {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://js-laboratory.vercel.app/task" />
        {/* OpenGraph metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://js-laboratory.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://js-laboratory.vercel.app/task" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": "https://js-laboratory.vercel.app/task"
          })}
        </script>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <TasksContent />
      </Suspense>
    </>
  );
}

