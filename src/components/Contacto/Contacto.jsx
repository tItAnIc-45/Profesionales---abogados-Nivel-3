import { useState } from 'react';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import PrivacyModal from '../Privacy/PrivacyModal';
import './Contacto.css';

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

const privacyCopy = {
  link: {
    es: 'Ver política',
    en: 'View policy',
    fr: 'Voir la politique',
    zh: '查看政策',
  },
  note: {
    es: 'No incluyas datos sensibles, documentos de identidad ni información reservada en este formulario.',
    en: 'Do not include sensitive data, identity documents or privileged information in this form.',
    fr: 'N’incluez pas de données sensibles, de documents d’identité ni d’informations confidentielles dans ce formulaire.',
    zh: '请勿在此表单中填写敏感数据、身份证件或保密信息。',
  },
};

export default function Contacto() {
  const lang = useLanguage();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <section className="section-secondary" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" data-lang="tag_direct">Contacto Directo</span>
          <h2 className="section-title" data-lang="contact_title">Agende una Consulta</h2>
          <p className="section-desc" data-lang="contact_desc">
            Atención presencial en nuestra sede corporativa o virtual a través de videollamada.
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

          <form action={formspreeUrl} className="calculator-container form-reset" method="POST">
            <div className="form-group">
              <label htmlFor="nombre" data-lang="form_name">Nombre Completo / Razón Social</label>
              <input
                className="form-control"
                data-placeholder-en="E.g.: John Doe / Company LLC"
                data-placeholder-es="Ej: Juan Pérez / Empresa S.A.C."
                data-placeholder-fr="Ex. : Jean Dupont / Société SARL"
                data-placeholder-zh="例如：张伟 / 某某有限公司"
                id="nombre"
                name="nombre"
                placeholder="Ej: Juan Pérez / Empresa S.A.C."
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" data-lang="form_email">Correo Electrónico</label>
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="correo@empresa.com"
                required
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" data-lang="form_phone">Teléfono / WhatsApp</label>
              <input
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="+51 999 888 777"
                type="tel"
              />
            </div>
            <div className="form-group">
              <label htmlFor="especialidad" data-lang="form_spec">Área de Consulta / Especialidad</label>
              <select className="form-control" id="especialidad" name="especialidad">
                <option data-en="Corporate Law" data-es="Derecho Corporativo" data-fr="Droit des sociétés" data-zh="公司法" value="Derecho Corporativo">
                  Derecho Corporativo
                </option>
                <option data-en="Litigation &amp; Arbitration" data-es="Litigios y Arbitraje" data-fr="Contentieux &amp; arbitrage" data-zh="诉讼与仲裁" value="Litigios y Arbitraje">
                  Litigios y Arbitraje
                </option>
                <option data-en="Economic Criminal Law" data-es="Derecho Penal Económico" data-fr="Droit pénal des affaires" data-zh="经济刑法" value="Derecho Penal Económico">
                  Derecho Penal Económico
                </option>
                <option data-en="Real Estate Law" data-es="Derecho Inmobiliario" data-fr="Droit immobilier" data-zh="房地产法" value="Derecho Inmobiliario">
                  Derecho Inmobiliario
                </option>
                <option data-en="Labor Law" data-es="Derecho Laboral" data-fr="Droit du travail" data-zh="劳动法" value="Derecho Laboral">
                  Derecho Laboral
                </option>
                <option data-en="Tax Law" data-es="Derecho Tributario" data-fr="Droit fiscal" data-zh="税法" value="Derecho Tributario">
                  Derecho Tributario
                </option>
                <option data-en="General Inquiry" data-es="Consulta General" data-fr="Demande générale" data-zh="一般咨询" value="Consulta General">
                  Consulta General
                </option>
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
            <button className="btn-gold btn-full" data-lang="form_btn" type="submit">
              Enviar Consulta a TuPlus Abogados
            </button>
          </form>
        </div>
      </div>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
}
