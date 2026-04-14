const LESSON_6 = {
  id:"frv2_b2g2_l6", title:"Politique et gouvernance", icon:"\u{1F3DB}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et gouvernance",
     desc:"Master political and governance vocabulary. From confederation to communism, from delegates to decrees. Essential for understanding French current affairs.",
     goals:["Learn 20 political and governance terms","Discuss government policies in French","Understand political movements"]},

    {type:"teach", trg:"le confederalisme", src:"the confederalism", pos:"noun", gender:"m",
     note:"Masculine noun. A political system where states retain significant sovereignty.",
     example:"A: Le confederalisme suisse est un modele unique.\nB: Chaque canton garde beaucoup d'autonomie.",
     exampleSrc:"A: Swiss confederalism is a unique model.\nB: Each canton keeps a lot of autonomy.",
     funFact:"Switzerland is officially called 'Confederation helvetique'. Belgium also debates confederalism."},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine noun. A person who supports communism. Feminine: une communiste.",
     example:"A: Le Parti communiste a joue un role important en France.\nB: Surtout apres la Seconde Guerre mondiale.",
     exampleSrc:"A: The Communist Party played an important role in France.\nB: Especially after World War II.",
     funFact:"The French Communist Party was the largest in Western Europe in the 1940s-50s. It shaped French politics."},

    {type:"teach", trg:"un communard", src:"a communard", pos:"noun", gender:"m",
     note:"Masculine noun. A participant in the Paris Commune of 1871. Feminine: une communarde.",
     example:"A: Les communards se sont battus pour la justice sociale.\nB: La Commune n'a dure que 72 jours.",
     exampleSrc:"A: The communards fought for social justice.\nB: The Commune only lasted 72 days.",
     funFact:"The Paris Commune of 1871 inspired socialist movements worldwide. It was violently suppressed."},

    {type:"teach", trg:"un compatriote", src:"a compatriot", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow citizen of the same country. Feminine: une compatriote.",
     example:"A: J'ai rencontre un compatriote a l'etranger.\nB: Ca fait plaisir de parler francais !",
     exampleSrc:"A: I met a compatriot abroad.\nB: It feels good to speak French!",
     funFact:"De Gaulle often addressed the French as 'mes chers compatriotes' in his famous speeches."},

    {type:"teach", trg:"le conformisme", src:"the conformism", pos:"noun", gender:"m",
     note:"Masculine noun. The tendency to comply with prevailing norms.",
     example:"A: Le conformisme etouffe la creativite.\nB: Il faut encourager la pensee independante.",
     exampleSrc:"A: Conformism stifles creativity.\nB: We need to encourage independent thinking.",
     funFact:"French culture has a paradox: it celebrates rebels ('non-conformistes') while having strong social norms."},

    {type:"mc",
     q:"Comment appelle-t-on un citoyen du meme pays que soi ?",
     opts:["un compatriote","un communard","un communiste","un conformiste"],
     ans:"un compatriote",
     hint:"Someone who shares your country. Think 'com-' (together) + 'patrie' (homeland)."},

    {type:"teach", trg:"un confrere", src:"a colleague (in a profession)", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow member of a profession. Feminine: une consoeur.",
     example:"A: Mon confrere a publie un article remarquable.\nB: Oui, ses recherches sont brillantes.",
     exampleSrc:"A: My colleague published a remarkable article.\nB: Yes, his research is brilliant.",
     funFact:"Used among doctors, lawyers, and journalists. 'Collegue' is more general. 'Confrere' implies shared craft."},

    {type:"teach", trg:"conformement", src:"in accordance with", pos:"adv", gender:null,
     note:"Adverb. In agreement with rules or expectations.",
     example:"A: Ce rapport a ete redige conformement aux normes.\nB: Parfait, il peut etre publie.",
     exampleSrc:"A: This report was written in accordance with standards.\nB: Perfect, it can be published.",
     funFact:"A very formal, administrative word. You will see it in every French legal document and contract."},

    {type:"teach", trg:"le bourgmestre", src:"the burgomaster, the mayor", pos:"noun", gender:"m",
     note:"Masculine noun. A mayor in Belgium, the Netherlands, or Germany.",
     example:"A: Le bourgmestre de Bruxelles a inaugure le nouveau parc.\nB: C'etait une belle ceremonie.",
     exampleSrc:"A: The burgomaster of Brussels inaugurated the new park.\nB: It was a beautiful ceremony.",
     funFact:"Used in Belgian French instead of 'maire'. From Dutch 'burgemeester'. A Francophone Belgium signature."},

    {type:"teach", trg:"ducal", src:"ducal, of a duke", pos:"adj", gender:null,
     note:"Adjective. Relating to a duke or duchess. Feminine: ducale.",
     example:"A: Le palais ducal de Nancy est magnifique.\nB: Il date du XVIIIe siecle.",
     exampleSrc:"A: The ducal palace of Nancy is magnificent.\nB: It dates from the 18th century.",
     funFact:"Luxembourg is the world's only Grand Duchy. Its ruler is the Grand-Duc, not a king."},

    {type:"fb",
     s:"Ce document a ete redige {1} a la legislation en vigueur.",
     a:["conformement"],
     opts:["conformement","efficacement","assurement","concretement"],
     hint:"In agreement with or according to established rules. A formal, legal term.",
     sSrc:"This document was written {1} with current legislation."},

    {type:"teach", trg:"altermondialiste", src:"alter-globalist, anti-globalization", pos:"adj", gender:null,
     note:"Adjective. Advocating for a different form of globalization.",
     example:"A: Le mouvement altermondialiste milite pour plus de justice.\nB: Ils proposent des alternatives economiques.",
     exampleSrc:"A: The alter-globalist movement campaigns for more justice.\nB: They propose economic alternatives.",
     funFact:"Born at the 2001 World Social Forum in Porto Alegre. 'Un autre monde est possible' is its motto."},

    {type:"teach", trg:"l'avenement", src:"the advent, the accession", pos:"noun", gender:"m",
     note:"Masculine noun. The arrival of something important or a leader's rise to power.",
     example:"A: L'avenement d'internet a change le monde.\nB: Rien ne sera plus jamais pareil.",
     exampleSrc:"A: The advent of the internet changed the world.\nB: Nothing will ever be the same.",
     funFact:"Originally used for kings: 'l'avenement au trone' (accession to the throne). Now used broadly."},

    {type:"teach", trg:"l'antipathie", src:"the antipathy, the dislike", pos:"noun", gender:"f",
     note:"Feminine noun. A deep feeling of dislike or aversion.",
     example:"A: L'antipathie entre les deux dirigeants est evidente.\nB: Ils ne se parlent plus depuis des mois.",
     exampleSrc:"A: The antipathy between the two leaders is obvious.\nB: They haven't spoken for months.",
     funFact:"From Greek 'anti' (against) + 'pathos' (feeling). The opposite is 'sympathie'."},

    {type:"mc",
     q:"Quel terme designe un mouvement proposant une mondialisation differente ?",
     opts:["altermondialiste","communiste","confederaliste","conformiste"],
     ans:"altermondialiste",
     hint:"Not anti-globalization but pro-alternative globalization. Think 'alter' (other) + 'monde' (world)."},

    {type:"teach", trg:"un commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun. A person who works in sales. Feminine: une commerciale.",
     example:"A: Le commercial a presente le nouveau produit aux clients.\nB: Les ventes ont augmente de vingt pour cent.",
     exampleSrc:"A: The sales rep presented the new product to clients.\nB: Sales increased by twenty percent.",
     funFact:"In France, 'un commercial' is both the person and the adjective. Context tells you which."},

    {type:"teach", trg:"l'ascendance", src:"the ancestry, the lineage", pos:"noun", gender:"f",
     note:"Feminine noun. One's family line going back through generations.",
     example:"A: Elle est d'ascendance algerienne.\nB: Ses grands-parents sont arrives en France dans les annees soixante.",
     exampleSrc:"A: She is of Algerian ancestry.\nB: Her grandparents came to France in the sixties.",
     funFact:"France's diversity means 'ascendance' appears often in social discourse. Nearly 1 in 4 French people has foreign ancestry."},

    {type:"teach", trg:"le desabusement", src:"the disillusionment", pos:"noun", gender:"m",
     note:"Masculine noun. The state of having lost one's illusions.",
     example:"A: Le desabusement des electeurs est palpable.\nB: Le taux d'abstention ne cesse d'augmenter.",
     exampleSrc:"A: The disillusionment of voters is palpable.\nB: The abstention rate keeps rising.",
     funFact:"'Desabuse' literally means 'undeceived'. French political commentary loves this word."},

    {type:"teach", trg:"l'allegresse", src:"the elation, the joy", pos:"noun", gender:"f",
     note:"Feminine noun. Great happiness or celebration.",
     example:"A: L'allegresse etait generale apres la victoire.\nB: Tout le monde dansait dans les rues.",
     exampleSrc:"A: Elation was widespread after the victory.\nB: Everyone was dancing in the streets.",
     funFact:"The 1998 World Cup victory created 'allegresse nationale' in France. A moment of unity."},

    {type:"fb",
     s:"L'{1} d'internet a revolutionne nos modes de communication.",
     a:["avenement"],
     opts:["avenement","allegresse","antipathie","ascendance"],
     hint:"The arrival or coming of something transformative. Originally used for kings.",
     sSrc:"The {1} of the internet revolutionized our ways of communicating."},

    {type:"match", pairs:[
      {trg:"compatriote", src:"compatriot"},
      {trg:"bourgmestre", src:"burgomaster"},
      {trg:"antipathie", src:"antipathy"},
      {trg:"avenement", src:"advent"},
      {trg:"allegresse", src:"elation"}
    ]},

    {type:"mc",
     q:"Quel mot designe la lignee familiale d'une personne ?",
     opts:["l'ascendance","l'allegresse","l'antipathie","l'avenement"],
     ans:"l'ascendance",
     hint:"Your family tree going back through generations. Think of 'ascending' through time."},

    {type:"fb",
     s:"Le {1} de Bruxelles a inaugure le festival cette annee.",
     a:["bourgmestre"],
     opts:["bourgmestre","communard","communiste","commercial"],
     hint:"The Belgian French word for mayor. From Dutch 'burgemeester'.",
     sSrc:"The {1} of Brussels inaugurated the festival this year."}
  ]
};
export default LESSON_6;
