// L07: Science & Technology - Modern life, research, and innovation
const LESSON_7 = {
  id:"esv2_b1gap_l7", title:"Ciencia y tecnolog\u00eda", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Ciencia y tecnolog\u00eda",
     desc:"Enter the world of science and technology. Learn vocabulary for research, digital life, and innovation.",
     goals:["Learn 20 science and technology words","Discuss research and digital topics","Describe modern innovations"]},

    {type:"teach", trg:"el ADN", src:"the DNA", pos:"noun", gender:"m",
     note:"Masculine noun. \u00c1cido desoxirribonucleico.\nAbbreviated like English but pronounced differently.",
     example:"A: La prueba de ADN confirm\u00f3 los resultados.\nB: La ciencia es incre\u00edble.",
     exampleSrc:"A: The DNA test confirmed the results.\nB: Science is incredible.",
     funFact:"The Spanish abbreviation mirrors the full name: Acido Desoxirribonucleico. In English it is DNA, but the letters match the Spanish words."},

    {type:"teach", trg:"el androide", src:"the android", pos:"noun", gender:"m",
     note:"Masculine noun. A human-like robot.\nAlso the mobile operating system.",
     example:"A: \u00bfTu m\u00f3vil es androide?\nB: S\u00ed, tengo un androide, me gusta m\u00e1s.",
     exampleSrc:"A: Is your phone Android?\nB: Yes, I have an Android, I like it better.",
     funFact:"From Greek 'andro-' (man) + '-eides' (form). Science fiction popularized the word, but it was coined in the 1700s for automata."},

    {type:"teach", trg:"el audio", src:"the audio", pos:"noun", gender:"m",
     note:"Masculine noun. Sound content or recording.\nMensaje de audio = voice message.",
     example:"A: Te he enviado un audio por WhatsApp.\nB: Ahora lo escucho.",
     exampleSrc:"A: I sent you a voice message on WhatsApp.\nB: I will listen to it now.",
     funFact:"From Latin 'audire' (to hear). In Spain, sending 'audios' on WhatsApp is extremely common, sometimes controversially long ones."},

    {type:"teach", trg:"el audiolibro", src:"the audiobook", pos:"noun", gender:"m",
     note:"Masculine noun. A book in audio format.\nAudio + libro = audiobook.",
     example:"A: \u00bfLees o escuchas libros?\nB: \u00daltimamente escucho audiolibros en el metro.",
     exampleSrc:"A: Do you read or listen to books?\nB: Lately I listen to audiobooks on the subway.",
     funFact:"A compound of 'audio' + 'libro'. The Spanish audiobook market has grown rapidly since 2020, especially on platforms like Audible and Storytel."},

    {type:"teach", trg:"audiovisual", src:"audiovisual", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nMedios audiovisuales = audiovisual media.",
     example:"A: Trabajo en producci\u00f3n audiovisual.\nB: \u00bfHaces v\u00eddeos o pel\u00edculas?",
     exampleSrc:"A: I work in audiovisual production.\nB: Do you make videos or films?",
     funFact:"A modern compound of Latin roots: 'audio' (I hear) + 'visual' (I see). Used heavily in education: 'material audiovisual' (multimedia materials)."},

    {type:"mc",
     q:"\u00bfQu\u00e9 prueba cient\u00edfica identifica a una persona de forma \u00fanica?",
     opts:["la prueba de ADN","el audio","el androide","el audiolibro"],
     ans:"la prueba de ADN",
     hint:"A biological test based on genetic material that is unique to each individual."},

    {type:"teach", trg:"el blog", src:"the blog", pos:"noun", gender:"m",
     note:"Masculine noun. A website with personal entries.\nBloguero/a = blogger.",
     example:"A: \u00bfTienes un blog?\nB: S\u00ed, escribo sobre viajes y gastronom\u00eda.",
     exampleSrc:"A: Do you have a blog?\nB: Yes, I write about travel and gastronomy.",
     funFact:"Shortened from English 'weblog' (web + log). Spanish fully adopted the word, adding 'bloguero' (blogger) and 'bloguear' (to blog)."},

    {type:"teach", trg:"la bacteria", src:"the bacterium", pos:"noun", gender:"f",
     note:"Feminine noun. Singular of bacterias.\nSome are harmful, many are beneficial.",
     example:"A: Esta bacteria causa infecciones.\nB: \u00bfSe trata con antibi\u00f3ticos?",
     exampleSrc:"A: This bacterium causes infections.\nB: Is it treated with antibiotics?",
     funFact:"From Greek 'bakterion' (small staff), because early bacteria seen under microscopes looked rod-shaped. Discovered by Leeuwenhoek in 1676."},

    {type:"teach", trg:"el avance", src:"the advance, progress", pos:"noun", gender:"m",
     note:"Masculine noun. From 'avanzar' (to advance).\nAlso: avance de pel\u00edcula = movie trailer.",
     example:"A: Los avances en medicina son incre\u00edbles.\nB: S\u00ed, cada a\u00f1o hay nuevos tratamientos.",
     exampleSrc:"A: The advances in medicine are incredible.\nB: Yes, every year there are new treatments.",
     funFact:"From Catalan/Italian 'avanzar', from Latin 'ab ante' (from before). 'Avance informativo' is a news bulletin. 'Avance' is also a movie trailer."},

    {type:"teach", trg:"el aerosol", src:"the aerosol, spray", pos:"noun", gender:"m",
     note:"Masculine noun. A pressurized spray container.\nDesodorante en aerosol = spray deodorant.",
     example:"A: No uses aerosol cerca del fuego.\nB: Es verdad, es peligroso.",
     exampleSrc:"A: Do not use aerosol near fire.\nB: That is true, it is dangerous.",
     funFact:"From Latin 'aero' (air) + 'sol' (solution). Aerosol cans were banned from containing CFCs in the 1980s to protect the ozone layer."},

    {type:"fb",
     s:"Los {1} en inteligencia artificial son cada vez m\u00e1s r\u00e1pidos.",
     a:["avances"],
     opts:["avances","audios","androides","aerosoles"],
     hint:"The noun for progress or forward steps, often used with science and technology.",
     sSrc:"The {1} in artificial intelligence are getting faster and faster."},

    {type:"teach", trg:"la autonom\u00eda", src:"the autonomy", pos:"noun", gender:"f",
     note:"Feminine noun. Independence or self-governance.\nAlso: battery life of a device.",
     example:"A: Este m\u00f3vil tiene buena autonom\u00eda.\nB: S\u00ed, la bater\u00eda dura dos d\u00edas.",
     exampleSrc:"A: This phone has good battery life.\nB: Yes, the battery lasts two days.",
     funFact:"From Greek 'auto' (self) + 'nomos' (law). In Spain, 'comunidad aut\u00f3noma' refers to each of the 17 self-governing regions."},

    {type:"teach", trg:"at\u00f3mico", src:"atomic", pos:"adj", gender:null,
     note:"Adjective. At\u00f3mico/at\u00f3mica.\nEnerg\u00eda at\u00f3mica = atomic energy.",
     example:"A: La energ\u00eda at\u00f3mica es controvertida.\nB: Tiene ventajas y riesgos.",
     exampleSrc:"A: Atomic energy is controversial.\nB: It has advantages and risks.",
     funFact:"From Greek 'atomos' (indivisible). The ancient Greeks coined the concept, though atoms turned out to be divisible after all."},

    {type:"teach", trg:"la anatom\u00eda", src:"the anatomy", pos:"noun", gender:"f",
     note:"Feminine noun. The study of body structure.\nFrom medical science.",
     example:"A: Estudio anatom\u00eda en la universidad.\nB: \u00bfEs dif\u00edcil?",
     exampleSrc:"A: I study anatomy at university.\nB: Is it difficult?",
     funFact:"From Greek 'anatomia' (dissection), from 'ana' (up) + 'temnein' (to cut). Literally 'cutting up' to study the inside."},

    {type:"teach", trg:"el autocontrol", src:"the self-control", pos:"noun", gender:"m",
     note:"Masculine noun. The ability to control oneself.\nAuto (self) + control.",
     example:"A: Necesitas m\u00e1s autocontrol con la comida.\nB: Lo s\u00e9, pero es dif\u00edcil.",
     exampleSrc:"A: You need more self-control with food.\nB: I know, but it is difficult.",
     funFact:"A transparent compound: 'auto' (self) + 'control'. Spanish easily creates words with 'auto-': autoservicio, autocr\u00edtica, autom\u00f3vil."},

    {type:"mc",
     q:"\u00bfQu\u00e9 significa 'autonom\u00eda' cuando hablamos de un m\u00f3vil?",
     opts:["La duraci\u00f3n de la bater\u00eda","El tama\u00f1o de la pantalla","La velocidad de internet","El n\u00famero de aplicaciones"],
     ans:"La duraci\u00f3n de la bater\u00eda",
     hint:"In tech contexts, this word refers to how long a device can operate independently without charging."},

    {type:"teach", trg:"la astrolog\u00eda", src:"the astrology", pos:"noun", gender:"f",
     note:"Feminine noun. The study of star positions and personality.\nDifferent from astronom\u00eda.",
     example:"A: \u00bfCrees en la astrolog\u00eda?\nB: Un poco. Soy Leo.",
     exampleSrc:"A: Do you believe in astrology?\nB: A little. I am a Leo.",
     funFact:"From Greek 'astro' (star) + 'logos' (study). Not to be confused with 'astronom\u00eda' (astronomy), the actual science of celestial objects."},

    {type:"teach", trg:"el astronauta", src:"the astronaut", pos:"noun", gender:"m",
     note:"Common gender noun. El/la astronauta.\nGender shown by article only.",
     example:"A: De peque\u00f1o quer\u00eda ser astronauta.\nB: \u00bfY ahora?",
     exampleSrc:"A: As a kid I wanted to be an astronaut.\nB: And now?",
     funFact:"From Greek 'astro' (star) + 'nautes' (sailor). A 'star sailor'. Russia uses 'cosmonauta' and China uses 'taikonauta' for their space travelers."},

    {type:"fb",
     s:"Mi hijo quiere ser {1} y viajar al espacio.",
     a:["astronauta"],
     opts:["astronauta","androide","aerosol","autocontrol"],
     hint:"A person who travels to space. The word means 'star sailor' in Greek.",
     sSrc:"My son wants to be an {1} and travel to space."},

    {type:"match", pairs:[
      {trg:"ADN", src:"DNA"},
      {trg:"bacteria", src:"bacterium"},
      {trg:"avance", src:"advance"},
      {trg:"autonom\u00eda", src:"autonomy"},
      {trg:"astronauta", src:"astronaut"}
    ]}
  ]
};
export default LESSON_7;
