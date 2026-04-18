// Batch 8 — Unit 19 extra lesson. Emotions: Complex Emotional States
const BATCH8_L1 = {id:"itv2_u19l_b8_1", title:"Emozioni complesse", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Emozioni complesse",
 desc:"Learn vocabulary for nuanced and complex emotional states that go beyond basic feelings.",
 goals:["Express complex emotions","Describe emotional nuances","Use abstract emotional vocabulary"]},

{type:"teach", trg:"la nostalgia", src:"the nostalgia / longing", pos:"noun", gender:"f",
 note:"Feminine noun. 'Avere nostalgia di' = to miss/long for.\n'Nostalgico' = nostalgic.",
 example:"A: Ho nostalgia della mia citta.\nB: E normale, sei lontano da tanto tempo.",
 exampleSrc:"A: I miss my city.\nB: It is normal, you have been away for a long time.",
 funFact:"In Italian, 'nostalgia' covers both missing the past AND missing a place or person. 'Ho nostalgia di te' = I miss you. One word does the work of many English phrases."},

{type:"teach", trg:"la gratitudine", src:"the gratitude", pos:"noun", gender:"f",
 note:"Feminine noun. 'Provare gratitudine' = to feel gratitude.\n'Grato' = grateful.",
 example:"A: Provo profonda gratitudine per il tuo aiuto.\nB: Non c'e di che, siamo amici.",
 exampleSrc:"A: I feel deep gratitude for your help.\nB: Do not mention it, we are friends.",
 funFact:"Italian has many ways to express gratitude: 'grazie' (thanks), 'ti sono grato' (I am grateful to you), 'te ne sono riconoscente' (I am indebted to you). Each has a different weight."},

{type:"teach", trg:"la solitudine", src:"the solitude / loneliness", pos:"noun", gender:"f",
 note:"Feminine noun. Can be positive (solitude) or negative (loneliness).\n'Solo' = alone.",
 example:"A: A volte la solitudine fa bene.\nB: Si, ma troppa solitudine fa male.",
 exampleSrc:"A: Sometimes solitude is good.\nB: Yes, but too much loneliness is bad.",
 funFact:"Italian distinguishes the feeling: 'solitudine cercata' (sought solitude) is positive, 'solitudine subita' (suffered loneliness) is negative. The same word, different experiences."},

{type:"teach", trg:"la gelosia", src:"the jealousy", pos:"noun", gender:"f",
 note:"Feminine noun. 'Essere geloso/a' = to be jealous.\n'Geloso di' = jealous of.",
 example:"A: La gelosia puo distruggere un rapporto.\nB: Bisogna avere fiducia.",
 exampleSrc:"A: Jealousy can destroy a relationship.\nB: You need to have trust.",
 funFact:"'Gelosia' also means 'window shutter' (the slatted kind). The connection: jealous people 'peek through shutters' to spy on their partners. A very Italian image."},

{type:"teach", trg:"la vergogna", src:"the shame / embarrassment", pos:"noun", gender:"f",
 note:"Feminine noun. 'Vergognarsi' = to be ashamed.\n'Che vergogna!' = How shameful!",
 example:"A: Provo vergogna per quello che ho detto.\nB: Chiedi scusa, non e mai troppo tardi.",
 exampleSrc:"A: I feel shame for what I said.\nB: Apologize, it is never too late.",
 funFact:"'Che vergogna!' is used constantly in Italian for public scandals, bad behavior, and social outrage. It is the go-to exclamation for moral disapproval."},

{type:"teach", trg:"la malinconia", src:"the melancholy", pos:"noun", gender:"f",
 note:"Feminine noun. 'Malinconico' = melancholic.\nA gentle, wistful sadness, not depression.",
 example:"A: L'autunno mi mette malinconia.\nB: Anche a me, i giorni diventano corti.",
 exampleSrc:"A: Autumn makes me melancholic.\nB: Me too, the days get shorter.",
 funFact:"'Malinconia' comes from Greek 'melas' (black) + 'khole' (bile). The ancient Greeks believed black bile caused sadness. Italian poetry celebrates melancholy as a noble emotion."},

