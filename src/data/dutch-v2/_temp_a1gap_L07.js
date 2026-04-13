// L07: Clothing and Appearance — 20 A1 gap words
const LESSON_7 = {
  id:"nlv2_a1gap_l7", title:"Kleding en Uiterlijk", icon:"\u{1F45A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Clothing and Appearance",
     desc:"Learn Dutch words for clothes and personal appearance. Get dressed and describe what people look like.",
     goals:["Master 20 clothing and appearance words","Use aantrekken and dragen correctly","Describe what someone is wearing"]},

    {type:"teach", trg:"de jas", src:"the coat / jacket", pos:"noun", gender:"c",
     note:"Common gender (de). Essential in Dutch weather.",
     example:"A: Trek je jas aan, het is koud!\nB: Oké mam, doe ik.",
     exampleSrc:"A: Put on your coat, it's cold!\nB: Okay mom, will do.",
     funFact:"Essential word in the Netherlands. You always need a jas in your bag."},

    {type:"teach", trg:"de broek", src:"the pants / trousers", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: broeken.",
     example:"A: Die broek staat je goed.\nB: Dank je, hij is nieuw!",
     exampleSrc:"A: Those pants look good on you.\nB: Thanks, they're new!",
     funFact:"Same root as German 'Bruch'. Originally referred to leg coverings."},

    {type:"teach", trg:"de bloes", src:"the blouse", pos:"noun", gender:"c",
     note:"Common gender (de). Worn mainly by women.",
     example:"A: Die bloes is mooi!\nB: Dank je, het is mijn favoriete.",
     exampleSrc:"A: That blouse is beautiful!\nB: Thanks, it's my favorite.",
     funFact:"From French 'blouse'. Same word in many European languages."},

    {type:"teach", trg:"het ondergoed", src:"the underwear", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: onder (under) + goed (goods).",
     example:"A: Heb je schoon ondergoed ingepakt?\nB: Ja mam, natuurlijk!",
     exampleSrc:"A: Did you pack clean underwear?\nB: Yes mom, of course!",
     funFact:"Literally 'under-goods'. A wonderfully practical Dutch compound word."},

    {type:"teach", trg:"dragen", src:"to wear / to carry", pos:"verb", gender:null,
     note:"Irregular verb. Ik draag, jij draagt, hij draagt.",
     example:"A: Wat draag je naar het feest?\nB: Ik draag mijn nieuwe jurk.",
     exampleSrc:"A: What are you wearing to the party?\nB: I'm wearing my new dress.",
     funFact:"Cognate with English 'drag'. Both from Proto-Germanic, meaning to carry."},

    {type:"mc",
     q:"Het is koud buiten. Trek je ___ aan!",
     opts:["jas","broek","bloes","ondergoed"],
     ans:"jas",
     hint:"When it is cold outside, which outer garment do you put on?"},

    {type:"teach", trg:"aantrekken", src:"to put on (clothing)", pos:"verb", gender:null,
     note:"Separable verb: ik trek aan, jij trekt aan.",
     example:"A: Trek je schoenen aan!\nB: Ik doe het al.",
     exampleSrc:"A: Put on your shoes!\nB: I'm already doing it.",
     funFact:"Separable: 'aan' + 'trekken'. When conjugated: 'Ik trek mijn jas aan'."},

    {type:"teach", trg:"de kleur", src:"the color", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: kleuren.",
     example:"A: Welke kleur wil je?\nB: Blauw, alsjeblieft.",
     exampleSrc:"A: Which color do you want?\nB: Blue, please.",
     funFact:"Cognate with English 'color' (both from Latin 'color'). Same root."},

    {type:"teach", trg:"kort", src:"short", pos:"adj", gender:null,
     note:"For length or duration. Opposite of 'lang'.",
     example:"A: Je haar is kort.\nB: Ja, ik ben net naar de kapper geweest.",
     exampleSrc:"A: Your hair is short.\nB: Yes, I just went to the hairdresser.",
     funFact:"Cognate with English 'curt' and 'short' (via Latin 'curtus')."},

    {type:"teach", trg:"lang", src:"long / tall", pos:"adj", gender:null,
     note:"For length, height, or duration. Opposite of 'kort'.",
     example:"A: Wat een lange broek!\nB: Ja, ik ben ook heel lang.",
     exampleSrc:"A: What long pants!\nB: Yes, I am also very tall.",
     funFact:"Cognate with English 'long'. The Dutch are the tallest people in the world!"},

    {type:"teach", trg:"knap", src:"handsome / attractive / clever", pos:"adj", gender:null,
     note:"For people: good-looking. Also: smart/clever.",
     example:"A: Die jongen is knap!\nB: Ja, en ook heel aardig.",
     exampleSrc:"A: That boy is handsome!\nB: Yes, and also very nice.",
     funFact:"Can mean both 'attractive' and 'clever' depending on context."},

    {type:"fb",
     s:"Ik {1} mijn nieuwe jas aan voor het feest.",
     a:["trek"],
     opts:["trek","draag","maak","doe"],
     hint:"Which verb (separable) means 'to put on' clothing?",
     sSrc:"I {1} on my new coat for the party."},

    {type:"teach", trg:"blond", src:"blonde", pos:"adj", gender:null,
     note:"Very common in the Netherlands!",
     example:"A: Ze heeft blond haar.\nB: Net als haar moeder.",
     exampleSrc:"A: She has blonde hair.\nB: Just like her mother.",
     funFact:"The Netherlands has one of the highest percentages of natural blondes."},

    {type:"teach", trg:"de kam", src:"the comb", pos:"noun", gender:"c",
     note:"Common gender (de). Tool for hair.",
     example:"A: Heb je een kam?\nB: Ja, hier. Je haar zit raar.",
     exampleSrc:"A: Do you have a comb?\nB: Yes, here. Your hair looks funny.",
     funFact:"Cognate with English 'comb'. The b in English was once pronounced too."},

    {type:"teach", trg:"kammen", src:"to comb", pos:"verb", gender:null,
     note:"Regular verb. Ik kam, jij kamt.",
     example:"A: Kam je haar even!\nB: Het zit toch goed?",
     exampleSrc:"A: Comb your hair real quick!\nB: It looks fine, doesn't it?",
     funFact:"Verb from the noun 'kam'. Simple and regular."},

    {type:"teach", trg:"fris", src:"fresh / cool", pos:"adj", gender:null,
     note:"For weather: cool/fresh. For drinks: cold/refreshing.",
     example:"A: Het is fris buiten vandaag.\nB: Ja, trek een jas aan.",
     exampleSrc:"A: It's chilly outside today.\nB: Yes, put on a coat.",
     funFact:"Also used in 'frisdrank' (soft drink = 'fresh drink'). Very versatile word."},

    {type:"teach", trg:"het kleed", src:"the rug / carpet", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: kleden. Not 'clothes' (that's 'kleding').",
     example:"A: Wat een mooi kleed!\nB: Dank je, het komt uit Turkije.",
     exampleSrc:"A: What a beautiful rug!\nB: Thanks, it's from Turkey.",
     funFact:"False friend alert: 'kleed' = rug, NOT clothes. 'Kleding' = clothing."},

    {type:"mc",
     q:"Welk woord betekent 'rug/carpet' en NIET 'kleding'?",
     opts:["kleed","jas","broek","bloes"],
     ans:"kleed",
     hint:"Careful with this false friend. It looks like 'clothing' but means something for the floor."},

    {type:"teach", trg:"hard", src:"hard / loud / fast", pos:"adj", gender:null,
     note:"Multiple meanings: physically hard, loud (sound), or fast.",
     example:"A: Praat niet zo hard!\nB: Sorry, ik zal zachter praten.",
     exampleSrc:"A: Don't talk so loudly!\nB: Sorry, I'll talk softer.",
     funFact:"Cognate with English 'hard'. In Dutch also means 'loud' and 'fast' (hard lopen = run fast)."},

    {type:"teach", trg:"de kop", src:"the cup / head (informal)", pos:"noun", gender:"c",
     note:"Common gender (de). A cup (for hot drinks) or informal for 'head'.",
     example:"A: Wil je een kop koffie?\nB: Ja, lekker! Dank je.",
     exampleSrc:"A: Do you want a cup of coffee?\nB: Yes, lovely! Thank you.",
     funFact:"'Kop' for head is informal/rude. 'Hou je kop!' = Shut up! (literally: keep your head)."},

    {type:"teach", trg:"de kraan", src:"the tap / faucet", pos:"noun", gender:"c",
     note:"Common gender (de). Also means 'crane' (the machine).",
     example:"A: Doe de kraan dicht!\nB: Oh sorry, ik was het vergeten.",
     exampleSrc:"A: Turn off the tap!\nB: Oh sorry, I forgot.",
     funFact:"Means both 'tap' and 'crane'. The long neck of a crane looks like a faucet spout."},

    {type:"match", pairs:[
      {trg:"aantrekken", src:"to put on (clothing)"},
      {trg:"dragen", src:"to wear / carry"},
      {trg:"kleur", src:"color"},
      {trg:"ondergoed", src:"underwear"}
    ]}
  ]
};
export default LESSON_7;
