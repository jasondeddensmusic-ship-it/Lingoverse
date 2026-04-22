// Unit 29 Expansion. Lesson 4: Economic Policy
const LESSON_4 = {
  id:"jav2_u29l4", title:"けいざいせいさく", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economic Policy",
     desc:"Japan's economic policy debates center on fiscal spending, taxation, labor reform, and the balance between growth and stability. Learn the vocabulary that drives these discussions in parliament, media, and everyday conversation.",
     goals:["Use ざいせい, ぜいきん, こようin policy contexts","Discuss government economic measures","Navigate fiscal and labor policy vocabulary"]},

    {type:"teach", trg:"ざいせい", src:"government finances / fiscal policy", pos:"noun", gender:null,
     note:"Kanji: 財政. ざいせいせいさく = fiscal policy.\nざいせいあかじ = fiscal deficit.",
     example:"A: にほんのざいせいじょうきょうはきびしいです。\nB: こくさいはっこうがくがおおきいですからね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japan's fiscal situation is severe.\nB: Because the amount of government bond issuance is large.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"財政 uses 財 (wealth) and 政 (government). Japan has the highest government debt-to-GDP ratio among developed nations, exceeding 250%. This massive debt is funded largely through domestic savings and にちぎん purchases. The debate between ざいせいけんぜんか (fiscal consolidation) and けいきしげき (economic stimulus) is Japan's central policy dilemma."},

    {type:"teach", trg:"ぜいきん", src:"tax / taxes", pos:"noun", gender:null,
     note:"Kanji: 税金. しょうひぜい = consumption tax (sales tax).\nぜいきんをおさめる = to pay taxes.",
     example:"A: しょうひぜいがじゅっパーセントになりました。\nB: せいかつひがあがってたいへんです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The consumption tax became 10%.\nB: Living expenses have gone up and it is tough.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"税金 uses 税 (tax) and 金 (money). Japan's consumption tax (しょうひぜい) was introduced at 3% in 1989, raised to 5% in 1997, 8% in 2014, and 10% in 2019. Each increase was politically explosive. Japan has a reduced rate of 8% for food and newspapers. The phrase ぞうぜい (tax increase) is one of the most feared words in Japanese politics."},

    {type:"teach", trg:"こくさい", src:"government bonds", pos:"noun", gender:null,
     note:"Kanji: 国債. こくさいをはっこうする = to issue government bonds.\nにほんこくさい = Japanese government bonds (JGBs).",
     example:"A: こくさいのはっこうがくがふえつづけています。\nB: しょうらいのせだいへのふたんがしんぱいです。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The volume of government bond issuance keeps increasing.\nB: I am worried about the burden on future generations.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"国債 uses 国 (country) and 債 (debt). Japanese government bonds are unique: about half are held by the にちぎん itself, and most of the rest by domestic institutions. This means Japan borrows mainly from itself, which is why the huge debt has not caused a crisis (yet). The phrase しょうらいのせだいへのふたん (burden on future generations) is a common concern."},

    {type:"mc", q:"ざいせいあかじ means:", opts:["The government spends more than it collects in revenue","The economy is growing rapidly","Tax revenues are increasing","The trade balance is positive"], ans:"The government spends more than it collects in revenue",
     hint:"ざいせい is g... finance, and あかじ means a deficit or shortfall."},

    {type:"teach", trg:"こよう", src:"employment", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ.\nこようじょうきょう = employment situation.",
     example:"A: こようじょうきょうがかいぜんしています。\nB: きゅうじんすうがふえているのですか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The employment situation is improving.\nB: Is the number of job openings increasing?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"雇用 uses 雇 (hire) and 用 (use). Japan's こよう system traditionally centered on 終身雇用 (lifetime employment) and 年功序列 (seniority-based promotion). Both are eroding but remain influential. The term 非正規雇用 (non-regular employment) describes contract, part-time, and temporary workers who now make up about 40% of the workforce."},

    {type:"teach", trg:"きゅうじん", src:"job opening / job vacancy", pos:"noun", gender:null,
     note:"Kanji: 求人. きゅう (seek) + じん (person).\nゆうこうきゅうじんばいりつ = job-to-applicant ratio.",
     example:"A: きゅうじんがおおいのにじんざいがたりません。\nB: にほんのろうどうりょくぶそくはしんこくですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: There are many openings but not enough talent.\nB: Japan's labor shortage is serious.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"求人 literally means 'seeking people.' The ゆうこうきゅうじんばいりつ (effective job openings-to-applicants ratio) is a key economic indicator. When it exceeds 1.0, there are more jobs than applicants. Japan's ratio has been above 1.0 for years due to demographic decline. Hello Work (ハローワーク), the public employment office, processes millions of きゅうじん annually."},

    {type:"fb", s:"しょうひぜいが{1}パーセントになりました。\n(The consumption tax became 10%.)", a:"じゅっ", opts:["じゅっ","ご","はち","さん"], sSrc:"The consumption tax became 10%.",
     hint:"The number 10 in Japanese, read with the abbreviated form before パーセント."},

    {type:"teach", trg:"けいきしげき", src:"economic stimulus", pos:"noun", gender:null,
     note:"けいき (economic conditions) + しげき (stimulus).\nけいきしげきさく = economic stimulus measures.",
     example:"A: せいふはけいきしげきさくをはっぴょうしました。\nB: どのようなないようですか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The government announced economic stimulus measures.\nB: What kind of content?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"景気刺激 combines けいき (economic climate) and しげき (stimulation). Japan has tried massive けいきしげき packages repeatedly since the 1990s. Prime Minister Abe's 'Abenomics' (アベノミクス, 2012-2020) was the most famous recent attempt, combining monetary easing, fiscal spending, and structural reform. The concept of 'three arrows' (三本の矢) became globally known."},

    {type:"teach", trg:"ろうどうりょく", src:"labor force / workforce", pos:"noun", gender:null,
     note:"Kanji: 労働力. ろうどう (labor) + りょく (power/force).\nろうどうりょくぶそく = labor shortage.",
     example:"A: こうれいかでろうどうりょくがへっています。\nB: がいこくじんろうどうしゃのじゅようがたかまっていますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The labor force is shrinking due to aging.\nB: Demand for foreign workers is increasing.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"労働力 is Japan's most pressing economic challenge. The working-age population is shrinking by about 500,000 people per year. Solutions being tried include raising the retirement age, increasing women's labor participation, accepting more foreign workers, and automation. The phrase ろうどうりょくぶそく (labor shortage) defines Japan's economic reality."},

    {type:"mc", q:"ゆうこうきゅうじんばいりつ above 1.0 means:", opts:["More jobseekers than positions available","More jobs available than people looking for work","The economy is in recession","Wages are falling"], ans:"More jobs available than people looking for work",
     hint:"The ratio compares openings to applicants. Above 1.0 means openings exceed seekers."},

    {type:"teach", trg:"こうれいか", src:"aging (of population)", pos:"noun", gender:null,
     note:"Kanji: 高齢化. こうれい (elderly) + 化 (-ification).\nしょうしこうれいか = declining birthrate and aging population.",
     example:"A: にほんはせかいでもっともこうれいかがすすんでいるくにです。\nB: しゃかいほしょうひがふえつづけていますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Japan is the country where aging is most advanced in the world.\nB: Social security costs keep increasing.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"高齢化 is Japan's defining demographic challenge. About 30% of the population is over 65, the highest ratio globally. The combined term しょうしこうれいか (少子高齢化, few children + aging) describes the dual problem. Japan is a living laboratory for how societies handle demographic decline: robot caregivers, empty rural villages, and a shrinking tax base."},

    {type:"fb", s:"こうれいかで{1}がへっています。\n(The labor force is shrinking due to aging.)", a:"ろうどうりょく", opts:["ろうどうりょく","きゅうじん","こよう","けいき"], sSrc:"The labor force is shrinking due to aging.",
     hint:"The compound noun for the human power available for work in an economy."},

    {type:"match", pairs:[{trg:"ざいせい",src:"government finances"},{trg:"ぜいきん",src:"tax"},{trg:"こくさい",src:"government bonds"},{trg:"こよう",src:"employment"}]},

    {type:"fb", s:"せいふは{1}さくをはっぴょうしました。\n(The government announced economic stimulus measures.)", a:"けいきしげき", opts:["けいきしげき","けいざいせいさく","ざいせいけんぜん","きんゆうかんわ"], sSrc:"The government announced economic stimulus measures.",
     hint:"The two-word compound for boosting economic conditions through active intervention."},

    {type:"match", pairs:[{trg:"きゅうじん",src:"job opening"},{trg:"けいきしげき",src:"economic stimulus"},{trg:"ろうどうりょく",src:"labor force"},{trg:"こうれいか",src:"aging population"}]},
  ]
};
export default LESSON_4;
