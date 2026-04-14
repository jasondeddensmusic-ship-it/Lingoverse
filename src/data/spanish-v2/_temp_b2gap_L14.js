// B2 Gap Lesson 14 - Materials & Industry
const LESSON_14 = {id:"esv2_b2gap_l14",title:"Materiales e industria",icon:"🏭",xp:15,board:true,steps:[
{type:"intro",title:"Materiales e industria",desc:"Learn vocabulary about materials, manufacturing, and industrial processes.",goals:["Learn 20 material and industry words","Describe manufacturing and substances","Discuss technology and production"]},

{type:"teach",trg:"el aluminio",src:"the aluminum",pos:"noun",gender:"m",
 note:"Masculine noun. The lightweight silver metal.",
 example:"A: Las latas de aluminio se reciclan fácilmente.\nB: Es uno de los materiales más reciclados del mundo.",
 exampleSrc:"A: Aluminum cans are easily recycled.\nB: It is one of the most recycled materials in the world.",
 funFact:"Named after alum, a mineral. Spain has major aluminum recycling plants in Galicia."},

{type:"teach",trg:"el acetato",src:"the acetate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound or transparent film.",
 example:"A: Las gafas de acetato son muy ligeras.\nB: Y vienen en muchos colores diferentes.",
 exampleSrc:"A: Acetate glasses are very lightweight.\nB: And they come in many different colors.",
 funFact:"From Latin acetum (vinegar). Acetate is derived from acetic acid, the acid in vinegar."},

{type:"teach",trg:"el amoníaco",src:"the ammonia",pos:"noun",gender:"m",
 note:"Masculine noun. A strong-smelling chemical compound.",
 example:"A: El olor a amoníaco era insoportable.\nB: Abre las ventanas para ventilar.",
 exampleSrc:"A: The ammonia smell was unbearable.\nB: Open the windows to ventilate.",
 funFact:"Named after the Egyptian god Ammon, near whose temple the substance was first found."},

{type:"teach",trg:"el carbonato",src:"the carbonate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical salt containing carbon and oxygen.",
 example:"A: El carbonato de calcio se usa en muchos medicamentos.\nB: También está en la tiza y el mármol.",
 exampleSrc:"A: Calcium carbonate is used in many medications.\nB: It is also in chalk and marble.",
 funFact:"From carbón (coal/carbon). Spain's marble quarries in Macael (Almería) are world-famous."},

{type:"teach",trg:"carbónico",src:"carbonic",pos:"adj",gender:null,
 note:"Adjective. Related to carbon dioxide.\nFeminine: carbónica.",
 example:"A: El agua con gas contiene ácido carbónico.\nB: Por eso tiene ese sabor ligeramente ácido.",
 exampleSrc:"A: Sparkling water contains carbonic acid.\nB: That is why it has that slightly sour taste.",
 funFact:"'Anhídrido carbónico' is the technical name for CO2 in Spanish chemistry."},

{type:"mc",q:"Las latas de refresco están hechas de:",opts:["acetato","aluminio","carbonato","amoníaco"],ans:"aluminio",hint:"A lightweight silver metal that is easily recyclable."},

{type:"teach",trg:"el abono",src:"the fertilizer / subscription",pos:"noun",gender:"m",
 note:"Masculine noun. Two meanings: plant fertilizer, or a subscription/pass.",
 example:"A: Echamos abono en el jardín cada primavera.\nB: Las plantas crecen mucho mejor con él.",
 exampleSrc:"A: We spread fertilizer in the garden every spring.\nB: The plants grow much better with it.",
 funFact:"Also means a season pass: 'abono de temporada' for football or theater. Very different uses."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / fitting out",pos:"noun",gender:"m",
 note:"Masculine noun. The process of preparing or equipping a space.",
 example:"A: El acondicionamiento del local costó una fortuna.\nB: Pero ahora parece un restaurante de primera.",
 exampleSrc:"A: The fitting out of the premises cost a fortune.\nB: But now it looks like a top restaurant.",
 funFact:"'Aire acondicionado' (air conditioning) uses the same root. Very common in Spanish summers."},

{type:"teach",trg:"el arado",src:"the plow",pos:"noun",gender:"m",
 note:"Masculine noun. The farming tool for turning soil.",
 example:"A: El arado tradicional fue sustituido por maquinaria.\nB: La agricultura moderna es muy diferente.",
 exampleSrc:"A: The traditional plow was replaced by machinery.\nB: Modern agriculture is very different.",
 funFact:"From Latin aratrum. 'Arar' (to plow) is one of humanity's oldest agricultural verbs."},

{type:"teach",trg:"la armónica",src:"the harmonica",pos:"noun",gender:"f",
 note:"Feminine noun. The wind instrument played with the mouth.",
 example:"A: Aprendió a tocar la armónica en un verano.\nB: Ahora toca canciones de blues increíbles.",
 exampleSrc:"A: He learned to play the harmonica in one summer.\nB: Now he plays incredible blues songs.",
 funFact:"From Greek harmonikos (harmonious). The harmonica is popular in Spanish folk and blues music."},

{type:"teach",trg:"el asta",src:"the flagpole / horn (of an animal)",pos:"noun",gender:"f",
 note:"Feminine noun with 'el' for phonetic reasons (stressed 'a').\nPlural: las astas.",
 example:"A: La bandera ondeaba en lo alto del asta.\nB: Se veía desde toda la plaza.",
 exampleSrc:"A: The flag waved at the top of the flagpole.\nB: It could be seen from across the square.",
 funFact:"'A media asta' (at half-mast) is used for mourning, just like in English."},

{type:"fb",s:"El {1} orgánico es mejor para el medio ambiente.",a:["abono"],opts:["abono","aluminio","amoníaco","carbonato"],hint:"A substance spread on soil to help plants grow.",sSrc:"Organic {1} is better for the environment."},

{type:"teach",trg:"el colador",src:"the strainer / sieve",pos:"noun",gender:"m",
 note:"Masculine noun. A kitchen utensil for draining liquids.",
 example:"A: Pasa la pasta por el colador para escurrirla.\nB: Ya está lista para servir.",
 exampleSrc:"A: Put the pasta through the strainer to drain it.\nB: It is ready to serve.",
 funFact:"From colar (to strain). 'No cuela' (it does not strain through) means 'I do not buy it'."},

{type:"teach",trg:"la camioneta",src:"the van / pickup truck",pos:"noun",gender:"f",
 note:"Feminine noun. A small truck or van.",
 example:"A: Necesitamos una camioneta para la mudanza.\nB: Mi primo tiene una, le pido que nos ayude.",
 exampleSrc:"A: We need a van for the move.\nB: My cousin has one, I will ask him to help us.",
 funFact:"Diminutive of camión (truck). In Latin America, 'camioneta' can also mean an SUV."},

{type:"teach",trg:"la carreta",src:"the cart / wagon",pos:"noun",gender:"m",
 note:"Feminine noun. A traditional wheeled vehicle pulled by animals.",
 example:"A: Las carretas de bueyes transportaban la cosecha.\nB: Era el medio de transporte principal del campo.",
 exampleSrc:"A: Ox carts transported the harvest.\nB: It was the main means of transport in the countryside.",
 funFact:"From carro (cart). Carreta routes across Spain were vital trade arteries for centuries."},

{type:"teach",trg:"la calza",src:"the stocking / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. Historical: a stocking or legging.\nAlso: a wedge placed under furniture.",
 example:"A: Pon una calza bajo la pata de la mesa.\nB: Así dejará de cojear.",
 exampleSrc:"A: Put a wedge under the table leg.\nB: That way it will stop wobbling.",
 funFact:"From Latin calceus (shoe). Historical 'calzas' were the leggings worn by Spanish nobles."},

{type:"mc",q:"Para escurrir la pasta se usa un:",opts:["abono","colador","arado","asta"],ans:"colador",hint:"A kitchen tool with holes that lets water pass through."},

{type:"teach",trg:"la cajetilla",src:"the cigarette pack",pos:"noun",gender:"f",
 note:"Feminine noun. A small box or pack of cigarettes.",
 example:"A: Una cajetilla cuesta más de cinco euros en España.\nB: Los impuestos al tabaco son muy altos.",
 exampleSrc:"A: A cigarette pack costs more than five euros in Spain.\nB: Tobacco taxes are very high.",
 funFact:"Diminutive of cajeta (small box). Spain banned smoking in bars and restaurants in 2011."},

{type:"teach",trg:"el compacto",src:"the compact (disc / object)",pos:"noun",gender:"m",
 note:"Masculine noun. Something compressed or condensed.\nAs adjective: compact, dense.",
 example:"A: Todavía guardo mis compactos de los noventa.\nB: La música sonaba mejor en disco compacto.",
 exampleSrc:"A: I still keep my CDs from the nineties.\nB: Music sounded better on compact disc.",
 funFact:"'Disco compacto' (CD) dominated Spanish music stores in the 1990s before digital took over."},

{type:"teach",trg:"el conductor",src:"the driver / conductor",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who drives a vehicle.\nFeminine: la conductora.",
 example:"A: El conductor del autobús frenó justo a tiempo.\nB: Evitó un accidente muy grave.",
 exampleSrc:"A: The bus driver braked just in time.\nB: He avoided a very serious accident.",
 funFact:"In physics, 'conductor' also means an electrical conductor. Same word, different field."},

{type:"teach",trg:"el acta",src:"the minutes / official record",pos:"noun",gender:"f",
 note:"Feminine noun with 'el' (stressed initial 'a').\nPlural: las actas.",
 example:"A: ¿Quién levanta el acta de la reunión?\nB: Yo me encargo, tengo buenas notas.",
 exampleSrc:"A: Who is taking the minutes of the meeting?\nB: I will handle it, I have good notes.",
 funFact:"'Levantar acta' (to draw up minutes) is the standard phrase for documenting meetings."},

{type:"fb",s:"El {1} del autobús tuvo reflejos increíbles.",a:["conductor"],opts:["conductor","colador","compacto","acondicionamiento"],hint:"The person behind the wheel of a vehicle.",sSrc:"The bus {1} had incredible reflexes."},

{type:"mc",q:"'Levantar el acta' de una reunión significa:",opts:["Destruir los documentos","Documentar lo que se discutió","Cancelar la reunión","Invitar a más personas"],ans:"Documentar lo que se discutió",hint:"Creating an official written record of what was discussed."},

{type:"match",pairs:[{trg:"aluminio",src:"aluminum"},{trg:"abono",src:"fertilizer"},{trg:"colador",src:"strainer"},{trg:"camioneta",src:"van"},{trg:"acta",src:"minutes / record"}]},

{type:"fb",s:"Todavía guardo mis {1} de música de los años noventa.",a:["compactos"],opts:["compactos","coladores","abonos","carbonatos"],hint:"Round discs that stored music before digital downloads.",sSrc:"I still keep my music {1} from the nineties."},

{type:"mc",q:"'Abono' puede significar fertilizante Y TAMBIÉN:",opts:["Una herramienta","Un abono de temporada (pase)","Un tipo de metal","Una planta"],ans:"Un abono de temporada (pase)",hint:"Think about something you buy to access an entire season of events."}
]};

export default LESSON_14;
