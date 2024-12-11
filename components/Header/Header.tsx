'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className="py-5 flex relative z-10" itemScope itemType="https://schema.org/WPHeader">
      <div className='container mx-auto px-6 lg:px-20 flex items-center'>
        <div className={`${styles.logo} rounded mr-3`}>
          <Link href="/" className="hidden md:block"><Image src="/logo.png" alt="JS-Lab" width={40} height={40} itemProp="logo" /></Link>
          <Link href="/" className="block md:hidden"><Image src="/logo.png" alt="JS-Lab" width={26} height={26} itemProp="logo" /></Link>
        </div>
        
        <nav itemScope itemType="https://schema.org/SiteNavigationElement">
          <ul className="flex items-center">
            <li itemProp="name">
              <Link className="py-2 px-1" href="/" itemProp="url">Home</Link>
            </li>
            <li itemProp="name">
              <Link className="py-2 px-1" href="/task" itemProp="url">Tasks</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}