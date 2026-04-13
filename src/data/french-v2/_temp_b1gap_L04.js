// L04 - Actions & Determination
const LESSON_4 = {id:"frv2_b1gap_l4", title:"Agir avec détermination", icon:"\u{1F4AA}", xp:15, board:true, steps:[

{type:"intro", title:"Agir avec détermination",
 desc:"Build your vocabulary for decisive action, accomplishment, and purposeful movement toward goals.",
 goals:["Learn 20 action verbs and related nouns","Express determination and progress","Discuss achievements and goals"]},

{type:"teach", trg:"aboutir", src:"to lead to, to result in", pos:"verb", gender:null,
 note:"Regular -ir verb. Aboutir à = to result in.\nAboutir can also mean to succeed.",
 example:"A: Les négociations ont abouti à un accord.\nB: Après six mois, c'est un soulagement.",
 exampleSrc:"A: The negotiations resulted in an agreement.\nB: After six months, it's a relief.",
 funFact:"From bout (end). To aboutir is literally 'to reach the end.' If talks n'aboutissent pas, they fail."},

{type:"teach", trg:"l'accomplissement", src:"accomplishment, fulfillment", pos:"noun", gender:"m",
 note:"Masculine noun. From accomplir (to accomplish).\nBoth the act and the feeling.",
 example:"A: L'accomplissement de ce projet m'a rendu fier.\nB: Tu mérites cette satisfaction.",
 exampleSrc:"A: The accomplishment of this project made me proud.\nB: You deserve that satisfaction.",
 funFact:"Accomplir comes from Latin complere (to fill). An accomplishment 'fills up' the task completely."},

{type:"teach", trg:"acheminer", src:"to convey, to route, to dispatch", pos:"verb", gender:null,
 note:"Regular -er verb. From chemin (path).\nTo send something along a route.",
 example:"A: Les colis sont acheminés par camion.\nB: Ils arriveront demain matin.",
 exampleSrc:"A: The packages are being dispatched by truck.\nB: They'll arrive tomorrow morning.",
 funFact:"Literally 'to put on the path.' S'acheminer vers means to head toward a destination."},

{type:"teach", trg:"l'acheminement", src:"routing, conveyance", pos:"noun", gender:"m",
 note:"Masculine noun. The process of sending or routing.\nLogistics and postal vocabulary.",
 example:"A: L'acheminement du courrier prend combien de temps ?\nB: En général, deux à trois jours.",
 exampleSrc:"A: How long does mail routing take?\nB: Generally, two to three days.",
 funFact:"La Poste uses this word constantly. Acheminement is the journey from sender to receiver."},

{type:"teach", trg:"accroître", src:"to increase, to grow", pos:"verb", gender:null,
 note:"Irregular verb (like croître).\nFormal alternative to augmenter.",
 example:"A: L'entreprise cherche à accroître sa production.\nB: Elle va embaucher vingt personnes.",
 exampleSrc:"A: The company is looking to increase its production.\nB: They'll hire twenty people.",
 funFact:"Irregular like croître: j'accrois, il accroît. The circumflex appears in the third person."},

{type:"mc",
 q:"Quel verbe signifie 'mener à un résultat' ?",
 opts:["aboutir","accroître","acheminer","accomplir"],
 ans:"aboutir",
 hint:"This verb literally means 'to reach the end,' from the word bout (end)."},

{type:"teach", trg:"l'accroissement", src:"increase, growth", pos:"noun", gender:"m",
 note:"Masculine noun. From accroître.\nFormal. Used in economics and demographics.",
 example:"A: L'accroissement de la population pose des défis.\nB: Il faut construire plus de logements.",
 exampleSrc:"A: The population growth poses challenges.\nB: We need to build more housing.",
 funFact:"Economists prefer accroissement over augmentation for sustained, measured growth."},

{type:"teach", trg:"accru", src:"increased, heightened", pos:"adj", gender:null,
 note:"Past participle of accroître, used as adjective.\nAccru (m), accrue (f).",
 example:"A: La sécurité est accrue pendant les fêtes.\nB: On voit plus de policiers dans les rues.",
 exampleSrc:"A: Security is heightened during the holidays.\nB: You see more police in the streets.",
 funFact:"Often in news: 'vigilance accrue' (heightened vigilance) and 'demande accrue' (increased demand)."},

{type:"teach", trg:"accentuer", src:"to accentuate, to emphasize", pos:"verb", gender:null,
 note:"Regular -er verb. To make more pronounced.\nAlso: to add accent marks in writing.",
 example:"A: Cette robe accentue sa silhouette.\nB: Elle lui va vraiment bien.",
 exampleSrc:"A: This dress accentuates her figure.\nB: It really suits her.",
 funFact:"Double meaning: to emphasize (figurative) and to add accents to letters (literal). Both common."},

{type:"teach", trg:"amorcer", src:"to initiate, to begin", pos:"verb", gender:null,
 note:"Regular -er verb (c>ç before a/o).\nTo start a process or movement.",
 example:"A: Le gouvernement a amorcé des réformes importantes.\nB: Espérons qu'elles aboutiront.",
 exampleSrc:"A: The government has initiated important reforms.\nB: Let's hope they'll lead to results.",
 funFact:"Originally meant 'to bait a hook' (amorce = bait). Starting something is like casting a line."},

{type:"fb",
 s:"L'entreprise cherche à {1} sa production cette année.",
 a:["accroître"],
 opts:["accroître","aboutir","acheminer","amorcer"],
 hint:"This irregular verb means to increase. It follows the same pattern as croître.",
 sSrc:"The company is looking to {1} its production this year."},

{type:"teach", trg:"activement", src:"actively", pos:"adv", gender:null,
 note:"Adverb from actif. With energy and engagement.\nMore formal than 'avec énergie.'",
 example:"A: Elle participe activement à la vie associative.\nB: Elle est bénévole dans trois associations.",
 exampleSrc:"A: She actively participates in community life.\nB: She volunteers in three organizations.",
 funFact:"French adds -ment to the feminine form of adjectives: active + -ment = activement."},

{type:"teach", trg:"adhérer", src:"to adhere, to join, to support", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è before mute e).\nAdhérer à = to join or agree with.",
 example:"A: J'adhère totalement à cette idée.\nB: Parfait, on peut avancer ensemble.",
 exampleSrc:"A: I fully support this idea.\nB: Perfect, we can move forward together.",
 funFact:"Three meanings: to stick (physically), to join (a group), and to agree (with an idea)."},

{type:"teach", trg:"l'adhésion", src:"membership, support, adhesion", pos:"noun", gender:"f",
 note:"Feminine noun. Joining an organization or agreeing.\nAlso physical adhesion.",
 example:"A: Son adhésion au parti a surpris tout le monde.\nB: Personne ne s'y attendait.",
 exampleSrc:"A: His joining the party surprised everyone.\nB: Nobody expected it.",
 funFact:"Bulletin d'adhésion is a membership form. L'adhésion is both the act and the state."},

{type:"mc",
 q:"Comment dit-on qu'on est complètement d'accord avec une idée ?",
 opts:["adhérer à","aboutir à","accentuer","accroître"],
 ans:"adhérer à",
 hint:"This verb has three meanings: to stick, to join a group, or to support an idea."},

{type:"teach", trg:"l'admission", src:"admission, acceptance", pos:"noun", gender:"f",
 note:"Feminine noun. Being accepted into an institution.\nExam d'admission = entrance exam.",
 example:"A: Son admission à l'université a été confirmée.\nB: Félicitations, elle le mérite !",
 exampleSrc:"A: Her admission to the university has been confirmed.\nB: Congratulations, she deserves it!",
 funFact:"In French hospitals, 'service des admissions' is where you check in. In schools, it's enrollment."},

{type:"teach", trg:"assumer", src:"to take on, to own, to accept responsibility", pos:"verb", gender:null,
 note:"Regular -er verb. To accept and embrace.\nDoes NOT mean 'to assume' (supposer).",
 example:"A: Il assume pleinement ses erreurs.\nB: C'est rare et respectable.",
 exampleSrc:"A: He fully owns his mistakes.\nB: That's rare and respectable.",
 funFact:"False friend alert: assumer means to accept/own, NOT to suppose. That's supposer or présumer."},

{type:"teach", trg:"l'aspiration", src:"aspiration, longing", pos:"noun", gender:"f",
 note:"Feminine noun. A deep desire or ambition.\nAlso: breathing in (medical).",
 example:"A: Ses aspirations professionnelles sont élevées.\nB: Elle rêve de diriger sa propre entreprise.",
 exampleSrc:"A: Her professional aspirations are high.\nB: She dreams of running her own company.",
 funFact:"Dual meaning: ambition (figurative) and inhalation (medical). From Latin aspirare, to breathe toward."},

{type:"teach", trg:"aspirer", src:"to aspire, to breathe in", pos:"verb", gender:null,
 note:"Regular -er verb. Aspirer à = to aspire to.\nAlso: to vacuum (aspirer la poussière).",
 example:"A: Elle aspire à devenir médecin.\nB: Elle travaille très dur pour y arriver.",
 exampleSrc:"A: She aspires to become a doctor.\nB: She works very hard to get there.",
 funFact:"Un aspirateur is a vacuum cleaner. It 'aspires' (breathes in) dust. Same word, different context."},

{type:"fb",
 s:"Il {1} pleinement ses erreurs passées.",
 a:["assume"],
 opts:["assume","aspire","adhère","accentue"],
 hint:"This verb means to own or accept responsibility. Be careful, it does not mean 'to suppose.'",
 sSrc:"He fully {1} his past mistakes."},

{type:"teach", trg:"l'attestation", src:"certificate, attestation", pos:"noun", gender:"f",
 note:"Feminine noun. Official document certifying something.\nVery common in French bureaucracy.",
 example:"A: J'ai besoin d'une attestation de mon employeur.\nB: Demande au service des ressources humaines.",
 exampleSrc:"A: I need a certificate from my employer.\nB: Ask the human resources department.",
 funFact:"During COVID, the French needed an 'attestation de déplacement' just to leave their homes."},

{type:"teach", trg:"attester", src:"to attest, to certify", pos:"verb", gender:null,
 note:"Regular -er verb. To officially confirm.\nAlso: to prove or testify.",
 example:"A: Ce document atteste de son identité.\nB: Il est valide jusqu'en 2028.",
 exampleSrc:"A: This document attests to his identity.\nB: It's valid until 2028.",
 funFact:"French administration loves attester. You attest your address, income, employment, everything."},

{type:"match", pairs:[
  {trg:"aboutir", src:"to result in"},
  {trg:"amorcer", src:"to initiate"},
  {trg:"adhérer", src:"to join/support"},
  {trg:"assumer", src:"to take responsibility"},
  {trg:"aspirer", src:"to aspire"}
]},

{type:"mc",
 q:"Quel mot désigne un document officiel qui certifie quelque chose ?",
 opts:["une attestation","une adhésion","une admission","une aspiration"],
 ans:"une attestation",
 hint:"During COVID, the French needed this paper just to leave their homes."},

{type:"fb",
 s:"Ce document {1} de la validité de son diplôme.",
 a:["atteste"],
 opts:["atteste","adhère","assume","aspire"],
 hint:"This verb means to officially confirm or certify something.",
 sSrc:"This document {1} the validity of his diploma."}

]};
export default LESSON_4;
