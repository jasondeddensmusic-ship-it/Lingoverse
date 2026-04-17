// Batch 6 – Unit 21 (B1.2 Society & News): Community & Volunteering
const BATCH6_L1 = {
  id:"jav2_u21l_b6_1", title:"ちいきとボランティア", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちいきとボランティア",
     desc:"Learn vocabulary for community involvement and volunteering. Japanese society values mutual help and community bonds. These words appear frequently in news and social discussions.",
     goals:["Discuss community activities and events","Use vocabulary for volunteering and cooperation","Describe social participation"]},

    {type:"teach", trg:"ちいき", src:"region / community / local area", pos:"noun", gender:null,
     note:"Kanji: 地域. ちいきしゃかい = local community.\nちいきかつどう = community activities.",
     example:"A: ちいきのまつりにさんかしませんか？\nB: いいですね。いつですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Would you like to participate in the local festival?\nB: Sounds good. When is it?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"ちいき (地域) combines 地 (ground/earth) and 域 (area). Japanese communities are tightly organized through じちかい (自治会, neighborhood associations) that handle festivals, cleanups, and disaster preparation. ちいきのきずな (community bonds) became a national topic after the 2011 earthquake."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"Katakana loanword. ボランティアかつどう = volunteer activities.\nボランティアをする = to volunteer.",
     example:"A: ボランティアでにほんごをおしえています。\nB: すばらしいですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I teach Japanese as a volunteer.\nB: That is wonderful.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's volunteer culture grew enormously after the 1995 Kobe earthquake, called ボランティア元年 (Year One of Volunteering). Today, disaster ボランティア, children's support, and elderly care are common. The government promotes ボランティア through school programs and corporate social responsibility."},

    {type:"teach", trg:"きょうりょく", src:"cooperation / collaboration", pos:"noun", gender:null,
     note:"Kanji: 協力. きょうりょくする = to cooperate.\nごきょうりょくおねがいします = we ask for your cooperation.",
     example:"A: みなさんのきょうりょくがひつようです。\nB: なにをすればいいですか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Everyone's cooperation is needed.\nB: What should we do?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"ごきょうりょくおねがいします (we ask for your cooperation) is everywhere in Japan: train announcements, signs, posters. It is the polite way to ask people to follow rules or contribute. During emergencies, this phrase mobilizes communities. Cooperation is valued above individual action."},

    {type:"teach", trg:"さんか", src:"participation", pos:"noun", gender:null,
     note:"Kanji: 参加. さんかする = to participate.\nさんかひ = participation fee.",
     example:"A: だれでもさんかできますか？\nB: はい、もうしこみはウェブサイトからどうぞ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Can anyone participate?\nB: Yes, please apply through the website.\nA: How was it?\nB: It was very good.",
     funFact:"さんかする is the go-to verb for joining events, clubs, competitions, and meetings. Japanese culture encourages group さんか: school clubs (ぶかつ), company events (しゃいんりょこう), and community activities. The pressure to さんかする can sometimes feel obligatory, a topic of ongoing social discussion."},

    {type:"teach", trg:"つながり", src:"connection / bond / link", pos:"noun", gender:null,
     note:"From つながる (to be connected). ひととのつながり = connections with people.\nSNSのつながり = social media connections.",
     example:"A: ちいきのつながりをたいせつにしたいです。\nB: わたしもそうおもいます。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I want to value community connections.\nB: I think so too.\nA: When was it?\nB: It was last summer.",
     funFact:"つながり (connections) became a buzzword after 2011. People rediscovered the value of face-to-face つながり over digital ones. えん (縁, fate/connection) is a related concept: people you meet have えん with you. This belief that connections are destined shapes Japanese relationship-building."},

    {type:"mc", q:"ごきょうりょくおねがいします means:", opts:["We ask for your cooperation","Thank you for coming","Please be quiet","Congratulations"], ans:"We ask for your cooperation",
     hint:"This polite request is heard on trains and in public announcements."},

    {type:"teach", trg:"もよおし", src:"event / gathering / function", pos:"noun", gender:null,
     note:"Kanji: 催し. もよおしもの = event/entertainment.\nもよおす = to hold (an event).",
     example:"A: こんしゅうまつはどんなもよおしがありますか？\nB: こうえんでおまつりがあります。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What events are there this weekend?\nB: There is a festival in the park.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"もよおし is the formal word for events, used in newspapers and announcements. More casual alternatives: イベント (event), おまつり (festival). Japan has an incredible number of local もよおし throughout the year: cherry blossom viewing, fireworks festivals, shrine festivals, and seasonal markets."},

    {type:"teach", trg:"やくにたつ", src:"to be useful / to be helpful", pos:"verb", gender:null,
     note:"やく = role/use, にたつ = to stand in.\nおやくにたてれば = if I can be of help.",
     example:"A: このけいけんはかならずやくにたちます。\nB: そうだといいですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: This experience will definitely be useful.\nB: I hope so.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"やくにたつ (役に立つ) literally means 'to stand in a role.' おやくにたてればうれしいです (I would be happy if I could be helpful) is a humble way to offer assistance. The opposite, やくにたたない (useless), is a harsh judgment rarely used about people directly."},

    {type:"teach", trg:"あつまる", src:"to gather / to assemble (intransitive)", pos:"verb", gender:null,
     note:"Group 1 verb. ひとがあつまる = people gather.\nKanji: 集まる. Transitive: あつめる.",
     example:"A: こうえんにたくさんのひとがあつまっています。\nB: なにかイベントがあるのでしょうか。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Many people have gathered in the park.\nB: Maybe there is some event.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"あつまる (intransitive: people gather) and あつめる (transitive: to collect) are a pair. Japanese culture loves gatherings: のみかい (drinking parties), しんねんかい (New Year parties), ぼうねんかい (year-end parties). The act of あつまる strengthens group bonds."},

    {type:"teach", trg:"ささえる", src:"to support / to sustain", pos:"verb", gender:null,
     note:"Group 2 verb. かぞくをささえる = to support one's family.\nKanji: 支える.",
     example:"A: ボランティアのかたがたがちいきをささえています。\nB: かんしゃのきもちでいっぱいです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Volunteers are supporting the community.\nB: I am full of gratitude.\nA: How long did it take?\nB: About two hours.",
     funFact:"ささえる captures physical support (holding up a structure) and emotional/financial support. ささえあう (to support each other) is a key Japanese social concept. After disasters, the phrase がんばろうにほん (let's stay strong, Japan) and ささえあおう (let's support each other) unite communities."},

    {type:"teach", trg:"かんしゃ", src:"gratitude / appreciation", pos:"noun", gender:null,
     note:"Kanji: 感謝. かんしゃする = to be grateful.\nかんしゃのきもち = feelings of gratitude.",
     example:"A: いつもおせわになっています。かんしゃしています。\nB: こちらこそ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: You always take care of me. I am grateful.\nB: Likewise.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"かんしゃ (感謝) culture permeates Japanese life. Handwritten かんしゃのてがみ (thank-you letters) are common. Companies hold かんしゃさい (appreciation events). The phrase かんしゃのきもちをわすれない (never forget the feeling of gratitude) is taught to children. Gratitude is considered the foundation of good character."},

    {type:"fb", s:"みなさんの{1}がひつようです。\n(Everyone's cooperation is needed.)", a:"きょうりょく", opts:["きょうりょく","さんか","もよおし","ボランティア"], sSrc:"Everyone's cooperation is needed.",
     hint:"The noun meaning working together or collaborating for a common goal."},

    {type:"mc", q:"やくにたつ means:", opts:["To be useful or helpful","To gather together","To support someone","To volunteer"], ans:"To be useful or helpful",
     hint:"This expression literally means 'to stand in a u... role.'"},

    {type:"match", pairs:[
      {trg:"ちいき", src:"local community"},
      {trg:"ボランティア", src:"volunteer"},
      {trg:"つながり", src:"connection / bond"},
      {trg:"ささえる", src:"to support"},
      {trg:"かんしゃ", src:"gratitude"}
    ]},

    {type:"fb", s:"このけいけんはかならず{1}ちます。\n(This experience will definitely be useful.)", a:"やくにた", opts:["やくにた","さんかし","あつまり","きょうりょくし"], sSrc:"This experience will definitely be useful.",
     hint:"The verb form meaning 'to be useful,' combining やく, に, and たつ."},

    {type:"mc", q:"あつまる describes:", opts:["People coming together in one place","One person leaving","Distributing items","Cleaning up"], ans:"People coming together in one place",
     hint:"This intransitive verb describes the act of gathering."}
  ]
};
export default BATCH6_L1;
