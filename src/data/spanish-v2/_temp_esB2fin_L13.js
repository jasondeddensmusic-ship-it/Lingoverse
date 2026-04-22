// Spanish B2 Final Batch - Lesson 13: Academic Verbs & Social Issues (PCIC B1/B2)
const LESSON_13 = {
  id:"esv2_b2fin_l13", title:"Verbs Acad\u00e9micos y Justicia", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbos Acad\u00e9micos y Justicia Social",
     desc:"Learn the discourse verbs used in formal essays, debates, and oral exams. These are essential for DELE B1/B2 written and spoken tasks.",
     goals:["Use academic discourse verbs in formal contexts","Discuss social justice concepts with precision","Express and defend opinions in debates"]},

    {type:"teach", trg:"explicar", src:"to explain", pos:"verb", gender:null,
     note:"To make something clear by describing it in detail.",
     example:"A: \u00bfPuedes explicar el problema?\nB: S\u00ed, voy a explicar la situaci\u00f3n paso a paso.",
     exampleSrc:"A: Can you explain the problem?\nB: Yes, I will explain the situation step by step.",
     funFact:"From Latin 'explicare' (to unfold). Explaining is literally 'unfolding' a complex idea so others can see it clearly."},

    {type:"teach", trg:"defender", src:"to defend", pos:"verb", gender:null,
     note:"To support or argue in favor of an idea, person, or position.",
     example:"A: \u00bfC\u00f3mo vas a defender tu decisi\u00f3n?\nB: Voy a defender mi postura con datos concretos.",
     exampleSrc:"A: How are you going to defend your decision?\nB: I am going to defend my position with concrete data.",
     funFact:"From Latin 'defendere' (to ward off). In Spanish, you can 'defend' an idea, a person, or even a thesis: 'defender la tesis doctoral'."},

    {type:"teach", trg:"demostrar", src:"to demonstrate / to prove", pos:"verb", gender:null,
     note:"To show clearly that something is true, often with evidence or examples.",
     example:"A: Tienes que demostrar que tu teor\u00eda es correcta.\nB: Los datos demuestran claramente la tendencia.",
     exampleSrc:"A: You have to prove that your theory is correct.\nB: The data clearly demonstrate the trend.",
     funFact:"From Latin 'demonstrare' (to point out). Same root as 'monstrar' and English 'demonstrate'. Originally meant to point a finger at something to show it."},

    {type:"mc", q:"\u00bfQu\u00e9 significa 'defender una postura'?",
     opts:["Cambiar de opini\u00f3n","Rechazar una idea","Argumentar a favor de una posici\u00f3n","Analizar los datos"],
     ans:"Argumentar a favor de una posici\u00f3n",
     hint:"This verb means to support and argue in … of something, not against it."},

    {type:"teach", trg:"la soluci\u00f3n", src:"the solution", pos:"noun", gender:"f",
     note:"A way of resolving a problem or difficulty.",
     example:"A: \u00bfCu\u00e1l es la soluci\u00f3n al problema?\nB: La soluci\u00f3n requiere la cooperaci\u00f3n de todos.",
     exampleSrc:"A: What is the solution to the problem?\nB: The solution requires everyone's cooperation.",
     funFact:"From Latin 'solutio' (loosening). A solution 'loosens' the knot of a problem. Same root as 'disolver' and English 'solve'."},

    {type:"teach", trg:"la justicia social", src:"social justice", pos:"noun", gender:"f",
     note:"Fair distribution of wealth, rights, and opportunities within society.",
     example:"A: La justicia social es un objetivo fundamental de la democracia.\nB: Sin igualdad de oportunidades, no hay justicia social.",
     exampleSrc:"A: Social justice is a fundamental objective of democracy.\nB: Without equality of opportunities, there is no social justice.",
     funFact:"The concept was systematized by philosopher John Rawls in 'A Theory of Justice' (1971). In Spanish-speaking countries, it became a key political slogan in the 20th century."},

    {type:"fb",
     s:"El gobierno propone una {1} para reducir la desigualdad en la sociedad.",
     a:["soluci\u00f3n"],
     opts:["soluci\u00f3n","consecuencia","ventaja","discriminaci\u00f3n"],
     hint:"This feminine noun means a way of resolving a problem or difficulty.",
     sSrc:"The government proposes a {1} to reduce inequality in society."},

    {type:"teach", trg:"el laicismo", src:"secularism / laicism", pos:"noun", gender:"m",
     note:"The principle that government and public life should be independent of religious influence.",
     example:"A: El laicismo garantiza la libertad religiosa de todos los ciudadanos.\nB: En una democracia, el laicismo protege la igualdad.",
     exampleSrc:"A: Secularism guarantees the religious freedom of all citizens.\nB: In a democracy, secularism protects equality.",
     funFact:"From French 'la\u00efcisme', from Greek 'laikos' (of the people, as opposed to clergy). France codified laicism in its 1905 law on church-state separation."},

    {type:"mc", q:"\u00bfQu\u00e9 defiende el laicismo?",
     opts:["La uni\u00f3n entre el estado y la religi\u00f3n","La separaci\u00f3n entre el estado y la religi\u00f3n","El derecho a criticar la sociedad","La econom\u00eda libre de impuestos"],
     ans:"La separaci\u00f3n entre el estado y la religi\u00f3n",
     hint:"This political principle holds that government should be independent of any religious institution."},

    {type:"teach", trg:"analizar", src:"to analyze", pos:"verb", gender:null,
     note:"To examine something in detail to understand it better.",
     example:"A: Tenemos que analizar las consecuencias de esta pol\u00edtica.\nB: Es importante analizar todos los datos antes de decidir.",
     exampleSrc:"A: We have to analyze the consequences of this policy.\nB: It is important to analyze all the data before deciding.",
     funFact:"From Greek 'analusis' (loosening up). Analyzing 'loosens' a complex thing into its parts. The opposite is 'sintetizar' (to synthesize)."},

    {type:"teach", trg:"la postura", src:"the position / stance", pos:"noun", gender:"f",
     note:"A stance or viewpoint on an issue. Key word for academic and debate contexts.",
     example:"A: \u00bfCu\u00e1l es tu postura sobre la globalizaci\u00f3n?\nB: Mi postura es que tiene m\u00e1s ventajas que desventajas.",
     exampleSrc:"A: What is your position on globalization?\nB: My position is that it has more advantages than disadvantages.",
     funFact:"From Latin 'positura' (placement). Your postura is where you 'place' yourself in a debate. Also means literal body posture."},

    {type:"drag_fill",
     s:"Para debatir, necesitas {analizar} los datos y luego {defender} tu opini\u00f3n.",
     blanks:{analizar:"analizar",defender:"defender"},
     pool:["analizar","defender","explicar","rechazar"],
     hint:"First you examine the evidence, then you argue in support of your view.",
     sSrc:"To debate, you need to {analizar} the data and then {defender} your opinion."},

    {type:"mc", q:"\u00bfCu\u00e1l es el opuesto de 'analizar'?",
     opts:["Sintetizar","Proponer","Criticar","Rechazar"],
     ans:"Sintetizar",
     hint:"This verb means to combine separate elements into a coherent whole. The reverse of breaking things down."},

    {type:"match", pairs:[
      {trg:"explicar", src:"to explain"},
      {trg:"defender", src:"to defend"},
      {trg:"demostrar", src:"to demonstrate"},
      {trg:"analizar", src:"to analyze"},
      {trg:"la postura", src:"the position / stance"}
    ]},

    {type:"mc", q:"\u00bfQu\u00e9 significa 'la justicia social'?",
     opts:["Un tipo de pol\u00edtica econ\u00f3mica","La distribuci\u00f3n justa de derechos y oportunidades","El sistema legal de los tribunales","Un movimiento cultural"],
     ans:"La distribuci\u00f3n justa de derechos y oportunidades",
     hint:"This compound noun describes the goal of fair distribution of rights and opportunities in society."},

    {type:"drag_fill",
     s:"El orador supo {defender} su postura con datos y {analizar} los puntos d\u00e9biles del contrario.",
     blanks:{defender:"defender",analizar:"analizar"},
     pool:["defender","analizar","rechazar","demostrar"],
     hint:"He argued in favor of his stance and examined the weak points of the other side.",
     sSrc:"The speaker was able to {defender} his position and {analizar} the weak points of the opponent."}
  ]
};
export default LESSON_13;
