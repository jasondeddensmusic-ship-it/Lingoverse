// Italian V2 Unit 11. Il passato (Past Tense Introduction) (A2.2)
import BATCH8_L1 from './_batch8_u11_L01.js';
import BATCH7_L1 from './_batch7_u11_L01.js';
import BATCH6_L1 from './_batch6_u11_L01.js';
import BATCH4_L02 from './_batch4_u11_L02.js';
import BATCH4_L01 from './_batch4_u11_L01.js';
import BATCH3_L02 from './_batch3_u11_L02.js';
import BATCH3_L01 from './_batch3_u11_L01.js';
// CILS/CELI A2 aligned. Passato prossimo with avere, irregular participles, time expressions.
import EXP_11_L1 from './_temp_u11_expand_L01.js';import EXP_11_L2 from './_temp_u11_expand_L02.js';import EXP_11_L3 from './_temp_u11_expand_L03.js';

import COVERAGE_U11 from './_coverage_u11.js';
const UNIT_11 = {
  n:11, lang:"it", srcLang:"en", track:"v2",
  title:"Il passato", sub:"Past Tense Introduction",
  icon:"\u23F3", level:"A2.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u11l1", title:"Ho mangiato!", icon:"\uD83C\uDF5D", xp:15, board:true, steps:[
      {type:"intro", title:"Ho mangiato!",
       desc:"Learn the Italian past tense (passato prossimo) with 'avere.' This is the most common way to talk about past events in everyday Italian conversation.",
       goals:["Form the passato prossimo with avere","Use regular past participles (-ato, -uto, -ito)","Talk about what you did in the past"]},

      {type:"tip", title:"Passato prossimo with avere",
       text:"The passato prossimo is formed with:\navere (present) + past participle\n\nRegular past participles:\n-are verbs: -ato (mangiare > mangiato)\n-ere verbs: -uto (vendere > venduto)\n-ire verbs: -ito (dormire > dormito)\n\nExamples:\nHo mangiato = I ate / I have eaten\nHai parlato = You spoke\nHa lavorato = He/she worked",
       deepDive:"Most Italian verbs use 'avere' as their helper verb in the past tense. Verbs that describe actions done TO something (transitive verbs) almost always use 'avere.' In the next unit, you will learn verbs that use 'essere' instead."},

      {type:"teach", trg:"ho mangiato", src:"I ate / I have eaten", pos:"verb", gender:null,
       note:"Passato prossimo of 'mangiare.' Ho (I have) + mangiato (eaten).\n-are > -ato pattern.",
       example:"A: Cosa hai mangiato?\nB: Ho mangiato una pizza margherita.",
       exampleSrc:"A: What did you eat?\nB: I ate a margherita pizza.",
       funFact:"The passato prossimo literally translates as 'near past.' Unlike English, which uses both 'I ate' and 'I have eaten,' Italian uses 'ho mangiato' for both meanings. Northern Italians prefer passato prossimo, while southerners sometimes use the passato remoto."},

      {type:"teach", trg:"hai parlato", src:"you spoke / you have spoken", pos:"verb", gender:null,
       note:"Passato prossimo of 'parlare.' Hai (you have) + parlato (spoken).\n'Tu' form.",
       example:"A: Hai parlato con Marco?\nB: Si, ho parlato con lui ieri.",
       exampleSrc:"A: Did you speak with Marco?\nB: Yes, I spoke with him yesterday.",
       funFact:"'Parlare' comes from Late Latin 'parabolare' (to tell parables), from Greek 'parabole' (comparison). English 'parley' and French 'parler' share the same root. The -ato ending works for ALL -are verbs: parlato, lavorato, studiato."},

      {type:"teach", trg:"ha lavorato", src:"he/she worked", pos:"verb", gender:null,
       note:"Passato prossimo of 'lavorare.' Ha (he/she has) + lavorato (worked).\nFormal 'you' (Lei) also uses 'ha.'",
       example:"A: Maria ha lavorato tutto il giorno.\nB: Poverina! Deve essere stanca.",
       exampleSrc:"A: Maria worked all day.\nB: Poor thing! She must be tired.",
       funFact:"'Ha' serves double duty: 'he has,' 'she has,' AND the formal 'you have' (Lei). Context makes the meaning clear. Italian distinguishes formality through pronouns (tu vs. Lei), not through verb forms in the past tense."},

      {type:"teach", trg:"abbiamo comprato", src:"we bought / we have bought", pos:"verb", gender:null,
       note:"Passato prossimo of 'comprare.' Abbiamo (we have) + comprato (bought).\n'Noi' form.",
       example:"A: Cosa avete comprato?\nB: Abbiamo comprato i regali di Natale.",
       exampleSrc:"A: What did you buy?\nB: We bought the Christmas presents.",
       funFact:"'Comprare' comes from Latin 'comparare' (to procure, acquire), which also gave English 'compare.' The connection: to buy is to evaluate and choose. 'Abbiamo' is the 'noi' (we) form of 'avere.'"},

      {type:"teach", trg:"hanno studiato", src:"they studied", pos:"verb", gender:null,
       note:"Passato prossimo of 'studiare.' Hanno (they have) + studiato (studied).\n'Loro' form.",
       example:"A: I ragazzi hanno studiato?\nB: Si, hanno studiato tutta la sera.",
       exampleSrc:"A: Did the kids study?\nB: Yes, they studied all evening.",
       funFact:"All six forms of avere: ho, hai, ha, abbiamo, avete, hanno. The participle NEVER changes with avere (usually). 'Ho mangiato' whether you are male or female. This is simpler than French, where past participles sometimes agree with objects."},
{type:"match",pairs:[{trg:"hai parlato",src:"you spoke / you have spoken"},{trg:"ha lavorato",src:"he/she worked"},{trg:"abbiamo comprato",src:"we bought / we have bought"},{trg:"hanno studiato",src:"they studied"}]},

      {type:"teach", trg:"avete dormito", src:"you (plural) slept", pos:"verb", gender:null,
       note:"Passato prossimo of 'dormire.' Avete (you all have) + dormito (slept).\n-ire > -ito pattern.",
       example:"A: Avete dormito bene?\nB: Si, il letto era comodissimo.",
       exampleSrc:"A: Did you sleep well?\nB: Yes, the bed was very comfortable.",
       funFact:"'Dormire' follows the -ire > -ito pattern: dormito, partito, finito. 'Avete' is the 'voi' (you plural) form. In southern Italy, 'voi' is also used as a formal singular 'you,' like French 'vous.' Northern Italy prefers 'Lei.'"},

      // Quiz steps
      {type:"mc", q:"How do you form the passato prossimo of -are verbs?",
       opts:["avere + -ato","avere + -uto","essere + -ato","avere + -ito"],
       ans:"avere + -ato",
       hint:"Drop the infinitive ending and attach the first-conjugation suffix. All regular first-conjugation verbs follow this pattern."},

      {type:"fb", s:"{1} mangiato una pizza margherita.",
       a:["Ho"],
       opts:["Ho","Hai","Ha","Hanno"],
       hint:"The subject is 'I.' Which form of 'avere' goes with the first person singular?",
       sSrc:"I {1} eaten a margherita pizza."},

      {type:"match", pairs:[
        {trg:"ho mangiato", src:"I ate"},
        {trg:"hai parlato", src:"you spoke"},
        {trg:"ha lavorato", src:"he/she worked"},
        {trg:"abbiamo comprato", src:"we bought"},
        {trg:"hanno studiato", src:"they studied"}
      ]},

      {type:"mc", q:"Does the past participle change form with 'avere'?",
       opts:["Yes, it matches the subject gender","No, it stays the same regardless of subject","Yes, it matches the subject number always","Yes, but it depends on which verb you use"],
       ans:"No, it stays the same regardless of subject",
       hint:"With 'avere,' the participle is fixed: 'ho mangiato' for everyone, male or female, singular or plural."},

      {type:"fb", s:"Maria {1} lavorato tutto il giorno.",
       a:["ha"],
       opts:["ha","ho","hai","hanno"],
       hint:"Maria is she (third person singular). Which form of 'avere' matches?",
       sSrc:"Maria {1} worked all day."},

      {type:"mc", q:"What ending does 'dormire' get in the past participle?",
       opts:["-uto (dormuto, wrong)","-ato (dormato, wrong)","-ito (dormito)","-to (dormto, wrong)"],
       ans:"-ito (dormito)",
       hint:"Verbs in the third conjugation follow this pattern consistently. Think of 'finire' and 'capire' as examples."},

      {type:"fb", s:"I ragazzi {1} studiato tutta la sera.",
       a:["hanno"],
       opts:["hanno","ha","abbiamo","avete"],
       hint:"The subject is 'i ragazzi' (they). Which form of 'avere' is for the third person plural?",
       sSrc:"The kids {1} studied all evening."},

      {type:"mc", q:"Why is the passato prossimo called the 'near past'?",
       opts:["It only works with avere as helper","It somehow describes future events","It is archaic and rarely used today","It is used for recent past events in everyday speech"],
       ans:"It is used for recent past events in everyday speech",
       hint:"'Prossimo' means 'near/next.' This tense is the standard conversational form for completed actions in Italian, covering both 'I did' and 'I have done.'"}
    ]},

    {id:"itv2_u11l2", title:"Participi irregolari", icon:"\uD83D\uDD00", xp:15, board:true, steps:[
      {type:"intro", title:"Participi irregolari",
       desc:"Learn the most common irregular past participles in Italian. These high-frequency verbs do not follow the regular patterns and must be memorized.",
       goals:["Memorize common irregular past participles","Use irregular forms correctly in sentences","Recognize patterns among irregular participles"]},

      {type:"teach", trg:"fatto", src:"done / made (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'fare' (to do/make).\n'Ho fatto' = I did / I made. One of the most used verbs.",
       example:"A: Cosa hai fatto ieri?\nB: Ho fatto una passeggiata al parco.",
       exampleSrc:"A: What did you do yesterday?\nB: I took a walk in the park.",
       funFact:"'Fare' is one of Italian's most versatile verbs: fare colazione (have breakfast), fare la spesa (go grocery shopping), fare una domanda (ask a question), fare un viaggio (take a trip). The past participle 'fatto' breaks all patterns."},

      {type:"teach", trg:"detto", src:"said / told (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'dire' (to say/tell).\n'Ha detto' = he/she said. From Latin 'dictum.'",
       example:"A: Cosa ha detto il dottore?\nB: Ha detto di riposare.",
       exampleSrc:"A: What did the doctor say?\nB: He said to rest.",
       funFact:"From Latin 'dictum' (said, spoken). English 'dictate,' 'dictionary,' 'verdict' (truly said), and 'predict' all come from the same root. 'Dire' comes from Latin 'dicere,' but the Italian infinitive shortened over centuries."},

      {type:"teach", trg:"visto", src:"seen (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'vedere' (to see).\n'Ho visto' = I saw / I have seen. Also 'veduto' (rare, literary).",
       example:"A: Hai visto il film?\nB: Si, l'ho visto ieri sera.",
       exampleSrc:"A: Did you see the movie?\nB: Yes, I saw it last night.",
       funFact:"'Visto' is also used as a noun meaning 'visa' (a document that shows you have been 'seen' and approved by authorities). English 'vision,' 'visit,' and 'visible' all come from the same Latin 'videre' (to see)."},

      {type:"teach", trg:"preso", src:"taken (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'prendere' (to take).\n'Ho preso' = I took / I have taken.",
       example:"A: Hai preso l'autobus?\nB: No, ho preso il treno.",
       exampleSrc:"A: Did you take the bus?\nB: No, I took the train.",
       funFact:"From Latin 'prehensum' (seized), simplified to 'preso.' English 'prehensile' (able to grasp, like a monkey's tail) comes from the same root. 'Prendere' is essential daily vocabulary: prendere un caffe, prendere una decisione, prendere il sole."},

      {type:"teach", trg:"scritto", src:"written (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'scrivere' (to write).\n'Ho scritto' = I wrote / I have written.",
       example:"A: Hai scritto l'email?\nB: Si, l'ho scritta stamattina.",
       exampleSrc:"A: Did you write the email?\nB: Yes, I wrote it this morning.",
       funFact:"From Latin 'scriptum' (written). English 'script,' 'scripture,' 'prescription,' and 'manuscript' (hand-written) all come from the same root. Notice 'scritta' in the answer: when a direct object pronoun precedes avere, the participle can agree."},
{type:"match",pairs:[{trg:"detto",src:"said / told (past participle)"},{trg:"visto",src:"seen (past participle)"},{trg:"preso",src:"taken (past participle)"},{trg:"scritto",src:"written (past participle)"}]},

      {type:"teach", trg:"letto", src:"read (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'leggere' (to read).\n'Ho letto' = I read (past). Same spelling as 'il letto' (the bed)!",
       example:"A: Hai letto il giornale?\nB: Si, ho letto le notizie.",
       exampleSrc:"A: Did you read the newspaper?\nB: Yes, I read the news.",
       funFact:"'Letto' (read) and 'letto' (bed) are spelled the same but have different origins. The verb form comes from Latin 'lectum' (read). The noun comes from Latin 'lectum' (bed, couch). Same spelling, different Latin words, pure coincidence."},

      {type:"teach", trg:"aperto", src:"opened (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'aprire' (to open).\n'Ho aperto' = I opened. Also used as adjective: 'la porta aperta' (the open door).",
       example:"A: Hai aperto la finestra?\nB: Si, faceva caldo.",
       exampleSrc:"A: Did you open the window?\nB: Yes, it was hot.",
       funFact:"From Latin 'apertum' (opened). The opposite 'chiuso' (closed) is the past participle of 'chiudere.' Both 'aperto' and 'chiuso' are used as adjectives: 'negozio aperto' (open shop), 'negozio chiuso' (closed shop). Very high frequency words."},

      {type:"teach", trg:"chiesto", src:"asked (past participle)", pos:"verb", gender:null,
       note:"Irregular past participle of 'chiedere' (to ask).\n'Ho chiesto' = I asked. From Latin 'quaesitum.'",
       example:"A: Hai chiesto al cameriere?\nB: Si, ho chiesto il conto.",
       exampleSrc:"A: Did you ask the waiter?\nB: Yes, I asked for the bill.",
       funFact:"From Latin 'quaesitum' (sought, asked). The same root gave English 'question,' 'quest,' 'request,' and 'inquisition.' 'Chiedere' is essential for polite Italian: 'chiedere scusa' (to apologize), 'chiedere un favore' (to ask a favor)."},

      // Quiz steps
      {type:"mc", q:"What is the past participle of 'fare'?",
       opts:["Fatto","Farato","Fato","Ferito"],
       ans:"Fatto",
       hint:"This is completely irregular. From 'fare' (to do/make). One of the most common Italian verb forms."},

      {type:"fb", s:"Cosa ha {1} il dottore?",
       a:["detto"],
       opts:["detto","fatto","visto","preso"],
       hint:"The doctor spoke and gave you instructions. This is the past participle of 'dire' (to say).",
       sSrc:"What did the doctor {1}?"},

      {type:"match", pairs:[
        {trg:"fatto", src:"done / made"},
        {trg:"detto", src:"said"},
        {trg:"visto", src:"seen"},
        {trg:"preso", src:"taken"},
        {trg:"scritto", src:"written"}
      ]},

      {type:"mc", q:"What verb does 'preso' come from?",
       opts:["Premere (to press)","Prendere (to take)","Pregare (to pray)","Promettere (to promise)"],
       ans:"Prendere (to take)",
       hint:"From Latin 'prehensum' (seized). You use this for taking buses, coffee, decisions, and more."},

      {type:"fb", s:"Hai {1} il film ieri sera?",
       a:["visto"],
       opts:["visto","fatto","detto","letto"],
       hint:"You watched a movie. This is the past participle of 'vedere' (to see).",
       sSrc:"Did you {1} the movie last night?"},

      {type:"mc", q:"Why is 'letto' (read) potentially confusing?",
       opts:["It is regular","It sounds like 'latte'","It is spelled the same as 'letto' (bed)","It has no past tense"],
       ans:"It is spelled the same as 'letto' (bed)",
       hint:"Two identical-looking words from different Latin origins. Context tells you if it means 'read' or 'b....'"},

      {type:"fb", s:"Hai {1} la finestra?",
       a:["aperto"],
       opts:["aperto","chiesto","scritto","letto"],
       hint:"You unlatched and pushed the window to let air in. This is the past participle of 'aprire' (to open).",
       sSrc:"Did you {1} the window?"},

      {type:"mc", q:"What is the past participle of 'chiedere'?",
       opts:["Chiedito","Chieduto","Chiedato","Chiesto"],
       ans:"Chiesto",
       hint:"Completely irregular. From Latin 'quaesitum.' The same root gave English 'question' and 'quest.'"}
    ]},

    {id:"itv2_u11l3", title:"Quando? Espressioni di tempo", icon:"\uD83D\uDCC5", xp:15, board:true, steps:[
      {type:"intro", title:"Quando? Espressioni di tempo",
       desc:"Learn time expressions that go with the passato prossimo. These words tell WHEN something happened in the past and are essential for storytelling.",
       goals:["Use common past time expressions","Place events in time correctly","Combine time words with passato prossimo"]},

      {type:"teach", trg:"ieri", src:"yesterday", pos:"adv", gender:null,
       note:"From Latin 'heri' (yesterday).\nCombinations: ieri mattina, ieri sera, ieri pomeriggio.",
       example:"A: Quando sei andato al cinema?\nB: Ieri sera.",
       exampleSrc:"A: When did you go to the cinema?\nB: Yesterday evening.",
       funFact:"From Latin 'heri' (yesterday). Italian can specify parts of yesterday: 'ieri mattina' (yesterday morning), 'ieri pomeriggio' (yesterday afternoon), 'ieri sera' (yesterday evening). 'L'altro ieri' means 'the day before yesterday.'"},

      {type:"teach", trg:"la settimana scorsa", src:"last week", pos:"noun", gender:"f",
       note:"'Scorsa' = last/past (feminine, agreeing with 'settimana').\nMasculine: scorso. 'Il mese scorso' = last month.",
       example:"A: Quando hai comprato la giacca?\nB: La settimana scorsa, ai saldi.",
       exampleSrc:"A: When did you buy the jacket?\nB: Last week, at the sales.",
       funFact:"'Scorso' comes from 'scorrere' (to flow, pass by). Literally, 'the week that flowed past.' The word agrees with the noun: 'il mese scorso' (masculine), 'la settimana scorsa' (feminine), 'l'anno scorso' (masculine)."},

      {type:"teach", trg:"l'anno scorso", src:"last year", pos:"noun", gender:"m",
       note:"'Anno' = year (masculine). 'Scorso' agrees as masculine.\n'L'anno prossimo' = next year.",
       example:"A: Dove sei andato l'anno scorso?\nB: Sono andato in Grecia.",
       exampleSrc:"A: Where did you go last year?\nB: I went to Greece.",
       funFact:"'Anno' comes from Latin 'annus' (year), which gave English 'annual,' 'anniversary,' and 'annals.' Italians measure time in 'scorso' (past) and 'prossimo' (next): 'l'anno scorso' (last year), 'l'anno prossimo' (next year)."},

      {type:"teach", trg:"fa", src:"ago", pos:"adv", gender:null,
       note:"Placed AFTER the time expression. 'Due giorni fa' = two days ago.\n'Un'ora fa' = an hour ago.",
       example:"A: Quando hai chiamato?\nB: Dieci minuti fa.",
       exampleSrc:"A: When did you call?\nB: Ten minutes ago.",
       funFact:"'Fa' here is the third person of 'fare' (to do/make), literally meaning 'it makes/does.' 'Due giorni fa' literally means 'two days it makes.' This is the same construction as French 'il y a' (there is/ago). It always goes AFTER the time unit."},

      {type:"teach", trg:"stamattina", src:"this morning", pos:"adv", gender:null,
       note:"Contraction of 'questa mattina.' One word, no space.\nSimilar: stanotte (tonight/last night), stasera (this evening).",
       example:"A: Hai fatto colazione stamattina?\nB: Si, ho mangiato un cornetto.",
       exampleSrc:"A: Did you have breakfast this morning?\nB: Yes, I ate a cornetto.",
       funFact:"Italian creates time contractions by combining 'questa/o' with the time word: stamattina (questa mattina), stasera (questa sera), stanotte (questa notte). These contractions are used far more than the full forms in everyday speech."},
{type:"match",pairs:[{trg:"la settimana scorsa",src:"last week"},{trg:"l'anno scorso",src:"last year"},{trg:"fa",src:"ago"},{trg:"stamattina",src:"this morning"},{trg:"avete dormito",src:"you (plural) slept"}]},

      {type:"teach", trg:"gia", src:"already", pos:"adv", gender:null,
       note:"Placed between avere and the participle. 'Ho gia mangiato' = I have already eaten.\nFrom Latin 'iam' (already, now).",
       example:"A: Vuoi mangiare?\nB: No grazie, ho gia mangiato.",
       exampleSrc:"A: Do you want to eat?\nB: No thanks, I have already eaten.",
       funFact:"From Latin 'iam' (already, now). In Italian, 'gia' usually goes between the helper verb and the participle: 'ho GIA mangiato.' English puts 'already' in the same position: 'I have ALREADY eaten.' The accent mark is important."},

      {type:"teach", trg:"non ... ancora", src:"not yet", pos:"adv", gender:null,
       note:"Split around the verb: 'Non ho ancora mangiato.'\n'Ancora' alone means 'still' or 'again.'",
       example:"A: Hai finito i compiti?\nB: No, non ho ancora finito.",
       exampleSrc:"A: Have you finished your homework?\nB: No, I have not finished yet.",
       funFact:"'Ancora' is versatile: 'ancora' (still, yet, again). 'Non ... ancora' = not yet. 'Ancora una volta' = once again. The word wraps around the verb with 'non': 'non ho ANCORA finito.' Word order matters for meaning in Italian."},

      {type:"teach", trg:"mai", src:"never / ever", pos:"adv", gender:null,
       note:"With 'non': 'non ho mai visto' = I have never seen.\nIn questions without 'non': 'Hai mai visto?' = Have you ever seen?",
       example:"A: Hai mai visitato Roma?\nB: No, non ci sono mai stato.",
       exampleSrc:"A: Have you ever visited Rome?\nB: No, I have never been there.",
       funFact:"'Mai' means 'never' (with 'non') or 'ever' (in questions). This dual meaning exists in many Romance languages. From Latin 'magis' (more), which shifted to mean 'ever/at any time.' Italian uses double negatives: 'non ho MAI' is correct grammar."},

      // Quiz steps
      {type:"mc", q:"Where does 'fa' go in a time expression meaning 'ago'?",
       opts:["After the time unit (due giorni FA)","Before the time unit","At the start of the sentence","Before the verb"],
       ans:"After the time unit (due giorni FA)",
       hint:"The t... u... comes first, then this little word: 'dieci minuti __', 'un'ora __', 'tre anni __'."},

      {type:"fb", s:"Quando hai comprato la giacca? La settimana {1}.",
       a:["scorsa"],
       opts:["scorsa","prossima","fa","ieri"],
       hint:"You bought it in the previous week. This adjective means 'past/last' and agrees with 'settimana' (feminine).",
       sSrc:"When did you buy the jacket? {1} week."},

      {type:"match", pairs:[
        {trg:"ieri", src:"yesterday"},
        {trg:"fa", src:"ago"},
        {trg:"stamattina", src:"this morning"},
        {trg:"gia", src:"already"},
        {trg:"mai", src:"never / ever"}
      ]},

      {type:"mc", q:"What is 'stamattina' a contraction of?",
       opts:["Sta mattina","Questa mattina","Stamane mattina","Stai mattina"],
       ans:"Questa mattina",
       hint:"Italian contracts 'q.../o' with time words: q... + m..., q... + sera, q... + notte."},

      {type:"fb", s:"No grazie, ho {1} fatto colazione.",
       a:["gia"],
       opts:["gia","mai","ancora","sempre"],
       hint:"You finished breakfast before this moment. This adverb goes between 'ho' and the participle.",
       sSrc:"No thanks, I have {1} had breakfast."},

      {type:"mc", q:"How do you say 'I have never seen' in Italian?",
       opts:["Non ho visto mai","Ho mai visto","Non ho mai visto","Mai ho non visto"],
       ans:"Non ho mai visto",
       hint:"Italian uses double negatives. 'N...' before the verb, 'm...' between helper and participle."},

      {type:"fb", s:"Non ho {1} finito i compiti.",
       a:["ancora"],
       opts:["ancora","gia","mai","sempre"],
       hint:"You have not finished yet but you plan to. This word means 'yet' when used with 'non.'",
       sSrc:"I have not {1} finished my homework."},

      {type:"mc", q:"What does 'l'anno scorso' mean?",
       opts:["Every year","Next year","This year","Last year"],
       ans:"Last year",
       hint:"'Scorso' comes from 'scorrere' (to flow, pass by). Think of the calendar page that already slipped away."}
    ]},
    EXP_11_L1, EXP_11_L2, EXP_11_L3,
    {id:"itv2_u11l_a2v", title:"Verbi A2 mentali", icon:"\uD83D\uDCDD", xp:15, board:true, steps:[
      {type:"intro", title:"Essential A2 Mental Verbs",
       desc:"Learn 7 essential A2 Italian verbs and words for thinking, believing, and deciding. Essential for CILS A2 and daily Italian communication.",
       goals:["Master 7 core A2 mental verbs and nouns","Express opinions and beliefs clearly","Talk about decisions and feelings"]},

      {type:"teach", trg:"pensare", src:"to think", pos:"verb", gender:null,
       note:"Regular -are verb. Pensare a = to think about. Pensare che = to think that.",
       example:"A: Cosa pensi di questo?\nB: Penso che sia una buona idea.",
       exampleSrc:"A: What do you think about this?\nB: I think it is a good idea.",
       funFact:"From Latin 'pensare' (to weigh, consider). The same root gives English 'pensive' (deep in thought) and 'suspense' (being weighed in the balance)."},

      {type:"teach", trg:"credere", src:"to believe", pos:"verb", gender:null,
       note:"Regular -ere verb. Credere in = to believe in. Credere che = to believe that.",
       example:"A: Credi in questo progetto?\nB: Si, ci credo molto.",
       exampleSrc:"A: Do you believe in this project?\nB: Yes, I believe in it a lot.",
       funFact:"From Latin 'credere' (to trust, entrust). English 'credit,' 'credible,' and 'creed' all share this root. The phrase 'credo' (I believe) is used unchanged in many languages."},

      {type:"teach", trg:"decidere", src:"to decide", pos:"verb", gender:null,
       note:"Regular -ere verb with irregular past participle: deciso.\nDecidere di + infinitive = to decide to do something.",
       example:"A: Hai deciso dove andare?\nB: Ho deciso di andare a Roma.",
       exampleSrc:"A: Have you decided where to go?\nB: I have decided to go to Rome.",
       funFact:"From Latin 'decidere' (to cut off, settle). English 'decision' comes from the same root. The idea: to decide is to 'cut off' other options. The irregular participle 'deciso' follows the pattern of many -ere verbs."},

      {type:"teach", trg:"spiegare", src:"to explain", pos:"verb", gender:null,
       note:"Regular -are verb with a spelling change: g becomes gh before -i/-e endings.\nSpiego, spieghi, spiega, spieghiamo, spiegate, spiegano.",
       example:"A: Puoi spiegare questo?\nB: Si, ti spiego subito.",
       exampleSrc:"A: Can you explain this?\nB: Yes, I will explain it to you right away.",
       funFact:"From Latin 'explicare' (to unfold, spread out). English 'explain' and 'explicit' share the same origin. The Italian spelling change g > gh preserves the hard 'g' sound before front vowels."},

      {type:"teach", trg:"la malattia", src:"the illness", pos:"noun", gender:"f",
       note:"Noun, feminine. Use with 'avere una malattia' (to have an illness) or 'essere malato/a' (to be sick).",
       example:"A: Perche non sei venuto?\nB: Ho avuto una malattia la settimana scorsa.",
       exampleSrc:"A: Why didn't you come?\nB: I had an illness last week.",
       funFact:"From Latin 'malus' (bad) + 'habitus' (condition). A malattia is literally a 'bad condition.' The adjective form 'malato/malata' (sick) comes from the same root."},

      {type:"teach", trg:"felice", src:"happy", pos:"adj", gender:null,
       note:"Adjective, same form for masculine and feminine. Plural: felici.\nDo not confuse with 'contento' (satisfied, content) or 'allegro' (cheerful).",
       example:"A: Come ti senti oggi?\nB: Mi sento molto felice oggi.",
       exampleSrc:"A: How do you feel today?\nB: I feel very happy today.",
       funFact:"From Latin 'felix' (fortunate, fruitful). Roman names Felix and Felicia share this root. In Italian, 'felice' specifically means a deep sense of happiness, while 'contento' is more like being satisfied with a situation."},

      {type:"teach", trg:"la bevanda", src:"the drink", pos:"noun", gender:"f",
       note:"Noun, feminine. General word for any drink. Specific: l'acqua (water), il vino (wine), la birra (beer), il succo (juice).",
       example:"A: Cosa vuoi come bevanda?\nB: Una bevanda fredda, per favore.",
       exampleSrc:"A: What do you want as a drink?\nB: A cold drink, please.",
       funFact:"From Latin 'bibenda' (things to be drunk), from 'bibere' (to drink). English 'beverage' and 'imbibe' share this root. Italian keeps the simple form 'bevanda' while English borrowed the longer 'beverage' from Old French."},

      {type:"tip", title:"Using mental verbs with 'che'",
       text:"Three key verbs take 'che' to introduce a second idea:\n\nPensare che = to think that\nCredere che = to believe that\n(requires subjunctive in formal Italian)\n\nDecidere di + infinitive = to decide to do\n(no 'che,' use 'di' + verb)\n\nExamples:\nPenso che tu abbia ragione. (I think you are right.)\nHo deciso di spiegare il problema. (I decided to explain the problem.)",
       deepDive:"At A2 level, use 'pensare che' and 'credere che' with indicative for everyday speech. The subjunctive (penso che sia...) is a B1 feature. At this stage, focus on the vocabulary and structure: decide + di + infinitive is immediately usable and very common."},

      {type:"mc", q:"Which Italian word means 'to believe'?",
       opts:["credere","decidere","spiegare","pensare"],
       ans:"credere",
       hint:"This verb shares a root with English 'credit' and 'credible.'"},

      {type:"mc", q:"What is the past participle of 'decidere'?",
       opts:["deciduto","deciso","decidito","decidato"],
       ans:"deciso",
       hint:"This verb has an irregular past participle. Think of the English word 'decision' for a clue to the Italian form."},

      {type:"fb", s:"Puoi {1} questo concetto?",
       a:["spiegare"],
       opts:["spiegare","pensare","credere","decidere"],
       hint:"The blank asks for the verb meaning 'to explain.' It takes a direct object.",
       sSrc:"Can you {1} this concept?"},

      {type:"fb", s:"Mi sento molto {1} oggi.",
       a:["felice"],
       opts:["felice","malattia","bevanda","credere"],
       hint:"The blank needs an adjective describing a positive emotion. One option here is a noun, one a verb.",
       sSrc:"I feel very {1} today."},

      {type:"mc", q:"What gender is 'la malattia'?",
       opts:["it changes with context","masculine","feminine","neuter"],
       ans:"feminine",
       hint:"Look at the article used with this noun. Italian articles always signal the gender."},

      {type:"match", pairs:[
        {trg:"pensare", src:"to think"},
        {trg:"credere", src:"to believe"},
        {trg:"decidere", src:"to decide"},
        {trg:"spiegare", src:"to explain"},
        {trg:"la malattia", src:"the illness"},
        {trg:"felice", src:"happy"},
        {trg:"la bevanda", src:"the drink"}
      ]}
    ]},
  
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH4_L02,
  BATCH4_L01,
  BATCH3_L02,
  BATCH3_L01
, COVERAGE_U11]
};
export default UNIT_11;
