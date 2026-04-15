const LESSON_5 = {
  id:"frv2_b2gA_l5", title:"Famille et generations", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Famille et generations",
     desc:"Discuss family structures, generational differences, and domestic life with sophisticated B2 vocabulary.",
     goals:["Learn 14 family and generational words","Describe family dynamics precisely","Discuss social changes affecting families"]},

    {type:"teach", trg:"un arriere-grand-parent", src:"a great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une arriere-grand-mere.\nPlural: des arriere-grands-parents.",
     example:"A: Mes arriere-grands-parents venaient de Bretagne.\nB: Tu as de la chance de connaitre tes origines.",
     exampleSrc:"A: My great-grandparents came from Brittany.\nB: You're lucky to know your origins.",
     funFact:"French genealogy is popular. The Archives departementales let you trace ancestors back to the 1600s for free."},

    {type:"teach", trg:"la maisonnee", src:"the household", pos:"noun", gender:"f",
     note:"Feminine noun. All the people living in one house.",
     example:"A: Toute la maisonnee etait reunie pour Noel.\nB: Ca fait du monde a table !",
     exampleSrc:"A: The whole household was gathered for Christmas.\nB: That's a lot of people at the table!",
     funFact:"An old-fashioned word still used in literary and formal French. Suggests warmth and togetherness."},

    {type:"teach", trg:"pouponner", src:"to fuss over a baby, to coo", pos:"verb", gender:null,
     note:"Regular -er verb. To tenderly care for a baby. From 'poupon' (baby doll).",
     example:"A: Elle adore pouponner son neveu.\nB: Normal, il est adorable.",
     exampleSrc:"A: She loves fussing over her nephew.\nB: Of course, he's adorable.",
     funFact:"'Un poupon' is a baby or a baby doll. 'Pouponner' captures the gentle, cooing attention given to infants."},

    {type:"teach", trg:"une poussette", src:"a stroller, a pushchair", pos:"noun", gender:"f",
     note:"Feminine noun. A wheeled chair for babies.\nFrom 'pousser' (to push).",
     example:"A: Tu as vu la nouvelle poussette ?\nB: Oui, elle est legere et pliable.",
     exampleSrc:"A: Have you seen the new stroller?\nB: Yes, it's light and foldable.",
     funFact:"French parents are particular about strollers. Parisian sidewalks are notoriously narrow for them."},

    {type:"teach", trg:"la fete", src:"the celebration, the party", pos:"noun", gender:"f",
     note:"Feminine noun. A festive event or holiday.\n'Bonne fete!' = Happy name day!",
     example:"A: La fete des voisins est en juin.\nB: C'est une belle occasion de se reunir.",
     exampleSrc:"A: Neighbors' Day is in June.\nB: It's a nice occasion to get together.",
     funFact:"France celebrates 'les fetes' constantly: la Fete nationale (July 14), la Fete de la musique (June 21), and each person's 'fete' (saint's day)."},

    {type:"mc",
     q:"Quel mot designe l'ensemble des personnes vivant sous le meme toit ?",
     opts:["la maisonnee","la poussette","la fete","l'arriere-grand-parent"],
     ans:"la maisonnee",
     hint:"An old-fashioned but still used word. Think of everyone in one house. From 'maison'."},

    {type:"teach", trg:"le confrere", src:"the colleague, the peer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la consoeur.\nA fellow member of a profession.",
     example:"A: Mon confrere a presente les resultats.\nB: Son travail est remarquable.",
     exampleSrc:"A: My colleague presented the results.\nB: His work is remarkable.",
     funFact:"Used among professionals like lawyers, doctors, and journalists. More formal than 'collegue'."},

    {type:"teach", trg:"un heritier", src:"an heir", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une heritiere.\nSomeone who inherits property or a title.",
     example:"A: Il est l'heritier de l'entreprise familiale.\nB: C'est une lourde responsabilite.",
     exampleSrc:"A: He's the heir to the family business.\nB: That's a heavy responsibility.",
     funFact:"French inheritance law is strict. Children cannot be disinherited. They have a 'reserve hereditaire' by law."},

    {type:"teach", trg:"la tutelle", src:"the guardianship, the supervision", pos:"noun", gender:"f",
     note:"Feminine noun. Legal authority over a minor or incapacitated person.\nAlso: oversight.",
     example:"A: L'enfant est place sous tutelle.\nB: Sa tante est devenue sa tutrice legale.",
     exampleSrc:"A: The child is placed under guardianship.\nB: His aunt became his legal guardian.",
     funFact:"'Mise sous tutelle' also describes countries put under UN trusteeship. The concept spans family and geopolitics."},

    {type:"fb",
     s:"Elle adore {1} son neveu, elle est toujours aux petits soins.",
     a:["pouponner"],
     opts:["pouponner","feter","heriter","tuteller"],
     hint:"To fuss tenderly over a baby. From the word for a baby doll.",
     sSrc:"She loves {1} over her nephew, she's always doting on him."},

    {type:"teach", trg:"l'emancipation", src:"emancipation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of gaining freedom or independence.",
     example:"A: L'emancipation des jeunes passe par l'emploi.\nB: L'independance financiere est essentielle.",
     exampleSrc:"A: Young people's emancipation comes through employment.\nB: Financial independence is essential.",
     funFact:"In French law, a minor can be 'emancipe' at 16, gaining adult legal capacity before age 18."},

    {type:"teach", trg:"le patrimoine", src:"the heritage, the estate", pos:"noun", gender:"m",
     note:"Masculine noun. Cultural heritage or personal estate.\nFrom Latin 'patrimonium'.",
     example:"A: Le patrimoine culturel doit etre protege.\nB: C'est la responsabilite de tous.",
     exampleSrc:"A: Cultural heritage must be protected.\nB: It's everyone's responsibility.",
     funFact:"'Les Journees du Patrimoine' each September open historic buildings to the public. Hugely popular in France."},

    {type:"teach", trg:"les grandeurs", src:"the grandeurs, the magnitudes", pos:"noun", gender:"f",
     note:"Feminine plural noun. Greatness, or delusions of grandeur.\n'Folie des grandeurs' = megalomania.",
     example:"A: Il souffre de la folie des grandeurs.\nB: Ses projets sont completement irrealistes.",
     exampleSrc:"A: He suffers from delusions of grandeur.\nB: His projects are completely unrealistic.",
     funFact:"'La Folie des grandeurs' is a beloved 1971 French comedy with Louis de Funes. A cultural reference everyone knows."},

    {type:"mc",
     q:"Quel mot designe une personne qui recoit un heritage ?",
     opts:["un heritier","un confrere","un tuteur","un patrimoine"],
     ans:"un heritier",
     hint:"Related to the verb 'heriter'. The person who receives property after someone's death."},

    {type:"teach", trg:"le parrain", src:"the godfather, the sponsor", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la marraine (godmother).\nAlso used for a mentor or sponsor.",
     example:"A: Mon parrain m'a offert une montre pour mes 18 ans.\nB: C'est un beau geste.",
     exampleSrc:"A: My godfather gave me a watch for my 18th birthday.\nB: That's a nice gesture.",
     funFact:"In French culture, the parrain/marraine relationship carries real responsibility. They guide the child through life."},

    {type:"fb",
     s:"Le {1} culturel de la France attire des millions de touristes.",
     a:["patrimoine"],
     opts:["patrimoine","parrain","confrere","heritier"],
     hint:"Cultural heritage. Think of historic buildings, traditions, and art collections.",
     sSrc:"The cultural {1} of France attracts millions of tourists."},

    {type:"match", pairs:[
      {trg:"arriere-grand-parent", src:"great-grandparent"},
      {trg:"tutelle", src:"guardianship"},
      {trg:"emancipation", src:"emancipation"},
      {trg:"parrain", src:"godfather"},
      {trg:"grandeurs", src:"grandeurs"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'objet a roues pour promener un bebe ?",
     opts:["une poussette","une maisonnee","une tutelle","une fete"],
     ans:"une poussette",
     hint:"From the verb 'pousser' (to push). A wheeled device for transporting babies."}
  ]
};
export default LESSON_5;
