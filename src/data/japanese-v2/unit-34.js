// Japanese V2 Unit 34. 国際関係(こくさいかんけい) (International Relations)
import BATCH11_L1 from './_batch11_u34_L01.js';
import BATCH10_L1 from './_batch10_u34_L01.js';
import BATCH9_L1 from './_batch9_u34_L01.js';
import BATCH7_L1 from './_batch7_u34_L01.js';
import BATCH8_L1 from './_batch8_u34_L01.js';
import BATCH6_L1 from './_batch6_u34_L01.js';
import BATCH5_L02 from './_batch5_u34_L02.js';
import BATCH5_L01 from './_batch5_u34_L01.js';
import BATCH2_L02 from './_batch2_u34_L02.js';
import BATCH2_L01 from './_batch2_u34_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// がいこう, こくれん, じょうやく, ふんそう, きょうりょく, えんじょ, あんぜんほしょう.

const UNIT_34 = {
  n:34, lang:"ja", srcLang:"en", track:"v2",
  title:"国際関係(こくさいかんけい)", sub:"International Relations",
  icon:"\u{1F310}", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Diplomacy & Global Politics ═══
{id:"jav2_u34l1", title:"Diplomacy & Politics", icon:"\u{1F91D}", xp:15, board:true, steps:[
  {type:"intro", title:"Diplomacy & Global Politics",
   desc:"International relations vocabulary is essential for understanding Japanese news, political discussions, and JLPT N1 reading passages. Japan plays a significant role in global diplomacy as the world's third-largest economy and a key ally in the Pacific. Words like 外交(がいこう) (diplomacy), 国連(こくれん) (United Nations), and 安全保障(あんぜんほしょう) (security) appear daily in Japanese media.",
   goals:["Use diplomatic and political vocabulary","Discuss international organizations and treaties","Understand Japan's role in global affairs"]},

  {type:"teach", trg:"国際関係(こくさいかんけい)", src:"international relations", pos:"noun", gender:null,
   note:"Kanji: 国際関係. 国際関係学(こくさいかんけいがく) = international relations (as an academic field).",
   example:"A: 国際関係(こくさいかんけい)はますます複雑(ふくざつ)になっています。\nB: 多国間(たこくかん)の協力(きょうりょく)が重要(じゅうよう)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
   exampleSrc:"A: International relations are becoming increasingly complex.\nB: Multilateral cooperation is important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
   funFact:"国際関係 is a four-kanji compound: 国 (country), 際 (occasion/between), 関 (relate), 係 (connection). Japan's postwar 国際関係(こくさいかんけい) has been defined by the alliance with the United States, economic diplomacy, and the peace constitution. The concept of 'international contribution' (国際貢献(こくさいこうけん)) became a major policy theme from the 1990s onward."},

  {type:"teach", trg:"外交(がいこう)", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
   note:"Kanji: 外交. 外交官(がいこうかん) = diplomat.\n外交政策(がいこうせいさく) = foreign policy.",
   example:"A: 日本(にほん)の外交政策(がいこうせいさく)は平和主義(へいわしゅぎ)に基(もと)づいています。\nB: 経済的(けいざいてき)な外交(がいこう)も重要(じゅうよう)な役割(やくわり)を果(は)たしていますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
   exampleSrc:"A: Japan's foreign policy is based on pacifism.\nB: Economic diplomacy also plays an important role.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
   funFact:"外交 combines 外 (outside) and 交 (exchange/interact). Japan's 外交(がいこう) has evolved from isolation (鎖国(さこく), during the Edo period) to active international engagement. The 外務省(がいむしょう) (Ministry of Foreign Affairs) manages Japan's diplomatic relations. Japan's unique position as the only country to have experienced nuclear attacks shapes its 外交(がいこう) approach to disarmament."},

  {type:"teach", trg:"国連(こくれん)", src:"United Nations (UN)", pos:"noun", gender:null,
   note:"Kanji: 国連 (short for 国際連合). 国連総会(こくれんそうかい) = UN General Assembly.\n国連安保理(こくれんあんぽり) = UN Security Council.",
   example:"A: 日本(にほん)は国連安保理(こくれんあんぽり)の常任理事国(じょうにんりじこく)になることを目指(めざ)しています。\nB: それは長年(ながねん)の外交目標(がいこうもくひょう)ですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
   exampleSrc:"A: Japan aims to become a permanent member of the UN Security Council.\nB: That has been a long-standing diplomatic goal.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
   funFact:"国連 abbreviates 国際連合(こくさいれんごう). Japan joined the UN in 1956 and is one of the largest financial contributors. The quest for a 常任理事国(じょうにんりじこく) (permanent Security Council seat) has been a central 外交(がいこう) goal for decades. Japan also hosts UN agencies including the UN University in Tokyo."},

  {type:"mc", q:"外交官(がいこうかん) means:", opts:["diplomat","foreign student","interpreter","ambassador"], ans:"diplomat",
   hint:"The compound adds 官(かん) (official/person) to the word for diplomacy/foreign affairs."},

  {type:"teach", trg:"主権(しゅけん)", src:"sovereignty", pos:"noun", gender:null,
   note:"Kanji: 主権. 国民主権(こくみんしゅけん) = popular sovereignty.\n主権国家(しゅけんこっか) = sovereign state.",
   example:"A: 国民主権(こくみんしゅけん)は日本国憲法(にほんこくけんぽう)の基本原則(きほんげんそく)です。\nB: 平和主義(へいわしゅぎ)と人権尊重(じんけんそんちょう)もですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
   exampleSrc:"A: Popular sovereignty is a basic principle of Japan's Constitution.\nB: So are pacifism and respect for human rights.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
   funFact:"主権 uses 主 (master/main) and 権 (authority/right). Japan's Constitution establishes three principles: 国民主権(こくみんしゅけん) (popular sovereignty), 基本的人権(きほんてきじんけん)の尊重(そんちょう) (respect for fundamental human rights), and 平和主義(へいわしゅぎ) (pacifism). The concept of 主権(しゅけん) also applies to territorial disputes, a sensitive topic in Japan's relations with neighboring countries."},

  {type:"teach", trg:"紛争(ふんそう)", src:"conflict / dispute", pos:"noun", gender:null,
   note:"Kanji: 紛争. 武力紛争(ぶりょくふんそう) = armed conflict.\n領土紛争(りょうどふんそう) = territorial dispute.",
   example:"A: 世界各地(せかいかくち)で紛争(ふんそう)が続(つづ)いています。\nB: 平和的解決(へいわてきかいけつ)に向(む)けた努力(どりょく)が必要(ひつよう)です。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
   exampleSrc:"A: Conflicts continue in various parts of the world.\nB: Efforts toward peaceful resolution are needed.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
   funFact:"紛争 uses 紛 (confused/tangled) and 争 (fight/compete). Japan's postwar identity has been defined by avoiding 武力紛争(ぶりょくふんそう) (armed conflict), though the country maintains the 自衛隊(じえいたい) (Self-Defense Forces). Japan's approach to 紛争解決(ふんそうかいけつ) (conflict resolution) emphasizes dialogue and economic cooperation over military intervention."},

  {type:"teach", trg:"協力(きょうりょく)", src:"cooperation / collaboration", pos:"noun", gender:null,
   note:"Kanji: 協力. 協力(きょうりょく)する = to cooperate.\n国際協力(こくさいきょうりょく) = international cooperation.",
   example:"A: 環境問題(かんきょうもんだい)の解決(かいけつ)には国際的(こくさいてき)な協力(きょうりょく)が不可欠(ふかけつ)です。\nB: 賛成(さんせい)です。一国(いっこく)だけでは解決(かいけつ)できません。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: International cooperation is indispensable for solving environmental problems.\nB: I agree. One country alone cannot solve it.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"協力 combines 協 (together/cooperate) and 力 (power/strength). Japan's 国際協力(こくさいきょうりょく) is primarily channeled through ODA (政府開発援助(せいふかいはつえんじょ), Official Development Assistance). Japan was the world's largest ODA donor for many years and remains among the top contributors, focusing on infrastructure, education, and disaster preparedness in developing nations."},

  {type:"fb", s:"世界各地(せかいかくち)で{1}が続(つづ)いています。\n(Conflicts continue in various parts of the world.)", a:"紛争(ふんそう)", opts:["紛争(ふんそう)","協力(きょうりょく)","外交(がいこう)","主権(しゅけん)"], sSrc:"Conflicts continue in various parts of the world.",
   hint:"The noun meaning 'conflict' or 'dispute,' situations where opposing sides clash."},

  {type:"teach", trg:"援助(えんじょ)", src:"aid / assistance / support", pos:"noun", gender:null,
   note:"Kanji: 援助. 援助(えんじょ)する = to aid / to assist.\n人道的援助(じんどうてきえんじょ) = humanitarian aid.",
   example:"A: 被災地(ひさいち)に人道的援助(じんどうてきえんじょ)が送(おく)られました。\nB: 一日(いちにち)も早(はや)く復興(ふっこう)してほしいですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: Humanitarian aid was sent to the disaster area.\nB: I hope they recover as soon as possible.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"援助 uses 援 (help/support) and 助 (assist). Japan is a major provider of disaster 援助(えんじょ) globally, drawing on its own extensive experience with earthquakes, typhoons, and tsunamis. The Japan International Cooperation Agency (JICA, ジャイカ) coordinates much of Japan's overseas 援助(えんじょ), deploying experts and volunteers to over 150 countries."},

  {type:"teach", trg:"安全保障(あんぜんほしょう)", src:"security (national/collective)", pos:"noun", gender:null,
   note:"Kanji: 安全保障. 安保(あんぽ) = abbreviation.\n日米安保条約(にちべいあんぽじょうやく) = US-Japan Security Treaty.",
   example:"A: 安全保障(あんぜんほしょう)環境(かんきょう)が変化(へんか)しています。\nB: 日本(にほん)の防衛政策(ぼうえいせいさく)も見直(みなお)しが必要(ひつよう)です。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: The security environment is changing.\nB: Japan's defense policy also needs to be reviewed.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"安全保障 is a four-kanji compound: 安 (safe), 全 (complete), 保 (protect), 障 (barrier). Japan's 安全保障(あんぜんほしょう) has been anchored by the 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty) since 1960. Recent debates about 集団的自衛権(しゅうだんてきじえいけん) (collective self-defense) and increased defense spending reflect Japan's evolving security posture in the Indo-Pacific region."},

  {type:"mc", q:"援助(えんじょ) means:", opts:["invasion","aid/assistance","embargo","negotiation"], ans:"aid/assistance",
   hint:"The word combining 'help' and 'assist' that describes giving support to those in need."},

  {type:"match", pairs:[{trg:"外交(がいこう)",src:"diplomacy"},{trg:"国連(こくれん)",src:"United Nations"},{trg:"紛争(ふんそう)",src:"conflict"},{trg:"援助(えんじょ)",src:"aid"}]},

  {type:"fb", s:"環境問題(かんきょうもんだい)の解決(かいけつ)には国際的(こくさいてき)な{1}が不可欠(ふかけつ)です。\n(International cooperation is indispensable for solving environmental problems.)", a:"協力(きょうりょく)", opts:["協力(きょうりょく)","外交(がいこう)","援助(えんじょ)","紛争(ふんそう)"], sSrc:"International cooperation is indispensable for solving environmental problems.",
   hint:"The noun meaning 'cooperation,' working together with others toward a shared goal."},

  {type:"match", pairs:[{trg:"主権(しゅけん)",src:"sovereignty"},{trg:"安全保障(あんぜんほしょう)",src:"security"},{trg:"国際関係(こくさいかんけい)",src:"international relations"},{trg:"協力(きょうりょく)",src:"cooperation"}]},

  {type:"mc", q:"国連(こくれん) stands for:", opts:["the G7 group","the World Bank","the United Nations","the Asian Development Bank"], ans:"the United Nations",
   hint:"This abbreviation shortens 国際連合(こくさいれんごう), the international body founded after World War II."},

  {type:"mc", q:"主権(しゅけん) means:", opts:["military power","citizenship","taxation","sovereignty"], ans:"sovereignty",
   hint:"The compound of 'master/main' and 'authority,' the supreme power of a nation over itself."},

  {type:"mc", q:"安全保障(あんぜんほしょう) refers to:", opts:["national/collective security","economic security","food security","financial security"], ans:"national/collective security",
   hint:"This four-kanji compound is abbreviated as 安保(あんぽ), and anchors Japan's defense alliance with the US."},
]},

// ═══ L2: Global Challenges & Japan's Role ═══
{id:"jav2_u34l2", title:"Global Challenges", icon:"\u{1F30D}", xp:15, board:true, steps:[
  {type:"intro", title:"Global Challenges & Japan's Role",
   desc:"Modern international relations involves addressing global challenges like climate change, nuclear proliferation, and refugee crises. This lesson covers vocabulary for these issues and Japan's specific role in addressing them, from ODA contributions to environmental leadership. These terms appear frequently in JLPT N1 reading passages and editorials.",
   goals:["Discuss global challenges in Japanese","Understand Japan's international contributions","Use vocabulary for environmental and humanitarian issues"]},

  {type:"teach", trg:"核兵器(かくへいき)", src:"nuclear weapons", pos:"noun", gender:null,
   note:"Kanji: 核兵器. 核兵器廃絶(かくへいきはいぜつ) = nuclear abolition.\n核軍縮(かくぐんしゅく) = nuclear disarmament.",
   example:"A: 日本(にほん)は核兵器廃絶(かくへいきはいぜつ)を訴(うった)え続(つづ)けています。\nB: 広島(ひろしま)と長崎(ながさき)の経験(けいけん)がその原動力(げんどうりょく)です。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: Japan continues to advocate for nuclear abolition.\nB: The experience of Hiroshima and Nagasaki is the driving force.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"核兵器 uses 核 (nucleus/core) and 兵器 (weapon). As the only country to have suffered nuclear attacks, Japan has a unique moral authority in 核軍縮(かくぐんしゅく) (nuclear disarmament) advocacy. Every year, the mayors of Hiroshima and Nagasaki deliver peace declarations at memorial ceremonies, calling for a world without 核兵器(かくへいき)."},

  {type:"teach", trg:"難民(なんみん)", src:"refugee(s)", pos:"noun", gender:null,
   note:"Kanji: 難民. 難民問題(なんみんもんだい) = refugee crisis.\n難民認定(なんみんにんてい) = refugee recognition/status.",
   example:"A: 世界(せかい)の難民数(なんみんすう)は過去最高(かこさいこう)に達(たっ)しています。\nB: 日本(にほん)の難民認定率(なんみんにんていりつ)は低(ひく)いと指摘(してき)されています。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: The number of refugees worldwide has reached a record high.\nB: Japan's refugee recognition rate has been pointed out as low.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"難民 uses 難 (difficult/disaster) and 民 (people). Japan has historically accepted very few 難民(なんみん) compared to other developed nations, with recognition rates often below 1%. This has drawn international criticism. The government revised the Immigration Control Act in 2023 to address some concerns, but 難民(なんみん) policy remains a contested topic in Japanese politics."},

  {type:"teach", trg:"気候変動(きこうへんどう)", src:"climate change", pos:"noun", gender:null,
   note:"Kanji: 気候変動. 地球温暖化(ちきゅうおんだんか) = global warming.\n京都議定書(きょうとぎていしょ) = Kyoto Protocol.",
   example:"A: 気候変動(きこうへんどう)は全人類(ぜんじんるい)の問題(もんだい)です。\nB: 日本(にほん)も炭素中立(たんそちゅうりつ)を目指(めざ)していますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Climate change is a problem for all of humanity.\nB: Japan is also aiming for carbon neutrality.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"気候変動 uses 気候 (climate) and 変動 (change/fluctuation). Japan hosted the landmark 京都議定書(きょうとぎていしょ) (Kyoto Protocol) in 1997, one of the first international agreements on greenhouse gas reduction. Japan pledged carbon neutrality by 2050, but balancing this with energy needs after the 2011 Fukushima disaster remains challenging."},

  {type:"mc", q:"難民(なんみん) means:", opts:["refugee","immigrant","tourist","diplomat"], ans:"refugee",
   hint:"The compound uses 'difficult/disaster' plus 'people,' describing those forced to flee their homeland."},

  {type:"teach", trg:"貿易(ぼうえき)", src:"trade / commerce (international)", pos:"noun", gender:null,
   note:"Kanji: 貿易. 貿易収支(ぼうえきしゅうし) = balance of trade.\n自由貿易(じゆうぼうえき) = free trade.",
   example:"A: 日本(にほん)は自由貿易(じゆうぼうえき)を推進(すいしん)しています。\nB: TPPやRCEPにも参加(さんか)していますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: Japan promotes free trade.\nB: They also participate in TPP and RCEP.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"貿易 uses 貿 (trade/exchange) and 易 (easy/change). Japan is one of the world's largest trading nations. The country's postwar economic miracle was built on 貿易立国(ぼうえきりっこく) (trade-nation strategy): importing raw materials, adding value through manufacturing, and exporting finished goods. Today, Japan leads multilateral trade agreements like the CPTPP."},

  {type:"teach", trg:"サミット", src:"summit (international meeting)", pos:"noun", gender:null,
   note:"Loanword from English. G7サミット = G7 Summit.\n首脳会談(しゅのうかいだん) = leaders' meeting.",
   example:"A: 来年(らいねん)のG7サミットはどこで開催(かいさい)されますか？\nB: 日本(にほん)で開催(かいさい)される予定(よてい)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: Where will next year's G7 Summit be held?\nB: It is scheduled to be held in Japan.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"サミット entered Japanese from English 'summit.' Japan has hosted multiple G7 Summits, including in Tokyo (1979, 1986, 1993), Okinawa (2000), Hokkaido (2008), Ise-Shima (2016), and Hiroshima (2023). The Hiroshima サミット was symbolically significant, with world leaders visiting the Atomic Bomb Dome and Peace Memorial Museum."},

  {type:"teach", trg:"条約(じょうやく)", src:"treaty / convention", pos:"noun", gender:null,
   note:"Kanji: 条約. 国際条約(こくさいじょうやく) = international treaty.\n条約(じょうやく)を批准(ひじゅん)する = to ratify a treaty.",
   example:"A: この条約(じょうやく)に参加(さんか)する国(くに)が増(ふ)えています。\nB: 国際的(こくさいてき)な枠組(わくぐ)みが強化(きょうか)されますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: More countries are joining this treaty.\nB: The international framework is being strengthened.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"条約 uses 条 (article/clause) and 約 (promise). Japan is party to hundreds of 国際条約(こくさいじょうやく) covering trade, environment, human rights, and security. Treaty 批准(ひじゅん) (ratification) requires Diet approval. Japan notably has not ratified the Treaty on the Prohibition of Nuclear Weapons despite its anti-nuclear stance, due to its reliance on the US nuclear umbrella."},

  {type:"fb", s:"日本(にほん)は核兵器(かくへいき){1}を訴(うった)え続(つづ)けています。\n(Japan continues to advocate for nuclear abolition.)", a:"廃絶(はいぜつ)", opts:["廃絶(はいぜつ)","開発(かいはつ)","協力(きょうりょく)","貿易(ぼうえき)"], sSrc:"Japan continues to advocate for nuclear abolition.",
   hint:"The noun meaning 'abolition' or 'elimination,' completely getting rid of something."},

  {type:"teach", trg:"大使(たいし)", src:"ambassador", pos:"noun", gender:null,
   note:"Kanji: 大使. 大使館(たいしかん) = embassy.\n日本大使(にほんたいし) = Japanese ambassador.",
   example:"A: 大使(たいし)は両国間(りょうこくかん)の架(か)け橋(はし)です。\nB: 外交関係(がいこうかんけい)において重要(じゅうよう)な役割(やくわり)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: An ambassador is a bridge between two countries.\nB: It is an important role in diplomatic relations.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"大使 uses 大 (great) and 使 (envoy/use). The 'great envoy.' Japanese 大使館(たいしかん) (embassies) worldwide serve both diplomatic and citizen assistance functions. Japan maintains embassies in over 150 countries. The 大使(たいし) appointment is one of the most prestigious positions in the 外務省(がいむしょう) (Ministry of Foreign Affairs) career track."},

  {type:"teach", trg:"交渉(こうしょう)", src:"negotiation(s)", pos:"noun", gender:null,
   note:"Kanji: 交渉. 交渉(こうしょう)する = to negotiate.\n和談交渉(わだんこうしょう) = peace negotiations.",
   example:"A: 貿易交渉(ぼうえきこうしょう)は何回(なんかい)も続(つづ)いています。\nB: 合意(ごうい)に達(たっ)するのは簡単(かんたん)ではありませんね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: Trade negotiations have continued for many rounds.\nB: Reaching an agreement is not easy.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"交渉 combines 交 (exchange/interact) and 渉 (cross/wade through). Negotiations involve 'wading through exchanges.' Japanese 交渉(こうしょう) style is known for its emphasis on consensus-building (根回(ねまわ)し, behind-the-scenes groundwork) and patience. Direct confrontation is avoided, and decisions often emerge through informal discussions before formal meetings."},

  {type:"teach", trg:"開催(かいさい)", src:"holding / hosting (an event)", pos:"noun", gender:null,
   note:"Kanji: 開催. 開催(かいさい)する = to hold / to host.\n開催地(かいさいち) = venue / host city.",
   example:"A: オリンピックを開催(かいさい)するのは大(おお)きな挑戦(ちょうせん)です。\nB: 経済効果(けいざいこうか)も期待(きたい)されますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: Hosting the Olympics is a big challenge.\nB: Economic benefits are also expected.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"開催 uses 開 (open) and 催 (sponsor/hold). Japan has hosted the Olympics three times: Tokyo 1964, Sapporo 1972 (winter), and Tokyo 2020 (held in 2021). The 1964 Olympics marked Japan's return to the international stage after WWII and showcased the 新幹線(しんかんせん) (bullet train). 開催(かいさい) of major events remains a key element of Japan's international engagement strategy."},

  {type:"mc", q:"交渉(こうしょう) means:", opts:["confrontation","negotiation","announcement","declaration"], ans:"negotiation",
   hint:"The process of discussing terms between parties to reach an agreement."},

  {type:"match", pairs:[{trg:"核兵器(かくへいき)",src:"nuclear weapons"},{trg:"難民(なんみん)",src:"refugee"},{trg:"気候変動(きこうへんどう)",src:"climate change"},{trg:"貿易(ぼうえき)",src:"trade"}]},

  {type:"fb", s:"貿易交渉(ぼうえきこうしょう)は何回(なんかい)も続(つづ)いています。\n(Trade negotiations have continued for many rounds.)", a:"交渉(こうしょう)", opts:["交渉(こうしょう)","協力(きょうりょく)","紛争(ふんそう)","援助(えんじょ)"], sSrc:"Trade negotiations have continued for many rounds.",
   hint:"The noun meaning 'negotiation,' the process of discussing and bargaining."},

  {type:"match", pairs:[{trg:"大使(たいし)",src:"ambassador"},{trg:"サミット",src:"summit"},{trg:"交渉(こうしょう)",src:"negotiation"},{trg:"開催(かいさい)",src:"hosting (event)"}]},

  {type:"mc", q:"気候変動(きこうへんどう) means:", opts:["nuclear crisis","natural disaster","climate change","economic downturn"], ans:"climate change",
   hint:"This compound uses 気候(きこう) (c...) plus the word for 'c.../fluctuation,' related to the Kyoto Protocol."},

  {type:"mc", q:"サミット refers to:", opts:["a trade agreement","a UN resolution","a diplomatic crisis","an international summit meeting"], ans:"an international summit meeting",
   hint:"A loanword from English, this event brings world leaders together, such as the G7."},

  {type:"fb", s:"この条約(じょうやく)に参加(さんか)する{1}が増(ふ)えています。\n(More countries are joining this treaty.)", a:"国(くに)", opts:["国(くに)","団体(だんたい)","会(かい)","機関(きかん)"], sSrc:"More countries are joining this treaty.",
   hint:"The common noun for a nation or country."},

  {type:"mc", q:"開催(かいさい)する means:", opts:["to hold/host an event","to attend an event","to cancel an event","to broadcast an event"], ans:"to hold/host an event",
   hint:"The verb combining 'open' and 'sponsor,' used when a city or country organizes a major international e...."},
]},

,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_34;
