const LESSON_1 = {
  id:"frv2_b2g7_l1", title:"Societe et politique", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Societe et politique",
     desc:"Explore vocabulary for discussing society, governance, and political systems at a B2 level.",
     goals:["Learn 15 words related to politics and society","Discuss democratic processes","Express opinions on social issues"]},

    {type:"teach", trg:"la democratisation", src:"democratization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming more democratic.",
     example:"A: La democratisation de ce pays avance lentement.\nB: Oui, mais chaque progres compte.",
     exampleSrc:"A: The democratization of this country is moving slowly.\nB: Yes, but every step forward counts.",
     funFact:"France's own democratization was a tumultuous process spanning from 1789 through multiple republics to the current Fifth Republic."},

    {type:"teach", trg:"un mandataire", src:"a representative, an agent", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who acts on behalf of another.",
     example:"A: Le mandataire a signe le contrat pour nous.\nB: Parfait, c'etait urgent.",
     exampleSrc:"A: The representative signed the contract for us.\nB: Perfect, it was urgent.",
     funFact:"From Latin 'mandatum' meaning a command. In French law, a 'mandataire' has legal authority to act for someone else."},

    {type:"teach", trg:"un manifeste", src:"a manifesto", pos:"noun", gender:"m",
     note:"Masculine noun. A public declaration of principles or intentions.",
     example:"A: Avez-vous lu le manifeste du parti ?\nB: Oui, il propose des reformes ambitieuses.",
     exampleSrc:"A: Have you read the party's manifesto?\nB: Yes, it proposes ambitious reforms.",
     funFact:"The most famous French manifesto may be the Declaration of the Rights of Man (1789), a cornerstone of modern democracy."},

    {type:"teach", trg:"la desobeissance", src:"disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. Refusal to obey rules or authority.",
     example:"A: La desobeissance civile est-elle justifiee ?\nB: Cela depend du contexte.",
     exampleSrc:"A: Is civil disobedience justified?\nB: It depends on the context.",
     funFact:"Thoreau's essay on civil disobedience inspired both Gandhi and Martin Luther King Jr. The French term is a direct calque."},

    {type:"mc",
     q:"Qui agit au nom d'une autre personne ?",
     opts:["un mandataire","un manifeste","un migrant","un modere"],
     ans:"un mandataire",
     hint:"This person has been given a 'mandat' to represent someone else."},

    {type:"teach", trg:"un migrant", src:"a migrant", pos:"noun", gender:"m",
     note:"Masculine noun. A person moving from one place to another.\nFeminine: une migrante.",
     example:"A: Les migrants arrivent par milliers chaque annee.\nB: Il faut un accueil digne.",
     exampleSrc:"A: Migrants arrive by the thousands each year.\nB: We need dignified reception.",
     funFact:"France distinguishes 'migrant' (general mover) from 'refugie' (fleeing persecution) and 'immigre' (settled permanently)."},

    {type:"teach", trg:"un modere", src:"a moderate", pos:"noun", gender:"m",
     note:"Masculine noun. A person with centrist views.\nAlso adjective: modere/moderee.",
     example:"A: Il se considere comme un modere.\nB: En politique, c'est parfois difficile.",
     exampleSrc:"A: He considers himself a moderate.\nB: In politics, that's sometimes difficult.",
     funFact:"In French politics, 'les moderes' historically occupied the center between monarchists and republicans."},

    {type:"teach", trg:"la majoration", src:"an increase, a surcharge", pos:"noun", gender:"f",
     note:"Feminine noun. An increase in price, tax, or penalty.",
     example:"A: Il y a une majoration de dix pour cent.\nB: C'est beaucoup trop !",
     exampleSrc:"A: There's a ten percent surcharge.\nB: That's way too much!",
     funFact:"In French tax law, a 'majoration' is the penalty added to late payments. The word comes from Latin 'major' meaning greater."},

    {type:"fb",
     s:"La {1} civile a parfois change le cours de l'histoire.",
     a:["desobeissance"],
     opts:["desobeissance","democratisation","majoration","manifeste"],
     hint:"Think of refusing to follow unjust laws, like Gandhi did.",
     sSrc:"Civil {1} has sometimes changed the course of history."},

    {type:"teach", trg:"l'insuffisance", src:"inadequacy, insufficiency", pos:"noun", gender:"f",
     note:"Feminine noun. A lack or shortage of something needed.",
     example:"A: L'insuffisance des moyens est un probleme majeur.\nB: Il faut plus de financements.",
     exampleSrc:"A: The inadequacy of resources is a major problem.\nB: We need more funding.",
     funFact:"In medicine, 'insuffisance cardiaque' means heart failure. The word covers both shortages and organ dysfunction."},

    {type:"teach", trg:"l'incapacite", src:"inability, incapacity", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being unable to do something.",
     example:"A: Son incapacite a prendre des decisions pose probleme.\nB: Il lui faut un adjoint.",
     exampleSrc:"A: His inability to make decisions is a problem.\nB: He needs a deputy.",
     funFact:"In French law, 'incapacite de travail' means work disability. It triggers specific social protections."},

    {type:"teach", trg:"mercantile", src:"mercantile, profit-driven", pos:"adj", gender:null,
     note:"Adjective. Focused on money and profit. Often negative.",
     example:"A: Cette approche est trop mercantile.\nB: La culture ne devrait pas etre un produit.",
     exampleSrc:"A: This approach is too mercantile.\nB: Culture shouldn't be a product.",
     funFact:"From Italian 'mercantile' via Latin 'mercari' (to trade). In French, it always carries a pejorative undertone."},

    {type:"mc",
     q:"Quel mot decrit une augmentation de prix ou de penalite ?",
     opts:["la majoration","l'insuffisance","la desobeissance","le manifeste"],
     ans:"la majoration",
     hint:"This is the surcharge you pay when a bill is overdue."},

    {type:"teach", trg:"mesquin", src:"petty, mean-spirited", pos:"adj", gender:null,
     note:"Adjective. Describes small-minded behavior.\nFeminine: mesquine.",
     example:"A: C'est mesquin de sa part.\nB: Je suis d'accord, il manque de generosite.",
     exampleSrc:"A: That's petty of him.\nB: I agree, he lacks generosity.",
     funFact:"From Arabic 'miskin' meaning poor or wretched, via Spanish 'mezquino'. The meaning shifted from poor to stingy."},

    {type:"teach", trg:"multinational", src:"multinational", pos:"adj", gender:null,
     note:"Adjective. Operating in several countries.\nFeminine: multinationale. Also a noun.",
     example:"A: Cette entreprise multinationale a des bureaux partout.\nB: Elle emploie plus de cent mille personnes.",
     exampleSrc:"A: This multinational company has offices everywhere.\nB: It employs more than a hundred thousand people.",
     funFact:"France is home to many multinationals in the CAC 40 index, including luxury giants and energy companies."},

    {type:"fb",
     s:"Cette attitude {1} ne lui gagnera pas d'amis.",
     a:["mesquine"],
     opts:["mesquine","multinationale","mercantile","moderee"],
     hint:"Being small-minded and ungenerous toward others.",
     sSrc:"This {1} attitude won't win her any friends."},

    {type:"teach", trg:"la malhonnetete", src:"dishonesty", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being dishonest.",
     example:"A: La malhonnetete des politiciens est un cliche.\nB: Mais certains le meritent vraiment.",
     exampleSrc:"A: The dishonesty of politicians is a cliche.\nB: But some truly deserve it.",
     funFact:"Built from 'mal' (bad) + 'honnetete' (honesty). French loves these mal- prefixed words for negative qualities."},

    {type:"match", pairs:[
      {trg:"mandataire", src:"representative"},
      {trg:"majoration", src:"surcharge"},
      {trg:"mesquin", src:"petty"},
      {trg:"mercantile", src:"profit-driven"},
      {trg:"manifeste", src:"manifesto"}
    ]},

    {type:"mc",
     q:"Quel est le contraire de l'honnetete ?",
     opts:["la malhonnetete","la majoration","l'incapacite","la desobeissance"],
     ans:"la malhonnetete",
     hint:"Add the prefix 'mal-' to the word for honesty."},

    {type:"fb",
     s:"Le {1} du parti promet des reformes sociales profondes.",
     a:["manifeste"],
     opts:["manifeste","mandataire","migrant","modere"],
     hint:"A written public declaration of a group's political intentions.",
     sSrc:"The party's {1} promises deep social reforms."}
  ]
};
export default LESSON_1;
