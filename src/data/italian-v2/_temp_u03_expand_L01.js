// Unit 03 Expansion — Lesson 4: Extended Family & Relationships
// Theme: Extended family, relationships, marital status

const LESSON_4 = {
  id:"itv2_u3l4", title:"La famiglia allargata", icon:"\ud83d\udc65", xp:15, board:true,
  steps:[
    {type:"intro", title:"La famiglia allargata",
     desc:"Learn Italian words for extended family members, relationships, and marital status.",
     goals:["Name extended family members","Talk about relationships and marital status","Use avere (to have) with family"]},

    {type:"teach", trg:"il marito", src:"the husband", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'maritus' (married man).\nPlural: i mariti.",
     example:"A: Come si chiama tuo marito?\nB: Mio marito si chiama Paolo.",
     exampleSrc:"A: What is your husband's name?\nB: My husband's name is Paolo.",
     funFact:"From Latin 'maritus' (married man), related to 'mas' (male). English 'marry,' 'marriage,' and 'marital' all come from this same Latin root. The word has been in use for over 2,000 years."},

    {type:"teach", trg:"la moglie", src:"the wife", pos:"noun", gender:"f",
     note:"Feminine. Irregular: no clear -o/-a pattern with marito.\nPlural: le mogli. From Latin 'mulier' (woman).",
     example:"A: Questa e mia moglie, Giulia.\nB: Piacere, Giulia!",
     exampleSrc:"A: This is my wife, Giulia.\nB: Nice to meet you, Giulia!",
     funFact:"'Moglie' comes from Latin 'mulier' (woman) through a complex sound change. The 'gl' in moglie represents the palatalized l-sound unique to Italian. It is one of the most irregular family words."},

    {type:"teach", trg:"il fidanzato", src:"the boyfriend / fiance (m.)", pos:"noun", gender:"m",
     note:"Masculine. Can mean boyfriend OR fiance depending on context.\nFrom 'fidare' (to trust, to entrust).",
     example:"A: Hai un fidanzato?\nB: Si, si chiama Marco.",
     exampleSrc:"A: Do you have a boyfriend?\nB: Yes, his name is Marco.",
     funFact:"'Fidanzato' covers both 'boyfriend' and 'fiance' in Italian. There is no separate word for each stage. Context tells you which meaning applies. The root 'fid-' (trust/faith) connects love and trust linguistically."},

    {type:"teach", trg:"la fidanzata", src:"the girlfriend / fiancee (f.)", pos:"noun", gender:"f",
     note:"Feminine form of fidanzato. Same dual meaning: girlfriend or fiancee.\nPlural: le fidanzate.",
     example:"A: La tua fidanzata e italiana?\nB: No, e spagnola.",
     exampleSrc:"A: Is your girlfriend Italian?\nB: No, she is Spanish.",
     funFact:"In modern Italian, younger people sometimes use 'il ragazzo' (the boy) and 'la ragazza' (the girl) for boyfriend/girlfriend in casual speech. 'Fidanzato/a' sounds slightly more committed."},

    {type:"teach", trg:"il nipote", src:"the nephew / grandson", pos:"noun", gender:"m",
     note:"Masculine. Dual meaning: nephew OR grandson. Context clarifies.\nFeminine: la nipote (niece/granddaughter).",
     example:"A: Quanti nipoti hai?\nB: Ho tre nipoti: due figli di mia sorella e un figlio di mio fratello.",
     exampleSrc:"A: How many nephews/grandchildren do you have?\nB: I have three: two from my sister and one from my brother.",
     funFact:"'Nipote' is famously ambiguous: it means both nephew/niece AND grandson/granddaughter. English kept two separate words, but Italian merged them. You must use context or specify 'nipote di nonno' or 'nipote di zio.'"},

    {type:"teach", trg:"il suocero", src:"the father-in-law", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'socer.' Feminine: la suocera (mother-in-law).\nPlural: i suoceri (in-laws).",
     example:"A: Tuo suocero e simpatico?\nB: Si, e molto gentile.",
     exampleSrc:"A: Is your father-in-law nice?\nB: Yes, he is very kind.",
     funFact:"'I suoceri' (the in-laws) as a plural refers to both parents-in-law. Italian has a complete set of in-law terms: suocero/a, genero (son-in-law), nuora (daughter-in-law), cognato/a (brother/sister-in-law)."},

    {type:"teach", trg:"il cognato", src:"the brother-in-law", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la cognata (sister-in-law).\nFrom Latin 'cognatus' (related by blood).",
     example:"A: Tuo cognato vive a Milano?\nB: Si, con mia sorella.",
     exampleSrc:"A: Does your brother-in-law live in Milan?\nB: Yes, with my sister.",
     funFact:"Latin 'cognatus' originally meant 'related by birth' (co- + gnatus = born together). Over time, Italian shifted it to mean 'related by marriage.' English 'cognate' (words from the same root) preserves the original meaning."},

    {type:"teach", trg:"sposato", src:"married", pos:"adj", gender:"m",
     note:"Masculine: sposato. Feminine: sposata.\nFrom 'sposare' (to marry). 'Essere sposato' = to be married.",
     example:"A: Sei sposato?\nB: Si, sono sposato da cinque anni.",
     exampleSrc:"A: Are you married?\nB: Yes, I have been married for five years.",
     funFact:"'Sposare' comes from Latin 'sponsare' (to promise), from 'spondere' (to pledge). English 'spouse,' 'sponsor,' and 'respond' all come from this same root of making a solemn promise."},

    {type:"teach", trg:"single", src:"single (unmarried)", pos:"adj", gender:null,
     note:"English loanword used in Italian. Invariable form.\nTraditional Italian: 'celibe' (m), 'nubile' (f).",
     example:"A: Sei sposato o single?\nB: Sono single.",
     exampleSrc:"A: Are you married or single?\nB: I am single.",
     funFact:"Italians have adopted the English word 'single' over the traditional 'celibe/nubile,' which sound too formal or bureaucratic. Italian official forms still use 'celibe/nubile' but nobody says them in conversation."},

    {type:"teach", trg:"il bambino", src:"the child / baby (m.)", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la bambina. Plural: i bambini (also means 'children').\nDiminutive: bambinetto.",
     example:"A: Quanti bambini ci sono?\nB: Tre bambini: due maschi e una femmina.",
     exampleSrc:"A: How many children are there?\nB: Three children: two boys and one girl.",
     funFact:"'Bambino' is used for young children (roughly up to age 10). After that, they become 'ragazzi' (boys/kids). The word may come from 'bambo' (silly, simple), describing the innocence of childhood."},

    {type:"teach", trg:"il ragazzo", src:"the boy / boyfriend", pos:"noun", gender:"m",
     note:"Masculine. Dual meaning: boy/teenager OR boyfriend.\nFeminine: la ragazza. Plural: i ragazzi (guys, everyone).",
     example:"A: Chi e quel ragazzo?\nB: E il ragazzo di Maria.",
     exampleSrc:"A: Who is that boy?\nB: He is Maria's boyfriend.",
     funFact:"'Ragazzi!' is used to address any group of people casually, like 'guys!' or 'everyone!' A teacher might say 'ragazzi!' to a class. It lost its strict age limitation and became a universal informal address."},

    // Quiz steps
    {type:"mc", q:"What is unusual about the word 'nipote'?",
     opts:["It means both nephew/niece and grandson/granddaughter","It has no plural","It is always masculine","It comes from Greek"],
     ans:"It means both nephew/niece and grandson/granddaughter",
     hint:"This word covers two different family relationships. You need context to know which meaning applies."},

    {type:"fb", s:"Mio {1} si chiama Paolo.",
     a:["marito"],
     opts:["marito","padre","fratello","figlio"],
     hint:"This is the male partner in a marriage. From Latin 'maritus.'",
     sSrc:"My {1} is named Paolo."},

    {type:"mc", q:"What does 'fidanzato' mean?",
     opts:["Boyfriend or fiance","Husband","Brother","Friend"],
     ans:"Boyfriend or fiance",
     hint:"This word covers both stages of a romantic relationship before marriage. From 'fidare' (to trust)."},

    {type:"fb", s:"Sei {1} o single?",
     a:["sposato"],
     opts:["sposato","fidanzato","grande","giovane"],
     hint:"This adjective describes someone who has been through a marriage ceremony.",
     sSrc:"Are you {1} or single?"},

    {type:"match", pairs:[
      {trg:"il marito", src:"the husband"},
      {trg:"la moglie", src:"the wife"},
      {trg:"il suocero", src:"the father-in-law"},
      {trg:"il cognato", src:"the brother-in-law"},
      {trg:"il nipote", src:"the nephew/grandson"}
    ]},

    {type:"mc", q:"How do young Italians typically say 'boyfriend'?",
     opts:["Il ragazzo","Il fidanzato","Il marito","L'amico"],
     ans:"Il ragazzo",
     hint:"In casual speech, the word for 'boy' doubles as the informal term for a romantic partner."},

    {type:"fb", s:"Questa e mia {1}, Giulia.",
     a:["moglie"],
     opts:["moglie","madre","sorella","figlia"],
     hint:"You are introducing your married female partner. An irregular word from Latin 'mulier.'",
     sSrc:"This is my {1}, Giulia."},

    {type:"mc", q:"What is 'i suoceri'?",
     opts:["The in-laws (parents)","The grandparents","The siblings","The cousins"],
     ans:"The in-laws (parents)",
     hint:"The plural of 'suocero' (father-in-law). Together the pair means both parents of your spouse."},

    {type:"fb", s:"Quanti {1} hai?",
     a:["bambini"],
     opts:["bambini","ragazzi","fratelli","nipoti"],
     hint:"You are asking about young children. The plural of 'bambino.'",
     sSrc:"How many {1} do you have?"},

    {type:"mc", q:"Why do Italians use 'single' instead of 'celibe'?",
     opts:["Celibe sounds too formal","Single is shorter","Celibe is incorrect","They mean different things"],
     ans:"Celibe sounds too formal",
     hint:"The traditional Italian words feel bureaucratic. The English loanword took over in everyday conversation."}
  ]
};
export default LESSON_4;
