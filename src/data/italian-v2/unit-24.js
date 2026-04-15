// Italian V2 Unit 24 — Il periodo ipotetico (If-Clauses) (B1.4)
// CILS/CELI B1 aligned. Real and hypothetical conditions, common expressions.

const UNIT_24 = {
  n:24, lang:"it", srcLang:"en", track:"v2",
  title:"Il periodo ipotetico", sub:"If-Clauses & Hypotheticals",
  icon:"🔀", level:"B1.4", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u24l1", title:"Se piove, resto a casa", icon:"🌧️", xp:15, board:true, steps:[
      {type:"intro", title:"Se piove, resto a casa",
       desc:"Learn Type 1 if-clauses: real, possible conditions. When the 'if' part is likely or possible, Italian uses the present tense (indicative) in both halves, or present + future.",
       goals:["Form Type 1 if-clauses with present + present","Form Type 1 if-clauses with present + future","Distinguish between real and hypothetical conditions"]},

      {type:"teach", trg:"se", src:"if", pos:"conj", gender:null,
       note:"Conjunction. The word that starts all if-clauses.\nNever confused with 'si' (yes/oneself). Different accent.",
       example:"A: Se vuoi, possiamo uscire.\nB: Va bene, se non piove.",
       exampleSrc:"A: If you want, we can go out.\nB: All right, if it does not rain.",
       funFact:"'Se' (if) and 'si' (yes/oneself) are different words despite sounding similar. In writing, they are distinguished by context. In speech, 'se' has a slightly more open 'e' sound. Some style guides write 'se' with a grave accent ('se') in conditional clauses to avoid ambiguity with the reflexive 'se.'"},

      {type:"teach", trg:"se piove", src:"if it rains", pos:"verb", gender:null,
       note:"Type 1: se + present indicative. Real, possible situation.\n'Se piove, non esco' = If it rains, I will not go out.",
       example:"A: Se piove, restiamo a casa.\nB: E se non piove, andiamo al parco.",
       exampleSrc:"A: If it rains, we stay at home.\nB: And if it does not rain, we go to the park.",
       funFact:"Type 1 if-clauses express real possibilities. Both verbs are in the present indicative. This is the simplest if-clause and works exactly like English 'If it rains, I stay home.' Italian can also use the future in the main clause: 'Se piove, restero a casa.'"},

      {type:"teach", trg:"se studi, impari", src:"if you study, you learn", pos:"verb", gender:null,
       note:"Type 1 pattern: se + present, present. A general truth.\nBoth clauses use the indicative mood.",
       example:"A: Se studi ogni giorno, impari velocemente.\nB: Hai ragione, la costanza e la chiave.",
       exampleSrc:"A: If you study every day, you learn quickly.\nB: You are right, consistency is the key.",
       funFact:"When both halves use the present, the if-clause expresses a general truth or habitual action: 'Se mangi troppo, ingrassi' (If you eat too much, you gain weight). This is also called the 'zero conditional' because the outcome is essentially guaranteed."},

      {type:"teach", trg:"se avrai tempo", src:"if you will have time / if you have time", pos:"verb", gender:null,
       note:"Type 1 variant: se + future, future. Both verbs in the future.\n'Se avrai tempo, verra' = If you have time, come.",
       example:"A: Se avro tempo, verro alla festa.\nB: Se verrai, ci divertiremo!",
       exampleSrc:"A: If I have time, I will come to the party.\nB: If you come, we will have fun!",
       funFact:"Italian allows the future tense in the 'se' clause, unlike English. 'Se piover domani, restero a casa' (If it will rain tomorrow, I will stay home) is perfectly correct in Italian. English requires 'If it rains' (present), but Italian can use either present or future in the if-clause."},

      {type:"teach", trg:"a meno che", src:"unless", pos:"conj", gender:null,
       note:"Conjunction. 'A meno che non' + subjunctive = unless.\nThe 'non' is required but does NOT make it negative.",
       example:"A: Vengo alla festa, a meno che non piova.\nB: Spero che non piova!",
       exampleSrc:"A: I will come to the party, unless it rains.\nB: I hope it does not rain!",
       funFact:"'A meno che non' uses a strange 'expletive non' that does not negate anything. 'A meno che non piova' means 'unless it rains,' not 'unless it does not rain.' This redundant 'non' exists in several Italian constructions and confuses even native speakers. It is a remnant of Latin syntax."},

      {type:"teach", trg:"nel caso in cui", src:"in case / in the event that", pos:"conj", gender:null,
       note:"Conjunction. Followed by the subjunctive.\n'Nel caso in cui piova' = in case it rains.",
       example:"A: Porta l'ombrello, nel caso in cui piova.\nB: Buona idea, non si sa mai.",
       exampleSrc:"A: Bring the umbrella, in case it rains.\nB: Good idea, you never know.",
       funFact:"'Nel caso in cui' is more formal than 'se' and always takes the subjunctive. In everyday speech, Italians often simplify to 'caso mai' (in case) or 'se per caso' (if by chance). 'Non si sa mai' (you never know) is the classic follow-up phrase."},

      {type:"tip", title:"Type 1 If-Clauses: The Real Condition",
       text:"Type 1 expresses possible or likely conditions:\n\nPattern A: Se + present, present\nSe piove, resto a casa. (general truth)\n\nPattern B: Se + present, future\nSe piove, restero a casa. (specific plan)\n\nPattern C: Se + future, future\nSe piover, restero a casa. (both future)\n\nAll three are correct. Choose based on how specific the situation is.",
       deepDive:{title:"Italian vs. English If-Clauses",
        text:"The biggest difference: Italian allows the future tense after 'se,' while English does not. 'If it will rain' is wrong in English but 'Se piover' is correct in Italian. This gives Italian speakers more flexibility. The subjunctive is NOT used in Type 1 (real conditions). Save the subjunctive for Type 2 (hypothetical conditions)."}},

      // Quiz steps
      {type:"mc", q:"Which tenses are used in Type 1 if-clauses?",
       opts:["Present + present or present + future","Subjunctive + conditional","Imperfect + conditional","Passato prossimo + future"],
       ans:"Present + present or present + future",
       hint:"Type 1 deals with real, possible conditions. Both verbs stay in the indicative mood. No subjunctive needed."},

      {type:"fb", s:"Se {1}, restiamo a casa.",
       a:["piove"],
       opts:["piove","piovesse","pioverebbe","piover"],
       hint:"This is a real condition (Type 1). The 'se' clause uses the present indicative. Rain is a genuine possibility.",
       sSrc:"If it {1}, we stay at home."},

      {type:"match", pairs:[
        {trg:"se piove", src:"if it rains (Type 1)"},
        {trg:"se studi", src:"if you study (Type 1)"},
        {trg:"a meno che non", src:"unless"},
        {trg:"nel caso in cui", src:"in case"},
        {trg:"se avrai tempo", src:"if you have time (future)"}
      ]},

      {type:"mc", q:"What is unusual about 'a meno che non'?",
       opts:["The 'non' does not negate; it is an expletive remnant of Latin","The 'non' makes it negative","It uses the indicative","It means 'because'"],
       ans:"The 'non' does not negate; it is an expletive remnant of Latin",
       hint:"'A meno che non piova' means 'unless it rains,' NOT 'unless it does not rain.' The 'non' is grammatically required but meaningless."},

      {type:"fb", s:"Se avro tempo, {1} alla festa.",
       a:["verro"],
       opts:["verro","vengo","venissi","verrei"],
       hint:"Both verbs are in the future tense here (Type 1, Pattern C). 'Se + future, future' is correct in Italian.",
       sSrc:"If I have time, I {1} to the party."},

      {type:"mc", q:"Can Italian use the future tense after 'se'?",
       opts:["Yes, unlike English, Italian allows 'se + future'","No, it must always be the present","Only with irregular verbs","Only in formal writing"],
       ans:"Yes, unlike English, Italian allows 'se + future'",
       hint:"'Se piover' is correct Italian. 'If it will rain' is incorrect English. This is a key difference between the two languages."},

      {type:"fb", s:"Porta l'ombrello, {1} in cui piova.",
       a:["nel caso"],
       opts:["nel caso","a meno","se","perche"],
       hint:"Just in case it rains. This formal conjunction is followed by the subjunctive. Everyday alternatives: 'caso mai' or 'se per caso.'",
       sSrc:"Bring the umbrella, {1} it rains."},

      {type:"mc", q:"What is the difference between Pattern A and Pattern B?",
       opts:["A (present+present) is general truth; B (present+future) is specific plan","There is no difference","A is formal, B is informal","A is written, B is spoken"],
       ans:"A (present+present) is general truth; B (present+future) is specific plan",
       hint:"'Se piove, resto a casa' is a general habit. 'Se piove, restero a casa' refers to a specific future situation."}
    ]},

    {id:"itv2_u24l2", title:"Se fossi in te", icon:"🤔", xp:15, board:true, steps:[
      {type:"intro", title:"Se fossi in te",
       desc:"Learn Type 2 if-clauses: hypothetical, unlikely, or unreal conditions. When the 'if' part is imaginary or contrary to fact, Italian uses the imperfect subjunctive + conditional.",
       goals:["Form Type 2 if-clauses with imperfect subjunctive + conditional","Use common expressions like 'se fossi in te'","Distinguish Type 1 from Type 2"]},

      {type:"teach", trg:"se fossi", src:"if I were / if you were", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'essere.' Se fossi, se fossi, se fosse.\nUsed in Type 2 (hypothetical) if-clauses.",
       example:"A: Se fossi ricco, viaggerei per il mondo.\nB: Anch'io, se fossi ricca!",
       exampleSrc:"A: If I were rich, I would travel the world.\nB: Me too, if I were rich!",
       funFact:"'Se fossi' is the imperfect subjunctive (congiuntivo imperfetto) of 'essere.' In Type 2 if-clauses, the 'se' clause uses this tense, and the main clause uses the conditional. The io and tu forms are identical (fossi), so context or pronouns clarify the subject."},

      {type:"teach", trg:"se avessi", src:"if I had / if you had", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'avere.' Se avessi, se avessi, se avesse.\nUsed in Type 2 for hypothetical possession or ability.",
       example:"A: Se avessi piu tempo, leggerei di piu.\nB: Se avessi meno lavoro, farei lo stesso.",
       exampleSrc:"A: If I had more time, I would read more.\nB: If I had less work, I would do the same.",
       funFact:"The imperfect subjunctive of 'avere' follows a regular pattern: avessi, avessi, avesse, avessimo, aveste, avessero. Combined with the conditional in the main clause, it creates the classic hypothetical structure. 'Se avessi un milione di euro...' (If I had a million euros...) is a favorite daydream starter."},

      {type:"teach", trg:"se potessi", src:"if I could", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'potere.' Se potessi, se potessi, se potesse.\n'Se potessi, lo farei' = If I could, I would do it.",
       example:"A: Se potessi tornare indietro, studierei medicina.\nB: Davvero? Io sceglierei architettura.",
       exampleSrc:"A: If I could go back, I would study medicine.\nB: Really? I would choose architecture.",
       funFact:"'Se potessi' is one of the most versatile hypothetical starters. 'Se potessi cambiare una cosa...' (If I could change one thing...) opens up any conversation about regrets, wishes, or alternative life paths. Italian loves these hypothetical explorations in casual talk."},

      {type:"teach", trg:"se fossi in te", src:"if I were you", pos:"verb", gender:null,
       note:"Fixed expression. 'Se fossi in te' (informal) / 'Se fossi in Lei' (formal).\nAlways followed by the conditional.",
       example:"A: Se fossi in te, accetterei il lavoro.\nB: Pensi davvero che dovrei?",
       exampleSrc:"A: If I were you, I would accept the job.\nB: Do you really think I should?",
       funFact:"'Se fossi in te' is the Italian equivalent of 'If I were you.' The 'fossi' is imperfect subjunctive because you obviously cannot be someone else, making it inherently hypothetical. This expression is the most natural way to give advice in Italian conversation."},

      {type:"teach", trg:"se avessi tempo", src:"if I had time", pos:"verb", gender:null,
       note:"Type 2 pattern: se + imperfect subjunctive, conditional.\n'Se avessi tempo, viaggerei' = If I had time, I would travel.",
       example:"A: Se avessi tempo, imparerei il giapponese.\nB: Se avessi soldi, andrei in Giappone!",
       exampleSrc:"A: If I had time, I would learn Japanese.\nB: If I had money, I would go to Japan!",
       funFact:"Type 2 if-clauses are inherently wistful. They express what you would do if reality were different. Italian conversation loves building chains: 'Se avessi tempo e soldi, viaggerei. Se viaggiassi, imparerei le lingue. Se parlassi le lingue...' Each condition opens a new fantasy."},

      {type:"teach", trg:"sarebbe", src:"he/she/it would be", pos:"verb", gender:null,
       note:"Conditional of 'essere,' third person singular.\nUsed in the main clause of Type 2 if-clauses.",
       example:"A: Se tutti fossero gentili, il mondo sarebbe migliore.\nB: Sarebbe bello, ma non e realistico.",
       exampleSrc:"A: If everyone were kind, the world would be better.\nB: It would be nice, but it is not realistic.",
       funFact:"'Sarebbe' appears constantly in Italian conversation for softened statements: 'Sarebbe bello' (It would be nice), 'Sarebbe possibile?' (Would it be possible?), 'Sarebbe meglio' (It would be better). Even outside if-clauses, the conditional of 'essere' adds diplomacy to any sentence."},

      {type:"verb_table", title:"Congiuntivo imperfetto: essere / avere",
       note:"These two verbs form the backbone of Type 2 if-clauses. Both are slightly irregular.",
       groups:[{label:"essere (to be)", rows:[
         {pronoun:"se io", form:"fossi", src:"if I were"},
         {pronoun:"se tu", form:"fossi", src:"if you were"},
         {pronoun:"se lui/lei", form:"fosse", src:"if he/she were"},
         {pronoun:"se noi", form:"fossimo", src:"if we were"},
         {pronoun:"se voi", form:"foste", src:"if you (pl.) were"},
         {pronoun:"se loro", form:"fossero", src:"if they were"}
       ]},{label:"avere (to have)", rows:[
         {pronoun:"se io", form:"avessi", src:"if I had"},
         {pronoun:"se tu", form:"avessi", src:"if you had"},
         {pronoun:"se lui/lei", form:"avesse", src:"if he/she had"},
         {pronoun:"se noi", form:"avessimo", src:"if we had"},
         {pronoun:"se voi", form:"aveste", src:"if you (pl.) had"},
         {pronoun:"se loro", form:"avessero", src:"if they had"}
       ]}]},

      // Quiz steps
      {type:"mc", q:"What tenses are used in Type 2 if-clauses?",
       opts:["Imperfect subjunctive + conditional","Present + present","Future + future","Passato prossimo + conditional"],
       ans:"Imperfect subjunctive + conditional",
       hint:"Type 2 deals with hypothetical or unreal conditions. The 'se' clause uses the imperfect subjunctive. The main clause uses the conditional."},

      {type:"fb", s:"Se {1} ricco, viaggerei per il mondo.",
       a:["fossi"],
       opts:["fossi","sono","saro","sia"],
       hint:"This is hypothetical (you are not actually rich). Type 2 requires the imperfect subjunctive of 'essere' after 'se.'",
       sSrc:"If I {1} rich, I would travel the world."},

      {type:"match", pairs:[
        {trg:"se fossi", src:"if I/you were"},
        {trg:"se avessi", src:"if I/you had"},
        {trg:"se potessi", src:"if I/you could"},
        {trg:"sarebbe", src:"it would be"},
        {trg:"se fossi in te", src:"if I were you"}
      ]},

      {type:"mc", q:"Why is 'se fossi in te' always Type 2?",
       opts:["You cannot actually be someone else, so it is inherently hypothetical","It is a fixed grammar rule with no reason","Type 1 does not use 'se'","Only 'fossi' can follow 'se'"],
       ans:"You cannot actually be someone else, so it is inherently hypothetical",
       hint:"Being in someone else's position is impossible, making it an unreal condition. This naturally requires the subjunctive + conditional."},

      {type:"fb", s:"Se {1} piu tempo, leggerei di piu.",
       a:["avessi"],
       opts:["avessi","ho","avro","abbia"],
       hint:"You do not actually have more time (hypothetical). The imperfect subjunctive of 'avere' is needed after 'se.'",
       sSrc:"If I {1} more time, I would read more."},

      {type:"mc", q:"What is the difference between Type 1 and Type 2?",
       opts:["Type 1 is real/possible; Type 2 is hypothetical/unreal","Type 1 is past; Type 2 is future","Type 1 is formal; Type 2 is informal","There is no real difference"],
       ans:"Type 1 is real/possible; Type 2 is hypothetical/unreal",
       hint:"'Se piove, resto a casa' (real rain, real plan). 'Se fossi ricco, viaggerei' (not actually rich, just imagining)."},

      {type:"fb", s:"Se tutti fossero gentili, il mondo {1} migliore.",
       a:["sarebbe"],
       opts:["sarebbe","e","sara","sia"],
       hint:"In the main clause of Type 2, use the conditional of 'essere.' The third person form expresses what the world would look like.",
       sSrc:"If everyone were kind, the world {1} better."},

      {type:"mc", q:"What is 'se potessi tornare indietro' expressing?",
       opts:["A hypothetical wish about the past (if I could go back)","A real plan to return","A future event","A command"],
       ans:"A hypothetical wish about the past (if I could go back)",
       hint:"You cannot actually turn back time. The imperfect subjunctive 'potessi' signals an impossible or hypothetical condition."}
    ]},

    {id:"itv2_u24l3", title:"Espressioni ipotetiche", icon:"💭", xp:15, board:true, steps:[
      {type:"intro", title:"Espressioni ipotetiche",
       desc:"Master common hypothetical expressions used in everyday Italian. These fixed phrases combine if-clauses with practical situations that come up in daily conversation.",
       goals:["Use common hypothetical expressions fluently","Combine Type 1 and Type 2 patterns naturally","Express regrets, wishes, and imagined scenarios"]},

      {type:"teach", trg:"magari", src:"I wish / if only / maybe", pos:"adv", gender:null,
       note:"Adverb/exclamation. One of Italian's most versatile words.\n'Magari potessi!' = If only I could!",
       example:"A: Vieni in vacanza con noi?\nB: Magari! Non ho abbastanza ferie.",
       exampleSrc:"A: Are you coming on vacation with us?\nB: I wish! I do not have enough days off.",
       funFact:"'Magari' is one of the hardest Italian words to translate because it means different things by context. As an exclamation: 'Magari!' = I wish! / If only! As an adverb: 'Magari domani' = Maybe tomorrow / Perhaps tomorrow. It comes from Greek 'makari' (blessed). Italians use it constantly."},

      {type:"teach", trg:"se solo", src:"if only", pos:"conj", gender:null,
       note:"Conjunction. 'Se solo potessi...' = If only I could...\nExpresses a strong wish for something unlikely or impossible.",
       example:"A: Se solo avessi studiato di piu.\nB: Non puoi cambiare il passato.",
       exampleSrc:"A: If only I had studied more.\nB: You cannot change the past.",
       funFact:"'Se solo' intensifies the wishful quality of an if-clause. 'Se fossi ricco' (If I were rich) is hypothetical. 'Se solo fossi ricco!' (If only I were rich!) adds emotional longing. The placement of 'solo' after 'se' is fixed and cannot be changed."},

      {type:"teach", trg:"nel caso", src:"in case / just in case", pos:"conj", gender:null,
       note:"Short for 'nel caso in cui' + subjunctive.\nInformal: 'caso mai.' 'Nel caso piova' = in case it rains.",
       example:"A: Porto l'ombrello, nel caso.\nB: Buona idea. Meglio essere preparati.",
       exampleSrc:"A: I will bring the umbrella, just in case.\nB: Good idea. Better to be prepared.",
       funFact:"'Nel caso' can stand alone as an elliptical expression: 'Porto l'ombrello, nel caso' (I will bring the umbrella, just in case). No need to complete the sentence. This shortened form is very common in spoken Italian. The full form 'nel caso in cui' is reserved for formal writing."},

      {type:"teach", trg:"supponiamo che", src:"let us suppose that", pos:"verb", gender:null,
       note:"From 'supporre' (to suppose) + 'che' + subjunctive.\n'Supponiamo che piova' = Let us suppose it rains.",
       example:"A: Supponiamo che tu vinca la lotteria. Cosa faresti?\nB: Comprerei una casa al mare.",
       exampleSrc:"A: Let us suppose you win the lottery. What would you do?\nB: I would buy a house by the sea.",
       funFact:"'Supponiamo che' is the Italian conversation engine for hypothetical games. It creates a framework for the conditional. Talk shows, classroom discussions, and dinner conversations all use it to explore 'what if' scenarios. The subjunctive after 'che' signals that the scenario is imagined."},

      {type:"teach", trg:"a patto che", src:"on condition that / provided that", pos:"conj", gender:null,
       note:"Conjunction. 'A patto che' + subjunctive.\n'Vengo a patto che tu paghi' = I will come provided you pay.",
       example:"A: Ti aiuto, a patto che tu mi aiuti domani.\nB: D'accordo, e un patto giusto.",
       exampleSrc:"A: I will help you, on the condition that you help me tomorrow.\nB: Agreed, it is a fair deal.",
       funFact:"'A patto che' literally means 'at the pact that.' It sets a firm condition for cooperation. Like 'a meno che,' it always takes the subjunctive because the condition might not be met. In business Italian, 'a patto che' is used in negotiations and contracts."},

      {type:"teach", trg:"come se", src:"as if / as though", pos:"conj", gender:null,
       note:"Conjunction. 'Come se' + imperfect subjunctive.\n'Parla come se sapesse tutto' = He talks as if he knew everything.",
       example:"A: Si comporta come se fosse il capo.\nB: Ma non e il capo!",
       exampleSrc:"A: He behaves as if he were the boss.\nB: But he is not the boss!",
       funFact:"'Come se' always requires the imperfect subjunctive because it describes something that is not true. 'Come se niente fosse' (as if nothing happened) is one of the most common Italian expressions, used to describe someone acting casually after something dramatic has occurred."},

      {type:"teach", trg:"altrimenti", src:"otherwise / or else", pos:"adv", gender:null,
       note:"Adverb. From 'altri' (other) + 'mente' (mind/way).\n'Studia, altrimenti non passi' = Study, otherwise you will not pass.",
       example:"A: Sbrigati, altrimenti perdiamo il treno!\nB: Arrivo, arrivo!",
       exampleSrc:"A: Hurry up, otherwise we will miss the train!\nB: I am coming, I am coming!",
       funFact:"'Altrimenti' is not strictly an if-clause word, but it expresses the same logic: consequence of a condition not being met. It is the verbal equivalent of 'or else.' Parents and teachers use it constantly: 'Mangia la verdura, altrimenti niente dolce!' (Eat your vegetables, or else no dessert!)"},

      {type:"tip", title:"Summary: Italian If-Clause Types",
       text:"Type 1 (Real): Se + present, present/future\nSe piove, resto a casa.\n\nType 2 (Hypothetical): Se + imperfect subjunctive, conditional\nSe fossi ricco, viaggerei.\n\nType 3 (Impossible/Past): Se + pluperfect subjunctive, past conditional\nSe avessi studiato, avrei passato l'esame.\n(Type 3 is introduced at B2 level.)\n\nKey expressions: magari, se solo, nel caso, come se, a patto che.",
       deepDive:{title:"Common Mistakes with If-Clauses",
        text:"The most common mistake: using the conditional after 'se.' 'Se sarei ricco' is WRONG. 'Se fossi ricco' is correct. The 'se' clause always takes the indicative (Type 1) or subjunctive (Type 2/3), never the conditional. The conditional goes in the MAIN clause only. Even some native Italian speakers make this error in casual speech, but it is considered incorrect."}},

      // Quiz steps
      {type:"mc", q:"What does 'magari' mean when used as an exclamation?",
       opts:["I wish! / If only!","Maybe","Never","Of course"],
       ans:"I wish! / If only!",
       hint:"One of Italian's most versatile words, from Greek 'makari' (blessed). As an exclamation, it expresses a strong wish."},

      {type:"fb", s:"Si comporta {1} fosse il capo.",
       a:["come se"],
       opts:["come se","se solo","a patto che","nel caso"],
       hint:"He acts as though he were the boss (but he is not). This conjunction always takes the imperfect subjunctive.",
       sSrc:"He behaves {1} he were the boss."},

      {type:"match", pairs:[
        {trg:"magari", src:"I wish / if only / maybe"},
        {trg:"se solo", src:"if only"},
        {trg:"come se", src:"as if"},
        {trg:"a patto che", src:"on condition that"},
        {trg:"altrimenti", src:"otherwise"}
      ]},

      {type:"mc", q:"What is the most common mistake with Italian if-clauses?",
       opts:["Using the conditional after 'se' (se sarei instead of se fossi)","Using the present tense","Forgetting 'se'","Using the future tense"],
       ans:"Using the conditional after 'se' (se sarei instead of se fossi)",
       hint:"The 'se' clause takes the indicative or subjunctive, never the conditional. The conditional belongs only in the main clause."},

      {type:"fb", s:"Sbrigati, {1} perdiamo il treno!",
       a:["altrimenti"],
       opts:["altrimenti","magari","come se","se solo"],
       hint:"Otherwise we will miss it! This adverb means 'or else' and expresses the consequence of not acting.",
       sSrc:"Hurry up, {1} we will miss the train!"},

      {type:"mc", q:"What does 'come se niente fosse' mean?",
       opts:["As if nothing happened","As if everything changed","Because nothing happened","When nothing happens"],
       ans:"As if nothing happened",
       hint:"A very common expression. 'Come se' + imperfect subjunctive. Describes someone acting casually after something dramatic."},

      {type:"fb", s:"Ti aiuto, {1} che tu mi aiuti domani.",
       a:["a patto"],
       opts:["a patto","come se","nel caso","se solo"],
       hint:"You set a firm condition for your help. This conjunction literally means 'at the pact that.' Common in negotiations.",
       sSrc:"I will help you, {1} that you help me tomorrow."},

      {type:"mc", q:"Which if-clause type will be introduced at B2 level?",
       opts:["Type 3 (impossible/past conditions)","Type 1 (real conditions)","Type 2 (hypothetical)","There are no more types"],
       ans:"Type 3 (impossible/past conditions)",
       hint:"Type 3 uses the pluperfect subjunctive + past conditional for situations that cannot be changed (contrary-to-fact past)."}
    ]}
  ]
};
export default UNIT_24;
