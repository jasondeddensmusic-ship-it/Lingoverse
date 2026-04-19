// Korean placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const KOREAN_PLACEMENT = [
  // ═══ A1.1 — greetings, 이다 basics, honorifics, numbers 1-10 ═══
  { id:"ko-a11-1", level:"A1.1", q:"Which is a standard greeting in Korean?", opts:["안녕하세요","잘 자요","잘 먹겠습니다","감사합니다"], ans:"안녕하세요", category:"greetings" },
  { id:"ko-a11-2", level:"A1.1", q:"'저는 학생___.' (I am a student.) — polite form", opts:["이에요","이야","이다","야"], ans:"이에요", category:"copula" },
  { id:"ko-a11-3", level:"A1.1", q:"Subject particle after a consonant-ending noun:", opts:["이","가","은","는"], ans:"이", category:"particles" },
  { id:"ko-a11-4", level:"A1.1", q:"Which number is '칠'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"ko-a11-5", level:"A1.1", q:"'제 이름___ 지민이에요.' (My name is Jimin.) — topic marker", opts:["이","가","은","를"], ans:"은", category:"particles" },

  // A1.1 reinforcement pool
  { id:"ko-a11-6", level:"A1.1", q:"Polite sentence ending for statements:", opts:["아/어","아/어요","다","지"], ans:"아/어요", category:"speech-levels" },
  { id:"ko-a11-7", level:"A1.1", q:"'감사합니다' means:", opts:["Excuse me","Thank you","Hello","Goodbye"], ans:"Thank you", category:"greetings" },

  // ═══ A1.2 — present tense, object particles, basic adjectives ═══
  { id:"ko-a12-1", level:"A1.2", q:"'우리는 서울에 살___.' (We live in Seoul.) — polite present", opts:["아요","어요","아","이에요"], ans:"아요", category:"present-tense" },
  { id:"ko-a12-2", level:"A1.2", q:"Object particle after a vowel-ending noun:", opts:["이","가","을","를"], ans:"를", category:"particles" },
  { id:"ko-a12-3", level:"A1.2", q:"'그는 커피를 마___.' (He drinks coffee.) — polite", opts:["시다","십니다","셔요","셔"], ans:"셔요", category:"honorific" },
  { id:"ko-a12-4", level:"A1.2", q:"Locative particle for a destination:", opts:["에","에서","으로","의"], ans:"에", category:"particles" },
  { id:"ko-a12-5", level:"A1.2", q:"'나는 학생이___.' — informal (plain) statement ending", opts:["에요","예요","야","이야"], ans:"야", category:"copula-informal" },

  { id:"ko-a12-6", level:"A1.2", q:"'몇 살이에요?' means:", opts:["Where are you from?","How old are you?","What is your name?","What do you do?"], ans:"How old are you?", category:"expressions" },
  { id:"ko-a12-7", level:"A1.2", q:"'그녀는 스물다섯 살이에요.' — age counting system:", opts:["Native Korean numbers","Sino-Korean numbers","Both","Neither"], ans:"Native Korean numbers", category:"numbers" },

  // ═══ A2.1 — past tense, negation, connectors ═══
  { id:"ko-a21-1", level:"A2.1", q:"'어제 영화를 봤___.' (I saw a movie yesterday.) — polite past", opts:["어요","아요","았어요","었어요"], ans:"어요", category:"past-tense" },
  { id:"ko-a21-2", level:"A2.1", q:"'저는 고기를 안 먹___.' (I don't eat meat.) — polite present", opts:["어요","아요","아","이에요"], ans:"어요", category:"negation" },
  { id:"ko-a21-3", level:"A2.1", q:"Connector meaning 'and then' (sequential):", opts:["고","지만","서","는데"], ans:"고", category:"connectors" },
  { id:"ko-a21-4", level:"A2.1", q:"'그가 숙제를 했___.' (He did his homework.) — polite", opts:["아요","어요","이에요","예요"], ans:"어요", category:"past-tense" },
  { id:"ko-a21-5", level:"A2.1", q:"'가다' past tense (polite):", opts:["가요","갔어요","갈 거예요","가겠어요"], ans:"갔어요", category:"past-tense" },

  { id:"ko-a21-6", level:"A2.1", q:"'작년에 서울에 살___.' (I lived in Seoul last year.) — past polite", opts:["아요","았어요","어요","었어요"], ans:"았어요", category:"past-tense" },
  { id:"ko-a21-7", level:"A2.1", q:"Polite negation pattern using 지 않다:", opts:["먹지 않아요","먹안 해요","안 먹어요 only","먹지 않다 only"], ans:"먹지 않아요", category:"negation" },

  // ═══ A2.2 — future tense, -(으)려고, comparatives ═══
  { id:"ko-a22-1", level:"A2.2", q:"'내일 병원에 갈 ___.' (Tomorrow I will go to the doctor.) — volitional future", opts:["거예요","것이에요","예정이에요","겠어요"], ans:"거예요", category:"future" },
  { id:"ko-a22-2", level:"A2.2", q:"'마리아가 요한보다 더 ___.' (Maria is taller than Johan.)", opts:["높다","크다","많다","넓다"], ans:"크다", category:"comparative" },
  { id:"ko-a22-3", level:"A2.2", q:"Connector -(으)려고 is used to express:", opts:["reason","purpose/intention","contrast","condition"], ans:"purpose/intention", category:"connectors" },
  { id:"ko-a22-4", level:"A2.2", q:"'책이 탁자 위에 있___.' (The book is on the table.) — polite", opts:["에요","어요","아요","습니다"], ans:"어요", category:"location" },
  { id:"ko-a22-5", level:"A2.2", q:"Formal polite ending for statements (고급체):", opts:["아/어요","습니다/ㅂ니다","야/이야","다"], ans:"습니다/ㅂ니다", category:"speech-levels" },

  // ═══ B1.1 — indirect speech, -아/어야 하다, passive voice ═══
  { id:"ko-b11-1", level:"B1.1", q:"'그가 온다고 ___.' (He said that he is coming.) — indirect quotation", opts:["알아요","해요","말해요","들어요"], ans:"해요", category:"indirect-speech" },
  { id:"ko-b11-2", level:"B1.1", q:"'한국어를 공부해야 ___.' (I have to study Korean.) — obligation", opts:["해요","됩니다","해요/됩니다","있어요"], ans:"해요/됩니다", category:"obligation" },
  { id:"ko-b11-3", level:"B1.1", q:"Passive voice of '먹다' (to eat):", opts:["먹히다","먹이다","먹어지다","먹게 되다"], ans:"먹히다", category:"passive" },
  { id:"ko-b11-4", level:"B1.1", q:"'-더니' is used to express:", opts:["reason","sequential contrast from observation","purpose","condition"], ans:"sequential contrast from observation", category:"connectors" },
  { id:"ko-b11-5", level:"B1.1", q:"'비가 와서 집에 있었어요.' — what does '아서/어서' signal here?", opts:["contrast","reason/cause","sequence","purpose"], ans:"reason/cause", category:"connectors" },

  // ═══ B1.2 — -(으)면, conditional, -(으)ㄹ 것 같다 ═══
  { id:"ko-b12-1", level:"B1.2", q:"'시간이 있으면 전화할 ___.' (If I have time, I will call.) — future result", opts:["거예요","것이에요","겠어요","게 될 거예요"], ans:"거예요", category:"conditional" },
  { id:"ko-b12-2", level:"B1.2", q:"'그가 피곤한 것 ___.' (It seems he is tired.)", opts:["같아요","이에요","봐요","보여요"], ans:"같아요", category:"conjecture" },
  { id:"ko-b12-3", level:"B1.2", q:"'아직 영화를 못 봤___.' (I haven't seen the movie yet.)", opts:["아요","어요","이에요","아/어요"], ans:"어요", category:"negation" },
  { id:"ko-b12-4", level:"B1.2", q:"'-는 동안' means:", opts:["before","while/during","after","since"], ans:"while/during", category:"time-expressions" },
  { id:"ko-b12-5", level:"B1.2", q:"'그녀는 자는데 전화가 ___.' (She was sleeping when the phone rang.) — contrast connector", opts:["왔어요","왔는데요","와요","올 거예요"], ans:"왔어요", category:"narrative" },

  // ═══ B2.1 — advanced passives, -(으)ㄹ 뻔하다, complex connectors ═══
  { id:"ko-b21-1", level:"B2.1", q:"'돈이 있었으면 차를 샀을 ___.' (If I had had money, I would have bought a car.)", opts:["거예요","텐데요","것 같아요","겠어요"], ans:"텐데요", category:"conditional-past" },
  { id:"ko-b21-2", level:"B2.1", q:"'프랑스어를 하는 사람을 찾고 있어___.' (I'm looking for someone who speaks French.)", opts:["요","요/습니다","습니다","도요"], ans:"요", category:"relative-clause" },
  { id:"ko-b21-3", level:"B2.1", q:"'넘어질 뻔했어요.' means:", opts:["I fell down","I almost fell","I will fall","I used to fall"], ans:"I almost fell", category:"near-miss" },
  { id:"ko-b21-4", level:"B2.1", q:"'비가 와도 공원에 갈 거예요.' — what does '아도/어도' express?", opts:["reason","concession","condition","purpose"], ans:"concession", category:"connectors" },
  { id:"ko-b21-5", level:"B2.1", q:"Which expresses regret about the past?", opts:["갔으면 좋겠어요","갔더라면 좋았을 텐데요","가면 좋겠어요","가야 해요"], ans:"갔더라면 좋았을 텐데요", category:"regret" },

  // ═══ B2.2 — formal written style, nominalizations, advanced discourse ═══
  { id:"ko-b22-1", level:"B2.2", q:"Nominalization of '결정하다' (to decide) in formal writing:", opts:["결정","결정하기","결정함","결정했음"], ans:"결정", category:"nominalization" },
  { id:"ko-b22-2", level:"B2.2", q:"Most formal/written style sentence ending:", opts:["아/어요","습니다","다/이다","거든요"], ans:"다/이다", category:"register" },
  { id:"ko-b22-3", level:"B2.2", q:"'노력에도 불구하고 실패했다.' — '불구하고' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"discourse" },
  { id:"ko-b22-4", level:"B2.2", q:"Passive construction '책이 읽혀진다' uses:", opts:["active voice","double passive","causative","honorific passive"], ans:"double passive", category:"passive" },
  { id:"ko-b22-5", level:"B2.2", q:"'오죽하면 그랬겠어요.' — what does this imply?", opts:["straightforward statement","empathetic understanding of extreme circumstance","polite refusal","formal apology"], ans:"empathetic understanding of extreme circumstance", category:"discourse" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of KOREAN_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default KOREAN_PLACEMENT;
