// Batch 4 — Unit 03, Lesson 1: Extended Family & Descriptions
const BATCH4_U03_L1 = {
  id:"itv2_u03l_b4_1", title:"I parenti", icon:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66", xp:15, board:true,
  steps:[
    {type:"intro", title:"I parenti",
     desc:"Learn extended family vocabulary and adjectives to describe your relatives and their personalities.",
     goals:["Name extended family members","Describe people's personalities","Use possessive adjectives with family terms"]},

    {type:"teach", trg:"lo zio", src:"the uncle", pos:"noun", gender:"m",
     note:"Masculine. Uses 'lo' before z. Plural: gli zii.\nFeminine: la zia (the aunt).",
     example:"A: Hai molti zii?\nB: Si, ho tre zii e due zie.",
     exampleSrc:"A: Do you have many uncles?\nB: Yes, I have three uncles and two aunts.",
     funFact:"'Zio' requires the article 'lo' (not 'il') because it starts with z. In southern Italian slang, 'zio' is also used like 'dude' or 'bro' among young people."},

    {type:"teach", trg:"la zia", src:"the aunt", pos:"noun", gender:"f",
     note:"Feminine. Plural: le zie.\nIn Italy, aunts often play a central role in family life.",
     example:"A: La zia Maria viene a pranzo?\nB: Si, viene con lo zio Paolo.",
     exampleSrc:"A: Is Aunt Maria coming to lunch?\nB: Yes, she is coming with Uncle Paolo.",
     funFact:"In Italian families, 'la zia' is often the family storyteller and keeper of recipes. The expression 'zia' is also used affectionately by children for any older female family friend, not just blood relatives."},

    {type:"teach", trg:"il cugino", src:"the cousin (male)", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la cugina. Plural: i cugini.\nFrom Latin 'consobrinus.'",
     example:"A: Hai cugini?\nB: Si, ho cinque cugini!",
     exampleSrc:"A: Do you have cousins?\nB: Yes, I have five cousins!",
     funFact:"Italian distinguishes male cousins (cugini) from female cousins (cugine), unlike English. Large Italian families can have dozens of cousins. The expression 'cugini di secondo grado' means 'second cousins.'"},

    {type:"teach", trg:"il nipote", src:"the nephew / grandson", pos:"noun", gender:"m",
     note:"Masculine. Same word for nephew AND grandson.\nFeminine: la nipote (niece/granddaughter).",
     example:"A: Quanti nipoti hai?\nB: Tre nipoti: due ragazzi e una ragazza.",
     exampleSrc:"A: How many grandchildren do you have?\nB: Three grandchildren: two boys and one girl.",
     funFact:"Italian uses 'nipote' for both nephew/niece AND grandson/granddaughter. Context makes the meaning clear. This ambiguity comes from Latin 'nepos,' which also had both meanings."},

    {type:"teach", trg:"il suocero", src:"the father-in-law", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la suocera (mother-in-law).\nFrom Latin 'socerus.'",
     example:"A: Vai d'accordo con il suocero?\nB: Si, e molto simpatico.",
     exampleSrc:"A: Do you get along with your father-in-law?\nB: Yes, he is very nice.",
     funFact:"The Italian mother-in-law ('suocera') is a frequent subject of jokes, similar to other cultures. The expression 'lingua della suocera' (mother-in-law's tongue) is the Italian name for the snake plant."},

    {type:"teach", trg:"il cognato", src:"the brother-in-law", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la cognata (sister-in-law).\nFrom Latin 'cognatus' (related by blood).",
     example:"A: Il tuo cognato lavora qui?\nB: Si, lavoriamo insieme.",
     exampleSrc:"A: Does your brother-in-law work here?\nB: Yes, we work together.",
     funFact:"Latin 'cognatus' meant any blood relative. In Italian, the meaning narrowed to in-laws only. English 'cognate' (words related by origin) comes from the same root, keeping the broader meaning of 'related.'"},

    {type:"teach", trg:"simpatico", src:"nice / likeable / fun", pos:"adj", gender:"m",
     note:"Masculine. Feminine: simpatica.\nNOT 'sympathetic.' Means likeable, charming.",
     example:"A: Come e il tuo nuovo collega?\nB: E molto simpatico!",
     exampleSrc:"A: What is your new colleague like?\nB: He is very nice!",
     funFact:"'Simpatico' is a false friend. It does NOT mean 'sympathetic' in English. It means 'likeable, fun to be around.' The opposite 'antipatico' means 'unpleasant, unlikeable.' These are key personality words in Italian."},

    {type:"teach", trg:"antipatico", src:"unpleasant / unlikeable", pos:"adj", gender:"m",
     note:"Masculine. Feminine: antipatica.\nThe opposite of 'simpatico.' Strong negative judgment.",
     example:"A: Ti piace il nuovo vicino?\nB: No, e molto antipatico.",
     exampleSrc:"A: Do you like the new neighbor?\nB: No, he is very unpleasant.",
     funFact:"Calling someone 'antipatico' is quite harsh in Italian. It implies the person is actively off-putting, not just neutral. Italians might soften it: 'non e molto simpatico' (not very likeable) instead of directly saying 'antipatico.'"},

    {type:"teach", trg:"gentile", src:"kind / gentle / polite", pos:"adj", gender:null,
     note:"Same form for masculine and feminine.\nFrom Latin 'gentilis' (of good family).",
     example:"A: La tua nonna e molto gentile.\nB: Si, e gentile con tutti.",
     exampleSrc:"A: Your grandmother is very kind.\nB: Yes, she is kind to everyone.",
     funFact:"In formal Italian, 'Gentile Signore/Signora' (Dear Sir/Madam) opens formal letters. The word evolved from meaning 'of noble birth' to meaning 'kind and polite.' Politeness and nobility were once considered the same thing."},

    {type:"teach", trg:"severo", src:"strict / stern", pos:"adj", gender:"m",
     note:"Masculine. Feminine: severa.\nUsed for parents, teachers, judges.",
     example:"A: Tuo padre e severo?\nB: Si, ma e anche giusto.",
     exampleSrc:"A: Is your father strict?\nB: Yes, but he is also fair.",
     funFact:"From Latin 'severus' (serious, strict). The Italian education system has a reputation for being 'severo.' Strict grandmothers ('nonne severe') are a common character in Italian family stories."},

    {type:"teach", trg:"affettuoso", src:"affectionate / loving", pos:"adj", gender:"m",
     note:"Masculine. Feminine: affettuosa.\nFrom 'affetto' (affection).",
     example:"A: Come e la tua mamma?\nB: E molto affettuosa.",
     exampleSrc:"A: What is your mom like?\nB: She is very affectionate.",
     funFact:"Italians are famously affectionate. Physical contact (cheek kisses, hugs, arm touching) is normal in Italian family life. The stereotype of the warm, affectionate Italian family is largely true."},

    {type:"teach", trg:"orgoglioso", src:"proud", pos:"adj", gender:"m",
     note:"Masculine. Feminine: orgogliosa.\nFrom 'orgoglio' (pride). Can be positive or negative.",
     example:"A: Sono orgoglioso di mio figlio.\nB: Ha fatto un ottimo lavoro!",
     exampleSrc:"A: I am proud of my son.\nB: He did an excellent job!",
     funFact:"'Orgoglio' comes from a Germanic word meaning 'excellence.' Italian distinguishes healthy pride from arrogance: 'orgoglioso' (proud, positive) vs 'superbo' or 'arrogante' (arrogant, negative)."},

    {type:"teach", trg:"il carattere", src:"the character / personality", pos:"noun", gender:"m",
     note:"Masculine. 'Avere un buon carattere' = to have a good personality.\n'Avere un brutto carattere' = to have a bad temper.",
     example:"A: Ha un buon carattere?\nB: Si, e paziente e gentile.",
     exampleSrc:"A: Does he have a good personality?\nB: Yes, he is patient and kind.",
     funFact:"Italians often describe people by their 'carattere.' It encompasses temperament, personality, and moral character. 'Che carattere!' (what a personality!) can be admiring or exasperated depending on tone."},

    {type:"teach", trg:"assomigliare", src:"to resemble / to look like", pos:"verb", gender:null,
     note:"Reflexive: 'assomigliarsi' (to resemble each other).\n'Assomiglio a mia madre' = I look like my mother.",
     example:"A: A chi assomigli?\nB: Assomiglio a mio padre.",
     exampleSrc:"A: Who do you look like?\nB: I look like my father.",
     funFact:"In Italian families, comparing resemblances is a national pastime. 'E tutto il padre!' (He is just like his father!) or 'Ha gli occhi della mamma' (She has her mother's eyes) are constant refrains at family gatherings."},

    {type:"teach", trg:"volersi bene", src:"to love each other / to care for each other", pos:"verb", gender:null,
     note:"Reciprocal verb. 'Ci vogliamo bene' = we love each other.\nUsed for family and close friends, not romantic love.",
     example:"A: Tu e tua sorella vi volete bene?\nB: Si, ci vogliamo molto bene.",
     exampleSrc:"A: Do you and your sister love each other?\nB: Yes, we love each other very much.",
     funFact:"Italian distinguishes 'volersi bene' (familial/friendly love) from 'amarsi' (romantic love). 'Ti voglio bene' (I care about you) is for family and friends. 'Ti amo' (I love you) is reserved for romantic partners."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'uncle' in italiano?",
     opts:["Lo zio","Il cugino","Il nipote","Il cognato"],
     ans:"Lo zio",
     hint:"This family member uses the article 'lo' because the word starts with z."},

    {type:"fb", s:"La mia nonna e molto {1}, abbraccia sempre tutti.",
     a:["affettuosa"], opts:["affettuosa","severa","antipatica","orgogliosa"],
     hint:"The grandmother hugs everyone. Pick the word meaning warm and loving.",
     sSrc:"My grandmother is very {1}, she always hugs everyone."},

    {type:"match", pairs:[
      {trg:"lo zio", src:"the uncle"},
      {trg:"la zia", src:"the aunt"},
      {trg:"il cugino", src:"the cousin"},
      {trg:"il nipote", src:"the nephew/grandson"},
      {trg:"il cognato", src:"the brother-in-law"}
    ]},

    {type:"mc", q:"Cosa significa 'simpatico' in italiano?",
     opts:["Nice and likeable","Sympathetic","Sad","Simple"],
     ans:"Nice and likeable",
     hint:"This is a false friend. It does not mean what it looks like in English."},

    {type:"fb", s:"A chi {1}? Hai gli occhi di tuo padre!",
     a:["assomigli"], opts:["assomigli","piaci","vuoi","vieni"],
     hint:"This verb means 'to resemble' or 'to look like.'",
     sSrc:"Who do you {1}? You have your father's eyes!"},

    {type:"mc", q:"Qual e la differenza tra 'ti voglio bene' e 'ti amo'?",
     opts:["Ti voglio bene is for family/friends; ti amo is romantic","They mean the same thing","Ti amo is informal; ti voglio bene is formal","Ti voglio bene is stronger than ti amo"],
     ans:"Ti voglio bene is for family/friends; ti amo is romantic",
     hint:"Italian carefully separates these two types of love in everyday speech."},

    {type:"fb", s:"Il professore e molto {1}, non accetta errori.",
     a:["severo"], opts:["severo","gentile","simpatico","affettuoso"],
     hint:"The professor does not accept mistakes. This adjective means strict.",
     sSrc:"The professor is very {1}, he does not accept mistakes."},

    {type:"mc", q:"Cosa significa 'nipote' in italiano?",
     opts:["Both nephew/niece and grandson/granddaughter","Only grandson","Only nephew","Brother-in-law"],
     ans:"Both nephew/niece and grandson/granddaughter",
     hint:"This Italian word is unusual because it has two quite different meanings."}
  ]
};
export default BATCH4_U03_L1;
