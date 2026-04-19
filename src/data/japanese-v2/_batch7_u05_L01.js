// Batch 7 – Unit 05 (A1.2 Food & Drink): Kitchen & Cooking Vocabulary
const BATCH7_L1 = {
  id:"jav2_u05l_b7_1", title:"台所(だいどころ)", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"台所(だいどころ)",
     desc:"Learn kitchen items and basic cooking vocabulary. Japanese cooking (和食(わしょく), washoku) is a UNESCO World Heritage tradition, and knowing these words opens the door to food culture conversations.",
     goals:["Name kitchen utensils and appliances","Use basic cooking action verbs","Describe simple cooking steps"]},

    {type:"teach", trg:"台所(だいどころ)", src:"kitchen", pos:"noun", gender:null,
     note:"Also called キッチン (loanword).\n台所(だいどころ)で料理(りょうり)をする = to cook in the kitchen.",
     example:"A: お母(かあ)さんは台所(だいどころ)にいますか？\nB: はい、晩(ばん)ご飯(はん)を作(つく)っています。",
     exampleSrc:"A: Is Mom in the kitchen?\nB: Yes, she is making dinner.",
     funFact:"台所(だいどころ) literally means 'stand-place' because it was where you stood to prepare food. Traditional Japanese kitchens had a raised platform (台(だい)) for food prep. Modern apartments often have open キッチン connected to the living room, a Western influence."},

    {type:"teach", trg:"鍋(なべ)", src:"pot / pan", pos:"noun", gender:null,
     note:"General word for cooking pot.\n鍋(なべ)料理(りょうり) = hot pot dish (cooked at the table).",
     example:"A: 大(おお)きい鍋(なべ)でスープを作(つく)ります。\nB: 何人(なんにん)分(ぶん)ですか？",
     exampleSrc:"A: I will make soup in a big pot.\nB: How many servings?",
     funFact:"鍋(なべ) is both a cooking tool and a beloved winter dish. 鍋(なべ)料理(りょうり) (hot pot) is Japan's favorite cold-weather meal. Families gather around a boiling pot and cook together. Each region has its own 鍋(なべ) style: ちゃんこ鍋(なべ) (sumo hot pot), もつ鍋(なべ) (offal hot pot), and more."},

    {type:"teach", trg:"包丁(ほうちょう)", src:"kitchen knife", pos:"noun", gender:null,
     note:"包丁(ほうちょう)で切(き)る = to cut with a knife.\nJapanese knives are world-famous.",
     example:"A: 包丁(ほうちょう)で野菜(やさい)を切(き)ってください。\nB: はい、薄(うす)く切(き)りますね。",
     exampleSrc:"A: Please cut the vegetables with the knife.\nB: Okay, I will cut them thin.",
     funFact:"Japanese kitchen knives (包丁(ほうちょう)) are prized worldwide. The city of 堺(さかい) in 大阪(おおさか) has made blades for 600 years. Unlike Western double-bevel knives, traditional Japanese 包丁(ほうちょう) have a single bevel edge for more precise cuts. Chefs treat their knives with deep respect."},

    {type:"teach", trg:"皿(さら)", src:"plate / dish", pos:"noun", gender:null,
     note:"Counter: 一枚(いちまい), 二枚(にまい) (flat objects).\nお皿(さら)を洗(あら)う = to wash dishes.",
     example:"A: 皿(さら)をテーブルに並(なら)べてください。\nB: 何枚(なんまい)ですか？",
     exampleSrc:"A: Please set the plates on the table.\nB: How many?",
     funFact:"Japanese cuisine values presentation on 皿(さら) (plates). The saying 'you eat with your eyes first' is taken seriously. Different dishes use different plates: round for 刺身(さしみ) (sashimi), rectangular for 焼(や)き魚(ざかな), small for 漬物(つけもの). A full Japanese meal uses 5 or more plates."},

    {type:"teach", trg:"茶碗(ちゃわん)", src:"rice bowl", pos:"noun", gender:null,
     note:"Also used for tea cups in some contexts.\nご飯(はん)茶碗(ちゃわん) = rice bowl specifically.",
     example:"A: 茶碗(ちゃわん)にご飯(はん)をよそってください。\nB: 大盛(おおも)りですか？",
     exampleSrc:"A: Please serve rice in the bowl.\nB: A large portion?",
     funFact:"茶碗(ちゃわん) literally means 'tea bowl.' Rice bowls are called 茶碗(ちゃわん) because tea was originally served in the same type of vessel. In Japanese etiquette, you hold the 茶碗(ちゃわん) in one hand while eating with 箸(はし) in the other."},

    {type:"teach", trg:"箸(はし)", src:"chopsticks", pos:"noun", gender:null,
     note:"Also written お箸(はし) (polite).\n箸(はし)を使(つか)う = to use chopsticks.",
     example:"A: お箸(はし)を使(つか)えますか？\nB: はい、少(すこ)し使(つか)えます。",
     exampleSrc:"A: Can you use chopsticks?\nB: Yes, I can use them a little.",
     funFact:"箸(はし) has strict etiquette rules. Never stick 箸(はし) upright in rice (funeral ritual). Never pass food 箸(はし) to 箸(はし) (another funeral association). Never point with 箸(はし). Japanese children learn proper 箸(はし) technique by age 5 or 6."},

    {type:"teach", trg:"切(き)る", src:"to cut", pos:"verb", gender:null,
     note:"Group 1 verb. Different from 着(き)る (to wear, Group 2).\n野菜(やさい)を切(き)る = to cut vegetables.",
     example:"A: 玉(たま)ねぎを細(こま)かく切(き)ってください。\nB: 目(め)が痛(いた)いです！",
     exampleSrc:"A: Please chop the onion finely.\nB: My eyes hurt!",
     funFact:"切(き)る has many compound words: 切(き)り替(か)える (to switch), 締(し)め切(き)り (deadline, literally 'close-cut'), 切(き)りがない (endless). The verb also means 'to end a phone call' (電話(でんわ)を切(き)る). Japanese chefs' cutting techniques (切(き)り方(かた)) take years to master."},

    {type:"teach", trg:"煮(に)る", src:"to boil / to simmer", pos:"verb", gender:null,
     note:"Group 2 verb. 煮物(にもの) = simmered dish.\n野菜(やさい)を煮(に)る = to simmer vegetables.",
     example:"A: 大根(だいこん)を煮(に)ています。\nB: いい匂(にお)いですね。",
     exampleSrc:"A: I am simmering daikon radish.\nB: It smells good.",
     funFact:"煮(に)る is the most essential Japanese cooking technique. 煮物(にもの) (simmered dishes) are the heart of home cooking: 肉(にく)じゃが (meat and potato stew), おでん (various items simmered in dashi). Japanese mothers are often judged by their 煮物(にもの) skills."},

    {type:"teach", trg:"焼(や)く", src:"to grill / to bake / to fry", pos:"verb", gender:null,
     note:"Group 1 verb. Covers many heat methods.\n焼(や)き肉(にく) = grilled meat. 焼(や)き魚(ざかな) = grilled fish.",
     example:"A: 魚(さかな)を焼(や)きましょうか？\nB: はい、塩(しお)焼(や)きでお願(ねが)いします。",
     exampleSrc:"A: Shall I grill the fish?\nB: Yes, salt-grilled please.",
     funFact:"焼(や)く covers grilling, baking, roasting, and pan-frying. Japanese food names reveal the method: 焼(や)き鳥(とり) (grilled chicken), 焼(や)きそば (fried noodles), たこ焼(や)き (octopus balls), お好(この)み焼(や)き (savory pancake). The verb is everywhere in Japanese cuisine."},

    {type:"teach", trg:"蒸(む)す", src:"to steam", pos:"verb", gender:null,
     note:"Group 1 verb. 蒸(む)し野菜(やさい) = steamed vegetables.\n茶碗蒸(ちゃわんむ)し = savory egg custard.",
     example:"A: 野菜(やさい)を蒸(む)して食(た)べましょう。\nB: ヘルシーですね。",
     exampleSrc:"A: Let us steam vegetables and eat them.\nB: That is healthy.",
     funFact:"Steaming (蒸(む)す) is considered the healthiest Japanese cooking method. 茶碗蒸(ちゃわんむ)し (steamed egg custard in a teacup) is a beloved dish at every class of restaurant. The word 蒸(む)し暑(あつ)い (muggy/humid) also uses 蒸(む)す because humid air feels like being steamed."},

    {type:"teach", trg:"混(ま)ぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Group 2 verb. よく混(ま)ぜてください = please mix well.\n混(ま)ぜご飯(はん) = mixed rice.",
     example:"A: 卵(たまご)をよく混(ま)ぜてください。\nB: はい、混(ま)ぜています。",
     exampleSrc:"A: Please mix the egg well.\nB: Yes, I am mixing it.",
     funFact:"混(ま)ぜる is key to many Japanese dishes. 混(ま)ぜご飯(はん) (mixed rice) is comfort food with seasonal ingredients stirred into white rice. 納豆(なっとう) (fermented soybeans) must be stirred vigorously before eating. Some people stir it 100 times for the perfect texture."},

    {type:"teach", trg:"味(あじ)", src:"flavor / taste", pos:"noun", gender:null,
     note:"味(あじ)を見(み)る = to taste (test the flavor).\n味(あじ)が薄(うす)い = the flavor is mild.",
     example:"A: 味(あじ)はどうですか？\nB: 美味(おい)しいです！味(あじ)がちょうどいいです。",
     exampleSrc:"A: How is the taste?\nB: Delicious! The flavor is just right.",
     funFact:"Japanese cuisine recognizes five basic 味(あじ) (tastes): 甘(あま)い (sweet), 塩辛(しおから)い (salty), 酸(す)っぱい (sour), 苦(にが)い (bitter), and 旨味(うまみ) (savory). 旨味(うまみ) was discovered by Japanese scientist 池田菊苗(いけだきくなえ) in 1908 and is now recognized worldwide as the fifth taste."},

    {type:"teach", trg:"レシピ", src:"recipe", pos:"noun", gender:null,
     note:"Katakana loanword from English 'recipe.'\nレシピを見(み)る = to look at a recipe.",
     example:"A: このレシピは簡単(かんたん)ですよ。\nB: いいですね。作(つく)ってみます。",
     exampleSrc:"A: This recipe is simple.\nB: Nice. I will try making it.",
     funFact:"Japan's most popular recipe website, Cookpad, has over 3 million user-submitted レシピ. Japanese home cooks share detailed レシピ with photos of every step. The site revolutionized home cooking in Japan and has expanded to 70 countries."},

    // Quiz steps
    {type:"mc", q:"鍋(なべ) is both a cooking tool and:",
     opts:["A winter hot pot dish","A type of knife","A plate","A bowl"],
     ans:"A winter hot pot dish",
     hint:"Families gather around this boiling communal d... in w.... Each region has its own style."},

    {type:"match", pairs:[
      {trg:"包丁(ほうちょう)", src:"kitchen knife"},
      {trg:"皿(さら)", src:"plate"},
      {trg:"茶碗(ちゃわん)", src:"rice bowl"},
      {trg:"箸(はし)", src:"chopsticks"},
      {trg:"鍋(なべ)", src:"pot"}
    ]},

    {type:"fb", s:"野菜(やさい)を包丁(ほうちょう)で{1}ください。",
     a:["切(き)って"],
     opts:["切(き)って","煮(に)て","焼(や)いて","混(ま)ぜて"],
     hint:"The て-form of the verb meaning 'to cut.' You use a knife for this action.",
     sSrc:"Please {1} the vegetables with a knife."},

    {type:"mc", q:"蒸(む)す means:",
     opts:["To steam","To boil","To grill","To fry"],
     ans:"To steam",
     hint:"This cooking method uses hot water vapor. 茶碗蒸(ちゃわんむ)し is a famous dish made this way."},

    {type:"fb", s:"卵(たまご)をよく{1}ください。",
     a:["混(ま)ぜて"],
     opts:["混(ま)ぜて","切(き)って","焼(や)いて","煮(に)て"],
     hint:"Stir the egg well. This Group 2 verb means 'to mix.'",
     sSrc:"Please {1} the egg well."},

    {type:"mc", q:"Japanese chopstick etiquette forbids:",
     opts:["Sticking chopsticks upright in rice","Using chopsticks to eat sushi","Resting chopsticks on a plate","Holding chopsticks in the right hand"],
     ans:"Sticking chopsticks upright in rice",
     hint:"This action resembles a ritual performed at funerals and is considered very bad manners."},

    {type:"match", pairs:[
      {trg:"切(き)る", src:"to cut"},
      {trg:"煮(に)る", src:"to simmer"},
      {trg:"焼(や)く", src:"to grill"},
      {trg:"蒸(む)す", src:"to steam"},
      {trg:"混(ま)ぜる", src:"to mix"}
    ]},

    {type:"fb", s:"{1}はどうですか？ちょうどいいですか？",
     a:["味(あじ)"],
     opts:["味(あじ)","色(いろ)","形(かたち)","サイズ"],
     hint:"The cook is asking about how the food tastes. This noun means 'flavor.'",
     sSrc:"How is the {1}? Is it just right?"}
  ,{type:"fb", s:"この魚(さかな)は{1}でじっくり焼(や)くとおいしいです。",
     a:["鍋(なべ)"],
     opts:["鍋(なべ)","皿(さら)","茶碗(ちゃわん)","箸(はし)"],
     hint:"Cooking this fish slowly over low heat in a heavy pot makes it delicious. This kitchen item is a round cooking vessel.",
     sSrc:"This fish is delicious when grilled slowly in a {1}."}
  ,{type:"match",pairs:[{trg:"台所(だいどころ)",src:"kitchen"},{trg:"レシピ",src:"recipe"}]}]
};
export default BATCH7_L1;
