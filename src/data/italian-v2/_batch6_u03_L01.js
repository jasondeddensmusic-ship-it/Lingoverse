// Batch 6 — Unit 03 extra lesson. La famiglia: Stages of Life & Celebrations
const BATCH6_L1 = {id:"itv2_u03l_b6_1", title:"Le fasi della vita", icon:"\u{1F382}", xp:15, board:true, steps:[
{type:"intro", title:"Le fasi della vita",
 desc:"Learn vocabulary for life stages, celebrations, and family milestones in Italian culture.",
 goals:["Name key life stages from birth to old age","Talk about celebrations and milestones","Discuss family events"]},

{type:"teach", trg:"la nascita", src:"the birth", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le nascite.\nFrom 'nascere' (to be born).",
 example:"A: Quando e stata la nascita del bambino?\nB: Ieri mattina alle sei.",
 exampleSrc:"A: When was the baby's birth?\nB: Yesterday morning at six.",
 funFact:"In Italy, the birth of a child is announced with a fiocco (ribbon) on the door: blue for boys, pink for girls."},

{type:"teach", trg:"crescere", src:"to grow / to grow up", pos:"verb", gender:null,
 note:"Irregular verb. cresco, cresci, cresce.\nPast participle: cresciuto (uses essere).",
 example:"A: Dove sei cresciuto?\nB: Sono cresciuto a Napoli.",
 exampleSrc:"A: Where did you grow up?\nB: I grew up in Naples.",
 funFact:"'Crescere' uses 'essere' in compound tenses: 'sono cresciuto.' The transitive use (to raise children) takes 'avere': 'ho cresciuto tre figli.'"},

{type:"teach", trg:"l'infanzia", src:"the childhood", pos:"noun", gender:"f",
 note:"Feminine noun. No common plural.\nThe period from birth to about age 10.",
 example:"A: Com'era la tua infanzia?\nB: Bellissima, giocavo sempre fuori.",
 exampleSrc:"A: How was your childhood?\nB: Beautiful, I always played outside.",
 funFact:"'Infante' originally meant 'one who cannot speak' (Latin 'in' + 'fans'). The Spanish title 'infante' for a prince shares this origin."},

{type:"teach", trg:"l'adolescenza", src:"the adolescence / teenage years", pos:"noun", gender:"f",
 note:"Feminine noun. From Latin 'adolescere' (to grow up).\nApproximate ages 13 to 18.",
 example:"A: L'adolescenza e un periodo difficile.\nB: Si, ma anche bello.",
 exampleSrc:"A: Adolescence is a difficult period.\nB: Yes, but also beautiful.",
 funFact:"In Italy, the end of adolescence is marked by the 'esame di maturita' (maturity exam) at age 18, a rite of passage for every student."},

{type:"teach", trg:"il fidanzamento", src:"the engagement", pos:"noun", gender:"m",
 note:"Masculine noun. From 'fidanzarsi' (to get engaged).\nPlural: i fidanzamenti.",
 example:"A: Avete annunciato il fidanzamento?\nB: Si, la scorsa settimana!",
 exampleSrc:"A: Have you announced the engagement?\nB: Yes, last week!",
 funFact:"Italian distinguishes between 'fidanzato/a' (boyfriend/girlfriend) and 'promesso/a sposo/a' (formally engaged). Many use 'fidanzato' loosely for any partner."},

{type:"teach", trg:"il matrimonio", src:"the marriage / wedding", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i matrimoni.\nBoth the ceremony and the institution.",
 example:"A: Il matrimonio e sabato prossimo.\nB: Che bello! Dove?",
 exampleSrc:"A: The wedding is next Saturday.\nB: How lovely! Where?",
 funFact:"Italian weddings traditionally include 'confetti' (sugar-coated almonds), not the paper kind. Five almonds symbolize health, wealth, happiness, fertility, and long life."},

{type:"teach", trg:"il battesimo", src:"the baptism / christening", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i battesimi.\nA major family celebration in Italian culture.",
 example:"A: Il battesimo e domenica in chiesa.\nB: Chi sono i padrini?",
 exampleSrc:"A: The baptism is on Sunday at church.\nB: Who are the godparents?",
 funFact:"The 'padrino' (godfather) and 'madrina' (godmother) play important social roles in Italian families. The term 'padrino' was famously used in the Coppola film title."},

{type:"teach", trg:"il padrino", src:"the godfather", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la madrina (godmother).\nFrom 'padre' (father) + diminutive.",
 example:"A: Chi e il padrino del bambino?\nB: Mio fratello Marco.",
 exampleSrc:"A: Who is the baby's godfather?\nB: My brother Marco.",
 funFact:"Being chosen as padrino is a great honor in Italian families. The role carries social expectations of guidance and support throughout the child's life."},

{type:"teach", trg:"la vecchiaia", src:"the old age", pos:"noun", gender:"f",
 note:"Feminine noun. No common plural.\nFrom 'vecchio' (old). The final stage of life.",
 example:"A: I nonni vivono una vecchiaia serena.\nB: Sono molto felici insieme.",
 exampleSrc:"A: The grandparents live a peaceful old age.\nB: They are very happy together.",
 funFact:"Italy has one of the oldest populations in Europe. The concept of 'la bella vecchiaia' (beautiful old age) reflects Italian respect for elders."},

{type:"teach", trg:"il ricordo", src:"the memory / souvenir", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i ricordi.\nFrom 'ricordare' (to remember).",
 example:"A: Hai bei ricordi dell'infanzia?\nB: Si, tantissimi!",
 exampleSrc:"A: Do you have nice memories of childhood?\nB: Yes, so many!",
 funFact:"'Ricordare' literally means 'to bring back to the heart' (ri + cor/cordis). Both 'memory' and 'souvenir' are 'ricordo' in Italian."},

{type:"teach", trg:"festeggiare", src:"to celebrate", pos:"verb", gender:null,
 note:"Regular -are verb. festeggio, festeggi, festeggia.\nFrom 'festa' (party/celebration).",
 example:"A: Come festeggiate il compleanno?\nB: Con una grande cena in famiglia.",
 exampleSrc:"A: How do you celebrate the birthday?\nB: With a big family dinner.",
 funFact:"Italians celebrate both birthdays and 'onomastico' (name day), the feast day of the saint they are named after. In some regions, the name day is more important."},

{type:"teach", trg:"l'onomastico", src:"the name day", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli onomastici.\nThe feast day of the saint whose name you share.",
 example:"A: Buon onomastico, Marco!\nB: Grazie! E il giorno di San Marco.",
 exampleSrc:"A: Happy name day, Marco!\nB: Thank you! It is the day of Saint Mark.",
 funFact:"Every day on the Italian calendar is associated with a saint. If you are named Giovanni, your onomastico is June 24th, the feast of Saint John."},

{type:"teach", trg:"invecchiare", src:"to age / to grow old", pos:"verb", gender:null,
 note:"Regular -are verb. invecchio, invecchi, invecchia.\nFrom 'vecchio' (old).",
 example:"A: Il vino invecchia bene.\nB: Come mio nonno!",
 exampleSrc:"A: The wine ages well.\nB: Like my grandfather!",
 funFact:"In Italian, 'invecchiare' is used for both people and things (wine, cheese). The positive connotation for food and drink contrasts with its use for people."},

{type:"teach", trg:"ereditare", src:"to inherit", pos:"verb", gender:null,
 note:"Regular -are verb. eredito, erediti, eredita.\nUsed for property, traits, and traditions.",
 example:"A: Ho ereditato questa casa dai nonni.\nB: Che bel ricordo di famiglia!",
 exampleSrc:"A: I inherited this house from my grandparents.\nB: What a beautiful family memory!",
 funFact:"Italian inheritance law guarantees a 'quota legittima' (legitimate share) to close family members. You cannot fully disinherit your children under Italian law."},

{type:"mc", q:"Come si dice 'wedding' in italiano?",
 opts:["il matrimonio","il battesimo","il fidanzamento","l'onomastico"],
 ans:"il matrimonio",
 hint:"The ceremony where two people get married. Also means 'marriage.'"},

{type:"fb", s:"Dove sei {1}? A Roma o a Milano?", a:["cresciuto"],
 opts:["cresciuto","festeggiato","ereditato","invecchiato"],
 hint:"Past participle of the verb meaning 'to grow up.' Uses essere.",
 sSrc:"Where did you {1}? In Rome or in Milan?"},

{type:"match", pairs:[
 {trg:"la nascita", src:"birth"},
 {trg:"l'infanzia", src:"childhood"},
 {trg:"la vecchiaia", src:"old age"},
 {trg:"il ricordo", src:"memory"}
]},

{type:"mc", q:"Cos'e l'onomastico?",
 opts:["The feast day of the saint you are named after","Your birthday","A wedding anniversary","A baptism celebration"],
 ans:"The feast day of the saint you are named after",
 hint:"Every Italian name has a corresponding s...'s d... on the calendar."},

{type:"fb", s:"Il bambino ha il {1} domenica in chiesa.", a:["battesimo"],
 opts:["battesimo","matrimonio","fidanzamento","onomastico"],
 hint:"The religious ceremony for a newborn, with a godfather and godmother.",
 sSrc:"The baby has the {1} on Sunday at church."},

{type:"mc", q:"Cosa significa 'ereditare'?",
 opts:["to inherit","to celebrate","to age","to grow up"],
 ans:"to inherit",
 hint:"What happens when property or traits pass from one generation to the next."},

{type:"fb", s:"Come {1} il compleanno di tuo figlio?", a:["festeggiate"],
 opts:["festeggiate","ereditate","invecchiate","crescete"],
 hint:"The verb meaning 'to celebrate' in the voi form.",
 sSrc:"How do you (plural) {1} your son's birthday?"},

{type:"match", pairs:[
 {trg:"festeggiare", src:"to celebrate"},
 {trg:"crescere", src:"to grow up"},
 {trg:"invecchiare", src:"to age"},
 {trg:"ereditare", src:"to inherit"}
]}
]};
export default BATCH6_L1;
