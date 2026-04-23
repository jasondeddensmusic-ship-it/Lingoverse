// Batch 4. Unit 04, Lesson 1: Italian Desserts & Sweet Treats
const BATCH4_U04_L1 = {
  id:"itv2_u04l_b4_1", title:"I dolci", icon:"\uD83C\uDF70", xp:15, board:true,
  steps:[
    {type:"intro", title:"I dolci",
     desc:"Discover Italian desserts and sweet treats, from gelato to tiramisu. Learn to order at a pasticceria.",
     goals:["Name popular Italian desserts","Order sweets and pastries","Describe flavors and textures"]},

    {type:"teach", trg:"il gelato", src:"the ice cream", pos:"noun", gender:"m",
     note:"Masculine. Plural: i gelati. From 'gelare' (to freeze).\nItalian gelato is denser than American ice cream.",
     example:"A: Che gusto vuoi?\nB: Un gelato alla fragola, per favore.",
     exampleSrc:"A: What flavor do you want?\nB: A strawberry ice cream, please.",
     funFact:"Italian gelato has less air and less fat than American ice cream, making it denser and more flavorful. A 'gelateria' is found on nearly every Italian street corner. Italians eat over 6kg of gelato per person per year."},

    {type:"teach", trg:"il gusto", src:"the flavor / taste", pos:"noun", gender:"m",
     note:"Masculine. Plural: i gusti. Also means 'taste' in the aesthetic sense.\n'Di buon gusto' = in good taste.",
     example:"A: Quanti gusti posso scegliere?\nB: Due gusti per il cono piccolo.",
     exampleSrc:"A: How many flavors can I choose?\nB: Two flavors for the small cone.",
     funFact:"At an Italian gelateria, you pick your gusti (flavors) after choosing the size. 'Gusto' also means personal taste: 'questione di gusti' (a matter of taste). Italian culture takes both food taste and aesthetic taste very seriously."},

    {type:"teach", trg:"il tiramisu", src:"the tiramisu", pos:"noun", gender:"m",
     note:"Masculine. Invariable. Literally: tira (pull) + mi (me) + su (up).\nMeaning: 'pick me up.'",
     example:"A: Il tiramisu e il mio dolce preferito.\nB: Anche il mio!",
     exampleSrc:"A: Tiramisu is my favorite dessert.\nB: Mine too!",
     funFact:"Literally means 'pull me up' or 'pick me up,' referring to the coffee and sugar energy boost. The Veneto and Friuli-Venezia Giulia regions both claim to have invented it. The debate is still fierce."},

    {type:"teach", trg:"la torta", src:"the cake", pos:"noun", gender:"f",
     note:"Feminine. Plural: le torte. Used for cakes and pies.\n'Torta di compleanno' = birthday cake.",
     example:"A: Hai fatto la torta?\nB: Si, una torta al cioccolato!",
     exampleSrc:"A: Did you make the cake?\nB: Yes, a chocolate cake!",
     funFact:"'Torta' covers both sweet and savory pies in Italian. 'Torta salata' is a savory pie. Every Italian region has its signature torta: torta della nonna (Tuscany), pastiera (Naples), torta di riso (Emilia-Romagna)."},

    {type:"teach", trg:"il biscotto", src:"the cookie / biscuit", pos:"noun", gender:"m",
     note:"Masculine. Plural: i biscotti. Literally: bis (twice) + cotto (cooked).\nBaked twice for crunchiness.",
     example:"A: Vuoi un biscotto con il te?\nB: Si, grazie!",
     exampleSrc:"A: Do you want a cookie with tea?\nB: Yes, thanks!",
     funFact:"'Biscotto' literally means 'twice-cooked.' The original biscotti were baked twice to make them hard and long-lasting for sailors and travelers. 'Biscotti di Prato' (also called cantucci) are the most famous."},

    {type:"teach", trg:"la panna", src:"the cream", pos:"noun", gender:"f",
     note:"Feminine. 'Con panna' = with cream. 'Panna cotta' = cooked cream.\n'Panna montata' = whipped cream.",
     example:"A: Vuoi il gelato con la panna?\nB: Si, con panna montata!",
     exampleSrc:"A: Do you want ice cream with cream?\nB: Yes, with whipped cream!",
     funFact:"'Panna cotta' (cooked cream) is one of Italy's most elegant desserts despite having just four ingredients: cream, sugar, vanilla, and gelatin. Its simplicity is the point. Perfect panna cotta wobbles like a gentle earthquake."},

    {type:"teach", trg:"il cioccolato", src:"the chocolate", pos:"noun", gender:"m",
     note:"Masculine. From Nahuatl 'xocolatl' (bitter water).\nTurin is Italy's chocolate capital.",
     example:"A: Preferisci il cioccolato fondente o al latte?\nB: Fondente, più amaro e meglio e!",
     exampleSrc:"A: Do you prefer dark or milk chocolate?\nB: Dark, the more bitter the better!",
     funFact:"Turin (Torino) is Italy's chocolate capital and home to Nutella's parent company Ferrero. 'Cioccolato di Modica' (Sicily) is made using an ancient Aztec technique that keeps a grainy texture. Italy's chocolate tradition rivals Switzerland's."},

    {type:"teach", trg:"dolce", src:"sweet / dessert", pos:"adj", gender:null,
     note:"Both an adjective (sweet) and a noun (dessert/sweet).\n'Il dolce' = the dessert course.",
     example:"A: Prendiamo il dolce?\nB: Si, vediamo il menu dei dolci.",
     exampleSrc:"A: Shall we have dessert?\nB: Yes, let's see the dessert menu.",
     funFact:"'Dolce vita' (sweet life) became world-famous from Fellini's 1960 film. The adjective 'dolce' describes both taste and personality (a sweet person). 'Dolcetto' (little sweet one) is both a term of endearment and a Piedmontese wine."},

    {type:"teach", trg:"amaro", src:"bitter", pos:"adj", gender:"m",
     note:"Masculine. Feminine: amara. Also a type of herbal liqueur.\n'Amaro' is drunk after meals as a digestif.",
     example:"A: Il caffè e troppo amaro.\nB: Metti un po' di zucchero.",
     exampleSrc:"A: The coffee is too bitter.\nB: Put a little sugar.",
     funFact:"'Amaro' is both an adjective and a category of Italian liqueurs made with herbs, roots, and citrus peel. Every Italian region has its own amaro recipe. Fernet Branca, Averna, and Montenegro are famous brands."},

    {type:"teach", trg:"la fragola", src:"the strawberry", pos:"noun", gender:"f",
     note:"Feminine. Plural: le fragole. A very popular gelato flavor.\nFrom Latin 'fragare' (to smell sweet).",
     example:"A: Che gusto vuoi?\nB: Fragola e cioccolato!",
     exampleSrc:"A: What flavor do you want?\nB: Strawberry and chocolate!",
     funFact:"'Fragola' comes from Latin 'fragare' (to emit fragrance). Strawberries are prized in Italian cuisine: 'fragole con panna' (strawberries with cream) is a classic spring dessert. Italy is Europe's second-largest strawberry producer."},

    {type:"teach", trg:"la nocciola", src:"the hazelnut", pos:"noun", gender:"f",
     note:"Feminine. Plural: le nocciole.\nPiedmont hazelnuts are considered the world's finest.",
     example:"A: Il gelato alla nocciola e buonissimo.\nB: E il mio gusto preferito!",
     exampleSrc:"A: Hazelnut ice cream is delicious.\nB: It is my favorite flavor!",
     funFact:"Piedmont's Tonda Gentile hazelnut is the base of Nutella and gianduia chocolate. This nut variety is so prized that it has protected geographical status. Italian hazelnut gelato is legendary."},

    {type:"teach", trg:"la pasticceria", src:"the pastry shop / bakery", pos:"noun", gender:"f",
     note:"Feminine. From 'pasticcio' (pastry).\nThe Italian version of a patisserie.",
     example:"A: Andiamo in pasticceria?\nB: Si, voglio comprare dei cannoli.",
     exampleSrc:"A: Shall we go to the pastry shop?\nB: Yes, I want to buy some cannoli.",
     funFact:"Italian pasticcerie are works of art. The display cases feature rows of elaborate pastries, each a miniature masterpiece. In the south, pasticcerie specialize in ricotta-filled pastries. In the north, cream-based pastries dominate."},

    {type:"teach", trg:"assaggiare", src:"to taste / to try (food)", pos:"verb", gender:null,
     note:"From 'saggio' (sample, test). 'Vuoi assaggiare?' = Do you want to taste?\nVery common at markets and shops.",
     example:"A: Posso assaggiare il gelato al pistacchio?\nB: Certo, ecco!",
     exampleSrc:"A: Can I taste the pistachio ice cream?\nB: Of course, here!",
     funFact:"Many Italian gelaterie let you taste before buying. Just ask 'posso assaggiare?' They will offer a tiny spoon. Food markets also invite tasting. Italian food culture is generous: try before you buy is the norm."},

    {type:"teach", trg:"squisito", src:"delicious / exquisite", pos:"adj", gender:"m",
     note:"Masculine. Feminine: squisita. Stronger than 'buono.'\nFrom Latin 'exquisitus' (carefully sought out).",
     example:"A: Come e il tiramisu?\nB: Squisito! Il migliore che ho mai mangiato.",
     exampleSrc:"A: How is the tiramisu?\nB: Delicious! The best I have ever eaten.",
     funFact:"'Squisito' is a strong compliment in Italian. It is more refined than 'buono' (good) or 'delizioso' (delicious). Using it shows appreciation for culinary artistry. Italian hosts beam when you call their food 'squisito.'"},

    // Quiz steps
    {type:"mc", q:"Cosa significa 'tiramisu' letteralmente?",
     opts:["Pull me up / Pick me up","Sweet dream","Coffee cake","Soft cream"],
     ans:"Pull me up / Pick me up",
     hint:"The name is made of three Italian words: tira + mi + su."},

    {type:"fb", s:"Che {1} vuoi? Fragola o cioccolato?",
     a:["gusto"], opts:["gusto","gelato","dolce","torta"],
     hint:"The seller is asking which flavor you prefer for your gelato.",
     sSrc:"What {1} do you want? Strawberry or chocolate?"},

    {type:"match", pairs:[
      {trg:"il gelato", src:"ice cream"},
      {trg:"la torta", src:"cake"},
      {trg:"il biscotto", src:"cookie"},
      {trg:"la panna", src:"cream"},
      {trg:"la nocciola", src:"hazelnut"}
    ,{trg:"squisito",src:"delicious / exquisite"}]},

    {type:"mc", q:"Qual e la capitale italiana del cioccolato?",
     opts:["Firenze","Torino","Roma","Napoli"],
     ans:"Torino",
     hint:"This northern city is home to Ferrero and the gianduia tradition."},

    {type:"fb", s:"Posso {1} il gelato prima di comprarlo?",
     a:["assaggiare"], opts:["assaggiare","mangiare","comprare","guardare"],
     hint:"You want to try a small sample before making your choice.",
     sSrc:"Can I {1} the ice cream before buying it?"},

    {type:"mc", q:"Cosa significa 'amaro' in italiano?",
     opts:["Sour","Spicy","Bitter","Sweet"],
     ans:"Bitter",
     hint:"This word is also the name of a category of Italian herbal liqueurs."},

    {type:"fb", s:"La torta della nonna e {1}! La migliore!",
     a:["squisita"], opts:["squisita","amara","dolce","fragola"],
     hint:"This strong compliment means 'exquisite' or 'delicious.'",
     sSrc:"Grandma's cake is {1}! The best!"},

    {type:"mc", q:"Cosa significa 'biscotto' letteralmente?",
     opts:["Sweet bread","Little bite","Round cake","Twice-cooked"],
     ans:"Twice-cooked",
     hint:"The prefix 'bis-' means t..., and 'cotto' means c...."}
  ,{type:"match",pairs:[{trg:"il tiramisu",src:"the tiramisu"},{trg:"il cioccolato",src:"the chocolate"},{trg:"dolce",src:"sweet / dessert"},{trg:"amaro",src:"bitter"},{trg:"la fragola",src:"the strawberry"},{trg:"la pasticceria",src:"the pastry shop / bakery"}]}]
};
export default BATCH4_U04_L1;
