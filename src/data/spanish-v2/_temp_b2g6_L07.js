// B2 Gap Batch 6 Lesson 07 - Politics & Governance
const LESSON_7 = {id:"esv2_b2g6_l7",title:"Política y gobernanza",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y gobernanza",desc:"Build vocabulary for discussing political systems, governance, and civic institutions in Spain.",goals:["Learn 15 political and governance terms","Discuss Spanish political institutions","Use formal political vocabulary"]},

{type:"teach",trg:"la descentralización",src:"decentralization",pos:"noun",gender:"f",
 note:"Feminine noun. Transferring power from central to\nlocal government. Des- + centralización.",
 example:"A: La descentralización ha dado más poder a las comunidades autónomas.\nB: Cada región gestiona su propia sanidad y educación.",
 exampleSrc:"A: Decentralization has given more power to the autonomous communities.\nB: Each region manages its own healthcare and education.",
 funFact:"Spain is one of Europe's most decentralized countries, with 17 autonomous communities."},

{type:"teach",trg:"el estamento",src:"the estate / social class / sector",pos:"noun",gender:"m",
 note:"Masculine noun. A social or political class or sector.\nFrom Latin stamentum.",
 example:"A: Todos los estamentos de la sociedad participaron en el debate.\nB: Desde empresarios hasta trabajadores.",
 exampleSrc:"A: All sectors of society participated in the debate.\nB: From business owners to workers.",
 funFact:"In medieval Spain, the three 'estamentos' were the nobility, clergy, and commoners."},

{type:"teach",trg:"el comunismo",src:"communism",pos:"noun",gender:"m",
 note:"Masculine noun. A political ideology advocating\ncollective ownership. From común (common).",
 example:"A: El comunismo tuvo una gran influencia en el siglo veinte.\nB: Especialmente después de la revolución rusa.",
 exampleSrc:"A: Communism had a great influence in the twentieth century.\nB: Especially after the Russian revolution.",
 funFact:"Spain's Communist Party (PCE) played a key role in the transition to democracy after Franco."},

{type:"teach",trg:"la congregación",src:"the congregation / assembly",pos:"noun",gender:"f",
 note:"Feminine noun. A gathering of people, often religious.\nFrom Latin congregare (to gather).",
 example:"A: La congregación se reunió para discutir el proyecto comunitario.\nB: Asistieron más de doscientas personas.",
 exampleSrc:"A: The congregation gathered to discuss the community project.\nB: More than two hundred people attended.",
 funFact:"From con- (together) + grex (flock). Originally meant gathering a flock of sheep."},

{type:"mc",q:"¿Qué es la descentralización?",opts:["Transferir poder del gobierno central a las regiones","Concentrar todo el poder en la capital","Un tipo de elección","Una reforma educativa"],ans:"Transferir poder del gobierno central a las regiones",hint:"Moving power away from the center to local or regional governments."},

{type:"teach",trg:"la constatación",src:"the verification / confirmation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of confirming or verifying.\nFrom constatar (to verify).",
 example:"A: La constatación de los hechos llevó semanas.\nB: Había que verificar cada dato.",
 exampleSrc:"A: The verification of the facts took weeks.\nB: Every piece of data had to be verified.",
 funFact:"From Latin constatare (to stand firm). Something 'stands' as confirmed."},

{type:"teach",trg:"la consistencia",src:"the consistency",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being steady or firm.\nAlso refers to texture.",
 example:"A: La consistencia de sus políticas es admirable.\nB: Siempre mantiene la misma línea.",
 exampleSrc:"A: The consistency of his policies is admirable.\nB: He always maintains the same line.",
 funFact:"Unlike English, 'consistencia' can mean both 'consistency' and 'texture/density' of a substance."},

{type:"teach",trg:"el ideólogo",src:"the ideologue",pos:"noun",gender:"m",
 note:"Masculine noun. A person who promotes an ideology.\nFeminine: la ideóloga.",
 example:"A: Es considerado el ideólogo del movimiento.\nB: Sus escritos inspiraron a miles de personas.",
 exampleSrc:"A: He is considered the ideologue of the movement.\nB: His writings inspired thousands of people.",
 funFact:"From Greek idea + logos (study). An ideologue is literally a 'student of ideas'."},

{type:"fb",s:"La {1} de los datos del censo tomó varios meses.",a:["constatación"],opts:["constatación","descentralización","consistencia","congregación"],hint:"The process of verifying and confirming that facts are correct.",sSrc:"The {1} of the census data took several months."},

{type:"teach",trg:"el conductor",src:"the driver / host / leader",pos:"noun",gender:"m",
 note:"Masculine noun. A driver, or a TV host.\nFeminine: la conductora.",
 example:"A: El conductor del programa anunció los resultados.\nB: Fue un momento muy emocionante.",
 exampleSrc:"A: The host of the program announced the results.\nB: It was a very exciting moment.",
 funFact:"In Spain, 'conductor' mainly means driver. For a TV host, 'presentador' is more common."},

{type:"teach",trg:"el agente",src:"the agent",pos:"noun",gender:"m",
 note:"Masculine/feminine noun (el/la agente).\nSomeone who acts on behalf of others.",
 example:"A: El agente inmobiliario nos enseñó tres pisos.\nB: El segundo me gustó más.",
 exampleSrc:"A: The real estate agent showed us three apartments.\nB: I liked the second one more.",
 funFact:"From Latin agens (acting). 'Agente' can be a police agent, real estate agent, or secret agent."},

{type:"teach",trg:"la implicación",src:"the involvement / implication",pos:"noun",gender:"f",
 note:"Feminine noun. Being involved in something,\nor a consequence of something.",
 example:"A: Su implicación en el proyecto fue clave.\nB: Sin ella, no habríamos terminado a tiempo.",
 exampleSrc:"A: Her involvement in the project was key.\nB: Without her, we would not have finished on time.",
 funFact:"Has two meanings: 'involvement' (active participation) and 'implication' (consequence)."},

{type:"mc",q:"¿Quién es un ideólogo?",opts:["Un miembro de una congregación","Alguien que promueve una ideología","Un conductor de televisión","Un agente inmobiliario"],ans:"Alguien que promueve una ideología",hint:"A person who develops and promotes a set of political ideas."},

{type:"match",pairs:[
  {trg:"descentralización",src:"decentralization"},
  {trg:"estamento",src:"social class / sector"},
  {trg:"constatación",src:"verification"},
  {trg:"ideólogo",src:"ideologue"},
  {trg:"implicación",src:"involvement"}
]},

{type:"fb",s:"Su {1} en la reforma educativa fue fundamental.",a:["implicación"],opts:["implicación","congregación","consistencia","descentralización"],hint:"Active participation or involvement in something.",sSrc:"Her {1} in the educational reform was fundamental."}
]};
export default LESSON_7;
