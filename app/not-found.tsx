'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import CtaButton from '@/components/ui/CtaButton';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">404</p>
        <h1 className="text-4xl font-bold text-brand-navy mb-4">
          {language === 'es' ? 'Página No Encontrada' : 'Page Not Found'}
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          {language === 'es'
            ? 'La página que busca no existe o ha sido movida.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === 'es' ? 'Volver al Inicio' : 'Return Home'}
          </Link>
          <CtaButton actionKey="schedule_appointment" language={language} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
