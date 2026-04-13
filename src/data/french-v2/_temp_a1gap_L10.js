const LESSON_10 = {
  id:"frv2_a1gap_l10", title:"L'école et les études", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'école et les études",
     desc:"The world of education and learning. From the classroom to the exam hall, master the vocabulary of French academic life.",
     goals:["Learn 20 education-related words","Talk about school and studying","Understand the French education system"]},

    {type:"teach", trg:"l'académie", src:"the academy", pos:"noun", gender:"f",
     note:"Feminine noun. An educational institution or regional school district.",
     example:"A: L'Académie française, c'est quoi ?\nB: C'est l'institution qui protège la langue française.",
     exampleSrc:"A: What is the Académie française?\nB: It's the institution that protects the French language.",
     funFact:"The Académie française, founded in 1635, decides which words are officially part of the French language."},

    {type:"teach", trg:"apprendre", src:"to learn, to teach", pos:"verb", gender:null,
     note:"Irregular verb (conjugated like 'prendre'). Double meaning.",
     example:"A: Qu'est-ce que tu apprends ?\nB: J'apprends l'histoire de France.",
     exampleSrc:"A: What are you learning?\nB: I'm learning French history.",
     funFact:"Already seen in Lesson 4, but so important it appears again. School is where you 'apprends' everything!"},

    {type:"teach", trg:"l'apprenti", src:"the apprentice", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'apprentie'. Learning through practice.",
     example:"A: Il est apprenti depuis combien de temps ?\nB: Depuis un an.",
     exampleSrc:"A: How long has he been an apprentice?\nB: For a year.",
     funFact:"French apprenticeship ('apprentissage') is a respected path. You can be an apprenti from age 16."},

    {type:"teach", trg:"le bac", src:"the high school diploma exam", pos:"noun", gender:"m",
     note:"Masculine noun. Short for 'baccalauréat'. The French final exam.",
     example:"A: Tu passes le bac cette année ?\nB: Oui, en juin. Je stresse !",
     exampleSrc:"A: Are you taking the bac this year?\nB: Yes, in June. I'm stressed!",
     funFact:"The bac is a national obsession in France. Results day in July is major news, like A-levels in the UK."},

    {type:"teach", trg:"le baccalauréat", src:"the baccalaureate", pos:"noun", gender:"m",
     note:"Masculine noun. Full name of 'le bac'. The French school-leaving exam.",
     example:"A: Tu as ton baccalauréat ?\nB: Oui, je l'ai eu avec mention bien.",
     exampleSrc:"A: Do you have your baccalaureate?\nB: Yes, I got it with honors.",
     funFact:"Napoleon created the baccalauréat in 1808. Over 80% of French students now pass it, up from 3% in 1900."},

    {type:"mc",
     q:"Quel est le nom complet du 'bac' ?",
     opts:["le baccalauréat","l'académie","l'apprenti","l'album"],
     ans:"le baccalauréat",
     hint:"This is the full, formal name for the French high school diploma examination."},

    {type:"teach", trg:"l'album", src:"the album", pos:"noun", gender:"m",
     note:"Masculine noun. Photo album, music album, or picture book.",
     example:"A: Tu as un album photo ?\nB: Oui, avec les photos de vacances.",
     exampleSrc:"A: Do you have a photo album?\nB: Yes, with vacation photos.",
     funFact:"'Album' in French schools usually means a children's picture book, not a music album."},

    {type:"teach", trg:"l'application", src:"the application, the dedication", pos:"noun", gender:"f",
     note:"Feminine noun. In school, means dedication and effort, not just an app.",
     example:"A: Elle a de bonnes notes ?\nB: Oui, elle travaille avec beaucoup d'application.",
     exampleSrc:"A: Does she have good grades?\nB: Yes, she works with great dedication.",
     funFact:"French report cards often comment on 'application' as a positive trait, meaning diligent effort."},

    {type:"teach", trg:"l'annonce", src:"the announcement", pos:"noun", gender:"f",
     note:"Feminine noun. A public notice, ad, or announcement.",
     example:"A: Tu as lu l'annonce ?\nB: Oui, il y a un cours de danse gratuit.",
     exampleSrc:"A: Did you read the announcement?\nB: Yes, there's a free dance class.",
     funFact:"'Petites annonces' are classified ads. Before the internet, newspapers were full of them."},

    {type:"teach", trg:"annoncer", src:"to announce", pos:"verb", gender:null,
     note:"Regular -er verb (c becomes ç before a/o: nous annonçons).",
     example:"A: Qui annonce les résultats ?\nB: Le directeur, demain matin.",
     exampleSrc:"A: Who announces the results?\nB: The director, tomorrow morning.",
     funFact:"French news anchors often 'annoncent les nouvelles' (announce the news) in a very formal style."},

    {type:"fb",
     s:"Tu passes le {1} en juin ? Bonne chance !",
     a:["bac"],
     opts:["bac","album","apprenti","annonce"],
     hint:"This short masculine noun is the French high school exit exam that everyone talks about.",
     sSrc:"Are you taking the {1} in June? Good luck!"},

    {type:"teach", trg:"l'annuaire", src:"the directory, the yearbook", pos:"noun", gender:"m",
     note:"Masculine noun. A phone directory or school yearbook.",
     example:"A: Tu cherches son numéro ?\nB: Oui, dans l'annuaire.",
     exampleSrc:"A: Are you looking for his number?\nB: Yes, in the directory.",
     funFact:"Before smartphones, every French home had 'les Pages Jaunes' (Yellow Pages), the national phone directory."},

    {type:"teach", trg:"l'article", src:"the article", pos:"noun", gender:"m",
     note:"Masculine noun. A newspaper/journal article or a grammar article.",
     example:"A: Tu as lu cet article ?\nB: Oui, c'est très intéressant.",
     exampleSrc:"A: Did you read this article?\nB: Yes, it's very interesting.",
     funFact:"In grammar class, 'les articles' (le, la, les, un, une, des) are the first topic every French student learns."},

    {type:"teach", trg:"l'attention", src:"the attention", pos:"noun", gender:"f",
     note:"Feminine noun. Also used as a warning: 'Attention !' (Watch out!)",
     example:"A: Attention, la porte !\nB: Merci, je n'avais pas vu.",
     exampleSrc:"A: Watch out, the door!\nB: Thanks, I hadn't seen it.",
     funFact:"'Faire attention' means to be careful or to pay attention. Teachers say it dozens of times a day."},

    {type:"teach", trg:"l'absence", src:"the absence", pos:"noun", gender:"f",
     note:"Feminine noun. Being away or missing from a place.",
     example:"A: Tu as une absence sur ton bulletin ?\nB: Oui, j'étais malade lundi.",
     exampleSrc:"A: Do you have an absence on your report?\nB: Yes, I was sick on Monday.",
     funFact:"French schools track absences carefully. Parents must write 'un mot d'absence' (an absence note) to explain."},

    {type:"mc",
     q:"Que signifie 'Attention !' en français ?",
     opts:["Watch out!","Good job!","Hello!","Goodbye!"],
     ans:"Watch out!",
     hint:"This word is used as a warning to be careful about something dangerous or important."},

    {type:"teach", trg:"l'avis", src:"the opinion", pos:"noun", gender:"m",
     note:"Masculine noun. Someone's view or judgment on a matter.",
     example:"A: Tu as un avis sur ce film ?\nB: Oui, je pense qu'il est excellent.",
     exampleSrc:"A: Do you have an opinion on this film?\nB: Yes, I think it's excellent.",
     funFact:"'À mon avis' (in my opinion) is one of the most useful phrases for expressing your view in French."},

    {type:"teach", trg:"l'attitude", src:"the attitude", pos:"noun", gender:"f",
     note:"Feminine noun. A person's behavior or stance toward something.",
     example:"A: Son attitude est positive.\nB: Oui, il est toujours motivé.",
     exampleSrc:"A: His attitude is positive.\nB: Yes, he's always motivated.",
     funFact:"In French schools, teachers write comments about 'attitude en classe' on report cards. Behavior matters."},

    {type:"teach", trg:"l'aide", src:"the help, the aid", pos:"noun", gender:"f",
     note:"Feminine noun. Assistance or support. Also a person who helps.",
     example:"A: Tu as besoin d'aide ?\nB: Oui, je ne comprends pas cet exercice.",
     exampleSrc:"A: Do you need help?\nB: Yes, I don't understand this exercise.",
     funFact:"'À l'aide !' means 'Help!' in emergencies. 'Aide-soignant' is a healthcare assistant."},

    {type:"teach", trg:"absolument", src:"absolutely", pos:"adv", gender:null,
     note:"Adverb from 'absolu'. Used to strongly agree or emphasize.",
     example:"A: Tu viens demain ?\nB: Absolument, je serai là !",
     exampleSrc:"A: Are you coming tomorrow?\nB: Absolutely, I'll be there!",
     funFact:"The French love emphatic adverbs. 'Absolument', 'exactement', 'parfaitement' all mean strong agreement."},

    {type:"fb",
     s:"À mon {1}, ce livre est le meilleur de l'année.",
     a:["avis"],
     opts:["avis","aide","article","attention"],
     hint:"This masculine noun is what you share when someone asks 'what do you think?'",
     sSrc:"In my {1}, this book is the best of the year."},

    {type:"match", pairs:[
      {trg:"bac", src:"diploma exam"},
      {trg:"attention", src:"watch out / attention"},
      {trg:"avis", src:"opinion"},
      {trg:"aide", src:"help"},
      {trg:"absence", src:"absence"}
    ]},

    {type:"mc",
     q:"Quel mot signifie 'absolutely' en français ?",
     opts:["absolument","actuellement","agréablement","amicalement"],
     ans:"absolument",
     hint:"This adverb is used to express total agreement, derived from 'absolu'."},

    {type:"fb",
     s:"Le directeur va {1} les résultats demain.",
     a:["annoncer"],
     opts:["annoncer","apprendre","appeler","ajouter"],
     hint:"This verb means to officially communicate news or results to a group.",
     sSrc:"The director will {1} the results tomorrow."}
  ]
};
export default LESSON_10;
