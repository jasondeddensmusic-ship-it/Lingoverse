// B2 Lesson 01: Home & Daily Life
// Words: 가구, 가사, 가위, 간식, 간장, 간편하다, 감자, 갈비탕, 고구마, 고추장,
//        고춧가루, 국수, 국물, 겨자, 귤, 검정색, 까만색, 가죽, 갈증, 가로등

const LESSON_1 = {
  id:"kov2_b2_l1", title:"집과 일상", icon:"\uD83C\uDFE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Home & Daily Life",
     desc:"Master everyday Korean vocabulary for household items, food, and daily surroundings. These words appear frequently in TOPIK II reading passages about lifestyle and culture.",
     goals:["Learn 20 home and daily life vocabulary words","Recognize Sino-Korean compounds for household items","Use food-related vocabulary in natural dialogues"]},

    {type:"teach", trg:"\uAC00\uAD6C", src:"furniture", pos:"noun", gender:null,
     note:"Sino-Korean: home/house (家) + tool/utensil (具).",
     example:"A: \uC0C8 \uAC00\uAD6C\uB97C \uC0AC\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uAC00\uAD6C\uAC00 \uD544\uC694\uD574\uC694?\nA: \uCC45\uC0C1\uD558\uACE0 \uC758\uC790\uC694.\nB: \uBC31\uD654\uC810 \uC138\uC77C\uC774 \uC774\uBC88 \uC8FC\uB9D0\uBD80\uD130\uC608\uC694.",
     exampleSrc:"A: I want to buy new furniture.\nB: What furniture do you need?\nA: A desk and a chair.\nB: The department store sale starts this weekend.",
     funFact:"Also means 'household' when counting families, as in the census term 가구 수 (number of households)."},

    {type:"teach", trg:"\uAC00\uC0AC", src:"housework; lyrics", pos:"noun", gender:null,
     note:"Sino-Korean: house (家) + matter (事). Also means song lyrics.",
     example:"A: \uC624\uB298 \uAC00\uC0AC\uAC00 \uB9CE\uC544\uC694.\nB: \uBB50\uBD80\uD130 \uD560 \uAC70\uC608\uC694?\nA: \uBE68\uB798\uD558\uACE0 \uCCAD\uC18C\uBD80\uD130\uC694.\nB: \uC81C\uAC00 \uC124\uAC70\uC9C0 \uD560\uAC8C\uC694.",
     exampleSrc:"A: There is a lot of housework today.\nB: What will you start with?\nA: Laundry and cleaning first.\nB: I will do the dishes.",
     funFact:"The same word 가사 means 'song lyrics' in music contexts, from the same hanja characters read differently."},

    {type:"teach", trg:"\uAC00\uC704", src:"scissors", pos:"noun", gender:null,
     note:"Pure Korean word. Used with the counter 개.",
     example:"A: \uAC00\uC704 \uC880 \uBE4C\uB824\uC904 \uC218 \uC788\uC5B4\uC694?\nB: \uC5EC\uAE30 \uC788\uC5B4\uC694. \uC870\uC2EC\uD558\uC138\uC694.\nA: \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uD0DD\uBC30 \uC0C1\uC790 \uC5F4\uB824\uACE0\uC694.\nB: \uCE7C\uBCF4\uB2E4 \uAC00\uC704\uAC00 \uB354 \uC548\uC804\uD558\uC8E0.",
     exampleSrc:"A: Could you lend me some scissors?\nB: Here they are. Be careful.\nA: Thank you. I need to open a delivery box.\nB: Scissors are safer than a knife.",
     funFact:"In Korean rock-paper-scissors (가위바위보), scissors is the first word called out."},

    {type:"teach", trg:"\uAC04\uC2DD", src:"snack", pos:"noun", gender:null,
     note:"Sino-Korean: between (間) + food (食). Food between meals.",
     example:"A: \uBC30\uAC00 \uACE0\uD504\uB370 \uAC04\uC2DD \uC788\uC5B4\uC694?\nB: \uACFC\uC790\uD558\uACE0 \uACFC\uC77C\uC774 \uC788\uC5B4\uC694.\nA: \uACFC\uC77C \uC8FC\uC138\uC694.\nB: \uC0AC\uACFC\uD558\uACE0 \uADC8 \uC911\uC5D0 \uBB50 \uB4DC\uB9B4\uAE4C\uC694?",
     exampleSrc:"A: I am hungry. Do you have any snacks?\nB: There are crackers and fruit.\nA: Give me fruit please.\nB: Between apple and tangerine, which would you like?",
     funFact:"Korea has a massive snack culture. Convenience store snack aisles (편의점 간식) are a cultural institution."},

    {type:"teach", trg:"\uAC04\uC7A5", src:"soy sauce", pos:"noun", gender:null,
     note:"Pure Korean compound: liver (간) + sauce (장).",
     example:"A: \uC774 \uC74C\uC2DD\uC5D0 \uAC04\uC7A5\uC744 \uB123\uC744\uAE4C\uC694?\nB: \uB124, \uC870\uAE08\uB9CC \uB123\uC73C\uC138\uC694.\nA: \uAC04\uC7A5 \uC885\uB958\uAC00 \uB9CE\uB124\uC694.\nB: \uC9C4\uAC04\uC7A5\uACFC \uAD6D\uAC04\uC7A5\uC774 \uB2EC\uB77C\uC694.",
     exampleSrc:"A: Should I add soy sauce to this dish?\nB: Yes, just a little.\nA: There are so many types of soy sauce.\nB: Dark soy sauce and soup soy sauce are different.",
     funFact:"Korean households traditionally brewed their own soy sauce (집간장). Making jang is considered an important cultural heritage."},

    {type:"mc",
     q:"\uAC00\uAD6C\uC758 \uD55C\uC790 \uC758\uBBF8\uB294 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
     opts:["\uC9D1 + \uB3C4\uAD6C","\uC74C\uC2DD + \uC7AC\uB8CC","\uC625 + \uC2E4","\uC0AC\uB78C + \uBB3C\uAC74"],
     ans:"\uC9D1 + \uB3C4\uAD6C",
     hint:"Think about what you find inside a home that serves a functional purpose."},

    {type:"teach", trg:"\uAC04\uD3B8\uD558\uB2E4", src:"to be convenient; simple", pos:"adj", gender:null,
     note:"Sino-Korean: simple (簡) + convenient (便).",
     example:"A: \uC774 \uC694\uB9AC\uBC95\uC740 \uAC04\uD3B8\uD574\uC694.\nB: \uB124, 10\uBD84\uC774\uBA74 \uB418\uC694.\nA: \uD63C\uC790 \uC0B4 \uB54C \uAC04\uD3B8\uD55C \uC74C\uC2DD\uC774 \uCD5C\uACE0\uC608\uC694.\nB: \uB9DE\uC544\uC694, \uAC04\uD3B8\uC2DD\uB3C4 \uB9CE\uC774 \uBC1C\uC804\uD588\uC5B4\uC694.",
     exampleSrc:"A: This recipe is simple.\nB: Yes, it only takes 10 minutes.\nA: When living alone, simple food is the best.\nB: That is right, convenience food has improved a lot too.",
     funFact:"Korea's convenience food (간편식) market exploded in the 2010s, with home meal replacements (HMR) becoming a billion-dollar industry."},

    {type:"teach", trg:"\uAC10\uC790", src:"potato", pos:"noun", gender:null,
     note:"Pure Korean word. One of Korea's staple vegetables.",
     example:"A: \uAC10\uC790\uCC0C\uAC1C \uB9CC\uB4E4\uC5B4 \uBCFC\uAE4C\uC694?\nB: \uC88B\uC544\uC694! \uAC10\uC790 \uBA87 \uAC1C \uD544\uC694\uD574\uC694?\nA: \uC138 \uAC1C\uBA74 \uB420 \uAC83 \uAC19\uC544\uC694.\nB: \uC591\uD30C\uD558\uACE0 \uB41C\uC7A5\uB3C4 \uC900\uBE44\uD560\uAC8C\uC694.",
     exampleSrc:"A: Shall we make potato stew?\nB: Great! How many potatoes do we need?\nA: Three should be enough.\nB: I will prepare onions and soybean paste too.",
     funFact:"Gangwon Province is Korea's potato heartland. The Gangwon Potato Festival celebrates this humble crop every summer."},

    {type:"teach", trg:"\uAC08\uBE44\uD0D5", src:"short rib soup", pos:"noun", gender:null,
     note:"Pure Korean: ribs (갈비) + soup (탕, from Chinese 湯).",
     example:"A: \uC810\uC2EC\uC5D0 \uAC08\uBE44\uD0D5 \uC5B4\uB54C\uC694?\nB: \uC88B\uC544\uC694! \uC5B4\uB514\uAC00 \uB9DB\uC788\uC5B4\uC694?\nA: \uD68C\uC0AC \uADFC\uCC98\uC5D0 \uC720\uBA85\uD55C \uC9D1\uC774 \uC788\uC5B4\uC694.\nB: \uAC70\uAE30\uB85C \uAC00\uC694.",
     exampleSrc:"A: How about short rib soup for lunch?\nB: Great! Where is a good place?\nA: There is a famous restaurant near the office.\nB: Let us go there.",
     funFact:"Galbitang is a popular hangover cure in Korea. Many 24-hour restaurants specialize in it."},

    {type:"teach", trg:"\uACE0\uAD6C\uB9C8", src:"sweet potato", pos:"noun", gender:null,
     note:"Pure Korean word. A beloved snack food in Korea.",
     example:"A: \uACE0\uAD6C\uB9C8 \uAD6C\uC6CC \uBA39\uC744\uAE4C\uC694?\nB: \uC624\uBE10\uC5D0\uC694, \uC544\uB2C8\uBA74 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uB85C?\nA: \uC624\uBE10\uC774 \uB354 \uB9DB\uC788\uC8E0.\nB: \uACE8\uACE8\uD55C \uACE0\uAD6C\uB9C8\uAC00 \uC81C\uC77C \uB9DB\uC788\uC5B4\uC694.",
     exampleSrc:"A: Shall we bake sweet potatoes?\nB: In the oven, or in the air fryer?\nA: The oven is tastier.\nB: Honey sweet potatoes are the most delicious.",
     funFact:"Roasted sweet potatoes (군고구마) are a classic Korean winter street food, sold from carts on cold days."},

    {type:"fb",
     s:"\uC774 \uC694\uB9AC\uBC95\uC740 \uC815\uB9D0 {1}. 10\uBD84\uC774\uBA74 \uB3FC\uC694.",
     a:["\uAC04\uD3B8\uD574\uC694"],
     opts:["\uAC04\uD3B8\uD574\uC694","\uBCF5\uC7A1\uD574\uC694","\uC2EC\uAC01\uD574\uC694","\uBD88\uD3B8\uD574\uC694"],
     hint:"This describes something that is easy and quick to do, not complicated.",
     sSrc:"This recipe is really {1}. It only takes 10 minutes."},

    {type:"teach", trg:"\uACE0\uCD94\uC7A5", src:"red pepper paste", pos:"noun", gender:null,
     note:"Korean compound: chili pepper (고추) + paste/sauce (장).",
     example:"A: \uBE44\uBE54\uBC25 \uB9CC\uB4E4 \uB54C \uACE0\uCD94\uC7A5 \uB9CE\uC774 \uB123\uC5B4\uC694?\nB: \uB124, \uB450 \uC219\uAC00\uB77D\uC774\uC694.\nA: \uB9E4\uC6B4 \uAC70 \uC88B\uC544\uD558\uC138\uC694?\nB: \uD55C\uAD6D \uC0AC\uB78C\uC740 \uB300\uBD80\uBD84 \uB9E4\uC6B4 \uAC78 \uC88B\uC544\uD574\uC694!",
     exampleSrc:"A: Do you put a lot of red pepper paste when making bibimbap?\nB: Yes, about two tablespoons.\nA: Do you like spicy food?\nB: Most Koreans love spicy food!",
     funFact:"Gochujang is fermented for months in traditional earthen pots (장독대). It has gained worldwide popularity as a 'superfood' condiment."},

    {type:"teach", trg:"\uACE0\uCF67\uAC00\uB8E8", src:"chili pepper flakes", pos:"noun", gender:null,
     note:"Korean compound: chili pepper (고추) + powder (가루).",
     example:"A: \uAE40\uCE58 \uB2F4\uADF8\uB54C \uACE0\uCF67\uAC00\uB8E8 \uC5BC\uB9C8\uB098 \uD544\uC694\uD574\uC694?\nB: \uBC30\uCD94 \uC2ED \uD3EC\uAE30 \uAE30\uC900\uC73C\uB85C \uD55C \uCEF5\uC774\uC694.\nA: \uB9E4\uC6B4 \uAC83\uACFC \uB35C \uB9E4\uC6B4 \uAC83 \uC5B4\uB5A4 \uAC8C \uC88B\uC544\uC694?\nB: \uD0DC\uC591\uCD08 \uACE0\uCF67\uAC00\uB8E8\uAC00 \uD5A5\uC774 \uC88B\uC544\uC694.",
     exampleSrc:"A: How much chili flakes do you need when making kimchi?\nB: About one cup per ten heads of cabbage.\nA: Do you prefer the hot kind or the milder one?\nB: Sun-dried chili flakes have the best aroma.",
     funFact:"Korean chili flakes are coarser than Western cayenne. The specific grind (굵은 vs 고운) determines the dish."},

    {type:"teach", trg:"\uAD6D\uC218", src:"noodles", pos:"noun", gender:null,
     note:"Sino-Korean: country/national (國) + water (水). Literally 'national water.'",
     example:"A: \uC810\uC2EC\uC5D0 \uAD6D\uC218 \uBA39\uC744\uB798\uC694?\nB: \uC88B\uC544\uC694! \uBE44\uBE54\uAD6D\uC218\uC694, \uC7D4\uCE58\uAD6D\uC218\uC694?\nA: \uBE44\uBE54\uAD6D\uC218 \uC8FC\uC138\uC694.\nB: \uACE0\uBA85 \uAD6D\uC218\uAC00 \uC720\uBA85\uD558\uC8E0.",
     exampleSrc:"A: Shall we have noodles for lunch?\nB: Sure! Bibim noodles or janchi noodles?\nA: Bibim noodles please.\nB: Gomyeong noodles are famous, you know.",
     funFact:"Noodles at weddings (잔치국수) symbolize long life. Asking someone 'When will you feed us noodles?' means 'When are you getting married?'"},

    {type:"teach", trg:"\uAD6D\uBB3C", src:"broth; soup liquid", pos:"noun", gender:null,
     note:"Pure Korean compound: soup (국) + water (물).",
     example:"A: \uC774 \uAD6D\uBB3C \uC815\uB9D0 \uC2DC\uC6D0\uD558\uB2E4!\nB: \uBB34\uB97C \uB9CE\uC774 \uB123\uC5C8\uAC70\uB4E0\uC694.\nA: \uAD6D\uBB3C\uC774 \uB9DB\uC788\uC73C\uBA74 \uC74C\uC2DD\uC774 \uBC18\uC740 \uC131\uACF5\uC774\uC5D0\uC694.\nB: \uB9DE\uC544\uC694, \uD55C\uAD6D \uC694\uB9AC\uC758 \uAE30\uBCF8\uC774\uC8E0.",
     exampleSrc:"A: This broth is really refreshing!\nB: I added a lot of radish.\nA: If the broth is good, the dish is half successful.\nB: That is right, it is the foundation of Korean cooking.",
     funFact:"Korean food culture distinguishes between 국 (soup) and 찌개 (stew) partly by broth-to-solid ratio. Broth quality defines the dish."},

    {type:"match", pairs:[
      {trg:"\uAC04\uC2DD", src:"snack"},
      {trg:"\uAC04\uC7A5", src:"soy sauce"},
      {trg:"\uACE0\uCD94\uC7A5", src:"red pepper paste"},
      {trg:"\uACE0\uCF67\uAC00\uB8E8", src:"chili flakes"},
      {trg:"\uAD6D\uC218", src:"noodles"},
      {trg:"\uAD6D\uBB3C", src:"broth"}
    ]},

    {type:"teach", trg:"\uACA8\uC790", src:"mustard", pos:"noun", gender:null,
     note:"Pure Korean word for the condiment.",
     example:"A: \uB0C9\uBA74\uC5D0 \uACA8\uC790\uB97C \uB123\uC744\uAE4C\uC694?\nB: \uC870\uAE08\uB9CC \uB123\uC73C\uC138\uC694, \uB9E4\uC6CC\uC694.\nA: \uACA8\uC790\uB97C \uC88B\uC544\uD558\uC138\uC694?\nB: \uC57D\uAC04\uB9CC \uB123\uC73C\uBA74 \uD48D\uBBF8\uAC00 \uC88B\uC544\uC838\uC694.",
     exampleSrc:"A: Shall I add mustard to the cold noodles?\nB: Just a little, it is spicy.\nA: Do you like mustard?\nB: A small amount adds a nice flavor.",
     funFact:"Korean-style mustard sauce (겨자소스) is a key dip for Korean cold dishes like 겨자채, a popular summer appetizer."},

    {type:"teach", trg:"\uADC8", src:"tangerine; mandarin orange", pos:"noun", gender:null,
     note:"Pure Korean word. Jeju Island's signature fruit.",
     example:"A: \uC81C\uC8FC\uB3C4\uC5D0\uC11C \uADC8\uC774 \uC654\uC5B4\uC694.\nB: \uC640, \uC81C\uC8FC \uADC8\uC740 \uB2EC\uCF64\uD558\uC8E0!\nA: \uD55C \uC0C1\uC790\uB098 \uB4DC\uC138\uC694.\nB: \uACE0\uB9C8\uC6CC\uC694! \uADC8\uC740 \uBE44\uD0C0\uBBFC C\uAC00 \uD480\uBD80\uD558\uC8E0.",
     exampleSrc:"A: Tangerines came from Jeju Island.\nB: Wow, Jeju tangerines are so sweet!\nA: Please take a whole box.\nB: Thank you! Tangerines are rich in vitamin C.",
     funFact:"Jeju tangerines (감귤) are so iconic that Jeju's economy historically depended on them. 'Jeju gyul' is a beloved winter gift."},

    {type:"teach", trg:"\uAC80\uC815\uC0C9", src:"black (the color)", pos:"noun", gender:null,
     note:"Sino-Korean: examine/check (檢) + decide (定) + color (色).\nFormal word for the color black.",
     example:"A: \uAC80\uC815\uC0C9 \uC815\uC7A5\uC744 \uC785\uC5B4\uC57C \uD574\uC694?\nB: \uB124, \uACF5\uC2DD \uD589\uC0AC\uB2C8\uAE4C\uC694.\nA: \uAC80\uC815\uC0C9 \uAD6C\uB450\uB3C4 \uC2E0\uC5B4\uC57C \uD558\uB098\uC694?\nB: \uB124, \uAC80\uC815\uC0C9\uC73C\uB85C \uD1B5\uC77C\uD574 \uC8FC\uC138\uC694.",
     exampleSrc:"A: Do I have to wear a black suit?\nB: Yes, it is a formal event.\nA: Do I need black shoes too?\nB: Yes, please keep everything in black.",
     funFact:"In Korean culture, black at formal events signals respect and dignity. Black mourning clothes (상복) are standard at funerals."},

    {type:"teach", trg:"\uAE4C\uB9CC\uC0C9", src:"jet black (color)", pos:"noun", gender:null,
     note:"Pure Korean: pitch dark (까만) + color (색).\nMore colloquial than 검정색.",
     example:"A: \uBA38\uB9AC\uB97C \uAE4C\uB9CC\uC0C9\uC73C\uB85C \uC5FC\uC0C9\uD588\uC5B4\uC694.\nB: \uC640, \uC798 \uC5B4\uC6B8\uB824\uC694!\nA: \uAE4C\uB9CC\uC0C9\uC774 \uC81C\uC77C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uAC83 \uAC19\uC544\uC694.\nB: \uD55C\uAD6D \uC0AC\uB78C\uB4E4 \uBA38\uB9AC\uC0C9\uC774\uC8E0.",
     exampleSrc:"A: I dyed my hair jet black.\nB: Wow, it suits you well!\nA: I think jet black looks the most natural.\nB: It is the natural Korean hair color.",
     funFact:"까만색 and 검정색 both mean black, but 까만색 feels warmer and more colloquial. 검은색 is the most neutral form."},

    {type:"fb",
     s:"\uC81C\uC8FC\uB3C4\uC5D0\uC11C \uC628 {1}\uC774/\uAC00 \uC815\uB9D0 \uB2EC\uCF64\uD574\uC694.",
     a:["\uADC8"],
     opts:["\uADC8","\uAC10\uC790","\uACE0\uAD6C\uB9C8","\uACA8\uC790"],
     hint:"Jeju Island is famous for this citrus fruit, especially in winter.",
     sSrc:"The {1} from Jeju Island is really sweet."},

    {type:"teach", trg:"\uAC00\uC8FD", src:"leather", pos:"noun", gender:null,
     note:"Pure Korean word for animal hide or leather products.",
     example:"A: \uC774 \uAC00\uBC29\uC740 \uC9C4\uC9DC \uAC00\uC8FD\uC774\uC5D0\uC694?\nB: \uB124, \uC18C\uAC00\uC8FD\uC774\uC5D0\uC694.\nA: \uAD00\uB9AC\uB97C \uC798 \uD574\uC57C\uACA0\uB124\uC694.\nB: \uAC00\uC8FD \uC804\uC6A9 \uD06C\uB9BC\uC73C\uB85C \uB2E6\uC73C\uC138\uC694.",
     exampleSrc:"A: Is this bag real leather?\nB: Yes, it is cowhide.\nA: I should take good care of it.\nB: Polish it with leather-specific cream.",
     funFact:"Korea's traditional leather craft (가죽 공예) has a long history. Modern Korean leather goods brands are gaining global recognition."},

    {type:"teach", trg:"\uAC08\uC99D", src:"thirst", pos:"noun", gender:null,
     note:"Pure Korean compound: thirst/dry (갈) + symptom (증, 症).",
     example:"A: \uAC08\uC99D\uC774 \uB0A0 \uB54C \uBB50 \uB9C8\uC154\uC694?\nB: \uBCF4\uD1B5 \uBB3C\uC744 \uB9C8\uC154\uC694.\nA: \uC800\uB294 \uBCF4\uB9AC\uCC28\uB97C \uC88B\uC544\uD574\uC694.\nB: \uBCF4\uB9AC\uCC28\uB294 \uAC08\uC99D \uD574\uC18C\uC5D0 \uC88B\uC8E0.",
     exampleSrc:"A: What do you drink when you are thirsty?\nB: I usually drink water.\nA: I prefer barley tea.\nB: Barley tea is good for quenching thirst.",
     funFact:"The expression 갈증을 느끼다 (to feel thirst) is also used metaphorically for longing or craving something."},

    {type:"teach", trg:"\uAC00\uB85C\uB4F1", src:"street lamp", pos:"noun", gender:null,
     note:"Sino-Korean hybrid: horizontal (가로) + lantern/lamp (燈).",
     example:"A: \uBC24\uC5D0 \uC774 \uAE38\uC774 \uC5B4\uB450\uC6CC\uC694.\nB: \uAC00\uB85C\uB4F1\uC774 \uACE0\uC7A5 \uB09C \uAC83 \uAC19\uC544\uC694.\nA: \uAD6C\uCCAD\uC5D0 \uC2E0\uACE0\uD574\uC57C\uACA0\uC5B4\uC694.\nB: \uAC00\uB85C\uB4F1 \uC5C6\uC73C\uBA74 \uC704\uD5D8\uD558\uC8E0.",
     exampleSrc:"A: This street is dark at night.\nB: The street lamp seems to be broken.\nA: We should report it to the district office.\nB: Without street lamps, it is dangerous.",
     funFact:"Seoul has been replacing traditional street lamps with smart LED lamps (스마트 가로등) that also serve as Wi-Fi hotspots."},

    {type:"mc",
     q:"\uD55C\uAD6D \uC74C\uC2DD\uC758 \uAE30\uBCF8\uC774 \uB418\uB294 \uAC83\uC740?",
     opts:["\uAD6D\uBB3C","\uACA8\uC790","\uACE0\uCF67\uAC00\uB8E8","\uAC00\uC704"],
     ans:"\uAD6D\uBB3C",
     hint:"Think about the liquid base that makes Korean soups and stews taste good."},

    {type:"match", pairs:[
      {trg:"\uAC00\uAD6C", src:"furniture"},
      {trg:"\uAC00\uC0AC", src:"housework"},
      {trg:"\uAC00\uC8FD", src:"leather"},
      {trg:"\uAC08\uC99D", src:"thirst"},
      {trg:"\uAC00\uB85C\uB4F1", src:"street lamp"},
      {trg:"\uAC80\uC815\uC0C9", src:"black (color)"}
    ]}
  ]
};
export default LESSON_1;
