// Batch 7 — Unit 29 extra lesson. La psicologia: Motivation & Personal Growth
const BATCH7_L1 = {id:"itv2_u29l_b7_1", title:"La motivazione e la crescita personale", icon:"\u{1F331}", xp:15, board:true, steps:[
{type:"intro", title:"La motivazione e la crescita personale",
 desc:"Learn vocabulary for motivation, personal development, and self-improvement.",
 goals:["Discuss motivation and goals","Talk about personal growth","Express aspirations and self-reflection"]},

{type:"teach", trg:"la motivazione", src:"motivation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Motivare' = to motivate.\n'Motivato' = motivated.",
 example:"A: La motivazione e la chiave del successo.\nB: Senza di essa, niente funziona.",
 exampleSrc:"A: Motivation is the key to success.\nB: Without it, nothing works.",
 funFact:"Italian culture values 'passione' (passion) over cold 'motivazione.' An Italian is more likely to say 'fallo con passione' (do it with passion) than 'resta motivato' (stay motivated)."},

{type:"teach", trg:"l'obiettivo", src:"the goal / objective", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli obiettivi.\n'Raggiungere un obiettivo' = to achieve a goal.",
 example:"A: Qual e il tuo obiettivo principale?\nB: Imparare l'italiano a livello B2.",
 exampleSrc:"A: What is your main goal?\nB: To learn Italian at B2 level.",
 funFact:"'Obiettivo' also means camera lens. A photographer 'cambia obiettivo' (changes lens). The dual meaning works: both involve focusing on a target."},

{type:"teach", trg:"l'autostima", src:"self-esteem", pos:"noun", gender:"f",
 note:"Feminine noun. 'Auto' = self + 'stima' = esteem.\n'Avere autostima' = to have self-esteem.",
 example:"A: L'autostima si costruisce con piccoli successi.\nB: Ogni traguardo rafforza la fiducia in se stessi.",
 exampleSrc:"A: Self-esteem is built with small successes.\nB: Each achievement strengthens self-confidence.",
 funFact:"Italian psychology uses many compound words with 'auto-': 'autocritica' (self-criticism), 'autocontrollo' (self-control), 'autorealizzazione' (self-actualization)."},

{type:"teach", trg:"la resilienza", src:"resilience", pos:"noun", gender:"f",
 note:"Feminine noun. 'Resiliente' = resilient.\nThe ability to recover from difficulties.",
 example:"A: La resilienza e una qualita importante.\nB: Ci aiuta a superare i momenti difficili.",
 exampleSrc:"A: Resilience is an important quality.\nB: It helps us overcome difficult times.",
 funFact:"'Resilienza' became hugely popular in Italian after 2020. It was chosen as Italy's word of the year. Originally an engineering term (material that bounces back), it entered everyday vocabulary."},

{type:"teach", trg:"il traguardo", src:"the milestone / finish line", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i traguardi.\n'Tagliare il traguardo' = to cross the finish line.",
 example:"A: Ogni traguardo raggiunto merita di essere celebrato.\nB: Anche i piccoli traguardi contano.",
 exampleSrc:"A: Every milestone reached deserves to be celebrated.\nB: Even small milestones count.",
 funFact:"'Traguardo' literally means the finishing line in a race. Using it for life goals is a powerful sports metaphor. 'Tagliare il traguardo' evokes the image of a runner breaking the tape."},

{type:"teach", trg:"la consapevolezza", src:"awareness / mindfulness", pos:"noun", gender:"f",
 note:"Feminine noun. 'Consapevole' = aware/conscious.\n'Prendere consapevolezza' = to become aware.",
 example:"A: La consapevolezza di se e il primo passo.\nB: Conoscere i propri limiti e punti di forza.",
 exampleSrc:"A: Self-awareness is the first step.\nB: Knowing your limits and strengths.",
 funFact:"'Consapevolezza' has become the Italian translation for 'mindfulness.' 'Meditazione consapevole' (mindful meditation) has grown enormously in popularity in Italian wellness culture."},

{type:"teach", trg:"superare", src:"to overcome / to surpass", pos:"verb", gender:null,
 note:"Regular -are verb. supero, superi, supera.\n'Superare un ostacolo' = to overcome an obstacle.",
 example:"A: Puoi superare qualsiasi difficolta.\nB: Basta credere in se stessi.",
 exampleSrc:"A: You can overcome any difficulty.\nB: You just need to believe in yourself.",
 funFact:"'Superare' works for everything: exams (superare un esame), obstacles (superare un ostacolo), speed limits (superare il limite), and even other cars (superare un'auto = to overtake)."},

{type:"teach", trg:"la determinazione", src:"determination", pos:"noun", gender:"f",
 note:"Feminine noun. 'Determinato' = determined.\n'Con determinazione' = with determination.",
 example:"A: Ammiro la tua determinazione.\nB: Non mi arrendo mai.",
 exampleSrc:"A: I admire your determination.\nB: I never give up.",
 funFact:"Italians value 'grinta' (grit/determination) deeply. In sports, 'avere grinta' is the highest compliment. It means fighting with heart, not just talent."},

{type:"teach", trg:"la zona di comfort", src:"comfort zone", pos:"noun", gender:"f",
 note:"Feminine noun. 'Uscire dalla zona di comfort' = to leave the comfort zone.",
 example:"A: Bisogna uscire dalla zona di comfort.\nB: E li che avviene la crescita.",
 exampleSrc:"A: You need to leave the comfort zone.\nB: That is where growth happens.",
 funFact:"'Zona di comfort' entered Italian from English self-help culture. Italian psychology uses it alongside the traditional concept of 'mettersi alla prova' (testing yourself)."},

{type:"teach", trg:"l'abitudine", src:"the habit", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le abitudini.\n'Abituarsi' = to get used to. 'Per abitudine' = out of habit.",
 example:"A: Le buone abitudini si costruiscono ogni giorno.\nB: Inizia con piccoli passi.",
 exampleSrc:"A: Good habits are built every day.\nB: Start with small steps.",
 funFact:"'L'abitudine e una seconda natura' (habit is a second nature) is a classic Italian saying. Italians also say 'l'abito non fa il monaco' (the habit/robe does not make the monk)."},

{type:"teach", trg:"la sfida", src:"the challenge", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le sfide.\n'Sfidare' = to challenge. 'Lanciarsi una sfida' = to challenge oneself.",
 example:"A: Ogni sfida e un'opportunita di crescita.\nB: Sono d'accordo, le sfide ci rendono piu forti.",
 exampleSrc:"A: Every challenge is an opportunity for growth.\nB: I agree, challenges make us stronger.",
 funFact:"'Sfida' comes from 'sfiducia' (distrust), as a challenge originally meant doubting someone's ability. The meaning evolved from 'I doubt you can' to 'I dare you to.'"},

{type:"teach", trg:"il fallimento", src:"failure", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fallire' = to fail.\n'Imparare dal fallimento' = to learn from failure.",
 example:"A: Il fallimento non e la fine.\nB: E l'inizio di una nuova opportunita.",
 exampleSrc:"A: Failure is not the end.\nB: It is the beginning of a new opportunity.",
 funFact:"Italian culture historically stigmatized 'fallimento' (also means bankruptcy). The startup movement is changing this, promoting 'fail fast' culture, though the cultural shift is still ongoing."},

{type:"teach", trg:"la perseveranza", src:"perseverance", pos:"noun", gender:"f",
 note:"Feminine noun. 'Perseverare' = to persevere.\n'Con perseveranza' = with perseverance.",
 example:"A: La perseveranza paga sempre.\nB: Chi la dura la vince.",
 exampleSrc:"A: Perseverance always pays off.\nB: Those who endure, win.",
 funFact:"'Chi la dura la vince' (who endures, wins) is the Italian proverb for perseverance. It captures the belief that stubborn persistence overcomes any obstacle."},

{type:"mc", q:"Quale parola italiana e stata eletta 'parola dell'anno'?",
 opts:["resilienza","motivazione","determinazione","consapevolezza"],
 ans:"resilienza",
 hint:"Originally an engineering term. The ability to bounce back from difficulty."},

{type:"fb", s:"Ogni {1} raggiunto merita di essere celebrato.", a:["traguardo"],
 opts:["traguardo","obiettivo","fallimento","sfida"],
 hint:"A milestone or finish line. The point you reach after effort.",
 sSrc:"Every {1} reached deserves to be celebrated."},

{type:"match", pairs:[
 {trg:"la motivazione", src:"motivation"},
 {trg:"l'obiettivo", src:"goal"},
 {trg:"la sfida", src:"challenge"},
 {trg:"la perseveranza", src:"perseverance"}
]},

{type:"mc", q:"Che cosa significa 'chi la dura la vince'?",
 opts:["Those who endure, win","Those who run, win","Those who start, win","Those who think, win"],
 ans:"Those who endure, win",
 hint:"An Italian proverb about the value of persistence and not giving up."},

{type:"fb", s:"Bisogna uscire dalla zona di {1}.", a:["comfort"],
 opts:["comfort","sicurezza","casa","lavoro"],
 hint:"The safe, familiar space where you feel no challenge. Growth happens outside it.",
 sSrc:"You need to leave the {1} zone."},

{type:"mc", q:"Che cosa significa 'grinta' in italiano?",
 opts:["Grit / fierce determination","Anger","Laziness","Intelligence"],
 ans:"Grit / fierce determination",
 hint:"The highest compliment in Italian sports. Fighting with heart, not just talent."},

{type:"fb", s:"Puoi {1} qualsiasi difficolta.", a:["superare"],
 opts:["superare","creare","perdere","dimenticare"],
 hint:"To overcome, to get past. Works for obstacles, exams, and even other cars.",
 sSrc:"You can {1} any difficulty."},

{type:"match", pairs:[
 {trg:"l'autostima", src:"self-esteem"},
 {trg:"la resilienza", src:"resilience"},
 {trg:"la consapevolezza", src:"awareness"},
 {trg:"il fallimento", src:"failure"}
]}
]};
export default BATCH7_L1;
