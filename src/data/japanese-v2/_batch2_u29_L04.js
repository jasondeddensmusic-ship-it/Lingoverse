// Unit 29 Batch 2 Lesson 4: ろうどうとこよう (Labor & Employment)
const BATCH2_L_4 = {
  id:"jav2_u29l_b2_4", title:"ろうどうとこよう", icon:"👷", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろうどうとこよう",
     desc:"Japan's labor market is undergoing significant transformation. From lifetime employment to gig work, from overtime culture to work-life balance reforms, understanding labor vocabulary is essential for life in Japan and JLPT reading passages about social change.",
     goals:["Use labor and employment vocabulary","Discuss work culture and reforms","Understand Japan's employment system"]},

    {type:"teach", trg:"こよう", src:"employment / hiring", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ.\nせいきこよう = regular employment.",
     example:"A: にほんのこようけいたいがおおきくかわりつつあります。\nB: しゅうしんこようせいどがくずれてきていますね。",
     exampleSrc:"A: Japan's employment forms are changing significantly.\nB: The lifetime employment system is breaking down.",
     funFact:"雇用 uses 雇 (hire) and 用 (use). Japan's traditional こよう model featured しゅうしんこよう (lifetime employment), ねんこうじょれつ (seniority-based pay), and きぎょうべつくみあい (company-based unions). This 'three pillars' system is weakening as companies adopt more flexible こようけいたい (employment forms)."},

    {type:"teach", trg:"しゅうしんこよう", src:"lifetime employment", pos:"noun", gender:null,
     note:"Kanji: 終身雇用. The traditional Japanese employment model.\nしゅうしん (lifetime) + こよう (employment).",
     example:"A: しゅうしんこようせいどをつづけるのはむずかしくなっています。\nB: てんしょくするひとがふえていますね。",
     exampleSrc:"A: It is becoming difficult to continue the lifetime employment system.\nB: More people are changing jobs.",
     funFact:"終身雇用 was a cornerstone of postwar Japan's economic miracle. Companies hired graduates and kept them until retirement, investing heavily in training and building loyalty. In return, employees dedicated their careers to one company. While some major firms still practice しゅうしんこよう, younger workers increasingly prefer flexibility and てんしょく (job changes)."},

    {type:"teach", trg:"ちんぎん", src:"wages / pay / salary", pos:"noun", gender:null,
     note:"Kanji: 賃金. さいていちんぎん = minimum wage.\nちんぎんかくさ = wage gap.",
     example:"A: にほんのさいていちんぎんはまいとしみなおされています。\nB: せいかつひのじょうしょうにおいつかないというこえもあります。",
     exampleSrc:"A: Japan's minimum wage is reviewed every year.\nB: There are also voices saying it cannot keep up with rising living costs.",
     funFact:"賃金 uses 賃 (wage/rent) and 金 (money). Japan's ちんぎん stagnation over the 'lost decades' has been a major economic concern. Real wages barely grew for 30 years, unlike most other developed nations. The government and businesses have recently been pushing for ちんあげ (wage increases), a term that dominates annual 'spring wage offensive' (春闘, しゅんとう) negotiations."},

    {type:"mc", q:"しゅうしんこよう describes:", opts:["Working at one company until retirement","Working part-time at multiple jobs","Self-employment","Government employment"], ans:"Working at one company until retirement",
     hint:"This traditional system involves a company hiring you as a new graduate and keeping you for your entire career."},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"Kanji: 残業. ざんぎょうする = to work overtime.\nサービスざんぎょう = unpaid overtime.",
     example:"A: ざんぎょうをへらすとりくみがすすんでいます。\nB: ワークライフバランスがじゅうようですね。",
     exampleSrc:"A: Efforts to reduce overtime are progressing.\nB: Work-life balance is important.",
     funFact:"残業 uses 残 (remain) and 業 (work). Japanese ざんぎょう culture was notorious: workers stayed late to show dedication, and サービスざんぎょう (unpaid overtime) was common. The 2019 Work Style Reform Act (はたらきかたかいかく) capped monthly ざんぎょう at 45 hours. The concept of カロウシ (過労死, death from overwork) shocked the world and drove reform."},

    {type:"teach", trg:"てんしょく", src:"job change / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job change website.",
     example:"A: さんじゅうだいでてんしょくするひとがふえています。\nB: キャリアアップをめざすひとがおおいですね。",
     exampleSrc:"A: More people in their 30s are changing jobs.\nB: Many are aiming for career advancement.",
     funFact:"転職 uses 転 (change/roll) and 職 (job/occupation). Until recently, てんしょく carried stigma in Japan. Changing companies was seen as disloyal. This attitude is rapidly shifting, especially among younger workers. てんしょくサイト (job change websites) like Recruit and Bizreach have become major industries, reflecting the cultural shift."},

    {type:"teach", trg:"きゅうりょう", src:"salary / pay", pos:"noun", gender:null,
     note:"Kanji: 給料. げっきゅう = monthly salary.\nねんしゅう = annual income.",
     example:"A: きゅうりょうにまんぞくしていますか？\nB: しごとのないようにはまんぞくですが、きゅうりょうはもうすこしほしいです。",
     exampleSrc:"A: Are you satisfied with your salary?\nB: I am satisfied with the work content, but I want a bit more salary.",
     funFact:"給料 uses 給 (supply/provide) and 料 (fee/material). Japanese salary culture includes ボーナス (bonus), typically paid twice yearly (summer and winter), often equaling 2-5 months' salary. The phrase きゅうりょうぶくろ (pay envelope) recalls the era when salaries were paid in cash. Today, ふりこみ (bank transfer) is standard."},

    {type:"fb", s:"ざんぎょうを{1}とりくみがすすんでいます。\n(Efforts to reduce overtime are progressing.)", a:"へらす", opts:["へらす","ふやす","つづける","はじめる"], sSrc:"Efforts to reduce overtime are progressing.",
     hint:"The verb meaning 'to reduce' or 'to decrease,' the goal of work reform policies."},

    {type:"teach", trg:"ひせいき", src:"non-regular / irregular (employment)", pos:"adj", gender:null,
     note:"Kanji: 非正規. ひせいきこよう = non-regular employment.\nIncludes part-time, contract, and dispatch workers.",
     example:"A: ひせいきこようしゃのわりあいがぜんたいのやくよんじゅうパーセントです。\nB: しょくぎょうのあんていせいがもんだいですね。",
     exampleSrc:"A: Non-regular workers make up about 40% of the total.\nB: Job stability is the concern.",
     funFact:"非正規 uses 非 (non-/un-) and 正規 (regular/standard). Japan's rise in ひせいき workers from 20% in the 1990s to nearly 40% today is a major social issue. ひせいき workers receive lower pay, fewer benefits, and less job security. Women and elderly workers are disproportionately in ひせいき positions, contributing to economic inequality."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"Kanji: 働き方改革. Government initiative to improve work-life balance.\nLaw enacted in 2019.",
     example:"A: はたらきかたかいかくでテレワークがふきゅうしました。\nB: ざんぎょうのじょうげんもせっていされましたね。",
     exampleSrc:"A: Remote work spread through work style reform.\nB: Overtime caps were also established.",
     funFact:"働き方改革 is one of the most significant policy initiatives in recent Japanese history. The 2019 law addressed ざんぎょう caps, equal pay for equal work, and flexible work arrangements. The pandemic accelerated many reforms that had been slowly progressing. The phrase はたらきかた (how one works) has become a cultural buzzword."},

    {type:"mc", q:"ひせいきこよう includes:", opts:["Only full-time permanent employees","Part-time, contract, and dispatch workers","Only government workers","Self-employed entrepreneurs"], ans:"Part-time, contract, and dispatch workers",
     hint:"Non-regular employment covers all workers who are not permanent full-time employees."},

    {type:"teach", trg:"ふくりこうせい", src:"employee benefits / fringe benefits", pos:"noun", gender:null,
     note:"Kanji: 福利厚生. Includes health insurance, housing allowances, transport subsidies.\nCompany benefits beyond salary.",
     example:"A: このかいしゃのふくりこうせいはじゅうじつしています。\nB: しゃたくやほいくしせつもあるんですね。",
     exampleSrc:"A: This company's employee benefits are comprehensive.\nB: They even have company housing and childcare facilities.",
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
