import { Link } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './MobileCta.css';

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const ui = {
  aria: T('Acciones rápidas', 'Quick actions', 'Actions rapides', '快捷操作'),
  call: T('Llamar', 'Call', 'Appeler', '致电'),
  callAria: T(
    'Llamar a TuPlus Abogados',
    'Call TuPlus Abogados',
    'Appeler TuPlus Abogados',
    '致电 TuPlus Abogados',
  ),
  whatsapp: T('WhatsApp', 'WhatsApp', 'WhatsApp', 'WhatsApp'),
  whatsappAria: T(
    'Escribir a TuPlus Abogados por WhatsApp',
    'Message TuPlus Abogados on WhatsApp',
    'Écrire à TuPlus Abogados sur WhatsApp',
    '通过 WhatsApp 联系 TuPlus Abogados',
  ),
  quote: T('Cotizar', 'Get a quote', 'Devis', '报价'),
  quoteAria: T(
    'Solicitar una cotización',
    'Request a quote',
    'Demander un devis',
    '获取报价',
  ),
  whatsappMessage: T(
    'Hola, deseo agendar una consulta legal con TuPlus Abogados.',
    'Hello, I would like to schedule a legal consultation with TuPlus Abogados.',
    'Bonjour, je souhaite prendre rendez-vous pour une consultation juridique avec TuPlus Abogados.',
    '您好，我想预约 TuPlus Abogados 的法律咨询。',
  ),
};

export default function MobileCta() {
  const lang = useLanguage();
  const whatsappHref = `https://wa.me/51999888777?text=${encodeURIComponent(
    pick(ui.whatsappMessage, lang),
  )}`;

  return (
    <nav className="mobile-cta" aria-label={pick(ui.aria, lang)}>
      <a className="mobile-cta-action" href="tel:+51999888777" aria-label={pick(ui.callAria, lang)}>
        <i className="fa-solid fa-phone" aria-hidden="true" />
        <span>{pick(ui.call, lang)}</span>
      </a>

      <a
        className="mobile-cta-action mobile-cta-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={pick(ui.whatsappAria, lang)}
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        <span>{pick(ui.whatsapp, lang)}</span>
      </a>

      <Link
        className="mobile-cta-action mobile-cta-quote"
        to="/cotizador"
        aria-label={pick(ui.quoteAria, lang)}
      >
        <i className="fa-solid fa-file-invoice-dollar" aria-hidden="true" />
        <span>{pick(ui.quote, lang)}</span>
      </Link>
    </nav>
  );
}
