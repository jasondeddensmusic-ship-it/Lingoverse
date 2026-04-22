const LESSON_6 = {
  id:"kov2_b1gap_l6", title:"자연과 자원", icon:"\u{1F3DE}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature, Land, and Resources",
     desc:"Explore vocabulary for nature, geography, and physical measurement. These words appear frequently in news, weather reports, and everyday descriptions of the Korean landscape.",
     goals:["Learn 20 nature and resource nouns","Understand Hanja roots for measurement and geography","Describe natural environments in Korean"]},

    {type:"teach", trg:"\uAC15\uBB3C", src:"river water", pos:"noun", gender:null,
     note:"Compound: \uAC15 (river) + \uBB3C (water).",
     example:"A: \uAC15\uBB3C\uC774 \uC815\uB9D0 \uAE68\uB057\uD558\uB124\uC694.\nB: \uB124, \uC5EC\uAE30\uB294 \uC624\uC5FC\uC774 \uBCC4\uB85C \uC5C6\uC5B4\uC694.",
     exampleSrc:"A: The river water is really clean.\nB: Yes, there isn't much pollution here.",
     funFact:"Korea's four major rivers (Han, Nakdong, Geum, Yeongsan) are deeply tied to regional identity and cuisine."},

    {type:"teach", trg:"\uAC00\uC2A4", src:"gas", pos:"noun", gender:null,
     note:"Loanword from English 'gas'. Used for cooking gas and natural gas.",
     example:"A: \uAC00\uC2A4 \uBD88\uC744 \uB044\uC168\uC5B4\uC694?\nB: \uB124, \uB098\uAC00\uAE30 \uC804\uC5D0 \uD655\uC778\uD588\uC5B4\uC694.",
     exampleSrc:"A: Did you turn off the gas?\nB: Yes, I checked before leaving.",
     funFact:"Korean apartments commonly use city gas (\uB3C4\uC2DC\uAC00\uC2A4) piped directly to each unit for cooking and heating."},

    {type:"teach", trg:"\uACF5\uAE30", src:"air", pos:"noun", gender:null,
     note:"Hanja: \u7A7A (empty) + \u6C23 (energy/spirit). Literally 'empty energy.'",
     example:"A: \uC624\uB298 \uACF5\uAE30\uAC00 \uC88B\uB124\uC694.\nB: \uB9DE\uC544\uC694, \uBBF8\uC138\uBA3C\uC9C0\uAC00 \uC5C6\uB294 \uB0A0\uC774\uC5D0\uC694.",
     exampleSrc:"A: The air is nice today.\nB: Right, it's a day without fine dust.",
     funFact:"Fine dust (\uBBF8\uC138\uBA3C\uC9C0) from China has made air quality a daily concern in Korea. Most Koreans check the app before going out."},

    {type:"teach", trg:"\uAE30\uC628", src:"temperature", pos:"noun", gender:null,
     note:"Hanja: \u6C23 (air) + \u6EAB (warm). The warmth of the air.",
     example:"A: \uC624\uB298 \uAE30\uC628\uC774 \uBA87 \uB3C4\uC608\uC694?\nB: \uC601\uD558 5\uB3C4\uB798\uC694. \uB530\uB73B\uD558\uAC8C \uC785\uC73C\uC138\uC694.",
     exampleSrc:"A: What's the temperature today?\nB: It's minus 5 degrees. Dress warmly.",
     funFact:"Korea uses Celsius. Winter temperatures in Seoul regularly drop to minus 10 or below."},

    {type:"teach", trg:"\uADF8\uB298", src:"shade, shadow", pos:"noun", gender:null,
     note:"Native Korean word. Can mean physical shade or figurative shadow/influence.",
     example:"A: \uB098\uBB34 \uADF8\uB298 \uC544\uB798\uC5D0\uC11C \uC26C\uC790.\nB: \uC88B\uC544, \uC5EC\uAE30\uAC00 \uC2DC\uC6D0\uD558\uB2E4.",
     exampleSrc:"A: Let's rest under the tree shade.\nB: Good, it's cool here.",
     funFact:"The expression '\uADF8\uB298\uC5D0 \uC0B4\uB2E4' (to live in someone's shadow) mirrors the English metaphor perfectly."},

    {type:"mc",
     q:"\uACF5\uAE30\uAC00 \uC88B\uC740 \uB0A0\uC5D0 \uC0B0\uCC45\uC744 \uD574\uC694. '\uACF5\uAE30'\uB294 \uBB34\uC2A8 \uB73B\uC774\uC5D0\uC694?",
     opts:["air","water","wind","cloud"],
     ans:"air",
     hint:"This Sino-Korean word combines characters for 'empty' and 'energy.'"},

    {type:"fb",
     s:"\uC624\uB298 {1}\uC774 30\uB3C4\uB77C\uC11C \uB354\uC6CC\uC694.",
     a:["\uAE30\uC628"],
     opts:["\uAE30\uC628","\uACF5\uAE30","\uAC15\uBB3C","\uACF5\uAC04"],
     hint:"The Hanja characters mean 'air warmth,' referring to how hot or cold it is.",
     sSrc:"The {1} is 30 degrees today, so it's hot."},

    {type:"teach", trg:"\uB3CC", src:"stone, rock", pos:"noun", gender:null,
     note:"Native Korean. One of the basic nature words used since ancient times.",
     example:"A: \uC774 \uB3CC\uC774 \uC815\uB9D0 \uBB34\uAC81\uB2E4.\nB: \uC870\uC2EC\uD574, \uBC1C\uC5D0 \uB5A8\uC5B4\uB728\uB9AC\uBA74 \uD070\uC77C \uB098.",
     exampleSrc:"A: This rock is really heavy.\nB: Be careful, if you drop it on your foot it'll be a big problem.",
     funFact:"Stone culture is deep in Korea: stone walls (\uB3CC\uB2F4), stone towers (\uB3CC\uD0D1), and the famous stone grandfather statues (\uB3CC\uD558\uB974\uBC29) of Jeju Island."},

    {type:"teach", trg:"\uB545", src:"land, ground", pos:"noun", gender:null,
     note:"Native Korean. Also means 'earth' or 'soil.' Very common in compounds.",
     example:"A: \uC774 \uB545\uC5D0 \uBB50 \uC2EC\uC744\uAE4C\uC694?\nB: \uD1A0\uB9C8\uD1A0\uB97C \uC2EC\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694.",
     exampleSrc:"A: What should we plant in this land?\nB: It would be nice to plant tomatoes.",
     funFact:"The word \uB545 appears in many expressions: \uB545\uC744 \uCE58\uB2E4 (to stamp the ground, from frustration), \uB545\uC774 \uAEBC\uC9C0\uB2E4 (the ground sinks, to feel devastated)."},

    {type:"teach", trg:"\uBA3C\uC9C0", src:"dust", pos:"noun", gender:null,
     note:"Native Korean. \uBBF8\uC138\uBA3C\uC9C0 (fine dust) is a major concern in Korea.",
     example:"A: \uCC45\uC0C1 \uC704\uC5D0 \uBA3C\uC9C0\uAC00 \uB9CE\uB124\uC694.\nB: \uC624\uB798 \uCCAD\uC18C\uB97C \uBABB \uD588\uC5B4\uC694.",
     exampleSrc:"A: There's a lot of dust on the desk.\nB: I haven't cleaned in a long time.",
     funFact:"Korea tracks two types: \uBBF8\uC138\uBA3C\uC9C0 (PM10, fine dust) and \uCD08\uBBF8\uC138\uBA3C\uC9C0 (PM2.5, ultra-fine dust). The distinction is part of daily conversation."},

    {type:"teach", trg:"\uBAA8\uB798", src:"sand", pos:"noun", gender:null,
     note:"Native Korean. Used for sand on beaches and in deserts.",
     example:"A: \uC544\uC774\uB4E4\uC774 \uBAA8\uB798\uC5D0\uC11C \uB180\uACE0 \uC788\uC5B4\uC694.\nB: \uC131\uC744 \uB9CC\uB4E4\uACE0 \uC788\uB124\uC694.",
     exampleSrc:"A: The children are playing in the sand.\nB: They're building a castle.",
     funFact:"Korea's west coast has vast tidal flats (\uAC2F\uBC8C) where sand and mud are exposed at low tide, creating a unique ecosystem."},

    {type:"match", pairs:[
      {trg:"\uAC15\uBB3C", src:"river water"},
      {trg:"\uB3CC", src:"stone"},
      {trg:"\uB545", src:"land"},
      {trg:"\uBA3C\uC9C0", src:"dust"},
      {trg:"\uBAA8\uB798", src:"sand"}
    ]},

    {type:"teach", trg:"\uB0A0\uAC1C", src:"wing", pos:"noun", gender:null,
     note:"Native Korean. Used for bird wings, insect wings, and figuratively for ambition.",
     example:"A: \uC0C8\uAC00 \uB0A0\uAC1C\uB97C \uD3BC\uCE58\uACE0 \uB0A0\uC544\uAC14\uC5B4\uC694.\nB: \uC815\uB9D0 \uC544\uB984\uB2F5\uB124\uC694.",
     exampleSrc:"A: The bird spread its wings and flew away.\nB: It's really beautiful.",
     funFact:"The expression '\uB0A0\uAC1C\uB97C \uD3BC\uCE58\uB2E4' (to spread one's wings) is used to describe someone launching a career or starting something bold."},

    {type:"teach", trg:"\uB4E4", src:"field, plain", pos:"noun", gender:null,
     note:"Native Korean. Open grassland or uncultivated field. Different from \uBC2D (rice paddy).",
     example:"A: \uB4E4\uC5D0 \uAF43\uC774 \uD53C\uC5C8\uC5B4\uC694.\nB: \uBD04\uC774 \uC654\uB098 \uBD10\uC694.",
     exampleSrc:"A: Flowers bloomed in the field.\nB: Spring must have arrived.",
     funFact:"The word \uB4E4 also appears in \uB4E4\uAF43 (wildflower), a beloved symbol in Korean poetry and folk songs."},

    {type:"teach", trg:"\uB18D\uC5C5", src:"agriculture", pos:"noun", gender:null,
     note:"Hanja: \u8FB2 (farming) + \u696D (industry/work). The farming profession.",
     example:"A: \uD55C\uAD6D\uC758 \uB18D\uC5C5\uC740 \uC5B4\uB5A4\uAC00\uC694?\nB: \uC313\uC774 \uAC00\uC7A5 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: What is Korean agriculture like?\nB: Rice is the most important crop.",
     funFact:"Rice farming shaped Korean culture for millennia. The word for 'meal' (\uBC25) literally means 'cooked rice.'"},

    {type:"teach", trg:"\uB18D\uCD0C", src:"rural area, countryside", pos:"noun", gender:null,
     note:"Hanja: \u8FB2 (farming) + \u6751 (village). A farming village.",
     example:"A: \uC8FC\uB9D0\uC5D0 \uB18D\uCD0C\uC5D0 \uAC00\uC694.\nB: \uACF5\uAE30\uAC00 \uC88B\uC544\uC11C \uC88B\uACA0\uC5B4\uC694.",
     exampleSrc:"A: I'm going to the countryside this weekend.\nB: The air is nice there, that sounds great.",
     funFact:"Young Koreans are increasingly moving back to rural areas, a trend called \uADC0\uB18D (returning to farming)."},

    {type:"mc",
     q:"\uC8FC\uB9D0\uC5D0 \uB18D\uCD0C\uC5D0 \uAC00\uC11C \uC26C\uC5C8\uC5B4\uC694. '\uB18D\uCD0C'\uC740 \uBB34\uC2A8 \uB73B\uC774\uC5D0\uC694?",
     opts:["neighborhood","rural area","city center","factory"],
     ans:"rural area",
     hint:"The Hanja combines 'farming' and 'village' to describe where agriculture happens."},

    {type:"teach", trg:"\uB18D\uC0AC", src:"farming", pos:"noun", gender:null,
     note:"Hanja: \u8FB2 (farming) + \u4E8B (matter/work). The work of farming.",
     example:"A: \uD560\uC544\uBC84\uC9C0\uAC00 \uB18D\uC0AC\uB97C \uC9C0\uC73C\uC138\uC694.\nB: \uB124, 50\uB144 \uB118\uAC8C \uD558\uC168\uC5B4\uC694.",
     exampleSrc:"A: My grandfather farms.\nB: Yes, he's been doing it for over 50 years.",
     funFact:"The phrase '\uB18D\uC0AC\uB97C \uC9D3\uB2E4' (to do farming) uses the native verb \uC9D3\uB2E4, which originally means 'to make' or 'to do work.'"},

    {type:"teach", trg:"\uAECD\uC9C8", src:"shell, peel, skin", pos:"noun", gender:null,
     note:"Native Korean. Outer covering of fruit, eggs, nuts, or shellfish.",
     example:"A: \uC0AC\uACFC \uAECD\uC9C8\uC744 \uBC97\uAE38\uAE4C\uC694?\nB: \uC544\uB2C8\uC694, \uADF8\uB0E5 \uBA39\uC5B4\uC694.",
     exampleSrc:"A: Should I peel the apple skin?\nB: No, just eat it as is.",
     funFact:"In Korean food culture, peeling fruit (\uACFC\uC77C \uAECD\uC9C8\uC744 \uBC97\uAE30\uB2E4) for guests is a common act of hospitality."},

    {type:"teach", trg:"\uAE30\uB984", src:"oil", pos:"noun", gender:null,
     note:"Native Korean. Used for cooking oil, petroleum, and grease.",
     example:"A: \uAE30\uB984\uC744 \uB108\uBB34 \uB9CE\uC774 \uB123\uC5C8\uC5B4\uC694.\nB: \uAE30\uB984\uC9C4 \uC74C\uC2DD\uC740 \uAC74\uAC15\uC5D0 \uC548 \uC88B\uC544\uC694.",
     exampleSrc:"A: You put in too much oil.\nB: Oily food isn't good for your health.",
     funFact:"Sesame oil (\uCC38\uAE30\uB984) is the soul of Korean cooking. A few drops finish almost every dish."},

    {type:"fb",
     s:"\uC544\uC774\uB4E4\uC774 {1}\uC5D0\uC11C \uC131\uC744 \uB9CC\uB4E4\uACE0 \uC788\uC5B4\uC694.",
     a:["\uBAA8\uB798"],
     opts:["\uBA3C\uC9C0","\uB3CC","\uBAA8\uB798","\uB545"],
     hint:"Children build castles with this fine, granular material found at beaches.",
     sSrc:"The children are building a castle in the {1}."},

    {type:"teach", trg:"\uAE4A\uB2E4", src:"to be deep", pos:"adj", gender:null,
     note:"Native Korean adjective. Used for physical depth and figurative depth (of thought, emotion).",
     example:"A: \uC774 \uAC15\uC774 \uAE4A\uC5B4\uC694?\nB: \uB124, 3\uBBF8\uD130 \uC774\uC0C1\uC774\uC5D0\uC694.",
     exampleSrc:"A: Is this river deep?\nB: Yes, it's over 3 meters.",
     funFact:"Korean uses \uAE4A\uB2E4 for abstract depth too: \uAE4A\uC740 \uC0DD\uAC01 (deep thought), \uAE4A\uC740 \uC0AC\uB791 (deep love)."},

    {type:"teach", trg:"\uAE4A\uC774", src:"deeply, depth", pos:"adv", gender:null,
     note:"Derived from \uAE4A\uB2E4 + \uC774 (adverb-forming suffix).",
     example:"A: \uAE4A\uC774 \uC0DD\uAC01\uD574 \uBD10\uC57C \uD574\uC694.\nB: \uB124, \uC11C\uB450\uB974\uBA74 \uC548 \uB3FC\uC694.",
     exampleSrc:"A: You need to think about it deeply.\nB: Yes, rushing won't do.",
     funFact:"The suffix -\uC774 turns many Korean adjectives into adverbs: \uB192\uC774 (highly), \uB113\uC774 (widely), \uAE4A\uC774 (deeply)."},

    {type:"teach", trg:"\uB192\uC774", src:"height", pos:"noun", gender:null,
     note:"From \uB192\uB2E4 (to be high) + \uC774. As a noun it means 'height'; as an adverb, 'highly.'",
     example:"A: \uC774 \uC0B0\uC758 \uB192\uC774\uAC00 \uC5BC\uB9C8\uC608\uC694?\nB: 1,950\uBBF8\uD130\uC608\uC694.",
     exampleSrc:"A: How high is this mountain?\nB: It's 1,950 meters.",
     funFact:"Korea's tallest peak is Hallasan on Jeju Island at 1,947 meters. It is a dormant volcano and a UNESCO World Heritage site."},

    {type:"teach", trg:"\uAE38\uC774", src:"length", pos:"noun", gender:null,
     note:"From \uAE38\uB2E4 (to be long) + \uC774. Measures how long something is.",
     example:"A: \uC774 \uB2E4\uB9AC\uC758 \uAE38\uC774\uAC00 \uC5BC\uB9C8\uC608\uC694?\nB: 500\uBBF8\uD130\uC815\uB3C4\uC608\uC694.",
     exampleSrc:"A: How long is this bridge?\nB: It's about 500 meters.",
     funFact:"The -\uC774 suffix creates measurement nouns from descriptive verbs: \uB192\uC774 (height), \uAE38\uC774 (length), \uAE4A\uC774 (depth), \uB113\uC774 (width)."},

    {type:"mc",
     q:"\uC774 \uAC15\uC740 \uC815\uB9D0 \uAE4A\uC5B4\uC694. '\uAE4A\uB2E4'\uB294 \uBB34\uC2A8 \uB73B\uC774\uC5D0\uC694?",
     opts:["to be long","to be wide","to be deep","to be tall"],
     ans:"to be deep",
     hint:"Think about the opposite of shallow. This word describes rivers, oceans, or thoughts."},

    {type:"fb",
     s:"\uC774 \uB2E4\uB9AC\uC758 {1}\uAC00 500\uBBF8\uD130\uC608\uC694.",
     a:["\uAE38\uC774"],
     opts:["\uB192\uC774","\uAE38\uC774","\uAE4A\uC774","\uAE30\uC628"],
     hint:"This measurement noun comes from the adjective meaning 'to be long.'",
     sSrc:"The {1} of this bridge is 500 meters."},

    {type:"match", pairs:[
      {trg:"\uB18D\uC5C5", src:"agriculture"},
      {trg:"\uB18D\uCD0C", src:"rural area"},
      {trg:"\uAECD\uC9C8", src:"shell, peel"},
      {trg:"\uAE30\uB984", src:"oil"},
      {trg:"\uAE38\uC774", src:"length"}
    ]}
  ]
};
export default LESSON_6;
