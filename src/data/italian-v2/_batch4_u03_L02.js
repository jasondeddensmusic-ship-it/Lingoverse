// Batch 4 — Unit 03, Lesson 2: Physical Appearance & Age
const BATCH4_U03_L2 = {
  id:"itv2_u03l_b4_2", title:"Come sei?", icon:"\uD83D\uDC64", xp:15, board:true,
  steps:[
    {type:"intro", title:"Come sei?",
     desc:"Learn to describe people's physical appearance, including hair, eyes, height, and age expressions.",
     goals:["Describe physical appearance","Talk about hair and eye color","Express age using avere"]},

    {type:"teach", trg:"alto", src:"tall", pos:"adj", gender:"m",
     note:"Masculine. Feminine: alta. Opposite: basso (short).\nFrom Latin 'altus' (high).",
     example:"A: Tuo fratello e alto?\nB: Si, e molto alto. Un metro e novanta!",
     exampleSrc:"A: Is your brother tall?\nB: Yes, he is very tall. One meter ninety!",
     funFact:"Italy uses the metric system. Height is in meters and centimeters. 'Un metro e ottanta' (1.80m) is about 5'11''. Italians consider 1.80m+ tall for a man and 1.70m+ tall for a woman."},

    {type:"teach", trg:"basso", src:"short (height)", pos:"adj", gender:"m",
     note:"Masculine. Feminine: bassa. Means short in height, NOT in length.\n'Basso' also means 'low' (voce bassa = low voice).",
     example:"A: Sei alto o basso?\nB: Sono piuttosto basso.",
     exampleSrc:"A: Are you tall or short?\nB: I am rather short.",
     funFact:"'Basso' has multiple meanings: short (height), low (position), deep (voice). 'Il basso' is also the bass instrument or voice. In Naples, 'basso' refers to a ground-floor apartment, historically the poorest housing."},

    {type:"teach", trg:"magro", src:"thin / slim", pos:"adj", gender:"m",
     note:"Masculine. Feminine: magra. Opposite: grasso (fat).\nAlso used for food: 'carne magra' (lean meat).",
     example:"A: Mangia tanto ma e sempre magro.\nB: Che fortuna!",
     exampleSrc:"A: He eats a lot but is always thin.\nB: How lucky!",
     funFact:"In Italian food culture, 'magro' describes lean food. 'Giorno di magro' (lean day) was a Catholic tradition of eating no meat on Fridays. The expression survives in modern Italian even for non-religious contexts."},

    {type:"teach", trg:"robusto", src:"sturdy / well-built", pos:"adj", gender:"m",
     note:"Masculine. Feminine: robusta. More polite than 'grasso.'\nFrom Latin 'robustus' (strong like an oak).",
     example:"A: Come e tuo nonno?\nB: E robusto e forte.",
     exampleSrc:"A: What is your grandfather like?\nB: He is sturdy and strong.",
     funFact:"Italians avoid saying 'grasso' (fat) directly. Polite alternatives include 'robusto' (sturdy), 'in carne' (fleshy), or 'pieno' (full). Italian culture values diplomatic language when describing bodies."},

    {type:"teach", trg:"i capelli", src:"the hair (on head)", pos:"noun", gender:"m",
     note:"Masculine plural. Always plural in Italian when referring to head hair.\nSingular 'capello' = a single hair strand.",
     example:"A: Di che colore sono i tuoi capelli?\nB: Ho i capelli castani.",
     exampleSrc:"A: What color is your hair?\nB: I have brown hair.",
     funFact:"Italian distinguishes 'i capelli' (head hair) from 'i peli' (body hair). Using the wrong one is embarrassing. 'Capelli' comes from Latin 'capillus.' The expression 'per un capello' (by a hair) means 'barely.'"},

    {type:"teach", trg:"biondo", src:"blond", pos:"adj", gender:"m",
     note:"Masculine. Feminine: bionda. Common for hair color.\nFrom Germanic 'blund' (mixed color).",
     example:"A: E bionda tua sorella?\nB: Si, ha i capelli biondi.",
     exampleSrc:"A: Is your sister blond?\nB: Yes, she has blond hair.",
     funFact:"Despite stereotypes, not all Italians have dark hair. Northern Italy (especially Friuli, Trentino, Veneto) has many blonds due to Celtic and Germanic heritage. 'Biondo' was borrowed from Germanic languages during the Middle Ages."},

    {type:"teach", trg:"castano", src:"brown (hair/eyes)", pos:"adj", gender:"m",
     note:"Masculine. Feminine: castana. Used specifically for hair and eye color.\nFrom 'castagna' (chestnut).",
     example:"A: Ha gli occhi castani.\nB: Come la maggior parte degli italiani!",
     exampleSrc:"A: He has brown eyes.\nB: Like most Italians!",
     funFact:"'Castano' comes from 'castagna' (chestnut) and is used only for hair and eyes. For other things, use 'marrone' (brown). This distinction does not exist in English. Most Italians have 'capelli castani.'"},

    {type:"teach", trg:"moro", src:"dark-haired / brunette", pos:"adj", gender:"m",
     note:"Masculine. Feminine: mora. Specifically for dark hair and complexion.\nFrom Latin 'Maurus' (Moorish).",
     example:"A: Preferisci i ragazzi biondi o mori?\nB: Preferisco i mori!",
     exampleSrc:"A: Do you prefer blond or dark-haired guys?\nB: I prefer dark-haired ones!",
     funFact:"'Moro' originally referred to North Africans (Moors). Over time, it lost its ethnic meaning and simply describes dark coloring. Venice's famous Othello is called 'il Moro di Venezia' (the Moor of Venice)."},

    {type:"teach", trg:"gli occhi", src:"the eyes", pos:"noun", gender:"m",
     note:"Masculine plural. Singular: l'occhio.\n'Occhi azzurri' = blue eyes, 'occhi verdi' = green eyes.",
     example:"A: Hai gli occhi verdi?\nB: No, ho gli occhi azzurri.",
     exampleSrc:"A: Do you have green eyes?\nB: No, I have blue eyes.",
     funFact:"'Occhio!' (eye!) is a common warning meaning 'Watch out!' The plural 'occhi' has an unusual spelling: the 'ch' keeps the hard 'k' sound. Without it, 'oci' would sound like 'ochi' with a soft sound."},

    {type:"teach", trg:"la barba", src:"the beard", pos:"noun", gender:"f",
     note:"Feminine. 'Portare la barba' = to wear/have a beard.\n'Farsi la barba' = to shave.",
     example:"A: Ti piace la barba?\nB: Si, ma mio marito si fa la barba ogni giorno.",
     exampleSrc:"A: Do you like beards?\nB: Yes, but my husband shaves every day.",
     funFact:"'Che barba!' (what a beard!) means 'how boring!' in colloquial Italian. The connection is that a long beard suggests tedious waiting. 'Barbiere' (barber) comes from the same root."},

    {type:"teach", trg:"i baffi", src:"the mustache", pos:"noun", gender:"m",
     note:"Masculine plural. Always plural in Italian.\n'Portare i baffi' = to have a mustache.",
     example:"A: Tuo nonno ha i baffi?\nB: Si, baffi grandi e bianchi!",
     exampleSrc:"A: Does your grandfather have a mustache?\nB: Yes, big white ones!",
     funFact:"In Italy, the mustache has cultural significance. Many Italian men of older generations wore 'i baffi.' 'Ridere sotto i baffi' (to laugh under one's mustache) means to laugh secretly or smugly."},

    {type:"teach", trg:"giovane", src:"young", pos:"adj", gender:null,
     note:"Same form for masculine and feminine. Opposite: vecchio/anziano.\n'I giovani' = young people.",
     example:"A: La tua insegnante e giovane?\nB: Si, ha solo trent'anni.",
     exampleSrc:"A: Is your teacher young?\nB: Yes, she is only thirty.",
     funFact:"'Giovane' comes from Latin 'juvenis,' the same root as English 'juvenile.' Italian culture deeply respects age: calling someone 'anziano' (elderly) is more polite than 'vecchio' (old), which can sound rude."},

    {type:"teach", trg:"anziano", src:"elderly / senior", pos:"adj", gender:"m",
     note:"Masculine. Feminine: anziana. More polite than 'vecchio.'\nAlso used as a noun: 'gli anziani' (the elderly).",
     example:"A: La mia vicina e anziana ma molto attiva.\nB: Quanti anni ha?",
     exampleSrc:"A: My neighbor is elderly but very active.\nB: How old is she?",
     funFact:"Italian culture traditionally venerates the elderly. 'Gli anziani' often live with family, not in care homes. The phrase 'rispetto per gli anziani' (respect for the elderly) is deeply ingrained in Italian values."},

    {type:"teach", trg:"quanti anni hai?", src:"how old are you? (informal)", pos:"verb", gender:null,
     note:"Literally: how many years do you have?\nItalian uses 'avere' (to have) for age, not 'essere' (to be).",
     example:"A: Quanti anni hai?\nB: Ho venticinque anni.",
     exampleSrc:"A: How old are you?\nB: I am twenty-five years old.",
     funFact:"Unlike English 'I am 25 years old,' Italian says 'ho 25 anni' (I have 25 years). This reflects a different conceptualization: you accumulate years like possessions, rather than being defined by them."},

    {type:"teach", trg:"somigliare", src:"to look alike / to resemble", pos:"verb", gender:null,
     note:"Synonym of 'assomigliare.' Slightly more informal.\n'Si somigliano molto' = they look very alike.",
     example:"A: Voi due vi somigliate molto!\nB: Si, tutti dicono cosi!",
     exampleSrc:"A: You two look very much alike!\nB: Yes, everyone says that!",
     funFact:"Italian has two verbs for 'to resemble': 'somigliare' and 'assomigliare.' Both are correct and interchangeable. 'Somigliare' is slightly shorter and more colloquial. Both come from Latin 'similis' (similar)."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'brown hair' in italiano?",
     opts:["Capelli castani","Capelli marroni","Capelli bruni","Capelli scuri"],
     ans:"Capelli castani",
     hint:"This color word comes from 'castagna' (chestnut) and is used only for hair and eyes."},

    {type:"fb", s:"{1} anni hai? Ho trent'anni.",
     a:["Quanti"], opts:["Quanti","Come","Che","Quale"],
     hint:"This question word asks about quantity and starts the Italian age question.",
     sSrc:"How old are you? I am thirty years old."},

    {type:"match", pairs:[
      {trg:"alto", src:"tall"},
      {trg:"basso", src:"short"},
      {trg:"magro", src:"thin"},
      {trg:"biondo", src:"blond"},
      {trg:"moro", src:"dark-haired"}
    ]},

    {type:"mc", q:"Perche in italiano si dice 'ho 25 anni' e non 'sono 25 anni'?",
     opts:["Italian uses avere (to have) for age, not essere (to be)","It is a fixed expression with no logic","Both forms are correct","Sono is only for older people"],
     ans:"Italian uses avere (to have) for age, not essere (to be)",
     hint:"A... in I... is something you 'have,' not something you 'are.'"},

    {type:"fb", s:"Ha gli {1} verdi e i capelli rossi.",
     a:["occhi"], opts:["occhi","baffi","capelli","barba"],
     hint:"This is the word for the body part you see with.",
     sSrc:"She has green {1} and red hair."},

    {type:"mc", q:"Qual e il modo educato per dire che qualcuno e vecchio?",
     opts:["Anziano","Vecchio","Robusto","Magro"],
     ans:"Anziano",
     hint:"This politer word is preferred over the more blunt alternative in conversation."},

    {type:"fb", s:"Mio fratello e molto {1}, ha i capelli neri e la pelle scura.",
     a:["moro"], opts:["moro","biondo","castano","rosso"],
     hint:"This word describes someone with very dark hair and complexion.",
     sSrc:"My brother is very {1}, he has black hair and dark skin."},

    {type:"mc", q:"Cosa significa 'che barba!'?",
     opts:["How boring!","What a beard!","How annoying!","What a mess!"],
     ans:"How boring!",
     hint:"This colloquial expression uses the word for 'beard' in an unexpected way."}
  ]
};
export default BATCH4_U03_L2;
