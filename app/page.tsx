import Hero from "@/components/Hero";
import TaskCard from "@/components/TaskCard";
import { getTasks, getTitle } from '@/utils';
import Link from 'next/link';

export default function Home() {
  const files = getTasks();

  return (
    <div>
      <Hero />
      <ul className="flex mt-5 justify-between">
        {files.map(file => (<li key={file}>
          <Link href={'/task/' + file}><TaskCard card={getTitle(file)} /></Link>
        </li>))}
      </ul>
    </div>
  );
}
