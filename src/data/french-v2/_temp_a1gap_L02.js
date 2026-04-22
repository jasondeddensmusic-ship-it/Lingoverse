const LESSON_2 = {
  id:"frv2_a1gap_l2", title:"Les gens autour de moi", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Les gens autour de moi",
     desc:"Meet the people in your life. Friends, family, and the characters you encounter every day.",
     goals:["Learn 20 words about people and relationships","Describe people you know","Talk about age and social connections"]},

    {type:"teach", trg:"l'ami", src:"the friend (male)", pos:"noun", gender:"m",
     note:"Masculine noun. One of the first relationship words to learn.",
     example:"A: C'est qui, lui ?\nB: C'est mon ami Paul.",
     exampleSrc:"A: Who is he?\nB: He's my friend Paul.",
     funFact:"'Faux ami' means 'false friend' and refers to words that look similar in two languages but mean different things."},

    {type:"teach", trg:"l'amie", src:"the friend (female)", pos:"noun", gender:"f",
     note:"Feminine form of 'ami'. Note the added -e.",
     example:"A: Tu connais Sophie ?\nB: Oui, c'est une bonne amie.",
     exampleSrc:"A: Do you know Sophie?\nB: Yes, she's a good friend.",
     funFact:"In spoken French, 'ami' and 'amie' sound identical. Only the article reveals the gender."},

    {type:"teach", trg:"l'amitié", src:"the friendship", pos:"noun", gender:"f",
     note:"Feminine noun. Abstract concept derived from 'ami'.",
     example:"A: Vous êtes proches ?\nB: Oui, c'est une longue amitié.",
     exampleSrc:"A: Are you close?\nB: Yes, it's a long friendship.",
     funFact:"The French highly value 'amitié'. True friendship in France tends to be deep and lifelong."},

    {type:"teach", trg:"l'amour", src:"the love", pos:"noun", gender:"m",
     note:"Masculine noun. Central to French culture and language.",
     example:"A: Tu crois en l'amour ?\nB: Bien sûr, l'amour est partout !",
     exampleSrc:"A: Do you believe in love?\nB: Of course, love is everywhere!",
     funFact:"Paris is called 'la ville de l'amour' (the city of love). The word comes from Latin 'amor'."},

    {type:"mc",
     q:"Quel mot signifie 'friendship' ?",
     opts:["l'amitié","l'amour","l'ami","l'amie"],
     ans:"l'amitié",
     hint:"This feminine noun is the abstract quality of being friends with someone."},

    {type:"teach", trg:"amoureux", src:"in love", pos:"adj", gender:null,
     note:"Adjective. 'Amoureux' (m) / 'amoureuse' (f). Also used as a noun.",
     example:"A: Tu es amoureux ?\nB: Oui, je suis amoureux de Sophie.",
     exampleSrc:"A: Are you in love?\nB: Yes, I'm in love with Sophie.",
     funFact:"'Tomber amoureux' (to fall in love) uses the verb 'tomber' (to fall), just like in English."},

    {type:"teach", trg:"l'adulte", src:"the adult", pos:"noun", gender:"m",
     note:"Masculine or feminine noun. Same form for both genders.",
     example:"A: C'est un film pour adultes ?\nB: Non, c'est pour toute la famille.",
     exampleSrc:"A: Is this a movie for adults?\nB: No, it's for the whole family.",
     funFact:"In France, you become a legal adult at 18, when you can vote and drive."},

    {type:"teach", trg:"l'adolescent", src:"the teenager", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'adolescente'. Formal register.",
     example:"A: Il a quel âge ?\nB: C'est un adolescent de quinze ans.",
     exampleSrc:"A: How old is he?\nB: He's a fifteen-year-old teenager.",
     funFact:"The informal short form 'ado' is much more common in everyday speech."},

    {type:"teach", trg:"l'ado", src:"the teen (informal)", pos:"noun", gender:"m",
     note:"Informal short form of 'adolescent'. Very common in spoken French.",
     example:"A: Les ados sont où ?\nB: Ils sont au parc.",
     exampleSrc:"A: Where are the teens?\nB: They're at the park.",
     funFact:"French loves abbreviations. 'Ado', 'resto' (restaurant), 'appart' (apartment) are everyday words."},

    {type:"fb",
     s:"Je suis {1} de Marie depuis trois ans.",
     a:["amoureux"],
     opts:["amoureux","ami","adulte","ado"],
     hint:"This adjective describes being romantically attracted to someone.",
     sSrc:"I have been {1} with Marie for three years."},

    {type:"teach", trg:"l'aîné", src:"the eldest", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'aînée'. The firstborn child.",
     example:"A: Tu es l'aîné ?\nB: Oui, j'ai deux petits frères.",
     exampleSrc:"A: Are you the eldest?\nB: Yes, I have two little brothers.",
     funFact:"Birth order matters a lot in French families. The 'aîné' traditionally had special responsibilities."},

    {type:"teach", trg:"l'an", src:"the year", pos:"noun", gender:"m",
     note:"Masculine noun. Used with numbers: 'cinq ans' (five years).",
     example:"A: Tu as quel âge ?\nB: J'ai vingt ans.",
     exampleSrc:"A: How old are you?\nB: I'm twenty years old.",
     funFact:"'Le Nouvel An' is New Year's Day. French uses 'ans' after numbers and 'année' for duration."},

    {type:"teach", trg:"l'année", src:"the year (duration)", pos:"noun", gender:"f",
     note:"Feminine noun. Emphasizes the year as a period of time.",
     example:"A: C'est une bonne année ?\nB: Oui, une très bonne année !",
     exampleSrc:"A: Is it a good year?\nB: Yes, a very good year!",
     funFact:"'Bonne année !' is how the French wish each other Happy New Year."},

    {type:"teach", trg:"l'anniversaire", src:"the birthday, the anniversary", pos:"noun", gender:"m",
     note:"Masculine noun. Used for both birthdays and anniversaries.",
     example:"A: C'est quand ton anniversaire ?\nB: C'est le 15 mars.",
     exampleSrc:"A: When is your birthday?\nB: It's March 15th.",
     funFact:"French birthday song is 'Joyeux anniversaire', sung to the same melody as the English version."},

    {type:"mc",
     q:"Comment dit-on 'birthday' en français ?",
     opts:["l'aîné","l'anniversaire","l'an","l'année"],
     ans:"l'anniversaire",
     hint:"This masculine noun covers both birthdays and wedding anniversaries."},

    {type:"teach", trg:"l'acteur", src:"the actor", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'actrice'.",
     example:"A: Qui est ton acteur préféré ?\nB: J'adore Jean Dujardin.",
     exampleSrc:"A: Who is your favorite actor?\nB: I love Jean Dujardin.",
     funFact:"Jean Dujardin won an Oscar for 'The Artist' in 2012, a silent black-and-white film."},

    {type:"teach", trg:"l'artiste", src:"the artist", pos:"noun", gender:"m",
     note:"Same form for masculine and feminine. Context determines gender.",
     example:"A: Elle est artiste ?\nB: Oui, elle est peintre.",
     exampleSrc:"A: Is she an artist?\nB: Yes, she's a painter.",
     funFact:"France has produced more Nobel Prize winners in Literature than almost any other country."},

    {type:"teach", trg:"l'auteur", src:"the author", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine form 'auteure' or 'autrice' is debated.",
     example:"A: Qui est l'auteur de ce livre ?\nB: C'est Victor Hugo.",
     exampleSrc:"A: Who is the author of this book?\nB: It's Victor Hugo.",
     funFact:"The debate over 'auteure' vs 'autrice' reflects ongoing discussions about gender in French language."},

    {type:"teach", trg:"l'adversaire", src:"the opponent", pos:"noun", gender:"m",
     note:"Same form for both genders. Used in sports and debates.",
     example:"A: L'adversaire est fort ?\nB: Oui, très fort !",
     exampleSrc:"A: Is the opponent strong?\nB: Yes, very strong!",
     funFact:"From Latin 'adversarius'. English 'adversary' is a direct cognate."},

    {type:"teach", trg:"l'admirateur", src:"the admirer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'admiratrice'. Someone who admires.",
     example:"A: Tu as des admirateurs ?\nB: Non, pas du tout !",
     exampleSrc:"A: Do you have admirers?\nB: No, not at all!",
     funFact:"A 'secret admirer' in French is 'un admirateur secret', used exactly like in English."},

    {type:"fb",
     s:"C'est quand ton {1} ? Le 5 mai ?",
     a:["anniversaire"],
     opts:["anniversaire","an","année","adulte"],
     hint:"This word covers both the celebration of your birth date and wedding milestones.",
     sSrc:"When is your {1}? May 5th?"},

    {type:"match", pairs:[
      {trg:"ami", src:"friend (male)"},
      {trg:"amour", src:"love"},
      {trg:"an", src:"year (with numbers)"},
      {trg:"artiste", src:"artist"},
      {trg:"adversaire", src:"opponent"}
    ]},

    {type:"mc",
     q:"Quel est le contraire de 'l'adulte' ?",
     opts:["l'adversaire","l'auteur","l'adolescent","l'admirateur"],
     ans:"l'adolescent",
     hint:"This word describes a young person who is not yet a grown-up."},

    {type:"fb",
     s:"Elle est {1}, elle peint des tableaux magnifiques.",
     a:["artiste"],
     opts:["artiste","acteur","auteur","admirateur"],
     hint:"This word describes someone who creates visual art, music, or other creative works.",
     sSrc:"She is an {1}, she paints magnificent paintings."}
  ]
};
export default LESSON_2;
