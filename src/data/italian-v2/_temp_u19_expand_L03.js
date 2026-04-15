// Unit 19 Expansion. Lesson 6: Verbi emotivi
const LESSON_6 = {
  id:"itv2_u19l6", title:"Verbi emotivi", icon:"🫀", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbi emotivi",
     desc:"Master the verbs that drive emotional expression in Italian. These action words let you describe how feelings change, develop, and resolve over time.",
     goals:["Use verbs describing emotional change","Express gradual emotional processes","Combine emotional verbs with relationship vocabulary"]},

    {type:"teach", trg:"arrabbiarsi", src:"to get angry", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Arrabbiarsi con' = to get angry with.\nFrom 'rabbia' (anger).",
     example:"A: Non arrabbiarti, era solo uno scherzo.\nB: Non mi arrabbio, ma non era divertente.",
     exampleSrc:"A: Do not get angry, it was just a joke.\nB: I am not getting angry, but it was not funny.",
     funFact:"'Arrabbiarsi' is the reflexive form: the anger happens to you. 'Arrabbiare qualcuno' (non-reflexive, rare) means to anger someone. The reflexive emphasizes that the emotion overtakes you. 'Mi fa arrabbiare' (it makes me angry) is the causative form used constantly in conversation."},

    {type:"teach", trg:"calmarsi", src:"to calm down", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Calmati!' = Calm down! (informal).\nFrom 'calma' (calm), ultimately from Greek 'kauma' (heat of the day, rest).",
     example:"A: Calmati, non e successo niente di grave.\nB: Hai ragione, devo respirare.",
     exampleSrc:"A: Calm down, nothing serious happened.\nB: You are right, I need to breathe.",
     funFact:"'Calmarsi' comes from 'calma,' which paradoxically derives from Greek 'kauma' (heat), referring to the midday rest when it was too hot to work. 'Stai calmo/a' (stay calm) and 'calmati' (calm down) are among the most frequently spoken phrases in Italian family life."},

    {type:"teach", trg:"vergognarsi", src:"to be ashamed / to feel embarrassed", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Vergognarsi di' = to be ashamed of.\n'Mi vergogno' = I am ashamed/embarrassed.",
     example:"A: Mi vergogno di quello che ho detto.\nB: Non vergognarti, succede a tutti.",
     exampleSrc:"A: I am ashamed of what I said.\nB: Do not be ashamed, it happens to everyone.",
     funFact:"'Vergognarsi' connects to 'vergogna' (shame) and the concept of 'bella figura' (making a good impression). In Italian culture, avoiding 'brutta figura' (bad impression) motivates much social behavior. 'Che vergogna!' (How embarrassing!) is one of the most common emotional exclamations."},

    {type:"teach", trg:"spaventarsi", src:"to get scared / to be frightened", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Mi sono spaventato' = I got scared.\nFrom 'spavento' (fright).",
     example:"A: Mi sono spaventata quando ho sentito il rumore.\nB: Era solo il gatto, non ti preoccupare.",
     exampleSrc:"A: I got scared when I heard the noise.\nB: It was just the cat, do not worry.",
     funFact:"'Spaventare' (to frighten) and 'spaventarsi' (to get frightened) form a pair. 'Spaventapasseri' (scarecrow) literally means 'sparrow-frightener.' Italian horror cinema, especially the giallo genre, gave the world masters of fright like Dario Argento, whose films are designed to 'spaventare.'"},

    {type:"teach", trg:"entusiasmarsi", src:"to get excited / to become enthusiastic", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Entusiasmarsi per' = to get excited about.\nFrom Greek 'enthousiasmos' (divine inspiration).",
     example:"A: Mi entusiasmo ogni volta che parlo di viaggi.\nB: Si vede! Ti brillano gli occhi.",
     exampleSrc:"A: I get excited every time I talk about travel.\nB: You can tell! Your eyes light up.",
     funFact:"'Entusiasmo' originally meant 'divine possession' in Greek. The gods would fill you with energy and passion. In modern Italian, 'entusiasmarsi' is entirely positive. 'Non entusiasmarti troppo' (do not get too excited) is a playful warning that something might not meet expectations."},

    {type:"teach", trg:"rassegnarsi", src:"to resign oneself / to accept reluctantly", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Rassegnarsi a' = to resign oneself to.\n'Mi rassegno' = I give in / I accept it.",
     example:"A: Mi sono rassegnato a non vincere.\nB: Non rassegnarti, puoi ancora farcela!",
     exampleSrc:"A: I have resigned myself to not winning.\nB: Do not give up, you can still make it!",
     funFact:"'Rassegnarsi' implies reluctant acceptance. It is stronger than just accepting: there is a sense of defeat. Italian has a rich vocabulary of acceptance levels: 'accettare' (neutral), 'rassegnarsi' (reluctant), 'arrendersi' (surrender). Each carries different emotional weight."},

    {type:"teach", trg:"incoraggiare", src:"to encourage", pos:"verb", gender:null,
     note:"Regular -are verb. From 'in-' + 'coraggio' (courage).\n'Ti incoraggio a provarci' = I encourage you to try.",
     example:"A: Ti incoraggio a seguire i tuoi sogni.\nB: Grazie, le tue parole mi danno forza.",
     exampleSrc:"A: I encourage you to follow your dreams.\nB: Thanks, your words give me strength.",
     funFact:"'Incoraggiare' literally means 'to put courage into' someone. 'Coraggio!' (Courage!) is itself a common exclamation of encouragement, like 'Come on!' or 'You can do it!' Italian parents say 'Coraggio!' to children facing challenges, from first steps to exam stress."},

    {type:"teach", trg:"deludere", src:"to disappoint", pos:"verb", gender:null,
     note:"Irregular -ere verb. Past participle: deluso.\nFalse friend: NOT 'to delude' (that is 'illudere').",
     example:"A: Non voglio deluderti.\nB: Non mi deluderai, ho fiducia in te.",
     exampleSrc:"A: I do not want to disappoint you.\nB: You will not disappoint me, I have faith in you.",
     funFact:"'Deludere' is a false friend: it means 'to disappoint,' NOT 'to delude.' English 'delude' translates to 'illudere' in Italian. 'Sono deluso' = I am disappointed (not deluded). This trap catches even advanced learners and is one of the most commonly tested false friends in Italian exams."},

    {type:"teach", trg:"stupirsi", src:"to be amazed / to be astonished", pos:"verb", gender:null,
     note:"Reflexive -ire verb. 'Mi stupisco di' = I am amazed at.\nFrom 'stupore' (amazement).",
     example:"A: Mi stupisco sempre della sua gentilezza.\nB: E una persona davvero speciale.",
     exampleSrc:"A: I am always amazed by his kindness.\nB: He is a truly special person.",
     funFact:"'Stupirsi' comes from 'stupore' (stupor, amazement), from Latin 'stupere' (to be stunned). 'Stupendo' (stunning, wonderful) is the most positive form of the root. 'Non mi stupisco' (I am not surprised) is a cool, knowing response when something predictable happens."},

    {type:"teach", trg:"apprezzare", src:"to appreciate", pos:"verb", gender:null,
     note:"Regular -are verb. From 'prezzo' (price, value).\n'Apprezzo molto il tuo aiuto' = I really appreciate your help.",
     example:"A: Apprezzo molto la tua onesta.\nB: Preferisco sempre dire la verita.",
     exampleSrc:"A: I really appreciate your honesty.\nB: I always prefer to tell the truth.",
     funFact:"'Apprezzare' literally means 'to assign a price/value to.' It shows you recognize someone's worth. 'Ti apprezzo' (I appreciate you) is a warm but measured compliment in Italian, stronger than 'grazie' but less intense than 'ti amo.' It perfectly fills the space between gratitude and love."},

    // Quiz steps
    {type:"mc", q:"What does 'deludere' actually mean?",
     opts:["To delude or to trick someone","To disappoint someone","To delete or remove something","To delay something"],
     ans:"To disappoint someone",
     hint:"Famous false friend. English 'delude' is 'illudere' in Italian. This verb means to let s... down."},

    {type:"fb", s:"Non {1}, era solo uno scherzo.",
     a:["arrabbiarti"],
     opts:["arrabbiarti","calmarti","vergognarti","stupirti"],
     hint:"Do not get angry. This reflexive verb comes from 'rabbia.' The emotion overtakes you.",
     sSrc:"Do not {1}, it was just a joke."},

    {type:"match", pairs:[
      {trg:"arrabbiarsi", src:"to get angry"},
      {trg:"calmarsi", src:"to calm down"},
      {trg:"spaventarsi", src:"to get scared"},
      {trg:"entusiasmarsi", src:"to get excited"},
      {trg:"rassegnarsi", src:"to resign oneself"}
    ]},

    {type:"mc", q:"What does 'Coraggio!' mean as an exclamation?",
     opts:["Be careful!","Come on! / You can do it!","I am sorry!","Goodbye!"],
     ans:"Come on! / You can do it!",
     hint:"From 'incoraggiare' (to encourage). Italian parents and coaches use this to motivate children and athletes."},

    {type:"fb", s:"Mi {1} sempre della sua gentilezza.",
     a:["stupisco"],
     opts:["stupisco","arrabbio","vergogno","rassegno"],
     hint:"You are amazed every time. From 'stupore' (amazement). 'Stupendo' is the most positive form of this root.",
     sSrc:"I am always {1} by his kindness."},

    {type:"mc", q:"What is the literal meaning of 'apprezzare'?",
     opts:["To assign a price or value to something","To press something down firmly","To pray or give thanks to someone","To approach or get close to"],
     ans:"To assign a price or value to something",
     hint:"From 'prezzo' (p.../v...). Recognizing someone's worth. 'Ti apprezzo' fills the space between gratitude and love."},

    {type:"fb", s:"Mi sono {1} a non vincere.",
     a:["rassegnato"],
     opts:["rassegnato","entusiasmato","arrabbiato","calmato"],
     hint:"You have reluctantly accepted defeat. This verb implies giving in, stronger than simple acceptance.",
     sSrc:"I have {1} myself to not winning."},

    {type:"mc", q:"Which Italian film genre is famous for trying to 'spaventare' audiences?",
     opts:["Commedia all'italiana","Neorealismo","Giallo (Italian horror)","Spaghetti western"],
     ans:"Giallo (Italian horror)",
     hint:"Dario Argento is a master of this genre. The name comes from the yellow covers of I... mystery paperbacks."}
  ]
};
export default LESSON_6;
