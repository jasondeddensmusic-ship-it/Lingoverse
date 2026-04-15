// Unit 01 Expansion L04 — Polite Responses & Reactions
const LESSON_4 = {
  id:"jav2_u1l4", title:"あいづちとへんじ", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"あいづちとへんじ",
     desc:"Learn the polite responses and reactions that keep Japanese conversations flowing. Japanese speakers use frequent 'aizuchi' (back-channel responses) to show they are listening.",
     goals:["Use common aizuchi (listener responses)","React appropriately to news and stories","Express agreement, surprise, and sympathy"]},

    {type:"teach", trg:"そうですか", src:"is that so? / really?", pos:"intj", gender:null,
     note:"Shows you are listening and acknowledging new information.\nFlat tone = neutral acknowledgment. Rising tone = surprise.",
     example:"A: あしたとうきょうにいきます。\nB: そうですか。いいですね。",
     exampleSrc:"A: I'm going to Tokyo tomorrow.\nB: Is that so? That's nice.",
     funFact:"Sou desu ka is the single most useful listener response in Japanese. It works in any situation: hearing good news, bad news, or neutral information. Mastering the right intonation takes practice."},

    {type:"teach", trg:"そうですね", src:"that's right / indeed", pos:"intj", gender:null,
     note:"Shows agreement with what someone said. The 'ne' ending seeks shared feeling.",
     example:"A: きょうはさむいですね。\nB: そうですね。コートがいりますね。",
     exampleSrc:"A: It's cold today, isn't it?\nB: Indeed. We need a coat.",
     funFact:"The difference between ka and ne is huge. Sou desu ka (rising) asks for confirmation. Sou desu ne (falling) gives confirmation. Mixing them up can make you sound confused when you mean to agree."},

    {type:"teach", trg:"なるほど", src:"I see / that makes sense", pos:"intj", gender:null,
     note:"Shows you understand and find the information logical or enlightening.",
     example:"A: にほんではくつをぬぎますよ。\nB: なるほど。だからげんかんがあるんですね。",
     exampleSrc:"A: In Japan, you take off your shoes.\nB: I see. That's why there's an entrance hall.",
     funFact:"Naruhodo comes from 'naru' (to become) + 'hodo' (to the extent). It literally means 'to that extent it becomes clear.' Some usage guides warn against using it with superiors because it can sound like you are evaluating their statement."},

    {type:"teach", trg:"すごい", src:"amazing / awesome", pos:"adj", gender:null,
     note:"An i-adjective expressing admiration. Very common in casual speech.\nKanji: 凄い.",
     example:"A: にほんごのしけんにうかりました！\nB: すごい！おめでとう！",
     exampleSrc:"A: I passed the Japanese exam!\nB: Amazing! Congratulations!",
     funFact:"Sugoi originally meant 'terrifying/dreadful' and shifted to mean 'amazing/incredible.' This positive drift happened gradually. Young people use it for everything: sugoi oishii (super delicious), sugoi kawaii (super cute)."},

    {type:"mc", q:"そうですか expresses:", opts:["Disagreement","Acknowledgment of information","An apology","A greeting"], ans:"Acknowledgment of information",
     hint:"This phrase shows you heard and are processing what someone told you."},

    {type:"teach", trg:"たいへんですね", src:"that must be tough / that's rough", pos:"intj", gender:null,
     note:"Expresses sympathy when someone shares a difficulty. Taihen means 'difficult/serious.'",
     example:"A: まいにちざんぎょうです。\nB: たいへんですね。からだにきをつけてください。",
     exampleSrc:"A: I work overtime every day.\nB: That must be tough. Please take care of your health.",
     funFact:"Taihen (大変) literally means 'big change,' implying something has gone dramatically wrong. Adding desu ne turns it into warm sympathy. Japanese people value showing you understand someone's struggle rather than offering solutions."},

    {type:"teach", trg:"ほんとうですか", src:"really? / is that true?", pos:"intj", gender:null,
     note:"Stronger surprise than sou desu ka. Shows genuine disbelief or excitement.\nKanji: 本当ですか.",
     example:"A: にほんにさんねんすんでいました。\nB: ほんとうですか？すごいですね！",
     exampleSrc:"A: I lived in Japan for three years.\nB: Really? That's amazing!",
     funFact:"Hontou (truth/reality) + desu ka (is it?). Casual form is hontou ni? or just honto? In text messages, young people write マジ (maji, seriously?) which is even more casual and emphatic."},

    {type:"teach", trg:"おめでとうございます", src:"congratulations (polite)", pos:"intj", gender:null,
     note:"Used for any celebration: birthdays, graduations, promotions, New Year.\nCasual: おめでとう.",
     example:"A: けっこんしました！\nB: おめでとうございます！",
     exampleSrc:"A: I got married!\nB: Congratulations!",
     funFact:"From medetai (auspicious/worthy of celebration). The 'o' prefix and 'gozaimasu' ending add layers of politeness. At New Year, it combines with akemashite to form Japan's most important greeting."},

    {type:"fb", s:"たいへんな話を聞いたとき、___と言います。",
     a:["たいへんですね"],
     opts:["たいへんですね","すごい","おめでとう","なるほど"],
     hint:"The sympathetic response you give when someone shares a difficult situation.",
     sSrc:"When hearing a tough story, you say {1}."},

    {type:"teach", trg:"よかったですね", src:"that's great / good for you", pos:"intj", gender:null,
     note:"Response to good news. Literally 'it was good, wasn't it.' Shares the listener's joy.",
     example:"A: しけんにうかりました。\nB: よかったですね！",
     exampleSrc:"A: I passed the exam.\nB: That's great!",
     funFact:"Yokatta (past of yoi/ii, good) + desu ne. This phrase genuinely shares happiness. The past tense matters: it means 'it turned out well.' Japanese people often use it about themselves too: yokatta (I'm relieved/glad)."},

    {type:"teach", trg:"ざんねんですね", src:"that's too bad / what a shame", pos:"intj", gender:null,
     note:"Response to disappointing news. Zannen means 'regrettable.'\nKanji: 残念ですね.",
     example:"A: あしたはあめです。\nB: ざんねんですね。ピクニックはむりですね。",
     exampleSrc:"A: It will rain tomorrow.\nB: That's too bad. A picnic won't work.",
     funFact:"残念 combines 残 (remaining) and 念 (feeling/thought). A lingering feeling of regret. It covers mild disappointment (rain on picnic day) to serious sympathy (someone's loss). The tone and context set the weight."},

    {type:"teach", trg:"だいじょうぶですか", src:"are you okay?", pos:"intj", gender:null,
     note:"Used when someone seems troubled, hurt, or in difficulty.\nKanji: 大丈夫ですか.",
     example:"A: いたっ！\nB: だいじょうぶですか？",
     exampleSrc:"A: Ouch!\nB: Are you okay?",
     funFact:"大丈夫 (daijoubu) originally meant 'great strong man' and evolved to mean 'all right/safe.' Modern Japanese overuses daijoubu as a polite way to decline: 'daijoubu desu' can mean 'no thank you' as well as 'I'm fine.'"},

    {type:"teach", trg:"だいじょうぶです", src:"I'm fine / it's okay / no thank you", pos:"intj", gender:null,
     note:"Three meanings depending on context: (1) I am okay, (2) it's no problem, (3) polite refusal.",
     example:"A: てつだいましょうか？\nB: だいじょうぶです。ありがとうございます。",
     exampleSrc:"A: Shall I help?\nB: I'm fine, thank you.",
     funFact:"This triple meaning confuses many learners. At a store: 'bag, daijoubu desu' means 'no bag, thanks.' After falling: 'daijoubu desu' means 'I'm okay.' When reassuring: 'daijoubu desu yo' means 'it'll be fine.' Context is everything."},

    {type:"mc", q:"なるほど means:", opts:["That's too bad","I see / that makes sense","Congratulations","Really?"], ans:"I see / that makes sense",
     hint:"Used when you find an explanation logical or when something clicks."},

    {type:"teach", trg:"うそ", src:"no way! / you're kidding!", pos:"intj", gender:null,
     note:"Literally 'lie.' Used as an exclamation of disbelief. Very casual.\nKanji: 嘘.",
     example:"A: あした、にほんにいくんだ。\nB: うそ！ほんとうに？",
     exampleSrc:"A: I'm going to Japan tomorrow.\nB: No way! Really?",
     funFact:"Using uso (lie) as 'no way!' is casual and can sound rude in formal settings. It expresses shock and disbelief. Young people also use uso! as a reaction to any surprising news, positive or negative."},

    {type:"teach", trg:"まじですか", src:"seriously? / for real?", pos:"intj", gender:null,
     note:"Casual expression of disbelief. Even more casual: まじで？\nKanji: マジですか.",
     example:"A: しゃちょうがやめるらしいよ。\nB: まじですか？",
     exampleSrc:"A: Apparently the company president is quitting.\nB: Seriously?",
     funFact:"Maji comes from majime (serious/earnest). The slang version maji became hugely popular in the 1980s gyaru (gal) culture. Now it is mainstream. Maji de? (for real?) is one of the most common reactions among young Japanese speakers."},

    {type:"match", pairs:[
      {trg:"そうですか", src:"Is that so?"},
      {trg:"なるほど", src:"I see"},
      {trg:"すごい", src:"Amazing"},
      {trg:"ほんとうですか", src:"Really?"}
    ]},

    {type:"match", pairs:[
      {trg:"たいへんですね", src:"That must be tough"},
      {trg:"よかったですね", src:"That's great"},
      {trg:"ざんねんですね", src:"That's too bad"},
      {trg:"だいじょうぶですか", src:"Are you okay?"}
    ]},

    {type:"fb", s:"いいニュースを聞いたとき、___と言います。",
     a:["よかったですね"],
     opts:["よかったですね","ざんねんですね","たいへんですね","まじですか"],
     hint:"The warm response when someone shares happy news with you.",
     sSrc:"When hearing good news, you say {1}."},

    {type:"mc", q:"だいじょうぶです can mean all EXCEPT:", opts:["I'm fine","No thank you","It's okay","Hello"], ans:"Hello",
     hint:"This versatile phrase covers reassurance, refusal, and confirming well-being, but not greetings."},

    {type:"mc", q:"Which response shows sympathy for bad news?", opts:["すごい","なるほど","ざんねんですね","そうですね"], ans:"ざんねんですね",
     hint:"The phrase containing the word for 'regrettable.'"},

    {type:"mc", q:"まじですか is:", opts:["Very formal","Casual disbelief","A greeting","An apology"], ans:"Casual disbelief",
     hint:"This slang expression from 1980s youth culture means 'seriously?'"},
  ]
};
export default LESSON_4;
