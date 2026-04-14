// Spanish B2 Gap Batch 3 - Lesson 1: The Professional World
// 20 teach cards + quizzes, max 30 steps

const LESSON_1 = {id:"esv2_b2g3_l1", title:"El mundo profesional", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"El mundo profesional", desc:"Master vocabulary for professional roles and the modern workplace. From designers to developers, learn how to talk about careers in Spanish.", goals:["Learn 15+ professional role nouns","Use masculine/feminine job title forms","Discuss workplace responsibilities"]},

  {type:"teach", trg:"el administrador", src:"the administrator (m)", pos:"noun", gender:"m", note:"Male form. Female: la administradora.\nManages resources or systems.", example:"A: ¿Quién es el administrador del edificio?\nB: Es el señor Ruiz, lleva diez años aquí.", exampleSrc:"A: Who is the building administrator?\nB: It's Mr. Ruiz, he's been here ten years.", funFact:"From Latin administrare (to serve). The same root gives English 'minister' and 'administer'."},

  {type:"teach", trg:"el coordinador", src:"the coordinator (m)", pos:"noun", gender:"m", note:"Male form. Female: la coordinadora.\nOrganizes teams or projects.", example:"A: Necesitamos un coordinador para el evento.\nB: María tiene experiencia, ella podría hacerlo.", exampleSrc:"A: We need a coordinator for the event.\nB: María has experience, she could do it.", funFact:"From Latin coordinare (to arrange together). Co- means 'together', a productive prefix in Spanish."},

  {type:"teach", trg:"el diseñador", src:"the designer (m)", pos:"noun", gender:"m", note:"Male form. Female: la diseñadora.\nCreates visual or functional designs.", example:"A: Mi hermano es diseñador gráfico.\nB: ¡Qué interesante! ¿Trabaja en una agencia?", exampleSrc:"A: My brother is a graphic designer.\nB: How interesting! Does he work at an agency?", funFact:"Diseño comes from Italian disegno. Spain's design capital is Valencia, home to major studios."},

  {type:"teach", trg:"el desarrollador", src:"the developer", pos:"noun", gender:"m", note:"Male form. Female: la desarrolladora.\nBuilds software or develops projects.", example:"A: ¿A qué te dedicas?\nB: Soy desarrollador de aplicaciones móviles.", exampleSrc:"A: What do you do for a living?\nB: I'm a mobile app developer.", funFact:"From des- + arrollar (to roll out). Literally 'one who unrolls' something new into existence."},

  {type:"teach", trg:"el conductor", src:"the driver / presenter", pos:"noun", gender:"m", note:"Male form. Female: la conductora.\nMeans both vehicle driver and TV presenter.", example:"A: El conductor del autobús es muy amable.\nB: Sí, siempre saluda a todos.", exampleSrc:"A: The bus driver is very kind.\nB: Yes, he always greets everyone.", funFact:"In Latin America, conductor often means TV host. In Spain, presentador is more common for that meaning."},

  {type:"teach", trg:"la directiva", src:"the directive / board of directors", pos:"noun", gender:"f", note:"As noun: the management board.\nAs adjective (directivo/a): managerial.", example:"A: La directiva ha aprobado el nuevo presupuesto.\nB: Menos mal, llevábamos meses esperando.", exampleSrc:"A: The board of directors has approved the new budget.\nB: Thank goodness, we'd been waiting months.", funFact:"From Latin directivus. In Spanish football, la directiva refers to the club's governing board."},

  {type:"teach", trg:"directivo", src:"managerial / executive", pos:"adj", gender:null, note:"Adjective form. Un puesto directivo = a managerial position.\nAlso used as a noun: el directivo.", example:"A: ¿Es un cargo directivo?\nB: Sí, tendrás un equipo de quince personas.", exampleSrc:"A: Is it a managerial position?\nB: Yes, you'll have a team of fifteen people.", funFact:"Spain uses directivo for both the person and the adjective. The RAE accepts both uses."},

  {type:"mc", q:"¿Quién organiza los equipos y proyectos en una empresa?", opts:["El administrador","El coordinador","El conductor","El diseñador"], ans:"El coordinador", hint:"This role is specifically about arranging teams and organizing collaboration."},

  {type:"teach", trg:"el carpintero", src:"the carpenter", pos:"noun", gender:"m", note:"Male form. Female: la carpintera.\nWorks with wood to build furniture or structures.", example:"A: Necesito un carpintero para la estantería.\nB: Conozco a uno muy bueno en el barrio.", exampleSrc:"A: I need a carpenter for the bookshelf.\nB: I know a very good one in the neighbourhood.", funFact:"From Latin carpentarius (carriage maker). Carpintería (workshop) is still a common sight in Spanish towns."},

  {type:"teach", trg:"la carpintería", src:"the carpentry / carpenter's workshop", pos:"noun", gender:"f", note:"The trade or the physical workshop.\nEnds in -ería, a common suffix for shops.", example:"A: ¿Dónde compraste esa mesa?\nB: La encargué en una carpintería del centro.", exampleSrc:"A: Where did you buy that table?\nB: I ordered it from a carpentry shop downtown.", funFact:"The -ería suffix marks shops and trades: panadería (bakery), zapatería (shoe shop), carpintería."},

  {type:"teach", trg:"el barrendero", src:"the street sweeper", pos:"noun", gender:"m", note:"Male form. Female: la barrendera.\nFrom barrer (to sweep).", example:"A: Los barrenderos empiezan a las cinco de la mañana.\nB: Sin ellos, la ciudad sería un desastre.", exampleSrc:"A: The street sweepers start at five in the morning.\nB: Without them, the city would be a disaster.", funFact:"In Spain, barrenderos are municipal employees. The job is considered essential public service."},

  {type:"fb", s:"Mi vecino trabaja como {1} en una empresa de tecnología.", a:["desarrollador"], opts:["desarrollador","barrendero","carpintero","conductor"], hint:"This professional builds software and applications.", sSrc:"My neighbour works as a {1} at a technology company."},

  {type:"teach", trg:"el casero", src:"the landlord", pos:"noun", gender:"m", note:"Male form. Female: la casera.\nFrom casa (house). The person who owns your rental.", example:"A: ¿Tu casero es buena persona?\nB: Sí, arregla todo muy rápido.", exampleSrc:"A: Is your landlord a good person?\nB: Yes, he fixes everything very quickly.", funFact:"Casero also means 'homemade' as an adjective: comida casera (homemade food). Two meanings, one word."},

  {type:"teach", trg:"el aspirante", src:"the candidate / applicant", pos:"noun", gender:"m", note:"Male or female: el/la aspirante.\nSomeone who aspires to a position.", example:"A: Hay veinte aspirantes para el puesto.\nB: La competencia va a ser dura.", exampleSrc:"A: There are twenty applicants for the position.\nB: The competition is going to be tough.", funFact:"From Latin aspirare (to breathe toward). An aspirante 'breathes toward' their goal."},

  {type:"teach", trg:"el concursante", src:"the contestant", pos:"noun", gender:"m", note:"Male or female: el/la concursante.\nFrom concurso (contest, competition).", example:"A: La concursante de Sevilla ganó el primer premio.\nB: ¡Se lo merecía, fue brillante!", exampleSrc:"A: The contestant from Seville won first prize.\nB: She deserved it, she was brilliant!", funFact:"Concurso can mean both a competition and a public tender for contracts. Context decides."},

  {type:"mc", q:"Un aspirante es alguien que...", opts:["aspira a conseguir un puesto","administra un edificio","diseña logotipos","conduce un autobús"], ans:"aspira a conseguir un puesto", hint:"The word shares its root with 'aspire' in English."},

  {type:"teach", trg:"el basurero", src:"the waste collector / rubbish bin", pos:"noun", gender:"m", note:"Double meaning: the person who collects rubbish, or the bin itself.\nFrom basura (rubbish).", example:"A: ¿A qué hora pasa el basurero?\nB: A las ocho de la noche, como siempre.", exampleSrc:"A: What time does the waste collector come?\nB: At eight in the evening, as always.", funFact:"In some Latin American countries, basurero means the rubbish dump itself. In Spain, vertedero is more common for that."},

  {type:"match", pairs:[{trg:"administrador", src:"administrator"},{trg:"desarrollador", src:"developer"},{trg:"barrendero", src:"street sweeper"},{trg:"carpintero", src:"carpenter"},{trg:"casero", src:"landlord"}]},

  {type:"fb", s:"La {1} del club de fútbol ha decidido contratar un nuevo entrenador.", a:["directiva"], opts:["directiva","carpintería","aspirante","conductor"], hint:"The governing board of an organization makes high-level decisions.", sSrc:"The {1} of the football club has decided to hire a new coach."},

  {type:"mc", q:"¿Qué significa 'carpintería'?", opts:["Un taller donde se trabaja la madera","Una tienda de zapatos","Una oficina de abogados","Un restaurante familiar"], ans:"Un taller donde se trabaja la madera", hint:"The -ería suffix marks a trade or its shop. Think about what a carpintero does."},

  {type:"fb", s:"Hay diez {1} para la plaza de coordinador.", a:["aspirantes"], opts:["aspirantes","carpinteros","conductores","caseros"], hint:"People who are applying and hoping to get a position.", sSrc:"There are ten {1} for the coordinator position."},

  {type:"mc", q:"¿Cuál de estas palabras tiene dos significados muy diferentes?", opts:["El casero: propietario y comida hecha en casa","El carpintero: trabajador y herramienta","El barrendero: empleado y escoba","El aspirante: candidato y aspiradora"], ans:"El casero: propietario y comida hecha en casa", hint:"One word can describe both a property owner and a style of cooking."}
]};

export default LESSON_1;
