import { useRef, useState } from 'react';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import PrivacyModal from '../Privacy/PrivacyModal';
import './Contacto.css';

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
const hasFormspree = Boolean(formspreeUrl) && !formspreeUrl.includes('your-form-id');

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const privacyCopy = {
  link: T('Ver política', 'View policy', 'Voir la politique', '查看政策'),
  note: T(
    'No incluyas datos sensibles, documentos de identidad ni información reservada en este formulario.',
    'Do not include sensitive data, identity documents or privileged information in this form.',
    'N’incluez pas de données sensibles, de documents d’identité ni d’informations confidentielles dans ce formulaire.',
    '请勿在此表单中填写敏感数据、身份证件或保密信息。',
  ),
  promise: T(
    'Respondemos en menos de 24 horas hábiles. Tu consulta es confidencial.',
    'We reply within 24 business hours. Your inquiry is confidential.',
    'Nous répondons sous 24 heures ouvrables. Votre demande reste confidentielle.',
    '我们在 24 个工作小时内回复，您的咨询将严格保密。',
  ),
};

const submitCopy = {
  submit: T(
    'Enviar Consulta a TuPlus Abogados',
    'Send Inquiry to TuPlus Abogados',
    'Envoyer votre demande à TuPlus Abogados',
    '向 TuPlus Abogados 发送咨询',
  ),
  sending: T('Enviando…', 'Sending…', 'Envoi en cours…', '正在发送……'),
  subject: T('Consulta desde el sitio web', 'Inquiry from the website', 'Demande depuis le site web', '来自网站的咨询'),
  general: T('Consulta General', 'General Inquiry', 'Demande générale', '一般咨询'),
  labels: {
    name: T('Nombre', 'Name', 'Nom', '姓名'),
    email: T('Correo', 'Email', 'E-mail', '邮箱'),
    phone: T('Teléfono', 'Phone', 'Téléphone', '电话'),
    specialty: T('Área', 'Area', 'Domaine', '领域'),
    message: T('Consulta', 'Inquiry', 'Demande', '咨询'),
  },
  status: {
    sent: T(
      '¡Gracias! Hemos recibido tu consulta. Te responderemos en menos de 24 horas hábiles.',
      'Thank you! We have received your inquiry and will reply within 24 business hours.',
      'Merci ! Nous avons bien reçu votre demande et vous répondrons sous 24 heures ouvrables.',
      '谢谢！我们已收到您的咨询，并将在 24 个工作小时内回复。',
    ),
    error: T(
      'No pudimos enviar tu consulta. Inténtalo de nuevo o escríbenos a contacto@tuplusabogados.com.pe.',
      'We could not send your inquiry. Please try again or email us at contacto@tuplusabogados.com.pe.',
      'Nous n’avons pas pu envoyer votre demande. Réessayez ou écrivez-nous à contacto@tuplusabogados.com.pe.',
      '无法发送您的咨询。请重试或发送邮件至 contacto@tuplusabogados.com.pe。',
    ),
    email: T(
      'Abrimos tu cliente de correo. Si no se abre, escríbenos a contacto@tuplusabogados.com.pe.',
      'We opened your email client. If it does not open, email us at contacto@tuplusabogados.com.pe.',
      'Nous avons ouvert votre client de messagerie. S’il ne s’ouvre pas, écrivez-nous à contacto@tuplusabogados.com.pe.',
      '已打开您的邮件客户端。如未打开，请发送邮件至 contacto@tuplusabogados.com.pe。',
    ),
    invalid: T(
      'Completa tu nombre, un correo válido y el detalle de la consulta. No se aceptan solo espacios en blanco.',
      'Please complete your name, a valid email and the details of your inquiry. Blank spaces alone are not accepted.',
      'Veuillez indiquer votre nom, un e-mail valide et le détail de votre demande. Les espaces vides ne sont pas acceptés.',
      '请填写姓名、有效邮箱及咨询详情。不接受仅含空格的内容。',
    ),
  },
};

