// B2 Gap Batch B Lesson 20. Abstract Thought & Philosophy
const LESSON_20 = {id:"esv2_b2gB_l20",title:"Pensamiento abstracto",icon:"🧠",xp:15,board:true,steps:[
{type:"intro",title:"Pensamiento abstracto",desc:"Learn advanced abstract vocabulary for discussing ideas, values, and philosophical concepts in Spanish.",goals:["Learn 12 abstract and philosophical words","Discuss values, qualities, and ideas","Use high-register abstract vocabulary"]},

{type:"teach",trg:"la mnemotecnia",src:"the mnemonics / memory technique",pos:"noun",gender:"f",
 note:"Feminine noun. The art of improving memory.\nFrom Greek mneme (memory) + techne (art).",
 example:"A: La mnemotecnia me ayudó a aprobar el examen.\nB: ¿Qué técnica usaste?\nA: Asocié cada concepto con una imagen.",
 exampleSrc:"A: Mnemonics helped me pass the exam.\nB: What technique did you use?\nA: I associated each concept with an image.",
 funFact:"Ancient Greek and Roman orators used 'the method of loci' (palacio de memoria) as their primary mnemotecnia."},

{type:"teach",trg:"la apocalipsis",src:"the apocalypse / revelation",pos:"noun",gender:"f",
 note:"Feminine noun (often used as masculine in colloquial speech).\nFrom Greek apokalypsis (unveiling).",
 example:"A: La novela describe un mundo tras la apocalipsis.\nB: Los supervivientes luchan por reconstruir la sociedad.",
 exampleSrc:"A: The novel describes a world after the apocalypse.\nB: The survivors struggle to rebuild society.",
 funFact:"In formal Spanish, 'el Apocalipsis' (masculine, capitalized) refers specifically to the biblical Book of Revelation."},

{type:"teach",trg:"la eucaristía",src:"the Eucharist / Holy Communion",pos:"noun",gender:"f",
 note:"Feminine noun. The central sacrament of Christianity.\nFrom Greek eucharistia (thanksgiving).",
 example:"A: La eucaristía es el sacramento central del catolicismo.\nB: Los fieles la reciben durante la misa.",
 exampleSrc:"A: The Eucharist is the central sacrament of Catholicism.\nB: The faithful receive it during Mass.",
 funFact:"In Spain, 'primera comunión' (first communion) is a major family celebration, often quite elaborate."},

{type:"teach",trg:"el hada madrina",src:"the fairy godmother",pos:"noun",gender:"m",
 note:"Feminine noun (uses 'el' before: el hada, like el agua).\nA magical protector in fairy tales.",
 example:"A: Cenicienta no habría ido al baile sin su hada madrina.\nB: Es uno de los personajes más queridos de los cuentos.",
 exampleSrc:"A: Cinderella would not have gone to the ball without her fairy godmother.\nB: She is one of the most beloved characters in fairy tales.",
 funFact:"'El hada' uses the masculine article to avoid the 'la ha-' sound clash, but remains grammatically feminine."},

{type:"mc",q:"¿Qué es la mnemotecnia?",
 opts:["El arte de mejorar la memoria con técnicas","Un tipo de filosofía griega","Una enfermedad neurológica","Un instrumento musical antiguo"],
 ans:"El arte de mejorar la memoria con técnicas",
 hint:"Think about tricks and techniques people use to remember lists, numbers, or facts more easily."},

{type:"teach",trg:"el imperfecto",src:"the imperfect (tense) / imperfection",pos:"noun",gender:"m",
 note:"Masculine noun. The past tense for ongoing/habitual actions.\nAlso: something flawed.",
 example:"A: El imperfecto se usa para describir acciones habituales en el pasado.\nB: Por ejemplo: 'Cuando era niño, jugaba en el parque'.",
 exampleSrc:"A: The imperfect is used to describe habitual actions in the past.\nB: For example: 'When I was a child, I played in the park.'",
 funFact:"The Spanish imperfecto is one of the tenses that English learners find most challenging to master."},

{type:"teach",trg:"la cana",src:"the gray/white hair",pos:"noun",gender:"f",
 note:"Feminine noun. A single gray or white hair.\nUsually plural: las canas.",
 example:"A: A mi padre le salieron las primeras canas a los treinta.\nB: Dicen que es hereditario.",
 exampleSrc:"A: My father got his first gray hairs at thirty.\nB: They say it's hereditary.",
 funFact:"'Echar una cana al aire' (to throw a gray hair to the wind) means to have a night of fun or adventure."},

{type:"teach",trg:"la oca",src:"the goose / the Game of the Goose",pos:"noun",gender:"f",
 note:"Feminine noun. The bird, or a traditional board game.\nEl juego de la oca = Game of the Goose.",
 example:"A: De pequeños, jugábamos al juego de la oca.\nB: Me encantaba caer en la casilla del puente.",
 exampleSrc:"A: As children, we used to play the Game of the Goose.\nB: I loved landing on the bridge square.",
 funFact:"El juego de la oca is one of Spain's most traditional board games, played by families for generations."},

{type:"fb",s:"Las técnicas de {1} te ayudan a recordar listas y datos complejos.",
 a:["mnemotecnia"],opts:["mnemotecnia","apocalipsis","eucaristía","imperfecto"],
 hint:"The art and science of using mental tricks to improve memory retention.",
 sSrc:"{1} techniques help you remember complex lists and data."},

{type:"teach",trg:"la catalina",src:"the Catherine wheel (firework) / pulley",pos:"noun",gender:"f",
 note:"Feminine noun. A spinning firework.\nAlso: a type of pulley. Named after Saint Catherine.",
 example:"A: En las fiestas del pueblo, lanzaron catalinas de colores.\nB: Los niños las miraban fascinados.",
 exampleSrc:"A: At the village festival, they launched colorful Catherine wheels.\nB: The children watched them fascinated.",
 funFact:"Named after Saint Catherine of Alexandria, who was tortured on a spiked wheel. The firework spins similarly."},

{type:"teach",trg:"el batiente",src:"the leaf (of a door/window) / the frame",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door that swings.\nAlso: the frame where a door closes against.",
 example:"A: El batiente de la puerta hacía ruido con el viento.\nB: Habrá que engrasarlo con aceite.",
 exampleSrc:"A: The door leaf made noise in the wind.\nB: We'll have to oil it.",
 funFact:"'De par en par' (wide open) literally describes both batientes (leaves) of a double door opened fully."},

{type:"teach",trg:"la caneca",src:"the trash can / barrel",pos:"noun",gender:"f",
 note:"Feminine noun. A container for waste or liquids.\nRegional: Colombia, Venezuela.",
 example:"A: Echa los papeles en la caneca, por favor.\nB: La de reciclaje está al lado de la puerta.",
 exampleSrc:"A: Throw the papers in the trash can, please.\nB: The recycling one is next to the door.",
 funFact:"In Colombia, 'caneca' is the everyday word for trash can. In Spain, 'papelera' or 'cubo de basura' is used."},

{type:"mc",q:"¿Qué significa 'echar una cana al aire'?",
 opts:["Preocuparse demasiado","Disfrutar de una noche de diversión","Teñirse el pelo de blanco","Cortarse el pelo muy corto"],
 ans:"Disfrutar de una noche de diversión",
 hint:"Think about letting go of responsibilities for a night, having a bit of carefree fun."},

{type:"match",pairs:[
 {trg:"mnemotecnia",src:"mnemonics"},
 {trg:"cana",src:"gray hair"},
 {trg:"oca",src:"goose / board game"},
 {trg:"imperfecto",src:"imperfect tense"},
 {trg:"apocalipsis",src:"apocalypse"}
]},

{type:"fb",s:"A mi madre ya le han salido muchas {1} en las sienes.",
 a:["canas"],opts:["canas","catalinas","canecas","ocas"],
 hint:"White or gray strands that appear in hair as people get older.",
 sSrc:"My mother already has many {1} at her temples."},

{type:"fb",s:"De niños, pasábamos las tardes jugando al juego de la {1}.",
 a:["oca"],opts:["oca","cana","caneca","catalina"],
 hint:"A traditional Spanish board game named after a farmyard bird.",
 sSrc:"As children, we spent our afternoons playing the Game of the {1}."},

]};
export default LESSON_20;
