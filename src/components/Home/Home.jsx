import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Contacto from '../Contacto/Contacto';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { TEAM, getInitials } from '../Equipo/Equipo';
import './Home.css';

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const ui = {
  firmTag: T('LA FIRMA', 'THE FIRM', 'LE CABINET', '本所简介'),
  firmTitle: T('Una firma construida sobre criterio y confianza', 'A firm built on judgment and trust', 'Un cabinet fondé sur le discernement et la confiance', '以专业判断与信任为基石'),
  firmDesc: T(
    'Somos un equipo multidisciplinario que combina experiencia procesal, visión de negocio y atención cercana. Cada caso se analiza con rigor y se comunica con claridad.',
    'We are a multidisciplinary team combining litigation experience, business vision and close attention. Every case is analyzed with rigor and communicated clearly.',
    'Nous sommes une équipe pluridisciplinaire alliant expérience contentieuse, vision des affaires et proximité. Chaque dossier est analysé avec rigueur et expliqué clairement.',
    '我们是一支多学科团队，融合诉讼经验、商业视野与贴心服务。每个案件都以严谨态度分析并清晰沟通。',
  ),
  firmCta: T('Conoce la firma', 'Meet the firm', 'Découvrir le cabinet', '了解本所'),
  firmStat1: T('Años de experiencia', 'Years of experience', 'Années d’expérience', '年经验'),
  firmStat2: T('Áreas de práctica', 'Practice areas', 'Domaines d’activité', '业务领域'),
  firmStat3: T('Atención personalizada', 'Personalized attention', 'Accompagnement personnalisé', '个性化服务'),
  areasTag: T('ÁREAS DE PRÁCTICA', 'PRACTICE AREAS', 'DOMAINES D’ACTIVITÉ', '业务领域'),
  areasTitle: T('Encuentra la asesoría que necesitas', 'Find the advice you need', 'Trouvez le conseil dont vous avez besoin', '找到您需要的法律支持'),
  areasDesc: T(
    'Selecciona un área para conocer nuestros servicios, el proceso de trabajo y las preguntas frecuentes.',
    'Select an area to learn about our services, working process and frequently asked questions.',
    'Sélectionnez un domaine pour découvrir nos services, notre méthode et les questions fréquentes.',
    '选择领域，了解我们的服务、工作流程与常见问题。',
  ),
  areaCta: T('Explorar área', 'Explore area', 'Explorer le domaine', '探索领域'),
  teamTag: T('NUESTRO EQUIPO', 'OUR TEAM', 'NOTRE ÉQUIPE', '我们的团队'),
  teamTitle: T('Profesionales con vocación de servicio', 'Professionals committed to service', 'Des professionnels au service du client', '以服务为使命的专业人士'),
  teamDesc: T(
    'Abogados especializados por materia, con formación académica y experiencia en casos complejos.',
    'Lawyers specialized by practice, with academic training and experience in complex cases.',
    'Des avocats spécialisés par matière, dotés d’une formation académique et d’une expérience des dossiers complexes.',
    '按领域专精的律师，具备学术训练与复杂案件经验。',
  ),
  teamCta: T('Ver todo el equipo', 'View the full team', 'Voir toute l’équipe', '查看完整团队'),
  profile: T('Ver perfil', 'View profile', 'Voir le profil', '查看简介'),
  feesTag: T('SERVICIOS Y HONORARIOS', 'SERVICES & FEES', 'SERVICES ET HONORAIRES', '服务与收费'),
  feesTitle: T('Transparencia desde la primera conversación', 'Transparency from the first conversation', 'La transparence dès le premier échange', '从第一次沟通开始保持透明'),
  feesDesc: T(
    'Consulta nuestros servicios, rangos de honorarios y solicita una cotización sin compromiso.',
    'Review our services, fee ranges and request a no-obligation quote.',
    'Consultez nos services, nos honoraires et demandez un devis sans engagement.',
    '查看服务、收费区间，并申请无义务报价。',
  ),
  feesCta: T('Servicios y honorarios', 'Services & fees', 'Services et honoraires', '服务与收费'),
  fee1: T('Consulta legal', 'Legal consultation', 'Consultation juridique', '法律咨询'),
  fee1Price: T('S/ 80 – S/ 150', 'S/ 80 – S/ 150', 'S/ 80 – S/ 150', 'S/ 80 – S/ 150'),
  fee2: T('Elaboración de documentos', 'Document drafting', 'Rédaction de documents', '文件起草'),
  fee2Price: T('Desde S/ 150', 'From S/ 150', 'À partir de S/ 150', 'S/ 150 起'),
  fee3: T('Procesos judiciales', 'Court proceedings', 'Procédures judiciaires', '司法程序'),
  fee3Price: T('Cotización personalizada', 'Custom quote', 'Devis personnalisé', '个性化报价'),
  finalTitle: T('Cuéntanos tu caso', 'Tell us about your case', 'Présentez-nous votre dossier', '告诉我们您的情况'),
};

