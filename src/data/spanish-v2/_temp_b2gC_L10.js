// B2 Gap Batch C Lesson 10 - Media & Digital Communication
const LESSON_10 = {id:"esv2_b2gC_l10",title:"Medios y comunicación digital",icon:"📱",xp:15,board:true,steps:[
{type:"intro",title:"Medios y comunicación digital",desc:"Learn vocabulary for digital media, journalism, and modern communication technologies in Spanish.",goals:["Learn 12 words about media and digital communication","Discuss journalism and digital platforms","Use contemporary media vocabulary"]},

{type:"teach",trg:"el diario digital",src:"the online newspaper / digital daily",pos:"noun",gender:"m",
 note:"Masculine compound noun. A newspaper published online.\nDiario means both daily and diary.",
 example:"A: Leo el diario digital todas las mañanas en el móvil.\nB: Es más cómodo que comprar el periódico en papel.",
 exampleSrc:"A: I read the online newspaper every morning on my phone.\nB: It's more convenient than buying the paper version.",
 funFact:"Spain's first major diario digital was elmundo.es, launched in 1996."},

{type:"teach",trg:"la literatura popular",src:"the popular literature / folk literature",pos:"noun",gender:"f",
 note:"Feminine compound noun. Traditional stories and oral literature.\nAlso mass-market fiction.",
 example:"A: La literatura popular incluye cuentos, romances y leyendas.\nB: Muchos se transmitían oralmente de generación en generación.",
 exampleSrc:"A: Popular literature includes tales, ballads, and legends.\nB: Many were transmitted orally from generation to generation.",
 funFact:"Spain's romancero (ballad tradition) is one of Europe's richest oral literary traditions."},

{type:"teach",trg:"el listón",src:"the bar (standard) / ribbon / lath",pos:"noun",gender:"m",
 note:"Masculine noun. A standard to meet, or a strip of material.\nCommon in 'poner el listón alto'.",
 example:"A: Has puesto el listón muy alto con este proyecto.\nB: Gracias, espero que el siguiente sea aún mejor.",
 exampleSrc:"A: You've set the bar very high with this project.\nB: Thanks, I hope the next one is even better.",
 funFact:"The expression 'poner el listón alto' comes from high jump athletics, where the bar is literally raised."},

{type:"teach",trg:"la patente",src:"the patent",pos:"noun",gender:"f",
 note:"Feminine noun. A legal right to an invention.\nAlso adjective meaning obvious or clear.",
 example:"A: Han registrado la patente de su nuevo invento.\nB: Ahora nadie podrá copiarlo legalmente.",
 exampleSrc:"A: They've registered the patent for their new invention.\nB: Now nobody can legally copy it.",
 funFact:"As an adjective, 'patente' means obvious: 'Es patente que...' (It's patent/obvious that...)."},

{type:"mc",q:"¿Qué significa 'poner el listón alto'?",opts:["Establecer un nivel de calidad muy exigente","Colgar una cinta decorativa","Publicar un periódico digital","Registrar una patente"],ans:"Establecer un nivel de calidad muy exigente",hint:"This expression uses a high jump metaphor about setting demanding standards."},

{type:"teach",trg:"patentar",src:"to patent",pos:"verb",gender:null,
 note:"Regular -ar verb. To legally protect an invention.\nFrom patente (patent).",
 example:"A: Deberías patentar esa idea antes de presentarla.\nB: Tienes razón, voy a hablar con un abogado.",
 exampleSrc:"A: You should patent that idea before presenting it.\nB: You're right, I'm going to talk to a lawyer.",
 funFact:"Spain's patent office (OEPM) was founded in 1820. It processes over 50,000 applications per year."},

{type:"teach",trg:"el parpadeo",src:"the blink / flicker",pos:"noun",gender:"m",
 note:"Masculine noun. The action of blinking or flickering.\nFrom parpadear (to blink).",
 example:"A: El parpadeo de las luces indica un problema eléctrico.\nB: Será mejor llamar a un electricista.",
 exampleSrc:"A: The flickering of the lights indicates an electrical problem.\nB: We'd better call an electrician.",
 funFact:"Humans blink about 15 to 20 times per minute. In Spanish, 'en un parpadeo' means in the blink of an eye."},

{type:"teach",trg:"la ondulación",src:"the undulation / wave pattern",pos:"noun",gender:"f",
 note:"Feminine noun. A gentle wave-like motion or shape.\nFrom onda (wave).",
 example:"A: La ondulación del terreno dificulta la construcción.\nB: Habrá que nivelar antes de empezar.",
 exampleSrc:"A: The undulation of the terrain makes construction difficult.\nB: We'll have to level it before starting.",
 funFact:"In hairdressing, 'ondulación permanente' is a perm. The word captures any wave-like pattern."},

{type:"fb",s:"Leo el {1} todas las mañanas en mi teléfono.",a:["diario digital"],opts:["diario digital","listón","parpadeo","patente"],hint:"An online version of a newspaper that you can read on electronic devices.",sSrc:"I read the {1} every morning on my phone."},

{type:"teach",trg:"la percha",src:"the coat hanger / clothes rack",pos:"noun",gender:"f",
 note:"Feminine noun. A hanger for clothes or a rack.\nAlso slang for a nice figure.",
 example:"A: Cuelga el abrigo en la percha del recibidor.\nB: No hay sitio, están todas ocupadas.",
 exampleSrc:"A: Hang the coat on the hanger in the hallway.\nB: There's no room, they're all taken.",
 funFact:"In fashion slang, 'tener percha' means to look good in any clothes, to have a model-like frame."},

{type:"teach",trg:"perdurar",src:"to endure / to last",pos:"verb",gender:null,
 note:"Regular -ar verb. To continue existing over time.\nMore literary than 'durar'.",
 example:"A: Su legado perdurará durante generaciones.\nB: Ha dejado una huella imborrable en la cultura.",
 exampleSrc:"A: His legacy will endure for generations.\nB: He has left an indelible mark on culture.",
 funFact:"From Latin perdurare (to last thoroughly). The per- prefix intensifies the meaning of durar."},

{type:"teach",trg:"la pasividad",src:"the passivity / inactivity",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being inactive or accepting.\nFrom pasivo (passive).",
 example:"A: La pasividad del gobierno ante la crisis fue criticada.\nB: La oposición exigió medidas inmediatas.",
 exampleSrc:"A: The government's passivity in the face of the crisis was criticized.\nB: The opposition demanded immediate measures.",
 funFact:"In grammar, 'pasividad' relates to the passive voice. In psychology, it describes learned helplessness."},

{type:"mc",q:"¿Qué deberías hacer antes de presentar un invento nuevo?",opts:["Patentarlo","Publicarlo en un diario digital","Colgarlo en una percha","Esperar con pasividad"],ans:"Patentarlo",hint:"A legal process that protects your intellectual property from being copied."},

{type:"fb",s:"Su legado {1} durante muchas generaciones.",a:["perdurará"],opts:["perdurará","patentará","parpadeará","ondulará"],hint:"A verb meaning to last or endure far into the future.",sSrc:"His legacy will {1} for many generations."},

{type:"match",pairs:[{trg:"diario digital",src:"online newspaper"},{trg:"listón",src:"bar / standard"},{trg:"parpadeo",src:"blink"},{trg:"ondulación",src:"undulation"},{trg:"pasividad",src:"passivity"}]},

{type:"fb",s:"La {1} del gobierno fue duramente criticada por la oposición.",a:["pasividad"],opts:["pasividad","patente","ondulación","percha"],hint:"The quality of doing nothing when action is expected, a lack of initiative.",sSrc:"The government's {1} was harshly criticized by the opposition."}
]};

export default LESSON_10;
