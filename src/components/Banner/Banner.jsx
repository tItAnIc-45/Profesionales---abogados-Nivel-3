import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './Banner.css';

const slides = [
  {
    id: 'institucional',
    eyebrow: {
      es: 'Excelencia & Compromiso Jurídico',
      en: 'Excellence & Legal Commitment',
      fr: 'Excellence & engagement juridique',
      zh: '卓越与法律承诺',
    },
    title: {
      es: 'Defendemos sus Intereses con Rigor Estratégico y Ética',
      en: 'Defending Your Interests with Strategic Rigor and Ethics',
      fr: 'Nous défendons vos intérêts avec rigueur stratégique et éthique',
      zh: '以严谨的战略与职业操守维护您的权益',
    },
    desc: {
      es: 'Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio.',
      en: 'Multidisciplinary law firm specialized in corporate, civil, criminal, and regulatory law.',
      fr: 'Cabinet juridique multidisciplinaire spécialisé en droit des sociétés, civil, pénal et réglementaire.',
      zh: '多领域律师事务所，专精公司法、民事、刑事与监管法律。',
    },
    primary: {
      es: 'Agendar Cita Presencial',
      en: 'Schedule In-Person Meeting',
      fr: 'Prendre rendez-vous',
      zh: '预约面谈',
    },
    secondary: {
      es: 'Conocer La Firma',
      en: 'About The Firm',
      fr: 'Découvrir le cabinet',
      zh: '了解本所',
    },
    secondaryTo: '/la-firma',
  },
  {
    id: 'corporativo',
    eyebrow: {
      es: 'Asesoría Corporativa Integral',
      en: 'Comprehensive Corporate Advisory',
      fr: 'Conseil global aux entreprises',
      zh: '企业综合法律顾问',
    },
    title: {
      es: 'Soluciones Legales Preventivas para el Crecimiento Empresarial',
      en: 'Preventive Legal Solutions for Business Growth',
      fr: 'Des solutions juridiques préventives pour la croissance de votre entreprise',
      zh: '为企业成长提供预防性法律方案',
    },
    desc: {
      es: 'Acompañamiento estratégico en contratos, fusiones, cumplimiento normativo y gobierno corporativo.',
      en: 'Strategic support in contracts, mergers, regulatory compliance, and corporate governance.',
      fr: 'Accompagnement stratégique en matière de contrats, fusions, conformité réglementaire et gouvernance d’entreprise.',
      zh: '在合同、并购、合规与公司治理方面提供战略支持。',
    },
    primary: {
      es: 'Agendar Cita Presencial',
      en: 'Schedule In-Person Meeting',
      fr: 'Prendre rendez-vous',
      zh: '预约面谈',
    },
    secondary: {
      es: 'Áreas de Práctica',
      en: 'Practice Areas',
      fr: 'Domaines d’activité',
      zh: '业务领域',
    },
    secondaryTo: '/areas',
  },
  {
    id: 'litigios',
    eyebrow: {
      es: 'Litigios y Defensa Especializada',
      en: 'Litigation & Specialized Defense',
      fr: 'Contentieux & défense spécialisée',
      zh: '诉讼与专业辩护',
    },
    title: {
      es: 'Representación Sólida ante Instancias Judiciales y Arbitrales',
      en: 'Solid Representation Before Judicial and Arbitration Bodies',
      fr: 'Une représentation solide devant les juridictions et les tribunaux arbitraux',
      zh: '在法院与仲裁机构中提供有力代理',
    },
    desc: {
      es: 'Estrategias procesales diseñadas a medida con absoluta confidencialidad y respaldo técnico.',
      en: 'Tailor-made procedural strategies with absolute confidentiality and technical backing.',
      fr: 'Stratégies procédurales sur mesure, en toute confidentialité et avec un solide appui technique.',
      zh: '量身定制的诉讼策略，严守保密，并提供扎实的技术支持。',
    },
    primary: {
      es: 'Consulta Legal',
      en: 'Legal Consultation',
      fr: 'Consultation juridique',
      zh: '法律咨询',
    },
    secondary: {
      es: 'Nuestro Equipo',
      en: 'Our Team',
      fr: 'Notre équipe',
      zh: '我们的团队',
    },
    secondaryTo: '/equipo',
  },
];

