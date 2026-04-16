// Batch 3 — Unit 19, Lesson 1: Stati psicologici (Psychological States)
const BATCH3_U19_L1 = {
  id:"itv2_u19l_b3_1", title:"Stati psicologici", icon:"\uD83E\uDDE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Stati psicologici",
     desc:"Expand your emotional vocabulary with deeper psychological states. These nuanced words let you describe complex inner experiences with precision.",
     goals:["Name complex psychological states","Describe emotional responses to situations","Discuss mental well-being in Italian"]},

    {type:"teach", trg:"l'inquietudine", src:"the restlessness / unease", pos:"noun", gender:"f",
     note:"Feminine. From 'inquieto' (restless, uneasy).\n'Provare inquietudine' = to feel restless.",
     example:"A: Provo una strana inquietudine.\nB: Forse hai bisogno di parlare con qualcuno.",
     exampleSrc:"A: I feel a strange restlessness.\nB: Maybe you need to talk to someone.",
     funFact:"'Inquietudine' comes from 'in-' (not) + 'quieto' (quiet/calm). It describes that nagging sense that something is not right. Italian literature, especially existentialist writers like Moravia, explored 'inquietudine' as a central theme of modern life."},

    {type:"teach", trg:"la solitudine", src:"the loneliness / solitude", pos:"noun", gender:"f",
     note:"Feminine. From 'solo' (alone). Can be positive or negative.\n'Sentire la solitudine' = to feel lonely.",
     example:"A: La solitudine a volte fa bene.\nB: Si, ma troppa solitudine fa male.",
     exampleSrc:"A: Solitude sometimes does good.\nB: Yes, but too much loneliness hurts.",
     funFact:"Italian distinguishes between positive solitude (time alone for reflection) and negative loneliness (feeling isolated). 'Stare da soli' (being alone) can be chosen and healthy. 'Sentirsi soli' (feeling alone) implies unwanted isolation. The nuance matters in Italian conversation."},

    {type:"teach", trg:"la soddisfazione", src:"the satisfaction", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'satisfactio' (enough-making).\n'Che soddisfazione!' = What a satisfaction!",
     example:"A: Che soddisfazione finire il progetto!\nB: Hai lavorato tanto, te lo meriti.",
     exampleSrc:"A: What satisfaction to finish the project!\nB: You worked so hard, you deserve it.",
     funFact:"'Soddisfazione' carries deep emotional weight in Italian. 'Darsi una soddisfazione' means to treat yourself or do something gratifying. The phrase 'La migliore vendetta e la soddisfazione personale' (The best revenge is personal satisfaction) reflects Italian wisdom about success."},

    {type:"teach", trg:"la frustrazione", src:"the frustration", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'frustratio' (deception, disappointment).\n'Provare frustrazione' = to feel frustrated.",
     example:"A: La frustrazione cresce quando non vedo risultati.\nB: Devi avere pazienza.",
     exampleSrc:"A: Frustration grows when I do not see results.\nB: You need to have patience.",
     funFact:"'Frustrazione' entered Italian relatively recently, influenced by psychological terminology. Italian traditionally expressed the concept through 'delusione' (disappointment) or 'rabbia' (anger). The adoption of 'frustrazione' reflects the growing influence of psychology in Italian culture."},

    {type:"teach", trg:"la gratitudine", src:"the gratitude", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'gratitudo' (thankfulness).\n'Provare gratitudine' = to feel grateful.",
     example:"A: Provo molta gratitudine per il tuo aiuto.\nB: E stato un piacere aiutarti.",
     exampleSrc:"A: I feel great gratitude for your help.\nB: It was a pleasure to help you.",
     funFact:"Italian culture places high value on gratitude. 'Essere grato/a' (to be grateful) and 'riconoscente' (recognizing, grateful) are qualities admired in Italian society. The formula 'Le sono molto grato/a' is a very formal expression of thanks used in professional settings."},

    {type:"teach", trg:"l'orgoglio", src:"the pride", pos:"noun", gender:"m",
     note:"Masculine. From Germanic 'urgoli' (excellence).\n'Orgoglio nazionale' = national pride. Can be positive or negative.",
     example:"A: L'orgoglio di un padre per sua figlia.\nB: E il sentimento piu bello.",
     exampleSrc:"A: A father's pride for his daughter.\nB: It is the most beautiful feeling.",
     funFact:"'Orgoglio' can be positive (healthy pride in achievements) or negative (excessive pride preventing growth). 'Essere orgoglioso' (to be proud) is usually positive. 'Avere troppo orgoglio' (having too much pride) is negative. Italian proverb: 'L'orgoglio precede la caduta' (Pride precedes the fall)."},

    {type:"teach", trg:"la compassione", src:"the compassion / sympathy", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'compassio' (suffering together).\n'Provare compassione per' = to feel compassion for.",
     example:"A: Provo molta compassione per la sua situazione.\nB: Anche io. Dobbiamo aiutarlo.",
     exampleSrc:"A: I feel great compassion for his situation.\nB: Me too. We must help him.",
     funFact:"'Compassione' literally means 'suffering together' (com + passio). Italian Catholic culture deeply values compassion as a virtue. 'Pieta' (pity/mercy) is a related concept, immortalized in Michelangelo's famous sculpture 'La Pieta' in St. Peter's Basilica."},

    {type:"teach", trg:"il rimorso", src:"the remorse / regret", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'remorsus' (a biting back).\n'Avere rimorso' = to feel remorse.",
     example:"A: Non ho rimorsi per la mia decisione.\nB: Hai fatto la scelta giusta.",
     exampleSrc:"A: I have no regrets about my decision.\nB: You made the right choice.",
     funFact:"'Rimorso' literally means 'bitten again,' describing guilt that gnaws at you repeatedly. Italian distinguishes 'rimorso' (guilt for something wrong you did) from 'rimpianto' (regret for something you wish you had done). Both are central to Italian emotional vocabulary."},

    {type:"teach", trg:"il rimpianto", src:"the regret (for missed opportunity)", pos:"noun", gender:"m",
     note:"Masculine. From 'rimpiangere' (to lament again).\n'Senza rimpianti' = without regrets.",
     example:"A: Il mio piu grande rimpianto e non aver viaggiato di piu.\nB: Non e mai troppo tardi.",
     exampleSrc:"A: My biggest regret is not having traveled more.\nB: It is never too late.",
     funFact:"'Rimpianto' versus 'rimorso': rimpianto is about what you WISH you had done (missed opportunities), while rimorso is about what you DID that was wrong (guilt). Edith Piaf's 'Non, je ne regrette rien' is 'Non rimpiango niente' in Italian. 'Vivere senza rimpianti' is a popular life motto."},

    {type:"teach", trg:"la serenita", src:"the serenity / peace of mind", pos:"noun", gender:"f",
     note:"Feminine. From 'sereno' (serene, clear).\nInvariable: le serenita.",
     example:"A: Cerco solo un po' di serenita.\nB: La troverai, datti tempo.",
     exampleSrc:"A: I just seek a bit of serenity.\nB: You will find it, give yourself time.",
     funFact:"'Serenita' comes from 'sereno,' which describes both clear skies and calm emotions. The dual meaning connects inner peace with clear weather. 'Serenata' (serenade) shares the root, being music performed under clear evening skies to bring peace and joy."},

    {type:"teach", trg:"sentirsi in colpa", src:"to feel guilty", pos:"verb", gender:null,
     note:"Reflexive expression. 'Colpa' = fault/guilt.\n'Mi sento in colpa' = I feel guilty.",
     example:"A: Mi sento in colpa per quello che ho detto.\nB: Puoi ancora scusarti.",
     exampleSrc:"A: I feel guilty about what I said.\nB: You can still apologize.",
     funFact:"'Colpa' comes from Latin 'culpa' (fault, blame). 'Senso di colpa' (sense of guilt) is the psychological term. Catholic culture deeply influenced Italian concepts of guilt. 'Mea culpa' (my fault), the Latin prayer phrase, is used in everyday Italian to accept blame."},

    {type:"teach", trg:"essere sopraffatto", src:"to be overwhelmed", pos:"verb", gender:null,
     note:"Adjective/past participle. From 'sopraffare' (to overwhelm).\n'Sono sopraffatto dalle emozioni' = I am overwhelmed by emotions.",
     example:"A: Sono sopraffatto dal lavoro.\nB: Devi imparare a dire di no.",
     exampleSrc:"A: I am overwhelmed by work.\nB: You need to learn to say no.",
     funFact:"'Sopraffare' means 'to do above/beyond' (sopra + fare). Being 'sopraffatto' describes emotions or demands exceeding your capacity. Modern Italian increasingly discusses 'burnout' (using the English word) alongside traditional 'esaurimento nervoso' (nervous exhaustion)."},

    {type:"teach", trg:"la meraviglia", src:"the wonder / amazement", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'mirabilia' (wonderful things).\n'Che meraviglia!' = How wonderful!",
     example:"A: Che meraviglia questo tramonto!\nB: L'Italia non smette mai di stupire.",
     exampleSrc:"A: What a wonder this sunset is!\nB: Italy never stops amazing.",
     funFact:"'Che meraviglia!' is one of the most joyful Italian exclamations. 'Le sette meraviglie del mondo' (the seven wonders of the world). 'Meraviglioso/a' (marvelous) is a beloved Italian adjective. The singer Domenico Modugno sang 'Meraviglioso,' a hymn to the beauty of life."},

    // Quiz steps
    {type:"mc", q:"What is the difference between 'rimorso' and 'rimpianto'?",
     opts:["They mean exactly the same thing","Rimorso = guilt for wrongdoing, rimpianto = regret for missed opportunities","Rimorso is formal, rimpianto is informal","Rimorso is about others, rimpianto is about yourself"],
     ans:"Rimorso = guilt for wrongdoing, rimpianto = regret for missed opportunities",
     hint:"One 'bites back' (g...). The other 'laments again' (wishing you had done something). Both are deep emotional states."},

    {type:"fb", s:"Provo una strana {1}.",
     a:["inquietudine"],
     opts:["inquietudine","serenita","gratitudine","soddisfazione"],
     hint:"A nagging sense of unease. From 'in-' (not) + 'quieto' (calm). Something is not right but you cannot pinpoint it.",
     sSrc:"I feel a strange {1}."},

    {type:"match", pairs:[
      {trg:"la solitudine", src:"loneliness / solitude"},
      {trg:"la soddisfazione", src:"satisfaction"},
      {trg:"la frustrazione", src:"frustration"},
      {trg:"l'orgoglio", src:"pride"},
      {trg:"la compassione", src:"compassion"}
    ]},

    {type:"mc", q:"What does 'sentirsi in colpa' mean?",
     opts:["To feel proud of yourself","To feel guilty","To feel sick and unwell","To feel excited"],
     ans:"To feel guilty",
     hint:"'Colpa' means fault or guilt, from Latin 'culpa.' Catholic culture deeply influenced this concept in Italian emotional vocabulary."},

    {type:"fb", s:"Che {1} questo tramonto!",
     a:["meraviglia"],
     opts:["meraviglia","frustrazione","solitudine","inquietudine"],
     hint:"An exclamation of wonder and amazement. From Latin 'mirabilia.' One of Italian's most joyful expressions.",
     sSrc:"What a {1} this sunset is!"},

    {type:"mc", q:"How does Italian distinguish positive solitude from negative loneliness?",
     opts:["There is no distinction in Italian","'Stare da soli' is chosen, 'sentirsi soli' is unwanted","Only 'solitudine' exists as a negative word","Italians never discuss loneliness"],
     ans:"'Stare da soli' is chosen, 'sentirsi soli' is unwanted",
     hint:"One is healthy time alone for reflection. The other is painful isolation. The verb choice reveals the emotional quality."},

    {type:"fb", s:"Sono {1} dal lavoro.",
     a:["sopraffatto"],
     opts:["sopraffatto","grato","orgoglioso","sereno"],
     hint:"Work demands exceed your capacity. This adjective means overwhelmed. From 'sopra' (above) + 'fare' (to do).",
     sSrc:"I am {1} by work."},

    {type:"mc", q:"What does the Italian proverb 'L'orgoglio precede la caduta' mean?",
     opts:["Pride comes before the fall","Pride makes you stronger","Pride is always positive","Proud people never fail"],
     ans:"Pride comes before the fall",
     hint:"Excessive p... leads to downfall. Italian wisdom warns against 'troppo orgoglio' while valuing healthy p... in achievements."}
  ]
};
export default BATCH3_U19_L1;
