'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/translations';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const FAQS_EN = [
  {
    category: 'Appointments',
    q: 'How do I schedule an appointment?',
    a: 'New patients schedule through Klara — our HIPAA-secure messaging and scheduling platform. Existing patients can book appointments through the Athena patient portal.',
  },
  {
    category: 'Appointments',
    q: 'Do you offer same-day appointments?',
    a: 'Yes! Same-day and next-day appointments are available. We pride ourselves on timely access to care.',
  },
  {
    category: 'New Patients',
    q: 'How do I become a new patient?',
    a: 'Click "Schedule Appointment" to book your first visit through Klara. New patient forms are also available digitally through Klara before your visit.',
  },
  {
    category: 'New Patients',
    q: 'What should I bring to my first appointment?',
    a: 'Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or test results.',
  },
  {
    category: 'Patient Portal',
    q: 'How do I access my health records?',
    a: 'Your electronic health records are accessible through the Athena patient portal. Use the "Patient Portal" button to log in or create your account.',
  },
  {
    category: 'Patient Portal',
    q: 'How do I pay my bill online?',
    a: 'Bills can be paid securely through the Athena portal. Click "Pay Bill" to access the payment portal.',
  },
  {
    category: 'Video Visits',
    q: 'Do I need special software for a video visit?',
    a: 'No — you just need a smartphone, tablet, or computer with a camera. We\'ll send you a secure link before your appointment.',
  },
  {
    category: 'Video Visits',
    q: 'Are video visits HIPAA compliant?',
    a: 'Yes. All video visits use an encrypted, HIPAA-compliant platform to protect your privacy.',
  },
];

const FAQS_ES = [
  {
    category: 'Citas',
    q: '¿Cómo programo una cita?',
    a: 'Los pacientes nuevos programan a través de Klara, nuestra plataforma de mensajería y programación segura de HIPAA. Los pacientes existentes pueden reservar citas a través del portal de pacientes de Athena.',
  },
  {
    category: 'Citas',
    q: '¿Ofrecen citas el mismo día?',
    a: 'Sí. Las citas el mismo día y al siguiente están disponibles. Nos enorgullece ofrecer acceso oportuno a la atención.',
  },
  {
    category: 'Pacientes Nuevos',
    q: '¿Cómo me convierto en un nuevo paciente?',
    a: 'Haga clic en "Programar Cita" para reservar su primera visita a través de Klara. Los formularios para nuevos pacientes también están disponibles digitalmente a través de Klara antes de su visita.',
  },
  {
    category: 'Pacientes Nuevos',
    q: '¿Qué debo llevar a mi primera cita?',
    a: 'Traiga una identificación con foto válida, su tarjeta de seguro, una lista de sus medicamentos actuales y cualquier registro médico o resultado de prueba relevante.',
  },
  {
    category: 'Portal del Paciente',
    q: '¿Cómo accedo a mis registros de salud?',
    a: 'Sus registros de salud electrónicos son accesibles a través del portal de pacientes de Athena. Use el botón "Portal del Paciente" para iniciar sesión o crear su cuenta.',
  },
  {
    category: 'Portal del Paciente',
    q: '¿Cómo pago mi factura en línea?',
    a: 'Las facturas se pueden pagar de forma segura a través del portal de Athena. Haga clic en "Pagar Factura" para acceder al portal de pago.',
  },
  {
    category: 'Visitas por Video',
    q: '¿Necesito software especial para una visita por video?',
    a: 'No, solo necesita un teléfono inteligente, tableta o computadora con cámara. Le enviaremos un enlace seguro antes de su cita.',
  },
  {
    category: 'Visitas por Video',
    q: '¿Las visitas por video cumplen con HIPAA?',
    a: 'Sí. Todas las visitas por video utilizan una plataforma encriptada y compatible con HIPAA para proteger su privacidad.',
  },
];

