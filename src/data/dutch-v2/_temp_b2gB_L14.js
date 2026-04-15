// Dutch B2 gapB Lesson 14 — Maat en Ruimte
// Measurement, space, and dimension vocabulary

const LESSON_14 = {id:"nlv2_b2gB_l14", title:"Maat en Ruimte", icon:"\u{1F4D0}", xp:25, board:true, steps:[
{type:"intro", title:"Maat en Ruimte",
 desc:"From short durations to vast spaces, Dutch has precise vocabulary for describing size, time, and spatial relationships. Essential for B2-level precision.",
 goals:["8 measurement and spatial words","Express duration, size, and proximity precisely","Use descriptive adjectives for time and space"]},

{type:"teach", trg:"kortstondig", src:"short-lived / brief", pos:"adj", gender:null,
 note:"Kort (short) + stondig (from 'stonde', old word for moment).\nFor things that don't last.",
 example:"A: Het geluk was kortstondig.\nB: Wat is er gebeurd?\nA: Na drie maanden was het voorbij.\nB: Jammer, maar je hebt ervan geleerd.",
 exampleSrc:"A: The happiness was short-lived.\nB: What happened?\nA: After three months it was over.\nB: A shame, but you learned from it.",
 funFact:"'Stonde' is an archaic Dutch word for 'moment' that survives only in compounds like 'kortstondig' and 'langdurig'."},

{type:"teach", trg:"de kortheid", src:"brevity / shortness", pos:"noun", gender:"c",
 note:"From 'kort' (short).\n'In alle kortheid' = in brief, concisely.",
 example:"A: Kun je het in alle kortheid vertellen?\nB: Ja. We moeten bezuinigen.\nA: Dat is inderdaad kort.\nB: Maar het zegt genoeg.",
 exampleSrc:"A: Can you tell it in brief?\nB: Yes. We need to cut costs.\nA: That is indeed brief.\nB: But it says enough.",
 funFact:"The expression 'kortheid is de ziel van de geest' is the Dutch version of 'brevity is the soul of wit' from Shakespeare."},

{type:"teach", trg:"kortgeleden", src:"recently / a short time ago", pos:"adv", gender:null,
 note:"Kort (short) + geleden (ago).\n'Pas geleden' is a synonym.",
 example:"A: Wanneer is dat gebeurd?\nB: Kortgeleden, vorige week pas.\nA: Dat wist ik niet.\nB: Het was ook niet groot nieuws.",
 exampleSrc:"A: When did that happen?\nB: Recently, just last week.\nA: I didn't know that.\nB: It wasn't big news either.",
 funFact:"Dutch has many time adverbs built from adjective + geleden: 'lang geleden' (long ago), 'kortgeleden' (recently)."},

{type:"teach", trg:"kubiek", src:"cubic", pos:"adj", gender:null,
 note:"From Latin 'cubus'. 'Kubieke meter' = cubic meter.\n'Kubus' = cube.",
 example:"A: Hoeveel kubieke meter water past erin?\nB: Ongeveer drieduizend.\nA: Dat is een groot zwembad.\nB: Ja, olympisch formaat.",
 exampleSrc:"A: How many cubic meters of water does it hold?\nB: About three thousand.\nA: That's a big swimming pool.\nB: Yes, Olympic size.",
 funFact:"The Dutch water management system pumps billions of cubic meters of water annually to keep the country dry."},

{type:"teach", trg:"de kubus", src:"cube", pos:"noun", gender:"c",
 note:"A three-dimensional square shape.\n'De kubuswoningen' = the cube houses (Rotterdam).",
 example:"A: Ken je de kubuswoningen in Rotterdam?\nB: Ja, die schuine huizen!\nA: Ze zijn ontworpen door Piet Blom.\nB: Heel bijzonder om in te wonen.",
 exampleSrc:"A: Do you know the cube houses in Rotterdam?\nB: Yes, those tilted houses!\nA: They were designed by Piet Blom.\nB: Very special to live in.",
 funFact:"The Rotterdam cube houses (1984) by Piet Blom are tilted at 45 degrees. One is a museum you can visit to see how people live inside a cube."},

{type:"teach", trg:"het handbereik", src:"arm's reach / within reach", pos:"noun", gender:"n",
 note:"Hand + bereik (reach).\n'Binnen handbereik' = within arm's reach.",
 example:"A: Houd je telefoon binnen handbereik.\nB: Verwacht je een belangrijk telefoontje?\nA: Ja, het ziekenhuis kan bellen.\nB: Dan leg ik hem naast me neer.",
 exampleSrc:"A: Keep your phone within arm's reach.\nB: Are you expecting an important call?\nA: Yes, the hospital might call.\nB: Then I'll put it next to me.",
 funFact:"'Binnen handbereik' is used both literally (physically reachable) and figuratively (achievable, within grasp)."},

{type:"teach", trg:"honderdtwintig", src:"one hundred and twenty", pos:"num", gender:null,
 note:"Honderd (hundred) + twintig (twenty).\nDutch numbers: units before tens (twintig = twenty).",
 example:"A: Er waren honderdtwintig deelnemers.\nB: Dat is meer dan verwacht.\nA: We hadden maar honderd stoelen.\nB: Dan moeten er twintig staan.",
 exampleSrc:"A: There were one hundred and twenty participants.\nB: That's more than expected.\nA: We only had a hundred chairs.\nB: Then twenty had to stand.",
 funFact:"Dutch numbers put units before tens: 'eenentwintig' (one-and-twenty) not 'twenty-one'. This applies all the way up."},

{type:"teach", trg:"de kluts", src:"the count / composure (in expressions)", pos:"noun", gender:"c",
 note:"'De kluts kwijtraken' = to lose one's composure/bearings.\nAlso: beating eggs = 'kloppen/klutsen'.",
 example:"A: Ik was even de kluts kwijt.\nB: Dat kan iedereen overkomen.\nA: Er gebeurde zoveel tegelijk.\nB: Neem even rust, dan komt het goed.",
 exampleSrc:"A: I lost my bearings for a moment.\nB: That can happen to anyone.\nA: So much was happening at once.\nB: Take a break, it'll be fine.",
 funFact:"'De kluts kwijtraken' is one of the most common Dutch expressions for losing your composure or getting confused."},

{type:"mc", q:"'Kortstondig' betekent:",
 opts:["Very long","Short-lived","Repeated","Important"],
 ans:"Short-lived",
 hint:"Kort (s...) + stondig (from an old word for moment). Something that doesn't last."},

{type:"fb", s:"Kun je het {1} vertellen? We hebben weinig tijd.",
 a:["in alle kortheid"], opts:["in alle kortheid","kortgeleden","kortstondig","kubiek"],
 hint:"The expression meaning 'in brief, concisely'",
 sSrc:"Can you tell it {1}? We don't have much time."},

{type:"mc", q:"De kubuswoningen in Rotterdam zijn ontworpen door:",
 opts:["Rem Koolhaas","Piet Blom","Rietveld","Berlage"],
 ans:"Piet Blom",
 hint:"The architect who tilted houses at 45 degrees in 1984"},

{type:"fb", s:"Houd je telefoon binnen {1}.",
 a:["handbereik"], opts:["handbereik","kortheid","kluts","kubus"],
 hint:"The distance you can reach with your hand",
 sSrc:"Keep your phone within {1}."},

{type:"match", pairs:[
 {trg:"kortstondig", src:"short-lived"},
 {trg:"de kortheid", src:"brevity"},
 {trg:"kortgeleden", src:"recently"},
 {trg:"kubiek", src:"cubic"}
]},

{type:"mc", q:"'De kluts kwijtraken' betekent:",
 opts:["To find your way","To lose your composure","To break an egg","To win a prize"],
 ans:"To lose your composure",
 hint:"To get confused or disoriented when too much happens at once"},

{type:"fb", s:"Er waren {1} deelnemers bij de conferentie.",
 a:["honderdtwintig"], opts:["honderdtwintig","kortstondig","kubiek","kortgeleden"],
 hint:"The number 120 in Dutch",
 sSrc:"There were {1} participants at the conference."},

{type:"match", pairs:[
 {trg:"de kubus", src:"cube"},
 {trg:"het handbereik", src:"arm's reach"},
 {trg:"honderdtwintig", src:"one hundred and twenty"},
 {trg:"de kluts", src:"composure / count"}
]}
]};
export default LESSON_14;
