// B2 Gap Batch 5 Lesson 19 - Environment & Sustainability
const LESSON_19 = {id:"esv2_b2g5_l19",title:"Medio ambiente y sostenibilidad",icon:"🌍",xp:15,board:true,steps:[
{type:"intro",title:"Medio ambiente y sostenibilidad",desc:"Learn vocabulary about environmental issues, renewable energy, and sustainability.",goals:["Learn 15 words about environment and energy","Discuss sustainability and pollution","Use formal environmental discourse vocabulary"]},

{type:"teach",trg:"fotovoltaico",src:"photovoltaic",pos:"adj",gender:null,
 note:"Adjective. Converting light into electricity.\nFeminine: fotovoltaica.",
 example:"A: Los paneles fotovoltaicos producen energía limpia.\nB: Cada vez se instalan más en los tejados.",
 exampleSrc:"A: Photovoltaic panels produce clean energy.\nB: More and more are being installed on rooftops.",
 funFact:"Spain is one of Europe's leaders in solar energy. 'Fotovoltaico' comes from Greek photos (light) + volt."},

{type:"teach",trg:"hídrico",src:"water-related / hydric",pos:"adj",gender:null,
 note:"Adjective. Relating to water resources.\nFeminine: hídrica. Formal/technical.",
 example:"A: El estrés hídrico afecta al sur de España.\nB: Las sequías son cada vez más frecuentes.",
 exampleSrc:"A: Water stress affects southern Spain.\nB: Droughts are becoming more frequent.",
 funFact:"Spain faces chronic 'estrés hídrico' (water stress). The Tajo-Segura water transfer is a major infrastructure."},

{type:"teach",trg:"hidrológico",src:"hydrological",pos:"adj",gender:null,
 note:"Adjective. Relating to the study of water systems.\nFeminine: hidrológica.",
 example:"A: El plan hidrológico nacional gestiona los recursos de agua.\nB: Es uno de los temas más polémicos en España.",
 exampleSrc:"A: The national hydrological plan manages water resources.\nB: It is one of the most controversial topics in Spain.",
 funFact:"Spain's Plan Hidrológico Nacional has sparked fierce debates between water-rich north and dry south."},

{type:"teach",trg:"el excremento",src:"the excrement",pos:"noun",gender:"m",
 note:"Masculine noun. Waste matter from the body.\nFormal/scientific term.",
 example:"A: Los excrementos de los animales contaminan los ríos.\nB: Las granjas intensivas son un problema serio.",
 exampleSrc:"A: Animal excrement contaminates the rivers.\nB: Intensive farms are a serious problem.",
 funFact:"In Spanish environmental law, 'gestión de excrementos' (waste management) is heavily regulated."},

{type:"teach",trg:"el fósil",src:"the fossil",pos:"noun",gender:"m",
 note:"Masculine noun. Preserved remains of ancient life.\nAdj: combustible fósil (fossil fuel).",
 example:"A: Debemos reducir el uso de combustibles fósiles.\nB: Las energías renovables son la alternativa.",
 exampleSrc:"A: We must reduce the use of fossil fuels.\nB: Renewable energies are the alternative.",
 funFact:"From Latin fossilis (dug up). Spain aims to phase out fossil fuels for electricity by 2050."},

{type:"mc",q:"¿Qué significa 'fotovoltaico'?",opts:["Que convierte la luz en electricidad","Que produce calor intenso","Que funciona con agua","Que usa energía del viento"],ans:"Que convierte la luz en electricidad",hint:"Solar panels that turn sunlight directly into electrical energy."},

{type:"teach",trg:"el acorazado",src:"the battleship / armored vehicle",pos:"noun",gender:"m",
 note:"Masculine noun. A heavily armored warship.\nAlso adjective: armored, fortified.",
 example:"A: Los acorazados dominaron las guerras navales del siglo XX.\nB: Eran los barcos más grandes y poderosos.",
 exampleSrc:"A: Battleships dominated 20th-century naval warfare.\nB: They were the largest and most powerful ships.",
 funFact:"From coraza (armor). The famous film 'El acorazado Potemkin' is known in Spanish-speaking cinephile circles."},

{type:"teach",trg:"destructor",src:"destructive / destroyer",pos:"adj",gender:null,
 note:"Adjective. Causing great damage.\nAlso noun: el destructor (warship type). Feminine: destructora.",
 example:"A: El huracán fue enormemente destructor.\nB: Arrasó con todo a su paso.",
 exampleSrc:"A: The hurricane was enormously destructive.\nB: It devastated everything in its path.",
 funFact:"In the navy, 'el destructor' is a fast warship designed to escort larger vessels and hunt submarines."},

{type:"teach",trg:"la base",src:"the base / basis / foundation",pos:"noun",gender:"f",
 note:"Feminine noun. The bottom support or fundamental principle.\nVery versatile word.",
 example:"A: La educación es la base del progreso social.\nB: Sin ella no hay igualdad de oportunidades.",
 exampleSrc:"A: Education is the basis of social progress.\nB: Without it there is no equality of opportunity.",
 funFact:"'A base de' (by means of) is an extremely common phrase: 'lo logró a base de esfuerzo' (through effort)."},

{type:"teach",trg:"el contaminante",src:"the pollutant / contaminant",pos:"noun",gender:"m",
 note:"Masculine noun. A substance that pollutes.\nAlso adjective: sustancia contaminante.",
 example:"A: Los contaminantes del agua afectan a la fauna marina.\nB: Hay que controlar los vertidos industriales.",
 exampleSrc:"A: Water pollutants affect marine life.\nB: Industrial discharges must be controlled.",
 funFact:"Spain's Ley de Aguas regulates over 200 types of contaminantes that can enter water systems."},

{type:"fb",s:"Los paneles {1} son cada vez más eficientes y baratos.",a:["fotovoltaicos"],opts:["fotovoltaicos","hidrológicos","hídricos","destructores"],hint:"Adjective describing solar technology that converts light into electricity.",sSrc:"The {1} panels are increasingly efficient and cheap."},

{type:"teach",trg:"el estándar",src:"the standard",pos:"noun",gender:"m",
 note:"Masculine noun. An accepted level of quality.\nAlso adjective: procedimiento estándar.",
 example:"A: Los estándares de emisiones son cada vez más estrictos.\nB: Las fábricas deben adaptarse o cerrar.",
 exampleSrc:"A: Emission standards are increasingly strict.\nB: Factories must adapt or close.",
 funFact:"The EU sets environmental estándares that all member states, including Spain, must meet."},

{type:"teach",trg:"el apocalipsis",src:"the apocalypse",pos:"noun",gender:"m",
 note:"Masculine noun. A catastrophic destruction.\nFrom the biblical Book of Revelation.",
 example:"A: Los científicos advierten de un apocalipsis climático.\nB: Si no actuamos, las consecuencias serán irreversibles.",
 exampleSrc:"A: Scientists warn of a climate apocalypse.\nB: If we don't act, the consequences will be irreversible.",
 funFact:"From Greek apokalypsis (revelation). In everyday Spanish, 'apocalíptico' describes any doomsday scenario."},

{type:"teach",trg:"el carbonato",src:"the carbonate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound containing CO3.\nKey in geology and industry.",
 example:"A: El carbonato de calcio forma las montañas calizas.\nB: También se usa en la fabricación de cemento.",
 exampleSrc:"A: Calcium carbonate forms limestone mountains.\nB: It is also used in cement manufacturing.",
 funFact:"Spain's many limestone (caliza) landscapes, like the Torcal de Antequera, are formed from carbonato."},

{type:"teach",trg:"hortofrutícola",src:"fruit and vegetable (related)",pos:"adj",gender:null,
 note:"Adjective. Relating to the fruit and vegetable industry.\nCompound of horto + frutícola.",
 example:"A: El sector hortofrutícola es clave en Almería.\nB: Es conocida como 'la huerta de Europa'.",
 exampleSrc:"A: The fruit and vegetable sector is key in Almería.\nB: It is known as 'the garden of Europe'.",
 funFact:"Almería's plastic greenhouses are visible from space. They produce most of Europe's winter vegetables."},

{type:"mc",q:"¿Qué es el estrés hídrico?",opts:["Escasez de recursos de agua en una región","Contaminación del aire por fábricas","Destrucción de bosques por incendios","Aumento de temperatura global"],ans:"Escasez de recursos de agua en una región",hint:"When a region does not have enough water resources to meet its needs."},

{type:"fb",s:"Debemos reducir el uso de combustibles {1} para frenar el cambio climático.",a:["fósiles"],opts:["fósiles","fotovoltaicos","hídricos","hortofrutícolas"],hint:"Fuels formed from ancient organic matter buried underground for millions of years.",sSrc:"We must reduce the use of {1} fuels to slow down climate change."},

{type:"match",pairs:[{trg:"fotovoltaico",src:"photovoltaic"},{trg:"hídrico",src:"water-related"},{trg:"contaminante",src:"pollutant"},{trg:"fósil",src:"fossil"},{trg:"hortofrutícola",src:"fruit and vegetable"}]},

{type:"fb",s:"El sector {1} de Almería exporta verduras a toda Europa.",a:["hortofrutícola"],opts:["hortofrutícola","fotovoltaico","hidrológico","destructor"],hint:"An adjective describing the fruit and vegetable farming industry.",sSrc:"The {1} sector of Almería exports vegetables to all of Europe."},

{type:"mc",q:"¿Qué objetivo tiene España con los combustibles fósiles?",opts:["Eliminarlos progresivamente para la generación eléctrica","Aumentar su producción nacional","Exportarlos a otros países","Sustituirlos por energía nuclear únicamente"],ans:"Eliminarlos progresivamente para la generación eléctrica",hint:"Spain has set a long-term target to stop using these for producing electricity."}
]};

export default LESSON_19;
