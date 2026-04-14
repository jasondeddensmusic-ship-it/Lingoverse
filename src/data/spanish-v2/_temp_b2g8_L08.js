// B2 Gap Batch 8 Lesson 08 - Society & Power
const LESSON_8 = {id:"esv2_b2g8_l8",title:"Sociedad y poder",icon:"👑",xp:15,board:true,steps:[
{type:"intro",title:"Sociedad y poder",desc:"Learn vocabulary for social structures, power dynamics, and political ideologies.",goals:["Learn 14 society and power terms","Discuss political and social structures","Use formal register for debates"]},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. Political ideology advocating collective ownership.\nAdjective: comunista.",
 example:"A: El comunismo tuvo mucha influencia en la política española del siglo XX.\nB: Sí, especialmente durante la Guerra Civil.",
 exampleSrc:"A: Communism had a lot of influence on twentieth-century Spanish politics.\nB: Yes, especially during the Civil War.",
 funFact:"The Spanish Communist Party (PCE) was legalized in 1977, a key moment in Spain's democratic transition."},

{type:"teach",trg:"el magnate",src:"the magnate / tycoon",pos:"noun",gender:"m",
 note:"Masculine noun. A very wealthy and powerful business person.\nFrom Latin magnas (great person).",
 example:"A: Un magnate de la tecnología compró el periódico.\nB: Espero que no cambie la línea editorial.",
 exampleSrc:"A: A tech magnate bought the newspaper.\nB: I hope he does not change the editorial line.",
 funFact:"Spain's richest magnate, Amancio Ortega (Zara founder), is one of the wealthiest people in the world."},

{type:"teach",trg:"el maltrato",src:"the mistreatment / abuse",pos:"noun",gender:"m",
 note:"Masculine noun. Cruel or violent treatment of someone.\nMal (bad) + trato (treatment).",
 example:"A: La ley contra el maltrato se ha endurecido mucho.\nB: Era necesario. Las víctimas necesitan más protección.",
 exampleSrc:"A: The law against abuse has become much stricter.\nB: It was necessary. Victims need more protection.",
 funFact:"Spain's 2004 gender violence law was pioneering in Europe, creating specialized courts for abuse cases."},

{type:"teach",trg:"el machismo",src:"the machismo / male chauvinism",pos:"noun",gender:"m",
 note:"Masculine noun. Aggressive masculine pride or domination.\nFrom macho (male).",
 example:"A: El machismo sigue siendo un problema en muchas sociedades.\nB: La educación es clave para combatirlo.",
 exampleSrc:"A: Machismo continues to be a problem in many societies.\nB: Education is key to fighting it.",
 funFact:"The word 'machismo' was exported from Spanish to English and is now used internationally."},

{type:"mc",q:"¿Qué ley española de 2004 fue pionera en Europa?",
 opts:["La ley contra el maltrato de género","La ley de educación","La ley de comercio exterior","La ley de medioambiente"],
 ans:"La ley contra el maltrato de género",
 hint:"A law specifically addressing violence and abuse. Think about protection for victims."},

{type:"teach",trg:"el manifestante",src:"the protester / demonstrator",pos:"noun",gender:"m",
 note:"Masculine noun. A person taking part in a public demonstration.\nFeminine: la manifestante.",
 example:"A: Miles de manifestantes se reunieron en la plaza.\nB: Pedían mejores condiciones laborales.",
 exampleSrc:"A: Thousands of protesters gathered in the square.\nB: They were demanding better working conditions.",
 funFact:"Spain has a strong protest culture. Major demonstrations can draw over a million people in Madrid."},

{type:"teach",trg:"mayoritario",src:"majority (adj)",pos:"adj",gender:null,
 note:"Adjective. Relating to or constituting a majority.\nMasculine: mayoritario, feminine: mayoritaria.",
 example:"A: El partido mayoritario ganó las elecciones con amplio margen.\nB: Pero necesita aliados para gobernar.",
 exampleSrc:"A: The majority party won the elections by a wide margin.\nB: But it needs allies to govern.",
 funFact:"Spain's electoral system uses proportional representation, so 'mayoritario' does not always mean absolute majority."},

{type:"teach",trg:"el gueto",src:"the ghetto",pos:"noun",gender:"m",
 note:"Masculine noun. An isolated area where a minority group lives.\nAlso spelled 'guetto'.",
 example:"A: No queremos que ese barrio se convierta en un gueto.\nB: La integración social es fundamental.",
 exampleSrc:"A: We do not want that neighborhood to become a ghetto.\nB: Social integration is fundamental.",
 funFact:"From Italian 'ghetto', first used for the Jewish quarter in Venice. Spain prefers the adapted spelling 'gueto'."},

{type:"fb",s:"Miles de {1} marcharon por el centro de la ciudad pidiendo cambios.",
 a:["manifestantes"],opts:["manifestantes","magnates","mandatarios","causantes"],
 hint:"People who take to the streets to publicly demonstrate for a cause.",
 sSrc:"Thousands of {1} marched through the city center demanding changes."},

{type:"teach",trg:"la inestabilidad",src:"the instability",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of stability or constancy.\nIn- (not) + estabilidad.",
 example:"A: La inestabilidad política preocupa a los inversores.\nB: Sin un gobierno fuerte, la economía se resiente.",
 exampleSrc:"A: Political instability worries investors.\nB: Without a strong government, the economy suffers.",
 funFact:"Spain had five prime ministers in four years during the 1930s, a period of extreme political instability."},

{type:"teach",trg:"la impronta",src:"the imprint / mark / influence",pos:"noun",gender:"f",
 note:"Feminine noun. A lasting mark or influence left by something.\nFrom Italian impronta.",
 example:"A: La impronta árabe es visible en la arquitectura del sur de España.\nB: Sobre todo en Granada y Córdoba.",
 exampleSrc:"A: The Arab imprint is visible in the architecture of southern Spain.\nB: Especially in Granada and Cordoba.",
 funFact:"Over 4,000 Spanish words come from Arabic, one of the biggest linguistic improntas in European languages."},

{type:"teach",trg:"imperante",src:"prevailing / dominant",pos:"adj",gender:null,
 note:"Adjective. Currently dominant or in force.\nFrom imperar (to rule, to prevail).",
 example:"A: La opinión imperante es que necesitamos un cambio.\nB: Pero no todos están de acuerdo con la dirección.",
 exampleSrc:"A: The prevailing opinion is that we need a change.\nB: But not everyone agrees on the direction.",
 funFact:"'Imperante' comes from the Latin verb imperare (to command). Emperor (emperador) shares the same root."},

{type:"mc",q:"¿Qué significa 'imperante' cuando describimos una tendencia?",
 opts:["Dominante o prevaleciente en ese momento","Antigua y olvidada","Extranjera e importada","Pequeña e insignificante"],
 ans:"Dominante o prevaleciente en ese momento",
 hint:"From 'imperar' (to prevail, to rule). What is currently in command?"},

{type:"teach",trg:"la mediación",src:"the mediation",pos:"noun",gender:"f",
 note:"Feminine noun. Intervention to resolve a conflict between parties.\nMediador = mediator.",
 example:"A: La mediación evitó que el conflicto llegara a los tribunales.\nB: Es siempre mejor resolver las cosas sin juicio.",
 exampleSrc:"A: Mediation prevented the conflict from reaching the courts.\nB: It is always better to resolve things without a trial.",
 funFact:"Spain has promoted mediation as an alternative to courts since 2012, especially in family disputes."},

{type:"teach",trg:"el mediador",src:"the mediator",pos:"noun",gender:"m",
 note:"Masculine noun. A person who helps resolve disputes between parties.\nFeminine: la mediadora.",
 example:"A: El mediador propuso un acuerdo que satisfizo a ambas partes.\nB: Es muy hábil. Tiene mucha experiencia.",
 exampleSrc:"A: The mediator proposed an agreement that satisfied both parties.\nB: He is very skilled. He has a lot of experience.",
 funFact:"Professional mediators in Spain must have a university degree and specific mediation training."},

{type:"fb",s:"La {1} árabe es visible en miles de palabras del español moderno.",
 a:["impronta"],opts:["impronta","inestabilidad","mediación","incompetencia"],
 hint:"A lasting mark or influence left on something. Think about cultural heritage.",
 sSrc:"The Arab {1} is visible in thousands of words in modern Spanish."},

{type:"match",pairs:[
 {trg:"el machismo",src:"male chauvinism"},
 {trg:"el manifestante",src:"protester"},
 {trg:"mayoritario",src:"majority (adj)"},
 {trg:"la inestabilidad",src:"instability"},
 {trg:"el mediador",src:"mediator"}
]}
]};
export default LESSON_8;
