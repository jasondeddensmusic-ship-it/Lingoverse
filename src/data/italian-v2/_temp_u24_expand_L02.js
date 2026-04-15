// Unit 24 Expansion — Lesson 5: Il tipo 3 e le condizioni miste
const LESSON_5 = {
  id:"itv2_u24l5", title:"Il tipo 3 e le condizioni miste", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il tipo 3 e le condizioni miste",
     desc:"Introduce Type 3 if-clauses for impossible past conditions and mixed conditions that blend types. These structures let you discuss regrets, alternate histories, and complex hypotheticals.",
     goals:["Form Type 3 if-clauses (past impossible conditions)","Create mixed conditions combining different types","Express regrets and alternate outcomes"]},

    {type:"teach", trg:"se avessi studiato", src:"if I had studied", pos:"verb", gender:null,
     note:"Type 3: se + pluperfect subjunctive. Past impossible condition.\nPluperfect subj. = imperfect subj. of avere/essere + past participle.",
     example:"A: Se avessi studiato di piu, avrei superato l'esame.\nB: Non puoi cambiare il passato, ma puoi cambiare il futuro.",
     exampleSrc:"A: If I had studied more, I would have passed the exam.\nB: You cannot change the past, but you can change the future.",
     funFact:"Type 3 if-clauses describe conditions that cannot be changed because they are in the past. 'Se avessi studiato' uses the pluperfect subjunctive (congiuntivo trapassato): avessi + past participle. The main clause uses the past conditional: avrei superato. Together they express regret about what could have been different."},

    {type:"teach", trg:"se fossi partito", src:"if I had left / if you had left", pos:"verb", gender:null,
     note:"Type 3 with 'essere.' Pluperfect subjunctive: se fossi + past participle.\nGender agreement: se fossi partita (f).",
     example:"A: Se fossi partito prima, non avrei perso il treno.\nB: La prossima volta metti la sveglia!",
     exampleSrc:"A: If I had left earlier, I would not have missed the train.\nB: Next time set the alarm!",
     funFact:"Verbs using 'essere' in the passato prossimo also use 'essere' in the pluperfect subjunctive: sono partito > fossi partito. Gender agreement applies: 'se fossi partita' (feminine). This is the past version of Type 2's 'se fossi partito/a' and expresses an irreversible missed opportunity."},

    {type:"teach", trg:"avrei superato", src:"I would have passed", pos:"verb", gender:null,
     note:"Past conditional in the main clause of Type 3.\n'Avrei superato l'esame' = I would have passed the exam.",
     example:"A: Avrei superato l'esame facilmente con piu preparazione.\nB: La prossima volta andra meglio.",
     exampleSrc:"A: I would have passed the exam easily with more preparation.\nB: Next time it will go better.",
     funFact:"The past conditional in Type 3 main clauses expresses the unrealized outcome. 'Avrei + past participle' for most verbs, 'sarei + past participle' for essere-verbs. The combination of pluperfect subjunctive + past conditional creates the most complex if-clause in Italian, reserved for B1-B2 learners."},

    {type:"teach", trg:"se non fosse piovuto", src:"if it had not rained", pos:"verb", gender:null,
     note:"Negative Type 3. 'Se non fosse piovuto' = if it hadn't rained.\n'Piovuto' uses 'essere' in compound tenses.",
     example:"A: Se non fosse piovuto, saremmo andati al parco.\nB: Pazienza, andiamo domani.",
     exampleSrc:"A: If it had not rained, we would have gone to the park.\nB: Never mind, we will go tomorrow.",
     funFact:"'Piovere' (to rain) uses 'essere' in compound tenses: 'e piovuto' (it rained). The negative Type 3 'se non fosse piovuto' expresses regret about weather that ruined plans. 'Pazienza' (patience/never mind) is the Italian stoic response to things that cannot be changed. It is one of the most used words in daily Italian."},

    {type:"teach", trg:"se avessi saputo", src:"if I had known", pos:"verb", gender:null,
     note:"Type 3 with 'sapere.' Very common regret expression.\n'Se avessi saputo, non sarei venuto' = If I had known, I wouldn't have come.",
     example:"A: Se avessi saputo la verita, avrei agito diversamente.\nB: Purtroppo non lo sapevi.",
     exampleSrc:"A: If I had known the truth, I would have acted differently.\nB: Unfortunately you did not know.",
     funFact:"'Se avessi saputo' (if I had known) is one of the most frequent Type 3 openers. It expresses the universal human regret of acting without full information. The Italian proverb 'Se avessi saputo, avrei portato l'ombrello' (if I had known, I would have brought the umbrella) is used humorously for any situation where hindsight reveals the obvious."},

    {type:"teach", trg:"purche", src:"provided that / as long as", pos:"conj", gender:null,
     note:"Conjunction. 'Purche' + subjunctive.\n'Vengo, purche tu venga' = I will come, provided you come.",
     example:"A: Ti aiuto, purche tu faccia il tuo dovere.\nB: Promesso, faro del mio meglio.",
     exampleSrc:"A: I will help you, provided you do your duty.\nB: I promise, I will do my best.",
     funFact:"'Purche' is a conditional conjunction that always triggers the subjunctive. It sets a firm precondition. Unlike 'a patto che' (which is more formal and contractual), 'purche' has a warmer, more personal tone. 'Purche' comes from 'pur' (even) + 'che' (that), literally 'even so that.'"},

    {type:"teach", trg:"qualora", src:"in the event that / should", pos:"conj", gender:null,
     note:"Conjunction. Formal. 'Qualora' + subjunctive.\n'Qualora piovesse' = should it rain.",
     example:"A: Qualora avessi bisogno, non esitare a chiamarmi.\nB: Grazie, lo terro a mente.",
     exampleSrc:"A: Should you need anything, do not hesitate to call me.\nB: Thanks, I will keep that in mind.",
     funFact:"'Qualora' is the most formal conditional conjunction. It belongs to written Italian: contracts, formal letters, legal documents. In speech, Italians use 'se' or 'nel caso in cui' instead. 'Qualora' signals a high register and professional context. It is the conjunction you would find in insurance policies and government regulations."},

    {type:"tip", title:"All Three Types Compared",
     text:"Type 1 (Real): Se piove, resto a casa.\nSe + present, present/future\n\nType 2 (Hypothetical): Se piovesse, resterei a casa.\nSe + imperfect subjunctive, conditional\n\nType 3 (Impossible past): Se fosse piovuto, sarei restato a casa.\nSe + pluperfect subjunctive, past conditional\n\nMixed: Se avessi studiato (Type 3), ora sarei felice (Type 2).\nPast condition with present consequence.",
     deepDive:{title:"Mixed Conditions in Italian",
      text:"Mixed conditions combine elements from different types:\n\n'Se avessi studiato ieri (Type 3), oggi non avrei problemi (Type 2 present result)'\nIf I had studied yesterday, I would not have problems today.\n\nThe if-clause uses the pluperfect subjunctive (past), but the main clause uses the present conditional (current result). This blend is common in everyday Italian because real life mixes past causes with present effects."}},

    // Quiz steps
    {type:"mc", q:"What tenses does Type 3 use?",
     opts:["Present + future in both clauses","Imperfect subjunctive + conditional (same as Type 2)","Pluperfect subjunctive + past conditional","Future + past conditional"],
     ans:"Pluperfect subjunctive + past conditional",
     hint:"Se avessi studiato (p... subj.), avrei superato (p... c...). Both parts refer to an unchangeable p...."},

    {type:"fb", s:"Se {1} studiato di piu, avrei superato l'esame.",
     a:["avessi"],
     opts:["avessi","avevo","ho","abbia"],
     hint:"Type 3: the if-clause uses the pluperfect subjunctive. The auxiliary 'avere' takes the imperfect subjunctive form.",
     sSrc:"If I {1} studied more, I would have passed the exam."},

    {type:"match", pairs:[
      {trg:"se avessi studiato", src:"if I had studied (Type 3)"},
      {trg:"se fossi partito", src:"if I had left (Type 3)"},
      {trg:"se avessi saputo", src:"if I had known (Type 3)"},
      {trg:"purche", src:"provided that"},
      {trg:"qualora", src:"in the event that (formal)"}
    ]},

    {type:"mc", q:"What is a 'mixed condition'?",
     opts:["Using Type 1 and Type 2 in the same paragraph","A past if-clause (Type 3) with a present-result main clause","Using two different languages in one sentence","A condition that has no main clause at all"],
     ans:"A past if-clause (Type 3) with a present-result main clause",
     hint:"'Se avessi studiato ieri, oggi non avrei problemi.' P... cause mixed with p... effect. Common in real life."},

    {type:"fb", s:"Se non fosse {1}, saremmo andati al parco.",
     a:["piovuto"],
     opts:["piovuto","piove","piovendo","pioggia"],
     hint:"Type 3 negative: if it had not rained. 'Piovere' uses 'essere' in compound tenses, so the pluperfect subjunctive uses 'fosse.'",
     sSrc:"If it had not {1}, we would have gone to the park."},

    {type:"mc", q:"When is 'qualora' used instead of 'se'?",
     opts:["In casual everyday spoken conversation","In formal written contexts: contracts, legal documents, official letters","Only when speaking to children in simple terms","When the condition is absolutely certain to happen"],
     ans:"In formal written contexts: contracts, legal documents, official letters",
     hint:"'Qualora' signals a high register. In speech, Italians prefer 'se' or 'nel caso in cui.'"},

    {type:"fb", s:"Ti aiuto, {1} tu faccia il tuo dovere.",
     a:["purche"],
     opts:["purche","come se","se solo","altrimenti"],
     hint:"Provided that you do your part. This conjunction always triggers the subjunctive and sets a firm precondition.",
     sSrc:"I will help you, {1} you do your duty."},

    {type:"mc", q:"What does 'Se avessi saputo' express?",
     opts:["A real future plan that is certain to happen","A present-tense question about current knowledge","Regret about acting without full information in the past","A formal greeting in business Italian"],
     ans:"Regret about acting without full information in the past",
     hint:"'If I had known.' The universal lament. You cannot change the p..., but the pluperfect subjunctive lets you imagine what might have been different."}
  ]
};
export default LESSON_5;
