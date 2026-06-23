const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

async function fetchApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

export interface SiteSettings {
  clinic_name: string;
  tagline: string;
  phone: string;
  footer_disclaimer: string;
  emergency_notice: string | null;
  logo_url: string | null;
}

export interface Cta {
  action_key: string;
  label_en: string;
  label_es: string;
  href: string;
  open_in_new_tab: boolean;
  button_style: string;
}

export interface Service {
  id: number;
  name_en: string;
  name_es: string;
  slug: string;
  short_description_en: string;
  short_description_es: string;
  icon: string | null;
}

export interface Provider {
  id: number;
  name: string;
  title: string;
  bio_en: string;
  bio_es: string;
  photo_url: string | null;
  credentials: string;
}

export interface Location {
  id: number;
  name: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string | null;
  email: string | null;
  map_embed_url: string | null;
}

export interface OfficeHour {
  day_of_week: number;
  day_name_en: string;
  day_name_es: string;
  open_time: string;
  close_time: string;
  is_closed: boolean;
  lunch_start: string | null;
  lunch_end: string | null;
}

export interface Holiday {
  name_en: string;
  name_es: string;
  date: string;
}

export interface Faq {
  id: number;
  question_en: string;
  question_es: string;
  answer_en: string;
  answer_es: string;
  category: string;
  sort_order: number;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: string;
  start_date: string | null;
  end_date: string | null;
}

export interface LegalPage {
  slug: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  updated_at: string;
}

export interface NavItem {
  label_en: string;
  label_es: string;
  href: string;
  placement: string;
  sort_order: number;
  open_in_new_tab: boolean;
}

export function getSiteSettings() {
  return fetchApi<SiteSettings>('/api/site-settings');
}

export function getCtas() {
  return fetchApi<Cta[]>('/api/ctas');
}

export function getCta(actionKey: string) {
  return fetchApi<Cta>(`/api/ctas/${actionKey}`);
}

export function getServices() {
  return fetchApi<Service[]>('/api/services');
}

export function getProviders() {
  return fetchApi<Provider[]>('/api/providers');
}

export function getLocation() {
  return fetchApi<Location>('/api/locations/primary');
}

export function getOfficeHours() {
  return fetchApi<OfficeHour[]>('/api/office-hours');
}

export function getHolidays() {
  return fetchApi<Holiday[]>('/api/holidays');
}

export function getFaqs(category?: string) {
  const path = category ? `/api/faqs?category=${encodeURIComponent(category)}` : '/api/faqs';
  return fetchApi<Faq[]>(path);
}

export function getActiveAnnouncements() {
  return fetchApi<Announcement[]>('/api/announcements/active');
}

export function getLegalPage(slug: string) {
  return fetchApi<LegalPage>(`/api/legal/${slug}`);
}

export function getNavigation(placement: string) {
  return fetchApi<NavItem[]>(`/api/navigation?placement=${encodeURIComponent(placement)}`);
}

export function ctaArrayToMap(ctas: Cta[]): Record<string, Cta> {
  return Object.fromEntries(ctas.map((c) => [c.action_key, c]));
}
