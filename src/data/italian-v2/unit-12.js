// Italian V2 Unit 12. Essere al passato (Past with essere) (A2.2)
import BATCH3_L02 from './_batch3_u12_L02.js';
import BATCH3_L01 from './_batch3_u12_L01.js';
// CILS/CELI A2 aligned. Passato prossimo with essere, movement verbs, agreement.
import EXP_12_L1 from './_temp_u12_expand_L01.js';import EXP_12_L2 from './_temp_u12_expand_L02.js';import EXP_12_L3 from './_temp_u12_expand_L03.js';

const UNIT_12 = {
  n:12, lang:"it", srcLang:"en", track:"v2",
  title:"Essere al passato", sub:"Past Tense with Essere",
  icon:"\uD83D\uDEB6", level:"A2.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u12l1", title:"Sono andato!", icon:"\u27A1\uFE0F", xp:15, board:true, steps:[
      {type:"intro", title:"Sono andato!",
       desc:"Some Italian verbs use 'essere' (not 'avere') in the passato prossimo. These are mostly verbs of movement and state. The past participle must agree with the subject.",
       goals:["Form the passato prossimo with essere","Know which verbs take essere","Make the participle agree with the subject"]},

      {type:"tip", title:"Passato prossimo with essere",
       text:"Some verbs use essere (not avere) as the helper:\nessere (present) + past participle (agrees!)\n\nThe participle MUST agree in gender and number:\nSono andato (I went, male speaker)\nSono andata (I went, female speaker)\nSiamo andati (we went, male/mixed)\nSiamo andate (we went, all female)\n\nVerbs with essere are mostly about movement or change of state.",
       deepDive:"A helpful memory trick: imagine a house. Verbs that describe entering, leaving, going up, going down, arriving at, or departing from a house tend to use essere. Verbs you do INSIDE the house (eating, reading, sleeping) use avere."},

      {type:"teach", trg:"sono andato/a", src:"I went", pos:"verb", gender:null,
       note:"Passato prossimo of 'andare' with essere.\nMale: sono andato. Female: sono andata.",
       example:"A: Dove sei andato ieri?\nB: Sono andato al cinema.",
       exampleSrc:"A: Where did you go yesterday?\nB: I went to the cinema.",
       funFact:"'Andare' is the most common essere verb. The agreement rule means Italians reveal their gender every time they use the past tense with essere. 'Sono andata al cinema' tells you the speaker is female, without needing to say so explicitly."},

      {type:"teach", trg:"sei arrivato/a", src:"you arrived", pos:"verb", gender:null,
       note:"Passato prossimo of 'arrivare' with essere.\nMale: sei arrivato. Female: sei arrivata.",
       example:"A: Quando sei arrivato?\nB: Sono arrivato un'ora fa.",
       exampleSrc:"A: When did you arrive?\nB: I arrived an hour ago.",
       funFact:"'Arrivare' uses essere because it describes reaching a destination (movement to a place). Compare: 'ho camminato per un'ora' (avere, no destination) vs. 'sono arrivato a casa' (essere, reached a specific place). The destination is the key."},

      {type:"teach", trg:"e partito/a", src:"he/she left / departed", pos:"verb", gender:null,
       note:"Passato prossimo of 'partire' with essere.\nMale: e partito. Female: e partita.",
       example:"A: Dov'e Marco?\nB: E partito per Roma stamattina.",
       exampleSrc:"A: Where is Marco?\nB: He left for Rome this morning.",
       funFact:"'Partire' (to leave) and 'arrivare' (to arrive) are natural opposites, and both use essere. Movement verbs come in pairs: andare/venire, partire/arrivare, salire/scendere, entrare/uscire. All use essere."},

      {type:"teach", trg:"siamo tornati/e", src:"we returned / we came back", pos:"verb", gender:null,
       note:"Passato prossimo of 'tornare' with essere.\nMale/mixed: siamo tornati. All female: siamo tornate.",
       example:"A: Quando siete tornati?\nB: Siamo tornati ieri sera.",
       exampleSrc:"A: When did you come back?\nB: We came back last night.",
       funFact:"'Tornare' uses essere because it describes returning to a place. The plural agreement adds -i (masculine/mixed) or -e (all feminine). A group of 99 women and 1 man uses the masculine plural 'tornati.' Italian grammar defaults to masculine for mixed groups."},

      {type:"teach", trg:"sono venuto/a", src:"I came", pos:"verb", gender:null,
       note:"Passato prossimo of 'venire' with essere.\nIrregular participle: venuto (not 'venito').",
       example:"A: Perche sei venuto?\nB: Sono venuto per la festa.",
       exampleSrc:"A: Why did you come?\nB: I came for the party.",
       funFact:"'Venire' (to come) is the opposite of 'andare' (to go). 'Andare' goes away from the speaker, 'venire' comes toward the speaker. Both use essere. From Latin 'venire,' which also gave English 'venture,' 'advent,' and 'convention.'"},

      {type:"teach", trg:"sono uscito/a", src:"I went out / I left", pos:"verb", gender:null,
       note:"Passato prossimo of 'uscire' with essere.\nIrregular present: esco, esci, esce.",
       example:"A: A che ora sei uscito?\nB: Sono uscito alle otto.",
       exampleSrc:"A: What time did you go out?\nB: I went out at eight.",
       funFact:"'Uscire' means to go out, to exit. From Latin 'exire' (to go out). English 'exit' comes from the same root. 'Uscire' has an irregular present tense (esco, esci, esce) but a regular past participle (uscito). It always takes essere."},

      // Quiz steps
      {type:"mc", q:"Why does the past participle change with 'essere'?",
       opts:["It must agree with the subject in gender and number","It is always irregular regardless of the subject used","It stays the same no matter who the speaker is","It agrees with the direct object, not the subject"],
       ans:"It must agree with the subject in gender and number",
       hint:"Male: -o, female: -a, male/mixed plural: -i, all-female plural: -e. The ending shifts based on who is doing the action."},

      {type:"fb", s:"Dove sei {1} ieri?",
       a:["andato"],
       opts:["andato","andare","fatto","preso"],
       hint:"The question asks where you went (assuming male). This is the past participle of 'andare.'",
       sSrc:"Where did you {1} yesterday?"},

      {type:"match", pairs:[
        {trg:"sono andato/a", src:"I went"},
        {trg:"sei arrivato/a", src:"you arrived"},
        {trg:"e partito/a", src:"he/she left"},
        {trg:"sono venuto/a", src:"I came"},
        {trg:"sono uscito/a", src:"I went out"}
      ]},

      {type:"mc", q:"Which helper verb does 'arrivare' use in the past?",
       opts:["Avere","Essere","Stare","Fare"],
       ans:"Essere",
       hint:"Movement verbs with a destination use this helper. 'Sono arrivato' not 'ho arrivato.'"},

      {type:"fb", s:"Marco {1} partito per Roma.",
       a:["e"],
       opts:["e","ha","sono","siamo"],
       hint:"Marco is 'he' (third person singular). Partire uses essere. Which form of essere matches?",
       sSrc:"Marco {1} left for Rome."},

      {type:"mc", q:"A woman says 'I went to Rome.' Which is correct?",
       opts:["Ho andata a Roma","Sono andato a Roma","Sono andata a Roma","Ho andato a Roma"],
       ans:"Sono andata a Roma",
       hint:"Female speaker, so the participle ends in -a. The verb uses essere, not avere."},

      {type:"fb", s:"{1} tornati ieri sera.",
       a:["Siamo"],
       opts:["Siamo","Sono","Hanno","Abbiamo"],
       hint:"The subject is 'we' (noi). Which form of 'essere' matches the first person plural?",
       sSrc:"We {1} back last night."},

      {type:"mc", q:"What memory trick helps remember which verbs use essere?",
       opts:["Only verbs ending in -ire automatically use essere","All Italian irregular verbs automatically use essere","Only 'andare' uses essere and absolutely no other Italian verbs do","House model: entering, leaving, going up/down use essere"],
       ans:"House model: entering, leaving, going up/down use essere",
       hint:"Picture a building. Verbs describing movement around it (enter, exit, arrive, depart) take the same helper."}
    ]},

    {id:"itv2_u12l2", title:"Verbi di movimento", icon:"\uD83C\uDFC3", xp:15, board:true, steps:[
      {type:"intro", title:"Verbi di movimento",
       desc:"Master the most common movement and state-change verbs that use 'essere' in the passato prossimo. These verbs describe how people move from place to place.",
       goals:["Learn key movement verbs that use essere","Practice participle agreement patterns","Build sentences about past movement"]},

      {type:"teach", trg:"andare", src:"to go", pos:"verb", gender:null,
       note:"Irregular. Present: vado, vai, va, andiamo, andate, vanno.\nPast: sono andato/a. Always uses essere.",
       example:"A: Dove vai?\nB: Vado al supermercato.",
       exampleSrc:"A: Where are you going?\nB: I am going to the supermarket.",
       funFact:"'Andare' has no clear Latin origin. It may come from Latin 'ambulare' (to walk) or 'adnare' (to swim toward). Its present tense is completely irregular (vado, vai, va, vanno). In the past: sono andato/a/i/e."},

      {type:"teach", trg:"venire", src:"to come", pos:"verb", gender:null,
       note:"Irregular. Present: vengo, vieni, viene, veniamo, venite, vengono.\nPast: sono venuto/a.",
       example:"A: Vieni alla festa?\nB: Si, vengo volentieri!",
       exampleSrc:"A: Are you coming to the party?\nB: Yes, I am coming gladly!",
       funFact:"From Latin 'venire' (to come). English 'venture,' 'advent' (coming), 'convention' (coming together), and 'souvenir' (a memory that comes back) all share this root. 'Vengo' (I come) shows a stem change to 'veng-.'"},

      {type:"teach", trg:"partire", src:"to leave / depart", pos:"verb", gender:null,
       note:"Regular -ire verb. Present: parto, parti, parte.\nPast: sono partito/a. Uses essere.",
       example:"A: A che ora parte il treno?\nB: Parte alle nove.",
       exampleSrc:"A: What time does the train leave?\nB: It leaves at nine.",
       funFact:"From Latin 'partire' (to divide). When you depart, you 'divide' yourself from a place. English 'depart' and 'part' come from the same root. The participle is regular (partito), making it easier to conjugate than andare or venire."},

      {type:"teach", trg:"arrivare", src:"to arrive", pos:"verb", gender:null,
       note:"Regular -are verb. Present: arrivo, arrivi, arriva.\nPast: sono arrivato/a. Uses essere.",
       example:"A: Il treno e arrivato in orario?\nB: Si, alle nove in punto.",
       exampleSrc:"A: Did the train arrive on time?\nB: Yes, at nine sharp.",
       funFact:"From 'ad ripam' (to the riverbank). Note: 'in orario' means on time, 'in ritardo' means late, 'in anticipo' means early. These three phrases are essential for Italian travel and daily life."},

      {type:"teach", trg:"uscire", src:"to go out / to exit", pos:"verb", gender:null,
       note:"Irregular present: esco, esci, esce, usciamo, uscite, escono.\nPast: sono uscito/a. Uses essere.",
       example:"A: Vuoi uscire stasera?\nB: Si, usciamo!",
       exampleSrc:"A: Do you want to go out tonight?\nB: Yes, let's go out!",
       funFact:"From Latin 'exire' (to go out). 'Uscire' covers going out socially ('uscire con gli amici'), leaving a building ('uscire di casa'), and exiting ('l'uscita' = the exit). The present tense stem changes to 'esc-' in four of six forms."},

      {type:"teach", trg:"tornare", src:"to return / come back", pos:"verb", gender:null,
       note:"Regular -are verb. Present: torno, torni, torna.\nPast: sono tornato/a. Uses essere.",
       example:"A: A che ora torni a casa?\nB: Torno alle sette.",
       exampleSrc:"A: What time do you come home?\nB: I come back at seven.",
       funFact:"From Latin 'tornare' (to turn on a lathe), through the idea of 'turning back.' English 'turn,' 'return,' 'tournament' (competitors take turns), and 'attorney' (one who turns to act for another) all share this root."},

      {type:"teach", trg:"salire", src:"to go up / to get on", pos:"verb", gender:null,
       note:"Irregular present: salgo, sali, sale, saliamo, salite, salgono.\nPast: sono salito/a. Uses essere.",
       example:"A: Siamo saliti al quinto piano.\nB: Senza ascensore? Complimenti!",
       exampleSrc:"A: We went up to the fifth floor.\nB: Without an elevator? Well done!",
       funFact:"From Latin 'salire' (to jump, leap). The same root gave English 'salient' (jumping out, prominent) and 'salmon' (the leaping fish). In Italian, 'salire' also means to board a bus or train: 'salire sull'autobus.'"},

      {type:"teach", trg:"scendere", src:"to go down / to get off", pos:"verb", gender:null,
       note:"Irregular past participle: sceso (not 'scenduto').\nPast: sono sceso/a. Uses essere. Opposite of salire.",
       example:"A: A che fermata scendiamo?\nB: Scendiamo alla prossima.",
       exampleSrc:"A: At which stop do we get off?\nB: We get off at the next one.",
       funFact:"From Latin 'descendere' (to climb down). English 'descend,' 'descent,' and 'condescend' share this root. The past participle 'sceso' is irregular. 'Scendere' pairs with 'salire': salire sull'autobus (get on), scendere dall'autobus (get off)."},

      // Quiz steps
      {type:"mc", q:"Which of these verbs does NOT use essere?",
       opts:["Mangiare","Andare","Venire","Partire"],
       ans:"Mangiare",
       hint:"Three of these are movement verbs (essere). One is about eating, which you do in a place (avere)."},

      {type:"fb", s:"A che ora {1} il treno?",
       a:["parte"],
       opts:["parte","arriva","sale","va"],
       hint:"When does the train leave? This is the third person of the verb meaning 'to depart.'",
       sSrc:"What time does the train {1}?"},

      {type:"match", pairs:[
        {trg:"andare", src:"to go"},
        {trg:"venire", src:"to come"},
        {trg:"partire", src:"to leave"},
        {trg:"salire", src:"to go up"},
        {trg:"scendere", src:"to go down"}
      ]},

      {type:"mc", q:"What is the irregular past participle of 'scendere'?",
       opts:["Scenduto","Sceso","Scendato","Scendito"],
       ans:"Sceso",
       hint:"This participle is irregular, not following any standard pattern. From Latin 'descendere.'"},

      {type:"fb", s:"Vuoi {1} stasera?",
       a:["uscire"],
       opts:["uscire","andare","partire","salire"],
       hint:"You want to leave the house for a social evening. This verb means 'to go out.'",
       sSrc:"Do you want to {1} tonight?"},

      {type:"mc", q:"What does 'salire sull'autobus' mean?",
       opts:["To see the bus","To drive the bus","To get on the bus","To wait for the bus"],
       ans:"To get on the bus",
       hint:"This verb means to go up or to board. You climb aboard the vehicle."},

      {type:"fb", s:"A che ora {1} a casa?",
       a:["torni"],
       opts:["torni","parti","esci","sali"],
       hint:"Someone asks when you will come back home. This verb means 'to return.'",
       sSrc:"What time do you {1} home?"},

      {type:"mc", q:"What is the opposite of 'salire'?",
       opts:["Tornare","Partire","Uscire","Scendere"],
       ans:"Scendere",
       hint:"One means to go up, the other to go down. They form a natural pair, both using essere."}
    ]},

    {id:"itv2_u12l3", title:"L'accordo del participio", icon:"\u2696\uFE0F", xp:15, board:true, steps:[
      {type:"intro", title:"L'accordo del participio",
       desc:"Practice the agreement of past participles with essere. The ending changes based on who is speaking or being described. This is a key A2 grammar skill.",
       goals:["Master masculine/feminine agreement","Master singular/plural agreement","Identify the subject to choose the correct ending"]},

      {type:"tip", title:"Participle agreement with essere",
       text:"With essere, the participle agrees with the SUBJECT:\n\nSingular:\n-o = masculine (Marco e andato)\n-a = feminine (Maria e andata)\n\nPlural:\n-i = masculine or mixed (Marco e Luca sono andati)\n-e = all feminine (Maria e Lucia sono andate)\n\nMixed groups always use masculine plural (-i).",
       deepDive:"This agreement does not happen with avere (usually). Compare: 'Maria ha mangiato' (no change) vs. 'Maria e andata' (feminine -a). The participle with essere works like an adjective describing the subject."},

      {type:"teach", trg:"andato", src:"went (masculine singular)", pos:"verb", gender:"m",
       note:"For one male subject. 'Marco e andato al cinema.'\nThe -o ending signals masculine singular.",
       example:"A: Marco e andato al lavoro?\nB: Si, e andato presto stamattina.",
       exampleSrc:"A: Did Marco go to work?\nB: Yes, he went early this morning.",
       funFact:"The masculine singular -o is the 'default' form you see in dictionaries. When Italians hear 'sono andato,' they immediately know the speaker is male. Gender is encoded in everyday past tense conversation."},

      {type:"teach", trg:"andata", src:"went (feminine singular)", pos:"verb", gender:"f",
       note:"For one female subject. 'Maria e andata al cinema.'\nThe -a ending signals feminine singular.",
       example:"A: Maria e andata in vacanza?\nB: Si, e andata in Sardegna.",
       exampleSrc:"A: Did Maria go on vacation?\nB: Yes, she went to Sardinia.",
       funFact:"When a woman texts 'Sono andata al supermercato,' the -a reveals she is female. In written Italian, this gender marking in past tenses is constant and unavoidable. Some modern writers experiment with gender-neutral endings like the 'schwa' symbol."},

      {type:"teach", trg:"andati", src:"went (masculine/mixed plural)", pos:"verb", gender:"m",
       note:"For male or mixed groups. 'Marco e Luca sono andati.'\nAlso used for one male + one female: 'Marco e Maria sono andati.'",
       example:"A: I ragazzi sono andati a scuola?\nB: Si, sono andati alle otto.",
       exampleSrc:"A: Did the boys go to school?\nB: Yes, they went at eight.",
       funFact:"Italian grammar uses masculine as the 'default' for mixed groups. Even 99 women and 1 man use the masculine plural ending -i. This rule is debated in modern Italian linguistics, with some advocating for more inclusive language."},

      {type:"teach", trg:"andate", src:"went (all-feminine plural)", pos:"verb", gender:"f",
       note:"ONLY for all-female groups. 'Maria e Lucia sono andate.'\nIf even one male is in the group, use -i instead.",
       example:"A: Le ragazze sono andate alla festa?\nB: Si, sono andate insieme.",
       exampleSrc:"A: Did the girls go to the party?\nB: Yes, they went together.",
       funFact:"The all-feminine plural -e is only used when EVERY person in the group is female. 'Le mie amiche sono andate' (my female friends went). This form is less common in everyday speech because mixed groups always default to masculine -i."},

      {type:"teach", trg:"nata", src:"born (feminine)", pos:"verb", gender:"f",
       note:"Past participle of 'nascere' (to be born). Uses essere.\n'Sono nata a Milano' = I was born in Milan (female speaker).",
       example:"A: Dove sei nata?\nB: Sono nata a Firenze.",
       exampleSrc:"A: Where were you born?\nB: I was born in Florence.",
       funFact:"'Nascere' (to be born) always uses essere: 'sono nato/a' (I was born). This is one of the first questions Italians ask: 'Di dove sei?' or 'Dove sei nato/a?' Birth city is a core part of Italian identity. People strongly identify with their hometown."},

      {type:"teach", trg:"stato/a", src:"been (past participle of essere)", pos:"verb", gender:null,
       note:"Irregular past participle of 'essere' (to be).\n'Sono stato/a' = I have been. Uses essere to form its own past!",
       example:"A: Sei mai stato in Italia?\nB: Si, sono stato a Roma e Venezia.",
       exampleSrc:"A: Have you ever been to Italy?\nB: Yes, I have been to Rome and Venice.",
       funFact:"'Essere' uses itself as its own helper: 'sono stato' (I have been). This feels circular but is correct. 'Stato' also means 'state' (as in a political state). The connection: a state is something that 'is' or 'exists.' 'Gli Stati Uniti' = the United States."},

      {type:"teach", trg:"rimasto/a", src:"stayed / remained", pos:"verb", gender:null,
       note:"Irregular past participle of 'rimanere' (to stay, remain).\nUses essere: 'sono rimasto/a a casa.'",
       example:"A: Perche non sei venuto?\nB: Sono rimasto a casa. Stavo male.",
       exampleSrc:"A: Why did you not come?\nB: I stayed home. I felt ill.",
       funFact:"'Rimanere' (to remain) uses essere because it describes a state. Irregular participle: rimasto (not 'rimanuto'). From Latin 'remanere' (to stay behind). English 'remain' comes from the French version of the same word."},

      // Quiz steps
      {type:"mc", q:"A woman says she went to the cinema. Which is correct?",
       opts:["Sono andata al cinema","Sono andato al cinema","Ho andata al cinema","Ha andato al cinema"],
       ans:"Sono andata al cinema",
       hint:"Female speaker = -a ending. Movement verb = essere (not avere). First person = s...."},

      {type:"fb", s:"Marco e Luca sono {1} a scuola.",
       a:["andati"],
       opts:["andati","andate","andato","andata"],
       hint:"Two males = masculine plural. The participle needs the -i ending for a male or mixed group.",
       sSrc:"Marco and Luca {1} to school."},

      {type:"match", pairs:[
        {trg:"andato", src:"went (masc. sing.)"},
        {trg:"andata", src:"went (fem. sing.)"},
        {trg:"andati", src:"went (masc. plural)"},
        {trg:"andate", src:"went (fem. plural)"},
        {trg:"stato/a", src:"been"}
      ]},

      {type:"mc", q:"Marco and Maria went to Rome. Which ending?",
       opts:["Sono andate (feminine plural)","Sono andati (masculine plural)","Sono andato (masculine singular)","Sono andata (feminine singular)"],
       ans:"Sono andati (masculine plural)",
       hint:"Mixed group (one male, one female) always uses the m... p... ending. This is the Italian grammar rule."},

      {type:"fb", s:"Dove sei {1}?",
       a:["nata"],
       opts:["nata","nato","nati","nate"],
       hint:"The question is addressed to a woman (sei + feminine). The participle of 'nascere' needs the -a ending.",
       sSrc:"Where were you {1}?"},

      {type:"mc", q:"What is unusual about the past tense of 'essere'?",
       opts:["It has no past tense form at all in Italian","It unexpectedly uses avere as its helper verb","It uses itself as its own helper verb","It does not agree with the subject gender"],
       ans:"It uses itself as its own helper verb",
       hint:"'Sono stato' combines 'sono' (essere) + 'stato' (past participle of essere). This makes 'essere' both the auxiliary AND the word being put into the past."},

      {type:"fb", s:"Sono {1} a casa. Stavo male.",
       a:["rimasto"],
       opts:["rimasto","andato","partito","uscito"],
       hint:"You did not go anywhere. You stayed home because you felt ill. From 'rimanere' (to remain).",
       sSrc:"I {1} home. I felt ill."},

      {type:"mc", q:"When do you use the -e plural ending (andate)?",
       opts:["For formal or polite speech","For any plural group of people","For any mixed group with both genders","Only when ALL subjects are female"],
       ans:"Only when ALL subjects are female",
       hint:"Even one person of the opposite gender forces the ending to switch to -i. The -e ending requires complete uniformity in the group."}
    ]},
    EXP_12_L1, EXP_12_L2, EXP_12_L3,
  ]
};
export default UNIT_12;
