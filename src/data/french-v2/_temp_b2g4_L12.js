const LESSON_12 = {
  id:"frv2_b2g4_l12", title:"Le monde professionnel", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde professionnel",
     desc:"Master vocabulary for the workplace, business dealings, and professional life.",
     goals:["Learn 15 professional and business words","Navigate workplace discussions in French","Use formal business vocabulary with confidence"]},

    {type:"teach", trg:"un abonne", src:"a subscriber", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who has a subscription. Feminine: abonnee.",
     example:"A: Nous avons dix mille abonnes a la newsletter.\nB: Le nombre augmente chaque mois.",
     exampleSrc:"A: We have ten thousand newsletter subscribers.\nB: The number increases every month.",
     funFact:"From Old French 'abonner' meaning to fix a boundary (as in a fixed price). Now means to subscribe."},

    {type:"teach", trg:"un administrateur", src:"an administrator, a director", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization. Feminine: administratrice.",
     example:"A: L'administrateur a convoque une reunion.\nB: Il veut discuter du budget.",
     exampleSrc:"A: The administrator called a meeting.\nB: He wants to discuss the budget.",
     funFact:"In French corporate law, 'administrateur' is a board member. Different from 'directeur' (day-to-day boss)."},

    {type:"teach", trg:"un confrere", src:"a colleague, a fellow professional", pos:"noun", gender:"m",
     note:"Masculine noun. A colleague in the same profession. Feminine: consoeur.",
     example:"A: Mon confrere avocat m'a conseille.\nB: Il a plus d'experience dans ce domaine.",
     exampleSrc:"A: My fellow lawyer advised me.\nB: He has more experience in this field.",
     funFact:"From Latin 'confrater' (brother together). Used especially among doctors, lawyers, and journalists."},

    {type:"teach", trg:"le bonus", src:"the bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra payment or benefit.",
     example:"A: Les employes recevront un bonus cette annee.\nB: Les resultats ont ete excellents.",
     exampleSrc:"A: Employees will receive a bonus this year.\nB: Results have been excellent.",
     funFact:"Borrowed from English, which took it from Latin 'bonus' (good). A circular linguistic journey."},

    {type:"teach", trg:"un best-seller", src:"a bestseller", pos:"noun", gender:"m",
     note:"Masculine noun. A book or product that sells in very large numbers.",
     example:"A: Son roman est devenu un best-seller.\nB: Il s'est vendu a un million d'exemplaires.",
     exampleSrc:"A: His novel became a bestseller.\nB: It sold a million copies.",
     funFact:"The Academie francaise suggests 'succes de librairie' instead. Nobody uses it."},

    {type:"mc",
     q:"Quel mot désigne une personne qui paie régulièrement pour accéder à un service ou une publication ?",
     opts:["un abonne","un administrateur","un confrere","un commercial"],
     ans:"un abonne",
     hint:"Someone who pays a recurring fee for access to a service, magazine, or streaming platform."},

    {type:"teach", trg:"un decorateur", src:"a decorator, an interior designer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who designs interiors. Feminine: decoratrice.",
     example:"A: La decoratrice a transforme notre appartement.\nB: On ne reconnait plus rien.",
     exampleSrc:"A: The decorator transformed our apartment.\nB: You can't recognize anything anymore.",
     funFact:"In France, 'decorateur d'interieur' is a protected professional title requiring certification."},

    {type:"teach", trg:"un charretier", src:"a carter, a wagon driver", pos:"noun", gender:"m",
     note:"Masculine noun. Historically, someone who drives a cart. Now archaic.",
     example:"A: Il jure comme un charretier.\nB: Son langage est vraiment grossier.",
     exampleSrc:"A: He swears like a sailor.\nB: His language is really crude.",
     funFact:"'Jurer comme un charretier' means to swear like a trooper. Cart drivers had famously foul mouths."},

    {type:"teach", trg:"la garderie", src:"the daycare, the nursery", pos:"noun", gender:"f",
     note:"Feminine noun. Already taught, reinforced here in professional context.",
     example:"A: L'entreprise a cree une garderie pour les employes.\nB: C'est un avantage enorme pour les parents.",
     exampleSrc:"A: The company created a daycare for employees.\nB: It's a huge benefit for parents.",
     funFact:"On-site company daycares are growing in France. Work-life balance is a major professional value."},

    {type:"fb",
     s:"Mon {1} medecin m'a recommande un specialiste.",
     a:["confrere"],
     opts:["confrere","administrateur","decorateur","abonne"],
     hint:"A fellow professional in the same field. From Latin 'confrater' meaning brother together.",
     sSrc:"My fellow {1} doctor recommended a specialist to me."},

    {type:"teach", trg:"un footballeur", src:"a football player, a soccer player", pos:"noun", gender:"m",
     note:"Masculine noun. A professional soccer player. Feminine: footballeuse.",
     example:"A: Ce footballeur gagne des millions par an.\nB: Les salaires dans le sport sont enormes.",
     exampleSrc:"A: This football player earns millions per year.\nB: Salaries in sports are enormous.",
     funFact:"France calls it 'football', never 'soccer'. The 1998 World Cup win united the nation."},

    {type:"teach", trg:"un fripier", src:"a secondhand clothes dealer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who sells used clothing. Feminine: fripiere.",
     example:"A: Le fripier a des vetements vintage incroyables.\nB: J'ai trouve une veste des annees 70.",
     exampleSrc:"A: The secondhand dealer has incredible vintage clothes.\nB: I found a 1970s jacket.",
     funFact:"From 'fripe' (rag). 'La friperie' is a thrift shop. Very trendy in France's sustainable fashion movement."},

    {type:"teach", trg:"un fumiste", src:"a fraud, a lazy person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who doesn't take things seriously. Originally: chimney specialist.",
     example:"A: Ce type est un fumiste, il ne travaille jamais.\nB: Oui, il passe son temps a bavarder.",
     exampleSrc:"A: That guy is a fraud, he never works.\nB: Yes, he spends his time chatting.",
     funFact:"Originally a chimney sweep/builder. How did chimney workers become slackers? Lost to history."},

    {type:"mc",
     q:"Que signifie l'expression 'jurer comme un charretier' ?",
     opts:["Mentir constamment","Utiliser un langage tres grossier","Conduire dangereusement","Travailler tres dur"],
     ans:"Utiliser un langage tres grossier",
     hint:"Cart drivers were famous for their colorful vocabulary. The English equivalent involves sailors."},

    {type:"teach", trg:"un grillage", src:"a wire fence", pos:"noun", gender:"m",
     note:"Masculine noun. Wire mesh fencing. Reinforced in workplace context.",
     example:"A: Le chantier est entoure d'un grillage de securite.\nB: Personne ne peut entrer sans autorisation.",
     exampleSrc:"A: The construction site is surrounded by a security fence.\nB: Nobody can enter without authorization.",
     funFact:"French workplace safety regulations are strict. 'Grillage' is mandatory around construction zones."},

    {type:"fb",
     s:"L'Academie francaise prefere 'succes de librairie' a '{1}'.",
     a:["best-seller"],
     opts:["best-seller","bonus","fumiste","commercial"],
     hint:"An English word for a book that sells in huge numbers. The French Academy disapproves of it.",
     sSrc:"The Academie francaise prefers 'succes de librairie' to '{1}'."},

    {type:"match", pairs:[
      {trg:"abonne", src:"subscriber"},
      {trg:"confrere", src:"fellow professional"},
      {trg:"decorateur", src:"interior designer"},
      {trg:"fripier", src:"secondhand dealer"},
      {trg:"fumiste", src:"fraud, slacker"}
    ]},

    {type:"mc",
     q:"Quel professionnel dessine et amenage les interieurs ?",
     opts:["un footballeur","un charretier","un decorateur","un administrateur"],
     ans:"un decorateur",
     hint:"From 'decorer' (to decorate). In France this is a certified professional title."}
  ]
};
export default LESSON_12;
