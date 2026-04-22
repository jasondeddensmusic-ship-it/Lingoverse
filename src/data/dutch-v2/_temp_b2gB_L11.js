// Dutch B2 gapB Lesson 11. Immigratie en Samenleving
// Immigration, integration, and social vocabulary

const LESSON_11 = {id:"nlv2_b2gB_l11", title:"Immigratie en Samenleving", icon:"\u{1F30D}", xp:25, board:true, steps:[
{type:"intro", title:"Immigratie en Samenleving",
 desc:"The Netherlands is a multicultural society shaped by centuries of immigration. Learn vocabulary for discussing integration, diversity, and social policy.",
 goals:["8 immigration and society nouns","Discuss integration and social issues","Understand Dutch multicultural vocabulary"]},

{type:"teach", trg:"de allochtoon", src:"person of foreign origin (dated term)", pos:"noun", gender:"c",
 note:"Officially replaced in 2016 by 'persoon met migratieachtergrond'.\nStill used informally.",
 example:"A: Het woord 'allochtoon' wordt niet meer officieel gebruikt.\nB: Wat zegt men nu dan?\nA: 'Persoon met een migratieachtergrond.'\nB: Dat is een stuk langer.",
 exampleSrc:"A: The word 'allochtoon' is no longer officially used.\nB: What do people say now?\nA: 'Person with a migration background.'\nB: That's a lot longer.",
 funFact:"The CBS (Dutch statistics bureau) stopped using 'allochtoon/autochtoon' in 2016 because the terms were considered stigmatizing."},

{type:"teach", trg:"de immigrante", src:"female immigrant", pos:"noun", gender:"c",
 note:"Feminine form of 'immigrant'.\nMasculine: de immigrant. Plural: de immigranten.",
 example:"A: Ze is een immigrante uit Marokko.\nB: Hoe lang woont ze al in Nederland?\nA: Al twintig jaar.\nB: Dan is ze meer Nederlander dan immigrant.",
 exampleSrc:"A: She is an immigrant from Morocco.\nB: How long has she lived in the Netherlands?\nA: Twenty years already.\nB: Then she's more Dutch than immigrant.",
 funFact:"About 25% of the Dutch population has at least one parent born abroad, making the Netherlands one of Europe's most diverse countries."},

{type:"teach", trg:"de kansarmoede", src:"poverty of opportunities / systemic poverty", pos:"noun", gender:"c",
 note:"Kans (chance/opportunity) + armoede (poverty).\nLack of opportunities, not just money.",
 example:"A: Kansarmoede is moeilijk te doorbreken.\nB: Ja, het gaat verder dan geld.\nA: Onderwijs is de sleutel.\nB: Daar ben ik het mee eens.",
 exampleSrc:"A: Poverty of opportunity is hard to break through.\nB: Yes, it goes beyond money.\nA: Education is the key.\nB: I agree with that.",
 funFact:"'Kansarmoede' is a Belgian Dutch term that gained wider use. It emphasizes that poverty is about lack of chances, not just lack of money."},

{type:"teach", trg:"de feministe", src:"feminist", pos:"noun", gender:"c",
 note:"Feminine form. Also used generically.\n'Het feminisme' = feminism.",
 example:"A: Aletta Jacobs was een bekende feministe.\nB: Ja, ze vocht voor kiesrecht.\nA: En voor vrouwenonderwijs.\nB: Een echte pionier.",
 exampleSrc:"A: Aletta Jacobs was a famous feminist.\nB: Yes, she fought for suffrage.\nA: And for women's education.\nB: A true pioneer.",
 funFact:"The Netherlands was the first country to have a female prime minister candidate (1977) but has never actually had a female PM."},

{type:"teach", trg:"de gelegenheidsonderneming", src:"pop-up business / occasional venture", pos:"noun", gender:"c",
 note:"Gelegenheid (occasion) + onderneming (enterprise).\nA business for a specific occasion or period.",
 example:"A: Het is een gelegenheidsonderneming.\nB: Alleen voor de kerstmarkt?\nA: Ja, daarna stopt ze ermee.\nB: Slim, geen vast contract nodig.",
 exampleSrc:"A: It's a pop-up business.\nB: Only for the Christmas market?\nA: Yes, after that she stops.\nA: Smart, no permanent contract needed.",
 funFact:"Pop-up stores and seasonal businesses are increasingly popular in Dutch cities, especially during events and holidays."},

{type:"teach", trg:"de hobbyclub", src:"hobby club", pos:"noun", gender:"c",
 note:"Hobby + club. Social groups organized around shared interests.\n'De vereniging' = association (more formal).",
 example:"A: Ben je lid van een hobbyclub?\nB: Ja, een fotoclub. En jij?\nA: Een leesclub, we komen maandelijks samen.\nB: Leuk, dat klinkt gezellig.",
 exampleSrc:"A: Are you a member of a hobby club?\nB: Yes, a photography club. And you?\nA: A book club, we meet monthly.\nB: Nice, that sounds cozy.",
 funFact:"The Dutch 'verenigingsleven' (club life) is extremely rich. There are hobby clubs for everything from birdwatching to medieval re-enactment."},

{type:"teach", trg:"het internationalisme", src:"internationalism", pos:"noun", gender:"n",
 note:"The ideology of international cooperation.\n'Internationalistisch' = internationalist.",
 example:"A: Internationalisme zit in het Nederlandse DNA.\nB: Als klein handelsland logisch.\nA: We zijn altijd op de wereld gericht geweest.\nB: Dat zie je aan de vele talen die we spreken.",
 exampleSrc:"A: Internationalism is in Dutch DNA.\nB: Logical for a small trading nation.\nA: We've always been oriented toward the world.\nB: You can see that in the many languages we speak.",
 funFact:"The Netherlands hosts the International Court of Justice, the ICC, and many international organizations, all in The Hague."},

{type:"teach", trg:"de insider", src:"insider", pos:"noun", gender:"c",
 note:"English loanword. Someone with inside knowledge.\n'Insiderinformatie' = insider information.",
 example:"A: Volgens een insider gaat het bedrijf fuseren.\nB: Dat is nog niet officieel.\nA: Nee, het is een gerucht.\nB: Laten we afwachten.",
 exampleSrc:"A: According to an insider, the company will merge.\nB: That's not official yet.\nA: No, it's a rumor.\nB: Let's wait and see.",
 funFact:"Insider trading (handel met voorkennis) is strictly prohibited in the Netherlands and monitored by the AFM (financial markets authority)."},

{type:"mc", q:"Waarom wordt 'allochtoon' niet meer officieel gebruikt?",
 opts:["It was considered stigmatizing","It was grammatically incorrect","Nobody knew the meaning","It was too long"],
 ans:"It was considered stigmatizing",
 hint:"The term was replaced because it labeled people negatively based on their background"},

{type:"fb", s:"{1} gaat verder dan gebrek aan geld alleen.",
 a:["Kansarmoede"], opts:["Kansarmoede","Internationalisme","Hobbyclub","Insider"],
 hint:"Poverty of opportunities, not just financial poverty",
 sSrc:"{1} goes beyond just a lack of money."},

{type:"mc", q:"'De gelegenheidsonderneming' is:",
 opts:["A large corporation","A pop-up or seasonal business","A government agency","A permanent store"],
 ans:"A pop-up or seasonal business",
 hint:"Gelegenheid (occasion) + onderneming (enterprise). Only for a specific time or event."},

{type:"fb", s:"Aletta Jacobs was een bekende {1}.",
 a:["feministe"], opts:["feministe","allochtoon","insider","immigrante"],
 hint:"A woman who fought for women's rights and suffrage",
 sSrc:"Aletta Jacobs was a famous {1}."},

{type:"match", pairs:[
 {trg:"de allochtoon", src:"person of foreign origin"},
 {trg:"de immigrante", src:"female immigrant"},
 {trg:"de kansarmoede", src:"poverty of opportunity"},
 {trg:"de feministe", src:"feminist"}
]},

{type:"mc", q:"'Volgens een insider' betekent:",
 opts:["According to the boss","According to a teacher","According to someone with inside knowledge","According to the newspaper"],
 ans:"According to someone with inside knowledge",
 hint:"An insider has access to non-public information"},

{type:"fb", s:"Ben je lid van een {1}?",
 a:["hobbyclub"], opts:["hobbyclub","kansarmoede","internationalisme","gelegenheidsonderneming"],
 hint:"A social group organized around a shared interest or pastime",
 sSrc:"Are you a member of a {1}?"},

{type:"match", pairs:[
 {trg:"de gelegenheidsonderneming", src:"pop-up business"},
 {trg:"de hobbyclub", src:"hobby club"},
 {trg:"het internationalisme", src:"internationalism"},
 {trg:"de insider", src:"insider"}
]}
]};
export default LESSON_11;
