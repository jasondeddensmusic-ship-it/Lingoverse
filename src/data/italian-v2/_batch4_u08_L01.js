// Batch 4 — Unit 08, Lesson 1: Fabrics, Accessories & Fashion Terms
const BATCH4_U08_L1 = {
  id:"itv2_u08l_b4_1", title:"Moda e accessori", icon:"\uD83D\uDC5C", xp:15, board:true,
  steps:[
    {type:"intro", title:"Moda e accessori",
     desc:"Dive into Italian fashion vocabulary: fabrics, accessories, and the language of style that Italy is famous for.",
     goals:["Name common fabrics and materials","Describe accessories","Use fashion vocabulary in shopping"]},

    {type:"teach", trg:"la pelle", src:"leather / skin", pos:"noun", gender:"f",
     note:"Feminine. Dual meaning: leather (material) and skin (body).\n'Borsa in pelle' = leather bag.",
     example:"A: Questa borsa e in pelle?\nB: Si, pelle italiana di alta qualità.",
     exampleSrc:"A: Is this bag leather?\nB: Yes, high-quality Italian leather.",
     funFact:"Italian leather ('pelle italiana') is world-renowned. Florence's leather district near Santa Croce has been producing fine leather since the Renaissance. The 'cuoio fiorentino' (Florentine leather) is considered the gold standard."},

    {type:"teach", trg:"la seta", src:"silk", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'seta' (bristle, later silk).\n'Una cravatta di seta' = a silk tie.",
     example:"A: Questa camicia e di seta?\nB: Si, seta pura.",
     exampleSrc:"A: Is this shirt silk?\nB: Yes, pure silk.",
     funFact:"Como, in northern Italy, has been the center of silk production since the 15th century. Italian silk is used by fashion houses worldwide. The 'Museo della Seta' (Silk Museum) in Como tells the story of this luxury industry."},

    {type:"teach", trg:"il cotone", src:"cotton", pos:"noun", gender:"m",
     note:"Masculine. From Arabic 'qutn.'\n'Maglietta di cotone' = cotton T-shirt.",
     example:"A: Preferisco il cotone in estate.\nB: Si, e più fresco della seta.",
     exampleSrc:"A: I prefer cotton in summer.\nB: Yes, it is cooler than silk.",
     funFact:"The word 'cotone' entered Italian from Arabic during medieval trade. Italy is not a major cotton producer but is famous for transforming raw cotton into high-quality fabrics, especially in textile districts of Lombardy and Tuscany."},

    {type:"teach", trg:"la lana", src:"wool", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'lana.'\n'Maglione di lana' = wool sweater.",
     example:"A: Il maglione e di lana?\nB: Si, lana merino. Molto calda.",
     exampleSrc:"A: Is the sweater wool?\nB: Yes, merino wool. Very warm.",
     funFact:"Prato, near Florence, is Italy's (and Europe's) largest wool processing center. The Italian textile industry recycles more wool than any other country. 'Lana vergine' (virgin wool) means wool that has never been processed before."},

    {type:"teach", trg:"la borsa", src:"the bag / purse", pos:"noun", gender:"f",
     note:"Feminine. Plural: le borse. Multiple meanings: bag, purse, stock exchange.\n'Borsa di studio' = scholarship.",
     example:"A: Che bella borsa! Dove l'hai comprata?\nB: In un negozio a Firenze.",
     exampleSrc:"A: What a beautiful bag! Where did you buy it?\nB: In a shop in Florence.",
     funFact:"'La borsa' means a bag/purse, but 'la Borsa' (capitalized) means the stock exchange. 'Borsa di studio' means scholarship. One word, three completely different meanings depending on context."},

    {type:"teach", trg:"la cintura", src:"the belt", pos:"noun", gender:"f",
     note:"Feminine. From 'cingere' (to gird/encircle).\n'Cintura di sicurezza' = seatbelt.",
     example:"A: Questa cintura e troppo grande.\nB: Prova una taglia più piccola.",
     exampleSrc:"A: This belt is too big.\nB: Try a smaller size.",
     funFact:"Italian leather belts are a fashion essential. 'Cintura di sicurezza' (safety belt/seatbelt) uses the same word. The expression 'stringere la cintura' (to tighten the belt) means to cut spending, just like in English."},

    {type:"teach", trg:"gli occhiali", src:"glasses / eyeglasses", pos:"noun", gender:"m",
     note:"Masculine plural. Always plural. 'Occhiali da sole' = sunglasses.\nFrom 'occhio' (eye).",
     example:"A: Dove sono i miei occhiali?\nB: Sulla testa!",
     exampleSrc:"A: Where are my glasses?\nB: On your head!",
     funFact:"Italy dominates global eyewear production. Luxottica (now EssilorLuxottica), based in Milan, owns Ray-Ban, Oakley, and produces glasses for Prada, Gucci, and Chanel. Around 80% of the world's luxury eyewear is Italian-made."},

    {type:"teach", trg:"l'anello", src:"the ring", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli anelli. From Latin 'anellus' (little ring).\n'Anello di fidanzamento' = engagement ring.",
     example:"A: Che bell'anello! E d'oro?\nB: Si, oro italiano.",
     exampleSrc:"A: What a beautiful ring! Is it gold?\nB: Yes, Italian gold.",
     funFact:"Italian goldsmithing has a 3,000-year history. Arezzo and Vicenza are the centers of Italian gold jewelry production. 'Oro italiano' (Italian gold) is prized worldwide. The Ponte Vecchio in Florence is lined with goldsmiths' shops."},

    {type:"teach", trg:"l'orologio", src:"the watch / clock", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli orologi. From Greek 'horologion' (time-teller).\nBoth wrist watches and wall clocks.",
     example:"A: Che bell'orologio! E nuovo?\nB: Si, e un regalo.",
     exampleSrc:"A: What a nice watch! Is it new?\nB: Yes, it is a gift.",
     funFact:"While Switzerland dominates watchmaking, Italian watch brands like Panerai (Florence) and Bulgari (Rome) are prestigious. 'Orologio' covers all timekeeping devices: wristwatch, wall clock, clock tower. Context clarifies which one."},

    {type:"teach", trg:"la sciarpa", src:"the scarf", pos:"noun", gender:"f",
     note:"Feminine. Plural: le sciarpe. Essential Italian accessory year-round.\nFrom Germanic 'skerpa.'",
     example:"A: Che freddo! Metti la sciarpa.\nB: Hai ragione, fa freddo oggi.",
     exampleSrc:"A: How cold! Put on your scarf.\nB: You are right, it is cold today.",
     funFact:"Italians wear scarves year-round: wool in winter, silk in summer. The 'colpo d'aria' (draft of air) is feared by all Italian mothers, and the scarf is the primary defense. Italian men wear scarves with as much flair as women."},

    {type:"teach", trg:"elegante", src:"elegant / stylish", pos:"adj", gender:null,
     note:"Same form for masculine and feminine.\nThe supreme Italian fashion compliment.",
     example:"A: Sei molto elegante stasera!\nB: Grazie! E un vestito nuovo.",
     exampleSrc:"A: You are very elegant tonight!\nB: Thanks! It is a new dress.",
     funFact:"'Elegante' is one of the highest compliments in Italian fashion culture. Italians distinguish 'elegante' (refined, classy) from 'alla moda' (trendy/fashionable). Being 'elegante' is timeless; being 'alla moda' follows trends."},

    {type:"teach", trg:"alla moda", src:"fashionable / trendy", pos:"adj", gender:null,
     note:"Invariable expression. 'Moda' = fashion.\n'Seguire la moda' = to follow fashion trends.",
     example:"A: Quel vestito e molto alla moda.\nB: Si, l'ho visto in una rivista.",
     exampleSrc:"A: That dress is very fashionable.\nB: Yes, I saw it in a magazine.",
     funFact:"Milan is one of the Big Four fashion capitals (with Paris, New York, London). Italian fashion brands like Gucci, Prada, Armani, and Versace define global luxury. Milan Fashion Week ('Settimana della Moda') attracts the world."},

    {type:"teach", trg:"la taglia", src:"the size (clothing)", pos:"noun", gender:"f",
     note:"Feminine. 'Che taglia porti?' = What size do you wear?\nItalian sizes differ from US/UK sizes.",
     example:"A: Che taglia porta?\nB: La 42, per favore.",
     exampleSrc:"A: What size do you wear?\nB: Size 42, please.",
     funFact:"Italian clothing sizes differ significantly from American ones. An Italian 42 is roughly a US 6-8. Men's suits use the same numbering. Always try on clothes in Italy rather than assuming your usual size will work."},

    {type:"teach", trg:"provare", src:"to try / to try on", pos:"verb", gender:null,
     note:"Regular -are verb. 'Posso provare questo?' = Can I try this on?\n'Il camerino' = the fitting room.",
     example:"A: Posso provare questa giacca?\nB: Certo, il camerino e li.",
     exampleSrc:"A: Can I try on this jacket?\nB: Of course, the fitting room is there.",
     funFact:"'Provare' means both 'to try on' (clothes) and 'to try/attempt.' In Italian shops, the fitting room is 'il camerino.' Shop assistants ('commessi') in Italian fashion stores are typically well-informed and happy to offer styling advice."},

    // Quiz steps
    {type:"mc", q:"Quale città e il centro mondiale degli occhiali?",
     opts:["L'industria italiana (Luxottica) domina","La Svizzera","La Francia","La Germania"],
     ans:"L'industria italiana (Luxottica) domina",
     hint:"This Italian company owns Ray-Ban and produces glasses for major luxury brands."},

    {type:"fb", s:"Questa borsa e in {1} italiana, molto pregiata.",
     a:["pelle"], opts:["pelle","seta","lana","cotone"],
     hint:"Florence is famous for this material made from animal hide.",
     sSrc:"This bag is made of Italian {1}, very valuable."},

    {type:"match", pairs:[
      {trg:"la pelle", src:"leather"},
      {trg:"la seta", src:"silk"},
      {trg:"il cotone", src:"cotton"},
      {trg:"la lana", src:"wool"},
      {trg:"la sciarpa", src:"scarf"}
    ]},

    {type:"mc", q:"Qual e la differenza tra 'elegante' e 'alla moda'?",
     opts:["Elegante is timeless refinement; alla moda follows current trends","They mean the same thing","Elegante is for men; alla moda is for women","Alla moda is more formal"],
     ans:"Elegante is timeless refinement; alla moda follows current trends",
     hint:"One is about lasting class, the other is about what is currently popular."},

    {type:"fb", s:"Posso {1} questa giacca? Dov'e il camerino?",
     a:["provare"], opts:["provare","comprare","guardare","pagare"],
     hint:"You want to try the jacket on to see if it fits.",
     sSrc:"Can I {1} this jacket? Where is the fitting room?"},

    {type:"mc", q:"Dove si produce la seta in Italia?",
     opts:["Como, in northern Italy","Firenze, in Tuscany","Napoli, in the south","Roma, in Lazio"],
     ans:"Como, in northern Italy",
     hint:"This lakeside city has been the center of silk production since the 1400s."},

    {type:"fb", s:"Che {1} porta? Abbiamo la 38, 40 e 42.",
     a:["taglia"], opts:["taglia","borsa","cintura","sciarpa"],
     hint:"The shop assistant is asking about your clothing size.",
     sSrc:"What {1} do you wear? We have 38, 40 and 42."},

    {type:"mc", q:"Cosa significa 'colpo d'aria' nella cultura italiana?",
     opts:["A feared cold draft that Italians protect against with scarves","A fashion trend","A type of fabric","A summer breeze"],
     ans:"A feared cold draft that Italians protect against with scarves",
     hint:"Italian mothers are especially concerned about this invisible health threat."}
  ,{type:"match",pairs:[{trg:"la borsa",src:"the bag / purse"},{trg:"la cintura",src:"the belt"},{trg:"gli occhiali",src:"glasses / eyeglasses"}]},{type:"mc",q:"How do you say \"ring\" in Italian?",opts:["la finestra","il tavolo","l'anello","la bicicletta"],ans:"l'anello",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"watch / clock\" in Italian?",opts:["la finestra","l'orologio","il tavolo","la bicicletta"],ans:"l'orologio",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH4_U08_L1;
