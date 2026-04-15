// Unit 29 Expansion — Lesson 4: Il pensiero cognitivo
const LESSON_4 = {
  id:"itv2_u29l4", title:"Il pensiero cognitivo", icon:"🧩", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il pensiero cognitivo",
     desc:"Learn vocabulary for cognitive processes, memory, and learning. Understand how Italian discusses the mechanisms of thinking, reasoning, and problem-solving.",
     goals:["Describe cognitive processes and functions","Discuss memory, attention, and reasoning","Understand Italian terminology for learning and thinking"]},

    {type:"teach", trg:"la memoria", src:"the memory", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le memorie.\n'Memoria a breve/lungo termine' = short/long-term memory.\n'Perdita di memoria' = memory loss.",
     example:"A: La memoria a breve termine conserva le informazioni per pochi secondi.\nB: La ripetizione le trasferisce nella memoria a lungo termine.",
     exampleSrc:"A: Short-term memory holds information for a few seconds.\nB: Repetition transfers it to long-term memory.",
     funFact:"The Latin phrase 'ars memoriae' (art of memory) was perfected by Italian Renaissance scholars. The 'metodo dei loci' (method of loci), imagining information placed in rooms of a palace, was described by Matteo Ricci and used by orators since ancient Rome."},

    {type:"teach", trg:"l'attenzione", src:"the attention", pos:"noun", gender:"f",
     note:"Feminine noun. 'Deficit di attenzione' = attention deficit.\n'Prestare attenzione' = to pay attention. 'Span attentivo' = attention span.",
     example:"A: L'attenzione dei ragazzi cala dopo venti minuti.\nB: Per questo le lezioni dovrebbero essere piu interattive.",
     exampleSrc:"A: Young people's attention drops after twenty minutes.\nB: That is why lessons should be more interactive.",
     funFact:"Italian researchers at the University of Padua are leaders in attention research. The 'effetto cocktail party' (cocktail party effect), our ability to focus on one voice among many, was studied extensively by Italian cognitive scientists."},

    {type:"teach", trg:"il ragionamento", src:"the reasoning", pos:"noun", gender:"m",
     note:"Masculine noun. 'Ragionamento logico' = logical reasoning.\n'Ragionamento deduttivo/induttivo' = deductive/inductive reasoning.",
     example:"A: Il ragionamento logico e fondamentale nella scienza.\nB: Bisogna partire dai fatti per arrivare alle conclusioni.",
     exampleSrc:"A: Logical reasoning is fundamental in science.\nB: One must start from facts to reach conclusions.",
     funFact:"Galileo's insistence on 'ragionamento' (reasoning) based on observation rather than authority revolutionized science. His famous defense before the Inquisition, asserting reasoned evidence over dogma, remains a symbol of intellectual courage."},

    {type:"teach", trg:"il pregiudizio cognitivo", src:"the cognitive bias", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i pregiudizi cognitivi.\nSystematic errors in thinking. Also called 'bias cognitivo.'",
     example:"A: Il pregiudizio di conferma ci fa cercare solo informazioni che confermano le nostre idee.\nB: E uno dei bias piu comuni e pericolosi.",
     exampleSrc:"A: Confirmation bias makes us seek only information that confirms our ideas.\nB: It is one of the most common and dangerous biases.",
     funFact:"Italian uses both 'pregiudizio cognitivo' and the English loanword 'bias.' Daniel Kahneman's work on cognitive biases was translated into Italian as 'Pensieri lenti e veloci' and became a bestseller, popularizing the concept in Italian discourse."},

    {type:"teach", trg:"l'apprendimento", src:"the learning", pos:"noun", gender:"m",
     note:"Masculine noun. 'Apprendimento automatico' = machine learning.\n'Disturbi dell'apprendimento' = learning disabilities.",
     example:"A: L'apprendimento di una lingua richiede pratica quotidiana.\nB: Il cervello ha bisogno di ripetizione per consolidare.",
     exampleSrc:"A: Learning a language requires daily practice.\nB: The brain needs repetition to consolidate.",
     funFact:"Maria Montessori revolutionized our understanding of child learning. Her method, based on observation and self-directed activity, proved that children learn best through hands-on experience. The 'metodo Montessori' is now used in over 20,000 schools worldwide."},

    {type:"mc",
     q:"Che cos'e il pregiudizio di conferma?",
     opts:["La tendenza a cercare solo informazioni che confermano cio che gia crediamo","La capacita di confermare ipotesi scientifiche","Un tipo di memoria a breve termine","La tendenza a dimenticare le informazioni negative"],
     ans:"La tendenza a cercare solo informazioni che confermano cio che gia crediamo",
     hint:"A cognitive bias where we unconsciously seek evidence supporting what we already believe while ignoring contradictory information."},

    {type:"teach", trg:"la concentrazione", src:"the concentration / focus", pos:"noun", gender:"f",
     note:"Feminine noun. 'Perdere la concentrazione' = to lose concentration.\n'Esercizi di concentrazione' = concentration exercises.",
     example:"A: La concentrazione migliora con la meditazione.\nB: Anche l'esercizio fisico aiuta molto.",
     exampleSrc:"A: Concentration improves with meditation.\nB: Physical exercise also helps a lot.",
     funFact:"Italian schools are experimenting with 'mindfulness' techniques to improve student concentration. The traditional Italian school model of long lectures is gradually giving way to more interactive approaches that maintain engagement."},

    {type:"teach", trg:"il problem-solving", src:"the problem-solving", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\n'Capacita di problem-solving' = problem-solving ability.",
     example:"A: Il problem-solving e una delle competenze piu richieste nel lavoro.\nB: Si puo allenare con la pratica.",
     exampleSrc:"A: Problem-solving is one of the most sought-after skills at work.\nB: It can be trained through practice.",
     funFact:"Italian adopted 'problem-solving' directly from English because no concise Italian equivalent exists. 'Risoluzione di problemi' is the literal translation but feels clunky in professional contexts. This Anglicism is now standard in Italian HR vocabulary."},

    {type:"fb",
     s:"La {1} a breve termine conserva le informazioni solo per pochi secondi.",
     a:["memoria"],
     opts:["memoria","attenzione","concentrazione","percezione"],
     hint:"The cognitive function that stores and retrieves information. It comes in short-term and long-term varieties.",
     sSrc:"Short-term {1} holds information for only a few seconds."},

    {type:"teach", trg:"la creativita", src:"the creativity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Pensiero creativo' = creative thinking.\n'Creativita artistica' = artistic creativity.",
     example:"A: La creativita si puo stimolare con l'ambiente giusto.\nB: Gli spazi aperti e collaborativi favoriscono le idee nuove.",
     exampleSrc:"A: Creativity can be stimulated with the right environment.\nB: Open and collaborative spaces favor new ideas.",
     funFact:"Italy's reputation for 'creativita' spans centuries: Renaissance art, fashion design, industrial design, cuisine. Psychologists study the 'Italian creative mindset,' linking it to a culture that values aesthetics, craftsmanship, and 'bella figura' (making a good impression)."},

    {type:"teach", trg:"l'intuizione", src:"the intuition", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le intuizioni.\n'Intuizione geniale' = brilliant intuition.\n'Intuitivo/a' (adj) = intuitive.",
     example:"A: L'intuizione di Galileo anticipo la scienza moderna.\nB: Vedeva connessioni dove altri non vedevano nulla.",
     exampleSrc:"A: Galileo's intuition anticipated modern science.\nB: He saw connections where others saw nothing.",
     funFact:"Croce's aesthetic philosophy placed 'intuizione' at the center of all knowledge. For Croce, true understanding begins not with logic but with an intuitive grasp of reality. This idea deeply influenced Italian education and intellectual culture."},

    {type:"mc",
     q:"Chi ha rivoluzionato la nostra comprensione dell'apprendimento infantile?",
     opts:["Sigmund Freud","Maria Montessori","Giacomo Rizzolatti","Benedetto Croce"],
     ans:"Maria Montessori",
     hint:"An Italian educator whose method, based on observation and self-directed activity, proved children learn best through hands-on experience. Her approach is now used in thousands of schools worldwide."},

    {type:"match", pairs:[
      {trg:"memoria", src:"memory"},
      {trg:"attenzione", src:"attention"},
      {trg:"ragionamento", src:"reasoning"},
      {trg:"apprendimento", src:"learning"},
      {trg:"creativita", src:"creativity"}
    ]},

    {type:"fb",
     s:"Il {1} logico parte dai fatti per arrivare a conclusioni valide.",
     a:["ragionamento"],
     opts:["ragionamento","pregiudizio","apprendimento","problema"],
     hint:"The mental process of drawing conclusions from facts or premises. Using logic to move from evidence to a justified conclusion.",
     sSrc:"Logical {1} starts from facts to arrive at valid conclusions."},

    {type:"mc",
     q:"Perche l'italiano usa la parola inglese 'problem-solving' invece di tradurla?",
     opts:["Perche e piu precisa della traduzione italiana","Perche 'risoluzione di problemi' e troppo lungo per il linguaggio professionale","Perche gli italiani non capiscono i concetti cognitivi","Perche la psicologia non esiste in Italia"],
     ans:"Perche 'risoluzione di problemi' e troppo lungo per il linguaggio professionale",
     hint:"The literal Italian translation is clunky and wordy. In professional and business contexts, the concise English borrowing has become standard practice."}
  ]
};
export default LESSON_4;
