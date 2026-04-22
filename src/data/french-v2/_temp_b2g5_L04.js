// French B2 Gap Lesson 4. Health and Well-being
const LESSON_4 = {id:"frv2_b2g5_l4", title:"Santé et bien-être", icon:"🏥", xp:15, board:true, steps:[
  {type:"intro", title:"Santé et bien-être",
   desc:"Develop vocabulary for health topics, medical conditions, and well-being discussions at B2 level.",
   goals:["Learn 15 key health and medical terms","Discuss symptoms, treatments, and well-being","Use formal medical vocabulary in context"]},

  {type:"teach", trg:"l'hépatite", src:"hepatitis", pos:"noun", gender:"f",
   note:"Inflammation of the liver. Several types exist (A, B, C).\nA serious global health concern.",
   example:"A: L'hépatite B se transmet par le sang.\nB: C'est pour cela que la vaccination est importante.\nA: Elle est obligatoire en France?\nB: Oui, pour les nourrissons depuis 2018.",
   exampleSrc:"A: Hepatitis B is transmitted through blood.\nB: That's why vaccination is important.\nA: Is it mandatory in France?\nB: Yes, for infants since 2018.",
   funFact:"From Greek 'hepar' (liver) + '-itis' (inflammation). The liver is 'le foie' in French."},

  {type:"teach", trg:"l'hémorragie", src:"the hemorrhage / bleeding", pos:"noun", gender:"f",
   note:"Severe bleeding, internal or external.\nAlso used figuratively: 'hémorragie de talents'.",
   example:"A: Le patient souffre d'une hémorragie interne.\nB: Il faut l'opérer immédiatement.\nA: L'équipe chirurgicale est prête?\nB: Oui, ils interviennent dans cinq minutes.",
   exampleSrc:"A: The patient is suffering from internal hemorrhage.\nB: He needs to be operated on immediately.\nA: Is the surgical team ready?\nB: Yes, they're operating in five minutes.",
   funFact:"From Greek 'haima' (blood) + 'rhegnynai' (to burst). Figuratively: a massive loss of something."},

  {type:"teach", trg:"infectieux", src:"infectious", pos:"adj", gender:null,
   note:"Capable of spreading disease.\nFeminine form: infectieuse.",
   example:"A: Cette maladie est-elle infectieuse?\nB: Oui, elle se transmet par contact direct.\nA: Il faut prendre des précautions.\nB: Le port du masque est recommandé.",
   exampleSrc:"A: Is this disease infectious?\nB: Yes, it is transmitted through direct contact.\nA: We need to take precautions.\nB: Wearing a mask is recommended.",
   funFact:"From Latin 'infectiosus'. The feminine form 'infectieuse' adds '-euse', a common pattern in French."},

  {type:"teach", trg:"indolore", src:"painless", pos:"adj", gender:null,
   note:"Without pain. Used for medical procedures and symptoms.\nSame form for masculine and feminine.",
   example:"A: L'examen est complètement indolore.\nB: Vraiment? Je n'aurai pas mal?\nA: Pas du tout, c'est une simple prise de sang.\nB: D'accord, je me sens rassuré.",
   exampleSrc:"A: The exam is completely painless.\nB: Really? I won't feel any pain?\nA: Not at all, it's just a blood draw.\nB: Okay, I feel reassured.",
   funFact:"From Latin 'indolorus': 'in-' (not) + 'dolor' (pain). Related to English 'dolorous'."},

  {type:"teach", trg:"l'indigestion", src:"the indigestion", pos:"noun", gender:"f",
   note:"Difficulty digesting food. Common and usually not serious.\nAlso figurative: too much of something.",
   example:"A: J'ai une indigestion terrible.\nB: Tu as trop mangé hier soir?\nA: Oui, trois parts de gâteau.\nB: Prends une tisane, ça va aider.",
   exampleSrc:"A: I have terrible indigestion.\nB: Did you eat too much last night?\nA: Yes, three slices of cake.\nB: Have some herbal tea, it will help.",
   funFact:"From Latin 'indigestio'. Figuratively, 'une indigestion de films' means watching too many movies."},

  {type:"teach", trg:"intestinal", src:"intestinal", pos:"adj", gender:null,
   note:"Related to the intestines.\nFeminine form: intestinale. Plural: intestinaux/intestinales.",
   example:"A: Les problèmes intestinaux sont fréquents en voyage.\nB: C'est à cause du changement d'alimentation.\nA: Comment les éviter?\nB: Boire de l'eau en bouteille et manger cuit.",
   exampleSrc:"A: Intestinal problems are common when traveling.\nB: It's because of the change in diet.\nA: How can you avoid them?\nB: Drink bottled water and eat cooked food.",
   funFact:"From Latin 'intestinum' (intestine). The French say 'la flore intestinale' for gut bacteria."},

  {type:"teach", trg:"la cruauté", src:"the cruelty", pos:"noun", gender:"f",
   note:"Deliberate infliction of pain or suffering.\nUsed in ethical debates about animals and humans.",
   example:"A: La cruauté envers les animaux est inacceptable.\nB: Je suis d'accord, les lois doivent être plus strictes.\nA: Certains pays ont fait des progrès.\nB: Mais il reste beaucoup à faire.",
   exampleSrc:"A: Cruelty towards animals is unacceptable.\nB: I agree, laws need to be stricter.\nA: Some countries have made progress.\nB: But there is still much to be done.",
   funFact:"From Latin 'crudelitas'. The adjective 'cruel' is identical in French and English."},

  {type:"teach", trg:"l'atrocité", src:"the atrocity", pos:"noun", gender:"f",
   note:"An extremely cruel or wicked act.\nUsed for war crimes and human rights violations.",
   example:"A: Les atrocités de cette guerre sont documentées.\nB: Les témoignages sont bouleversants.\nA: Les responsables seront-ils jugés?\nB: La justice internationale enquête.",
   exampleSrc:"A: The atrocities of this war are documented.\nB: The testimonies are devastating.\nA: Will those responsible be tried?\nB: International justice is investigating.",
   funFact:"From Latin 'atrocitas'. The adjective 'atroce' means 'atrocious' and is quite common in French."},

  {type:"teach", trg:"la grossièreté", src:"the rudeness / vulgarity", pos:"noun", gender:"f",
   note:"Rude or vulgar behavior or language.\nFrench culture values politeness highly.",
   example:"A: Sa grossièreté a choqué tout le monde.\nB: Il n'a aucun savoir-vivre.\nA: On devrait lui dire quelque chose.\nB: Oui, mais avec diplomatie.",
   exampleSrc:"A: His rudeness shocked everyone.\nB: He has no manners at all.\nA: We should say something to him.\nB: Yes, but diplomatically.",
   funFact:"From 'grossier' (coarse, rude) + '-eté'. French etiquette considers grossièreté a serious social failing."},

  {type:"mc", q:"Quelle maladie est une inflammation du foie?",
   opts:["L'hépatite","L'hémorragie","L'indigestion","L'inhalation"],
   ans:"L'hépatite",
   hint:"The Greek root 'hepar' refers to the liver"},

  {type:"fb", s:"L'examen est complètement {1}, vous n'aurez pas mal.",
   a:["indolore"], opts:["indolore","infectieux","intestinal","incomplet"],
   hint:"Without any pain: a medical procedure that does not hurt",
   sSrc:"The exam is completely {1}, you will not feel any pain."},

  {type:"teach", trg:"imprudent", src:"reckless / imprudent", pos:"adj", gender:null,
   note:"Lacking caution. Can describe people or actions.\nFeminine form: imprudente.",
   example:"A: Conduire sans ceinture est imprudent.\nB: C'est même illégal en France.\nA: Beaucoup de gens prennent ce risque.\nB: Les amendes sont de plus en plus sévères.",
   exampleSrc:"A: Driving without a seatbelt is reckless.\nB: It's even illegal in France.\nA: Many people take this risk.\nB: The fines are getting increasingly severe.",
   funFact:"From Latin 'imprudens' (not foreseeing). The noun 'imprudence' means reckless behavior."},

  {type:"teach", trg:"l'hérédité", src:"heredity", pos:"noun", gender:"f",
   note:"The transmission of traits from parents to children.\nBiology and genetics term.",
   example:"A: L'hérédité joue un rôle dans cette maladie.\nB: C'est génétique?\nA: En partie. L'environnement compte aussi.\nB: Il faut surveiller les antécédents familiaux.",
   exampleSrc:"A: Heredity plays a role in this disease.\nB: Is it genetic?\nA: Partly. The environment also matters.\nB: Family history needs to be monitored.",
   funFact:"From Latin 'hereditas' (inheritance). In French, 'héréditaire' means 'hereditary'."},

  {type:"teach", trg:"infatigable", src:"tireless / indefatigable", pos:"adj", gender:null,
   note:"Never showing signs of fatigue.\nA compliment for hard workers and activists.",
   example:"A: Elle est infatigable, elle travaille jour et nuit.\nB: Comment fait-elle?\nA: La passion lui donne de l'énergie.\nB: C'est admirable, mais elle devrait se reposer.",
   exampleSrc:"A: She is tireless, she works day and night.\nB: How does she do it?\nA: Passion gives her energy.\nB: It's admirable, but she should rest.",
   funFact:"From 'in-' (not) + 'fatigable' (tirable). The root 'fatiguer' means 'to tire'."},

  {type:"mc", q:"Quel adjectif décrit une maladie qui peut se transmettre?",
   opts:["Infatigable","Infectieuse","Indolore","Intestinale"],
   ans:"Infectieuse",
   hint:"A disease that spreads from person to person through contact"},

  {type:"fb", s:"L'{1} joue un rôle important dans la transmission des maladies génétiques.",
   a:["hérédité"], opts:["hérédité","hépatite","hémorragie","indigestion"],
   hint:"The passing of biological traits from parents to offspring",
   sSrc:"{1} plays an important role in the transmission of genetic diseases."},

  {type:"match", pairs:[
    {trg:"indolore", src:"painless"},
    {trg:"infectieux", src:"infectious"},
    {trg:"la cruauté", src:"cruelty"},
    {trg:"infatigable", src:"tireless"},
    {trg:"imprudent", src:"reckless"}
  ]},

  {type:"mc", q:"Que signifie 'une indigestion de films'?",
   opts:["Un problème d'estomac au cinéma","Un genre de comédie","Avoir regardé trop de films","Un film sur la nourriture"],
   ans:"Avoir regardé trop de films",
   hint:"The figurative meaning: an excess or overdose of something"},

  {type:"fb", s:"Sa {1} a choqué tout le monde lors du dîner.",
   a:["grossièreté"], opts:["grossièreté","cruauté","atrocité","hérédité"],
   hint:"Rude or vulgar behavior that offends social norms",
   sSrc:"His {1} shocked everyone at the dinner."},

  {type:"drag_fill", s:"Les {1} de cette guerre sont bien documentées par les {2} des victimes.",
   blanks:{"1":"atrocités","2":"témoignages"},
   pool:["atrocités","témoignages","grossièretés","maladies"],
   hint:"Extremely cruel acts recorded through the accounts of those who suffered"},

  {type:"mc", q:"Conduire sans ceinture de sécurité est:",
   opts:["Infatigable","Indolore","Intestinal","Imprudent"],
   ans:"Imprudent",
   hint:"Lacking caution, taking unnecessary risks with safety"}
]};
export default LESSON_4;
