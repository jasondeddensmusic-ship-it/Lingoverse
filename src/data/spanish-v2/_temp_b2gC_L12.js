// B2 Gap Batch C Lesson 12 - Environmental Science
const LESSON_12 = {id:"esv2_b2gC_l12",title:"Ciencia medioambiental",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia medioambiental",desc:"Learn vocabulary for environmental science, ecology, and the natural landscape of Spain.",goals:["Learn 12 words about environmental science","Discuss ecological challenges and conservation","Use environmental vocabulary with precision"]},

{type:"teach",trg:"el pastizal",src:"the grassland / pasture",pos:"noun",gender:"m",
 note:"Masculine noun. An area of land covered with grass.\nFrom pasto (pasture).",
 example:"A: Los pastizales de la meseta son ideales para el ganado.\nB: Producen la mejor carne de cordero de España.",
 exampleSrc:"A: The grasslands of the plateau are ideal for livestock.\nB: They produce the best lamb in Spain.",
 funFact:"Spain's meseta (central plateau) has vast pastizales that have supported livestock for thousands of years."},

{type:"teach",trg:"el pasto",src:"the pasture / grass / fodder",pos:"noun",gender:"m",
 note:"Masculine noun. Grass for animals to eat.\nAlso the act of grazing.",
 example:"A: Las vacas buscan pasto fresco en las laderas.\nB: En verano hay que llevarlas a zonas más altas.",
 exampleSrc:"A: The cows look for fresh grass on the hillsides.\nB: In summer they have to be taken to higher areas.",
 funFact:"In Latin America, 'pasto' also means lawn or grass in general, while in Spain 'césped' is more common."},

{type:"teach",trg:"el leño",src:"the log / firewood",pos:"noun",gender:"m",
 note:"Masculine noun. A piece of wood for burning.\nFrom Latin lignum (wood).",
 example:"A: Pon otro leño en la chimenea, que se apaga el fuego.\nB: Es el último, mañana tenemos que comprar más.",
 exampleSrc:"A: Put another log on the fireplace, the fire is going out.\nB: It's the last one, we have to buy more tomorrow.",
 funFact:"The expression 'dormir como un leño' (to sleep like a log) exists in Spanish just as in English."},

{type:"teach",trg:"la cobra",src:"the cobra",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous hooded snake.\nFrom Portuguese cobra (snake).",
 example:"A: La cobra real es una de las serpientes más peligrosas.\nB: Su veneno puede ser mortal si no se trata a tiempo.",
 exampleSrc:"A: The king cobra is one of the most dangerous snakes.\nB: Its venom can be deadly if not treated in time.",
 funFact:"The word cobra comes from Portuguese cobra de capello (hooded snake), from Latin colubra."},

{type:"mc",q:"¿Dónde buscan las vacas hierba fresca en verano?",opts:["En las zonas más altas de las montañas","En los pastizales de la costa","En los leños del bosque","En las cobras del desierto"],ans:"En las zonas más altas de las montañas",hint:"When lowland grass dries out in summer heat, livestock must be moved to cooler elevations."},

{type:"teach",trg:"la papelera",src:"the wastepaper basket / paper mill",pos:"noun",gender:"f",
 note:"Feminine noun. A container for waste paper.\nAlso a paper manufacturing company.",
 example:"A: Tira los papeles a la papelera, no al suelo.\nB: Deberíamos tener una para reciclaje también.",
 exampleSrc:"A: Throw the papers in the wastepaper basket, not on the floor.\nB: We should have one for recycling too.",
 funFact:"In computing, the papelera (recycle bin) icon on Spanish computers matches the physical object perfectly."},

{type:"teach",trg:"el patinete",src:"the scooter / kick scooter",pos:"noun",gender:"m",
 note:"Masculine noun. A small vehicle propelled by pushing.\nDiminutive of patín (skate).",
 example:"A: Los patinetes eléctricos se han convertido en un problema urbano.\nB: No hay suficientes carriles para ellos.",
 exampleSrc:"A: Electric scooters have become an urban problem.\nB: There aren't enough lanes for them.",
 funFact:"Madrid, Barcelona, and Valencia have all introduced regulations for patinetes eléctricos since 2019."},

{type:"teach",trg:"el bolillo",src:"the bobbin / bread roll",pos:"noun",gender:"m",
 note:"Masculine noun. A small spool for making lace.\nAlso a type of bread in Mexico.",
 example:"A: Mi abuela hacía encaje de bolillos con una destreza increíble.\nB: Es un arte tradicional que está desapareciendo.",
 exampleSrc:"A: My grandmother made bobbin lace with incredible skill.\nB: It's a traditional art that is disappearing.",
 funFact:"The expression 'no es encaje de bolillos' means something is not as difficult as it seems."},

{type:"fb",s:"Los {1} de la meseta central alimentan a miles de ovejas.",a:["pastizales"],opts:["pastizales","pastos","leños","patinetes"],hint:"Large areas of grassland used for grazing livestock.",sSrc:"The {1} of the central plateau feed thousands of sheep."},

{type:"teach",trg:"el pellejo",src:"the skin / hide / wineskin",pos:"noun",gender:"m",
 note:"Masculine noun. Animal skin or a leather wine container.\nAlso slang: your own skin.",
 example:"A: Arriesgó el pellejo para salvar a su compañero.\nB: Es un acto de valentía que todos admiramos.",
 exampleSrc:"A: He risked his skin to save his colleague.\nB: It's an act of bravery that we all admire.",
 funFact:"'Jugarse el pellejo' (to risk your skin) and 'salvar el pellejo' (to save your skin) are very common idioms."},

{type:"teach",trg:"la pega",src:"the snag / drawback / sticky substance",pos:"noun",gender:"f",
 note:"Feminine noun. A problem or obstacle.\nFrom pegar (to stick).",
 example:"A: El plan es bueno, pero tiene una pega.\nB: ¿Cuál? Estoy dispuesto a buscar soluciones.",
 exampleSrc:"A: The plan is good, but it has a snag.\nB: Which one? I'm willing to look for solutions.",
 funFact:"'Poner pegas' means to find fault or make objections. Very common in everyday Spanish conversation."},

{type:"teach",trg:"el pestillo",src:"the bolt / latch",pos:"noun",gender:"m",
 note:"Masculine noun. A sliding bar to lock a door.\nDiminutive of peste (originally a bar).",
 example:"A: Echa el pestillo de la puerta antes de acostarte.\nB: Ya lo he echado, no te preocupes.",
 exampleSrc:"A: Slide the bolt on the door before going to bed.\nB: I've already done it, don't worry.",
 funFact:"From Latin pessulus (bolt). Despite sounding like 'peste', the words have completely different origins."},

{type:"mc",q:"¿Qué medio de transporte urbano se ha regulado recientemente en Madrid?",opts:["El pestillo","El patinete eléctrico","La cobra","El leño"],ans:"El patinete eléctrico",hint:"A small electric vehicle that riders stand on, which has become common on city sidewalks."},

{type:"fb",s:"El plan es bueno, pero tiene una {1} importante.",a:["pega"],opts:["pega","papelera","pellejo","pestillo"],hint:"A problem, drawback, or obstacle that complicates an otherwise good plan.",sSrc:"The plan is good, but it has an important {1}."},

{type:"match",pairs:[{trg:"pastizal",src:"grassland"},{trg:"leño",src:"log"},{trg:"papelera",src:"wastepaper basket"},{trg:"pellejo",src:"skin / hide"},{trg:"pestillo",src:"bolt / latch"}]}
]};

export default LESSON_12;
