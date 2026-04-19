const UNIT_22 = {
  n:22, lang:"pt", srcLang:"en", track:"v2",
  title:"Faça isso!", sub:"Imperative Mood",
  icon:"📣", level:"B1.2", color:"#7B5EE8",
  lessons:[
    {
      id:"ptv2_u22l1", title:"Informal Commands (tu/você)", icon:"👉", xp:15, board:true,
      steps:[
        {type:"intro", title:"Telling Friends What to Do", desc:"Brazilian Portuguese uses two informal imperative styles. Learn when to use each.", goals:["Form você imperatives","Recognize tu imperatives","Handle regional variation"]},
        {type:"teach", trg:"fala!", src:"speak! (tu)", pos:"verb", gender:null, note:"Informal tu imperative of falar. Common in the South and Northeast of Brazil.", example:"A: Fala a verdade!\nB: Tá bom, tá bom.", exampleSrc:"A: Speak the truth!\nB: Okay, okay.", funFact:"Fala! is also a casual greeting in Brazil, like 'what's up!' or 'hey!'."},
        {type:"teach", trg:"fale!", src:"speak! (você)", pos:"verb", gender:null, note:"você imperative of falar. Built from the present subjunctive.", example:"A: Fale mais alto, por favor.\nB: Desculpe, vou repetir.", exampleSrc:"A: Speak louder, please.\nB: Sorry, I'll repeat.", funFact:"The você imperative is technically more standard, but tu forms dominate in informal speech in many regions."},
        {type:"teach", trg:"come!", src:"eat! (tu)", pos:"verb", gender:null, note:"Informal tu imperative of comer. Drop the final -s from comes.", example:"A: Come tudo!\nB: Tá gostoso.", exampleSrc:"A: Eat everything!\nB: It's tasty.", funFact:"Brazilian moms use imperatives lovingly: Come, meu amor! (Eat, my love!)"},
        {type:"teach", trg:"coma!", src:"eat! (você)", pos:"verb", gender:null, note:"você imperative of comer. Uses the subjunctive -a ending.", example:"A: Coma devagar.\nB: Tudo bem, vou comer.", exampleSrc:"A: Eat slowly.\nB: Okay, I will eat.", funFact:"ER and IR verb você imperatives all end in -a: coma, beba, durma, abra."},
        {type:"teach", trg:"vai!", src:"go! (tu)", pos:"verb", gender:null, note:"Informal tu imperative of ir. Very common across Brazil.", example:"A: Vai lá!\nB: Tô indo!", exampleSrc:"A: Go there!\nB: I'm going!", funFact:"Vai! doubles as an expression of encouragement, like 'come on!' or 'you got this!'."},
        {type:"teach", trg:"vá!", src:"go! (você)", pos:"verb", gender:null, note:"você imperative of ir. Formal but grammatically standard.", example:"A: Vá com cuidado.\nB: Obrigado.", exampleSrc:"A: Go carefully.\nB: Thanks.", funFact:"Vá! appears often in signs and instructions: Vá em frente (Go straight ahead)."},
        {type:"mc", q:"Informal 'speak!' to a friend in Brazil?", opts:["fala","falo","falava","falarás"], ans:"fala", hint:"Drop the final -s from the tu form."},
        {type:"mc", q:"você imperative of comer?", opts:["come","coma","comei","comer"], ans:"coma", hint:"ER verbs take -a in the você imperative."},
        {type:"fb", s:"{1} tudo, está delicioso!", a:"Come", sSrc:"{1} everything, it's delicious!", opts:["Come","Coma","Comer","Comendo"], hint:"Informal tu imperative of comer."},
        {type:"match", pairs:[{trg:"fala!", src:"speak! (tu)"},{trg:"fale!", src:"speak! (você)"},{trg:"come!", src:"eat! (tu)"},{trg:"vai!", src:"go! (tu)"}]},
        {type:"tip", title:"Tu vs Você Imperative", text:"Brazilian informal imperatives split by region:\nTu form (South, Northeast): drop the -s from tu falas -> fala!\nVocê form (Southeast, standard): use the subjunctive -> fale!\nIn practice, you'll hear both everywhere.\nAR verbs: -a ending (fale, coma? NO - fale is ER logic).\nAR -> fale, coma.\nRethink: falar -> fale (você), fala (tu).", deepDive:"The mix of tu and você imperatives is a classic feature of Brazilian Portuguese. Speakers often mix both in the same conversation without noticing. European Portuguese keeps them strictly separate."},
        {type:"mc", q:"Which is você imperative of ir?", opts:["vai","vá","vás","ia"], ans:"vá", hint:"The formal standard form of 'go!'."},
        {type:"fb", s:"{1} mais rápido, estamos atrasados!", a:"Vai", sSrc:"{1} faster, we are late!", opts:["Vai","Vá","Vem","Volta"], hint:"Informal tu imperative of ir. Very common in Brazil."},
        {type:"mc", q:"'Fale mais alto' uses which imperative form?", opts:["tu informal","você (subjunctive)","future tense","infinitive"], ans:"você (subjunctive)", hint:"The você command is built from the same form used to express wishes and doubts."},
        {type:"fb", s:"{1} aqui, por favor. Preciso te mostrar algo.", a:"Vem", sSrc:"{1} here, please. I need to show you something.", opts:["Vem","Vai","Volto","Venha"], hint:"Informal tu imperative of vir. A simple invitation."},
        {type:"teach", trg:"escuta!", src:"listen! (tu)", pos:"verb", gender:null, note:"Informal imperative of escutar. Used to grab attention.", example:"A: Escuta, preciso falar com você.\nB: Fala aí.", exampleSrc:"A: Listen, I need to talk to you.\nB: Go ahead.", funFact:"Escuta aí! is one of the most common conversation openers in Brazilian speech."}
      ]
    },
    {
      id:"ptv2_u22l2", title:"Negative Commands", icon:"🚫", xp:15, board:true,
      steps:[
        {type:"intro", title:"Telling People What NOT to Do", desc:"Negative commands in Portuguese always use the present subjunctive. No tu/você split.", goals:["Form negative imperatives","Understand why they differ from affirmative","Use não with commands"]},
        {type:"teach", trg:"não fale!", src:"don't speak!", pos:"verb", gender:null, note:"All negative commands use the subjunctive, even with tu.", example:"A: Não fale assim comigo.\nB: Tudo bem, vou falar com calma.", exampleSrc:"A: Don't speak to me like that.\nB: Okay, I will speak calmly.", funFact:"In negative commands, Portuguese abandons the tu/você split entirely. Everyone uses the subjunctive form."},
        {type:"teach", trg:"não faça!", src:"don't do it!", pos:"verb", gender:null, note:"Negative imperative of fazer. Irregular but predictable.", example:"A: Não faça barulho.\nB: Vou tentar.", exampleSrc:"A: Don't make noise.\nB: I'll try.", funFact:"Faça comes from the Latin facere, same root as English 'fact' and 'faction'."},
        {type:"teach", trg:"não vá!", src:"don't go!", pos:"verb", gender:null, note:"Negative imperative of ir. Uses subjunctive vá.", example:"A: Não vá embora ainda.\nB: Fico mais um pouco.", exampleSrc:"A: Don't leave yet.\nB: I'll stay a little longer.", funFact:"Não vá! is also the title of many Brazilian love songs and soap opera scenes."},
        {type:"teach", trg:"não se preocupe!", src:"don't worry!", pos:"verb", gender:null, note:"Reflexive verb preocupar-se. Pronouns go AFTER não se.", example:"A: Não se preocupe, tudo vai dar certo.\nB: Tomara.", exampleSrc:"A: Don't worry, it will all work out.\nB: I hope so.", funFact:"Tomara! means 'I hope so' and comes from tomar (to take) + Old Portuguese future endings."},
        {type:"teach", trg:"não esqueça!", src:"don't forget!", pos:"verb", gender:null, note:"Subjunctive of esquecer. Watch the ç before a.", example:"A: Não esqueça as chaves.\nB: Ah, obrigado!", exampleSrc:"A: Don't forget the keys.\nB: Oh, thanks!", funFact:"The cedilla (ç) appears before a, o, u to keep the soft S sound. Before e and i, plain c works."},
        {type:"teach", trg:"não deixe!", src:"don't let / don't leave", pos:"verb", gender:null, note:"Subjunctive of deixar. Flexible verb: 'let', 'leave', 'allow'.", example:"A: Não deixe a porta aberta.\nB: Desculpe, já fecho.", exampleSrc:"A: Don't leave the door open.\nB: Sorry, I'll close it now.", funFact:"Deixa pra lá (let it go) is one of the most Brazilian phrases in existence."},
        {type:"mc", q:"Negative imperative of falar?", opts:["não fala","não fale","não falou","não falava"], ans:"não fale", hint:"All negative commands use the subjunctive."},
        {type:"mc", q:"How do you say 'don't worry!'?", opts:["Preocupe não!","Não preocupa!","Não se preocupe!","Se não preocupe!"], ans:"Não se preocupe!", hint:"Reflexive pronoun goes between ___ and the verb."},
        {type:"fb", s:"Não {1} as chaves!", a:"esqueça", sSrc:"Don't {1} the keys!", opts:["esqueça","esquece","esqueceu","esquecer"], hint:"Subjunctive form of esquecer, watch the ç."},
        {type:"tip", title:"Why Negative Uses Subjunctive", text:"Affirmative commands have two forms (tu and você).\nNegative commands have only ONE form: the subjunctive.\nAffirmative: Fala! (tu) or Fale! (você)\nNegative: Não fale! (both)\nWith reflexives, the pronoun comes AFTER não:\nNão se preocupe. Não me deixe.\nRule: não + reflexive + verb.", deepDive:"This rule is a relic of Latin: in classical Latin, negative commands used the subjunctive (ne dicas, 'don't say'). Portuguese preserves this distinction, unlike Spanish which also does it."},
        {type:"match", pairs:[{trg:"não fale!", src:"don't speak!"},{trg:"não faça!", src:"don't do it!"},{trg:"não vá!", src:"don't go!"},{trg:"não esqueça!", src:"don't forget!"}]},
        {type:"mc", q:"Translate: 'Don't let the dog out!'", opts:["Deixe o cachorro sair!","Não deixa o cachorro sair!","Não deixe o cachorro sair!","Não deixar o cachorro sair!"], ans:"Não deixe o cachorro sair!", hint:"Negative + subjunctive of deixar + infinitive."},
        {type:"fb", s:"Não {1} barulho, o bebê está dormindo.", a:"faça", sSrc:"Don't {1} noise, the baby is sleeping.", opts:["faça","faz","fez","fazendo"], hint:"Negative imperative of fazer. Subjunctive form."},
        {type:"mc", q:"Negative imperative always uses which form?", opts:["infinitive","indicative","subjunctive","future"], ans:"subjunctive", hint:"Even with tu, negative commands switch to this mood."},
        {type:"fb", s:"Não {1} embora, ainda preciso de você.", a:"vá", sSrc:"Don't {1} yet, I still need you.", opts:["vá","vai","ir","indo"], hint:"Negative imperative of ir. Subjunctive form."},
        {type:"teach", trg:"calma!", src:"stay calm! / easy!", pos:"intj", gender:null, note:"Not a verb, but functions like an imperative interjection.", example:"A: Calma, vamos resolver isso.\nB: Tá bom, vamos falar.", exampleSrc:"A: Stay calm, we'll sort this out.\nB: Okay, let's talk.", funFact:"Calma! is arguably the most-used one-word command in Brazilian Portuguese, from parents to taxi drivers."}
      ]
    },
    {
      id:"ptv2_u22l3", title:"Softening Commands", icon:"🕊️", xp:15, board:true,
      steps:[
        {type:"intro", title:"Requests Without Barking", desc:"Brazilians rarely use bare imperatives. Learn the softeners that make requests friendly.", goals:["Add softeners to imperatives","Use question-framing","Add terms of endearment"]},
        {type:"teach", trg:"por favor", src:"please", pos:"adv", gender:null, note:"The most basic softener. Goes before or after the command.", example:"A: Repete, por favor.\nB: Claro.", exampleSrc:"A: Repeat, please.\nB: Sure.", funFact:"Por favor literally means 'for favor' - you are asking for a favor from the other person."},
        {type:"teach", trg:"faz favor", src:"please (soft form)", pos:"adv", gender:null, note:"Literally 'do me the favor'. Common in Portugal, used in parts of Brazil too.", example:"A: Me passa o sal, faz favor.\nB: Toma.", exampleSrc:"A: Pass me the salt, please.\nB: Here.", funFact:"In Portugal, faz favor is the default. In Brazil, por favor is more common."},
        {type:"teach", trg:"dá pra", src:"could you / can you", pos:"verb", gender:null, note:"Literally 'is it possible to'. Very casual Brazilian.", example:"A: Dá pra baixar o volume?\nB: Desculpa, já baixo.", exampleSrc:"A: Could you lower the volume?\nB: Sorry, I'll lower it.", funFact:"Dá pra... is arguably the most Brazilian way to ask for something informally."},
        {type:"teach", trg:"será que", src:"I wonder if / could it be that", pos:"conj", gender:null, note:"Softens a request by framing it as a wondering question.", example:"A: Será que você pode me ajudar?\nB: Com o que?", exampleSrc:"A: I wonder if you can help me?\nB: With what?", funFact:"Será que... opens polite questions without directly demanding: it sounds like musing aloud."},
        {type:"teach", trg:"me faz um favor?", src:"do me a favor?", pos:"verb", gender:null, note:"Pre-request marker. Announces you're about to ask for something.", example:"A: Me faz um favor? Segura isso.\nB: Claro.", exampleSrc:"A: Do me a favor? Hold this.\nB: Sure.", funFact:"Brazilians often announce favors in advance, giving the other person a chance to brace themselves."},
        {type:"teach", trg:"meu amor", src:"my love / dear", pos:"noun", gender:"m", note:"Term of endearment often attached to requests to soften them.", example:"A: Meu amor, pode pegar água?\nB: Vou lá.", exampleSrc:"A: Sweetheart, can you get water?\nB: I'll go.", funFact:"Brazilians use meu amor for spouses, children, close friends, and sometimes even strangers at shops."},
        {type:"fb", s:"{1} um favor: segura minha bolsa?", a:"Me faz", sSrc:"{1}: hold my bag for me?", opts:["Me faz","Por favor","Dá pra","Será que"], hint:"A pre-request marker that announces you're about to ask for something."},
        {type:"fb", s:"Ana, {1}, pode ligar a luz?", a:"meu amor", sSrc:"Ana, {1}, could you turn on the light?", opts:["meu amor","dá pra","será que","por favor"], hint:"A term of endearment used to soften a request warmly."},
        {type:"mc", q:"Casual 'could you lower the volume'?", opts:["Baixa o volume!","Dá pra baixar o volume?","Volume baixo!","Baixar volume."], ans:"Dá pra baixar o volume?", hint:"Frame the command as a question with dá ___."},
        {type:"mc", q:"Soft opener meaning 'I wonder if'?", opts:["é que","mas que","será que","tanto que"], ans:"será que", hint:"This phrase lets you ask without sounding demanding."},
        {type:"fb", s:"Me passa a caneta, {1} favor.", a:"por", sSrc:"Pass me the pen, {1} favor.", opts:["por","de","com","em"], hint:"The most common politeness marker in Portuguese."},
        {type:"fb", s:"Maria, {1}, você pode me ajudar?", a:"meu amor", sSrc:"Maria, {1}, can you help me?", opts:["meu amor","dá pra","será que","por favor"], hint:"Term of endearment attached to requests for extra warmth."},
        {type:"fb", s:"{1} você pode fechar a porta?", a:"Dá pra", sSrc:"{1} you close the door?", opts:["Dá pra","Será que","Me faz","Por favor"], hint:"Casual Brazilian opener: 'is it possible to...'"},
        {type:"mc", q:"Most polite way to say 'wait a moment'?", opts:["Espera!","Espera aí!","Espera um momento, por favor.","Esperar!"], ans:"Espera um momento, por favor.", hint:"Full phrase with softener."},
        {type:"match", pairs:[{trg:"por favor", src:"please"},{trg:"dá pra", src:"could you"},{trg:"será que", src:"I wonder if"},{trg:"me faz um favor?", src:"do me a favor?"}]},
        {type:"tip", title:"Command Softening Toolkit", text:"Brazilians rarely use bare imperatives with strangers. Stack softeners:\n1. Frame as question: Dá pra fechar a porta?\n2. Add por favor.\n3. Use será que...\n4. Add terms of endearment: meu amor, querida, moço(a).\n5. Use conditional forms: poderia, gostaria.\nCombine them: Será que poderia fechar a porta, por favor?", deepDive:"Brazilians interpret unsoftened imperatives as rude or bossy. A boss telling staff 'Traga o café!' (Bring the coffee!) sounds harsh. The normal version would be Você poderia trazer o café, por favor?"},
{type:"match", pairs:[
  {trg:"escuta!", src:"listen! (tu)"},
  {trg:"não deixe!", src:"don"},
  {trg:"calma!", src:"stay calm! / easy!"},
  {trg:"faz favor", src:"please (soft form)"},
  {trg:"meu amor", src:"my love / dear"}
]}
      ]
    }
  ]
};
export default UNIT_22;
