const LESSON_11 = {
  id:"frv2_b2g8_l11", title:"Politique et pouvoir", icon:"\u{1F3DB}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et pouvoir",
     desc:"Vocabulary for discussing political systems, governance, and power dynamics at B2 level.",
     goals:["Learn 15 politics and governance words","Debate political issues in French","Understand institutional terminology"]},

    {type:"teach", trg:"le confédéralisme", src:"confederalism", pos:"noun", gender:"m",
     note:"Masculine noun. A political system where states keep most power.\nOpposite of centralism.",
     example:"A: Le confédéralisme donne plus de pouvoir aux régions.\nB: C'est le modèle suisse.",
     exampleSrc:"A: Confederalism gives more power to regions.\nB: That's the Swiss model.",
     funFact:"Switzerland is the most famous confederalist state. France, by contrast, is extremely centralized."},

    {type:"teach", trg:"le libératoire", src:"liberating (legally binding)", pos:"adj", gender:null,
     note:"Adjective. Having the effect of freeing from an obligation.\nLegal and financial term.",
     example:"A: Ce paiement a un effet libératoire.\nB: Votre dette est donc effacée.",
     exampleSrc:"A: This payment has a liberating effect.\nB: Your debt is therefore erased.",
     funFact:"In French law, 'paiement libératoire' means a payment that fully discharges a debt."},

    {type:"teach", trg:"le non-fumeur", src:"the non-smoker", pos:"noun", gender:"m",
     note:"Masculine compound noun. A person who does not smoke.\nFeminine: une non-fumeuse.",
     example:"A: La zone non-fumeur est à l'intérieur.\nB: Parfait, je ne supporte pas la fumée.",
     exampleSrc:"A: The non-smoking area is inside.\nB: Perfect, I can't stand smoke.",
     funFact:"France banned smoking in cafés in 2007. Before that, non-smoking sections were almost nonexistent."},

    {type:"teach", trg:"nous-mêmes", src:"ourselves", pos:"pron", gender:null,
     note:"Emphatic pronoun. Stresses that 'we' did it ourselves.\nHyphenated, always plural.",
     example:"A: Nous l'avons fait nous-mêmes.\nB: Bravo, c'est un beau travail.",
     exampleSrc:"A: We did it ourselves.\nB: Well done, it's great work.",
     funFact:"French emphatic pronouns are formed with '-même(s)'. Moi-même, toi-même, lui-même, etc."},

    {type:"mc",
     q:"Quel système politique donne le plus de pouvoir aux régions plutôt qu'au gouvernement central ?",
     opts:["le confédéralisme","le modernisme","l'intégrisme","l'olympisme"],
     ans:"le confédéralisme",
     hint:"Think of Switzerland. The states keep most of their sovereignty in this system."},

    {type:"teach", trg:"la détonation", src:"the detonation, the blast", pos:"noun", gender:"f",
     note:"Feminine noun. A loud explosion.\nNot to be confused with 'détonnation' (singing off-key).",
     example:"A: La détonation a été entendue à des kilomètres.\nB: C'était une explosion de gaz.",
     exampleSrc:"A: The detonation was heard for miles.\nB: It was a gas explosion.",
     funFact:"One 'n' for explosion, two 'n' for singing off-key. A classic French spelling trap."},

    {type:"teach", trg:"l'exhibitionnisme", src:"exhibitionism", pos:"noun", gender:"m",
     note:"Masculine noun. The compulsion to display oneself publicly.\nLegal and psychological term.",
     example:"A: L'exhibitionnisme est un délit en France.\nB: C'est puni par la loi.",
     exampleSrc:"A: Exhibitionism is a criminal offense in France.\nB: It's punishable by law.",
     funFact:"In French psychology, it also means an excessive need for attention, not just the legal sense."},

    {type:"teach", trg:"la main-d'oeuvre", src:"the workforce, labor", pos:"noun", gender:"f",
     note:"Feminine compound noun. Workers collectively, or the cost of labor.\nInvariable.",
     example:"A: La main-d'oeuvre qualifiée manque.\nB: Il faut investir dans la formation.",
     exampleSrc:"A: Skilled labor is lacking.\nB: We need to invest in training.",
     funFact:"Literally 'hand of work'. French economic reports use this term constantly for labor discussions."},

    {type:"fb",
     s:"La {1} qualifiée manque dans ce secteur.",
     a:["main-d'oeuvre"],
     opts:["main-d'oeuvre","détonation","division","norme"],
     hint:"The workforce or collective labor force. Literally 'hand of work'.",
     sSrc:"Skilled {1} is lacking in this sector."},

    {type:"teach", trg:"l'incrustation", src:"the inlay, the overlay", pos:"noun", gender:"f",
     note:"Feminine noun. Embedding something into a surface.\nAlso a TV technique.",
     example:"A: L'incrustation vidéo est très utilisée au cinéma.\nB: Ça permet de créer des mondes.",
     exampleSrc:"A: Video overlay is widely used in cinema.\nB: It allows creating worlds.",
     funFact:"French TV uses 'incrustation' for green screen effects. Literally 'encrusting' an image onto another."},

    {type:"teach", trg:"le flamand", src:"Flemish (language/person)", pos:"noun", gender:"m",
     note:"Masculine noun. The Flemish language or a Flemish person.\nAlso adjective.",
     example:"A: Le flamand est parlé en Belgique du Nord.\nB: C'est proche du néerlandais.",
     exampleSrc:"A: Flemish is spoken in Northern Belgium.\nB: It's close to Dutch.",
     funFact:"The Flemish-Walloon linguistic divide is Belgium's biggest political issue. It nearly split the country."},

    {type:"teach", trg:"le gaélique", src:"Gaelic", pos:"noun", gender:"m",
     note:"Masculine noun. The Celtic language family of Ireland and Scotland.",
     example:"A: Le gaélique est encore parlé en Irlande.\nB: C'est une langue ancienne et belle.",
     exampleSrc:"A: Gaelic is still spoken in Ireland.\nB: It's an ancient and beautiful language.",
     funFact:"Brittany's Breton language is Celtic like Gaelic. France has its own Celtic heritage."},

    {type:"mc",
     q:"Quel mot désigne l'ensemble des travailleurs dans un secteur ?",
     opts:["la guise","la main-d'oeuvre","la détonation","la norme"],
     ans:"la main-d'oeuvre",
     hint:"Literally 'hand of work'. The collective workforce or the cost of hiring labor."},

    {type:"teach", trg:"la béarnaise", src:"béarnaise (sauce/person)", pos:"noun", gender:"f",
     note:"Feminine noun. A rich sauce with egg and tarragon.\nAlso a woman from Béarn.",
     example:"A: La béarnaise accompagne parfaitement le steak.\nB: C'est ma sauce préférée.",
     exampleSrc:"A: Béarnaise goes perfectly with steak.\nB: It's my favorite sauce.",
     funFact:"Named after Béarn in southwest France. Henry IV, the beloved king, was a Béarnais."},

    {type:"teach", trg:"le cannelloni", src:"cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Large tubular pasta stuffed with filling.\nItalian loanword.",
     example:"A: Les cannellonis à la ricotta sont délicieux.\nB: Tu as suivi la recette de ta mère ?",
     exampleSrc:"A: The ricotta cannelloni are delicious.\nB: Did you follow your mother's recipe?",
     funFact:"French cuisine freely borrows Italian pasta names. 'Cannelloni' is as French as it is Italian now."},

    {type:"teach", trg:"la crème", src:"cream", pos:"noun", gender:"f",
     note:"Feminine noun. Dairy cream, or figuratively the best of something.\n'La crème de la crème'.",
     example:"A: Ajoutez une cuillère de crème fraîche.\nB: Ça donne plus de douceur au plat.",
     exampleSrc:"A: Add a spoonful of fresh cream.\nB: It gives more smoothness to the dish.",
     funFact:"'La crème de la crème' (the cream of the cream) is used in English too, meaning the very best."},

    {type:"fb",
     s:"La {1} a été entendue à des kilomètres du site.",
     a:["détonation"],
     opts:["détonation","incrustation","béarnaise","crème"],
     hint:"A loud explosion. Be careful: one 'n', not two. Two 'n' means singing off-key.",
     sSrc:"The {1} was heard for miles from the site."},

    {type:"match", pairs:[
      {trg:"main-d'oeuvre", src:"workforce, labor"},
      {trg:"flamand", src:"Flemish"},
      {trg:"béarnaise", src:"béarnaise sauce"},
      {trg:"cannelloni", src:"cannelloni"},
      {trg:"confédéralisme", src:"confederalism"}
    ]},

    {type:"mc",
     q:"Quelle sauce française accompagne traditionnellement le steak ?",
     opts:["la mâchoire","la martingale","la béarnaise","la crème"],
     ans:"la béarnaise",
     hint:"Named after a region in southwest France. Made with egg yolks and tarragon."},

    {type:"fb",
     s:"Nous l'avons construit {1}, sans l'aide de personne.",
     a:["nous-mêmes"],
     opts:["nous-mêmes","eux-mêmes","vous-mêmes","moi-même"],
     hint:"The emphatic pronoun for 'we'. Stresses that the group did it without help.",
     sSrc:"We built it {1}, without anyone's help."}
  ]
};
export default LESSON_11;
