// French B2 Gap Lesson 6. Work and Entrepreneurship
const LESSON_6 = {id:"frv2_b2g5_l6", title:"Travail et entrepreneuriat", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"Travail et entrepreneuriat",
   desc:"Learn vocabulary for discussing professional life, business creation, and workplace dynamics at the B2 level.",
   goals:["Learn 15 key words about work and business","Discuss entrepreneurship and workplace issues","Use professional register vocabulary"]},

  {type:"teach", trg:"l'entrepreneuriat", src:"entrepreneurship", pos:"noun", gender:"m",
   note:"The activity of creating and running businesses.\nA growing sector in France.",
   example:"A: L'entrepreneuriat attire de plus en plus de jeunes.\nB: Oui, ils veulent être leur propre patron.\nA: C'est risqué pourtant.\nB: Le risque fait partie de l'aventure.",
   exampleSrc:"A: Entrepreneurship attracts more and more young people.\nB: Yes, they want to be their own boss.\nA: It's risky though.\nB: Risk is part of the adventure.",
   funFact:"From 'entrepreneur' which itself comes from 'entreprendre' (to undertake). France has a booming startup scene."},

  {type:"teach", trg:"l'administrateur", src:"the administrator", pos:"noun", gender:"m",
   note:"A person who manages or directs an organization.\nFeminine: administratrice.",
   example:"A: L'administrateur de l'entreprise a démissionné.\nB: Pourquoi? Il y a des problèmes?\nA: Des désaccords sur la stratégie.\nB: Le conseil va nommer un remplaçant.",
   exampleSrc:"A: The company administrator resigned.\nB: Why? Are there problems?\nA: Disagreements about the strategy.\nB: The board will appoint a replacement.",
   funFact:"From Latin 'administrator'. The feminine 'administratrice' follows the -teur/-trice pattern."},

  {type:"teach", trg:"le commercial", src:"the sales representative", pos:"noun", gender:"m",
   note:"A person who works in sales.\nAlso used as an adjective: 'un centre commercial' (shopping center).",
   example:"A: Notre commercial a signé un gros contrat.\nB: Excellent! Avec quel client?\nA: Une entreprise internationale.\nB: C'est une belle réussite pour l'équipe.",
   exampleSrc:"A: Our sales rep signed a big contract.\nB: Excellent! With which client?\nA: An international company.\nB: It's a great achievement for the team.",
   funFact:"As a noun, means salesperson. As adjective, means commercial/business-related. Context determines meaning."},

  {type:"teach", trg:"le décorateur", src:"the decorator / designer", pos:"noun", gender:"m",
   note:"A professional who designs interiors.\nFeminine: décoratrice.",
   example:"A: Nous avons engagé un décorateur pour le bureau.\nB: Il a proposé quel style?\nA: Moderne et minimaliste.\nB: Parfait pour une ambiance de travail créative.",
   exampleSrc:"A: We hired a decorator for the office.\nB: What style did he propose?\nA: Modern and minimalist.\nB: Perfect for a creative work environment.",
   funFact:"From 'décorer' (to decorate) + '-ateur'. Interior design is a respected profession in France."},

  {type:"teach", trg:"le confrère", src:"the colleague / fellow professional", pos:"noun", gender:"m",
   note:"A peer in the same profession. More formal than 'collègue'.\nFeminine: consoeur.",
   example:"A: Mon confrère à Lyon travaille sur le même projet.\nB: Vous collaborez?\nA: Oui, on partage nos résultats régulièrement.\nB: La coopération entre confrères est précieuse.",
   exampleSrc:"A: My colleague in Lyon is working on the same project.\nB: Are you collaborating?\nA: Yes, we share our results regularly.\nB: Cooperation between peers is valuable.",
   funFact:"From Latin 'confrater' (brother together). Originally used in religious orders for fellow monks."},

  {type:"teach", trg:"le contradicteur", src:"the opponent / challenger", pos:"noun", gender:"m",
   note:"Someone who argues against a position.\nFeminine: contradictrice. Valued in French debate culture.",
   example:"A: Chaque proposition a besoin d'un contradicteur.\nB: Pour tester la solidité des arguments?\nA: Exactement. Le débat renforce les idées.\nB: C'est l'esprit critique à l'oeuvre.",
   exampleSrc:"A: Every proposal needs a challenger.\nB: To test the strength of the arguments?\nA: Exactly. Debate strengthens ideas.\nB: That's critical thinking at work.",
   funFact:"From Latin 'contradictor'. French intellectual culture values the role of the contradicteur highly."},

  {type:"teach", trg:"la garderie", src:"the daycare / nursery", pos:"noun", gender:"f",
   note:"A place where young children are cared for.\nEssential infrastructure for working parents.",
   example:"A: La garderie ouvre à sept heures.\nB: C'est pratique pour les parents qui travaillent tôt.\nA: Les places sont limitées?\nB: Oui, il faut s'inscrire longtemps à l'avance.",
   exampleSrc:"A: The daycare opens at seven o'clock.\nB: That's convenient for parents who work early.\nA: Are spots limited?\nB: Yes, you have to register well in advance.",
   funFact:"From 'garder' (to keep/watch). France has an extensive network of public and private childcare."},

  {type:"teach", trg:"le forçat", src:"the convict / someone doing forced labor", pos:"noun", gender:"m",
   note:"Historically: a prisoner sentenced to hard labor.\nFiguratively: 'un forçat du travail' (a workaholic).",
   example:"A: Il travaille comme un forçat.\nB: Douze heures par jour, six jours par semaine.\nA: Ce n'est pas sain.\nB: Non, il devrait trouver un meilleur équilibre.",
   exampleSrc:"A: He works like a convict.\nB: Twelve hours a day, six days a week.\nA: That's not healthy.\nB: No, he should find a better balance.",
   funFact:"Originally referred to galley slaves. Victor Hugo made the figure famous with Jean Valjean."},

  {type:"teach", trg:"le déclassement", src:"the downgrading / social decline", pos:"noun", gender:"m",
   note:"Loss of social status, especially professional.\nA major concern in modern France.",
   example:"A: Le déclassement social touche la classe moyenne.\nB: Beaucoup de diplômés ne trouvent pas d'emploi qualifié.\nA: C'est frustrant après tant d'années d'études.\nB: Le marché du travail doit évoluer.",
   exampleSrc:"A: Social downgrading affects the middle class.\nB: Many graduates can't find qualified employment.\nA: It's frustrating after so many years of study.\nB: The job market needs to evolve.",
   funFact:"From 'dé-' (down) + 'classement' (ranking). A hot topic in French sociological debate."},

  {type:"mc", q:"Quel mot désigne l'activité de créer et diriger des entreprises?",
   opts:["L'entrepreneuriat","L'administrateur","Le commercial","Le déclassement"],
   ans:"L'entrepreneuriat",
   hint:"The process of starting and running new businesses"},

  {type:"fb", s:"Notre {1} a signé un contrat important avec un client international.",
   a:["commercial"], opts:["commercial","contradicteur","confrère","décorateur"],
   hint:"The person in a company whose job is to sell products or services",
   sSrc:"Our {1} signed an important contract with an international client."},

  {type:"teach", trg:"l'abonné", src:"the subscriber", pos:"noun", gender:"m",
   note:"A person who subscribes to a service.\nFeminine: abonnée. Used for magazines, streaming, etc.",
   example:"A: Combien d'abonnés a cette chaîne?\nB: Deux millions. C'est impressionnant.\nA: Le contenu de qualité attire les abonnés.\nB: Oui, la régularité aussi est importante.",
   exampleSrc:"A: How many subscribers does this channel have?\nB: Two million. That's impressive.\nA: Quality content attracts subscribers.\nB: Yes, consistency is also important.",
   funFact:"From 's'abonner' (to subscribe). An 'abonnement' is a subscription. Both derive from 'borne' (boundary)."},

  {type:"teach", trg:"le bonus", src:"the bonus", pos:"noun", gender:"m",
   note:"An extra payment or advantage beyond what is expected.\nBorrowed directly from English/Latin.",
   example:"A: Les employés recevront un bonus cette année.\nB: C'est mérité, ils ont beaucoup travaillé.\nA: Le bonus dépend des résultats?\nB: Oui, il est lié aux performances de l'équipe.",
   exampleSrc:"A: Employees will receive a bonus this year.\nB: It's deserved, they worked a lot.\nA: Does the bonus depend on results?\nB: Yes, it's linked to the team's performance.",
   funFact:"From Latin 'bonus' (good). Used in French exactly as in English, both in business and gaming."},

  {type:"teach", trg:"l'incapacité", src:"the inability / incapacity", pos:"noun", gender:"f",
   note:"Lack of ability or legal capacity.\nUsed in medical, legal, and everyday contexts.",
   example:"A: Son incapacité à communiquer pose problème.\nB: Il devrait suivre une formation.\nA: Ou travailler avec un coach.\nB: Oui, la communication s'apprend.",
   exampleSrc:"A: His inability to communicate causes problems.\nB: He should take a training course.\nA: Or work with a coach.\nB: Yes, communication can be learned.",
   funFact:"From 'in-' (not) + 'capacité' (capacity). Legal 'incapacité' means inability to exercise rights."},

  {type:"mc", q:"Quel mot désigne un pair dans la même profession?",
   opts:["Un abonné","Un confrère","Un contradicteur","Un forçat"],
   ans:"Un confrère",
   hint:"A fellow professional, more formal than 'collègue'"},

  {type:"fb", s:"La {1} ouvre à sept heures pour les parents qui travaillent tôt.",
   a:["garderie"], opts:["garderie","entreprise","division","formation"],
   hint:"A place where young children are cared for while parents work",
   sSrc:"The {1} opens at seven o'clock for parents who work early."},

  {type:"match", pairs:[
    {trg:"l'entrepreneuriat", src:"entrepreneurship"},
    {trg:"le déclassement", src:"social decline"},
    {trg:"le forçat", src:"convict / hard worker"},
    {trg:"l'abonné", src:"subscriber"},
    {trg:"le bonus", src:"bonus"}
  ]},

  {type:"mc", q:"Que signifie 'travailler comme un forçat'?",
   opts:["Travailler avec plaisir","Travailler en équipe","Travailler énormément","Travailler en prison"],
   ans:"Travailler énormément",
   hint:"The figurative meaning compares excessive work to forced labor"},

  {type:"fb", s:"Le {1} social touche de nombreux diplômés qui ne trouvent pas d'emploi qualifié.",
   a:["déclassement"], opts:["déclassement","entrepreneuriat","contradicteur","commercial"],
   hint:"Loss of social standing, especially when qualifications do not match job level",
   sSrc:"Social {1} affects many graduates who cannot find qualified employment."},

  {type:"drag_fill", s:"L'{1} de l'entreprise a été remplacé après des {2} sur la stratégie.",
   blanks:{"1":"administrateur","2":"désaccords"},
   pool:["administrateur","désaccords","commercial","résultats"],
   hint:"The person managing the organization left due to strategic disagreements"},

  {type:"mc", q:"Quel mot désigne une personne inscrite à un service régulier?",
   opts:["Un commercial","Un décorateur","Un confrère","Un abonné"],
   ans:"Un abonné",
   hint:"Someone who pays for ongoing access to a magazine, streaming service, or channel"}
]};
export default LESSON_6;
