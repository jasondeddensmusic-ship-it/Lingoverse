// B2 Gap Batch 5 Lesson 08 - Science & Nature
const LESSON_8 = {id:"esv2_b2g5_l8",title:"Ciencia y naturaleza",icon:"🔬",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia y naturaleza",desc:"Learn scientific vocabulary about natural phenomena, chemistry, and environmental processes.",goals:["Learn 15 words about science and nature","Discuss environmental and chemical concepts","Use scientific register with confidence"]},

{type:"teach",trg:"el hidrocarburo",src:"the hydrocarbon",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound of hydrogen and carbon.\nFossil fuels are hydrocarbons.",
 example:"A: Los hidrocarburos son la base de los combustibles fósiles.\nB: Su uso masivo causa el cambio climático.",
 exampleSrc:"A: Hydrocarbons are the basis of fossil fuels.\nB: Their massive use causes climate change.",
 funFact:"Compound of hidro (water/hydrogen) + carburo (carbon compound). Spain imports most of its hydrocarbons."},

{type:"teach",trg:"el fertilizante",src:"the fertilizer",pos:"noun",gender:"m",
 note:"Masculine noun. A substance that enriches soil for plants.\nFrom fértil (fertile).",
 example:"A: Los fertilizantes químicos contaminan los acuíferos.\nB: Por eso muchos agricultores usan abono orgánico.",
 exampleSrc:"A: Chemical fertilizers contaminate the aquifers.\nB: That's why many farmers use organic compost.",
 funFact:"Spain is Europe's largest consumer of fertilizers due to its intensive agriculture in the southeast."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of soaking up or taking in.\nUsed in physics, chemistry, biology.",
 example:"A: La absorción de nutrientes ocurre en el intestino delgado.\nB: Es un proceso fundamental para la salud.",
 exampleSrc:"A: The absorption of nutrients occurs in the small intestine.\nB: It is a fundamental process for health.",
 funFact:"From Latin absorbere (to swallow up). In economics, 'absorción' also means a company takeover."},

{type:"teach",trg:"la fluctuación",src:"the fluctuation",pos:"noun",gender:"f",
 note:"Feminine noun. An irregular rise and fall.\nCommon in science, economics, temperature.",
 example:"A: Las fluctuaciones de temperatura afectan a los cultivos.\nB: Este año han sido especialmente intensas.",
 exampleSrc:"A: Temperature fluctuations affect the crops.\nB: This year they have been especially intense.",
 funFact:"From Latin fluctuare (to wave). Related to 'fluir' (to flow) and 'fluido' (fluid)."},

{type:"teach",trg:"fluido",src:"fluid / flowing",pos:"adj",gender:null,
 note:"Adjective. Flowing freely, smooth.\nAlso noun: el fluido (a fluid substance).",
 example:"A: Su español es muy fluido.\nB: Lleva diez años viviendo en Madrid.",
 exampleSrc:"A: His Spanish is very fluid.\nB: He has been living in Madrid for ten years.",
 funFact:"In physics, a 'fluido' is any substance that flows: both liquids and gases qualify."},

{type:"mc",q:"¿Qué son los hidrocarburos?",opts:["Compuestos de hidrógeno y carbono","Tipos de fertilizante","Nutrientes del suelo","Ondas electromagnéticas"],ans:"Compuestos de hidrógeno y carbono",hint:"The chemical compounds that make up fossil fuels like petrol and natural gas."},

{type:"teach",trg:"la esfera",src:"the sphere / globe",pos:"noun",gender:"f",
 note:"Feminine noun. A perfectly round 3D shape.\nFigurative: a field or area of activity.",
 example:"A: La Tierra no es una esfera perfecta.\nB: Es ligeramente achatada por los polos.",
 exampleSrc:"A: The Earth is not a perfect sphere.\nB: It is slightly flattened at the poles.",
 funFact:"Figuratively, 'esfera de influencia' (sphere of influence) is common in political discourse."},

{type:"teach",trg:"el diámetro",src:"the diameter",pos:"noun",gender:"m",
 note:"Masculine noun. A straight line through the center of a circle.\nFrom Greek dia + metron.",
 example:"A: ¿Cuál es el diámetro de la Tierra?\nB: Aproximadamente doce mil setecientos kilómetros.",
 exampleSrc:"A: What is the diameter of the Earth?\nB: Approximately twelve thousand seven hundred kilometers.",
 funFact:"From Greek dia (through) + metron (measure). Used in everyday contexts for pipe sizes, tires, etc."},

{type:"teach",trg:"el grosor",src:"the thickness",pos:"noun",gender:"m",
 note:"Masculine noun. How thick something is.\nFrom grueso (thick).",
 example:"A: El grosor de las paredes medievales era impresionante.\nB: Podían tener hasta dos metros.",
 exampleSrc:"A: The thickness of medieval walls was impressive.\nB: They could be up to two meters.",
 funFact:"In construction, 'grosor' is a precise measurement term, while 'espesor' is its synonym."},

{type:"teach",trg:"glaciar",src:"glacial / glacier-related",pos:"adj",gender:null,
 note:"Adjective. Relating to glaciers or extreme cold.\nAlso noun: el glaciar (the glacier).",
 example:"A: La era glaciar transformó el paisaje de Europa.\nB: Los glaciares cubrían hasta la península ibérica.",
 exampleSrc:"A: The ice age transformed the landscape of Europe.\nB: Glaciers covered as far as the Iberian Peninsula.",
 funFact:"Spain has its last remaining glacier, the Aneto glacier in the Pyrenees, which is rapidly shrinking."},

{type:"fb",s:"Los {1} químicos pueden contaminar el agua subterránea.",a:["fertilizantes"],opts:["fertilizantes","hidrocarburos","diámetros","glaciares"],hint:"Substances added to soil to make crops grow better.",sSrc:"Chemical {1} can contaminate groundwater."},

{type:"teach",trg:"la detonación",src:"the detonation / explosion",pos:"noun",gender:"f",
 note:"Feminine noun. A violent explosion.\nFrom detonar (to detonate).",
 example:"A: La detonación se oyó a kilómetros de distancia.\nB: Fue una explosión controlada en la cantera.",
 exampleSrc:"A: The detonation was heard kilometers away.\nB: It was a controlled explosion at the quarry.",
 funFact:"In engine science, 'detonación' refers to uncontrolled combustion that damages engines (engine knock)."},

{type:"teach",trg:"el carbonato",src:"the carbonate",pos:"noun",gender:"m",
 note:"Masculine noun. A salt of carbonic acid.\nCommon: carbonato de calcio (limestone).",
 example:"A: Las cuevas se forman por la disolución del carbonato de calcio.\nB: El agua crea las estalactitas y estalagmitas.",
 exampleSrc:"A: Caves form through the dissolution of calcium carbonate.\nB: Water creates the stalactites and stalagmites.",
 funFact:"'Carbonato sódico' (sodium carbonate) is commonly known as 'sosa' and used in cleaning products."},

{type:"teach",trg:"el amoníaco",src:"the ammonia",pos:"noun",gender:"m",
 note:"Masculine noun. A pungent chemical compound (NH3).\nUsed in cleaning and agriculture.",
 example:"A: El olor a amoníaco del producto es muy fuerte.\nB: Abre las ventanas cuando lo uses.",
 exampleSrc:"A: The ammonia smell of the product is very strong.\nB: Open the windows when you use it.",
 funFact:"Named after the ancient Egyptian god Amun. Romans found ammonium salts near his temple in Libya."},

{type:"teach",trg:"fluctuante",src:"fluctuating",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Rising and falling irregularly.",
 example:"A: Los precios del petróleo son muy fluctuantes.\nB: Cambian cada día según la demanda.",
 exampleSrc:"A: Oil prices are very fluctuating.\nB: They change every day according to demand.",
 funFact:"In economics, 'tipo de cambio fluctuante' (floating exchange rate) describes most modern currencies."},

{type:"mc",q:"¿Qué es la absorción?",opts:["Un compuesto químico","El proceso de absorber o asimilar algo","Un tipo de explosión","Una medida de grosor"],ans:"El proceso de absorber o asimilar algo",hint:"Think about a sponge soaking up water, or your body taking in nutrients."},

{type:"fb",s:"La {1} del gas causó daños en las ventanas cercanas.",a:["detonación"],opts:["detonación","absorción","fluctuación","esfera"],hint:"A violent explosion or the act of something blowing up.",sSrc:"The {1} of the gas caused damage to nearby windows."},

{type:"match",pairs:[{trg:"esfera",src:"sphere"},{trg:"diámetro",src:"diameter"},{trg:"grosor",src:"thickness"},{trg:"carbonato",src:"carbonate"},{trg:"amoníaco",src:"ammonia"}]},

{type:"fb",s:"Los precios del mercado son muy {1} en esta época del año.",a:["fluctuantes"],opts:["fluctuantes","fluidos","glaciares","férreos"],hint:"An adjective meaning rising and falling irregularly, not stable.",sSrc:"Market prices are very {1} at this time of year."},

{type:"mc",q:"¿Dónde está el último glaciar de España?",opts:["En los Picos de Europa","En la Sierra de Guadarrama","En los Pirineos","En Sierra Nevada"],ans:"En los Pirineos",hint:"Spain's remaining glacier is in the mountain range bordering France."}
]};

export default LESSON_8;
