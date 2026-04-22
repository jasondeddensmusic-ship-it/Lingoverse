// Spanish B2 Final Batch - Lesson 12: Discourse Verbs & Globalization (PCIC B1/B2)
const LESSON_12 = {
  id:"esv2_b2fin_l12", title:"Debate y Globalizaci\u00f3n", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Debate y Globalizaci\u00f3n",
     desc:"Develop the vocabulary to participate in formal debates and discuss global issues. These words are central to DELE B1/B2 written and oral tasks.",
     goals:["Use key discourse verbs in debates and essays","Discuss globalization and migration","Express advantages, disadvantages, and consequences"]},

    {type:"teach", trg:"comparar", src:"to compare", pos:"verb", gender:null,
     note:"To examine similarities and differences between two or more things.",
     example:"A: Vamos a comparar los dos sistemas educativos.\nB: Es interesante comparar los resultados.",
     exampleSrc:"A: Let us compare the two education systems.\nB: It is interesting to compare the results.",
     funFact:"From Latin 'comparare' (to prepare equally). When you compare, you mentally place two things side by side to weigh them up."},

    {type:"teach", trg:"proponer", src:"to propose / to suggest", pos:"verb", gender:null,
     note:"To put forward an idea, plan, or motion for consideration.",
     example:"A: Te propongo una soluci\u00f3n al problema.\nB: Escucho. \u00bfQu\u00e9 propones?",
     exampleSrc:"A: I propose a solution to the problem.\nB: I am listening. What do you propose?",
     funFact:"From Latin 'proponere' (to put before). Related to 'pr\u00f3logo' and English 'proposal'. You 'put' an idea 'in front of' others."},

    {type:"mc", q:"\u00bfQu\u00e9 significa 'proponer una soluci\u00f3n'?",
     opts:["Plantear una posible respuesta al problema","Estudiar una situaci\u00f3n","Comparar dos opciones","Rechazar una idea"],
     ans:"Plantear una posible respuesta al problema",
     hint:"This verb means to put forward an idea or plan for others to consider."},

    {type:"teach", trg:"rechazar", src:"to reject / to refuse", pos:"verb", gender:null,
     note:"To refuse or turn down an idea, offer, or proposal.",
     example:"A: El gobierno rechaz\u00f3 la propuesta de la oposici\u00f3n.\nB: No es sorprendente, es una propuesta pol\u00e9mica.",
     exampleSrc:"A: The government rejected the opposition's proposal.\nB: It is not surprising, it is a controversial proposal.",
     funFact:"From 'rechar', linked to 'echar' (to throw). To reject is to 'throw back' what was offered to you."},

    {type:"teach", trg:"la ventaja", src:"the advantage", pos:"noun", gender:"f",
     note:"A favorable condition or circumstance. Opposite: la desventaja.",
     example:"A: \u00bfCu\u00e1l es la ventaja de este plan?\nB: La principal ventaja es el ahorro de tiempo.",
     exampleSrc:"A: What is the advantage of this plan?\nB: The main advantage is the time saving.",
     funFact:"From 'vanguardia' (vanguard). The soldier at the front (avant) had the advantage of striking first. Over time it became 'ventaja'."},

    {type:"teach", trg:"la desventaja", src:"the disadvantage", pos:"noun", gender:"f",
     note:"An unfavorable condition or factor. Formed by 'des-' (un-) + ventaja.",
     example:"A: Toda soluci\u00f3n tiene ventajas y desventajas.\nB: La principal desventaja es el costo.",
     exampleSrc:"A: Every solution has advantages and disadvantages.\nB: The main disadvantage is the cost.",
     funFact:"The prefix 'des-' in Spanish reverses meaning, like English 'dis-' or 'un-'. Desventaja, desacuerdo, descuidado all follow this pattern."},

    {type:"drag_fill",
     s:"Vivir en una ciudad grande tiene {ventajas} pero tambi\u00e9n muchas {desventajas}.",
     blanks:{ventajas:"ventajas",desventajas:"desventajas"},
     pool:["ventajas","desventajas","razones","opciones"],
     hint:"Drag the pros first, then the cons. One positive, one negative.",
     sSrc:"Living in a large city has {ventajas} but also many {desventajas}."},

    {type:"teach", trg:"la consecuencia", src:"the consequence", pos:"noun", gender:"f",
     note:"A result or effect of an action or situation.",
     example:"A: \u00bfQu\u00e9 consecuencias tiene la contaminaci\u00f3n?\nB: Las consecuencias para el medio ambiente son graves.",
     exampleSrc:"A: What are the consequences of pollution?\nB: The consequences for the environment are serious.",
     funFact:"From Latin 'consequentia' (following together). Related to 'seguir' (to follow). Consequences 'follow' from actions."},

    {type:"teach", trg:"el objetivo", src:"the objective / goal", pos:"noun", gender:"m",
     note:"A specific aim or goal to be achieved. More formal than 'meta'.",
     example:"A: El objetivo del programa es mejorar la educaci\u00f3n.\nB: Un objetivo muy importante para la sociedad.",
     exampleSrc:"A: The objective of the program is to improve education.\nB: A very important objective for society.",
     funFact:"From Latin 'obiectivus' (placed before). An objective is something 'placed before you' as a target. Related to 'objeto' (object)."},

    {type:"mc", q:"\u00bfQu\u00e9 es 'la consecuencia' de una acci\u00f3n?",
     opts:["El motivo o causa","El resultado o efecto","El objetivo final","La ventaja principal"],
     ans:"El resultado o efecto",
     hint:"This word describes what happens as a result of something else that occurred first."},

    {type:"teach", trg:"la globalizaci\u00f3n", src:"globalization", pos:"noun", gender:"f",
     note:"The process by which the world's economies, cultures, and populations become interconnected.",
     example:"A: La globalizaci\u00f3n ha transformado la econom\u00eda mundial.\nB: S\u00ed, pero la globalizaci\u00f3n tiene ventajas y desventajas.",
     exampleSrc:"A: Globalization has transformed the world economy.\nB: Yes, but globalization has advantages and disadvantages.",
     funFact:"The word 'globalizaci\u00f3n' entered mainstream Spanish in the 1990s. The RAE (Royal Spanish Academy) officially added it in 2001."},

    {type:"teach", trg:"la inmigraci\u00f3n", src:"immigration", pos:"noun", gender:"f",
     note:"The process of people moving to a country to settle there permanently.",
     example:"A: La inmigraci\u00f3n es un tema importante en la pol\u00edtica actual.\nB: La sociedad debe integrar a todos los ciudadanos.",
     exampleSrc:"A: Immigration is an important topic in current politics.\nB: Society must integrate all citizens.",
     funFact:"From Latin 'immigrare' (to move into). Note the double 'm'. Same root as 'migrar' and 'emigrar' (to leave your country)."},

    {type:"fb",
     s:"La {1} tiene consecuencias culturales y econ\u00f3micas para la sociedad.",
     a:["globalizaci\u00f3n"],
     opts:["globalizaci\u00f3n","inmigraci\u00f3n","democracia","pol\u00edtica"],
     hint:"This noun describes the worldwide process of economic and cultural interconnection.",
     sSrc:"{1} has cultural and economic consequences for society."},

    {type:"teach", trg:"la discriminaci\u00f3n", src:"discrimination", pos:"noun", gender:"f",
     note:"Treating people unfairly based on race, gender, age, or other characteristics.",
     example:"A: La discriminaci\u00f3n sigue siendo un problema grave en la sociedad.\nB: Necesitamos leyes contra la discriminaci\u00f3n.",
     exampleSrc:"A: Discrimination is still a serious problem in society.\nB: We need laws against discrimination.",
     funFact:"From Latin 'discriminare' (to separate). 'Discrimen' was a hairpin used to part hair. The Romans used it for any distinction or division."},

    {type:"teach", trg:"la desigualdad", src:"inequality", pos:"noun", gender:"f",
     note:"Lack of equal status, rights, or opportunities. Formed by 'des-' + igualdad.",
     example:"A: La desigualdad social es uno de los mayores retos de nuestro tiempo.\nB: La educaci\u00f3n puede reducir la desigualdad.",
     exampleSrc:"A: Social inequality is one of the greatest challenges of our time.\nB: Education can reduce inequality.",
     funFact:"The United Nations Sustainable Development Goal 10 is 'Reducci\u00f3n de las desigualdades'. Spain has a dedicated ministry tracking this indicator."},

    {type:"mc", q:"\u00bfQu\u00e9 es 'la discriminaci\u00f3n'?",
     opts:["Un tipo de educaci\u00f3n","Un trato injusto por caracter\u00edsticas personales","Una ventaja econ\u00f3mica","Un proceso de inmigraci\u00f3n"],
     ans:"Un trato injusto por caracter\u00edsticas personales",
     hint:"This noun describes unfair treatment based on characteristics like race, gender, or age."},

    {type:"teach", trg:"sintetizar", src:"to synthesize / to summarize", pos:"verb", gender:null,
     note:"To combine ideas into a coherent summary. Key word for academic tasks.",
     example:"A: Necesitas sintetizar los argumentos del art\u00edculo.\nB: Voy a sintetizar las ideas principales en un p\u00e1rrafo.",
     exampleSrc:"A: You need to synthesize the arguments in the article.\nB: I will synthesize the main ideas in a paragraph.",
     funFact:"From Greek 'synthesis' (composition). The opposite is 'analizar' (to analyze). Synthesis builds up; analysis breaks down."},

    {type:"teach", trg:"criticar", src:"to criticize", pos:"verb", gender:null,
     note:"To evaluate and point out faults. Can be constructive or negative depending on context.",
     example:"A: Criticar es f\u00e1cil, proponer soluciones es m\u00e1s dif\u00edcil.\nB: Es verdad. La cr\u00edtica constructiva ayuda a mejorar.",
     exampleSrc:"A: Criticizing is easy, proposing solutions is harder.\nB: That is true. Constructive criticism helps improvement.",
     funFact:"From Greek 'kritikos' (able to judge). A 'critic' was originally a person skilled in making judgments, not necessarily a negative one."},

    {type:"match", pairs:[
      {trg:"comparar", src:"to compare"},
      {trg:"proponer", src:"to propose"},
      {trg:"rechazar", src:"to reject"},
      {trg:"sintetizar", src:"to synthesize"},
      {trg:"criticar", src:"to criticize"}
    ]},

    {type:"fb",
     s:"Para debatir bien, hay que saber {1} los argumentos de las dos partes.",
     a:["comparar"],
     opts:["comparar","rechazar","criticar","sintetizar"],
     hint:"This verb means to look at similarities and differences between two options.",
     sSrc:"To debate well, you need to know how to {1} the arguments of both sides."},

    {type:"mc", q:"\u00bfQu\u00e9 significa 'sintetizar un texto'?",
     opts:["Rechazar las conclusiones","Traducirlo a otro idioma","Resumir las ideas principales en poco espacio","Criticar los argumentos del autor"],
     ans:"Resumir las ideas principales en poco espacio",
     hint:"This academic verb means to bring together the key … into a compact, coherent form."}
  ]
};
export default LESSON_12;