{type:"teach", trg:"l'entusiasmo", src:"the enthusiasm", pos:"noun", gender:"m",
 note:"Masculine noun. 'Entusiasta' = enthusiastic.\n'Con entusiasmo' = with enthusiasm.",
 example:"A: Affronta il progetto con entusiasmo!\nB: Hai ragione, l'atteggiamento conta.",
 exampleSrc:"A: Face the project with enthusiasm!\nB: You are right, attitude matters.",
 funFact:"From Greek 'entheos' (having god within). Being enthusiastic originally meant being possessed by divine inspiration. The Italians kept the spiritual intensity."},

{type:"teach", trg:"l'imbarazzo", src:"the embarrassment", pos:"noun", gender:"m",
 note:"Masculine noun. 'Essere in imbarazzo' = to be embarrassed.\n'Imbarazzante' = embarrassing.",
 example:"A: Che imbarazzo! Ho dimenticato il suo nome.\nB: Succede a tutti, non preoccuparti.",
 exampleSrc:"A: How embarrassing! I forgot their name.\nB: It happens to everyone, do not worry.",
 funFact:"'Imbarazzo della scelta' (embarrassment of choice) means having too many good options. It is used positively when a restaurant menu or store has so much to offer."},

{type:"teach", trg:"il rimpianto", src:"the regret", pos:"noun", gender:"m",
 note:"Masculine noun. 'Rimpiangere' = to regret.\n'Senza rimpianti' = without regrets.",
 example:"A: Non ho rimpianti per le scelte fatte.\nB: E il modo migliore di vivere.",
 exampleSrc:"A: I have no regrets about the choices I made.\nB: It is the best way to live.",
 funFact:"'Senza rimpianti' (without regrets) is a popular Italian life philosophy. The famous song 'Non, je ne regrette rien' by Piaf is called 'Non rimpiango niente' in Italian."},

{type:"mc",
 q:"What makes Italian 'nostalgia' different from the English word?",
 opts:["It covers both missing the past AND missing a person or place","It only means missing the past","It is always negative","It only applies to places"],
 ans:"It covers both missing the past AND missing a person or place",
 hint:"In Italian, you can say 'ho nostalgia di te' (I miss you). The word works for time, p..., and people."},

{type:"match", pairs:[
  {trg:"la nostalgia", src:"the longing"},
  {trg:"la gelosia", src:"the jealousy"},
  {trg:"la vergogna", src:"the shame"},
  {trg:"il rimpianto", src:"the regret"}
]},

{type:"fb",
 s:"A volte la {1} fa bene, a volte fa male.",
 a:["solitudine"],
 opts:["solitudine","gelosia","vergogna","malinconia"],
 hint:"This word means both positive solitude and negative loneliness. Context determines which.",
 sSrc:"Sometimes {1} is good, sometimes it is bad."},

{type:"mc",
 q:"What does 'imbarazzo della scelta' mean?",
 opts:["Having too many good options to choose from","Being embarrassed at a restaurant","Making the wrong choice","Having no options"],
 ans:"Having too many good options to choose from",
 hint:"It is a positive expression. The 'embarrassment' comes from abundance, not from mistakes."},

{type:"fb",
 s:"L'autunno mi mette {1}, i giorni diventano corti.",
 a:["malinconia"],
 opts:["malinconia","entusiasmo","imbarazzo","gratitudine"],
 hint:"This gentle, wistful sadness is different from depression. It is a poetic, noble emotion often linked to autumn.",
 sSrc:"Autumn makes me {1}, the days get shorter."},

{type:"mc",
 q:"What unusual second meaning does 'gelosia' have?",
 opts:["A type of window shutter","A type of gemstone","A musical instrument","A cooking technique"],
 ans:"A type of window shutter",
 hint:"The slatted shutters let you peek outside without being seen, like a jealous person spying."}
,{type:"match",pairs:[{trg:"la gratitudine",src:"the gratitude"}]},{type:"mc",q:"How do you say \"enthusiasm\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'entusiasmo"],ans:"l'entusiasmo",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"embarrassment\" in Italian?",opts:["la finestra","il tavolo","l'imbarazzo","la bicicletta"],ans:"l'imbarazzo",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
