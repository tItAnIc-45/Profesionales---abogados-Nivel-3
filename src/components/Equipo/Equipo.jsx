import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { EXTRA_LAWYERS } from '../../data/lawyersExtra';
import { LAWYER_PROFILES } from '../../data/lawyerProfiles';
import { PRACTICE_AREAS, SPECIALTY_OPTIONS } from '../../data/practiceAreas';
import './Equipo.css';

export function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'TP';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  if (parts.length === 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  // Nombre + primer apellido (el último término suele ser el segundo apellido).
  return `${parts[0][0]}${parts[parts.length - 2][0]}`.toUpperCase();
}

const normalize = (value = '') =>
  value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const ui = {
  sub: {
    es: 'NUESTROS PROFESIONALES',
    en: 'OUR PROFESSIONALS',
    fr: 'NOS PROFESSIONNELS',
    zh: '我们的专业人士',
  },
  title: {
    es: 'SOCIOS Y ABOGADOS SENIOR',
    en: 'PARTNERS AND SENIOR LAWYERS',
    fr: 'ASSOCIÉS ET AVOCATS SENIORS',
    zh: '合伙人及资深律师',
  },
  desc: {
    es: 'Un equipo multidisciplinario reconocido por su rigor académico y experiencia procesal.',
    en: 'A multidisciplinary team recognized for its academic rigor and procedural experience.',
    fr: 'Une équipe multidisciplinaire reconnue pour sa rigueur académique et son expérience procédurale.',
    zh: '一支以学术严谨与诉讼经验著称的多领域团队。',
  },
  searchPlaceholder: {
    es: 'Buscar abogado por nombre o cargo...',
    en: 'Search lawyer by name or position...',
    fr: 'Rechercher un avocat par nom ou fonction…',
    zh: '按姓名或职位搜索律师…',
  },
  viewProfile: { es: 'Ver perfil', en: 'View profile', fr: 'Voir le profil', zh: '查看简介' },
  close: { es: 'Cerrar', en: 'Close', fr: 'Fermer', zh: '关闭' },
  formacion: {
    es: 'Formación académica:',
    en: 'Academic background:',
    fr: 'Formation académique :',
    zh: '教育背景：',
  },
  experiencia: {
    es: 'Experiencia:',
    en: 'Experience:',
    fr: 'Expérience :',
    zh: '执业经验：',
  },
  publicaciones: {
    es: 'Tesis y publicaciones:',
    en: 'Thesis and publications:',
    fr: 'Thèses et publications :',
    zh: '论文与发表：',
  },
  membresias: {
    es: 'Membresías:',
    en: 'Memberships:',
    fr: 'Affiliations :',
    zh: '协会会员：',
  },
  docencia: { es: 'Docencia:', en: 'Teaching:', fr: 'Enseignement :', zh: '教学经历：' },
  idiomas: { es: 'Idiomas:', en: 'Languages:', fr: 'Langues :', zh: '语言：' },
  perfil: { es: 'Perfil profesional:', en: 'Professional profile:', fr: 'Profil professionnel :', zh: '专业简介：' },
  enfoque: { es: 'Enfoque de práctica:', en: 'Practice focus:', fr: 'Axes de pratique :', zh: '业务重点：' },
  noResults: {
    es: 'No se encontraron resultados para la búsqueda.',
    en: 'No results found for the search.',
    fr: 'Aucun résultat pour cette recherche.',
    zh: '未找到相关搜索结果。',
  },
  sendEmail: {
    es: 'Enviar correo',
    en: 'Send email',
    fr: 'Envoyer un e-mail',
    zh: '发送邮件',
  },
  requestConsultation: {
    es: 'Solicitar consulta',
    en: 'Request a consultation',
    fr: 'Demander une consultation',
    zh: '预约咨询',
  },
  filterLabel: {
    es: 'Filtrar por especialidad',
    en: 'Filter by specialty',
    fr: 'Filtrer par spécialité',
    zh: '按专业领域筛选',
  },
  allSpecialties: {
    es: 'Todas las especialidades',
    en: 'All specialties',
    fr: 'Toutes les spécialités',
    zh: '全部专业领域',
  },
  specialties: {
    es: 'Especialidades:',
    en: 'Specialties:',
    fr: 'Spécialités :',
    zh: '专业领域：',
  },
  results: {
    es: 'profesionales',
    en: 'professionals',
    fr: 'professionnels',
    zh: '位专业人士',
  },
};

