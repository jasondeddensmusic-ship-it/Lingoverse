// B2 Lesson 14: Nature & Weather
// Words: 가뭄, 강수량, 기후, 공해, 공기, 계곡, 개구리, 개미, 개나리, 곰,
//        겨울철, 가라앉다, 깊숙이, 곡식, 가만, 가만있다, 갇히다, 가령, 그저, 그토록

const LESSON_14 = {
  id:"kov2_b2_l14", title:"자연과 날씨", icon:"\uD83C\uDF3F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature & Weather",
     desc:"Learn vocabulary for weather phenomena, nature, animals, and environmental conditions. These words appear in TOPIK II passages about climate, ecology, and the natural world.",
     goals:["Learn 20 nature and weather vocabulary words","Understand environmental Sino-Korean compounds","Describe natural phenomena and weather patterns"]},

    {type:"teach", trg:"\uAC00\uBB84", src:"drought", pos:"noun", gender:null,
     note:"Pure Korean word. Extended period without rain.",
     example:"A: \uC62C\uD574 \uAC00\uBB44\uC774 \uC2EC\uD574\uC694.\nB: \uBE44\uAC00 \uC624\uB798 \uC548 \uC654\uC8E0.\nA: \uAC00\uBB44 \uB54C\uBB38\uC5D0 \uB18D\uC791\uBB3C\uC774 \uD53C\uD574\uB97C \uBC1B\uC558\uC5B4\uC694.\nB: \uBB3C \uBD80\uC871\uC774 \uC2EC\uAC01\uD574\uC694.",
     exampleSrc:"A: This year's drought is severe.\nB: It has not rained for a long time.\nA: Crops suffered damage because of the drought.\nB: The water shortage is serious.",
     funFact:"Korea experiences periodic droughts (가뭄). Traditional rain-calling rituals (기우제) were performed historically to end droughts."},

    {type:"teach", trg:"\uAC15\uC218\uB7C9", src:"precipitation; amount of rainfall", pos:"noun", gender:null,
     note:"Sino-Korean: descend (降) + water (水) + amount (量).",
     example:"A: \uC62C\uD574 \uAC15\uC218\uB7C9\uC774 \uC801\uC5B4\uC694.\nB: \uD3C9\uB144\uBCF4\uB2E4 \uC801\uC5B4\uC694?\nA: \uAC15\uC218\uB7C9\uC774 \uB9CE\uC740 \uC9C0\uC5ED\uC774\uC5D0\uC694.\nB: \uAE30\uD6C4\uBCC0\uD654\uC758 \uC601\uD5A5\uC774\uC5D0\uC694.",
     exampleSrc:"A: Precipitation is low this year.\nB: Less than the average year?\nA: This is a region with high precipitation.\nB: It is the effect of climate change.",
     funFact:"강수량 is a standard meteorological term. Korea's monsoon season (장마철) accounts for much of the annual 강수량."},

    {type:"teach", trg:"\uAE30\uD6C4", src:"climate", pos:"noun", gender:null,
     note:"Sino-Korean: air (氣) + time/season (候).\nLong-term weather patterns of a region.",
     example:"A: \uD55C\uAD6D\uC758 \uAE30\uD6C4\uB294 \uC0AC\uACC4\uAC00 \uB69C\uB837\uD574\uC694.\nB: \uAE30\uD6C4\uBCC0\uD654\uAC00 \uC2EC\uAC01\uD574\uC694.\nA: \uAE30\uD6C4 \uBCC0\uD654\uC5D0 \uB300\uC751\uD574\uC57C \uD574\uC694.\nB: \uD658\uACBD \uBCF4\uD638\uAC00 \uC2DC\uAE09\uD574\uC694.",
     exampleSrc:"A: Korea's climate has four distinct seasons.\nB: Climate change is serious.\nA: We need to respond to climate change.\nB: Environmental protection is urgent.",
     funFact:"기후 (climate) vs 날씨 (weather): 기후 is long-term patterns, 날씨 is daily conditions. 기후변화 (climate change) is the global term."},

    {type:"teach", trg:"\uACF5\uD574", src:"pollution; environmental contamination", pos:"noun", gender:null,
     note:"Sino-Korean: public (公) + harm (害).\nEnvironmental pollution affecting the public.",
     example:"A: \uACF5\uD574\uAC00 \uC2EC\uAC01\uD55C \uC9C0\uC5ED\uC774\uC5D0\uC694.\nB: \uACF5\uC7A5\uC774 \uB9CE\uC544\uC11C\uC694?\nA: \uACF5\uD574\uB97C \uC904\uC774\uB294 \uB178\uB825\uC774 \uD544\uC694\uD574\uC694.\nB: \uD658\uACBD \uADDC\uC81C\uAC00 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: This is an area with serious pollution.\nB: Because there are many factories?\nA: Efforts to reduce pollution are needed.\nB: Environmental regulation is important.",
     funFact:"공해 was a major issue during Korea's industrialization. Today, 미세먼지 (fine dust/particulate matter) dominates pollution concerns."},

    {type:"teach", trg:"\uACF5\uAE30", src:"air; atmosphere", pos:"noun", gender:null,
     note:"Sino-Korean: air/empty (空) + energy (氣).\nThe air we breathe.",
     example:"A: \uACF5\uAE30\uAC00 \uB9D1\uC544\uC694.\nB: \uC0B0\uC5D0 \uC624\uB2C8\uAE4C \uACF5\uAE30\uAC00 \uC88B\uC8E0.\nA: \uACF5\uAE30 \uC624\uC5FC\uC774 \uC2EC\uD574\uC694.\nB: \uB9C8\uC2A4\uD06C\uB97C \uC4F0\uC138\uC694.",
     exampleSrc:"A: The air is clean.\nB: The air is good because we are in the mountains.\nA: Air pollution is severe.\nB: Wear a mask.",
     funFact:"공기 is both literal air and figurative atmosphere: 분위기 (atmosphere/mood) contains the same 기 (氣). 공기질 means air quality."},

    {type:"mc",
     q:"\uBE44\uAC00 \uC624\uB798 \uC624\uC9C0 \uC54A\uC544\uC11C \uBB3C\uC774 \uBD80\uC871\uD55C \uC0C1\uD669\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAC00\uBB44","\uAC15\uC218\uB7C9","\uACF5\uD574","\uAE30\uD6C4"],
     ans:"\uAC00\uBB44",
     hint:"This pure Korean word describes a prolonged period without rain that causes water shortages."},

    {type:"teach", trg:"\uACC4\uACE1", src:"valley; gorge", pos:"noun", gender:null,
     note:"Sino-Korean: stream/valley (溪) + valley (谷).",
     example:"A: \uACC4\uACE1\uC5D0\uC11C \uBB3C\uB180\uC774 \uD588\uC5B4\uC694.\nB: \uBB3C\uC774 \uCC28\uAC00\uC6E0\uC5B4\uC694?\nA: \uACC4\uACE1 \uBB3C\uC774 \uB9D1\uACE0 \uC2DC\uC6D0\uD574\uC694.\nB: \uC5EC\uB984\uC5D0 \uACC4\uACE1\uC774 \uCD5C\uACE0\uC8E0.",
     exampleSrc:"A: I played in the water at the valley.\nB: Was the water cold?\nA: The valley water was clear and refreshing.\nB: Valleys are the best in summer.",
     funFact:"계곡 is a top summer destination in Korea. Families and friends flock to 계곡 to escape the heat and enjoy 물놀이 (water play)."},

    {type:"teach", trg:"\uAC1C\uAD6C\uB9AC", src:"frog", pos:"noun", gender:null,
     note:"Pure Korean word. The amphibian.",
     example:"A: \uBD04\uC5D0 \uAC1C\uAD6C\uB9AC \uC18C\uB9AC\uAC00 \uB4E4\uB824\uC694.\nB: \uAC1C\uAD6C\uB9AC\uAC00 \uB178\uB798\uD558\uACE0 \uC788\uB124\uC694.\nA: \uAC1C\uAD6C\uB9AC\uB294 \uC0DD\uD0DC\uACC4\uC5D0 \uC911\uC694\uD574\uC694.\nB: \uD658\uACBD \uC9C0\uD45C \uB3D9\uBB3C\uC774\uC8E0.",
     exampleSrc:"A: I can hear frog sounds in spring.\nB: The frogs are singing.\nA: Frogs are important to the ecosystem.\nB: They are environmental indicator animals.",
     funFact:"The Korean children's song 개구리 (Frog) is one of the most well-known nursery rhymes. 개구리 소년 refers to a famous unsolved case."},

    {type:"teach", trg:"\uAC1C\uBBF8", src:"ant", pos:"noun", gender:null,
     note:"Pure Korean word. The insect.",
     example:"A: \uAC1C\uBBF8\uAC00 \uC74C\uC2DD\uC744 \uB098\uB974\uACE0 \uC788\uC5B4\uC694.\nB: \uAC1C\uBBF8\uB294 \uBD80\uC9C0\uB7F0\uD558\uC8E0.\nA: \uAC1C\uBBF8\uCC98\uB7FC \uD611\uB825\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694.\nB: \uD300\uC6CC\uD06C\uC758 \uC88B\uC740 \uC608\uC8E0.",
     exampleSrc:"A: Ants are carrying food.\nB: Ants are diligent.\nA: It is important to cooperate like ants.\nB: A good example of teamwork.",
     funFact:"The fable of the ant and the grasshopper (개미와 베짱이) is well-known in Korea. Ants symbolize diligence (부지런함)."},

    {type:"teach", trg:"\uAC1C\uB098\uB9AC", src:"forsythia", pos:"noun", gender:null,
     note:"Pure Korean word. Korea's iconic yellow spring flower.",
     example:"A: \uAC1C\uB098\uB9AC\uAC00 \uD540 \uAC83\uC744 \uBCF4\uBA74 \uBD04\uC774\uC5D0\uC694.\nB: \uB178\uB780 \uAF43\uC774 \uC608\uC058\uC8E0.\nA: \uAC1C\uB098\uB9AC\uAC00 \uC6B8\uD0C0\uB9AC \uC55E\uC5D0 \uD540\uC5B4\uC694.\nB: \uBD04\uC774 \uC654\uB124\uC694!",
     exampleSrc:"A: When forsythia blooms, it is spring.\nB: The yellow flowers are beautiful.\nA: Forsythia bloomed in front of the fence.\nB: Spring has arrived!",
     funFact:"개나리 is considered Korea's unofficial spring flower. Its bright yellow blooms are one of the first signs of spring across the peninsula."},

    {type:"teach", trg:"\uACF0", src:"bear", pos:"noun", gender:null,
     note:"Pure Korean word. The animal, also featured in Korea's founding myth.",
     example:"A: \uD55C\uAD6D \uAC74\uAD6D \uC2E0\uD654\uC5D0 \uACF0\uC774 \uB098\uC640\uC694.\nB: \uACF0\uC774 \uC0AC\uB78C\uC774 \uB41C \uC774\uC57C\uAE30\uC8E0?\nA: \uBC18\uB2EC\uACF0\uC740 \uD55C\uAD6D\uC758 \uC0C1\uC9D5\uC774\uC5D0\uC694.\nB: \uC5ED\uC0AC\uC640 \uBB38\uD654\uC5D0 \uC911\uC694\uD55C \uB3D9\uBB3C\uC774\uC8E0.",
     exampleSrc:"A: A bear appears in Korea's founding myth.\nB: The story of a bear becoming human?\nA: The moon bear is a symbol of Korea.\nB: It is an important animal in history and culture.",
     funFact:"In the Dangun myth (단군 신화), a bear and tiger competed. Only the bear (곰) persevered and became human, founding Korea."},

    {type:"teach", trg:"\uACA8\uC6B8\uCCA0", src:"winter season; wintertime", pos:"noun", gender:null,
     note:"Pure Korean compound: winter (겨울) + season (철).",
     example:"A: \uACA8\uC6B8\uCCA0\uC5D0\uB294 \uB09C\uBC29\uBE44\uAC00 \uB9CE\uC774 \uB4E4\uC5B4\uC694.\nB: \uACA8\uC6B8\uCCA0 \uC2A4\uD3EC\uCE20\uB97C \uC88B\uC544\uD574\uC694?\nA: \uACA8\uC6B8\uCCA0\uC5D0\uB294 \uC2A4\uD0A4\uB97C \uD0C0\uC694.\nB: \uACA8\uC6B8\uCCA0\uC758 \uB9E4\uB825\uC774\uC8E0.",
     exampleSrc:"A: Heating costs are high in wintertime.\nB: Do you like winter sports?\nA: I ski in the winter season.\nB: That is the charm of wintertime.",
     funFact:"The suffix -철 means 'season/period': 장마철 (monsoon season), 여름철 (summertime), 휴가철 (vacation season), 이사철 (moving season)."},

    {type:"fb",
     s:"\uBD04\uC5D0 {1}\uAC00 \uD53C\uBA74 \uBD04\uC774 \uC628 \uAC83\uC744 \uC54C \uC218 \uC788\uC5B4\uC694.",
     a:["\uAC1C\uB098\uB9AC"],
     opts:["\uAC1C\uB098\uB9AC","\uAC1C\uAD6C\uB9AC","\uAC1C\uBBF8","\uACF0"],
     hint:"This is a bright yellow flower that is one of the first signs of spring in Korea.",
     sSrc:"When {1} blooms in spring, you know spring has come."},

    {type:"teach", trg:"\uAC00\uB77C\uC559\uB2E4", src:"to sink; to subside; to calm down", pos:"verb", gender:null,
     note:"Pure Korean verb. Sinking or settling down.",
     example:"A: \uBC30\uAC00 \uAC00\uB77C\uC559\uACE0 \uC788\uC5B4\uC694!\nB: \uAD6C\uBA85\uBCF4\uD2B8\uB97C \uD0C0\uC138\uC694!\nA: \uBD84\uB178\uAC00 \uAC00\uB77C\uC549\uC558\uC5B4\uC694.\nB: \uB9C8\uC74C\uC774 \uD3B8\uC548\uD574\uC84C\uC5B4\uC694?",
     exampleSrc:"A: The ship is sinking!\nB: Get on the lifeboat!\nA: The anger subsided.\nB: Are you feeling calmer now?",
     funFact:"가라앉다 works for both physical sinking (배가 가라앉다) and emotional calming (마음이 가라앉다). Very versatile."},

    {type:"teach", trg:"\uAE4A\uC219\uC774", src:"deeply; deep inside", pos:"adv", gender:null,
     note:"Pure Korean adverb: deep (깊) + inside (숙이).\nFar into the interior of something.",
     example:"A: \uC232 \uAE4A\uC219\uC774 \uB4E4\uC5B4\uAC14\uC5B4\uC694.\nB: \uC704\uD5D8\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694?\nA: \uB9C8\uC74C \uAE4A\uC219\uC774 \uAC04\uC9C1\uD55C \uBBFC\uC74C\uC774\uC5D0\uC694.\nB: \uC5B8\uC820\uAC00 \uD574\uACB0\uB420 \uAC70\uC608\uC694.",
     exampleSrc:"A: I went deep into the forest.\nB: Was it not dangerous?\nA: It is a belief held deep in my heart.\nB: It will be resolved someday.",
     funFact:"깊숙이 is an intensified form of 깊이 (deeply). Adding 숙 emphasizes going far into the interior. Common in literary Korean."},

    {type:"teach", trg:"\uACE1\uC2DD", src:"grain; cereal crops", pos:"noun", gender:null,
     note:"Sino-Korean: grain (穀) + food (食).\nStaple food grains like rice and barley.",
     example:"A: \uACE1\uC2DD\uC744 \uC218\uD655\uD588\uC5B4\uC694.\nB: \uC62C\uD574 \uC218\uD655\uB7C9\uC774 \uC88B\uC544\uC694?\nA: \uACE1\uC2DD \uAC00\uACA9\uC774 \uC62C\uB790\uC5B4\uC694.\nB: \uAC00\uBB44 \uB54C\uBB38\uC77C\uAE4C\uC694?",
     exampleSrc:"A: The grain has been harvested.\nB: Is the harvest good this year?\nA: Grain prices have risen.\nB: Could it be because of the drought?",
     funFact:"곡식 includes rice (쌀), barley (보리), wheat (밀), and other grains. 오곡 (five grains) is a traditional concept in Korean agriculture."},

    {type:"teach", trg:"\uAC00\uB9CC", src:"still; quietly; without moving", pos:"adv", gender:null,
     note:"Pure Korean adverb. Staying still and quiet.",
     example:"A: \uAC00\uB9CC\uD788 \uC788\uC73C\uC138\uC694.\nB: \uC65C \uC6C0\uC9C1\uC774\uBA74 \uC548 \uB3FC\uC694?\nA: \uAC00\uB9CC\uD788 \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.\nB: \uC870\uC6A9\uD788 \uC0DD\uAC01\uD574 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: Please stay still.\nB: Why should I not move?\nA: Think quietly about it.\nB: I will think about it calmly.",
     funFact:"가만 is often reduplicated: 가만가만 (very quietly, very gently). The command 가만히 있어! means 'Stay still!' or 'Hold on!'"},

    {type:"teach", trg:"\uAC00\uB9CC\uC788\uB2E4", src:"to stay still; to remain quiet", pos:"verb", gender:null,
     note:"Pure Korean compound: still (가만) + exist (있다).\nTo not move or act.",
     example:"A: \uAC00\uB9CC\uC788\uC744 \uC218\uAC00 \uC5C6\uC5B4\uC694.\nB: \uBB34\uC2A8 \uC77C\uC774\uC5D0\uC694?\nA: \uBD88\uC758\uB97C \uBCF4\uACE0 \uAC00\uB9CC\uC788\uC744 \uC218 \uC5C6\uC5B4\uC694.\nB: \uC6A9\uAE30 \uC788\uB124\uC694.",
     exampleSrc:"A: I cannot just stay still.\nB: What happened?\nA: I cannot remain quiet when I see injustice.\nB: That is courageous.",
     funFact:"가만있다 in the negative (가만있을 수 없다: I cannot just stand by) expresses moral urgency. It is a common phrase in Korean social discourse."},

    {type:"teach", trg:"\uAC07\uD788\uB2E4", src:"to be trapped; to be confined", pos:"verb", gender:null,
     note:"Pure Korean passive verb from 가두다 (to lock up).\nBeing enclosed against one's will.",
     example:"A: \uC5D8\uB9AC\uBCA0\uC774\uD130\uC5D0 \uAC07\uD614\uC5B4\uC694.\nB: \uAD6C\uC870\uB300\uB97C \uBD80\uB974\uC138\uC694.\nA: \uD3B8\uACAC\uC5D0 \uAC07\uD788\uBA74 \uC548 \uB3FC\uC694.\nB: \uC5F4\uB9B0 \uB9C8\uC74C\uC774 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: I was trapped in the elevator.\nB: Call the rescue team.\nA: We should not be trapped by prejudice.\nB: An open mind is needed.",
     funFact:"갇히다 is the passive of 가두다 (to confine). Like 감추다/감춰지다, Korean has systematic active-passive verb pairs."},

    {type:"teach", trg:"\uAC00\uB839", src:"for example; for instance; suppose", pos:"adv", gender:null,
     note:"Sino-Korean: false/suppose (假) + command (令).\nIntroducing hypothetical examples.",
     example:"A: \uAC00\uB839 \uBE44\uAC00 \uC624\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC694?\nB: \uC2E4\uB0B4\uC5D0\uC11C \uD560 \uC218 \uC788\uC5B4\uC694.\nA: \uAC00\uB839 \uC608\uB97C \uB4E4\uBA74 \uC774\uD574\uD558\uAE30 \uC26C\uC6CC\uC694.\nB: \uAD6C\uCCB4\uC801\uC778 \uC608\uB97C \uB4E4\uC5B4 \uC8FC\uC138\uC694.",
     exampleSrc:"A: Suppose it rains, what do we do?\nB: We can do it indoors.\nA: Giving examples makes it easier to understand.\nB: Please give specific examples.",
     funFact:"가령 is more formal than 예를 들면 (for example). It is common in academic writing and TOPIK essays for introducing hypotheticals."},

    {type:"teach", trg:"\uADF8\uC800", src:"just; merely; simply", pos:"adv", gender:null,
     note:"Pure Korean adverb. Expressing something simple or without special reason.",
     example:"A: \uC65C \uC804\uD654\uD588\uC5B4\uC694?\nB: \uADF8\uC800 \uBAA9\uC18C\uB9AC\uAC00 \uB4E3\uACE0 \uC2F6\uC5C8\uC5B4\uC694.\nA: \uADF8\uC800 \uADF8\uB7F0 \uAC70\uC608\uC694.\nB: \uADF8\uC800 \uACE0\uB9C8\uC6CC\uC694.",
     exampleSrc:"A: Why did you call?\nB: I just wanted to hear your voice.\nA: It is just that, nothing special.\nB: I am simply grateful.",
     funFact:"그저 conveys modesty and simplicity. 그저 그렇다 (so-so) is one of the most common Korean responses to 'How are you?'"},

    {type:"teach", trg:"\uADF8\uD1A0\uB85D", src:"so much; to that extent", pos:"adv", gender:null,
     note:"Pure Korean adverb. Emphasizing a high degree.",
     example:"A: \uADF8\uD1A0\uB85D \uBCF4\uACE0 \uC2F6\uC5C8\uC5B4\uC694.\nB: \uC800\uB3C4 \uADF8\uD1A0\uB85D \uBCF4\uACE0 \uC2F6\uC5C8\uC5B4\uC694.\nA: \uADF8\uD1A0\uB85D \uC5F4\uC2EC\uD788 \uD558\uB354\uB2C8 \uC131\uACF5\uD588\uC5B4\uC694.\nB: \uB178\uB825\uC758 \uACB0\uACFC\uC8E0.",
     exampleSrc:"A: I missed you so much.\nB: I missed you that much too.\nA: You worked so hard that you succeeded.\nB: It is the result of effort.",
     funFact:"그토록 is literary and emotional. It appears frequently in Korean poetry and song lyrics to express depth of feeling."},

    {type:"mc",
     q:"\uD55C\uAD6D \uAC74\uAD6D \uC2E0\uD654\uC5D0 \uB098\uC624\uB294 \uB3D9\uBB3C\uC740?",
     opts:["\uACF0","\uAC1C\uAD6C\uB9AC","\uAC1C\uBBF8","\uACE4\uCDA9"],
     ans:"\uACF0",
     hint:"This animal competed with a tiger and succeeded in becoming human in the Dangun founding myth."},

    {type:"match", pairs:[
      {trg:"\uAC00\uBB84", src:"drought"},
      {trg:"\uAE30\uD6C4", src:"climate"},
      {trg:"\uACF5\uD574", src:"pollution"},
      {trg:"\uACC4\uACE1", src:"valley"},
      {trg:"\uAC1C\uB098\uB9AC", src:"forsythia"},
      {trg:"\uACE1\uC2DD", src:"grain"}
    ]}
  ]
};
export default LESSON_14;
