const LESSON_4 = {
  id:"frv2_a1gap_l4", title:"Les actions du quotidien", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Les actions du quotidien",
     desc:"Core everyday verbs for buying, helping, arriving, stopping, and more. These are the actions that fill your daily life.",
     goals:["Learn 20 essential everyday verbs","Use common French action words in context","Build basic sentences with these verbs"]},

    {type:"teach", trg:"accepter", src:"to accept", pos:"verb", gender:null,
     note:"Regular -er verb. Used for invitations, offers, and conditions.",
     example:"A: Tu acceptes mon invitation ?\nB: Oui, j'accepte avec plaisir !",
     exampleSrc:"A: Do you accept my invitation?\nB: Yes, I accept with pleasure!",
     funFact:"From Latin 'acceptare'. English 'accept' is a direct cognate with the same meaning."},

    {type:"teach", trg:"acheter", src:"to buy", pos:"verb", gender:null,
     note:"Stem-changing verb: j'achète (accent changes in some forms).",
     example:"A: Qu'est-ce que tu achètes ?\nB: J'achète du pain et du fromage.",
     exampleSrc:"A: What are you buying?\nB: I'm buying bread and cheese.",
     funFact:"The French spend more on food per capita than almost any other European country."},

    {type:"teach", trg:"aider", src:"to help", pos:"verb", gender:null,
     note:"Regular -er verb. Takes a direct object: 'aider quelqu'un'.",
     example:"A: Tu peux m'aider ?\nB: Bien sûr, je t'aide tout de suite.",
     exampleSrc:"A: Can you help me?\nB: Of course, I'll help you right away.",
     funFact:"'Au secours !' (help!) is for emergencies. 'Aide-moi' is for everyday requests."},

    {type:"teach", trg:"ajouter", src:"to add", pos:"verb", gender:null,
     note:"Regular -er verb. Used in cooking and in conversation.",
     example:"A: La soupe est bonne ?\nB: Oui, mais ajoute un peu de sel.",
     exampleSrc:"A: Is the soup good?\nB: Yes, but add a little salt.",
     funFact:"In French recipes, 'ajouter' is one of the most frequent instruction words."},

    {type:"teach", trg:"allumer", src:"to turn on, to light", pos:"verb", gender:null,
     note:"Regular -er verb. Used for lights, fire, and electronic devices.",
     example:"A: Il fait sombre ici.\nB: J'allume la lumière.",
     exampleSrc:"A: It's dark in here.\nB: I'll turn on the light.",
     funFact:"The opposite is 'éteindre' (to turn off). 'Allumer' originally meant only to light a fire."},

    {type:"mc",
     q:"Quel verbe signifie 'to buy' ?",
     opts:["acheter","ajouter","allumer","aider"],
     ans:"acheter",
     hint:"This verb describes the action of getting something in exchange for money."},

    {type:"teach", trg:"amuser", src:"to amuse, to entertain", pos:"verb", gender:null,
     note:"Regular -er verb. 'S'amuser' (reflexive) means 'to have fun'.",
     example:"A: Tu t'amuses bien ?\nB: Oui, je m'amuse beaucoup !",
     exampleSrc:"A: Are you having fun?\nB: Yes, I'm having a great time!",
     funFact:"'Amuse-bouche' literally means 'mouth amuser'. It's a small appetizer that entertains the palate."},

    {type:"teach", trg:"appeler", src:"to call", pos:"verb", gender:null,
     note:"Doubles the L in some forms: j'appelle. Also reflexive: 's'appeler'.",
     example:"A: Comment tu t'appelles ?\nB: Je m'appelle Thomas.",
     exampleSrc:"A: What's your name?\nB: My name is Thomas.",
     funFact:"'Je m'appelle...' literally means 'I call myself...' It's the first phrase in every French class."},

    {type:"teach", trg:"apporter", src:"to bring", pos:"verb", gender:null,
     note:"Regular -er verb. Bring something TO a place (not from).",
     example:"A: Tu peux apporter du vin ?\nB: Oui, j'apporte une bouteille.",
     exampleSrc:"A: Can you bring some wine?\nB: Yes, I'll bring a bottle.",
     funFact:"The difference: 'apporter' = bring to, 'emporter' = take away. Think of 'à emporter' on takeout menus."},

    {type:"teach", trg:"apprendre", src:"to learn, to teach", pos:"verb", gender:null,
     note:"Irregular verb (like 'prendre'). Can mean both learn AND teach.",
     example:"A: Tu apprends le français ?\nB: Oui, j'apprends depuis six mois.",
     exampleSrc:"A: Are you learning French?\nB: Yes, I've been learning for six months.",
     funFact:"'Apprendre quelque chose à quelqu'un' means to teach someone something. Same verb, two directions!"},

    {type:"fb",
     s:"Comment tu t'{1} ? Je m'appelle Marie.",
     a:["appelles"],
     opts:["appelles","amuses","aides","ajoutes"],
     hint:"This reflexive verb is used to ask and tell someone your name.",
     sSrc:"What do you {1} yourself? My name is Marie."},

    {type:"teach", trg:"arrêter", src:"to stop", pos:"verb", gender:null,
     note:"Regular -er verb. Also means 'to arrest'. Reflexive: 's'arrêter'.",
     example:"A: Arrête de parler !\nB: D'accord, je m'arrête.",
     exampleSrc:"A: Stop talking!\nB: Okay, I'll stop.",
     funFact:"'Arrêt de bus' means bus stop. The police 'arrêtent' (arrest) criminals. Same word, different contexts."},

    {type:"teach", trg:"arriver", src:"to arrive, to happen", pos:"verb", gender:null,
     note:"Regular -er verb. Also means 'to happen': 'ça arrive' (it happens).",
     example:"A: Tu arrives quand ?\nB: J'arrive dans cinq minutes.",
     exampleSrc:"A: When are you arriving?\nB: I'm arriving in five minutes.",
     funFact:"'J'arrive !' (I'm coming!) is what French people shout when someone is at the door."},

    {type:"teach", trg:"attendre", src:"to wait, to wait for", pos:"verb", gender:null,
     note:"Regular -re verb. No preposition needed: 'attendre quelqu'un'.",
     example:"A: Tu attends qui ?\nB: J'attends mon ami Pierre.",
     exampleSrc:"A: Who are you waiting for?\nB: I'm waiting for my friend Pierre.",
     funFact:"Unlike English, French does not need 'for' after 'wait'. Just 'attendre quelqu'un' directly."},

    {type:"teach", trg:"attraper", src:"to catch", pos:"verb", gender:null,
     note:"Regular -er verb. Used for catching objects, buses, and colds.",
     example:"A: Attrape la balle !\nB: Je l'ai attrapée !",
     exampleSrc:"A: Catch the ball!\nB: I caught it!",
     funFact:"'Attraper un rhume' means to catch a cold. French uses the same metaphor as English."},

    {type:"mc",
     q:"Quel verbe veut dire 'to arrive' et aussi 'to happen' ?",
     opts:["arriver","arrêter","attendre","attraper"],
     ans:"arriver",
     hint:"This verb has a double meaning: reaching a destination and an event occurring."},

    {type:"teach", trg:"avouer", src:"to confess, to admit", pos:"verb", gender:null,
     note:"Regular -er verb. Used when admitting something reluctantly.",
     example:"A: Tu as mangé mon gâteau ?\nB: Je dois avouer que oui.",
     exampleSrc:"A: Did you eat my cake?\nB: I must admit that yes.",
     funFact:"In legal French, 'les aveux' (confessions) are crucial evidence. The verb has serious weight."},

    {type:"teach", trg:"avoir", src:"to have", pos:"verb", gender:null,
     note:"Irregular verb. One of the two most important verbs in French.",
     example:"A: Tu as faim ?\nB: Oui, j'ai très faim !",
     exampleSrc:"A: Are you hungry?\nB: Yes, I'm very hungry!",
     funFact:"French uses 'avoir' where English uses 'to be': j'ai faim (I am hungry), j'ai 20 ans (I am 20)."},

    {type:"teach", trg:"avoir besoin", src:"to need", pos:"verb", gender:null,
     note:"Expression with 'avoir'. Followed by 'de': 'avoir besoin de'.",
     example:"A: Tu as besoin d'aide ?\nB: Oui, j'ai besoin d'un coup de main.",
     exampleSrc:"A: Do you need help?\nB: Yes, I need a hand.",
     funFact:"Literally 'to have need'. French expresses many states with 'avoir' that English uses 'to be' for."},

    {type:"teach", trg:"avoir lieu", src:"to take place", pos:"verb", gender:null,
     note:"Fixed expression. Describes when/where events happen.",
     example:"A: La fête a lieu où ?\nB: Elle a lieu chez Marie.",
     exampleSrc:"A: Where does the party take place?\nB: It takes place at Marie's.",
     funFact:"Literally 'to have place'. Very common in news reports and event descriptions."},

    {type:"teach", trg:"améliorer", src:"to improve", pos:"verb", gender:null,
     note:"Regular -er verb. Often reflexive: 's'améliorer' (to get better).",
     example:"A: Mon français s'améliore ?\nB: Oui, tu t'améliores chaque jour !",
     exampleSrc:"A: Is my French improving?\nB: Yes, you're improving every day!",
     funFact:"From 'meilleur' (better). To improve is literally 'to make better'."},

    {type:"fb",
     s:"La fête {1} samedi prochain chez Paul.",
     a:["a lieu"],
     opts:["a lieu","a besoin","arrive","arrête"],
     hint:"This fixed expression with 'avoir' means an event happens at a certain time and place.",
     sSrc:"The party {1} next Saturday at Paul's place."},

    {type:"match", pairs:[
      {trg:"acheter", src:"to buy"},
      {trg:"aider", src:"to help"},
      {trg:"attendre", src:"to wait for"},
      {trg:"avoir", src:"to have"},
      {trg:"améliorer", src:"to improve"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'to stop' et 'to arrest' ?",
     opts:["arrêter","arriver","attendre","attraper"],
     ans:"arrêter",
     hint:"This verb is used both by people pausing an action and by police taking someone into custody."},

    {type:"fb",
     s:"J'{1} le français depuis trois mois.",
     a:["apprends"],
     opts:["apprends","appelle","apporte","ajoute"],
     hint:"This irregular verb means both 'to learn' and 'to teach'.",
     sSrc:"I have been {1} French for three months."}
  ]
};
export default LESSON_4;
