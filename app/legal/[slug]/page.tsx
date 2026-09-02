'use client';

import { notFound, useParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageProvider';
import { LEGAL_DOCS, type Block } from '@/lib/legal';

function renderBlock(block: Block, language: string, i: number) {
  if (block.t === 'ul') {
    const items = language === 'es' ? block.es : block.en;
    return (
      <ul key={i} className="list-disc pl-6 space-y-2 my-5 text-gray-700">
        {items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }

  const text = language === 'es' ? block.es : block.en;

  if (block.t === 'h2') {
    return (
      <h2 key={i} className="text-brand-navy font-bold text-2xl mt-12 mb-4 first:mt-0">
        {text}
      </h2>
    );
  }
  if (block.t === 'h3') {
    return (
      <h3 key={i} className="text-brand-navy font-semibold text-lg mt-8 mb-2">
        {text}
      </h3>
    );
  }
  return (
    <p key={i} className="text-gray-700 leading-relaxed my-4">
      {text}
    </p>
  );
}

export default function LegalPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? '');
  const { language } = useLanguage();

  const page = LEGAL_DOCS[slug];

  if (!page) {
    notFound();
  }

  const title = language === 'es' ? page.title_es : page.title_en;
  const intro = language === 'es' ? page.intro_es : page.intro_en;

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
          {intro && (
            <p className="text-lg text-gray-800 leading-relaxed mb-10 pb-8 border-b border-gray-200">
              {intro}
            </p>
          )}
          {page.blocks.map((block, i) => renderBlock(block, language, i))}
          <p className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
            Vintage Family Medicine and Pediatrics · 860 Hebron Parkway, Suite 203, Lewisville, TX
            75057-5143
          </p>
        </div>
      </section>
    </>
  );
}
