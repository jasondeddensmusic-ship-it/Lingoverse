// B2 Gap Batch 8 Lesson 10 - Arts & Culture
const LESSON_10 = {id:"esv2_b2g8_l10",title:"Artes y cultura",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Artes y cultura",desc:"Explore vocabulary for the arts, literature, and cultural institutions in the Spanish-speaking world.",goals:["Learn 14 arts and culture terms","Discuss cultural events and institutions","Use artistic and literary vocabulary"]},

{type:"teach",trg:"el idilio",src:"the idyll / romance",pos:"noun",gender:"m",
 note:"Masculine noun. A peaceful, happy period, or a romantic relationship.\nFrom Greek eidyllion.",
 example:"A: Su idilio con la pintura comenzó en la infancia.\nB: Ahora es uno de los artistas más reconocidos del país.",
 exampleSrc:"A: His love affair with painting began in childhood.\nB: Now he is one of the most recognized artists in the country.",
 funFact:"In Spanish literature, 'idilio' often describes an idealized rural romance, a classical pastoral tradition."},

{type:"teach",trg:"macabro",src:"macabre / gruesome",pos:"adj",gender:null,
 note:"Adjective. Disturbing because related to death or horror.\nMasculine: macabro, feminine: macabra.",
 example:"A: Esa película tiene un humor muy macabro.\nB: No es para todos, pero a mí me gusta.",
 exampleSrc:"A: That film has very macabre humor.\nB: It is not for everyone, but I like it.",
 funFact:"From French macabre, possibly from 'danse macabre' (dance of death), a medieval art motif."},

{type:"teach",trg:"el fetiche",src:"the fetish",pos:"noun",gender:"m",
 note:"Masculine noun. An object of irrational devotion, or a spiritual artifact.\nFrom Portuguese feitico.",
 example:"A: Las zapatillas deportivas se han convertido en un fetiche cultural.\nB: Hay coleccionistas que pagan miles de euros.",
 exampleSrc:"A: Sneakers have become a cultural fetish.\nB: There are collectors who pay thousands of euros.",
 funFact:"The word traveled from Portuguese traders in West Africa to French, then to Spanish. Originally meant 'charm'."},

{type:"teach",trg:"el casting",src:"the casting / audition",pos:"noun",gender:"m",
 note:"Masculine noun. The process of selecting actors for roles.\nBorrowed from English.",
 example:"A: ¿Fuiste al casting para la nueva serie?\nB: Sí, pero había cientos de candidatos.",
 exampleSrc:"A: Did you go to the casting for the new series?\nB: Yes, but there were hundreds of candidates.",
 funFact:"The RAE has accepted 'casting' as a Spanish word. The pure Spanish alternative 'audición' is less used in film."},

{type:"mc",q:"¿Qué es un casting?",
 opts:["Un proceso de selección de actores","Un tipo de escultura","Una técnica de pintura","Un festival de música"],
 ans:"Un proceso de selección de actores",
 hint:"When a director needs to choose actors for a production, they hold this event."},

{type:"teach",trg:"la fotonovela",src:"the photo story / photo novel",pos:"noun",gender:"f",
 note:"Feminine noun. A story told through photographs with text bubbles.\nFoto + novela.",
 example:"A: Mi abuela coleccionaba fotonovelas en los años sesenta.\nB: Eran muy populares antes de la televisión.",
 exampleSrc:"A: My grandmother collected photo novels in the sixties.\nB: They were very popular before television.",
 funFact:"Fotonovelas were hugely popular in Spain and Latin America from the 1940s-1970s, a precursor to telenovelas."},

{type:"teach",trg:"el mapamundi",src:"the world map",pos:"noun",gender:"m",
 note:"Masculine noun. A map showing the entire world.\nMapa (map) + mundi (world).",
 example:"A: Tengo un mapamundi enorme en la pared de mi estudio.\nB: ¿Con todos los países actualizados?",
 exampleSrc:"A: I have a huge world map on the wall of my study.\nB: With all the countries updated?",
 funFact:"From Latin mappa mundi. The oldest surviving mapamundi is the Hereford map from around 1300."},

{type:"teach",trg:"el lamento",src:"the lament / wail",pos:"noun",gender:"m",
 note:"Masculine noun. An expression of grief or sorrow.\nVerb: lamentar (to lament).",
 example:"A: Se escuchaban los lamentos de las víctimas del desastre.\nB: Fue una tragedia que conmovió a todo el país.",
 exampleSrc:"A: The laments of the disaster victims could be heard.\nB: It was a tragedy that moved the entire country.",
 funFact:"In flamenco, the 'quejío' (lament) is the raw vocal cry that gives cante jondo its emotional depth."},

{type:"fb",s:"Las {1} eran muy populares en España antes de la televisión.",
 a:["fotonovelas"],opts:["fotonovelas","ilustraciones","mediaciones","aspiraciones"],
 hint:"Stories told through photographs with speech bubbles, popular in the mid-20th century.",
 sSrc:"{1} were very popular in Spain before television."},

{type:"teach",trg:"la literatura popular",src:"the popular literature / folk literature",pos:"noun",gender:"f",
 note:"Feminine noun. Traditional stories, ballads, and tales passed down orally.\nAlso: literatura folclórica.",
 example:"A: La literatura popular española incluye romances y cuentos tradicionales.\nB: Muchos fueron recopilados en el siglo XIX.",
 exampleSrc:"A: Spanish popular literature includes ballads and traditional tales.\nB: Many were collected in the nineteenth century.",
 funFact:"The 'romancero' is Spain's great collection of popular ballads, some dating to the 15th century."},

{type:"teach",trg:"la inflexión",src:"the inflection / turning point",pos:"noun",gender:"f",
 note:"Feminine noun. A change in direction, tone, or form.\nPunto de inflexión = turning point.",
 example:"A: Ese momento fue un punto de inflexión en su carrera.\nB: Después de aquello, todo cambió para mejor.",
 exampleSrc:"A: That moment was a turning point in his career.\nB: After that, everything changed for the better.",
 funFact:"In grammar, 'inflexión' refers to how words change form (conjugation, declension). Same word, different field."},

{type:"teach",trg:"el menhir",src:"the menhir / standing stone",pos:"noun",gender:"m",
 note:"Masculine noun. A tall upright stone from prehistoric times.\nFrom Breton men (stone) + hir (long).",
 example:"A: Hay menhires prehistóricos en varias regiones de España.\nB: Los de Galicia son los más impresionantes.",
 exampleSrc:"A: There are prehistoric menhirs in various regions of Spain.\nB: The ones in Galicia are the most impressive.",
 funFact:"Galicia has one of Europe's densest concentrations of menhirs, some over 5,000 years old."},

{type:"mc",q:"¿Qué es un 'punto de inflexión'?",
 opts:["Un lugar geográfico","Un momento que cambia el curso de algo","Un tipo de puntuación","Un error gramatical"],
 ans:"Un momento que cambia el curso de algo",
 hint:"A critical moment when the direction of events shifts. A turning point."},

{type:"teach",trg:"inmortalizar",src:"to immortalize",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something last forever, especially through art.\nIn- + mortal + -izar.",
 example:"A: Velázquez inmortalizó la corte española en sus cuadros.\nB: Las Meninas es quizá el cuadro más famoso de España.",
 exampleSrc:"A: Velazquez immortalized the Spanish court in his paintings.\nB: Las Meninas is perhaps Spain's most famous painting.",
 funFact:"From in- (not) + mortal + -izar. Art's great purpose: to make the mortal immortal."},

{type:"teach",trg:"el mendigo",src:"the beggar",pos:"noun",gender:"m",
 note:"Masculine noun. A person who begs for money or food.\nFeminine: la mendiga. Verb: mendigar.",
 example:"A: La novela picaresca española siempre incluye mendigos.\nB: El Lazarillo de Tormes es el ejemplo clásico.",
 exampleSrc:"A: The Spanish picaresque novel always includes beggars.\nB: Lazarillo de Tormes is the classic example.",
 funFact:"The picaresque novel genre was born in Spain. Beggars and rogues are its central characters."},

{type:"fb",s:"Velázquez {1} la corte de Felipe IV en sus pinturas.",
 a:["inmortalizó"],opts:["inmortalizó","lamentó","mediaba","aspiraba"],
 hint:"To make something live forever through art. Past tense, third person.",
 sSrc:"Velazquez {1} the court of Philip IV in his paintings."},

{type:"match",pairs:[
 {trg:"el idilio",src:"idyll / romance"},
 {trg:"macabro",src:"macabre"},
 {trg:"la inflexión",src:"inflection / turning point"},
 {trg:"el menhir",src:"standing stone"},
 {trg:"inmortalizar",src:"to immortalize"}
]}
]};
export default LESSON_10;
