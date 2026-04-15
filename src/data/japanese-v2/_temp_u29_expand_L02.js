// Unit 29 Expansion — Lesson 4: Economic Policy
const LESSON_4 = {
  id:"jav2_u29l4", title:"けいざいせいさく", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economic Policy",
     desc:"Japan's economic policy debates center on fiscal spending, taxation, labor reform, and the balance between growth and stability. Learn the vocabulary that drives these discussions in parliament, media, and everyday conversation.",
     goals:["Use ざいせい, ぜいきん, こようin policy contexts","Discuss government economic measures","Navigate fiscal and labor policy vocabulary"]},

    {type:"teach", trg:"ざいせい", src:"government finances / fiscal policy", pos:"noun", gender:null,
     note:"Kanji: 財政. ざいせいせいさく = fiscal policy.\nざいせいあかじ = fiscal deficit.",
     example:"A: にほんのざいせいじょうきょうはきびしいです。\nB: こくさいはっこうがくがおおきいですからね。",
     exampleSrc:"A: Japan's fiscal situation is severe.\nB: Because the amount of government bond issuance is large.",
     funFact:"財政 uses 財 (wealth) and 政 (government). Japan has the highest government debt-to-GDP ratio among developed nations, exceeding 250%. This massive debt is funded largely through domestic savings and にちぎん purchases. The debate between ざいせいけんぜんか (fiscal consolidation) and けいきしげき (economic stimulus) is Japan's central policy dilemma."},

    {type:"teach", trg:"ぜいきん", src:"tax / taxes", pos:"noun", gender:null,
     note:"Kanji: 税金. しょうひぜい = consumption tax (sales tax).\nぜいきんをおさめる = to pay taxes.",
     example:"A: しょうひぜいがじゅっパーセントになりました。\nB: せいかつひがあがってたいへんです。",
     exampleSrc:"A: The consumption tax became 10%.\nB: Living expenses have gone up and it is tough.",
     funFact:"税金 uses 税 (tax) and 金 (money). Japan's consumption tax (しょうひぜい) was introduced at 3% in 1989, raised to 5% in 1997, 8% in 2014, and 10% in 2019. Each increase was politically explosive. Japan has a reduced rate of 8% for food and newspapers. The phrase ぞうぜい (tax increase) is one of the most feared words in Japanese politics."},

    {type:"teach", trg:"こくさい", src:"government bonds", pos:"noun", gender:null,
     note:"Kanji: 国債. こくさいをはっこうする = to issue government bonds.\nにほんこくさい = Japanese government bonds (JGBs).",
     example:"A: こくさいのはっこうがくがふえつづけています。\nB: しょうらいのせだいへのふたんがしんぱいです。",
     exampleSrc:"A: The volume of government bond issuance keeps increasing.\nB: I am worried about the burden on future generations.",
     funFact:"国債 uses 国 (country) and 債 (debt). Japanese government bonds are unique: about half are held by the にちぎん itself, and most of the rest by domestic institutions. This means Japan borrows mainly from itself, which is why the huge debt has not caused a crisis (yet). The phrase しょうらいのせだいへのふたん (burden on future generations) is a common concern."},

    {type:"mc", q:"ざいせいあかじ means:", opts:["The economy is growing rapidly","Tax revenues are increasing","The trade balance is positive","The government spends more than it collects in revenue"], ans:"The government spends more than it collects in revenue",
     hint:"ざいせい is g... finance, and あかじ means a deficit or shortfall."},

    {type:"teach", trg:"こよう", src:"employment", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ.\nこようじょうきょう = employment situation.",
     example:"A: こようじょうきょうがかいぜんしています。\nB: きゅうじんすうがふえているのですか？",
     exampleSrc:"A: The employment situation is improving.\nB: Is the number of job openings increasing?",
     funFact:"雇用 uses 雇 (hire) and 用 (use). Japan's こよう system traditionally centered on 終身雇用 (lifetime employment) and 年功序列 (seniority-based promotion). Both are eroding but remain influential. The term 非正規雇用 (non-regular employment) describes contract, part-time, and temporary workers who now make up about 40% of the workforce."},

    {type:"teach", trg:"きゅうじん", src:"job opening / job vacancy", pos:"noun", gender:null,
     note:"Kanji: 求人. きゅう (seek) + じん (person).\nゆうこうきゅうじんばいりつ = job-to-applicant ratio.",
     example:"A: きゅうじんがおおいのにじんざいがたりません。\nB: にほんのろうどうりょくぶそくはしんこくですね。",
     exampleSrc:"A: There are many openings but not enough talent.\nB: Japan's labor shortage is serious.",
     funFact:"求人 literally means 'seeking people.' The ゆうこうきゅうじんばいりつ (effective job openings-to-applicants ratio) is a key economic indicator. When it exceeds 1.0, there are more jobs than applicants. Japan's ratio has been above 1.0 for years due to demographic decline. Hello Work (ハローワーク), the public employment office, processes millions of きゅうじん annually."},

    {type:"fb", s:"しょうひぜいが___パーセントになりました。\n(The consumption tax became 10%.)", a:"じゅっ", opts:["じゅっ","ご","はち","さん"], sSrc:"The consumption tax became 10%.",
     hint:"The number 10 in Japanese, read with the abbreviated form before パーセント."},

    {type:"teach", trg:"けいきしげき", src:"economic stimulus", pos:"noun", gender:null,
     note:"けいき (economic conditions) + しげき (stimulus).\nけいきしげきさく = economic stimulus measures.",
     example:"A: せいふはけいきしげきさくをはっぴょうしました。\nB: どのようなないようですか？",
     exampleSrc:"A: The government announced economic stimulus measures.\nB: What kind of content?",
     funFact:"景気刺激 combines けいき (economic climate) and しげき (stimulation). Japan has tried massive けいきしげき packages repeatedly since the 1990s. Prime Minister Abe's 'Abenomics' (アベノミクス, 2012-2020) was the most famous recent attempt, combining monetary easing, fiscal spending, and structural reform. The concept of 'three arrows' (三本の矢) became globally known."},

    {type:"teach", trg:"ろうどうりょく", src:"labor force / workforce", pos:"noun", gender:null,
     note:"Kanji: 労働力. ろうどう (labor) + りょく (power/force).\nろうどうりょくぶそく = labor shortage.",
     example:"A: こうれいかでろうどうりょくがへっています。\nB: がいこくじんろうどうしゃのじゅようがたかまっていますね。",
     exampleSrc:"A: The labor force is shrinking due to aging.\nB: Demand for foreign workers is increasing.",
     funFact:"労働力 is Japan's most pressing economic challenge. The working-age population is shrinking by about 500,000 people per year. Solutions being tried include raising the retirement age, increasing women's labor participation, accepting more foreign workers, and automation. The phrase ろうどうりょくぶそく (labor shortage) defines Japan's economic reality."},

    {type:"mc", q:"ゆうこうきゅうじんばいりつ above 1.0 means:", opts:["More jobseekers than positions available","More jobs available than people looking for work","The economy is in recession","Wages are falling"], ans:"More jobs available than people looking for work",
     hint:"The ratio compares openings to applicants. Above 1.0 means openings exceed seekers."},

    {type:"teach", trg:"こうれいか", src:"aging (of population)", pos:"noun", gender:null,
     note:"Kanji: 高齢化. こうれい (elderly) + 化 (-ification).\nしょうしこうれいか = declining birthrate and aging population.",
     example:"A: にほんはせかいでもっともこうれいかがすすんでいるくにです。\nB: しゃかいほしょうひがふえつづけていますね。",
     exampleSrc:"A: Japan is the country where aging is most advanced in the world.\nB: Social security costs keep increasing.",
     funFact:"高齢化 is Japan's defining demographic challenge. About 30% of the population is over 65, the highest ratio globally. The combined term しょうしこうれいか (少子高齢化, few children + aging) describes the dual problem. Japan is a living laboratory for how societies handle demographic decline: robot caregivers, empty rural villages, and a shrinking tax base."},

    {type:"fb", s:"こうれいかで___がへっています。\n(The labor force is shrinking due to aging.)", a:"ろうどうりょく", opts:["ろうどうりょく","きゅうじん","こよう","けいき"], sSrc:"The labor force is shrinking due to aging.",
     hint:"The compound noun for the human power available for work in an economy."},

    {type:"match", pairs:[{trg:"ざいせい",src:"government finances"},{trg:"ぜいきん",src:"tax"},{trg:"こくさい",src:"government bonds"},{trg:"こよう",src:"employment"}]},

    {type:"fb", s:"せいふは___さくをはっぴょうしました。\n(The government announced economic stimulus measures.)", a:"けいきしげき", opts:["けいきしげき","けいざいせいさく","ざいせいけんぜん","きんゆうかんわ"], sSrc:"The government announced economic stimulus measures.",
     hint:"The two-word compound for boosting economic conditions through active intervention."},

    {type:"match", pairs:[{trg:"きゅうじん",src:"job opening"},{trg:"けいきしげき",src:"economic stimulus"},{trg:"ろうどうりょく",src:"labor force"},{trg:"こうれいか",src:"aging population"}]},
  ]
};
export default LESSON_4;
