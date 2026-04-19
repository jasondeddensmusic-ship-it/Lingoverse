// Russian placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const RUSSIAN_PLACEMENT = [
  // ═══ A1.1 — greetings, быть omission, gender, numbers 1-10 ═══
  { id:"ru-a11-1", level:"A1.1", q:"Which greeting is the standard Russian hello?", opts:["Добрый вечер","Привет / Здравствуйте","Спокойной ночи","До свидания"], ans:"Привет / Здравствуйте", category:"greetings" },
  { id:"ru-a11-2", level:"A1.1", q:"'Я ___ студент.' (I am a student.) — present tense 'to be' in Russian is:", opts:["есть (often omitted)","являюсь","буду","был"], ans:"есть (often omitted)", category:"copula" },
  { id:"ru-a11-3", level:"A1.1", q:"'Книга' (book) is which grammatical gender?", opts:["masculine","feminine","neuter","no gender"], ans:"feminine", category:"gender" },
  { id:"ru-a11-4", level:"A1.1", q:"Which number is 'семь'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"ru-a11-5", level:"A1.1", q:"'Меня зовут Мария.' means:", opts:["I want Maria","My name is Maria","I see Maria","I know Maria"], ans:"My name is Maria", category:"intro" },

  // A1.1 reinforcement pool
  { id:"ru-a11-6", level:"A1.1", q:"'Спасибо' means:", opts:["Hello","Goodbye","Thank you","Excuse me"], ans:"Thank you", category:"greetings" },
  { id:"ru-a11-7", level:"A1.1", q:"'Как дела?' means:", opts:["What is your name?","How are you?","Where are you from?","How old are you?"], ans:"How are you?", category:"greetings" },

  // ═══ A1.2 — present tense conjugation, nominative/accusative, pronouns ═══
  { id:"ru-a12-1", level:"A1.2", q:"'Мы ___ в Москве.' (We live in Moscow.) — correct form of жить:", opts:["живу","живёшь","живёт","живём"], ans:"живём", category:"present-tense" },
  { id:"ru-a12-2", level:"A1.2", q:"'___ сестра высокая.' (My sister is tall.)", opts:["Мой","Моя","Моё","Мои"], ans:"Моя", category:"possessive" },
  { id:"ru-a12-3", level:"A1.2", q:"Accusative form of masculine animate 'студент':", opts:["студент","студента","студенту","студентом"], ans:"студента", category:"accusative" },
  { id:"ru-a12-4", level:"A1.2", q:"'Он ___ много кофе.' (He drinks a lot of coffee.) — пить:", opts:["пью","пьёшь","пьёт","пьём"], ans:"пьёт", category:"present-tense" },
  { id:"ru-a12-5", level:"A1.2", q:"'На столе ___ книги.' (There are books on the table.)", opts:["есть","нет","будет","был"], ans:"есть", category:"existence" },

  { id:"ru-a12-6", level:"A1.2", q:"'Сколько вам лет?' means:", opts:["Where are you from?","How old are you?","What is your name?","What do you do?"], ans:"How old are you?", category:"expressions" },
  { id:"ru-a12-7", level:"A1.2", q:"'Ей двадцать пять лет.' — age uses which case after 21+?", opts:["nominative","genitive","dative","accusative"], ans:"genitive", category:"age-case" },

  // ═══ A2.1 — past tense, aspect intro, basic prepositions ═══
  { id:"ru-a21-1", level:"A2.1", q:"'Вчера я ___ в кино.' (Yesterday I went to the cinema.) — masculine past:", opts:["иду","шёл","шла","шли"], ans:"шёл", category:"past-tense" },
  { id:"ru-a21-2", level:"A2.1", q:"'Я никогда не ___ мясо.' (I never eat meat.) — present:", opts:["ем","ел","буду есть","ела"], ans:"ем", category:"negation" },
  { id:"ru-a21-3", level:"A2.1", q:"Perfective aspect is used for:", opts:["habitual actions","ongoing states","completed single actions","all present tense"], ans:"completed single actions", category:"aspect" },
  { id:"ru-a21-4", level:"A2.1", q:"'Он ___ домашнее задание.' (He did his homework.) — perfective past masculine:", opts:["делает","делал","сделал","сделала"], ans:"сделал", category:"past-tense" },
  { id:"ru-a21-5", level:"A2.1", q:"Preposition used with location 'в + prepositional case':", opts:["at the cinema (accusative)","in/at a place (prepositional)","from a place (genitive)","to a place (accusative)"], ans:"in/at a place (prepositional)", category:"prepositions" },

  { id:"ru-a21-6", level:"A2.1", q:"'Они ___ в Санкт-Петербурге в прошлом году.' (They lived in St. Petersburg last year.) — imperfective past plural:", opts:["живут","жили","жило","жила"], ans:"жили", category:"past-tense" },
  { id:"ru-a21-7", level:"A2.1", q:"Which verb pair is imperfective/perfective for 'to read'?", opts:["читать/прочитать","писать/написать","говорить/сказать","брать/взять"], ans:"читать/прочитать", category:"aspect-pairs" },

  // ═══ A2.2 — dative case, imperatives, comparative adjectives ═══
  { id:"ru-a22-1", level:"A2.2", q:"'Если бы у меня было время, я бы ___.' (If I had time, I would come.) — conditional:", opts:["пришёл","прихожу","прийду","приходил"], ans:"пришёл", category:"conditional" },
  { id:"ru-a22-2", level:"A2.2", q:"'Мария ___ Ивана.' (Maria is taller than Ivan.) — comparative:", opts:["высокая, чем","выше, чем","самая высокая из","высока из"], ans:"выше, чем", category:"comparative" },
  { id:"ru-a22-3", level:"A2.2", q:"Dative case is used for:", opts:["direct object","indirect object/recipient","location","instrument"], ans:"indirect object/recipient", category:"dative" },
  { id:"ru-a22-4", level:"A2.2", q:"'Книга ___ на столе.' (The book is on the table.) — verb:", opts:["есть","лежит","стоит","сидит"], ans:"лежит", category:"position-verbs" },
  { id:"ru-a22-5", level:"A2.2", q:"Imperative of 'читать' (to read) — informal singular:", opts:["читает","читаю","читай","читайте"], ans:"читай", category:"imperative" },

  // ═══ B1.1 — instrumental case, motion verbs, complex sentences ═══
  { id:"ru-b11-1", level:"B1.1", q:"Instrumental case is used with:", opts:["direct object","instrument/means and predicate nouns with быть","location","destination"], ans:"instrument/means and predicate nouns with быть", category:"instrumental" },
  { id:"ru-b11-2", level:"B1.1", q:"'Я знаю, что он ___.' (I know that he is coming.) — verb:", opts:["приходит","прийдёт","пришёл","приходил"], ans:"приходит", category:"complex-sentence" },
  { id:"ru-b11-3", level:"B1.1", q:"Unidirectional motion verb 'to go (on foot)' — present tense:", opts:["ходить","идти","ехать","ездить"], ans:"идти", category:"motion-verbs" },
  { id:"ru-b11-4", level:"B1.1", q:"'Хотя он был болен, он всё равно пришёл.' — 'хотя' expresses:", opts:["reason","concession","condition","purpose"], ans:"concession", category:"conjunctions" },
  { id:"ru-b11-5", level:"B1.1", q:"'Надо' expresses:", opts:["ability","desire","obligation/necessity","permission"], ans:"obligation/necessity", category:"modal-words" },

  // ═══ B1.2 — genitive case, reported speech, perfective future ═══
  { id:"ru-b12-1", level:"B1.2", q:"'В этом году я ___ три страны.' (This year I have visited three countries.) — perfective past:", opts:["посещаю","посетил","посещал","буду посещать"], ans:"посетил", category:"past-tense" },
  { id:"ru-b12-2", level:"B1.2", q:"Genitive plural of 'книга' (book):", opts:["книги","книге","книгу","книг"], ans:"книг", category:"genitive-plural" },
  { id:"ru-b12-3", level:"B1.2", q:"'Он сказал, что ___ устал.' (He said he was tired.) — reported speech:", opts:["он есть","он был","он будет","он устал"], ans:"он устал", category:"reported-speech" },
  { id:"ru-b12-4", level:"B1.2", q:"Perfective future of 'читать' (to read) — 1st person singular:", opts:["буду читать","читаю","прочитаю","читал"], ans:"прочитаю", category:"perfective-future" },
  { id:"ru-b12-5", level:"B1.2", q:"'Она спала, когда позвонил телефон.' — что expresses the relationship?", opts:["two simultaneous completed actions","ongoing + sudden completed","habitual actions","future plan"], ans:"ongoing + sudden completed", category:"aspect-narrative" },

  // ═══ B2.1 — short-form adjectives, gerunds, advanced conditionals ═══
  { id:"ru-b21-1", level:"B2.1", q:"'Если бы я знал, я бы пришёл.' expresses:", opts:["a future plan","a hypothetical contrary-to-fact","a command","a factual past"], ans:"a hypothetical contrary-to-fact", category:"conditional-past" },
  { id:"ru-b21-2", level:"B2.1", q:"Short-form adjective 'готов' (ready — masc.) vs long form:", opts:["готовый","готовая","готово","готовые"], ans:"готовый", category:"short-adjective" },
  { id:"ru-b21-3", level:"B2.1", q:"Imperfective gerund of 'читать' (to read):", opts:["читая","прочитав","читавший","читаемый"], ans:"читая", category:"gerund" },
  { id:"ru-b21-4", level:"B2.1", q:"'Несмотря на дождь, мы пошли гулять.' — 'несмотря на' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"advanced-prepositions" },
  { id:"ru-b21-5", level:"B2.1", q:"Which expresses regret about the past?", opts:["Если бы у меня было время","Если у меня есть время","Если бы у меня было время тогда","Когда у меня есть время"], ans:"Если бы у меня было время тогда", category:"conditional-past" },

  // ═══ B2.2 — advanced register, participles, complex discourse ═══
  { id:"ru-b22-1", level:"B2.2", q:"Active present participle of 'читать' (to read):", opts:["читавший","читаемый","читающий","прочитавший"], ans:"читающий", category:"participle" },
  { id:"ru-b22-2", level:"B2.2", q:"Most formal equivalent of 'но' (but/however) in written Russian:", opts:["а","да","однако","зато"], ans:"однако", category:"register" },
  { id:"ru-b22-3", level:"B2.2", q:"'Невзирая на его усилия, он потерпел неудачу.' — 'невзирая на' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"discourse" },
  { id:"ru-b22-4", level:"B2.2", q:"Nominalization of 'решать' (to decide) in formal Russian:", opts:["решение","решая","решаемый","решительный"], ans:"решение", category:"nominalization" },
  { id:"ru-b22-5", level:"B2.2", q:"'Сколько бы он ни пытался, у него не получается.' — what does 'сколько бы ни' express?", opts:["reason","concessive generalization","condition","purpose"], ans:"concessive generalization", category:"discourse" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of RUSSIAN_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default RUSSIAN_PLACEMENT;
