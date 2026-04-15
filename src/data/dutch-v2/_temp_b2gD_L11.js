// L11: Informatie en Digitaal — Information and Digital
const LESSON_11 = {
  id:"nlv2_b2gD_l11", title:"Informatie en Digitaal", icon:"\u{1F4BB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Information and Digital",
     desc:"The Netherlands is one of the most digitally connected nations on earth. Master vocabulary about information, internet culture, and the digital world.",
     goals:["Master 10 information and digital terms","Discuss internet habits and digital culture","Navigate tech vocabulary in Dutch"]},

    {type:"teach", trg:"de informatieverschaffing", src:"the provision of information", pos:"noun", gender:"c",
     note:"Common gender (de). Informatie (information) + verschaffing (provision/supply).\nFormal term used in policy and law.",
     example:"A: De informatieverschaffing aan burgers moet beter.\nB: Wat gaat er mis?\nA: De website is onduidelijk.\nB: En niet iedereen is digitaal vaardig.",
     exampleSrc:"A: The provision of information to citizens needs to improve.\nB: What's going wrong?\nA: The website is unclear.\nB: And not everyone is digitally literate.",
     funFact:"The Dutch government has a legal duty of 'informatieverschaffing'. Citizens have the right to access government information under the Wet open overheid (Open Government Act)."},

    {type:"teach", trg:"de informatiestress", src:"information stress / information overload", pos:"noun", gender:"c",
     note:"Common gender (de). Informatie (information) + stress.\n'Last van informatiestress' = suffering from information stress.",
     example:"A: Ik heb last van informatiestress.\nB: Te veel nieuws en meldingen?\nA: Precies, mijn telefoon staat nooit stil.\nB: Probeer een digitale detox.",
     exampleSrc:"A: I'm suffering from information stress.\nB: Too much news and notifications?\nA: Exactly, my phone never stops.\nB: Try a digital detox.",
     funFact:"Dutch research shows that 'informatiestress' leads to lower productivity and higher burnout rates. Many Dutch companies now encourage 'beeldschermvrije pauzes' (screen-free breaks)."},

    {type:"teach", trg:"het internetgedrag", src:"internet behaviour / online behaviour", pos:"noun", gender:"n",
     note:"Neuter (het). Internet + gedrag (behaviour).\n'Veilig internetgedrag' = safe internet behaviour.",
     example:"A: Scholen leren kinderen over veilig internetgedrag.\nB: Wat leren ze precies?\nA: Geen persoonlijke gegevens delen.\nB: En herkennen van nepnieuws.",
     exampleSrc:"A: Schools teach children about safe internet behaviour.\nB: What exactly do they learn?\nA: Not to share personal information.\nB: And to recognise fake news.",
     funFact:"The Netherlands has one of the highest internet penetration rates in the world (over 98%). Digital literacy education starts in primary school."},

    {type:"teach", trg:"het informatiemateriaal", src:"the information material / brochures", pos:"noun", gender:"n",
     note:"Neuter (het). Informatie (information) + materiaal (material).\n'Informatiemateriaal verspreiden' = to distribute information material.",
     example:"A: Is er informatiemateriaal beschikbaar?\nB: Ja, er liggen folders bij de balie.\nA: Mag ik er een meenemen?\nB: Natuurlijk, neem er gerust meer.",
     exampleSrc:"A: Is there information material available?\nB: Yes, there are brochures at the counter.\nA: May I take one?\nB: Of course, feel free to take more.",
     funFact:"Despite being a digital-first society, the Dutch still love printed 'folders' (brochures). Supermarket flyers arrive weekly in most letterboxes unless you display a 'Nee/Nee' sticker."},

    {type:"mc",
     q:"Wat is 'informatiestress'?",
     opts:["Spanning door te veel informatie en meldingen","Stress tijdens een examen","Angst om informatie te delen","Problemen met je computer"],
     ans:"Spanning door te veel informatie en meldingen",
     hint:"This type of stress comes from being overwhelmed by the volume of news, messages, and notifications in the digital age."},

    {type:"teach", trg:"de inschakeling", src:"the involvement / engagement / activation", pos:"noun", gender:"c",
     note:"Common gender (de). From 'inschakelen' (to involve/engage/switch on).\n'De inschakeling van experts' = the involvement of experts.",
     example:"A: De inschakeling van de politie was nodig.\nB: Wat was er aan de hand?\nA: Een ernstig ongeluk op de snelweg.\nB: Gelukkig kwamen ze snel.",
     exampleSrc:"A: The involvement of the police was necessary.\nB: What was going on?\nA: A serious accident on the motorway.\nB: Fortunately they came quickly.",
     funFact:"'Inschakelen' literally means 'to switch on' or 'to engage'. When you 'inschakelen' a professional, you 'activate' their expertise. The word bridges technical and human domains."},

    {type:"teach", trg:"het gejoel", src:"the jeering / hooting / cheering", pos:"noun", gender:"n",
     note:"Neuter (het). From 'joelen' (to jeer/hoot).\nCan be positive (cheering) or negative (jeering).",
     example:"A: Het gejoel van het publiek was oorverdovend.\nB: Waren ze blij of boos?\nA: Blij! Het was een geweldige goal.\nB: De sfeer was fantastisch.",
     exampleSrc:"A: The cheering of the crowd was deafening.\nB: Were they happy or angry?\nA: Happy! It was an amazing goal.\nB: The atmosphere was fantastic.",
     funFact:"Dutch football fans are known for their enthusiasm. 'Gejoel' in a stadium can reach over 100 decibels, comparable to a rock concert."},

    {type:"teach", trg:"de kluif", src:"the bone (to gnaw on) / tough job", pos:"noun", gender:"c",
     note:"Common gender (de). Related to 'kluiven' (to gnaw).\nIdiom: 'een hele kluif' = a tough job, a real challenge.",
     example:"A: Dat project wordt een hele kluif.\nB: Hoeveel tijd krijgen we?\nA: Drie maanden voor het hele systeem.\nB: Dan moeten we snel beginnen.",
     exampleSrc:"A: That project will be a tough job.\nB: How much time do we get?\nA: Three months for the entire system.\nB: Then we need to start quickly.",
     funFact:"'Een hele kluif' literally means 'a whole bone to gnaw on'. Just as a dog spends a long time on a bone, a difficult task takes persistent effort."},

    {type:"fb",
     s:"Scholen besteden meer aandacht aan veilig {1} van leerlingen.",
     a:["internetgedrag"],
     opts:["internetgedrag","informatiestress","informatiemateriaal","gejoel"],
     hint:"How people behave when using the internet. Compound: internet + behaviour.",
     sSrc:"Schools are paying more attention to safe {1} of students."},

    {type:"teach", trg:"de knokkel", src:"the knuckle", pos:"noun", gender:"c",
     note:"Common gender (de). Related to German 'Knochel'.\n'Op je knokkels tikken' = to rap someone's knuckles (reprimand).",
     example:"A: Ik heb mijn knokkel gestoten.\nB: Aan de deur?\nA: Ja, dat doet pijn.\nB: Doe er ijs op, dat helpt.",
     exampleSrc:"A: I bumped my knuckle.\nB: On the door?\nA: Yes, that hurts.\nB: Put ice on it, that helps.",
     funFact:"The expression 'op de knokkels tikken' (to tap the knuckles) means to reprimand someone. It references the old school practice where teachers would rap students' knuckles with a ruler."},

    {type:"teach", trg:"de korrel", src:"the grain / granule / pellet", pos:"noun", gender:"c",
     note:"Common gender (de). Diminutive: 'korreltje'.\nIdiom: 'met een korreltje zout nemen' = to take with a grain of salt.",
     example:"A: Neem dat verhaal met een korreltje zout.\nB: Denk je dat het niet waar is?\nA: Het klinkt overdreven.\nB: Je hebt gelijk, ik geloof niet alles.",
     exampleSrc:"A: Take that story with a grain of salt.\nB: Do you think it's not true?\nA: It sounds exaggerated.\nB: You're right, I don't believe everything.",
     funFact:"'Met een korreltje zout nemen' is used identically to the English 'take with a grain of salt'. The expression comes from Pliny the Elder, who recommended salt as an antidote to poison."},

    {type:"match", pairs:[
      {trg:"informatieverschaffing", src:"provision of information"},
      {trg:"informatiestress", src:"information overload"},
      {trg:"inschakeling", src:"involvement / activation"},
      {trg:"kluif", src:"bone / tough job"},
      {trg:"korrel", src:"grain / granule"}
    ]},

    {type:"mc",
     q:"Wat betekent 'een hele kluif'?",
     opts:["Een moeilijke taak die veel tijd kost","Een groot diner","Een hondenspeeltje","Een korte pauze"],
     ans:"Een moeilijke taak die veel tijd kost",
     hint:"This idiom compares a challenging task to a bone that takes a long time to gnaw on."},

    {type:"fb",
     s:"De {1} van externe adviseurs kostte meer dan verwacht.",
     a:["inschakeling"],
     opts:["inschakeling","informatieverschaffing","informatiestress","internetgedrag"],
     hint:"The act of involving or engaging someone's services. From 'inschakelen' (to switch on / involve).",
     sSrc:"The {1} of external advisors cost more than expected."}
  ]
};
export default LESSON_11;
