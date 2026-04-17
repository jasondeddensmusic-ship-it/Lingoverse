const UNIT_17 = {n:17, lang:"pt", srcLang:"en", track:"v2", title:"Me, te, o, a...", sub:"Object Pronouns", icon:"🔄", level:"B1.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u17l1", title:"Direct Objects", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"Direct Object Pronouns",
 desc:"Stop repeating nouns. Replace them with short pronouns like o, a, os, as. Portuguese direct object pronouns save breath and sound more natural.",
 goals:["Learn the direct object pronouns","Understand when to use o, a, os, as","Practice BR placement before the verb"]},

{type:"teach", trg:"me", src:"me", pos:"pron", gender:null,
 note:"First person direct object. Means 'me' as the target of the action.",
 example:"A: Você me ouviu?\nB: Sim, eu te ouvi claramente.",
 exampleSrc:"A: Did you hear me?\nB: Yes, I heard you clearly.",
 funFact:"Same form in both direct and indirect object positions. Very convenient."},

{type:"teach", trg:"te", src:"you (informal)", pos:"pron", gender:null,
 note:"Second person singular informal. Used widely in Brazil even when subject is 'você'.",
 example:"A: Eu te amo.\nB: Eu também te amo.",
 exampleSrc:"A: I love you.\nB: I love you too.",
 funFact:"Technically matches 'tu', but Brazilians mix 'te' with 'você' constantly. It just feels warmer."},

{type:"teach", trg:"o", src:"him / it (m)", pos:"pron", gender:"m",
 note:"Third person masculine direct object. Replaces a masculine noun or person.",
 example:"A: Você viu o João?\nB: Sim, eu o vi na padaria.",
 exampleSrc:"A: Did you see João?\nB: Yes, I saw him at the bakery.",
 funFact:"In casual Brazilian speech, many people say 'eu vi ele' instead. But 'o vi' is the written standard."},

{type:"teach", trg:"a", src:"her / it (f)", pos:"pron", gender:"f",
 note:"Third person feminine direct object. Replaces a feminine noun or person.",
 example:"A: Cadê a chave?\nB: Eu a deixei na mesa.",
 exampleSrc:"A: Where is the key?\nB: I left it on the table.",
 funFact:"Looks identical to the feminine article 'a'. Context makes the meaning clear."},

{type:"teach", trg:"nos", src:"us", pos:"pron", gender:null,
 note:"First person plural direct object. Means 'us' as the target of the action.",
 example:"A: Ela nos convidou para a festa.\nB: Que legal! Vamos juntos.",
 exampleSrc:"A: She invited us to the party.\nB: How nice! Let's go together.",
 funFact:"Also serves as the indirect object and reflexive. One pronoun, three jobs."},

{type:"teach", trg:"os", src:"them (m/mixed)", pos:"pron", gender:"m",
 note:"Third person masculine plural direct object. Also used for mixed-gender groups.",
 example:"A: Onde estão seus filhos?\nB: Eu os deixei na escola.",
 exampleSrc:"A: Where are your children?\nB: I dropped them off at school.",
 funFact:"Defaults to masculine plural for any mixed group, even one man with ten women."},

{type:"teach", trg:"as", src:"them (f)", pos:"pron", gender:"f",
 note:"Third person feminine plural direct object. For all-feminine groups.",
 example:"A: E suas irmãs?\nB: Eu as encontrei no parque.",
 exampleSrc:"A: And your sisters?\nB: I met them at the park.",
 funFact:"If even one person in the group is male, Portuguese switches to 'os'."},

{type:"mc",
 q:"Which pronoun replaces 'o livro' in 'Eu comprei o livro'?",
 opts:["a","o","os","as"],
 ans:"o",
 hint:"Livro is masculine singular. Match that gender and number."},

{type:"mc",
 q:"Choose the correct pronoun: 'Eu ___ amo muito, mãe.'",
 opts:["o","a","te","os"],
 ans:"te",
 hint:"You are speaking directly to your mother. Which pronoun addresses the listener informally?"},

{type:"fb",
 s:"Você viu a Maria? Sim, eu {1} vi no shopping.",
 a:["a"],
 opts:["a","o","as","te"],
 hint:"Maria is a feminine singular person. Pick the pronoun that matches.",
 sSrc:"Did you see Maria? Yes, I saw {1} at the mall."},

{type:"fb",
 s:"Onde estão os documentos? Eu {1} coloquei na gaveta.",
 a:["os"],
 opts:["os","as","o","a"],
 hint:"Documentos is masculine and plural. Match both.",
 sSrc:"Where are the documents? I put {1} in the drawer."},

