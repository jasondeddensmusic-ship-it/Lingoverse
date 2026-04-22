const LESSON_18 = {
  id:"frv2_b2gA_l18", title:"Rhetorique et style", icon:"\u{1F4DD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Rhetorique et style",
     desc:"Master the vocabulary of rhetoric, writing style, and literary devices. Essential for academic French and the art of the essay.",
     goals:["Learn 14 rhetoric and style words","Discuss literary techniques precisely","Use formal essay vocabulary with confidence"]},

    {type:"teach", trg:"le pleonasme", src:"the pleonasm, the redundancy", pos:"noun", gender:"m",
     note:"Masculine noun. Using more words than necessary to express an idea.\n'Monter en haut' is a classic example.",
     example:"A: 'Monter en haut' est un pleonasme.\nB: Oui, 'monter' suffit, c'est toujours vers le haut.",
     exampleSrc:"A: 'Going up upward' is a pleonasm.\nB: Yes, 'going up' suffices, it's always upward.",
     funFact:"French teachers love correcting pleonasmes. 'Prevoir a l'avance' and 'ajouter en plus' are common mistakes."},

    {type:"teach", trg:"la physionomie", src:"the physiognomy, the appearance", pos:"noun", gender:"f",
     note:"Feminine noun. The general appearance of a face or a place.\nAlso: a physiognomist's skill.",
     example:"A: La physionomie du quartier a change.\nB: De nouveaux immeubles ont ete construits.",
     exampleSrc:"A: The appearance of the neighborhood has changed.\nB: New buildings have been constructed.",
     funFact:"'Avoir la memoire des physionomies' means never forgetting a face. A useful skill in French social life."},

    {type:"teach", trg:"la phonetique", src:"phonetics", pos:"noun", gender:"f",
     note:"Feminine noun. The study of speech sounds.\nAlso adjective: 'alphabet phonetique'.",
     example:"A: La phonetique francaise est complexe.\nB: Les liaisons sont particulierement difficiles.",
     exampleSrc:"A: French phonetics is complex.\nB: Liaisons are particularly difficult.",
     funFact:"French has nasal vowels, silent letters, and liaisons. The 'Alphabet Phonetique International' was co-created by a Frenchman."},

    {type:"teach", trg:"un idiomatisme", src:"an idiom, an idiomatic expression", pos:"noun", gender:"m",
     note:"Masculine noun. An expression unique to a language.\n'C'est du chinois' = it's Greek to me.",
     example:"A: Les idiomatismes sont le sel d'une langue.\nB: Ils sont souvent intraduisibles.",
     exampleSrc:"A: Idioms are the spice of a language.\nB: They are often untranslatable.",
     funFact:"French is rich in idioms. 'Avoir le cafard' (to feel down, literally: to have the cockroach) is uniquely French."},

    {type:"teach", trg:"la concision", src:"conciseness", pos:"noun", gender:"f",
     note:"Feminine noun. Expressing much in few words.\nHighly valued in French essay writing.",
     example:"A: La concision de son style est admirable.\nB: Pas un mot de trop.",
     exampleSrc:"A: The conciseness of his style is admirable.\nB: Not a word too many.",
     funFact:"French schools teach 'dissertation' writing that prizes concision. Pascal wrote: 'I made this letter longer because I lacked the time to make it shorter.'"},

    {type:"mc",
     q:"Quel mot designe l'emploi de mots inutiles dans une phrase ?",
     opts:["le pleonasme","l'idiomatisme","la concision","la phonetique"],
     ans:"le pleonasme",
     hint:"A redundancy. 'Monter en haut' uses more words than needed since 'monter' already means upward."},

    {type:"teach", trg:"la metaphore", src:"the metaphor", pos:"noun", gender:"f",
     note:"Feminine noun. A figure of speech comparing two things without 'comme'.\n'Filee' = extended metaphor.",
     example:"A: 'La vie est un voyage' est une metaphore classique.\nB: Elle inspire et fait reflechir.",
     exampleSrc:"A: 'Life is a journey' is a classic metaphor.\nB: It inspires and makes you think.",
     funFact:"French students must identify and analyze metaphors in the 'commentaire de texte' at the Bac. A rite of passage."},

    {type:"teach", trg:"la litote", src:"the litotes, the understatement", pos:"noun", gender:"f",
     note:"Feminine noun. Saying less to mean more.\n'Ce n'est pas mal' = it's excellent.",
     example:"A: Quand elle dit 'ce n'est pas mal', elle veut dire 'c'est excellent'.\nB: C'est typiquement francais.",
     exampleSrc:"A: When she says 'it's not bad', she means 'it's excellent'.\nB: That's typically French.",
     funFact:"Corneille's 'Va, je ne te hais point' (Go, I don't hate you) is the most famous litote in French literature."},

    {type:"teach", trg:"l'antithese", src:"the antithesis", pos:"noun", gender:"f",
     note:"Feminine noun. The opposite of something. Also a rhetorical device using contrasts.",
     example:"A: Il utilise l'antithese pour creer un effet dramatique.\nB: Le contraste entre riche et pauvre est frappant.",
     exampleSrc:"A: He uses antithesis to create a dramatic effect.\nB: The contrast between rich and poor is striking.",
     funFact:"Victor Hugo was the master of antithesis. His writing constantly opposes light and dark, good and evil."},

    {type:"fb",
     s:"'Ce n'est pas mal' est une {1} : cela signifie que c'est tres bien.",
     a:["litote"],
     opts:["litote","metaphore","antithese","pleonasme"],
     hint:"A figure of speech where you say less to mean more. Understatement.",
     sSrc:"'It's not bad' is a {1}: it means it's very good."},

    {type:"teach", trg:"l'ironie", src:"irony", pos:"noun", gender:"f",
     note:"Feminine noun. Saying the opposite of what you mean.\n'Ironie du sort' = irony of fate.",
     example:"A: L'ironie de la situation est evidente.\nB: Celui qui donne des conseils n'en suit aucun.",
     exampleSrc:"A: The irony of the situation is obvious.\nB: The one giving advice follows none of it.",
     funFact:"French humor is built on irony. 'C'est ironique' is said with a raised eyebrow and a knowing smile."},

    {type:"teach", trg:"l'ellipse", src:"the ellipsis (literary)", pos:"noun", gender:"f",
     note:"Feminine noun. Omitting words that are implied.\nCreates speed and impact in writing.",
     example:"A: L'ellipse narrative accelere le recit.\nB: On passe de l'enfance a l'age adulte en une phrase.",
     exampleSrc:"A: Narrative ellipsis speeds up the story.\nB: We go from childhood to adulthood in one sentence.",
     funFact:"French cinema loves ellipsis. Godard's jump cuts in 'A bout de souffle' revolutionized filmmaking."},

    {type:"teach", trg:"la digression", src:"the digression", pos:"noun", gender:"f",
     note:"Feminine noun. A temporary departure from the main topic.",
     example:"A: Pardonnez cette digression, revenons au sujet.\nB: Pas de probleme, c'etait interessant.",
     exampleSrc:"A: Forgive this digression, let's return to the topic.\nB: No problem, it was interesting.",
     funFact:"Montaigne's 'Essais' are famous for their digressions. He wandered from topic to topic with delight."},

    {type:"mc",
     q:"Quelle figure de style oppose deux idees contraires pour creer un effet ?",
     opts:["la digression","l'antithese","la metaphore","l'ellipse"],
     ans:"l'antithese",
     hint:"Victor Hugo's favorite device. Placing opposites side by side for dramatic contrast."},

    {type:"teach", trg:"la nuance", src:"the nuance, the shade of meaning", pos:"noun", gender:"f",
     note:"Feminine noun. A subtle difference in meaning or tone.\nFrench culture prizes nuance above all.",
     example:"A: Il y a une nuance entre 'savoir' et 'connaitre'.\nB: 'Savoir' c'est intellectuel, 'connaitre' c'est par experience.",
     exampleSrc:"A: There is a nuance between 'savoir' and 'connaitre'.\nB: 'Savoir' is intellectual, 'connaitre' is through experience.",
     funFact:"'C'est plus nuance que ca' is perhaps the most French sentence ever. Nuance is a national value."},

    {type:"fb",
     s:"L'{1} narrative permet de passer rapidement d'une epoque a une autre.",
     a:["ellipse"],
     opts:["ellipse","digression","ironie","antithese"],
     hint:"Omitting parts of a story to speed up the narrative. Skipping ahead in time.",
     sSrc:"Narrative {1} allows jumping quickly from one era to another."},

    {type:"match", pairs:[
      {trg:"metaphore", src:"metaphor"},
      {trg:"litote", src:"understatement"},
      {trg:"ironie", src:"irony"},
      {trg:"digression", src:"digression"},
      {trg:"nuance", src:"shade of meaning"}
    ]},

    {type:"mc",
     q:"Quel mot designe la qualite de s'exprimer avec peu de mots ?",
     opts:["la physionomie","la phonetique","la concision","la digression"],
     ans:"la concision",
     hint:"Expressing much in few words. Pascal apologized for writing a long letter because he lacked time to shorten it."}
  ]
};
export default LESSON_18;
