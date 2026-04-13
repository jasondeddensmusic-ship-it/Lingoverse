// B2 Gap Lesson 10 - Food & Gastronomy
const LESSON_10 = {id:"esv2_b2gap_l10",title:"Gastronomía",icon:"🍳",xp:15,board:true,steps:[
{type:"intro",title:"Gastronomía",desc:"Explore the rich vocabulary of Spanish cuisine, cooking techniques, and food culture.",goals:["Learn 20 food and cooking words","Describe dishes and ingredients","Navigate Spanish culinary vocabulary"]},

{type:"teach",trg:"amasar",src:"to knead",pos:"verb",gender:null,
 note:"Regular -ar verb. To work dough with your hands.",
 example:"A: Hay que amasar la masa durante diez minutos.\nB: Hasta que quede suave y elástica.",
 exampleSrc:"A: You need to knead the dough for ten minutes.\nB: Until it is smooth and elastic.",
 funFact:"From masa (dough). Bread-making (panadería) is a deeply traditional craft in Spain."},

{type:"teach",trg:"el amasijo",src:"the hodgepodge / messy mixture",pos:"noun",gender:"m",
 note:"Masculine noun. A confused mixture of things.",
 example:"A: El discurso fue un amasijo de ideas sin orden.\nB: Nadie entendió lo que quería decir.",
 exampleSrc:"A: The speech was a hodgepodge of unorganized ideas.\nB: Nobody understood what he meant.",
 funFact:"From amasar. Originally meant kneaded dough, then extended to any messy mixture."},

{type:"teach",trg:"el alioli",src:"the aioli",pos:"noun",gender:"m",
 note:"Masculine noun. Garlic and oil sauce, sometimes with egg.",
 example:"A: ¿Quieres alioli con las patatas fritas?\nB: Siempre, es mi salsa favorita.",
 exampleSrc:"A: Do you want aioli with the fries?\nB: Always, it is my favorite sauce.",
 funFact:"From Catalan all i oli (garlic and oil). Traditional alioli has no egg, unlike modern versions."},

{type:"teach",trg:"la bechamel",src:"the bechamel sauce",pos:"noun",gender:"f",
 note:"Feminine noun. White sauce made with butter, flour, and milk.",
 example:"A: Las croquetas llevan una bechamel espesa.\nB: El secreto es remover sin parar.",
 exampleSrc:"A: The croquettes use a thick bechamel.\nB: The secret is to stir without stopping.",
 funFact:"Named after Louis de Béchameil, a French financier. Spanish croquetas are legendary."},

{type:"teach",trg:"el bocado",src:"the bite / morsel",pos:"noun",gender:"m",
 note:"Masculine noun. A mouthful of food, or a snack.",
 example:"A: No he comido ni un bocado en todo el día.\nB: Vamos a cenar algo ahora mismo.",
 exampleSrc:"A: I have not eaten a single bite all day.\nB: Let us go have dinner right now.",
 funFact:"From boca (mouth). 'Bocadillo' (sandwich on a baguette) is Spain's iconic quick lunch."},

{type:"mc",q:"¿Qué hay que hacer con la masa del pan?",opts:["Amasarla","Pintarla","Cortarla","Hervirla"],ans:"Amasarla",hint:"Working dough with your hands to make it smooth.",sSrc:"What do you need to do with bread dough?"},

{type:"teach",trg:"el chicle",src:"the chewing gum",pos:"noun",gender:"m",
 note:"Masculine noun. Gum for chewing.",
 example:"A: ¿Tienes un chicle? Necesito refrescar el aliento.\nB: Sí, de menta. Toma uno.",
 exampleSrc:"A: Do you have a piece of gum? I need to freshen my breath.\nB: Yes, mint. Here, take one.",
 funFact:"From Nahuatl tzictli (sticky thing). One of many Spanish words from indigenous Mexican languages."},

{type:"teach",trg:"la chocolatería",src:"the chocolate shop / cafe",pos:"noun",gender:"f",
 note:"Feminine noun. A shop selling chocolate or hot chocolate.",
 example:"A: Vamos a la chocolatería a tomar churros.\nB: La mejor es la de la plaza mayor.",
 exampleSrc:"A: Let us go to the chocolate cafe for churros.\nB: The best one is on the main square.",
 funFact:"'Churros con chocolate' is a beloved Spanish tradition, especially for breakfast or merienda."},

{type:"teach",trg:"el chollo",src:"the bargain / great deal",pos:"noun",gender:"m",
 note:"Masculine noun. Colloquial for an amazing deal or easy job.",
 example:"A: Encontré un chollo en las rebajas de enero.\nB: ¿Qué compraste? Cuéntame.",
 exampleSrc:"A: I found a bargain in the January sales.\nB: What did you buy? Tell me.",
 funFact:"Very colloquial. 'Vaya chollo' (what a bargain) is a common exclamation in Spain."},

{type:"teach",trg:"confitar",src:"to candy / to preserve in sugar or oil",pos:"verb",gender:null,
 note:"Regular -ar verb. To cook slowly in fat or sugar to preserve.",
 example:"A: El pato confitado es un plato exquisito.\nB: Se cocina lentamente en su propia grasa.",
 exampleSrc:"A: Confit duck is an exquisite dish.\nB: It is cooked slowly in its own fat.",
 funFact:"From confite (candy). Confitar in oil (at low temperature) is a key technique in Spanish cooking."},

{type:"teach",trg:"el azúcar",src:"the sugar",pos:"noun",gender:"m",
 note:"Ambiguous gender. 'El azúcar' is most common.\nFrom Arabic as-sukkar.",
 example:"A: ¿Cuánto azúcar le pones al café?\nB: Solo una cucharadita, me gusta amargo.",
 exampleSrc:"A: How much sugar do you put in your coffee?\nB: Just a teaspoon, I like it bitter.",
 funFact:"From Arabic as-sukkar, from Sanskrit sharkara. One of many food words Spanish borrowed from Arabic."},

{type:"fb",s:"Las croquetas llevan una {1} espesa como base.",a:["bechamel"],opts:["bechamel","alioli","chocolatería","azúcar"],hint:"A thick white sauce made from butter, flour, and milk.",sSrc:"The croquettes use a thick {1} as their base."},

{type:"teach",trg:"azucarero",src:"sugar-producing / sugar bowl",pos:"adj",gender:null,
 note:"Adjective or noun. As noun (el azucarero): the sugar bowl.\nAdjective: related to sugar production.",
 example:"A: Pásame el azucarero, por favor.\nB: Aquí tienes. ¿Cuántas cucharadas?",
 exampleSrc:"A: Pass me the sugar bowl, please.\nB: Here you go. How many spoonfuls?",
 funFact:"Cuba was once called 'la isla azucarera' (the sugar island) for its massive sugar production."},

{type:"teach",trg:"la banderilla",src:"the banderilla (tapa / bullfighting dart)",pos:"noun",gender:"f",
 note:"Feminine noun. A skewered appetizer, or a decorated dart in bullfighting.",
 example:"A: Las banderillas de encurtidos son mi tapa favorita.\nB: Las hacen muy buenas en este bar.",
 exampleSrc:"A: Pickled banderillas are my favorite tapa.\nB: They make very good ones at this bar.",
 funFact:"Named after the bullfighting darts. The food version skewers pickles and olives on a stick."},

{type:"teach",trg:"el cabrito",src:"the baby goat / kid",pos:"noun",gender:"m",
 note:"Masculine noun. A young goat, or its meat.",
 example:"A: El cabrito asado es típico de Castilla.\nB: Se cocina muy lento en horno de leña.",
 exampleSrc:"A: Roast baby goat is typical of Castile.\nB: It is cooked very slowly in a wood oven.",
 funFact:"Diminutive of cabra (goat). Cabrito asado is a traditional festive dish in central Spain."},

{type:"teach",trg:"el chato",src:"the small glass of wine",pos:"noun",gender:"m",
 note:"Masculine noun. A small, wide glass of wine.\nAlso adjective: snub-nosed.",
 example:"A: Vamos a tomar un chato de vino después del trabajo.\nB: Perfecto, conozco un bar estupendo.",
 exampleSrc:"A: Let us have a small glass of wine after work.\nB: Perfect, I know a great bar.",
 funFact:"The 'chato' glass is short and wide. 'Ir de chatos' means going bar-hopping for wine."},

{type:"mc",q:"Una tapa de encurtidos en un palillo se llama:",opts:["un bocado","una banderilla","un chollo","un alioli"],ans:"una banderilla",hint:"Named after bullfighting darts, these are skewered appetizers."},

{type:"teach",trg:"la baba",src:"the drool / saliva",pos:"noun",gender:"f",
 note:"Feminine noun. Drool or slobber.",
 example:"A: Al bebé le cae la baba cuando le salen los dientes.\nB: Es completamente normal a esa edad.",
 exampleSrc:"A: The baby drools when his teeth come in.\nB: It is completely normal at that age.",
 funFact:"'Se le cae la baba' (he drools over) means being utterly enchanted by someone or something."},

{type:"teach",trg:"el bagaje",src:"the baggage (figurative) / experience",pos:"noun",gender:"m",
 note:"Masculine noun. Cultural or intellectual background.\nNot typically used for luggage (equipaje).",
 example:"A: Tiene un bagaje cultural impresionante.\nB: Ha viajado y leído muchísimo.",
 exampleSrc:"A: He has an impressive cultural background.\nB: He has traveled and read a great deal.",
 funFact:"From French bagage. In Spanish, 'bagaje' is mainly figurative. For physical luggage, use 'equipaje'."},

{type:"teach",trg:"la brevedad",src:"the brevity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being brief or short.",
 example:"A: A la mayor brevedad posible, necesitamos una respuesta.\nB: La tendrás mañana sin falta.",
 exampleSrc:"A: At the earliest possible time, we need an answer.\nB: You will have it tomorrow without fail.",
 funFact:"'A la mayor brevedad' is a very formal expression meaning 'as soon as possible'."},

{type:"teach",trg:"el brillo",src:"the shine / brightness",pos:"noun",gender:"m",
 note:"Masculine noun. A gleaming light or figurative brilliance.",
 example:"A: El brillo de sus ojos delataba su emoción.\nB: Estaba claramente ilusionado.",
 exampleSrc:"A: The shine in his eyes revealed his excitement.\nB: He was clearly thrilled.",
 funFact:"'Brillar con luz propia' (to shine with one's own light) means to stand out on your own merit."},

{type:"fb",s:"¿Vamos a tomar un {1} de vino al bar de la esquina?",a:["chato"],opts:["chato","chollo","bocado","chicle"],hint:"A small, wide glass typically used for red wine in Spanish bars.",sSrc:"Shall we go have a small {1} of wine at the corner bar?"},

{type:"mc",q:"'Bagaje cultural' en español se refiere a:",opts:["Las maletas de un viaje","El conocimiento y experiencia acumulados","Un tipo de comida","Un equipaje especial"],ans:"El conocimiento y experiencia acumulados",hint:"Figurative baggage: the knowledge you carry with you through life."},

{type:"match",pairs:[{trg:"alioli",src:"garlic sauce"},{trg:"bocado",src:"bite / morsel"},{trg:"chollo",src:"bargain"},{trg:"azúcar",src:"sugar"},{trg:"brillo",src:"shine"}]},

{type:"fb",s:"Tiene un {1} cultural impresionante tras años de viajes.",a:["bagaje"],opts:["bagaje","brillo","bocado","amasijo"],hint:"The accumulated knowledge and experience one carries through life.",sSrc:"He/she has an impressive cultural {1} after years of travel."},

{type:"mc",q:"'A la mayor brevedad posible' significa:",opts:["Con mucha calma","Lo antes posible","En el futuro lejano","Con mucho detalle"],ans:"Lo antes posible",hint:"A formal expression asking for something to be done quickly."}
]};

export default LESSON_10;
