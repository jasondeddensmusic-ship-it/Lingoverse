const LESSON_18 = {
  id:"frv2_a1gap_l18", title:"Pays et peuples", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pays et peuples",
     desc:"Nations, nationalities, and languages. Learn to talk about where people come from and what languages they speak.",
     goals:["Learn 20 words about countries and nationalities","Identify languages and origins","Describe cultural backgrounds"]},

    {type:"teach", trg:"l'allemand", src:"the German (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. Both the person and the language. Feminine: 'l'Allemande'.",
     example:"A: Tu parles allemand ?\nB: Un peu, j'ai appris à l'école.",
     exampleSrc:"A: Do you speak German?\nB: A little, I learned at school.",
     funFact:"French and German are the two most spoken languages in the EU. They share a long border and history."},

    {type:"teach", trg:"l'anglais", src:"the English (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. The person or the language. Feminine: 'l'Anglaise'.",
     example:"A: L'anglais est important ?\nB: Oui, c'est la langue internationale.",
     exampleSrc:"A: Is English important?\nB: Yes, it's the international language.",
     funFact:"The French relationship with English is complex. They borrow many words but also resist 'anglicismes'."},

    {type:"teach", trg:"l'arabe", src:"the Arabic (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. The language or a person. Same form for both genders.",
     example:"A: Tu apprends l'arabe ?\nB: Oui, c'est une belle langue.",
     exampleSrc:"A: Are you learning Arabic?\nB: Yes, it's a beautiful language.",
     funFact:"Arabic is the third most spoken language in France due to historical connections with North Africa."},

    {type:"teach", trg:"africain", src:"African", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'africaine'. Related to Africa.",
     example:"A: La cuisine africaine est délicieuse.\nB: Oui, j'adore le thiéboudienne.",
     exampleSrc:"A: African food is delicious.\nB: Yes, I love thiéboudienne.",
     funFact:"France has deep ties to West and North Africa. African cultures strongly influence French music, food, and art."},

    {type:"teach", trg:"américain", src:"American", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'américaine'. Related to America.",
     example:"A: Tu aimes les films américains ?\nB: Oui, surtout les comédies.",
     exampleSrc:"A: Do you like American movies?\nB: Yes, especially comedies.",
     funFact:"The French have a love-hate relationship with American culture. They consume it eagerly while critiquing it."},

    {type:"mc",
     q:"Quelle langue est la troisième la plus parlée en France ?",
     opts:["l'arabe","l'anglais","l'allemand","l'espagnol"],
     ans:"l'arabe",
     hint:"This language is widely spoken due to France's historical connections with North Africa."},

    {type:"teach", trg:"australien", src:"Australian", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'australienne'. Related to Australia.",
     example:"A: Il est australien ?\nB: Oui, il vient de Sydney.",
     exampleSrc:"A: Is he Australian?\nB: Yes, he's from Sydney.",
     funFact:"Young Australians love coming to France for 'working holidays'. The accent in French is quite distinctive."},

    {type:"teach", trg:"autrichien", src:"Austrian", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'autrichienne'. Related to Austria.",
     example:"A: La musique autrichienne est célèbre.\nB: Oui, Mozart et Strauss !",
     exampleSrc:"A: Austrian music is famous.\nB: Yes, Mozart and Strauss!",
     funFact:"Marie-Antoinette was Austrian ('autrichienne'). Her marriage to Louis XVI connected France and Austria."},

    {type:"teach", trg:"argentin", src:"Argentine, Argentinian", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'argentine'. Related to Argentina.",
     example:"A: Le tango est argentin ?\nB: Oui, il vient de Buenos Aires.",
     exampleSrc:"A: Is tango Argentine?\nB: Yes, it comes from Buenos Aires.",
     funFact:"'Argentin' also means 'silvery' (as a sound). The country name comes from Latin 'argentum' (silver)."},

    {type:"teach", trg:"antillais", src:"Caribbean (French West Indies)", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'antillaise'. From the French Caribbean.",
     example:"A: La cuisine antillaise est épicée.\nB: Oui, avec du piment !",
     exampleSrc:"A: Caribbean food is spicy.\nB: Yes, with hot peppers!",
     funFact:"Guadeloupe and Martinique are the main 'Antilles françaises'. They are full departments of France."},

    {type:"fb",
     s:"Tu parles {1} ? C'est la langue internationale.",
     a:["anglais"],
     opts:["anglais","allemand","arabe","argentin"],
     hint:"This language is spoken worldwide and is often learned as a second language in France.",
     sSrc:"Do you speak {1}? It's the international language."},

    {type:"teach", trg:"l'assemblée", src:"the assembly", pos:"noun", gender:"f",
     note:"Feminine noun. A gathering of people or a parliamentary body.",
     example:"A: L'Assemblée nationale vote aujourd'hui.\nB: C'est un vote important.",
     exampleSrc:"A: The National Assembly is voting today.\nB: It's an important vote.",
     funFact:"'L'Assemblée nationale' is the lower house of the French parliament, located in the Palais Bourbon."},

    {type:"teach", trg:"l'autodidacte", src:"the self-taught person", pos:"noun", gender:"m",
     note:"Same form for both genders. Someone who learns without formal schooling.",
     example:"A: Il est autodidacte ?\nB: Oui, il a tout appris seul.",
     exampleSrc:"A: Is he self-taught?\nB: Yes, he learned everything by himself.",
     funFact:"Many famous French figures were autodidacts: Coco Chanel had no formal fashion training."},

    {type:"teach", trg:"l'aspect", src:"the aspect, the appearance", pos:"noun", gender:"m",
     note:"Masculine noun. How something looks or a particular angle of a topic.",
     example:"A: L'aspect du bâtiment est moderne.\nB: Oui, avec beaucoup de verre.",
     exampleSrc:"A: The building's appearance is modern.\nB: Yes, with a lot of glass.",
     funFact:"In grammar, 'l'aspect' describes whether an action is completed or ongoing. A technical term too."},

    {type:"teach", trg:"l'atlantique", src:"the Atlantic", pos:"adj", gender:null,
     note:"Same form for both genders. Related to the Atlantic Ocean.",
     example:"A: La côte atlantique est belle ?\nB: Oui, les plages sont immenses.",
     exampleSrc:"A: Is the Atlantic coast beautiful?\nB: Yes, the beaches are huge.",
     funFact:"France's Atlantic coast stretches from Brittany to the Basque Country. Biarritz is a famous surfing spot."},

    {type:"mc",
     q:"Comment s'appelle le parlement français ?",
     opts:["l'Assemblée nationale","l'Académie française","l'Administration","l'Association"],
     ans:"l'Assemblée nationale",
     hint:"This institution is the lower house of the French parliament, where laws are debated and voted."},

    {type:"teach", trg:"l'anthropologie", src:"the anthropology", pos:"noun", gender:"f",
     note:"Feminine noun. The study of human societies and cultures.",
     example:"A: Tu étudies l'anthropologie ?\nB: Oui, c'est fascinant.",
     exampleSrc:"A: Are you studying anthropology?\nB: Yes, it's fascinating.",
     funFact:"Claude Lévi-Strauss, one of the most influential anthropologists ever, was French."},

    {type:"teach", trg:"l'agitation", src:"the agitation, the unrest", pos:"noun", gender:"f",
     note:"Feminine noun. Political unrest or personal restlessness.",
     example:"A: Il y a de l'agitation dans la ville.\nB: Oui, les gens manifestent.",
     exampleSrc:"A: There's unrest in the city.\nB: Yes, people are protesting.",
     funFact:"France has a long tradition of social 'agitation'. Protests and strikes are a regular part of French life."},

    {type:"teach", trg:"l'avance", src:"the advance, the lead", pos:"noun", gender:"f",
     note:"Feminine noun. Being ahead in time or position.",
     example:"A: Tu es en avance !\nB: Oui, j'ai pris le bus plus tôt.",
     exampleSrc:"A: You're early!\nB: Yes, I took an earlier bus.",
     funFact:"'En avance' = early. 'À l'avance' = in advance. 'D'avance' = beforehand. Three key expressions with one word."},

    {type:"teach", trg:"l'attractif", src:"attractive, appealing", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'attractive'. Describes appealing things.",
     example:"A: Les prix sont attractifs ici.\nB: Oui, c'est pas cher du tout.",
     exampleSrc:"A: The prices are attractive here.\nB: Yes, it's not expensive at all.",
     funFact:"'Attractif' is mainly used for prices, offers, or destinations. For people, use 'séduisant' or 'beau'."},

    {type:"fb",
     s:"Tu es en {1} ! La réunion commence dans vingt minutes.",
     a:["avance"],
     opts:["avance","agitation","assemblée","aspect"],
     hint:"This feminine noun means being ahead of the scheduled time, the opposite of being late.",
     sSrc:"You are {1}! The meeting starts in twenty minutes."},

    {type:"match", pairs:[
      {trg:"allemand", src:"German"},
      {trg:"anglais", src:"English"},
      {trg:"arabe", src:"Arabic"},
      {trg:"américain", src:"American"},
      {trg:"avance", src:"advance/early"}
    ]},

    {type:"mc",
     q:"Quel mot décrit une personne qui apprend seule, sans professeur ?",
     opts:["autodidacte","anthropologue","architecte","artiste"],
     ans:"autodidacte",
     hint:"This noun describes someone who acquires knowledge and skills without formal education."},

    {type:"fb",
     s:"La cuisine {1} est épicée, avec du piment et des épices.",
     a:["antillaise"],
     opts:["antillaise","américaine","autrichienne","africaine"],
     hint:"This adjective relates to the French Caribbean islands like Guadeloupe and Martinique.",
     sSrc:"{1} cuisine is spicy, with hot peppers and spices."}
  ]
};
export default LESSON_18;