{type:"match", pairs:[
 {trg:"me", src:"me"},
 {trg:"te", src:"you (informal)"},
 {trg:"o", src:"him / it (m)"},
 {trg:"a", src:"her / it (f)"},
 {trg:"nos", src:"us"}
]},

{type:"mc",
 q:"Which sentence correctly replaces 'o bolo' with a pronoun?",
 opts:["Eu a comi.","Eu te comi.","Eu o comi.","Eu os comi."],
 ans:"Eu o comi.",
 hint:"Bolo (cake) is masculine and singular. Pick the matching pronoun."}
]},

{id:"ptv2_u17l2", title:"Indirect Objects", icon:"✉️", xp:15, board:true, steps:[
{type:"intro", title:"Indirect Object Pronouns",
 desc:"Indirect objects are the receivers of the action, often answering 'to whom?' or 'for whom?'. Portuguese uses lhe and lhes for the third person.",
 goals:["Learn lhe and lhes","See how me, te, nos do double duty","Distinguish direct from indirect objects"]},

{type:"teach", trg:"lhe", src:"to him / to her / to you (formal)", pos:"pron", gender:null,
 note:"Third person singular indirect object. Replaces 'a ele', 'a ela', or 'a você'.",
 example:"A: Você disse a verdade ao chefe?\nB: Sim, eu lhe contei tudo.",
 exampleSrc:"A: Did you tell the truth to the boss?\nB: Yes, I told him everything.",
 funFact:"In casual Brazilian speech, people often say 'eu falei pra ele' instead. But 'lhe' is the polished form."},

{type:"teach", trg:"lhes", src:"to them / to you all (formal)", pos:"pron", gender:null,
 note:"Third person plural indirect object. Replaces 'a eles', 'a elas', or 'a vocês'.",
 example:"A: O que você deu aos seus pais?\nB: Eu lhes dei flores.",
 exampleSrc:"A: What did you give to your parents?\nB: I gave them flowers.",
 funFact:"Same form for masculine, feminine, and formal plural. One pronoun covers three situations."},

{type:"tip", title:"Direct vs Indirect Objects",
 text:"Direct objects receive the action directly:\n\nEu vi o João. (I saw João.)\nEu o vi. (I saw him.)\n\nIndirect objects receive the action through 'a' or 'para':\n\nEu falei ao João. (I spoke to João.)\nEu lhe falei. (I spoke to him.)\n\nRule of thumb: if you can add 'a' or 'para' before the noun, it is an indirect object.",
 deepDive:{title:"Why the Distinction Matters",
  text:"Some verbs take direct objects (ver, amar, comer). Some take indirect objects (dar, falar, dizer, responder). Some take both at once (dar algo a alguém). Knowing which pronoun slot a verb uses is the difference between 'eu a vi' (I saw her) and 'eu lhe falei' (I spoke to her)."}},

{type:"teach", trg:"dar algo a alguém", src:"to give something to someone", pos:"verb", gender:null,
 note:"Classic double-object verb. Takes a direct object (the thing) and an indirect object (the receiver).",
 example:"A: Eu dei o presente à Ana.\nB: Você deu o presente a ela? Que gentil!",
 exampleSrc:"A: I gave the gift to Ana.\nB: You gave the gift to her? How kind!",
 funFact:"The 'à' with accent is the fusion of 'a' (to) + 'a' (the). Portuguese loves contracting prepositions with articles."},

{type:"teach", trg:"responder", src:"to answer / to reply", pos:"verb", gender:null,
 note:"Takes indirect object when you answer TO someone. Takes direct object when you answer something (a question).",
 example:"A: Você respondeu ao professor?\nB: Sim, eu lhe respondi na hora.",
 exampleSrc:"A: Did you answer the teacher?\nB: Yes, I answered him right away.",
 funFact:"Same pattern as English 'reply to'. The preposition signals indirect object status."},

{type:"teach", trg:"mostrar", src:"to show", pos:"verb", gender:null,
 note:"Double-object verb. Shows something (direct) to someone (indirect).",
 example:"A: Ele mostrou a foto à Júlia?\nB: Sim, ele lhe mostrou tudo.",
 exampleSrc:"A: Did he show the photo to Júlia?\nB: Yes, he showed her everything.",
 funFact:"In spoken Brazilian, 'ele mostrou pra ela' is much more common than 'ele lhe mostrou'."},

{type:"mc",
 q:"Which pronoun fills the gap: 'Eu ___ dei um conselho aos meus irmãos.'",
 opts:["lhe","lhes","os","as"],
 ans:"lhes",
 hint:"The action goes TO your brothers. Two people, indirect object."},

{type:"mc",
 q:"Choose the indirect object pronoun for 'ao senhor':",
 opts:["o","a","lhe","te"],
 ans:"lhe",
 hint:"Formal singular, receiving the action indirectly."},

{type:"fb",
 s:"Ele é uma boa pessoa, eu {1} disse obrigado.",
 a:["lhe"],
 opts:["lhe","o","te","lhes"],
 hint:"You said thanks TO him. Indirect object, singular, third person.",
 sSrc:"He is a good person, I said thanks to {1}."},

{type:"fb",
 s:"Os clientes ligaram. Eu {1} respondi por email.",
 a:["lhes"],
 opts:["lhes","lhe","os","as"],
 hint:"You replied TO the clients. Indirect, plural.",
 sSrc:"The clients called. I replied to {1} by email."},

{type:"match", pairs:[
 {trg:"lhe", src:"to him / to her"},
 {trg:"lhes", src:"to them"},
 {trg:"me", src:"to me / me"},
 {trg:"nos", src:"to us / us"}
]},

{type:"mc",
 q:"In 'Eu lhe entreguei a carta', what does 'lhe' replace?",
 opts:["a ele / a ela","a carta","eu","entreguei"],
 ans:"a ele / a ela",
 hint:"Who receives the letter? That is the indirect object."}
]},

