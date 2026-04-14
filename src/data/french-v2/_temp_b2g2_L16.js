const LESSON_16 = {
  id:"frv2_b2g2_l16", title:"Travail et emploi", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Travail et emploi",
     desc:"Master vocabulary for discussing workplace dynamics, employment, and professional life. From absences to strikes, from cadets to interns.",
     goals:["Learn 20 work and employment terms","Discuss professional topics in French","Understand workplace vocabulary"]},

    {type:"teach", trg:"s'absenter", src:"to be absent, to step out", pos:"verb", gender:null,
     note:"Reflexive verb. To leave temporarily or be away from a place.",
     example:"A: Je dois m'absenter pour un rendez-vous medical.\nB: Pas de probleme, a quelle heure reviens-tu ?",
     exampleSrc:"A: I need to step out for a medical appointment.\nB: No problem, what time will you be back?",
     funFact:"In French workplaces, 'absence non justifiee' (unexcused absence) can lead to disciplinary action."},

    {type:"teach", trg:"chomer", src:"to be unemployed, to have a day off", pos:"verb", gender:null,
     note:"Verb. To not work, either from unemployment or a holiday.",
     example:"A: Lundi est ferie, on chomera.\nB: Super, un long week-end !",
     exampleSrc:"A: Monday is a holiday, we'll have the day off.\nB: Great, a long weekend!",
     funFact:"'Chomage' (unemployment) comes from this verb. 'Jour chome' means a day off. Greek root 'kauma' (heat)."},

    {type:"teach", trg:"l'effectif", src:"the workforce, the headcount", pos:"noun", gender:"m",
     note:"Masculine noun. The total number of employees. Also adjective meaning 'effective'.",
     example:"A: L'effectif de l'entreprise est de trois cents personnes.\nB: Ils recrutent encore.",
     exampleSrc:"A: The company's workforce is three hundred people.\nB: They're still hiring.",
     funFact:"'Reduire les effectifs' is a euphemism for layoffs. French companies must consult unions first."},

    {type:"teach", trg:"le bibliothecaire", src:"the librarian", pos:"noun", gender:"m",
     note:"Masculine noun. A person who works in a library. Feminine: une bibliothecaire.",
     example:"A: Le bibliothecaire m'a recommande ce roman.\nB: Il a toujours d'excellents conseils.",
     exampleSrc:"A: The librarian recommended this novel.\nB: He always has excellent advice.",
     funFact:"French librarians often hold a competitive state exam (concours). It is a respected civil service role."},

    {type:"teach", trg:"un accrochage", src:"a clash, a confrontation", pos:"noun", gender:"m",
     note:"Masculine noun. A verbal confrontation or minor dispute.",
     example:"A: Il y a eu un accrochage entre le patron et un employe.\nB: L'ambiance etait tres tendue.",
     exampleSrc:"A: There was a clash between the boss and an employee.\nB: The atmosphere was very tense.",
     funFact:"'Accrochage' can mean a car fender bender or a verbal clash. Context determines which."},

    {type:"mc",
     q:"Quel verbe signifie 'ne pas travailler un jour ferie' ?",
     opts:["chomer","s'absenter","demonter","decomposer"],
     ans:"chomer",
     hint:"Not working because it's a public holiday. The root gives us 'chomage' (unemployment)."},

    {type:"teach", trg:"le debrayage", src:"the walkout, the work stoppage", pos:"noun", gender:"m",
     note:"Masculine noun. A brief work stoppage or protest action.",
     example:"A: Les employes ont organise un debrayage d'une heure.\nB: Ils protestent contre les conditions de travail.",
     exampleSrc:"A: Employees organized a one-hour walkout.\nB: They're protesting working conditions.",
     funFact:"From 'debrayer' (to disengage a clutch). Shorter than a 'greve' (strike). Very common in France."},

    {type:"teach", trg:"le licenciement", src:"the dismissal, the layoff", pos:"noun", gender:"m",
     note:"Masculine noun. Being fired or made redundant from a job.",
     example:"A: Le licenciement de cent employes a choque tout le monde.\nB: Le syndicat prepare une action en justice.",
     exampleSrc:"A: The layoff of a hundred employees shocked everyone.\nB: The union is preparing legal action.",
     funFact:"French labor law heavily regulates 'licenciement'. The process can take months with mandatory consultations."},

    {type:"teach", trg:"la reconversion", src:"the career change, the retraining", pos:"noun", gender:"f",
     note:"Feminine noun. Changing careers or retraining for a new profession.",
     example:"A: Apres la fermeture de l'usine, il a fait une reconversion.\nB: Il est devenu boulanger.",
     exampleSrc:"A: After the factory closed, he changed careers.\nB: He became a baker.",
     funFact:"'Reconversion professionnelle' is a hot topic in France. The government funds retraining programs."},

    {type:"teach", trg:"le precarite", src:"the precariousness, job insecurity", pos:"noun", gender:"f",
     note:"Feminine noun. Instability, especially in employment or living conditions.",
     example:"A: La precarite de l'emploi touche surtout les jeunes.\nB: Les CDD remplacent de plus en plus les CDI.",
     exampleSrc:"A: Job insecurity affects young people the most.\nB: Fixed-term contracts are increasingly replacing permanent ones.",
     funFact:"CDD (fixed-term) vs CDI (permanent contract) is a central issue in French labor. 'Precarite' is a buzzword."},

    {type:"fb",
     s:"Le {1} d'une heure a paralyse la production cet apres-midi.",
     a:["debrayage"],
     opts:["debrayage","licenciement","accrochage","effectif"],
     hint:"A brief work stoppage, shorter than a full strike. Think of disengaging a clutch.",
     sSrc:"The one-hour {1} paralyzed production this afternoon."},

    {type:"teach", trg:"le harcelement", src:"the harassment", pos:"noun", gender:"m",
     note:"Masculine noun. Repeated aggressive behavior or pressure.",
     example:"A: Le harcelement au travail est puni par la loi.\nB: Les victimes doivent porter plainte.",
     exampleSrc:"A: Workplace harassment is punished by law.\nB: Victims must file a complaint.",
     funFact:"France strengthened harassment laws after the MeToo movement. 'Harcelement moral' covers psychological abuse."},

    {type:"teach", trg:"le stagiaire", src:"the intern, the trainee", pos:"noun", gender:"m",
     note:"Masculine noun. A person doing a work placement. Feminine: une stagiaire.",
     example:"A: Le stagiaire apprend tres vite.\nB: On devrait lui proposer un poste.",
     exampleSrc:"A: The intern is learning very quickly.\nB: We should offer him a position.",
     funFact:"French law now requires paying interns for placements over 2 months. 'Stage' is the word for internship."},

    {type:"teach", trg:"la negociation", src:"the negotiation", pos:"noun", gender:"f",
     note:"Feminine noun. A discussion aimed at reaching an agreement.",
     example:"A: Les negociations salariales reprennent lundi.\nB: Les syndicats demandent une augmentation de cinq pour cent.",
     exampleSrc:"A: Salary negotiations resume on Monday.\nB: Unions are asking for a five percent raise.",
     funFact:"France has mandatory annual salary negotiations ('negociations annuelles obligatoires' or NAO)."},

    {type:"mc",
     q:"Quel type de contrat offre le plus de securite en France ?",
     opts:["un CDI","un CDD","un stage","un debrayage"],
     ans:"un CDI",
     hint:"A permanent employment contract. The most sought-after status in French labor law."},

    {type:"teach", trg:"le syndicat", src:"the trade union", pos:"noun", gender:"m",
     note:"Masculine noun. An organization defending workers' rights.",
     example:"A: Le syndicat a appele a la greve generale.\nB: Les transports seront perturbes.",
     exampleSrc:"A: The trade union called for a general strike.\nB: Transport will be disrupted.",
     funFact:"France has low union membership (8%) but unions have huge influence. CGT, CFDT, FO are the big three."},

    {type:"teach", trg:"l'embauche", src:"the hiring, the recruitment", pos:"noun", gender:"f",
     note:"Feminine noun. The act of hiring someone for a job.",
     example:"A: L'embauche de nouveaux employes est prevue en septembre.\nB: On cherche surtout des ingenieurs.",
     exampleSrc:"A: Hiring new employees is planned for September.\nB: We're mainly looking for engineers.",
     funFact:"'A l'embauche' means at the time of hiring. French discrimination law strictly protects job candidates."},

    {type:"teach", trg:"le teletravail", src:"the remote work, the telecommuting", pos:"noun", gender:"m",
     note:"Masculine noun. Working from home or a remote location.",
     example:"A: Le teletravail s'est generalise depuis la pandemie.\nB: Beaucoup d'employes ne veulent plus revenir au bureau.",
     exampleSrc:"A: Remote work became widespread since the pandemic.\nB: Many employees don't want to return to the office.",
     funFact:"France guarantees a 'droit au teletravail' (right to remote work) in certain conditions. A post-COVID revolution."},

    {type:"teach", trg:"la greve", src:"the strike", pos:"noun", gender:"f",
     note:"Feminine noun. A work stoppage to demand better conditions.",
     example:"A: La greve des transports a paralyse Paris.\nB: Des millions de personnes etaient bloquees.",
     exampleSrc:"A: The transport strike paralyzed Paris.\nB: Millions of people were stuck.",
     funFact:"Strikes are a French tradition. The right to strike is constitutional (1946). Named after Place de Greve in Paris."},

    {type:"fb",
     s:"Le {1} a appele tous les employes a cesser le travail vendredi.",
     a:["syndicat"],
     opts:["syndicat","stagiaire","bibliothecaire","effectif"],
     hint:"The organization that represents and defends workers' rights.",
     sSrc:"The {1} called on all employees to stop work on Friday."},

    {type:"match", pairs:[
      {trg:"licenciement", src:"layoff"},
      {trg:"reconversion", src:"career change"},
      {trg:"harcelement", src:"harassment"},
      {trg:"teletravail", src:"remote work"},
      {trg:"greve", src:"strike"}
    ]},

    {type:"mc",
     q:"Quel droit les employes francais ont-ils obtenu en 2017 ?",
     opts:["le droit a la deconnexion","le droit a la greve","le droit au teletravail","le droit au licenciement"],
     ans:"le droit a la deconnexion",
     hint:"Not checking work emails outside office hours. Protecting personal time."},

    {type:"fb",
     s:"L'{1} de cinq nouveaux ingenieurs est prevue pour le mois prochain.",
     a:["embauche"],
     opts:["embauche","greve","precarite","negociation"],
     hint:"The act of hiring new employees. Think of bringing someone into the workforce.",
     sSrc:"The {1} of five new engineers is planned for next month."}
  ]
};
export default LESSON_16;
