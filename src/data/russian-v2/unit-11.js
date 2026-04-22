// Russian V2 Unit 11. Hobbies and Sports (A2.2)
const UNIT_11 = {n:11, lang:"ru", srcLang:"en", track:"v2", title:"Хобби", sub:"Hobbies and Sports",
 icon:"⚽", level:"A2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u11l1", title:"Что любишь делать?", icon:"❤️", xp:15, board:true, steps:[

{type:"intro", title:"What Do You Like to Do?",
 desc:"Describe hobbies and interests. Russian uses любить (love) + infinitive for 'to like doing X', one of the first common verbs learners encounter.",
 goals:["Use любить + infinitive","Name common activities","Ask about interests"]},

{type:"teach", trg:"хобби", src:"hobby", pos:"noun", gender:"n",
 note:"Indeclinable neuter.\nNo change in any case.",
 example:"A: Какое у тебя хобби?\nB: Рисование.",
 exampleSrc:"A: What's your hobby?\nB: Drawing.",
 funFact:"Хобби entered Russian via English in Soviet times. Indeclinable like кофе and метро, foreign words that resist Russian endings. Used the same in all cases."},

{type:"teach", trg:"любить", src:"to love / like", pos:"verb", gender:null,
 note:"Imperfective.\nЯ люблю, ты любишь, он любит.",
 example:"A: Что ты любишь?\nB: Я люблю спорт.",
 exampleSrc:"A: What do you like?\nB: I love sport.",
 funFact:"Любить covers both 'love' (intense) and 'like' (mild). Unlike English, no separate 'like' verb, context clarifies intensity. Very versatile verb."},

{type:"teach", trg:"нравиться", src:"to please (be liked by)", pos:"verb", gender:null,
 note:"Backward verb: subject is thing liked, object is person.\nТебе нравится = You like (it pleases you).",
 example:"A: Тебе нравится футбол?\nB: Очень.",
 exampleSrc:"A: Do you like football?\nB: Very much.",
 funFact:"Нравиться vs любить: нравиться for activities/things that please, любить for deep affection. 'Мне нравится футбол' (I like football) vs 'Я люблю футбол' (I love football)."},

{type:"teach", trg:"спорт", src:"sport", pos:"noun", gender:"m",
 note:"Masculine. Singular only for 'sport as category.'\nДля individual sports use specific names.",
 example:"A: Ты занимаешься спортом?\nB: Да, бегом.",
 exampleSrc:"A: Do you do sports?\nB: Yes, running.",
 funFact:"'Заниматься спортом' (lit. occupy oneself with sport) is the phrase. Instrumental case after заниматься: я занимаюсь спортом (I engage in sport)."},

{type:"teach", trg:"футбол", src:"football (soccer)", pos:"noun", gender:"m",
 note:"Masculine. International word.\nВ России футбол = soccer (not American football).",
 example:"A: Ты любишь футбол?\nB: Да, я люблю футбол.",
 exampleSrc:"A: Do you like football?\nB: Yes, I love football.",
 funFact:"'Болеть за X' means 'to root for X.' Classic Russian fan phrase. Spartak, CSKA, Dynamo are major Moscow football clubs with huge followings."},

{type:"teach", trg:"теннис", src:"tennis", pos:"noun", gender:"m",
 note:"Masculine. International.\nBig sport in Russia post-Soviet era.",
 example:"A: Ты любишь теннис?\nB: Да, я люблю теннис.",
 exampleSrc:"A: Do you like tennis?\nB: Yes, I love tennis.",
 funFact:"Russian tennis stars emerged dramatically post-1990s: Кафельников, Мыскина, Сафин, Шарапова. Russia became tennis powerhouse almost overnight."},

{type:"teach", trg:"книга", src:"book", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: книги.",
 example:"A: Ты любишь книги?\nB: Да, я люблю книги.",
 exampleSrc:"A: Do you like books?\nB: Yes, I love books.",
 funFact:"Russia has a deep book culture. 'Самая читающая страна' (the most-reading country) was the USSR's claim, still partly true. Metro riders reading books is common."},

{type:"teach", trg:"фильм", src:"film / movie", pos:"noun", gender:"m",
 note:"Masculine. From English.\nRussian alternative: кинофильм.",
 example:"A: Какой фильм вы смотрели?\nB: 'Брат', русский фильм.",
 exampleSrc:"A: What movie did you watch?\nB: 'Brother', a Russian film.",
 funFact:"Russian film industry produces ~100 films/year. Classic Soviet films (Ирония судьбы, Москва слезам не верит) remain culturally central. Watched every New Year by tradition."},

{type:"teach", trg:"музыка", src:"music", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nКлассическая музыка, рок-музыка, types.",
 example:"A: Ты любишь музыку?\nB: Да, я люблю музыку.",
 exampleSrc:"A: Do you like music?\nB: Yes, I love music.",
 funFact:"Russia is world-famous for classical music: Tchaikovsky, Rachmaninov, Shostakovich. Every major city has filharmonia (concert halls). Contemporary Russian rock thrives too."},

{type:"tip", title:"Love, Like, Please: Three Verbs",
 text:"Russian uses three key verbs for liking/loving:\n\nЛЮБИТЬ, active verb.\nSubject is the person who loves.\nЯ люблю классическую музыку. (I love classical music.)\nStrong preference or genuine love.\n\nНРАВИТЬСЯ, backward verb.\nSubject is the thing liked.\nМне нравится эта песня. (This song pleases me / I like this song.)\nMilder, more casual.\n\nОБОЖАТЬ, very strong love.\nActive like любить but stronger.\nЯ обожаю шоколад. (I adore chocolate.)\n\nWhen to use which:\nДля general casual liking: нравиться (more common).\nДля deep affection/strong preference: любить.\nДля intense enthusiasm: обожать.",
 deepDive:{title:"Playing Sports vs Playing Instruments",
  text:"Russian uses different constructions for different kinds of 'playing.' Sports: 'играть в' + accusative (играть в футбол). Instruments: 'играть на' + prepositional (играть на гитаре). Never confused in Russian but a common learner error: 'играть в гитаре' would sound wrong."}},

{type:"mc", q:"Which is correct 'I love reading'?",
 opts:["Я люблю читать","Я нравится читать","Я читать люблю","Я люблю читаю"],
 ans:"Я люблю читать",
 hint:"Любить + infinitive for 'love doing X.' Infinitive, not conjugated."},

{type:"mc", q:"How do you express mild liking (like, not love)?",
 opts:["любить","нравиться","обожать","смотреть"],
 ans:"нравиться",
 hint:"The 'backward' verb is for casual, everyday liking."},

{type:"fb", s:"A: Тебе {1} этот фильм?\nB: Да, очень интересный.",
 a:["нравится"],
 opts:["нравится","любит","любишь","обожает"],
 hint:"Subject is 'фильм' (singular), dative 'тебе', mild liking.",
 sSrc:"A: Do you like this movie?\nB: Yes, very interesting."},

{type:"match", pairs:[
  {trg:"хобби", src:"hobby"},
  {trg:"любить", src:"to love"},
  {trg:"спорт", src:"sport"},
  {trg:"книга", src:"book"},
  {trg:"фильм", src:"film"}
]}
]},

