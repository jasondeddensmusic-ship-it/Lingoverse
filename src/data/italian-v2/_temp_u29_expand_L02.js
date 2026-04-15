// Unit 29 Expansion. Lesson 5: L'intelligenza emotiva
const LESSON_5 = {
  id:"itv2_u29l5", title:"L'intelligenza emotiva", icon:"💗", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'intelligenza emotiva",
     desc:"Learn vocabulary for emotional intelligence, self-regulation, and interpersonal skills. These concepts are increasingly important in Italian education and professional life.",
     goals:["Describe components of emotional intelligence","Discuss self-regulation and motivation","Express opinions about emotional skills in daily life"]},

    {type:"teach", trg:"l'intelligenza emotiva", src:"the emotional intelligence", pos:"noun", gender:"f",
     note:"Feminine compound noun. The ability to understand and manage emotions.\nAbbreviated: IE. 'Quoziente emotivo' = emotional quotient (EQ).",
     example:"A: L'intelligenza emotiva e importante quanto il QI.\nB: Aiuta nelle relazioni e nella carriera.",
     exampleSrc:"A: Emotional intelligence is as important as IQ.\nB: It helps in relationships and career.",
     funFact:"Daniel Goleman's book on emotional intelligence was a bestseller in Italy. Italian companies increasingly include 'competenze emotive' (emotional skills) in job descriptions, recognizing that technical ability alone does not guarantee success."},

    {type:"teach", trg:"l'autoconsapevolezza", src:"the self-awareness", pos:"noun", gender:"f",
     note:"Feminine noun. Compound: 'auto' (self) + 'consapevolezza' (awareness).\nKnowing your own emotions, strengths, and limitations.",
     example:"A: L'autoconsapevolezza e il primo pilastro dell'intelligenza emotiva.\nB: Chi conosce se stesso gestisce meglio le situazioni difficili.",
     exampleSrc:"A: Self-awareness is the first pillar of emotional intelligence.\nB: Those who know themselves handle difficult situations better.",
     funFact:"The ancient Greek maxim 'conosci te stesso' (know yourself) was inscribed at the Temple of Apollo at Delphi. Italian philosophy has always emphasized self-knowledge, from Socrates through the Renaissance humanists to modern psychology."},

    {type:"teach", trg:"l'autoregolazione", src:"the self-regulation", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to control impulses and manage emotions.\n'Autoregolarsi' (verb) = to self-regulate.",
     example:"A: L'autoregolazione ci permette di non reagire impulsivamente.\nB: E una capacita che si sviluppa con la pratica.",
     exampleSrc:"A: Self-regulation allows us not to react impulsively.\nB: It is an ability that develops with practice.",
     funFact:"Italian parenting traditionally encouraged emotional expression rather than restraint. The concept of 'autoregolazione' imported from Anglo-Saxon psychology sometimes clashes with the Italian cultural value of spontaneous emotional expressiveness."},

    {type:"teach", trg:"la motivazione", src:"the motivation", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le motivazioni.\n'Motivazione intrinseca/estrinseca' = intrinsic/extrinsic motivation.\n'Motivare' (verb) = to motivate.",
     example:"A: La motivazione intrinseca e piu duratura di quella estrinseca.\nB: Fare qualcosa per passione e meglio che farlo per il premio.",
     exampleSrc:"A: Intrinsic motivation lasts longer than extrinsic motivation.\nB: Doing something out of passion is better than doing it for the reward.",
     funFact:"Italian education has traditionally relied on 'motivazione estrinseca' (grades, fear of failure). Progressive educators are now pushing for more 'motivazione intrinseca,' inspired by approaches like Montessori's emphasis on curiosity-driven learning."},

    {type:"teach", trg:"la frustrazione", src:"the frustration", pos:"noun", gender:"f",
     note:"Feminine noun. The feeling when goals are blocked.\n'Tolleranza alla frustrazione' = frustration tolerance.",
     example:"A: La frustrazione e naturale quando non raggiungiamo un obiettivo.\nB: Imparare a gestirla e fondamentale per crescere.",
     exampleSrc:"A: Frustration is natural when we do not reach a goal.\nB: Learning to manage it is fundamental for growth.",
     funFact:"Italian psychologists study 'tolleranza alla frustrazione' (frustration tolerance) as a key predictor of success. Children who learn to handle disappointment early develop stronger emotional resilience. The Italian school system is debating how to better teach this skill."},

    {type:"mc",
     q:"Qual e il primo pilastro dell'intelligenza emotiva?",
     opts:["La motivazione","L'autoconsapevolezza","L'empatia","L'autoregolazione"],
     ans:"L'autoconsapevolezza",
     hint:"Before you can manage your emotions or understand others, you must first know your own feelings, strengths, and limitations."},

    {type:"teach", trg:"la gestione delle emozioni", src:"the emotion management", pos:"noun", gender:"f",
     note:"Feminine compound noun. The skill of handling feelings constructively.\n'Gestire le emozioni' = to manage emotions.",
     example:"A: La gestione delle emozioni non significa reprimerle.\nB: Significa riconoscerle e canalizzarle in modo positivo.",
     exampleSrc:"A: Emotion management does not mean repressing them.\nB: It means recognizing and channeling them positively.",
     funFact:"Italian culture values emotional expression, making 'gestione delle emozioni' a nuanced concept. The goal is not to suppress feelings (considered unhealthy and 'non italiano') but to channel them constructively. It is regulation, not repression."},

    {type:"teach", trg:"la competenza sociale", src:"the social competence", pos:"noun", gender:"f",
     note:"Feminine compound noun. Plural: le competenze sociali.\nThe ability to navigate social situations effectively.",
     example:"A: Le competenze sociali si sviluppano fin dall'infanzia.\nB: Il gioco di gruppo e essenziale per impararle.",
     exampleSrc:"A: Social competence develops from early childhood.\nB: Group play is essential for learning it.",
     funFact:"Italian society places enormous value on social skills. The ability to 'saper stare con gli altri' (knowing how to be with others) is considered as important as academic achievement. Family gatherings and piazza culture are natural training grounds."},

    {type:"fb",
     s:"L'{1} ci permette di controllare le nostre reazioni impulsive.",
     a:["autoregolazione"],
     opts:["autoregolazione","autoconsapevolezza","empatia","motivazione"],
     hint:"The ability to control impulses, manage emotions, and adapt your responses to different situations. Not reacting on automatic pilot.",
     sSrc:"{1} allows us to control our impulsive reactions."},

    {type:"teach", trg:"il burnout", src:"the burnout", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\nEmotional exhaustion from chronic stress. 'Sindrome di burnout' = burnout syndrome.",
     example:"A: Il burnout colpisce sempre piu lavoratori.\nB: Lo stress cronico porta all'esaurimento emotivo e fisico.",
     exampleSrc:"A: Burnout affects more and more workers.\nB: Chronic stress leads to emotional and physical exhaustion.",
     funFact:"Italy recognized burnout as an occupational phenomenon following the WHO's classification in 2019. Italian labor unions now negotiate 'diritto alla disconnessione' (right to disconnect) clauses, allowing workers to ignore emails outside working hours."},

    {type:"teach", trg:"la vulnerabilita", src:"the vulnerability", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nThe quality of being open to emotional risk.\n'Mostrare vulnerabilita' = to show vulnerability.",
     example:"A: Mostrare vulnerabilita non e una debolezza.\nB: Richiede piu coraggio che nascondere le emozioni.",
     exampleSrc:"A: Showing vulnerability is not a weakness.\nB: It requires more courage than hiding emotions.",
     funFact:"Traditional Italian masculinity ('machismo') discouraged men from showing vulnerability. This is changing generationally, with younger Italians more open to discussing emotions. The phrase 'forza gentile' (gentle strength) captures this cultural shift."},

    {type:"mc",
     q:"Che cos'e il 'diritto alla disconnessione' nel mondo del lavoro italiano?",
     opts:["Il diritto a lavorare senza internet","Il diritto a non rispondere a email e messaggi di lavoro fuori orario","Il diritto a disconnettersi dai social media","Il diritto a non usare il telefono in ufficio"],
     ans:"Il diritto a non rispondere a email e messaggi di lavoro fuori orario",
     hint:"A labor right protecting workers from being contacted outside working hours. It helps prevent chronic stress and emotional exhaustion."},

    {type:"match", pairs:[
      {trg:"intelligenza emotiva", src:"emotional intelligence"},
      {trg:"autoconsapevolezza", src:"self-awareness"},
      {trg:"autoregolazione", src:"self-regulation"},
      {trg:"motivazione", src:"motivation"},
      {trg:"burnout", src:"burnout"}
    ]},

    {type:"fb",
     s:"La {1} intrinseca e piu duratura di quella basata su premi esterni.",
     a:["motivazione"],
     opts:["motivazione","frustrazione","vulnerabilita","competenza"],
     hint:"The inner drive that pushes you to act. When it comes from genuine interest rather than external rewards, it tends to last longer.",
     sSrc:"Intrinsic {1} lasts longer than that based on external rewards."},

    {type:"mc",
     q:"Perche la 'gestione delle emozioni' in Italia non significa reprimerle?",
     opts:["Perche la legge vieta di reprimere le emozioni","Perche la cultura italiana valorizza l'espressione emotiva e cerca di canalizzarla, non di soffocarla","Perche gli italiani non provano emozioni forti","Perche la psicologia italiana non crede nella regolazione"],
     ans:"Perche la cultura italiana valorizza l'espressione emotiva e cerca di canalizzarla, non di soffocarla",
     hint:"Italian culture values openly expressing feelings. The goal is constructive channeling rather than suppression, which would be seen as unhealthy and inauthentic."}
  ]
};
export default LESSON_5;
