// Batch 8 – Unit 32 (B2.4 Medicine): Mental Health & Wellness
const BATCH8_L1 = {
  id:"jav2_u32l_b8_1", title:"メンタルヘルスとウェルネス", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"メンタルヘルスとウェルネス",
     desc:"Master mental health and wellness vocabulary increasingly prominent in Japanese society. These terms reflect evolving attitudes toward psychological well-being.",
     goals:["Discuss mental health topics sensitively","Understand wellness and self-care vocabulary","Navigate therapeutic and counseling terminology"]},

    {type:"teach", trg:"メンタルヘルス", src:"mental health", pos:"noun", gender:null,
     note:"Loanword. メンタルヘルスケア = mental health care.\nIncreasingly discussed in Japan.",
     example:"A: しょくばでのメンタルヘルスたいさくがじゅうようです。\nB: ストレスチェックがぎむかされましたね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Mental health measures at the workplace are important.\nB: Stress checks have been made mandatory.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan mandated annual ストレスチェック (stress checks) for companies with 50+ employees in 2015. メンタルヘルス awareness has grown dramatically, though stigma remains. The word itself is English-derived because Japanese lacked a concise native equivalent. せいしんてきけんこう (mental health) is the formal Japanese term."},

    {type:"teach", trg:"カウンセリング", src:"counseling / therapy", pos:"noun", gender:null,
     note:"Loanword. カウンセラー = counselor.\nしんりカウンセリング = psychological counseling.",
     example:"A: カウンセリングをうけてみませんか？\nB: すこしきょうみがあります。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Would you like to try counseling?\nB: I am a little interested.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"カウンセリング in Japan has expanded from school settings to workplaces and private practice. Japan created the こうにんしんりし (certified public psychologist) qualification in 2017. Barriers include cost, stigma, and shortage of professionals. Online カウンセリング grew rapidly during the pandemic."},

    {type:"teach", trg:"バーンアウト", src:"burnout", pos:"noun", gender:null,
     note:"Loanword. もえつきしょうこうぐん = burnout syndrome (native term).\nしごとでバーンアウトする = to burn out from work.",
     example:"A: バーンアウトきみなのでやすみをとります。\nB: ゆっくりやすんでくださいね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: I am showing signs of burnout so I will take time off.\nB: Please rest well.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"バーンアウト (burnout) was recognized by WHO as an occupational phenomenon in 2019. In Japan, it overlaps with かろうし (death from overwork) culture. もえつきしょうこうぐん (burnout syndrome) affects teachers, nurses, and IT workers most. Japan's long-hours culture makes バーンアウト prevention a policy priority."},

    {type:"teach", trg:"じりつしんけい", src:"autonomic nervous system", pos:"noun", gender:null,
     note:"Kanji: 自律神経. じりつしんけいしっちょうしょう = autonomic dysfunction.\nStress-related condition common in Japan.",
     example:"A: ストレスでじりつしんけいがみだれています。\nB: せいかつリズムをととのえましょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: My autonomic nervous system is disrupted from stress.\nB: Let us regulate your daily rhythm.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"じりつしんけいしっちょう (autonomic nervous system imbalance) is a uniquely common Japanese diagnosis. Symptoms include fatigue, dizziness, and sleep problems. It is attributed to stress, irregular schedules, and seasonal changes. Treatment emphasizes せいかつしゅうかん (lifestyle habits) over medication."},

    {type:"teach", trg:"マインドフルネス", src:"mindfulness", pos:"noun", gender:null,
     note:"Loanword. めいそう = meditation (native word).\nマインドフルネスめいそう = mindfulness meditation.",
     example:"A: マインドフルネスをまいにちじっせんしています。\nB: こうかはありますか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: I practice mindfulness every day.\nB: Is it effective?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"マインドフルネス has come full circle in Japan: Buddhist めいそう (meditation) was exported to the West, secularized as 'mindfulness,' and re-imported to Japan as マインドフルネス. Many Japanese companies now offer マインドフルネスけんしゅう (training). The irony of Japan re-importing its own spiritual tradition is noted by cultural commentators."},

    {type:"mc", q:"When did Japan mandate workplace stress checks?", opts:["2015","2000","2020","2010"], ans:"2015",
     hint:"Companies with 50 or more employees must conduct annual ストレスチェック."},

    {type:"teach", trg:"ふみん", src:"insomnia / sleeplessness", pos:"noun", gender:null,
     note:"Kanji: 不眠. ふみんしょう = insomnia disorder.\nにほんじんのすいみんじかんはせかいでみじかい.",
     example:"A: さいきんふみんにくるしんでいます。\nB: いしにそうだんしたほうがいいですよ。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: I have been suffering from insomnia recently.\nB: You should consult a doctor.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan has one of the world's shortest average sleep times: about 6 hours 22 minutes. ふみん (insomnia) affects an estimated 20% of Japanese adults. The culture of ざんぎょう (overtime) and スマートフォン use before bed contributes. いねむり (dozing at work/on trains) is socially accepted as proof of hard work."},

    {type:"teach", trg:"りょうほう", src:"therapy / treatment method", pos:"noun", gender:null,
     note:"Kanji: 療法. にんちこうどうりょうほう = cognitive behavioral therapy (CBT).\nおんがくりょうほう = music therapy.",
     example:"A: にんちこうどうりょうほうがこうかてきです。\nB: やくぶつりょうほうとへいようしますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Cognitive behavioral therapy is effective.\nB: Do you combine it with drug therapy?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"にんちこうどうりょうほう (CBT) is gaining ground in Japan alongside traditional やくぶつりょうほう (pharmacotherapy). Japan's mental health treatment historically favored medication and hospitalization. The shift toward りょうほう diversity reflects global trends. さぎょうりょうほう (occupational therapy) and げいじゅつりょうほう (art therapy) are also expanding."},

    {type:"teach", trg:"じここうていかん", src:"self-esteem / self-affirmation", pos:"noun", gender:null,
     note:"じこ (self) + こうてい (affirmation) + かん (feeling).\nじここうていかんがひくい = low self-esteem.",
     example:"A: にほんのわかものはじここうていかんがひくいとされています。\nB: きょういくのかだいですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japanese youth are said to have low self-esteem.\nB: It is an educational challenge.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"International surveys consistently show Japanese youth have lower じここうていかん than peers in other countries. Researchers debate whether this reflects genuine low self-esteem or cultural modesty (けんきょ). Japanese education reform aims to build じここうていかん through active learning and positive feedback."},

    {type:"teach", trg:"こころのケア", src:"emotional care / psychological support", pos:"noun", gender:null,
     note:"こころ (heart/mind) + ケア (care). こころのケアが necessary after disasters.\nNative-loanword hybrid.",
     example:"A: ひさいしゃのこころのケアがひつようです。\nB: せんもんかをはけんしましょう。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Psychological care for disaster victims is needed.\nB: Let us dispatch specialists.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"こころのケア became a major topic after the 1995 Kobe earthquake and expanded after 2011 Tohoku. PTSD (しんてきがいしょうごストレスしょうがい) recognition increased. Disaster-affected areas receive こころのケアチーム (psychological support teams). Children's こころのケア after disasters is a priority in Japanese emergency response."},

    {type:"teach", trg:"レジリエンス", src:"resilience", pos:"noun", gender:null,
     note:"Loanword. こころのレジリエンス = psychological resilience.\nレジリエンスをきたえる = to build resilience.",
     example:"A: レジリエンスをたかめるけんしゅうをおこないます。\nB: ストレスたいせいがたかまりますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: We will conduct training to build resilience.\nB: Stress tolerance will increase.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"レジリエンス entered Japanese business and education vocabulary as a key concept for navigating change and adversity. Japanese culture's traditional くなん (hardship) endurance aligns with resilience thinking. Schools teach レジリエンスきょういく (resilience education) to help children cope with bullying, exams, and social pressure."},

    {type:"fb", s:"ストレスで{1}がみだれています。\n(My autonomic nervous system is disrupted from stress.)", a:"じりつしんけい", opts:["じりつしんけい","メンタルヘルス","レジリエンス","バーンアウト"], sSrc:"My autonomic nervous system is disrupted from stress.",
     hint:"This medical term describes the body's automatic regulation system affected by stress."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"Kanji: 予防. よぼういがく = preventive medicine.\nかんせんよぼう = infection prevention.",
     example:"A: びょうきのよぼうがいちばんだいじです。\nB: きそくただしいせいかつがきほんですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Disease prevention is most important.\nB: A regular lifestyle is the foundation.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"よぼう (prevention) is a cornerstone of Japanese healthcare philosophy. にんげんドック (comprehensive health checkup) and けんこうしんだん (health examination) are annual requirements at Japanese companies. よぼうせっしゅ (vaccination) rates are generally high. The proverb よぼうはちりょうにまさる (prevention is better than cure) is widely embraced."},

    {type:"teach", trg:"ウェルビーイング", src:"well-being", pos:"noun", gender:null,
     note:"Loanword. しんたいてき・せいしんてき・しゃかいてきウェルビーイング = physical, mental, social well-being.",
     example:"A: じゅうぎょういんのウェルビーイングをじゅうしします。\nB: はたらきやすいかんきょうづくりですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We value employee well-being.\nB: Creating a comfortable work environment.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"ウェルビーイング has become a major Japanese corporate buzzword since 2020. Companies create ウェルビーイングすいしんしつ (well-being promotion departments). Japan's World Happiness Report ranking (around 50th) motivates improvement efforts. The concept encompasses こころ (mind), からだ (body), and しゃかい (social) dimensions."},

    {type:"match", pairs:[{trg:"メンタルヘルス",src:"mental health"},{trg:"カウンセリング",src:"counseling"},{trg:"バーンアウト",src:"burnout"},{trg:"ふみん",src:"insomnia"},{trg:"レジリエンス",src:"resilience"}],
     hint:"Match each wellness term with its English meaning."},

    {type:"mc", q:"What is ironic about マインドフルネス in Japan?", opts:["Japan re-imported its own Buddhist meditation tradition from the West","It was invented in Japan recently","Japanese people never practiced meditation","It is banned in schools"], ans:"Japan re-imported its own Buddhist meditation tradition from the West",
     hint:"B... めいそう was exported, secularized abroad, and returned as a loanword."},

    {type:"fb", s:"ひさいしゃの{1}がひつようです。\n(Psychological care for disaster victims is needed.)", a:"こころのケア", opts:["こころのケア","メンタルヘルス","カウンセリング","りょうほう"], sSrc:"Psychological care for disaster victims is needed.",
     hint:"This native-loanword hybrid specifically refers to emotional support."},

    {type:"mc", q:"What does じここうていかん mean?", opts:["Self-esteem / self-affirmation","Self-discipline","Self-study","Self-employment"], ans:"Self-esteem / self-affirmation",
     hint:"International surveys show Japanese youth score lower on this measure than peers."}
  ]
};
export default BATCH8_L1;
