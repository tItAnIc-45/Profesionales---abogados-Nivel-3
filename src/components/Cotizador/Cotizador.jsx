import { useEffect, useId, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import PrivacyModal from '../Privacy/PrivacyModal';
import './Cotizador.css';

const formspreeUrl =
  import.meta.env.VITE_FORMSPREE_URL || import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
const hasFormspree = Boolean(formspreeUrl) && !formspreeUrl.includes('your-form-id');

const services = PRACTICE_AREAS.map((area) => ({
  id: area.slug,
  icon: area.icon,
  title: area.title,
  desc: area.short,
}));

const otherService = {
  id: 'otro',
  title: { es: 'Otro', en: 'Other', fr: 'Autre', zh: '其他' },
};

const serviceOptions = [
  ...PRACTICE_AREAS.map((area) => ({ id: area.slug, title: area.title })),
  otherService,
];

const fees = [
  {
    id: 'consultas',
    icon: 'fa-solid fa-comments',
    title: {
      es: 'Consultas Legales',
      en: 'Legal Consultations',
      fr: 'Consultations juridiques',
      zh: '法律咨询',
    },
    price: {
      es: 'S/ 80 – S/ 150',
      en: 'S/ 80 – S/ 150',
      fr: 'S/ 80 – S/ 150',
      zh: 'S/ 80 – S/ 150',
    },
    priceNote: {
      es: 'por consulta',
      en: 'per consultation',
      fr: 'par consultation',
      zh: '每次咨询',
    },
    features: [
      {
        es: 'Evaluación inicial del caso',
        en: 'Initial case assessment',
        fr: 'Évaluation initiale du dossier',
        zh: '案件初步评估',
      },
      {
        es: 'Orientación legal clara',
        en: 'Clear legal guidance',
        fr: 'Orientation juridique claire',
        zh: '清晰的法律指引',
      },
      {
        es: 'Respuesta en 24 horas',
        en: 'Response within 24 hours',
        fr: 'Réponse sous 24 heures',
        zh: '24小时内回复',
      },
    ],
  },
  {
    id: 'documentos',
    icon: 'fa-solid fa-file-signature',
    title: {
      es: 'Elaboración de Documentos',
      en: 'Document Drafting',
      fr: 'Rédaction de documents',
      zh: '文件起草',
    },
    price: {
      es: 'Desde S/ 150',
      en: 'From S/ 150',
      fr: 'À partir de S/ 150',
      zh: 'S/ 150 起',
    },
    priceNote: {
      es: 'según complejidad',
      en: 'depending on complexity',
      fr: 'selon la complexité',
      zh: '视复杂程度而定',
    },
    features: [
      {
        es: 'Contratos y convenios',
        en: 'Contracts and agreements',
        fr: 'Contrats et accords',
        zh: '合同与协议',
      },
      {
        es: 'Cartas y poderes',
        en: 'Letters and powers of attorney',
        fr: 'Lettres et procurations',
        zh: '函件与授权书',
      },
      {
        es: 'Revisión profesional',
        en: 'Professional review',
        fr: 'Relecture professionnelle',
        zh: '专业审阅',
      },
    ],
  },
  {
    id: 'procesos',
    icon: 'fa-solid fa-gavel',
    title: {
      es: 'Procesos Judiciales',
      en: 'Court Proceedings',
      fr: 'Procédures judiciaires',
      zh: '诉讼程序',
    },
    price: {
      es: 'Cotización personalizada',
      en: 'Custom quote',
      fr: 'Devis personnalisé',
      zh: '个性化报价',
    },
    priceNote: {
      es: 'evaluación sin compromiso',
      en: 'no-obligation assessment',
      fr: 'évaluation sans engagement',
      zh: '免费评估',
    },
    priceIsText: true,
    features: [
      {
        es: 'Análisis del caso',
        en: 'Case analysis',
        fr: 'Analyse du dossier',
        zh: '案件分析',
      },
      {
        es: 'Estrategia procesal',
        en: 'Procedural strategy',
        fr: 'Stratégie procédurale',
        zh: '诉讼策略',
      },
      {
        es: 'Acompañamiento integral',
        en: 'Full support',
        fr: 'Accompagnement complet',
        zh: '全程陪同',
      },
    ],
  },
];

const copy = {
  servicesTag: {
    es: 'Servicios Legales',
    en: 'Legal Services',
    fr: 'Services juridiques',
    zh: '法律服务',
  },
  servicesTitle: {
    es: 'Nuestros Servicios',
    en: 'Our Services',
    fr: 'Nos services',
    zh: '我们的服务',
  },
  servicesDesc: {
    es: 'Soluciones jurídicas integrales para proteger tus intereses personales y empresariales.',
    en: 'Comprehensive legal solutions to protect your personal and business interests.',
    fr: 'Des solutions juridiques complètes pour protéger vos intérêts personnels et professionnels.',
    zh: '全方位法律解决方案，守护您的个人与企业权益。',
  },
  feesTag: {
    es: 'Transparencia',
    en: 'Transparency',
    fr: 'Transparence',
    zh: '费用透明',
  },
  feesTitle: {
    es: 'Honorarios y Tarifas',
    en: 'Fees & Rates',
    fr: 'Honoraires et tarifs',
    zh: '收费标准',
  },
  feesDesc: {
    es: 'Tarifas claras y competitivas. La cotización final se ajusta a la complejidad de cada caso.',
    en: 'Clear, competitive rates. The final quote is tailored to the complexity of each case.',
    fr: 'Des tarifs clairs et compétitifs. Le devis final est adapté à la complexité de chaque dossier.',
    zh: '收费清晰且具竞争力，最终报价将根据案件复杂程度确定。',
  },
  feesDisclaimer: {
    es: '* Los montos son referenciales y pueden variar según la complejidad, urgencia y alcance del servicio. La cotización definitiva se entrega tras la evaluación inicial.',
    en: '* Amounts are indicative and may vary depending on the complexity, urgency, and scope of the service. The final quote is provided after the initial assessment.',
    fr: '* Les montants sont indicatifs et peuvent varier selon la complexité, l’urgence et l’étendue du service. Le devis définitif est remis après l’évaluation initiale.',
    zh: '* 以上金额仅供参考，可能因服务复杂程度、紧急程度及范围而有所调整。最终报价将在初步评估后提供。',
  },
  quoteTag: {
    es: 'Cotización',
    en: 'Get a quote',
    fr: 'Devis',
    zh: '获取报价',
  },
  quoteTitle: {
    es: 'Solicita una cotización',
    en: 'Request a quote',
    fr: 'Demandez un devis',
    zh: '获取报价',
  },
  quoteDesc: {
    es: 'Cuéntanos brevemente tu caso y te contactaremos con una propuesta a tu medida.',
    en: 'Tell us briefly about your case and we will contact you with a tailored proposal.',
    fr: 'Décrivez brièvement votre dossier et nous vous contacterons avec une proposition sur mesure.',
    zh: '请简要描述您的案件，我们将与您联系并提供量身定制的方案。',
  },
  trust: [
    {
      es: 'Respuesta en 24 horas',
      en: 'Response within 24 hours',
      fr: 'Réponse sous 24 heures',
      zh: '24小时内回复',
    },
    {
      es: 'Confidencialidad garantizada',
      en: 'Guaranteed confidentiality',
      fr: 'Confidentialité garantie',
      zh: '严格保密',
    },
    {
      es: 'Primera evaluación sin compromiso',
      en: 'No-obligation initial assessment',
      fr: 'Première évaluation sans engagement',
      zh: '首次评估无义务',
    },
  ],
  serviceLabel: {
    es: 'Tipo de servicio',
    en: 'Type of service',
    fr: 'Type de service',
    zh: '服务类型',
  },
  servicePlaceholder: {
    es: 'Selecciona un servicio',
    en: 'Select a service',
    fr: 'Sélectionnez un service',
    zh: '请选择服务',
  },
  messageLabel: {
    es: 'Describe tu caso',
    en: 'Describe your case',
    fr: 'Décrivez votre cas',
    zh: '描述您的案件',
  },
  messagePlaceholder: {
    es: 'Describe tu caso...',
    en: 'Describe your case...',
    fr: 'Décrivez votre cas...',
    zh: '请描述您的案件……',
  },
  contactLabel: {
    es: 'Correo electrónico o teléfono',
    en: 'Email or phone number',
    fr: 'E-mail ou téléphone',
    zh: '电子邮箱或电话',
  },
  contactPlaceholder: {
    es: 'correo@ejemplo.com / +51 999 888 777',
    en: 'email@example.com / +51 999 888 777',
    fr: 'email@exemple.com / +51 999 888 777',
    zh: 'email@example.com / +51 999 888 777',
  },
  submit: {
    es: 'Solicitar cotización',
    en: 'Request a quote',
    fr: 'Demander un devis',
    zh: '获取报价',
  },
  sending: {
    es: 'Enviando...',
    en: 'Sending...',
    fr: 'Envoi en cours...',
    zh: '正在发送……',
  },
  note: {
    es: 'Tus datos están seguros con nosotros.',
    en: 'Your data is safe with us.',
    fr: 'Vos données sont en sécurité avec nous.',
    zh: '您的信息将受到安全保护。',
  },
  consent: {
    es: 'Acepto la Política de Privacidad y el tratamiento de mis datos para atender esta consulta.',
    en: 'I accept the Privacy Policy and the processing of my data to handle this inquiry.',
    fr: 'J’accepte la politique de confidentialité et le traitement de mes données pour répondre à cette demande.',
    zh: '我同意《隐私政策》，并同意为处理本次咨询而处理我的数据。',
  },
  consentLink: {
    es: 'Ver política',
    en: 'View policy',
    fr: 'Voir la politique',
    zh: '查看政策',
  },
  sensitiveNote: {
    es: 'No incluyas datos sensibles, documentos de identidad ni información reservada en este formulario.',
    en: 'Do not include sensitive data, identity documents or privileged information in this form.',
    fr: 'N’incluez pas de données sensibles, de documents d’identité ni d’informations confidentielles dans ce formulaire.',
    zh: '请勿在此表单中填写敏感数据、身份证件或保密信息。',
  },
  mailSubject: {
    es: 'Solicitud de cotización',
    en: 'Quote request',
    fr: 'Demande de devis',
    zh: '报价申请',
  },
  status: {
    sent: {
      es: '¡Gracias! Hemos recibido tu solicitud. Te contactaremos muy pronto.',
      en: 'Thank you! We have received your request and will contact you shortly.',
      fr: 'Merci ! Nous avons bien reçu votre demande et vous contacterons très bientôt.',
      zh: '谢谢！我们已收到您的申请，将尽快与您联系。',
    },
    error: {
      es: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a contacto@tuplusabogados.com.pe.',
      en: 'We could not send your request. Please try again or email us at contacto@tuplusabogados.com.pe.',
      fr: 'Nous n’avons pas pu envoyer votre demande. Réessayez ou écrivez-nous à contacto@tuplusabogados.com.pe.',
      zh: '无法提交您的申请。请重试或发送邮件至 contacto@tuplusabogados.com.pe。',
    },
    consent: {
      es: 'Para enviar tu solicitud debes aceptar la Política de Privacidad.',
      en: 'To send your request you must accept the Privacy Policy.',
      fr: 'Pour envoyer votre demande, vous devez accepter la politique de confidentialité.',
      zh: '提交申请前，请先同意《隐私政策》。',
    },
    email: {
      es: 'Abrimos tu cliente de correo. Si no se abre, escríbenos a contacto@tuplusabogados.com.pe.',
      en: 'We opened your email client. If it does not open, email us at contacto@tuplusabogados.com.pe.',
      fr: 'Nous avons ouvert votre client de messagerie. S’il ne s’ouvre pas, écrivez-nous à contacto@tuplusabogados.com.pe.',
      zh: '已打开您的邮件客户端。如未打开，请发送邮件至 contacto@tuplusabogados.com.pe。',
    },
    message: {
      es: 'Describe brevemente tu consulta; no se aceptan solo espacios en blanco.',
      en: 'Briefly describe your inquiry; blank spaces alone are not accepted.',
      fr: 'Décrivez brièvement votre demande ; les espaces vides ne sont pas acceptés.',
      zh: '请简要描述您的咨询；不接受仅含空格的内容。',
    },
    contact: {
      es: 'Indícanos un correo o teléfono de contacto; no se aceptan solo espacios en blanco.',
      en: 'Please provide an email or phone number; blank spaces alone are not accepted.',
      fr: 'Indiquez un e-mail ou un téléphone ; les espaces vides ne sont pas acceptés.',
      zh: '请提供联系邮箱或电话；不接受仅含空格的内容。',
    },
  },
};

export default function Cotizador() {
  const lang = useLanguage();
  const uid = useId();
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();

  const initialArea = PRACTICE_AREAS.some((area) => area.slug === searchParams.get('area'))
    ? searchParams.get('area')
    : '';

  const [service, setService] = useState(initialArea);
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // Permite llegar desde una página de área con el servicio ya seleccionado:
  // /cotizador?area=penal
  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (PRACTICE_AREAS.some((area) => area.slug === areaParam)) {
      setService(areaParam);
    }
  }, [searchParams]);

  const serviceId = `${uid}-service`;
  const messageId = `${uid}-message`;
  const contactId = `${uid}-contact`;
  const consentId = `${uid}-consent`;
  const noteId = `${uid}-note`;
  const statusId = `${uid}-status`;

  const selectedService = serviceOptions.find((option) => option.id === service);
  const selectedServiceLabel = selectedService ? pick(selectedService.title, lang) : '';

  const clearStatus = () => {
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedService) {
      setStatus('error');
      return;
    }

    if (!message.trim()) {
      setStatus('message');
      return;
    }

    if (!contact.trim()) {
      setStatus('contact');
      return;
    }

    if (!consent) {
      setStatus('consent');
      return;
    }

    if (!hasFormspree) {
      const subject = `${pick(copy.mailSubject, lang)} — ${selectedServiceLabel}`;
      const body = [
        `${pick(copy.serviceLabel, lang)}: ${selectedServiceLabel}`,
        `${pick(copy.messageLabel, lang)}: ${message.trim()}`,
        `${pick(copy.contactLabel, lang)}: ${contact.trim()}`,
      ].join('\n\n');

      window.location.href = `mailto:contacto@tuplusabogados.com.pe?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('email');
      return;
    }

    setStatus('sending');

    const formData = new FormData(formRef.current);
    formData.set('servicio', selectedServiceLabel);
    formData.set('mensaje', message.trim());
    formData.set('contacto', contact.trim());

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Formspree request failed');

      formRef.current?.reset();
      setService('');
      setMessage('');
      setContact('');
      setConsent(false);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const statusMessage =
    status === 'sending'
      ? pick(copy.sending, lang)
      : status !== 'idle'
        ? pick(copy.status[status], lang)
        : '';

  const statusClass =
    status === 'sent'
      ? 'sp-quote-status--ok'
      : status === 'error' || status === 'consent' || status === 'message' || status === 'contact'
        ? 'sp-quote-status--error'
        : 'sp-quote-status--info';

  return (
    <section className="services-pricing" id="cotizador">
      <div className="container">
        <header className="section-header sp-header">
          <span className="section-tag">{pick(copy.servicesTag, lang)}</span>
          <h2 className="section-title">{pick(copy.servicesTitle, lang)}</h2>
          <p className="section-desc">{pick(copy.servicesDesc, lang)}</p>
        </header>

        <ul className="sp-services">
          {services.map((item) => (
            <li className="sp-service-card" key={item.id}>
              <span className="sp-service-icon" aria-hidden="true">
                <i className={item.icon} />
              </span>
              <h3>{pick(item.title, lang)}</h3>
              <p>{pick(item.desc, lang)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="sp-fees-band">
        <div className="container">
          <header className="section-header sp-header">
            <span className="section-tag">{pick(copy.feesTag, lang)}</span>
            <h2 className="section-title">{pick(copy.feesTitle, lang)}</h2>
            <p className="section-desc">{pick(copy.feesDesc, lang)}</p>
          </header>

          <ul className="sp-fees">
            {fees.map((fee) => (
              <li className="sp-fee-card" key={fee.id}>
                <span className="sp-fee-icon" aria-hidden="true">
                  <i className={fee.icon} />
                </span>
                <h3>{pick(fee.title, lang)}</h3>
                <p className={`sp-fee-price${fee.priceIsText ? ' sp-fee-price--text' : ''}`}>
                  {pick(fee.price, lang)}
                </p>
                <p className="sp-fee-note">{pick(fee.priceNote, lang)}</p>
                <ul className="sp-fee-list">
                  {fee.features.map((feature) => (
                    <li key={pick(feature, 'es')}>{pick(feature, lang)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="sp-fee-disclaimer">{pick(copy.feesDisclaimer, lang)}</p>
        </div>
      </div>

      <div className="container">
        <div className="sp-quote">
          <div className="sp-quote-intro">
            <span className="sp-quote-tag">{pick(copy.quoteTag, lang)}</span>
            <h2>{pick(copy.quoteTitle, lang)}</h2>
            <p>{pick(copy.quoteDesc, lang)}</p>
            <ul className="sp-quote-trust">
              {copy.trust.map((item) => (
                <li key={pick(item, 'es')}>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>{pick(item, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="sp-quote-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value={pick(copy.mailSubject, lang)} />
            <input type="hidden" name="origen" value="Solicitud de cotización" />

            <div className="sp-field">
              <label htmlFor={serviceId}>{pick(copy.serviceLabel, lang)}</label>
              <select
                className="form-control"
                id={serviceId}
                name="servicio"
                required
                value={service}
                onChange={(event) => {
                  setService(event.target.value);
                  clearStatus();
                }}
              >
                <option value="" disabled>
                  {pick(copy.servicePlaceholder, lang)}
                </option>
                {serviceOptions.map((option) => (
                  <option value={option.id} key={option.id}>
                    {pick(option.title, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div className="sp-field">
              <label htmlFor={messageId}>{pick(copy.messageLabel, lang)}</label>
              <textarea
                className="form-control"
                id={messageId}
                name="mensaje"
                placeholder={pick(copy.messagePlaceholder, lang)}
                required
                rows={4}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  clearStatus();
                }}
              />
            </div>

            <div className="sp-field">
              <label htmlFor={contactId}>{pick(copy.contactLabel, lang)}</label>
              <input
                className="form-control"
                id={contactId}
                name="contacto"
                aria-describedby={noteId}
                placeholder={pick(copy.contactPlaceholder, lang)}
                required
                type="text"
                value={contact}
                onChange={(event) => {
                  setContact(event.target.value);
                  clearStatus();
                }}
              />
            </div>

            <button className="btn-gold btn-full" type="submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? pick(copy.sending, lang) : pick(copy.submit, lang)}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>

            <div className="sp-consent">
              <div className="form-check">
                <input
                  id={consentId}
                  name="privacidad"
                  type="checkbox"
                  value="Aceptada"
                  checked={consent}
                  required
                  onChange={(event) => {
                    setConsent(event.target.checked);
                    clearStatus();
                  }}
                />
                <div>
                  <label htmlFor={consentId}>{pick(copy.consent, lang)}</label>{' '}
                  <button
                    type="button"
                    className="privacy-link"
                    onClick={() => setPrivacyOpen(true)}
                  >
                    {pick(copy.consentLink, lang)}
                  </button>
                </div>
              </div>
              <p className="form-privacy-note">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                <span>{pick(copy.sensitiveNote, lang)}</span>
              </p>
            </div>

            <p className="sp-quote-note" id={noteId}>
              <i className="fa-solid fa-lock" aria-hidden="true" />
              <span>{pick(copy.note, lang)}</span>
            </p>

            <p
              className={`sp-quote-status ${status === 'idle' ? '' : statusClass}`}
              id={statusId}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {statusMessage}
            </p>
          </form>
        </div>
      </div>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
}
