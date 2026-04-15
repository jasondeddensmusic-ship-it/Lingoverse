// B2 Gap Batch C Lesson 11 - Chemistry & Materials
const LESSON_11 = {id:"esv2_b2gC_l11",title:"Química y materiales",icon:"🧪",xp:15,board:true,steps:[
{type:"intro",title:"Química y materiales",desc:"Explore vocabulary for chemistry, natural materials, and industrial substances used in science and everyday life.",goals:["Learn 12 words about chemistry and materials","Discuss scientific substances and processes","Use technical scientific register"]},

{type:"teach",trg:"el nitrógeno",src:"the nitrogen",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical element, gas forming 78% of air.\nSymbol: N.",
 example:"A: El nitrógeno constituye la mayor parte de la atmósfera.\nB: Sin embargo, las plantas necesitan fijarlo para crecer.",
 exampleSrc:"A: Nitrogen makes up most of the atmosphere.\nB: However, plants need to fix it in order to grow.",
 funFact:"From Greek nitron (niter) + genes (producing). Nitrogen was discovered in 1772 by Daniel Rutherford."},

{type:"teach",trg:"el nitrato",src:"the nitrate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound containing nitrogen and oxygen.\nUsed in fertilizers and explosives.",
 example:"A: Los nitratos en el agua potable pueden ser peligrosos.\nB: Por eso se controlan los niveles en los embalses.",
 exampleSrc:"A: Nitrates in drinking water can be dangerous.\nB: That's why levels are monitored in reservoirs.",
 funFact:"Spain's agricultural regions face nitrate pollution from excessive fertilizer use, regulated by EU directives."},

{type:"teach",trg:"el ozono",src:"the ozone",pos:"noun",gender:"m",
 note:"Masculine noun. A molecule of three oxygen atoms.\nForms a protective layer in the atmosphere.",
 example:"A: La capa de ozono protege la Tierra de los rayos ultravioleta.\nB: Su destrucción fue uno de los mayores problemas ambientales.",
 exampleSrc:"A: The ozone layer protects Earth from ultraviolet rays.\nB: Its destruction was one of the greatest environmental problems.",
 funFact:"From Greek ozein (to smell). Ozone has a distinctive sharp smell, often noticed after thunderstorms."},

{type:"teach",trg:"el pegamento",src:"the glue / adhesive",pos:"noun",gender:"m",
 note:"Masculine noun. A substance used to stick things together.\nFrom pegar (to stick).",
 example:"A: Necesito pegamento para arreglar este jarrón roto.\nB: Usa pegamento especial para cerámica.",
 exampleSrc:"A: I need glue to fix this broken vase.\nB: Use special ceramic glue.",
 funFact:"The verb pegar has many meanings in Spanish: to stick, to hit, to infect, to suit. Context is everything."},

{type:"mc",q:"¿Qué gas constituye la mayor parte de la atmósfera terrestre?",opts:["El nitrógeno","El ozono","El nitrato","El oxígeno"],ans:"El nitrógeno",hint:"This element makes up about 78% of the air we breathe, though we cannot use it directly."},

{type:"teach",trg:"la malaquita",src:"the malachite",pos:"noun",gender:"f",
 note:"Feminine noun. A green copper mineral used in jewelry.\nFrom Greek malache (mallow plant).",
 example:"A: Esta pulsera de malaquita tiene un verde precioso.\nB: Es una piedra que se usa desde la antigüedad.",
 exampleSrc:"A: This malachite bracelet has a beautiful green.\nB: It's a stone that has been used since antiquity.",
 funFact:"Named for its color resembling mallow leaves. The Russians used malaquita to decorate palace interiors."},

{type:"teach",trg:"la paleta",src:"the palette / trowel / shoulder blade",pos:"noun",gender:"f",
 note:"Feminine noun. A painter's board for mixing colors.\nAlso a bricklayer's trowel.",
 example:"A: La paleta del pintor estaba llena de colores vivos.\nB: Prefiere mezclar los tonos directamente en el lienzo.",
 exampleSrc:"A: The painter's palette was full of vivid colors.\nB: He prefers to mix the tones directly on the canvas.",
 funFact:"In Spanish, 'paleta' has at least 5 meanings: palette, trowel, shoulder blade, ice lolly, and front teeth."},

{type:"teach",trg:"el pedal",src:"the pedal",pos:"noun",gender:"m",
 note:"Masculine noun. A lever pressed by the foot.\nFrom Latin pes (foot).",
 example:"A: Pisa el pedal del freno con suavidad.\nB: Si frenas de golpe, los pasajeros se asustan.",
 exampleSrc:"A: Press the brake pedal gently.\nB: If you brake suddenly, the passengers get scared.",
 funFact:"From Latin pes/pedis (foot). Related words: peatón (pedestrian), pedestal, pedalear (to pedal)."},

{type:"fb",s:"La capa de {1} protege la Tierra de la radiación ultravioleta.",a:["ozono"],opts:["ozono","nitrógeno","nitrato","pegamento"],hint:"A layer of a gas made of three oxygen atoms that shields Earth from harmful rays.",sSrc:"The {1} layer protects Earth from ultraviolet radiation."},

{type:"teach",trg:"el asta",src:"the flagpole / horn (of an animal) / shaft",pos:"noun",gender:"f",
 note:"Feminine noun but uses 'el' (like el agua).\nThe pole for a flag or an animal's horn.",
 example:"A: La bandera ondea en lo alto del asta.\nB: La cambiaron esta mañana por la fiesta nacional.",
 exampleSrc:"A: The flag waves at the top of the pole.\nB: They changed it this morning for the national holiday.",
 funFact:"Despite being feminine, 'asta' takes 'el' in singular because it starts with a stressed 'a' sound."},

{type:"teach",trg:"la base",src:"the base / foundation / basis",pos:"noun",gender:"f",
 note:"Feminine noun. The bottom support or fundamental principle.\nFrom Latin basis.",
 example:"A: La base de una buena investigación es la metodología.\nB: Sin datos fiables, las conclusiones no valen.",
 exampleSrc:"A: The basis of good research is methodology.\nB: Without reliable data, the conclusions are worthless.",
 funFact:"In chemistry, a 'base' is the opposite of an acid. In military, a 'base' is a permanent installation."},

{type:"teach",trg:"la panza",src:"the belly / paunch",pos:"noun",gender:"f",
 note:"Feminine noun. The stomach or a protruding belly.\nColloquial and affectionate.",
 example:"A: Después de las Navidades, todos tenemos más panza.\nB: Es hora de volver al gimnasio.",
 exampleSrc:"A: After Christmas, we all have a bigger belly.\nB: It's time to go back to the gym.",
 funFact:"'Panza' is more informal than 'barriga' or 'vientre'. Sancho Panza's name literally means Sancho Belly."},

{type:"mc",q:"¿Qué mineral verde se usa en joyería desde la antigüedad?",opts:["La malaquita","El nitrato","El nitrógeno","El pegamento"],ans:"La malaquita",hint:"A copper-based green mineral named after a plant with similar-colored leaves."},

{type:"fb",s:"Necesito {1} especial para cerámica para arreglar este jarrón.",a:["pegamento"],opts:["pegamento","nitrato","ozono","base"],hint:"A sticky substance used to join broken pieces together.",sSrc:"I need special ceramic {1} to fix this vase."},

{type:"match",pairs:[{trg:"nitrógeno",src:"nitrogen"},{trg:"ozono",src:"ozone"},{trg:"malaquita",src:"malachite"},{trg:"pedal",src:"pedal"},{trg:"panza",src:"belly"}]},

{type:"fb",s:"La {1} de toda buena investigación es una metodología sólida.",a:["base"],opts:["base","paleta","panza","malaquita"],hint:"The fundamental foundation or starting point upon which everything else is built.",sSrc:"The {1} of all good research is a solid methodology."}
]};

export default LESSON_11;
