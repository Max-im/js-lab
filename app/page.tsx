import fs from 'fs';
import path from 'path';
import Hero from "@/components/Hero";
import { getFilename, getTitle } from '@/utils';
import Link from 'next/link';

export default function Home() {
  const folderPath = path.join(process.cwd(), 'tasks');
  const files = fs.readdirSync(folderPath);
  files.sort();

  return (
    <div>
      <Hero />
      <ul>

        {files.map(file => (<li key={file}>
          <Link href={'/task/' + getFilename(file)}>{getTitle(file)}</Link>
        </li>))}
      </ul>
    </div>
  );
}
