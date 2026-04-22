const LESSON_9 = {
  id:"frv2_b2g3_l9", title:"Politique et pouvoir", icon:"\u{1F3DB}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et pouvoir",
     desc:"Learn vocabulary for discussing political systems, governance, and the exercise of power in French society.",
     goals:["Learn 17 B2 political and governance words","Discuss political movements and ideologies","Express opinions about power and democracy"]},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine noun. A supporter of communism. Also adjective. Feminine: communiste.",
     example:"A: Le parti communiste a perdu beaucoup d'influence.\nB: Il reste actif dans certaines municipalités.",
     exampleSrc:"A: The communist party has lost a lot of influence.\nB: It remains active in some municipalities.",
     funFact:"The PCF (Parti Communiste Francais) once won 25% of the vote. It governed major cities and shaped French social policy for decades."},

    {type:"teach", trg:"un communard", src:"a communard", pos:"noun", gender:"m",
     note:"Masculine noun. A participant in the Paris Commune of 1871. Feminine: communarde.",
     example:"A: Les communards ont proclamé un gouvernement ouvrier.\nB: La Commune n'a duré que soixante-douze jours.",
     exampleSrc:"A: The communards proclaimed a workers' government.\nB: The Commune lasted only seventy-two days.",
     funFact:"The Paris Commune (1871) lasted 72 days and inspired revolutionary movements worldwide. The 'Mur des Federes' in Pere Lachaise cemetery commemorates the communards."},

    {type:"teach", trg:"l'avènement", src:"the advent, the accession", pos:"noun", gender:"m",
     note:"Masculine noun. The arrival of an important era or a ruler taking power.",
     example:"A: L'avènement d'Internet a tout changé.\nB: On ne peut plus imaginer le monde sans.",
     exampleSrc:"A: The advent of the Internet changed everything.\nB: We can no longer imagine the world without it.",
     funFact:"Originally used for a king's accession to the throne: 'l'avenement de Louis XIV'. Now used for any major historical arrival."},

    {type:"teach", trg:"décentraliser", src:"to decentralize", pos:"verb", gender:null,
     note:"Verb. To transfer power from central to local government.",
     example:"A: Il faut décentraliser les services publics.\nB: Cela donnerait plus de pouvoir aux régions.",
     exampleSrc:"A: We need to decentralize public services.\nB: That would give more power to the regions.",
     funFact:"France's major decentralization laws of 1982 (lois Defferre) transferred significant power from Paris to regional and local governments."},

    {type:"mc",
     q:"Quel mot désigne l'arrivée d'une nouvelle ère ou la montée au pouvoir d'un dirigeant ?",
     opts:["l'avènement","le communisme","la décentralisation","l'entrepreneuriat"],
     ans:"l'avènement",
     hint:"Originally used for a king taking the throne. Now used for any major historical arrival or beginning."},

    {type:"teach", trg:"le confédéralisme", src:"confederalism", pos:"noun", gender:"m",
     note:"Masculine noun. A political system where states retain sovereignty while cooperating.",
     example:"A: Le confédéralisme donne plus d'autonomie aux régions.\nB: C'est le modèle suisse.",
     exampleSrc:"A: Confederalism gives more autonomy to regions.\nB: It's the Swiss model.",
     funFact:"Switzerland is officially the 'Confederation helvetique'. The CH on Swiss license plates stands for Confoederatio Helvetica."},

    {type:"teach", trg:"un confrère", src:"a colleague, a fellow professional", pos:"noun", gender:"m",
     note:"Masculine noun. A colleague in the same profession. Feminine: une consoeur.",
     example:"A: Mon confrère a présenté des résultats similaires.\nB: C'est une bonne confirmation de nos travaux.",
     exampleSrc:"A: My colleague presented similar results.\nB: It's a good confirmation of our work.",
     funFact:"Used especially among doctors, lawyers, and journalists. A journalist will call another journalist 'mon confrere', never just 'collegue'."},

    {type:"teach", trg:"l'entrepreneuriat", src:"entrepreneurship", pos:"noun", gender:"m",
     note:"Masculine noun. The activity of starting and running businesses.",
     example:"A: L'entrepreneuriat est encouragé par de nouvelles lois.\nB: Les start-ups françaises sont en plein essor.",
     exampleSrc:"A: Entrepreneurship is encouraged by new laws.\nB: French start-ups are booming.",
     funFact:"'Entrepreneur' is a French word that English borrowed. France's 'French Tech' initiative has made Paris a major European start-up hub."},

    {type:"teach", trg:"un fief", src:"a fief, a stronghold", pos:"noun", gender:"m",
     note:"Masculine noun. A feudal estate, or figuratively, someone's territory or area of dominance.",
     example:"A: Cette ville est le fief du maire sortant.\nB: Il y est élu depuis trente ans.",
     exampleSrc:"A: This city is the outgoing mayor's stronghold.\nB: He has been elected there for thirty years.",
     funFact:"From Germanic 'fihu' meaning cattle/property. In modern politics, a 'fief electoral' is a politician's safe seat or home turf."},

    {type:"fb",
     s:"L'{1} de l'intelligence artificielle va transformer tous les métiers.",
     a:["avènement"],
     opts:["avènement","entrepreneuriat","confédéralisme","fief"],
     hint:"This masculine noun means the arrival or coming of a major new era or phenomenon.",
     sSrc:"The {1} of artificial intelligence will transform all professions."},

    {type:"teach", trg:"extrémiste", src:"extremist", pos:"adj", gender:null,
     note:"Adjective. Holding radical political views. Also a noun: un/une extremiste.",
     example:"A: Les discours extrémistes sont dangereux.\nB: Ils nourrissent la haine et la division.",
     exampleSrc:"A: Extremist speeches are dangerous.\nB: They fuel hatred and division.",
     funFact:"French political spectrum terminology (extreme gauche, extreme droite) is used worldwide. The concept of left/right comes from the French Revolution seating arrangement."},

    {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire politique est une vieille tactique.\nB: Ça empêche tout débat constructif.",
     exampleSrc:"A: The demonization of political opponents is an old tactic.\nB: It prevents any constructive debate.",
     funFact:"Marine Le Pen's strategy of 'dediabolisation' aimed to soften her party's image by distancing it from its extremist past."},

    {type:"teach", trg:"le déclassement", src:"downward mobility, loss of status", pos:"noun", gender:"m",
     note:"Masculine noun. Social decline or losing one's class status.",
     example:"A: La peur du déclassement touche la classe moyenne.\nB: Les gens craignent de vivre moins bien que leurs parents.",
     exampleSrc:"A: The fear of downward mobility affects the middle class.\nB: People fear living worse than their parents.",
     funFact:"'Declassement' is a major theme in French sociology. Louis Chauvel's research on generational decline made it a national debate."},

    {type:"mc",
     q:"Quel mot désigne la peur de descendre dans l'échelle sociale ?",
     opts:["l'entrepreneuriat","le déclassement","la diabolisation","le confédéralisme"],
     ans:"le déclassement",
     hint:"This noun describes the loss of social status or living standards, especially between generations."},

    {type:"teach", trg:"un aspirant", src:"a candidate, an aspiring person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who aspires to a position. Feminine: aspirante.",
     example:"A: Les aspirants au poste sont nombreux.\nB: La sélection sera très compétitive.",
     exampleSrc:"A: The candidates for the position are numerous.\nB: The selection will be very competitive.",
     funFact:"In the French military, 'aspirant' is an actual rank between warrant officer and second lieutenant. It dates back to Napoleon's army."},

    {type:"teach", trg:"un châtelain", src:"a castle owner, lord of the manor", pos:"noun", gender:"m",
     note:"Masculine noun. The owner of a chateau. Feminine: chatelaine.",
     example:"A: Le châtelain organise des visites guidées.\nB: C'est un bon moyen de financer l'entretien.",
     exampleSrc:"A: The castle owner organizes guided tours.\nB: It's a good way to finance the upkeep.",
     funFact:"Many French chatelains struggle to maintain their heritage properties. The state offers tax breaks through 'monuments historiques' classification."},

    {type:"teach", trg:"les chartes", src:"charters", pos:"noun", gender:"f",
     note:"Feminine plural noun. Official documents granting rights. Singular: une charte.",
     example:"A: La charte de l'environnement a été ajoutée à la Constitution.\nB: C'est un progrès important pour l'écologie.",
     exampleSrc:"A: The environmental charter was added to the Constitution.\nB: It's an important step for ecology.",
     funFact:"The Ecole nationale des chartes trains France's archivists and librarians. 'Chartiste' means a graduate of this prestigious school."},

    {type:"match", pairs:[
      {trg:"communard", src:"communard"},
      {trg:"fief", src:"stronghold"},
      {trg:"aspirant", src:"candidate"},
      {trg:"châtelain", src:"castle owner"},
      {trg:"chartes", src:"charters"}
    ]},

    {type:"fb",
     s:"La {1} de l'adversaire est une tactique politique qui empêche le dialogue.",
     a:["diabolisation"],
     opts:["diabolisation","décentralisation","démocratisation","déduction"],
     hint:"This noun means portraying someone as evil or demonic to discredit them.",
     sSrc:"The {1} of the opponent is a political tactic that prevents dialogue."}
  ]
};
export default LESSON_9;
