const UNIT_14 = {n:14, lang:"pt", srcLang:"en", track:"v2", title:"Quando eu era criança", sub:"Imperfect Past", icon:"⏳", level:"B1.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u14l1", title:"Regular -ar Imperfect", icon:"📖", xp:15, board:true, steps:[
{type:"intro", title:"Painting the Past", desc:"The pretérito imperfeito describes habits, continuous actions, and descriptions in the past. Where the preterite is a snapshot, the imperfect is the full scene. You start with -ar verbs.", goals:["Conjugate regular -ar imperfect","Describe past habits","Contrast with the preterite"]},

{type:"tip", title:"Imperfect Signals",
 text:"Use the imperfect when English says:\n\nused to + verb: Eu estudava francês. (I used to study French.)\nwas + verb-ing: Eu estudava quando você chegou. (I was studying when you arrived.)\nwould + verb (habitually): Ele ia à praia todo dia. (He would go to the beach every day.)\n\nSnapshot = preterite. Movie = imperfect.",
 deepDive:{title:"When to Choose Imperfect", text:"The imperfect paints the background: descriptions of weather, age, appearance, feelings, ongoing actions, habitual actions. The preterite delivers the event that interrupts or moves the story forward. Classic contrast: Eu dormia quando o telefone tocou (I was sleeping when the phone rang). Dormia = imperfect (ongoing state), tocou = preterite (sudden event). Every Portuguese story uses both."}},

{type:"verb_table", title:"Regular -ar Imperfect: falar (to speak)",
 note:"The imperfect has NO irregular -ar verbs. Every single -ar verb uses these endings, without exception. Celebrate small wins.",
 groups:[{label:"Imperfect Endings", rows:[
   {pronoun:"eu", form:"falava", src:"I used to speak / was speaking"},
   {pronoun:"você / ele / ela", form:"falava", src:"you / he / she used to speak"},
   {pronoun:"nós", form:"falávamos", src:"we used to speak"},
   {pronoun:"vocês / eles / elas", form:"falavam", src:"you all / they used to speak"}
 ]}]},

{type:"teach", trg:"falava", src:"I / you / he / she used to speak", pos:"verb", gender:null,
 note:"Same form for eu, você, ele, ela.\nContext or the subject pronoun decides.",
 example:"A: Você falava espanhol quando era pequeno?\nB: Falava sim, morava na Argentina.\nA: Que legal!\nB: Agora esqueci quase tudo.",
 exampleSrc:"A: Did you use to speak Spanish when you were little?\nB: I did, I lived in Argentina.\nA: How cool!\nB: Now I have forgotten almost everything.",
 funFact:"The -ava ending is the calling card of the imperfect. Hear it and you know you are in the realm of memory."},

{type:"teach", trg:"falávamos", src:"we used to speak", pos:"verb", gender:null,
 note:"The only -ar imperfect with a written accent.\nStress falls on the á.",
 example:"A: Como vocês se comunicavam?\nB: Falávamos pelo rádio.\nA: Todo dia?\nB: Todo santo dia.",
 exampleSrc:"A: How did you all communicate?\nB: We used to speak by radio.\nA: Every day?\nB: Every single day.",
 funFact:"The accent on -ávamos exists purely to mark stress. Drop it and the word would be read wrong."},

{type:"teach", trg:"falavam", src:"they / you all used to speak", pos:"verb", gender:null,
 note:"Plural third person imperfect.\nPairs with eles, elas, vocês.",
 example:"A: Seus avós falavam outra língua?\nB: Sim, falavam italiano em casa.\nA: Você aprendeu?\nB: Só algumas palavras.",
 exampleSrc:"A: Did your grandparents use to speak another language?\nB: Yes, they used to speak Italian at home.\nA: Did you learn it?\nB: Only a few words.",
 funFact:"Brazil is full of grandparents who falavam italiano, alemão, ou japonês em casa. A country of linguistic memory."},

{type:"teach", trg:"morava", src:"I / he / she used to live", pos:"verb", gender:null,
 note:"Imperfect of morar.\nAnother -ar regular. Describes past residence.",
 example:"A: Onde você morava antes?\nB: Eu morava em Curitiba.\nA: E você gostava?\nB: Adorava!",
 exampleSrc:"A: Where did you use to live before?\nB: I used to live in Curitiba.\nA: And did you like it?\nB: I loved it!",
 funFact:"Past residence is almost always imperfect in Portuguese. Morei em Paris feels like a short, one-time stay. Morava em Paris feels like a real chapter of your life."},

{type:"teach", trg:"estudava", src:"I / he / she used to study", pos:"verb", gender:null,
 note:"Imperfect of estudar.\nHabitual past action.",
 example:"A: Você estudava muito na faculdade?\nB: Estudava sim, todo fim de semana.\nA: Que dedicada!\nB: Valeu a pena.",
 exampleSrc:"A: Did you use to study a lot in college?\nB: I did, every weekend.\nA: So dedicated!\nB: It was worth it.",
 funFact:"Estudava is the verb of nostalgia for every Brazilian who went through university. Pair with 'aquela época' (those days)."},

{type:"mc", q:"Choose the correct imperfect of falar for nós:", opts:["falava","falávamos","falavam","falamos"], ans:"falávamos", hint:"First person plural imperfect has a written accent on the stressed vowel."},

{type:"mc", q:"'Eu morava no Rio' means:", opts:["I used to live in Rio","I am living in Rio","I will live in Rio","I live in Rio"], ans:"I used to live in Rio", hint:"Morava is the imperfect. Signals past residence or habitual state."},

{type:"fb", s:"Quando era criança, eu {1} todo dia.", a:["estudava"], opts:["estudava","estudei","estudamos","estudavam"], hint:"Childhood habits call for the imperfect, not the preterite.", sSrc:"When I was a child, I {1} every day."},

{type:"mc", q:"Which sentence describes a habit?", opts:["Ele estudava todo dia","Ele estudou ontem","Ele estuda agora","Ele vai estudar amanhã"], ans:"Ele estudava todo dia", hint:"___ is the imperfect, perfect for habits. ___ ___ confirms repetition."},

{type:"fb", s:"Meus pais {1} perto da escola.", a:["moravam"], opts:["moravam","morava","morávamos","moraram"], hint:"Plural third person imperfect of morar.", sSrc:"My parents {1} near the school."},

{type:"match", pairs:[
  {trg:"eu falava", src:"I used to speak"},
  {trg:"nós morávamos", src:"we used to live"},
  {trg:"eles estudavam", src:"they used to study"},
  {trg:"você falava", src:"you used to speak"}
]},

{type:"mc", q:"'Eles moravam em São Paulo' means:", opts:["They used to live in São Paulo","They live in São Paulo","They moved to São Paulo","They will live in São Paulo"], ans:"They used to live in São Paulo", hint:"Moravam is imperfect plural. Past state, ongoing in its time."},

{type:"fb", s:"Nós {1} de cachorro quando era criança.", a:["gostávamos"], opts:["gostávamos","gostava","gostavam","gostamos"], hint:"Nós + childhood habit + -ar verb. The imperfect with the accented á.", sSrc:"We {1} dogs when we were children."},

{type:"teach", trg:"gostava", src:"I / he / she used to like", pos:"verb", gender:null,
 note:"Imperfect of gostar.\nCommon when describing past preferences.",
 example:"A: Você gostava de chocolate em criança?\nB: Adorava! Comia todo dia.\nA: Eu também.\nB: Acho que não existe criança que não gostava.",
 exampleSrc:"A: Did you use to like chocolate as a child?\nB: I loved it! I ate it every day.\nA: Me too.\nB: I think there is no child who did not like it.",
 funFact:"Preferences, feelings, and tastes almost always go in the imperfect when describing the past. Gostar is a feelings verb, so expect imperfect."},

{type:"mc", q:"Which sentence correctly uses the imperfect for a description?", opts:["Ela estudava francês naquela época","Ela estudou naquela época","Ela estuda naquela época","Ela vai estudar naquela época"], ans:"Ela estudava francês naquela época", hint:"The time expression meaning 'in those days' signals a continuous background state, not a completed action."}
]},

