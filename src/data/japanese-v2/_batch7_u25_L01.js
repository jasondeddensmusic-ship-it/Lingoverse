// Batch 7 – Unit 25 (B2.1 Business): Corporate Strategy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u25l_b7_1", title:"きぎょうせんりゃく", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"きぎょうせんりゃく",
     desc:"Learn corporate strategy and management vocabulary. These JLPT N2 words appear in business news, company reports, and professional discussions about organizational direction.",
     goals:["Discuss corporate strategy concepts","Use management and planning vocabulary","Analyze business situations with proper terminology"]},

    {type:"teach", trg:"せんりゃく", src:"strategy", pos:"noun", gender:null,
     note:"せんりゃくをたてる = to devise a strategy.\nけいえいせんりゃく = management strategy.",
     example:"A: あたらしいせんりゃくがひつようです。\nB: シェアかくだいをめざしましょう。",
     exampleSrc:"A: A new strategy is needed.\nB: Let us aim for market share expansion.",
     funFact:"せんりゃく (戦略) originally meant military strategy (戦 = battle, 略 = plan). It entered business language in the postwar economic boom. Japanese companies are known for long-term せんりゃく thinking, planning decades ahead. Toyota's just-in-time system is a famous せんりゃく innovation."},

    {type:"teach", trg:"きょうそう", src:"competition", pos:"noun", gender:null,
     note:"きょうそうする = to compete. きょうそうりょく = competitiveness.\nかかくきょうそう = price competition.",
     example:"A: きょうそうがはげしくなっています。\nB: さべつかがだいじですね。",
     exampleSrc:"A: Competition is intensifying.\nB: Differentiation is important.",
     funFact:"きょうそう (競争) drives Japanese business but is balanced by きょうちょう (協調, cooperation). Many Japanese industries have both fierce competition and industry cooperation (業界団体). The concept of 共存共栄 (きょうぞんきょうえい, coexistence and co-prosperity) means competitors can also be partners."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"とうしする = to invest. とうしか = investor.\nせっびとうし = capital investment.",
     example:"A: けんきゅうかいはつにとうしするべきです。\nB: ちょうきてきなしてんがだいじですね。",
     exampleSrc:"A: We should invest in research and development.\nB: A long-term perspective is important.",
     funFact:"とうし (投資) combines 投 (throw) and 資 (capital). You 'throw' money into opportunities. Japanese investment culture traditionally favored savings (貯金) over stocks. NISA (Nippon Individual Savings Account) was created to encourage individual とうし. Younger generations are embracing investment."},

    {type:"teach", trg:"かくしん", src:"innovation / reform", pos:"noun", gender:null,
     note:"ぎじゅつかくしん = technological innovation.\nかくしんてき = innovative.",
     example:"A: かくしんなくしてせいちょうはありません。\nB: つねにあたらしいことにちょうせんしましょう。",
     exampleSrc:"A: There is no growth without innovation.\nB: Let us always challenge new things.",
     funFact:"かくしん (革新) uses 革 (leather/reform) and 新 (new). It implies fundamental renewal, not just improvement. Japan has a complex relationship with かくしん: incremental improvement (改善, かいぜん) is preferred over disruptive change. Yet Japan created entire industries through かくしん: Walkman, Shinkansen, hybrid cars."},

    {type:"teach", trg:"こうりつ", src:"efficiency", pos:"noun", gender:null,
     note:"こうりつてき = efficient. こうりつか = making more efficient.\nぎょうむのこうりつか = streamlining operations.",
     example:"A: こうりつをあげるひつようがあります。\nB: デジタルかをすすめましょう。",
     exampleSrc:"A: We need to improve efficiency.\nB: Let us advance digitalization.",
     funFact:"こうりつ (効率) is a corporate obsession. かいぜん (改善, continuous improvement) and こうりつ are intertwined in Japanese manufacturing philosophy. Toyota's production system maximizes こうりつ while minimizing waste (ムダ). The English word 'kaizen' entered global vocabulary from this Japanese pursuit of こうりつ."},

    {type:"teach", trg:"じっせき", src:"results / track record / achievements", pos:"noun", gender:null,
     note:"じっせきをあげる = to produce results.\nかこのじっせき = past track record.",
     example:"A: きょねんのじっせきはどうでしたか？\nB: もくひょうをたっせいしました。",
     exampleSrc:"A: How were last year's results?\nB: We achieved our targets.",
     funFact:"じっせき (実績) is everything in Japanese business evaluation. Promotions depend on じっせき. Companies present じっせき in annual reports. In job changes, じっせき is the primary selling point. The word combines 実 (actual/real) and 績 (achievements), emphasizing proven, real results over potential."},

    {type:"teach", trg:"かいぜん", src:"continuous improvement", pos:"noun", gender:null,
     note:"かいぜんする = to improve. かいぜんてい = improvement proposal.\nToyota's philosophy.",
     example:"A: まいにちのかいぜんがたいせつです。\nB: ちいさなことからはじめましょう。",
     exampleSrc:"A: Daily improvement is important.\nB: Let us start with small things.",
     funFact:"かいぜん (改善) became a global business term through Toyota. It means incremental, continuous improvement by everyone in the organization. Workers submit かいぜんていあん (improvement proposals) regularly. The philosophy: big results come from countless small improvements. かいぜん is now taught in MBA programs worldwide."},

    {type:"teach", trg:"コンプライアンス", src:"compliance (legal/regulatory)", pos:"noun", gender:null,
     note:"Katakana loanword. コンプライアンスいはん = compliance violation.\nCorporate governance term.",
     example:"A: コンプライアンスのけんしゅうがあります。\nB: ぜんいんさんかひっすですか？",
     exampleSrc:"A: There is compliance training.\nB: Is attendance mandatory for everyone?",
     funFact:"コンプライアンス entered Japanese business language after corporate scandals in the early 2000s. Every large company now has a コンプライアンス department. Annual training is mandatory. The word expanded from legal compliance to include ethical behavior and social responsibility."},

    {type:"teach", trg:"マーケティング", src:"marketing", pos:"noun", gender:null,
     note:"Katakana loanword. マーケティングせんりゃく = marketing strategy.\nデジタルマーケティング = digital marketing.",
     example:"A: マーケティングのデータをぶんせきしましょう。\nB: きゃくそうのこうどうパターンがみえてきました。",
     exampleSrc:"A: Let us analyze the marketing data.\nB: Customer behavior patterns are becoming visible.",
     funFact:"Japanese マーケティング blends Western techniques with Japanese cultural sensitivity. 口コミ (くちコミ, word of mouth) is extremely powerful. Product launches in Japan often rely on limited editions (限定品) and seasonal themes. Japanese consumers respond strongly to ストーリー (story/narrative) marketing."},

    {type:"teach", trg:"ブランド", src:"brand", pos:"noun", gender:null,
     note:"Katakana loanword. ブランドりょく = brand power.\nブランドイメージ = brand image.",
     example:"A: ブランドイメージをまもることがだいじです。\nB: ひんしつかんりをてっていしましょう。",
     exampleSrc:"A: Protecting brand image is important.\nB: Let us thoroughly maintain quality control.",
     funFact:"Japanese consumers are extremely ブランド conscious. Luxury brands like Louis Vuitton earn a huge share of global revenue from Japan. Japanese domestic ブランド (Shiseido, Uniqlo, Muji) succeed by embodying Japanese values: quality, minimalism, and attention to detail. ブランドりょく (brand power) determines pricing ability."},

    {type:"teach", trg:"ニーズ", src:"needs (market/customer)", pos:"noun", gender:null,
     note:"Katakana loanword. きゃくのニーズ = customer needs.\nせんざいニーズ = latent needs.",
     example:"A: きゃくさまのニーズをりかいすることがだいいちです。\nB: アンケートちょうさをしましょう。",
     exampleSrc:"A: Understanding customer needs comes first.\nB: Let us conduct a survey.",
     funFact:"Japanese business philosophy emphasizes せんざいニーズ (latent needs): what customers want but cannot articulate. Sony's Walkman addressed a ニーズ nobody knew they had. This customer-anticipation approach (おもてなし applied to products) is distinctly Japanese and drives many innovations."},

    {type:"teach", trg:"きぎょうりねん", src:"corporate philosophy / mission", pos:"noun", gender:null,
     note:"きぎょう = company, りねん = philosophy.\nけいえいりねん = management philosophy.",
     example:"A: わがしゃのきぎょうりねんは「しゃかいこうけん」です。\nB: すばらしいりねんですね。",
     exampleSrc:"A: Our company philosophy is 'contributing to society.'\nB: A wonderful philosophy.",
     funFact:"きぎょうりねん (企業理念) is taken very seriously in Japan. Companies display it prominently and recite it at morning meetings. Matsushita Electric (Panasonic) founder Matsushita Konosuke's りねん influenced generations. Japanese companies see themselves as serving society, not just shareholders. This 三方よし (sanpo yoshi, good for three parties) philosophy dates to Edo-era merchants."},

    // Quiz steps
    {type:"mc", q:"かいぜん became a global business term through:",
     opts:["Toyota's manufacturing philosophy","A bestselling book","Government regulation","A Silicon Valley startup"],
     ans:"Toyota's manufacturing philosophy",
     hint:"This continuous improvement concept was developed and perfected by T... and is now taught worldwide."},

    {type:"match", pairs:[
      {trg:"せんりゃく", src:"strategy"},
      {trg:"きょうそう", src:"competition"},
      {trg:"とうし", src:"investment"},
      {trg:"かくしん", src:"innovation"},
      {trg:"こうりつ", src:"efficiency"}
    ]},

    {type:"fb", s:"きょねんの{1}はもくひょうをたっせいしました。",
     a:["じっせき"],
     opts:["じっせき","せんりゃく","かくしん","ニーズ"],
     hint:"Last year's actual results met the targets. This word means 'track record' or 'achievements.'",
     sSrc:"Last year's {1} achieved the targets."},

    {type:"mc", q:"せんざいニーズ means:",
     opts:["Needs customers cannot yet articulate","Already expressed customer demands","Government regulations","Competitor actions"],
     ans:"Needs customers cannot yet articulate",
     hint:"Japanese innovation focuses on addressing what people want but have not y... realized they want."},

    {type:"fb", s:"{1}のけんしゅうはぜんいんひっすです。",
     a:["コンプライアンス"],
     opts:["コンプライアンス","マーケティング","ブランド","ニーズ"],
     hint:"Legal and ethical compliance training is mandatory for all employees.",
     sSrc:"{1} training is mandatory for everyone."},

    {type:"mc", q:"三方よし (sanpo yoshi) means:",
     opts:["Good for seller, buyer, and society","Three strategic pillars","Three-year plan","Three department heads"],
     ans:"Good for seller, buyer, and society",
     hint:"This Edo-era merchant philosophy views business success as benefiting all three parties."},

    {type:"match", pairs:[
      {trg:"じっせき", src:"track record"},
      {trg:"かいぜん", src:"continuous improvement"},
      {trg:"コンプライアンス", src:"compliance"},
      {trg:"ニーズ", src:"needs"},
      {trg:"きぎょうりねん", src:"corporate philosophy"}
    ]},

    {type:"fb", s:"まいにちの{1}がおおきなせいかにつながります。",
     a:["かいぜん"],
     opts:["かいぜん","かくしん","きょうそう","とうし"],
     hint:"Small daily improvements lead to big results. This is Toyota's famous philosophy.",
     sSrc:"Daily {1} leads to great results."}
  ]
};
export default BATCH7_L1;