{id:"ptv2_u17l3", title:"Placement", icon:"📍", xp:15, board:true, steps:[
{type:"intro", title:"Where Does the Pronoun Go?",
 desc:"Brazilian and European Portuguese disagree on pronoun placement. In BR, pronouns usually come BEFORE the verb. In PT, they hook onto the end with a hyphen.",
 goals:["Master BR placement (before the verb)","Recognize PT placement (after the verb)","Practice with common verbs"]},

{type:"tip", title:"BR vs PT Placement",
 text:"Brazilian Portuguese (BR):\n\nEu te vi ontem. (I saw you yesterday.)\nEle me ligou. (He called me.)\nNós o conhecemos. (We know him.)\n\nEuropean Portuguese (PT):\n\nEu vi-te ontem.\nEle ligou-me.\nNós conhecemo-lo.\n\nBrazilians place the pronoun BEFORE the verb in most cases. Portuguese speakers attach it AFTER the verb with a hyphen.",
 deepDive:{title:"Why BR Moved the Pronoun Forward",
  text:"Old Portuguese placed pronouns after verbs. Brazilian speech gradually pushed them forward, especially at the start of sentences. Today, BR learners internalize 'me, te, se, o, a, nos' as little words that cling to the LEFT side of the verb. PT kept the older pattern, so 'diz-me' sounds right in Lisbon but strange in São Paulo."}},

{type:"teach", trg:"Eu te vi", src:"I saw you", pos:"verb", gender:null,
 note:"Classic BR placement: subject + pronoun + verb. This is the default in informal Brazilian speech and writing.",
 example:"A: Eu te vi no parque ontem.\nB: Sério? Eu não te notei.",
 exampleSrc:"A: I saw you at the park yesterday.\nB: Really? I didn't notice you.",
 funFact:"This placement feels completely natural to Brazilians but sounds slightly off to Portuguese ears."},

{type:"teach", trg:"Ela me chamou", src:"She called me", pos:"verb", gender:null,
 note:"BR pattern: pronoun sits between the subject and the verb. The pronoun 'me' is unstressed.",
 example:"A: Ela me chamou três vezes.\nB: Desculpa, eu estava com fones de ouvido.",
 exampleSrc:"A: She called me three times.\nB: Sorry, I had headphones on.",
 funFact:"Compare with PT 'Ela chamou-me'. Same meaning, different position."},

{type:"teach", trg:"Eu o conheço", src:"I know him", pos:"verb", gender:null,
 note:"BR written form. In casual speech, 'eu conheço ele' is extremely common.",
 example:"A: Você conhece o novo chefe?\nB: Sim, eu o conheço bem.",
 exampleSrc:"A: Do you know the new boss?\nB: Yes, I know him well.",
 funFact:"The more formal BR written form keeps 'o' before the verb. Spoken BR often replaces it with 'ele'."},

{type:"teach", trg:"Me ajuda!", src:"Help me!", pos:"verb", gender:null,
 note:"BR starts sentences with the pronoun in informal speech. Grammar books disagree, but people do it constantly.",
 example:"A: Me ajuda com essa caixa, por favor.\nB: Claro, já vou aí.",
 exampleSrc:"A: Help me with this box, please.\nB: Sure, I'm coming.",
 funFact:"Formal grammar says you cannot start a sentence with 'me'. Real Brazilians do it all day long."},

{type:"teach", trg:"vi-te", src:"saw you (PT)", pos:"verb", gender:null,
 note:"European Portuguese attaches the pronoun to the end of the verb with a hyphen. Hyphen is mandatory in writing.",
 example:"A: Vi-te na praia ontem. (PT)\nB: Pois, estive em Cascais.",
 exampleSrc:"A: I saw you at the beach yesterday. (PT)\nB: Yeah, I was in Cascais.",
 funFact:"Brazilians almost never write 'vi-te'. If you see this form, you are reading a Portuguese author or newspaper."},

{type:"mc",
 q:"Which is the standard Brazilian placement?",
 opts:["Ela viu-me.","Ela me viu.","Ela viu eu.","Me ela viu."],
 ans:"Ela me viu.",
 hint:"BR puts the pronoun before the verb, after the subject."},

{type:"mc",
 q:"How does a Portuguese (PT) speaker write 'he called me'?",
 opts:["Ele me ligou.","Ele ligou-me.","Me ligou ele.","Ele ligou a mim."],
 ans:"Ele ligou-me.",
 hint:"PT attaches the pronoun to the end of the verb with a hyphen."},

{type:"fb",
 s:"Eu {1} vi no cinema ontem à noite.",
 a:["te"],
 opts:["te","vi-te","tu","tê"],
 hint:"BR placement: pronoun before the verb. You saw your friend informally.",
 sSrc:"I saw {1} at the cinema last night."},

{type:"fb",
 s:"Ele {1} mandou uma mensagem hoje de manhã.",
 a:["me"],
 opts:["me","mim","eu","meu"],
 hint:"First person direct/indirect object, placed before the verb in BR.",
 sSrc:"He sent {1} a message this morning."},

{type:"mc",
 q:"Which BR sentence means 'I know them (the women)'?",
 opts:["Eu os conheço.","Eu as conheço.","Eu lhes conheço.","Eu te conheço."],
 ans:"Eu as conheço.",
 hint:"All-feminine plural group. Match the gender and number."},

{type:"match", pairs:[
 {trg:"Eu te vi (BR)", src:"I saw you"},
 {trg:"Vi-te (PT)", src:"I saw you"},
 {trg:"Ela me chamou (BR)", src:"She called me"},
 {trg:"Ela chamou-me (PT)", src:"She called me"}
]},

{type:"mc",
 q:"In Brazilian Portuguese, where does the pronoun 'me' usually go?",
 opts:["After the verb with a hyphen","Before the verb","At the end of the sentence","Between two verbs"],
 ans:"Before the verb",
 hint:"BR prefers pre-___ position. PT prefers post-___."}
]},

