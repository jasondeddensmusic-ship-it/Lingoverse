// Batch 4 — Unit 15 Lesson 2: Giving & Following Directions
const BATCH4_L_2 = {
  id:"jav2_u15l_b4_2", title:"みちあんない", icon:"🗺️", xp:15, board:true,
  steps:[
    {type:"intro", title:"みちあんない",
     desc:"Learn to give and understand detailed directions. Since Japanese addresses rarely use street names, direction-giving is a vital communication skill.",
     goals:["Give step-by-step directions","Understand landmark-based navigation","Use distance and time estimates"]},

    {type:"teach", trg:"しんごう", src:"traffic light / signal", pos:"noun", gender:null,
     note:"Kanji: 信号. Trust + signal. Traffic signals at intersections.",
     example:"つぎのしんごうをみぎにまがってください。",
     exampleSrc:"Turn right at the next traffic light.",
     funFact:"Japanese traffic lights are called 青信号 (blue signal) for green, not 緑信号 (green signal). This reflects the ancient Japanese color system where blue (ao) included green shades. Technically they are green, but everyone calls them blue."},

    {type:"teach", trg:"こうさてん", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"Kanji: 交差点. Cross + differ + point.",
     example:"こうさてんをわたってまっすぐいってください。",
     exampleSrc:"Cross the intersection and go straight.",
     funFact:"Major Tokyo intersections have names (Shibuya Crossing, Roppongi Crossing) because streets themselves often do not. Navigation in Japan is intersection-based rather than street-based, a fundamental difference from Western cities."},

    {type:"teach", trg:"おうだんほどう", src:"crosswalk / pedestrian crossing", pos:"noun", gender:null,
     note:"Kanji: 横断歩道. Cross + walk + road. Zebra crossing.",
     example:"おうだんほどうをわたりましょう。",
     exampleSrc:"Let's cross at the crosswalk.",
     funFact:"Japanese crosswalks play melodies when the light is green for pedestrians. Each intersection has its own tune. Shibuya's famous scramble crossing allows pedestrians to cross in all directions simultaneously, handling 2,500 people per signal change."},

    {type:"teach", trg:"とおり", src:"street / avenue", pos:"noun", gender:null,
     note:"Kanji: 通り. From とおる (to pass through). A road you travel along.",
     example:"このとおりをまっすぐいってください。",
     exampleSrc:"Go straight along this street.",
     funFact:"While most Japanese streets have no names, major boulevards do: 明治通り (Meiji-dori), 表参道 (Omotesando). The suffix -dori or -toori means 'avenue/street.' These named streets are crucial navigation landmarks."},

    {type:"teach", trg:"はし", src:"bridge", pos:"noun", gender:null,
     note:"Kanji: 橋. Different from 端 (edge) and 箸 (chopsticks).",
     example:"はしをわたってひだりにまがってください。",
     exampleSrc:"Cross the bridge and turn left.",
     funFact:"The three homophones hashi (bridge 橋, edge 端, chopsticks 箸) are distinguished by pitch accent. Bridge has a falling pitch, edge has a flat pitch, and chopsticks have a rising pitch. This is a classic example used in Japanese linguistics classes."},

    {type:"teach", trg:"めじるし", src:"landmark / sign to look for", pos:"noun", gender:null,
     note:"Kanji: 目印. Eye + mark. A visual reference point for navigation.",
     example:"あかいたてものがめじるしです。",
     exampleSrc:"The red building is the landmark.",
     funFact:"Since addresses are confusing, Japanese people always give directions using mejirushi (landmarks). 'After the convenience store, before the shrine, next to the red post box.' This landmark-based navigation is an essential life skill."},

    {type:"teach", trg:"つきあたり", src:"dead end / T-junction", pos:"noun", gender:null,
     note:"Kanji: 突き当たり. Bump into + the end.",
     example:"つきあたりをひだりにまがってください。",
     exampleSrc:"Turn left at the dead end.",
     funFact:"Tsukiatari is one of the most useful direction words. Japanese residential areas have many narrow streets that end in T-junctions. 'Go to the end of the road and turn' is a direction pattern you will hear constantly."},

    {type:"teach", trg:"ちかみち", src:"shortcut", pos:"noun", gender:null,
     note:"Kanji: 近道. Near + road. A shorter route to your destination.",
     example:"ちかみちをおしえましょうか？",
     exampleSrc:"Shall I show you a shortcut?",
     funFact:"Japan's narrow alleys (路地 roji) often provide shortcuts that save significant time. Local residents know these hidden paths through residential areas. GPS apps sometimes miss these shortcuts that only locals know."},

    {type:"teach", trg:"とおまわり", src:"detour / the long way around", pos:"noun", gender:null,
     note:"Kanji: 遠回り. Far + go around. The opposite of ちかみち.",
     example:"こうじちゅうでとおまわりしなければなりません。",
     exampleSrc:"We have to take a detour because of construction.",
     funFact:"Toomawari is also used figuratively for 'going about things the long way.' 遠回りな言い方 (toomawari na iikata) means 'roundabout way of saying something,' describing the indirect communication style Japanese culture often favors."},

    {type:"teach", trg:"きた", src:"north", pos:"noun", gender:null,
     note:"Kanji: 北. One of the four cardinal directions.",
     example:"えきのきたぐちからでてください。",
     exampleSrc:"Please exit from the north exit of the station.",
     funFact:"Japanese stations often have North Exit (北口) and South Exit (南口). These are crucial for navigation. Meeting someone at 'the wrong exit' of a large station like Shinjuku means a 15-minute walk to find them."},

    {type:"teach", trg:"みなみ", src:"south", pos:"noun", gender:null,
     note:"Kanji: 南. The direction of warmth and sunlight.",
     example:"みなみぐちにタクシーのりばがあります。",
     exampleSrc:"There is a taxi stand at the south exit.",
     funFact:"South-facing apartments (南向き) in Japan command premium rents because they get the most sunlight. Real estate listings always mention the direction the windows face. 南向き is the most desirable orientation."},

    {type:"teach", trg:"ひがし", src:"east", pos:"noun", gender:null,
     note:"Kanji: 東. The direction of the rising sun. As in とうきょう (東京).",
     example:"ひがしにむかってあるいてください。",
     exampleSrc:"Walk toward the east.",
     funFact:"東京 (Tokyo) literally means 'eastern capital.' Japan is called 日本 (origin of the sun) because it lies to the east of China, where the sun rises. The east direction carries symbolic importance in Japanese culture."},

    {type:"teach", trg:"にし", src:"west", pos:"noun", gender:null,
     note:"Kanji: 西. The direction of the setting sun.",
     example:"にしぐちでまちあわせしましょう。",
     exampleSrc:"Let's meet at the west exit.",
     funFact:"西 appears in 関西 (Kansai, western Japan region including Osaka and Kyoto) and 西洋 (seiyou, the West/Western world). The east-west divide between Tokyo (関東) and Osaka (関西) culture is one of Japan's most famous cultural rivalries."},

    {type:"teach", trg:"ちず", src:"map", pos:"noun", gender:null,
     note:"Kanji: 地図. Earth + diagram. Essential for navigation.",
     example:"ちずをみせてもらえますか？",
     exampleSrc:"Could you show me a map?",
     funFact:"Japanese maps sometimes place north to the right or have the current location at the bottom. Station area maps are rotated so 'up' matches the direction you are facing. Google Maps revolutionized Japan because its address system is so confusing."},

    {type:"mc", q:"Japanese traffic lights' green is called:",
     opts:["blue (あお)","green (みどり)","yellow (きいろ)","white (しろ)"], ans:"blue (あお)",
     hint:"An ancient color tradition where green was considered a shade of another color."},

    {type:"fb", s:"つぎの{1}をみぎにまがってください。", a:"しんごう",
     sSrc:"Turn right at the next traffic light.",
     opts:["しんごう","こうさてん","はし","つきあたり"],
     hint:"The colored light device at intersections controlling traffic flow."},

    {type:"match", pairs:[
      {trg:"きた", src:"north"},
      {trg:"みなみ", src:"south"},
      {trg:"ひがし", src:"east"},
      {trg:"にし", src:"west"}
    ]},

    {type:"mc", q:"めじるし means:",
     opts:["landmark / visual reference point","road sign","address","compass"], ans:"landmark / visual reference point",
     hint:"Something you look for visually to know you are in the right place."},

    {type:"fb", s:"{1}をおしえましょうか？", a:"ちかみち",
     sSrc:"Shall I show you a shortcut?",
     opts:["ちかみち","とおまわり","めじるし","ちず"],
     hint:"A shorter, faster route to reach your destination."},

    {type:"mc", q:"東京 literally means:",
     opts:["eastern capital","great city","sun origin","peace capital"], ans:"eastern capital",
     hint:"The kanji combine 'east' with 'c.../metropolis.'"},

    {type:"mc", q:"What is an おうだんほどう?",
     opts:["crosswalk","overpass","tunnel","sidewalk"], ans:"crosswalk",
     hint:"The striped area where pedestrians cross a road at an intersection."}
  ]
};
export default BATCH4_L_2;
