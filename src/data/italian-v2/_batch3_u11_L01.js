// Batch 3. Unit 11, Lesson 1: Piu participi irregolari (More Irregular Participles)
const BATCH3_U11_L1 = {
  id:"itv2_u11l_b3_1", title:"Piu participi irregolari", icon:"\uD83D\uDD04", xp:15, board:true,
  steps:[
    {type:"intro", title:"Piu participi irregolari",
     desc:"Expand your passato prossimo with more essential irregular past participles. These high-frequency verbs appear in everyday conversation constantly.",
     goals:["Learn more irregular past participles","Use them confidently in conversation","Narrate past events with varied vocabulary"]},

    {type:"teach", trg:"messo", src:"put / placed (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'mettere' (to put).\n'Ho messo' = I put. From Latin 'missum.'",
     example:"A: Dove hai messo le chiavi?\nB: Le ho messe sul tavolo.",
     exampleSrc:"A: Where did you put the keys?\nB: I put them on the table.",
     funFact:"'Mettere' is one of Italian's most versatile verbs: mettersi (to put on clothes), mettere in ordine (to tidy up), mettere da parte (to save money), metterci (to take time). Its irregular participle 'messo' must be memorized."},

    {type:"teach", trg:"speso", src:"spent (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'spendere' (to spend money).\n'Ho speso troppo' = I spent too much.",
     example:"A: Quanto hai speso in vacanza?\nB: Ho speso troppo! Ma ne valeva la pena.",
     exampleSrc:"A: How much did you spend on vacation?\nB: I spent too much! But it was worth it.",
     funFact:"'Spendere' comes from Latin 'expendere' (to weigh out money). English 'spend,' 'expense,' and 'dispensary' share this root. The irregularity pattern (spendere > speso) follows the same model as prendere > preso and scendere > sceso."},

    {type:"teach", trg:"rimasto", src:"stayed / remained (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'rimanere' (to stay/remain).\nUses essere: 'sono rimasto/a.' Not 'rimanuto.'",
     example:"A: Quanto tempo sei rimasto a Firenze?\nB: Sono rimasto tre giorni.",
     exampleSrc:"A: How long did you stay in Florence?\nB: I stayed three days.",
     funFact:"'Rimanere' uses essere because it describes a state (staying in one place). The participle agrees with the subject: 'Maria e rimasta a casa' (feminine). This verb appears constantly in Italian: 'Quanto rimane?' (How much is left?), 'Rimani qui' (Stay here)."},

    {type:"teach", trg:"scelto", src:"chosen / selected (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'scegliere' (to choose).\n'Ho scelto' = I chose. From Latin 'selectum.'",
     example:"A: Hai scelto il ristorante?\nB: Si, ho scelto quello vicino al mare.",
     exampleSrc:"A: Did you choose the restaurant?\nB: Yes, I chose the one near the sea.",
     funFact:"'Scegliere' comes from Latin 'ex-eligere' (to pick out), the same root as English 'select' and 'elect.' The participle 'scelto' compresses centuries of sound change. 'La scelta' (the choice) is the related noun, used in everything from menus to life decisions."},

    {type:"teach", trg:"successo", src:"happened (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'succedere' (to happen).\nUses essere: 'e successo' = it happened. Also means 'success' (noun).",
     example:"A: Cos'e successo?\nB: C'e stato un incidente in strada.",
     exampleSrc:"A: What happened?\nB: There was an accident in the street.",
     funFact:"'Successo' as a past participle means 'happened.' As a noun, 'il successo' means 'success.' 'Cos'e successo?' (What happened?) is one of the most common Italian questions. The double meaning comes from Latin 'successum' (the thing that followed/resulted)."},

    {type:"teach", trg:"deciso", src:"decided (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'decidere' (to decide).\n'Abbiamo deciso' = we decided. From Latin 'decisum.'",
     example:"A: Avete deciso dove andare?\nB: Si, abbiamo deciso di andare in Sicilia.",
     exampleSrc:"A: Have you decided where to go?\nB: Yes, we decided to go to Sicily.",
     funFact:"'Decidere' comes from Latin 'de-caedere' (to cut off). A decision literally 'cuts off' other options. English 'decide,' 'decisive,' and 'incision' share this cutting root. 'Decidersi' (reflexive) means 'to make up your mind,' adding urgency."},

    {type:"teach", trg:"perso", src:"lost (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'perdere' (to lose).\n'Ho perso' = I lost. Also 'perduto' (literary).",
     example:"A: Ho perso il treno!\nB: Ce n'e un altro tra mezz'ora.",
     exampleSrc:"A: I missed the train!\nB: There is another one in half an hour.",
     funFact:"'Perdere' has two participles: 'perso' (everyday) and 'perduto' (literary). Dante's 'la diritta via era smarrita' uses the literary form. 'Perdersi' (reflexive) means to get lost: 'Mi sono perso a Venezia' (I got lost in Venice) is a classic tourist experience."},

    {type:"teach", trg:"conosciuto", src:"met / known (past participle)", pos:"verb", gender:null,
     note:"Regular past participle of 'conoscere' (to know/meet).\n'Ho conosciuto' = I met (for the first time).",
     example:"A: Dove hai conosciuto Maria?\nB: L'ho conosciuta all'università.",
     exampleSrc:"A: Where did you meet Maria?\nB: I met her at university.",
     funFact:"'Conoscere' in the passato prossimo specifically means 'to meet for the first time,' not just 'to know.' 'Ho conosciuto Marco ieri' = I met Marco yesterday. The present tense 'conosco Marco' means 'I know Marco.' This tense distinction is important and does not exist in English."},

    {type:"teach", trg:"promesso", src:"promised (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'promettere' (to promise).\n'Ho promesso' = I promised. From Latin 'promissum.'",
     example:"A: Mi hai promesso di venire.\nB: Lo so, e manterro la promessa.",
     exampleSrc:"A: You promised me you would come.\nB: I know, and I will keep the promise.",
     funFact:"'Promettere' comes from Latin 'pro-mittere' (to send forward, to pledge). The same root gave 'compromesso' (compromise, literally 'a mutual promise'). 'Mantenere una promessa' (to keep a promise) is the standard expression. Breaking a promise is 'rompere una promessa.'"},

    {type:"teach", trg:"rotto", src:"broken (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'rompere' (to break).\n'Ho rotto' = I broke. From Latin 'ruptum.'",
     example:"A: Chi ha rotto il bicchiere?\nB: Mi dispiace, l'ho rotto io.",
     exampleSrc:"A: Who broke the glass?\nB: I am sorry, I broke it.",
     funFact:"'Rotto' from Latin 'ruptum' also gave English 'rupture,' 'bankrupt' (broken bank), and 'corrupt' (thoroughly broken). In Italian, 'rotto' is used both literally (broken objects) and figuratively: 'rompere le scatole' (to break the boxes) means 'to annoy someone.'"},

    {type:"teach", trg:"offerto", src:"offered (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'offrire' (to offer).\n'Ti offro un caffè' = I will buy you a coffee.",
     example:"A: Chi ha offerto la cena?\nB: L'ha offerta Marco. Molto generoso!",
     exampleSrc:"A: Who paid for dinner?\nB: Marco paid. Very generous!",
     funFact:"'Offrire' in Italian often means 'to treat someone' or 'to pay for.' 'Offro io!' means 'It is my treat!' This is important in Italian social culture, where people often compete to pay the bill. The phrase 'lascia stare, offro io' (leave it, I am paying) is heard constantly."},

    {type:"teach", trg:"spento", src:"turned off / extinguished (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'spegnere' (to turn off).\n'Ho spento la luce' = I turned off the light.",
     example:"A: Hai spento il gas?\nB: Si, ho spento tutto prima di uscire.",
     exampleSrc:"A: Did you turn off the gas?\nB: Yes, I turned everything off before leaving.",
     funFact:"'Spegnere' covers turning off lights, appliances, and extinguishing fires. 'Spegnere il telefono' (turn off the phone) is a common request in Italian cinemas and theaters. The irregular pattern (spegnere > spento) is unique and must be memorized."},

    {type:"teach", trg:"pianto", src:"cried / wept (past participle)", pos:"verb", gender:null,
     note:"Irregular past participle of 'piangere' (to cry).\n'Ho pianto' = I cried. From Latin 'planctum.'",
     example:"A: Hai pianto al film?\nB: Si, era molto commovente.",
     exampleSrc:"A: Did you cry at the movie?\nB: Yes, it was very touching.",
     funFact:"Italians are not ashamed of crying. 'Piangere di gioia' (to cry with joy) and 'piangere di emozione' (to cry from emotion) are considered natural reactions. Italian culture embraces emotional expression. The related noun 'il pianto' (the crying/weeping) appears in literature and opera."},

    // Quiz steps
    {type:"mc", q:"What is the past participle of 'mettere'?",
     opts:["Messo","Mettuto","Mettato","Mettito"],
     ans:"Messo",
     hint:"Completely irregular. 'Dove hai m... le chiavi?' is one of the most common Italian questions."},

    {type:"fb", s:"Cos'e {1}?",
     a:["successo"],
     opts:["successo","deciso","messo","perso"],
     hint:"What happened? This past participle of 'succedere' uses essere. The same word also means 'success' as a noun.",
     sSrc:"What {1}?"},

    {type:"match", pairs:[
      {trg:"messo", src:"put"},
      {trg:"scelto", src:"chosen"},
      {trg:"deciso", src:"decided"},
      {trg:"perso", src:"lost"},
      {trg:"rotto", src:"broken"}
    ]},

    {type:"mc", q:"What does 'conoscere' in the passato prossimo specifically mean?",
     opts:["To recognize someone","To meet for the first time","To forget","To know well"],
     ans:"To meet for the first time",
     hint:"'Ho conosciuto Marco ieri' = I met Marco yesterday. In the present tense, 'conosco Marco' means I know Marco. The tense changes the meaning."},

    {type:"fb", s:"Ho {1} il treno!",
     a:["perso"],
     opts:["perso","rotto","spento","messo"],
     hint:"You missed the train. This past participle of 'perdere' means 'lost' or 'missed.' A common experience in Italy.",
     sSrc:"I {1} the train!"},

    {type:"mc", q:"What does 'Offro io!' mean in Italian social culture?",
     opts:["I offer my help","I offer my opinion","I am paying / it is my treat","I will cook dinner"],
     ans:"I am paying / it is my treat",
     hint:"Italians often compete to pay the bill. This phrase declares you are treating everyone. It is a gesture of generosity."},

    {type:"fb", s:"Hai {1} il gas prima di uscire?",
     a:["spento"],
     opts:["spento","rotto","messo","aperto"],
     hint:"Did you turn off the gas? This irregular past participle of 'spegnere' is essential for household safety vocabulary.",
     sSrc:"Did you turn {1} the gas before leaving?"},

    {type:"mc", q:"Which pattern do speso, preso, and sceso share?",
     opts:["They all have regular -uto endings","They all use essere as their auxiliary","They all end in -ato like regular -are verbs","They all come from -endere verbs with -eso ending"],
     ans:"They all come from -endere verbs with -eso ending",
     hint:"These three all belong to the same conjugation group. Their past participles follow an identical transformation from the infinitive stem."}
  ,{type:"match",pairs:[{trg:"speso",src:"spent (past participle)"},{trg:"rimasto",src:"stayed / remained (past participle)"},{trg:"conosciuto",src:"met / known (past participle)"},{trg:"offerto",src:"offered (past participle)"},{trg:"pianto",src:"cried / wept (past participle)"}]}]
};
export default BATCH3_U11_L1;
