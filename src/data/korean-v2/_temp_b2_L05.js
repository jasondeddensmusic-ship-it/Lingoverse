// B2 Lesson 05: Construction & Scale
// Words: 건설, 건설되다, 건설하다, 개발되다, 개방, 개방되다, 개방하다, 건조, 건조하다, 건전하다,
//        강도, 강력하다, 강력히, 강렬하다, 거대하다, 거칠다, 굉장하다, 구별, 구별되다, 구별하다

const LESSON_5 = {
  id:"kov2_b2_l5", title:"건설과 규모", icon:"\uD83C\uDFD7\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Construction & Scale",
     desc:"Learn vocabulary for construction, development, and describing scale and intensity. These words are essential for TOPIK II texts about infrastructure, policy, and evaluation.",
     goals:["Learn 20 words for construction, development, and scale","Understand active vs. passive Sino-Korean verb pairs","Describe intensity and distinction in formal Korean"]},

    {type:"teach", trg:"\uAC74\uC124", src:"construction; building", pos:"noun", gender:null,
     note:"Sino-Korean: build (建) + establish (設).\nUsed for large-scale projects.",
     example:"A: \uC0C8 \uACF5\uD56D \uAC74\uC124\uC774 \uC2DC\uC791\uB418\uC5C8\uC5B4\uC694.\nB: \uC5B8\uC81C \uC644\uACF5\uB420 \uC608\uC815\uC774\uC5D0\uC694?\nA: 3\uB144 \uD6C4\uC5D0 \uAC74\uC124\uC774 \uB05D\uB0A9\uB2C8\uB2E4.\nB: \uB300\uADDC\uBAA8 \uAC74\uC124 \uD504\uB85C\uC81D\uD2B8\uB124\uC694.",
     exampleSrc:"A: Construction of the new airport has started.\nB: When is it expected to be completed?\nA: Construction finishes in three years.\nB: It is a large-scale construction project.",
     funFact:"Korea's construction industry is a global powerhouse. Korean companies built the Burj Khalifa and many Middle Eastern mega-projects."},

    {type:"teach", trg:"\uAC74\uC124\uB418\uB2E4", src:"to be constructed (passive)", pos:"verb", gender:null,
     note:"Passive form. The building happens, emphasis on result.",
     example:"A: \uC774 \uB2E4\uB9AC\uB294 \uC5B8\uC81C \uAC74\uC124\uB418\uC5C8\uC5B4\uC694?\nB: 1970\uB144\uB300\uC5D0 \uAC74\uC124\uB418\uC5C8\uC5B4\uC694.\nA: \uC624\uB798\uB41C \uB2E4\uB9AC\uB124\uC694.\nB: \uC5ED\uC0AC\uC801\uC778 \uAC00\uCE58\uAC00 \uC788\uC5B4\uC694.",
     exampleSrc:"A: When was this bridge constructed?\nB: It was constructed in the 1970s.\nA: It is an old bridge.\nB: It has historical value.",
     funFact:"Korean passive verbs with -되다 focus on the result rather than who did it. This is preferred in formal and news writing."},

    {type:"teach", trg:"\uAC74\uC124\uD558\uB2E4", src:"to construct; to build", pos:"verb", gender:null,
     note:"Active form. Someone actively builds something.",
     example:"A: \uC815\uBD80\uAC00 \uC0C8 \uB3C4\uB85C\uB97C \uAC74\uC124\uD569\uB2C8\uB2E4.\nB: \uC5B4\uB514\uC5D0 \uAC74\uC124\uD574\uC694?\nA: \uC11C\uC6B8\uACFC \uBD80\uC0B0 \uC0AC\uC774\uC5D0\uC694.\nB: \uAD50\uD1B5\uC774 \uD3B8\uB9AC\uD574\uC9C0\uACA0\uB124\uC694.",
     exampleSrc:"A: The government is constructing a new road.\nB: Where are they building it?\nA: Between Seoul and Busan.\nB: Transportation will become more convenient.",
     funFact:"건설하다 (active) vs 건설되다 (passive) is a textbook example of Korean's active/passive verb pair system using -하다 and -되다."},

    {type:"teach", trg:"\uAC1C\uBC1C\uB418\uB2E4", src:"to be developed (passive)", pos:"verb", gender:null,
     note:"Sino-Korean: open (開) + advance (發) + become (되다).\nPassive: development happens.",
     example:"A: \uC0C8\uB85C\uC6B4 \uC57D\uC774 \uAC1C\uBC1C\uB418\uC5C8\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC57D\uC774\uC5D0\uC694?\nA: \uC554 \uCE58\uB8CC\uC81C\uAC00 \uAC1C\uBC1C\uB418\uC5C8\uC5B4\uC694.\nB: \uC758\uD559\uC774 \uBC1C\uC804\uD558\uACE0 \uC788\uB124\uC694.",
     exampleSrc:"A: A new medicine has been developed.\nB: What kind of medicine?\nA: A cancer treatment has been developed.\nB: Medical science is advancing.",
     funFact:"개발 is used for both technology development and real estate development. 부동산 개발 (real estate development) transformed Korea's landscape."},

    {type:"teach", trg:"\uAC1C\uBC29", src:"opening; liberalization", pos:"noun", gender:null,
     note:"Sino-Korean: open (開) + release (放).\nOpening something up that was closed.",
     example:"A: \uC2DC\uC7A5 \uAC1C\uBC29\uC774 \uD544\uC694\uD574\uC694.\nB: \uC678\uAD6D \uAE30\uC5C5\uB3C4 \uB4E4\uC5B4\uC62C \uC218 \uC788\uC744\uAE4C\uC694?\nA: \uAC1C\uBC29 \uC815\uCC45\uC774 \uC2DC\uD589\uB418\uBA74\uC694.\nB: \uACBD\uC7C1\uC774 \uD65C\uBC1C\uD574\uC9C0\uACA0\uB124\uC694.",
     exampleSrc:"A: Market opening is necessary.\nB: Will foreign companies be able to enter?\nA: If the opening policy is implemented.\nB: Competition will become active.",
     funFact:"개방 is a key term in Korean modern history. Korea's market opening (시장 개방) in the 1990s transformed the economy dramatically."},

    {type:"mc",
     q:"\uC0C8 \uACF5\uD56D\uC774 3\uB144 \uD6C4\uC5D0 \uC644\uACF5\uB429\uB2C8\uB2E4. \uC9C0\uAE08\uC740 \uBB34\uC5C7\uC744 \uD558\uACE0 \uC788\uC744\uAE4C\uC694?",
     opts:["\uAC74\uC124","\uAC1C\uBC29","\uAC74\uC870","\uAD6C\uBCC4"],
     ans:"\uAC74\uC124",
     hint:"This Sino-Korean word means the process of building large structures like airports and bridges."},

    {type:"teach", trg:"\uAC1C\uBC29\uB418\uB2E4", src:"to be opened (passive)", pos:"verb", gender:null,
     note:"Passive of 개방하다. Something becomes open/accessible.",
     example:"A: \uACF5\uC6D0\uC774 \uC2DC\uBBFC\uC5D0\uAC8C \uAC1C\uBC29\uB418\uC5C8\uC5B4\uC694.\nB: \uC804\uC5D0\uB294 \uC548 \uB418\uC5C8\uC5B4\uC694?\nA: \uACF5\uC0AC \uB54C\uBB38\uC5D0 \uB2EB\uD600 \uC788\uC5C8\uC5B4\uC694.\nB: \uC774\uC81C \uC790\uC720\uB86D\uAC8C \uAC08 \uC218 \uC788\uB124\uC694.",
     exampleSrc:"A: The park has been opened to citizens.\nB: It was not open before?\nA: It was closed for construction.\nB: Now we can go freely.",
     funFact:"개방되다 is used in diplomacy too: 국경이 개방되다 (borders are opened). It marks significant policy shifts."},

    {type:"teach", trg:"\uAC1C\uBC29\uD558\uB2E4", src:"to open; to liberalize", pos:"verb", gender:null,
     note:"Active form. To deliberately open something.",
     example:"A: \uC815\uBD80\uAC00 \uBE44\uC790\uB97C \uAC1C\uBC29\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uBE44\uC790\uC694?\nA: \uAD00\uAD11 \uBE44\uC790\uB97C \uAC1C\uBC29\uD588\uC5B4\uC694.\nB: \uC678\uAD6D\uC778 \uAD00\uAD11\uAC1D\uC774 \uB298\uACA0\uB124\uC694.",
     exampleSrc:"A: The government has opened up visas.\nB: What kind of visas?\nA: They opened tourist visas.\nB: Foreign tourists will increase.",
     funFact:"개방하다 is used in contexts where someone in authority grants access: 시장을 개방하다, 데이터를 개방하다 (open data)."},

    {type:"teach", trg:"\uAC74\uC870", src:"dryness; drought; dry conditions", pos:"noun", gender:null,
     note:"Sino-Korean: dry (乾) + dry (燥).\nBoth characters mean dry, doubling the emphasis.",
     example:"A: \uACE8\uC218\uAC00 \uAC74\uC870\uD574\uC694.\nB: \uBE44\uAC00 \uC624\uB798 \uC548 \uC640\uC11C\uC694.\nA: \uAC74\uC870\uD55C \uB0A0\uC528\uAC00 \uACC4\uC18D\uB3FC\uC694.\nB: \uC0B0\uBD88 \uC704\uD5D8\uC774 \uB192\uC544\uC838\uC694.",
     exampleSrc:"A: The valley is dry.\nB: Because it has not rained for a long time.\nA: Dry weather continues.\nB: The risk of forest fires increases.",
     funFact:"건조 is both a weather term and a manufacturing term: 건조기 means 'dryer' (the appliance). The same characters work in very different contexts."},

    {type:"teach", trg:"\uAC74\uC870\uD558\uB2E4", src:"to be dry", pos:"adj", gender:null,
     note:"Adjective form of 건조. Describes dry conditions.",
     example:"A: \uD53C\uBD80\uAC00 \uAC74\uC870\uD574\uC694.\nB: \uACE8\uC218\uC880 \uBC14\uB974\uC138\uC694.\nA: \uACF5\uAE30\uAC00 \uB108\uBB34 \uAC74\uC870\uD574\uC694.\nB: \uAC00\uC2B5\uAE30\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",
     exampleSrc:"A: My skin is dry.\nB: Apply some moisturizer.\nA: The air is too dry.\nB: Use a humidifier.",
     funFact:"Korea's winter is notoriously dry (건조한 겨울). Humidifiers are considered essential household items during winter months."},

    {type:"teach", trg:"\uAC74\uC804\uD558\uB2E4", src:"to be sound; to be wholesome", pos:"adj", gender:null,
     note:"Sino-Korean: healthy (健) + whole (全) + be (하다).\nMorally and physically sound.",
     example:"A: \uAC74\uC804\uD55C \uC0AC\uD68C\uB97C \uB9CC\uB4E4\uC5B4\uC57C \uD574\uC694.\nB: \uAD50\uC721\uC774 \uC911\uC694\uD558\uC8E0.\nA: \uAC74\uC804\uD55C \uCDE8\uBBF8 \uC0DD\uD65C\uB3C4 \uD544\uC694\uD574\uC694.\nB: \uB9DE\uC544\uC694, \uADE0\uD615 \uC7A1\uD78C \uC0DD\uD65C\uC774\uC8E0.",
     exampleSrc:"A: We need to create a sound society.\nB: Education is important.\nA: Wholesome hobbies are needed too.\nB: That is right, a balanced life.",
     funFact:"건전 is used in Korean media ratings: 건전한 콘텐츠 (wholesome content). The concept of social 'soundness' is deeply valued in Korean culture."},

    {type:"fb",
     s:"\uACBD\uC81C \uC2DC\uC7A5\uC774 \uC678\uAD6D\uC5D0 {1}\uB418\uC5C8\uC5B4\uC694.",
     a:["\uAC1C\uBC29"],
     opts:["\uAC1C\uBC29","\uAC74\uC124","\uAC74\uC870","\uAD6C\uBCC4"],
     hint:"This word means to open something that was previously closed or restricted, like a market.",
     sSrc:"The economic market has been {1} to foreign countries."},

    {type:"teach", trg:"\uAC15\uB3C4", src:"intensity; strength; robber", pos:"noun", gender:null,
     note:"Sino-Korean: strong (強) + degree (度). Also means 'robber.'\nContext determines meaning.",
     example:"A: \uC6B4\uB3D9\uC758 \uAC15\uB3C4\uB97C \uB192\uC5EC\uC57C \uD574\uC694.\nB: \uCC9C\uCC9C\uD788 \uAC15\uB3C4\uB97C \uC62C\uB9AC\uC138\uC694.\nA: \uC9C0\uC9C4 \uAC15\uB3C4\uAC00 7\uC774\uC5C8\uC5B4\uC694.\nB: \uAF64 \uAC15\uD55C \uC9C0\uC9C4\uC774\uB124\uC694.",
     exampleSrc:"A: I need to increase the exercise intensity.\nB: Raise the intensity gradually.\nA: The earthquake intensity was 7.\nB: That is a fairly strong earthquake.",
     funFact:"강도 as 'robber' (強盜) uses different hanja than 강도 as 'intensity' (強度), but they sound identical. Context is everything."},

    {type:"teach", trg:"\uAC15\uB825\uD558\uB2E4", src:"to be powerful; to be strong", pos:"adj", gender:null,
     note:"Sino-Korean: strong (強) + power (力) + be (하다).",
     example:"A: \uAC15\uB825\uD55C \uC815\uCC45\uC774 \uD544\uC694\uD574\uC694.\nB: \uC5B4\uB5A4 \uC815\uCC45\uC774\uC694?\nA: \uD658\uACBD \uBCF4\uD638 \uC815\uCC45\uC774\uC694.\nA: \uAC15\uB825\uD558\uAC8C \uCD94\uC9C4\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: A powerful policy is needed.\nB: What kind of policy?\nA: Environmental protection policy.\nA: It must be pushed forward powerfully.",
     funFact:"강력 is common in news: 강력 범죄 (violent crime), 강력한 태풍 (powerful typhoon), 강력히 추진 (strongly promote)."},

    {type:"teach", trg:"\uAC15\uB825\uD788", src:"strongly; powerfully", pos:"adv", gender:null,
     note:"Adverb form of 강력하다. Used with action verbs.",
     example:"A: \uC815\uBD80\uAC00 \uAC15\uB825\uD788 \uBC18\uBC15\uD588\uC5B4\uC694.\nB: \uBB34\uC5C7\uC5D0 \uB300\uD574\uC11C\uC694?\nA: \uBD88\uBC95 \uD665\uC704\uC5D0 \uB300\uD574\uC11C\uC694.\nB: \uAC15\uB825\uD788 \uB300\uC751\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: The government strongly objected.\nB: About what?\nA: About illegal acts.\nB: They must respond strongly.",
     funFact:"강력히 is a staple of political news. Politicians frequently state they will 강력히 추진하다 (strongly push forward) their agenda."},

    {type:"teach", trg:"\uAC15\uB82C\uD558\uB2E4", src:"to be intense; to be vivid", pos:"adj", gender:null,
     note:"Sino-Korean: strong (強) + fierce (烈) + be (하다).\nIntense sensory or emotional impact.",
     example:"A: \uCCAB\uC778\uC0C1\uC774 \uAC15\uB82C\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC810\uC774 \uAC15\uB82C\uD588\uC5B4\uC694?\nA: \uB208\uBE5B\uC774 \uAC15\uB82C\uD588\uC5B4\uC694.\nB: \uAC15\uB82C\uD55C \uC778\uC0C1\uC744 \uB0A8\uACBC\uB124\uC694.",
     exampleSrc:"A: The first impression was intense.\nB: What was intense about it?\nA: The gaze was intense.\nB: You left a vivid impression.",
     funFact:"강렬하다 vs 강력하다: 강렬 emphasizes sensory/emotional intensity (colors, impressions), while 강력 emphasizes power/force (policies, earthquakes)."},

    {type:"teach", trg:"\uAC70\uB300\uD558\uB2E4", src:"to be enormous; to be colossal", pos:"adj", gender:null,
     note:"Sino-Korean: huge (巨) + big (大) + be (하다).\nBoth characters mean 'big,' intensifying.",
     example:"A: \uAC70\uB300\uD55C \uAC74\uBB3C\uC774 \uBCF4\uC5EC\uC694.\nB: \uC800\uAC83\uC740 63\uBE4C\uB529\uC774\uC5D0\uC694.\nA: \uAC70\uB300\uD55C \uB3C4\uC2DC\uB124\uC694.\nB: \uC11C\uC6B8\uC740 \uC815\uB9D0 \uAC70\uB300\uD55C \uB3C4\uC2DC\uC608\uC694.",
     exampleSrc:"A: I can see an enormous building.\nB: That is the 63 Building.\nA: What a colossal city.\nB: Seoul is truly an enormous city.",
     funFact:"거대 combines two 'big' characters for emphasis. Korea uses this pattern often: 극소 (ultra-small), 초대형 (super-sized)."},

    {type:"teach", trg:"\uAC70\uCE60\uB2E4", src:"to be rough; to be coarse", pos:"adj", gender:null,
     note:"Pure Korean adjective. Describes rough texture, behavior, or language.",
     example:"A: \uD53C\uBD80\uAC00 \uAC70\uCE60\uC5B4\uC84C\uC5B4\uC694.\nB: \uBCF4\uC2B5\uC81C\uB97C \uBC14\uB974\uC138\uC694.\nA: \uB9D0\uD22C\uAC00 \uAC70\uCE60\uC5B4\uC694.\nB: \uC870\uAE08 \uBD80\uB4DC\uB7FD\uAC8C \uB9D0\uD558\uC138\uC694.",
     exampleSrc:"A: My skin has become rough.\nB: Apply moisturizer.\nA: Your way of speaking is rough.\nB: Please speak a bit more gently.",
     funFact:"거칠다 is irregular (ㄹ-irregular). It drops ㄹ before consonant endings: 거칠다 but 거친 (rough, modifier form)."},

    {type:"teach", trg:"\uAD09\uC7A5\uD558\uB2E4", src:"to be terrific; to be tremendous", pos:"adj", gender:null,
     note:"Sino-Korean: great/grand (宏) + splendid (壯) + be (하다).\nExpresses amazement at scale or quality.",
     example:"A: \uACBD\uCE58\uAC00 \uAD09\uC7A5\uD574\uC694!\nB: \uC815\uB9D0 \uBA4B\uC788\uC8E0?\nA: \uAD09\uC7A5\uD55C \uACF5\uC5F0\uC774\uC5C8\uC5B4\uC694.\nB: \uB2E4\uC74C\uC5D0 \uB610 \uAC00\uACE0 \uC2F6\uC5B4\uC694.",
     exampleSrc:"A: The scenery is tremendous!\nB: It is really beautiful, is it not?\nA: It was a terrific performance.\nB: I want to go again next time.",
     funFact:"In spoken Korean, 굉장히 (tremendously, adverb) is one of the most frequently used intensifiers, similar to English 'really.'"},

    {type:"teach", trg:"\uAD6C\uBCC4", src:"distinction; differentiation", pos:"noun", gender:null,
     note:"Sino-Korean: section (區) + separate (別).\nTelling things apart.",
     example:"A: \uC9C4\uD488\uACFC \uAC00\uD488\uC758 \uAD6C\uBCC4\uC774 \uC5B4\uB824\uC6CC\uC694.\nB: \uC804\uBB38\uAC00\uB3C4 \uAD6C\uBCC4\uC774 \uC5B4\uB835\uB2E4\uACE0 \uD574\uC694.\nA: \uAD6C\uBCC4 \uBC29\uBC95\uC774 \uC788\uC5B4\uC694?\nB: \uC77C\uB828\uBC88\uD638\uB97C \uD655\uC778\uD558\uC138\uC694.",
     exampleSrc:"A: It is hard to distinguish genuine from fake.\nB: Even experts say it is difficult to differentiate.\nA: Is there a way to tell them apart?\nB: Check the serial number.",
     funFact:"구별 vs 구분: 구별 emphasizes telling differences between similar things. 구분 emphasizes categorizing or dividing into groups."},

    {type:"teach", trg:"\uAD6C\uBCC4\uB418\uB2E4", src:"to be distinguished; to be differentiated", pos:"verb", gender:null,
     note:"Passive form: the distinction becomes apparent.",
     example:"A: \uC313\uB461\uC774\uC640 \uC20C\uC758 \uB9DB\uC774 \uAD6C\uBCC4\uB3FC\uC694?\nB: \uB124, \uD655\uC2E4\uD788 \uAD6C\uBCC4\uB3FC\uC694.\nA: \uC5B4\uB5BB\uAC8C \uAD6C\uBCC4\uB418\uB294\uC9C0 \uC54C\uB824 \uC8FC\uC138\uC694.\nB: \uC0C9\uACFC \uB9DB\uC774 \uB2E4\uB974\uC8E0.",
     exampleSrc:"A: Can you differentiate the taste of soju and vodka?\nB: Yes, they are clearly differentiated.\nA: Tell me how they are distinguished.\nB: The color and taste are different.",
     funFact:"구별되다 is preferred in scientific and academic writing where objectivity matters. The passive highlights the observable difference."},

    {type:"teach", trg:"\uAD6C\uBCC4\uD558\uB2E4", src:"to distinguish; to tell apart", pos:"verb", gender:null,
     note:"Active form. You actively make the distinction.",
     example:"A: \uC774 \uB450 \uB2E8\uC5B4\uB97C \uAD6C\uBCC4\uD560 \uC218 \uC788\uC5B4\uC694?\nB: \uBE44\uC2B7\uD574\uC11C \uAD6C\uBCC4\uD558\uAE30 \uC5B4\uB824\uC6CC\uC694.\nA: \uBB38\uB9E5\uC73C\uB85C \uAD6C\uBCC4\uD558\uC138\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uC5F0\uC2B5\uD574 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: Can you distinguish these two words?\nB: They are similar so it is hard to distinguish.\nA: Distinguish them by context.\nB: I see, I will practice.",
     funFact:"구별하다 is essential for language learning. Learners must 구별하다 similar-sounding words, grammar patterns, and honorific levels."},

    {type:"mc",
     q:"\uAC15\uB82C\uD55C \uCCAB\uC778\uC0C1\uC744 \uB0A8\uACBC\uC5B4\uC694. \uAC15\uB82C\uD558\uB2E4\uC758 \uB73B\uC740?",
     opts:["\uAC10\uAC01\uC774 \uAC15\uD558\uB2E4","\uD06C\uAE30\uAC00 \uD06C\uB2E4","\uC870\uC6A9\uD558\uB2E4","\uBD80\uB4DC\uB7FD\uB2E4"],
     ans:"\uAC10\uAC01\uC774 \uAC15\uD558\uB2E4",
     hint:"This adjective describes something that makes a vivid, powerful sensory or emotional impact."},

    {type:"match", pairs:[
      {trg:"\uAC74\uC124", src:"construction"},
      {trg:"\uAC1C\uBC29", src:"opening"},
      {trg:"\uAC74\uC870", src:"dryness"},
      {trg:"\uAC15\uB3C4", src:"intensity"},
      {trg:"\uAD6C\uBCC4", src:"distinction"},
      {trg:"\uAC70\uB300\uD558\uB2E4", src:"enormous"}
    ]}
  ]
};
export default LESSON_5;