{id:"ruv2_u11l2", title:"Действия", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Actions and Activities",
 desc:"Common activity verbs. Master read, watch, listen, play, run, swim, the building blocks of describing hobbies.",
 goals:["Use action verbs in present","Describe hobby activities","Pair verbs with appropriate nouns"]},

{type:"teach", trg:"читать", src:"to read", pos:"verb", gender:null,
 note:"Imperfective. Pair: прочитать.\nЧитаю, читаешь, читает, читаем, читаете, читают.",
 example:"A: Ты читаешь книги?\nB: Да, я читаю книги.",
 exampleSrc:"A: Do you read books?\nB: Yes, I read books.",
 funFact:"Reading culture in Russia is strong. 'Читать в метро' is such an iconic image that when smartphones replaced books on Moscow metro, many Russians lamented the change."},

{type:"teach", trg:"смотреть", src:"to watch / look", pos:"verb", gender:null,
 note:"Imperfective. Pair: посмотреть.\nSpecial conjugation: смотрю, смотришь, смотрит.",
 example:"A: Ты смотришь фильм?\nB: Да, смотрю.",
 exampleSrc:"A: Are you watching a movie?\nB: Yes, watching.",
 funFact:"Смотреть also means 'to look' (directional). 'Смотреть в окно' = look out window. 'Смотреть телевизор' = watch TV. Same verb, different collocations."},

