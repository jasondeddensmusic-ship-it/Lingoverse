// B2 Gap Batch B Lesson 11. Arts & Creative Expression
const LESSON_11 = {id:"esv2_b2gB_l11",title:"Artes y expresión creativa",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Artes y expresión creativa",desc:"Learn vocabulary about artistic expression, literary devices, and creative works in Spanish culture.",goals:["Learn 12 words about arts and creative expression","Discuss literature, music, and visual arts","Use vocabulary for artistic critique"]},

{type:"teach",trg:"la hilera",src:"the row / line / series",pos:"noun",gender:"f",
 note:"Feminine noun. A line of things placed in order.\nFrom hilo (thread).",
 example:"A: Una hilera de cipreses bordeaba el camino.\nB: Parecía un cuadro impresionista.",
 exampleSrc:"A: A row of cypress trees lined the path.\nB: It looked like an impressionist painting.",
 funFact:"In knitting, 'hilera' means a row of stitches. The word traces back to the Latin filum (thread)."},

{type:"teach",trg:"el listón",src:"the bar (standard) / ribbon / strip",pos:"noun",gender:"m",
 note:"Masculine noun. A thin strip of wood or fabric.\nFigurative: the standard or bar to meet.",
 example:"A: Este artista ha puesto el listón muy alto.\nB: Será difícil que alguien lo supere.",
 exampleSrc:"A: This artist has set the bar very high.\nB: It will be difficult for anyone to surpass him.",
 funFact:"'Poner el listón alto' (to set the bar high) comes from high jump, where the listón is the crossbar."},

{type:"teach",trg:"el mundillo",src:"the scene / circle (of a profession)",pos:"noun",gender:"m",
 note:"Masculine noun. Diminutive of mundo (world).\nA small, close-knit professional community.",
 example:"A: En el mundillo del teatro todos se conocen.\nB: Es un círculo bastante cerrado.",
 exampleSrc:"A: In the theater scene, everyone knows each other.\nB: It is a fairly closed circle.",
 funFact:"'Mundillo' has a slightly ironic tone, suggesting an insular world detached from everyday reality."},

{type:"teach",trg:"la coproducción",src:"the co-production",pos:"noun",gender:"f",
 note:"Feminine noun. A joint production between two or more parties.\nCommon in film and television.",
 example:"A: Esta película es una coproducción hispano-francesa.\nB: Se rodó en Madrid y en París.",
 exampleSrc:"A: This film is a Spanish-French co-production.\nB: It was filmed in Madrid and Paris.",
 funFact:"Spain is one of Europe's most active countries in coproducciones, especially with Latin America and France."},

{type:"mc",q:"¿Qué significa 'poner el listón muy alto'?",
 opts:["Establecer un estándar difícil de superar","Colgar un cartel en la pared","Ser muy alto de estatura","Ganar una competición deportiva"],
 ans:"Establecer un estándar difícil de superar",
 hint:"Think about the bar in high jump that athletes must clear. Setting it high means great expectations."},

{type:"teach",trg:"el montera",src:"the bullfighter's hat",pos:"noun",gender:"f",
 note:"Feminine noun (la montera). The distinctive hat worn by matadors.\nAlso: a type of glass roof.",
 example:"A: El torero se puso la montera antes de salir al ruedo.\nB: Es un ritual que se repite en cada corrida.",
 exampleSrc:"A: The bullfighter put on his hat before entering the ring.\nB: It is a ritual repeated at every bullfight.",
 funFact:"Matadors traditionally throw their montera to the crowd as a dedication before the final act."},

{type:"teach",trg:"el moño",src:"the bun (hairstyle) / bow",pos:"noun",gender:"m",
 note:"Masculine noun. Hair twisted into a knot.\nAlso a decorative bow. Colloquial: annoyance.",
 example:"A: La bailaora de flamenco llevaba un moño bajo.\nB: Es el peinado clásico del flamenco.",
 exampleSrc:"A: The flamenco dancer wore a low bun.\nB: It is the classic flamenco hairstyle.",
 funFact:"'Estar hasta el moño' is a colloquial expression meaning to be fed up, similar to 'at the end of one's rope'."},

{type:"teach",trg:"el fetiche",src:"the fetish / talisman",pos:"noun",gender:"m",
 note:"Masculine noun. An object of irrational devotion.\nAlso an object believed to have magical power.",
 example:"A: Ese director tiene un fetiche con los espejos en sus películas.\nB: Aparecen en todas las escenas importantes.",
 exampleSrc:"A: That director has a fetish for mirrors in his films.\nB: They appear in all the important scenes.",
 funFact:"From Portuguese feitico (sorcery), which came from Latin facticius (made by art, artificial)."},

{type:"fb",s:"En el {1} del cine español, todos los directores se conocen.",
 a:["mundillo"],opts:["mundillo","listón","moño","fetiche"],
 hint:"A small, tight-knit professional world where everyone is familiar with each other.",
 sSrc:"In the {1} of Spanish cinema, all the directors know each other."},

{type:"teach",trg:"la fineza",src:"the fineness / delicacy / refinement",pos:"noun",gender:"f",
 note:"Feminine noun. Quality of being fine or refined.\nAlso: a kind or polite gesture.",
 example:"A: La fineza de los detalles en esta obra es extraordinaria.\nB: Se nota que el artista trabajó durante meses.",
 exampleSrc:"A: The fineness of the details in this work is extraordinary.\nB: You can tell the artist worked for months.",
 funFact:"In Golden Age Spanish, 'fineza' meant a gallant deed or courtly gesture of devotion."},

{type:"teach",trg:"el náufrago",src:"the castaway / shipwreck survivor",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la náufraga.\nFrom Latin naufragus (shipwrecked).",
 example:"A: La novela cuenta la historia de un náufrago en una isla desierta.\nB: Sobrevivió solo durante tres años.",
 exampleSrc:"A: The novel tells the story of a castaway on a desert island.\nB: He survived alone for three years.",
 funFact:"Spain's colonial era produced many real náufrago stories, including Cabeza de Vaca's epic 1528 journey."},

{type:"teach",trg:"la extrañeza",src:"the strangeness / surprise",pos:"noun",gender:"f",
 note:"Feminine noun. A feeling of surprise or bewilderment.\nFrom extraño (strange).",
 example:"A: Su reacción me causó gran extrañeza.\nB: No esperaba que se enfadara tanto.",
 exampleSrc:"A: His reaction caused me great surprise.\nB: I did not expect him to get so angry.",
 funFact:"In literary criticism, 'extrañeza' is related to the Russian concept of 'defamiliarization' in art."},

{type:"mc",q:"¿Qué es una coproducción?",
 opts:["Un tipo de guion cinematográfico","Una obra realizada conjuntamente por dos o más partes","Una segunda versión de una película","Un premio de cine internacional"],
 ans:"Una obra realizada conjuntamente por dos o más partes",
 hint:"Think about two countries or companies producing a film or show together."},

{type:"match",pairs:[
 {trg:"mundillo",src:"professional scene / circle"},
 {trg:"fineza",src:"fineness / refinement"},
 {trg:"náufrago",src:"castaway"},
 {trg:"extrañeza",src:"strangeness / surprise"},
 {trg:"coproducción",src:"co-production"}
]},

{type:"fb",s:"La {1} de los bordados de este vestido es impresionante.",
 a:["fineza"],opts:["fineza","extrañeza","hilera","coproducción"],
 hint:"The quality of being extremely delicate and refined in craftsmanship.",
 sSrc:"The {1} of the embroidery on this dress is impressive."},

{type:"fb",s:"La historia del {1} que sobrevivió en una isla inspiró muchas novelas.",
 a:["náufrago"],opts:["náufrago","mundillo","fetiche","moño"],
 hint:"A person who survived a shipwreck and was stranded alone.",
 sSrc:"The story of the {1} who survived on an island inspired many novels."},

]};
export default LESSON_11;
