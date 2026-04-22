// B2 Gap Batch A. Lesson 14: Religie & Traditie
// Theme: Religion, tradition, cultural heritage

const LESSON_14 = {id:"nlv2_b2gA_l14", title:"Religie & Traditie", icon:"\u{26EA}", xp:40, board:true, steps:[
  {type:"intro", title:"Religie & Traditie",
   desc:"Learn vocabulary about religion, traditions, and cultural heritage in the Netherlands. Understanding these terms helps you navigate Dutch discussions about identity and society.",
   goals:["Learn religion and tradition vocabulary","Discuss cultural heritage in Dutch","Understand abstract nouns about belief and worship"]},

  {type:"teach", trg:"de heilige", src:"saint, holy person", pos:"noun", gender:"c",
   note:"From 'heilig' (holy). Can be noun (a saint) or adjective (holy).\nCentral to Catholic tradition in the south.",
   example:"A: Sint Nicolaas is de bekendste heilige in Nederland.\nB: Is Sinterklaas echt een heilige?\nA: Ja, gebaseerd op een bisschop uit de vierde eeuw.\nB: De heilige Nicolaas van Myra.",
   exampleSrc:"A: Saint Nicholas is the most well-known saint in the Netherlands.\nB: Is Sinterklaas really a saint?\nA: Yes, based on a bishop from the fourth century.\nB: Saint Nicholas of Myra.",
   funFact:"Sinterklaas (based on de heilige Nicolaas) arrives in the Netherlands by steamboat from Spain every November. The Dutch Sinterklaas tradition is the origin of the American Santa Claus."},

  {type:"teach", trg:"de heiligenverering", src:"veneration of saints", pos:"noun", gender:"c",
   note:"Compound: heiligen (saints) + verering (veneration).\nCatholic practice of honouring saints.",
   example:"A: Heiligenverering is typisch voor het katholieke zuiden van Nederland.\nB: In het protestantse noorden is dat minder gebruikelijk.\nA: Maar sommige heiligen zijn overal bekend.\nB: Zoals Sint Maarten, met zijn lampionnenoptocht.",
   exampleSrc:"A: Veneration of saints is typical for the Catholic south of the Netherlands.\nB: In the Protestant north, that's less common.\nA: But some saints are known everywhere.\nB: Like Saint Martin, with his lantern procession.",
   funFact:"The religious divide between the Catholic south (Brabant, Limburg) and the Protestant north still shapes Dutch culture today. Heiligenverering is one of the clearest markers of this divide."},

  {type:"teach", trg:"het jodendom", src:"Judaism", pos:"noun", gender:"n",
   note:"het-word. From Jood (Jew) + -dom suffix.\nThe religion and culture of the Jewish people.",
   example:"A: Het jodendom heeft een lange geschiedenis in Nederland.\nB: Amsterdam was ooit het 'Jeruzalem van het Westen'.\nA: De Portugese synagoge is een beroemd monument.\nB: Helaas werd de gemeenschap verwoest in de oorlog.",
   exampleSrc:"A: Judaism has a long history in the Netherlands.\nB: Amsterdam was once the 'Jerusalem of the West'.\nA: The Portuguese Synagogue is a famous monument.\nB: Sadly, the community was destroyed during the war.",
   funFact:"Amsterdam's Jewish quarter (Jodenbuurt) was once the largest in Western Europe. Of the 140,000 Dutch Jews before WWII, about 102,000 were murdered in the Holocaust. Anne Frank's diary is the most famous testament."},

  {type:"teach", trg:"het katholicisme", src:"Catholicism", pos:"noun", gender:"n",
   note:"het-word. -isme suffix. The Catholic faith and its practices.",
   example:"A: Het katholicisme is de grootste religie in het zuiden van Nederland.\nB: In Brabant en Limburg zijn veel kerken.\nA: Maar het kerkbezoek neemt af.\nB: Toch blijft de katholieke cultuur zichtbaar in tradities.",
   exampleSrc:"A: Catholicism is the largest religion in the south of the Netherlands.\nB: In Brabant and Limburg there are many churches.\nA: But church attendance is declining.\nB: Yet Catholic culture remains visible in traditions.",
   funFact:"The Dutch provinces of Noord-Brabant and Limburg are traditionally Catholic, while the rest of the country is historically Protestant. This division dates back to the Reformation in the 16th century."},

  {type:"teach", trg:"de idool", src:"idol, icon", pos:"noun", gender:"c",
   note:"From Greek 'eidolon'. A person who is greatly admired.\nAlso used in religious context (false idol).",
   example:"A: Wie is jouw idool?\nB: Johan Cruijff is mijn grootste idool.\nA: Hij is een idool voor miljoenen voetbalfans.\nB: Zijn speelstijl veranderde het voetbal voorgoed.",
   exampleSrc:"A: Who is your idol?\nB: Johan Cruijff is my biggest idol.\nA: He is an idol for millions of football fans.\nB: His playing style changed football forever.",
   funFact:"The Dutch TV show 'Idols' (based on the UK format) was hugely popular in the 2000s. In everyday Dutch, 'idool' is used for any admired figure, from sports heroes to musicians."},

  {type:"teach", trg:"de kenner", src:"connoisseur, expert", pos:"noun", gender:"c",
   note:"From 'kennen' (to know) + -er suffix.\nSomeone with deep knowledge of a specific subject.",
   example:"A: Hij is een echte kenner van Nederlandse kunst.\nB: Dat merk je aan hoe hij over Vermeer praat.\nA: Een kenner ziet details die anderen missen.\nB: Jarenlange studie maakt je tot kenner.",
   exampleSrc:"A: He is a true connoisseur of Dutch art.\nB: You can tell by how he talks about Vermeer.\nA: A connoisseur sees details that others miss.\nB: Years of study make you a connoisseur.",
   funFact:"The Dutch -er suffix for 'someone who does X' is extremely productive: kenner (knower), denker (thinker), schrijver (writer), spreker (speaker). It corresponds to English -er."},

  {type:"tip", title:"Religion Vocabulary Patterns",
   text:"Dutch religious vocabulary uses consistent patterns:\n\n-dom suffix (realm/domain, het-word):\n  jodendom (Judaism), christendom (Christianity)\n\n-isme suffix (belief system, het-word):\n  katholicisme (Catholicism), protestantisme (Protestantism)\n\nheilig- compounds:\n  heilige (saint), heiligenverering (saint veneration)\n\nAll -dom and -isme words are het-words. This is one of the most reliable gender rules in Dutch.",
   deepDive:{title:"Religion in the Netherlands",
    text:"The Dutch religious landscape has transformed dramatically:\n\n- 1960: 80% affiliated with a church\n- 2020: over 50% non-religious\n- Fastest secularization in Western Europe\n\nYet religion remains culturally important:\n- Sinterklaas, Easter, Christmas widely celebrated\n- Catholic carnival in the south\n- Reformed traditions in the Bible Belt\n- Growing Muslim community (5-6%)\n\nUnderstanding this context helps you navigate Dutch discussions about identity and tradition."}},

  {type:"mc", q:"Welk woord betekent 'Judaism'?",
   opts:["het jodendom","het katholicisme","de heiligenverering","de idool"],
   ans:"het jodendom",
   hint:"Jood (Jew) + -dom suffix. The religion and culture of the Jewish people."},

  {type:"fb", s:"Sint Nicolaas is de bekendste {1} in Nederland.",
   a:["heilige"], opts:["heilige","kenner","idool","historicus"],
   hint:"A holy person recognized by the church. From 'heilig' (holy).",
   sSrc:"Saint Nicholas is the most well-known saint in the Netherlands."},

  {type:"mc", q:"Het katholicisme is de grootste religie in het zuiden. Wat is 'katholicisme'?",
   opts:["colonialism","Catholicism","capitalism","communism"],
   ans:"Catholicism",
   hint:"An -isme word for the Roman Catholic faith. Het-word."},

  {type:"fb", s:"{1} is typisch voor het katholieke zuiden van Nederland.",
   a:["Heiligenverering"], opts:["Heiligenverering","Katholicisme","Jodendom","Kenner"],
   hint:"The practice of honouring and venerating saints in the Catholic tradition.",
   sSrc:"Veneration of saints is typical for the Catholic south of the Netherlands."},

  {type:"match", pairs:[
    {trg:"heilige", src:"saint"},
    {trg:"heiligenverering", src:"veneration of saints"},
    {trg:"jodendom", src:"Judaism"},
    {trg:"katholicisme", src:"Catholicism"},
    {trg:"idool", src:"idol"},
    {trg:"kenner", src:"connoisseur"}
  ]},

  {type:"mc", q:"Hij is een echte kenner van Nederlandse kunst. Wat is een 'kenner'?",
   opts:["a salesperson","a critic","a connoisseur, someone with deep expertise","a collector"],
   ans:"a connoisseur, someone with deep expertise",
   hint:"From kennen (to know). S... who knows a subject inside and out."},

  {type:"fb", s:"Johan Cruijff is een {1} voor miljoenen voetbalfans.",
   a:["idool"], opts:["idool","heilige","kenner","hervormer"],
   hint:"A person who is greatly admired and looked up to. From Greek 'eidolon'.",
   sSrc:"Johan Cruijff is an idol for millions of football fans."},

  {type:"drag_fill", s:"De {1} vertelde dat het {2} en het {3} beide een lange geschiedenis hebben in Nederland.",
   blanks:{"1":"historicus","2":"jodendom","3":"katholicisme"},
   pool:["historicus","jodendom","katholicisme","heilige","idool"],
   hint:"The scholar of history explained that both the Jewish and Catholic faiths have long histories here."}
]};
export default LESSON_14;
