const UNIT_20 = {n:20, lang:"pt", srcLang:"en", track:"v2", title:"Para nós fazermos...", sub:"Personal Infinitive (unique to Portuguese!)", icon:"🎭", level:"B1.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u20l1", title:"Meet the Personal Infinitive", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Portuguese's Secret Weapon",
 desc:"Portuguese is the only major Romance language with a personal infinitive. This verb form takes endings that match the subject, making it unique among Spanish, Italian, and French cousins.",
 goals:["See what makes Portuguese special","Learn the six personal infinitive endings","Recognize it in real sentences"]},

{type:"teach", trg:"infinitivo pessoal", src:"personal infinitive", pos:"noun", gender:"m",
 note:"A verb form unique to Portuguese. Takes endings that identify the subject: falar + mos = falarmos (for us to speak).",
 example:"A: É bom para nós estudarmos juntos.\nB: Concordo, aprendemos mais assim.",
 exampleSrc:"A: It is good for us to study together.\nB: I agree, we learn more that way.",
 funFact:"Spanish and Italian do not have this form. Portuguese invented it centuries ago and never let go."},

{type:"teach", trg:"falar", src:"to speak (basic infinitive)", pos:"verb", gender:null,
 note:"The regular infinitive. With no endings, it belongs to no specific subject.",
 example:"A: Eu gosto de falar português.\nB: Eu também, é uma língua linda.",
 exampleSrc:"A: I like to speak Portuguese.\nB: Me too, it's a beautiful language.",
 funFact:"This is the form you find in dictionaries. All Romance languages have it."},

{type:"teach", trg:"falarmos", src:"for us to speak", pos:"verb", gender:null,
 note:"Personal infinitive, first person plural. Formed by adding -mos to the basic infinitive.",
 example:"A: É importante falarmos sobre isso.\nB: Sim, precisamos conversar.",
 exampleSrc:"A: It is important for us to speak about this.\nB: Yes, we need to talk.",
 funFact:"The subject 'nós' is baked into the ending. No need to say it twice."},

{type:"teach", trg:"falares", src:"for you to speak", pos:"verb", gender:null,
 note:"Personal infinitive, second person singular (tu). Formed by adding -es to the basic infinitive.",
 example:"A: Antes de falares, pensa bem.\nB: Está bom, vou pensar.",
 exampleSrc:"A: Before you speak, think carefully.\nB: Okay, I'll think.",
 funFact:"More common in European Portuguese. Brazilians often use 'você falar' instead."},

{type:"teach", trg:"falarem", src:"for them to speak", pos:"verb", gender:null,
 note:"Personal infinitive, third person plural. Formed by adding -em to the basic infinitive.",
 example:"A: É hora de eles falarem com o chefe.\nB: Com certeza, não podem mais esperar.",
 exampleSrc:"A: It is time for them to speak with the boss.\nB: For sure, they can't wait any longer.",
 funFact:"Same ending for 'eles', 'elas', and 'vocês'. One form, three subjects."},

{type:"tip", title:"Personal Infinitive Endings",
 text:"Base form: falar (to speak)\n\neu > falar (no ending)\ntu > falares (+es)\nele / ela / você > falar (no ending)\nnós > falarmos (+mos)\nvós > falardes (+des, rare)\neles / elas / vocês > falarem (+em)\n\nSame endings for all regular verbs:\n\ncomer > comermos, comerem\npartir > partirmos, partirem",
 deepDive:{title:"Why Portuguese Invented This",
  text:"Portuguese needed a way to mark the subject of a non-finite verb inside a longer sentence. Spanish solves this with subjunctives and pronouns. Portuguese solves it with a simpler trick: just add endings to the infinitive. The personal infinitive appears as early as the 13th century and shows up in Camões and Pessoa. It makes Portuguese grammatically elegant in ways other Romance languages cannot match."}},

{type:"fb",
 s:"É bom para nós {1} todos os dias.",
 a:["estudarmos"],
 opts:["estudarmos","estudar","estudares","estudarem"],
 hint:"Subject is nós. Add the first person plural ending to estudar.",
 sSrc:"It is good for us {1} every day."},

