// Russian Grammar Reference - CEFR A1-B2 (TRKI aligned)
export const RUSSIAN_GRAMMAR = {
  A1: [
    { title: "Cyrillic Alphabet", icon: "🔤", explanation: "**Russian uses the Cyrillic alphabet.**\n33 letters: 10 vowels, 21 consonants, 2 signs.\n\n**Letter categories:**\nSame-as-Latin: А, К, М, О, Т.\nFalse friends: В=V, Н=N, Р=R, С=S, У=U, Х=KH, Я=YA.\nNew: Б, Г, Д, Ж, З, И, Й, Ф, Ц, Ч, Ш, Щ, Э, Ю, Ы, Ь, Ъ.\n\n**Reading is phonetic once letters are learned.**", rules: [
      "VOWELS: А Е Ё И О У Ы Э Ю Я",
      "CONSONANTS: Б В Г Д Ж З К Л М Н П Р С Т Ф Х Ц Ч Ш Щ",
      "SIGNS: Ь (soft), Ъ (hard) — no sound alone"
    ], examples: ["Привет (privet) - hello", "Спасибо (spasibo) - thank you", "Москва (Moskva) - Moscow"]},
    { title: "Three Genders (m/f/n)", icon: "⚧", explanation: "**Russian nouns have 3 genders.**\nMasculine: ends in consonant (стол, дом).\nFeminine: ends in -а/-я (книга, мама).\nNeuter: ends in -о/-е (окно, море).\n\n**Some exceptions:**\n-ь endings are mixed: день (m), ночь (f).\n-а for males: папа, дедушка (grammatically masculine).", rules: [
      "Masculine: consonant ending",
      "Feminine: -а/-я ending",
      "Neuter: -о/-е ending",
      "-ь ending: memorize each word"
    ], examples: ["стол (m), мама (f), окно (n)", "папа (m despite -а)", "ночь (f), день (m)"]},
    { title: "Personal Pronouns", icon: "👤", explanation: "**Russian has 8 personal pronouns.**\nя (I), ты (you informal), он (he), она (she), оно (it), мы (we), вы (you formal/plural), они (they).\n\n**Ты vs Вы critical:**\nТы = friends, family, children.\nВы = strangers, elders, formal.", rules: [
      "я, ты, он, она, оно",
      "мы, вы, они",
      "Вы capitalized in formal writing"
    ], examples: ["Я русский. - I'm Russian.", "Ты студент? - Are you a student?", "Они друзья. - They are friends."]},
    { title: "Present Tense 'To Be' (Omitted)", icon: "🚫", explanation: "**Russian doesn't use 'to be' in present tense.**\n'Я студент' = I [am] a student.\nPresent tense links subject directly to predicate.\n\n**Past and future DO use 'быть':**\nЯ был студентом. (I was a student.)\nЯ буду студентом. (I will be a student.)", rules: [
      "Present: no verb",
      "Past: был/была/было/были",
      "Future: буду/будешь/будет..."
    ], examples: ["Я Анна. - I am Anna.", "Он врач. - He is a doctor.", "Это книга. - This is a book."]},
    { title: "Question Formation", icon: "❓", explanation: "**Russian questions often just change intonation.**\n'Ты студент.' (You're a student.)\n'Ты студент?' (Are you a student?)\n\n**Question words:**\nкто (who), что (what), где (where), когда (when), как (how), почему (why), какой (which).", rules: [
      "Yes/no: just raise intonation",
      "Wh-questions: use question word",
      "No auxiliary verb needed"
    ], examples: ["Как тебя зовут? - What's your name?", "Где ты живёшь? - Where do you live?", "Что это? - What is this?"]},
    { title: "Numbers and Age", icon: "🔢", explanation: "**Numbers 1-10 and age.**\nAge uses dative + number + год/года/лет.\n\n**'Мне 25 лет' = 'I'm 25.'**\nLiterally: 'to-me 25 years.' Russian is impersonal.\n\n**Year-word choice:**\nOne: год (1 год).\n2-4: года (3 года).\n5-20: лет (5 лет).", rules: [
      "Dative pronoun + number + год/года/лет",
      "1: год, 2-4: года, 5+: лет",
      "Exception: 11-19 all take лет"
    ], examples: ["Мне 25 лет. - I'm 25.", "Ей 21 год. - She's 21.", "Нам 32 года. - We're 32."]},
    { title: "У меня есть (to have)", icon: "🤲", explanation: "**Russian doesn't use 'иметь' (to have) in speech.**\nInstead: 'У + [genitive pronoun] + есть + [nominative noun]'.\n\n**Negative form omits есть:**\n'У меня есть кошка.' (I have a cat.)\n'У меня нет кошки.' (I don't have a cat.)\n\nNote: negative uses genitive of the thing.", rules: [
      "У + gen pronoun + есть + thing (nom)",
      "У меня, у тебя, у него, у неё, у нас, у вас, у них",
      "Negative: drop есть, thing in genitive"
    ], examples: ["У меня есть собака. - I have a dog.", "У неё нет времени. - She has no time.", "У нас есть план. - We have a plan."]},
    { title: "Basic Negation with не", icon: "🚫", explanation: "**Place 'не' before the verb or adjective.**\nЯ не знаю. (I don't know.)\nОн не русский. (He's not Russian.)\n\n**Double negatives are REQUIRED:**\nЯ ничего не знаю. (I don't know anything.)\nЯ никогда не видел. (I've never seen.)\nRussian requires negative pronoun + не.", rules: [
      "Не before verb/adj",
      "Negative pronouns (никто, ничто) REQUIRE не",
      "Double negation is grammatical"
    ], examples: ["Я не понимаю. - I don't understand.", "Никто не пришёл. - Nobody came.", "Я ничего не знаю. - I know nothing."]},
    { title: "This/That: Это/Этот/Эта/Это", icon: "👉", explanation: "**Это = this is (universal identifier).**\n'Это книга.' (This is a book.)\n'Это Анна.' (This is Anna.)\n\n**Этот/эта/это = this (adjective), agrees with gender.**\nЭтот стол (this table, m).\nЭта книга (this book, f).\nЭто окно (this window, n).\nЭти дома (these houses, pl).", rules: [
      "Это (neuter, universal) = this is",
      "Этот (m), эта (f), это (n), эти (pl)",
      "Adjective agreement with gender"
    ], examples: ["Это мой друг. - This is my friend.", "Этот дом большой. - This house is big.", "Эти книги интересные. - These books are interesting."]},
    { title: "Possessive Pronouns", icon: "🏷️", explanation: "**Russian possessives agree with possession's gender.**\nмой/моя/моё/мои (my).\nтвой/твоя/твоё/твои (your informal).\nнаш/наша/наше/наши (our).\nваш/ваша/ваше/ваши (your formal/pl).\n\n**3rd person possessives DON'T change:**\nего (his/its), её (her), их (their).\nFixed forms regardless of possessed thing.", rules: [
      "Мой book: agrees with book's gender",
      "Его/её/их: FIXED, never change",
      "Match possessive to what's owned"
    ], examples: ["Мой брат. - My brother.", "Моя мама. - My mom.", "Его машина. - His car.", "Её дом. - Her house."]},
    { title: "Greetings and Courtesy", icon: "👋", explanation: "**Informal vs formal greetings matter.**\nПривет! / Пока! — casual friends.\nЗдравствуйте! / До свидания! — formal/strangers.\n\n**Time-of-day greetings:**\nДоброе утро! (Good morning.)\nДобрый день! (Good afternoon.)\nДобрый вечер! (Good evening.)\n\n**Polite phrases:**\nСпасибо (thank you), пожалуйста (please/you're welcome), извините (sorry).", rules: [
      "Informal: Привет, Пока",
      "Formal: Здравствуйте, До свидания",
      "Спасибо → Пожалуйста pair",
      "Извините for all 'sorry' contexts"
    ], examples: ["Здравствуйте! - Hello (formal).", "Доброе утро! - Good morning!", "Спасибо большое. - Thank you very much."]},
    { title: "My Name Is...: Меня зовут", icon: "📛", explanation: "**Russian uses 'Me they-call [name]' for introductions.**\n'Меня зовут Дэвид.' (My name is David. Literally: 'Me they-call David.')\n\n**Impersonal construction — no subject.**\n\n**Asking name:**\nКак вас зовут? (formal)\nКак тебя зовут? (informal)", rules: [
      "Меня зовут + name",
      "Formal: Как вас зовут?",
      "Informal: Как тебя зовут?",
      "Impersonal structure"
    ], examples: ["Меня зовут Анна. - My name is Anna.", "Как вас зовут? - What's your name? (formal)", "Его зовут Иван. - His name is Ivan."]}
  ],
  A2: [
    { title: "Past Tense Formation", icon: "📅", explanation: "**Russian past is simple: drop -ть, add gender ending.**\n-л for masculine (работал).\n-ла for feminine (работала).\n-ло for neuter (работало).\n-ли for plural (работали).\n\n**Past tense conjugates for GENDER, not person.**\nUnusual globally — most languages conjugate for person in past.", rules: [
      "-л (m), -ла (f), -ло (n), -ли (pl)",
      "No person conjugation",
      "Aspect (imperf/perf) determines meaning"
    ], examples: ["Я работал вчера. - I worked yesterday (m).", "Она читала. - She read.", "Мы играли. - We played."]},
    { title: "Future Tense: Two Forms", icon: "🔮", explanation: "**Russian has TWO futures:**\n\nIMPERFECTIVE (extended/habitual):\n'буду/будешь/будет/...' + infinitive.\nЯ буду работать завтра. (I'll be working.)\n\nPERFECTIVE (completed action):\nConjugate perfective infinitive like present.\nЯ сделаю завтра. (I'll finish tomorrow.)", rules: [
      "Imperf future: быть + infinitive",
      "Perf future: conjugate perfective verb",
      "Two futures = two aspects"
    ], examples: ["Я буду читать. - I will be reading.", "Я прочитаю. - I will read (and finish).", "Мы будем работать. - We'll be working."]},
    { title: "Verb Aspect: Imperfective vs Perfective", icon: "🔄", explanation: "**Every Russian verb has TWO forms.**\n\nIMPERFECTIVE (process/habit/repeated):\nписать, читать, делать.\n\nPERFECTIVE (completed single action):\nнаписать, прочитать, сделать.\n\n**Usually differ by prefix OR stem change OR completely different word.**\n\nAspect is THE defining Russian grammar feature.", rules: [
      "Imperfective: process/habit",
      "Perfective: completion/result",
      "Learn verbs in PAIRS",
      "Never mix them up"
    ], examples: ["Я часто писал письма. - I often wrote letters (habit = imperf).", "Я написал письмо вчера. - I wrote (completed) a letter yesterday (once = perf).", "Читать/прочитать - typical pair."]},
    { title: "Accusative Case (Direct Objects)", icon: "🎯", explanation: "**Direct objects go in accusative.**\n\n**Feminine -а → -у:**\nЯ вижу книгу. (I see a book.)\n\n**Masculine INANIMATE = nominative:**\nЯ купил журнал. (No change.)\n\n**Masculine ANIMATE = genitive:**\nЯ вижу Антона. (Same as 'of Anton.')\n\n**Neuter = nominative:**\nЯ вижу окно.", rules: [
      "Feminine -а → -у",
      "Masc inanimate: same as nom",
      "Masc animate: same as gen",
      "Neuter: no change"
    ], examples: ["Я читаю книгу. - I read a book.", "Я вижу Петра. - I see Peter.", "Я купил журнал. - I bought a magazine."]},
    { title: "Motion with В/На + Case", icon: "➡️", explanation: "**Preposition + case determines meaning.**\n\n**В/НА + ACCUSATIVE = motion/direction:**\nВ школу (to school).\nНа работу (to work).\n\n**В/НА + PREPOSITIONAL = location:**\nВ школе (at school).\nНа работе (at work).\n\n**Same preposition, different case = different meaning.**", rules: [
      "Motion: в/на + accusative",
      "Location: в/на + prepositional",
      "В for enclosed, на for events/surfaces"
    ], examples: ["Иду в школу. - Going to school (motion).", "Я в школе. - I'm at school (location).", "Приду на работу. - I'll come to work."]},
    { title: "Genitive Case (Of/From)", icon: "🎯", explanation: "**Genitive has many functions:**\n\n1. Possession: книга Анны (Anna's book).\n2. Absence: нет времени (no time).\n3. Quantity: много работы (a lot of work).\n4. After prepositions: из, от, для, без, у.\n\n**Feminine -а → -ы/-и** (spelling rule).\n**Masculine → -а.**\n**Neuter -о → -а.**", rules: [
      "Feminine -а → -ы/-и",
      "Masc → -а",
      "Neuter -о → -а",
      "After нет: always genitive"
    ], examples: ["Книга Анны. - Anna's book.", "Нет времени. - No time.", "Много людей. - Many people."]},
    { title: "Dative Case (To/For)", icon: "🎯", explanation: "**Dative = indirect object, recipient.**\n\nЯ дал книгу маме. (I gave the book to mom.)\nОн сказал другу. (He told a friend.)\n\n**Also for:**\n- Age: Мне 25 лет.\n- Feelings: Мне холодно.\n- Necessity: Мне нужно.\n\n**Endings:**\nМ: -у. Ф: -е (same as prep). Н: -у.", rules: [
      "Indirect object = dative",
      "Age, feelings, need use dative",
      "М -у, Ф -е, Н -у"
    ], examples: ["Дам книгу маме. - I'll give the book to mom.", "Мне холодно. - I'm cold.", "Нам нужно идти. - We need to go."]},
    { title: "Instrumental Case (With/By)", icon: "🎯", explanation: "**Instrumental for tools, company, profession.**\n\n**TOOL (no preposition):**\nПишу ручкой. (I write with a pen.)\n\n**COMPANY (с + instrumental):**\nИду с мамой. (I go with mom.)\n\n**PROFESSION (no preposition):**\nРаботаю учителем. (I work as a teacher.)\n\n**Endings:**\nМ: -ом. Ф: -ой. Н: -ом.", rules: [
      "Tool: no preposition + inst",
      "Company: с + inst",
      "Profession: no prep + inst",
      "М/Н -ом, Ф -ой"
    ], examples: ["Пишу карандашом. - I write with a pencil.", "Иду с друзьями. - I go with friends.", "Стал врачом. - I became a doctor."]},
    { title: "Prepositional Case", icon: "🎯", explanation: "**Only appears after prepositions.**\n\n**В/НА = location:**\nВ Москве (in Moscow).\nНа работе (at work).\n\n**О = about:**\nО работе (about work).\n\n**Most nouns get -е ending:**\nстол → столе. книга → книге. окно → окне.\n\n**Feminine -ь → -и:**\nплощадь → площади.", rules: [
      "Only after prepositions",
      "Most: -е ending",
      "Feminine -ь → -и",
      "Used with в, на, о/об, при"
    ], examples: ["В Москве. - In Moscow.", "О маме. - About mom.", "На работе. - At work."]},
    { title: "Reflexive Verbs (-ся)", icon: "🔄", explanation: "**Verbs ending in -ся (-сь after vowels) are reflexive.**\n\n**FOUR uses:**\n1. Self-directed: умываться (wash oneself).\n2. Reciprocal: встречаться (meet each other).\n3. Passive: Книга продаётся (the book is sold).\n4. Lexicalized: смеяться (laugh — no non-reflexive).\n\nPast tense: -ся becomes -лся/-лась/-лось/-лись.", rules: [
      "-ся after consonant, -сь after vowel",
      "Four functions of reflexive",
      "Always memorize as reflexive or not"
    ], examples: ["Я умываюсь. - I wash up.", "Встречаемся завтра. - We meet tomorrow.", "Я смеюсь. - I laugh."]},
    { title: "Comparisons: Better/Worse", icon: "📊", explanation: "**Comparative: add -ее.**\nбольше (bigger), меньше (smaller), лучше (better), хуже (worse).\n\n**Irregular comparatives (short):**\nбольшой → больше.\nмаленький → меньше.\nхороший → лучше.\nплохой → хуже.\n\n**Superlative: самый + adjective.**\nСамый большой = biggest.", rules: [
      "Comparative: -ее ending (or irregular)",
      "Irregular: больше, меньше, лучше, хуже",
      "Superlative: самый + adj"
    ], examples: ["Он старше. - He is older.", "Лучше поздно, чем никогда. - Better late than never.", "Самый большой дом. - The biggest house."]},
    { title: "Modal Verbs: Can, Must, Should", icon: "🎯", explanation: "**Key modal constructions:**\n\nМОГУ (I can, ability): Я могу читать.\nМОЖНО (it's allowed): Можно войти?\nНЕЛЬЗЯ (not allowed): Здесь нельзя курить.\nДОЛЖЕН (must): Я должен работать.\nНАДО/НУЖНО (need): Мне нужно идти.\n\n**Мне надо/нужно** (dative) vs **Я должен** (nominative).", rules: [
      "Можно (yes)/Нельзя (no) - impersonal",
      "Должен, должна, должны - personal",
      "Надо/нужно + dative + infinitive"
    ], examples: ["Можно войти? - May I come in?", "Я должен идти. - I must go.", "Мне нужно работать. - I need to work."]}
  ],
  B1: [
    { title: "The 6 Cases Overview", icon: "🎯", explanation: "**Russian has 6 cases, each marking grammatical role.**\n\n1. Nominative (subject): кто? что?\n2. Accusative (object): кого? что?\n3. Genitive (of/absence): кого? чего?\n4. Dative (to/for): кому? чему?\n5. Instrumental (by/with): кем? чем?\n6. Prepositional (about/in): о ком? о чём?\n\n**Cases REPLACE word order in English.**", rules: [
      "6 cases = 6 sentence roles",
      "Each has question words",
      "Noun endings change with case"
    ], examples: ["Анна (nom) читает книгу (acc).", "Книга Анны (gen).", "Я дал Анне (dat) книгу."]},
    { title: "Conditional Mood with бы", icon: "🎲", explanation: "**Russian conditional is simple: past + бы.**\n\nЯ бы пошёл. (I would go.)\nОна хотела бы. (She would like.)\n\n**If-clauses (hypothetical):**\nЕсли бы + past + ..., past + бы + ...\nЕсли бы я знал. (If I had known.)\n\n**Polite requests:**\nХотел бы... (I would like...)\nМог бы ты...? (Could you...?)", rules: [
      "Past tense + бы = conditional",
      "Polite requests: хотел бы, мог бы",
      "If-clauses: если бы + past"
    ], examples: ["Я бы пошёл в кино. - I'd go to the movies.", "Если бы я знал... - If I had known...", "Хотел бы чаю. - I'd like tea."]},
    { title: "Imperative Mood", icon: "📣", explanation: "**Form imperative from the 'они' present form.**\n\nРаботают → работай! (work!)\nЧитают → читай! (read!)\nГоворят → говори! (speak!)\n\n**Formal/plural: add -те.**\nРаботайте! Читайте!\n\n**Negative commands use IMPERFECTIVE aspect.**\nНе читай это! (Don't read that!)", rules: [
      "Base from 'они' form, drop ending, add -и/-й",
      "Formal/plural: add -те",
      "Negative: не + imperfective"
    ], examples: ["Читай! - Read!", "Не читайте! - Don't read!", "Скажите, пожалуйста. - Please tell me."]},
    { title: "Reflexive Verbs (Complete)", icon: "🔄", explanation: "**Reflexive verb functions:**\n\n1. **Self-directed:**\nумываться, одеваться, причёсываться.\n\n2. **Reciprocal:**\nвстречаться, целоваться, обниматься.\n\n3. **Passive:**\nКнига читается. (The book is being read.)\n\n4. **Only-reflexive:**\nсмеяться, бояться, надеяться.", rules: [
      "4 functions of reflexive",
      "Past: -лся/-лась/-лось/-лись",
      "Some verbs only reflexive"
    ], examples: ["Я умываюсь. - I wash up.", "Мы встречаемся. - We meet.", "Я боюсь. - I fear."]},
    { title: "Motion Verbs: Idti/Khodit", icon: "🚶", explanation: "**Russian has TWO verbs for each motion.**\n\nUNIDIRECTIONAL (one direction, right now):\n- идти (go on foot)\n- ехать (go by vehicle)\n- лететь (fly)\n\nMULTIDIRECTIONAL (habit, round-trip):\n- ходить (go on foot)\n- ездить (go by vehicle)\n- летать (fly)\n\n**Use идти for 'going right now.' Use ходить for habit.**", rules: [
      "Uni: right-now, one way",
      "Multi: habitual, round-trip",
      "14 motion verb pairs total"
    ], examples: ["Я иду в магазин. - I'm going to the store now.", "Я хожу в магазин каждый день. - I go daily.", "Я еду в Москву. - I'm going to Moscow now."]},
    { title: "Motion Verbs with Prefixes", icon: "↔️", explanation: "**Prefixes change motion meaning precisely.**\n\nПО- (start): пойти (go).\nПРИ- (arrive): прийти (come).\nУ- (leave): уйти (go away).\nВЫ- (exit): выйти (go out).\nВ- (enter): войти (come in).\nПЕРЕ- (cross): перейти (cross).\n\n**Each prefix makes verb perfective.**\nFor imperfective: prefix + multi-dir form.", rules: [
      "По- start, При- arrive, У- leave",
      "Вы- exit, В- enter, Пере- cross",
      "Prefix makes perfective"
    ], examples: ["Пойдём! - Let's go!", "Он пришёл. - He arrived.", "Мы вышли. - We left/exited."]},
    { title: "Indefinite Pronouns", icon: "❓", explanation: "**Russian indefinite pronouns use suffixes:**\n\n**-то suffix (unknown, specific):**\nкто-то (someone specific), что-то (something specific).\n\n**-нибудь suffix (any):**\nкто-нибудь (anyone at all), что-нибудь (anything).\n\n**-кое- prefix (certain):**\nкое-кто (certain person), кое-что (certain thing).", rules: [
      "-то: unknown but specific",
      "-нибудь: any (questions, requests)",
      "Кое- : certain (definite but unnamed)"
    ], examples: ["Кто-то пришёл. - Someone came (specific).", "Кто-нибудь есть? - Anyone there? (any).", "Кое-кто не пришёл. - Certain people didn't come."]},
    { title: "Relative Pronouns (который)", icon: "🔗", explanation: "**'Который' = which/that/who as relative pronoun.**\n\nАgrees with antecedent in gender/number.\nTakes case of its role in relative clause.\n\nКнига, которую я читаю. (The book that I'm reading.)\n'Которую' is accusative feminine — object of читаю.\n\nМужчина, который пришёл. (The man who came.)\n'Который' is nominative masculine — subject of пришёл.", rules: [
      "Agrees with antecedent gender",
      "Takes case of its role",
      "Connects clauses"
    ], examples: ["Человек, который знает. - The person who knows.", "Дом, в котором я живу. - The house I live in.", "Книга, которую я читаю. - The book I read."]},
    { title: "Complex Conjunctions", icon: "🔗", explanation: "**Key connectors for complex sentences:**\n\nПотому что (because), так как (since).\nЕсли (if), если бы (if hypothetical).\nХотя (although), тем не менее (nevertheless).\nКогда (when), пока (while), с тех пор как (since).\nКак (as, like), чем (than).\nЧто (that), чтобы (in order to).", rules: [
      "Causal: потому что",
      "Conditional: если, если бы",
      "Concessive: хотя, тем не менее"
    ], examples: ["Я устал, потому что работал. - Tired because I worked.", "Если бы я знал... - If I had known...", "Хотя дождь, мы пошли. - Although raining, we went."]},
    { title: "Numbers and Case Agreement", icon: "🔢", explanation: "**Numbers control the following noun's case:**\n\n1 (21, 31...): NOMINATIVE (один рубль).\n2, 3, 4 (22-24...): GENITIVE SINGULAR (два рубля).\n5+, 11-19: GENITIVE PLURAL (пять рублей).\n\n**Key principle:** last digit matters, EXCEPT 11-19 which all take 5+ rule.", rules: [
      "1: nom sg",
      "2-4: gen sg",
      "5+: gen pl",
      "11-19: always gen pl"
    ], examples: ["Один день. - One day.", "Три дня. - Three days.", "Пять дней. - Five days."]},
    { title: "Time Expressions", icon: "🕐", explanation: "**Russian time takes many forms:**\n\n**Time of day (instrumental):**\nУтром, днём, вечером, ночью.\n\n**Days of week (accusative):**\nВ понедельник, в среду, в воскресенье.\n\n**Months (в + prepositional):**\nВ январе, в мае, в октябре.\n\n**Years (в + prep):**\nВ 2020 году.", rules: [
      "Time of day: instrumental",
      "Days: в + accusative",
      "Months: в + prepositional",
      "Years: в + год in prep"
    ], examples: ["Утром работаю. - I work in morning.", "В среду встреча. - Meeting on Wednesday.", "В мае отпуск. - Vacation in May."]},
    { title: "Expressing Opinions", icon: "💭", explanation: "**Ways to state opinions in Russian:**\n\nЯ думаю, что... (I think that...)\nПо-моему... (In my opinion...)\nПо моему мнению... (In my opinion, formal)\nМне кажется... (It seems to me...)\nЯ считаю, что... (I consider that...)\nСогласен/согласна (I agree) - agrees with gender.", rules: [
      "Я думаю/считаю — active thinking",
      "Мне кажется — impersonal",
      "По-моему, по моему мнению — marker",
      "Согласен gender-agrees"
    ], examples: ["Я думаю, это важно. - I think this is important.", "По-моему, нет. - In my opinion, no.", "Согласна с тобой. - I agree with you (f)."]},
    { title: "Subjunctive/Conditional Clauses", icon: "🎲", explanation: "**Hypothetical 'if' clauses:**\n\n**Real conditions (likely):**\nЕсли завтра будет солнце, пойдём в парк.\n(If it's sunny tomorrow, we'll go to the park.)\n\n**Unreal conditions (hypothetical):**\nЕсли бы у меня было время, я бы помог.\n(If I had time, I would help.)\n\n**Past + бы in both clauses.**", rules: [
      "Real conditional: если + future",
      "Unreal: если бы + past, past + бы",
      "Two clauses mirror each other"
    ], examples: ["Если будет время, позвоню. - If I have time, I'll call.", "Если бы я знал, сказал бы. - If I'd known, I'd have said.", "Если погода хорошая, пойдём. - If the weather's good, let's go."]},
    { title: "Perfect Tense Concepts", icon: "⏱️", explanation: "**Russian doesn't have Perfect tenses per se.**\n\nBut uses ASPECT + TENSE equivalently:\n\n'Я уже сделал' = I have done (perfective past + already).\n'Уже' (already) + perfective past = present perfect sense.\n\n**Continuous (have been doing):**\n'Я читал весь день' = I have been reading all day.\n(Imperfective past + duration phrase.)", rules: [
      "No Perfect tenses",
      "Уже + perf past = have done",
      "Imperf past + duration = have been doing"
    ], examples: ["Я уже сделал. - I have done it.", "Она давно живёт здесь. - She has lived here for a long time.", "Я никогда не был в Москве. - I have never been to Moscow."]}
  ],
  B2: [
    { title: "Participles (Active/Passive)", icon: "📝", explanation: "**Russian participles = verb forms acting as adjectives.**\n\n**Active present:** читающий (one who is reading).\n**Active past:** читавший (one who was reading).\n**Passive present:** читаемый (being read).\n**Passive past:** прочитанный (read, completed).\n\n**Formal register — rare in speech, common in writing.**\nAgrees with noun in gender/number/case.", rules: [
      "4 types of participles",
      "Act pres: читающий",
      "Act past: читавший",
      "Pas past: прочитанный (common)"
    ], examples: ["Читающий студент. - A reading student.", "Прочитанная книга. - A read book.", "Пишущий человек. - Writing person."]},
    { title: "Adverbial Participles (деепричастия)", icon: "📝", explanation: "**Adverbial participles express simultaneous or sequential action.**\n\n**Present (-я/-а):**\nидя, читая, думая (while walking, while reading).\n\n**Past (-в/-вши):**\nсделав, сказав (having done, having said).\n\n**Works as English -ing (gerund) in participial clauses.**\n'Придя домой, я лёг спать.' (Coming home, I went to sleep.)", rules: [
      "Pres: -я/-а ending",
      "Past: -в/-вши",
      "Simultaneous or sequential action",
      "Common in written Russian"
    ], examples: ["Идя по улице, я встретил друга. - Walking down the street, I met a friend.", "Прочитав книгу, она уснула. - Having read the book, she fell asleep.", "Думая о тебе. - Thinking about you."]},
    { title: "Complex Subordinate Clauses", icon: "🔗", explanation: "**Russian subordinate clauses use connectors.**\n\n**Purpose (чтобы + subj):**\nЯ учу русский, чтобы говорить с друзьями.\n(I study Russian to speak with friends.)\n\n**Time (когда, пока):**\nКогда я был в Москве...\n\n**Reason (потому что, поскольку):**\nЯ устал, потому что работал весь день.\n\n**Condition (если, если бы):**\nЕсли будет время...", rules: [
      "Purpose: чтобы + infinitive or past",
      "Time: когда, пока, с тех пор",
      "Reason: потому что, поскольку",
      "Condition: если, если бы"
    ], examples: ["Я хочу, чтобы ты пришёл. - I want you to come.", "Когда приедешь? - When will you arrive?", "Поскольку поздно... - Since it's late..."]},
    { title: "Passive Voice", icon: "⏳", explanation: "**Russian passive constructions:**\n\n**With -ся (reflexive-passive):**\nКнига читается. (The book is being read.)\n\n**With быть + short participle:**\nКнига была прочитана. (The book was read.)\n\n**Impersonal passive:**\nГоворят, что... (It is said that...)\n\n**Active is preferred in Russian — passive sounds formal/academic.**", rules: [
      "-ся for ongoing passive",
      "быть + participle for completed",
      "Active usually preferred",
      "Passive common in formal writing"
    ], examples: ["Статья пишется. - The article is being written.", "Книга была написана Толстым. - The book was written by Tolstoy.", "Говорят, что... - They say that..."]},
    { title: "Reported Speech", icon: "🗣️", explanation: "**Russian reported speech preserves original tense.**\n\n**Direct:** Он сказал: 'Я работаю.'\n**Reported:** Он сказал, что работает.\n\n**Questions:**\nДирект: Он спросил: 'Когда ты придёшь?'\nReported: Он спросил, когда я приду.\n\n**Key rule: NO backshifting of tense (unlike English).**\nRussian keeps tense as speaker said.", rules: [
      "No tense backshifting",
      "Direct speech → что clause",
      "Questions → question word",
      "Preserve original aspect"
    ], examples: ["Он сказал, что работает. - He said he's working.", "Она спросила, где ты живёшь. - She asked where you live.", "Я думал, что ты знаешь. - I thought you knew."]},
    { title: "Gerunds and -ing Forms", icon: "📝", explanation: "**Russian has multiple ways to express English -ing:**\n\n1. **Continuous action: imperfective present.**\nЯ читаю сейчас. (I'm reading now.)\n\n2. **Verbal noun:**\nЧтение — reading (as activity).\n\n3. **Adverbial participle:**\nЧитая книгу, он плакал.\n(While reading the book, he cried.)", rules: [
      "No direct 'I am reading' structure",
      "Imperfective present = ongoing",
      "Verbal nouns in -ие/-ние",
      "Adverbial participles for simultaneous"
    ], examples: ["Я читаю. - I'm reading.", "Чтение — мой хобби. - Reading is my hobby.", "Читая, он улыбался. - Reading, he smiled."]},
    { title: "Formal Register and Writing", icon: "✍️", explanation: "**B2 speakers master register shifts.**\n\n**FORMAL:**\nследовательно (therefore), однако (however)\nпоскольку (inasmuch as), вследствие (as a result)\nсогласно (according to), необходимо (it's necessary)\nтаким образом (thus), в связи с (in connection with)\n\n**CASUAL equivalents:**\nпоэтому, но, потому что, из-за, по, надо, так, из-за этого.", rules: [
      "Match register to context",
      "Formal for academic/legal",
      "Casual for speech/messaging",
      "Don't mix within one text"
    ], examples: ["Следовательно, мы приняли решение. - Therefore, we decided.", "Однако обстоятельства изменились. - However circumstances changed.", "В связи с этим... - In connection with this..."]},
    { title: "Numbers: Full Agreement", icon: "🔢", explanation: "**B2 level handles full case agreement with numbers.**\n\n**In nominative:** один → 1 adj + noun.\n**In other cases:** number + adj + noun all agree.\n\nExample in accusative:\nЯ вижу два больших дома. (I see two big houses.)\n\nЯ вижу (acc) два (num) больших (adj acc-gen) дома (gen sg).\n\n**Complex but systematic.**", rules: [
      "Adjectives agree in all cases",
      "2-4 take gen-like adj",
      "5+ take adj nom plural in nom, gen pl elsewhere",
      "Inherit case of numeric group"
    ], examples: ["Три красивых дома. - Three beautiful houses.", "Пять новых книг. - Five new books.", "Он дал двум маленьким детям. - He gave to two small children."]},
    { title: "Word Formation and Prefixes", icon: "🔧", explanation: "**Russian creates words through systematic prefixing.**\n\n**Verb prefixes:**\nПО- (start, mild): почитать (read for a while).\nПРО- (through): прочитать (read through).\nПЕРЕ- (over, across): перечитать (read again).\nВЫ- (out): выучить (learn out = memorize).\n\n**Recognize patterns:** each prefix adds consistent meaning.", rules: [
      "Prefix changes verb aspect",
      "По- = mild/start",
      "Про- = thoroughly/through",
      "Пере- = re-, across"
    ], examples: ["Почитать книгу. - Read for a while.", "Прочитать книгу. - Read through.", "Переписать. - Rewrite."]},
    { title: "Idioms and Proverbs", icon: "💬", explanation: "**Russian cultural fluency requires idioms.**\n\n**КАК ДВЕ КАПЛИ ВОДЫ** - like two peas in a pod.\n**ВОДИТЬ ЗА НОС** - to deceive.\n**БИТЬ БАКЛУШИ** - to be idle.\n**КОТ В МЕШКЕ** - cat in a bag (unknown).\n**ВЕШАТЬ ЛАПШУ НА УШИ** - to tell lies.\n\n**Proverbs:**\n'Без труда не вытащишь рыбку из пруда.' (No pain, no gain.)\n'Семь раз отмерь, один раз отрежь.' (Measure 7 times, cut once.)", rules: [
      "Idioms often non-literal",
      "Proverbs widely used",
      "Cultural reference points",
      "Learn with cultural context"
    ], examples: ["Он меня за нос водил. - He was deceiving me.", "Как две капли воды. - Like two peas in a pod.", "Без труда... - No pain, no gain..."]},
    { title: "Stylistic Register", icon: "🎨", explanation: "**B2 mastery = knowing which register to use.**\n\n**CASUAL (разговорный):**\nта блин! (oh crap!), короче (anyway), просто (just)\nOften omitted subjects, contractions.\n\n**NEUTRAL (нейтральный):**\nStandard Russian of textbooks and news.\n\n**FORMAL (формальный):**\nRich vocabulary, full sentence structures, formal connectors.\n\n**ACADEMIC/OFFICIAL:**\nBureaucratic Russian with complex structures.", rules: [
      "Match register to situation",
      "Know casual fillers (short answer Russians)",
      "Formal requires complete forms",
      "Practice shifts"
    ], examples: ["Короче, я пошёл. - Anyway, I'm leaving (casual).", "Я вынужден покинуть встречу. - I have to leave the meeting (formal).", "Просто супер! - Just super! (casual)"]},
    { title: "Pragmatic Expressions", icon: "💼", explanation: "**Pragmatic phrases essential at B2:**\n\n**OPINIONS:**\nЯ убеждён, что... (I'm convinced that...)\nС одной стороны..., с другой стороны... (On one hand... on the other...)\n\n**AGREEMENT:**\nАбсолютно согласен. (Absolutely agree.)\nНе могу не согласиться. (I can only agree.)\n\n**DISAGREEMENT:**\nНе совсем так. (Not quite so.)\nПозвольте не согласиться. (Allow me to disagree.)", rules: [
      "Formal agreement and disagreement",
      "Hedging phrases",
      "Opinion markers",
      "Polite disagreement"
    ], examples: ["С одной стороны, да... - On one hand, yes...", "Позвольте не согласиться. - Allow me to disagree.", "Абсолютно согласна. - Absolutely agree (f)."]}
  ]
};