const trust = [
  {
    value: '+20',
    label: { es: 'Años de trayectoria', en: 'Years of practice', fr: 'Années d’expérience', zh: '年执业经验' },
  },
  {
    value: '+2,500',
    label: { es: 'Casos atendidos', en: 'Cases handled', fr: 'Dossiers traités', zh: '已处理案件' },
  },
  {
    value: '98%',
    label: {
      es: 'Resultados favorables',
      en: 'Favorable outcomes',
      fr: 'Résultats favorables',
      zh: '有利结果',
    },
  },
];

const ui = {
  presentation: {
    es: 'Presentación de TuPlus Abogados',
    en: 'TuPlus Abogados presentation',
    fr: 'Présentation de TuPlus Abogados',
    zh: 'TuPlus Abogados 介绍',
  },
  badgeTop: { es: 'Firma legal', en: 'High-level', fr: 'Cabinet juridique', zh: '高水平' },
  badgeBottom: { es: 'de alto nivel', en: 'law firm', fr: 'd’excellence', zh: '律师事务所' },
  previous: {
    es: 'Diapositiva anterior',
    en: 'Previous slide',
    fr: 'Diapositive précédente',
    zh: '上一张幻灯片',
  },
  next: {
    es: 'Diapositiva siguiente',
    en: 'Next slide',
    fr: 'Diapositive suivante',
    zh: '下一张幻灯片',
  },
  selectSlide: {
    es: 'Seleccionar diapositiva',
    en: 'Select slide',
    fr: 'Choisir une diapositive',
    zh: '选择幻灯片',
  },
  slide: { es: 'Diapositiva', en: 'Slide', fr: 'Diapositive', zh: '幻灯片' },
};

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const lang = useLanguage();
  const totalSlides = slides.length;
  const slide = slides[current];

  useEffect(() => {
    if (paused) return undefined;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, totalSlides]);

  const goTo = (index) => setCurrent((index + totalSlides) % totalSlides);

  return (
    <section
      className={`hero hero-slide-${current}`}
      id="inicio"
      aria-roledescription="carrusel"
      aria-label={pick(ui.presentation, lang)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-copy" key={`${current}-${lang}`}>
          <span className="hero-eyebrow">{pick(slide.eyebrow, lang)}</span>

          <h1 className="hero-title">{pick(slide.title, lang)}</h1>

          <p className="hero-desc">{pick(slide.desc, lang)}</p>

          <div className="hero-actions">
            <Link className="btn-gold" to="/contacto">
              <span>{pick(slide.primary, lang)}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link className="btn-outline" to={slide.secondaryTo}>
              {pick(slide.secondary, lang)}
            </Link>
          </div>

          <div className="hero-trust">
            {trust.map((item) => (
              <div className="hero-trust-item" key={item.value}>
                <strong>{item.value}</strong>
                <span>{pick(item.label, lang)}</span>
              </div>
            ))}
          </div>
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
              {pick(ui.badgeTop, lang)}
              <strong>{pick(ui.badgeBottom, lang)}</strong>
            </span>
          </div>

          <div className="emblem-chip">
            <i className="fa-solid fa-location-dot" />
            Lima · Perú
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={() => goTo(current - 1)}
        aria-label={pick(ui.previous, lang)}
      >
        <i className="fa-solid fa-chevron-left" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={() => goTo(current + 1)}
        aria-label={pick(ui.next, lang)}
      >
        <i className="fa-solid fa-chevron-right" aria-hidden="true" />
      </button>

      <div className="hero-dots" role="tablist" aria-label={pick(ui.selectSlide, lang)}>
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`${pick(ui.slide, lang)} ${index + 1}`}
            aria-selected={index === current}
          />
        ))}
      </div>

      <div className="hero-counter" aria-hidden="true">
        <span>0{current + 1}</span>
        <span className="hero-counter-line" />
        <span>0{totalSlides}</span>
      </div>
    </section>
  );
}
