// L09: Society and Politics, 20 B1 gap words
const LESSON_9 = {
  id:"nlv2_b1gap_l9", title:"Maatschappij en Politiek", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Society and Politics",
     desc:"Learn Dutch vocabulary for social issues, government, and civic life. Understand news and public debates.",
     goals:["Master 20 society and politics words","Discuss social issues","Understand Dutch civic vocabulary"]},

    {type:"teach", trg:"de ambassade", src:"the embassy", pos:"noun", gender:"c",
     note:"Common gender (de). A foreign government's office in another country.",
     example:"A: De Nederlandse ambassade is in het centrum.\nB: Daar kun je een visum aanvragen.",
     exampleSrc:"A: The Dutch embassy is in the center.\nB: There you can apply for a visa.",
     funFact:"The Hague hosts over 100 embassies, making it the 'legal capital of the world'."},

    {type:"teach", trg:"de ambassadeur", src:"the ambassador", pos:"noun", gender:"c",
     note:"Common gender (de). The highest-ranking diplomat.",
     example:"A: De ambassadeur sprak met de minister.\nB: Over welk onderwerp?",
     exampleSrc:"A: The ambassador spoke with the minister.\nB: About which topic?",
     funFact:"French origin. The Dutch have ambassadors in nearly every country in the world."},

    {type:"teach", trg:"de ambacht", src:"the craft / the trade", pos:"noun", gender:"c",
     note:"Common gender (de). Traditional skilled work.",
     example:"A: Bakken is een oud ambacht.\nB: Ja, mijn opa was ook bakker.",
     exampleSrc:"A: Baking is an old craft.\nB: Yes, my grandfather was also a baker.",
     funFact:"Related to 'ambt' (office). 'Ambacht' originally meant any official trade. Dutch crafts are celebrated at markets."},

    {type:"teach", trg:"het algemeen", src:"the general / in general", pos:"noun", gender:"n",
     note:"Also adjective. 'In het algemeen' = in general.",
     example:"A: In het algemeen zijn Nederlanders direct.\nB: Ja, dat klopt!",
     exampleSrc:"A: In general, Dutch people are direct.\nB: Yes, that is true!",
     funFact:"'Algemeen' comes from 'al' (all) + 'gemeen' (common). 'Algemene vergadering' = general assembly."},

    {type:"mc",
     q:"Je wilt een visum aanvragen voor een ander land. Waar ga je naartoe?",
     opts:["de ambassade","de Senaat","het adviesbureau","het advocatenkantoor"],
     ans:"de ambassade",
     hint:"Think about the building where a foreign country's diplomats work."},

    {type:"teach", trg:"de allochtoon", src:"person of foreign origin", pos:"noun", gender:"c",
     note:"Common gender (de). Once common, now considered outdated.",
     example:"A: Het woord 'allochtoon' wordt niet meer officieel gebruikt.\nB: Wat zeg je dan?\nA: 'Persoon met een migratieachtergrond'.",
     exampleSrc:"A: The word 'allochtoon' is no longer officially used.\nB: What do you say then?\nA: 'Person with a migration background'.",
     funFact:"Officially replaced in 2016 by Dutch statistics bureau CBS. Now considered outdated and sometimes offensive."},

    {type:"teach", trg:"alleenstaand", src:"single / living alone", pos:"adj", gender:null,
     note:"Adjective. Describes someone living without a partner.",
     example:"A: Ze is alleenstaande moeder.\nB: Dat moet zwaar zijn.",
     exampleSrc:"A: She is a single mother.\nB: That must be tough.",
     funFact:"About 40% of Dutch households are single-person. The Netherlands has one of Europe's highest rates."},

    {type:"teach", trg:"de armoedegrens", src:"the poverty line", pos:"noun", gender:"c",
     note:"Common gender (de). Armoede (poverty) + grens (border).",
     example:"A: Veel gezinnen leven onder de armoedegrens.\nB: Dat is een groot probleem.",
     exampleSrc:"A: Many families live below the poverty line.\nB: That is a big problem.",
     funFact:"The Dutch poverty line is defined by CBS and SCP. Despite being wealthy, about 5% of Dutch people live below it."},

    {type:"teach", trg:"de agressiviteit", src:"the aggressiveness", pos:"noun", gender:"c",
     note:"Common gender (de). From 'agressief' (aggressive).",
     example:"A: Er is meer agressiviteit in het verkeer.\nB: Mensen moeten rustiger rijden.",
     exampleSrc:"A: There is more aggressiveness in traffic.\nB: People should drive more calmly.",
     funFact:"'Verkeersagressie' (road rage) is a growing concern in the Netherlands."},

    {type:"teach", trg:"agressief", src:"aggressive", pos:"adj", gender:null,
     note:"Adjective. Describes hostile or violent behavior.",
     example:"A: Hij werd heel agressief.\nB: We moesten de politie bellen.",
     exampleSrc:"A: He became very aggressive.\nB: We had to call the police.",
     funFact:"French origin. The Dutch value 'gezelligheid' (coziness), so aggression is strongly frowned upon."},

    {type:"fb",
     s:"De {1} van Nederland in Berlijn organiseerde een receptie.",
     a:["ambassadeur"],
     opts:["ambassadeur","ambtenaar","adviseur","accountant"],
     hint:"Which person is the top diplomat representing their country abroad?",
     sSrc:"The {1} of the Netherlands in Berlin organized a reception."},

    {type:"teach", trg:"de aanwezigheid", src:"the presence / the attendance", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanwezig' (present).",
     example:"A: Uw aanwezigheid is verplicht.\nB: Natuurlijk, ik kom zeker.",
     exampleSrc:"A: Your attendance is mandatory.\nB: Of course, I will definitely come.",
     funFact:"The -heid suffix creates abstract nouns: aanwezig (present) + heid = presence."},

    {type:"teach", trg:"de actievoerder", src:"the activist / the protester", pos:"noun", gender:"c",
     note:"Common gender (de). Actie (action) + voerder (one who carries out).",
     example:"A: De actievoerders blokkeerden de weg.\nB: Waar protesteren ze tegen?",
     exampleSrc:"A: The activists blocked the road.\nB: What are they protesting against?",
     funFact:"The Netherlands has a strong protest tradition. Dutch people are not shy about 'actie voeren' (campaigning)."},

    {type:"teach", trg:"de AOW", src:"the state pension", pos:"noun", gender:"c",
     note:"Common gender (de). Abbreviation for Algemene Ouderdomswet.",
     example:"A: Op welke leeftijd krijg je AOW?\nB: Vanaf je zevenenzestigste.",
     exampleSrc:"A: At what age do you get the state pension?\nB: From age sixty-seven.",
     funFact:"AOW stands for 'Algemene Ouderdomswet' (General Old Age Law). Everyone in the Netherlands gets it at 67."},

    {type:"teach", trg:"het aspect", src:"the aspect", pos:"noun", gender:"n",
     note:"Neuter gender (het). A particular part or feature of something.",
     example:"A: Dat is een belangrijk aspect van het debat.\nB: Ja, we moeten er goed over nadenken.",
     exampleSrc:"A: That is an important aspect of the debate.\nB: Yes, we need to think about it carefully.",
     funFact:"Same word in English and Dutch. From Latin 'aspectus' (a looking at)."},

    {type:"mc",
     q:"Mensen die demonstreren tegen het beleid van de overheid zijn ___.",
     opts:["accountants","actievoerders","ambtenaren","ambassadeurs"],
     ans:"actievoerders",
     hint:"Which word describes people who protest and campaign for change?"},

    {type:"teach", trg:"alledaags", src:"everyday / commonplace", pos:"adj", gender:null,
     note:"Adjective. Something ordinary and routine.",
     example:"A: Fietsen is heel alledaags in Nederland.\nB: Ja, iedereen doet het.",
     exampleSrc:"A: Cycling is very commonplace in the Netherlands.\nB: Yes, everyone does it.",
     funFact:"From 'alle dagen' (all days). What you do 'all days' becomes ordinary and routine."},

    {type:"teach", trg:"afkomstig", src:"originating from / coming from", pos:"adj", gender:null,
     note:"Adjective. Describes where someone or something is from.",
     example:"A: Waar ben je afkomstig?\nB: Ik ben afkomstig uit Marokko.",
     exampleSrc:"A: Where are you from?\nB: I am from Morocco.",
     funFact:"From 'afkomst' (origin). Very common in Dutch conversations about background."},

    {type:"teach", trg:"althans", src:"at least / that is", pos:"adv", gender:null,
     note:"Adverb. Used to correct or qualify a statement.",
     example:"A: Hij komt morgen, althans dat denk ik.\nB: Bel even om het te checken.",
     exampleSrc:"A: He is coming tomorrow, at least I think so.\nB: Call to check.",
     funFact:"A very Dutch hedging word. The Dutch love to qualify their statements to be precise."},

    {type:"teach", trg:"alsmaar", src:"continually / on and on", pos:"adv", gender:null,
     note:"Adverb. Indicates something keeps happening.",
     example:"A: De prijzen stijgen alsmaar.\nB: Ja, het wordt steeds duurder.",
     exampleSrc:"A: Prices keep rising continually.\nB: Yes, it keeps getting more expensive.",
     funFact:"Als (as) + maar (but/only). Combines into 'on and on'. Very expressive Dutch adverb."},

    {type:"match", pairs:[
      {trg:"ambassade", src:"embassy"},
      {trg:"armoedegrens", src:"poverty line"},
      {trg:"actievoerder", src:"activist"},
      {trg:"alledaags", src:"everyday/commonplace"},
      {trg:"aanwezigheid", src:"presence"}
    ]},

    {type:"fb",
     s:"Ze is {1} uit Suriname, maar woont al twintig jaar in Nederland.",
     a:["afkomstig"],
     opts:["afkomstig","alleenstaand","alledaags","agressief"],
     hint:"Which adjective describes where a person originally comes from?",
     sSrc:"She is {1} from Suriname but has lived in the Netherlands for twenty years."},

    {type:"mc",
     q:"De huizenprijzen stijgen ___ verder. Het houdt niet op.",
     opts:["afkomstig","alledaags","alsmaar","althans"],
     ans:"alsmaar",
     hint:"Which adverb means something keeps happening without stopping?"}
  ]
};
export default LESSON_9;
