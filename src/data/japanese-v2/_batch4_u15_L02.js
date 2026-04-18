// Batch 4 — Unit 15 Lesson 2: Giving & Following Directions
const BATCH4_L_2 = {
  id:"jav2_u15l_b4_2", title:"道案内(みちあんない)", icon:"🗺️", xp:15, board:true,
  steps:[
    {type:"intro", title:"道案内(みちあんない)",
     desc:"Learn to give and understand detailed directions. Since Japanese addresses rarely use street names, direction-giving is a vital communication skill.",
     goals:["Give step-by-step directions","Understand landmark-based navigation","Use distance and time estimates"]},

    {type:"teach", trg:"信号(しんごう)", src:"traffic light / signal", pos:"noun", gender:null,
     note:"Kanji: 信号. Trust + signal. Traffic signals at intersections.",
     example:"次(つぎ)の信号(しんごう)を右(みぎ)に曲(ま)がってください。",
     exampleSrc:"Turn right at the next traffic light.",
     funFact:"Japanese traffic lights are called 青信号 (blue signal) for green, not 緑信号 (green signal). This reflects the ancient Japanese color system where blue (ao) included green shades. Technically they are green, but everyone calls them blue."},

    {type:"teach", trg:"交差点(こうさてん)", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"Kanji: 交差点. Cross + differ + point.",
     example:"交差点(こうさてん)を渡(わた)ってまっすぐ行(い)ってください。",
     exampleSrc:"Cross the intersection and go straight.",
     funFact:"Major Tokyo intersections have names (Shibuya Crossing, Roppongi Crossing) because streets themselves often do not. Navigation in Japan is intersection-based rather than street-based, a fundamental difference from Western cities."},

    {type:"teach", trg:"横断歩道(おうだんほどう)", src:"crosswalk / pedestrian crossing", pos:"noun", gender:null,
     note:"Kanji: 横断歩道. Cross + walk + road. Zebra crossing.",
     example:"横断歩道(おうだんほどう)を渡(わた)りましょう。",
     exampleSrc:"Let's cross at the crosswalk.",
     funFact:"Japanese crosswalks play melodies when the light is green for pedestrians. Each intersection has its own tune. Shibuya's famous scramble crossing allows pedestrians to cross in all directions simultaneously, handling 2,500 people per signal change."},

    {type:"teach", trg:"通(とお)り", src:"street / avenue", pos:"noun", gender:null,
     note:"Kanji: 通り. From 通(とお)る (to pass through). A road you travel along.",
     example:"この通(とお)りをまっすぐ行(い)ってください。",
     exampleSrc:"Go straight along this street.",
     funFact:"While most Japanese streets have no names, major boulevards do: 明治通り (Meiji-dori), 表参道 (Omotesando). The suffix -dori or -toori means 'avenue/street.' These named streets are crucial navigation landmarks."},

    {type:"teach", trg:"橋(はし)", src:"bridge", pos:"noun", gender:null,
     note:"Kanji: 橋. Different from 端(はし) (edge) and 箸(はし) (chopsticks).",
     example:"橋(はし)を渡(わた)って左(ひだり)に曲(ま)がってください。",
     exampleSrc:"Cross the bridge and turn left.",
     funFact:"The three homophones hashi (bridge 橋, edge 端, chopsticks 箸) are distinguished by pitch accent. Bridge has a falling pitch, edge has a flat pitch, and chopsticks have a rising pitch. This is a classic example used in Japanese linguistics classes."},

    {type:"teach", trg:"目印(めじるし)", src:"landmark / sign to look for", pos:"noun", gender:null,
     note:"Kanji: 目印. Eye + mark. A visual reference point for navigation.",
     example:"赤(あか)い建物(たてもの)が目印(めじるし)です。",
     exampleSrc:"The red building is the landmark.",
     funFact:"Since addresses are confusing, Japanese people always give directions using mejirushi (landmarks). 'After the convenience store, before the shrine, next to the red post box.' This landmark-based navigation is an essential life skill."},

    {type:"teach", trg:"突(つ)き当(あ)たり", src:"dead end / T-junction", pos:"noun", gender:null,
     note:"Kanji: 突き当たり. Bump into + the end.",
     example:"突(つ)き当(あ)たりを左(ひだり)に曲(ま)がってください。",
     exampleSrc:"Turn left at the dead end.",
     funFact:"Tsukiatari is one of the most useful direction words. Japanese residential areas have many narrow streets that end in T-junctions. 'Go to the end of the road and turn' is a direction pattern you will hear constantly."},

    {type:"teach", trg:"近道(ちかみち)", src:"shortcut", pos:"noun", gender:null,
     note:"Kanji: 近道. Near + road. A shorter route to your destination.",
     example:"近道(ちかみち)を教(おし)えましょうか？",
     exampleSrc:"Shall I show you a shortcut?",
     funFact:"Japan's narrow alleys (路地 roji) often provide shortcuts that save significant time. Local residents know these hidden paths through residential areas. GPS apps sometimes miss these shortcuts that only locals know."},

    {type:"teach", trg:"遠回(とおまわ)り", src:"detour / the long way around", pos:"noun", gender:null,
     note:"Kanji: 遠回り. Far + go around. The opposite of 近道(ちかみち).",
     example:"工事中(こうじちゅう)で遠回(とおまわ)りしなければなりません。",
     exampleSrc:"We have to take a detour because of construction.",
     funFact:"Toomawari is also used figuratively for 'going about things the long way.' 遠回りな言い方 (toomawari na iikata) means 'roundabout way of saying something,' describing the indirect communication style Japanese culture often favors."},

    {type:"teach", trg:"北(きた)", src:"north", pos:"noun", gender:null,
     note:"Kanji: 北. One of the four cardinal directions.",
     example:"駅(えき)の北口(きたぐち)から出(で)てください。",
     exampleSrc:"Please exit from the north exit of the station.",
     funFact:"Japanese stations often have North Exit (北口) and South Exit (南口). These are crucial for navigation. Meeting someone at 'the wrong exit' of a large station like Shinjuku means a 15-minute walk to find them."},

    {type:"teach", trg:"南(みなみ)", src:"south", pos:"noun", gender:null,
     note:"Kanji: 南. The direction of warmth and sunlight.",
     example:"南口(みなみぐち)にタクシー乗(の)り場(ば)があります。",
     exampleSrc:"There is a taxi stand at the south exit.",
     funFact:"South-facing apartments (南向き) in Japan command premium rents because they get the most sunlight. Real estate listings always mention the direction the windows face. 南向き is the most desirable orientation."},

    {type:"teach", trg:"東(ひがし)", src:"east", pos:"noun", gender:null,
     note:"Kanji: 東. The direction of the rising sun. As in 東京(とうきょう).",
     example:"東(ひがし)に向(む)かって歩(ある)いてください。",
     exampleSrc:"Walk toward the east.",
     funFact:"東京 (Tokyo) literally means 'eastern capital.' Japan is called 日本 (origin of the sun) because it lies to the east of China, where the sun rises. The east direction carries symbolic importance in Japanese culture."},

    {type:"teach", trg:"西(にし)", src:"west", pos:"noun", gender:null,
     note:"Kanji: 西. The direction of the setting sun.",
     example:"西口(にしぐち)で待(ま)ち合(あ)わせしましょう。",
     exampleSrc:"Let's meet at the west exit.",
     funFact:"西 appears in 関西 (Kansai, western Japan region including Osaka and Kyoto) and 西洋 (seiyou, the West/Western world). The east-west divide between Tokyo (関東) and Osaka (関西) culture is one of Japan's most famous cultural rivalries."},

    {type:"teach", trg:"地図(ちず)", src:"map", pos:"noun", gender:null,
     note:"Kanji: 地図. Earth + diagram. Essential for navigation.",
     example:"地図(ちず)を見(み)せてもらえますか？",
     exampleSrc:"Could you show me a map?",
     funFact:"Japanese maps sometimes place north to the right or have the current location at the bottom. Station area maps are rotated so 'up' matches the direction you are facing. Google Maps revolutionized Japan because its address system is so confusing."},

    {type:"mc", q:"Japanese traffic lights' green is called:",
     opts:["blue (あお)","green (みどり)","yellow (きいろ)","white (しろ)"], ans:"blue (あお)",
     hint:"An ancient color tradition where green was considered a shade of another color."},

    {type:"fb", s:"次(つぎ)の{1}を右(みぎ)に曲(ま)がってください。", a:"信号(しんごう)",
     sSrc:"Turn right at the next traffic light.",
     opts:["信号(しんごう)","交差点(こうさてん)","橋(はし)","突(つ)き当(あ)たり"],
     hint:"The colored light device at intersections controlling traffic flow."},

    {type:"match", pairs:[
      {trg:"北(きた)", src:"north"},
      {trg:"南(みなみ)", src:"south"},
      {trg:"東(ひがし)", src:"east"},
      {trg:"西(にし)", src:"west"}
    ]},

    {type:"mc", q:"目印(めじるし) means:",
     opts:["landmark / visual reference point","road sign","address","compass"], ans:"landmark / visual reference point",
     hint:"Something you look for visually to know you are in the right place."},

    {type:"fb", s:"{1}を教(おし)えましょうか？", a:"近道(ちかみち)",
     sSrc:"Shall I show you a shortcut?",
     opts:["近道(ちかみち)","遠回(とおまわ)り","目印(めじるし)","地図(ちず)"],
     hint:"A shorter, faster route to reach your destination."},

    {type:"mc", q:"東京(とうきょう) literally means:",
     opts:["eastern capital","great city","sun origin","peace capital"], ans:"eastern capital",
     hint:"The kanji combine 'east' with 'c.../metropolis.'"},

    {type:"mc", q:"What is an 横断歩道(おうだんほどう)?",
     opts:["crosswalk","overpass","tunnel","sidewalk"], ans:"crosswalk",
     hint:"The striped area where pedestrians cross a road at an intersection."}
  ,{type:"match",pairs:[{trg:"交差点(こうさてん)",src:"intersection / crossroads"},{trg:"横断歩道(おうだんほどう)",src:"crosswalk / pedestrian crossing"},{trg:"通(とお)り",src:"street / avenue"},{trg:"橋(はし)",src:"bridge"},{trg:"目印(めじるし)",src:"landmark / sign to look for"},{trg:"突(つ)き当(あ)たり",src:"dead end / T-junction"}]},{type:"match",pairs:[{trg:"遠回(とおまわ)り",src:"detour / the long way around"},{trg:"地図(ちず)",src:"map"}]}]
};
export default BATCH4_L_2;
