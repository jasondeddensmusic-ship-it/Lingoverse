// B2 Gap Batch B Lesson 10 — Politics & Government
const LESSON_10 = {id:"esv2_b2gB_l10",title:"Política y gobierno",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y gobierno",desc:"Master political and governmental vocabulary for understanding Spanish news and public discourse.",goals:["Learn 12 words about politics and government","Discuss governmental institutions","Navigate formal political vocabulary"]},

{type:"teach",trg:"la asamblea nacional",src:"the national assembly",pos:"noun",gender:"f",
 note:"Feminine compound. A legislative body.\nIn Spain, the equivalent is 'las Cortes Generales'.",
 example:"A: La asamblea nacional aprobó la nueva ley de educación.\nB: Hubo un debate intenso antes de la votación.",
 exampleSrc:"A: The national assembly approved the new education law.\nB: There was an intense debate before the vote.",
 funFact:"Spain's parliament, las Cortes Generales, is one of the oldest parliamentary institutions in Europe."},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. A political ideology of collective ownership.\nFrom Latin communis (shared).",
 example:"A: El comunismo tuvo una influencia importante en España durante el siglo XX.\nB: El Partido Comunista fue legalizado en 1977.",
 exampleSrc:"A: Communism had an important influence in Spain during the 20th century.\nB: The Communist Party was legalized in 1977.",
 funFact:"Santiago Carrillo's legalization of the PCE in 1977 was a key moment in Spain's transition to democracy."},

{type:"teach",trg:"el mitin",src:"the political rally / meeting",pos:"noun",gender:"m",
 note:"Masculine noun. A public political gathering.\nFrom English 'meeting'. Plural: mítines.",
 example:"A: El candidato organizó un mitin en la plaza mayor.\nB: Vinieron miles de personas a escucharlo.",
 exampleSrc:"A: The candidate organized a rally in the main square.\nB: Thousands of people came to listen to him.",
 funFact:"Borrowed from English 'meeting' in the 19th century. Spain adapted the spelling and pronunciation."},

{type:"teach",trg:"el orden del día",src:"the agenda / order of the day",pos:"noun",gender:"m",
 note:"Masculine compound. The list of topics for a meeting.\nVery formal register.",
 example:"A: El orden del día incluye cinco puntos importantes.\nB: Empezaremos por el presupuesto del próximo año.",
 exampleSrc:"A: The agenda includes five important items.\nB: We will start with next year's budget.",
 funFact:"In Spanish parliamentary procedure, only items on the 'orden del día' can be officially discussed."},

{type:"mc",q:"¿De qué idioma viene la palabra 'mitin'?",
 opts:["Del inglés (meeting)","Del francés (réunion)","Del latín (conventus)","Del árabe (majlis)"],
 ans:"Del inglés (meeting)",
 hint:"Think about a common English word for a gathering of people that sounds similar."},

{type:"teach",trg:"el líder",src:"the leader",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la líder or la lideresa.\nBorrowed from English 'leader'.",
 example:"A: La líder del partido dio una rueda de prensa.\nB: Anunció su candidatura a las elecciones.",
 exampleSrc:"A: The party leader gave a press conference.\nB: She announced her candidacy for the elections.",
 funFact:"Despite being an anglicism, 'líder' completely replaced the older Spanish 'caudillo' and 'jefe' in politics."},

{type:"teach",trg:"la internacionalización",src:"the internationalization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of becoming international.\nCommon in business and education.",
 example:"A: La internacionalización de las empresas españolas ha crecido mucho.\nB: Muchas operan en Latinoamérica y Europa.",
 exampleSrc:"A: The internationalization of Spanish companies has grown a lot.\nB: Many operate in Latin America and Europe.",
 funFact:"Spain's 'internacionalización' accelerated after joining the EU in 1986, especially in banking and telecoms."},

