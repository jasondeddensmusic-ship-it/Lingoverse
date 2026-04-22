// B2 Gap Lesson 08 - Actions & Change I
const LESSON_8 = {id:"esv2_b2gap_l8",title:"Acciones y cambio I",icon:"🔄",xp:15,board:true,steps:[
{type:"intro",title:"Acciones y cambio I",desc:"Learn verbs about transformation, influence, and taking action in various contexts.",goals:["Learn 20 verbs and verbal expressions","Describe processes of change","Use formal and informal registers"]},

{type:"teach",trg:"acontecer",src:"to happen / to occur",pos:"verb",gender:null,
 note:"Irregular like conocer. Formal synonym of 'ocurrir' or 'pasar'.\nUsed mainly in 3rd person.",
 example:"A: ¿Qué aconteció durante la reunión?\nB: Se tomaron decisiones muy importantes.",
 exampleSrc:"A: What happened during the meeting?\nB: Very important decisions were made.",
 funFact:"Very literary. Newspapers love 'los acontecimientos' (events) for serious reporting."},

{type:"teach",trg:"acopiar",src:"to stock up / to gather",pos:"verb",gender:null,
 note:"Regular -ar verb. To accumulate supplies or resources.",
 example:"A: Hay que acopiar provisiones antes del invierno.\nB: Ya tenemos suficiente leña.",
 exampleSrc:"A: We need to stock up on supplies before winter.\nB: We already have enough firewood.",
 funFact:"From Latin ad- + copia (abundance). 'Acopio' (the noun) means stockpile or reserve."},

{type:"teach",trg:"adscribir",src:"to assign / to attach",pos:"verb",gender:null,
 note:"Irregular like escribir. Past participle: adscrito.\nFormal verb for official assignments.",
 example:"A: Le adscribieron al departamento de investigación.\nB: Es donde mejor encajan sus habilidades.",
 exampleSrc:"A: He was assigned to the research department.\nB: That is where his skills fit best.",
 funFact:"From Latin adscribere (to write next to). Bureaucratic Spanish loves this verb."},

{type:"teach",trg:"afiliar",src:"to affiliate / to enroll",pos:"verb",gender:null,
 note:"Regular -ar verb. To join an organization.\nReflexive: afiliarse a.",
 example:"A: Se afilió al sindicato el mes pasado.\nB: Cree que es importante la negociación colectiva.",
 exampleSrc:"A: He joined the union last month.\nB: He believes collective bargaining is important.",
 funFact:"From Latin affiliare (to adopt as a son). Trade unions in Spain are called 'sindicatos'."},

{type:"teach",trg:"afinar",src:"to tune / to refine",pos:"verb",gender:null,
 note:"Regular -ar verb. To tune an instrument or refine something.",
 example:"A: Hay que afinar la guitarra antes del concierto.\nB: Dame un momento, ya casi está.",
 exampleSrc:"A: We need to tune the guitar before the concert.\nB: Give me a moment, it is almost done.",
 funFact:"From fino (fine). To 'afinar' is to make something finer, more precise, or more in tune."},

{type:"mc",q:"¿Qué significa 'acontecer'?",opts:["Ocurrir","Cantar","Escribir","Dormir"],ans:"Ocurrir",hint:"A formal way to say something happened or took place."},

{type:"teach",trg:"agilidad",src:"the agility",pos:"noun",gender:"f",
 note:"Feminine noun. Quickness and ease of movement.",
 example:"A: La agilidad mental es clave en el ajedrez.\nB: Hay que pensar rápido bajo presión.",
 exampleSrc:"A: Mental agility is key in chess.\nB: You need to think fast under pressure.",
 funFact:"From Latin agilitas. Used for both physical and mental quickness in Spanish."},

{type:"teach",trg:"aglomerar",src:"to crowd together / to agglomerate",pos:"verb",gender:null,
 note:"Regular -ar verb. To gather in a mass.\nReflexive: aglomerarse.",
 example:"A: La gente se aglomeró en la entrada del estadio.\nB: Fue una situación peligrosa.",
 exampleSrc:"A: People crowded together at the stadium entrance.\nB: It was a dangerous situation.",
 funFact:"From Latin agglomerare (to wind into a ball). Urban sprawl is called 'aglomeración urbana'."},

{type:"teach",trg:"agigantar",src:"to make gigantic / to magnify",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something seem enormous.\nReflexive: agigantarse.",
 example:"A: Los medios agigantaron la noticia.\nB: En realidad no fue para tanto.",
 exampleSrc:"A: The media magnified the news.\nB: In reality it was not that big a deal.",
 funFact:"From gigante (giant). A vivid verb: to 'giant-ize' something is to blow it out of proportion."},

{type:"teach",trg:"alardear",src:"to boast / to show off",pos:"verb",gender:null,
 note:"Regular -ar verb. To brag about something.\nAlardear de + noun/adjective.",
 example:"A: Siempre alardea de su colección de coches.\nB: Es un poco pesado con el tema.",
 exampleSrc:"A: He always boasts about his car collection.\nB: He is a bit tiresome about it.",
 funFact:"From alarde (display). Originally a military review where troops showed off their readiness."},

{type:"fb",s:"Los medios {1} el problema con titulares exagerados.",a:["agigantaron"],opts:["agigantaron","acopiaron","afinaron","afiliaron"],hint:"To make something seem much bigger than it really is.",sSrc:"The media {1} the problem with exaggerated headlines."},

{type:"teach",trg:"alisar",src:"to smooth / to straighten",pos:"verb",gender:null,
 note:"Regular -ar verb. To make a surface smooth or flat.",
 example:"A: Se alisa el pelo todas las mañanas.\nB: Le queda muy bien liso.",
 exampleSrc:"A: She straightens her hair every morning.\nB: It looks very good straight.",
 funFact:"From liso (smooth). 'Alisado' is the noun for hair straightening treatment."},

{type:"teach",trg:"alternar",src:"to alternate / to socialize",pos:"verb",gender:null,
 note:"Regular -ar verb. Two meanings: to take turns, or to go out socially.",
 example:"A: Le gusta alternar con gente interesante.\nB: Va a muchas fiestas y eventos.",
 exampleSrc:"A: He likes to socialize with interesting people.\nB: He goes to many parties and events.",
 funFact:"'Zona de alterne' refers to nightlife areas. The social meaning is uniquely Spanish."},

{type:"teach",trg:"anexionar",src:"to annex",pos:"verb",gender:null,
 note:"Regular -ar verb. To incorporate territory.\nReflexive: anexionarse.",
 example:"A: El imperio anexionó varios territorios vecinos.\nB: Fue una expansión muy rápida.",
 exampleSrc:"A: The empire annexed several neighboring territories.\nB: It was a very rapid expansion.",
 funFact:"From Latin annexio. Spain's history includes both annexations and losses of territory."},

{type:"teach",trg:"angustiar",src:"to distress / to cause anguish",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause deep worry.\nReflexive: angustiarse.",
 example:"A: La noticia angustió a toda la familia.\nB: Afortunadamente, todo se resolvió bien.",
 exampleSrc:"A: The news distressed the entire family.\nB: Fortunately, everything was resolved well.",
 funFact:"From Latin angustia (narrowness). Anguish feels like the world closing in on you."},

{type:"mc",q:"'Alardear de algo' significa:",opts:["Regalarlo","Presumir de ello","Preocuparse por ello","Esconderlo"],ans:"Presumir de ello",hint:"Showing off or bragging about a possession or achievement."},

{type:"teach",trg:"apenar",src:"to sadden / to cause sorrow",pos:"verb",gender:null,
 note:"Regular -ar verb. To make someone feel sad.\nReflexive: apenarse.",
 example:"A: Me apena mucho la situación.\nB: A todos nos entristece lo que ha pasado.",
 exampleSrc:"A: The situation saddens me a lot.\nB: We are all saddened by what happened.",
 funFact:"From pena (grief/sorrow). In Mexico, 'me apena' also means 'I am embarrassed'."},

{type:"teach",trg:"atormentar",src:"to torment",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause great suffering.\nReflexive: atormentarse.",
 example:"A: Los recuerdos lo atormentaban cada noche.\nB: Necesitaba hablar con un profesional.",
 exampleSrc:"A: The memories tormented him every night.\nB: He needed to talk to a professional.",
 funFact:"From tormento (torment), from Latin tormentum (instrument of torture). Intensely dramatic."},

{type:"teach",trg:"asemejar",src:"to resemble / to liken",pos:"verb",gender:null,
 note:"Regular -ar verb. To look similar to.\nReflexive: asemejarse a.",
 example:"A: Se asemeja mucho a su madre.\nB: Sí, tienen los mismos ojos.",
 exampleSrc:"A: She resembles her mother a lot.\nB: Yes, they have the same eyes.",
 funFact:"From semejante (similar). A more elegant synonym of 'parecerse a'."},

{type:"teach",trg:"asimilar",src:"to assimilate / to absorb",pos:"verb",gender:null,
 note:"Regular -ar verb. To take in and understand new information.",
 example:"A: Necesito tiempo para asimilar la noticia.\nB: Es normal, ha sido un golpe fuerte.",
 exampleSrc:"A: I need time to assimilate the news.\nB: It is normal, it has been a big blow.",
 funFact:"From Latin assimilare (to make similar). Used for cultural integration and learning alike."},

{type:"teach",trg:"asomar",src:"to peep out / to appear",pos:"verb",gender:null,
 note:"Regular -ar verb. To show partially, to peek.\nReflexive: asomarse (to lean out).",
 example:"A: Se asomó por la ventana para ver quién llamaba.\nB: Era el cartero con un paquete.",
 exampleSrc:"A: She leaned out the window to see who was calling.\nB: It was the postman with a package.",
 funFact:"Signs on Spanish balconies often say 'Prohibido asomarse' (Do not lean out)."},

{type:"fb",s:"Se {1} por la ventana y vio que llovía a cántaros.",a:["asomó"],opts:["asomó","angustió","apenó","atormentó"],hint:"To peek or lean out from a window to look outside.",sSrc:"He/she {1} out of the window and saw it was pouring."},

{type:"mc",q:"¿Qué significa 'asimilar una noticia'?",opts:["Inventarla","Rechazarla","Procesarla y aceptarla","Difundirla"],ans:"Procesarla y aceptarla",hint:"To take in the information and come to terms with it."},

{type:"match",pairs:[{trg:"acontecer",src:"to happen"},{trg:"alardear",src:"to boast"},{trg:"angustiar",src:"to distress"},{trg:"asomar",src:"to peep out"},{trg:"afinar",src:"to tune"}]},

{type:"fb",s:"Siempre {1} de sus logros deportivos.",a:["alardea"],opts:["alardea","afina","asimila","acontece"],hint:"To brag or show off about something you are proud of.",sSrc:"He always {1} about his sporting achievements."},

{type:"mc",q:"'Afinar la guitarra' significa:",opts:["Comprar una nueva","Tocar una canción","Romperla","Ajustar las cuerdas para que suene bien"],ans:"Ajustar las cuerdas para que suene bien",hint:"Making the instrument sound correct by adjusting its tuning."}
]};

export default LESSON_8;
