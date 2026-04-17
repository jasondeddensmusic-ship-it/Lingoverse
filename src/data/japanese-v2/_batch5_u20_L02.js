// Unit 20 Batch 5 Lesson 2: びじねすけいご (Business Keigo in Practice)
const BATCH5_L_2 = {
  id:"jav2_u20l_b5_2", title:"びじねすけいご", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"びじねすけいご",
     desc:"Put keigo into practice with real business scenarios: phone calls, emails, client meetings, and presentations. Learn set phrases that every Japanese professional uses daily. These are not grammar exercises but survival skills for the Japanese workplace.",
     goals:["Handle phone calls with proper keigo","Write polite business email phrases","Use set expressions in meetings and presentations"]},

    {type:"teach", trg:"おせわになっております", src:"thank you for your continued support (business greeting)", pos:"verb", gender:null,
     note:"Standard business greeting on phone and in meetings.\nLiterally: I am receiving your care. Said to clients and partners.",
     example:"A: いつもおせわになっております。ABCしょうじのすずきです。\nB: こちらこそおせわになっております。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Thank you for your continued support. I am Suzuki from ABC Trading.\nB: We should thank you for your support.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"おせわになっております is the single most common business opening phrase. Every phone call to a business contact starts with it. It acknowledges the ongoing relationship. New employees practice it repeatedly. The phrase is so automatic that even when calling for the first time, some people accidentally say it out of habit."},

    {type:"teach", trg:"おつかれさまです", src:"thank you for your hard work (workplace greeting)", pos:"noun", gender:null,
     note:"Universal workplace greeting. Used when greeting, leaving, or thanking.\nSaid to colleagues at any time of day.",
     example:"A: おつかれさまです。かいぎのしりょうができました。\nB: ありがとうございます。すぐかくにんします。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: (Greeting) The meeting materials are ready.\nB: Thank you. I will check them right away.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"おつかれさまです is the Swiss Army knife of Japanese workplace greetings. It works as hello, goodbye, thank you, and acknowledgment of effort. Colleagues say it when passing in hallways, ending calls, or leaving for the day. It literally means 'you must be tired,' but the meaning has broadened far beyond literal fatigue."},

    {type:"teach", trg:"しょうしょうおまちください", src:"please wait a moment (polite)", pos:"verb", gender:null,
     note:"しょうしょう (a little) + おまちください (please wait, honorific).\nUsed on phone and at reception desks.",
     example:"A: たなかはただいませきをはずしております。しょうしょうおまちくださいませ。\nB: はい、おまちしています。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Tanaka is currently away from the desk. Please wait a moment.\nB: Yes, I will wait.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"しょうしょうおまちください is heard hundreds of times daily in Japanese offices. On the phone, it buys time while transferring calls or checking information. The しょうしょう makes the wait sound brief, even if it is not. Adding ませ at the end (くださいませ) is even more polite and common in service industries."},

    {type:"teach", trg:"もうしわけございません", src:"I am terribly sorry (formal apology)", pos:"adj", gender:null,
     note:"More formal than すみません. もうしわけ = excuse. ございません = does not exist.\nLiterally: there is no excuse.",
     example:"A: おまたせしてもうしわけございません。\nB: いいえ、だいじょうぶですよ。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am terribly sorry for making you wait.\nB: No, it is fine.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"申し訳ございません literally means 'there is nothing I can say in my defense.' It is the heaviest standard apology, used in business when すみません is not sufficient. Companies use it in public apologies, and executives bow deeply while saying it. The depth of the bow correlates with the severity of the issue."},

    {type:"mc", q:"おせわになっております is used when:", opts:["Greeting business contacts you have a relationship with","Apologizing for a mistake","Asking for a favor","Introducing yourself for the first time"], ans:"Greeting business contacts you have a relationship with",
     hint:"This phrase acknowledges an ongoing b... r... and is said at the start of interactions."},

    {type:"teach", trg:"でんごんをおねがいできますか", src:"may I leave a message? (phone)", pos:"verb", gender:null,
     note:"でんごん (message) + を + おねがいできますか (can I request?).\nStandard phone phrase when someone is unavailable.",
     example:"A: やまださんはおでかけちゅうです。\nB: それではでんごんをおねがいできますか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Yamada-san is currently out.\nB: Then may I leave a message?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Phone etiquette (電話のマナー) is a major topic in Japanese business training. New employees spend hours practicing phone scripts. Key phrases: でんわをいただきました (I received a call), おりかえしでんわをいたします (I will call back), でんわをおつなぎします (I will connect you). Mastering these phrases is considered a basic professional skill."},

    {type:"teach", trg:"けんとうさせていただきます", src:"we will consider it (business polite decline)", pos:"verb", gender:null,
     note:"けんとう (consideration) + させていただく (humble). Can be genuine or a polite way to say no.",
     example:"A: このていあんについていかがでしょうか？\nB: しゃないでけんとうさせていただきます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What do you think about this proposal?\nB: We will consider it within the company.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"検討させていただきます is famously ambiguous. It CAN mean genuine consideration, but it is also the polite way to decline without saying no directly. Experienced business people learn to read the context. If followed by まえむきに (positively), it is likely genuine. If said with a pause and a slight bow, it often means rejection. This ambiguity is core to Japanese business communication."},

    {type:"teach", trg:"おりかえし", src:"return (phone call) / turning back", pos:"noun", gender:null,
     note:"Kanji: 折り返し. おりかえしでんわする = to call back.\nUsed when promising to return a call.",
     example:"A: おりかえしおでんわいたしましょうか？\nB: はい、おねがいいたします。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Shall I have them call you back?\nB: Yes, please.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"折り返し literally means 'folding back,' like a letter being folded and returned. In business, returning calls promptly is expected. おりかえしでんわ is one of the most common phrases in office life. Some companies have a rule that all calls must be returned within 30 minutes. Failure to おりかえし is considered unprofessional."},

    {type:"tip", title:"Business Phone Script",
     text:"Answering:\nはい、ABCしょうじでございます = Yes, this is ABC Trading.\n\nOpening:\nいつもおせわになっております = Thank you for your support.\n\nTransferring:\nしょうしょうおまちください = Please wait a moment.\nただいまおつなぎいたします = I will connect you now.\n\nUnavailable:\nただいませきをはずしております = Currently away from desk.\nおりかえしおでんわいたしましょうか = Shall we call you back?\n\nClosing:\nしつれいいたします = Goodbye (humble).\n\nRule: The caller hangs up first. The receiver waits.",
     deepDive:{title:"Email Keigo Essentials",
      text:"Japanese business emails follow strict patterns:\n\nOpening: おせわになっております (thank you for your support)\nBody start: さて (now, transitioning to the topic)\nRequest: おてすうですが (I know this is troublesome, but...)\nAttachment: べっしのしりょうをごらんください (please see the attached materials)\nClosing: なにとぞよろしくおねがいいたします (I humbly request your cooperation)\n\nCC etiquette: Mention everyone CCed by name. Ignoring CCed people is rude.\n\nEmail subjects should be specific: 4/20かいぎのけん (regarding 4/20 meeting), not just おねがい (request)."}},

    {type:"teach", trg:"ごていねいに", src:"how kind of you / how polite (appreciating someone's politeness)", pos:"adv", gender:null,
     note:"ご (honorific prefix) + ていねい (polite/careful) + に (adverb form).\nUsed to acknowledge someone's thoughtfulness.",
     example:"A: ごていねいにありがとうございます。\nB: いいえ、とんでもございません。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Thank you for being so kind/thorough.\nB: Not at all, it is nothing.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"ごていねいに is used when someone does something more carefully or politely than expected. Receiving a detailed explanation, a well-wrapped gift, or a thorough response all merit ごていねいに. The phrase elevates the other person's effort. とんでもございません (not at all) is the humble response, deflecting praise."},

    {type:"teach", trg:"とんでもございません", src:"not at all / that is too kind (humble deflection)", pos:"adj", gender:null,
     note:"Formal version of とんでもない. Used to humbly deflect praise or thanks.\nGrammar purists debate this form, but it is standard in business.",
     example:"A: たすかりました。ほんとうにありがとうございます。\nB: とんでもございません。おやくにたてればさいわいです。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: You helped me greatly. Thank you so much.\nB: Not at all. I am happy if I could be of help.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"とんでもない literally means 'unthinkable' or 'outrageous.' When used to deflect thanks, it means 'what I did is nothing worth thanking.' Language purists argue that とんでもございません is grammatically incorrect (ない should not become ございません), but it has become accepted business Japanese. The debate itself is famous among language enthusiasts."},

    {type:"fb", s:"おまたせして{1}ございません。\n(I am terribly sorry for making you wait.)", a:"もうしわけ", opts:["もうしわけ","すみ","しつれい","ごめん"], sSrc:"I am terribly sorry for making you wait.",
     hint:"The formal apology word meaning 'no excuse,' used before ございません."},

    {type:"mc", q:"けんとうさせていただきます can mean:", opts:["Both genuine consideration and polite refusal","Only enthusiastic agreement","Only firm rejection","An immediate decision"], ans:"Both genuine consideration and polite refusal",
     hint:"This famously ambiguous phrase can go either way depending on context and delivery."},

    {type:"teach", trg:"さいわい", src:"fortunate / happy / blessed", pos:"noun", gender:null,
     note:"Kanji: 幸い. さいわいです = I am fortunate.\nおやくにたてればさいわいです = I would be happy to be of help.",
     example:"A: さいわいなことに、けがはありませんでした。\nB: よかったですね。あんしんしました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Fortunately, there were no injuries.\nB: That is good. I am relieved.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"幸い uses the kanji 幸 which depicts a pair of handcuffs. Paradoxically, this 'fortunate' character originally meant 'escaping punishment,' evolving to mean 'lucky.' In business emails, さいわいです is the elegant way to express hope: ごかくにんいただければさいわいです (I would be grateful if you could confirm)."},

    {type:"match", pairs:[{trg:"おせわになっております",src:"greeting (ongoing relationship)"},{trg:"もうしわけございません",src:"formal deep apology"},{trg:"しょうしょうおまちください",src:"please wait a moment"},{trg:"とんでもございません",src:"not at all (humble deflection)"}]},

    {type:"fb", s:"おりかえし{1}いたしましょうか？\n(Shall I have them call you back?)", a:"おでんわ", opts:["おでんわ","おてがみ","おメール","おかいぎ"], sSrc:"Shall I have them call you back?",
     hint:"The honorific form of the word for telephone/phone call."},

    {type:"mc", q:"おつかれさまです is used:", opts:["As a general workplace greeting at any time","Only when someone is visibly tired","Only when leaving the office","Only to superiors"], ans:"As a general workplace greeting at any time",
     hint:"This versatile phrase works as hello, goodbye, and acknowledgment in the w...."}
  ]
};
export default BATCH5_L_2;
