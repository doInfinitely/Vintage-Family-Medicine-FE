import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Direct Primary Care',
  description:
    'Learn about our Direct Primary Care membership model — unhurried visits, same-day appointments, and a direct relationship with your physician.',
};

export default function DirectPrimaryCareLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
