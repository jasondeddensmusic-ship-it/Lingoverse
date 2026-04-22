// L20 - Review & Advanced Expressions
const LESSON_20 = {id:"frv2_b1gap_l20", title:"Nuances avancées", icon:"\u{1F393}", xp:15, board:true, steps:[

{type:"intro", title:"Nuances avancées",
 desc:"Master advanced vocabulary and expressions that add polish and sophistication to your French.",
 goals:["Learn 20 advanced words and expressions","Add nuance and precision to your speech","Handle formal and literary register"]},

{type:"teach", trg:"l'axiome", src:"axiom", pos:"noun", gender:"m",
 note:"Masculine noun. A self-evident truth or principle.\nFrom Greek axioma (worthy of acceptance).",
 example:"A: C'est un axiome de la politique moderne.\nB: Personne ne le remet en question.",
 exampleSrc:"A: It's an axiom of modern politics.\nB: Nobody questions it.",
 funFact:"In math, axioms are the starting assumptions. In everyday French, it means an unquestionable truth."},

{type:"teach", trg:"l'azur", src:"azure, sky blue", pos:"noun", gender:"m",
 note:"Masculine noun. Deep sky blue.\nLa Côte d'Azur = the French Riviera.",
 example:"A: Le ciel est d'un azur parfait aujourd'hui.\nB: Pas un seul nuage en vue.",
 exampleSrc:"A: The sky is a perfect azure today.\nB: Not a single cloud in sight.",
 funFact:"La Côte d'Azur gets its name from the azure sky and sea. The term was coined in 1887."},

{type:"teach", trg:"l'aveu", src:"confession, admission", pos:"noun", gender:"m",
 note:"Masculine noun. An admission of truth or guilt.\nDe l'aveu de tous = by everyone's admission.",
 example:"A: De l'aveu de tous, c'est le meilleur restaurant.\nB: Je n'ai jamais été déçu là-bas.",
 exampleSrc:"A: By everyone's admission, it's the best restaurant.\nB: I've never been disappointed there.",
 funFact:"De l'aveu même de... means 'by the own admission of...' A powerful rhetorical device."},

{type:"teach", trg:"l'axe", src:"axis, main road", pos:"noun", gender:"m",
 note:"Masculine noun. A central line or main direction.\nAxe routier = major road.",
 example:"A: L'axe principal de la ville est cette avenue.\nB: Elle relie le nord au sud.",
 exampleSrc:"A: The main axis of the city is this avenue.\nB: It connects north to south.",
 funFact:"Paris has its axe historique from the Louvre through the Champs-Élysées to La Défense."},

{type:"teach", trg:"l'azote", src:"nitrogen", pos:"noun", gender:"m",
 note:"Masculine noun. The chemical element N.\nFrom Greek a (without) + zoe (life).",
 example:"A: L'air contient 78% d'azote.\nB: C'est le gaz le plus abondant de l'atmosphère.",
 exampleSrc:"A: Air contains 78% nitrogen.\nB: It's the most abundant gas in the atmosphere.",
 funFact:"Lavoisier named it azote (lifeless) because it doesn't support breathing. A French-named element."},

{type:"mc",
 q:"Quel mot désigne le bleu profond du ciel de la Côte d'Azur ?",
 opts:["l'azur","l'azote","l'axe","l'axiome"],
 ans:"l'azur",
 hint:"The French Riviera is named after this color. It describes the perfect blue of the Mediterranean sky."},

{type:"teach", trg:"l'avantage", src:"advantage, benefit", pos:"noun", gender:"m",
 note:"Masculine noun. A favorable position or benefit.\nTirer avantage de = to benefit from.",
 example:"A: Le principal avantage, c'est la flexibilité.\nB: On peut travailler de n'importe où.",
 exampleSrc:"A: The main advantage is flexibility.\nB: You can work from anywhere.",
 funFact:"In tennis, avantage means the point after deuce. The score goes 'avantage Nadal.'"},

{type:"teach", trg:"l'avarice", src:"avarice, greed", pos:"noun", gender:"f",
 note:"Feminine noun. Excessive love of money. Miserliness.\nOne of the seven deadly sins.",
 example:"A: L'avarice est un défaut qui isole les gens.\nB: Personne n'aime un avare.",
 exampleSrc:"A: Avarice is a flaw that isolates people.\nB: Nobody likes a miser.",
 funFact:"Molière's L'Avare (The Miser, 1668) is the definitive French comedy about greed. Still performed today."},

{type:"teach", trg:"l'avare", src:"miser, stingy person", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Also adjective: avare.\nExtremely unwilling to spend money.",
 example:"A: Ne sois pas si avare, offre-lui un cadeau.\nB: D'accord, mais quelque chose de simple.",
 exampleSrc:"A: Don't be so stingy, buy her a gift.\nB: Okay, but something simple.",
 funFact:"Harpagon in L'Avare is literature's most famous miser. 'Ma cassette !' (My strongbox!) is his iconic cry."},

{type:"teach", trg:"l'avance", src:"advance, lead, progress", pos:"noun", gender:"f",
 note:"Feminine noun. Being ahead or a forward movement.\nEn avance = early/ahead. Par avance = in advance.",
 example:"A: Nous avons une heure d'avance sur le programme.\nB: Profitons-en pour faire une pause.",
 exampleSrc:"A: We're one hour ahead of schedule.\nB: Let's take advantage and have a break.",
 funFact:"'Merci par avance' (thanks in advance) is standard French email etiquette. Polite but slightly pushy."},

{type:"fb",
 s:"Molière a écrit une comédie célèbre sur l'{1}.",
 a:["avarice"],
 opts:["avarice","avance","avantage","azur"],
 hint:"This feminine noun is one of the seven deadly sins. Molière wrote his most famous comedy about it.",
 sSrc:"Molière wrote a famous comedy about {1}."},

{type:"teach", trg:"l'avancement", src:"advancement, promotion, progress", pos:"noun", gender:"m",
 note:"Masculine noun. Career progress or project advancement.\nPromotion in the workplace.",
 example:"A: Son avancement dans l'entreprise a été rapide.\nB: En cinq ans, il est devenu directeur.",
 exampleSrc:"A: His advancement in the company was rapid.\nB: In five years, he became a director.",
 funFact:"Avancement à l'ancienneté (seniority-based promotion) is the French public sector's traditional system."},

{type:"teach", trg:"l'avertir", src:"to warn, to notify", pos:"verb", gender:null,
 note:"Regular -ir verb. To give advance warning.\nJe t'avais averti ! = I warned you!",
 example:"A: Je t'avais averti que ce serait difficile.\nB: Tu avais raison, j'aurais dû t'écouter.",
 exampleSrc:"A: I warned you it would be difficult.\nB: You were right, I should have listened.",
 funFact:"Avertir is warning. Prévenir is informing in advance. Subtle difference: avertir implies danger."},

{type:"teach", trg:"l'avocat", src:"lawyer, avocado", pos:"noun", gender:"m",
 note:"Masculine noun. Avocate (f) for female lawyer.\nAlso the fruit: un avocat = an avocado.",
 example:"A: L'avocat de la défense a plaidé l'innocence.\nB: Son discours était très convaincant.",
 exampleSrc:"A: The defense lawyer pleaded innocence.\nB: His speech was very convincing.",
 funFact:"Same word for lawyer and avocado. Context always tells. The fruit name comes from Nahuatl ahuacatl."},

{type:"mc",
 q:"Quel mot signifie à la fois un juriste et un fruit vert ?",
 opts:["un aventurier","un avocat","un avare","un auditeur"],
 ans:"un avocat",
 hint:"This homonym covers two very different meanings. The fruit name comes from an Aztec language."},

{type:"teach", trg:"l'avoir", src:"assets, credit", pos:"noun", gender:"m",
 note:"Masculine noun. What you own, financial assets.\nDoit et avoir = debit and credit.",
 example:"A: L'avoir de l'entreprise est estimé à deux millions.\nB: C'est une société en bonne santé.",
 exampleSrc:"A: The company's assets are estimated at two million.\nB: It's a healthy company.",
 funFact:"In accounting, avoir means credit. 'Doit et avoir' (debit and credit) is the foundation of bookkeeping."},

{type:"teach", trg:"l'avion", src:"airplane", pos:"noun", gender:"m",
 note:"Masculine noun. A flying machine.\nPrendre l'avion = to fly/take a plane.",
 example:"A: L'avion décolle dans une heure.\nB: On a encore le temps de prendre un café.",
 exampleSrc:"A: The plane takes off in one hour.\nB: We still have time to grab a coffee.",
 funFact:"From Latin avis (bird). Clément Ader coined 'avion' in 1890 for his flying machine. A French word."},

{type:"teach", trg:"l'aviser", src:"to notice, to advise, to decide", pos:"verb", gender:null,
 note:"Regular -er verb. S'aviser de = to dare to, to suddenly decide.\nMultiple meanings by context.",
 example:"A: Avisez-moi dès que le colis arrive.\nB: D'accord, je vous envoie un message.",
 exampleSrc:"A: Notify me as soon as the package arrives.\nB: Okay, I'll send you a message.",
 funFact:"Ne t'avise pas de... means 'Don't you dare...' A threatening/warning expression."},

{type:"teach", trg:"l'avouer", src:"to confess, to admit", pos:"verb", gender:null,
 note:"Regular -er verb. To acknowledge the truth.\nAvouer un crime = to confess to a crime.",
 example:"A: J'avoue que j'ai eu tort.\nB: C'est courageux de le reconnaître.",
 exampleSrc:"A: I admit that I was wrong.\nB: It's brave to acknowledge it.",
 funFact:"'J'avoue' in casual speech means 'I have to admit' or 'honestly.' Very common filler."},

{type:"fb",
 s:"L'{1} décolle dans vingt minutes, dépêchons-nous.",
 a:["avion"],
 opts:["avion","avocat","avoir","avancement"],
 hint:"This masculine noun was coined by Clément Ader from the Latin word for 'bird.'",
 sSrc:"The {1} takes off in twenty minutes, let's hurry."},

{type:"teach", trg:"l'axial", src:"axial, along the axis", pos:"adj", gender:null,
 note:"Adjective. Axial (m), axiale (f). Along an axis.\nTechnical and scientific vocabulary.",
 example:"A: La symétrie axiale est un concept mathématique fondamental.\nB: On l'apprend dès le collège.",
 exampleSrc:"A: Axial symmetry is a fundamental mathematical concept.\nB: You learn it in middle school.",
 funFact:"In French math education, symétrie axiale (reflection symmetry) is taught around age 11-12."},

{type:"match", pairs:[
  {trg:"l'azur", src:"azure/sky blue"},
  {trg:"l'avocat", src:"lawyer/avocado"},
  {trg:"l'avance", src:"advance/lead"},
  {trg:"l'avarice", src:"greed"},
  {trg:"l'avion", src:"airplane"}
]},

{type:"mc",
 q:"Quel verbe signifie 'reconnaître la vérité' ou 'confesser' ?",
 opts:["avertir","augurer","avouer","aviser"],
 ans:"avouer",
 hint:"In casual speech, 'j'...' this verb means 'I have to admit.' It's a very common filler expression."},

{type:"fb",
 s:"Ne t'{1} pas de recommencer, tu seras puni.",
 a:["avise"],
 opts:["avise","avoue","avertis","avance"],
 hint:"'Ne t'... pas de' means 'Don't you dare.' This verb has multiple meanings depending on context.",
 sSrc:"Don't you dare {1} to do it again, you'll be punished."}

]};
export default LESSON_20;
