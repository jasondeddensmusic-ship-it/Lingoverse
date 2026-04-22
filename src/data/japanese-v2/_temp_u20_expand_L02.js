// Unit 20 Expansion. Lesson 4: メールのけいご (Keigo in Emails)
const LESSON_4 = {
  id:"jav2_u20l4", title:"メールのけいご", icon:"📧", xp:15, board:true,
  steps:[
    {type:"intro", title:"メールのけいご",
     desc:"Business emails in Japanese follow strict keigo formulas. Opening greetings, closing phrases, and humble self-references are all standardized. Learn the template that every Japanese professional uses daily, and your emails will sound polished and credible.",
     goals:["Write email openings and closings with proper keigo","Use humble forms for your own actions in emails","Request actions politely with いただけますか"]},

    {type:"teach", trg:"おつかれさまです", src:"thank you for your hard work (email greeting)", pos:"intj", gender:null,
     note:"Standard internal email greeting among colleagues.\nおつかれ (tiredness) + さま (honorific). Used for people in your company.",
     example:"A: おつかれさまです。えいぎょうぶのさとうです。\nB: おつかれさまです。ごようけんはなんでしょうか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Thank you for your work. This is Satou from sales.\nB: Thank you for your work. What can I help you with?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"おつかれさまです is the universal Japanese workplace greeting. It opens emails, starts phone calls, and is said when leaving the office. Literally acknowledging someone's tiredness/effort, it functions as 'hello' among colleagues. For external contacts, おせわになっております is used instead."},

    {type:"teach", trg:"いただけますでしょうか", src:"could you possibly (do something)?", pos:"verb", gender:null,
     note:"いただく (humble receive) + potential + でしょうか (wonder).\nThe most polite way to request something.",
     example:"A: しりょうをおおくりいただけますでしょうか？\nB: はい、ほんじつちゅうにおおくりいたします。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Could you possibly send the materials?\nB: Yes, I will send them within today.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"いただけますでしょうか is the pinnacle of polite requests in business email. It layers three levels of politeness: いただく (humble receive), potential form (could you), and でしょうか (I wonder). This triple-softening makes it nearly impossible to refuse rudely. It is the default for any email request to superiors or clients."},

    {type:"teach", trg:"ごかくにんください", src:"please confirm (honorific)", pos:"verb", gender:null,
     note:"ご + かくにん (confirmation) + ください.\nKanji: ご確認ください. Standard email closing request.",
     example:"A: てんぷファイルをごかくにんください。\nB: はい、かくにんいたします。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please confirm the attached file.\nB: Yes, I will confirm it.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"ご確認ください is one of the most-typed phrases in Japanese business emails. The ご prefix makes it honorific because 確認 is a Chinese-origin word. The reply かくにんいたします (I will confirm, humble) uses the humble いたす. This exchange is so formulaic that many email programs suggest it automatically."},

    {type:"teach", trg:"てんぷ", src:"attachment (email)", pos:"noun", gender:null,
     note:"Short for てんぷファイル (attached file). する-verb: てんぷする = to attach.\nKanji: 添付.",
     example:"A: しりょうをてんぷいたします。\nB: ありがとうございます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I am attaching the materials.\nB: Thank you.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"添付 combines 添 (attach/add) and 付 (affix). In Japanese business culture, sending attachments follows strict etiquette: state what you are attaching, use humble language (てんぷいたします), and sometimes password-protect sensitive files with the password sent in a separate email."},

    {type:"mc", q:"いただけますでしょうか is used for:", opts:["Making a very polite request","Expressing frustration","Giving an order","Declining an invitation"], ans:"Making a very polite request",
     hint:"This triple-layered p... form is the standard for p... requests in business emails."},

    {type:"teach", trg:"おいそがしいところ", src:"(I know) you are busy (polite preface)", pos:"noun", gender:null,
     note:"お + いそがしい (busy) + ところ (situation/place).\nUsed before making a request to acknowledge the other's workload.",
     example:"A: おいそがしいところおそれいりますが、ごかくにんおねがいいたします。\nB: しょうちいたしました。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I am sorry to bother you when you are busy, but please confirm.\nB: Understood.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"おいそがしいところ is a cushion phrase (クッション言葉, kusshon kotoba). Before asking someone to do something, you acknowledge their burden. Other cushion phrases include おてすうですが (I know this is trouble) and おそれいりますが (I am sorry to impose). These soften requests significantly."},

    {type:"teach", trg:"おそれいります", src:"I am sorry to trouble you / excuse me", pos:"verb", gender:null,
     note:"Very humble apology-request phrase. おそれ (fear) + いる (to enter).\nUsed before making requests or after receiving favors.",
     example:"A: おそれいりますがおなまえをおしえていただけますか？\nB: やまだともうします。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Excuse me, could you tell me your name?\nB: My name is Yamada.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"おそれいります literally means 'I enter into fear/awe.' It is one of the most refined keigo expressions. Used before requests (sorry to trouble you, but...) and after receiving help (I am in awe of your kindness). Its elegance makes it a favorite of service professionals and business communicators."},

    {type:"fb", s:"しりょうをおおくり{1}でしょうか？\n(Could you possibly send the materials?)", a:"いただけます", opts:["いただけます","ください","します","もらいます"], sSrc:"Could you possibly send the materials?",
     hint:"The most polite request form: humble 'receive' in potential form + でしょうか."},

    {type:"teach", trg:"しょうちいたしました", src:"understood / acknowledged (humble)", pos:"verb", gender:null,
     note:"しょうち (consent/understanding) + いたしました (humble past of する).\nKanji: 承知いたしました. More formal than わかりました.",
     example:"A: あしたの10じにおねがいします。\nB: しょうちいたしました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Please make it 10 o'clock tomorrow.\nB: Understood.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"承知いたしました is the gold standard business acknowledgment. It is more formal than わかりました (I understand) and かしこまりました (I respectfully understand). The kanji 承 means 'to inherit/accept' and 知 means 'to know.' Together: 'I have accepted and understood.' Used in emails, meetings, and phone calls."},

    {type:"teach", trg:"よろしくおねがいいたします", src:"I humbly ask for your support (closing)", pos:"intj", gender:null,
     note:"The standard email closing line. Humble version of よろしくおねがいします.\nいたします = humble form of します.",
     example:"A: おてすうおかけしますがよろしくおねがいいたします。\nB: こちらこそよろしくおねがいいたします。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I am sorry for the trouble, but I appreciate your support.\nB: Likewise, I appreciate your support.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"よろしくおねがいいたします closes virtually every Japanese business email. It is the humble version of よろしくおねがいします. This phrase has no direct English translation. It roughly means 'please treat me favorably' and serves as both a closing and a relationship-maintaining ritual."},

    {type:"mc", q:"おいそがしいところおそれいりますが is:", opts:["A complaint about being busy","A cushion phrase before making a request","A way to say you are busy","An email closing"], ans:"A cushion phrase before making a request",
     hint:"This combined p... acknowledges the reader's busy schedule b... asking them to do something."},

    {type:"teach", trg:"ほんじつちゅう", src:"within today / by end of today", pos:"adv", gender:null,
     note:"ほんじつ (today, formal) + ちゅう (during/within).\nKanji: 本日中. More formal than きょうちゅう.",
     example:"A: ほんじつちゅうにごへんとうください。\nB: しょうちいたしました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Please reply by end of today.\nB: Understood.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"本日中 is the formal email version of きょうじゅう (by today, casual). Business emails use 本日 (today), 明日 (tomorrow), and 来週 (next week) in their kanji/formal readings. The suffix ちゅう (中, within/during) creates time boundaries: 午前中 (within the morning), 今週中 (within this week)."},

    {type:"teach", trg:"ごへんとう", src:"reply / response (honorific)", pos:"noun", gender:null,
     note:"ご + へんとう (response). する-verb: ごへんとうする.\nKanji: ご返答. Honorific for the other person's reply.",
     example:"A: おいそがしいところおそれいりますが、ごへんとうおねがいいたします。\nB: ほんじつちゅうにへんとういたします。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I am sorry to trouble you when busy, but please reply.\nB: I will reply within today.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"返答 combines 返 (return) and 答 (answer). The ご prefix makes it honorific (for the other person's reply). When referring to YOUR reply, use the humble form: へんとういたします (I will reply). This honorific/humble distinction in the SAME word is a hallmark of advanced keigo."},

    {type:"fb", s:"{1}いたしました。\n(Understood. - humble)", a:"しょうち", opts:["しょうち","りかい","わかり","なっとく"], sSrc:"Understood.",
     hint:"The most formal business acknowledgment. Combines 承 (accept) and 知 (know) with humble いたす."},

    {type:"tip", title:"Business Email Template",
     text:"Opening (to colleagues):\nおつかれさまです。[department]の[name]です。\n\nOpening (to external):\nいつもおせわになっております。[company]の[name]です。\n\nCushion phrases:\nおいそがしいところおそれいりますが = sorry to trouble you when busy\nおてすうおかけしますが = I am sorry for the inconvenience\n\nRequests:\n~いただけますでしょうか = could you possibly~?\nごかくにんください = please confirm\n\nAcknowledgment:\nしょうちいたしました = understood\nかしこまりました = I respectfully understand\n\nClosing:\nよろしくおねがいいたします。",
     deepDive:{title:"Email Keigo Levels",
      text:"Japanese email has levels of formality:\n\nLevel 1 (casual internal): おつかれさまです + ます/です.\nLevel 2 (formal internal): おつかれさまです + いたします/いただけますか.\nLevel 3 (external standard): おせわになっております + いただけますでしょうか.\nLevel 4 (external very formal): おせわになっております + おそれいりますが + いただけますでしょうか.\n\nMost business emails are Level 3. Level 4 is for important clients, first contact, and senior executives. Using Level 1 with external contacts is a serious business etiquette mistake."}},

    {type:"match", pairs:[{trg:"おつかれさまです",src:"thank you for your work"},{trg:"いただけますでしょうか",src:"could you possibly?"},{trg:"ごかくにんください",src:"please confirm"},{trg:"しょうちいたしました",src:"understood (humble)"}]},

    {type:"match", pairs:[{trg:"おそれいります",src:"sorry to trouble you"},{trg:"てんぷ",src:"attachment"},{trg:"ほんじつちゅう",src:"within today"},{trg:"よろしくおねがいいたします",src:"closing greeting (humble)"}]},

    {type:"mc", q:"For emails to external contacts, you open with:", opts:["しつれいいたします","おつかれさまです","おせわになっております","よろしくおねがいいたします"], ans:"おせわになっております",
     hint:"おつかれさまです is for internal colleagues. External contacts get the relationship-acknowledgment greeting."},
  ]
};
export default LESSON_4;
