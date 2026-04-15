// Unit 03 Expansion — Lesson 6: Personality & Character Traits
// Theme: Personality adjectives, character descriptions, essere vs stare

const LESSON_6 = {
  id:"itv2_u3l6", title:"Il carattere", icon:"\ud83d\udcaa", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il carattere",
     desc:"Learn personality adjectives to describe what people are like on the inside.",
     goals:["Describe personality traits","Use key personality adjectives","Understand adjective pairs (opposites)"]},

    {type:"teach", trg:"gentile", src:"kind / polite", pos:"adj", gender:null,
     note:"Same form for masculine and feminine (-e ending).\nPlural: gentili. From Latin 'gentilis' (of the same clan).",
     example:"A: Come e il tuo professore?\nB: E molto gentile con tutti.",
     exampleSrc:"A: What is your professor like?\nB: He is very kind to everyone.",
     funFact:"Latin 'gentilis' originally meant 'of the same family/clan.' Over time it shifted to mean 'noble' then 'kind.' English 'gentle,' 'gentleman,' and 'genteel' all come from this root. Kindness as nobility."},

    {type:"teach", trg:"intelligente", src:"intelligent", pos:"adj", gender:null,
     note:"Same form for both genders (-e ending).\nPlural: intelligenti. A cognate with English.",
     example:"A: Tua figlia e molto intelligente.\nB: Grazie! Studia tanto.",
     exampleSrc:"A: Your daughter is very intelligent.\nB: Thanks! She studies a lot.",
     funFact:"From Latin 'intelligens' (understanding), from 'inter' (between) + 'legere' (to choose/read). Being intelligent literally means 'choosing between' options wisely. Nearly identical to English."},

    {type:"teach", trg:"divertente", src:"funny / entertaining", pos:"adj", gender:null,
     note:"Same form for both genders. 'Divertire' = to amuse.\nFalse friend: does NOT mean 'diverting' in the English sense.",
     example:"A: Marco e molto divertente!\nB: Si, mi fa sempre ridere.",
     exampleSrc:"A: Marco is very funny!\nB: Yes, he always makes me laugh.",
     funFact:"From Latin 'divertere' (to turn aside, to distract). Something 'divertente' distracts you from boredom. Italian 'divertirsi' means 'to have fun' (to amuse oneself), a very common reflexive verb."},

    {type:"teach", trg:"noioso", src:"boring", pos:"adj", gender:"m",
     note:"Masculine: noioso. Feminine: noiosa.\nFrom 'noia' (boredom). Opposite of 'divertente.'",
     example:"A: Come e il film?\nB: Molto noioso. Mi sono addormentato!",
     exampleSrc:"A: How is the movie?\nB: Very boring. I fell asleep!",
     funFact:"'Noia' (boredom) comes from Latin 'inodiare' (to make odious). Italian uses 'noioso' for both 'boring' (the movie is noioso) and 'annoying' (the noise is noioso). Context tells you which meaning."},

    {type:"teach", trg:"tranquillo", src:"calm / relaxed", pos:"adj", gender:"m",
     note:"Masculine: tranquillo. Feminine: tranquilla.\nAlso used to reassure: 'Stai tranquillo!' (Relax! Don't worry!).",
     example:"A: Sei nervoso per l'esame?\nB: No, sono tranquillo.",
     exampleSrc:"A: Are you nervous about the exam?\nB: No, I am calm.",
     funFact:"'Tranquillo' is one of Italy's favorite words. It works as an adjective (a calm person), a reassurance ('stai tranquillo' = relax), and even an acknowledgment ('tranquillo' = no worries). Extremely versatile."},

    {type:"teach", trg:"nervoso", src:"nervous / irritable", pos:"adj", gender:"m",
     note:"Masculine: nervoso. Feminine: nervosa.\nIn Italian, it leans more toward 'irritable' than 'anxious.'",
     example:"A: Perche sei nervoso?\nB: Ho un esame domani.",
     exampleSrc:"A: Why are you nervous?\nB: I have an exam tomorrow.",
     funFact:"False friend alert: Italian 'nervoso' often means 'irritated' or 'on edge' rather than the English 'nervous' (anxious). 'Sono nervoso' usually means 'I am annoyed' more than 'I am scared.'"},

    {type:"teach", trg:"pigro", src:"lazy", pos:"adj", gender:"m",
     note:"Masculine: pigro. Feminine: pigra.\nFrom Latin 'piger' (slow, reluctant).",
     example:"A: Mio fratello e molto pigro.\nB: Non gli piace lavorare?",
     exampleSrc:"A: My brother is very lazy.\nB: He doesn't like to work?",
     funFact:"From Latin 'piger' (slow, reluctant). The Italian word 'pigrizia' (laziness) is considered one of the seven deadly sins in Catholic tradition ('accidia' in the original list). Italian culture values 'il dolce far niente' (the sweetness of doing nothing) but not laziness."},

    {type:"teach", trg:"energico", src:"energetic", pos:"adj", gender:"m",
     note:"Masculine: energico. Feminine: energica.\nFrom Greek 'energeia' (activity, force).",
     example:"A: La nonna e molto energica!\nB: Si, non si ferma mai!",
     exampleSrc:"A: Grandmother is very energetic!\nB: Yes, she never stops!",
     funFact:"From Greek 'energeia' (en + ergon = in work). An energetic person is literally 'in work' at all times. The plural is 'energici' (masculine) and 'energiche' (feminine), following the -co/-ca pattern."},

    {type:"teach", trg:"timido", src:"shy / timid", pos:"adj", gender:"m",
     note:"Masculine: timido. Feminine: timida.\nFrom Latin 'timidus' (fearful, timid).",
     example:"A: Il bambino e timido?\nB: Si, non parla con gli sconosciuti.",
     exampleSrc:"A: Is the child shy?\nB: Yes, he doesn't talk to strangers.",
     funFact:"From Latin 'timidus' (afraid). Italian culture tends to value outgoing personality ('essere estroverso'), so being 'timido' is often gently teased. English 'timid' is a direct borrowing from the same Latin word."},

    {type:"teach", trg:"coraggioso", src:"brave / courageous", pos:"adj", gender:"m",
     note:"Masculine: coraggioso. Feminine: coraggiosa.\nFrom 'coraggio' (courage), from Latin 'cor' (heart).",
     example:"A: Il pompiere e molto coraggioso.\nB: Si, ha salvato tre persone!",
     exampleSrc:"A: The firefighter is very brave.\nB: Yes, he saved three people!",
     funFact:"'Coraggio' comes from Latin 'cor' (heart). Courage literally comes from the heart. English 'courage' traveled through French from the same root. The rallying cry 'Coraggio!' means 'Be brave! Take heart!'"},

    {type:"teach", trg:"furbo", src:"clever / cunning", pos:"adj", gender:"m",
     note:"Masculine: furbo. Feminine: furba.\nCan be positive (street-smart) or negative (sly). Context matters.",
     example:"A: Quel ragazzo e molto furbo.\nB: Si, sa sempre come ottenere quello che vuole.",
     exampleSrc:"A: That boy is very clever.\nB: Yes, he always knows how to get what he wants.",
     funFact:"'Furbo' is a uniquely Italian concept. It describes someone who is street-smart, able to bend rules cleverly. It can be admiring or disapproving. 'Fare il furbo' (to play clever) is trying to get away with something."},

    {type:"teach", trg:"testardo", src:"stubborn", pos:"adj", gender:"m",
     note:"Masculine: testardo. Feminine: testarda.\nFrom 'testa' (head). Literally: 'hard-headed.'",
     example:"A: Mio figlio e molto testardo.\nB: Non ascolta mai?",
     exampleSrc:"A: My son is very stubborn.\nB: He never listens?",
     funFact:"'Testardo' literally means 'hard-headed,' from 'testa' (head). The Italian word for head ('testa') originally meant 'pot' or 'clay vessel' in Latin, a humorous metaphor for the skull."},

    // Quiz steps
    {type:"mc", q:"What does 'nervoso' usually mean in Italian?",
     opts:["Irritated / on edge","Scared","Excited","Tired"],
     ans:"Irritated / on edge",
     hint:"This is a false friend. In Italian, it leans more toward annoyance than the English sense of anxiety."},

    {type:"fb", s:"Marco e molto {1}, mi fa sempre ridere!",
     a:["divertente"],
     opts:["divertente","noioso","tranquillo","timido"],
     hint:"This person makes you laugh. The adjective means 'funny' or 'entertaining.'",
     sSrc:"Marco is very {1}, he always makes me laugh!"},

    {type:"mc", q:"What is the literal meaning of 'coraggioso'?",
     opts:["From the heart","From the head","From strength","From the mind"],
     ans:"From the heart",
     hint:"The root 'coraggio' comes from Latin 'cor' (heart). Bravery is literally a quality of the heart."},

    {type:"fb", s:"Il professore e molto {1} con tutti.",
     a:["gentile"],
     opts:["gentile","noioso","pigro","nervoso"],
     hint:"This adjective means kind and polite. It comes from Latin for 'of noble clan.'",
     sSrc:"The professor is very {1} to everyone."},

    {type:"match", pairs:[
      {trg:"gentile", src:"kind"},
      {trg:"divertente", src:"funny"},
      {trg:"noioso", src:"boring"},
      {trg:"tranquillo", src:"calm"},
      {trg:"coraggioso", src:"brave"}
    ]},

    {type:"mc", q:"What does 'furbo' describe?",
     opts:["Someone street-smart or cunning","Someone angry","Someone shy","Someone boring"],
     ans:"Someone street-smart or cunning",
     hint:"This uniquely Italian trait can be admired or criticized. It describes cleverness in bending rules."},

    {type:"fb", s:"Mio fratello e molto {1}, non si ferma mai!",
     a:["energico"],
     opts:["energico","pigro","timido","tranquillo"],
     hint:"This person is full of energy and never stops. From Greek 'energeia' (force, activity).",
     sSrc:"My brother is very {1}, he never stops!"},

    {type:"mc", q:"What is the opposite of 'pigro'?",
     opts:["Energico","Noioso","Tranquillo","Timido"],
     ans:"Energico",
     hint:"A lazy person lacks energy. The opposite is someone full of activity and drive."},

    {type:"fb", s:"Il bambino e {1}, non parla con gli sconosciuti.",
     a:["timido"],
     opts:["timido","furbo","coraggioso","divertente"],
     hint:"This child avoids strangers. The adjective means shy or timid, from Latin 'timidus.'",
     sSrc:"The child is {1}, he doesn't talk to strangers."},

    {type:"mc", q:"What does 'testardo' literally mean?",
     opts:["Hard-headed (from testa = head)","Strong-armed","Big-hearted","Quick-footed"],
     ans:"Hard-headed (from testa = head)",
     hint:"This adjective for stubborn comes from the Italian word for head. Literally a person with a hard head."}
  ]
};
export default LESSON_6;