export default function PatientResourcesPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const faqs = language === 'es' ? FAQS_ES : FAQS_EN;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'Para Nuestros Pacientes' : 'For Our Patients'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.nav.patientResources}
          </h1>
          <p className="text-xl text-blue-200">
            {language === 'es'
              ? 'Todo lo que necesita para administrar su salud, en un solo lugar.'
              : 'Everything you need to manage your health, in one place.'}
          </p>
        </div>
      </section>

      {/* Patient Actions Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Acciones del Paciente' : 'Patient Actions'}
            title={language === 'es' ? 'Acceda a sus Servicios' : 'Access Your Services'}
            centered
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { key: 'patient_portal', icon: '🏥', label: language === 'es' ? 'Portal del Paciente' : 'Patient Portal', note: 'Athena' },
              { key: 'pay_bill', icon: '💳', label: language === 'es' ? 'Pagar Factura' : 'Pay Bill', note: 'Athena' },
              { key: 'schedule_appointment', icon: '📅', label: language === 'es' ? 'Programar Cita' : 'Schedule Appointment', note: 'Klara' },
              { key: 'message_us', icon: '💬', label: language === 'es' ? 'Enviar Mensaje' : 'Message Us', note: 'Klara' },
              { key: 'new_patient_forms', icon: '📋', label: language === 'es' ? 'Formularios Nuevos Pacientes' : 'New Patient Forms', note: 'Klara' },
              { key: 'video_visit', icon: '💻', label: language === 'es' ? 'Visita por Video' : 'Video Visit', note: 'Klara' },
              { key: 'call_us', icon: '📞', label: language === 'es' ? 'Llamar a la Oficina' : 'Call Office', note: 'RingCentral' },
              { key: 'text_us', icon: '📱', label: language === 'es' ? 'Enviar Texto' : 'Text Office', note: 'Klara' },
            ].map((item) => (
              <Card key={item.key} className="text-center hover:shadow-lg transition-shadow cursor-pointer group p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <CtaButton
                  actionKey={item.key}
                  language={language}
                  variant="ghost"
                  className="!px-0 !py-0 text-brand-navy font-medium text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">{item.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Patients */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Pacientes Existentes' : 'Existing Patients'}
                title={language === 'es' ? 'Ya es Nuestro Paciente' : 'Already Our Patient?'}
                subtitle={
                  language === 'es'
                    ? 'Acceda a su portal de salud, vea resultados de pruebas, pague su factura y gestione sus citas en Athena.'
                    : 'Access your health portal, view test results, pay your bill, and manage appointments in Athena.'
                }
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton actionKey="existing_patient_schedule" language={language} />
                <CtaButton actionKey="patient_portal" language={language} variant="secondary" />
                <CtaButton actionKey="pay_bill" language={language} variant="secondary" />
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Nuevos Pacientes' : 'New Patients'}
                title={language === 'es' ? '¿Primera Visita?' : 'First Visit?'}
                subtitle={
                  language === 'es'
                    ? 'Programe su primera cita y complete los formularios para nuevos pacientes a través de Klara antes de llegar.'
                    : 'Schedule your first appointment and complete new patient forms through Klara before you arrive.'
                }
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton actionKey="schedule_appointment" language={language} />
                <CtaButton actionKey="new_patient_forms" language={language} variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video visit instructions */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={language === 'es' ? 'Telemedicina' : 'Telehealth'}
            title={language === 'es' ? 'Visitas por Video' : 'Video Visits'}
            subtitle={
              language === 'es'
                ? 'Reciba atención de calidad desde cualquier lugar. No se requiere software especial, solo un dispositivo con cámara.'
                : 'Get quality care from anywhere. No special software required — just a device with a camera.'
            }
            centered
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CtaButton actionKey="video_visit" language={language} />
            <Link
              href="/video-visits"
              className="inline-flex items-center justify-center px-6 py-3 text-brand-blue font-semibold hover:underline"
            >
              {language === 'es' ? 'Más información →' : 'Learn more →'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title={language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            centered
          />
          <div className="mt-10 space-y-6">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="text-brand-navy font-semibold text-lg mb-3 pb-2 border-b border-gray-200">
                  {cat}
                </h3>
                <div className="space-y-2">
                  {faqs
                    .filter((f) => f.category === cat)
                    .map((faq, i) => {
                      const idx = faqs.indexOf(faq);
                      return (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                          <button
                            className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-brand-navy hover:bg-brand-cream/50 transition-colors"
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            aria-expanded={openFaq === idx}
                          >
                            <span>{faq.q}</span>
                            <span className="text-brand-teal ml-4 flex-shrink-0">
                              {openFaq === idx ? '−' : '+'}
                            </span>
                          </button>
                          {openFaq === idx && (
                            <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
