// B2 Gap Lesson 18 - Adjectives of Quality
const LESSON_18 = {id:"esv2_b2gap_l18",title:"Cualidades y juicios",icon:"⭐",xp:15,board:true,steps:[
{type:"intro",title:"Cualidades y juicios",desc:"Expand your vocabulary for judging quality, describing traits, and expressing opinions.",goals:["Learn 20 adjectives of quality and judgment","Describe things precisely","Express nuanced opinions"]},

{type:"teach",trg:"beneficioso",src:"beneficial",pos:"adj",gender:null,
 note:"Adjective. Having a positive effect.\nFeminine: beneficiosa.",
 example:"A: El ejercicio es beneficioso para la salud mental.\nB: Media hora al día ya marca la diferencia.",
 exampleSrc:"A: Exercise is beneficial for mental health.\nB: Half an hour a day already makes a difference.",
 funFact:"From beneficio (benefit). More formal than 'bueno para', used in health and science contexts."},

{type:"teach",trg:"bianual",src:"biannual / twice a year",pos:"adj",gender:null,
 note:"Adjective. Happening twice a year. Invariable for gender.\nNot to be confused with bienal (every two years).",
 example:"A: La revisión médica es bianual.\nB: Una en junio y otra en diciembre.",
 exampleSrc:"A: The medical checkup is biannual.\nB: One in June and another in December.",
 funFact:"Bianual = twice a year. Bienal = every two years. A common source of confusion in Spanish too."},

{type:"teach",trg:"bizantino",src:"Byzantine / overly complicated",pos:"adj",gender:null,
 note:"Adjective. Excessively complex and pointless.\nFeminine: bizantina.",
 example:"A: La discusión se volvió bizantina.\nB: Llevaban horas debatiendo un detalle sin importancia.",
 exampleSrc:"A: The discussion became Byzantine.\nB: They had been debating an unimportant detail for hours.",
 funFact:"From the endless theological debates of the Byzantine Empire. 'Discusión bizantina' = pointless debate."},

{type:"teach",trg:"aprovechable",src:"usable / salvageable",pos:"adj",gender:null,
 note:"Adjective. Something that can still be used or taken advantage of.",
 example:"A: De la mudanza, todo lo aprovechable lo donamos.\nB: Mejor que tirarlo a la basura.",
 exampleSrc:"A: From the move, everything usable we donated.\nB: Better than throwing it in the trash.",
 funFact:"From aprovechar (to take advantage of). Spain has a strong culture of not wasting: 'no desperdiciar'."},

{type:"teach",trg:"asequible",src:"affordable / attainable",pos:"adj",gender:null,
 note:"Adjective. Within financial reach, or achievable. Invariable for gender.",
 example:"A: El piso tiene un precio asequible para la zona.\nB: Es difícil encontrar algo así en Madrid.",
 exampleSrc:"A: The apartment has an affordable price for the area.\nB: It is hard to find something like that in Madrid.",
 funFact:"From Latin assequi (to follow/attain). Not to be confused with 'accesible' (easy to access)."},

{type:"mc",q:"Una discusión interminable sobre un tema sin importancia es:",opts:["bizantina","bianual","asequible","beneficiosa"],ans:"bizantina",hint:"Named after an empire famous for endless, pointless theological debates."},

{type:"teach",trg:"arrasador",src:"devastating / overwhelming",pos:"adj",gender:null,
 note:"Adjective. Completely destructive, or overwhelmingly powerful.\nFeminine: arrasadora.",
 example:"A: El equipo tuvo una victoria arrasadora.\nB: Ganó por una diferencia enorme.",
 exampleSrc:"A: The team had an overwhelming victory.\nB: They won by an enormous margin.",
 funFact:"From arrasar (to raze). Can be destructive (fire) or positive (victory). Context determines."},

{type:"teach",trg:"aduanero",src:"customs-related",pos:"adj",gender:null,
 note:"Adjective. Related to customs at borders.\nFeminine: aduanera.\nAlso noun: customs officer.",
 example:"A: El control aduanero fue muy estricto en el aeropuerto.\nB: Revisaron todas las maletas.",
 exampleSrc:"A: The customs control was very strict at the airport.\nB: They checked all the suitcases.",
 funFact:"From aduana (customs), from Arabic ad-diwan (the register). Spain's customs are EU-standardized."},

{type:"teach",trg:"báltico",src:"Baltic",pos:"adj",gender:null,
 note:"Adjective. Related to the Baltic region of northern Europe.\nFeminine: báltica.",
 example:"A: Los países bálticos entraron en la UE en 2004.\nB: Estonia, Letonia y Lituania.",
 exampleSrc:"A: The Baltic countries joined the EU in 2004.\nB: Estonia, Latvia, and Lithuania.",
 funFact:"From Latin Balticus. 'Hace un frío báltico' is a colloquial expression meaning it is freezing cold."},

{type:"teach",trg:"bárbaro",src:"barbaric / awesome (colloquial)",pos:"adj",gender:null,
 note:"Adjective. Savage or cruel. Colloquially: amazing.\nAlso noun: el bárbaro (the barbarian).",
 example:"A: La fiesta fue bárbara.\nB: Nos lo pasamos genial hasta las tres de la mañana.",
 exampleSrc:"A: The party was awesome.\nB: We had a great time until three in the morning.",
 funFact:"From Greek barbaros (foreign). In Spain, 'bárbaro' is both negative (cruel) and positive (amazing)."},

{type:"fb",s:"El precio del piso es {1} para una familia joven.",a:["asequible"],opts:["asequible","arrasador","bizantino","báltico"],hint:"Affordable, within financial reach for most people.",sSrc:"The apartment price is {1} for a young family."},

{type:"teach",trg:"cantor",src:"singing / singer (literary)",pos:"adj",gender:null,
 note:"Adjective. That sings. Also noun: singer (literary).\nFeminine: cantora.",
 example:"A: El pájaro cantor alegra las mañanas del jardín.\nB: Creo que es un jilguero.",
 exampleSrc:"A: The songbird brightens the garden mornings.\nB: I think it is a goldfinch.",
 funFact:"'Ave cantora' (songbird) is literary. In everyday speech, 'cantante' is the noun for singer."},

{type:"teach",trg:"afilador",src:"knife-sharpening / sharp",pos:"adj",gender:null,
 note:"Adjective. Related to sharpening.\nAlso noun: el afilador (knife sharpener).",
 example:"A: ¿Se oye la flauta del afilador?\nB: Sí, voy a bajar los cuchillos ahora mismo.",
 exampleSrc:"A: Can you hear the knife sharpener's flute?\nB: Yes, I will take the knives down right now.",
 funFact:"The 'afilador' with his pan flute is a disappearing figure in Spanish towns. Very nostalgic."},

{type:"teach",trg:"clavadista",src:"diver (from heights)",pos:"adj",gender:null,
 note:"Adjective or noun. A high diver, especially from cliffs.\nCommon gender.",
 example:"A: Los clavadistas de Acapulco son mundialmente famosos.\nB: Se lanzan desde más de treinta metros.",
 exampleSrc:"A: The Acapulco cliff divers are world-famous.\nB: They dive from over thirty meters.",
 funFact:"From clavar (to nail/dive). Used mainly in Mexico and Latin America. Spain uses 'saltador'."},

{type:"teach",trg:"chacarero",src:"farmer / ranch-related",pos:"adj",gender:null,
 note:"Adjective. Related to small farming. Latin American term.\nFeminine: chacarera.",
 example:"A: La tradición chacarera sigue viva en Argentina.\nB: La chacarera es también un baile folclórico.",
 exampleSrc:"A: The farming tradition is still alive in Argentina.\nB: The chacarera is also a folk dance.",
 funFact:"From chacra (small farm), from Quechua. 'La chacarera' is a popular Argentine folk dance."},

{type:"mc",q:"'Hace un frío báltico' significa que:",opts:["Hace calor","Hace muchísimo frío","Llueve mucho","Hace viento"],ans:"Hace muchísimo frío",hint:"The Baltic region is associated with extremely cold temperatures."},

{type:"teach",trg:"la aeronave",src:"the aircraft",pos:"noun",gender:"f",
 note:"Feminine noun. Any vehicle that flies.\nMore formal than 'avión'.",
 example:"A: La aeronave aterrizó sin problemas.\nB: Los pasajeros aplaudieron al piloto.",
 exampleSrc:"A: The aircraft landed without problems.\nB: The passengers applauded the pilot.",
 funFact:"Aero- (air) + nave (ship). Covers planes, helicopters, and drones. Formal, used in news."},

{type:"teach",trg:"aeronáutico",src:"aeronautical",pos:"adj",gender:null,
 note:"Adjective. Related to aircraft design and operation.\nFeminine: aeronáutica.",
 example:"A: La industria aeronáutica española emplea a miles de personas.\nB: Airbus tiene fábricas en Sevilla y Getafe.",
 exampleSrc:"A: The Spanish aeronautical industry employs thousands.\nB: Airbus has factories in Seville and Getafe.",
 funFact:"Spain is a major Airbus partner. Seville assembles the A400M military transport aircraft."},

{type:"teach",trg:"la apocalipsis",src:"the apocalypse",pos:"noun",gender:"f",
 note:"Feminine noun. A catastrophic event or the end of the world.\nAlso masculine in some usage.",
 example:"A: La escena parecía sacada de una apocalipsis.\nB: Todo estaba destruido por el terremoto.",
 exampleSrc:"A: The scene looked like something out of an apocalypse.\nB: Everything was destroyed by the earthquake.",
 funFact:"From Greek apokalypsis (uncovering/revelation). The last book of the Bible in Spanish."},

{type:"teach",trg:"apocalíptico",src:"apocalyptic",pos:"adj",gender:null,
 note:"Adjective. Related to catastrophic destruction.\nFeminine: apocalíptica.",
 example:"A: Las imágenes del incendio eran apocalípticas.\nB: Nunca había visto algo así.",
 exampleSrc:"A: The images of the fire were apocalyptic.\nB: I had never seen anything like it.",
 funFact:"'Jinetes del Apocalipsis' (Four Horsemen of the Apocalypse) is a well-known Spanish reference."},

{type:"fb",s:"La victoria fue {1}, ganaron por seis goles a cero.",a:["arrasadora"],opts:["arrasadora","asequible","bianual","aprovechable"],hint:"Completely devastating, an overwhelming triumph.",sSrc:"The victory was {1}, they won six goals to zero."},

{type:"mc",q:"Un 'afilador' tradicional anuncia su llegada con:",opts:["Una sirena","Una campana","Una flauta","Un tambor"],ans:"Una flauta",hint:"This traveling craftsman uses a distinctive musical instrument."},

{type:"match",pairs:[{trg:"asequible",src:"affordable"},{trg:"arrasador",src:"devastating"},{trg:"bizantino",src:"pointlessly complex"},{trg:"aeronave",src:"aircraft"},{trg:"bárbaro",src:"awesome (colloquial)"}]},

{type:"fb",s:"La industria {1} española tiene fábricas de Airbus.",a:["aeronáutica"],opts:["aeronáutica","aduanera","báltica","bianual"],hint:"Related to aircraft design and manufacturing.",sSrc:"The Spanish {1} industry has Airbus factories."},

{type:"mc",q:"Todo lo que se puede reutilizar es:",opts:["aduanero","bizantino","apocalíptico","aprovechable"],ans:"aprovechable",hint:"Items that can still be used or salvaged rather than discarded."}
]};

export default LESSON_18;
