/**
 * Perfiles adicionales del equipo. Todos los datos son ficticios y se usan
 * únicamente como demostración del sitio.
 */
const T = (es, en, fr, zh) => ({ es, en, fr, zh });

// Resuelve valores anidados traducibles (por ejemplo, una membresía compartida)
// para que las listas solo contengan cadenas y puedan renderizarse en React.
const localize = (value, lang) => {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang));
  if (value && typeof value === 'object') return value[lang] ?? value.es;
  return value;
};

const bio = (formacion, experiencia, membresias, docencia, idiomas) => ({
  es: {
    formacion: localize(formacion.es, 'es'),
    experiencia: localize(experiencia.es, 'es'),
    membresias: localize(membresias.es, 'es'),
    docencia: localize(docencia.es, 'es'),
    idiomas: localize(idiomas.es, 'es'),
  },
  en: {
    formacion: localize(formacion.en, 'en'),
    experiencia: localize(experiencia.en, 'en'),
    membresias: localize(membresias.en, 'en'),
    docencia: localize(docencia.en, 'en'),
    idiomas: localize(idiomas.en, 'en'),
  },
  fr: {
    formacion: localize(formacion.fr, 'fr'),
    experiencia: localize(experiencia.fr, 'fr'),
    membresias: localize(membresias.fr, 'fr'),
    docencia: localize(docencia.fr, 'fr'),
    idiomas: localize(idiomas.fr, 'fr'),
  },
  zh: {
    formacion: localize(formacion.zh, 'zh'),
    experiencia: localize(experiencia.zh, 'zh'),
    membresias: localize(membresias.zh, 'zh'),
    docencia: localize(docencia.zh, 'zh'),
    idiomas: localize(idiomas.zh, 'zh'),
  },
});

const BAR = T('Colegio de Abogados de Lima.', 'Lima Bar Association.', 'Barreau de Lima.', '利马律师协会');

