const LESSON_11 = {
  id:"frv2_a1gap_l11", title:"Penser et comprendre", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Penser et comprendre",
     desc:"Verbs of the mind. Learn to express thinking, noticing, admitting, and achieving in French.",
     goals:["Learn 20 mental action verbs","Express opinions and observations","Talk about understanding and discovering"]},

    {type:"teach", trg:"admirer", src:"to admire", pos:"verb", gender:null,
     note:"Regular -er verb. Expressing appreciation for someone or something.",
     example:"A: Tu admires qui ?\nB: J'admire Marie Curie.",
     exampleSrc:"A: Who do you admire?\nB: I admire Marie Curie.",
     funFact:"Marie Curie, born in Poland but famous in France, was the first person to win two Nobel Prizes."},

    {type:"teach", trg:"admettre", src:"to admit", pos:"verb", gender:null,
     note:"Irregular verb (conjugated like 'mettre'). To acknowledge a truth.",
     example:"A: Tu admets ton erreur ?\nB: Oui, j'admets que j'avais tort.",
     exampleSrc:"A: Do you admit your mistake?\nB: Yes, I admit I was wrong.",
     funFact:"'Admettre' also means 'to allow in': 'Les chiens ne sont pas admis' means dogs are not allowed."},

    {type:"teach", trg:"analyser", src:"to analyze", pos:"verb", gender:null,
     note:"Regular -er verb. To examine something carefully.",
     example:"A: Tu as analysé les résultats ?\nB: Oui, tout est normal.",
     exampleSrc:"A: Did you analyze the results?\nB: Yes, everything is normal.",
     funFact:"French students do 'l'analyse de texte' (text analysis) in every literature class. It's a core skill."},

    {type:"teach", trg:"apercevoir", src:"to notice, to catch sight of", pos:"verb", gender:null,
     note:"Irregular verb (like 'recevoir'). To suddenly see something.",
     example:"A: Tu as aperçu Marie ?\nB: Oui, elle était au marché.",
     exampleSrc:"A: Did you notice Marie?\nB: Yes, she was at the market.",
     funFact:"'S'apercevoir de' (reflexive) means to realize: 'Je me suis aperçu de mon erreur' (I realized my mistake)."},

    {type:"teach", trg:"accomplir", src:"to accomplish, to achieve", pos:"verb", gender:null,
     note:"Regular -ir verb. To complete or carry out a task.",
     example:"A: Tu as accompli ta mission ?\nB: Oui, tout est fini.",
     exampleSrc:"A: Did you accomplish your mission?\nB: Yes, everything is done.",
     funFact:"From Latin 'complere' (to fill up). Accomplishing something fills the task completely."},

    {type:"mc",
     q:"Quel verbe signifie 'to notice' ou 'to catch sight of' ?",
     opts:["apercevoir","admirer","admettre","accomplir"],
     ans:"apercevoir",
     hint:"This irregular verb describes suddenly seeing something or someone, often briefly."},

    {type:"teach", trg:"acquérir", src:"to acquire, to gain", pos:"verb", gender:null,
     note:"Irregular verb. To obtain knowledge, skills, or possessions.",
     example:"A: Comment acquérir de l'expérience ?\nB: En travaillant, en pratiquant.",
     exampleSrc:"A: How do you gain experience?\nB: By working, by practicing.",
     funFact:"'Acquis' (acquired) is an important French concept. 'Les acquis sociaux' are hard-won social rights."},

    {type:"teach", trg:"accorder", src:"to grant, to agree", pos:"verb", gender:null,
     note:"Regular -er verb. To give permission or to harmonize.",
     example:"A: Le professeur accorde une pause ?\nB: Oui, cinq minutes.",
     exampleSrc:"A: Is the teacher granting a break?\nB: Yes, five minutes.",
     funFact:"In music, 'accorder un instrument' means to tune an instrument. Harmony in sound and agreement."},

    {type:"teach", trg:"accuser", src:"to accuse", pos:"verb", gender:null,
     note:"Regular -er verb. To formally blame someone.",
     example:"A: On m'accuse de quoi ?\nB: De rien, c'est un malentendu !",
     exampleSrc:"A: What am I accused of?\nB: Nothing, it's a misunderstanding!",
     funFact:"'Accuser réception' means to acknowledge receipt of something. A polite business expression."},

    {type:"teach", trg:"adapter", src:"to adapt", pos:"verb", gender:null,
     note:"Regular -er verb. To adjust to new conditions. Often reflexive.",
     example:"A: Tu t'adaptes bien à la France ?\nB: Oui, j'adore la vie ici.",
     exampleSrc:"A: Are you adapting well to France?\nB: Yes, I love life here.",
     funFact:"'S'adapter' (to adapt oneself) is a key concept in French immigration discussions."},

    {type:"fb",
     s:"J'{1} Marie Curie pour son courage et sa science.",
     a:["admire"],
     opts:["admire","admets","accuse","adapte"],
     hint:"This verb means to look up to someone with respect and appreciation.",
     sSrc:"I {1} Marie Curie for her courage and her science."},

    {type:"teach", trg:"adopter", src:"to adopt", pos:"verb", gender:null,
     note:"Regular -er verb. To take in a child or accept an idea.",
     example:"A: Vous allez adopter un chat ?\nB: Oui, un petit chat roux.",
     exampleSrc:"A: Are you going to adopt a cat?\nB: Yes, a little ginger cat.",
     funFact:"France has one of the highest pet adoption rates in Europe. 'Adopter' also means to adopt a law in parliament."},

    {type:"teach", trg:"agir", src:"to act, to take action", pos:"verb", gender:null,
     note:"Regular -ir verb. 'Il s'agit de' (it's about) is extremely common.",
     example:"A: Il faut agir maintenant !\nB: Tu as raison, on y va.",
     exampleSrc:"A: We must act now!\nB: You're right, let's go.",
     funFact:"'Il s'agit de...' (it's about...) is one of the most common French expressions. You hear it everywhere."},

    {type:"teach", trg:"affronter", src:"to face, to confront", pos:"verb", gender:null,
     note:"Regular -er verb. To face a challenge or opponent head-on.",
     example:"A: Tu dois affronter tes peurs.\nB: Je sais, mais c'est difficile.",
     exampleSrc:"A: You must face your fears.\nB: I know, but it's hard.",
     funFact:"In sports commentary, 'La France affronte l'Espagne' means France faces Spain in a match."},

    {type:"teach", trg:"apprécier", src:"to appreciate, to enjoy", pos:"verb", gender:null,
     note:"Regular -er verb. To value something or find it pleasant.",
     example:"A: Tu apprécies le bon vin ?\nB: Oui, surtout le bordeaux.",
     exampleSrc:"A: Do you appreciate good wine?\nB: Yes, especially Bordeaux.",
     funFact:"'J'apprécie' is softer than 'j'aime' (I love). It suggests refined enjoyment rather than strong emotion."},

    {type:"mc",
     q:"Comment dit-on 'it's about' en français avec 'agir' ?",
     opts:["il s'agit de","il agit de","il s'adapte","il s'admire"],
     ans:"il s'agit de",
     hint:"This reflexive expression uses 'agir' and is one of the most common French phrases."},

    {type:"teach", trg:"attirer", src:"to attract, to draw", pos:"verb", gender:null,
     note:"Regular -er verb. To pull toward or generate interest.",
     example:"A: Ce musée attire beaucoup de touristes.\nB: Normal, il est magnifique.",
     exampleSrc:"A: This museum attracts a lot of tourists.\nB: Of course, it's magnificent.",
     funFact:"Paris attire (attracts) more tourists than any other city in the world, over 30 million per year."},

    {type:"teach", trg:"atteindre", src:"to reach, to achieve", pos:"verb", gender:null,
     note:"Irregular verb (like 'peindre'). To arrive at a goal or destination.",
     example:"A: Tu as atteint ton objectif ?\nB: Presque, encore un peu de travail.",
     exampleSrc:"A: Did you reach your goal?\nB: Almost, a little more work.",
     funFact:"'Atteindre le sommet' (to reach the summit) is used both literally for mountains and figuratively for success."},

    {type:"teach", trg:"apparaître", src:"to appear", pos:"verb", gender:null,
     note:"Irregular verb (like 'connaître'). To become visible or come into view.",
     example:"A: Le soleil apparaît !\nB: Enfin, après trois jours de pluie.",
     exampleSrc:"A: The sun is appearing!\nB: Finally, after three days of rain.",
     funFact:"The opposite 'disparaître' (to disappear) follows the same conjugation pattern."},

    {type:"teach", trg:"assister", src:"to attend, to witness", pos:"verb", gender:null,
     note:"Regular -er verb. False friend: means 'to attend', NOT 'to assist'.",
     example:"A: Tu assistes au concert ?\nB: Oui, j'ai mes billets !",
     exampleSrc:"A: Are you attending the concert?\nB: Yes, I have my tickets!",
     funFact:"A classic false friend! 'Assister à' means to attend. To assist/help is 'aider'. Students trip on this constantly."},

    {type:"fb",
     s:"Ce musée {1} beaucoup de visiteurs chaque année.",
     a:["attire"],
     opts:["attire","assiste","atteint","apparaît"],
     hint:"This verb means to draw people toward a place or thing because of its appeal.",
     sSrc:"This museum {1} many visitors each year."},

    {type:"match", pairs:[
      {trg:"admirer", src:"to admire"},
      {trg:"accomplir", src:"to accomplish"},
      {trg:"agir", src:"to act"},
      {trg:"apprécier", src:"to appreciate"},
      {trg:"assister", src:"to attend (not assist!)"}
    ]},

    {type:"mc",
     q:"'Assister à un concert' veut dire...",
     opts:["to attend a concert","to assist at a concert","to sing at a concert","to organize a concert"],
     ans:"to attend a concert",
     hint:"This is a famous false friend. The French verb does not mean 'to help'."},

    {type:"fb",
     s:"Le soleil {1} derrière les nuages après la pluie.",
     a:["apparaît"],
     opts:["apparaît","affronte","accorde","adopte"],
     hint:"This irregular verb means to become visible or to come into view.",
     sSrc:"The sun {1} behind the clouds after the rain."}
  ]
};
export default LESSON_11;
