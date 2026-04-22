// Unit 02 Expansion L03. More Occupations & Describing Work
const LESSON_3 = {
  id:"jav2_u2l3", title:"いろいろなしごと", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"いろいろなしごと",
     desc:"Expand your vocabulary with more occupations and learn how to describe what you do for work. Japan has many unique job titles and a rich professional culture.",
     goals:["Name 10+ additional occupations","Ask and answer 'what do you do?'","Use the pattern 'X de hataraiteimasu' (I work at X)"]},

    {type:"teach", trg:"きょうし", src:"teacher (formal)", pos:"noun", gender:null,
     note:"More formal/official than せんせい. Used on forms and job descriptions.\nKanji: 教師.",
     example:"A: きょうしですか？\nB: はい、ちゅうがっこうのきょうしです。",
     exampleSrc:"A: Are you a teacher?\nB: Yes, I am a middle school teacher.",
     funFact:"教 (teach) + 師 (master/expert). While sensei is the title you call a teacher, kyoushi is the occupation name. On resumes and official forms, you write kyoushi, not sensei."},

    {type:"teach", trg:"かんごし", src:"nurse", pos:"noun", gender:null,
     note:"Gender-neutral term introduced in 2002 to replace the old female-only word.\nKanji: 看護師.",
     example:"A: おしごとは？\nB: かんごしです。びょういんではたらいています。",
     exampleSrc:"A: What do you do?\nB: I'm a nurse. I work at a hospital.",
     funFact:"看 (watch over) + 護 (protect) + 師 (expert). Until 2002, Japan used kangoshi (female) and kangoshi (male) with different kanji. The law changed to make one unified term, reflecting the growing number of male nurses."},

    {type:"teach", trg:"けいさつかん", src:"police officer", pos:"noun", gender:null,
     note:"Gender-neutral term. Also informally called おまわりさん (omawari-san).\nKanji: 警察官.",
     example:"A: けいさつかんはあそこにいます。\nB: みちをきいてみましょう。",
     exampleSrc:"A: There is a police officer over there.\nB: Let's ask for directions.",
     funFact:"警 (warn) + 察 (inspect) + 官 (official). Japanese police boxes (kouban) are small stations on street corners staffed 24/7. Citizens commonly ask officers for directions, making them walking maps."},

    {type:"teach", trg:"コック", src:"cook / chef", pos:"noun", gender:null,
     note:"From Dutch 'kok.' Also シェフ (shefu, from French/English). Written in katakana.",
     example:"A: ゆめはなんですか？\nB: コックになりたいです。",
     exampleSrc:"A: What is your dream?\nB: I want to become a chef.",
     funFact:"Like many food-related words, kokku came from Dutch traders. Japan now has the most Michelin-starred restaurants in the world, surpassing even France. Tokyo alone has more than Paris."},

    {type:"mc", q:"かんごし means:", opts:["nurse","cook","teacher","police officer"], ans:"nurse",
     hint:"The person who watches over and protects patients at a hospital."},

    {type:"teach", trg:"うんてんし", src:"driver", pos:"noun", gender:null,
     note:"Covers taxi, bus, and truck drivers. Kanji: 運転士.\nTaxi drivers: タクシーのうんてんし.",
     example:"A: ちちはバスのうんてんしです。\nB: すごいですね。",
     exampleSrc:"A: My father is a bus driver.\nB: That's cool.",
     funFact:"運 (carry/transport) + 転 (turn/rotate) + 士 (professional). Japanese taxi and bus drivers are famously polite. Taxi doors open automatically, and drivers wear white gloves. The profession is held in high respect."},

    {type:"teach", trg:"のうか", src:"farmer", pos:"noun", gender:null,
     note:"Someone who works in agriculture. Japan values rice farming deeply.\nKanji: 農家.",
     example:"A: おじいさんはのうかですか？\nB: はい、こめをつくっています。",
     exampleSrc:"A: Is your grandfather a farmer?\nB: Yes, he grows rice.",
     funFact:"農 (agriculture) + 家 (house/expert). Rice farming is sacred in Japan. The Emperor still plants rice in a palace paddy each year as a Shinto ritual. Despite urbanization, rural farming communities maintain deep cultural significance."},

    {type:"teach", trg:"プログラマー", src:"programmer", pos:"noun", gender:null,
     note:"Loanword from English. Part of Japan's large IT industry.\nWritten in katakana.",
     example:"A: プログラマーですか？\nB: はい、ウェブのプログラマーです。",
     exampleSrc:"A: Are you a programmer?\nB: Yes, I'm a web programmer.",
     funFact:"Japan's tech industry adopted many English job titles directly: puroguramaa (programmer), shisutemu enjinia (systems engineer), dezainaa (designer). The abbreviation SE (systems engineer) is used so often that most Japanese workers know it."},

    {type:"teach", trg:"びようし", src:"hairdresser / beautician", pos:"noun", gender:null,
     note:"Very popular profession in Japan's fashion-conscious culture.\nKanji: 美容師.",
     example:"A: びようしになりたいです。\nB: いいですね。おしゃれですか？",
     exampleSrc:"A: I want to become a hairdresser.\nB: That's nice. Are you fashionable?",
     funFact:"美 (beauty) + 容 (appearance) + 師 (expert). Japan has about 250,000 beauty salons, more than convenience stores. Harajuku in Tokyo is the fashion capital where many top stylists work. Hair magazines are bestsellers."},

    {type:"fb", s:"わたしはびょういんで{1}。",
     a:["はたらいています"],
     opts:["はたらいています","すんでいます","たべています","べんきょうしています"],
     hint:"The phrase meaning 'I am working at' that describes your workplace.",
     sSrc:"I work at a hospital."},

    {type:"teach", trg:"はたらく", src:"to work", pos:"verb", gender:null,
     note:"A u-verb (godan). Polite: はたらきます. Pattern: PLACE + で + はたらく.\nKanji: 働く.",
     example:"A: どこではたらいていますか？\nB: ぎんこうではたらいています。",
     exampleSrc:"A: Where do you work?\nB: I work at a bank.",
     funFact:"The kanji 働 is uniquely Japanese (not from Chinese). It combines 人 (person) + 動 (move). A person who moves = works. This kanji was invented in Japan, making it one of the few kanji not borrowed from China."},

    {type:"teach", trg:"かいしゃ", src:"company / corporation", pos:"noun", gender:null,
     note:"Used with で to indicate workplace: かいしゃではたらく (work at a company).\nKanji: 会社.",
     example:"A: どんなかいしゃではたらいていますか？\nB: ITのかいしゃです。",
     exampleSrc:"A: What kind of company do you work at?\nB: An IT company.",
     funFact:"会 (meeting) + 社 (shrine/society). A company is literally a 'meeting society.' Japanese company culture emphasizes group harmony (wa) and lifetime employment, though this is changing with younger generations preferring flexibility."},

    {type:"teach", trg:"がっこう", src:"school", pos:"noun", gender:null,
     note:"General word for school. Types: しょうがっこう (elementary), ちゅうがっこう (middle), こうこう (high school).\nKanji: 学校.",
     example:"A: がっこうではたらいていますか？\nB: はい、しょうがっこうのきょうしです。",
     exampleSrc:"A: Do you work at a school?\nB: Yes, I'm an elementary school teacher.",
     funFact:"学 (study) + 校 (school building). Japanese schools are famous for students cleaning their own classrooms (souji). No janitors for classrooms. This teaches responsibility and respect for shared spaces from elementary school."},

    {type:"mc", q:"はたらく means:", opts:["to study","to work","to live","to eat"], ans:"to work",
     hint:"The verb whose kanji uniquely combines 'person' and 'move.'"},

    {type:"match", pairs:[
      {trg:"きょうし", src:"teacher (formal)"},
      {trg:"かんごし", src:"nurse"},
      {trg:"けいさつかん", src:"police officer"},
      {trg:"コック", src:"cook / chef"}
    ]},

    {type:"match", pairs:[
      {trg:"うんてんし", src:"driver"},
      {trg:"のうか", src:"farmer"},
      {trg:"プログラマー", src:"programmer"},
      {trg:"びようし", src:"hairdresser"}
    ]},

    {type:"fb", s:"ITの{1}ではたらいています。",
     a:["かいしゃ"],
     opts:["かいしゃ","がっこう","びょういん","えき"],
     hint:"The general word for a business organization or corporation.",
     sSrc:"I work at an IT company."},

    {type:"mc", q:"Which job title came from Dutch?", opts:["シェフ","プログラマー","コック","エンジニア"], ans:"コック",
     hint:"This cooking-related word arrived with Dutch traders during the Edo period."},

    {type:"mc", q:"びようし works at:", opts:["A police station","A hospital","A school","A beauty salon"], ans:"A beauty salon",
     hint:"The kanji contains 'b...' and 'appearance.'"},
  ]
};
export default LESSON_3;
