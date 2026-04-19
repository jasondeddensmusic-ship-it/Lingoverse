const UNIT_25 = {n:25, lang:"pt", srcLang:"en", track:"v2", title:"Valores e sociedade", sub:"Values and Society", icon:"⚖️", level:"B2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u25l1", title:"Rights and Duties", icon:"📜", xp:15, board:true, steps:[
{type:"intro", title:"The Language of Citizenship",
 desc:"B2 Portuguese opens the door to abstract discussion. Rights, duties, and inequality appear in news, debates, and daily conversation. Master this vocabulary to sound like an engaged citizen.",
 goals:["Talk about rights and duties","Describe inequality and justice","Discuss democratic life"]},

{type:"teach", trg:"direito", src:"right (entitlement)", pos:"noun", gender:"m",
 note:"Basic legal or moral entitlement. Also means 'law' as an academic field (estudar Direito).",
 example:"A: Todo cidadão tem direito à educação.\nB: É um princípio fundamental.",
 exampleSrc:"A: Every citizen has the right to education.\nB: It is a fundamental principle.",
 funFact:"The plural 'direitos humanos' (human rights) entered Portuguese in the 20th century through UN documents."},

{type:"teach", trg:"dever", src:"duty / obligation", pos:"noun", gender:"m",
 note:"Moral or civic obligation. Same word as the verb 'to have to'. Context tells you which is meant.",
 example:"A: Votar é um dever de todos.\nB: Concordo plenamente.",
 exampleSrc:"A: Voting is a duty of all.\nB: I agree completely.",
 funFact:"In Brazil, voting is legally mandatory for citizens aged 18 to 70. The 'dever' is literal."},

{type:"teach", trg:"cidadão", src:"citizen", pos:"noun", gender:"m",
 note:"Member of a political community. Feminine form is 'cidadã'. Plural is 'cidadãos'.",
 example:"A: Como cidadão, tenho direitos e deveres.\nB: Exatamente isso.",
 exampleSrc:"A: As a citizen, I have rights and duties.\nB: Exactly that.",
 funFact:"The Brazilian 1988 Constitution is called the 'Constituição Cidadã' because it expanded civil rights."},

{type:"teach", trg:"lei", src:"law", pos:"noun", gender:"f",
 note:"A specific legal rule. Feminine noun, plural 'leis'. Not to be confused with 'direito' (field of law).",
 example:"A: A lei mudou no ano passado.\nB: Eu não sabia disso.",
 exampleSrc:"A: The law changed last year.\nB: I didn't know that.",
 funFact:"Brazilian laws are numbered. 'Lei 8.078' is the famous Consumer Protection Code from 1990."},

{type:"teach", trg:"responsabilidade", src:"responsibility", pos:"noun", gender:"f",
 note:"Being accountable for actions or outcomes. Very common in ethical and political discussions.",
 example:"A: Proteger o meio ambiente é responsabilidade nossa.\nB: De todos, sem exceção.",
 exampleSrc:"A: Protecting the environment is our responsibility.\nB: Of everyone, without exception.",
 funFact:"'Responsabilidade social' is a buzzword in Brazilian corporate culture since the 2000s."},

{type:"teach", trg:"liberdade", src:"freedom", pos:"noun", gender:"f",
 note:"A core political value. Common in phrases like 'liberdade de expressão' (freedom of expression).",
 example:"A: A liberdade é muito importante.\nB: Sim, a liberdade é um valor universal.",
 exampleSrc:"A: Freedom is very important.\nB: Yes, freedom is a universal value.",
 funFact:"The Brazilian national motto on the flag in 1889 was 'Liberdade, Igualdade, Fraternidade', borrowed from France."},

{type:"teach", trg:"igualdade", src:"equality", pos:"noun", gender:"f",
 note:"Equal treatment under the law and in society. Opposite of 'desigualdade'.",
 example:"A: A igualdade entre homens e mulheres ainda é um desafio.\nB: Há muito trabalho pela frente.",
 exampleSrc:"A: Equality between men and women is still a challenge.\nB: There is much work ahead.",
 funFact:"Article 5 of the Brazilian Constitution opens with 'todos são iguais perante a lei' (all are equal before the law)."},

{type:"tip", title:"Abstract Nouns Ending in -dade",
 text:"Many abstract values in Portuguese end in -dade:\n\nliberdade (freedom)\nigualdade (equality)\nresponsabilidade (responsibility)\ndesigualdade (inequality)\ndemocracia ends in -cia, but most abstract values use -dade.\n\nAll -dade nouns are FEMININE.\nThey correspond to English -ity or -ness.",
 deepDive:{title:"Latin Roots",
  text:"The -dade ending comes from Latin -tatem. Liberdade traces to 'libertatem', igualdade to 'aequalitatem'. This pattern unites Portuguese with Spanish -dad and Italian -ita. Learning one abstract value gives you the formula for dozens more. The gender is always feminine because Latin -tatem endings were feminine."}},

{type:"fb",
 s:"Todo {1} tem o direito de votar.",
 a:["cidadão"],
 opts:["cidadão","dever","lei","igualdade"],
 hint:"Member of a political community. Masculine noun.",
 sSrc:"Every {1} has the right to vote."},

{type:"fb",
 s:"A {1} entre todos é um valor democrático fundamental.",
 a:["igualdade"],
 opts:["igualdade","liberdade","responsabilidade","lei"],
 hint:"Equal treatment for everyone. Opposite of inequality.",
 sSrc:"{1} for all is a fundamental democratic value."},

{type:"mc",
 q:"Which word means 'duty'?",
 opts:["direito","dever","lei","liberdade"],
 ans:"dever",
 hint:"Obligation or moral responsibility. Opposite of rights."},

{type:"mc",
 q:"What gender are nouns ending in -dade?",
 opts:["masculine","feminine","neuter","varies"],
 ans:"feminine",
 hint:"Think liberdade, igualdade, responsabilidade. All the same gender."},

{type:"fb",
 s:"Todo cidadão tem {1} à educação de qualidade.",
 a:["direito"],
 opts:["direito","dever","lei","cidadão"],
 hint:"An entitlement guaranteed by law or morality.",
 sSrc:"Every citizen has the {1} to quality education."},

{type:"fb",
 s:"A {1} de expressão é fundamental na democracia.",
 a:["liberdade"],
 opts:["liberdade","igualdade","responsabilidade","lei"],
 hint:"The freedom to speak. Core democratic value.",
 sSrc:"Freedom of expression is fundamental in democracy."},

{type:"fb",
 s:"Votar é um {1} de todo cidadão brasileiro.",
 a:["dever"],
 opts:["dever","direito","lei","responsabilidade"],
 hint:"A civic obligation. Masculine noun, also used as 'to have to'.",
 sSrc:"Voting is a {1} of every Brazilian citizen."},

{type:"fb",
 s:"A {1} proíbe discriminação por cor ou religião.",
 a:["lei"],
 opts:["lei","dever","cidadão","igualdade"],
 hint:"A specific legal rule. Short feminine noun.",
 sSrc:"The {1} prohibits discrimination based on color or religion."},

{type:"match", pairs:[
 {trg:"direito", src:"right"},
 {trg:"dever", src:"duty"},
 {trg:"cidadão", src:"citizen"},
 {trg:"lei", src:"law"},
 {trg:"liberdade", src:"freedom"},
 {trg:"igualdade", src:"equality"}
]},

{type:"mc",
 q:"Which is NOT a feminine noun?",
 opts:["lei","liberdade","dever","igualdade"],
 ans:"dever",
 hint:"Four words, three end in -dade or -ei (feminine). One is masculine."}
]},