{type:"teach", trg:"слушать", src:"to listen", pos:"verb", gender:null,
 note:"Imperfective. Pair: послушать.\nТакая же -ать conjugation.",
 example:"A: Что слушаешь?\nB: Классическую музыку.",
 exampleSrc:"A: What are you listening to?\nB: Classical music.",
 funFact:"Слушать vs слышать: активное vs пассивное listening. Слушать = deliberate listening (to music). Слышать = hearing (ambient). Russian distinguishes."},

{type:"teach", trg:"играть", src:"to play", pos:"verb", gender:null,
 note:"Imperfective. Два pattern: играть в (sports), играть на (instruments).\n",
 example:"A: Ты играешь в футбол?\nB: Да, я играю в футбол.",
 exampleSrc:"A: Do you play football?\nB: Yes, I play football.",
 funFact:"Sports use 'в': играть в футбол, в теннис, в шахматы. Musical instruments use 'на': играть на гитаре, на пианино. Consistent distinction across Russian."},

{type:"teach", trg:"бегать", src:"to run (habitual)", pos:"verb", gender:null,
 note:"Multi-directional: habitual, going back and forth.\nOne-way pair: бежать (running right now).",
 example:"A: Ты бегаешь?\nB: Да, я бегаю.",
 exampleSrc:"A: Do you run?\nB: Yes, I run.",
 funFact:"Бегать (habitual, multi-directional) vs бежать (unidirectional, this moment). 'Я бегаю по утрам' (I run mornings, habit). 'Я бегу в парк' (I'm running to park, this specific trip)."},

{type:"teach", trg:"плавать", src:"to swim (habitual)", pos:"verb", gender:null,
 note:"Multi-directional: swimming as activity.\nOne-way: плыть (swimming right now in one direction).",
 example:"A: Ты плаваешь?\nB: Да, я плаваю.",
 exampleSrc:"A: Do you swim?\nB: Yes, I swim.",
 funFact:"Плавать/плыть pair follows the same pattern as бегать/бежать. Russian has ~14 such verb pairs for motion, making motion verbs infamously complex for learners."},

{type:"teach", trg:"рисовать", src:"to draw", pos:"verb", gender:null,
 note:"Imperfective. Pair: нарисовать.\n-овать verb, special conjugation.",
 example:"A: Ты рисуешь?\nB: Иногда, для удовольствия.",
 exampleSrc:"A: Do you draw?\nB: Sometimes, for fun.",
 funFact:"Verbs ending in -овать have vowel change: рисовать → рисую (я form drops 'ова' and adds 'у'). Common Russian pattern: требовать → требую, использовать → использую."},

{type:"teach", trg:"гулять", src:"to walk / stroll", pos:"verb", gender:null,
 note:"Imperfective. Pair: погулять.\nEvening/leisurely walks.",
 example:"A: Ты гуляешь?\nB: Да, я гуляю.",
 exampleSrc:"A: Are you walking?\nB: Yes, I'm walking.",
 funFact:"Гулять is leisurely, with no destination. Different from идти (going somewhere). 'Погулять с собакой' = walk the dog. 'Просто гулять' = wandering pleasantly."},

