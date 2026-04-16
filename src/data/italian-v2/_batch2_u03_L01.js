// Unit 03 Batch 2 — Lesson 1: Ages, Life Stages & Family Verbs
const BATCH2_U03_L1 = {
  id:"itv2_u03l_b2_1", title:"Eta e vita", icon:"\ud83c\udf82", xp:15, board:true,
  steps:[
    {type:"intro", title:"Eta e vita",
     desc:"Learn to talk about ages, life stages, and the verbs Italians use to describe family relationships.",
     goals:["Ask and state someone's age","Name life stages","Use avere (to have) for age and family"]},

    {type:"teach", trg:"l'eta", src:"the age", pos:"noun", gender:"f",
     note:"Feminine. Invariable plural: le eta.\nFrom Latin 'aetas' (age, lifetime).",
     example:"A: Qual e la tua eta?\nB: Ho venticinque anni.",
     exampleSrc:"A: What is your age?\nB: I am twenty-five years old.",
     funFact:"Italian asks for age using 'avere' (to have), not 'essere' (to be): 'Quanti anni hai?' (How many years do you have?). You 'have' years in Italian. This is standard across Romance languages."},

    {type:"teach", trg:"avere", src:"to have", pos:"verb", gender:null,
     note:"Irregular verb. Present: ho, hai, ha, abbiamo, avete, hanno.\nUsed for age, possessions, and many expressions.",
     example:"A: Hai fratelli?\nB: Si, ho due fratelli e una sorella.",
     exampleSrc:"A: Do you have brothers?\nB: Yes, I have two brothers and a sister.",
     funFact:"'Avere' is used in many expressions where English uses 'to be': avere fame (to be hungry), avere sete (to be thirsty), avere paura (to be afraid), avere ragione (to be right). You 'have' feelings in Italian."},

    {type:"teach", trg:"ho", src:"I have", pos:"verb", gender:null,
     note:"First person singular of avere. The 'h' is silent.\nNever confused with 'o' (or) because of the h.",
     example:"A: Quanti anni hai?\nB: Ho trent'anni.",
     exampleSrc:"A: How old are you?\nB: I am thirty years old.",
     funFact:"The silent 'h' in 'ho' exists only in writing to distinguish it from 'o' (or). In speech, they sound identical. This is one of the most common spelling errors Italian schoolchildren make."},

    {type:"teach", trg:"hai", src:"you have (informal)", pos:"verb", gender:null,
     note:"Second person singular of avere. Silent 'h.'\n'Hai fame?' = Are you hungry? (literally: Do you have hunger?).",
     example:"A: Hai figli?\nB: No, non ho figli.",
     exampleSrc:"A: Do you have children?\nB: No, I do not have children.",
     funFact:"The 'h' in 'hai' distinguishes it from 'ai' (to the, plural contraction). 'Hai dato i libri ai ragazzi?' (Did you give the books to the kids?) shows both words in one sentence."},

    {type:"teach", trg:"ha", src:"he/she has / you have (formal)", pos:"verb", gender:null,
     note:"Third person singular of avere. Also formal 'you' (Lei).\nSilent 'h' distinguishes from 'a' (to/at).",
     example:"A: Suo figlio ha cinque anni.\nB: Come passa il tempo!",
     exampleSrc:"A: His/her son is five years old.\nB: How time flies!",
     funFact:"Three of avere's forms start with silent 'h' (ho, hai, ha, hanno). This 'h' has no sound. It only serves as a written marker. Italian children learn the 'h rule' as one of their first spelling lessons."},

    {type:"teach", trg:"il neonato", src:"the newborn / baby", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la neonata.\nCompound: neo (new) + nato (born).",
     example:"A: Avete un neonato?\nB: Si, ha due mesi.",
     exampleSrc:"A: Do you have a newborn?\nB: Yes, she is two months old.",
     funFact:"'Neo' means 'new' (from Greek) and 'nato' means 'born' (from Latin 'natus'). The word is perfectly transparent: newly born. English 'neonatal' uses exactly the same roots from the medical field."},

    {type:"teach", trg:"l'adolescente", src:"the teenager", pos:"noun", gender:null,
     note:"Same form for masculine and feminine. Uses l' before vowel.\nFrom Latin 'adolescere' (to grow up).",
     example:"A: Hai figli adolescenti?\nB: Si, mia figlia ha quindici anni.",
     exampleSrc:"A: Do you have teenage children?\nB: Yes, my daughter is fifteen years old.",
     funFact:"From Latin 'adolescere' (to grow up), which also gave English 'adolescent.' The related 'adulto' (adult) means someone who HAS grown up. Both words are about the process of growing."},

    {type:"teach", trg:"l'adulto", src:"the adult", pos:"noun", gender:"m",
     note:"Masculine. Feminine: l'adulta. Uses l' before vowel.\nFrom Latin 'adultus' (grown up).",
     example:"A: I bambini entrano gratis. Gli adulti pagano dieci euro.\nB: Va bene!",
     exampleSrc:"A: Children enter free. Adults pay ten euros.\nB: All right!",
     funFact:"From the past participle of Latin 'adolescere' (to grow up). An 'adulto' is someone who has finished growing. In Italy, legal adulthood starts at 18 (maggiorenne), when you can vote and drive."},

    {type:"teach", trg:"anziano", src:"elderly", pos:"adj", gender:"m",
     note:"Masculine: anziano. Feminine: anziana.\nMore respectful than 'vecchio' for describing people.",
     example:"A: La signora e anziana ma molto attiva.\nB: Si, ha ottant'anni e cammina ogni giorno!",
     exampleSrc:"A: The lady is elderly but very active.\nB: Yes, she is eighty and walks every day!",
     funFact:"'Anziano' comes from Latin 'ante' (before), meaning someone who came before. It carries respect. 'Vecchio' (old) can sound blunt for people. Use 'anziano' to be polite and respectful."},

    {type:"teach", trg:"nascere", src:"to be born", pos:"verb", gender:null,
     note:"Irregular past participle: nato/nata. Uses 'essere' in the past.\n'Sono nato a Roma' = I was born in Rome.",
     example:"A: Dove sei nato?\nB: Sono nato a Firenze nel 1990.",
     exampleSrc:"A: Where were you born?\nB: I was born in Florence in 1990.",
     funFact:"Italian uses essere (to be) with nascere: 'sono nato' (I was born), not 'ho nato.' A small group of Italian verbs of movement and change use essere instead of avere in past tenses."},

    {type:"teach", trg:"vivere", src:"to live", pos:"verb", gender:null,
     note:"Irregular past: 'ho vissuto.' Present: vivo, vivi, vive.\n'Vivere a Roma' = to live in Rome.",
     example:"A: Dove vivi?\nB: Vivo a Milano da cinque anni.",
     exampleSrc:"A: Where do you live?\nB: I have lived in Milan for five years.",
     funFact:"'Vivere' comes from Latin 'vivere.' English 'vivid,' 'survive,' and 'revive' all share this root. 'La dolce vita' (the sweet life) is perhaps the most famous Italian phrase using this word family."},

    {type:"teach", trg:"abitare", src:"to live (reside)", pos:"verb", gender:null,
     note:"Regular -are verb. More specific than vivere: it means to reside.\n'Abito in via Roma' = I live on Roma street.",
     example:"A: Dove abiti?\nB: Abito in centro, vicino alla piazza.",
     exampleSrc:"A: Where do you live?\nB: I live downtown, near the square.",
     funFact:"'Vivere' is broader (to live, to exist). 'Abitare' specifically means to reside at an address. 'Dove vivi?' asks about your life. 'Dove abiti?' asks for your address. Both are common."},

    {type:"teach", trg:"crescere", src:"to grow (up)", pos:"verb", gender:null,
     note:"Irregular past: 'sono cresciuto.' Present: cresco, cresci, cresce.\nUses essere in compound tenses.",
     example:"A: Dove sei cresciuto?\nB: Sono cresciuto in campagna.",
     exampleSrc:"A: Where did you grow up?\nB: I grew up in the countryside.",
     funFact:"From Latin 'crescere' (to grow). English 'crescent' (the growing moon), 'increase,' and 'decrease' all share this root. The crescent moon shape symbolizes growth."},

    {type:"teach", trg:"il/la gemello/a", src:"the twin", pos:"noun", gender:"m",
     note:"Masculine: il gemello. Feminine: la gemella.\nFrom Latin 'gemellus' (twin, double).",
     example:"A: Siete gemelli?\nB: Si, siamo gemelli identici!",
     exampleSrc:"A: Are you twins?\nB: Yes, we are identical twins!",
     funFact:"From Latin 'gemellus' (twin). The zodiac sign Gemini uses the same root. Italy has a slightly higher twin birth rate than the global average. The word also means 'cufflink' in Italian fashion."},

    // Quiz steps
    {type:"mc", q:"Come si chiede l'eta in italiano?",
     opts:["Quanti anni hai?","Quanto sei vecchio?","Che eta sei?","Come sei grande?"],
     ans:"Quanti anni hai?",
     hint:"Italians 'have' years, they do not 'are' years. The question literally asks 'how many years do you have?'"},

    {type:"fb", s:"{1} due fratelli e una sorella.",
     a:["Ho"],
     opts:["Ho","Sono","Hai","Ha"],
     hint:"First person of 'avere.' The silent 'h' distinguishes it from 'o' (or) in writing.",
     sSrc:"I {1} two brothers and a sister."},

    {type:"mc", q:"Which word is more respectful for describing elderly people?",
     opts:["Anziano","Vecchio","Grande","Alto"],
     ans:"Anziano",
     hint:"This word comes from Latin 'ante' (before). It carries respect for someone who came before, unlike the blunter alternative."},

    {type:"fb", s:"Dove sei {1}?",
     a:["nato"],
     opts:["nato","vivere","abitare","crescere"],
     hint:"Past participle of 'nascere.' With 'sei,' it asks where someone came into the world.",
     sSrc:"Where were you {1}?"},

    {type:"match", pairs:[
      {trg:"avere", src:"to have"},
      {trg:"nascere", src:"to be born"},
      {trg:"vivere", src:"to live"},
      {trg:"crescere", src:"to grow up"},
      {trg:"abitare", src:"to reside"}
    ]},

    {type:"mc", q:"What verb does Italian use with 'nascere' in past tenses?",
     opts:["Essere (to be)","Avere (to have)","Fare (to do)","Stare (to stay)"],
     ans:"Essere (to be)",
     hint:"A small group of verbs of movement and change use this auxiliary instead of 'avere.' 'Sono nato' not 'ho nato.'"},

    {type:"fb", s:"Mia figlia e un'{1}. Ha quindici anni.",
     a:["adolescente"],
     opts:["adolescente","adulta","anziana","neonata"],
     hint:"A person between childhood and adulthood, roughly 13-19 years old.",
     sSrc:"My daughter is a {1}. She is fifteen years old."},

    {type:"mc", q:"What is the difference between 'vivere' and 'abitare'?",
     opts:["Vivere = live (exist), abitare = reside (address)","They are identical","Vivere is formal only","Abitare means to work"],
     ans:"Vivere = live (exist), abitare = reside (address)",
     hint:"One asks about your life in general, the other specifically about where you r.... Both translate to 'l....'"}
  ]
};
export default BATCH2_U03_L1;
