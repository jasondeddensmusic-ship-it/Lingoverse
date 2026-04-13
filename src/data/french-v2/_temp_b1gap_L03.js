// L03 - Abundance & Scarcity
const LESSON_3 = {id:"frv2_b1gap_l3", title:"Abondance et pénurie", icon:"\u{1F33E}", xp:15, board:true, steps:[

{type:"intro", title:"Abondance et pénurie",
 desc:"Master vocabulary for plenty and shortage. Talk about abundance, overflow, and running out of things.",
 goals:["Learn 20 words about quantity and sufficiency","Describe abundance and shortage","Use degree adverbs naturally"]},

{type:"teach", trg:"l'abondance", src:"abundance", pos:"noun", gender:"f",
 note:"Feminine noun. Plenty, great quantity.\nOften used with en: en abondance.",
 example:"A: Il y a des fruits en abondance au marché.\nB: Profitons-en pour faire des confitures !",
 exampleSrc:"A: There are fruits in abundance at the market.\nB: Let's take advantage and make jams!",
 funFact:"From Latin abundantia. The horn of plenty is called 'la corne d'abondance' in French."},

{type:"teach", trg:"abondamment", src:"abundantly, copiously", pos:"adv", gender:null,
 note:"Adverb from abondant. Note the double m.\nMeans 'in large quantities.'",
 example:"A: Il a plu abondamment cette nuit.\nB: Les jardins en avaient bien besoin.",
 exampleSrc:"A: It rained abundantly last night.\nB: The gardens really needed it.",
 funFact:"Formed with -amment from adjectives ending in -ant. Abondant becomes abondamment."},

{type:"teach", trg:"ample", src:"ample, wide", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nDescribes clothing, space, or information.",
 example:"A: Ce manteau est assez ample pour l'hiver.\nB: Oui, tu peux mettre un pull dessous.",
 exampleSrc:"A: This coat is ample enough for winter.\nB: Yes, you can wear a sweater underneath.",
 funFact:"From Latin amplus. The expression 'de plus amples informations' means 'further information.'"},

{type:"teach", trg:"l'ampleur", src:"extent, scale, magnitude", pos:"noun", gender:"f",
 note:"Feminine noun. The scope or scale of something.\nOften about problems or movements.",
 example:"A: L'ampleur de la crise est difficile à mesurer.\nB: Les chiffres sont alarmants.",
 exampleSrc:"A: The scale of the crisis is hard to measure.\nB: The numbers are alarming.",
 funFact:"Journalists use 'prendre de l'ampleur' (to grow in scale) for protests and movements."},

{type:"teach", trg:"amplifier", src:"to amplify, to increase", pos:"verb", gender:null,
 note:"Regular -er verb. To make bigger or louder.\nFigurative: to exaggerate.",
 example:"A: Les médias ont amplifié le scandale.\nB: C'est vrai, la réalité est moins grave.",
 exampleSrc:"A: The media amplified the scandal.\nB: True, the reality is less serious.",
 funFact:"From Latin amplificare. In French, amplifier can mean both to literally amplify and to blow up a story."},

{type:"mc",
 q:"Quel mot décrit la grande quantité de quelque chose ?",
 opts:["l'abondance","l'ampleur","l'aisance","l'affluence"],
 ans:"l'abondance",
 hint:"Think of the Latin horn of plenty. This feminine noun means great quantity."},

{type:"teach", trg:"l'affluence", src:"crowd, heavy traffic", pos:"noun", gender:"f",
 note:"Feminine noun. Large number of people arriving.\nHeures d'affluence = rush hour.",
 example:"A: Évite le métro aux heures d'affluence.\nB: Tu as raison, c'est insupportable.",
 exampleSrc:"A: Avoid the metro during rush hour.\nB: You're right, it's unbearable.",
 funFact:"From Latin affluere (to flow toward). People 'flow' into places during rush hour."},

{type:"teach", trg:"l'afflux", src:"influx, inflow", pos:"noun", gender:"m",
 note:"Masculine noun. A sudden rush or flood of.\nAffluence is the state, afflux is the movement.",
 example:"A: L'afflux de touristes en été est impressionnant.\nB: La ville triple de population en juillet.",
 exampleSrc:"A: The influx of tourists in summer is impressive.\nB: The city triples in population in July.",
 funFact:"Same Latin root as affluence but describes the flow itself. Used for people, money, and blood."},

{type:"teach", trg:"l'aisance", src:"ease, comfort, affluence", pos:"noun", gender:"f",
 note:"Feminine noun. Financial comfort or physical ease.\nVivre dans l'aisance = to live comfortably.",
 example:"A: Ils vivent dans l'aisance grâce à leur entreprise.\nB: Ils ont travaillé dur pour en arriver là.",
 exampleSrc:"A: They live in comfort thanks to their business.\nB: They worked hard to get there.",
 funFact:"From aise (ease). Can mean physical grace (aisance corporelle) or wealth (aisance financière)."},

{type:"teach", trg:"aisé", src:"well-off, easy", pos:"adj", gender:null,
 note:"Adjective. Aisé (m), aisée (f).\nDouble meaning: wealthy or effortless.",
 example:"A: Ce quartier est plutôt aisé.\nB: Oui, les maisons sont immenses.",
 exampleSrc:"A: This neighborhood is rather well-off.\nB: Yes, the houses are huge.",
 funFact:"A polite way to say someone is rich without saying 'riche.' Euphemism is an art in French."},

{type:"fb",
 s:"Évite le métro aux heures d'{1}, c'est bondé.",
 a:["affluence"],
 opts:["affluence","abondance","aisance","ampleur"],
 hint:"This word describes heavy crowds, especially in transport. Think 'rush hour.'",
 sSrc:"Avoid the metro during {1} hours, it's packed."},

{type:"teach", trg:"aisément", src:"easily, effortlessly", pos:"adv", gender:null,
 note:"Adverb from aisé. With ease.\nMore formal than facilement.",
 example:"A: Elle parle aisément trois langues.\nB: C'est impressionnant, elle les a apprises jeune.",
 exampleSrc:"A: She speaks three languages effortlessly.\nB: Impressive, she learned them young.",
 funFact:"More elegant than facilement. Writers prefer aisément for a touch of literary style."},

{type:"teach", trg:"l'apport", src:"contribution, input", pos:"noun", gender:"m",
 note:"Masculine noun. What someone brings to a project.\nAlso: financial contribution.",
 example:"A: Son apport au projet a été considérable.\nB: Sans elle, on n'aurait pas réussi.",
 exampleSrc:"A: Her contribution to the project was considerable.\nB: Without her, we wouldn't have succeeded.",
 funFact:"From apporter (to bring). In real estate, 'apport personnel' is your down payment."},

{type:"teach", trg:"l'assortiment", src:"assortment, selection", pos:"noun", gender:"m",
 note:"Masculine noun. A varied collection of items.\nCommon in shops and food.",
 example:"A: Cet assortiment de fromages est magnifique.\nB: Prenons le camembert et le comté.",
 exampleSrc:"A: This assortment of cheeses is magnificent.\nB: Let's get the camembert and the comté.",
 funFact:"From assortir (to match). An assortiment was originally a well-matched set, not just variety."},

{type:"teach", trg:"assortir", src:"to match, to go well together", pos:"verb", gender:null,
 note:"Regular -ir verb. To match colors or items.\nAssortir à = to match with.",
 example:"A: Ta cravate est bien assortie à ta chemise.\nB: Merci, j'ai fait attention ce matin.",
 exampleSrc:"A: Your tie is well matched to your shirt.\nB: Thanks, I was careful this morning.",
 funFact:"In restaurants, 'fromages assortis' means a selection of matched cheeses. Very French."},

{type:"mc",
 q:"Comment décrit-on quelqu'un qui vit dans le confort financier ?",
 opts:["aisé","ample","abondant","assorti"],
 ans:"aisé",
 hint:"This adjective is a polite alternative to 'riche.' It also means 'easy' in other contexts."},

{type:"teach", trg:"l'appui", src:"support, backing", pos:"noun", gender:"m",
 note:"Masculine noun. From appuyer (to lean, to support).\nPhysical or moral support.",
 example:"A: J'ai besoin de ton appui pour ce projet.\nB: Tu peux compter sur moi.",
 exampleSrc:"A: I need your support for this project.\nB: You can count on me.",
 funFact:"Point d'appui means 'fulcrum' in physics and 'base of support' in military strategy."},

{type:"teach", trg:"l'appréciation", src:"appreciation, assessment", pos:"noun", gender:"f",
 note:"Feminine noun. Both gratitude and evaluation.\nOn school reports: teacher's assessment.",
 example:"A: L'appréciation du professeur est très positive.\nB: Bravo, tu as bien travaillé ce trimestre.",
 exampleSrc:"A: The teacher's assessment is very positive.\nB: Well done, you worked hard this term.",
 funFact:"On French report cards, the appréciation is the teacher's written comment. Parents read these first."},

{type:"teach", trg:"l'approbation", src:"approval", pos:"noun", gender:"f",
 note:"Feminine noun. Official or personal approval.\nFormal register.",
 example:"A: Le plan a reçu l'approbation du directeur.\nB: On peut commencer dès lundi alors.",
 exampleSrc:"A: The plan received the director's approval.\nB: We can start on Monday then.",
 funFact:"From Latin approbare (to prove good). Approuver is the verb, approbation the formal noun."},

{type:"teach", trg:"approuver", src:"to approve", pos:"verb", gender:null,
 note:"Regular -er verb. To officially agree or sanction.\nMore formal than 'être d'accord.'",
 example:"A: Le conseil a approuvé le budget.\nB: Enfin, après trois mois de débats.",
 exampleSrc:"A: The council approved the budget.\nB: Finally, after three months of debates.",
 funFact:"In meetings, 'approuvé à l'unanimité' (unanimously approved) is the dream outcome."},

{type:"fb",
 s:"Le conseil a {1} le nouveau budget à l'unanimité.",
 a:["approuvé"],
 opts:["approuvé","apporté","assorti","amplifié"],
 hint:"This verb means to officially sanction or agree to something.",
 sSrc:"The council {1} the new budget unanimously."},

{type:"match", pairs:[
  {trg:"l'affluence", src:"crowd, rush hour"},
  {trg:"l'apport", src:"contribution"},
  {trg:"l'appui", src:"support"},
  {trg:"l'assortiment", src:"assortment"},
  {trg:"l'approbation", src:"approval"}
]},

{type:"mc",
 q:"Quel nom masculin décrit un flux soudain de personnes ?",
 opts:["un afflux","une affluence","une abondance","un apport"],
 ans:"un afflux",
 hint:"This word describes the movement itself, not the state. Think of water flowing in."}

]};
export default LESSON_3;
