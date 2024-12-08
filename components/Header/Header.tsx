'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className="py-5 flex relative z-10">
      <div className='container mx-auto px-6 lg:px-20 flex items-center'>
        <div className={`${styles.logo} rounded mr-3`}>
          <Link href="/" className="hidden md:block"><Image src="/logo.png" alt="JS-Lab" width={40} height={40} /></Link>
          <Link href="/" className="block md:hidden"><Image src="/logo.png" alt="JS-Lab" width={26} height={26} /></Link>
        </div>
        
        <nav>
          <ul className="flex items-center">
            <li>
              <Link className="py-2 px-1" href="/">Home</Link>
            </li>
            <li>
              <Link className="py-2 px-1" href="/task">Tasks</Link>
            </li>
            </ul>
        </nav>
      </div>
    </div>
  );
}