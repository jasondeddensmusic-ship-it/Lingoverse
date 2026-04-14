// B2 Gap Batch 8 Lesson 02 - Media & Communication
const LESSON_2 = {id:"esv2_b2g8_l2",title:"Medios y comunicación",icon:"📡",xp:15,board:true,steps:[
{type:"intro",title:"Medios y comunicación",desc:"Learn vocabulary for modern media, journalism, and corporate communications in the digital age.",goals:["Learn 15 media and communication terms","Discuss journalism and digital media","Use media-related vocabulary fluently"]},

{type:"teach",trg:"el medio de comunicación",src:"the media outlet",pos:"noun",gender:"m",
 note:"Masculine noun. Any channel for distributing news or information.\nPlural: los medios de comunicación.",
 example:"A: ¿En qué medio de comunicación trabajas?\nB: En un diario digital. Publicamos noticias en línea.",
 exampleSrc:"A: Which media outlet do you work for?\nB: For a digital newspaper. We publish news online.",
 funFact:"Spain has over 3,000 registered media outlets. El País and El Mundo are the most read nationwide."},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine noun. A newspaper published on the internet.\nDiario = daily, digital = online.",
 example:"A: Leo las noticias en un diario digital cada mañana.\nB: ¿Cuál prefieres? Hay muchos buenos.",
 exampleSrc:"A: I read the news in an online newspaper every morning.\nB: Which one do you prefer? There are many good ones.",
 funFact:"Spain's first major online newspaper, elmundo.es, launched in 1996. Now most readers are digital."},

{type:"teach",trg:"la comunicación empresarial",src:"the corporate communication",pos:"noun",gender:"f",
 note:"Feminine noun. Professional communication within and outside a company.",
 example:"A: La comunicación empresarial es clave para la imagen de la marca.\nB: Sin duda. Un mal comunicado puede ser desastroso.",
 exampleSrc:"A: Corporate communication is key for the brand image.\nB: Without a doubt. A bad press release can be disastrous.",
 funFact:"Many Spanish universities now offer degrees specifically in comunicación empresarial."},

{type:"teach",trg:"la mención",src:"the mention",pos:"noun",gender:"f",
 note:"Feminine noun. A reference to someone or something.\nFrom Latin mentio.",
 example:"A: Tu artículo recibió una mención en el periódico.\nB: ¿En serio? No lo sabía. ¡Qué bien!",
 exampleSrc:"A: Your article received a mention in the newspaper.\nB: Really? I did not know. How great!",
 funFact:"In Spanish social media, 'mención' is used exactly like the English 'mention' or '@mention'."},

{type:"mc",q:"¿Qué es un diario digital?",
 opts:["Un periódico publicado en internet","Una agenda electrónica","Un libro de texto en línea","Una emisora de radio"],
 ans:"Un periódico publicado en internet",
 hint:"Break it down: diario means daily newspaper, digital means online."},

{type:"teach",trg:"el conductor",src:"the presenter / host",pos:"noun",gender:"m",
 note:"Masculine noun. Person who hosts a TV or radio show.\nAlso means 'driver'. Context matters.",
 example:"A: El conductor del programa de esta noche es muy gracioso.\nB: Sí, siempre me hace reír con sus entrevistas.",
 exampleSrc:"A: The host of tonight's show is very funny.\nB: Yes, he always makes me laugh with his interviews.",
 funFact:"In Spain, 'presentador' is more common for TV hosts. 'Conductor' is preferred in Latin America."},

{type:"teach",trg:"la coproducción",src:"the co-production",pos:"noun",gender:"f",
 note:"Feminine noun. A joint production between companies or countries.\nCo- = together, producción = production.",
 example:"A: Esta película es una coproducción entre España y Francia.\nB: Se nota en el reparto internacional.",
 exampleSrc:"A: This film is a co-production between Spain and France.\nB: You can tell from the international cast.",
 funFact:"Spain is one of Europe's top co-production partners. Many award-winning films are Spanish co-productions."},

{type:"teach",trg:"el listado",src:"the listing / list",pos:"noun",gender:"m",
 note:"Masculine noun. An organized enumeration of items or data.\nMore formal than 'lista'.",
 example:"A: ¿Tienes el listado de los medios invitados a la conferencia?\nB: Sí, son cuarenta y cinco en total.",
 exampleSrc:"A: Do you have the listing of media invited to the conference?\nB: Yes, there are forty-five in total.",
 funFact:"'Listado' implies a more official, printed or digital document than the everyday word 'lista'."},

{type:"fb",s:"La {1} entre España y Argentina produjo una serie de televisión muy exitosa.",
 a:["coproducción"],opts:["coproducción","comunicación empresarial","mención","logística"],
 hint:"When two countries work together to produce something, we call it a co-...",
 sSrc:"The {1} between Spain and Argentina produced a very successful television series."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem larger or more important than it is.",
 example:"A: Dijo que había un millón de personas en la manifestación.\nB: Eso es una exageración. Eran unas diez mil.",
 exampleSrc:"A: He said there were a million people at the demonstration.\nB: That is an exaggeration. There were about ten thousand.",
 funFact:"Spanish speakers are famously expressive. The phrase 'no exageres' (don't exaggerate) is used constantly."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. The precise meaning of a word or concept.\nFrom Latin definitio.",
 example:"A: ¿Cuál es la definición de 'periodismo ciudadano'?\nB: Cuando personas comunes informan sobre eventos.",
 exampleSrc:"A: What is the definition of 'citizen journalism'?\nB: When ordinary people report on events.",
 funFact:"The RAE dictionary is the authority for Spanish definitions, but its influence is debated in Latin America."},

{type:"teach",trg:"el logo",src:"the logo",pos:"noun",gender:"m",
 note:"Masculine noun. A graphic symbol representing a brand.\nShort for logotipo.",
 example:"A: Necesitamos cambiar el logo de la empresa.\nB: Estoy de acuerdo. El actual parece anticuado.",
 exampleSrc:"A: We need to change the company logo.\nB: I agree. The current one looks outdated.",
 funFact:"The word 'logotipo' comes from Greek logos (word) + typos (impression). 'Logo' is the informal form."},

{type:"mc",q:"¿Qué significa 'comunicación empresarial'?",
 opts:["La comunicación profesional dentro y fuera de una empresa","El servicio de correos de una ciudad","Las noticias publicadas en un diario","La conversación entre amigos"],
 ans:"La comunicación profesional dentro y fuera de una empresa",
 hint:"Empresarial relates to 'empresa' (company). What kind of communication happens in business?"},

{type:"teach",trg:"la consideración",src:"the consideration",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought, or respect shown to others.\nTener en consideración = to take into account.",
 example:"A: Tu propuesta merece mayor consideración.\nB: Gracias. Espero que la analicen con detenimiento.",
 exampleSrc:"A: Your proposal deserves greater consideration.\nB: Thank you. I hope they analyze it carefully.",
 funFact:"In formal Spanish letters, 'consideración' appears in the closing: 'Le saludo con mi más alta consideración'."},

{type:"teach",trg:"la consistencia",src:"the consistency",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being reliable and unchanging.\nAlso refers to texture in cooking.",
 example:"A: La consistencia del mensaje es fundamental en comunicación.\nB: Exacto. No puedes cambiar el discurso cada semana.",
 exampleSrc:"A: Message consistency is fundamental in communication.\nB: Exactly. You cannot change the narrative every week.",
 funFact:"Be careful: in some contexts 'consistencia' can mean physical texture, not just reliability."},

{type:"fb",s:"Tu artículo recibió una {1} en el periódico nacional de esta mañana.",
 a:["mención"],opts:["mención","definición","exageración","consideración"],
 hint:"When someone or something is referenced or cited in a publication.",
 sSrc:"Your article received a {1} in this morning's national newspaper."},

{type:"match",pairs:[
 {trg:"el medio de comunicación",src:"media outlet"},
 {trg:"la coproducción",src:"co-production"},
 {trg:"el conductor",src:"presenter / host"},
 {trg:"el logo",src:"logo"},
 {trg:"la consistencia",src:"consistency"}
]},

{type:"mc",q:"Si dices que había un millón de personas pero solo eran mil, ¿qué es eso?",
 opts:["Una exageración","Una definición","Una consideración","Una coproducción"],
 ans:"Una exageración",
 hint:"Making something seem much bigger or more dramatic than it really is."},

{type:"fb",s:"Los {1} deben informar con objetividad y rigor profesional.",
 a:["medios de comunicación"],opts:["medios de comunicación","diarios digitales","listados","logos"],
 hint:"The general term for all channels that distribute news and information to the public.",
 sSrc:"The {1} must report with objectivity and professional rigor."}
]};
export default LESSON_2;
