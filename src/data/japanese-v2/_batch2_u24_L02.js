// Unit 24 Batch 2 Lesson 2: フォーマルなつなぎ (Formal Linking Expressions)
const BATCH2_L_2 = {
  id:"jav2_u24l_b2_2", title:"フォーマルなつなぎ", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"フォーマルなつなぎ",
     desc:"Complete your connector toolkit with formal expressions for reasoning, exemplification, and emphasis. These advanced linking words separate intermediate writing from polished, professional Japanese.",
     goals:["Use formal reasoning connectors (のため, ことから)","Express examples and emphasis in formal style","Master transition phrases for smooth paragraph flow"]},

    {type:"teach", trg:"〜ことから", src:"from the fact that ~ / because ~", pos:"part", gender:null,
     note:"Verb/adjective + ことから = based on the fact that.\nExpresses reasoning from evidence. Formal and analytical.",
     example:"A: 日本(にほん)は地震(じしん)が多(おお)いことから、建物(たてもの)は耐震(たいしん)設計(せっけい)です。\nB: なるほど、安全(あんぜん)を考(かんが)えていますね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: From the fact that Japan has many earthquakes, buildings are seismically designed.\nB: I see, they consider safety.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ことから provides evidence-based reasoning. It literally means 'from the matter of,' presenting a fact and then its logical consequence. Academic papers use it extensively: 'from the fact that X, we can conclude Y.' It is more formal than だから and more specific than ので."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~ / on the basis of ~", pos:"part", gender:null,
     note:"Noun + にもとづいて = based on. 漢字(かんじ): に基(もと)づいて.\nもとづく = to be based on.",
     example:"A: データにもとづいて判断(はんだん)しましょう。\nB: 感情(かんじょう)ではなく、事実(じじつ)が大事(だいじ)ですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Let us make judgments based on data.\nB: Facts, not emotions, are important.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"に基づいて is the gold standard for evidence-based arguments. 基(もと) means 'foundation' and 付(つ)く means 'attach to,' so literally 'attaching to a foundation.' It signals rigor and objectivity. データにもとづいて (based on data) is a phrase that earns credibility in any Japanese professional context."},

    {type:"teach", trg:"すなわち", src:"namely / that is / in other words", pos:"conj", gender:null,
     note:"Very formal rephrasing connector. More precise than つまり.\nUsed in academic and legal writing.",
     example:"A: 日本(にほん)の首都(しゅと)すなわち東京(とうきょう)は、世界(せかい)最大(さいだい)の都市(とし)です。\nB: 人口(じんこう)が1,400万人(まんにん)ですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Japan's capital, namely Tokyo, is the world's largest city.\nB: The population is 14 million.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"すなわち is the most formal rephrasing word, found in legal documents, academic papers, and encyclopedias. It precisely identifies or defines: 'A, namely B.' In casual speech it sounds stiff, but in writing it adds precision and authority. It is the Japanese equivalent of Latin 'id est' (i.e.)."},

    {type:"teach", trg:"〜にかんして", src:"regarding ~ / concerning ~ / with regard to ~", pos:"part", gender:null,
     note:"Noun + にかんして = regarding. 漢字(かんじ): に関(かん)して.\nMore formal than について.",
     example:"A: この件(けん)にかんしてはもう少(すこ)し調査(ちょうさ)が必要(ひつよう)です。\nB: いつまでに調査(ちょうさ)しますか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Regarding this matter, a bit more investigation is needed.\nB: By when will the investigation be done?\nA: How long did it take?\nB: About two hours.",
     funFact:"に関して is the formal upgrade of について. While both mean 'regarding,' に関して is preferred in business correspondence, academic papers, and official documents. The kanji 関(かん) means 'barrier/gate,' suggesting a topic you are entering into. にかんする (adjectival form) modifies nouns: この問題(もんだい)にかんする研究(けんきゅう) (research concerning this problem)."},

    {type:"mc", q:"日本(にほん)は地震(じしん)が多(おお)いことから、建物(たてもの)は耐震(たいしん)設計(せっけい)です means:", opts:["From the fact that Japan has many earthquakes, buildings are seismically designed","Earthquake design is unnecessary in Japan","Buildings cause earthquakes in Japan","Japan has few earthquakes because of building design"], ans:"From the fact that Japan has many earthquakes, buildings are seismically designed",
     hint:"ことから presents a f... and its logical consequence: because of X, Y follows."},

    {type:"teach", trg:"耐震(たいしん)", src:"earthquake resistance / seismic resistance", pos:"noun", gender:null,
     note:"耐(たい) (resist) + 震(しん) (earthquake).\n耐震(たいしん)設計(せっけい) = seismically designed.",
     example:"A: このビルは耐震(たいしん)基準(きじゅん)を満(み)たしています。\nB: 安心(あんしん)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: This building meets earthquake resistance standards.\nB: That is reassuring.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"耐震 is essential infrastructure vocabulary in Japan. All buildings must meet strict 耐震(たいしん)基準(きじゅん) (taishin kijun, seismic standards). After major earthquakes, building codes are regularly strengthened. Japanese construction technology for earthquake resistance is among the world's most advanced, a direct result of living on the Ring of Fire."},

    {type:"teach", trg:"〜をはじめ", src:"starting with ~ / including ~ and others", pos:"part", gender:null,
     note:"Noun + をはじめ = starting with X (and others).\nLists a representative example from a larger group.",
     example:"A: 東京(とうきょう)をはじめ、大阪(おおさか)や名古屋(なごや)でも地震(じしん)対策(たいさく)が進(すす)んでいます。\nB: 全国的(ぜんこくてき)な取(と)り組(く)みですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Starting with Tokyo, earthquake measures are advancing in Osaka, Nagoya, and other cities.\nB: It is a nationwide effort.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"をはじめ elegantly lists a primary example before adding others. It literally means 'beginning with X.' This connector is common in news and presentations for listing: 日本(にほん)をはじめ、中国(ちゅうごく)や韓国(かんこく)でも (starting with Japan, also in China and Korea). It implies the list is representative, not exhaustive."},

    {type:"fb", s:"データ{1}判断(はんだん)しましょう。\n(Let us make judgments based on data.)", a:"にもとづいて", opts:["にもとづいて","について","にかんして","ことから"], sSrc:"Let us make judgments based on data.",
     hint:"The formal connector meaning 'based on,' emphasizing evidence as a foundation for judgment."},

    {type:"teach", trg:"〜以上(いじょう)のことから", src:"from the above / based on what has been discussed", pos:"part", gender:null,
     note:"以上(いじょう) (the above) + のことから (from the matters of).\nConclusion opener in essays and presentations.",
     example:"A: 以上(いじょう)のことから、改革(かいかく)が必要(ひつよう)だと考(かんが)えます。\nB: 説得力(せっとくりょく)のある結論(けつろん)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: From the above, I believe reform is necessary.\nB: That is a persuasive conclusion.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"以上(いじょう)のことから bridges the body of an essay to its conclusion. 以上(いじょう) (以上, the above) refers to everything previously discussed. This phrase says: 'taking all the above into account, I conclude...' It is a polished way to demonstrate that your conclusion follows logically from your arguments."},

    {type:"teach", trg:"〜をふまえて", src:"taking ~ into account / based on / considering ~", pos:"part", gender:null,
     note:"Noun + をふまえて = stepping on/building upon.\n漢字(かんじ): を踏(ふ)まえて. ふまえる = to stand on, to base on.",
     example:"A: これまでの経験(けいけん)をふまえて、提案(ていあん)します。\nB: 期待(きたい)しています。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Taking previous experience into account, I will make a proposal.\nB: I look forward to it.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"をふまえて uses 踏(ふ)まえる (to step on/stand upon). The metaphor is powerful: you are standing on a foundation of evidence before making your next move. It is more dynamic than にもとづいて (based on), implying active use of past knowledge. Business presentations love this phrase: 'standing on our experience, we propose...'"},

    {type:"teach", trg:"説得力(せっとくりょく)", src:"persuasiveness / power to convince", pos:"noun", gender:null,
     note:"説得(せっとく) (persuasion) + 力(りょく) (power).\n説得力(せっとくりょく)がある = to be persuasive.",
     example:"A: このプレゼンは説得力(せっとくりょく)があります。\nB: データにもとづいているからですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This presentation is persuasive.\nB: Because it is based on data.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"説得力 combines 説得(せっとく) (persuasion) and 力(りょく) (power). Having 説得力(せっとくりょく) is considered a high compliment for any argument or presentation. The word implies that your reasoning moves people, not through emotion alone, but through solid logic and evidence. Building 説得力(せっとくりょく) is a key goal of Japanese education from high school onward."},

    {type:"mc", q:"をはじめ is used to:", opts:["End a list","Introduce a representative example from a larger group","Express disagreement","Signal a conclusion"], ans:"Introduce a representative example from a larger group",
     hint:"This connector names one prominent e... and implies there are more: 'starting with X, also Y and Z.'"},

    {type:"tip", title:"Formal Connectors Summary",
     text:"Evidence and reasoning:\nことから = from the fact that\nにもとづいて = based on\nをふまえて = taking into account\n\nSpecification and examples:\nすなわち = namely (precise)\nにかんして = regarding (formal)\nをはじめ = starting with (representative example)\n\nConclusion:\n以上(いじょう)のことから = from the above\n結論(けつろん)として = in conclusion\nようするに = in short\n\nThese connectors transform basic arguments into structured, persuasive writing.",
     deepDive:{title:"Building Persuasive Arguments in Japanese",
      text:"A persuasive Japanese argument follows this pattern:\n\n1. State your topic: にかんして (regarding X)\n2. Present evidence: ことから (from the fact that)\n3. Add support: にくわえて (in addition)\n4. Cite basis: にもとづいて (based on data)\n5. Give examples: をはじめ (starting with)\n6. Draw conclusion: 以上(いじょう)のことから (from the above)\n\nThe key principle: let evidence lead to the conclusion, not the other way around. Japanese argumentation values building toward a conclusion through accumulated evidence rather than stating a thesis and defending it, though both styles exist."}},

    {type:"match", pairs:[{trg:"ことから",src:"from the fact that"},{trg:"にもとづいて",src:"based on"},{trg:"すなわち",src:"namely"},{trg:"にかんして",src:"regarding (formal)"}]},

    {type:"fb", s:"{1}のことから、改革(かいかく)が必要(ひつよう)だと考(かんが)えます。\n(From the above, I believe reform is necessary.)", a:"以上(いじょう)", opts:["以上(いじょう)","つまり","はじめ","すなわち"], sSrc:"From the above, I believe reform is necessary.",
     hint:"The word meaning 'the above' that opens the conclusion of a structured essay or presentation."},

    {type:"match", pairs:[{trg:"をはじめ",src:"starting with"},{trg:"をふまえて",src:"taking into account"},{trg:"以上(いじょう)のことから",src:"from the above"},{trg:"説得力(せっとくりょく)",src:"persuasiveness"}]},

    {type:"mc", q:"をふまえて differs from にもとづいて because:", opts:["をふまえて is for negatives only","They are identical","をふまえて implies actively building upon past knowledge; にもとづいて simply states a foundation","をふまえて is casual; にもとづいて is formal"], ans:"をふまえて implies actively building upon past knowledge; にもとづいて simply states a foundation",
     hint:"踏(ふ)まえて (step u...) is more dynamic than 基(もと)づいて (be based on). One a... builds; the other s... references."},
  {type:"match",pairs:[{trg:"耐震(たいしん)",src:"earthquake resistance / seismic resistance"}]},
  {type:"fb", s:"この建物(たてもの)は最新(さいしん)の{1}設計(せっけい)で建(た)てられています。", a:["耐震(たいしん)"], opts:["耐震(たいしん)","すなわち","〜にもとづいて","〜ことから"], hint:"The engineering property that allows a building to withstand seismic shaking.", sSrc:"This building was constructed with the latest {1} design."}
]
};
export default BATCH2_L_2;
