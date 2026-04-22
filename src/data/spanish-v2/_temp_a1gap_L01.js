// L01: People & Greetings. Core people vocabulary
const LESSON_1 = {
  id:"esv2_a1gap_l1", title:"La gente", icon:"\u{1F44B}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La gente",
     desc:"Meet the people around you. Learn essential words for describing who someone is.",
     goals:["Learn 20 words for people and roles","Use articles with masculine and feminine nouns","Talk about people in simple sentences"]},

    {type:"teach", trg:"el amigo", src:"the friend (male)", pos:"noun", gender:"m",
     note:"Masculine noun. Add -a for feminine: la amiga.",
     example:"A: \u00bfQuién es él?\nB: Es mi amigo Carlos.",
     exampleSrc:"A: Who is he?\nB: He is my friend Carlos.",
     funFact:"From Latin 'amicus'. Spanish kept both amigo and the learned form 'amical' (friendly)."},

    {type:"teach", trg:"el abuelo", src:"the grandfather", pos:"noun", gender:"m",
     note:"Masculine noun. La abuela = grandmother.\nLos abuelos = grandparents.",
     example:"A: \u00bfDónde vive tu abuelo?\nB: Mi abuelo vive en Sevilla.",
     exampleSrc:"A: Where does your grandfather live?\nB: My grandfather lives in Seville.",
     funFact:"From Latin 'aviolus', a diminutive of 'avus' (ancestor). The affectionate tone is built into the word."},

    {type:"teach", trg:"el adulto", src:"the adult", pos:"noun", gender:"m",
     note:"Masculine noun. Also used as adjective: una persona adulta.",
     example:"A: \u00bfCuántos adultos hay?\nB: Hay tres adultos y dos niños.",
     exampleSrc:"A: How many adults are there?\nB: There are three adults and two children.",
     funFact:"Straight from Latin 'adultus' (grown up), past participle of 'adolere' (to grow)."},

    {type:"teach", trg:"el alumno", src:"the student", pos:"noun", gender:"m",
     note:"Masculine noun. La alumna = female student.\nUsed in schools, not usually universities.",
     example:"A: \u00bfEres alumno de esta escuela?\nB: Sí, soy alumno de cuarto.",
     exampleSrc:"A: Are you a student at this school?\nB: Yes, I am a fourth-year student.",
     funFact:"From Latin 'alumnus' (nursling), from 'alere' (to nourish). A student is someone who is 'fed' knowledge."},

    {type:"teach", trg:"el anciano", src:"the elderly man", pos:"noun", gender:"m",
     note:"Masculine noun. La anciana = elderly woman.\nMore respectful than 'viejo'.",
     example:"A: \u00bfQuién es ese anciano?\nB: Es el abuelo de María.",
     exampleSrc:"A: Who is that elderly man?\nB: He is María's grandfather.",
     funFact:"From Latin 'ante' (before), via Vulgar Latin 'anteanus'. Someone who came 'before' us in time."},

    {type:"mc",
     q:"\u00bfCómo se dice 'grandfather' en español?",
     opts:["el abuelo","el alumno","el anciano","el adulto"],
     ans:"el abuelo",
     hint:"This word comes from Latin 'aviolus' and refers to a family member, not just any older person."},

    {type:"teach", trg:"el actor", src:"the actor", pos:"noun", gender:"m",
     note:"Masculine noun. La actriz = actress.\nSame as English, from Latin.",
     example:"A: \u00bfQuién es tu actor favorito?\nB: Me gusta Javier Bardem.",
     exampleSrc:"A: Who is your favorite actor?\nB: I like Javier Bardem.",
     funFact:"Nearly identical in dozens of languages. Latin 'actor' means 'one who acts' from 'agere' (to do)."},

    {type:"teach", trg:"la actriz", src:"the actress", pos:"noun", gender:"f",
     note:"Feminine noun. Irregular feminine of 'actor'.\nPlural: las actrices.",
     example:"A: Penélope Cruz es una actriz famosa.\nB: Sí, es muy buena actriz.",
     exampleSrc:"A: Penélope Cruz is a famous actress.\nB: Yes, she is a very good actress.",
     funFact:"The -triz ending comes from Latin -trix, a feminine agent suffix. Compare English 'dominatrix'."},

    {type:"teach", trg:"el abogado", src:"the lawyer", pos:"noun", gender:"m",
     note:"Masculine noun. La abogada = female lawyer.\nFrom Latin 'advocatus'.",
     example:"A: \u00bfA qué te dedicas?\nB: Soy abogado.",
     exampleSrc:"A: What do you do for a living?\nB: I am a lawyer.",
     funFact:"From Latin 'advocatus' (one called to help). The English word 'advocate' shares the same root."},

    {type:"teach", trg:"el agricultor", src:"the farmer", pos:"noun", gender:"m",
     note:"Masculine noun. La agricultora = female farmer.\nFormal word for farmer.",
     example:"A: Mi tío es agricultor.\nB: \u00bfQué cultiva?\nA: Aceitunas y naranjas.",
     exampleSrc:"A: My uncle is a farmer.\nB: What does he grow?\nA: Olives and oranges.",
     funFact:"From Latin 'agricultor', combining 'ager' (field) and 'cultor' (cultivator). Agriculture = field cultivation."},

    {type:"fb",
     s:"Mi {1} vive en el campo y cultiva tomates.",
     a:["agricultor"],
     opts:["agricultor","abogado","actor","alumno"],
     hint:"This person works the land and grows crops for a living.",
     sSrc:"My {1} lives in the countryside and grows tomatoes."},

    {type:"teach", trg:"el artista", src:"the artist", pos:"noun", gender:"m",
     note:"Common gender noun. El/la artista.\nSame form for masculine and feminine.",
     example:"A: \u00bfEres artista?\nB: Sí, soy pintora.",
     exampleSrc:"A: Are you an artist?\nB: Yes, I am a painter.",
     funFact:"From Italian 'artista', which came from Latin 'ars' (art, skill). Words ending in -ista are often gender-neutral."},

    {type:"teach", trg:"el autor", src:"the author", pos:"noun", gender:"m",
     note:"Masculine noun. La autora = female author.\nUsed for books, plays, music.",
     example:"A: \u00bfQuién es el autor de este libro?\nB: Es Cervantes.",
     exampleSrc:"A: Who is the author of this book?\nB: It is Cervantes.",
     funFact:"From Latin 'auctor' (creator, originator). Cervantes is considered the greatest author in Spanish literature."},

    {type:"teach", trg:"el atleta", src:"the athlete", pos:"noun", gender:"m",
     note:"Common gender noun. El/la atleta.\nEnds in -a but can be masculine.",
     example:"A: Rafael Nadal es un gran atleta.\nB: Sí, es increíble.",
     exampleSrc:"A: Rafael Nadal is a great athlete.\nB: Yes, he is incredible.",
     funFact:"From Greek 'athletes' (contestant), from 'athlos' (contest). Spain has a strong tradition in tennis and football."},

    {type:"teach", trg:"el agente", src:"the agent", pos:"noun", gender:"m",
     note:"Common gender noun. El/la agente.\nUsed for police, travel, real estate agents.",
     example:"A: El agente de policía nos ayudó.\nB: Qué amable.",
     exampleSrc:"A: The police officer helped us.\nB: How kind.",
     funFact:"From Latin 'agens' (one who acts). In Spain, 'agente' alone often means police officer in everyday speech."},

    {type:"mc",
     q:"\u00bfCuál es la forma femenina de 'actor'?",
     opts:["la actriz","la actriz","la actora","la actora"],
     ans:"la actriz",
     hint:"Spanish uses an irregular Latin suffix for this feminine form, not the usual -a ending."},

    {type:"teach", trg:"el bebé", src:"the baby", pos:"noun", gender:"m",
     note:"Masculine noun, even for baby girls.\nAlways 'el bebé', never 'la bebé'.",
     example:"A: \u00bfCómo se llama el bebé?\nB: Se llama Lucía.",
     exampleSrc:"A: What is the baby's name?\nB: Her name is Lucía.",
     funFact:"Borrowed from French 'bébé' in the 19th century. Before that, Spanish used 'criatura' or 'nene'."},

    {type:"teach", trg:"amable", src:"kind, friendly", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine.\nEs muy amable = You are very kind.",
     example:"A: Tu abuela es muy amable.\nB: Sí, siempre ayuda a todos.",
     exampleSrc:"A: Your grandmother is very kind.\nB: Yes, she always helps everyone.",
     funFact:"From Latin 'amabilis' (lovable), from 'amare' (to love). Literally means 'worthy of being loved'."},

    {type:"teach", trg:"el aficionado", src:"the fan, enthusiast", pos:"noun", gender:"m",
     note:"Masculine noun. La aficionada = female fan.\nAlso means amateur.",
     example:"A: Soy aficionado al fútbol.\nB: \u00bfDe qué equipo?",
     exampleSrc:"A: I am a football fan.\nB: Which team?",
     funFact:"From 'afición' (passion, hobby). The English word 'aficionado' was borrowed directly from Spanish."},

    {type:"teach", trg:"el amante", src:"the lover", pos:"noun", gender:"m",
     note:"Common gender noun. El/la amante.\nAlso means enthusiast: amante del arte.",
     example:"A: Es un amante de la buena comida.\nB: Sí, le encanta cocinar.",
     exampleSrc:"A: He is a lover of good food.\nB: Yes, he loves to cook.",
     funFact:"Present participle of 'amar' (to love). In modern usage, 'amante de' often means passionate about something."},

    {type:"match", pairs:[
      {trg:"amigo", src:"friend"},
      {trg:"abuelo", src:"grandfather"},
      {trg:"alumno", src:"student"},
      {trg:"abogado", src:"lawyer"},
      {trg:"bebé", src:"baby"}
    ]},

    {type:"fb",
     s:"Mi hermana es {1}. Trabaja en un hospital.",
     a:["adulta"],
     opts:["adulta","alumna","amable","artista"],
     hint:"She is a grown-up person, not a child anymore.",
     sSrc:"My sister is an {1}. She works in a hospital."},

    {type:"mc",
     q:"\u00bfQué significa 'amable'?",
     opts:["tall","fast","kind","strong"],
     ans:"kind",
     hint:"Think of the Latin root 'amare' (to love). This adjective describes someone lovable and friendly."},
  ]
};
export default LESSON_1;
