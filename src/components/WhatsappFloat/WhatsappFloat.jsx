import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './WhatsappFloat.css';

const labels = {
  es: 'Contáctanos por WhatsApp',
  en: 'Contact us on WhatsApp',
  fr: 'Contactez-nous sur WhatsApp',
  zh: '通过 WhatsApp 联系我们',
};

const messages = {
  es: 'Hola, deseo agendar una consulta legal con TuPlus Abogados.',
  en: 'Hello, I would like to schedule a legal consultation with TuPlus Abogados.',
  fr: 'Bonjour, je souhaite prendre rendez-vous pour une consultation juridique avec TuPlus Abogados.',
  zh: '您好，我想预约 TuPlus Abogados 的法律咨询。',
};

export default function WhatsappFloat() {
  const lang = useLanguage();
  const label = pick(labels, lang);
  const href = `https://wa.me/51999888777?text=${encodeURIComponent(pick(messages, lang))}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
