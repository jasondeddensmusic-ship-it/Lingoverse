// Batch 7 – Unit 25 (B2.1 Business): Corporate Strategy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u25l_b7_1", title:"きぎょうせんりゃく", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"きぎょうせんりゃく",
     desc:"Learn corporate strategy and management vocabulary. These JLPT N2 words appear in business news, company reports, and professional discussions about organizational direction.",
     goals:["Discuss corporate strategy concepts","Use management and planning vocabulary","Analyze business situations with proper terminology"]},

    {type:"teach", trg:"せんりゃく", src:"strategy", pos:"noun", gender:null,
     note:"せんりゃくをたてる = to devise a strategy.\nけいえいせんりゃく = management strategy.",
     example:"A: あたらしいせんりゃくがひつようです。\nB: シェアかくだいをめざしましょう。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: A new strategy is needed.\nB: Let us aim for market share expansion.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"せんりゃく (戦略) originally meant military strategy (戦 = battle, 略 = plan). It entered business language in the postwar economic boom. Japanese companies are known for long-term せんりゃく thinking, planning decades ahead. Toyota's just-in-time system is a famous せんりゃく innovation."},

    {type:"teach", trg:"きょうそう", src:"competition", pos:"noun", gender:null,
     note:"きょうそうする = to compete. きょうそうりょく = competitiveness.\nかかくきょうそう = price competition.",
     example:"A: きょうそうがはげしくなっています。\nB: さべつかがだいじですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Competition is intensifying.\nB: Differentiation is important.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"きょうそう (競争) drives Japanese business but is balanced by きょうちょう (協調, cooperation). Many Japanese industries have both fierce competition and industry cooperation (業界団体). The concept of 共存共栄 (きょうぞんきょうえい, coexistence and co-prosperity) means competitors can also be partners."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"とうしする = to invest. とうしか = investor.\nせっびとうし = capital investment.",
     example:"A: けんきゅうかいはつにとうしするべきです。\nB: ちょうきてきなしてんがだいじですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: We should invest in research and development.\nB: A long-term perspective is important.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"とうし (投資) combines 投 (throw) and 資 (capital). You 'throw' money into opportunities. Japanese investment culture traditionally favored savings (貯金) over stocks. NISA (Nippon Individual Savings Account) was created to encourage individual とうし. Younger generations are embracing investment."},

    {type:"teach", trg:"かくしん", src:"innovation / reform", pos:"noun", gender:null,
     note:"ぎじゅつかくしん = technological innovation.\nかくしんてき = innovative.",
     example:"A: かくしんなくしてせいちょうはありません。\nB: つねにあたらしいことにちょうせんしましょう。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: There is no growth without innovation.\nB: Let us always challenge new things.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"かくしん (革新) uses 革 (leather/reform) and 新 (new). It implies fundamental renewal, not just improvement. Japan has a complex relationship with かくしん: incremental improvement (改善, かいぜん) is preferred over disruptive change. Yet Japan created entire industries through かくしん: Walkman, Shinkansen, hybrid cars."},

    {type:"teach", trg:"こうりつ", src:"efficiency", pos:"noun", gender:null,
     note:"こうりつてき = efficient. こうりつか = making more efficient.\nぎょうむのこうりつか = streamlining operations.",
     example:"A: こうりつをあげるひつようがあります。\nB: デジタルかをすすめましょう。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: We need to improve efficiency.\nB: Let us advance digitalization.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"こうりつ (効率) is a corporate obsession. かいぜん (改善, continuous improvement) and こうりつ are intertwined in Japanese manufacturing philosophy. Toyota's production system maximizes こうりつ while minimizing waste (ムダ). The English word 'kaizen' entered global vocabulary from this Japanese pursuit of こうりつ."},

    {type:"teach", trg:"じっせき", src:"results / track record / achievements", pos:"noun", gender:null,
     note:"じっせきをあげる = to produce results.\nかこのじっせき = past track record.",
     example:"A: きょねんのじっせきはどうでしたか？\nB: もくひょうをたっせいしました。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: How were last year's results?\nB: We achieved our targets.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"じっせき (実績) is everything in Japanese business evaluation. Promotions depend on じっせき. Companies present じっせき in annual reports. In job changes, じっせき is the primary selling point. The word combines 実 (actual/real) and 績 (achievements), emphasizing proven, real results over potential."},

    {type:"teach", trg:"かいぜん", src:"continuous improvement", pos:"noun", gender:null,
     note:"かいぜんする = to improve. かいぜんてい = improvement proposal.\nToyota's philosophy.",
     example:"A: まいにちのかいぜんがたいせつです。\nB: ちいさなことからはじめましょう。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Daily improvement is important.\nB: Let us start with small things.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"かいぜん (改善) became a global business term through Toyota. It means incremental, continuous improvement by everyone in the organization. Workers submit かいぜんていあん (improvement proposals) regularly. The philosophy: big results come from countless small improvements. かいぜん is now taught in MBA programs worldwide."},

    {type:"teach", trg:"コンプライアンス", src:"compliance (legal/regulatory)", pos:"noun", gender:null,
     note:"Katakana loanword. コンプライアンスいはん = compliance violation.\nCorporate governance term.",
     example:"A: コンプライアンスのけんしゅうがあります。\nB: ぜんいんさんかひっすですか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: There is compliance training.\nB: Is attendance mandatory for everyone?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"コンプライアンス entered Japanese business language after corporate scandals in the early 2000s. Every large company now has a コンプライアンス department. Annual training is mandatory. The word expanded from legal compliance to include ethical behavior and social responsibility."},

    {type:"teach", trg:"マーケティング", src:"marketing", pos:"noun", gender:null,
     note:"Katakana loanword. マーケティングせんりゃく = marketing strategy.\nデジタルマーケティング = digital marketing.",
     example:"A: マーケティングのデータをぶんせきしましょう。\nB: きゃくそうのこうどうパターンがみえてきました。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us analyze the marketing data.\nB: Customer behavior patterns are becoming visible.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japanese マーケティング blends Western techniques with Japanese cultural sensitivity. 口コミ (くちコミ, word of mouth) is extremely powerful. Product launches in Japan often rely on limited editions (限定品) and seasonal themes. Japanese consumers respond strongly to ストーリー (story/narrative) marketing."},

    {type:"teach", trg:"ブランド", src:"brand", pos:"noun", gender:null,
     note:"Katakana loanword. ブランドりょく = brand power.\nブランドイメージ = brand image.",
     example:"A: ブランドイメージをまもることがだいじです。\nB: ひんしつかんりをてっていしましょう。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Protecting brand image is important.\nB: Let us thoroughly maintain quality control.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japanese consumers are extremely ブランド conscious. Luxury brands like Louis Vuitton earn a huge share of global revenue from Japan. Japanese domestic ブランド (Shiseido, Uniqlo, Muji) succeed by embodying Japanese values: quality, minimalism, and attention to detail. ブランドりょく (brand power) determines pricing ability."},

    {type:"teach", trg:"ニーズ", src:"needs (market/customer)", pos:"noun", gender:null,
     note:"Katakana loanword. きゃくのニーズ = customer needs.\nせんざいニーズ = latent needs.",
     example:"A: きゃくさまのニーズをりかいすることがだいいちです。\nB: アンケートちょうさをしましょう。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Understanding customer needs comes first.\nB: Let us conduct a survey.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japanese business philosophy emphasizes せんざいニーズ (latent needs): what customers want but cannot articulate. Sony's Walkman addressed a ニーズ nobody knew they had. This customer-anticipation approach (おもてなし applied to products) is distinctly Japanese and drives many innovations."},

    {type:"teach", trg:"きぎょうりねん", src:"corporate philosophy / mission", pos:"noun", gender:null,
     note:"きぎょう = company, りねん = philosophy.\nけいえいりねん = management philosophy.",
     example:"A: わがしゃのきぎょうりねんは「しゃかいこうけん」です。\nB: すばらしいりねんですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Our company philosophy is 'contributing to society.'\nB: A wonderful philosophy.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
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
