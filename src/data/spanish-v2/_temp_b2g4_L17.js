// B2 Gap Batch 4 Lesson 17 - Media & Communication
const LESSON_17 = {id:"esv2_b2g4_l17",title:"Medios y comunicación",icon:"📰",xp:15,board:true,steps:[
{type:"intro",title:"Medios y comunicación",desc:"Master vocabulary for discussing media, journalism, art movements, and public communication.",goals:["Learn 18 media and communication terms","Discuss journalism and art confidently","Use formal language about public discourse"]},

{type:"teach",trg:"el artista",src:"the artist",pos:"noun",gender:"m",
 note:"Masculine/feminine noun. A person who creates art.\nFeminine: la artista. Same form both genders.",
 example:"A: La artista presentó su nueva exposición en el Reina Sofía.\nB: Sus obras exploran la identidad cultural.",
 exampleSrc:"A: The artist presented her new exhibition at the Reina Sofía.\nB: Her works explore cultural identity.",
 funFact:"Spain's Reina Sofía museum houses Picasso's Guernica, Spain's most famous work of art."},

{type:"teach",trg:"expresionista",src:"expressionist",pos:"adj",gender:null,
 note:"Adjective. Related to expressionism in art.\nNoun: el expresionismo.",
 example:"A: Este cuadro tiene un estilo claramente expresionista.\nB: Los colores transmiten una emoción muy intensa.",
 exampleSrc:"A: This painting has a clearly expressionist style.\nB: The colors convey a very intense emotion.",
 funFact:"Spanish expressionism is less famous than German, but artists like Solana captured Spain's dark realities."},

{type:"teach",trg:"el anagrama",src:"the anagram",pos:"noun",gender:"m",
 note:"Masculine noun. A word formed by rearranging letters.\nAlso: a company logo or monogram.",
 example:"A: 'Amor' es un anagrama de 'Roma'.\nB: Me encanta jugar con las palabras así.",
 exampleSrc:"A: 'Amor' is an anagram of 'Roma'.\nB: I love playing with words like that.",
 funFact:"In Spanish, 'anagrama' also means a publisher's logo. Editorial Anagrama is a famous Barcelona house."},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine noun. A newspaper published on the internet.\nSynonym: periódico digital.",
 example:"A: Cada vez más gente lee el diario digital en vez del papel.\nB: Es más rápido y más barato.",
 exampleSrc:"A: More and more people read the online newspaper instead of print.\nB: It is faster and cheaper.",
 funFact:"Spain's El País was one of the first European newspapers to launch a full diario digital in 1996."},

{type:"teach",trg:"el encendido",src:"the ignition / lighting up",pos:"noun",gender:"m",
 note:"Masculine noun. The act of turning on or igniting.\nFrom encender (to light, to turn on).",
 example:"A: El encendido de las luces de Navidad atrae a miles de personas.\nB: Es un evento muy esperado en Madrid.",
 exampleSrc:"A: The lighting of the Christmas lights attracts thousands of people.\nB: It is a highly anticipated event in Madrid.",
 funFact:"Madrid's Christmas light 'encendido' ceremony is a major annual event, covered by all national media."},

{type:"mc",q:"Un 'diario digital' es:",opts:["Un periódico que se lee en internet","Un cuaderno personal electrónico","Una red social para periodistas","Un programa de televisión sobre tecnología"],ans:"Un periódico que se lee en internet",hint:"Think about reading news articles on a screen instead of on paper."},

{type:"teach",trg:"la encerrona",src:"the trap / setup",pos:"noun",gender:"f",
 note:"Feminine noun. A situation where someone is cornered.\nFrom encerrar (to lock in). Also: bullfighting term.",
 example:"A: La entrevista fue una encerrona. Solo querían provocarme.\nB: Deberías haber rechazado la invitación.",
 exampleSrc:"A: The interview was a setup. They only wanted to provoke me.\nB: You should have refused the invitation.",
 funFact:"In bullfighting, 'encerrona' means a solo performance. In media, it means an ambush interview."},

{type:"teach",trg:"enmascarar",src:"to mask / to disguise",pos:"verb",gender:null,
 note:"Regular -ar verb. To hide the true nature of something.\nFrom máscara (mask).",
 example:"A: Los datos enmascaran la verdadera situación económica.\nB: Hay que analizar las cifras con más cuidado.",
 exampleSrc:"A: The data masks the true economic situation.\nB: We need to analyze the figures more carefully.",
 funFact:"'Desenmascarar' (to unmask) is the opposite and is very common in investigative journalism."},

{type:"teach",trg:"enmarcar",src:"to frame",pos:"verb",gender:null,
 note:"Regular -ar verb (c>qu before e). To put in a frame or to set in context.\nFrom marco (frame).",
 example:"A: Voy a enmarcar esta fotografía para colgarla en el salón.\nB: Quedaría bien con un marco de madera.",
 exampleSrc:"A: I am going to frame this photograph to hang it in the living room.\nB: It would look nice with a wooden frame.",
 funFact:"Figuratively, 'enmarcar en un contexto' means to place something within a broader context."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem bigger than it is.\nVerb: exagerar.",
 example:"A: Decir que es el peor gobierno de la historia es una exageración.\nB: Estoy de acuerdo, hay que ser más objetivo.",
 exampleSrc:"A: Saying it is the worst government in history is an exaggeration.\nB: I agree, we need to be more objective.",
 funFact:"Spaniards are famous for expressive exaggeration. 'Hace mil años que no te veo' is classic."},

{type:"fb",s:"La entrevista fue una {1}. Solo querían atacar al candidato.",a:["encerrona"],opts:["encerrona","exageración","artista","encendido"],hint:"A situation designed as a trap where someone is ambushed.",sSrc:"The interview was a {1}. They only wanted to attack the candidate."},

{type:"teach",trg:"espirar",src:"to exhale / to breathe out",pos:"verb",gender:null,
 note:"Regular -ar verb. To breathe out air.\nOpposite: inspirar. Not to be confused with expirar (to expire).",
 example:"A: En yoga, debes espirar lentamente por la boca.\nB: La respiración controlada reduce el estrés.",
 exampleSrc:"A: In yoga, you should exhale slowly through your mouth.\nB: Controlled breathing reduces stress.",
 funFact:"'Espirar' and 'expirar' sound similar but differ: espirar is breathing out, expirar is dying or ending."},

{type:"teach",trg:"la embestida",src:"the charge / attack",pos:"noun",gender:"f",
 note:"Feminine noun. A violent charge or rush forward.\nVerb: embestir. Common in bullfighting.",
 example:"A: La embestida del toro fue impresionante.\nB: El torero apenas pudo esquivarla.",
 exampleSrc:"A: The bull's charge was impressive.\nB: The bullfighter could barely dodge it.",
 funFact:"Figuratively, 'embestida' is used for aggressive attacks in debates: 'la embestida de la oposición'."},

{type:"teach",trg:"embestir",src:"to charge / to rush at",pos:"verb",gender:null,
 note:"Irregular verb (e>i): embisto.\nA violent physical charge. Also figurative.",
 example:"A: El toro embistió al torero con fuerza.\nB: El público contuvo la respiración.",
 exampleSrc:"A: The bull charged at the bullfighter with force.\nB: The audience held its breath.",
 funFact:"From Latin investire (to clothe). The sense of 'rushing at' comes from medieval cavalry charges."},

{type:"teach",trg:"la evocación",src:"the evocation / recollection",pos:"noun",gender:"f",
 note:"Feminine noun. The act of bringing memories to mind.\nVerb: evocar.",
 example:"A: Su música es una evocación de la España rural.\nB: Te transporta a los pueblos de la posguerra.",
 exampleSrc:"A: His music is an evocation of rural Spain.\nB: It transports you to post-war villages.",
 funFact:"'Poder evocador' (evocative power) is a key concept in Spanish literary criticism."},

{type:"mc",q:"'Enmascarar' los datos significa:",opts:["Ocultar la verdadera información","Publicar los datos abiertamente","Analizar estadísticas con cuidado","Compartir información con todos"],ans:"Ocultar la verdadera información",hint:"Think about hiding or disguising the true nature of something behind a mask."},

{type:"fb",s:"Voy a {1} esta fotografía con un marco de madera.",a:["enmarcar"],opts:["enmarcar","enmascarar","embestir","espirar"],hint:"To put a picture inside a decorative border for display.",sSrc:"I am going to {1} this photograph with a wooden frame."},

{type:"match",pairs:[{trg:"encerrona",src:"trap / setup"},{trg:"embestida",src:"charge / attack"},{trg:"anagrama",src:"anagram"},{trg:"evocación",src:"evocation"},{trg:"encendido",src:"ignition / lighting"}]}
]};

export default LESSON_17;
