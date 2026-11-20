/**
 * Idiomas soportados por el sitio.
 * El orden de esta lista define también el ciclo del botón antiguo
 * (`window.toggleLanguage`) y el orden del selector.
 */
export const LANGUAGES = [
  {
    code: 'es',
    htmlLang: 'es',
    short: 'ES',
    native: 'Español',
    english: 'Spanish',
    flag: '/assets/flags/pe.svg',
  },
  {
    code: 'en',
    htmlLang: 'en',
    short: 'EN',
    native: 'English',
    english: 'English',
    flag: '/assets/flags/gb.svg',
  },
  {
    code: 'fr',
    htmlLang: 'fr',
    short: 'FR',
    native: 'Français',
    english: 'French',
    flag: '/assets/flags/fr.svg',
  },
  {
    code: 'zh',
    htmlLang: 'zh-CN',
    short: '中',
    native: '中文',
    english: 'Chinese',
    flag: '/assets/flags/cn.svg',
  },
];

export const LANG_CODES = LANGUAGES.map((language) => language.code);
export const DEFAULT_LANG = 'es';
export const LANG_STORAGE_KEY = 'tuplus-lang';

/** Devuelve un código válido ('es' | 'en' | 'fr' | 'zh'). */
export function normalizeLang(value) {
  return LANG_CODES.includes(value) ? value : DEFAULT_LANG;
}

/** Metadatos del idioma (bandera, nombre nativo, atributo `lang`). */
export function getLanguage(value) {
  const code = normalizeLang(value);
  return LANGUAGES.find((language) => language.code === code) ?? LANGUAGES[0];
}

/**
 * Devuelve el texto del idioma activo a partir de un objeto tipo
 * `{ es, en, fr, zh }`, con español como respaldo.
 */
export function pick(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  const code = normalizeLang(lang);
  return value[code] ?? value.es ?? value.en ?? '';
}
