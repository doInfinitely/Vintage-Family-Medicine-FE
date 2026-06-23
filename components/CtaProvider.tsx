'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Cta } from '@/lib/api';
import { getCtas, ctaArrayToMap } from '@/lib/api';

const CtaContext = createContext<Record<string, Cta>>({});

export function useCtaMap() {
  return useContext(CtaContext);
}

export function CtaProvider({ children }: { children: ReactNode }) {
  const [ctaMap, setCtaMap] = useState<Record<string, Cta>>({});

  useEffect(() => {
    getCtas().then((ctas) => {
      if (ctas) setCtaMap(ctaArrayToMap(ctas));
    });
  }, []);

  return <CtaContext.Provider value={ctaMap}>{children}</CtaContext.Provider>;
}