export default function Contacto() {
  const lang = useLanguage();
  const formRef = useRef(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [status, setStatus] = useState('idle');

  const clearStatus = () => {
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get('nombre') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const telefono = String(data.get('telefono') ?? '').trim();
    const especialidad = String(data.get('especialidad') ?? '').trim();
    const mensaje = String(data.get('mensaje') ?? '').trim();

    if (!nombre || !email || !mensaje) {
      setStatus('invalid');
      return;
    }

    data.set('nombre', nombre);
    data.set('email', email);
    data.set('telefono', telefono);
    data.set('especialidad', especialidad);
    data.set('mensaje', mensaje);

    if (!hasFormspree) {
      const subject = `${pick(submitCopy.subject, lang)} — ${especialidad || pick(submitCopy.general, lang)}`;
      const body = [
        `${pick(submitCopy.labels.name, lang)}: ${nombre}`,
        `${pick(submitCopy.labels.email, lang)}: ${email}`,
        `${pick(submitCopy.labels.phone, lang)}: ${telefono}`,
        `${pick(submitCopy.labels.specialty, lang)}: ${especialidad}`,
        '',
        `${pick(submitCopy.labels.message, lang)}:`,
        mensaje,
      ].join('\n');

      window.location.href = `mailto:contacto@tuplusabogados.com.pe?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('email');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Formspree request failed');

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const statusClass =
    status === 'sent'
      ? 'ok'
      : status === 'error' || status === 'invalid'
        ? 'error'
        : status === 'email'
          ? 'info'
          : '';

  const statusMessage = status === 'idle' || status === 'sending' ? '' : pick(submitCopy.status[status], lang);

  return (
    <section className="section-secondary" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" data-lang="tag_direct">Contacto Directo</span>
          <h2 className="section-title" data-lang="contact_title">Agende una Consulta</h2>
          <p className="section-desc" data-lang="contact_desc">
            Atención presencial en nuestra sede corporativa o virtual a través de videollamada.
          </p>
          <p className="contact-promise">
            <i className="fa-solid fa-shield-halved" aria-hidden="true" />
            <span>{pick(privacyCopy.promise, lang)}</span>
          </p>
        </div>
        <div className="contact-grid">
          <div>
            <div className="contact-info-card">
              <h3>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <span data-lang="addr_title">Dirección Institucional</span>
              </h3>
              <p>Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Perú</p>
            </div>
            <div className="contact-info-card">
              <h3>
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span data-lang="phone_title">Central Telefónica</span>
              </h3>
              <p>+51 (1) 555-666 / +51 999 888 777</p>
            </div>
            <div className="contact-info-card">
              <h3>
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span data-lang="email_title">Correo de Atención</span>
              </h3>
              <p>contacto@tuplusabogados.com.pe</p>
            </div>
            <div className="map-container">
              <iframe
                allowFullScreen
                height="220"
                loading="lazy"
                title="Ubicación de TuPlus Abogados en San Isidro, Lima"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.968270544158!2d-77.0304!3d-12.0975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzUxLjAiUyA3N8KwMDEnNDkuNCJX!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
                width="100%"
              />
            </div>
          </div>

          <form
            action={formspreeUrl || undefined}
            className="calculator-container form-reset"
            method="post"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <input type="hidden" name="_subject" value={pick(submitCopy.subject, lang)} />
            <input type="hidden" name="origen" value="Formulario de contacto web" />

            <div className="form-group">
              <label htmlFor="nombre" data-lang="form_name">Nombre Completo / Razón Social</label>
              <input
                autoComplete="name"
                className="form-control"
                data-placeholder-en="E.g.: John Doe / Company LLC"
                data-placeholder-es="Ej: Juan Pérez / Empresa S.A.C."
                data-placeholder-fr="Ex. : Jean Dupont / Société SARL"
                data-placeholder-zh="例如：张伟 / 某某有限公司"
                id="nombre"
                name="nombre"
                onChange={clearStatus}
                placeholder="Ej: Juan Pérez / Empresa S.A.C."
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" data-lang="form_email">Correo Electrónico</label>
              <input
                autoComplete="email"
                className="form-control"
                id="email"
                name="email"
                onChange={clearStatus}
                placeholder="correo@empresa.com"
                required
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" data-lang="form_phone">Teléfono / WhatsApp</label>
              <input
                autoComplete="tel"
                className="form-control"
                id="telefono"
                inputMode="tel"
                maxLength={24}
                name="telefono"
                onChange={clearStatus}
                onInput={(event) => {
                  const input = event.currentTarget;
                  const cleaned = input.value.replace(/[^\d+\s().-]/g, '');
                  if (cleaned !== input.value) input.value = cleaned;
                }}
                placeholder="+51 999 888 777"
                type="tel"
              />
            </div>
            <div className="form-group">
              <label htmlFor="especialidad" data-lang="form_spec">Área de Consulta / Especialidad</label>
              <select
                className="form-control"
                id="especialidad"
                name="especialidad"
                onChange={clearStatus}
              >
                {PRACTICE_AREAS.map((area) => (
                  <option key={area.slug} value={pick(area.title, lang)}>
                    {pick(area.title, lang)}
                  </option>
                ))}
                <option value={pick(submitCopy.general, lang)}>{pick(submitCopy.general, lang)}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje" data-lang="form_msg">Detalle de la Consulta Legal</label>
              <textarea
                className="form-control"
                data-placeholder-en="Briefly describe your legal situation..."
                data-placeholder-es="Describa brevemente su situación jurídica..."
                data-placeholder-fr="Décrivez brièvement votre situation juridique…"
                data-placeholder-zh="请简要描述您的法律情况……"
                id="mensaje"
                name="mensaje"
                onChange={clearStatus}
                placeholder="Describa brevemente su situación jurídica..."
                required
                rows="4"
              />
              <p className="form-privacy-note">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                <span>{pick(privacyCopy.note, lang)}</span>
              </p>
            </div>
            <div className="form-group form-check">
              <input id="privacidad" name="privacidad" required type="checkbox" />
              <div>
                <label htmlFor="privacidad">
                  <span data-lang="form_privacy">Acepto la Política de Privacidad</span>
                </label>{' '}
                <button
                  type="button"
                  className="privacy-link"
                  onClick={() => setPrivacyOpen(true)}
                >
                  {pick(privacyCopy.link, lang)}
                </button>
              </div>
            </div>
            <button className="btn-gold btn-full" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? pick(submitCopy.sending, lang) : pick(submitCopy.submit, lang)}
            </button>

            <p
              className={`contact-status${statusClass ? ` contact-status--${statusClass}` : ''}`}
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
