// Unit 30 Batch 5 Lesson 2: 日本思想(にほんしそう) (Japanese Thought & Aesthetics)
const BATCH5_L_2 = {
  id:"jav2_u30l_b5_2", title:"日本思想(にほんしそう)", icon:"🎋", xp:15, board:true,
  steps:[
    {type:"intro", title:"日本思想(にほんしそう)",
     desc:"Japan has unique philosophical and aesthetic concepts that shape its culture. Learn わびさび (wabi-sabi), もののあわれ (pathos of things), いき (chic refinement), and ま (negative space). These concepts are untranslatable but essential for understanding Japan at a deep level.",
     goals:["Understand key Japanese aesthetic concepts","Discuss Japanese philosophy in Japanese","Recognize how aesthetics shape Japanese culture"]},

    {type:"teach", trg:"わびさび", src:"beauty in imperfection and impermanence", pos:"noun", gender:null,
     note:"わび (rustic simplicity) + さび (patina/elegant aging).\nJapan's most famous aesthetic concept. Found in tea ceremony, pottery, gardens.",
     example:"A: この茶碗(ちゃわん)にはわびさびの美(うつく)しさがあります。\nB: 完璧(かんぺき)でないからこそ美(うつく)しいのですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: This tea bowl has the beauty of wabi-sabi.\nB: It is beautiful precisely because it is imperfect.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"わびさび defies translation. わび originally meant loneliness and simplicity; さび meant 'rust' or 'aged patina.' Together they celebrate beauty found in imperfection, transience, and incompleteness. A cracked tea bowl repaired with gold (金継(きんつ)ぎ kintsugi), a moss-covered stone garden, autumn leaves about to fall: all express わびさび. It is the opposite of Western perfectionism."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / bittersweet beauty of impermanence", pos:"noun", gender:null,
     note:"もの (thing) + の + あわれ (pathos/deep emotion).\nCore aesthetic of Heian literature. Sensitivity to beauty and sadness.",
     example:"A: 桜(さくら)の花(はな)を見(み)ると、もののあわれを感(かん)じます。\nB: 美(うつく)しいものはすぐ散(ち)ってしまうからですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: When I see cherry blossoms, I feel the pathos of things.\nB: Because beautiful things fall/scatter so quickly.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"もののあわれ was articulated by Edo-era scholar Motoori Norinaga as the emotional core of Japanese literature. The Tale of Genji embodies it: beauty mixed with sadness, joy tinged with loss. Cherry blossoms (桜(さくら)) are the perfect symbol: breathtakingly beautiful AND ephemeral. Japanese aesthetic appreciation always includes awareness that beauty is fleeting."},

    {type:"teach", trg:"粋(いき)", src:"chic refinement / stylish sophistication", pos:"noun", gender:null,
     note:"Kanji: 粋(いき). 粋(いき)な人(ひと) = a stylish, refined person.\nEdo-period aesthetic of urban sophistication.",
     example:"A: あの人(ひと)のふるまいはとても粋(いき)ですね。\nB: さりげないおしゃれが素敵(すてき)です。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: That person's behavior is very refined.\nB: Their understated elegance is wonderful.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"粋(いき) is an Edo-period aesthetic ideal: sophisticated, understated, and effortlessly cool. An 粋(いき) person knows when to speak and when to be silent, wears quality without showing off, and has worldly wisdom. The opposite is 野暮(やぼ) (yabo, uncouth/tacky). 粋(いき) influenced fashion, architecture, and social behavior. Modern Japanese still use 粋(いき)だね (that is stylish/cool) as high praise."},

    {type:"teach", trg:"間(ま)", src:"negative space / pause / interval", pos:"noun", gender:null,
     note:"Kanji: 間(ま). The space between things. Applies to art, music, conversation, architecture.\n間(ま)が大事(だいじ) = the space/pause is important.",
     example:"A: 日本(にほん)の建築(けんちく)では「間(ま)」が大事(だいじ)にされています。\nB: 何(なに)もない空間(くうかん)に美(うつく)しさがあるのですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: In Japanese architecture, 'ma' (negative space) is valued.\nB: There is beauty in empty space.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"間(ま) is the profound appreciation of emptiness. In music, the silence between notes. In architecture, the empty room (和室(わしつ) washitsu). In conversation, the meaningful pause. In painting, the blank space (余白(よはく) yohaku). Western aesthetics fills space; Japanese aesthetics celebrates it. A comedian's 間(ま) (timing) is their most valued skill. 間(ま) is everywhere once you learn to see it."},

    {type:"mc", q:"わびさび celebrates:", opts:["Beauty in imperfection and transience","Perfect symmetry","Bright colors","Modern technology"], ans:"Beauty in imperfection and transience",
     hint:"This aesthetic finds b... in things that are imperfect, impermanent, and incomplete."},

    {type:"teach", trg:"無常(むじょう)", src:"impermanence / transience / mutability", pos:"noun", gender:null,
     note:"Kanji: 無常(むじょう). Buddhist concept. All things change and pass.\n諸行無常(しょぎょうむじょう) = all things are impermanent (Buddhist phrase).",
     example:"A: 仏教(ぶっきょう)では無常(むじょう)が中心的(ちゅうしんてき)な教(おし)えです。\nB: 平家物語(へいけものがたり)の「諸行無常(しょぎょうむじょう)」は有名(ゆうめい)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: In Buddhism, impermanence is a central teaching.\nB: The 'all things are impermanent' from the Tale of the Heike is famous.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"無常 uses 無 (nothing/without) and 常 (constant). The opening of the Heike Monogatari is Japan's most famous literary passage: 'The bell of the Gion temple echoes the impermanence of all things.' 無常(むじょう) is not pessimism but acceptance: understanding that change is the nature of existence. It frees you from clinging to things that cannot last. This Buddhist concept deeply shapes Japanese aesthetics."},

    {type:"teach", trg:"美意識(びいしき)", src:"aesthetic sense / sense of beauty", pos:"noun", gender:null,
     note:"Kanji: 美意識(びいしき). 美(び) (beauty) + 意識(いしき) (consciousness/awareness).\n日本人(にほんじん)の美意識(びいしき) = Japanese aesthetic sense.",
     example:"A: 日本人(にほんじん)の美意識(びいしき)は自然(しぜん)と深(ふか)く結(むす)びついています。\nB: 四季(しき)の変化(へんか)を大切(たいせつ)にする文化(ぶんか)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Japanese aesthetic sense is deeply connected to nature.\nB: It is a culture that treasures the changes of the four seasons.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"美意識 describes conscious aesthetic awareness. Japanese 美意識(びいしき) values: 簡素(かんそ) (simplicity), 調和(ちょうわ) (harmony), 自然(しぜん) (naturalness), 控(ひか)えめ (restraint). These principles manifest in food presentation (盛(も)り付(つ)け), flower arrangement (生(い)け花(はな)), garden design (庭園(ていえん)), and architecture. The concept suggests that aesthetic appreciation is not passive enjoyment but active, cultivated awareness."},

    {type:"teach", trg:"調和(ちょうわ)", src:"harmony / balance / accord", pos:"noun", gender:null,
     note:"Kanji: 調和(ちょうわ). 調和(ちょうわ)する = to harmonize.\n自然(しぜん)との調和(ちょうわ) = harmony with nature.",
     example:"A: 日本文化(にほんぶんか)では調和(ちょうわ)が重(おも)んじられています。\nB: 対立(たいりつ)よりも協調(きょうちょう)を大事(だいじ)にしますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Harmony is valued in Japanese culture.\nB: Cooperation is valued more than confrontation.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"調和 uses 調 (tune/adjust) and 和 (harmony/peace). The kanji 和 is also the character for Japan (大和(やまと) Yamato) and peace. Japanese culture's emphasis on 調和(ちょうわ) manifests in architecture (building with nature, not against it), social behavior (avoiding conflict), and aesthetics (balanced composition). Prince Shotoku's 17-Article Constitution begins: 'Harmony is to be valued.'"},

    {type:"tip", title:"Key Japanese Aesthetic Concepts",
     text:"わびさび = beauty in imperfection\nもののあわれ = pathos of impermanence\n粋(いき) = chic refinement\n間(ま) = negative space/interval\n無常(むじょう) = impermanence (Buddhist)\n調和(ちょうわ) = harmony/balance\n簡素(かんそ) = simplicity\n余白(よはく) = blank space (in art)\n\nThese concepts are:\n- Untranslatable into single English words\n- Interconnected (impermanence enables wabi-sabi)\n- Still active in modern Japan\n- Tested on JLPT N1 reading passages\n- Essential for understanding Japanese art, architecture, and behavior"},

    {type:"teach", trg:"余白(よはく)", src:"blank space / margin / negative space (in art)", pos:"noun", gender:null,
     note:"Kanji: 余白(よはく). 余(よ) (surplus/extra) + 白(はく) (white/blank).\nUsed in painting, calligraphy, and design.",
     example:"A: この水墨画(すいぼくが)の余白(よはく)が美(うつく)しいですね。\nB: 描(えが)かない部分(ぶぶん)にも意味(いみ)があるのです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The blank space in this ink painting is beautiful.\nB: The parts not painted also have meaning.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"余白 is the Japanese art of meaningful emptiness. In ink painting (水墨画(すいぼくが)), what is NOT painted is as important as what is. In calligraphy, the white space around characters shapes their beauty. In modern design, Japanese minimalism (ミニマリズム) draws directly from 余白(よはく) aesthetics. Muji (無印良品(むじるしりょうひん)) embodies this: simple design with abundant 余白(よはく)."},

    {type:"fb", s:"桜(さくら)の花(はな)を見(み)ると、{1}を感(かん)じます。\n(When I see cherry blossoms, I feel the pathos of things.)", a:"もののあわれ", opts:["もののあわれ","わびさび","いき","ま"], sSrc:"When I see cherry blossoms, I feel the pathos of things.",
     hint:"The aesthetic concept of bittersweet beauty in impermanence, associated with Heian literature."},

    {type:"mc", q:"ま in Japanese aesthetics refers to:", opts:["Meaningful negative space, silence, and intervals","Bright decoration","Complex patterns","Loud sounds"], ans:"Meaningful negative space, silence, and intervals",
     hint:"This concept values the empty s... between things as much as the things themselves."},

    {type:"match", pairs:[{trg:"わびさび",src:"beauty in imperfection"},{trg:"もののあわれ",src:"pathos of impermanence"},{trg:"粋(いき)",src:"chic refinement"},{trg:"無常(むじょう)",src:"impermanence (Buddhist)"}]},

    {type:"fb", s:"日本文化(にほんぶんか)では{1}が重(おも)んじられています。\n(Harmony is valued in Japanese culture.)", a:"調和(ちょうわ)", opts:["調和(ちょうわ)","対立(たいりつ)","競争(きょうそう)","分離(ぶんり)"], sSrc:"Harmony is valued in Japanese culture.",
     hint:"The concept of balance and accord, using kanji for 'tune' and 'peace/Japan.'"},

    {type:"mc", q:"Prince Shotoku's constitution begins with:", opts:["Harmony is to be valued","Justice is supreme","The emperor is god","War is inevitable"], ans:"Harmony is to be valued",
     hint:"The first article emphasizes the core Japanese value of わ (h.../peace)."}
  ,{type:"match",pairs:[{trg:"間(ま)",src:"negative space / pause / interval"},{trg:"美意識(びいしき)",src:"aesthetic sense / sense of beauty"},{trg:"余白(よはく)",src:"blank space / margin / negative space (in art)"}]}]
};
export default BATCH5_L_2;
