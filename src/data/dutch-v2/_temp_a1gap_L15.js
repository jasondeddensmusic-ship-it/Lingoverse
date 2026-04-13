// L15: City and Places — 20 A1 gap words
const LESSON_15 = {
  id:"nlv2_a1gap_l15", title:"De Stad en Plaatsen", icon:"\u{1F3D9}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"City and Places",
     desc:"Learn Dutch words for places in the city, neighborhoods, and buildings. Navigate your way around.",
     goals:["Master 20 city and place words","Describe your neighborhood","Talk about buildings and locations"]},

    {type:"teach", trg:"het centrum", src:"the center / downtown", pos:"noun", gender:"n",
     note:"Neuter noun (het). The city center.",
     example:"A: Laten we naar het centrum gaan.\nB: Goed idee, ik wil winkelen.",
     exampleSrc:"A: Let's go to the center.\nB: Good idea, I want to shop.",
     funFact:"From Latin 'centrum'. Every Dutch city has a compact, walkable centrum."},

    {type:"teach", trg:"het caf\u00E9", src:"the pub / cafe", pos:"noun", gender:"n",
     note:"Neuter noun (het). A Dutch 'bruin cafe' is a traditional pub.",
     example:"A: Zullen we naar het caf\u00E9 gaan?\nB: Ja, ik wil een biertje.",
     exampleSrc:"A: Shall we go to the pub?\nB: Yes, I want a beer.",
     funFact:"A Dutch 'bruin cafe' (brown pub) has dark wood interiors. Very cozy!"},

    {type:"teach", trg:"de kerk", src:"the church", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: kerken.",
     example:"A: Die kerk is heel oud.\nB: Ja, uit de vijftiende eeuw!",
     exampleSrc:"A: That church is very old.\nB: Yes, from the fifteenth century!",
     funFact:"Cognate with English 'church' (both from Greek 'kuriakon'). Many Dutch churches are now event venues."},

    {type:"teach", trg:"de buurt", src:"the neighborhood", pos:"noun", gender:"c",
     note:"Common gender (de). Your local area.",
     example:"A: Dit is een leuke buurt.\nB: Ja, er zijn goede winkels.",
     exampleSrc:"A: This is a nice neighborhood.\nB: Yes, there are good shops.",
     funFact:"Related to 'buur' (neighbor). The area where your neighbors live."},

    {type:"mc",
     q:"We gaan naar het ___ om te winkelen.",
     opts:["centrum","caf\u00E9","kerk","buurt"],
     ans:"centrum",
     hint:"Where is the main shopping area in a Dutch city? The city's heart."},

    {type:"teach", trg:"de buur", src:"the neighbor", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: buren.",
     example:"A: Onze buren zijn heel aardig.\nB: Fijn, dat is belangrijk.",
     exampleSrc:"A: Our neighbors are very nice.\nB: Nice, that is important.",
     funFact:"Cognate with English 'boor' (archaic neighbor). Related to German 'Bauer'."},

    {type:"teach", trg:"de bewoner", src:"the resident / inhabitant", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who lives somewhere.",
     example:"A: De bewoners zijn boos over het lawaai.\nB: Dat begrijp ik.",
     exampleSrc:"A: The residents are angry about the noise.\nB: I understand that.",
     funFact:"From 'bewonen' (to inhabit). The person who 'lives in' a place."},

    {type:"teach", trg:"de brievenbus", src:"the mailbox", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: brieven (letters) + bus (box).",
     example:"A: De post zit in de brievenbus.\nB: Ik kijk even.",
     exampleSrc:"A: The mail is in the mailbox.\nB: I'll take a look.",
     funFact:"Orange PostNL mailboxes are iconic in the Netherlands. Orange = national color."},

    {type:"teach", trg:"de brief", src:"the letter", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: brieven.",
     example:"A: Er is een brief voor jou.\nB: Van wie?",
     exampleSrc:"A: There is a letter for you.\nB: From whom?",
     funFact:"Cognate with German 'Brief'. Despite email, official Dutch letters still matter."},

    {type:"teach", trg:"de bank", src:"the bank / couch", pos:"noun", gender:"c",
     note:"Common gender (de). Means both financial bank AND sofa.",
     example:"A: Ik ga naar de bank.\nB: De bank op de hoek? Of de bank in de woonkamer?",
     exampleSrc:"A: I'm going to the bank.\nB: The bank on the corner? Or the couch in the living room?",
     funFact:"Two meanings: bank (money) and couch (sitting). Context is everything!"},

    {type:"fb",
     s:"Er is een {1} voor jou in de brievenbus.",
     a:["brief"],
     opts:["brief","bank","buur","kerk"],
     hint:"What do you find in a mailbox? A written message sent by post.",
     sSrc:"There is a {1} for you in the mailbox."},

    {type:"teach", trg:"de huur", src:"the rent", pos:"noun", gender:"c",
     note:"Common gender (de). 'Huur betalen' = to pay rent.",
     example:"A: Hoeveel huur betaal je?\nB: 900 euro per maand.",
     exampleSrc:"A: How much rent do you pay?\nB: 900 euros per month.",
     funFact:"Dutch rent is famously high, especially in Amsterdam. Housing crisis is real."},

    {type:"teach", trg:"de makelaar", src:"the real estate agent", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who sells/rents houses.",
     example:"A: We zoeken een huis. Heb je een makelaar?\nB: Ja, ik geef je het nummer.",
     exampleSrc:"A: We're looking for a house. Do you have a real estate agent?\nB: Yes, I'll give you the number.",
     funFact:"Finding housing in the Netherlands often requires a makelaar. Very competitive market."},

    {type:"teach", trg:"het lawaai", src:"the noise", pos:"noun", gender:"n",
     note:"Neuter noun (het). Unpleasant, loud sound.",
     example:"A: Wat een lawaai!\nB: Ja, de buren hebben een feest.",
     exampleSrc:"A: What a noise!\nB: Yes, the neighbors are having a party.",
     funFact:"From Old French 'alawai' (alarm). The Dutch value quiet in residential areas."},

    {type:"teach", trg:"de groep", src:"the group", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: groepen.",
     example:"A: We werken in groepen.\nB: Hoeveel mensen per groep?",
     exampleSrc:"A: We work in groups.\nB: How many people per group?",
     funFact:"From French 'groupe'. Same word across many European languages."},

    {type:"mc",
     q:"'De bank' kan twee dingen betekenen: een financiele bank en een ___.",
     opts:["zitbank","winkel","kerk","school"],
     ans:"zitbank",
     hint:"What piece of furniture in your living room shares its name with a financial institution?"},

    {type:"teach", trg:"de activiteit", src:"the activity", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: activiteiten.",
     example:"A: Welke activiteiten zijn er?\nB: Zwemmen, fietsen en wandelen.",
     exampleSrc:"A: What activities are there?\nB: Swimming, cycling, and walking.",
     funFact:"From Latin 'activitas'. International word used the same way."},

    {type:"teach", trg:"de fabriek", src:"the factory", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: fabrieken.",
     example:"A: Die fabriek is nu een museum.\nB: Ja, heel bijzonder!",
     exampleSrc:"A: That factory is now a museum.\nB: Yes, very special!",
     funFact:"From Latin 'fabrica'. Many old Dutch factories have been converted to lofts and museums."},

    {type:"teach", trg:"het bedrijf", src:"the company / business", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: bedrijven.",
     example:"A: Bij welk bedrijf werk je?\nB: Bij Philips in Eindhoven.",
     exampleSrc:"A: At which company do you work?\nB: At Philips in Eindhoven.",
     funFact:"From 'bedrijven' (to conduct/operate). Shell, Philips, ASML are major Dutch bedrijven."},

    {type:"teach", trg:"de afspraak", src:"the appointment / agreement", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: af + spraak (speech/agreement).",
     example:"A: Ik heb een afspraak om drie uur.\nB: Bij de dokter?",
     exampleSrc:"A: I have an appointment at three.\nB: At the doctor's?",
     funFact:"The Dutch are very punctual. Being late for an afspraak is considered rude."},

    {type:"teach", trg:"de heleboel", src:"a lot / a whole bunch", pos:"noun", gender:"c",
     note:"Common gender (de). Informal for 'a lot of'.",
     example:"A: Er zijn een heleboel mensen.\nB: Ja, het is heel druk!",
     exampleSrc:"A: There are a lot of people.\nB: Yes, it's very busy!",
     funFact:"Compound: hele (whole) + boel (bunch). Very colloquial, everyday Dutch."},

    {type:"match", pairs:[
      {trg:"buurt", src:"neighborhood"},
      {trg:"huur", src:"rent"},
      {trg:"lawaai", src:"noise"},
      {trg:"bedrijf", src:"company"}
    ]}
  ]
};
export default LESSON_15;
