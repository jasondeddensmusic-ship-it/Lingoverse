const LESSON_12 = {
  id:"frv2_b2gB_l12", title:"Famille et liens sociaux", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Famille et liens sociaux",
     desc:"Expand your vocabulary for family structures, social bonds, and interpersonal relationships at B2 level.",
     goals:["Learn 10 family and social terms","Describe complex relationships","Discuss social structures formally"]},

    {type:"teach", trg:"un arriere-grand-parent", src:"a great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. The parent of a grandparent.\nPlural: des arriere-grands-parents. Feminine: une arriere-grand-mere.",
     example:"A: Mon arriere-grand-pere a vecu cent deux ans.\nB: C'est impressionnant pour son epoque.",
     exampleSrc:"A: My great-grandfather lived to one hundred and two.\nB: That's impressive for his era.",
     funFact:"France has one of the highest life expectancies in Europe. Jeanne Calment, the oldest verified person ever, was French (122 years)."},

    {type:"teach", trg:"un assiste", src:"a welfare recipient", pos:"noun", gender:"m",
     note:"Masculine noun. A person receiving government assistance.\nFeminine: une assistee. Can be pejorative in political discourse.",
     example:"A: Le mot 'assiste' est souvent utilise de maniere pejorative.\nB: Il stigmatise les personnes en difficulte.",
     exampleSrc:"A: The word 'assiste' is often used pejoratively.\nB: It stigmatizes people in difficulty.",
     funFact:"France's social protection system is among the most generous. 'L'assistanat' is a hot political topic during every election."},

    {type:"teach", trg:"la jointure", src:"the joint, the junction", pos:"noun", gender:"f",
     note:"Feminine noun. The point where two things meet.\nFaire craquer ses jointures = to crack one's knuckles.",
     example:"A: La jointure entre les deux pieces est invisible.\nB: L'artisan a fait un travail remarquable.",
     exampleSrc:"A: The joint between the two pieces is invisible.\nB: The craftsman did remarkable work.",
     funFact:"'Faire craquer ses jointures' (cracking knuckles) is considered very impolite in France. Parents scold children for it."},

    {type:"teach", trg:"l'incrustation", src:"inlay, intrusion", pos:"noun", gender:"f",
     note:"Feminine noun. Embedding a decorative material, or an unwanted presence.\nS'incruster = to outstay one's welcome.",
     example:"A: Les incrustations de nacre decorent la boite a bijoux.\nB: C'est un travail d'artisanat magnifique.",
     exampleSrc:"A: The mother-of-pearl inlays decorate the jewelry box.\nB: It's magnificent craftsmanship.",
     funFact:"S'incruster at a party means refusing to leave. French hosts drop hints like 'Il se fait tard' (it's getting late) instead of asking directly."},

    {type:"teach", trg:"un pendant", src:"a counterpart, a match", pos:"noun", gender:"m",
     note:"Masculine noun. Something that matches or corresponds to another.\nLe pendant de = the counterpart of. Also: pendant que = while.",
     example:"A: Ce tableau est le pendant de celui du salon.\nB: Ils ont ete peints par le meme artiste.",
     exampleSrc:"A: This painting is the counterpart of the one in the living room.\nB: They were painted by the same artist.",
     funFact:"'Pendant' as a noun (counterpart) and 'pendant' as a preposition (during) look identical but have completely different origins."},

    {type:"teach", trg:"nous-memes", src:"ourselves", pos:"pron", gender:null,
     note:"Emphatic pronoun. Adds emphasis to 'nous'.\nAlways hyphenated. Used for contrast or emphasis.",
     example:"A: Nous l'avons fait nous-memes.\nB: Sans aucune aide exterieure.",
     exampleSrc:"A: We did it ourselves.\nB: Without any outside help.",
     funFact:"French emphatic pronouns (moi-meme, toi-meme, etc.) are used much more in formal writing than in casual speech."},

    {type:"teach", trg:"le primaire", src:"primary school, primary level", pos:"noun", gender:"m",
     note:"Masculine noun. Primary education level (ages 6-11 in France).\nAlso adjective: l'ecole primaire, les couleurs primaires.",
     example:"A: Mon fils entre au primaire en septembre.\nB: Deja! Le temps passe si vite.",
     exampleSrc:"A: My son starts primary school in September.\nB: Already! Time flies so fast.",
     funFact:"French primary school runs Monday to Friday with Wednesday afternoons off. This uniquely French rhythm persists despite reforms."},

    {type:"teach", trg:"un oral", src:"an oral exam", pos:"noun", gender:"m",
     note:"Masculine noun. A spoken examination.\nPasser un oral = to take an oral exam. L'oral du bac = the bac oral exam.",
     example:"A: L'oral de francais m'inquiete enormement.\nB: Tu devrais t'entrainer devant un miroir.",
     exampleSrc:"A: The French oral exam worries me enormously.\nB: You should practice in front of a mirror.",
     funFact:"The baccalaureat includes oral exams called 'le Grand Oral' since 2021. Students present a topic and answer questions for 20 minutes."},

    {type:"teach", trg:"un pamphlretaire", src:"a pamphleteer", pos:"noun", gender:"m",
     note:"Masculine noun. A writer of pamphlets, especially political or satirical ones.\nFeminine: une pamphletaire.",
     example:"A: Voltaire etait un celebre pamphletaire.\nB: Ses ecrits ont bouleverse la societe de son epoque.",
     exampleSrc:"A: Voltaire was a famous pamphleteer.\nB: His writings shook up the society of his time.",
     funFact:"French pamphleteering tradition stretches from the Revolution to Charlie Hebdo. Satirical writing is deeply embedded in French culture."},

    {type:"teach", trg:"un premier", src:"a prime minister, a first one", pos:"noun", gender:"m",
     note:"Masculine noun. The first or most important person.\nLe Premier ministre = the Prime Minister.",
     example:"A: Le Premier ministre a prononce un discours important.\nB: Il a annonce de nouvelles reformes economiques.",
     exampleSrc:"A: The Prime Minister gave an important speech.\nB: He announced new economic reforms.",
     funFact:"France has both a President and a Prime Minister. When they are from different parties, it is called 'cohabitation'."},

    {type:"mc", q:"Que signifie 's'incruster' a une fete?",
     opts:["Rester trop longtemps","Arriver en avance","Apporter un cadeau","Danser toute la nuit"],
     ans:"Rester trop longtemps",
     hint:"The verb implies embedding yourself somewhere you are no longer welcome"},

    {type:"fb", s:"Mon {1} a connu les deux guerres mondiales.",
     a:["arriere-grand-pere"], opts:["arriere-grand-pere","premier","pendant","oral"],
     hint:"A male relative who is two steps up the family tree: your father's or mother's father's father.",
     sSrc:"My {1} experienced both world wars."},

    {type:"mc", q:"En France, le primaire correspond a quels ages?",
     opts:["6 a 11 ans","3 a 6 ans","11 a 15 ans","15 a 18 ans"],
     ans:"6 a 11 ans",
     hint:"This level comes after maternelle and before college"},

    {type:"match", pairs:[
      {trg:"un arriere-grand-parent", src:"a great-grandparent"},
      {trg:"la jointure", src:"a joint"},
      {trg:"un pendant", src:"a counterpart"},
      {trg:"nous-memes", src:"ourselves"}
    ]},

    {type:"fb", s:"Nous l'avons construit {1}, sans aide.",
     a:["nous-memes"], opts:["nous-memes","eux-memes","vous-memes","soi-meme"],
     hint:"The emphatic first person plural pronoun meaning 'ourselves'",
     sSrc:"We built it {1}, without help."},

    {type:"mc", q:"Qu'est-ce que 'la cohabitation' en politique francaise?",
     opts:["Un president et un premier ministre de partis differents","Deux partis qui fusionnent","Un gouvernement de coalition","Des elections simultanees"],
     ans:"Un president et un premier ministre de partis differents",
     hint:"This uniquely French political situation occurs when executive power is shared"},

    {type:"fb", s:"L'{1} du baccalaureat dure vingt minutes.",
     a:["oral"], opts:["oral","primaire","pendant","premier"],
     hint:"The spoken examination component where students present and answer questions",
     sSrc:"The baccalaureat {1} lasts twenty minutes."},

    {type:"mc", q:"Le mot 'assiste' est souvent utilise de maniere:",
     opts:["Pejorative","Positive","Neutre","Scientifique"],
     ans:"Pejorative",
     hint:"This term for welfare recipients often carries a negative connotation in political debate"},

    {type:"fb", s:"Ce tableau est le {1} de celui que nous avons vu hier.",
     a:["pendant"], opts:["pendant","premier","oral","primaire"],
     hint:"The noun meaning a matching counterpart or companion piece",
     sSrc:"This painting is the {1} of the one we saw yesterday."},

    {type:"match", pairs:[
      {trg:"un assiste", src:"a welfare recipient"},
      {trg:"l'incrustation", src:"inlay / intrusion"},
      {trg:"un oral", src:"an oral exam"},
      {trg:"le primaire", src:"primary school"}
    ]}
  ]
};
export default LESSON_12;
