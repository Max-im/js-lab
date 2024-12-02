'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
