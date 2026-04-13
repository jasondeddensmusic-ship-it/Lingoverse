// L03: Work and Business — 20 B1 gap words
const LESSON_3 = {
  id:"nlv2_b1gap_l3", title:"Werk en Bedrijf", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Work and Business",
     desc:"Master Dutch vocabulary for the workplace, businesses, and the labor market. Essential for professional conversations.",
     goals:["Learn 20 work and business terms","Discuss companies and careers","Navigate the Dutch job market vocabulary"]},

    {type:"teach", trg:"de arbeid", src:"the labor / the work", pos:"noun", gender:"c",
     note:"Common gender (de). Formal word for work or labor.",
     example:"A: Arbeid is een belangrijk deel van het leven.\nB: Maar vrije tijd ook!",
     exampleSrc:"A: Labor is an important part of life.\nB: But free time too!",
     funFact:"Cognate with German 'Arbeit'. Used in formal and legal contexts more than 'werk'."},

    {type:"teach", trg:"de arbeidsmarkt", src:"the labor market", pos:"noun", gender:"c",
     note:"Common gender (de). Arbeid + markt compound.",
     example:"A: De arbeidsmarkt is krap.\nB: Er zijn meer banen dan werkzoekenden.",
     exampleSrc:"A: The labor market is tight.\nB: There are more jobs than job seekers.",
     funFact:"The Netherlands has one of Europe's lowest unemployment rates. A 'krappe arbeidsmarkt' means employers struggle to find workers."},

    {type:"teach", trg:"de ambtenaar", src:"the civil servant", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who works for the government.",
     example:"A: Mijn vader is ambtenaar bij de gemeente.\nB: Wat doet hij precies?",
     exampleSrc:"A: My father is a civil servant at the municipality.\nB: What does he do exactly?",
     funFact:"From 'ambt' (office/position). Dutch civil servants are known for good benefits and job security."},

    {type:"teach", trg:"de bedrijfsleider", src:"the business manager", pos:"noun", gender:"c",
     note:"Common gender (de). Bedrijf (company) + leider (leader).",
     example:"A: De bedrijfsleider wil een vergadering.\nB: Wanneer? Ik ben druk.",
     exampleSrc:"A: The business manager wants a meeting.\nB: When? I am busy.",
     funFact:"In Belgium, 'bedrijfsleider' often means CEO. In the Netherlands, 'directeur' is more common for the top boss."},

    {type:"mc",
     q:"Wie leidt een bedrijf en neemt belangrijke beslissingen?",
     opts:["de bedrijfsleider","de ambtenaar","de adviseur","de accountant"],
     ans:"de bedrijfsleider",
     hint:"Think about the person who runs a company day to day."},

    {type:"teach", trg:"het bedrijfsleven", src:"the business world", pos:"noun", gender:"n",
     note:"Neuter gender (het). The world of commerce and industry.",
     example:"A: Het bedrijfsleven groeit in Nederland.\nB: Vooral de techsector.",
     exampleSrc:"A: The business world is growing in the Netherlands.\nB: Especially the tech sector.",
     funFact:"Bedrijf + leven (life). The 'life of business'. Used in news and economics constantly."},

    {type:"teach", trg:"de bedrijfsnaam", src:"the company name", pos:"noun", gender:"c",
     note:"Common gender (de). Bedrijf + naam compound.",
     example:"A: Hebben jullie al een bedrijfsnaam gekozen?\nB: Ja, we noemen het 'Tulp Digital'.",
     exampleSrc:"A: Have you already chosen a company name?\nB: Yes, we are calling it 'Tulip Digital'.",
     funFact:"Registering a bedrijfsnaam at the KvK (Chamber of Commerce) is the first step for any Dutch business."},

    {type:"teach", trg:"de bedrijfstak", src:"the industry / the sector", pos:"noun", gender:"c",
     note:"Common gender (de). Bedrijf + tak (branch).",
     example:"A: In welke bedrijfstak werk je?\nB: In de gezondheidszorg.",
     exampleSrc:"A: In which industry do you work?\nB: In healthcare.",
     funFact:"Literally 'business branch'. Dutch loves compound nouns. Each 'tak' is a branch of the economic tree."},

    {type:"teach", trg:"de accountant", src:"the accountant", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword used in Dutch.",
     example:"A: Onze accountant doet de belastingaangifte.\nB: Gelukkig, ik snap er niets van.",
     exampleSrc:"A: Our accountant does the tax return.\nB: Fortunately, I understand nothing of it.",
     funFact:"Borrowed from English. A 'registeraccountant' (RA) is the certified public accountant equivalent."},

    {type:"fb",
     s:"Mijn broer is {1} bij de gemeente. Hij werkt voor de overheid.",
     a:["ambtenaar"],
     opts:["ambtenaar","accountant","bedrijfsleider","adviseur"],
     hint:"Which word describes someone employed by the government?",
     sSrc:"My brother is a {1} at the municipality. He works for the government."},

    {type:"teach", trg:"de adviseur", src:"the advisor / the consultant", pos:"noun", gender:"c",
     note:"Common gender (de). From 'adviseren' (to advise).",
     example:"A: We hebben een financieel adviseur nodig.\nB: Ik ken iemand. Zal ik bellen?",
     exampleSrc:"A: We need a financial advisor.\nB: I know someone. Shall I call?",
     funFact:"French origin via Latin 'advisare'. Dutch business culture relies heavily on external adviseurs."},

    {type:"teach", trg:"adviseren", src:"to advise / to recommend", pos:"verb", gender:null,
     note:"Inseparable verb. Ik adviseer, jij adviseert.",
     example:"A: Wat adviseer je?\nB: Ik adviseer om nog even te wachten.",
     exampleSrc:"A: What do you advise?\nB: I advise to wait a bit longer.",
     funFact:"Same Latin root as English 'advise'. Very common in professional Dutch."},

    {type:"teach", trg:"het adviesbureau", src:"the consulting firm", pos:"noun", gender:"n",
     note:"Neuter gender (het). Advies (advice) + bureau (office).",
     example:"A: Dat adviesbureau helpt bedrijven met hun strategie.\nB: Zijn ze goed?",
     exampleSrc:"A: That consulting firm helps companies with their strategy.\nB: Are they good?",
     funFact:"The Netherlands has many adviesbureaus. McKinsey has its European HQ in Amsterdam."},

    {type:"teach", trg:"de bedrijfswagen", src:"the company car", pos:"noun", gender:"c",
     note:"Common gender (de). Bedrijf + wagen (car).",
     example:"A: Krijg je een bedrijfswagen?\nB: Ja, dat zit in mijn contract.",
     exampleSrc:"A: Do you get a company car?\nB: Yes, that is in my contract.",
     funFact:"Company cars are a common employment benefit in the Netherlands and Belgium, with tax implications."},

    {type:"mc",
     q:"Een bedrijf dat andere bedrijven helpt met strategie en planning heet een ___.",
     opts:["adviesbureau","advocatenkantoor","arbeidsmarkt","accountant"],
     ans:"adviesbureau",
     hint:"Think about a firm that gives professional counsel to other businesses."},

    {type:"teach", trg:"de ambitie", src:"the ambition", pos:"noun", gender:"c",
     note:"Common gender (de). French/Latin loanword.",
     example:"A: Ze heeft veel ambitie.\nB: Ja, ze wil directeur worden.",
     exampleSrc:"A: She has a lot of ambition.\nB: Yes, she wants to become director.",
     funFact:"Nearly identical in English, Dutch, French, and German. Latin 'ambitio' meant 'going around' for votes."},

    {type:"teach", trg:"ambitieus", src:"ambitious", pos:"adj", gender:null,
     note:"Adjective. Describes someone with strong drive and goals.",
     example:"A: Hij is heel ambitieus.\nB: Daarom werkt hij zo hard.",
     exampleSrc:"A: He is very ambitious.\nB: That is why he works so hard.",
     funFact:"The -eus ending mirrors French '-eux'. Many Dutch adjectives for personality come from French."},

    {type:"teach", trg:"de arbeidsmigratie", src:"the labor migration", pos:"noun", gender:"c",
     note:"Common gender (de). Movement of workers across borders.",
     example:"A: Arbeidsmigratie is een actueel onderwerp.\nB: Vooral uit Oost-Europa.",
     exampleSrc:"A: Labor migration is a current topic.\nB: Especially from Eastern Europe.",
     funFact:"A major political topic in the Netherlands. Many workers come from Poland, Romania, and Bulgaria."},

    {type:"teach", trg:"de arbeidsongeschiktheid", src:"the disability (work)", pos:"noun", gender:"c",
     note:"Common gender (de). Inability to work due to health.",
     example:"A: Hij heeft een arbeidsongeschiktheid.\nB: Krijgt hij een uitkering?",
     exampleSrc:"A: He has a work disability.\nB: Does he receive benefits?",
     funFact:"The Netherlands has a comprehensive WIA system for people who cannot work due to illness or disability."},

    {type:"teach", trg:"baseren", src:"to base (on)", pos:"verb", gender:null,
     note:"Inseparable verb. Often used with 'op' (on).",
     example:"A: Waarop baseer je dat?\nB: Op de cijfers van vorig jaar.",
     exampleSrc:"A: What do you base that on?\nB: On last year's figures.",
     funFact:"From French 'baser'. Very common in business Dutch: 'gebaseerd op' (based on)."},

    {type:"match", pairs:[
      {trg:"arbeid", src:"labor"},
      {trg:"bedrijfstak", src:"industry/sector"},
      {trg:"ambitieus", src:"ambitious"},
      {trg:"adviseren", src:"to advise"},
      {trg:"baseren", src:"to base on"}
    ]},

    {type:"fb",
     s:"Ons plan is {1} op de resultaten van het onderzoek.",
     a:["gebaseerd"],
     opts:["gebaseerd","geadviseerd","geambitieerd","gearbeid"],
     hint:"Which past participle means something is founded upon or derived from data?",
     sSrc:"Our plan is {1} on the results of the research."},

    {type:"mc",
     q:"In welke sector werkt een verpleegster?",
     opts:["gezondheidszorg","adviesbureau","arbeidsmarkt","bedrijfsleven"],
     ans:"gezondheidszorg",
     hint:"Think about which industry involves caring for sick people in hospitals."}
  ]
};
export default LESSON_3;
