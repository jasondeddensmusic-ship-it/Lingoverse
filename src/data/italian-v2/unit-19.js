// Italian V2 Unit 19. I sentimenti (Emotions & Relationships) (B1.3)
import BATCH8_L1 from './_batch8_u19_L01.js';
import BATCH7_L1 from './_batch7_u19_L01.js';
import BATCH6_L1 from './_batch6_u19_L01.js';
import BATCH5_L02 from './_batch5_u19_L02.js';
import BATCH5_L01 from './_batch5_u19_L01.js';
import BATCH3_L02 from './_batch3_u19_L02.js';
import BATCH3_L01 from './_batch3_u19_L01.js';
import EXP_L4 from './_temp_u19_expand_L01.js';import EXP_L5 from './_temp_u19_expand_L02.js';import EXP_L6 from './_temp_u19_expand_L03.js';
// CILS/CELI B1 aligned. Emotions, relationships, expressing feelings.

const UNIT_19 = {
  n:19, lang:"it", srcLang:"en", track:"v2",
  title:"I sentimenti", sub:"Emotions & Relationships",
  icon:"💗", level:"B1.3", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u19l1", title:"Le emozioni", icon:"😊", xp:15, board:true, steps:[
      {type:"intro", title:"Le emozioni",
       desc:"Learn the vocabulary of emotions in Italian. From joy to fear, these words let you express how you feel and understand others.",
       goals:["Name basic and complex emotions","Use 'mi sento' to describe feelings","Express emotional states in conversation"]},

      {type:"teach", trg:"la gioia", src:"the joy / happiness", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'gaudia' (joys, pleasures).\n'Piangere di gioia' = to cry with joy.",
       example:"A: Che gioia rivederti!\nB: Anche per me e una grande gioia.",
       exampleSrc:"A: What a joy to see you again!\nB: For me too it is a great joy.",
       funFact:"'Gioia' also means 'jewel' or 'treasure' in affectionate speech. Calling someone 'gioia mia' (my joy) is a common term of endearment in Italian, especially in southern Italy. The word captures both emotional and precious meanings."},

      {type:"teach", trg:"la tristezza", src:"the sadness", pos:"noun", gender:"f",
       note:"Feminine. From 'triste' (sad) + -ezza (abstract suffix).\nSimilar pattern: bellezza, dolcezza, sicurezza.",
       example:"A: C'e molta tristezza nei suoi occhi.\nB: Ha perso il lavoro la settimana scorsa.",
       exampleSrc:"A: There is a lot of sadness in his eyes.\nB: He lost his job last week.",
       funFact:"The suffix -ezza turns adjectives into abstract nouns: triste > tristezza, bello > bellezza, dolce > dolcezza. This is one of Italian's most productive word-building patterns, inherited directly from Latin -itia."},

      {type:"teach", trg:"la rabbia", src:"the anger / rage", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'rabies' (madness, fury).\n'Essere pieno di rabbia' = to be full of anger.",
       example:"A: Non riesco a controllare la rabbia.\nB: Fai un respiro profondo.",
       exampleSrc:"A: I cannot control my anger.\nB: Take a deep breath.",
       funFact:"'Rabbia' and the English word 'rabies' share the same Latin root 'rabies' (madness). In Italian, 'rabbia' is the everyday word for anger. The medical term for the disease rabies is also 'la rabbia' in Italian, showing the ancient link between fury and the disease."},

      {type:"teach", trg:"la paura", src:"the fear", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'pavor' (fear, dread).\n'Avere paura di' = to be afraid of.",
       example:"A: Ho paura dei ragni.\nB: Anch'io! Sono terrificanti.",
       exampleSrc:"A: I am afraid of spiders.\nB: Me too! They are terrifying.",
       funFact:"Italian uses 'avere paura' (to have fear) where English says 'to be afraid.' This is part of the avere + noun pattern: avere fame (to be hungry), avere freddo (to be cold), avere sonno (to be sleepy). The emotion is something you 'have,' not something you 'are.'"},

      {type:"teach", trg:"la vergogna", src:"the shame / embarrassment", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'verecundia' (modesty, shame).\n'Che vergogna!' = How embarrassing! / What a shame!",
       example:"A: Che vergogna! Ho sbagliato il suo nome.\nB: Non preoccuparti, succede a tutti.",
       exampleSrc:"A: How embarrassing! I got his name wrong.\nB: Do not worry, it happens to everyone.",
       funFact:"'Vergognarsi' (to be ashamed) is reflexive in Italian. 'Mi vergogno' means 'I am ashamed.' Italian culture places strong emphasis on 'fare bella figura' (making a good impression), so vergogna carries real social weight."},

      {type:"teach", trg:"mi sento", src:"I feel", pos:"verb", gender:null,
       note:"Reflexive: sentirsi. 'Mi sento bene' = I feel well.\n'Mi sento triste' = I feel sad. Followed by an adjective.",
       example:"A: Come ti senti oggi?\nB: Mi sento molto meglio, grazie.",
       exampleSrc:"A: How do you feel today?\nB: I feel much better, thanks.",
       funFact:"'Sentirsi' is reflexive (mi sento, ti senti, si sente). Plain 'sentire' means 'to hear' or 'to feel' (physically). The reflexive form is specifically for emotional or general well-being. 'Senti!' (Listen!) is one of the most common conversation starters in Italian."},

      {type:"teach", trg:"l'ansia", src:"the anxiety", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'anxia' (distressed).\n'Avere l'ansia' = to have anxiety. Very common in modern speech.",
       example:"A: Ho l'ansia per l'esame di domani.\nB: Stai tranquilla, sei preparata.",
       exampleSrc:"A: I have anxiety about tomorrow's exam.\nB: Stay calm, you are prepared.",
       funFact:"'Ansia' has become extremely common in everyday Italian, especially among younger speakers. 'Mi fa ansia' (it gives me anxiety) or 'che ansia!' (how stressful!) are used for anything mildly stressful, from exams to waiting for a text reply."},

      {type:"tip", title:"Expressing Feelings: Three Patterns",
       text:"Italian has three main ways to express emotions:\n\n1. Sentirsi + adjective: Mi sento felice (I feel happy)\n2. Essere + adjective: Sono arrabbiato (I am angry)\n3. Avere + noun: Ho paura (I have fear = I am afraid)\n\nPattern 3 is the most different from English. Italian treats many emotions as things you 'have' rather than things you 'are.'",
       deepDive:{title:"Avere vs. Essere for Feelings",
        text:"The avere + noun pattern: avere paura (fear), avere vergogna (shame), avere ansia (anxiety), avere voglia (desire). The essere + adjective pattern: essere triste, felice, arrabbiato, geloso. Generally, intense states use 'avere' and descriptive states use 'essere.' Some emotions work with both: 'Ho rabbia' and 'Sono arrabbiato' both express anger."}},

      // Quiz steps
      {type:"mc", q:"What does 'mi sento' mean?",
       opts:["I feel","I hear","I touch","I smell"],
       ans:"I feel",
       hint:"This is the reflexive form of 'sentire.' Plain 'sentire' means to hear, but adding the reflexive pronoun shifts it to emotional well-being."},

      {type:"fb", s:"Che {1}! Ho sbagliato il suo nome.",
       a:["vergogna"],
       opts:["vergogna","gioia","rabbia","paura"],
       hint:"You made a social mistake and feel embarrassed. This word is linked to 'fare bella figura' in Italian culture.",
       sSrc:"How {1}! I got his name wrong."},

      {type:"match", pairs:[
        {trg:"la gioia", src:"joy"},
        {trg:"la tristezza", src:"sadness"},
        {trg:"la rabbia", src:"anger"},
        {trg:"la paura", src:"fear"},
        {trg:"la vergogna", src:"shame"}
      ]},

      {type:"mc", q:"How do you say 'I am afraid of spiders' in Italian?",
       opts:["Sono paura dei ragni","Ho paura dei ragni","Faccio paura dei ragni","Sto paura dei ragni"],
       ans:"Ho paura dei ragni",
       hint:"Italian treats fear as something you 'have,' not something you 'are.' The pattern is avere + p... + di."},

      {type:"fb", s:"C'e molta {1} nei suoi occhi.",
       a:["tristezza"],
       opts:["tristezza","gioia","vergogna","ansia"],
       hint:"This emotion is the opposite of joy. It is formed from 'triste' (sad) with the abstract suffix -ezza.",
       sSrc:"There is a lot of {1} in his eyes."},

      {type:"mc", q:"Which suffix turns 'triste' into 'tristezza'?",
       opts:["-mente","-zione","-ezza","-ismo"],
       ans:"-ezza",
       hint:"This suffix builds abstract nouns from adjectives. Compare: bello > bell{1}, dolce > dolc{1}. A highly productive Italian pattern."},

      {type:"fb", s:"Ho l'{1} per l'esame di domani.",
       a:["ansia"],
       opts:["ansia","rabbia","gioia","vergogna"],
       hint:"This modern emotion word is used constantly by younger Italians for stress about upcoming events.",
       sSrc:"I have {1} about tomorrow's exam."},

      {type:"mc", q:"What does 'gioia mia' mean as a term of endearment?",
       opts:["My anger","My sadness","My fear","My joy / my treasure"],
       ans:"My joy / my treasure",
       hint:"This word means both 'j...' and 'jewel/t...' in affectionate speech. Common in southern Italy."}
    ]},

    {id:"itv2_u19l2", title:"Le relazioni", icon:"💑", xp:15, board:true, steps:[
      {type:"intro", title:"Le relazioni",
       desc:"Learn how Italians talk about relationships, from dating to family bonds. Relationship vocabulary reveals deep cultural values about love and loyalty.",
       goals:["Describe different types of relationships","Talk about romantic partners","Express trust and conflict in relationships"]},

      {type:"teach", trg:"il fidanzato", src:"the boyfriend / fiance", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la fidanzata. From 'fiducia' (trust).\nCovers both 'boyfriend' and 'fiance' in Italian.",
       example:"A: Hai il fidanzato?\nB: Si, stiamo insieme da tre anni.",
       exampleSrc:"A: Do you have a boyfriend?\nB: Yes, we have been together for three years.",
       funFact:"'Fidanzato/a' comes from 'fiducia' (trust). Unlike English, Italian uses the same word for 'boyfriend/girlfriend' and 'fiance.' Context clarifies the seriousness. A newer term, 'il ragazzo' (the boy), is more casual for younger couples."},

      {type:"teach", trg:"la coppia", src:"the couple / pair", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'copula' (bond, link).\n'Una coppia felice' = a happy couple.",
       example:"A: Sono una bella coppia.\nB: Si, stanno bene insieme.",
       exampleSrc:"A: They are a nice couple.\nB: Yes, they look good together.",
       funFact:"'Coppia' works for romantic couples and any pair of things: 'una coppia di scarpe' (a pair of shoes). In restaurants, 'coppia' can even mean a pair of bread rolls in some regions, especially Emilia-Romagna."},

      {type:"teach", trg:"la gelosia", src:"the jealousy", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'zelus' via Greek 'zelos' (zeal, envy).\n'Essere geloso/a' = to be jealous.",
       example:"A: La gelosia distrugge le relazioni.\nB: Hai ragione, bisogna avere fiducia.",
       exampleSrc:"A: Jealousy destroys relationships.\nB: You are right, you need to have trust.",
       funFact:"The word 'gelosia' also means 'window shutter' or 'Venetian blind' in Italian. The connection is that jealous people hide behind shutters to spy on their partners. This double meaning has been used in Italian literature and theater for centuries."},

      {type:"teach", trg:"litigare", src:"to argue / to quarrel", pos:"verb", gender:null,
       note:"Regular -are verb. From Latin 'litigare' (to dispute).\n'Litigare con qualcuno' = to argue with someone.",
       example:"A: Perche litigate sempre?\nB: Litighiamo per cose stupide.",
       exampleSrc:"A: Why do you always argue?\nB: We argue about stupid things.",
       funFact:"'Litigare' gave English 'litigate' (to take legal action). In Italian, it covers everyday arguments, not just legal disputes. 'Una litigata' is a single quarrel. Italian couples are stereotypically passionate, and 'litigare e fare pace' (argue and make up) is almost a cultural cliche."},

      {type:"teach", trg:"riconciliarsi", src:"to reconcile / to make up", pos:"verb", gender:null,
       note:"Reflexive -are verb. From Latin 'reconciliare' (to restore).\n'Si sono riconciliati' = they made up.",
       example:"A: Vi siete riconciliati dopo la lite?\nB: Si, ci siamo riconciliati ieri sera.",
       exampleSrc:"A: Did you make up after the fight?\nB: Yes, we reconciled last night.",
       funFact:"'Riconciliarsi' is a reciprocal reflexive verb, meaning both parties do the action together. The prefix 'ri-' (again) + 'conciliare' (to bring together) literally means 'to bring together again.' The informal equivalent is 'fare pace' (to make peace)."},

      {type:"teach", trg:"fidarsi", src:"to trust", pos:"verb", gender:null,
       note:"Reflexive -are verb. 'Fidarsi di' = to trust (someone).\nFrom 'fede' (faith). 'Mi fido di te' = I trust you.",
       example:"A: Ti fidi di lui?\nB: Si, mi fido completamente.",
       exampleSrc:"A: Do you trust him?\nB: Yes, I trust him completely.",
       funFact:"'Fidarsi' shares its root with 'fede' (faith), 'fiducia' (trust), and 'fidanzato' (fiance). The whole family of words connects trust, faith, and romantic commitment. 'Non mi fido' (I do not trust) is one of the most direct statements you can make in Italian."},

      {type:"teach", trg:"essere felice di", src:"to be happy about", pos:"verb", gender:null,
       note:"'Essere felice di' + infinitive = to be happy to.\n'Sono felice di vederti' = I am happy to see you.",
       example:"A: Sono felice di conoscerti.\nB: Anche io sono felice di conoscerti.",
       exampleSrc:"A: I am happy to meet you.\nB: I am happy to meet you too.",
       funFact:"'Felice' comes from Latin 'felix' (fortunate, happy). The city name Napoli (Naples) comes from Greek 'Neapolis' (new city), but the nearby town Felitto preserves the root 'felix.' 'Essere felice di' is the standard polite formula for expressing satisfaction."},

      {type:"teach", trg:"avere paura di", src:"to be afraid of", pos:"verb", gender:null,
       note:"Avere + paura + di + noun/infinitive.\n'Ho paura di volare' = I am afraid of flying.",
       example:"A: Hai paura di restare solo?\nB: Un po'. Ma mi sto abituando.",
       exampleSrc:"A: Are you afraid of being alone?\nB: A little. But I am getting used to it.",
       funFact:"The 'avere paura di' construction works with both nouns and infinitives: 'Ho paura dei cani' (I am afraid of dogs), 'Ho paura di cadere' (I am afraid of falling). The preposition 'di' is essential and cannot be omitted."},

      // Quiz steps
      {type:"mc", q:"What does 'il fidanzato' mean?",
       opts:["Boyfriend or fiance, depending on context","Just a platonic friend","A married husband","An older brother"],
       ans:"Boyfriend or fiance, depending on context",
       hint:"This word comes from 'fiducia' (trust). It covers both the dating and engaged stages. The situation clarifies which."},

      {type:"fb", s:"La {1} distrugge le relazioni.",
       a:["gelosia"],
       opts:["gelosia","gioia","coppia","paura"],
       hint:"This destructive emotion involves envy over a partner. The same word also means 'window shutter' in Italian.",
       sSrc:"{1} destroys relationships."},

      {type:"match", pairs:[
        {trg:"il fidanzato", src:"boyfriend / fiance"},
        {trg:"la coppia", src:"the couple"},
        {trg:"litigare", src:"to argue"},
        {trg:"riconciliarsi", src:"to make up"},
        {trg:"fidarsi", src:"to trust"}
      ]},

      {type:"mc", q:"How do you say 'I trust you' in Italian?",
       opts:["Ti fido","Mi fido di te","Fido te","Mi fido te"],
       ans:"Mi fido di te",
       hint:"This reflexive verb requires 'di' before the person. The verb shares its root with 'fede' (faith) and 'fiducia' (trust)."},

      {type:"fb", s:"Perche {1} sempre?",
       a:["litigate"],
       opts:["litigate","fidate","riconciliate","sentite"],
       hint:"This verb means to quarrel or have a dispute. It gave English a legal term. Here it is in the voi form.",
       sSrc:"Why do you always {1}?"},

      {type:"mc", q:"What is the informal way to say 'to reconcile' in Italian?",
       opts:["Fare festa","Fare guerra","Fare pace","Fare paura"],
       ans:"Fare pace",
       hint:"This expression literally means 'to make peace.' It is the everyday alternative to the more formal 'riconciliarsi.'"},

      {type:"fb", s:"Sono {1} di conoscerti.",
       a:["felice"],
       opts:["felice","triste","geloso","arrabbiato"],
       hint:"You are expressing a positive emotion about meeting someone. This adjective comes from Latin 'felix' (fortunate).",
       sSrc:"I am {1} to meet you."},

      {type:"mc", q:"What pattern does Italian use for 'I am afraid of spiders'?",
       opts:["Stare paura di + noun","Essere paura di + noun","Fare paura di + noun","Avere paura di + noun"],
       ans:"Avere paura di + noun",
       hint:"Italian treats fear as something you possess, not something you are. The structure uses 'to have' plus the Italian word for fright and the preposition 'di'."}
    ]},

    {id:"itv2_u19l3", title:"Parlare di emozioni", icon:"🗣️", xp:15, board:true, steps:[
      {type:"intro", title:"Parlare di emozioni",
       desc:"Put your emotions vocabulary into practice. Learn to discuss feelings in depth, describe emotional situations, and respond empathetically to others.",
       goals:["Combine emotion words with expressions","Respond to others' feelings with empathy","Describe complex emotional situations"]},

      {type:"teach", trg:"la delusione", src:"the disappointment", pos:"noun", gender:"f",
       note:"Feminine. From 'deludere' (to disappoint). False friend alert!\n'Delusione' does NOT mean 'delusion' (that is 'illusione').",
       example:"A: Che delusione! Il concerto e stato cancellato.\nB: Mi dispiace, so quanto lo aspettavi.",
       exampleSrc:"A: What a disappointment! The concert was cancelled.\nB: I am sorry, I know how much you were looking forward to it.",
       funFact:"'Delusione' is a famous false friend. English speakers assume it means 'delusion,' but it means 'disappointment.' The real Italian word for 'delusion' is 'illusione.' This trap catches even advanced learners. Remember: 'deludere' = to disappoint, not to delude."},

      {type:"teach", trg:"la speranza", src:"the hope", pos:"noun", gender:"f",
       note:"Feminine. From 'sperare' (to hope).\n'Avere speranza' = to have hope. 'Senza speranza' = hopeless.",
       example:"A: Non perdere la speranza.\nB: Hai ragione, devo essere positivo.",
       exampleSrc:"A: Do not lose hope.\nB: You are right, I must be positive.",
       funFact:"'Speranza' is a popular Italian girl's name meaning 'hope.' Dante placed 'Lasciate ogne speranza, voi ch'intrate' (Abandon all hope, ye who enter) at the gates of Hell in his Divine Comedy, making it one of the most quoted Italian phrases in world literature."},

      {type:"teach", trg:"la nostalgia", src:"the nostalgia / homesickness", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'nostos' (return) + 'algos' (pain).\n'Avere nostalgia di casa' = to be homesick.",
       example:"A: Ho nostalgia di casa.\nB: E normale, sei lontano da tanto tempo.",
       exampleSrc:"A: I am homesick.\nB: It is normal, you have been away for a long time.",
       funFact:"'Nostalgia' literally means 'the pain of returning home.' Italian uses it for both homesickness and fond memories of the past. A Swiss doctor coined the word in 1688 to describe homesick soldiers. Italian adopted it wholeheartedly for its emotional depth."},

      {type:"teach", trg:"preoccuparsi", src:"to worry", pos:"verb", gender:null,
       note:"Reflexive -are verb. 'Mi preoccupo per te' = I worry about you.\nFrom 'pre-' (before) + 'occupare' (to occupy).",
       example:"A: Non preoccuparti, andra tutto bene.\nB: Cerco di non preoccuparmi, ma e difficile.",
       exampleSrc:"A: Do not worry, everything will be fine.\nB: I try not to worry, but it is difficult.",
       funFact:"'Preoccuparsi' literally means 'to occupy oneself beforehand' with something that has not happened yet. The non-reflexive 'preoccupare' means 'to concern/worry someone': 'La situazione mi preoccupa' (The situation worries me)."},

      {type:"teach", trg:"consolare", src:"to console / to comfort", pos:"verb", gender:null,
       note:"Regular -are verb. From Latin 'consolari' (to comfort).\n'Consolare qualcuno' = to comfort someone.",
       example:"A: Come posso consolarti?\nB: Basta che tu sia qui con me.",
       exampleSrc:"A: How can I comfort you?\nB: It is enough that you are here with me.",
       funFact:"'Consolare' shares its root with 'consolazione' (consolation). Italy has a football tournament called 'Coppa Italia' where losing semi-finalists play a 'finale di consolazione' (consolation final). The word carries warmth and empathy in Italian."},

      {type:"teach", trg:"emozionarsi", src:"to get emotional / to be moved", pos:"verb", gender:null,
       note:"Reflexive -are verb. 'Mi emoziono facilmente' = I get emotional easily.\n'Emozionante' = exciting, moving.",
       example:"A: Mi sono emozionato al matrimonio.\nB: Anch'io, ho pianto di gioia.",
       exampleSrc:"A: I got emotional at the wedding.\nB: Me too, I cried with joy.",
       funFact:"'Emozionarsi' covers being moved by any strong positive or negative feeling. 'Che emozione!' (What a thrill!) is always positive. 'Emozionante' can mean 'exciting' or 'moving' depending on context. It is one of the most expressive words in conversational Italian."},

      {type:"teach", trg:"arrabbiato", src:"angry / upset", pos:"adj", gender:null,
       note:"Adjective. Feminine: arrabbiata. From 'rabbia' (anger).\n'Essere arrabbiato con' = to be angry with.",
       example:"A: Sei arrabbiato con me?\nB: No, non sono arrabbiato. Solo deluso.",
       exampleSrc:"A: Are you angry with me?\nB: No, I am not angry. Just disappointed.",
       funFact:"'Arrabbiata' also appears in cooking: 'penne all'arrabbiata' (angry penne) is a spicy tomato pasta sauce. The 'angry' refers to the chili peppers that make the sauce fiery. This crossover between emotions and food is very Italian."},

      {type:"tip", title:"Responding to Emotions",
       text:"Empathetic responses in Italian:\n\n'Mi dispiace' = I am sorry (for your situation)\n'Capisco come ti senti' = I understand how you feel\n'Deve essere difficile' = It must be difficult\n'Sono qui per te' = I am here for you\n'Non preoccuparti' = Do not worry\n'Andra tutto bene' = Everything will be fine\n\nThese phrases show care without overstepping. Italians value emotional directness.",
       deepDive:{title:"Italian Emotional Culture",
        text:"Italian communication tends to be emotionally expressive. Showing feelings openly is generally seen as authentic, not weak. Hugging, kissing cheeks, and physical comfort are normal even among acquaintances. 'Come stai?' (How are you?) expects a real answer, not just 'Fine.' This emotional openness is central to Italian social bonds."}},

      // Quiz steps
      {type:"mc", q:"What does 'delusione' actually mean in Italian?",
       opts:["A feeling of being let down","A mental delusion or false belief","A pleasant illusion or dream","A practical solution to a problem"],
       ans:"A feeling of being let down",
       hint:"This is a famous false friend. English 'delusion' translates to 'illusione' in Italian, not this word."},

      {type:"fb", s:"Non perdere la {1}.",
       a:["speranza"],
       opts:["speranza","rabbia","gelosia","vergogna"],
       hint:"This is the noun form of 'sperare' (to hope). Dante used this word at the gates of Hell in his famous inscription.",
       sSrc:"Do not lose {1}."},

      {type:"match", pairs:[
        {trg:"la delusione", src:"disappointment"},
        {trg:"la speranza", src:"hope"},
        {trg:"la nostalgia", src:"nostalgia / homesickness"},
        {trg:"preoccuparsi", src:"to worry"},
        {trg:"consolare", src:"to comfort"}
      ]},

      {type:"mc", q:"What does 'arrabbiata' mean in 'penne all'arrabbiata'?",
       opts:["Joyful and festive in a traditional Italian way","Furious, as chili makes the sauce fiery","Melancholy and very dark in color","Gentle and naturally sweet in flavor"],
       ans:"Furious, as chili makes the sauce fiery",
       hint:"From 'rabbia' (rage). The small hot peppers give this tomato pasta its intense, spicy bite."},

      {type:"fb", s:"Ho {1} di casa.",
       a:["nostalgia"],
       opts:["nostalgia","paura","rabbia","gioia"],
       hint:"You miss home. This word literally means 'the pain of returning home,' from Greek roots.",
       sSrc:"I am {1} (homesick)."},

      {type:"mc", q:"What does 'emozionarsi' mean?",
       opts:["To fall ill quite suddenly","To grow intensely angry at someone","To be stirred by deep feeling","To become thoroughly and utterly confused"],
       ans:"To be stirred by deep feeling",
       hint:"This reflexive verb covers being moved by any strong sensation. 'Mi sono emozionato' fits tears of joy or a touching speech."},

      {type:"fb", s:"Non {1}, andra tutto bene.",
       a:["preoccuparti"],
       opts:["preoccuparti","arrabbiarti","emozionarti","consolarti"],
       hint:"You are telling someone not to worry. This reflexive verb literally means 'to occupy yourself beforehand' with future problems.",
       sSrc:"Do not {1}, everything will be fine."},

      {type:"mc", q:"How does Italian emotional culture differ from some other cultures?",
       opts:["Feelings are kept strictly private","Concealing emotions is strongly preferred","Only immediate family may show emotion","Expressing feelings openly is seen as genuine"],
       ans:"Expressing feelings openly is seen as genuine",
       hint:"Italian social bonds value emotional directness. 'Come stai?' expects a real answer. Physical warmth and expressive language are normal even with acquaintances."}
    ]}
  ]
};
export default UNIT_19;
