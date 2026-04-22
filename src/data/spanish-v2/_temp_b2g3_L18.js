// Spanish B2 Gap Batch 3 - Lesson 18: People & Roles in Society
// 15 teach cards + quizzes, max 30 steps

const LESSON_18 = {id:"esv2_b2g3_l18", title:"Personas y roles sociales", icon:"👥", xp:15, board:true, steps:[
  {type:"intro", title:"Personas y roles sociales", desc:"Learn vocabulary for describing people by their roles, beliefs, and social positions. From believers to compatriots, master the language of social identity.", goals:["Learn 15 social role terms","Describe people by their roles","Discuss social groups and identities"]},

  {type:"teach", trg:"el compatriota", src:"the compatriot / fellow citizen", pos:"noun", gender:"m", note:"Same form for m/f: el/la compatriota.\nCo- (together) + patriota (patriot).", example:"A: Encontró a un compatriota en el aeropuerto de Tokio.\nB: ¡Qué sorpresa! Se pusieron a hablar en español.", exampleSrc:"A: He found a fellow citizen at the Tokyo airport.\nB: What a surprise! They started talking in Spanish.", funFact:"Compatriota derives from Latin com- (together) + patria (homeland). Meeting a compatriota abroad creates instant connection."},

  {type:"teach", trg:"el artista", src:"the artist", pos:"noun", gender:"m", note:"Same form for m/f: el/la artista.\nCovers all types of creative professionals.", example:"A: Es una artista muy reconocida en el mundo de la escultura.\nB: Sus obras están en museos de todo el mundo.", exampleSrc:"A: She's a very renowned artist in the world of sculpture.\nB: Her works are in museums around the world.", funFact:"Words ending in -ista are gender-neutral in form: el/la artista, el/la periodista, el/la dentista. The article changes, the noun doesn't."},

  {type:"teach", trg:"el causante", src:"the person responsible / cause", pos:"noun", gender:"m", note:"Same form for m/f: el/la causante.\nThe person or thing that causes something.", example:"A: ¿Quién es el causante del accidente?\nB: Todavía se está investigando.", exampleSrc:"A: Who is the person responsible for the accident?\nB: It's still being investigated.", funFact:"The -ante suffix creates agent nouns from verbs: causar > causante, estudiar > estudiante, habitar > habitante."},

  {type:"teach", trg:"el creyente", src:"the believer", pos:"noun", gender:"m", note:"Same form for m/f: el/la creyente.\nFrom creer (to believe). Usually religious context.", example:"A: Es creyente pero no practica ninguna religión organizada.\nB: Mucha gente tiene una fe personal.", exampleSrc:"A: He's a believer but doesn't practice any organized religion.\nB: Many people have a personal faith.", funFact:"No creyente (non-believer) and creyente but no practicante (believer but non-practicing) are common social categories in Spain."},

  {type:"teach", trg:"el ateo", src:"the atheist", pos:"noun", gender:"m", note:"Male form. Female: la atea.\nFrom Greek a- (without) + theos (god).", example:"A: Se declara ateo desde los dieciocho años.\nB: En España es cada vez más común.", exampleSrc:"A: He has declared himself an atheist since age eighteen.\nB: In Spain it's increasingly common.", funFact:"Spain's atheist population has grown significantly. Surveys show over 30% of Spaniards now identify as non-religious."},

  {type:"teach", trg:"el adulto", src:"the adult", pos:"noun", gender:"m", note:"Male form. Female: la adulta.\nAlso adjective: una persona adulta.", example:"A: Los adultos también pueden aprender idiomas.\nB: Claro, nunca es tarde para empezar.", exampleSrc:"A: Adults can also learn languages.\nB: Of course, it's never too late to start.", funFact:"Adulto comes from the past participle of Latin adolere (to grow up). An adulto has finished growing. Adolescente is still growing."},

  {type:"mc", q:"Las palabras que terminan en -ista tienen...", opts:["La misma forma para masculino y femenino","Formas diferentes según el género","Solo forma masculina","Solo forma femenina"], ans:"La misma forma para masculino y femenino", hint:"Think of artista, periodista, dentista. The word itself doesn't change, only the article."},

  {type:"teach", trg:"el criado", src:"the servant", pos:"noun", gender:"m", note:"Male form. Female: la criada.\nFrom criar (to raise). One who was 'raised' in a household.", example:"A: En las novelas del siglo diecinueve los criados son personajes clave.\nB: Reflejan la estructura social de la época.", exampleSrc:"A: In nineteenth-century novels, servants are key characters.\nB: They reflect the social structure of the era.", funFact:"Criado literally means 'raised one'. Servants were often raised in the household from youth. The word preserves this feudal history."},

  {type:"teach", trg:"el agente", src:"the agent", pos:"noun", gender:"m", note:"Same form for m/f: el/la agente.\nPolice officer, business agent, or abstract cause.", example:"A: El agente de policía nos pidió la documentación.\nB: Todo estaba en orden, no hubo problemas.", exampleSrc:"A: The police officer asked us for our documents.\nB: Everything was in order, there were no problems.", funFact:"Agente comes from Latin agere (to act). An agente is someone who acts: police agents, real estate agents, secret agents."},

  {type:"teach", trg:"el antecesor", src:"the predecessor / ancestor", pos:"noun", gender:"m", note:"Male form. Female: la antecesora.\nAnte- (before) + cesor (one who goes).", example:"A: Mi antecesor en el puesto dejó todo muy bien organizado.\nB: Eso facilita mucho la transición.", exampleSrc:"A: My predecessor in the position left everything very well organized.\nB: That makes the transition much easier.", funFact:"Antecesor vs predecesor: both mean predecessor. Antecesor is more common in Spain, predecesor in formal/international contexts."},

  {type:"fb", s:"El {1} del accidente fue un conductor que se saltó un semáforo.", a:["causante"], opts:["causante","creyente","compatriota","antecesor"], hint:"The person directly responsible for causing an incident.", sSrc:"The {1} of the accident was a driver who ran a red light."},

  {type:"teach", trg:"el caudillo", src:"the strongman / leader", pos:"noun", gender:"m", note:"A charismatic, authoritarian leader.\nHistorically loaded term.", example:"A: Los caudillos latinoamericanos marcaron el siglo diecinueve.\nB: Fueron figuras muy controvertidas.", exampleSrc:"A: Latin American strongmen marked the nineteenth century.\nB: They were very controversial figures.", funFact:"From Latin capitellum (little head). The caudillo leads through personal charisma and force, not democratic mandate."},

  {type:"teach", trg:"el católico", src:"the Catholic", pos:"noun", gender:"m", note:"Male form. Female: la católica.\nAlso adjective: un país católico.", example:"A: España es históricamente un país católico.\nB: Aunque la práctica religiosa ha disminuido mucho.", exampleSrc:"A: Spain is historically a Catholic country.\nB: Although religious practice has decreased a lot.", funFact:"From Greek katholikos (universal). Spain was the champion of Catholicism for centuries. The Reyes Católicos unified the country under the faith."},

  {type:"teach", trg:"el denominador", src:"the denominator", pos:"noun", gender:"m", note:"The bottom number in a fraction.\nDenominador común = common denominator (also figurative).", example:"A: ¿Cuál es el denominador común de todos estos problemas?\nB: La falta de comunicación, sin duda.", exampleSrc:"A: What is the common denominator of all these problems?\nB: Lack of communication, without a doubt.", funFact:"Denominador común has jumped from maths into everyday speech. It means the shared factor underlying different situations."},

  {type:"mc", q:"¿Qué significa 'antecesor en el puesto'?", opts:["La persona que te contrató","La persona que tenía el trabajo antes que tú","Tu jefe actual","Tu compañero de oficina"], ans:"La persona que tenía el trabajo antes que tú", hint:"Ante- means 'before'. This person came before you in the same position."},

  {type:"match", pairs:[{trg:"compatriota", src:"fellow citizen"},{trg:"creyente", src:"believer"},{trg:"ateo", src:"atheist"},{trg:"antecesor", src:"predecessor"},{trg:"denominador", src:"denominator"}]},

  {type:"fb", s:"Encontré a una {1} en el avión y charlamos todo el vuelo.", a:["compatriota"], opts:["compatriota","artista","creyente","católica"], hint:"Someone from the same country as you, encountered abroad.", sSrc:"I met a {1} on the plane and we chatted the whole flight."},

  {type:"mc", q:"'Denominador común' en sentido figurado significa...", opts:["La solución perfecta","El primer paso de un proceso","El factor que todos los problemas comparten","El número más grande"], ans:"El factor que todos los problemas comparten", hint:"Borrowed from mathematics, it describes the shared element underlying multiple situations."},

  {type:"fb", s:"Mi {1} en la empresa dejó instrucciones muy claras.", a:["antecesor"], opts:["antecesor","causante","agente","adulto"], hint:"The person who held your position before you did.", sSrc:"My {1} at the company left very clear instructions."}
]};

export default LESSON_18;
