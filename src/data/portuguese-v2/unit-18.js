const UNIT_18 = {n:18, lang:"pt", srcLang:"en", track:"v2", title:"Eu me chamo...", sub:"Reflexive Verbs", icon:"🪞", level:"B1.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u18l1", title:"Reflexive Pronouns", icon:"🪞", xp:15, board:true, steps:[
{type:"intro", title:"Reflexive Pronouns",
 desc:"Reflexive pronouns show that the subject acts on itself. Brazilian Portuguese uses me, te, se, nos for daily routines like washing, dressing, and sitting down.",
 goals:["Learn the six reflexive pronouns","Know which verbs are reflexive","Practice BR placement before the verb"]},

{type:"teach", trg:"me", src:"myself", pos:"pron", gender:null,
 note:"Reflexive pronoun for 'eu'. Signals the subject is acting on itself.",
 example:"A: Eu me acordo às sete da manhã.\nB: Sério? Eu me acordo às nove.",
 exampleSrc:"A: I wake myself up at seven in the morning.\nB: Really? I wake up at nine.",
 funFact:"Same form as the direct and indirect object pronoun. Context decides the meaning."},

{type:"teach", trg:"te", src:"yourself (informal)", pos:"pron", gender:null,
 note:"Reflexive pronoun for 'tu' or 'você' (informal). Very common in Brazilian speech.",
 example:"A: Você te lembra do nosso primeiro encontro?\nB: Claro que me lembro!",
 exampleSrc:"A: Do you remember our first date?\nB: Of course I remember!",
 funFact:"Mixing 'você' with 'te' breaks formal grammar rules but is completely normal in spoken BR."},

{type:"teach", trg:"se", src:"himself / herself / yourself (formal)", pos:"pron", gender:null,
 note:"Third person reflexive. Used for ele, ela, você, eles, elas, vocês.",
 example:"A: A Ana se arrumou rapidinho.\nB: Ela sempre se arruma depressa.",
 exampleSrc:"A: Ana got herself ready quickly.\nB: She always gets ready fast.",
 funFact:"The one pronoun 'se' covers five different subjects. Very efficient."},

{type:"teach", trg:"nos", src:"ourselves", pos:"pron", gender:null,
 note:"First person plural reflexive. Shows the group acting on itself.",
 example:"A: A que horas nós nos encontramos?\nB: Nos encontramos às oito.",
 exampleSrc:"A: What time are we meeting?\nB: We're meeting at eight.",
 funFact:"Also used reciprocally: 'nos abraçamos' can mean 'we hugged each other'."},

{type:"teach", trg:"vos", src:"yourselves", pos:"pron", gender:null,
 note:"Second person plural reflexive. Rare in Brazil, used mostly in church contexts and literature.",
 example:"A: Irmãos, vos reuni aqui hoje. (formal)\nB: Estamos juntos, padre.",
 exampleSrc:"A: Brothers, I have gathered you here today. (formal)\nB: We are together, father.",
 funFact:"Most Brazilians replace 'vos' with 'vocês se' in everyday speech. 'Vos' survives in prayers."},

{type:"tip", title:"Reflexive Pronoun Chart",
 text:"eu > me\ntu / você > te\nele / ela / você (formal) > se\nnós > nos\nvós > vos (rare)\neles / elas / vocês > se\n\nBR placement: pronoun BEFORE the verb.\n\nEu me levanto cedo. (I get up early.)\nEla se veste rápido. (She dresses fast.)\nNós nos sentamos aqui. (We sit down here.)",
 deepDive:{title:"When Is a Verb Reflexive?",
  text:"A verb is reflexive when the action returns to the subject. In English, we often use 'myself, yourself, himself'. In Portuguese, the reflexive pronoun is usually required. Some verbs are ALWAYS reflexive (arrepender-se, queixar-se). Others are reflexive only sometimes (lavar = to wash / lavar-se = to wash oneself)."}},

{type:"mc",
 q:"Which reflexive pronoun matches 'nós'?",
 opts:["me","se","nos","vos"],
 ans:"nos",
 hint:"First person plural. Same form as the object pronoun."},

{type:"mc",
 q:"Which reflexive pronoun belongs with 'eles'?",
 opts:["te","nos","se","me"],
 ans:"se",
 hint:"Third person plural. One reflexive pronoun covers all third-person subjects."},

{type:"fb",
 s:"Você {1} esqueceu da reunião outra vez?",
 a:["se"],
 opts:["se","te","me","nos"],
 hint:"Você takes the third person reflexive in formal grammar.",
 sSrc:"Did you forget about the meeting again?"},

{type:"fb",
 s:"Eu {1} sinto bem hoje, obrigado por perguntar.",
 a:["me"],
 opts:["me","se","te","nos"],
 hint:"First person reflexive. Sentir-se is reflexive when talking about feelings.",
 sSrc:"I'm feeling good today, thanks for asking."},

{type:"match", pairs:[
 {trg:"me", src:"myself"},
 {trg:"te", src:"yourself"},
 {trg:"se", src:"himself / herself"},
 {trg:"nos", src:"ourselves"}
]},

{type:"mc",
 q:"Which sentence uses the reflexive correctly?",
 opts:["Eu se levanto cedo.","Eu me levanto cedo.","Eu te levanto cedo.","Eu nos levanto cedo."],
 ans:"Eu me levanto cedo.",
 hint:"Match the pronoun to the subject 'eu'."}
]},

