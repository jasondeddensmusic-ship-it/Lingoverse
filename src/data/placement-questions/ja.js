// Japanese placement-quiz question bank.
// All Japanese text uses kanji+furigana notation per PP65.
// Schema: { id, level, q, opts[], ans, category? }

export const JAPANESE_PLACEMENT = [
  // ═══ A1.1 — greetings, です/ます basics, particles は/が, numbers 1-10 ═══
  { id:"ja-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["こんばんは","おはようございます","おやすみなさい","さようなら"], ans:"おはようございます", category:"greetings" },
  { id:"ja-a11-2", level:"A1.1", q:"'わたしは 学生(がくせい)___.' (I am a student.)", opts:["です","ます","だ","か"], ans:"です", category:"copula" },
  { id:"ja-a11-3", level:"A1.1", q:"Topic marker particle:", opts:["が","を","に","は"], ans:"は", category:"particles" },
  { id:"ja-a11-4", level:"A1.1", q:"Which number is '七(しち/なな)'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"ja-a11-5", level:"A1.1", q:"'わたしの 名前(なまえ)は マリア___.' (My name is Maria.)", opts:["です","ます","か","ね"], ans:"です", category:"intro" },

  // A1.1 reinforcement pool
  { id:"ja-a11-6", level:"A1.1", q:"'ありがとうございます' means:", opts:["Excuse me","Thank you","Hello","Goodbye"], ans:"Thank you", category:"greetings" },
  { id:"ja-a11-7", level:"A1.1", q:"'お元気(げんき)ですか' means:", opts:["What is your name?","How are you?","Where are you from?","How old are you?"], ans:"How are you?", category:"greetings" },

  // ═══ A1.2 — verb -ます forms, object を, adjective types ═══
  { id:"ja-a12-1", level:"A1.2", q:"'わたしたちは 東京(とうきょう)に 住(す)んでい___.' (We live in Tokyo.) — polite present progressive", opts:["ます","ました","ません","ましょう"], ans:"ます", category:"present-tense" },
  { id:"ja-a12-2", level:"A1.2", q:"'わたしの 姉(あね)は 背(せ)が 高(たか)い___.' — polite copula for i-adjectives:", opts:["です","ます","だ","ね"], ans:"です", category:"adjectives" },
  { id:"ja-a12-3", level:"A1.2", q:"'かれは コーヒーを 飲(の)み___.' (He drinks coffee.) — polite", opts:["ます","ました","ません","ましょう"], ans:"ます", category:"verb-masu" },
  { id:"ja-a12-4", level:"A1.2", q:"Particle for the destination of movement:", opts:["に","が","を","は"], ans:"に", category:"particles" },
  { id:"ja-a12-5", level:"A1.2", q:"'テーブルの 上(うえ)に 本(ほん)が あり___.' (There are books on the table.)", opts:["ます","ません","ました","ましょう"], ans:"ます", category:"existence" },

  { id:"ja-a12-6", level:"A1.2", q:"'何歳(なんさい)ですか' means:", opts:["Where are you from?","How old are you?","What is your name?","What do you do?"], ans:"How old are you?", category:"expressions" },
  { id:"ja-a12-7", level:"A1.2", q:"Negative polite form of 'たべます':", opts:["たべません","たべない","たべなかった","たべませんでした"], ans:"たべません", category:"negation" },

  // ═══ A2.1 — past tense -ました, frequency adverbs, て-form ═══
  { id:"ja-a21-1", level:"A2.1", q:"'昨日(きのう) 映画(えいが)を 見(み)___.' (Yesterday I saw a movie.) — polite past", opts:["ます","ました","ません","ませんでした"], ans:"ました", category:"past-tense" },
  { id:"ja-a21-2", level:"A2.1", q:"'わたしは 肉(にく)を 食(た)べません.' — this sentence means:", opts:["I sometimes eat meat","I don't eat meat","I ate meat","I want to eat meat"], ans:"I don't eat meat", category:"negation" },
  { id:"ja-a21-3", level:"A2.1", q:"て-form of '書(か)く' (to write):", opts:["書いて","書て","書けて","書って"], ans:"書(か)いて", category:"te-form" },
  { id:"ja-a21-4", level:"A2.1", q:"'かれは 宿題(しゅくだい)を し___.' (He did his homework.) — polite past", opts:["ます","ました","ません","ましょう"], ans:"ました", category:"past-tense" },
  { id:"ja-a21-5", level:"A2.1", q:"'いつも' means:", opts:["sometimes","always","never","often"], ans:"always", category:"frequency" },

  { id:"ja-a21-6", level:"A2.1", q:"'かれらは 去年(きょねん) 大阪(おおさか)に 住(す)んで___.' (They lived in Osaka last year.) — past progressive polite", opts:["います","いました","いません","いませんでした"], ans:"いました", category:"past-tense" },
  { id:"ja-a21-7", level:"A2.1", q:"て-form connects actions. 'ごはんを 食(た)べて、寝(ね)ます.' means:", opts:["I eat or sleep","I eat before sleeping","I eat while sleeping","I eat instead of sleeping"], ans:"I eat before sleeping", category:"te-form-sequence" },

  // ═══ A2.2 — potential form, 〜たい, adjective conjugation ═══
  { id:"ja-a22-1", level:"A2.2", q:"Potential form of '食(た)べる' (to eat):", opts:["食(た)べます","食(た)べられます","食(た)べたいです","食(た)べていません"], ans:"食(た)べられます", category:"potential" },
  { id:"ja-a22-2", level:"A2.2", q:"'マリアさんは ヨハンさんより 背(せ)が 高(たか)い___.' (Maria is taller than Johan.)", opts:["ます","です","ません","でした"], ans:"です", category:"comparative" },
  { id:"ja-a22-3", level:"A2.2", q:"'〜たいです' expresses:", opts:["ability","desire","permission","obligation"], ans:"desire", category:"tai-form" },
  { id:"ja-a22-4", level:"A2.2", q:"Past tense of the い-adjective '寒(さむ)い' (cold):", opts:["寒(さむ)いでした","寒(さむ)かったです","寒(さむ)くなかったです","寒(さむ)じゃないです"], ans:"寒(さむ)かったです", category:"adjective-past" },
  { id:"ja-a22-5", level:"A2.2", q:"'本(ほん)は テーブルの 上(うえ)に あり___.' (The book is on the table.)", opts:["ます","ません","ました","ましょう"], ans:"ます", category:"location" },

  // ═══ B1.1 — て-form requests, conditional 〜たら, passive ═══
  { id:"ja-b11-1", level:"B1.1", q:"'はやく 来(き)てくださいませんか.' The most formal version of this request is:", opts:["来(き)て！","来(き)てください","来(き)てくださいませんか","来(き)てね"], ans:"来(き)てくださいませんか", category:"keigo" },
  { id:"ja-b11-2", level:"B1.1", q:"'明日(あした) 病院(びょういん)に 行(い)っ___.' (Tomorrow I will go to the hospital.) — volitional future", opts:["てみます","たいです","たら","つもりです"], ans:"つもりです", category:"future" },
  { id:"ja-b11-3", level:"B1.1", q:"Passive form of '食(た)べる' (to eat):", opts:["食(た)べさせる","食(た)べられる","食(た)べてもらう","食(た)べてあげる"], ans:"食(た)べられる", category:"passive" },
  { id:"ja-b11-4", level:"B1.1", q:"'雨(あめ)が 降(ふ)ったら 家(いえ)に います.' — 〜たら expresses:", opts:["reason","condition","contrast","purpose"], ans:"condition", category:"conditional" },
  { id:"ja-b11-5", level:"B1.1", q:"'〜なければなりません' expresses:", opts:["ability","desire","obligation","permission"], ans:"obligation", category:"obligation" },

  // ═══ B1.2 — て-form giving/receiving, 〜のに, reported speech ═══
  { id:"ja-b12-1", level:"B1.2", q:"'今年(ことし) 三(みっ)つの 国(くに)を 旅行(りょこう)し___.' (This year I have visited three countries.)", opts:["ます","ました","ています","ました"], ans:"ました", category:"present-perfect-equiv" },
  { id:"ja-b12-2", level:"B1.2", q:"'〜てくれました' indicates:", opts:["I did something for someone","someone did something for me","I am going to do something","someone will do something"], ans:"someone did something for me", category:"giving-receiving" },
  { id:"ja-b12-3", level:"B1.2", q:"'かれは つかれていると 言(い)いました.' — this is:", opts:["direct speech","indirect speech","a question","a command"], ans:"indirect speech", category:"reported-speech" },
  { id:"ja-b12-4", level:"B1.2", q:"'〜のに' (when joining two clauses) expresses:", opts:["reason","purpose","unexpected contrast","condition"], ans:"unexpected contrast", category:"connectors" },
  { id:"ja-b12-5", level:"B1.2", q:"'まだ 映画(えいが)を 見(み)ていません.' means:", opts:["I have already seen the movie","I haven't seen the movie yet","I am watching the movie","I will see the movie"], ans:"I haven't seen the movie yet", category:"negation" },

  // ═══ B2.1 — causative-passive, 〜ば conditional, keigo forms ═══
  { id:"ja-b21-1", level:"B2.1", q:"Causative-passive form of '食(た)べる':", opts:["食(た)べさせる","食(た)べられる","食(た)べさせられる","食(た)べてもらう"], ans:"食(た)べさせられる", category:"causative-passive" },
  { id:"ja-b21-2", level:"B2.1", q:"'お金(かね)があれば 車(くるま)を 買(か)えた のに.' — this expresses:", opts:["a future plan","a hypothetical regret","a polite request","a factual statement"], ans:"a hypothetical regret", category:"conditional-past" },
  { id:"ja-b21-3", level:"B2.1", q:"Respectful verb for 'いる' (to be/exist for person) in keigo:", opts:["おります","いらっしゃいます","ございます","まいります"], ans:"いらっしゃいます", category:"keigo" },
  { id:"ja-b21-4", level:"B2.1", q:"'〜にもかかわらず' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"advanced-connectors" },
  { id:"ja-b21-5", level:"B2.1", q:"'〜ば条件(じょうけん)' — what does this conditional emphasize?", opts:["the result is certain","a natural/logical if-then","a hypothetical only","a past regret"], ans:"a natural/logical if-then", category:"conditional" },

  // ═══ B2.2 — written style, advanced keigo, complex discourse ═══
  { id:"ja-b22-1", level:"B2.2", q:"Humble verb for 'いく' (to go) in keigo:", opts:["いらっしゃいます","おいでになります","まいります","ございます"], ans:"まいります", category:"keigo" },
  { id:"ja-b22-2", level:"B2.2", q:"Written/formal equivalent of 'でも' (but/however):", opts:["けど","だって","しかし","でも"], ans:"しかし", category:"register" },
  { id:"ja-b22-3", level:"B2.2", q:"'努力(どりょく)にも かかわらず 失敗(しっぱい)した.' — 'かかわらず' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"discourse" },
  { id:"ja-b22-4", level:"B2.2", q:"Nominalized form of '決定(けってい)する' (to decide) in formal writing:", opts:["決定(けってい)","決定(けってい)すること","決定(けってい)します","決定(けってい)した"], ans:"決定(けってい)", category:"nominalization" },
  { id:"ja-b22-5", level:"B2.2", q:"'〜とはいえ' means:", opts:["because","although/that said","in order to","if only"], ans:"although/that said", category:"discourse" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of JAPANESE_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default JAPANESE_PLACEMENT;
