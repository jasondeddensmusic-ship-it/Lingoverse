// Spanish B2 Gap Batch 3 - Lesson 11: Communication & Media
// 15 teach cards + quizzes, max 30 steps

const LESSON_11 = {id:"esv2_b2g3_l11", title:"Comunicación y medios", icon:"📡", xp:15, board:true, steps:[
  {type:"intro", title:"Comunicación y medios", desc:"Master vocabulary for discussing communication, media, and how information spreads. From press to presentations, talk about the information age.", goals:["Learn 15 media and communication terms","Discuss news and information","Talk about presentations and correspondence"]},

  {type:"teach", trg:"la difusión", src:"the dissemination / broadcasting", pos:"noun", gender:"f", note:"From difundir (to spread, to broadcast).\nMedios de difusión = media outlets.", example:"A: La difusión de la noticia fue inmediata en las redes.\nB: En menos de una hora ya era tendencia.", exampleSrc:"A: The dissemination of the news was immediate on social media.\nB: In less than an hour it was already trending.", funFact:"From Latin diffundere (to pour out). The same root gives English 'diffuse'. Information pours out to reach everyone."},

  {type:"teach", trg:"la diapositiva", src:"the slide (presentation)", pos:"noun", gender:"f", note:"A single slide in a presentation.\nAlso: old photography slides (transparencies).", example:"A: La presentación tiene treinta diapositivas.\nB: Son demasiadas, intenta reducirla a veinte.", exampleSrc:"A: The presentation has thirty slides.\nB: That's too many, try to reduce it to twenty.", funFact:"From Greek dia (through) + Latin positivus. Originally meant photographic slides projected through light. Now means PowerPoint slides."},

  {type:"teach", trg:"el anagrama", src:"the anagram", pos:"noun", gender:"m", note:"A word formed by rearranging letters of another.\nAlso: a logo or monogram for a brand.", example:"A: 'Roma' es un anagrama de 'amor'.\nB: ¡Es verdad! No me había dado cuenta.", exampleSrc:"A: 'Roma' is an anagram of 'amor'.\nB: It's true! I hadn't noticed.", funFact:"In Spanish branding, anagrama often means a company logo. The RAE accepts both the wordplay and visual identity meanings."},

  {type:"teach", trg:"la articulación", src:"the articulation / joint", pos:"noun", gender:"f", note:"Double meaning: how you pronounce words, or a body joint.\nBuena articulación = clear pronunciation.", example:"A: Su articulación es muy clara al hablar.\nB: Normal, es profesora de oratoria.", exampleSrc:"A: Her articulation is very clear when speaking.\nB: Of course, she's a public speaking teacher.", funFact:"From Latin articulatio. The body and speech meanings connect: joints articulate movement, mouths articulate sound."},

  {type:"teach", trg:"la correspondencia", src:"the correspondence / mail", pos:"noun", gender:"f", note:"Letters exchanged or general mail.\nMantener correspondencia = to exchange letters.", example:"A: ¿Has recogido la correspondencia del buzón?\nB: Sí, hay dos cartas y un paquete.", exampleSrc:"A: Have you collected the mail from the mailbox?\nB: Yes, there are two letters and a package.", funFact:"Despite email, correspondencia still means physical mail in daily Spanish. Correo electrónico handles the digital side."},

  {type:"teach", trg:"el diario digital", src:"the online newspaper", pos:"noun", gender:"m", note:"Diario (daily paper) + digital (online).\nAlso called periódico digital.", example:"A: Leo las noticias en un diario digital cada mañana.\nB: ¿Cuál? Yo busco uno de confianza.", exampleSrc:"A: I read the news in an online newspaper every morning.\nB: Which one? I'm looking for a trustworthy one.", funFact:"Spain's top diarios digitales include El País, El Mundo, and elDiario.es. Digital readership now far exceeds print."},

  {type:"mc", q:"¿Qué es una diapositiva?", opts:["Una página de una presentación","Un tipo de cámara fotográfica","Un programa de televisión","Un artículo de periódico"], ans:"Una página de una presentación", hint:"Think of a single page within a PowerPoint or similar slideshow presentation."},

  {type:"teach", trg:"la concienciación", src:"awareness-raising", pos:"noun", gender:"f", note:"From concienciar (to raise awareness).\nCampaña de concienciación = awareness campaign.", example:"A: La concienciación sobre el cambio climático ha crecido mucho.\nB: Aun así, hay que seguir informando.", exampleSrc:"A: Awareness about climate change has grown a lot.\nB: Even so, we need to keep informing people.", funFact:"Spain uses concienciación while Latin America prefers concientización. Both are correct, just regional preferences."},

  {type:"teach", trg:"la contemplación", src:"contemplation", pos:"noun", gender:"f", note:"Deep thought or observation.\nSin contemplaciones = without mercy, ruthlessly.", example:"A: Necesito un momento de contemplación antes de decidir.\nB: Tómate tu tiempo, no hay prisa.", exampleSrc:"A: I need a moment of contemplation before deciding.\nB: Take your time, there's no rush.", funFact:"Sin contemplaciones is a common expression meaning 'without hesitation or mercy'. Contemplación becomes its opposite in this idiom."},

  {type:"teach", trg:"la comunicación empresarial", src:"corporate communication", pos:"noun", gender:"f", note:"How businesses communicate internally and externally.\nA university degree field.", example:"A: Estudié comunicación empresarial en la universidad.\nB: Es una carrera con mucha salida profesional.", exampleSrc:"A: I studied corporate communication at university.\nB: It's a degree with many job prospects.", funFact:"Comunicación empresarial is a popular degree in Spain. It combines marketing, PR, and internal communication skills."},

  {type:"fb", s:"La {1} de noticias falsas es un problema global.", a:["difusión"], opts:["difusión","diapositiva","articulación","correspondencia"], hint:"The spreading and broadcasting of information to wide audiences.", sSrc:"The {1} of fake news is a global problem."},

  {type:"teach", trg:"la dispersión", src:"the dispersion / scattering", pos:"noun", gender:"f", note:"From dispersar (to scatter).\nPhysical scattering or figurative lack of focus.", example:"A: La dispersión de los datos dificulta el análisis.\nB: Necesitamos centralizarlos en una base de datos.", exampleSrc:"A: The dispersion of the data makes analysis difficult.\nB: We need to centralize it in a database.", funFact:"In optics, dispersión de la luz explains rainbows. In psychology, dispersión de la atención means inability to focus."},

  {type:"teach", trg:"la disputa", src:"the dispute / argument", pos:"noun", gender:"f", note:"A formal disagreement or conflict.\nDisputa legal = legal dispute.", example:"A: La disputa entre los vecinos lleva meses.\nB: Deberían ir a mediación.", exampleSrc:"A: The dispute between the neighbours has been going on for months.\nB: They should go to mediation.", funFact:"From Latin disputare (to discuss, to argue). In medieval universities, a disputa was a formal academic debate."},

  {type:"mc", q:"'Sin contemplaciones' significa...", opts:["Sin piedad ni miramientos","Con mucha paciencia","En silencio total","Con mucho respeto"], ans:"Sin piedad ni miramientos", hint:"This idiomatic expression means acting ruthlessly, without hesitation or mercy."},

  {type:"match", pairs:[{trg:"difusión", src:"dissemination"},{trg:"diapositiva", src:"slide"},{trg:"correspondencia", src:"mail"},{trg:"concienciación", src:"awareness-raising"},{trg:"disputa", src:"dispute"}]},

  {type:"fb", s:"La presentación tiene demasiadas {1}, hay que reducirlas.", a:["diapositivas"], opts:["diapositivas","disputas","correspondencias","difusiones"], hint:"Individual pages within a slideshow that display information visually.", sSrc:"The presentation has too many {1}, we need to reduce them."},

  {type:"mc", q:"¿Qué es un diario digital?", opts:["Un periódico que se lee en internet","Un cuaderno personal electrónico","Una emisora de radio online","Un canal de televisión por cable"], ans:"Un periódico que se lee en internet", hint:"A daily newspaper (diario) that exists in digital format online."},

  {type:"fb", s:"La campaña de {1} sobre la salud mental ha tenido mucho impacto.", a:["concienciación"], opts:["concienciación","contemplación","comunicación","correspondencia"], hint:"An effort to make the public more aware of an important social topic.", sSrc:"The {1} campaign about mental health has had a big impact."}
]};

export default LESSON_11;
