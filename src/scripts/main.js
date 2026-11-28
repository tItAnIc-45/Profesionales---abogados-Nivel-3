// Control de Modales, Tema (Claro/Oscuro) e Idioma (ES / EN / FR / ZH)
import {
    LANG_CODES,
    LANG_STORAGE_KEY,
    getLanguage,
    normalizeLang,
} from '../i18n/languages.js';

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('readmeModal');
    if (event.target === modal) {
        closeModal('readmeModal');
    }
}

// Modo Oscuro / Claro
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = html.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', nextTheme);
    try {
        localStorage.setItem('tuplus-theme', nextTheme);
    } catch (error) {
        // El almacenamiento puede estar bloqueado; el tema sigue funcionando en la sesión.
    }

    if (themeIcon) {
        themeIcon.className = nextTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Diccionario de Traducción: Español / Inglés / Francés / Chino mandarín
const translations = {
    es: {
        nav_home: "Inicio",
        nav_firm: "La Firma",
        nav_practices: "Áreas de Práctica",
        nav_team: "Equipo",
        nav_calculator: "Servicios y Honorarios",
        nav_contact: "Contacto",
        btn_consult: "Consulta Legal",
        hero_subtitle: "Excelencia & Compromiso Jurídico",
        hero_title: "Defendemos sus Intereses con Rigor Estratégico y Ética",
        hero_desc: "Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio. Asesoramos a líderes y corporaciones con soluciones efectivas a la medida.",
        hero_btn1: "Agendar Cita Presencial",
        hero_btn2: "Conocer La Firma",
        hero_subtitle_2: "Asesoría Corporativa Integral",
        hero_title_2: "Soluciones Legales Preventivas para el Crecimiento Empresarial",
        hero_desc_2: "Acompañamiento estratégico en contratos, fusiones, cumplimiento normativo y gobierno corporativo.",
        hero_btn1_2: "Agendar Cita Presencial",
        hero_btn2_2: "Áreas de Práctica",
        hero_subtitle_3: "Litigios y Defensa Especializada",
        hero_title_3: "Representación Sólida ante Instancias Judiciales y Arbitrales",
        hero_desc_3: "Estrategias procesales diseñadas a medida con absoluta confidencialidad y respaldo técnico.",
        hero_btn1_3: "Consulta Legal",
        hero_btn2_3: "Nuestro Equipo",
        tag_institutional: "Institucional",
        firm_title: "La Firma & Nuestra Identidad",
        firm_desc: "Trayectoria sólida basada en la confianza, integridad e innovación metodológica.",
        firm_h3: "Más de 20 Años Garantizando Seguridad Jurídica",
        firm_p1: "En TuPlus Abogados combinamos la tradición del ejercicio del derecho con un enfoque contemporáneo y ágil. Inspirados en estándares internacionales de alta exigencia, representamos a empresas nacionales e internacionales, así como a personas naturales en litigios complejos.",
        firm_p2: "El colibrí de nuestro emblema simboliza agilidad, precisión y la capacidad de responder con destreza ante escenarios cambiantes y desafiantes del marco normativo.",
        val1_title: "Rigor Analítico",
        val1_desc: "Examen profundo e individualizado de cada expediente.",
        val2_title: "Confidencialidad",
        val2_desc: "Protocolos estrictos de reserva y ética profesional.",
        val3_title: "Estrategia Directa",
        val3_desc: "Optimización de plazos e instancias de resolución.",
        val4_title: "Compromiso Total",
        val4_desc: "Acompañamiento cercano durante todo el proceso.",
        stat1: "Casos Ganados",
        stat2: "Tasa de Éxito",
        stat3: "Abogados Senior",
        stat4: "Premios Jurídicos",
        tag_specialties: "Especialidades",
        prac_title: "Áreas de Práctica",
        prac_desc: "Cobertura legal integral con equipos altamente especializados por materia.",
        srv1_title: "Derecho Corporativo",
        srv1_desc: "Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.",
        srv2_title: "Litigios y Arbitraje",
        srv2_desc: "Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.",
        srv3_title: "Derecho Penal Económico",
        srv3_desc: "Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.",
        srv4_title: "Derecho Inmobiliario",
        srv4_desc: "Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.",
        srv5_title: "Derecho Laboral",
        srv5_desc: "Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.",
        srv6_title: "Derecho Tributario",
        srv6_desc: "Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.",
        learn_more: "Saber más",
        tag_professionals: "Nuestros Profesionales",
        team_title: "Socios y Abogados Senior",
        team_desc: "Un equipo multidisciplinario reconocido por su rigor académico y experiencia procesal.",
        tag_direct: "Contacto Directo",
        contact_title: "Agende una Consulta",
        contact_desc: "Atención presencial en nuestra sede corporativa o virtual a través de videollamada.",
        addr_title: "Dirección Institucional",
        phone_title: "Central Telefónica",
        email_title: "Correo de Atención",
        form_name: "Nombre Completo / Razón Social",
        form_email: "Correo Electrónico",
        form_phone: "Teléfono / WhatsApp",
        form_spec: "Área de Consulta / Especialidad",
        form_msg: "Detalle de la Consulta Legal",
        form_btn: "Enviar Consulta a TuPlus Abogados",
        form_privacy: "Acepto la Política de Privacidad",
        form_privacy_link: "Ver política",
        footer_desc: "Firma legal comprometida con el desarrollo corporativo, la defensa jurídica integral y la excelencia en el patrocinio de nuestros clientes.",
        foot_nav: "Navegación",
        foot_legal: "Legal",
        foot_terms: "Términos de Servicio",
        foot_privacy: "Política de Privacidad",
        foot_ethics: "Código de Ética",
        theme_toggle: "Cambiar tema"
    },
    en: {
        nav_home: "Home",
        nav_firm: "The Firm",
        nav_practices: "Practice Areas",
        nav_team: "Team",
        nav_calculator: "Services & Fees",
        nav_contact: "Contact",
        btn_consult: "Legal Consultation",
        hero_subtitle: "Excellence & Legal Commitment",
        hero_title: "Defending Your Interests with Strategic Rigor and Ethics",
        hero_desc: "Multidisciplinary law firm specialized in corporate, civil, criminal, and regulatory law. We advise leaders and corporations with tailored, effective solutions.",
        hero_btn1: "Schedule In-Person Meeting",
        hero_btn2: "About The Firm",
        hero_subtitle_2: "Comprehensive Corporate Advisory",
        hero_title_2: "Preventive Legal Solutions for Business Growth",
        hero_desc_2: "Strategic support in contracts, mergers, regulatory compliance, and corporate governance.",
        hero_btn1_2: "Schedule In-Person Meeting",
        hero_btn2_2: "Practice Areas",
        hero_subtitle_3: "Litigation & Specialized Defense",
        hero_title_3: "Solid Representation Before Judicial and Arbitration Bodies",
        hero_desc_3: "Tailor-made procedural strategies with absolute confidentiality and technical backing.",
        hero_btn1_3: "Legal Consultation",
        hero_btn2_3: "Our Team",
        tag_institutional: "Institutional",
        firm_title: "The Firm & Our Identity",
        firm_desc: "Solid track record built on trust, integrity, and methodological innovation.",
        firm_h3: "Over 20 Years Guaranteeing Legal Security",
        firm_p1: "At TuPlus Abogados we combine traditional legal practice with a contemporary, agile approach. Inspired by high international standards, we represent national and international corporations as well as individuals in complex litigation.",
        firm_p2: "The hummingbird in our emblem symbolizes agility, precision, and the ability to respond skillfully to changing and challenging regulatory scenarios.",
        val1_title: "Analytical Rigor",
        val1_desc: "Deep and individualized examination of each case file.",
        val2_title: "Confidentiality",
        val2_desc: "Strict protocols of reserve and professional ethics.",
        val3_title: "Direct Strategy",
        val3_desc: "Optimization of deadlines and resolution instances.",
        val4_title: "Total Commitment",
        val4_desc: "Close accompaniment throughout the entire process.",
        stat1: "Cases Won",
        stat2: "Success Rate",
        stat3: "Senior Lawyers",
        stat4: "Legal Awards",
        tag_specialties: "Specialties",
        prac_title: "Practice Areas",
        prac_desc: "Comprehensive legal coverage with highly specialized teams by subject matter.",
        srv1_title: "Corporate Law",
        srv1_desc: "Mergers, acquisitions, asset restructuring, commercial contracts, and corporate governance.",
        srv2_title: "Litigation & Arbitration",
        srv2_desc: "Strategic defense in civil and commercial judicial proceedings and institutional arbitrations.",
        srv3_title: "Economic Criminal Law",
        srv3_desc: "Preventive counseling and sponsorship in corporate crimes, compliance, and complex criminal proceedings.",
        srv4_title: "Real Estate Law",
        srv4_desc: "Land auditing, property sanitization, urban licenses, and project development.",
        srv5_title: "Labor Law",
        srv5_desc: "Labor contract planning, collective bargaining, audits, and labor lawsuits.",
        srv6_title: "Tax Law",
        srv6_desc: "Strategic tax planning, audit attendance, and defense before the tax administration.",
        learn_more: "Learn more",
        tag_professionals: "Our Professionals",
        team_title: "Partners & Senior Lawyers",
        team_desc: "A multidisciplinary team recognized for academic rigor and procedural expertise.",
        tag_direct: "Direct Contact",
        contact_title: "Schedule a Consultation",
        contact_desc: "In-person attention at our corporate headquarters or virtual via video call.",
        addr_title: "Institutional Address",
        phone_title: "Telephone Exchange",
        email_title: "Support Email",
        form_name: "Full Name / Company Name",
        form_email: "Email Address",
        form_phone: "Phone / WhatsApp",
        form_spec: "Consultation Area / Specialty",
        form_msg: "Details of Legal Inquiry",
        form_btn: "Send Inquiry to TuPlus Abogados",
        form_privacy: "I accept the Privacy Policy",
        form_privacy_link: "View policy",
        footer_desc: "Law firm committed to corporate development, comprehensive legal defense, and excellence in client advocacy.",
        foot_nav: "Navigation",
        foot_legal: "Legal",
        foot_terms: "Terms of Service",
        foot_privacy: "Privacy Policy",
        foot_ethics: "Code of Ethics",
        theme_toggle: "Toggle theme"
    },
    fr: {
        nav_home: "Accueil",
        nav_firm: "Le Cabinet",
        nav_practices: "Domaines d'activité",
        nav_team: "Équipe",
        nav_calculator: "Services et honoraires",
        nav_contact: "Contact",
        btn_consult: "Consultation juridique",
        hero_subtitle: "Excellence & engagement juridique",
        hero_title: "Nous défendons vos intérêts avec rigueur stratégique et éthique",
        hero_desc: "Cabinet juridique multidisciplinaire spécialisé en droit des sociétés, civil, pénal et réglementaire. Nous conseillons dirigeants et entreprises avec des solutions efficaces et sur mesure.",
        hero_btn1: "Prendre rendez-vous",
        hero_btn2: "Découvrir le cabinet",
        hero_subtitle_2: "Conseil global aux entreprises",
        hero_title_2: "Des solutions juridiques préventives pour la croissance de votre entreprise",
        hero_desc_2: "Accompagnement stratégique en matière de contrats, fusions, conformité réglementaire et gouvernance d'entreprise.",
        hero_btn1_2: "Prendre rendez-vous",
        hero_btn2_2: "Domaines d'activité",
        hero_subtitle_3: "Contentieux & défense spécialisée",
        hero_title_3: "Une représentation solide devant les juridictions et les tribunaux arbitraux",
        hero_desc_3: "Stratégies procédurales sur mesure, en toute confidentialité et avec un solide appui technique.",
        hero_btn1_3: "Consultation juridique",
        hero_btn2_3: "Notre équipe",
        tag_institutional: "Institutionnel",
        firm_title: "Le Cabinet & notre identité",
        firm_desc: "Un parcours solide fondé sur la confiance, l'intégrité et l'innovation méthodologique.",
        firm_h3: "Plus de 20 ans à garantir la sécurité juridique",
        firm_p1: "Chez TuPlus Abogados, nous associons la tradition de l'exercice du droit à une approche contemporaine et réactive. Inspirés par des standards internationaux exigeants, nous représentons des entreprises nationales et internationales ainsi que des personnes physiques dans des litiges complexes.",
        firm_p2: "Le colibri de notre emblème symbolise l'agilité, la précision et la capacité à répondre avec habileté à des environnements normatifs changeants et exigeants.",
        val1_title: "Rigueur analytique",
        val1_desc: "Examen approfondi et individualisé de chaque dossier.",
        val2_title: "Confidentialité",
        val2_desc: "Protocoles stricts de réserve et d'éthique professionnelle.",
        val3_title: "Stratégie directe",
        val3_desc: "Optimisation des délais et des instances de résolution.",
        val4_title: "Engagement total",
        val4_desc: "Accompagnement de proximité tout au long du processus.",
        stat1: "Affaires gagnées",
        stat2: "Taux de réussite",
        stat3: "Avocats seniors",
        stat4: "Distinctions juridiques",
        tag_specialties: "Spécialités",
        prac_title: "Domaines d'activité",
        prac_desc: "Une couverture juridique complète avec des équipes hautement spécialisées par matière.",
        srv1_title: "Droit des sociétés",
        srv1_desc: "Fusions, acquisitions, restructurations patrimoniales, contrats commerciaux et gouvernance d'entreprise.",
        srv2_title: "Contentieux & arbitrage",
        srv2_desc: "Défense stratégique dans les procédures judiciaires civiles et commerciales et les arbitrages institutionnels.",
        srv3_title: "Droit pénal des affaires",
        srv3_desc: "Conseil préventif et défense en matière de délits d'entreprise, de conformité et de procédures pénales complexes.",
        srv4_title: "Droit immobilier",
        srv4_desc: "Audit foncier, régularisation de propriétés, permis d'urbanisme et développement de projets.",
        srv5_title: "Droit du travail",
        srv5_desc: "Planification contractuelle, négociation collective, audits et contentieux du travail.",
        srv6_title: "Droit fiscal",
        srv6_desc: "Planification fiscale stratégique, assistance lors des contrôles et défense devant l'administration fiscale.",
        learn_more: "En savoir plus",
        tag_professionals: "Nos professionnels",
        team_title: "Associés & avocats seniors",
        team_desc: "Une équipe multidisciplinaire reconnue pour sa rigueur académique et son expérience procédurale.",
        tag_direct: "Contact direct",
        contact_title: "Prendre rendez-vous",
        contact_desc: "Accueil en présentiel dans nos bureaux ou en visioconférence.",
        addr_title: "Adresse du cabinet",
        phone_title: "Standard téléphonique",
        email_title: "Courriel de contact",
        form_name: "Nom complet / Raison sociale",
        form_email: "Adresse e-mail",
        form_phone: "Téléphone / WhatsApp",
        form_spec: "Domaine de consultation / Spécialité",
        form_msg: "Détail de la consultation juridique",
        form_btn: "Envoyer votre demande à TuPlus Abogados",
        form_privacy: "J'accepte la politique de confidentialité",
        form_privacy_link: "Voir la politique",
        footer_desc: "Cabinet juridique engagé dans le développement des entreprises, la défense juridique intégrale et l'excellence au service de ses clients.",
        foot_nav: "Navigation",
        foot_legal: "Mentions légales",
        foot_terms: "Conditions d'utilisation",
        foot_privacy: "Politique de confidentialité",
        foot_ethics: "Code d'éthique",
        theme_toggle: "Changer de thème"
    },
    zh: {
        nav_home: "首页",
        nav_firm: "本所简介",
        nav_practices: "业务领域",
        nav_team: "团队",
        nav_calculator: "服务与收费",
        nav_contact: "联系我们",
        btn_consult: "法律咨询",
        hero_subtitle: "卓越与法律承诺",
        hero_title: "以严谨的战略与职业操守维护您的权益",
        hero_desc: "多领域律师事务所，专精公司法、民事、刑事与监管法律。我们为企业家与企业提供高效、量身定制的解决方案。",
        hero_btn1: "预约面谈",
        hero_btn2: "了解本所",
        hero_subtitle_2: "企业综合法律顾问",
        hero_title_2: "为企业成长提供预防性法律方案",
        hero_desc_2: "在合同、并购、合规与公司治理方面提供战略支持。",
        hero_btn1_2: "预约面谈",
        hero_btn2_2: "业务领域",
        hero_subtitle_3: "诉讼与专业辩护",
        hero_title_3: "在法院与仲裁机构中提供有力代理",
        hero_desc_3: "量身定制的诉讼策略，严守保密，并提供扎实的技术支持。",
        hero_btn1_3: "法律咨询",
        hero_btn2_3: "我们的团队",
        tag_institutional: "机构介绍",
        firm_title: "本所与我们的理念",
        firm_desc: "以信任、诚信与方法创新为基础的稳健发展历程。",
        firm_h3: "二十余年守护法律安全",
        firm_p1: "TuPlus Abogados 将传统法律服务与当代高效理念相结合。我们以严格的国际标准为标杆，代理国内外企业及个人处理复杂诉讼。",
        firm_p2: "我们所徽中的蜂鸟象征敏捷、精准，以及在不断变化的监管环境中从容应对的能力。",
        val1_title: "分析严谨",
        val1_desc: "对每个案卷进行深入且个性化的审查。",
        val2_title: "严格保密",
        val2_desc: "严守保密与职业伦理规范。",
        val3_title: "直接策略",
        val3_desc: "优化期限与争议解决程序。",
        val4_title: "全心投入",
        val4_desc: "全程提供贴心的陪伴与支持。",
        stat1: "胜诉案件",
        stat2: "成功率",
        stat3: "资深律师",
        stat4: "法律奖项",
        tag_specialties: "专业领域",
        prac_title: "业务领域",
        prac_desc: "按专业领域配置高度专门化的团队，提供全方位法律服务。",
        srv1_title: "公司法",
        srv1_desc: "并购、资产重组、商业合同与公司治理。",
        srv2_title: "诉讼与仲裁",
        srv2_desc: "在民商事诉讼及机构仲裁中提供战略性辩护。",
        srv3_title: "经济刑法",
        srv3_desc: "企业犯罪、合规与复杂刑事程序的预防性咨询与代理。",
        srv4_title: "房地产法",
        srv4_desc: "土地尽职调查、产权规范、城市规划许可与项目开发。",
        srv5_title: "劳动法",
        srv5_desc: "劳动合同规划、集体谈判、劳动审计与劳动争议诉讼。",
        srv6_title: "税法",
        srv6_desc: "税务战略规划、税务稽查应对及税务机关抗辩。",
        learn_more: "了解更多",
        tag_professionals: "我们的专业人士",
        team_title: "合伙人及资深律师",
        team_desc: "一支以学术严谨与诉讼经验著称的多领域团队。",
        tag_direct: "直接联系",
        contact_title: "预约咨询",
        contact_desc: "可在本所办公室面谈，或通过视频会议进行线上咨询。",
        addr_title: "事务所地址",
        phone_title: "总机",
        email_title: "联系邮箱",
        form_name: "姓名 / 公司名称",
        form_email: "电子邮箱",
        form_phone: "电话 / WhatsApp",
        form_spec: "咨询领域 / 专业方向",
        form_msg: "法律咨询详情",
        form_btn: "向 TuPlus Abogados 发送咨询",
        form_privacy: "我接受隐私政策",
        form_privacy_link: "查看政策",
        footer_desc: "致力于企业发展、全方位法律辩护并卓越服务客户的律师事务所。",
        foot_nav: "导航",
        foot_legal: "法律信息",
        foot_terms: "服务条款",
        foot_privacy: "隐私政策",
        foot_ethics: "职业道德准则",
        theme_toggle: "切换主题"
    }
};

let currentLang = (() => {
    try {
        const stored = localStorage.getItem(LANG_STORAGE_KEY);
        if (LANG_CODES.includes(stored)) return stored;
    } catch (error) {
        // Sin almacenamiento: se mantiene el español.
    }
    return 'es';
})();

function translateText(el, attribute) {
    const specific = el.getAttribute(`${attribute}-${currentLang}`);
    const fallback = el.getAttribute(`${attribute}-es`) ?? el.getAttribute(`${attribute}-en`);
    return specific ?? fallback;
}

function applyLanguage() {
    const meta = getLanguage(currentLang);
    document.documentElement.setAttribute('lang', meta.htmlLang);
    document.documentElement.dataset.lang = meta.code;

    const dict = translations[currentLang] ?? translations.es;
    const fallback = translations.es;

    // data-lang
    document.querySelectorAll('[data-lang]').forEach((el) => {
        const key = el.getAttribute('data-lang');
        const value = dict[key] ?? fallback[key];
        if (value) el.innerText = value;
    });

    // data-es / data-en / data-fr / data-zh
    document.querySelectorAll('[data-es]').forEach((el) => {
        const value = translateText(el, 'data');
        if (value) el.innerText = value;
    });

    // Placeholders (data-placeholder-es, -en, -fr, -zh)
    document.querySelectorAll('[data-placeholder-es]').forEach((el) => {
        const value = translateText(el, 'data-placeholder');
        if (value) el.setAttribute('placeholder', value);
    });

    // aria-label traducibles (data-label-es, -en, -fr, -zh)
    document.querySelectorAll('[data-label-es]').forEach((el) => {
        const value = translateText(el, 'data-label');
        if (value) el.setAttribute('aria-label', value);
    });

    // Botón de tema (vive fuera de React)
    const themeButton = document.getElementById('themeToggle');
    if (themeButton) {
        themeButton.setAttribute('aria-label', dict.theme_toggle ?? fallback.theme_toggle);
    }

    // Avisa a los componentes React (Navbar, Banner, Equipo, Áreas…) del idioma.
    window.dispatchEvent(new CustomEvent('tuplus:language', { detail: meta.code }));
}

function setLanguage(code) {
    const next = normalizeLang(code);
    if (!LANG_CODES.includes(next)) return;

    currentLang = next;

    try {
        localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch (error) {
        // La preferencia no persiste, pero el idioma sí se aplica.
    }

    applyLanguage();
}

function toggleLanguage() {
    const index = LANG_CODES.indexOf(currentLang);
    setLanguage(LANG_CODES[(index + 1) % LANG_CODES.length]);
}

function mostrarLegal(idSeccion) {
    document.querySelectorAll('.legal-section').forEach(sec => {
        sec.style.display = 'none';
    });
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.style.display = 'block';
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}

function cerrarLegal() {
    document.querySelectorAll('.legal-section').forEach(sec => {
        sec.style.display = 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Botón Scroll Top Flotante
window.addEventListener('scroll', function() {
    const btnScroll = document.getElementById('btnScrollTop');
    if (btnScroll) {
        if (window.scrollY > 300) {
            btnScroll.classList.add('show');
        } else {
            btnScroll.classList.remove('show');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Compatibilidad con los manejadores inline del HTML original.
Object.assign(window, {
    openModal,
    closeModal,
    toggleTheme,
    toggleLanguage,
    setLanguage,
    getLanguageCode: () => currentLang,
    applyLanguage,
    mostrarLegal,
    cerrarLegal,
    scrollToTop
});
