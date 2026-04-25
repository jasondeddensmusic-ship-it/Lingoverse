const LESSON_17 = {
  id:"frv2_b2gB_l17", title:"Debat et argumentation", icon:"\u{1F5E3}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Debat et argumentation",
     desc:"Master the vocabulary of formal debate, argumentation, and persuasive discourse in French.",
     goals:["Learn 10 debate and argument terms","Structure arguments formally","Express disagreement diplomatically"]},

    {type:"teach", trg:"le contrario", src:"the opposite view", pos:"noun", gender:"m",
     note:"Masculine noun. Used in 'a contrario' = by contrast, on the contrary.\nLatin expression commonly used in French legal and academic writing.",
     example:"A: A contrario, on pourrait argumenter le contraire.\nB: C'est un point de vue interessant.",
     exampleSrc:"A: By contrast, one could argue the opposite.\nB: That's an interesting point of view.",
     funFact:"French loves Latin phrases in formal debate: a contrario, a fortiori, a priori, a posteriori. They signal intellectual rigor."},

    {type:"teach", trg:"s'obstiner", src:"to persist stubbornly", pos:"verb", gender:null,
     note:"Reflexive -er verb. To refuse to change one's mind despite evidence.\nS'obstiner a + infinitive. Always implies stubbornness.",
     example:"A: Il s'obstine a nier l'evidence.\nB: C'est inutile, les preuves sont accablantes.",
     exampleSrc:"A: He stubbornly persists in denying the evidence.\nB: It's pointless, the proof is overwhelming.",
     funFact:"French culture values intellectual debate but dislikes obstination. 'Avoir raison mais s'obstiner' is considered a character flaw."},

    {type:"teach", trg:"un passe-passe", src:"a sleight of hand, a trick", pos:"noun", gender:"m",
     note:"Masculine compound noun. A conjuring trick or deceptive maneuver.\nTour de passe-passe = a clever trick. Invariant plural.",
     example:"A: C'est un tour de passe-passe comptable.\nB: Ils ont maquille les chiffres pour cacher les pertes.",
     exampleSrc:"A: It's an accounting sleight of hand.\nB: They doctored the figures to hide the losses.",
     funFact:"'Tour de passe-passe' comes from magic shows. In modern French, it always implies deception, usually financial or political."},

    {type:"teach", trg:"le désillusionnement", src:"disillusionment", pos:"noun", gender:"m",
     note:"Masculine noun. The state of having lost one's ideals or hopes.\nDes (removal) + illusion. Also: desenchantement.",
     example:"A: Le desillusionment des jeunes electeurs est profond.\nB: Ils ne croient plus aux promesses politiques.",
     exampleSrc:"A: The disillusionment of young voters is deep.\nB: They no longer believe in political promises.",
     funFact:"French sociologists speak of 'la France desillusionnee'. Voter abstention reached record highs in the 2020s."},

    {type:"teach", trg:"un defi", src:"a challenge, a dare", pos:"noun", gender:"m",
     note:"Masculine noun. A challenge to overcome, or a dare.\nRelever un defi = to take on a challenge. Lancer un defi = to throw down a challenge.",
     example:"A: Le changement climatique est le plus grand defi de notre epoque.\nB: Il faut agir maintenant, pas demain.",
     exampleSrc:"A: Climate change is the greatest challenge of our time.\nB: We need to act now, not tomorrow.",
     funFact:"French politicians love the word 'defi'. Every policy announcement frames the issue as a defi to be relevee (taken on)."},

    {type:"teach", trg:"une nuance", src:"a nuance, a shade", pos:"noun", gender:"f",
     note:"Feminine noun. A subtle difference in meaning, color, or tone.\nApporter des nuances = to qualify a statement. Nuancer = to nuance.",
     example:"A: Il faut apporter des nuances a cette analyse.\nB: La realite est plus complexe qu'un simple oui ou non.",
     exampleSrc:"A: We need to add nuance to this analysis.\nB: Reality is more complex than a simple yes or no.",
     funFact:"Nuance is considered a core French intellectual value. 'C'est plus nuance que ca' (it's more nuanced than that) is a classic French response."},

    {type:"teach", trg:"recapituler", src:"to summarize, to recap", pos:"verb", gender:null,
     note:"Regular -er verb. To go over the main points again.\nRecapitulons = let's recap. Common in meetings and presentations.",
     example:"A: Recapitulons les points principaux.\nB: Premierement, le budget. Deuxiemement, le calendrier.",
     exampleSrc:"A: Let's recap the main points.\nB: First, the budget. Second, the timeline.",
     funFact:"French meetings always end with a 'recapitulatif' (summary). Not providing one is considered disorganized and unprofessional."},

    {type:"teach", trg:"conceder", src:"to concede, to admit", pos:"verb", gender:null,
     note:"Regular -er verb (accent change: concede). To admit that something is true.\nJe concede que = I concede that. A key debate move.",
     example:"A: Je concede que votre argument a du merite.\nB: Merci, mais il y a d'autres aspects a considerer.",
     exampleSrc:"A: I concede that your argument has merit.\nB: Thank you, but there are other aspects to consider.",
     funFact:"In French debate culture, conceding a point elegantly actually strengthens your position. It shows intellectual honesty."},

    {type:"teach", trg:"etayer", src:"to support, to shore up", pos:"verb", gender:null,
     note:"Regular -er verb. To support an argument with evidence.\nEtayer une these = to back up a thesis. From 'etai' (a prop/support).",
     example:"A: Pouvez-vous etayer cette affirmation avec des chiffres?\nB: Bien sur, voici les statistiques officielles.",
     exampleSrc:"A: Can you support this claim with figures?\nB: Of course, here are the official statistics.",
     funFact:"French academic writing demands heavily etayed arguments. An opinion without evidence is considered 'gratuit' (baseless)."},

    {type:"teach", trg:"refuter", src:"to refute, to disprove", pos:"verb", gender:null,
     note:"Regular -er verb. To prove a claim is false.\nRefuter un argument = to refute an argument. Stronger than 'contester'.",
     example:"A: L'etude refute completement cette theorie.\nB: Les donnees sont sans appel.",
     exampleSrc:"A: The study completely refutes this theory.\nB: The data is conclusive.",
     funFact:"French distinguishes refuter (to disprove with evidence) from contester (to dispute). Refuter carries more intellectual weight."},

    {type:"mc", q:"Que signifie 'a contrario'?",
     opts:["Au contraire","En plus","Par exemple","En conclusion"],
     ans:"Au contraire",
     hint:"This Latin expression introduces an opposing argument or viewpoint"},

    {type:"fb", s:"Il faut {1} cette these avec des preuves solides.",
     a:["etayer"], opts:["etayer","refuter","conceder","recapituler"],
     hint:"The verb means to support or shore up an argument with evidence",
     sSrc:"You need to {1} this thesis with solid evidence."},

    {type:"mc", q:"'Un tour de passe-passe' est:",
     opts:["Un exercice physique","Une manoeuvre trompeuse","Un voyage rapide","Un exploit sportif"],
     ans:"Une manoeuvre trompeuse",
     hint:"The expression comes from magic shows and implies deceptive trickery"},

    {type:"match", pairs:[
      {trg:"s'obstiner", src:"to persist stubbornly"},
      {trg:"conceder", src:"to concede"},
      {trg:"etayer", src:"to support (argument)"},
      {trg:"refuter", src:"to refute"}
    ]},

    {type:"fb", s:"Je {1} que votre point de vue est valide.",
     a:["concede"], opts:["concede","refute","etaye","recapitule"],
     hint:"Admitting that your opponent has a valid point, a sign of intellectual honesty",
     sSrc:"I {1} that your point of view is valid."},

    {type:"mc", q:"Que signifie 'apporter des nuances'?",
     opts:["Simplifier un probleme","Ignorer les details","Rendre une analyse plus precise","Ajouter des couleurs"],
     ans:"Rendre une analyse plus precise",
     hint:"Nuance means subtle differences, so adding them makes analysis more refined"},

    {type:"fb", s:"L'etude {1} completement les conclusions precedentes.",
     a:["refute"], opts:["refute","concede","etaye","recapitule"],
     hint:"The strong verb for disproving a claim with conclusive evidence",
     sSrc:"The study completely {1} the previous conclusions."},

    {type:"mc", q:"Le {1} des jeunes electeurs se traduit par l'abstention.",
     opts:["contrario","nuance","defi","desillusionment"],
     ans:"desillusionment",
     hint:"The loss of ideals and hopes about the political system"},

    {type:"fb", s:"{1} les trois points cles de notre discussion.",
     a:["Recapitulons"], opts:["Recapitulons","Refutons","Concedons","Obstinons"],
     hint:"The imperative form meaning 'let us summarize the main points'",
     sSrc:"Let's {1} the three key points of our discussion."},

    {type:"match", pairs:[
      {trg:"un passe-passe", src:"a sleight of hand"},
      {trg:"un defi", src:"a challenge"},
      {trg:"une nuance", src:"a nuance"},
      {trg:"recapituler", src:"to recap"}
    ]}
  ]
};
export default LESSON_17;
