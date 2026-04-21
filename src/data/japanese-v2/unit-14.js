// Japanese V2 Unit 14. いけん (Opinions)
import BATCH11_L1 from './_batch11_u14_L01.js';
import BATCH10_L1 from './_batch10_u14_L01.js';
import BATCH9_L1 from './_batch9_u14_L01.js';
import BATCH7_L1 from './_batch7_u14_L01.js';
import BATCH8_L1 from './_batch8_u14_L01.js';
import BATCH6_L1 from './_batch6_u14_L01.js';
import BATCH4_L02 from './_batch4_u14_L02.js';
import BATCH4_L01 from './_batch4_u14_L01.js';
import BATCH2_L1 from './_batch2_u14_L01.js';
// Level: A2.2. JLPT N4 aligned.
import JEXP_14_L1 from './_temp_u14_expand_L01.js';import JEXP_14_L2 from './_temp_u14_expand_L02.js';import JEXP_14_L3 from './_temp_u14_expand_L03.js';
// と思う, と言う, でしょう, かもしれない.

const UNIT_14 = {
  n:14, lang:"ja", srcLang:"en", track:"v2",
  title:"意見(いけん)", sub:"Opinions",
  icon:"💭", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: と思(おも)う (I Think That...) ═══
{id:"jav2_u14l1", title:"と思(おも)う", icon:"🤔", xp:15, board:true, steps:[
  {type:"intro", title:"と思(おも)う",
   desc:"Learn to express your opinions and report what others say. The particle と marks quoted thoughts and speech. Combined with おもう (think) and いう (say), it opens up a whole new layer of expression.",
   goals:["Express opinions with と思う (I think that...)","Report speech with と言う (someone said that...)","Understand the quoting particle と"]},

  {type:"teach", trg:"〜と思(おも)う", src:"I think that ~", pos:"part", gender:null,
   note:"Plain form + とおもう = I think that...\nPolite: とおもいます. Used for personal opinions.",
   example:"A: 日本語(にほんご)は難(むずか)しいと思(おも)いますか？\nB: 少(すこ)し難(むずか)しいと思(おも)います。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Do you think Japanese is difficult?\nB: I think it is a little difficult.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"The particle と is a quotation marker. It frames everything before it as a thought or statement. Unlike English, Japanese places the quoted content first and the verb of thinking/saying at the end. This mirrors the general verb-final structure of Japanese."},

  {type:"teach", trg:"思(おも)う", src:"to think", pos:"verb", gender:null,
   note:"Group 1 verb. おもう = to think, to feel, to believe.\nKanji: 思う. て-form: 思(おも)って.",
   example:"A: どう思(おも)いますか？\nB: いいと思(おも)います。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: What do you think?\nB: I think it is good.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"思う contains the kanji 思, which combines 田 (field/brain) and 心 (heart). Thinking in Japanese is literally a heart-mind activity. The phrase dou omoimasu ka (what do you think?) is essential for discussions and decision-making."},

  {type:"teach", trg:"〜と言(い)う", src:"is called ~ / someone said ~", pos:"part", gender:null,
   note:"Two uses: quoting speech (X said...) and naming (it is called...).\nKanji: と言う.",
   example:"A: 先生(せんせい)は何(なん)と言(い)いましたか？\nB: 明日(あした)テストがあると言(い)いました。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: What did the teacher say?\nB: She said there is a test tomorrow.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"と言う has a dual personality. As a speech verb: 'Tanaka said...' As a naming device: '寿司というたべもの' means 'a food called sushi.' The naming use is extremely common for introducing new words and concepts to someone."},

  {type:"teach", trg:"言(い)う", src:"to say / to be called", pos:"verb", gender:null,
   note:"Group 1 verb. いう = to say. Often written as 言う in kanji.\nて-form: 言(い)って.",
   example:"A: 日本語(にほんご)で「ありがとう」と言(い)います。\nB: ああ、それは知(し)っています。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: In Japanese, we say 'arigatou.'\nB: Ah, I know that.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"いう is one of the most frequently used verbs in Japanese. It appears in set phrases like そういう (that kind of), ああいう (that sort of), and the humble form もうす. The kanji 言 shows sound waves coming from a mouth."},

  {type:"mc", q:"日本語(にほんご)は難(むずか)しいと思(おも)います means:", opts:["I think Japanese is difficult","I am studying Japanese","Japanese is definitely difficult","Japanese is easy"], ans:"I think Japanese is difficult",
   hint:"The とおもいます pattern expresses a personal opinion or belief."},

  {type:"teach", trg:"難(むずか)しい", src:"difficult", pos:"adj", gender:null,
   note:"い-adjective. Opposite: やさしい/簡単(かんたん) (easy).\nKanji: 難しい.",
   example:"A: この問題(もんだい)は難(むずか)しいと思(おも)いますか？\nB: いいえ、簡単(かんたん)だと思(おも)います。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: Do you think this problem is difficult?\nB: No, I think it is easy.\nA: How was it?\nB: It was very good.",
   funFact:"難しい uses the kanji 難, which is itself notoriously difficult to write with 18 strokes. There is a beautiful irony in the fact that the word for 'difficult' uses one of the hardest kanji. Japanese learners often joke about this."},

  {type:"teach", trg:"簡単(かんたん)", src:"easy / simple", pos:"adj", gender:null,
   note:"な-adjective. Opposite of 難(むずか)しい. 簡単(かんたん)な + noun.\nKanji: 簡単.",
   example:"A: 日本語(にほんご)は簡単(かんたん)だと思(おも)いますか？\nB: 発音(はつおん)は簡単(かんたん)だと思(おも)います。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Do you think Japanese is easy?\nB: I think the pronunciation is easy.\nA: When was it?\nB: It was last summer.",
   funFact:"簡単 has an interesting grammatical note: as a な-adjective, it needs だ before と in the opinion pattern. So it is かんたんだとおもう, not かんたんとおもう. This だ insertion for な-adjectives and nouns is a common JLPT N4 test point."},

  {type:"fb", s:"日本語(にほんご)は面白(おもしろ)い{1}思(おも)います。\n(I think Japanese is interesting.)", a:"と", opts:["と","を","が","に"], sSrc:"I think Japanese is interesting.",
   hint:"The quotation particle that marks the content of a thought or statement."},

  {type:"teach", trg:"正(ただ)しい", src:"correct / right", pos:"adj", gender:null,
   note:"い-adjective. Used for correctness of answers, behavior, grammar.\nKanji: 正しい.",
   example:"A: この答(こた)えは正(ただ)しいと思(おも)いますか？\nB: はい、正(ただ)しいと思(おも)います。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Do you think this answer is correct?\nB: Yes, I think it is correct.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"正しい uses the kanji 正, which means 'correct' or 'proper.' The kanji shows a foot stopping at a line, meaning 'stopping at the right place.' It appears in many compounds: 正月 (New Year), 正直 (honest), 正式 (formal/official)."},

  {type:"teach", trg:"違(ちが)う", src:"to be different / to be wrong", pos:"verb", gender:null,
   note:"Group 1 verb. Used to politely say someone is wrong.\nKanji: 違う. て-form: 違(ちが)って.",
   example:"A: これはあなたのかばんですか？\nB: いいえ、違(ちが)います。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: Is this your bag?\nB: No, that is not mine. (Lit: it is different.)\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"ちがう is the gentle Japanese way to say 'no, you are wrong.' Rather than directly saying 'wrong,' Japanese says 'it differs.' ちがいます is softer than いいえ and is used constantly in daily conversation. It can also genuinely mean 'to be different.'"},

  {type:"mc", q:"先生(せんせい)は明日(あした)テストがあると言(い)いました means:", opts:["The teacher thought about a test","The teacher said there is a test tomorrow","The teacher took a test","The teacher likes tests"], ans:"The teacher said there is a test tomorrow",
   hint:"The と言(い)いました pattern reports what someone s...."},

  {type:"match", pairs:[{trg:"と思(おも)う",src:"I think"},{trg:"と言(い)う",src:"is called / said"},{trg:"難(むずか)しい",src:"difficult"},{trg:"簡単(かんたん)",src:"easy"}]},

  {type:"fb", s:"先生(せんせい)は何(なん){1}言(い)いましたか？\n(What did the teacher say?)", a:"と", opts:["と","を","に","で"], sSrc:"What did the teacher say?",
   hint:"The particle that connects quoted speech to the verb of saying."},

  {type:"match", pairs:[{trg:"正(ただ)しい",src:"correct"},{trg:"違(ちが)う",src:"different / wrong"},{trg:"思(おも)う",src:"to think"},{trg:"言(い)う",src:"to say"}]},

  {type:"mc", q:"違(ちが)います is a gentle way to say:", opts:["yes","thank you","no / that is wrong","I do not know"], ans:"no / that is wrong",
   hint:"Literally meaning 'it differs,' this is used instead of directly saying 'w....'"},
]},

// ═══ L2: たぶん (Probably) ═══
{id:"jav2_u14l2", title:"たぶん", icon:"🔮", xp:15, board:true, steps:[
  {type:"intro", title:"たぶん",
   desc:"Not everything is certain. Learn to express probability with でしょう (probably), possibility with かもしれない (might), and soften your speech with uncertainty markers. These patterns make your Japanese sound more natural and nuanced.",
   goals:["Express probability with でしょう","Express possibility with かもしれない","Use たぶん (probably) to soften statements"]},

  {type:"teach", trg:"でしょう", src:"probably / I think / right?", pos:"part", gender:null,
   note:"Added after plain form. Expresses probability or seeks confirmation.\nFormal version of だろう.",
   example:"A: 明日(あした)は雨(あめ)でしょう。\nB: そうですか。傘(かさ)を持(も)っていきます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: It will probably rain tomorrow.\nB: Is that so? I will bring an umbrella.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"でしょう has two very different uses depending on intonation. With falling intonation, it means 'probably': あめでしょう (it will probably rain). With rising intonation, it means 'right?': いいでしょう？(It is nice, right?). The casual form だろう is used by male speakers."},

  {type:"teach", trg:"かもしれない", src:"might / maybe", pos:"part", gender:null,
   note:"Plain form + かもしれない = might. Expresses lower certainty than でしょう.\nPolite: かもしれません.",
   example:"A: 明日(あした)雪(ゆき)が降(ふ)るかもしれません。\nB: 本当(ほんとう)ですか？寒(さむ)いですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: It might snow tomorrow.\nB: Really? It is cold, is it not.\nA: How long did it take?\nB: About two hours.",
   funFact:"かもしれない literally breaks down as かも (even/also) + しれない (cannot know). So the full meaning is 'it cannot be known whether or not.' This etymology shows the Japanese preference for expressing uncertainty through the limits of knowledge rather than direct hedging."},

  {type:"teach", trg:"多分(たぶん)", src:"probably / maybe", pos:"adv", gender:null,
   note:"An adverb placed at the beginning of a sentence. Softer than definitely.\nKanji: 多分.",
   example:"A: 多分(たぶん)雨(あめ)が降(ふ)ると思(おも)います。\nB: じゃ、傘(かさ)を持(も)っていきましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: I think it will probably rain.\nB: Then let us bring umbrellas.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"多分 literally means 'much part,' suggesting 'for the most part.' It sits in the middle of the certainty scale: きっと (surely, 90%) > たぶん (probably, 70%) > もしかしたら (perhaps, 40%). Using the right level of certainty is important in Japanese communication."},

  {type:"mc", q:"明日(あした)は雨(あめ)でしょう means:", opts:["It will probably rain tomorrow","It is raining now","It rained yesterday","I want rain tomorrow"], ans:"It will probably rain tomorrow",
   hint:"でしょう expresses probability, like an educated guess about the future."},

  {type:"teach", trg:"だろう", src:"probably (casual)", pos:"part", gender:null,
   note:"Casual form of でしょう. More commonly used by male speakers.\nSame meaning, different register.",
   example:"A: 明日(あした)はいい天気(てんき)だろう。\nB: そうだといいね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: Tomorrow will probably be nice weather.\nB: I hope so.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"だろう and でしょう are the same grammar point at different politeness levels. だろう appears frequently in novels, manga, and casual male speech. The question form だろう？(right?) is very common in informal conversation among friends."},

  {type:"teach", trg:"絶対(ぜったい)", src:"definitely / absolutely", pos:"adv", gender:null,
   note:"Strongest certainty. 絶対(ぜったい)に = without fail.\nKanji: 絶対.",
   example:"A: あの映画(えいが)は絶対(ぜったい)面白(おもしろ)いと思(おも)う。\nB: じゃ、見(み)に行(い)こう！\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: I think that movie is definitely interesting.\nB: Then let us go see it!\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"絶対 combines 絶 (sever/extreme) and 対 (oppose/versus), creating the meaning 'absolutely/without exception.' ぜったいに (definitely) is the strongest certainty adverb, while ぜったいに...ない (absolutely not) is the strongest denial."},

  {type:"teach", trg:"きっと", src:"surely / certainly", pos:"adv", gender:null,
   note:"High confidence, slightly softer than 絶対(ぜったい). Often expresses hope or expectation.\nAbout 90% certain.",
   example:"A: きっと大丈夫(だいじょうぶ)ですよ。\nB: ありがとう。そうだといいです。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: I am sure it will be fine.\nB: Thank you. I hope so.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"きっと carries emotional warmth that たぶん lacks. Saying きっとうまくいく (it will surely go well) is encouraging, while たぶんうまくいく (it will probably go well) sounds less committed. Use きっと when you want to reassure someone."},

  {type:"fb", s:"明日(あした)雪(ゆき)が降(ふ)る{1}。\n(It might snow tomorrow.)", a:"かもしれません", opts:["かもしれません","でしょう","です","ました"], sSrc:"It might snow tomorrow.",
   hint:"The pattern expressing possibility ('cannot be known whether'), polite form."},

  {type:"teach", trg:"天気(てんき)", src:"weather", pos:"noun", gender:null,
   note:"General weather. いい天気(てんき) = nice weather, 悪(わる)い天気(てんき) = bad weather.\nKanji: 天気.",
   example:"A: 明日(あした)の天気(てんき)はどうでしょう？\nB: 多分(たぶん)晴(は)れると思(おも)います。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: What will the weather be like tomorrow?\nB: I think it will probably be sunny.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"天気 combines 天 (heaven/sky) and 気 (spirit/air). Weather is a universal conversation starter in Japan too. てんきよほう (weather forecast) is watched religiously. Japan's weather varies dramatically: subtropical Okinawa, snowy Hokkaido, and typhoon-prone central regions."},

  {type:"teach", trg:"雨(あめ)", src:"rain", pos:"noun", gender:null,
   note:"Also refers to candy (different kanji). Rain: 雨. Candy: 飴.\nContext makes the meaning clear.",
   example:"A: 雨(あめ)が降(ふ)るかもしれないから、傘(かさ)を持(も)っていこう。\nB: そうだね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: It might rain, so let us bring umbrellas.\nB: Good idea.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"Japan's relationship with rain is reflected in language: over 50 words for different types of rain exist. つゆ (rainy season) is a distinct weather phenomenon in June-July. 小雨(こさめ) (light rain), 大雨(おおあめ) (heavy rain), にわか雨(あめ) (sudden shower) show this richness."},

  {type:"mc", q:"多分(たぶん) expresses:", opts:["100% certainty","about 70% probability","impossibility","past tense"], ans:"about 70% probability",
   hint:"This adverb sits in the middle of the certainty scale, meaning 'probably.'"},

  {type:"match", pairs:[{trg:"でしょう",src:"probably (polite)"},{trg:"だろう",src:"probably (casual)"},{trg:"かもしれない",src:"might"},{trg:"多分(たぶん)",src:"probably"}]},

  {type:"match", pairs:[{trg:"絶対(ぜったい)",src:"definitely"},{trg:"きっと",src:"surely"},{trg:"天気(てんき)",src:"weather"},{trg:"雨(あめ)",src:"rain"}]},

  {type:"fb", s:"{1}明日(あした)はいい天気(てんき)だと思(おも)います。\n(I think tomorrow will probably be nice weather.)", a:"多分(たぶん)", opts:["多分(たぶん)","絶対(ぜったい)","いつも","きのう"], sSrc:"I think tomorrow will probably be nice weather.",
   hint:"The adverb meaning 'probably' placed at the start of a sentence."},

  {type:"mc", q:"きっと大丈夫(だいじょうぶ)ですよ means:", opts:["It is probably fine","It is definitely not fine","I am sure it will be fine","Maybe it is fine"], ans:"I am sure it will be fine",
   hint:"きっと is a reassuring word meaning 'surely/certainly' with emotional warmth."},

  {type:"fb", s:"傘(かさ)を持(も)ってきてよかったです。今日(きょう)は{1}でしたね。",
   a:["雨(あめ)"],
   opts:["雨(あめ)","晴(は)れ","雪(ゆき)","天気(てんき)"],
   hint:"You were glad you brought your umbrella. The weather today involved water falling from the sky.",
   sSrc:"I am glad I brought my umbrella. It was {1} today, was it not."},

  {type:"tip", title:"Certainty Scale in Japanese",
   text:"From most to least certain:\n絶対(ぜったい) (absolutely): 絶対行(ぜったいい)く。(I am absolutely going.)\nきっと (surely, ~90%): きっと大丈夫(だいじょうぶ)。(Surely it is fine.)\n多分(たぶん) (probably, ~70%): 多分(たぶん)雨(あめ)だ。(Probably rain.)\nでしょう/だろう (likely): 雨(あめ)でしょう。(It will likely rain.)\nかもしれない (might, ~40%): 雨(あめ)かもしれない。(It might rain.)",
   deepDive:{title:"Combining certainty markers",
    text:"You can combine adverbs with sentence-end patterns for nuance:\n多分(たぶん)雨(あめ)でしょう。(It will probably rain.) -- mid certainty\nきっと大丈夫(だいじょうぶ)でしょう。(It will surely be fine.) -- high certainty\n多分(たぶん)行(い)けるかもしれない。(Maybe I can probably go.) -- low certainty\n\nAvoid doubling the same level: 絶対(ぜったい)でしょう sounds contradictory. If you are absolutely sure, use 絶対(ぜったい) with a plain statement."}},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
,
  JEXP_14_L1,
  JEXP_14_L2,
  JEXP_14_L3
]};
export default UNIT_14;
