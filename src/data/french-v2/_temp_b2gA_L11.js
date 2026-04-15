const LESSON_11 = {
  id:"frv2_b2gA_l11", title:"Phenomenes sociaux", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Phenomenes sociaux",
     desc:"Analyze social trends and phenomena with precise vocabulary. From discrimination to identity, engage with the issues shaping French society.",
     goals:["Learn 14 social phenomenon words","Discuss inequality and identity","Use sociological vocabulary in debates"]},

    {type:"teach", trg:"la discrimination", src:"discrimination", pos:"noun", gender:"f",
     note:"Feminine noun. Unfair treatment based on group identity.\nA major topic in French public discourse.",
     example:"A: La discrimination a l'embauche est illegale.\nB: Mais elle existe toujours en pratique.",
     exampleSrc:"A: Hiring discrimination is illegal.\nB: But it still exists in practice.",
     funFact:"France has a dedicated agency: le Defenseur des droits. Anonymous CV testing has shown persistent discrimination."},

    {type:"teach", trg:"l'exclusion", src:"exclusion", pos:"noun", gender:"f",
     note:"Feminine noun. Being shut out from society or a group.\n'L'exclusion sociale' is a major French concern.",
     example:"A: L'exclusion sociale touche des millions de personnes.\nB: Il faut agir pour l'inclusion.",
     exampleSrc:"A: Social exclusion affects millions of people.\nB: We must act for inclusion.",
     funFact:"Abbe Pierre's 1954 appeal against homelessness made 'l'exclusion' a central French political concept."},

    {type:"teach", trg:"l'anonymat", src:"anonymity", pos:"noun", gender:"m",
     note:"Masculine noun. The state of being unnamed or unidentified.\n'Garder l'anonymat' = to remain anonymous.",
     example:"A: Le temoin a demande l'anonymat.\nB: Sa securite doit etre protegee.",
     exampleSrc:"A: The witness requested anonymity.\nB: His safety must be protected.",
     funFact:"French law allows anonymous birth ('accouchement sous X'). A mother can give birth without revealing her identity."},

    {type:"teach", trg:"le harcelement", src:"harassment", pos:"noun", gender:"m",
     note:"Masculine noun. Persistent, unwanted aggressive behavior.\n'Harcelement moral' = workplace bullying.",
     example:"A: Le harcelement en ligne est un fleau.\nB: Les reseaux sociaux doivent agir.",
     exampleSrc:"A: Online harassment is a scourge.\nB: Social networks must act.",
     funFact:"France passed specific anti-cyberbullying laws in 2014. 'Harcelement moral' at work is a distinct crime since 2002."},

    {type:"teach", trg:"un indigene", src:"an indigenous person", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une indigene.\nA native inhabitant. Can be sensitive in colonial contexts.",
     example:"A: Les droits des peuples indigenes sont fondamentaux.\nB: Leur culture doit etre respectee.",
     exampleSrc:"A: Indigenous peoples' rights are fundamental.\nB: Their culture must be respected.",
     funFact:"In France, 'Les Indigenes de la Republique' was a movement highlighting discrimination against post-colonial populations."},

    {type:"mc",
     q:"Quel mot designe le fait d'etre mis a l'ecart de la societe ?",
     opts:["l'exclusion","l'anonymat","le harcelement","la discrimination"],
     ans:"l'exclusion",
     hint:"Being shut out from social participation. Think of marginalized communities."},

    {type:"teach", trg:"la delinquance", src:"delinquency, crime", pos:"noun", gender:"f",
     note:"Feminine noun. Criminal behavior, especially by young people.\n'Delinquance juvenile' = youth crime.",
     example:"A: La delinquance a baisse dans ce quartier.\nB: Les programmes de prevention fonctionnent.",
     exampleSrc:"A: Delinquency has decreased in this neighborhood.\nB: Prevention programs are working.",
     funFact:"France debates 'la prevention' versus 'la repression' constantly. Both left and right claim to have the answer."},

    {type:"teach", trg:"la precarite", src:"precariousness, instability", pos:"noun", gender:"f",
     note:"Feminine noun. Economic and social instability. A key French social concept.",
     example:"A: La precarite touche de plus en plus de jeunes.\nB: Les contrats courts ne permettent pas de se projeter.",
     exampleSrc:"A: Precariousness affects more and more young people.\nB: Short contracts don't allow you to plan ahead.",
     funFact:"'Precarite' is one of the most debated words in French politics. It covers jobs, housing, and social stability."},

    {type:"teach", trg:"l'integration", src:"integration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming part of a group or society.",
     example:"A: L'integration des nouveaux arrivants est une priorite.\nB: L'apprentissage de la langue est essentiel.",
     exampleSrc:"A: The integration of newcomers is a priority.\nB: Language learning is essential.",
     funFact:"France's integration model differs from multiculturalism. The Republic expects all to adopt shared civic values."},

    {type:"fb",
     s:"Le {1} en ligne est devenu un probleme majeur pour les adolescents.",
     a:["harcelement"],
     opts:["harcelement","anonymat","exclusion","delinquance"],
     hint:"Persistent aggressive behavior directed at someone. A crime when it happens online.",
     sSrc:"Online {1} has become a major problem for teenagers."},

    {type:"teach", trg:"la solidarite", src:"solidarity", pos:"noun", gender:"f",
     note:"Feminine noun. Mutual support and unity within a group.\nA core French Republican value.",
     example:"A: La solidarite nationale est essentielle en temps de crise.\nB: On doit s'entraider.",
     exampleSrc:"A: National solidarity is essential in times of crisis.\nB: We must help each other.",
     funFact:"'Solidarite' is one of France's three unofficial Republican values alongside liberte and egalite."},

    {type:"teach", trg:"l'emancipation", src:"emancipation", pos:"noun", gender:"f",
     note:"Feminine noun. Liberation from social or legal restrictions.",
     example:"A: L'emancipation des femmes a transforme la societe.\nB: Mais il reste du chemin a parcourir.",
     exampleSrc:"A: Women's emancipation transformed society.\nB: But there's still a way to go.",
     funFact:"Simone de Beauvoir's 'Le Deuxieme Sexe' (1949) is a foundational text of French emancipation discourse."},

    {type:"teach", trg:"le communautarisme", src:"communitarianism, identity politics", pos:"noun", gender:"m",
     note:"Masculine noun. Prioritizing community identity over national unity.\nOften used critically in France.",
     example:"A: Le debat sur le communautarisme divise la France.\nB: C'est une question tres sensible.",
     exampleSrc:"A: The debate over communitarianism divides France.\nB: It's a very sensitive issue.",
     funFact:"In French, 'communautarisme' is almost always negative. It implies a threat to the universal Republican model."},

    {type:"mc",
     q:"Quel mot designe l'instabilite economique et sociale ?",
     opts:["la precarite","la solidarite","l'integration","la delinquance"],
     ans:"la precarite",
     hint:"A key concept in French social debate. Covers insecure jobs, housing, and life conditions."},

    {type:"teach", trg:"la mixite", src:"diversity, mixing (social/gender)", pos:"noun", gender:"f",
     note:"Feminine noun. The mixing of different groups.\n'Mixite sociale' = social diversity in housing.",
     example:"A: La mixite sociale enrichit les quartiers.\nB: Il faut construire des logements variees.",
     exampleSrc:"A: Social diversity enriches neighborhoods.\nB: We need to build varied housing.",
     funFact:"France's urban planning laws require 25% social housing in cities over 3,500 inhabitants to ensure mixite."},

    {type:"fb",
     s:"La {1} nationale nous unit en temps de crise.",
     a:["solidarite"],
     opts:["solidarite","precarite","mixite","exclusion"],
     hint:"Mutual support and unity. A core French value alongside liberty and equality.",
     sSrc:"National {1} unites us in times of crisis."},

    {type:"match", pairs:[
      {trg:"discrimination", src:"discrimination"},
      {trg:"anonymat", src:"anonymity"},
      {trg:"delinquance", src:"delinquency"},
      {trg:"integration", src:"integration"},
      {trg:"mixite", src:"social diversity"}
    ]},

    {type:"mc",
     q:"Quel concept, souvent critique en France, designe la priorite donnee a l'identite communautaire ?",
     opts:["le communautarisme","la solidarite","l'emancipation","la precarite"],
     ans:"le communautarisme",
     hint:"Seen as a threat to France's universal Republican model. Almost always used negatively."}
  ]
};
export default LESSON_11;