{id:"ptv2_u25l2", title:"Democracy in Action", icon:"🗳️", xp:15, board:true, steps:[
{type:"intro", title:"How Democracy Works",
 desc:"Voting, protesting, and debating are the heart of democratic life. Learn the vocabulary Brazilians use when elections come around every two years.",
 goals:["Talk about elections and voting","Describe protests and reform","Use democracy vocabulary confidently"]},

{type:"teach", trg:"democracia", src:"democracy", pos:"noun", gender:"f",
 note:"Government by the people. Used both for the system and for democratic values in general.",
 example:"A: A democracia brasileira é relativamente jovem.\nB: Voltou em 1985.",
 exampleSrc:"A: Brazilian democracy is relatively young.\nB: It returned in 1985.",
 funFact:"Brazil had a 21-year military dictatorship that ended in 1985. Young democracies feel every crisis deeply."},

{type:"teach", trg:"votar", src:"to vote", pos:"verb", gender:null,
 note:"Regular -ar verb. Vote for someone: 'votar em alguém' (not 'votar por').",
 example:"A: Em quem você vai votar?\nB: Vou votar em Maria.",
 exampleSrc:"A: Who are you going to vote for?\nB: I'm going to vote for Maria.",
 funFact:"Brazil was the first major country to adopt electronic voting nationwide, in 1996."},

{type:"teach", trg:"manifestação", src:"protest / demonstration", pos:"noun", gender:"f",
 note:"Public gathering to express a view. From the verb 'manifestar-se' (to express oneself publicly).",
 example:"A: Houve uma grande manifestação no centro.\nB: Eu vi pela TV.",
 exampleSrc:"A: There was a big protest downtown.\nB: I saw it on TV.",
 funFact:"The 2013 'Jornadas de Junho' protests brought millions to the streets of Brazil over bus fares."},

{type:"teach", trg:"reforma", src:"reform", pos:"noun", gender:"f",
 note:"A major legal or structural change. Common in politics: reforma tributária, reforma da previdência.",
 example:"A: A reforma tributária é complicada.\nB: Todo governo promete, poucos fazem.",
 exampleSrc:"A: Tax reform is complicated.\nB: Every government promises, few deliver.",
 funFact:"'Reforma agrária' (land reform) has been debated in Brazil since the 1960s and remains a major issue."},

{type:"teach", trg:"desigualdade", src:"inequality", pos:"noun", gender:"f",
 note:"Unequal distribution of resources or opportunities. Central theme in Brazilian social debate.",
 example:"A: A desigualdade social no Brasil é enorme.\nB: É o maior desafio do país.",
 exampleSrc:"A: Social inequality in Brazil is enormous.\nB: It's the country's biggest challenge.",
 funFact:"Brazil's Gini coefficient, a measure of inequality, has been one of the world's highest for decades."},

{type:"teach", trg:"justiça", src:"justice", pos:"noun", gender:"f",
 note:"Both the abstract value and the judicial system. 'Ir à justiça' means to go to court.",
 example:"A: Queremos justiça para as vítimas.\nB: Esperamos que venha logo.",
 exampleSrc:"A: We want justice for the victims.\nB: We hope it comes soon.",
 funFact:"Brazil's highest court is the STF (Supremo Tribunal Federal), often just called 'o Supremo'."},

{type:"teach", trg:"oportunidade", src:"opportunity", pos:"noun", gender:"f",
 note:"A chance to do something. Key word in debates about social mobility and meritocracy.",
 example:"A: Todos merecem a mesma oportunidade.\nB: Mas a realidade é diferente.",
 exampleSrc:"A: Everyone deserves the same opportunity.\nB: But reality is different.",
 funFact:"'Igualdade de oportunidades' (equal opportunity) is a central phrase in Brazilian affirmative action debates."},

{type:"tip", title:"Votar em vs Votar por",
 text:"In Portuguese, you vote FOR a person or party using 'em', not 'por':\n\nVotei no candidato X. (I voted for candidate X)\nVotei no partido Y. (I voted for party Y)\n\nNot: votei por X.\n\nBut you DO use 'por' when giving the reason:\n\nVotei por ele por causa das propostas.\n(I voted for him because of the proposals.)\n\nThis 'por causa' means 'because of', not 'for'.",
 deepDive:{title:"Political Verb Patterns",
  text:"Portuguese verbs often attach to unexpected prepositions. 'Confiar em' (to trust), 'acreditar em' (to believe in), 'votar em' (to vote for). The pattern 'verb + em' for political and psychological actions is strong. Memorize the preposition with the verb. English speakers often say 'votar por' by mistake, which sounds like a translation."}},

{type:"fb",
 s:"A {1} social no Brasil ainda é um dos maiores desafios.",
 a:["desigualdade"],
 opts:["desigualdade","democracia","reforma","manifestação"],
 hint:"The opposite of equality. A key social challenge.",
 sSrc:"Social {1} in Brazil is still one of the biggest challenges."},

{type:"fb",
 s:"A {1} de expressão é um pilar da democracia.",
 a:["liberdade"],
 opts:["liberdade","igualdade","responsabilidade","lei"],
 hint:"The right to speak freely. A core democratic value.",
 sSrc:"Freedom of expression is a pillar of democracy."},

{type:"mc",
 q:"How do you say 'to vote for someone' in Portuguese?",
 opts:["votar por alguém","votar em alguém","votar a alguém","votar com alguém"],
 ans:"votar em alguém",
 hint:"Portuguese uses a different preposition than English here."},

{type:"mc",
 q:"What does 'manifestação' mean?",
 opts:["meeting","protest","vote","election"],
 ans:"protest",
 hint:"A public gathering to express political views."},

{type:"fb",
 s:"A {1} no Brasil é um dos maiores problemas sociais.",
 a:["desigualdade"],
 opts:["desigualdade","igualdade","justiça","democracia"],
 hint:"The opposite of equality. Starts with 'des-'.",
 sSrc:"{1} in Brazil is one of the biggest social problems."},

{type:"fb",
 s:"Em quem você vai {1} nas próximas eleições?",
 a:["votar"],
 opts:["votar","manifestar","reformar","julgar"],
 hint:"The action of choosing a candidate in an election.",
 sSrc:"Who are you going to {1} for in the next elections?"},

{type:"match", pairs:[
 {trg:"democracia", src:"democracy"},
 {trg:"votar", src:"to vote"},
 {trg:"manifestação", src:"protest"},
 {trg:"reforma", src:"reform"},
 {trg:"justiça", src:"justice"},
 {trg:"oportunidade", src:"opportunity"}
]},

{type:"drag_fill",
 s:"A {1} social gera a necessidade de {2} profundas no sistema.",
 blanks:{"1":"desigualdade","2":"reforma"},
 pool:["desigualdade","reforma","democracia","justiça"],
 hint:"First blank: unequal distribution. Second blank: structural change."}
]},

