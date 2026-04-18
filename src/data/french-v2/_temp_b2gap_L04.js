const LESSON_4 = {
  id:"frv2_b2gap_l4", title:"M\u00e9dias et communication", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"M\u00e9dias et communication",
     desc:"Navigate the world of media, journalism, and digital communication with precision vocabulary.",
     goals:["Learn 20 media and communication terms","Discuss journalism and digital culture","Analyze media influence critically"]},

    {type:"teach", trg:"l'audimat", src:"the audience ratings", pos:"noun", gender:"m",
     note:"Masculine noun. TV audience measurement. Informal for 'ratings'.",
     example:"A: L'\u00e9mission a un bon audimat.\nB: Oui, cinq millions de t\u00e9l\u00e9spectateurs.",
     exampleSrc:"A: The show has good ratings.\nB: Yes, five million viewers.",
     funFact:"Originally a brand name (Audimat) that became generic, like 'Kleenex' in English."},

    {type:"teach", trg:"un communiqu\u00e9", src:"a press release, a communique", pos:"noun", gender:"m",
     note:"Masculine noun. An official statement released to the media.",
     example:"A: Le minist\u00e8re a publi\u00e9 un communiqu\u00e9.\nB: Que dit-il exactement ?",
     exampleSrc:"A: The ministry published a press release.\nB: What does it say exactly?",
     funFact:"'Communiqu\u00e9 de presse' is the full form. French diplomacy invented the modern press communique."},

    {type:"teach", trg:"connoter", src:"to connote, to suggest", pos:"verb", gender:null,
     note:"Verb. To carry an additional meaning beyond the literal definition.",
     example:"A: Ce mot connote la violence.\nB: Oui, choisissons un terme plus neutre.",
     exampleSrc:"A: This word connotes violence.\nB: Yes, let's choose a more neutral term.",
     funFact:"Linguistics distinguishes 'd\u00e9noter' (literal meaning) from 'connoter' (implied associations)."},

    {type:"teach", trg:"la classification", src:"the classification", pos:"noun", gender:"f",
     note:"Feminine noun. The systematic arrangement into categories.",
     example:"A: La classification des films aide les parents.\nB: Oui, c'est un bon syst\u00e8me.",
     exampleSrc:"A: Film classification helps parents.\nB: Yes, it's a good system.",
     funFact:"France's film rating system uses categories like 'tous publics', '-12', '-16', and '-18'."},

    {type:"teach", trg:"une archive", src:"an archive", pos:"noun", gender:"f",
     note:"Feminine noun. A collection of historical documents. Often used in plural: les archives.",
     example:"A: J'ai trouv\u00e9 cela dans les archives.\nB: Les archives nationales sont une mine d'or.",
     exampleSrc:"A: I found this in the archives.\nB: The national archives are a goldmine.",
     funFact:"The Archives nationales in Paris hold documents from the 7th century to today."},

    {type:"mc",
     q:"Comment appelle-t-on la mesure de l'audience t\u00e9l\u00e9vis\u00e9e ?",
     opts:["L'audimat","Le communiqu\u00e9","La classification","L'archive"],
     ans:"L'audimat",
     hint:"Originally a brand name that became the generic term for TV viewership numbers."},

    {type:"teach", trg:"un anglicisme", src:"an anglicism", pos:"noun", gender:"m",
     note:"Masculine noun. An English word or expression used in French.",
     example:"A: 'Le week-end' est un anglicisme.\nB: Oui, mais il est accept\u00e9 maintenant.",
     exampleSrc:"A: 'Le week-end' is an anglicism.\nB: Yes, but it's accepted now.",
     funFact:"The Acad\u00e9mie fran\u00e7aise fights anglicisms. They proposed 'courriel' for 'email' and it stuck in Canada."},

    {type:"teach", trg:"anglophone", src:"English-speaking", pos:"adj", gender:null,
     note:"Adjective and noun. Describes someone whose language is English.",
     example:"A: C'est un pays anglophone.\nB: Oui, l'anglais y est la langue officielle.",
     exampleSrc:"A: It's an English-speaking country.\nB: Yes, English is the official language there.",
     funFact:"In Canada, 'anglophone' and 'francophone' are key identity markers with political weight."},

    {type:"teach", trg:"la blogosph\u00e8re", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and online writing.",
     example:"A: La blogosph\u00e8re r\u00e9agit vivement.\nB: Oui, l'article a provoqu\u00e9 un d\u00e9bat.",
     exampleSrc:"A: The blogosphere is reacting strongly.\nB: Yes, the article sparked a debate.",
     funFact:"French bloggers popularized the term around 2005. France has one of Europe's most active blog cultures."},

    {type:"teach", trg:"l'argumentation", src:"the argumentation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of constructing logical arguments.",
     example:"A: Ton argumentation est solide.\nB: Merci, j'ai bien pr\u00e9par\u00e9 mes points.",
     exampleSrc:"A: Your argumentation is solid.\nB: Thanks, I prepared my points well.",
     funFact:"French schools teach 'argumentation' as a formal discipline from age 14. The 'dissertation' exam is built on it."},

    {type:"fb",
     s:"Le minist\u00e8re a publi\u00e9 un {1} de presse ce matin.",
     a:["communiqu\u00e9"],
     opts:["communiqu\u00e9","audimat","anglicisme","archive"],
     hint:"An official statement issued by a government or institution for the press. French diplomacy invented this format.",
     sSrc:"The ministry published a press {1} this morning."},

    {type:"teach", trg:"chronologique", src:"chronological", pos:"adj", gender:null,
     note:"Adjective. Arranged in order of time. Same form for m/f.",
     example:"A: Pr\u00e9sente les faits par ordre chronologique.\nB: D'accord, je commence par le d\u00e9but.",
     exampleSrc:"A: Present the facts in chronological order.\nB: Okay, I'll start from the beginning.",
     funFact:"From Greek 'chronos' (time) + 'logos' (study). French loves Greek-rooted intellectual vocabulary."},

    {type:"teach", trg:"la coalition", src:"the coalition", pos:"noun", gender:"f",
     note:"Feminine noun. An alliance of parties or groups for a common purpose.",
     example:"A: La coalition a remport\u00e9 les \u00e9lections.\nB: Trois partis gouvernent ensemble.",
     exampleSrc:"A: The coalition won the elections.\nB: Three parties are governing together.",
     funFact:"French politics runs on coalitions. The Fifth Republic has seen dozens since 1958."},

    {type:"teach", trg:"un contour", src:"an outline, a contour", pos:"noun", gender:"m",
     note:"Masculine noun. The outline or edge of something. Also used figuratively.",
     example:"A: Les contours du projet restent flous.\nB: Il faut pr\u00e9ciser les d\u00e9tails.",
     exampleSrc:"A: The outlines of the project remain unclear.\nB: We need to specify the details.",
     funFact:"In art, 'le contour' is fundamental to drawing. Matisse was famous for his bold contour lines."},

    {type:"teach", trg:"converser", src:"to converse, to chat", pos:"verb", gender:null,
     note:"Verb. To have a conversation. More formal than 'bavarder' or 'causer'.",
     example:"A: Ils conversent depuis une heure.\nB: Oui, ils ont beaucoup de choses \u00e0 se dire.",
     exampleSrc:"A: They've been conversing for an hour.\nB: Yes, they have a lot to talk about.",
     funFact:"The 18th century French 'salon' was built on the art of conversation. Converser was the ultimate social skill."},

    {type:"mc",
     q:"Quel mot d\u00e9signe un mot anglais utilis\u00e9 en fran\u00e7ais ?",
     opts:["Un anglicisme","Un communiqu\u00e9","Une archive","Une coalition"],
     ans:"Un anglicisme",
     hint:"The Acad\u00e9mie fran\u00e7aise tries to replace these with French alternatives."},

    {type:"teach", trg:"un best-seller", src:"a best-seller", pos:"noun", gender:"m",
     note:"Masculine noun. A book that sells in very large numbers.",
     example:"A: Son roman est devenu un best-seller.\nB: Il s'est vendu \u00e0 un million d'exemplaires.",
     exampleSrc:"A: Her novel became a best-seller.\nB: It sold a million copies.",
     funFact:"Ironically, 'best-seller' is itself an anglicism that the French use despite preferring 'succ\u00e8s de librairie'."},

    {type:"teach", trg:"un arch\u00e9type", src:"an archetype", pos:"noun", gender:"m",
     note:"Masculine noun. A perfect example or original model of something.",
     example:"A: C'est l'arch\u00e9type du h\u00e9ros romantique.\nB: Oui, il a toutes les qualit\u00e9s du genre.",
     exampleSrc:"A: He's the archetype of the romantic hero.\nB: Yes, he has all the qualities of the genre.",
     funFact:"From Greek 'arkhetupon' meaning original pattern. Jung made archetypes central to psychology."},

    {type:"teach", trg:"conform\u00e9ment", src:"in accordance with", pos:"adv", gender:null,
     note:"Adverb. In keeping with rules or expectations. Formal register.",
     example:"A: Conform\u00e9ment \u00e0 la loi, nous fermons \u00e0 22h.\nB: C'est la r\u00e8gle pour tous.",
     exampleSrc:"A: In accordance with the law, we close at 10 PM.\nB: That's the rule for everyone.",
     funFact:"Essential in legal and administrative French. Every official document uses this word."},

    {type:"teach", trg:"un consultant", src:"a consultant", pos:"noun", gender:"m",
     note:"Masculine noun. An expert hired for advice. Feminine: une consultante.",
     example:"A: Nous avons engag\u00e9 un consultant.\nB: Il va analyser notre strat\u00e9gie.",
     exampleSrc:"A: We hired a consultant.\nB: He will analyze our strategy.",
     funFact:"French business adopted 'consultant' from English in the 1980s. Some prefer 'conseil' (advisor)."},

    {type:"match", pairs:[
      {trg:"audimat", src:"TV ratings"},
      {trg:"anglicisme", src:"anglicism"},
      {trg:"arch\u00e9type", src:"archetype"},
      {trg:"coalition", src:"coalition"},
      {trg:"blogosph\u00e8re", src:"blogosphere"}
    ]},

    {type:"fb",
     s:"Ton {1} est convaincante, tu as bien pr\u00e9par\u00e9 tes arguments.",
     a:["argumentation"],
     opts:["argumentation","classification","coalition","archive"],
     hint:"The structured process of building logical arguments. A key skill in French schools.",
     sSrc:"Your {1} is convincing, you prepared your arguments well."},

    {type:"mc",
     q:"Que signifie 'conform\u00e9ment \u00e0 la loi' ?",
     opts:["En accord avec la loi","Contre la loi","Malgr\u00e9 la loi","Sans rapport avec la loi"],
     ans:"En accord avec la loi",
     hint:"An adverb meaning in keeping with, following the rules. From 'conforme'."}
  ]
};
export default LESSON_4;
