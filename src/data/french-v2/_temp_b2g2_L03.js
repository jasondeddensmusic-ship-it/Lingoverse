const LESSON_3 = {
  id:"frv2_b2g2_l3", title:"Justice et droit", icon:"\u{2696}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Justice et droit",
     desc:"Master legal and judicial vocabulary for discussing courts, crimes, and the justice system. Essential for news comprehension and formal debate.",
     goals:["Learn 20 legal and judicial terms","Discuss justice topics in French","Understand courtroom vocabulary"]},

    {type:"teach", trg:"un accuse", src:"a defendant, an accused", pos:"noun", gender:"m",
     note:"Masculine noun. A person charged with a crime. Feminine: une accusee.",
     example:"A: L'accuse a plaide non coupable.\nB: Son avocat prepare une defense solide.",
     exampleSrc:"A: The defendant pleaded not guilty.\nB: His lawyer is preparing a solid defense.",
     funFact:"'Accuse de reception' means acknowledgment of receipt. Different use of the same root 'accuser'."},

    {type:"teach", trg:"la cassation", src:"the cassation, the appeal court", pos:"noun", gender:"f",
     note:"Feminine noun. The highest court of appeal in France.",
     example:"A: L'affaire ira devant la Cour de cassation.\nB: C'est la derniere instance possible.",
     exampleSrc:"A: The case will go to the Court of Cassation.\nB: It's the last possible instance.",
     funFact:"The Cour de cassation doesn't retry cases. It only checks if the law was correctly applied."},

    {type:"teach", trg:"comparaitre", src:"to appear (in court)", pos:"verb", gender:null,
     note:"Verb. To present oneself before a judge or tribunal.",
     example:"A: L'accuse doit comparaitre demain matin.\nB: Son avocat sera present.",
     exampleSrc:"A: The defendant must appear in court tomorrow morning.\nB: His lawyer will be present.",
     funFact:"Conjugated like 'paraitre' but with accent: il comparait. Irregular verb in the third group."},

    {type:"teach", trg:"la desobeissance", src:"the disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. The act of refusing to obey rules or authority.",
     example:"A: La desobeissance civile est-elle legitime ?\nB: Cela depend du contexte et de la cause.",
     exampleSrc:"A: Is civil disobedience legitimate?\nB: It depends on the context and the cause.",
     funFact:"Thoreau's concept of civil disobedience inspired French resistance movements throughout history."},

    {type:"teach", trg:"un dissident", src:"a dissident", pos:"noun", gender:"m",
     note:"Masculine noun. A person who opposes official policy. Feminine: une dissidente.",
     example:"A: Le dissident a ete arrete pour ses ecrits.\nB: La communaute internationale proteste.",
     exampleSrc:"A: The dissident was arrested for his writings.\nB: The international community is protesting.",
     funFact:"French intellectuals like Sartre championed dissidents worldwide during the Cold War."},

    {type:"mc",
     q:"Ou une affaire juridique peut-elle etre jugee en dernier recours en France ?",
     opts:["la Cour de cassation","le tribunal","la mairie","le Parlement"],
     ans:"la Cour de cassation",
     hint:"France's supreme judicial body that verifies whether the law was correctly applied, without retrying the case."},

    {type:"teach", trg:"la cruaute", src:"the cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. Deliberate causing of pain or suffering.",
     example:"A: La cruaute envers les animaux est un delit.\nB: Les peines ont ete renforcees recemment.",
     exampleSrc:"A: Cruelty to animals is an offense.\nB: Penalties have been strengthened recently.",
     funFact:"France passed its first animal cruelty law in 1850, the Loi Grammont. A pioneer in Europe."},

    {type:"teach", trg:"la barbarie", src:"the barbarity", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme cruelty or savagery.",
     example:"A: Ces actes de barbarie sont inacceptables.\nB: La justice doit etre rendue.",
     exampleSrc:"A: These acts of barbarity are unacceptable.\nB: Justice must be served.",
     funFact:"From Greek 'barbaros' (foreigner). Originally meant 'non-Greek speaker', then evolved to mean savage."},

    {type:"teach", trg:"un condamne", src:"a convict, a condemned person", pos:"noun", gender:"m",
     note:"Masculine noun. A person found guilty. Feminine: une condamnee.",
     example:"A: Le condamne a fait appel du verdict.\nB: L'audience aura lieu le mois prochain.",
     exampleSrc:"A: The convict appealed the verdict.\nB: The hearing will take place next month.",
     funFact:"Victor Hugo's 'Le Dernier Jour d'un condamne' (1829) was a powerful argument against the death penalty."},

    {type:"teach", trg:"le consul", src:"the consul", pos:"noun", gender:"m",
     note:"Masculine noun. A diplomatic official in a foreign city.",
     example:"A: Le consul peut aider les citoyens a l'etranger.\nB: Il delivre aussi des visas.",
     exampleSrc:"A: The consul can help citizens abroad.\nB: He also issues visas.",
     funFact:"Napoleon was 'Premier Consul' before becoming Emperor. The title echoes Roman Republic consuls."},

    {type:"fb",
     s:"L'{1} a plaide non coupable devant le tribunal.",
     a:["accuse"],
     opts:["accuse","condamne","consul","dissident"],
     hint:"The person who has been charged with a crime but not yet convicted.",
     sSrc:"The {1} pleaded not guilty before the court."},

    {type:"teach", trg:"l'atrocite", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel or horrific act.",
     example:"A: Les atrocites de la guerre ont choque le monde.\nB: Il ne faut jamais oublier.",
     exampleSrc:"A: The atrocities of war shocked the world.\nB: We must never forget.",
     funFact:"The Nuremberg trials established that 'following orders' is no defense for atrocities."},

    {type:"teach", trg:"un delegue", src:"a delegate, a representative", pos:"noun", gender:"m",
     note:"Masculine noun. An elected or appointed representative. Feminine: une deleguee.",
     example:"A: Le delegue syndical a rencontre la direction.\nB: Les negociations avancent bien.",
     exampleSrc:"A: The union delegate met with management.\nB: Negotiations are progressing well.",
     funFact:"In French schools, each class elects 'delegues de classe' who represent students."},

    {type:"teach", trg:"la criminologie", src:"the criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: Elle etudie la criminologie a l'universite.\nB: C'est un domaine passionnant.",
     exampleSrc:"A: She studies criminology at university.\nB: It's a fascinating field.",
     funFact:"Alphonse Bertillon, a Frenchman, invented the first scientific system for identifying criminals."},

    {type:"mc",
     q:"Comment appelle-t-on l'etude scientifique du crime ?",
     opts:["la criminologie","la cruaute","la cassation","la desobeissance"],
     ans:"la criminologie",
     hint:"The academic discipline that studies crime, its causes, and criminal behavior."},

    {type:"teach", trg:"un criminologue", src:"a criminologist", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in criminology. Feminine: une criminologue.",
     example:"A: Le criminologue a analyse le profil du suspect.\nB: Ses conclusions ont aide l'enquete.",
     exampleSrc:"A: The criminologist analyzed the suspect's profile.\nB: His conclusions helped the investigation.",
     funFact:"France pioneered criminal profiling. The French police use 'profilers' trained in behavioral science."},

    {type:"teach", trg:"la dissociation", src:"the dissociation, the separation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of separating or distancing from something.",
     example:"A: La dissociation entre les paroles et les actes est evidente.\nB: Il faut exiger de la coherence.",
     exampleSrc:"A: The dissociation between words and actions is obvious.\nB: We must demand consistency.",
     funFact:"In psychology, 'dissociation' describes a disconnect from reality. A clinical term borrowed by everyday French."},

    {type:"teach", trg:"deposseeder", src:"to dispossess", pos:"verb", gender:null,
     note:"Verb. To take away someone's property or rights.",
     example:"A: Ils ont ete depossedes de leurs terres.\nB: C'est une injustice historique.",
     exampleSrc:"A: They were dispossessed of their lands.\nB: It's a historical injustice.",
     funFact:"Land dispossession is a major theme in French colonial history and contemporary restitution debates."},

    {type:"teach", trg:"un debiteur", src:"a debtor", pos:"noun", gender:"m",
     note:"Masculine noun. A person who owes money. Feminine: une debitrice.",
     example:"A: Le debiteur n'a pas rembourse son pret.\nB: La banque va engager des poursuites.",
     exampleSrc:"A: The debtor didn't repay his loan.\nB: The bank will take legal action.",
     funFact:"French law has strong debtor protections. Personal bankruptcy ('surendettement') has a dedicated commission."},

    {type:"teach", trg:"la deduction", src:"the deduction", pos:"noun", gender:"f",
     note:"Feminine noun. A logical conclusion or a subtraction from a total.",
     example:"A: Par deduction, le coupable est le jardinier.\nB: Brillant ! Comment as-tu trouve ?",
     exampleSrc:"A: By deduction, the guilty party is the gardener.\nB: Brilliant! How did you figure it out?",
     funFact:"Sherlock Holmes uses deduction, but technically he uses 'induction'. The French distinction is clearer."},

    {type:"fb",
     s:"Le {1} a ete arrete pour ses ecrits contre le regime.",
     a:["dissident"],
     opts:["dissident","condamne","consul","delegue"],
     hint:"A person who opposes official policy, especially in an authoritarian regime.",
     sSrc:"The {1} was arrested for his writings against the regime."},

    {type:"match", pairs:[
      {trg:"cruaute", src:"cruelty"},
      {trg:"cassation", src:"appeal court"},
      {trg:"desobeissance", src:"disobedience"},
      {trg:"condamne", src:"convict"},
      {trg:"deduction", src:"deduction"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'se presenter devant un tribunal' ?",
     opts:["comparaitre","deposseeder","dissocier","accuser"],
     ans:"comparaitre",
     hint:"To present yourself before a judge. Think of 'paraitre' (to appear) with a prefix."},

    {type:"fb",
     s:"La {1} envers les animaux est un delit puni par la loi.",
     a:["cruaute"],
     opts:["cruaute","barbarie","atrocite","dissociation"],
     hint:"Deliberately causing pain or suffering. A specific legal term for animal abuse.",
     sSrc:"{1} to animals is an offense punished by law."}
  ]
};
export default LESSON_3;
