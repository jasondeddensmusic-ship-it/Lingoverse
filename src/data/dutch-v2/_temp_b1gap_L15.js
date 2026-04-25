// L15: Nature and Environment, 20 B1 gap words
const LESSON_15 = {
  id:"nlv2_b1gap_l15", title:"Natuur en Milieu", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature and Environment",
     desc:"Learn Dutch vocabulary for nature, weather, and environmental topics. The Netherlands has a special relationship with nature.",
     goals:["Master 20 nature and environment words","Discuss environmental issues","Describe natural phenomena"]},

    {type:"teach", trg:"de aardbeving", src:"the earthquake", pos:"noun", gender:"c",
     note:"Common gender (de). Aard (earth) + beving (tremor).",
     example:"A: Er was een aardbeving in Groningen.\nB: Was het ernstig?",
     exampleSrc:"A: There was an earthquake in Groningen.\nB: Was it serious?",
     funFact:"Groningen has earthquakes caused by gas extraction. This is a major Dutch political issue."},

    {type:"teach", trg:"de atmosfeer", src:"the atmosphere", pos:"noun", gender:"c",
     note:"Common gender (de). Physical or figurative atmosphere.",
     example:"A: De atmosfeer in het restaurant was gezellig.\nB: Ja, heel sfeervol.",
     exampleSrc:"A: The atmosphere in the restaurant was cozy.\nB: Yes, very atmospheric.",
     funFact:"Same word as English. In Dutch, 'sfeer' is the informal version. 'Atmosfeer' sounds more scientific."},

    {type:"teach", trg:"het bamboe", src:"bamboo", pos:"noun", gender:"n",
     note:"Neuter gender (het). A fast-growing tropical plant.",
     example:"A: Er groeit bamboe in onze tuin.\nB: Dat groeit heel snel!",
     exampleSrc:"A: There is bamboo growing in our garden.\nB: That grows very fast!",
     funFact:"Bamboo is increasingly popular in Dutch gardens, but it can become invasive if not contained."},

    {type:"teach", trg:"de bananenschil", src:"the banana peel", pos:"noun", gender:"c",
     note:"Common gender (de). Bananen + schil (peel) compound.",
     example:"A: Gooi de bananenschil in de groenbak.\nB: Oké, composteren dus.",
     exampleSrc:"A: Throw the banana peel in the green bin.\nB: Okay, composting then.",
     funFact:"'Uitglijden over een bananenschil' (slipping on a banana peel) is used both literally and for unexpected setbacks."},

    {type:"mc",
     q:"In Groningen komen trillingen in de grond voor door gaswinning. Dat zijn ___.",
     opts:["aardbevingen","atmosferen","afkoelingen","aantastingen"],
     ans:"aardbevingen",
     hint:"What do you call tremors or shaking of the earth's surface?"},

    {type:"teach", trg:"de aard", src:"the nature / the character", pos:"noun", gender:"c",
     note:"Common gender (de). The essential character of something.",
     example:"A: Het probleem is van financiële aard.\nB: Dan moeten we de boekhouder bellen.",
     exampleSrc:"A: The problem is of a financial nature.\nB: Then we should call the accountant.",
     funFact:"Related to 'aarde' (earth). The 'nature' of something is its earthy, fundamental essence."},

    {type:"teach", trg:"de antenne", src:"the antenna", pos:"noun", gender:"c",
     note:"Common gender (de). For receiving signals.",
     example:"A: De televisieantenne is kapot.\nB: Daarom hebben we geen beeld.",
     exampleSrc:"A: The TV antenna is broken.\nB: That is why we have no picture.",
     funFact:"From Latin via Italian. Most Dutch homes now use cable or fiber, making antennas less common."},

    {type:"teach", trg:"de ballon", src:"the balloon", pos:"noun", gender:"c",
     note:"Common gender (de). Inflatable decoration or aircraft.",
     example:"A: De kinderen spelen met ballonnen.\nB: Pas op dat ze niet knappen!",
     exampleSrc:"A: The children are playing with balloons.\nB: Be careful they don't pop!",
     funFact:"The Balloon Fiesta in Breda is one of the Netherlands' most colorful events."},

    {type:"teach", trg:"de afgrond", src:"the abyss / the chasm", pos:"noun", gender:"c",
     note:"Common gender (de). A deep void, literal or figurative.",
     example:"A: Het land staat aan de rand van een afgrond.\nB: De economische situatie is ernstig.",
     exampleSrc:"A: The country is on the edge of an abyss.\nB: The economic situation is serious.",
     funFact:"Af (off) + grond (ground). Where the ground falls away. Often used metaphorically in Dutch."},

    {type:"teach", trg:"de aquaria", src:"aquariums (plural)", pos:"noun", gender:"pl",
     note:"Plural of 'het aquarium'. Plural always takes 'de'.",
     example:"A: Er zijn mooie aquaria in de dierentuin.\nB: Ja, met tropische vissen!",
     exampleSrc:"A: There are beautiful aquariums in the zoo.\nB: Yes, with tropical fish!",
     funFact:"Rotterdam's Oceanium and Amsterdam's ARTIS zoo have impressive aquariums."},

    {type:"fb",
     s:"Het probleem is van technische {1}. We hebben een ingenieur nodig.",
     a:["aard"],
     opts:["aard","aardbeving","afgrond","atmosfeer"],
     hint:"Which word means the essential nature or character of something?",
     sSrc:"The problem is of a technical {1}. We need an engineer."},

    {type:"teach", trg:"het amfibie", src:"the amphibian", pos:"noun", gender:"n",
     note:"Neuter gender (het). An animal living on land and water.",
     example:"A: Kikkers zijn amfibieën.\nB: Ze leven zowel op het land als in het water.",
     exampleSrc:"A: Frogs are amphibians.\nB: They live both on land and in water.",
     funFact:"From Greek 'amphi' (both) + 'bios' (life). The Netherlands protects amphibians with special 'paddentunnels'."},

    {type:"teach", trg:"astronomisch", src:"astronomical", pos:"adj", gender:null,
     note:"Adjective. Literally about stars, or figuratively: extremely high.",
     example:"A: De huizenprijzen zijn astronomisch.\nB: Ja, onbetaalbaar voor starters.",
     exampleSrc:"A: House prices are astronomical.\nB: Yes, unaffordable for first-time buyers.",
     funFact:"Often used figuratively: 'astronomische kosten' = astronomical costs. A dramatic but common expression."},

    {type:"teach", trg:"architecturaal", src:"architectural", pos:"adj", gender:null,
     note:"Adjective. Related to architecture and buildings.",
     example:"A: Rotterdam is architecturaal heel interessant.\nB: Ja, door de wederopbouw na de oorlog.",
     exampleSrc:"A: Rotterdam is architecturally very interesting.\nB: Yes, because of reconstruction after the war.",
     funFact:"Rotterdam's Markthal and Cube Houses are world-famous architectural landmarks."},

    {type:"teach", trg:"de aanleg", src:"the construction / the installation", pos:"noun", gender:"c",
     note:"Common gender (de). Building of infrastructure.",
     example:"A: De aanleg van het park duurt twee jaar.\nB: Maar het wordt prachtig.",
     exampleSrc:"A: The construction of the park will take two years.\nB: But it will be beautiful.",
     funFact:"Dutch infrastructure 'aanleg' is world-renowned. The Delta Works are one of the seven modern wonders."},

    {type:"mc",
     q:"De prijzen zijn zo hoog dat niemand ze kan betalen. Ze zijn ___.",
     opts:["alternatief","astronomisch","architecturaal","abstract"],
     ans:"astronomisch",
     hint:"Which adjective originally relates to stars but means extremely high?"},

    {type:"teach", trg:"afwaaien", src:"to blow away / to blow over", pos:"verb", gender:null,
     note:"Separable verb. Ik waai af, jij waait af.",
     example:"A: Mijn paraplu is afgewaaid!\nB: Welkom in Nederland!",
     exampleSrc:"A: My umbrella blew away!\nB: Welcome to the Netherlands!",
     funFact:"Af + waaien (to blow). Extremely Dutch: the country is flat and windy. Umbrellas don't last long."},

    {type:"teach", trg:"afspelen", src:"to play (media) / to take place", pos:"verb", gender:null,
     note:"Separable + reflexive. 'Zich afspelen' = to take place.",
     example:"A: Het verhaal speelt zich af in Amsterdam.\nB: In welke tijd?",
     exampleSrc:"A: The story takes place in Amsterdam.\nB: In what period?",
     funFact:"Af + spelen (to play). For media: 'een video afspelen'. For events: 'zich afspelen' = to unfold."},

    {type:"teach", trg:"de badplaats", src:"the seaside resort", pos:"noun", gender:"c",
     note:"Common gender (de). Bad (bath) + plaats (place).",
     example:"A: Scheveningen is een bekende badplaats.\nB: Ja, heel druk in de zomer.",
     exampleSrc:"A: Scheveningen is a famous seaside resort.\nB: Yes, very busy in summer.",
     funFact:"Scheveningen's name was used as a shibboleth in WWII: Germans couldn't pronounce the 'Sch' correctly."},

    {type:"teach", trg:"het arsenaal", src:"the arsenal", pos:"noun", gender:"n",
     note:"Neuter gender (het). A collection of weapons or resources.",
     example:"A: De politie ontdekte een arsenaal aan wapens.\nB: Dat is heel gevaarlijk.",
     exampleSrc:"A: The police discovered an arsenal of weapons.\nB: That is very dangerous.",
     funFact:"From Arabic via Italian. Also used figuratively: 'een arsenaal aan argumenten' = an arsenal of arguments."},

    {type:"match", pairs:[
      {trg:"aardbeving", src:"earthquake"},
      {trg:"atmosfeer", src:"atmosphere"},
      {trg:"afgrond", src:"abyss"},
      {trg:"badplaats", src:"seaside resort"},
      {trg:"afwaaien", src:"to blow away"}
    ]},

    {type:"fb",
     s:"Het verhaal {1} zich ___ in de achttiende eeuw in Amsterdam.",
     a:["speelt af"],
     opts:["speelt af","waait af","beeldt af","drukt af"],
     hint:"Which reflexive separable verb means an event or story takes place somewhere?",
     sSrc:"The story {1} in the eighteenth century in Amsterdam."},

    {type:"mc",
     q:"Waar ga je naartoe om aan het strand te liggen en in zee te zwemmen?",
     opts:["een aquarium","een arsenaal","een badplaats","een afgrond"],
     ans:"een badplaats",
     hint:"Think about a coastal town that people visit for beach holidays."}
  ]
};
export default LESSON_15;
