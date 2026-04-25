// Unit 02 Expansion. Lesson 3: Telling Time
// Theme: Clock time, hours, minutes, time-related expressions

const LESSON_3 = {
  id:"itv2_u2l3", title:"Che ore sono?", icon:"\u23f0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Che ore sono?",
     desc:"Learn to tell time in Italian and talk about daily schedules using hours and minutes.",
     goals:["Ask and tell the time","Understand the 24-hour clock","Use time expressions in daily conversation"]},

    {type:"teach", trg:"che ore sono?", src:"what time is it?", pos:"verb", gender:null,
     note:"Literally: 'what hours are they?' Uses plural because hours are counted.\nAlternative: 'che ora e?' (less common).",
     example:"A: Scusi, che ore sono?\nB: Sono le tre.",
     exampleSrc:"A: Excuse me, what time is it?\nB: It is three o'clock.",
     funFact:"Italian uses 'sono le...' (they are the...) for most hours because you are counting multiple hours. The exception is 'e l'una' (it is one) which is singular because there is only one hour."},

    {type:"teach", trg:"l'ora", src:"the hour / the time", pos:"noun", gender:"f",
     note:"Feminine. Plural: le ore.\nFrom Latin 'hora.' 'E ora di...' = it is time to...",
     example:"A: A che ora parti?\nB: Parto alle otto.",
     exampleSrc:"A: At what time do you leave?\nB: I leave at eight.",
     funFact:"'Ora' means both 'hour' and 'now' in Italian. 'Che ora e?' (what time is it?) vs 'ora andiamo' (now we go). Context makes the meaning clear. Latin 'hora' also gave English 'hour.'"},

    {type:"teach", trg:"meno", src:"minus / less (for time)", pos:"adv", gender:null,
     note:"Used for time before the hour: 'le tre meno dieci' = ten to three.\n'Meno' = minus/less in all contexts.",
     example:"A: Che ore sono?\nB: Sono le otto meno un quarto.",
     exampleSrc:"A: What time is it?\nB: It is a quarter to eight.",
     funFact:"Italian tells time by subtraction after the half hour: 'le otto meno venti' (twenty to eight). This is the traditional method, though younger Italians increasingly just say 'le sette e quaranta' (seven forty)."},

    {type:"teach", trg:"e mezza", src:"half past", pos:"adj", gender:null,
     note:"'Mezza' (half, feminine) because it agrees with 'ora' (feminine).\n'Le due e mezza' = half past two.",
     example:"A: A che ora pranziamo?\nB: All'una e mezza.",
     exampleSrc:"A: What time do we have lunch?\nB: At half past one.",
     funFact:"'Mezza' is feminine because it agrees with the implied 'ora' (hour). You will also hear 'mezzo' (masculine) in some regions, but 'mezza' is standard. Half past noon is 'mezzogiorno e mezza.'"},

    {type:"teach", trg:"un quarto", src:"a quarter (15 min)", pos:"noun", gender:"m",
     note:"Masculine. 'Le tre e un quarto' = quarter past three.\n'Le tre meno un quarto' = quarter to three.",
     example:"A: Che ore sono?\nB: Sono le cinque e un quarto.",
     exampleSrc:"A: What time is it?\nB: It is quarter past five.",
     funFact:"From Latin 'quartus' (fourth). A quarter hour is one-fourth of an hour. The same root gives 'quartiere' (neighborhood, originally a quarter of a city) and 'quartetto' (quartet, group of four)."},

    {type:"teach", trg:"mezzogiorno", src:"noon / midday", pos:"noun", gender:"m",
     note:"Masculine. Compound: mezzo (half) + giorno (day).\nThe midpoint of the day.",
     example:"A: A che ora pranzi?\nB: A mezzogiorno in punto.",
     exampleSrc:"A: What time do you eat lunch?\nB: At noon exactly.",
     funFact:"'Il Mezzogiorno' (capitalized) also refers to southern Italy, because the sun is at its highest point when facing south from the north. It is a geographic and cultural term, not just a time."},

    {type:"teach", trg:"mezzanotte", src:"midnight", pos:"noun", gender:"f",
     note:"Feminine. Compound: mezza (half) + notte (night).\nThe midpoint of the night.",
     example:"A: A che ora finisce la festa?\nB: A mezzanotte!",
     exampleSrc:"A: What time does the party end?\nB: At midnight!",
     funFact:"Unlike mezzogiorno (masculine), mezzanotte is feminine because 'notte' is feminine. The gender of compound nouns in Italian follows the gender of the last word in the compound."},

    {type:"teach", trg:"in punto", src:"exactly / on the dot", pos:"adv", gender:null,
     note:"Added after the time for precision: 'le tre in punto' = three o'clock sharp.\nLiterally: 'on the point.'",
     example:"A: Il treno parte alle sei in punto.\nB: Dobbiamo sbrigarci!",
     exampleSrc:"A: The train leaves at six on the dot.\nB: We need to hurry!",
     funFact:"Italian trains are famous for running on time (mostly). 'In punto' emphasizes exact punctuality. Italians also say 'in orario' (on schedule) and 'in ritardo' (late), very common expressions."},

    {type:"teach", trg:"presto", src:"early / soon", pos:"adv", gender:null,
     note:"Dual meaning: 'early' (sono arrivato presto) and 'soon' (a presto = see you soon).\nOpposite: tardi (late).",
     example:"A: Mi sveglio presto la mattina.\nB: A che ora?\nA: Alle sei!",
     exampleSrc:"A: I wake up early in the morning.\nB: At what time?\nA: At six!",
     funFact:"The musical term 'presto' (very fast) comes directly from Italian. In everyday Italian, 'presto' means early or soon. 'Fare presto' means to hurry up. 'Al piu presto' means as soon as possible."},

    {type:"teach", trg:"tardi", src:"late", pos:"adv", gender:null,
     note:"Opposite of presto. 'E tardi' = it is late.\n'Fare tardi' = to be late / to stay out late.",
     example:"A: Scusa, sono in ritardo!\nB: Non ti preoccupare, e ancora presto.",
     exampleSrc:"A: Sorry, I am late!\nB: Don't worry, it is still early.",
     funFact:"'Fare tardi' has two meanings: to arrive late (scusa, ho fatto tardi) or to stay out late (ieri sera ho fatto tardi). The expression 'meglio tardi che mai' means 'better late than never.'"},

    {type:"teach", trg:"la mattina", src:"the morning", pos:"noun", gender:"f",
     note:"Feminine. Also 'il mattino' (masculine, more literary).\nTime range: roughly 6 AM to noon.",
     example:"A: Cosa fai la mattina?\nB: La mattina lavoro.",
     exampleSrc:"A: What do you do in the morning?\nB: In the morning I work.",
     funFact:"Both 'la mattina' and 'il mattino' exist. 'Mattina' is everyday speech, 'mattino' is literary. The famous song starts 'O sole mio, sta 'nfronte a te, il mattino.' Both come from Latin 'matutinus' (of the morning)."},

    {type:"teach", trg:"il pomeriggio", src:"the afternoon", pos:"noun", gender:"m",
     note:"Masculine. From 'dopo' (after) + 'meriggio' (midday).\nTime range: roughly noon to 5-6 PM.",
     example:"A: Sei libero il pomeriggio?\nB: Si, dopo le due.",
     exampleSrc:"A: Are you free in the afternoon?\nB: Yes, after two.",
     funFact:"'Pomeriggio' literally means 'after midday.' Many Italian shops still close for a long lunch break in the early afternoon (la pausa pranzo), especially in southern Italy. The tradition is fading in big cities."},

    {type:"teach", trg:"la sera", src:"the evening", pos:"noun", gender:"f",
     note:"Feminine. Time range: roughly 6 PM to bedtime.\n'Stasera' = this evening (sta + sera).",
     example:"A: Cosa fai stasera?\nB: Stasera vado al cinema.",
     exampleSrc:"A: What are you doing this evening?\nB: This evening I am going to the cinema.",
     funFact:"'Stasera' combines 'questa' (this) + 'sera' into one word. The same pattern gives 'stamattina' (this morning) and 'stanotte' (tonight/last night). Italian loves compressing time words."},

    // Quiz steps
    {type:"mc", q:"How do you ask 'what time is it?' in Italian?",
     opts:["Che ore sono?","Che ora e?","Quando e?","Dove sono?"],
     ans:"Che ore sono?",
     hint:"Literally 'what hours are they?' The plural form is standard because you count multiple hours."},

    {type:"fb", s:"Sono le tre e {1}.",
     a:["mezza"],
     opts:["mezza","mezzo","meta","meno"],
     hint:"This word means 'half' and agrees with the feminine 'ora.' It indicates 30 minutes past.",
     sSrc:"It is half past {1}."},

    {type:"mc", q:"What is the gender of 'mezzanotte'?",
     opts:["It varies","Feminine","Masculine","Neutral"],
     ans:"Feminine",
     hint:"Compound nouns take the gender of their last element. 'Notte' is f..., so the compound is too."},

    {type:"fb", s:"Il treno parte alle sei {1}.",
     a:["in punto"],
     opts:["in punto","e mezza","meno","presto"],
     hint:"This expression means 'exactly' or 'on the dot.' It emphasizes precise timing.",
     sSrc:"The train leaves at six {1}."},

    {type:"match", pairs:[
      {trg:"mezzogiorno", src:"noon"},
      {trg:"mezzanotte", src:"midnight"},
      {trg:"la mattina", src:"the morning"},
      {trg:"il pomeriggio", src:"the afternoon"},
      {trg:"la sera", src:"the evening"}
    ]},

    {type:"mc", q:"How do you say 'quarter to eight'?",
     opts:["Le sette e un quarto","Le otto meno mezza","Le otto meno un quarto","Le otto e un quarto"],
     ans:"Le otto meno un quarto",
     hint:"Italian time subtracts from the upcoming hour using a preposition meaning minus, paired with the 15-minute fraction (not the half)."},

    {type:"fb", s:"Mi sveglio {1} la mattina, alle sei.",
     a:["presto"],
     opts:["presto","tardi","bene","sempre"],
     hint:"Waking up at six is not late. This adverb means 'early' and is the opposite of 'tardi.'",
     sSrc:"I wake up {1} in the morning, at six."},

    {type:"mc", q:"What does 'il Mezzogiorno' mean when capitalized?",
     opts:["Noon exactly","Midday meal","A city","Southern Italy"],
     ans:"Southern Italy",
     hint:"Capitalized, this word becomes a geographic term. It refers to the part of I... facing the sun at its peak."},

    {type:"fb", s:"Cosa fai {1}?",
     a:["stasera"],
     opts:["stasera","domani","ieri","presto"],
     hint:"You are asking about plans for this evening. A contraction of 'questa sera.'",
     sSrc:"What are you doing {1}?"},

    {type:"mc", q:"What does 'tardi' mean?",
     opts:["Late","Early","Soon","Always"],
     ans:"Late",
     hint:"The opposite of 'presto.' 'Fare tardi' describes someone who does not arrive on time or stays out past a reasonable hour."}
  ]
};
export default LESSON_3;
