'use client';

import { useLanguage } from '@/components/LanguageProvider';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const BENEFITS_EN = [
  {
    icon: '⚡',
    heading: 'Less Waiting',
    body: 'Same-day or next-day appointments mean you get care when you need it — not weeks from now. No long waits in the waiting room.',
  },
  {
    icon: '⏱️',
    heading: 'More Physician Time',
    body: 'By limiting patient panel size, Dr. Ochei has the time to truly get to know you. Expect unhurried visits focused on your complete health picture.',
  },
  {
    icon: '🎯',
    heading: 'Personalized Care',
    body: 'Your care plan is built around you — your lifestyle, preferences, and health goals — not a generic protocol.',
  },
  {
    icon: '♾️',
    heading: 'Chronic Illness Support',
    body: 'Proactive, continuous management of diabetes, hypertension, asthma, heart disease, and more. Stay ahead of your condition.',
  },
  {
    icon: '🛡️',
    heading: 'Preventive Health Coaching',
    body: 'Screening, lifestyle coaching, nutrition, and exercise guidance to keep you healthy and reduce long-term risk.',
  },
  {
    icon: '🔗',
    heading: 'Care Coordination',
    body: 'We are your quarterback through the healthcare maze — coordinating specialists, referrals, and follow-ups on your behalf.',
  },
];

const BENEFITS_ES = [
  {
    icon: '⚡',
    heading: 'Menos Espera',
    body: 'Las citas el mismo día o al siguiente significan que recibe atención cuando la necesita, no semanas después. Sin largas esperas en la sala de espera.',
  },
  {
    icon: '⏱️',
    heading: 'Más Tiempo con su Médico',
    body: 'Al limitar el número de pacientes, el Dr. Ochei tiene tiempo para conocerle verdaderamente. Espere visitas tranquilas enfocadas en su salud completa.',
  },
  {
    icon: '🎯',
    heading: 'Atención Personalizada',
    body: 'Su plan de atención está construido alrededor de usted: su estilo de vida, preferencias y objetivos de salud, no un protocolo genérico.',
  },
  {
    icon: '♾️',
    heading: 'Apoyo para Enfermedades Crónicas',
    body: 'Manejo proactivo y continuo de diabetes, hipertensión, asma, enfermedades cardíacas y más. Mantente adelante de su condición.',
  },
  {
    icon: '🛡️',
    heading: 'Coaching de Salud Preventiva',
    body: 'Exámenes, coaching de estilo de vida, nutrición y orientación sobre ejercicio para mantenerse saludable y reducir el riesgo a largo plazo.',
  },
  {
    icon: '🔗',
    heading: 'Coordinación de Atención',
    body: 'Somos su mariscal de campo en el laberinto de la atención médica: coordinamos especialistas, derivaciones y seguimientos en su nombre.',
  },
];

export default function DirectPrimaryCarePage() {
  const { language } = useLanguage();
  const benefits = language === 'es' ? BENEFITS_ES : BENEFITS_EN;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-teal text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-200 font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'DPC' : 'DPC'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'es' ? 'Atención Primaria Directa' : 'Direct Primary Care'}
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Atención centrada en el paciente que pone su salud primero — no el reloj, no el seguro, no el papeleo.'
              : 'Patient-centered care that puts your health first — not the clock, not the insurance, not the paperwork.'}
          </p>
        </div>
      </section>

      {/* What is DPC */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'El Modelo' : 'The Model'}
            title={language === 'es' ? '¿Qué es la Atención Primaria Directa?' : 'What Is Direct Primary Care?'}
            subtitle={
              language === 'es'
                ? 'Un médico de DPC tiene significativamente menos pacientes que un médico de atención primaria tradicional. Esto crea un estándar de atención completamente diferente: más tiempo, más acceso y más atención personalizada.'
                : 'A DPC physician has significantly fewer patients than a traditional primary care doctor. This creates a completely different standard of care: more time, more access, and more personalized attention.'
            }
          />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Beneficios' : 'Benefits'}
            title={language === 'es' ? 'Lo Que Obtienes' : 'What You Get'}
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card key={b.heading} className="hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-brand-navy font-semibold text-lg mb-2">{b.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unhurried visits */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Su Experiencia' : 'Your Experience'}
                title={language === 'es' ? 'Visitas Sin Prisa' : 'Unhurried Visits'}
                subtitle={
                  language === 'es'
                    ? 'En lugar de una visita de 7 minutos donde el médico apenas levanta la vista de la computadora, tendrá el tiempo que necesita para explicar sus síntomas, hacer preguntas y entender su plan de atención.'
                    : "Instead of a 7-minute visit where the physician barely looks up from the computer, you'll have the time you need to explain your symptoms, ask questions, and understand your care plan."
                }
              />
            </div>
            <div className="bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🩺</div>
              <p className="text-brand-navy font-semibold text-lg">
                {language === 'es'
                  ? 'Tiempo adecuado · Atención real · Sin apuros'
                  : 'Adequate time · Real attention · No rushing'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es'
              ? '¿Listo para una mejor experiencia de atención médica?'
              : 'Ready for a better healthcare experience?'}
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {language === 'es'
              ? 'Programe su primera cita y experimente la diferencia.'
              : 'Schedule your first appointment and experience the difference.'}
          </p>
          <CtaButton actionKey="schedule_appointment" language={language} variant="primary-light" />
        </div>
      </section>
    </>
  );
}
