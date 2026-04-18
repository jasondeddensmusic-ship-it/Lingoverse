// Unit 29 Batch 5 Lesson 2: 労働経済(ろうどうけいざい) (Labor Economics & Work Reform)
const BATCH5_L_2 = {
  id:"jav2_u29l_b5_2", title:"労働経済(ろうどうけいざい)", icon:"👷", xp:15, board:true,
  steps:[
    {type:"intro", title:"労働経済(ろうどうけいざい)",
     desc:"Japan's labor market faces unique challenges: lifetime employment erosion, non-regular workers, gender gaps, and foreign worker integration. Learn the vocabulary that defines these ongoing debates. These terms are essential for understanding modern Japanese society and appear frequently in JLPT N2 reading passages.",
     goals:["Discuss employment types and labor reform","Use vocabulary for wages, benefits, and working conditions","Understand Japan's evolving work culture"]},

    {type:"teach", trg:"雇用(こよう)", src:"employment / hiring", pos:"noun", gender:null,
     note:"Kanji: 雇用(こよう). 雇用(こよう)する = to employ/hire.\n終身雇用(しゅうしんこよう) = lifetime employment. 非正規雇用(ひせいきこよう) = non-regular employment.",
     example:"A: 日本(にほん)の雇用(こよう)環境(かんきょう)は大(おお)きく変(か)わりつつあります。\nB: 終身雇用(しゅうしんこよう)の時代(じだい)は終(お)わりつつありますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Japan's employment environment is changing greatly.\nB: The era of lifetime employment is coming to an end.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"雇用 uses 雇 (employ) and 用 (use). Japan's famous 終身雇用(しゅうしんこよう) (lifetime employment) system, where companies hired new graduates and kept them until retirement, defined postwar corporate culture. This system is weakening as companies shift to 非正規雇用(ひせいきこよう) (non-regular employment: part-time, contract, dispatch workers). About 37% of workers are now 非正規(ひせいき), creating a social divide."},

    {type:"teach", trg:"賃金(ちんぎん)", src:"wages / pay", pos:"noun", gender:null,
     note:"Kanji: 賃金(ちんぎん). 最低賃金(さいていちんぎん) = minimum wage.\n賃金格差(ちんぎんかくさ) = wage gap.",
     example:"A: 最低賃金(さいていちんぎん)の引(ひ)き上(あ)げが求(もと)められています。\nB: 生活費(せいかつひ)の上昇(じょうしょう)に見合(みあ)った賃金(ちんぎん)が必要(ひつよう)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: An increase in the minimum wage is being demanded.\nB: Wages that match the rising cost of living are needed.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"賃金 uses 賃 (rent/wages) and 金 (money). Japan's real 賃金(ちんぎん) barely grew for 30 years, a phenomenon called 'wage stagnation.' 最低賃金(さいていちんぎん) (minimum wage) varies by prefecture: Tokyo's is highest. The 賃金格差(ちんぎんかくさ) (wage gap) between regular and non-regular workers, and between men and women, remains a major social issue driving labor reform discussions."},

    {type:"teach", trg:"転職(てんしょく)", src:"job change / career change", pos:"noun", gender:null,
     note:"Kanji: 転職(てんしょく). 転職(てんしょく)する = to change jobs.\n転職(てんしょく)サイト = job-switching website.",
     example:"A: 最近(さいきん)転職(てんしょく)する人(ひと)が増(ふ)えています。\nB: 一(ひと)つの会社(かいしゃ)にこだわらない世代(せだい)が増(ふ)えましたね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: More people are changing jobs recently.\nB: The generation that does not stick to one company is growing.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"転職 was once considered disloyal in Japan, where lifetime employment was the norm. The stigma has largely disappeared. 転職(てんしょく)サイト (job-switching websites) like リクナビNEXT and doda are booming. Young workers change jobs for better conditions, and companies increasingly value diverse experience. This cultural shift represents one of Japan's biggest workplace transformations."},

    {type:"teach", trg:"育休(いくきゅう)", src:"parental leave / childcare leave", pos:"noun", gender:null,
     note:"Kanji: 育休(いくきゅう) (short for 育児休業(いくじきゅうぎょう)). 育休(いくきゅう)をとる = to take parental leave.\nMale 育休(いくきゅう) is increasing but still low.",
     example:"A: 男性(だんせい)の育休(いくきゅう)取得率(しゅとくりつ)を上(あ)げることが目標(もくひょう)です。\nB: 職場(しょくば)の理解(りかい)が必要(ひつよう)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The goal is to raise the male parental leave uptake rate.\nB: Workplace understanding is necessary.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"育休 abbreviates 育児休業(いくじきゅうぎょう) (ikuji kyuugyou, childcare leave). Japan's parental leave system is generous on paper but underutilized, especially by men. Male 育休(いくきゅう) rates have risen from 2% (2010) to about 17% (2023), but remain far below the government's 50% target. Cultural pressure to not burden colleagues (迷惑(めいわく)をかけない) prevents many fathers from taking leave."},

    {type:"mc", q:"ひせいきこよう means:", opts:["Non-regular employment (part-time, contract, temp)","Full-time permanent employment","Self-employment","Government employment"], ans:"Non-regular employment (part-time, contract, temp)",
     hint:"ひ (n...-) + せいき (r...) + こよう (e...) = workers without permanent full-t... status."},

    {type:"teach", trg:"働(はたら)き方(かた)改革(かいかく)", src:"work style reform", pos:"noun", gender:null,
     note:"Kanji: 働(はたら)き方(かた)改革(かいかく). Government initiative to improve working conditions.\nOvertime caps, paid leave enforcement, flexible work.",
     example:"A: 働(はたら)き方(かた)改革(かいかく)で残業時間(ざんぎょうじかん)に上限(じょうげん)が設(もう)けられました。\nB: しかし、実際(じっさい)の運用(うんよう)は会社(かいしゃ)によって違(ちが)いますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Work style reform established caps on overtime hours.\nB: However, actual implementation varies by company.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"働き方改革 became law in 2018. Key measures: overtime capped at 720 hours/year, mandatory 5 days paid leave, equal pay for equal work. The reform addresses 過労死(かろうし) (karoshi, death from overwork) and the declining birth rate (overwork prevents family life). テレワーク (telework) expanded dramatically during the pandemic, accelerating work style changes."},

    {type:"teach", trg:"福利厚生(ふくりこうせい)", src:"employee benefits / welfare benefits", pos:"noun", gender:null,
     note:"Kanji: 福利厚生(ふくりこうせい). 福利(ふくり) (welfare) + 厚生(こうせい) (promotion/enhancement).\nCompany-provided benefits beyond salary.",
     example:"A: この会社(かいしゃ)は福利厚生(ふくりこうせい)が充実(じゅうじつ)しています。\nB: 社宅(しゃたく)や保険(ほけん)のほかにジムの利用(りよう)もできるんですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: This company has comprehensive employee benefits.\nB: Besides company housing and insurance, you can also use a gym.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"福利厚生 includes company housing (社宅(しゃたく)), health insurance supplements, retirement bonuses, commuter passes, and recreational facilities. Japanese companies traditionally offered generous 福利厚生(ふくりこうせい) as part of the lifetime employment package. As employment becomes more fluid, companies use attractive 福利厚生(ふくりこうせい) to recruit talent. Some offer unique perks like pet leave or birthday bonuses."},

    {type:"teach", trg:"外国人労働者(がいこくじんろうどうしゃ)", src:"foreign worker", pos:"noun", gender:null,
     note:"Kanji: 外国人労働者(がいこくじんろうどうしゃ). 外国人(がいこくじん) (foreigner) + 労働者(ろうどうしゃ) (worker).\n日本(にほん)の労働力不足(ろうどうりょくぶそく)を補(おぎな)うために increasing.",
     example:"A: 外国人労働者(がいこくじんろうどうしゃ)の数(かず)が年々(ねんねん)増(ふ)えています。\nB: 多文化共生(たぶんかきょうせい)社会(しゃかい)の実現(じつげん)が課題(かだい)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The number of foreign workers is increasing year by year.\nB: Realizing a multicultural coexistence society is the challenge.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan's 外国人労働者(がいこくじんろうどうしゃ) exceeded 2 million in 2023. The 技能実習(ぎのうじっしゅう) (Technical Intern Training) program has been criticized for labor exploitation. A new 特定技能(とくていぎのう) (Specified Skilled Worker) visa was created in 2019 for sectors with severe labor shortages: nursing, construction, agriculture, and food service. Immigration policy remains one of Japan's most debated topics."},

    {type:"tip", title:"Japanese Employment Types",
     text:"正社員(せいしゃいん) = regular full-time employee\n契約社員(けいやくしゃいん) = contract employee\nパート = part-time worker\nアルバイト = part-time job (student/temporary)\n派遣社員(はけんしゃいん) = dispatched/temp worker\nフリーランス = freelancer\n起業家(きぎょうか) = entrepreneur\n\nKey differences:\n正社員(せいしゃいん): Full benefits, job security, career path\n非正規(ひせいき): Lower pay, fewer benefits, less security\n\nLabor reform goals:\n同一労働(どういつろうどう)同一賃金(どういつちんぎん) = equal pay for equal work\n残業時間上限(ざんぎょうじかんじょうげん) = overtime caps\n有給休暇(ゆうきゅうきゅうか) = paid leave enforcement"},

    {type:"teach", trg:"労働力不足(ろうどうりょくぶそく)", src:"labor shortage", pos:"noun", gender:null,
     note:"Kanji: 労働力不足(ろうどうりょくぶそく). 労働力(ろうどうりょく) (labor force) + 不足(ぶそく) (shortage).\nJapan's critical demographic challenge.",
     example:"A: 高齢化(こうれいか)にともなって労働力不足(ろうどうりょくぶそく)が深刻(しんこく)になっています。\nB: ロボットやAIの活用(かつよう)が期待(きたい)されていますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Labor shortages are becoming serious alongside aging.\nB: Utilization of robots and AI is being anticipated.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"労働力不足 is Japan's defining economic challenge. With the population declining and aging, sectors like nursing, construction, agriculture, and logistics face critical shortages. Solutions include: 女性活躍(じょせいかつやく) (women's workforce participation), 定年延長(ていねんえんちょう) (elderly employment extension), 外国人労働者(がいこくじんろうどうしゃ) (foreign workers), and 自動化(じどうか) (automation). Each solution has its own political and cultural complexities."},

    {type:"fb", s:"最近(さいきん){1}する人(ひと)が増(ふ)えています。\n(More people are changing jobs recently.)", a:"転職(てんしょく)", opts:["転職(てんしょく)","就職(しゅうしょく)","退職(たいしょく)","休職(きゅうしょく)"], sSrc:"More people are changing jobs recently.",
     hint:"The word for switching from one job to another, not first employment or retirement."},

    {type:"mc", q:"はたらきかたかいかく aims to:", opts:["Improve working conditions (overtime caps, paid leave, flexibility)","Increase working hours","Reduce wages","Eliminate all regulations"], ans:"Improve working conditions (overtime caps, paid leave, flexibility)",
     hint:"This government initiative addresses overwork and promotes better work-life balance."},

    {type:"match", pairs:[{trg:"雇用(こよう)",src:"employment"},{trg:"賃金(ちんぎん)",src:"wages"},{trg:"転職(てんしょく)",src:"job change"},{trg:"育休(いくきゅう)",src:"parental leave"}]},

    {type:"fb", s:"高齢化(こうれいか)にともなって{1}が深刻(しんこく)になっています。\n(Labor shortages are becoming serious alongside aging.)", a:"労働力不足(ろうどうりょくぶそく)", opts:["労働力不足(ろうどうりょくぶそく)","人口増加(じんこうぞうか)","経済成長(けいざいせいちょう)","賃金上昇(ちんぎんじょうしょう)"], sSrc:"Labor shortages are becoming serious alongside aging.",
     hint:"The compound for 'insufficient workforce,' combining labor force with shortage."},

    {type:"mc", q:"しゅうしんこよう describes:", opts:["Working at the same company from graduation to retirement","Freelance work","Government employment","Working multiple jobs"], ans:"Working at the same company from graduation to retirement",
     hint:"しゅうしん (whole life/lifetime) + こよう (employment) = the traditional Japanese career model."}
  ,{type:"match",pairs:[{trg:"働(はたら)き方(かた)改革(かいかく)",src:"work style reform"},{trg:"福利厚生(ふくりこうせい)",src:"employee benefits / welfare benefits"},{trg:"外国人労働者(がいこくじんろうどうしゃ)",src:"foreign worker"}]}]
};
export default BATCH5_L_2;
