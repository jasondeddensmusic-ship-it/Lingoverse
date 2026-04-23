// Unit 03 Batch 2. Lesson 2: Family Activities & Daily Life Together
const BATCH2_U03_L2 = {
  id:"itv2_u03l_b2_2", title:"La vita in famiglia", icon:"\ud83c\udfe1", xp:15, board:true,
  steps:[
    {type:"intro", title:"La vita in famiglia",
     desc:"Learn verbs and expressions for daily family activities and how Italians describe life at home.",
     goals:["Describe what family members do","Use common daily activity verbs","Talk about family routines and traditions"]},

    {type:"teach", trg:"mangiare", src:"to eat", pos:"verb", gender:null,
     note:"Regular -are verb. 'Mangio' = I eat.\nFrom Latin 'manducare' (to chew).",
     example:"A: Cosa mangiamo stasera?\nB: Mangiamo la pasta!",
     exampleSrc:"A: What are we eating tonight?\nB: We are eating pasta!",
     funFact:"From Late Latin 'manducare' (to chew), originally a vulgar word that replaced the classical 'edere.' The same root gave French 'manger.' Italian meals are family events, not just fuel stops."},

    {type:"teach", trg:"bere", src:"to drink", pos:"verb", gender:null,
     note:"Irregular verb. Present: bevo, bevi, beve, beviamo, bevete, bevono.\nFrom Latin 'bibere.'",
     example:"A: Cosa bevi?\nB: Bevo un'acqua naturale.",
     exampleSrc:"A: What are you drinking?\nB: I am drinking still water.",
     funFact:"'Bere' is very irregular: the root changes from 'ber-' to 'bev-' in conjugation. Latin 'bibere' also gave English 'beverage,' 'imbibe,' and the Italian word 'bibita' (soft drink)."},

    {type:"teach", trg:"dormire", src:"to sleep", pos:"verb", gender:null,
     note:"Regular -ire verb. 'Dormo' = I sleep.\nFrom Latin 'dormire.'",
     example:"A: A che ora dormi?\nB: Di solito dormo alle undici.",
     exampleSrc:"A: What time do you sleep?\nB: I usually sleep at eleven.",
     funFact:"English 'dormitory,' 'dormant,' and 'dormouse' all come from Latin 'dormire.' Italians value their sleep. The afternoon riposo (rest) is still observed in smaller towns, especially in the south."},

    {type:"teach", trg:"giocare", src:"to play", pos:"verb", gender:null,
     note:"Regular -are verb. 'Gioco' = I play.\nUsed for games and sports. For instruments: 'suonare.'",
     example:"A: I bambini giocano in giardino.\nB: Che bello!",
     exampleSrc:"A: The children are playing in the garden.\nB: How nice!",
     funFact:"Italian splits 'play' into two verbs: 'giocare' (games, sports) and 'suonare' (instruments). English uses one word for both. 'Giocare a calcio' (play soccer) but 'suonare il piano' (play piano)."},

    {type:"teach", trg:"guardare", src:"to watch / to look at", pos:"verb", gender:null,
     note:"Regular -are verb. 'Guardo la TV' = I watch TV.\nFrom Germanic 'wardon' (to guard, to watch).",
     example:"A: Cosa guardi?\nB: Guardo un film con la famiglia.",
     exampleSrc:"A: What are you watching?\nB: I am watching a movie with the family.",
     funFact:"From Germanic 'wardon,' the same root as English 'guard' and 'ward.' The connection: watching and guarding both involve keeping your eyes on something. Italian absorbed many Germanic words during the barbarian migrations."},

    {type:"teach", trg:"aiutare", src:"to help", pos:"verb", gender:null,
     note:"Regular -are verb. 'Aiuto!' = Help! (as an exclamation).\nFrom Latin 'adiutare.'",
     example:"A: Puoi aiutare la nonna?\nB: Certo! Cosa devo fare?",
     exampleSrc:"A: Can you help grandmother?\nB: Of course! What should I do?",
     funFact:"'Aiuto!' as an exclamation means 'Help!' and is instantly understood. From Latin 'adiutare' (to assist), which also gave English 'aid' (through French). The root 'iuv-' means to give pleasure or assistance."},

    {type:"teach", trg:"preparare", src:"to prepare", pos:"verb", gender:null,
     note:"Regular -are verb. 'Preparare la cena' = to prepare dinner.\nFrom Latin 'praeparare' (to make ready before).",
     example:"A: Chi prepara la cena?\nB: Stasera preparo io!",
     exampleSrc:"A: Who is preparing dinner?\nB: Tonight I am preparing it!",
     funFact:"'Preparare' is used constantly in Italian family life: preparare la colazione (make breakfast), preparare i bambini (get the kids ready), prepararsi (get yourself ready). The reflexive form adds 'oneself.'"},

    {type:"teach", trg:"insegnare", src:"to teach", pos:"verb", gender:null,
     note:"Regular -are verb. 'Insegno italiano' = I teach Italian.\nFrom Latin 'insignare' (to mark, to show).",
     example:"A: La nonna insegna a cucinare.\nB: La sua cucina e la migliore!",
     exampleSrc:"A: Grandmother teaches cooking.\nB: Her cooking is the best!",
     funFact:"From Latin 'in' + 'signum' (mark/sign). To teach is literally 'to put signs into' someone. English 'insignia' and 'sign' share this root. In Italy, grandmothers passing down recipes is a sacred tradition."},

    {type:"teach", trg:"imparare", src:"to learn", pos:"verb", gender:null,
     note:"Regular -are verb. 'Imparo l'italiano' = I learn Italian.\nFrom Latin 'imparare' (to acquire).",
     example:"A: Cosa impari a scuola?\nB: Imparo la matematica e l'italiano.",
     exampleSrc:"A: What do you learn at school?\nB: I learn math and Italian.",
     funFact:"Latin 'imparare' originally meant 'to get, to acquire.' Learning is acquiring knowledge. The opposite 'dimenticare' (to forget) literally means 'to remove from the mind' (dis + mente)."},

    {type:"teach", trg:"volere bene", src:"to love (family/friends)", pos:"verb", gender:null,
     note:"Literally: 'to want good (for someone).' Used for family/friend love.\n'Ti voglio bene' = I love you (non-romantic).",
     example:"A: Ti voglio bene, mamma!\nB: Anche io ti voglio bene!",
     exampleSrc:"A: I love you, mom!\nB: I love you too!",
     funFact:"Italian has two 'I love you': 'ti amo' (romantic love) and 'ti voglio bene' (family/friend love). Using 'ti amo' with family feels too intense. 'Ti voglio bene' literally means 'I want good for you.'"},

    {type:"teach", trg:"assomigliare", src:"to look like / to resemble", pos:"verb", gender:null,
     note:"Reflexive: 'assomigliarsi' (to resemble each other).\n'Assomigli a tuo padre' = You look like your father.",
     example:"A: A chi assomigli?\nB: Assomiglio a mia madre.",
     exampleSrc:"A: Who do you look like?\nB: I look like my mother.",
     funFact:"From 'somigliare' with intensifying prefix 'a-.' Family resemblance is a frequent topic in Italian conversation. 'E tutto suo padre' (he is all his father) or 'e la copia di sua madre' (she is a copy of her mother) are common expressions."},

    {type:"teach", trg:"preoccuparsi", src:"to worry (reflexive)", pos:"verb", gender:null,
     note:"Reflexive: mi preoccupo (I worry), ti preoccupi (you worry).\n'Non ti preoccupare!' = Don't worry!",
     example:"A: Mia madre si preoccupa sempre.\nB: Le mamme italiane si preoccupano per tutto!",
     exampleSrc:"A: My mother always worries.\nB: Italian moms worry about everything!",
     funFact:"The stereotype of the Italian mother who worries constantly ('la mamma apprensiva') is rooted in reality. 'Hai mangiato?' (Have you eaten?) is the classic Italian mother question, asked regardless of age."},

    {type:"teach", trg:"insieme", src:"together", pos:"adv", gender:null,
     note:"From Latin 'insimul' (at the same time, together).\n'Stare insieme' = to be together / to be a couple.",
     example:"A: Mangiamo insieme stasera?\nB: Si, tutta la famiglia insieme!",
     exampleSrc:"A: Shall we eat together tonight?\nB: Yes, the whole family together!",
     funFact:"'Insieme' is key to Italian family culture. Sunday lunch together, holidays together, vacations together. 'Stare insieme' also means 'to date' (to be together as a couple). Context reveals the meaning."},

    {type:"teach", trg:"tanto", src:"so much / a lot", pos:"adv", gender:null,
     note:"As adverb: 'ti voglio tanto bene' (I love you so much).\nAs adjective: 'tante persone' (many people).",
     example:"A: Quanto vuoi bene alla nonna?\nB: Tanto! La adoro!",
     exampleSrc:"A: How much do you love grandmother?\nB: So much! I adore her!",
     funFact:"'Tanto' is extremely versatile: as an adverb (tanto bello = so beautiful), adjective (tante volte = many times), or pronoun (non ho fatto tanto = I did not do much). One of Italian's most flexible words."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'I love you' alla mamma in italiano?",
     opts:["Ti voglio bene","Ti amo","Ti piaccio","Ti aiuto"],
     ans:"Ti voglio bene",
     hint:"Italian distinguishes romantic and family love. The family version literally means 'I want good for you.'"},

    {type:"fb", s:"I bambini {1} in giardino.",
     a:["giocano"],
     opts:["giocano","dormono","mangiano","guardano"],
     hint:"The children are having fun with games outdoors. This is the third person plural of 'giocare.'",
     sSrc:"The children are {1} in the garden."},

    {type:"mc", q:"What is the difference between 'giocare' and 'suonare'?",
     opts:["Suonare is for children only","Giocare = games/sports, suonare = instruments","They are identical","Giocare is formal"],
     ans:"Giocare = games/sports, suonare = instruments",
     hint:"Italian splits the English verb 'play' into two separate verbs based on what you are playing."},

    {type:"fb", s:"A chi {1}? Io? A mia madre.",
     a:["assomigli"],
     opts:["assomigli","aiuti","impari","guardi"],
     hint:"This verb asks who you resemble in appearance. A common question about family likeness.",
     sSrc:"Who do you {1}? Me? My mother."},

    {type:"match", pairs:[
      {trg:"mangiare", src:"to eat"},
      {trg:"bere", src:"to drink"},
      {trg:"dormire", src:"to sleep"},
      {trg:"giocare", src:"to play"},
      {trg:"aiutare", src:"to help"}
    ,{trg:"tanto",src:"so much / a lot"}]},

    {type:"mc", q:"What is the classic Italian mother question?",
     opts:["Come stai? (How are you?)","Hai dormito? (Did you sleep?)","Hai mangiato? (Have you eaten?)","Dove vai? (Where are you going?)"],
     ans:"Hai mangiato? (Have you eaten?)",
     hint:"Food is central to Italian motherly love. This question is asked regardless of the child's age."},

    {type:"fb", s:"Mangiamo {1} stasera. Tutta la famiglia!",
     a:["insieme"],
     opts:["insieme","sempre","tanto","bene"],
     hint:"This adverb means 'together,' a core value in Italian family culture. Sunday lunch uses this concept.",
     sSrc:"Let's eat {1} tonight. The whole family!"},

    {type:"mc", q:"What does 'imparare' mean?",
     opts:["To teach","To play","To read","To learn"],
     ans:"To learn",
     hint:"From Latin 'imparare' (to acquire). The opposite of 'dimenticare' (to forget). Think: acquiring knowledge."}
  ,{type:"match",pairs:[{trg:"guardare",src:"to watch / to look at"},{trg:"preparare",src:"to prepare"},{trg:"insegnare",src:"to teach"},{trg:"imparare",src:"to learn"},{trg:"volere bene",src:"to love (family/friends)"},{trg:"preoccuparsi",src:"to worry (reflexive)"}]}]
};
export default BATCH2_U03_L2;
