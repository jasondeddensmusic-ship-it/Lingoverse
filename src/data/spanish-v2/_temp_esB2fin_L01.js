// Spanish B2 Final Batch - Lesson 1: Media & Communication
const LESSON_1 = {
  id:"esv2_b2fin_l1", title:"Medios y Comunicación", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medios y Comunicación",
     desc:"Explore the language of journalism, broadcasting, and modern media. Build vocabulary for discussing news, press, and communication trends at a B2 level.",
     goals:["Discuss journalism and the press using precise vocabulary","Describe broadcasting and digital media concepts","Express opinions about media credibility and bias"]},

    {type:"teach", trg:"la prensa", src:"the press", pos:"noun", gender:"f",
     note:"Covers newspapers, magazines, and journalism as a whole.",
     example:"A: ¿Lees la prensa todos los días?\nB: Sí, sobre todo la prensa digital.",
     exampleSrc:"A: Do you read the press every day?\nB: Yes, especially the digital press.",
     funFact:"From Latin 'pressa' (pressed), referring to the printing press invented by Gutenberg."},

    {type:"teach", trg:"el periodismo", src:"journalism", pos:"noun", gender:"m",
     note:"The profession and practice of gathering and reporting news.",
     example:"A: ¿Estudiaste periodismo en la universidad?\nB: Sí, me especialicé en periodismo de investigación.",
     exampleSrc:"A: Did you study journalism at university?\nB: Yes, I specialized in investigative journalism.",
     funFact:"From 'periódico' (newspaper), itself from Greek 'periodikos' meaning recurring at intervals."},

    {type:"teach", trg:"la emisora", src:"the broadcasting station", pos:"noun", gender:"f",
     note:"A radio or TV station. Can be 'emisora de radio' or 'emisora de televisión'.",
     example:"A: ¿En qué emisora trabajas?\nB: En una emisora de radio local.",
     exampleSrc:"A: Which broadcasting station do you work at?\nB: At a local radio station.",
     funFact:"From 'emitir' (to emit/broadcast). Latin 'emittere' meant to send out."},

    {type:"teach", trg:"el titular", src:"the headline", pos:"noun", gender:"m",
     note:"The headline of a news article. Plural 'titulares' for news summary.",
     example:"A: ¿Has visto los titulares de hoy?\nB: Sí, el titular principal es impactante.",
     exampleSrc:"A: Have you seen today's headlines?\nB: Yes, the main headline is shocking.",
     funFact:"Also means 'holder' (of a position). Double meaning: the headline 'holds' the story's essence."},

    {type:"teach", trg:"la redacción", src:"the editorial office / writing", pos:"noun", gender:"f",
     note:"Both the newsroom and the act of writing/editing text.",
     example:"A: La redacción del periódico está en el centro.\nB: Allí trabajan más de cincuenta periodistas.",
     exampleSrc:"A: The newspaper's editorial office is downtown.\nB: More than fifty journalists work there.",
     funFact:"From Latin 'redactio'. In Spanish it means both the writing process and the physical newsroom."},

    {type:"teach", trg:"difundir", src:"to broadcast / to spread", pos:"verb", gender:null,
     note:"To disseminate information widely through media channels.",
     example:"A: ¿Cómo se difundió la noticia tan rápido?\nB: Las redes sociales ayudaron a difundirla en minutos.",
     exampleSrc:"A: How did the news spread so quickly?\nB: Social media helped spread it in minutes.",
     funFact:"From Latin 'diffundere' (to pour out). Same root as English 'diffuse'."},

    {type:"teach", trg:"el corresponsal", src:"the correspondent", pos:"noun", gender:"m",
     note:"A journalist reporting from a specific location, often abroad.",
     example:"A: Nuestro corresponsal en Londres informa en directo.\nB: Es uno de los mejores corresponsales de la cadena.",
     exampleSrc:"A: Our correspondent in London is reporting live.\nB: He is one of the best correspondents at the network.",
     funFact:"From 'corresponder' (to correspond). War correspondents date back to the Crimean War in the 1850s."},

    {type:"mc", q:"¿Cómo se llama el lugar donde trabajan los periodistas de un periódico?",
     opts:["La emisora","La redacción","El titular","La portada"],
     ans:"La redacción",
     hint:"This word refers to both the writing process and the physical newsroom space."},

    {type:"teach", trg:"la portada", src:"the front page / cover", pos:"noun", gender:"f",
     note:"The front page of a newspaper or cover of a magazine.",
     example:"A: ¿Quién sale en la portada de hoy?\nB: El presidente aparece en la portada por la nueva ley.",
     exampleSrc:"A: Who is on the front page today?\nB: The president is on the front page because of the new law.",
     funFact:"From 'puerta' (door). The front page is the 'doorway' into the publication."},

    {type:"teach", trg:"el reportaje", src:"the report / feature story", pos:"noun", gender:"m",
     note:"An in-depth journalistic piece, longer and more detailed than a news article.",
     example:"A: Vi un reportaje sobre la crisis climática.\nB: Ese reportaje ganó un premio de periodismo.",
     exampleSrc:"A: I saw a report on the climate crisis.\nB: That report won a journalism award.",
     funFact:"From French 'reportage'. Longer form of reporting that goes beyond breaking news."},

    {type:"teach", trg:"la fuente", src:"the source", pos:"noun", gender:"f",
     note:"An information source. Also means 'fountain'. Context determines meaning.",
     example:"A: ¿De qué fuente viene esta información?\nB: De una fuente anónima dentro del gobierno.",
     exampleSrc:"A: What source does this information come from?\nB: From an anonymous source inside the government.",
     funFact:"Latin 'fons' (spring/fountain). Information 'springs' from sources, just like water from a fountain."},

    {type:"fb", s:"Los {1} del periódico de hoy son alarmantes.", a:["titulares"],
     opts:["titulares","emisoras","portadas","fuentes"],
     hint:"These are the bold lines at the top of news articles summarizing the story.",
     sSrc:"Today's newspaper {1} are alarming."},

    {type:"teach", trg:"el sesgo informativo", src:"media bias", pos:"noun", gender:"m",
     note:"When reporting favors one perspective over another. Key media literacy term.",
     example:"A: Este artículo tiene un claro sesgo informativo.\nB: Sí, solo presenta un punto de vista.",
     exampleSrc:"A: This article has a clear media bias.\nB: Yes, it only presents one point of view.",
     funFact:"'Sesgo' originally meant 'oblique cut' in tailoring. Media bias 'cuts' the truth at an angle."},

    {type:"teach", trg:"la censura", src:"censorship", pos:"noun", gender:"f",
     note:"The suppression of information by authorities or institutions.",
     example:"A: ¿Existe censura en los medios de tu país?\nB: Oficialmente no, pero hay presiones políticas.",
     exampleSrc:"A: Is there censorship in your country's media?\nB: Officially no, but there is political pressure.",
     funFact:"From Latin 'censura'. Roman censors originally assessed citizens' wealth and morality."},

    {type:"teach", trg:"la cadena", src:"the (TV/radio) network / chain", pos:"noun", gender:"f",
     note:"A television or radio network. Also means physical chain.",
     example:"A: ¿En qué cadena emiten ese programa?\nB: En la cadena pública, los jueves a las diez.",
     exampleSrc:"A: Which network airs that program?\nB: On the public network, Thursdays at ten.",
     funFact:"From Latin 'catena' (chain). A network is a 'chain' of linked stations broadcasting together."},

    {type:"mc", q:"¿Qué palabra describe la supresión de información por parte de las autoridades?",
     opts:["La portada","El reportaje","La censura","El sesgo"],
     ans:"La censura",
     hint:"This refers to authorities blocking or suppressing the free flow of information."},

    {type:"teach", trg:"el oyente", src:"the listener", pos:"noun", gender:"m",
     note:"A radio listener. From 'oír' (to hear).",
     example:"A: Esta emisora tiene millones de oyentes.\nB: Los oyentes prefieren las noticias de la mañana.",
     exampleSrc:"A: This station has millions of listeners.\nB: Listeners prefer the morning news.",
     funFact:"From 'oír' (to hear), from Latin 'audire'. Related to English 'audience' via the same root."},

    {type:"teach", trg:"el medio digital", src:"the digital medium", pos:"noun", gender:"m",
     note:"Online news platforms, blogs, podcasts, and digital publications.",
     example:"A: Los medios digitales han transformado el periodismo.\nB: Ahora cualquiera puede publicar contenido.",
     exampleSrc:"A: Digital media have transformed journalism.\nB: Now anyone can publish content.",
     funFact:"'Medio' from Latin 'medius' (middle). Media are the 'middle' between events and audience."},

    {type:"teach", trg:"la opinión pública", src:"public opinion", pos:"noun", gender:"f",
     note:"The collective attitudes and beliefs of the general population.",
     example:"A: La opinión pública ha cambiado tras el escándalo.\nB: Los medios influyen mucho en la opinión pública.",
     exampleSrc:"A: Public opinion has changed after the scandal.\nB: The media greatly influence public opinion.",
     funFact:"Concept formalized during the Enlightenment. In Spain, the tertulia (discussion circle) shaped it for centuries."},

    {type:"teach", trg:"el comunicado", src:"the press release / communiqué", pos:"noun", gender:"m",
     note:"An official statement issued to the media.",
     example:"A: El gobierno emitió un comunicado sobre la crisis.\nB: El comunicado no aclara mucho la situación.",
     exampleSrc:"A: The government issued a communiqué about the crisis.\nB: The communiqué doesn't clarify the situation much.",
     funFact:"From 'comunicar' (to communicate). Latin 'communicare' meant to share or make common."},

    {type:"fb", s:"La {1} de televisión emitió un especial sobre el desastre.", a:["cadena"],
     opts:["cadena","prensa","fuente","censura"],
     hint:"This word means network and also means a physical chain of linked elements.",
     sSrc:"The television {1} broadcast a special about the disaster."},

    {type:"match", pairs:[
      {trg:"la prensa", src:"the press"},
      {trg:"difundir", src:"to broadcast / spread"},
      {trg:"el sesgo informativo", src:"media bias"},
      {trg:"el comunicado", src:"the press release"}
    ]},

    {type:"mc", q:"¿Qué término describe a un periodista que informa desde otro país?",
     opts:["El oyente","El corresponsal","El titular","El comunicado"],
     ans:"El corresponsal",
     hint:"This journalist is stationed in a specific location to report back to their network."},

    {type:"fb", s:"El {1} de investigación sobre corrupción duró seis meses.", a:["reportaje"],
     opts:["reportaje","titular","comunicado","sesgo"],
     hint:"This is an in-depth journalistic piece that goes deeper than a standard news article.",
     sSrc:"The investigative {1} on corruption lasted six months."},

    {type:"mc", q:"¿Qué son 'los medios digitales'?",
     opts:["Periódicos impresos","Plataformas de noticias en línea","Cartas formales","Emisoras de radio"],
     ans:"Plataformas de noticias en línea",
     hint:"These media platforms exist on the internet rather than in print or over airwaves."},

    {type:"match", pairs:[
      {trg:"la portada", src:"the front page"},
      {trg:"la fuente", src:"the source"},
      {trg:"el oyente", src:"the listener"},
      {trg:"la opinión pública", src:"public opinion"}
    ]},

    {type:"fb", s:"No confío en ese artículo porque tiene mucho {1} informativo.", a:["sesgo"],
     opts:["sesgo","reportaje","titular","comunicado"],
     hint:"This word describes a slanted perspective that favors one side over another.",
     sSrc:"I don't trust that article because it has a lot of media {1}."},

    {type:"mc", q:"¿Qué significa 'difundir una noticia'?",
     opts:["Censurar una noticia","Escribir una noticia","Propagar una noticia ampliamente","Leer una noticia"],
     ans:"Propagar una noticia ampliamente",
     hint:"This verb means to spread or disseminate information to a wide audience."}
  ]
};
export default LESSON_1;