{type:"teach", trg:"танцевать", src:"to dance", pos:"verb", gender:null,
 note:"Imperfective. Pair: потанцевать.\n-евать verb type.",
 example:"A: Ты танцуешь?\nB: Только на свадьбах.",
 exampleSrc:"A: Do you dance?\nB: Only at weddings.",
 funFact:"Russia has rich dance tradition: Russian ballet worldwide-famous, народные танцы (folk dances), современные танцы (modern). Most Russians at least take beginner ballroom lessons for events."},

{type:"tip", title:"Hobby Verbs: What to Remember",
 text:"Russian hobby verbs work in patterns:\n\nACTIVITY + DIRECT OBJECT:\nчитать книгу (read a book)\nсмотреть фильм (watch a movie)\nслушать музыку (listen to music)\n\nACTIVITY + 'В' + ACCUSATIVE (sports, games):\nиграть в футбол (play football)\nиграть в шахматы (play chess)\n\nACTIVITY + 'НА' + PREPOSITIONAL (instruments):\nиграть на гитаре (play guitar)\nиграть на пианино (play piano)\n\nMOTION VERB PAIRS (multi vs uni):\nбегать (habitual running) vs бежать (running now)\nходить (habitual walking) vs идти (walking now)\nлетать vs лететь (flying)\n\nSolid verb practice comes from chaining them with time/frequency:\nЯ часто читаю книги. (I often read books.)\nОна танцует по вечерам. (She dances evenings.)",
 icon:"🎨"},

{type:"mc", q:"How do you say 'I play football' in Russian?",
 opts:["Я играю в футбол","Я играю на футбол","Я играю с футбол","Я играю футбол"],
 ans:"Я играю в футбол",
 hint:"Sports use 'в' (in) + accusative case. Instruments use 'на' (on) + prepositional."},

{type:"mc", q:"Which verb means 'to run' (as a habit, not right now)?",
 opts:["бежать","бегать","ходить","гулять"],
 ans:"бегать",
 hint:"Multi-directional (habitual) vs unidirectional (right now): the -а ending distinguishes."},

{type:"fb", s:"A: Ты {1} на гитаре?\nB: Да, три года.",
 a:["играешь"],
 opts:["играешь","игру","играет","игра"],
 hint:"2nd person singular of играть. Used with 'на' + instrument.",
 sSrc:"A: Do you play guitar?\nB: Yes, for three years."},

{type:"fb", s:"A: Что любишь делать в выходные?\nB: {1} в парке.",
 a:["Гулять"],
 opts:["Гулять","Идти","Бежать","Плавать"],
 hint:"Weekend activity in a park, leisurely walking.",
 sSrc:"A: What do you like to do on weekends?\nB: Walk in the park."},

{type:"match", pairs:[
  {trg:"читать", src:"to read"},
  {trg:"смотреть", src:"to watch"},
  {trg:"слушать", src:"to listen"},
  {trg:"играть", src:"to play"},
  {trg:"гулять", src:"to stroll"}
]}
]},

