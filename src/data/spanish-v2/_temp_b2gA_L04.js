// Lesson 4 — Emociones y psicología
const LESSON_4 = {id:"esv2_b2gA_l4", title:"Emociones y psicología", icon:"🧠", xp:15, board:true, steps:[
{type:"intro", title:"Emociones y psicología", desc:"Express complex emotions, personality traits, and psychological states with nuance.", goals:["Learn 15 emotion and psychology words","Describe inner states precisely","Discuss character with sophistication"]},

{type:"teach", trg:"la irritabilidad", src:"irritability", pos:"noun", gender:"f",
 note:"A tendency to get annoyed easily.\nFrom irritar (to irritate).",
 example:"A: Su irritabilidad ha aumentado con el estrés del trabajo.\nB: Debería tomarse unos días libres.",
 exampleSrc:"A: Her irritability has increased with work stress.\nB: She should take a few days off.",
 funFact:"From Latin irritare (to provoke). Same root as English 'irritate'."},

{type:"teach", trg:"la irritación", src:"irritation", pos:"noun", gender:"f",
 note:"The feeling of being annoyed. Also: skin inflammation.\nDifferent from irritabilidad (tendency).",
 example:"A: No pudo ocultar su irritación durante la reunión.\nB: Es que el proyecto llevaba meses de retraso.",
 exampleSrc:"A: She couldn't hide her irritation during the meeting.\nB: The project had been delayed for months.",
 funFact:"Irritabilidad is the trait; irritación is the momentary feeling or physical reaction."},

{type:"teach", trg:"la impulsividad", src:"impulsivity", pos:"noun", gender:"f",
 note:"Acting on sudden urges without thinking.\nFrom impulso (impulse).",
 example:"A: La impulsividad puede llevar a malas decisiones.\nB: Es mejor reflexionar antes de actuar.",
 exampleSrc:"A: Impulsivity can lead to bad decisions.\nB: It's better to reflect before acting.",
 funFact:"Psychologists distinguish between functional impulsivity (quick decisions) and dysfunctional."},

{type:"teach", trg:"la extrañeza", src:"strangeness / surprise", pos:"noun", gender:"f",
 note:"The feeling of finding something odd or unexpected.\nFrom extrano (strange).",
 example:"A: Miró con extrañeza el mensaje que había recibido.\nB: No esperaba esa respuesta de su jefe.",
 exampleSrc:"A: She looked with surprise at the message she'd received.\nB: She didn't expect that response from her boss.",
 funFact:"'Causar extrañeza' (to cause surprise) is very common in formal Spanish."},

{type:"teach", trg:"mustio", src:"gloomy / wilted / listless", pos:"adj", gender:null,
 note:"Describes a person looking sad and lifeless, or a wilted plant.\nVery expressive word.",
 example:"A: ¿Qué te pasa? Te veo muy mustio hoy.\nB: Es que apenas he dormido esta semana.",
 exampleSrc:"A: What's wrong? You look really listless today.\nB: I've barely slept this week.",
 funFact:"Originally only for plants. Applied to people since the 17th century. Very Peninsular."},

{type:"mc", q:"¿Cuál es la diferencia entre irritabilidad e irritación?", opts:["La irritabilidad es una tendencia, la irritación es un momento concreto","Son sinónimos exactos","La irritación es más grave","La irritabilidad es una emoción positiva"], ans:"La irritabilidad es una tendencia, la irritación es un momento concreto",
 hint:"One is a personality trait, the other is a temporary state or feeling."},

{type:"fb", s:"Su {1} le llevó a tomar una decisión que luego lamentó.", a:["impulsividad"], opts:["impulsividad","irritabilidad","extrañeza","irritación"],
 hint:"This noun describes acting on sudden urges without thinking first.",
 sSrc:"Her {1} led her to make a decision she later regretted."},

{type:"teach", trg:"el murmullo", src:"the murmur / whisper", pos:"noun", gender:"m",
 note:"A soft, low sound of voices.\nOnomatopoeia: the word sounds like what it means.",
 example:"A: Se oía un murmullo en la sala de espera.\nB: La gente comentaba nerviosa los resultados.",
 exampleSrc:"A: A murmur could be heard in the waiting room.\nB: People were nervously discussing the results.",
 funFact:"One of Spanish's most musical words. The double 'murm' mimics the sound perfectly."},

{type:"teach", trg:"la nobleza", src:"nobility / nobleness", pos:"noun", gender:"f",
 note:"Aristocratic class, or the quality of being noble-hearted.\nFrom noble.",
 example:"A: Su nobleza de carácter le ganó el respeto de todos.\nB: Es una persona íntegra y generosa.",
 exampleSrc:"A: His nobleness of character earned him everyone's respect.\nB: He's a person of integrity and generosity.",
 funFact:"Spain still has an active nobility. The title of Duke of Alba dates to 1472."},

{type:"teach", trg:"la fineza", src:"refinement / delicacy", pos:"noun", gender:"f",
 note:"Elegance and delicacy in manners or quality.\nFrom fino (fine, refined).",
 example:"A: Habla con una fineza extraordinaria.\nB: Se nota que ha recibido una buena educación.",
 exampleSrc:"A: She speaks with extraordinary refinement.\nB: You can tell she's had a good education.",
 funFact:"In Mexico, 'hacer una fineza' means to do someone a kind favor."},

{type:"mc", q:"Si alguien está 'mustio', ¿cómo se siente?", opts:["Triste y sin energía","Muy enfadado","Extremadamente feliz","Nervioso y agitado"], ans:"Triste y sin energía",
 hint:"Picture a wilted flower. Now apply that image to a person's mood."},

{type:"fb", s:"La {1} del mensaje le dejó sin saber qué responder.", a:["extrañeza"], opts:["extrañeza","fineza","nobleza","impulsividad"],
 hint:"This noun describes the feeling of finding something odd or unexpected.",
 sSrc:"The {1} of the message left her not knowing what to respond."},

{type:"teach", trg:"la incompetencia", src:"incompetence", pos:"noun", gender:"f",
 note:"Lack of ability or skill to do a job.\nIn- (not) + competencia (competence).",
 example:"A: La incompetencia del director ha causado graves problemas.\nB: Deberían buscar a alguien más capacitado.",
 exampleSrc:"A: The director's incompetence has caused serious problems.\nB: They should look for someone more qualified.",
 funFact:"In legal Spanish, 'incompetencia' also means a court lacks jurisdiction."},

{type:"teach", trg:"la inconveniencia", src:"inconvenience / inappropriateness", pos:"noun", gender:"f",
 note:"Something disadvantageous or inappropriate.\nStronger than simple 'molestia'.",
 example:"A: Señaló la inconveniencia de celebrar la reunión tan tarde.\nB: Tiene razón, a esa hora nadie rinde bien.",
 exampleSrc:"A: She pointed out the inconvenience of holding the meeting so late.\nB: She's right, nobody performs well at that hour.",
 funFact:"In diplomatic Spanish, 'inconveniencia' is the polite way to say something is a bad idea."},

{type:"teach", trg:"la invalidez", src:"disability / invalidity", pos:"noun", gender:"f",
 note:"State of being unable to work due to illness or injury.\nAlso: legal invalidity.",
 example:"A: Recibe una pensión por invalidez permanente.\nB: El accidente le impide trabajar.",
 exampleSrc:"A: He receives a permanent disability pension.\nB: The accident prevents him from working.",
 funFact:"Spain's disability system distinguishes between 'invalidez parcial' and 'total'."},

{type:"match", pairs:[
 {trg:"mustio", src:"gloomy / listless"},
 {trg:"el murmullo", src:"murmur"},
 {trg:"la nobleza", src:"nobility"},
 {trg:"la fineza", src:"refinement"},
 {trg:"la incompetencia", src:"incompetence"}
]},

{type:"fb", s:"En la sala se oía un {1} nervioso antes del anuncio.", a:["murmullo"], opts:["murmullo","nobleza","fineza","extrañeza"],
 hint:"This onomatopoeic noun describes a soft, low sound of many voices.",
 sSrc:"In the room a nervous {1} could be heard before the announcement."},

{type:"mc", q:"¿Qué significa 'la invalidez permanente'?", opts:["Incapacidad laboral definitiva por enfermedad o lesión","Una multa de tráfico grave","Un tipo de seguro de vida","Una condición temporal"], ans:"Incapacidad laboral definitiva por enfermedad o lesión",
 hint:"This term combines permanent inability with work capacity."},

{type:"fb", s:"Su {1} de carácter le distingue de los demás políticos.", a:["nobleza"], opts:["nobleza","irritabilidad","impulsividad","incompetencia"],
 hint:"This noun describes the quality of being noble-hearted and honorable.",
 sSrc:"His {1} of character distinguishes him from other politicians."},

{type:"drag_fill", s:"La {1} del gesto revelaba una gran {2}.", blanks:{"1":"fineza","2":"nobleza"}, pool:["fineza","nobleza","irritación","extrañeza"],
 hint:"The elegance of the gesture showed great noble-heartedness."},

{type:"match", pairs:[
 {trg:"la irritabilidad", src:"irritability"},
 {trg:"la impulsividad", src:"impulsivity"},
 {trg:"la extrañeza", src:"strangeness"},
 {trg:"la inconveniencia", src:"inconvenience"},
 {trg:"la invalidez", src:"disability"}
]}
]};
export default LESSON_4;
