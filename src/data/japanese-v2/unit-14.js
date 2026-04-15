// Japanese V2 Unit 14. いけん (Opinions)
// Level: A2.2. JLPT N4 aligned.
import JEXP_14_L1 from './_temp_u14_expand_L01.js';import JEXP_14_L2 from './_temp_u14_expand_L02.js';import JEXP_14_L3 from './_temp_u14_expand_L03.js';
// と思う, と言う, でしょう, かもしれない.

const UNIT_14 = {
  n:14, lang:"ja", srcLang:"en", track:"v2",
  title:"いけん", sub:"Opinions",
  icon:"💭", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: とおもう (I Think That...) ═══
{id:"jav2_u14l1", title:"とおもう", icon:"🤔", xp:15, board:true, steps:[
  {type:"intro", title:"とおもう",
   desc:"Learn to express your opinions and report what others say. The particle と marks quoted thoughts and speech. Combined with おもう (think) and いう (say), it opens up a whole new layer of expression.",
   goals:["Express opinions with と思う (I think that...)","Report speech with と言う (someone said that...)","Understand the quoting particle と"]},

  {type:"teach", trg:"〜とおもう", src:"I think that ~", pos:"part", gender:null,
   note:"Plain form + とおもう = I think that...\nPolite: とおもいます. Used for personal opinions.",
   example:"A: にほんごはむずかしいとおもいますか？\nB: すこしむずかしいとおもいます。",
   exampleSrc:"A: Do you think Japanese is difficult?\nB: I think it is a little difficult.",
   funFact:"The particle と is a quotation marker. It frames everything before it as a thought or statement. Unlike English, Japanese places the quoted content first and the verb of thinking/saying at the end. This mirrors the general verb-final structure of Japanese."},

  {type:"teach", trg:"おもう", src:"to think", pos:"verb", gender:null,
   note:"Group 1 verb. おもう = to think, to feel, to believe.\nKanji: 思う. て-form: おもって.",
   example:"A: どうおもいますか？\nB: いいとおもいます。",
   exampleSrc:"A: What do you think?\nB: I think it is good.",
   funFact:"思う contains the kanji 思, which combines 田 (field/brain) and 心 (heart). Thinking in Japanese is literally a heart-mind activity. The phrase dou omoimasu ka (what do you think?) is essential for discussions and decision-making."},

  {type:"teach", trg:"〜という", src:"is called ~ / someone said ~", pos:"part", gender:null,
   note:"Two uses: quoting speech (X said...) and naming (it is called...).\nKanji: と言う.",
   example:"A: せんせいはなんといいましたか？\nB: あしたテストがあるといいました。",
   exampleSrc:"A: What did the teacher say?\nB: She said there is a test tomorrow.",
   funFact:"と言う has a dual personality. As a speech verb: 'Tanaka said...' As a naming device: '寿司というたべもの' means 'a food called sushi.' The naming use is extremely common for introducing new words and concepts to someone."},

  {type:"teach", trg:"いう", src:"to say / to be called", pos:"verb", gender:null,
   note:"Group 1 verb. いう = to say. Often written as 言う in kanji.\nて-form: いって.",
   example:"A: にほんごで「ありがとう」といいます。\nB: ああ、それはしっています。",
   exampleSrc:"A: In Japanese, we say 'arigatou.'\nB: Ah, I know that.",
   funFact:"いう is one of the most frequently used verbs in Japanese. It appears in set phrases like そういう (that kind of), ああいう (that sort of), and the humble form もうす. The kanji 言 shows sound waves coming from a mouth."},

  {type:"mc", q:"にほんごはむずかしいとおもいます means:", opts:["I think Japanese is difficult","I am studying Japanese","Japanese is definitely difficult","Japanese is easy"], ans:"I think Japanese is difficult",
   hint:"The とおもいます pattern expresses a personal opinion or belief."},

  {type:"teach", trg:"むずかしい", src:"difficult", pos:"adj", gender:null,
   note:"い-adjective. Opposite: やさしい/かんたん (easy).\nKanji: 難しい.",
   example:"A: このもんだいはむずかしいとおもいますか？\nB: いいえ、かんたんだとおもいます。",
   exampleSrc:"A: Do you think this problem is difficult?\nB: No, I think it is easy.",
   funFact:"難しい uses the kanji 難, which is itself notoriously difficult to write with 18 strokes. There is a beautiful irony in the fact that the word for 'difficult' uses one of the hardest kanji. Japanese learners often joke about this."},

  {type:"teach", trg:"かんたん", src:"easy / simple", pos:"adj", gender:null,
   note:"な-adjective. Opposite of むずかしい. かんたんな + noun.\nKanji: 簡単.",
   example:"A: にほんごはかんたんだとおもいますか？\nB: はつおんはかんたんだとおもいます。",
   exampleSrc:"A: Do you think Japanese is easy?\nB: I think the pronunciation is easy.",
   funFact:"簡単 has an interesting grammatical note: as a な-adjective, it needs だ before と in the opinion pattern. So it is かんたんだとおもう, not かんたんとおもう. This だ insertion for な-adjectives and nouns is a common JLPT N4 test point."},

  {type:"fb", s:"にほんごはおもしろい{1}おもいます。\n(I think Japanese is interesting.)", a:"と", opts:["と","を","が","に"], sSrc:"I think Japanese is interesting.",
   hint:"The quotation particle that marks the content of a thought or statement."},

  {type:"teach", trg:"ただしい", src:"correct / right", pos:"adj", gender:null,
   note:"い-adjective. Used for correctness of answers, behavior, grammar.\nKanji: 正しい.",
   example:"A: このこたえはただしいとおもいますか？\nB: はい、ただしいとおもいます。",
   exampleSrc:"A: Do you think this answer is correct?\nB: Yes, I think it is correct.",
   funFact:"正しい uses the kanji 正, which means 'correct' or 'proper.' The kanji shows a foot stopping at a line, meaning 'stopping at the right place.' It appears in many compounds: 正月 (New Year), 正直 (honest), 正式 (formal/official)."},

  {type:"teach", trg:"ちがう", src:"to be different / to be wrong", pos:"verb", gender:null,
   note:"Group 1 verb. Used to politely say someone is wrong.\nKanji: 違う. て-form: ちがって.",
   example:"A: これはあなたのかばんですか？\nB: いいえ、ちがいます。",
   exampleSrc:"A: Is this your bag?\nB: No, that is not mine. (Lit: it is different.)",
   funFact:"ちがう is the gentle Japanese way to say 'no, you are wrong.' Rather than directly saying 'wrong,' Japanese says 'it differs.' ちがいます is softer than いいえ and is used constantly in daily conversation. It can also genuinely mean 'to be different.'"},

  {type:"mc", q:"せんせいはあしたテストがあるといいました means:", opts:["The teacher thought about a test","The teacher said there is a test tomorrow","The teacher took a test","The teacher likes tests"], ans:"The teacher said there is a test tomorrow",
   hint:"The といいました pattern reports what someone s...."},

  {type:"match", pairs:[{trg:"とおもう",src:"I think"},{trg:"という",src:"is called / said"},{trg:"むずかしい",src:"difficult"},{trg:"かんたん",src:"easy"}]},

  {type:"fb", s:"せんせいはなん{1}いいましたか？\n(What did the teacher say?)", a:"と", opts:["と","を","に","で"], sSrc:"What did the teacher say?",
   hint:"The particle that connects quoted speech to the verb of saying."},

  {type:"match", pairs:[{trg:"ただしい",src:"correct"},{trg:"ちがう",src:"different / wrong"},{trg:"おもう",src:"to think"},{trg:"いう",src:"to say"}]},

  {type:"mc", q:"ちがいます is a gentle way to say:", opts:["yes","thank you","no / that is wrong","I do not know"], ans:"no / that is wrong",
   hint:"Literally meaning 'it differs,' this is used instead of directly saying 'w....'"},
]},

// ═══ L2: たぶん (Probably) ═══
{id:"jav2_u14l2", title:"たぶん", icon:"🔮", xp:15, board:true, steps:[
  {type:"intro", title:"たぶん",
   desc:"Not everything is certain. Learn to express probability with でしょう (probably), possibility with かもしれない (might), and soften your speech with uncertainty markers. These patterns make your Japanese sound more natural and nuanced.",
   goals:["Express probability with でしょう","Express possibility with かもしれない","Use たぶん (probably) to soften statements"]},

  {type:"teach", trg:"でしょう", src:"probably / I think / right?", pos:"part", gender:null,
   note:"Added after plain form. Expresses probability or seeks confirmation.\nFormal version of だろう.",
   example:"A: あしたはあめでしょう。\nB: そうですか。かさをもっていきます。",
   exampleSrc:"A: It will probably rain tomorrow.\nB: Is that so? I will bring an umbrella.",
   funFact:"でしょう has two very different uses depending on intonation. With falling intonation, it means 'probably': あめでしょう (it will probably rain). With rising intonation, it means 'right?': いいでしょう？(It is nice, right?). The casual form だろう is used by male speakers."},

  {type:"teach", trg:"かもしれない", src:"might / maybe", pos:"part", gender:null,
   note:"Plain form + かもしれない = might. Expresses lower certainty than でしょう.\nPolite: かもしれません.",
   example:"A: あしたゆきがふるかもしれません。\nB: ほんとうですか？さむいですね。",
   exampleSrc:"A: It might snow tomorrow.\nB: Really? It is cold, is it not.",
   funFact:"かもしれない literally breaks down as かも (even/also) + しれない (cannot know). So the full meaning is 'it cannot be known whether or not.' This etymology shows the Japanese preference for expressing uncertainty through the limits of knowledge rather than direct hedging."},

  {type:"teach", trg:"たぶん", src:"probably / maybe", pos:"adv", gender:null,
   note:"An adverb placed at the beginning of a sentence. Softer than definitely.\nKanji: 多分.",
   example:"A: たぶんあめがふるとおもいます。\nB: じゃ、かさをもっていきましょう。",
   exampleSrc:"A: I think it will probably rain.\nB: Then let us bring umbrellas.",
   funFact:"多分 literally means 'much part,' suggesting 'for the most part.' It sits in the middle of the certainty scale: きっと (surely, 90%) > たぶん (probably, 70%) > もしかしたら (perhaps, 40%). Using the right level of certainty is important in Japanese communication."},

  {type:"mc", q:"あしたはあめでしょう means:", opts:["It will probably rain tomorrow","It is raining now","It rained yesterday","I want rain tomorrow"], ans:"It will probably rain tomorrow",
   hint:"でしょう expresses probability, like an educated guess about the future."},

  {type:"teach", trg:"だろう", src:"probably (casual)", pos:"part", gender:null,
   note:"Casual form of でしょう. More commonly used by male speakers.\nSame meaning, different register.",
   example:"A: あしたはいいてんきだろう。\nB: そうだといいね。",
   exampleSrc:"A: Tomorrow will probably be nice weather.\nB: I hope so.",
   funFact:"だろう and でしょう are the same grammar point at different politeness levels. だろう appears frequently in novels, manga, and casual male speech. The question form だろう？(right?) is very common in informal conversation among friends."},

  {type:"teach", trg:"ぜったい", src:"definitely / absolutely", pos:"adv", gender:null,
   note:"Strongest certainty. ぜったいに = without fail.\nKanji: 絶対.",
   example:"A: あのえいがはぜったいおもしろいとおもう。\nB: じゃ、みにいこう！",
   exampleSrc:"A: I think that movie is definitely interesting.\nB: Then let us go see it!",
   funFact:"絶対 combines 絶 (sever/extreme) and 対 (oppose/versus), creating the meaning 'absolutely/without exception.' ぜったいに (definitely) is the strongest certainty adverb, while ぜったいに...ない (absolutely not) is the strongest denial."},

  {type:"teach", trg:"きっと", src:"surely / certainly", pos:"adv", gender:null,
   note:"High confidence, slightly softer than ぜったい. Often expresses hope or expectation.\nAbout 90% certain.",
   example:"A: きっとだいじょうぶですよ。\nB: ありがとう。そうだといいです。",
   exampleSrc:"A: I am sure it will be fine.\nB: Thank you. I hope so.",
   funFact:"きっと carries emotional warmth that たぶん lacks. Saying きっとうまくいく (it will surely go well) is encouraging, while たぶんうまくいく (it will probably go well) sounds less committed. Use きっと when you want to reassure someone."},

  {type:"fb", s:"あしたゆきがふる{1}。\n(It might snow tomorrow.)", a:"かもしれません", opts:["かもしれません","でしょう","です","ました"], sSrc:"It might snow tomorrow.",
   hint:"The pattern expressing possibility ('cannot be known whether'), polite form."},

  {type:"teach", trg:"てんき", src:"weather", pos:"noun", gender:null,
   note:"General weather. いいてんき = nice weather, わるいてんき = bad weather.\nKanji: 天気.",
   example:"A: あしたのてんきはどうでしょう？\nB: たぶんはれるとおもいます。",
   exampleSrc:"A: What will the weather be like tomorrow?\nB: I think it will probably be sunny.",
   funFact:"天気 combines 天 (heaven/sky) and 気 (spirit/air). Weather is a universal conversation starter in Japan too. てんきよほう (weather forecast) is watched religiously. Japan's weather varies dramatically: subtropical Okinawa, snowy Hokkaido, and typhoon-prone central regions."},

  {type:"teach", trg:"あめ", src:"rain", pos:"noun", gender:null,
   note:"Also refers to candy (different kanji). Rain: 雨. Candy: 飴.\nContext makes the meaning clear.",
   example:"A: あめがふるかもしれないから、かさをもっていこう。\nB: そうだね。",
   exampleSrc:"A: It might rain, so let us bring umbrellas.\nB: Good idea.",
   funFact:"Japan's relationship with rain is reflected in language: over 50 words for different types of rain exist. つゆ (rainy season) is a distinct weather phenomenon in June-July. こさめ (light rain), おおあめ (heavy rain), にわかあめ (sudden shower) show this richness."},

  {type:"mc", q:"たぶん expresses:", opts:["100% certainty","about 70% probability","impossibility","past tense"], ans:"about 70% probability",
   hint:"This adverb sits in the middle of the certainty scale, meaning 'probably.'"},

  {type:"match", pairs:[{trg:"でしょう",src:"probably (polite)"},{trg:"だろう",src:"probably (casual)"},{trg:"かもしれない",src:"might"},{trg:"たぶん",src:"probably"}]},

  {type:"match", pairs:[{trg:"ぜったい",src:"definitely"},{trg:"きっと",src:"surely"},{trg:"てんき",src:"weather"},{trg:"あめ",src:"rain"}]},

  {type:"fb", s:"{1}あしたはいいてんきだとおもいます。\n(I think tomorrow will probably be nice weather.)", a:"たぶん", opts:["たぶん","ぜったい","いつも","きのう"], sSrc:"I think tomorrow will probably be nice weather.",
   hint:"The adverb meaning 'probably' placed at the start of a sentence."},

  {type:"mc", q:"きっとだいじょうぶですよ means:", opts:["It is probably fine","It is definitely not fine","I am sure it will be fine","Maybe it is fine"], ans:"I am sure it will be fine",
   hint:"きっと is a reassuring word meaning 'surely/certainly' with emotional warmth."},

  {type:"tip", title:"Certainty Scale in Japanese",
   text:"From most to least certain:\nぜったい (absolutely): ぜったいいく。(I am absolutely going.)\nきっと (surely, ~90%): きっとだいじょうぶ。(Surely it is fine.)\nたぶん (probably, ~70%): たぶんあめだ。(Probably rain.)\nでしょう/だろう (likely): あめでしょう。(It will likely rain.)\nかもしれない (might, ~40%): あめかもしれない。(It might rain.)",
   deepDive:{title:"Combining certainty markers",
    text:"You can combine adverbs with sentence-end patterns for nuance:\nたぶんあめでしょう。(It will probably rain.) -- mid certainty\nきっとだいじょうぶでしょう。(It will surely be fine.) -- high certainty\nたぶんいけるかもしれない。(Maybe I can probably go.) -- low certainty\n\nAvoid doubling the same level: ぜったいでしょう sounds contradictory. If you are absolutely sure, use ぜったい with a plain statement."}},
]},

]};
export default UNIT_14;
