// Korean B1 Gap - Lesson 30: Media and Communication
const LESSON_30 = {
  id:"kov2_b1gap_l30", title:"미디어와 소통", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"Media and Communication",
     desc:"From broadcasting stations to literary novels, learn the Korean vocabulary for media, arts, and how information spreads. These words are essential for discussing culture, news, and creative expression.",
     goals:["Learn 20 media and communication words","Discuss arts, culture, and information","Use verbs for revealing and reporting"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"미디어", src:"media", pos:"noun", gender:null,
     note:"Loanword from English 'media.' All forms of mass communication.",
     example:"A: 요즘 미디어를 많이 봐요?\nB: 네, 뉴스랑 유튜브를 봐요.\nA: 소셜 미디어도요?",
     exampleSrc:"A: Do you consume a lot of media these days?\nB: Yes, I watch news and YouTube.\nA: Social media too?",
     funFact:"소셜 미디어 (social media), 뉴 미디어 (new media), 미디어 리터러시 (media literacy). Korea's media landscape is one of the most digitally advanced, with high smartphone penetration and streaming culture."},

    {type:"teach", trg:"방송국", src:"broadcasting station", pos:"noun", gender:null,
     note:"Sino-Korean: 放 (release) + 送 (send) + 局 (bureau). A TV or radio station.",
     example:"A: 방송국에서 일하고 싶어요?\nB: 네, PD가 되고 싶어요.\nA: 어떤 방송국이요?",
     exampleSrc:"A: Do you want to work at a broadcasting station?\nB: Yes, I want to become a PD.\nA: Which broadcasting station?",
     funFact:"Korea's big three 방송국: KBS (public), MBC, SBS (private). Working at a 방송국 is prestigious. PD (producer/director) and 작가 (writer) are the key creative roles behind Korean dramas."},

    {type:"teach", trg:"소문", src:"rumor, word of mouth", pos:"noun", gender:null,
     note:"Sino-Korean: 所 (place) + 聞 (hear). Information spread through talk, often unverified.",
     example:"A: 그 식당이 맛있다는 소문이 있어요.\nB: 소문 듣고 가 봤어요?\nA: 아직이요, 같이 가요!",
     exampleSrc:"A: There's a rumor that restaurant is delicious.\nB: Did you go after hearing the rumor?\nA: Not yet, let's go together!",
     funFact:"소문이 나다 (a rumor spreads), 소문이 퍼지다 (a rumor spreads widely). Korean proverb: 발 없는 말이 천리 간다 (words without feet travel a thousand miles). Rumors move fast."},

    {type:"teach", trg:"소리", src:"sound, noise, voice", pos:"noun", gender:null,
     note:"Native Korean. Any audible sound, from music to noise to speech.",
     example:"A: 무슨 소리가 들려요?\nB: 새 소리인 것 같아요.\nA: 아, 정말 예쁜 소리네요.",
     exampleSrc:"A: What sound do you hear?\nB: I think it's the sound of birds.\nA: Ah, it's a really pretty sound.",
     funFact:"소리 is incredibly versatile: 목소리 (voice, literally 'throat sound'), 빗소리 (rain sound), 웃음소리 (laughter). 한 소리 하다 means to scold someone. Korean is rich in sound-description vocabulary."},

    {type:"teach", trg:"소리치다", src:"to shout, to yell", pos:"verb", gender:null,
     note:"Compound: 소리 (sound) + 치다 (to strike). To produce a loud, forceful sound.",
     example:"A: 왜 소리쳤어요?\nB: 깜짝 놀라서 소리쳤어요.\nA: 괜찮아요?",
     exampleSrc:"A: Why did you shout?\nB: I was startled, so I shouted.\nA: Are you okay?",
     funFact:"소리치다 vs. 외치다: both mean 'to shout,' but 소리치다 emphasizes the volume (a loud sound), while 외치다 emphasizes the message (to cry out/proclaim). 소리지르다 is an even louder variant."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"KBS, MBC, SBS는 어떤 곳이에요?",
     opts:["방송국","공장","학교","병원"],
     ans:"방송국",
     hint:"These are Korea's three major TV and radio organizations. Compound: release + send + bureau."},

    {type:"fb",
     s:"깜짝 놀라서 큰 {1}를 질렀어요.",
     a:["소리"],
     opts:["소리","소문","미디어","방송국"],
     hint:"The native Korean word for any audible sound, from a whisper to a scream.",
     sSrc:"I was startled and let out a big {1}."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"소설", src:"novel, fiction", pos:"noun", gender:null,
     note:"Sino-Korean: 小 (small) + 說 (speak/tell). A fictional prose narrative.",
     example:"A: 무슨 소설을 읽고 있어요?\nB: 한강 작가의 소설을 읽어요.\nA: 재미있어요?",
     exampleSrc:"A: What novel are you reading?\nB: I'm reading a novel by Han Kang.\nA: Is it interesting?",
     funFact:"Han Kang (한강) won the Nobel Prize in Literature. Korean 소설 has gained global recognition. 단편소설 (short story), 장편소설 (full-length novel). The hanja 小說 means 'small talk,' its original Chinese meaning."},

    {type:"teach", trg:"문학", src:"literature", pos:"noun", gender:null,
     note:"Sino-Korean: 文 (writing) + 學 (study). The study and art of written works.",
     example:"A: 한국 문학에 관심 있어요?\nB: 네, 현대 문학을 좋아해요.\nA: 추천해 줄 책 있어요?",
     exampleSrc:"A: Are you interested in Korean literature?\nB: Yes, I like modern literature.\nA: Do you have a book to recommend?",
     funFact:"한국 문학 (Korean literature) spans centuries from 향가 (Silla-era songs) to modern Nobel-winning works. 문학상 (literary prize), 문학 작품 (literary work). Korea's literary tradition deeply values poetry and essays."},

    {type:"teach", trg:"미술", src:"fine arts, visual art", pos:"noun", gender:null,
     note:"Sino-Korean: 美 (beauty) + 術 (technique). Painting, sculpture, and visual arts.",
     example:"A: 미술관에 가 본 적 있어요?\nB: 네, 국립현대미술관에 갔어요.\nA: 어떤 작품이 좋았어요?",
     exampleSrc:"A: Have you been to an art museum?\nB: Yes, I went to the National Museum of Modern Art.\nA: What works did you like?",
     funFact:"미술관 (art museum/gallery), 미술 수업 (art class), 미술 작품 (artwork). Korean contemporary art (현대 미술) is booming internationally. Frieze Seoul is now a major global art fair."},

    {type:"teach", trg:"무용", src:"dance (formal/artistic)", pos:"noun", gender:null,
     note:"Sino-Korean: 舞 (dance) + 踊 (jump). Formal, artistic dance rather than casual dancing.",
     example:"A: 한국 전통 무용을 봤어요?\nB: 네, 정말 아름다웠어요.\nA: 부채춤이 유명하죠.",
     exampleSrc:"A: Have you seen Korean traditional dance?\nB: Yes, it was really beautiful.\nA: The fan dance is famous.",
     funFact:"무용 vs. 춤: 무용 is formal/artistic dance (ballet, traditional Korean dance), while 춤 is casual/everyday dancing. 무용가 (dancer/artist), 무용 공연 (dance performance). 부채춤 (fan dance) is iconic."},

    {type:"teach", trg:"시리즈", src:"series", pos:"noun", gender:null,
     note:"Loanword from English 'series.' A sequence of related works or episodes.",
     example:"A: 이 드라마 시리즈 봤어요?\nB: 네, 시즌 1은 봤어요.\nA: 시즌 2도 재미있어요.",
     exampleSrc:"A: Have you seen this drama series?\nB: Yes, I watched season 1.\nA: Season 2 is also good.",
     funFact:"시리즈 is used for TV shows, books, and movies: 드라마 시리즈 (drama series), 책 시리즈 (book series). Korean content platforms like Netflix have made K-drama 시리즈 a global phenomenon."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"소설", src:"novel"},
      {trg:"문학", src:"literature"},
      {trg:"미술", src:"fine arts"},
      {trg:"무용", src:"dance (artistic)"}
    ]},

    {type:"mc",
     q:"'미술'에 포함된 한자 '美'의 뜻은?",
     opts:["기술","아름다움","글","춤"],
     ans:"아름다움",
     hint:"This character is about visual appeal and aesthetics. It pairs with 'technique' to create the word for visual arts."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"스타일", src:"style", pos:"noun", gender:null,
     note:"Loanword from English 'style.' A distinctive manner or fashion.",
     example:"A: 어떤 스타일을 좋아해요?\nB: 캐주얼한 스타일이 편해요.\nA: 저도 그래요.",
     exampleSrc:"A: What style do you like?\nB: I find casual style comfortable.\nA: Me too.",
     funFact:"스타일 is everywhere in Korean: 패션 스타일 (fashion style), 헤어 스타일 (hairstyle), 생활 스타일 (lifestyle). 스타일리스트 (stylist) is a respected profession in Korea's fashion-conscious culture."},

    {type:"teach", trg:"알려지다", src:"to become known, to be known", pos:"verb", gender:null,
     note:"Passive of 알리다 (to inform). Something becomes widely known.",
     example:"A: 이 식당이 유명해요?\nB: 네, 맛집으로 알려져 있어요.\nA: 그래서 사람이 많구나.",
     exampleSrc:"A: Is this restaurant famous?\nB: Yes, it's known as a great food spot.\nA: That's why there are so many people.",
     funFact:"알려지다 is the passive chain: 알다 (know) > 알리다 (make known) > 알려지다 (become known). 널리 알려진 (widely known) is a useful modifier. K-pop groups are 전 세계에 알려진 (known worldwide)."},

    {type:"teach", trg:"불리다", src:"to be called, to be known as", pos:"verb", gender:null,
     note:"Passive of 부르다 (to call). To be referred to by a name or title.",
     example:"A: 이 도시는 뭐라고 불려요?\nB: '빛의 도시'로 불려요.\nA: 아, 파리요?",
     exampleSrc:"A: What is this city called?\nB: It's called the 'City of Light.'\nA: Ah, Paris?",
     funFact:"불리다 vs. 알려지다: 불리다 = called by a specific name, 알려지다 = known in general. Seoul is '서울'이라 불리다 (called Seoul) and 한국의 수도로 알려지다 (known as Korea's capital)."},

    {type:"teach", trg:"밝히다", src:"to reveal, to disclose, to clarify", pos:"verb", gender:null,
     note:"Causative of 밝다 (to be bright). To bring something to light.",
     example:"A: 경찰이 사건의 원인을 밝혔어요.\nB: 뭐가 원인이었어요?\nA: 아직 자세한 건 비밀이래요.",
     exampleSrc:"A: The police revealed the cause of the incident.\nB: What was the cause?\nA: The details are still secret, they say.",
     funFact:"밝히다 connects to 밝다 (bright): to make something bright/clear = to reveal. 신원을 밝히다 (reveal identity), 입장을 밝히다 (clarify one's stance). Very common in news reporting language."},

    {type:"teach", trg:"물음", src:"question, inquiry", pos:"noun", gender:null,
     note:"Native Korean. From 묻다 (to ask). A formal or literary word for 'question.'",
     example:"A: 이것은 중요한 물음이에요.\nB: 어떤 물음이요?\nA: '왜 공부하는가'라는 물음이요.",
     exampleSrc:"A: This is an important question.\nB: What question?\nA: The question of 'why do we study.'",
     funFact:"물음 is more literary than 질문 (質問, question). 물음표 (question mark) uses this word. In philosophy and literature, 삶의 물음 (life's questions) sounds deeper and more reflective than 삶의 질문."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"이 가수는 '국민 가수'로 {1}.",
     a:["불려요"],
     opts:["불려요","알려져요","밝혀요","물어요"],
     hint:"The passive form of 'to call.' This singer is referred to by a specific nickname.",
     sSrc:"This singer is {1} the 'national singer.'"},

    {type:"mc",
     q:"'경찰이 범인을 밝혔다'에서 '밝히다'는?",
     opts:["어둡게 하다","물어보다","드러내다","숨기다"],
     ans:"드러내다",
     hint:"This causative verb comes from 'bright.' It means to bring something out of darkness into clarity."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"보고", src:"report (formal)", pos:"noun", gender:null,
     note:"Sino-Korean: 報 (inform) + 告 (announce). An official report or briefing.",
     example:"A: 보고서 다 썼어요?\nB: 네, 내일 보고할 거예요.\nA: 잘 준비하세요.",
     exampleSrc:"A: Did you finish writing the report?\nB: Yes, I'll present the report tomorrow.\nA: Prepare well.",
     funFact:"보고서 (written report), 보고하다 (to report), 업무 보고 (work report). In Korean corporate culture, regular 보고 to superiors is mandatory. 중간보고 (interim report) and 최종보고 (final report) structure projects."},

    {type:"teach", trg:"사실", src:"fact, truth", pos:"noun", gender:null,
     note:"Sino-Korean: 事 (matter) + 實 (real). What is actually true.",
     example:"A: 사실을 말해 주세요.\nB: 사실은 제가 실수했어요.\nA: 솔직하게 말해 줘서 고마워요.",
     exampleSrc:"A: Please tell me the truth.\nB: The truth is, I made a mistake.\nA: Thank you for being honest.",
     funFact:"사실은 (actually, in fact) is one of the most common Korean conversation starters when correcting or revealing something. 사실대로 (truthfully), 사실상 (practically/in effect). Truth-telling is valued."},

    {type:"teach", trg:"실제", src:"reality, actuality", pos:"noun", gender:null,
     note:"Sino-Korean: 實 (real) + 際 (occasion). What actually exists or happens.",
     example:"A: 실제로 해 봤어요?\nB: 네, 실제로 해 보니까 어려웠어요.\nA: 이론하고 실제는 다르죠.",
     exampleSrc:"A: Have you actually tried it?\nB: Yes, when I actually tried it, it was difficult.\nA: Theory and reality are different.",
     funFact:"실제로 (actually, in reality) is the adverbial form. 사실 vs. 실제: 사실 is a verified truth/fact, 실제 is the real-world actuality. 실제 경험 (real experience) emphasizes hands-on reality."},

    {type:"teach", trg:"문화", src:"culture", pos:"noun", gender:null,
     note:"Sino-Korean: 文 (writing/civilization) + 化 (transform). The customs and arts of a society.",
     example:"A: 한국 문화에 관심 있어요?\nB: 네, 특히 음식 문화를 좋아해요.\nA: 한국 음식 문화는 정말 다양해요.",
     exampleSrc:"A: Are you interested in Korean culture?\nB: Yes, I especially like food culture.\nA: Korean food culture is really diverse.",
     funFact:"한류 (Korean Wave) = Korean 문화 going global. 문화재 (cultural asset), 문화유산 (cultural heritage), 다문화 (multicultural). Korea invests heavily in 문화 exports: K-pop, K-drama, K-food."},

    {type:"teach", trg:"시대", src:"era, age, period", pos:"noun", gender:null,
     note:"Sino-Korean: 時 (time) + 代 (generation). A historical or cultural period.",
     example:"A: 어떤 시대에 관심 있어요?\nB: 조선 시대를 좋아해요.\nA: 역사가 흥미롭죠.",
     exampleSrc:"A: What era are you interested in?\nB: I like the Joseon era.\nA: The history is fascinating.",
     funFact:"조선 시대 (Joseon Dynasty, 1392-1897) is Korea's most studied era. 디지털 시대 (digital age), 현대 시대 (modern era). 시대극 (period drama) is a beloved Korean entertainment genre set in historical 시대."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"{1}은 이론과 다를 수 있어요.",
     a:["실제"],
     opts:["실제","사실","보고","문화"],
     hint:"The Sino-Korean word for what actually happens in the real world, as opposed to theory.",
     sSrc:"{1} can be different from theory."},

    {type:"match", pairs:[
      {trg:"사실", src:"fact, truth"},
      {trg:"문화", src:"culture"},
      {trg:"시대", src:"era, age"},
      {trg:"보고", src:"report"}
    ]},

    {type:"mc",
     q:"'한류'는 한국의 무엇이 세계로 퍼지는 것이에요?",
     opts:["농업","경제","기술","문화"],
     ans:"문화",
     hint:"The Korean Wave spreads K-pop, K-drama, and K-food. This word means the customs and arts of a society."}
  ]
};
export default LESSON_30;
