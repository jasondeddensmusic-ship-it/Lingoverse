// Batch 3 — Unit 21, Lesson 1: Desideri e rimpianti (Wishes & Regrets)
const BATCH3_U21_L1 = {
  id:"itv2_u21l_b3_1", title:"Desideri e rimpianti", icon:"\uD83C\uDF1F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Desideri e rimpianti",
     desc:"Use the conditional to express wishes, desires, and things you would do differently. These patterns are central to Italian conversation about hopes and regrets.",
     goals:["Express wishes with the conditional","Talk about what you would change","Use conditional for polite hypotheticals"]},

    {type:"teach", trg:"cambierei", src:"I would change", pos:"verb", gender:null,
     note:"Conditional of 'cambiare.' Regular -are.\n'Cambierei lavoro' = I would change jobs.",
     example:"A: Cosa cambieresti della tua vita?\nB: Cambierei lavoro e città.",
     exampleSrc:"A: What would you change about your life?\nB: I would change jobs and city.",
     funFact:"'Cosa cambieresti?' is a favorite Italian conversation starter. Italians love hypothetical discussions about life choices. The conditional makes these conversations feel safe: you are exploring possibilities, not making commitments."},

    {type:"teach", trg:"comprerei", src:"I would buy", pos:"verb", gender:null,
     note:"Conditional of 'comprare.' Regular -are.\n'Comprerei una casa al mare' = I would buy a house by the sea.",
     example:"A: Se avessi i soldi, comprerei una casa in Toscana.\nB: Chi non la comprerebbe?",
     exampleSrc:"A: If I had the money, I would buy a house in Tuscany.\nB: Who would not buy one?",
     funFact:"'Comprerei una casa al mare' (I would buy a house by the sea) or 'in campagna' (in the countryside) is the universal Italian dream. Property by the coast or in Tuscany represents the ideal Italian lifestyle. The conditional makes the dream feel tangible yet safely hypothetical."},

    {type:"teach", trg:"viaggerei", src:"I would travel", pos:"verb", gender:null,
     note:"Conditional of 'viaggiare.' Regular -are (keeps -i).\n'Viaggerei per il mondo' = I would travel the world.",
     example:"A: Dove viaggeresti?\nB: Viaggerei in Asia e in Sud America.",
     exampleSrc:"A: Where would you travel?\nB: I would travel to Asia and South America.",
     funFact:"'Viaggiare' in the conditional keeps the -i (viaggerei), just like 'mangiare' (mangerei). Travel is deeply valued in Italian culture. 'Se potessi, viaggerei sempre' (If I could, I would always travel) is a sentiment shared by many Italians."},

    {type:"teach", trg:"vivrei", src:"I would live", pos:"verb", gender:null,
     note:"Conditional of 'vivere.' Irregular: vivrei (not 'viverei').\n'Vivrei all'estero' = I would live abroad.",
     example:"A: Vivrei volentieri a Barcellona.\nB: Anch'io, il clima e fantastico.",
     exampleSrc:"A: I would gladly live in Barcelona.\nB: Me too, the climate is fantastic.",
     funFact:"'Vivere' has an irregular conditional stem (vivr-, not viver-). 'Vivrei all'estero' (I would live abroad) reflects a real Italian trend: over 5 million Italians live outside Italy. Young Italians especially dream of living abroad for career opportunities."},

    {type:"teach", trg:"andrei", src:"I would go", pos:"verb", gender:null,
     note:"Conditional of 'andare.' Irregular stem: andr-.\n'Andrei volentieri' = I would gladly go.",
     example:"A: Andrei volentieri in montagna.\nB: Potremmo andarci il prossimo weekend.",
     exampleSrc:"A: I would gladly go to the mountains.\nB: We could go there next weekend.",
     funFact:"'Andare' has one of the most irregular conditional stems: andr- (like the future: andro). 'Andrei' combines with 'volentieri' (gladly/willingly) for a very natural expression: 'Ci andrei volentieri' (I would go there gladly)."},

    {type:"teach", trg:"darei", src:"I would give", pos:"verb", gender:null,
     note:"Conditional of 'dare.' Irregular stem: dar-.\n'Darei tutto' = I would give everything.",
     example:"A: Darei qualsiasi cosa per tornare in Italia.\nB: Ti manca così tanto?",
     exampleSrc:"A: I would give anything to go back to Italy.\nB: Do you miss it that much?",
     funFact:"'Dare' keeps a simple stem (dar-) in the conditional. 'Darei' is used in expressions of sacrifice: 'Darei la vita per...' (I would give my life for...). In everyday speech: 'Ti darei ragione' (I would say you are right) is a diplomatic way to partially agree."},

    {type:"teach", trg:"berrei", src:"I would drink", pos:"verb", gender:null,
     note:"Conditional of 'bere.' Irregular stem: berr- (double r).\n'Berrei volentieri un caffè' = I would gladly drink a coffee.",
     example:"A: Berrei volentieri qualcosa di fresco.\nB: Ti offro una limonata.",
     exampleSrc:"A: I would gladly drink something cool.\nB: I will get you a lemonade.",
     funFact:"'Bere' has a contracted infinitive (from Latin 'bevere'). The conditional stem 'berr-' has a distinctive double r. 'Berrei volentieri' is a polite, slightly playful way to accept a drink invitation. It is less direct than 'vorrei bere' and sounds more natural."},

    {type:"teach", trg:"terrei", src:"I would keep / I would hold", pos:"verb", gender:null,
     note:"Conditional of 'tenere.' Irregular stem: terr- (double r).\n'Terrei tutto' = I would keep everything.",
     example:"A: Quale ricordo terresti di questo viaggio?\nB: Terrei la foto del tramonto.",
     exampleSrc:"A: Which memory would you keep from this trip?\nB: I would keep the sunset photo.",
     funFact:"'Tenere' (to hold/keep) has an irregular conditional like 'venire' (verrei) and 'bere' (berrei), with a doubled consonant. 'Terrei per me' means 'I would keep for myself.' 'Tenere a qualcuno' means to care about someone."},

    {type:"teach", trg:"direi", src:"I would say", pos:"verb", gender:null,
     note:"Conditional of 'dire.' Irregular stem: dir-.\n'Direi di si' = I would say yes.",
     example:"A: Direi che hai ragione.\nB: Grazie, finalmente qualcuno lo dice!",
     exampleSrc:"A: I would say you are right.\nB: Thanks, finally someone says it!",
     funFact:"'Direi' is used constantly in Italian conversation to soften opinions. 'Direi che...' (I would say that...) is more diplomatic than 'Penso che...' (I think that...). 'Direi di si/no' (I would say yes/no) hedges your answer with conditional politeness."},

    {type:"teach", trg:"saprei", src:"I would know (how to)", pos:"verb", gender:null,
     note:"Conditional of 'sapere.' Irregular stem: sapr-.\n'Non saprei' = I would not know / I am not sure.",
     example:"A: Sapresti dirmi dov'è la stazione?\nB: Non saprei, chiedi a quel signore.",
     exampleSrc:"A: Would you know where the station is?\nB: I am not sure, ask that gentleman.",
     funFact:"'Non saprei' (I would not know) is a wonderfully Italian way to express uncertainty. It is softer than 'non so' (I do not know). 'Sapresti' in questions is a very polite way to ask for information: 'Sapresti aiutarmi?' (Would you know how to help me?)."},

    {type:"teach", trg:"starei", src:"I would stay / I would be", pos:"verb", gender:null,
     note:"Conditional of 'stare.' Irregular stem: star-.\n'Starei a casa' = I would stay home.",
     example:"A: Se potessi, starei in vacanza per sempre.\nB: Sarebbe il sogno di tutti!",
     exampleSrc:"A: If I could, I would stay on vacation forever.\nB: That would be everyone's dream!",
     funFact:"'Stare' in the conditional follows the same pattern as in the future (staro/starei). 'Starei' is useful for hypothetical states: 'Starei meglio al mare' (I would be better at the seaside). It describes a wished-for condition rather than an action."},

    // Quiz steps
    {type:"mc", q:"What makes 'direi che...' more diplomatic than 'penso che...'?",
     opts:["It is louder and more assertive","The conditional softens the statement into a gentle opinion","It is grammatically incorrect but accepted","It is only used by politicians"],
     ans:"The conditional softens the statement into a gentle opinion",
     hint:"The c... mood transforms direct statements into tactful suggestions. 'I would say' feels less confrontational than 'I think.'"},

    {type:"fb", s:"Dove {1}?",
     a:["viaggeresti"],
     opts:["viaggeresti","viaggi","viaggiavi","viaggia"],
     hint:"Where would you travel? The conditional tu form of 'viaggiare.' Keeps the -i before adding -eresti.",
     sSrc:"Where would you {1}?"},

    {type:"match", pairs:[
      {trg:"cambierei", src:"I would change"},
      {trg:"comprerei", src:"I would buy"},
      {trg:"vivrei", src:"I would live"},
      {trg:"andrei", src:"I would go"},
      {trg:"berrei", src:"I would drink"}
    ]},

    {type:"mc", q:"What does 'Non saprei' express in conversation?",
     opts:["I absolutely do not know anything","I am not sure (polite uncertainty)","I refuse to answer your question","I know but will not tell you"],
     ans:"I am not sure (polite uncertainty)",
     hint:"Softer than 'non so' (I do not know). The conditional transforms ignorance into graceful u...."},

    {type:"fb", s:"{1} qualsiasi cosa per tornare in Italia.",
     a:["Darei"],
     opts:["Darei","Do","Davo","Daro"],
     hint:"I would give anything. The irregular conditional of 'dare' uses the stem dar-. Expresses how much you miss something.",
     sSrc:"I {1} anything to go back to Italy."},

    {type:"mc", q:"Why is 'vivrei' irregular?",
     opts:["The stem changes from viver- to vivr-","It uses a completely different word","It does not actually change at all","It adds an extra syllable"],
     ans:"The stem changes from viver- to vivr-",
     hint:"The infinitive 'vivere' contracts to 'v...-' before adding conditional endings. This parallels the future tense pattern (vivro, vivrai, vivra)."},

    {type:"fb", s:"{1} di si.",
     a:["Direi"],
     opts:["Direi","Dico","Dicevo","Dire"],
     hint:"I would say yes. The conditional of 'dire' hedges your answer. More diplomatic than a direct 'si.'",
     sSrc:"I {1} say yes."},

    {type:"mc", q:"What is 'Berrei volentieri' a polite way to do?",
     opts:["Refuse a drink firmly","Accept a drink invitation gracefully","Order aggressively at a bar","Complain about the drink quality"],
     ans:"Accept a drink invitation gracefully",
     hint:"'Volentieri' (gladly) combined with the conditional creates a playful, polite acceptance. Less direct than 'vorrei bere.' Very natural Italian."}
  ,{type:"match",pairs:[{trg:"viaggerei",src:"I would travel"},{trg:"terrei",src:"I would keep / I would hold"},{trg:"saprei",src:"I would know (how to)"},{trg:"starei",src:"I would stay / I would be"}]}]
};
export default BATCH3_U21_L1;
