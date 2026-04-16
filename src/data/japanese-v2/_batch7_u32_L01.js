// Batch 7 – Unit 32 (B2.2 Medicine): Medical & Health Science Vocabulary
const BATCH7_L1 = {
  id:"jav2_u32l_b7_1", title:"いりょうかがく", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"いりょうかがく",
     desc:"Learn medical and health science vocabulary for discussing healthcare, medical procedures, and health policy. These terms appear in news about Japan's healthcare system.",
     goals:["Discuss medical procedures and conditions","Understand healthcare system vocabulary","Express health-related concerns formally"]},

    {type:"teach", trg:"しんだん", src:"diagnosis", pos:"noun", gender:null,
     note:"しんだんする = to diagnose. しんだんしょ = medical certificate.\nけんこうしんだん = health checkup.",
     example:"A: いしゃのしんだんはなんでしたか？\nB: ストレスがげんいんだそうです。",
     exampleSrc:"A: What was the doctor's diagnosis?\nB: He said stress is the cause.",
     funFact:"けんこうしんだん (health checkup) is mandatory for Japanese employees and students annually. Companies arrange comprehensive しんだん including blood tests, X-rays, and metabolic syndrome screening (メタボ健診). This preventive approach contributes to Japan's world-leading life expectancy of 84+ years."},

    {type:"teach", trg:"しょほうせん", src:"prescription", pos:"noun", gender:null,
     note:"しょほうせんをもらう = to get a prescription.\nいんがいしょほう = outpatient prescription.",
     example:"A: おくすりはしょほうせんがひつようです。\nB: やっきょくでもらえますか？",
     exampleSrc:"A: Medication requires a prescription.\nB: Can I get it at the pharmacy?",
     funFact:"Japanese しょほうせん (処方箋) must be filled at a pharmacy (調剤薬局, ちょうざいやっきょく) separate from the hospital. This separation was mandated to prevent conflicts of interest. Pharmacists (薬剤師) explain medications in detail. Japan has strict controls on antibiotics, requiring しょほうせん even for basic infections."},

    {type:"teach", trg:"しゅじゅつ", src:"surgery / operation", pos:"noun", gender:null,
     note:"しゅじゅつする = to perform surgery. しゅじゅつしつ = operating room.\nないしきょうしゅじゅつ = endoscopic surgery.",
     example:"A: しゅじゅつはせいこうしました。\nB: よかったです。かいふくをいのっています。",
     exampleSrc:"A: The surgery was successful.\nB: Thank goodness. I pray for recovery.",
     funFact:"Japanese しゅじゅつ (手術) technology is world-class. Robotic surgery (ロボットしゅじゅつ), endoscopic techniques, and organ transplants are performed at advanced levels. Before しゅじゅつ, doctors explain risks in detail (インフォームドコンセント). Patients often bring good luck charms (お守り) for surgical success."},

    {type:"teach", trg:"かいふく", src:"recovery / recuperation", pos:"noun", gender:null,
     note:"かいふくする = to recover. かいふくき = recovery period.\nたいりょくがかいふくする = stamina recovers.",
     example:"A: びょうきからかいふくしました。\nB: おめでとうございます。むりしないでくださいね。",
     exampleSrc:"A: I recovered from my illness.\nB: Congratulations. Please do not overdo it.",
     funFact:"Japanese かいふく (回復) culture emphasizes rest and patience. The phrase ごじあい (ご自愛, take care of yourself) and おだいじに (take care) express concern for someone's かいふく. Japanese hospitals keep patients longer than Western ones for complete かいふく. Convalescence is valued, not rushed."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"よぼうせっしゅ = vaccination. よぼういがく = preventive medicine.\nよぼうする = to prevent.",
     example:"A: よぼうがいちばんだいじです。\nB: うんどうとえいようバランスですね。",
     exampleSrc:"A: Prevention is most important.\nB: Exercise and nutritional balance.",
     funFact:"Japan's healthcare philosophy emphasizes よぼう (prevention) over treatment. Annual health checkups, balanced school lunches (給食), and public health campaigns reflect this. 予防接種 (vaccinations) follow a national schedule. Japan's preventive approach contributes to low healthcare costs despite an aging population."},

    {type:"teach", trg:"こうかいりょうほう", src:"public healthcare / medical treatment", pos:"noun", gender:null,
     note:"こうかいほけん = public health insurance.\nにほんのいりょうせいど = Japan's medical system.",
     example:"A: にほんのこくみんかいほけんせいどはすぐれています。\nB: だれでもびょういんにいけますね。",
     exampleSrc:"A: Japan's universal health insurance system is excellent.\nB: Anyone can go to the hospital.",
     funFact:"Japan has universal health coverage (国民皆保険, こくみんかいほけん) since 1961. Everyone pays into insurance and patients cover 30% of costs (10% for elderly). This system keeps medical bankruptcies near zero, unlike the US. However, the aging population strains the system's financial sustainability."},

    {type:"teach", trg:"めんえき", src:"immunity / immune system", pos:"noun", gender:null,
     note:"めんえきりょく = immune strength.\nめんえきをたかめる = to boost immunity.",
     example:"A: めんえきりょくをたかめることがたいせつです。\nB: すいみんとえいようがかぎですね。",
     exampleSrc:"A: Boosting immunity is important.\nB: Sleep and nutrition are key.",
     funFact:"めんえき (免疫) became a household word during COVID. Japanese health shows (健康番組) frequently discuss めんえきりょく boosting through food, exercise, and sleep. Traditional remedies like green tea, natto, and miso are promoted for めんえき benefits. Japan's flu vaccination culture expanded to COVID boosters."},

    {type:"teach", trg:"かんせんしょう", src:"infectious disease", pos:"noun", gender:null,
     note:"かんせんする = to be infected.\nかんせんかくだい = spread of infection.",
     example:"A: かんせんしょうのよぼうにはてあらいがだいじです。\nB: マスクもこうかてきですね。",
     exampleSrc:"A: Handwashing is important for infectious disease prevention.\nB: Masks are also effective.",
     funFact:"Japan's response to かんせんしょう (感染症) reflects cultural habits: mask-wearing, shoe removal, frequent handwashing. The 手洗い (てあらい) stations at school and restaurant entrances predate COVID. Japan's relatively low COVID death rate was partly attributed to these existing hygiene practices and high mask compliance."},

    {type:"teach", trg:"こうれいしゃ", src:"elderly person / senior citizen", pos:"noun", gender:null,
     note:"こうれいしゃふくし = elderly welfare.\nこうれいか = aging (of society).",
     example:"A: こうれいしゃのかいごもんだいがふえています。\nB: かいごほけんせいどがありますが、たりません。",
     exampleSrc:"A: Elderly care problems are increasing.\nB: There is care insurance, but it is not enough.",
     funFact:"こうれいしゃ (高齢者) make up nearly 30% of Japan's population. 介護 (かいご, eldercare) is a massive social challenge. Japan created かいごほけん (care insurance) in 2000 but faces worker shortages. Care robots, community support, and 地域包括ケア (community-based integrated care) are innovative solutions being developed."},

    {type:"teach", trg:"せいしんてき", src:"mental / psychological", pos:"adj", gender:null,
     note:"Na-adjective. せいしんてきけんこう = mental health.\nせいしんか = psychiatry.",
     example:"A: せいしんてきけんこうもだいじです。\nB: そうですね。からだだけではありません。",
     exampleSrc:"A: Mental health is important too.\nB: Yes. It is not just the body.",
     funFact:"せいしんてき (精神的) health awareness is growing in Japan. Historically, mental health carried stigma. Now, メンタルヘルス (mental health) programs are mandatory in workplaces. ストレスチェック (stress checks) became legally required in 2015. Counseling services are expanding, though cultural barriers to seeking help persist."},

    {type:"teach", trg:"ちりょう", src:"medical treatment / therapy", pos:"noun", gender:null,
     note:"ちりょうする = to treat. ちりょうほう = treatment method.\nちりょうひ = medical expenses.",
     example:"A: ちりょうはどのくらいかかりますか？\nB: ほけんてきようなので、さんわりふたんです。",
     exampleSrc:"A: How long will treatment take?\nB: Insurance covers it, so you pay 30%.",
     funFact:"Japanese ちりょう (治療) combines Western medicine with traditional approaches. 漢方薬 (かんぽうやく, Chinese herbal medicine) is covered by health insurance. Acupuncture (鍼治療) and moxibustion (灸) are recognized ちりょう methods. This integrative approach gives patients more ちりょう options than in many Western countries."},

    {type:"teach", trg:"さいせいいりょう", src:"regenerative medicine", pos:"noun", gender:null,
     note:"iPS細胞 = iPS cells (induced pluripotent stem cells).\nさいせいいりょうけんきゅう = regenerative medicine research.",
     example:"A: にほんはさいせいいりょうのけんきゅうがすすんでいます。\nB: やまなかきょうじゅのiPSさいぼうがゆうめいですね。",
     exampleSrc:"A: Japan is advanced in regenerative medicine research.\nB: Professor Yamanaka's iPS cells are famous.",
     funFact:"さいせいいりょう (再生医療) is a Japanese research strength. Yamanaka Shinya won the 2012 Nobel Prize for iPS cells. Japan approved the world's first iPS cell treatment for age-related macular degeneration. The government heavily funds さいせいいりょう research, aiming to lead this medical revolution."},

    // Quiz steps
    {type:"mc", q:"Japan's health insurance covers what percentage for patients?",
     opts:["30% (patient pays), 70% covered","50% each","100% free","10% patient pays"],
     ans:"30% (patient pays), 70% covered",
     hint:"Universal coverage since 1961 means everyone p... into insurance and patients cover a minority of costs."},

    {type:"match", pairs:[
      {trg:"しんだん", src:"diagnosis"},
      {trg:"しゅじゅつ", src:"surgery"},
      {trg:"かいふく", src:"recovery"},
      {trg:"よぼう", src:"prevention"},
      {trg:"ちりょう", src:"treatment"}
    ]},

    {type:"fb", s:"しゅじゅつは{1}しました。おだいじに。",
     a:["せいこう"],
     opts:["せいこう","かいふく","しんだん","よぼう"],
     hint:"The surgery went well. This verb means 'to succeed.'",
     sSrc:"The surgery {1}. Take care."},

    {type:"mc", q:"iPSさいぼう were developed by:",
     opts:["Yamanaka Shinya (Nobel Prize 2012)","Watson and Crick","Marie Curie","Alexander Fleming"],
     ans:"Yamanaka Shinya (Nobel Prize 2012)",
     hint:"This Japanese scientist's discovery of induced pluripotent stem cells revolutionized regenerative medicine."},

    {type:"fb", s:"{1}りょくをたかめるにはすいみんがだいじです。",
     a:["めんえき"],
     opts:["めんえき","せいしん","かいふく","よぼう"],
     hint:"Sleep is important for boosting your immune strength.",
     sSrc:"{1} strength is boosted by sleep."},

    {type:"mc", q:"ストレスチェック in Japanese workplaces became:",
     opts:["Legally required in 2015","Voluntary forever","Only for hospitals","Only for schools"],
     ans:"Legally required in 2015",
     hint:"All companies with 50+ employees must conduct annual stress checks for employee mental health."},

    {type:"match", pairs:[
      {trg:"しょほうせん", src:"prescription"},
      {trg:"めんえき", src:"immunity"},
      {trg:"かんせんしょう", src:"infectious disease"},
      {trg:"こうれいしゃ", src:"elderly person"},
      {trg:"さいせいいりょう", src:"regenerative medicine"}
    ]},

    {type:"fb", s:"{1}てきけんこうもだいじです。からだだけではありません。",
     a:["せいしん"],
     opts:["せいしん","しんだん","ちりょう","よぼう"],
     hint:"Mental health matters too, not just physical health.",
     sSrc:"{1} health is also important. Not just the body."}
  ]
};
export default BATCH7_L1;
