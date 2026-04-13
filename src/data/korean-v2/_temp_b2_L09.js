// B2 Lesson 09: Performance & Arts
// Words: 공연되다, 공연장, 공연하다, 관람, 관람객, 관광객, 관광버스, 극, 극작가, 가요,
//        곡, 공개, 공개하다, 구경하다, 고전, 공포, 교환, 교환하다, 공연히, 감독

const LESSON_9 = {
  id:"kov2_b2_l9", title:"공연과 예술", icon:"\uD83C\uDFAD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Performance & Arts",
     desc:"Learn vocabulary for performances, tourism, and artistic expression. These words are common in TOPIK II reading passages about culture, entertainment, and public events.",
     goals:["Learn 20 performance and arts vocabulary words","Understand entertainment industry Sino-Korean compounds","Discuss cultural events in formal Korean"]},

    {type:"teach", trg:"\uACF5\uC5F0\uB418\uB2E4", src:"to be performed (passive)", pos:"verb", gender:null,
     note:"Sino-Korean: public (公) + performance (演) + become (되다).\nPassive: a show takes place.",
     example:"A: \uC624\uB298 \uBC24 \uCF58\uC11C\uD2B8\uAC00 \uACF5\uC5F0\uB3FC\uC694.\nB: \uC5B4\uB514\uC5D0\uC11C \uACF5\uC5F0\uB3FC\uC694?\nA: \uC608\uC220\uC758\uC804\uB2F9\uC5D0\uC11C \uACF5\uC5F0\uB3FC\uC694.\nB: \uD2F0\uCF13\uC774 \uC544\uC9C1 \uC788\uC744\uAE4C\uC694?",
     exampleSrc:"A: A concert is being performed tonight.\nB: Where is it being performed?\nA: It is being performed at the arts center.\nB: Are there still tickets available?",
     funFact:"Korean performing arts have boomed globally. K-pop concerts are 공연 events, but the word covers all performing arts: theater, dance, music."},

    {type:"teach", trg:"\uACF5\uC5F0\uC7A5", src:"performance venue; theater", pos:"noun", gender:null,
     note:"Sino-Korean: performance (公演) + place (場).",
     example:"A: \uC0C8 \uACF5\uC5F0\uC7A5\uC774 \uAC1C\uAD00\uD588\uC5B4\uC694.\nB: \uC88C\uC11D\uC774 \uBA87 \uAC1C\uC608\uC694?\nA: 2000\uC11D \uADDC\uBAA8\uC608\uC694.\nB: \uB300\uD615 \uACF5\uC5F0\uC7A5\uC774\uB124\uC694.",
     exampleSrc:"A: A new performance venue has opened.\nB: How many seats does it have?\nA: It is a 2000-seat venue.\nB: That is a large theater.",
     funFact:"Seoul's major 공연장 include the Sejong Center (세종문화회관) and the National Theater (국립극장). Daehangno is Korea's theater district."},

    {type:"teach", trg:"\uACF5\uC5F0\uD558\uB2E4", src:"to perform; to put on a show", pos:"verb", gender:null,
     note:"Active form. Artists actively perform.",
     example:"A: \uC774\uBC88 \uC8FC\uB9D0\uC5D0 \uACF5\uC5F0\uD574\uC694.\nB: \uBB34\uC2A8 \uACF5\uC5F0\uC744 \uD574\uC694?\nA: \uBBA4\uC9C0\uCEEC\uC744 \uACF5\uC5F0\uD574\uC694.\nB: \uBC18\uC751\uC774 \uC5B4\uB540\uC5B4\uC694?",
     exampleSrc:"A: I am performing this weekend.\nB: What kind of performance?\nA: I am performing a musical.\nB: How was the audience response?",
     funFact:"공연하다 covers live performances of any kind. Korea's musical theater scene has exploded, with Korean-language adaptations and original works."},

    {type:"teach", trg:"\uAD00\uB78C", src:"viewing; watching (formal)", pos:"noun", gender:null,
     note:"Sino-Korean: observe (觀) + look (覽).\nFormal word for watching performances or exhibitions.",
     example:"A: \uC804\uC2DC\uD68C \uAD00\uB78C\uC744 \uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAD00\uB78C \uC2DC\uAC04\uC774 \uBA87 \uC2DC\uAE4C\uC9C0\uC608\uC694?\nA: \uC624\uD6C4 6\uC2DC\uAE4C\uC9C0 \uAD00\uB78C\uD560 \uC218 \uC788\uC5B4\uC694.\nB: \uAD00\uB78C \uC694\uAE08\uC740 \uC5BC\uB9C8\uC608\uC694?",
     exampleSrc:"A: I want to see the exhibition.\nB: What time is viewing available until?\nA: You can view it until 6 PM.\nB: How much is the viewing fee?",
     funFact:"관람 is more formal than 보다 (to watch). Signs say 관람 가능 (viewable) and 관람 불가 (not viewable) for age restrictions on content."},

    {type:"teach", trg:"\uAD00\uB78C\uAC1D", src:"spectator; viewer; audience member", pos:"noun", gender:null,
     note:"Sino-Korean: viewing (觀覽) + guest (客).",
     example:"A: \uAD00\uB78C\uAC1D\uC774 \uB9CE\uC558\uC5B4\uC694.\nB: \uBA87 \uBA85\uC774\uB098 \uC654\uC5B4\uC694?\nA: 5\uCC9C \uBA85\uC758 \uAD00\uB78C\uAC1D\uC774 \uC654\uC5B4\uC694.\nB: \uB300\uC131\uACF5\uC774\uB124\uC694!",
     exampleSrc:"A: There were many spectators.\nB: How many people came?\nA: 5,000 spectators came.\nB: That is a great success!",
     funFact:"관람객 is used for exhibitions and performances. For sports, 관중 (crowd/audience) is preferred. Both end with 客 (guest)."},

    {type:"mc",
     q:"\uC804\uC2DC\uD68C\uB97C \uBCF4\uB7EC \uC628 \uC0AC\uB78C\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAD00\uB78C\uAC1D","\uAD00\uAD11\uAC1D","\uAC10\uB3C5","\uADF9\uC791\uAC00"],
     ans:"\uAD00\uB78C\uAC1D",
     hint:"This word combines 'viewing' with 'guest' to describe someone who comes to watch an exhibition or show."},

    {type:"teach", trg:"\uAD00\uAD11\uAC1D", src:"tourist; sightseer", pos:"noun", gender:null,
     note:"Sino-Korean: observe (觀) + light/scenery (光) + guest (客).",
     example:"A: \uAD00\uAD11\uAC1D\uC774 \uB9CE\uC774 \uC624\uB294 \uACF3\uC774\uC5D0\uC694.\nB: \uC678\uAD6D\uC778 \uAD00\uAD11\uAC1D\uB3C4 \uB9CE\uC544\uC694?\nA: \uB124, \uC77C\uBCF8\uACFC \uC911\uAD6D \uAD00\uAD11\uAC1D\uC774 \uB9CE\uC544\uC694.\nB: \uAD00\uAD11 \uC0B0\uC5C5\uC774 \uBC1C\uC804\uD558\uACE0 \uC788\uB124\uC694.",
     exampleSrc:"A: This place attracts many tourists.\nB: Are there many foreign tourists too?\nA: Yes, many Japanese and Chinese tourists.\nB: The tourism industry is developing.",
     funFact:"관광객 vs 관람객: 관광객 (tourists) visit places, while 관람객 (spectators) watch performances or exhibitions. Different 客."},

    {type:"teach", trg:"\uAD00\uAD11\uBC84\uC2A4", src:"tour bus; sightseeing bus", pos:"noun", gender:null,
     note:"Hybrid: Sino-Korean 관광 (tourism) + English loanword 버스 (bus).",
     example:"A: \uAD00\uAD11\uBC84\uC2A4\uB97C \uD0C0\uACE0 \uB3C4\uC2DC\uB97C \uAD6C\uACBD\uD588\uC5B4\uC694.\nB: \uC5B4\uB514\uB97C \uB3CC\uC544\uBD24\uC5B4\uC694?\nA: \uACBD\uBCF5\uAD81\uACFC \uBA85\uB3D9\uC744 \uBC29\uBB38\uD588\uC5B4\uC694.\nB: \uAD00\uAD11\uBC84\uC2A4\uAC00 \uD3B8\uB9AC\uD558\uC8E0.",
     exampleSrc:"A: I toured the city on a tour bus.\nB: Where did you visit?\nA: I visited Gyeongbokgung and Myeongdong.\nB: Tour buses are convenient.",
     funFact:"Seoul's City Tour Bus (서울시티투어버스) is popular with tourists. Routes cover major landmarks with audio guides in multiple languages."},

    {type:"teach", trg:"\uADF9", src:"drama; play; theatrical work", pos:"noun", gender:null,
     note:"Sino-Korean: drama (劇). Short, formal word for staged drama.",
     example:"A: \uC774\uBC88 \uC0C8 \uADF9\uC774 \uC7AC\uBBF8\uC788\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC7A5\uB974\uC758 \uADF9\uC774\uC5D0\uC694?\nA: \uBE44\uADF9\uC774\uC5D0\uC694.\nB: \uC5B4\uB514\uC5D0\uC11C \uACF5\uC5F0\uD574\uC694?",
     exampleSrc:"A: The new play is interesting.\nB: What genre of drama is it?\nA: It is a tragedy.\nB: Where is it being performed?",
     funFact:"극 appears in many compound words: 연극 (theater), 비극 (tragedy), 희극 (comedy), 극장 (theater/cinema). The hanja 劇 is extremely productive."},

    {type:"teach", trg:"\uADF9\uC791\uAC00", src:"playwright; dramatist", pos:"noun", gender:null,
     note:"Sino-Korean: drama (劇) + create (作) + person (家).",
     example:"A: \uC720\uBA85\uD55C \uADF9\uC791\uAC00\uC758 \uC791\uD488\uC774\uC5D0\uC694.\nB: \uB204\uAD6C\uC758 \uC791\uD488\uC774\uC5D0\uC694?\nA: \uD55C\uAD6D\uC758 \uB300\uD45C\uC801\uC778 \uADF9\uC791\uAC00\uC608\uC694.\nB: \uAF2D \uBCF4\uACE0 \uC2F6\uC5B4\uC694.",
     exampleSrc:"A: This is a work by a famous playwright.\nB: Whose work is it?\nA: A representative Korean playwright.\nB: I definitely want to see it.",
     funFact:"The -가 (家) suffix means 'specialist/professional': 작곡가 (composer), 소설가 (novelist), 화가 (painter), 건축가 (architect)."},

    {type:"teach", trg:"\uAC00\uC694", src:"popular song; pop music", pos:"noun", gender:null,
     note:"Sino-Korean: song (歌) + ballad (謠).\nKorean popular music tradition.",
     example:"A: \uD55C\uAD6D \uAC00\uC694\uB97C \uC88B\uC544\uD574\uC694?\nB: \uB124, K-pop\uC744 \uC88B\uC544\uD574\uC694.\nA: \uC606\uB0A0 \uAC00\uC694\uB3C4 \uC88B\uC544\uC694?\nB: \uD2B8\uB85C\uD2B8 \uAC00\uC694\uB3C4 \uC88B\uC544\uD574\uC694.",
     exampleSrc:"A: Do you like Korean pop songs?\nB: Yes, I like K-pop.\nA: Do you like classic Korean songs too?\nB: I like trot music too.",
     funFact:"가요 is a broader term than K-pop. It includes all Korean popular music: trot (트로트), ballads (발라드), and modern pop."},

    {type:"teach", trg:"\uACE1", src:"song; musical piece; tune", pos:"noun", gender:null,
     note:"Sino-Korean: song/tune (曲). Counter for songs and musical pieces.",
     example:"A: \uC774 \uACE1\uC744 \uC544\uC138\uC694?\nB: \uB124, \uC720\uBA85\uD55C \uACE1\uC774\uC8E0.\nA: \uBA87 \uACE1\uC774\uB098 \uBD88\uB800\uC5B4\uC694?\nB: \uB2E4\uC12F \uACE1\uC744 \uBD88\uB800\uC5B4\uC694.",
     exampleSrc:"A: Do you know this song?\nB: Yes, it is a famous tune.\nA: How many songs did they sing?\nB: They sang five songs.",
     funFact:"곡 is both a noun (song/piece) and a counter. You say 한 곡 (one song), 두 곡 (two songs). It covers all genres of music."},

    {type:"fb",
     s:"\uC774\uBC88 \uC8FC\uB9D0\uC5D0 \uC0C8 \uBBA4\uC9C0\uCEEC\uC774 {1}\uB3FC\uC694.",
     a:["\uACF5\uC5F0"],
     opts:["\uACF5\uC5F0","\uACF5\uAC1C","\uAD00\uB78C","\uAD50\uD658"],
     hint:"This passive verb means a show or performance takes place on stage.",
     sSrc:"A new musical is being {1} this weekend."},

    {type:"teach", trg:"\uACF5\uAC1C", src:"disclosure; making public; release", pos:"noun", gender:null,
     note:"Sino-Korean: public (公) + open (開).\nRevealing something to the public.",
     example:"A: \uC0C8 \uC601\uD654\uAC00 \uACF5\uAC1C\uB418\uC5C8\uC5B4\uC694.\nB: \uBC18\uC751\uC774 \uC5B4\uB54C\uC694?\nA: \uACF5\uAC1C \uCCAB\uB0A0\uBD80\uD130 \uC778\uAE30\uAC00 \uB9CE\uC544\uC694.\nB: \uAF2D \uBCF4\uACE0 \uC2F6\uC5B4\uC694.",
     exampleSrc:"A: The new movie has been released.\nB: How is the response?\nA: It has been popular since opening day.\nB: I definitely want to see it.",
     funFact:"공개 is used for everything from movie releases to information disclosure. 정보 공개 (information disclosure) is a legal right in Korea."},

    {type:"teach", trg:"\uACF5\uAC1C\uD558\uB2E4", src:"to reveal; to make public; to release", pos:"verb", gender:null,
     note:"Verb form of 공개. To actively disclose.",
     example:"A: \uD68C\uC0AC\uAC00 \uC2E0\uC81C\uD488\uC744 \uACF5\uAC1C\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC81C\uD488\uC774\uC5D0\uC694?\nA: \uC0C8\uB85C\uC6B4 \uC2A4\uB9C8\uD2B8\uD3F0\uC744 \uACF5\uAC1C\uD588\uC5B4\uC694.\nB: \uBC18\uC751\uC774 \uB728\uAC70\uC6B0\uB124\uC694.",
     exampleSrc:"A: The company revealed a new product.\nB: What product?\nA: They released a new smartphone.\nB: The response is enthusiastic.",
     funFact:"Tech launches in Korea are called 공개 행사 (disclosure events). Samsung and LG hold major 공개 events for new products."},

    {type:"teach", trg:"\uAD6C\uACBD\uD558\uB2E4", src:"to look around; to sightsee", pos:"verb", gender:null,
     note:"Sino-Korean: seek (求) + view (景) + do (하다).\nCasual viewing or sightseeing.",
     example:"A: \uC2DC\uC7A5\uC744 \uAD6C\uACBD\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uBB50 \uC0AC\uACE0 \uC2F6\uC5B4\uC694?\nA: \uAD6C\uACBD\uB9CC \uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uAD6C\uACBD\uD558\uB294 \uAC83\uB3C4 \uC7AC\uBBF8\uC788\uC8E0.",
     exampleSrc:"A: I am looking around the market.\nB: What do you want to buy?\nA: I am just looking around.\nB: Sightseeing is fun too.",
     funFact:"구경하다 is more casual than 관람하다. You 구경하다 at markets and street events, but 관람하다 at museums and theaters."},

    {type:"teach", trg:"\uACE0\uC804", src:"classic; classical work", pos:"noun", gender:null,
     note:"Sino-Korean: old (古) + model/canon (典).\nTimeless literary or artistic works.",
     example:"A: \uACE0\uC804 \uBB38\uD559\uC744 \uC88B\uC544\uD574\uC694.\nB: \uC5B4\uB5A4 \uACE0\uC804 \uC791\uD488\uC744 \uC88B\uC544\uD574\uC694?\nA: \uD64D\uAE38\uB3D9\uC804\uC744 \uC88B\uC544\uD574\uC694.\nB: \uD55C\uAD6D\uC758 \uB300\uD45C \uACE0\uC804\uC774\uC8E0.",
     exampleSrc:"A: I like classical literature.\nB: Which classic works do you like?\nA: I like the Tale of Hong Gildong.\nB: It is a representative Korean classic.",
     funFact:"홍길동전 (Tale of Hong Gildong) is often called the first Korean novel. Written by Heo Gyun, it criticizes class discrimination."},

    {type:"teach", trg:"\uACF5\uD3EC", src:"fear; terror; horror", pos:"noun", gender:null,
     note:"Sino-Korean: just/public (恐) + fear (怖).\nIntense fear or the horror genre.",
     example:"A: \uACF5\uD3EC \uC601\uD654\uB97C \uC88B\uC544\uD574\uC694?\nB: \uC544\uB2C8\uC694, \uACF5\uD3EC \uC601\uD654\uB294 \uBB34\uC11C\uC6CC\uC694.\nA: \uACF5\uD3EC\uC2EC\uC774 \uC788\uC5B4\uC694?\nB: \uB124, \uC5B4\uB450\uC6B4 \uACF3\uC774 \uBB34\uC11C\uC6CC\uC694.",
     exampleSrc:"A: Do you like horror movies?\nB: No, horror movies scare me.\nA: Do you have a fear of something?\nB: Yes, I am afraid of dark places.",
     funFact:"Korean horror (K-horror) is globally influential. Films like 장화홍련 and the TV series 킹덤 redefined the 공포 genre."},

    {type:"teach", trg:"\uAD50\uD658", src:"exchange; swap", pos:"noun", gender:null,
     note:"Sino-Korean: exchange (交) + change (換).\nExchanging items, ideas, or currency.",
     example:"A: \uBB38\uD654 \uAD50\uD658 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uCC38\uC5EC\uD588\uC5B4\uC694.\nB: \uC5B4\uB290 \uB098\uB77C\uC640 \uAD50\uD658\uD588\uC5B4\uC694?\nA: \uD504\uB791\uC2A4\uC640 \uAD50\uD658\uD588\uC5B4\uC694.\nB: \uC88B\uC740 \uACBD\uD5D8\uC774\uC5C8\uACA0\uB124\uC694.",
     exampleSrc:"A: I participated in a cultural exchange program.\nB: Which country did you exchange with?\nA: I exchanged with France.\nB: That must have been a great experience.",
     funFact:"교환 covers many types: 교환 학생 (exchange student), 물물 교환 (barter), 환전 (currency exchange)."},

    {type:"teach", trg:"\uAD50\uD658\uD558\uB2E4", src:"to exchange; to swap", pos:"verb", gender:null,
     note:"Verb form of 교환. To actively trade or exchange.",
     example:"A: \uC5F0\uB77D\uCC98\uB97C \uAD50\uD658\uD560\uAE4C\uC694?\nB: \uB124, \uBC88\uD638\uB97C \uAD50\uD658\uD569\uC2DC\uB2E4.\nA: \uC120\uBB3C\uC744 \uAD50\uD658\uD560 \uC218 \uC788\uC5B4\uC694?\nB: \uC601\uC218\uC99D\uC774 \uC788\uC73C\uBA74 \uAC00\uB2A5\uD574\uC694.",
     exampleSrc:"A: Shall we exchange contact information?\nB: Yes, let us exchange numbers.\nA: Can I exchange the gift?\nB: If you have the receipt, it is possible.",
     funFact:"교환하다 is used in both formal (diplomacy, business) and casual (swapping phone numbers) contexts."},

    {type:"teach", trg:"\uACF5\uC5F0\uD788", src:"pointlessly; for no reason; in vain", pos:"adv", gender:null,
     note:"Sino-Korean: empty/vain (空) + how (然) + -ly (히).\nDoing something without purpose.",
     example:"A: \uACF5\uC5F0\uD788 \uAC78\uC815\uD558\uC9C0 \uB9C8\uC138\uC694.\nB: \uD56D\uC0C1 \uACF5\uC5F0\uD788 \uBD88\uC548\uD574\uC694.\nA: \uACF5\uC5F0\uD55C \uAC78\uC815\uC740 \uC2DC\uAC04 \uB0AD\uBE44\uC608\uC694.\nB: \uB9DE\uC544\uC694, \uAE0D\uC815\uC801\uC73C\uB85C \uC0DD\uAC01\uD560\uAC8C\uC694.",
     exampleSrc:"A: Do not worry pointlessly.\nB: I am always anxious for no reason.\nA: Needless worry is a waste of time.\nB: You are right, I will think positively.",
     funFact:"공연히 looks related to 공연 (performance) but uses different hanja: 空 (empty) vs 公 (public). A classic case of Korean homophones."},

    {type:"teach", trg:"\uAC10\uB3C5", src:"director; supervisor", pos:"noun", gender:null,
     note:"Sino-Korean: supervise (監) + direct (督).\nFilm director or sports coach.",
     example:"A: \uC774 \uC601\uD654\uC758 \uAC10\uB3C5\uC740 \uB204\uAD6C\uC608\uC694?\nB: \uBD09\uC900\uD638 \uAC10\uB3C5\uC774\uC5D0\uC694.\nA: \uC720\uBA85\uD55C \uAC10\uB3C5\uC774\uC8E0.\nB: \uAD6D\uC81C \uC601\uD654\uC81C\uC5D0\uC11C \uC0C1\uC744 \uBC1B\uC558\uC5B4\uC694.",
     exampleSrc:"A: Who is the director of this film?\nB: It is Director Bong Joon-ho.\nA: A famous director.\nB: He won awards at international film festivals.",
     funFact:"봉준호 감독 won the Oscar for Best Picture with 기생충 (Parasite) in 2020, a landmark moment for Korean cinema globally."},

    {type:"mc",
     q:"\uC601\uD654\uB97C \uB9CC\uB4DC\uB294 \uC0AC\uB78C\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAC10\uB3C5","\uADF9\uC791\uAC00","\uAD00\uB78C\uAC1D","\uAC15\uC0AC"],
     ans:"\uAC10\uB3C5",
     hint:"This person supervises and directs the creative process of a film or TV show."},

    {type:"match", pairs:[
      {trg:"\uACF5\uC5F0\uC7A5", src:"theater/venue"},
      {trg:"\uAD00\uB78C\uAC1D", src:"spectator"},
      {trg:"\uAD00\uAD11\uAC1D", src:"tourist"},
      {trg:"\uADF9\uC791\uAC00", src:"playwright"},
      {trg:"\uACE0\uC804", src:"classic"},
      {trg:"\uAC10\uB3C5", src:"director"}
    ]}
  ]
};
export default LESSON_9;
