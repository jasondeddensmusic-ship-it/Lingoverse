// French B2 Gap Batch D Lesson 18 — Science and Innovation
const LESSON_18 = {id:"frv2_b2gD_l18", title:"Science et innovation", icon:"🔬", xp:15, board:true, steps:[
  {type:"intro", title:"Science et innovation",
   desc:"Develop vocabulary for discussing scientific research, innovation, and technology in French.",
   goals:["Learn 10 science and innovation terms","Discuss research and discoveries","Use scientific register vocabulary"]},

  {type:"teach", trg:"l'accélération", src:"the acceleration", pos:"noun", gender:"f",
   note:"The increase in speed or rate of change.\nPhysics term also used figuratively.",
   example:"A: L'accélération du changement climatique inquiète les scientifiques.\nB: Les données sont alarmantes?\nA: Oui, la fonte des glaces s'accélère.\nB: Il faut agir maintenant, pas demain.",
   exampleSrc:"A: The acceleration of climate change worries scientists.\nB: Is the data alarming?\nA: Yes, ice melting is accelerating.\nB: We must act now, not tomorrow.",
   funFact:"From Latin 'accelerare' (to hasten). In physics, acceleration is measured in m/s2. Figuratively, it describes any speeding up of change."},

  {type:"teach", trg:"l'adduction", src:"the supply (of water) / adduction", pos:"noun", gender:"f",
   note:"The system for bringing water to a location.\n'Adduction d'eau' = water supply infrastructure.",
   example:"A: L'adduction d'eau dans ce village date des années cinquante.\nB: Les canalisations sont vétustes?\nA: Oui, il y a des fuites régulières.\nB: La rénovation est urgente.",
   exampleSrc:"A: The water supply in this village dates from the 1950s.\nB: Are the pipes old?\nA: Yes, there are regular leaks.\nB: Renovation is urgent.",
   funFact:"From Latin 'adductio' (bringing to). In anatomy, 'adduction' is moving a limb toward the body midline. Different from 'abduction'."},

  {type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
   note:"The collective world of blogs and bloggers.\nAlso: the community of online opinion writers.",
   example:"A: La blogosphère s'est enflammée après cette annonce.\nB: Les réactions sont vives?\nA: Oui, surtout chez les blogueurs politiques.\nB: Internet amplifie tout.",
   exampleSrc:"A: The blogosphere erupted after this announcement.\nB: Are reactions strong?\nA: Yes, especially among political bloggers.\nB: The internet amplifies everything.",
   funFact:"Combining 'blog' + '-sphère' (sphere). French coined 'blogosphère' around 2004. The Academie now accepts both 'blog' and 'blogue'."},

  {type:"teach", trg:"la connexion", src:"the connection", pos:"noun", gender:"f",
   note:"A link between things, people, or systems.\nAlso: internet connection. Note French spelling with 'x'.",
   example:"A: La connexion Internet est très lente aujourd'hui.\nB: C'est peut-être un problème de réseau.\nA: Je vais redémarrer la box.\nB: Si ça ne marche pas, appelle le fournisseur.",
   exampleSrc:"A: The Internet connection is very slow today.\nB: It might be a network problem.\nA: I'll restart the router.\nB: If it doesn't work, call the provider.",
   funFact:"French spells it 'connexion' with an 'x', not 'connection' with 'ct' like English. Both come from Latin 'connexio'. The 'x' spelling is the original."},

  {type:"mc",
   q:"Que signifie 'l'adduction d'eau'?",
   opts:["Le système d'approvisionnement en eau","Le traitement des eaux usées","La qualité de l'eau potable","La consommation d'eau par habitant"],
   ans:"Le système d'approvisionnement en eau",
   hint:"This technical term describes the infrastructure that brings water to homes and buildings."},

  {type:"teach", trg:"la déflagration", src:"the deflagration / blast", pos:"noun", gender:"f",
   note:"A rapid combustion that creates a pressure wave.\nLess violent than a 'détonation'. Technical and dramatic.",
   example:"A: La déflagration a été entendue à plusieurs kilomètres.\nB: C'était une explosion de gaz?\nA: Oui, une fuite dans la canalisation.\nB: Miraculeusement, personne n'a été blessé.",
   exampleSrc:"A: The blast was heard several kilometers away.\nB: Was it a gas explosion?\nA: Yes, a leak in the pipeline.\nB: Miraculously, nobody was injured.",
   funFact:"Technically, 'déflagration' is slower than 'détonation' (supersonic). In everyday French, both mean a big explosion. Journalists love 'déflagration'."},

  {type:"teach", trg:"l'eugénol", src:"the eugenol", pos:"noun", gender:"m",
   note:"A chemical compound found in clove oil.\nUsed in dentistry and aromatherapy.",
   example:"A: L'eugénol est utilisé comme antiseptique dentaire.\nB: C'est ce qui donne l'odeur au cabinet du dentiste?\nA: Exactement. C'est extrait du clou de girofle.\nB: Voilà pourquoi ça sent le clou de girofle.",
   exampleSrc:"A: Eugenol is used as a dental antiseptic.\nB: Is that what gives the dentist's office its smell?\nA: Exactly. It's extracted from cloves.\nB: That's why it smells of cloves.",
   funFact:"Named after Eugenia caryophyllata (clove tree). France is a major essential oils market. Aromatherapy is mainstream in French pharmacies."},

  {type:"teach", trg:"le processeur", src:"the processor / CPU", pos:"noun", gender:"m",
   note:"The central processing unit of a computer. Recycled from L6.\nHere in innovation context.",
   example:"A: Les nouveaux processeurs consomment moins d'énergie.\nB: C'est un progrès important.\nA: La puissance a doublé en cinq ans.\nB: La loi de Moore reste valable.",
   exampleSrc:"A: New processors consume less energy.\nB: That's an important advancement.\nA: Power has doubled in five years.\nB: Moore's Law still holds.",
   funFact:"France designs processors through companies like STMicroelectronics. Grenoble is called 'the French Silicon Valley'."},

  {type:"fb",
   s:"La {1} Internet est trop lente pour les visioconférences.",
   a:["connexion"],
   opts:["connexion","déflagration","blogosphère","accélération"],
   hint:"This noun describes the link between your device and the internet. Note the French spelling with 'x'.",
   sSrc:"The Internet {1} is too slow for video conferences."},

  {type:"teach", trg:"la mégafusion", src:"the mega-merger", pos:"noun", gender:"f",
   note:"A very large merger between corporations.\n'Méga-' prefix intensifies: mega + fusion.",
   example:"A: Cette mégafusion va créer un géant mondial.\nB: Les autorités de la concurrence vont réagir.\nA: Le risque de monopole est réel.\nB: Les consommateurs pourraient en souffrir.",
   exampleSrc:"A: This mega-merger will create a global giant.\nB: Competition authorities will react.\nA: The risk of monopoly is real.\nB: Consumers could suffer.",
   funFact:"French competition law (droit de la concurrence) is strict. The Autorité de la concurrence can block mergers that harm market competition."},

  {type:"teach", trg:"la préconisation", src:"the recommendation", pos:"noun", gender:"f",
   note:"Recycled from L3. Here in scientific context.\nFormal recommendations from researchers or experts.",
   example:"A: Les préconisations des chercheurs sont claires.\nB: Réduire l'usage des plastiques?\nA: Oui, et investir dans les matériaux biodégradables.\nB: La recherche avance dans ce domaine.",
   exampleSrc:"A: The researchers' recommendations are clear.\nB: Reduce the use of plastics?\nA: Yes, and invest in biodegradable materials.\nB: Research is advancing in this area.",
   funFact:"Scientific 'préconisations' carry more weight than simple 'conseils'. They imply evidence-based, expert-validated guidance."},

  {type:"mc",
   q:"Quelle est la différence entre 'déflagration' et 'détonation'?",
   opts:["La déflagration est plus lente que la détonation","La déflagration est plus forte","Il n'y a aucune différence","La déflagration est silencieuse"],
   ans:"La déflagration est plus lente que la détonation",
   hint:"Both are explosions, but one propagates faster than the speed of sound and the other does not."},

  {type:"match", pairs:[
    {trg:"accélération", src:"acceleration"},
    {trg:"blogosphère", src:"blogosphere"},
    {trg:"connexion", src:"connection"},
    {trg:"mégafusion", src:"mega-merger"},
    {trg:"eugénol", src:"eugenol"}
  ]},

  {type:"fb",
   s:"L'{1} du changement climatique est confirmée par toutes les études récentes.",
   a:["accélération"],
   opts:["accélération","adduction","connexion","mégafusion"],
   hint:"This noun describes the increase in speed at which climate change is progressing.",
   sSrc:"The {1} of climate change is confirmed by all recent studies."}
]};
export default LESSON_18;