{id:"ruv2_u11l3", title:"Интересно", icon:"✨", xp:15, board:true, steps:[

{type:"intro", title:"It's Interesting",
 desc:"Describing how activities feel. Russian uses impersonal forms for emotions and opinions extensively.",
 goals:["Express interest with интересно","Describe feelings impersonally","Use скучно, весело, легко, трудно"]},

{type:"teach", trg:"интересно", src:"(it is) interesting", pos:"adv", gender:null,
 note:"Impersonal form.\nWith dative: 'Мне интересно' (I find it interesting).",
 example:"A: Тебе интересно?\nB: Очень интересно!",
 exampleSrc:"A: Is it interesting to you?\nB: Very interesting!",
 funFact:"Russian 'интересно' is multipurpose: reaction to news ('oh, interesting'), describing activity ('it's interesting'), expressing curiosity ('I wonder what that is')."},

{type:"teach", trg:"скучно", src:"(it is) boring", pos:"adv", gender:null,
 note:"Impersonal. Opposite of интересно.\n'Мне скучно' = I'm bored.",
 example:"A: Почему грустишь?\nB: Мне скучно.",
 exampleSrc:"A: Why are you sad?\nB: I'm bored.",
 funFact:"'Мне скучно' (I'm bored), classic child's complaint in Russian. The Soviet response often: 'поди почитай книгу' (go read a book). Cultural mandate against idleness."},

{type:"teach", trg:"весело", src:"(it is) fun / merry", pos:"adv", gender:null,
 note:"Impersonal.\nНам весело = We're having fun.",
 example:"A: Весело было?\nB: Очень! Смеялись всю ночь.",
 exampleSrc:"A: Was it fun?\nB: Very! Laughed all night.",
 funFact:"From 'весёлый' (cheerful). Russians traditionally say 'весело' at parties and gatherings. Often paired with 'шумно' (noisy), the right ingredients for a Russian party."},

{type:"teach", trg:"грустно", src:"(it is) sad", pos:"adv", gender:null,
 note:"Impersonal.\nMне грустно = I'm sad.",
 example:"A: Почему грустно?\nB: Друзья уехали.",
 exampleSrc:"A: Why sad?\nB: Friends left.",
 funFact:"Russian cultivates a rich emotional vocabulary. 'Грустно' is specifically 'melancholy sad' vs 'тоскливо' (melancholy sad with yearning) vs 'печально' (deeper sadness)."},

{type:"teach", trg:"легко", src:"(it is) easy", pos:"adv", gender:null,
 note:"Impersonal.\n'Легко сказать' = easy to say.",
 example:"A: Русский язык легко?\nB: Не очень.",
 exampleSrc:"A: Is Russian easy?\nB: Not very.",
 funFact:"'Легко сказать' (easy to say) is a rueful Russian expression. Also 'на лёгкое настроение' (lightly), an idiom for taking things easy."},

{type:"teach", trg:"трудно", src:"(it is) difficult", pos:"adv", gender:null,
 note:"Impersonal. Opposite of легко.\nМне трудно = It's hard for me.",
 example:"A: Учить русский трудно?\nB: Иногда да.",
 exampleSrc:"A: Is learning Russian hard?\nB: Sometimes yes.",
 funFact:"Трудно comes from труд (labor). 'Трудно' literally 'laboriously.' Russian students say 'мне трудно' (it's hard for me) about math, physics, literature, the honest admission is culturally OK."},

{type:"teach", trg:"можно", src:"(it is) allowed / possible", pos:"adv", gender:null,
 note:"Impersonal. Permission modal.\n'Можно мне X?' = May I have X?",
 example:"A: Можно войти?\nB: Пожалуйста.",
 exampleSrc:"A: Can I come in?\nB: Please (do).",
 funFact:"'Можно' (possible/allowed) vs 'нельзя' (forbidden/impossible). These impersonal modals are very common: 'здесь можно курить?' (Is smoking allowed here?)."},

{type:"teach", trg:"нельзя", src:"(it is) not allowed / impossible", pos:"adv", gender:null,
 note:"Opposite of можно.\nAlways negative, can't combine with не.",
 example:"A: Можно здесь?\nB: Нет, нельзя.",
 exampleSrc:"A: Can I here?\nB: No, it's forbidden.",
 funFact:"Нельзя = 'impossible/forbidden.' Never use не нельзя, it's a double-negative failure. Russians use нельзя as strong prohibition or absolute impossibility."},

{type:"tip", title:"Impersonal Emotion Phrases",
 text:"Russian overwhelmingly uses impersonal structures for emotions and permissions.\n\nSTRUCTURE: (Dative pronoun) + adverb:\nМне интересно. (I find it interesting.)\nТебе скучно? (Are you bored?)\nЕму весело. (He's having fun.)\n\nADVERBS you'll use:\nинтересно ↔ скучно\nвесело ↔ грустно\nлегко ↔ трудно\nприятно (pleasant) ↔ неприятно\nстрашно (scary)\nжарко ↔ холодно\nможно ↔ нельзя\n\nCOMPARE WITH ENGLISH:\n'I'm bored' → 'To-me boring' = Мне скучно.\n'We're happy' → 'To-us fun' = Нам весело.\n\nThis is fundamental Russian sentence structure for states/feelings. Master it.",
 icon:"🎭"},

{type:"mc", q:"How do you say 'I'm bored' properly in Russian?",
 opts:["Мне скучно","Я скучаю","Я скучный","Я есть скучно"],
 ans:"Мне скучно",
 hint:"Impersonal + dative. The state happens TO you, not you ARE it."},

{type:"mc", q:"Which form is impossible in Russian?",
 opts:["Мне весело","Не нельзя","Можно","Нельзя"],
 ans:"Не нельзя",
 hint:"Нельзя is already negative. Double negatives are allowed in Russian but not this one."},

{type:"fb", s:"A: Как русский язык?\nB: Не {1}, но нужно учить.",
 a:["легко"],
 opts:["легко","трудно","скучно","интересно"],
 hint:"The 'but need to study' clue suggests a comment about difficulty. 'Не [blank]' = 'not [blank].'",
 sSrc:"A: How's Russian?\nB: Not easy, but need to study."},

{type:"fb", s:"A: Почему никого нет?\nB: Всем {1}, они ушли.",
 a:["скучно"],
 opts:["скучно","интересно","весело","легко"],
 hint:"'Everyone left', what was the reason? The opposite of interesting.",
 sSrc:"A: Why's nobody here?\nB: Everyone was bored, they left."},

{type:"match", pairs:[
  {trg:"интересно", src:"interesting"},
  {trg:"скучно", src:"boring"},
  {trg:"весело", src:"fun"},
  {trg:"грустно", src:"sad"},
  {trg:"трудно", src:"difficult"}
]}
,{type:"match",pairs:[{trg:"теннис",src:"tennis"},{trg:"музыка",src:"music"},{trg:"плавать",src:"to swim (habitual)"},{trg:"рисовать",src:"to draw"},{trg:"танцевать",src:"to dance"}]}]}