{id:"ptv2_u18l2", title:"Daily Routine Verbs", icon:"🌅", xp:15, board:true, steps:[
{type:"intro", title:"Reflexive Daily Routine",
 desc:"Many everyday actions are reflexive in Portuguese: getting up, getting dressed, sitting down. Learn the core set and you describe any morning.",
 goals:["Learn 7 reflexive routine verbs","Build morning and evening sentences","Use BR placement naturally"]},

{type:"teach", trg:"levantar-se", src:"to get up", pos:"verb", gender:null,
 note:"Literally 'to raise oneself'. Used for getting out of bed or standing up from a chair.",
 example:"A: A que horas você se levanta?\nB: Eu me levanto às seis e meia.",
 exampleSrc:"A: What time do you get up?\nB: I get up at six thirty.",
 funFact:"Without the reflexive, 'levantar' means to lift something else. 'Levantar a caixa' = to lift the box."},

{type:"teach", trg:"vestir-se", src:"to get dressed", pos:"verb", gender:null,
 note:"Reflexive form of 'vestir' (to dress someone). Irregular: eu me visto, ele se veste.",
 example:"A: Você se veste rápido pela manhã?\nB: Não, eu me visto devagar.",
 exampleSrc:"A: Do you get dressed quickly in the morning?\nB: No, I get dressed slowly.",
 funFact:"'Vestir' without the reflexive means to dress another person, like dressing a child."},

{type:"teach", trg:"sentar-se", src:"to sit down", pos:"verb", gender:null,
 note:"Reflexive verb for the action of sitting yourself down. Regular conjugation.",
 example:"A: Por favor, sente-se.\nB: Obrigado, vou me sentar aqui.",
 exampleSrc:"A: Please, have a seat.\nB: Thank you, I'll sit here.",
 funFact:"The polite invitation 'sente-se' uses PT placement because it is an imperative. BR follows the same rule."},

{type:"teach", trg:"deitar-se", src:"to lie down / to go to bed", pos:"verb", gender:null,
 note:"Reflexive. Used both for lying down on a couch and for going to bed at night.",
 example:"A: A que horas você se deita?\nB: Eu me deito por volta das onze.",
 exampleSrc:"A: What time do you go to bed?\nB: I go to bed around eleven.",
 funFact:"The noun 'deitada' means 'a nap' or 'a lie-down'. Brazilians love a good deitada after lunch."},

{type:"teach", trg:"banhar-se", src:"to bathe / to shower", pos:"verb", gender:null,
 note:"Formal reflexive. In spoken BR, people usually say 'tomar banho' instead.",
 example:"A: Você se banha todos os dias?\nB: Sim, tomo banho de manhã e à noite.",
 exampleSrc:"A: Do you bathe every day?\nB: Yes, I shower in the morning and at night.",
 funFact:"Brazilians take two or three showers a day in summer. 'Tomar banho' is cultural essential vocabulary."},

{type:"teach", trg:"lembrar-se de", src:"to remember", pos:"verb", gender:null,
 note:"Always reflexive in formal Portuguese. Requires the preposition 'de' before the thing remembered.",
 example:"A: Você se lembra do meu aniversário?\nB: Claro que me lembro!",
 exampleSrc:"A: Do you remember my birthday?\nB: Of course I remember!",
 funFact:"In casual BR speech, many drop the reflexive: 'eu lembro' instead of 'eu me lembro'. Both are heard."},

{type:"teach", trg:"esquecer-se de", src:"to forget", pos:"verb", gender:null,
 note:"Opposite of lembrar-se. Also requires 'de' before the forgotten object.",
 example:"A: Você se esqueceu das chaves?\nB: Ai não, me esqueci sim!",
 exampleSrc:"A: Did you forget the keys?\nB: Oh no, I did forget!",
 funFact:"Without the reflexive, 'eu esqueci as chaves' also works in BR. Grammar purists prefer the reflexive."},

{type:"mc",
 q:"What does 'eu me visto' mean?",
 opts:["I wash myself","I get dressed","I get up","I sit down"],
 ans:"I get dressed",
 hint:"Vestir is the core verb. Reflexive means the subject dresses itself."},

{type:"mc",
 q:"Choose the correct verb: 'A que horas você ___ para a cama?'",
 opts:["se levanta","se senta","se deita","se veste"],
 ans:"se deita",
 hint:"The question is about going to bed. Which reflexive matches?"},

{type:"fb",
 s:"Eu {1} lembro do nome dele, é Paulo.",
 a:["me"],
 opts:["me","te","se","nos"],
 hint:"First person reflexive before the verb. Subject is eu.",
 sSrc:"I {1} remember his name, it's Paulo."},

{type:"fb",
 s:"Ela {1} senta sempre na mesma cadeira.",
 a:["se"],
 opts:["se","me","te","nos"],
 hint:"Third person singular subject. Match the reflexive.",
 sSrc:"She {1} always sits in the same chair."},

{type:"match", pairs:[
 {trg:"levantar-se", src:"to get up"},
 {trg:"vestir-se", src:"to get dressed"},
 {trg:"sentar-se", src:"to sit down"},
 {trg:"deitar-se", src:"to lie down"},
 {trg:"lembrar-se de", src:"to remember"}
]},

{type:"mc",
 q:"Which verb means 'to forget'?",
 opts:["lembrar-se","esquecer-se","sentar-se","vestir-se"],
 ans:"esquecer-se",
 hint:"Opposite of remembering."}
]},

