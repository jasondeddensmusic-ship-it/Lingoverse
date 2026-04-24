// Batch 9 – Unit 33 (B2): 古典文学(こてんぶんがく)
const BATCH9_L1 = {
  id:"jav2_u33l_b9_1", title:"古典文学(こてんぶんがく)", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"古典文学(こてんぶんがく)",
     desc:"Classical literature and poetry vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"俳句(はいく)", src:"haiku", pos:"noun", gender:null,
     note:"俳(はい) verse + 句(く) phrase.\n17 syllables in 5-7-5; requires 季語 seasonal word.",
     example:"A: 俳句(はいく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about haiku.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"俳(はい) (verse) + 句(く) (phrase). Japan's most internationally famous literary form, 17 syllables in 5-7-5. Matsuo Basho (1644-1694) elevated 俳句(はいく) from entertainment to serious art. Each requires a 季語(きご) (seasonal word)."},

    {type:"teach", trg:"短歌(たんか)", src:"tanka", pos:"noun", gender:null,
     note:"短(たん) short + 歌(うた) song.\n31-syllable 5-7-5-7-7 form, older than haiku.",
     example:"A: 短歌(たんか)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about tanka.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"短(たん) (short) + 歌(うた) (song). 31-syllable 5-7-5-7-7 form, older than 俳句(はいく). The 万葉集(まんようしゅう) (8th century) contains over 4,500 短歌(たんか). The Emperor still composes 短歌(たんか) at New Year."},

    {type:"teach", trg:"物語(ものがたり)", src:"tale or story", pos:"noun", gender:null,
     note:"物(もの) thing + 語り(がたり) telling.\nTale of Genji (源氏物語) = world's first novel.",
     example:"A: 物語(ものがたり)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about tale or story.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Literally 'thing-telling.' The 源氏(げんじ)物語(ものがたり) (Tale of Genji, c. 1008) by Murasaki Shikibu is considered the world's first novel. Japanese students still read excerpts in 古文(こぶん) (classical Japanese) class."},

    {type:"teach", trg:"作家(さっか)", src:"author", pos:"noun", gender:null,
     note:"作(さく) to make + 家(か) specialist.\nProfessional writer or creator.",
     example:"A: 作家(さっか)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about author.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"作(さく) (to make) + 家(か) (specialist). Modern literary 作家(さっか) emerged in the Meiji era as a profession. Haruki Murakami is the most internationally known contemporary Japanese 作家(さっか), translated into over 50 languages."},

    {type:"teach", trg:"批評(ひひょう)", src:"criticism", pos:"noun", gender:null,
     note:"批(ひ) to criticize + 評(ひょう) evaluation.\nLiterary analysis and review.",
     example:"A: 批評(ひひょう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about criticism.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"批(ひ) (to criticize) + 評(ひょう) (evaluation). Japanese 文芸批評(ぶんげいひひょう) (literary criticism) has its own celebrities. Kobayashi Hideo (1902-1983) is regarded as the father of modern Japanese literary criticism."},

    {type:"teach", trg:"比喩(ひゆ)", src:"metaphor", pos:"noun", gender:null,
     note:"比(ひ) to compare + 喩(ゆ) to illustrate.\nCovers metaphor, simile, analogy.",
     example:"A: 比喩(ひゆ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about metaphor.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"比(ひ) (to compare) + 喩(ゆ) (to illustrate). Umbrella term for metaphor, simile, analogy. Japanese literary analysis distinguishes 直喩(ちょくゆ) (direct/simile), 隠喩(いんゆ) (hidden/metaphor), and 擬人法(ぎじんほう) (personification)."},

    {type:"teach", trg:"著作権(ちょさくけん)", src:"copyright", pos:"noun", gender:null,
     note:"著作(ちょさく) authorship + 権(けん) right.\nJapan joined Berne Convention in 1899.",
     example:"A: 著作権(ちょさくけん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about copyright.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"著作(ちょさく) (authorship) + 権(けん) (right). Japan joined the Berne Convention in 1899. Copyright lasts 70 years after the author's death (extended from 50 in 2018, aligning with TPP partners)."},

    {type:"teach", trg:"文体(ぶんたい)", src:"literary style", pos:"noun", gender:null,
     note:"文(ぶん) text + 体(たい) body.\n文語体 (literary) vs 口語体 (colloquial).",
     example:"A: 文体(ぶんたい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about literary style.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"文(ぶん) (text) + 体(たい) (body/style). Classical Japanese distinguishes 文語体(ぶんごたい) (literary style) from 口語体(こうごたい) (colloquial style). The Meiji 言文一致(げんぶんいっち) movement unified speech and writing."},

    {type:"mc", q:"What does 俳句(はいく) mean?", opts:["haiku","tanka","tale or story","author"], ans:"haiku",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(criticism is important.)", a:"批評(ひひょう)", opts:["批評(ひひょう)","比喩(ひゆ)","著作権(ちょさくけん)","俳句(はいく)"], sSrc:"criticism is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"俳句(はいく)",src:"haiku"},{trg:"短歌(たんか)",src:"tanka"},{trg:"物語(ものがたり)",src:"tale or story"},{trg:"作家(さっか)",src:"author"},{trg:"著作権(ちょさくけん)",src:"copyright"}]},

    {type:"mc", q:"Which word means literary style?", opts:["比喩(ひゆ)","文体(ぶんたい)","批評(ひひょう)","短歌(たんか)"], ans:"文体(ぶんたい)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
