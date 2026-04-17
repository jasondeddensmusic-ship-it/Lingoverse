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

{type:"mc",
 q:"Which language has the personal infinitive?",
 opts:["Spanish","French","Portuguese","Italian"],
 ans:"Portuguese",
 hint:"This feature is unique among major Romance languages."},

{type:"mc",
 q:"What is the ending for 'nós' in the personal infinitive?",
 opts:["-es","-mos","-em","-des"],
 ans:"-mos",
 hint:"Same ending as most first person plural forms in Portuguese."},

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
 example:"A: Comprei flores para a Ana ficar feliz.\nB: Que fofo você!",
 exampleSrc:"A: I bought flowers for Ana to be happy.\nB: How sweet of you!",
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
 example:"A: Antes de comermos, vamos lavar as mãos.\nB: Claro, higiene em primeiro lugar.",
 exampleSrc:"A: Before we eat, let's wash our hands.\nB: Of course, hygiene first.",
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
]}]}

]}; export default UNIT_20;
