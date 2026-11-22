import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import './PrivacyModal.css';

const T = (es, en, fr, zh) => ({ es, en, fr, zh });

const copy = {
  tag: T('Confidencialidad', 'Confidentiality', 'Confidentialité', '保密'),
  title: T('Política de Privacidad', 'Privacy Policy', 'Politique de confidentialité', '隐私政策'),
  intro: T(
    'En TuPlus Abogados tratamos tus datos personales con confidencialidad y conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su reglamento.',
    'At TuPlus Abogados we handle your personal data confidentially and in accordance with Law No. 29733, the Personal Data Protection Law, and its regulations.',
    'Chez TuPlus Abogados, nous traitons vos données personnelles de manière confidentielle et conformément à la loi n° 29733 sur la protection des données personnelles et à son règlement.',
    'TuPlus Abogados 依照第 29733 号《个人数据保护法》及其实施条例，以保密方式处理您的个人数据。',
  ),
  updated: T('Última actualización: noviembre de 2026', 'Last updated: November 2026', 'Dernière mise à jour : novembre 2026', '最后更新：2026 年 11 月'),
  close: T('Cerrar', 'Close', 'Fermer', '关闭'),
  accept: T('Entendido', 'Understood', 'Compris', '我已了解'),
  sections: [
    {
      title: T('1. Responsable del tratamiento', '1. Data controller', '1. Responsable du traitement', '一、数据控制者'),
      body: T(
        'TuPlus Abogados, con domicilio en Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Perú, es responsable de los datos personales que nos proporcionas a través de nuestros formularios y canales de contacto.',
        'TuPlus Abogados, with address at Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Peru, is the controller of the personal data you provide through our forms and contact channels.',
        'TuPlus Abogados, dont le siège est situé Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Pérou, est responsable des données personnelles que vous nous fournissez via nos formulaires et canaux de contact.',
        'TuPlus Abogados 地址为秘鲁利马圣伊西德罗 Av. Víctor Andrés Belaúnde 147，负责处理您通过本所表单及联系渠道提供的个人数据。',
      ),
    },
    {
      title: T('2. Datos que recopilamos', '2. Data we collect', '2. Données collectées', '二、我们收集的数据'),
      body: T(
        'Podemos recopilar tu nombre o razón social, correo electrónico, teléfono, área de interés y la descripción del caso que nos compartes. No solicites ni envíes datos sensibles, documentos de identidad o información reservada mediante el formulario web.',
        'We may collect your name or company name, email address, phone number, area of interest and the case description you share. Do not request or send sensitive data, identity documents or privileged information through the web form.',
        'Nous pouvons recueillir votre nom ou raison sociale, votre adresse e-mail, votre téléphone, votre domaine d’intérêt et la description du dossier que vous partagez. Ne demandez pas et n’envoyez pas de données sensibles, de documents d’identité ou d’informations confidentielles via le formulaire web.',
        '我们可能收集您的姓名或公司名称、电子邮箱、电话、感兴趣的领域及您提供的案件描述。请勿通过网页表单发送敏感数据、身份证件或保密信息。',
      ),
    },
    {
      title: T('3. Finalidad del tratamiento', '3. Purpose of processing', '3. Finalité du traitement', '三、处理目的'),
      body: T(
        'Utilizamos tus datos para atender tu consulta, evaluar tu caso, elaborar una cotización, coordinar una cita y mantener comunicaciones relacionadas con el servicio solicitado. No utilizamos tus datos para fines distintos sin tu consentimiento.',
        'We use your data to respond to your inquiry, assess your case, prepare a quote, schedule an appointment and maintain communications related to the requested service. We do not use your data for other purposes without your consent.',
        'Nous utilisons vos données pour répondre à votre demande, évaluer votre dossier, établir un devis, organiser un rendez-vous et maintenir les communications liées au service demandé. Nous ne les utilisons pas à d’autres fins sans votre consentement.',
        '我们使用您的数据来答复咨询、评估案件、制定报价、安排预约，并就所请求的服务进行沟通。未经您的同意，我们不会将数据用于其他目的。',
      ),
    },
    {
      title: T('4. Base legal y consentimiento', '4. Legal basis and consent', '4. Base légale et consentement', '四、法律依据与同意'),
      body: T(
        'El tratamiento se basa en el consentimiento que otorgas al marcar la casilla de aceptación y enviar el formulario. Puedes retirar tu consentimiento en cualquier momento escribiendo a contacto@tuplusabogados.com.pe.',
        'Processing is based on the consent you give by checking the acceptance box and submitting the form. You may withdraw your consent at any time by writing to contacto@tuplusabogados.com.pe.',
        'Le traitement repose sur le consentement que vous donnez en cochant la case d’acceptation et en envoyant le formulaire. Vous pouvez retirer votre consentement à tout moment en écrivant à contacto@tuplusabogados.com.pe.',
        '处理基于您勾选同意框并提交表单所给予的同意。您可随时发送邮件至 contacto@tuplusabogados.com.pe 撤回同意。',
      ),
    },
    {
      title: T('5. Conservación y destinatarios', '5. Retention and recipients', '5. Conservation et destinataires', '五、保存期限与接收方'),
      body: T(
        'Conservamos los datos solo durante el tiempo necesario para atender tu consulta y cumplir obligaciones legales. Para el envío de formularios utilizamos un proveedor tecnológico especializado; no vendemos ni compartimos tus datos con terceros para fines publicitarios.',
        'We retain data only for the time necessary to handle your inquiry and comply with legal obligations. We use a specialized technology provider to deliver forms; we do not sell or share your data with third parties for advertising purposes.',
        'Nous conservons les données uniquement pendant la durée nécessaire au traitement de votre demande et au respect des obligations légales. Nous utilisons un prestataire technologique spécialisé pour l’envoi des formulaires ; nous ne vendons ni ne partageons vos données à des fins publicitaires.',
        '我们仅在处理咨询及履行法律义务所需期间保存数据。表单发送使用专业技术服务商；我们不会出售数据，也不会将其共享给第三方用于广告。',
      ),
    },
    {
      title: T('6. Tus derechos', '6. Your rights', '6. Vos droits', '六、您的权利'),
      body: T(
        'Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición enviando una solicitud a contacto@tuplusabogados.com.pe. Atenderemos tu pedido en los plazos establecidos por la normativa aplicable.',
        'You may exercise your rights of access, rectification, cancellation and objection by sending a request to contacto@tuplusabogados.com.pe. We will respond within the deadlines established by applicable law.',
        'Vous pouvez exercer vos droits d’accès, de rectification, d’annulation et d’opposition en adressant une demande à contacto@tuplusabogados.com.pe. Nous répondrons dans les délais prévus par la réglementation applicable.',
        '您可发送申请至 contacto@tuplusabogados.com.pe，行使访问、更正、删除及反对的权利。我们将在适用法规规定的期限内答复。',
      ),
    },
    {
      title: T('7. Seguridad y secreto profesional', '7. Security and professional secrecy', '7. Sécurité et secret professionnel', '七、安全与职业保密'),
      body: T(
        'Aplicamos medidas razonables de seguridad y extendemos el secreto profesional a la información que compartes. Sin embargo, ningún canal digital es completamente infalible; evita enviar detalles innecesariamente sensibles hasta que un abogado te indique un canal seguro.',
        'We apply reasonable security measures and extend professional secrecy to the information you share. However, no digital channel is completely infallible; avoid sending unnecessarily sensitive details until a lawyer provides a secure channel.',
        'Nous appliquons des mesures de sécurité raisonnables et étendons le secret professionnel aux informations que vous partagez. Aucun canal numérique n’étant totalement infaillible, évitez d’envoyer des détails inutilement sensibles jusqu’à ce qu’un avocat vous indique un canal sécurisé.',
        '我们采取合理的安全措施，并对您分享的信息承担职业保密义务。但任何数字渠道都无法做到绝对无误；在律师提供安全渠道前，请避免发送不必要的敏感细节。',
      ),
    },
    {
      title: T('8. Cambios en esta política', '8. Changes to this policy', '8. Modifications de cette politique', '八、政策变更'),
      body: T(
        'Podemos actualizar esta política para reflejar cambios normativos o mejoras en nuestros servicios. La versión vigente estará disponible en este mismo cuadro y en la sección legal del sitio web.',
        'We may update this policy to reflect regulatory changes or improvements to our services. The current version will be available in this dialog and in the legal section of the website.',
        'Nous pouvons mettre à jour cette politique pour refléter des évolutions réglementaires ou des améliorations de nos services. La version en vigueur sera disponible dans cette fenêtre et dans la section juridique du site.',
        '我们可能更新本政策以反映法规变化或服务改进。现行版本将在本窗口及网站法律信息部分提供。',
      ),
    },
  ],
};

export default function PrivacyModal({ open, onClose }) {
  const lang = useLanguage();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    window.setTimeout(() => closeRef.current?.focus(), 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="privacy-backdrop" onClick={onClose}>
      <div
        className="privacy-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacyDialogTitle"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="privacy-close"
          onClick={onClose}
          aria-label={pick(copy.close, lang)}
          ref={closeRef}
        >
          &times;
        </button>

        <header className="privacy-header">
          <span className="privacy-tag">
            <i className="fa-solid fa-shield-halved" aria-hidden="true" />
            {pick(copy.tag, lang)}
          </span>
          <h2 id="privacyDialogTitle">{pick(copy.title, lang)}</h2>
          <p className="privacy-updated">{pick(copy.updated, lang)}</p>
        </header>

        <div className="privacy-body">
          <p className="privacy-intro">{pick(copy.intro, lang)}</p>
          {copy.sections.map((section, index) => (
            <section key={index} className="privacy-block">
              <h3>{pick(section.title, lang)}</h3>
              <p>{pick(section.body, lang)}</p>
            </section>
          ))}
        </div>

        <footer className="privacy-footer">
          <button type="button" className="btn-gold" onClick={onClose}>
            {pick(copy.accept, lang)}
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
