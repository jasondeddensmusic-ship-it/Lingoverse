// B2 Gap Batch C Lesson 07 - Health & Medicine
const LESSON_7 = {id:"esv2_b2gC_l7",title:"Salud y medicina",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Salud y medicina",desc:"Explore medical vocabulary, health conditions, and the Spanish healthcare system.",goals:["Learn 12 words about health and medicine","Discuss medical conditions and treatments","Use healthcare vocabulary accurately"]},

{type:"teach",trg:"la neumonía",src:"the pneumonia",pos:"noun",gender:"f",
 note:"Feminine noun. A serious lung infection.\nAlso spelled pulmonía in informal speech.",
 example:"A: El paciente ha sido ingresado con neumonía.\nB: Necesitará antibióticos y reposo absoluto.",
 exampleSrc:"A: The patient has been admitted with pneumonia.\nB: He'll need antibiotics and complete rest.",
 funFact:"In Spain, 'pulmonía' is the informal word used in daily speech, while 'neumonía' is the medical term."},

{type:"teach",trg:"la obesidad",src:"the obesity",pos:"noun",gender:"f",
 note:"Feminine noun. The condition of being seriously overweight.\nFrom Latin obesus (having eaten until fat).",
 example:"A: La obesidad infantil ha aumentado un 10% en la última década.\nB: Los expertos recomiendan más actividad física en los colegios.",
 exampleSrc:"A: Childhood obesity has increased 10% in the last decade.\nB: Experts recommend more physical activity in schools.",
 funFact:"Despite the Mediterranean diet's fame, Spain has one of the highest childhood obesity rates in Europe."},

{type:"teach",trg:"la irritación",src:"the irritation / inflammation",pos:"noun",gender:"f",
 note:"Feminine noun. Redness and soreness of skin or tissue.\nAlso emotional annoyance.",
 example:"A: Tengo una irritación en la piel por la alergia.\nB: Ponte esta crema, te aliviará enseguida.",
 exampleSrc:"A: I have a skin irritation from the allergy.\nB: Put on this cream, it will relieve it right away.",
 funFact:"Spanish distinguishes 'irritación' (the state) from 'irritabilidad' (the tendency to become irritated)."},

{type:"teach",trg:"la irritabilidad",src:"the irritability",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to become easily annoyed.\nA medical symptom and personality trait.",
 example:"A: La falta de sueño le causa mucha irritabilidad.\nB: Debería dormir al menos ocho horas.",
 exampleSrc:"A: Lack of sleep causes him a lot of irritability.\nB: He should sleep at least eight hours.",
 funFact:"In medicine, irritabilidad is a key diagnostic criterion for conditions from depression to thyroid disorders."},

{type:"mc",q:"¿Qué enfermedad afecta a los pulmones?",opts:["La neumonía","La obesidad","La irritación","La irritabilidad"],ans:"La neumonía",hint:"This is a serious infection that causes inflammation in the lungs."},

{type:"teach",trg:"el parto",src:"the childbirth / delivery",pos:"noun",gender:"m",
 note:"Masculine noun. The process of giving birth.\nFrom Latin partus (bringing forth).",
 example:"A: El parto fue natural y sin complicaciones.\nB: ¡Enhorabuena! ¿Cuánto pesó el bebé?",
 exampleSrc:"A: The delivery was natural and without complications.\nB: Congratulations! How much did the baby weigh?",
 funFact:"In Spain, 'sala de partos' (delivery room) and 'parto por cesárea' (cesarean delivery) are essential terms."},

{type:"teach",trg:"la peste",src:"the plague / pest / stench",pos:"noun",gender:"f",
 note:"Feminine noun. A deadly epidemic disease.\nAlso colloquial for a terrible smell.",
 example:"A: La peste negra devastó Europa en el siglo XIV.\nB: Se calcula que murió un tercio de la población.",
 exampleSrc:"A: The Black Plague devastated Europe in the 14th century.\nB: It is estimated that a third of the population died.",
 funFact:"Colloquially, 'echar pestes de alguien' means to badmouth someone furiously."},

{type:"teach",trg:"la impureza",src:"the impurity",pos:"noun",gender:"f",
 note:"Feminine noun. A substance that contaminates.\nFrom impuro (impure).",
 example:"A: El agua contiene impurezas que hay que filtrar.\nB: El laboratorio analiza cada muestra antes de aprobarla.",
 exampleSrc:"A: The water contains impurities that need to be filtered.\nB: The lab analyzes every sample before approving it.",
 funFact:"In Spanish, adding im- to a word creates its opposite: puro > impuro, pureza > impureza."},

{type:"fb",s:"El {1} fue muy rápido y sin complicaciones.",a:["parto"],opts:["parto","peste","impureza","obesidad"],hint:"The medical process of giving birth to a baby.",sSrc:"The {1} was very fast and without complications."},

{type:"teach",trg:"la fisonomía",src:"the physiognomy / facial features",pos:"noun",gender:"f",
 note:"Feminine noun. The features of a person's face.\nAlso spelled fisionomía.",
 example:"A: Tiene una fisonomía muy particular, se le reconoce enseguida.\nB: Sí, sus rasgos son muy característicos.",
 exampleSrc:"A: He has a very distinctive physiognomy, you recognize him right away.\nB: Yes, his features are very characteristic.",
 funFact:"In the 18th century, fisonomía was a pseudoscience that claimed to read character from facial features."},

{type:"teach",trg:"la desnudez",src:"the nudity / nakedness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unclothed.\nFrom desnudo (naked).",
 example:"A: La desnudez en el arte renacentista era muy común.\nB: Representaba la belleza ideal del cuerpo humano.",
 exampleSrc:"A: Nudity in Renaissance art was very common.\nB: It represented the ideal beauty of the human body.",
 funFact:"Spain is one of Europe's most relaxed countries about topless beaches, especially on the Mediterranean coast."},

{type:"teach",trg:"la pequeñez",src:"the smallness / pettiness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being small.\nAlso used for trivial, petty behavior.",
 example:"A: No pierdas el tiempo con esas pequeñeces.\nB: Tienes razón, hay asuntos más importantes.",
 exampleSrc:"A: Don't waste time on those petty things.\nB: You're right, there are more important matters.",
 funFact:"The suffix -ez creates abstract quality nouns: pequeño > pequeñez, viejo > vejez, bello > belleza."},

{type:"mc",q:"¿Qué significa 'fisonomía'?",opts:["Los rasgos del rostro de una persona","Una enfermedad de la piel","Un tipo de medicina alternativa","La obesidad infantil"],ans:"Los rasgos del rostro de una persona",hint:"Think about the distinctive features of someone's face that make them recognizable."},

{type:"fb",s:"La {1} negra devastó Europa en el siglo XIV.",a:["peste"],opts:["peste","impureza","desnudez","pequeñez"],hint:"A deadly epidemic disease that killed millions across the continent.",sSrc:"The Black {1} devastated Europe in the 14th century."},

{type:"match",pairs:[{trg:"neumonía",src:"pneumonia"},{trg:"parto",src:"childbirth"},{trg:"impureza",src:"impurity"},{trg:"fisonomía",src:"facial features"},{trg:"pequeñez",src:"pettiness"}]},

{type:"fb",s:"La {1} infantil es un problema de salud pública grave.",a:["obesidad"],opts:["obesidad","irritabilidad","desnudez","neumonía"],hint:"A health condition caused by being seriously overweight, especially concerning in children.",sSrc:"Childhood {1} is a serious public health problem."}
]};

export default LESSON_7;
