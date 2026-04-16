// Italian V2 Unit 33. La filosofia (Philosophy)
import BATCH6_L1 from './_batch6_u33_L01.js';
import BATCH5_L02 from './_batch5_u33_L02.js';
import BATCH5_L01 from './_batch5_u33_L01.js';
import BATCH3_L02 from './_batch3_u33_L02.js';
import BATCH3_L01 from './_batch3_u33_L01.js';
// Level: B2.3. CILS/CELI B2 aligned.

const UNIT_33 = {
  n:33, lang:"it", srcLang:"en", track:"v2",
  title:"La filosofia", sub:"Philosophy & Abstract Thought",
  icon:"🏛️", level:"B2.3", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Il pensiero astratto ───
    {id:"itv2_u33l1", title:"Il pensiero astratto", icon:"💭", xp:15, board:true, steps:[
      {type:"intro", title:"Il pensiero astratto",
       desc:"Explore the vocabulary of philosophy, logic, and abstract reasoning. These terms are essential for academic discourse, opinion essays, and understanding Italian intellectual tradition.",
       goals:["Name core philosophical concepts and traditions","Express abstract ideas and ethical positions","Use formal academic vocabulary for argumentation"]},

      {type:"teach", trg:"la filosofia", src:"philosophy", pos:"noun", gender:"f",
       note:"Feminine noun. From Greek 'philo' (love) + 'sophia' (wisdom).\n'Filosofia morale' = moral philosophy. 'Filosofia politica' = political philosophy.",
       example:"A: Hai studiato filosofia all'universita?\nB: Si, tre anni. Mi ha insegnato a pensare in modo critico.",
       exampleSrc:"A: Did you study philosophy at university?\nB: Yes, three years. It taught me to think critically.",
       funFact:"Italy has a uniquely strong philosophical tradition. Philosophy is a mandatory subject in all Italian high schools (licei), unlike most other European countries."},

      {type:"teach", trg:"il concetto", src:"the concept / idea", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i concetti.\n'Concetto chiave' = key concept. 'Concetto astratto' = abstract concept.",
       example:"A: Questo concetto e difficile da spiegare.\nB: Prova con un esempio concreto.",
       exampleSrc:"A: This concept is difficult to explain.\nB: Try with a concrete example.",
       funFact:"From Latin 'conceptus' (something conceived). Italian philosophy distinguishes between 'concetto' (abstract idea) and 'nozione' (factual knowledge), a distinction important in academic writing."},

      {type:"teach", trg:"l'etica", src:"ethics / moral philosophy", pos:"noun", gender:"f",
       note:"Feminine noun. The study of right and wrong.\n'Etica professionale' = professional ethics. 'Codice etico' = code of ethics.",
       example:"A: L'etica e fondamentale nella ricerca scientifica.\nB: Senza regole etiche, la scienza diventa pericolosa.",
       exampleSrc:"A: Ethics is fundamental in scientific research.\nB: Without ethical rules, science becomes dangerous.",
       funFact:"Italian has both 'etica' (the philosophical discipline) and 'morale' (practical moral conduct). The distinction goes back to Aristotle, whose works were central to medieval Italian university teaching."},

      {type:"teach", trg:"la ragione", src:"reason / rational thought", pos:"noun", gender:"f",
       note:"Feminine noun. 'Avere ragione' = to be right.\n'L'eta della ragione' = the Age of Reason. Also means 'reason (cause).'",
       example:"A: La ragione deve guidare le nostre scelte.\nB: Ma anche le emozioni hanno un ruolo importante.",
       exampleSrc:"A: Reason should guide our choices.\nB: But emotions also play an important role.",
       funFact:"The dual meaning of 'ragione' (both 'reason' and 'being right') mirrors a deep philosophical assumption: the rational person is the correct one. 'Avere ragione' literally means 'to have reason.'"},

      {type:"teach", trg:"la coscienza", src:"consciousness / conscience", pos:"noun", gender:"f",
       note:"Feminine noun. Dual meaning: awareness and moral sense.\n'Presa di coscienza' = becoming aware. 'Esame di coscienza' = examination of conscience.",
       example:"A: La coscienza ci distingue dagli animali.\nB: Almeno, cosi credevano i filosofi antichi.",
       exampleSrc:"A: Consciousness distinguishes us from animals.\nB: At least, that is what the ancient philosophers believed.",
       funFact:"Italian uses one word for both 'consciousness' (awareness) and 'conscience' (moral sense), while English splits them. This ambiguity reflects centuries of debate about whether morality is inherent in awareness itself."},

      {type:"mc",
       q:"Quale disciplina studia il bene e il male, il giusto e l'ingiusto?",
       opts:["L'etica","L'estetica","La logica","La metafisica"],
       ans:"L'etica",
       hint:"This branch of philosophy deals with moral questions: what is right, what is wrong, and how we should behave."},

      {type:"teach", trg:"il paradosso", src:"the paradox", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i paradossi.\nA statement that contradicts itself yet reveals a truth.",
       example:"A: E un paradosso interessante: piu sappiamo, piu dubitiamo.\nB: Socrate lo diceva gia duemila anni fa.",
       exampleSrc:"A: It is an interesting paradox: the more we know, the more we doubt.\nB: Socrates was already saying that two thousand years ago.",
       funFact:"From Greek 'para' (against) + 'doxa' (opinion). The most famous Italian paradox may be Galileo's: a heavier object does not fall faster than a lighter one, contradicting centuries of Aristotelian belief."},

      {type:"teach", trg:"la verita", src:"the truth", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Dire la verita' = to tell the truth. 'In verita' = in truth / actually.",
       example:"A: La verita assoluta esiste?\nB: Dipende dalla corrente filosofica.",
       exampleSrc:"A: Does absolute truth exist?\nB: It depends on the philosophical school of thought.",
       funFact:"'Verita' ends in an accented vowel and never changes form in the plural. Giordano Bruno was burned at the stake in Rome in 1600 for defending philosophical truths that contradicted Church doctrine."},

      {type:"teach", trg:"il dubbio", src:"the doubt", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i dubbi.\n'Mettere in dubbio' = to question / to cast doubt on. 'Senza dubbio' = without doubt.",
       example:"A: Il dubbio e il punto di partenza della filosofia.\nB: Chi non dubita, non pensa veramente.",
       exampleSrc:"A: Doubt is the starting point of philosophy.\nB: Those who do not doubt do not truly think.",
       funFact:"Descartes' method of systematic doubt ('cogito ergo sum' = I think therefore I am) profoundly influenced Italian philosophy. Italian thinkers like Giambattista Vico challenged Cartesian rationalism with alternative approaches to knowledge and certainty."},

      {type:"fb",
       s:"Socrate diceva che il vero sapere inizia dal {1}.",
       a:["dubbio"],
       opts:["dubbio","concetto","paradosso","ragione"],
       hint:"The starting point of philosophical inquiry. Socrates believed wisdom begins when you question what you think you know.",
       sSrc:"Socrates said that true knowledge begins with {1}."},

      {type:"teach", trg:"la logica", src:"logic", pos:"noun", gender:"f",
       note:"Feminine noun. The discipline of valid reasoning.\n'Ragionamento logico' = logical reasoning. 'E logico' = it is logical / it makes sense.",
       example:"A: La logica formale ha regole precise.\nB: Un argomento puo essere logico ma falso.",
       exampleSrc:"A: Formal logic has precise rules.\nB: An argument can be logical but false.",
       funFact:"Aristotle, whose works were preserved and transmitted through medieval Italian universities, is called 'il padre della logica' (the father of logic). His logical system dominated European thought for over two thousand years."},

      {type:"teach", trg:"l'ipotesi", src:"the hypothesis", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable plural: le ipotesi.\n'Formulare un'ipotesi' = to formulate a hypothesis.",
       example:"A: La tua ipotesi e interessante ma non dimostrata.\nB: Per questo servono ulteriori ricerche.",
       exampleSrc:"A: Your hypothesis is interesting but unproven.\nB: That is why further research is needed.",
       funFact:"From Greek 'hypo' (under) + 'thesis' (placing). In Italian academic writing, 'ipotesi di lavoro' (working hypothesis) is the standard term for a preliminary assumption guiding research."},

      {type:"teach", trg:"l'argomento", src:"the argument / topic", pos:"noun", gender:"m",
       note:"Masculine noun. Dual meaning: a logical argument and a subject/topic.\n'Argomento convincente' = convincing argument.",
       example:"A: Il suo argomento e solido ma non del tutto convincente.\nB: Manca una prova decisiva.",
       exampleSrc:"A: His argument is solid but not entirely convincing.\nB: A decisive proof is missing.",
       funFact:"In Italian, 'argomento' means both 'argument' (in logic) and 'topic' (of discussion). The English word 'argument' meaning 'quarrel' translates as 'litigio' or 'discussione,' not 'argomento.'"},

      {type:"mc",
       q:"In filosofia, cos'e un paradosso?",
       opts:["Una domanda priva di risposta possibile","Una contraddizione apparente che rivela una verita","Un ragionamento che porta sempre a conclusioni false","Un argomento che si fonda esclusivamente su fatti concreti"],
       ans:"Una contraddizione apparente che rivela una verita",
       hint:"It seems to contradict itself on the surface, yet it uncovers something true. Greek roots mean 'against opinion.'"},

      {type:"teach", trg:"il principio", src:"the principle / beginning", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i principi.\n'In principio' = in the beginning. 'Per principio' = on principle.",
       example:"A: Quali sono i principi fondamentali della democrazia?\nB: Liberta, uguaglianza e partecipazione.",
       exampleSrc:"A: What are the fundamental principles of democracy?\nB: Freedom, equality, and participation.",
       funFact:"'Principio' holds both temporal (beginning) and moral (guiding rule) meanings. Both 'principio' and 'principe' (prince) come from Latin 'princeps' (first, chief), but in Italian they have distinct meanings: 'principio' is a concept, 'principe' is a ruler."},

      {type:"teach", trg:"l'esistenza", src:"existence", pos:"noun", gender:"f",
       note:"Feminine noun. From 'esistere' (to exist).\n'Mettere in discussione l'esistenza di' = to question the existence of.",
       example:"A: L'esistenza ha un senso?\nB: Gli esistenzialisti rispondono che il senso lo creiamo noi.",
       exampleSrc:"A: Does existence have a meaning?\nB: Existentialists answer that we create the meaning ourselves.",
       funFact:"Italian existentialism flourished in the postwar period. Writers like Alberto Moravia and Cesare Pavese explored themes of alienation and the search for meaning, blending literature with philosophy."},

      {type:"match", pairs:[
        {trg:"filosofia", src:"philosophy"},
        {trg:"coscienza", src:"consciousness"},
        {trg:"verita", src:"truth"},
        {trg:"logica", src:"logic"},
        {trg:"principio", src:"principle"}
      ]},

      {type:"fb",
       s:"La {1} studia le regole del ragionamento valido.",
       a:["logica"],
       opts:["logica","etica","filosofia","verita"],
       hint:"This discipline focuses specifically on the structure of valid reasoning, not on morality or truth content.",
       sSrc:"{1} studies the rules of valid reasoning."},

      {type:"mc",
       q:"Che differenza c'e tra 'etica' e 'morale' in italiano?",
       opts:["Sono termini perfettamente sinonimi e intercambiabili","L'etica appartiene alla sfera religiosa, la morale a quella politica","L'etica e la disciplina filosofica, la morale e la condotta pratica","La morale e un concetto piu antico e originario dell'etica"],
       ans:"L'etica e la disciplina filosofica, la morale e la condotta pratica",
       hint:"One is the academic discipline studying right and wrong. The other refers to everyday behavior and practical moral conduct."},

      {type:"mc",
       q:"Che cos'e un'ipotesi in filosofia e nella scienza?",
       opts:["Una conclusione definitiva e verificata sperimentalmente","Una regola grammaticale che governa la struttura del linguaggio","Un errore di ragionamento che invalida l'intero argomento","Una premessa iniziale non ancora dimostrata"],
       ans:"Una premessa iniziale non ancora dimostrata",
       hint:"From Greek roots meaning 'placed under.' It guides research but still needs evidence to become a proven claim."}
    ]},

    // ─── Lesson 2: Grandi pensatori e correnti filosofiche ───
    {id:"itv2_u33l2", title:"Grandi pensatori", icon:"📚", xp:15, board:true, steps:[
      {type:"intro", title:"Grandi pensatori e correnti filosofiche",
       desc:"Explore major philosophical movements and Italian thinkers. Learn to discuss intellectual traditions, debate ideas, and express nuanced opinions about complex topics.",
       goals:["Discuss major philosophical movements","Name influential Italian thinkers and their contributions","Express and defend complex opinions in formal register"]},

      {type:"teach", trg:"il pensatore", src:"the thinker", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la pensatrice.\nFrom 'pensare' (to think). 'Un grande pensatore' = a great thinker.",
       example:"A: Gramsci e stato uno dei piu grandi pensatori italiani.\nB: Le sue idee influenzano ancora il dibattito politico.",
       exampleSrc:"A: Gramsci was one of the greatest Italian thinkers.\nB: His ideas still influence political debate.",
       funFact:"Italy's tradition of pensatori spans from ancient Rome (Seneca, Marcus Aurelius) through the Renaissance (Machiavelli, Vico) to the modern era (Gramsci, Eco). Philosophy permeates Italian public life."},

      {type:"teach", trg:"la corrente", src:"the current / movement (intellectual)", pos:"noun", gender:"f",
       note:"Feminine noun. 'Corrente di pensiero' = school of thought.\nAlso means 'current' (water, electricity).",
       example:"A: L'illuminismo e una corrente filosofica fondamentale.\nB: Ha trasformato il pensiero europeo nel Settecento.",
       exampleSrc:"A: The Enlightenment is a fundamental philosophical movement.\nB: It transformed European thought in the eighteenth century.",
       funFact:"Italian uses 'corrente' (current/flow) for intellectual movements, suggesting ideas flow like water through history. Major Italian correnti include Umanesimo, Illuminismo, Idealismo, and Marxismo."},

      {type:"teach", trg:"l'illuminismo", src:"the Enlightenment", pos:"noun", gender:"m",
       note:"Masculine noun. The 18th-century intellectual movement emphasizing reason.\nFrom 'illuminare' (to illuminate/enlighten).",
       example:"A: L'illuminismo italiano ha prodotto riforme importanti.\nB: Beccaria ha rivoluzionato il diritto penale.",
       exampleSrc:"A: The Italian Enlightenment produced important reforms.\nB: Beccaria revolutionized criminal law.",
       funFact:"Cesare Beccaria's 'Dei delitti e delle pene' (On Crimes and Punishments, 1764) argued against torture and the death penalty. It influenced legal systems worldwide, including the US Constitution."},

      {type:"teach", trg:"l'umanesimo", src:"humanism", pos:"noun", gender:"m",
       note:"Masculine noun. The Renaissance movement centering on human potential.\n'Umanista' = humanist (scholar of the movement).",
       example:"A: L'umanesimo ha messo l'uomo al centro della cultura.\nB: Firenze era la capitale di questo movimento.",
       exampleSrc:"A: Humanism placed the human being at the center of culture.\nB: Florence was the capital of this movement.",
       funFact:"Italian humanism (14th-15th century) rediscovered Greek and Roman texts, launching the Renaissance. Petrarch is often called 'il padre dell'umanesimo' for his passionate study of classical authors."},

      {type:"teach", trg:"il relativismo", src:"relativism", pos:"noun", gender:"m",
       note:"Masculine noun. The view that truth depends on perspective.\n'Relativismo culturale' = cultural relativism.",
       example:"A: Il relativismo sostiene che non esistono verita assolute.\nB: Ma allora come possiamo giudicare il bene e il male?",
       exampleSrc:"A: Relativism holds that absolute truths do not exist.\nB: But then how can we judge good and evil?",
       funFact:"The debate between relativismo and universalismo (universalism) is deeply felt in Italian intellectual life. Pope Benedict XVI famously warned against 'la dittatura del relativismo' (the dictatorship of relativism) in 2005."},

      {type:"mc",
       q:"Quale movimento filosofico ha messo l'essere umano al centro della cultura nel Rinascimento?",
       opts:["L'umanesimo","L'illuminismo","L'esistenzialismo","Il relativismo"],
       ans:"L'umanesimo",
       hint:"Born in 14th-century Italy, this movement rediscovered classical texts and celebrated human potential. Florence was its heart."},

      {type:"teach", trg:"la dialettica", src:"dialectics / dialectic", pos:"noun", gender:"f",
       note:"Feminine noun. The art of reasoned debate.\n'Dialettica hegeliana' = Hegelian dialectics (thesis-antithesis-synthesis).",
       example:"A: La dialettica e essenziale nel dibattito parlamentare.\nB: Purtroppo spesso manca e si urla soltanto.",
       exampleSrc:"A: Dialectics is essential in parliamentary debate.\nB: Unfortunately it is often missing and people just shout.",
       funFact:"From Greek 'dialektike' (art of discussion). In Italian politics, 'avere buona dialettica' means being a skilled debater. The word carries positive connotations of intellectual sophistication."},

      {type:"teach", trg:"il materialismo", src:"materialism", pos:"noun", gender:"m",
       note:"Masculine noun. The philosophy that matter is the fundamental reality.\n'Materialismo storico' = historical materialism (Marxist term).",
       example:"A: Il materialismo storico analizza la societa attraverso l'economia.\nB: Gramsci ha sviluppato queste idee nel contesto italiano.",
       exampleSrc:"A: Historical materialism analyzes society through economics.\nB: Gramsci developed these ideas in the Italian context.",
       funFact:"Antonio Gramsci wrote his famous 'Quaderni del carcere' (Prison Notebooks) while imprisoned by Mussolini. His concept of 'egemonia culturale' (cultural hegemony) became central to 20th-century political thought worldwide."},

      {type:"teach", trg:"la metafisica", src:"metaphysics", pos:"noun", gender:"f",
       note:"Feminine noun. The branch of philosophy dealing with the nature of reality.\nFrom Greek 'meta' (beyond) + 'physika' (physics).",
       example:"A: La metafisica si occupa delle domande fondamentali sull'esistenza.\nB: Che cosa e reale? Perche esiste qualcosa piuttosto che niente?",
       exampleSrc:"A: Metaphysics deals with fundamental questions about existence.\nB: What is real? Why does something exist rather than nothing?",
       funFact:"The name 'metafisica' came from the accidental placement of Aristotle's writings: the books placed 'after physics' (meta ta physika) in his collected works became known as metaphysics."},

      {type:"teach", trg:"l'ideale", src:"the ideal", pos:"noun", gender:"m",
       note:"Masculine noun. Something perfect or a guiding value.\nAlso adjective: 'la soluzione ideale' = the ideal solution.",
       example:"A: L'ideale di giustizia e diverso per ogni cultura.\nB: Ma certi principi sono universali.",
       exampleSrc:"A: The ideal of justice is different for every culture.\nB: But certain principles are universal.",
       funFact:"The Italian Risorgimento (unification movement) was driven by ideali: liberty, independence, and national unity. Mazzini's 'ideale repubblicano' and Garibaldi's actions turned philosophical ideals into political reality."},

      {type:"fb",
       s:"L'{1} ha messo l'uomo al centro della cultura nel Rinascimento.",
       a:["umanesimo"],
       opts:["umanesimo","illuminismo","materialismo","relativismo"],
       hint:"This Renaissance movement rediscovered classical Greek and Roman texts. Born in Italy with Petrarch as its pioneer.",
       sSrc:"{1} placed the human being at the center of culture during the Renaissance."},

      {type:"teach", trg:"confutare", src:"to refute / to disprove", pos:"verb", gender:null,
       note:"Regular -are verb. Io confuto, tu confuti.\n'Confutare una teoria' = to refute a theory.",
       example:"A: Come possiamo confutare questa teoria?\nB: Presentando prove contrarie e argomenti solidi.",
       exampleSrc:"A: How can we refute this theory?\nB: By presenting contrary evidence and solid arguments.",
       funFact:"'Confutare' comes from Latin 'confutare' (to suppress, restrain). In Italian academic writing, 'confutare' is the formal term; in everyday speech, 'smentire' (to deny/disprove) is more common."},

      {type:"teach", trg:"sostenere", src:"to argue / to maintain / to support", pos:"verb", gender:null,
       note:"Irregular -ere verb. Io sostengo, tu sostieni.\nPassato prossimo: ho sostenuto. 'Sostenere una tesi' = to defend a thesis.",
       example:"A: Lei sostiene che la democrazia e in crisi.\nB: E porta argomenti convincenti a sostegno di questa tesi.",
       exampleSrc:"A: She argues that democracy is in crisis.\nB: And she brings convincing arguments in support of this thesis.",
       funFact:"'Sostenere' covers a wide semantic range: to support (physically), to argue (intellectually), to endure (hardship), and to take (an exam: 'sostenere un esame'). Context determines the meaning."},

      {type:"teach", trg:"la riflessione", src:"reflection / contemplation", pos:"noun", gender:"f",
       note:"Feminine noun. Deeper than 'pensiero' (thought).\n'Momento di riflessione' = moment of reflection.",
       example:"A: Questo tema richiede una riflessione profonda.\nB: Non possiamo dare risposte superficiali.",
       exampleSrc:"A: This topic requires deep reflection.\nB: We cannot give superficial answers.",
       funFact:"In Italian, 'riflessione' carries the physical meaning (reflection of light) and the intellectual one (deep thinking). The metaphor of thought as light reflecting suggests ideas illuminating the mind."},

      {type:"mc",
       q:"Che cosa significa 'confutare' una teoria?",
       opts:["Confermare con nuove prove","Dimostrare che e sbagliata","Renderla piu complessa","Spiegarla in modo semplice"],
       ans:"Dimostrare che e sbagliata",
       hint:"The opposite of confirming. You present evidence and arguments showing that the theory is wrong."},

      {type:"teach", trg:"il libero arbitrio", src:"free will", pos:"noun", gender:"m",
       note:"Masculine noun (compound). The philosophical concept of freedom of choice.\n'Credere nel libero arbitrio' = to believe in free will.",
       example:"A: Il libero arbitrio esiste davvero?\nB: I neuroscienziati mettono in dubbio la nostra liberta di scelta.",
       exampleSrc:"A: Does free will truly exist?\nB: Neuroscientists question our freedom of choice.",
       funFact:"The debate on 'libero arbitrio' was central to Renaissance theology. Erasmus wrote 'De libero arbitrio' (1524) defending free will, while Luther's reply denied it. Italian humanists like Pico della Mirandola championed human freedom of choice as the defining trait of humanity."},

      {type:"match", pairs:[
        {trg:"pensatore", src:"thinker"},
        {trg:"dialettica", src:"dialectics"},
        {trg:"metafisica", src:"metaphysics"},
        {trg:"illuminismo", src:"Enlightenment"},
        {trg:"libero arbitrio", src:"free will"}
      ]},

      {type:"fb",
       s:"Gramsci ha sviluppato il {1} storico nel contesto italiano.",
       a:["materialismo"],
       opts:["materialismo","relativismo","idealismo","umanesimo"],
       hint:"This Marxist philosophical approach analyzes society through economic structures and class relations.",
       sSrc:"Gramsci developed historical {1} in the Italian context."},

      {type:"mc",
       q:"Chi ha scritto i 'Quaderni del carcere', opera fondamentale della filosofia politica italiana?",
       opts:["Machiavelli","Beccaria","Gramsci","Croce"],
       ans:"Gramsci",
       hint:"This thinker wrote his most important work while imprisoned by Mussolini. His concept of cultural hegemony became world-famous."},

      {type:"fb",
       s:"Il professore {1} che la democrazia moderna sia in crisi profonda.",
       a:["sostiene"],
       opts:["sostiene","confuta","dubita","riflette"],
       hint:"An irregular verb meaning to argue a position or defend a claim. Used when presenting an academic thesis.",
       sSrc:"The professor {1} that modern democracy is in deep crisis."},

      {type:"mc",
       q:"Quando si chiede una 'riflessione profonda', cosa si richiede?",
       opts:["Una risposta rapida e diretta","Un'analisi superficiale del problema","Una citazione da un filosofo famoso","Una considerazione meditata e attenta"],
       ans:"Una considerazione meditata e attenta",
       hint:"Deeper than a quick thought. This noun describes the kind of careful, sustained thinking a complex topic demands."}
    ]}
  ]
};
export default UNIT_33;
