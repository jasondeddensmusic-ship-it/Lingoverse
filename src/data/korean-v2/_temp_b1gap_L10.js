const LESSON_10 = {
  id:"kov2_b1gap_l10", title:"\uC694\uB9AC\uC640 \uC131\uC9C8", icon:"\uD83C\uDF73", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cooking, Food, and Physical Qualities",
     desc:"Learn vocabulary for cooking actions, ingredients, and physical descriptions. Korean food culture is central to daily life, and these words will help you talk about cooking, flavors, and the physical properties of things around you.",
     goals:["Learn 20 cooking, food, and descriptive words","Understand causative pairs like \uB053\uB2E4/\uB053\uC774\uB2E4","Describe physical qualities using Korean adjectives"]},

    {type:"teach", trg:"\uB053\uB2E4", src:"to boil (intransitive)", pos:"verb", gender:null,
     note:"Native Korean. The liquid itself boils. Subject = the liquid.",
     example:"A: \uBB3C\uC774 \uB053\uACE0 \uC788\uC5B4\uC694.\nB: \uB77C\uBA74\uC744 \uB123\uC73C\uC138\uC694.",
     exampleSrc:"A: The water is boiling.\nB: Put in the noodles.",
     funFact:"'\uD53C\uAC00 \uB053\uB2E4' (blood boils) means to be furious. The same metaphor exists in English and Korean."},

    {type:"teach", trg:"\uB053\uC774\uB2E4", src:"to boil something (transitive)", pos:"verb", gender:null,
     note:"Causative of \uB053\uB2E4. Someone causes liquid to boil. Subject = the person.",
     example:"A: \uBB3C\uC744 \uB053\uC774\uACE0 \uC788\uC5B4\uC694.\nB: \uCC28\uB97C \uB9CC\uB4E4 \uAC70\uC608\uC694?",
     exampleSrc:"A: I'm boiling water.\nB: Are you going to make tea?",
     funFact:"The \uB053\uB2E4/\uB053\uC774\uB2E4 pair shows Korean's causative system: -\uC774\uB2E4 turns an intransitive verb into 'cause to X.' Water boils vs I boil water."},

    {type:"tip", title:"Intransitive/Causative Pairs",
     text:"Korean verbs often come in pairs:\n\n\uB053\uB2E4 (it boils) / \uB053\uC774\uB2E4 (I boil it)\n\uB2F4\uAE30\uB2E4 (it's contained) / \uB2F4\uB2E4 (I put it in)\n\uB179\uB2E4 (it melts) / \uB179\uC774\uB2E4 (I melt it)\n\nThe intransitive form describes what happens naturally. The causative form adds a doer who makes it happen. This pattern is systematic in Korean."},

    {type:"mc",
     q:"\uBB3C\uC744 ___ \uC788\uC5B4\uC694. (\uB0B4\uAC00 \uBB3C\uC744 \uB728\uAC81\uAC8C \uD55C\uB2E4)",
     opts:["\uB053\uACE0","\uB054\uACE0","\uB053\uC774\uACE0","\uB04A\uACE0"],
     ans:"\uB053\uC774\uACE0",
     hint:"The PERSON is making the water boil. Which is the causative (transitive) form?"},

    {type:"teach", trg:"\uAC00\uB8E8", src:"powder", pos:"noun", gender:null,
     note:"Native Korean. Any fine, dry substance ground into particles.",
     example:"A: \uACE0\uCD94\uAC00\uB8E8\uB97C \uB123\uC73C\uC138\uC694.\nB: \uB9E4\uC6B4 \uAC70 \uC88B\uC544\uD558\uC138\uC694?",
     exampleSrc:"A: Put in chili powder.\nB: Do you like spicy food?",
     funFact:"Korea's essential powders: \uACE0\uCD94\uAC00\uB8E8 (chili powder), \uBC00\uAC00\uB8E8 (wheat flour), \uCF69\uAC00\uB8E8 (bean powder). Each is a kitchen staple."},

    {type:"teach", trg:"\uB9C8\uB298", src:"garlic", pos:"noun", gender:null,
     note:"Native Korean. One of the most important ingredients in Korean cooking.",
     example:"A: \uB9C8\uB298\uC744 \uB9CE\uC774 \uB123\uC5B4\uC694?\nB: \uB124, \uD55C\uAD6D \uC74C\uC2DD\uC5D0\uB294 \uB9C8\uB298\uC774 \uAF2D \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: Do you put in a lot of garlic?\nB: Yes, garlic is essential in Korean food.",
     funFact:"Korea is one of the world's top garlic consumers. The founding myth of Korea involves a bear eating garlic for 100 days to become human."},

    {type:"teach", trg:"\uACE0\uCD94", src:"chili pepper", pos:"noun", gender:null,
     note:"Native Korean. The essential spice of Korean cuisine.",
     example:"A: \uACE0\uCD94\uAC00 \uB9E4\uC6CC\uC694.\nB: \uC774\uAC74 \uCCAD\uC591\uACE0\uCD94\uB77C\uC11C \uB354 \uB9E4\uC6CC\uC694.",
     exampleSrc:"A: This chili pepper is spicy.\nB: It's a cheongyang pepper, so it's extra spicy.",
     funFact:"Chili peppers arrived in Korea around the 16th century via Japan. Before that, Korean food was flavored differently. Kimchi was not originally red."},

    {type:"teach", trg:"\uB2EC\uAC78", src:"egg", pos:"noun", gender:null,
     note:"Native Korean compound: \uB2ED (chicken) + \uC54C (egg). Literally 'chicken egg.'",
     example:"A: \uB2EC\uAC78\uC744 \uBA87 \uAC1C \uC0B4\uAE4C\uC694?\nB: \uD55C \uD310\uB9CC \uC0AC \uC8FC\uC138\uC694.",
     exampleSrc:"A: How many eggs should I buy?\nB: Just buy one tray.",
     funFact:"Eggs in Korea are sold in trays (\uD310) of 30. '\uD55C \uD310' (one tray) is the standard shopping unit. Individual eggs are rare at regular markets."},

    {type:"fb",
     s:"\uD55C\uAD6D \uC74C\uC2DD\uC5D0\uB294 {1}\uC774 \uAF2D \uD544\uC694\uD574\uC694.",
     a:["\uB9C8\uB298"],
     opts:["\uB9C8\uB298","\uACE0\uCD94","\uB2EC\uAC78","\uAC00\uB8E8"],
     hint:"This pungent bulb is considered the soul of Korean cooking, used in nearly every savory dish.",
     sSrc:"{1} is essential in Korean food."},

    {type:"teach", trg:"\uB0C4\uC0C8", src:"smell, scent", pos:"noun", gender:null,
     note:"Native Korean. Can be pleasant or unpleasant depending on context.",
     example:"A: \uC88B\uC740 \uB0C4\uC0C8\uAC00 \uB098\uB124\uC694.\nB: \uBB34\uC5C7\uC744 \uC694\uB9AC\uD558\uACE0 \uC788\uC5B4\uC694?",
     exampleSrc:"A: Something smells good.\nB: What are you cooking?",
     funFact:"'\uB0C4\uC0C8\uB97C \uB9E1\uB2E4' (to smell a smell) uses a special verb \uB9E1\uB2E4 that only goes with scents. It cannot be used for other senses."},

    {type:"teach", trg:"\uBB34\uAC8C", src:"weight", pos:"noun", gender:null,
     note:"From \uBB34\uAC81\uB2E4 (to be heavy) + \uAC8C. How heavy something is.",
     example:"A: \uC774 \uAC00\uBC29\uC758 \uBB34\uAC8C\uAC00 \uC5BC\uB9C8\uC608\uC694?\nB: 10\uD0AC\uB85C\uADF8\uB7A8\uC774\uC5D0\uC694.",
     exampleSrc:"A: How much does this bag weigh?\nB: It's 10 kilograms.",
     funFact:"Korean uses metric exclusively. '\uBB34\uAC8C\uB97C \uB2EC\uB2E4' (to weigh something) literally means 'to hang the weight' from a scale."},

    {type:"teach", trg:"\uADF8\uB7A8", src:"gram", pos:"noun", gender:null,
     note:"Loanword from English/French 'gram.' Used with the counter \uADF8\uB7A8.",
     example:"A: \uACE0\uAE30 200\uADF8\uB7A8 \uC8FC\uC138\uC694.\nB: \uB124, \uC5EC\uAE30\uC694.",
     exampleSrc:"A: Give me 200 grams of meat, please.\nB: Yes, here you go.",
     funFact:"At Korean markets, \uADF8\uB7A8 is the standard unit for meat, seafood, and produce. 100\uADF8\uB7A8 (100g) pricing is most common."},

    {type:"match", pairs:[
      {trg:"\uAC00\uB8E8", src:"powder"},
      {trg:"\uACE0\uCD94", src:"chili pepper"},
      {trg:"\uB2EC\uAC78", src:"egg"},
      {trg:"\uB0C4\uC0C8", src:"smell"},
      {trg:"\uBB34\uAC8C", src:"weight"}
    ]},

    {type:"teach", trg:"\uAC00\uB298\uB2E4", src:"to be thin, to be slender", pos:"adj", gender:null,
     note:"Native Korean. For thin, elongated things: noodles, thread, fingers.",
     example:"A: \uC774 \uAD6D\uC218\uB294 \uAC00\uB298\uB124\uC694.\nB: \uB124, \uC18C\uBA74 \uAD6D\uC218\uC608\uC694.",
     exampleSrc:"A: These noodles are thin.\nB: Yes, they're somyeon noodles.",
     funFact:"Korean distinguishes between \uAC00\uB298\uB2E4 (thin and long, like noodles) and \uC587\uB2E4 (thin and flat, like paper). English uses 'thin' for both."},

    {type:"teach", trg:"\uAD75\uB2E4", src:"to be thick (round objects)", pos:"adj", gender:null,
     note:"Native Korean. For thick, cylindrical things: rope, tree trunks, fingers.",
     example:"A: \uC774 \uB098\uBB34\uAC00 \uC815\uB9D0 \uAD75\uB124\uC694.\nB: \uC218\uBC31 \uB144 \uB41C \uB098\uBB34\uC608\uC694.",
     exampleSrc:"A: This tree is really thick.\nB: It's hundreds of years old.",
     funFact:"\uAD75\uB2E4 is the opposite of \uAC00\uB298\uB2E4. Both describe roundish objects. For flat objects, Korean uses \uB450\uAECD\uB2E4 (thick) vs \uC587\uB2E4 (thin)."},

    {type:"teach", trg:"\uB450\uAECD\uB2E4", src:"to be thick (flat objects)", pos:"adj", gender:null,
     note:"Native Korean. For thick, flat things: books, walls, ice, slices.",
     example:"A: \uC774 \uCC45\uC774 \uC815\uB9D0 \uB450\uAECD\uB124\uC694.\nB: 800\uD398\uC774\uC9C0\uB098 \uB3FC\uC694.",
     exampleSrc:"A: This book is really thick.\nB: It's 800 pages.",
     funFact:"Korean's precision: \uAD75\uB2E4 = thick round things (rope), \uB450\uAECD\uB2E4 = thick flat things (books). English just says 'thick' for both."},

    {type:"mc",
     q:"\uC774 \uCC45\uC774 \uC815\uB9D0 ___. (800\uD398\uC774\uC9C0)",
     opts:["\uAD75\uB124\uC694","\uAC00\uB298\uB124\uC694","\uAE4A\uB124\uC694","\uB450\uAECD\uB124\uC694"],
     ans:"\uB450\uAECD\uB124\uC694",
     hint:"A book is a flat object. Korean uses a specific adjective for thickness of flat things."},

    {type:"teach", trg:"\uAC80\uB2E4", src:"to be black", pos:"adj", gender:null,
     note:"Native Korean. The basic color adjective for black.",
     example:"A: \uAC80\uC740 \uC637\uC744 \uC88B\uC544\uD574\uC694?\nB: \uB124, \uAC80\uC740\uC0C9\uC774 \uC81C\uC77C \uD3B8\uD574\uC694.",
     exampleSrc:"A: Do you like black clothes?\nB: Yes, black is the most comfortable.",
     funFact:"Black (\uAC80\uC815) dominates Korean fashion. Seoul is famous for its sea of black clothing, especially in winter."},

    {type:"teach", trg:"\uB465\uAE00\uB2E4", src:"to be round", pos:"adj", gender:null,
     note:"Native Korean. For round, spherical, or circular shapes.",
     example:"A: \uB2EC\uC774 \uB465\uAE00\uB124\uC694.\nB: \uC624\uB298 \uBCF4\uB984\uB2EC\uC774\uC5D0\uC694.",
     exampleSrc:"A: The moon is round.\nB: It's a full moon today.",
     funFact:"The Korean harvest festival \uCD94\uC11D is celebrated during the full moon. '\uB465\uAE80 \uBCF4\uB984\uB2EC' (round full moon) symbolizes abundance and family."},

    {type:"teach", trg:"\uB099\uB2E4", src:"to be old, to be worn out", pos:"adj", gender:null,
     note:"Native Korean. For objects that are old and deteriorated. Never for people (use \uB298\uB2E4).",
     example:"A: \uC774 \uAC00\uBC29\uC774 \uB9CE\uC774 \uB099\uC558\uB124\uC694.\nB: \uC0C8 \uAC00\uBC29\uC744 \uC0AC\uC57C\uACA0\uC5B4\uC694.",
     exampleSrc:"A: This bag is quite worn out.\nB: I need to buy a new one.",
     funFact:"Important distinction: \uB099\uB2E4 = old objects (worn shoes, old buildings). \uB298\uB2E4 = aging people. Using \uB099\uB2E4 for a person is extremely rude."},

    {type:"teach", trg:"\uACF1\uB2E4", src:"to be fine, to be beautiful, to be smooth", pos:"adj", gender:null,
     note:"Native Korean. Delicate beauty, fine texture, or gentle quality.",
     example:"A: \uD53C\uBD80\uAC00 \uACF1\uB124\uC694.\nB: \uAD00\uB9AC\uB97C \uC798 \uD574\uC694.",
     exampleSrc:"A: Your skin is beautiful.\nB: I take good care of it.",
     funFact:"'\uACF1\uB2E4' carries a sense of refined, delicate beauty. '\uACF1\uC0C1\uD558\uB2E4' (to look beautiful) is a gentle compliment in Korean."},

    {type:"fb",
     s:"\uC774 \uAC00\uBC29\uC774 \uB9CE\uC774 {1}.",
     a:["\uB099\uC558\uB124\uC694"],
     opts:["\uAC80\uC5C8\uB124\uC694","\uACF1\uC558\uB124\uC694","\uB099\uC558\uB124\uC694","\uB465\uAE00\uC558\uB124\uC694"],
     hint:"This adjective describes objects that are old and deteriorated from use. Never used for people.",
     sSrc:"This bag is quite {1}."},

    {type:"teach", trg:"\uAE30\uB974\uB2E4", src:"to raise, to grow", pos:"verb", gender:null,
     note:"Native Korean. To raise animals or grow plants, hair, or a beard.",
     example:"A: \uAC15\uC544\uC9C0\uB97C \uAE30\uB974\uACE0 \uC788\uC5B4\uC694?\nB: \uB124, 3\uB144 \uB410\uC5B4\uC694.",
     exampleSrc:"A: Are you raising a puppy?\nB: Yes, it's 3 years old.",
     funFact:"'\uBA38\uB9AC\uB97C \uAE30\uB974\uB2E4' (to grow hair), '\uD0C1\uB97C \uAE30\uB974\uB2E4' (to grow a beard), '\uAC10\uC790\uB97C \uAE30\uB974\uB2E4' (to grow potatoes). One verb covers all."},

    {type:"teach", trg:"\uAC00\uAFB8\uB2E4", src:"to cultivate, to tend, to care for", pos:"verb", gender:null,
     note:"Native Korean. To tend a garden, maintain appearance, or develop something.",
     example:"A: \uC815\uC6D0\uC744 \uC798 \uAC00\uAFB8\uC168\uB124\uC694.\nB: \uB9E4\uC77C \uC870\uAE08\uC529 \uAD00\uB9AC\uD574\uC694.",
     exampleSrc:"A: You've tended the garden well.\nB: I manage it a little every day.",
     funFact:"'\uAC00\uAFB8\uB2E4' implies ongoing care and cultivation. It's also used figuratively: '\uC0BD\uC744 \uAC00\uAFB8\uB2E4' (to cultivate one's life)."},

    {type:"teach", trg:"\uACE0\uB974\uB2E4", src:"to choose, to pick, to select", pos:"verb", gender:null,
     note:"Native Korean. To select one from many options.",
     example:"A: \uC5B4\uB5A4 \uAC83\uC744 \uACE0\uB97C\uAE4C\uC694?\nB: \uC774\uAC83\uC73C\uB85C \uD560\uAC8C\uC694.",
     exampleSrc:"A: Which one should I choose?\nB: I'll go with this one.",
     funFact:"'\uACE8\uB77C \uBA39\uB294 \uC7AC\uBBF8' (the fun of choosing and eating) is a common phrase at Korean buffets and food markets."},

    {type:"teach", trg:"\uB458\uB7EC\uBCF4\uB2E4", src:"to look around", pos:"verb", gender:null,
     note:"Compound: \uB458\uB7EC (around) + \uBCF4\uB2E4 (to see). To survey the surroundings.",
     example:"A: \uAC00\uAC8C\uB97C \uB458\uB7EC\uBCF4\uACE0 \uC788\uC5B4\uC694.\nB: \uBB50 \uCC3E\uC73C\uC138\uC694?",
     exampleSrc:"A: I'm looking around the shop.\nB: What are you looking for?",
     funFact:"Real estate agents always say '\uBA3C\uC800 \uB458\uB7EC\uBCF4\uC138\uC694' (please look around first) when showing apartments."},

    {type:"mc",
     q:"\uC815\uC6D0\uC744 \uC798 ___. (\uB9E4\uC77C \uAD00\uB9AC\uD558\uB2E4)",
     opts:["\uACE0\uB974\uC168\uB124\uC694","\uAC00\uAFB8\uC168\uB124\uC694","\uAE30\uB974\uC168\uB124\uC694","\uB053\uC774\uC168\uB124\uC694"],
     ans:"\uAC00\uAFB8\uC168\uB124\uC694",
     hint:"This verb means to tend and maintain something with ongoing care, like a garden or one's appearance."},

    {type:"match", pairs:[
      {trg:"\uAE30\uB974\uB2E4", src:"to raise, grow"},
      {trg:"\uACE0\uB974\uB2E4", src:"to choose"},
      {trg:"\uB465\uAE00\uB2E4", src:"to be round"},
      {trg:"\uB099\uB2E4", src:"to be worn out"},
      {trg:"\uB053\uC774\uB2E4", src:"to boil (something)"}
    ]}
  ]
};
export default LESSON_10;