{type:"fb",
 s:"É hora de eles {1} a verdade ao chefe.",
 a:["falarem"],
 opts:["falarem","falar","falarmos","falares"],
 hint:"Subject is eles. Third person plural personal infinitive.",
 sSrc:"It is time for them {1} the truth to the boss."},

{type:"mc",
 q:"Which language has the personal infinitive?",
 opts:["Spanish","French","Portuguese","Italian"],
 ans:"Portuguese",
 hint:"This feature is unique among major Romance languages."},

{type:"mc",
 q:"What is the ending for 'nós' in the personal infinitive?",
 opts:["-es","-mos","-em","-des"],
 ans:"-mos",
 hint:"The nós personal infinitive ending is consistent across all three verb types (-ar, -er, -ir)."},

{type:"fb",
 s:"É importante para nós {1} com honestidade.",
 a:["falarmos"],
 opts:["falarmos","falar","falares","falarem"],
 hint:"Subject is 'nós'. Use the matching personal infinitive ending.",
 sSrc:"It is important for us {1} with honesty."},

{type:"fb",
 s:"É hora de eles {1} a verdade.",
 a:["falarem"],
 opts:["falarem","falar","falarmos","falares"],
 hint:"Subject is 'eles'. Third person plural ending.",
 sSrc:"It is time for them {1} the truth."},

{type:"match", pairs:[
 {trg:"falar", src:"to speak"},
 {trg:"falares", src:"for you to speak"},
 {trg:"falarmos", src:"for us to speak"},
 {trg:"falarem", src:"for them to speak"}
]},

{type:"mc",
 q:"Which ending goes with 'eles'?",
 opts:["-mos","-es","-em","no ending"],
 ans:"-em",
 hint:"Third person plural, same for eles/elas/vocês."}
]},

