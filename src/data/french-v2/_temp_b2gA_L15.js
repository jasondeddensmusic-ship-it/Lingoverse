const LESSON_15 = {
  id:"frv2_b2gA_l15", title:"Sport et competition", icon:"\u{26BD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sport et competition",
     desc:"Talk about sports, competition, and physical achievement with precision. From football to athletics, build your B2 sports vocabulary.",
     goals:["Learn 14 sports and competition words","Discuss athletic performance","Use sports metaphors in everyday speech"]},

    {type:"teach", trg:"un footballeur", src:"a football player", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une footballeuse.\nA soccer player in European French.",
     example:"A: Ce footballeur est incroyablement rapide.\nB: Il a marque trois buts ce mois-ci.",
     exampleSrc:"A: This football player is incredibly fast.\nB: He scored three goals this month.",
     funFact:"France won the World Cup in 1998 and 2018. The 1998 team united the nation across ethnic lines."},

    {type:"teach", trg:"le frisbee", src:"the frisbee", pos:"noun", gender:"m",
     note:"Masculine noun. A flying disc thrown for sport or recreation.\nAlso: 'ultimate frisbee'.",
     example:"A: On joue au frisbee sur la plage ?\nB: Bonne idee, il y a assez de vent.",
     exampleSrc:"A: Shall we play frisbee on the beach?\nB: Good idea, there's enough wind.",
     funFact:"Ultimate frisbee is growing fast in France. The sport is known for its 'esprit du jeu' (spirit of the game) principle."},

    {type:"teach", trg:"le classement", src:"the ranking, the classification", pos:"noun", gender:"m",
     note:"Masculine noun. A ranked list or league table.\n'Classement general' = overall standings.",
     example:"A: La France est troisieme au classement mondial.\nB: C'est une belle progression.",
     exampleSrc:"A: France is third in the world rankings.\nB: That's a nice progression.",
     funFact:"The Tour de France's 'classement general' (yellow jersey standings) is the most famous ranking in cycling."},

    {type:"teach", trg:"l'endurance", src:"endurance, stamina", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to sustain prolonged effort.\n'Course d'endurance' = endurance race.",
     example:"A: L'endurance de ce marathonien est remarquable.\nB: Il s'entraine six jours par semaine.",
     exampleSrc:"A: This marathon runner's endurance is remarkable.\nB: He trains six days a week.",
     funFact:"The 24 Heures du Mans is the world's most famous endurance race. Held in France since 1923."},

    {type:"teach", trg:"la revanche", src:"the rematch, the revenge", pos:"noun", gender:"f",
     note:"Feminine noun. A return match, or getting even.\n'Prendre sa revanche' = to get one's revenge.",
     example:"A: L'equipe veut prendre sa revanche demain.\nB: La defaite d'hier les motive.",
     exampleSrc:"A: The team wants their rematch tomorrow.\nB: Yesterday's defeat motivates them.",
     funFact:"'La Revanche' is what France called its desire to reclaim Alsace-Lorraine after 1871. A deeply French concept."},

    {type:"mc",
     q:"Quel mot designe un tableau de positions dans une competition ?",
     opts:["le classement","l'endurance","la revanche","le frisbee"],
     ans:"le classement",
     hint:"A ranked list. Think of the Tour de France's yellow jersey standings."},

    {type:"teach", trg:"le parcours", src:"the course, the journey", pos:"noun", gender:"m",
     note:"Masculine noun. A route, a course, or a career path.\n'Parcours d'obstacles' = obstacle course.",
     example:"A: Son parcours professionnel est impressionnant.\nB: Il a commence comme stagiaire.",
     exampleSrc:"A: His career path is impressive.\nB: He started as an intern.",
     funFact:"'Parcours du combattant' (obstacle course) is used figuratively for any bureaucratic nightmare. Very French."},

    {type:"teach", trg:"le defi", src:"the challenge", pos:"noun", gender:"m",
     note:"Masculine noun. A challenge or dare.\n'Relever un defi' = to rise to a challenge.",
     example:"A: C'est un defi que je suis pret a relever.\nB: Bonne chance, tu en auras besoin.",
     exampleSrc:"A: It's a challenge I'm ready to take on.\nB: Good luck, you'll need it.",
     funFact:"'Les Defis du Midi' is a popular French TV show. The word has become ubiquitous in motivational speech."},

    {type:"teach", trg:"la perf", src:"the performance (informal)", pos:"noun", gender:"f",
     note:"Feminine noun. Informal abbreviation of 'performance'.\nUsed in sports and tech contexts.",
     example:"A: Il a fait une belle perf au marathon.\nB: Son temps personnel est tombe.",
     exampleSrc:"A: He had a great performance at the marathon.\nB: His personal best dropped.",
     funFact:"French loves abbreviations: 'perf', 'compet' (competition), 'recup' (recovery). Part of casual sports talk."},

    {type:"fb",
     s:"L'equipe veut prendre sa {1} apres la defaite de la semaine derniere.",
     a:["revanche"],
     opts:["revanche","endurance","classement","perf"],
     hint:"A rematch to avenge a previous loss. Also means revenge in a broader sense.",
     sSrc:"The team wants their {1} after last week's defeat."},

    {type:"teach", trg:"le podium", src:"the podium", pos:"noun", gender:"m",
     note:"Masculine noun. The winners' platform.\n'Monter sur le podium' = to make the top 3.",
     example:"A: Elle est montee sur le podium pour la troisieme fois.\nB: La medaille de bronze, c'est deja enorme.",
     exampleSrc:"A: She stepped onto the podium for the third time.\nB: A bronze medal is already huge.",
     funFact:"French athletes celebrate podium finishes passionately. 'La Marseillaise' on the podium is deeply emotional."},

    {type:"teach", trg:"l'arbitre", src:"the referee", pos:"noun", gender:"m",
     note:"Masculine noun. Also feminine: une arbitre.\nThe official who enforces rules in a match.",
     example:"A: L'arbitre a siffle un penalty.\nB: Les supporters sont furieux.",
     exampleSrc:"A: The referee called a penalty.\nB: The fans are furious.",
     funFact:"French referees are often controversial figures. 'C'est l'arbitre qui decide' is the final word in any debate."},

    {type:"teach", trg:"le supporteur", src:"the supporter, the fan", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une supportrice.\nA dedicated sports fan. From English 'supporter'.",
     example:"A: Les supporteurs chantent dans les tribunes.\nB: L'ambiance est electrique.",
     exampleSrc:"A: The supporters are singing in the stands.\nB: The atmosphere is electric.",
     funFact:"French football ultras have their own culture: tifos, chants, and choreographies. Marseille's fans are legendary."},

    {type:"mc",
     q:"Quel mot designe un obstacle ou une epreuve a surmonter ?",
     opts:["un arbitre","un defi","un parcours","un podium"],
     ans:"un defi",
     hint:"A challenge to be taken on. 'Relever' this word means to rise to the occasion."},

    {type:"teach", trg:"la mi-temps", src:"halftime", pos:"noun", gender:"f",
     note:"Feminine noun. The break between two halves of a match.\nAlso: 'a mi-temps' = part-time.",
     example:"A: Le score est de 1-0 a la mi-temps.\nB: Tout peut encore changer.",
     exampleSrc:"A: The score is 1-0 at halftime.\nB: Everything can still change.",
     funFact:"'Travailler a mi-temps' means to work part-time. Same word, completely different context."},

    {type:"fb",
     s:"L'{1} a siffle la fin du match apres le temps additionnel.",
     a:["arbitre"],
     opts:["arbitre","supporteur","podium","classement"],
     hint:"The official who enforces the rules during a match. Blows a whistle.",
     sSrc:"The {1} blew the whistle for the end of the match after extra time."},

    {type:"match", pairs:[
      {trg:"footballeur", src:"football player"},
      {trg:"parcours", src:"course, journey"},
      {trg:"podium", src:"winners' platform"},
      {trg:"supporteur", src:"fan, supporter"},
      {trg:"mi-temps", src:"halftime"}
    ]},

    {type:"mc",
     q:"Quelle qualite physique permet de maintenir un effort prolonge ?",
     opts:["le defi","le classement","l'endurance","la revanche"],
     ans:"l'endurance",
     hint:"The ability to keep going over a long period. Think of marathon runners."}
  ]
};
export default LESSON_15;