{id:"ptv2_u14l2", title:"-er and -ir Imperfect", icon:"🌙", xp:15, board:true, steps:[
{type:"intro", title:"Shared Endings Again", desc:"Like the preterite, -er and -ir verbs share their imperfect endings. Two groups, one pattern. Portuguese is kind.", goals:["Conjugate -er imperfect","Conjugate -ir imperfect","Use costumava and quando era"]},

{type:"tip", title:"The -ia Family",
 text:"All -er and -ir imperfect endings contain -ia:\n\ncomer: comia, comíamos, comiam\ndormir: dormia, dormíamos, dormiam\n\nSpot the -ia and you have spotted the imperfect.",
 deepDive:{title:"Ver and Vir: The Only Irregulars", text:"Only three verbs are irregular in the imperfect: ser (era, éramos, eram), ter (tinha, tínhamos, tinham), and ir (ia, íamos, iam). But ter and ir still contain the -ia or -inha pattern, so they almost feel regular. The imperfect is one of the friendliest tenses in Portuguese grammar."}},

{type:"verb_table", title:"-er/-ir Imperfect: comer and dormir",
 note:"Only nós has a written accent. All other forms stress naturally on the -i-.",
 groups:[{label:"comer", rows:[
   {pronoun:"eu", form:"comia", src:"I used to eat"},
   {pronoun:"você / ele / ela", form:"comia", src:"you / he / she used to eat"},
   {pronoun:"nós", form:"comíamos", src:"we used to eat"},
   {pronoun:"vocês / eles / elas", form:"comiam", src:"you all / they used to eat"}
 ]},{label:"dormir", rows:[
   {pronoun:"eu", form:"dormia", src:"I used to sleep"},
   {pronoun:"você / ele / ela", form:"dormia", src:"you / he / she used to sleep"},
   {pronoun:"nós", form:"dormíamos", src:"we used to sleep"},
   {pronoun:"vocês / eles / elas", form:"dormiam", src:"you all / they used to sleep"}
 ]}]},

{type:"teach", trg:"comia", src:"I / you / he / she used to eat", pos:"verb", gender:null,
 note:"Imperfect of comer.\nOne form for four subjects.",
 example:"A: O que você comia no café da manhã?\nB: Eu comia pão com manteiga e café.\nA: Todo dia?\nB: Todo santo dia por anos.",
 exampleSrc:"A: What did you use to eat for breakfast?\nB: I used to eat bread with butter and coffee.\nA: Every day?\nB: Every single day for years.",
 funFact:"Brazilians love the imperfect for food memory. 'Minha avó fazia um bolo...' starts a thousand stories."},

{type:"teach", trg:"comíamos", src:"we used to eat", pos:"verb", gender:null,
 note:"First person plural with accent.\nStress on the í.",
 example:"A: Vocês comiam juntos em família?\nB: Comíamos toda noite às sete.\nA: Que tradição linda!\nB: Era sagrado.",
 exampleSrc:"A: Did you use to eat together as a family?\nB: We used to eat every night at seven.\nA: What a lovely tradition!\nB: It was sacred.",
 funFact:"In Brazilian families, 'a gente comia' often replaces 'nós comíamos'. Same meaning, less grammar."},

{type:"teach", trg:"dormia", src:"I / you / he / she used to sleep", pos:"verb", gender:null,
 note:"Imperfect of dormir.\nOne form for four subjects.",
 example:"A: Você dormia cedo quando era criança?\nB: Dormia sim, às oito da noite.\nA: Que horror!\nB: Mas acordava cedo também.",
 exampleSrc:"A: Did you use to sleep early as a child?\nB: I did, at eight at night.\nA: How awful!\nB: But I woke up early too.",
 funFact:"Dormia is a verb of pure memory. Brazilians use it constantly to describe their childhood sleep routines."},

{type:"teach", trg:"bebia", src:"I / you / he / she used to drink", pos:"verb", gender:null,
 note:"Imperfect of beber.\nFollows the -er imperfect pattern.",
 example:"A: Você bebia café em criança?\nB: Não, minha mãe não deixava.\nA: A minha deixava.\nB: Que sorte!",
 exampleSrc:"A: Did you use to drink coffee as a child?\nB: No, my mother did not let me.\nA: Mine did.\nB: Lucky you!",
 funFact:"Brazilian mothers historically gave children coffee from age three. Café com leite is a cultural rite of passage."},

{type:"teach", trg:"saía", src:"I / you / he / she used to go out", pos:"verb", gender:null,
 note:"Imperfect of sair.\nAccent on the í because of the hiatus.",
 example:"A: Você saía muito quando era jovem?\nB: Saía todo fim de semana.\nA: Onde vocês iam?\nB: Para o bar do Zé.",
 exampleSrc:"A: Did you use to go out a lot when you were young?\nB: I used to go out every weekend.\nA: Where did you go?\nB: To Zé's bar.",
 funFact:"Sair is one of those verbs where a tiny accent makes all the difference. Without it, 'saia' means skirt, not 'I went out'."},

{type:"teach", trg:"costumava", src:"I / you / he / she used to (habitually)", pos:"verb", gender:null,
 note:"Costumar + infinitive = used to + verb.\nMakes the 'habit' meaning explicit.",
 example:"A: Você costumava viajar muito?\nB: Costumava ir para a praia todo verão.\nA: Agora não vai mais?\nB: Agora só quando sobra tempo.",
 exampleSrc:"A: Did you use to travel a lot?\nB: I used to go to the beach every summer.\nA: You do not go anymore?\nB: Now only when I have time to spare.",
 funFact:"Costumava é o parceiro elegante do imperfeito. It emphasizes that the habit is no longer true, adding a layer of nostalgia."},

{type:"teach", trg:"quando era criança", src:"when I was a child", pos:"conj", gender:null,
 note:"Classic imperfect trigger phrase.\nSets the scene for childhood stories.",
 example:"A: Quando era criança, o que você queria ser?\nB: Eu queria ser astronauta.\nA: E agora?\nB: Agora sou contador. A vida é assim.",
 exampleSrc:"A: When you were a child, what did you want to be?\nB: I wanted to be an astronaut.\nA: And now?\nB: Now I am an accountant. Life is like that.",
 funFact:"Every Brazilian conversation about childhood starts with 'quando eu era criança'. It is the golden door to nostalgia."},

{type:"mc", q:"Choose the correct imperfect of comer for nós:", opts:["comia","comíamos","comiam","comemos"], ans:"comíamos", hint:"First person plural imperfect has a written accent on the í."},

{type:"mc", q:"'Eu dormia na casa da vovó' means:", opts:["I used to sleep at grandma's house","I sleep at grandma's house","I slept at grandma's house once","I will sleep at grandma's house"], ans:"I used to sleep at grandma's house", hint:"Dormia is imperfect. Habitual or ongoing past."},

{type:"fb", s:"Quando era criança, eu {1} muito doce.", a:["comia"], opts:["comia","comi","comíamos","comiam"], hint:"Subject is eu, childhood habit, -er imperfect form.", sSrc:"When I was a child, I {1} a lot of sweets."},

{type:"mc", q:"Which sentence uses the imperfect correctly?", opts:["Eles saíam todo sábado","Eles saem todo sábado","Eles saíram todo sábado","Eles vão sair todo sábado"], ans:"Eles saíam todo sábado", hint:"___ is the plural imperfect. Habitual action every Saturday."},

{type:"fb", s:"Nós {1} cedo para ir à escola.", a:["dormíamos"], opts:["dormíamos","dormia","dormiam","dormimos"], hint:"First person plural imperfect of dormir. Accent on í.", sSrc:"We {1} early to go to school."},

{type:"match", pairs:[
  {trg:"eu comia", src:"I used to eat"},
  {trg:"nós dormíamos", src:"we used to sleep"},
  {trg:"eles bebiam", src:"they used to drink"},
  {trg:"ela saía", src:"she used to go out"}
]},

{type:"mc", q:"'Minha avó costumava fazer bolo' means:", opts:["My grandma used to make cake","My grandma is making cake","My grandma will make cake","My grandma made cake once"], ans:"My grandma used to make cake", hint:"Costumava + infinitive = used to habitually."},

{type:"fb", s:"{1} criança, eu tinha muitos amigos.", a:["Quando"], opts:["Quando","Enquanto","Depois","Antes"], hint:"Trigger phrase for an imperfect memory. 'When I was a child' starts with this word.", sSrc:"{1} I was a child, I had many friends."},

{type:"mc", q:"Which is a habit in the past?", opts:["Ele costumava andar de bicicleta","Ele andou de bicicleta ontem","Ele anda de bicicleta","Ele vai andar de bicicleta"], ans:"Ele costumava andar de bicicleta", hint:"___ = used to. Marks a past habit explicitly."}
]},