{id:"ptv2_u20l2", title:"After Prepositions", icon:"🔗", xp:15, board:true, steps:[
{type:"intro", title:"The Prepositional Trigger",
 desc:"The personal infinitive shines after prepositions like para, antes de, depois de, and sem. English uses '-ing' or 'that + subject'. Portuguese uses this elegant form.",
 goals:["Use 'para + personal infinitive' for purpose","Use 'antes/depois de' for time","Use 'sem' for negation"]},

{type:"teach", trg:"para", src:"for / in order to", pos:"prep", gender:null,
 note:"When followed by a verb with a different subject, trigger the personal infinitive. Marks purpose or recipient.",
 example:"A: Comprei flores para a Ana.\nB: Que fofo você!\nA: É para ela sorrir.\nB: Ela vai adorar!",
 exampleSrc:"A: I bought flowers for Ana.\nB: How sweet of you!\nA: It is for her to smile.\nB: She will love it!",
 funFact:"Without a subject change, the regular infinitive is enough: 'comprei flores para dar a ela'."},

{type:"teach", trg:"antes de", src:"before", pos:"prep", gender:null,
 note:"Compound preposition. When followed by a different subject, use the personal infinitive.",
 example:"A: Antes de nós sairmos, vamos comer algo.\nB: Boa ideia, estou com fome.",
 exampleSrc:"A: Before we leave, let's eat something.\nB: Good idea, I'm hungry.",
 funFact:"English prefers 'before we leave' (subordinate clause). Portuguese compresses it into 'antes de nós sairmos'."},

{type:"teach", trg:"depois de", src:"after", pos:"prep", gender:null,
 note:"Compound preposition. Same rule: different subject triggers the personal infinitive.",
 example:"A: Depois de eles chegarem, começamos a reunião.\nB: Perfeito, vamos esperar.",
 exampleSrc:"A: After they arrive, we start the meeting.\nB: Perfect, let's wait.",
 funFact:"Notice how 'de' before the verb stays intact. Portuguese prepositions stack: 'depois de eles' = 'after they'."},

{type:"teach", trg:"sem", src:"without", pos:"prep", gender:null,
 note:"Preposition. With a different subject, triggers the personal infinitive.",
 example:"A: Sem você me ajudar, eu não consigo.\nB: Relaxa, eu te ajudo.",
 exampleSrc:"A: Without you helping me, I can't do it.\nB: Relax, I'll help you.",
 funFact:"In English, 'without you helping' uses the gerund. Portuguese picks the personal infinitive."},

{type:"teach", trg:"ao", src:"upon / when (contracted)", pos:"prep", gender:null,
 note:"Contraction of 'a' + 'o'. Followed by the personal infinitive, means 'upon doing' or 'when doing'.",
 example:"A: Ao chegarmos em casa, vamos jantar.\nB: Ótimo, estou morrendo de fome.",
 exampleSrc:"A: Upon arriving home, we'll have dinner.\nB: Great, I'm starving.",
 funFact:"This structure sounds literary but is common in journalism: 'ao saírem do estádio...' (upon leaving the stadium...)."},

{type:"tip", title:"Preposition Triggers",
 text:"Main triggers for personal infinitive:\n\npara + (different subject) + personal infinitive\nantes de + (different subject) + personal infinitive\ndepois de + (different subject) + personal infinitive\nsem + (different subject) + personal infinitive\nao + (different subject) + personal infinitive\n\nExamples:\n\npara ela saber (for her to know)\nantes de você chegar (before you arrive)\ndepois de eles partirem (after they leave)\nsem nós pedirmos (without us asking)\nao chegarmos (upon our arriving)",
 deepDive:{title:"Different Subject = Personal Infinitive",
  text:"The golden rule: if the preposition introduces a different subject from the main clause, switch to the personal infinitive. Same subject? Regular infinitive is fine. 'Eu saí para comer' (same subject, simple infinitive). 'Eu saí para eles comerem' (different subject, personal infinitive). This one rule handles most cases."}},

{type:"fb",
 s:"Comprei flores para ela {1} no dia especial.",
 a:["sorrir"],
 opts:["sorrir","sorrirmos","sorrirem","sorrirem"],
 hint:"Different subject (ela) after para. Simple infinitive works when subject = pronoun.",
 sSrc:"I bought flowers for her to {1} on the special day."},

{type:"fb",
 s:"Antes de vocês {1}, fechem as janelas.",
 a:["saírem"],
 opts:["saírem","sair","sairmos","saíres"],
 hint:"Subject is vocês. Third person plural personal infinitive ending.",
 sSrc:"Before you {1}, close the windows."},

{type:"mc",
 q:"Which triggers the personal infinitive?",
 opts:["a","em","para","com"],
 ans:"para",
 hint:"Preposition of purpose. Very common trigger."},

{type:"mc",
 q:"Choose the correct form: 'Antes de nós ___, vamos comer.'",
 opts:["sair","sairmos","saíres","saírem"],
 ans:"sairmos",
 hint:"Subject is 'nós'. Match the first person plural ending."},

{type:"fb",
 s:"Para eles {1} a prova, precisam estudar muito.",
 a:["passarem"],
 opts:["passarem","passar","passarmos","passares"],
 hint:"Subject is 'eles'. Third person plural personal infinitive.",
 sSrc:"For them to pass the test, they need to study a lot."},

{type:"fb",
 s:"Depois de você {1} o trabalho, vamos celebrar.",
 a:["terminar"],
 opts:["terminar","terminarmos","terminarem","terminares"],
 hint:"Subject is 'você'. Same ending as the basic infinitive, no extra letters.",
 sSrc:"After you finish the work, we'll celebrate."},

{type:"match", pairs:[
 {trg:"para", src:"for / in order to"},
 {trg:"antes de", src:"before"},
 {trg:"depois de", src:"after"},
 {trg:"sem", src:"without"},
 {trg:"ao", src:"upon / when"}
]},

{type:"mc",
 q:"Which sentence is correct?",
 opts:["Sem nós pedir, ele ajudou.","Sem nós pedirmos, ele ajudou.","Sem pedirmos nós, ele ajudou.","Sem pedir nós, ele ajudou."],
 ans:"Sem nós pedirmos, ele ajudou.",
 hint:"Subject '___' triggers the personal infinitive with the -mos ending."},

{type:"drag_fill",
 s:"Para nós {1} cedo, é preciso vocês {2} tudo a tempo.",
 blanks:{"1":"sairmos","2":"fazerem"},
 pool:["sairmos","fazerem","sair","fazer"],
 hint:"First blank: subject nós. Second blank: subject vocês."}
]},

