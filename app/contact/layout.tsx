import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Vintage Family Medicine and Pediatrics — call (972) 315-5144, send a secure message via Klara, or visit us at 860 Hebron Pkwy, Suite 203, Lewisville, TX.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
