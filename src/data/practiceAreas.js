/**
 * Áreas de práctica — fuente única de contenido para la portada, el listado,
 * las páginas de detalle, el filtro del equipo y el formulario de servicios.
 * Todo el texto vive en { es, en, fr, zh }.
 */
const T = (es, en, fr, zh) => ({ es, en, fr, zh });

export const PRACTICE_AREAS = [
  {
    slug: 'penal',
    icon: 'fa-solid fa-shield-halved',
    image: '/assets/hero/hero-1.jpg',
    title: T('Derecho Penal', 'Criminal Law', 'Droit pénal', '刑法'),
    navLabel: T('Abogados Penalistas', 'Criminal Lawyers', 'Avocats pénalistes', '刑事律师'),
    short: T(
      'Defensa penal estratégica en investigaciones, procesos judiciales y delitos económicos.',
      'Strategic criminal defense in investigations, court proceedings and economic crimes.',
      'Défense pénale stratégique dans les enquêtes, les procédures judiciaires et les délits économiques.',
      '在调查、诉讼及经济犯罪案件中提供战略性刑事辩护。',
    ),
    heroTitle: T(
      'Abogados penalistas en Lima',
      'Criminal defense lawyers in Lima',
      'Avocats pénalistes à Lima',
      '利马刑事辩护律师',
    ),
    heroDesc: T(
      'Defendemos tus derechos con estrategia, reserva y experiencia en procesos penales complejos.',
      'We defend your rights with strategy, discretion and experience in complex criminal proceedings.',
      'Nous défendons vos droits avec stratégie, discrétion et expérience dans les procédures pénales complexes.',
      '以策略、保密与复杂刑事案件经验维护您的权利。',
    ),
    introTitle: T(
      'Defensa penal con rigor y confidencialidad',
      'Criminal defense with rigor and confidentiality',
      'Une défense pénale rigoureuse et confidentielle',
      '严谨且保密的刑事辩护',
    ),
    intro: [
      T(
        'Acompañamos a personas y empresas desde la investigación preliminar hasta la etapa de juicio oral. Analizamos cada expediente, diseñamos la estrategia procesal y preparamos la defensa con absoluta reserva.',
        'We support individuals and companies from the preliminary investigation through trial. We analyze every file, design the procedural strategy and prepare the defense with complete confidentiality.',
        'Nous accompagnons particuliers et entreprises de l’enquête préliminaire jusqu’au procès. Nous analysons chaque dossier, concevons la stratégie procédurale et préparons la défense en toute confidentialité.',
        '我们从初步侦查到庭审阶段为个人和企业提供全程支持，分析案卷、制定诉讼策略，并以绝对保密的方式准备辩护。',
      ),
      T(
        'Nuestro equipo combina conocimiento dogmático, litigación oral y coordinación con peritos para anticipar riesgos y proteger la libertad, el patrimonio y la reputación de nuestros clientes.',
        'Our team combines legal doctrine, oral advocacy and expert coordination to anticipate risks and protect our clients’ freedom, assets and reputation.',
        'Notre équipe combine doctrine juridique, plaidoirie orale et coordination avec des experts afin d’anticiper les risques et de protéger la liberté, le patrimoine et la réputation de nos clients.',
        '我们的团队结合法学理论、庭审辩护与专家协作，提前预判风险，维护客户的自由、财产与声誉。',
      ),
    ],
    highlights: [
      T('Investigación preliminar y fiscalía', 'Preliminary investigation and prosecution', 'Enquête préliminaire et parquet', '初步侦查与检察机关'),
      T('Juicio oral y apelaciones', 'Trial and appeals', 'Procès et appels', '庭审与上诉'),
      T('Delitos económicos y corporativos', 'Economic and corporate crimes', 'Délits économiques et d’entreprise', '经济与企业犯罪'),
      T('Medidas cautelares y libertad', 'Precautionary measures and liberty', 'Mesures conservatoires et liberté', '强制措施与人身自由'),
    ],
    services: [
      {
        icon: 'fa-solid fa-magnifying-glass',
        title: T('Investigación preliminar', 'Preliminary investigation', 'Enquête préliminaire', '初步侦查'),
        desc: T(
          'Asistencia desde la citación fiscal, declaraciones y diligencias urgentes.',
          'Assistance from the prosecutor’s summons, statements and urgent proceedings.',
          'Assistance dès la convocation du parquet, les déclarations et les actes urgents.',
          '从检察传唤、陈述及紧急程序阶段即提供协助。',
        ),
      },
      {
        icon: 'fa-solid fa-gavel',
        title: T('Juicio oral', 'Oral trial', 'Procès oral', '庭审辩护'),
        desc: T(
          'Preparación de teoría del caso, interrogatorios y alegatos de cierre.',
          'Case theory preparation, examinations and closing arguments.',
          'Préparation de la théorie du dossier, interrogatoires et plaidoiries finales.',
          '准备案件理论、询问证人及结案陈词。',
        ),
      },
      {
        icon: 'fa-solid fa-briefcase',
        title: T('Delitos económicos', 'Economic crimes', 'Délits économiques', '经济犯罪'),
        desc: T(
          'Fraude, lavado de activos, delitos tributarios y responsabilidad de directivos.',
          'Fraud, money laundering, tax offenses and officer liability.',
          'Fraude, blanchiment d’argent, infractions fiscales et responsabilité des dirigeants.',
          '欺诈、洗钱、税务犯罪及管理层责任。',
        ),
      },
      {
        icon: 'fa-solid fa-scale-balanced',
        title: T('Apelaciones y recursos', 'Appeals and remedies', 'Appels et recours', '上诉与救济'),
        desc: T(
          'Impugnaciones, hábeas corpus y revisión de resoluciones judiciales.',
          'Appeals, habeas corpus and review of judicial decisions.',
          'Recours, habeas corpus et révision des décisions judiciaires.',
          '上诉、人身保护令及司法裁决复核。',
        ),
      },
      {
        icon: 'fa-solid fa-handshake-angle',
        title: T('Asesoría preventiva', 'Preventive counsel', 'Conseil préventif', '预防性咨询'),
        desc: T(
          'Compliance penal, protocolos de actuación y gestión de crisis reputacionales.',
          'Criminal compliance, action protocols and reputational crisis management.',
          'Conformité pénale, protocoles d’action et gestion de crise réputationnelle.',
          '刑事合规、应对预案及声誉危机管理。',
        ),
      },
    ],
    process: [
      {
        title: T('Evaluación confidencial', 'Confidential assessment', 'Évaluation confidentielle', '保密评估'),
        desc: T(
          'Revisamos los hechos, la etapa procesal y los riesgos inmediatos.',
          'We review the facts, procedural stage and immediate risks.',
          'Nous examinons les faits, l’étape procédurale et les risques immédiats.',
          '审查事实、诉讼阶段与即时风险。',
        ),
      },
      {
        title: T('Estrategia de defensa', 'Defense strategy', 'Stratégie de défense', '辩护策略'),
        desc: T(
          'Definimos la teoría del caso, pruebas y escenarios de negociación.',
          'We define the case theory, evidence and negotiation scenarios.',
          'Nous définissons la théorie du dossier, les preuves et les scénarios de négociation.',
          '确定案件理论、证据与谈判方案。',
        ),
      },
      {
        title: T('Ejecución y seguimiento', 'Execution and follow-up', 'Exécution et suivi', '执行与跟进'),
        desc: T(
          'Comparecemos en cada diligencia e informamos avances con lenguaje claro.',
          'We appear at every proceeding and report progress in plain language.',
          'Nous comparaissons à chaque acte et rendons compte des avances en langage clair.',
          '出席每一程序，并以清晰语言汇报进展。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Desde qué momento necesito un abogado penalista?', 'When do I need a criminal lawyer?', 'Quand faut-il un avocat pénaliste ?', '何时需要刑事律师？'),
        a: T(
          'Desde la primera citación o intervención policial. Una defensa temprana evita declaraciones improvisadas y permite preservar pruebas.',
          'From the first summons or police intervention. Early defense prevents improvised statements and helps preserve evidence.',
          'Dès la première convocation ou intervention policière. Une défense précoce évite les déclarations improvisées et permet de préserver les preuves.',
          '从首次传唤或警方介入起。尽早辩护可避免仓促陈述并保全证据。',
        ),
      },
      {
        q: T('¿Atienden casos urgentes?', 'Do you handle urgent cases?', 'Traitez-vous les urgences ?', '是否处理紧急案件？'),
        a: T(
          'Sí. Contamos con un canal prioritario para detenciones, allanamientos y medidas urgentes.',
          'Yes. We have a priority channel for arrests, searches and urgent measures.',
          'Oui. Nous disposons d’un canal prioritaire pour les arrestations, perquisitions et mesures urgentes.',
          '是的。我们为逮捕、搜查及紧急措施设有优先通道。',
        ),
      },
      {
        q: T('¿La información es confidencial?', 'Is the information confidential?', 'Les informations sont-elles confidentielles ?', '信息是否保密？'),
        a: T(
          'Toda consulta está cubierta por el secreto profesional. No compartimos datos sin autorización expresa.',
          'All consultations are covered by professional secrecy. We do not share data without express authorization.',
          'Toute consultation est couverte par le secret professionnel. Nous ne partageons aucune donnée sans autorisation expresse.',
          '所有咨询均受职业保密义务保护，未经明确授权不会共享资料。',
        ),
      },
      {
        q: T('¿Pueden defender a una empresa?', 'Can you defend a company?', 'Pouvez-vous défendre une entreprise ?', '可以为企业辩护吗？'),
        a: T(
          'Sí. Asumimos la defensa de personas jurídicas, directivos y colaboradores en investigaciones corporativas.',
          'Yes. We defend legal entities, officers and employees in corporate investigations.',
          'Oui. Nous défendons les personnes morales, dirigeants et collaborateurs dans les enquêtes internes.',
          '可以。我们为法人、管理层及员工在公司调查中提供辩护。',
        ),
      },
    ],
  },
  {
    slug: 'familia',
    icon: 'fa-solid fa-people-roof',
    image: '/assets/hero/hero-2.jpg',
    title: T('Derecho de Familia', 'Family Law', 'Droit de la famille', '家庭法'),
    navLabel: T('Abogados de Familia', 'Family Lawyers', 'Avocats de la famille', '家庭法律师'),
    short: T(
      'Divorcios, tenencia, alimentos y protección de menores con acompañamiento cercano.',
      'Divorce, custody, child support and protection of minors with close support.',
      'Divorce, garde, pension alimentaire et protection des mineurs avec un accompagnement de proximité.',
      '离婚、抚养权、扶养费及未成年人保护，提供贴心陪伴。',
    ),
    heroTitle: T(
      'Abogados de familia en Lima',
      'Family lawyers in Lima',
      'Avocats de la famille à Lima',
      '利马家庭法律师',
    ),
    heroDesc: T(
      'Resolvemos conflictos familiares con sensibilidad, confidencialidad y firmeza jurídica.',
      'We resolve family conflicts with sensitivity, confidentiality and legal firmness.',
      'Nous résolvons les conflits familiaux avec sensibilité, confidentialité et fermeté juridique.',
      '以同理心、保密与法律坚定性解决家庭纠纷。',
    ),
    introTitle: T(
      'Decisiones familiares con respaldo legal',
      'Family decisions backed by legal counsel',
      'Des décisions familiales accompagnées juridiquement',
      '有法律支持的家庭决策',
    ),
    intro: [
      T(
        'Entendemos que detrás de cada expediente hay una historia personal. Por eso combinamos rigor técnico con escucha activa para proponer soluciones sostenibles, especialmente cuando hay niños y adolescentes involucrados.',
        'We understand there is a personal story behind every file. That is why we combine technical rigor with active listening to propose sustainable solutions, especially when children and adolescents are involved.',
        'Nous savons qu’il y a une histoire personnelle derrière chaque dossier. Nous associons donc rigueur technique et écoute active pour proposer des solutions durables, surtout lorsque des enfants sont concernés.',
        '我们深知每份案卷背后都有个人故事。因此结合严谨技术与积极倾听，提出可持续方案，尤其涉及儿童与青少年时。',
      ),
      T(
        'Priorizamos la negociación y la conciliación, sin renunciar a una defensa firme cuando los derechos de nuestros clientes o de sus hijos requieren intervención judicial.',
        'We prioritize negotiation and conciliation, without giving up firm advocacy when our clients’ or their children’s rights require court intervention.',
        'Nous privilégions la négociation et la conciliation, sans renoncer à une défense ferme lorsque les droits de nos clients ou de leurs enfants exigent une intervention judiciaire.',
        '我们优先采用协商与调解，但在客户或其子女权利需要司法介入时，也会坚定辩护。',
      ),
    ],
    highlights: [
      T('Divorcio y separación de bienes', 'Divorce and property separation', 'Divorce et séparation des biens', '离婚与财产分割'),
      T('Tenencia y régimen de visitas', 'Custody and visitation', 'Garde et droit de visite', '抚养权与探视'),
      T('Pensión de alimentos', 'Child support', 'Pension alimentaire', '扶养费'),
      T('Violencia familiar y medidas de protección', 'Family violence and protection orders', 'Violence familiale et mesures de protection', '家庭暴力与保护令'),
    ],
    services: [
      {
        icon: 'fa-solid fa-heart-crack',
        title: T('Divorcio y separación', 'Divorce and separation', 'Divorce et séparation', '离婚与分居'),
        desc: T(
          'Divorcio por mutuo acuerdo o causal, separación convencional y liquidación de sociedad de gananciales.',
          'Uncontested or fault-based divorce, legal separation and division of marital property.',
          'Divorce par consentement mutuel ou pour faute, séparation légale et liquidation des biens communs.',
          '协议离婚或诉讼离婚、法定分居及夫妻共同财产清算。',
        ),
      },
      {
        icon: 'fa-solid fa-child-reaching',
        title: T('Tenencia y visitas', 'Custody and visitation', 'Garde et visite', '抚养权与探视'),
        desc: T(
          'Régimen de tenencia, visitas supervisadas y coordinación con equipos psicosociales.',
          'Custody arrangements, supervised visitation and coordination with psychosocial teams.',
          'Modalités de garde, visites supervisées et coordination avec des équipes psychosociales.',
          '抚养安排、监督探视及与心理社会团队协作。',
        ),
      },
      {
        icon: 'fa-solid fa-coins',
        title: T('Alimentos y filiación', 'Support and parentage', 'Pension et filiation', '扶养与亲子关系'),
        desc: T(
          'Fijación, aumento, reducción y exoneración de pensiones; reconocimiento de filiación.',
          'Establishing, increasing, reducing or waiving support; parentage recognition.',
          'Fixation, augmentation, réduction ou exonération de pension ; reconnaissance de filiation.',
          '扶养费的确定、增加、减少与免除；亲子关系确认。',
        ),
      },
      {
        icon: 'fa-solid fa-shield-heart',
        title: T('Protección de menores', 'Protection of minors', 'Protection des mineurs', '未成年人保护'),
        desc: T(
          'Medidas de protección, denuncias por violencia familiar y defensa del interés superior del niño.',
          'Protection orders, family violence complaints and defense of the child’s best interests.',
          'Mesures de protection, plaintes pour violence familiale et défense de l’intérêt supérieur de l’enfant.',
          '保护令、家庭暴力举报及儿童最大利益维护。',
        ),
      },
      {
        icon: 'fa-solid fa-file-signature',
        title: T('Pactos y sucesiones', 'Agreements and succession', 'Accords et successions', '协议与继承'),
        desc: T(
          'Convenios de convivencia, capitulaciones, testamentos y planificación sucesoria.',
          'Cohabitation agreements, prenuptial agreements, wills and estate planning.',
          'Conventions de vie commune, contrats de mariage, testaments et planification successorale.',
          '同居协议、婚前协议、遗嘱与继承规划。',
        ),
      },
    ],
    process: [
      {
        title: T('Escucha y diagnóstico', 'Listening and diagnosis', 'Écoute et diagnostic', '倾听与诊断'),
        desc: T(
          'Identificamos necesidades, urgencias y alternativas antes de iniciar cualquier acción.',
          'We identify needs, urgencies and alternatives before taking any action.',
          'Nous identifions les besoins, urgences et alternatives avant toute action.',
          '在采取任何行动前明确需求、紧急事项与替代方案。',
        ),
      },
      {
        title: T('Ruta conciliadora', 'Conciliation path', 'Voie de conciliation', '调解路径'),
        desc: T(
          'Buscamos acuerdos justos y ejecutables que reduzcan el desgaste emocional y económico.',
          'We seek fair, enforceable agreements that reduce emotional and financial strain.',
          'Nous recherchons des accords équitables et exécutoires qui réduisent l’usure émotionnelle et financière.',
          '寻求公平且可执行的协议，减少情感与经济消耗。',
        ),
      },
      {
        title: T('Defensa judicial', 'Court advocacy', 'Défense judiciaire', '司法辩护'),
        desc: T(
          'Si el acuerdo no es posible, litigamos con estrategia y protección de los más vulnerables.',
          'If agreement is impossible, we litigate strategically while protecting the most vulnerable.',
          'Si un accord est impossible, nous plaidons avec stratégie en protégeant les plus vulnérables.',
          '若无法达成协议，我们以策略性诉讼保护最弱势一方。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Cuánto dura un divorcio?', 'How long does a divorce take?', 'Combien de temps dure un divorce ?', '离婚需要多久？'),
        a: T(
          'Un divorcio por mutuo acuerdo puede concluir en pocas semanas; un proceso contencioso depende de la complejidad y de la carga judicial.',
          'An uncontested divorce can conclude in a few weeks; contested proceedings depend on complexity and court workload.',
          'Un divorce par consentement mutuel peut aboutir en quelques semaines ; une procédure contentieuse dépend de la complexité et de la charge des tribunaux.',
          '协议离婚可能在数周内完成；诉讼离婚取决于复杂程度与法院负荷。',
        ),
      },
      {
        q: T('¿Cómo se determina la pensión de alimentos?', 'How is child support determined?', 'Comment est fixée la pension alimentaire ?', '扶养费如何确定？'),
        a: T(
          'Se evalúan las necesidades del menor y la capacidad económica de ambos progenitores, con criterios de proporcionalidad y equidad.',
          'The child’s needs and both parents’ financial capacity are assessed under proportionality and fairness criteria.',
          'Les besoins de l’enfant et la capacité financière des deux parents sont évalués selon des critères de proportionnalité et d’équité.',
          '根据子女需求与双方经济能力，按比例与公平原则评估。',
        ),
      },
      {
        q: T('¿Puedo cambiar la tenencia después?', 'Can custody be changed later?', 'La garde peut-elle être modifiée ?', '抚养权之后可以变更吗？'),
        a: T(
          'Sí, cuando cambian las circunstancias y el cambio responde al interés superior del niño.',
          'Yes, when circumstances change and the modification serves the child’s best interests.',
          'Oui, lorsque les circonstances changent et que la modification sert l’intérêt supérieur de l’enfant.',
          '可以，当情况变化且变更符合儿童最大利益时。',
        ),
      },
      {
        q: T('¿Atienden fuera de Lima?', 'Do you serve clients outside Lima?', 'Intervenez-vous hors de Lima ?', '是否服务利马以外地区？'),
        a: T(
          'Sí. Gestionamos procesos a nivel nacional y coordinamos audiencias virtuales cuando es posible.',
          'Yes. We handle cases nationwide and coordinate virtual hearings when possible.',
          'Oui. Nous traitons des dossiers dans tout le pays et coordonnons des audiences virtuelles lorsque possible.',
          '是的。我们在全国范围内办理案件，并尽可能协调线上听证。',
        ),
      },
    ],
  },
  {
    slug: 'civil-comercial',
    icon: 'fa-solid fa-scale-balanced',
    image: '/assets/hero/hero-3.jpg',
    title: T('Derecho Civil y Comercial', 'Civil & Commercial Law', 'Droit civil et commercial', '民商法'),
    navLabel: T('Abogados Civiles y Comerciales', 'Civil & Commercial Lawyers', 'Avocats civils et commerciaux', '民商事律师'),
    short: T(
      'Contratos, obligaciones, responsabilidad civil y controversias comerciales de alta complejidad.',
      'Contracts, obligations, civil liability and complex commercial disputes.',
      'Contrats, obligations, responsabilité civile et litiges commerciaux complexes.',
      '合同、债务、民事责任及复杂商事争议。',
    ),
    heroTitle: T(
      'Abogados civiles y comerciales en Lima',
      'Civil and commercial lawyers in Lima',
      'Avocats civils et commerciaux à Lima',
      '利马民商事律师',
    ),
    heroDesc: T(
      'Protegemos tus intereses patrimoniales con soluciones contractuales y litigios bien construidos.',
      'We protect your economic interests with sound contracts and well-built litigation.',
      'Nous protégeons vos intérêts patrimoniaux par des contrats solides et des litiges bien construits.',
      '以严谨合同与周密诉讼维护您的财产权益。',
    ),
    introTitle: T(
      'Relaciones comerciales sólidas y defendibles',
      'Solid, defensible commercial relationships',
      'Des relations commerciales solides et défendables',
      '稳固且可捍卫的商业关系',
    ),
    intro: [
      T(
        'Asesoramos a personas, empresas y familias en la negociación, redacción y ejecución de contratos civiles y comerciales. Anticipamos riesgos, ordenamos la evidencia y diseñamos mecanismos de solución de controversias.',
        'We advise individuals, companies and families on negotiating, drafting and performing civil and commercial contracts. We anticipate risks, organize evidence and design dispute resolution mechanisms.',
        'Nous conseillons particuliers, entreprises et familles dans la négociation, la rédaction et l’exécution de contrats civils et commerciaux. Nous anticipons les risques, organisons les preuves et concevons des mécanismes de règlement des litiges.',
        '我们为个人、企业与家庭提供民商事合同的谈判、起草与履行咨询，预判风险、整理证据并设计争议解决机制。',
      ),
      T(
        'Cuando la controversia es inevitable, litigamos en la vía judicial o arbitral con una estrategia probatoria clara y comunicación permanente con el cliente.',
        'When disputes are unavoidable, we litigate in court or arbitration with a clear evidentiary strategy and constant client communication.',
        'Lorsque le litige est inévitable, nous plaidons devant les tribunales ou en arbitrage avec une stratégie probatoire claire et une communication constante avec le client.',
        '当争议不可避免时，我们以清晰的证据策略在法院或仲裁中诉讼，并与客户保持持续沟通。',
      ),
    ],
    highlights: [
      T('Contratos y obligaciones', 'Contracts and obligations', 'Contrats et obligations', '合同与债务'),
      T('Responsabilidad civil', 'Civil liability', 'Responsabilité civile', '民事责任'),
      T('Arbitraje y litigios', 'Arbitration and litigation', 'Arbitrage et litiges', '仲裁与诉讼'),
      T('Cobranza y ejecuciones', 'Collections and enforcement', 'Recouvrement et exécution', '催收与执行'),
    ],
    services: [
      {
        icon: 'fa-solid fa-file-contract',
        title: T('Contratos civiles y comerciales', 'Civil and commercial contracts', 'Contrats civils et commerciaux', '民商事合同'),
        desc: T(
          'Redacción, revisión y negociación de contratos de compraventa, servicios, distribución y asociación.',
          'Drafting, review and negotiation of sale, service, distribution and joint venture agreements.',
          'Rédaction, révision et négociation de contrats de vente, de services, de distribution et d’association.',
          '买卖、服务、分销及联营合同的起草、审查与谈判。',
        ),
      },
      {
        icon: 'fa-solid fa-gavel',
        title: T('Litigios civiles', 'Civil litigation', 'Litiges civiles', '民事诉讼'),
        desc: T(
          'Procesos de obligaciones, daños, mejor derecho de propiedad y tercería.',
          'Obligation, damages, better title and third-party claims.',
          'Actions en obligations, dommages, meilleur droit de propriété et tierce opposition.',
          '债务、损害赔偿、优先所有权及第三人异议之诉。',
        ),
      },
      {
        icon: 'fa-solid fa-handshake',
        title: T('Arbitraje y conciliación', 'Arbitration and conciliation', 'Arbitrage et conciliation', '仲裁与调解'),
        desc: T(
          'Representación en arbitrajes institucionales y acuerdos conciliatorios ejecutables.',
          'Representation in institutional arbitration and enforceable settlement agreements.',
          'Représentation en arbitrage institutionnel et accords de conciliation exécutoires.',
          '在机构仲裁中代理，并促成可执行的调解协议。',
        ),
      },
      {
        icon: 'fa-solid fa-building-columns',
        title: T('Responsabilidad civil', 'Civil liability', 'Responsabilité civile', '民事责任'),
        desc: T(
          'Indemnizaciones por daño patrimonial, moral, lucro cesante y responsabilidad profesional.',
          'Compensation for material and moral damage, lost profits and professional liability.',
          'Indemnisation du dommage matériel et moral, du manque à gagner et de la responsabilité professionnelle.',
          '财产与精神损害、可得利益损失及职业责任赔偿。',
        ),
      },
      {
        icon: 'fa-solid fa-money-check-dollar',
        title: T('Cobranza y garantías', 'Collections and security', 'Recouvrement et garanties', '催收与担保'),
        desc: T(
          'Cobranza judicial, ejecución de garantías, títulos valores y medidas cautelares.',
          'Judicial collection, enforcement of security, negotiable instruments and injunctions.',
          'Recouvrement judiciaire, exécution des garanties, effets de commerce et mesures conservatoires.',
          '司法催收、担保执行、票据及保全措施。',
        ),
      },
    ],
    process: [
      {
        title: T('Revisión documental', 'Document review', 'Revue documentaire', '文件审查'),
        desc: T(
          'Analizamos contratos, comunicaciones y evidencia para definir la posición jurídica.',
          'We analyze contracts, communications and evidence to define the legal position.',
          'Nous analysons contrats, communications et preuves pour définir la position juridique.',
          '分析合同、往来函件与证据，确定法律立场。',
        ),
      },
      {
        title: T('Estrategia y negociación', 'Strategy and negotiation', 'Stratégie et négociation', '策略与谈判'),
        desc: T(
          'Exploramos acuerdos que protejan el negocio antes de escalar a un litigio.',
          'We explore agreements that protect the business before escalating to litigation.',
          'Nous explorons des accords protégeant l’activité avant d’engager un litige.',
          '在进入诉讼前，探索保护商业利益的解决方案。',
        ),
      },
      {
        title: T('Litigio o arbitraje', 'Litigation or arbitration', 'Litige ou arbitrage', '诉讼或仲裁'),
        desc: T(
          'Ejecutamos la estrategia probatoria con reportes claros de riesgos y plazos.',
          'We execute the evidentiary strategy with clear risk and timeline reporting.',
          'Nous exécutons la stratégie probatoire avec un suivi clair des risques et délais.',
          '执行证据策略，并清晰报告风险与时限。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Necesito un contrato escrito?', 'Do I need a written contract?', 'Faut-il un contrat écrit ?', '需要书面合同吗？'),
        a: T(
          'Aunque la ley permite contratos verbales, un contrato escrito bien redactado reduce riesgos y facilita la prueba.',
          'Although verbal contracts may be valid, a well-drafted written contract reduces risk and facilitates proof.',
          'Bien que les contrats verbaux puissent être valables, un contrat écrit bien rédigé réduit les risques et facilite la preuve.',
          '虽然口头合同可能有效，但严谨的书面合同可降低风险并便于举证。',
        ),
      },
      {
        q: T('¿Qué diferencia hay entre arbitraje y proceso judicial?', 'What is the difference between arbitration and court?', 'Quelle différence entre arbitrage et tribunal ?', '仲裁与诉讼有何区别？'),
        a: T(
          'El arbitraje es más rápido y privado, pero requiere cláusula arbitral; el proceso judicial es público y puede ser más largo.',
          'Arbitration is faster and private but requires an arbitration clause; court proceedings are public and may take longer.',
          'L’arbitrage est plus rapide et privé mais exige une clause compromissoire ; la procédure judiciaire est publique et peut être plus longue.',
          '仲裁更快捷且私密，但需仲裁条款；诉讼公开且可能更漫长。',
        ),
      },
      {
        q: T('¿Pueden revisar un contrato antes de firmarlo?', 'Can you review a contract before I sign?', 'Pouvez-vous revoir un contrat avant signature ?', '签署前可以审查合同吗？'),
        a: T(
          'Sí. Recomendamos una revisión previa para identificar obligaciones, garantías y cláusulas de salida.',
          'Yes. We recommend a prior review to identify obligations, guarantees and exit clauses.',
          'Oui. Nous recommandons une revue préalable pour identifier obligations, garanties et clauses de sortie.',
          '可以。建议事先审查，识别义务、担保与退出条款。',
        ),
      },
      {
        q: T('¿Cómo se cobran los honorarios?', 'How are fees charged?', 'Comment sont facturés les honorarios ?', '费用如何收取？'),
        a: T(
          'Dependiendo del caso, trabajamos con honorarios fijos, por etapa o una combinación con éxito procesal.',
          'Depending on the case, we work with fixed fees, stage-based fees or a success-based combination.',
          'Selon le dossier, nous appliquons des honoraires fixes, par étape ou une combinaison avec un honoraire de réussite.',
          '视案件情况，可采用固定费用、分阶段收费或与结果挂钩的组合方式。',
        ),
      },
    ],
  },
  {
    slug: 'inmobiliario',
    icon: 'fa-solid fa-house-chimney',
    image: '/assets/hero/hero-1.jpg',
    title: T('Derecho Inmobiliario', 'Real Estate Law', 'Droit immobilier', '房地产法'),
    navLabel: T('Abogados Inmobiliarios', 'Real Estate Lawyers', 'Avocats immobiliers', '房地产律师'),
    short: T(
      'Saneamiento de predios, contratos de compraventa, licencias y desarrollo de proyectos.',
      'Property regularization, sale agreements, permits and project development.',
      'Régularisation foncière, contrats de vente, permis et développement de projets.',
      '产权规范、买卖合同、许可与项目开发。',
    ),
    heroTitle: T(
      'Abogados inmobiliarios en Lima',
      'Real estate lawyers in Lima',
      'Avocats immobiliers à Lima',
      '利马房地产律师',
    ),
    heroDesc: T(
      'Compramos, vendemos y desarrollamos inmuebles con seguridad jurídica y registro limpio.',
      'We buy, sell and develop property with legal certainty and clean title.',
      'Nous achetons, vendons et développons des biens avec sécurité juridique et titre propre.',
      '以法律确定性与清晰产权进行买卖与开发。',
    ),
    introTitle: T(
      'Operaciones inmobiliarias sin sorpresas',
      'Real estate transactions without surprises',
      'Des opérations immobilières sans surprises',
      '无后顾之忧的房地产交易',
    ),
    intro: [
      T(
        'Revisamos títulos, cargas y restricciones antes de cualquier firma. Acompañamos la negociación, el saneamiento registral y la obtención de licencias para que la operación llegue a buen puerto.',
        'We review titles, liens and restrictions before any signature. We support negotiation, registry regularization and permitting so the transaction succeeds.',
        'Nous vérifions titres, charges et restrictions avant toute signature. Nous accompagnons la négociation, la régularisation registrale et l’obtention des permis pour mener l’opération à bien.',
        '在签署前审查产权、负担与限制，并协助谈判、登记规范化及许可申请，确保交易顺利完成。',
      ),
      T(
        'También defendemos a propietarios y compradores en litigios por desalojo, mejor derecho de propiedad, nulidad de actos jurídicos y ejecución de garantías.',
        'We also defend owners and buyers in eviction, better-title, nullity and security-enforcement disputes.',
        'Nous défendons également propriétaires et acheteurs dans les litiges d’expulsion, de meilleur droit de propriété, de nullité et d’exécution de garanties.',
        '我们还在驱逐、优先所有权、法律行为无效及担保执行争议中为业主与买方辩护。',
      ),
    ],
    highlights: [
      T('Due diligence legal y registral', 'Legal and registry due diligence', 'Due diligence juridique et registrale', '法律与登记尽职调查'),
      T('Compraventa y arrendamiento', 'Sale and lease agreements', 'Vente et bail', '买卖与租赁'),
      T('Licencias y habilitaciones', 'Permits and urban approvals', 'Permis et autorisations', '许可与土地开发'),
      T('Litigios por propiedad', 'Property disputes', 'Litiges immobiliers', '不动产争议'),
    ],
    services: [
      {
        icon: 'fa-solid fa-magnifying-glass-chart',
        title: T('Due diligence inmobiliaria', 'Real estate due diligence', 'Due diligence immobilière', '房地产尽职调查'),
        desc: T(
          'Estudio de títulos, cargas, linderos, zonificación y riesgos legales del predio.',
          'Title, lien, boundary, zoning and legal risk review of the property.',
          'Analyse des titres, charges, limites, zonage et risques juridiques du bien.',
          '审查产权、负担、边界、区划及法律风险。',
        ),
      },
      {
        icon: 'fa-solid fa-file-signature',
        title: T('Contratos inmobiliarios', 'Real estate contracts', 'Contrats immobiliers', '房地产合同'),
        desc: T(
          'Compraventa, arras, promesa, arrendamiento, usufructo y fideicomiso.',
          'Sale, earnest money, promise, lease, usufruct and trust agreements.',
          'Vente, arrhes, promesse, bail, usufruit et fiducie.',
          '买卖、定金、预约、租赁、用益权及信托合同。',
        ),
      },
      {
        icon: 'fa-solid fa-drafting-compass',
        title: T('Saneamiento y licencias', 'Regularization and permits', 'Régularisation et permis', '产权规范与许可'),
        desc: T(
          'Independización, prescripción adquisitiva, habilitaciones urbanas y licencias de edificación.',
          'Subdivision, acquisitive prescription, urban approvals and building permits.',
          'Morcellement, prescription acquisitive, autorisations d’aménagement et permis de construire.',
          '分割、取得时效、城市开发审批及建筑许可。',
        ),
      },
      {
        icon: 'fa-solid fa-city',
        title: T('Desarrollo de proyectos', 'Project development', 'Développement de projets', '项目开发'),
        desc: T(
          'Estructuración legal de proyectos, contratos de obra y prevención de contingencias.',
          'Legal structuring of projects, construction contracts and contingency prevention.',
          'Structuration juridique de projets, contrats de construction et prévention des risques.',
          '项目法律架构、工程合同及风险预防。',
        ),
      },
      {
        icon: 'fa-solid fa-gavel',
        title: T('Litigios inmobiliarios', 'Real estate litigation', 'Litiges immobiliers', '不动产诉讼'),
        desc: T(
          'Desalojo, mejor derecho, nulidad, tercería y ejecución de garantías hipotecarias.',
          'Eviction, better title, nullity, third-party claims and mortgage enforcement.',
          'Expulsion, meilleur droit, nullité, tierce opposition et exécution hypothécaire.',
          '驱逐、优先所有权、无效、第三人异议及抵押执行。',
        ),
      },
    ],
    process: [
      {
        title: T('Diagnóstico del predio', 'Property diagnosis', 'Diagnostic du bien', '不动产诊断'),
        desc: T(
          'Revisamos partida, planos y antecedentes para detectar contingencias.',
          'We review the registry record, plans and background to detect contingencies.',
          'Nous examinons le titre, les plans et l’historique pour détecter les risques.',
          '审查登记记录、图纸与历史资料，识别潜在风险。',
        ),
      },
      {
        title: T('Estructura de la operación', 'Transaction structure', 'Structure de l’opération', '交易架构'),
        desc: T(
          'Diseñamos contratos, garantías y cronograma de pagos y transferencia.',
          'We design contracts, guarantees, payment and transfer schedules.',
          'Nous concevons contrats, garanties et calendriers de paiement et de transfert.',
          '设计合同、担保及付款与过户时间表。',
        ),
      },
      {
        title: T('Cierre y registro', 'Closing and registration', 'Clôture et inscription', '交割与登记'),
        desc: T(
          'Supervisamos la firma, inscripción registral y entrega legal del inmueble.',
          'We supervise signing, registry registration and legal delivery of the property.',
          'Nous supervisons la signature, l’inscription registrale et la remise juridique du bien.',
          '监督签署、登记注册及不动产合法交付。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Qué reviso antes de comprar un terreno?', 'What should I review before buying land?', 'Que vérifier avant d’acheter un terrain ?', '购买土地前应审查什么？'),
        a: T(
          'Partida registral, títulos, cargas, linderos, zonificación, impuestos y situación posesoria.',
          'Registry record, titles, liens, boundaries, zoning, taxes and possession status.',
          'Titre registral, titres, charges, limites, zonage, impôts et situation de possession.',
          '登记记录、产权、负担、边界、区划、税费及占有状况。',
        ),
      },
      {
        q: T('¿Puedo regularizar un predio sin título?', 'Can I regularize property without title?', 'Peut-on régulariser un bien sans titre ?', '无产权证可以规范化吗？'),
        a: T(
          'En muchos casos sí, mediante prescripción adquisitiva o procedimientos de saneamiento, previa evaluación.',
          'In many cases yes, through acquisitive prescription or regularization procedures, subject to assessment.',
          'Souvent oui, par prescription acquisitive ou procédures de régularisation, après évaluation.',
          '许多情况下可以，通过取得时效或规范化程序，需先评估。',
        ),
      },
      {
        q: T('¿Asesoran a empresas constructoras?', 'Do you advise construction companies?', 'Conseillez-vous les promoteurs ?', '是否为建筑企业提供咨询？'),
        a: T(
          'Sí. Acompañamos la estructuración de proyectos, contratos de obra y gestión de riesgos.',
          'Yes. We support project structuring, construction contracts and risk management.',
          'Oui. Nous accompagnons la structuration de projets, les contrats de construction et la gestion des risques.',
          '是的。我们协助项目架构、工程合同及风险管理。',
        ),
      },
      {
        q: T('¿Cuánto tarda un saneamiento?', 'How long does regularization take?', 'Combien de temps dure une régularisation ?', '产权规范需要多久？'),
        a: T(
          'Depende del tipo de predio y de la documentación; algunos casos concluyen en meses y otros requieren proceso judicial.',
          'It depends on the property type and documentation; some cases take months and others require court proceedings.',
          'Cela dépend du type de bien et des documents ; certains dossiers prennent des mois, d’autres exigent une procédure judiciaire.',
          '取决于不动产类型与文件情况；部分数月完成，部分需司法程序。',
        ),
      },
    ],
  },
  {
    slug: 'laboral',
    icon: 'fa-solid fa-users',
    image: '/assets/hero/hero-2.jpg',
    title: T('Derecho Laboral', 'Labor Law', 'Droit du travail', '劳动法'),
    navLabel: T('Abogados Laborales', 'Labor Lawyers', 'Avocats du travail', '劳动法律师'),
    short: T(
      'Contratos, despidos, negociación colectiva y defensa en inspecciones de trabajo.',
      'Contracts, dismissals, collective bargaining and defense in labor inspections.',
      'Contrats, licenciements, négociation collective et défense lors des inspections du travail.',
      '合同、解雇、集体谈判及劳动监察抗辩。',
    ),
    heroTitle: T(
      'Abogados laborales en Lima',
      'Labor lawyers in Lima',
      'Avocats du travail à Lima',
      '利马劳动法律师',
    ),
    heroDesc: T(
      'Equilibramos la protección del trabajador con la gestión eficiente del capital humano.',
      'We balance worker protection with efficient human capital management.',
      'Nous concilions protection du travailleur et gestion efficiente du capital humain.',
      '在保护劳动者与高效管理人力资源之间取得平衡。',
    ),
    introTitle: T(
      'Relaciones laborales claras y sostenibles',
      'Clear and sustainable labor relations',
      'Des relations de travail claires et durables',
      '清晰且可持续的劳动关系',
    ),
    intro: [
      T(
        'Asesoramos a trabajadores y empleadores en la interpretación de normas laborales, elaboración de contratos y prevención de contingencias. Buscamos acuerdos que eviten litigios innecesarios.',
        'We advise employees and employers on labor rules, contract drafting and contingency prevention. We seek agreements that avoid unnecessary litigation.',
        'Nous conseillons salariés et employeurs sur les normes du travail, la rédaction de contrats et la prévention des risques. Nous recherchons des accords évitant les litiges inutiles.',
        '我们为劳动者与雇主提供劳动法规解释、合同起草及风险预防咨询，寻求避免不必要诉讼的协议。',
      ),
      T(
        'En sede inspectiva y judicial defendemos con evidencia ordenada, cálculo preciso de beneficios y una lectura estratégica de cada expediente.',
        'In inspections and court, we defend with organized evidence, precise benefit calculations and a strategic reading of each file.',
        'En inspection comme au tribunal, nous défendons avec des preuves organisées, un calcul précis des avantages et une lecture stratégique de chaque dossier.',
        '在劳动监察与司法阶段，我们以有序证据、精确福利计算及对案卷的策略性解读进行辩护。',
      ),
    ],
    highlights: [
      T('Despidos y beneficios sociales', 'Dismissals and social benefits', 'Licenciements et avantages sociaux', '解雇与社会福利'),
      T('Hostigamiento y discriminación', 'Harassment and discrimination', 'Harcèlement et discrimination', '骚扰与歧视'),
      T('Seguridad y salud en el trabajo', 'Occupational safety and health', 'Santé et sécurité au travail', '职业安全与健康'),
      T('Negociación colectiva', 'Collective bargaining', 'Négociation collective', '集体谈判'),
    ],
    services: [
      {
        icon: 'fa-solid fa-user-tie',
        title: T('Contratos y planillas', 'Contracts and payroll', 'Contrats et paie', '合同与工资册'),
        desc: T(
          'Contratos de trabajo, locación de servicios, destacados y regularización de planillas.',
          'Employment contracts, service agreements, secondments and payroll regularization.',
          'Contrats de travail, contrats de services, détachements et régularisation de la paie.',
          '劳动合同、服务合同、借调及工资册规范化。',
        ),
      },
      {
        icon: 'fa-solid fa-user-slash',
        title: T('Despidos y ceses', 'Dismissals and terminations', 'Licenciements et cessations', '解雇与终止'),
        desc: T(
          'Evaluación de causas, cartas de preaviso, ceses colectivos y negociación de salidas.',
          'Cause assessment, notice letters, collective dismissals and exit negotiation.',
          'Évaluation des motifs, lettres de préavis, licenciements collectifs et négociation de départs.',
          '原因评估、预告通知、集体解雇及离职谈判。',
        ),
      },
      {
        icon: 'fa-solid fa-shield-heart',
        title: T('Hostigamiento laboral', 'Workplace harassment', 'Harcèlement au travail', '职场骚扰'),
        desc: T(
          'Denuncias, investigaciones internas, comités de intervención y defensa de las partes.',
          'Complaints, internal investigations, intervention committees and representation of either party.',
          'Plaintes, enquêtes internes, comités d’intervention et défense des parties.',
          '举报、内部调查、干预委员会及双方代理。',
        ),
      },
      {
        icon: 'fa-solid fa-helmet-safety',
        title: T('Seguridad y salud', 'Safety and health', 'Santé et sécurité', '安全与健康'),
        desc: T(
          'Matrices de riesgo, protocolos, accidentes de trabajo y responsabilidad del empleador.',
          'Risk matrices, protocols, workplace accidents and employer liability.',
          'Matrices de risques, protocoles, accidents du travail et responsabilité de l’employeur.',
          '风险矩阵、规程、工伤事故及雇主责任。',
        ),
      },
      {
        icon: 'fa-solid fa-gavel',
        title: T('Litigios laborales', 'Labor litigation', 'Litiges du travail', '劳动争议诉讼'),
        desc: T(
          'Demandas por desnaturalización, beneficios, indemnizaciones y nulidad de despido.',
          'Claims for misclassification, benefits, compensation and reinstatement.',
          'Actions pour requalification, avantages, indemnisation et nullité de licenciement.',
          '关于合同性质、福利、赔偿及解雇无效的诉讼。',
        ),
      },
    ],
    process: [
      {
        title: T('Diagnóstico laboral', 'Labor diagnosis', 'Diagnostic social', '劳动诊断'),
        desc: T(
          'Revisamos contratos, boletas, registros y comunicaciones para fijar la posición.',
          'We review contracts, payslips, records and communications to establish the position.',
          'Nous examinons contrats, bulletins de paie, registres et communications pour établir la position.',
          '审查合同、工资单、记录与往来函件，确定立场。',
        ),
      },
      {
        title: T('Cálculo y estrategia', 'Calculation and strategy', 'Calcul et stratégie', '计算与策略'),
        desc: T(
          'Cuantificamos beneficios y diseñamos la ruta administrativa o judicial más eficiente.',
          'We quantify benefits and design the most efficient administrative or judicial path.',
          'Nous quantifions les avantages et concevons la voie administrative ou judiciaire la plus efficace.',
          '量化福利并设计最有效的行政或司法路径。',
        ),
      },
      {
        title: T('Negociación o defensa', 'Negotiation or defense', 'Négociation ou défense', '谈判或辩护'),
        desc: T(
          'Priorizamos acuerdos; si no son posibles, litigamos con prueba documental sólida.',
          'We prioritize settlements; if impossible, we litigate with solid documentary evidence.',
          'Nous privilégions les accords ; à défaut, nous plaidons avec des preuves documentaires solides.',
          '优先和解；若无法达成，则以扎实书证进行诉讼。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Me pueden despedir sin causa?', 'Can I be dismissed without cause?', 'Puis-je être licencié sans motif ?', '可以被无理由解雇吗？'),
        a: T(
          'Un despido arbitrario genera derecho a indemnización o reposición, según el régimen laboral y las circunstancias.',
          'Arbitrary dismissal may entitle you to compensation or reinstatement, depending on the labor regime and circumstances.',
          'Un licenciement arbitraire peut ouvrir droit à une indemnisation ou à une réintégration, selon le régime et les circonstances.',
          '无理由解雇可能产生赔偿或复职权，取决于劳动制度与具体情况。',
        ),
      },
      {
        q: T('¿Cómo denuncio hostigamiento laboral?', 'How do I report workplace harassment?', 'Comment signaler un harcèlement au travail ?', '如何举报职场骚扰？'),
        a: T(
          'Puedes presentar una denuncia interna o ante la autoridad de trabajo; te ayudamos a documentar los hechos y proteger tu puesto.',
          'You may file an internal complaint or report to the labor authority; we help document the facts and protect your position.',
          'Vous pouvez déposer une plainte interne ou auprès de l’autorité du travail ; nous aidons à documenter les faits et à protéger votre poste.',
          '可向内部或劳动主管部门举报；我们协助记录事实并保护你的职位。',
        ),
      },
      {
        q: T('¿Asesoran a empleadores?', 'Do you advise employers?', 'Conseillez-vous les employeurs ?', '是否为雇主提供咨询？'),
        a: T(
          'Sí. Diseñamos políticas internas, auditorías preventivas y defensa en inspecciones de SUNAFIL.',
          'Yes. We design internal policies, preventive audits and defense in SUNAFIL inspections.',
          'Oui. Nous concevons politiques internes, audits préventifs et défense lors des inspections SUNAFIL.',
          '是的。我们设计内部政策、预防性审计并在 SUNAFIL 监察中辩护。',
        ),
      },
      {
        q: T('¿Qué documentos debo conservar?', 'Which documents should I keep?', 'Quels documents conserver ?', '应保留哪些文件？'),
        a: T(
          'Contratos, boletas, correos, mensajes, registros de asistencia y cualquier comunicación sobre condiciones de trabajo.',
          'Contracts, payslips, emails, messages, attendance records and any communication about working conditions.',
          'Contrats, bulletins de paie, e-mails, messages, registres de présence et toute communication sur les conditions de travail.',
          '合同、工资单、邮件、消息、考勤记录及任何关于工作条件的沟通。',
        ),
      },
    ],
  },
  {
    slug: 'contrataciones',
    icon: 'fa-solid fa-file-invoice',
    image: '/assets/hero/hero-3.jpg',
    title: T('Contrataciones con el Estado', 'Public Procurement', 'Marchés publics', '政府采购'),
    navLabel: T('Abogados en Contrataciones con el Estado', 'Public Procurement Lawyers', 'Avocats en marchés publics', '政府采购律师'),
    short: T(
      'Licitaciones, contratos públicos, arbitraje y defensa ante el OECE y el Poder Judicial.',
      'Tenders, public contracts, arbitration and defense before OECE and the courts.',
      'Appels d’offres, contrats publics, arbitrage et défense devant l’OECE et les tribunaux.',
      '招标、公共合同、仲裁及在 OECE 与法院的辩护。',
    ),
    heroTitle: T(
      'Abogados en contrataciones con el Estado',
      'Public procurement lawyers',
      'Avocats en marchés publics',
      '政府采购律师',
    ),
    heroDesc: T(
      'Acompañamos a entidades y proveedores en cada etapa del proceso de contratación pública.',
      'We support public entities and suppliers at every stage of public procurement.',
      'Nous accompagnons entités publiques et fournisseurs à chaque étape de la commande publique.',
      '在政府采购各阶段为公共机构与供应商提供支持。',
    ),
    introTitle: T(
      'Contratación pública con cumplimiento y defensa técnica',
      'Public procurement with compliance and technical defense',
      'Commande publique avec conformité et défense technique',
      '合规与技术辩护并重的政府采购',
    ),
    intro: [
      T(
        'Asesoramos en la preparación de bases, evaluación de ofertas, ejecución contractual y solución de controversias. Conocemos el régimen de la Ley de Contrataciones y su reglamento, así como los criterios del OECE y del Tribunal de Contrataciones.',
        'We advise on bid documents, offer evaluation, contract performance and dispute resolution. We know the Public Procurement Law and its regulations, as well as OECE and Procurement Court criteria.',
        'Nous conseillons sur les documents d’appel d’offres, l’évaluation des offres, l’exécution des contrats et le règlement des litiges. Nous connaissons la loi sur les marchés publics, son règlement et les critères de l’OECE et du Tribunal des marchés publics.',
        '我们就招标文件、投标评估、合同履行及争议解决提供咨询，熟悉政府采购法及其实施条例，以及 OECE 与政府采购法庭的裁判标准。',
      ),
      T(
        'Defendemos a postores y contratistas en procedimientos administrativos, arbitrajes y procesos judiciales, con especial atención a la debida motivación y al derecho de defensa.',
        'We defend bidders and contractors in administrative proceedings, arbitration and court cases, with special attention to reasoned decisions and the right to defense.',
        'Nous défendons soumissionnaires et titulaires de marchés dans les procédures administratives, arbitrages et contentieux, en veillant à la motivation des décisions et au droit de la défense.',
        '我们在行政程序、仲裁与司法诉讼中为投标人与承包商辩护，特别关注决定的说理义务与辩护权。',
      ),
    ],
    highlights: [
      T('Licitaciones y concursos', 'Tenders and competitions', 'Appels d’offres et concours', '招标与竞争'),
      T('Ejecución contractual', 'Contract performance', 'Exécution contractuelle', '合同履行'),
      T('Procedimientos ante el OECE', 'OECE proceedings', 'Procédures devant l’OECE', 'OECE 程序'),
      T('Arbitraje en contratación pública', 'Public procurement arbitration', 'Arbitrage de marchés publics', '政府采购仲裁'),
    ],
    services: [
      {
        icon: 'fa-solid fa-file-circle-check',
        title: T('Preparación de propuestas', 'Proposal preparation', 'Préparation des offres', '投标文件准备'),
        desc: T(
          'Revisión de bases, checklist de admisibilidad y estrategia de oferta técnica y económica.',
          'Bid document review, admissibility checklist and technical and financial offer strategy.',
          'Revue des documents, liste de recevabilité et stratégie d’offre technique et financière.',
          '审查招标文件、资格清单及技术与经济报价策略。',
        ),
      },
      {
        icon: 'fa-solid fa-triangle-exclamation',
        title: T('Controversias y nulidades', 'Disputes and nullities', 'Contestations et nullités', '争议与无效'),
        desc: T(
          'Recursos de apelación, pedidos de nulidad y observaciones ante el OECE.',
          'Appeals, nullity requests and observations before OECE.',
          'Recours, demandes de nullité et observations devant l’OECE.',
          '向 OECE 提出上诉、无效申请与意见。',
        ),
      },
      {
        icon: 'fa-solid fa-handshake',
        title: T('Ejecución contractual', 'Contract performance', 'Exécution contractuelle', '合同履行'),
        desc: T(
          'Adelantos, valorizaciones, ampliaciones de plazo, penalidades y resolución de contrato.',
          'Advances, progress payments, time extensions, penalties and contract termination.',
          'Avances, décomptes, prolongations, pénalités et résiliation.',
          '预付款、进度款、工期延长、违约金及合同解除。',
        ),
      },
      {
        icon: 'fa-solid fa-scale-balanced',
        title: T('Arbitraje y litigios', 'Arbitration and litigation', 'Arbitrage et litiges', '仲裁与诉讼'),
        desc: T(
          'Defensa en arbitrajes de contratación pública y procesos contencioso-administrativos.',
          'Defense in public procurement arbitration and administrative litigation.',
          'Défense en arbitrage de marchés publics et contentieux administratif.',
          '政府采购仲裁及行政诉讼辩护。',
        ),
      },
      {
        icon: 'fa-solid fa-clipboard-check',
        title: T('Compliance público', 'Public compliance', 'Conformité publique', '公共合规'),
        desc: T(
          'Programas de integridad, prevención de corrupción y capacitación para entidades y proveedores.',
          'Integrity programs, anti-corruption prevention and training for entities and suppliers.',
          'Programmes d’intégrité, prévention de la corruption et formation des entités et fournisseurs.',
          '诚信计划、反腐败预防及为机构与供应商提供培训。',
        ),
      },
    ],
    process: [
      {
        title: T('Lectura de bases', 'Bid document review', 'Analyse du dossier', '招标文件解读'),
        desc: T(
          'Identificamos requisitos, riesgos y oportunidades antes de presentar la oferta.',
          'We identify requirements, risks and opportunities before submitting the bid.',
          'Nous identifions exigences, risques et opportunités avant le dépôt de l’offre.',
          '在提交投标前识别要求、风险与机会。',
        ),
      },
      {
        title: T('Acompañamiento en el proceso', 'Process support', 'Accompagnement de la procédure', '流程陪同'),
        desc: T(
          'Absolvemos consultas, observamos evaluaciones y sustentamos la oferta.',
          'We answer queries, challenge evaluations and support the offer.',
          'Nous répondons aux questions, contestons les évaluations et défendons l’offre.',
          '答复询问、质疑评审并支持投标。',
        ),
      },
      {
        title: T('Ejecución y defensa', 'Performance and defense', 'Exécution et défense', '履行与辩护'),
        desc: T(
          'Gestionamos la ejecución y defendemos tus derechos ante el OECE, arbitraje o tribunales.',
          'We manage performance and defend your rights before OECE, arbitration or courts.',
          'Nous gérons l’exécution et défendons vos droits devant l’OECE, l’arbitrage ou les tribunaux.',
          '管理合同履行，并在 OECE、仲裁或法院捍卫你的权利。',
        ),
      },
    ],
    faqs: [
      {
        q: T('¿Pueden impugnar una buena pro?', 'Can a contract award be challenged?', 'Une attribution peut-elle être contestée ?', '中标结果可以质疑吗？'),
        a: T(
          'Sí, mediante recurso de apelación dentro del plazo legal, siempre que exista agravio y sustento técnico.',
          'Yes, through an appeal within the legal deadline, provided there is harm and technical grounds.',
          'Oui, par recours dans le délai légal, à condition d’un préjudice et de motifs techniques.',
          '可以，在法定期限内提出上诉，但须存在损害与技术支持。',
        ),
      },
      {
        q: T('¿Asesoran a entidades públicas?', 'Do you advise public entities?', 'Conseillez-vous les entités publiques ?', '是否为公共机构提供咨询？'),
        a: T(
          'Sí. Apoyamos en la planificación, elaboración de bases y gestión contractual conforme a la normativa.',
          'Yes. We support planning, bid document preparation and contract management in compliance with the rules.',
          'Oui. Nous aidons à la planification, à la rédaction des documents et à la gestion contractuelle conforme.',
          '是的。我们协助规划、招标文件编制及合规合同管理。',
        ),
      },
      {
        q: T('¿Qué pasa si me imponen una penalidad?', 'What if a penalty is imposed?', 'Que faire en cas de pénalité ?', '被处以违约金怎么办？'),
        a: T(
          'Analizamos la procedencia, el cálculo y las causales de exoneración, y planteamos la defensa administrativa o arbitral.',
          'We review validity, calculation and exemption grounds, and file an administrative or arbitration defense.',
          'Nous examinons la validité, le calcul et les motifs d’exonération, puis engageons la défense administrative ou arbitrale.',
          '我们审查其合法性、计算与免责事由，并提出行政或仲裁抗辩。',
        ),
      },
      {
        q: T('¿Puedo participar en un arbitraje?', 'Can I participate in arbitration?', 'Puis-je participer à un arbitrage ?', '可以参与仲裁吗？'),
        a: T(
          'Sí, si el contrato o la ley lo prevén. Evaluamos la vía, los plazos y la estrategia probatoria.',
          'Yes, if the contract or law provides for it. We assess the route, deadlines and evidentiary strategy.',
          'Oui, si le contrat ou la loi le prévoit. Nous évaluons la voie, les délais et la stratégie probatoire.',
          '可以，若合同或法律规定。我们评估途径、期限与证据策略。',
        ),
      },
    ],
  },
];

export const PRACTICE_SLUGS = PRACTICE_AREAS.map((area) => area.slug);

export function getPracticeArea(slug) {
  return PRACTICE_AREAS.find((area) => area.slug === slug);
}

/** Etiquetas cortas para el filtro del equipo. */
export const SPECIALTY_OPTIONS = PRACTICE_AREAS.map((area) => ({
  value: area.slug,
  label: area.title,
  shortLabel: area.navLabel,
}));

