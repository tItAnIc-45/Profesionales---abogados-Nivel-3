import { useEffect, useState } from 'react';
import { LANG_CODES, LANG_STORAGE_KEY, normalizeLang } from './languages';

/** Evento que dispara `scripts/main.js` cada vez que se cambia de idioma. */
export const LANGUAGE_EVENT = 'tuplus:language';

export function readLanguage() {
  if (typeof document === 'undefined') return 'es';

  // El atributo `data-lang` lo mantiene sincronizado scripts/main.js.
  const fromDom = document.documentElement.dataset.lang;
  if (LANG_CODES.includes(fromDom)) return fromDom;

  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (LANG_CODES.includes(stored)) return stored;
  } catch (error) {
    // Almacenamiento bloqueado: se usa el español.
  }

  return 'es';
}

/**
 * Devuelve el idioma activo ('es' | 'en' | 'fr' | 'zh') y se mantiene
 * sincronizado con el selector del Navbar (`scripts/main.js`).
 */
export default function useLanguage() {
  const [lang, setLang] = useState(readLanguage);

  useEffect(() => {
    const onChange = (event) => {
      setLang(normalizeLang(event.detail) ?? readLanguage());
    };

    window.addEventListener(LANGUAGE_EVENT, onChange);
    return () => window.removeEventListener(LANGUAGE_EVENT, onChange);
  }, []);

  return lang;
}