export const EXTRA_LAWYERS = [
  {
    id: 7,
    nombre: 'CAMILA FERNANDA ROJAS SALAZAR',
    email: 'camila.rojas@tuplusabogados.com.pe',
    specialties: ['penal'],
    cargo: T('SOCIA DE LITIGIOS PENALES', 'CRIMINAL LITIGATION PARTNER', 'ASSOCIÉE CONTENTIEUX PÉNAL', '刑事诉讼合伙人'),
    bio: bio(
      T(
        ['Abogada por la Pontificia Universidad Católica del Perú (2014).', 'Maestría en Derecho Penal Económico por la Universidad de Salamanca (2018).'],
        ['Lawyer, Pontificia Universidad Católica del Perú (2014).', 'LL.M. in Economic Criminal Law, University of Salamanca (2018).'],
        ['Avocate, Université pontificale catholique du Pérou (2014).', 'Master en droit pénal économique, Université de Salamanque (2018).'],
        ['毕业于秘鲁天主教大学法学专业（2014年）。', '获萨拉曼卡大学经济刑法硕士学位（2018年）。'],
      ),
      T(
        ['Defensa de directivos y empresas en investigaciones por lavado de activos y delitos tributarios.', 'Amplia experiencia en juicios orales y en la coordinación de peritos contables y financieros.'],
        ['Defense of executives and companies in money laundering and tax crime investigations.', 'Extensive experience in oral trials and coordination of accounting and financial experts.'],
        ['Défense de dirigeants et d’entreprises dans les enquêtes pour blanchiment et infractions fiscales.', 'Vaste expérience des procès oraux et de la coordination d’experts comptables et financiers.'],
        ['为高管与企业提供洗钱及税务犯罪调查辩护。', '在庭审及会计金融专家协作方面经验丰富。'],
      ),
      T(['Asociación Peruana de Derecho Penal Económico.', BAR], ['Peruvian Association of Economic Criminal Law.', BAR], ['Association péruvienne de droit pénal économique.', BAR], ['秘鲁经济刑法协会。', BAR]),
      T(['Docente de Litigación Oral en la Escuela del Ministerio Público.'], ['Lecturer in Oral Advocacy at the Public Prosecutor’s School.'], ['Chargée de cours en plaidoirie à l’École du ministère public.'], ['在检察院学院教授庭审辩护。']),
      T(['Español', 'Inglés', 'Portugués'], ['Spanish', 'English', 'Portuguese'], ['Espagnol', 'Anglais', 'Portugais'], ['西班牙语', '英语', '葡萄牙语']),
    ),
  },
  {
    id: 8,
    nombre: 'RENZO SEBASTIÁN AGUILAR PAREDES',
    email: 'renzo.aguilar@tuplusabogados.com.pe',
    specialties: ['penal'],
    cargo: T('ASOCIADO SENIOR PENAL', 'SENIOR CRIMINAL ASSOCIATE', 'ASSOCIÉ SENIOR PÉNAL', '资深刑事律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad de Lima (2016).', 'Especialización en Litigación Oral y Técnicas de Interrogatorio (2020).'],
        ['Lawyer, Universidad de Lima (2016).', 'Specialization in Oral Advocacy and Examination Techniques (2020).'],
        ['Avocat, Universidad de Lima (2016).', 'Spécialisation en plaidoirie orale et techniques d’interrogatoire (2020).'],
        ['毕业于利马大学法学专业（2016年）。', '专修庭审辩护与询问技巧（2020年）。'],
      ),
      T(
        ['Patrocinio en delitos contra la administración pública, peculado y negociación incompatible.', 'Experiencia en medidas cautelares, comparecencia restrictiva y recursos de apelación.'],
        ['Representation in offenses against public administration, embezzlement and incompatible negotiation.', 'Experience in precautionary measures, restricted appearance and appeals.'],
        ['Défense en infractions contre l’administration publique, détournement de fonds et négociation incompatible.', 'Expérience des mesures conservatoires, comparutions restreintes et recours.'],
        ['代理针对公共管理部门的犯罪、贪污及不当谈判案件。', '在强制措施、限制出庭及上诉方面经验丰富。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 9,
    nombre: 'VALERIA NICOLE ORMEÑO CASTRO',
    email: 'valeria.ormeno@tuplusabogados.com.pe',
    specialties: ['familia'],
    cargo: T('SOCIA DE DERECHO DE FAMILIA', 'FAMILY LAW PARTNER', 'ASSOCIÉE DROIT DE LA FAMILLE', '家庭法合伙人'),
    bio: bio(
      T(
        ['Abogada por la Universidad Nacional Mayor de San Marcos (2013).', 'Maestría en Derecho de Familia por la Universidad de San Martín de Porres (2017).'],
        ['Lawyer, Universidad Nacional Mayor de San Marcos (2013).', 'LL.M. in Family Law, Universidad de San Martín de Porres (2017).'],
        ['Avocate, Université nationale majeure de San Marcos (2013).', 'Master en droit de la famille, Université de San Martín de Porres (2017).'],
        ['毕业于圣马科斯国立大学法学专业（2013年）。', '获圣马丁德波雷斯大学家庭法硕士学位（2017年）。'],
      ),
      T(
        ['Divorcios, tenencia, alimentos y procesos de violencia familiar con enfoque de género.', 'Acompañamiento psicosocial coordinado con peritos y equipos multidisciplinarios.'],
        ['Divorce, custody, support and family violence cases with a gender perspective.', 'Coordinated psychosocial support with experts and multidisciplinary teams.'],
        ['Divorce, garde, pension et violence familiale avec une perspective de genre.', 'Accompagnement psychosocial coordonné avec des experts et équipes pluridisciplinaires.'],
        ['处理离婚、抚养权、扶养费及家庭暴力案件，注重性别视角。', '与专家及多学科团队协调提供心理社会支持。'],
      ),
      T(['Asociación Peruana de Derecho de Familia.', BAR], ['Peruvian Family Law Association.', BAR], ['Association péruvienne de droit de la famille.', BAR], ['秘鲁家庭法协会。', BAR]),
      T(['Docente de Derecho de Familia en la Universidad Ricardo Palma.'], ['Lecturer in Family Law at Universidad Ricardo Palma.'], ['Chargée de cours en droit de la famille à l’Université Ricardo Palma.'], ['在里卡多帕尔马大学讲授家庭法。']),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 10,
    nombre: 'ANDRÉS FELIPE MENDOZA RÍOS',
    email: 'andres.mendoza@tuplusabogados.com.pe',
    specialties: ['familia'],
    cargo: T('ASOCIADO DE FAMILIA Y SUCESIONES', 'FAMILY AND SUCCESSION ASSOCIATE', 'ASSOCIÉ FAMILLE ET SUCCESSIONS', '家庭与继承律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad del Pacífico (2018).', 'Especialización en Derecho Sucesorio y Planificación Patrimonial (2021).'],
        ['Lawyer, Universidad del Pacífico (2018).', 'Specialization in Succession Law and Estate Planning (2021).'],
        ['Avocat, Universidad del Pacífico (2018).', 'Spécialisation en droit successoral et planification patrimoniale (2021).'],
        ['毕业于太平洋大学法学专业（2018年）。', '专修继承法与财产规划（2021年）。'],
      ),
      T(
        ['Testamentos, sucesiones intestadas, partición de bienes y conflictos entre herederos.', 'Negociación de acuerdos familiares y protección del patrimonio de personas vulnerables.'],
        ['Wills, intestate succession, asset partition and disputes among heirs.', 'Negotiation of family agreements and protection of vulnerable persons’ assets.'],
        ['Testaments, successions ab intestat, partage de biens et conflits entre héritiers.', 'Négociation d’accords familiaux et protection du patrimoine des personnes vulnérables.'],
        ['遗嘱、无遗嘱继承、财产分割及继承人争议。', '协商家庭协议并保护弱势群体财产。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés', 'Francés'], ['Spanish', 'English', 'French'], ['Espagnol', 'Anglais', 'Français'], ['西班牙语', '英语', '法语']),
    ),
  },
  {
    id: 11,
    nombre: 'LUCIANA BELÉN TORRES ALARCÓN',
    email: 'luciana.torres@tuplusabogados.com.pe',
    specialties: ['civil-comercial'],
    cargo: T('SOCIA DE DERECHO CIVIL Y COMERCIAL', 'CIVIL & COMMERCIAL PARTNER', 'ASSOCIÉE DROIT CIVIL ET COMMERCIAL', '民商法合伙人'),
    bio: bio(
      T(
        ['Abogada por la Universidad de Piura (2012).', 'Magíster en Derecho de la Empresa por la Universidad de Lima (2016).'],
        ['Lawyer, Universidad de Piura (2012).', 'Master’s in Business Law, Universidad de Lima (2016).'],
        ['Avocate, Universidad de Piura (2012).', 'Master en droit de l’entreprise, Universidad de Lima (2016).'],
        ['毕业于皮乌拉大学法学专业（2012年）。', '获利马大学企业法硕士学位（2016年）。'],
      ),
      T(
        ['Negociación y redacción de contratos comerciales complejos, distribución y joint ventures.', 'Litigios de responsabilidad civil, cobranza y ejecución de garantías.'],
        ['Negotiation and drafting of complex commercial, distribution and joint venture agreements.', 'Civil liability, collection and security enforcement litigation.'],
        ['Négociation et rédaction de contrats commerciaux complexes, distribution et coentreprises.', 'Litiges de responsabilité civile, recouvrement et exécution de garanties.'],
        ['复杂商事合同、分销及合资协议的谈判与起草。', '民事责任、催收及担保执行诉讼。'],
      ),
      T(['Cámara de Comercio de Lima.', BAR], ['Lima Chamber of Commerce.', BAR], ['Chambre de commerce de Lima.', BAR], ['利马商会。', BAR]),
      T(['Docente de Contratos Mercantiles en la Universidad de Piura.'], ['Lecturer in Commercial Contracts at Universidad de Piura.'], ['Chargée de cours en contrats commerciaux à l’Université de Piura.'], ['在皮乌拉大学讲授商事合同。']),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 12,
    nombre: 'JOAQUÍN EMILIO VERA CAMPOS',
    email: 'joaquin.vera@tuplusabogados.com.pe',
    specialties: ['civil-comercial'],
    cargo: T('ASOCIADO DE LITIGIOS CIVILES', 'CIVIL LITIGATION ASSOCIATE', 'ASSOCIÉ CONTENTIEUX CIVIL', '民事诉讼律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad Nacional de Trujillo (2017).', 'Especialización en Litigación Civil y Arbitraje (2020).'],
        ['Lawyer, Universidad Nacional de Trujillo (2017).', 'Specialization in Civil Litigation and Arbitration (2020).'],
        ['Avocat, Université nationale de Trujillo (2017).', 'Spécialisation en contentieux civil et arbitrage (2020).'],
        ['毕业于特鲁希略国立大学法学专业（2017年）。', '专修民事诉讼与仲裁（2020年）。'],
      ),
      T(
        ['Procesos de obligaciones, daños, tercería y mejor derecho de propiedad.', 'Representación en arbitrajes institucionales y conciliaciones extrajudiciales.'],
        ['Obligation, damages, third-party and better-title proceedings.', 'Representation in institutional arbitration and out-of-court settlements.'],
        ['Procédures en obligations, dommages, tierce opposition et meilleur droit de propriété.', 'Représentation en arbitrage institutionnel et conciliations extrajudiciaires.'],
        ['债务、损害赔偿、第三人异议及优先所有权诉讼。', '在机构仲裁与庭外调解中代理。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 13,
    nombre: 'MARIANA ALEJANDRA PONCE DE LA CRUZ',
    email: 'mariana.ponce@tuplusabogados.com.pe',
    specialties: ['inmobiliario'],
    cargo: T('SOCIA INMOBILIARIA', 'REAL ESTATE PARTNER', 'ASSOCIÉE IMMOBILIÈRE', '房地产合伙人'),
    bio: bio(
      T(
        ['Abogada por la Pontificia Universidad Católica del Perú (2011).', 'Maestría en Derecho de la Construcción y Urbanismo por la Universidad Politécnica de Madrid (2015).'],
        ['Lawyer, Pontificia Universidad Católica del Perú (2011).', 'Master’s in Construction and Urban Law, Universidad Politécnica de Madrid (2015).'],
        ['Avocate, Université pontificale catholique du Pérou (2011).', 'Master en droit de la construction et de l’urbanisme, Université polytechnique de Madrid (2015).'],
        ['毕业于秘鲁天主教大学法学专业（2011年）。', '获马德里理工大学建筑与城市规划法硕士学位（2015年）。'],
      ),
      T(
        ['Due diligence de predios, saneamiento registral y estructuración de proyectos inmobiliarios.', 'Negociación de contratos de compraventa, fideicomisos y desarrollo de habilitaciones urbanas.'],
        ['Property due diligence, registry regularization and real estate project structuring.', 'Negotiation of sale agreements, trusts and urban development approvals.'],
        ['Due diligence foncière, régularisation registrale et structuration de projets immobiliers.', 'Négociation de contrats de vente, fiducies et autorisations d’aménagement.'],
        ['土地尽职调查、登记规范化及房地产项目架构。', '买卖、信托合同及城市开发审批谈判。'],
      ),
      T(['Asociación Peruana de Derecho Inmobiliario.', BAR], ['Peruvian Real Estate Law Association.', BAR], ['Association péruvienne de droit immobilier.', BAR], ['秘鲁房地产法协会。', BAR]),
      T(['Docente de Derecho Registral en la Universidad Católica.'], ['Lecturer in Registry Law at the Catholic University.'], ['Chargée de cours en droit registral à l’Université catholique.'], ['在天主教大学讲授登记法。']),
      T(['Español', 'Inglés', 'Francés'], ['Spanish', 'English', 'French'], ['Espagnol', 'Anglais', 'Français'], ['西班牙语', '英语', '法语']),
    ),
  },
  {
    id: 14,
    nombre: 'ÁLVARO NICOLÁS BUSTAMANTE SORIA',
    email: 'alvaro.bustamante@tuplusabogados.com.pe',
    specialties: ['inmobiliario'],
    cargo: T('ASOCIADO INMOBILIARIO', 'REAL ESTATE ASSOCIATE', 'ASSOCIÉ IMMOBILIER', '房地产律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad ESAN (2019).', 'Especialización en Saneamiento Predial y Licencias de Edificación (2022).'],
        ['Lawyer, Universidad ESAN (2019).', 'Specialization in Property Regularization and Building Permits (2022).'],
        ['Avocat, Universidad ESAN (2019).', 'Spécialisation en régularisation foncière et permis de construire (2022).'],
        ['毕业于 ESAN 大学法学专业（2019年）。', '专修土地规范化与建筑许可（2022年）。'],
      ),
      T(
        ['Independización, prescripción adquisitiva y procesos de desalojo.', 'Revisión de títulos, cargas y restricciones para compradores e inversionistas.'],
        ['Subdivision, acquisitive prescription and eviction proceedings.', 'Title, lien and restriction review for buyers and investors.'],
        ['Morcellement, prescription acquisitive et procédures d’expulsion.', 'Analyse des titres, charges et restrictions pour acheteurs et investisseurs.'],
        ['土地分割、取得时效及驱逐程序。', '为买方与投资者审查产权、负担与限制。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 15,
    nombre: 'DANIELA SOFÍA QUISPE HUAMÁN',
    email: 'daniela.quispe@tuplusabogados.com.pe',
    specialties: ['laboral'],
    cargo: T('SOCIA LABORAL', 'LABOR PARTNER', 'ASSOCIÉE DROIT DU TRAVAIL', '劳动法合伙人'),
    bio: bio(
      T(
        ['Abogada por la Universidad Nacional Mayor de San Marcos (2012).', 'Maestría en Derecho del Trabajo y Seguridad Social por la Universidad de Lima (2017).'],
        ['Lawyer, Universidad Nacional Mayor de San Marcos (2012).', 'Master’s in Labor and Social Security Law, Universidad de Lima (2017).'],
        ['Avocate, Université nationale majeure de San Marcos (2012).', 'Master en droit du travail et de la sécurité sociale, Universidad de Lima (2017).'],
        ['毕业于圣马科斯国立大学法学专业（2012年）。', '获利马大学劳动与社会保障法硕士学位（2017年）。'],
      ),
      T(
        ['Defensa de trabajadores en despidos, hostigamiento y accidentes de trabajo.', 'Asesoría a empleadores en auditorías preventivas y procedimientos ante SUNAFIL.'],
        ['Defense of workers in dismissal, harassment and workplace accident cases.', 'Advice to employers on preventive audits and SUNAFIL proceedings.'],
        ['Défense des travailleurs en cas de licenciement, harcèlement et accident du travail.', 'Conseil aux employeurs en audits préventifs et procédures SUNAFIL.'],
        ['为劳动者提供解雇、骚扰及工伤案件辩护。', '为雇主提供预防性审计与 SUNAFIL 程序咨询。'],
      ),
      T(['Sociedad Peruana de Derecho del Trabajo.', BAR], ['Peruvian Labor Law Society.', BAR], ['Société péruvienne de droit du travail.', BAR], ['秘鲁劳动法学会。', BAR]),
      T(['Docente de Derecho Laboral en la Universidad Nacional Mayor de San Marcos.'], ['Lecturer in Labor Law at Universidad Nacional Mayor de San Marcos.'], ['Chargée de cours en droit du travail à l’Université de San Marcos.'], ['在圣马科斯国立大学讲授劳动法。']),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 16,
    nombre: 'RODRIGO IGNACIO SALINAS VEGA',
    email: 'rodrigo.salinas@tuplusabogados.com.pe',
    specialties: ['laboral'],
    cargo: T('ASOCIADO LABORAL', 'LABOR ASSOCIATE', 'ASSOCIÉ DROIT DU TRAVAIL', '劳动法律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad de Ciencias Aplicadas (2018).', 'Especialización en Seguridad y Salud en el Trabajo (2021).'],
        ['Lawyer, Universidad de Ciencias Aplicadas (2018).', 'Specialization in Occupational Safety and Health (2021).'],
        ['Avocat, Universidad de Ciencias Aplicadas (2018).', 'Spécialisation en santé et sécurité au travail (2021).'],
        ['毕业于应用科学大学法学专业（2018年）。', '专修职业安全与健康（2021年）。'],
      ),
      T(
        ['Cálculo de beneficios sociales, indemnizaciones y liquidaciones laborales.', 'Investigaciones internas por hostigamiento y elaboración de protocolos de prevención.'],
        ['Calculation of social benefits, compensation and labor settlements.', 'Internal harassment investigations and prevention protocol drafting.'],
        ['Calcul des avantages sociaux, indemnités et soldes de tout compte.', 'Enquêtes internes pour harcèlement et rédaction de protocoles de prévention.'],
        ['社会福利、赔偿及劳动结算计算。', '骚扰内部调查与预防规程制定。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 17,
    nombre: 'XIMENA PAZ CÁRDENAS LOAYZA',
    email: 'ximena.cardenas@tuplusabogados.com.pe',
    specialties: ['contrataciones'],
    cargo: T('SOCIA DE CONTRATACIONES PÚBLICAS', 'PUBLIC PROCUREMENT PARTNER', 'ASSOCIÉE MARCHÉS PUBLICS', '政府采购合伙人'),
    bio: bio(
      T(
        ['Abogada por la Pontificia Universidad Católica del Perú (2011).', 'Maestría en Derecho Administrativo y Contratación Pública por la Universidad de Castilla-La Mancha (2016).'],
        ['Lawyer, Pontificia Universidad Católica del Perú (2011).', 'Master’s in Administrative Law and Public Procurement, University of Castilla-La Mancha (2016).'],
        ['Avocate, Université pontificale catholique du Pérou (2011).', 'Master en droit administratif et marchés publics, Université de Castille-La Manche (2016).'],
        ['毕业于秘鲁天主教大学法学专业（2011年）。', '获卡斯蒂利亚-拉曼恰大学行政法与政府采购硕士学位（2016年）。'],
      ),
      T(
        ['Asesoría a entidades y postores en licitaciones, concursos públicos y ejecución contractual.', 'Defensa en procedimientos ante el OECE, arbitrajes y procesos contencioso-administrativos.'],
        ['Advice to entities and bidders in tenders, public competitions and contract performance.', 'Defense in OECE proceedings, arbitration and administrative litigation.'],
        ['Conseil aux entités et soumissionnaires en appels d’offres, concours publics et exécution contractuelle.', 'Défense devant l’OECE, en arbitrage et contentieux administratif.'],
        ['为公共机构与投标人提供招标、公开竞争及合同履行咨询。', '在 OECE 程序、仲裁及行政诉讼中辩护。'],
      ),
      T(['Asociación Peruana de Derecho Administrativo.', BAR], ['Peruvian Administrative Law Association.', BAR], ['Association péruvienne de droit administratif.', BAR], ['秘鲁行政法协会。', BAR]),
      T(['Docente de Contrataciones Públicas en la Escuela Nacional de Administración Pública.'], ['Lecturer in Public Procurement at the National School of Public Administration.'], ['Chargée de cours en marchés publics à l’École nationale d’administration publique.'], ['在国家公共行政学院讲授政府采购。']),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 18,
    nombre: 'BRUNO TOMÁS VILLALOBOS RENTERÍA',
    email: 'bruno.villalobos@tuplusabogados.com.pe',
    specialties: ['contrataciones'],
    cargo: T('ASOCIADO DE CONTRATACIONES', 'PROCUREMENT ASSOCIATE', 'ASSOCIÉ MARCHÉS PUBLICS', '政府采购律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad de San Martín de Porres (2019).', 'Especialización en Contrataciones del Estado y Arbitraje (2022).'],
        ['Lawyer, Universidad de San Martín de Porres (2019).', 'Specialization in Public Procurement and Arbitration (2022).'],
        ['Avocat, Université de San Martín de Porres (2019).', 'Spécialisation en marchés publics et arbitrage (2022).'],
        ['毕业于圣马丁德波雷斯大学法学专业（2019年）。', '专修政府采购与仲裁（2022年）。'],
      ),
      T(
        ['Revisión de bases, recursos de apelación y observaciones ante el OECE.', 'Seguimiento de valorizaciones, ampliaciones de plazo y penalidades contractuales.'],
        ['Bid document review, appeals and observations before OECE.', 'Monitoring progress payments, time extensions and contractual penalties.'],
        ['Revue des documents, recours et observations devant l’OECE.', 'Suivi des décomptes, prolongations et pénalités contractuelles.'],
        ['招标文件审查、上诉及向 OECE 提出意见。', '跟踪进度款、工期延长及合同违约金。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 19,
    nombre: 'FIORELLA ANTONELLA NÚÑEZ BARRIOS',
    email: 'fiorella.nunez@tuplusabogados.com.pe',
    specialties: ['penal', 'familia'],
    cargo: T('ASOCIADA DE PENAL Y FAMILIA', 'CRIMINAL AND FAMILY ASSOCIATE', 'ASSOCIÉE PÉNAL ET FAMILLE', '刑事与家庭律师'),
    bio: bio(
      T(
        ['Abogada por la Universidad Ricardo Palma (2017).', 'Especialización en Violencia Familiar y Protección de Menores (2020).'],
        ['Lawyer, Universidad Ricardo Palma (2017).', 'Specialization in Family Violence and Child Protection (2020).'],
        ['Avocate, Université Ricardo Palma (2017).', 'Spécialisation en violence familiale et protection des mineurs (2020).'],
        ['毕业于里卡多帕尔马大学法学专业（2017年）。', '专修家庭暴力与未成年人保护（2020年）。'],
      ),
      T(
        ['Defensa de víctimas de violencia familiar y acompañamiento en medidas de protección.', 'Patrocinio en delitos de lesiones, amenazas y omisión de asistencia familiar.'],
        ['Defense of family violence victims and support in protection order proceedings.', 'Representation in assault, threats and family support omission offenses.'],
        ['Défense des victimes de violence familiale et accompagnement des mesures de protection.', 'Défense en infractions de coups, menaces et abandon de famille.'],
        ['为家庭暴力受害者辩护并协助保护令程序。', '代理伤害、威胁及拒不履行家庭扶养义务案件。'],
      ),
      T(['Comité de Derechos de la Mujer del Colegio de Abogados de Lima.', BAR], ['Women’s Rights Committee of the Lima Bar Association.', BAR], ['Commission des droits des femmes du Barreau de Lima.', BAR], ['利马律师协会妇女权利委员会。', BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés'], ['Spanish', 'English'], ['Espagnol', 'Anglais'], ['西班牙语', '英语']),
    ),
  },
  {
    id: 20,
    nombre: 'EMILIO SEBASTIÁN ZEGARRA CORNEJO',
    email: 'emilio.zegarra@tuplusabogados.com.pe',
    specialties: ['civil-comercial', 'contrataciones'],
    cargo: T('ASOCIADO DE CONTRATOS Y CONTRATACIONES', 'CONTRACTS AND PROCUREMENT ASSOCIATE', 'ASSOCIÉ CONTRATS ET MARCHÉS PUBLICS', '合同与政府采购律师'),
    bio: bio(
      T(
        ['Abogado por la Universidad del Pacífico (2018).', 'Especialización en Contratación Pública y Compliance (2021).'],
        ['Lawyer, Universidad del Pacífico (2018).', 'Specialization in Public Procurement and Compliance (2021).'],
        ['Avocat, Universidad del Pacífico (2018).', 'Spécialisation en marchés publics et conformité (2021).'],
        ['毕业于太平洋大学法学专业（2018年）。', '专修政府采购与合规（2021年）。'],
      ),
      T(
        ['Redacción y revisión de contratos comerciales y convenios interinstitucionales.', 'Apoyo en licitaciones, ejecución contractual y programas de integridad.'],
        ['Drafting and review of commercial contracts and interinstitutional agreements.', 'Support in tenders, contract performance and integrity programs.'],
        ['Rédaction et révision de contrats commerciaux et accords interinstitutionnels.', 'Appui aux appels d’offres, à l’exécution contractuelle et aux programmes d’intégrité.'],
        ['起草与审查商事合同及机构间协议。', '支持招标、合同履行及诚信计划。'],
      ),
      T([BAR], [BAR], [BAR], [BAR]),
      T([], [], [], []),
      T(['Español', 'Inglés', 'Portugués'], ['Spanish', 'English', 'Portuguese'], ['Espagnol', 'Anglais', 'Portugais'], ['西班牙语', '英语', '葡萄牙语']),
    ),
  },
];
