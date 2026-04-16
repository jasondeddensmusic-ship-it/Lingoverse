// Batch 4 — Unit 12, Lesson 2: Reflexive Verbs in the Past
const BATCH4_U12_L2 = {
  id:"itv2_u12l_b4_2", title:"Riflessivi al passato", icon:"\uD83D\uDD04", xp:15, board:true,
  steps:[
    {type:"intro", title:"Riflessivi al passato",
     desc:"Learn how reflexive verbs work in the passato prossimo, always using essere with agreement.",
     goals:["Use reflexive verbs in the past tense","Apply correct participle agreement","Master common reflexive expressions"]},

    {type:"teach", trg:"svegliarsi / svegliato", src:"to wake up / woken up", pos:"verb", gender:null,
     note:"Reflexive: always takes essere. 'Mi sono svegliato/a' = I woke up.\nAgreement with subject required.",
     example:"A: A che ora ti sei svegliata?\nB: Mi sono svegliata alle sei.",
     exampleSrc:"A: What time did you wake up?\nB: I woke up at six.",
     funFact:"All reflexive verbs use essere in the passato prossimo. The pattern is: reflexive pronoun + essere + past participle with agreement. This rule has no exceptions: mi sono svegliato (m), mi sono svegliata (f)."},

    {type:"teach", trg:"vestirsi / vestito", src:"to get dressed / dressed", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono vestito/a' = I got dressed.\n'Vestirsi bene' = to dress well.",
     example:"A: Ti sei vestita in fretta?\nB: Si, mi sono vestita in cinque minuti!",
     exampleSrc:"A: Did you get dressed quickly?\nB: Yes, I got dressed in five minutes!",
     funFact:"Italians take 'vestirsi bene' (dressing well) seriously. The concept of 'bella figura' (making a good impression through appearance) drives Italian fashion culture. Even a trip to the supermarket requires acceptable clothing."},

    {type:"teach", trg:"lavarsi / lavato", src:"to wash oneself / washed", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono lavato/a' = I washed (myself).\n'Lavarsi le mani' = to wash one's hands.",
     example:"A: Ti sei lavato le mani?\nB: Si, prima di mangiare.",
     exampleSrc:"A: Did you wash your hands?\nB: Yes, before eating.",
     funFact:"With body parts, Italian uses 'lavarsi + article + body part' instead of possessive: 'mi lavo le mani' (I wash the hands, i.e., my hands). Using possessives with body parts sounds unnatural in Italian."},

    {type:"teach", trg:"prepararsi / preparato", src:"to get ready / gotten ready", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono preparato/a' = I got ready.\n'Preparati!' = Get ready!",
     example:"A: Ti sei preparata per la festa?\nB: Si, mi sono preparata per due ore!",
     exampleSrc:"A: Did you get ready for the party?\nB: Yes, I got ready for two hours!",
     funFact:"'Prepararsi' implies the full process: shower, hair, makeup, clothing. Italian women are famously thorough in their preparation ritual. 'Mi devo preparare' (I need to get ready) can mean anywhere from 10 minutes to 2 hours."},

    {type:"teach", trg:"divertirsi / divertito", src:"to have fun / had fun", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono divertito/a' = I had fun.\n'Divertiti!' = Have fun!",
     example:"A: Ti sei divertita alla festa?\nB: Si, mi sono divertita tantissimo!",
     exampleSrc:"A: Did you have fun at the party?\nB: Yes, I had a great time!",
     funFact:"'Divertirsi' literally means 'to turn oneself (away from boredom).' From Latin 'divertere' (to turn aside). Asking 'ti sei divertito?' after any event is standard Italian politeness. The expected answer is always enthusiastically positive."},

    {type:"teach", trg:"arrabbiarsi / arrabbiato", src:"to get angry / gotten angry", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono arrabbiato/a' = I got angry.\n'Non ti arrabbiare!' = Don't get angry!",
     example:"A: Ti sei arrabbiato?\nB: Si, mi sono arrabbiato perche era in ritardo.",
     exampleSrc:"A: Did you get angry?\nB: Yes, I got angry because he was late.",
     funFact:"The reflexive 'arrabbiarsi' shows that anger is self-directed: you make yourself angry. Italian has many reflexive emotion verbs: preoccuparsi (worry), annoiarsi (get bored), vergognarsi (feel ashamed). Emotions are reflexive actions."},

    {type:"teach", trg:"sentirsi / sentito", src:"to feel / felt", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono sentito/a male' = I felt unwell.\n'Come ti sei sentito/a?' = How did you feel?",
     example:"A: Come ti sei sentita ieri?\nB: Mi sono sentita meglio, grazie.",
     exampleSrc:"A: How did you feel yesterday?\nB: I felt better, thanks.",
     funFact:"'Sentirsi' (reflexive = to feel a state) vs 'sentire' (non-reflexive = to hear/sense). This distinction matters in the past too: 'mi sono sentito stanco' (I felt tired) vs 'ho sentito un rumore' (I heard a noise)."},

    {type:"teach", trg:"addormentarsi / addormentato", src:"to fall asleep / fallen asleep", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono addormentato/a' = I fell asleep.\n'Addormentarsi sul divano' = to fall asleep on the sofa.",
     example:"A: Mi sono addormentata sul divano.\nB: Di nuovo? Eri stanca!",
     exampleSrc:"A: I fell asleep on the sofa.\nB: Again? You were tired!",
     funFact:"The prefix 'a-' + 'dormire' + '-ent-' + reflexive creates a beautiful compound: literally 'to put oneself into sleep.' Italian morphology is wonderfully transparent. 'Non riesco ad addormentarmi' (I can't fall asleep) is a common nighttime complaint."},

    {type:"teach", trg:"innamorarsi / innamorato", src:"to fall in love / fallen in love", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono innamorato/a' = I fell in love.\n'Innamorarsi di' = to fall in love with.",
     example:"A: Quando ti sei innamorato di lei?\nB: Mi sono innamorato al primo sguardo.",
     exampleSrc:"A: When did you fall in love with her?\nB: I fell in love at first sight.",
     funFact:"'Innamorarsi' literally means 'to put oneself into love.' 'In-' + 'amore' + reflexive. Love is something you enter, like a room. 'Amore a prima vista' (love at first sight) is the Italian version. Italy considers itself the land of romance."},

    {type:"teach", trg:"sposarsi / sposato", src:"to get married / married", pos:"verb", gender:null,
     note:"Reflexive. 'Si sono sposati' = they got married.\n'Sposarsi con' = to marry (someone).",
     example:"A: Quando vi siete sposati?\nB: Ci siamo sposati tre anni fa.",
     exampleSrc:"A: When did you get married?\nB: We got married three years ago.",
     funFact:"'Sposarsi' is reflexive (you marry yourself to someone). Italian weddings are elaborate affairs: civil ('civile') or religious ('religioso'). The phrase 'promessa sposa' (bride-to-be, literally 'promised wife') is beautifully traditional."},

    {type:"teach", trg:"trasferirsi / trasferito", src:"to move (relocate) / moved", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono trasferito/a a Milano' = I moved to Milan.\n'Trasferirsi' = to relocate permanently.",
     example:"A: Quando ti sei trasferita a Roma?\nB: Mi sono trasferita due anni fa.",
     exampleSrc:"A: When did you move to Rome?\nB: I moved two years ago.",
     funFact:"Italy has strong internal migration: southern Italians moving north for work ('trasferirsi al nord') is a recurring theme. 'Trasferirsi' implies a permanent or long-term move, unlike 'spostarsi' (to shift position temporarily)."},

    {type:"teach", trg:"laurearsi / laureato", src:"to graduate / graduated", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono laureato/a' = I graduated.\n'La laurea' = the degree. From 'lauro' (laurel wreath).",
     example:"A: Quando ti sei laureata?\nB: Mi sono laureata nel 2020.",
     exampleSrc:"A: When did you graduate?\nB: I graduated in 2020.",
     funFact:"Italian graduation celebrations involve wearing a laurel wreath ('corona d'alloro') on your head. The tradition dates to ancient Rome, where laurel crowned victors. 'Festa di laurea' (graduation party) often involves comic poems about the graduate."},

    {type:"teach", trg:"abituarsi / abituato", src:"to get used to / used to", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono abituato/a' = I got used to it.\n'Abituarsi a' = to get accustomed to.",
     example:"A: Ti sei abituata alla vita in Italia?\nB: Si, mi sono abituata dopo un anno.",
     exampleSrc:"A: Have you gotten used to life in Italy?\nB: Yes, I got used to it after a year.",
     funFact:"'Abituarsi' comes from 'abitudine' (habit). 'Fare l'abitudine' (to make a habit) is an alternative expression. Italian culture requires significant adjustment for foreigners: meal times, social norms, bureaucracy. 'Ci si abitua' (one gets used to it) is the reassuring response."},

    {type:"teach", trg:"rendersi conto / reso conto", src:"to realize / realized", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono reso/a conto' = I realized.\nLiterally: 'to render account to oneself.'",
     example:"A: Mi sono reso conto dell'errore.\nB: Meglio tardi che mai!",
     exampleSrc:"A: I realized the mistake.\nB: Better late than never!",
     funFact:"'Rendersi conto' is one of Italian's most elegant reflexive expressions. Literally 'to give an account to oneself.' The past participle 'reso' is irregular (from 'rendere'). 'Mi rendo conto che...' (I realize that...) is essential for sophisticated Italian."},

    {type:"teach", trg:"annoiarsi / annoiato", src:"to get bored / bored", pos:"verb", gender:null,
     note:"Reflexive. 'Mi sono annoiato/a' = I got bored.\n'Che noia!' = How boring!",
     example:"A: Ti sei annoiato alla conferenza?\nB: Si, mi sono annoiato a morte!",
     exampleSrc:"A: Did you get bored at the conference?\nB: Yes, I was bored to death!",
     funFact:"'Annoiarsi a morte' (to be bored to death) is classic Italian hyperbole. 'Noia' (boredom) and 'noioso' (boring) are among the harshest criticisms in Italian culture, where life should be vivid, passionate, and engaging. Being boring is almost a sin."},

    // Quiz steps
    {type:"mc", q:"Quale ausiliare usano i verbi riflessivi al passato?",
     opts:["Essere","Avere","Entrambi","Dipende dal verbo"],
     ans:"Essere",
     hint:"All reflexive verbs without exception use this auxiliary in the past."},

    {type:"fb", s:"Maria si e {1} alle sei stamattina.",
     a:["svegliata"], opts:["svegliata","svegliato","svegliate","svegliati"],
     hint:"Maria is feminine singular, so the participle must end in -a.",
     sSrc:"Maria {1} at six this morning."},

    {type:"match", pairs:[
      {trg:"vestirsi", src:"to get dressed"},
      {trg:"divertirsi", src:"to have fun"},
      {trg:"innamorarsi", src:"to fall in love"},
      {trg:"laurearsi", src:"to graduate"},
      {trg:"annoiarsi", src:"to get bored"}
    ]},

    {type:"mc", q:"Come si dice 'We got married' se siamo un uomo e una donna?",
     opts:["Ci siamo sposati","Ci siamo sposate","Ci siamo sposato","Ci siamo sposata"],
     ans:"Ci siamo sposati",
     hint:"Mixed gender groups use the masculine plural ending -i."},

    {type:"fb", s:"Mi sono {1} conto dell'errore troppo tardi.",
     a:["reso"], opts:["reso","resa","renduto","rendato"],
     hint:"The past participle of 'rendere' is irregular.",
     sSrc:"I {1} the mistake too late."},

    {type:"mc", q:"Perche 'mi sono sentita male' ha la -a finale?",
     opts:["The speaker is female, and the participle agrees with the subject","It is a fixed expression","Male is a feminine noun","All past participles end in -a"],
     ans:"The speaker is female, and the participle agrees with the subject",
     hint:"With essere, the past p... always matches the s...'s gender."},

    {type:"fb", s:"I ragazzi si sono {1} tantissimo alla festa!",
     a:["divertiti"], opts:["divertiti","divertito","divertite","divertita"],
     hint:"'I ragazzi' is masculine plural, requiring the -i ending.",
     sSrc:"The boys {1} a lot at the party!"},

    {type:"mc", q:"Cosa significa 'laurearsi' letteralmente?",
     opts:["To crown oneself with laurel, referring to the ancient graduation wreath","To learn quickly","To leave university","To study hard"],
     ans:"To crown oneself with laurel, referring to the ancient graduation wreath",
     hint:"Italian graduates still wear laurel wreaths, continuing a Roman tradition."}
  ]
};
export default BATCH4_U12_L2;
