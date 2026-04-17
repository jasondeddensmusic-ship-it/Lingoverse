// Batch 7 – Unit 06 (A1.2 Family): Animals & Pets
const BATCH7_L1 = {
  id:"jav2_u06l_b7_1", title:"動物(どうぶつ)", icon:"🐾", xp:15, board:true,
  steps:[
    {type:"intro", title:"動物(どうぶつ)",
     desc:"Learn the names of common animals in Japanese. Animals are deeply woven into Japanese culture, from the zodiac to proverbs. Many families keep pets, making animal vocabulary essential for daily conversation.",
     goals:["Name common domestic and wild animals","Use animal-related expressions","Learn animal counter words"]},

    {type:"teach", trg:"動物(どうぶつ)", src:"animal", pos:"noun", gender:null,
     note:"動物園(どうぶつえん) = zoo.\n人間(にんげん)も動物(どうぶつ)です = humans are animals too.",
     example:"A: 動物(どうぶつ)は好(す)きですか？\nB: はい、特(とく)に犬(いぬ)が好(す)きです。",
     exampleSrc:"A: Do you like animals?\nB: Yes, I especially like dogs.",
     funFact:"動物(どうぶつ) combines 動 (move) and 物 (thing). Animals are 'moving things.' Japan's love of animals is legendary. There are cat cafes (猫(ねこ)カフェ), owl cafes, rabbit islands, and even fox villages. The concept of animal-themed spaces is a Japanese cultural export."},

    {type:"teach", trg:"犬(いぬ)", src:"dog", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき), 二匹(にひき).\n子犬(こいぬ) = puppy. 大(おお)きい犬(いぬ) = big dog.",
     example:"A: 犬(いぬ)を飼(か)っていますか？\nB: はい、柴犬(しばいぬ)を飼(か)っています。",
     exampleSrc:"A: Do you keep a dog?\nB: Yes, I keep a Shiba Inu.",
     funFact:"The 柴犬(しばいぬ) (Shiba Inu) became an internet sensation as the 'doge' meme. Japan has six native dog breeds, all designated natural monuments: 柴(しば), 秋田(あきた), 四国(しこく), 紀州(きしゅう), 甲斐(かい), and 北海道(ほっかいどう). 八公(はちこう) (Hachiko), the loyal 秋田犬(あきたいぬ), has a statue at 渋谷(しぶや) Station."},

    {type:"teach", trg:"猫(ねこ)", src:"cat", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき). 子猫(こねこ) = kitten.\n野良猫(のらねこ) = stray cat. 招(まね)き猫(ねこ) = beckoning cat.",
     example:"A: 猫(ねこ)は何匹(なんびき)いますか？\nB: 二匹(にひき)います。白(しろ)と黒(くろ)です。",
     exampleSrc:"A: How many cats do you have?\nB: Two. White and black.",
     funFact:"Japan is a 猫(ねこ) nation. 招(まね)き猫(ねこ) (beckoning cat) is a lucky charm in shops worldwide. Cat islands like 田代島(たしろじま) have more cats than humans. Japanese cats say にゃん (nyan), not 'meow.' February 22 is Cat Day because にゃんにゃんにゃん sounds like 2-2-2."},

    {type:"teach", trg:"兎(うさぎ)", src:"rabbit", pos:"noun", gender:null,
     note:"Counter: traditionally 一羽(いちわ) (bird counter), now 一匹(いっぴき).\n兎(うさぎ)の耳(みみ) = rabbit ears.",
     example:"A: 兎(うさぎ)はかわいいですね。\nB: 耳(みみ)が長(なが)くてふわふわです。",
     exampleSrc:"A: Rabbits are cute.\nB: Long ears and fluffy.",
     funFact:"Rabbits are counted with the bird counter (羽(わ)) because Buddhist monks were forbidden to eat meat but considered rabbits as 'birds' to get around the rule. The kanji for rabbit's ear (兎) looks like a rabbit with its ears. Japan even has a rabbit island: 大久野島(おおくのしま)."},

    {type:"teach", trg:"鳥(とり)", src:"bird", pos:"noun", gender:null,
     note:"Counter: 一羽(いちわ), 二羽(にわ). 小鳥(ことり) = small bird.\n焼(や)き鳥(とり) = grilled chicken skewers.",
     example:"A: 庭(にわ)に鳥(とり)がいますね。\nB: 雀(すずめ)ですね。かわいいです。",
     exampleSrc:"A: There are birds in the garden.\nB: Sparrows. They are cute.",
     funFact:"鳥(とり) covers all birds, but also means 'chicken' in food contexts. 焼(や)き鳥(とり) literally means 'grilled bird.' 雀(すずめ) (sparrow) and 烏(からす) (crow) are the most common Japanese city birds. Crows in Tokyo are famously large and intelligent."},

    {type:"teach", trg:"魚(さかな)", src:"fish", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき) (alive), 一枚(いちまい) (flat fish cut).\n魚(さかな)を釣(つ)る = to go fishing.",
     example:"A: 日本人(にほんじん)は魚(さかな)をよく食(た)べますね。\nB: はい、毎日(まいにち)食(た)べる人(ひと)もいます。",
     exampleSrc:"A: Japanese people eat fish a lot.\nB: Yes, some people eat it every day.",
     funFact:"Japan consumes more 魚(さかな) per capita than almost any country. 豊洲(とよす) fish market handles 480 types of seafood. The kanji 魚 shows a fish with its head, body, and tail. Japanese children learn fish kanji early because 魚(さかな) is on every school lunch menu."},

    {type:"teach", trg:"虫(むし)", src:"insect / bug", pos:"noun", gender:null,
     note:"虫(むし)取(と)り = bug catching.\n甲虫(かぶとむし) = rhinoceros beetle.",
     example:"A: 夏(なつ)は虫(むし)が多(おお)いですね。\nB: 甲虫(かぶとむし)を見(み)つけました！",
     exampleSrc:"A: There are many bugs in summer.\nB: I found a rhinoceros beetle!",
     funFact:"Japanese children adore 虫(むし). Catching 甲虫(かぶとむし) (beetles) and 鍬形虫(くわがたむし) (stag beetles) is a beloved summer activity. Pet shops sell live beetles. Insect-themed anime and games are popular. This love of 虫(むし) connects to Japan's deep respect for nature and small creatures."},

    {type:"teach", trg:"猿(さる)", src:"monkey", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき). 日本猿(にほんざる) = Japanese macaque.\n猿真似(さるまね) = copycat (monkey imitation).",
     example:"A: 日光(にっこう)で猿(さる)を見(み)ました。\nB: 温泉(おんせん)に入(はい)る猿(さる)ですか？",
     exampleSrc:"A: I saw monkeys in Nikko.\nB: The monkeys that bathe in hot springs?",
     funFact:"The three wise monkeys (見(み)ざる聞(き)かざる言(い)わざる: see no evil, hear no evil, speak no evil) originated at 日光(にっこう)の東照宮(とうしょうぐう). 日本猿(にほんざる) (Japanese macaque) is the northernmost primate besides humans. 地獄谷(じごくだに)で温泉(おんせん)に入(はい)る雪猿(ゆきざる)は世界的(せかいてき)に有名(ゆうめい)です。"},

    {type:"teach", trg:"馬(うま)", src:"horse", pos:"noun", gender:null,
     note:"Counter: 一頭(いっとう) (large animals).\n競馬(けいば) = horse racing. 旨(うま)い = skillful (different word).",
     example:"A: 馬(うま)に乗(の)ったことがありますか？\nB: いいえ、まだです。乗(の)ってみたいです。",
     exampleSrc:"A: Have you ever ridden a horse?\nB: No, not yet. I want to try.",
     funFact:"馬(うま) is one of the 12 zodiac animals. The year of the horse (午年(うまどし)) comes every 12 years. The expression 馬(うま)が合(あ)う (horses match) means two people get along well. Interestingly, 旨(うま)い (skillful/delicious) is unrelated to 馬(うま) (horse) despite sounding similar."},

    {type:"teach", trg:"亀(かめ)", src:"turtle / tortoise", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき). 海亀(うみがめ) = sea turtle.\n亀(かめ)は万年(まんねん) = turtles live 10,000 years (proverb).",
     example:"A: この亀(かめ)は何歳(なんさい)ですか？\nB: 50歳(さい)ぐらいです。",
     exampleSrc:"A: How old is this turtle?\nB: About 50 years old.",
     funFact:"Turtles symbolize longevity in Japan. The proverb 鶴(つる)は千年(せんねん)、亀(かめ)は万年(まんねん) (cranes live 1,000 years, turtles 10,000) is said at celebrations. 浦島太郎(うらしまたろう), one of Japan's most famous folk tales, features a fisherman who rides a 亀(かめ) to an underwater palace."},

    {type:"teach", trg:"蛇(へび)", src:"snake", pos:"noun", gender:null,
     note:"Counter: 一匹(いっぴき). Zodiac animal.\n白蛇(しろへび) = white snake (lucky).",
     example:"A: 蛇(へび)は怖(こわ)いですか？\nB: 少(すこ)し怖(こわ)いです。でも毒(どく)がなければ大丈夫(だいじょうぶ)です。",
     exampleSrc:"A: Are you afraid of snakes?\nB: A little. But if they are not poisonous, it is okay.",
     funFact:"White snakes (白蛇(しろへび)) are considered messengers of the god of wealth. Finding a shed snake skin in your wallet is believed to bring fortune. The city of 岩国(いわくに) in 山口(やまぐち) has protected albino snakes as a natural monument since 1924."},

    {type:"teach", trg:"飼(か)う", src:"to keep (a pet) / to raise", pos:"verb", gender:null,
     note:"Group 1 verb. ペットを飼(か)う = to keep a pet.\nDifferent from 買(か)う (to buy, same sound).",
     example:"A: 何(なに)か動物(どうぶつ)を飼(か)っていますか？\nB: ハムスターを飼(か)っています。",
     exampleSrc:"A: Do you keep any animals?\nB: I keep a hamster.",
     funFact:"飼(か)う (to keep a pet) and 買(か)う (to buy) are perfect homophones. Context distinguishes them. Japanese apartments often ban pets (ペット禁止(きんし)), so many people keep small animals like ハムスター (hamsters) or 目高(めだか) (medaka fish) instead."},

    {type:"teach", trg:"餌(えさ)", src:"animal food / feed", pos:"noun", gender:null,
     note:"餌(えさ)をあげる = to give food (to animals).\n餌(えさ)やり = feeding (at a zoo).",
     example:"A: 金魚(きんぎょ)に餌(えさ)をあげましたか？\nB: まだです。今(いま)あげます。",
     exampleSrc:"A: Did you feed the goldfish?\nB: Not yet. I will feed them now.",
     funFact:"餌(えさ) is only used for animal food, never for humans (that would be very rude). At Japanese zoos and parks, 餌(えさ)やり (feeding experiences) are popular. In 奈良(なら), you can buy special deer crackers (鹿(しか)せんべい) to feed the sacred deer that roam freely."},

    // Quiz steps
    {type:"mc", q:"兎(うさぎ) was traditionally counted with which counter?",
     opts:["羽(わ) (bird counter)","匹(ひき) (small animal counter)","頭(とう) (large animal counter)","枚(まい) (flat object counter)"],
     ans:"羽(わ) (bird counter)",
     hint:"Buddhist monks reclassified this animal to get around a meat-eating ban."},

    {type:"match", pairs:[
      {trg:"犬(いぬ)", src:"dog"},
      {trg:"猫(ねこ)", src:"cat"},
      {trg:"魚(さかな)", src:"fish"},
      {trg:"鳥(とり)", src:"bird"},
      {trg:"猿(さる)", src:"monkey"}
    ]},

    {type:"fb", s:"柴犬(しばいぬ)を{1}います。名前(なまえ)はコロです。",
     a:["飼(か)って"],
     opts:["飼(か)って","食(た)べて","見(み)て","あげて"],
     hint:"The て-form of a verb meaning 'to keep (a pet).' Not the same kanji as 'to buy.'",
     sSrc:"I {1} a Shiba Inu. Its name is Koro."},

    {type:"mc", q:"招(まね)き猫(ねこ) is:",
     opts:["A lucky beckoning cat figurine","A type of cat food","A cat breed","A cat cafe"],
     ans:"A lucky beckoning cat figurine",
     hint:"These figurines sit in shop entrances with one paw raised, b... customers and good fortune."},

    {type:"fb", s:"金魚(きんぎょ)に{1}をあげてください。",
     a:["餌(えさ)"],
     opts:["餌(えさ)","ご飯(はん)","お菓子(かし)","お茶(ちゃ)"],
     hint:"This word is used only for animal food, never for human food.",
     sSrc:"Please give {1} to the goldfish."},

    {type:"mc", q:"鶴(つる)は千年(せんねん)、亀(かめ)は万年(まんねん) means:",
     opts:["Cranes live 1000 years, turtles 10000","Cranes and turtles are friends","Cranes fly, turtles swim","Cranes are fast, turtles are slow"],
     ans:"Cranes live 1000 years, turtles 10000",
     hint:"This proverb celebrates longevity. Both animals symbolize a long and healthy life in Japan."},

    {type:"match", pairs:[
      {trg:"兎(うさぎ)", src:"rabbit"},
      {trg:"亀(かめ)", src:"turtle"},
      {trg:"蛇(へび)", src:"snake"},
      {trg:"馬(うま)", src:"horse"},
      {trg:"虫(むし)", src:"insect"}
    ]},

    {type:"fb", s:"日本(にほん)の子(こ)どもは夏(なつ)に{1}をつかまえます。",
     a:["甲虫(かぶとむし)"],
     opts:["甲虫(かぶとむし)","魚(さかな)","鳥(とり)","亀(かめ)"],
     hint:"Japanese children catch these large beetles in summer. They are kept as pets and even sold in shops.",
     sSrc:"Japanese children catch {1} in summer."}
  ]
};
export default BATCH7_L1;
