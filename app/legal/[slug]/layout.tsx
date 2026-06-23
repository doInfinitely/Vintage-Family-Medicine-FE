import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SLUG_TITLES: Record<string, string> = {
  'privacy-policy': 'Privacy Policy',
  'hipaa-notice': 'HIPAA Notice of Privacy Practices',
  'terms-of-use': 'Terms of Use',
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const title = SLUG_TITLES[params.slug] ?? 'Legal';
  return { title };
}

export default function LegalSlugLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
