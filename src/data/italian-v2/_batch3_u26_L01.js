// Batch 3. Unit 26 Lesson (Law: Criminal Types & Procedure)
const BATCH3_L_1 = {
  id:"itv2_u26l_b3_1", title:"Reati e procedura penale", icon:"🔐", xp:15, board:true,
  steps:[
    {type:"intro", title:"Reati e procedura penale",
     desc:"Expand your legal vocabulary with specific crime types, procedural terms, and penalty structures. These terms appear constantly in Italian crime reporting and legal dramas.",
     goals:["Classify different types of crimes","Describe criminal procedure stages","Understand penalty and sentencing vocabulary"]},

    {type:"teach", trg:"l'omicidio", src:"the murder / homicide", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli omicidi.\n'Omicidio volontario' = premeditated murder.\n'Omicidio colposo' = involuntary manslaughter.",
     example:"A: E stato accusato di omicidio volontario.\nB: Rischia l'ergastolo.",
     exampleSrc:"A: He was accused of premeditated murder.\nB: He faces life imprisonment.",
     funFact:"Italian law distinguishes 'omicidio volontario' (intentional), 'omicidio preterintenzionale' (beyond intention, e.g. a fight leading to death), and 'omicidio colposo' (negligent). Each carries very different penalties."},

    {type:"teach", trg:"la rapina", src:"the robbery", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le rapine.\nTheft with violence or threats. 'Rapina a mano armata' = armed robbery.",
     example:"A: Una rapina in banca e avvenuta stamattina.\nB: I rapinatori sono fuggiti con 50.000 euro.",
     exampleSrc:"A: A bank robbery took place this morning.\nB: The robbers fled with 50,000 euros.",
     funFact:"Italian law treats rapina more severely than furto because it involves violence or intimidation against a person. Penalties range from 5 to 10 years, increasing to 20 years for armed robbery."},

    {type:"teach", trg:"la corruzione", src:"the corruption", pos:"noun", gender:"f",
     note:"Feminine noun. 'Corruzione di pubblico ufficiale' = corruption of a public official.\n'Anticorruzione' = anticorruption.",
     example:"A: La corruzione nel settore pubblico e ancora diffusa.\nB: Servono più controlli e trasparenza.",
     exampleSrc:"A: Corruption in the public sector is still widespread.\nB: More oversight and transparency are needed.",
     funFact:"Italy consistently ranks below Northern European countries on corruption indexes. The 'Tangentopoli' scandal of 1992 exposed systemic corruption in politics, leading to the collapse of the entire postwar party system."},

    {type:"teach", trg:"l'ergastolo", src:"the life imprisonment", pos:"noun", gender:"m",
     note:"Masculine noun. The maximum sentence in Italian law.\n'Condannare all'ergastolo' = to sentence to life imprisonment.",
     example:"A: Il boss mafioso e stato condannato all'ergastolo.\nB: Non uscira mai dal carcere.",
     exampleSrc:"A: The mafia boss was sentenced to life imprisonment.\nB: He will never leave prison.",
     funFact:"Italy abolished the death penalty in 1889 but kept 'ergastolo.' There is ongoing debate about whether true life-without-parole sentences violate the constitutional principle that punishment should aim at 'rieducazione' (rehabilitation)."},

    {type:"teach", trg:"il pubblico ministero", src:"the public prosecutor", pos:"noun", gender:"m",
     note:"Masculine compound noun. Abbreviated PM.\nThe magistrate who brings criminal charges and leads investigations.",
     example:"A: Il pubblico ministero ha chiesto sei anni di carcere.\nB: La difesa spera nell'assoluzione.",
     exampleSrc:"A: The public prosecutor requested six years in prison.\nB: The defense hopes for acquittal.",
     funFact:"In Italy, public prosecutors are independent magistrates, not government employees. They cannot be fired or transferred by politicians, ensuring judicial independence. This separation of powers is a cornerstone of the Italian system."},

    {type:"mc",
     q:"Qual e la differenza tra furto e rapina in diritto italiano?",
     opts:["La rapina implica violenza o minaccia, il furto no","Non c'è differenza legale tra i due reati","La rapina riguarda solo oggetti di valore superiore a mille euro","Il furto coinvolge violenza o minaccia, la rapina no"],
     ans:"La rapina implica violenza o minaccia, il furto no",
     hint:"One involves taking property without confrontation, the other uses force or threats against the victim."},

    {type:"teach", trg:"l'udienza", src:"the hearing / court session", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le udienze.\n'Udienza preliminare' = preliminary hearing. 'Rinviare l'udienza' = to postpone the hearing.",
     example:"A: L'udienza e stata rinviata al mese prossimo.\nB: Il giudice ha concesso più tempo alla difesa.",
     exampleSrc:"A: The hearing was postponed to next month.\nB: The judge granted more time to the defense.",
     funFact:"Italian trials can involve dozens of hearings spread over years. A single hearing ('udienza') typically lasts a few hours and covers specific procedural steps. Trials with many defendants can have hundreds of hearings."},

    {type:"teach", trg:"la prescrizione", src:"the statute of limitations", pos:"noun", gender:"f",
     note:"Feminine noun. The time limit for prosecuting a crime.\n'Andare in prescrizione' = to expire (for a crime).",
     example:"A: Il reato e andato in prescrizione dopo dieci anni.\nB: Il colpevole non sara mai processato.",
     exampleSrc:"A: The crime passed the statute of limitations after ten years.\nB: The culprit will never be tried.",
     funFact:"Prescription is one of Italy's most controversial legal issues. Due to slow courts, many crimes expire before trial ends. This has allowed some high-profile defendants to escape justice, sparking public fury and reform demands."},

    {type:"teach", trg:"il patteggiamento", src:"the plea bargain", pos:"noun", gender:"m",
     note:"Masculine noun. An agreement for a reduced sentence in exchange for avoiding a full trial.\nFrom 'patteggiare' (to negotiate).",
     example:"A: L'imputato ha scelto il patteggiamento.\nB: Ricevera una pena ridotta di un terzo.",
     exampleSrc:"A: The defendant chose a plea bargain.\nB: He will receive a sentence reduced by one third.",
     funFact:"Italy introduced plea bargaining in 1989, adapting the American concept to its civil law system. It can reduce sentences by up to one third and speeds up proceedings, but victims sometimes feel justice is shortchanged."},

    {type:"fb",
     s:"Il reato e andato in {1} perché il processo e durato troppo a lungo.",
     a:["prescrizione"],
     opts:["prescrizione","ergastolo","patteggiamento","udienza"],
     hint:"The legal time limit expired. When courts take too long, some crimes cannot be prosecuted anymore.",
     sSrc:"The crime passed the {1} because the trial lasted too long."},

    {type:"teach", trg:"il sequestro", src:"the seizure / confiscation", pos:"noun", gender:"m",
     note:"Masculine noun. 'Sequestro preventivo' = preventive seizure.\n'Sequestro di persona' = kidnapping.",
     example:"A: La polizia ha eseguito il sequestro dei beni del mafioso.\nB: Ville, auto e conti bancari per milioni di euro.",
     exampleSrc:"A: The police carried out the seizure of the mobster's assets.\nB: Villas, cars, and bank accounts worth millions of euros.",
     funFact:"Italy pioneered the confiscation of mafia assets with the 'Legge Rognoni-La Torre' (1982). Seized properties are often reassigned to community use: mafia villas become schools or cooperatives, symbolizing the triumph of legality."},

    {type:"teach", trg:"la perizia", src:"the expert assessment / forensic report", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le perizie.\n'Perizia psichiatrica' = psychiatric evaluation.\n'Perito' = expert witness.",
     example:"A: La perizia balistica ha confermato l'arma del delitto.\nB: I risultati saranno presentati alla prossima udienza.",
     exampleSrc:"A: The ballistic report confirmed the murder weapon.\nB: The results will be presented at the next hearing.",
     funFact:"In the Italian system, expert witnesses ('periti') can be appointed by the judge (perito d'ufficio) or by the parties (consulente tecnico). The judge's expert carries more weight than party-appointed ones."},

    {type:"teach", trg:"la cauzione", src:"the bail", pos:"noun", gender:"f",
     note:"Feminine noun. Money deposited to ensure the accused appears at trial.\n'Pagare la cauzione' = to pay bail.",
     example:"A: Il giudice ha fissato una cauzione di centomila euro.\nB: Se non paga, restera in carcere.",
     exampleSrc:"A: The judge set bail at one hundred thousand euros.\nB: If he does not pay, he will remain in prison.",
     funFact:"Bail is less common in Italy than in Anglo-Saxon systems. Italian judges more often use 'arresti domiciliari' (house arrest) or 'obbligo di dimora' (requirement to stay in a specific area) as alternatives to detention."},

    {type:"mc",
     q:"Che cos'e il patteggiamento nel sistema giudiziario italiano?",
     opts:["Un'udienza preliminare obbligatoria","Un accordo per una pena ridotta in cambio di un processo abbreviato","Un tipo di appello alla Corte Suprema","La confisca dei beni del condannato"],
     ans:"Un accordo per una pena ridotta in cambio di un processo abbreviato",
     hint:"A deal where the defendant accepts a lighter sentence without going through a full trial. It speeds up the judicial process."},

    {type:"teach", trg:"la recidiva", src:"the recidivism / repeat offense", pos:"noun", gender:"f",
     note:"Feminine noun. When a convicted person commits another crime.\n'Recidivo' (adj/noun) = repeat offender.",
     example:"A: La recidiva tra i detenuti e molto alta in Italia.\nB: Oltre il 60% dei condannati commette un altro reato.",
     exampleSrc:"A: Recidivism among inmates is very high in Italy.\nB: Over 60% of convicts commit another crime.",
     funFact:"High recidivism rates fuel the debate over Italy's prison system. Critics argue that overcrowded jails with limited rehabilitation programs create a revolving door. The constitution mandates that punishment aim at 'rieducazione,' but reality often falls short."},

    {type:"match", pairs:[
      {trg:"omicidio", src:"murder"},
      {trg:"corruzione", src:"corruption"},
      {trg:"ergastolo", src:"life imprisonment"},
      {trg:"prescrizione", src:"statute of limitations"},
      {trg:"sequestro", src:"seizure"}
    ]},

    {type:"fb",
     s:"Il {1} ha chiesto una condanna severa per l'imputato.",
     a:["pubblico ministero"],
     opts:["pubblico ministero","giudice","avvocato","perito"],
     hint:"The independent magistrate who leads the prosecution and requests specific sentences from the judge.",
     sSrc:"The {1} requested a severe sentence for the defendant."},

    {type:"mc",
     q:"Perche la prescrizione e un problema grave nel sistema giudiziario italiano?",
     opts:["Perche obbliga tutti gli imputati a patteggiare la pena","Perche si applica solo ai reati commessi all'estero","Perche molti reati scadono prima che il processo finisca, a causa della lentezza dei tribunali","Perche impedisce ai giudici di pronunciare sentenze severe"],
     ans:"Perche molti reati scadono prima che il processo finisca, a causa della lentezza dei tribunali",
     hint:"Slow courts plus fixed time limits mean some criminals escape justice. The crime expires before the verdict can be reached."}
  ,{type:"match",pairs:[{trg:"il patteggiamento",src:"the plea bargain"},{trg:"la perizia",src:"the expert assessment / forensic report"},{trg:"la cauzione",src:"the bail"},{trg:"la recidiva",src:"the recidivism / repeat offense"}]},{type:"mc",q:"How do you say \"hearing / court session\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'udienza"],ans:"l'udienza",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_1;
