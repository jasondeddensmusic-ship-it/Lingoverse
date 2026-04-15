// French B2 Gap Batch D Lesson 16 — Work and Careers
const LESSON_16 = {id:"frv2_b2gD_l16", title:"Travail et carrières", icon:"👔", xp:15, board:true, steps:[
  {type:"intro", title:"Travail et carrières",
   desc:"Build vocabulary for discussing careers, workplace dynamics, and professional development.",
   goals:["Learn 10 work and career terms","Discuss professional challenges","Use workplace register vocabulary"]},

  {type:"teach", trg:"le décorateur", src:"the decorator / interior designer", pos:"noun", gender:"m",
   note:"A professional who designs interior spaces.\nFeminine: décoratrice. Also: stage designer.",
   example:"A: Le décorateur d'intérieur a proposé trois projets.\nB: Lequel préfères-tu?\nA: Celui avec les tons naturels.\nB: Moi aussi, c'est le plus chaleureux.",
   exampleSrc:"A: The interior designer proposed three projects.\nB: Which one do you prefer?\nA: The one with natural tones.\nB: Me too, it's the warmest.",
   funFact:"In France, 'décorateur d'intérieur' and 'architecte d'intérieur' are different professions with different qualifications."},

  {type:"teach", trg:"le mutualiste", src:"the mutualist / cooperative member", pos:"noun", gender:"m",
   note:"A member of a mutual insurance or cooperative society.\nThe 'mutualité' is a pillar of French social protection.",
   example:"A: En tant que mutualiste, vous bénéficiez de tarifs préférentiels.\nB: Pour les soins dentaires aussi?\nA: Oui, avec un plafond de remboursement plus élevé.\nB: C'est un avantage considérable.",
   exampleSrc:"A: As a mutual member, you benefit from preferential rates.\nB: For dental care too?\nA: Yes, with a higher reimbursement ceiling.\nB: That's a considerable advantage.",
   funFact:"French 'mutuelles' are non-profit health insurance cooperatives. Most French workers have one alongside the state system (Sécu)."},

  {type:"teach", trg:"le non-fumeur", src:"the non-smoker", pos:"noun", gender:"m",
   note:"A person who does not smoke. Also adjective: 'zone non-fumeur'.\nHyphenated compound.",
   example:"A: Ce restaurant est entièrement non-fumeur.\nB: Depuis quand?\nA: Depuis la loi de 2007.\nB: La France a beaucoup changé sur ce point.",
   exampleSrc:"A: This restaurant is entirely non-smoking.\nB: Since when?\nA: Since the 2007 law.\nB: France has changed a lot on this point.",
   funFact:"France banned smoking in public places in 2007. Before that, the 'section fumeur' in restaurants was a thin curtain at best."},

  {type:"teach", trg:"la micro-entreprise", src:"the micro-enterprise", pos:"noun", gender:"f",
   note:"A very small business with simplified tax status.\nPopular freelance structure in France.",
   example:"A: J'ai créé ma micro-entreprise l'année dernière.\nB: C'est pour ton activité de graphiste?\nA: Oui, c'est simple administrativement.\nB: Les charges sont raisonnables au début.",
   exampleSrc:"A: I created my micro-enterprise last year.\nB: Is it for your graphic design work?\nA: Yes, it's administratively simple.\nB: The charges are reasonable at the start.",
   funFact:"France's 'auto-entrepreneur' status (now micro-entreprise) launched in 2009. Over 2 million French people use this simplified business structure."},

  {type:"mc",
   q:"Qu'est-ce qu'une micro-entreprise en France?",
   opts:["Une très petite entreprise avec un statut fiscal simplifié","Une filiale d'une grande entreprise","Un magasin de micro-informatique","Une entreprise qui fabrique des micropuces"],
   ans:"Une très petite entreprise avec un statut fiscal simplifié",
   hint:"This business structure is popular with freelancers because of its simplified administrative requirements."},

  {type:"teach", trg:"le best-seller", src:"the best-seller", pos:"noun", gender:"m",
   note:"A book or product that sells in very large numbers.\nAnglicism widely used in French. Invariable plural.",
   example:"A: Son dernier roman est un best-seller.\nB: Combien d'exemplaires vendus?\nA: Plus de trois cent mille en six mois.\nB: C'est un succès phénoménal.",
   exampleSrc:"A: Her latest novel is a best-seller.\nB: How many copies sold?\nA: More than three hundred thousand in six months.\nB: It's a phenomenal success.",
   funFact:"The Academie Francaise recommends 'succès de librairie' instead, but 'best-seller' won the popular vote. French borrows many English commercial terms."},

  {type:"teach", trg:"le business", src:"the business", pos:"noun", gender:"m",
   note:"Commerce, trade, business activities. Anglicism.\n'Faire du business' = to do business. Informal.",
   example:"A: Le business tourne bien en ce moment.\nB: Grace à la nouvelle stratégie?\nA: Oui, le marketing digital fait la différence.\nB: Il faut continuer sur cette lancée.",
   exampleSrc:"A: Business is going well right now.\nB: Thanks to the new strategy?\nA: Yes, digital marketing makes the difference.\nB: We need to keep up this momentum.",
   funFact:"Despite the Academie's resistance, 'business' is universally used in French. The pronunciation is Frenchified: 'biz-ness' not 'biz-nis'."},

  {type:"teach", trg:"prêter attention", src:"to pay attention", pos:"verb", gender:null,
   note:"To give one's attention to something carefully.\nMore formal than 'faire attention'.",
   example:"A: Prêtez attention aux détails du contrat.\nB: Il y a des clauses problématiques?\nA: Certaines sont ambiguës.\nB: On va les faire vérifier par notre avocat.",
   exampleSrc:"A: Pay attention to the details of the contract.\nB: Are there problematic clauses?\nA: Some are ambiguous.\nB: We'll have them checked by our lawyer.",
   funFact:"'Prêter' means 'to lend'. You literally 'lend your attention' to something. More formal and careful than 'faire attention'."},

  {type:"fb",
   s:"Son dernier roman est devenu un {1} mondial en quelques semaines.",
   a:["best-seller"],
   opts:["best-seller","business","mutualiste","décorateur"],
   hint:"This English borrowing describes a book that sells enormous quantities. Widely used in French.",
   sSrc:"Her latest novel became a worldwide {1} in just a few weeks."},

  {type:"teach", trg:"le flyer", src:"the flyer / leaflet", pos:"noun", gender:"m",
   note:"A printed handout for advertising or information.\nAnglicism. Plural: 'des flyers'. Alternative: 'prospectus'.",
   example:"A: On a distribué cinq mille flyers pour l'événement.\nB: Les gens les ont lus?\nA: Certains, mais la plupart finissent à la poubelle.\nB: Le numérique est plus efficace.",
   exampleSrc:"A: We distributed five thousand flyers for the event.\nB: Did people read them?\nA: Some did, but most end up in the trash.\nB: Digital is more effective.",
   funFact:"French uses both 'flyer' (from English) and 'tract' (from Latin). A 'tract' is more political, a 'flyer' more commercial."},

  {type:"teach", trg:"l'ex", src:"the ex (former partner)", pos:"noun", gender:"m",
   note:"A former romantic partner. Informal but universal.\nSame form for masculine and feminine.",
   example:"A: Mon ex m'a envoyé un message.\nB: Qu'est-ce qu'il voulait?\nA: Récupérer des affaires.\nB: C'est toujours un peu gênant.",
   exampleSrc:"A: My ex sent me a message.\nB: What did he want?\nA: To pick up some belongings.\nB: It's always a bit awkward.",
   funFact:"Short for 'ex-petit ami/e' or 'ex-conjoint/e'. Used as both noun and prefix: 'mon ex-mari' (my ex-husband), 'mon ex' (my ex)."},

  {type:"mc",
   q:"Quelle expression signifie 'donner son attention avec soin'?",
   opts:["Prêter attention","Faire du business","Créer une micro-entreprise","Distribuer des flyers"],
   ans:"Prêter attention",
   hint:"This expression literally means to 'lend' your attention to something, implying careful focus."},

  {type:"match", pairs:[
    {trg:"mutualiste", src:"cooperative member"},
    {trg:"micro-entreprise", src:"micro-enterprise"},
    {trg:"non-fumeur", src:"non-smoker"},
    {trg:"best-seller", src:"best-seller"},
    {trg:"flyer", src:"leaflet"}
  ]},

  {type:"fb",
   s:"En tant que {1}, vous avez droit à un remboursement complémentaire.",
   a:["mutualiste"],
   opts:["mutualiste","non-fumeur","décorateur","profiteur"],
   hint:"This person is a member of a mutual insurance cooperative, common in the French health system.",
   sSrc:"As a {1}, you are entitled to supplementary reimbursement."}
]};
export default LESSON_16;
