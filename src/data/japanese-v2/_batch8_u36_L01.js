// Batch 8 – Unit 36 (B2.4 Comprehensive): Advanced Set Phrases & Register
const BATCH8_L1 = {
  id:"jav2_u36l_b8_1", title:"じょうきゅうていけいひょうげん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうきゅうていけいひょうげん",
     desc:"Master advanced set phrases and register-switching expressions that mark true fluency. These expressions let you navigate formal, academic, and professional Japanese with confidence.",
     goals:["Use advanced set phrases for formal occasions","Switch register between casual and formal","Express nuanced opinions and qualifications"]},

    {type:"teach", trg:"おそれながら", src:"with all due respect / I am afraid", pos:"adv", gender:null,
     note:"Very formal. Used before disagreeing politely.\nおそれながらもうしあげます = I humbly venture to say.",
     example:"A: おそれながらもうしあげますが、そのけいかくにはもんだいがあるとおもいます。\nB: くわしくきかせてください。",
     exampleSrc:"A: With all due respect, I think there is a problem with that plan.\nB: Please tell me in detail.",
     funFact:"おそれながら is the gold standard of polite disagreement in Japanese business. It literally means 'while fearing (your reaction).' Using this before criticism softens the blow dramatically. In samurai dramas, subjects say おそれながらもうしあげます before telling their lord bad news. Modern business retains this formula."},

    {type:"teach", trg:"さしつかえなければ", src:"if it is not too much trouble / if you do not mind", pos:"conj", gender:null,
     note:"Very polite conditional request. さしつかえ = hindrance/objection.\nForm: verb potential + ければ.",
     example:"A: さしつかえなければ、おなまえをおしえていただけますか？\nB: たなかともうします。",
     exampleSrc:"A: If you do not mind, could you tell me your name?\nB: My name is Tanaka.",
     funFact:"さしつかえなければ is the most polite way to preface a request that might be intrusive. It is essential in business and formal situations. Asking for personal information, making scheduling requests, or requesting documents all benefit from this softener. The casual equivalent is よければ (if it is okay)."},

    {type:"teach", trg:"いわば", src:"so to speak / as it were", pos:"adv", gender:null,
     note:"Kanji: 言わば. Introduces an analogy or figurative expression.\nいわば、にほんのシリコンバレーです = it is, so to speak, Japan's Silicon Valley.",
     example:"A: このまちはいわばにほんのシリコンバレーです。\nB: たくさんのベンチャーきぎょうがありますね。",
     exampleSrc:"A: This town is, so to speak, Japan's Silicon Valley.\nB: There are many venture companies.",
     funFact:"いわば (言わば, if one were to say) introduces metaphors and comparisons. It signals that the speaker is about to use figurative language. In academic writing, いわば precedes key analogies. In speeches, it highlights the most memorable comparison. It is more formal than たとえるなら (if I were to compare)."},

    {type:"teach", trg:"にかぎらず", src:"not limited to / not just", pos:"part", gender:null,
     note:"に + かぎる (to limit) + ず (negative). にほんにかぎらず = not limited to Japan.\nBroadens the scope.",
     example:"A: このもんだいはにほんにかぎらずせかいきょうつうです。\nB: グローバルなかだいですね。",
     exampleSrc:"A: This problem is not limited to Japan but common worldwide.\nB: It is a global challenge.",
     funFact:"にかぎらず elegantly broadens an argument beyond a specific case. AにかぎらずBも (not just A but B also) is a common essay pattern. がくせいにかぎらずしゃかいじんも (not just students but working adults too). It demonstrates analytical thinking by showing awareness of broader applicability."},

    {type:"teach", trg:"あらためて", src:"once again / anew / formally", pos:"adv", gender:null,
     note:"Kanji: 改めて. あらためておれいもうしあげます = I express my thanks once again.\nSignals formality and sincerity.",
     example:"A: あらためておれいもうしあげます。\nB: こちらこそ、ありがとうございました。",
     exampleSrc:"A: I express my thanks once again.\nB: Likewise, thank you.",
     funFact:"あらためて serves multiple functions: あらためてかんがえると (thinking about it again), あらためてしょうかいします (let me formally introduce), あらためてれんらくします (I will contact you again properly). It signals that what follows is deliberate, formal, and considered, not casual or off-the-cuff."},

    {type:"mc", q:"When would you use おそれながら?", opts:["Before politely disagreeing with a superior","When greeting someone casually","When ordering at a restaurant","When saying goodbye"], ans:"Before politely disagreeing with a superior",
     hint:"This very formal phrase literally means 'while fearing (your reaction).'"},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Used with negative form. かならずしもそうではない = that is not necessarily the case.\nSoftens absolute statements.",
     example:"A: たかいものがかならずしもいいとはかぎりません。\nB: そのとおりですね。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: That is true.",
     funFact:"かならずしも + negative is essential for nuanced argument in Japanese. It softens claims: かならずしもただしくない (not necessarily correct). Japanese academic style avoids absolutes, making かならずしも one of the most used qualifiers. Compare: かならず (always/certainly) vs. かならずしも (not necessarily)."},

    {type:"teach", trg:"ともかくとして", src:"setting that aside / regardless of", pos:"conj", gender:null,
     note:"Puts one topic aside to focus on another.\nAはともかくとして、Bについて = setting A aside, regarding B.",
     example:"A: げんいんはともかくとして、まずたいさくをかんがえましょう。\nB: そうですね。いまはきんきゅうたいおうがさきです。",
     exampleSrc:"A: Setting aside the cause, let us first think about countermeasures.\nB: Right. Emergency response comes first now.",
     funFact:"ともかくとして is a sophisticated way to redirect discussion. In meetings, it prevents getting stuck on one issue: コストはともかくとして、ひんしつについて (setting aside cost, regarding quality). It shows you acknowledge the sidelined topic while prioritizing what matters most. はともかく is the shorter form."},

    {type:"teach", trg:"いっけん", src:"at first glance / seemingly / apparently", pos:"adv", gender:null,
     note:"Kanji: 一見. いっけんかんたんそうに = seemingly simple.\nいっけんすると = at first glance.",
     example:"A: いっけんかんたんそうにみえますが、じつはむずかしいです。\nB: みためにだまされてはいけませんね。",
     exampleSrc:"A: It seems simple at first glance, but actually it is difficult.\nB: We must not be fooled by appearances.",
     funFact:"いっけん introduces a gap between appearance and reality: いっけんAだが、じつはBだ (at first glance A, but actually B). This pattern is extremely common in Japanese essays and JLPT reading passages. It demonstrates critical thinking: not accepting surface-level impressions."},

    {type:"teach", trg:"あくまでも", src:"to the very end / absolutely / strictly", pos:"adv", gender:null,
     note:"Emphasizes firmness of position. あくまでもこじんのいけんです = this is strictly my personal opinion.\nLimits scope.",
     example:"A: あくまでもかせつですが、こうかんがえています。\nB: なるほど、きょうみぶかいかせつですね。",
     exampleSrc:"A: This is strictly a hypothesis, but I think this.\nB: I see, that is an interesting hypothesis.",
     funFact:"あくまでも has two key uses: limiting scope (あくまでもわたしのいけんです = strictly my opinion) and expressing determination (あくまでもたたかう = fight to the very end). The limiting use is more common in formal speech. It is a defensive hedge: if the opinion proves wrong, あくまでも protects the speaker."},

    {type:"teach", trg:"たしかに", src:"certainly / admittedly / indeed", pos:"adv", gender:null,
     note:"Kanji: 確かに. たしかにそうですが... = certainly, but...\nConcedes a point before countering.",
     example:"A: たしかにこのほうほうはこうかてきです。しかし、コストがたかすぎます。\nB: バランスがむずかしいですね。",
     exampleSrc:"A: Admittedly, this method is effective. However, the cost is too high.\nB: The balance is difficult.",
     funFact:"たしかに...しかし (certainly...however) is the most important debate structure in Japanese. Conceding before countering shows intellectual honesty and respect. JLPT essays that use this pattern score higher. It mirrors the きしょうてんけつ narrative structure: acknowledge, then turn."},

    {type:"teach", trg:"まさに", src:"precisely / exactly / truly", pos:"adv", gender:null,
     note:"Kanji: 正に. まさにそのとおりです = that is precisely right.\nStrengthens agreement or identification.",
     example:"A: まさにわたしがいいたかったことです。\nB: かんがえがいっちしましたね。",
     exampleSrc:"A: That is precisely what I wanted to say.\nB: Our thoughts are aligned.",
     funFact:"まさに is the emphatic 'precisely' that validates and strengthens. まさにそのとおり (precisely so) is enthusiastic agreement. まさにいま (right at this moment) emphasizes timing. In speeches, まさにきょう (precisely today) highlights the significance of the present occasion."},

    {type:"fb", s:"{1}もうしあげますが、そのけいかくにはもんだいがあります。\n(With all due respect, there is a problem with that plan.)", a:"おそれながら", opts:["おそれながら","たしかに","あくまでも","さしつかえ"], sSrc:"With all due respect, there is a problem with that plan.",
     hint:"This ultra-polite prefix literally means 'while fearing' and is used before disagreeing."},

    {type:"teach", trg:"〜かねる", src:"to be unable to / to find it difficult to", pos:"verb", gender:null,
     note:"Polite refusal. おこたえしかねます = I am unable to answer.\nSofter than できません.",
     example:"A: そのしつもんにはおこたえしかねます。\nB: わかりました。べつのしつもんをします。",
     exampleSrc:"A: I am unable to answer that question.\nB: Understood. I will ask another question.",
     funFact:"かねる is the business Japanese way to say 'no' without saying いいえ. うけいれかねます (cannot accept), さんかしかねます (cannot participate), おうじかねます (cannot comply). It is softer than できません and avoids direct rejection. Mastering かねる is essential for Japanese business communication."},

    {type:"teach", trg:"こころよく", src:"willingly / gladly / with pleasure", pos:"adv", gender:null,
     note:"Kanji: 快く. こころよくひきうける = to gladly accept.\nUsed when agreeing enthusiastically.",
     example:"A: おねがいをこころよくひきうけてくださいました。\nB: おやくにたてればうれしいです。",
     exampleSrc:"A: You gladly accepted my request.\nB: I am happy if I can be of use.",
     funFact:"こころよく (快く) describes willing, cheerful acceptance. It is the positive counterpart to しぶしぶ (reluctantly). こころよくきょうりょくしてくれた (cooperated willingly) expresses deep gratitude. In formal thank-you speeches, こころよくごきょうりょくいただき (your willing cooperation) is a standard phrase."},

    {type:"match", pairs:[{trg:"おそれながら",src:"with all due respect"},{trg:"さしつかえなければ",src:"if you do not mind"},{trg:"かならずしも",src:"not necessarily"},{trg:"あくまでも",src:"strictly/to the end"},{trg:"まさに",src:"precisely/exactly"}],
     hint:"Match each advanced expression with its English meaning."},

    {type:"mc", q:"What does かねる express in business Japanese?", opts:["A polite way to refuse or say 'unable to'","An enthusiastic agreement","A casual greeting","A formal invitation"], ans:"A polite way to refuse or say 'unable to'",
     hint:"This verb suffix is softer than できません and avoids direct rejection."},

    {type:"fb", s:"たかいものが{1}いいとはかぎりません。\n(Expensive things are not necessarily good.)", a:"かならずしも", opts:["かならずしも","かならず","ぜったいに","たしかに"], sSrc:"Expensive things are not necessarily good.",
     hint:"This adverb + negative pattern means 'not always' or 'not necessarily.'"},

    {type:"mc", q:"What is the most common essay debate structure in Japanese?", opts:["たしかに...しかし (certainly...however)","まず...そして (first...then)","もちろん...だから (of course...therefore)","ところで...でも (by the way...but)"], ans:"たしかに...しかし (certainly...however)",
     hint:"Conceding before countering shows intellectual honesty and is valued in academic writing."}
  ]
};
export default BATCH8_L1;
