// Batch 3 — Unit 33 Lesson 2 (Philosophy: Aesthetics & Epistemology)
const BATCH3_L_2 = {
  id:"itv2_u33l_b3_2", title:"Estetica e conoscenza", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"Estetica e conoscenza",
     desc:"Explore vocabulary for aesthetics, epistemology, and the philosophy of knowledge. These concepts are essential for understanding Italian art criticism and academic discourse.",
     goals:["Discuss aesthetics and beauty in philosophical terms","Describe theories of knowledge and belief","Use formal vocabulary for intellectual argumentation"]},

    {type:"teach", trg:"l'estetica", src:"aesthetics", pos:"noun", gender:"f",
     note:"Feminine noun. The philosophy of beauty and art.\n'Giudizio estetico' = aesthetic judgment. 'Valore estetico' = aesthetic value.",
     example:"A: L'estetica studia il bello e l'esperienza artistica.\nB: Per gli italiani, la bellezza e un valore fondamentale.",
     exampleSrc:"A: Aesthetics studies beauty and artistic experience.\nB: For Italians, beauty is a fundamental value.",
     funFact:"Benedetto Croce's 'Estetica come scienza dell'espressione' (1902) redefined aesthetics as the science of expression. His idealist philosophy dominated Italian culture for decades and still influences art criticism today."},

    {type:"teach", trg:"la contemplazione", src:"contemplation", pos:"noun", gender:"f",
     note:"Feminine noun. Deep, focused reflection. 'Vita contemplativa' = contemplative life.\nOpposite: 'vita activa' = active life.",
     example:"A: La contemplazione di un'opera d'arte richiede tempo e silenzio.\nB: Non si puo capire un quadro con uno sguardo rapido.",
     exampleSrc:"A: The contemplation of a work of art requires time and silence.\nB: You cannot understand a painting with a quick glance.",
     funFact:"Italian monasticism perfected the art of contemplazione. Benedictine monks in Monte Cassino and Franciscans in Assisi created spaces designed for deep reflection. The Italian museum tradition inherits this contemplative approach."},

    {type:"teach", trg:"la conoscenza", src:"knowledge", pos:"noun", gender:"f",
     note:"Feminine noun. 'Teoria della conoscenza' = theory of knowledge (epistemology).\n'Conoscenza empirica/razionale' = empirical/rational knowledge.",
     example:"A: La conoscenza scientifica si basa sull'osservazione.\nB: Ma anche l'intuizione gioca un ruolo importante.",
     exampleSrc:"A: Scientific knowledge is based on observation.\nB: But intuition also plays an important role.",
     funFact:"Italian distinguishes 'conoscenza' (knowledge of facts/people) from 'sapere' (knowing how, skill-based knowledge). This mirrors the philosophical distinction between 'knowledge that' and 'knowledge how.'"},

    {type:"teach", trg:"il relativismo morale", src:"moral relativism", pos:"noun", gender:"m",
     note:"Masculine compound noun. The view that moral judgments are not universal.\nOpposite: 'l'universalismo morale.'",
     example:"A: Il relativismo morale afferma che il bene e il male dipendono dalla cultura.\nB: Ma ci sono limiti: la tortura e sempre sbagliata?",
     exampleSrc:"A: Moral relativism claims that good and evil depend on culture.\nB: But are there limits: is torture always wrong?",
     funFact:"Pope Benedict XVI's famous condemnation of the 'dittatura del relativismo' (dictatorship of relativism) in 2005 set the terms for a major Italian intellectual debate that continues to this day."},

    {type:"teach", trg:"il sublime", src:"the sublime", pos:"noun", gender:"m",
     note:"Masculine noun. An experience of overwhelming beauty or grandeur.\n'Esperienza del sublime' = experience of the sublime.",
     example:"A: Le Alpi offrono un'esperienza del sublime.\nB: La grandezza della natura ci fa sentire piccoli.",
     exampleSrc:"A: The Alps offer an experience of the sublime.\nB: The grandeur of nature makes us feel small.",
     funFact:"The Italian tradition of the 'Grand Tour' (17th-19th centuries) was driven by the search for the sublime: European travelers came to Italy to experience beauty that overwhelmed the senses and elevated the spirit."},

    {type:"mc",
     q:"Chi scrisse 'Estetica come scienza dell'espressione,' ridefinendo la filosofia dell'arte?",
     opts:["Machiavelli","Gramsci","Croce","Eco"],
     ans:"Croce",
     hint:"This Neapolitan philosopher's 1902 work dominated Italian intellectual life for decades. His idealist aesthetics shaped art criticism."},

    {type:"teach", trg:"il giudizio", src:"judgment", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i giudizi.\n'Giudizio critico' = critical judgment. 'Giudizio di valore' = value judgment.",
     example:"A: Il giudizio critico richiede competenza e distacco.\nB: Non basta dire 'mi piace' o 'non mi piace.'",
     exampleSrc:"A: Critical judgment requires competence and detachment.\nB: It is not enough to say 'I like it' or 'I do not like it.'",
     funFact:"Kant's distinction between 'giudizio determinante' (applying rules to cases) and 'giudizio riflettente' (finding rules for cases) is taught in every Italian liceo philosophy class. Italian students encounter these concepts at age 17-18."},

    {type:"teach", trg:"l'intuizione", src:"intuition", pos:"noun", gender:"f",
     note:"Feminine noun. Direct knowledge without conscious reasoning.\n'Per intuizione' = intuitively. 'Intuizione artistica' = artistic intuition.",
     example:"A: L'intuizione spesso precede la dimostrazione razionale.\nB: Molte scoperte scientifiche sono nate da un'intuizione.",
     exampleSrc:"A: Intuition often precedes rational demonstration.\nB: Many scientific discoveries were born from an intuition.",
     funFact:"Croce placed 'intuizione' at the center of his aesthetics: art is the intuitive expression of feeling. This idea influenced Italian art education, which emphasizes intuitive creativity alongside technical skill."},

    {type:"teach", trg:"la coscienza critica", src:"critical consciousness", pos:"noun", gender:"f",
     note:"Feminine compound noun. The ability to analyze and question assumptions.\n'Sviluppare la coscienza critica' = to develop critical consciousness.",
     example:"A: L'istruzione deve sviluppare la coscienza critica.\nB: Non basta memorizzare: bisogna saper valutare.",
     exampleSrc:"A: Education must develop critical consciousness.\nB: Memorizing is not enough: one must know how to evaluate.",
     funFact:"Italian education values 'coscienza critica' highly. The 'esame di maturita' (school-leaving exam) tests not just knowledge but the ability to connect ideas, argue positions, and demonstrate independent thinking."},

    {type:"fb",
     s:"Le Alpi offrono un'esperienza del {1} che fa sentire la grandezza della natura.",
     a:["sublime"],
     opts:["sublime","giudizio","estetica","conoscenza"],
     hint:"An overwhelming experience of beauty or grandeur that makes us feel small before nature. A key concept in Romantic philosophy.",
     sSrc:"The Alps offer an experience of the {1} that makes you feel nature's grandeur."},

    {type:"teach", trg:"la dialettica hegeliana", src:"Hegelian dialectics", pos:"noun", gender:"f",
     note:"Feminine compound noun. Hegel's method of thesis, antithesis, synthesis.\n'Tesi, antitesi, sintesi' = thesis, antithesis, synthesis.",
     example:"A: La dialettica hegeliana procede per tesi, antitesi e sintesi.\nB: Ogni conflitto produce una soluzione superiore.",
     exampleSrc:"A: Hegelian dialectics proceeds through thesis, antithesis, and synthesis.\nB: Every conflict produces a superior solution.",
     funFact:"Italian idealism, led by Croce and Giovanni Gentile, deeply engaged with Hegel. Gentile became fascism's official philosopher, while Croce opposed the regime. Their rivalry shows how the same philosophical tradition can serve opposite politics."},

    {type:"teach", trg:"la fenomenologia", src:"phenomenology", pos:"noun", gender:"f",
     note:"Feminine noun. The study of structures of experience and consciousness.\n'Approccio fenomenologico' = phenomenological approach.",
     example:"A: La fenomenologia studia come sperimentiamo il mondo.\nB: Non la realta oggettiva, ma la nostra esperienza di essa.",
     exampleSrc:"A: Phenomenology studies how we experience the world.\nB: Not objective reality, but our experience of it.",
     funFact:"Italian phenomenology, developed by Enzo Paci and Antonio Banfi in Milan, connected Husserl's abstract philosophy to concrete social issues. The Italian school uniquely blended phenomenology with Marxism and existentialism."},

    {type:"teach", trg:"l'ermeneutica", src:"hermeneutics", pos:"noun", gender:"f",
     note:"Feminine noun. The theory and practice of interpretation.\n'Ermeneutica del testo' = textual hermeneutics.",
     example:"A: L'ermeneutica ci insegna che ogni testo ha molteplici interpretazioni.\nB: Il significato non e mai fisso e definitivo.",
     exampleSrc:"A: Hermeneutics teaches us that every text has multiple interpretations.\nB: Meaning is never fixed and final.",
     funFact:"Emilio Betti, an Italian legal scholar, developed a rigorous hermeneutic theory in the 1950s that influenced legal interpretation worldwide. His work bridges philosophy and practical law, showing how interpretation shapes justice."},

    {type:"mc",
     q:"Che cosa studia la fenomenologia?",
     opts:["Le leggi della fisica che governano i fenomeni naturali","Le strutture dell'esperienza e come percepiamo il mondo","I fenomeni paranormali e le esperienze mistiche","L'evoluzione storica dei fenomeni sociali e politici"],
     ans:"Le strutture dell'esperienza e come percepiamo il mondo",
     hint:"Not objective reality itself, but how we experience it. The structures of consciousness and perception are its focus."},

    {type:"match", pairs:[
      {trg:"estetica", src:"aesthetics"},
      {trg:"conoscenza", src:"knowledge"},
      {trg:"intuizione", src:"intuition"},
      {trg:"ermeneutica", src:"hermeneutics"},
      {trg:"sublime", src:"the sublime"}
    ]},

    {type:"fb",
     s:"L'{1} ci insegna che ogni testo ammette molteplici interpretazioni.",
     a:["ermeneutica"],
     opts:["ermeneutica","estetica","fenomenologia","dialettica"],
     hint:"The theory and practice of interpretation. It teaches us that meaning is never fixed and every text can be read in multiple ways.",
     sSrc:"{1} teaches us that every text admits multiple interpretations."},

    {type:"mc",
     q:"Perche Croce e Gentile, partendo dalla stessa tradizione filosofica, finirono su posizioni politiche opposte?",
     opts:["Perche uno era monarchico e l'altro repubblicano","Perche Croce si oppose al fascismo mentre Gentile ne divenne il filosofo ufficiale","Perche uno era cattolico e l'altro ateo","Perche uno insegnava a Napoli e l'altro a Roma"],
     ans:"Perche Croce si oppose al fascismo mentre Gentile ne divenne il filosofo ufficiale",
     hint:"Both were Italian idealists, but one became the regime's intellectual champion while the other openly opposed it. Philosophy does not guarantee political alignment."}
  ,{type:"match",pairs:[{trg:"la contemplazione",src:"contemplation"},{trg:"il relativismo morale",src:"moral relativism"},{trg:"il giudizio",src:"judgment"},{trg:"la coscienza critica",src:"critical consciousness"},{trg:"la dialettica hegeliana",src:"Hegelian dialectics"},{trg:"la fenomenologia",src:"phenomenology"}]},
{type:"fb",s:"Le Alpi e il mare offrono un'esperienza del {1} che travolge.",a:["il sublime"],opts:["il sublime","il giudizio","la fenomenologia","la conoscenza"],hint:"The philosophical branch concerned with beauty and the nature of art.",sSrc:"The {1} studies beauty and artistic taste."}]
};
export default BATCH3_L_2;
