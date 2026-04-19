// Batch 6 – Unit 21 (B1.2 Society & News): Community & Volunteering
const BATCH6_L1 = {
  id:"jav2_u21l_b6_1", title:"地域(ちいき)とボランティア", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"地域(ちいき)とボランティア",
     desc:"Learn vocabulary for community involvement and volunteering. Japanese society values mutual help and community bonds. These words appear frequently in news and social discussions.",
     goals:["Discuss community activities and events","Use vocabulary for volunteering and cooperation","Describe social participation"]},

    {type:"teach", trg:"地域(ちいき)", src:"region / community / local area", pos:"noun", gender:null,
     note:"地域(ちいき)社会(しゃかい) = local community.\n地域(ちいき)活動(かつどう) = community activities.",
     example:"A: 地域(ちいき)のお祭(まつ)りに参加(さんか)しませんか？\nB: いいですね。いつですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Would you like to participate in the local festival?\nB: Sounds good. When is it?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"地域(ちいき) (地域) combines 地 (ground/earth) and 域 (area). Japanese communities are tightly organized through 自治会(じちかい) (neighborhood associations) that handle festivals, cleanups, and disaster preparation. 地域(ちいき)の絆(きずな) (community bonds) became a national topic after the 2011 earthquake."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"Katakana loanword. ボランティア活動(かつどう) = volunteer activities.\nボランティアをする = to volunteer.",
     example:"A: ボランティアで日本語(にほんご)を教(おし)えています。\nB: 素晴(すば)らしいですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I teach Japanese as a volunteer.\nB: That is wonderful.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's volunteer culture grew enormously after the 1995 Kobe earthquake, called ボランティア元年(がんねん) (Year One of Volunteering). Today, disaster ボランティア, children's support, and elderly care are common. The government promotes ボランティア through school programs and corporate social responsibility."},

    {type:"teach", trg:"協力(きょうりょく)", src:"cooperation / collaboration", pos:"noun", gender:null,
     note:"協力(きょうりょく)する = to cooperate.\nご協力(きょうりょく)お願(ねが)いします = we ask for your cooperation.",
     example:"A: みなさんの協力(きょうりょく)が必要(ひつよう)です。\nB: 何(なに)をすればいいですか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Everyone's cooperation is needed.\nB: What should we do?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"ご協力(きょうりょく)お願(ねが)いします (we ask for your cooperation) is everywhere in Japan: train announcements, signs, posters. It is the polite way to ask people to follow rules or contribute. During emergencies, this phrase mobilizes communities. Cooperation is valued above individual action."},

    {type:"teach", trg:"参加(さんか)", src:"participation", pos:"noun", gender:null,
     note:"参加(さんか)する = to participate.\n参加費(さんかひ) = participation fee.",
     example:"A: だれでも参加(さんか)できますか？\nB: はい、申(もう)し込(こ)みはウェブサイトからどうぞ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Can anyone participate?\nB: Yes, please apply through the website.\nA: How was it?\nB: It was very good.",
     funFact:"参加(さんか)する is the go-to verb for joining events, clubs, competitions, and meetings. Japanese culture encourages group 参加(さんか): school clubs (部活(ぶかつ)), company events (社員旅行(しゃいんりょこう)), and community activities. The pressure to 参加(さんか)する can sometimes feel obligatory, a topic of ongoing social discussion."},

    {type:"teach", trg:"つながり", src:"connection / bond / link", pos:"noun", gender:null,
     note:"From つながる (to be connected). 人(ひと)とのつながり = connections with people.\nSNSのつながり = social media connections.",
     example:"A: 地域(ちいき)のつながりを大切(たいせつ)にしたいです。\nB: 私(わたし)もそう思(おも)います。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I want to value community connections.\nB: I think so too.\nA: When was it?\nB: It was last summer.",
     funFact:"つながり (connections) became a buzzword after 2011. People rediscovered the value of face-to-face つながり over digital ones. 縁(えん) (fate/connection) is a related concept: people you meet have 縁(えん) with you. This belief that connections are destined shapes Japanese relationship-building."},

    {type:"mc", q:"ご協力(きょうりょく)お願(ねが)いします means:", opts:["We ask for your cooperation","Thank you for coming","Please be quiet","Congratulations"], ans:"We ask for your cooperation",
     hint:"This polite request is heard on trains and in public announcements."},

    {type:"teach", trg:"催(もよお)し", src:"event / gathering / function", pos:"noun", gender:null,
     note:"催(もよお)し物(もの) = event/entertainment.\n催(もよお)す = to hold (an event).",
     example:"A: 今週末(こんしゅうまつ)はどんな催(もよお)しがありますか？\nB: 公園(こうえん)でお祭(まつ)りがあります。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What events are there this weekend?\nB: There is a festival in the park.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"催(もよお)し is the formal word for events, used in newspapers and announcements. More casual alternatives: イベント (event), お祭(まつ)り (festival). Japan has an incredible number of local 催(もよお)し throughout the year: cherry blossom viewing, fireworks festivals, shrine festivals, and seasonal markets."},

    {type:"teach", trg:"役(やく)に立(た)つ", src:"to be useful / to be helpful", pos:"verb", gender:null,
     note:"役(やく) = role/use, に立(た)つ = to stand in.\nお役(やく)に立(た)てれば = if I can be of help.",
     example:"A: この経験(けいけん)は必(かなら)ず役(やく)に立(た)ちます。\nB: そうだといいですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: This experience will definitely be useful.\nB: I hope so.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"役(やく)に立(た)つ (役に立つ) literally means 'to stand in a role.' お役(やく)に立(た)てればうれしいです (I would be happy if I could be helpful) is a humble way to offer assistance. The opposite, 役(やく)に立(た)たない (useless), is a harsh judgment rarely used about people directly."},

    {type:"teach", trg:"集(あつ)まる", src:"to gather / to assemble (intransitive)", pos:"verb", gender:null,
     note:"Group 1 verb. 人(ひと)が集(あつ)まる = people gather.\nTransitive: 集(あつ)める.",
     example:"A: 公園(こうえん)にたくさんの人(ひと)が集(あつ)まっています。\nB: 何(なに)かイベントがあるのでしょうか。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Many people have gathered in the park.\nB: Maybe there is some event.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"集(あつ)まる (intransitive: people gather) and 集(あつ)める (transitive: to collect) are a pair. Japanese culture loves gatherings: 飲(の)み会(かい) (drinking parties), 新年会(しんねんかい) (New Year parties), 忘年会(ぼうねんかい) (year-end parties). The act of 集(あつ)まる strengthens group bonds."},

    {type:"teach", trg:"支(ささ)える", src:"to support / to sustain", pos:"verb", gender:null,
     note:"Group 2 verb. 家族(かぞく)を支(ささ)える = to support one's family.",
     example:"A: ボランティアの方々(かたがた)が地域(ちいき)を支(ささ)えています。\nB: 感謝(かんしゃ)の気持(きも)ちでいっぱいです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Volunteers are supporting the community.\nB: I am full of gratitude.\nA: How long did it take?\nB: About two hours.",
     funFact:"支(ささ)える captures physical support (holding up a structure) and emotional/financial support. 支(ささ)え合(あ)う (to support each other) is a key Japanese social concept. After disasters, the phrase がんばろう日本(にほん) (let's stay strong, Japan) and 支(ささ)え合(あ)おう (let's support each other) unite communities."},

    {type:"teach", trg:"感謝(かんしゃ)", src:"gratitude / appreciation", pos:"noun", gender:null,
     note:"感謝(かんしゃ)する = to be grateful.\n感謝(かんしゃ)の気持(きも)ち = feelings of gratitude.",
     example:"A: いつもお世話(せわ)になっています。感謝(かんしゃ)しています。\nB: こちらこそ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: You always take care of me. I am grateful.\nB: Likewise.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"感謝(かんしゃ) (感謝) culture permeates Japanese life. Handwritten 感謝(かんしゃ)の手紙(てがみ) (thank-you letters) are common. Companies hold 感謝祭(かんしゃさい) (appreciation events). The phrase 感謝(かんしゃ)の気持(きも)ちを忘(わす)れない (never forget the feeling of gratitude) is taught to children. Gratitude is considered the foundation of good character."},

    {type:"fb", s:"みなさんの{1}が必要(ひつよう)です。\n(Everyone's cooperation is needed.)", a:"きょうりょく", opts:["きょうりょく","さんか","もよおし","ボランティア"], sSrc:"Everyone's cooperation is needed.",
     hint:"The noun meaning working together or collaborating for a common goal."},

    {type:"mc", q:"役(やく)に立(た)つ means:", opts:["To be useful or helpful","To gather together","To support someone","To volunteer"], ans:"To be useful or helpful",
     hint:"This expression literally means 'to stand in a u... role.'"},

    {type:"match", pairs:[
      {trg:"地域(ちいき)", src:"local community"},
      {trg:"ボランティア", src:"volunteer"},
      {trg:"つながり", src:"connection / bond"},
      {trg:"支(ささ)える", src:"to support"},
      {trg:"感謝(かんしゃ)", src:"gratitude"}
    ]},

    {type:"fb", s:"この経験(けいけん)はかならず{1}ちます。\n(This experience will definitely be useful.)", a:"やくにた", opts:["やくにた","さんかし","あつまり","きょうりょくし"], sSrc:"This experience will definitely be useful.",
     hint:"The verb form meaning 'to be useful,' combining やく, に, and たつ."},

    {type:"mc", q:"集(あつ)まる describes:", opts:["People coming together in one place","One person leaving","Distributing items","Cleaning up"], ans:"People coming together in one place",
     hint:"This intransitive verb describes the act of gathering."}
  ,{type:"match",pairs:[{trg:"参加(さんか)",src:"participation"},{trg:"催(もよお)し",src:"event / gathering / function"},{trg:"役(やく)に立(た)つ",src:"to be useful / to be helpful"},{trg:"集(あつ)まる",src:"to gather / to assemble (intransitive)"}]},
  {type:"fb", s:"地域(ちいき)の清掃(せいそう)イベントに{1}しました。", a:["参加(さんか)"], opts:["参加(さんか)","ボランティア","協力(きょうりょく)","つながり"], hint:"The act of joining or taking part in an activity or event.", sSrc:"I {1} in the local clean-up event."}
]
};
export default BATCH6_L1;
