// Unit 03 Expansion — Lesson 5: Physical Descriptions & Colors
// Theme: Hair, eyes, height details, colors for describing people

const LESSON_5 = {
  id:"itv2_u3l5", title:"I colori e l'aspetto", icon:"\ud83c\udfa8", xp:15, board:true,
  steps:[
    {type:"intro", title:"I colori e l'aspetto",
     desc:"Learn colors and detailed physical description vocabulary to describe people's appearance.",
     goals:["Name basic colors in Italian","Describe hair and eye color","Build detailed physical descriptions"]},

    {type:"teach", trg:"i capelli", src:"the hair (plural)", pos:"noun", gender:"m",
     note:"Always plural in Italian: i capelli. Singular 'capello' = one hair strand.\n'Avere i capelli...' = to have... hair.",
     example:"A: Di che colore sono i tuoi capelli?\nB: Ho i capelli neri.",
     exampleSrc:"A: What color is your hair?\nB: I have black hair.",
     funFact:"Italian uses the plural 'i capelli' where English uses the singular 'hair.' Saying 'il capello' means one single strand. This plural-for-a-mass concept differs from English. 'Capello' comes from Latin 'capillus.'"},

    {type:"teach", trg:"gli occhi", src:"the eyes", pos:"noun", gender:"m",
     note:"Masculine plural. Singular: l'occhio.\nIrregular plural: occhio to occhi (not occhii).",
     example:"A: Di che colore sono i tuoi occhi?\nB: Ho gli occhi verdi.",
     exampleSrc:"A: What color are your eyes?\nB: I have green eyes.",
     funFact:"From Latin 'oculus.' English 'ocular' and 'binoculars' share this root. The plural 'gli occhi' (not 'gli occhii') is irregular. 'Occhiali' (eyeglasses) is a related word, literally 'eye things.'"},

    {type:"teach", trg:"biondo", src:"blond", pos:"adj", gender:"m",
     note:"Masculine: biondo. Feminine: bionda.\nSpecifically for hair color. From Germanic 'blund.'",
     example:"A: Tua sorella e bionda?\nB: Si, ha i capelli biondi e gli occhi azzurri.",
     exampleSrc:"A: Is your sister blond?\nB: Yes, she has blond hair and blue eyes.",
     funFact:"'Biondo' entered Italian from Germanic languages during the barbarian invasions. Northern Italians are more likely to be biond than southerners, reflecting centuries of Germanic and Celtic influence."},

    {type:"teach", trg:"castano", src:"brown (hair/eyes)", pos:"adj", gender:"m",
     note:"Masculine: castano. Feminine: castana.\nSpecifically for hair and eyes. From 'castagna' (chestnut).",
     example:"A: Ho i capelli castani.\nB: Anche io! E un colore molto comune.",
     exampleSrc:"A: I have brown hair.\nB: Me too! It is a very common color.",
     funFact:"'Castano' is specifically for hair and eyes, never for objects. For brown objects, use 'marrone.' This specificity is unique to Romance languages. English uses 'brown' for everything; Italian makes distinctions."},

    {type:"teach", trg:"nero", src:"black", pos:"adj", gender:"m",
     note:"Masculine: nero. Feminine: nera.\nFor hair, eyes, and general use. From Latin 'niger.'",
     example:"A: Mia nonna ha i capelli neri.\nB: Ha gli occhi neri anche?",
     exampleSrc:"A: My grandmother has black hair.\nB: Does she have black eyes too?",
     funFact:"From Latin 'niger' (black, dark). Italian uses 'nero' for most 'black' contexts. 'Caffe nero' is black coffee (no milk). The color carries no negative connotation in Italian the way it sometimes does in English."},

    {type:"teach", trg:"rosso", src:"red", pos:"adj", gender:"m",
     note:"Masculine: rosso. Feminine: rossa.\nFor hair, wine, and general use. From Latin 'russus.'",
     example:"A: Ha i capelli rossi?\nB: Si, come tutti nella famiglia!",
     exampleSrc:"A: Does she have red hair?\nB: Yes, like everyone in the family!",
     funFact:"'Rosso' is used for red hair, red wine, and even political 'red' (communism). Italy's famous 'Rossa' is the Fiat color and the Ferrari racing team. 'Rossini' as a surname literally means 'little red one.'"},

    {type:"teach", trg:"azzurro", src:"light blue / sky blue", pos:"adj", gender:"m",
     note:"Masculine: azzurro. Feminine: azzurra.\nSpecifically LIGHT blue. From Arabic 'lazaward' (lapis lazuli).",
     example:"A: Di che colore sono i tuoi occhi?\nB: Azzurri.",
     exampleSrc:"A: What color are your eyes?\nB: Light blue.",
     funFact:"Italian distinguishes 'azzurro' (light/sky blue) from 'blu' (dark blue). The Italian national sports teams are called 'gli Azzurri' because of their sky-blue jerseys, chosen to honor the House of Savoy royal family."},

    {type:"teach", trg:"verde", src:"green", pos:"adj", gender:null,
     note:"Same form for masculine and feminine (-e ending).\nPlural: verdi. From Latin 'viridis.'",
     example:"A: Ha gli occhi verdi.\nB: Che belli! Gli occhi verdi sono rari.",
     exampleSrc:"A: She has green eyes.\nB: How beautiful! Green eyes are rare.",
     funFact:"From Latin 'viridis' (green, fresh). The Italian surname 'Verdi' (as in the composer Giuseppe Verdi) literally means 'greens.' The English word 'verdant' (lush green) comes from the same Latin root."},

    {type:"teach", trg:"marrone", src:"brown (objects)", pos:"adj", gender:null,
     note:"Invariable: same form for all genders and numbers.\nFor objects only. For hair/eyes use 'castano.'",
     example:"A: Di che colore e la porta?\nB: E marrone.",
     exampleSrc:"A: What color is the door?\nB: It is brown.",
     funFact:"'Marrone' comes from 'marrone' (a large chestnut variety). It is invariable: 'scarpe marrone' (brown shoes), never 'marroni.' Some adjectives borrowed from nouns stay frozen in one form in Italian."},

    {type:"teach", trg:"bianco", src:"white", pos:"adj", gender:"m",
     note:"Masculine: bianco. Feminine: bianca.\nFrom Germanic 'blank' (shiny, white).",
     example:"A: Ha i capelli bianchi.\nB: Si, il nonno ha i capelli completamente bianchi.",
     exampleSrc:"A: He has white hair.\nB: Yes, grandfather has completely white hair.",
     funFact:"'Bianco' entered Italian from Germanic languages, replacing the Latin 'albus.' The famous 'Biancaneve' is Snow White (bianca + neve). Monte Bianco (Mont Blanc) means 'White Mountain.'"},

    {type:"teach", trg:"grigio", src:"gray", pos:"adj", gender:"m",
     note:"Masculine: grigio. Feminine: grigia.\nFrom Germanic 'grisi.' Plural: grigi/grigie.",
     example:"A: Mio padre ha i capelli grigi.\nB: Lo rende molto distinto!",
     exampleSrc:"A: My father has gray hair.\nB: It makes him look very distinguished!",
     funFact:"'Grigio' came from Germanic languages, like many Italian color words. The expression 'zona grigia' (gray zone) means an ambiguous area, just like in English. Gray hair is 'capelli grigi' or 'capelli sale e pepe' (salt and pepper)."},

    // Quiz steps
    {type:"mc", q:"Why is 'i capelli' always plural in Italian?",
     opts:["Italian treats hair as countable individual strands","It is an exception","It is a foreign word","It changes by region"],
     ans:"Italian treats hair as countable individual strands",
     hint:"English treats 'hair' as a mass noun. Italian sees each strand as separate, hence the plural."},

    {type:"fb", s:"Ho i capelli {1} e gli occhi verdi.",
     a:["castani"],
     opts:["castani","marroni","neri","biondi"],
     hint:"This is the specific color word for brown hair, derived from 'chestnut.'",
     sSrc:"I have {1} hair and green eyes."},

    {type:"mc", q:"What is the difference between 'castano' and 'marrone'?",
     opts:["Castano is for hair/eyes, marrone for objects","They are identical","Castano is lighter","Marrone is for hair"],
     ans:"Castano is for hair/eyes, marrone for objects",
     hint:"Italian has specific brown words. One is for people's features, the other for things like shoes or furniture."},

    {type:"fb", s:"Gli Azzurri sono la squadra {1}.",
     a:["italiana"],
     opts:["italiana","francese","inglese","tedesca"],
     hint:"Italy's national sports teams wear sky-blue jerseys. 'Azzurri' is their famous nickname.",
     sSrc:"The Azzurri are the {1} team."},

    {type:"match", pairs:[
      {trg:"biondo", src:"blond"},
      {trg:"nero", src:"black"},
      {trg:"rosso", src:"red"},
      {trg:"azzurro", src:"light blue"},
      {trg:"verde", src:"green"}
    ]},

    {type:"mc", q:"Which color adjective is invariable (never changes form)?",
     opts:["Marrone","Rosso","Bianco","Nero"],
     ans:"Marrone",
     hint:"Some adjectives borrowed from nouns freeze in one form. This brown word comes from a type of chestnut."},

    {type:"fb", s:"Ha gli {1} verdi.",
     a:["occhi"],
     opts:["occhi","capelli","mani","denti"],
     hint:"These are the organs of sight. Irregular plural of 'occhio.'",
     sSrc:"She has green {1}."},

    {type:"mc", q:"Where does 'azzurro' come from?",
     opts:["Arabic (lapis lazuli stone)","Latin","Germanic","French"],
     ans:"Arabic (lapis lazuli stone)",
     hint:"This light blue word entered Italian through the Arabic name for the blue gemstone used in pigments."},

    {type:"fb", s:"Il nonno ha i capelli {1}.",
     a:["bianchi"],
     opts:["bianchi","bianco","bianca","bianche"],
     hint:"Hair (capelli) is masculine plural. The adjective for 'white' must match: masculine plural form.",
     sSrc:"Grandfather has {1} hair."},

    {type:"mc", q:"What does 'sale e pepe' mean for hair?",
     opts:["Gray and white mixed (salt and pepper)","Blond","Red","Black"],
     ans:"Gray and white mixed (salt and pepper)",
     hint:"This food metaphor describes hair that is a mix of dark and white strands, like a salt and pepper blend."}
  ]
};
export default LESSON_5;
