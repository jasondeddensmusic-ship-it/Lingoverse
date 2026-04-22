const LESSON_19 = {
  id:"frv2_b2g2_l19", title:"Sciences sociales", icon:"\u{1F4CA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sciences sociales",
     desc:"Master vocabulary for discussing sociology, demographics, and social issues. From anarchism to urbanization, from migration to inequality.",
     goals:["Learn 20 social sciences terms","Discuss societal issues in French","Understand demographic vocabulary"]},

    {type:"teach", trg:"anarchique", src:"anarchic, chaotic", pos:"adj", gender:null,
     note:"Adjective. Lacking order or control. Same form for both genders.",
     example:"A: Le developpement urbain a ete completement anarchique.\nB: Il n'y avait aucun plan d'urbanisme.",
     exampleSrc:"A: Urban development was completely anarchic.\nB: There was no urban planning.",
     funFact:"Proudhon, a Frenchman, is considered the father of anarchism. He coined 'la propriete, c'est le vol'."},

    {type:"teach", trg:"la deshumanisation", src:"the dehumanization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of stripping someone of human qualities.",
     example:"A: La deshumanisation de l'adversaire est le premier pas vers la violence.\nB: Il faut toujours voir l'humain.",
     exampleSrc:"A: The dehumanization of the opponent is the first step toward violence.\nB: We must always see the human.",
     funFact:"Hannah Arendt's work on dehumanization deeply influenced French political thought after WWII."},

    {type:"teach", trg:"la descolarisation", src:"the school dropout rate", pos:"noun", gender:"f",
     note:"Feminine noun. Children leaving school or not attending.",
     example:"A: La descolarisation touche les zones les plus pauvres.\nB: Des mesures urgentes sont necessaires.",
     exampleSrc:"A: School dropout affects the poorest areas.\nB: Urgent measures are needed.",
     funFact:"France has compulsory education until age 16 (since 2019, until 18). Descolarisation triggers state intervention."},

    {type:"teach", trg:"l'exode", src:"the exodus, the mass departure", pos:"noun", gender:"m",
     note:"Masculine noun. A mass departure of people from a region.",
     example:"A: L'exode rural a vide les campagnes francaises.\nB: Les jeunes partent vers les grandes villes.",
     exampleSrc:"A: The rural exodus emptied the French countryside.\nB: Young people leave for big cities.",
     funFact:"France's 1940 'Exode' (mass flight from German invasion) is a defining national memory."},

    {type:"teach", trg:"l'integration", src:"the integration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming part of a society.",
     example:"A: L'integration des nouveaux arrivants est un defi.\nB: L'apprentissage de la langue est essentiel.",
     exampleSrc:"A: The integration of newcomers is a challenge.\nB: Language learning is essential.",
     funFact:"France's integration model differs from multiculturalism. 'Republicanisme' expects cultural assimilation."},

    {type:"mc",
     q:"Comment appelle-t-on le depart massif des habitants des campagnes vers les villes ?",
     opts:["l'exode rural","la descolarisation","la deshumanisation","l'integration"],
     ans:"l'exode rural",
     hint:"A mass departure from the countryside. Think of biblical Exodus but for villages."},

    {type:"teach", trg:"la segregation", src:"the segregation", pos:"noun", gender:"f",
     note:"Feminine noun. The separation of groups based on race, class, or other factors.",
     example:"A: La segregation spatiale dans les villes est preoccupante.\nB: Certains quartiers sont completement isoles.",
     exampleSrc:"A: Spatial segregation in cities is concerning.\nB: Some neighborhoods are completely isolated.",
     funFact:"France officially rejects racial categories but faces 'segregation urbaine'. The banlieues debate is central."},

    {type:"teach", trg:"l'egalite", src:"the equality", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being equal in rights and opportunities.",
     example:"A: L'egalite est un pilier de la Republique.\nB: Liberte, egalite, fraternite.",
     exampleSrc:"A: Equality is a pillar of the Republic.\nB: Liberty, equality, fraternity.",
     funFact:"France's motto since the Revolution. 'Egalite' means equal before the law, not identical outcomes."},

    {type:"teach", trg:"la laicite", src:"the secularism", pos:"noun", gender:"f",
     note:"Feminine noun. The separation of religion from state affairs.",
     example:"A: La laicite est un principe fondamental en France.\nB: L'Etat ne favorise aucune religion.",
     exampleSrc:"A: Secularism is a fundamental principle in France.\nB: The state favors no religion.",
     funFact:"The 1905 law of separation of church and state defines French laicite. A cornerstone of the Republic."},

    {type:"teach", trg:"la gentrification", src:"the gentrification", pos:"noun", gender:"f",
     note:"Feminine noun. The transformation of a poor neighborhood by wealthier residents.",
     example:"A: La gentrification de ce quartier a fait monter les loyers.\nB: Les anciens habitants ne peuvent plus rester.",
     exampleSrc:"A: The gentrification of this neighborhood raised rents.\nB: Former residents can no longer stay.",
     funFact:"Paris neighborhoods like Belleville and Oberkampf are textbook gentrification cases. A heated debate."},

    {type:"fb",
     s:"La {1} est inscrite dans la devise de la Republique francaise.",
     a:["laicite"],
     opts:["laicite","egalite","segregation","integration"],
     hint:"The principle of separating religion from the state. A 1905 law in France.",
     sSrc:"{1} is enshrined in the French Republic's principles."},

    {type:"teach", trg:"le banlieue", src:"the suburb, the outskirts", pos:"noun", gender:"f",
     note:"Feminine noun. A suburban area, often with negative connotations in French.",
     example:"A: Les banlieues francaises font face a de nombreux defis.\nB: Le chomage et l'exclusion restent eleves.",
     exampleSrc:"A: French suburbs face many challenges.\nB: Unemployment and exclusion remain high.",
     funFact:"In France, 'banlieue' often implies disadvantaged areas, unlike the positive American 'suburb'."},

    {type:"teach", trg:"la solidarite", src:"the solidarity", pos:"noun", gender:"f",
     note:"Feminine noun. Unity and mutual support within a group.",
     example:"A: La solidarite entre voisins s'est renforcee pendant la crise.\nB: Tout le monde s'entraidait.",
     exampleSrc:"A: Solidarity between neighbors strengthened during the crisis.\nB: Everyone helped each other.",
     funFact:"'Solidarite' is a core French value. The social security system is built on this principle."},

    {type:"teach", trg:"le paritarisme", src:"the parity system", pos:"noun", gender:"m",
     note:"Masculine noun. Equal representation of different groups in decision-making.",
     example:"A: Le paritarisme homme-femme est devenu obligatoire dans les conseils d'administration.\nB: C'est une avancee importante.",
     exampleSrc:"A: Gender parity has become mandatory on boards of directors.\nB: It's an important step forward.",
     funFact:"France mandates 40% women on corporate boards since 2011. 'Parite' is a national political goal."},

    {type:"mc",
     q:"Comment appelle-t-on la transformation d'un quartier pauvre par l'arrivee de residents aises ?",
     opts:["l'exode","la gentrification","la segregation","l'integration"],
     ans:"la gentrification",
     hint:"When wealthier people move into a poorer area, raising rents and changing its character."},

    {type:"teach", trg:"l'urbanisation", src:"the urbanization", pos:"noun", gender:"f",
     note:"Feminine noun. The growth of cities and movement of people to urban areas.",
     example:"A: L'urbanisation mondiale s'accelere.\nB: Plus de la moitie de l'humanite vit en ville.",
     exampleSrc:"A: Global urbanization is accelerating.\nB: More than half of humanity lives in cities.",
     funFact:"France went from 50% urban in 1930 to 80% today. Paris and its region hold 20% of the population."},

    {type:"teach", trg:"la precarite", src:"the precariousness", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being insecure or unstable.",
     example:"A: La precarite alimentaire touche des millions de Francais.\nB: Les Restos du Coeur font un travail enorme.",
     exampleSrc:"A: Food insecurity affects millions of French people.\nB: The Restos du Coeur do enormous work.",
     funFact:"Les Restos du Coeur were founded by comedian Coluche in 1985. They serve millions of meals yearly."},

    {type:"teach", trg:"la mobilite", src:"the mobility", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to move or change position in society.",
     example:"A: La mobilite sociale est en panne en France.\nB: Le milieu d'origine determine encore trop le destin.",
     exampleSrc:"A: Social mobility is stalled in France.\nB: Family background still determines destiny too much.",
     funFact:"'Mobilite douce' means eco-friendly transport (cycling, walking). A major urban planning term."},

    {type:"teach", trg:"l'exclusion", src:"the exclusion", pos:"noun", gender:"f",
     note:"Feminine noun. Being shut out from society or opportunities.",
     example:"A: L'exclusion sociale est un cercle vicieux.\nB: Sans adresse, pas d'emploi. Sans emploi, pas d'adresse.",
     exampleSrc:"A: Social exclusion is a vicious circle.\nB: Without an address, no job. Without a job, no address.",
     funFact:"France created the 'RMI' (now RSA) in 1988 to fight exclusion. A minimum income for those with nothing."},

    {type:"fb",
     s:"La {1} de ce quartier a fait doubler les prix de l'immobilier.",
     a:["gentrification"],
     opts:["gentrification","segregation","urbanisation","exclusion"],
     hint:"When a neighborhood transforms as wealthier residents move in and prices rise.",
     sSrc:"The {1} of this neighborhood doubled real estate prices."},

    {type:"match", pairs:[
      {trg:"laicite", src:"secularism"},
      {trg:"solidarite", src:"solidarity"},
      {trg:"banlieue", src:"suburb"},
      {trg:"mobilite", src:"mobility"},
      {trg:"exclusion", src:"exclusion"}
    ]},

    {type:"mc",
     q:"Quelle loi francaise de 1905 definit la laicite ?",
     opts:["le Code civil","la loi Veil","la separation des Eglises et de l'Etat","la Declaration des droits de l'homme"],
     ans:"la separation des Eglises et de l'Etat",
     hint:"The law that separated church and state. A cornerstone of the French Republic."},

    {type:"fb",
     s:"Les Restos du Coeur luttent contre la {1} alimentaire depuis 1985.",
     a:["precarite"],
     opts:["precarite","segregation","mobilite","urbanisation"],
     hint:"The state of being insecure, especially regarding food access.",
     sSrc:"Les Restos du Coeur have been fighting food {1} since 1985."}
  ]
};
export default LESSON_19;
