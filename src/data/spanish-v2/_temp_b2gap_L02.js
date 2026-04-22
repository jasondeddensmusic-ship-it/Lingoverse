// B2 Gap Lesson 02 - Character & Appearance
const LESSON_2 = {id:"esv2_b2gap_l2",title:"Carácter y apariencia",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Carácter y apariencia",desc:"Describe people's character traits and physical appearance with precision.",goals:["Learn 20 adjectives and nouns for personality and looks","Describe people in detail","Use expressive vocabulary naturally"]},

{type:"teach",trg:"cabezón",src:"stubborn / big-headed",pos:"adj",gender:null,
 note:"Colloquial adjective. Literally 'big-headed'.\nFeminine: cabezona.",
 example:"A: Tu hermano es muy cabezón.\nB: Sí, nunca cambia de opinión.",
 exampleSrc:"A: Your brother is very stubborn.\nB: Yes, he never changes his mind.",
 funFact:"From cabeza (head) + augmentative -ón. The literal meaning is still used for large heads."},

{type:"teach",trg:"apático",src:"apathetic",pos:"adj",gender:null,
 note:"Adjective. Showing no interest or enthusiasm.\nFeminine: apática.",
 example:"A: Parece muy apático últimamente.\nB: Creo que necesita unas vacaciones.",
 exampleSrc:"A: He seems very apathetic lately.\nB: I think he needs a vacation.",
 funFact:"From Greek apatheia (without feeling). Used in both everyday and clinical contexts."},

{type:"teach",trg:"asiduo",src:"regular / assiduous",pos:"adj",gender:null,
 note:"Adjective. Someone who frequents a place regularly.\nFeminine: asidua.",
 example:"A: Es un cliente asiduo del restaurante.\nB: Viene todos los viernes sin falta.",
 exampleSrc:"A: He is a regular customer at the restaurant.\nB: He comes every Friday without fail.",
 funFact:"From Latin assiduus (sitting down to). An assiduous person is always 'seated at' their task."},

{type:"teach",trg:"aparatoso",src:"spectacular / dramatic",pos:"adj",gender:null,
 note:"Adjective. Something showy, dramatic, or impressive.\nFeminine: aparatosa.",
 example:"A: Tuvo un accidente muy aparatoso.\nB: Por suerte, solo fueron heridas leves.",
 exampleSrc:"A: He had a very dramatic accident.\nB: Luckily, there were only minor injuries.",
 funFact:"From aparato (apparatus). Something 'aparatoso' puts on a big show, like elaborate machinery."},

{type:"teach",trg:"aguileño",src:"aquiline / eagle-like",pos:"adj",gender:null,
 note:"Adjective. Having sharp, eagle-like features.\nUsed mostly for noses and faces.",
 example:"A: Tiene un perfil aguileño muy marcado.\nB: Sí, se parece a su abuelo.",
 exampleSrc:"A: He has a very pronounced aquiline profile.\nB: Yes, he looks like his grandfather.",
 funFact:"From águila (eagle). A 'nariz aguileña' is a hooked nose, like an eagle's beak."},

{type:"mc",q:"Una persona que nunca cambia de opinión es:",opts:["cabezona","asidua","aparatosa","apática"],ans:"cabezona",hint:"Think of someone with a figuratively 'big head' about their views."},

{type:"teach",trg:"canoso",src:"grey-haired",pos:"adj",gender:null,
 note:"Adjective. Having grey or white hair.\nFeminine: canosa.",
 example:"A: Mi padre se ha quedado canoso muy joven.\nB: En mi familia también pasa.",
 exampleSrc:"A: My father went grey-haired very young.\nB: In my family that happens too.",
 funFact:"From cana (grey hair). 'Echar una cana al aire' means to let your hair down, have fun."},

{type:"teach",trg:"cejijunto",src:"with a unibrow / frowning",pos:"adj",gender:null,
 note:"Adjective. Having eyebrows that meet, or looking angry.\nFeminine: cejijunta.",
 example:"A: El profesor siempre está cejijunto.\nB: Es su cara, en realidad es muy simpático.",
 exampleSrc:"A: The teacher always looks frowning.\nB: That is just his face, he is actually very nice.",
 funFact:"From ceja (eyebrow) + junto (together). A wonderfully descriptive compound adjective."},

{type:"teach",trg:"chillón",src:"loud / garish",pos:"adj",gender:null,
 note:"Adjective. For colors: garish. For sounds or people: shrill.\nFeminine: chillona.",
 example:"A: Ese color rosa es demasiado chillón.\nB: A mí me gusta, es alegre.",
 exampleSrc:"A: That pink is too garish.\nB: I like it, it is cheerful.",
 funFact:"From chillar (to shriek). A color that 'screams' at you is chillón."},

{type:"teach",trg:"amarillento",src:"yellowish",pos:"adj",gender:null,
 note:"Adjective. Having a yellow tinge.\nFeminine: amarillenta.",
 example:"A: Las páginas del libro están amarillentas.\nB: Normal, tiene más de cien años.",
 exampleSrc:"A: The pages of the book are yellowish.\nB: Of course, it is over a hundred years old.",
 funFact:"The suffix -ento creates 'tending toward' adjectives: amarillo + -ento = yellowish."},

{type:"fb",s:"Su nariz {1} le daba un aspecto distinguido.",a:["aguileña"],opts:["aguileña","cabezona","canosa","chillona"],hint:"Eagle-like, describing a hooked nose shape.",sSrc:"His/her {1} nose gave him/her a distinguished look."},

{type:"teach",trg:"blanquecino",src:"whitish / off-white",pos:"adj",gender:null,
 note:"Adjective. Tending toward white.\nFeminine: blanquecina.",
 example:"A: El cielo tiene un tono blanquecino hoy.\nB: Parece que va a nevar.",
 exampleSrc:"A: The sky has a whitish tone today.\nB: It looks like it is going to snow.",
 funFact:"The suffix -ecino is rarer than -ento for color approximations, making this word distinctive."},

{type:"teach",trg:"carmesí",src:"crimson",pos:"adj",gender:null,
 note:"Adjective. A deep red color. Invariable in form.",
 example:"A: Las cortinas carmesí dan elegancia al salón.\nB: Son preciosas, parecen de terciopelo.",
 exampleSrc:"A: The crimson curtains add elegance to the room.\nB: They are beautiful, they look like velvet.",
 funFact:"From Arabic qirmizi, from the kermes insect used to make red dye. A word with ancient roots."},

{type:"teach",trg:"alegórico",src:"allegorical",pos:"adj",gender:null,
 note:"Adjective. Using symbolism to represent ideas.\nFeminine: alegórica.",
 example:"A: La carroza alegórica representaba la libertad.\nB: Fue la más aplaudida del desfile.",
 exampleSrc:"A: The allegorical float represented freedom.\nB: It was the most applauded in the parade.",
 funFact:"Spanish carnival parades feature elaborate 'carrozas alegóricas' representing social themes."},

{type:"teach",trg:"adecuado",src:"adequate / suitable",pos:"adj",gender:null,
 note:"Adjective. Appropriate for a situation.\nFeminine: adecuada.",
 example:"A: ¿Es adecuado llevar vaqueros a la entrevista?\nB: No, mejor algo más formal.",
 exampleSrc:"A: Is it suitable to wear jeans to the interview?\nB: No, something more formal would be better.",
 funFact:"From Latin adaequare (to make equal to). Something adequate 'measures up' to the need."},

{type:"mc",q:"Un color rosa muy fuerte y llamativo es:",opts:["carmesí","chillón","amarillento","blanquecino"],ans:"chillón",hint:"Think of a color so bright it seems to 'shriek' at you."},

{type:"teach",trg:"aceptable",src:"acceptable",pos:"adj",gender:null,
 note:"Adjective. Good enough to be accepted. Invariable for gender.",
 example:"A: ¿Tu nota del examen fue aceptable?\nB: Un siete, no está mal.",
 exampleSrc:"A: Was your exam grade acceptable?\nB: A seven, not bad.",
 funFact:"From Latin acceptabilis. In Spain, grades go from 0-10, with 5 being the pass mark."},

{type:"teach",trg:"accesible",src:"accessible",pos:"adj",gender:null,
 note:"Adjective. Easy to reach or approach. Invariable for gender.",
 example:"A: ¿El museo es accesible para sillas de ruedas?\nB: Sí, tiene rampas en todas las entradas.",
 exampleSrc:"A: Is the museum accessible for wheelchairs?\nB: Yes, it has ramps at all entrances.",
 funFact:"Spain has strong accessibility laws. The ONCE foundation for the blind is a major social force."},

{type:"teach",trg:"adjunto",src:"attached / enclosed",pos:"adj",gender:null,
 note:"Adjective. Attached or accompanying.\nAlso used as noun: el adjunto (the attachment).",
 example:"A: Te envío el documento adjunto por correo.\nB: Perfecto, lo reviso esta tarde.",
 exampleSrc:"A: I am sending you the attached document by email.\nB: Perfect, I will review it this afternoon.",
 funFact:"In emails, 'adjunto' is the standard word for 'attachment', unlike the English loanword."},

{type:"teach",trg:"ajustable",src:"adjustable",pos:"adj",gender:null,
 note:"Adjective. Able to be adjusted. Invariable for gender.",
 example:"A: Esta silla tiene altura ajustable.\nB: Qué bien, la necesito más alta.",
 exampleSrc:"A: This chair has adjustable height.\nB: Great, I need it higher.",
 funFact:"From ajustar (to adjust), from Old French ajuster. The -able suffix works like English '-able'."},

{type:"teach",trg:"alcanzable",src:"achievable / reachable",pos:"adj",gender:null,
 note:"Adjective. Within reach or possible to achieve.",
 example:"A: ¿Crees que la meta es alcanzable?\nB: Sí, con esfuerzo y dedicación.",
 exampleSrc:"A: Do you think the goal is achievable?\nB: Yes, with effort and dedication.",
 funFact:"From alcanzar (to reach). In Arabic, al-qantara means bridge, hinting at reaching across."},

{type:"fb",s:"Esa ropa no es {1} para una boda formal.",a:["adecuada"],opts:["adecuada","chillona","canosa","cabezona"],hint:"Not suitable or appropriate for the occasion.",sSrc:"Those clothes are not {1} for a formal wedding."},

{type:"mc",q:"Las páginas viejas de un libro suelen estar:",opts:["carmesíes","blanquecinas","amarillentas","aguileñas"],ans:"amarillentas",hint:"Old paper develops a yellow tinge over time."},

{type:"match",pairs:[{trg:"cabezón",src:"stubborn"},{trg:"canoso",src:"grey-haired"},{trg:"chillón",src:"garish / loud"},{trg:"carmesí",src:"crimson"},{trg:"accesible",src:"accessible"}]},

{type:"fb",s:"El objetivo es difícil pero {1} si trabajamos juntos.",a:["alcanzable"],opts:["alcanzable","ajustable","aceptable","accesible"],hint:"Something that can be reached or achieved with effort.",sSrc:"The goal is difficult but {1} if we work together."},

{type:"mc",q:"Un profesor que siempre parece enfadado tiene cara de:",opts:["canoso","apático","cabezón","cejijunto"],ans:"cejijunto",hint:"This word describes eyebrows that meet or a frowning expression."}
]};

export default LESSON_2;
