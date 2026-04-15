// Unit 25 Expansion. Lesson 5: Advanced Keigo in Business
const LESSON_5 = {
  id:"jav2_u25l5", title:"じっせんけいご", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"Advanced Keigo in Business",
     desc:"Beyond basic keigo lies a layer of ultra-polite expressions used in client-facing situations, formal emails, and high-level meetings. Master these patterns to sound professionally fluent in any Japanese business setting.",
     goals:["Use advanced humble and respectful verb forms","Navigate email keigo patterns","Apply double-polite expressions correctly"]},

    {type:"teach", trg:"おっしゃる", src:"to say (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いう. Used for the listener's or a superior's speech.\nおっしゃるとおりです = As you say / You are correct.",
     example:"A: ぶちょうがおっしゃったとおりにすすめましょう。\nB: はい、しじにしたがいます。",
     exampleSrc:"A: Let us proceed as the department head said.\nB: Yes, I will follow the instructions.",
     funFact:"おっしゃる is one of the most important respectful verbs. It replaces いう (say) when describing someone else's speech. The phrase おっしゃるとおりです (exactly as you say) is the go-to agreement phrase in business. It simultaneously validates the speaker and shows respect."},

    {type:"teach", trg:"もうしあげる", src:"to say / to tell (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 申し上げる. Ultra-humble form of いう.\nもうす is humble; もうしあげる is even more humble.",
     example:"A: ひとこともうしあげてもよろしいでしょうか。\nB: どうぞ、おっしゃってください。",
     exampleSrc:"A: May I say a word?\nB: Please, go ahead.",
     funFact:"申し上げる is a two-tier humble verb. もうす already humbles いう, and adding あげる (give upward) pushes it further down. This creates a very deep bow in linguistic form. The phrase もうしわけございません (I have no excuse) uses もうす and is the standard deep apology in business."},

    {type:"teach", trg:"うけたまわる", src:"to hear / to receive (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 承る. Ultra-humble form of きく (hear) and うける (receive).\nUsed in service industries and formal business.",
     example:"A: ごちゅうもんをうけたまわります。\nB: コーヒーをおねがいします。",
     exampleSrc:"A: I will take your order.\nB: Coffee, please.",
     funFact:"承る packs enormous politeness into one word. It replaces both きく (hear) and うける (receive) in humble contexts. Hotel staff, restaurant servers, and customer service agents use it constantly. The kanji 承 also appears in 承認 (approval) and 承知 (acknowledged), all carrying the sense of humbly receiving."},

    {type:"mc", q:"おっしゃるとおりです means:", opts:["I will consider it","That is difficult","You are exactly right","Please say it again"], ans:"You are exactly right",
     hint:"おっしゃる replaces いう for the listener's speech, and とおり means 'in accordance with.'"},

    {type:"teach", trg:"ごらんになる", src:"to see / to look (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of みる. Used for superiors and clients.\nしりょうをごらんください = Please look at the materials.",
     example:"A: こちらのしりょうをごらんになりましたか？\nB: はい、かくにんしました。",
     exampleSrc:"A: Have you looked at these materials?\nB: Yes, I have checked them.",
     funFact:"ご覧になる is built from ご (honorific prefix) + 覧 (view, from the kanji for imperial viewing) + になる (respectful pattern). It replaces みる when the subject is someone you respect. The imperative ごらんください (please look) is softer than みてください and is standard in business presentations."},

    {type:"teach", trg:"はいけんする", src:"to see / to look (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 拝見. はい (worship) + けん (see). Humble form of みる.\nしりょうをはいけんしました = I looked at the materials (humbly).",
     example:"A: めいしをはいけんしてもよろしいですか？\nB: どうぞ。",
     exampleSrc:"A: May I look at your business card?\nB: Please do.",
     funFact:"拝見 literally means 'worshipfully see.' The 拝 kanji means worship or bow and appears in 拝む (to pray/worship). By saying はいけんする, you frame the act of looking as receiving a gracious gift. This level of humility is standard when handling someone's めいし (business card) for the first time."},

    {type:"tip", title:"Keigo Pairs: Humble vs Respectful",
     text:"Each action has two keigo directions:\n\nSay: もうす/もうしあげる (humble) vs おっしゃる (respectful)\nSee: はいけんする (humble) vs ごらんになる (respectful)\nDo: いたす (humble) vs なさる (respectful)\nGo: まいる (humble) vs いらっしゃる (respectful)\nEat: いただく (humble) vs めしあがる (respectful)\n\nRule: Humble forms for YOUR actions. Respectful forms for THEIR actions. Mixing them up is the number one keigo mistake.",
     deepDive:{title:"Email Keigo Patterns",
      text:"Japanese business emails follow strict keigo formulas:\n\nOpening: おせわになっております (Thank you for your continued support)\nRequest: おいそがしいところおそれいりますが (I am sorry to trouble you when you are busy, but...)\nClosing: よろしくおねがいいたします (Respectfully requesting your cooperation)\nAttachment: しりょうをてんぷいたします (I humbly attach the materials)\n\nThese phrases are near-mandatory. Omitting the opening おせわになっております in a business email is considered rude."}},

    {type:"fb", s:"ごちゅうもんを{1}。\n(I will take your order.)", a:"うけたまわります", opts:["うけたまわります","いただきます","もうします","おっしゃいます"], sSrc:"I will take your order.",
     hint:"The ultra-humble verb for receiving or hearing, used in service contexts."},

    {type:"teach", trg:"おせわになる", src:"to receive care/support (set phrase)", pos:"verb", gender:null,
     note:"おせわになっております = standard business email opening.\nMeans: Thank you for your continued support/business.",
     example:"A: いつもおせわになっております。\nB: こちらこそおせわになっております。",
     exampleSrc:"A: Thank you always for your support.\nB: Thank you for your support as well.",
     funFact:"おせわになっております is the number one business email opener in Japan. It translates roughly as 'I am in your care' but functions as 'Thank you for our ongoing business relationship.' Even if you have never met the person, this phrase is expected. Omitting it signals either unfamiliarity with business culture or intentional coldness."},

    {type:"teach", trg:"よろしくおねがいいたします", src:"I humbly request your cooperation", pos:"verb", gender:null,
     note:"The most polite form of よろしくおねがいします.\nStandard closing for business emails and formal requests.",
     example:"A: いじょう、よろしくおねがいいたします。\nB: しょうちいたしました。",
     exampleSrc:"A: That is all. I humbly request your cooperation.\nB: Understood.",
     funFact:"This is the ultimate business sign-off. よろしく (well/favorably) + おねがい (request) + いたします (humble do). The phrase is untranslatable because it combines a request, an apology for imposing, and an expression of trust. Every Japanese business email ends with some version of this."},

    {type:"mc", q:"はいけんする is the humble keigo form of:", opts:["みる (to see)","きく (to hear)","いう (to say)","する (to do)"], ans:"みる (to see)",
     hint:"The 見 (s...) kanji is embedded in 拝見, combined with 拝 (worship)."},

    {type:"teach", trg:"しょうち", src:"acknowledgment / understanding / consent", pos:"noun", gender:null,
     note:"Kanji: 承知. しょうちしました = Understood/Acknowledged.\nMore formal than わかりました.",
     example:"A: あしたのじゅうじにおこしください。\nB: しょうちいたしました。",
     exampleSrc:"A: Please come at 10 AM tomorrow.\nB: Understood.",
     funFact:"承知いたしました is the business upgrade of わかりました. The politeness ladder goes: わかった (casual) < わかりました (polite) < かしこまりました (very polite) < 承知いたしました (formal business). Each step up adds both formality and humility. Using the right level for the right situation is the mark of a true keigo master."},

    {type:"fb", s:"いつも{1}になっております。\n(Thank you always for your support.)", a:"おせわ", opts:["おせわ","ごらん","はいけん","おねがい"], sSrc:"Thank you always for your support.",
     hint:"The set phrase using care/assistance that opens nearly every business email."},

    {type:"match", pairs:[{trg:"おっしゃる",src:"to say (respectful)"},{trg:"もうしあげる",src:"to say (humble)"},{trg:"ごらんになる",src:"to see (respectful)"},{trg:"はいけんする",src:"to see (humble)"}]},

    {type:"mc", q:"しょうちいたしました is the business-level replacement for:", opts:["すみません (sorry)","わかりました (understood)","ありがとう (thank you)","おねがいします (please)"], ans:"わかりました (understood)",
     hint:"This phrase elevates 'I understand' to formal business acknowledgment."},

    {type:"match", pairs:[{trg:"うけたまわる",src:"to receive (humble)"},{trg:"おせわになる",src:"to receive support"},{trg:"しょうち",src:"acknowledgment"},{trg:"よろしくおねがいいたします",src:"requesting cooperation"}]},
  ]
};
export default LESSON_5;
