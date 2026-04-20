// Batch 3 — Unit 19, Lesson 2: Dinamiche relazionali (Relationship Dynamics)
const BATCH3_U19_L2 = {
  id:"itv2_u19l_b3_2", title:"Dinamiche relazionali", icon:"\uD83D\uDC94", xp:15, board:true,
  steps:[
    {type:"intro", title:"Dinamiche relazionali",
     desc:"Learn vocabulary for describing relationship dynamics, conflicts, and emotional growth. These words help you discuss complex interpersonal situations.",
     goals:["Describe relationship conflicts and resolutions","Express emotional needs and boundaries","Discuss personal growth and change"]},

    {type:"teach", trg:"il tradimento", src:"the betrayal / cheating", pos:"noun", gender:"m",
     note:"Masculine. From 'tradire' (to betray).\n'Tradimento sentimentale' = infidelity.",
     example:"A: Il tradimento e difficile da perdonare.\nB: Ci vuole molto tempo e molto lavoro.",
     exampleSrc:"A: Betrayal is hard to forgive.\nB: It takes a lot of time and work.",
     funFact:"'Tradire' comes from Latin 'tradere' (to hand over), the same root as 'tradition' (handed down). Dante placed traitors in the lowest circle of Hell in his Inferno. In Italian culture, 'tradimento' carries enormous weight, whether in love, friendship, or politics."},

    {type:"teach", trg:"perdonare", src:"to forgive", pos:"verb", gender:null,
     note:"Regular -are verb. From Latin 'perdonare' (to give completely).\n'Ti perdono' = I forgive you.",
     example:"A: Mi perdoni?\nB: Si, ti perdono. Ma non dimenticare.",
     exampleSrc:"A: Do you forgive me?\nB: Yes, I forgive you. But do not forget.",
     funFact:"'Perdonare' literally means 'to give through/completely' (per + donare). Forgiveness in Italian culture often comes with 'pero non dimenticare' (but do not forget). The balance between forgiving and remembering is a recurring theme in Italian family dynamics."},

    {type:"teach", trg:"la comprensione", src:"the understanding / comprehension", pos:"noun", gender:"f",
     note:"Feminine. From 'comprendere' (to understand).\n'Avere comprensione' = to show understanding.",
     example:"A: Grazie per la tua comprensione.\nB: Siamo amici, e normale.",
     exampleSrc:"A: Thanks for your understanding.\nB: We are friends, it is normal.",
     funFact:"'Comprensione' means both intellectual understanding and emotional empathy. 'Essere comprensivo/a' means being understanding (of others' feelings). This is different from 'completo/a' (comprehensive). The ability to show 'comprensione' is highly valued in Italian social bonds."},

    {type:"teach", trg:"la pazienza", src:"the patience", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'patientia' (endurance, suffering).\n'Avere pazienza' = to be patient.",
     example:"A: Ci vuole molta pazienza con i bambini.\nB: Si, ma ne vale la pena.",
     exampleSrc:"A: It takes a lot of patience with children.\nB: Yes, but it is worth it.",
     funFact:"'Pazienza' comes from 'patire' (to suffer, endure). Italian culture places high value on patience, especially in family relationships. The exclamation 'Pazienza!' means 'Oh well!' or 'What can you do?' and reflects Italian acceptance of life's imperfections."},

    {type:"teach", trg:"litigare", src:"to argue / to quarrel", pos:"verb", gender:null,
     note:"Regular -are verb. From Latin 'litigare' (to dispute).\nAlready taught in L2, recycled for deeper practice.",
     example:"A: Hanno litigato per ore.\nB: Per quale motivo?",
     exampleSrc:"A: They argued for hours.\nB: For what reason?",
     funFact:"Italian arguments are often loud and expressive but not necessarily hostile. What sounds like a fight to foreigners may be a passionate discussion. Italians can argue intensely at dinner and then embrace warmly. 'Litigare bene' (arguing well) is almost considered a social skill."},

    {type:"teach", trg:"il compromesso", src:"the compromise", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'compromissum' (mutual promise).\n'Trovare un compromesso' = to find a compromise.",
     example:"A: Dobbiamo trovare un compromesso.\nB: Sono d'accordo, parliamone.",
     exampleSrc:"A: We need to find a compromise.\nB: I agree, let us talk about it.",
     funFact:"'Compromesso' literally means 'a mutual promise' (com + promesso). In Italian politics, 'compromesso storico' (historic compromise) referred to the attempted alliance between Communists and Christian Democrats in the 1970s. In relationships, finding a 'compromesso' is essential for Italian couples."},

    {type:"teach", trg:"rispettare", src:"to respect", pos:"verb", gender:null,
     note:"Regular -are verb. From Latin 'respectare' (to look back at).\n'Rispettare le opinioni' = to respect opinions.",
     example:"A: Bisogna rispettare le scelte degli altri.\nB: Hai ragione, anche se non le condividiamo.",
     exampleSrc:"A: We must respect others' choices.\nB: You are right, even if we do not share them.",
     funFact:"'Rispetto' (respect) is a cornerstone value in Italian culture, especially toward elders and family. 'Portare rispetto' (to show respect) is taught from childhood. 'Con tutto il rispetto' (with all due respect) is the Italian way of preceding a disagreement politely."},

    {type:"teach", trg:"la convivenza", src:"the cohabitation / living together", pos:"noun", gender:"f",
     note:"Feminine. From 'convivere' (to live together).\n'Convivenza pacifica' = peaceful coexistence.",
     example:"A: La convivenza non e sempre facile.\nB: Richiede compromessi quotidiani.",
     exampleSrc:"A: Living together is not always easy.\nB: It requires daily compromises.",
     funFact:"'Convivenza' in Italy refers to unmarried couples living together, which was taboo until recently. Italian law now recognizes 'unioni civili' (civil unions). The shift from mandatory marriage to accepted 'convivenza' represents one of Italy's biggest social changes in recent decades."},

    {type:"teach", trg:"sostenere", src:"to support / to sustain", pos:"verb", gender:null,
     note:"Irregular -ere verb. Past participle: sostenuto.\n'Ti sostengo' = I support you.",
     example:"A: Ti sostengo in qualsiasi decisione.\nB: Grazie, il tuo sostegno significa molto.",
     exampleSrc:"A: I support you in any decision.\nB: Thanks, your support means a lot.",
     funFact:"'Sostenere' means both physical support (holding up) and emotional support (backing someone). 'Il sostegno' (support) is the noun. Italian family culture emphasizes unconditional support: 'La famiglia ti sostiene sempre' (Family always supports you) is a deeply held belief."},

    {type:"teach", trg:"il legame", src:"the bond / tie", pos:"noun", gender:"m",
     note:"Masculine. From 'legare' (to bind, tie).\n'Legame familiare' = family bond.",
     example:"A: Il legame tra madre e figlio e fortissimo.\nB: E il legame più naturale che esista.",
     exampleSrc:"A: The bond between mother and child is very strong.\nB: It is the most natural bond that exists.",
     funFact:"'Legame' comes from 'legare' (to bind), from Latin 'ligare.' The same root gave English 'ligament,' 'league,' and 'obligation.' Italian culture places extraordinary emphasis on family bonds. 'I legami di sangue' (blood ties) are considered sacred in traditional Italian society."},

    {type:"teach", trg:"innamorarsi", src:"to fall in love", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Innamorarsi di' = to fall in love with.\n'Mi sono innamorato/a' = I fell in love.",
     example:"A: Mi sono innamorato di lei al primo sguardo.\nB: Che romantico! E lei?",
     exampleSrc:"A: I fell in love with her at first sight.\nB: How romantic! And her?",
     funFact:"'Innamorarsi' contains 'amore' (love) with the prefix 'in-' (into). Falling in love is literally 'entering into love.' 'Colpo di fulmine' (lightning strike) is the Italian expression for love at first sight. Italian culture romanticizes the sudden, overwhelming nature of falling in love."},

    {type:"teach", trg:"lasciarsi", src:"to break up / to leave each other", pos:"verb", gender:null,
     note:"Reciprocal reflexive. 'Si sono lasciati' = they broke up.\n'Lasciare qualcuno' = to leave someone (non-reflexive).",
     example:"A: Si sono lasciati dopo cinque anni.\nB: Mi dispiace molto. Sembravano felici.",
     exampleSrc:"A: They broke up after five years.\nB: I am very sorry. They seemed happy.",
     funFact:"'Lasciarsi' (reciprocal: they left each other) versus 'lasciare' (one-sided: one person left the other). The distinction matters socially. 'Ci siamo lasciati' (we left each other, mutual) sounds less dramatic than 'mi ha lasciato' (he/she left me, one-sided)."},

    // Quiz steps
    {type:"mc", q:"What does the exclamation 'Pazienza!' express?",
     opts:["Great anger","Accepting what cannot be changed (oh well)","Urgent impatience","Deep sadness"],
     ans:"Accepting what cannot be changed (oh well)",
     hint:"From 'patire' (to endure). This single word captures Italian philosophical acceptance of life's imperfections and frustrations."},

    {type:"fb", s:"Il {1} e difficile da perdonare.",
     a:["tradimento"],
     opts:["tradimento","compromesso","legame","rispetto"],
     hint:"Betrayal in love or friendship. Dante placed those who committed this in the lowest circle of Hell.",
     sSrc:"{1} is hard to forgive."},

    {type:"match", pairs:[
      {trg:"perdonare", src:"to forgive"},
      {trg:"rispettare", src:"to respect"},
      {trg:"sostenere", src:"to support"},
      {trg:"innamorarsi", src:"to fall in love"},
      {trg:"lasciarsi", src:"to break up"}
    ]},

    {type:"mc", q:"What is the difference between 'lasciarsi' and 'lasciare qualcuno'?",
     opts:["They mean the same thing","Lasciarsi = mutual breakup, lasciare = one-sided","Lasciarsi is formal, lasciare is casual","Lasciare is only for marriage"],
     ans:"Lasciarsi = mutual breakup, lasciare = one-sided",
     hint:"The reflexive form implies both people agreed. The non-reflexive implies one person ended it. The distinction carries social weight."},

    {type:"fb", s:"Dobbiamo trovare un {1}.",
     a:["compromesso"],
     opts:["compromesso","tradimento","legame","rimpianto"],
     hint:"A mutual agreement where both sides give something up. Literally a 'mutual promise.' Essential in relationships and politics.",
     sSrc:"We need to find a {1}."},

    {type:"mc", q:"What is 'colpo di fulmine' in Italian?",
     opts:["A sudden illness","Love at first sight (literally 'lightning strike')","A loud argument","A lucky coincidence"],
     ans:"Love at first sight (literally 'lightning strike')",
     hint:"Italian culture romanticizes the sudden, overwhelming nature of falling in l.... It hits like l..., without warning."},

    {type:"fb", s:"Il {1} tra madre e figlio e fortissimo.",
     a:["legame"],
     opts:["legame","tradimento","compromesso","rimorso"],
     hint:"The emotional tie between parent and child. From 'legare' (to bind). Same root as 'ligament' and 'obligation.'",
     sSrc:"The {1} between mother and child is very strong."},

    {type:"mc", q:"What value does 'portare rispetto' teach Italian children?",
     opts:["To always agree with adults","To show respect, especially to elders and family","To never speak in public","To avoid all arguments"],
     ans:"To show respect, especially to elders and family",
     hint:"R... is a cornerstone of Italian upbringing. 'Con tutto il rispetto' politely precedes any disagreement."}
  ,{type:"match",pairs:[{trg:"la comprensione",src:"the understanding / comprehension"},{trg:"la pazienza",src:"the patience"},{trg:"litigare",src:"to argue / to quarrel"},{trg:"la convivenza",src:"the cohabitation / living together"}]}]
};
export default BATCH3_U19_L2;
