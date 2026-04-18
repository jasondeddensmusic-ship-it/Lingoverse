// Batch 3 — Unit 24, Lesson 2: Proverbi e modi di dire (Proverbs & Idioms with Conditionals)
const BATCH3_U24_L2 = {
  id:"itv2_u24l_b3_2", title:"Proverbi e modi di dire", icon:"\uD83D\uDCDD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Proverbi e modi di dire",
     desc:"Learn Italian proverbs and idiomatic expressions that use conditional and hypothetical structures. These sayings reveal deep Italian wisdom and cultural values.",
     goals:["Learn proverbs with conditional structures","Use idiomatic hypothetical expressions","Understand Italian cultural wisdom"]},

    {type:"teach", trg:"chi vivrà vedrà", src:"time will tell (who lives will see)", pos:"verb", gender:null,
     note:"Proverb using future tense. Literally: 'who will live, will see.'\nExpresses patience and letting the future decide.",
     example:"A: Pensi che vinceremo?\nB: Chi vivrà vedrà!",
     exampleSrc:"A: Do you think we will win?\nB: Time will tell!",
     funFact:"This proverb reflects Italian philosophical patience. Rather than predicting outcomes, it trusts time to reveal the truth. Both verbs use the future tense, creating a simple but powerful parallel structure. Italians use it to avoid premature judgments."},

    {type:"teach", trg:"se non ora, quando?", src:"if not now, when?", pos:"verb", gender:null,
     note:"Rhetorical question. Attributed to Rabbi Hillel (1st century).\nUsed to urge action and decisiveness.",
     example:"A: Dovrei cambiare lavoro, ma ho paura.\nB: Se non ora, quando? Sei pronto.",
     exampleSrc:"A: I should change jobs, but I am scared.\nB: If not now, when? You are ready.",
     funFact:"This phrase became the title of Primo Levi's novel (1982) and later a major Italian feminist movement (2011). The 'Se Non Ora Quando' movement organized massive demonstrations for women's rights across Italy. The ancient phrase found new political life in modern Italy."},

    {type:"teach", trg:"volere e potere", src:"to want is to be able to (where there's a will...)", pos:"verb", gender:null,
     note:"Proverb. Full form: 'Volere e potere' = wanting is being able.\nItalian equivalent of 'Where there's a will, there's a way.'",
     example:"A: Non ce la faccio, e troppo difficile.\nB: Volere e potere! Non arrenderti.",
     exampleSrc:"A: I cannot do it, it is too difficult.\nB: Where there is a will, there is a way! Do not give up.",
     funFact:"This proverb captures Italian optimism about determination. It appears in Collodi's 'Le avventure di Pinocchio' (1883), where it motivates the wooden puppet to become a real boy. Italians use it to encourage perseverance through any difficulty."},

    {type:"teach", trg:"meglio tardi che mai", src:"better late than never", pos:"adv", gender:null,
     note:"Proverb. 'Meglio' = better, 'tardi' = late, 'mai' = never.\nUsed when something finally happens after a long wait.",
     example:"A: Mi dispiace per il ritardo.\nB: Meglio tardi che mai!",
     exampleSrc:"A: I am sorry for the delay.\nB: Better late than never!",
     funFact:"This universal proverb exists in nearly every language. In Italian, it is especially fitting given the country's famously relaxed relationship with punctuality. 'Meglio tardi che mai' is said with a smile, forgiving lateness while gently acknowledging it."},

    {type:"teach", trg:"non si sa mai", src:"you never know", pos:"verb", gender:null,
     note:"Impersonal expression. 'Si' = one/people.\n'Porto l'ombrello, non si sa mai' = I bring the umbrella, you never know.",
     example:"A: Perche porti la giacca? Fa caldo.\nB: Non si sa mai, potrebbe cambiare il tempo.",
     exampleSrc:"A: Why are you bringing the jacket? It is warm.\nB: You never know, the weather might change.",
     funFact:"'Non si sa mai' is the Italian philosophy of preparedness wrapped in three words. It justifies any precaution: bringing a jacket, carrying cash, having extra food. Italians use it constantly, often accompanied by a characteristic shrug and raised eyebrows."},

    {type:"teach", trg:"se Dio vuole", src:"God willing / hopefully", pos:"verb", gender:null,
     note:"Expression. Adds hope or relief to a statement.\n'Se Dio vuole, finisco domani' = God willing, I finish tomorrow.",
     example:"A: Se Dio vuole, domani e l'ultimo esame.\nB: In bocca al lupo!",
     exampleSrc:"A: God willing, tomorrow is the last exam.\nB: Good luck!",
     funFact:"'Se Dio vuole' reflects Italy's Catholic cultural heritage. It is used by both religious and secular Italians, having become a cultural expression more than a strictly religious one. It adds hope and humility, acknowledging that outcomes are not entirely in our control."},

    {type:"teach", trg:"tanto vale", src:"might as well", pos:"adv", gender:null,
     note:"Expression. 'Tanto vale + infinitive' = might as well do something.\n'Tanto vale restare a casa' = We might as well stay home.",
     example:"A: Il treno e cancellato.\nB: Tanto vale prendere l'autobus.",
     exampleSrc:"A: The train is cancelled.\nB: We might as well take the bus.",
     funFact:"'Tanto vale' expresses pragmatic acceptance: since the situation is what it is, we might as well adapt. It reflects Italian pragmatism. 'Vale' means 'it is worth,' so literally: 'it is worth the same amount' to do the alternative. Very common in everyday problem-solving."},

    {type:"teach", trg:"farei meglio a", src:"I had better / I should", pos:"verb", gender:null,
     note:"Expression. 'Farei meglio a + infinitive' = I had better do...\n'Farei meglio a studiare' = I had better study.",
     example:"A: Farei meglio a partire presto.\nB: Si, il traffico sara terribile.",
     exampleSrc:"A: I had better leave early.\nB: Yes, the traffic will be terrible.",
     funFact:"'Farei meglio a...' is a softer alternative to 'dovrei' (I should). It literally means 'I would do better to...' Using the conditional of 'fare' makes this self-advice rather than obligation. Italians prefer this phrasing because it feels less imposing than direct 'devo' (I must)."},

    {type:"teach", trg:"a pensarci bene", src:"come to think of it / on reflection", pos:"verb", gender:null,
     note:"Expression. 'Pensarci' = to think about it.\n'A pensarci bene, hai ragione' = On reflection, you are right.",
     example:"A: A pensarci bene, e meglio aspettare.\nB: Sono d'accordo. Non c'e fretta.",
     exampleSrc:"A: Come to think of it, it is better to wait.\nB: I agree. There is no hurry.",
     funFact:"'A pensarci bene' introduces a revised opinion. The speaker has reconsidered. It is a graceful way to change your mind in Italian conversation. Combined with conditional structures, it allows elegant corrections: 'A pensarci bene, farei diversamente' (On reflection, I would do it differently)."},

    {type:"teach", trg:"per quanto ne so", src:"as far as I know", pos:"adv", gender:null,
     note:"Expression. 'Per quanto' = as far as, 'ne' = of it, 'so' = I know.\nHedges your statement with uncertainty.",
     example:"A: Per quanto ne so, il negozio apre alle nove.\nB: Chiamo per confermare.",
     exampleSrc:"A: As far as I know, the shop opens at nine.\nB: I will call to confirm.",
     funFact:"'Per quanto ne so' protects you from being wrong. It signals that your information might be incomplete or outdated. Italians value this kind of hedging because making definitive statements about uncertain facts can damage credibility. 'A quanto pare' (apparently) serves a similar function."},

    {type:"teach", trg:"semmai", src:"if anything / if at all", pos:"adv", gender:null,
     note:"Adverb. From 'se' + 'mai' (if ever). Corrects or redirects.\n'Semmai, e il contrario' = If anything, it is the opposite.",
     example:"A: Pensi che sia troppo costoso?\nB: Semmai, e troppo economico per la qualita.",
     exampleSrc:"A: Do you think it is too expensive?\nB: If anything, it is too cheap for the quality.",
     funFact:"'Semmai' is an elegant correction tool. It gently redirects the conversation: 'the truth is actually the opposite of what you said.' Italian conversation values indirect correction over blunt contradiction, and 'semmai' is the perfect vehicle for this."},

    {type:"teach", trg:"metti che", src:"suppose that / what if", pos:"verb", gender:null,
     note:"Colloquial. 'Metti che piova' = Suppose it rains.\nInformal version of 'supponiamo che.'",
     example:"A: Metti che perdi il lavoro. Cosa fai?\nB: Cercherei qualcos'altro.",
     exampleSrc:"A: Suppose you lose your job. What do you do?\nB: I would look for something else.",
     funFact:"'Metti che' (literally 'put it that') is the everyday Italian way to set up hypothetical scenarios in casual conversation. Much more common than the formal 'supponiamo che.' Friends playing 'what if' games at dinner will constantly use 'metti che...' to create new scenarios."},

    // Quiz steps
    {type:"mc", q:"What does 'chi vivrà vedrà' express?",
     opts:["Urgency to act immediately","Patience: time will reveal the outcome","Fear of the unknown future","A specific promise to return"],
     ans:"Patience: time will reveal the outcome",
     hint:"Literally 'who will live, will see.' Italian philosophical p.... Trust t... to r... truth rather than making premature judgments."},

    {type:"fb", s:"Non c'e fretta. {1} tardi che mai.",
     a:["Meglio"],
     opts:["Meglio","Peggio","Tanto","Sempre"],
     hint:"A universal proverb. Especially fitting in Italy, where punctuality is treated with a relaxed attitude.",
     sSrc:"{1} late than never."},

    {type:"match", pairs:[
      {trg:"chi vivrà vedrà", src:"time will tell"},
      {trg:"volere e potere", src:"where there's a will..."},
      {trg:"non si sa mai", src:"you never know"},
      {trg:"tanto vale", src:"might as well"},
      {trg:"semmai", src:"if anything"}
    ]},

    {type:"mc", q:"What political movement took its name from 'Se non ora, quando?'",
     opts:["A workers' rights movement in the 1970s","An Italian feminist movement in 2011","A student protest in the 1960s","An environmental campaign in 2020"],
     ans:"An Italian feminist movement in 2011",
     hint:"The ancient phrase (attributed to Rabbi Hillel) became the rallying cry for massive women's rights demonstrations across Italy."},

    {type:"fb", s:"{1} prendere l'autobus.",
     a:["Tanto vale"],
     opts:["Tanto vale","Non si sa","Se Dio","Per quanto"],
     hint:"Might as well. The train is cancelled, so practically speaking, the bus is equally good. Pragmatic Italian acceptance.",
     sSrc:"We {1} take the bus."},

    {type:"mc", q:"What does 'semmai' do in Italian conversation?",
     opts:["It strongly agrees with the speaker","It gently redirects or corrects a statement","It expresses anger and disagreement","It asks for more information"],
     ans:"It gently redirects or corrects a statement",
     hint:"'If anything, the truth is the opposite.' Italian conversation values indirect correction. This elegant word achieves that perfectly."},

    {type:"fb", s:"{1} che piova. Cosa facciamo?",
     a:["Metti"],
     opts:["Metti","Supponi","Ammetti","Pensi"],
     hint:"Suppose that. This colloquial expression (literally 'put it that') sets up casual hypothetical scenarios. Very common among friends.",
     sSrc:"{1} it rains. What do we do?"},

    {type:"mc", q:"What does 'farei meglio a partire presto' mean?",
     opts:["I absolutely must leave early","I had better leave early (self-advice)","I refuse to leave early","I will definitely leave early"],
     ans:"I had better leave early (self-advice)",
     hint:"Softer than 'devo partire.' The conditional of 'fare' + 'meglio a' creates gentle s...-a... rather than obligation."}
  ,{type:"match",pairs:[{trg:"se Dio vuole",src:"God willing / hopefully"},{trg:"a pensarci bene",src:"come to think of it / on reflection"},{trg:"per quanto ne so",src:"as far as I know"}]},{type:"mc",q:"How do you say \"if not now, when?\" in Italian?",opts:["se non ora, quando?","la finestra","il tavolo","la bicicletta"],ans:"se non ora, quando?",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_U24_L2;
