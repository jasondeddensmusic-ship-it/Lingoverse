const LESSON_14 = {
  id:"frv2_a1gap_l14", title:"Où et comment ?", icon:"\u{1F4CD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Où et comment ?",
     desc:"Location words and spatial expressions. Learn to say where things are: above, below, around, in the middle, and beyond.",
     goals:["Learn 20 location and position expressions","Describe where things are","Give spatial directions"]},

    {type:"teach", trg:"au-dessus", src:"above, over", pos:"adv", gender:null,
     note:"Adverb. 'Au-dessus de' + noun = above something.",
     example:"A: Le chat est où ?\nB: Au-dessus de l'armoire.",
     exampleSrc:"A: Where is the cat?\nB: Above the wardrobe.",
     funFact:"The opposite 'au-dessous' means 'below'. Together they cover vertical positioning."},

    {type:"teach", trg:"autour de", src:"around", pos:"prep", gender:null,
     note:"Preposition. Describes something surrounding or encircling.",
     example:"A: Il y a des arbres autour de la maison.\nB: Oui, c'est très vert.",
     exampleSrc:"A: There are trees around the house.\nB: Yes, it's very green.",
     funFact:"'Tourner autour du pot' means 'to beat around the bush'. Same metaphor in both languages!"},

    {type:"teach", trg:"au fond de", src:"at the back of, at the bottom of", pos:"prep", gender:null,
     note:"Compound preposition. Indicates the deepest or farthest point.",
     example:"A: Les toilettes sont où ?\nB: Au fond du couloir, à droite.",
     exampleSrc:"A: Where are the restrooms?\nB: At the end of the hallway, on the right.",
     funFact:"'Au fond' can be philosophical too: 'au fond, tu as raison' means 'deep down, you're right'."},

    {type:"teach", trg:"au milieu de", src:"in the middle of", pos:"prep", gender:null,
     note:"Compound preposition. The center point of something.",
     example:"A: La fontaine est au milieu de la place.\nB: Elle est belle !",
     exampleSrc:"A: The fountain is in the middle of the square.\nB: It's beautiful!",
     funFact:"French town squares typically have a fountain or monument 'au milieu'. It's a classic design."},

    {type:"teach", trg:"au loin", src:"in the distance, far away", pos:"adv", gender:null,
     note:"Adverb. Describes something visible but distant.",
     example:"A: Tu vois les montagnes au loin ?\nB: Oui, elles sont magnifiques.",
     exampleSrc:"A: Can you see the mountains in the distance?\nB: Yes, they're magnificent.",
     funFact:"'Au loin' has a poetic, romantic quality. French literature uses it to evoke longing and horizon."},

    {type:"mc",
     q:"Comment dit-on 'in the middle of' en français ?",
     opts:["au milieu de","au fond de","au loin","au-dessus de"],
     ans:"au milieu de",
     hint:"This expression describes the center point between the edges of something."},

    {type:"teach", trg:"au bout de", src:"at the end of", pos:"prep", gender:null,
     note:"Compound preposition. The far end or after a period of time.",
     example:"A: La boulangerie est au bout de la rue.\nB: Merci, j'y vais !",
     exampleSrc:"A: The bakery is at the end of the street.\nB: Thanks, I'll go!",
     funFact:"Also used for time: 'au bout de cinq minutes' means 'after five minutes'."},

    {type:"teach", trg:"au sommet de", src:"at the top of, at the summit of", pos:"prep", gender:null,
     note:"Compound preposition. The highest point of something.",
     example:"A: On est au sommet de la tour !\nB: La vue est incroyable.",
     exampleSrc:"A: We're at the top of the tower!\nB: The view is incredible.",
     funFact:"'Le sommet' also means a political summit. World leaders meet 'au sommet' in both senses."},

    {type:"teach", trg:"au sud", src:"in the south", pos:"adv", gender:null,
     note:"Directional expression. Used with 'de' for 'south of'.",
     example:"A: Marseille est où ?\nB: Au sud de la France.",
     exampleSrc:"A: Where is Marseille?\nB: In the south of France.",
     funFact:"The 'Midi' is what the French call their south. 'Le sud' has sunshine, lavender, and slower pace of life."},

    {type:"teach", trg:"auprès de", src:"close to, near", pos:"prep", gender:null,
     note:"Compound preposition. Physical or emotional closeness.",
     example:"A: Il reste auprès de sa mère.\nB: Oui, il prend soin d'elle.",
     exampleSrc:"A: He stays close to his mother.\nB: Yes, he takes care of her.",
     funFact:"'Auprès de' carries emotional warmth. 'Auprès de toi' (close to you) is a sentiment in many French songs."},

    {type:"fb",
     s:"La pharmacie est {1} la rue, à gauche.",
     a:["au bout de"],
     opts:["au bout de","au milieu de","au fond de","au sommet de"],
     hint:"This expression means at the far end of a street or path.",
     sSrc:"The pharmacy is {1} the street, on the left."},

    {type:"teach", trg:"aucun", src:"no, none, not any", pos:"pron", gender:null,
     note:"Negative determiner/pronoun. Masculine: 'aucun', feminine: 'aucune'.",
     example:"A: Tu as des questions ?\nB: Non, aucune question.",
     exampleSrc:"A: Do you have any questions?\nB: No, no questions.",
     funFact:"'Aucun' is stronger than just 'pas de'. It emphasizes the total absence of something."},

    {type:"teach", trg:"autre", src:"other, another", pos:"pron", gender:null,
     note:"Pronoun/determiner. 'Un autre' = another one. 'Les autres' = the others.",
     example:"A: Tu veux un autre café ?\nB: Oui, un autre, s'il te plaît.",
     exampleSrc:"A: Do you want another coffee?\nB: Yes, another one, please.",
     funFact:"Sartre's famous quote 'L'enfer, c'est les autres' (Hell is other people) made this word philosophical."},

    {type:"teach", trg:"afin de", src:"in order to", pos:"prep", gender:null,
     note:"Formal purpose preposition. More elegant than 'pour'.",
     example:"A: J'étudie afin de réussir l'examen.\nB: Bonne idée !",
     exampleSrc:"A: I study in order to pass the exam.\nB: Good idea!",
     funFact:"'Afin de' is preferred in written French. In speech, 'pour' is more natural for the same meaning."},

    {type:"teach", trg:"aux", src:"to the, at the (plural)", pos:"prep", gender:null,
     note:"Contraction of 'à les'. Used before plural nouns.",
     example:"A: On va aux magasins ?\nB: Oui, j'ai besoin de vêtements.",
     exampleSrc:"A: Are we going to the stores?\nB: Yes, I need clothes.",
     funFact:"French contractions are mandatory: 'à + les' always becomes 'aux', never stays separate."},

    {type:"mc",
     q:"Quel mot signifie 'none' ou 'not any' ?",
     opts:["aucun","autre","aux","autour"],
     ans:"aucun",
     hint:"This negative word emphasizes the complete absence of something. Stronger than 'pas de'."},

    {type:"teach", trg:"au", src:"to the, at the (m. singular)", pos:"prep", gender:null,
     note:"Contraction of 'à le'. Mandatory before masculine singular nouns.",
     example:"A: Tu vas au cinéma ?\nB: Oui, il y a un bon film.",
     exampleSrc:"A: Are you going to the cinema?\nB: Yes, there's a good movie.",
     funFact:"'Au' is one of the first contractions French learners master. 'À + le' always becomes 'au'."},

    {type:"teach", trg:"au foyer", src:"at home, homemaker", pos:"adv", gender:null,
     note:"Expression. Describes staying at home or being a homemaker.",
     example:"A: Tu travailles ?\nB: Non, je suis au foyer avec les enfants.",
     exampleSrc:"A: Do you work?\nB: No, I'm a homemaker with the children.",
     funFact:"'Femme/homme au foyer' (housewife/househusband) comes from 'foyer' meaning hearth or home."},

    {type:"teach", trg:"au pire", src:"at worst", pos:"adv", gender:null,
     note:"Fixed expression. Sets the worst possible outcome.",
     example:"A: Tu penses qu'on va être en retard ?\nB: Au pire, cinq minutes.",
     exampleSrc:"A: Do you think we'll be late?\nB: At worst, five minutes.",
     funFact:"'Au pire' and 'au mieux' bracket expectations. French speakers use them to manage uncertainty."},

    {type:"teach", trg:"au premier jour", src:"from the very first day", pos:"adv", gender:null,
     note:"Fixed expression. Emphasizes something happening from the start.",
     example:"A: Vous vous êtes bien entendus ?\nB: Oui, au premier jour !",
     exampleSrc:"A: Did you get along well?\nB: Yes, from the very first day!",
     funFact:"This expression often appears in love stories and friendship tales. 'From day one' in English."},

    {type:"fb",
     s:"La fontaine est {1} la place, entre les cafés.",
     a:["au milieu de"],
     opts:["au milieu de","au sommet de","au fond de","au bout de"],
     hint:"This expression means at the center point, equidistant from all edges.",
     sSrc:"The fountain is {1} the square, between the cafes."},

    {type:"match", pairs:[
      {trg:"au-dessus", src:"above"},
      {trg:"au fond de", src:"at the back of"},
      {trg:"au loin", src:"in the distance"},
      {trg:"au sud", src:"in the south"},
      {trg:"aucun", src:"none"}
    ]},

    {type:"mc",
     q:"Que signifie 'au bout de la rue' ?",
     opts:["at the end of the street","in the middle of the street","above the street","around the street"],
     ans:"at the end of the street",
     hint:"'Le bout' means the tip or e.... This phrase points to the farthest point of a s...."},

    {type:"fb",
     s:"Tu vois les montagnes {1} ? Elles sont couvertes de neige.",
     a:["au loin"],
     opts:["au loin","au sud","au foyer","au pire"],
     hint:"This expression describes something visible but far away on the horizon.",
     sSrc:"Do you see the mountains {1}? They are covered in snow."}
  ]
};
export default LESSON_14;
