// L11: Adjectives and Descriptions, 20 A1 gap words
const LESSON_11 = {
  id:"nlv2_a1gap_l11", title:"Bijvoeglijke Naamwoorden", icon:"\u{2B50}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Adjectives and Descriptions",
     desc:"Learn essential Dutch adjectives to describe people, things, and situations. Build your descriptive vocabulary.",
     goals:["Master 20 common adjectives","Describe people and situations","Express opinions and feelings"]},

    {type:"teach", trg:"aardig", src:"nice / kind", pos:"adj", gender:null,
     note:"For people: nice, friendly. Very common compliment.",
     example:"A: Je buurman is heel aardig.\nB: Ja, hij helpt altijd.",
     exampleSrc:"A: Your neighbor is very nice.\nB: Yes, he always helps.",
     funFact:"From 'aard' (nature/character). Someone whose nature is good."},

    {type:"teach", trg:"belangrijk", src:"important", pos:"adj", gender:null,
     note:"Compound: belang (interest/importance) + rijk (rich).",
     example:"A: Dit is heel belangrijk.\nB: Oké, ik luister.",
     exampleSrc:"A: This is very important.\nB: Okay, I'm listening.",
     funFact:"Literally 'rich in importance'. A transparently constructed Dutch word."},

    {type:"teach", trg:"moeilijk", src:"difficult", pos:"adj", gender:null,
     note:"Opposite of 'makkelijk' (easy).",
     example:"A: Nederlands is moeilijk!\nB: Het wordt makkelijker, beloofd!",
     exampleSrc:"A: Dutch is difficult!\nB: It gets easier, I promise!",
     funFact:"From 'moeite' (effort). Something that takes effort. Learners say this a lot!"},

    {type:"teach", trg:"eenvoudig", src:"simple / straightforward", pos:"adj", gender:null,
     note:"More formal synonym of 'simpel' or 'makkelijk'.",
     example:"A: Het antwoord is heel eenvoudig.\nB: Vertel!",
     exampleSrc:"A: The answer is very simple.\nB: Tell me!",
     funFact:"Compound: een (one) + voudig (fold). 'One-fold' = simple, not complex."},

    {type:"mc",
     q:"Nederlands is soms ___. Maar het wordt beter!",
     opts:["moeilijk","eenvoudig","aardig","belangrijk"],
     ans:"moeilijk",
     hint:"Which adjective means 'difficult'? Learning a language can be challenging."},

    {type:"teach", trg:"bekend", src:"well-known / famous", pos:"adj", gender:null,
     note:"Past participle of 'bekennen'. Very common adjective.",
     example:"A: Amsterdam is heel bekend.\nB: Ja, over de hele wereld!",
     exampleSrc:"A: Amsterdam is very well-known.\nB: Yes, all over the world!",
     funFact:"From 'be-' + 'kennen' (to know). Literally: 'thoroughly known'."},

    {type:"teach", trg:"bijzonder", src:"special / remarkable", pos:"adj", gender:null,
     note:"Stronger than 'speciaal'. Something truly noteworthy.",
     example:"A: Wat een bijzonder boek!\nB: Ja, heel interessant.",
     exampleSrc:"A: What a remarkable book!\nB: Yes, very interesting.",
     funFact:"Compound: bij (at/by) + zonder (without). Originally 'set apart from'."},

    {type:"teach", trg:"favoriet", src:"favorite", pos:"adj", gender:null,
     note:"From French. Same as English 'favorite'.",
     example:"A: Wat is je favoriete kleur?\nB: Blauw!",
     exampleSrc:"A: What is your favorite color?\nB: Blue!",
     funFact:"From French 'favori'. International word used the same way everywhere."},

    {type:"teach", trg:"gek", src:"crazy / weird / silly", pos:"adj", gender:null,
     note:"Can be playful or serious depending on context.",
     example:"A: Wat gek!\nB: Ja, dat is heel raar.",
     exampleSrc:"A: How weird!\nB: Yes, that is very strange.",
     funFact:"Also a noun: 'een gek' = a crazy person. 'Doe niet zo gek!' = Don't be silly!"},

    {type:"teach", trg:"dom", src:"stupid / dumb", pos:"adj", gender:null,
     note:"Blunt. Can be rude if used about people.",
     example:"A: Dat was een dom idee.\nB: Ja, dat klopt.",
     exampleSrc:"A: That was a stupid idea.\nB: Yes, that's right.",
     funFact:"Cognate with English 'dumb' (originally meaning stupid, not mute)."},

    {type:"fb",
     s:"Amsterdam is een {1} stad over de hele wereld.",
     a:["bekende"],
     opts:["bekende","domme","gekke","moeilijke"],
     hint:"Which adjective means 'well-known' or 'famous'?",
     sSrc:"Amsterdam is a {1} city all over the world."},

    {type:"teach", trg:"erg", src:"very / badly", pos:"adj", gender:null,
     note:"As adverb: very. As adjective: bad/terrible.",
     example:"A: Het was erg warm gisteren.\nB: Ja, erg!",
     exampleSrc:"A: It was very hot yesterday.\nB: Yes, very!",
     funFact:"Context matters: 'erg leuk' = very fun. 'Hoe erg?' = How bad?"},

    {type:"teach", trg:"heel", src:"very / whole / entire", pos:"adj", gender:null,
     note:"As adverb: very (synonym of 'erg'). As adjective: whole.",
     example:"A: Dat is heel mooi!\nB: Dank je wel!",
     exampleSrc:"A: That is very beautiful!\nB: Thank you!",
     funFact:"Cognate with English 'whole' and 'heal'. Originally meaning 'complete/intact'."},

    {type:"teach", trg:"apart", src:"separate / peculiar", pos:"adj", gender:null,
     note:"Two meanings: physically separate, or unusual/peculiar.",
     example:"A: Die hoed is apart.\nB: Ja, heel bijzonder.",
     exampleSrc:"A: That hat is peculiar.\nB: Yes, very remarkable.",
     funFact:"From French 'a part' (aside). In Dutch also means 'oddly unique'."},

    {type:"teach", trg:"dicht", src:"closed / shut / dense", pos:"adj", gender:null,
     note:"Opposite of 'open'. 'Doe de deur dicht' = Close the door.",
     example:"A: De winkel is dicht.\nB: Jammer! Dan gaan we morgen.",
     exampleSrc:"A: The store is closed.\nB: Too bad! Then we'll go tomorrow.",
     funFact:"Related to English 'tight'. Something pressed together, shut."},

    {type:"teach", trg:"leeg", src:"empty", pos:"adj", gender:null,
     note:"Opposite of 'vol' (full).",
     example:"A: De fles is leeg.\nB: Ik haal een nieuwe.",
     exampleSrc:"A: The bottle is empty.\nB: I'll get a new one.",
     funFact:"Rare word: no clear English cognate. Related to German 'leer'."},

    {type:"mc",
     q:"De winkel is ___. We kunnen er niet in.",
     opts:["gek","dicht","leeg","apart"],
     ans:"dicht",
     hint:"Which adjective means the store is closed, not open for business?"},

    {type:"teach", trg:"lief", src:"sweet / dear / kind", pos:"adj", gender:null,
     note:"For people: sweet/kind. Term of endearment.",
     example:"A: Wat lief van je!\nB: Graag gedaan!",
     exampleSrc:"A: How sweet of you!\nB: You're welcome!",
     funFact:"Cognate with English 'love' (old form 'lief'). Same root of affection."},

    {type:"teach", trg:"nerveus", src:"nervous", pos:"adj", gender:null,
     note:"From French/Latin. Same as English.",
     example:"A: Ben je nerveus voor het examen?\nB: Ja, heel erg!",
     exampleSrc:"A: Are you nervous about the exam?\nB: Yes, very much!",
     funFact:"International word from Latin 'nervosus'. Same in many languages."},

    {type:"teach", trg:"ongelukkig", src:"unhappy / unfortunate", pos:"adj", gender:null,
     note:"Compound: on- (un-) + gelukkig (happy).",
     example:"A: Ze is ongelukkig.\nB: Wat is er aan de hand?",
     exampleSrc:"A: She is unhappy.\nB: What's wrong?",
     funFact:"Dutch 'on-' prefix works like English 'un-'. 'Gelukkig' = happy, 'ongelukkig' = unhappy."},

    {type:"teach", trg:"lui", src:"lazy", pos:"adj", gender:null,
     note:"Not a compliment! Someone who avoids work.",
     example:"A: Wees niet zo lui!\nB: Ik ben niet lui, ik rust uit!",
     exampleSrc:"A: Don't be so lazy!\nB: I'm not lazy, I'm resting!",
     funFact:"Short and punchy. 'Een luie zondag' (a lazy Sunday) is very Dutch, though."},

    {type:"match", pairs:[
      {trg:"belangrijk", src:"important"},
      {trg:"bijzonder", src:"special"},
      {trg:"lief", src:"sweet / dear"},
      {trg:"ongelukkig", src:"unhappy"}
    ]}
  ]
};
export default LESSON_11;
