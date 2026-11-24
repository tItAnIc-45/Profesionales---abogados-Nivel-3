/**
 * Resumen y enfoque de práctica por profesional. Contenido ficticio de
 * demostración, redactado en el mismo tono que el resto del sitio.
 * Se mantiene separado de los datos base para no duplicar la ficha completa.
 */
const T = (es, en, fr, zh) => ({ es, en, fr, zh });

export const LAWYER_PROFILES = {
  1: {
    resumen: T(
      'Acompaña a empresas y directorios en decisiones societarias, operaciones de compraventa y gobierno corporativo. Combina el análisis contractual riguroso con una mirada práctica del negocio.',
      'He advises companies and boards on corporate decisions, M&A transactions and corporate governance. He combines rigorous contract analysis with a practical business perspective.',
      'Il accompagne les entreprises et les conseils d’administration dans les décisions sociétaires, les opérations de cession et la gouvernance. Il allie une analyse contractuelle rigoureuse à une approche concrète de l’entreprise.',
      '为企业与董事会提供公司决策、并购交易及公司治理方面的咨询，兼顾严谨的合同分析与务实的商业视角。',
    ),
    enfoque: T(
      ['Estructuración de operaciones societarias', 'Gobierno corporativo y compliance', 'Contratos comerciales y M&A'],
      ['Corporate transaction structuring', 'Corporate governance and compliance', 'Commercial contracts and M&A'],
      ['Structuration d’opérations sociétaires', 'Gouvernance et conformité', 'Contrats commerciaux et M&A'],
      ['公司交易架构', '公司治理与合规', '商事合同与并购'],
    ),
  },
  2: {
    resumen: T(
      'Asesora en planeamiento fiscal, contingencias tributarias y defensa en controversias ante la administración. Busca soluciones sostenibles que reduzcan la exposición sin afectar la operación del negocio.',
      'He advises on tax planning, tax contingencies and defense in disputes with the tax authority. He seeks sustainable solutions that reduce exposure without disrupting business operations.',
      'Il conseille en planification fiscale, en risques fiscaux et en défense dans les litiges avec l’administration. Il recherche des solutions durables qui réduisent l’exposition sans perturber l’activité.',
      '提供税务筹划、税务风险及税务争议应对咨询，寻求在不影响企业经营的前提下降低税务风险的可持续方案。',
    ),
    enfoque: T(
      ['Planeamiento fiscal', 'Controversias tributarias', 'Precios de transferencia'],
      ['Tax planning', 'Tax disputes', 'Transfer pricing'],
      ['Planification fiscale', 'Contentieux fiscaux', 'Prix de transfert'],
      ['税务筹划', '税务争议', '转让定价'],
    ),
  },
  3: {
    resumen: T(
      'Protege activos intangibles y acompaña el cumplimiento regulatorio de proyectos tecnológicos. Trabaja junto a equipos de producto y marketing para anticipar riesgos legales.',
      'She protects intangible assets and supports regulatory compliance for technology projects. She works with product and marketing teams to anticipate legal risks.',
      'Elle protège les actifs immatériels et accompagne la conformité réglementaire des projets technologiques. Elle travaille avec les équipes produit et marketing pour anticiper les risques juridiques.',
      '负责无形资产保护及科技项目的监管合规，与产品和市场团队协作，提前识别法律风险。',
    ),
    enfoque: T(
      ['Marcas y patentes', 'Protección de datos', 'Contratos tecnológicos'],
      ['Trademarks and patents', 'Data protection', 'Technology contracts'],
      ['Marques et brevets', 'Protection des données', 'Contrats technologiques'],
      ['商标与专利', '数据保护', '科技合同'],
    ),
  },
  4: {
    resumen: T(
      'Participa en la estructuración de financiamientos, emisiones de valores y operaciones bancarias. Revisa garantías y documentación con especial atención al cumplimiento regulatorio.',
      'He takes part in structuring financings, securities issuances and banking transactions. He reviews security packages and documentation with a focus on regulatory compliance.',
      'Il participe à la structuration de financements, d’émissions de titres et d’opérations bancaires. Il examine les garanties et la documentation en veillant au respect de la réglementation.',
      '参与融资架构、证券发行及银行业务，审查担保与交易文件，重点关注监管合规。',
    ),
    enfoque: T(
      ['Financiamientos corporativos', 'Mercado de valores', 'Garantías y cumplimiento'],
      ['Corporate finance', 'Capital markets', 'Security and compliance'],
      ['Financements d’entreprise', 'Marchés de capitaux', 'Garanties et conformité'],
      ['企业融资', '资本市场', '担保与合规'],
    ),
  },
  5: {
    resumen: T(
      'Asesora en permisos sectoriales, fiscalización ambiental y cumplimiento socioambiental. Coordina con equipos técnicos para convertir obligaciones regulatorias en planes de acción concretos.',
      'She advises on sector permits, environmental enforcement and socio-environmental compliance. She coordinates with technical teams to turn regulatory obligations into concrete action plans.',
      'Elle conseille en autorisations sectorielles, contrôle environnemental et conformité socio-environnementale. Elle coordonne avec les équipes techniques pour traduire les obligations réglementaires en plans d’action.',
      '提供行业许可、环境监管及社会环境合规咨询，与技术团队协作，将监管要求转化为具体行动计划。',
    ),
    enfoque: T(
      ['Permisos ambientales', 'Fiscalización y defensa', 'Compliance socioambiental'],
      ['Environmental permits', 'Enforcement and defense', 'Socio-environmental compliance'],
      ['Autorisations environnementales', 'Contrôle et défense', 'Conformité socio-environnementale'],
      ['环境许可', '监管应对', '社会环境合规'],
    ),
  },
  6: {
    resumen: T(
      'Apoya en procedimientos de libre competencia, protección al consumidor y análisis de concentraciones. Su trabajo combina investigación normativa y redacción clara de escritos.',
      'He supports competition, consumer protection and merger review proceedings. His work combines regulatory research with clear legal drafting.',
      'Il intervient dans les procédures de concurrence, de protection des consommateurs et d’analyse des concentrations. Son travail associe recherche normative et rédaction juridique claire.',
      '协助处理自由竞争、消费者保护及经营者集中审查程序，结合法规研究与清晰的法律文书写作。',
    ),
    enfoque: T(
      ['Libre competencia', 'Protección al consumidor', 'Análisis de concentraciones'],
      ['Competition law', 'Consumer protection', 'Merger review'],
      ['Droit de la concurrence', 'Protection des consommateurs', 'Contrôle des concentrations'],
      ['自由竞争', '消费者保护', '经营者集中审查'],
    ),
  },
  7: {
    resumen: T(
      'Dirige defensas penales complejas con énfasis en delitos económicos y responsabilidad de directivos. Coordina peritajes y define la estrategia desde la investigación preliminar.',
      'She leads complex criminal defenses with a focus on economic crimes and officer liability. She coordinates expert evidence and sets the strategy from the preliminary investigation.',
      'Elle dirige des défenses pénales complexes, notamment en criminalité économique et responsabilité des dirigeants. Elle coordonne les expertises et définit la stratégie dès l’enquête préliminaire.',
      '主导复杂刑事辩护，专长经济犯罪与高管责任，从初步侦查阶段即协调鉴定并制定辩护策略。',
    ),
    enfoque: T(
      ['Delitos económicos', 'Juicio oral', 'Defensa de directivos'],
      ['Economic crimes', 'Oral trial', 'Executive defense'],
      ['Criminalité économique', 'Procès oral', 'Défense des dirigeants'],
      ['经济犯罪', '庭审辩护', '高管辩护'],
    ),
  },
  8: {
    resumen: T(
      'Litiga casos de corrupción, peculado y delitos contra la administración pública. Prepara la teoría del caso, examina testigos y sostiene la defensa en audiencias.',
      'He litigates corruption, embezzlement and offenses against public administration. He prepares the case theory, examines witnesses and argues the defense at hearings.',
      'Il plaide dans les affaires de corruption, de détournement de fonds et d’atteintes à l’administration publique. Il prépare la théorie du dossier, interroge les témoins et assure la défense aux audiences.',
      '代理腐败、贪污及危害公共管理类刑事案件，负责构建案件理论、询问证人并出庭辩护。',
    ),
    enfoque: T(
      ['Delitos contra la administración pública', 'Medidas cautelares', 'Recursos y apelaciones'],
      ['Offenses against public administration', 'Precautionary measures', 'Appeals and remedies'],
      ['Atteintes à l’administration publique', 'Mesures conservatoires', 'Recours et appels'],
      ['危害公共管理犯罪', '强制措施', '上诉与救济'],
    ),
  },
  9: {
    resumen: T(
      'Acompaña procesos de familia con sensibilidad y rigor probatorio, desde divorcios hasta medidas de protección. Coordina apoyo psicosocial cuando el caso lo requiere.',
      'She handles family proceedings with sensitivity and evidentiary rigor, from divorce to protection orders. She coordinates psychosocial support when the case requires it.',
      'Elle accompagne les procédures familiales avec sensibilité et rigueur probatoire, du divorce aux mesures de protection. Elle coordonne un soutien psychosocial lorsque le dossier l’exige.',
      '以细致与严谨的证据工作处理家庭案件，涵盖离婚与保护令，并在需要时协调心理社会支持。',
    ),
    enfoque: T(
      ['Divorcio y tenencia', 'Alimentos', 'Violencia familiar'],
      ['Divorce and custody', 'Child support', 'Family violence'],
      ['Divorce et garde', 'Pension alimentaire', 'Violence familiale'],
      ['离婚与抚养权', '扶养费', '家庭暴力'],
    ),
  },
  10: {
    resumen: T(
      'Asesora en planificación sucesoria, testamentos y conflictos entre herederos. Busca acuerdos que preserven el patrimonio y las relaciones familiares.',
      'He advises on estate planning, wills and disputes among heirs. He seeks agreements that preserve both assets and family relationships.',
      'Il conseille en planification successorale, testaments et conflits entre héritiers. Il recherche des accords qui préservent le patrimoine et les liens familiaux.',
      '提供继承规划、遗嘱及继承人争议咨询，寻求兼顾财产保全与家庭关系的解决方案。',
    ),
    enfoque: T(
      ['Testamentos y sucesiones', 'Partición de bienes', 'Acuerdos familiares'],
      ['Wills and succession', 'Asset partition', 'Family agreements'],
      ['Testaments et successions', 'Partage des biens', 'Accords familiaux'],
      ['遗嘱与继承', '财产分割', '家庭协议'],
    ),
  },
  11: {
    resumen: T(
      'Negocia y redacta contratos comerciales complejos y litiga responsabilidad civil y cobranzas. Prioriza prevenir el conflicto antes de judicializarlo.',
      'She negotiates and drafts complex commercial contracts and litigates civil liability and collection matters. She prioritizes preventing disputes before they reach court.',
      'Elle négocie et rédige des contrats commerciaux complexes et plaide en responsabilité civile et en recouvrement. Elle privilégie la prévention des litiges avant toute action judiciaire.',
      '负责复杂商事合同的谈判与起草，并代理民事责任及债权追收诉讼，注重在诉讼前预防争议。',
    ),
    enfoque: T(
      ['Contratos comerciales', 'Responsabilidad civil', 'Cobranza y garantías'],
      ['Commercial contracts', 'Civil liability', 'Collection and security'],
      ['Contrats commerciaux', 'Responsabilité civile', 'Recouvrement et garanties'],
      ['商事合同', '民事责任', '追收与担保'],
    ),
  },
  12: {
    resumen: T(
      'Representa a personas y empresas en procesos de obligaciones, daños y derechos reales. Prepara cada expediente con una cronología clara y prueba documental ordenada.',
      'He represents individuals and companies in obligation, damages and property rights proceedings. He prepares each file with a clear timeline and well-organized documentary evidence.',
      'Il représente particuliers et entreprises dans les procédures en obligations, dommages et droits réels. Il prépare chaque dossier avec une chronologie claire et des preuves documentaires ordonnées.',
      '代理个人与企业的债务、损害赔偿及物权诉讼，以清晰时间线和有序书证准备每个案件。',
    ),
    enfoque: T(
      ['Obligaciones y daños', 'Tercería y propiedad', 'Arbitraje y conciliación'],
      ['Obligations and damages', 'Third-party claims and property', 'Arbitration and settlement'],
      ['Obligations et dommages', 'Tierce opposition et propriété', 'Arbitrage et conciliation'],
      ['债务与损害赔偿', '第三人异议与物权', '仲裁与调解'],
    ),
  },
  13: {
    resumen: T(
      'Estructura proyectos inmobiliarios y coordina due diligence de predios y saneamiento registral. Acompaña la negociación de contratos y la obtención de licencias.',
      'She structures real estate projects and coordinates property due diligence and registry regularization. She supports contract negotiations and permit applications.',
      'Elle structure des projets immobiliers et coordonne la due diligence foncière et la régularisation registrale. Elle accompagne la négociation des contrats et l’obtention des autorisations.',
      '负责房地产项目架构，协调土地尽职调查与登记规范化，并协助合同谈判及许可申请。',
    ),
    enfoque: T(
      ['Due diligence inmobiliaria', 'Saneamiento registral', 'Contratos y fideicomisos'],
      ['Real estate due diligence', 'Registry regularization', 'Contracts and trusts'],
      ['Due diligence immobilière', 'Régularisation registrale', 'Contrats et fiducies'],
      ['房地产尽职调查', '登记规范化', '合同与信托'],
    ),
  },
  14: {
    resumen: T(
      'Trabaja en saneamiento predial, independización y procesos de desalojo. Revisa títulos y cargas para compradores e inversionistas.',
      'He works on property regularization, subdivision and eviction proceedings. He reviews titles and encumbrances for buyers and investors.',
      'Il travaille sur la régularisation foncière, le morcellement et les procédures d’expulsion. Il examine les titres et charges pour les acheteurs et investisseurs.',
      '处理土地规范化、分割及驱逐程序，并为买方与投资者审查产权与负担。',
    ),
    enfoque: T(
      ['Saneamiento predial', 'Prescripción adquisitiva', 'Desalojos'],
      ['Property regularization', 'Acquisitive prescription', 'Evictions'],
      ['Régularisation foncière', 'Prescription acquisitive', 'Expulsions'],
      ['土地规范化', '取得时效', '驱逐程序'],
    ),
  },
  15: {
    resumen: T(
      'Defiende trabajadores y asesora empleadores en materia laboral y seguridad social. Diseña protocolos preventivos y representa en procedimientos administrativos.',
      'She defends workers and advises employers on labor and social security matters. She designs preventive protocols and represents clients in administrative proceedings.',
      'Elle défend les travailleurs et conseille les employeurs en droit du travail et de la sécurité sociale. Elle conçoit des protocoles préventifs et représente les clients dans les procédures administratives.',
      '为劳动者辩护，并为雇主提供劳动与社会保障咨询，制定预防性规程并代理行政程序。',
    ),
    enfoque: T(
      ['Despidos y beneficios', 'Hostigamiento', 'Auditorías y SUNAFIL'],
      ['Dismissals and benefits', 'Harassment', 'Audits and SUNAFIL'],
      ['Licenciements et avantages', 'Harcèlement', 'Audits et SUNAFIL'],
      ['解雇与福利', '职场骚扰', '审计与 SUNAFIL'],
    ),
  },
  16: {
    resumen: T(
      'Calcula beneficios sociales y liquidaciones, e investiga denuncias internas de hostigamiento. Apoya la implementación de protocolos de prevención.',
      'He calculates social benefits and settlements and investigates internal harassment complaints. He supports the implementation of prevention protocols.',
      'Il calcule les avantages sociaux et les soldes de tout compte et enquête sur les signalements internes de harcèlement. Il appuie la mise en œuvre de protocoles de prévention.',
      '负责社会福利与劳动结算计算，调查内部骚扰投诉，并协助落实预防规程。',
    ),
    enfoque: T(
      ['Liquidaciones laborales', 'Investigaciones internas', 'Seguridad y salud'],
      ['Labor settlements', 'Internal investigations', 'Safety and health'],
      ['Soldes de tout compte', 'Enquêtes internes', 'Santé et sécurité'],
      ['劳动结算', '内部调查', '安全与健康'],
    ),
  },
  17: {
    resumen: T(
      'Asesora entidades y postores en licitaciones, ejecución contractual y controversias. Conoce el ciclo completo de la contratación pública y sus instancias de control.',
      'She advises public entities and bidders on tenders, contract performance and disputes. She knows the full public procurement cycle and its oversight bodies.',
      'Elle conseille les entités publiques et les soumissionnaires sur les appels d’offres, l’exécution des contrats et les litiges. Elle maîtrise l’ensemble du cycle de la commande publique et de ses organes de contrôle.',
      '为公共机构与投标人提供招标、合同履行及争议咨询，熟悉政府采购全流程及监督机构。',
    ),
    enfoque: T(
      ['Licitaciones', 'Ejecución contractual', 'Arbitraje y OECE'],
      ['Tenders', 'Contract performance', 'Arbitration and OECE'],
      ['Appels d’offres', 'Exécution contractuelle', 'Arbitrage et OECE'],
      ['招标', '合同履行', '仲裁与 OECE'],
    ),
  },
  18: {
    resumen: T(
      'Revisa bases, formula recursos de apelación y observaciones ante el OECE. Hace seguimiento de valorizaciones, ampliaciones de plazo y penalidades.',
      'He reviews bid documents, files appeals and submits observations before OECE. He monitors progress payments, time extensions and penalties.',
      'Il révise les documents d’appel d’offres, formule des recours et présente des observations devant l’OECE. Il suit les décomptes, prolongations et pénalités.',
      '审查招标文件，起草上诉并提交 OECE 意见，跟踪进度款、工期延长与违约金。',
    ),
    enfoque: T(
      ['Bases y recursos', 'Valorizaciones', 'Penalidades y ampliaciones'],
      ['Bid documents and appeals', 'Progress payments', 'Penalties and extensions'],
      ['Documents et recours', 'Décomptes', 'Pénalités et prolongations'],
      ['招标文件与上诉', '进度款', '违约金与延期'],
    ),
  },
  19: {
    resumen: T(
      'Atiende casos de violencia familiar y delitos de lesiones, amenazas y omisión de asistencia familiar. Prioriza la protección de víctimas y menores.',
      'She handles family violence cases and offenses involving assault, threats and failure to provide family support. She prioritizes the protection of victims and minors.',
      'Elle traite les affaires de violence familiale et les infractions de coups, menaces et abandon de famille. Elle priorise la protection des victimes et des mineurs.',
      '处理家庭暴力，以及伤害、威胁和拒不履行扶养义务案件，优先保护受害者与未成年人。',
    ),
    enfoque: T(
      ['Violencia familiar', 'Medidas de protección', 'Delitos de lesiones y amenazas'],
      ['Family violence', 'Protection orders', 'Assault and threats'],
      ['Violence familiale', 'Mesures de protection', 'Coups et menaces'],
      ['家庭暴力', '保护令', '伤害与威胁'],
    ),
  },
  20: {
    resumen: T(
      'Redacta y revisa contratos comerciales, convenios y documentos de licitación. Apoya programas de integridad y el seguimiento de la ejecución contractual.',
      'He drafts and reviews commercial contracts, interinstitutional agreements and tender documents. He supports integrity programs and contract performance monitoring.',
      'Il rédige et révise les contrats commerciaux, accords et documents d’appel d’offres. Il appuie les programmes d’intégrité et le suivi de l’exécution contractuelle.',
      '负责商事合同、机构间协议及招标文件的起草与审查，并支持诚信计划与合同履行跟踪。',
    ),
    enfoque: T(
      ['Contratos comerciales', 'Convenios institucionales', 'Integridad y compliance'],
      ['Commercial contracts', 'Interinstitutional agreements', 'Integrity and compliance'],
      ['Contrats commerciaux', 'Accords institutionnels', 'Intégrité et conformité'],
      ['商事合同', '机构间协议', '诚信与合规'],
    ),
  },
};
