'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/translations';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const CONDITIONS_EN = [
  'Diabetes', 'Hypertension', 'High Cholesterol', 'Asthma', 'COPD',
  'Hypothyroidism', 'Obesity', 'Congestive Heart Failure', 'Depression',
  'Anxiety', 'Arthritis', 'GERD', 'Sleep Apnea', 'Chronic Pain',
  'Anemia', 'Atrial Fibrillation', 'Kidney Disease', 'Liver Disease',
];

const CONDITIONS_ES = [
  'Diabetes', 'Hipertensión', 'Colesterol Alto', 'Asma', 'EPOC',
  'Hipotiroidismo', 'Obesidad', 'Insuficiencia Cardíaca Congestiva', 'Depresión',
  'Ansiedad', 'Artritis', 'ERGE', 'Apnea del Sueño', 'Dolor Crónico',
  'Anemia', 'Fibrilación Auricular', 'Enfermedad Renal', 'Enfermedad Hepática',
];

const SERVICE_ICONS: Record<string, string> = {
  'Urgent Care': '🚑',
  'Atención de Urgencias': '🚑',
  'Chronic Disease Management': '🩺',
  'Manejo de Enfermedades Crónicas': '🩺',
  'Diabetes': '💉',
  'High Blood Pressure': '❤️',
  'Presión Arterial Alta': '❤️',
  'High Cholesterol': '🧪',
  'Colesterol Alto': '🧪',
  'Asthma': '🫁',
  'Asma': '🫁',
  'Cold and Allergies': '🤧',
  'Resfriados y Alergias': '🤧',
  'Stomach Problems': '🫃',
  'Problemas Estomacales': '🫃',
  'Sexual Health': '💊',
  'Salud Sexual': '💊',
  "Women's Health": '👩',
  'Salud de la Mujer': '👩',
  "Men's Health": '👨',
  'Salud del Hombre': '👨',
  'Medical Weight Loss': '⚖️',
  'Pérdida de Peso Médica': '⚖️',
  'Smoking cessation': '🚭',
  'Dejar de Fumar': '🚭',
  'Video Visits': '💻',
  default: '🏥',
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const conditions = language === 'es' ? CONDITIONS_ES : CONDITIONS_EN;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'Atención Integral' : 'Comprehensive Care'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl text-blue-200">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Todos los Servicios' : 'All Services'}
            title={language === 'es' ? 'Lo Que Tratamos' : 'What We Treat'}
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.list.map((service) => (
              <Card
                key={service}
                className="flex items-start gap-4 hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-2xl flex-shrink-0">
                  {SERVICE_ICONS[service] ?? SERVICE_ICONS.default}
                </span>
                <span className="text-brand-navy font-medium">{service}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions section */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Enfermedades Crónicas' : 'Chronic Conditions'}
            title={
              language === 'es'
                ? 'Manejo de Enfermedades Crónicas'
                : 'Chronic Disease Management'
            }
            subtitle={
              language === 'es'
                ? 'Manejamos una amplia gama de enfermedades crónicas con un enfoque basado en evidencia y centrado en el paciente.'
                : 'We manage a broad spectrum of chronic conditions with an evidence-based, patient-centered approach.'
            }
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {conditions.map((condition) => (
              <span
                key={condition}
                className="px-4 py-2 bg-white text-brand-navy text-sm font-medium rounded-full border border-gray-200 shadow-sm"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Prevención' : 'Prevention'}
                title={t.home.preventiveTitle}
                subtitle={t.home.preventiveDescription}
              />
            </div>
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Estilo de Vida' : 'Lifestyle'}
                title={t.home.lifestyleTitle}
                subtitle={t.home.lifestyleDescription}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es' ? '¿Listo para reservar?' : 'Ready to book?'}
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {language === 'es'
              ? 'Programe una cita hoy y comience su camino hacia una mejor salud.'
              : 'Schedule an appointment today and start your journey to better health.'}
          </p>
          <CtaButton actionKey="schedule_appointment" language={language} variant="primary-light" />
        </div>
      </section>
    </>
  );
}
