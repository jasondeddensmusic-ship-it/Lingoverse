// Italian V2 Unit 03. La famiglia (Family & People) (A1.1)
import BATCH8_L1 from './_batch8_u03_L01.js';
import BATCH7_L1 from './_batch7_u03_L01.js';
import BATCH6_L1 from './_batch6_u03_L01.js';
import BATCH4_L02 from './_batch4_u03_L02.js';
import BATCH4_L01 from './_batch4_u03_L01.js';
import BATCH2_L02 from './_batch2_u03_L02.js';
import BATCH2_L01 from './_batch2_u03_L01.js';
// CILS/CELI A1 aligned. Family members, describing people, possessives.
import EXP_03_L1 from './_temp_u03_expand_L01.js';import EXP_03_L2 from './_temp_u03_expand_L02.js';import EXP_03_L3 from './_temp_u03_expand_L03.js';

import COVERAGE_U03 from './_coverage_u03.js';
const UNIT_03 = {
  n:3, lang:"it", srcLang:"en", track:"v2",
  title:"La famiglia", sub:"Family & People",
  icon:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u3l1", title:"La mia famiglia", icon:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67", xp:15, board:true, steps:[
      {type:"intro", title:"La mia famiglia",
       desc:"Learn the Italian words for close family members and how to talk about your family.",
       goals:["Name immediate family members","Introduce family members","Understand gender patterns in family words"]},

      {type:"teach", trg:"la famiglia", src:"the family", pos:"noun", gender:"f",
       note:"Always feminine. Famiglia comes from Latin 'familia.'\nThe -glia ending has a unique sound: like 'ly' + 'a.'",
       example:"A: La tua famiglia e grande?\nB: Si, ho una famiglia grande!",
       exampleSrc:"A: Is your family big?\nB: Yes, I have a big family!",
       funFact:"In Italian culture, 'la famiglia' extends far beyond parents and children. Sunday lunch with extended family is still a sacred tradition in most regions."},

      {type:"teach", trg:"la madre", src:"the mother", pos:"noun", gender:"f",
       note:"Formal word for mother. In everyday speech, Italians say 'mamma.'\nArticle: la (feminine).",
       example:"A: Dov'e tua madre?\nB: Mia madre e in cucina.",
       exampleSrc:"A: Where is your mother?\nB: My mother is in the kitchen.",
       funFact:"'Mamma mia!' is probably the most famous Italian exclamation worldwide. It literally means 'my mother!' and expresses surprise. Italians really do say it constantly."},

      {type:"teach", trg:"il padre", src:"the father", pos:"noun", gender:"m",
       note:"Formal word for father. Everyday speech: 'papa' (stress on final a).\nArticle: il (masculine).",
       example:"A: Come si chiama tuo padre?\nB: Mio padre si chiama Marco.",
       exampleSrc:"A: What is your father's name?\nB: My father's name is Marco.",
       funFact:"'Papa' with stress on the second syllable means 'dad.' But 'il Papa' with stress on the first syllable means 'the Pope.' Stress placement changes meaning entirely."},

      {type:"teach", trg:"il figlio", src:"the son", pos:"noun", gender:"m",
       note:"Masculine. Plural: i figli (also means 'children' in general).\nThe -glio ending sounds like 'lyo.'",
       example:"A: Hai figli?\nB: Si, ho un figlio.",
       exampleSrc:"A: Do you have children?\nB: Yes, I have a son.",
       funFact:"From Latin 'filius.' English words like 'filial' and 'affiliate' share this root. The Spanish equivalent is 'hijo,' showing how Latin f- became h- in Spanish."},

      {type:"teach", trg:"la figlia", src:"the daughter", pos:"noun", gender:"f",
       note:"Feminine form of figlio. Plural: le figlie.\nNote the gender swap: -o (m) to -a (f).",
       example:"A: Quanti figli hai?\nB: Ho una figlia e un figlio.",
       exampleSrc:"A: How many children do you have?\nB: I have a daughter and a son.",
       funFact:"The classic -o/-a gender pattern (figlio/figlia, nonno/nonna) is the most regular pattern in Italian. When you see this pair, masculine is always -o and feminine is always -a."},
{type:"match",pairs:[{trg:"la madre",src:"the mother"},{trg:"il padre",src:"the father"},{trg:"il figlio",src:"the son"},{trg:"la figlia",src:"the daughter"}]},

      {type:"teach", trg:"il fratello", src:"the brother", pos:"noun", gender:"m",
       note:"Masculine. Plural: i fratelli (also means 'siblings').\nFrom Latin 'frater.'",
       example:"A: Hai fratelli?\nB: Si, ho due fratelli.",
       exampleSrc:"A: Do you have brothers?\nB: Yes, I have two brothers.",
       funFact:"'Fratelli d'Italia' (Brothers of Italy) is the first line of the Italian national anthem. The word shares the same Latin root as English 'fraternity.'"},

      {type:"teach", trg:"la sorella", src:"the sister", pos:"noun", gender:"f",
       note:"Feminine. Plural: le sorelle.\nFrom Latin 'soror.'",
       example:"A: Come si chiama tua sorella?\nB: Mia sorella si chiama Giulia.",
       exampleSrc:"A: What is your sister's name?\nB: My sister's name is Giulia.",
       funFact:"Latin 'soror' also gives us English 'sorority.' In some Italian dialects, the affectionate form is 'sorellina' (little sister), adding the diminutive -ina."},

      {type:"teach", trg:"il nonno", src:"the grandfather", pos:"noun", gender:"m",
       note:"Masculine. Plural: i nonni (means 'grandparents').\nA warm, affectionate word.",
       example:"A: Dove vive il nonno?\nB: Il nonno vive a Napoli.",
       exampleSrc:"A: Where does grandfather live?\nB: Grandfather lives in Naples.",
       funFact:"'Nonno' likely comes from a child's babbling, similar to how 'nana' and 'nanny' developed in English. It has been used since medieval Italian."},

      {type:"teach", trg:"la nonna", src:"the grandmother", pos:"noun", gender:"f",
       note:"Feminine form of nonno. Plural: le nonne.\nThe quintessential Italian family figure.",
       example:"A: La nonna cucina bene?\nB: Si, la nonna cucina benissimo!",
       exampleSrc:"A: Does grandmother cook well?\nB: Yes, grandmother cooks very well!",
       funFact:"The stereotype of the Italian nonna who feeds everyone is rooted in reality. 'La cucina della nonna' (grandma's cooking) is considered the gold standard of Italian home cooking."},

      {type:"teach", trg:"lo zio", src:"the uncle", pos:"noun", gender:"m",
       note:"Uses article 'lo' (not 'il') because it starts with z.\nPlural: gli zii.",
       example:"A: Chi e quello?\nB: E mio zio Roberto.",
       exampleSrc:"A: Who is that?\nB: That's my uncle Roberto.",
       funFact:"Words starting with z, s+consonant, gn, ps, or x take 'lo' instead of 'il.' This rule exists because 'il zio' would be awkward to pronounce. Italian loves smooth sounds."},
{type:"match",pairs:[{trg:"la sorella",src:"the sister"},{trg:"il nonno",src:"the grandfather"},{trg:"la nonna",src:"the grandmother"},{trg:"lo zio",src:"the uncle"}]},

      {type:"teach", trg:"la zia", src:"the aunt", pos:"noun", gender:"f",
       note:"Feminine form of zio. Plural: le zie.\nArticle: la (regular feminine).",
       example:"A: Hai una zia?\nB: Si, ho una zia a Roma.",
       exampleSrc:"A: Do you have an aunt?\nB: Yes, I have an aunt in Rome.",
       funFact:"Both 'zio' and 'zia' come from Late Latin 'thius/thia,' borrowed from Greek 'theios.' They replaced the older Latin words 'avunculus' (which gave English 'uncle')."},

      {type:"teach", trg:"il cugino", src:"the cousin (male)", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cugina.\nFrom Latin 'consobrinus' (mother's sister's child).",
       example:"A: Chi e Marco?\nB: E mio cugino. Abita a Milano.",
       exampleSrc:"A: Who is Marco?\nB: He's my cousin. He lives in Milan.",
       funFact:"Italian distinguishes male and female cousins: cugino/cugina. English lost this distinction, but French kept it too (cousin/cousine). The words share the same Latin origin."},

      // Quiz steps
      {type:"mc", q:"Come si dice 'mother' in italiano?",
       opts:["La madre","La sorella","La nonna","La zia"],
       ans:"La madre",
       hint:"Think of the English word 'maternal.' Both words share a Latin root starting with 'matr-.'"},

      {type:"mc", q:"Come si dice 'brother' in italiano?",
       opts:["Il cugino","Il fratello","Il nonno","Il padre"],
       ans:"Il fratello",
       hint:"Think of the English word 'fraternity,' which means a brotherhood. Same Latin root."},

      {type:"fb", s:"Ho una {1} e un fratello.",
       a:["sorella"],
       opts:["sorella","fratello","madre","figlia"],
       hint:"You are describing a female sibling. This is the feminine counterpart of 'fratello.'",
       sSrc:"I have a {1} and a brother."},

      {type:"fb", s:"Il {1} vive a Napoli.",
       a:["nonno"],
       opts:["nonno","padre","figlio","zio"],
       hint:"This is the word for your father's father or mother's father. An elderly family figure.",
       sSrc:"The {1} lives in Naples."},

      {type:"match", pairs:[
        {trg:"la madre", src:"the mother"},
        {trg:"il padre", src:"the father"},
        {trg:"la sorella", src:"the sister"},
        {trg:"il fratello", src:"the brother"},
        {trg:"la nonna", src:"the grandmother"}
      ]},

      {type:"mc", q:"Which article goes with 'zio'?",
       opts:["la","il","lo","i"],
       ans:"lo",
       hint:"Words starting with z take a special masculine article, not the usual 'il.'"},

      {type:"fb", s:"Mia {1} si chiama Giulia.",
       a:["zia"],
       opts:["zia","madre","nonna","sorella"],
       hint:"This is the feminine form of 'zio.' She is your parent's sister.",
       sSrc:"My {1} is named Giulia."},

      {type:"mc", q:"How do you say 'cousin (male)' in Italian?",
       opts:["Il figlio","Lo zio","Il fratello","Il cugino"],
       ans:"Il cugino",
       hint:"From Latin 'consobrinus.' The English word 'cousin' comes from the same root through French."}
    ]},

    {id:"itv2_u3l2", title:"Come sono?", icon:"\ud83d\ude4d", xp:15, board:true, steps:[
      {type:"intro", title:"Come sono?",
       desc:"Learn adjectives to describe people's appearance and personality in Italian.",
       goals:["Describe people's physical appearance","Talk about personality traits","Understand adjective gender agreement"]},

      {type:"tip", title:"Adjective agreement",
       text:"Italian adjectives must agree with the noun in gender and number.\n- Masculine singular: -o (alto)\n- Feminine singular: -a (alta)\n- Masculine plural: -i (alti)\n- Feminine plural: -e (alte)\n\nAdjectives ending in -e (like grande) use -e for both genders in singular, -i for both in plural.",
       deepDive:"This is one of the most important grammar patterns in Italian. Every time you use an adjective, you must check: is the noun masculine or feminine? singular or plural? Then change the ending to match. Adjectives usually come AFTER the noun: 'un uomo alto' (a tall man), not 'un alto uomo.'"},

      {type:"teach", trg:"alto", src:"tall", pos:"adj", gender:null,
       note:"Masculine: alto. Feminine: alta.\nPlural: alti (m), alte (f). Regular -o/-a pattern.",
       example:"A: Tuo fratello e alto?\nB: Si, e molto alto!",
       exampleSrc:"A: Is your brother tall?\nB: Yes, he is very tall!",
       funFact:"From Latin 'altus' meaning 'high.' English uses it in music: 'alto' is the high female voice range. In Italian, 'alto' describes height for people and buildings alike."},

      {type:"teach", trg:"basso", src:"short (height)", pos:"adj", gender:null,
       note:"Masculine: basso. Feminine: bassa.\nOnly for height, not length. From Latin 'bassus.'",
       example:"A: Sei alto o basso?\nB: Sono basso, ma mio padre e alto.",
       exampleSrc:"A: Are you tall or short?\nB: I'm short, but my father is tall.",
       funFact:"In music, 'basso' means the lowest male voice range. The musical instrument 'bass' gets its name from this Italian word. Low pitch, low height: same concept."},

      {type:"teach", trg:"giovane", src:"young", pos:"adj", gender:null,
       note:"Same form for masculine and feminine (-e ending).\nPlural: giovani (both genders).",
       example:"A: La zia e giovane?\nB: Si, la zia e molto giovane.",
       exampleSrc:"A: Is the aunt young?\nB: Yes, the aunt is very young.",
       funFact:"From Latin 'juvenis,' which also gives English 'juvenile' and 'rejuvenate.' The Italian word for 'youth' is 'gioventu,' and young people are 'i giovani.'"},

      {type:"teach", trg:"vecchio", src:"old", pos:"adj", gender:null,
       note:"Masculine: vecchio. Feminine: vecchia.\nCan be considered impolite. Use 'anziano' for elderly people.",
       example:"A: Il nonno e vecchio?\nB: Si, ha ottanta anni.",
       exampleSrc:"A: Is grandfather old?\nB: Yes, he is eighty years old.",
       funFact:"For objects, 'vecchio' is neutral (una vecchia macchina = an old car). For people, Italians prefer 'anziano' (elderly) which sounds more respectful. Calling someone 'vecchio' to their face is rude."},

      {type:"teach", trg:"bello", src:"beautiful / handsome", pos:"adj", gender:null,
       note:"Masculine: bello. Feminine: bella.\nBefore nouns, behaves like articles: bel, bell', bei, begli.",
       example:"A: Come e tuo cugino?\nB: E molto bello!",
       exampleSrc:"A: What is your cousin like?\nB: He is very handsome!",
       funFact:"'Ciao bella!' or 'Ciao bello!' is a common casual greeting among friends in Italy. It is NOT romantic. Italians use 'bello/bella' as a friendly term of endearment like 'dear.'"},
{type:"match",pairs:[{trg:"basso",src:"short (height)"},{trg:"giovane",src:"young"},{trg:"vecchio",src:"old"},{trg:"bello",src:"beautiful / handsome"}]},

      {type:"teach", trg:"simpatico", src:"likeable / nice", pos:"adj", gender:null,
       note:"Masculine: simpatico. Feminine: simpatica.\nFalse friend: does NOT mean 'sympathetic.'",
       example:"A: Come e la nonna?\nB: E molto simpatica!",
       exampleSrc:"A: What is grandmother like?\nB: She is very nice!",
       funFact:"This is a classic false friend. English 'sympathetic' means feeling sorry for someone. Italian 'simpatico' means pleasant, likeable, fun to be around. The opposite is 'antipatico' (unlikeable)."},

      {type:"teach", trg:"grande", src:"big / great", pos:"adj", gender:null,
       note:"Same form for both genders (-e ending).\nPlural: grandi. Before nouns can shorten to 'gran.'",
       example:"A: Hai una famiglia grande?\nB: Si, molto grande! Siamo in dieci.",
       exampleSrc:"A: Do you have a big family?\nB: Yes, very big! There are ten of us.",
       funFact:"'Grande' works for size AND quality. 'Un grande uomo' (a great man) vs 'un uomo grande' (a big man). Position before or after the noun changes the meaning."},

      {type:"teach", trg:"piccolo", src:"small / little", pos:"adj", gender:null,
       note:"Masculine: piccolo. Feminine: piccola.\nPlural: piccoli (m), piccole (f).",
       example:"A: La figlia e grande?\nB: No, e ancora piccola.",
       exampleSrc:"A: Is the daughter big?\nB: No, she is still little.",
       funFact:"The word 'piccolo' in English refers to a small flute. In Italian, it simply means 'small.' The diminutive suffix -ino/-ina does the same job: 'fratellino' (little brother)."},

      // Quiz steps
      {type:"mc", q:"What does 'simpatico' mean?",
       opts:["Likeable / nice","Sympathetic to others","Simple and plain","Similar in looks"],
       ans:"Likeable / nice",
       hint:"This is a false friend. It does NOT mean what the English lookalike suggests. Think 'pleasant personality.'"},

      {type:"fb", s:"Mia sorella e molto {1}.",
       a:["alta"],
       opts:["alta","alto","alti","alte"],
       hint:"The adjective must agree with 'sorella,' which is feminine singular. Change the -o ending to match.",
       sSrc:"My sister is very {1}."},

      {type:"mc", q:"Which adjective means 'old'?",
       opts:["Basso (short)","Vecchio","Grande (big)","Giovane (young)"],
       ans:"Vecchio",
       hint:"This word comes from Latin 'vetulus.' For people, the polite alternative is 'anziano.'"},

      {type:"fb", s:"Il nonno e {1} ma molto simpatico.",
       a:["vecchio"],
       opts:["vecchio","bello","alto","giovane"],
       hint:"This describes the grandfather's age. He has lived many years.",
       sSrc:"Grandfather is {1} but very nice."},

      {type:"match", pairs:[
        {trg:"alto", src:"tall"},
        {trg:"basso", src:"short"},
        {trg:"giovane", src:"young"},
        {trg:"bello", src:"beautiful"},
        {trg:"piccolo", src:"small"}
      ]},

      {type:"mc", q:"What is the feminine form of 'bello'?",
       opts:["Belli (masc. plural)","Belle (fem. plural)","Bella","Bello (masc. singular)"],
       ans:"Bella",
       hint:"Regular -o/-a pattern. Change the masculine ending to the standard feminine ending."},

      {type:"fb", s:"La nonna e molto {1}!",
       a:["simpatica"],
       opts:["simpatica","simpatico","simpatici","simpatiche"],
       hint:"The adjective must agree with 'nonna,' which is feminine singular. Apply the -a ending.",
       sSrc:"Grandmother is very {1}!"},

      {type:"mc", q:"Where does 'grande' usually go to mean 'great' (quality)?",
       opts:["It does not matter","After the noun","At the end of the sentence","Before the noun"],
       ans:"Before the noun",
       hint:"Position matters with this adjective. 'Un grande uomo' (great man) vs 'un uomo grande' (big man)."}
    ]},

    {id:"itv2_u3l3", title:"La mia, il tuo", icon:"\u2764\ufe0f", xp:15, board:true, steps:[
      {type:"intro", title:"La mia, il tuo",
       desc:"Learn Italian possessive adjectives and how they work with family members.",
       goals:["Use mio/mia, tuo/tua, suo/sua","Understand the article rule with family","Express possession for family members"]},

      {type:"tip", title:"Possessives with family",
       text:"Italian possessives agree with the THING POSSESSED, not the owner.\n- mio/mia = my\n- tuo/tua = your (informal)\n- suo/sua = his/her/your (formal)\n\nSpecial rule: with SINGULAR family members, drop the article.\n- mia madre (my mother) NOT la mia madre\n- mio fratello (my brother) NOT il mio fratello\n\nBut keep the article with plurals or modified nouns:\n- i miei fratelli (my brothers)\n- la mia cara nonna (my dear grandmother)",
       deepDive:"This family exception is unique to Italian. No other category of nouns drops the article with possessives. The rule only applies to SINGULAR, UNMODIFIED family members. The moment you add an adjective (la mia dolce mamma) or use plural (le mie sorelle), the article returns."},

      {type:"teach", trg:"mio", src:"my (masculine)", pos:"adj", gender:null,
       note:"Masculine singular. Feminine: mia. Plural: miei (m), mie (f).\nAgrees with the thing owned, not the owner.",
       example:"A: Di chi e questo libro?\nB: E il mio libro.",
       exampleSrc:"A: Whose book is this?\nB: It is my book.",
       funFact:"Latin 'meus' gave Italian 'mio,' French 'mon,' and Spanish 'mi.' The possessive system works identically across all Romance languages: it agrees with the object, never the person."},

      {type:"teach", trg:"mia", src:"my (feminine)", pos:"adj", gender:null,
       note:"Feminine singular of 'mio.' Used with feminine nouns.\nWith singular family: no article (mia madre).",
       example:"A: Come si chiama tua madre?\nB: Mia madre si chiama Anna.",
       exampleSrc:"A: What is your mother's name?\nB: My mother's name is Anna.",
       funFact:"The famous aria 'Mamma mia' literally means 'Mother mine.' Notice the possessive comes AFTER the noun here. This postposed order is common in exclamations and poetry."},

      {type:"teach", trg:"tuo", src:"your (masculine, informal)", pos:"adj", gender:null,
       note:"Masculine singular. Feminine: tua.\nUsed with 'tu' (informal you). With family: no article.",
       example:"A: Tuo padre e italiano?\nB: Si, mio padre e di Roma.",
       exampleSrc:"A: Is your father Italian?\nB: Yes, my father is from Rome.",
       funFact:"From Latin 'tuus.' The tu/Lei distinction matters: 'tuo' is informal, 'Suo' is formal. Using 'tuo' with a stranger in Italy would be considered impolite."},

      {type:"teach", trg:"tua", src:"your (feminine, informal)", pos:"adj", gender:null,
       note:"Feminine singular of 'tuo.' Used with feminine nouns.\nWith singular family: no article (tua sorella).",
       example:"A: Tua sorella e simpatica?\nB: Si, e molto simpatica!",
       exampleSrc:"A: Is your sister nice?\nB: Yes, she is very nice!",
       funFact:"Remember: 'tua sorella' (no article) but 'la tua macchina' (with article). The no-article rule ONLY works with singular family members. Everything else keeps the article."},

      {type:"teach", trg:"suo", src:"his/her/your (masc, formal)", pos:"adj", gender:null,
       note:"Masculine singular. Means his, her, OR formal your.\nContext tells you which meaning applies.",
       example:"A: Come si chiama suo figlio?\nB: Suo figlio si chiama Luca.",
       exampleSrc:"A: What is his/her son's name?\nB: His/Her son's name is Luca.",
       funFact:"'Suo' does triple duty: his, her, and formal your. This can cause ambiguity, so Italians often add 'di lui' (of him) or 'di lei' (of her) to clarify when needed."},
{type:"match",pairs:[{trg:"mia",src:"my (feminine)"},{trg:"tuo",src:"your (masculine, informal)"},{trg:"tua",src:"your (feminine, informal)"},{trg:"suo",src:"his/her/your (masc, formal)"}]},

      {type:"teach", trg:"sua", src:"his/her/your (fem, formal)", pos:"adj", gender:null,
       note:"Feminine singular of 'suo.' Means his, her, or formal your.\nWith singular family: no article.",
       example:"A: Sua madre e italiana?\nB: No, sua madre e francese.",
       exampleSrc:"A: Is his/her mother Italian?\nB: No, his/her mother is French.",
       funFact:"When capitalized as 'Sua,' it specifically means formal 'your.' In formal letters, Italians write 'La Sua famiglia' (Your family). This capitalization convention mirrors the Lei/lei distinction."},

      // Quiz steps
      {type:"mc", q:"How do you say 'my mother' in Italian?",
       opts:["Mia madre","La mia madre","Il mio madre","Mio madre"],
       ans:"Mia madre",
       hint:"With singular family members, the article is dropped. The word is feminine, so use the feminine possessive."},

      {type:"fb", s:"{1} fratello si chiama Marco.",
       a:["Mio"],
       opts:["Mio","Mia","Il mio","La mia"],
       hint:"'Fratello' is masculine and a singular family member. Use the masculine possessive without the article.",
       sSrc:"{1} brother is named Marco."},

      {type:"mc", q:"Which sentence is correct?",
       opts:["La tua sorella e alta","Tua sorella e alta","Il tuo sorella e alta","Tuo sorella e alta"],
       ans:"Tua sorella e alta",
       hint:"Singular family member: drop the article. The noun is feminine, so the possessive must match that gender."},

      {type:"fb", s:"{1} padre e di Roma.",
       a:["Tuo"],
       opts:["Tuo","Tua","Suo","Sua"],
       hint:"You are asking about 'your' (informal) father. 'Padre' is masculine, so match the gender.",
       sSrc:"{1} father is from Rome."},

      {type:"match", pairs:[
        {trg:"mio", src:"my (masculine)"},
        {trg:"mia", src:"my (feminine)"},
        {trg:"tuo", src:"your (masculine)"},
        {trg:"suo", src:"his/her (masculine)"},
        {trg:"sua", src:"his/her (feminine)"}
      ]},

      {type:"mc", q:"What does 'suo' mean?",
       opts:["Our","My","His, her, or your (formal)","Their"],
       ans:"His, her, or your (formal)",
       hint:"One Italian possessive covers multiple people. Think: it works for third-person singular AND polite address."},

      {type:"fb", s:"{1} madre e molto simpatica.",
       a:["Sua"],
       opts:["Sua","Suo","Mio","Tuo"],
       hint:"This means 'his/her mother.' 'Madre' is feminine, so the possessive takes the feminine form.",
       sSrc:"{1} mother is very nice."},

      {type:"mc", q:"When do you keep the article with family possessives?",
       opts:["Only with masculine nouns","Always","Never","With plurals or modified nouns"],
       ans:"With plurals or modified nouns",
       hint:"The no-article rule has exceptions. When the family word is plural or has an adjective, the article returns."}
    ]},
    EXP_03_L1, EXP_03_L2, EXP_03_L3,

    {id:"itv2_u3l_essential_a1", title:"Essenziali A1", icon:"🌟", xp:15, board:true, steps:[
      {type:"intro", title:"Essenziali A1",
       desc:"Nine high-frequency Italian words: a person, a place, a drink, a color set, a descriptive adjective, and a number. All are required for CILS A1.",
       goals:["Name a friend using the correct gender form","Use la città and il caffè in context","Identify invariable color adjectives blu and viola","Use brutto as the opposite of bello","Count to sei"]},

      {type:"teach", trg:"l'amico / l'amica", src:"friend (m/f)", pos:"noun", gender:"m",
       note:"Masculine: l'amico. Feminine: l'amica.\nBoth take the elided article l' because they start with a vowel.\nPlural: gli amici (m), le amiche (f).",
       example:"A: Chi è lui?\nB: È il mio amico Marco. È molto simpatico.",
       exampleSrc:"A: Who is he?\nB: He is my friend Marco. He is very nice.",
       funFact:"From Latin 'amicus' (friend), connected to 'amare' (to love). The same root gives English 'amiable' and 'amicable.' Interestingly, the feminine plural 'amiche' keeps the hard c sound: a spelling rule unique to -co/-ca nouns."},

      {type:"teach", trg:"la città", src:"the city", pos:"noun", gender:"f",
       note:"Feminine. Final accent on à marks stress on the last syllable.\nPlural: le città (invariable: accented nouns never change in the plural).",
       example:"A: Di dove sei?\nB: Sono di una piccola città. E tu?\nA: Io sono di Milano.",
       exampleSrc:"A: Where are you from?\nB: I am from a small city. And you?\nA: I am from Milan.",
       funFact:"From Latin 'civitas' (community of citizens). Old Italian said 'cittade,' then the final syllable eroded away but the stress stayed on the à. This is why Italian has so many accent marks on short words."},

      {type:"teach", trg:"il caffè", src:"the coffee / café", pos:"noun", gender:"m",
       note:"Masculine. Final accent on è keeps the stress on the last syllable.\nPlural: i caffè (invariable, like città).\nMeans both the drink AND the café where you drink it.",
       example:"A: Un caffè, per favore.\nB: Subito! Con zucchero?\nA: No, grazie.",
       exampleSrc:"A: A coffee, please.\nB: Right away! With sugar?\nA: No, thank you.",
       funFact:"From Ottoman Turkish 'kahve,' borrowed via Venetian merchants. Italy's espresso culture transformed it: an Italian caffè is a short, strong espresso shot, not the milky cup Northern Europeans call 'coffee.' Ordering 'un caffè' in Italy always means espresso."},

      {type:"teach", trg:"brutto", src:"ugly / bad-looking", pos:"adj", gender:null,
       note:"Masculine: brutto. Feminine: brutta.\nPlural: brutti (m), brutte (f). Regular -o/-a pattern.\nThe direct opposite of bello (beautiful).",
       example:"A: Com'è il tempo oggi?\nB: È molto brutto. Piove!",
       exampleSrc:"A: What is the weather like today?\nB: It is very bad. It is raining!",
       funFact:"'Brutto tempo' (bad weather) is one of the most common uses. Italians say 'che brutto!' to mean 'how awful!' about anything unpleasant. The word also appears in the famous idiom 'brutto anatroccolo,' the ugly duckling."},

      {type:"teach", trg:"blu", src:"blue", pos:"adj", gender:null,
       note:"Invariable adjective: blu NEVER changes for gender or number.\nCorrect: un cielo blu, una camicia blu, due occhi blu.\nNever: *bluo, *blua, *blui, *blue.",
       example:"A: Di che colore sono gli occhi di tua sorella?\nB: Sono blu. Sono bellissimi!",
       exampleSrc:"A: What color are your sister's eyes?\nB: They are blue. They are very beautiful!",
       funFact:"Borrowed from French 'bleu' in the 19th century. Because it is a loanword, Italian never gave it native endings. The older native Italian word for blue was 'azzurro,' still used today for sky blue and the Italian national sports teams."},

      {type:"teach", trg:"giallo", src:"yellow", pos:"adj", gender:null,
       note:"Masculine: giallo. Feminine: gialla.\nPlural: gialli (m), gialle (f). Regular -o/-a native adjective.",
       example:"A: Il sole è grande e giallo.\nB: Sì, e molto bello oggi!",
       exampleSrc:"A: The sun is big and yellow.\nB: Yes, it is very beautiful today!",
       funFact:"In Italian publishing, 'giallo' also means 'crime thriller' or 'detective novel.' This is because early crime paperbacks had yellow covers. Saying 'leggo un giallo' means 'I am reading a crime novel,' not 'I am reading a yellow thing.'"},

      {type:"teach", trg:"viola", src:"purple", pos:"adj", gender:null,
       note:"Invariable adjective: viola NEVER changes for gender or number.\nCorrect: un fiore viola, una borsa viola, due camicie viola.\nNever: *violo, *violi, *viole (in the adjective sense).",
       example:"A: Blu o viola?\nB: Viola! Non è giallo e non è brutto.",
       exampleSrc:"A: Blue or purple?\nB: Purple! It is not yellow and not ugly.",
       funFact:"Named after the violet flower ('la viola'). Like 'blu,' it is an invariable color because it started as a noun used to describe color. Italian has several such noun-turned-adjective colors: viola, blu, rosa (pink), arancione (orange)."},

      {type:"tip", title:"Invariable adjectives: blu and viola",
       text:"Most Italian adjectives agree with the noun in gender and number.\nBut color adjectives borrowed from nouns are INVARIABLE. They never change:\n- un vestito blu, una scarpa blu, due scarpe blu\n- un fiore viola, una camicia viola, tre fiori viola\n\nOther invariable colors: rosa (pink), arancione (orange).\n\nRegular colors DO change: giallo/gialla/gialli/gialle, rosso/rossa/rossi/rosse.",
       deepDive:"Why are these colors invariable? Because they started as nouns: 'blu' (the color blue, borrowed as a noun), 'viola' (the violet flower). Italian grammar treats nouns used as adjectives as invariable. When you spot a color name that doubles as a thing (flower, fruit, gem), expect it to be invariable. Arancione comes from 'arancia' (orange fruit), rosa from 'rosa' (rose flower)."},

      {type:"teach", trg:"il minuto", src:"the minute", pos:"noun", gender:"m",
       note:"Masculine. Plural: i minuti.\nArticle: il (regular masculine before consonant).\nUsed for both time (60 seconds) and informally for 'a moment.'",
       example:"A: Aspetta un minuto, per favore!\nB: Sì, certo. Nessun problema.",
       exampleSrc:"A: Wait a minute, please!\nB: Yes, of course. No problem.",
       funFact:"From Latin 'minuta' (small), the same root as English 'minute' and 'mini.' In medieval timekeeping, an hour was divided into 60 'partes minutae primae' (first small parts) = minutes. The word literally means 'tiny division of time.'"},

      {type:"teach", trg:"sei", src:"six", pos:"num", gender:null,
       note:"The number six. Invariable like all Italian cardinal numbers.\nAlso happens to be the 'tu' form of essere: tu sei = you are.\nContext always makes the meaning clear.",
       example:"A: Quanti minuti mancano?\nB: Solo sei minuti. Quasi pronto!",
       exampleSrc:"A: How many minutes are left?\nB: Only six minutes. Almost ready!",
       funFact:"From Latin 'sex,' the same root as English 'sextant,' 'sextet,' and 'semester' (from Latin 'sex menses,' six months). The Italian numbers one through ten all derive directly from Latin with very little change."},

      {type:"mc", q:"Come si dice 'friend (male)' in italiano?",
       opts:["L'amico","L'amica","Il cugino","Lo zio"],
       ans:"L'amico",
       hint:"Male friend takes the elided masculine article. The word starts with a vowel, so 'il' shortens to 'l'.'"},

      {type:"fb", s:"Roma è una grande {1}.",
       a:["città"],
       opts:["città","caffè","minuto","famiglia"],
       hint:"You are describing Rome as a big place where many people live. Think: capital of Italy.",
       sSrc:"Rome is a big {1}."},

      {type:"mc", q:"Which sentence uses 'blu' correctly?",
       opts:["Una camicia blu","Una camicia blua","Una camicia blui","Una camicia blue"],
       ans:"Una camicia blu",
       hint:"This color adjective is invariable. It never takes gender or number endings, unlike regular adjectives."},

      {type:"fb", s:"Il sole è grande e {1}.",
       a:["giallo"],
       opts:["giallo","gialla","viola","blu"],
       hint:"The sun's color is a regular adjective. 'Il sole' is masculine singular: match the adjective ending.",
       sSrc:"The sun is big and {1}."},

      {type:"match", pairs:[
        {trg:"l'amico", src:"friend (male)"},
        {trg:"la città", src:"the city"},
        {trg:"il caffè", src:"the coffee / café"},
        {trg:"il minuto", src:"the minute"},
        {trg:"sei", src:"six"}
      ]},

      {type:"mc", q:"What does 'brutto' mean?",
       opts:["Ugly / bad-looking","Beautiful","Small","Old"],
       ans:"Ugly / bad-looking",
       hint:"Think of it as the opposite of 'bello.' If bello is beautiful, brutto is the flip side."},

      {type:"fb", s:"Un {1}, per favore.",
       a:["caffè"],
       opts:["caffè","città","minuto","amico"],
       hint:"You are ordering the most famous Italian hot drink at a bar. One word, final accent.",
       sSrc:"A {1}, please."},

      {type:"mc", q:"Which color adjective is invariable (does NOT change for gender/number)?",
       opts:["giallo","bello","viola","grande"],
       ans:"viola",
       hint:"Look for the color borrowed from a flower name. It never takes -a, -i, or -e endings."},

      {type:"fb", s:"Aspetta un {1}, per favore!",
       a:["minuto"],
       opts:["minuto","caffè","amico","figlio"],
       hint:"You are asking someone to wait briefly. A unit of 60 seconds.",
       sSrc:"Wait a {1}, please!"},

      {type:"mc", q:"How many are 'sei'?",
       opts:["Four","Five","Six","Seven"],
       ans:"Six",
       hint:"This number follows cinque (five). It comes from Latin 'sex.'"},

      {type:"match", pairs:[
        {trg:"brutto", src:"ugly / bad-looking"},
        {trg:"blu", src:"blue"},
        {trg:"giallo", src:"yellow"},
        {trg:"viola", src:"purple"}
      ]},

      {type:"fb", s:"La mia amica è {1}, non è bella.",
       a:["brutta"],
       opts:["brutta","brutto","piccola","vecchia"],
       hint:"The subject 'amica' is feminine singular. Apply the feminine ending to the adjective meaning ugly.",
       sSrc:"My friend (f.) is {1}, she is not beautiful."}
    ]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH4_L02,
  BATCH4_L01,
  BATCH2_L02,
  BATCH2_L01
, COVERAGE_U03]
};
export default UNIT_03;
