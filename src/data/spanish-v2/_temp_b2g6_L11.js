// B2 Gap Batch 6 Lesson 11 - Social Issues
const LESSON_11 = {id:"esv2_b2g6_l11",title:"Cuestiones sociales",icon:"🤝",xp:15,board:true,steps:[
{type:"intro",title:"Cuestiones sociales",desc:"Build vocabulary for discussing social issues, inequality, and community challenges.",goals:["Learn 15 social issue terms","Discuss inequality and social problems","Use formal vocabulary for social debates"]},

{type:"teach",trg:"el inquilino",src:"the tenant",pos:"noun",gender:"m",
 note:"Masculine noun. A person who rents a property.\nFeminine: la inquilina.",
 example:"A: El inquilino del tercero se queja del ruido.\nB: Deberíamos hablar con los vecinos de arriba.",
 exampleSrc:"A: The tenant on the third floor is complaining about the noise.\nB: We should talk to the neighbors upstairs.",
 funFact:"From Latin inquilinus (resident). Spain's rental market has grown dramatically since 2015."},

{type:"teach",trg:"el gueto",src:"the ghetto",pos:"noun",gender:"m",
 note:"Masculine noun. An area where a marginalized group\nlives separated from others.",
 example:"A: Algunas ciudades tienen barrios que se han convertido en guetos.\nB: La integración social es fundamental.",
 exampleSrc:"A: Some cities have neighborhoods that have become ghettos.\nB: Social integration is fundamental.",
 funFact:"From Italian 'ghetto', originally the Jewish quarter in Venice (1516). Now used for any segregated area."},

{type:"teach",trg:"la incompetencia",src:"incompetence",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of ability or skill.\nIn- (not) + competencia.",
 example:"A: La incompetencia del gestor causó grandes pérdidas.\nB: Deberían haberlo sustituido antes.",
 exampleSrc:"A: The manager's incompetence caused great losses.\nB: They should have replaced him earlier.",
 funFact:"Note: 'competencia' means both 'competence' and 'competition'. 'Incompetencia' only means lack of skill."},

{type:"teach",trg:"la indisciplina",src:"indiscipline / lack of discipline",pos:"noun",gender:"f",
 note:"Feminine noun. Failure to follow rules.\nIn- (not) + disciplina.",
 example:"A: La indisciplina en las aulas preocupa a los profesores.\nB: Necesitan más apoyo de las familias.",
 exampleSrc:"A: Indiscipline in classrooms worries teachers.\nB: They need more support from families.",
 funFact:"In sports, 'indisciplina' can lead to red cards and suspensions."},

{type:"mc",q:"¿Qué es un inquilino?",opts:["Una persona que alquila una vivienda","Un propietario de una casa","Un vecino ruidoso","Un trabajador social"],ans:"Una persona que alquila una vivienda",hint:"Someone who pays rent to live in a property they do not own."},

{type:"teach",trg:"la incertidumbre",src:"uncertainty",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unsure.\nIn- (not) + certidumbre (certainty).",
 example:"A: La incertidumbre económica afecta a todos.\nB: Nadie sabe qué pasará el año que viene.",
 exampleSrc:"A: Economic uncertainty affects everyone.\nB: Nobody knows what will happen next year.",
 funFact:"'Certidumbre' comes from Latin certitudo. Adding in- creates the opposite: uncertainty."},

{type:"teach",trg:"el imprevisto",src:"the unforeseen event / contingency",pos:"noun",gender:"m",
 note:"Masculine noun. An unexpected occurrence.\nIm- (not) + previsto (foreseen).",
 example:"A: Siempre hay que tener dinero para imprevistos.\nB: Es verdad, nunca sabes qué puede pasar.",
 exampleSrc:"A: You always have to have money for unexpected events.\nB: It is true, you never know what can happen.",
 funFact:"'Gastos imprevistos' (unforeseen expenses) is a standard budget category in Spanish companies."},

{type:"teach",trg:"la imposibilidad",src:"impossibility",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being impossible.\nIm- (not) + posibilidad.",
 example:"A: Ante la imposibilidad de llegar a un acuerdo, se suspendió la reunión.\nB: Volverán a intentarlo la semana que viene.",
 exampleSrc:"A: Given the impossibility of reaching an agreement, the meeting was suspended.\nB: They will try again next week.",
 funFact:"The prefix im- is used before 'p' and 'b' instead of in-: imposible, imborrable."},

{type:"fb",s:"La {1} sobre el futuro del empleo preocupa a los jóvenes.",a:["incertidumbre"],opts:["incertidumbre","incompetencia","indisciplina","imposibilidad"],hint:"Not knowing what will happen. The state of being uncertain.",sSrc:"The {1} about the future of employment worries young people."},

{type:"teach",trg:"la individualidad",src:"individuality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being unique.\nIndividual + -idad.",
 example:"A: Cada cultura tiene su propia individualidad.\nB: Eso es lo que hace el mundo interesante.",
 exampleSrc:"A: Each culture has its own individuality.\nB: That is what makes the world interesting.",
 funFact:"From Latin individuus (indivisible). Each person is a unique, indivisible whole."},

{type:"teach",trg:"involucrar",src:"to involve / to implicate",pos:"verb",gender:null,
 note:"Regular -ar verb. To include or entangle someone\nin something. Often reflexive: involucrarse.",
 example:"A: Deberíamos involucrar a más vecinos en el proyecto.\nB: Cuantos más participen, mejor será el resultado.",
 exampleSrc:"A: We should involve more neighbors in the project.\nB: The more who participate, the better the result.",
 funFact:"From Latin involvere (to roll into). Same root as English 'involve'."},

{type:"teach",trg:"la faena",src:"the task / chore / dirty trick",pos:"noun",gender:"f",
 note:"Feminine noun. Hard work, or an unpleasant trick.\nAlso a bullfighting term.",
 example:"A: ¡Menuda faena me hizo! Me dejó todo el trabajo.\nB: Eso no se hace, habla con el jefe.",
 exampleSrc:"A: What a dirty trick he played on me! He left me all the work.\nB: That is not right, talk to the boss.",
 funFact:"In bullfighting, 'la faena' is the series of passes before the kill. Colloquially it means a dirty trick."},

{type:"mc",q:"¿Qué es un imprevisto?",opts:["Un suceso inesperado","Un plan organizado","Una regla establecida","Un acuerdo formal"],ans:"Un suceso inesperado",hint:"Something that was not foreseen or expected."},

{type:"match",pairs:[
  {trg:"inquilino",src:"tenant"},
  {trg:"incertidumbre",src:"uncertainty"},
  {trg:"imprevisto",src:"unforeseen event"},
  {trg:"involucrar",src:"to involve"},
  {trg:"faena",src:"task / dirty trick"}
]},

{type:"fb",s:"Necesitamos {1} a toda la comunidad en la solución.",a:["involucrar"],opts:["involucrar","inquietar","innovar","insertar"],hint:"To include or engage people in something.",sSrc:"We need to {1} the whole community in the solution."}
]};
export default LESSON_11;
