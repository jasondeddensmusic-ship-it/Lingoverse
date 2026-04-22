// Lesson 3. Medio ambiente y clima
const LESSON_3 = {id:"esv2_b2gA_l3", title:"Medio ambiente y clima", icon:"🌍", xp:15, board:true, steps:[
{type:"intro", title:"Medio ambiente y clima", desc:"Discuss environmental issues, climate change, and sustainability with precise B2 vocabulary.", goals:["Learn 15 environmental terms","Debate climate and sustainability topics","Use formal register for ecological discussions"]},

{type:"teach", trg:"la absorción", src:"absorption", pos:"noun", gender:"f",
 note:"The process of soaking up or taking in.\nUsed in science and ecology.",
 example:"A: La absorción de CO2 por los bosques es vital.\nB: Sin los bosques, el cambio climático sería peor.",
 exampleSrc:"A: The absorption of CO2 by forests is vital.\nB: Without forests, climate change would be worse.",
 funFact:"From Latin absorbere (to swallow up). The Amazon absorbs 2 billion tons of CO2 yearly."},

{type:"teach", trg:"el nitrógeno", src:"nitrogen", pos:"noun", gender:"m",
 note:"Chemical element making up 78% of air.\nSymbol: N. Atomic number 7.",
 example:"A: Las plantas necesitan nitrógeno para crecer.\nB: Por eso usamos fertilizantes ricos en nitrógeno.",
 exampleSrc:"A: Plants need nitrogen to grow.\nB: That's why we use nitrogen-rich fertilizers.",
 funFact:"From Greek nitron (saltpeter) + genes (born). Lavoisier named it in 1790."},

{type:"teach", trg:"el nitrato", src:"nitrate", pos:"noun", gender:"m",
 note:"A chemical compound with nitrogen and oxygen.\nCommon in fertilizers and pollution.",
 example:"A: Los nitratos contaminan las aguas subterráneas.\nB: Es un problema grave en zonas agrícolas.",
 exampleSrc:"A: Nitrates pollute groundwater.\nB: It's a serious problem in agricultural areas.",
 funFact:"EU regulations limit nitrate levels in drinking water to 50mg per liter."},

{type:"teach", trg:"la normalización", src:"normalization / standardization", pos:"noun", gender:"f",
 note:"Making something standard or normal.\nFrom norma (rule, standard).",
 example:"A: La normalización de las emisiones es necesaria.\nB: Todos los países deberían cumplir los mismos estándares.",
 exampleSrc:"A: The standardization of emissions is necessary.\nB: All countries should meet the same standards.",
 funFact:"In Spain, AENOR is the national body responsible for industrial standardization."},

{type:"teach", trg:"la normativa", src:"the regulation / set of rules", pos:"noun", gender:"f",
 note:"A body of rules governing an activity.\nMore comprehensive than 'norma' (single rule).",
 example:"A: La normativa medioambiental se ha endurecido.\nB: Era necesario para proteger los ríos.",
 exampleSrc:"A: Environmental regulations have tightened.\nB: It was necessary to protect the rivers.",
 funFact:"Spain's Ley de Costas (Coastal Law) is one of Europe's strictest shore regulations."},

{type:"mc", q:"¿Qué es la absorción de CO2?", opts:["El proceso por el que los bosques captan dióxido de carbono","La emisión de gases contaminantes","El calentamiento del océano","La destrucción de la capa de ozono"], ans:"El proceso por el que los bosques captan dióxido de carbono",
 hint:"Think about forests 'soaking up' carbon dioxide from the atmosphere."},

{type:"fb", s:"La nueva {1} obliga a reducir las emisiones un treinta por ciento.", a:["normativa"], opts:["normativa","absorción","normalización","nitrógeno"],
 hint:"This noun refers to a set of regulations or rules governing an activity.",
 sSrc:"The new {1} requires reducing emissions by thirty percent."},

{type:"teach", trg:"el mejoramiento", src:"the improvement", pos:"noun", gender:"m",
 note:"The process of making something better.\nMore formal than 'mejora'.",
 example:"A: El mejoramiento de la calidad del aire es prioritario.\nB: Necesitamos menos coches en el centro.",
 exampleSrc:"A: The improvement of air quality is a priority.\nB: We need fewer cars in the center.",
 funFact:"'Mejoramiento' is preferred in Latin America; Spain tends to use 'mejora'."},

{type:"teach", trg:"nutrir", src:"to nourish / to feed", pos:"verb", gender:null,
 note:"To provide sustenance for growth.\nAlso figurative: nutrir la mente.",
 example:"A: El suelo necesita nutrientes para nutrir las plantas.\nB: Los fertilizantes orgánicos son la mejor opción.",
 exampleSrc:"A: The soil needs nutrients to nourish the plants.\nB: Organic fertilizers are the best option.",
 funFact:"From Latin nutrire. English 'nurse' and 'nurture' share this root."},

{type:"teach", trg:"nítido", src:"clear / sharp / crisp", pos:"adj", gender:null,
 note:"Describes something visually or conceptually very clear.\nNot just 'claro'.",
 example:"A: La imagen del satélite es muy nítida.\nB: Se ven perfectamente los cambios en el glaciar.",
 exampleSrc:"A: The satellite image is very sharp.\nB: You can perfectly see the changes in the glacier.",
 funFact:"From Latin nitidus (shining, bright). Related to English 'neat'."},

{type:"mc", q:"¿Qué diferencia hay entre 'normativa' y 'norma'?", opts:["La normativa es menos formal","La normativa es un conjunto de normas, la norma es una sola regla","Son sinónimos exactos","La norma es más amplia que la normativa"], ans:"La normativa es un conjunto de normas, la norma es una sola regla",
 hint:"Think about the relationship between a single rule and a whole body of rules."},

{type:"fb", s:"Los bosques {1} el ecosistema con oxígeno y humedad.", a:["nutren"], opts:["nutren","absorben","normalizan","definen"],
 hint:"This verb means to nourish or provide sustenance for growth.",
 sSrc:"Forests {1} the ecosystem with oxygen and moisture."},

{type:"teach", trg:"el nevado", src:"the snow-capped peak", pos:"noun", gender:"m",
 note:"A mountain with permanent snow. Common in the Andes.\nFrom nieve (snow).",
 example:"A: El nevado más alto de Colombia mide más de cinco mil metros.\nB: Los nevados están perdiendo hielo por el cambio climático.",
 exampleSrc:"A: The highest snow-capped peak in Colombia is over five thousand meters.\nB: Snow-capped peaks are losing ice due to climate change.",
 funFact:"Spain's Sierra Nevada ('snowy mountain range') near Granada hosts Europe's southernmost ski resort."},

{type:"teach", trg:"el mecanismo", src:"the mechanism", pos:"noun", gender:"m",
 note:"A system of parts working together.\nAlso abstract: mecanismo de control.",
 example:"A: ¿Cuál es el mecanismo de control de emisiones?\nB: Un sistema de cuotas y sanciones.",
 exampleSrc:"A: What is the emissions control mechanism?\nB: A system of quotas and penalties.",
 funFact:"From Greek mekhane (machine). Same root as 'mechanic' and 'machine'."},

{type:"teach", trg:"meteorológico", src:"meteorological / weather-related", pos:"adj", gender:null,
 note:"Related to weather and atmospheric conditions.\nFrom meteorología.",
 example:"A: El informe meteorológico anuncia lluvias para el fin de semana.\nB: Mejor que llevemos paraguas.",
 exampleSrc:"A: The weather report announces rain for the weekend.\nB: We'd better bring umbrellas.",
 funFact:"AEMET is Spain's national weather agency, founded in 1887."},

{type:"match", pairs:[
 {trg:"la absorción", src:"absorption"},
 {trg:"el nitrógeno", src:"nitrogen"},
 {trg:"la normativa", src:"regulation"},
 {trg:"el nevado", src:"snow-capped peak"},
 {trg:"meteorológico", src:"meteorological"}
]},

{type:"fb", s:"El informe {1} predice temperaturas récord este verano.", a:["meteorológico"], opts:["meteorológico","nítido","normativo","nutritivo"],
 hint:"This adjective relates to weather forecasting and atmospheric science.",
 sSrc:"The {1} report predicts record temperatures this summer."},

{type:"mc", q:"¿Qué significa 'nítido'?", opts:["Muy ruidoso","Muy lento","Muy claro y definido","Muy pequeño"], ans:"Muy claro y definido",
 hint:"Think about a sharp, crystal-clear image with no blur."},

{type:"drag_fill", s:"El {1} de reducción de emisiones es un {2} complejo.", blanks:{"1":"mecanismo","2":"proceso"}, pool:["mecanismo","proceso","nevado","nitrato"],
 hint:"The system for reducing emissions involves multiple working parts."},

{type:"fb", s:"La imagen del deshielo es tan {1} que impresiona.", a:["nítida"], opts:["nítida","meteorológica","normativa","nutritiva"],
 hint:"This adjective means sharp, clear, and well-defined visually.",
 sSrc:"The image of the ice melting is so {1} that it's striking."},

{type:"match", pairs:[
 {trg:"nutrir", src:"to nourish"},
 {trg:"nítido", src:"sharp / clear"},
 {trg:"el mejoramiento", src:"improvement"},
 {trg:"el mecanismo", src:"mechanism"},
 {trg:"el nitrato", src:"nitrate"}
]}
]};
export default LESSON_3;
