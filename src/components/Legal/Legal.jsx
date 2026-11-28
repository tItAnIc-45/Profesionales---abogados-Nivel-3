import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRIVACY_INTRO, PRIVACY_SECTIONS, PRIVACY_UPDATED } from '../../data/privacyPolicy';
import './Legal.css';

const privacyBody = [
  { type: 'p', text: PRIVACY_INTRO },
  { type: 'p', text: PRIVACY_UPDATED },
  ...PRIVACY_SECTIONS.flatMap((section) => [
    { type: 'h3', text: section.title },
    { type: 'p', text: section.body },
  ]),
];

const legalSections = [
  {
    id: 'terminos',
    tag: { es: 'Marco Legal', en: 'Legal Framework', fr: 'Cadre juridique', zh: '法律框架' },
    title: { es: 'Términos de', en: 'Terms of', fr: 'Conditions', zh: '服务' },
    accent: { es: 'Servicio', en: 'Service', fr: 'd’utilisation', zh: '条款' },
    desc: {
      es: 'Condiciones generales para la utilización de nuestros servicios jurídicos.',
      en: 'General terms and conditions for using our legal services.',
      fr: 'Conditions générales d’utilisation de nos services juridiques.',
      zh: '使用本所法律服务的一般条件。',
    },
    body: [
      {
        type: 'p',
        text: {
          es: 'Bienvenido a TuPlus Abogados. Al acceder a nuestro sitio web y utilizar nuestros servicios de asesoría jurídica corporativa, civil y penal, usted acepta cumplir con los presentes términos y condiciones de uso.',
          en: 'Welcome to TuPlus Abogados. By accessing our website and using our corporate, civil, and criminal legal advisory services, you agree to comply with these terms and conditions.',
          fr: 'Bienvenue chez TuPlus Abogados. En accédant à notre site web et en utilisant nos services de conseil juridique en droit des sociétés, civil et pénal, vous acceptez de respecter les présentes conditions d’utilisation.',
          zh: '欢迎访问 TuPlus Abogados。访问本网站并使用我们的公司、民事及刑事法律咨询服务，即表示您同意遵守本使用条款。',
        },
      },
      {
        type: 'h3',
        text: {
          es: '1. Alcance de la Asesoría',
          en: '1. Scope of Counseling',
          fr: '1. Étendue du conseil',
          zh: '一、咨询服务范围',
        },
      },
      {
        type: 'p',
        text: {
          es: 'La información proporcionada en este sitio web tiene fines meramente informativos y no constituye una asesoría legal formal hasta que se suscriba un contrato de prestación de servicios profesionales entre las partes.',
          en: 'The information provided on this website is for informational purposes only and does not constitute formal legal advice until a professional services contract is signed.',
          fr: 'Les informations fournies sur ce site web ont un caractère purement informatif et ne constituent pas un conseil juridique formel tant qu’un contrat de prestation de services professionnels n’a pas été conclu entre les parties.',
          zh: '本网站提供的信息仅供参考，在双方签订专业服务合同之前，不构成正式的法律意见。',
        },
      },
      {
        type: 'h3',
        text: {
          es: '2. Propiedad Intelectual',
          en: '2. Intellectual Property',
          fr: '2. Propriété intellectuelle',
          zh: '二、知识产权',
        },
      },
      {
        type: 'p',
        text: {
          es: 'Todo el contenido, logotipos (incluyendo el emblema del colibrí), diseños, textos y código fuente son propiedad exclusiva de TuPlus Abogados.',
          en: 'All content, logos (including the hummingbird emblem), designs, text, and source code are the exclusive property of TuPlus Abogados.',
          fr: 'L’ensemble du contenu, des logos (y compris l’emblème du colibri), des designs, des textes et du code source est la propriété exclusive de TuPlus Abogados.',
          zh: '所有内容、标识（包括蜂鸟徽标）、设计、文本及源代码均为 TuPlus Abogados 的专有财产。',
        },
      },
    ],
  },
  {
    id: 'privacidad',
    tag: { es: 'Confidencialidad', en: 'Confidentiality', fr: 'Confidentialité', zh: '保密' },
    title: { es: 'Política de', en: 'Privacy', fr: 'Politique de', zh: '隐私' },
    accent: { es: 'Privacidad', en: 'Policy', fr: 'confidentialité', zh: '政策' },
    desc: {
      es: 'Compromiso absoluto con la protección de sus datos personales y corporativos.',
      en: 'Absolute commitment to protecting your personal and corporate data.',
      fr: 'Engagement absolu envers la protection de vos données personnelles et professionnelles.',
      zh: '对保护您的个人及企业数据的绝对承诺。',
    },
    body: privacyBody,
  },
  {
    id: 'etica',
    tag: {
      es: 'Valores Corporativos',
      en: 'Corporate Values',
      fr: 'Valeurs d’entreprise',
      zh: '企业价值观',
    },
    title: { es: 'Código de', en: 'Code of', fr: 'Code de', zh: '职业' },
    accent: { es: 'Ética', en: 'Ethics', fr: 'déontologie', zh: '道德准则' },
    desc: {
      es: 'Los pilares morales y profesionales que rigen nuestra práctica jurídica.',
      en: 'The moral and professional pillars governing our legal practice.',
      fr: 'Les piliers moraux et professionnels qui régissent notre pratique juridique.',
      zh: '指导本所执业的法律与道德基石。',
    },
    body: [
      {
        type: 'p',
        text: {
          es: 'Nuestros profesionales del derecho actúan bajo estrictos principios de probidad, lealtad, independencia y secreto profesional, garantizando una defensa ética y rigurosa de los intereses de nuestros clientes.',
          en: 'Our legal professionals act under strict principles of integrity, loyalty, independence, and professional secrecy, ensuring an ethical and rigorous defense of our clients interests.',
          fr: 'Nos professionnels du droit agissent selon des principes stricts de probité, de loyauté, d’indépendance et de secret professionnel, garantissant une défense éthique et rigoureuse des intérêts de nos clients.',
          zh: '本所法律专业人士秉持诚信、忠诚、独立与职业守密的严格原则，确保以合乎道德且严谨的方式维护客户利益。',
        },
      },
    ],
  },
];

const backLabel = {
  es: 'Cerrar / Volver',
  en: 'Close / Back',
  fr: 'Fermer / Retour',
  zh: '关闭 / 返回',
};

export default function Legal() {
  const { hash } = useLocation();
  const lang = useLanguage();

  useEffect(() => {
    const id = hash.replace('#', '');
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    // setTimeout en lugar de requestAnimationFrame: rAF se suspende en
    // pestañas en segundo plano y el ancla quedaría sin desplazar.
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="legal-page">
      {legalSections.map((section) => (
        <section key={section.id} className="legal-section" id={section.id}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{pick(section.tag, lang)}</span>
              <h2 className="section-title">
                <span>{pick(section.title, lang)}</span>
                {lang === 'zh' ? '' : ' '}
                <span className="gold-text">{pick(section.accent, lang)}</span>
              </h2>
              <p className="section-desc">{pick(section.desc, lang)}</p>
            </div>

            <div className="legal-content">
              {section.body.map((block, index) =>
                block.type === 'h3' ? (
                  <h3 key={index}>{pick(block.text, lang)}</h3>
                ) : (
                  <p key={index}>{pick(block.text, lang)}</p>
                ),
              )}

              <Link className="btn-outline legal-back" to="/">
                {pick(backLabel, lang)}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
