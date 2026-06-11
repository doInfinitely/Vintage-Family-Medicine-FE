'use client';

import { useLanguage } from '@/components/LanguageProvider';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const STEPS_EN = [
  { step: '1', heading: 'Schedule', body: 'Book your video visit through Klara — same-day or next-day appointments available.' },
  { step: '2', heading: 'Receive Link', body: "We'll send you a secure, HIPAA-compliant video link before your appointment." },
  { step: '3', heading: 'Join From Any Device', body: 'Connect from your phone, tablet, or computer — no app download or special software required.' },
  { step: '4', heading: 'Get Care', body: 'Have a complete visit with Dr. Ochei just as you would in the office.' },
];

const STEPS_ES = [
  { step: '1', heading: 'Programar', body: 'Reserve su visita por video a través de Klara: citas disponibles el mismo día o al siguiente.' },
  { step: '2', heading: 'Recibir Enlace', body: 'Le enviaremos un enlace de video seguro y compatible con HIPAA antes de su cita.' },
  { step: '3', heading: 'Únase Desde Cualquier Dispositivo', body: 'Conéctese desde su teléfono, tableta o computadora, sin necesidad de descargar aplicaciones ni software especial.' },
  { step: '4', heading: 'Recibir Atención', body: 'Tenga una consulta completa con el Dr. Ochei igual que en la consulta presencial.' },
];

const VISIT_TYPES_EN = [
  'Cold, flu, and respiratory symptoms',
  'Prescription refills and medication management',
  'Follow-up visits for chronic conditions',
  'Mental health check-ins and counseling',
  'Skin conditions (rashes, acne, minor injuries)',
  'Lab result review and interpretation',
  'Minor eye, ear, nose, and throat issues',
  'Travel medicine consultations',
  'Preventive care and health coaching',
  'COVID-19 assessment and guidance',
];

const VISIT_TYPES_ES = [
  'Resfriados, gripe y síntomas respiratorios',
  'Recargas de recetas y manejo de medicamentos',
  'Visitas de seguimiento para condiciones crónicas',
  'Consultas de salud mental y asesoramiento',
  'Condiciones de la piel (erupciones, acné, lesiones menores)',
  'Revisión e interpretación de resultados de laboratorio',
  'Problemas menores de ojos, oídos, nariz y garganta',
  'Consultas de medicina de viajes',
  'Atención preventiva y coaching de salud',
  'Evaluación y orientación COVID-19',
];

export default function VideoVisitsPage() {
  const { language } = useLanguage();
  const steps = language === 'es' ? STEPS_ES : STEPS_EN;
  const visitTypes = language === 'es' ? VISIT_TYPES_ES : VISIT_TYPES_EN;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'Telemedicina' : 'Telehealth'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'es'
              ? 'Visitas por Video'
              : 'Video Visits'}
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Atención de calidad desde la comodidad de su hogar. Con el médico que conoce y en quien confía.'
              : 'Quality care from the comfort of your home. With the physician you know and trust.'}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'El Proceso' : 'How It Works'}
            title={language === 'es' ? 'Así de Sencillo' : 'Simple as 1-2-3-4'}
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{s.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What can be handled via video */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Tipos de Visita' : 'Visit Types'}
            title={
              language === 'es'
                ? '¿Qué se Puede Manejar por Video?'
                : 'What Can Be Handled via Video?'
            }
            subtitle={
              language === 'es'
                ? 'Muchas consultas médicas son igual de efectivas por video que en persona.'
                : 'Many medical visits are just as effective via video as in person.'
            }
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visitTypes.map((type) => (
              <div key={type} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-brand-teal mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology note */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'HIPAA Seguro' : 'HIPAA Secure'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es'
                  ? 'Todas las visitas por video están encriptadas y cumplen con HIPAA para proteger su privacidad.'
                  : 'All video visits are encrypted and HIPAA-compliant to protect your privacy.'}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Cualquier Dispositivo' : 'Any Device'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es'
                  ? 'iPhone, Android, tableta o computadora. No se requiere descarga ni cuenta especial.'
                  : 'iPhone, Android, tablet, or computer. No download or special account required.'}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-semibold text-brand-navy mb-2">
                {language === 'es' ? 'Sin Software Especial' : 'No Special Software'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es'
                  ? 'Solo haga clic en el enlace que le enviamos. No se requieren instalaciones.'
                  : 'Just click the link we send you. No installations required.'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="bg-amber-50 border-y border-amber-200 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-800 font-medium">
            <span className="font-bold">
              {language === 'es' ? 'Nota importante: ' : 'Important note: '}
            </span>
            {language === 'es'
              ? 'Para enviar documentos, formularios o registros médicos, utilice el portal Klara o Athena, no el chat de video.'
              : 'To send documents, forms, or medical records, please use the Klara or Athena portal — not the video chat.'}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es'
              ? '¿Listo para su visita por video?'
              : 'Ready for your video visit?'}
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {language === 'es'
              ? 'Reserve su visita por video ahora a través de Klara.'
              : 'Book your video visit now through Klara.'}
          </p>
          <CtaButton actionKey="video_visit" language={language} variant="primary-light" />
        </div>
      </section>
    </>
  );
}
