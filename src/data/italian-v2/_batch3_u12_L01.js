// Batch 3. Unit 12, Lesson 1: Verbi riflessivi al passato (Reflexive Verbs in the Past)
const BATCH3_U12_L1 = {
  id:"itv2_u12l_b3_1", title:"Verbi riflessivi al passato", icon:"\uD83E\uDE9E", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbi riflessivi al passato",
     desc:"Learn how reflexive verbs form the passato prossimo. All reflexive verbs use essere, and the past participle agrees with the subject.",
     goals:["Form the passato prossimo of reflexive verbs","Apply gender agreement correctly","Use common reflexive verbs in past tense"]},

    {type:"teach", trg:"mi sono svegliato/a", src:"I woke up", pos:"verb", gender:null,
     note:"Passato prossimo of 'svegliarsi.' Mi sono + participle.\nMale: svegliato. Female: svegliata.",
     example:"A: A che ora ti sei svegliato?\nB: Mi sono svegliato alle sette.",
     exampleSrc:"A: What time did you wake up?\nB: I woke up at seven.",
     funFact:"All reflexive verbs use essere in the passato prossimo. The formula is: reflexive pronoun + essere + participle (agreeing with subject). This means 'mi sono svegliato' (male) and 'mi sono svegliata' (female). The reflexive pronoun comes first, before 'essere.'"},

    {type:"teach", trg:"mi sono vestito/a", src:"I got dressed", pos:"verb", gender:null,
     note:"Passato prossimo of 'vestirsi.' From 'vestire' (to dress).\n'Mi sono vestita bene' = I dressed up well (female).",
     example:"A: Ti sei vestita elegante stasera!\nB: Grazie, mi sono vestita per la festa.",
     exampleSrc:"A: You dressed up elegantly tonight!\nB: Thanks, I got dressed for the party.",
     funFact:"'Vestirsi' shows the reflexive pattern clearly: you dress yourself. The non-reflexive 'vestire' means to dress someone else: 'vestire un bambino' (to dress a child). This reflexive/non-reflexive contrast exists in many Italian verb pairs and changes the meaning significantly."},

    {type:"teach", trg:"si e seduto/a", src:"he/she sat down", pos:"verb", gender:null,
     note:"Passato prossimo of 'sedersi.' Si e + participle.\n'Si e seduta sulla panchina' = She sat on the bench.",
     example:"A: Si e seduto vicino a me.\nB: Vi siete parlati?",
     exampleSrc:"A: He sat down next to me.\nB: Did you talk to each other?",
     funFact:"'Sedersi' has an irregular present tense (mi siedo) but a regular past participle (seduto). The 'si' in third person can refer to he, she, or the formal 'you' (Lei). Context clarifies: 'Si e seduta' is clearly 'she' because of the feminine ending."},

    {type:"teach", trg:"ci siamo divertiti/e", src:"we had fun", pos:"verb", gender:null,
     note:"Passato prossimo of 'divertirsi.' Ci siamo + participle.\nMixed/male: divertiti. All female: divertite.",
     example:"A: Vi siete divertiti alla festa?\nB: Si, ci siamo divertiti tantissimo!",
     exampleSrc:"A: Did you have fun at the party?\nB: Yes, we had so much fun!",
     funFact:"'Divertirsi' literally means 'to turn oneself away' (from boredom), from Latin 'divertere.' The 'ci' (we/us) replaces 'noi' in reflexive constructions. 'Ci siamo divertiti' is one of the most common Italian party-recap phrases."},

    {type:"teach", trg:"si sono incontrati", src:"they met (each other)", pos:"verb", gender:null,
     note:"Passato prossimo of 'incontrarsi' (reciprocal).\nSi sono + participle. 'Incontrarsi' = to meet each other.",
     example:"A: Dove si sono incontrati?\nB: Si sono incontrati al bar.",
     exampleSrc:"A: Where did they meet?\nB: They met at the cafe.",
     funFact:"'Incontrarsi' is a reciprocal reflexive: both people do the action to each other. Other reciprocals: 'abbracciarsi' (to hug each other), 'baciarsi' (to kiss each other), 'salutarsi' (to greet each other). All use essere in the past tense."},

    {type:"teach", trg:"mi sono lavato/a", src:"I washed (myself)", pos:"verb", gender:null,
     note:"Passato prossimo of 'lavarsi.' Mi sono + participle.\nBut: 'mi sono lavato le mani' (no agreement!).",
     example:"A: Ti sei lavato le mani?\nB: Si, mi sono lavato le mani prima di mangiare.",
     exampleSrc:"A: Did you wash your hands?\nB: Yes, I washed my hands before eating.",
     funFact:"A tricky rule: when a reflexive verb has a direct object (like 'le mani'), the participle does NOT agree with the subject. 'Mi sono lavato le mani' (correct, no agreement with 'io'). But 'mi sono lavata' (I washed myself, female) agrees because there is no separate object."},

    {type:"teach", trg:"mi sono preparato/a", src:"I prepared / I got ready", pos:"verb", gender:null,
     note:"Passato prossimo of 'prepararsi.' Mi sono + participle.\n'Prepararsi per' = to get ready for.",
     example:"A: Ti sei preparata per l'esame?\nB: Si, mi sono preparata tutta la settimana.",
     exampleSrc:"A: Did you prepare for the exam?\nB: Yes, I prepared all week.",
     funFact:"'Prepararsi' versus 'preparare': the reflexive means getting yourself ready, while the non-reflexive means preparing something. 'Ho preparato la cena' (I prepared dinner) versus 'Mi sono preparato per la cena' (I got myself ready for dinner)."},

    {type:"teach", trg:"si e alzato/a", src:"he/she got up / stood up", pos:"verb", gender:null,
     note:"Passato prossimo of 'alzarsi.' Si e + participle.\nFrom 'alto' (high): to raise oneself up.",
     example:"A: Si e alzato prestissimo stamattina.\nB: Si, aveva un volo alle sei.",
     exampleSrc:"A: He got up very early this morning.\nB: Yes, he had a flight at six.",
     funFact:"'Alzarsi' comes from 'alto' (high), meaning to raise yourself. The morning routine sequence: svegliarsi (wake up), alzarsi (get up), lavarsi (wash), vestirsi (get dressed). All are reflexive and all use essere in the passato prossimo."},

    {type:"teach", trg:"mi sono addormentato/a", src:"I fell asleep", pos:"verb", gender:null,
     note:"Passato prossimo of 'addormentarsi.' Mi sono + participle.\nFrom 'dormire' (to sleep) with intensifying prefix.",
     example:"A: Mi sono addormentato sul divano.\nB: Eri molto stanco!",
     exampleSrc:"A: I fell asleep on the couch.\nB: You were very tired!",
     funFact:"'Addormentarsi' versus 'dormire': one means to fall asleep (the transition), the other means to sleep (the state). 'Mi sono addormentato alle undici e ho dormito fino alle sette' (I fell asleep at eleven and slept until seven). The prefix 'ad-' intensifies the action."},

    {type:"teach", trg:"si e sposato/a", src:"he/she got married", pos:"verb", gender:null,
     note:"Passato prossimo of 'sposarsi.' Si e + participle.\n'Sposarsi con' = to marry (someone).",
     example:"A: Si e sposata il mese scorso.\nB: Davvero? Non lo sapevo!",
     exampleSrc:"A: She got married last month.\nB: Really? I did not know!",
     funFact:"'Sposarsi' (reflexive) means to get married. 'Sposare' (non-reflexive) means to marry someone. 'Si sono sposati' = they married each other (reciprocal). Italian weddings are elaborate affairs, often lasting an entire day with a multi-course banquet."},

    {type:"teach", trg:"mi sono trasferito/a", src:"I moved (relocated)", pos:"verb", gender:null,
     note:"Passato prossimo of 'trasferirsi.' Mi sono + participle.\n'Trasferirsi a Milano' = to move to Milan.",
     example:"A: Mi sono trasferito a Roma due anni fa.\nB: Ti piace vivere li?",
     exampleSrc:"A: I moved to Rome two years ago.\nB: Do you like living there?",
     funFact:"'Trasferirsi' (to relocate) is different from 'muoversi' (to move physically). Young Italians increasingly 'si trasferiscono' to northern cities or abroad for work opportunities. 'Fuga dal Sud' (flight from the South) describes the ongoing internal migration pattern."},

    {type:"teach", trg:"mi sono abituato/a", src:"I got used to", pos:"verb", gender:null,
     note:"Passato prossimo of 'abituarsi.' Mi sono + participle.\n'Abituarsi a' = to get used to.",
     example:"A: Ti sei abituato alla vita italiana?\nB: Si, mi sono abituato in fretta.",
     exampleSrc:"A: Did you get used to Italian life?\nB: Yes, I got used to it quickly.",
     funFact:"'Abituarsi' comes from 'abitudine' (habit), from Latin 'habitus' (condition, state). Getting used to a new culture is 'abituarsi alla cultura.' Italians often say 'Ci si abitua a tutto' (You get used to everything), a philosophical acceptance of life's changes."},

    // Quiz steps
    {type:"mc", q:"Which auxiliary do all reflexive verbs use in the passato prossimo?",
     opts:["Essere","Fare","Avere","Stare"],
     ans:"Essere",
     hint:"Without exception. Every reflexive verb uses e.... The formula: reflexive pronoun + e... + participle (agrees with subject)."},

    {type:"fb", s:"A che ora ti sei {1}?",
     a:["svegliato"],
     opts:["svegliato","vestito","alzato","lavato"],
     hint:"What time did you wake up? This is the past participle of 'svegliarsi.' The first step of the morning routine.",
     sSrc:"What time did you {1}?"},

    {type:"match", pairs:[
      {trg:"mi sono svegliato/a", src:"I woke up"},
      {trg:"mi sono vestito/a", src:"I got dressed"},
      {trg:"ci siamo divertiti", src:"we had fun"},
      {trg:"si sono incontrati", src:"they met each other"},
      {trg:"si e sposato/a", src:"he/she got married"}
    ]},

    {type:"mc", q:"Why does 'mi sono lavato le mani' NOT agree with the subject?",
     opts:["Because 'lavare' is not really reflexive","Because 'le mani' is the direct object, overriding subject agreement","Because masculine forms never agree","Because 'mani' is an irregular noun"],
     ans:"Because 'le mani' is the direct object, overriding subject agreement",
     hint:"When a reflexive verb has a separate d... o..., the participle does not agree with the s.... Compare: 'mi sono lavata' (no o..., agrees) vs. 'mi sono lavato le m...' (o... present, no a...)."},

    {type:"fb", s:"Vi siete {1} alla festa?",
     a:["divertiti"],
     opts:["divertiti","incontrati","sposati","trasferiti"],
     hint:"Did you all have fun at the party? 'Divertirsi' in the voi form, masculine/mixed plural.",
     sSrc:"Did you have {1} at the party?"},

    {type:"mc", q:"What is the difference between 'addormentarsi' and 'dormire'?",
     opts:["Dormire is reflexive, addormentarsi is not","They mean the same thing","Addormentarsi = to fall asleep (transition), dormire = to sleep (state)","Addormentarsi is formal, dormire is informal"],
     ans:"Addormentarsi = to fall asleep (transition), dormire = to sleep (state)",
     hint:"One describes the moment of drifting off. The other describes the ongoing s.... 'Mi sono addormentato alle undici e ho dormito otto ore.'"},

    {type:"fb", s:"Mi sono {1} a Roma due anni fa.",
     a:["trasferito"],
     opts:["trasferito","abituato","sposato","divertito"],
     hint:"You relocated to the capital. This reflexive verb specifically means to move your residence, not just to move physically.",
     sSrc:"I {1} to Rome two years ago."},

    {type:"mc", q:"What is the correct morning routine order in reflexive verbs?",
     opts:["Alzarsi, vestirsi, svegliarsi, lavarsi","Lavarsi, vestirsi, alzarsi, svegliarsi","Vestirsi, svegliarsi, lavarsi, alzarsi","Svegliarsi, alzarsi, lavarsi, vestirsi"],
     ans:"Svegliarsi, alzarsi, lavarsi, vestirsi",
     hint:"Wake up, get up, wash, get dressed. A logical sequence that Italian children learn early. All four verbs are reflexive and use essere."}
  ,{type:"match",pairs:[{trg:"si e seduto/a",src:"he/she sat down"},{trg:"mi sono lavato/a",src:"I washed (myself)"},{trg:"mi sono preparato/a",src:"I prepared / I got ready"},{trg:"si e alzato/a",src:"he/she got up / stood up"},{trg:"mi sono addormentato/a",src:"I fell asleep"},{trg:"mi sono abituato/a",src:"I got used to"}]},
{type:"fb",s:"Ieri sera {1} tardi per la stanchezza.",a:["mi sono addormentato/a"],opts:["mi sono addormentato/a","mi sono svegliato/a","mi sono vestito/a","mi sono alzato/a"],hint:"Past reflexive verb meaning to fall asleep.",sSrc:"Last night I {1} late from tiredness."}]
};
export default BATCH3_U12_L1;
