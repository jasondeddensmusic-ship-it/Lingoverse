// Chinese (Mandarin) placement-quiz question bank.
// Chinese text uses hanzi + pinyin in parentheses where helpful.
// Schema: { id, level, q, opts[], ans, category? }

export const CHINESE_PLACEMENT = [
  // ═══ A1.1 — greetings, 是 basics, measure words intro, numbers 1-10 ═══
  { id:"zh-a11-1", level:"A1.1", q:"Which greeting is used to say hello?", opts:["晚安(wǎn'ān)","你好(nǐ hǎo)","再见(zàijiàn)","谢谢(xièxie)"], ans:"你好(nǐ hǎo)", category:"greetings" },
  { id:"zh-a11-2", level:"A1.1", q:"'我___ 学生(xuésheng).' (I am a student.)", opts:["是(shì)","有(yǒu)","在(zài)","做(zuò)"], ans:"是(shì)", category:"copula" },
  { id:"zh-a11-3", level:"A1.1", q:"Measure word for books (本 or 个):", opts:["个(gè)","本(běn)","张(zhāng)","条(tiáo)"], ans:"本(běn)", category:"measure-words" },
  { id:"zh-a11-4", level:"A1.1", q:"Which number is '七(qī)'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"zh-a11-5", level:"A1.1", q:"'我叫(jiào) ___.' (My name is ___.) — what does 叫 mean here?", opts:["to have","to be called","to want","to go"], ans:"to be called", category:"intro" },

  // A1.1 reinforcement pool
  { id:"zh-a11-6", level:"A1.1", q:"'谢谢(xièxie)' means:", opts:["Hello","Goodbye","Thank you","Excuse me"], ans:"Thank you", category:"greetings" },
  { id:"zh-a11-7", level:"A1.1", q:"'你好吗(nǐ hǎo ma)?' means:", opts:["What is your name?","How are you?","Where are you from?","How old are you?"], ans:"How are you?", category:"greetings" },

  // ═══ A1.2 — verb-object, negation 不, possession 的, time words ═══
  { id:"zh-a12-1", level:"A1.2", q:"'我们住(zhù)在北京(Běijīng).' — 住 here means:", opts:["to eat","to live/reside","to go","to want"], ans:"to live/reside", category:"verbs" },
  { id:"zh-a12-2", level:"A1.2", q:"Negation particle for present/future actions:", opts:["没(méi)","不(bù)","别(bié)","未(wèi)"], ans:"不(bù)", category:"negation" },
  { id:"zh-a12-3", level:"A1.2", q:"'他喝(hē)很多咖啡(kāfēi).' — the structural particle after a subject-modifier is:", opts:["的(de)","地(de)","得(de)","了(le)"], ans:"的(de)", category:"particles" },
  { id:"zh-a12-4", level:"A1.2", q:"'桌子(zhuōzi)上有(yǒu)___书(shū).' (There are some books on the table.) Best filler:", opts:["一本(yī běn)","一张(yī zhāng)","一个(yī gè)","的(de)"], ans:"一本(yī běn)", category:"measure-words" },
  { id:"zh-a12-5", level:"A1.2", q:"'你几岁(jǐ suì)?' means:", opts:["Where are you from?","How old are you?","What do you do?","What is your name?"], ans:"How old are you?", category:"expressions" },

  { id:"zh-a12-6", level:"A1.2", q:"'她二十五岁.' — age in Chinese uses:", opts:["是(shì)","有(yǒu)","在(zài)","了(le)"], ans:"有(yǒu)", category:"age" },
  { id:"zh-a12-7", level:"A1.2", q:"'我的姐姐(jiějie)很高(gāo).' — '我的' means:", opts:["my","I am","we","this"], ans:"my", category:"possessive" },

  // ═══ A2.1 — aspect marker 了/过/着, frequency, resultative complements ═══
  { id:"zh-a21-1", level:"A2.1", q:"'昨天(zuótiān)我去(qù)___电影院(diànyǐngyuàn).' Completed action marker:", opts:["过(guò)","了(le)","着(zhe)","得(de)"], ans:"了(le)", category:"aspect" },
  { id:"zh-a21-2", level:"A2.1", q:"'我从来不吃(chī)肉(ròu).' — '从来不' means:", opts:["sometimes","always","never","often"], ans:"never", category:"frequency" },
  { id:"zh-a21-3", level:"A2.1", q:"'他做完(zuò wán)了作业(zuòyè).' — '完' here is a:", opts:["measure word","resultative complement","aspect marker","preposition"], ans:"resultative complement", category:"resultative" },
  { id:"zh-a21-4", level:"A2.1", q:"Experience aspect marker (have done before):", opts:["了(le)","着(zhe)","过(guò)","完(wán)"], ans:"过(guò)", category:"aspect" },
  { id:"zh-a21-5", level:"A2.1", q:"'他们去年住在北京.' — how is past expressed?", opts:["by 了","by 过","by a time word (去年)","by 在"], ans:"by a time word (去年)", category:"past-time" },

  { id:"zh-a21-6", level:"A2.1", q:"Continuous action marker:", opts:["了(le)","过(guò)","着(zhe)","完(wán)"], ans:"着(zhe)", category:"aspect" },
  { id:"zh-a21-7", level:"A2.1", q:"'他写好(xiě hǎo)了报告(bàogào).' — '好' indicates:", opts:["the action is continuous","the action is completed satisfactorily","the action happened before","the action is habitual"], ans:"the action is completed satisfactorily", category:"resultative" },

  // ═══ A2.2 — comparison 比, modal 会/能/可以, pivot sentences ═══
  { id:"zh-a22-1", level:"A2.2", q:"'玛丽亚(Mǎlìyǎ)比(bǐ)约翰(Yuēhàn)高(gāo).' means:", opts:["Maria is as tall as Johan","Maria is taller than Johan","Maria is the tallest","Maria and Johan are tall"], ans:"Maria is taller than Johan", category:"comparison" },
  { id:"zh-a22-2", level:"A2.2", q:"'你会(huì)说法语(Fǎyǔ)吗?' — '会' here expresses:", opts:["permission","ability/skill","obligation","desire"], ans:"ability/skill", category:"modals" },
  { id:"zh-a22-3", level:"A2.2", q:"'书在桌子上.' — '在' here expresses:", opts:["existence","location","time","comparison"], ans:"location", category:"location" },
  { id:"zh-a22-4", level:"A2.2", q:"'如果(rúguǒ)我有时间(shíjiān),我会打电话给你.' — '如果' means:", opts:["because","although","if","when"], ans:"if", category:"conditional" },
  { id:"zh-a22-5", level:"A2.2", q:"'可以(kěyǐ)' expresses:", opts:["ability","permission","obligation","desire"], ans:"permission", category:"modals" },

  // ═══ B1.1 — 把-sentences, complex complements, 虽然…但是 ═══
  { id:"zh-b11-1", level:"B1.1", q:"'我把(bǎ)书放(fàng)在桌子上了.' — the 把-construction emphasizes:", opts:["who did the action","disposal/handling of a definite object","when the action occurred","the manner of the action"], ans:"disposal/handling of a definite object", category:"ba-construction" },
  { id:"zh-b11-2", level:"B1.1", q:"'虽然(suīrán)他很累,但是(dànshì)他继续(jìxù)了.' — this structure expresses:", opts:["reason","concession","condition","addition"], ans:"concession", category:"conjunctions" },
  { id:"zh-b11-3", level:"B1.1", q:"Potential complement: '我听不懂(tīng bu dǒng).' means:", opts:["I can hear but can't understand","I don't want to listen","I have never heard this","I heard and understood"], ans:"I can hear but can't understand", category:"potential-complement" },
  { id:"zh-b11-4", level:"B1.1", q:"'被(bèi)' is used to form:", opts:["active sentences","passive sentences","comparative sentences","existential sentences"], ans:"passive sentences", category:"passive" },
  { id:"zh-b11-5", level:"B1.1", q:"Directional complement of '进' in '走进来(zǒu jìn lái)' means:", opts:["walk out here","walk in here","walk up here","walk down here"], ans:"walk in here", category:"directional-complement" },

  // ═══ B1.2 — reported speech, topic-comment, complex time clauses ═══
  { id:"zh-b12-1", level:"B1.2", q:"'他说他累了.' — 他说 introduces:", opts:["a question","indirect speech","a command","a wish"], ans:"indirect speech", category:"reported-speech" },
  { id:"zh-b12-2", level:"B1.2", q:"'这本书,我已经(yǐjīng)读过了.' — this is an example of:", opts:["passive voice","topic-comment structure","comparative structure","resultative complement"], ans:"topic-comment structure", category:"topic-comment" },
  { id:"zh-b12-3", level:"B1.2", q:"'我还没看电影呢.' means:", opts:["I have already seen the movie","I haven't seen the movie yet","I am watching the movie","I will see the movie"], ans:"I haven't seen the movie yet", category:"negation" },
  { id:"zh-b12-4", level:"B1.2", q:"'一…就…' structure means:", opts:["although…","as soon as…then…","if…then…","even if…"], ans:"as soon as…then…", category:"time-clauses" },
  { id:"zh-b12-5", level:"B1.2", q:"'她正在睡觉,电话响了.' — how is the ongoing action expressed?", opts:["了","正在…(+V)","过","着"], ans:"正在…(+V)", category:"aspect" },

  // ═══ B2.1 — formal connectors, advanced complements, complex sentences ═══
  { id:"zh-b21-1", level:"B2.1", q:"'要是(yàoshi)我有钱,我就买车了.' (If I had had money, I would have bought a car.) — this expresses:", opts:["a future plan","a hypothetical/counterfactual","a command","a polite request"], ans:"a hypothetical/counterfactual", category:"conditional" },
  { id:"zh-b21-2", level:"B2.1", q:"'尽管(jǐnguǎn)…还是(háishi)…' expresses:", opts:["condition","concession","reason","result"], ans:"concession", category:"conjunctions" },
  { id:"zh-b21-3", level:"B2.1", q:"'被迫(bèipò)' in formal writing means:", opts:["to be allowed","to be forced","to be praised","to be expected"], ans:"to be forced", category:"passive-formal" },
  { id:"zh-b21-4", level:"B2.1", q:"'何况(hékuàng)' is used to:", opts:["introduce a contrast","reinforce an argument with a stronger example","express regret","indicate purpose"], ans:"reinforce an argument with a stronger example", category:"discourse" },
  { id:"zh-b21-5", level:"B2.1", q:"Formal equivalent of '但是' (but/however):", opts:["然而(rán'ér)","因为(yīnwèi)","所以(suǒyǐ)","虽然(suīrán)"], ans:"然而(rán'ér)", category:"register" },

  // ═══ B2.2 — written style, chengyu intro, advanced discourse ═══
  { id:"zh-b22-1", level:"B2.2", q:"'尽管他努力,还是失败了.' — '尽管' expresses:", opts:["reason","concession","addition","purpose"], ans:"concession", category:"discourse" },
  { id:"zh-b22-2", level:"B2.2", q:"Formal nominalization strategy in Chinese for 'to decide':", opts:["决定(juédìng) as noun","决定地","决定的化","把决定"], ans:"决定(juédìng) as noun", category:"nominalization" },
  { id:"zh-b22-3", level:"B2.2", q:"Most formal written register for 'I' (first-person):", opts:["我(wǒ)","俺(ǎn)","本人(běnrén)","咱(zán)"], ans:"本人(běnrén)", category:"register" },
  { id:"zh-b22-4", level:"B2.2", q:"'不折不扣(bù zhé bù kòu)' is a chengyu meaning:", opts:["by all means","without exception/to the letter","one after another","step by step"], ans:"without exception/to the letter", category:"chengyu" },
  { id:"zh-b22-5", level:"B2.2", q:"'就…而言(ér yán)' is used to:", opts:["express contrast","introduce a topic perspective","indicate time","express regret"], ans:"introduce a topic perspective", category:"discourse" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of CHINESE_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default CHINESE_PLACEMENT;
