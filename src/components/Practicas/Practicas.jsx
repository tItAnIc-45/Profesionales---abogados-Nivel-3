import { Link } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import './Practicas.css';

const ui = {
  tag: { es: 'Especialidades', en: 'Specialties', fr: 'Spécialités', zh: '专业领域' },
  title: { es: 'Áreas de Práctica', en: 'Practice Areas', fr: 'Domaines d’activité', zh: '业务领域' },
  desc: {
    es: 'Cobertura legal integral con equipos especializados por materia. Explora cada área para conocer nuestros servicios, proceso y respuestas frecuentes.',
    en: 'Comprehensive legal coverage with teams specialized by practice. Explore each area to learn about our services, process and frequently asked questions.',
    fr: 'Une couverture juridique complète avec des équipes spécialisées par matière. Explorez chaque domaine pour découvrir nos services, notre processus et nos réponses fréquentes.',
    zh: '由各领域专业团队提供全面法律服务。探索每个领域，了解我们的服务、流程与常见问题。',
  },
  learnMore: { es: 'Ver área', en: 'View area', fr: 'Voir le domaine', zh: '查看领域' },
};

export default function Practicas() {
  const lang = useLanguage();

  return (
    <section id="practicas" className="practicas-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{pick(ui.tag, lang)}</span>
          <h2 className="section-title">{pick(ui.title, lang)}</h2>
          <p className="section-desc">{pick(ui.desc, lang)}</p>
        </div>

        <div className="services-grid">
          {PRACTICE_AREAS.map((area) => (
            <article className="service-card" key={area.slug}>
              <i className={`${area.icon} service-icon`} aria-hidden="true" />
              <h3 className="service-title">{pick(area.title, lang)}</h3>
              <p className="service-desc">{pick(area.short, lang)}</p>
              <ul className="service-bullets">
                {area.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-check" aria-hidden="true" />
                    {pick(item, lang)}
                  </li>
                ))}
              </ul>
              <Link className="service-link" to={`/areas/${area.slug}`}>
                <span>{pick(ui.learnMore, lang)}</span>
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
