// B2 Gap Lesson 16 - People & Roles
const LESSON_16 = {id:"esv2_b2gap_l16",title:"Personas y roles",icon:"👥",xp:15,board:true,steps:[
{type:"intro",title:"Personas y roles",desc:"Learn vocabulary for professions, social roles, and types of people in Spanish society.",goals:["Learn 20 words for people and roles","Describe occupations and social types","Distinguish formal and colloquial terms"]},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A grown person.\nFeminine: la adulta. Also used as adjective.",
 example:"A: Los adultos pagan entrada completa.\nB: Los niños menores de doce entran gratis.",
 exampleSrc:"A: Adults pay full admission.\nB: Children under twelve enter free.",
 funFact:"From Latin adultus (grown up). Spain's legal age of majority is 18 years old."},

{type:"teach",trg:"el agente",src:"the agent",pos:"noun",gender:"m",
 note:"Common gender noun. La agente for feminine.\nCan be police, real estate, or business agent.",
 example:"A: El agente de policía nos pidió la documentación.\nB: Todo estaba en orden, por suerte.",
 exampleSrc:"A: The police officer asked us for our documents.\nB: Everything was in order, luckily.",
 funFact:"From Latin agens (one who acts). 'Agente inmobiliario' is a real estate agent."},

{type:"teach",trg:"el albañil",src:"the bricklayer / mason",pos:"noun",gender:"m",
 note:"Masculine noun. A construction worker who builds with bricks.\nFeminine: la albañil.",
 example:"A: El albañil terminó la pared en dos días.\nB: Hizo un trabajo impecable.",
 exampleSrc:"A: The bricklayer finished the wall in two days.\nB: He did an impeccable job.",
 funFact:"From Arabic al-banni (the builder). One of many Spanish trade words from Arabic."},

{type:"teach",trg:"el acupuntor",src:"the acupuncturist",pos:"noun",gender:"m",
 note:"Masculine noun. A practitioner of acupuncture.\nFeminine: la acupuntora.",
 example:"A: El acupuntor me alivió el dolor de espalda.\nB: ¿En serio? Yo nunca he probado la acupuntura.",
 exampleSrc:"A: The acupuncturist relieved my back pain.\nB: Really? I have never tried acupuncture.",
 funFact:"Acupuncture has grown hugely in Spain since the 2000s, though it is not covered by public health."},

{type:"teach",trg:"el astrónomo",src:"the astronomer",pos:"noun",gender:"m",
 note:"Masculine noun. A scientist who studies celestial bodies.\nFeminine: la astrónoma.",
 example:"A: El astrónomo descubrió un nuevo asteroide.\nB: Le pusieron su nombre en honor al hallazgo.",
 exampleSrc:"A: The astronomer discovered a new asteroid.\nB: They named it after him in honor of the discovery.",
 funFact:"Spain's Canary Islands have world-class astronomical observatories due to exceptionally clear skies."},

{type:"mc",q:"Un trabajador de la construcción que trabaja con ladrillos es:",opts:["un albañil","un acupuntor","un astrónomo","un agente"],ans:"un albañil",hint:"This Arabic-origin word describes someone who builds with bricks and mortar."},

{type:"teach",trg:"el ateo",src:"the atheist",pos:"noun",gender:"m",
 note:"Masculine noun. A person who does not believe in God.\nFeminine: la atea.",
 example:"A: Se declara ateo desde su juventud.\nB: Respeta las creencias de los demás.",
 exampleSrc:"A: He has declared himself an atheist since his youth.\nB: He respects others' beliefs.",
 funFact:"From Greek atheos (without god). Spain has become increasingly secular since the 1980s."},

{type:"teach",trg:"el barman",src:"the bartender",pos:"noun",gender:"m",
 note:"Masculine noun. A person who serves drinks at a bar.\nPlural: los bármanes.",
 example:"A: El barman preparó un cóctel espectacular.\nB: Con frutas frescas y hielo picado.",
 exampleSrc:"A: The bartender prepared a spectacular cocktail.\nB: With fresh fruit and crushed ice.",
 funFact:"English loanword. In everyday Spanish, 'camarero' is more common for bar and restaurant staff."},

{type:"teach",trg:"el bedel",src:"the school caretaker / porter",pos:"noun",gender:"m",
 note:"Masculine noun. The person who maintains a school or university building.\nFeminine: la bedela.",
 example:"A: El bedel abre el instituto a las siete de la mañana.\nB: Es el primero en llegar cada día.",
 exampleSrc:"A: The caretaker opens the school at seven in the morning.\nB: He is the first to arrive every day.",
 funFact:"From Germanic bidell (messenger). Every Spanish school and university has 'bedeles'."},

{type:"teach",trg:"el compatriota",src:"the compatriot",pos:"noun",gender:"m",
 note:"Common gender noun. A person from the same country.\nLa compatriota for feminine.",
 example:"A: Encontré a un compatriota en Tokio.\nB: Qué casualidad, tan lejos de casa.",
 exampleSrc:"A: I found a compatriot in Tokyo.\nB: What a coincidence, so far from home.",
 funFact:"Com- (together) + patriota (from the same homeland). Instant bonding when abroad."},

{type:"fb",s:"El {1} preparó las mejores tapas que he probado.",a:["barman"],opts:["barman","bedel","albañil","acupuntor"],hint:"The person who serves drinks behind a bar counter.",sSrc:"The {1} prepared the best tapas I have ever tried."},

{type:"teach",trg:"el cochero",src:"the coachman / driver",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who drives a horse-drawn carriage.\nFeminine: la cochera (also: garage).",
 example:"A: El cochero llevaba a los caballos por el parque.\nB: Es un paseo turístico muy popular.",
 exampleSrc:"A: The coachman led the horses through the park.\nB: It is a very popular tourist ride.",
 funFact:"From coche (carriage, then car). 'La cochera' also means garage or bus depot."},

{type:"teach",trg:"el colegiado",src:"the registered professional / referee",pos:"noun",gender:"m",
 note:"Masculine noun. A professional in an official association, or a sports referee.\nFeminine: la colegiada.",
 example:"A: El colegiado dio un penalti muy polémico.\nB: Todo el estadio protestó la decisión.",
 exampleSrc:"A: The referee gave a very controversial penalty.\nB: The entire stadium protested the decision.",
 funFact:"From colegio profesional. In Spanish football, referees are always called 'el colegiado'."},

{type:"teach",trg:"el colegial",src:"the schoolchild",pos:"noun",gender:"m",
 note:"Masculine noun. A student at a primary or secondary school.\nFeminine: la colegiala.",
 example:"A: Los colegiales llevan uniforme en muchos centros.\nB: Es más común en los colegios privados.",
 exampleSrc:"A: Schoolchildren wear uniforms in many schools.\nB: It is more common in private schools.",
 funFact:"From colegio (school). 'Colegiala' also appears in a famous Latin song from the 1980s."},

{type:"teach",trg:"el conferenciante",src:"the lecturer / speaker",pos:"noun",gender:"m",
 note:"Common gender noun. Someone who gives a lecture or talk.\nLa conferenciante for feminine.",
 example:"A: La conferenciante mantuvo al público atento durante una hora.\nB: Habló con mucha pasión sobre el cambio climático.",
 exampleSrc:"A: The speaker kept the audience engaged for an hour.\nB: She spoke passionately about climate change.",
 funFact:"From conferencia (lecture/conference). A more formal word than 'ponente' (presenter)."},

{type:"mc",q:"En un partido de fútbol, el árbitro también se llama:",opts:["el bedel","el colegiado","el colegial","el compatriota"],ans:"el colegiado",hint:"A person registered in an official professional association."},

{type:"teach",trg:"el brasileño",src:"the Brazilian",pos:"noun",gender:"m",
 note:"Masculine noun. A person from Brazil.\nFeminine: la brasileña.",
 example:"A: Hay una comunidad brasileña grande en Madrid.\nB: Muchos trabajan en hostelería y comercio.",
 exampleSrc:"A: There is a large Brazilian community in Madrid.\nB: Many work in hospitality and commerce.",
 funFact:"The largest Latin American immigrant communities in Spain are from Colombia, Ecuador, and Brazil."},

{type:"teach",trg:"el anglosajón",src:"the Anglo-Saxon",pos:"noun",gender:"m",
 note:"Masculine noun. A person from English-speaking culture.\nFeminine: la anglosajona. Also adjective.",
 example:"A: La cultura anglosajona tiene mucha influencia global.\nB: Especialmente a través del cine y la música.",
 exampleSrc:"A: Anglo-Saxon culture has a lot of global influence.\nB: Especially through cinema and music.",
 funFact:"In Spanish, 'anglosajón' broadly means 'English-speaking world', not just historical Anglo-Saxons."},

{type:"teach",trg:"el anglófono",src:"the English speaker",pos:"noun",gender:"m",
 note:"Masculine noun. Someone whose language is English.\nFeminine: la anglófona.",
 example:"A: La conferencia es para anglófonos y hispanohablantes.\nB: Habrá traducción simultánea.",
 exampleSrc:"A: The conference is for English speakers and Spanish speakers.\nB: There will be simultaneous translation.",
 funFact:"-fono comes from Greek phone (voice). Hispanófono, francófono, lusófono follow the same pattern."},

{type:"teach",trg:"el burlador",src:"the trickster / seducer",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who mocks or seduces.\nFeminine: la burladora.",
 example:"A: Don Juan era el burlador más famoso de la literatura.\nB: Engañaba a todas las mujeres que conocía.",
 exampleSrc:"A: Don Juan was the most famous seducer in literature.\nB: He deceived every woman he met.",
 funFact:"'El Burlador de Sevilla' (1630) by Tirso de Molina created the Don Juan archetype."},

{type:"teach",trg:"el católico",src:"the Catholic",pos:"noun",gender:"m",
 note:"Masculine noun. A follower of Catholicism.\nFeminine: la católica. Also adjective.",
 example:"A: España es históricamente un país católico.\nB: Aunque cada vez hay más diversidad religiosa.",
 exampleSrc:"A: Spain is historically a Catholic country.\nB: Although there is increasing religious diversity.",
 funFact:"The 'Reyes Católicos' (Catholic Monarchs) Ferdinand and Isabella united Spain in 1492."},

{type:"fb",s:"Encontré a un {1} en el aeropuerto de Bangkok.",a:["compatriota"],opts:["compatriota","anglosajón","brasileño","católico"],hint:"Someone from your same home country, found unexpectedly abroad.",sSrc:"I found a {1} at the Bangkok airport."},

{type:"mc",q:"El personaje literario Don Juan es famoso por ser un:",opts:["albañil","bedel","burlador","conferenciante"],ans:"burlador",hint:"A trickster and seducer from classic Spanish literature."},

{type:"match",pairs:[{trg:"albañil",src:"bricklayer"},{trg:"bedel",src:"school caretaker"},{trg:"colegiado",src:"referee"},{trg:"conferenciante",src:"speaker"},{trg:"burlador",src:"trickster"}]},

{type:"fb",s:"Los {1} llevan uniforme en muchos centros educativos.",a:["colegiales"],opts:["colegiales","colegiados","conferenciantes","compatriotas"],hint:"Young students who attend primary or secondary school.",sSrc:"The {1} wear uniforms in many educational centers."},

{type:"mc",q:"'Anglófono' significa una persona que habla:",opts:["Portugués","Francés","Español","Inglés"],ans:"Inglés",hint:"The prefix 'anglo-' refers to English, and '-fono' means speaker."}
]};

export default LESSON_16;
