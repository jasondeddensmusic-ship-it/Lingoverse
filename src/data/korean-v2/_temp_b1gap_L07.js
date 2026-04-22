const LESSON_7 = {
  id:"kov2_b1gap_l7", title:"\uACF5\uAC04\uACFC \uAD6C\uC870", icon:"\uD83C\uDFD8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Spaces, Places, and Structures",
     desc:"Learn vocabulary for describing places, buildings, and spatial relationships. These words are essential for giving directions, describing neighborhoods, and talking about daily life in Korea.",
     goals:["Learn 20 words for spaces and structures","Understand spatial relationship nouns","Describe locations and buildings in Korean"]},

    {type:"teach", trg:"\uAC00\uC815", src:"home, household", pos:"noun", gender:null,
     note:"Hanja: \u5BB6 (house) + \u5EAD (garden/yard). The family unit and its dwelling.",
     example:"A: \uAC00\uC815\uC5D0\uC11C \uAC00\uC7A5 \uC911\uC694\uD55C \uAC83\uC774 \uBB50\uC608\uC694?\nB: \uC800\uB294 \uAC00\uC871 \uAC74\uAC15\uC774\uB77C\uACE0 \uC0DD\uAC01\uD574\uC694.",
     exampleSrc:"A: What is most important in a household?\nB: I think it's the family's health.",
     funFact:"In Korean, \uAC00\uC815 emphasizes the household as a social unit, while \uC9D1 is the physical building. \uAC00\uC815\uC8FC\uBD80 means 'homemaker.'"},

    {type:"teach", trg:"\uACF5\uAC04", src:"space", pos:"noun", gender:null,
     note:"Hanja: \u7A7A (empty) + \u9593 (between). An empty area between things.",
     example:"A: \uC774 \uBC29\uC5D0\uB294 \uACF5\uAC04\uC774 \uB9CE\uC544\uC694.\nB: \uCC45\uC0C1\uC744 \uD558\uB098 \uB354 \uB193\uC744 \uC218 \uC788\uACA0\uB124\uC694.",
     exampleSrc:"A: There's a lot of space in this room.\nB: We could fit one more desk.",
     funFact:"Modern Korean architecture is obsessed with \uACF5\uAC04 \uD65C\uC6A9 (space utilization), especially in compact Seoul apartments."},

    {type:"teach", trg:"\uACE8\uBAA9", src:"alley", pos:"noun", gender:null,
     note:"Native Korean. A narrow street between buildings.",
     example:"A: \uC774 \uACE8\uBAA9\uC5D0 \uB9DB\uC9D1\uC774 \uB9CE\uC544\uC694.\nB: \uC9C4\uC9DC\uC694? \uAC00 \uBD10\uC694!",
     exampleSrc:"A: There are a lot of good restaurants in this alley.\nB: Really? Let's go check it out!",
     funFact:"Korean \uACE8\uBAA9 culture is famous. Hidden alley restaurants (\uACE8\uBAA9 \uB9DB\uC9D1) are often considered better than fancy places."},

    {type:"teach", trg:"\uB3C4\uB85C", src:"road", pos:"noun", gender:null,
     note:"Hanja: \u9053 (way) + \u8DEF (road). A formal word for streets and highways.",
     example:"A: \uC774 \uB3C4\uB85C\uB294 \uD56D\uC0C1 \uB9C9\uD600\uC694.\nB: \uCD9C\uD1F4\uADFC \uC2DC\uAC04\uC774\uB77C \uADF8\uB798\uC694.",
     exampleSrc:"A: This road is always congested.\nB: It's because it's rush hour.",
     funFact:"Korean addresses changed in 2014 from lot-based (\uC9C0\uBC88) to road-based (\uB3C4\uB85C\uBA85) naming, similar to Western systems."},

    {type:"teach", trg:"\uB9C8\uC744", src:"village", pos:"noun", gender:null,
     note:"Native Korean. A small settlement, often rural.",
     example:"A: \uC774 \uB9C8\uC744\uC5D0\uB294 \uC0AC\uB78C\uC774 \uBA87 \uBA85\uC774\uC5D0\uC694?\nB: \uC57D 200\uBA85\uC815\uB3C4\uC608\uC694.",
     exampleSrc:"A: How many people live in this village?\nB: About 200 people.",
     funFact:"Korea has many themed villages: Bukchon Hanok Village (\uBD81\uCD0C\uD55C\uC625\uB9C8\uC744) in Seoul preserves traditional houses as a living museum."},

    {type:"mc",
     q:"\uC774 \uACE8\uBAA9\uC5D0 \uC88B\uC740 \uC2DD\uB2F9\uC774 \uB9CE\uC544\uC694. '\uACE8\uBAA9'\uC740 \uBB34\uC2A8 \uB73B\uC774\uC5D0\uC694?",
     opts:["alley","floor","village","factory"],
     ans:"alley",
     hint:"A narrow street between buildings, famous for hidden restaurants in Korea."},

    {type:"fb",
     s:"\uC774 \uBC29\uC5D0\uB294 {1}\uC774 \uCDA9\uBD84\uD574\uC694.",
     a:["\uACF5\uAC04"],
     opts:["\uACE8\uBAA9","\uACF5\uAC04","\uAC00\uC815","\uB3C4\uB85C"],
     hint:"This Sino-Korean word literally means 'empty between' and refers to room or area.",
     sSrc:"There is enough {1} in this room."},

    {type:"teach", trg:"\uB9C8\uB8E8", src:"floor, wooden floor", pos:"noun", gender:null,
     note:"Native Korean. The raised wooden floor area in a traditional Korean house.",
     example:"A: \uB9C8\uB8E8\uAC00 \uBC18\uC9DD\uBC18\uC9DD\uD558\uB124\uC694.\nB: \uC5B4\uC81C \uC655\uC2A4\uB97C \uCE60\uD588\uC5B4\uC694.",
     exampleSrc:"A: The floor is so shiny.\nB: I applied wax yesterday.",
     funFact:"The \uB9C8\uB8E8 is a key feature of hanok architecture. It is elevated to allow air flow underneath, keeping it cool in summer."},

    {type:"teach", trg:"\uB300\uBB38", src:"main gate", pos:"noun", gender:null,
     note:"Hanja: \u5927 (big) + \u9580 (gate). The primary entrance to a property.",
     example:"A: \uB300\uBB38 \uC55E\uC5D0\uC11C \uB9CC\uB098\uC694.\nB: \uB124, 10\uBD84 \uD6C4\uC5D0 \uAC08\uAC8C\uC694.",
     exampleSrc:"A: Let's meet in front of the main gate.\nB: Okay, I'll be there in 10 minutes.",
     funFact:"Traditional Korean houses always had a \uB300\uBB38 as the boundary between public and private space. Knocking on the \uB300\uBB38 was the only polite way to visit."},

    {type:"teach", trg:"\uACC4\uB2E8", src:"stairs", pos:"noun", gender:null,
     note:"Hanja: \u968E (step) + \u6BB5 (level). Steps going up or down.",
     example:"A: \uACC4\uB2E8\uC73C\uB85C \uC62C\uB77C\uAC08\uAE4C\uC694?\nB: \uC5D8\uB9AC\uBCA0\uC774\uD130\uAC00 \uACE0\uC7A5\uC774\uB77C\uC11C \uADF8\uB798\uC57C \uD574\uC694.",
     exampleSrc:"A: Should we take the stairs?\nB: The elevator is broken, so we have to.",
     funFact:"Korean subway stations often have very long \uACC4\uB2E8. Some stations are over 40 meters underground."},

    {type:"teach", trg:"\uB3D9\uB124", src:"neighborhood", pos:"noun", gender:null,
     note:"Hanja: \u540C (same) + \u5167 (inside). People living in the same area.",
     example:"A: \uC6B0\uB9AC \uB3D9\uB124\uC5D0 \uC0C8 \uCE74\uD398\uAC00 \uC0DD\uACBC\uC5B4\uC694.\nB: \uC5B4\uB514\uC608\uC694? \uAC00 \uBD10\uC57C\uACA0\uB124\uC694.",
     exampleSrc:"A: A new cafe opened in our neighborhood.\nB: Where is it? I should check it out.",
     funFact:"Korean \uB3D9\uB124 identity is strong. People often say '\uC6B0\uB9AC \uB3D9\uB124' (our neighborhood) with pride and a sense of belonging."},

    {type:"teach", trg:"\uACF3\uACF3", src:"everywhere, here and there", pos:"noun", gender:null,
     note:"Reduplication of \uACF3 (place). Emphasizes multiple locations.",
     example:"A: \uBD04\uC774 \uC640\uC11C \uACF3\uACF3\uC5D0 \uAF43\uC774 \uD54C\uC5B4\uC694.\nB: \uC0B0\uCC45\uD558\uAE30 \uC88B\uC740 \uACC4\uC808\uC774\uC5D0\uC694.",
     exampleSrc:"A: Spring came and flowers bloomed everywhere.\nB: It's a great season for walks.",
     funFact:"Korean often uses reduplication for emphasis: \uC0AC\uB78C\uC0AC\uB78C (every person), \uB0A0\uB0A0 (every day), \uACF3\uACF3 (every place)."},

    {type:"match", pairs:[
      {trg:"\uB9C8\uB8E8", src:"wooden floor"},
      {trg:"\uB300\uBB38", src:"main gate"},
      {trg:"\uACC4\uB2E8", src:"stairs"},
      {trg:"\uB3D9\uB124", src:"neighborhood"},
      {trg:"\uACF3\uACF3", src:"everywhere"}
    ]},

    {type:"teach", trg:"\uAD6C\uBA4D", src:"hole", pos:"noun", gender:null,
     note:"Native Korean. Any opening or hollow space.",
     example:"A: \uBC14\uC9C0\uC5D0 \uAD6C\uBA4D\uC774 \uB0AC\uC5B4\uC694.\nB: \uC0C8 \uBC14\uC9C0\uB97C \uC0AC\uC57C\uACA0\uB124\uC694.",
     exampleSrc:"A: There's a hole in my pants.\nB: You'll need to buy new ones.",
     funFact:"The expression '\uAD6C\uBA4D\uAC00\uAC8C' (a shop in a hole, i.e., a tiny hidden shop) describes a small but beloved local store."},

    {type:"teach", trg:"\uACC1", src:"side, beside", pos:"noun", gender:null,
     note:"Native Korean. Indicates physical proximity, being next to someone.",
     example:"A: \uB0B4 \uACCC\uC5D0 \uC788\uC5B4 \uC918.\nB: \uC5B8\uC81C\uB098 \uB124 \uACCC\uC5D0 \uC788\uC744\uAC8C.",
     exampleSrc:"A: Stay by my side.\nB: I'll always be by your side.",
     funFact:"'\uACCC\uC744 \uC9C0\uD0A4\uB2E4' (to guard someone's side) is a touching expression meaning to stay loyal and supportive."},

    {type:"teach", trg:"\uAC89", src:"surface, outside", pos:"noun", gender:null,
     note:"Native Korean. The outer appearance of something. Opposite of \uC18D (inside).",
     example:"A: \uAC89\uC740 \uD654\uB824\uD558\uC9C0\uB9CC \uC18D\uC740 \uBE44\uC5B4 \uC788\uC5B4\uC694.\nB: \uAC89\uBAA8\uC2B5\uB9CC \uBCF4\uBA74 \uC548 \uB3FC\uC694.",
     exampleSrc:"A: The outside is fancy but the inside is empty.\nB: You can't judge by appearances alone.",
     funFact:"The proverb '\uAC89\uACFC \uC18D\uC774 \uB2E4\uB974\uB2E4' (outside and inside are different) warns against judging by appearances."},

    {type:"teach", trg:"\uB108\uBA38", src:"other side, beyond", pos:"noun", gender:null,
     note:"Native Korean. The far side of something, what lies beyond a boundary.",
     example:"A: \uC0B0 \uB108\uBA38\uC5D0 \uBB50\uAC00 \uC788\uC744\uAE4C\uC694?\nB: \uC791\uC740 \uB9C8\uC744\uC774 \uC788\uC5B4\uC694.",
     exampleSrc:"A: What's beyond the mountain?\nB: There's a small village.",
     funFact:"The Korean folk song '\uC0B0 \uB108\uBA38 \uB0A8\uCD0C\uC5D0\uB294' (Beyond the mountain, in the southern village) is one of the most beloved songs about pastoral longing."},

    {type:"mc",
     q:"\uB0B4 \uACCC\uC5D0 \uC788\uC5B4 \uC918. '\uACCC'\uC740 \uBB34\uC2A8 \uB73B\uC774\uC5D0\uC694?",
     opts:["beyond","side, beside","surface","hole"],
     ans:"side, beside",
     hint:"This word indicates being physically close to someone, right next to them."},

    {type:"teach", trg:"\uB208\uC55E", src:"before one's eyes", pos:"noun", gender:null,
     note:"Compound: \uB208 (eye) + \uC55E (front). What is right in front of you.",
     example:"A: \uB208\uC55E\uC774 \uCE84\uCE84\uD574\uC11C \uC544\uBB34\uAC83\uB3C4 \uC548 \uBCF4\uC5EC\uC694.\nB: \uC548\uAC1C\uAC00 \uB9CE\uC774 \uB08C\uB124\uC694.",
     exampleSrc:"A: It's so dark before my eyes I can't see anything.\nB: The fog is really thick.",
     funFact:"'\uB208\uC55E\uC774 \uCE84\uCE84\uD558\uB2E4' (to be dark before one's eyes) means feeling hopeless about the future."},

    {type:"teach", trg:"\uACF5\uC7A5", src:"factory", pos:"noun", gender:null,
     note:"Hanja: \u5DE5 (work/craft) + \u5834 (place). A place where things are manufactured.",
     example:"A: \uC774 \uACF5\uC7A5\uC5D0\uC11C \uBB50\uB97C \uB9CC\uB4E4\uC5B4\uC694?\nB: \uC790\uB3D9\uCC28 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4\uC694.",
     exampleSrc:"A: What do they make at this factory?\nB: They make car parts.",
     funFact:"Korea's industrial boom in the 1960s-80s was driven by massive factory complexes. Today, Korea is the world's 6th largest manufacturer."},

    {type:"teach", trg:"\uAC74\uCD95", src:"architecture, construction", pos:"noun", gender:null,
     note:"Hanja: \u5EFA (build) + \u7BC9 (construct). The art and science of building.",
     example:"A: \uD55C\uAD6D \uAC74\uCD95\uC774 \uB9CE\uC774 \uBCC0\uD588\uC5B4\uC694.\nB: \uB124, \uC694\uC998\uC740 \uD604\uB300\uC801\uC778 \uAC74\uBB3C\uC774 \uB9CE\uC544\uC694.",
     exampleSrc:"A: Korean architecture has changed a lot.\nB: Yes, there are many modern buildings these days.",
     funFact:"Korean architecture blends ancient hanok style with futuristic designs. The Dongdaemun Design Plaza by Zaha Hadid is a landmark example."},

    {type:"teach", trg:"\uACF5\uC0AC", src:"construction, construction work", pos:"noun", gender:null,
     note:"Hanja: \u5DE5 (work) + \u4E8B (matter). Building or repair work in progress.",
     example:"A: \uC55E\uC5D0 \uACF5\uC0AC \uC911\uC774\uC5D0\uC694.\nB: \uB2E4\uB978 \uAE38\uB85C \uAC00\uC57C\uACA0\uB124\uC694.",
     exampleSrc:"A: There's construction ahead.\nB: We'll have to take a different route.",
     funFact:"The phrase '\uACF5\uC0AC \uC911' (under construction) is one of the most common signs you'll see in rapidly developing Korean cities."},

    {type:"teach", trg:"\uAC00\uAE4C\uC774", src:"nearby, close", pos:"adv", gender:null,
     note:"From \uAC00\uAE5D\uB2E4 (to be close). Indicates physical proximity.",
     example:"A: \uC5ED\uC774 \uAC00\uAE4C\uC774 \uC788\uC5B4\uC694?\nB: \uB124, \uAC78\uC5B4\uC11C 5\uBD84\uC774\uC5D0\uC694.",
     exampleSrc:"A: Is there a station nearby?\nB: Yes, it's a 5-minute walk.",
     funFact:"In Korean real estate, proximity to a subway station (\uC5ED\uC138\uAD8C) is the single biggest factor in apartment prices."},

    {type:"teach", trg:"\uAC00\uB4DD", src:"fully, full", pos:"adv", gender:null,
     note:"Native Korean adverb. Something completely filled.",
     example:"A: \uBC29\uC774 \uC0AC\uB78C\uC73C\uB85C \uAC00\uB4DD \uCC28 \uC788\uC5B4\uC694.\nB: \uC790\uB9AC\uAC00 \uC5C6\uB124\uC694.",
     exampleSrc:"A: The room is full of people.\nB: There are no seats left.",
     funFact:"'\uAC00\uB4DD \uCC28\uB2E4' (to be fully filled) is used for rooms, cups, hearts, and even eyes (\uB208\uBB3C\uC774 \uAC00\uB4DD, eyes full of tears)."},

    {type:"fb",
     s:"\uC5ED\uC774 {1} \uC788\uC5B4\uC11C \uD3B8\uD574\uC694.",
     a:["\uAC00\uAE4C\uC774"],
     opts:["\uACF3\uACF3","\uAE4A\uC774","\uAC00\uAE4C\uC774","\uAC00\uB4DD"],
     hint:"This adverb comes from an adjective meaning 'to be close' and describes proximity.",
     sSrc:"The station is {1}, so it's convenient."},

    {type:"match", pairs:[
      {trg:"\uACF5\uC7A5", src:"factory"},
      {trg:"\uAC74\uCD95", src:"architecture"},
      {trg:"\uACF5\uC0AC", src:"construction"},
      {trg:"\uAC00\uAE4C\uC774", src:"nearby"},
      {trg:"\uAC00\uB4DD", src:"fully"}
    ]}
  ]
};
export default LESSON_7;
