// Unit 03 Expansion L06. Clothes & What Are You Wearing?
const LESSON_6 = {
  id:"jav2_u3l6", title:"ふく", icon:"👕", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふく",
     desc:"Learn the names of common clothing items in Japanese. Many fashion words are loanwords from English or French, making them easier to remember. You will also learn to describe what someone is wearing.",
     goals:["Name common clothing items","Describe what someone is wearing","Understand which clothing words are loanwords"]},

    {type:"teach", trg:"ふく", src:"clothes / clothing", pos:"noun", gender:null,
     note:"General word for clothes. Also read ように in some compounds.\nKanji: 服.",
     example:"A: あたらしいふくをかいましたか？\nB: はい、ワンピースをかいました。",
     exampleSrc:"A: Did you buy new clothes?\nB: Yes, I bought a dress.",
     funFact:"服 originally meant 'to wear/submit to.' Yofuku (Western clothes) vs wafuku (Japanese clothes/kimono) is a key distinction. After the Meiji era, yofuku became standard daily wear while wafuku became reserved for special occasions."},

    {type:"teach", trg:"シャツ", src:"shirt", pos:"noun", gender:null,
     note:"From English 'shirt.' T-shirt: ティーシャツ. Dress shirt: ワイシャツ (from 'white shirt').",
     example:"A: このシャツはいくらですか？\nB: にせんえんです。",
     exampleSrc:"A: How much is this shirt?\nB: 2,000 yen.",
     funFact:"Waishatsu (dress shirt) comes from 'white shirt,' not 'Y-shirt' as many Japanese people believe. This folk etymology is so widespread that even Japanese dictionaries note both explanations. The abbreviation is a uniquely Japanese creation."},

    {type:"teach", trg:"ズボン", src:"pants / trousers", pos:"noun", gender:null,
     note:"From French 'jupon' (petticoat). Written in katakana.\nYounger people often say パンツ (pantsu).",
     example:"A: くろいズボンはどこですか？\nB: クローゼットのなかです。",
     exampleSrc:"A: Where are the black pants?\nB: In the closet.",
     funFact:"Zubon comes from French, not English. The French jupon originally meant a type of skirt/petticoat. How it came to mean trousers in Japanese is a linguistic mystery. Younger generations prefer 'pantsu' from English 'pants.'"},

    {type:"teach", trg:"スカート", src:"skirt", pos:"noun", gender:null,
     note:"From English 'skirt.' School uniforms in Japan often include skirts for girls.\nWritten in katakana.",
     example:"A: みじかいスカートですね。\nB: はい、なつですから。",
     exampleSrc:"A: It's a short skirt.\nB: Yes, because it's summer.",
     funFact:"Japanese school uniforms (seifuku) with pleated skirts are iconic worldwide, influencing fashion and pop culture. The sailor-style uniform (sera-fuku) was adopted from European naval uniforms in the 1920s. Some schools still use this classic design."},

    {type:"mc", q:"ズボン comes from which language?", opts:["English","German","French","Portuguese"], ans:"French",
     hint:"This clothing word entered Japanese from a F... word for a type of undergarment."},

    {type:"teach", trg:"くつ", src:"shoes", pos:"noun", gender:null,
     note:"General word for shoes. Types: スニーカー (sneakers), ブーツ (boots).\nKanji: 靴.",
     example:"A: くつをぬいでください。\nB: はい。スリッパはありますか？",
     exampleSrc:"A: Please take off your shoes.\nB: Yes. Are there slippers?",
     funFact:"Removing shoes (kutsu wo nugu) before entering a home is one of the most important Japanese customs. The genkan (entrance hall) exists specifically for this transition. Wearing outdoor shoes inside is considered extremely rude and unhygienic."},

    {type:"teach", trg:"くつした", src:"socks", pos:"noun", gender:null,
     note:"Literally: 靴 (shoes) + 下 (under). Socks go under shoes.\nKanji: 靴下.",
     example:"A: くつしたはどこですか？\nB: タンスのなかです。",
     exampleSrc:"A: Where are the socks?\nB: In the chest of drawers.",
     funFact:"Kutsu (shoes) + shita (below/under) = literally 'below-shoes.' This logical compound makes perfect sense. Japanese sock culture is serious because socks are always visible indoors (no shoes inside). Cute character socks are popular gifts."},

    {type:"teach", trg:"ぼうし", src:"hat / cap", pos:"noun", gender:null,
     note:"Covers all types of hats. Types: キャップ (cap), ベレーぼう (beret).\nKanji: 帽子.",
     example:"A: きょうはぼうしをかぶりましょう。\nB: はい、あついですからね。",
     exampleSrc:"A: Let's wear hats today.\nB: Yes, because it's hot.",
     funFact:"帽 (headgear) + 子 (small thing). Japanese elementary students wear bright yellow hats (kiiro boushi) so they are visible in traffic. This is a nationwide safety measure that has become an iconic childhood image."},

    {type:"teach", trg:"コート", src:"coat / overcoat", pos:"noun", gender:null,
     note:"From English 'coat.' For winter outerwear.\nWritten in katakana.",
     example:"A: さむいですね。コートをきましょう。\nB: はい、そうしましょう。",
     exampleSrc:"A: It's cold. Let's wear coats.\nB: Yes, let's do that.",
     funFact:"Japan's fashion industry in Tokyo rivals Paris, Milan, and New York. Harajuku street fashion is world-famous for creative layering and bold coat choices. Japanese brands like Uniqlo revolutionized affordable, high-quality outerwear."},

    {type:"fb", s:"いえにはいるとき、{1}をぬぎます。",
     a:["くつ"],
     opts:["くつ","ぼうし","コート","くつした"],
     hint:"The footwear item you must remove before entering a Japanese home.",
     sSrc:"When entering a house, you take off your shoes."},

    {type:"teach", trg:"めがね", src:"glasses (review)", pos:"noun", gender:null,
     note:"Review from L1. From Portuguese 'megane.' Sunglasses: サングラス.\nKanji: 眼鏡.",
     example:"A: あたらしいめがねですか？\nB: はい、きのうかいました。",
     exampleSrc:"A: Are those new glasses?\nB: Yes, I bought them yesterday.",
     funFact:"Japan has one of the highest rates of nearsightedness in the world, especially among young people. Over 50% of Japanese teenagers need vision correction. Glasses shops are everywhere, with Jins and Zoff offering affordable designer frames."},

    {type:"teach", trg:"かばん", src:"bag (review)", pos:"noun", gender:null,
     note:"Review from L1. General word for any bag. Specific: リュック (backpack), ハンドバッグ (handbag).",
     example:"A: そのかばんはすてきですね。\nB: ありがとうございます。プレゼントです。",
     exampleSrc:"A: That bag is lovely.\nB: Thank you. It was a present.",
     funFact:"Japanese randoseru (from Dutch 'ransel'), the hard leather school backpacks used by elementary students, are status items costing 30,000 to 100,000 yen. Grandparents traditionally buy them as gifts. They are designed to last all six years of elementary school."},

    {type:"teach", trg:"きる", src:"to wear (upper body)", pos:"verb", gender:null,
     note:"For shirts, coats, dresses. Different verbs for different body parts.\nKanji: 着る.",
     example:"A: なにをきますか？\nB: しろいシャツをきます。",
     exampleSrc:"A: What will you wear?\nB: I'll wear a white shirt.",
     funFact:"Japanese uses different verbs for wearing different items: kiru (upper body), haku (lower body/shoes), kaburu (head), kakeru (glasses/accessories), shimeru (ties/belts), hameru (rings/gloves). There is no universal 'wear' verb."},

    {type:"teach", trg:"はく", src:"to wear (lower body / feet)", pos:"verb", gender:null,
     note:"For pants, skirts, shoes, socks. Complementary to きる (upper body).\nKanji: 履く.",
     example:"A: くろいズボンをはきます。\nB: くつもくろいのをはきますか？",
     exampleSrc:"A: I'll wear black pants.\nB: Will you wear black shoes too?",
     funFact:"Haku covers everything below the waist: zubon wo haku (wear pants), kutsu wo haku (wear shoes), kutsushita wo haku (wear socks). This verb specificity shows how Japanese language pays precise attention to the body and its relationship with objects."},

    {type:"mc", q:"きる is used for:", opts:["Shoes","Hats","Shirts and coats","Glasses"], ans:"Shirts and coats",
     hint:"This 'wear' verb covers upper body clothing only."},

    {type:"teach", trg:"かぶる", src:"to wear (on head)", pos:"verb", gender:null,
     note:"For hats, helmets, and wigs. Literally means 'to cover the head.'",
     example:"A: ぼうしをかぶってください。\nB: はい、あついですからね。",
     exampleSrc:"A: Please wear a hat.\nB: Yes, because it's hot.",
     funFact:"Kaburu originally meant 'to be covered/drenched.' Mizu wo kaburu (get drenched with water) uses the same verb. For heads, it evolved to mean putting something on top: boushi wo kaburu (put on a hat)."},

    {type:"match", pairs:[
      {trg:"シャツ", src:"shirt"},
      {trg:"ズボン", src:"pants"},
      {trg:"スカート", src:"skirt"},
      {trg:"コート", src:"coat"}
    ]},

    {type:"match", pairs:[
      {trg:"きる", src:"wear (upper body)"},
      {trg:"はく", src:"wear (lower/feet)"},
      {trg:"かぶる", src:"wear (on head)"},
      {trg:"ぬぐ", src:"take off"}
    ]},

    {type:"fb", s:"ぼうしを{1}ましょう。",
     a:["かぶり"],
     opts:["かぶり","はき","き","かけ"],
     hint:"The specific 'wear' verb for items placed on your head.",
     sSrc:"Let's wear a hat."},

    {type:"mc", q:"くつした literally means:", opts:["Foot cover","Below shoes","Toe warmers","Indoor wear"], ans:"Below shoes",
     hint:"Kutsu (s...) + shita (b...) = what goes under s...."},

    {type:"mc", q:"How do you say 'I wear pants' in Japanese?", opts:["ズボンをきます","ズボンをはきます","ズボンをかぶります","ズボンをかけます"], ans:"ズボンをはきます",
     hint:"Lower body items require the haku verb, not kiru."},
  ]
};
export default LESSON_6;
