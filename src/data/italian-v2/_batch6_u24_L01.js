// Batch 6 — Unit 24 extra lesson. Il periodo ipotetico: Regret & Missed Opportunities
const BATCH6_L1 = {id:"itv2_u24l_b6_1", title:"Rimpianti e occasioni mancate", icon:"\u{1F614}", xp:15, board:true, steps:[
{type:"intro", title:"Rimpianti e occasioni mancate",
 desc:"Learn to express regret, missed opportunities, and counterfactual situations using advanced if-clauses.",
 goals:["Express regret about the past","Discuss missed opportunities","Use the third conditional (periodo ipotetico dell'irrealta)"]},

{type:"teach", trg:"il rimpianto", src:"the regret", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i rimpianti.\nFrom 'rimpiangere' (to regret). A deep sense of loss.",
 example:"A: Il mio piu grande rimpianto? Non aver studiato musica.\nB: Non e mai troppo tardi!",
 exampleSrc:"A: My biggest regret? Not having studied music.\nB: It is never too late!",
 funFact:"'Rimpianto' has a melancholic quality that 'regret' lacks. Italian culture embraces nostalgia: 'la dolce malinconia' (sweet melancholy) of looking back."},

{type:"teach", trg:"rimpiangere", src:"to regret / to miss deeply", pos:"verb", gender:null,
 note:"Irregular -ere verb. rimpiango, rimpiangi, rimpiange.\nPast participle: rimpianto.",
 example:"A: Rimpiango di non aver viaggiato di piu.\nB: Puoi ancora farlo!",
 exampleSrc:"A: I regret not having traveled more.\nB: You can still do it!",
 funFact:"'Rimpiangere' literally means 'to cry again' (ri + piangere). It implies deep emotional weight, more intense than the English 'to regret.'"},

{type:"teach", trg:"pentirsi", src:"to regret / to repent", pos:"verb", gender:null,
 note:"Reflexive -ire verb. mi pento, ti penti, si pente.\nMore active remorse than 'rimpiangere.'",
 example:"A: Mi sono pentito di quello che ho detto.\nB: Puoi ancora chiedere scusa.",
 exampleSrc:"A: I regret what I said.\nB: You can still apologize.",
 funFact:"'Pentirsi' has religious overtones from Catholic tradition. A 'pentito' in modern Italy is also a Mafia informant who repents and cooperates with authorities."},

{type:"teach", trg:"l'occasione", src:"the opportunity / occasion", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le occasioni.\nBoth an opportunity and a special occasion.",
 example:"A: Ho perso un'occasione d'oro.\nB: Ne arriveranno altre, vedrai.",
 exampleSrc:"A: I missed a golden opportunity.\nB: Others will come, you will see.",
 funFact:"'L'occasione fa l'uomo ladro' (opportunity makes the man a thief) is a classic Italian proverb suggesting that circumstances tempt people."},

{type:"teach", trg:"sprecare", src:"to waste", pos:"verb", gender:null,
 note:"Regular -are verb. spreco, sprechi, spreca.\nTo waste resources, time, or opportunities.",
 example:"A: Non sprecare questa occasione!\nB: Hai ragione, devo agire adesso.",
 exampleSrc:"A: Do not waste this opportunity!\nB: You are right, I must act now.",
 funFact:"'Spreco' (waste) is a sensitive topic in Italian food culture. 'Non si spreca il cibo!' (we do not waste food!) is a firm Italian family rule, rooted in postwar values."},

{type:"teach", trg:"recuperare", src:"to recover / to make up for", pos:"verb", gender:null,
 note:"Regular -are verb. recupero, recuperi, recupera.\nTo regain something lost or make up for lost time.",
 example:"A: Devo recuperare il tempo perso.\nB: Con impegno, ce la farai.",
 exampleSrc:"A: I need to make up for lost time.\nB: With commitment, you will make it.",
 funFact:"'Recuperare' is used broadly: 'recuperare un esame' (retake an exam), 'recuperare le forze' (regain strength), 'recuperare un rapporto' (mend a relationship)."},

{type:"teach", trg:"avrei dovuto", src:"I should have", pos:"verb", gender:null,
 note:"Conditional past of 'dovere.' Expresses obligation that was not fulfilled.\n'Avrei dovuto + infinitive' = I should have + past participle.",
 example:"A: Avrei dovuto studiare di piu.\nB: Non e troppo tardi per recuperare.",
 exampleSrc:"A: I should have studied more.\nB: It is not too late to catch up.",
 funFact:"'Avrei dovuto' is the Italian expression of hindsight regret. It is used constantly in daily conversation for everything from missed buses to life decisions."},

{type:"teach", trg:"avrei potuto", src:"I could have", pos:"verb", gender:null,
 note:"Conditional past of 'potere.' Expresses possibility that was not realized.\n'Avrei potuto + infinitive' = I could have.",
 example:"A: Avrei potuto accettare quel lavoro.\nB: Perche non l'hai fatto?",
 exampleSrc:"A: I could have accepted that job.\nB: Why did you not do it?",
 funFact:"'Avrei potuto' combined with 'avrei dovuto' creates powerful expressions of regret. These two forms are the backbone of expressing missed opportunities in Italian."},

{type:"teach", trg:"se solo", src:"if only", pos:"conj", gender:null,
 note:"Conjunction expressing a wish about the past.\n'Se solo + congiuntivo trapassato' = If only I had...",
 example:"A: Se solo avessi ascoltato tua madre!\nB: Lo so, aveva ragione lei.",
 exampleSrc:"A: If only you had listened to your mother!\nB: I know, she was right.",
 funFact:"'Se solo' adds emotional intensity to the 'periodo ipotetico.' It transforms a neutral conditional into a heartfelt wish that things had been different."},

{type:"teach", trg:"ormai", src:"by now / at this point", pos:"adv", gender:null,
 note:"Adverb expressing that it is too late to change something.\nA key word in expressing irreversibility.",
 example:"A: Ormai e troppo tardi per cambiare idea.\nB: Purtroppo hai ragione.",
 exampleSrc:"A: By now it is too late to change your mind.\nB: Unfortunately you are right.",
 funFact:"'Ormai' is one of the most emotionally loaded Italian adverbs. It captures the finality of missed chances: what is done is done, there is no going back."},

{type:"teach", trg:"purtroppo", src:"unfortunately", pos:"adv", gender:null,
 note:"Adverb. Compound: pur (even) + troppo (too much).\nExpresses regret about a situation.",
 example:"A: Purtroppo non posso venire alla festa.\nB: Che peccato! Ci mancherai.",
 exampleSrc:"A: Unfortunately I cannot come to the party.\nB: What a shame! We will miss you.",
 funFact:"'Purtroppo' literally means 'even too much,' suggesting that the bad news is excessive. It is the polite, standard way to express disappointment in Italian."},

{type:"teach", trg:"rassegnarsi", src:"to resign oneself / to accept", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi rassegno, ti rassegni, si rassegna.\nTo accept an unavoidable reality.",
 example:"A: Mi sono rassegnato alla situazione.\nB: A volte bisogna accettare le cose.",
 exampleSrc:"A: I have resigned myself to the situation.\nB: Sometimes we must accept things.",
 funFact:"'Rassegnazione' (resignation/acceptance) has cultural roots in Italian Catholicism. Accepting fate with grace is considered a virtue in traditional Italian thought."},

{type:"teach", trg:"riscattarsi", src:"to redeem oneself / to make amends", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi riscatto, ti riscatti, si riscatta.\nTo make up for past failures.",
 example:"A: Vuole riscattarsi dopo l'errore.\nB: Tutti meritano una seconda possibilita.",
 exampleSrc:"A: He wants to redeem himself after the mistake.\nB: Everyone deserves a second chance.",
 funFact:"'Riscatto' originally meant 'ransom' (to buy back a prisoner). The figurative sense of personal redemption is now the primary meaning in everyday Italian."},

{type:"teach", trg:"la lezione", src:"the lesson (moral)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le lezioni.\nBoth a class and a moral lesson learned from experience.",
 example:"A: Ho imparato la lezione. Non lo faro piu.\nB: L'importante e crescere dagli errori.",
 exampleSrc:"A: I learned my lesson. I will not do it again.\nB: The important thing is to grow from mistakes.",
 funFact:"'Dare una lezione a qualcuno' means to teach someone a lesson (punish them). 'Imparare la lezione' means to learn from a mistake. Both meanings are very common."},

{type:"mc", q:"Come si esprime 'I should have' in italiano?",
 opts:["avrei dovuto","avrei potuto","ho dovuto","devo"],
 ans:"avrei dovuto",
 hint:"Conditional past of 'dovere.' An obligation that was not fulfilled in the past."},

{type:"fb", s:"Mi sono {1} di quello che ho detto ieri.", a:["pentito"],
 opts:["pentito","rimpianto","rassegnato","riscattato"],
 hint:"Past participle of the reflexive verb meaning 'to repent' or 'to deeply regret.'",
 sSrc:"I {1} what I said yesterday."},

{type:"match", pairs:[
 {trg:"il rimpianto", src:"regret"},
 {trg:"l'occasione", src:"opportunity"},
 {trg:"sprecare", src:"to waste"},
 {trg:"recuperare", src:"to recover"}
]},

{type:"mc", q:"Cosa significa 'ormai'?",
 opts:["By now, at this point (too late)","Maybe","Always","Sometimes"],
 ans:"By now, at this point (too late)",
 hint:"An adverb expressing that the moment has passed and cannot be changed."},

{type:"fb", s:"{1} avessi ascoltato il consiglio di mia madre!", a:["Se solo"],
 opts:["Se solo","Ormai","Purtroppo","Magari"],
 hint:"Two words meaning 'if only.' Expresses a heartfelt wish about the past.",
 sSrc:"{1} I had listened to my mother's advice!"},

{type:"mc", q:"Cosa significa 'riscattarsi'?",
 opts:["to redeem oneself after a failure","to give up completely","to regret deeply","to forget the past"],
 ans:"to redeem oneself after a failure",
 hint:"To make amends, to prove yourself a... a mistake. Originally meant 'to ransom.'"},

{type:"fb", s:"{1} non posso venire, ho un impegno.", a:["Purtroppo"],
 opts:["Purtroppo","Ormai","Se solo","Magari"],
 hint:"An adverb meaning 'unfortunately.' The polite way to deliver bad news.",
 sSrc:"{1} I cannot come, I have a commitment."},

{type:"match", pairs:[
 {trg:"avrei dovuto", src:"I should have"},
 {trg:"avrei potuto", src:"I could have"},
 {trg:"pentirsi", src:"to repent"},
 {trg:"rassegnarsi", src:"to resign oneself"}
]}
,{type:"match",pairs:[{trg:"rimpiangere",src:"to regret / to miss deeply"},{trg:"ormai",src:"by now / at this point"},{trg:"riscattarsi",src:"to redeem oneself / to make amends"}]}]};
export default BATCH6_L1;
