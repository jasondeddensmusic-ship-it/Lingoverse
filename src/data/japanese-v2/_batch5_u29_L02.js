// Unit 29 Batch 5 Lesson 2: ろうどうけいざい (Labor Economics & Work Reform)
const BATCH5_L_2 = {
  id:"jav2_u29l_b5_2", title:"ろうどうけいざい", icon:"👷", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろうどうけいざい",
     desc:"Japan's labor market faces unique challenges: lifetime employment erosion, non-regular workers, gender gaps, and foreign worker integration. Learn the vocabulary that defines these ongoing debates. These terms are essential for understanding modern Japanese society and appear frequently in JLPT N2 reading passages.",
     goals:["Discuss employment types and labor reform","Use vocabulary for wages, benefits, and working conditions","Understand Japan's evolving work culture"]},

    {type:"teach", trg:"こよう", src:"employment / hiring", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ/hire.\nしゅうしんこよう = lifetime employment. ひせいきこよう = non-regular employment.",
     example:"A: にほんのこようかんきょうはおおきくかわりつつあります。\nB: しゅうしんこようのじだいはおわりつつありますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Japan's employment environment is changing greatly.\nB: The era of lifetime employment is coming to an end.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"雇用 uses 雇 (employ) and 用 (use). Japan's famous しゅうしんこよう (lifetime employment) system, where companies hired new graduates and kept them until retirement, defined postwar corporate culture. This system is weakening as companies shift to ひせいきこよう (non-regular employment: part-time, contract, dispatch workers). About 37% of workers are now ひせいき, creating a social divide."},

    {type:"teach", trg:"ちんぎん", src:"wages / pay", pos:"noun", gender:null,
     note:"Kanji: 賃金. さいていちんぎん = minimum wage.\nちんぎんかくさ = wage gap.",
     example:"A: さいていちんぎんのひきあげがもとめられています。\nB: せいかつひのじょうしょうにみあったちんぎんがひつようですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: An increase in the minimum wage is being demanded.\nB: Wages that match the rising cost of living are needed.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"賃金 uses 賃 (rent/wages) and 金 (money). Japan's real ちんぎん barely grew for 30 years, a phenomenon called 'wage stagnation.' さいていちんぎん (minimum wage) varies by prefecture: Tokyo's is highest. The ちんぎんかくさ (wage gap) between regular and non-regular workers, and between men and women, remains a major social issue driving labor reform discussions."},

    {type:"teach", trg:"てんしょく", src:"job change / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job-switching website.",
     example:"A: さいきんてんしょくするひとがふえています。\nB: ひとつのかいしゃにこだわらないせだいがふえましたね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: More people are changing jobs recently.\nB: The generation that does not stick to one company is growing.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"転職 was once considered disloyal in Japan, where lifetime employment was the norm. The stigma has largely disappeared. てんしょくサイト (job-switching websites) like リクナビNEXT and doda are booming. Young workers change jobs for better conditions, and companies increasingly value diverse experience. This cultural shift represents one of Japan's biggest workplace transformations."},

    {type:"teach", trg:"いくきゅう", src:"parental leave / childcare leave", pos:"noun", gender:null,
     note:"Kanji: 育休 (short for 育児休業). いくきゅうをとる = to take parental leave.\nMale いくきゅう is increasing but still low.",
     example:"A: だんせいのいくきゅうしゅとくりつをあげることがもくひょうです。\nB: しょくばのりかいがひつようですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The goal is to raise the male parental leave uptake rate.\nB: Workplace understanding is necessary.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"育休 abbreviates 育児休業 (ikuji kyuugyou, childcare leave). Japan's parental leave system is generous on paper but underutilized, especially by men. Male いくきゅう rates have risen from 2% (2010) to about 17% (2023), but remain far below the government's 50% target. Cultural pressure to not burden colleagues (迷惑をかけない) prevents many fathers from taking leave."},

    {type:"mc", q:"ひせいきこよう means:", opts:["Non-regular employment (part-time, contract, temp)","Full-time permanent employment","Self-employment","Government employment"], ans:"Non-regular employment (part-time, contract, temp)",
     hint:"ひ (n...-) + せいき (r...) + こよう (e...) = workers without permanent full-t... status."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"Kanji: 働き方改革. Government initiative to improve working conditions.\nOvertime caps, paid leave enforcement, flexible work.",
     example:"A: はたらきかたかいかくでざんぎょうじかんにじょうげんがもうけられました。\nB: しかし、じっさいのうんようはかいしゃによってちがいますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Work style reform established caps on overtime hours.\nB: However, actual implementation varies by company.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"働き方改革 became law in 2018. Key measures: overtime capped at 720 hours/year, mandatory 5 days paid leave, equal pay for equal work. The reform addresses karoshi (過労死, death from overwork) and the declining birth rate (overwork prevents family life). テレワーク (telework) expanded dramatically during the pandemic, accelerating work style changes."},

    {type:"teach", trg:"ふくりこうせい", src:"employee benefits / welfare benefits", pos:"noun", gender:null,
     note:"Kanji: 福利厚生. ふくり (welfare) + こうせい (promotion/enhancement).\nCompany-provided benefits beyond salary.",
     example:"A: このかいしゃはふくりこうせいがじゅうじつしています。\nB: しゃたくやほけんのほかにジムのりようもできるんですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: This company has comprehensive employee benefits.\nB: Besides company housing and insurance, you can also use a gym.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"福利厚生 includes company housing (社宅 shataku), health insurance supplements, retirement bonuses, commuter passes, and recreational facilities. Japanese companies traditionally offered generous ふくりこうせい as part of the lifetime employment package. As employment becomes more fluid, companies use attractive ふくりこうせい to recruit talent. Some offer unique perks like pet leave or birthday bonuses."},

    {type:"teach", trg:"がいこくじんろうどうしゃ", src:"foreign worker", pos:"noun", gender:null,
     note:"Kanji: 外国人労働者. がいこくじん (foreigner) + ろうどうしゃ (worker).\nにほんのろうどうりょくぶそくをおぎなうために increasing.",
     example:"A: がいこくじんろうどうしゃのかずがねんねんふえています。\nB: たぶんかきょうせいしゃかいのじつげんがかだいですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The number of foreign workers is increasing year by year.\nB: Realizing a multicultural coexistence society is the challenge.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan's がいこくじんろうどうしゃ exceeded 2 million in 2023. The ぎのうじっしゅう (Technical Intern Training) program has been criticized for labor exploitation. A new とくていぎのう (Specified Skilled Worker) visa was created in 2019 for sectors with severe labor shortages: nursing, construction, agriculture, and food service. Immigration policy remains one of Japan's most debated topics."},

    {type:"tip", title:"Japanese Employment Types",
     text:"せいしゃいん = regular full-time employee\nけいやくしゃいん = contract employee\nパート = part-time worker\nアルバイト = part-time job (student/temporary)\nはけんしゃいん = dispatched/temp worker\nフリーランス = freelancer\nきぎょうか = entrepreneur\n\nKey differences:\nせいしゃいん: Full benefits, job security, career path\nひせいき: Lower pay, fewer benefits, less security\n\nLabor reform goals:\nどういつろうどう どういつちんぎん = equal pay for equal work\nざんぎょうじかんじょうげん = overtime caps\nゆうきゅうきゅうか = paid leave enforcement"},

    {type:"teach", trg:"ろうどうりょくぶそく", src:"labor shortage", pos:"noun", gender:null,
     note:"Kanji: 労働力不足. ろうどうりょく (labor force) + ぶそく (shortage).\nJapan's critical demographic challenge.",
     example:"A: こうれいかにともなってろうどうりょくぶそくがしんこくになっています。\nB: ロボットやAIのかつようがきたいされていますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Labor shortages are becoming serious alongside aging.\nB: Utilization of robots and AI is being anticipated.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"労働力不足 is Japan's defining economic challenge. With the population declining and aging, sectors like nursing, construction, agriculture, and logistics face critical shortages. Solutions include: women's workforce participation (女性活躍), elderly employment extension (定年延長), foreign workers (外国人労働者), and automation (自動化). Each solution has its own political and cultural complexities."},

    {type:"fb", s:"さいきん{1}するひとがふえています。\n(More people are changing jobs recently.)", a:"てんしょく", opts:["てんしょく","しゅうしょく","たいしょく","きゅうしょく"], sSrc:"More people are changing jobs recently.",
     hint:"The word for switching from one job to another, not first employment or retirement."},

    {type:"mc", q:"はたらきかたかいかく aims to:", opts:["Improve working conditions (overtime caps, paid leave, flexibility)","Increase working hours","Reduce wages","Eliminate all regulations"], ans:"Improve working conditions (overtime caps, paid leave, flexibility)",
     hint:"This government initiative addresses overwork and promotes better work-life balance."},

    {type:"match", pairs:[{trg:"こよう",src:"employment"},{trg:"ちんぎん",src:"wages"},{trg:"てんしょく",src:"job change"},{trg:"いくきゅう",src:"parental leave"}]},

    {type:"fb", s:"こうれいかにともなって{1}がしんこくになっています。\n(Labor shortages are becoming serious alongside aging.)", a:"ろうどうりょくぶそく", opts:["ろうどうりょくぶそく","じんこうぞうか","けいざいせいちょう","ちんぎんじょうしょう"], sSrc:"Labor shortages are becoming serious alongside aging.",
     hint:"The compound for 'insufficient workforce,' combining labor force with shortage."},

    {type:"mc", q:"しゅうしんこよう describes:", opts:["Working at the same company from graduation to retirement","Freelance work","Government employment","Working multiple jobs"], ans:"Working at the same company from graduation to retirement",
     hint:"しゅうしん (whole life/lifetime) + こよう (employment) = the traditional Japanese career model."}
  ]
};
export default BATCH5_L_2;
