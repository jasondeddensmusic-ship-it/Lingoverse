// Batch 8. Unit 12 extra lesson. Essere Past: Movement & State Changes
const BATCH8_L1 = {id:"itv2_u12l_b8_1", title:"Movimenti e cambiamenti", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"Movimenti e cambiamenti",
 desc:"Learn verbs of movement and state change that use essere in the past tense.",
 goals:["Master movement verbs with essere","Describe journeys and transitions","Use state-change verbs correctly"]},

{type:"teach", trg:"fuggire", src:"to flee / to escape", pos:"verb", gender:null,
 note:"Regular -ire verb. Past: e fuggito/a (uses essere).\n'La fuga' = the escape/flight.",
 example:"A: Il ladro e fuggito dalla finestra.\nB: La polizia lo sta cercando.",
 exampleSrc:"A: The thief fled through the window.\nB: The police are looking for him.",
 funFact:"'Fuga di cervelli' (brain drain) is a major Italian issue. Young graduates fleeing abroad for better opportunities. The expression uses 'fuga' from 'fuggire.'"},

{type:"teach", trg:"crollare", src:"to collapse / to crash", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e crollato (uses essere).\n'Il crollo' = the collapse/crash.",
 example:"A: Il muro vecchio e crollato durante la notte.\nB: Per fortuna nessuno si e fatto male.",
 exampleSrc:"A: The old wall collapsed during the night.\nB: Fortunately nobody got hurt.",
 funFact:"'Crollare' is used for buildings, stock markets, and people. 'Sono crollato sul divano' (I collapsed on the sofa) is perfectly normal after a long day."},

{type:"teach", trg:"sorgere", src:"to rise / to arise", pos:"verb", gender:null,
 note:"Irregular. Past: e sorto/a (uses essere).\n'Il sole sorge' = the sun rises. 'Il sorgere' = the rising.",
 example:"A: Il sole e sorto alle sei stamattina.\nB: Che bella alba!",
 exampleSrc:"A: The sun rose at six this morning.\nB: What a beautiful sunrise!",
 funFact:"'Risorgimento' (resurgence) uses the same root. Italy's unification movement in the 1800s was literally a 'rising again.' The word captures national rebirth."},

{type:"teach", trg:"emigrare", src:"to emigrate", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e emigrato/a (uses essere).\n'L'emigrazione' = emigration.",
 example:"A: I miei bisnonni sono emigrati in America.\nB: Come molti italiani di quell'epoca.",
 exampleSrc:"A: My great-grandparents emigrated to America.\nB: Like many Italians of that era.",
 funFact:"Between 1880 and 1920, over 4 million Italians emigrated to the Americas. Today, more people of Italian descent live outside Italy than inside it."},

{type:"teach", trg:"evaporare", src:"to evaporate", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e evaporato (uses essere).\n'L'evaporazione' = evaporation.",
 example:"A: L'acqua e evaporata dal vaso.\nB: Normale, con questo caldo.",
 exampleSrc:"A: The water evaporated from the vase.\nB: Normal, with this heat.",
 funFact:"Figuratively, 'evaporare' describes things that vanish: 'I miei soldi sono evaporati' (my money evaporated). A vivid way to say it disappeared quickly."},

{type:"teach", trg:"maturare", src:"to ripen / to mature", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e maturato/a (uses essere).\n'La maturita' = maturity, also the high school exit exam.",
 example:"A: I pomodori sono maturati al sole.\nB: Sono pronti per il sugo!",
 exampleSrc:"A: The tomatoes ripened in the sun.\nB: They are ready for the sauce!",
 funFact:"'La Maturita' is Italy's grueling high school final exam, taken at age 19. The name implies students have 'matured' enough to leave school. It includes oral exams."},

{type:"teach", trg:"invecchiare", src:"to age / to grow old", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e invecchiato/a (uses essere).\n'L'invecchiamento' = aging.",
 example:"A: Il vino e invecchiato per cinque anni.\nB: Deve essere ottimo!",
 exampleSrc:"A: The wine aged for five years.\nB: It must be excellent!",
 funFact:"In Italian, wine, cheese, and people all 'invecchiano.' But only food gets better with age. 'Invecchiare bene' (to age well) is a compliment for people and Parmigiano alike."},

{type:"teach", trg:"migliorare", src:"to improve / to get better", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e migliorato/a (uses essere).\n'Il miglioramento' = improvement.",
 example:"A: La situazione e migliorata molto.\nB: Finalmente qualcosa di positivo!",
 exampleSrc:"A: The situation has improved a lot.\nB: Finally something positive!",
 funFact:"'Migliorare' comes from 'meglio' (better), which comes from Latin 'melior.' The same root gives English 'ameliorate.'"},

{type:"teach", trg:"peggiorare", src:"to worsen / to get worse", pos:"verb", gender:null,
 note:"Regular -are verb. Past: e peggiorato/a (uses essere).\nOpposite of 'migliorare.'",
 example:"A: Il tempo e peggiorato nel pomeriggio.\nB: Prendiamo l'ombrello.",
 exampleSrc:"A: The weather worsened in the afternoon.\nB: Let us take the umbrella.",
 funFact:"'Peggio' (worse) comes from Latin 'pejor.' Together, migliorare/peggiorare form a perfect pair that Italians use constantly in daily conversation."},

{type:"mc",
 q:"What is 'fuga di cervelli'?",
 opts:["Brain drain (graduates leaving for abroad)","A brain disease","A mental exercise","An intelligence test"],
 ans:"Brain drain (graduates leaving for abroad)",
 hint:"'Fuga' comes from fuggire (to flee). 'Cervelli' means brains. Young people fleeing for better opportunities."},

{type:"match", pairs:[
  {trg:"fuggire", src:"to flee"},
  {trg:"crollare", src:"to collapse"},
  {trg:"migliorare", src:"to improve"},
  {trg:"peggiorare", src:"to worsen"}
]},

{type:"fb",
 s:"Il sole e {1} alle sei stamattina.",
 a:["sorto"],
 opts:["sorto","fuggito","crollato","emigrato"],
 hint:"This verb means 'to rise.' The sun does this every morning. The past participle is irregular.",
 sSrc:"The sun {1} at six this morning."},

{type:"mc",
 q:"What is 'la Maturita' in Italy?",
 opts:["A wine festival","The high school exit exam","A university degree","A cooking competition"],
 ans:"The high school exit exam",
 hint:"From 'maturare' (to mature). Students take this at age 19 to graduate from h... s...."},

{type:"fb",
 s:"I miei bisnonni sono {1} in America nel 1905.",
 a:["emigrati"],
 opts:["emigrati","evaporati","maturati","invecchiati"],
 hint:"This verb means to leave your country to live in another. Millions of Italians did this.",
 sSrc:"My great-grandparents {1} to America in 1905."},

{type:"mc",
 q:"Both 'migliorare' and 'peggiorare' use which auxiliary in the past?",
 opts:["Both equally","Neither","Essere","Avere"],
 ans:"Essere",
 hint:"These are state-change verbs. The subject changes state (gets better or worse), so they use the auxiliary for being."}
,{type:"match",pairs:[{trg:"sorgere",src:"to rise / to arise"},{trg:"emigrare",src:"to emigrate"},{trg:"evaporare",src:"to evaporate"},{trg:"maturare",src:"to ripen / to mature"},{trg:"invecchiare",src:"to age / to grow old"}]}]};
export default BATCH8_L1;
