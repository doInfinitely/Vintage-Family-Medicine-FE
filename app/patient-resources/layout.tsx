import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Patient Resources',
  description:
    'Access patient forms, the Athena patient portal, FAQs, and secure messaging for Vintage Family Medicine and Pediatrics patients.',
};

export default function PatientResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
