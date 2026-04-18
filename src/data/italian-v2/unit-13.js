// Italian V2 Unit 13. Il congiuntivo (The Subjunctive) (B1.1)
import BATCH8_L1 from './_batch8_u13_L01.js';
import BATCH7_L1 from './_batch7_u13_L01.js';
import BATCH6_L1 from './_batch6_u13_L01.js';
import BATCH5_L02 from './_batch5_u13_L02.js';
import BATCH5_L01 from './_batch5_u13_L01.js';
import BATCH2_L02 from './_batch2_u13_L02.js';
import BATCH2_L01 from './_batch2_u13_L01.js';
import EXP_L4 from './_temp_u13_expand_L01.js';import EXP_L5 from './_temp_u13_expand_L02.js';import EXP_L6 from './_temp_u13_expand_L03.js';
// CILS/CELI B1 aligned. Subjunctive triggers, regular and irregular forms.

const UNIT_13 = {
  n:13, lang:"it", srcLang:"en", track:"v2",
  title:"Il congiuntivo", sub:"The Subjunctive Mood",
  icon:"🔮", level:"B1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u13l1", title:"Penso che...", icon:"💭", xp:15, board:true, steps:[
      {type:"intro", title:"Penso che...",
       desc:"The subjunctive mood expresses doubt, opinion, and desire. Learn the trigger phrases that require it and how regular -are verbs form the subjunctive.",
       goals:["Recognize subjunctive trigger phrases","Form present subjunctive of -are verbs","Express opinions with 'penso che'"]},

      {type:"teach", trg:"il congiuntivo", src:"the subjunctive", pos:"noun", gender:"m",
       note:"Masculine. The verb mood for doubt, opinion, emotion, and wish.\nFrom Latin 'coniungere' (to join together).",
       example:"A: Il congiuntivo e difficile?\nB: No, basta imparare i verbi irregolari.\nA: Quali sono i piu importanti?\nB: Essere, avere, fare e andare. Dopo quelli, il resto viene naturale.",
       exampleSrc:"A: Is the subjunctive difficult?\nB: No, you just need to learn the irregular verbs.\nA: Which ones are the most important?\nB: Essere, avere, fare, and andare. After those, the rest comes naturally.",
       funFact:"Many Italians themselves struggle with the subjunctive. Using it correctly is considered a sign of education. In casual speech, many replace it with the indicative, but in writing it remains essential."},

      {type:"teach", trg:"penso che", src:"I think that", pos:"verb", gender:null,
       note:"Subjunctive trigger. 'Pensare' (to think) + 'che' (that).\nAlways followed by the subjunctive mood.",
       example:"A: Penso che Marco sia intelligente.\nB: Anch'io penso che abbia talento.\nA: Credo che diventi un ottimo ingegnere.\nB: Si, purche studi con impegno.",
       exampleSrc:"A: I think that Marco is intelligent.\nB: I also think he has talent.\nA: I believe he will become an excellent engineer.\nB: Yes, as long as he studies with dedication.",
       funFact:"'Penso che' triggers the subjunctive because it expresses a personal opinion, not a fact. Compare: 'So che Marco e intelligente' (I know that, indicative) versus 'Penso che Marco sia intelligente' (I think that, subjunctive)."},

      {type:"teach", trg:"credo che", src:"I believe that", pos:"verb", gender:null,
       note:"Subjunctive trigger. 'Credere' (to believe) + 'che.'\nExpresses belief or opinion, not certainty.",
       example:"A: Credo che piova domani.\nB: Davvero? Io credo che faccia bel tempo.\nA: Hai visto le previsioni?\nB: Si, dicono che ci sia il sole tutto il giorno.",
       exampleSrc:"A: I believe it will rain tomorrow.\nB: Really? I believe the weather will be nice.\nA: Have you seen the forecast?\nB: Yes, they say there will be sunshine all day.",
       funFact:"'Credere' comes from Latin 'credere' (to trust, to believe). The same root gave English 'credible,' 'credit,' and 'creed.' When you use it with 'che,' the subjunctive follows automatically."},

      {type:"teach", trg:"e importante che", src:"it is important that", pos:"adj", gender:null,
       note:"Impersonal subjunctive trigger.\n'Importante' never changes form here.",
       example:"A: E importante che tu studi.\nB: Lo so, ho l'esame lunedi.\nA: Vuoi che ti aiuti a ripassare?\nB: Si, grazie! Sarebbe molto utile.",
       exampleSrc:"A: It is important that you study.\nB: I know, I have the exam on Monday.\nA: Do you want me to help you review?\nB: Yes, thanks! That would be very helpful.",
       funFact:"Impersonal expressions like 'e importante che,' 'e necessario che,' and 'e possibile che' all trigger the subjunctive. They express a judgment about something that may or may not happen."},

      {type:"teach", trg:"voglio che", src:"I want that", pos:"verb", gender:null,
       note:"Subjunctive trigger. 'Volere' (to want) + 'che.'\nExpresses a wish about someone else's action.",
       example:"A: Voglio che tu venga alla festa.\nB: Va bene, vengo volentieri!\nA: Spero che tu porti anche Luca.\nB: Certo, penso che sia libero sabato.",
       exampleSrc:"A: I want you to come to the party.\nB: All right, I'll gladly come!\nA: I hope you bring Luca too.\nB: Of course, I think he is free on Saturday.",
       funFact:"In English you say 'I want you to come' with an infinitive. In Italian, when the subject changes, you must use 'che' plus the subjunctive: 'Voglio che tu venga.' If the subject stays the same, use the infinitive: 'Voglio venire' (I want to come)."},
{type:"match",pairs:[{trg:"penso che",src:"I think that"},{trg:"credo che",src:"I believe that"},{trg:"e importante che",src:"it is important that"},{trg:"voglio che",src:"I want that"}]},

      {type:"teach", trg:"spero che", src:"I hope that", pos:"verb", gender:null,
       note:"Subjunctive trigger. 'Sperare' (to hope) + 'che.'\nExpresses a wish about the future.",
       example:"A: Spero che tutto vada bene.\nB: Grazie, lo spero anch'io.\nA: Quando saprai il risultato?\nB: Credo che lo dicano entro venerdi.",
       exampleSrc:"A: I hope everything goes well.\nB: Thanks, I hope so too.\nA: When will you know the result?\nB: I think they will announce it by Friday.",
       funFact:"'Sperare' comes from Latin 'sperare' (to hope). English 'despair' comes from the negative form 'desperare' (to lose hope). 'Spero che' always takes the subjunctive because hope implies uncertainty."},

      {type:"teach", trg:"parli", src:"(that) you speak (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'parlare' (-are). Io parli, tu parli, lui/lei parli.\nNote: io/tu/lui share the same form.",
       example:"A: E importante che tu parli italiano.\nB: Cerco di parlare ogni giorno.\nA: Penso che tu faccia bene.\nB: Grazie, spero che il mio accento migliori presto.",
       exampleSrc:"A: It is important that you speak Italian.\nB: I try to speak every day.\nA: I think you are doing well.\nB: Thanks, I hope my accent improves soon.",
       funFact:"In the subjunctive, -are verbs take -i endings: che io parli, che tu parli, che lui parli. The io, tu, and lui/lei forms are identical. Context or pronouns clarify who is speaking. This is why Italians often include the subject pronoun with the subjunctive."},

      {type:"tip", title:"The Subjunctive: When and Why",
       text:"The subjunctive (congiuntivo) is used after expressions of:\n\n1. Opinion: penso che, credo che, mi sembra che\n2. Desire: voglio che, preferisco che, spero che\n3. Emotion: sono contento che, ho paura che\n4. Impersonal judgment: e importante che, e necessario che, bisogna che\n\nKey rule: the subjunctive needs TWO different subjects.\n'Voglio venire' (I want to come, same subject = infinitive)\n'Voglio che tu venga' (I want you to come, different subjects = subjunctive)",
       deepDive:{title:"Indicative vs. Subjunctive",
        text:"The indicative states facts: 'So che parli italiano' (I know you speak Italian). The subjunctive expresses subjectivity: 'Penso che parli italiano' (I think you speak Italian). The difference is certainty versus opinion. Verbs of knowing (sapere, essere sicuro) take the indicative. Verbs of thinking, hoping, and doubting take the subjunctive."}},

      {type:"teach", trg:"lavori", src:"(that) you work (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'lavorare' (-are). Same -i pattern.\nChe io lavori, che tu lavori, che lui lavori.",
       example:"A: Penso che Marco lavori troppo.\nB: Si, credo che abbia bisogno di una vacanza.\nA: Spero che prenda qualche giorno libero.\nB: Anch'io. E importante che si riposi.",
       exampleSrc:"A: I think Marco works too much.\nB: Yes, I believe he needs a vacation.\nA: I hope he takes a few days off.\nB: Me too. It is important that he rests.",
       funFact:"Notice the pattern: -are verbs drop -are and add -i for io/tu/lui/lei. The noi form is -iamo (lavoriamo), the voi form is -iate (lavoriate), and loro is -ino (lavorino). The noi form looks identical to the indicative."},

      {type:"teach", trg:"mangi", src:"(that) you eat (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'mangiare' (-are). Note: keeps the -i.\nChe io mangi, che tu mangi, che lui mangi.",
       example:"A: Voglio che tu mangi di piu.\nB: Non ho molta fame.\nA: E importante che tu mangi bene prima dell'esame.\nB: Hai ragione, prendo almeno un panino.",
       exampleSrc:"A: I want you to eat more.\nB: I am not very hungry.\nA: It is important that you eat well before the exam.\nB: You are right, I will have at least a sandwich.",
       funFact:"Verbs ending in -iare (mangiare, studiare) keep the -i in the subjunctive: che io mangi. But verbs ending in -care/-gare add an -h- to keep the hard sound: cercare becomes che io cerchi, pagare becomes che io paghi."},

      {type:"teach", trg:"studi", src:"(that) you study (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'studiare' (-are). Drops one -i.\nChe io studi, che tu studi, che lui studi.",
       example:"A: E necessario che tu studi per l'esame.\nB: Lo so, studio ogni sera.\nA: Vuoi che ti presti i miei appunti?\nB: Si, credo che mi aiutino molto.",
       exampleSrc:"A: It is necessary that you study for the exam.\nB: I know, I study every evening.\nA: Do you want me to lend you my notes?\nB: Yes, I think they will help me a lot.",
       funFact:"With verbs like 'studiare,' the subjunctive drops the double -i that would result (studi-i becomes studi). This is a phonetic simplification. Written Italian avoids double -ii wherever possible."},

      {type:"verb_table", title:"Congiuntivo presente: -are (parlare)",
       note:"Regular -are verbs in the present subjunctive. Notice that io, tu, and lui/lei share the same ending.",
       groups:[{label:"parlare (to speak)", rows:[
         {pronoun:"che io", form:"parli", src:"that I speak"},
         {pronoun:"che tu", form:"parli", src:"that you speak"},
         {pronoun:"che lui/lei", form:"parli", src:"that he/she speaks"},
         {pronoun:"che noi", form:"parliamo", src:"that we speak"},
         {pronoun:"che voi", form:"parliate", src:"that you (pl.) speak"},
         {pronoun:"che loro", form:"parlino", src:"that they speak"}
       ]}]},

      // Quiz steps
      {type:"mc", q:"Which phrase triggers the subjunctive?",
       opts:["Penso che","So che (I know that)","Dico che (I say that)","Vedo che (I see that)"],
       ans:"Penso che",
       hint:"This verb expresses an opinion, not a certainty. Verbs of knowing use the indicative instead."},

      {type:"fb", s:"Penso che Marco {1} troppo.",
       a:["lavori"],
       opts:["lavori","lavora","lavorare","lavorato"],
       hint:"After 'penso che,' the verb must be in the subjunctive mood. Regular -are verbs end in -i.",
       sSrc:"I think Marco {1} too much."},

      {type:"match", pairs:[
        {trg:"penso che", src:"I think that"},
        {trg:"credo che", src:"I believe that"},
        {trg:"voglio che", src:"I want (someone to)"},
        {trg:"spero che", src:"I hope that"},
        {trg:"e importante che", src:"it is important that"}
      ]},

      {type:"mc", q:"What is the subjunctive of 'parlare' for 'che tu'?",
       opts:["parla","parli","parlare","parlato"],
       ans:"parli",
       hint:"Regular -are verbs take -i endings in the subjunctive. The io, tu, and lui/lei forms are all identical."},

      {type:"fb", s:"E importante che tu {1} italiano.",
       a:["parli"],
       opts:["parli","parla","parlare","parlato"],
       hint:"This impersonal expression requires the subjunctive. The -are verb ending changes to -i.",
       sSrc:"It is important that you {1} Italian."},

      {type:"mc", q:"When do you use the subjunctive instead of the infinitive?",
       opts:["When the sentence is in negative form","When the verb describes a past action only","When there are two different subjects involved","When the subject is a plural noun"],
       ans:"When there are two different subjects involved",
       hint:"'Voglio venire' (same person acts, infinitive) versus 'Voglio che tu venga' (person A wants person B to act)."},

      {type:"fb", s:"Voglio che tu {1} di piu.",
       a:["mangi"],
       opts:["mangi","mangia","mangiare","mangiato"],
       hint:"After 'voglio che' with a different subject, use the subjunctive. This -are verb keeps its -i.",
       sSrc:"I want you to {1} more."},

      {type:"mc", q:"Why does 'spero che' require the subjunctive?",
       opts:["Because it is a direct command to someone","Because the action happened in the recent past","Because 'sperare' conjugates in an irregular way","Because hope implies uncertainty about the outcome"],
       ans:"Because hope implies uncertainty about the outcome",
       hint:"The subjunctive marks subjectivity. 'Sperare' expresses a wish whose fulfillment is not guaranteed. it sits alongside doubt and opinion verbs."}
    ]},

    {id:"itv2_u13l2", title:"Che scriva, che dorma", icon:"✍️", xp:15, board:true, steps:[
      {type:"intro", title:"Che scriva, che dorma",
       desc:"Extend the subjunctive to -ere and -ire verbs. Each conjugation class has its own pattern, but the logic is always the same: subjectivity triggers the subjunctive.",
       goals:["Form subjunctive of -ere verbs","Form subjunctive of -ire verbs","Use subjunctive in complete sentences"]},

      {type:"teach", trg:"scriva", src:"(that) I/you/he write (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'scrivere' (-ere). Same -a ending for io/tu/lui.\nChe io scriva, che tu scriva, che lui scriva.",
       example:"A: Vuoi che ti scriva un'email?\nB: Si, spero che tu mi scriva presto.\nA: Va bene, la scrivo stasera.\nB: Grazie, credo che sia il modo migliore per spiegare tutto.",
       exampleSrc:"A: Do you want me to write you an email?\nB: Yes, I hope you write me soon.\nA: All right, I will write it tonight.\nB: Thanks, I think it is the best way to explain everything.",
       funFact:"The -ere subjunctive reverses the -are pattern. Where -are takes -i (parli), -ere takes -a (scriva). This vowel swap is a handy memory trick: -are verbs go to -i, -ere and -ire verbs go to -a."},

      {type:"teach", trg:"prenda", src:"(that) I/you/he take (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'prendere' (-ere). Keeps the irregular stem 'prend-'.\nChe io prenda, che tu prenda, che lui prenda.",
       example:"A: Penso che lui prenda il treno delle otto.\nB: Credo che prenda l'autobus, invece.\nA: Vuoi che lo chiami per chiedere?\nB: Si, e meglio che sappiamo l'orario esatto.",
       exampleSrc:"A: I think he is taking the eight o'clock train.\nB: I believe he is taking the bus, instead.\nA: Do you want me to call him to ask?\nB: Yes, it is better that we know the exact time.",
       funFact:"'Prendere' is one of the most versatile Italian verbs. 'Prendere un caffe' (have a coffee), 'prendere il sole' (sunbathe), 'prendere in giro' (tease someone). In the subjunctive, the stem stays the same, only the ending changes."},

      {type:"teach", trg:"legga", src:"(that) I/you/he read (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'leggere' (-ere). The -gg- doubles.\nChe io legga, che tu legga, che lui legga.",
       example:"A: Spero che Maria legga il mio messaggio.\nB: Credo che lo legga stasera.\nA: E importante che risponda prima di domani.\nB: Sono sicura che lo faccia, non ti preoccupare.",
       exampleSrc:"A: I hope Maria reads my message.\nB: I think she will read it tonight.\nA: It is important that she replies before tomorrow.\nB: I am sure she will, do not worry.",
       funFact:"The double -gg- in 'legga' is a consonant intensification that occurs in many subjunctive forms. It helps distinguish the subjunctive 'legga' from the indicative 'legge' in spoken Italian."},

      {type:"teach", trg:"dorma", src:"(that) I/you/he sleep (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'dormire' (-ire). Same -a ending as -ere.\nChe io dorma, che tu dorma, che lui dorma.",
       example:"A: Penso che il bambino dorma.\nB: Spero che dorma tutta la notte.\nA: Credo che sia stanco dopo la giornata al parco.\nB: Si, bisogna che riposi bene.",
       exampleSrc:"A: I think the baby is sleeping.\nB: I hope he sleeps through the night.\nA: I think he is tired after the day at the park.\nB: Yes, he needs to rest well.",
       funFact:"The -ire subjunctive works exactly like -ere: -a for io/tu/lui, -iamo for noi, -iate for voi, -ano for loro. Regular -ire verbs (dormire, partire, sentire) all follow this pattern without surprises."},

      {type:"teach", trg:"parta", src:"(that) I/you/he leave (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'partire' (-ire). Regular pattern.\nChe io parta, che tu parta, che lui parta.",
       example:"A: Credo che il treno parta alle nove.\nB: Spero che non parta in ritardo.\nA: Penso che sia meglio arrivare presto alla stazione.\nB: Si, voglio che abbiamo abbastanza tempo.",
       exampleSrc:"A: I believe the train leaves at nine.\nB: I hope it does not leave late.\nA: I think it is better to arrive early at the station.\nB: Yes, I want us to have enough time.",
       funFact:"'Partire' versus 'andare': both can mean 'to leave,' but 'partire' emphasizes departure (leaving a place), while 'andare' emphasizes direction (going somewhere). The subjunctive of 'andare' is irregular: vada."},
{type:"match",pairs:[{trg:"prenda",src:"(that) I/you/he take (subjunctive)"},{trg:"legga",src:"(that) I/you/he read (subjunctive)"},{trg:"dorma",src:"(that) I/you/he sleep (subjunctive)"},{trg:"parta",src:"(that) I/you/he leave (subjunctive)"}]},

      {type:"teach", trg:"finisca", src:"(that) I/you/he finish (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'finire' (-ire with -isc-). Adds -isc- in singular.\nChe io finisca, che tu finisca, che lui finisca.",
       example:"A: Spero che il film finisca presto.\nB: Penso che finisca tra venti minuti.\nA: Credo che la fine sia la parte migliore.\nB: Speriamo che il finale sia bello!",
       exampleSrc:"A: I hope the film ends soon.\nB: I think it ends in twenty minutes.\nA: I believe the ending is the best part.\nB: Let us hope the finale is good!",
       funFact:"Many -ire verbs add -isc- before the ending in singular forms and third person plural. This happens in both indicative (finisco) and subjunctive (finisca). Common -isc- verbs: capire (capisca), preferire (preferisca), pulire (pulisca)."},

      {type:"teach", trg:"capisca", src:"(that) I/you/he understand (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'capire' (-ire with -isc-). Same -isc- insertion.\nChe io capisca, che tu capisca, che lui capisca.",
       example:"A: E importante che tu capisca la lezione.\nB: Penso che io capisca quasi tutto.\nA: Vuoi che ripeta la parte sul congiuntivo?\nB: Si, credo che sia la parte piu difficile.",
       exampleSrc:"A: It is important that you understand the lesson.\nB: I think I understand almost everything.\nA: Do you want me to repeat the part about the subjunctive?\nB: Yes, I think it is the hardest part.",
       funFact:"'Capire' comes from Latin 'capere' (to seize, to grasp). The idea is that understanding means 'grasping' a concept mentally. English 'capture' and 'capable' share this same Latin root."},

      {type:"verb_table", title:"Congiuntivo presente: -ere/-ire",
       note:"Both -ere and -ire verbs take -a endings in the subjunctive. The -isc- verbs add the infix in singular forms and loro.",
       groups:[{label:"scrivere (to write)", rows:[
         {pronoun:"che io", form:"scriva", src:"that I write"},
         {pronoun:"che tu", form:"scriva", src:"that you write"},
         {pronoun:"che lui/lei", form:"scriva", src:"that he/she writes"},
         {pronoun:"che noi", form:"scriviamo", src:"that we write"},
         {pronoun:"che voi", form:"scriviate", src:"that you (pl.) write"},
         {pronoun:"che loro", form:"scrivano", src:"that they write"}
       ]},{label:"finire (to finish, -isc-)", rows:[
         {pronoun:"che io", form:"finisca", src:"that I finish"},
         {pronoun:"che tu", form:"finisca", src:"that you finish"},
         {pronoun:"che lui/lei", form:"finisca", src:"that he/she finishes"},
         {pronoun:"che noi", form:"finiamo", src:"that we finish"},
         {pronoun:"che voi", form:"finiate", src:"that you (pl.) finish"},
         {pronoun:"che loro", form:"finiscano", src:"that they finish"}
       ]}]},

      {type:"teach", trg:"preferisca", src:"(that) I/you/he prefer (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'preferire' (-ire with -isc-).\nChe io preferisca, che tu preferisca, che lui preferisca.",
       example:"A: Penso che Maria preferisca il te al caffe.\nB: Credo che preferisca la cioccolata calda.\nA: Vuoi che le prepari qualcosa?\nB: Si, e meglio che le chieda prima cosa vuole.",
       exampleSrc:"A: I think Maria prefers tea over coffee.\nB: I believe she prefers hot chocolate.\nA: Do you want me to prepare something for her?\nB: Yes, it is better to ask her what she wants first.",
       funFact:"'Preferire' comes from Latin 'praeferre' (to carry before, to place ahead). It always takes the -isc- infix in singular forms. When followed by a noun, use no preposition: 'Preferisco il te.' When followed by a verb, use the infinitive: 'Preferisco dormire.'"},

      {type:"teach", trg:"bisogna che", src:"it is necessary that", pos:"verb", gender:null,
       note:"Impersonal subjunctive trigger. 'Bisogna' has no subject.\nAlways followed by the subjunctive.",
       example:"A: Bisogna che io parta presto domani.\nB: A che ora devi partire?\nA: Penso che il volo sia alle sette.\nB: Allora e necessario che tu esca alle cinque.",
       exampleSrc:"A: I need to leave early tomorrow.\nB: What time do you have to leave?\nA: I think the flight is at seven.\nB: Then it is necessary that you leave at five.",
       funFact:"'Bisogna' is an impersonal verb that exists only in the third person singular. It cannot be conjugated for other persons. Together with 'che,' it always triggers the subjunctive. Alone with an infinitive, it means 'one must': 'Bisogna studiare' (one must study)."},

      // Quiz steps
      {type:"mc", q:"What is the subjunctive of 'scrivere' for 'che io'?",
       opts:["scriva","scrivo","scrive","scrivere"],
       ans:"scriva",
       hint:"Regular -ere verbs take -a endings in the subjunctive. This reverses the -i ending used by -are verbs."},

      {type:"fb", s:"Penso che il bambino {1}.",
       a:["dorma"],
       opts:["dorma","dorme","dormire","dormito"],
       hint:"After 'penso che,' the verb needs the subjunctive. Regular -ire verbs take -a endings.",
       sSrc:"I think the baby {1}."},

      {type:"match", pairs:[
        {trg:"scriva", src:"(that) write (-ere)"},
        {trg:"dorma", src:"(that) sleep (-ire)"},
        {trg:"finisca", src:"(that) finish (-isc-)"},
        {trg:"capisca", src:"(that) understand (-isc-)"},
        {trg:"parta", src:"(that) leave (-ire)"}
      ]},

      {type:"mc", q:"Which -ire verb adds -isc- in the subjunctive?",
       opts:["dormire > dorma","capire > capisca","partire > parta","sentire > senta"],
       ans:"capire > capisca",
       hint:"The -isc- infix appears in both indicative (capisco) and subjunctive (c...). Not all -ire verbs use it."},

      {type:"fb", s:"Spero che il treno {1} alle nove.",
       a:["parta"],
       opts:["parta","parte","partire","partito"],
       hint:"'Sperare che' triggers the subjunctive. This -ire verb is regular and does not use -isc-.",
       sSrc:"I hope the train {1} at nine."},

      {type:"mc", q:"What ending do -ere and -ire subjunctive forms share for io/tu/lui?",
       opts:["-e","-i","-a","-o"],
       ans:"-a",
       hint:"The -are verbs take -i, but -ere and -ire verbs both take this vowel. It is the reverse pattern."},

      {type:"fb", s:"E importante che tu {1} la lezione.",
       a:["capisca"],
       opts:["capisca","capisci","capire","capito"],
       hint:"This -ire verb uses the -isc- infix. After 'e importante che,' the subjunctive is required.",
       sSrc:"It is important that you {1} the lesson."},

      {type:"mc", q:"What does 'bisogna che' mean?",
       opts:["It is impossible that","It is beautiful that","It is normal that","It is necessary that"],
       ans:"It is necessary that",
       hint:"This impersonal expression has no subject pronoun. It expresses necessity and always triggers the subjunctive."}
    ]},

    {id:"itv2_u13l3", title:"Sia, abbia, faccia", icon:"⚡", xp:15, board:true, steps:[
      {type:"intro", title:"Sia, abbia, faccia",
       desc:"The most important Italian verbs have irregular subjunctive forms. Master essere, avere, fare, andare, and dire in the subjunctive.",
       goals:["Learn irregular subjunctive of essere and avere","Form subjunctive of fare, andare, dire","Use irregular subjunctives in conversation"]},

      {type:"teach", trg:"sia", src:"(that) I/you/he be (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'essere.' Completely irregular.\nChe io sia, che tu sia, che lui sia.",
       example:"A: Penso che sia una buona idea.\nB: Credo che sia la migliore!\nA: Spero che tutti siano d'accordo.\nB: Sono sicuro che lo siano.",
       exampleSrc:"A: I think it is a good idea.\nB: I believe it is the best!\nA: I hope everyone agrees.\nB: I am sure they do.",
       funFact:"'Sia' is the most frequently used subjunctive form in Italian. You will hear it constantly: 'Penso che sia...' (I think it is...), 'Qualunque cosa sia' (whatever it may be). Its frequency makes it easy to memorize through exposure."},

      {type:"teach", trg:"abbia", src:"(that) I/you/he have (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'avere.' Irregular stem.\nChe io abbia, che tu abbia, che lui abbia.",
       example:"A: Credo che Maria abbia ragione.\nB: Penso che abbia anche pazienza.\nA: Spero che non sia arrabbiata con noi.\nB: No, credo che capisca la situazione.",
       exampleSrc:"A: I believe Maria is right.\nB: I think she also has patience.\nA: I hope she is not angry with us.\nB: No, I think she understands the situation.",
       funFact:"'Avere ragione' (to have reason) means 'to be right' in Italian. So 'Credo che abbia ragione' literally means 'I believe she has reason.' Italian uses 'avere' (to have) where English uses 'to be' in many expressions: avere fame (to be hungry), avere freddo (to be cold)."},

      {type:"teach", trg:"faccia", src:"(that) I/you/he do/make (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'fare.' Irregular.\nChe io faccia, che tu faccia, che lui faccia.",
       example:"A: Spero che faccia bel tempo domani.\nB: Credo che faccia freddo, invece.\nA: Penso che sia meglio portare una giacca.\nB: Si, e importante che ci vestiamo bene.",
       exampleSrc:"A: I hope the weather is nice tomorrow.\nB: I believe it will be cold, instead.\nA: I think it is better to bring a jacket.\nB: Yes, it is important that we dress well.",
       funFact:"'Fare' is used in weather expressions: 'fa caldo' (it is hot), 'fa freddo' (it is cold), 'fa bel tempo' (the weather is nice). In the subjunctive, these become 'faccia caldo,' 'faccia freddo.' The double -cc- is pronounced like 'ch' in 'church.'"},

      {type:"teach", trg:"vada", src:"(that) I/you/he go (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'andare.' Completely irregular stem.\nChe io vada, che tu vada, che lui vada.",
       example:"A: Voglio che tu vada dal dottore.\nB: Penso che non sia necessario.\nA: E importante che tu faccia un controllo.\nB: Va bene, credo che tu abbia ragione.",
       exampleSrc:"A: I want you to go to the doctor.\nB: I think it is not necessary.\nA: It is important that you get a checkup.\nB: All right, I think you are right.",
       funFact:"The subjunctive 'vada' looks nothing like the infinitive 'andare.' This is because 'andare' combines two Latin verbs: 'ambulare' (to walk) and 'vadere' (to go). The subjunctive preserves the 'vad-' stem from 'vadere.'"},

      {type:"teach", trg:"dica", src:"(that) I/you/he say (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'dire.' Irregular stem 'dic-'.\nChe io dica, che tu dica, che lui dica.",
       example:"A: Penso che dica la verita.\nB: Spero che dica tutta la verita.\nA: Credo che sia una persona onesta.\nB: Anch'io, ma bisogna che vediamo le prove.",
       exampleSrc:"A: I think he is telling the truth.\nB: I hope he tells the whole truth.\nA: I believe he is an honest person.\nB: Me too, but we need to see the evidence.",
       funFact:"'Dire' comes from Latin 'dicere' (to say). The subjunctive keeps the Latin stem 'dic-.' Many Italian derivatives preserve it: dizione (diction), dizionario (dictionary), contraddire (to contradict). The -c- is always hard, like 'k.'"},
{type:"match",pairs:[{trg:"abbia",src:"(that) I/you/he have (subjunctive)"},{trg:"faccia",src:"(that) I/you/he do/make (subjunctive)"},{trg:"vada",src:"(that) I/you/he go (subjunctive)"},{trg:"dica",src:"(that) I/you/he say (subjunctive)"}]},

      {type:"teach", trg:"possa", src:"(that) I/you/he can (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'potere.' Irregular stem 'poss-'.\nChe io possa, che tu possa, che lui possa.",
       example:"A: Spero che tu possa venire alla cena.\nB: Credo che possa arrivare alle otto.\nA: Perfetto, penso che gli altri vengano alle sette.\nB: Bene, spero che non sia un problema se arrivo un po' tardi.",
       exampleSrc:"A: I hope you can come to dinner.\nB: I believe I can arrive at eight.\nA: Perfect, I think the others are coming at seven.\nB: Good, I hope it is not a problem if I arrive a bit late.",
       funFact:"'Potere' is a modal verb meaning 'to be able to.' Its subjunctive 'possa' is used constantly in polite wishes: 'Che tu possa essere felice' (May you be happy). The double -ss- distinguishes it from 'posa' (he/she poses)."},

      {type:"teach", trg:"sappia", src:"(that) I/you/he know (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'sapere.' Irregular stem 'sappi-'.\nChe io sappia, che tu sappia, che lui sappia.",
       example:"A: Non credo che sappia la risposta.\nB: Penso che sappia piu di quanto credi.\nA: Spero che ci aiuti con il progetto.\nB: Credo che sia disponibile questa settimana.",
       exampleSrc:"A: I don't think he knows the answer.\nB: I think he knows more than you believe.\nA: I hope he helps us with the project.\nB: I believe he is available this week.",
       funFact:"'Che io sappia' on its own means 'as far as I know.' It is a very common expression in conversation. 'Per quanto io ne sappia' (as far as I know) is the longer version. Both are used to signal uncertainty."},

      {type:"verb_table", title:"Congiuntivo presente: irregolari",
       note:"The most common irregular subjunctives. These must be memorized individually.",
       groups:[{label:"essere (to be)", rows:[
         {pronoun:"che io", form:"sia", src:"that I be"},
         {pronoun:"che tu", form:"sia", src:"that you be"},
         {pronoun:"che lui/lei", form:"sia", src:"that he/she be"},
         {pronoun:"che noi", form:"siamo", src:"that we be"},
         {pronoun:"che voi", form:"siate", src:"that you (pl.) be"},
         {pronoun:"che loro", form:"siano", src:"that they be"}
       ]},{label:"avere (to have)", rows:[
         {pronoun:"che io", form:"abbia", src:"that I have"},
         {pronoun:"che tu", form:"abbia", src:"that you have"},
         {pronoun:"che lui/lei", form:"abbia", src:"that he/she have"},
         {pronoun:"che noi", form:"abbiamo", src:"that we have"},
         {pronoun:"che voi", form:"abbiate", src:"that you (pl.) have"},
         {pronoun:"che loro", form:"abbiano", src:"that they have"}
       ]}]},

      {type:"teach", trg:"debba", src:"(that) I/you/he must (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'dovere.' Irregular stem 'debb-'.\nAlternate form: deva (less common).",
       example:"A: Penso che debba studiare di piu.\nB: Credo che debba anche riposarsi.\nA: E importante che trovi un equilibrio.\nB: Si, spero che ascolti i nostri consigli.",
       exampleSrc:"A: I think he needs to study more.\nB: I believe he also needs to rest.\nA: It is important that he finds a balance.\nB: Yes, I hope he listens to our advice.",
       funFact:"'Dovere' has two accepted subjunctive forms: 'debba' and 'deva.' Both are correct, but 'debba' is far more common in modern Italian. The verb comes from Latin 'debere' (to owe), which also gave English 'debt' and 'debit.'"},

      {type:"teach", trg:"vengano", src:"(that) they come (subjunctive)", pos:"verb", gender:null,
       note:"Subjunctive of 'venire,' third person plural.\nSingular: che io/tu/lui venga.",
       example:"A: Spero che vengano tutti alla festa.\nB: Credo che vengano almeno dieci persone.\nA: Vuoi che chiami anche i colleghi?\nB: Si, penso che sia una buona idea.",
       exampleSrc:"A: I hope everyone comes to the party.\nB: I believe at least ten people will come.\nA: Do you want me to call the colleagues too?\nB: Yes, I think it is a good idea.",
       funFact:"The irregular subjunctive of 'venire' follows the stem 'veng-': venga, venga, venga, veniamo, veniate, vengano. Notice that noi and voi forms return to the regular stem 'ven-.' This pattern appears in many irregular verbs."},

      // Quiz steps
      {type:"mc", q:"What is the subjunctive of 'essere' for 'che lui'?",
       opts:["sia","e","sara","fosse"],
       ans:"sia",
       hint:"This is the most common subjunctive form in Italian. The stem changes completely from the infinitive 'essere.'"},

      {type:"fb", s:"Credo che Maria {1} ragione.",
       a:["abbia"],
       opts:["abbia","ha","avere","avesse"],
       hint:"After 'credo che,' the verb must be in the subjunctive. This is the irregular form of 'avere.'",
       sSrc:"I believe Maria {1} right."},

      {type:"match", pairs:[
        {trg:"sia", src:"(that) be (essere)"},
        {trg:"abbia", src:"(that) have (avere)"},
        {trg:"faccia", src:"(that) do/make (fare)"},
        {trg:"vada", src:"(that) go (andare)"},
        {trg:"dica", src:"(that) say (dire)"}
      ]},

      {type:"mc", q:"What is the subjunctive of 'andare' for 'che tu'?",
       opts:["anda","vada","andare","vai"],
       ans:"vada",
       hint:"This verb has a completely different stem in the subjunctive. The stem comes from Latin 'vadere' (to go)."},

      {type:"fb", s:"Spero che {1} bel tempo domani.",
       a:["faccia"],
       opts:["faccia","fa","fare","fatto"],
       hint:"Weather expressions use 'fare.' In the subjunctive after 'spero che,' this irregular verb changes its stem.",
       sSrc:"I hope the weather {1} nice tomorrow."},

      {type:"mc", q:"What does 'che io sappia' mean as a standalone phrase?",
       opts:["I don't know","I know everything","As far as I know","I want to know"],
       ans:"As far as I know",
       hint:"This expression uses the subjunctive of 'sapere' to signal limited certainty. It hedges a statement, not denies it."},

      {type:"fb", s:"Penso che {1} la verita.",
       a:["dica"],
       opts:["dica","dice","dire","detto"],
       hint:"After 'penso che,' use the subjunctive. This irregular form of 'dire' keeps the Latin stem 'dic-.'",
       sSrc:"I think he {1} the truth."},

      {type:"mc", q:"Which verb has the subjunctive form 'possa'?",
       opts:["postare","possedere","posare","potere"],
       ans:"potere",
       hint:"This modal verb means 'to be able to.' Its subjunctive stem changes to 'poss-' with a double s."}
    ,{type:"match",pairs:[{trg:"il congiuntivo",src:"the subjunctive"},{trg:"studi",src:"(that) you study (subjunctive)"},{trg:"possa",src:"(that) I/you/he can (subjunctive)"},{trg:"sappia",src:"(that) I/you/he know (subjunctive)"}]}]}
  ]
};
export default UNIT_13;
