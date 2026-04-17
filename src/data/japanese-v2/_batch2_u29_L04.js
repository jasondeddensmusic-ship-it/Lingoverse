// Unit 29 Batch 2 Lesson 4: ろうどうとこよう (Labor & Employment)
const BATCH2_L_4 = {
  id:"jav2_u29l_b2_4", title:"ろうどうとこよう", icon:"👷", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろうどうとこよう",
     desc:"Japan's labor market is undergoing significant transformation. From lifetime employment to gig work, from overtime culture to work-life balance reforms, understanding labor vocabulary is essential for life in Japan and JLPT reading passages about social change.",
     goals:["Use labor and employment vocabulary","Discuss work culture and reforms","Understand Japan's employment system"]},

    {type:"teach", trg:"こよう", src:"employment / hiring", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ.\nせいきこよう = regular employment.",
     example:"A: にほんのこようけいたいがおおきくかわりつつあります。\nB: しゅうしんこようせいどがくずれてきていますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan's employment forms are changing significantly.\nB: The lifetime employment system is breaking down.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"雇用 uses 雇 (hire) and 用 (use). Japan's traditional こよう model featured しゅうしんこよう (lifetime employment), ねんこうじょれつ (seniority-based pay), and きぎょうべつくみあい (company-based unions). This 'three pillars' system is weakening as companies adopt more flexible こようけいたい (employment forms)."},

    {type:"teach", trg:"しゅうしんこよう", src:"lifetime employment", pos:"noun", gender:null,
     note:"Kanji: 終身雇用. The traditional Japanese employment model.\nしゅうしん (lifetime) + こよう (employment).",
     example:"A: しゅうしんこようせいどをつづけるのはむずかしくなっています。\nB: てんしょくするひとがふえていますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: It is becoming difficult to continue the lifetime employment system.\nB: More people are changing jobs.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"終身雇用 was a cornerstone of postwar Japan's economic miracle. Companies hired graduates and kept them until retirement, investing heavily in training and building loyalty. In return, employees dedicated their careers to one company. While some major firms still practice しゅうしんこよう, younger workers increasingly prefer flexibility and てんしょく (job changes)."},

    {type:"teach", trg:"ちんぎん", src:"wages / pay / salary", pos:"noun", gender:null,
     note:"Kanji: 賃金. さいていちんぎん = minimum wage.\nちんぎんかくさ = wage gap.",
     example:"A: にほんのさいていちんぎんはまいとしみなおされています。\nB: せいかつひのじょうしょうにおいつかないというこえもあります。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan's minimum wage is reviewed every year.\nB: There are also voices saying it cannot keep up with rising living costs.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"賃金 uses 賃 (wage/rent) and 金 (money). Japan's ちんぎん stagnation over the 'lost decades' has been a major economic concern. Real wages barely grew for 30 years, unlike most other developed nations. The government and businesses have recently been pushing for ちんあげ (wage increases), a term that dominates annual 'spring wage offensive' (春闘, しゅんとう) negotiations."},

    {type:"mc", q:"しゅうしんこよう describes:", opts:["Working at one company until retirement","Working part-time at multiple jobs","Self-employment","Government employment"], ans:"Working at one company until retirement",
     hint:"This traditional system involves a c... hiring you as a new graduate and keeping you for your entire career."},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"Kanji: 残業. ざんぎょうする = to work overtime.\nサービスざんぎょう = unpaid overtime.",
     example:"A: ざんぎょうをへらすとりくみがすすんでいます。\nB: ワークライフバランスがじゅうようですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Efforts to reduce overtime are progressing.\nB: Work-life balance is important.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"残業 uses 残 (remain) and 業 (work). Japanese ざんぎょう culture was notorious: workers stayed late to show dedication, and サービスざんぎょう (unpaid overtime) was common. The 2019 Work Style Reform Act (はたらきかたかいかく) capped monthly ざんぎょう at 45 hours. The concept of カロウシ (過労死, death from overwork) shocked the world and drove reform."},

    {type:"teach", trg:"てんしょく", src:"job change / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job change website.",
     example:"A: さんじゅうだいでてんしょくするひとがふえています。\nB: キャリアアップをめざすひとがおおいですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: More people in their 30s are changing jobs.\nB: Many are aiming for career advancement.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"転職 uses 転 (change/roll) and 職 (job/occupation). Until recently, てんしょく carried stigma in Japan. Changing companies was seen as disloyal. This attitude is rapidly shifting, especially among younger workers. てんしょくサイト (job change websites) like Recruit and Bizreach have become major industries, reflecting the cultural shift."},

    {type:"teach", trg:"きゅうりょう", src:"salary / pay", pos:"noun", gender:null,
     note:"Kanji: 給料. げっきゅう = monthly salary.\nねんしゅう = annual income.",
     example:"A: きゅうりょうにまんぞくしていますか？\nB: しごとのないようにはまんぞくですが、きゅうりょうはもうすこしほしいです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Are you satisfied with your salary?\nB: I am satisfied with the work content, but I want a bit more salary.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"給料 uses 給 (supply/provide) and 料 (fee/material). Japanese salary culture includes ボーナス (bonus), typically paid twice yearly (summer and winter), often equaling 2-5 months' salary. The phrase きゅうりょうぶくろ (pay envelope) recalls the era when salaries were paid in cash. Today, ふりこみ (bank transfer) is standard."},

    {type:"fb", s:"ざんぎょうを{1}とりくみがすすんでいます。\n(Efforts to reduce overtime are progressing.)", a:"へらす", opts:["へらす","ふやす","つづける","はじめる"], sSrc:"Efforts to reduce overtime are progressing.",
     hint:"The verb meaning 'to reduce' or 'to decrease,' the goal of work reform policies."},

    {type:"teach", trg:"ひせいき", src:"non-regular / irregular (employment)", pos:"adj", gender:null,
     note:"Kanji: 非正規. ひせいきこよう = non-regular employment.\nIncludes part-time, contract, and dispatch workers.",
     example:"A: ひせいきこようしゃのわりあいがぜんたいのやくよんじゅうパーセントです。\nB: しょくぎょうのあんていせいがもんだいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Non-regular workers make up about 40% of the total.\nB: Job stability is the concern.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"非正規 uses 非 (non-/un-) and 正規 (regular/standard). Japan's rise in ひせいき workers from 20% in the 1990s to nearly 40% today is a major social issue. ひせいき workers receive lower pay, fewer benefits, and less job security. Women and elderly workers are disproportionately in ひせいき positions, contributing to economic inequality."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"Kanji: 働き方改革. Government initiative to improve work-life balance.\nLaw enacted in 2019.",
     example:"A: はたらきかたかいかくでテレワークがふきゅうしました。\nB: ざんぎょうのじょうげんもせっていされましたね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Remote work spread through work style reform.\nB: Overtime caps were also established.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"働き方改革 is one of the most significant policy initiatives in recent Japanese history. The 2019 law addressed ざんぎょう caps, equal pay for equal work, and flexible work arrangements. The pandemic accelerated many reforms that had been slowly progressing. The phrase はたらきかた (how one works) has become a cultural buzzword."},

    {type:"mc", q:"ひせいきこよう includes:", opts:["Only full-time permanent employees","Part-time, contract, and dispatch workers","Only government workers","Self-employed entrepreneurs"], ans:"Part-time, contract, and dispatch workers",
     hint:"Non-regular employment covers all w... who are not permanent full-t... employees."},

    {type:"teach", trg:"ふくりこうせい", src:"employee benefits / fringe benefits", pos:"noun", gender:null,
     note:"Kanji: 福利厚生. Includes health insurance, housing allowances, transport subsidies.\nCompany benefits beyond salary.",
     example:"A: このかいしゃのふくりこうせいはじゅうじつしています。\nB: しゃたくやほいくしせつもあるんですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: This company's employee benefits are comprehensive.\nB: They even have company housing and childcare facilities.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"福利厚生 is a four-kanji compound: 福 (fortune), 利 (benefit), 厚 (thick/generous), 生 (life). Japanese companies traditionally offered extensive ふくりこうせい as part of the lifetime employment package: company housing, health insurance, transport allowances, cafeterias, and even vacation facilities. While some benefits have been reduced, they remain an important factor in job decisions."},

    {type:"fb", s:"ひせいきこようしゃの{1}がぜんたいのやくよんじゅうパーセントです。\n(Non-regular workers make up about 40% of the total.)", a:"わりあい", opts:["わりあい","かず","ちんぎん","きゅうりょう"], sSrc:"Non-regular workers make up about 40% of the total.",
     hint:"The noun meaning 'proportion' or 'percentage,' a numerical share of the whole."},

    {type:"match", pairs:[{trg:"こよう",src:"employment"},{trg:"ちんぎん",src:"wages"},{trg:"ざんぎょう",src:"overtime"},{trg:"てんしょく",src:"job change"}]},

    {type:"fb", s:"このかいしゃの{1}はじゅうじつしています。\n(This company's employee benefits are comprehensive.)", a:"ふくりこうせい", opts:["ふくりこうせい","きゅうりょう","ざんぎょう","こよう"], sSrc:"This company's employee benefits are comprehensive.",
     hint:"The four-kanji compound for the non-salary benefits a company provides to employees."},

    {type:"match", pairs:[{trg:"しゅうしんこよう",src:"lifetime employment"},{trg:"ひせいき",src:"non-regular"},{trg:"はたらきかたかいかく",src:"work style reform"},{trg:"ふくりこうせい",src:"employee benefits"}]},

    {type:"mc", q:"カロウシ means:", opts:["Career change","Death from overwork","Retirement age","Minimum wage"], ans:"Death from overwork",
     hint:"This Japanese term shocked the world and became a driving force behind labor reform laws."},
  ]
};
export default BATCH2_L_4;
