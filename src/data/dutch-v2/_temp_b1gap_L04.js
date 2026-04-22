// L04: Health and Body, 20 B1 gap words
const LESSON_4 = {
  id:"nlv2_b1gap_l4", title:"Gezondheid en Lichaam", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Health and Body",
     desc:"Learn Dutch vocabulary for health, illness, and medical care. Important for doctor visits and understanding health news.",
     goals:["Master 20 health and medical terms","Describe symptoms and conditions","Understand medical vocabulary"]},

    {type:"teach", trg:"de aandoening", src:"the condition / the ailment", pos:"noun", gender:"c",
     note:"Common gender (de). A medical condition or disorder.",
     example:"A: Wat voor aandoening heeft hij?\nB: Een chronische hartaandoening.",
     exampleSrc:"A: What kind of condition does he have?\nB: A chronic heart condition.",
     funFact:"From 'aandoen' (to affect). The illness 'does something onto' you. More formal than 'ziekte'."},

    {type:"teach", trg:"de behandeling", src:"the treatment", pos:"noun", gender:"c",
     note:"Common gender (de). Medical treatment or therapy.",
     example:"A: Hoe lang duurt de behandeling?\nB: Ongeveer zes weken.",
     exampleSrc:"A: How long does the treatment last?\nB: About six weeks.",
     funFact:"From 'behandelen' (to treat/handle). The same word is used for treating patients and handling tasks."},

    {type:"teach", trg:"de ambulance", src:"the ambulance", pos:"noun", gender:"c",
     note:"Common gender (de). Emergency medical vehicle.",
     example:"A: Bel een ambulance! Hij is gevallen.\nB: Ik bel 112!",
     exampleSrc:"A: Call an ambulance! He fell.\nB: I'm calling 112!",
     funFact:"112 is the emergency number in the Netherlands and all of Europe. Same word in English and Dutch."},

    {type:"teach", trg:"de astma", src:"asthma", pos:"noun", gender:"c",
     note:"Common gender (de). A chronic breathing condition.",
     example:"A: Ze heeft astma en kan niet goed ademen.\nB: Heeft ze haar inhaler bij zich?",
     exampleSrc:"A: She has asthma and cannot breathe well.\nB: Does she have her inhaler with her?",
     funFact:"From Greek 'asthma' (panting). Nearly identical across European languages."},

    {type:"mc",
     q:"Iemand kan niet goed ademen en heeft een inhaler nodig. Wat heeft hij?",
     opts:["astma","anorexia","arbeidsongeschiktheid","aandoening"],
     ans:"astma",
     hint:"Think about the chronic condition that affects the airways and lungs."},

    {type:"teach", trg:"amputeren", src:"to amputate", pos:"verb", gender:null,
     note:"Inseparable verb. Ik amputeer, jij amputeert.",
     example:"A: De chirurg moest zijn been amputeren.\nB: Wat verschrikkelijk.",
     exampleSrc:"A: The surgeon had to amputate his leg.\nB: How terrible.",
     funFact:"From Latin 'amputare' (to cut around). Same word in nearly every European language."},

    {type:"teach", trg:"de anorexia", src:"anorexia", pos:"noun", gender:"c",
     note:"Common gender (de). An eating disorder.",
     example:"A: Anorexia is een ernstige ziekte.\nB: Ja, het vereist professionele hulp.",
     exampleSrc:"A: Anorexia is a serious illness.\nB: Yes, it requires professional help.",
     funFact:"Greek origin: 'an-' (without) + 'orexis' (appetite). Awareness campaigns are common in Dutch schools."},

    {type:"teach", trg:"de beha", src:"the bra", pos:"noun", gender:"c",
     note:"Common gender (de). Short for 'bustehouder'.",
     example:"A: Waar kan ik een beha kopen?\nB: In de lingerieafdeling, eerste verdieping.",
     exampleSrc:"A: Where can I buy a bra?\nB: In the lingerie department, first floor.",
     funFact:"Short for 'bustehouder' (bust holder). The abbreviation is universally used in spoken Dutch."},

    {type:"teach", trg:"de behoefte", src:"the need / the requirement", pos:"noun", gender:"c",
     note:"Common gender (de). A need or necessity.",
     example:"A: Er is behoefte aan meer artsen.\nB: Vooral op het platteland.",
     exampleSrc:"A: There is a need for more doctors.\nB: Especially in the countryside.",
     funFact:"From 'behoeven' (to need). 'Basisbehoefte' = basic need. Used in formal and medical contexts."},

    {type:"teach", trg:"de basisbehoefte", src:"the basic need", pos:"noun", gender:"c",
     note:"Common gender (de). Basis + behoefte compound.",
     example:"A: Voedsel en water zijn basisbehoeften.\nB: En een dak boven je hoofd.",
     exampleSrc:"A: Food and water are basic needs.\nB: And a roof over your head.",
     funFact:"Maslow's hierarchy of needs is 'piramide van Maslow' in Dutch. 'Basisbehoeften' form the base."},

    {type:"fb",
     s:"De dokter zegt dat de {1} zes weken zal duren.",
     a:["behandeling"],
     opts:["behandeling","aandoening","behoefte","ambulance"],
     hint:"Which word describes the medical process of curing or helping a patient?",
     sSrc:"The doctor says the {1} will last six weeks."},

    {type:"teach", trg:"bejaard", src:"elderly / aged", pos:"adj", gender:null,
     note:"Adjective. Describes very old people.",
     example:"A: Mijn buurvrouw is bejaard.\nB: Hoe oud is ze?",
     exampleSrc:"A: My neighbor is elderly.\nB: How old is she?",
     funFact:"From 'be-' + 'jaar' (year). Literally 'be-yeared'. Now sometimes considered old-fashioned; 'ouderen' is more polite."},

    {type:"teach", trg:"het bejaardentehuis", src:"the elderly care home", pos:"noun", gender:"n",
     note:"Neuter gender (het). Bejaarden + tehuis compound.",
     example:"A: Oma woont in een bejaardentehuis.\nB: Vindt ze het er fijn?",
     exampleSrc:"A: Grandma lives in a care home.\nB: Does she like it there?",
     funFact:"Modern Dutch prefers 'verzorgingshuis' (care home). 'Bejaardentehuis' sounds dated to younger people."},

    {type:"teach", trg:"acuut", src:"acute / urgent", pos:"adj", gender:null,
     note:"Adjective. Describes something requiring immediate attention.",
     example:"A: Het is een acuut probleem.\nB: We moeten nu handelen.",
     exampleSrc:"A: It is an acute problem.\nB: We must act now.",
     funFact:"From Latin 'acutus' (sharp). Used in medical Dutch for sudden, severe conditions."},

    {type:"mc",
     q:"Een patiënt heeft plotseling hevige pijn. De situatie is ___.",
     opts:["algemeen","acuut","abstract","ambitieus"],
     ans:"acuut",
     hint:"Which adjective describes something sudden and requiring immediate action?"},

    {type:"teach", trg:"de aantasting", src:"the damage / the deterioration", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aantasten' (to damage).",
     example:"A: Er is aantasting van het milieu.\nB: We moeten beter recyclen.",
     exampleSrc:"A: There is environmental damage.\nB: We need to recycle better.",
     funFact:"'Aantasten' literally means 'to touch on'. Something that damages 'touches' the thing negatively."},

    {type:"teach", trg:"aantasten", src:"to damage / to affect", pos:"verb", gender:null,
     note:"Separable verb. Ik tast aan, jij tast aan.",
     example:"A: Roken tast je longen aan.\nB: Daarom ben ik gestopt.",
     exampleSrc:"A: Smoking damages your lungs.\nB: That is why I quit.",
     funFact:"Aan (on) + tasten (to touch/feel). You 'feel onto' something, causing harm. Very common in health contexts."},

    {type:"teach", trg:"de afkoeling", src:"the cooling down", pos:"noun", gender:"c",
     note:"Common gender (de). Process of cooling, also recovery.",
     example:"A: Na het sporten is afkoeling belangrijk.\nB: Ja, ik doe altijd rekoefeningen.",
     exampleSrc:"A: After exercise, cooling down is important.\nB: Yes, I always do stretching.",
     funFact:"Af (off) + koeling (cooling). Used for weather, exercise recovery, and even emotional calming."},

    {type:"teach", trg:"de behandelmethode", src:"the treatment method", pos:"noun", gender:"c",
     note:"Common gender (de). Behandel + methode compound.",
     example:"A: Er is een nieuwe behandelmethode.\nB: Is die beter dan de oude?",
     exampleSrc:"A: There is a new treatment method.\nB: Is it better than the old one?",
     funFact:"Dutch medicine is known for being practical. 'Paracetamol' is the go-to treatment for almost everything."},

    {type:"teach", trg:"beheersbaar", src:"manageable / controllable", pos:"adj", gender:null,
     note:"Adjective. Something that can be controlled or handled.",
     example:"A: Is de ziekte beheersbaar?\nB: Ja, met medicijnen wel.",
     exampleSrc:"A: Is the disease manageable?\nB: Yes, with medication it is.",
     funFact:"Beheers (control) + -baar (-able). Same pattern as English: manage + -able."},

    {type:"match", pairs:[
      {trg:"aandoening", src:"condition/ailment"},
      {trg:"behandeling", src:"treatment"},
      {trg:"ambulance", src:"ambulance"},
      {trg:"bejaard", src:"elderly"},
      {trg:"acuut", src:"acute/urgent"}
    ]},

    {type:"fb",
     s:"Roken {1} je gezondheid. Je moet ermee stoppen.",
     a:["tast aan"],
     opts:["tast aan","behandelt","bekeurt","amputeert"],
     hint:"Which separable verb means to cause harm or damage to something?",
     sSrc:"Smoking {1} your health. You must stop."},

    {type:"mc",
     q:"Waar woont een heel oud persoon die niet meer alleen kan wonen?",
     opts:["een adviesbureau","een ambulance","een bejaardentehuis","een advocatenkantoor"],
     ans:"een bejaardentehuis",
     hint:"Think about the residential facility designed for very old people needing care."}
  ]
};
export default LESSON_4;
