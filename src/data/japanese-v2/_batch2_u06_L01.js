// Batch 2 expansion for Unit 06 (Family) — more family vocab, counting, describing family
const BATCH2_L_1 = {
  id:"jav2_u06l_b2_1", title:"家族(かぞく)を紹介(しょうかい)する", icon:"👨‍👩‍👦", xp:15, board:true,
  steps:[
  {type:"intro", title:"家族(かぞく)を紹介(しょうかい)する",
   desc:"Expand your family vocabulary with extended family members, in-laws, and useful phrases for describing your family to others. You will also learn how to count people in larger groups and describe family relationships.",
   goals:["Learn extended family terms: uncle, aunt, cousin, in-laws","Describe family members with adjectives","Introduce your family to others naturally"]},

  {type:"teach", trg:"おじさん", src:"uncle (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. For YOUR uncle: おじ. Short i sound (not ojiisan = grandfather).",
   example:"A: おじさんはどこに住(す)んでいますか？\nB: 大阪(おおさか)に住(す)んでいます。",
   exampleSrc:"A: Where does your uncle live?\nB: He lives in Osaka.",
   funFact:"The vowel length is critical: おじさん (short i) = uncle. おじいさん (long ii) = grandfather. Mixing these up is one of the most common and embarrassing mistakes learners make. Listening carefully to vowel length is a key skill in Japanese."},

  {type:"teach", trg:"おばさん", src:"aunt (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. For YOUR aunt: おば. Short a sound (not obaasan = grandmother).",
   example:"A: おばさんはお元気(げんき)ですか？\nB: はい、元気(げんき)です。",
   exampleSrc:"A: Is your aunt well?\nB: Yes, she is well.",
   funFact:"Same vowel trap: おばさん (short a) = aunt. おばあさん (long aa) = grandmother. In shops, calling a woman おばさん can be offensive if she is young, as it implies middle age. Context and tone matter enormously."},

  {type:"teach", trg:"いとこ", src:"cousin", pos:"noun", gender:null,
   note:"Same word for male or female cousins. No humble/honorific split.\nKanji: 従兄弟(じゅうきょうだい) (male) / 従姉妹(じゅうしまい) (female).",
   example:"A: いとこは何人(なんにん)いますか？\nB: 三人(さんにん)います。",
   exampleSrc:"A: How many cousins do you have?\nB: I have three.",
   funFact:"The kanji for cousin differs by gender (four different kanji combinations exist), but in speech and hiragana it is always just いとこ. Cousin marriages were historically common in Japan and remain legal today, though less frequent in modern times."},

  {type:"teach", trg:"孫(まご)", src:"grandchild", pos:"noun", gender:null,
   note:"General word for grandchild. おまごさん is the polite form for others' grandchildren.\nKanji: 孫(まご).",
   example:"A: おまごさんはおいくつですか？\nB: 今年(ことし)三歳(さんさい)になります。",
   exampleSrc:"A: How old is your grandchild?\nB: This year she turns three.",
   funFact:"孫 shows a child (子) connected to a thread (糸), representing the continuation of the family line. In Japanese culture, grandchildren are doted upon. The phrase mago ga kawaii (grandchild is cute) is practically universal among Japanese grandparents."},

  {type:"mc", q:"おじさん (with short i) means:", opts:["grandfather","uncle","father","older brother"], ans:"uncle",
   hint:"Be careful with vowel length. Short i = u..., long ii = grandfather."},

  {type:"teach", trg:"夫(おっと)", src:"husband (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR husband. ごしゅじん is the honorific for someone else's.\nKanji: 夫(おっと).",
   example:"A: 夫(おっと)は会社員(かいしゃいん)です。\nB: どこの会社(かいしゃ)ですか？",
   exampleSrc:"A: My husband is a company employee.\nB: Which company?",
   funFact:"おっと is the formal humble term. In casual speech, wives often say うちのだんな (my husband, casual) or just だんな. The honorific form ごしゅじん literally means 'master of the house,' which some modern speakers find outdated."},

  {type:"teach", trg:"妻(つま)", src:"wife (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR wife. おくさん is the honorific for someone else's.\nKanji: 妻(つま).",
   example:"A: 妻(つま)は先生(せんせい)です。\nB: 何(なん)の先生(せんせい)ですか？",
   exampleSrc:"A: My wife is a teacher.\nB: What kind of teacher?",
   funFact:"つま is the formal humble word. Casual alternatives include かない (my wife, slightly old-fashioned) and うちのよめ (my wife, very casual). おくさん (someone's wife) literally means 'person of the inner quarters,' reflecting historical household roles."},

  {type:"teach", trg:"子供(こども)", src:"child / children", pos:"noun", gender:null,
   note:"General word for child(ren). おこさん is the polite form for others' children.\nKanji: 子供(こども) or 子(こ)ども.",
   example:"A: 子供(こども)は何人(なんにん)いますか？\nB: 二人(ふたり)います。息子(むすこ)と娘(むすめ)です。",
   exampleSrc:"A: How many children do you have?\nB: Two. A son and a daughter.",
   funFact:"子供 uses 供 (companion/attendant), but some people prefer 子ども with hiragana for ども, feeling 供 sounds subordinate. This kanji debate is a genuine topic in Japanese education. Both spellings are accepted."},

  {type:"teach", trg:"息子(むすこ)", src:"son (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR son. むすこさん is polite for someone else's.\nKanji: 息子(むすこ).",
   example:"A: 息子(むすこ)は今年(ことし)大学(だいがく)に入(はい)りました。\nB: おめでとうございます！",
   exampleSrc:"A: My son entered university this year.\nB: Congratulations!",
   funFact:"息子 combines 息 (breath/life) and 子 (child), literally 'breathing child' or 'living child.' The polite form for someone else's son can also be ぼっちゃん (young master), though this sounds quite formal or old-fashioned today."},

  {type:"teach", trg:"娘(むすめ)", src:"daughter (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR daughter. おじょうさん is polite for someone else's.\nKanji: 娘(むすめ).",
   example:"A: 娘(むすめ)はまだ高校生(こうこうせい)です。\nB: 何年生(なんねんせい)ですか？",
   exampleSrc:"A: My daughter is still a high school student.\nB: What year?",
   funFact:"娘 can also mean 'young woman' in general. おじょうさん (someone else's daughter) literally means 'young lady' and is also used as a general term for young women, similar to how おにいさん is used for young men."},

  {type:"fb", s:"{1}は会社員(かいしゃいん)です。\n(My husband is a company employee.)", a:"夫(おっと)", opts:["夫(おっと)","ごしゅじん","お父(とう)さん","父(ちち)"], sSrc:"My husband is a company employee.",
   hint:"The humble form used when referring to YOUR own husband."},

  {type:"teach", trg:"六人(ろくにん)", src:"six people", pos:"num", gender:null,
   note:"Regular: roku (six) + nin (people counter). No sound changes.\nKanji: 六人(ろくにん).",
   example:"A: 家族(かぞく)は六人(ろくにん)です。\nB: にぎやかですね！",
   exampleSrc:"A: My family is six people.\nB: That is lively!",
   funFact:"Japanese families have been getting smaller. The average household size dropped from 4.1 in 1960 to 2.2 in 2020. A six-person family is now considered large. The word にぎやか (lively/bustling) is a compliment when describing a big family."},

  {type:"teach", trg:"七人(しちにん)", src:"seven people", pos:"num", gender:null,
   note:"Uses しち (not なな): しちにん. Also read ななにん in some contexts.\nKanji: 七人(しちにん).",
   example:"A: パーティーに七人(しちにん)来(き)ます。\nB: たくさんですね！",
   exampleSrc:"A: Seven people are coming to the party.\nB: That is a lot!",
   funFact:"Seven people is famously associated with the film 七人(しちにん)の侍(さむらい) (Seven Samurai) by 黒沢(くろさわ)明(あきら), one of the most influential films ever made. Both しちにん and ななにん are used, but しちにん is more traditional."},

  {type:"teach", trg:"にぎやか", src:"lively / bustling", pos:"adj", gender:null,
   note:"A な-adjective describing a cheerful, busy atmosphere.\nUsed positively for families, neighborhoods, events.",
   example:"A: 大(おお)きい家族(かぞく)ですね。\nB: はい、いつもにぎやかです。",
   exampleSrc:"A: You have a big family.\nB: Yes, it is always lively.",
   funFact:"にぎやか is always positive in Japanese, unlike 'noisy' which can be negative. For negative loudness, use うるさい. A にぎやかな町(まち)は lively, fun neighborhood. A うるさい町(まち)は annoyingly loud one. The distinction matters."},

  {type:"mc", q:"妻(つま) is used when talking about:", opts:["someone else's wife","your own wife","your mother","someone else's mother"], ans:"your own wife",
   hint:"This is the h... form for referring to YOUR spouse in polite conversation."},

  {type:"match", pairs:[{trg:"おじさん",src:"uncle"},{trg:"おばさん",src:"aunt"},{trg:"いとこ",src:"cousin"},{trg:"孫(まご)",src:"grandchild"}]},

  {type:"match", pairs:[{trg:"夫(おっと)",src:"my husband"},{trg:"妻(つま)",src:"my wife"},{trg:"息子(むすこ)",src:"my son"},{trg:"娘(むすめ)",src:"my daughter"}]},

  {type:"fb", s:"子供(こども)は{1}います。\n(I have two children.)", a:"二人(ふたり)", opts:["二人(ふたり)","二人(ににん)","二(ふた)つ","二匹(にひき)"], sSrc:"I have two children.",
   hint:"The people counter for two, using the native Japanese number system."},

  {type:"mc", q:"にぎやか describes:", opts:["a quiet place","a lively atmosphere","a cold feeling","a sad mood"], ans:"a lively atmosphere",
   hint:"This positive adjective describes a cheerful, bustling environment."},

  {type:"mc", q:"息子(むすこ) means:", opts:["my daughter","someone's son","my son","someone's daughter"], ans:"my son",
   hint:"The humble form for YOUR own male child."},

  {type:"fb", s:"{1}は何人(なんにん)いますか？\n(How many cousins do you have?)", a:"いとこ", opts:["いとこ","兄弟(きょうだい)","子供(こども)","孫(まご)"], sSrc:"How many cousins do you have?",
   hint:"The gender-neutral word for a relative of your same generation but different parents."},
]};
export default BATCH2_L_1;
