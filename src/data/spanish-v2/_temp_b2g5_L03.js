// B2 Gap Batch 5 Lesson 03 - Body, Health & Medicine
const LESSON_3 = {id:"esv2_b2g5_l3",title:"Cuerpo y salud",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Cuerpo y salud",desc:"Learn vocabulary about the body, medical conditions, and health treatments at an advanced level.",goals:["Learn 15 health and body-related words","Discuss medical conditions and treatments","Use specialized medical register"]},

{type:"teach",trg:"la hormona",src:"the hormone",pos:"noun",gender:"f",
 note:"Feminine noun. Chemical messenger in the body.\nPlural: las hormonas.",
 example:"A: Las hormonas regulan muchas funciones del cuerpo.\nB: Sí, afectan al estado de ánimo también.",
 exampleSrc:"A: Hormones regulate many body functions.\nB: Yes, they affect mood too.",
 funFact:"From Greek hormon (to set in motion). Hormones were first identified in 1902 by British scientists."},

{type:"teach",trg:"la hernia",src:"the hernia",pos:"noun",gender:"f",
 note:"Feminine noun. When an organ pushes through muscle or tissue.\nCommon: hernia discal (slipped disc).",
 example:"A: El médico dice que tengo una hernia discal.\nB: ¿Necesitas cirugía o se trata con fisioterapia?",
 exampleSrc:"A: The doctor says I have a herniated disc.\nB: Do you need surgery or can it be treated with physiotherapy?",
 funFact:"From Latin hernia (rupture). 'Hernia discal' is one of the most common back problems in adults."},

{type:"teach",trg:"la fisioterapia",src:"the physiotherapy",pos:"noun",gender:"f",
 note:"Feminine noun. Treatment of injuries through physical methods.\nAlso: rehabilitación.",
 example:"A: Llevo tres meses de fisioterapia.\nB: ¿Notas mejoría?\nA: Mucha, ya casi no me duele.",
 exampleSrc:"A: I've been in physiotherapy for three months.\nB: Do you notice improvement?\nA: A lot, it barely hurts anymore.",
 funFact:"From Greek physis (nature) + therapeia (healing). Spain has over 60,000 registered physiotherapists."},

{type:"teach",trg:"el estreñimiento",src:"the constipation",pos:"noun",gender:"m",
 note:"Masculine noun. Difficulty with bowel movements.\nFalse friend: not 'estreñido' but constipated.",
 example:"A: El estreñimiento es muy común con esa medicación.\nB: Bebe mucha agua y come fibra.",
 exampleSrc:"A: Constipation is very common with that medication.\nB: Drink lots of water and eat fiber.",
 funFact:"Beware: 'constipado' in Spanish means having a cold, not constipation. A classic false friend."},

{type:"teach",trg:"la conjuntivitis",src:"the conjunctivitis",pos:"noun",gender:"f",
 note:"Feminine noun. Inflammation of the eye membrane.\nVery contagious form exists.",
 example:"A: Tengo los ojos rojos y me pican mucho.\nB: Parece conjuntivitis. Ve al médico.",
 exampleSrc:"A: My eyes are red and very itchy.\nB: It looks like conjunctivitis. Go to the doctor.",
 funFact:"From conjuntiva (the eye membrane) + -itis (inflammation). Known colloquially as 'ojo rosa'."},

{type:"mc",q:"¿Qué es una hernia discal?",opts:["Un problema en un disco de la columna vertebral","Una infección en los ojos","Un tipo de hormona","Un tratamiento de fisioterapia"],ans:"Un problema en un disco de la columna vertebral",hint:"It involves a disc in the spine pushing out of its normal position."},

{type:"teach",trg:"el estiramiento",src:"the stretching",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stretching muscles.\nFrom estirar (to stretch).",
 example:"A: ¿Haces estiramientos antes de correr?\nB: Siempre. Previenen muchas lesiones.",
 exampleSrc:"A: Do you do stretches before running?\nB: Always. They prevent many injuries.",
 funFact:"Sports medicine in Spain increasingly emphasizes dynamic stretching over static holds before exercise."},

{type:"teach",trg:"la flacidez",src:"the flabbiness / sagging",pos:"noun",gender:"f",
 note:"Feminine noun. Loss of firmness in skin or muscles.",
 example:"A: Con la edad aparece la flacidez en los brazos.\nB: El ejercicio ayuda a combatirla.",
 exampleSrc:"A: With age, flabbiness appears in the arms.\nB: Exercise helps combat it.",
 funFact:"From Latin flaccidus (limp). A very common term in Spanish beauty and fitness advertising."},

{type:"teach",trg:"la dermis",src:"the dermis (skin layer)",pos:"noun",gender:"f",
 note:"Feminine noun. The thick inner layer of skin.\nBelow the epidermis.",
 example:"A: La crema actúa en la dermis, no solo en la superficie.\nB: Por eso es más efectiva.",
 exampleSrc:"A: The cream acts on the dermis, not just the surface.\nB: That's why it's more effective.",
 funFact:"From Greek derma (skin). The dermis contains blood vessels, nerve endings, and hair follicles."},

{type:"teach",trg:"el cadáver",src:"the corpse / dead body",pos:"noun",gender:"m",
 note:"Masculine noun. A dead human body.\nUsed in medical and forensic contexts.",
 example:"A: La policía encontró el cadáver en el río.\nB: La autopsia determinará la causa de la muerte.",
 exampleSrc:"A: The police found the corpse in the river.\nB: The autopsy will determine the cause of death.",
 funFact:"From Latin cadere (to fall). In forensic medicine, 'cadáver' is the standard term, never 'muerto'."},

{type:"fb",s:"El médico me recomendó {1} para la lesión de espalda.",a:["fisioterapia"],opts:["fisioterapia","conjuntivitis","flacidez","dermis"],hint:"A treatment method using physical exercises to heal injuries.",sSrc:"The doctor recommended {1} for my back injury."},

{type:"teach",trg:"hiperactivo",src:"hyperactive",pos:"adj",gender:null,
 note:"Adjective. Excessively active or restless.\nFeminine: hiperactiva.",
 example:"A: Mi hijo es muy hiperactivo en clase.\nB: ¿Le han hecho alguna evaluación?",
 exampleSrc:"A: My son is very hyperactive in class.\nB: Has he had any evaluation done?",
 funFact:"TDAH (Trastorno por Déficit de Atención e Hiperactividad) is the Spanish term for ADHD."},

{type:"teach",trg:"la discapacidad",src:"the disability",pos:"noun",gender:"f",
 note:"Feminine noun. A physical or mental condition limiting activity.\nPreferred over 'minusvalía'.",
 example:"A: Las personas con discapacidad tienen derecho a la accesibilidad.\nB: Muchos edificios aún no están adaptados.",
 exampleSrc:"A: People with disabilities have a right to accessibility.\nB: Many buildings are still not adapted.",
 funFact:"Spain's accessibility laws (LIONDAU) require public spaces to be fully adapted for all disabilities."},

{type:"teach",trg:"gastrointestinal",src:"gastrointestinal",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Relating to the stomach and intestines.",
 example:"A: Tengo problemas gastrointestinales desde hace semanas.\nB: Deberías consultar a un especialista.",
 exampleSrc:"A: I've had gastrointestinal problems for weeks.\nB: You should consult a specialist.",
 funFact:"Spain has a high rate of gastroenterology specialization, with over 3,000 practicing gastroenterologists."},

{type:"teach",trg:"fetal",src:"fetal",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Relating to a fetus.\nCommon: posición fetal.",
 example:"A: La ecografía muestra que el desarrollo fetal es normal.\nB: Qué alivio. Todo va bien entonces.",
 exampleSrc:"A: The scan shows fetal development is normal.\nB: What a relief. Everything is going well then.",
 funFact:"'Posición fetal' is used both medically and colloquially to describe curling up in a ball."},

{type:"mc",q:"¿Qué significa 'estreñimiento'?",opts:["Inflamación de los ojos","Dificultad para ir al baño","Un resfriado común","Dolor de cabeza intenso"],ans:"Dificultad para ir al baño",hint:"Not to be confused with 'constipado', which means having a cold in Spanish."},

{type:"fb",s:"Las {1} regulan el crecimiento y el metabolismo.",a:["hormonas"],opts:["hormonas","hernias","dermis","cadáveres"],hint:"Chemical messengers produced by glands that control body processes.",sSrc:"The {1} regulate growth and metabolism."},

{type:"match",pairs:[{trg:"fisioterapia",src:"physiotherapy"},{trg:"estreñimiento",src:"constipation"},{trg:"flacidez",src:"flabbiness"},{trg:"cadáver",src:"corpse"},{trg:"discapacidad",src:"disability"}]},

{type:"fb",s:"Las personas con {1} necesitan edificios accesibles.",a:["discapacidad"],opts:["discapacidad","conjuntivitis","flacidez","hernia"],hint:"A condition that limits a person's physical or mental abilities.",sSrc:"People with {1} need accessible buildings."},

{type:"mc",q:"¿Dónde actúa la dermis?",opts:["En el cerebro","En los músculos","En la capa profunda de la piel","En los huesos"],ans:"En la capa profunda de la piel",hint:"It is one of the layers of skin, located beneath the outer surface layer."}
]};

export default LESSON_3;
