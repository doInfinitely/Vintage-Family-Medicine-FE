import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vintagefamilymedicine.com';

  const staticRoutes = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/about`, priority: 0.9 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/direct-primary-care`, priority: 0.8 },
    { url: `${base}/video-visits`, priority: 0.8 },
    { url: `${base}/patient-resources`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/legal/privacy-policy`, priority: 0.3 },
    { url: `${base}/legal/hipaa-notice`, priority: 0.3 },
    { url: `${base}/legal/terms-of-use`, priority: 0.3 },
  ];

  return staticRoutes.map((r) => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r.priority,
  }));
}
