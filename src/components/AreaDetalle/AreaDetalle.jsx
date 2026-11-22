import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS, getPracticeArea } from '../../data/practiceAreas';
import './AreaDetalle.css';

const ui = {
  home: { es: 'Inicio', en: 'Home', fr: 'Accueil', zh: '首页' },
  areas: { es: 'Áreas de Práctica', en: 'Practice Areas', fr: 'Domaines d’activité', zh: '业务领域' },
  services: { es: 'Qué hacemos', en: 'What we do', fr: 'Ce que nous faisons', zh: '我们的服务' },
  process: { es: 'Cómo trabajamos', en: 'How we work', fr: 'Notre méthode', zh: '我们的流程' },
  faq: { es: 'Preguntas frecuentes', en: 'Frequently asked questions', fr: 'Questions fréquentes', zh: '常见问题' },
  related: { es: 'Otras áreas de práctica', en: 'Other practice areas', fr: 'Autres domaines d’activité', zh: '其他业务领域' },
  breadcrumb: { es: 'Ruta de navegación', en: 'Breadcrumb', fr: 'Fil d’Ariane', zh: '面包屑导航' },
  ctaTitle: {
    es: '¿Necesitas asesoría en esta materia?',
    en: 'Do you need advice in this area?',
    fr: 'Besoin d’un conseil dans ce domaine ?',
    zh: '需要该领域的法律咨询吗？',
  },
  ctaDesc: {
    es: 'Cuéntanos tu caso y coordinemos una primera evaluación confidencial.',
    en: 'Tell us about your case and let’s arrange a confidential first assessment.',
    fr: 'Présentez-nous votre dossier et organisons une première évaluation confidentielle.',
    zh: '请告诉我们您的情况，我们将安排一次保密的初步评估。',
  },
  ctaButton: { es: 'Solicitar consulta', en: 'Request a consultation', fr: 'Demander une consultation', zh: '预约咨询' },
  talk: { es: 'Habla con un especialista', en: 'Talk to a specialist', fr: 'Parler à un spécialiste', zh: '联系专家' },
  talkDesc: {
    es: 'Atención presencial y virtual. Primera orientación con reserva absoluta.',
    en: 'In-person and virtual attention. Initial guidance with complete confidentiality.',
    fr: 'Accueil en présentiel et à distance. Première orientation en toute confidentialité.',
    zh: '提供线下与线上咨询，初步指导绝对保密。',
  },
  back: { es: 'Volver a áreas', en: 'Back to areas', fr: 'Retour aux domaines', zh: '返回业务领域' },
};

export default function AreaDetalle() {
  const { slug } = useParams();
  const lang = useLanguage();
  const area = getPracticeArea(slug);

  useEffect(() => {
    if (!area) return;
    const previous = document.title;
    document.title = `${pick(area.title, lang)} | TuPlus Abogados`;
    return () => {
      document.title = previous;
    };
  }, [area, lang]);

  if (!area) return <Navigate to="/areas" replace />;

  const related = PRACTICE_AREAS.filter((item) => item.slug !== area.slug).slice(0, 3);

  return (
    <div className="area-page">
      <section className="area-hero" style={{ backgroundImage: `url(${area.image})` }}>
        <div className="area-hero-overlay" />
        <div className="container area-hero-content">
          <nav className="area-breadcrumb" aria-label={pick(ui.breadcrumb, lang)}>
            <Link to="/">{pick(ui.home, lang)}</Link>
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            <Link to="/areas">{pick(ui.areas, lang)}</Link>
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            <span aria-current="page">{pick(area.title, lang)}</span>
          </nav>

          <span className="area-hero-icon" aria-hidden="true">
            <i className={area.icon} />
          </span>
          <h1>{pick(area.heroTitle, lang)}</h1>
          <p>{pick(area.heroDesc, lang)}</p>
          <div className="area-hero-actions">
            <Link className="btn-gold" to="/contacto">
              {pick(ui.ctaButton, lang)}
            </Link>
            <Link className="area-back-link" to="/areas">
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {pick(ui.back, lang)}
            </Link>
          </div>
        </div>
      </section>

      <section className="area-highlights">
        <div className="container">
          <ul>
            {area.highlights.map((item, index) => (
              <li key={index}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                {pick(item, lang)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="area-intro">
        <div className="container area-intro-grid">
          <div className="area-intro-copy">
            <span className="section-tag">{pick(ui.areas, lang)}</span>
            <h2>{pick(area.introTitle, lang)}</h2>
            {area.intro.map((paragraph, index) => (
              <p key={index}>{pick(paragraph, lang)}</p>
            ))}
          </div>

          <aside className="area-contact-card">
            <i className="fa-solid fa-scale-balanced" aria-hidden="true" />
            <h3>{pick(ui.talk, lang)}</h3>
            <p>{pick(ui.talkDesc, lang)}</p>
            <Link className="btn-gold" to="/contacto">
              {pick(ui.ctaButton, lang)}
            </Link>
            <a className="area-phone" href="tel:+51999888777">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +51 999 888 777
            </a>
          </aside>
        </div>
      </section>

      <section className="area-services">
        <div className="container">
          <div className="section-header section-header--left">
            <span className="section-tag">{pick(ui.services, lang)}</span>
            <h2 className="section-title">{pick(area.title, lang)}</h2>
          </div>

          <div className="area-services-grid">
            {area.services.map((service, index) => (
              <article className="area-service" key={index}>
                <span className="area-service-icon">
                  <i className={service.icon} aria-hidden="true" />
                </span>
                <h3>{pick(service.title, lang)}</h3>
                <p>{pick(service.desc, lang)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="area-process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{pick(ui.process, lang)}</span>
            <h2 className="section-title">{pick(area.introTitle, lang)}</h2>
          </div>

          <ol className="area-process-list">
            {area.process.map((step, index) => (
              <li key={index}>
                <span className="area-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{pick(step.title, lang)}</h3>
                <p>{pick(step.desc, lang)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="area-faq">
        <div className="container area-faq-grid">
          <div className="area-faq-head">
            <span className="section-tag">{pick(ui.faq, lang)}</span>
            <h2 className="section-title">{pick(area.title, lang)}</h2>
          </div>

          <div className="area-faq-list">
            {area.faqs.map((faq, index) => (
              <details key={index} className="area-faq-item">
                <summary>
                  <span>{pick(faq.q, lang)}</span>
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </summary>
                <p>{pick(faq.a, lang)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="area-related">
        <div className="container">
          <div className="section-header section-header--left">
            <span className="section-tag">{pick(ui.related, lang)}</span>
          </div>
          <div className="area-related-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/areas/${item.slug}`} className="area-related-card">
                <i className={item.icon} aria-hidden="true" />
                <span>{pick(item.title, lang)}</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="area-cta">
        <div className="container area-cta-inner">
          <div>
            <h2>{pick(ui.ctaTitle, lang)}</h2>
            <p>{pick(ui.ctaDesc, lang)}</p>
          </div>
          <Link className="btn-gold" to="/contacto">
            {pick(ui.ctaButton, lang)}
          </Link>
        </div>
      </section>
    </div>
  );
}
