// Unit 18 Expansion. Lesson 3: にちじょうのしえき (Causative in Daily Life)
const LESSON_3 = {
  id:"jav2_u18l3", title:"にちじょうのしえき", icon:"👨‍👩‍👧", xp:15, board:true,
  steps:[
    {type:"intro", title:"にちじょうのしえき",
     desc:"Causative is everywhere in family life and daily routines. Parents make children do homework. Friends let you borrow things. Doctors make patients take medicine. Practice causative in the situations you will encounter every day.",
     goals:["Use causative for parenting and family situations","Express permission with causative + てもらう","Combine causative with あげる/もらう/くれる"]},

    {type:"teach", trg:"よませる", src:"to make/let someone read", pos:"verb", gender:null,
     note:"Causative of よむ (to read). Group 1: よむ to よま + せる.\nKanji: 読ませる.",
     example:"A: こどもにまいにちほんをよませています。\nB: いいしゅうかんですね。",
     exampleSrc:"A: I make my children read books every day.\nB: That is a good habit.",
     funFact:"読ませる is a staple of Japanese parenting vocabulary. Encouraging reading (dokusho) is deeply valued in Japanese education. Summer reading assignments (natsu no dokusho) are standard in Japanese schools. The causative here implies positive guidance rather than punishment."},

    {type:"teach", trg:"かたづけさせる", src:"to make someone clean up/tidy", pos:"verb", gender:null,
     note:"Causative of かたづける (to tidy up). Group 2: かたづけ + させる.\nKanji: 片付けさせる.",
     example:"A: こどもにへやをかたづけさせました。\nB: ちゃんとやりましたか？",
     exampleSrc:"A: I made the children tidy their room.\nB: Did they do it properly?",
     funFact:"片付ける combines 片 (one side/piece) and 付ける (attach/put), meaning to put things in order. Making children tidy up (katazukesaseru) is a universal parenting causative. Japanese schools have students clean classrooms themselves (souji no jikan), building responsibility from childhood."},

    {type:"teach", trg:"のませる", src:"to make/let someone drink / to give medicine", pos:"verb", gender:null,
     note:"Causative of のむ (to drink). Group 1: のむ to のま + せる.\nKanji: 飲ませる. Also used for giving medicine.",
     example:"A: あかちゃんにくすりをのませるのはたいへんです。\nB: がんばってくださいね。",
     exampleSrc:"A: Making a baby take medicine is tough.\nB: Keep trying your best.",
     funFact:"飲ませる covers both letting someone drink and making someone take medicine. Japanese pharmacies (薬局, yakkyoku) are found on nearly every block. Over-the-counter medicine culture is strong. Parents giving children medicine (kusuri wo nomaseru) is a common daily struggle."},

    {type:"teach", trg:"おきさせる", src:"to make someone wake up", pos:"verb", gender:null,
     note:"Causative of おきる (to wake up). Group 2: おき + させる.\nKanji: 起きさせる.",
     example:"A: まいあさこどもをおきさせるのがたいへんです。\nB: わかります。うちもおなじです。",
     exampleSrc:"A: Waking the children up every morning is tough.\nB: I understand. It is the same at our house.",
     funFact:"起きさせる is the daily struggle of every parent. Japanese school starts early (often 8:00-8:30), requiring children to wake up around 6:30. The phrase maiasa okisaseru no ga taihen (waking them every morning is hard) is a bonding topic among parents. Alarm clocks in Japan range from gentle to absurdly loud."},

    {type:"mc", q:"こどもにほんをよませている means:", opts:["The child is reading to me","I am making the children read books","I read books for the children","The children want to read"], ans:"I am making the children read books",
     hint:"Causative + ている shows an ongoing practice. に marks who is made to do the action."},

    {type:"teach", trg:"ねさせる", src:"to put someone to sleep / to let sleep", pos:"verb", gender:null,
     note:"Causative of ねる (to sleep). Group 2: ね + させる.\nKanji: 寝させる.",
     example:"A: あかちゃんを9じまでにねさせたいです。\nB: おふろのあとがいいですよ。",
     exampleSrc:"A: I want to put the baby to sleep by 9 o'clock.\nB: After the bath is a good time.",
     funFact:"寝させる is central to Japanese baby care. Japanese parents often co-sleep (川の字, kawa no ji, meaning the family sleeps in a row like the kanji 川). Bedtime routines (ねかしつけ, nekashitsuke) are a major parenting topic. Japan has an entire genre of children's bedtime stories (おやすみえほん)."},

    {type:"teach", trg:"もたせる", src:"to make someone carry / to let someone have", pos:"verb", gender:null,
     note:"Causative of もつ (to hold/carry). Group 1: もつ to もた + せる.\nKanji: 持たせる.",
     example:"A: こどもにおべんとうをもたせました。\nB: てづくりですか？",
     exampleSrc:"A: I had the child carry a lunch box.\nB: Is it homemade?",
     funFact:"持たせる often describes parents preparing things for children to bring. Making a child carry a bento (obentou wo motaseru) is a daily morning ritual. Japanese bento culture is elaborate, with parents creating character-themed lunches (キャラ弁, kyaraben). Forgetting to make the bento is a parent's nightmare."},

    {type:"fb", s:"あかちゃんにくすりを{1}のはたいへんです。\n(Making a baby take medicine is tough.)", a:"のませる", opts:["のませる","のんで","のみ","のまれる"], sSrc:"Making a baby take medicine is tough.",
     hint:"The causative form of のむ (to drink). Group 1: あ-row + せる."},

    {type:"teach", trg:"しゅうかん", src:"habit / custom", pos:"noun", gender:null,
     note:"Kanji: 習慣. 習 (learn/practice) + 慣 (accustom).\nいいしゅうかん = a good habit.",
     example:"A: あさはやくおきるしゅうかんをつけたいです。\nB: すこしずつやりましょう。",
     exampleSrc:"A: I want to develop the habit of waking up early.\nB: Let us do it little by little.",
     funFact:"習慣 covers both personal habits and cultural customs. Japanese life is full of daily habits (seikatsu shuukan): morning radio exercises (rajio taisou), tea time, evening baths. The phrase shuukan wo tsukeru (develop a habit) uses つける (to attach), as if physically sticking the habit to yourself."},

    {type:"teach", trg:"てづくり", src:"handmade / homemade", pos:"noun", gender:null,
     note:"て (hand) + づくり (making). Valued highly in Japanese culture.\nてづくりのおかし = homemade sweets.",
     example:"A: これ、てづくりですか？\nB: はい、きのうつくりました。",
     exampleSrc:"A: Is this handmade?\nB: Yes, I made it yesterday.",
     funFact:"手作り (tezukuri) carries strong positive connotations in Japan. Homemade gifts, chocolates (especially for Valentine's Day), and food are valued more than store-bought versions. A tezukuri bento shows love and effort. The word implies warmth, care, and personal investment."},

    {type:"mc", q:"こどもにへやをかたづけさせた means:", opts:["I tidied the child's room","The child tidied up by themselves","I made the child tidy their room","The room was already tidy"], ans:"I made the child tidy their room",
     hint:"Causative form: the parent caused the c... to perform the action of tidying."},

    {type:"tip", title:"Causative in Family Life",
     text:"Common family causatives:\n\nよませる = make/let read\nかたづけさせる = make tidy up\nのませる = give medicine / make drink\nおきさせる = make wake up\nねさせる = put to sleep\nもたせる = make carry / equip with\n\nParenting causative often uses ている for routines:\nまいにちよませている = I make them read daily\nはやくねさせている = I put them to bed early\n\nThe meaning (make vs. let) depends on context:\nよませる = make read (homework) or let read (a fun book).",
     deepDive:{title:"Causative + Giving/Receiving",
      text:"Combining causative with あげる/もらう/くれる adds nuance:\n\nさせてあげる = let someone do (as a favor)\nこどもにあそばせてあげる = let the child play (kindly)\n\nさせてもらう = receive permission to do\nやすませてもらう = I receive permission to rest\n\nさせてくれる = someone lets me do (I appreciate it)\nいかせてくれた = they let me go (I am grateful)\n\nThese combinations show that Japanese causative is deeply embedded in the social fabric of giving and receiving favors."}},

    {type:"match", pairs:[{trg:"よませる",src:"make/let read"},{trg:"かたづけさせる",src:"make tidy up"},{trg:"のませる",src:"make drink/give medicine"},{trg:"おきさせる",src:"make wake up"}]},

    {type:"fb", s:"こどもにおべんとうを{1}ました。\n(I had the child carry a lunch box.)", a:"もたせ", opts:["もたせ","もって","もち","もたれ"], sSrc:"I had the child carry a lunch box.",
     hint:"The causative form of もつ (to hold/carry). Group 1: あ-row + せる."},

    {type:"match", pairs:[{trg:"ねさせる",src:"put to sleep"},{trg:"もたせる",src:"make carry"},{trg:"しゅうかん",src:"habit"},{trg:"てづくり",src:"handmade"}]},

    {type:"mc", q:"させてあげる expresses:", opts:["Being forced to do something","Letting someone do something as a favor","Making someone angry","Asking for permission"], ans:"Letting someone do something as a favor",
     hint:"Causative + あげる (to give) = causing s... to do s... as a kindness to them."},
  ]
};
export default LESSON_3;
