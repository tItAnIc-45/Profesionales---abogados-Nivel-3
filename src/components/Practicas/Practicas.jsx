import React, { useEffect, useState } from 'react';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './Practicas.css';

export default function Practicas() {
  const [modalContent, setModalContent] = useState(null);
  const lang = useLanguage();

  const ui = {
    close: { es: 'Cerrar', en: 'Close', fr: 'Fermer', zh: '关闭' },
    subtitle: {
      es: 'Área de Especialización',
      en: 'Area of Practice',
      fr: 'Domaine de spécialisation',
      zh: '专业领域',
    },
    generalDesc: {
      es: 'Descripción General:',
      en: 'General description:',
      fr: 'Description générale :',
      zh: '概述：',
    },
    scope: {
      es: 'Alcance del Servicio:',
      en: 'Scope of service:',
      fr: 'Étendue de la prestation :',
      zh: '服务范围：',
    },
  };

  // El encabezado y las tarjetas usan data-lang: al re-renderizar, React
  // vuelve a pintarlas en español, así que se reaplica el idioma activo.
  useEffect(() => {
    window.applyLanguage?.();
  }, [lang, modalContent]);

  // Bloquea el scroll del fondo y permite cerrar con Escape.
  useEffect(() => {
    if (!modalContent) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setModalContent(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [modalContent]);

  // Información detallada y ampliada para cada especialidad
  const modalDetails = {
    srv1: {
      title: {
        es: 'Derecho Corporativo',
        en: 'Corporate Law',
        fr: 'Droit des sociétés',
        zh: '公司法',
      },
      desc: {
        es: 'Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.',
        en: 'Mergers, acquisitions, asset restructuring, commercial contracts and corporate governance.',
        fr: 'Fusions, acquisitions, restructurations patrimoniales, contrats commerciaux et gouvernance d’entreprise.',
        zh: '并购、资产重组、商业合同与公司治理。',
      },
      scope: {
        es: 'Brindamos asesoría integral y estratégica a corporaciones nacionales e internacionales en todas las etapas de su ciclo de vida empresarial. Nuestros servicios abarcan la constitución de sociedades, juntas de accionistas, modificaciones estatutarias, estructuración y negociación de contratos comerciales complejos, procesos de debida diligencia (due diligence), fusiones y adquisiciones (M&A), así como la implementación de buenas prácticas de gobierno corporativo para mitigar riesgos legales y asegurar la continuidad del negocio.',
        en: 'We provide comprehensive, strategic counsel to domestic and international corporations at every stage of their business life cycle. Our services cover incorporation, shareholder meetings, by-law amendments, structuring and negotiation of complex commercial contracts, due diligence, mergers and acquisitions (M&A), and the implementation of sound corporate governance practices to mitigate legal risk and ensure business continuity.',
        fr: 'Nous offrons un conseil global et stratégique aux sociétés nationales et internationales à chaque étape de leur cycle de vie. Nos services couvrent la constitution de sociétés, les assemblées d’actionnaires, les modifications statutaires, la structuration et la négociation de contrats commerciaux complexes, les procédures de due diligence, les fusions-acquisitions (M&A), ainsi que la mise en place de bonnes pratiques de gouvernance d’entreprise afin de réduire les risques juridiques et d’assurer la continuité de l’activité.',
        zh: '我们为国内外企业在企业生命周期的各个阶段提供全面且具有战略性的法律顾问服务。服务涵盖公司设立、股东会、章程修订、复杂商业合同的结构设计与谈判、尽职调查、并购（M&A），以及健全公司治理实践的实施，以降低法律风险并保障业务连续性。',
      },
    },
    srv2: {
      title: {
        es: 'Litigios y Arbitraje',
        en: 'Litigation & Arbitration',
        fr: 'Contentieux & arbitrage',
        zh: '诉讼与仲裁',
      },
      desc: {
        es: 'Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.',
        en: 'Strategic defense in civil and commercial judicial proceedings and institutional arbitrations.',
        fr: 'Défense stratégique dans les procédures judiciaires civiles et commerciales et les arbitrages institutionnels.',
        zh: '在民商事诉讼及机构仲裁中提供战略性辩护。',
      },
      scope: {
        es: 'Representamos con rigor técnico, firmeza y alta estrategia a nuestros clientes en controversias complejas de índole civil, comercial, contractual y societaria. Actuamos tanto en el fuero judicial ordinario a nivel nacional como en tribunales arbitrales nacionales e internacionales. Diseñamos planes de contingencia para prevenir litigios y buscamos constantemente soluciones eficientes mediante la negociación y la conciliación antes de llegar a estrados.',
        en: 'We represent clients with technical rigor, firmness and high strategy in complex civil, commercial, contractual and corporate disputes. We appear both before the ordinary courts nationwide and before domestic and international arbitration tribunals. We design contingency plans to prevent litigation and constantly pursue efficient solutions through negotiation and conciliation before reaching the courtroom.',
        fr: 'Nous représentons nos clients avec rigueur technique, fermeté et une forte dimension stratégique dans des litiges complexes de nature civile, commerciale, contractuelle et sociétaire. Nous intervenons devant les juridictions ordinaires nationales ainsi que devant les tribunaux arbitraux nationaux et internationaux. Nous concevons des plans de contingence pour prévenir les litiges et recherchons constamment des solutions efficaces par la négociation et la conciliation avant toute procédure.',
        zh: '我们以严谨的技术、坚定的立场和高度的策略性，代理客户处理复杂的民事、商事、合同及公司争议。我们既在全国各级普通法院出庭，也在国内外仲裁庭代理案件。我们制定应急预案以预防诉讼，并在进入庭审前通过谈判与调解不断寻求高效解决方案。',
      },
    },
    srv3: {
      title: {
        es: 'Derecho Penal Económico',
        en: 'Economic Criminal Law',
        fr: 'Droit pénal des affaires',
        zh: '经济刑法',
      },
      desc: {
        es: 'Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.',
        en: 'Preventive counseling and sponsorship in corporate crimes, compliance and complex criminal proceedings.',
        fr: 'Conseil préventif et défense en matière de délits d’entreprise, de conformité et de procédures pénales complexes.',
        zh: '企业犯罪、合规与复杂刑事程序的预防性咨询与代理。',
      },
      scope: {
        es: 'Ofrecemos defensa legal especializada y de alta exigencia técnica en investigaciones y procesos penales vinculados a delitos económicos, tributarios, financieros y contra la administración pública. Asimismo, diseñamos e implementamos modelos de prevención y cumplimiento normativo (Compliance Penal y corporativo) orientados a blindar a las personas jurídicas frente a posibles responsabilidades penales de sus directivos o colaboradores.',
        en: 'We offer specialized legal defense of the highest technical standard in investigations and criminal proceedings involving economic, tax, financial and public administration offenses. We also design and implement criminal and corporate compliance programs aimed at shielding legal entities from potential criminal liability of their officers or employees.',
        fr: 'Nous assurons une défense spécialisée et d’un très haut niveau technique dans les enquêtes et procédures pénales liées aux infractions économiques, fiscales, financières et contre l’administration publique. Nous concevons et mettons également en œuvre des programmes de prévention et de conformité (pénale et d’entreprise) visant à protéger les personnes morales contre d’éventuelles responsabilités pénales de leurs dirigeants ou collaborateurs.',
        zh: '我们在涉及经济、税务、金融及针对公共管理部门的犯罪调查和刑事诉讼中，提供高专业水准的辩护。同时，我们设计并实施刑事与企业合规预防体系，帮助法人免受其管理层或员工可能承担的刑事责任。',
      },
    },
    srv4: {
      title: {
        es: 'Derecho Inmobiliario',
        en: 'Real Estate Law',
        fr: 'Droit immobilier',
        zh: '房地产法',
      },
      desc: {
        es: 'Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.',
        en: 'Land auditing, property sanitization, urban licenses and project development.',
        fr: 'Audit foncier, régularisation de propriétés, permis d’urbanisme et développement de projets.',
        zh: '土地尽职调查、产权规范、城市规划许可与项目开发。',
      },
      scope: {
        es: 'Acompañamos de principio a fin operaciones inmobiliarias de gran envergadura. Nuestros servicios incluyen el estudio exhaustivo de títulos, el saneamiento legal y registral de predios urbanos y rurales, la redacción de contratos de compraventa, arrendamiento y fideicomisos, así como la asesoría integral en la obtención de licencias urbanísticas, habilitaciones urbanas y estructuración jurídica para el desarrollo de proyectos inmobiliarios y comerciales.',
        en: 'We accompany large-scale real estate transactions from start to finish. Our services include exhaustive title review, legal and registry clean-up of urban and rural properties, drafting of sale, lease and trust agreements, and comprehensive advice on obtaining urban licenses, urban development approvals and legal structuring for real estate and commercial projects.',
        fr: 'Nous accompagnons de bout en bout des opérations immobilières de grande envergure. Nos services comprennent l’analyse exhaustive des titres, la régularisation juridique et registrale des biens urbains et ruraux, la rédaction de contrats de vente, de bail et de fiducie, ainsi qu’un conseil complet pour l’obtention de permis d’urbanisme, d’autorisations d’aménagement et la structuration juridique de projets immobiliers et commerciaux.',
        zh: '我们全程参与大型房地产交易。服务包括产权全面审查、城乡不动产的法律与登记规范化、买卖、租赁及信托合同的起草，以及为取得城市规划许可、土地开发审批和房地产及商业项目法律架构提供全面咨询。',
      },
    },
    srv5: {
      title: {
        es: 'Derecho Laboral',
        en: 'Labor Law',
        fr: 'Droit du travail',
        zh: '劳动法',
      },
      desc: {
        es: 'Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.',
        en: 'Labor contract planning, collective bargaining, audits and labor lawsuits.',
        fr: 'Planification contractuelle, négociation collective, audits et contentieux du travail.',
        zh: '劳动合同规划、集体谈判、劳动审计与劳动争议诉讼。',
      },
      scope: {
        es: 'Asesoramos de manera preventiva y correctiva en la gestión integral del capital humano y las relaciones laborales empresariales. Esto comprende la elaboración de contratos de trabajo especiales, contratación de personal extranjero, diseño de políticas internas, auditorías laborales preventivas, conducción de negociaciones colectivas complejas, procesos de reestructuración de personal o cese colectivo, y patrocinio estratégico en procedimientos inspectivos de SUNAFIL y litigios laborales judiciales.',
        en: 'We advise preventively and correctively on the comprehensive management of human capital and corporate labor relations. This includes drafting special employment contracts, hiring foreign personnel, designing internal policies, preventive labor audits, conducting complex collective bargaining, personnel restructuring or collective dismissal processes, and strategic representation in SUNAFIL inspections and labor litigation.',
        fr: 'Nous conseillons de manière préventive et corrective sur la gestion globale du capital humain et des relations de travail. Cela comprend la rédaction de contrats de travail spéciaux, le recrutement de personnel étranger, la conception de politiques internes, les audits sociaux préventifs, la conduite de négociations collectives complexes, les processus de restructuration du personnel ou de licenciement collectif, ainsi que la représentation stratégique lors des inspections de SUNAFIL et des contentieux du travail.',
        zh: '我们在人力资源与企业劳动关系的整体管理方面提供预防性和纠正性咨询，包括特殊劳动合同起草、外籍员工聘用、内部政策设计、预防性劳动审计、复杂集体谈判、人员重组或集体解雇程序，以及在 SUNAFIL 劳动监察和劳动争议诉讼中的策略性代理。',
      },
    },
    srv6: {
      title: {
        es: 'Derecho Tributario',
        en: 'Tax Law',
        fr: 'Droit fiscal',
        zh: '税法',
      },
      desc: {
        es: 'Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.',
        en: 'Strategic tax planning, audit attendance and defense before the tax administration.',
        fr: 'Planification fiscale stratégique, assistance lors des contrôles et défense devant l’administration fiscale.',
        zh: '税务战略规划、税务稽查应对及税务机关抗辩。',
      },
      scope: {
        es: 'Brindamos consultoría orientada a optimizar de manera legal y eficiente la carga tributaria en las estructuras de negocio de nuestros clientes. Asesoramos en la correcta interpretación de normas fiscales nacionales e internacionales, brindamos patrocinio y defensa especializada durante procedimientos de fiscalización llevados a cabo por la SUNAT, y asumimos la representación legal en etapas contenciosas ante el Tribunal Fiscal y el Poder Judicial.',
        en: 'We provide consulting aimed at legally and efficiently optimizing the tax burden of our clients’ business structures. We advise on the correct interpretation of domestic and international tax rules, provide specialized representation and defense during audit procedures conducted by SUNAT, and act as legal counsel in contentious stages before the Tax Court and the Judiciary.',
        fr: 'Nous proposons un conseil visant à optimiser de manière légale et efficiente la charge fiscale des structures d’affaires de nos clients. Nous conseillons sur la bonne interprétation des normes fiscales nationales et internationales, assurons une assistance et une défense spécialisées lors des contrôles de la SUNAT, et représentons nos clients devant le Tribunal fiscal et les juridictions.',
        zh: '我们提供咨询，帮助客户以合法高效的方式优化其业务架构的税务负担。我们就国内及国际税务法规的正确解释提供建议，在 SUNAT 税务稽查中提供专业协助与抗辩，并在税务法院及司法机关的争议阶段担任法律代理。',
      },
    },
  };

  const handleOpenModal = (key, e) => {
    e.preventDefault();
    setModalContent(modalDetails[key]);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <section id="practicas">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" data-lang="tag_specialties">Especialidades</span>
            <h2 className="section-title" data-lang="prac_title">Áreas de Práctica</h2>
            <p className="section-desc" data-lang="prac_desc">Cobertura legal integral con equipos altamente especializados por materia.</p>
          </div>
          <div className="services-grid">

            {/* 1. Derecho Corporativo */}
            <div className="service-card">
              <i className="fa-solid fa-briefcase service-icon"></i>
              <h3 className="service-title" data-lang="srv1_title">Derecho Corporativo</h3>
              <p className="service-desc" data-lang="srv1_desc">Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv1', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 2. Litigios y Arbitraje */}
            <div className="service-card">
              <i className="fa-solid fa-gavel service-icon"></i>
              <h3 className="service-title" data-lang="srv2_title">Litigios y Arbitraje</h3>
              <p className="service-desc" data-lang="srv2_desc">Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv2', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 3. Derecho Penal Económico */}
            <div className="service-card">
              <i className="fa-solid fa-shield-halved service-icon"></i>
              <h3 className="service-title" data-lang="srv3_title">Derecho Penal Económico</h3>
              <p className="service-desc" data-lang="srv3_desc">Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv3', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 4. Derecho Inmobiliario */}
            <div className="service-card">
              <i className="fa-solid fa-house-chimney service-icon"></i>
              <h3 className="service-title" data-lang="srv4_title">Derecho Inmobiliario</h3>
              <p className="service-desc" data-lang="srv4_desc">Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv4', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 5. Derecho Laboral */}
            <div className="service-card">
              <i className="fa-solid fa-users service-icon"></i>
              <h3 className="service-title" data-lang="srv5_title">Derecho Laboral</h3>
              <p className="service-desc" data-lang="srv5_desc">Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv5', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 6. Derecho Tributario */}
            <div className="service-card">
              <i className="fa-solid fa-file-invoice-dollar service-icon"></i>
              <h3 className="service-title" data-lang="srv6_title">Derecho Tributario</h3>
              <p className="service-desc" data-lang="srv6_desc">Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv6', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL EMERGENTE */}
      {modalContent && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={pick(modalContent.title, lang)}
          onClick={handleCloseModal}
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label={pick(ui.close, lang)}
              autoFocus
            >
              &times;
            </button>

            <div className="modal-header">
              <span className="modal-subtitle">{pick(ui.subtitle, lang)}</span>
              <h2 className="modal-title">
                {pick(modalContent.title, lang)}
              </h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>{pick(ui.generalDesc, lang)}</h3>
                <p>
                  {pick(modalContent.desc, lang)}
                </p>
              </div>

              <div className="modal-section">
                <h3>{pick(ui.scope, lang)}</h3>
                <p>{pick(modalContent.scope, lang)}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-cerrar" onClick={handleCloseModal}>
                {pick(ui.close, lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
