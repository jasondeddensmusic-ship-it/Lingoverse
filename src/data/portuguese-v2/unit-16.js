const UNIT_16 = {n:16, lang:"pt", srcLang:"en", track:"v2", title:"Espero que...", sub:"Present Subjunctive", icon:"🎯", level:"B1.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u16l1", title:"What is the Subjunctive?", icon:"💡", xp:15, board:true, steps:[
{type:"intro", title:"The Tricky Part", desc:"English speakers struggle with the subjunctive because English lost most of its forms. Portuguese uses it constantly: for wishes, doubts, emotions, and possibilities. You start with the foundation and build up.", goals:["Understand what the subjunctive expresses","Form present subjunctive of regular verbs","Use que as the subjunctive trigger"]},

{type:"tip", title:"What the Subjunctive Is",
 text:"The subjunctive expresses:\n\nwishes: Espero que você venha. (I hope you come.)\nemotions: Fico feliz que esteja bem. (I am glad you are well.)\ndoubt: Talvez ele saiba. (Maybe he knows.)\nimpersonal opinions: É importante que estudemos. (It is important that we study.)\n\nThe indicative states facts. The subjunctive explores feelings and possibilities.",
 deepDive:{title:"Why English Lost It", text:"Old English had a full subjunctive, but over centuries it faded into 'may' and 'might' and a few fossilized phrases ('if I were you', 'long live the king'). Portuguese kept its subjunctive alive and strong. Every sentence with 'que' introducing a desire, emotion, or doubt triggers it. Once you internalize the trigger verbs, the subjunctive becomes second nature."}},

{type:"verb_table", title:"Present Subjunctive: falar, comer, partir",
 note:"The magic: flip the eu present vowel. -ar verbs switch to -e. -er and -ir verbs switch to -a. One rule, every regular verb.",
 groups:[{label:"falar", rows:[
   {pronoun:"que eu", form:"fale", src:"that I speak"},
   {pronoun:"que você / ele / ela", form:"fale", src:"that you / he / she speak"},
   {pronoun:"que nós", form:"falemos", src:"that we speak"},
   {pronoun:"que vocês / eles / elas", form:"falem", src:"that you all / they speak"}
 ]},{label:"comer", rows:[
   {pronoun:"que eu", form:"coma", src:"that I eat"},
   {pronoun:"que você / ele / ela", form:"coma", src:"that you / he / she eat"},
   {pronoun:"que nós", form:"comamos", src:"that we eat"},
   {pronoun:"que vocês / eles / elas", form:"comam", src:"that you all / they eat"}
 ]},{label:"partir", rows:[
   {pronoun:"que eu", form:"parta", src:"that I leave"},
   {pronoun:"que você / ele / ela", form:"parta", src:"that you / he / she leave"},
   {pronoun:"que nós", form:"partamos", src:"that we leave"},
   {pronoun:"que vocês / eles / elas", form:"partam", src:"that you all / they leave"}
 ]}]},

{type:"tip", title:"The Formation Trick",
 text:"Step 1: Take the eu form of the present indicative.\nfalar > falo, comer > como, partir > parto.\n\nStep 2: Drop the final -o.\nfalo > fal, como > com, parto > part.\n\nStep 3: Add the opposite vowel endings.\n-ar > -e/-emos/-em\n-er/-ir > -a/-amos/-am.\n\nThis rule handles MOST irregular verbs too, because they base the subjunctive on the irregular eu form.",
 deepDive:{title:"Why the Vowel Flip?", text:"This 'opposite vowel' pattern comes straight from Latin. In Latin, present indicative used one set of vowels (e for most, a for some), and the present subjunctive used the other. Portuguese inherited this flip. Once you see it, you never forget: -ar becomes -e, -er and -ir become -a. Three verb classes, one switch."}},

{type:"teach", trg:"fale", src:"speak (subjunctive)", pos:"verb", gender:null,
 note:"Subjunctive of falar for eu, você, ele, ela.\nUsed after trigger verbs like querer que and esperar que.",
 example:"A: Quero que você fale com o seu irmão.\nB: Por quê?\nA: Ele está triste.\nB: Tudo bem, eu falo.",
 exampleSrc:"A: I want you to speak with your brother.\nB: Why?\nA: He is sad.\nB: Okay, I will talk.",
 funFact:"'Quero que você fale' literally says 'I want that you speak'. Portuguese needs the que and the subjunctive. English drops both."},

{type:"teach", trg:"coma", src:"eat (subjunctive)", pos:"verb", gender:null,
 note:"Subjunctive of comer for eu, você, ele, ela.\nFlips -er to -a.",
 example:"A: Espero que você coma tudo.\nB: Vou comer, está delicioso.\nA: Que bom!\nB: A salada está ótima.",
 exampleSrc:"A: I hope you eat everything.\nB: I am going to eat it, it is delicious.\nA: How nice!\nB: The salad is great.",
 funFact:"Brazilian moms use 'Quero que você coma!' on repeat. It is the soundtrack of every childhood lunch."},

{type:"teach", trg:"venha", src:"come (subjunctive)", pos:"verb", gender:null,
 note:"Subjunctive of vir.\nIrregular but follows the eu-form rule: eu venho > venha.",
 example:"A: Espero que você venha à festa.\nB: Venho sim, com certeza.\nA: Que bom!\nB: Não perderia por nada.",
 exampleSrc:"A: I hope you come to the party.\nB: I am coming for sure.\nA: How nice!\nB: I would not miss it for anything.",
 funFact:"Venha follows the rule perfectly: eu venho (I come) > drop -o > venha. The irregular stem carries through."},

{type:"teach", trg:"seja", src:"be (subjunctive)", pos:"verb", gender:null,
 note:"Subjunctive of ser.\nTruly irregular, does NOT follow the eu-form rule.",
 example:"A: Espero que seja possível.\nB: Vou verificar.\nA: Obrigado.\nB: Sem problemas.",
 exampleSrc:"A: I hope it is possible.\nB: I will check.\nA: Thank you.\nB: No problem.",
 funFact:"Ser has a completely unique subjunctive: seja, seja, sejamos, sejam. You just memorize this one."},

{type:"teach", trg:"esteja", src:"be (subjunctive of estar)", pos:"verb", gender:null,
 note:"Subjunctive of estar.\nFrom the eu form estou, flipped to esteja.",
 example:"A: Espero que ela esteja bem.\nB: Também espero.\nA: Vou ligar para ela.\nB: Boa ideia.",
 exampleSrc:"A: I hope she is well.\nB: I hope so too.\nA: I will call her.\nB: Good idea.",
 funFact:"Ser uses seja (permanent state). Estar uses esteja (temporary state). The permanent/temporary split continues in the subjunctive."},

{type:"mc", q:"Choose the correct subjunctive of falar for eu:", opts:["falo","fala","fale","falei"], ans:"fale", hint:"Subjunctive flips the final vowel. -ar verb eu form."},

{type:"mc", q:"'Quero que você coma tudo' means:", opts:["I want you to eat everything","I want to eat everything","I eat everything","I will eat everything"], ans:"I want you to eat everything", hint:"Quero que triggers the subjunctive. Coma is the flipped form."},

{type:"fb", s:"Espero que você {1} cedo amanhã.", a:["venha"], opts:["venha","vem","veio","virá"], hint:"Subjunctive after espero que. Use irregular form of vir.", sSrc:"I hope you {1} early tomorrow."},

{type:"mc", q:"Which sentence uses the subjunctive correctly?", opts:["Quero que ela fala comigo","Quero que ela fale comigo","Quero que ela falou comigo","Quero que ela falará comigo"], ans:"Quero que ela fale comigo", hint:"___rer ___ is a trigger. The verb must be in the subjunctive."},

{type:"fb", s:"Espero que nós {1} a tempo.", a:["cheguemos"], opts:["cheguemos","chegamos","chegaremos","chegávamos"], hint:"Subjunctive of chegar for nós. Watch the spelling: c > qu before e.", sSrc:"I hope we {1} on time."},

{type:"match", pairs:[
  {trg:"que eu fale", src:"that I speak"},
  {trg:"que ele coma", src:"that he eats"},
  {trg:"que nós partamos", src:"that we leave"},
  {trg:"que eles sejam", src:"that they be"}
]},

{type:"mc", q:"Which is the subjunctive of ser for eu?", opts:["seja","sou","era","fui"], ans:"seja", hint:"Ser has a unique irregular subjunctive. Four letters, starts with s."},

{type:"fb", s:"Espero que ele {1} feliz.", a:["seja"], opts:["seja","é","era","será"], hint:"Feelings + que + subjunctive. Ser is irregular.", sSrc:"I hope he {1} happy."},

{type:"teach", trg:"saiba", src:"know (subjunctive of saber)", pos:"verb", gender:null,
 note:"Subjunctive of saber.\nIrregular: eu sei, but saiba in subjunctive.",
 example:"A: Quero que ela saiba a verdade.\nB: Você vai contar?\nA: Vou, hoje à noite.\nB: Coragem.",
 exampleSrc:"A: I want her to know the truth.\nB: Are you going to tell her?\nA: I am, tonight.\nB: Be brave.",
 funFact:"Saber has one of the most unexpected subjunctive forms: saiba. It does not follow the eu-form rule. Memorize it."},

{type:"mc", q:"Choose the correct subjunctive pair.", opts:["espero que ele venha","espero que ele vem","espero que ele veio","espero que ele virá"], ans:"espero que ele venha", hint:"Esperar ___ triggers the subjunctive. ___ is the irregular form."}
]},

