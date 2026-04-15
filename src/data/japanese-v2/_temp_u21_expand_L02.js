// Unit 21 Expansion. Lesson 4: しゃかいもんだい (Social Issues)
const LESSON_4 = {
  id:"jav2_u21l4", title:"しゃかいもんだい", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゃかいもんだい",
     desc:"Explore vocabulary for discussing social issues in Japan. Learn words for poverty, inequality, crime, safety, and welfare. These terms appear frequently in news discussions and are essential for understanding Japanese society at an intermediate level.",
     goals:["Learn vocabulary for social problems and welfare","Discuss safety, crime, and inequality","Express concern about societal challenges"]},

    {type:"teach", trg:"ひんこん", src:"poverty", pos:"noun", gender:null,
     note:"Kanji: 貧困. ひん (poor) + こん (hardship).\nひんこんもんだい = poverty problem.",
     example:"A: こどものひんこんがしゃかいもんだいになっています。\nB: たいさくがひつようですね。",
     exampleSrc:"A: Child poverty has become a social issue.\nB: Countermeasures are necessary.",
     funFact:"Japan's relative poverty rate is one of the highest among developed nations, surprising many who see Japan as uniformly wealthy. こどものひんこん (child poverty) became a major topic after studies showed 1 in 7 Japanese children live below the poverty line. The concept of 'invisible poverty' (見えない貧困) describes how poverty hides behind cultural norms of not showing struggle."},

    {type:"teach", trg:"あんぜん", src:"safety / security", pos:"noun", gender:null,
     note:"Kanji: 安全. あん (peace) + ぜん (whole/complete).\nあんぜんな = safe (na-adj). こうつうあんぜん = traffic safety.",
     example:"A: にほんはあんぜんなくにだとおもいますか？\nB: はい、よるでもあるけるくらいあんぜんです。",
     exampleSrc:"A: Do you think Japan is a safe country?\nB: Yes, it is safe enough to walk at night.",
     funFact:"安全 combines 安 (peace) and 全 (whole). Japan consistently ranks among the world's safest countries. Children walk to school alone from age six, a practice called 通学 (tsuugaku). Lost wallets are usually returned intact. However, Japanese safety also has a strict side: extensive surveillance and community watch systems."},

    {type:"teach", trg:"はんざい", src:"crime", pos:"noun", gender:null,
     note:"Kanji: 犯罪. はん (commit/violate) + ざい (sin/crime).\nはんざいりつ = crime rate.",
     example:"A: このちいきではんざいがふえています。\nB: けいさつはなにかたいさくをしていますか？",
     exampleSrc:"A: Crime is increasing in this area.\nB: Are the police taking any measures?",
     funFact:"犯罪 uses 犯 (offend) and 罪 (guilt/sin). Japan's crime rate is remarkably low by global standards. The conviction rate exceeds 99%, which has drawn both admiration and criticism. Japanese police use a system of local police boxes (交番, kouban) staffed around the clock, creating a visible presence in every neighborhood."},

    {type:"teach", trg:"ふくし", src:"welfare / social welfare", pos:"noun", gender:null,
     note:"Kanji: 福祉. ふく (fortune/blessing) + し (kindness).\nしゃかいふくし = social welfare.",
     example:"A: ふくしサービスをもっとじゅうじつさせるべきです。\nB: とくにこうれいしゃのふくしがじゅうようです。",
     exampleSrc:"A: Welfare services should be further enhanced.\nB: Especially welfare for the elderly is important.",
     funFact:"福祉 combines 福 (good fortune) and 祉 (happiness/blessings). Japan's welfare system includes universal healthcare, national pension, and long-term care insurance. As the population ages, welfare spending has become the largest portion of the national budget. The phrase ふくしこっか (welfare state) describes this social safety net."},

    {type:"mc", q:"あんぜん means:", opts:["crime","poverty","safety","welfare"], ans:"safety",
     hint:"This word combines characters meaning 'peace' and 'whole.' Japan is known for this quality."},

    {type:"teach", trg:"さべつ", src:"discrimination", pos:"noun", gender:null,
     note:"Kanji: 差別. さ (difference) + べつ (separate).\nさべつする = to discriminate.",
     example:"A: どんなさべつもゆるされるべきではありません。\nB: わたしもそうおもいます。",
     exampleSrc:"A: No kind of discrimination should be tolerated.\nB: I agree.",
     funFact:"差別 literally means 'differentiating separation.' Japan faces several forms of discrimination including gender inequality, ethnic discrimination against Korean and Chinese residents, and historical discrimination against the Burakumin community. Anti-discrimination laws have been strengthened, but social attitudes change slowly."},

    {type:"teach", trg:"きけん", src:"danger / risk", pos:"noun", gender:null,
     note:"Kanji: 危険. き (dangerous) + けん (steep/perilous).\nきけんな = dangerous (na-adj).",
     example:"A: このみちはよるあるくときけんです。\nB: べつのみちをいきましょう。",
     exampleSrc:"A: It is dangerous to walk this road at night.\nB: Let us take a different road.",
     funFact:"危険 stacks two kanji that both mean 'perilous.' き (危) shows a person on a cliff, and けん (険) adds the hill radical. Japan uses a clear hazard symbol system: きけん (danger, red), ちゅうい (caution, yellow). Earthquake evacuation maps use these color codes extensively."},

    {type:"teach", trg:"たいさく", src:"countermeasure / plan / policy response", pos:"noun", gender:null,
     note:"Kanji: 対策. たい (against) + さく (plan/scheme).\nぼうさいたいさく = disaster prevention measures.",
     example:"A: こうれいかにたいしてどんなたいさくがありますか？\nB: いりょうとふくしをじゅうじつさせることです。",
     exampleSrc:"A: What countermeasures exist for the aging population?\nB: Enhancing medical care and welfare.",
     funFact:"対策 literally means 'plan against.' Every major issue in Japan gets an official たいさく. There are COVID対策, disaster対策, crime対策, and even heat stroke対策. The word reflects the Japanese preference for systematic, planned responses to problems rather than ad hoc reactions."},

    {type:"fb", s:"こどもの{1}がしゃかいもんだいになっています。\n(Child poverty has become a social issue.)", a:"ひんこん", opts:["ひんこん","はんざい","さべつ","きけん"], sSrc:"Child poverty has become a social issue.",
     hint:"The word for a state of being extremely poor and lacking basic necessities."},

    {type:"teach", trg:"けいさつ", src:"police", pos:"noun", gender:null,
     note:"Kanji: 警察. けい (warn) + さつ (inspect).\nけいさつかん = police officer. けいさつしょ = police station.",
     example:"A: けいさつにれんらくしましたか？\nB: はい、もうでんわしました。",
     exampleSrc:"A: Did you contact the police?\nB: Yes, I already called them.",
     funFact:"警察 combines 警 (warn) and 察 (inspect/observe). Japanese police are generally trusted and approachable. The 交番 (kouban, police box) system means there is a small staffed police station in virtually every neighborhood. Officers give directions, hold lost items, and patrol on bicycles. The nationwide police emergency number is 110."},

    {type:"teach", trg:"ぼうし", src:"prevention", pos:"noun", gender:null,
     note:"Kanji: 防止. ぼう (prevent/defend) + し (stop).\nはんざいぼうし = crime prevention. じこぼうし = accident prevention.",
     example:"A: はんざいぼうしのためにカメラがせっちされています。\nB: あんぜんのためにひつようですね。",
     exampleSrc:"A: Cameras are installed for crime prevention.\nB: They are necessary for safety.",
     funFact:"防止 means 'prevent and stop.' Japan's approach to prevention is thorough and systematic. Crime prevention (防犯, bouhan) involves community patrols, well-lit streets, and those ubiquitous security cameras. Schools teach disaster prevention (防災, bousai) from first grade. Prevention is considered more valuable than reaction in Japanese culture."},

    {type:"teach", trg:"ゆるす", src:"to forgive / to permit / to tolerate", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 許す. Also means to allow or authorize.\nゆるされない = unforgivable / impermissible.",
     example:"A: そんなことはゆるされません。\nB: きびしいルールですね。",
     exampleSrc:"A: Such things are not tolerated.\nB: Those are strict rules.",
     funFact:"許す covers forgiveness, permission, and tolerance. ゆるされない (not permitted/unforgivable) appears in social commentary about behavior that crosses lines. The distinction between personal forgiveness and societal tolerance makes this word nuanced. A related word is 寛容 (kanyou, tolerance/magnanimity)."},

    {type:"mc", q:"はんざいぼうし means:", opts:["crime investigation","crime prevention","crime increase","crime rate"], ans:"crime prevention",
     hint:"Combine the word for c... with the word meaning 'prevent and stop.'"},

    {type:"match", pairs:[{trg:"ひんこん",src:"poverty"},{trg:"あんぜん",src:"safety"},{trg:"はんざい",src:"crime"},{trg:"ふくし",src:"welfare"}]},

    {type:"match", pairs:[{trg:"さべつ",src:"discrimination"},{trg:"きけん",src:"danger"},{trg:"たいさく",src:"countermeasure"},{trg:"けいさつ",src:"police"}]},

    {type:"fb", s:"はんざい{1}のためにカメラがせっちされています。\n(Cameras are installed for crime prevention.)", a:"ぼうし", opts:["ぼうし","ちょうさ","たいさく","あんぜん"], sSrc:"Cameras are installed for crime prevention.",
     hint:"The word meaning 'prevention' that combines stopping and defending against something."},

    {type:"mc", q:"さべつ means:", opts:["safety","prevention","discrimination","investigation"], ans:"discrimination",
     hint:"The kanji mean 'difference' and 'separate,' describing the unfair treatment of people."},

    {type:"match", pairs:[{trg:"ぼうし",src:"prevention"},{trg:"ゆるす",src:"to forgive/permit"},{trg:"けいさつ",src:"police"},{trg:"たいさく",src:"countermeasure"}]},
  ]
};
export default LESSON_4;
