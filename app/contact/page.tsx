'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/translations';
import CtaButton from '@/components/ui/CtaButton';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-teal font-semibold uppercase tracking-widest text-sm mb-4">
            {language === 'es' ? 'Estamos Aquí para Usted' : "We're Here for You"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-blue-200">
            {language === 'es'
              ? 'Contáctenos por teléfono, mensaje seguro o visítenos en persona.'
              : 'Reach us by phone, secure message, or visit us in person.'}
          </p>
        </div>
      </section>

      {/* Quick contact row */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton actionKey="call_us" language={language} />
            <CtaButton actionKey="message_us" language={language} variant="secondary" />
            <CtaButton actionKey="get_directions" language={language} variant="secondary" />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-brand-cream py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinic Info */}
            <Card>
              <h2 className="text-brand-navy font-bold text-xl mb-5">
                {language === 'es' ? 'Información de la Clínica' : 'Clinic Information'}
              </h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    {language === 'es' ? 'Dirección' : 'Address'}
                  </dt>
                  <dd className="text-gray-800">
                    <address className="not-italic leading-relaxed">
                      860 Hebron Parkway, Suite 203<br />
                      Lewisville, TX 75057-5143
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    {language === 'es' ? 'Teléfono' : 'Phone'}
                  </dt>
                  <dd>
                    <a href="tel:TODO" className="text-brand-blue hover:underline">TODO: Phone number</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    {language === 'es' ? 'Fax' : 'Fax'}
                  </dt>
                  <dd className="text-gray-600">TODO: Fax number</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    {language === 'es' ? 'Mensajes Seguros' : 'Secure Messages'}
                  </dt>
                  <dd>
                    <CtaButton actionKey="message_us" language={language} variant="ghost" className="!px-0 !py-0" />
                    <p className="text-gray-500 text-xs mt-1">
                      {language === 'es'
                        ? 'Canal seguro HIPAA para comunicación con el paciente'
                        : 'HIPAA-secure channel for patient communication'}
                    </p>
                  </dd>
                </div>
              </dl>
            </Card>

            {/* Office Hours */}
            <Card>
              <h2 className="text-brand-navy font-bold text-xl mb-5">{t.contact.hours}</h2>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr className="py-2">
                    <td className="py-2.5 text-gray-700">{language === 'es' ? 'Lunes – Viernes' : 'Monday – Friday'}</td>
                    <td className="py-2.5 text-right font-medium text-gray-800">9:00am – 5:30pm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-500 text-xs">{language === 'es' ? 'Almuerzo' : 'Lunch Break'}</td>
                    <td className="py-2.5 text-right text-gray-500 text-xs">12:30 – 1:30pm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">{language === 'es' ? 'Sábado' : 'Saturday'}</td>
                    <td className="py-2.5 text-right text-gray-400">{language === 'es' ? 'Cerrado' : 'Closed'}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">{language === 'es' ? 'Domingo' : 'Sunday'}</td>
                    <td className="py-2.5 text-right text-gray-400">{language === 'es' ? 'Cerrado' : 'Closed'}</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            {/* Holiday Closures */}
            <Card>
              <h2 className="text-brand-navy font-bold text-xl mb-5">{t.contact.holidays}</h2>
              <ul className="space-y-2">
                {t.contact.holidaysList.map((holiday) => (
                  <li key={holiday} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    {holiday}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Message Us card */}
            <Card>
              <h2 className="text-brand-navy font-bold text-xl mb-3">
                {language === 'es' ? 'Envíenos un Mensaje' : 'Send Us a Message'}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {language === 'es'
                  ? 'Para una comunicación segura y compatible con HIPAA, envíenos un mensaje a través de Klara. Esta es la forma más segura de contactarnos sobre asuntos de salud.'
                  : 'For HIPAA-secure communication, send us a message through Klara. This is the safest way to contact us about health matters.'}
              </p>
              <CtaButton actionKey="message_us" language={language} />
              <p className="text-xs text-gray-400 mt-3">
                {language === 'es'
                  ? '🔒 Canal HIPAA seguro · Respuesta dentro de 1 día hábil'
                  : '🔒 HIPAA-secure channel · Response within 1 business day'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="font-medium">860 Hebron Parkway, Suite 203, Lewisville, TX</p>
              <p className="text-sm text-gray-400 mt-1">
                {language === 'es' ? 'TODO: Insertar código embed de Google Maps' : 'TODO: Insert Google Maps embed code'}
              </p>
              <div className="mt-4">
                <CtaButton actionKey="get_directions" language={language} variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency disclaimer */}
      <section className="bg-red-50 border-y border-red-200 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-700 font-semibold text-lg">
            {language === 'es'
              ? '⚠️ Si esto es una emergencia médica, llame al 911 de inmediato.'
              : '⚠️ If this is a medical emergency, call 911 immediately.'}
          </p>
        </div>
      </section>
    </>
  );
}
