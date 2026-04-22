// L02: Family & Love. Relationships and affection
const LESSON_2 = {
  id:"esv2_a1gap_l2", title:"Amor y familia", icon:"\u2764\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Amor y familia",
     desc:"Learn the language of love, family, and human connections. Essential relationship vocabulary.",
     goals:["Learn 20 words about family and relationships","Express affection in Spanish","Understand masculine/feminine noun pairs"]},

    {type:"teach", trg:"el amor", src:"love", pos:"noun", gender:"m",
     note:"Masculine noun. Mi amor = my love (term of endearment).\nPlural: los amores.",
     example:"A: \u00bfCrees en el amor?\nB: Sí, el amor es lo más importante.",
     exampleSrc:"A: Do you believe in love?\nB: Yes, love is the most important thing.",
     funFact:"From Latin 'amor'. Spanish is one of the Romance languages, literally 'languages of Rome', but the name also evokes love."},

    {type:"teach", trg:"amar", src:"to love", pos:"verb", gender:null,
     note:"Regular -ar verb. Amo, amas, ama, amamos, amáis, aman.\nStronger than 'querer'.",
     example:"A: Te amo.\nB: Yo también te amo.",
     exampleSrc:"A: I love you.\nB: I love you too.",
     funFact:"In Spain, 'te quiero' is more common in daily life. 'Te amo' is reserved for deep, passionate declarations."},

    {type:"teach", trg:"el abrazo", src:"the hug", pos:"noun", gender:"m",
     note:"Masculine noun. Un abrazo = a hug.\nUsed to close letters: 'Un abrazo fuerte'.",
     example:"A: Dame un abrazo.\nB: Claro, ven aquí.",
     exampleSrc:"A: Give me a hug.\nB: Of course, come here.",
     funFact:"Spaniards close emails with 'Un abrazo' the way English speakers write 'Best regards'. Hugging is cultural currency."},

    {type:"teach", trg:"abrazar", src:"to hug", pos:"verb", gender:null,
     note:"Regular -ar verb (with spelling change: z > c before e).\nAbrazo, abrazas, abraza...",
     example:"A: Siempre abrazo a mi madre.\nB: Eso es muy bonito.",
     exampleSrc:"A: I always hug my mother.\nB: That is very nice.",
     funFact:"From 'brazo' (arm), with prefix 'a-'. Literally means 'to take into one's arms'. The verb contains the body part."},

    {type:"teach", trg:"la amistad", src:"friendship", pos:"noun", gender:"f",
     note:"Feminine noun. Abstract noun ending in -tad.\nPlural: las amistades (also means 'friends').",
     example:"A: Nuestra amistad es muy importante.\nB: Sí, somos amigos desde niños.",
     exampleSrc:"A: Our friendship is very important.\nB: Yes, we have been friends since childhood.",
     funFact:"The suffix -tad (from Latin -tatem) creates abstract nouns: amistad, libertad, verdad. All are feminine."},

    {type:"mc",
     q:"\u00bfCómo se cierra una carta informal en español?",
     opts:["Un abrazo","Un amor","Una amistad","Un beso fuerte"],
     ans:"Un abrazo",
     hint:"Think of the physical gesture that Spaniards use to express warmth when saying goodbye."},

    {type:"teach", trg:"besar", src:"to kiss", pos:"verb", gender:null,
     note:"Regular -ar verb. Beso, besas, besa, besamos...\nVery common in Spanish culture.",
     example:"A: En España besamos dos veces.\nB: \u00bfEn las mejillas?",
     exampleSrc:"A: In Spain we kiss twice.\nB: On the cheeks?",
     funFact:"Two kisses on the cheeks (dos besos) is the standard greeting between friends in Spain. Always right cheek first."},

    {type:"teach", trg:"el beso", src:"the kiss", pos:"noun", gender:"m",
     note:"Masculine noun. Dos besos = two kisses (greeting).\nUn besito = a little kiss.",
     example:"A: Le di un beso a mi hija.\nB: \u00bfY a tu hijo?\nA: También.",
     exampleSrc:"A: I gave my daughter a kiss.\nB: And your son?\nA: Him too.",
     funFact:"From Latin 'basium'. The greeting 'dos besos' dates back centuries and varies by region across the Spanish-speaking world."},

    {type:"teach", trg:"la boda", src:"the wedding", pos:"noun", gender:"f",
     note:"Feminine noun. Boda = wedding ceremony/party.\nCasarse = to get married (verb).",
     example:"A: \u00bfVas a la boda de Ana?\nB: Sí, es el sábado.",
     exampleSrc:"A: Are you going to Ana's wedding?\nB: Yes, it is on Saturday.",
     funFact:"From Latin 'vota' (vows). A Spanish wedding traditionally includes a long dinner and dancing until dawn."},

    {type:"teach", trg:"amoroso", src:"loving, affectionate", pos:"adj", gender:null,
     note:"Adjective. Amoroso/amorosa.\nDescribes someone warm and tender.",
     example:"A: Tu madre es muy amorosa.\nB: Sí, nos cuida mucho.",
     exampleSrc:"A: Your mother is very loving.\nB: Yes, she takes great care of us.",
     funFact:"The -oso suffix in Spanish means 'full of': amoroso (full of love), generoso (full of generosity)."},

    {type:"fb",
     s:"En España, los amigos se dan dos {1} para saludar.",
     a:["besos"],
     opts:["besos","abrazos","amores","bodas"],
     hint:"Think about the physical greeting Spaniards give on each cheek when meeting friends.",
     sSrc:"In Spain, friends give each other two {1} to say hello."},

    {type:"teach", trg:"el alma", src:"the soul", pos:"noun", gender:"f",
     note:"Feminine noun, but uses 'el' (el alma, not la alma).\nTo avoid two 'a' sounds together.",
     example:"A: La música llega al alma.\nB: Tienes razón.",
     exampleSrc:"A: Music reaches the soul.\nB: You are right.",
     funFact:"Uses 'el' despite being feminine (like el agua, el ama). This rule applies to feminine nouns starting with stressed 'a'."},

    {type:"teach", trg:"el amanecer", src:"the dawn, sunrise", pos:"noun", gender:"m",
     note:"Masculine noun. Also a verb: amanecer = to dawn.\nAl amanecer = at dawn.",
     example:"A: Me gusta ver el amanecer.\nB: Yo prefiero dormir.",
     exampleSrc:"A: I like to watch the sunrise.\nB: I prefer to sleep.",
     funFact:"Compound of 'a-' + 'manecer' from Latin 'manescere' (to become morning). The verb and noun are the same word."},

    {type:"teach", trg:"la admiración", src:"admiration", pos:"noun", gender:"f",
     note:"Feminine noun. Sentir admiración = to feel admiration.\nFrom admirar (to admire).",
     example:"A: Siento gran admiración por ella.\nB: Es una persona increíble.",
     exampleSrc:"A: I feel great admiration for her.\nB: She is an incredible person.",
     funFact:"The -ción suffix (like English -tion) creates feminine abstract nouns. Almost always feminine in Spanish."},

    {type:"teach", trg:"admirar", src:"to admire", pos:"verb", gender:null,
     note:"Regular -ar verb. Admiro, admiras, admira...\nAdmirar a alguien = to admire someone.",
     example:"A: Admiro mucho a mi abuelo.\nB: \u00bfPor qué?\nA: Es muy valiente.",
     exampleSrc:"A: I really admire my grandfather.\nB: Why?\nA: He is very brave.",
     funFact:"From Latin 'admirari' (to wonder at). The Spanish exclamation marks are called 'signos de admiración'."},

    {type:"mc",
     q:"\u00bfQué artículo usa la palabra 'alma'?",
     opts:["lo alma","el alma","la alma","un alma"],
     ans:"el alma",
     hint:"Some feminine nouns use 'el' when they start with a stressed 'a' sound. The noun itself is still feminine."},

    {type:"teach", trg:"acompañar", src:"to accompany", pos:"verb", gender:null,
     note:"Regular -ar verb. Acompaño, acompañas...\nTe acompaño = I will go with you.",
     example:"A: \u00bfMe acompañas a casa?\nB: Claro, vamos juntos.",
     exampleSrc:"A: Will you walk me home?\nB: Of course, let's go together.",
     funFact:"From 'compañero' (companion), itself from Latin 'cum' + 'panis' (with bread). A companion is someone you share bread with."},

    {type:"teach", trg:"aconsejar", src:"to advise", pos:"verb", gender:null,
     note:"Regular -ar verb. Te aconsejo = I advise you.\nFrom consejo (advice).",
     example:"A: Te aconsejo estudiar más.\nB: Tienes razón.",
     exampleSrc:"A: I advise you to study more.\nB: You are right.",
     funFact:"From Latin 'consiliare'. The 'a-' prefix intensifies the verb. 'Consejo' (advice) is the related noun."},

    {type:"teach", trg:"acariciar", src:"to caress, to stroke", pos:"verb", gender:null,
     note:"Regular -ar verb. Acaricio, acaricias...\nUsed for petting animals too.",
     example:"A: Me gusta acariciar al gato.\nB: A él también le gusta.",
     exampleSrc:"A: I like to stroke the cat.\nB: He likes it too.",
     funFact:"From Italian 'carezza' (caress). The word traveled from Latin 'carus' (dear) through Italian into Spanish."},

    {type:"teach", trg:"apasionar", src:"to be passionate about", pos:"verb", gender:null,
     note:"Regular -ar verb. Often reflexive: me apasiona = I am passionate about.\nMe apasiona la música.",
     example:"A: \u00bfQué te apasiona?\nB: Me apasiona viajar.",
     exampleSrc:"A: What are you passionate about?\nB: I am passionate about traveling.",
     funFact:"From Latin 'passio' (suffering). Passion originally meant intense suffering, then shifted to intense feeling of any kind."},

    {type:"match", pairs:[
      {trg:"amor", src:"love"},
      {trg:"abrazo", src:"hug"},
      {trg:"boda", src:"wedding"},
      {trg:"amistad", src:"friendship"},
      {trg:"beso", src:"kiss"}
    ]},

    {type:"fb",
     s:"Siempre {1} a mis abuelos cuando los veo.",
     a:["abrazo"],
     opts:["abrazo","admiro","acompaño","aconsejo"],
     hint:"Think about the physical gesture of warmth you do with your arms when greeting family.",
     sSrc:"I always {1} my grandparents when I see them."},
  ]
};
export default LESSON_2;
