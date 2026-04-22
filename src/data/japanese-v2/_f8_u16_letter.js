// Unit 16 F8 Lesson. Writing Short Informal Letters
// PP58 A2 gap closure. Casual correspondence: LINE messages, postcards, short notes to friends.

const LESSON_F8_LETTER = {
  id:"jav2_u16l_letter", title:"短(みじか)い手紙(てがみ)", icon:"\u2709\uFE0F", xp:15, board:true,
  steps:[

    {type:"intro", title:"Writing Short Informal Letters",
     desc:"Learn to write short informal letters and casual messages in Japanese. Essential for LINE messages, postcards, and friendly notes.",
     goals:["Open a casual message or letter","Share recent news with a friend","Close with a warm, appropriate farewell"]},

    {type:"teach", trg:"手紙(てがみ)", src:"letter", pos:"noun", gender:null,
     note:"A written message sent to someone. Also used for notes and cards.\n手紙(てがみ)を書(か)く = to write a letter.",
     example:"A: 友達(ともだち)に手紙(てがみ)を書(か)きます。\nB: いいですね。どんな手紙(てがみ)ですか？\nA: 近況(きんきょう)を伝(つた)える手紙(てがみ)です。\nB: きっと喜(よろこ)んでもらえますよ。",
     exampleSrc:"A: I will write a letter to a friend.\nB: That is nice. What kind of letter?\nA: A letter sharing recent news.\nB: They will surely be happy.",
     funFact:"手紙 (手 = hand, 紙 = paper) literally means 'hand paper.' The tradition of handwritten letters (手紙(てがみ)) is deeply respected in Japan. A handwritten note is considered far more personal and thoughtful than a digital message."},

    {type:"teach", trg:"書(か)く", src:"to write", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 書(か)いて. Plain past: 書(か)いた.\n書(か)いてください = please write.",
     example:"A: 毎日(まいにち)日記(にっき)を書(か)きますか？\nB: いいえ、でも手紙(てがみ)はよく書(か)きます。\nA: 日本語(にほんご)で書(か)きますか？\nB: はい、練習(れんしゅう)になります。",
     exampleSrc:"A: Do you write a diary every day?\nB: No, but I often write letters.\nA: Do you write in Japanese?\nB: Yes, it is good practice.",
     funFact:"書(か)く (to write) and 描(か)く (to draw) are both pronounced kaku. Context tells you which is meant. In Japan, beautiful handwriting is an art form studied as 習字(しゅうじ) (calligraphy practice) in elementary school."},

    {type:"teach", trg:"ひさしぶり", src:"long time no see (casual)", pos:"intj", gender:null,
     note:"Casual form of おひさしぶりです. Use with close friends.\nひさしぶりだね！ = Long time no see!",
     example:"A: ひさしぶり！元気(げんき)だった？\nB: うん、ひさしぶり！元気(げんき)だったよ。\nA: 最近(さいきん)どうしてた？\nB: 仕事(しごと)が忙(いそが)しかった。",
     exampleSrc:"A: Long time no see! Were you well?\nB: Yeah, long time! I was well.\nA: What have you been up to lately?\nB: Work was busy.",
     funFact:"Dropping the お from おひさしぶり makes it casual. In texting culture, ひさしぶり is often shortened further to ひさびさ or ひさぶり in chat messages. The more you shorten it, the more casual and close the relationship implied."},

    {type:"teach", trg:"元気(げんき)？", src:"How are you? / You well? (casual)", pos:"intj", gender:null,
     note:"The casual question form of asking how someone is.\nPolite version: お元気(げんき)ですか？\nResponse: 元気(げんき)だよ。(I'm good!)",
     example:"A: ひさしぶり！元気(げんき)？\nB: 元気(げんき)！あなたは？\nA: うん、おかげさまで元気(げんき)だよ。\nB: よかった！",
     exampleSrc:"A: Long time no see! How are you?\nB: I'm good! And you?\nA: Yeah, doing well, thanks.\nB: Great!",
     funFact:"元気(げんき)？ used alone as a question is very casual and warm. Japanese people do not ask this in every conversation the way English speakers say 'how are you?' as a formality. Asking it means you genuinely want to know."},

    {type:"mc",
     q:"Which phrase is the CASUAL version of おひさしぶりです？",
     opts:["ひさしぶり","またね","よろしくね","元気(げんき)？"],
     ans:"ひさしぶり",
     hint:"Remove the polite prefix and formal ending to get the casual version used with close friends."},

    {type:"teach", trg:"近況(きんきょう)", src:"recent news / how things have been", pos:"noun", gender:null,
     note:"近 (kin, near/recent) + 況 (kyo, situation/state).\n近況(きんきょう)を伝(つた)える = to share recent news.",
     example:"A: 近況(きんきょう)を教(おし)えてよ。\nB: 最近(さいきん)、日本語(にほんご)を勉強(べんきょう)しているよ。\nA: すごいね！どのくらい？\nB: 毎日(まいにち)少(すこ)しずつね。",
     exampleSrc:"A: Tell me your recent news.\nB: Lately, I have been studying Japanese.\nA: Amazing! How much?\nB: A little bit every day.",
     funFact:"近況(きんきょう) is one of the most common phrases in Japanese letters and cards. Year-end greeting cards (年賀状(ねんがじょう)) often include a short 近況(きんきょう)報告(ほうこく) (news update). Sharing 近況(きんきょう) shows care and keeps relationships warm across distance."},

    {type:"fb",
     s:"友達(ともだち)への手紙(てがみ)で「最近(さいきん)どうしてる？」は{1}を聞(き)く表現(ひょうげん)です。",
     a:["近況(きんきょう)"],
     opts:["近況(きんきょう)","仕事(しごと)","勉強(べんきょう)","天気(てんき)"],
     hint:"The noun that means 'how things have been recently' or 'recent news' about a person.",
     sSrc:"In a letter to a friend, 'How have you been lately?' is an expression asking for {1}."},

    {type:"teach", trg:"また連絡(れんらく)してね", src:"let's stay in touch / contact me again", pos:"intj", gender:null,
     note:"A warm closing phrase. Literally: 'please contact again.'\nShorter version: また連絡(れんらく)ね or また連絡(れんらく)して！",
     example:"A: 手紙(てがみ)ありがとう！また連絡(れんらく)してね。\nB: うん、また手紙(てがみ)書(か)くよ。\nA: 楽(たの)しみにしてるね。\nB: じゃあね！",
     exampleSrc:"A: Thanks for the letter! Let's stay in touch.\nB: Yeah, I will write again.\nA: Looking forward to it.\nB: Bye!",
     funFact:"Also連絡(れんらく)してね is the go-to closing phrase for casual Japanese messages. In the LINE messaging era, it often appears at the end of long voice messages too. The ね particle softens it into a gentle request rather than a command."},

    {type:"teach", trg:"よろしくね", src:"regards / take care (casual closing)", pos:"intj", gender:null,
     note:"Casual letter closing. Softer than よろしくお願(ねが)いします.\nAlso used to send regards: 家族(かぞく)によろしくね = say hi to your family.",
     example:"A: 手紙(てがみ)の最後(さいご)は何(なん)て書(か)く？\nB: 友達(ともだち)には「よろしくね」って書(か)くよ。\nA: なるほど。\nB: 家族(かぞく)によろしくね！",
     exampleSrc:"A: What do you write at the end of the letter?\nB: To friends, I write 'yoroshiku ne.'\nA: I see.\nB: Say hi to your family!",
     funFact:"よろしくね (literally 'please treat me well, right?') functions as a warm sign-off in casual writing. It keeps the connection open. The ね particle makes it feel like a shared understanding between friends rather than a formal request."},

    {type:"tip", title:"Casual Letter Structure in Japanese",
     text:"A typical casual Japanese letter or LINE message follows this flow:\n1. Opening: ひさしぶり！元気(げんき)？\n2. Reason for writing: 手紙(てがみ)を書(か)きました = I wrote a letter\n3. Body: 近況(きんきょう)を伝(つた)える = share your news\n4. Closing: また連絡(れんらく)してね。よろしくね。",
     deepDive:{title:"Letters vs LINE messages",
      text:"Japanese people use both traditional letters and digital messages.\n\nHandwritten letters (手紙(てがみ)): More formal and personal. Used for thank-you notes, seasonal greetings (年賀状(ねんがじょう) at New Year), and important messages. Receiving a handwritten letter is considered special.\n\nLINE messages: The standard for daily casual communication in Japan. Over 95 million Japanese people use LINE. Short, warm messages with stickers are the norm.\n\nBoth follow similar structure: greet, share news, close warmly. The difference is formality, not the pattern."}},

    {type:"mc",
     q:"You want to close a casual letter to a friend with 'let's stay in touch.' Which phrase fits best?",
     opts:["また連絡(れんらく)してね","さようなら","おせわになりました","しつれいします"],
     ans:"また連絡(れんらく)してね",
     hint:"The warm closing phrase that literally means 'please contact again' and keeps the connection open."},

    {type:"fb",
     s:"友達(ともだち)への手紙(てがみ)で「{1}？」と書(か)くと、元気(げんき)かどうか聞(き)けます。",
     a:["元気(げんき)"],
     opts:["元気(げんき)","仕事(しごと)","天気(てんき)","今(いま)"],
     hint:"The casual question asking 'how are you?' or 'are you doing well?' in a single word.",
     sSrc:"Writing '{1}?' in a letter to a friend lets you ask how they are doing."},

    {type:"match",
     pairs:[
       {trg:"手紙(てがみ)", src:"letter"},
       {trg:"書(か)く", src:"to write"},
       {trg:"ひさしぶり", src:"long time no see (casual)"},
       {trg:"近況(きんきょう)", src:"recent news"}
     ]},

    {type:"match",
     pairs:[
       {trg:"元気(げんき)？", src:"How are you? (casual)"},
       {trg:"また連絡(れんらく)してね", src:"let's stay in touch"},
       {trg:"よろしくね", src:"regards / take care"}
     ]},

    {type:"mc",
     q:"In a casual Japanese letter, ひさしぶり is used to:",
     opts:["Say goodbye","Open the letter after not seeing someone for a while","Ask for a favor","Express thanks"],
     ans:"Open the letter after not seeing someone for a while",
     hint:"This greeting is used when reconnecting with … you have not been in contact with recently."}
  ]
};

export default LESSON_F8_LETTER;
