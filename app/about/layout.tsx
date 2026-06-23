import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Dr. Ochei',
  description:
    'Meet Dr. Kelechi Ochei, board-certified family medicine physician at Vintage Family Medicine and Pediatrics in Lewisville, TX.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
