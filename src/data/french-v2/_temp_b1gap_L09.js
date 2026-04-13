// L09 - Work & Business
const LESSON_9 = {id:"frv2_b1gap_l9", title:"Le monde du travail", icon:"\u{1F4BC}", xp:15, board:true, steps:[

{type:"intro", title:"Le monde du travail",
 desc:"Master workplace vocabulary: subscriptions, accompaniment, industry terms, and professional life.",
 goals:["Learn 20 work and business words","Discuss professional accompaniment and support","Navigate administrative French"]},

{type:"teach", trg:"s'abonner", src:"to subscribe", pos:"verb", gender:null,
 note:"Reflexive -er verb. S'abonner à = to subscribe to.\nUn abonnement = a subscription.",
 example:"A: Je me suis abonné à ce magazine.\nB: C'est moins cher que de l'acheter au numéro.",
 exampleSrc:"A: I subscribed to this magazine.\nB: It's cheaper than buying individual issues.",
 funFact:"Netflix, Spotify, gym: the French love their abonnements. The subscription economy is huge."},

{type:"teach", trg:"l'accompagnement", src:"accompaniment, support", pos:"noun", gender:"m",
 note:"Masculine noun. From accompagner (to accompany).\nProfessional support or side dish.",
 example:"A: L'accompagnement des nouveaux employés est essentiel.\nB: On leur assigne un tuteur.",
 exampleSrc:"A: Support for new employees is essential.\nB: We assign them a mentor.",
 funFact:"In restaurants, l'accompagnement is the side dish. In business, it's coaching and support."},

{type:"teach", trg:"affecter", src:"to assign, to affect, to allocate", pos:"verb", gender:null,
 note:"Regular -er verb. Three meanings: to assign (staff), to affect (emotionally), to allocate (funds).",
 example:"A: On l'a affecté au service marketing.\nB: Il commence lundi prochain.",
 exampleSrc:"A: He was assigned to the marketing department.\nB: He starts next Monday.",
 funFact:"French bureaucracy loves affecter. Soldiers, teachers, and civil servants all get affectés somewhere."},

{type:"teach", trg:"l'affichage", src:"display, posting", pos:"noun", gender:"m",
 note:"Masculine noun. From afficher (to display, to post).\nPublic notices and advertising.",
 example:"A: L'affichage publicitaire est réglementé en ville.\nB: On ne peut pas mettre des panneaux partout.",
 exampleSrc:"A: Advertising display is regulated in the city.\nB: You can't put billboards everywhere.",
 funFact:"French cities regulate affichage strictly. The law of 1979 limits outdoor advertising to protect landscapes."},

{type:"teach", trg:"l'agenda", src:"planner, diary, schedule", pos:"noun", gender:"m",
 note:"Masculine noun. A personal planner.\nNOT 'agenda' as in political agenda (ordre du jour).",
 example:"A: J'ai noté le rendez-vous dans mon agenda.\nB: N'oublie pas, c'est à quatorze heures.",
 exampleSrc:"A: I wrote the appointment in my planner.\nB: Don't forget, it's at two o'clock.",
 funFact:"False friend: un agenda is a diary/planner. For 'political agenda,' use 'ordre du jour.'"},

{type:"mc",
 q:"Comment appelle-t-on le carnet où l'on note ses rendez-vous ?",
 opts:["un agenda","un audit","un affichage","un accompagnement"],
 ans:"un agenda",
 hint:"This is a false friend. In French, it means a personal planner, not a political plan."},

{type:"teach", trg:"l'audit", src:"audit", pos:"noun", gender:"m",
 note:"Masculine noun. Professional inspection of accounts.\nFrom Latin audire (to hear).",
 example:"A: L'audit a révélé plusieurs irrégularités.\nB: Le directeur devra s'expliquer.",
 exampleSrc:"A: The audit revealed several irregularities.\nB: The director will have to explain.",
 funFact:"From Latin 'to hear.' Originally, auditors listened to accounts being read aloud."},

{type:"teach", trg:"l'abattoir", src:"slaughterhouse", pos:"noun", gender:"m",
 note:"Masculine noun. From abattre (to slaughter).\nAlso used figuratively for harsh places.",
 example:"A: L'abattoir a été fermé pour des raisons sanitaires.\nB: Les animaux seront transférés ailleurs.",
 exampleSrc:"A: The slaughterhouse was closed for health reasons.\nB: The animals will be transferred elsewhere.",
 funFact:"From abattre (to strike down). Animal welfare debates around abattoirs are major in French politics."},

{type:"teach", trg:"abattre", src:"to knock down, to slaughter, to demoralize", pos:"verb", gender:null,
 note:"Irregular verb (like battre). Three main meanings.\nNe pas se laisser abattre = don't let it get you down.",
 example:"A: Ne te laisse pas abattre par cet échec.\nB: Tu as raison, je vais recommencer.",
 exampleSrc:"A: Don't let this failure get you down.\nB: You're right, I'll start again.",
 funFact:"S'abattre sur means to crash down on. 'La pluie s'abat sur la ville' = rain crashes down on the city."},

{type:"teach", trg:"abréger", src:"to shorten, to abbreviate", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è, g>ge). To make shorter.\nAbréger les souffrances = to cut short suffering.",
 example:"A: Pourriez-vous abréger votre présentation ?\nB: Bien sûr, je vais aller à l'essentiel.",
 exampleSrc:"A: Could you shorten your presentation?\nB: Of course, I'll get to the essentials.",
 funFact:"The expression 'pour abréger' means 'to cut a long story short.' Very useful in conversation."},

{type:"fb",
 s:"Je me suis {1} à cette revue scientifique pour un an.",
 a:["abonné"],
 opts:["abonné","affecté","abrégé","accompagné"],
 hint:"This reflexive verb means to subscribe. Think of Netflix and gym memberships.",
 sSrc:"I {1} to this scientific journal for a year."},

{type:"teach", trg:"l'approximation", src:"approximation, rough estimate", pos:"noun", gender:"f",
 note:"Feminine noun. A rough estimate or imprecise value.\nFormal register.",
 example:"A: Ce chiffre est une approximation.\nB: Il faudra le vérifier avec précision.",
 exampleSrc:"A: This number is an approximation.\nB: We'll need to verify it precisely.",
 funFact:"From Latin approximare (to come near). In math, une approximation has a specific error margin."},

{type:"teach", trg:"approximativement", src:"approximately", pos:"adv", gender:null,
 note:"Adverb. More formal than 'environ' or 'à peu près.'\nUsed in scientific and official writing.",
 example:"A: Il y a approximativement trois cents participants.\nB: Le chiffre exact sera confirmé demain.",
 exampleSrc:"A: There are approximately three hundred participants.\nB: The exact number will be confirmed tomorrow.",
 funFact:"In conversation, French people prefer 'environ' or 'à peu près.' Approximativement is for writing."},

{type:"teach", trg:"l'absentéisme", src:"absenteeism", pos:"noun", gender:"m",
 note:"Masculine noun. Habitual absence from work or school.\nA major concern in French companies.",
 example:"A: L'absentéisme coûte cher à l'entreprise.\nB: Il faut en comprendre les causes.",
 exampleSrc:"A: Absenteeism costs the company a lot.\nB: We need to understand the causes.",
 funFact:"France has one of the highest absenteeism rates in Europe. It's a constant management topic."},

{type:"mc",
 q:"Quel mot décrit l'habitude d'être souvent absent au travail ?",
 opts:["l'absentéisme","l'accompagnement","l'affichage","l'audit"],
 ans:"l'absentéisme",
 hint:"This noun describes chronic absence from work or school. It costs companies a lot of money."},

{type:"teach", trg:"l'assemblage", src:"assembly, assembling", pos:"noun", gender:"m",
 note:"Masculine noun. The act of putting parts together.\nAlso: wine blending.",
 example:"A: L'assemblage de ce meuble est compliqué.\nB: Suis les instructions étape par étape.",
 exampleSrc:"A: The assembly of this furniture is complicated.\nB: Follow the instructions step by step.",
 funFact:"In winemaking, assemblage is the art of blending different grape varieties. Critical for Champagne."},

{type:"teach", trg:"assembler", src:"to assemble, to put together", pos:"verb", gender:null,
 note:"Regular -er verb. To bring parts together.\nS'assembler = to gather together.",
 example:"A: Il faut assembler toutes les pièces du puzzle.\nB: Commençons par les bords.",
 exampleSrc:"A: We need to assemble all the pieces of the puzzle.\nB: Let's start with the edges.",
 funFact:"'Qui se ressemble s'assemble' means 'birds of a feather flock together.' Classic French proverb."},

{type:"teach", trg:"l'appellation", src:"designation, appellation", pos:"noun", gender:"f",
 note:"Feminine noun. An official name or label.\nAOC = Appellation d'Origine Contrôlée.",
 example:"A: Ce vin a une appellation d'origine contrôlée.\nB: C'est un gage de qualité.",
 exampleSrc:"A: This wine has a controlled designation of origin.\nB: It's a guarantee of quality.",
 funFact:"France's AOC/AOP system protects regional products: Champagne, Roquefort, Brie de Meaux."},

{type:"teach", trg:"artisanal", src:"artisanal, handcrafted", pos:"adj", gender:null,
 note:"Adjective. Artisanal (m), artisanale (f).\nMade by hand, traditional methods.",
 example:"A: Ce pain est artisanal, fait à la main.\nB: On sent la différence avec le pain industriel.",
 exampleSrc:"A: This bread is artisanal, made by hand.\nB: You can taste the difference from industrial bread.",
 funFact:"French law protects the title 'artisan boulanger.' Not just anyone can call their bread artisanal."},

{type:"fb",
 s:"Ce fromage a une {1} d'origine protégée.",
 a:["appellation"],
 opts:["appellation","approximation","assemblage","assistance"],
 hint:"This feminine noun is the official designation that protects regional products like wine and cheese.",
 sSrc:"This cheese has a protected {1} of origin."},

{type:"teach", trg:"l'audiovisuel", src:"audiovisual, broadcasting", pos:"noun", gender:"m",
 note:"Masculine noun and adjective. TV, radio, and multimedia.\nLe secteur audiovisuel = the broadcasting sector.",
 example:"A: Elle travaille dans l'audiovisuel depuis dix ans.\nB: Elle a produit plusieurs documentaires.",
 exampleSrc:"A: She's been working in broadcasting for ten years.\nB: She's produced several documentaries.",
 funFact:"Le CSA (Conseil Supérieur de l'Audiovisuel) regulates French broadcasting. Very powerful."},

{type:"match", pairs:[
  {trg:"l'agenda", src:"planner"},
  {trg:"l'audit", src:"audit"},
  {trg:"l'absentéisme", src:"absenteeism"},
  {trg:"l'appellation", src:"designation"},
  {trg:"artisanal", src:"handcrafted"}
]},

{type:"mc",
 q:"Quel verbe signifie 'raccourcir' ou 'rendre plus bref' ?",
 opts:["abréger","assembler","abattre","affecter"],
 ans:"abréger",
 hint:"'Pour...' this verb means 'to cut a long story short.' Think of making a speech shorter."}

]};
export default LESSON_9;
