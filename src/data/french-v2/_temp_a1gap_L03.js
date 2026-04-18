const LESSON_3 = {
  id:"frv2_a1gap_l3", title:"Comment tu es ?", icon:"\u{1F60A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Comment tu es ?",
     desc:"Describe people and their personalities. From pleasant to agitated, learn the adjectives that bring characters to life.",
     goals:["Learn 20 personality and character adjectives","Describe how people look and behave","Use adjectives with the correct form"]},

    {type:"teach", trg:"agréable", src:"pleasant, nice", pos:"adj", gender:null,
     note:"Same form for masculine and feminine. Very common compliment.",
     example:"A: Comment est ton nouveau voisin ?\nB: Il est très agréable.",
     exampleSrc:"A: How is your new neighbor?\nB: He's very pleasant.",
     funFact:"From 'agréer' (to accept with pleasure). An 'agréable' person makes you want to stay."},

    {type:"teach", trg:"aimable", src:"kind, friendly", pos:"adj", gender:null,
     note:"Same form for both genders. From 'aimer' (to love).",
     example:"A: La vendeuse est aimable ?\nB: Oui, elle est très aimable.",
     exampleSrc:"A: Is the saleswoman friendly?\nB: Yes, she's very friendly.",
     funFact:"Literally 'lovable'. In older French, it meant 'worthy of being loved'."},

    {type:"teach", trg:"amusant", src:"funny, entertaining", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'amusante'. From 'amuser'.",
     example:"A: Le film est bien ?\nB: Oui, il est très amusant !",
     exampleSrc:"A: Is the movie good?\nB: Yes, it's very funny!",
     funFact:"An 'amusement park' in French is 'un parc d'attractions', not 'parc amusant'."},

    {type:"teach", trg:"adorable", src:"adorable, lovely", pos:"adj", gender:null,
     note:"Same form for both genders. Stronger than 'mignon' (cute).",
     example:"A: Tu as vu le bébé ?\nB: Oui, il est adorable !",
     exampleSrc:"A: Did you see the baby?\nB: Yes, he's adorable!",
     funFact:"Used for babies, puppies, and romantic partners alike. Very versatile compliment."},

    {type:"teach", trg:"affectueux", src:"affectionate, loving", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'affectueuse'. Describes warm people.",
     example:"A: Ton chat est affectueux ?\nB: Oui, il adore les câlins.",
     exampleSrc:"A: Is your cat affectionate?\nB: Yes, he loves cuddles.",
     funFact:"The French sign letters with 'affectueusement' (affectionately), similar to 'love' in English."},

    {type:"mc",
     q:"Quel adjectif signifie 'funny' ou 'entertaining' ?",
     opts:["amusant","aimable","adorable","affectueux"],
     ans:"amusant",
     hint:"This adjective comes from the verb 'amuser' and describes something that makes you laugh."},

    {type:"teach", trg:"actif", src:"active", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'active'. Describes energetic people.",
     example:"A: Tu fais du sport ?\nB: Oui, je suis très actif.",
     exampleSrc:"A: Do you play sports?\nB: Yes, I'm very active.",
     funFact:"The French 'population active' refers to the workforce, all people who work or seek work."},

    {type:"teach", trg:"absent", src:"absent, away", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'absente'. The opposite of 'présent'.",
     example:"A: Marie est là ?\nB: Non, elle est absente aujourd'hui.",
     exampleSrc:"A: Is Marie here?\nB: No, she's absent today.",
     funFact:"Teachers call 'les absents' (the absent ones) during roll call every morning in French schools."},

    {type:"teach", trg:"agité", src:"agitated, restless", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'agitée'. Can describe people or situations.",
     example:"A: Les enfants sont calmes ?\nB: Non, ils sont très agités.",
     exampleSrc:"A: Are the children calm?\nB: No, they're very restless.",
     funFact:"La mer agitée (rough sea) is a weather term you hear on French coastal forecasts."},

    {type:"teach", trg:"ancien", src:"old, former", pos:"adj", gender:null,
     note:"Before a noun: 'former'. After a noun: 'old/ancient'. Position matters!",
     example:"A: C'est un ancien professeur ?\nB: Oui, il était mon prof il y a cinq ans.",
     exampleSrc:"A: Is he a former teacher?\nB: Yes, he was my teacher five years ago.",
     funFact:"'Un ancien élève' means a former student. 'Un bâtiment ancien' means an old building. The meaning changes with position."},

    {type:"fb",
     s:"Marie est {1} aujourd'hui, elle n'est pas à l'école.",
     a:["absente"],
     opts:["absente","agitée","active","ancienne"],
     hint:"This adjective is the opposite of 'present' and means someone is not here.",
     sSrc:"Marie is {1} today, she's not at school."},

    {type:"teach", trg:"angoissé", src:"anxious, distressed", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'angoissée'. Stronger than 'inquiet'.",
     example:"A: Tu as l'air angoissé.\nB: Oui, j'ai un examen demain.",
     exampleSrc:"A: You look anxious.\nB: Yes, I have an exam tomorrow.",
     funFact:"'L'angoisse' (anxiety) was a key concept for French existentialist philosophers like Sartre."},

    {type:"teach", trg:"arrogant", src:"arrogant", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'arrogante'. Strongly negative.",
     example:"A: Tu aimes ton nouveau collègue ?\nB: Non, il est arrogant.",
     exampleSrc:"A: Do you like your new colleague?\nB: No, he's arrogant.",
     funFact:"A near-perfect cognate with English. Comes from Latin 'arrogare' (to claim for oneself)."},

    {type:"teach", trg:"attentif", src:"attentive, careful", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'attentive'. Positive trait.",
     example:"A: Ton fils est attentif en classe ?\nB: Oui, toujours.",
     exampleSrc:"A: Is your son attentive in class?\nB: Yes, always.",
     funFact:"'Soyez attentifs !' (Be attentive!) is something French teachers say multiple times a day."},

    {type:"teach", trg:"admirable", src:"admirable", pos:"adj", gender:null,
     note:"Same form for both genders. Used for impressive qualities or deeds.",
     example:"A: Elle aide tout le monde.\nB: C'est admirable !",
     exampleSrc:"A: She helps everyone.\nB: That's admirable!",
     funFact:"Another near-perfect English cognate. Both come from Latin 'admirabilis'."},

    {type:"mc",
     q:"Quel adjectif décrit une personne qui a peur avant un examen ?",
     opts:["angoissé","arrogant","amusant","admirable"],
     ans:"angoissé",
     hint:"This word describes a feeling of deep worry or distress about something upcoming."},

    {type:"teach", trg:"aimé", src:"loved, beloved", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'aimée'. Past participle of 'aimer'.",
     example:"A: Tu te sens aimé ?\nB: Oui, ma famille m'aime beaucoup.",
     exampleSrc:"A: Do you feel loved?\nB: Yes, my family loves me a lot.",
     funFact:"'Bien-aimé' (beloved) was used as a royal title: Louis XV was 'le Bien-Aimé'."},

    {type:"teach", trg:"animé", src:"animated, lively", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'animée'. Describes lively places or things.",
     example:"A: Comment est le quartier ?\nB: Très animé, surtout le soir.",
     exampleSrc:"A: How is the neighborhood?\nB: Very lively, especially in the evening.",
     funFact:"'Un dessin animé' means a cartoon/animated film. 'Anime' in Japanese comes from this French word."},

    {type:"teach", trg:"anonyme", src:"anonymous", pos:"adj", gender:null,
     note:"Same form for both genders. Used for unknown authors or callers.",
     example:"A: Qui a écrit cette lettre ?\nB: C'est anonyme, il n'y a pas de nom.",
     exampleSrc:"A: Who wrote this letter?\nB: It's anonymous, there's no name.",
     funFact:"The expression 'les Alcooliques anonymes' (Alcoholics Anonymous) uses this word."},

    {type:"teach", trg:"absolu", src:"absolute, total", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'absolue'. Means complete or total.",
     example:"A: Tu es sûr ?\nB: Oui, c'est une certitude absolue.",
     exampleSrc:"A: Are you sure?\nB: Yes, it's an absolute certainty.",
     funFact:"French monarchs ruled with 'pouvoir absolu' (absolute power). Louis XIV was the ultimate example."},

    {type:"teach", trg:"accompagné", src:"accompanied", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'accompagnée'. Often used with 'de'.",
     example:"A: Tu viens seul ?\nB: Non, je suis accompagné de ma soeur.",
     exampleSrc:"A: Are you coming alone?\nB: No, I'm accompanied by my sister.",
     funFact:"In restaurants, 'accompagné de' describes what comes with a dish: 'steak accompagné de frites'."},

    {type:"fb",
     s:"Le quartier est très {1} le samedi soir.",
     a:["animé"],
     opts:["animé","anonyme","absolu","accompagné"],
     hint:"This adjective means lively or bustling, full of activity and energy.",
     sSrc:"The neighborhood is very {1} on Saturday evenings."},

    {type:"match", pairs:[
      {trg:"agréable", src:"pleasant"},
      {trg:"arrogant", src:"arrogant"},
      {trg:"attentif", src:"attentive"},
      {trg:"angoissé", src:"anxious"},
      {trg:"animé", src:"lively"}
    ]},

    {type:"mc",
     q:"Quel adjectif change de sens selon sa position ?",
     opts:["ancien","adorable","arrogant","absolu"],
     ans:"ancien",
     hint:"This adjective has two different meanings depending on whether it comes before or after the noun it modifies."},

    {type:"fb",
     s:"Le bébé est {1}, tout le monde l'adore !",
     a:["adorable"],
     opts:["adorable","arrogant","absent","anonyme"],
     hint:"This word describes someone extremely cute and lovable.",
     sSrc:"The baby is {1}, everyone adores him!"}
  ]
};
export default LESSON_3;
