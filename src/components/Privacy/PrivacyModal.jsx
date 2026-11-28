import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRIVACY_INTRO, PRIVACY_SECTIONS, PRIVACY_UPDATED } from '../../data/privacyPolicy';
import './PrivacyModal.css';

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const copy = {
  tag: T('Confidencialidad', 'Confidentiality', 'Confidentialité', '保密'),
  title: T('Política de Privacidad', 'Privacy Policy', 'Politique de confidentialité', '隐私政策'),
  close: T('Cerrar', 'Close', 'Fermer', '关闭'),
  accept: T('Entendido', 'Understood', 'Compris', '我已了解'),
};

export default function PrivacyModal({ open, onClose }) {
  const lang = useLanguage();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    window.setTimeout(() => closeRef.current?.focus(), 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="privacy-backdrop" onClick={onClose}>
      <div
        className="privacy-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacyDialogTitle"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="privacy-close"
          onClick={onClose}
          aria-label={pick(copy.close, lang)}
          ref={closeRef}
        >
          &times;
        </button>

        <header className="privacy-header">
          <span className="privacy-tag">
            <i className="fa-solid fa-shield-halved" aria-hidden="true" />
            {pick(copy.tag, lang)}
          </span>
          <h2 id="privacyDialogTitle">{pick(copy.title, lang)}</h2>
          <p className="privacy-updated">{pick(PRIVACY_UPDATED, lang)}</p>
        </header>

        <div className="privacy-body">
          <p className="privacy-intro">{pick(PRIVACY_INTRO, lang)}</p>
          {PRIVACY_SECTIONS.map((section, index) => (
            <section key={index} className="privacy-block">
              <h3>{pick(section.title, lang)}</h3>
              <p>{pick(section.body, lang)}</p>
            </section>
          ))}
        </div>

        <footer className="privacy-footer">
          <button type="button" className="btn-gold" onClick={onClose}>
            {pick(copy.accept, lang)}
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
