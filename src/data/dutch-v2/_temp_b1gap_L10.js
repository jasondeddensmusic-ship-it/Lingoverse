// L10: Emotions and Character — 20 B1 gap words
const LESSON_10 = {
  id:"nlv2_b1gap_l10", title:"Emoties en Karakter", icon:"\u{1F60A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Emotions and Character",
     desc:"Learn Dutch vocabulary for feelings, personality traits, and interpersonal qualities. Express yourself more deeply.",
     goals:["Master 20 emotion and character words","Describe personalities","Express feelings and attitudes"]},

    {type:"teach", trg:"aanbidden", src:"to worship / to adore", pos:"verb", gender:null,
     note:"Inseparable verb. Ik aanbid, jij aanbidt.",
     example:"A: Ze aanbidt haar kleinkinderen.\nB: Ja, ze doet alles voor ze.",
     exampleSrc:"A: She adores her grandchildren.\nB: Yes, she does everything for them.",
     funFact:"Aan (on) + bidden (to pray). Originally religious ('pray to'), now also means deep adoration."},

    {type:"teach", trg:"adoreren", src:"to adore", pos:"verb", gender:null,
     note:"Inseparable verb. Ik adoreer, jij adoreert.",
     example:"A: Ik adoreer chocolade.\nB: Wie niet?",
     exampleSrc:"A: I adore chocolate.\nB: Who doesn't?",
     funFact:"French loanword, more informal than 'aanbidden'. Used for strong likes as well as deep love."},

    {type:"teach", trg:"de affectie", src:"the affection", pos:"noun", gender:"c",
     note:"Common gender (de). Warm feelings toward someone.",
     example:"A: Hij toont weinig affectie.\nB: Dat is zijn karakter, maar hij houdt van je.",
     exampleSrc:"A: He shows little affection.\nB: That is his character, but he loves you.",
     funFact:"From Latin 'affectio'. Dutch people can seem reserved but show affection through actions rather than words."},

    {type:"teach", trg:"behulpzaam", src:"helpful / obliging", pos:"adj", gender:null,
     note:"Adjective. Describes someone who readily helps others.",
     example:"A: De buren zijn heel behulpzaam.\nB: Fijn om zulke buren te hebben.",
     exampleSrc:"A: The neighbors are very helpful.\nB: Nice to have such neighbors.",
     funFact:"Be- + hulp (help) + -zaam (-ful). Triple-layered word building. Mirrors English 'helpful'."},

    {type:"mc",
     q:"Je buurman helpt je altijd met boodschappen dragen. Hij is heel ___.",
     opts:["behulpzaam","agressief","bars","absurd"],
     ans:"behulpzaam",
     hint:"Which adjective describes someone who is always willing to lend a hand?"},

    {type:"teach", trg:"bars", src:"gruff / harsh", pos:"adj", gender:null,
     note:"Adjective. Describes an unfriendly, rough manner.",
     example:"A: De winkelier was nogal bars.\nB: Misschien had hij een slechte dag.",
     exampleSrc:"A: The shopkeeper was quite gruff.\nB: Maybe he had a bad day.",
     funFact:"Old Dutch word. Think of a bartender in a rough bar. The word has a naturally harsh sound."},

    {type:"teach", trg:"afschuwelijk", src:"horrible / terrible", pos:"adj", gender:null,
     note:"Adjective. Expresses strong disgust or horror.",
     example:"A: Het weer is afschuwelijk vandaag.\nB: Ja, regen en wind de hele dag.",
     exampleSrc:"A: The weather is horrible today.\nB: Yes, rain and wind all day.",
     funFact:"From 'afschuw' (horror/disgust). Very expressive Dutch word. Stronger than 'vreselijk'."},

    {type:"teach", trg:"absurd", src:"absurd / ridiculous", pos:"adj", gender:null,
     note:"Adjective. Something completely unreasonable.",
     example:"A: Die prijs is absurd hoog!\nB: Laten we ergens anders kijken.",
     exampleSrc:"A: That price is absurdly high!\nB: Let's look somewhere else.",
     funFact:"Same word in English, Dutch, French, and German. From Latin 'absurdus' (out of tune)."},

    {type:"teach", trg:"banaal", src:"banal / trivial", pos:"adj", gender:null,
     note:"Adjective. Something unoriginal and boring.",
     example:"A: Zijn excuus was nogal banaal.\nB: Ja, niet erg creatief.",
     exampleSrc:"A: His excuse was rather banal.\nB: Yes, not very creative.",
     funFact:"French origin. In Dutch, calling something 'banaal' is a mild but pointed criticism."},

    {type:"teach", trg:"de bedenking", src:"the objection / the doubt", pos:"noun", gender:"c",
     note:"Common gender (de). From 'bedenken' (to consider).",
     example:"A: Ik heb bedenkingen bij dit plan.\nB: Wat zijn je zorgen?",
     exampleSrc:"A: I have objections to this plan.\nB: What are your concerns?",
     funFact:"'Bedenkingen hebben' is a polite Dutch way to express disagreement. Very typical polder model language."},

    {type:"fb",
     s:"Het eten in dat restaurant was {1}. Ik ga er nooit meer naartoe.",
     a:["afschuwelijk"],
     opts:["afschuwelijk","behulpzaam","banaal","absurd"],
     hint:"Which strong adjective expresses disgust or horror at how bad something was?",
     sSrc:"The food in that restaurant was {1}. I am never going back."},

    {type:"teach", trg:"de bedenktijd", src:"the cooling-off period / time to think", pos:"noun", gender:"c",
     note:"Common gender (de). Bedenk (consider) + tijd (time).",
     example:"A: Ik wil even bedenktijd.\nB: Natuurlijk, neem je tijd.",
     exampleSrc:"A: I want some time to think.\nB: Of course, take your time.",
     funFact:"Dutch consumer law gives you 14 days 'bedenktijd' for online purchases. You can return items for free."},

    {type:"teach", trg:"de aanmerking", src:"the comment / the consideration", pos:"noun", gender:"c",
     note:"Common gender (de). 'In aanmerking komen' = to be eligible.",
     example:"A: Kom ik in aanmerking voor de beurs?\nB: Ja, als je voldoet aan de voorwaarden.",
     exampleSrc:"A: Am I eligible for the scholarship?\nB: Yes, if you meet the conditions.",
     funFact:"'In aanmerking komen voor' is an essential phrase in Dutch bureaucracy. You will see it everywhere."},

    {type:"teach", trg:"aanvaarden", src:"to accept / to take on", pos:"verb", gender:null,
     note:"Inseparable verb. Ik aanvaard, jij aanvaardt.",
     example:"A: Zij heeft de baan aanvaard.\nB: Wanneer begint ze?",
     exampleSrc:"A: She accepted the job.\nB: When does she start?",
     funFact:"More formal than 'accepteren'. Used for accepting positions, conditions, or awards."},

    {type:"teach", trg:"acceptabel", src:"acceptable", pos:"adj", gender:null,
     note:"Adjective. Meets minimum standards.",
     example:"A: Is dit voorstel acceptabel?\nB: Ja, we kunnen ermee akkoord gaan.",
     exampleSrc:"A: Is this proposal acceptable?\nB: Yes, we can agree to it.",
     funFact:"From Latin 'acceptabilis'. Nearly identical across European languages."},

    {type:"mc",
     q:"Je hebt iets online gekocht maar je wilt het terugsturen. Je hebt veertien dagen ___.",
     opts:["bedenktijd","bedenking","aanmerking","affectie"],
     ans:"bedenktijd",
     hint:"Think about the legal period that allows you to reconsider a purchase."},

    {type:"teach", trg:"akkoord", src:"agreed / okay", pos:"adj", gender:null,
     note:"Adjective and interjection. Used to express agreement.",
     example:"A: We vertrekken om acht uur. Akkoord?\nB: Akkoord! Tot dan.",
     exampleSrc:"A: We leave at eight o'clock. Agreed?\nB: Agreed! See you then.",
     funFact:"From French 'accord'. 'Akkoord gaan met' = to agree with. Central to Dutch 'poldermodel' consensus culture."},

    {type:"teach", trg:"het accent", src:"the accent", pos:"noun", gender:"n",
     note:"Neuter gender (het). Pronunciation style or emphasis.",
     example:"A: Je hebt een leuk accent!\nB: Dank je, ik kom uit Limburg.",
     exampleSrc:"A: You have a nice accent!\nB: Thanks, I come from Limburg.",
     funFact:"The Netherlands has very distinct regional accents. Limburgs, Brabants, and Fries are immediately recognizable."},

    {type:"teach", trg:"appreciëren", src:"to appreciate", pos:"verb", gender:null,
     note:"Inseparable verb. Ik apprecieer, jij apprecieert.",
     example:"A: Ik apprecieer je hulp enorm.\nB: Graag gedaan!",
     exampleSrc:"A: I appreciate your help enormously.\nB: You're welcome!",
     funFact:"French origin with the Dutch trema on the e. More formal than 'waarderen' (to value)."},

    {type:"teach", trg:"amper", src:"barely / hardly", pos:"adv", gender:null,
     note:"Adverb. Indicates something is almost not the case.",
     example:"A: Ik heb amper geslapen.\nB: Je ziet er moe uit.",
     exampleSrc:"A: I barely slept.\nB: You look tired.",
     funFact:"More common in Belgium than in the Netherlands, where 'nauwelijks' is preferred. Both mean 'barely'."},

    {type:"match", pairs:[
      {trg:"behulpzaam", src:"helpful"},
      {trg:"afschuwelijk", src:"horrible"},
      {trg:"akkoord", src:"agreed"},
      {trg:"aanvaarden", src:"to accept"},
      {trg:"amper", src:"barely"}
    ]},

    {type:"fb",
     s:"Ik {1} je eerlijkheid. Het is fijn dat je altijd de waarheid zegt.",
     a:["apprecieer"],
     opts:["apprecieer","adoreer","aanbid","aanvaard"],
     hint:"Which verb means to value and be grateful for something?",
     sSrc:"I {1} your honesty. It is nice that you always tell the truth."},

    {type:"mc",
     q:"De man was niet vriendelijk. Hij was ___ en onbeleefd.",
     opts:["bars","banaal","absurd","akkoord"],
     ans:"bars",
     hint:"Which adjective describes someone who is gruff and unfriendly in manner?"}
  ]
};
export default LESSON_10;
