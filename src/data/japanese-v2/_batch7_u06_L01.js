// Batch 7 – Unit 06 (A1.2 Family): Animals & Pets
const BATCH7_L1 = {
  id:"jav2_u06l_b7_1", title:"どうぶつ", icon:"🐾", xp:15, board:true,
  steps:[
    {type:"intro", title:"どうぶつ",
     desc:"Learn the names of common animals in Japanese. Animals are deeply woven into Japanese culture, from the zodiac to proverbs. Many families keep pets, making animal vocabulary essential for daily conversation.",
     goals:["Name common domestic and wild animals","Use animal-related expressions","Learn animal counter words"]},

    {type:"teach", trg:"どうぶつ", src:"animal", pos:"noun", gender:null,
     note:"Kanji: 動物. どうぶつえん = zoo.\nにんげんもどうぶつです = humans are animals too.",
     example:"A: どうぶつはすきですか？\nB: はい、とくにいぬがすきです。",
     exampleSrc:"A: Do you like animals?\nB: Yes, I especially like dogs.",
     funFact:"動物 combines 動 (move) and 物 (thing). Animals are 'moving things.' Japan's love of animals is legendary. There are cat cafes (ねこカフェ), owl cafes, rabbit islands, and even fox villages. The concept of animal-themed spaces is a Japanese cultural export."},

    {type:"teach", trg:"いぬ", src:"dog", pos:"noun", gender:null,
     note:"Counter: いっぴき, にひき.\nこいぬ = puppy. おおきいいぬ = big dog.",
     example:"A: いぬをかっていますか？\nB: はい、しばいぬをかっています。",
     exampleSrc:"A: Do you keep a dog?\nB: Yes, I keep a Shiba Inu.",
     funFact:"The Shiba Inu (しばいぬ) became an internet sensation as the 'doge' meme. Japan has six native dog breeds, all designated natural monuments: Shiba, Akita, Shikoku, Kishu, Kai, and Hokkaido. Hachiko, the loyal Akita, has a statue at Shibuya Station."},

    {type:"teach", trg:"ねこ", src:"cat", pos:"noun", gender:null,
     note:"Counter: いっぴき. こねこ = kitten.\nのらねこ = stray cat. まねきねこ = beckoning cat.",
     example:"A: ねこはなんびきいますか？\nB: にひきいます。しろとくろです。",
     exampleSrc:"A: How many cats do you have?\nB: Two. White and black.",
     funFact:"Japan is a ねこ nation. The まねきねこ (beckoning cat) is a lucky charm in shops worldwide. Cat islands like Tashirojima have more cats than humans. Japanese cats say にゃん (nyan), not 'meow.' February 22 is Cat Day because にゃんにゃんにゃん sounds like 2-2-2."},

    {type:"teach", trg:"うさぎ", src:"rabbit", pos:"noun", gender:null,
     note:"Counter: traditionally いちわ (bird counter), now いっぴき.\nうさぎのみみ = rabbit ears.",
     example:"A: うさぎはかわいいですね。\nB: みみがながくてふわふわです。",
     exampleSrc:"A: Rabbits are cute.\nB: Long ears and fluffy.",
     funFact:"Rabbits are counted with the bird counter (わ) because Buddhist monks were forbidden to eat meat but considered rabbits as 'birds' to get around the rule. The kanji for rabbit's ear (兎) looks like a rabbit with its ears. Japan even has a rabbit island: Okunoshima."},

    {type:"teach", trg:"とり", src:"bird", pos:"noun", gender:null,
     note:"Counter: いちわ, にわ. ことり = small bird.\nやきとり = grilled chicken skewers.",
     example:"A: にわにとりがいますね。\nB: すずめですね。かわいいです。",
     exampleSrc:"A: There are birds in the garden.\nB: Sparrows. They are cute.",
     funFact:"とり (鳥) covers all birds, but also means 'chicken' in food contexts. やきとり literally means 'grilled bird.' すずめ (sparrow) and からす (crow) are the most common Japanese city birds. Crows in Tokyo are famously large and intelligent."},

    {type:"teach", trg:"さかな", src:"fish", pos:"noun", gender:null,
     note:"Counter: いっぴき (alive), いちまい (flat fish cut).\nさかなをつる = to go fishing.",
     example:"A: にほんじんはさかなをよくたべますね。\nB: はい、まいにちたべるひともいます。",
     exampleSrc:"A: Japanese people eat fish a lot.\nB: Yes, some people eat it every day.",
     funFact:"Japan consumes more さかな per capita than almost any country. Tsukiji (now Toyosu) fish market handles 480 types of seafood. The kanji 魚 shows a fish with its head, body, and tail. Japanese children learn fish kanji early because fish is on every school lunch menu."},

    {type:"teach", trg:"むし", src:"insect / bug", pos:"noun", gender:null,
     note:"Kanji: 虫. むしとり = bug catching.\nかぶとむし = rhinoceros beetle.",
     example:"A: なつはむしがおおいですね。\nB: かぶとむしをみつけました！",
     exampleSrc:"A: There are many bugs in summer.\nB: I found a rhinoceros beetle!",
     funFact:"Japanese children adore むし. Catching beetles (かぶとむし) and stag beetles (くわがた) is a beloved summer activity. Pet shops sell live beetles. Insect-themed anime and games are popular. This love of むし connects to Japan's deep respect for nature and small creatures."},

    {type:"teach", trg:"さる", src:"monkey", pos:"noun", gender:null,
     note:"Counter: いっぴき. にほんざる = Japanese macaque.\nさるまね = copycat (monkey imitation).",
     example:"A: にっこうでさるをみました。\nB: おんせんにはいるさるですか？",
     exampleSrc:"A: I saw monkeys in Nikko.\nB: The monkeys that bathe in hot springs?",
     funFact:"The three wise monkeys (見ざる聞かざる言わざる: see no evil, hear no evil, speak no evil) originated at Nikko's Toshogu shrine. The Japanese macaque (にほんざる) is the northernmost primate besides humans. Snow monkeys bathing in hot springs at Jigokudani are world-famous."},

    {type:"teach", trg:"うま", src:"horse", pos:"noun", gender:null,
     note:"Counter: いっとう (large animals).\nけいば = horse racing. うまい = skillful (different word).",
     example:"A: うまにのったことがありますか？\nB: いいえ、まだです。のってみたいです。",
     exampleSrc:"A: Have you ever ridden a horse?\nB: No, not yet. I want to try.",
     funFact:"うま (馬) is one of the 12 zodiac animals. The year of the horse (うまどし) comes every 12 years. The expression うまがあう (horses match) means two people get along well. Interestingly, うまい (skillful/delicious) is unrelated to うま (horse) despite sounding similar."},

    {type:"teach", trg:"かめ", src:"turtle / tortoise", pos:"noun", gender:null,
     note:"Counter: いっぴき. うみがめ = sea turtle.\nかめはまんねん = turtles live 10,000 years (proverb).",
     example:"A: このかめはなんさいですか？\nB: 50さいぐらいです。",
     exampleSrc:"A: How old is this turtle?\nB: About 50 years old.",
     funFact:"Turtles symbolize longevity in Japan. The proverb つるはせんねん、かめはまんねん (cranes live 1,000 years, turtles 10,000) is said at celebrations. Urashima Taro, one of Japan's most famous folk tales, features a fisherman who rides a かめ to an underwater palace."},

    {type:"teach", trg:"へび", src:"snake", pos:"noun", gender:null,
     note:"Counter: いっぴき. Zodiac animal.\nしろへび = white snake (lucky).",
     example:"A: へびはこわいですか？\nB: すこしこわいです。でもどくがなければだいじょうぶです。",
     exampleSrc:"A: Are you afraid of snakes?\nB: A little. But if they are not poisonous, it is okay.",
     funFact:"White snakes (しろへび) are considered messengers of the god of wealth. Finding a shed snake skin in your wallet is believed to bring fortune. The city of Iwakuni in Yamaguchi has protected albino snakes as a natural monument since 1924."},

    {type:"teach", trg:"かう", src:"to keep (a pet) / to raise", pos:"verb", gender:null,
     note:"Group 1 verb. ペットをかう = to keep a pet.\nDifferent from かう (to buy, same sound).",
     example:"A: なにかどうぶつをかっていますか？\nB: ハムスターをかっています。",
     exampleSrc:"A: Do you keep any animals?\nB: I keep a hamster.",
     funFact:"かう (飼う, to keep a pet) and かう (買う, to buy) are perfect homophones. Context distinguishes them. Japanese apartments often ban pets (ペットきんし), so many people keep small animals like ハムスター (hamsters) or めだか (medaka fish) instead."},

    {type:"teach", trg:"えさ", src:"animal food / feed", pos:"noun", gender:null,
     note:"えさをあげる = to give food (to animals).\nえさやり = feeding (at a zoo).",
     example:"A: きんぎょにえさをあげましたか？\nB: まだです。いまあげます。",
     exampleSrc:"A: Did you feed the goldfish?\nB: Not yet. I will feed them now.",
     funFact:"えさ (餌) is only used for animal food, never for humans (that would be very rude). At Japanese zoos and parks, えさやり (feeding experiences) are popular. In Nara, you can buy special deer crackers (しかせんべい) to feed the sacred deer that roam freely."},

    // Quiz steps
    {type:"mc", q:"うさぎ was traditionally counted with which counter?",
     opts:["わ (bird counter)","ひき (small animal counter)","とう (large animal counter)","まい (flat object counter)"],
     ans:"わ (bird counter)",
     hint:"Buddhist monks reclassified this animal to get around a meat-eating ban."},

    {type:"match", pairs:[
      {trg:"いぬ", src:"dog"},
      {trg:"ねこ", src:"cat"},
      {trg:"さかな", src:"fish"},
      {trg:"とり", src:"bird"},
      {trg:"さる", src:"monkey"}
    ]},

    {type:"fb", s:"しばいぬを{1}います。なまえはコロです。",
     a:["かって"],
     opts:["かって","たべて","みて","あげて"],
     hint:"The て-form of a verb meaning 'to keep (a pet).' Not the same kanji as 'to buy.'",
     sSrc:"I {1} a Shiba Inu. Its name is Koro."},

    {type:"mc", q:"まねきねこ is:",
     opts:["A lucky beckoning cat figurine","A type of cat food","A cat breed","A cat cafe"],
     ans:"A lucky beckoning cat figurine",
     hint:"These figurines sit in shop entrances with one paw raised, b... customers and good fortune."},

    {type:"fb", s:"きんぎょに{1}をあげてください。",
     a:["えさ"],
     opts:["えさ","ごはん","おかし","おちゃ"],
     hint:"This word is used only for animal food, never for human food.",
     sSrc:"Please give {1} to the goldfish."},

    {type:"mc", q:"つるはせんねん、かめはまんねん means:",
     opts:["Cranes live 1000 years, turtles 10000","Cranes and turtles are friends","Cranes fly, turtles swim","Cranes are fast, turtles are slow"],
     ans:"Cranes live 1000 years, turtles 10000",
     hint:"This proverb celebrates longevity. Both animals symbolize a long and healthy life in Japan."},

    {type:"match", pairs:[
      {trg:"うさぎ", src:"rabbit"},
      {trg:"かめ", src:"turtle"},
      {trg:"へび", src:"snake"},
      {trg:"うま", src:"horse"},
      {trg:"むし", src:"insect"}
    ]},

    {type:"fb", s:"にほんのこどもはなつに{1}をつかまえます。",
     a:["かぶとむし"],
     opts:["かぶとむし","さかな","とり","かめ"],
     hint:"Japanese children catch these large beetles in summer. They are kept as pets and even sold in shops.",
     sSrc:"Japanese children catch {1} in summer."}
  ]
};
export default BATCH7_L1;
