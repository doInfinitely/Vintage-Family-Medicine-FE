'use client';

import { useState, useEffect } from 'react';
import type { Announcement } from '@/lib/api';

const TYPE_STYLES: Record<string, string> = {
  info: 'bg-brand-blue text-white',
  warning: 'bg-amber-500 text-white',
  urgent: 'bg-red-600 text-white',
};

export default function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return;
    fetch(`${apiUrl}/api/announcements/active`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data)) setAnnouncements(data);
      })
      .catch(() => {});
  }, []);

  const visible = announcements.filter((a) => !dismissed.has(a.id));
  if (visible.length === 0) return null;

  return (
    <div className="z-40">
      {visible.map((a) => (
        <div
          key={a.id}
          className={`${TYPE_STYLES[a.type] ?? TYPE_STYLES.info} py-2 px-4 text-sm text-center relative`}
          role="alert"
        >
          <span>{a.message}</span>
          <button
            onClick={() => setDismissed((prev) => new Set([...prev, a.id]))}
            className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-lg leading-none opacity-70 hover:opacity-100"
            aria-label="Dismiss announcement"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
