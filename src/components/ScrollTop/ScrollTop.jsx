import { useEffect, useState } from 'react';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './ScrollTop.css';

const labels = {
  es: 'Volver al inicio',
  en: 'Back to top',
  fr: 'Revenir en haut',
  zh: '返回顶部',
};

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const lang = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const label = pick(labels, lang);

  return (
    <button
      type="button"
      className={`btn-scroll-top-left${visible ? ' show' : ''}`}
      id="btnScrollTop"
      title={label}
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fa-solid fa-chevron-up" aria-hidden="true" />
    </button>
  );
}
