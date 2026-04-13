// L12: Descriptions and Qualities — 20 B1 gap words
const LESSON_12 = {
  id:"nlv2_b1gap_l12", title:"Beschrijvingen en Kenmerken", icon:"\u{1F50D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Descriptions and Qualities",
     desc:"Learn Dutch adjectives and descriptive words to express nuanced opinions, characteristics, and observations.",
     goals:["Master 20 descriptive words","Express nuanced opinions","Describe qualities and characteristics"]},

    {type:"teach", trg:"abstract", src:"abstract", pos:"adj", gender:null,
     note:"Adjective. Not concrete, theoretical or conceptual.",
     example:"A: Dit schilderij is heel abstract.\nB: Ja, ik begrijp het niet helemaal.",
     exampleSrc:"A: This painting is very abstract.\nB: Yes, I don't quite understand it.",
     funFact:"Same word in English and Dutch. From Latin 'abstractus' (drawn away). Mondriaan is famous for abstract art."},

    {type:"teach", trg:"alternatief", src:"alternative", pos:"adj", gender:null,
     note:"Adjective and noun. A different option.",
     example:"A: Is er een alternatief plan?\nB: Ja, we kunnen ook met de trein gaan.",
     exampleSrc:"A: Is there an alternative plan?\nB: Yes, we can also go by train.",
     funFact:"From Latin 'alternativus'. As a noun (het alternatief), it means 'the alternative'."},

    {type:"teach", trg:"aankomend", src:"upcoming / aspiring", pos:"adj", gender:null,
     note:"Adjective. Something that is about to happen, or a future professional.",
     example:"A: Het aankomende weekend gaan we weg.\nB: Waar gaan jullie naartoe?",
     exampleSrc:"A: This upcoming weekend we are going away.\nB: Where are you going?",
     funFact:"From 'aankomen' (to arrive). The future is 'arriving'. Also: 'aankomend arts' = aspiring doctor."},

    {type:"teach", trg:"aanstaande", src:"upcoming / next / fiancee", pos:"adj", gender:null,
     note:"Adjective. The coming/next one. Also noun: fiancee.",
     example:"A: Aanstaande maandag begint de cursus.\nB: Ben je er klaar voor?",
     exampleSrc:"A: Next Monday the course starts.\nB: Are you ready for it?",
     funFact:"As a noun, 'mijn aanstaande' means 'my fiance(e)'. A surprisingly romantic secondary meaning."},

    {type:"mc",
     q:"___ dinsdag heb ik een belangrijk examen.",
     opts:["Aanstaande","Afgelopen","Aankomend","Alternatief"],
     ans:"Aanstaande",
     hint:"Which adjective means 'next' or 'coming' when used with a day of the week?"},

    {type:"teach", trg:"afgelopen", src:"past / last / finished", pos:"adj", gender:null,
     note:"Adjective. Something that has already happened.",
     example:"A: Afgelopen zomer was het heel warm.\nB: Ja, meer dan dertig graden.",
     exampleSrc:"A: Last summer it was very hot.\nB: Yes, more than thirty degrees.",
     funFact:"From 'aflopen' (to end). The past has 'run off'. 'Afgelopen week' = last week."},

    {type:"teach", trg:"aanvankelijk", src:"initially / at first", pos:"adj", gender:null,
     note:"Adjective and adverb. Describes the beginning of a process.",
     example:"A: Aanvankelijk was ik nerveus.\nB: En nu?",
     exampleSrc:"A: Initially I was nervous.\nB: And now?",
     funFact:"From 'aanvang' (beginning). A formal word, often used in written Dutch."},

    {type:"teach", trg:"beduidend", src:"significant / considerable", pos:"adj", gender:null,
     note:"Adjective. Noticeably important or large.",
     example:"A: Het verschil is beduidend groter dan verwacht.\nB: Hoe kan dat?",
     exampleSrc:"A: The difference is significantly larger than expected.\nB: How is that possible?",
     funFact:"From 'beduiden' (to signify). Formal Dutch, common in reports and news articles."},

    {type:"teach", trg:"afzonderlijk", src:"separate / individual", pos:"adj", gender:null,
     note:"Adjective. Each one by itself, not together.",
     example:"A: De kamers worden afzonderlijk verhuurd.\nB: Dus niet als heel appartement?",
     exampleSrc:"A: The rooms are rented separately.\nB: So not as a whole apartment?",
     funFact:"From 'afzonderen' (to separate). Dutch loves compound adjectives. Also used as adverb."},

    {type:"fb",
     s:"{1} wilde ik niet gaan, maar uiteindelijk was het heel leuk.",
     a:["Aanvankelijk"],
     opts:["Aanvankelijk","Afgelopen","Beduidend","Afzonderlijk"],
     hint:"Which adverb means 'at first' or 'in the beginning'?",
     sSrc:"{1} I did not want to go, but in the end it was very fun."},

    {type:"teach", trg:"achteraf", src:"in hindsight / afterward", pos:"adv", gender:null,
     note:"Adverb. Looking back after the fact.",
     example:"A: Achteraf gezien had ik beter moeten luisteren.\nB: Ja, dat klopt.",
     exampleSrc:"A: In hindsight I should have listened better.\nB: Yes, that is true.",
     funFact:"Achter (behind) + af (off). Looking 'behind off' at something. 'Achteraf gezien' = in retrospect."},

    {type:"teach", trg:"achtereen", src:"in a row / consecutively", pos:"adv", gender:null,
     note:"Adverb. One after another without interruption.",
     example:"A: Hij werkte drie dagen achtereen.\nB: Zonder pauze? Dat is veel.",
     exampleSrc:"A: He worked three days in a row.\nB: Without a break? That is a lot.",
     funFact:"Achter (behind) + een (one). Things lined up 'one behind the other'. Very concise Dutch adverb."},

    {type:"teach", trg:"achterin", src:"in the back / at the rear", pos:"adv", gender:null,
     note:"Adverb. At the back of a space.",
     example:"A: Ga achterin zitten, daar is meer ruimte.\nB: Goed idee.",
     exampleSrc:"A: Sit in the back, there is more space.\nB: Good idea.",
     funFact:"Achter (behind) + in (in). Simple Dutch spatial adverb. 'Voorin' = in the front."},

    {type:"teach", trg:"achterstevoren", src:"backwards / back to front", pos:"adv", gender:null,
     note:"Adverb. In reverse order or direction.",
     example:"A: Je trui zit achterstevoren!\nB: O, dat had ik niet gezien.",
     exampleSrc:"A: Your sweater is on backwards!\nB: Oh, I didn't notice.",
     funFact:"Achterste (rearmost) + voren (front). The 'back-most to the front'. A wonderfully descriptive Dutch word."},

    {type:"mc",
     q:"Hij heeft vijf wedstrijden ___ gewonnen. Wat een reeks!",
     opts:["achtereen","achteraf","achterin","achterstevoren"],
     ans:"achtereen",
     hint:"Which adverb means one after another, without a break in between?"},

    {type:"teach", trg:"andersom", src:"the other way around / vice versa", pos:"adv", gender:null,
     note:"Adverb. In the opposite direction or order.",
     example:"A: Of misschien is het andersom?\nB: Ja, je hebt gelijk, ik had het verkeerd.",
     exampleSrc:"A: Or maybe it is the other way around?\nB: Yes, you are right, I had it wrong.",
     funFact:"Ander (other) + om (around). Short and punchy. Used constantly in Dutch conversations."},

    {type:"teach", trg:"allang", src:"for a long time already", pos:"adv", gender:null,
     note:"Adverb. Emphasizes something has been true for a while.",
     example:"A: Ik weet dat allang.\nB: O, sorry. Ik dacht dat het nieuw was.",
     exampleSrc:"A: I have known that for a long time.\nB: Oh, sorry. I thought it was new.",
     funFact:"Al (already) + lang (long). Very common in spoken Dutch to express slight impatience or emphasis."},

    {type:"teach", trg:"alom", src:"everywhere / universally", pos:"adv", gender:null,
     note:"Adverb. In all places, widely.",
     example:"A: Hij is alom bekend in de stad.\nB: Iedereen kent zijn gezicht.",
     exampleSrc:"A: He is universally known in the city.\nB: Everyone knows his face.",
     funFact:"Al (all) + om (around). Literary and slightly formal. Newspapers love it."},

    {type:"teach", trg:"aangezien", src:"since / because", pos:"conj", gender:null,
     note:"Conjunction. Gives a reason or cause.",
     example:"A: Aangezien het regent, blijven we thuis.\nB: Goed plan.",
     exampleSrc:"A: Since it is raining, we are staying home.\nB: Good plan.",
     funFact:"Aan (on) + gezien (seen). Literally 'having seen that'. More formal than 'omdat' (because)."},

    {type:"match", pairs:[
      {trg:"afgelopen", src:"past/last"},
      {trg:"achteraf", src:"in hindsight"},
      {trg:"andersom", src:"the other way around"},
      {trg:"aangezien", src:"since/because"},
      {trg:"abstract", src:"abstract"}
    ]},

    {type:"fb",
     s:"{1} het al laat is, gaan we morgen verder.",
     a:["Aangezien"],
     opts:["Aangezien","Achteraf","Aanvankelijk","Andersom"],
     hint:"Which conjunction means 'since' or 'because' in a formal context?",
     sSrc:"{1} it is already late, we will continue tomorrow."},

    {type:"mc",
     q:"Je trui zit verkeerd om. De achterkant zit vooraan. Hij zit ___.",
     opts:["achterstevoren","achterin","achtereen","achteraf"],
     ans:"achterstevoren",
     hint:"Which adverb describes wearing something with the back at the front?"}
  ]
};
export default LESSON_12;
