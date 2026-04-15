// Unit 26 Expansion. Lesson 3: Headline Grammar
const LESSON_3 = {
  id:"jav2_u26l3", title:"みだしのぶんぽう", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Headline Grammar",
     desc:"Japanese news headlines use a compressed grammar style that drops particles, uses noun-heavy phrases, and relies on specific headline-only patterns. Learn to decode these abbreviated structures and the vocabulary that accompanies them.",
     goals:["Decode headline-style abbreviated grammar","Use headline vocabulary like はんめい, ふはつだん, ようぎしゃ","Understand how headlines compress full sentences"]},

    {type:"teach", trg:"はんめい", src:"discovery / becoming clear", pos:"noun", gender:null,
     note:"Kanji: 判明. はんめいする = to become clear/evident.\nCommon in news: ...ことがはんめい = it was revealed that...",
     example:"A: げんいんがはんめいしました。\nB: なにがげんいんだったのですか？",
     exampleSrc:"A: The cause has been identified.\nB: What was the cause?",
     funFact:"判明 uses 判 (judge) and 明 (clear). Headlines love はんめい because it implies investigation and revelation. The pattern ...ことがはんめい (it became clear that...) appears in hundreds of headlines daily. The formal passive はんめいされた adds even more news gravity."},

    {type:"teach", trg:"ようぎしゃ", src:"suspect", pos:"noun", gender:null,
     note:"Kanji: 容疑者. ようぎ (suspicion) + しゃ (person).\nUsed for suspects before conviction. After conviction: はんにん.",
     example:"A: ようぎしゃがたいほされました。\nB: どんなざいめいですか？",
     exampleSrc:"A: The suspect has been arrested.\nB: What is the charge?",
     funFact:"容疑者 is the legally precise term for an unconvicted suspect. Japanese media strictly uses ようぎしゃ before trial and follows it with 容疑 (charge). After conviction, the person becomes 被告 (hikoku, defendant) then 受刑者 (jukeisha, convict). This precision reflects Japan's legal language consciousness."},

    {type:"teach", trg:"たいほ", src:"arrest", pos:"noun", gender:null,
     note:"Kanji: 逮捕. たいほする = to arrest.\nたいほじょう = arrest warrant.",
     example:"A: けいさつがようぎしゃをたいほしました。\nB: どこでたいほされたのですか？",
     exampleSrc:"A: The police arrested the suspect.\nB: Where was the arrest made?",
     funFact:"逮捕 uses two rare kanji: 逮 (catch up to) and 捕 (seize). In headlines, たいほ often appears without particles: 容疑者逮捕 (Suspect Arrested). This telegraphic style is unique to headlines. Full sentence: ようぎしゃがたいほされた. Headline: ようぎしゃたいほ. The particle が and the passive される are both dropped."},

    {type:"mc", q:"How does the headline ようぎしゃたいほ differ from the full sentence ようぎしゃがたいほされた?", opts:["The headline uses past tense only","They have different meanings","The headline adds emphasis","The headline drops the particle and passive marker"], ans:"The headline drops the particle and passive marker",
     hint:"Headlines compress by removing grammatical particles and verb conjugations."},

    {type:"teach", trg:"ひがい", src:"damage / harm", pos:"noun", gender:null,
     note:"Kanji: 被害. ひがいしゃ = victim. ひがいがく = amount of damage.\nひがいをうける = to suffer damage.",
     example:"A: たいふうによるひがいがかくだいしています。\nB: ひがいしゃのかずはまだわかりません。",
     exampleSrc:"A: Damage from the typhoon is spreading.\nB: The number of victims is still unknown.",
     funFact:"被害 uses 被 (receive/suffer) and 害 (harm). Japanese news distinguishes carefully between ひがい (damage suffered), そんがい (損害, financial damage), and さいがい (災害, disaster). Each implies a different scale and type. ひがいしゃ (victim) is the universal term for anyone harmed by an event."},

    {type:"teach", trg:"かくだい", src:"expansion / spread", pos:"noun", gender:null,
     note:"Kanji: 拡大. かくだいする = to expand/spread.\nかんせんかくだい = spread of infection.",
     example:"A: もんだいがかくだいするまえにたいさくがひつようです。\nB: さんせいです。はやくこうどうしましょう。",
     exampleSrc:"A: Countermeasures are needed before the problem expands.\nB: I agree. Let us act quickly.",
     funFact:"拡大 uses 拡 (expand) and 大 (big). This word became ubiquitous during the COVID pandemic: かんせんかくだい (infection spread) appeared in every news broadcast. The opposite is しゅくしょう (縮小, reduction/contraction). Headlines often pair かくだい with a topic: ひがいかくだい, えんやすかくだい."},

    {type:"fb", s:"たいふうによる{1}がかくだいしています。\n(Damage from the typhoon is spreading.)", a:"ひがい", opts:["ひがい","はんめい","たいほ","じけん"], sSrc:"Damage from the typhoon is spreading.",
     hint:"The noun for harm or damage suffered, often paired with a natural disaster."},

    {type:"teach", trg:"きんきゅう", src:"emergency / urgent", pos:"noun", gender:null,
     note:"Kanji: 緊急. きんきゅうじたい = state of emergency.\nきんきゅうそくほう = emergency alert.",
     example:"A: きんきゅうのきしゃかいけんがおこなわれます。\nB: なにがあったのでしょうか。",
     exampleSrc:"A: An emergency press conference will be held.\nB: I wonder what happened.",
     funFact:"緊急 uses 緊 (tight/tense) and 急 (urgent). The きんきゅうじたいせんげん (state of emergency declaration) became a household phrase during the pandemic. Japan's earthquake early warning system sends きんきゅうじしんそくほう (earthquake emergency alerts) to every phone in the affected area seconds before shaking arrives."},

    {type:"teach", trg:"そくほう", src:"breaking news / flash report", pos:"noun", gender:null,
     note:"Kanji: 速報. 速 (fast) + 報 (report).\nニュースそくほう = news flash.",
     example:"A: そくほうです。おおきなじしんがはっせいしました。\nB: つなみのきけんはありますか？",
     exampleSrc:"A: Breaking news. A large earthquake has occurred.\nB: Is there a risk of tsunami?",
     funFact:"速報 appears as a red banner on Japanese TV news. NHK's red そくほう banner causes immediate attention across the nation. The word combines 速 (speed) and 報 (report). During earthquakes, そくほう can arrive before the shaking thanks to Japan's advanced seismic detection network."},

    {type:"mc", q:"きんきゅうじたいせんげん means:", opts:["An earthquake early warning","A formal declaration that conditions require exceptional measures","A press conference announcement","A criminal investigation report"], ans:"A formal declaration that conditions require exceptional measures",
     hint:"きんきゅう (emergency) + じたい (situation) + せんげん (d...) form a compound for official crisis responses."},

    {type:"teach", trg:"はっせい", src:"occurrence / outbreak", pos:"noun", gender:null,
     note:"Kanji: 発生. はっせいする = to occur/break out.\nじこがはっせい = an accident occurred.",
     example:"A: おおがたたいふうがはっせいしました。\nB: ひなんじゅんびをしましょう。",
     exampleSrc:"A: A large typhoon has formed.\nB: Let us prepare for evacuation.",
     funFact:"発生 uses 発 (emit/start) and 生 (life/birth). In news, はっせい is the standard verb for the start of disasters, diseases, and incidents. Headlines abbreviate: たいふうはっせい (Typhoon Formed). The word implies something springing into existence, carrying a sense of sudden, sometimes dangerous, emergence."},

    {type:"fb", s:"{1}です。おおきなじしんがはっせいしました。\n(Breaking news. A large earthquake has occurred.)", a:"そくほう", opts:["そくほう","きんきゅう","はんめい","ほうどう"], sSrc:"Breaking news. A large earthquake has occurred.",
     hint:"The two-kanji compound meaning a fast report, used for immediate news flashes."},

    {type:"match", pairs:[{trg:"はんめい",src:"becoming clear"},{trg:"ようぎしゃ",src:"suspect"},{trg:"たいほ",src:"arrest"},{trg:"ひがい",src:"damage"}]},

    {type:"mc", q:"In headlines, particles like が and を are typically:", opts:["Dropped entirely to save space","Always present for clarity","Replaced with commas","Doubled for emphasis"], ans:"Dropped entirely to save space",
     hint:"Headline grammar compresses sentences by removing grammatical connectors."},

    {type:"match", pairs:[{trg:"きんきゅう",src:"emergency"},{trg:"そくほう",src:"breaking news"},{trg:"はっせい",src:"occurrence"},{trg:"かくだい",src:"expansion/spread"}]},
  ]
};
export default LESSON_3;
