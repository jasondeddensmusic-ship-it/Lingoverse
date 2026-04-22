// Unit 24 Expansion. Lesson 3: しかし・けれども (Formal Contrast Connectors)
const LESSON_3 = {
  id:"jav2_u24l3", title:"しかし・けれども", icon:"⚔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しかし・けれども",
     desc:"Master the core formal contrast connectors しかし, けれども, and their variations. These words bridge sentences with opposing ideas and are the backbone of written arguments, speeches, and news reporting. Learn the formality scale from でも (casual) to しかしながら (very formal).",
     goals:["Use しかし for neutral formal contrast","Use けれども and its shortened forms (けれど, けど)","Understand the full formality scale of contrast connectors"]},

    {type:"teach", trg:"しかし", src:"however / but (formal)", pos:"conj", gender:null,
     note:"The standard formal 'but.' Neutral tone, no surprise element.\nUsed at the start of a sentence. More formal than でも.",
     example:"A: にほんごはむずかしいです。しかし、とてもおもしろいです。\nB: わたしもそうおもいます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Japanese is difficult. However, it is very interesting.\nB: I think so too.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"しかし is the workhorse of formal Japanese contrast. It appears thousands of times in any newspaper edition. Unlike ところが (surprise) or にもかかわらず (concessive), しかし is emotionally neutral. It simply says 'the following contrasts with the preceding.' Its calm, balanced tone makes it perfect for academic writing and news."},

    {type:"teach", trg:"けれども", src:"however / although / but", pos:"conj", gender:null,
     note:"Can connect two sentences or two clauses within one sentence.\nFormality scale: けれども > けれど > けど.",
     example:"A: あめがふっています。けれども、さんぽにいきたいです。\nB: かさをもっていきましょう。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: It is raining. However, I want to go for a walk.\nB: Let us bring an umbrella.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"けれども has a unique flexibility: it works both between sentences (like しかし) and within sentences as a clause connector (like が). Its shortened forms mark formality: けれども (formal), けれど (polite), けど (casual). Japanese speakers unconsciously shift between these forms depending on who they are talking to."},

    {type:"teach", trg:"しかしながら", src:"nevertheless / however (very formal)", pos:"conj", gender:null,
     note:"The most formal contrast connector. Used in speeches, academic papers, and official statements.\nしかし + ながら (while/even though).",
     example:"A: けいざいはかいふくしています。しかしながら、かだいものこっています。\nB: どんなかだいがありますか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The economy is recovering. Nevertheless, challenges remain.\nB: What kind of challenges are there?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"しかしながら is the most elevated contrast connector. It appears in prime ministerial speeches, academic papers, and formal reports. The ながら adds a concessive nuance: 'even while acknowledging the previous point.' Using it in casual conversation would sound comically stiff, like saying 'notwithstanding' to a friend."},

    {type:"teach", trg:"だが", src:"but / however (written formal)", pos:"conj", gender:null,
     note:"Written-style contrast. Common in novels, news articles, and essays.\nRarely used in spoken Japanese.",
     example:"A: このけいかくにはおおくのりてんがある。だが、リスクもたかい。\nB: それはそうですね。\nA: だから、もうすこしけんとうしましょう。\nB: さんせいです。",
     exampleSrc:"A: This plan has many advantages. But the risks are also high.\nB: That is true.\nA: So let us consider it a bit more.\nB: I agree.",
     funFact:"だが is the written cousin of しかし. It appears in novels, newspaper editorials, and formal essays. In fiction, characters who speak with だが sound serious and authoritative. Narrators love だが for dramatic pivots: 'Everything seemed peaceful. だが, a shadow was approaching.' It adds literary weight to contrast."},

    {type:"mc", q:"Which is the MOST formal contrast connector?", opts:["しかしながら","けど","でも","しかし"], ans:"しかしながら",
     hint:"This very formal form adds ながら (while/even though) to the standard formal contrast word."},

    {type:"teach", trg:"かいふく", src:"recovery / restoration", pos:"noun", gender:null,
     note:"Kanji: 回復. かい (turn/revolve) + ふく (return).\nけいざいのかいふく = economic recovery. かいふくする = to recover.",
     example:"A: けがからかいふくしましたか？\nB: はい、もうすっかりかいふくしました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Have you recovered from the injury?\nB: Yes, I have completely recovered.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"回復 literally means 'turn and return,' like a wheel spinning back to its original position. It covers physical recovery (byouki kara kaifuku, recover from illness), economic recovery (keizai kaifuku), and system restoration (shisutemu kaifuku). The pandemic made けいざいかいふく one of the most-used news phrases."},

    {type:"teach", trg:"かだい", src:"challenge / issue / task", pos:"noun", gender:null,
     note:"Kanji: 課題. か (section/impose) + だい (topic/theme).\nSomething that needs to be addressed or solved.",
     example:"A: にほんのしゃかいがかかえるかだいはおおいです。\nB: とくにこうれいかがおおきなかだいですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Japan's society faces many challenges.\nB: The aging population is an especially big challenge.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"課題 carries a sense of obligation: it is a challenge that must be addressed, like homework (しゅくだい shares the だい character). In business, かだい means issues requiring action. Every meeting agenda lists かだい. It differs from もんだい (problem) in that かだい implies a path forward, while もんだい may have no solution."},

    {type:"teach", trg:"りてん", src:"advantage / merit / benefit", pos:"noun", gender:null,
     note:"Kanji: 利点. り (profit/benefit) + てん (point).\nOpposite: けってん (weakness/fault) or デメリット.",
     example:"A: このけいかくのりてんはなんですか？\nB: コストがやすいことがいちばんのりてんです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: What are the advantages of this plan?\nB: The biggest advantage is the low cost.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"利点 uses 利 (profit) and 点 (point). Japanese business presentations always include a りてんとけってん (merits and demerits) analysis. The loanword メリット/デメリット is increasingly common in spoken Japanese, but りてん/けってん remain standard in formal writing. Balanced analysis is valued over one-sided arguments."},

    {type:"fb", s:"けいざいはかいふくしています。{1}、かだいものこっています。\n(The economy is recovering. Nevertheless, challenges remain.)", a:"しかしながら", opts:["しかしながら","しかし","でも","だから"], sSrc:"The economy is recovering. Nevertheless, challenges remain.",
     hint:"The very formal connector used in official speeches and academic papers."},

    {type:"teach", trg:"〜ものの", src:"although ~ / despite the fact that ~", pos:"conj", gender:null,
     note:"Clause + ものの = although/despite. Formal written style.\nConcedes a point before presenting the main argument.",
     example:"A: にほんごをべんきょうしているものの、まだうまくはなせません。\nB: つづければかならずじょうずになりますよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Although I am studying Japanese, I still cannot speak well.\nB: If you continue, you will definitely improve.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"ものの is a literary concessive that functions like a more elegant 'although.' It appears in essays, novels, and formal writing. The もの (thing) here is the nominalizer, and の marks the contrast. Compared to けれども, ものの has a more resigned, reflective tone: the speaker acknowledges reality while expressing a contrasting feeling."},

    {type:"teach", trg:"つづける", src:"to continue / to keep doing", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 続ける. Also used as a suffix: verb stem + つづける.\nべんきょうしつづける = to keep studying.",
     example:"A: にほんごのべんきょうをつづけてください。\nB: はい、まいにちつづけます。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Please continue studying Japanese.\nB: Yes, I will continue every day.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"続ける as a suffix creates 'keep doing' compounds: 走り続ける (keep running), 信じ続ける (keep believing), 食べ続ける (keep eating). Japanese culture deeply values 続ける: the concept of 継続は力なり (continuation is power) is a well-known proverb. つづける is both a verb and a philosophy."},

    {type:"mc", q:"だが is typically found in:", opts:["Casual conversation","Written text like novels and essays","Children's speech","Text messages"], ans:"Written text like novels and essays",
     hint:"This w...-style connector adds literary authority to contrasting statements."},

    {type:"match", pairs:[{trg:"しかし",src:"however (formal)"},{trg:"けれども",src:"however/although"},{trg:"しかしながら",src:"nevertheless (very formal)"},{trg:"だが",src:"but (written)"}]},

    {type:"match", pairs:[{trg:"かいふく",src:"recovery"},{trg:"かだい",src:"challenge/issue"},{trg:"りてん",src:"advantage"},{trg:"ものの",src:"although (literary)"}]},

    {type:"fb", s:"にほんごをべんきょうしている{1}、まだうまくはなせません。\n(Although I am studying Japanese, I still cannot speak well.)", a:"ものの", opts:["ものの","けれど","しかし","だが"], sSrc:"Although I am studying Japanese, I still cannot speak well.",
     hint:"The literary clause-internal connector meaning 'although' or 'despite the fact that.'"},

    {type:"mc", q:"けれども, けれど, and けど are:", opts:["Only used in questions","Three different meanings","The same word at different formality levels","Only used in writing"], ans:"The same word at different formality levels",
     hint:"They form a scale from formal to casual, with speakers choosing based on the situation."},

    {type:"match", pairs:[{trg:"つづける",src:"to continue"},{trg:"かいふく",src:"recovery"},{trg:"しかし",src:"however"},{trg:"ものの",src:"although"}]},
  ]
};
export default LESSON_3;
