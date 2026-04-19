// Lesson 1 — Medios de comunicación
const LESSON_1 = {id:"esv2_b2gA_l1", title:"Medios de comunicación", icon:"📰", xp:15, board:true, steps:[
{type:"intro", title:"Medios de comunicación", desc:"Master vocabulary for discussing media, journalism, and the press in the digital age.", goals:["Learn 15 media and journalism words","Discuss news sources and reliability","Use formal register for media topics"]},

{type:"teach", trg:"el medio de comunicación", src:"the media outlet", pos:"noun", gender:"m",
 note:"Plural: los medios de comunicación.\nCovers TV, radio, press, online.",
 example:"A: ¿Qué medio de comunicación prefieres?\nB: Leo el periódico digital cada mañana.",
 exampleSrc:"A: Which media outlet do you prefer?\nB: I read the digital newspaper every morning.",
 funFact:"Spain has over 100 digital-only news outlets founded since 2008."},

{type:"teach", trg:"el diario digital", src:"the digital newspaper", pos:"noun", gender:"m",
 note:"A newspaper published exclusively online.\nFrom diario (daily) + digital.",
 example:"A: ¿Lees algún diario digital?\nB: Sí, me suscribo a dos diarios digitales.",
 exampleSrc:"A: Do you read any digital newspaper?\nB: Yes, I subscribe to two digital newspapers.",
 funFact:"El Confidencial became Spain's most-read digital-only newspaper by 2015."},

{type:"teach", trg:"la redacción", src:"the editorial office / writing", pos:"noun", gender:"f",
 note:"Two meanings: the physical newsroom, or the act of writing/composing text.",
 example:"A: ¿Dónde trabaja tu hermana?\nB: En la redacción de un periódico regional.",
 exampleSrc:"A: Where does your sister work?\nB: In the editorial office of a regional newspaper.",
 funFact:"From Latin redactio (a bringing back). The French used it for editing first."},

{type:"teach", trg:"el titular", src:"the headline", pos:"noun", gender:"m",
 note:"The large text at the top of an article.\nAlso means 'holder' (of an account).",
 example:"A: ¿Has visto el titular de hoy?\nB: Sí, es bastante alarmante.",
 exampleSrc:"A: Have you seen today's headline?\nB: Yes, it's quite alarming.",
 funFact:"Spanish headlines often drop articles for brevity, like English."},

{type:"teach", trg:"la fuente", src:"the source", pos:"noun", gender:"f",
 note:"Also means 'fountain' or 'font'.\nIn journalism: where information comes from.",
 example:"A: ¿Es fiable esa fuente?\nB: Sí, es una fuente oficial del gobierno.",
 exampleSrc:"A: Is that source reliable?\nB: Yes, it's an official government source.",
 funFact:"From Latin fons (spring). The three meanings share the idea of 'origin'."},

{type:"teach", trg:"difundir", src:"to broadcast / to spread", pos:"verb", gender:null,
 note:"Used for news, ideas, culture.\nMore formal than 'compartir'.",
 example:"A: ¿Quién difundió la noticia?\nB: La difundieron las agencias de prensa.",
 exampleSrc:"A: Who spread the news?\nB: The press agencies spread it.",
 funFact:"From Latin diffundere (to pour out). Same root as English 'diffuse'."},

{type:"teach", trg:"el periodista", src:"the journalist", pos:"noun", gender:"m",
 note:"Feminine: la periodista (same form, different article).\nFrom periodo (period/issue).",
 example:"A: Mi prima es periodista de investigación.\nB: Eso debe ser muy emocionante.",
 exampleSrc:"A: My cousin is an investigative journalist.\nB: That must be very exciting.",
 funFact:"Spain's press freedom ranks around 32nd globally, the highest in Southern Europe."},

{type:"mc", q:"¿Qué es un diario digital?", opts:["Un periódico publicado en internet","Una agenda electrónica","Un blog personal","Un programa de televisión"], ans:"Un periódico publicado en internet",
 hint:"Think about what 'diario' (daily) + 'digital' suggests about the format."},

{type:"fb", s:"El {1} del artículo era muy llamativo y atrajo muchos lectores.", a:["titular"], opts:["titular","redacción","fuente","medio"],
 hint:"The large text at the top of a news article that grabs attention.",
 sSrc:"The {1} of the article was very eye-catching and attracted many readers."},

{type:"teach", trg:"la audiencia", src:"the audience / viewership", pos:"noun", gender:"f",
 note:"Both the people watching and the ratings number.\nAlso: a court hearing.",
 example:"A: ¿Cuál es la audiencia de ese programa?\nB: Tiene unos tres millones de espectadores.",
 exampleSrc:"A: What's the audience for that show?\nB: It has about three million viewers.",
 funFact:"In legal Spanish, audiencia also means a court hearing or tribunal."},

{type:"teach", trg:"el reportaje", src:"the report / feature story", pos:"noun", gender:"m",
 note:"A detailed journalistic piece, longer than a news brief.\nFrom reportar (to report).",
 example:"A: Vi un reportaje sobre la sequía en Andalucía.\nB: ¿En qué canal lo emitieron?",
 exampleSrc:"A: I saw a report on the drought in Andalusia.\nB: Which channel aired it?",
 funFact:"The word entered Spanish from French reportage in the 19th century."},

{type:"teach", trg:"la censura", src:"censorship", pos:"noun", gender:"f",
 note:"The suppression of information by authorities.\nFrom Latin censura (judgment).",
 example:"A: ¿Hay censura en la prensa de tu país?\nB: No oficialmente, pero hay presiones.",
 exampleSrc:"A: Is there censorship in the press in your country?\nB: Not officially, but there are pressures.",
 funFact:"Spain abolished press censorship in 1978 with the new Constitution after Franco."},

{type:"mc", q:"¿Qué hace un periodista de investigación?", opts:["Investiga y publica historias ocultas","Lee las noticias en televisión","Escribe novelas de ficción","Vende periódicos en la calle"], ans:"Investiga y publica historias ocultas",
 hint:"This type of journalist goes beyond daily reporting to uncover hidden facts and expose wrongdoing."},

{type:"fb", s:"Las agencias de prensa {1} las noticias a todos los medios.", a:["difunden"], opts:["difunden","censuran","redactan","titulan"],
 hint:"This verb means to spread or broadcast information widely.",
 sSrc:"Press agencies {1} the news to all media outlets."},

{type:"teach", trg:"la prensa sensacionalista", src:"the tabloid press", pos:"noun", gender:"f",
 note:"Press that exaggerates stories for emotional impact.\nAlso called prensa amarilla.",
 example:"A: No creo en la prensa sensacionalista.\nB: Yo tampoco. Exageran todo.",
 exampleSrc:"A: I don't trust the tabloid press.\nB: Me neither. They exaggerate everything.",
 funFact:"'Prensa amarilla' (yellow press) comes from the American 'Yellow Journalism' of the 1890s."},

{type:"teach", trg:"el corresponsal", src:"the correspondent", pos:"noun", gender:"m",
 note:"A journalist based abroad reporting back.\nFeminine: la corresponsal.",
 example:"A: Nuestra corresponsal en Berlín informa en directo.\nB: Me gusta cómo explica el contexto.",
 exampleSrc:"A: Our correspondent in Berlin is reporting live.\nB: I like how she explains the context.",
 funFact:"From corresponder (to correspond). Originally meant someone who exchanges letters."},

{type:"match", pairs:[
 {trg:"el titular", src:"headline"},
 {trg:"la fuente", src:"source"},
 {trg:"la censura", src:"censorship"},
 {trg:"el reportaje", src:"feature story"},
 {trg:"el corresponsal", src:"correspondent"}
]},

{type:"fb", s:"La {1} del programa de las nueve ha bajado un veinte por ciento.", a:["audiencia"], opts:["audiencia","censura","redacción","fuente"],
 hint:"This word refers to the number of people watching a show.",
 sSrc:"The {1} of the nine o'clock show has dropped by twenty percent."},

{type:"mc", q:"¿Qué es 'la prensa amarilla'?", opts:["La prensa sensacionalista","Un periódico impreso en papel amarillo","Una revista de moda","Un tipo de papel reciclado"], ans:"La prensa sensacionalista",
 hint:"This colorful expression refers to tabloids that exaggerate for effect."},

{type:"teach", trg:"la imparcialidad", src:"impartiality", pos:"noun", gender:"f",
 note:"Being fair and unbiased. Key journalistic principle.\nIm- (not) + parcial (partial).",
 example:"A: Un buen periodista debe mantener la imparcialidad.\nB: Es difícil, pero es fundamental.",
 exampleSrc:"A: A good journalist must maintain impartiality.\nB: It's difficult, but it's essential.",
 funFact:"The Spanish Constitution guarantees the right to truthful information."},

{type:"teach", trg:"contrastar", src:"to verify / to cross-check", pos:"verb", gender:null,
 note:"In journalism: checking facts with multiple sources.\nAlso: to contrast.",
 example:"A: ¿Has contrastado esa información?\nB: Sí, la he verificado con tres fuentes.",
 exampleSrc:"A: Have you cross-checked that information?\nB: Yes, I've verified it with three sources.",
 funFact:"From Latin contra (against) + stare (to stand). Literally 'to stand against'."},

{type:"fb", s:"Es esencial {1} la información antes de publicarla.", a:["contrastar"], opts:["contrastar","censurar","difundir","redactar"],
 hint:"This verb means to verify facts by checking multiple sources.",
 sSrc:"It is essential to {1} the information before publishing it."},

{type:"mc", q:"¿Cuál es un principio fundamental del periodismo?", opts:["La imparcialidad","El sensacionalismo","La censura","La exageración"], ans:"La imparcialidad",
 hint:"Good journalism requires fairness and an absence of bias."},

{type:"drag_fill", s:"El {1} publicó un {2} sobre la crisis migratoria.", blanks:{"1":"corresponsal","2":"reportaje"}, pool:["corresponsal","reportaje","censura","titular"],
 hint:"A journalist abroad wrote a detailed feature story."},

{type:"match", pairs:[
 {trg:"difundir", src:"to broadcast"},
 {trg:"contrastar", src:"to cross-check"},
 {trg:"la imparcialidad", src:"impartiality"},
 {trg:"la audiencia", src:"audience"},
 {trg:"la prensa sensacionalista", src:"tabloid press"}
]}
]};
export default LESSON_1;