{id:"ptv2_u14l3", title:"Irregular Imperfects and Contrast", icon:"🎬", xp:15, board:true, steps:[
{type:"intro", title:"Era, Tinha, Ia", desc:"Portuguese has only three truly irregular imperfects: ser, ter, and ir. You learn all three and practice switching between preterite and imperfect.", goals:["Use era (was) for descriptions","Use tinha (had) for past states","Use ia (was going) for past plans","Contrast imperfect and preterite"]},

{type:"tip", title:"The Three Irregulars",
 text:"Only three verbs are truly irregular in the imperfect:\n\nser: era, éramos, eram (was, were)\nter: tinha, tínhamos, tinham (had)\nir: ia, íamos, iam (was going)\n\nEverything else follows the rules.",
 deepDive:{title:"Ser vs Ir in the Imperfect", text:"Unlike the preterite (where ser and ir merge into fui/foi/fomos/foram), in the imperfect they are DIFFERENT. Era = was. Ia = was going. Finally you can tell them apart. 'Ele era professor' (He was a teacher) vs 'Ele ia para a escola' (He was going to school). Two verbs, two distinct forms. Relief."}},

{type:"verb_table", title:"Irregular Imperfect: ser, ter, ir",
 note:"Ser uses era. Ter uses tinha with nh sound. Ir uses ia. All three appear in almost every Brazilian story.",
 groups:[{label:"ser", rows:[
   {pronoun:"eu", form:"era", src:"I was"},
   {pronoun:"você / ele / ela", form:"era", src:"you / he / she was"},
   {pronoun:"nós", form:"éramos", src:"we were"},
   {pronoun:"vocês / eles / elas", form:"eram", src:"you all / they were"}
 ]},{label:"ter", rows:[
   {pronoun:"eu", form:"tinha", src:"I had"},
   {pronoun:"você / ele / ela", form:"tinha", src:"you / he / she had"},
   {pronoun:"nós", form:"tínhamos", src:"we had"},
   {pronoun:"vocês / eles / elas", form:"tinham", src:"you all / they had"}
 ]},{label:"ir", rows:[
   {pronoun:"eu", form:"ia", src:"I was going"},
   {pronoun:"você / ele / ela", form:"ia", src:"you / he / she was going"},
   {pronoun:"nós", form:"íamos", src:"we were going"},
   {pronoun:"vocês / eles / elas", form:"iam", src:"you all / they were going"}
 ]}]},

{type:"teach", trg:"era", src:"I / you / he / she was", pos:"verb", gender:null,
 note:"Imperfect of ser.\nDescribes past qualities, identities, conditions.",
 example:"A: Como era a sua casa de infância?\nB: Era grande e cheia de luz.\nA: E tinha jardim?\nB: Tinha, enorme.",
 exampleSrc:"A: What was your childhood home like?\nB: It was big and full of light.\nA: And did it have a garden?\nB: It did, huge.",
 funFact:"'Era uma vez...' (Once upon a time) starts every Brazilian fairy tale. The imperfect is the tense of all storytelling."},

{type:"teach", trg:"éramos", src:"we were", pos:"verb", gender:null,
 note:"First person plural of ser imperfect.\nWritten accent on é.",
 example:"A: Vocês eram próximos em criança?\nB: Éramos inseparáveis.\nA: Que lindo.\nB: Ela era minha melhor amiga.",
 exampleSrc:"A: Were you close as kids?\nB: We were inseparable.\nA: How beautiful.\nB: She was my best friend.",
 funFact:"Without the accent, éramos would sound like 'eramos' with a closed e. The accent opens the vowel wide."},

{type:"teach", trg:"eram", src:"they / you all were", pos:"verb", gender:null,
 note:"Plural third person of ser imperfect.\nVery common in descriptions.",
 example:"A: Como eram seus avós?\nB: Eram carinhosos e divertidos.\nA: Ainda estão vivos?\nB: Só minha avó.",
 exampleSrc:"A: What were your grandparents like?\nB: They were loving and fun.\nA: Are they still alive?\nB: Only my grandmother.",
 funFact:"Eram is the engine of any story about the past. Character descriptions need the imperfect."},

{type:"teach", trg:"tinha", src:"I / you / he / she had", pos:"verb", gender:null,
 note:"Imperfect of ter.\nPast possession, past age, past states.",
 example:"A: Você tinha cachorro em criança?\nB: Tinha dois, a Nina e o Rex.\nA: Lindos nomes!\nB: Eu os amava demais.",
 exampleSrc:"A: Did you have a dog as a child?\nB: I had two, Nina and Rex.\nA: Lovely names!\nB: I loved them so much.",
 funFact:"To say your age in the past, always use tinha: 'Eu tinha dez anos' (I was ten years old). Literal translation: 'I had ten years'."},

{type:"teach", trg:"tínhamos", src:"we had", pos:"verb", gender:null,
 note:"First person plural of ter imperfect.\nAccent on í.",
 example:"A: Vocês tinham muitos brinquedos?\nB: Tínhamos os essenciais.\nA: Não era consumismo?\nB: Não, era outra época.",
 exampleSrc:"A: Did you have a lot of toys?\nB: We had the essentials.\nA: No consumerism?\nB: No, it was another era.",
 funFact:"The nh sound in tínhamos is uniquely Portuguese. Spanish speakers always stumble over it."},

{type:"teach", trg:"ia", src:"I / you / he / she was going", pos:"verb", gender:null,
 note:"Imperfect of ir.\nHabitual or ongoing past movement.",
 example:"A: Para onde você ia nos fins de semana?\nB: Eu ia para a casa da vovó.\nA: Que bom!\nB: Eram os melhores dias.",
 exampleSrc:"A: Where did you use to go on weekends?\nB: I used to go to grandma's house.\nA: How nice!\nB: They were the best days.",
 funFact:"Ir in the imperfect is also used for frustrated plans: 'Eu ia sair, mas começou a chover' (I was going to go out, but it started raining)."},

{type:"teach", trg:"íamos", src:"we were going / we used to go", pos:"verb", gender:null,
 note:"First person plural of ir imperfect.\nAccent on í.",
 example:"A: Vocês íam à praia sempre?\nB: Íamos todo verão.\nA: Que saudade boa!\nB: Quero voltar no tempo.",
 exampleSrc:"A: Did you use to go to the beach always?\nB: We used to go every summer.\nA: What a sweet longing!\nB: I want to go back in time.",
 funFact:"'Íamos à praia' is the Brazilian equivalent of Proust's madeleine. A memory that awakens a whole childhood."},

{type:"tip", title:"Imperfect vs Preterite",
 text:"Same story, different tenses:\n\nImperfect: Ela estudava quando eu cheguei.\n(She was studying when I arrived.)\n\nPreterite: Ela estudou a noite toda.\n(She studied all night.)\n\nOngoing = imperfect. Completed = preterite. Together = a story.",
 deepDive:{title:"The Twin Dance", text:"The most elegant Portuguese sentences use both tenses together. The imperfect sets the stage (background, mood, ongoing actions), and the preterite drops the events that move the plot. 'Chovia quando a luz acabou' (It was raining when the power went out). Chovia = imperfect background. Acabou = preterite event. Master this dance and your Portuguese sounds native."}},

{type:"mc", q:"'Eu era feliz quando era criança' means:", opts:["I was happy when I was a child","I am happy when I am a child","I used to be happy once","I will be happy"], ans:"I was happy when I was a child", hint:"Two imperfect verbs. Both describe lasting past states."},

{type:"fb", s:"Quando eu {1} dez anos, a minha família se mudou.", a:["tinha"], opts:["tinha","tive","tínhamos","tinham"], hint:"Portuguese uses ter for ages. First person singular imperfect.", sSrc:"When I {1} ten years old, my family moved."},

{type:"mc", q:"Which sentence mixes imperfect and preterite correctly?", opts:["Eu dormia quando o telefone tocou","Eu dormi quando o telefone tocava","Eu durmo quando o telefone toca","Eu vou dormir quando o telefone vai tocar"], ans:"Eu dormia quando o telefone tocou", hint:"Ongoing action (imperfect) + interruption (preterite). The classic pattern."},

{type:"fb", s:"Nós {1} à escola de ônibus toda manhã.", a:["íamos"], opts:["íamos","ia","iam","fomos"], hint:"First person plural of ir in imperfect. Remember the accent.", sSrc:"We {1} to school by bus every morning."},

{type:"match", pairs:[
  {trg:"eu era", src:"I was"},
  {trg:"nós tínhamos", src:"we had"},
  {trg:"eles iam", src:"they were going"},
  {trg:"ela era", src:"she was"}
]},

{type:"mc", q:"Choose the correct verb: 'Ela _____ três irmãos quando eu a conheci.'", opts:["tinha","teve","tem","vai ter"], ans:"tinha", hint:"Past state, ongoing at the time of meeting. Imperfect, not preterite."},

{type:"fb", s:"A casa {1} grande e bonita.", a:["era"], opts:["era","foi","é","vai ser"], hint:"Description of a past scene. Ser in imperfect.", sSrc:"The house {1} big and beautiful."},

{type:"mc", q:"Which uses the imperfect for description?", opts:["Fazia sol e o céu estava azul","Fez sol e o céu ficou azul","Faz sol e o céu está azul","Vai fazer sol e o céu vai estar azul"], ans:"Fazia sol e o céu estava azul", hint:"Weather and past scenes use the imperfect. ___ = was."},

{type:"teach", trg:"fazia sol", src:"it was sunny", pos:"verb", gender:null,
 note:"Weather expression in the imperfect.\nDescribes past weather scenes.",
 example:"A: Como estava o tempo na viagem?\nB: Fazia sol todos os dias.\nA: Que sorte!\nB: Foi perfeito.",
 exampleSrc:"A: How was the weather on the trip?\nB: It was sunny every day.\nA: Lucky!\nB: It was perfect.",
 funFact:"In Portuguese, weather uses 'fazer'. 'Faz frio' = it is cold. In the past, 'fazia frio' paints the full winter scene."},

{type:"mc", q:"'A gente ia para a praia' in modern Brazilian Portuguese means:", opts:["We used to go to the beach","People used to go to the beach","I used to go to the beach","He used to go to the beach"], ans:"We used to go to the beach", hint:"A gente = we, in everyday Brazilian speech. Takes the same form as ele/ela."}
,

{type:"match", pairs:[
  {trg:"gostava", src:"I / he / she used to like"},
  {trg:"éramos", src:"we were"}
]}]}

]}; export default UNIT_14;