,

{id:"ruv2_u11l_a2_clothes_objects", title:"Одежда и вещи", icon:"🧥", xp:15, board:true, steps:[

{type:"intro", title:"Clothes and Everyday Objects",
 desc:"Essential A2 vocabulary: winter clothing items, household objects, and two key action verbs. Russian nouns have different endings for soft vs hard stems, this lesson covers both.",
 goals:["Name key clothing items","Use household object words","Use открывать and закрывать in context"]},

{type:"teach", trg:"куртка", src:"jacket / short coat", pos:"noun", gender:"f",
 note:"Feminine, ends in -а.\nPlural: куртки.",
 example:"A: Где моя куртка?\nB: Куртка на стуле.",
 exampleSrc:"A: Where is my jacket?\nB: The jacket is on the chair.",
 funFact:"Куртка entered Russian from German 'Kurtke' or French 'courte veste.' In Russia it usually means a practical, padded or windproof outdoor jacket, lighter than пальто, heavier than a shirt."},

{type:"teach", trg:"шапка", src:"winter hat / beanie", pos:"noun", gender:"f",
 note:"Feminine, ends in -а.\nA must-have in Russian winters.",
 example:"A: Холодно. Надень шапку!\nB: Да, сейчас надену.",
 exampleSrc:"A: It's cold. Put on your hat!\nB: Yes, I'll put it on now.",
 funFact:"In Russia, not wearing a шапка in winter is considered reckless. Grandmothers famously remind everyone to wear one. The phrase 'надень шапку' (put on your hat) is almost a cultural institution."},

{type:"teach", trg:"пальто", src:"coat (overcoat)", pos:"noun", gender:"n",
 note:"Indeclinable neuter.\nNo change in any case: пальто, пальто, пальто...",
 example:"A: Это твоё пальто?\nB: Да, моё пальто.",
 exampleSrc:"A: Is this your coat?\nB: Yes, my coat.",
 funFact:"Пальто is borrowed from French 'paletot.' Indeclinable because it entered Russian after the case-ending system was set. Like метро and кофе, it resists Russian morphology entirely."},

{type:"teach", trg:"сумка", src:"bag / handbag", pos:"noun", gender:"f",
 note:"Feminine, ends in -а.\nPlural: сумки. Genitive singular: сумки.",
 example:"A: Где ключ?\nB: В сумке.",
 exampleSrc:"A: Where's the key?\nB: In the bag.",
 funFact:"Сумка is the everyday word for any carried bag, handbag, shopping bag, school bag. 'Дамская сумка' = ladies' handbag. 'Рюкзак' is specifically a backpack, while сумка is shoulder or hand-held."},

{type:"teach", trg:"дверь", src:"door", pos:"noun", gender:"f",
 note:"Feminine, soft ending (-ь).\nPrepositional: двери. Plural: двери.",
 example:"A: Открой дверь, пожалуйста.\nB: Хорошо, открываю.",
 exampleSrc:"A: Open the door, please.\nB: OK, I'm opening it.",
 funFact:"Дверь is feminine despite ending in -ь (a soft-sign ending that can be either gender). Other feminine -ь nouns: кровать (bed), площадь (square), ночь (night). The gender must be memorised."},

{type:"teach", trg:"ключ", src:"key", pos:"noun", gender:"m",
 note:"Masculine, ends in consonant.\nPlural: ключи. Genitive: ключа.",
 example:"A: Ты видел мой ключ?\nB: Ключ в сумке.",
 exampleSrc:"A: Did you see my key?\nB: The key is in the bag.",
 funFact:"Ключ also means 'spring' (water source) and 'clue/key' in abstract sense (ключ к решению = key to the solution). Russian literature loves double meanings of ключ in titles and metaphors."},

{type:"teach", trg:"кровать", src:"bed", pos:"noun", gender:"f",
 note:"Feminine, soft ending (-ь).\nПод кроватью (under the bed) uses instrumental.",
 example:"A: Где ключ?\nB: Под кроватью.",
 exampleSrc:"A: Where's the key?\nB: Under the bed.",
 funFact:"Кровать is borrowed from Greek 'krabbatos' via Old Church Slavonic. The old native Slavic word was 'ложе' (now literary/poetic). Кровать became the standard everyday word."},

{type:"teach", trg:"стул", src:"chair", pos:"noun", gender:"m",
 note:"Masculine. Plural: стулья (irregular).\nDo not confuse with кресло (armchair).",
 example:"A: Где куртка?\nB: Куртка на стуле.",
 exampleSrc:"A: Where's the jacket?\nB: The jacket is on the chair.",
 funFact:"Стул has an irregular plural стулья, from an old collective form. Similar irregular plurals: брат/братья, дерево/деревья, лист/листья. These follow a pattern of nouns with animate or countable collective meanings."},

{type:"teach", trg:"открывать", src:"to open", pos:"verb", gender:null,
 note:"Imperfective. Pair: открыть.\nОткрываю, открываешь, открывает.",
 example:"A: Ты открываешь дверь?\nB: Да, открываю.",
 exampleSrc:"A: Are you opening the door?\nB: Yes, I'm opening it.",
 funFact:"Открывать/открыть (open) and закрывать/закрыть (close) are an inseparable pair. Prefix 'от-' = separation (open), 'за-' = covering/sealing (close). The root 'крыть' means 'to cover.'"},

{type:"teach", trg:"закрывать", src:"to close", pos:"verb", gender:null,
 note:"Imperfective. Pair: закрыть.\nЗакрываю, закрываешь, закрывает.",
 example:"A: Закрой дверь, холодно.\nB: Да, закрываю.",
 exampleSrc:"A: Close the door, it's cold.\nB: Yes, I'm closing it.",
 funFact:"Закрыть also means 'to close (a business/account)': магазин закрыт (the shop is closed). Same verb, different domain. 'Закрыто' on a shop sign means 'closed.' Very frequent in daily life."},

{type:"tip", title:"Soft-Sign Feminine Nouns",
 text:"Several key A2 nouns end in -ь (soft sign) and are FEMININE:\n\nдверь (door)\nкровать (bed)\nтетрадь (notebook)\nплощадь (square)\nночь (night)\n\nThey follow the third declension pattern:\nNOM: дверь\nGEN: двери\nDAT: двери\nACC: дверь\nINST: дверью\nPREP: двери\n\nNote the instrumental ends in -ью, unique to this group.\n\nDo NOT confuse with masculine soft-sign nouns:\nкарандаш (pencil) is masculine (ends in hard consonant)\nстуль is NOT a word, plural of стул is стулья.\n\nWhen you see -ь, check the dictionary gender, it is not predictable from the ending alone.",
 icon:"📚"},

{type:"mc", q:"Which noun is NOT feminine?",
 opts:["стул","дверь","кровать","куртка"],
 ans:"стул",
 hint:"Check the gender of each: three are feminine, one is masculine ending in a hard consonant."},

{type:"mc", q:"Which word means 'to open' in Russian?",
 opts:["закрывать","открывать","надевать","снимать"],
 ans:"открывать",
 hint:"Think of the prefix: 'от-' = away from / separation. Opening means separating something."},

{type:"fb", s:"A: Где ключ?\nB: В {1}.",
 a:["сумке"],
 opts:["сумке","сумка","сумку","сумкой"],
 hint:"Location 'in X' uses prepositional case. Feminine noun ending: -е.",
 sSrc:"A: Where's the key?\nB: In the bag."},

{type:"fb", s:"A: Холодно! {1} дверь!\nB: Хорошо.",
 a:["Закрой"],
 opts:["Закрой","Открой","Открывай","Закрывай"],
 hint:"It's cold, you want the door sealed, not opened. Imperative singular.",
 sSrc:"A: It's cold! Close the door!\nB: OK."},

{type:"fb", s:"A: Это твоё {1}?\nB: Да, я забыл в магазине.",
 a:["пальто"],
 opts:["пальто","куртка","шапка","сумка"],
 hint:"This item is indeclinable neuter and never changes form. Left behind in a shop.",
 sSrc:"A: Is this your coat?\nB: Yes, I left it at the shop."},

{type:"mc", q:"What is the plural of стул?",
 opts:["стулы","стули","стулья","стулов"],
 ans:"стулья",
 hint:"Стул follows an irregular plural pattern shared with брат (братья) and лист (листья)."},

{type:"mc", q:"Куртка на стуле, what case is стуле?",
 opts:["Nominative","Accusative","Genitive","Prepositional"],
 ans:"Prepositional",
 hint:"Location 'on X' with no movement uses the static locative case. На стуле = the jacket is resting there."},

{type:"match", pairs:[
 {trg:"куртка", src:"jacket"},
 {trg:"шапка", src:"winter hat"},
 {trg:"пальто", src:"overcoat"},
 {trg:"сумка", src:"bag"},
 {trg:"ключ", src:"key"}
]},

{type:"match", pairs:[
 {trg:"дверь", src:"door"},
 {trg:"кровать", src:"bed"},
 {trg:"стул", src:"chair"},
 {trg:"открывать", src:"to open"},
 {trg:"закрывать", src:"to close"}
]}

]}

]};
export default UNIT_11;
