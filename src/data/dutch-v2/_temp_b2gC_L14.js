// L14: Natuur en Dieren. Nature and Animals
const LESSON_14 = {
  id:"nlv2_b2gC_l14", title:"Natuur en Dieren", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature and Animals",
     desc:"The Dutch landscape is unique: flat, green, and shaped by water. Learn the vocabulary of nature, animals, and the famous Dutch relationship with their environment.",
     goals:["Master 10 nature and animal terms","Discuss Dutch landscapes and wildlife","Navigate environmental vocabulary"]},

    {type:"teach", trg:"de kalkoen", src:"the turkey", pos:"noun", gender:"c",
     note:"Common gender (de). Named after Calicut (India), like in many languages.\nNot traditional Dutch Christmas food.",
     example:"A: In Amerika eten ze kalkoen met Thanksgiving.\nB: Wij eten dat niet zo vaak.\nA: Nee, wij hebben gourmetten met kerst.\nB: Dat is veel gezelliger!",
     exampleSrc:"A: In America they eat turkey at Thanksgiving.\nB: We don't eat that very often.\nA: No, we have gourmet (tabletop grilling) at Christmas.\nB: That's much cosier!",
     funFact:"The Dutch word 'kalkoen' comes from 'Calicut', a city in India. The English 'turkey' comes from Turkey. Both languages got the origin wrong!"},

    {type:"teach", trg:"de konijnenpoot", src:"the rabbit's foot", pos:"noun", gender:"c",
     note:"Common gender (de konijnenpoot). Konijn (rabbit) + poot (paw/foot).\n'Een geluksbrenger' = a lucky charm.",
     example:"A: Heb je een konijnenpoot als geluksbrenger?\nB: Nee, dat is niet aardig voor het konijn.\nA: Het is maar bijgeloof.\nB: Toch, ik heb liever een klavertjevier.",
     exampleSrc:"A: Do you have a rabbit's foot as a lucky charm?\nB: No, that's not nice for the rabbit.\nA: It's just superstition.\nB: Still, I prefer a four-leaf clover.",
     funFact:"Lucky charms are less common in the rationalistic Netherlands than in many countries. The Dutch tend to rely on 'nuchterheid' (level-headedness)."},

    {type:"teach", trg:"de koekoek", src:"the cuckoo", pos:"noun", gender:"c",
     note:"Common gender (de). Onomatopoeia: the bird's call sounds like 'koekoek'.\n'Koekoeksklok' = cuckoo clock.",
     example:"A: Hoor je die koekoek?\nB: Ja! Het is lente!\nA: Ze leggen hun eieren in nesten van andere vogels.\nB: Dat is best gemeen.",
     exampleSrc:"A: Do you hear that cuckoo?\nB: Yes! It's spring!\nA: They lay their eggs in other birds' nests.\nB: That's quite mean.",
     funFact:"Hearing the first cuckoo in spring is a Dutch tradition. People report their first cuckoo sighting to nature organisations each year."},

    {type:"teach", trg:"de kraal", src:"the bead / the kraal (animal enclosure)", pos:"noun", gender:"c",
     note:"Common gender (de). Double meaning: a decorative bead AND a livestock pen.\nFrom Afrikaans/Dutch colonial word.",
     example:"A: Deze kralen zijn prachtig!\nB: Ze komen uit Afrika.\nA: Zijn ze handgemaakt?\nB: Ja, elk kraaltje is uniek.",
     exampleSrc:"A: These beads are beautiful!\nB: They come from Africa.\nA: Are they handmade?\nB: Yes, every bead is unique.",
     funFact:"The Dutch word 'kraal' was exported to South Africa via colonialism. In Afrikaans, a 'kraal' is a livestock enclosure. The bead meaning is older."},

    {type:"mc",
     q:"Waarom heet de kalkoen 'kalkoen' in het Nederlands?",
     opts:["Naar de stad Calicut in India","Naar een Nederlandse ontdekker","Naar het geluid dat het dier maakt","Naar de kleur van het dier"],
     ans:"Naar de stad Calicut in India",
     hint:"Like many European languages, Dutch named this bird after the wrong place of origin."},

    {type:"teach", trg:"de drop", src:"liquorice (Dutch candy)", pos:"noun", gender:"c",
     note:"Common gender (de). Also 'het dropje' (diminutive).\nThe Netherlands eats more liquorice than any other country.",
     example:"A: Wil je een dropje?\nB: Nee, dank je! Ik vind drop vies.\nA: Echt? Ik ben er gek op!\nB: Het doet me aan medicijn denken.",
     exampleSrc:"A: Do you want a liquorice?\nB: No thanks! I think liquorice is disgusting.\nA: Really? I'm crazy about it!\nB: It reminds me of medicine.",
     funFact:"The Dutch consume about 2 kilograms of liquorice per person per year. 'Dubbel zoute drop' (double salt liquorice) horrifies most foreigners."},

    {type:"teach", trg:"de gum", src:"the eraser", pos:"noun", gender:"c",
     note:"Common gender (de). Short for 'gummi' (rubber).\n'Gummen' = to erase.",
     example:"A: Heb je een gum? Ik heb een fout gemaakt.\nB: Hier, alsjeblieft.\nA: Dank je. Ik schrijf nog steeds met potlood.\nB: Ouderwets maar betrouwbaar!",
     exampleSrc:"A: Do you have an eraser? I made a mistake.\nB: Here you go.\nA: Thanks. I still write with a pencil.\nB: Old-fashioned but reliable!",
     funFact:"In Belgium, an eraser is called 'een gom'. In the Netherlands, 'een gum'. Same word, slightly different pronunciation. A classic NL-BE difference."},

    {type:"teach", trg:"het gejoel", src:"the cheering / whooping", pos:"noun", gender:"n",
     note:"Neuter (het). From 'joelen' (to cheer/whoop).\n'Het publiek joelde' = the crowd cheered.",
     example:"A: Het gejoel van het publiek was oorverdovend.\nB: Ze waren zo blij met de overwinning!\nA: Het stadion trilde ervan.\nB: Ik heb mijn stem verloren van het schreeuwen.",
     exampleSrc:"A: The cheering of the crowd was deafening.\nB: They were so happy with the victory!\nA: The stadium shook from it.\nB: I lost my voice from shouting.",
     funFact:"During major football events, the Dutch celebrate with 'oranjegekte' (orange madness). Streets, cars, and even houses turn orange."},

    {type:"fb",
     s:"De Nederlanders eten meer {1} dan elk ander land ter wereld.",
     a:["drop"],
     opts:["drop","gum","kalkoen","kraal"],
     hint:"A black candy that foreigners often find shocking. The Dutch love it salty.",
     sSrc:"The Dutch eat more {1} than any other country in the world."},

    {type:"teach", trg:"de duik", src:"the dive / plunge", pos:"noun", gender:"c",
     note:"Common gender (de). From 'duiken' (to dive).\n'Een duik nemen' = to take a dive/plunge.",
     example:"A: Laten we een duik nemen in het meer!\nB: Nu? Het is koud!\nA: Dat is juist gezond.\nB: Goed dan, maar snel eruit!",
     exampleSrc:"A: Let's take a plunge in the lake!\nB: Now? It's cold!\nA: That's actually healthy.\nB: Okay then, but quick out!",
     funFact:"The 'Nieuwjaarsduik' (New Year's Dive) in Scheveningen attracts over 10,000 swimmers who plunge into the freezing North Sea on January 1st."},

    {type:"teach", trg:"de hondenstront", src:"dog poo / dog excrement", pos:"noun", gender:"c",
     note:"Common gender (de). Honden (dogs) + stront (excrement).\nA very common Dutch complaint!",
     example:"A: Pas op, er ligt hondenstront op het pad!\nB: Bah, waarom ruimen mensen dat niet op?\nA: Er zijn toch speciale bakken voor?\nB: Ja, maar niet iedereen gebruikt ze.",
     exampleSrc:"A: Watch out, there's dog poo on the path!\nB: Gross, why don't people clean that up?\nA: There are special bins for that, right?\nB: Yes, but not everyone uses them.",
     funFact:"Dutch municipalities spend millions annually on cleaning up dog waste. Some cities have 'hondenuitlaatveldje' (designated dog walking areas)."},

    {type:"mc",
     q:"De 'Nieuwjaarsduik' in Scheveningen is:",
     opts:["Een schaatswedstrijd op 1 januari","Een zwempartij in de ijskoude Noordzee op 1 januari","Een fietsrace langs de kust","Een hardloopwedstrijd op het strand"],
     ans:"Een zwempartij in de ijskoude Noordzee op 1 januari",
     hint:"Thousands of people dive into freezing cold water to start the new year. Very Dutch."},

    {type:"fb",
     s:"Het {1} in het stadion was oorverdovend na het winnende doelpunt.",
     a:["gejoel"],
     opts:["gejoel","gum","drop","duik"],
     hint:"The loud, enthusiastic noise a crowd makes when celebrating.",
     sSrc:"The {1} in the stadium was deafening after the winning goal."},

    {type:"match", pairs:[
      {trg:"kalkoen", src:"turkey"},
      {trg:"drop", src:"liquorice"},
      {trg:"gum", src:"eraser"},
      {trg:"duik", src:"dive / plunge"}
    ]},

    {type:"mc",
     q:"In Belgie zegt men 'gom', in Nederland zegt men:",
     opts:["Wisser","Rubber","Gum","Vlakker"],
     ans:"Gum",
     hint:"Same object, slightly different word. A common Netherlands-Belgium vocabulary difference."},

    {type:"fb",
     s:"Pas op waar je loopt, er ligt {1} op het trottoir.",
     a:["hondenstront"],
     opts:["hondenstront","hondenvoer","hondenspeelgoed","hondenriem"],
     hint:"What dogs leave behind on the sidewalk when owners don't clean up.",
     sSrc:"Watch where you walk, there is {1} on the pavement."},

    {type:"match", pairs:[
      {trg:"konijnenpoot", src:"rabbit's foot"},
      {trg:"kraal", src:"bead / enclosure"},
      {trg:"gejoel", src:"cheering"},
      {trg:"hondenstront", src:"dog excrement"}
    ]}
  ]
};
export default LESSON_14;
