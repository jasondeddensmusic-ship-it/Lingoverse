// Unit 19 Expansion — Lesson 5: Esprimere i sentimenti
const LESSON_5 = {
  id:"itv2_u19l5", title:"Esprimere i sentimenti", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Esprimere i sentimenti",
     desc:"Learn the verbs and expressions Italians use to talk about feelings in depth. From emotional outbursts to quiet contentment, master the language of the heart.",
     goals:["Use emotional verbs accurately","Express strong and subtle feelings","React to others' emotional states"]},

    {type:"teach", trg:"provare", src:"to feel / to experience / to try", pos:"verb", gender:null,
     note:"Regular -are verb. 'Provare un'emozione' = to feel an emotion.\nAlso: 'provare a fare' = to try to do.",
     example:"A: Cosa provi per lui?\nB: Provo un affetto profondo.",
     exampleSrc:"A: What do you feel for him?\nB: I feel deep affection.",
     funFact:"'Provare' covers both 'to feel' and 'to try.' 'Provo gioia' = I feel joy. 'Provo a cucinare' = I try to cook. Context distinguishes the two. For emotions, 'provare' is often preferred over 'sentire' because it implies a deeper, more intentional awareness of the feeling."},

    {type:"teach", trg:"soffrire", src:"to suffer", pos:"verb", gender:null,
     note:"Irregular -ire verb. Past participle: sofferto.\n'Soffrire per amore' = to suffer for love.",
     example:"A: Ha sofferto molto dopo la separazione.\nB: Con il tempo stara meglio.",
     exampleSrc:"A: He suffered a lot after the separation.\nB: With time he will feel better.",
     funFact:"'Soffrire' comes from Latin 'sufferre' (to bear, to endure). It shares its root with English 'suffer.' In Italian, 'soffrire di' + illness means to suffer from: 'Soffro di mal di testa' (I suffer from headaches). Love and suffering are deeply linked in Italian literary tradition."},

    {type:"teach", trg:"commuoversi", src:"to be moved / to be touched", pos:"verb", gender:null,
     note:"Reflexive -ere verb. Past participle: commosso.\n'Mi sono commosso' = I was moved/touched.",
     example:"A: Mi sono commossa durante il discorso.\nB: Anch'io avevo le lacrime agli occhi.",
     exampleSrc:"A: I was moved during the speech.\nB: I too had tears in my eyes.",
     funFact:"'Commuovere' literally means 'to move together' (com- + muovere). The adjective 'commovente' (moving, touching) describes art, speeches, or gestures that bring tears. Italians are not embarrassed by being 'commossi' in public. Showing emotion at a wedding or funeral is expected."},

    {type:"teach", trg:"la solitudine", src:"the loneliness / solitude", pos:"noun", gender:"f",
     note:"Feminine. From 'solo' (alone) + -itudine (abstract suffix).\nCan be negative (loneliness) or positive (solitude).",
     example:"A: La solitudine puo essere dolorosa.\nB: Ma a volte fa bene stare soli.",
     exampleSrc:"A: Loneliness can be painful.\nB: But sometimes it is good to be alone.",
     funFact:"'Solitudine' covers both unwanted loneliness and chosen solitude. Italian literature and music are rich with this theme. Giacomo Leopardi's poem 'Il passero solitario' and Luigi Pirandello's characters often explore isolation. The word carries philosophical weight beyond simple sadness."},

    {type:"teach", trg:"la gratitudine", src:"the gratitude", pos:"noun", gender:"f",
     note:"Feminine. From 'grato' (grateful) + -itudine.\n'Provare gratitudine' = to feel gratitude.",
     example:"A: Provo una grande gratitudine per il tuo aiuto.\nB: Non c'e di che, lo faccio volentieri.",
     exampleSrc:"A: I feel great gratitude for your help.\nB: Do not mention it, I do it gladly.",
     funFact:"'Gratitudine' shares its root with 'gratis' (free), 'grazie' (thanks), and 'grazia' (grace). All come from Latin 'gratus' (pleasing, thankful). Expressing gratitude is important in Italian culture: a simple 'grazie' is fine casually, but 'Le sono molto grato/a' shows deep appreciation."},

    {type:"teach", trg:"la tenerezza", src:"the tenderness", pos:"noun", gender:"f",
     note:"Feminine. From 'tenero' (tender) + -ezza.\n'Provare tenerezza' = to feel tenderness.",
     example:"A: Provo una grande tenerezza per i bambini.\nB: Si vede, sei molto dolce con loro.",
     exampleSrc:"A: I feel great tenderness for children.\nB: You can tell, you are very gentle with them.",
     funFact:"'Tenerezza' follows the same -ezza pattern as 'tristezza,' 'bellezza,' and 'dolcezza.' This suffix transforms adjectives into abstract nouns. 'Tenero' also appears in cooking: 'carne tenera' (tender meat). Italian blurs the line between emotional and physical softness with the same word family."},

    {type:"teach", trg:"essere commosso", src:"to be moved / to be touched", pos:"adj", gender:null,
     note:"Adjective from 'commuovere.' Feminine: commossa.\n'Sono molto commosso' = I am very moved.",
     example:"A: Sono commossa dalle tue parole.\nB: Parlo con il cuore.",
     exampleSrc:"A: I am moved by your words.\nB: I speak from the heart.",
     funFact:"'Commosso' is both the past participle and an adjective. 'Un discorso commovente' (a moving speech) makes you 'commosso' (moved). In Italian award ceremonies and graduations, speakers often pause because they are 'troppo commosso per parlare' (too moved to speak)."},

    {type:"teach", trg:"pentirsi", src:"to repent / to regret", pos:"verb", gender:null,
     note:"Reflexive -ire verb. 'Pentirsi di' = to regret.\n'Mi pento di non averlo detto' = I regret not saying it.",
     example:"A: Ti penti di quella decisione?\nB: No, non mi pento di niente.",
     exampleSrc:"A: Do you regret that decision?\nB: No, I do not regret anything.",
     funFact:"'Pentirsi' comes from Latin 'paenitere' (to cause regret). In Italian law, a 'pentito' is a former criminal who cooperates with authorities, famously used for Mafia informants. In everyday speech, 'Non mi pento' (I have no regrets) is a statement of personal conviction."},

    {type:"teach", trg:"rilassarsi", src:"to relax", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Rilassati!' = Relax! (informal command).\nFrom 'ri-' + 'lassare' (to loosen).",
     example:"A: Devi rilassarti un po'.\nB: Hai ragione, sono troppo stressata.",
     exampleSrc:"A: You need to relax a bit.\nB: You are right, I am too stressed.",
     funFact:"'Rilassarsi' literally means 'to loosen oneself again.' The Italian lifestyle concept of 'la dolce vita' (the sweet life) values knowing when to slow down and enjoy the moment. 'Rilassati' is both advice and a cultural philosophy. Italians prize 'tempo libero' (free time) for recharging."},

    {type:"teach", trg:"sopportare", src:"to bear / to stand / to tolerate", pos:"verb", gender:null,
     note:"Regular -are verb. 'Non sopporto il caldo' = I cannot stand the heat.\nOften negative: expresses what you cannot tolerate.",
     example:"A: Non sopporto piu questa situazione.\nB: Capisco, devi fare qualcosa.",
     exampleSrc:"A: I cannot stand this situation anymore.\nB: I understand, you need to do something.",
     funFact:"'Sopportare' comes from Latin 'supportare' (to carry from below). In everyday Italian, it is almost always used negatively: 'Non lo sopporto' (I cannot stand him/it). 'Sopportazione' (patience/endurance) has a positive connotation, but the verb itself usually signals reaching a limit."},

    // Quiz steps
    {type:"mc", q:"What two meanings does 'provare' have?",
     opts:["To feel and to try","To cry and to laugh","To love and to hate","To give and to take"],
     ans:"To feel and to try",
     hint:"'Provo gioia' = I f... joy. 'Provo a cucinare' = I t... to cook. Context clarifies which meaning applies."},

    {type:"fb", s:"Ha {1} molto dopo la separazione.",
     a:["sofferto"],
     opts:["sofferto","provato","rilassato","sopportato"],
     hint:"This irregular past participle describes enduring pain. The verb shares its root with English 'suffer.'",
     sSrc:"He {1} a lot after the separation."},

    {type:"match", pairs:[
      {trg:"provare", src:"to feel / to try"},
      {trg:"soffrire", src:"to suffer"},
      {trg:"commuoversi", src:"to be moved"},
      {trg:"pentirsi", src:"to regret"},
      {trg:"sopportare", src:"to bear / tolerate"}
    ]},

    {type:"mc", q:"What does 'pentito' mean in Italian law?",
     opts:["A judge who shows mercy","A former criminal who cooperates with police","A lawyer defending Mafia members","A prison warden"],
     ans:"A former criminal who cooperates with police",
     hint:"From 'pentirsi' (to repent). These informants played a key role in prosecuting organized crime in Italy."},

    {type:"fb", s:"Provo una grande {1} per il tuo aiuto.",
     a:["gratitudine"],
     opts:["gratitudine","solitudine","tenerezza","rabbia"],
     hint:"Thankfulness for someone's help. This word shares its root with 'grazie' and 'gratis,' all from Latin 'gratus.'",
     sSrc:"I feel great {1} for your help."},

    {type:"mc", q:"What does 'la solitudine' cover in Italian?",
     opts:["Only painful loneliness and isolation","Only positive chosen peaceful solitude","Both loneliness and solitude depending on context","A specific medical condition"],
     ans:"Both loneliness and solitude depending on context",
     hint:"Italian uses one word where English has two. It can be a burden or a gift, d... on whether it is chosen or forced."},

    {type:"fb", s:"Non {1} piu questa situazione.",
     a:["sopporto"],
     opts:["sopporto","provo","soffro","rilasso"],
     hint:"You have reached your limit and cannot tolerate it anymore. This verb is almost always used with 'non' to express frustration.",
     sSrc:"I cannot {1} this situation anymore."},

    {type:"mc", q:"What suffix pattern creates 'tenerezza' from 'tenero'?",
     opts:["The -mente suffix for adverbs","The -ezza suffix for abstract nouns","The -zione suffix for processes","The -ismo suffix for ideologies"],
     ans:"The -ezza suffix for abstract nouns",
     hint:"Same pattern as triste > tristezza, bello > bellezza, dolce > dolcezza. One of Italian's most productive word-building tools."}
  ]
};
export default LESSON_5;