{id:"ptv2_u20l3", title:"Different Subjects in Sentences", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Weaving Two Subjects Together",
 desc:"The personal infinitive lets Portuguese handle two different subjects in one sentence without long subordinate clauses. This is where the form really pays off.",
 goals:["Combine main clause and infinitive clause","Contrast with subjunctive options","Master the elegant style"]},

{type:"teach", trg:"é melhor", src:"it is better", pos:"adj", gender:null,
 note:"Impersonal expression. Often followed by 'para' + personal infinitive to introduce a different subject.",
 example:"A: É melhor eles chegarem cedo.\nB: Concordo, assim evitamos fila.",
 exampleSrc:"A: It is better for them to arrive early.\nB: I agree, that way we avoid lines.",
 funFact:"Without the personal infinitive, Portuguese would need 'é melhor que eles cheguem' (subjunctive). Much heavier."},

{type:"teach", trg:"é bom", src:"it is good", pos:"adj", gender:null,
 note:"Another impersonal trigger. Followed by the personal infinitive, it gives advice or recommendations.",
 example:"A: É bom vocês descansarem um pouco.\nB: Boa, vamos dormir cedo hoje.",
 exampleSrc:"A: It is good for you all to rest a bit.\nB: Good, we'll sleep early today.",
 funFact:"Brazilian mothers have said 'é bom você comer tudo' at every dinner table since the 1500s."},

{type:"teach", trg:"é difícil", src:"it is difficult", pos:"adj", gender:null,
 note:"Impersonal expression followed by the personal infinitive to mark a difficulty for a specific subject.",
 example:"A: É difícil nós aceitarmos essa decisão.\nB: Eu sei, mas temos que seguir em frente.",
 exampleSrc:"A: It is difficult for us to accept this decision.\nB: I know, but we have to move forward.",
 funFact:"Replaces the more formal 'é difícil que nós aceitemos' (subjunctive). The personal infinitive is cleaner."},

{type:"teach", trg:"convém", src:"it is advisable", pos:"verb", gender:null,
 note:"Impersonal verb. Followed by the personal infinitive, it gives polished advice.",
 example:"A: Convém vocês prepararem os documentos.\nB: Sim, vamos organizar tudo agora.",
 exampleSrc:"A: It is advisable for you to prepare the documents.\nB: Yes, let's organize everything now.",
 funFact:"Sounds formal and bureaucratic. Common in legal and official Portuguese writing."},

{type:"teach", trg:"comermos", src:"for us to eat", pos:"verb", gender:null,
 note:"Personal infinitive of 'comer', first person plural. -er verbs add -mos to the infinitive.",
 example:"A: Antes de comermos, vamos lavar as mãos.\nB: Claro, é muito importante.",
 exampleSrc:"A: Before we eat, let's wash our hands.\nB: Of course, it is very important.",
 funFact:"Same ending for -ar, -er, and -ir verbs in the first person plural. Consistent and easy."},

{type:"teach", trg:"virmos", src:"for us to come", pos:"verb", gender:null,
 note:"Personal infinitive of 'vir' (to come). Irregular infinitive stem, but regular personal endings.",
 example:"A: É bom virmos cedo para pegar lugar.\nB: Verdade, tem muita gente hoje.",
 exampleSrc:"A: It is good for us to come early to get a spot.\nB: True, there are a lot of people today.",
 funFact:"'Vir' is irregular in many tenses, but the personal infinitive stays predictable."},

{type:"tip", title:"Personal Infinitive vs Subjunctive",
 text:"Two ways to express 'that we arrive on time':\n\nSubjunctive:\nÉ importante que cheguemos a tempo.\n(It is important that we arrive on time.)\n\nPersonal infinitive:\nÉ importante chegarmos a tempo.\n(It is important for us to arrive on time.)\n\nBoth are correct. The personal infinitive is shorter and often feels more elegant. Journalists, writers, and careful speakers prefer it. Casual speakers lean on both.",
 deepDive:{title:"When to Pick Which",
  text:"Use the personal infinitive after prepositions (para, antes de, sem). Use the subjunctive after 'que' (é importante que, embora, para que). When both options exist, the personal infinitive sounds more formal and concise, while the subjunctive feels more conversational. Mix them depending on register."}},

