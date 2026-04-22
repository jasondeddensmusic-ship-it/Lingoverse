// French B2 Gap Lesson 9. Technology and Innovation
const LESSON_9 = {id:"frv2_b2g5_l9", title:"Technologie et innovation", icon:"💡", xp:15, board:true, steps:[
  {type:"intro", title:"Technologie et innovation",
   desc:"Learn vocabulary for discussing technology, digital culture, and innovation at the B2 level.",
   goals:["Learn 15 key words about technology and innovation","Discuss digital trends and their impact","Use technical vocabulary in context"]},

  {type:"teach", trg:"l'accélération", src:"the acceleration", pos:"noun", gender:"f",
   note:"Increase in speed or rate of change.\nUsed in physics, technology, and social contexts.",
   example:"A: L'accélération technologique est impressionnante.\nB: Chaque année apporte de nouvelles inventions.\nA: C'est excitant mais aussi inquiétant.\nB: Il faut s'adapter en permanence.",
   exampleSrc:"A: Technological acceleration is impressive.\nB: Each year brings new inventions.\nA: It's exciting but also worrying.\nB: We need to adapt constantly.",
   funFact:"From Latin 'accelerare' (to hasten). In French, also used figuratively: 'l'accélération de l'histoire'."},

  {type:"teach", trg:"le boîtier", src:"the case / housing", pos:"noun", gender:"m",
   note:"A protective casing for electronic devices.\nAlso: a camera body or watch case.",
   example:"A: Le boîtier de ce téléphone est en aluminium.\nB: C'est plus résistant que le plastique.\nA: Et plus élégant aussi.\nB: La qualité du boîtier fait la différence.",
   exampleSrc:"A: The case of this phone is aluminum.\nB: It's more resistant than plastic.\nA: And more elegant too.\nB: The quality of the case makes the difference.",
   funFact:"Diminutive of 'boîte' (box). The suffix '-ier' often indicates a container in French."},

  {type:"teach", trg:"le dérivé", src:"the derivative / by-product", pos:"noun", gender:"m",
   note:"Something that comes from a source. Used in math, chemistry, and language.\nAlso an adjective.",
   example:"A: Ce produit est un dérivé du pétrole.\nB: Comme beaucoup de plastiques.\nA: On cherche des alternatives.\nB: Les dérivés végétaux sont prometteurs.",
   exampleSrc:"A: This product is a petroleum derivative.\nB: Like many plastics.\nA: We're looking for alternatives.\nB: Plant-based derivatives are promising.",
   funFact:"From 'dériver' (to derive). In math, 'la dérivée' (feminine) is the calculus derivative."},

  {type:"teach", trg:"l'explosif", src:"the explosive", pos:"noun", gender:"m",
   note:"A substance capable of exploding. Also figurative:\n'une croissance explosive' (explosive growth).",
   example:"A: La croissance de cette startup est explosive.\nB: Ils ont doublé leur chiffre d'affaires.\nA: En seulement six mois?\nB: Oui, leur produit répond à un vrai besoin.",
   exampleSrc:"A: The growth of this startup is explosive.\nB: They doubled their revenue.\nA: In just six months?\nB: Yes, their product meets a real need.",
   funFact:"From Latin 'explosivus'. Figurative use for rapid growth is very common in business French."},

  {type:"teach", trg:"ingénieux", src:"ingenious / clever", pos:"adj", gender:null,
   note:"Showing creative intelligence in solving problems.\nFeminine: ingénieuse.",
   example:"A: Cette solution est vraiment ingénieuse.\nB: Qui l'a trouvée?\nA: Une étudiante de vingt ans.\nB: La créativité n'a pas d'âge.",
   exampleSrc:"A: This solution is really ingenious.\nB: Who came up with it?\nA: A twenty-year-old student.\nB: Creativity knows no age.",
   funFact:"From Latin 'ingeniosus' (talented). Related to 'ingénieur' (engineer), though they are distinct words."},

  {type:"teach", trg:"l'inflexion", src:"the inflection / shift", pos:"noun", gender:"f",
   note:"A change in direction or tone. Used in voice, curves, and policies.\nSubtle but significant.",
   example:"A: On observe une inflexion dans la politique économique.\nB: Le gouvernement change de direction?\nA: Pas radicalement, mais la tendance évolue.\nB: Les indicateurs le confirment.",
   exampleSrc:"A: We observe a shift in economic policy.\nB: Is the government changing direction?\nA: Not radically, but the trend is evolving.\nB: The indicators confirm it.",
   funFact:"From Latin 'inflexio' (bending). In linguistics, inflection is how words change form for grammar."},

  {type:"teach", trg:"inopérant", src:"ineffective / inoperative", pos:"adj", gender:null,
   note:"Not producing the desired effect. Describes measures or strategies.\nFeminine: inopérante.",
   example:"A: Cette stratégie est totalement inopérante.\nB: Il faut changer d'approche.\nA: Les résultats le prouvent.\nB: Essayons quelque chose de complètement différent.",
   exampleSrc:"A: This strategy is completely ineffective.\nB: We need to change our approach.\nA: The results prove it.\nB: Let's try something completely different.",
   funFact:"From 'in-' (not) + 'opérant' (operating). More formal than 'inefficace' (inefficient)."},

  {type:"teach", trg:"l'inefficacité", src:"the inefficiency", pos:"noun", gender:"f",
   note:"Lack of effectiveness. Describes systems, processes, or people.\nThe opposite of 'efficacité'.",
   example:"A: L'inefficacité de ce système est connue de tous.\nB: Pourquoi personne ne le change?\nA: La bureaucratie résiste au changement.\nB: Il faut une réforme en profondeur.",
   exampleSrc:"A: The inefficiency of this system is known to everyone.\nB: Why doesn't anyone change it?\nA: Bureaucracy resists change.\nB: A thorough reform is needed.",
   funFact:"From 'in-' (not) + 'efficacité' (efficiency). French administration is often criticized for inefficacité."},

  {type:"teach", trg:"le châssis", src:"the chassis / frame", pos:"noun", gender:"m",
   note:"The structural framework of a vehicle or machine.\nAlso: a window frame.",
   example:"A: Le châssis de cette voiture est en carbone.\nB: C'est léger mais très solide.\nA: Parfait pour la compétition.\nB: La technologie a beaucoup évolué.",
   exampleSrc:"A: The chassis of this car is made of carbon.\nB: It's lightweight but very strong.\nA: Perfect for competition.\nB: Technology has evolved significantly.",
   funFact:"From Latin 'capsus' (box). The 'â' circumflex indicates a lost 's' from Old French 'chassis'."},

  {type:"mc", q:"Quel mot désigne l'augmentation de la vitesse du changement technologique?",
   opts:["L'accélération","L'inflexion","L'inefficacité","Le dérivé"],
   ans:"L'accélération",
   hint:"The rate of change getting faster and faster over time"},

  {type:"fb", s:"Cette solution est vraiment {1}, elle résout le problème de manière créative.",
   a:["ingénieuse"], opts:["ingénieuse","inopérante","explosive","inefficace"],
   hint:"Showing creative intelligence in finding a clever solution",
   sSrc:"This solution is really {1}, it solves the problem in a creative way."},

  {type:"teach", trg:"la connexion", src:"the connection", pos:"noun", gender:"f",
   note:"A link between things or people. Also: Internet connection.\nAlternate spelling: 'connection'.",
   example:"A: La connexion Internet est très lente ici.\nB: C'est un problème en zone rurale.\nA: La fibre optique arrive bientôt?\nB: Le gouvernement promet pour l'année prochaine.",
   exampleSrc:"A: The Internet connection is very slow here.\nB: It's a problem in rural areas.\nA: Is fiber optic coming soon?\nB: The government promises by next year.",
   funFact:"From Latin 'connexio'. French uses both 'connexion' (traditional) and 'connection' (English-influenced)."},

  {type:"teach", trg:"l'extrémité", src:"the extremity / tip", pos:"noun", gender:"f",
   note:"The farthest end or point of something.\nUsed for body parts, objects, and locations.",
   example:"A: Le capteur est placé à l'extrémité du câble.\nB: Il mesure la température.\nA: La précision est bonne?\nB: Oui, au dixième de degré près.",
   exampleSrc:"A: The sensor is placed at the tip of the cable.\nB: It measures the temperature.\nA: Is the precision good?\nB: Yes, to one-tenth of a degree.",
   funFact:"From Latin 'extremitas'. 'Les extrémités' can also mean hands and feet in medical language."},

  {type:"teach", trg:"inusité", src:"unused / uncommon", pos:"adj", gender:null,
   note:"Rarely used or no longer in use. Describes words, methods, or tools.\nFeminine: inusitée.",
   example:"A: Ce mot est complètement inusité de nos jours.\nB: On le trouve encore dans les vieux livres.\nA: La langue évolue constamment.\nB: Certains mots disparaissent, d'autres naissent.",
   exampleSrc:"A: This word is completely unused nowadays.\nB: You still find it in old books.\nA: Language evolves constantly.\nB: Some words disappear, others are born.",
   funFact:"From 'in-' (not) + 'usité' (used). 'Usité' itself is quite formal and somewhat inusité!"},

  {type:"mc", q:"Quel adjectif décrit une stratégie qui ne produit aucun résultat?",
   opts:["Inusitée","Inopérante","Ingénieuse","Explosive"],
   ans:"Inopérante",
   hint:"Not operating or producing the desired effect at all"},

  {type:"fb", s:"Le {1} de cette voiture est en carbone, léger mais très solide.",
   a:["châssis"], opts:["châssis","boîtier","dérivé","explosif"],
   hint:"The structural framework of a vehicle",
   sSrc:"The {1} of this car is carbon, lightweight but very strong."},

  {type:"match", pairs:[
    {trg:"l'accélération", src:"acceleration"},
    {trg:"le boîtier", src:"case / housing"},
    {trg:"ingénieux", src:"ingenious"},
    {trg:"la connexion", src:"connection"},
    {trg:"inusité", src:"unused / uncommon"}
  ]},

  {type:"mc", q:"Que signifie 'une inflexion de la politique'?",
   opts:["Une connexion nouvelle","Un dérivé chimique","Un changement de direction subtil","Une explosion soudaine"],
   ans:"Un changement de direction subtil",
   hint:"A bend or shift, not a dramatic reversal but a noticeable change in d..."},

  {type:"fb", s:"L'{1} de ce système est connue de tous, il faut une réforme.",
   a:["inefficacité"], opts:["inefficacité","inflexion","accélération","extrémité"],
   hint:"The lack of effectiveness that everyone can see",
   sSrc:"The {1} of this system is known to everyone, a reform is needed."},

  {type:"drag_fill", s:"Ce produit est un {1} du pétrole et son boîtier est en {2}.",
   blanks:{"1":"dérivé","2":"aluminium"},
   pool:["dérivé","aluminium","explosif","carbone"],
   hint:"A by-product from petroleum housed in a lightweight metal casing"},

  {type:"mc", q:"Quel mot décrit quelque chose qui n'est plus utilisé de nos jours?",
   opts:["Ingénieux","Inopérant","Indicible","Inusité"],
   ans:"Inusité",
   hint:"Rarely or no longer in use, fallen out of common practice"}
]};
export default LESSON_9;
