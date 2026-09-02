import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SLUG_TITLES: Record<string, string> = {
  'privacy-policy': 'Privacy Practices',
  'hipaa-notice': 'Notice of Privacy Practices',
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
