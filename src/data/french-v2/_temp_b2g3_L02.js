const LESSON_2 = {
  id:"frv2_b2g3_l2", title:"La justice et le droit", icon:"\u{2696}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La justice et le droit",
     desc:"Learn legal and judicial vocabulary essential for B2 discussions about law, trials, and the justice system.",
     goals:["Learn 18 B2 legal and judicial words","Discuss trials and court proceedings","Express opinions about justice and rights"]},

    {type:"teach", trg:"un accusé", src:"a defendant, an accused person", pos:"noun", gender:"m",
     note:"Masculine noun. The person charged in criminal proceedings. Feminine: accusee.",
     example:"A: L'accusé a plaidé non coupable.\nB: Son avocat semble très confiant.",
     exampleSrc:"A: The defendant pleaded not guilty.\nB: His lawyer seems very confident.",
     funFact:"In French courts, the 'accuse' sits in the 'banc des accuses' (dock). Emile Zola's famous 'J'accuse' letter used this root."},

    {type:"teach", trg:"comparaître", src:"to appear in court", pos:"verb", gender:null,
     note:"Verb. To present oneself before a judge or tribunal. Irregular: il comparait.",
     example:"A: Il doit comparaître devant le tribunal demain.\nB: C'est une affaire très médiatisée.",
     exampleSrc:"A: He must appear before the court tomorrow.\nB: It's a highly publicized case.",
     funFact:"From Latin 'comparere'. The expression 'comparaitre en justice' has been used in French law since the 13th century."},

    {type:"teach", trg:"un condamné", src:"a convict, a condemned person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone found guilty by a court. Feminine: condamnee.",
     example:"A: Le condamné a fait appel de sa sentence.\nB: Il espère obtenir une réduction de peine.",
     exampleSrc:"A: The convict appealed his sentence.\nB: He hopes to get a reduced sentence.",
     funFact:"Victor Hugo's 'Le Dernier Jour d'un Condamne' (1829) was a powerful argument against the death penalty."},

    {type:"teach", trg:"la désobéissance", src:"disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. The refusal to obey rules or authority.",
     example:"A: La désobéissance civile peut changer les lois.\nB: Oui, mais elle comporte des risques.",
     exampleSrc:"A: Civil disobedience can change laws.\nB: Yes, but it carries risks.",
     funFact:"Thoreau's concept was embraced in France. The 'desobeissants' movement gained visibility during climate protests."},

    {type:"mc",
     q:"Quel mot désigne la personne qui est jugée dans un procès pénal ?",
     opts:["l'accusé","le condamné","le contradicteur","le consul"],
     ans:"l'accusé",
     hint:"This is the person charged before the verdict, not after conviction."},

    {type:"teach", trg:"un contradicteur", src:"an opponent in debate", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who argues against a position. Feminine: contradictrice.",
     example:"A: Son contradicteur avait des arguments solides.\nB: Le débat était passionnant.",
     exampleSrc:"A: His opponent had solid arguments.\nB: The debate was fascinating.",
     funFact:"In French legal procedure, the 'principe du contradictoire' guarantees both sides the right to be heard."},

    {type:"teach", trg:"un consul", src:"a consul", pos:"noun", gender:"m",
     note:"Masculine noun. A diplomatic official or, historically, a Roman magistrate.",
     example:"A: Le consul français à Montréal nous a aidés.\nB: Oui, il a accéléré nos démarches.",
     exampleSrc:"A: The French consul in Montreal helped us.\nB: Yes, he expedited our procedures.",
     funFact:"Napoleon was 'Premier Consul' before becoming Emperor. The French consulat period (1799-1804) is a distinct historical era."},

    {type:"teach", trg:"la cruauté", src:"cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. Deliberately causing pain or suffering.",
     example:"A: La cruauté envers les animaux est punissable.\nB: Les lois sont de plus en plus sévères.",
     exampleSrc:"A: Cruelty toward animals is punishable.\nB: The laws are becoming increasingly strict.",
     funFact:"French animal protection law dates to the Grammont Act of 1850, one of Europe's earliest anti-cruelty laws."},

    {type:"teach", trg:"une atrocité", src:"an atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel or wicked act.",
     example:"A: Les atrocités de la guerre sont innombrables.\nB: Il faut que justice soit rendue.",
     exampleSrc:"A: The atrocities of war are countless.\nB: Justice must be served.",
     funFact:"The Nuremberg trials were called 'le proces de Nuremberg' in French and established 'crimes contre l'humanite' in international law."},

    {type:"fb",
     s:"L'accusé doit {1} devant le juge la semaine prochaine.",
     a:["comparaître"],
     opts:["comparaître","condamner","contredire","consulter"],
     hint:"This verb specifically means to present oneself before a court or tribunal.",
     sSrc:"The defendant must {1} before the judge next week."},

    {type:"teach", trg:"la barbarie", src:"barbarity", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme cruelty or uncivilized behavior.",
     example:"A: C'est un acte de barbarie.\nB: Les responsables doivent être jugés.",
     exampleSrc:"A: It's an act of barbarity.\nB: Those responsible must be tried.",
     funFact:"The French Penal Code distinguishes 'actes de barbarie' as a specific aggravating circumstance in criminal charges."},

    {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: Elle étudie la criminologie à l'université.\nB: C'est un domaine fascinant.",
     exampleSrc:"A: She studies criminology at university.\nB: It's a fascinating field.",
     funFact:"Alexandre Lacassagne, a 19th-century French doctor, is considered one of the founders of modern criminology."},

    {type:"teach", trg:"un criminologue", src:"a criminologist", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in criminology. Also feminine: une criminologue.",
     example:"A: Le criminologue a analysé le profil du suspect.\nB: Ses conclusions sont éclairantes.",
     exampleSrc:"A: The criminologist analyzed the suspect's profile.\nB: His conclusions are illuminating.",
     funFact:"In French media, criminologists are regular TV commentators during high-profile trials, similar to legal analysts in the US."},

    {type:"mc",
     q:"Quel est le synonyme le plus fort de 'cruauté' ?",
     opts:["contradiction","barbarie","atrocité","désobéissance"],
     ans:"barbarie",
     hint:"This word implies extreme, almost primitive cruelty. Think of uncivilized behavior."},

    {type:"teach", trg:"un délégué", src:"a delegate, a representative", pos:"noun", gender:"m",
     note:"Masculine noun. An elected or appointed representative. Feminine: deleguee.",
     example:"A: Le délégué syndical a négocié les conditions.\nB: Il représente deux cents employés.",
     exampleSrc:"A: The union delegate negotiated the conditions.\nB: He represents two hundred employees.",
     funFact:"In French schools, each class elects a 'delegue de classe' who represents students in teacher meetings."},

    {type:"teach", trg:"un communiqué", src:"an official statement, a press release", pos:"noun", gender:"m",
     note:"Masculine noun. A formal announcement to the public or press.",
     example:"A: Le gouvernement a publié un communiqué.\nB: Que dit-il exactement ?",
     exampleSrc:"A: The government published an official statement.\nB: What does it say exactly?",
     funFact:"A 'communique de presse' is a press release. The word entered English directly from French during World War I."},

    {type:"teach", trg:"la démocratisation", src:"democratization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making something accessible to all.",
     example:"A: La démocratisation de l'éducation est essentielle.\nB: Tout le monde mérite les mêmes chances.",
     exampleSrc:"A: The democratization of education is essential.\nB: Everyone deserves the same opportunities.",
     funFact:"In France, 'democratisation culturelle' was a key policy of Andre Malraux, the first Minister of Culture in 1959."},

    {type:"match", pairs:[
      {trg:"accusé", src:"defendant"},
      {trg:"condamné", src:"convict"},
      {trg:"consul", src:"consul"},
      {trg:"délégué", src:"delegate"},
      {trg:"communiqué", src:"official statement"}
    ]},

    {type:"fb",
     s:"Le gouvernement a publié un {1} pour rassurer la population.",
     a:["communiqué"],
     opts:["communiqué","condamné","contradicteur","criminologue"],
     hint:"This is a formal public announcement, often given to the press.",
     sSrc:"The government published a {1} to reassure the population."},

    {type:"mc",
     q:"Quel mot désigne le processus de rendre quelque chose accessible à tous ?",
     opts:["la criminologie","la cruauté","la démocratisation","la désobéissance"],
     ans:"la démocratisation",
     hint:"Think of expanding access and opportunity. It contains a familiar political root word."}
  ]
};
export default LESSON_2;