const limaBar = {
  es: 'Colegio de Abogados de Lima.',
  en: 'Lima Bar Association.',
  fr: 'Barreau de Lima.',
  zh: '利马律师协会',
};

const abogadosList = [
  {
    id: 1,
    nombre: 'MATEO ALEJANDRO VALDIVIA RIVERA',
    email: 'mateo.valdivia@tuplusabogados.com.pe',
    img: '/assets/team-1.jpg',
    cargo: { es: 'SOCIO FUNDADOR', en: 'FOUNDING PARTNER', fr: 'ASSOCIÉ FONDATEUR', zh: '创始合伙人' },
    bio: {
      es: {
        formacion: [
          'Abogado especialista en Derecho Corporativo y Fusiones y Adquisiciones por la Universidad del Pacífico (2012).',
          'Estudios concluidos en la Maestría en Derecho de la Empresa de la Universidad de Lima (2016).',
          'Magíster en Derecho con especialización en Litigación Oral (LL.M.) por la California Western School of Law (2016).',
          'Especialización en Gobierno Corporativo y Compliance por IE Business School, Madrid, España (2022).',
        ],
        experiencia: [
          'Su actividad profesional y trayectoria le han permitido intervenir en litigios penales de gran relevancia. Posee una amplia experiencia fundamentada en el ámbito dogmático y en el conocimiento preciso del funcionamiento del sistema judicial penal.',
          'Actualmente se desempeña como Socio Principal de TuPlusAbogados, liderando el departamento de derecho corporativo desde el año 2015.',
        ],
        publicaciones: [
          '“Los pactos de accionistas y su oponibilidad en el derecho societario peruano.” Revista Themis N.° 65, 2017.',
          'Gobierno corporativo en empresas familiares: retos y perspectivas para el mercado andino.',
          '“La responsabilidad de los administradores en operaciones de M&A.” En Anuario de Derecho Mercantil, 2021.',
        ],
        membresias: [
          'Instituto Peruano de Derecho Mercantil (IPDM)',
          'Comité Legal de la Cámara de Comercio de Lima.',
          limaBar.es,
        ],
        docencia: [
          '2019-Presente: Docente del curso de Derecho Societario en la Universidad del Pacífico.',
        ],
        idiomas: ['Español', 'Inglés'],
      },
      en: {
        formacion: [
          'Lawyer specializing in Corporate Law and Mergers & Acquisitions, Universidad del Pacífico (2012).',
          "Coursework completed for the Master's in Business Law, Universidad de Lima (2016).",
          'Master of Laws (LL.M.) with a specialization in Oral Litigation, California Western School of Law (2016).',
          'Specialization in Corporate Governance and Compliance, IE Business School, Madrid, Spain (2022).',
        ],
        experiencia: [
          'His professional activity and career have allowed him to take part in highly significant criminal litigation. He has extensive experience grounded in legal doctrine and a precise understanding of how the criminal justice system operates.',
          'He currently serves as Managing Partner of TuPlusAbogados, leading the corporate law department since 2015.',
        ],
        publicaciones: [
          '“Shareholders’ agreements and their enforceability under Peruvian corporate law.” Themis Journal No. 65, 2017.',
          'Corporate governance in family businesses: challenges and prospects for the Andean market.',
          '“Directors’ liability in M&A transactions.” In Yearbook of Commercial Law, 2021.',
        ],
        membresias: [
          'Peruvian Institute of Commercial Law (IPDM)',
          'Legal Committee of the Lima Chamber of Commerce.',
          limaBar.en,
        ],
        docencia: ['2019–present: Lecturer in Corporate Law, Universidad del Pacífico.'],
        idiomas: ['Spanish', 'English'],
      },
      fr: {
        formacion: [
          'Avocat spécialisé en droit des sociétés et en fusions-acquisitions, Universidad del Pacífico (2012).',
          'Études complétées du Master en droit de l’entreprise, Universidad de Lima (2016).',
          'Master en droit (LL.M.) avec spécialisation en plaidoirie orale, California Western School of Law (2016).',
          'Spécialisation en gouvernance d’entreprise et conformité, IE Business School, Madrid, Espagne (2022).',
        ],
        experiencia: [
          'Son activité professionnelle et son parcours lui ont permis de participer à des procès pénaux de grande importance. Il possède une vaste expérience fondée sur la doctrine juridique et une connaissance précise du fonctionnement du système de justice pénale.',
          'Il occupe actuellement le poste d’associé principal de TuPlusAbogados et dirige le département de droit des sociétés depuis 2015.',
        ],
        publicaciones: [
          '« Les pactes d’actionnaires et leur opposabilité en droit péruvien des sociétés. » Revue Themis n° 65, 2017.',
          'Gouvernance d’entreprise dans les entreprises familiales : défis et perspectives pour le marché andin.',
          '« La responsabilité des administrateurs dans les opérations de M&A. » In Annuaire de droit commercial, 2021.',
        ],
        membresias: [
          'Institut péruvien de droit commercial (IPDM)',
          'Comité juridique de la Chambre de commerce de Lima.',
          limaBar.fr,
        ],
        docencia: ['2019 à ce jour : chargé de cours de droit des sociétés, Universidad del Pacífico.'],
        idiomas: ['Espagnol', 'Anglais'],
      },
      zh: {
        formacion: [
          '毕业于太平洋大学，专精公司法与并购（2012年）。',
          '完成利马大学企业法硕士学位课程（2016年）。',
          '获加州西部法学院法学硕士（LL.M.），主修庭审辩护（2016年）。',
          '获西班牙马德里 IE 商学院公司治理与合规专业进修证书（2022年）。',
        ],
        experiencia: [
          '其执业经历使其参与多起重大刑事案件，兼具扎实的法学理论基础与对刑事司法体系运作的精准把握。',
          '现任 TuPlusAbogados 首席合伙人，自 2015 年起主管公司法部门。',
        ],
        publicaciones: [
          '《股东协议在秘鲁公司法中的对抗效力》，《Themis》第 65 期，2017 年。',
          '《家族企业的公司治理：安第斯市场的挑战与展望》。',
          '《并购交易中管理层的责任》，《商法年鉴》，2021 年。',
        ],
        membresias: ['秘鲁商法研究所（IPDM）', '利马商会法律委员会', limaBar.zh],
        docencia: ['2019 年至今：太平洋大学公司法课程讲师。'],
        idiomas: ['西班牙语', '英语'],
      },
    },
  },
  {
    id: 2,
    nombre: 'MARTÍN ALONSO PAREDES ROJAS',
    email: 'martin.paredes@tuplusabogados.com.pe',
    img: '/assets/team-2.jpg',
    cargo: { es: 'SOCIO', en: 'PARTNER', fr: 'ASSOCIÉ', zh: '合伙人' },
    bio: {
      es: {
        formacion: [
          'Abogado titulado con tercio superior, especialista en Derecho Tributario y planeamiento fiscal estratégico.',
        ],
        experiencia: [
          'Socio líder en consultoría tributaria nacional e internacional, y defensa en controversias fiscales complejas.',
        ],
        publicaciones: [
          '“Los precios de transferencia y su impacto en las reestructuraciones empresariales.” Revista Themis N.° 71, 2020.',
        ],
        membresias: ['Colegio de Abogados de Lima.', 'Instituto Peruano de Derecho Tributario (IPDT).'],
        docencia: ['Profesor adjunto de Tributación Internacional en la Universidad del Pacífico.'],
        idiomas: ['Español', 'Inglés'],
      },
      en: {
        formacion: [
          'Lawyer admitted with top-third academic honors, specializing in Tax Law and strategic tax planning.',
        ],
        experiencia: [
          'Partner leading domestic and international tax advisory work and defense in complex tax disputes.',
        ],
        publicaciones: [
          '“Transfer pricing and its impact on corporate restructurings.” Themis Journal No. 71, 2020.',
        ],
        membresias: ['Lima Bar Association.', 'Peruvian Institute of Tax Law (IPDT).'],
        docencia: ['Adjunct Professor of International Taxation, Universidad del Pacífico.'],
        idiomas: ['Spanish', 'English'],
      },
      fr: {
        formacion: [
          'Avocat diplômé avec mention du tiers supérieur, spécialisé en droit fiscal et en planification fiscale stratégique.',
        ],
        experiencia: [
          'Associé dirigeant le conseil fiscal national et international ainsi que la défense dans des litiges fiscaux complexes.',
        ],
        publicaciones: [
          '« Les prix de transfert et leur impact sur les restructurations d’entreprises. » Revue Themis n° 71, 2020.',
        ],
        membresias: ['Barreau de Lima.', 'Institut péruvien de droit fiscal (IPDT).'],
        docencia: ['Professeur adjoint de fiscalité internationale, Universidad del Pacífico.'],
        idiomas: ['Espagnol', 'Anglais'],
      },
      zh: {
        formacion: ['以优异成绩毕业的执业律师，专精税法与税务战略规划。'],
        experiencia: ['主管国内外税务咨询及复杂税务争议抗辩的合伙人。'],
        publicaciones: ['《转让定价及其对企业重组的影响》，《Themis》第 71 期，2020 年。'],
        membresias: ['利马律师协会', '秘鲁税法研究所（IPDT）'],
        docencia: ['太平洋大学国际税务学兼职教授。'],
        idiomas: ['西班牙语', '英语'],
      },
    },
  },
  {
    id: 3,
    nombre: 'SOFÍA VALERIA CAMPOS HUAMÁN',
    email: 'sofia.campos@tuplusabogados.com.pe',
    img: '/assets/team-3.jpg',
    cargo: { es: 'ASOCIADA PRINCIPAL', en: 'PRINCIPAL ASSOCIATE', fr: 'ASSOCIÉE PRINCIPALE', zh: '首席律师' },
    bio: {
      es: {
        formacion: [
          'Abogada especialista en Propiedad Intelectual, Nuevas Tecnologías y Protección de Datos.',
        ],
        experiencia: [
          'Asesora legal senior encargada del registro de marcas, patentes y cumplimiento regulatorio tecnológico.',
        ],
        membresias: ['Colegio de Abogados de Lima.', 'Asociación Interamericana de la Propiedad Intelectual (ASIPI).'],
        docencia: [],
        idiomas: ['Español', 'Inglés', 'Portugués'],
      },
      en: {
        formacion: [
          'Lawyer specializing in Intellectual Property, New Technologies and Data Protection.',
        ],
        experiencia: [
          'Senior legal counsel in charge of trademark and patent registration and technology regulatory compliance.',
        ],
        membresias: [
          'Lima Bar Association.',
          'Inter-American Association of Intellectual Property (ASIPI).',
        ],
        docencia: [],
        idiomas: ['Spanish', 'English', 'Portuguese'],
      },
      fr: {
        formacion: [
          'Avocate spécialisée en propriété intellectuelle, nouvelles technologies et protection des données.',
        ],
        experiencia: [
          'Conseillère juridique senior chargée de l’enregistrement des marques et brevets et de la conformité réglementaire technologique.',
        ],
        membresias: ['Barreau de Lima.', 'Association interaméricaine de la propriété intellectuelle (ASIPI).'],
        docencia: [],
        idiomas: ['Espagnol', 'Anglais', 'Portugais'],
      },
      zh: {
        formacion: ['专精知识产权、新技术与数据保护的律师。'],
        experiencia: ['负责商标与专利注册及科技监管合规的资深法律顾问。'],
        membresias: ['利马律师协会', '美洲知识产权协会（ASIPI）'],
        docencia: [],
        idiomas: ['西班牙语', '英语', '葡萄牙语'],
      },
    },
  },
  {
    id: 4,
    nombre: 'DIEGO ARMANDO SILVA GUEVARA',
    email: 'diego.silva@tuplusabogados.com.pe',
    img: '/assets/team-1.jpg',
    cargo: { es: 'ASOCIADO SENIOR', en: 'SENIOR ASSOCIATE', fr: 'ASSOCIÉ SENIOR', zh: '资深律师' },
    bio: {
      es: {
        formacion: ['Especialista en Derecho Financiero, Mercado de Valores y Banca.'],
        experiencia: [
          'Amplia trayectoria en estructuración de financiamientos corporativos y emisión de valores.',
        ],
        membresias: ['Colegio de Abogados de Lima.'],
        docencia: [],
        idiomas: ['Español', 'Inglés'],
      },
      en: {
        formacion: ['Specialist in Financial Law, Capital Markets and Banking.'],
        experiencia: [
          'Extensive experience in structuring corporate financings and securities issuances.',
        ],
        membresias: ['Lima Bar Association.'],
        docencia: [],
        idiomas: ['Spanish', 'English'],
      },
      fr: {
        formacion: ['Spécialiste en droit financier, marchés de capitaux et banque.'],
        experiencia: [
          'Vaste expérience dans la structuration de financements d’entreprise et l’émission de titres.',
        ],
        membresias: ['Barreau de Lima.'],
        docencia: [],
        idiomas: ['Espagnol', 'Anglais'],
      },
      zh: {
        formacion: ['专精金融法、资本市场与银行业务。'],
        experiencia: ['在企业融资架构设计与证券发行方面经验丰富。'],
        membresias: ['利马律师协会'],
        docencia: [],
        idiomas: ['西班牙语', '英语'],
      },
    },
  },
  {
    id: 5,
    nombre: 'ANDREA LUCÍA MENDOZA SALAZAR',
    email: 'andrea.mendoza@tuplusabogados.com.pe',
    img: '/assets/team-3.jpg',
    cargo: { es: 'ASOCIADA', en: 'ASSOCIATE', fr: 'ASSOCIÉE', zh: '律师' },
    bio: {
      es: {
        formacion: ['Abogada especialista en Derecho Ambiental y Regulación de Recursos Naturales.'],
        experiencia: [
          'Consultora en auditorías de cumplimiento socioambiental y obtención de permisos sectoriales.',
        ],
        membresias: ['Colegio de Abogados de Lima.'],
        docencia: [],
        idiomas: ['Español', 'Inglés'],
      },
      en: {
        formacion: ['Lawyer specializing in Environmental Law and Natural Resources Regulation.'],
        experiencia: [
          'Consultant in socio-environmental compliance audits and securing sector-specific permits.',
        ],
        membresias: ['Lima Bar Association.'],
        docencia: [],
        idiomas: ['Spanish', 'English'],
      },
      fr: {
        formacion: ['Avocate spécialisée en droit de l’environnement et réglementation des ressources naturelles.'],
        experiencia: [
          'Consultante en audits de conformité socio-environnementale et obtention d’autorisations sectorielles.',
        ],
        membresias: ['Barreau de Lima.'],
        docencia: [],
        idiomas: ['Espagnol', 'Anglais'],
      },
      zh: {
        formacion: ['专精环境法与自然资源监管的律师。'],
        experiencia: ['负责社会环境合规审计及行业许可申请的法律顾问。'],
        membresias: ['利马律师协会'],
        docencia: [],
        idiomas: ['西班牙语', '英语'],
      },
    },
  },
  {
    id: 6,
    nombre: 'GABRIEL IGNACIO ROJAS NAVARRO',
    email: 'gabriel.rojas@tuplusabogados.com.pe',
    img: '/assets/team-2.jpg',
    cargo: { es: 'CONSULTOR JUNIOR', en: 'JUNIOR CONSULTANT', fr: 'CONSULTANT JUNIOR', zh: '初级顾问' },
    bio: {
      es: {
        formacion: ['Especialista en Derecho de la Competencia y Protección al Consumidor.'],
        experiencia: [
          'Asistencia legal en procedimientos ante el INDECOPI y análisis de concentraciones empresariales.',
        ],
        membresias: ['Colegio de Abogados de Lima.'],
        docencia: [],
        idiomas: ['Español', 'Inglés'],
      },
      en: {
        formacion: ['Specialist in Competition Law and Consumer Protection.'],
        experiencia: [
          'Legal assistance in proceedings before INDECOPI and analysis of business mergers.',
        ],
        membresias: ['Lima Bar Association.'],
        docencia: [],
        idiomas: ['Spanish', 'English'],
      },
      fr: {
        formacion: ['Spécialiste en droit de la concurrence et protection des consommateurs.'],
        experiencia: [
          'Assistance juridique dans les procédures devant l’INDECOPI et analyse des concentrations d’entreprises.',
        ],
        membresias: ['Barreau de Lima.'],
        docencia: [],
        idiomas: ['Espagnol', 'Anglais'],
      },
      zh: {
        formacion: ['专精竞争法与消费者保护。'],
        experiencia: ['协助处理 INDECOPI 程序并进行企业集中度分析。'],
        membresias: ['利马律师协会'],
        docencia: [],
        idiomas: ['西班牙语', '英语'],
      },
    },
  },
];

