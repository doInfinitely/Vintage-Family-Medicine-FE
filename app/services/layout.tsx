import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive primary care and pediatric services including preventive care, chronic disease management, video visits, and more in Lewisville, TX.',
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
