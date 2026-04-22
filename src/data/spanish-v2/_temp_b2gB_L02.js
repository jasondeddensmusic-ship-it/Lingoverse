// B2 Gap Batch B Lesson 02. Media & Communication
const LESSON_2 = {id:"esv2_b2gB_l2",title:"Medios de comunicación",icon:"📡",xp:15,board:true,steps:[
{type:"intro",title:"Medios de comunicación",desc:"Learn vocabulary for media, journalism, and public communication in the Spanish-speaking world.",goals:["Learn 12 words about media and communication","Discuss journalism and digital media","Navigate formal media language"]},

{type:"teach",trg:"el medio de comunicación",src:"the media outlet / means of communication",pos:"noun",gender:"m",
 note:"Masculine compound phrase. Plural: los medios de comunicación.\nCovers TV, radio, press, internet.",
 example:"A: Los medios de comunicación informaron sobre la crisis.\nB: Algunos fueron más objetivos que otros.",
 exampleSrc:"A: The media outlets reported on the crisis.\nB: Some were more objective than others.",
 funFact:"Spain has a rich media landscape with national dailies like El Pais, El Mundo, and La Vanguardia."},

{type:"teach",trg:"el diario digital",src:"the digital newspaper / online daily",pos:"noun",gender:"m",
 note:"Masculine compound. Diario (daily) + digital.\nAn online news publication.",
 example:"A: Leo el diario digital cada mañana en el metro.\nB: Yo prefiero las noticias en la radio.",
 exampleSrc:"A: I read the digital newspaper every morning on the metro.\nB: I prefer the news on the radio.",
 funFact:"Spain's first major diario digital was elmundo.es, launched in 1996."},

{type:"teach",trg:"el concursante",src:"the contestant / competitor",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la concursante.\nFrom concurso (contest, competition).",
 example:"A: El concursante respondió todas las preguntas correctamente.\nB: Se llevó el premio de diez mil euros.",
 exampleSrc:"A: The contestant answered all the questions correctly.\nB: He won the ten thousand euro prize.",
 funFact:"Spain's longest-running TV quiz show, 'Pasapalabra', regularly attracts over 3 million viewers."},

{type:"teach",trg:"el conductor",src:"the presenter / host (TV/radio)",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la conductora.\nIn Spain, also 'presentador'.\nIn Latin America, 'conductor' is more common for TV hosts.",
 example:"A: El conductor del programa entrevistó al ministro.\nB: Le hizo preguntas muy directas.",
 exampleSrc:"A: The program host interviewed the minister.\nB: He asked very direct questions.",
 funFact:"In Spain, 'conductor' primarily means 'driver'. The TV meaning comes from Latin American usage."},

{type:"mc",q:"¿Qué es un diario digital?",
 opts:["Un periódico que se publica en internet","Un diario personal electrónico","Una aplicación de calendario","Un canal de televisión"],
 ans:"Un periódico que se publica en internet",
 hint:"Think about reading the news on your phone or computer every morning."},

{type:"teach",trg:"el monólogo",src:"the monologue",pos:"noun",gender:"m",
 note:"Masculine noun. A long speech by one person.\nCommon in theater and stand-up comedy.",
 example:"A: El monólogo del actor fue brillante.\nB: Mantuvo al público en silencio durante diez minutos.",
 exampleSrc:"A: The actor's monologue was brilliant.\nB: He kept the audience silent for ten minutes.",
 funFact:"In Spain, 'El Club de la Comedia' popularized stand-up monologues as a mainstream entertainment format."},

{type:"teach",trg:"el orador",src:"the speaker / orator",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la oradora.\nSomeone skilled at public speaking.",
 example:"A: La oradora cautivó al público con su discurso.\nB: Tiene un don natural para hablar en público.",
 exampleSrc:"A: The speaker captivated the audience with her speech.\nB: She has a natural gift for public speaking.",
 funFact:"From Latin orator. The art of oratoria (oratory) was central to Roman education and remains valued."},

{type:"teach",trg:"la oratoria",src:"the oratory / public speaking",pos:"noun",gender:"f",
 note:"Feminine noun. The art of eloquent speaking.\nA formal, somewhat literary word.",
 example:"A: La oratoria es una habilidad imprescindible en política.\nB: Los mejores líderes son grandes oradores.",
 exampleSrc:"A: Oratory is an essential skill in politics.\nB: The best leaders are great speakers.",
 funFact:"Cicero's principles of oratoria still influence Spanish rhetoric courses at university level."},

{type:"fb",s:"Los {1} cubrieron la noticia durante toda la semana.",
 a:["medios de comunicación"],opts:["medios de comunicación","diarios digitales","concursantes","monólogos"],
 hint:"The general term for all channels that deliver news to the public: TV, radio, press.",
 sSrc:"The {1} covered the story all week long."},

{type:"teach",trg:"la mención",src:"the mention / reference",pos:"noun",gender:"f",
 note:"Feminine noun. A brief reference to something.\nFrom mencionar (to mention).",
 example:"A: No hubo ninguna mención del accidente en las noticias.\nB: Qué raro, fue bastante grave.",
 exampleSrc:"A: There was no mention of the accident in the news.\nB: How strange, it was quite serious.",
 funFact:"In Spanish social media, 'mención' also refers to being tagged or mentioned in a post."},

{type:"teach",trg:"la fotonovela",src:"the photo story / photo novel",pos:"noun",gender:"f",
 note:"Feminine compound. Foto (photo) + novela (novel).\nA narrative told through photographs with text.",
 example:"A: Mi abuela coleccionaba fotonovelas en los años sesenta.\nB: Eran muy populares en toda Latinoamérica.",
 exampleSrc:"A: My grandmother collected photo novels in the sixties.\nB: They were very popular throughout Latin America.",
 funFact:"Fotonovelas were hugely popular in Spain and Latin America from the 1940s to 1980s, blending comics with photography."},

{type:"teach",trg:"el murmullo",src:"the murmur / whisper",pos:"noun",gender:"m",
 note:"Masculine noun. A low, indistinct sound.\nFrom Latin murmurare.",
 example:"A: Se oía un murmullo entre el público.\nB: La gente comentaba la noticia en voz baja.",
 exampleSrc:"A: A murmur could be heard among the audience.\nB: People were discussing the news in low voices.",
 funFact:"The word is onomatopoetic, imitating the low humming sound of many voices speaking softly."},

{type:"mc",q:"¿Quién es un orador?",
 opts:["Un concursante de un programa","Una persona que habla en público con elocuencia","Un presentador de televisión","Un periodista de prensa escrita"],
 ans:"Una persona que habla en público con elocuencia",
 hint:"Think about ancient Rome and the art of delivering persuasive speeches."},

{type:"match",pairs:[
 {trg:"orador",src:"speaker / orator"},
 {trg:"monólogo",src:"monologue"},
 {trg:"concursante",src:"contestant"},
 {trg:"murmullo",src:"murmur"},
 {trg:"mención",src:"mention"}
]},

{type:"fb",s:"El {1} del programa de radio entrevistó a la alcaldesa.",
 a:["conductor"],opts:["conductor","orador","concursante","mediador"],
 hint:"The person who hosts and leads a TV or radio program.",
 sSrc:"The {1} of the radio program interviewed the mayor."},

{type:"fb",s:"La {1} es fundamental para cualquier político que quiera convencer.",
 a:["oratoria"],opts:["oratoria","mención","fotonovela","negociación"],
 hint:"The formal art of speaking eloquently and persuasively in public.",
 sSrc:"{1} is fundamental for any politician who wants to persuade."},

]};
export default LESSON_2;
