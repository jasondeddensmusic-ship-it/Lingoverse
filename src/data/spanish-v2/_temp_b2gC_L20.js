// B2 Gap Batch C Lesson 20 - Abstract Concepts & Formal Register
const LESSON_20 = {id:"esv2_b2gC_l20",title:"Conceptos abstractos",icon:"📜",xp:15,board:true,steps:[
{type:"intro",title:"Conceptos abstractos",desc:"Master advanced abstract vocabulary and formal register expressions essential for DELE B2 communication.",goals:["Learn 12 abstract and formal vocabulary items","Discuss complex ideas with nuance","Use high-register Spanish confidently"]},

{type:"teach",trg:"la etcétera",src:"the etcetera / and so on",pos:"noun",gender:"f",
 note:"Feminine noun. Used to indicate more items exist.\nAbbreviated: etc. From Latin et cetera.",
 example:"A: Necesitamos sillas, mesas, proyector, etcétera.\nB: Haré una lista completa para no olvidar nada.",
 exampleSrc:"A: We need chairs, tables, projector, etcetera.\nB: I'll make a complete list so we don't forget anything.",
 funFact:"In Spanish, 'un largo etcétera' (a long etcetera) is used to imply the list is much longer than stated."},

{type:"teach",trg:"la baba",src:"the drool / slime / sap",pos:"noun",gender:"f",
 note:"Feminine noun. Saliva dripping from the mouth.\nAlso a plant's sticky sap.",
 example:"A: El bebé tiene mucha baba porque le están saliendo los dientes.\nB: Es normal, ponle un babero limpio.",
 exampleSrc:"A: The baby has a lot of drool because his teeth are coming in.\nB: It's normal, put a clean bib on him.",
 funFact:"'Se le cae la baba' (the drool falls) means someone is besotted or admiring something excessively."},

{type:"teach",trg:"el chato",src:"the snub-nosed person / small glass of wine",pos:"noun",gender:"m",
 note:"Masculine noun. A person with a flat nose.\nAlso a small glass of draft beer or wine.",
 example:"A: Vamos a tomar un chato de vino en el bar de la esquina.\nB: Perfecto, tienen un tinto de la casa muy bueno.",
 exampleSrc:"A: Let's have a small glass of wine at the corner bar.\nB: Perfect, they have a very good house red.",
 funFact:"A 'chato' of wine is the classic Spanish bar measure: a small, wide glass. Calling someone 'chato' is affectionate."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem bigger than it is.\nFrom exagerar (to exaggerate).",
 example:"A: Decir que todo está perdido es una exageración.\nB: Cierto, la situación es difícil pero no imposible.",
 exampleSrc:"A: Saying everything is lost is an exaggeration.\nB: True, the situation is difficult but not impossible.",
 funFact:"Spanish speakers are famously expressive. 'Sin exageración' (without exaggeration) is used to add emphasis."},

{type:"mc",q:"¿Qué es un 'chato' en un bar español?",opts:["Un vaso pequeño de vino o cerveza","Un plato de tapas","Una propina generosa","Un tipo de bocadillo"],ans:"Un vaso pequeño de vino o cerveza",hint:"A small, wide glass used for serving draft wine or beer in traditional Spanish bars."},

{type:"teach",trg:"la cítara",src:"the zither / kithara",pos:"noun",gender:"f",
 note:"Feminine noun. A stringed musical instrument.\nFrom Greek kithara.",
 example:"A: El sonido de la cítara es muy relajante.\nB: Se usa mucho en la música tradicional centroeuropea.",
 exampleSrc:"A: The sound of the zither is very relaxing.\nB: It's used a lot in traditional Central European music.",
 funFact:"The word 'guitar' (guitarra) evolved from the same Greek root as cítara, through Arabic qitara."},

{type:"teach",trg:"el laúd",src:"the lute",pos:"noun",gender:"m",
 note:"Masculine noun. A pear-shaped stringed instrument.\nFrom Arabic al-ud (the wood).",
 example:"A: El laúd fue el instrumento más popular del Renacimiento.\nB: Su sonido aparece en mucha música antigua.",
 exampleSrc:"A: The lute was the most popular instrument of the Renaissance.\nB: Its sound appears in a lot of early music.",
 funFact:"From Arabic al-ud. The Moors brought the laúd to Spain, where it evolved into the European lute and vihuela."},

{type:"teach",trg:"el católico",src:"the Catholic (person)",pos:"noun",gender:"m",
 note:"Masculine noun. A person of the Catholic faith.\nFeminine: la católica. Also adjective.",
 example:"A: España ha sido históricamente un país católico.\nB: Aunque cada vez menos gente practica activamente.",
 exampleSrc:"A: Spain has historically been a Catholic country.\nB: Although fewer and fewer people actively practice.",
 funFact:"'No estar muy católico' is a colloquial expression meaning to feel unwell. Nothing to do with religion."},

{type:"fb",s:"El {1} fue el instrumento más popular en el Renacimiento europeo.",a:["laúd"],opts:["laúd","chato","católico","baba"],hint:"A pear-shaped stringed instrument brought to Europe via the Arab world.",sSrc:"The {1} was the most popular instrument in the European Renaissance."},

{type:"teach",trg:"la paradoja",src:"the paradox",pos:"noun",gender:"f",
 note:"Feminine noun. A seemingly contradictory truth.\nFrom Greek para (against) + doxa (opinion).",
 example:"A: Es una paradoja que el turismo destruya lo que viene a ver.\nB: Hay que encontrar un equilibrio sostenible.",
 exampleSrc:"A: It's a paradox that tourism destroys what it comes to see.\nB: We need to find a sustainable balance.",
 funFact:"The 'paradoja española' often refers to Spain's contradictions: modern yet traditional, European yet unique."},

{type:"teach",trg:"a la moda",src:"in fashion / trendy",pos:"adv",gender:null,
 note:"Adverbial phrase. Following current trends.\nAlso: a la última moda (cutting edge).",
 example:"A: Siempre va vestida a la moda.\nB: Se gasta una fortuna en ropa cada temporada.",
 exampleSrc:"A: She always dresses fashionably.\nB: She spends a fortune on clothes every season.",
 funFact:"'Moda' comes from Latin modus (manner). 'Pasado de moda' means out of fashion, outdated."},

{type:"teach",trg:"la pasividad",src:"the passivity / inaction",pos:"noun",gender:"f",
 note:"Feminine noun. Failing to act when action is needed.\nFrom pasivo (passive).",
 example:"A: La pasividad ante la injusticia es también una forma de injusticia.\nB: Hay que actuar cuando vemos algo mal.",
 exampleSrc:"A: Passivity in the face of injustice is also a form of injustice.\nB: We must act when we see something wrong.",
 funFact:"In Spanish grammar, 'pasividad' relates to the passive voice. In ethics, it describes moral inaction."},

{type:"mc",q:"¿De qué idioma viene la palabra 'laúd'?",opts:["Del italiano","Del árabe","Del griego","Del latín"],ans:"Del árabe",hint:"This instrument's name comes from al-ud, a word in the language of the Moors who ruled Spain."},

{type:"fb",s:"Siempre va vestida {1}, con las últimas tendencias.",a:["a la moda"],opts:["a la moda","a la vez","a partir de","a pesar de"],hint:"A phrase meaning fashionably, following current trends in clothing and style.",sSrc:"She always dresses {1}, with the latest trends."},

{type:"match",pairs:[{trg:"etcétera",src:"etcetera"},{trg:"chato",src:"small wine glass"},{trg:"laúd",src:"lute"},{trg:"a la moda",src:"in fashion"},{trg:"cítara",src:"zither"}]},

{type:"fb",s:"Decir que es el peor momento de la historia es una {1}.",a:["exageración"],opts:["exageración","paradoja","pasividad","etcétera"],hint:"Making something seem much bigger or worse than it really is.",sSrc:"Saying it's the worst moment in history is an {1}."}
]};

export default LESSON_20;
