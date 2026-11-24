import { Link } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './Banner.css';

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const hero = {
  eyebrow: T(
    'Firma legal multidisciplinaria',
    'Multidisciplinary law firm',
    'Cabinet juridique pluridisciplinaire',
    '多领域律师事务所',
  ),
  title: T(
    'Claridad legal para decisiones importantes',
    'Legal clarity for decisions that matter',
    'La clarté juridique pour vos décisions importantes',
    '为重要决策提供清晰的法律指引',
  ),
  desc: T(
    'Seis áreas de práctica, atención en cuatro idiomas y una primera conversación confidencial. Estrategia, rigor y comunicación clara en cada etapa.',
    'Six practice areas, service in four languages and a confidential first conversation. Strategy, rigor and clear communication at every stage.',
    'Six domaines d’activité, un accompagnement en quatre langues et un premier échange confidentiel. Stratégie, rigueur et communication claire à chaque étape.',
    '六大业务领域，提供四种语言服务与保密的首轮沟通。全程注重策略、严谨与清晰沟通。',
  ),
  primary: T('Solicitar consulta', 'Request a consultation', 'Demander une consultation', '预约咨询'),
  secondary: T(
    'Ver áreas de práctica',
    'Explore practice areas',
    'Voir les domaines d’activité',
    '查看业务领域',
  ),
  points: [
    T(
      'Respuesta en menos de 24 h hábiles',
      'Response within 24 business hours',
      'Réponse sous 24 heures ouvrables',
      '24 个工作小时内回复',
    ),
    T(
      'Presencial en Lima y virtual',
      'In person in Lima or online',
      'À Lima ou à distance',
      '利马现场或线上咨询',
    ),
    T(
      'Español, inglés, francés y chino',
      'Spanish, English, French and Chinese',
      'Espagnol, anglais, français et chinois',
      '西班牙语、英语、法语和中文',
    ),
  ],
  badgeTop: T('Firma legal', 'Law firm', 'Cabinet juridique', '律师事务所'),
  badgeBottom: T('multidisciplinaria', 'multidisciplinary', 'pluridisciplinaire', '多领域'),
  pointsLabel: T(
    'Nuestra forma de atender',
    'How we work with you',
    'Notre façon de vous accompagner',
    '我们的服务方式',
  ),
};

export default function Banner() {
  const lang = useLanguage();

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-copy">
          <span className="hero-eyebrow">{pick(hero.eyebrow, lang)}</span>

          <h1 className="hero-title" id="hero-title">
            {pick(hero.title, lang)}
          </h1>

          <p className="hero-desc">{pick(hero.desc, lang)}</p>

          <div className="hero-actions">
            <Link className="btn-gold" to="/contacto">
              <span>{pick(hero.primary, lang)}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link className="btn-outline" to="/areas">
              {pick(hero.secondary, lang)}
            </Link>
          </div>

          <ul className="hero-points" aria-label={pick(hero.pointsLabel, lang)}>
            {hero.points.map((point) => (
              <li key={pick(point, 'es')}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                {pick(point, lang)}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-emblem" aria-hidden="true">
          <div className="emblem-ring">
            <span className="emblem-pulse" />
            <img
              className="emblem-img"
              src="/assets/colibri.png"
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="emblem-badge">
            <i className="fa-solid fa-scale-balanced" />
            <span>
              {pick(hero.badgeTop, lang)}
              <strong>{pick(hero.badgeBottom, lang)}</strong>
            </span>
          </div>

          <div className="emblem-chip">
            <i className="fa-solid fa-location-dot" />
            Lima · Perú
          </div>
        </div>
      </div>
    </section>
  );
}
