'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslations } from '@/lib/translations';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getTranslations(language);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/direct-primary-care', label: t.nav.directPrimaryCare },
    { href: '/video-visits', label: t.nav.videoVisits },
    { href: '/patient-resources', label: t.nav.patientResources },
    { href: '/contact', label: t.nav.contact },
  ];

  const emergencyNotice = process.env.NEXT_PUBLIC_EMERGENCY_NOTICE;

  return (
    <div className="sticky top-0 z-50">
      {emergencyNotice && (
        <div className="bg-red-600 text-white text-sm text-center py-2 px-4 font-medium">
          {emergencyNotice}
        </div>
      )}

      <header className="bg-brand-navy text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-base font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                Vintage Family Medicine
                <span className="block text-xs font-normal text-blue-300">and Pediatrics</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: lang toggle + hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 text-sm font-semibold rounded-md bg-white/20 border border-white/30 hover:bg-white/30 transition-colors"
                aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>

              <button
                className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
