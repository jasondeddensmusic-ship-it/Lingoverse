const LESSON_9 = {
  id:"frv2_b2gap_l9", title:"Politique et societe", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et societe",
     desc:"Navigate the vocabulary of politics, governance, and social movements. Essential for understanding French news and debate.",
     goals:["Learn 20 political and social vocabulary words","Discuss governance and civic institutions","Express opinions on social issues"]},

    {type:"teach", trg:"la diplomatie", src:"diplomacy", pos:"noun", gender:"f",
     note:"Feminine noun. The art of managing international relations.",
     example:"A: La diplomatie est essentielle en temps de crise.\nB: Oui, il faut dialoguer avant tout.",
     exampleSrc:"A: Diplomacy is essential in times of crisis.\nB: Yes, we must dialogue above all.",
     funFact:"From Greek 'diploma' meaning folded document. French diplomacy shaped modern international law."},

    {type:"teach", trg:"un dissident", src:"a dissident", pos:"noun", gender:"m",
     note:"Masculine noun. A person who opposes the official position.",
     example:"A: Le dissident a ete arrete hier.\nB: Son courage inspire beaucoup de gens.",
     exampleSrc:"A: The dissident was arrested yesterday.\nB: His courage inspires many people.",
     funFact:"From Latin 'dissidere' meaning to sit apart. Used heavily during the Cold War era."},

    {type:"teach", trg:"la division", src:"the division", pos:"noun", gender:"f",
     note:"Feminine noun. A split or separation, also a military unit.",
     example:"A: Cette loi a provoque une division dans le parti.\nB: Les debats sont tres tendus.",
     exampleSrc:"A: This law caused a division within the party.\nB: The debates are very tense.",
     funFact:"In French politics, 'la division droite-gauche' (left-right divide) dates back to the Revolution of 1789."},

    {type:"teach", trg:"un diktat", src:"a diktat, an ultimatum", pos:"noun", gender:"m",
     note:"Masculine noun. An order imposed without negotiation.",
     example:"A: Ce reglement est un veritable diktat.\nB: Personne n'a ete consulte.",
     exampleSrc:"A: This regulation is a real diktat.\nB: No one was consulted.",
     funFact:"Borrowed from German. The Treaty of Versailles was called 'Diktat von Versailles' by Germans."},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine noun. Supporter of communism. Feminine: une communiste.",
     example:"A: Mon grand-pere etait communiste.\nB: Le PCF etait tres puissant a l'epoque.",
     exampleSrc:"A: My grandfather was a communist.\nB: The French Communist Party was very powerful back then.",
     funFact:"The PCF (Parti Communiste Francais) won 28% of votes in 1946, making France's left uniquely strong."},

    {type:"mc",
     q:"Quel mot designe un ordre impose sans negociation ?",
     opts:["un diktat","une diplomatie","une division","un communiste"],
     ans:"un diktat",
     hint:"A word borrowed from German, famously used about the Treaty of Versailles."},

    {type:"teach", trg:"un consul", src:"a consul", pos:"noun", gender:"m",
     note:"Masculine noun. A diplomatic official in a foreign city.",
     example:"A: Le consul peut vous aider pour le visa.\nB: Son bureau est ouvert le matin.",
     exampleSrc:"A: The consul can help you with the visa.\nB: His office is open in the morning.",
     funFact:"Napoleon was 'Premier Consul' before becoming Emperor. The title echoes ancient Rome."},

    {type:"teach", trg:"un compatriote", src:"a compatriot", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow citizen. Feminine: une compatriote.",
     example:"A: J'ai rencontre un compatriote a Tokyo.\nB: C'est toujours agreable a l'etranger.",
     exampleSrc:"A: I met a compatriot in Tokyo.\nB: It's always nice when abroad.",
     funFact:"'Com' (with) + 'patriote' (of the fatherland). Used with particular emotion by French expats."},

    {type:"teach", trg:"un confr\u00e8re", src:"a colleague, a fellow member", pos:"noun", gender:"m",
     note:"Masculine noun. A colleague in the same profession. Feminine: une consoeur.",
     example:"A: Mon confr\u00e8re a publie un article brillant.\nB: Dans quelle revue ?",
     exampleSrc:"A: My colleague published a brilliant article.\nB: In which journal?",
     funFact:"Originally meant fellow monk (con + frere = with + brother). Now used among doctors, lawyers, and journalists."},

    {type:"fb",
     s:"La {1} francaise est reconnue dans le monde entier.",
     a:["diplomatie"],
     opts:["diplomatie","division","dissidence","cassation"],
     hint:"The art of managing international relations through dialogue and negotiation.",
     sSrc:"French {1} is recognized worldwide."},

    {type:"teach", trg:"cantonal", src:"cantonal, district-level", pos:"adj", gender:null,
     note:"Adjective. Relating to a canton (administrative district).",
     example:"A: Les elections cantonales ont lieu dimanche.\nB: Tu sais pour qui voter ?",
     exampleSrc:"A: The cantonal elections are on Sunday.\nB: Do you know who to vote for?",
     funFact:"France has 2,054 cantons. In Switzerland, cantons are the equivalent of states."},

    {type:"teach", trg:"collectiviste", src:"collectivist", pos:"adj", gender:null,
     note:"Adjective. Favoring collective ownership over individual property.",
     example:"A: Cette politique est tres collectiviste.\nB: Elle met le groupe avant l'individu.",
     exampleSrc:"A: This policy is very collectivist.\nB: It puts the group before the individual.",
     funFact:"Key term in French political debate since the 19th century. Opposed to 'individualiste'."},

    {type:"teach", trg:"apatride", src:"stateless", pos:"adj", gender:null,
     note:"Adjective. Without citizenship of any country. Also used as a noun.",
     example:"A: Des millions de personnes sont apatrides.\nB: C'est un drame humanitaire.",
     exampleSrc:"A: Millions of people are stateless.\nB: It's a humanitarian tragedy.",
     funFact:"From Greek 'a' (without) + 'patris' (fatherland). Hannah Arendt wrote extensively on statelessness."},

    {type:"mc",
     q:"Quel adjectif signifie 'sans nationalite, sans pays' ?",
     opts:["apatride","cantonal","collectiviste","communiste"],
     ans:"apatride",
     hint:"From Greek roots meaning 'without fatherland'. A humanitarian term."},

    {type:"teach", trg:"la divulgation", src:"the disclosure, the divulging", pos:"noun", gender:"f",
     note:"Feminine noun. The act of making secret information public.",
     example:"A: La divulgation de ces documents est interdite.\nB: C'est une question de securite nationale.",
     exampleSrc:"A: The disclosure of these documents is forbidden.\nB: It's a matter of national security.",
     funFact:"'Divulgacher' (to spoil a plot) is a fun Quebec invention combining 'divulguer' and 'gacher'."},

    {type:"teach", trg:"le communard", src:"the Communard", pos:"noun", gender:"m",
     note:"Masculine noun. A participant in the Paris Commune of 1871.",
     example:"A: Les communards ont defendu Paris pendant 72 jours.\nB: C'est un episode heroique de l'histoire.",
     exampleSrc:"A: The Communards defended Paris for 72 days.\nB: It's a heroic episode in history.",
     funFact:"Also a cocktail: red wine mixed with blackcurrant liqueur, named for the red flags of the Commune."},

    {type:"teach", trg:"un adjoint", src:"a deputy, an assistant", pos:"noun", gender:"m",
     note:"Masculine noun. Second-in-command. Feminine: une adjointe.",
     example:"A: L'adjoint au maire a inaugure le parc.\nB: Le maire etait en deplacement.",
     exampleSrc:"A: The deputy mayor inaugurated the park.\nB: The mayor was away on a trip.",
     funFact:"From Latin 'adjungere' meaning to join to. Every French mayor has at least one 'adjoint'."},

    {type:"teach", trg:"budg\u00e9taire", src:"budgetary", pos:"adj", gender:null,
     note:"Adjective. Relating to financial budgets and spending.",
     example:"A: Les contraintes budgetaires sont severes cette annee.\nB: Il faut reduire les depenses.",
     exampleSrc:"A: The budgetary constraints are severe this year.\nB: We must reduce spending.",
     funFact:"From English 'budget', which itself came from French 'bougette' (small bag). A round trip word."},

    {type:"fb",
     s:"L'{1} au maire a inaugure la nouvelle bibliotheque.",
     a:["adjoint"],
     opts:["adjoint","consul","dissident","confr\u00e8re"],
     hint:"The deputy or second-in-command to the mayor in a French city.",
     sSrc:"The deputy mayor inaugurated the new library."},

    {type:"teach", trg:"bureaucratique", src:"bureaucratic", pos:"adj", gender:null,
     note:"Adjective. Relating to excessive official procedures and red tape.",
     example:"A: Ce processus est trop bureaucratique.\nB: Il faut simplifier les demarches.",
     exampleSrc:"A: This process is too bureaucratic.\nB: We need to simplify the procedures.",
     funFact:"French invented the word: 'bureau' (desk/office) + Greek 'kratos' (rule). Rule by desks."},

    {type:"teach", trg:"la conjoncture", src:"the economic situation", pos:"noun", gender:"f",
     note:"Feminine noun. The current state of economic affairs.",
     example:"A: La conjoncture est defavorable aux investisseurs.\nB: Les marches sont instables.",
     exampleSrc:"A: The economic situation is unfavorable for investors.\nB: Markets are unstable.",
     funFact:"Literally 'the joining together' of circumstances. French economists distinguish 'conjoncture' (short-term) from 'structure' (long-term)."},

    {type:"match", pairs:[
      {trg:"diplomatie", src:"diplomacy"},
      {trg:"diktat", src:"ultimatum"},
      {trg:"divulgation", src:"disclosure"},
      {trg:"adjoint", src:"deputy"},
      {trg:"conjoncture", src:"economic situation"}
    ]},

    {type:"mc",
     q:"Quel adjectif signifie 'relatif au budget et aux finances' ?",
     opts:["budg\u00e9taire","bureaucratique","cantonal","collectiviste"],
     ans:"budg\u00e9taire",
     hint:"A round-trip word: English borrowed 'budget' from French 'bougette', then French borrowed it back."},

    {type:"fb",
     s:"Ce processus est trop {1}, il faut le simplifier.",
     a:["bureaucratique"],
     opts:["bureaucratique","budg\u00e9taire","cantonal","diplomatique"],
     hint:"Relating to excessive official procedures. A word France itself invented from 'bureau' + Greek 'kratos'.",
     sSrc:"This process is too {1}, we need to simplify it."}
  ]
};
export default LESSON_9;