{type:"mc",
 q:"What is the personal infinitive of 'comer' for nós?",
 opts:["comer","comermos","comerem","comeres"],
 ans:"comermos",
 hint:"Add -mos to the basic infinitive for 'nós'."},

{type:"mc",
 q:"Choose the correct sentence:",
 opts:["É importante nós comer tudo.","É importante nós comermos tudo.","É importante nós comemos tudo.","É importante comemos tudo nós."],
 ans:"É importante nós comermos tudo.",
 hint:"After 'é ___', when the subject is explicit, use the personal infinitive."},

{type:"fb",
 s:"Convém vocês {1} agora mesmo.",
 a:["partirem"],
 opts:["partirem","partir","partires","partirmos"],
 hint:"Subject is 'vocês' (third person plural). Use the matching ending.",
 sSrc:"It is advisable for you all {1} right now."},

{type:"fb",
 s:"Antes de nós {1} para a rua, vamos verificar tudo.",
 a:["virmos"],
 opts:["virmos","vir","virem","vires"],
 hint:"Personal infinitive of 'vir' for the subject nós.",
 sSrc:"Before we {1} to the street, let's check everything."},

{type:"match", pairs:[
 {trg:"falarmos", src:"for us to speak"},
 {trg:"comermos", src:"for us to eat"},
 {trg:"virmos", src:"for us to come"},
 {trg:"partirem", src:"for them to leave"},
 {trg:"chegarem", src:"for them to arrive"}
]},

{type:"mc",
 q:"Which sentence uses the personal infinitive correctly?",
 opts:["É bom nós estudar.","É bom nós estudarmos.","É bom estudares nós.","É bom estudamos nós."],
 ans:"É bom nós estudarmos.",
 hint:"Subject '___' takes the -mos ending on the infinitive."},

{type:"mc",
 q:"What is the main advantage of the personal infinitive over the subjunctive?",
 opts:["It is always required","It sounds older","It is often shorter and more elegant","It works only with pronouns"],
 ans:"It is often shorter and more elegant",
 hint:"Compare the two patterns and see which feels lighter."},

{type:"drag_fill",
 s:"Para {1} o teste, é bom {2} muito na semana anterior.",
 blanks:{"1":"passares","2":"estudares"},
 pool:["passares","estudares","passarmos","estudarmos"],
 hint:"Both blanks share the subject 'tu'. Use the -es ending twice."}
,

{type:"match", pairs:[
  {trg:"é melhor", src:"it is better"},
  {trg:"é difícil", src:"it is difficult"},
  {trg:"convém", src:"it is advisable"}
]}]},