// Los seis perfiles históricos se integran al mismo esquema del resto del
// equipo para que el filtro por especialidad funcione de forma uniforme.
const EXISTING_SPECIALTIES = {
  1: ['civil-comercial'],
  2: ['civil-comercial'],
  3: ['civil-comercial'],
  4: ['civil-comercial'],
  5: ['inmobiliario', 'civil-comercial'],
  6: ['civil-comercial'],
};

export const TEAM = [
  ...abogadosList.map((abogado) => ({
    ...abogado,
    specialties: EXISTING_SPECIALTIES[abogado.id] ?? [],
  })),
  ...EXTRA_LAWYERS,
].map((abogado) => ({
  ...abogado,
  ...(LAWYER_PROFILES[abogado.id] ?? {}),
}));

const specialtyTitleBySlug = (slug) => {
  const area = PRACTICE_AREAS.find((item) => item.slug === slug);
  return area ? area.title : null;
};

export default function Equipo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSpecialty = SPECIALTY_OPTIONS.some(
    (option) => option.value === searchParams.get('especialidad'),
  )
    ? searchParams.get('especialidad')
    : 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [selectedAbogado, setSelectedAbogado] = useState(null);
  const lang = useLanguage();

  // Mantiene el filtro sincronizado si se llega desde un enlace como
  // /equipo?especialidad=penal o si cambia la URL con el componente montado.
  useEffect(() => {
    const param = searchParams.get('especialidad');
    const nextSpecialty = SPECIALTY_OPTIONS.some((option) => option.value === param)
      ? param
      : 'all';
    setSpecialty((current) => (current === nextSpecialty ? current : nextSpecialty));
  }, [searchParams]);

  const handleSpecialtyChange = (value) => {
    setSpecialty(value);
    const nextParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      nextParams.delete('especialidad');
    } else {
      nextParams.set('especialidad', value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const t = {
    sub: pick(ui.sub, lang),
    title: pick(ui.title, lang),
    desc: pick(ui.desc, lang),
    searchPlaceholder: pick(ui.searchPlaceholder, lang),
    viewProfile: pick(ui.viewProfile, lang),
    close: pick(ui.close, lang),
    formacion: pick(ui.formacion, lang),
    experiencia: pick(ui.experiencia, lang),
    publicaciones: pick(ui.publicaciones, lang),
    membresias: pick(ui.membresias, lang),
    docencia: pick(ui.docencia, lang),
    idiomas: pick(ui.idiomas, lang),
    perfil: pick(ui.perfil, lang),
    enfoque: pick(ui.enfoque, lang),
    requestConsultation: pick(ui.requestConsultation, lang),
    noResults: pick(ui.noResults, lang),
    sendEmail: pick(ui.sendEmail, lang),
    filterLabel: pick(ui.filterLabel, lang),
    allSpecialties: pick(ui.allSpecialties, lang),
    specialties: pick(ui.specialties, lang),
    results: pick(ui.results, lang),
  };

  // Bloquea el scroll del fondo y permite cerrar con Escape.
  useEffect(() => {
    if (!selectedAbogado) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedAbogado(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedAbogado]);

  const filteredAbogados = TEAM.filter((abogado) => {
    const term = normalize(searchTerm);
    const matchesText =
      !term ||
      normalize(abogado.nombre).includes(term) ||
      normalize(pick(abogado.cargo, lang)).includes(term) ||
      abogado.specialties.some((slug) =>
        normalize(pick(specialtyTitleBySlug(slug) ?? {}, lang)).includes(term),
      );

    const matchesSpecialty =
      specialty === 'all' || abogado.specialties.includes(specialty);

    return matchesText && matchesSpecialty;
  });

  const bio = selectedAbogado
    ? {
        ...selectedAbogado,
        ...(selectedAbogado.bio[lang] ?? selectedAbogado.bio.es),
        cargo: pick(selectedAbogado.cargo, lang),
        resumen: selectedAbogado.resumen ? pick(selectedAbogado.resumen, lang) : '',
        enfoque: selectedAbogado.enfoque ? pick(selectedAbogado.enfoque, lang) : [],
      }
    : null;

  return (
    <section className="equipo-section">
      <div className="container">
        {/* CABECERA INSTITUCIONAL */}
        <div className="section-header team-header">
          <span className="section-tag">
            {t.sub}
          </span>
          <h2 className="section-title">
            {t.title}
          </h2>
          <p className="section-desc">
            {t.desc}
          </p>

          {/* BUSCADOR + FILTRO POR ESPECIALIDAD */}
          <div className="equipo-filters">
            <div className="equipo-search">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <input
                type="text"
                className="search-input"
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="equipo-specialty">
              <label htmlFor="specialtyFilter" className="equipo-specialty-label">
                <i className="fa-solid fa-filter" aria-hidden="true" />
                {t.filterLabel}
              </label>
              <div className="select-wrap">
                <select
                  id="specialtyFilter"
                  className="specialty-select"
                  value={specialty}
                  onChange={(e) => handleSpecialtyChange(e.target.value)}
                >
                  <option value="all">{t.allSpecialties}</option>
                  {SPECIALTY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {pick(option.label, lang)}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </div>
            </div>
          </div>

          <p className="equipo-results" role="status" aria-live="polite">
            {filteredAbogados.length} {t.results}
          </p>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="equipo-grid">
        {filteredAbogados.length > 0 ? (
          filteredAbogados.map((abogado) => (
            <div className="abogado-card" key={abogado.id}>
              <div className="abogado-img-wrapper">
                <span className="abogado-monogram" aria-hidden="true">
                  {getInitials(abogado.nombre)}
                </span>
                {abogado.img && (
                  <img
                    src={abogado.img}
                    alt={abogado.nombre}
                    loading="lazy"
                    decoding="async"
                    onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div className="abogado-card-body">
                <span className="socio-tag">{pick(abogado.cargo, lang)}</span>
                <h3 className="abogado-name">{abogado.nombre}</h3>
                <div className="email-badge">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <span>{abogado.email}</span>
                </div>
                <ul className="abogado-specialties" aria-label={t.specialties}>
                  {abogado.specialties.map((slug) => {
                    const title = specialtyTitleBySlug(slug);
                    return title ? (
                      <li key={slug} className="specialty-pill">
                        {pick(title, lang)}
                      </li>
                    ) : null;
                  })}
                </ul>
                {abogado.resumen && (
                  <p className="abogado-summary">{pick(abogado.resumen, lang)}</p>
                )}
                <div className="card-social-actions">
                  <button
                    type="button"
                    className="action-btn bio-btn"
                    onClick={() => setSelectedAbogado(abogado)}
                    title={t.viewProfile}
                    aria-label={`${t.viewProfile}: ${abogado.nombre}`}
                  >
                    <i className="fa-regular fa-file-lines" aria-hidden="true" />
                    <span>{t.viewProfile}</span>
                  </button>
                  <a
                    href={`mailto:${abogado.email}`}
                    className="action-btn social"
                    title={t.sendEmail}
                    aria-label={`${t.sendEmail}: ${abogado.nombre}`}
                  >
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="equipo-empty">
            <i className="fa-solid fa-user-slash" aria-hidden="true" />
            <p>{t.noResults}</p>
          </div>
        )}
        </div>
      </div>

      {/* MODAL DETALLADO */}
      {bio && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={bio.nombre}
          onClick={() => setSelectedAbogado(null)}
        >
          <div className="modal-custom-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-icon"
              onClick={() => setSelectedAbogado(null)}
              aria-label={t.close}
              autoFocus
            >
              &times;
            </button>

            <div className="modal-custom-header">
              <h2>{bio.nombre}</h2>
              <span className="modal-subtag">{bio.cargo}</span>
              <div className="modal-email-link">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> {bio.email}
              </div>
            </div>

            <div className="modal-custom-body">
              {bio.resumen && <p className="bio-lead">{bio.resumen}</p>}

              <div className="bio-grid">
                {bio.specialties && bio.specialties.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.specialties}</h3>
                    <ul className="modal-specialty-list">
                      {bio.specialties.map((slug) => {
                        const title = specialtyTitleBySlug(slug);
                        return title ? <li key={slug}>{pick(title, lang)}</li> : null;
                      })}
                    </ul>
                  </div>
                )}

                {bio.enfoque && bio.enfoque.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.enfoque}</h3>
                    <ul>
                      {bio.enfoque.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {bio.formacion && bio.formacion.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.formacion}</h3>
                    {bio.formacion.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                )}

                {bio.experiencia && bio.experiencia.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.experiencia}</h3>
                    {bio.experiencia.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                )}

                {bio.publicaciones && bio.publicaciones.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.publicaciones}</h3>
                    <ul>
                      {bio.publicaciones.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {bio.membresias && bio.membresias.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.membresias}</h3>
                    <ul>
                      {bio.membresias.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {bio.docencia && bio.docencia.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.docencia}</h3>
                    <ul>
                      {bio.docencia.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {bio.idiomas && bio.idiomas.length > 0 && (
                  <div className="bio-block">
                    <h3>{t.idiomas}</h3>
                    <ul>
                      {bio.idiomas.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-custom-footer">
              <Link
                className="btn-gold btn-modal-consulta"
                to="/contacto"
                onClick={() => setSelectedAbogado(null)}
              >
                {t.requestConsultation}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <button className="btn-modal-cerrar" onClick={() => setSelectedAbogado(null)}>
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