function FirmPreview() {
  const lang = useLanguage();

  return (
    <section className="home-firm">
      <div className="container home-firm-grid">
        <div className="home-firm-copy">
          <span className="section-tag">{pick(ui.firmTag, lang)}</span>
          <h2>{pick(ui.firmTitle, lang)}</h2>
          <p>{pick(ui.firmDesc, lang)}</p>
          <Link className="btn-outline" to="/la-firma">
            {pick(ui.firmCta, lang)}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <div className="home-firm-stats">
          <div className="home-stat">
            <strong>+20</strong>
            <span>{pick(ui.firmStat1, lang)}</span>
          </div>
          <div className="home-stat">
            <strong>06</strong>
            <span>{pick(ui.firmStat2, lang)}</span>
          </div>
          <div className="home-stat">
            <strong>100%</strong>
            <span>{pick(ui.firmStat3, lang)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AreasPreview() {
  const lang = useLanguage();

  return (
    <section className="home-areas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{pick(ui.areasTag, lang)}</span>
          <h2 className="section-title">{pick(ui.areasTitle, lang)}</h2>
          <p className="section-desc">{pick(ui.areasDesc, lang)}</p>
        </div>

        <div className="home-areas-grid">
          {PRACTICE_AREAS.map((area, index) => (
            <Link key={area.slug} to={`/areas/${area.slug}`} className="home-area-card">
              <span className="home-area-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="home-area-icon">
                <i className={area.icon} aria-hidden="true" />
              </span>
              <h3>{pick(area.title, lang)}</h3>
              <p>{pick(area.short, lang)}</p>
              <ul className="home-area-tags">
                {area.services.slice(0, 3).map((service) => (
                  <li key={pick(service.title, 'es')}>{pick(service.title, lang)}</li>
                ))}
              </ul>
              <span className="home-area-link">
                {pick(ui.areaCta, lang)}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPreview() {
  const lang = useLanguage();
  const featured = TEAM.slice(0, 3);

  return (
    <section className="home-team">
      <div className="container">
        <div className="home-split-header">
          <div>
            <span className="section-tag">{pick(ui.teamTag, lang)}</span>
            <h2 className="section-title">{pick(ui.teamTitle, lang)}</h2>
            <p className="section-desc">{pick(ui.teamDesc, lang)}</p>
          </div>
          <Link className="home-text-link" to="/equipo">
            {pick(ui.teamCta, lang)}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <div className="home-team-grid">
          {featured.map((lawyer) => (
            <article className="home-lawyer" key={lawyer.id}>
              <div className="home-lawyer-avatar" aria-hidden="true">
                {getInitials(lawyer.nombre)}
              </div>
              <span className="home-lawyer-role">{pick(lawyer.cargo, lang)}</span>
              <h3>{lawyer.nombre}</h3>
              <Link to="/equipo">
                {pick(ui.profile, lang)}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeesPreview() {
  const lang = useLanguage();
  const fees = [
    { label: pick(ui.fee1, lang), price: pick(ui.fee1Price, lang), icon: 'fa-solid fa-comments' },
    { label: pick(ui.fee2, lang), price: pick(ui.fee2Price, lang), icon: 'fa-solid fa-file-signature' },
    { label: pick(ui.fee3, lang), price: pick(ui.fee3Price, lang), icon: 'fa-solid fa-gavel' },
  ];

  return (
    <section className="home-fees">
      <div className="container home-fees-inner">
        <div className="home-fees-copy">
          <span className="section-tag">{pick(ui.feesTag, lang)}</span>
          <h2>{pick(ui.feesTitle, lang)}</h2>
          <p>{pick(ui.feesDesc, lang)}</p>
          <Link className="btn-gold" to="/cotizador">
            {pick(ui.feesCta, lang)}
          </Link>
        </div>

        <ul className="home-fees-list">
          {fees.map((fee) => (
            <li key={fee.label}>
              <i className={fee.icon} aria-hidden="true" />
              <div>
                <span>{fee.label}</span>
                <strong>{fee.price}</strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <Banner />
      <FirmPreview />
      <AreasPreview />
      <TeamPreview />
      <FeesPreview />
      <Contacto />
    </div>
  );
}
