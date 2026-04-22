// B2 Gap Batch D Lesson 4 - Persuasion & Persistence
const LESSON_4 = {id:"esv2_b2gD_l4",title:"Persuadir y persistir",icon:"\uD83D\uDCAA",xp:15,board:true,steps:[
{type:"intro",title:"Persuadir y persistir",desc:"Learn verbs and adjectives related to influence, determination, and moral character at an advanced level.",goals:["Learn 10 verbs and adjectives of persuasion and persistence","Express determination and influence precisely","Distinguish subtle differences between related verbs"]},

{type:"teach",trg:"persuadir",src:"to persuade",pos:"verb",gender:null,
 note:"Regular -ir verb. To convince someone through argument.\nPersuadir a alguien de que + subjunctive.",
 example:"A: No logré persuadir a mi hermano de que viniera a la cena.\nB: Es muy terco, nunca cambia de opinión fácilmente.",
 exampleSrc:"A: I couldn't persuade my brother to come to dinner.\nB: He's very stubborn, he never changes his mind easily.",
 funFact:"From Latin 'persuadere' (to advise thoroughly). In rhetoric, persuasion is one of the three pillars alongside ethos and logos."},

{type:"teach",trg:"persuasivo",src:"persuasive",pos:"adj",gender:null,
 note:"Adjective. Having the power to convince.\nForms: persuasivo/a/os/as.",
 example:"A: Tu discurso fue muy persuasivo.\nB: Practiqué mucho delante del espejo.",
 exampleSrc:"A: Your speech was very persuasive.\nB: I practiced a lot in front of the mirror.",
 funFact:"In Spanish debate culture, being 'persuasivo' is a high compliment. The related noun is 'la persuasión'."},

{type:"teach",trg:"la persuasión",src:"the persuasion",pos:"noun",gender:"f",
 note:"Feminine noun. The act or power of convincing.\nAbstract noun from persuadir.",
 example:"A: La persuasión es una habilidad clave en las ventas.\nB: Saber escuchar es tan importante como saber hablar.",
 exampleSrc:"A: Persuasion is a key skill in sales.\nB: Knowing how to listen is as important as knowing how to speak.",
 funFact:"Jane Austen's novel 'Persuasion' is known in Spanish as 'Persuasión', one of the most direct title translations."},

{type:"teach",trg:"perseverar",src:"to persevere",pos:"verb",gender:null,
 note:"Regular -ar verb. To continue despite difficulty.\nSynonym: persistir. Stronger than 'continuar'.",
 example:"A: Hay que perseverar aunque los resultados tarden en llegar.\nB: Tienes razón, la constancia siempre da sus frutos.",
 exampleSrc:"A: You have to persevere even if results take time to arrive.\nB: You're right, consistency always pays off.",
 funFact:"The Spanish saying 'el que persevera alcanza' (he who perseveres achieves) is equivalent to 'persistence pays off'."},

{type:"mc",q:"Un discurso persuasivo tiene el poder de...",opts:["Convencer a la audiencia","Aburrir al público","Confundir a los oyentes","Informar sin opinar"],ans:"Convencer a la audiencia",hint:"The adjective describes the ability to make people agree with your point of view."},

{type:"teach",trg:"persistir",src:"to persist / to continue",pos:"verb",gender:null,
 note:"Regular -ir verb. To keep going despite obstacles.\nAlso: the fever persists (la fiebre persiste).",
 example:"A: Si persiste el dolor, deberías ir al médico.\nB: Llevas tres días así, no esperes más.",
 exampleSrc:"A: If the pain persists, you should go to the doctor.\nB: You've been like this for three days, don't wait longer.",
 funFact:"'Persistir' is used both for human determination and for conditions that linger, unlike 'perseverar' which is only human."},

{type:"teach",trg:"perturbar",src:"to disturb / to upset",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause emotional or mental disturbance.\nMore formal than 'molestar'.",
 example:"A: Las noticias de la guerra le perturbaron profundamente.\nB: Es comprensible, las imágenes eran muy duras.",
 exampleSrc:"A: The war news deeply disturbed him.\nB: It's understandable, the images were very harsh.",
 funFact:"'Perturbador' (disturbing) is the standard film rating term in Spain for psychologically unsettling content."},

{type:"teach",trg:"pervertir",src:"to pervert / to corrupt",pos:"verb",gender:null,
 note:"Irregular verb (e > ie). To corrupt morals or meaning.\nPast participle: pervertido.",
 example:"A: El poder puede pervertir los ideales más nobles.\nB: Por eso la transparencia en política es fundamental.",
 exampleSrc:"A: Power can pervert the noblest ideals.\nB: That's why transparency in politics is fundamental.",
 funFact:"From Latin 'pervertere' (to turn completely). In legal Spanish, 'pervertir el curso de la justicia' means to obstruct justice."},

{type:"fb",s:"Hay que {1} aunque el camino sea difícil.",a:["perseverar"],opts:["perseverar","perturbar","pervertir","persuadir"],hint:"To keep going with determination despite hardship. A positive verb about resilience.",sSrc:"You have to {1} even if the path is difficult."},

{type:"teach",trg:"pernicioso",src:"pernicious / harmful",pos:"adj",gender:null,
 note:"Adjective. Causing great harm, especially gradually.\nForms: pernicioso/a/os/as. Formal register.",
 example:"A: El tabaco tiene efectos perniciosos para la salud.\nB: A pesar de las advertencias, mucha gente sigue fumando.",
 exampleSrc:"A: Tobacco has pernicious effects on health.\nB: Despite the warnings, many people still smoke.",
 funFact:"In medicine, 'anemia perniciosa' (pernicious anemia) is a specific condition where the body cannot absorb vitamin B12."},

{type:"teach",trg:"la perfidia",src:"the perfidy / treachery",pos:"noun",gender:"f",
 note:"Feminine noun. Deliberate betrayal of trust.\nVery formal, literary register.",
 example:"A: La perfidia de su socio le costó todo lo que tenía.\nB: Confiar ciegamente en los negocios es muy arriesgado.",
 exampleSrc:"A: His partner's perfidy cost him everything he had.\nB: Trusting blindly in business is very risky.",
 funFact:"'Pérfida Albión' (Perfidious Albion) is a Spanish phrase for England, reflecting historical rivalry from the Armada era."},

{type:"mc",q:"'Perturbar' significa...",opts:["Corromper la moral","Causar malestar emocional o mental","Convencer con argumentos","Continuar con determinación"],ans:"Causar malestar emocional o mental",hint:"To cause psychological disturbance or distress. More formal than simply annoying someone."},

{type:"match",pairs:[
 {trg:"persuadir",src:"to persuade"},
 {trg:"perseverar",src:"to persevere"},
 {trg:"perturbar",src:"to disturb"},
 {trg:"persistir",src:"to persist"},
 {trg:"pervertir",src:"to corrupt"}
]},

{type:"fb",s:"Las noticias sobre el accidente le {1} durante varios días.",a:["perturbaron"],opts:["perturbaron","persuadieron","perseveraron","pervirtieron"],hint:"The news caused deep emotional distress and psychological disturbance.",sSrc:"The news about the accident {1} him for several days."},

{type:"mc",q:"Un efecto pernicioso es...",opts:["Ligeramente molesto","Completamente neutral","Gradualmente dañino","Inmediatamente positivo"],ans:"Gradualmente dañino",hint:"This adjective describes harm that builds up insidiously over time."}
]};
export default LESSON_4;
