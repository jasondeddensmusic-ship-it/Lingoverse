// Batch 10 – Unit 33 (B2): 芸術(げいじゅつ)
const BATCH10_L1 = {
  id:"jav2_u33l_b10_1", title:"芸術(げいじゅつ)", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"芸術(げいじゅつ)",
     desc:"Fine arts and performing arts vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"歌舞伎(かぶき)", src:"kabuki theater", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 歌舞伎(かぶき)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about kabuki theater.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"歌(か) (song) + 舞(ぶ) (dance) + 伎(き) (skill). Originally a 1600s street performance banned for lewdness, now UNESCO Intangible Cultural Heritage. Tokyo's 歌舞伎座(かぶきざ) hosts daily performances; English audio guides are available."},

    {type:"teach", trg:"能(のう)", src:"noh theater", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 能(のう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about noh theater.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"From 能(のう)力(りょく) (ability). 能(のう) dates to the 14th century, codified by Zeami. Performances are slow, masked, and highly stylized. Five classical schools still pass down 能(のう) techniques via hereditary families."},

    {type:"teach", trg:"落語(らくご)", src:"comic storytelling", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 落語(らくご)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about comic storytelling.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"落(らく) (to fall) + 語(ご) (tale). A single 落語家(らくごか) (comic storyteller) sits on a cushion and performs comic monologues. The punchline is called the 落(お)ち (fall). Dates to Edo period (1603-1868)."},

    {type:"teach", trg:"書道(しょどう)", src:"calligraphy", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 書道(しょどう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about calligraphy.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"書(しょ) (writing) + 道(どう) (way). Far more than handwriting: a 書道(しょどう) master trains for decades. Japanese elementary schools include 書道(しょどう) in the curriculum. New Year 書(か)き初(ぞ)め is a common household ritual."},

    {type:"teach", trg:"生(い)け花(ばな)", src:"flower arrangement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 生(い)け花(ばな)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about flower arrangement.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"生(い)ける (to arrange) + 花(はな) (flowers). Japanese flower arrangement with philosophical depth. 池坊(いけのぼう) school traces back 550 years. Unlike Western bouquets, 生(い)け花(ばな) celebrates empty space (間, ma) and asymmetry."},

    {type:"teach", trg:"茶道(さどう)", src:"tea ceremony", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 茶道(さどう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about tea ceremony.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"茶(さ) (tea) + 道(どう) (way). Also read ちゃどう. The 16th-century tea master Sen no Rikyu defined 茶道(さどう) aesthetics: 和敬清寂(わけいせいじゃく) (harmony, respect, purity, tranquility). A full ceremony takes 4 hours."},

    {type:"teach", trg:"浮世絵(うきよえ)", src:"ukiyo-e prints", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 浮世絵(うきよえ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about ukiyo-e prints.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"浮世(うきよ) (floating world) + 絵(え) (picture). Edo-period woodblock prints. Hokusai's 富嶽三十六景(ふがくさんじゅうろっけい) (Thirty-six Views of Mount Fuji, 1830s) inspired Van Gogh, Monet, and Debussy."},

    {type:"teach", trg:"人間国宝(にんげんこくほう)", src:"living national treasure", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 人間国宝(にんげんこくほう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about living national treasure.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"人間(にんげん) (human) + 国宝(こくほう) (national treasure). Official title for masters of traditional arts and crafts, designated by the Ministry of Culture. Each 人間国宝(にんげんこくほう) receives a 2 million yen annual stipend for training successors."},

    {type:"mc", q:"What does 歌舞伎(かぶき) mean?", opts:["kabuki theater","noh theater","comic storytelling","calligraphy"], ans:"kabuki theater",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(flower arrangement is important.)", a:"生(い)け花(ばな)", opts:["生(い)け花(ばな)","茶道(さどう)","浮世絵(うきよえ)","歌舞伎(かぶき)"], sSrc:"flower arrangement is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"歌舞伎(かぶき)",src:"kabuki theater"},{trg:"能(のう)",src:"noh theater"},{trg:"落語(らくご)",src:"comic storytelling"},{trg:"書道(しょどう)",src:"calligraphy"},{trg:"浮世絵(うきよえ)",src:"ukiyo-e prints"}]},

    {type:"mc", q:"Which word means living national treasure?", opts:["茶道(さどう)","人間国宝(にんげんこくほう)","生(い)け花(ばな)","能(のう)"], ans:"人間国宝(にんげんこくほう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
