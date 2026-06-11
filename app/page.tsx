'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/translations';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const FEATURED_SERVICES_EN = [
  { name: 'Urgent Care', desc: 'Same-day or next-day care for acute illnesses and injuries.' },
  { name: 'Chronic Disease Management', desc: 'Ongoing management of diabetes, hypertension, asthma, and more.' },
  { name: 'Preventive Health', desc: 'Screenings, vaccines, and lifestyle coaching to keep you well.' },
  { name: "Women's Health", desc: 'Comprehensive care for women at every stage of life.' },
  { name: "Men's Health", desc: 'Preventive and acute care tailored for men.' },
  { name: 'Medical Weight Loss', desc: 'Evidence-based weight management and lifestyle coaching.' },
];

const FEATURED_SERVICES_ES = [
  { name: 'Atención de Urgencias', desc: 'Atención el mismo día o al siguiente para enfermedades agudas y lesiones.' },
  { name: 'Manejo de Enfermedades Crónicas', desc: 'Manejo continuo de diabetes, hipertensión, asma y más.' },
  { name: 'Salud Preventiva', desc: 'Exámenes, vacunas y coaching de estilo de vida para mantenerse saludable.' },
  { name: 'Salud de la Mujer', desc: 'Atención integral para mujeres en cada etapa de la vida.' },
  { name: 'Salud del Hombre', desc: 'Atención preventiva y aguda adaptada para hombres.' },
  { name: 'Pérdida de Peso Médica', desc: 'Manejo de peso basado en evidencia y coaching de estilo de vida.' },
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const featuredServices = language === 'es' ? FEATURED_SERVICES_ES : FEATURED_SERVICES_EN;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-900 to-brand-blue text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            Lewisville, TX
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium mb-4">
            {t.home.heroSubtitle}
          </p>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            {t.home.heroDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton actionKey="schedule_appointment" language={language} variant="primary-light" />
            <CtaButton actionKey="patient_portal" language={language} variant="secondary-light" />
          </div>
        </div>
      </section>

      {/* Care with Accountability */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}
            title={t.home.careTitle}
            centered
          />
          <div className="mt-10 space-y-6">
            {t.home.carePoints.slice(0, 3).map((point, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed text-center">
                {point}
              </p>
            ))}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.home.carePoints.slice(3).map((point, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                  <span className="text-brand-teal text-xl mt-0.5">✓</span>
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Por Qué Elegirnos' : 'Why Choose Us'}
                title={t.home.qualityTitle}
                subtitle={t.home.qualitySubtitle}
              />
              <ul className="mt-8 space-y-4">
                {t.home.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-cream rounded-2xl p-8">
              <p className="text-gray-700 text-lg leading-relaxed">{t.home.qualityDescription}</p>
              <div className="mt-6">
                <CtaButton actionKey="schedule_appointment" language={language} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Lo Que Ofrecemos' : 'What We Offer'}
            title={t.home.servicesTitle}
            subtitle={t.home.servicesDescription}
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.name} className="hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-brand-navy font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-lg"
            >
              {language === 'es' ? 'Ver Todos los Servicios →' : 'View All Services →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Connected Health */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={language === 'es' ? 'Salud Conectada' : 'Connected Health'}
            title={language === 'es' ? 'Atención en Cualquier Lugar' : 'Care Anywhere'}
            subtitle={t.home.qualityDescription}
            centered
            light
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏥', label: language === 'es' ? 'En Persona' : 'In Person' },
              { icon: '💻', label: language === 'es' ? 'Video' : 'Video' },
              { icon: '📞', label: language === 'es' ? 'Teléfono' : 'Phone' },
              { icon: '💬', label: language === 'es' ? 'Mensaje' : 'Message' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-medium text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Visits */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Telemedicina' : 'Telehealth'}
                title={t.home.videoTitle}
                subtitle={t.home.videoDescription}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton actionKey="video_visit" language={language} />
                <Link
                  href="/video-visits"
                  className="inline-flex items-center justify-center px-6 py-3 text-brand-blue font-semibold hover:underline"
                >
                  {language === 'es' ? 'Más información →' : 'Learn more →'}
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 rounded-2xl p-10 text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-brand-navy font-semibold text-lg">
                {language === 'es'
                  ? 'HIPAA seguro · Sin software especial · Cualquier dispositivo'
                  : 'HIPAA secure · No special software · Any device'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Access CTA Grid */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow={language === 'es' ? 'Acceso al Paciente' : 'Patient Access'}
            title={language === 'es' ? 'Todo lo que Necesita' : 'Everything You Need'}
            subtitle={
              language === 'es'
                ? 'Acceda a todos nuestros servicios en un solo lugar.'
                : 'Access all of our services in one place.'
            }
            centered
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton actionKey="schedule_appointment" language={language} />
            <CtaButton actionKey="patient_portal" language={language} variant="secondary" />
            <CtaButton actionKey="message_us" language={language} />
            <CtaButton actionKey="pay_bill" language={language} variant="secondary" />
            <CtaButton actionKey="call_us" language={language} />
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow={language === 'es' ? 'Quiénes Somos' : 'Who We Are'}
                title={t.about.mission.title}
              />
              <ul className="mt-6 space-y-3">
                {t.about.mission.items.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-brand-teal mt-1 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
                >
                  {language === 'es' ? 'Conoce al Dr. Ochei →' : 'Meet Dr. Ochei →'}
                </Link>
              </div>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-4 text-brand-teal">
                Dennis Ochei, MD, FRCS (Edinburgh)
              </h3>
              <p className="text-blue-100 leading-relaxed">{t.about.biography}</p>
              <p className="text-blue-300 text-sm mt-4">{t.about.doctorSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={language === 'es' ? 'Encuéntrenos' : 'Find Us'}
            title={language === 'es' ? 'Horario y Ubicación' : 'Hours & Location'}
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-brand-navy text-lg mb-4">
                {t.contact.hours}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex justify-between">
                  <span>{language === 'es' ? 'Lunes – Viernes' : 'Monday – Friday'}</span>
                  <span className="font-medium">9:00am – 5:30pm</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>{language === 'es' ? 'Almuerzo' : 'Lunch Break'}</span>
                  <span>12:30 – 1:30pm</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === 'es' ? 'Sábado – Domingo' : 'Saturday – Sunday'}</span>
                  <span className="text-gray-400">{language === 'es' ? 'Cerrado' : 'Closed'}</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold text-brand-navy text-lg mb-4">
                {language === 'es' ? 'Dirección' : 'Address'}
              </h3>
              <address className="not-italic text-gray-700 text-sm leading-relaxed mb-4">
                860 Hebron Parkway, Suite 203<br />
                Lewisville, TX 75057-5143
              </address>
              <CtaButton actionKey="get_directions" language={language} variant="secondary" />
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es' ? '¿Listo para comenzar?' : 'Ready to get started?'}
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {language === 'es'
              ? 'Reserve una cita hoy o llámenos para obtener más información.'
              : 'Book an appointment today or call us to learn more.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton actionKey="schedule_appointment" language={language} variant="primary-light" />
            <CtaButton actionKey="call_us" language={language} variant="secondary-light" />
          </div>
        </div>
      </section>
    </>
  );
}
