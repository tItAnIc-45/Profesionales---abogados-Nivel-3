/**
 * Preguntas frecuentes de la portada.
 * Contenido informativo y verificable: no incluye testimonios, resultados
 * de casos ni cifras de éxito.
 */
const T = (es, en, fr, zh) => ({ es, en, fr, zh });

export const HOME_FAQ = [
  {
    id: 'primera-consulta',
    question: T(
      '¿Cómo solicito una primera consulta?',
      'How do I request a first consultation?',
      'Comment demander une première consultation ?',
      '如何预约首次咨询？',
    ),
    answer: T(
      'Escríbenos desde el formulario de contacto, llámanos o envíanos un mensaje por WhatsApp. Te responderemos en menos de 24 horas hábiles para coordinar día y hora.',
      'Write to us through the contact form, call us or send a WhatsApp message. We will reply within 24 business hours to arrange a day and time.',
      'Écrivez-nous via le formulaire de contact, appelez-nous ou envoyez un message WhatsApp. Nous répondrons sous 24 heures ouvrables pour convenir d’une date et d’une heure.',
      '您可以通过联系表单、电话或 WhatsApp 给我们留言。我们将在 24 个工作小时内回复，并与您约定日期和时间。',
    ),
  },
  {
    id: 'costo-consulta',
    question: T(
      '¿La primera conversación tiene algún costo?',
      'Is there a cost for the first conversation?',
      'Le premier échange est-il payant ?',
      '首次沟通需要付费吗？',
    ),
    answer: T(
      'La consulta legal tiene un rango publicado de S/ 80 a S/ 150 según su complejidad. La cotización de nuestros servicios es gratuita y sin compromiso.',
      'A legal consultation has a published range of S/ 80 to S/ 150 depending on complexity. Our service quote is free and without obligation.',
      'La consultation juridique s’inscrit dans une fourchette publiée de S/ 80 à S/ 150 selon sa complexité. Le devis de nos services est gratuit et sans engagement.',
      '法律咨询的公开收费区间为 S/ 80 至 S/ 150，具体取决于复杂程度。我们的服务报价免费且无义务。',
    ),
  },
  {
    id: 'honorarios',
    question: T(
      '¿Cómo se determinan los honorarios?',
      'How are fees determined?',
      'Comment les honoraires sont-ils déterminés ?',
      '费用是如何确定的？',
    ),
    answer: T(
      'Trabajamos con rangos publicados y una cotización personalizada. Antes de iniciar cualquier encargo, confirmamos por escrito el alcance, los honorarios y la forma de pago.',
      'We work with published ranges and a personalized quote. Before starting any engagement, we confirm in writing the scope, fees and payment terms.',
      'Nous travaillons avec des fourchettes publiées et un devis personnalisé. Avant de commencer toute mission, nous confirmons par écrit le périmètre, les honoraires et les modalités de paiement.',
      '我们提供公开收费区间和个性化报价。在开始任何委托前，我们会以书面形式确认服务范围、费用和付款方式。',
    ),
  },
  {
    id: 'virtual',
    question: T(
      '¿Puedo ser atendido de forma virtual?',
      'Can I be assisted online?',
      'Puis-je être reçu à distance ?',
      '可以线上咨询吗？',
    ),
    answer: T(
      'Sí. Atendemos presencialmente en Lima y por videollamada. Coordinamos la modalidad que mejor se adapte a tu disponibilidad.',
      'Yes. We meet in person in Lima and by video call. We coordinate the format that best suits your availability.',
      'Oui. Nous recevons à Lima et par visioconférence. Nous convenons du format qui convient le mieux à vos disponibilités.',
      '可以。我们提供利马现场咨询和视频会议咨询，并会根据您的时间安排选择合适方式。',
    ),
  },
  {
    id: 'confidencialidad',
    question: T(
      '¿Mi consulta es confidencial?',
      'Is my consultation confidential?',
      'Ma consultation est-elle confidentielle ?',
      '我的咨询是否保密？',
    ),
    answer: T(
      'Sí. Tratamos tu consulta y tus documentos con reserva. Por seguridad, evita enviar datos sensibles, documentos de identidad o información confidencial a través del formulario web.',
      'Yes. We handle your inquiry and documents with discretion. For your safety, please avoid sending sensitive data, identity documents or confidential information through the web form.',
      'Oui. Votre demande et vos documents sont traités avec discrétion. Par sécurité, évitez d’envoyer des données sensibles, des pièces d’identité ou des informations confidentielles via le formulaire web.',
      '是的。我们会谨慎保密处理您的咨询和文件。为安全起见，请勿通过网络表单发送敏感数据、身份证件或保密信息。',
    ),
  },
  {
    id: 'idiomas',
    question: T(
      '¿En qué idiomas puedo comunicarme?',
      'In which languages can I communicate?',
      'Dans quelles langues puis-je échanger ?',
      '可以使用哪些语言沟通？',
    ),
    answer: T(
      'Atendemos en español, inglés, francés y chino. Indícanos tu preferencia al agendar la consulta.',
      'We provide service in Spanish, English, French and Chinese. Tell us your preference when scheduling the consultation.',
      'Nous vous accompagnons en espagnol, anglais, français et chinois. Indiquez-nous votre préférence lors de la prise de rendez-vous.',
      '我们提供西班牙语、英语、法语和中文服务。预约时请告知您的语言偏好。',
    ),
  },
  {
    id: 'documentos',
    question: T(
      '¿Qué documentos debo preparar?',
      'What documents should I prepare?',
      'Quels documents dois-je préparer ?',
      '需要准备哪些文件？',
    ),
    answer: T(
      'Para la primera conversación basta con una descripción del caso y, si los tienes, contratos, comunicaciones o resoluciones relacionadas. No es necesario entregar originales en el primer contacto.',
      'For the first conversation, a description of the case is enough and, if available, related contracts, communications or resolutions. Originals are not required at the first contact.',
      'Pour le premier échange, une description du dossier suffit et, si vous les avez, les contrats, échanges ou décisions associés. Les originaux ne sont pas nécessaires au premier contact.',
      '首次沟通只需简要说明情况；如有相关合同、往来函件或裁决，也可一并准备。首次联系无需提交原件。',
    ),
  },
];
