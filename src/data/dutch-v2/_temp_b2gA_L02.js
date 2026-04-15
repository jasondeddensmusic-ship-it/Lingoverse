// B2 Gap Batch A — Lesson 02: Gezondheid & Welzijn
// Theme: Health systems, complaints, campaigns

const LESSON_2 = {id:"nlv2_b2gA_l2", title:"Gezondheid & Welzijn", icon:"\u{1F3E5}", xp:40, board:true, steps:[
  {type:"intro", title:"Gezondheid & Welzijn",
   desc:"Learn vocabulary for discussing health systems, medical conditions, and public health campaigns. Essential for NT2 reading texts about Dutch healthcare.",
   goals:["Learn health system vocabulary","Discuss medical conditions and complaints","Understand public health terminology"]},

  {type:"teach", trg:"de gezondheidsklacht", src:"health complaint", pos:"noun", gender:"c",
   note:"Compound: gezondheid (health) + klacht (complaint).\nUsed in medical and insurance contexts.",
   example:"A: Welke gezondheidsklachten heb je?\nB: Ik heb last van hoofdpijn en vermoeidheid.\nA: Hoe lang heb je deze klachten al?\nB: Al een paar weken. Het wordt niet beter.",
   exampleSrc:"A: What health complaints do you have?\nB: I suffer from headaches and fatigue.\nA: How long have you had these complaints?\nB: For a few weeks already. It's not getting better.",
   funFact:"In the Dutch healthcare system, you always visit your huisarts (GP) first with gezondheidsklachten. The GP acts as a gatekeeper to specialist care."},

  {type:"teach", trg:"de gezondheidscampagne", src:"health campaign", pos:"noun", gender:"c",
   note:"Compound: gezondheid + campagne (campaign).\nGovernment-led public awareness efforts.",
   example:"A: Heb je die nieuwe gezondheidscampagne gezien?\nB: Die over gezond eten? Ja, overal posters.\nA: De overheid besteedt veel geld aan zulke campagnes.\nB: Ik vraag me af of ze echt effect hebben.",
   exampleSrc:"A: Have you seen that new health campaign?\nB: The one about healthy eating? Yes, posters everywhere.\nA: The government spends a lot of money on such campaigns.\nB: I wonder if they really have an effect.",
   funFact:"The Netherlands runs famous health campaigns like 'NIX18' (no alcohol or tobacco under 18) and 'Bewegen is Goud' (Exercise is Gold)."},

  {type:"teach", trg:"de darmontsteking", src:"intestinal inflammation", pos:"noun", gender:"c",
   note:"Compound: darm (intestine) + ontsteking (inflammation).\nMedical term, common in health discussions.",
   example:"A: De arts zegt dat ik een darmontsteking heb.\nB: Dat klinkt vervelend. Wat zijn de symptomen?\nA: Buikpijn, koorts en vermoeidheid.\nB: Ik hoop dat je snel beter wordt.",
   exampleSrc:"A: The doctor says I have an intestinal inflammation.\nB: That sounds unpleasant. What are the symptoms?\nA: Abdominal pain, fever, and fatigue.\nB: I hope you get better soon.",
   funFact:"Dutch medical compounds are very transparent: darm (gut) + ontsteking (inflammation). Once you know the body part and the condition type, you can decode most medical terms."},

  {type:"teach", trg:"de infectie", src:"infection", pos:"noun", gender:"c",
   note:"Latin-origin word, same as English.\nUsed across medical and everyday contexts.",
   example:"A: Ik heb een infectie aan mijn oor.\nB: Heb je al antibiotica gekregen?\nA: Nee, de huisarts wil eerst afwachten.\nB: In Nederland schrijven artsen niet snel antibiotica voor.",
   exampleSrc:"A: I have an infection in my ear.\nB: Have you been given antibiotics already?\nA: No, the GP wants to wait first.\nB: In the Netherlands, doctors don't prescribe antibiotics quickly.",
   funFact:"Dutch GPs are famously conservative with antibiotics. The Netherlands has one of the lowest antibiotic prescription rates in Europe, contributing to less antibiotic resistance."},

  {type:"teach", trg:"de insuline", src:"insulin", pos:"noun", gender:"c",
   note:"Medical term. Same root as English.\nEssential for diabetes care discussions.",
   example:"A: Mijn moeder moet elke dag insuline spuiten.\nB: Heeft ze diabetes type 1 of type 2?\nA: Type 1. Ze heeft het al sinds haar jeugd.\nB: Gelukkig wordt de behandeling steeds beter.",
   exampleSrc:"A: My mother has to inject insulin every day.\nB: Does she have type 1 or type 2 diabetes?\nA: Type 1. She's had it since her youth.\nB: Fortunately, the treatment keeps improving.",
   funFact:"The word insuline comes from Latin 'insula' (island), referring to the islets of Langerhans in the pancreas where it is produced. Dutch uses the same Latin root as English."},

  {type:"teach", trg:"de hulpverleningssector", src:"aid services sector", pos:"noun", gender:"c",
   note:"Compound: hulpverlening (aid provision) + sector.\nCovers social work, emergency services, etc.",
   example:"A: Er is een groot tekort aan personeel in de hulpverleningssector.\nB: Dat geldt voor veel sectoren tegenwoordig.\nA: Maar in de hulpverlening heeft het directe gevolgen voor kwetsbare mensen.\nB: Daar heb je gelijk in.",
   exampleSrc:"A: There is a major staff shortage in the aid services sector.\nB: That applies to many sectors nowadays.\nA: But in aid services it has direct consequences for vulnerable people.\nB: You're right about that.",
   funFact:"The Dutch hulpverleningssector includes maatschappelijk werk (social work), jeugdzorg (youth care), and the GGZ (mental health services). It's a major employer."},

  {type:"tip", title:"Medical Compound Nouns",
   text:"Dutch medical vocabulary follows predictable patterns:\n\n- Body part + ontsteking = inflammation of that part\n  darm + ontsteking = darmontsteking\n  long + ontsteking = longontsteking (pneumonia)\n\n- gezondheid + noun = health-related noun\n  gezondheidsklacht, gezondheidscampagne, gezondheidszorg\n\nKnowing the building blocks helps you decode unfamiliar medical terms.",
   deepDive:{title:"The Dutch Healthcare System",
    text:"Dutch healthcare has three layers:\n\n1. Huisarts (GP): first point of contact, gatekeeper\n2. Specialist: only via GP referral (verwijzing)\n3. Ziekenhuis (hospital): for complex care\n\nEveryone must have a basisverzekering (basic insurance). The system is known for being accessible but having waitlijsten (waiting lists) for non-urgent care."}},

  {type:"mc", q:"Welk woord betekent 'health complaint'?",
   opts:["de gezondheidsklacht","de gezondheidscampagne","de darmontsteking","de infectie"],
   ans:"de gezondheidsklacht",
   hint:"A complaint (klacht) related to your health (gezondheid)."},

  {type:"fb", s:"De arts zegt dat ik een {1} heb en antibiotica nodig heb.",
   a:["infectie"], opts:["infectie","insuline","indicatie","campagne"],
   hint:"When harmful bacteria or viruses enter your body.",
   sSrc:"The doctor says I have an infection and need antibiotics."},

  {type:"mc", q:"Mijn moeder moet elke dag insuline spuiten. Wat is 'insuline'?",
   opts:["a hormone that regulates blood sugar","an antibiotic","a type of vaccine","a painkiller"],
   ans:"a hormone that regulates blood sugar",
   hint:"Essential for people with diabetes. Produced by the pancreas."},

  {type:"fb", s:"De overheid lanceerde een nieuwe {1} over gezond eten.",
   a:["gezondheidscampagne"], opts:["gezondheidscampagne","gezondheidsklacht","hulpverleningssector","darmontsteking"],
   hint:"A public awareness effort by the government about health topics.",
   sSrc:"The government launched a new health campaign about healthy eating."},

  {type:"match", pairs:[
    {trg:"gezondheidsklacht", src:"health complaint"},
    {trg:"gezondheidscampagne", src:"health campaign"},
    {trg:"darmontsteking", src:"intestinal inflammation"},
    {trg:"infectie", src:"infection"},
    {trg:"insuline", src:"insulin"},
    {trg:"hulpverleningssector", src:"aid services sector"}
  ]},

  {type:"mc", q:"Er is een tekort aan personeel in de hulpverleningssector. Wat is dat?",
   opts:["the aid services sector","the healthcare sector","the education sector","the technology sector"],
   ans:"the aid services sector",
   hint:"Hulpverlening (a... provision) + s.... Think social work and emergency s...."},

  {type:"fb", s:"De {1} veroorzaakt buikpijn en koorts.",
   a:["darmontsteking"], opts:["darmontsteking","infectie","insuline","campagne"],
   hint:"Inflammation (ontsteking) of the intestines (darm).",
   sSrc:"The intestinal inflammation causes abdominal pain and fever."},

  {type:"drag_fill", s:"Na de {1} verwees de huisarts mij naar een specialist voor mijn {2}.",
   blanks:{"1":"indicatie","2":"darmontsteking"},
   pool:["indicatie","darmontsteking","insuline","campagne","fractie"],
   hint:"First: the official referral assessment. Second: the intestinal condition."}
]};
export default LESSON_2;
