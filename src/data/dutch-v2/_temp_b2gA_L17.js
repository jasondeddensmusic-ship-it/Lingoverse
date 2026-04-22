// B2 Gap Batch A. Lesson 17: Recht & Bestuur
// Theme: Law, governance, civil rights

const LESSON_17 = {id:"nlv2_b2gA_l17", title:"Recht & Bestuur", icon:"\u{2696}", xp:40, board:true, steps:[
  {type:"intro", title:"Recht & Bestuur",
   desc:"Learn vocabulary about law, governance, and civil administration. These terms are essential for understanding Dutch news, government communications, and civic life.",
   goals:["Learn legal and governance vocabulary","Discuss civil administration in Dutch","Understand compound nouns about law and procedure"]},

  {type:"teach", trg:"de jurist", src:"jurist, legal professional", pos:"noun", gender:"c",
   note:"From Latin 'iuris' (of law). A law graduate or legal professional.\nBroader than 'advocaat' (lawyer/barrister).",
   example:"A: Mijn zus is jurist bij de gemeente.\nB: Wat doet ze precies?\nA: Ze adviseert over wetten en regelgeving.\nB: Een jurist hoeft geen advocaat te zijn, toch?",
   exampleSrc:"A: My sister is a legal professional at the municipality.\nB: What does she do exactly?\nA: She advises on laws and regulations.\nB: A jurist doesn't have to be a lawyer, right?",
   funFact:"In the Netherlands, every law graduate is a 'jurist', but only those with a bar admission are 'advocaat'. About 20,000 people work as jurist in Dutch government services alone."},

  {type:"teach", trg:"de finale", src:"final, finale", pos:"noun", gender:"c",
   note:"From Italian/Latin 'finalis'. The last and decisive event.\nUsed in sports, music, and competitions.",
   example:"A: Nederland staat in de finale van het EK!\nB: Wanneer is de wedstrijd?\nA: Zondagavond. Het hele land kijkt.\nB: De finale wordt vast spannend.",
   exampleSrc:"A: The Netherlands is in the final of the European Championship!\nB: When is the match?\nA: Sunday evening. The whole country is watching.\nB: The final is sure to be exciting.",
   funFact:"The most famous Dutch finale was the 1974 World Cup final against Germany in Munich. The Netherlands lost 2-1. The Dutch team's 'Total Football' style changed the sport forever despite the loss."},

  {type:"teach", trg:"de kanjer", src:"whopper, impressive person/thing", pos:"noun", gender:"c",
   note:"Informal but widely used. Something or someone impressively big.\nAlso: a school anti-bullying programme.",
   example:"A: Dat was een kanjer van een vis!\nB: Hoe groot was hij?\nA: Minstens een meter lang.\nB: Wat een kanjer! Heb je een foto?",
   exampleSrc:"A: That was a whopper of a fish!\nB: How big was it?\nA: At least a meter long.\nB: What a whopper! Do you have a photo?",
   funFact:"'De Kanjertraining' is the most widely used anti-bullying programme in Dutch primary schools. Over 2,000 schools use it. Being a 'kanjer' here means being confident and kind."},

  {type:"teach", trg:"de kapsel", src:"hairstyle, haircut", pos:"noun", gender:"n",
   note:"het-word. From kappen (to cut/style hair).\nEveryday vocabulary for appearance.",
   example:"A: Wat een leuk kapsel heb je!\nB: Dank je, ik ben net naar de kapper geweest.\nA: Welk kapsel wil je de volgende keer?\nB: Misschien iets korter.",
   exampleSrc:"A: What a nice hairstyle you have!\nB: Thanks, I just went to the hairdresser.\nA: What hairstyle do you want next time?\nB: Maybe something shorter.",
   funFact:"The Dutch word 'kapper' (hairdresser) comes from the same root as 'kapsel'. Going to the kapper is a social ritual in the Netherlands. Many people visit their kapper every 6-8 weeks."},

  {type:"teach", trg:"de karakteristiek", src:"characteristic, distinctive feature", pos:"adj", gender:null,
   note:"As adjective: characteristic, typical.\nAlso used as noun: de karakteristiek (the characteristic).",
   example:"A: De grachten zijn karakteristiek voor Amsterdam.\nB: Dat klopt, je ziet ze nergens anders zo.\nA: Wat vind jij het meest karakteristiek aan Nederland?\nB: De vlakheid van het landschap.",
   exampleSrc:"A: The canals are characteristic of Amsterdam.\nB: That's true, you don't see them like that anywhere else.\nA: What do you find most characteristic about the Netherlands?\nB: The flatness of the landscape.",
   funFact:"The most karakteristieke Dutch features according to surveys: windmills, tulips, bicycles, flat landscape, and directness. The word itself comes from Greek 'charakter' (engraved mark)."},

  {type:"teach", trg:"de hype", src:"hype, craze", pos:"noun", gender:"c",
   note:"From English. Excessive publicity or excitement about something.\nOften used critically in Dutch.",
   example:"A: Denk je dat dit product een hype is?\nB: Ja, over een jaar praat niemand er meer over.\nA: Niet elke hype verdwijnt. Sommige worden blijvend.\nB: Dat is waar, maar de meeste zijn tijdelijk.",
   exampleSrc:"A: Do you think this product is a hype?\nB: Yes, in a year nobody will be talking about it anymore.\nA: Not every hype disappears. Some become permanent.\nB: That's true, but most are temporary.",
   funFact:"Dutch people love debating whether something is a hype or a real trend. The word is used much more frequently in Dutch than in English, often with a critical undertone suggesting something is overblown."},

  {type:"tip", title:"Borrowed Words in B2 Dutch",
   text:"B2-level Dutch contains many international borrowings:\n\nFrom Latin: jurist, finale, karakteristiek\nFrom English: hype, item, design\nFrom French: kade, finale\nFrom Italian: finale\n\nThese words are fully integrated into Dutch:\n- They follow Dutch grammar (de hype, het item)\n- They take Dutch plurals (hypen? No: hypes)\n- They appear in Dutch compounds (hypegevoelig = susceptible to hype)\n\nKnowing the origin helps with spelling and gender.",
   deepDive:{title:"Dutch Directness About Trends",
    text:"Dutch culture values 'nuchterheid' (sobriety, level-headedness). When something becomes a hype, Dutch people are quick to deflate it:\n\n'Doe maar normaal, dan doe je al gek genoeg.'\n(Just act normal, that's crazy enough.)\n\nThis explains why words like 'hype' carry a slightly negative connotation in Dutch. Being enthusiastic is fine, but getting carried away is very un-Dutch."}},

  {type:"mc", q:"Welk woord betekent 'jurist, legal professional'?",
   opts:["de jurist","de finale","de kanjer","de hype"],
   ans:"de jurist",
   hint:"From Latin 'iuris' (of law). A law graduate who works in a legal capacity."},

  {type:"fb", s:"Nederland staat in de {1} van het EK!",
   a:["finale"], opts:["finale","hype","kanjer","karakteristiek"],
   hint:"The last and most important match of a tournament.",
   sSrc:"The Netherlands is in the final of the European Championship!"},

  {type:"mc", q:"Dat was een kanjer van een vis! Wat betekent 'kanjer'?",
   opts:["something old","something impressively big","something very small","something expensive"],
   ans:"something impressively big",
   hint:"Informal Dutch for a whopper, s... i... large or good."},

  {type:"fb", s:"De grachten zijn {1} voor Amsterdam.",
   a:["karakteristiek"], opts:["karakteristiek","finale","hype","kanjer"],
   hint:"Distinctive, typical of something. What makes Amsterdam uniquely recognizable.",
   sSrc:"The canals are characteristic of Amsterdam."},

  {type:"match", pairs:[
    {trg:"jurist", src:"legal professional"},
    {trg:"finale", src:"final"},
    {trg:"kanjer", src:"whopper, impressive one"},
    {trg:"kapsel", src:"hairstyle"},
    {trg:"karakteristiek", src:"characteristic"},
    {trg:"hype", src:"hype, craze"}
  ]},

  {type:"mc", q:"Denk je dat dit product een hype is? Wat is een 'hype'?",
   opts:["a marketing strategy","a product review","excessive excitement about something temporary","a price increase"],
   ans:"excessive excitement about something temporary",
   hint:"From English. When everyone is crazy a... s..., but it might not last."},

  {type:"fb", s:"Mijn zus is {1} bij de gemeente en adviseert over regelgeving.",
   a:["jurist"], opts:["jurist","kanjer","hype","finale"],
   hint:"A legal professional who studied law and works in government.",
   sSrc:"My sister is a legal professional at the municipality and advises on regulations."},

  {type:"drag_fill", s:"Het nieuwe {1} van de zangeres was {2} voor haar stijl en werd geen kortdurende {3}.",
   blanks:{"1":"kapsel","2":"karakteristiek","3":"hype"},
   pool:["kapsel","karakteristiek","hype","finale","kanjer"],
   hint:"The singer's new hairstyle was typical of her style and didn't turn out to be a passing craze."}
]};
export default LESSON_17;
