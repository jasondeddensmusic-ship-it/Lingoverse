const LESSON_20 = {
  id:"frv2_b2g6_l20", title:"Bilan et consolidation", icon:"\uD83C\uDFC6", xp:15, board:true,
  steps:[
    {type:"intro", title:"Bilan et consolidation",
     desc:"Review and consolidate the vocabulary from this unit with mixed exercises and new contextual uses.",
     goals:["Review key words from all previous lessons","Practice words in new contexts","Build confidence with B2 vocabulary"]},

    {type:"teach", trg:"la rétrospective", src:"the retrospective, the review", pos:"noun", gender:"f",
     note:"Feminine noun. A looking back over past events or work.",
     example:"A: Le musée organise une rétrospective de Picasso.\nB: Plus de 200 œuvres sont exposées.",
     exampleSrc:"A: The museum is organizing a Picasso retrospective.\nB: Over 200 works are on display.",
     funFact:"'Rétrospective' is also used for film festivals: a full screening of a director's body of work."},

    {type:"teach", trg:"la quintessence", src:"the quintessence, the purest form", pos:"noun", gender:"f",
     note:"Feminine noun. The most perfect example or purest essence of something.",
     example:"A: Ce plat est la quintessence de la cuisine française.\nB: Simple mais parfait.",
     exampleSrc:"A: This dish is the quintessence of French cuisine.\nB: Simple but perfect.",
     funFact:"From medieval philosophy's 'fifth essence' beyond earth, air, fire, and water. The purest substance."},

    {type:"teach", trg:"l'aboutissement", src:"the outcome, the culmination", pos:"noun", gender:"m",
     note:"Masculine noun. The successful completion or end result of an effort.",
     example:"A: Ce diplôme est l'aboutissement de cinq ans de travail.\nB: Tu peux être fier de toi.",
     exampleSrc:"A: This diploma is the culmination of five years of work.\nB: You can be proud of yourself.",
     funFact:"From 'aboutir' (to lead to, to succeed). 'Mener à son aboutissement' means to bring to completion."},

    {type:"teach", trg:"le rayonnement", src:"the influence, the radiance", pos:"noun", gender:"m",
     note:"Masculine noun. The spreading of influence, culture, or light.",
     example:"A: Le rayonnement culturel de la France est mondial.\nB: La francophonie touche cinq continents.",
     exampleSrc:"A: France's cultural influence is worldwide.\nB: French-speaking reaches five continents.",
     funFact:"'Rayonnement' combines literal radiance and figurative prestige. Central to French foreign policy goals."},

    {type:"mc",
     q:"Que signifie 'la quintessence' ?",
     opts:["La forme la plus pure et parfaite","La cinquième partie","Un mélange de cinq éléments","Le résultat final"],
     ans:"La forme la plus pure et parfaite",
     hint:"From medieval philosophy. Beyond earth, air, fire, and water, there was a fifth, most elevated essence filling the heavens."},

    {type:"teach", trg:"la pérennité", src:"the permanence, the durability", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of lasting indefinitely.",
     example:"A: La pérennité de cette entreprise est assurée.\nB: Elle a de solides fondations.",
     exampleSrc:"A: The permanence of this company is assured.\nB: It has solid foundations.",
     funFact:"From Latin 'perennis' meaning everlasting. 'Pérenniser' means to make something permanent."},

    {type:"teach", trg:"l'enjeu", src:"the stake, what is at stake", pos:"noun", gender:"m",
     note:"Masculine noun. What is at stake in a situation or game.",
     example:"A: L'enjeu de cette élection est considérable.\nB: L'avenir du pays en dépend.",
     exampleSrc:"A: The stakes of this election are considerable.\nB: The country's future depends on it.",
     funFact:"From 'en' + 'jeu' (in play). One of the most used French analytical words. Every debate has its 'enjeux'."},

    {type:"teach", trg:"la portée", src:"the scope, the range, the significance", pos:"noun", gender:"f",
     note:"Feminine noun. The reach or significance of something.",
     example:"A: La portée de cette découverte est immense.\nB: Elle pourrait changer la médecine.",
     exampleSrc:"A: The significance of this discovery is immense.\nB: It could change medicine.",
     funFact:"From 'porter' (to carry). How far something reaches. Also means a musical staff or a litter of puppies."},

    {type:"fb",
     s:"L'{1} de cette négociation est la paix dans la région.",
     a:["enjeu"],
     opts:["enjeu","aboutissement","rayonnement","portée"],
     hint:"What is at stake. From 'en jeu', meaning what is in play or at risk.",
     sSrc:"The {1} of this negotiation is peace in the region."},

    {type:"teach", trg:"le tournant", src:"the turning point", pos:"noun", gender:"m",
     note:"Masculine noun. A decisive moment that changes the direction of events.",
     example:"A: Cette victoire est un tournant dans sa carrière.\nB: Tout a changé après.",
     exampleSrc:"A: This victory is a turning point in his career.\nB: Everything changed after.",
     funFact:"From 'tourner'. 'Prendre un tournant' means to navigate a curve (literal) or adapt to change (figurative)."},

    {type:"teach", trg:"l'essor", src:"the rise, the boom", pos:"noun", gender:"m",
     note:"Masculine noun. Rapid growth or expansion.",
     example:"A: L'essor des technologies vertes est encourageant.\nB: Les investissements augmentent.",
     exampleSrc:"A: The rise of green technologies is encouraging.\nB: Investments are increasing.",
     funFact:"From 'essorer' (to take flight). Originally described a bird spreading its wings. Now: rapid development."},

    {type:"teach", trg:"le déclin", src:"the decline", pos:"noun", gender:"m",
     note:"Masculine noun. A gradual decrease in quality, power, or importance.",
     example:"A: Le déclin de cette industrie est irréversible.\nB: Il faut reconvertir les travailleurs.",
     exampleSrc:"A: The decline of this industry is irreversible.\nB: Workers need to be retrained.",
     funFact:"From Latin 'declinare' meaning to turn aside. 'Être sur le déclin' means to be past one's prime."},

    {type:"mc",
     q:"Quel mot désigne une croissance rapide et dynamique ?",
     opts:["l'enjeu","l'essor","le déclin","le tournant"],
     ans:"l'essor",
     hint:"Originally meant a bird taking flight. Now describes rapid development or expansion."},

    {type:"teach", trg:"le constat", src:"the observation, the assessment", pos:"noun", gender:"m",
     note:"Masculine noun. A factual observation or official report.",
     example:"A: Le constat est clair: il faut agir.\nB: Les chiffres ne mentent pas.",
     exampleSrc:"A: The observation is clear: we must act.\nB: The numbers don't lie.",
     funFact:"'Constat d'accident' is the accident report form all French drivers fill out. 'Dresser un constat' means to state the facts."},

    {type:"teach", trg:"la remise en question", src:"the questioning, the re-evaluation", pos:"noun", gender:"f",
     note:"Feminine noun phrase. The act of questioning established beliefs or practices.",
     example:"A: La remise en question est nécessaire pour progresser.\nB: Il ne faut pas avoir peur de changer.",
     exampleSrc:"A: Questioning oneself is necessary to progress.\nB: We must not be afraid to change.",
     funFact:"A deeply French concept. 'Se remettre en question' (to question oneself) is seen as a sign of maturity."},

    {type:"teach", trg:"le bilan", src:"the assessment, the stock-taking", pos:"noun", gender:"m",
     note:"Masculine noun. A final summary or evaluation of a situation.",
     example:"A: Le bilan de cette année est mitigé.\nB: Des réussites, mais aussi des échecs.",
     exampleSrc:"A: This year's assessment is mixed.\nB: Successes, but also failures.",
     funFact:"From Italian 'bilancio' (balance). 'Faire le bilan' is what every French person does at year's end."},

    {type:"fb",
     s:"La {1} de cette réforme va bien au-delà de l'économie.",
     a:["portée"],
     opts:["portée","pérennité","quintessence","rétrospective"],
     hint:"The reach, scope, or significance of something. How far its effects extend.",
     sSrc:"The {1} of this reform goes well beyond the economy."},

    {type:"teach", trg:"l'avenir", src:"the future", pos:"noun", gender:"m",
     note:"Masculine noun. What is to come. 'À l'avenir' means from now on.",
     example:"A: L'avenir de cette technologie est prometteur.\nB: Elle va révolutionner le secteur.",
     exampleSrc:"A: The future of this technology is promising.\nB: It will revolutionize the sector.",
     funFact:"'Avoir de l'avenir' means to have potential. 'D'avenir' means up-and-coming. A word of hope."},

    {type:"teach", trg:"la perspective", src:"the perspective, the prospect", pos:"noun", gender:"f",
     note:"Feminine noun. A viewpoint, or prospects for the future.",
     example:"A: Les perspectives de croissance sont bonnes.\nB: L'économie reprend.",
     exampleSrc:"A: The growth prospects are good.\nB: The economy is recovering.",
     funFact:"Used in art (point de vue), philosophy, and everyday speech. 'En perspective' means in prospect/coming up."},

    {type:"match", pairs:[
      {trg:"enjeu", src:"what is at stake"},
      {trg:"essor", src:"rise, boom"},
      {trg:"tournant", src:"turning point"},
      {trg:"constat", src:"observation"},
      {trg:"perspective", src:"prospect"}
    ]},

    {type:"mc",
     q:"Que signifie 'se remettre en question' ?",
     opts:["Abandonner un projet","Refuser de changer","Réévaluer ses croyances et pratiques","Poser une question à nouveau"],
     ans:"Réévaluer ses croyances et pratiques",
     hint:"A phrase about questioning yourself and your established ways. A sign of maturity in French culture."},

    {type:"fb",
     s:"Ce diplôme est l'{1} de plusieurs années d'efforts.",
     a:["aboutissement"],
     opts:["aboutissement","avenir","déclin","essor"],
     hint:"The successful end result or culmination of sustained effort.",
     sSrc:"This diploma is the {1} of several years of effort."}
  ]
};
export default LESSON_20;
