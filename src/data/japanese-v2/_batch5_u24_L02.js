// Unit 24 Batch 5 Lesson 2: 論理(ろんり)のつなぎ (Cause, Condition & Logical Connectors)
const BATCH5_L_2 = {
  id:"jav2_u24l_b5_2", title:"論理(ろんり)のつなぎ", icon:"🧩", xp:15, board:true,
  steps:[
    {type:"intro", title:"論理(ろんり)のつなぎ",
     desc:"Complete your connector arsenal with causal, conditional, and logical connectors. そのため (for that reason), それゆえ (hence), たとえ...ても (even if), かぎり (as long as). These patterns are essential for building logical arguments in essays, presentations, and formal discussion.",
     goals:["Use そのため and それゆえ for formal causation","Use たとえ...ても for concessive conditions","Use かぎり for scope and limitations"]},

    {type:"teach", trg:"そのため", src:"for that reason / therefore / because of that", pos:"conj", gender:null,
     note:"Less formal than したがって, more formal than だから.\nそのためには = in order to achieve that.",
     example:"A: 今年(ことし)は雨(あめ)が少(すく)なかったです。そのため、水道水(すいどうすい)が不足(ふそく)しています。\nB: 水(みず)の節約(せつやく)が必要(ひつよう)ですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: There was little rain this year. For that reason, tap water is in short supply.\nB: Water conservation is necessary.\nA: How was it?\nB: It was very good.",
     funFact:"そのため is the Goldilocks causal connector: not too casual (だから), not too formal (したがって). It appears in news articles, textbooks, business reports, and presentations. It clearly points back to the previous sentence as the cause. そのためには (in order to achieve that) shifts to purpose, introducing solutions to previously stated problems."},

    {type:"teach", trg:"そこで", src:"so / therefore / that being the case", pos:"conj", gender:null,
     note:"Introduces an action taken in response to a situation.\nDifferent from だから: そこで implies 'so I/we did X.'",
     example:"A: 電車(でんしゃ)が止(と)まりました。そこで、タクシーで行(い)くことにしました。\nB: 賢明(けんめい)な判断(はんだん)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: The train stopped. So, I decided to go by taxi.\nB: That was a wise decision.\nA: When was it?\nB: It was last summer.",
     funFact:"そこで literally means 'at that point/place' (そこ = there + で = at). Unlike だから (causal), そこで introduces an ACTION taken in response. The train stopped (situation), そこで I took a taxi (action). It moves the narrative forward. In formal proposals, そこで introduces a solution: 'given this problem, そこで we propose...'"},

    {type:"teach", trg:"たとえ〜ても", src:"even if ~ / no matter how ~", pos:"part", gender:null,
     note:"たとえ + condition + ても. Strong concessive.\nたとえ雨(あめ)が降(ふ)っても行(い)きます = even if it rains, I will go.",
     example:"A: たとえ失敗(しっぱい)しても諦(あきら)めません。\nB: そのいきです。頑張(がんば)ってください。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Even if I fail, I will not give up.\nB: That is the spirit. Do your best.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"たとえ...ても is the strongest concessive pattern. たとえ (even supposing) sets up a hypothetical obstacle, and ても (even if) confirms it does not change the result. It appears in dramatic declarations: たとえ世界(せかい)を敵(てき)に回(まわ)しても (even if I make the world my enemy). In everyday use: たとえ忙(いそが)しくても電話(でんわ)してね (even if you are busy, call me)."},

    {type:"teach", trg:"〜かぎり", src:"as long as / as far as / to the extent that", pos:"part", gender:null,
     note:"Dictionary/ている/ない + かぎり. Defines a scope or condition.\nKanji: 限(かぎ)り. できるかぎり = as much as possible.",
     example:"A: 健康(けんこう)であるかぎり働(はたら)き続(つづ)けたいです。\nB: 無理(むり)をしないでくださいね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: As long as I am healthy, I want to keep working.\nB: Please do not overdo it.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"限(かぎ)り uses the kanji for 'limit.' As a grammar pattern, かぎり sets boundaries: within these limits, something holds true. できるかぎり (to the extent possible) is one of the most useful phrases for promises and requests. 私(わたし)の知(し)るかぎり (as far as I know) hedges statements. It elegantly defines the scope of one's commitment or knowledge."},

    {type:"mc", q:"たとえしっぱいしてもあきらめない means:", opts:["Even if I fail, I will not give up","I failed, so I gave up","If I do not fail, I will continue","I am afraid of failing"], ans:"Even if I fail, I will not give up",
     hint:"たとえ...ても creates a strong concessive: 'e... if X happens, Y remains unchanged.'"},

    {type:"teach", trg:"〜にともなって", src:"along with / accompanying / as ~ changes", pos:"part", gender:null,
     note:"Noun/verb + にともなって. Formal pattern for correlated changes.\nKanji: に伴(ともな)って. Two things change together.",
     example:"A: 人口(じんこう)の増加(ぞうか)にともなって、住宅問題(じゅうたくもんだい)が深刻(しんこく)になっています。\nB: 都会(とかい)ではとくにそうですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Along with population increase, housing problems are becoming serious.\nB: That is especially true in cities.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"に伴(ともな)って is formal academic and news language. 伴 means 'accompany,' so the pattern means 'accompanying X, Y also changes.' It describes correlated phenomena: 技術(ぎじゅつ)の進歩(しんぽ)にともなって (along with technological progress), 高齢化(こうれいか)にともなって (accompanying population aging). It appears frequently in JLPT N2 reading passages about social trends."},

    {type:"teach", trg:"〜にしたがって", src:"as ~ / in accordance with / following", pos:"part", gender:null,
     note:"Verb dictionary/noun + にしたがって. Proportional change.\nKanji: に従(したが)って. As X increases, Y increases.",
     example:"A: 気温(きおん)が上(あ)がるにしたがってアイスクリームの売(う)り上(あ)げが増(ふ)えます。\nB: 夏(なつ)はアイスが一番(いちばん)売(う)れますね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: As the temperature rises, ice cream sales increase.\nB: Summer is when ice cream sells best.\nA: How long did it take?\nB: About two hours.",
     funFact:"に従(したが)って uses したがう (to follow/obey). As a grammar pattern, it describes proportional changes: as one thing changes, another follows suit. It is the pattern for trend descriptions: 日本語(にほんご)がうまくなるにしたがって (as Japanese improves), 年齢(ねんれい)が上(あ)がるにしたがって (as age increases). JLPT loves testing this pattern in reading comprehension."},

    {type:"teach", trg:"賢明(けんめい)", src:"wise / sensible / prudent", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 賢明(けんめい). 賢明(けんめい)な判断(はんだん) = wise decision.\n賢明(けんめい)な選択(せんたく) = sensible choice.",
     example:"A: 事態(じたい)が変(か)わるまで待(ま)つのが賢明(けんめい)です。\nB: 焦(あせ)ってもいい結果(けっか)にはなりませんね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: It is wise to wait until the situation changes.\nB: Rushing will not produce good results.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"賢明 combines 賢 (wise/clever) and 明 (bright/clear). It describes decisions made with good judgment. In Japanese business, being 賢明(けんめい) is more valued than being bold or creative. Conservative, well-reasoned choices are praised as 賢明(けんめい). The phrase 賢明(けんめい)な判断(はんだん) (wise decision) is the highest compliment for decision-making in professional contexts."},

    {type:"teach", trg:"判断(はんだん)", src:"judgment / decision / assessment", pos:"noun", gender:null,
     note:"Kanji: 判断(はんだん). 判断(はんだん)する = to judge/decide.\n判断力(はんだんりょく) = judgment ability.",
     example:"A: 最終的(さいしゅうてき)な判断(はんだん)は誰(だれ)がしますか？\nB: 社長(しゃちょう)が判断(はんだん)します。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Who makes the final decision?\nB: The president decides.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"判断 uses 判 (judge/seal) and 断 (cut/decide). The kanji 判 originally depicted cutting something in half to examine both sides, perfect for fair judgment. 判断力(はんだんりょく) (judgment power) is tested in JLPT and valued in business. The phrase 自己判断(じこはんだん) (self-judgment/discretion) means deciding based on your own assessment."},

    {type:"tip", title:"Causal & Logical Connector Summary",
     text:"CAUSE connectors (casual to formal):\nだから → そのため → したがって → それゆえ\n\nACTION in response:\nそこで = so (I did X in response)\n\nCONCESSIVE (even if):\nたとえ...ても = even if / no matter how\n\nSCOPE (as long as):\nかぎり = to the extent / as long as\n\nPROPORTIONAL change:\nにともなって = along with (correlated change)\nにしたがって = as ~ (proportional change)\n\nRegister matters: Casual speech uses だから and でも. Formal writing uses したがって, そのため, にもかかわらず."},

    {type:"teach", trg:"事態(じたい)", src:"situation / state of affairs / circumstances", pos:"noun", gender:null,
     note:"Kanji: 事態(じたい). 緊急事態(きんきゅうじたい) = emergency situation.\n事態(じたい)が悪化(あっか)する = the situation worsens.",
     example:"A: 事態(じたい)は思(おも)ったより深刻(しんこく)です。\nB: 早(はや)めに対策(たいさく)をとるべきですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: The situation is more serious than expected.\nB: We should take countermeasures early.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"事態 uses 事 (matter) and 態 (condition/state). It describes the state of a situation, often problematic. 緊急事態(きんきゅうじたい) (emergency) triggers government action. 事態宣言(じたいせんげん) (state of emergency declaration) became familiar during the pandemic. The word carries weight and urgency, used when something requires serious attention."},

    {type:"fb", s:"電車(でんしゃ)が止(と)まりました。{1}、タクシーで行(い)くことにしました。\n(The train stopped. So, I decided to go by taxi.)", a:"そこで", opts:["そこで","だから","しかし","そのうえ"], sSrc:"The train stopped. So, I decided to go by taxi.",
     hint:"The connector that introduces an action taken in response to a situation."},

    {type:"mc", q:"できるかぎり means:", opts:["As much as possible / to the extent one can","Definitely / absolutely","Slightly / a little","Never / not at all"], ans:"As much as possible / to the extent one can",
     hint:"かぎり (limit) combined with できる (can do) means 'to the limit of what is p....'"},

    {type:"match", pairs:[{trg:"そのため",src:"for that reason"},{trg:"そこで",src:"so (I did in response)"},{trg:"たとえ...ても",src:"even if"},{trg:"かぎり",src:"as long as / to the extent"}]},

    {type:"fb", s:"気温(きおん)が上(あ)がる{1}アイスクリームの売(う)り上(あ)げが増(ふ)えます。\n(As temperature rises, ice cream sales increase.)", a:"にしたがって", opts:["にしたがって","にもかかわらず","にたいして","にとって"], sSrc:"As temperature rises, ice cream sales increase.",
     hint:"The pattern meaning 'following/in accordance with,' describing proportional change."},

    {type:"mc", q:"にともなって describes:", opts:["Two things that change together (correlated)","Opposite changes","Unrelated events","Past and future"], ans:"Two things that change together (correlated)",
     hint:"伴う means 'to accompany,' so this pattern describes changes that go hand in hand."}
  ,{type:"match",pairs:[{trg:"たとえ〜ても",src:"even if ~ / no matter how ~"},{trg:"〜にともなって",src:"along with / accompanying / as ~ changes"},{trg:"賢明(けんめい)",src:"wise / sensible / prudent"},{trg:"判断(はんだん)",src:"judgment / decision / assessment"},{trg:"事態(じたい)",src:"situation / state of affairs / circumstances"}]}]
};
export default BATCH5_L_2;