{id:"ptv2_u20l_b1_abstract", title:"Abstract Ideas and Discourse", icon:"💡", xp:20, board:true, steps:[
{type:"intro", title:"The Language of Ideas",
 desc:"These abstract nouns and discourse verbs are the building blocks of B1-level discussion. Master them and you can explain causes, propose solutions, and discuss consequences in Portuguese.",
 goals:["Learn 6 key abstract nouns for B1 discussion","Master 3 essential discourse verbs","Practice using them in context"]},

{type:"teach", trg:"o significado", src:"the meaning / the significance", pos:"noun", gender:"m",
 note:"What a word, phrase, or event means. Used in both linguistic and abstract contexts.",
 example:"A: Qual é o significado desta palavra?\nB: Não sei, precisamos verificar.",
 exampleSrc:"A: What is the meaning of this word?\nB: I don't know, we need to check.",
 funFact:"Significado shares its Latin root with English 'significant'. Both come from signum (sign) + facere (to make)."},

{type:"teach", trg:"o efeito", src:"the effect / the result", pos:"noun", gender:"m",
 note:"The outcome or impact of something. Often paired with 'a causa' (cause) in B1 discussions.",
 example:"A: O efeito do trabalho em equipe é muito bom.\nB: Concordo, trabalhamos melhor juntos.",
 exampleSrc:"A: The effect of teamwork is very good.\nB: I agree, we work better together.",
 funFact:"Efeito special — a common phrase for a particularly striking or dramatic result. Borrowed from film and theater."},

{type:"teach", trg:"a causa", src:"the cause / the reason", pos:"noun", gender:"f",
 note:"The origin or reason behind something. In Portuguese, causa and razão are near-synonyms but causa emphasizes direct action.",
 example:"A: Qual é a causa do problema?\nB: Ainda não sei, precisamos analisar.",
 exampleSrc:"A: What is the cause of the problem?\nB: I still don't know, we need to analyse.",
 funFact:"'Por causa de' (because of) is one of the most common prepositional phrases in everyday Brazilian speech."},

{type:"teach", trg:"o objetivo", src:"the goal / the objective", pos:"noun", gender:"m",
 note:"A target or aim. Used in professional, academic, and personal contexts.",
 example:"A: Qual é o objetivo desta reunião?\nB: É preciso falar sobre o trabalho da empresa.",
 exampleSrc:"A: What is the goal of this meeting?\nB: We need to talk about the company's work.",
 funFact:"Objetivo is a false friend alert: in Portuguese it never means 'objective' in the sense of unbiased. Use 'imparcial' for that."},

{type:"teach", trg:"a solução", src:"the solution / the answer (to a problem)", pos:"noun", gender:"f",
 note:"The resolution to a difficulty. Pair it with 'o problema' to practice cause-effect discussion.",
 example:"A: Temos um problema. Qual é a solução?\nB: Precisamos pensar juntos.",
 exampleSrc:"A: We have a problem. What is the solution?\nB: We need to think together.",
 funFact:"Solução comes from Latin solvere (to loosen, to free). The same root gives us English 'dissolve' and 'solve'."},

{type:"teach", trg:"a consequência", src:"the consequence", pos:"noun", gender:"f",
 note:"The result that follows from an action or decision. Often implies a negative outcome, but not always.",
 example:"A: Qual é a consequência desta decisão?\nB: Ainda não sabemos, mas é importante analisar.",
 exampleSrc:"A: What is the consequence of this decision?\nB: We don't know yet, but it is important to analyse.",
 funFact:"Portuguese often pairs consequência with 'ter': 'isso tem consequências' (this has consequences). A very natural construction."},

{type:"tip", title:"Cause and Effect in Portuguese",
 text:"Three core abstract nouns for B1 discussion:\n\na causa (f) > the cause\no efeito (m) > the effect\na consequência (f) > the consequence\n\nCommon patterns:\n\nA causa do problema é...\nO efeito desta decisão é...\nA consequência é...\n\nNotice the genders: causa and consequência are feminine, efeito is masculine.",
 deepDive:{title:"Why These Nouns Are Certification-Grade",
  text:"CELPE-Bras B1 tests the ability to explain, discuss, and reason. Examiners look for linking words and abstract nouns that show logical thinking. A candidate who can say 'a causa disso é... e a consequência é...' demonstrates B1 competence. Candidates who only use simpler connectors like 'e' and 'mas' score at A2. Mastering these nouns moves your Portuguese into a different register."}},

{type:"teach", trg:"explicar", src:"to explain", pos:"verb", gender:null,
 note:"Regular -ar verb. Key forms: eu explico, você explica, nós explicamos. Used to clarify or make something clear.",
 example:"A: Pode explicar o objetivo desta tarefa?\nB: Claro, vou explicar agora.",
 exampleSrc:"A: Can you explain the goal of this task?\nB: Of course, I'll explain now.",
 funFact:"In Brazilian schools, a common student request is 'professor, pode explicar de novo?' (teacher, can you explain again?). Universally understood and always polite."},

{type:"teach", trg:"aceitar", src:"to accept", pos:"verb", gender:null,
 note:"Regular -ar verb. Key forms: eu aceito, você aceita, nós aceitamos. To agree to receive, allow, or acknowledge.",
 example:"A: É difícil aceitar esta consequência.\nB: Eu sei, mas precisamos pensar na solução.",
 exampleSrc:"A: It is difficult to accept this consequence.\nB: I know, but we need to think about the solution.",
 funFact:"'Aceitar' also covers card payment in shops: 'Aceita cartão?' (Do you accept card?). One of the most practical verbs for daily life."},

{type:"teach", trg:"propor", src:"to propose / to suggest", pos:"verb", gender:null,
 note:"Irregular -er verb derived from 'pôr'. Key forms: eu proponho, você propõe, nós propomos. Used in meetings, debates, and formal settings.",
 example:"A: Quero propor uma solução para o problema.\nB: Ótimo, vamos ouvir a sua ideia.",
 exampleSrc:"A: I want to propose a solution to the problem.\nB: Great, let's hear your idea.",
 funFact:"'Propor' follows the same conjugation pattern as 'compor', 'dispor', and 'expor'. Once you learn one, you know them all."},

{type:"mc",
 q:"Which noun refers to the reason something happens?",
 opts:["o efeito","o objetivo","a causa","a solução"],
 ans:"a causa",
 hint:"Think of the starting point in a cause-and-effect chain."},

{type:"mc",
 q:"Which verb means 'to suggest a plan or idea'?",
 opts:["aceitar","explicar","propor","querer"],
 ans:"propor",
 hint:"This verb is used in meetings and formal contexts to put forward a new idea."},

{type:"fb",
 s:"A professora vai {1} o significado desta palavra.",
 a:["explicar"],
 opts:["explicar","aceitar","propor","falar"],
 hint:"Clarify or make something clear. Regular -ar verb.",
 sSrc:"The teacher is going to {1} the meaning of this word."},

{type:"fb",
 s:"O objetivo da reunião é encontrar uma {1} para o problema.",
 a:["solução"],
 opts:["solução","consequência","causa","efeito"],
 hint:"A resolution to a difficulty. Feminine noun.",
 sSrc:"The goal of the meeting is to find a {1} to the problem."},

{type:"fb",
 s:"É difícil {1} as consequências desta decisão.",
 a:["aceitar"],
 opts:["aceitar","propor","explicar","fazer"],
 hint:"To agree to receive or acknowledge something. Regular -ar verb.",
 sSrc:"It is difficult to {1} the consequences of this decision."},

{type:"match", pairs:[
 {trg:"o significado", src:"the meaning"},
 {trg:"o efeito", src:"the effect"},
 {trg:"a causa", src:"the cause"},
 {trg:"o objetivo", src:"the goal"},
 {trg:"a solução", src:"the solution"},
 {trg:"a consequência", src:"the consequence"}
]},

{type:"fb",
 s:"O funcionário quer {1} uma nova solução para o efeito do problema.",
 a:["propor"],
 opts:["propor","aceitar","explicar","fazer"],
 hint:"Put forward a new idea or plan. Irregular -er verb.",
 sSrc:"The employee wants to {1} a new solution to the effect of the problem."},

{type:"mc",
 q:"What is the gender of 'a consequência'?",
 opts:["masculine","feminine","neuter","it varies"],
 ans:"feminine",
 hint:"The article 'a' is a clear signal of the grammatical gender."},

{type:"mc",
 q:"Which sentence correctly uses 'o efeito'?",
 opts:["O efeito de propor é a causa.","O efeito do trabalho em equipe é muito bom.","O efeito aceitar é difícil.","O efeito de a solução é o objetivo."],
 ans:"O efeito do trabalho em equipe é muito bom.",
 hint:"Effect follows from an action or situation. Pick the sentence where a clear situation produces an outcome."},

{type:"drag_fill",
 s:"A {1} do problema é o trabalho em excesso. O {2} já é visível na empresa.",
 blanks:{"1":"causa","2":"efeito"},
 pool:["causa","efeito","solução","objetivo"],
 hint:"First blank: what produced the problem. Second blank: the visible result.",
 sSrc:"The {1} of the problem is overwork. The {2} is already visible at the company."}
]}

]}; export default UNIT_20;
