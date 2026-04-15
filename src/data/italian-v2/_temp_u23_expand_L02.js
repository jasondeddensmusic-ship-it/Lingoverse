// Unit 23 Expansion. Lesson 5: I movimenti sociali
const LESSON_5 = {
  id:"itv2_u23l5", title:"I movimenti sociali", icon:"✊", xp:15, board:true,
  steps:[
    {type:"intro", title:"I movimenti sociali",
     desc:"Learn vocabulary about social movements, activism, and civic engagement in Italy. These words let you discuss how Italian society evolves through collective action.",
     goals:["Discuss social movements and activism","Talk about rights campaigns and protests","Express opinions about social change"]},

    {type:"teach", trg:"il movimento", src:"the movement", pos:"noun", gender:"m",
     note:"Masculine. From 'muovere' (to move).\n'Movimento sociale' = social movement.",
     example:"A: Il movimento ambientalista e cresciuto molto.\nB: I giovani sono molto attivi.",
     exampleSrc:"A: The environmental movement has grown a lot.\nB: Young people are very active.",
     funFact:"Italy has a strong tradition of social movements. The labor movement ('movimento operaio') shaped the Republic. The 1968 student movement ('Sessantotto') transformed universities. Recent movements include environmental activism and digital rights. 'Fare movimento' also means 'to exercise,' a completely different meaning."},

    {type:"teach", trg:"lo sciopero", src:"the strike", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'ex-operare' (to stop working).\n'Fare sciopero' = to go on strike.",
     example:"A: Domani c'e lo sciopero dei trasporti.\nB: Devo organizzarmi diversamente.",
     exampleSrc:"A: Tomorrow there is a transport strike.\nB: I need to make different arrangements.",
     funFact:"Italy has more strikes than almost any European country. Transport strikes are so frequent that dedicated websites track them. 'Sciopero bianco' (white strike) means working strictly by the rules to slow everything down without officially stopping. The right to strike is protected by Article 40 of the Constitution."},

    {type:"teach", trg:"il sindacato", src:"the trade union", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'syndikos' (advocate).\n'Iscriversi al sindacato' = to join the union.",
     example:"A: Il sindacato ha organizzato una protesta.\nB: Chiedono condizioni di lavoro migliori.",
     exampleSrc:"A: The union organized a protest.\nB: They are demanding better working conditions.",
     funFact:"Italy has three major union confederations: CGIL (left-leaning), CISL (Catholic-centrist), UIL (social-democratic). Together they represent millions of workers. Italian unions negotiate not just wages but also 'contratti collettivi' (collective agreements) that set minimum standards for entire industries. Union membership has declined but remains influential."},

    {type:"teach", trg:"il volontariato", src:"the volunteering / voluntary work", pos:"noun", gender:"m",
     note:"Masculine. From 'volontario' (voluntary/volunteer).\n'Fare volontariato' = to do volunteer work.",
     example:"A: Faccio volontariato con la Croce Rossa.\nB: E un impegno molto importante.",
     exampleSrc:"A: I volunteer with the Red Cross.\nB: It is a very important commitment.",
     funFact:"Italy has one of Europe's strongest volunteering cultures. Over 5 million Italians volunteer regularly. The 'terzo settore' (third sector/non-profit) is a major part of Italian civil society. Organizations like Caritas, Medici Senza Frontiere, and local 'associazioni' provide services from disaster relief to elderly care."},

    {type:"teach", trg:"il diritto di voto", src:"the right to vote / suffrage", pos:"noun", gender:"m",
     note:"Masculine. 'Suffragio universale' = universal suffrage.\nItalian women gained this right in 1946.",
     example:"A: Il diritto di voto e fondamentale.\nB: Le donne italiane lo hanno ottenuto nel 1946.",
     exampleSrc:"A: The right to vote is fundamental.\nB: Italian women obtained it in 1946.",
     funFact:"Italian women voted for the first time on June 2, 1946, in the referendum that abolished the monarchy and established the Republic. This date, 'Festa della Repubblica,' is now a national holiday. Before 1946, women had no voice in Italian governance despite contributing enormously to the wartime resistance ('Resistenza')."},

    {type:"teach", trg:"la protesta", src:"the protest", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'protestari' (to declare publicly).\n'Organizzare una protesta' = to organize a protest.",
     example:"A: La protesta degli studenti e pacifica.\nB: Chiedono piu fondi per l'istruzione.",
     exampleSrc:"A: The student protest is peaceful.\nB: They are asking for more funding for education.",
     funFact:"Italian protest culture is vibrant. Students, workers, and citizens regularly take to the streets. 'Corteo' (march/procession) and 'sit-in' (borrowed from English) are common protest forms. Italian police ('polizia') and 'carabinieri' manage protests with varying approaches depending on the political climate."},

    {type:"teach", trg:"l'associazione", src:"the association / organization", pos:"noun", gender:"f",
     note:"Feminine. From 'associare' (to associate).\n'Associazione no-profit' = non-profit organization.",
     example:"A: L'associazione aiuta le famiglie in difficolta.\nB: Come posso contribuire?",
     exampleSrc:"A: The organization helps families in difficulty.\nB: How can I contribute?",
     funFact:"'Associazioni' are the backbone of Italian civil society. From cultural circles ('circoli') to sports clubs to neighborhood committees, Italians organize through associations. The Constitution (Article 18) guarantees freedom of association. 'Associazionismo' (the culture of forming associations) is considered a pillar of Italian democracy."},

    {type:"teach", trg:"la solidarieta", src:"the solidarity", pos:"noun", gender:"f",
     note:"Feminine. From 'solidale' (solidary).\n'Spirito di solidarieta' = spirit of solidarity.",
     example:"A: In tempi di crisi, la solidarieta e fondamentale.\nB: Gli italiani sanno unirsi nei momenti difficili.",
     exampleSrc:"A: In times of crisis, solidarity is fundamental.\nB: Italians know how to come together in difficult moments.",
     funFact:"'Solidarieta' is a core value in the Italian Constitution (Article 2). During natural disasters (earthquakes, floods), Italian communities mobilize with remarkable speed. The concept extends beyond emergencies: 'economia solidale' (solidarity economy), 'turismo solidale' (solidarity tourism), and 'commercio equo e solidale' (fair trade) are growing movements."},

    // Quiz steps
    {type:"mc", q:"When did Italian women first vote?",
     opts:["1918, after World War I","1946, in the referendum that established the Republic","1960, following a constitutional reform","1975, after feminist movement campaigns"],
     ans:"1946, in the referendum that established the Republic",
     hint:"June 2, 1946 is now 'Festa della Repubblica.' Women voted to abolish the monarchy and create a democratic r...."},

    {type:"fb", s:"Domani c'e lo {1} dei trasporti.",
     a:["sciopero"],
     opts:["sciopero","sindacato","movimento","volontariato"],
     hint:"A work stoppage in the transport sector. Italy has more of these than almost any European country. Dedicated websites track them.",
     sSrc:"Tomorrow there is a transport {1}."},

    {type:"match", pairs:[
      {trg:"il movimento", src:"the movement"},
      {trg:"lo sciopero", src:"the strike"},
      {trg:"il sindacato", src:"the trade union"},
      {trg:"il volontariato", src:"volunteering"},
      {trg:"la solidarieta", src:"solidarity"}
    ]},

    {type:"mc", q:"What are Italy's three major union confederations?",
     opts:["CGIL, CISL, UIL","CGIL, UIL, FIOM","CISL, FIOM, CGL","UIL, CNA, CISL"],
     ans:"CGIL, CISL, UIL",
     hint:"Left-leaning, Catholic-centrist, and social-democratic respectively. Together they negotiate collective agreements for entire industries."},

    {type:"fb", s:"Faccio {1} con la Croce Rossa.",
     a:["volontariato"],
     opts:["volontariato","sciopero","protesta","movimento"],
     hint:"Donating your time and effort to help others. Over 5 million Italians do this regularly. The 'terzo settore' is a major part of civil society.",
     sSrc:"I do {1} work with the Red Cross."},

    {type:"mc", q:"What does 'sciopero bianco' mean?",
     opts:["A peaceful protest without violence","Working strictly by the rules to slow everything down","A strike only by white-collar office workers","A one-day symbolic walk-out from work"],
     ans:"Working strictly by the rules to slow everything down",
     hint:"By following every regulation to the letter, workers cause delays without officially stopping. A creative form of industrial action."},

    {type:"fb", s:"L'{1} aiuta le famiglie in difficolta.",
     a:["associazione"],
     opts:["associazione","elezione","coalizione","istituzione"],
     hint:"A non-profit organization. These form the backbone of Italian civil society, guaranteed by Article 18 of the Constitution.",
     sSrc:"The {1} helps families in difficulty."},

    {type:"mc", q:"Which article of the Italian Constitution establishes solidarity as a civic value?",
     opts:["Article 1 (on democracy and work)","Article 2 (on solidarity and rights)","Article 3 (on equality)","Article 18 (on freedom of association)"],
     ans:"Article 2 (on solidarity and rights)",
     hint:"This a... establishes inviolable human r... and demands citizens fulfill duties of 'solidarieta' toward the community."}
  ]
};
export default LESSON_5;
