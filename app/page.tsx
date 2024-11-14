import Hero from "@/components/Hero";
import { getTasks, getTitle } from '@/utils';
import Link from 'next/link';

export default function Home() {
  const files = getTasks();

  return (
    <div>
      <Hero />
      <ul>
        {files.map(file => (<li key={file}>
          <Link href={'/task/' + file}>{getTitle(file)}</Link>
        </li>))}
      </ul>
    </div>
  );
}