{id:"ptv2_u17l4", title:"Double Pronouns", icon:"🔀", xp:15, board:true, steps:[
{type:"intro", title:"Two Pronouns in One Sentence",
 desc:"When a sentence has both a direct and an indirect object, Portuguese can stack the pronouns. This is formal, but shows up in writing and careful speech.",
 goals:["See how me + o combine","Practice common stacked pairs","Learn when Brazilians simplify instead"]},

{type:"teach", trg:"me deu", src:"gave me", pos:"verb", gender:null,
 note:"The verb 'dar' (to give) commonly takes both an indirect pronoun (receiver) and a direct object (thing given).",
 example:"A: Quem te deu essa flor?\nB: Meu namorado me deu ontem.",
 exampleSrc:"A: Who gave you that flower?\nB: My boyfriend gave it to me yesterday.",
 funFact:"Brazilians usually keep only the indirect pronoun and restate the object. Clean and clear."},

{type:"teach", trg:"me empresta", src:"lend me", pos:"verb", gender:null,
 note:"Classic request structure. The indirect pronoun ('me') sits before the verb in BR.",
 example:"A: Me empresta sua caneta?\nB: Claro, toma aqui.",
 exampleSrc:"A: Can you lend me your pen?\nB: Sure, here you go.",
 funFact:"Starting a sentence with 'Me empresta' is informal but universal in spoken Brazilian."},

{type:"teach", trg:"te digo", src:"I tell you", pos:"verb", gender:null,
 note:"Another common pairing. The indirect pronoun identifies the listener.",
 example:"A: Posso te contar um segredo?\nB: Pode. Eu te digo o que eu sei também.",
 exampleSrc:"A: Can I tell you a secret?\nB: Go ahead. I'll tell you what I know too.",
 funFact:"Brazilian speech prefers 'te digo' over the formal 'digo-te' by a wide margin."},

{type:"tip", title:"Stacking Direct + Indirect",
 text:"Formal Portuguese combines two pronouns into one word:\n\nme + o = mo (he gave it to me > ele mo deu)\nte + a = ta (I gave it to you > eu ta dei)\nlhe + os = lhos\n\nThese contractions are rare in Brazil. They sound old-fashioned and literary. Brazilian speakers usually rewrite the sentence:\n\nEle me deu o livro. (He gave me the book.)\nEle me deu. (He gave it to me. Object dropped.)",
 deepDive:{title:"Why Brazilians Avoid the Contractions",
  text:"Forms like 'mo', 'ta', 'lho' survive in European Portuguese and classic literature. In Brazil, they feel archaic. When both objects appear, Brazilians usually keep just one pronoun and restate the other noun, or drop the direct object if context is obvious. Simpler feels warmer."}},

{type:"teach", trg:"mo deu", src:"gave it to me (formal/PT)", pos:"verb", gender:null,
 note:"Contracted form of 'me' + 'o'. Extremely rare in Brazil, common in PT literature.",
 example:"A: Ele deu-mo ontem. (PT)\nB: Que presente bonito!",
 exampleSrc:"A: He gave it to me yesterday. (PT)\nB: What a pretty gift!",
 funFact:"In Brazil, you would say 'ele me deu ontem' or 'ele me deu o presente ontem'. Never 'mo'."},

{type:"teach", trg:"pedir para alguém", src:"to ask someone to", pos:"verb", gender:null,
 note:"Casual structure that avoids double pronouns entirely. Uses 'para' + full noun/pronoun.",
 example:"A: Eu vou pedir para ele me ajudar.\nB: Boa ideia, ele é muito prestativo.",
 exampleSrc:"A: I'll ask him to help me.\nB: Good idea, he's very helpful.",
 funFact:"This structure lets Brazilians sidestep the trickier stacked-pronoun rules."},

{type:"mc",
 q:"Which sentence is natural Brazilian Portuguese?",
 opts:["Ele mo deu.","Ele me deu o livro.","Ele o mo deu.","Ele deu-mo."],
 ans:"Ele me deu o livro.",
 hint:"BR avoids the contracted forms. Keep one pronoun and name the object."},

{type:"mc",
 q:"Translate 'Can you lend me your car?' in informal BR:",
 opts:["Empresta-me o carro?","Me empresta seu carro?","O empresta para mim?","Lhe empresta o carro?"],
 ans:"Me empresta seu carro?",
 hint:"Casual BR starts with 'me' and keeps the object as a full noun."},

{type:"fb",
 s:"Quem {1} contou essa história? Foi minha avó.",
 a:["te"],
 opts:["te","tu","ti","teu"],
 hint:"Asking who told the story to YOU. Informal indirect pronoun before the verb.",
 sSrc:"Who told {1} that story? It was my grandmother."},

{type:"fb",
 s:"Eu {1} ajudei com o trabalho, não precisa agradecer.",
 a:["te"],
 opts:["te","ti","tu","teu"],
 hint:"You helped your friend. Informal pronoun, BR placement before the verb.",
 sSrc:"I helped {1} with the work, no need to thank me."},

{type:"mc",
 q:"Which is the most natural Brazilian way to say 'I told him the secret'?",
 opts:["Eu lho contei.","Eu lhe contei.","Eu contei-lho.","Eu disse ele."],
 ans:"Eu lhe contei.",
 hint:"Keep '___' for the indirect object, drop the direct object because context is clear."},

{type:"match", pairs:[
 {trg:"me empresta", src:"lend me"},
 {trg:"te digo", src:"I tell you"},
 {trg:"me deu", src:"gave me"},
 {trg:"lhe contei", src:"I told him/her"}
]},

{type:"mc",
 q:"Brazilians generally handle two pronouns by:",
 opts:["Using the contracted form (mo, ta)","Keeping one pronoun and naming the other object","Dropping both pronouns","Using only 'lhe'"],
 ans:"Keeping one pronoun and naming the other object",
 hint:"Simpler sounds warmer in Brazilian speech."}
]}

]}; export default UNIT_17;
