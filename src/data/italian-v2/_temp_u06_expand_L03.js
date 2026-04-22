// Unit 06 Expansion. Lesson 6: Weather & Seasons in the City
// Theme: Weather vocabulary, climate descriptions, seasonal activities

const LESSON_6 = {
  id:"itv2_u6l6", title:"Che tempo fa?", icon:"\u26c5", xp:15, board:true,
  steps:[
    {type:"intro", title:"Che tempo fa?",
     desc:"Learn to talk about the weather in Italian and how it affects daily life and plans.",
     goals:["Describe weather conditions","Talk about temperature","Discuss seasonal weather patterns"]},

    {type:"teach", trg:"il tempo", src:"the weather / time", pos:"noun", gender:"m",
     note:"Masculine. Dual meaning: weather AND time. 'Che tempo fa?' = What is the weather like?\nContext makes clear which meaning.",
     example:"A: Che tempo fa oggi?\nB: Fa bel tempo! Sole e cielo blu.",
     exampleSrc:"A: What is the weather like today?\nB: It's nice weather! Sun and blue sky.",
     funFact:"'Il tempo' means both 'weather' and 'time' in Italian. 'Non ho tempo' (I don't have time) vs 'che tempo fa?' (what is the weather?). English kept them separate; Italian merged them from the same Latin 'tempus.'"},

    {type:"teach", trg:"fa caldo", src:"it is hot", pos:"verb", gender:null,
     note:"'Fare' is used for weather: fa caldo, fa freddo.\nLiterally: 'it makes hot.' NOT 'e caldo' for weather.",
     example:"A: Fa molto caldo oggi!\nB: Si, quasi quaranta gradi!",
     exampleSrc:"A: It is very hot today!\nB: Yes, almost forty degrees!",
     funFact:"Italian uses 'fare' (to make/do) for weather, not 'essere' (to be). 'Fa caldo' (it makes hot), 'fa freddo' (it makes cold), 'fa bel tempo' (it makes good weather). This is a key grammar pattern unique to weather."},

    {type:"teach", trg:"fa freddo", src:"it is cold", pos:"verb", gender:null,
     note:"'Fa freddo' = it is cold (weather). 'Ho freddo' = I am cold (personal feeling).\nImportant distinction.",
     example:"A: Fa freddo fuori?\nB: Si, mettiti il cappotto!",
     exampleSrc:"A: Is it cold outside?\nB: Yes, put on your coat!",
     funFact:"'Fa freddo' describes the weather. 'Ho freddo' describes your body feeling cold (literally 'I have cold'). Italian uses 'avere' (to have) for personal sensations: ho caldo, ho fame, ho sete, ho sonno."},

    {type:"teach", trg:"il sole", src:"the sun", pos:"noun", gender:"m",
     note:"Masculine. 'C'e il sole' = the sun is out.\nFrom Latin 'sol.' 'Prendere il sole' = to sunbathe.",
     example:"A: C'e il sole oggi!\nB: Perfetto per andare al mare.",
     exampleSrc:"A: The sun is out today!\nB: Perfect for going to the sea.",
     funFact:"From Latin 'sol.' The famous Neapolitan song 'O Sole Mio' means 'My Sun.' 'Prendere il sole' (to take the sun) is the Italian way to say 'sunbathe.' Italian beach culture revolves around sun worship."},

    {type:"teach", trg:"la pioggia", src:"the rain", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'pluvia.' 'Piove' = it rains (from 'piovere').\nThe verb is impersonal: it does not need a subject.",
     example:"A: Piove forte oggi.\nB: Hai l'ombrello?",
     exampleSrc:"A: It is raining hard today.\nB: Do you have an umbrella?",
     funFact:"'Pioggia' comes from Latin 'pluvia' (rain). English 'pluvial' (relating to rain) shares this root. Italian weather verbs are impersonal: 'piove' (it rains), 'nevica' (it snows), 'grandina' (it hails). No subject needed."},

    {type:"teach", trg:"la neve", src:"the snow", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'nix/nivis.' 'Nevica' = it snows.\nBiancaneve = Snow White (bianca + neve).",
     example:"A: Nevica in montagna?\nB: Si, c'e molta neve!",
     exampleSrc:"A: Is it snowing in the mountains?\nB: Yes, there is a lot of snow!",
     funFact:"From Latin 'nix' (snow). The Sierra Nevada mountain range literally means 'snowy mountain range.' 'Biancaneve' (Snow White) combines 'bianca' (white) and 'neve' (snow). Alpine Italy gets heavy snowfall each winter."},

    {type:"teach", trg:"il vento", src:"the wind", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'ventus.' 'Tira vento' = it is windy.\nItaly has named winds for each direction.",
     example:"A: Tira molto vento oggi.\nB: Si, meglio non uscire in bici.",
     exampleSrc:"A: It is very windy today.\nB: Yes, better not go out by bike.",
     funFact:"Italy has named winds from each compass direction: tramontana (north), scirocco (southeast, hot from Africa), maestrale (northwest), libeccio (southwest). These names date back to Roman sailors and are still used in weather forecasts."},

    {type:"teach", trg:"la nuvola", src:"the cloud", pos:"noun", gender:"f",
     note:"Feminine. Plural: le nuvole. 'Nuvoloso' = cloudy.\nFrom Latin 'nubes' (cloud).",
     example:"A: Ci sono molte nuvole oggi.\nB: Forse piove nel pomeriggio.",
     exampleSrc:"A: There are many clouds today.\nB: Maybe it will rain in the afternoon.",
     funFact:"From Latin 'nubes' (cloud). English 'nebula' (a space cloud) and 'nebulous' (cloudy, vague) share this root. 'Nuvoloso' (cloudy) is the adjective form. 'Coperto' (covered) describes a fully overcast sky."},

    {type:"teach", trg:"l'ombrello", src:"the umbrella", pos:"noun", gender:"m",
     note:"Masculine. From 'ombra' (shade) + diminutive -ello.\nLiterally: 'little shade.' Also: 'l'ombrellone' (beach umbrella).",
     example:"A: Piove! Hai l'ombrello?\nB: No, l'ho dimenticato a casa!",
     exampleSrc:"A: It's raining! Do you have an umbrella?\nB: No, I forgot it at home!",
     funFact:"'Ombrello' comes from 'ombra' (shadow/shade). Umbrellas were originally for sun protection, not rain. 'Ombrellone' (big umbrella) is the beach umbrella. English borrowed 'umbrella' from Italian through this same shade-related root."},

    {type:"teach", trg:"il cielo", src:"the sky", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'caelum.' 'Cielo azzurro' = blue sky.\nAlso means 'heaven' in religious contexts.",
     example:"A: Guarda il cielo! Che bel tramonto!\nB: Bellissimo! I colori sono incredibili.",
     exampleSrc:"A: Look at the sky! What a beautiful sunset!\nB: Beautiful! The colors are incredible.",
     funFact:"'Cielo' means both 'sky' and 'heaven.' 'Cielo!' as an exclamation is like 'heavens!' Latin 'caelum' also gave English 'celestial.' Italian sunsets ('tramonti') are legendary, especially over the Mediterranean."},

    {type:"teach", trg:"il grado", src:"the degree (temperature)", pos:"noun", gender:"m",
     note:"Masculine. Italy uses Celsius. 'Trenta gradi' = 30 degrees.\nFrom Latin 'gradus' (step, degree).",
     example:"A: Quanti gradi ci sono?\nB: Trentacinque gradi! Troppo caldo!",
     exampleSrc:"A: How many degrees is it?\nB: Thirty-five degrees! Too hot!",
     funFact:"Italy uses Celsius exclusively. A comfortable room is 20-22 degrees. Summer highs in the south can reach 40+ degrees. 'Quanti gradi ci sono?' (how many degrees are there?) is the standard way to ask about temperature."},

    // Quiz steps
    {type:"mc", q:"How do you say 'it is hot' (weather) in Italian?",
     opts:["Fa caldo","E caldo","Ho caldo","Sta caldo"],
     ans:"Fa caldo",
     hint:"Italian uses 'fare' (to make) for weather expressions, not 'essere.' Literally: 'it makes hot.'"},

    {type:"fb", s:"Che {1} fa oggi?",
     a:["tempo"],
     opts:["tempo","giorno","ora","sole"],
     hint:"This word means both 'weather' and 'time.' In this question, it asks about weather conditions.",
     sSrc:"What is the {1} like today?"},

    {type:"mc", q:"What is the difference between 'fa freddo' and 'ho freddo'?",
     opts:["Ho freddo is about weather","Fa freddo = weather is cold, ho freddo = I feel cold","They are the same","Fa freddo is formal"],
     ans:"Fa freddo = weather is cold, ho freddo = I feel cold",
     hint:"Italian uses different verbs: 'fare' for w... conditions, 'avere' for personal sensations."},

    {type:"fb", s:"{1} forte oggi. Hai l'ombrello?",
     a:["Piove"],
     opts:["Piove","Nevica","Tira","Fa"],
     hint:"Water is falling from the sky heavily. This impersonal weather verb needs no subject.",
     sSrc:"It {1} hard today. Do you have an umbrella?"},

    {type:"match", pairs:[
      {trg:"il sole", src:"the sun"},
      {trg:"la pioggia", src:"the rain"},
      {trg:"la neve", src:"the snow"},
      {trg:"il vento", src:"the wind"},
      {trg:"la nuvola", src:"the cloud"}
    ]},

    {type:"mc", q:"Where does the word 'ombrello' come from?",
     opts:["Ombra (ghost)","A French word","Ombra (shade/shadow)","Omero (Homer)"],
     ans:"Ombra (shade/shadow)",
     hint:"Umbrellas were originally for sun protection. The diminutive -ello makes it 'little s....'"},

    {type:"fb", s:"Quanti {1} ci sono oggi?",
     a:["gradi"],
     opts:["gradi","sole","vento","nuvole"],
     hint:"You are asking about temperature. Italy uses Celsius, and this word means 'degrees.'",
     sSrc:"How many {1} is it today?"},

    {type:"mc", q:"What temperature scale does Italy use?",
     opts:["Fahrenheit","Both equally","It depends on the region","Celsius"],
     ans:"Celsius",
     hint:"All European countries use this scale. Water freezes at 0 and boils at 100 in this system."},

    {type:"fb", s:"C'e il {1} oggi! Andiamo al mare.",
     a:["sole"],
     opts:["sole","vento","freddo","pioggia"],
     hint:"The bright star is shining. Perfect weather for the beach. From Latin 'sol.'",
     sSrc:"The {1} is out today! Let's go to the sea."},

    {type:"mc", q:"What are Italy's named winds?",
     opts:["Traditional names for winds from each compass direction","Types of storms","Mountain winds only","Modern weather terms"],
     ans:"Traditional names for winds from each compass direction",
     hint:"Tramontana (north), scirocco (southeast), maestrale (northwest). Dating back to Roman sailors."}
  ]
};
export default LESSON_6;
