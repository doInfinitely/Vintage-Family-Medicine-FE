'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const disclaimer =
    language === 'es'
      ? 'Si esto es una emergencia médica, llame al 911 de inmediato.'
      : 'If this is a medical emergency, call 911 immediately.';

  const quickLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/direct-primary-care', label: t.nav.directPrimaryCare },
    { href: '/video-visits', label: t.nav.videoVisits },
    { href: '/contact', label: t.nav.contact },
  ];

  const ATHENA_URL = 'https://30150-2.portal.athenahealth.com/';

  const patientLinks: { href: string; label: string; klara?: boolean }[] = [
    { href: '/patient-resources', label: t.nav.patientResources },
    { href: '#', label: language === 'es' ? 'Programar Cita' : 'Schedule Appointment', klara: true },
    { href: ATHENA_URL, label: language === 'es' ? 'Portal del Paciente' : 'Patient Portal' },
    { href: ATHENA_URL, label: language === 'es' ? 'Pagar Factura' : 'Pay Bill' },
    { href: '#', label: language === 'es' ? 'Envíenos un Mensaje' : 'Message Us', klara: true },
  ];

  const legalLinks = [
    { href: '/legal/privacy-policy', label: language === 'es' ? 'Política de Privacidad' : 'Privacy Policy' },
    { href: '/legal/hipaa-notice', label: language === 'es' ? 'Aviso HIPAA' : 'HIPAA Notice' },
    { href: '/legal/terms-of-use', label: language === 'es' ? 'Términos de Uso' : 'Terms of Use' },
  ];

  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Clinic Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Vintage Family Medicine</h3>
            <p className="text-blue-200 text-sm mb-4">{t.footer.tagline}</p>
            <p className="text-sm">{t.footer.address}</p>
            <p className="text-sm">{t.footer.city}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Access */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {language === 'es' ? 'Acceso al Paciente' : 'Patient Access'}
            </h4>
            <ul className="space-y-2">
              {patientLinks.map((link) => (
                <li key={link.label}>
                  {link.klara ? (
                    <button
                      type="button"
                      onClick={() => { try { (window as any).klaraWidget?.push(['open']); } catch {} }}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {language === 'es' ? 'Contacto y Horario' : 'Contact & Hours'}
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:TODO" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Teléfono: TODO' : 'Phone: TODO'}
                </a>
              </p>
              <p>{language === 'es' ? 'Lun–Vie: 9:00am – 5:30pm' : 'Mon–Fri: 9:00am – 5:30pm'}</p>
              <p>{language === 'es' ? 'Almuerzo: 12:30 – 1:30pm' : 'Lunch: 12:30 – 1:30pm'}</p>
              <p className="text-gray-400">{language === 'es' ? 'Sáb–Dom: Cerrado' : 'Sat–Sun: Closed'}</p>
            </div>
          </div>
        </div>

        {/* Emergency disclaimer */}
        <div className="border-t border-white/10 pt-6 pb-2">
          <p className="text-center text-red-400 font-medium text-sm mb-4">{disclaimer}</p>
        </div>

        {/* Legal links + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vintage Family Medicine and Pediatrics. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
