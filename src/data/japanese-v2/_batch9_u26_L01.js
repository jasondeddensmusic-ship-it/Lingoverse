// Batch 9 – Unit 26 (B2): 報道用語(ほうどうようご)
const BATCH9_L1 = {
  id:"jav2_u26l_b9_1", title:"報道用語(ほうどうようご)", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"報道用語(ほうどうようご)",
     desc:"News and media reporting vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"特派(とくは)", src:"scoop", pos:"noun", gender:null,
     note:"特(とく) special + 派(は) dispatch.\n特派員 = special correspondent.",
     example:"A: 特派(とくは)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about scoop.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Strictly 特派(とくは) means 'specially dispatched.' 特派員(とくはいん) (special correspondent) is the prestige role for Japanese journalists, often stationed in foreign capitals for 3-5 year postings."},

    {type:"teach", trg:"社説(しゃせつ)", src:"editorial", pos:"noun", gender:null,
     note:"社(しゃ) company + 説(せつ) theory.\nThe newspaper's official collective voice.",
     example:"A: 社説(しゃせつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about editorial.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"社(しゃ) (company) + 説(せつ) (theory). The 社説(しゃせつ) is the newspaper's official voice, written collectively by the editorial board. Major Japanese dailies like 朝日新聞(あさひしんぶん) and 読売新聞(よみうりしんぶん) have recognizably different 社説(しゃせつ) styles."},

    {type:"teach", trg:"コメンテーター", src:"commentator", pos:"noun", gender:null,
     note:"English loanword.\nUbiquitous on Japanese TV news panels.",
     example:"A: コメンテーターについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about commentator.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Imported English loanword. Japanese TV relies heavily on rotating panels of コメンテーター (politicians, academics, ex-sports players) to react to the day's news. Their presence softens pure information delivery into conversational analysis."},

    {type:"teach", trg:"世論(せろん)", src:"public opinion", pos:"noun", gender:null,
     note:"世(せ) world + 論(ろん) argument.\nAlso read よろん.",
     example:"A: 世論(せろん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about public opinion.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Also read よろん. 世論調査(せろんちょうさ) (public opinion poll) is conducted weekly by major newspapers. Cabinet approval ratings often drive political decisions: a drop below 30% is the danger zone that historically precedes prime ministerial resignations."},

    {type:"teach", trg:"アンケート", src:"survey", pos:"noun", gender:null,
     note:"From French 'enquête'.\nUbiquitous in Japanese companies and schools.",
     example:"A: アンケートについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about survey.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"From French 'enquête.' Japan is a survey-loving culture: companies, schools, and government bodies routinely use アンケート for feedback. Receiving one in the mail with a pre-paid return envelope is a standard part of daily life."},

    {type:"teach", trg:"電波(でんぱ)", src:"broadcast", pos:"noun", gender:null,
     note:"電(でん) electric + 波(なみ) wave.\nLiterally 'electric wave'; also slang for 'vibes'.",
     example:"A: 電波(でんぱ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about broadcast.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"電(でん) (electric) + 波(なみ) (wave): literally 'electric wave.' Also slang for 'vibes' (電波(でんぱ)が合(あ)う = 'we are on the same wavelength'). NHK famously blankets all of Japan with reliable 電波(でんぱ), funded by mandatory license fees."},

    {type:"teach", trg:"特集(とくしゅう)", src:"special feature", pos:"noun", gender:null,
     note:"特(とく) special + 集(しゅう) to gather.\nIn-depth news or magazine feature.",
     example:"A: 特集(とくしゅう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about special feature.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"特(とく) (special) + 集(しゅう) (to gather). Japanese news magazines and TV news shows air 特集(とくしゅう) segments on a single issue across 10-30 minutes, offering depth rarely found in daily reporting. The 特集(とくしゅう) format is a trusted civic-journalism format."},

    {type:"teach", trg:"見出(みだ)し", src:"headline", pos:"noun", gender:null,
     note:"見(み) to see + 出(だ)し to put out.\nNewspaper headline, often very compressed.",
     example:"A: 見出(みだ)しについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about headline.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"見(み)る (to see) + 出(だ)し (to put out). Japanese newspaper 見出(みだ)し use an efficient compressed style: dropped particles, minimal verbs. Reading fluency drastically improves once you recognize 見出(みだ)し shorthand like 首相(しゅしょう)辞任(じにん) (PM resigns)."},

    {type:"mc", q:"What does 特派(とくは) mean?", opts:["scoop","editorial","commentator","public opinion"], ans:"scoop",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(survey is important.)", a:"アンケート", opts:["アンケート","電波(でんぱ)","特集(とくしゅう)","特派(とくは)"], sSrc:"survey is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"特派(とくは)",src:"scoop"},{trg:"社説(しゃせつ)",src:"editorial"},{trg:"コメンテーター",src:"commentator"},{trg:"世論(せろん)",src:"public opinion"},{trg:"特集(とくしゅう)",src:"special feature"}]},

    {type:"mc", q:"Which word means headline?", opts:["電波(でんぱ)","見出(みだ)し","アンケート","社説(しゃせつ)"], ans:"見出(みだ)し",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
