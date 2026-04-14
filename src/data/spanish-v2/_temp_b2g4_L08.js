// B2 Gap Batch 4 Lesson 08 - Culture & Spirituality
const LESSON_8 = {id:"esv2_b2g4_l8",title:"Cultura y espiritualidad",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Cultura y espiritualidad",desc:"Explore vocabulary for discussing cultural movements, spiritual traditions, and artistic expression.",goals:["Learn 15 culture and spirituality words","Discuss art movements and beliefs","Express abstract cultural ideas"]},

{type:"teach",trg:"la espiritualidad",src:"the spirituality",pos:"noun",gender:"f",
 note:"Feminine noun. Concern with the soul or spirit.\nAdjective: espiritual.",
 example:"A: La espiritualidad no tiene que ser religiosa.\nB: Exacto, puede ser una conexión con la naturaleza.",
 exampleSrc:"A: Spirituality does not have to be religious.\nB: Exactly, it can be a connection with nature.",
 funFact:"The Camino de Santiago draws thousands seeking 'espiritualidad' through walking each year."},

{type:"teach",trg:"el esplendor",src:"the splendor / glory",pos:"noun",gender:"m",
 note:"Masculine noun. Great beauty or magnificence.\nAlso: época de esplendor (golden age).",
 example:"A: La Alhambra muestra el esplendor del arte nazarí.\nB: Es uno de los monumentos más visitados de España.",
 exampleSrc:"A: The Alhambra shows the splendor of Nasrid art.\nB: It is one of the most visited monuments in Spain.",
 funFact:"Spain's 'Siglo de Oro' (Golden Age, 1500s-1600s) was its era of maximum cultural splendor."},

{type:"teach",trg:"expresionista",src:"expressionist",pos:"adj",gender:null,
 note:"Adjective. Related to expressionism in art.\nAlso noun: un expresionista.",
 example:"A: Esta pintura tiene un estilo claramente expresionista.\nB: Los colores transmiten mucha emoción.",
 exampleSrc:"A: This painting has a clearly expressionist style.\nB: The colors convey a lot of emotion.",
 funFact:"While expressionism was mainly German, Spanish artists like Goya are considered precursors."},

{type:"teach",trg:"explosivo",src:"explosive",pos:"adj",gender:null,
 note:"Adjective. Prone to exploding or very intense.\nFeminine: explosiva. Also noun.",
 example:"A: La situación política es muy explosiva.\nB: Cualquier cosa puede desencadenar una crisis.",
 exampleSrc:"A: The political situation is very explosive.\nB: Anything could trigger a crisis.",
 funFact:"Used figuratively for temperament: 'tiene un carácter explosivo' means a volatile personality."},

{type:"teach",trg:"el dogma",src:"the dogma",pos:"noun",gender:"m",
 note:"Masculine noun. A belief held as unquestionably true.\nAdjective: dogmático.",
 example:"A: No debemos aceptar ninguna idea como dogma.\nB: El pensamiento crítico es fundamental.",
 exampleSrc:"A: We should not accept any idea as dogma.\nB: Critical thinking is fundamental.",
 funFact:"From Greek dogma (opinion, decree). Pedro Almodóvar has a production company called El Deseo."},

{type:"mc",q:"¿Qué es el esplendor?",opts:["Gran belleza o magnificencia","Un tipo de música","Una enfermedad grave","Un deporte acuático"],ans:"Gran belleza o magnificencia",hint:"Think about the magnificent beauty of a palace or golden age."},

{type:"teach",trg:"la contemplación",src:"the contemplation",pos:"noun",gender:"f",
 note:"Feminine noun. Deep reflective thought.\nVerb: contemplar.",
 example:"A: Pasó horas en la contemplación del paisaje.\nB: Necesitaba tiempo para pensar.",
 exampleSrc:"A: He spent hours in contemplation of the landscape.\nB: He needed time to think.",
 funFact:"In Catholic tradition, 'vida contemplativa' refers to the cloistered life of monks and nuns."},

{type:"teach",trg:"el encierro",src:"the confinement / bull run",pos:"noun",gender:"m",
 note:"Masculine noun. Being shut in, or the running of bulls.\nFrom encerrar (to lock in).",
 example:"A: Los encierros de San Fermín atraen miles de turistas.\nB: Es una tradición muy controvertida.",
 exampleSrc:"A: The bull runs of San Fermin attract thousands of tourists.\nB: It is a very controversial tradition.",
 funFact:"Pamplona's 'encierros' in July are world-famous. Hemingway made them iconic in 'The Sun Also Rises'."},

{type:"teach",trg:"esquemático",src:"schematic / simplified",pos:"adj",gender:null,
 note:"Adjective. Presented in a simplified diagram form.\nFeminine: esquemática.",
 example:"A: Haz un dibujo esquemático del proyecto.\nB: Así será más fácil explicarlo en la reunión.",
 exampleSrc:"A: Make a schematic drawing of the project.\nB: That way it will be easier to explain at the meeting.",
 funFact:"From Greek skhema (form). 'Arte esquemático' refers to prehistoric simplified rock paintings in Spain."},

{type:"teach",trg:"la desnudez",src:"the nudity / nakedness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unclothed.\nAlso figurative: la desnudez de la verdad.",
 example:"A: El arte renacentista celebra la desnudez del cuerpo humano.\nB: Era una forma de idealizar la belleza.",
 exampleSrc:"A: Renaissance art celebrates the nudity of the human body.\nB: It was a way of idealizing beauty.",
 funFact:"Velázquez's 'Venus del espejo' is one of the few surviving female nudes from Golden Age Spain."},

{type:"fb",s:"Los {1} de San Fermín son famosos en todo el mundo.",a:["encierros"],opts:["encierros","esplendores","dogmas","enredos"],hint:"The running of bulls through the streets of Pamplona in July.",sSrc:"The {1} of San Fermin are famous worldwide."},

{type:"teach",trg:"la dureza",src:"the hardness / toughness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being hard or harsh.\nFrom duro (hard).",
 example:"A: La dureza del clima forjó el carácter de la gente.\nB: Son personas fuertes y resilientes.",
 exampleSrc:"A: The harshness of the climate forged the character of the people.\nB: They are strong and resilient people.",
 funFact:"In mineralogy, the 'escala de dureza de Mohs' measures hardness from 1 (talc) to 10 (diamond)."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A statement of exact meaning.\nAlso: alta definición (high definition).",
 example:"A: ¿Cuál es la definición exacta de esta palabra?\nB: Busquémosla en el diccionario de la RAE.",
 exampleSrc:"A: What is the exact definition of this word?\nB: Let us look it up in the RAE dictionary.",
 funFact:"The RAE (Real Academia Española) has been defining Spanish words since 1713."},

{type:"teach",trg:"difícil",src:"difficult / hard",pos:"adj",gender:null,
 note:"Adjective. Not easy. Same form for both genders.\nOpposite: fácil.",
 example:"A: La situación es difícil, pero no imposible.\nB: Con esfuerzo, saldremos adelante.",
 exampleSrc:"A: The situation is difficult, but not impossible.\nB: With effort, we will get through.",
 funFact:"'Hacerse el difícil' means to play hard to get. A very common Spanish expression."},

{type:"mc",q:"¿Qué es la contemplación?",opts:["Pensamiento profundo y reflexivo","Un tipo de danza","Una competición deportiva","Una técnica de cocina"],ans:"Pensamiento profundo y reflexivo",hint:"Think about spending time in deep, quiet thought and reflection."},

{type:"fb",s:"La {1} de este material lo hace ideal para la construcción.",a:["dureza"],opts:["dureza","desnudez","definición","devoción"],hint:"The quality of being hard, resistant, and tough.",sSrc:"The {1} of this material makes it ideal for construction."},

{type:"match",pairs:[{trg:"espiritualidad",src:"spirituality"},{trg:"encierro",src:"bull run"},{trg:"contemplación",src:"contemplation"},{trg:"esplendor",src:"splendor"},{trg:"dogma",src:"dogma"}]},

{type:"mc",q:"Una imagen de 'alta definición' tiene:",opts:["Mucha nitidez y detalle","Muchos colores","Poco brillo","Gran tamaño"],ans:"Mucha nitidez y detalle",hint:"Think about the clarity and sharpness of a high-quality screen."},

{type:"fb",s:"El artista tenía un estilo {1}, con formas muy simplificadas.",a:["esquemático"],opts:["esquemático","expresionista","explosivo","estático"],hint:"Reduced to simplified outlines and basic shapes, like a diagram.",sSrc:"The artist had a {1} style, with very simplified forms."}
]};

export default LESSON_8;
