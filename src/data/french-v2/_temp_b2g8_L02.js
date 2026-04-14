const LESSON_2 = {
  id:"frv2_b2g8_l2", title:"Société et appartenance", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Société et appartenance",
     desc:"Vocabulary for discussing social groups, belonging, and community dynamics at a B2 level.",
     goals:["Learn 15 words about society and belonging","Discuss migration and identity","Express social commentary fluently"]},

    {type:"teach", trg:"un migrant", src:"a migrant", pos:"noun", gender:"m",
     note:"Masculine noun. A person who moves to a new region or country.\nFeminine: une migrante.",
     example:"A: Les migrants arrivent de plus en plus nombreux.\nB: Il faut organiser un accueil digne.",
     exampleSrc:"A: Migrants are arriving in ever greater numbers.\nB: We need to organize a dignified welcome.",
     funFact:"French distinguishes 'migrant' (in transit), 'immigré' (settled), and 'réfugié' (fleeing danger)."},

    {type:"teach", trg:"un natif", src:"a native", pos:"noun", gender:"m",
     note:"Masculine noun. A person born in a particular place.\nFeminine: une native.",
     example:"A: Elle est native de Lyon.\nB: Ah, une vraie Lyonnaise alors !",
     exampleSrc:"A: She is a native of Lyon.\nB: Ah, a true Lyonnaise then!",
     funFact:"'Langue native' is less common than 'langue maternelle' in French. 'Natif' sounds more literary."},

    {type:"teach", trg:"un nanti", src:"a wealthy person, a privileged person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who has more than enough.\nOften used critically.",
     example:"A: Les nantis ne comprennent pas la pauvreté.\nB: Il y a un fossé entre les classes.",
     exampleSrc:"A: The privileged don't understand poverty.\nB: There is a gap between classes.",
     funFact:"From the old French verb 'nantir' meaning to provide or endow. Always carries a critical edge."},

    {type:"teach", trg:"la maisonnée", src:"the household", pos:"noun", gender:"f",
     note:"Feminine noun. All the people living under one roof.\nWarmer than 'ménage'.",
     example:"A: Toute la maisonnée était réunie.\nB: Ça fait du bien de se retrouver.",
     exampleSrc:"A: The whole household was gathered.\nB: It feels good to be together.",
     funFact:"A cozy, old-fashioned word. 'Ménage' is the modern administrative term for household."},

    {type:"mc",
     q:"Quel mot désigne une personne riche et privilégiée, souvent avec un ton critique ?",
     opts:["nanti","natif","migrant","modéré"],
     ans:"nanti",
     hint:"From 'nantir' meaning to endow. This word always carries a critical undertone about wealth."},

    {type:"teach", trg:"un modéré", src:"a moderate", pos:"noun", gender:"m",
     note:"Masculine noun. A person with centrist views.\nFeminine: une modérée.",
     example:"A: Les modérés cherchent le compromis.\nB: C'est parfois difficile en politique.",
     exampleSrc:"A: The moderates seek compromise.\nB: That's sometimes difficult in politics.",
     funFact:"In the French Revolution, 'les modérés' were those who opposed the extremism of the Terror."},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine noun. A follower of communism.\nFeminine: une communiste. Also used as adjective.",
     example:"A: Le parti communiste a perdu beaucoup de voix.\nB: Les temps ont changé.",
     exampleSrc:"A: The communist party has lost many votes.\nB: Times have changed.",
     funFact:"The French Communist Party (PCF) was once the largest in Western Europe, peaking at 28% in 1946."},

    {type:"teach", trg:"la globalité", src:"the entirety, the whole picture", pos:"noun", gender:"f",
     note:"Feminine noun. The complete scope of something.\n'Dans sa globalité' means as a whole.",
     example:"A: Il faut voir le problème dans sa globalité.\nB: Oui, une vision partielle ne suffit pas.",
     exampleSrc:"A: We need to see the problem in its entirety.\nB: Yes, a partial view is not enough.",
     funFact:"Not the same as 'globalisation'. 'Globalité' focuses on completeness, not worldwide spread."},

    {type:"fb",
     s:"Toute la {1} était réunie pour le repas de fête.",
     a:["maisonnée"],
     opts:["maisonnée","globalité","norme","division"],
     hint:"A warm word for all the people living under one roof. Think of a big family dinner.",
     sSrc:"The whole {1} was gathered for the festive meal."},

    {type:"teach", trg:"la norme", src:"the norm, the standard", pos:"noun", gender:"f",
     note:"Feminine noun. An accepted standard or rule.\n'Hors norme' means extraordinary.",
     example:"A: Ce résultat est dans la norme.\nB: Rien d'alarmant alors.",
     exampleSrc:"A: This result is within the norm.\nB: Nothing alarming then.",
     funFact:"'Hors norme' is one of the most expressive French compliments, meaning beyond all standards."},

    {type:"teach", trg:"la division", src:"the division", pos:"noun", gender:"f",
     note:"Feminine noun. A split or separation, in math or society.",
     example:"A: La division au sein du parti est profonde.\nB: Il sera difficile de se réconcilier.",
     exampleSrc:"A: The division within the party is deep.\nB: It will be difficult to reconcile.",
     funFact:"In the French military, a 'division' is about 15,000 soldiers, just as in most NATO countries."},

    {type:"teach", trg:"la désobéissance", src:"the disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. Refusal to obey rules or authority.\n'Civile' is the key collocate.",
     example:"A: La désobéissance civile est un acte politique.\nB: Oui, c'est une tradition en France.",
     exampleSrc:"A: Civil disobedience is a political act.\nB: Yes, it's a tradition in France.",
     funFact:"France has a long history of civil disobedience, from the Revolution to the Gilets Jaunes movement."},

    {type:"mc",
     q:"Comment dit-on 'voir le problème dans son ensemble' ?",
     opts:["dans sa globalité","dans sa norme","dans sa division","dans sa maisonnée"],
     ans:"dans sa globalité",
     hint:"The word means the complete scope or entirety. Not about standards or splitting."},

    {type:"teach", trg:"un assisté", src:"a welfare recipient", pos:"noun", gender:"m",
     note:"Masculine noun. Someone receiving state aid.\nOften used pejoratively. Feminine: une assistée.",
     example:"A: On ne peut pas traiter les gens d'assistés.\nB: Tu as raison, c'est irrespectueux.",
     exampleSrc:"A: We can't call people welfare recipients.\nB: You're right, it's disrespectful.",
     funFact:"This word is at the center of French welfare debates. Politicians use it carefully."},

    {type:"teach", trg:"un indicateur", src:"an indicator", pos:"noun", gender:"m",
     note:"Masculine noun. A sign, measure, or gauge of something.",
     example:"A: Cet indicateur économique est en hausse.\nB: C'est un bon signe pour l'emploi.",
     exampleSrc:"A: This economic indicator is rising.\nB: That's a good sign for employment.",
     funFact:"In police slang, 'un indicateur' also means an informant. Context tells you which meaning."},

    {type:"teach", trg:"la médiation", src:"the mediation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of resolving a conflict with a neutral third party.",
     example:"A: La médiation a permis d'éviter le procès.\nB: Les deux parties sont satisfaites.",
     exampleSrc:"A: Mediation allowed them to avoid the trial.\nB: Both parties are satisfied.",
     funFact:"France created the role of 'Médiateur de la République' in 1973, now called 'Défenseur des droits'."},

    {type:"fb",
     s:"La {1} civile est une longue tradition en France.",
     a:["désobéissance"],
     opts:["désobéissance","médiation","division","norme"],
     hint:"The refusal to obey laws or authority, often for political reasons.",
     sSrc:"Civil {1} is a long tradition in France."},

    {type:"match", pairs:[
      {trg:"migrant", src:"migrant"},
      {trg:"nanti", src:"privileged person"},
      {trg:"norme", src:"norm, standard"},
      {trg:"médiation", src:"mediation"},
      {trg:"indicateur", src:"indicator"}
    ]},

    {type:"mc",
     q:"Quel mot désigne quelqu'un qui reçoit des aides sociales ?",
     opts:["un assisté","un modéré","un natif","un communiste"],
     ans:"un assisté",
     hint:"From 'assister' meaning to assist. Often used in debates about social welfare."},

    {type:"fb",
     s:"Cet {1} économique est en hausse, c'est un bon signe.",
     a:["indicateur"],
     opts:["indicateur","assisté","modéré","natif"],
     hint:"A measure or gauge that shows how something is performing.",
     sSrc:"This economic {1} is rising, it's a good sign."}
  ]
};
export default LESSON_2;
