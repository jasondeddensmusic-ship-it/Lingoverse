// L12: Appearance & Descriptions - Physical traits, age, and personal style
const LESSON_12 = {
  id:"esv2_b1gap_l12", title:"Aspecto y descripciones", icon:"\u{1F9D1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Aspecto y descripciones",
     desc:"Describe people and things. Learn vocabulary for age, physical traits, and personal attributes.",
     goals:["Learn 20 description and appearance words","Describe people and their qualities","Express nuanced physical and character traits"]},

    {type:"teach", trg:"anciano", src:"elderly", pos:"adj", gender:null,
     note:"Adjective/noun. Anciano/anciana.\nMore respectful than 'viejo' for people.",
     example:"A: La residencia cuida a personas ancianas.\nB: Es un servicio muy necesario.",
     exampleSrc:"A: The care home looks after elderly people.\nB: It is a very necessary service.",
     funFact:"From Latin 'ante' (before), via 'anteanus'. Someone who came 'before' in time. In formal texts, 'persona mayor' is now preferred over 'anciano'."},

    {type:"teach", trg:"adolescente", src:"adolescent, teenage", pos:"adj", gender:null,
     note:"Adjective/noun. Same form for both genders.\nLa adolescencia = adolescence.",
     example:"A: Tiene dos hijos adolescentes.\nB: Esa es una edad dif\u00edcil.",
     exampleSrc:"A: She has two teenage children.\nB: That is a difficult age.",
     funFact:"From Latin 'adolescens' (growing up), present participle of 'adolescere'. Related to 'adulto': an adolescent is still growing, an adult has finished."},

    {type:"teach", trg:"adoptivo", src:"adoptive, adopted", pos:"adj", gender:null,
     note:"Adjective. Adoptivo/adoptiva.\nPadre adoptivo = adoptive father. Hijo adoptivo = adopted son.",
     example:"A: Es su hijo adoptivo.\nB: Le quieren como a un hijo biol\u00f3gico.",
     exampleSrc:"A: He is their adopted son.\nB: They love him like a biological child.",
     funFact:"From Latin 'adoptivus'. Interesting: 'hijo adoptivo de la ciudad' is an honor given to distinguished non-natives, making them 'adopted children' of the city."},

    {type:"teach", trg:"adaptable", src:"adaptable", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nCapaz de adaptarse a nuevas situaciones.",
     example:"A: Es una persona muy adaptable.\nB: S\u00ed, se lleva bien en cualquier sitio.",
     exampleSrc:"A: She is a very adaptable person.\nB: Yes, she gets along well anywhere.",
     funFact:"From Latin 'adaptare' (to fit). The '-able' suffix (from Latin '-abilis') means 'capable of being'. Spanish and English share dozens of '-able' words."},

    {type:"teach", trg:"arisco", src:"unfriendly, standoffish", pos:"adj", gender:null,
     note:"Adjective. Arisco/arisca. Hard to approach.\nOften used for animals and shy people.",
     example:"A: El gato es un poco arisco.\nB: Dale tiempo, ya se acostumbrar\u00e1.",
     exampleSrc:"A: The cat is a bit standoffish.\nB: Give him time, he will get used to it.",
     funFact:"Possibly related to 'erizo' (hedgehog), an animal that is literally prickly and hard to approach. Someone 'arisco' has a similar defensive nature."},

    {type:"teach", trg:"at\u00edpico", src:"atypical, unusual", pos:"adj", gender:null,
     note:"Adjective. At\u00edpico/at\u00edpica.\nA- (not) + t\u00edpico (typical).",
     example:"A: Este invierno ha sido at\u00edpico.\nB: S\u00ed, no ha nevado nada.",
     exampleSrc:"A: This winter has been atypical.\nB: Yes, it has not snowed at all.",
     funFact:"The prefix 'a-' negates the adjective, from Greek. Other examples: anormal, asim\u00e9trico, at\u00f3nico. Very productive in scientific vocabulary."},

    {type:"mc",
     q:"\u00bfC\u00f3mo describes a una persona que no es f\u00e1cil de tratar?",
     opts:["arisca","adaptable","adolescente","adoptiva"],
     ans:"arisca",
     hint:"This adjective describes someone defensive and hard to approach, possibly related to the word for hedgehog."},

    {type:"teach", trg:"buenísimo", src:"extremely good, amazing", pos:"adj", gender:null,
     note:"Superlative adjective. Buen\u00edsimo/buen\u00edsima.\nAbsolute superlative of 'bueno'.",
     example:"A: La paella estaba buen\u00edsima.\nB: Gracias, es la receta de mi madre.",
     exampleSrc:"A: The paella was amazing.\nB: Thanks, it is my mother's recipe.",
     funFact:"The '-\u00edsimo' suffix creates absolute superlatives: bueno > buen\u00edsimo, rico > riqu\u00edsimo, largo > largu\u00edsimo. Note spelling changes before '-\u00edsimo'."},

    {type:"teach", trg:"el admirador", src:"the admirer, fan", pos:"noun", gender:"m",
     note:"Masculine noun. La admiradora = female admirer.\nSomeone who admires another.",
     example:"A: Tiene muchos admiradores en las redes sociales.\nB: Su trabajo es muy bueno.",
     exampleSrc:"A: She has many admirers on social media.\nB: Her work is very good.",
     funFact:"From 'admirar' (to admire), from Latin 'admirari' (to wonder at). An 'admirador secreto' (secret admirer) is a classic romantic trope."},

    {type:"teach", trg:"el apodo", src:"the nickname", pos:"noun", gender:"m",
     note:"Masculine noun. An informal name.\nPoner un apodo = to give a nickname.",
     example:"A: \u00bfCu\u00e1l es tu apodo?\nB: Me llaman Pepe, aunque me llamo Jos\u00e9.",
     exampleSrc:"A: What is your nickname?\nB: They call me Pepe, although my name is Jos\u00e9.",
     funFact:"From Latin 'appodium' (support, comparison). Spanish has famous nickname pairs: Francisco > Paco, Jos\u00e9 > Pepe, Dolores > Lola, Concepci\u00f3n > Concha."},

    {type:"teach", trg:"el atributo", src:"the attribute, trait", pos:"noun", gender:"m",
     note:"Masculine noun. A quality or characteristic.\nAtributos f\u00edsicos = physical attributes.",
     example:"A: La paciencia es su mejor atributo.\nB: S\u00ed, nunca pierde la calma.",
     exampleSrc:"A: Patience is his best attribute.\nB: Yes, he never loses his cool.",
     funFact:"From Latin 'attributum' (thing assigned). In grammar, an 'atributo' is the complement of a copulative verb: 'Ella ES inteligente'."},

    {type:"fb",
     s:"La comida estaba {1}, repetimos dos veces.",
     a:["buen\u00edsima"],
     opts:["buen\u00edsima","at\u00edpica","arisca","adaptable"],
     hint:"The absolute superlative form of 'buena', meaning extremely good.",
     sSrc:"The food was {1}, we had seconds twice."},

    {type:"teach", trg:"el aldeano", src:"the villager", pos:"noun", gender:"m",
     note:"Masculine/adjective. Aldeano/aldeana.\nFrom 'aldea' (village). Also means rustic.",
     example:"A: Los aldeanos celebran la fiesta del pueblo.\nB: Es una tradici\u00f3n muy bonita.",
     exampleSrc:"A: The villagers celebrate the town festival.\nB: It is a very beautiful tradition.",
     funFact:"From 'aldea' (village), from Arabic 'ad-day'a' (the estate). 'Aldeano' can be affectionate or slightly patronizing depending on context."},

    {type:"teach", trg:"an\u00f3nimo", src:"anonymous", pos:"adj", gender:null,
     note:"Adjective. An\u00f3nimo/an\u00f3nima.\nAlso noun: un an\u00f3nimo = an anonymous letter.",
     example:"A: La donaci\u00f3n fue an\u00f3nima.\nB: Qu\u00e9 generoso. No busca reconocimiento.",
     exampleSrc:"A: The donation was anonymous.\nB: How generous. They do not seek recognition.",
     funFact:"From Greek 'anonymos' (nameless): 'a-' (without) + 'onoma' (name). Alcoholics Anonymous is 'Alc\u00f3holicos An\u00f3nimos' in Spanish."},

    {type:"teach", trg:"absorbente", src:"absorbent, absorbing", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nAlso figuratively: una persona absorbente = controlling.",
     example:"A: Necesito papel absorbente para la cocina.\nB: Hay en el armario de arriba.",
     exampleSrc:"A: I need absorbent paper for the kitchen.\nB: There is some in the upper cupboard.",
     funFact:"From Latin 'absorbens' (sucking in). The figurative meaning for a controlling person who 'absorbs' all your time is uniquely vivid."},

    {type:"teach", trg:"alimenticio", src:"food-related, nutritional", pos:"adj", gender:null,
     note:"Adjective. Alimenticio/alimenticia.\nIndustria alimenticia = food industry.",
     example:"A: Los h\u00e1bitos alimenticios son importantes.\nB: S\u00ed, la dieta afecta la salud.",
     exampleSrc:"A: Eating habits are important.\nB: Yes, diet affects health.",
     funFact:"From Latin 'alimentum' (food, nourishment). 'Seguridad alimentaria' (food safety/security) is a major policy topic in the EU and Spain."},

    {type:"mc",
     q:"\u00bfC\u00f3mo se llama un nombre informal que usan tus amigos?",
     opts:["un apodo","un atributo","un admirador","un aldeano"],
     ans:"un apodo",
     hint:"An informal name given to someone instead of their real name, like Pepe for Jos\u00e9."},

    {type:"teach", trg:"arduo", src:"arduous, difficult", pos:"adj", gender:null,
     note:"Adjective. Arduo/ardua. Formal word for difficult.\nUna tarea ardua = an arduous task.",
     example:"A: Fue un camino arduo, pero lo logramos.\nB: El esfuerzo vali\u00f3 la pena.",
     exampleSrc:"A: It was an arduous path, but we made it.\nB: The effort was worth it.",
     funFact:"From Latin 'arduus' (steep, difficult). Originally described steep terrain, then extended to any difficult undertaking. More literary than 'dif\u00edcil'."},

    {type:"teach", trg:"autodidacta", src:"self-taught", pos:"adj", gender:null,
     note:"Adjective/noun. Same form for both genders.\nUn/una autodidacta = a self-taught person.",
     example:"A: Es un m\u00fasico autodidacta.\nB: Nunca fue a una escuela de m\u00fasica.",
     exampleSrc:"A: He is a self-taught musician.\nB: He never went to a music school.",
     funFact:"From Greek 'auto' (self) + 'didaktos' (taught). Famous autodidactas include Frida Kahlo in painting and Quentin Tarantino in filmmaking."},

    {type:"fb",
     s:"No sab\u00edamos qui\u00e9n envi\u00f3 las flores. La tarjeta era {1}.",
     a:["an\u00f3nima"],
     opts:["an\u00f3nima","adoptiva","absorbente","alimenticia"],
     hint:"An adjective meaning 'without a name', when the sender's identity is unknown.",
     sSrc:"We did not know who sent the flowers. The card was {1}."},

    {type:"match", pairs:[
      {trg:"anciano", src:"elderly"},
      {trg:"apodo", src:"nickname"},
      {trg:"atributo", src:"attribute"},
      {trg:"autodidacta", src:"self-taught"},
      {trg:"arduo", src:"arduous"}
    ]}
  ]
};
export default LESSON_12;
