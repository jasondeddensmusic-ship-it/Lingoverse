// Spanish B2 Gap Batch 3 - Lesson 12: Decision & Determination
// 15 teach cards + quizzes, max 30 steps

const LESSON_12 = {id:"esv2_b2g3_l12", title:"Decisión y determinación", icon:"🎯", xp:15, board:true, steps:[
  {type:"intro", title:"Decisión y determinación", desc:"Learn vocabulary for expressing resolve, making decisions, and discussing conviction. These abstract nouns are essential for B2-level argumentation.", goals:["Learn 15 decision-related abstract nouns","Express conviction and resolve","Discuss dilemmas and choices"]},

  {type:"teach", trg:"la determinación", src:"determination / resolution", pos:"noun", gender:"f", note:"Firm resolve to achieve something.\nCon determinación = with determination.", example:"A: Su determinación para acabar la carrera es admirable.\nB: Nada la ha detenido en estos cuatro años.", exampleSrc:"A: Her determination to finish her degree is admirable.\nB: Nothing has stopped her in these four years.", funFact:"From Latin determinare (to set limits). Determination means setting firm boundaries on what you will achieve."},

  {type:"teach", trg:"el dilema", src:"the dilemma", pos:"noun", gender:"m", note:"A difficult choice between two options.\nDilema ético = ethical dilemma.", example:"A: Me encuentro ante un dilema profesional.\nB: ¿Cuáles son las dos opciones?", exampleSrc:"A: I'm facing a professional dilemma.\nB: What are the two options?", funFact:"From Greek di- (two) + lemma (proposition). A true dilema has exactly two choices, both problematic."},

  {type:"teach", trg:"el convencimiento", src:"the conviction / firm belief", pos:"noun", gender:"m", note:"From convencer (to convince).\nTengo el convencimiento de que... = I'm convinced that...", example:"A: Tengo el convencimiento de que es la decisión correcta.\nB: Si estás tan seguro, adelante.", exampleSrc:"A: I have the conviction that it's the right decision.\nB: If you're that sure, go ahead.", funFact:"Convencimiento vs convicción: both mean conviction, but convencimiento emphasizes the process of becoming convinced."},

  {type:"teach", trg:"la consistencia", src:"the consistency", pos:"noun", gender:"f", note:"Steadfastness or physical texture.\nFalta de consistencia = lack of consistency.", example:"A: La consistencia de su trabajo es impresionante.\nB: Siempre entrega resultados de calidad.", exampleSrc:"A: The consistency of his work is impressive.\nB: He always delivers quality results.", funFact:"Like English, consistencia has both abstract (reliability) and physical (texture) meanings. Context decides which."},

  {type:"teach", trg:"la constatación", src:"the verification / confirmation", pos:"noun", gender:"f", note:"From constatar (to verify, to confirm).\nFormal: the act of confirming a fact.", example:"A: La constatación de los hechos llevó semanas.\nB: Había que verificar cada detalle.", exampleSrc:"A: The verification of the facts took weeks.\nB: Every detail had to be verified.", funFact:"Constatar comes from Latin constatare (to stand firm). When you constatar something, you make it stand as established fact."},

  {type:"teach", trg:"el desinterés", src:"the disinterest / lack of interest", pos:"noun", gender:"m", note:"Des- (negation) + interés.\nCan mean selflessness or apathy, depending on context.", example:"A: Me preocupa su desinterés por los estudios.\nB: Quizás necesite motivación diferente.", exampleSrc:"A: I'm worried about his lack of interest in studies.\nB: Maybe he needs different motivation.", funFact:"Desinterés has a positive meaning too: selflessness, acting without personal gain. Actuar con desinterés = to act selflessly."},

  {type:"mc", q:"¿Qué es un dilema?", opts:["Una decisión difícil entre dos opciones","Un problema sin solución","Una discusión entre amigos","Un tipo de examen"], ans:"Una decisión difícil entre dos opciones", hint:"The Greek prefix di- means 'two'. This is about choosing between two difficult paths."},

  {type:"teach", trg:"la coincidencia", src:"the coincidence", pos:"noun", gender:"f", note:"When things happen at the same time by chance.\nAlso: agreement (coincidencia de opiniones).", example:"A: ¡Qué coincidencia encontrarte aquí!\nB: ¡Increíble! Yo tampoco esperaba verte.", exampleSrc:"A: What a coincidence running into you here!\nB: Incredible! I didn't expect to see you either.", funFact:"Coincidir means both 'to coincide' and 'to agree'. Coincidimos en que... = We agree that... Two meanings from one verb."},

  {type:"teach", trg:"la detonación", src:"the detonation / trigger", pos:"noun", gender:"f", note:"An explosion, or figuratively, the trigger of events.\nFrom detonar (to detonate).", example:"A: La detonación se oyó a kilómetros de distancia.\nB: Por suerte, nadie resultó herido.", exampleSrc:"A: The detonation was heard kilometres away.\nB: Fortunately, nobody was injured.", funFact:"From Latin detonare (to thunder down). The explosive meaning came later, connecting thunder with blasts."},

  {type:"teach", trg:"el descontrol", src:"the lack of control / chaos", pos:"noun", gender:"m", note:"Des- (negation) + control.\nComplete disorder or inability to manage.", example:"A: La fiesta acabó en un descontrol total.\nB: Alguien debería haber puesto límites.", exampleSrc:"A: The party ended in total chaos.\nB: Someone should have set limits.", funFact:"A very Spanish word with no direct English equivalent. Descontrol captures that specific feeling of everything spiralling out of control."},

  {type:"teach", trg:"el despropósito", src:"the absurdity / nonsense", pos:"noun", gender:"m", note:"Des- (negation) + propósito (purpose).\nSomething that makes no sense or is completely inappropriate.", example:"A: La reunión fue un despropósito tras otro.\nB: Nadie sabía de qué estábamos hablando.", exampleSrc:"A: The meeting was one absurdity after another.\nB: Nobody knew what we were talking about.", funFact:"Literally 'without purpose'. Un despropósito is stronger than un error: it implies complete pointlessness."},

  {type:"fb", s:"Tengo el {1} de que estamos tomando la decisión correcta.", a:["convencimiento"], opts:["convencimiento","desinterés","descontrol","despropósito"], hint:"A firm inner belief that something is right or true.", sSrc:"I have the {1} that we are making the right decision."},

  {type:"teach", trg:"el devenir", src:"the course of events / becoming", pos:"noun", gender:"m", note:"From the verb devenir (to become).\nEl devenir histórico = the course of history.", example:"A: El devenir de los acontecimientos nos sorprendió a todos.\nB: Nadie pensaba que iba a pasar esto.", exampleSrc:"A: The course of events surprised us all.\nB: Nobody thought this was going to happen.", funFact:"A philosophical term. Heraclitus' concept of eternal change is expressed in Spanish as el devenir: everything is always becoming."},

  {type:"teach", trg:"el dinamismo", src:"dynamism / energy", pos:"noun", gender:"m", note:"Active energy and vitality.\nUna ciudad con mucho dinamismo = a very dynamic city.", example:"A: El dinamismo de Barcelona es contagioso.\nB: Siempre hay algo interesante que hacer.", exampleSrc:"A: The dynamism of Barcelona is contagious.\nB: There's always something interesting to do.", funFact:"From Greek dynamis (power). Dynamic, dynasty, and dynamite all share this root of power and energy."},

  {type:"mc", q:"'Descontrol' describe una situación de...", opts:["caos y falta de orden","mucha organización","tranquilidad absoluta","aburrimiento total"], ans:"caos y falta de orden", hint:"The prefix des- negates control. What happens when control is removed?"},

  {type:"match", pairs:[{trg:"determinación", src:"determination"},{trg:"dilema", src:"dilemma"},{trg:"coincidencia", src:"coincidence"},{trg:"despropósito", src:"absurdity"},{trg:"dinamismo", src:"dynamism"}]},

  {type:"fb", s:"La {1} de su carácter le ha permitido superar todos los obstáculos.", a:["determinación"], opts:["determinación","coincidencia","detonación","dispersión"], hint:"The firm inner resolve that drives someone to overcome all obstacles.", sSrc:"The {1} of her character has allowed her to overcome all obstacles."},

  {type:"mc", q:"¿Qué puede significar 'desinterés' en sentido positivo?", opts:["Actuar sin buscar beneficio propio","No prestar atención a nada","Ser perezoso en el trabajo","Rechazar toda opinión"], ans:"Actuar sin buscar beneficio propio", hint:"In its positive sense, this word describes selfless behaviour without expecting personal gain."},

  {type:"fb", s:"Esa decisión fue un {1} total, no tenía ningún sentido.", a:["despropósito"], opts:["despropósito","convencimiento","dinamismo","devenir"], hint:"Something completely absurd and pointless that serves no logical purpose.", sSrc:"That decision was a total {1}, it made no sense at all."}
]};

export default LESSON_12;