{id:"ptv2_u16l2", title:"Trigger Verbs: querer, esperar, duvidar", icon:"🔔", xp:15, board:true, steps:[
{type:"intro", title:"What Triggers the Subjunctive", desc:"The subjunctive does not appear alone. It appears after specific trigger verbs and expressions: querer que, esperar que, duvidar que, and a few more. You learn the top triggers and practice using them.", goals:["Use querer que + subjunctive","Use esperar que + subjunctive","Use duvidar que + subjunctive","Recognize impersonal triggers like é importante que"]},

{type:"tip", title:"The Top Trigger Verbs",
 text:"Three mega-common triggers:\n\nquerer que = to want (someone to)\nEspero que = to hope (that)\nduvidar que = to doubt (that)\n\nFormula: trigger verb + que + subject + SUBJUNCTIVE.\nEu quero que você venha. (I want you to come.)\nEla espera que chova. (She hopes it rains.)\nDuvido que ele saiba. (I doubt he knows.)",
 deepDive:{title:"The 'Different Subject' Rule", text:"The subjunctive only appears when the two verbs have different subjects. 'I want YOU to come' = different subjects = subjunctive. 'I want to come' = same subject = infinitive (Eu quero vir). If both subjects match, Portuguese uses the infinitive, not the subjunctive. This rule alone eliminates half of English speakers' errors."}},

{type:"verb_table", title:"Subjunctive: ir and estar (irregular)",
 note:"Both base their subjunctive on the eu form (vou, estou), which reveals the stems (v-, est-) plus the flipped endings.",
 groups:[{label:"ir", rows:[
   {pronoun:"que eu", form:"vá", src:"that I go"},
   {pronoun:"que você / ele / ela", form:"vá", src:"that you / he / she go"},
   {pronoun:"que nós", form:"vamos", src:"that we go"},
   {pronoun:"que vocês / eles / elas", form:"vão", src:"that you all / they go"}
 ]},{label:"estar", rows:[
   {pronoun:"que eu", form:"esteja", src:"that I be"},
   {pronoun:"que você / ele / ela", form:"esteja", src:"that you / he / she be"},
   {pronoun:"que nós", form:"estejamos", src:"that we be"},
   {pronoun:"que vocês / eles / elas", form:"estejam", src:"that you all / they be"}
 ]}]},

{type:"teach", trg:"quero que", src:"I want (someone to)", pos:"verb", gender:null,
 note:"Querer que triggers the subjunctive.\nOnly when subjects differ.",
 example:"A: Quero que você descanse hoje.\nB: Eu preciso estudar.\nA: Amanhã você estuda.\nB: Tudo bem.",
 exampleSrc:"A: I want you to rest today.\nB: I need to study.\nA: You study tomorrow.\nB: Alright.",
 funFact:"'Quero que' is the Brazilian engine of every parental command. Every child hears this phrase thousands of times."},

{type:"teach", trg:"espero que", src:"I hope (that)", pos:"verb", gender:null,
 note:"Esperar que triggers the subjunctive.\nFor hopes and optimistic wishes.",
 example:"A: Espero que tudo dê certo.\nB: Também espero.\nA: Cruzando os dedos.\nB: Vai dar.",
 exampleSrc:"A: I hope everything works out.\nB: I hope so too.\nA: Fingers crossed.\nB: It will.",
 funFact:"'Espero que dê certo' (I hope it works out) is the national mantra. Brazilians use it daily."},

{type:"teach", trg:"duvido que", src:"I doubt (that)", pos:"verb", gender:null,
 note:"Duvidar que triggers the subjunctive.\nAlways expresses uncertainty.",
 example:"A: Você acha que ele vem?\nB: Duvido que venha, está ocupado.\nA: Que pena.\nB: Talvez na próxima.",
 exampleSrc:"A: Do you think he is coming?\nB: I doubt he is coming, he is busy.\nA: What a shame.\nB: Maybe next time.",
 funFact:"Duvido que is the skeptic's subjunctive. Brazilians use it lightly, often with a smile."},

{type:"teach", trg:"é importante que", src:"it is important that", pos:"conj", gender:null,
 note:"Impersonal trigger.\nIntroduces important obligations.",
 example:"A: É importante que você durma bem.\nB: Vou tentar.\nA: Saúde em primeiro lugar.\nB: Tem razão.",
 exampleSrc:"A: It is important that you sleep well.\nB: I will try.\nA: Health first.\nB: You are right.",
 funFact:"Impersonal expressions (é importante, é necessário, é possível) all demand the subjunctive. They introduce the realm of what should, might, or could be."},

{type:"teach", trg:"é preciso que", src:"it is necessary that", pos:"conj", gender:null,
 note:"Stronger than é importante.\nFull obligation.",
 example:"A: É preciso que todos estejam aqui às oito.\nB: Vou avisar o time.\nA: Obrigado.\nB: Conte comigo.",
 exampleSrc:"A: It is necessary that everyone be here at eight.\nB: I will notify the team.\nA: Thank you.\nB: You can count on me.",
 funFact:"É preciso que is the voice of authority: managers, teachers, coaches. More direct than é importante."},

{type:"teach", trg:"talvez", src:"maybe / perhaps", pos:"adv", gender:null,
 note:"Uncertainty trigger.\nAlmost always followed by the subjunctive.",
 example:"A: Você vai ao cinema?\nB: Talvez eu vá, não decidi.\nA: Me avise.\nB: Claro.",
 exampleSrc:"A: Are you going to the cinema?\nB: Maybe I will go, I have not decided.\nA: Let me know.\nB: Of course.",
 funFact:"Talvez is the king of maybes. Placed before the verb, it triggers the subjunctive. Placed after, it can allow the indicative. Word order matters."},

{type:"teach", trg:"peço que", src:"I ask / request that", pos:"verb", gender:null,
 note:"Pedir que + subjunctive.\nFormal request, often in writing.",
 example:"A: Peço que você chegue cedo amanhã.\nB: Pode deixar.\nA: Temos reunião às sete.\nB: Estarei lá.",
 exampleSrc:"A: I ask that you arrive early tomorrow.\nB: You can count on it.\nA: We have a meeting at seven.\nB: I will be there.",
 funFact:"Peço que has a formal ring to it. In emails, it sounds professional. In conversation, it can feel polite or slightly dramatic depending on tone."},

{type:"teach", trg:"vá", src:"go (subjunctive)", pos:"verb", gender:null,
 note:"Subjunctive of ir.\nFor eu, você, ele, ela. Written accent.",
 example:"A: Quero que você vá ao médico.\nB: Estou marcando agora.\nA: Que bom!\nB: Não é nada sério, mas melhor checar.",
 exampleSrc:"A: I want you to go to the doctor.\nB: I am scheduling it now.\nA: Good!\nB: It is nothing serious, but better to check.",
 funFact:"Vá is short but loaded. It appears in warnings ('Vá com calma!') and wishes alike. Keep the accent or it becomes the noun va (nothing)."},

{type:"mc", q:"Choose the correct subjunctive for: 'Quero que ele _____'", opts:["vai","vá","foi","ia"], ans:"vá", hint:"Quero que triggers the subjunctive. Ir has an irregular short form."},

{type:"mc", q:"'Duvido que ela venha' means:", opts:["I doubt she is coming","She doubts I am coming","I know she is coming","She is coming for sure"], ans:"I doubt she is coming", hint:"Duvidar que + subjunctive. Uncertainty about another subject."},

{type:"fb", s:"Espero que você {1} bem.", a:["esteja"], opts:["esteja","está","esteve","estará"], hint:"Esperar que + estar in subjunctive.", sSrc:"I hope you {1} well."},

{type:"mc", q:"Which sentence correctly uses the subjunctive?", opts:["Quero que você estuda mais","Quero que você estude mais","Quero que você estudou mais","Quero que você estudará mais"], ans:"Quero que você estude mais", hint:"___rer ___ triggers the subjunctive. Flip -ar to -e."},

{type:"fb", s:"É importante que nós {1} cedo.", a:["cheguemos"], opts:["cheguemos","chegamos","chegaremos","chegávamos"], hint:"Impersonal trigger + subjunctive. First person plural of chegar. Spelling: c > qu before e.", sSrc:"It is important that we {1} early."},

{type:"match", pairs:[
  {trg:"quero que", src:"I want (you to)"},
  {trg:"espero que", src:"I hope that"},
  {trg:"duvido que", src:"I doubt that"},
  {trg:"é importante que", src:"it is important that"}
]},

{type:"mc", q:"'Talvez chova amanhã' means:", opts:["Maybe it will rain tomorrow","It rained yesterday","It is raining now","It always rains"], ans:"Maybe it will rain tomorrow", hint:"Talvez + subjunctive. Chova is the subjunctive of chover."},

{type:"fb", s:"Peço que vocês {1} em silêncio durante a prova.", a:["fiquem"], opts:["fiquem","ficam","ficaram","ficarão"], hint:"Peço que + subjunctive. Third person plural of ficar.", sSrc:"I ask that you all {1} silent during the exam."},

{type:"mc", q:"When do you use the subjunctive?", opts:["When both verbs have the same subject","When two subjects are different and the trigger verb is emotion/doubt/wish","Only in questions","Only in the past"], ans:"When two subjects are different and the trigger verb is emotion/doubt/wish", hint:"___ ___ + ___ ___ is the core rule."},

{type:"fb", s:"É preciso que ele {1} a verdade.", a:["diga"], opts:["diga","diz","disse","dirá"], hint:"Impersonal trigger + subjunctive. Dizer has an irregular subjunctive.", sSrc:"It is necessary that he {1} the truth."},

{type:"teach", trg:"diga", src:"say (subjunctive of dizer)", pos:"verb", gender:null,
 note:"Subjunctive of dizer.\nFollows the eu-form rule: eu digo > diga.",
 example:"A: Quero que você me diga a verdade.\nB: Vou dizer, espera.\nA: Estou pronto.\nB: Então vamos.",
 exampleSrc:"A: I want you to tell me the truth.\nB: I will tell you, wait.\nA: I am ready.\nB: Then let's go.",
 funFact:"Diga appears in headlines: 'Diga sim' (Say yes), 'Diga não' (Say no). Imperative and subjunctive share the form."},

{type:"mc", q:"'Talvez ele esteja certo' uses the subjunctive because:", opts:["Talvez expresses uncertainty","Ele is singular","Certo is an adjective","It is a question"], ans:"Talvez expresses uncertainty", hint:"___ is a trigger for the subjunctive. ___ demands it."}
,

{type:"match", pairs:[
  {trg:"saiba", src:"know (subjunctive of saber)"},
  {trg:"é preciso que", src:"it is necessary that"},
  {trg:"peço que", src:"I ask / request that"}
]}]}

]}; export default UNIT_16;