{id:"ptv2_u25l3", title:"Ethics and Society", icon:"🤝", xp:15, board:true, steps:[
{type:"intro", title:"The Moral Dimension",
 desc:"Ethics gives us the language to judge right from wrong. Brazilians debate ethics constantly, from politics to business to family decisions.",
 goals:["Discuss ethics in abstract terms","Connect personal values to society","Build B2 opinion vocabulary"]},

{type:"teach", trg:"ética", src:"ethics", pos:"noun", gender:"f",
 note:"Moral principles guiding behavior. Also the philosophical field. 'Ética profissional' is work ethics.",
 example:"A: A ética na política é essencial.\nB: Mas nem sempre presente.",
 exampleSrc:"A: Ethics in politics is essential.\nB: But not always present.",
 funFact:"The Brazilian medical code is called the 'Código de Ética Médica', revised most recently in 2019."},

{type:"teach", trg:"valor", src:"value", pos:"noun", gender:"m",
 note:"A principle or ideal. Also means monetary value. Plural 'valores' often means moral values.",
 example:"A: Meus valores são da minha família.\nB: É assim com muitas pessoas.",
 exampleSrc:"A: My values are from my family.\nB: It's like that for many people.",
 funFact:"'Valores tradicionais' (traditional values) became a political slogan in the 2010s across Brazil."},

{type:"teach", trg:"sociedade", src:"society", pos:"noun", gender:"f",
 note:"The collective community. Also used for corporate entities ('sociedade anônima' = public company).",
 example:"A: A sociedade está mudando rapidamente.\nB: É verdade, cada década traz algo novo.",
 exampleSrc:"A: Society is changing rapidly.\nB: True, each decade brings something new.",
 funFact:"The Brazilian Portuguese phrase 'a sociedade civil' (civil society) gained weight during the 1980s redemocratization."},

{type:"teach", trg:"princípio", src:"principle", pos:"noun", gender:"m",
 note:"A fundamental rule or truth. 'Em princípio' means 'in principle'.",
 example:"A: É uma questão de princípio.\nB: Entendo sua posição.",
 exampleSrc:"A: It's a matter of principle.\nB: I understand your position.",
 funFact:"'Princípios constitucionais' are the foundational rules judges apply when interpreting Brazilian law."},

{type:"teach", trg:"opinião", src:"opinion", pos:"noun", gender:"f",
 note:"A personal view. 'Na minha opinião' (in my opinion) is the B2 essential phrase.",
 example:"A: Na minha opinião, devemos mudar.\nB: Respeito, mas discordo.",
 exampleSrc:"A: In my opinion, we should change.\nB: I respect that, but I disagree.",
 funFact:"'Formadores de opinião' (opinion makers) is how Brazilian media refers to influential commentators."},

{type:"teach", trg:"respeitar", src:"to respect", pos:"verb", gender:null,
 note:"Regular -ar verb. Works for people, rules, opinions, and traditions.",
 example:"A: Precisamos respeitar as diferenças.\nB: É o básico da convivência.",
 exampleSrc:"A: We need to respect differences.\nB: It's the basis of coexistence.",
 funFact:"'Respeito' is the noun form. 'Ter respeito por alguém' = to have respect for someone."},

{type:"teach", trg:"discordar", src:"to disagree", pos:"verb", gender:null,
 note:"To hold a different opinion. Pair with 'de': 'discordo de você' (I disagree with you).",
 example:"A: Discordo do que ele disse.\nB: Eu também achei estranho.",
 exampleSrc:"A: I disagree with what he said.\nB: I thought it was strange too.",
 funFact:"The opposite is 'concordar com'. The prepositions differ: discordar DE, concordar COM."},

{type:"tip", title:"Expressing Opinions at B2",
 text:"B2 Portuguese needs nuanced opinion phrases:\n\nNa minha opinião... (In my opinion)\nAcho que... (I think that)\nAcredito que... (I believe that)\nNo meu ponto de vista... (From my point of view)\nA meu ver... (As I see it)\n\nTo disagree politely:\n\nRespeito, mas discordo. (I respect that, but I disagree)\nVejo de outra forma. (I see it differently)\n\nEach phrase raises the register and makes you sound like an educated native speaker.",
 deepDive:{title:"Register in Opinion Giving",
  text:"Casual Portuguese uses 'acho que' constantly. Formal writing prefers 'acredito que' or 'entendo que'. Academic style uses 'sustento que' or 'defendo que'. Learning to switch registers is a B2 milestone. Use 'acho' with friends, 'acredito' with colleagues, and 'entendo' when you want to sound measured and thoughtful."}},

{type:"mc",
 q:"Which preposition goes with 'discordar'?",
 opts:["com","de","em","a"],
 ans:"de",
 hint:"Discordar takes a different preposition than English 'disagree with'."},

{type:"mc",
 q:"What does 'na minha opinião' mean?",
 opts:["in my head","in my opinion","in my way","in my house"],
 ans:"in my opinion",
 hint:"The most common B2 ___ phrase."},

{type:"fb",
 s:"A {1} profissional é importante em qualquer carreira.",
 a:["ética"],
 opts:["ética","opinião","sociedade","justiça"],
 hint:"Moral principles governing work behavior.",
 sSrc:"Professional {1} is important in any career."},

{type:"fb",
 s:"Precisamos {1} as opiniões diferentes.",
 a:["respeitar"],
 opts:["respeitar","discordar","votar","mudar"],
 hint:"The verb meaning to treat with consideration.",
 sSrc:"We need to {1} different opinions."},

{type:"match", pairs:[
 {trg:"ética", src:"ethics"},
 {trg:"valor", src:"value"},
 {trg:"sociedade", src:"society"},
 {trg:"princípio", src:"principle"},
 {trg:"opinião", src:"opinion"},
 {trg:"respeitar", src:"to respect"},
 {trg:"discordar", src:"to disagree"}
]},

{type:"mc",
 q:"Which phrase introduces a personal view?",
 opts:["Por exemplo","Na minha opinião","Por isso","De qualquer forma"],
 ans:"Na minha opinião",
 hint:"The B2 signature phrase for giving your view."},

{type:"fb",
 s:"A {1} civil exige mais responsabilidade dos governantes.",
 a:["sociedade"],
 opts:["sociedade","ética","opinião","princípio"],
 hint:"The collective community. Ends in -dade.",
 sSrc:"Civil {1} demands more accountability from leaders."},

{type:"fb",
 s:"Cada pessoa tem o direito de expressar sua {1}.",
 a:["opinião"],
 opts:["opinião","ética","sociedade","princípio"],
 hint:"A personal view or standpoint. Used with 'na minha'.",
 sSrc:"Every person has the right to express their {1}."},

{type:"drag_fill",
 s:"Na minha {1}, precisamos de mais {2} na política.",
 blanks:{"1":"opinião","2":"ética"},
 pool:["opinião","ética","sociedade","valor"],
 hint:"First blank: a personal view. Second blank: moral principles."}
]}

]}; export default UNIT_25;
