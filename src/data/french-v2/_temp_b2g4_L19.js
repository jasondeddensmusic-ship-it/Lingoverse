const LESSON_19 = {
  id:"frv2_b2g4_l19", title:"Corps et sciences", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Corps et sciences",
     desc:"Explore vocabulary related to the body, health sciences, and scientific concepts.",
     goals:["Learn 15 words about science and the body","Discuss health and scientific topics","Use technical vocabulary with confidence"]},

    {type:"teach", trg:"l'hypothalamus", src:"the hypothalamus", pos:"noun", gender:"m",
     note:"Masculine noun. A brain region controlling body temperature, hunger, and hormones.",
     example:"A: L'hypothalamus regule la temperature du corps.\nB: C'est une partie essentielle du cerveau.",
     exampleSrc:"A: The hypothalamus regulates body temperature.\nB: It's an essential part of the brain.",
     funFact:"From Greek 'hypo' (under) + 'thalamus' (chamber). It sits below the thalamus in the brain."},

    {type:"teach", trg:"l'hypothese", src:"the hypothesis", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in science context.\nA proposed explanation to be tested.",
     example:"A: L'hypothese doit etre verifiee par l'experience.\nB: C'est la base de la methode scientifique.",
     exampleSrc:"A: The hypothesis must be verified by experiment.\nB: That's the basis of the scientific method.",
     funFact:"Descartes and Pascal shaped the French scientific method. Hypothesis testing is deeply French."},

    {type:"teach", trg:"l'hemorragie", src:"hemorrhage, bleeding", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in medical context.\nSevere or uncontrolled bleeding.",
     example:"A: L'hemorragie a ete stoppee a temps.\nB: Le chirurgien a agi rapidement.",
     exampleSrc:"A: The hemorrhage was stopped in time.\nB: The surgeon acted quickly.",
     funFact:"Figuratively, 'hemorragie des cerveaux' means brain drain. France worries about talent leaving."},

    {type:"teach", trg:"l'hepatite", src:"hepatitis", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in science lesson.\nInflammation of the liver.",
     example:"A: L'hepatite B se transmet par le sang.\nB: La vaccination est recommandee.",
     exampleSrc:"A: Hepatitis B is transmitted through blood.\nB: Vaccination is recommended.",
     funFact:"France was a pioneer in hepatitis research. The hepatitis B vaccine was developed by French researchers."},

    {type:"teach", trg:"l'antirétroviral", src:"antiretroviral", pos:"adj", gender:null,
     note:"Adjective. Relating to drugs that fight retroviruses like HIV.",
     example:"A: Les traitements antiretroviraux ont revolutionne la lutte contre le sida.\nB: L'esperance de vie a considerablement augmente.",
     exampleSrc:"A: Antiretroviral treatments revolutionized the fight against AIDS.\nB: Life expectancy has increased considerably.",
     funFact:"France was among the first countries to provide free antiretroviral treatment. Francoise Barre-Sinoussi co-discovered HIV."},

    {type:"mc",
     q:"Quelle partie du cerveau regule la temperature corporelle ?",
     opts:["l'hypothalamus","l'hepatite","l'hemorragie","l'hypothese"],
     ans:"l'hypothalamus",
     hint:"From Greek meaning 'under the chamber'. A small brain region with huge regulatory functions."},

    {type:"teach", trg:"l'agressivite", src:"aggressiveness, aggression", pos:"noun", gender:"f",
     note:"Feminine noun. Hostile or violent behavior.\nFrom Latin 'aggressio' (attack).",
     example:"A: L'agressivite au volant est un vrai probleme.\nB: Les accidents sont souvent causes par la colere.",
     exampleSrc:"A: Road rage is a real problem.\nB: Accidents are often caused by anger.",
     funFact:"French psychology distinguishes 'agressivite' (trait) from 'agression' (act). The distinction matters in court."},

    {type:"teach", trg:"atteint", src:"affected, afflicted", pos:"adj", gender:null,
     note:"Adjective. Suffering from a condition.\nPast participle of 'atteindre'.",
     example:"A: Il est atteint d'une maladie rare.\nB: Les medecins cherchent un traitement.",
     exampleSrc:"A: He is afflicted with a rare disease.\nB: Doctors are looking for a treatment.",
     funFact:"'Atteint' can also mean crazy in slang: 'Il est completement atteint' means he's totally nuts."},

    {type:"teach", trg:"attarde", src:"delayed, backward", pos:"adj", gender:null,
     note:"Adjective. Slow in development. Can be offensive when applied to people.\nUse carefully.",
     example:"A: Les enfants attardes ont besoin d'un suivi adapte.\nB: Chaque enfant merite une education sur mesure.",
     exampleSrc:"A: Developmentally delayed children need adapted support.\nB: Every child deserves tailored education.",
     funFact:"'Attarde mental' is now considered offensive. Modern French prefers 'en situation de handicap'."},

    {type:"fb",
     s:"Les traitements {1} ont transforme la lutte contre le VIH.",
     a:["antiretroviraux"],
     opts:["antiretroviraux","attardes","atteints","agressifs"],
     hint:"Drugs that fight retroviruses like HIV. France was among the first to provide these treatments free.",
     sSrc:"{1} treatments transformed the fight against HIV."},

    {type:"teach", trg:"le decimetre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier. Reinforced in science context.\nA unit of measurement: 10 cm.",
     example:"A: Mesure la longueur en decimetres.\nB: C'est plus pratique pour les petits objets.",
     exampleSrc:"A: Measure the length in decimeters.\nB: It's more practical for small objects.",
     funFact:"France invented the metric system during the Revolution. The 'decimetre' was part of the original 1791 standard."},

    {type:"teach", trg:"le cinematographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original motion picture device.\nInvented by the Lumiere brothers.",
     example:"A: Le cinematographe a ete invente a Lyon.\nB: Les freres Lumiere ont change le monde.",
     exampleSrc:"A: The cinematograph was invented in Lyon.\nB: The Lumiere brothers changed the world.",
     funFact:"The Lumiere brothers held their first screening on December 28, 1895, in Paris. Cinema was born."},

    {type:"teach", trg:"le garanti", src:"the guarantee, the warranty", pos:"noun", gender:"m",
     note:"Masculine noun. A promise of quality or compensation.\nFrom 'garantir' (to guarantee).",
     example:"A: Ce produit est vendu avec un garanti de deux ans.\nB: En cas de panne, la reparation est gratuite.",
     exampleSrc:"A: This product comes with a two-year warranty.\nB: In case of breakdown, repair is free.",
     funFact:"French consumer law provides a 'garantie legale de conformite' of 2 years. Very protective of buyers."},

    {type:"mc",
     q:"Qui a invente le cinematographe ?",
     opts:["Les freres Montgolfier","Les freres Lumiere","Les freres Grimm","Les freres Wright"],
     ans:"Les freres Lumiere",
     hint:"They were from Lyon and held their first screening in December 1895 in Paris."},

    {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in science context.\nThe scientific study of crime.",
     example:"A: La criminologie aide a comprendre le comportement criminel.\nB: C'est une science interdisciplinaire.",
     exampleSrc:"A: Criminology helps understand criminal behavior.\nB: It's an interdisciplinary science.",
     funFact:"Alexandre Lacassagne, a Lyonnais, founded French criminology in the 1880s. He rivaled Lombroso."},

    {type:"fb",
     s:"Le {1} a ete invente par les freres Lumiere a Lyon.",
     a:["cinematographe"],
     opts:["cinematographe","decimetre","garanti","boitier"],
     hint:"The original motion picture device. Its inventors held the first screening in Paris in 1895.",
     sSrc:"The {1} was invented by the Lumiere brothers in Lyon."},

    {type:"match", pairs:[
      {trg:"hypothalamus", src:"brain temperature regulator"},
      {trg:"agressivite", src:"aggressiveness"},
      {trg:"atteint", src:"affected, afflicted"},
      {trg:"cinematographe", src:"motion picture device"},
      {trg:"garanti", src:"guarantee, warranty"}
    ]},

    {type:"mc",
     q:"Quel adjectif decrit une personne souffrant d'une maladie ?",
     opts:["agressif","approfondi","atteint","attarde"],
     ans:"atteint",
     hint:"Past participle of 'atteindre'. In slang, it can also mean someone is crazy."}
  ]
};
export default LESSON_19;
