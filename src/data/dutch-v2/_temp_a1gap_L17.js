// L17: Pronouns and Social Phrases, 20 A1 gap words
const LESSON_17 = {
  id:"nlv2_a1gap_l17", title:"Voornaamwoorden en Sociale Zinnen", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pronouns and Social Phrases",
     desc:"Learn Dutch personal pronouns and essential social phrases. Who is 'hij', 'zij', 'ik', 'jij'?",
     goals:["Master Dutch personal pronouns","Use je/jij and me/mij correctly","Understand informal vs formal forms"]},

    {type:"teach", trg:"ik", src:"I", pos:"pron", gender:null,
     note:"First person singular. Always lowercase unless starting a sentence.",
     example:"A: Wie ben jij?\nB: Ik ben Lisa.",
     exampleSrc:"A: Who are you?\nB: I am Lisa.",
     funFact:"Unlike English 'I', Dutch 'ik' is lowercase. Only capitalized at sentence start."},

    {type:"teach", trg:"jij", src:"you (stressed)", pos:"pron", gender:null,
     note:"Stressed form. Unstressed: 'je'. Informal.",
     example:"A: Jij bent het! Wat leuk!\nB: Ja, hier ben ik!",
     exampleSrc:"A: It's you! How nice!\nB: Yes, here I am!",
     funFact:"'Jij' is stressed (YOU are the one). 'Je' is the everyday unstressed form."},

    {type:"teach", trg:"je", src:"you (unstressed) / your", pos:"pron", gender:null,
     note:"Unstressed 'you' or possessive 'your'. Most common form.",
     example:"A: Hoe gaat het met je?\nB: Goed, dank je!",
     exampleSrc:"A: How are you?\nB: Good, thank you!",
     funFact:"'Je' is used much more often than 'jij'. It also means 'your' (je huis = your house)."},

    {type:"teach", trg:"hij", src:"he", pos:"pron", gender:null,
     note:"Third person singular masculine.",
     example:"A: Waar is Mark?\nB: Hij is in de keuken.",
     exampleSrc:"A: Where is Mark?\nB: He is in the kitchen.",
     funFact:"Cognate with English 'he'. Nearly identical in sound and use."},

    {type:"mc",
     q:"___ is in de keuken. (over Mark)",
     opts:["Hij","Zij","Het","Ik"],
     ans:"Hij",
     hint:"Which pronoun refers to a male person? Third person singular."},

    {type:"teach", trg:"hem", src:"him", pos:"pron", gender:null,
     note:"Object form of 'hij'. Used after verbs and prepositions.",
     example:"A: Ken je hem?\nB: Ja, ik ken hem goed.",
     exampleSrc:"A: Do you know him?\nB: Yes, I know him well.",
     funFact:"Cognate with English 'him'. Same form, same function."},

    {type:"teach", trg:"hen", src:"them (object after preposition)", pos:"pron", gender:null,
     note:"Formal object form for people. After prepositions: 'voor hen'.",
     example:"A: Ik koop een cadeau voor hen.\nB: Wat lief van je!",
     exampleSrc:"A: I'm buying a gift for them.\nB: How sweet of you!",
     funFact:"In practice, many Dutch people use 'hun' or 'ze' instead. 'Hen' is formal."},

    {type:"teach", trg:"me", src:"me (unstressed)", pos:"pron", gender:null,
     note:"Unstressed object form of 'ik'. More common than 'mij'.",
     example:"A: Kun je me helpen?\nB: Ja, natuurlijk!",
     exampleSrc:"A: Can you help me?\nB: Yes, of course!",
     funFact:"Like 'je' vs 'jij': 'me' is everyday, 'mij' is stressed/emphasized."},

    {type:"teach", trg:"mij", src:"me (stressed)", pos:"pron", gender:null,
     note:"Stressed object form of 'ik'. For emphasis.",
     example:"A: Wie bedoel je? Mij?\nB: Ja, jou bedoel ik!",
     exampleSrc:"A: Who do you mean? Me?\nB: Yes, I mean you!",
     funFact:"Used for emphasis: 'Dat is voor MIJ' (That is for ME). Everyday form is 'me'."},

    {type:"teach", trg:"jou", src:"you (object, stressed)", pos:"pron", gender:null,
     note:"Stressed object form of 'jij'. After verbs and prepositions.",
     example:"A: Ik heb een cadeau voor jou.\nB: Echt? Wat lief!",
     exampleSrc:"A: I have a gift for you.\nB: Really? How sweet!",
     funFact:"Stressed 'you'. Everyday unstressed form is 'je'. 'Voor jou' = for YOU."},

    {type:"fb",
     s:"Kun je {1} helpen met de boodschappen?",
     a:["me"],
     opts:["me","mij","hem","hen"],
     hint:"Which is the unstressed form of 'I' as an object? Everyday, casual form.",
     sSrc:"Can you help {1} with the groceries?"},

    {type:"teach", trg:"alles", src:"everything", pos:"pron", gender:null,
     note:"Indefinite pronoun. Opposite of 'niets' (nothing).",
     example:"A: Heb je alles?\nB: Ja, ik heb alles ingepakt.",
     exampleSrc:"A: Do you have everything?\nB: Yes, I packed everything.",
     funFact:"From 'al' (all) + '-es'. Same root as English 'all'."},

    {type:"teach", trg:"niets", src:"nothing", pos:"pron", gender:null,
     note:"Indefinite pronoun. Opposite of 'alles'.",
     example:"A: Wat is er aan de hand?\nB: Niets, alles is goed.",
     exampleSrc:"A: What's wrong?\nB: Nothing, everything is fine.",
     funFact:"Also spelled 'niks' in informal Dutch. 'Niks aan de hand' = Nothing wrong."},

    {type:"teach", trg:"niemand", src:"nobody / no one", pos:"pron", gender:null,
     note:"Indefinite pronoun. Opposite of 'iedereen'.",
     example:"A: Is er iemand thuis?\nB: Nee, er is niemand.",
     exampleSrc:"A: Is anyone home?\nB: No, no one is here.",
     funFact:"Compound: nie (not) + mand (from 'man'). Literally 'not a man/person'."},

    {type:"teach", trg:"iedereen", src:"everyone / everybody", pos:"pron", gender:null,
     note:"Indefinite pronoun. Opposite of 'niemand'.",
     example:"A: Iedereen is welkom!\nB: Wat leuk!",
     exampleSrc:"A: Everyone is welcome!\nB: How nice!",
     funFact:"Compound: ieder (each) + een (one). Literally 'each one'."},

    {type:"mc",
     q:"___ is welkom op het feest!",
     opts:["Alles","Iedereen","Niemand","Niets"],
     ans:"Iedereen",
     hint:"Which pronoun means 'everyone'? The opposite of 'nobody'."},

    {type:"teach", trg:"ieder", src:"each / every", pos:"pron", gender:null,
     note:"Synonym of 'elk'. Slightly more formal.",
     example:"A: Ieder kind krijgt een cadeau.\nB: Dat is heel leuk!",
     exampleSrc:"A: Each child gets a gift.\nB: That's very nice!",
     funFact:"Interchangeable with 'elk' in most contexts. 'Ieder' slightly warmer."},

    {type:"teach", trg:"elk", src:"each / every", pos:"pron", gender:null,
     note:"Synonym of 'ieder'. Very common.",
     example:"A: Elke dag leer ik iets nieuws.\nB: Dat is mooi!",
     exampleSrc:"A: Every day I learn something new.\nB: That's great!",
     funFact:"'Elk' and 'ieder' are interchangeable. 'Elk' is slightly more matter-of-fact."},

    {type:"teach", trg:"elkaar", src:"each other", pos:"pron", gender:null,
     note:"Reciprocal pronoun. 'We kennen elkaar' = We know each other.",
     example:"A: Kennen jullie elkaar?\nB: Ja, we zijn collega's.",
     exampleSrc:"A: Do you know each other?\nB: Yes, we are colleagues.",
     funFact:"Compound: elk + ander (other). Literally 'each other'. Transparent compound."},

    {type:"teach", trg:"ergens", src:"somewhere", pos:"pron", gender:null,
     note:"Indefinite pronoun of place. 'Ergens' = somewhere, 'nergens' = nowhere.",
     example:"A: Wil je ergens koffie drinken?\nB: Ja, goed idee!",
     exampleSrc:"A: Do you want to drink coffee somewhere?\nB: Yes, good idea!",
     funFact:"'Ergens' (somewhere), 'nergens' (nowhere), 'overal' (everywhere). A nice trio."},

    {type:"match", pairs:[
      {trg:"iedereen", src:"everyone"},
      {trg:"niemand", src:"nobody"},
      {trg:"alles", src:"everything"},
      {trg:"niets", src:"nothing"}
    ]}
  ]
};
export default LESSON_17;
