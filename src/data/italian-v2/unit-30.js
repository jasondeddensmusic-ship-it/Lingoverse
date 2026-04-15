// Italian V2 Unit 30. Il congiuntivo avanzato (B2.2)
import EXP_L4 from './_temp_u30_expand_L01.js';import EXP_L5 from './_temp_u30_expand_L02.js';import EXP_L6 from './_temp_u30_expand_L03.js';
// CILS B2 aligned. Advanced subjunctive, hypothetical periods, concessive conjunctions.

const UNIT_30 = {
  n:30, lang:"it", srcLang:"en", track:"v2",
  title:"Il congiuntivo avanzato", sub:"Advanced Subjunctive",
  icon:"📐", level:"B2.2", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Il congiuntivo imperfetto ───
    {id:"itv2_u30l1", title:"Il congiuntivo imperfetto", icon:"🔄", xp:15, board:true, steps:[
      {type:"intro", title:"Il congiuntivo imperfetto",
       desc:"Master the imperfect subjunctive, one of the most important verb forms for expressing hypothetical, unreal, or past subjunctive situations. Essential for natural-sounding Italian at B2 level.",
       goals:["Form and use the imperfect subjunctive correctly","Express wishes and hypothetical situations","Understand when Italian requires this tense"]},

      {type:"tip", title:"Il congiuntivo imperfetto",
       text:"The congiuntivo imperfetto expresses hypothetical, unreal, or past subjunctive situations.\n\nFormation from the infinitive:\n-ARE verbs: -assi, -assi, -asse, -assimo, -aste, -assero\n-ERE verbs: -essi, -essi, -esse, -essimo, -este, -essero\n-IRE verbs: -issi, -issi, -isse, -issimo, -iste, -issero\n\nExamples: parlare > parlassi, credere > credessi, partire > partissi.",
       deepDive:"The congiuntivo imperfetto is used after verbs of opinion, emotion, or doubt when the main verb is in a past tense.\n'Pensavo che fosse vero' = I thought it was true.\n'Volevo che venisse' = I wanted him to come.\n\nIt also appears in hypothetical sentences (periodo ipotetico tipo 2) paired with the conditional:\n'Se avessi tempo, viaggerei di piu' = If I had time, I would travel more."},

      {type:"teach", trg:"se avessi", src:"if I had (subjunctive)", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'avere.' Used in hypothetical conditions.\nSe avessi, se avessi, se avesse, se avessimo, se aveste, se avessero.",
       example:"A: Se avessi piu tempo, leggerei di piu.\nB: Anch'io. Il lavoro prende tutto.",
       exampleSrc:"A: If I had more time, I would read more.\nB: Me too. Work takes everything.",
       funFact:"The subjunctive is a shibboleth of educated Italian. Using 'se avessi' correctly (instead of the common error 'se avrei') instantly marks someone as a careful speaker. Grammar purists wage constant battle over this."},

      {type:"teach", trg:"se fossi", src:"if I were (subjunctive)", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'essere.' Irregular but very common.\nSe fossi, se fossi, se fosse, se fossimo, se foste, se fossero.",
       example:"A: Se fossi ricco, comprerei una casa al mare.\nB: Chi non lo farebbe?",
       exampleSrc:"A: If I were rich, I would buy a house by the sea.\nB: Who would not?",
       funFact:"'Se fossi in te' (if I were you) is one of the most common subjunctive phrases in spoken Italian. Even Italians who avoid the subjunctive in other contexts tend to use this one correctly."},

      {type:"teach", trg:"se potessi", src:"if I could (subjunctive)", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'potere.' Used to express hypothetical ability.\nSe potessi, se potessi, se potesse, se potessimo, se poteste, se potessero.",
       example:"A: Se potessi tornare indietro, studierei medicina.\nB: Non e mai troppo tardi per cambiare.",
       exampleSrc:"A: If I could go back, I would study medicine.\nB: It is never too late to change.",
       funFact:"Italian pop music is full of 'se potessi' phrases. The hypothetical condition structure appears in countless song lyrics because it expresses longing, regret, and dreams, the emotional core of Italian music."},

      {type:"mc",
       q:"Qual e la forma corretta: 'Se io {1} piu tempo, viaggerei'?",
       opts:["avessi","avrei","avevo","ho"],
       ans:"avessi",
       hint:"After 'se' in a hypothetical condition (type 2), Italian requires the imperfect subjunctive, not the conditional or indicative."},

      {type:"teach", trg:"se sapessi", src:"if I knew (subjunctive)", pos:"verb", gender:null,
       note:"Imperfect subjunctive of 'sapere.' Used for hypothetical knowledge.\nSe sapessi, se sapessi, se sapesse, se sapessimo, se sapeste, se sapessero.",
       example:"A: Se sapessi parlare cinese, lavorerei a Pechino.\nB: Potresti sempre impararlo.",
       exampleSrc:"A: If I knew how to speak Chinese, I would work in Beijing.\nB: You could always learn it.",
       funFact:"'Se sapessi!' (if only you knew!) is a common exclamation used to hint at secret knowledge or unexpressed feelings. It leaves the sentence deliberately unfinished, creating dramatic suspense in conversation."},

      {type:"teach", trg:"volevo che", src:"I wanted (someone) to...", pos:"verb", gender:null,
       note:"'Volere' in the imperfect + 'che' triggers the congiuntivo imperfetto.\n'Volevo che venisse' = I wanted him/her to come.",
       example:"A: Volevo che mi dicesse la verita.\nB: Ma ha preferito mentire.",
       exampleSrc:"A: I wanted him to tell me the truth.\nB: But he preferred to lie.",
       funFact:"The sequence of tenses ('concordanza dei tempi') in Italian is stricter than in English. When the main verb is past, the subjunctive clause must use the imperfect subjunctive, not the present: 'Volevo che venisse,' never 'Volevo che venga.'"},

      {type:"fb",
       s:"Se {1} in Italia, mangerei pasta ogni giorno.",
       a:["vivessi"],
       opts:["vivessi","vivrei","vivo","vivevo"],
       hint:"After 'se' in a hypothetical sentence, you need the imperfect subjunctive of 'vivere.' The -ERE pattern gives -essi.",
       sSrc:"If I {1} in Italy, I would eat pasta every day."},

      {type:"verb_table", title:"Congiuntivo imperfetto: essere, avere, potere",
       groups:[
         {label:"essere (to be)", rows:[
           {pronoun:"io", form:"fossi", src:"I were"},
           {pronoun:"tu", form:"fossi", src:"you were"},
           {pronoun:"lui/lei", form:"fosse", src:"he/she were"},
           {pronoun:"noi", form:"fossimo", src:"we were"},
           {pronoun:"voi", form:"foste", src:"you (pl.) were"},
           {pronoun:"loro", form:"fossero", src:"they were"}
         ]},
         {label:"avere (to have)", rows:[
           {pronoun:"io", form:"avessi", src:"I had"},
           {pronoun:"tu", form:"avessi", src:"you had"},
           {pronoun:"lui/lei", form:"avesse", src:"he/she had"},
           {pronoun:"noi", form:"avessimo", src:"we had"},
           {pronoun:"voi", form:"aveste", src:"you (pl.) had"},
           {pronoun:"loro", form:"avessero", src:"they had"}
         ]},
         {label:"potere (to be able)", rows:[
           {pronoun:"io", form:"potessi", src:"I could"},
           {pronoun:"tu", form:"potessi", src:"you could"},
           {pronoun:"lui/lei", form:"potesse", src:"he/she could"},
           {pronoun:"noi", form:"potessimo", src:"we could"},
           {pronoun:"voi", form:"poteste", src:"you (pl.) could"},
           {pronoun:"loro", form:"potessero", src:"they could"}
         ]}
       ],
       note:"Essere is completely irregular. Avere and potere follow the regular -ERE pattern (-essi, -essi, -esse, -essimo, -este, -essero)."},

      {type:"mc",
       q:"'Pensavo che Maria {1} a Parigi.' Quale forma e corretta?",
       opts:["era","fosse","e","sia"],
       ans:"fosse",
       hint:"The main verb 'pensavo' is past tense, so the subjunctive clause needs the imperfect subjunctive of 'essere,' not the indicative."},

      {type:"match", pairs:[
        {trg:"se avessi", src:"if I had"},
        {trg:"se fossi", src:"if I were"},
        {trg:"se potessi", src:"if I could"},
        {trg:"se sapessi", src:"if I knew"},
        {trg:"volevo che venisse", src:"I wanted him to come"}
      ]},

      {type:"fb",
       s:"Pensavo che lui {1} italiano, ma e francese.",
       a:["fosse"],
       opts:["fosse","era","e","sia"],
       hint:"After 'pensavo che' (I thought that), use the imperfect subjunctive of 'essere' because the main verb is in the past.",
       sSrc:"I thought he {1} Italian, but he is French."},

      {type:"mc",
       q:"Perche il congiuntivo e considerato un indicatore di italiano colto?",
       opts:["Perche e stato inventato di recente","Perche si usa solo nei documenti legali","Perche molti parlanti lo evitano nell'italiano informale","Perche e facile da usare"],
       ans:"Perche molti parlanti lo evitano nell'italiano informale",
       hint:"Many speakers replace it with the indicative in casual speech. Using it correctly signals education and careful language use."}
    ]},

    // ─── Lesson 2: Il periodo ipotetico ───
    {id:"itv2_u30l2", title:"Il periodo ipotetico", icon:"🔀", xp:15, board:true, steps:[
      {type:"intro", title:"Il periodo ipotetico",
       desc:"Master the three types of Italian hypothetical sentences (periodo ipotetico). Learn to express real possibilities, unlikely scenarios, and impossible/past conditions.",
       goals:["Distinguish the three types of hypothetical sentences","Form correct type 2 and type 3 conditions","Express regrets and unrealized possibilities"]},

      {type:"tip", title:"I tre tipi di periodo ipotetico",
       text:"Type 1 (realta): Se + presente, presente/futuro.\n'Se piove, resto a casa.' (If it rains, I stay home.)\n\nType 2 (possibilita): Se + cong. imperfetto, condizionale presente.\n'Se piovesse, resterei a casa.' (If it rained, I would stay home.)\n\nType 3 (irrealta): Se + cong. trapassato, condizionale passato.\n'Se avesse piovuto, sarei restato.' (If it had rained, I would have stayed.)",
       deepDive:"Type 1 expresses real, likely conditions. Type 2 expresses unlikely but possible ones. Type 3 expresses conditions that can never be true because they refer to the past.\n\nA common error is mixing types: 'Se avrei tempo' (wrong) instead of 'Se avessi tempo' (correct). The 'se' clause NEVER takes the conditional in standard Italian.\n\nIn spoken Italian, type 3 is sometimes simplified using the imperfect indicative: 'Se pioveva, restavo a casa.' This is grammatically informal but very common."},

      {type:"teach", trg:"se avessi avuto", src:"if I had had (past subjunctive)", pos:"verb", gender:null,
       note:"Congiuntivo trapassato: auxiliary (avessi/fossi) + past participle.\nUsed in type 3 hypothetical sentences for past unreal conditions.",
       example:"A: Se avessi avuto piu coraggio, avrei parlato.\nB: Non e mai facile dire la verita.",
       exampleSrc:"A: If I had had more courage, I would have spoken.\nB: It is never easy to tell the truth.",
       funFact:"The congiuntivo trapassato is formed with the imperfect subjunctive of avere or essere plus the past participle. Despite sounding complex, Italians use it constantly to express regret: 'Se solo avessi saputo!' (If only I had known!)"},

      {type:"teach", trg:"se fossi stato", src:"if I had been (past subjunctive)", pos:"verb", gender:null,
       note:"Congiuntivo trapassato of 'essere': se fossi stato/a.\nUsed with verbs that take essere in compound tenses.",
       example:"A: Se fossi stata li, avrei capito tutto.\nB: Purtroppo non potevi sapere.",
       exampleSrc:"A: If I had been there, I would have understood everything.\nB: Unfortunately you could not have known.",
       funFact:"Note the gender agreement: 'fossi stato' (masculine), 'fossi stata' (feminine). This agreement applies to all compound tenses with essere and is a feature that English completely lacks."},

      {type:"teach", trg:"avrei fatto", src:"I would have done", pos:"verb", gender:null,
       note:"Condizionale passato: condizionale of avere/essere + past participle.\nThe main clause partner of the congiuntivo trapassato in type 3.",
       example:"A: Avrei fatto le cose diversamente.\nB: Con il senno di poi, tutti saremmo piu saggi.",
       exampleSrc:"A: I would have done things differently.\nB: With hindsight, we would all be wiser.",
       funFact:"'Con il senno di poi' (with the wisdom of afterwards) is Italy's equivalent of 'hindsight is 20/20.' The condizionale passato is the tense of regret, used for all the roads not taken."},

      {type:"mc",
       q:"'Se {1} studiato di piu, avrei superato l'esame.' Quale forma e corretta?",
       opts:["avessi","avrei","avevo","ho"],
       ans:"avessi",
       hint:"This is a type 3 hypothetical about the past. The 'se' clause requires the congiuntivo trapassato: imperfect subjunctive of the auxiliary plus the past participle."},

      {type:"teach", trg:"sarei andato", src:"I would have gone", pos:"verb", gender:null,
       note:"Condizionale passato of 'andare' (takes essere).\n'Sarei andato/a' shows gender agreement.",
       example:"A: Sarei andato volentieri alla festa.\nB: Perche non sei venuto?\nA: Ero malato.",
       exampleSrc:"A: I would have gladly gone to the party.\nB: Why did you not come?\nA: I was ill.",
       funFact:"Verbs of motion (andare, venire, partire, tornare) take essere in compound tenses. This means the past participle must agree with the subject: 'sarei andato' (male speaker), 'sarei andata' (female speaker)."},

      {type:"teach", trg:"se non fosse stato per", src:"if it had not been for", pos:"verb", gender:null,
       note:"Fixed expression using congiuntivo trapassato.\nExpresses gratitude or acknowledges a decisive factor.",
       example:"A: Se non fosse stato per il tuo aiuto, non ce l'avrei fatta.\nB: Non e stato niente, sono contento di aver aiutato.",
       exampleSrc:"A: If it had not been for your help, I would not have made it.\nB: It was nothing, I am happy to have helped.",
       funFact:"This expression is extremely common in Italian speeches, award acceptances, and heartfelt conversations. It elegantly combines the type 3 hypothetical with acknowledgment of someone's crucial role."},

      {type:"fb",
       s:"Se {1} saputo prima, ti avrei avvertito.",
       a:["avessi"],
       opts:["avessi","avrei","avevo","ho"],
       hint:"A type 3 condition about the past. The 'se' clause needs the congiuntivo trapassato: the imperfect subjunctive of the auxiliary plus the past participle.",
       sSrc:"If I {1} known earlier, I would have warned you."},

      {type:"mc",
       q:"Quale tipo di periodo ipotetico esprime un fatto impossibile nel passato?",
       opts:["Tipo 1: se + presente, futuro","Tipo 3: se + congiuntivo trapassato, condizionale passato","Tipo 2: se + congiuntivo imperfetto, condizionale","Tutti i tipi esprimono fatti impossibili"],
       ans:"Tipo 3: se + congiuntivo trapassato, condizionale passato",
       hint:"Only one type deals with things that can never change because they are in the past. It uses the most complex verb forms."},

      {type:"match", pairs:[
        {trg:"se avessi avuto", src:"if I had had"},
        {trg:"se fossi stato", src:"if I had been"},
        {trg:"avrei fatto", src:"I would have done"},
        {trg:"sarei andato", src:"I would have gone"},
        {trg:"se non fosse stato per", src:"if it had not been for"}
      ]},

      {type:"fb",
       s:"{1} venuto volentieri, ma avevo un impegno.",
       a:["Sarei"],
       opts:["Sarei","Avrei","Fossi","Sono"],
       hint:"The conditional past of 'venire' (which takes essere). Expresses something you would have done but could not.",
       sSrc:"I {1} have come gladly, but I had a commitment."},

      {type:"mc",
       q:"Perche nell'italiano parlato il tipo 3 viene spesso semplificato con l'imperfetto indicativo?",
       opts:["Perche il tipo 3 non esiste piu in italiano","Perche l'imperfetto indicativo e piu corretto","Perche il congiuntivo trapassato e percepito come troppo formale","Perche i grammatici lo raccomandano"],
       ans:"Perche il congiuntivo trapassato e percepito come troppo formale",
       hint:"In casual speech, the complex subjunctive forms feel too formal. Speakers simplify: 'Se lo sapevo, non venivo' instead of 'Se lo avessi saputo, non sarei venuto.'"}
    ]},

    // ─── Lesson 3: Congiunzioni concessive ───
    {id:"itv2_u30l3", title:"Congiunzioni concessive", icon:"⚡", xp:15, board:true, steps:[
      {type:"intro", title:"Congiunzioni concessive",
       desc:"Learn conjunctions that express concession, condition, and contrast, all requiring the subjunctive. These elevated connectors are essential for sophisticated Italian at B2 and above.",
       goals:["Use concessive conjunctions with the subjunctive","Express contrast and conditions with elevated register","Distinguish conjunctions that require the subjunctive"]},

      {type:"teach", trg:"benche", src:"although / even though", pos:"conj", gender:null,
       note:"Conjunction requiring the congiuntivo.\n'Benche sia stanco, continuo a lavorare.' = Although I am tired, I keep working.",
       example:"A: Benche sia tardi, voglio finire questo capitolo.\nB: Non esagerare, domani e un altro giorno.",
       exampleSrc:"A: Although it is late, I want to finish this chapter.\nB: Do not overdo it, tomorrow is another day.",
       funFact:"'Benche' is considered more formal and literary than 'anche se' (even if), which takes the indicative. Using 'benche' correctly with the subjunctive is a hallmark of refined Italian writing and speech."},

      {type:"teach", trg:"nonostante", src:"despite / in spite of", pos:"conj", gender:null,
       note:"Takes the congiuntivo when followed by a clause, or a noun directly.\n'Nonostante piova' (despite it raining) vs. 'Nonostante la pioggia' (despite the rain).",
       example:"A: Nonostante faccia freddo, esco a correre.\nB: Sei molto disciplinato!",
       exampleSrc:"A: Despite the cold, I go out running.\nB: You are very disciplined!",
       funFact:"'Nonostante' is interchangeable with 'malgrado' in most contexts. Both require the subjunctive when followed by a verb clause. In informal speech, many Italians mistakenly use the indicative, but the subjunctive remains the grammatically correct choice."},

      {type:"teach", trg:"purche", src:"provided that / as long as", pos:"conj", gender:null,
       note:"Conjunction always requiring the congiuntivo.\nExpresses a necessary condition. 'Purche tu venga' = provided that you come.",
       example:"A: Puoi uscire, purche tu finisca i compiti.\nB: Li finiro in un'ora, prometto.",
       exampleSrc:"A: You can go out, provided that you finish your homework.\nB: I will finish it in an hour, I promise.",
       funFact:"'Purche' is a contraction of 'pur che' (even that, as long as that). It always implies a condition that must be met. In legal and contractual Italian, 'purche' appears frequently in clauses specifying terms and conditions."},

      {type:"teach", trg:"a meno che", src:"unless", pos:"conj", gender:null,
       note:"Conjunction requiring the congiuntivo + 'non.'\n'A meno che non piova' = unless it rains. The 'non' is grammatically required but does NOT negate.",
       example:"A: Verra alla festa, a meno che non sia troppo stanco.\nB: Spero che venga, lo aspettiamo tutti.",
       exampleSrc:"A: He will come to the party, unless he is too tired.\nB: I hope he comes, we are all waiting for him.",
       funFact:"The 'non' after 'a meno che' confuses many learners because it looks negative but is not. This 'non pleonastico' (redundant non) is a feature of literary Italian that persists in several fixed expressions."},

      {type:"mc",
       q:"Quale congiunzione significa 'a condizione che' e richiede il congiuntivo?",
       opts:["Purche","Perche","Anche se","Quando"],
       ans:"Purche",
       hint:"This conjunction sets a necessary condition. It means 'provided that' or 'as long as' and always takes the subjunctive mood."},

      {type:"teach", trg:"affinche", src:"so that / in order that", pos:"conj", gender:null,
       note:"Conjunction of purpose, always with the congiuntivo.\n'Affinche tu capisca' = so that you understand. Synonym: 'perche' (with subjunctive).",
       example:"A: Ti spiego di nuovo, affinche tu capisca bene.\nB: Grazie, questa volta ho capito.",
       exampleSrc:"A: I will explain again, so that you understand well.\nB: Thank you, this time I understood.",
       funFact:"'Affinche' is formal. In everyday speech, Italians prefer 'cosi' or 'per fare in modo che.' However, 'affinche' remains essential in academic, legal, and journalistic Italian."},

      {type:"teach", trg:"sebbene", src:"although / even though", pos:"conj", gender:null,
       note:"Conjunction requiring the congiuntivo. Synonym of 'benche.'\n'Sebbene sia difficile' = although it is difficult.",
       example:"A: Sebbene abbia studiato molto, l'esame era difficilissimo.\nB: I risultati usciranno la settimana prossima.",
       exampleSrc:"A: Although I studied a lot, the exam was very difficult.\nB: The results will come out next week.",
       funFact:"'Sebbene' and 'benche' are fully interchangeable. Both come from constructions meaning 'even though it be.' Italian has an unusually rich supply of concessive conjunctions, all requiring the subjunctive."},

      {type:"fb",
       s:"{1} piova, andremo al mare lo stesso.",
       a:["Nonostante"],
       opts:["Nonostante","Perche","Quando","Quindi"],
       hint:"A conjunction meaning 'despite' or 'in spite of the fact that.' It requires the subjunctive and expresses a concession.",
       sSrc:"{1} it rains, we will go to the sea anyway."},

      {type:"teach", trg:"prima che", src:"before (with subjunctive)", pos:"conj", gender:null,
       note:"Takes the congiuntivo because the action has not yet happened.\n'Prima che arrivi' = before he/she arrives.",
       example:"A: Finisci tutto prima che torni il capo.\nB: Sto facendo il possibile!",
       exampleSrc:"A: Finish everything before the boss comes back.\nB: I am doing my best!",
       funFact:"'Prima che' always takes the subjunctive because it refers to an event that has not yet occurred (and might not). 'Dopo che' (after), by contrast, takes the indicative because the event has already happened. Logic drives the grammar."},

      {type:"mc",
       q:"'Verra alla festa, a meno che non {1} troppo stanco.' Quale forma e corretta?",
       opts:["e","sia","sara","sta"],
       ans:"sia",
       hint:"After 'a meno che non,' Italian requires the present subjunctive. The present subjunctive of 'essere' for lui/lei is needed here."},

      {type:"match", pairs:[
        {trg:"benche", src:"although"},
        {trg:"purche", src:"provided that"},
        {trg:"a meno che", src:"unless"},
        {trg:"affinche", src:"so that"},
        {trg:"nonostante", src:"despite"}
      ]},

      {type:"fb",
       s:"Puoi prendere la macchina, {1} tu la riporti entro sera.",
       a:["purche"],
       opts:["purche","benche","affinche","sebbene"],
       hint:"This conjunction sets a required condition: you may do something, but only if this requirement is met. 'As long as' or 'provided that.'",
       sSrc:"You can take the car, {1} you bring it back by evening."},

      {type:"mc",
       q:"Perche 'a meno che' richiede 'non' nella frase?",
       opts:["Per enfatizzare il dubbio","Per rendere la frase negativa","E un 'non pleonastico' grammaticalmente obbligatorio ma non negativo","E opzionale e si puo omettere"],
       ans:"E un 'non pleonastico' grammaticalmente obbligatorio ma non negativo",
       hint:"This 'n...' is a quirk of Italian grammar. It looks like a negation but does not negate anything. It is required by the grammar but adds no negative meaning."}
    ]}
  ]
};

export default UNIT_30;
