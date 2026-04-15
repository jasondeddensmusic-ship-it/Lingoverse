const LESSON_13 = {
  id:"frv2_b2gA_l13", title:"Pleurnicher et se plaindre", icon:"\u{1F62D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pleurnicher et se plaindre",
     desc:"Learn to express complaints, frustration, and emotional reactions with the vocabulary French speakers actually use.",
     goals:["Learn 14 emotion and complaint words","Express frustration and annoyance","Distinguish registers when complaining"]},

    {type:"teach", trg:"pleurnicher", src:"to whine, to snivel", pos:"verb", gender:null,
     note:"Regular -er verb. To cry or complain in a weak, annoying way.\nMore childish than 'pleurer'.",
     example:"A: Arrete de pleurnicher, ce n'est pas grave.\nB: Mais j'ai mal au genou !",
     exampleSrc:"A: Stop whining, it's not serious.\nB: But my knee hurts!",
     funFact:"Built from 'pleurer' (to cry) with the diminutive -nicher. It implies the crying is exaggerated or annoying."},

    {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or remark.\n'Point d'exclamation' = exclamation mark.",
     example:"A: Son exclamation de surprise a fait rire tout le monde.\nB: Il ne s'y attendait pas du tout.",
     exampleSrc:"A: His exclamation of surprise made everyone laugh.\nB: He didn't expect it at all.",
     funFact:"French uses exclamation marks more liberally than English. Formal letters can end with 'Veuillez agreer...!'"},

    {type:"teach", trg:"la detonation", src:"the detonation, the blast", pos:"noun", gender:"f",
     note:"Feminine noun. A loud explosion or blast sound.\nFrom 'detoner' (to detonate).",
     example:"A: La detonation a fait trembler les vitres.\nB: C'etait probablement un feu d'artifice.",
     exampleSrc:"A: The detonation made the windows shake.\nB: It was probably fireworks.",
     funFact:"'Detoner' (to detonate) and 'detonner' (to clash, to be out of tune) are different words. The double n matters."},

    {type:"teach", trg:"le desillusionne", src:"the disillusioned person", pos:"noun", gender:"m",
     note:"Can be noun or adjective. Someone who has lost their illusions.\nFeminine: desillusionnee.",
     example:"A: Les electeurs desillusionne ne votent plus.\nB: Il faut restaurer leur confiance.",
     exampleSrc:"A: Disillusioned voters no longer vote.\nB: We need to restore their trust.",
     funFact:"'La desillusion' is a powerful word in French. Stendhal called it the price of growing up."},

    {type:"teach", trg:"s'obstiner", src:"to persist stubbornly, to insist", pos:"verb", gender:null,
     note:"Reflexive -er verb. To stubbornly refuse to give up.\n'S'obstiner a + infinitif'.",
     example:"A: Il s'obstine a nier l'evidence.\nB: C'est inutile, les preuves sont claires.",
     exampleSrc:"A: He stubbornly insists on denying the evidence.\nB: It's useless, the proof is clear.",
     funFact:"Can be positive (determination) or negative (stubbornness). Context and tone decide the interpretation."},

    {type:"mc",
     q:"Quel verbe signifie 'pleurer de maniere exageree et agacante' ?",
     opts:["pleurnicher","s'obstiner","detoner","s'exclamer"],
     ans:"pleurnicher",
     hint:"A childish form of crying. Built from 'pleurer' with a diminutive suffix."},

    {type:"teach", trg:"le ressentiment", src:"resentment", pos:"noun", gender:"m",
     note:"Masculine noun. A deep, lingering feeling of bitterness or injustice.",
     example:"A: Le ressentiment entre les deux familles dure depuis des annees.\nB: Il est temps de se reconcilier.",
     exampleSrc:"A: The resentment between the two families has lasted for years.\nB: It's time to reconcile.",
     funFact:"Nietzsche wrote extensively about 'le ressentiment' in French, making it a philosophical concept."},

    {type:"teach", trg:"l'amertume", src:"bitterness", pos:"noun", gender:"f",
     note:"Feminine noun. Bitterness in taste or feeling.\nFrom 'amer' (bitter).",
     example:"A: Son amertume apres le licenciement est comprehensible.\nB: Il faut du temps pour s'en remettre.",
     exampleSrc:"A: His bitterness after being fired is understandable.\nB: It takes time to recover.",
     funFact:"Coffee tasting in France uses 'amertume' precisely. A good espresso has 'une amertume agreable'."},

    {type:"teach", trg:"la rancoeur", src:"rancor, grudge", pos:"noun", gender:"f",
     note:"Feminine noun. A deep, long-lasting resentment.\n'Garder de la rancoeur' = to hold a grudge.",
     example:"A: Elle garde de la rancoeur envers son ex.\nB: Ca fait cinq ans, il faut tourner la page.",
     exampleSrc:"A: She holds a grudge against her ex.\nB: It's been five years, she needs to move on.",
     funFact:"'Sans rancoeur' is said when forgiving someone. It signals you are letting go of the bitterness."},

    {type:"fb",
     s:"Il {1} a nier les faits malgre toutes les preuves.",
     a:["s'obstine"],
     opts:["s'obstine","pleurniche","detone","s'exclame"],
     hint:"To stubbornly persist in something despite evidence. Reflexive verb.",
     sSrc:"He stubbornly {1} on denying the facts despite all the evidence."},

    {type:"teach", trg:"la lassitude", src:"weariness, fatigue", pos:"noun", gender:"f",
     note:"Feminine noun. Deep tiredness or loss of enthusiasm.\nMore emotional than 'fatigue'.",
     example:"A: La lassitude des employes est palpable.\nB: Il faut changer de methode de management.",
     exampleSrc:"A: The weariness of the employees is palpable.\nB: We need to change the management approach.",
     funFact:"'Lassitude' implies emotional exhaustion, not just physical tiredness. It is weariness of the spirit."},

    {type:"teach", trg:"l'indignation", src:"indignation", pos:"noun", gender:"f",
     note:"Feminine noun. Righteous anger at unfair treatment.\n'S'indigner' = to be indignant.",
     example:"A: L'indignation populaire a force le gouvernement a reculer.\nB: La voix du peuple a ete entendue.",
     exampleSrc:"A: Popular indignation forced the government to back down.\nB: The voice of the people was heard.",
     funFact:"Stephane Hessel's 'Indignez-vous!' (2010) sold millions. It became the manifesto of protest movements."},

    {type:"teach", trg:"l'agacement", src:"annoyance, irritation", pos:"noun", gender:"m",
     note:"Masculine noun. Mild but persistent irritation.\nFrom 'agacer' (to irritate).",
     example:"A: Son agacement etait visible.\nB: Il tapait du pied nerveusement.",
     exampleSrc:"A: His annoyance was visible.\nB: He was tapping his foot nervously.",
     funFact:"French has a rich scale of irritation: agacement (mild), enervement (moderate), exasperation (strong), fureur (extreme)."},

    {type:"mc",
     q:"Quel mot designe une rancoeur profonde et durable ?",
     opts:["la rancoeur","l'agacement","la lassitude","l'amertume"],
     ans:"la rancoeur",
     hint:"A deep, lasting grudge. You 'garder' (keep) this feeling toward someone who wronged you."},

    {type:"teach", trg:"le mecontentement", src:"dissatisfaction, discontent", pos:"noun", gender:"m",
     note:"Masculine noun. Unhappiness with a situation.\nBuilt from me- (dis-) + contentement.",
     example:"A: Le mecontentement des citoyens grandit.\nB: Ils veulent des reformes concretes.",
     exampleSrc:"A: Citizens' discontent is growing.\nB: They want concrete reforms.",
     funFact:"French history is driven by mecontentement: 1789, 1848, 1968, 2018 (Gilets Jaunes). Protest is a tradition."},

    {type:"fb",
     s:"La {1} populaire a force le gouvernement a reculer.",
     a:["indignation"],
     opts:["indignation","lassitude","amertume","agacement"],
     hint:"Righteous anger at injustice. Hessel's 'Indignez-vous!' made this word famous.",
     sSrc:"Popular {1} forced the government to back down."},

    {type:"match", pairs:[
      {trg:"pleurnicher", src:"to whine"},
      {trg:"ressentiment", src:"resentment"},
      {trg:"lassitude", src:"weariness"},
      {trg:"agacement", src:"annoyance"},
      {trg:"mecontentement", src:"discontent"}
    ]},

    {type:"mc",
     q:"Quel mot decrit une fatigue profonde de l'esprit plutot que du corps ?",
     opts:["la lassitude","l'agacement","la detonation","le ressentiment"],
     ans:"la lassitude",
     hint:"More emotional than 'fatigue'. A weariness of the spirit, a loss of enthusiasm."}
  ]
};
export default LESSON_13;
