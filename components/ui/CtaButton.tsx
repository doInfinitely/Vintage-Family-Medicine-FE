'use client';

import type { Cta } from '@/lib/api';
import type { Language } from '@/lib/translations';

const KLARA_WIDGET = '#klara-widget';
const ATHENA_URL = 'https://30150-2.portal.athenahealth.com/';

function openKlaraWidget() {
  try {
    (window as any).klaraWidget?.push(['open']);
  } catch {
    // Klara widget not ready or not configured for this domain
  }
}

export const CTA_DEFAULTS: Record<string, Omit<Cta, 'action_key'>> = {
  schedule_appointment: {
    label_en: 'Schedule Appointment',
    label_es: 'Programar Cita',
    href: KLARA_WIDGET,
    open_in_new_tab: false,
    button_style: 'primary',
  },
  patient_portal: {
    label_en: 'Patient Portal',
    label_es: 'Portal del Paciente',
    href: ATHENA_URL,
    open_in_new_tab: true,
    button_style: 'secondary',
  },
  pay_bill: {
    label_en: 'Pay Bill',
    label_es: 'Pagar Factura',
    href: ATHENA_URL,
    open_in_new_tab: true,
    button_style: 'secondary',
  },
  message_us: {
    label_en: 'Message Us',
    label_es: 'Envíenos un Mensaje',
    href: KLARA_WIDGET,
    open_in_new_tab: false,
    button_style: 'primary',
  },
  call_us: {
    label_en: 'Call Us',
    label_es: 'Llámenos',
    href: 'tel:TODO',
    open_in_new_tab: false,
    button_style: 'primary',
  },
  video_visit: {
    label_en: 'Start Video Visit',
    label_es: 'Iniciar Visita por Video',
    href: KLARA_WIDGET,
    open_in_new_tab: false,
    button_style: 'primary',
  },
  new_patient_forms: {
    label_en: 'New Patient Forms',
    label_es: 'Formularios para Nuevos Pacientes',
    href: KLARA_WIDGET,
    open_in_new_tab: false,
    button_style: 'secondary',
  },
  get_directions: {
    label_en: 'Get Directions',
    label_es: 'Cómo Llegar',
    href: 'https://maps.google.com/?q=860+Hebron+Pkwy+Suite+203+Lewisville+TX+75057',
    open_in_new_tab: true,
    button_style: 'secondary',
  },
  existing_patient_schedule: {
    label_en: 'Book Appointment',
    label_es: 'Reservar Cita',
    href: ATHENA_URL,
    open_in_new_tab: true,
    button_style: 'secondary',
  },
  text_us: {
    label_en: 'Text Us',
    label_es: 'Envíenos un Texto',
    href: KLARA_WIDGET,
    open_in_new_tab: false,
    button_style: 'secondary',
  },
};

const STYLE_MAP: Record<string, string> = {
  primary:
    'inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2',
  secondary:
    'inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy border-2 border-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
  teal: 'inline-flex items-center justify-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2',
  ghost:
    'inline-flex items-center justify-center px-6 py-3 text-brand-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200',
  'primary-light':
    'inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200',
  'secondary-light':
    'inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-colors duration-200',
};

interface Props {
  actionKey: string;
  ctaMap?: Record<string, Cta>;
  language?: Language;
  className?: string;
  variant?: string;
}

export default function CtaButton({
  actionKey,
  ctaMap,
  language = 'en',
  className,
  variant,
}: Props) {
  const cta = ctaMap?.[actionKey];
  const defaults = CTA_DEFAULTS[actionKey];

  const href = cta?.href ?? defaults?.href ?? '#';
  const label =
    language === 'es'
      ? (cta?.label_es ?? defaults?.label_es ?? actionKey)
      : (cta?.label_en ?? defaults?.label_en ?? actionKey);
  const openInNewTab = cta?.open_in_new_tab ?? defaults?.open_in_new_tab ?? false;
  const styleKey = variant ?? cta?.button_style ?? defaults?.button_style ?? 'primary';
  const cls = `${STYLE_MAP[styleKey] ?? STYLE_MAP.primary} ${className ?? ''}`;

  if (href === KLARA_WIDGET) {
    return (
      <button type="button" onClick={openKlaraWidget} className={cls}>
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={cls}
    >
      {label}
    </a>
  );
}
