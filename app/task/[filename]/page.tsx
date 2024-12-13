import { Metadata } from 'next';
import { Task } from "@/app/models/Task";
import TaskItemContent from './TaskItemContent';

type Params = Promise<{ filename: string }>

export async function generateMetadata({ params }: { params: Params}): Promise<Metadata> {
  const { filename } = await params;
  const task = Task.getTask(filename);

  if (!task) {
    return {
      title: 'JS-Lab | Task Not Found',
      description: 'The task you are looking for does not exist. Please check the URL and try again.',
    };
  }

  const title = `JS-Lab | Solve ${task.title} - Coding Task for Interview Preparation`;
  const description = `${task.title} is a ${task.levelName} coding challenge designed to enhance your skills and prepare you for technical interviews.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://js-laboratory.vercel.app/task/${task.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://js-laboratory.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${task.title} OG Image`,
        },
      ],
      url: `https://js-laboratory.vercel.app/task/${task.slug}`,
      type: 'website',
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": task.title,
        "description": task.description,
        "url": `https://js-laboratory.vercel.app/task/${task.slug}`,
      }),
    }
  };
}

export default async function TaskPageServer({ params }: { params: Params }) {
  const { filename } = await params;
  return <TaskItemContent filename={filename} />;
}
