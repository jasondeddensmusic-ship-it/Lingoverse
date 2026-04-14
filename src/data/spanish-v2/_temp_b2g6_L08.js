// B2 Gap Batch 6 Lesson 08 - Arts & Culture
const LESSON_8 = {id:"esv2_b2g6_l8",title:"Arte y cultura",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Arte y cultura",desc:"Explore vocabulary for discussing the arts, cultural movements, and creative expression.",goals:["Learn 15 arts and culture terms","Discuss artistic movements and styles","Use cultural vocabulary with nuance"]},

{type:"teach",trg:"el artista",src:"the artist",pos:"noun",gender:"m",
 note:"Masculine/feminine noun (el/la artista).\nEnds in -a for both genders.",
 example:"A: La artista expone sus obras en el museo Reina Sofía.\nB: Es una de las más importantes de España.",
 exampleSrc:"A: The artist is exhibiting her works at the Reina Sofía museum.\nB: She is one of the most important in Spain.",
 funFact:"Words ending in -ista keep the same form for both genders: el/la artista, el/la pianista."},

{type:"teach",trg:"el academicismo",src:"academicism",pos:"noun",gender:"m",
 note:"Masculine noun. Strict adherence to academic traditions\nin art. From academia + -ismo.",
 example:"A: El academicismo dominó el arte del siglo diecinueve.\nB: Los impresionistas rompieron con esa tradición.",
 exampleSrc:"A: Academicism dominated nineteenth-century art.\nB: The Impressionists broke with that tradition.",
 funFact:"Spain's Real Academia de Bellas Artes de San Fernando was the bastion of academicismo."},

{type:"teach",trg:"la improvisación",src:"the improvisation",pos:"noun",gender:"f",
 note:"Feminine noun. Creating something spontaneously.\nFrom improvisar (to improvise).",
 example:"A: La improvisación en el teatro es todo un arte.\nB: Requiere mucha práctica y creatividad.",
 exampleSrc:"A: Improvisation in theater is quite an art.\nB: It requires a lot of practice and creativity.",
 funFact:"Spain has a strong tradition of improvisational poetry called 'repentismo' or 'versos improvisados'."},

{type:"teach",trg:"el fetiche",src:"the fetish / lucky charm",pos:"noun",gender:"m",
 note:"Masculine noun. An object of obsessive devotion,\nor a lucky charm. From Portuguese feitico.",
 example:"A: Este colgante es mi fetiche de la suerte.\nB: ¿Lo llevas siempre contigo?",
 exampleSrc:"A: This pendant is my lucky charm.\nB: Do you always carry it with you?",
 funFact:"From Portuguese feitico (spell/charm). Originally referred to objects believed to have magical powers."},

{type:"mc",q:"¿Qué es el academicismo?",opts:["Seguir estrictamente las tradiciones académicas en el arte","Un tipo de improvisación teatral","Un movimiento artístico moderno","Una técnica de pintura abstracta"],ans:"Seguir estrictamente las tradiciones académicas en el arte",hint:"Strict adherence to traditional rules and conventions in art."},

{type:"teach",trg:"la intriga",src:"the intrigue / plot",pos:"noun",gender:"f",
 note:"Feminine noun. A secret scheme, or the plot of a story.\nFrom Latin intricare (to entangle).",
 example:"A: La intriga de la novela te mantiene en vilo.\nB: No pude dejar de leer hasta el final.",
 exampleSrc:"A: The intrigue of the novel keeps you in suspense.\nB: I could not stop reading until the end.",
 funFact:"From Latin intricare (to entangle). An intrigue 'tangles' people in its web."},

{type:"teach",trg:"la impronta",src:"the imprint / mark",pos:"noun",gender:"f",
 note:"Feminine noun. A lasting mark or influence.\nFrom Italian impronta.",
 example:"A: Gaudí dejó su impronta en Barcelona.\nB: La Sagrada Familia es su obra más emblemática.",
 exampleSrc:"A: Gaudí left his imprint on Barcelona.\nB: The Sagrada Familia is his most iconic work.",
 funFact:"From Italian impronta (imprint). Often used to describe an artist's lasting influence on a city or field."},

{type:"teach",trg:"la desnudez",src:"the nudity / nakedness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being naked.\nFrom desnudo (naked) + -ez.",
 example:"A: La desnudez en el arte clásico era muy común.\nB: Representaba la belleza ideal del cuerpo humano.",
 exampleSrc:"A: Nudity in classical art was very common.\nB: It represented the ideal beauty of the human body.",
 funFact:"The -ez suffix forms abstract nouns: desnudo > desnudez, like brillante > brillantez."},

{type:"fb",s:"La {1} de Picasso es visible en todo el arte del siglo veinte.",a:["impronta"],opts:["impronta","intriga","improvisación","desnudez"],hint:"A lasting mark or influence left by someone.",sSrc:"Picasso's {1} is visible in all twentieth-century art."},

{type:"teach",trg:"idílico",src:"idyllic",pos:"adj",gender:null,
 note:"Adjective. Extremely peaceful and beautiful.\nFrom idilio (idyll).",
 example:"A: El pueblo tiene un paisaje idílico.\nB: Parece sacado de un cuadro.",
 exampleSrc:"A: The village has an idyllic landscape.\nB: It looks like it came out of a painting.",
 funFact:"From Greek eidyllion (short poem about rural life). Idyllic scenes are like pastoral poetry."},

{type:"teach",trg:"el idilio",src:"the idyll / romance",pos:"noun",gender:"m",
 note:"Masculine noun. A peaceful, idealized scene, or a\nromantic affair. From Greek eidyllion.",
 example:"A: Vivieron un idilio durante aquel verano en la costa.\nB: Pero al final del verano cada uno volvió a su ciudad.",
 exampleSrc:"A: They lived a romance during that summer on the coast.\nB: But at the end of summer each one returned to their city.",
 funFact:"In literature, an 'idilio' is a short poem idealizing rural life. In everyday Spanish, it means a romance."},

{type:"teach",trg:"inédito",src:"unpublished / unprecedented",pos:"adj",gender:null,
 note:"Adjective. Never published before, or without precedent.\nIn- (not) + edito (published).",
 example:"A: Descubrieron un manuscrito inédito de Cervantes.\nB: Sería un hallazgo extraordinario.",
 exampleSrc:"A: They discovered an unpublished manuscript by Cervantes.\nB: It would be an extraordinary find.",
 funFact:"Can mean both 'unpublished' (a book) and 'unprecedented' (an event). Context determines the meaning."},

{type:"mc",q:"¿Qué significa inédito?",opts:["Nunca publicado o sin precedentes","Muy antiguo","Muy popular","Bien conservado"],ans:"Nunca publicado o sin precedentes",hint:"Something that has never been published or never happened before."},

{type:"match",pairs:[
  {trg:"artista",src:"artist"},
  {trg:"improvisación",src:"improvisation"},
  {trg:"intriga",src:"intrigue / plot"},
  {trg:"idílico",src:"idyllic"},
  {trg:"inédito",src:"unpublished"}
]},

{type:"fb",s:"La {1} de la película es tan compleja que no puedes adivinar el final.",a:["intriga"],opts:["intriga","impronta","desnudez","improvisación"],hint:"The plot or scheme that keeps you guessing.",sSrc:"The {1} of the film is so complex that you cannot guess the ending."}
]};
export default LESSON_8;
