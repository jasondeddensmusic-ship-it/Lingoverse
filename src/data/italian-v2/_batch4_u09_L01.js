// Batch 4 — Unit 09, Lesson 1: Mental Health & Wellness Vocabulary
const BATCH4_U09_L1 = {
  id:"itv2_u09l_b4_1", title:"Benessere e stress", icon:"\uD83E\uDDD8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Benessere e stress",
     desc:"Learn Italian vocabulary for mental wellness, stress, and common health-related feelings.",
     goals:["Describe stress and wellness states","Talk about sleep and relaxation","Express physical and mental health concerns"]},

    {type:"teach", trg:"lo stress", src:"stress", pos:"noun", gender:"m",
     note:"Masculine. Invariable. Borrowed from English.\n'Essere stressato' = to be stressed.",
     example:"A: Hai molto stress al lavoro?\nB: Si, troppo stress!",
     exampleSrc:"A: Do you have a lot of stress at work?\nB: Yes, too much stress!",
     funFact:"'Stress' entered Italian directly from English and is universally used. The adjective 'stressato/a' (stressed) is equally common. Italians combat stress with their Mediterranean lifestyle: long meals, afternoon rest, and social connection."},

    {type:"teach", trg:"rilassarsi", src:"to relax", pos:"verb", gender:null,
     note:"Reflexive verb. 'Mi rilasso' = I relax. 'Rilassati!' = Relax!\nFrom Latin 'relaxare.'",
     example:"A: Come ti rilassi dopo il lavoro?\nB: Faccio una passeggiata.",
     exampleSrc:"A: How do you relax after work?\nB: I take a walk.",
     funFact:"The Italian 'passeggiata' (evening stroll) is a national relaxation ritual. Entire towns walk their main streets at sunset, greeting neighbors, window-shopping, and eating gelato. It is free therapy on a communal scale."},

    {type:"teach", trg:"riposare", src:"to rest", pos:"verb", gender:null,
     note:"Regular -are verb. 'Riposarsi' = reflexive form.\n'Ho bisogno di riposare' = I need to rest.",
     example:"A: Devi riposare, sei stanco.\nB: Hai ragione, vado a dormire.",
     exampleSrc:"A: You need to rest, you are tired.\nB: You are right, I am going to sleep.",
     funFact:"'Riposo' (rest) is a cultural value in Italy. The afternoon 'riposo' (rest period, roughly 1-4 PM) is when many shops close. Signs reading 'chiuso per riposo' (closed for rest) are common throughout Italy."},

    {type:"teach", trg:"dormire", src:"to sleep", pos:"verb", gender:null,
     note:"Regular -ire verb. 'Dormo otto ore' = I sleep eight hours.\n'Dormire come un ghiro' = to sleep like a dormouse (soundly).",
     example:"A: Quante ore dormi?\nB: Sei ore, non sono abbastanza.",
     exampleSrc:"A: How many hours do you sleep?\nB: Six hours, it is not enough.",
     funFact:"'Dormire come un ghiro' (to sleep like a dormouse) is the Italian idiom for sleeping soundly. The word 'dormitory' comes from this Latin root. Italian culture values good sleep: 'chi dorme non piglia pesci' (who sleeps catches no fish) warns against oversleeping."},

    {type:"teach", trg:"svegliarsi", src:"to wake up", pos:"verb", gender:null,
     note:"Reflexive verb. 'Mi sveglio alle sette' = I wake up at seven.\n'Sveglia!' = Wake up!",
     example:"A: A che ora ti svegli?\nB: Mi sveglio alle sei e mezza.",
     exampleSrc:"A: What time do you wake up?\nB: I wake up at six thirty.",
     funFact:"The reflexive is essential: 'svegliare' (to wake someone) vs 'svegliarsi' (to wake oneself). 'Mi sono svegliato di cattivo umore' (I woke up in a bad mood) is a common Italian morning complaint. Morning mood matters in Italian culture."},

    {type:"teach", trg:"il mal di testa", src:"the headache", pos:"noun", gender:"m",
     note:"Masculine. 'Ho mal di testa' = I have a headache.\n'Mal di' + body part = ache/pain in that area.",
     example:"A: Ho un terribile mal di testa.\nB: Prendi un'aspirina.",
     exampleSrc:"A: I have a terrible headache.\nB: Take an aspirin.",
     funFact:"The 'mal di...' pattern is very productive: 'mal di stomaco' (stomachache), 'mal di schiena' (backache), 'mal di gola' (sore throat), 'mal di denti' (toothache). Memorize the pattern and you can describe any pain."},

    {type:"teach", trg:"la febbre", src:"the fever", pos:"noun", gender:"f",
     note:"Feminine. 'Avere la febbre' = to have a fever.\nFrom Latin 'febris.'",
     example:"A: Ho la febbre, 38 gradi.\nB: Devi restare a letto.",
     exampleSrc:"A: I have a fever, 38 degrees.\nB: You must stay in bed.",
     funFact:"Italy uses Celsius for body temperature. Normal is 36-37. Above 37.5 is 'febbre' (fever). Italians take temperature very seriously: 'avere qualche linea di febbre' (having a few lines of fever) means a slight temperature."},

    {type:"teach", trg:"il raffreddore", src:"the cold (illness)", pos:"noun", gender:"m",
     note:"Masculine. 'Avere il raffreddore' = to have a cold.\nFrom 'raffreddare' (to cool down).",
     example:"A: Ho il raffreddore.\nB: Bevi tanto e riposati.",
     exampleSrc:"A: I have a cold.\nB: Drink a lot and rest.",
     funFact:"Italians believe 'raffreddore' (cold) comes from being cold or wet. 'Non uscire con i capelli bagnati!' (Don't go out with wet hair!) is every Italian mother's warning. The belief that cold air causes illness is deeply ingrained."},

    {type:"teach", trg:"la tosse", src:"the cough", pos:"noun", gender:"f",
     note:"Feminine. 'Avere la tosse' = to have a cough.\nOnomatopoeic origin, imitating the sound.",
     example:"A: Ha la tosse da una settimana.\nB: Deve andare dal medico.",
     exampleSrc:"A: He has had a cough for a week.\nB: He should go to the doctor.",
     funFact:"Italian home remedies for 'la tosse' include 'latte e miele' (warm milk and honey), herbal teas, and eucalyptus. Italian pharmacists are the first line of defense for coughs and colds, often recommending remedies before seeing a doctor."},

    {type:"teach", trg:"la ricetta medica", src:"the prescription", pos:"noun", gender:"f",
     note:"Feminine. Same word as 'recipe' but in medical context.\n'La ricetta del medico' = the doctor's prescription.",
     example:"A: Ha la ricetta medica?\nB: Si, eccola.",
     exampleSrc:"A: Do you have the prescription?\nB: Yes, here it is.",
     funFact:"In Italy, 'ricetta' means both recipe (food) and prescription (medical). Context makes the meaning clear. The Italian healthcare system (SSN) provides many medications free or at reduced cost with a 'ricetta del medico.'"},

    {type:"teach", trg:"guarire", src:"to heal / to recover", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc-). 'Guarisci presto!' = Get well soon!\nFrom Germanic 'warjan' (to protect).",
     example:"A: Guarisci presto!\nB: Grazie, spero di star meglio domani.",
     exampleSrc:"A: Get well soon!\nB: Thanks, I hope to feel better tomorrow.",
     funFact:"'Guarisci presto!' is the standard Italian get-well wish. The verb 'guarire' uses the -isc- pattern (guarisco, guarisci, guarisce). Italian culture strongly values 'guarigione' (recovery): taking time to heal properly, not rushing back."},

    {type:"teach", trg:"stare bene", src:"to feel well / to be fine", pos:"verb", gender:null,
     note:"'Come stai? Sto bene' = How are you? I am fine.\nOpposite: 'stare male' (to feel unwell).",
     example:"A: Stai bene?\nB: Si, ora sto bene, grazie.",
     exampleSrc:"A: Are you feeling well?\nB: Yes, now I am fine, thanks.",
     funFact:"'Stare bene/male' uses 'stare' (not 'essere') because it describes a temporary condition. 'Mi sta bene' can also mean 'it suits me' (clothing) or 'I deserve it' (outcome). Context determines which 'stare bene' is meant."},

    {type:"teach", trg:"stare male", src:"to feel unwell / to feel bad", pos:"verb", gender:null,
     note:"'Sto male' = I feel unwell. Can be physical or emotional.\n'Mi fa stare male' = it makes me feel bad.",
     example:"A: Stai male?\nB: Si, ho mal di stomaco.",
     exampleSrc:"A: Are you feeling unwell?\nB: Yes, I have a stomachache.",
     funFact:"'Stare male' covers both physical illness and emotional distress. 'Mi fa stare male vederlo soffrire' (it makes me feel bad to see him suffer) is emotional. Italian does not separate physical and emotional 'feeling bad' as clearly as English."},

    {type:"teach", trg:"l'energia", src:"energy", pos:"noun", gender:"f",
     note:"Feminine. 'Avere energia' = to have energy.\n'Sono senza energia' = I have no energy.",
     example:"A: Oggi non ho energia.\nB: Forse hai bisogno di dormire di piu.",
     exampleSrc:"A: Today I have no energy.\nB: Maybe you need to sleep more.",
     funFact:"Italians believe strongly in the connection between food and energy. 'Mangia che ti fa bene!' (Eat, it is good for you!) is the Italian grandmother's universal prescription. Italian culture sees good food as the foundation of good health."},

    {type:"teach", trg:"sentirsi", src:"to feel (oneself)", pos:"verb", gender:null,
     note:"Reflexive verb. 'Come ti senti?' = How do you feel?\n'Mi sento bene/male' = I feel good/bad.",
     example:"A: Come ti senti oggi?\nB: Mi sento molto meglio, grazie.",
     exampleSrc:"A: How do you feel today?\nB: I feel much better, thanks.",
     funFact:"'Sentirsi' (reflexive) means to feel a state. 'Sentire' (non-reflexive) means to hear or to sense. 'Sento freddo' (I feel cold, sensing it) vs 'mi sento stanco' (I feel tired, as a state). This distinction matters in Italian."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'I have a headache' in italiano?",
     opts:["Ho mal di testa","Ho la febbre","Ho il raffreddore","Ho la tosse"],
     ans:"Ho mal di testa",
     hint:"Use the 'm... di...' pattern followed by the word for head."},

    {type:"fb", s:"Devo {1}, sono troppo stanco.",
     a:["riposare"], opts:["riposare","lavorare","dormire","correre"],
     hint:"You need to rest because you are exhausted.",
     sSrc:"I need to {1}, I am too tired."},

    {type:"match", pairs:[
      {trg:"il mal di testa", src:"headache"},
      {trg:"la febbre", src:"fever"},
      {trg:"il raffreddore", src:"cold"},
      {trg:"la tosse", src:"cough"},
      {trg:"l'energia", src:"energy"}
    ]},

    {type:"mc", q:"Cosa significa 'guarisci presto'?",
     opts:["Get well soon","Good morning","Be careful","Sleep well"],
     ans:"Get well soon",
     hint:"This wish is said to someone who is sick or recovering."},

    {type:"fb", s:"Come ti {1} oggi? Meglio di ieri?",
     a:["senti"], opts:["senti","dormi","svegli","rilassi"],
     hint:"You are asking about the person's current state of health.",
     sSrc:"How do you {1} today? Better than yesterday?"},

    {type:"mc", q:"Qual e il primo posto dove vanno gli italiani quando stanno male?",
     opts:["La farmacia (the pharmacist)","L'ospedale","Il pronto soccorso","Il dentista"],
     ans:"La farmacia (the pharmacist)",
     hint:"This professional gives advice and sells remedies before seeing a doctor."},

    {type:"fb", s:"Ho la {1}, 38 gradi. Devo stare a letto.",
     a:["febbre"], opts:["febbre","tosse","energia","ricetta"],
     hint:"Your temperature is 38 degrees Celsius, above normal.",
     sSrc:"I have a {1}, 38 degrees. I must stay in bed."},

    {type:"mc", q:"Qual e la differenza tra 'sentire' e 'sentirsi'?",
     opts:["Sentire means to hear/sense; sentirsi means to feel a personal state","They mean the same thing","Sentire is formal; sentirsi is informal","Sentirsi is past tense of sentire"],
     ans:"Sentire means to hear/sense; sentirsi means to feel a personal state",
     hint:"The reflexive form changes the meaning from external sensing to internal feeling."}
  ,{type:"match",pairs:[{trg:"dormire",src:"to sleep"},{trg:"la ricetta medica",src:"the prescription"},{trg:"guarire",src:"to heal / to recover"},{trg:"stare bene",src:"to feel well / to be fine"}]}]
};
export default BATCH4_U09_L1;
