// Russian V2 Unit 23 — Imperative Mood (B1.2)
const UNIT_23 = {n:23, lang:"ru", srcLang:"en", track:"v2", title:"Повелительное наклонение", sub:"Imperative Mood",
 icon:"📣", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u23l1", title:"Commands and Requests", icon:"📣", xp:15, board:true, steps:[

{type:"intro", title:"Russian Imperative",
 desc:"The imperative forms commands, suggestions, and polite requests. Russian has informal (ты) and formal (вы) forms. Aspect affects register: perfective for single requests, imperfective for repeated/polite.",
 goals:["Form imperative (ты/вы forms)","Use perfective vs imperfective imperative","Soften with пожалуйста"]},

{type:"teach", trg:"читай!", src:"read! (informal)", pos:"verb", gender:null,
 note:"Imperfective imperative.\nFrom читать: take я-form, remove -ю, add -й.",
 example:"A: Читай громче!\nB: Хорошо.",
 exampleSrc:"A: Read louder!\nB: Okay.",
 funFact:"Imperfective imperative for ongoing/repeated action. 'Читай!' might mean 'Keep reading!' or 'Read (regularly)!'"},

{type:"teach", trg:"прочитай!", src:"read it! (complete)", pos:"verb", gender:null,
 note:"Perfective imperative.\nFrom прочитать. Emphasizes completion.",
 example:"A: Прочитай это письмо!\nB: Сейчас прочитаю.",
 exampleSrc:"A: Read this letter!\nB: I'll read it now.",
 funFact:"Perfective for specific, completed requests. 'Прочитай эту книгу!' = specific request to read a specific book completely."},

{type:"teach", trg:"читайте!", src:"read! (formal/plural)", pos:"verb", gender:null,
 note:"Add -те to informal form for formal/plural.\nUniversal pattern.",
 example:"A: Читайте, пожалуйста, внимательно.\nB: Конечно.",
 exampleSrc:"A: Please read attentively.\nB: Of course.",
 funFact:"Adding -те to any imperative makes it plural or formal (вы-address). Simple pattern: писать → пиши!/пишите!, работай!/работайте!"},

{type:"teach", trg:"идите!", src:"go! (formal/plural)", pos:"verb", gender:null,
 note:"Irregular imperative of идти: иди/идите.\nMotion verbs often irregular.",
 example:"A: Идите домой!\nB: Уже ухожу.",
 exampleSrc:"A: Go home!\nB: Already leaving.",
 funFact:"Идти's imperative иди/идите. Idiomatic: 'Да иди ты!' (Go on! — informal skepticism). Russian imperatives can express surprise or disbelief too."},

{type:"teach", trg:"скажи!", src:"tell! / say! (inf)", pos:"verb", gender:null,
 note:"Perfective imperative of сказать.\nChange stem: сказать → скаж- → скажи.",
 example:"A: Скажи мне правду!\nB: Хорошо, скажу.",
 exampleSrc:"A: Tell me the truth!\nB: Okay, I'll tell.",
 funFact:"'Скажите мне' (tell me, formal) — common request. Russian imperatives often end in -и/-ите. Simple rule: present tense я-form stem + и."},

{type:"teach", trg:"не говорите!", src:"don't speak!", pos:"phrase", gender:null,
 note:"Negative imperative = не + imperfective.\nUse imperfective for prohibitions.",
 example:"A: Не говорите громко!\nB: Извините, забыл.",
 exampleSrc:"A: Don't speak loudly!\nB: Sorry, forgot.",
 funFact:"Negative commands use IMPERFECTIVE aspect ('не говори!' not 'не скажи!'). Russian aspect + negation flips normal perfective preference."},

{type:"teach", trg:"давай", src:"let's (informal)", pos:"verb", gender:null,
 note:"Informal suggestion.\n'Давай пойдём!' = Let's go!",
 example:"A: Давай пойдём в кино!\nB: Отличная идея.",
 exampleSrc:"A: Let's go to the movies!\nB: Great idea.",
 funFact:"'Давай' is Russian's casual suggestion opener. With друг/peer: 'давай пообедаем' (let's have lunch). With вы: 'давайте' with plural form."},

{type:"teach", trg:"давайте", src:"let's (formal/plural)", pos:"verb", gender:null,
 note:"Formal/plural version.\n'Давайте начнём!' = Let's begin (formal).",
 example:"A: Давайте встретимся в пять.\nB: Согласен.",
 exampleSrc:"A: Let's meet at five.\nB: Agreed.",
 funFact:"Meetings in Russia commonly open with 'Давайте начнём' (let's begin). In business: 'давайте обсудим' (let's discuss). Respectful suggestion."},

{type:"tip", title:"Russian Imperative Formation",
 text:"BASIC RULE:\nFind the 'они' (3rd person plural) form of the verb.\nRemove the ending (-ют/-ат).\nAdd -и or -й for ты form (soft consonant → й, hard → и).\nAdd -ите/-йте for вы form.\n\nEXAMPLES:\nчитать: они читают → читай! / читайте!\nписать: они пишут → пиши! / пишите!\nработать: они работают → работай! / работайте!\nидти: they идут → иди! / идите! (irreg)\n\nEXCEPTIONS:\nбыть → будь! / будьте!\nесть → ешь! / ешьте!\nпить → пей! / пейте!\n\nPOLITE SOFTENING:\nПожалуйста + imperative = please + command.\nПередайте, пожалуйста, соль. (Pass the salt, please.)\n\nNEGATIVE COMMANDS:\nUse IMPERFECTIVE aspect for prohibitions.\n'Не читай это!' not 'Не прочитай это!'",
 icon:"📣"},

{type:"mc", q:"Form the ты imperative of 'читать':",
 opts:["читай!","читайте!","читает!","прочитай!"],
 ans:"читай!",
 hint:"Они читают → remove -ют → читай!"},

{type:"mc", q:"Negative commands use which aspect?",
 opts:["Perfective","Imperfective","Both equally","Neither"],
 ans:"Imperfective",
 hint:"'Don't do X' = имперф. 'Не делай' (don't do) uses ___."},

{type:"fb", s:"A: {1}, пожалуйста, правду!\nB: Хорошо, скажу.",
 a:["Скажите"],
 opts:["Скажите","Говорите","Скажи","Говори"],
 hint:"Formal 'tell me' + полите пожалуйста. Perfective imperative.",
 sSrc:"A: Please tell me the truth.\nB: Okay, I'll tell."},

{type:"fb", s:"A: {1} пойдём гулять!\nB: С удовольствием.",
 a:["Давай"],
 opts:["Давай","Давайте","Пойдём","Идите"],
 hint:"Informal 'let's' suggestion — singular.",
 sSrc:"A: Let's go for a walk!\nB: With pleasure."},

{type:"match", pairs:[
  {trg:"читай!", src:"read! (inf)"},
  {trg:"скажите", src:"tell! (formal)"},
  {trg:"иди", src:"go! (inf)"},
  {trg:"давай", src:"let's (inf)"},
  {trg:"не говорите", src:"don't speak"}
]}
<<<<<<< HEAD
,

{type:"match", pairs:[
  {trg:"скажи!", src:"tell! / say! (inf)"}
]}]}
=======
]}
>>>>>>> origin/main

]};
export default UNIT_23;
