'use client';

import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const paths = [
  { url: '/', name: 'Home' },
  { url: '/task', name: 'Tasks' }
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <div className="py-5 flex z-[100] absolute top-0 left-0 w-full" itemScope itemType="https://schema.org/WPHeader">
      <div className="w-full container mx-auto px-6 lg:px-20 text-white">
        <div className='container mx-auto px-6 lg:px-20 flex items-center'>
          <div className={`${styles.logo} rounded mr-3`}>
            <Link href="/" className="hidden md:block"><Image src="/logo.png" alt="JS-Lab" width={40} height={40} itemProp="logo" /></Link>
            <Link href="/" className="block md:hidden"><Image src="/logo.png" alt="JS-Lab" width={26} height={26} itemProp="logo" /></Link>
          </div>

          <nav itemScope itemType="https://schema.org/SiteNavigationElement">
            <ul className="flex items-center">
              {paths.map(path => (
                <li itemProp="name" key={path.url}>
                  <Link className={`py-2 px-1 ${activePathname === path.url ? 'accent__text' : ''}`} href={path.url} itemProp="url">{path.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}