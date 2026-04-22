// L13: Communication and Media, 20 B1 gap words
const LESSON_13 = {
  id:"nlv2_b1gap_l13", title:"Communicatie en Media", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Communication and Media",
     desc:"Learn Dutch vocabulary for media, announcements, and how information is shared. Navigate news and official communication.",
     goals:["Master 20 communication and media terms","Discuss news and publications","Handle official correspondence"]},

    {type:"teach", trg:"de aankondiging", src:"the announcement", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aankondigen' (to announce).",
     example:"A: Heb je de aankondiging gelezen?\nB: Welke? Die van de directie?",
     exampleSrc:"A: Have you read the announcement?\nB: Which one? The one from management?",
     funFact:"Aan (on) + kondigen (to proclaim). Official announcements are common in Dutch workplaces."},

    {type:"teach", trg:"het aanhalingsteken", src:"the quotation mark", pos:"noun", gender:"n",
     note:"Neuter gender (het). Aanhaling (quote) + teken (sign).",
     example:"A: Vergeet de aanhalingstekens niet.\nB: Bij welk woord?",
     exampleSrc:"A: Don't forget the quotation marks.\nB: At which word?",
     funFact:"Dutch quotation marks can be either \"...\" or '...'. Newspapers and publishers differ in style."},

    {type:"teach", trg:"de aanduiding", src:"the indication / the label", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanduiden' (to indicate).",
     example:"A: De aanduiding op het etiket is onduidelijk.\nB: Ik kan het niet lezen.",
     exampleSrc:"A: The label on the tag is unclear.\nB: I cannot read it.",
     funFact:"Aan + duiding (pointing). A formal word for any kind of designation or indication."},

    {type:"teach", trg:"aanduiden", src:"to indicate / to designate", pos:"verb", gender:null,
     note:"Separable verb. Ik duid aan, jij duidt aan.",
     example:"A: Wat duidt dit symbool aan?\nB: Het betekent 'gevaar'.",
     exampleSrc:"A: What does this symbol indicate?\nB: It means 'danger'.",
     funFact:"More formal than 'aangeven'. Used in official and academic Dutch."},

    {type:"mc",
     q:"De school stuurt een ___ over de nieuwe regels.",
     opts:["aankondiging","aanhalingsteken","aanduiding","aanspreekpunt"],
     ans:"aankondiging",
     hint:"Which word describes an official notice or message about something new?"},

    {type:"teach", trg:"het aanspreekpunt", src:"the point of contact", pos:"noun", gender:"n",
     note:"Neuter gender (het). Aanspreken (to address) + punt (point).",
     example:"A: Wie is het aanspreekpunt voor klachten?\nB: Dat is mevrouw De Boer.",
     exampleSrc:"A: Who is the point of contact for complaints?\nB: That is Mrs. De Boer.",
     funFact:"Very common in Dutch organizations. Everyone has an 'aanspreekpunt' for different topics."},

    {type:"teach", trg:"aanspreken", src:"to address / to appeal to", pos:"verb", gender:null,
     note:"Separable verb. Ik spreek aan, jij spreekt aan.",
     example:"A: Dat boek spreekt me echt aan.\nB: Waarom? Wat vind je er leuk aan?",
     exampleSrc:"A: That book really appeals to me.\nB: Why? What do you like about it?",
     funFact:"Aan + spreken (to speak). Two meanings: to talk to someone, or something that 'speaks to' you (appeals)."},

    {type:"teach", trg:"de aanleiding", src:"the cause / the reason", pos:"noun", gender:"c",
     note:"Common gender (de). The immediate trigger for something.",
     example:"A: Wat was de aanleiding voor het protest?\nB: De nieuwe belastingwet.",
     exampleSrc:"A: What was the reason for the protest?\nB: The new tax law.",
     funFact:"Aan + leiding (leading). The thing that 'leads to' an event. More specific than 'reden' (reason)."},

    {type:"teach", trg:"het aangetekend", src:"registered (mail)", pos:"adj", gender:null,
     note:"Adjective. Mail that requires signature on delivery.",
     example:"A: Ik moet een aangetekende brief versturen.\nB: Dat kan bij het postkantoor.",
     exampleSrc:"A: I need to send a registered letter.\nB: You can do that at the post office.",
     funFact:"'Aangetekend versturen' is still common for legal documents in the Netherlands."},

    {type:"fb",
     s:"Wat was de {1} voor je beslissing om te verhuizen?",
     a:["aanleiding"],
     opts:["aanleiding","aankondiging","aanduiding","aanmerking"],
     hint:"Which word means the immediate cause or trigger for a decision?",
     sSrc:"What was the {1} for your decision to move?"},

    {type:"teach", trg:"de beeldverhaal", src:"the comic / the graphic story", pos:"noun", gender:"n",
     note:"Neuter gender (het). Beeld (image) + verhaal (story).",
     example:"A: Kuifje is een beroemd beeldverhaal.\nB: Ja, het komt uit België!",
     exampleSrc:"A: Tintin is a famous comic.\nB: Yes, it comes from Belgium!",
     funFact:"'Beeldverhaal' is more common in Belgium. In the Netherlands, 'stripverhaal' or 'strip' is preferred."},

    {type:"teach", trg:"het audioboek", src:"the audiobook", pos:"noun", gender:"n",
     note:"Neuter gender (het). Audio + boek compound.",
     example:"A: Luister je naar audioboeken?\nB: Ja, tijdens het fietsen.",
     exampleSrc:"A: Do you listen to audiobooks?\nB: Yes, while cycling.",
     funFact:"Audiobooks are booming in the Netherlands. Storytel and other platforms are very popular."},

    {type:"teach", trg:"de autobiografie", src:"the autobiography", pos:"noun", gender:"c",
     note:"Common gender (de). A book about one's own life.",
     example:"A: Ze schreef haar autobiografie op haar vijftigste.\nB: Is die goed?",
     exampleSrc:"A: She wrote her autobiography at age fifty.\nB: Is it good?",
     funFact:"Auto (self) + bio (life) + grafie (writing). Three Greek roots combined into one Dutch word."},

    {type:"teach", trg:"het argument", src:"the argument / the point", pos:"noun", gender:"n",
     note:"Neuter gender (het). A reason given in a debate.",
     example:"A: Dat is een sterk argument.\nB: Dank je, ik heb er goed over nagedacht.",
     exampleSrc:"A: That is a strong argument.\nB: Thanks, I thought about it carefully.",
     funFact:"Same word across many European languages. In Dutch, 'argument' means a point in a debate, not a fight."},

    {type:"teach", trg:"de activiteitenkalender", src:"the activities calendar", pos:"noun", gender:"c",
     note:"Common gender (de). Activiteiten + kalender compound.",
     example:"A: Staat het evenement op de activiteitenkalender?\nB: Ja, op de vijftiende.",
     exampleSrc:"A: Is the event on the activities calendar?\nB: Yes, on the fifteenth.",
     funFact:"Every Dutch school, community center, and company has one. 'Activiteitenkalender' is 22 letters long."},

    {type:"mc",
     q:"Je wilt een boek over iemands eigen leven lezen. Je zoekt een ___.",
     opts:["activiteitenkalender","autobiografie","audioboek","beeldverhaal"],
     ans:"autobiografie",
     hint:"Which word describes a book someone writes about their own life story?"},

    {type:"teach", trg:"accentueren", src:"to accentuate / to emphasize", pos:"verb", gender:null,
     note:"Inseparable verb. Ik accentueer, jij accentueert.",
     example:"A: Ze accentueert altijd het positieve.\nB: Dat vind ik fijn aan haar.",
     exampleSrc:"A: She always emphasizes the positive.\nB: I like that about her.",
     funFact:"French origin. More formal than 'benadrukken' (to emphasize), which is the everyday Dutch choice."},

    {type:"teach", trg:"de aanpak", src:"the approach / the strategy", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanpakken' (to tackle).",
     example:"A: We hebben een nieuwe aanpak nodig.\nB: Wat stel je voor?",
     exampleSrc:"A: We need a new approach.\nB: What do you suggest?",
     funFact:"Aan + pak (grab). You 'grab onto' a problem. Very common in Dutch business and politics."},

    {type:"teach", trg:"de aansluiting", src:"the connection / the link", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aansluiten' (to connect).",
     example:"A: De aansluiting op het netwerk is verbroken.\nB: Herstart de router.",
     exampleSrc:"A: The connection to the network is broken.\nB: Restart the router.",
     funFact:"Used for train connections, internet links, and membership affiliations."},

    {type:"teach", trg:"de aanwinst", src:"the acquisition / the asset", pos:"noun", gender:"c",
     note:"Common gender (de). Something valuable that has been gained.",
     example:"A: De nieuwe collega is een aanwinst voor het team.\nB: Ja, ze is heel slim.",
     exampleSrc:"A: The new colleague is an asset to the team.\nB: Yes, she is very smart.",
     funFact:"Aan + winst (profit/gain). Libraries use it for new books: 'aanwinsten van de maand'."},

    {type:"match", pairs:[
      {trg:"aankondiging", src:"announcement"},
      {trg:"aanleiding", src:"cause/reason"},
      {trg:"aanpak", src:"approach"},
      {trg:"argument", src:"argument/point"},
      {trg:"aanwinst", src:"acquisition/asset"}
    ]},

    {type:"fb",
     s:"Dat boek {1} me echt ___. Ik kon niet stoppen met lezen.",
     a:["spreekt aan"],
     opts:["spreekt aan","duidt aan","kondigt aan","accentueert"],
     hint:"Which separable verb means something appeals to you or captures your interest?",
     sSrc:"That book really {1} to me. I could not stop reading."},

    {type:"mc",
     q:"De brief moet met een handtekening worden ontvangen. Je stuurt hem ___.",
     opts:["aankomend","beduidend","aangetekend","afzonderlijk"],
     ans:"aangetekend",
     hint:"Which type of mail requires the recipient to sign for delivery?"}
  ]
};
export default LESSON_13;
