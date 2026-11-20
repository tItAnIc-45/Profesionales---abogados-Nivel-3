import { useEffect, useRef, useState } from 'react';
import useLanguage from '../../i18n/useLanguage';
import { LANGUAGES, getLanguage } from '../../i18n/languages';
import './LanguageSwitcher.css';

const panelTitles = {
  es: 'Idioma',
  en: 'Language',
  fr: 'Langue',
  zh: '语言',
};

const triggerLabels = {
  es: 'Cambiar idioma',
  en: 'Change language',
  fr: 'Changer de langue',
  zh: '切换语言',
};

export default function LanguageSwitcher() {
  const lang = useLanguage();
  const current = getLanguage(lang);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);

  const optionRefs = useRef([]);

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  // Cierra al hacer clic fuera o con Escape.
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close(true);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Al abrir, enfoca el idioma activo.
  useEffect(() => {
    if (!open) return undefined;

    const index = Math.max(
      0,
      LANGUAGES.findIndex((language) => language.code === lang),
    );
    setActiveIndex(index);

    const timer = window.setTimeout(() => {
      optionRefs.current[index]?.focus();
    }, 40);

    return () => window.clearTimeout(timer);
  }, [open, lang]);

  const selectLanguage = (code) => {
    window.setLanguage?.(code);
    close(true);
  };

  const moveFocus = (nextIndex) => {
    const total = LANGUAGES.length;
    const index = ((nextIndex % total) + total) % total;
    setActiveIndex(index);
    optionRefs.current[index]?.focus();
  };

  const onOptionKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        moveFocus(index + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        moveFocus(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        moveFocus(0);
        break;
      case 'End':
        event.preventDefault();
        moveFocus(LANGUAGES.length - 1);
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="lang-switcher" ref={wrapperRef}>
      <button
        type="button"
        className="lang-trigger"
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${triggerLabels[current.code]} — ${current.native}`}
        title={`${triggerLabels[current.code]} — ${current.native}`}
      >
        <img className="lang-flag" src={current.flag} alt="" width="20" height="14" />
        <span className="lang-code">{current.short}</span>
        <i className="fa-solid fa-chevron-down lang-chevron" aria-hidden="true" />
      </button>

      {open && (
        <div className="lang-panel" role="presentation">
          <span className="lang-panel-title" id="lang-panel-title">
            {panelTitles[current.code]}
          </span>

          <ul
            className="lang-list"
            role="listbox"
            aria-labelledby="lang-panel-title"
            ref={listRef}
          >
            {LANGUAGES.map((language, index) => {
              const selected = language.code === current.code;

              return (
                <li key={language.code} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`lang-option${selected ? ' is-active' : ''}`}
                    ref={(node) => {
                      optionRefs.current[index] = node;
                    }}
                    onKeyDown={(event) => onOptionKeyDown(event, index)}
                    onClick={() => selectLanguage(language.code)}
                    tabIndex={index === activeIndex ? 0 : -1}
                  >
                    <img
                      className="lang-flag"
                      src={language.flag}
                      alt=""
                      width="22"
                      height="15"
                    />
                    <span className="lang-name">{language.native}</span>
                    <i
                      className={`fa-solid fa-check lang-check${selected ? ' is-visible' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
