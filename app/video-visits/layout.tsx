import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Video Visits',
  description:
    'See your doctor from home with secure video visits at Vintage Family Medicine and Pediatrics. Available Mon–Fri via Klara.',
};

export default function VideoVisitsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
