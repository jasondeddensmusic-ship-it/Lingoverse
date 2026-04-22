// B2 Gap Lesson 15 - Time & Manner
const LESSON_15 = {id:"esv2_b2gap_l15",title:"Tiempo y manera",icon:"⏳",xp:15,board:true,steps:[
{type:"intro",title:"Tiempo y manera",desc:"Learn adverbs and expressions for time, manner, and circumstance at B2 level.",goals:["Learn 20 time and manner words","Express 'when' and 'how' precisely","Use formal adverbs in context"]},

{type:"teach",trg:"a la moda",src:"fashionably / in style",pos:"adv",gender:null,
 note:"Adverbial expression. Following current fashion trends.",
 example:"A: Siempre va vestida a la moda.\nB: Se gasta una fortuna en ropa.",
 exampleSrc:"A: She always dresses fashionably.\nB: She spends a fortune on clothes.",
 funFact:"'Moda' comes from Latin modus (way/manner). Spain's Zara made 'fast fashion' global."},

{type:"teach",trg:"a partir de",src:"from / starting from",pos:"prep",gender:null,
 note:"Prepositional phrase. Indicates a starting point in time or quantity.",
 example:"A: A partir de mañana, el horario cambia.\nB: Abriremos una hora antes.",
 exampleSrc:"A: Starting from tomorrow, the schedule changes.\nB: We will open one hour earlier.",
 funFact:"Literally 'from the point of departure'. Essential in formal Spanish for dates and thresholds."},

{type:"teach",trg:"adrede",src:"on purpose / deliberately",pos:"adv",gender:null,
 note:"Adverb. Intentionally, not by accident.",
 example:"A: Lo hizo adrede para molestarme.\nB: No creo, seguro que fue sin querer.",
 exampleSrc:"A: He did it on purpose to annoy me.\nB: I do not think so, I am sure it was unintentional.",
 funFact:"From Latin ad directum (toward the direct/intended). A wonderfully old word still in daily use."},

{type:"teach",trg:"antaño",src:"in the past / long ago",pos:"adv",gender:null,
 note:"Adverb. In former times. Literary and nostalgic.",
 example:"A: Antaño, estas calles estaban llenas de artesanos.\nB: Ahora son todo tiendas de turistas.",
 exampleSrc:"A: Long ago, these streets were full of craftsmen.\nB: Now they are all tourist shops.",
 funFact:"From Latin ante annum (before the year). 'Las nieves de antaño' (the snows of yesteryear)."},

{type:"teach",trg:"anteayer",src:"the day before yesterday",pos:"adv",gender:null,
 note:"Adverb. Two days ago. Written as one word.",
 example:"A: Anteayer llovió sin parar.\nB: Sí, fue un día horrible para salir.",
 exampleSrc:"A: The day before yesterday it rained non-stop.\nB: Yes, it was a horrible day to go out.",
 funFact:"Ante- (before) + ayer (yesterday). Some regions also use 'antes de ayer' as two words."},

{type:"mc",q:"Si alguien hace algo 'adrede', lo hace:",opts:["A propósito","Con miedo","Sin pensar","Por accidente"],ans:"A propósito",hint:"The opposite of accidentally, with clear intention."},

{type:"teach",trg:"como que no",src:"as if not / yeah right",pos:"adv",gender:null,
 note:"Colloquial expression. Expresses disbelief or sarcasm.",
 example:"A: Dice que no sabía nada del tema.\nB: ¡Como que no! Lo sabía perfectamente.",
 exampleSrc:"A: He says he did not know anything about it.\nB: Yeah right! He knew perfectly well.",
 funFact:"Very colloquial and emphatic. Used to challenge someone's claim of ignorance."},

{type:"teach",trg:"el antecedente",src:"the precedent / background",pos:"noun",gender:"m",
 note:"Masculine noun. Something that came before, or a person's record.",
 example:"A: No hay antecedentes de este tipo de problema.\nB: Es la primera vez que ocurre.",
 exampleSrc:"A: There are no precedents for this type of problem.\nB: It is the first time it has occurred.",
 funFact:"'Antecedentes penales' (criminal record) is checked for many jobs in Spain."},

{type:"teach",trg:"el antecesor",src:"the predecessor / ancestor",pos:"noun",gender:"m",
 note:"Masculine noun. The person who came before.\nFeminine: la antecesora.",
 example:"A: Mi antecesor en el puesto dejó todo muy organizado.\nB: Facilita mucho empezar.",
 exampleSrc:"A: My predecessor in the position left everything very organized.\nB: It makes starting much easier.",
 funFact:"From Latin antecessor. Can mean both a job predecessor and a biological ancestor."},

{type:"teach",trg:"la celeridad",src:"the speed / swiftness",pos:"noun",gender:"f",
 note:"Feminine noun. Formal word for speed or rapidity.",
 example:"A: Actuaron con celeridad ante la emergencia.\nB: Los bomberos llegaron en cinco minutos.",
 exampleSrc:"A: They acted with swiftness in the emergency.\nB: The firefighters arrived in five minutes.",
 funFact:"From Latin celeritas. Very formal. Everyday Spanish uses 'rapidez' instead."},

{type:"teach",trg:"la barbaridad",src:"the outrage / enormous amount",pos:"noun",gender:"f",
 note:"Feminine noun. Something excessive or shocking.\nColloquial: a huge amount.",
 example:"A: Costó una barbaridad arreglar el tejado.\nB: Más de diez mil euros.",
 exampleSrc:"A: It cost a fortune to fix the roof.\nB: More than ten thousand euros.",
 funFact:"'Qué barbaridad' is one of Spain's most common exclamations of surprise or disapproval."},

{type:"fb",s:"{1} mañana, el precio del transporte público sube.",a:["A partir de"],opts:["A partir de","Adrede","Antaño","Anteayer"],hint:"An expression meaning 'starting from' a certain point in time.",sSrc:"{1} tomorrow, the price of public transport goes up."},

{type:"teach",trg:"la bofetada",src:"the slap (in the face)",pos:"noun",gender:"f",
 note:"Feminine noun. A slap across the face.",
 example:"A: La noticia fue como una bofetada de realidad.\nB: Nos hizo reaccionar inmediatamente.",
 exampleSrc:"A: The news was like a slap of reality.\nB: It made us react immediately.",
 funFact:"Often used figuratively: 'bofetada de realidad' (reality check). Very expressive."},

{type:"teach",trg:"el bandazo",src:"the sudden swerve / lurch",pos:"noun",gender:"m",
 note:"Masculine noun. A sudden change of direction.\nAlso figurative: a policy flip-flop.",
 example:"A: El gobierno da bandazos con la política fiscal.\nB: Cambia de opinión cada dos meses.",
 exampleSrc:"A: The government keeps lurching on fiscal policy.\nB: It changes its mind every two months.",
 funFact:"From banda (side). 'Dar bandazos' means to swerve wildly, literally or in decisions."},

{type:"teach",trg:"el ajetreo",src:"the hustle and bustle",pos:"noun",gender:"m",
 note:"Masculine noun. Frantic activity and rushing around.",
 example:"A: El ajetreo de las Navidades me agota.\nB: A mí también, son semanas muy intensas.",
 exampleSrc:"A: The hustle and bustle of Christmas exhausts me.\nB: Me too, they are very intense weeks.",
 funFact:"From ajetrear (to wear out with rushing). Perfectly captures the chaos of busy times."},

{type:"teach",trg:"el abandono",src:"the abandonment",pos:"noun",gender:"m",
 note:"Masculine noun. The act of leaving or giving up something.",
 example:"A: El abandono de los pueblos rurales es un problema.\nB: Cada vez queda menos gente joven.",
 exampleSrc:"A: The abandonment of rural villages is a problem.\nB: There are fewer and fewer young people left.",
 funFact:"'España vaciada' (emptied Spain) describes rural depopulation, driven by 'abandono' of villages."},

{type:"mc",q:"'Qué barbaridad' se usa para expresar:",opts:["Alegría","Sorpresa o indignación","Tristeza profunda","Indiferencia"],ans:"Sorpresa o indignación",hint:"A strong exclamation when something is shocking or excessive."},

{type:"teach",trg:"el bautismo",src:"the baptism",pos:"noun",gender:"m",
 note:"Masculine noun. The Christian sacrament or a first experience.",
 example:"A: Su bautismo de fuego en la empresa fue intenso.\nB: Le dieron un proyecto difícil desde el primer día.",
 exampleSrc:"A: His baptism of fire at the company was intense.\nB: They gave him a difficult project from day one.",
 funFact:"'Bautismo de fuego' (baptism of fire) means a first difficult experience, from military usage."},

{type:"teach",trg:"la cachaza",src:"the sluggishness / calmness",pos:"noun",gender:"f",
 note:"Feminine noun. Excessive calmness or slowness.",
 example:"A: Se toma las cosas con mucha cachaza.\nB: Nada le pone nervioso, para bien o para mal.",
 exampleSrc:"A: He takes things with a lot of calmness.\nB: Nothing makes him nervous, for better or worse.",
 funFact:"From Portuguese cachaça. In Spain, 'tener cachaza' means being unflappably slow and patient."},

{type:"teach",trg:"autosuficiente",src:"self-sufficient",pos:"adj",gender:null,
 note:"Adjective. Able to provide for oneself without outside help.",
 example:"A: El pueblo es casi autosuficiente en alimentos.\nB: Cultivan todo lo que necesitan.",
 exampleSrc:"A: The village is almost self-sufficient in food.\nB: They grow everything they need.",
 funFact:"Auto- (self) + suficiente. Spain promotes 'autoconsumo energético' (energy self-sufficiency)."},

{type:"teach",trg:"confortable",src:"comfortable",pos:"adj",gender:null,
 note:"Adjective. Providing physical comfort. Invariable for gender.\nFalse friend: less common than 'cómodo'.",
 example:"A: La habitación del hotel es muy confortable.\nB: Tiene una cama enorme y buenas vistas.",
 exampleSrc:"A: The hotel room is very comfortable.\nB: It has a huge bed and good views.",
 funFact:"From French confortable. In Spanish, 'cómodo' is more common for everyday comfort."},

{type:"fb",s:"El {1} navideño dura desde noviembre hasta enero.",a:["ajetreo"],opts:["ajetreo","bandazo","abandono","bautismo"],hint:"The frantic rushing and busy activity of a hectic period.",sSrc:"The Christmas {1} lasts from November to January."},

{type:"mc",q:"'Bautismo de fuego' significa:",opts:["Un viaje largo","Una ceremonia religiosa","La primera experiencia difícil","Un incendio"],ans:"La primera experiencia difícil",hint:"Being thrown into a tough situation for the very first time."},

{type:"match",pairs:[{trg:"adrede",src:"on purpose"},{trg:"antaño",src:"long ago"},{trg:"celeridad",src:"swiftness"},{trg:"ajetreo",src:"hustle and bustle"},{trg:"cachaza",src:"sluggishness"}]},

{type:"fb",s:"{1}, estas tierras eran fértiles y estaban llenas de vida.",a:["Antaño"],opts:["Antaño","Anteayer","Adrede","A la moda"],hint:"A literary word meaning 'in the past' or 'long ago'.",sSrc:"{1}, these lands were fertile and full of life."},

{type:"mc",q:"El gobierno cambia de política fiscal constantemente. Da muchos:",opts:["ajetreos","bautismos","abandonos","bandazos"],ans:"bandazos",hint:"Sudden swerves or changes in direction, like a lurching vehicle."}
]};

export default LESSON_15;