{type:"teach",trg:"la multiculturalidad",src:"the multiculturalism",pos:"noun",gender:"f",
 note:"Feminine noun. The coexistence of diverse cultures.\nFrom multi- (many) + cultura.",
 example:"A: La multiculturalidad enriquece a las sociedades.\nB: Aprendemos mucho de otras tradiciones y costumbres.",
 exampleSrc:"A: Multiculturalism enriches societies.\nB: We learn a lot from other traditions and customs.",
 funFact:"Spain's major cities have become increasingly multicultural since the 2000s immigration boom."},

{type:"fb",s:"El {1} incluía el debate sobre la reforma fiscal como primer punto.",
 a:["orden del día"],opts:["orden del día","mitin","comunismo","líder"],
 hint:"The formal document listing all topics to be discussed at a meeting.",
 sSrc:"The {1} included the debate on fiscal reform as the first item."},

{type:"teach",trg:"el oligopolio",src:"the oligopoly",pos:"noun",gender:"m",
 note:"Masculine noun. A market dominated by a few sellers.\nFrom Greek oligos (few) + polein (to sell).",
 example:"A: El mercado eléctrico en España es un oligopolio.\nB: Solo unas pocas empresas controlan la distribución.",
 exampleSrc:"A: The electricity market in Spain is an oligopoly.\nB: Only a few companies control distribution.",
 funFact:"Spain's energy market is often criticized as an oligopolio dominated by five major companies."},

{type:"teach",trg:"el católico",src:"the Catholic / Catholic person",pos:"noun",gender:"m",
 note:"Masculine noun/adj. Feminine: la católica.\nRelating to the Roman Catholic Church.",
 example:"A: España fue históricamente un país católico.\nB: Hoy la práctica religiosa ha disminuido mucho.",
 exampleSrc:"A: Spain was historically a Catholic country.\nB: Today religious practice has decreased a lot.",
 funFact:"The title 'Los Reyes Católicos' (Catholic Monarchs) was given to Ferdinand and Isabella by the Pope."},

{type:"teach",trg:"ortodoxo",src:"orthodox / traditional",pos:"adj",gender:null,
 note:"Adjective. Conforming to established doctrine.\nFeminine: ortodoxa. Also a religious branch.",
 example:"A: Su interpretación de la ley es muy ortodoxa.\nB: No deja espacio para interpretaciones alternativas.",
 exampleSrc:"A: His interpretation of the law is very orthodox.\nB: It leaves no room for alternative interpretations.",
 funFact:"From Greek orthos (correct) + doxa (belief). In Spanish, used for both religion and general conformity."},

{type:"mc",q:"¿Qué es un oligopolio?",
 opts:["Un mercado controlado por pocas empresas","Un gobierno de una sola persona","Una forma de democracia directa","Un tipo de impuesto especial"],
 ans:"Un mercado controlado por pocas empresas",
 hint:"Think about the Greek prefix 'oligo-' meaning 'few' and a market with limited competition."},

{type:"match",pairs:[
 {trg:"mitin",src:"political rally"},
 {trg:"líder",src:"leader"},
 {trg:"oligopolio",src:"oligopoly"},
 {trg:"multiculturalidad",src:"multiculturalism"},
 {trg:"ortodoxo",src:"orthodox"}
]},

{type:"fb",s:"La {1} de la economía española se aceleró tras la entrada en la UE.",
 a:["internacionalización"],opts:["internacionalización","multiculturalidad","asamblea nacional","oligopolio"],
 hint:"The process by which companies and institutions expand their operations beyond national borders.",
 sSrc:"The {1} of the Spanish economy accelerated after joining the EU."},

{type:"fb",s:"La {1} es una realidad en las grandes ciudades europeas.",
 a:["multiculturalidad"],opts:["multiculturalidad","internacionalización","asamblea nacional","imposición"],
 hint:"The coexistence of people from many different cultural backgrounds in one place.",
 sSrc:"{1} is a reality in large European cities."},

]};
export default LESSON_10;
