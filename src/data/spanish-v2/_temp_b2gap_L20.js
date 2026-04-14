// B2 Gap Lesson 20 - Abstract Nouns II & Wrap-up
const LESSON_20 = {id:"esv2_b2gap_l20",title:"Conceptos abstractos II",icon:"🎓",xp:15,board:true,steps:[
{type:"intro",title:"Conceptos abstractos II",desc:"Complete your B2 vocabulary with final abstract nouns covering quality, organization, and process.",goals:["Learn 20 final abstract nouns","Discuss processes and outcomes","Use formal vocabulary with confidence"]},

{type:"teach",trg:"el acta",src:"the minutes / official record",pos:"noun",gender:"f",
 note:"Feminine noun with 'el' (stressed initial 'a').\n'Levantar acta' = to draw up minutes.",
 example:"A: El secretario levantó el acta de la junta.\nB: Todos los acuerdos quedaron registrados.",
 exampleSrc:"A: The secretary drew up the minutes of the meeting.\nB: All agreements were recorded.",
 funFact:"'Acta notarial' is a notarized document. Spanish bureaucracy relies heavily on official 'actas'."},

{type:"teach",trg:"la asamblea nacional",src:"the national assembly",pos:"noun",gender:"f",
 note:"Feminine compound noun. The legislative body of a nation.",
 example:"A: La asamblea nacional aprobó la nueva ley de educación.\nB: Entró en vigor el mes siguiente.",
 exampleSrc:"A: The national assembly approved the new education law.\nB: It came into effect the following month.",
 funFact:"Spain's equivalent is 'Las Cortes Generales'. Many Latin American countries use 'Asamblea Nacional'."},

{type:"teach",trg:"el comendador",src:"the commander (of a military order)",pos:"noun",gender:"m",
 note:"Masculine noun. A rank in medieval military-religious orders.",
 example:"A: El Comendador es un personaje clave en el teatro español.\nB: Aparece en Fuenteovejuna de Lope de Vega.",
 exampleSrc:"A: The Commander is a key character in Spanish theater.\nB: He appears in Fuenteovejuna by Lope de Vega.",
 funFact:"'Fuenteovejuna' (1619) features a tyrannical Comendador killed by an entire village."},

{type:"teach",trg:"la agencia de publicidad",src:"the advertising agency",pos:"noun",gender:"f",
 note:"Feminine compound noun. A company that creates advertisements.",
 example:"A: La agencia de publicidad diseñó una campaña brillante.\nB: Las ventas subieron un treinta por ciento.",
 exampleSrc:"A: The advertising agency designed a brilliant campaign.\nB: Sales went up thirty percent.",
 funFact:"Madrid and Barcelona are Spain's advertising hubs. Spanish ads often use humor and emotion."},

{type:"teach",trg:"la cola de caballo",src:"the ponytail / horsetail plant",pos:"noun",gender:"f",
 note:"Feminine compound noun. A hairstyle or a medicinal plant.",
 example:"A: Se hizo una cola de caballo para ir al gimnasio.\nB: Es el peinado más práctico para hacer deporte.",
 exampleSrc:"A: She put her hair in a ponytail to go to the gym.\nB: It is the most practical hairstyle for sports.",
 funFact:"Also a medicinal herb (Equisetum) used in Spanish herbal medicine for its mineral content."},

{type:"mc",q:"En 'Fuenteovejuna' de Lope de Vega, el villano es:",opts:["el bedel","el comendador","el albañil","el becario"],ans:"el comendador",hint:"A military order rank, a tyrannical figure in this classic play."},

{type:"teach",trg:"el color de pelo",src:"the hair color",pos:"noun",gender:"m",
 note:"Masculine compound noun. The color of someone's hair.",
 example:"A: ¿De qué color de pelo es tu hermana?\nB: Castaño, pero a veces se lo tiñe rubio.",
 exampleSrc:"A: What hair color does your sister have?\nB: Brown, but sometimes she dyes it blonde.",
 funFact:"Castañho (brown), rubio (blonde), moreno (dark), pelirrojo (redhead) are common hair colors."},

{type:"teach",trg:"el color de piel",src:"the skin color",pos:"noun",gender:"m",
 note:"Masculine compound noun. The color of a person's skin.",
 example:"A: El color de piel no debería importar en una entrevista.\nB: Totalmente de acuerdo, es discriminatorio.",
 exampleSrc:"A: Skin color should not matter in an interview.\nB: I totally agree, it is discriminatory.",
 funFact:"Spain's anti-discrimination laws protect against discrimination based on 'color de piel'."},

{type:"teach",trg:"el cociente",src:"the quotient / ratio",pos:"noun",gender:"m",
 note:"Masculine noun. The result of division in mathematics.\nAlso: intellectual quotient (CI).",
 example:"A: El cociente intelectual no mide toda la inteligencia.\nB: Hay muchos tipos de inteligencia.",
 exampleSrc:"A: The intelligence quotient does not measure all intelligence.\nB: There are many types of intelligence.",
 funFact:"'CI' (cociente intelectual) is the Spanish equivalent of IQ. 'Cociente' is also used in math."},

{type:"teach",trg:"la comunicación empresarial",src:"the corporate communication",pos:"noun",gender:"f",
 note:"Feminine compound noun. How companies communicate internally and externally.",
 example:"A: La comunicación empresarial ha cambiado con las redes sociales.\nB: Ahora todo es más directo y rápido.",
 exampleSrc:"A: Corporate communication has changed with social media.\nB: Now everything is more direct and faster.",
 funFact:"Many Spanish universities offer degrees in 'comunicación empresarial' (corporate comms)."},

{type:"fb",s:"El secretario {1} el acta de todos los acuerdos de la reunión.",a:["levantó"],opts:["levantó","aprobó","diseñó","midió"],hint:"The standard verb used with 'acta' meaning to draw up the official record.",sSrc:"The secretary {1} the minutes of all the meeting agreements."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of misunderstanding or disorder.",
 example:"A: Hubo confusión con los billetes de avión.\nB: Nos dieron los asientos equivocados.",
 exampleSrc:"A: There was confusion with the plane tickets.\nB: They gave us the wrong seats.",
 funFact:"From Latin confusio. 'Confusión de identidad' (mistaken identity) is a classic comedy plot."},

{type:"teach",trg:"la calza",src:"the stocking / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. Historical legging or a leveling wedge.\nPlural 'calzas': historical breeches.",
 example:"A: Las calzas eran la prenda masculina por excelencia en el Siglo de Oro.\nB: Los nobles las llevaban muy decoradas.",
 exampleSrc:"A: Breeches were the quintessential male garment in the Golden Age.\nB: Nobles wore them highly decorated.",
 funFact:"From Latin calceus (shoe). Spanish Golden Age portraits show elaborate 'calzas' on noblemen."},

{type:"teach",trg:"el calzón",src:"the underpants / breeches",pos:"noun",gender:"m",
 note:"Masculine noun. Underwear or historical breeches.\nDiminutive of calza.",
 example:"A: Los calzones blancos son parte del traje regional.\nB: Se usan en las fiestas tradicionales.",
 exampleSrc:"A: White breeches are part of the regional costume.\nB: They are worn at traditional festivals.",
 funFact:"'Calzoncillos' (underwear) is the everyday word. 'Calzón' survives in regional costumes."},

{type:"teach",trg:"la cartulina",src:"the card stock",pos:"noun",gender:"f",
 note:"Feminine noun. Thick colored paper for crafts.\nAlready taught in L11, recycled here.",
 example:"A: Recorta la cartulina en forma de estrella.\nB: Necesitamos diez para decorar el salón.",
 exampleSrc:"A: Cut the card stock into a star shape.\nB: We need ten to decorate the room.",
 funFact:"Essential school supply in Spain. Every September, parents buy stacks of 'cartulina' for projects."},

{type:"teach",trg:"el bárbaro",src:"the barbarian",pos:"noun",gender:"m",
 note:"Masculine noun. A member of an uncivilized people.\nFeminine: la bárbara.",
 example:"A: Los bárbaros invadieron el Imperio romano.\nB: Los visigodos se establecieron en Hispania.",
 exampleSrc:"A: The barbarians invaded the Roman Empire.\nB: The Visigoths settled in Hispania.",
 funFact:"The Visigoths ruled Spain for 300 years (5th-8th century). Their influence shaped Spanish law."},

{type:"mc",q:"'Cociente intelectual' es el equivalente español de:",opts:["SAT","GPA","IQ","PhD"],ans:"IQ",hint:"A numerical measure of intelligence, using the Spanish abbreviation CI."},

{type:"teach",trg:"la bamba",src:"the bamba (dance/shoe)",pos:"noun",gender:"f",
 note:"Feminine noun. A type of traditional dance or a canvas shoe.",
 example:"A: La Bamba es una canción mexicana mundialmente famosa.\nB: Ritchie Valens la hizo célebre en 1958.",
 exampleSrc:"A: La Bamba is a world-famous Mexican song.\nB: Ritchie Valens made it famous in 1958.",
 funFact:"As footwear, 'bambas' (plural) are canvas sneakers in Catalonia and parts of Spain."},

{type:"teach",trg:"el bidet",src:"the bidet",pos:"noun",gender:"m",
 note:"Masculine noun. A bathroom fixture for washing.",
 example:"A: En España, casi todos los baños tienen bidet.\nB: En otros países no es tan común.",
 exampleSrc:"A: In Spain, almost all bathrooms have a bidet.\nB: In other countries it is not as common.",
 funFact:"From French bidet (little horse). Spain, Italy, and Portugal are the European bidet strongholds."},

{type:"teach",trg:"el bedel",src:"the caretaker / porter",pos:"noun",gender:"m",
 note:"Masculine noun. School or university maintenance staff.\nRecycled from L16.",
 example:"A: Pregúntale al bedel dónde está el aula magna.\nB: Seguro que te indica el camino.",
 exampleSrc:"A: Ask the caretaker where the main hall is.\nB: He will surely show you the way.",
 funFact:"'Bedel' comes from Germanic bidell (messenger). A fixture of Spanish educational institutions."},

{type:"teach",trg:"la consistencia",src:"the consistency",pos:"noun",gender:"f",
 note:"Feminine noun. Firmness in texture or steadiness in behavior.\nRecycled from L09.",
 example:"A: La consistencia de la masa debe ser suave pero firme.\nB: Amasa hasta que no se pegue a las manos.",
 exampleSrc:"A: The consistency of the dough should be soft but firm.\nB: Knead until it does not stick to your hands.",
 funFact:"Used for both physical texture and behavioral steadiness. A versatile and important word."},

{type:"fb",s:"Los {1} invadieron el Imperio romano en el siglo quinto.",a:["bárbaros"],opts:["bárbaros","bedeles","bidets","comendadores"],hint:"Uncivilized peoples who overran the Roman Empire.",sSrc:"The {1} invaded the Roman Empire in the fifth century."},

{type:"mc",q:"En España, ¿qué es muy común tener en el baño?",opts:["Una bañera de hidromasaje","Un bidet","Una sauna","Una piscina"],ans:"Un bidet",hint:"A bathroom fixture for personal hygiene, standard in Spanish homes."},

{type:"match",pairs:[{trg:"acta",src:"minutes / record"},{trg:"cociente",src:"quotient"},{trg:"calzón",src:"breeches"},{trg:"bamba",src:"dance / shoe"},{trg:"bárbaro",src:"barbarian"}]},

{type:"fb",s:"La {1} de identidad causó un malentendido cómico.",a:["confusión"],opts:["confusión","consistencia","comunicación","calza"],hint:"A mix-up where people were mistaken for someone else.",sSrc:"The {1} of identity caused a comic misunderstanding."},

{type:"mc",q:"'Levantar acta' significa:",opts:["Leer un documento antiguo","Registrar oficialmente lo discutido","Destruir documentos","Copiar un libro"],ans:"Registrar oficialmente lo discutido",hint:"Creating an official written record of proceedings."}
]};

export default LESSON_20;
