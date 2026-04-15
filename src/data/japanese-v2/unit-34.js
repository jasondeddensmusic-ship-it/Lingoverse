// Japanese V2 Unit 34 — こくさいかんけい (International Relations)
// Level: B2.4 — JLPT N2/N1 aligned.
// がいこう, こくれん, じょうやく, ふんそう, きょうりょく, えんじょ, あんぜんほしょう.

const UNIT_34 = {
  n:34, lang:"ja", srcLang:"en", track:"v2",
  title:"こくさいかんけい", sub:"International Relations",
  icon:"🌐", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Diplomacy & Global Politics ═══
{id:"jav2_u34l1", title:"Diplomacy & Politics", icon:"🤝", xp:15, board:true, steps:[
  {type:"intro", title:"Diplomacy & Global Politics",
   desc:"International relations vocabulary is essential for understanding Japanese news, political discussions, and JLPT N1 reading passages. Japan plays a significant role in global diplomacy as the world's third-largest economy and a key ally in the Pacific. Words like がいこう (diplomacy), こくれん (United Nations), and あんぜんほしょう (security) appear daily in Japanese media.",
   goals:["Use diplomatic and political vocabulary","Discuss international organizations and treaties","Understand Japan's role in global affairs"]},

  {type:"teach", trg:"こくさいかんけい", src:"international relations", pos:"noun", gender:null,
   note:"Kanji: 国際関係. こくさいかんけいがく = international relations (as an academic field).",
   example:"A: こくさいかんけいはますますふくざつになっています。\nB: たこくかんのきょうりょくがじゅうようですね。",
   exampleSrc:"A: International relations are becoming increasingly complex.\nB: Multilateral cooperation is important.",
   funFact:"国際関係 is a four-kanji compound: 国 (country), 際 (occasion/between), 関 (relate), 係 (connection). Japan's postwar こくさいかんけい has been defined by the alliance with the United States, economic diplomacy, and the peace constitution. The concept of 'international contribution' (こくさいこうけん) became a major policy theme from the 1990s onward."},

  {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
   note:"Kanji: 外交. がいこうかん = diplomat.\nがいこうせいさく = foreign policy.",
   example:"A: にほんのがいこうせいさくはへいわしゅぎにもとづいています。\nB: けいざいてきながいこうもじゅうようなやくわりをはたしていますね。",
   exampleSrc:"A: Japan's foreign policy is based on pacifism.\nB: Economic diplomacy also plays an important role.",
   funFact:"外交 combines 外 (outside) and 交 (exchange/interact). Japan's がいこう has evolved from isolation (さこく, during the Edo period) to active international engagement. The がいむしょう (Ministry of Foreign Affairs) manages Japan's diplomatic relations. Japan's unique position as the only country to have experienced nuclear attacks shapes its がいこう approach to disarmament."},

  {type:"teach", trg:"こくれん", src:"United Nations (UN)", pos:"noun", gender:null,
   note:"Kanji: 国連 (short for 国際連合). こくれんそうかい = UN General Assembly.\nこくれんあんぽり = UN Security Council.",
   example:"A: にほんはこくれんあんぽりのじょうにんりじこくになることをめざしています。\nB: それはながねんのがいこうもくひょうですね。",
   exampleSrc:"A: Japan aims to become a permanent member of the UN Security Council.\nB: That has been a long-standing diplomatic goal.",
   funFact:"国連 abbreviates 国際連合 (こくさいれんごう). Japan joined the UN in 1956 and is one of the largest financial contributors. The quest for a じょうにんりじこく (permanent Security Council seat) has been a central がいこう goal for decades. Japan also hosts UN agencies including the UN University in Tokyo."},

  {type:"mc", q:"がいこうかん means:", opts:["diplomat","foreign student","interpreter","ambassador"], ans:"diplomat",
   hint:"The compound adds かん (official/person) to the word for diplomacy/foreign affairs."},

  {type:"teach", trg:"しゅけん", src:"sovereignty", pos:"noun", gender:null,
   note:"Kanji: 主権. こくみんしゅけん = popular sovereignty.\nしゅけんこっか = sovereign state.",
   example:"A: こくみんしゅけんはにほんこくけんぽうのきほんげんそくです。\nB: へいわしゅぎとじんけんそんちょうもですね。",
   exampleSrc:"A: Popular sovereignty is a basic principle of Japan's Constitution.\nB: So are pacifism and respect for human rights.",
   funFact:"主権 uses 主 (master/main) and 権 (authority/right). Japan's Constitution establishes three principles: こくみんしゅけん (popular sovereignty), きほんてきじんけんのそんちょう (respect for fundamental human rights), and へいわしゅぎ (pacifism). The concept of しゅけん also applies to territorial disputes, a sensitive topic in Japan's relations with neighboring countries."},

  {type:"teach", trg:"ふんそう", src:"conflict / dispute", pos:"noun", gender:null,
   note:"Kanji: 紛争. ぶりょくふんそう = armed conflict.\nりょうどふんそう = territorial dispute.",
   example:"A: せかいかくちでふんそうがつづいています。\nB: へいわてきかいけつにむけたどりょくがひつようです。",
   exampleSrc:"A: Conflicts continue in various parts of the world.\nB: Efforts toward peaceful resolution are needed.",
   funFact:"紛争 uses 紛 (confused/tangled) and 争 (fight/compete). Japan's postwar identity has been defined by avoiding ぶりょくふんそう (armed conflict), though the country maintains the じえいたい (Self-Defense Forces). Japan's approach to ふんそうかいけつ (conflict resolution) emphasizes dialogue and economic cooperation over military intervention."},

  {type:"teach", trg:"きょうりょく", src:"cooperation / collaboration", pos:"noun", gender:null,
   note:"Kanji: 協力. きょうりょくする = to cooperate.\nこくさいきょうりょく = international cooperation.",
   example:"A: かんきょうもんだいのかいけつにはこくさいてきなきょうりょくがふかけつです。\nB: さんせいです。いっこくだけではかいけつできません。",
   exampleSrc:"A: International cooperation is indispensable for solving environmental problems.\nB: I agree. One country alone cannot solve it.",
   funFact:"協力 combines 協 (together/cooperate) and 力 (power/strength). Japan's こくさいきょうりょく is primarily channeled through ODA (政府開発援助, せいふかいはつえんじょ, Official Development Assistance). Japan was the world's largest ODA donor for many years and remains among the top contributors, focusing on infrastructure, education, and disaster preparedness in developing nations."},

  {type:"fb", s:"せかいかくちで{1}がつづいています。\n(Conflicts continue in various parts of the world.)", a:"ふんそう", opts:["ふんそう","きょうりょく","がいこう","しゅけん"], sSrc:"Conflicts continue in various parts of the world.",
   hint:"The noun meaning 'conflict' or 'dispute,' situations where opposing sides clash."},

  {type:"teach", trg:"えんじょ", src:"aid / assistance / support", pos:"noun", gender:null,
   note:"Kanji: 援助. えんじょする = to aid / to assist.\nじんどうてきえんじょ = humanitarian aid.",
   example:"A: ひさいちにじんどうてきえんじょがおくられました。\nB: いちにちもはやくふっこうしてほしいですね。",
   exampleSrc:"A: Humanitarian aid was sent to the disaster area.\nB: I hope they recover as soon as possible.",
   funFact:"援助 uses 援 (help/support) and 助 (assist). Japan is a major provider of disaster えんじょ globally, drawing on its own extensive experience with earthquakes, typhoons, and tsunamis. The Japan International Cooperation Agency (JICA, ジャイカ) coordinates much of Japan's overseas えんじょ, deploying experts and volunteers to over 150 countries."},

  {type:"teach", trg:"あんぜんほしょう", src:"security (national/collective)", pos:"noun", gender:null,
   note:"Kanji: 安全保障. あんぽ = abbreviation.\nにちべいあんぽじょうやく = US-Japan Security Treaty.",
   example:"A: あんぜんほしょうかんきょうがへんかしています。\nB: にほんのぼうえいせいさくもみなおしがひつようです。",
   exampleSrc:"A: The security environment is changing.\nB: Japan's defense policy also needs to be reviewed.",
   funFact:"安全保障 is a four-kanji compound: 安 (safe), 全 (complete), 保 (protect), 障 (barrier). Japan's あんぜんほしょう has been anchored by the にちべいあんぽじょうやく (US-Japan Security Treaty) since 1960. Recent debates about しゅうだんてきじえいけん (collective self-defense) and increased defense spending reflect Japan's evolving security posture in the Indo-Pacific region."},

  {type:"mc", q:"えんじょ means:", opts:["invasion","aid/assistance","embargo","negotiation"], ans:"aid/assistance",
   hint:"The word combining 'help' and 'assist' that describes giving support to those in need."},

  {type:"match", pairs:[{trg:"がいこう",src:"diplomacy"},{trg:"こくれん",src:"United Nations"},{trg:"ふんそう",src:"conflict"},{trg:"えんじょ",src:"aid"}]},

  {type:"fb", s:"かんきょうもんだいのかいけつにはこくさいてきな{1}がふかけつです。\n(International cooperation is indispensable for solving environmental problems.)", a:"きょうりょく", opts:["きょうりょく","がいこう","えんじょ","ふんそう"], sSrc:"International cooperation is indispensable for solving environmental problems.",
   hint:"The noun meaning 'cooperation,' working together with others toward a shared goal."},

  {type:"match", pairs:[{trg:"しゅけん",src:"sovereignty"},{trg:"あんぜんほしょう",src:"security"},{trg:"こくさいかんけい",src:"international relations"},{trg:"きょうりょく",src:"cooperation"}]},
]},

// ═══ L2: Global Challenges & Japan's Role ═══
{id:"jav2_u34l2", title:"Global Challenges", icon:"🌍", xp:15, board:true, steps:[
  {type:"intro", title:"Global Challenges & Japan's Role",
   desc:"Modern international relations involves addressing global challenges like climate change, nuclear proliferation, and refugee crises. This lesson covers vocabulary for these issues and Japan's specific role in addressing them, from ODA contributions to environmental leadership. These terms appear frequently in JLPT N1 reading passages and editorials.",
   goals:["Discuss global challenges in Japanese","Understand Japan's international contributions","Use vocabulary for environmental and humanitarian issues"]},

  {type:"teach", trg:"かくへいき", src:"nuclear weapons", pos:"noun", gender:null,
   note:"Kanji: 核兵器. かくへいきはいぜつ = nuclear abolition.\nかくぐんしゅく = nuclear disarmament.",
   example:"A: にほんはかくへいきはいぜつをうったえつづけています。\nB: ひろしまとながさきのけいけんがそのげんどうりょくです。",
   exampleSrc:"A: Japan continues to advocate for nuclear abolition.\nB: The experience of Hiroshima and Nagasaki is the driving force.",
   funFact:"核兵器 uses 核 (nucleus/core) and 兵器 (weapon). As the only country to have suffered nuclear attacks, Japan has a unique moral authority in かくぐんしゅく (nuclear disarmament) advocacy. Every year, the mayors of Hiroshima and Nagasaki deliver peace declarations at memorial ceremonies, calling for a world without かくへいき."},

  {type:"teach", trg:"なんみん", src:"refugee(s)", pos:"noun", gender:null,
   note:"Kanji: 難民. なんみんもんだい = refugee crisis.\nなんみんにんてい = refugee recognition/status.",
   example:"A: せかいのなんみんすうはかこさいこうにたっしています。\nB: にほんのなんみんにんていりつはひくいとしてきされています。",
   exampleSrc:"A: The number of refugees worldwide has reached a record high.\nB: Japan's refugee recognition rate has been pointed out as low.",
   funFact:"難民 uses 難 (difficult/disaster) and 民 (people). Japan has historically accepted very few なんみん compared to other developed nations, with recognition rates often below 1%. This has drawn international criticism. The government revised the Immigration Control Act in 2023 to address some concerns, but なんみん policy remains a contested topic in Japanese politics."},

  {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
   note:"Kanji: 気候変動. ちきゅうおんだんか = global warming.\nきょうとぎていしょ = Kyoto Protocol.",
   example:"A: きこうへんどうはぜんじんるいのもんだいです。\nB: にほんもたんそちゅうりつをめざしていますね。",
   exampleSrc:"A: Climate change is a problem for all of humanity.\nB: Japan is also aiming for carbon neutrality.",
   funFact:"気候変動 uses 気候 (climate) and 変動 (change/fluctuation). Japan hosted the landmark きょうとぎていしょ (Kyoto Protocol) in 1997, one of the first international agreements on greenhouse gas reduction. Japan pledged carbon neutrality by 2050, but balancing this with energy needs after the 2011 Fukushima disaster remains challenging."},

  {type:"mc", q:"なんみん means:", opts:["refugee","immigrant","tourist","diplomat"], ans:"refugee",
   hint:"The compound uses 'difficult/disaster' plus 'people,' describing those forced to flee their homeland."},

  {type:"teach", trg:"ぼうえき", src:"trade / commerce (international)", pos:"noun", gender:null,
   note:"Kanji: 貿易. ぼうえきしゅうし = balance of trade.\nじゆうぼうえき = free trade.",
   example:"A: にほんはじゆうぼうえきをすいしんしています。\nB: TPPやRCEPにもさんかしていますね。",
   exampleSrc:"A: Japan promotes free trade.\nB: They also participate in TPP and RCEP.",
   funFact:"貿易 uses 貿 (trade/exchange) and 易 (easy/change). Japan is one of the world's largest trading nations. The country's postwar economic miracle was built on ぼうえきりっこく (trade-nation strategy): importing raw materials, adding value through manufacturing, and exporting finished goods. Today, Japan leads multilateral trade agreements like the CPTPP."},

  {type:"teach", trg:"さみっと", src:"summit (international meeting)", pos:"noun", gender:null,
   note:"Loanword from English. G7さみっと = G7 Summit.\nしゅのうかいだん = leaders' meeting.",
   example:"A: らいねんのG7さみっとはどこでかいさいされますか？\nB: にほんでかいさいされるよていです。",
   exampleSrc:"A: Where will next year's G7 Summit be held?\nB: It is scheduled to be held in Japan.",
   funFact:"サミット entered Japanese from English 'summit.' Japan has hosted multiple G7 Summits, including in Tokyo (1979, 1986, 1993), Okinawa (2000), Hokkaido (2008), Ise-Shima (2016), and Hiroshima (2023). The Hiroshima さみっと was symbolically significant, with world leaders visiting the Atomic Bomb Dome and Peace Memorial Museum."},

  {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
   note:"Kanji: 条約. こくさいじょうやく = international treaty.\nじょうやくをひじゅんする = to ratify a treaty.",
   example:"A: このじょうやくにさんかするくにがふえています。\nB: こくさいてきなわくぐみがきょうかされますね。",
   exampleSrc:"A: More countries are joining this treaty.\nB: The international framework is being strengthened.",
   funFact:"条約 uses 条 (article/clause) and 約 (promise). Japan is party to hundreds of こくさいじょうやく covering trade, environment, human rights, and security. Treaty ひじゅん (ratification) requires Diet approval. Japan notably has not ratified the Treaty on the Prohibition of Nuclear Weapons despite its anti-nuclear stance, due to its reliance on the US nuclear umbrella."},

  {type:"fb", s:"にほんはかくへいき{1}をうったえつづけています。\n(Japan continues to advocate for nuclear abolition.)", a:"はいぜつ", opts:["はいぜつ","かいはつ","きょうりょく","ぼうえき"], sSrc:"Japan continues to advocate for nuclear abolition.",
   hint:"The noun meaning 'abolition' or 'elimination,' completely getting rid of something."},

  {type:"teach", trg:"たいし", src:"ambassador", pos:"noun", gender:null,
   note:"Kanji: 大使. たいしかん = embassy.\nにほんたいし = Japanese ambassador.",
   example:"A: たいしはりょうこくかんのかきょうやくです。\nB: がいこうかんけいにおいてじゅうようなやくわりですね。",
   exampleSrc:"A: An ambassador is a bridge between two countries.\nB: It is an important role in diplomatic relations.",
   funFact:"大使 uses 大 (great) and 使 (envoy/use). The 'great envoy.' Japanese たいしかん (embassies) worldwide serve both diplomatic and citizen assistance functions. Japan maintains embassies in over 150 countries. The たいし appointment is one of the most prestigious positions in the がいむしょう (Ministry of Foreign Affairs) career track."},

  {type:"teach", trg:"こうしょう", src:"negotiation(s)", pos:"noun", gender:null,
   note:"Kanji: 交渉. こうしょうする = to negotiate.\nわだんこうしょう = peace negotiations.",
   example:"A: ぼうえきこうしょうはなんかいもつづいています。\nB: ごういにたっするのはかんたんではありませんね。",
   exampleSrc:"A: Trade negotiations have continued for many rounds.\nB: Reaching an agreement is not easy.",
   funFact:"交渉 combines 交 (exchange/interact) and 渉 (cross/wade through). Negotiations involve 'wading through exchanges.' Japanese こうしょう style is known for its emphasis on consensus-building (ねまわし, behind-the-scenes groundwork) and patience. Direct confrontation is avoided, and decisions often emerge through informal discussions before formal meetings."},

  {type:"teach", trg:"かいさい", src:"holding / hosting (an event)", pos:"noun", gender:null,
   note:"Kanji: 開催. かいさいする = to hold / to host.\nかいさいち = venue / host city.",
   example:"A: オリンピックをかいさいするのはおおきなちょうせんです。\nB: けいざいこうかもきたいされますね。",
   exampleSrc:"A: Hosting the Olympics is a big challenge.\nB: Economic benefits are also expected.",
   funFact:"開催 uses 開 (open) and 催 (sponsor/hold). Japan has hosted the Olympics three times: Tokyo 1964, Sapporo 1972 (winter), and Tokyo 2020 (held in 2021). The 1964 Olympics marked Japan's return to the international stage after WWII and showcased the しんかんせん (bullet train). かいさい of major events remains a key element of Japan's international engagement strategy."},

  {type:"mc", q:"こうしょう means:", opts:["confrontation","negotiation","announcement","declaration"], ans:"negotiation",
   hint:"The process of discussing terms between parties to reach an agreement."},

  {type:"match", pairs:[{trg:"かくへいき",src:"nuclear weapons"},{trg:"なんみん",src:"refugee"},{trg:"きこうへんどう",src:"climate change"},{trg:"ぼうえき",src:"trade"}]},

  {type:"fb", s:"ぼうえき{1}はなんかいもつづいています。\n(Trade negotiations have continued for many rounds.)", a:"こうしょう", opts:["こうしょう","きょうりょく","ふんそう","えんじょ"], sSrc:"Trade negotiations have continued for many rounds.",
   hint:"The noun meaning 'negotiation,' the process of discussing and bargaining."},

  {type:"match", pairs:[{trg:"たいし",src:"ambassador"},{trg:"さみっと",src:"summit"},{trg:"こうしょう",src:"negotiation"},{trg:"かいさい",src:"hosting (event)"}]},
]},

]};
export default UNIT_34;
