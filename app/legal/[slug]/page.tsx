'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageProvider';

const LEGAL_CONTENT: Record<string, { title_en: string; title_es: string; body_en: string; body_es: string }> = {
  'privacy-policy': {
    title_en: 'Privacy Policy',
    title_es: 'Política de Privacidad',
    body_en: 'TODO: Insert privacy policy text here.',
    body_es: 'TODO: Insertar texto de política de privacidad aquí.',
  },
  'hipaa-notice': {
    title_en: 'HIPAA Notice of Privacy Practices',
    title_es: 'Aviso de Prácticas de Privacidad HIPAA',
    body_en: 'TODO: Insert HIPAA Notice of Privacy Practices text here.',
    body_es: 'TODO: Insertar texto del Aviso de Prácticas de Privacidad HIPAA aquí.',
  },
  'terms-of-use': {
    title_en: 'Terms of Use',
    title_es: 'Términos de Uso',
    body_en: 'TODO: Insert terms of use text here.',
    body_es: 'TODO: Insertar texto de términos de uso aquí.',
  },
};

export default function LegalPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? '');
  const { language } = useLanguage();

  const page = LEGAL_CONTENT[slug];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy mb-2">
            {language === 'es' ? 'Página No Encontrada' : 'Page Not Found'}
          </h1>
          <p className="text-gray-600">
            {language === 'es'
              ? 'La página legal que solicitó no existe.'
              : 'The legal page you requested does not exist.'}
          </p>
        </div>
      </div>
    );
  }

  const title = language === 'es' ? page.title_es : page.title_en;
  const body = language === 'es' ? page.body_es : page.body_en;

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-3">
            {language === 'es' ? 'Información Legal' : 'Legal Information'}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-gray prose-lg max-w-none">
            <p>{body}</p>
          </div>
          <p className="mt-12 text-sm text-gray-400">
            {language === 'es'
              ? 'Vintage Family Medicine and Pediatrics · 860 Hebron Parkway, Suite 203, Lewisville, TX 75057-5143'
              : 'Vintage Family Medicine and Pediatrics · 860 Hebron Parkway, Suite 203, Lewisville, TX 75057-5143'}
          </p>
        </div>
      </section>
    </>
  );
}
