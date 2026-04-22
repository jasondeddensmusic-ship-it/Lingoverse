// L13 - Housing & Furnishing
const LESSON_13 = {id:"frv2_b1gap_l13", title:"La maison et l'habitat", icon:"\u{1F3E0}", xp:15, board:true, steps:[

{type:"intro", title:"La maison et l'habitat",
 desc:"Learn vocabulary for housing, furnishing, and the spaces we live in.",
 goals:["Learn 20 words about housing and living spaces","Discuss home improvement and decoration","Navigate real estate vocabulary"]},

{type:"teach", trg:"l'ameublement", src:"furnishing, furniture", pos:"noun", gender:"m",
 note:"Masculine noun. From meubler (to furnish).\nThe collective term for furniture.",
 example:"A: Le magasin d'ameublement ouvre samedi.\nB: Allons-y, on a besoin d'un canapé.",
 exampleSrc:"A: The furniture store opens Saturday.\nB: Let's go, we need a sofa.",
 funFact:"Ameublement is the industry/concept. Meubles are the individual pieces. A subtle distinction."},

{type:"teach", trg:"l'aménagement", src:"development, layout, fitting out", pos:"noun", gender:"m",
 note:"Masculine noun. From aménager (to arrange).\nRoom layout or urban planning.",
 example:"A: L'aménagement de cette cuisine est bien pensé.\nB: Tout est à portée de main.",
 exampleSrc:"A: The layout of this kitchen is well thought out.\nB: Everything is within reach.",
 funFact:"Aménagement du territoire is France's regional planning policy. Paris vs. provinces is eternal."},

{type:"teach", trg:"accessible", src:"accessible", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Reachable or affordable.\nAlso: handicap accessible.",
 example:"A: Ce musée est accessible aux personnes en fauteuil roulant.\nB: C'est important pour l'inclusion.",
 exampleSrc:"A: This museum is accessible to wheelchair users.\nB: It's important for inclusion.",
 funFact:"French law requires all public buildings to be accessible. The 2005 disability law was a landmark."},

{type:"teach", trg:"l'après-guerre", src:"postwar period", pos:"noun", gender:"m",
 note:"Masculine noun. The period after a war.\nUsually refers to post-WWII (1945+).",
 example:"A: L'architecture d'après-guerre est souvent austère.\nB: Il fallait reconstruire vite et pas cher.",
 exampleSrc:"A: Postwar architecture is often austere.\nB: They had to rebuild quickly and cheaply.",
 funFact:"Les Trente Glorieuses (1945-1975) were France's 30 glorious years of postwar economic boom."},

{type:"teach", trg:"arrondi", src:"rounded, rounded off", pos:"adj", gender:null,
 note:"Past participle of arrondir used as adjective.\nPhysical or numerical rounding.",
 example:"A: Les angles arrondis de ce meuble sont plus sûrs.\nB: Surtout avec des enfants en bas âge.",
 exampleSrc:"A: The rounded corners of this furniture are safer.\nB: Especially with young children.",
 funFact:"Arrondir ses fins de mois means to supplement your income. 'Rounding off' the end of the month."},

{type:"mc",
 q:"Quel mot décrit la disposition et l'organisation d'un espace ?",
 opts:["l'aménagement","l'ameublement","l'assemblage","l'arrosage"],
 ans:"l'aménagement",
 hint:"Think of how a room or space is arranged. It also applies to urban planning."},

{type:"teach", trg:"l'alerte", src:"alert, warning", pos:"noun", gender:"f",
 note:"Feminine noun. A warning or alarm.\nAlso adjective: alert, lively (un vieillard alerte).",
 example:"A: Une alerte météo a été lancée pour demain.\nB: On attend de fortes pluies.",
 exampleSrc:"A: A weather alert was issued for tomorrow.\nB: Heavy rain is expected.",
 funFact:"As an adjective, alerte means lively and alert: 'Malgré ses 90 ans, elle est très alerte.'"},

{type:"teach", trg:"l'attaquant", src:"attacker, striker", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Someone who attacks.\nIn football: the striker/forward.",
 example:"A: L'attaquant a marqué un but magnifique.\nB: C'est son dixième but cette saison.",
 exampleSrc:"A: The striker scored a magnificent goal.\nB: It's his tenth goal this season.",
 funFact:"In French football, 'attaquant de pointe' is the center forward. Football vocabulary is rich in French."},

{type:"teach", trg:"l'attribut", src:"attribute, characteristic", pos:"noun", gender:"m",
 note:"Masculine noun. A quality or feature belonging to someone.\nAlso a grammar term.",
 example:"A: La patience est un attribut essentiel d'un bon professeur.\nB: C'est vrai, et aussi l'humour.",
 exampleSrc:"A: Patience is an essential attribute of a good teacher.\nB: True, and also humor.",
 funFact:"In French grammar, l'attribut du sujet is the subject complement. 'Il est médecin': médecin is the attribut."},

{type:"teach", trg:"atténuer", src:"to lessen, to mitigate", pos:"verb", gender:null,
 note:"Regular -er verb. To make less intense.\nCirconstances atténuantes = mitigating circumstances.",
 example:"A: Ce médicament atténue la douleur.\nB: Il agit en une vingtaine de minutes.",
 exampleSrc:"A: This medicine lessens the pain.\nB: It works in about twenty minutes.",
 funFact:"In law, circonstances atténuantes can reduce a sentence. A very important legal concept."},

{type:"fb",
 s:"Ce médicament {1} la douleur en quelques minutes.",
 a:["atténue"],
 opts:["atténue","amplifie","altère","accentue"],
 hint:"This verb means to lessen or reduce the intensity of something. Think of pain relief.",
 sSrc:"This medicine {1} the pain in a few minutes."},

{type:"teach", trg:"l'apparenté", src:"related, connected", pos:"adj", gender:null,
 note:"Past participle of apparenter, used as adjective.\nBiological or political connection.",
 example:"A: Ces deux espèces sont apparentées.\nB: Elles partagent un ancêtre commun.",
 exampleSrc:"A: These two species are related.\nB: They share a common ancestor.",
 funFact:"In politics, 'apparenté' means affiliated. 'Député apparenté socialiste' = MP affiliated with socialists."},

{type:"teach", trg:"l'appât", src:"bait, lure", pos:"noun", gender:"m",
 note:"Masculine noun. What attracts prey.\nL'appât du gain = the lure of profit.",
 example:"A: Le pêcheur prépare ses appâts.\nB: Il utilise des vers de terre aujourd'hui.",
 exampleSrc:"A: The fisherman prepares his bait.\nB: He's using earthworms today.",
 funFact:"L'appât du gain (the lure of profit) is the most common figurative use. Greed as bait."},

{type:"teach", trg:"l'aubergiste", src:"innkeeper", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. The owner of an auberge (inn).\nTraditional hospitality.",
 example:"A: L'aubergiste nous a accueillis chaleureusement.\nB: Sa cuisine est réputée dans toute la région.",
 exampleSrc:"A: The innkeeper welcomed us warmly.\nB: His cooking is famous throughout the region.",
 funFact:"Les Auberges de Jeunesse (youth hostels) are a French institution. Budget travel since the 1930s."},

{type:"mc",
 q:"Quel mot désigne ce qu'on met sur un hameçon pour attraper un poisson ?",
 opts:["l'alerte","l'appât","l'attribut","l'attaquant"],
 ans:"l'appât",
 hint:"This masculine noun is what fishermen use to lure fish. Figuratively, it's the lure of profit."},

{type:"teach", trg:"l'alpiniste", src:"mountain climber, alpinist", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Someone who climbs mountains.\nFrom Alpes (Alps).",
 example:"A: L'alpiniste a atteint le sommet du Mont Blanc.\nB: C'est un exploit remarquable.",
 exampleSrc:"A: The mountaineer reached the summit of Mont Blanc.\nB: It's a remarkable achievement.",
 funFact:"France invented modern alpinism. The first Mont Blanc ascent in 1786 started the sport."},

{type:"teach", trg:"l'aménageur", src:"developer, urban planner", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Person who plans urban development.\nFrom aménager.",
 example:"A: L'aménageur prévoit un nouveau quartier résidentiel.\nB: Il y aura des commerces et des écoles.",
 exampleSrc:"A: The developer plans a new residential neighborhood.\nB: There will be shops and schools.",
 funFact:"Aménageurs shape French cities. The grands ensembles (housing projects) of the 1960s were their work."},

{type:"teach", trg:"accidentel", src:"accidental", pos:"adj", gender:null,
 note:"Adjective. Accidentel (m), accidentelle (f).\nNot intentional, caused by chance.",
 example:"A: La mort a été déclarée accidentelle.\nB: L'enquête est maintenant close.",
 exampleSrc:"A: The death was declared accidental.\nB: The investigation is now closed.",
 funFact:"In insurance, 'dommage accidentel' is accidental damage. The distinction with intentional is crucial."},

{type:"teach", trg:"anormalement", src:"abnormally, unusually", pos:"adv", gender:null,
 note:"Adverb from anormal. Beyond what is normal.\nOften in weather or medical contexts.",
 example:"A: Les températures sont anormalement élevées pour la saison.\nB: Le changement climatique en est la cause.",
 exampleSrc:"A: Temperatures are abnormally high for the season.\nB: Climate change is the cause.",
 funFact:"Weather forecasters love this adverb. 'Anormalement doux' (abnormally mild) is a winter classic."},

{type:"fb",
 s:"L'{1} a atteint le sommet malgré la tempête.",
 a:["alpiniste"],
 opts:["alpiniste","aubergiste","aménageur","attaquant"],
 hint:"This noun describes someone who climbs mountains. The sport was invented in France.",
 sSrc:"The {1} reached the summit despite the storm."},

{type:"teach", trg:"l'acrobatie", src:"acrobatics", pos:"noun", gender:"f",
 note:"Feminine noun. Spectacular physical feats.\nAlso figurative: acrobaties financières = financial gymnastics.",
 example:"A: Les acrobaties des artistes du cirque sont impressionnantes.\nB: Il faut des années d'entraînement.",
 exampleSrc:"A: The acrobatics of circus performers are impressive.\nB: It takes years of training.",
 funFact:"Acrobaties fiscales means creative tax dodging. French loves extending physical metaphors."},

{type:"match", pairs:[
  {trg:"l'ameublement", src:"furnishing"},
  {trg:"accessible", src:"accessible"},
  {trg:"atténuer", src:"to lessen"},
  {trg:"l'appât", src:"bait"},
  {trg:"l'alpiniste", src:"mountain climber"}
]},

{type:"mc",
 q:"Quel adjectif décrit des coins de meuble qui ne sont pas anguleux ?",
 opts:["apparentés","anormaux","arrondis","accidentels"],
 ans:"arrondis",
 hint:"This adjective describes edges that have been made smoother. Think of safe furniture for children."}

]};
export default LESSON_13;
