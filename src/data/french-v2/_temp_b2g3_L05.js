const LESSON_5 = {
  id:"frv2_b2g3_l5", title:"Médias et communication", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Médias et communication",
     desc:"Learn vocabulary for discussing media, journalism, and the digital communication landscape.",
     goals:["Learn 17 B2 media and communication words","Discuss journalism and digital media","Express opinions about information and press"]},

    {type:"teach", trg:"une archive", src:"an archive", pos:"noun", gender:"f",
     note:"Feminine noun. A collection of historical records. Often used in plural: les archives.",
     example:"A: Les archives nationales conservent des documents précieux.\nB: On y trouve des textes du Moyen Âge.",
     exampleSrc:"A: The national archives preserve precious documents.\nB: You can find medieval texts there.",
     funFact:"The Archives nationales in Paris were created during the Revolution in 1790. They hold over 400 km of shelved documents."},

    {type:"teach", trg:"une dépêche", src:"a dispatch, a news wire", pos:"noun", gender:"f",
     note:"Feminine noun. An urgent message or news report, especially from a press agency.",
     example:"A: L'agence a envoyé une dépêche urgente.\nB: Que s'est-il passé ?",
     exampleSrc:"A: The agency sent an urgent dispatch.\nB: What happened?",
     funFact:"The 'Depeche d'Ems' in 1870, a manipulated telegram, provoked the Franco-Prussian War. 'La Depeche du Midi' is a major newspaper in Toulouse."},

    {type:"teach", trg:"l'espionnage", src:"espionage, spying", pos:"noun", gender:"m",
     note:"Masculine noun. The practice of spying to obtain secret information.",
     example:"A: Un cas d'espionnage industriel a été découvert.\nB: L'entreprise va porter plainte.",
     exampleSrc:"A: A case of industrial espionage was discovered.\nB: The company will press charges.",
     funFact:"The Dreyfus Affair (1894) was France's most famous espionage scandal and deeply divided French society for over a decade."},

    {type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and online writing.",
     example:"A: La blogosphère française est très active.\nB: Les blogs culinaires sont parmi les plus populaires.",
     exampleSrc:"A: The French blogosphere is very active.\nB: Food blogs are among the most popular.",
     funFact:"French is the fourth most used language in the blogosphere. France has a strong tradition of personal blogging since the early 2000s."},

    {type:"mc",
     q:"Quel mot désigne un message urgent envoyé par une agence de presse ?",
     opts:["une dépêche","une archive","un communiqué","un blog"],
     ans:"une dépêche",
     hint:"This word is associated with news agencies and urgent reporting. A famous one from Ems started a war."},

    {type:"teach", trg:"un best-seller", src:"a best-seller", pos:"noun", gender:"m",
     note:"Masculine noun. A book or product that sells in very large numbers.",
     example:"A: Son roman est devenu un best-seller en trois semaines.\nB: Il est traduit dans vingt langues.",
     exampleSrc:"A: Her novel became a best-seller in three weeks.\nB: It is translated into twenty languages.",
     funFact:"The Academie francaise frowns on this English borrowing but French readers use it daily. 'Succes de librairie' is the pure French form."},

    {type:"teach", trg:"un bonus", src:"a bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra benefit or reward beyond what is expected.",
     example:"A: Les employés ont reçu un bonus de fin d'année.\nB: C'est une bonne motivation.",
     exampleSrc:"A: The employees received an end-of-year bonus.\nB: It's good motivation.",
     funFact:"In French insurance, the 'bonus-malus' system rewards good drivers with lower premiums. The Latin words fit perfectly."},

    {type:"teach", trg:"un antihéros", src:"an antihero", pos:"noun", gender:"m",
     note:"Masculine noun. A protagonist who lacks traditional heroic qualities.",
     example:"A: Le personnage principal est un antihéros attachant.\nB: Oui, ses défauts le rendent humain.",
     exampleSrc:"A: The main character is a likable antihero.\nB: Yes, his flaws make him human.",
     funFact:"French cinema loves antiheroes. Jean-Paul Belmondo in 'A bout de souffle' (1960) defined the modern French antihero."},

    {type:"teach", trg:"un archétype", src:"an archetype", pos:"noun", gender:"m",
     note:"Masculine noun. A perfect example or original model of something.",
     example:"A: C'est l'archétype du héros romantique.\nB: Oui, il en a toutes les caractéristiques.",
     exampleSrc:"A: He is the archetype of the romantic hero.\nB: Yes, he has all the characteristics.",
     funFact:"From Greek 'arkhetupon' meaning original pattern. Jung popularized the concept of archetypes in psychology."},

    {type:"fb",
     s:"Ce roman est devenu un {1} dès sa première semaine de vente.",
     a:["best-seller"],
     opts:["best-seller","antihéros","archétype","bonus"],
     hint:"This English loanword describes a book that sells in enormous quantities.",
     sSrc:"This novel became a {1} in its first week of sales."},

    {type:"teach", trg:"un expatrié", src:"an expatriate", pos:"noun", gender:"m",
     note:"Masculine noun. A person living outside their home country. Feminine: expatriee.",
     example:"A: La communauté d'expatriés français à Londres est énorme.\nB: Oui, on dit que c'est la sixième ville française.",
     exampleSrc:"A: The French expatriate community in London is huge.\nB: Yes, they say it's the sixth French city.",
     funFact:"Around 2.5 million French citizens live abroad. They even elect 11 members to the National Assembly to represent them."},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization. Feminine: administratrice.",
     example:"A: L'administrateur du site a résolu le problème technique.\nB: Le site fonctionne à nouveau.",
     exampleSrc:"A: The site administrator resolved the technical issue.\nB: The site is working again.",
     funFact:"France's top civil servants are called 'administrateurs civils'. They are trained at Sciences Po and ENA (now INSP)."},

    {type:"teach", trg:"la dissociation", src:"dissociation, separation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of separating or disconnecting things.",
     example:"A: La dissociation entre théorie et pratique est un problème.\nB: Il faut les relier davantage.",
     exampleSrc:"A: The dissociation between theory and practice is a problem.\nB: We need to connect them more.",
     funFact:"In psychology, 'dissociation' describes a disconnection from reality. Pierre Janet, a French psychologist, first studied it in 1889."},

    {type:"mc",
     q:"Quel mot désigne un modèle original ou un exemple parfait d'un type ?",
     opts:["un administrateur","un archétype","un antihéros","un expatrié"],
     ans:"un archétype",
     hint:"This Greek-origin word means the original pattern or model. Jung made it famous in psychology."},

    {type:"teach", trg:"la division", src:"division", pos:"noun", gender:"f",
     note:"Feminine noun. A split or disagreement, or a section of an organization.",
     example:"A: La division au sein du parti est profonde.\nB: Ils ne trouvent pas de terrain d'entente.",
     exampleSrc:"A: The division within the party is deep.\nB: They can't find common ground.",
     funFact:"'Division' in French can mean math division, military division, or political split. Context determines meaning."},

    {type:"teach", trg:"un dissident", src:"a dissident", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who opposes official policy. Feminine: dissidente.",
     example:"A: Le dissident a été arrêté pour ses opinions.\nB: La communauté internationale proteste.",
     exampleSrc:"A: The dissident was arrested for his views.\nB: The international community is protesting.",
     funFact:"France has a long tradition of sheltering dissidents. Victor Hugo himself was a political exile on the island of Guernsey for 15 years."},

    {type:"teach", trg:"déconnecter", src:"to disconnect", pos:"verb", gender:null,
     note:"Verb. To unplug or separate. Figuratively: to take a break from technology.",
     example:"A: J'ai besoin de déconnecter ce week-end.\nB: Tu devrais éteindre ton téléphone.",
     exampleSrc:"A: I need to disconnect this weekend.\nB: You should turn off your phone.",
     funFact:"France passed the 'droit a la deconnexion' (right to disconnect) law in 2017, banning after-hours work emails."},

    {type:"match", pairs:[
      {trg:"archive", src:"archive"},
      {trg:"dépêche", src:"dispatch"},
      {trg:"espionnage", src:"espionage"},
      {trg:"expatrié", src:"expatriate"},
      {trg:"dissident", src:"dissident"}
    ]},

    {type:"fb",
     s:"La France a voté une loi sur le droit à la {1} pour protéger les employés.",
     a:["déconnexion"],
     opts:["déconnexion","dissociation","division","dépêche"],
     hint:"This noun relates to the right to unplug from work communications after hours.",
     sSrc:"France passed a law on the right to {1} to protect employees."}
  ]
};
export default LESSON_5;
