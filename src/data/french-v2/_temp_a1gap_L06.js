const LESSON_6 = {
  id:"frv2_a1gap_l6", title:"À table !", icon:"\u{1F355}", xp:15, board:true,
  steps:[
    {type:"intro", title:"À table !",
     desc:"Food, drink, and everything on the table. From baguettes to apricots, learn the vocabulary of French eating culture.",
     goals:["Learn 20 food and drink related words","Order and discuss food in French","Understand French eating habits"]},

    {type:"teach", trg:"la baguette", src:"the baguette", pos:"noun", gender:"f",
     note:"Feminine noun. The iconic French bread loaf.",
     example:"A: Tu vas à la boulangerie ?\nB: Oui, j'achète une baguette.",
     exampleSrc:"A: Are you going to the bakery?\nB: Yes, I'm buying a baguette.",
     funFact:"The French buy 10 billion baguettes a year. There are strict laws about what counts as a real baguette."},

    {type:"teach", trg:"l'abricot", src:"the apricot", pos:"noun", gender:"m",
     note:"Masculine noun. A summer stone fruit popular in southern France.",
     example:"A: Tu aimes les abricots ?\nB: Oui, surtout en confiture.",
     exampleSrc:"A: Do you like apricots?\nB: Yes, especially as jam.",
     funFact:"The word traveled from Arabic 'al-barquq' through Portuguese to French. A true world traveler of a word."},

    {type:"teach", trg:"l'ail", src:"the garlic", pos:"noun", gender:"m",
     note:"Masculine noun. Singular only. Essential in French cooking.",
     example:"A: Tu mets de l'ail dans la sauce ?\nB: Toujours ! C'est meilleur avec.",
     exampleSrc:"A: Do you put garlic in the sauce?\nB: Always! It's better with it.",
     funFact:"The south of France practically runs on garlic. The Aïoli sauce from Provence is named after it."},

    {type:"teach", trg:"l'ananas", src:"the pineapple", pos:"noun", gender:"m",
     note:"Masculine noun. The S is silent in standard French.",
     example:"A: C'est quoi ce fruit ?\nB: C'est un ananas, tu veux goûter ?",
     exampleSrc:"A: What is this fruit?\nB: It's a pineapple, do you want to try?",
     funFact:"Almost every language except English calls it something like 'ananas'. English chose 'pineapple' instead."},

    {type:"teach", trg:"l'amande", src:"the almond", pos:"noun", gender:"f",
     note:"Feminine noun. Used in pastries, marzipan, and cooking.",
     example:"A: Le gâteau est à quoi ?\nB: C'est un gâteau aux amandes.",
     exampleSrc:"A: What's the cake made of?\nB: It's an almond cake.",
     funFact:"'Les calissons d'Aix' are famous almond candies from Aix-en-Provence, made since the 15th century."},

    {type:"mc",
     q:"Quel fruit s'appelle 'ananas' dans presque toutes les langues sauf l'anglais ?",
     opts:["l'ananas","l'abricot","l'amande","l'ail"],
     ans:"l'ananas",
     hint:"This tropical fruit has a spiky crown and yellow flesh inside."},

    {type:"teach", trg:"l'aliment", src:"the food item", pos:"noun", gender:"m",
     note:"Masculine noun. A single item of food. Formal register.",
     example:"A: C'est un aliment sain ?\nB: Oui, très bon pour la santé.",
     exampleSrc:"A: Is this a healthy food?\nB: Yes, very good for health.",
     funFact:"'Aliments' is the formal word. In everyday speech, people just say 'la nourriture' (food)."},

    {type:"teach", trg:"l'alimentation", src:"the diet, the food supply", pos:"noun", gender:"f",
     note:"Feminine noun. Refers to the overall way of eating or a grocery store.",
     example:"A: Il y a un magasin près d'ici ?\nB: Oui, une alimentation au coin de la rue.",
     exampleSrc:"A: Is there a store nearby?\nB: Yes, a grocery store at the corner.",
     funFact:"'Alimentation générale' is the name for a small neighborhood grocery store in France."},

    {type:"teach", trg:"l'alcool", src:"the alcohol", pos:"noun", gender:"m",
     note:"Masculine noun. Covers all alcoholic drinks.",
     example:"A: Tu bois de l'alcool ?\nB: Un peu de vin, c'est tout.",
     exampleSrc:"A: Do you drink alcohol?\nB: A little wine, that's all.",
     funFact:"From Arabic 'al-kuhl'. France is one of the world's largest wine producers and consumers."},

    {type:"teach", trg:"l'apéritif", src:"the appetizer drink", pos:"noun", gender:"m",
     note:"Masculine noun. Shortened to 'l'apéro' in casual speech.",
     example:"A: On prend un apéritif ?\nB: Oui, un kir, s'il te plaît.",
     exampleSrc:"A: Shall we have a pre-dinner drink?\nB: Yes, a kir, please.",
     funFact:"The 'apéro' is a sacred French ritual. Friends gather before dinner for drinks and small snacks."},

    {type:"fb",
     s:"On va acheter une {1} à la boulangerie.",
     a:["baguette"],
     opts:["baguette","amande","abricot","ananas"],
     hint:"This is the long, thin, crusty bread loaf that symbolizes France.",
     sSrc:"We're going to buy a {1} at the bakery."},

    {type:"teach", trg:"l'addition", src:"the bill, the check", pos:"noun", gender:"f",
     note:"Feminine noun. Also means 'addition' in math.",
     example:"A: L'addition, s'il vous plaît.\nB: Voilà, c'est vingt euros.",
     exampleSrc:"A: The bill, please.\nB: Here you go, it's twenty euros.",
     funFact:"Saying 'l'addition, s'il vous plaît' is how you ask for the check in any French restaurant."},

    {type:"teach", trg:"l'anchois", src:"the anchovy", pos:"noun", gender:"m",
     note:"Masculine noun. Small salty fish popular in Mediterranean cooking.",
     example:"A: Tu aimes les anchois ?\nB: Sur la pizza, oui !",
     exampleSrc:"A: Do you like anchovies?\nB: On pizza, yes!",
     funFact:"Anchovies are a staple in southern French cuisine, especially in the 'pissaladière' (onion tart from Nice)."},

    {type:"teach", trg:"l'avoine", src:"the oat", pos:"noun", gender:"f",
     note:"Feminine noun. Used for oats, porridge, and oat-based products.",
     example:"A: Tu manges quoi le matin ?\nB: Un bol d'avoine avec du lait.",
     exampleSrc:"A: What do you eat in the morning?\nB: A bowl of oats with milk.",
     funFact:"'Flocons d'avoine' (oat flakes) have become trendy in France, though the classic croissant still rules."},

    {type:"teach", trg:"l'assiette", src:"the plate", pos:"noun", gender:"f",
     note:"Feminine noun. Also means a platter or assortment of food.",
     example:"A: Tu as une assiette propre ?\nB: Oui, dans le placard.",
     exampleSrc:"A: Do you have a clean plate?\nB: Yes, in the cupboard.",
     funFact:"'Ne pas être dans son assiette' means 'to feel off' or 'not quite right'. Nothing to do with plates!"},

    {type:"mc",
     q:"Comment demande-t-on la note au restaurant ?",
     opts:["L'assiette, s'il vous plaît","L'addition, s'il vous plaît","L'aliment, s'il vous plaît","L'apéritif, s'il vous plaît"],
     ans:"L'addition, s'il vous plaît",
     hint:"This feminine noun has a mathematical meaning but also refers to the restaurant bill."},

    {type:"teach", trg:"l'achat", src:"the purchase", pos:"noun", gender:"m",
     note:"Masculine noun. From 'acheter' (to buy). Plural: 'les achats'.",
     example:"A: Tu fais des achats ?\nB: Oui, je fais les courses.",
     exampleSrc:"A: Are you doing some shopping?\nB: Yes, I'm doing the groceries.",
     funFact:"'Faire les achats' is shopping in general. 'Faire les courses' specifically means grocery shopping."},

    {type:"teach", trg:"alimentaire", src:"food-related", pos:"adj", gender:null,
     note:"Same form for both genders. Describes anything related to food.",
     example:"A: C'est quoi ce magasin ?\nB: C'est un magasin alimentaire.",
     exampleSrc:"A: What is this store?\nB: It's a food store.",
     funFact:"'La chaîne alimentaire' is the food chain. 'L'industrie alimentaire' is the food industry."},

    {type:"teach", trg:"l'allumette", src:"the match (fire)", pos:"noun", gender:"f",
     note:"Feminine noun. A small stick used to start fires.",
     example:"A: Tu as des allumettes ?\nB: Non, mais j'ai un briquet.",
     exampleSrc:"A: Do you have matches?\nB: No, but I have a lighter.",
     funFact:"'Pommes allumettes' are matchstick fries, thin French fries cut to look like matchsticks."},

    {type:"teach", trg:"l'aspirine", src:"the aspirin", pos:"noun", gender:"f",
     note:"Feminine noun. Common medication found in every French home.",
     example:"A: J'ai mal à la tête.\nB: Prends une aspirine.",
     exampleSrc:"A: I have a headache.\nB: Take an aspirin.",
     funFact:"France is one of the highest consumers of medication in Europe. The local pharmacy is a cultural institution."},

    {type:"fb",
     s:"J'ai fait les {1} au supermarché ce matin.",
     a:["achats"],
     opts:["achats","aliments","assiettes","anchois"],
     hint:"This plural noun means purchases or shopping, derived from the verb 'acheter'.",
     sSrc:"I did the {1} at the supermarket this morning."},

    {type:"match", pairs:[
      {trg:"baguette", src:"baguette (bread)"},
      {trg:"ail", src:"garlic"},
      {trg:"apéritif", src:"pre-dinner drink"},
      {trg:"assiette", src:"plate"},
      {trg:"addition", src:"bill (restaurant)"}
    ]},

    {type:"mc",
     q:"Quel mot décrit quelque chose lié à la nourriture ?",
     opts:["aspirine","achat","alimentaire","allumette"],
     ans:"alimentaire",
     hint:"This adjective comes from 'aliment' (food) and describes anything related to food or nutrition."},

    {type:"fb",
     s:"On prend un {1} avant le dîner ? Un petit verre de vin ?",
     a:["apéritif"],
     opts:["apéritif","aliment","achat","alcool"],
     hint:"This masculine noun describes the French tradition of a drink before the main meal.",
     sSrc:"Shall we have a {1} before dinner? A little glass of wine?"}
  ]
};
export default LESSON_6;