{id:"ptv2_u18l3", title:"BR Placement & More Verbs", icon:"🇧🇷", xp:15, board:true, steps:[
{type:"intro", title:"Brazilian Placement Deep Dive",
 desc:"Brazilian speakers place the reflexive pronoun BEFORE the verb in almost every case. Learn the pattern, then layer in more reflexive verbs for feelings and movement.",
 goals:["Master BR pre-verb placement","Learn feeling and emotion reflexives","Practice full sentences"]},

{type:"tip", title:"BR Reflexive Placement",
 text:"Brazilian Portuguese standard pattern:\n\nSubject + pronoun + verb\n\nEu me lembro. (I remember.)\nVocê se chama? (Your name is?)\nNós nos divertimos. (We had fun.)\n\nEven when starting a sentence informally:\n\nMe ajuda! (Help me!)\nSe cuida! (Take care!)\n\nEuropean Portuguese (PT) would instead say: lembro-me, chama-se, divertimo-nos, ajuda-me.",
 deepDive:{title:"The Proclitic Habit",
  text:"Linguists call BR placement 'proclitic' (pronoun sits before the verb) and PT placement 'enclitic' (pronoun sits after). Brazilian speech became proclitic over the last two centuries. Even uneducated speakers produce 'eu me' without thinking about it. For learners, this is great news: one rule covers 99% of real speech."}},

{type:"teach", trg:"chamar-se", src:"to be called (named)", pos:"verb", gender:null,
 note:"Essential reflexive for names. Literally 'to call oneself'.",
 example:"A: Como você se chama?\nB: Eu me chamo Clara. E você?",
 exampleSrc:"A: What is your name?\nB: My name is Clara. And you?",
 funFact:"Often the very first Portuguese sentence learners practice. A gateway to the reflexive system."},

{type:"teach", trg:"divertir-se", src:"to have fun", pos:"verb", gender:null,
 note:"Reflexive for enjoyment and entertainment. Conjugates like 'sentir' (irregular stem change).",
 example:"A: Vocês se divertiram na festa?\nB: Nos divertimos muito, obrigado!",
 exampleSrc:"A: Did you have fun at the party?\nB: We had a great time, thanks!",
 funFact:"The non-reflexive 'divertir' means 'to entertain someone else'. 'O palhaço diverte as crianças'."},

{type:"teach", trg:"sentir-se", src:"to feel (a certain way)", pos:"verb", gender:null,
 note:"Reflexive for emotional or physical states. Followed by an adjective.",
 example:"A: Como você se sente hoje?\nB: Eu me sinto muito melhor, obrigado.",
 exampleSrc:"A: How are you feeling today?\nB: I'm feeling much better, thanks.",
 funFact:"Portuguese distinguishes 'sentir' (to sense something, like a smell) from 'sentir-se' (to feel a state)."},

{type:"teach", trg:"preocupar-se com", src:"to worry about", pos:"verb", gender:null,
 note:"Reflexive verb that takes 'com' (with). Signals the object of the worry.",
 example:"A: Não se preocupe com isso.\nB: Não estou me preocupando, juro!",
 exampleSrc:"A: Don't worry about it.\nB: I'm not worrying, I swear!",
 funFact:"The phrase 'não se preocupe' is Brazilian conversational magic, used to calm any anxious friend."},

{type:"teach", trg:"apaixonar-se por", src:"to fall in love with", pos:"verb", gender:null,
 note:"Reflexive verb of emotion. Requires 'por' before the person or thing.",
 example:"A: Eu me apaixonei pelo Brasil.\nB: Eu também me apaixonei por lá.",
 exampleSrc:"A: I fell in love with Brazil.\nB: I also fell in love with it.",
 funFact:"The noun 'paixão' (passion) shares the same root. Brazilians apply this verb to places, foods, and songs as easily as people."},

{type:"teach", trg:"mudar-se", src:"to move (to a new home)", pos:"verb", gender:null,
 note:"Reflexive for changing residence. Without the reflexive, 'mudar' means to change something else.",
 example:"A: Quando vocês se mudaram?\nB: Nos mudamos mês passado.",
 exampleSrc:"A: When did you move?\nB: We moved last month.",
 funFact:"Compare: 'eu mudei de ideia' (I changed my mind, no reflexive) vs 'eu me mudei' (I moved house)."},

{type:"mc",
 q:"Which is the correct BR placement?",
 opts:["Chama-se João.","Se chama João.","Ele chama-se João.","Ele se chama João."],
 ans:"Ele se chama João.",
 hint:"Brazilian prefers subject + reflexive + verb."},

{type:"mc",
 q:"Choose the best response: 'Como você se sente?'",
 opts:["Me chamo bem.","Me sinto bem.","Me lembro bem.","Me levanto bem."],
 ans:"Me sinto bem.",
 hint:"The question is about feelings. Use the matching verb."},

{type:"fb",
 s:"Nós {1} divertimos muito na praia ontem.",
 a:["nos"],
 opts:["nos","se","me","te"],
 hint:"Subject is nós. Use the matching reflexive, placed before the verb.",
 sSrc:"We {1} had a lot of fun at the beach yesterday."},

{type:"fb",
 s:"Não {1} preocupe, tudo vai dar certo.",
 a:["se"],
 opts:["se","me","te","nos"],
 hint:"Command directed at 'você'. Third person reflexive.",
 sSrc:"Don't {1} worry, everything will work out."},

{type:"mc",
 q:"Which sentence means 'I fell in love with the city'?",
 opts:["Eu me apaixonei pela cidade.","Eu amei a cidade.","Eu me mudei pela cidade.","Eu me senti pela cidade."],
 ans:"Eu me apaixonei pela cidade.",
 hint:"Reflexive + 'por' + object. '___' = por + a."},

{type:"match", pairs:[
 {trg:"chamar-se", src:"to be named"},
 {trg:"divertir-se", src:"to have fun"},
 {trg:"sentir-se", src:"to feel"},
 {trg:"preocupar-se com", src:"to worry about"},
 {trg:"apaixonar-se por", src:"to fall in love with"}
]},

{type:"mc",
 q:"Which verb means 'to move to a new home'?",
 opts:["mudar-se","chamar-se","sentir-se","divertir-se"],
 ans:"mudar-se",
 hint:"Reflexive verb about changing residence."},

{type:"drag_fill",
 s:"Eu {1} chamo Pedro e {2} sinto muito feliz hoje.",
 blanks:{"1":"me","2":"me"},
 pool:["me","se","te","nos"],
 hint:"Both sentences have 'eu' as the subject. Use the same first person reflexive twice."}
]}

]}; export default UNIT_18;
