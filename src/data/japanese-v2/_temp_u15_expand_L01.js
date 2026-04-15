// Unit 15 Expansion L3 — Detailed Navigation
// Complex directions, landmarks, asking for help.

const LESSON_3 = {id:"jav2_u15l3", title:"くわしいみちあんない", icon:"📍", xp:15, board:true, steps:[
  {type:"intro", title:"くわしいみちあんない",
   desc:"Navigate more complex situations: multi-step directions, using landmarks as reference points, and asking for clarification when you are lost. These skills are essential for getting around in Japan.",
   goals:["Give and follow multi-step directions","Use landmarks as reference points for navigation","Ask for clarification and help when lost"]},

  {type:"teach", trg:"かど", src:"corner", pos:"noun", gender:null,
   note:"The corner of a street or building. つぎのかど = the next corner.\nKanji: 角.",
   example:"A: つぎのかどをみぎにまがってください。\nB: このかどですか？\nA: いいえ、つぎのかどです。",
   exampleSrc:"A: Please turn right at the next corner.\nB: This corner?\nA: No, the next corner.",
   funFact:"角 also means 'angle' and 'horn.' In directions, かどをまがる (turn at the corner) is the most common phrase. Japanese streets are famously unnamed in many areas, so 'the second corner' or 'the corner by the convenience store' are typical direction landmarks."},

  {type:"teach", trg:"こうさてん", src:"intersection / crossroads", pos:"noun", gender:null,
   note:"Where two or more roads meet. Larger than a simple corner.\nKanji: 交差点.",
   example:"A: おおきなこうさてんをわたってまっすぐいってください。\nB: しんごうのあるこうさてんですか？",
   exampleSrc:"A: Cross the big intersection and go straight.\nB: The intersection with the traffic light?",
   funFact:"交差点 combines 交 (intersect), 差 (difference/point), and 点 (point). Major intersections in Tokyo like Shibuya Scramble Crossing are famous worldwide. Japanese intersections often have names displayed on signs, which helps with navigation when street names are absent."},

  {type:"teach", trg:"つきあたり", src:"end of the road / dead end", pos:"noun", gender:null,
   note:"Where the road ends and you must turn. つきあたりをみぎ = turn right at the end.\nKanji: 突き当たり.",
   example:"A: このみちのつきあたりをひだりにまがってください。\nB: わかりました。つきあたりをひだりですね。",
   exampleSrc:"A: Turn left at the end of this road.\nB: Got it. Left at the dead end.",
   funFact:"突き当たり literally means 'the place you bump into.' It vividly describes reaching the end of a road where you cannot go forward. In a country of narrow, winding streets like Japan, dead ends are common and つきあたり is an essential direction word."},

  {type:"mc", q:"つぎのかどをみぎにまがってください means:", opts:["Turn left at this corner","Turn right at the next corner","Go straight past the corner","Stop at the corner"], ans:"Turn right at the next corner",
   hint:"かど is a corner, and つぎの means 'the next one.'"},

  {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
   note:"From English 'convenience (store).' The most useful landmark in Japan.\nOpen 24/7.",
   example:"A: コンビニのとなりにゆうびんきょくがあります。\nB: セブンイレブンのよこですか？",
   exampleSrc:"A: There is a post office next to the convenience store.\nB: Next to the 7-Eleven?",
   funFact:"Japan has over 56,000 convenience stores. They are everywhere, open 24 hours, and serve as ATMs, copy centers, ticket offices, bill payment points, and meal providers. When giving directions, コンビニ is the most reliable landmark because there is almost always one nearby."},

  {type:"teach", trg:"となり", src:"next to / beside", pos:"noun", gender:null,
   note:"Xのとなり = next to X. For things side by side.\nKanji: 隣.",
   example:"A: ぎんこうはどこですか？\nB: ゆうびんきょくのとなりにあります。",
   exampleSrc:"A: Where is the bank?\nB: It is next to the post office.",
   funFact:"となり specifically means 'adjacent/next door.' It is for things directly beside each other. For 'near' but not adjacent, use ちかく. For 'across from,' use むかい. These precise spatial words are crucial because Japanese addresses do not follow a linear numbering system."},

  {type:"teach", trg:"むかい", src:"across from / opposite", pos:"noun", gender:null,
   note:"Xのむかい = across from X. For things facing each other.\nKanji: 向かい.",
   example:"A: レストランはえきのむかいにあります。\nB: えきのまえのとおりのむかいがわですか？",
   exampleSrc:"A: The restaurant is across from the station.\nB: On the opposite side of the street in front of the station?",
   funFact:"向かい comes from 向く (to face). It describes things on opposite sides, typically of a street. むかいのいえ (the house across the street) is how Japanese people often describe their neighbors. Japan's block-based address system makes relative positions (next to, across from) crucial."},

  {type:"fb", s:"コンビニの___にゆうびんきょくがあります。\n(There is a post office next to the convenience store.)", a:"となり", opts:["となり","まえ","うしろ","うえ"], sSrc:"There is a post office next to the convenience store.",
   hint:"The word for 'adjacent/next door' for things side by side."},

  {type:"teach", trg:"あいだ", src:"between / in between", pos:"noun", gender:null,
   note:"AとBのあいだ = between A and B. For things in the middle.\nKanji: 間.",
   example:"A: としょかんはぎんこうとびょういんのあいだにあります。\nB: ああ、あのたてものですか。わかりました。",
   exampleSrc:"A: The library is between the bank and the hospital.\nB: Ah, that building. I see.",
   funFact:"間 is one of the most versatile kanji in Japanese. As あいだ it means 'between/during.' As ま it means 'space/room/pause.' As かん it means 'interval.' 時間 (jikan, time), 人間 (ningen, human), 空間 (kuukan, space) all use this kanji."},

  {type:"teach", trg:"めじるし", src:"landmark / reference point", pos:"noun", gender:null,
   note:"め (eye) + じるし (mark). Something that catches your eye as a guide.\nKanji: 目印.",
   example:"A: なにかめじるしはありますか？\nB: おおきなあかいたてものがめじるしです。",
   exampleSrc:"A: Is there a landmark?\nB: A big red building is the landmark.",
   funFact:"目印 literally means 'eye mark.' In a country where streets often lack names and addresses are block-based, landmarks are the primary navigation tool. なにかめじるしはありますか (Is there a landmark?) is the most useful direction question in Japan."},

  {type:"mc", q:"AとBのあいだ means:", opts:["next to A and B","in front of A and B","between A and B","behind A and B"], ans:"between A and B",
   hint:"あいだ describes the space in the middle of two reference points."},

  {type:"teach", trg:"まいご", src:"lost (person)", pos:"noun", gender:null,
   note:"まいごになる = to get lost. Mainly used for people.\nKanji: 迷子.",
   example:"A: すみません、まいごになってしまいました。\nB: どこにいきたいですか？",
   exampleSrc:"A: Excuse me, I have gotten lost.\nB: Where do you want to go?",
   funFact:"迷子 combines 迷 (lost/bewildered) and 子 (child). While it originally referred to lost children, adults use まいごになった (got lost) casually too. In train stations, service counters (サービスカウンター) help lost travelers. Tokyo Station's complex layout is notorious for confusing even locals."},

  {type:"teach", trg:"ちかく", src:"nearby / close", pos:"noun", gender:null,
   note:"Xのちかく = near X. Broader than となり (next to).\nKanji: 近く.",
   example:"A: このちかくにコンビニはありますか？\nB: はい、あのかどにあります。",
   exampleSrc:"A: Is there a convenience store nearby?\nB: Yes, there is one at that corner.",
   funFact:"近く is the noun form of 近い (close). このちかくに... (around here, is there a...) is one of the most practical travel phrases. Japanese people are generally very helpful when asked for directions, often walking with you partway to your destination."},

  {type:"fb", s:"すみません、___になってしまいました。\n(Excuse me, I have gotten lost.)", a:"まいご", opts:["まいご","まよい","まえ","まがり"], sSrc:"Excuse me, I have gotten lost.",
   hint:"The word for a person who has lost their way."},

  {type:"match", pairs:[{trg:"かど",src:"corner"},{trg:"こうさてん",src:"intersection"},{trg:"つきあたり",src:"dead end"},{trg:"コンビニ",src:"convenience store"}]},

  {type:"match", pairs:[{trg:"となり",src:"next to"},{trg:"むかい",src:"across from"},{trg:"あいだ",src:"between"},{trg:"ちかく",src:"nearby"}]},

  {type:"mc", q:"なにかめじるしはありますか means:", opts:["What is the address?","Is there a landmark?","Where is the station?","How far is it?"], ans:"Is there a landmark?",
   hint:"めじるし is a visual reference point used for navigation."},

  {type:"fb", s:"レストランはえきの___にあります。\n(The restaurant is across from the station.)", a:"むかい", opts:["むかい","となり","ちかく","うしろ"], sSrc:"The restaurant is across from the station.",
   hint:"The positional word for things on the opposite side, facing each other."},

  {type:"tip", title:"Giving Detailed Directions",
   text:"Landmarks:\nコンビニのとなり (next to the convenience store)\nえきのむかい (across from the station)\nAとBのあいだ (between A and B)\n\nNavigation steps:\nこのみちをまっすぐ (go straight on this road)\nつぎのかどをみぎ (right at the next corner)\nしんごうをわたって (cross at the traffic light)\nつきあたりをひだり (left at the dead end)\n\nAsking for help:\nまいごになりました (I am lost)\nめじるしはありますか (Is there a landmark?)\nもういちどおねがいします (One more time please)",
   deepDive:{title:"Japan's unique address system",
    text:"Japanese addresses work differently from most countries:\n\nInstead of street names + house numbers, Japan uses:\n区/市 (ward/city) > 町 (neighborhood) > 丁目 (block group) > 番 (block number) > 号 (building number)\n\nStreets rarely have names. Buildings are numbered by when they were built, not by position. Number 3 might be between 7 and 15.\n\nThis is why landmarks matter so much. 'Next to the convenience store' or 'across from the station' is often more useful than the actual address. Delivery drivers and taxi drivers rely on landmarks and phone calls to find locations."}},
]};
export default LESSON_3;
