const LESSON_9 = {
  id:"frv2_a1gap_l9", title:"Le monde du travail", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde du travail",
     desc:"Professions, business, and the working world. Learn to talk about what people do for a living.",
     goals:["Learn 20 words about professions and work","Describe jobs and workplaces","Talk about business activities"]},

    {type:"teach", trg:"l'avocat", src:"the lawyer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'avocate'. Also means 'avocado'!",
     example:"A: Tu fais quoi comme travail ?\nB: Je suis avocat.",
     exampleSrc:"A: What do you do for work?\nB: I'm a lawyer.",
     funFact:"Yes, 'avocat' means both lawyer and avocado. Context always makes it clear which one!"},

    {type:"teach", trg:"l'artisan", src:"the craftsman", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'artisane'. A skilled manual worker.",
     example:"A: Qui a fait cette table ?\nB: Un artisan du village.",
     exampleSrc:"A: Who made this table?\nB: A craftsman from the village.",
     funFact:"French 'artisanat' (craftsmanship) is protected. Only real artisans can use the label 'artisanal'."},

    {type:"teach", trg:"l'artisanat", src:"the craftsmanship, the handicraft", pos:"noun", gender:"m",
     note:"Masculine noun. The trade or products of skilled craftsmen.",
     example:"A: Tu aimes l'artisanat local ?\nB: Oui, surtout la poterie.",
     exampleSrc:"A: Do you like local craftsmanship?\nB: Yes, especially pottery.",
     funFact:"Each French region has its own 'artisanat': Provence lavender soap, Limoges porcelain, Bayonne chocolate."},

    {type:"teach", trg:"l'affaire", src:"the business, the matter", pos:"noun", gender:"f",
     note:"Feminine noun. Plural 'les affaires' means business or belongings.",
     example:"A: C'est une bonne affaire ?\nB: Oui, le prix est très bas !",
     exampleSrc:"A: Is it a good deal?\nB: Yes, the price is very low!",
     funFact:"'Homme/femme d'affaires' means businessperson. 'C'est mon affaire' means 'that's my business'."},

    {type:"teach", trg:"l'action", src:"the action, the share (stock)", pos:"noun", gender:"f",
     note:"Feminine noun. In business, also means a company stock share.",
     example:"A: Il faut passer à l'action.\nB: Tu as raison, on commence !",
     exampleSrc:"A: We need to take action.\nB: You're right, let's start!",
     funFact:"On the stock market, 'acheter des actions' means to buy shares. Same word, very different world."},

    {type:"mc",
     q:"Quel mot signifie à la fois 'lawyer' et 'avocado' ?",
     opts:["avocat","artisan","action","affaire"],
     ans:"avocat",
     hint:"This word is a famous French homonym with a legal meaning and a culinary one."},

    {type:"teach", trg:"l'activité", src:"the activity", pos:"noun", gender:"f",
     note:"Feminine noun. Any occupation, hobby, or business operation.",
     example:"A: Quelle est ton activité préférée ?\nB: J'adore la randonnée.",
     exampleSrc:"A: What is your favorite activity?\nB: I love hiking.",
     funFact:"'Activités extra-scolaires' are after-school activities. French kids typically do sports or arts after school."},

    {type:"teach", trg:"l'administration", src:"the administration", pos:"noun", gender:"f",
     note:"Feminine noun. Government offices or the act of managing.",
     example:"A: Tu travailles dans l'administration ?\nB: Oui, à la mairie.",
     exampleSrc:"A: Do you work in administration?\nB: Yes, at the town hall.",
     funFact:"French bureaucracy is legendary. The word 'bureaucratie' was actually coined in French in the 1700s."},

    {type:"teach", trg:"administratif", src:"administrative", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'administrative'. Related to paperwork and offices.",
     example:"A: C'est une tâche administrative ?\nB: Oui, beaucoup de papiers.",
     exampleSrc:"A: Is this an administrative task?\nB: Yes, lots of paperwork.",
     funFact:"The French love of 'démarches administratives' (administrative procedures) is a national running joke."},

    {type:"teach", trg:"l'association", src:"the association, the organization", pos:"noun", gender:"f",
     note:"Feminine noun. A non-profit group or club.",
     example:"A: Tu fais partie d'une association ?\nB: Oui, une association sportive.",
     exampleSrc:"A: Are you part of an association?\nB: Yes, a sports association.",
     funFact:"France has 1.3 million associations. The 'loi 1901' governs non-profits and is central to French civic life."},

    {type:"fb",
     s:"C'est une bonne {1}, le prix est très bas !",
     a:["affaire"],
     opts:["affaire","action","activité","association"],
     hint:"This feminine noun means both a business matter and a good deal or bargain.",
     sSrc:"It's a good {1}, the price is very low!"},

    {type:"teach", trg:"l'amateur", src:"the amateur, the enthusiast", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'amatrice'. Can be positive (enthusiast) or neutral.",
     example:"A: Tu es un amateur de vin ?\nB: Oui, j'adore le vin rouge.",
     exampleSrc:"A: Are you a wine enthusiast?\nB: Yes, I love red wine.",
     funFact:"Unlike English, 'amateur' in French isn't always negative. An 'amateur d'art' is an art lover."},

    {type:"teach", trg:"l'animateur", src:"the host, the facilitator", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'animatrice'. Someone who leads activities.",
     example:"A: L'animateur est sympa ?\nB: Oui, très dynamique !",
     exampleSrc:"A: Is the host friendly?\nB: Yes, very dynamic!",
     funFact:"French summer camps ('colonies de vacances') employ 'animateurs' to run activities for children."},

    {type:"teach", trg:"l'apprenti", src:"the apprentice", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'apprentie'. Someone learning a trade.",
     example:"A: Tu es apprenti chez un boulanger ?\nB: Oui, j'apprends à faire du pain.",
     exampleSrc:"A: Are you an apprentice at a baker's?\nB: Yes, I'm learning to make bread.",
     funFact:"Apprenticeship is highly valued in France. Many top chefs and artisans started as 'apprentis'."},

    {type:"teach", trg:"l'assistant", src:"the assistant", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'assistante'. A helper or support person.",
     example:"A: Tu es l'assistant du directeur ?\nB: Oui, je l'aide chaque jour.",
     exampleSrc:"A: Are you the director's assistant?\nB: Yes, I help him every day.",
     funFact:"'Assistant vocal' is a voice assistant like Siri. Technology borrows from traditional job titles."},

    {type:"mc",
     q:"Quel mot décrit une personne qui apprend un métier ?",
     opts:["l'apprenti","l'assistant","l'amateur","l'animateur"],
     ans:"l'apprenti",
     hint:"This noun describes someone training under a skilled professional to learn a craft."},

    {type:"teach", trg:"l'assurance", src:"the insurance, the confidence", pos:"noun", gender:"f",
     note:"Feminine noun. Double meaning: insurance (financial) and self-confidence.",
     example:"A: Tu as une assurance voiture ?\nB: Oui, c'est obligatoire.",
     exampleSrc:"A: Do you have car insurance?\nB: Yes, it's mandatory.",
     funFact:"Car insurance is mandatory in France. You also need 'assurance habitation' (home insurance) as a tenant."},

    {type:"teach", trg:"l'augmentation", src:"the raise, the increase", pos:"noun", gender:"f",
     note:"Feminine noun. Most often refers to a salary raise.",
     example:"A: Tu as eu une augmentation ?\nB: Oui, cinq pour cent !",
     exampleSrc:"A: Did you get a raise?\nB: Yes, five percent!",
     funFact:"Asking for an 'augmentation' is a common topic in French workplace culture. Usually happens once a year."},

    {type:"teach", trg:"l'application", src:"the application (app or effort)", pos:"noun", gender:"f",
     note:"Feminine noun. Means a software app or showing dedication.",
     example:"A: Quelle application tu utilises ?\nB: Une application de musique.",
     exampleSrc:"A: Which app do you use?\nB: A music app.",
     funFact:"'Appli' is the casual short form, just like 'app' in English. The French love abbreviations."},

    {type:"teach", trg:"l'antiquaire", src:"the antique dealer", pos:"noun", gender:"m",
     note:"Same form for both genders. Someone who sells old, valuable objects.",
     example:"A: Où tu as trouvé cette lampe ?\nB: Chez un antiquaire du quartier.",
     exampleSrc:"A: Where did you find this lamp?\nB: At an antique dealer in the neighborhood.",
     funFact:"The 'Marché aux Puces de Saint-Ouen' in Paris is the world's largest antique market."},

    {type:"fb",
     s:"Tu as une {1} voiture ? C'est obligatoire en France.",
     a:["assurance"],
     opts:["assurance","augmentation","application","administration"],
     hint:"This feminine noun is the financial protection you pay for monthly in case of accidents.",
     sSrc:"Do you have car {1}? It's mandatory in France."},

    {type:"match", pairs:[
      {trg:"avocat", src:"lawyer"},
      {trg:"artisan", src:"craftsman"},
      {trg:"apprenti", src:"apprentice"},
      {trg:"augmentation", src:"raise (salary)"},
      {trg:"antiquaire", src:"antique dealer"}
    ]},

    {type:"mc",
     q:"Quelle est la forme abrégée et familière utilisée pour désigner ce logiciel mobile ?",
     opts:["appli","asso","admin","appart"],
     ans:"appli",
     hint:"This casual abbreviation is the French equivalent of the English word 'app'."},

    {type:"fb",
     s:"L'{1} du club de sport organise les activités.",
     a:["animateur"],
     opts:["animateur","artisan","assistant","antiquaire"],
     hint:"This person leads group activities and keeps participants engaged and entertained.",
     sSrc:"The {1} of the sports club organizes the activities."}
  ]
};
export default LESSON_9;
