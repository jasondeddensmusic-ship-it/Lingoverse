// Batch 4 — Unit 08 Lesson 2: Position Words & Prepositions
const BATCH4_L_2 = {
  id:"jav2_u08l_b4_2", title:"位置(いち)と方向(ほうこう)", icon:"🧭", xp:15, board:true,
  steps:[
    {type:"intro", title:"位置(いち)の言葉(ことば)",
     desc:"Learn more position and direction words. Japanese uses nouns for spatial concepts, not prepositions like English.",
     goals:["Use position nouns with の particle","Describe where objects are precisely","Give spatial directions"]},

    {type:"teach", trg:"隣(となり)", src:"next to / beside", pos:"noun", gender:null,
     note:"For things right next to each other, touching or very close.",
     example:"銀行(ぎんこう)の隣(となり)にコンビニがあります。",
     exampleSrc:"There is a convenience store next to the bank.",
     funFact:"Tonari no Totoro (My Neighbor Totoro) uses this word in its title. 隣の (next door's/neighboring) is one of the most common position phrases in daily Japanese conversation."},

    {type:"teach", trg:"向(む)かい", src:"across from / opposite", pos:"noun", gender:null,
     note:"From 向(む)く (to face). Directly across.",
     example:"駅(えき)の向(む)かいにホテルがあります。",
     exampleSrc:"There is a hotel across from the station.",
     funFact:"Mukai implies directly facing each other. Japanese addresses do not use street names (most streets have no names). Instead, locations are described relative to landmarks: 'across from the station, next to the post office.'"},

    {type:"teach", trg:"近(ちか)く", src:"nearby / in the vicinity", pos:"noun", gender:null,
     note:"From 近(ちか)い (near). Used as a noun meaning 'the area nearby.'",
     example:"この近(ちか)くにレストランはありますか？",
     exampleSrc:"Is there a restaurant nearby?",
     funFact:"'Kono chikaku ni' is one of the most useful phrases for tourists. Japanese people are famously helpful with directions and may even walk you to your destination rather than just pointing the way."},

    {type:"teach", trg:"周(まわ)り", src:"around / surroundings", pos:"noun", gender:null,
     note:"From 周(まわ)る (to go around). The area encircling something.",
     example:"駅(えき)の周(まわ)りにはお店(みせ)がたくさんあります。",
     exampleSrc:"There are many shops around the station.",
     funFact:"Mawari describes the zone surrounding a point. Japanese train stations are always surrounded by commercial areas (駅前 ekimae, station-front). This is why Japanese cities grow around train stations rather than along highways."},

    {type:"teach", trg:"奥(おく)", src:"the back / deep inside", pos:"noun", gender:null,
     note:"The interior, far end. Also means 'depth.'",
     example:"レストランの奥(おく)に座(すわ)りました。",
     exampleSrc:"I sat in the back of the restaurant.",
     funFact:"Oku carries a sense of depth and intimacy. 奥さん (oku-san, wife) literally means 'the person in the inner part of the house.' The word reflects the traditional arrangement where the wife managed the household interior."},

    {type:"teach", trg:"手前(てまえ)", src:"this side of / in front of (closer)", pos:"noun", gender:null,
     note:"Hand + front. On the speaker's side of a reference point.",
     example:"交差点(こうさてん)の手前(てまえ)に止(と)めてください。",
     exampleSrc:"Please stop just before the intersection.",
     funFact:"Temae also means 'humility' in tea ceremony language (お手前). It literally positions you as being 'on the closer, lesser side.' This spatial word became a humility expression, showing how Japanese space and hierarchy connect."},

    {type:"teach", trg:"間(あいだ)", src:"between / interval", pos:"noun", gender:null,
     note:"Between two things in space or time.",
     example:"銀行(ぎんこう)と郵便局(ゆうびんきょく)の間(あいだ)にカフェがあります。",
     exampleSrc:"There is a cafe between the bank and the post office.",
     funFact:"間 is one of the most philosophical kanji in Japanese. It means between, space, interval, and room (as in 部屋 = 間). In architecture, 'ma' (間) is the concept of meaningful empty space, central to Japanese aesthetics."},

    {type:"teach", trg:"端(はし)", src:"edge / end / bridge", pos:"noun", gender:null,
     note:"端 (edge/end) and 橋 (bridge) are different kanji but same sound.",
     example:"机(つくえ)の端(はし)に置(お)いてください。",
     exampleSrc:"Please put it on the edge of the desk.",
     funFact:"Hashi has three meanings with different kanji: 端 (edge), 橋 (bridge), and 箸 (chopsticks). The pitch accent distinguishes them in speech. This is why Japanese is called a pitch-accent language."},

    {type:"teach", trg:"隅(すみ)", src:"corner", pos:"noun", gender:null,
     note:"An inside corner of a room or space.",
     example:"部屋(へや)の隅(すみ)に本棚(ほんだな)があります。",
     exampleSrc:"There is a bookshelf in the corner of the room.",
     funFact:"Sumi (corner) and kado (角, outside corner) describe different types of corners. Sumi is the inside concave corner, kado is the outside convex corner. Japanese spatial vocabulary distinguishes between these with precision."},

    {type:"teach", trg:"真(ま)ん中(なか)", src:"center / middle", pos:"noun", gender:null,
     note:"True + middle. The exact center.",
     example:"町(まち)の真(ま)ん中(なか)に公園(こうえん)があります。",
     exampleSrc:"There is a park in the center of town.",
     funFact:"Man-naka uses 真 (true/real) to emphasize the exact center. Without 真, naka just means 'inside.' The distinction between 'in the middle' and 'inside' is important for precise Japanese spatial descriptions."},

    {type:"teach", trg:"こちら", src:"this way / this direction (polite)", pos:"pron", gender:null,
     note:"Polite form of こっち. Part of the ko-so-a-do direction system.",
     example:"こちらへどうぞ。",
     exampleSrc:"This way, please.",
     funFact:"Kochira is the polite directional demonstrative. Restaurant staff say こちらへどうぞ (this way please) when seating you. It also means 'this person here' when introducing someone politely."},

    {type:"teach", trg:"まっすぐ", src:"straight ahead", pos:"adv", gender:null,
     note:"Written 真(ま)っ直(す)ぐ. Doubled 真 emphasizes straightness.",
     example:"まっすぐ行(い)ってください。",
     exampleSrc:"Please go straight ahead.",
     funFact:"Massugu is one of the first direction words tourists learn. Japanese giving directions often physically point and walk with you for a few steps. The gesture-plus-word combination is a hallmark of Japanese direction-giving."},

    {type:"teach", trg:"突(つ)き当(あ)たり", src:"dead end / the end of a road", pos:"noun", gender:null,
     note:"Hit + end. Where a road stops.",
     example:"突(つ)き当(あ)たりを右(みぎ)に曲(ま)がってください。",
     exampleSrc:"Turn right at the dead end.",
     funFact:"Tsukiatari literally means 'the place where you bump into the end.' Japanese directions often use landmark-based instructions: 'go until the dead end, turn right at the convenience store, it is across from the shrine.'"},

    {type:"teach", trg:"角(かど)", src:"(outside) corner / street corner", pos:"noun", gender:null,
     note:"An outside corner where two streets meet.",
     example:"次(つぎ)の角(かど)を左(ひだり)に曲(ま)がってください。",
     exampleSrc:"Turn left at the next corner.",
     funFact:"角 also means 'horn' (like an animal's horn), which makes sense because an outside corner juts out like a horn. Street corners in Japanese directions are described with 'magaru' (to turn) rather than 'at the corner.'"},

    {type:"mc", q:"What does 隣(となり) mean?",
     opts:["next to / beside","across from","behind","above"], ans:"next to / beside",
     hint:"Directly adjacent, very close or touching. Like neighbors."},

    {type:"fb", s:"駅(えき)の{1}にホテルがあります。", a:"向(む)かい",
     sSrc:"There is a hotel across from the station.",
     opts:["向(む)かい","隣(となり)","近(ちか)く","奥(おく)"],
     hint:"Directly facing something from the other side."},

    {type:"match", pairs:[
      {trg:"真(ま)ん中(なか)", src:"center"},
      {trg:"隅(すみ)", src:"corner (inside)"},
      {trg:"奥(おく)", src:"the back / deep inside"},
      {trg:"間(あいだ)", src:"between"}
    ]},

    {type:"mc", q:"まっすぐ means:",
     opts:["straight ahead","turn left","turn right","go back"], ans:"straight ahead",
     hint:"The direction where you do not turn at all."},

    {type:"fb", s:"{1}を右(みぎ)に曲(ま)がってください。", a:"突(つ)き当(あ)たり",
     sSrc:"Turn right at the dead end.",
     opts:["突(つ)き当(あ)たり","角(かど)","隣(となり)","真(ま)ん中(なか)"],
     hint:"The point where a road ends and you cannot go further."},

    {type:"mc", q:"What is the difference between 隅(すみ) and 角(かど)?",
     opts:["sumi is inside corner, kado is outside corner","they are the same","sumi is bigger","kado is indoors only"], ans:"sumi is inside corner, kado is outside corner",
     hint:"One is concave (i... a room), the other convex (street intersection)."},

    {type:"mc", q:"こちらへどうぞ means:",
     opts:["this way please","that way please","go straight","turn around"], ans:"this way please",
     hint:"A polite invitation to follow someone in this direction."}
  ,{type:"match",pairs:[{trg:"隣(となり)",src:"next to / beside"},{trg:"近(ちか)く",src:"nearby / in the vicinity"},{trg:"周(まわ)り",src:"around / surroundings"},{trg:"手前(てまえ)",src:"this side of / in front of (closer)"},{trg:"端(はし)",src:"edge / end / bridge"},{trg:"こちら",src:"this way / this direction (polite)"}]},{type:"match",pairs:[{trg:"まっすぐ",src:"straight ahead"},{trg:"角(かど)",src:"(outside) corner / street corner"}]}]
};
export default BATCH4_L_2;
