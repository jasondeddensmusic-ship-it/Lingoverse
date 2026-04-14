// B2 Gap Batch 5 Lesson 01 - Arts & Craftsmanship
const LESSON_1 = {id:"esv2_b2g5_l1",title:"El arte y la artesanía",icon:"🎨",xp:15,board:true,steps:[
{type:"intro",title:"El arte y la artesanía",desc:"Explore the world of traditional arts, craftsmanship, and creative expression in Spain.",goals:["Learn 15 words about arts and craftsmanship","Discuss artistic traditions and techniques","Use abstract nouns related to creativity"]},

{type:"teach",trg:"el artista",src:"the artist",pos:"noun",gender:"m",
 note:"Masculine noun. Same form for male/female.\nFeminine article: la artista.",
 example:"A: ¿Quién es tu artista favorito?\nB: Me encanta el trabajo de Sorolla.",
 exampleSrc:"A: Who is your favorite artist?\nB: I love the work of Sorolla.",
 funFact:"From Latin ars (art). In Spanish, 'artista' is used for any creative professional, not just painters."},

{type:"teach",trg:"el grabado",src:"the engraving / print",pos:"noun",gender:"m",
 note:"Masculine noun. A technique of incising a design.\nAlso the finished print.",
 example:"A: Este grabado de Goya es impresionante.\nB: Sí, los detalles son increíbles.",
 exampleSrc:"A: This engraving by Goya is impressive.\nB: Yes, the details are incredible.",
 funFact:"Goya's 'Los Caprichos' series of 80 etchings is among the most famous grabados in history."},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of woodworking.\nAlso the workshop itself.",
 example:"A: Mi abuelo tenía una carpintería en el pueblo.\nB: ¿Hacía muebles a mano?",
 exampleSrc:"A: My grandfather had a carpentry workshop in the village.\nB: Did he make furniture by hand?",
 funFact:"From Latin carpentum (carriage). Traditional carpintería is still valued in rural Spain."},

{type:"teach",trg:"la herrería",src:"the blacksmith's forge / ironwork",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of working with iron.\nAlso the smithy itself.",
 example:"A: La herrería del pueblo lleva abierta tres generaciones.\nB: Hacen rejas y balcones preciosos.",
 exampleSrc:"A: The village forge has been open for three generations.\nB: They make beautiful railings and balconies.",
 funFact:"From hierro (iron). Spanish herrerías produced the ornate ironwork seen on Andalusian balconies."},

{type:"teach",trg:"el fresco",src:"the fresco (wall painting)",pos:"noun",gender:"m",
 note:"Masculine noun. Painting applied to wet plaster.\nAlso means 'fresh' or 'cool' as adjective.",
 example:"A: Los frescos de esta iglesia son del siglo XVI.\nB: La restauración ha sido magnífica.",
 exampleSrc:"A: The frescoes in this church are from the 16th century.\nB: The restoration has been magnificent.",
 funFact:"From Italian 'affresco' (on fresh plaster). Spain has remarkable Romanesque frescoes in Catalonia."},

{type:"mc",q:"¿Qué es un grabado?",opts:["Una técnica de impresión sobre una superficie","Un tipo de escultura moderna","Una herramienta de carpintería","Un estilo de arquitectura"],ans:"Una técnica de impresión sobre una superficie",hint:"Think about cutting or incising a design into metal or wood to create prints."},

{type:"teach",trg:"la genialidad",src:"the genius / stroke of genius",pos:"noun",gender:"f",
 note:"Feminine noun. An act or quality of brilliance.\nFrom genial (brilliant).",
 example:"A: La genialidad de Gaudí está en cada detalle.\nB: Nadie ha igualado su visión arquitectónica.",
 exampleSrc:"A: Gaudí's genius is in every detail.\nB: Nobody has matched his architectural vision.",
 funFact:"In Spanish, 'genialidad' emphasizes the quality of an act, while 'genio' refers to the person."},

{type:"teach",trg:"el fetiche",src:"the fetish / lucky charm",pos:"noun",gender:"m",
 note:"Masculine noun. An object believed to have power.\nAlso an irrational devotion.",
 example:"A: Ese pintor tiene un fetiche con los colores azules.\nB: Es verdad, todos sus cuadros son azules.",
 exampleSrc:"A: That painter has a fetish for blue colors.\nB: It's true, all his paintings are blue.",
 funFact:"From Portuguese feitico (charm), which came from Latin facticius (artificial)."},

{type:"teach",trg:"forjar",src:"to forge / to shape",pos:"verb",gender:null,
 note:"Regular -ar verb. Literal: to shape metal.\nFigurative: to build or create.",
 example:"A: ¿Cómo se forja una espada tradicional?\nB: Con fuego, un yunque y mucha paciencia.",
 exampleSrc:"A: How do you forge a traditional sword?\nB: With fire, an anvil, and a lot of patience.",
 funFact:"Figuratively, 'forjar un futuro' (to forge a future) is very common in speeches and writing."},

{type:"teach",trg:"la filmografía",src:"the filmography",pos:"noun",gender:"f",
 note:"Feminine noun. The complete works of a filmmaker or actor.",
 example:"A: La filmografía de Almodóvar es muy extensa.\nB: Ha dirigido más de veinte películas.",
 exampleSrc:"A: Almodóvar's filmography is very extensive.\nB: He has directed more than twenty films.",
 funFact:"Pedro Almodóvar is Spain's most internationally acclaimed director, with two Academy Awards."},

{type:"fb",s:"Mi abuelo trabajaba en una {1} haciendo muebles.",a:["carpintería"],opts:["carpintería","herrería","filmografía","genialidad"],hint:"A workshop where people craft things from wood.",sSrc:"My grandfather worked in a {1} making furniture."},

{type:"teach",trg:"el flamenco",src:"the flamenco",pos:"noun",gender:"m",
 note:"Masculine noun. Andalusian art form of singing, dance, and guitar.",
 example:"A: ¿Has visto alguna vez un espectáculo de flamenco?\nB: Sí, en un tablao de Sevilla. Fue inolvidable.",
 exampleSrc:"A: Have you ever seen a flamenco show?\nB: Yes, in a tablao in Seville. It was unforgettable.",
 funFact:"UNESCO declared flamenco an Intangible Cultural Heritage of Humanity in 2010."},

{type:"teach",trg:"el folletín",src:"the serial novel / melodrama",pos:"noun",gender:"m",
 note:"Masculine noun. A story published in installments.\nAlso used for anything overly dramatic.",
 example:"A: Esa novela parece un folletín del siglo XIX.\nB: Sí, es muy melodramática.",
 exampleSrc:"A: That novel seems like a 19th-century serial.\nB: Yes, it's very melodramatic.",
 funFact:"From French feuilleton. Serialized novels in newspapers were hugely popular in 19th-century Spain."},

{type:"teach",trg:"la historieta",src:"the comic strip / short story",pos:"noun",gender:"f",
 note:"Feminine noun. A comic strip or brief anecdote.\nDiminutive of historia.",
 example:"A: De niño leía historietas de Mortadelo y Filemón.\nB: ¡Yo también! Son clásicos españoles.",
 exampleSrc:"A: As a child I read Mortadelo and Filemón comics.\nB: Me too! They are Spanish classics.",
 funFact:"Mortadelo y Filemón, by Francisco Ibáñez, is Spain's best-selling comic series ever."},

{type:"teach",trg:"la fotonovela",src:"the photo-novel / photo story",pos:"noun",gender:"f",
 note:"Feminine noun. A story told through photographs with speech bubbles.",
 example:"A: Las fotonovelas eran muy populares en los años setenta.\nB: Eran como telenovelas en papel.",
 exampleSrc:"A: Photo-novels were very popular in the seventies.\nB: They were like soap operas on paper.",
 funFact:"A blend of foto + novela. They bridged the gap between comics and television in southern Europe."},

{type:"teach",trg:"flamante",src:"splendid / brand-new",pos:"adj",gender:null,
 note:"Adjective, same form for m/f.\nMeans shining, impressive, newly acquired.",
 example:"A: Mira su flamante coche nuevo.\nB: ¡Vaya! Debe de haber costado una fortuna.",
 exampleSrc:"A: Look at his splendid new car.\nB: Wow! It must have cost a fortune.",
 funFact:"From Latin flammare (to flame). Something 'flamante' shines as if it were on fire."},

{type:"mc",q:"¿Qué es un folletín?",opts:["Una novela publicada por entregas","Un tipo de grabado artístico","Una técnica de carpintería","Un instrumento de flamenco"],ans:"Una novela publicada por entregas",hint:"Think about stories that appeared chapter by chapter in newspapers."},

{type:"fb",s:"La {1} de ese director incluye diez películas premiadas.",a:["filmografía"],opts:["filmografía","historieta","fotonovela","genialidad"],hint:"The complete list of films made by a director or actor.",sSrc:"The {1} of that director includes ten award-winning films."},

{type:"match",pairs:[{trg:"grabado",src:"engraving"},{trg:"herrería",src:"forge"},{trg:"fresco",src:"wall painting"},{trg:"historieta",src:"comic strip"},{trg:"flamenco",src:"flamenco"}]},

{type:"fb",s:"La {1} de Picasso se refleja en cada obra que creó.",a:["genialidad"],opts:["genialidad","carpintería","filmografía","herrería"],hint:"The quality of being brilliantly creative or inventive.",sSrc:"The {1} of Picasso is reflected in every work he created."},

{type:"mc",q:"¿Qué significa 'flamante'?",opts:["Espléndido y nuevo","Relacionado con el flamenco","Hecho de hierro","Muy antiguo"],ans:"Espléndido y nuevo",hint:"The word comes from 'flame' and describes something that shines like new."}
]};

export default LESSON_1;
