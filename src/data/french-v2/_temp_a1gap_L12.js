const LESSON_12 = {
  id:"frv2_a1gap_l12", title:"Le temps qui passe", icon:"\u{23F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le temps qui passe",
     desc:"Time expressions and sequences. Learn to talk about today, tomorrow, before, after, and how time flows in French.",
     goals:["Learn 20 time-related words and expressions","Sequence events in time","Use key time adverbs naturally"]},

    {type:"teach", trg:"aujourd'hui", src:"today", pos:"adv", gender:null,
     note:"One of the most used time words. Literally 'on the day of today'.",
     example:"A: Qu'est-ce qu'on fait aujourd'hui ?\nB: Aujourd'hui, on va au parc.",
     exampleSrc:"A: What are we doing today?\nB: Today, we're going to the park.",
     funFact:"Already seen in Lesson 1, but essential for time. Built from four old words squeezed together."},

    {type:"teach", trg:"après-demain", src:"the day after tomorrow", pos:"adv", gender:null,
     note:"Compound adverb. 'Après' (after) + 'demain' (tomorrow).",
     example:"A: Tu pars quand ?\nB: Après-demain, jeudi.",
     exampleSrc:"A: When are you leaving?\nB: The day after tomorrow, Thursday.",
     funFact:"French has a single word for this concept, while English needs a four-word phrase."},

    {type:"teach", trg:"l'après-midi", src:"the afternoon", pos:"noun", gender:"m",
     note:"Masculine or feminine (both accepted). The hours after midday.",
     example:"A: Tu es libre cet après-midi ?\nB: Oui, à partir de deux heures.",
     exampleSrc:"A: Are you free this afternoon?\nB: Yes, from two o'clock.",
     funFact:"French afternoons can feel long because many shops close for lunch from noon to 2 PM."},

    {type:"teach", trg:"autrefois", src:"in the past, formerly", pos:"adv", gender:null,
     note:"Means 'in the old days'. More distant past than 'avant'.",
     example:"A: Comment était la vie autrefois ?\nB: Plus simple, mais plus dure.",
     exampleSrc:"A: What was life like in the old days?\nB: Simpler, but harder.",
     funFact:"'Autrefois' evokes nostalgia. It's the word grandparents use when telling stories of their youth."},

    {type:"teach", trg:"aussitôt", src:"immediately, right away", pos:"adv", gender:null,
     note:"Stronger than 'tout de suite'. Emphasizes instant reaction.",
     example:"A: Il est arrivé aussitôt.\nB: Oui, il n'a pas attendu.",
     exampleSrc:"A: He arrived immediately.\nB: Yes, he didn't wait.",
     funFact:"'Aussitôt dit, aussitôt fait' means 'no sooner said than done'. A satisfying French proverb."},

    {type:"mc",
     q:"Quel mot signifie 'the day after tomorrow' ?",
     opts:["après-demain","après-midi","autrefois","aussitôt"],
     ans:"après-demain",
     hint:"This compound adverb combines 'after' with 'tomorrow' to mean two days from now."},

    {type:"teach", trg:"actuellement", src:"currently, at the moment", pos:"adv", gender:null,
     note:"False friend: does NOT mean 'actually'. Means 'right now'.",
     example:"A: Tu travailles actuellement ?\nB: Oui, je suis en réunion.",
     exampleSrc:"A: Are you working at the moment?\nB: Yes, I'm in a meeting.",
     funFact:"Classic false friend! 'Actuellement' means 'currently'. 'Actually' in English is 'en fait' in French."},

    {type:"teach", trg:"actuel", src:"current, present-day", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'actuelle'. Does NOT mean 'actual'.",
     example:"A: La situation actuelle est compliquée.\nB: Oui, mais ça va s'améliorer.",
     exampleSrc:"A: The current situation is complicated.\nB: Yes, but it will improve.",
     funFact:"Another false friend pair! 'Le président actuel' means the current president, not the actual one."},

    {type:"teach", trg:"l'actualité", src:"the news, current events", pos:"noun", gender:"f",
     note:"Feminine noun. Often plural: 'les actualités' (the news).",
     example:"A: Tu suis l'actualité ?\nB: Oui, je lis le journal chaque matin.",
     exampleSrc:"A: Do you follow the news?\nB: Yes, I read the newspaper every morning.",
     funFact:"'Les actualités' was the name for newsreels shown in French cinemas before TV existed."},

    {type:"teach", trg:"l'antiquité", src:"antiquity, the ancient world", pos:"noun", gender:"f",
     note:"Feminine noun. The classical era of Greece and Rome.",
     example:"A: Tu aimes l'Antiquité ?\nB: Oui, surtout l'histoire romaine.",
     exampleSrc:"A: Do you like antiquity?\nB: Yes, especially Roman history.",
     funFact:"France's deepest roots go back to 'la Gaule' (Gaul), conquered by Rome. Antiquity shaped French identity."},

    {type:"fb",
     s:"Je travaille {1} dans un restaurant, mais je cherche autre chose.",
     a:["actuellement"],
     opts:["actuellement","autrefois","aussitôt","absolument"],
     hint:"This adverb means 'at the current moment' or 'right now'. It does NOT mean 'actually'.",
     sSrc:"I am {1} working in a restaurant, but I'm looking for something else."},

    {type:"teach", trg:"antérieur", src:"previous, prior", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'antérieure'. Before something in time.",
     example:"A: La version antérieure était meilleure.\nB: Je suis d'accord.",
     exampleSrc:"A: The previous version was better.\nB: I agree.",
     funFact:"In grammar, 'le passé antérieur' is a past tense used in literary French for events preceding other past events."},

    {type:"teach", trg:"l'aiguille", src:"the needle, the hand (of a clock)", pos:"noun", gender:"f",
     note:"Feminine noun. Both a sewing needle and a clock hand.",
     example:"A: L'aiguille est sur le douze.\nB: Ah, il est midi !",
     exampleSrc:"A: The hand is on the twelve.\nB: Ah, it's noon!",
     funFact:"'Dans le sens des aiguilles d'une montre' means clockwise. Literally 'in the direction of a watch's needles'."},

    {type:"teach", trg:"ailleurs", src:"elsewhere, somewhere else", pos:"adv", gender:null,
     note:"Adverb of place. 'D'ailleurs' means 'besides' or 'by the way'.",
     example:"A: Tu veux manger ici ?\nB: Non, allons ailleurs.",
     exampleSrc:"A: Do you want to eat here?\nB: No, let's go elsewhere.",
     funFact:"'D'ailleurs' is a conversation connector, like 'besides' or 'by the way'. Incredibly useful."},

    {type:"teach", trg:"au moins", src:"at least", pos:"adv", gender:null,
     note:"Fixed expression. Sets a minimum amount or standard.",
     example:"A: Tu dors combien d'heures ?\nB: Au moins huit heures.",
     exampleSrc:"A: How many hours do you sleep?\nB: At least eight hours.",
     funFact:"'Au moins' often softens disappointment: 'Au moins il fait beau' (at least the weather is nice)."},

    {type:"mc",
     q:"Que signifie 'actuellement' en français ?",
     opts:["finally","currently","actually","really"],
     ans:"currently",
     hint:"This is a famous false friend. It does NOT translate to the English word it resembles."},

    {type:"teach", trg:"au mieux", src:"at best", pos:"adv", gender:null,
     note:"Fixed expression. Sets an optimistic maximum.",
     example:"A: Quand tu arrives ?\nB: Au mieux, vers six heures.",
     exampleSrc:"A: When will you arrive?\nB: At best, around six o'clock.",
     funFact:"The opposite is 'au pire' (at worst). Together they bracket the range of possibilities."},

    {type:"teach", trg:"au total", src:"in total, altogether", pos:"adv", gender:null,
     note:"Fixed expression. Sums up a count or amount.",
     example:"A: Combien de personnes au total ?\nB: Vingt-cinq au total.",
     exampleSrc:"A: How many people in total?\nB: Twenty-five in total.",
     funFact:"French loves precise counting. 'Au total' wraps up lists and calculations neatly."},

    {type:"teach", trg:"autant", src:"as much, as many", pos:"adv", gender:null,
     note:"Used for comparisons of quantity: 'autant de' + noun.",
     example:"A: Il y a autant de garçons que de filles.\nB: Oui, c'est équilibré.",
     exampleSrc:"A: There are as many boys as girls.\nB: Yes, it's balanced.",
     funFact:"'Autant que possible' means 'as much as possible'. A useful phrase for goal-setting."},

    {type:"teach", trg:"autrement", src:"otherwise, differently", pos:"adv", gender:null,
     note:"Means 'in a different way' or 'if not' (otherwise).",
     example:"A: Fais-le autrement.\nB: D'accord, je vais essayer une autre méthode.",
     exampleSrc:"A: Do it differently.\nB: Okay, I'll try another method.",
     funFact:"'Autrement dit' means 'in other words'. A great phrase for clarifying or rephrasing."},

    {type:"fb",
     s:"Il y a {1} vingt personnes dans la salle.",
     a:["au moins"],
     opts:["au moins","au mieux","au total","autant"],
     hint:"This expression sets a minimum number, meaning 'not fewer than'.",
     sSrc:"There are {1} twenty people in the room."},

    {type:"match", pairs:[
      {trg:"actuellement", src:"currently (not actually!)"},
      {trg:"autrefois", src:"in the old days"},
      {trg:"ailleurs", src:"elsewhere"},
      {trg:"au total", src:"in total"},
      {trg:"autrement", src:"otherwise"}
    ]},

    {type:"mc",
     q:"Quel mot décrit les 'hands' d'une horloge en français ?",
     opts:["les armes","les ailes","les aiguilles","les allées"],
     ans:"les aiguilles",
     hint:"This feminine noun also means 'needles' and describes the thin pointers on a clock face."},

    {type:"fb",
     s:"{1} dit, tu ne veux pas venir ?",
     a:["Autrement"],
     opts:["Autrement","Autrefois","Ailleurs","Autant"],
     hint:"This adverb starts the expression meaning 'in other words'.",
     sSrc:"{1} said (in other words), you don't want to come?"}
  ]
};
export default LESSON_12;
