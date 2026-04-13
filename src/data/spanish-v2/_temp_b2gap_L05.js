// B2 Gap Lesson 05 - Health & Body
const LESSON_5 = {id:"esv2_b2gap_l5",title:"Salud y cuerpo",icon:"🩺",xp:15,board:true,steps:[
{type:"intro",title:"Salud y cuerpo",desc:"Learn medical and body-related vocabulary for describing health conditions and treatments.",goals:["Learn 20 health and body terms","Describe symptoms and conditions","Discuss medical topics with precision"]},

{type:"teach",trg:"el asma",src:"the asthma",pos:"noun",gender:"m",
 note:"Masculine noun despite ending in -a. Uses 'el' because of initial stressed 'a'.",
 example:"A: ¿Tienes asma?\nB: Sí, uso un inhalador cuando hace mucho frío.",
 exampleSrc:"A: Do you have asthma?\nB: Yes, I use an inhaler when it is very cold.",
 funFact:"One of many Spanish nouns with stressed initial 'a' that take 'el' despite being feminine in grammar."},

{type:"teach",trg:"la artritis",src:"the arthritis",pos:"noun",gender:"f",
 note:"Feminine noun. Inflammation of the joints. Invariable in plural.",
 example:"A: Mi abuela sufre de artritis en las manos.\nB: ¿Ha probado la fisioterapia?",
 exampleSrc:"A: My grandmother suffers from arthritis in her hands.\nB: Has she tried physiotherapy?",
 funFact:"From Greek arthron (joint) + -itis (inflammation). The structure is identical in English and Spanish."},

{type:"teach",trg:"la alucinación",src:"the hallucination",pos:"noun",gender:"f",
 note:"Feminine noun. Perceiving something that is not there.",
 example:"A: La fiebre le provocó alucinaciones.\nB: Es normal con temperaturas tan altas.",
 exampleSrc:"A: The fever caused him hallucinations.\nB: It is normal with such high temperatures.",
 funFact:"Colloquially, 'alucinar' means to be amazed: 'Alucino con este sitio' (I cannot believe this place)."},

{type:"teach",trg:"la amígdala",src:"the tonsil",pos:"noun",gender:"f",
 note:"Feminine noun. The lymph glands in the throat.",
 example:"A: Le van a operar de las amígdalas.\nB: Es una operación muy sencilla, no te preocupes.",
 exampleSrc:"A: They are going to operate on his tonsils.\nB: It is a very simple operation, do not worry.",
 funFact:"From Latin amygdala (almond), because tonsils are almond-shaped. Also used in brain anatomy."},

{type:"teach",trg:"analgésico",src:"analgesic / painkiller",pos:"adj",gender:null,
 note:"Adjective. Relieving pain. Also used as noun: el analgésico.",
 example:"A: ¿Tienes algún analgésico?\nB: Sí, hay ibuprofeno en el botiquín.",
 exampleSrc:"A: Do you have any painkillers?\nB: Yes, there is ibuprofen in the first aid kit.",
 funFact:"From Greek an- (without) + algos (pain). The most common OTC analgesic in Spain is paracetamol."},

{type:"mc",q:"¿Qué es un analgésico?",opts:["Un medicamento para el dolor","Una enfermedad crónica","Una operación quirúrgica","Un tipo de alergia"],ans:"Un medicamento para el dolor",hint:"Think about what relieves pain."},

{type:"teach",trg:"la conjuntivitis",src:"the conjunctivitis",pos:"noun",gender:"f",
 note:"Feminine noun. Eye infection causing redness and irritation.",
 example:"A: Tengo conjuntivitis y me lloran los ojos.\nB: Deberías ir al oftalmólogo.",
 exampleSrc:"A: I have conjunctivitis and my eyes are watering.\nB: You should see the ophthalmologist.",
 funFact:"Very contagious. Spanish schools send children home immediately if conjunctivitis is suspected."},

{type:"teach",trg:"la autopsia",src:"the autopsy",pos:"noun",gender:"f",
 note:"Feminine noun. Medical examination of a dead body.",
 example:"A: La autopsia reveló la causa de la muerte.\nB: El informe tardó dos semanas.",
 exampleSrc:"A: The autopsy revealed the cause of death.\nB: The report took two weeks.",
 funFact:"From Greek autopsía (seeing with one's own eyes). Auto- (self) + opsis (sight)."},

{type:"teach",trg:"el cadáver",src:"the corpse",pos:"noun",gender:"m",
 note:"Masculine noun. A dead body.",
 example:"A: El cadáver fue encontrado en el río.\nB: La policía acordonó toda la zona.",
 exampleSrc:"A: The corpse was found in the river.\nB: The police cordoned off the entire area.",
 funFact:"A Latin mnemonic: CADAVER = Caro Data Vermibus (flesh given to worms). Gruesome but memorable."},

{type:"teach",trg:"la cabeza",src:"the head",pos:"noun",gender:"f",
 note:"Feminine noun. The head. Also means 'mind' figuratively.",
 example:"A: Me duele mucho la cabeza.\nB: Tómate un analgésico y descansa.",
 exampleSrc:"A: My head hurts a lot.\nB: Take a painkiller and rest.",
 funFact:"'Cabeza de turco' (Turkish head) means scapegoat, from medieval jousting target dummies."},

{type:"fb",s:"La fiebre alta le provocó {1} durante la noche.",a:["alucinaciones"],opts:["alucinaciones","amígdalas","autopsias","artritis"],hint:"Seeing or hearing things that are not really there.",sSrc:"The high fever caused him {1} during the night."},

{type:"teach",trg:"la aleta",src:"the fin / flipper",pos:"noun",gender:"f",
 note:"Feminine noun. Fin of a fish, or swimming flipper.",
 example:"A: El tiburón mostró su aleta sobre el agua.\nB: Todos salieron corriendo de la playa.",
 exampleSrc:"A: The shark showed its fin above the water.\nB: Everyone ran off the beach.",
 funFact:"Also used for car fenders: 'la aleta del coche'. The fin-like curve inspired the name."},

{type:"teach",trg:"broncear",src:"to tan / to bronze",pos:"verb",gender:null,
 note:"Regular -ar verb. To get a suntan.\nReflexive: broncearse.",
 example:"A: Me bronceo muy rápido en verano.\nB: Ten cuidado con las quemaduras solares.",
 exampleSrc:"A: I tan very quickly in summer.\nB: Be careful with sunburns.",
 funFact:"From bronce (bronze). Getting a tan literally means becoming bronze-colored."},

{type:"teach",trg:"el bañista",src:"the swimmer / bather",pos:"noun",gender:"m",
 note:"Common gender noun. Someone swimming or bathing at a beach.\nLa bañista for feminine.",
 example:"A: Los bañistas llenaron la playa al mediodía.\nB: En agosto es imposible encontrar sitio.",
 exampleSrc:"A: The bathers filled the beach at noon.\nB: In August it is impossible to find a spot.",
 funFact:"Spanish lifeguards are called 'socorristas'. Beaches display colored flags for safety."},

{type:"teach",trg:"la cana",src:"the grey hair (strand)",pos:"noun",gender:"f",
 note:"Feminine noun. A single strand of grey hair.\nPlural: las canas.",
 example:"A: Cada día me salen más canas.\nB: A mí también, es la edad.",
 exampleSrc:"A: I get more grey hairs every day.\nB: Me too, it is age.",
 funFact:"'Echar una cana al aire' (to throw a grey hair in the air) means to let loose and have fun."},

{type:"mc",q:"¿Qué parte del pez le permite nadar?",opts:["La cabeza","La cana","La aleta","La amígdala"],ans:"La aleta",hint:"This body part helps fish move through water."},

{type:"teach",trg:"el colágeno",src:"the collagen",pos:"noun",gender:"m",
 note:"Masculine noun. Protein that gives structure to skin and tissue.",
 example:"A: El colágeno mantiene la piel firme.\nB: Por eso lo añaden a tantas cremas.",
 exampleSrc:"A: Collagen keeps the skin firm.\nB: That is why they add it to so many creams.",
 funFact:"From Greek kolla (glue) + -gen (producing). Collagen literally 'produces glue' that holds you together."},

{type:"teach",trg:"calórico",src:"caloric",pos:"adj",gender:null,
 note:"Adjective. Related to calories or heat energy.\nFeminine: calórica.",
 example:"A: El valor calórico de esta comida es muy alto.\nB: Normal, lleva mucho aceite.",
 exampleSrc:"A: The caloric value of this food is very high.\nB: Of course, it has a lot of oil.",
 funFact:"From Latin calor (heat). Spain's Mediterranean diet is praised for balanced caloric intake."},

{type:"teach",trg:"antiestrés",src:"anti-stress",pos:"adj",gender:null,
 note:"Invariable adjective. Designed to reduce stress.",
 example:"A: Compré una pelota antiestrés para la oficina.\nB: Yo necesito unas vacaciones antiestrés.",
 exampleSrc:"A: I bought an anti-stress ball for the office.\nB: I need an anti-stress vacation.",
 funFact:"'Anti-' prefixed words are very productive in Spanish: antiestrés, antiarrugas, antienvejecimiento."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of absorbing or taking in.",
 example:"A: La absorción de nutrientes es mejor por la mañana.\nB: Por eso el desayuno es importante.",
 exampleSrc:"A: The absorption of nutrients is better in the morning.\nB: That is why breakfast is important.",
 funFact:"From Latin absorptio. Both physical absorption (liquids) and figurative (being absorbed in work)."},

{type:"teach",trg:"la accesibilidad",src:"the accessibility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being easy to access.",
 example:"A: La accesibilidad del hospital ha mejorado mucho.\nB: Ahora hay rampas y ascensores en todas partes.",
 exampleSrc:"A: The hospital's accessibility has improved a lot.\nB: Now there are ramps and elevators everywhere.",
 funFact:"Spain's accessibility law (LIONDAU) requires all public buildings to be fully accessible."},

{type:"fb",s:"El {1} es fundamental para la elasticidad de la piel.",a:["colágeno"],opts:["colágeno","cadáver","analgésico","bañista"],hint:"A protein that keeps skin firm and youthful.",sSrc:"The {1} is fundamental for skin elasticity."},

{type:"mc",q:"'Echar una cana al aire' significa:",opts:["Perder pelo","Ir al médico","Divertirse y relajarse","Envejecer rápido"],ans:"Divertirse y relajarse",hint:"This idiom about a grey hair means letting loose for fun."},

{type:"match",pairs:[{trg:"asma",src:"asthma"},{trg:"artritis",src:"arthritis"},{trg:"autopsia",src:"autopsy"},{trg:"amígdala",src:"tonsil"},{trg:"colágeno",src:"collagen"}]},

{type:"fb",s:"Los {1} deben aplicarse protector solar en la playa.",a:["bañistas"],opts:["bañistas","cadáveres","analgésicos","autónomos"],hint:"People who swim or sunbathe at the beach.",sSrc:"The {1} should apply sunscreen at the beach."},

{type:"mc",q:"¿Qué revela la autopsia?",opts:["La causa de la muerte","El tipo de sangre","La edad del paciente","El historial médico"],ans:"La causa de la muerte",hint:"This medical examination is performed on a deceased person."}
]};

export default LESSON_5;
