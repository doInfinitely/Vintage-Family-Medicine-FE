'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/translations';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'Nuestro Médico' : 'Our Physician'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{a.title}</h1>
          <p className="text-xl text-blue-200">{a.doctorTitle}</p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Photo placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-cream border-4 border-brand-teal flex items-center justify-center text-5xl mb-4">
                👨‍⚕️
              </div>
              <h2 className="text-xl font-bold text-brand-navy text-center">{a.doctorTitle}</h2>
              <p className="text-gray-500 text-sm text-center mt-1">{a.doctorSubtitle}</p>
            </div>
            {/* Bio */}
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow={language === 'es' ? 'Biografía' : 'Biography'}
                title={language === 'es' ? 'Acerca del Dr. Ochei' : 'About Dr. Ochei'}
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">{a.biography}</p>
              <div className="mt-6">
                <CtaButton actionKey="schedule_appointment" language={language} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={language === 'es' ? 'Formación' : 'Training'} title={a.education.title} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Escuela de Medicina' : 'Medical School'}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{a.education.medical}</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Pasantías' : 'Internships'}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{a.education.internships}</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Entrenamiento Quirúrgico' : 'Surgical Training'}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{a.education.surgical}</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Medicina Familiar' : 'Family Medicine'}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{a.education.family}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointments & Directorships */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader eyebrow="" title={a.appointments.title} />
              <ul className="mt-6 space-y-3">
                {a.appointments.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-brand-teal mt-1 flex-shrink-0">▸</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="" title={a.directorships.title} />
              <ul className="mt-6 space-y-3">
                {a.directorships.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-brand-teal mt-1 flex-shrink-0">▸</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient-Centered / DPC */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={language === 'es' ? 'Nuestro Modelo' : 'Our Model'}
            title={language === 'es' ? 'Atención Centrada en el Paciente' : 'Patient-Centered Care'}
            subtitle={
              language === 'es'
                ? 'El modelo de Atención Primaria Directa (DPC) le da más tiempo con su médico, citas el mismo día y atención verdaderamente personalizada.'
                : 'The Direct Primary Care (DPC) model gives you more time with your physician, same-day appointments, and truly personalized care.'
            }
            centered
          />
          <div className="mt-8">
            <Link
              href="/direct-primary-care"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-lg"
            >
              {language === 'es' ? 'Aprende sobre DPC →' : 'Learn about DPC →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader eyebrow="" title={a.mission.title} />
              <ul className="mt-6 space-y-3">
                {a.mission.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="" title={a.vision.title} />
              <ul className="mt-6 space-y-3">
                {a.vision.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Choose Us */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={language === 'es' ? 'Por Qué Nos Eligen' : 'Why Patients Choose Us'}
            title={
              language === 'es'
                ? '3 Décadas · 4 Continentes · Miles de Pacientes'
                : '3 Decades · 4 Continents · Thousands of Patients'
            }
            centered
            light
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              {
                heading: language === 'es' ? 'Experiencia Incomparable' : 'Unmatched Experience',
                body: language === 'es'
                  ? 'Más de 30 años de práctica médica en múltiples especialidades y entornos.'
                  : 'Over 30 years of medical practice across multiple specialties and settings.',
              },
              {
                heading: language === 'es' ? 'Acceso Verdadero' : 'True Access',
                body: language === 'es'
                  ? 'Citas el mismo día o al siguiente, sin largas esperas.'
                  : 'Same-day or next-day appointments — no long waits.',
              },
              {
                heading: language === 'es' ? 'Atención Personalizada' : 'Personalized Care',
                body: language === 'es'
                  ? 'Su médico le conoce a usted, su historia y sus objetivos de salud.'
                  : 'Your physician knows you, your history, and your health goals.',
              },
              {
                heading: language === 'es' ? 'Tecnología Integrada' : 'Integrated Technology',
                body: language === 'es'
                  ? 'Video visitas, mensajes seguros y acceso remoto a sus registros de salud.'
                  : 'Video visits, secure messaging, and remote access to your health records.',
              },
            ].map((item) => (
              <div key={item.heading} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{item.heading}</h3>
                <p className="text-blue-100 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaButton actionKey="schedule_appointment" language={language} variant="primary-light" />
          </div>
        </div>
      </section>
    </>
  );
}
