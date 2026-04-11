// Unit 16 — Het Wordt Gedaan
// Passive Voice & Formal Register

export default {n:16,lang:"nl",srcLang:"en",track:"v2",title:"Het Wordt Gedaan",sub:"Passive Voice & Formal Register",icon:"📰",level:"B1.2",color:"#7B5EE8",lessons:[
  {id:"v2u16l1",title:"Actief vs Passief",icon:"📰",xp:15,board:true,steps:[
        {type:"intro",title:"Actief vs Passief",desc:"Until now, you've always said WHO does something: 'Ik schrijf de brief' (I write the letter). But what if you want to focus on WHAT happens, not who does it? 'De brief wordt geschreven'  -  the letter is being written. This is the passive voice, and it's everywhere in Dutch news, rules, and formal writing.",goals:["Understand active vs passive concept","Core vocabulary for formal contexts","See passive in real Dutch examples","Prepare for the grammar in L2–L5"]},
        {type:"tip",title:"🔑 Active vs Passive  -  The Big Idea",text:"Active: The DOER is the subject.\nIk schrijf de brief. = I write the letter.\nDe kok maakt het eten. = The cook makes the food.\n\nPassive: The THING/ACTION is the subject.\nDe brief wordt geschreven. = The letter is being written.\nHet eten wordt gemaakt. = The food is being made.\n\nWhy use passive?\n1. You don't know who did it.\n2. It doesn't matter who did it.\n3. You want to sound formal or objective.\n4. Rules and laws: 'Er wordt hier niet gerookt.'\n\nDutch uses passive MORE than English,\nespecially in news, regulations, and formal writing."},
        {type:"teach",trg:"het artikel",src:"the article (newspaper)",pos:"noun",gender:"n",phonetic:"hut ar-TEE-kul",note:"Het-word. Also: article/item in general.\n'Een krantenartikel' = a newspaper article.",example:"A: Heb je het artikel gelezen?\nB: Wanneer is dat besloten?\nA: Ja, precies!",exampleSrc:"A: Have you read the article?\nB: When was that decided?\nA: Yes, exactly!",funFact:"latin cousin of English 'article', German 'Artikel'."},
        {type:"teach",trg:"het rapport",src:"the report",pos:"noun",gender:"n",phonetic:"hut rap-PORT",note:"Het-word. 'Een rapport schrijven' = to write a report.\nFirst passive in action: 'wordt gepresenteerd'.",example:"A: Het rapport wordt morgen gepresenteerd.\nB: De tijd gaat snel!\nA: Ja, precies!",exampleSrc:"A: The report will be presented tomorrow.\nB: Time goes fast!\nA: Yes, exactly!",funFact:"latin cousin of English 'report', French 'rapport'."},
        {type:"teach",trg:"de wet",src:"the law",pos:"noun",gender:"c",phonetic:"duh vet",note:"De-word. 'Wetten' = laws (plural).\n'De wetgeving' = the legislation.\nPassive is very common with laws: 'werd aangenomen'.",example:"A: De wet werd vorig jaar aangenomen.\nB: O, is het al zo laat?\nA: Inderdaad.",exampleSrc:"A: The law was adopted last year.\nB: Oh, is it that late already?\nA: Indeed.",funFact:"Germanic cousin of German 'Gesetz (related)'."},
        {type:"teach",trg:"het onderzoek",src:"the research / investigation",pos:"noun",gender:"n",phonetic:"hut ON-dur-zook",note:"Het-word. 'Onderzoeken' = to research/investigate.\n'Uit onderzoek blijkt dat...' = Research shows that...\nVery common in news: passive + onderzoek.",example:"A: Het onderzoek is afgerond.\nB: Wat leuk!\nA: Ja, inderdaad!",exampleSrc:"A: The research has been completed.\nB: How nice!\nA: Yes, indeed!",funFact:"A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word."},
        {type:"teach",trg:"het besluit",src:"the decision",pos:"noun",gender:"n",phonetic:"hut buh-SLOWT",note:"You learned this in Unit 11!\nRepeated because it's a passive-magnet word.\n'Het besluit werd genomen door de minister.'",example:"A: Het besluit is genomen.\nB: O, interessant!\nA: Ja, vind je niet?",exampleSrc:"A: The decision has been made.\nB: Oh, interesting!\nA: Yes, don't you think?",funFact:"A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word."},
        {type:"teach",trg:"de regel",src:"the rule",pos:"noun",gender:"c",phonetic:"duh RAY-gul",note:"De-word. 'Regels' = rules.\n'De regelgeving' = regulations.\nPassive + modal: 'moeten worden gevolgd'.",example:"A: De regels moeten worden gevolgd.\nB: Mmm, dat klinkt lekker!\nA: Ja, precies!",exampleSrc:"A: The rules must be followed.\nB: Mmm, that sounds delicious!\nA: Yes, exactly!",funFact:"Germanic cousin of English 'rule (reg-)', German 'Regel'."},
        {type:"mc",q:"In 'De brief wordt geschreven', the focus is on:",opts:["Who writes it","The letter itself","The past","The future"],ans:"The letter itself",hint:"Passive = focus on what happens, not who does it"},
        {type:"fb",opts:["rapport","artikel","wet","regel"],hint:"The report is being presented tomorrow",s:"Het ___ wordt morgen gepresenteerd.",a:"rapport"},
        {type:"match",pairs:[{trg:"het artikel",src:"the article"},{trg:"de wet",src:"the law"},{trg:"het onderzoek",src:"the research"},{trg:"de regel",src:"the rule"}]},
        {type:"mc",q:"Passive voice is especially common in:",opts:["Casual conversation","News, rules, and formal writing","Children's books","Song lyrics"],ans:"News, rules, and formal writing",hint:"___, objective = passive territory"},
        {type:"fb",opts:["onderzoek","artikel","rapport","besluit"],hint:"The research has been completed",s:"Het ___ is afgerond.",a:"onderzoek"},
        {type:"drag_fill",hint:"The rules must be followed. The report is presented tomorrow.",s:"De {1} moeten worden gevolgd. Het {2} wordt morgen gepresenteerd.",blanks:{"1":"regels","2":"rapport"},pool:["regels","rapport","wet","artikel"]},
        {type:"mc",q:"'Het besluit is genomen.' focuses on:",opts:["Who made the decision","The decision itself (result)","The future","A question"],ans:"The decision itself (result)",hint:"Passive puts the action/___ in focus"},
        {type:"match",pairs:[{trg:"het artikel",src:"the article"},{trg:"het rapport",src:"the report"},{trg:"het onderzoek",src:"the research"},{trg:"het besluit",src:"the decision"}]},
        {type:"fb",opts:["regels","wetten","artikelen","rapporten"],hint:"The RULES must be followed",s:"De ___ moeten worden gevolgd.",a:"regels"},
        {type:"fb",opts:["wet","brief","mail","klant"],hint:"The law was adopted last year",s:"De ___ werd vorig jaar aangenomen.",a:"wet"}
  ]},
  {id:"v2u16l2",title:"Worden + Gedaan",icon:"📐",xp:20,board:true,steps:[
        {type:"intro",title:"Worden + Gedaan",desc:"The present passive in Dutch uses 'worden' + past participle. 'De brief wordt geschreven' = The letter is being written. This describes a process that is happening or happens regularly.",goals:["worden + past participle = present passive","Conjugate worden (word/wordt/worden)","Add 'door' for the agent (by whom)","Transform active → passive sentences"]},
        {type:"verb_table",title:"Worden  -  Present Tense",note:"'Worden' has TWO jobs in Dutch:\n1. To become: 'Ik word ziek' = I'm getting sick.\n2. Passive auxiliary: 'De brief wordt geschreven' = The letter is being written.\nSame conjugation for both uses.",groups:[
          {
            label:"Present tense",
            rows:[
              {pronoun:"ik",form:"word",src:"I am (being)..."},
              {pronoun:"jij / je",form:"wordt",src:"you are (being)..."},
              {pronoun:"hij / zij / het",form:"wordt",src:"he/she/it is (being)..."},
              {pronoun:"wij / jullie / zij",form:"worden",src:"we/you/they are (being)..."}
            ]
          }
        ],label:"worden (to become / passive auxiliary)"},
        {type:"tip",title:"📐 Active → Passive",text:"Active: De student schrijft de brief.\n           (subject)  (verb)   (object)\n\nPassive: De brief wordt geschreven (door de student).\n           (subject) (worden+PP)    (agent optional)\n\nSteps:\n1. Object → becomes the subject.\n2. Verb → wordt/worden + past participle.\n3. Subject → optional: 'door + ...' at end.\n\nMore examples:\nDe kok maakt het eten. → Het eten wordt gemaakt.\nZij leest het boek. → Het boek wordt gelezen.\nWij bespreken het plan. → Het plan wordt besproken."},
        {type:"teach",trg:"door",src:"by (agent in passive)",pos:"prep",gender:null,phonetic:"dohr",note:"'Door' = by (in passive sentences).\nOptional  -  only add when you WANT to say who.\n'Het eten wordt gemaakt door de kok.'\nOften omitted: 'Het eten wordt gemaakt.'",example:"A: De brief wordt geschreven door de student.\nB: Dat klinkt interessant!\nA: Goed punt.",exampleSrc:"A: The letter is written by the student.\nB: That sounds interesting!\nA: Good point.",funFact:"Dutch prepositions are key building blocks. Many combine with verbs to create new meanings."},
        {type:"mc",q:"'De brief wordt geschreven.'  -  'wordt' is:",opts:["Simple present of worden","Past tense of worden","Future tense","Conditional"],ans:"Simple present of worden",hint:"word/wordt/___ = ___ tense"},
        {type:"fb",opts:["wordt","werd","is","heeft"],hint:"The food IS BEING made (present passive)",s:"Het eten ___ gemaakt.",a:"wordt"},
        {type:"mc",q:"Active: 'De kok maakt het eten.' → Passive:",opts:["Het eten wordt gemaakt.","Het eten werd gemaakt.","De kok wordt gemaakt.","Het eten is gemaakt."],ans:"Het eten wordt gemaakt.",hint:"Object → subject + ___ + PP"},
        {type:"drag_fill",hint:"The book is read BY many people.",s:"Het boek {1} gelezen {2} veel mensen.",blanks:{"1":"wordt","2":"door"},pool:["wordt","door","werd","van"]},
        {type:"fb",opts:["worden","werd","zijn","worden"],hint:"Plural passive: de regels ___ gevolgd",s:"De regels ___ gevolgd. (present passive)",a:"worden"},
        {type:"mc",q:"When is 'door + agent' used?",opts:["Always required","Only when you want to specify WHO","Only in questions","Only in past tense"],ans:"Only when you want to specify WHO",hint:"Optional! Often omitted."},
        {type:"match",pairs:[
          {trg:"De brief wordt geschreven.",src:"The letter is being written."},
          {trg:"Het eten wordt gemaakt.",src:"The food is being made."},
          {trg:"De regels worden gevolgd.",src:"The rules are followed."},
          {trg:"Het plan wordt besproken.",src:"The plan is being discussed."}
        ]},
        {type:"fb",opts:["word","wordt","worden","werd"],hint:"First person singular of the passive auxiliary",s:"Ik ___ gezien door de docent. (am being  -  singular)",a:"word"},
        {type:"mc",q:"Active: 'Zij leest het boek.' Passive:",opts:["Het boek wordt gelezen.","Zij wordt gelezen.","Het boek heeft gelezen.","Het boek word gelezen."],ans:"Het boek wordt gelezen.",hint:"Object becomes subject + passive auxiliary + PP"},
        {type:"fb",opts:["worden","wordt","werd","is"],hint:"Plural subject: what form of the passive auxiliary?",s:"De brieven ___ geschreven door de studenten.",a:"worden"},
        {type:"drag_fill",hint:"The letter is written. The food is made by the cook.",s:"De brief {1} geschreven. Het eten {2} gemaakt door de kok.",blanks:{"1":"wordt","2":"wordt"},pool:["wordt","wordt","door","werd"]},
        {type:"mc",q:"'Het boek wordt door veel mensen gelezen.' What is 'door veel mensen'?",opts:["The subject","The agent (who does it)","The object","The verb"],ans:"The agent (who does it)",hint:"Door = by (identifies ___ performs the action)"},
        {type:"fb",opts:["worden","wordt","word","werd"],hint:"Plural subject 'wij': which passive auxiliary form?",s:"Wij ___ gezien door de docent. (are being  -  plural)",a:"worden"},
        {type:"fb",opts:["besproken","bespreken","bespreekt","besprak"],hint:"The plan is being discussed (PP of bespreken)",s:"Het plan wordt ___ door het team.",a:"besproken"}
  ]},
  {id:"v2u16l3",title:"Werd Geschreven",icon:"📐",xp:20,board:true,steps:[
        {type:"intro",title:"Werd Geschreven",desc:"The past passive uses 'werd/werden' + past participle. 'De brief werd geschreven' = The letter was (being) written. Same pattern, just past tense of 'worden'.",goals:["werd/werden + PP = past passive","Contrast: wordt (present) vs werd (past)","Transform past active → past passive","Read passive in news contexts"]},
        {type:"verb_table",title:"Worden  -  Past Tense (Imperfectum)",note:"Worden is a strong verb:\nworden → werd/werden (past) → geworden (PP).\n\nPresent passive: De brief WORDT geschreven.\nPast passive: De brief WERD geschreven.\n\nJust swap word/wordt/worden → werd/werden!",groups:[
          {
            label:"Past tense (imperfectum)",
            rows:[
              {pronoun:"ik",form:"werd",src:"I was (being)..."},
              {pronoun:"jij / je",form:"werd",src:"you were (being)..."},
              {pronoun:"hij / zij / het",form:"werd",src:"he/she/it was (being)..."},
              {pronoun:"wij / jullie / zij",form:"werden",src:"we/you/they were (being)..."}
            ]
          }
        ],label:"werd/werden"},
        {type:"tip",title:"📐 Present vs Past Passive",text:"Present: De brief wordt geschreven.\n= The letter is being written. (now/generally)\n\nPast: De brief werd geschreven.\n= The letter was (being) written. (then)\n\nPresent: Het plan wordt besproken.\nPast: Het plan werd besproken.\n\nPresent: De regels worden gevolgd.\nPast: De regels werden gevolgd.\n\nThe past participle stays the same!\nOnly worden changes: wordt → werd, worden → werden."},
        {type:"mc",q:"'De wet werd aangenomen.'  -  this happened:",opts:["Now","In the past","In the future","Always"],ans:"In the past",hint:"Werd = ___ tense of worden"},
        {type:"fb",opts:["werd","wordt","is","was"],hint:"The letter WAS written yesterday (past passive)",s:"De brief ___ gisteren geschreven.",a:"werd"},
        {type:"mc",q:"Plural past passive: 'De regels _____ gevolgd.'",opts:["werd","werden","worden","was"],ans:"werden",hint:"Plural past tense of worden: what form?"},
        {type:"drag_fill",hint:"The decision WAS made. The rules WERE not followed.",s:"Het besluit {1} genomen door de minister. De regels {2} niet gevolgd.",blanks:{"1":"werd","2":"werden"},pool:["werd","werden","wordt","worden"]},
        {type:"match",pairs:[{trg:"wordt geschreven",src:"is being written"},{trg:"werd geschreven",src:"was written"},{trg:"worden besproken",src:"are being discussed"},{trg:"werden besproken",src:"were discussed"}]},
        {type:"fb",opts:["werd","wordt","is","had"],hint:"The research WAS conducted last year",s:"Het onderzoek ___ vorig jaar uitgevoerd.",a:"werd"},
        {type:"mc",q:"Active: 'De minister nam het besluit.' → Past passive:",opts:["Het besluit werd genomen door de minister.","Het besluit wordt genomen.","De minister werd genomen.","Het besluit was genomen."],ans:"Het besluit werd genomen door de minister.",hint:"___ + PP + ___ + agent"},
        {type:"fb",opts:["werden","werd","worden","was"],hint:"Past passive with a plural subject",s:"De brieven ___ gisteren geschreven. (plural past passive)",a:"werden"},
        {type:"mc",q:"Present passive: 'De brief wordt geschreven.' Past passive:",opts:["De brief werd geschreven.","De brief is geschreven.","De brief was geschreven.","De brief heeft geschreven."],ans:"De brief werd geschreven.",hint:"Just change wordt to ___"},
        {type:"drag_fill",hint:"Singular werd, plural werden",s:"De wet {1} vorig jaar aangenomen. De regels {2} niet gevolgd.",blanks:{"1":"werd","2":"werden"},pool:["werd","werden","wordt","worden"]},
        {type:"match",pairs:[
          {trg:"wordt gemaakt",src:"is being made (present)"},
          {trg:"werd gemaakt",src:"was being made (past)"},
          {trg:"worden gevolgd",src:"are followed (present)"},
          {trg:"werden gevolgd",src:"were followed (past)"}
        ]},
        {type:"fb",opts:["werd","wordt","is","worden"],hint:"The report WAS presented last month",s:"Het rapport ___ vorige maand gepresenteerd.",a:"werd"},
        {type:"mc",q:"In the past passive, what stays the same?",opts:["The past participle","The auxiliary","The subject","Everything changes"],ans:"The past participle",hint:"Only worden changes: wordt to werd. The PP stays."},
        {type:"drag_fill",hint:"The plan was discussed. The letters were written.",s:"Het plan {1} gisteren besproken. De brieven {2} geschreven.",blanks:{"1":"werd","2":"werden"},pool:["werd","werden","wordt","is"]},
        {type:"tr",mk:"v2u16_letter_was_written",dir:"produce"}
  ]},
  {id:"v2u16l4",title:"Is Geschreven",icon:"📐",xp:20,board:true,steps:[
        {type:"intro",title:"Is Geschreven",desc:"Dutch has TWO types of passive. You've learned the process passive (worden). Now meet the state/result passive: 'zijn' + past participle. 'De brief is geschreven' = The letter has been written (it's done). This describes the RESULT, not the process.",goals:["zijn + PP = state/result passive","Contrast: worden (process) vs zijn (result)","The letter IS BEING written vs IS written","Use both in context"]},
        {type:"tip",title:"📐 Worden vs Zijn  -  Process vs Result",text:"WORDEN-passive = PROCESS (it's happening):\nDe brief wordt geschreven. = The letter is being written.\nDe deur wordt gesloten. = The door is being closed.\n\nZIJN-passive = RESULT (it's done):\nDe brief is geschreven. = The letter has been written.\nDe deur is gesloten. = The door is closed.\n\nThink of it as:\nWorden = BECOMING (the action is underway).\nZijn = BEING (the action is complete, we see the result).\n\nDe brief wordt geschreven. → someone is writing it NOW.\nDe brief is geschreven. → it's DONE. Finished. Result.\n\nThis distinction doesn't exist in English!\nEnglish uses 'is written' for BOTH.\nDutch separates them: worden vs zijn."},
        {type:"teach",trg:"gesloten",src:"closed / shut",pos:"verb",gender:null,phonetic:"guh-SLOH-tun",note:"Past participle of 'sluiten' (to close).\nZijn-passive: 'is gesloten' = is closed (result).\nVs worden: 'wordt gesloten' = is being closed (process).",example:"A: De winkel is gesloten.\nB: Zal ik betalen?\nA: Ja, precies!",exampleSrc:"A: The shop is closed.\nB: Shall I pay?\nA: Yes, exactly!",funFact:"The ge- prefix past participle prefix. Dutch verbs love prefixes."},
        {type:"teach",trg:"geopend",src:"opened",pos:"noun",gender:null,phonetic:"guh-OH-punt",note:"Past participle of 'openen' (to open).\n'Is geopend' = has been opened / is open.\nNote: openen → ge-open-d (regular).",example:"A: De nieuwe winkel is geopend.\nB: Zal ik betalen?\nA: Inderdaad.",exampleSrc:"A: The new shop has been opened.\nB: Shall I pay?\nA: Indeed.",funFact:"Dutch and English are the closest major language pair in the world. Many words share common roots."},
        {type:"teach",trg:"verboden",src:"forbidden / prohibited",pos:"verb",gender:null,phonetic:"fur-BOH-dun",note:"Past participle of 'verbieden' (to forbid).\nZijn-passive: 'is verboden' = is forbidden.\nVery common on signs: 'Verboden toegang!'",example:"A: Roken is hier verboden.\nB: Wat leuk!\nA: Ja, inderdaad!",exampleSrc:"A: Smoking is prohibited here.\nB: How nice!\nA: Yes, indeed!",funFact:"The ver- prefix changes/transforms. Dutch verbs love prefixes."},
        {type:"mc",q:"'De winkel is gesloten.'  -  this means:",opts:["Someone is closing the shop now","The shop is closed (result/state)","The shop will close","The shop was being closed"],ans:"The shop is closed (result/state)",hint:"Zijn + PP = result/state"},
        {type:"fb",opts:["is","wordt","werd","had"],hint:"It's done! Result = zijn-passive",s:"De brief ___ geschreven. Het is klaar! (result)",a:"is"},
        {type:"mc",q:"'De deur wordt gesloten' vs 'De deur is gesloten'. Difference?",opts:["No difference","worden = process happening, zijn = result done","worden = past, zijn = present","worden = formal, zijn = informal"],ans:"worden = process happening, zijn = result done",hint:"Becoming closed vs BEING closed"},
        {type:"match",pairs:[
          {trg:"wordt geschreven",src:"is being written (process)"},
          {trg:"is geschreven",src:"has been written (result)"},
          {trg:"wordt gesloten",src:"is being closed (process)"},
          {trg:"is gesloten",src:"is closed (result)"}
        ]},
        {type:"drag_fill",hint:"The shop IS OPENED at nine. Now it IS closed.",s:"De winkel {1} om negen uur geopend. Nu is hij {2}.",blanks:{"1":"wordt","2":"gesloten"},pool:["wordt","gesloten","werd","geopend"]},
        {type:"fb",opts:["verboden","gesloten","geschreven","gemaakt"],hint:"Smoking is PROHIBITED here",s:"Roken is hier ___.",a:"verboden"},
        {type:"mc",q:"'De deur wordt gesloten' vs 'De deur is gesloten'. Which is the result?",opts:["wordt gesloten (process)","is gesloten (result)","Both are results","Neither"],ans:"is gesloten (result)",hint:"Zijn-passive = the action is DONE"},
        {type:"fb",opts:["geopend","gesloten","verboden","gemaakt"],hint:"The shop has been OPENED",s:"De nieuwe winkel is ___. (opened  -  result)",a:"geopend"},
        {type:"drag_fill",hint:"The shop IS closed. Smoking IS prohibited.",s:"De winkel {1} gesloten. Roken is hier {2}.",blanks:{"1":"is","2":"verboden"},pool:["is","verboden","wordt","geopend"]},
        {type:"match",pairs:[{trg:"is gesloten",src:"is closed (result)"},{trg:"wordt gesloten",src:"is being closed (process)"},{trg:"is geopend",src:"has been opened"},{trg:"is verboden",src:"is forbidden"}]},
        {type:"mc",q:"On a Dutch sign you see 'Verboden toegang!' This means:",opts:["Welcome!","No entry! (forbidden access)","Emergency exit","Open today"],ans:"No entry! (forbidden access)",hint:"A common Dutch sign: ___ toegang (no entry)"},
        {type:"tr",mk:"v2u16_letter_is_written",dir:"produce"},
        {type:"tr",mk:"v2u16_decision_made",dir:"produce"}
  ]},
  {id:"v2u16l5",title:"Er Wordt Gefietst",icon:"🚲",xp:20,board:true,steps:[
        {type:"intro",title:"Er Wordt Gefietst",desc:"This is the most Dutch thing about the passive voice. Dutch can make passive sentences with NO subject at all. 'Er wordt gefietst' = There is cycling / Cycling is happening. English simply can't do this. It's used for rules, general activities, and impersonal statements.",goals:["Impersonal passive: er + worden + PP","No subject! Er fills the gap","Rules: 'Er wordt hier niet gerookt'","Very Dutch  -  English can't do this"]},
        {type:"tip",title:"🚲 The Impersonal Passive",text:"Normal passive has a subject:\nDe brief wordt geschreven. (de brief = subject)\n\nImpersonal passive has NO real subject:\nEr wordt gefietst. = There is cycling. / People cycle.\nEr wordt hier gewerkt. = Work is being done here.\nEr wordt niet gerookt. = No smoking. (lit: It is not smoked.)\n\n'Er' is just a placeholder  -  it fills the first position.\nThere is no 'thing' being cycled or worked.\nThe verb is intransitive (no object).\n\nThis is VERY Dutch. English can't say:\n'It is cycled.' ✗ (meaningless in English)\n'Er wordt gefietst.' ✓ (perfectly normal in Dutch)\n\nUsed for:\n1. Rules/signs: 'Er wordt hier niet gerookt.'\n2. General activities: 'Er werd veel gedanst.'\n3. Weather/atmosphere: 'Er wordt gewerkt.'"},
        {type:"teach",trg:"er wordt gerookt",src:"there is smoking / people smoke",pos:"intj",gender:null,phonetic:"ur vort guh-ROHKT",note:"roken = to smoke. Past participle: gerookt.\nImpersonal passive: er + wordt + gerookt.\n'Niet' makes it a rule: no smoking.",example:"A: Er wordt hier niet gerookt.\nB: Dat is belangrijk nieuws.\nA: Klopt!",exampleSrc:"A: There is no smoking here.\nB: That's important news.\nA: Right!",funFact:"Dutch and English are the closest major language pair in the world. Many words share common roots."},
        {type:"teach",trg:"er wordt gewerkt",src:"work is being done / people work",pos:"intj",gender:null,phonetic:"ur vort guh-VERKT",note:"werken = to work. Impersonal passive.\nNo specific person  -  just 'work happens here'.\nVery common in workplace contexts.",example:"A: Er wordt hier hard gewerkt.\nB: Dat klinkt als een goede baan.\nA: Goed punt.",exampleSrc:"A: People work hard here.\nB: That sounds like a good job.\nA: Good point.",funFact:"Dutch and English are the closest major language pair in the world. Many words share common roots."},
        {type:"teach",trg:"er werd gedanst",src:"there was dancing / people danced",pos:"intj",gender:null,phonetic:"ur vert guh-DANST",note:"Past impersonal passive: er + werd + PP.\nPresent: er wordt gedanst.\nPast: er werd gedanst.",example:"A: Er werd veel gedanst op het feest.\nB: Veel plezier!\nA: Dat is zo.",exampleSrc:"A: There was a lot of dancing at the party.\nB: Have fun!\nA: That's true.",funFact:"Dutch and English are the closest major language pair in the world. Many words share common roots."},
        {type:"mc",q:"'Er wordt hier niet gerookt.'  -  who is the subject?",opts:["Er","The smoker","There is no real subject","Het"],ans:"There is no real subject",hint:"Er is just a placeholder  -  impersonal!"},
        {type:"fb",opts:["wordt","werd","is","heeft"],hint:"People work hard here (present)",s:"Er ___ hier hard gewerkt.",a:"wordt"},
        {type:"mc",q:"Why can English NOT say 'It is cycled' the way Dutch says 'Er wordt gefietst'?",opts:["English doesn't have passive","English passive needs a real subject/object","English is simpler","It's a grammar mistake in Dutch too"],ans:"English passive needs a real subject/object",hint:"___: 'The letter is written' (___ exists). Dutch: 'Er wordt gefietst' (no ___!)"},
        {type:"match",pairs:[
          {trg:"Er wordt gerookt.",src:"People smoke. / Smoking happens."},
          {trg:"Er wordt gewerkt.",src:"Work is being done."},
          {trg:"Er werd gedanst.",src:"There was dancing."},
          {trg:"Er wordt niet gerookt.",src:"No smoking."}
        ]},
        {type:"drag_fill",hint:"There was no smoking here.",s:"Er {1} hier niet {2}. (no smoking  -  past)",blanks:{"1":"werd","2":"gerookt"},pool:["werd","gerookt","wordt","gewerkt"]},
        {type:"fb",opts:["gedanst","gerookt","gewerkt","geschreven"],hint:"There was a lot of DANCING at the party",s:"Er werd veel ___ op het feest.",a:"gedanst"},
        {type:"mc",q:"'Er wordt hier hard gewerkt.' Can this be translated literally to English?",opts:["Yes: It is worked here","No  -  English needs a real subject","Yes: There is worked here","Yes: Here is worked"],ans:"No  -  English needs a real subject",hint:"Dutch impersonal passive has no ___ equivalent"},
        {type:"fb",opts:["werd","wordt","is","was"],hint:"Past impersonal passive: er WERD + PP",s:"Er ___ veel gelachen op het feest. (past  -  people laughed a lot)",a:"werd"},
        {type:"match",pairs:[{trg:"Er wordt gefietst.",src:"People cycle."},{trg:"Er werd gelachen.",src:"There was laughing."},{trg:"Er wordt gewerkt.",src:"Work is being done."},{trg:"Er werd gerookt.",src:"People smoked."}]},
        {type:"mc",q:"The impersonal passive is used for:",opts:["Specific people doing things","Rules, general activities, atmosphere","Questions only","Past tense only"],ans:"Rules, general activities, atmosphere",hint:"No specific subject  -  ___/impersonal"},
        {type:"fb",opts:["wordt","werd","is","zijn"],hint:"Present impersonal passive: er WORDT",s:"Er ___ hier niet gefietst! (present  -  no cycling here)",a:"wordt"},
        {type:"drag_fill",hint:"There WAS dancing (past). Hard work IS done (present).",s:"Er {1} veel gedanst. Er {2} hard gewerkt.",blanks:{"1":"werd","2":"wordt"},pool:["werd","wordt","is","werden"]},
        {type:"tr",mk:"v2u16_no_smoking",dir:"produce"}
  ]},
  {id:"v2u16l6",title:"De Krant Lezen",icon:"📰",xp:15,board:true,steps:[
        {type:"intro",title:"De Krant Lezen",desc:"Time to see the passive voice in action. Dutch news is FULL of passive constructions. You'll read a short news text and practice recognizing passives in context.",goals:["Recognize passive in news texts","News vocabulary: minister, parlement, maatregel","Reading comprehension with passives","Distinguish worden-passive from zijn-passive"]},
        {type:"teach",trg:"de minister",src:"the minister (government)",pos:"noun",gender:"c",phonetic:"duh mi-NIS-tur",note:"De-word. 'De minister-president' = the prime minister.\n'De ministerraad' = the cabinet/council of ministers.",example:"A: De minister werd gevraagd om te reageren.\nB: Wanneer ga je?\nA: Klopt!",exampleSrc:"A: The minister was asked to respond.\nB: When are you going?\nA: Right!",funFact:"latin cousin of English 'minister', French 'ministre'."},
        {type:"teach",trg:"de maatregel",src:"the measure / action (policy)",pos:"noun",gender:"c",phonetic:"duh MAHT-ray-gul",note:"De-word. 'Maatregelen nemen' = to take measures.\nVery common in news: policies, regulations.\nOften in passive: 'werden aangekondigd'.",example:"A: Nieuwe maatregelen werden aangekondigd.\nB: Interessant. Vertel me meer.\nA: Dat is zo.",exampleSrc:"A: New measures were announced.\nB: Interesting. Tell me more.\nA: That's true.",funFact:"A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'."},
        {type:"teach",trg:"aankondigen",src:"to announce",pos:"verb",gender:null,phonetic:"AHN-kon-dih-gun",note:"Separable: 'kondigt aan' (active present).\n'Aangekondigd' = past participle.\nPassive: 'werd aangekondigd' = was announced.",example:"A: Het plan werd gisteren aangekondigd.\nB: De tijd gaat snel!\nA: Dat is zo.",exampleSrc:"A: The plan was announced yesterday.\nB: Time goes fast!\nA: That's true.",funFact:"Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending."},
        {type:"tip",title:"📰 Lees: Het Nieuws",deepDive:{
          title:"Vertaling",
          text:"Yesterday a new plan was announced by the minister.\nThe plan is intended to improve air quality.\nNew rules are being introduced for companies.\nIt was widely discussed in parliament.\n\nThe measures will be implemented next year.\nThe decision was made after lengthy consultation.\nNot everyone agrees. The opposition thinks\nmore research is needed."
        },text:"Lees het bericht en beantwoord de vragen.\n\nGisteren werd een nieuw plan aangekondigd door\nde minister. Het plan is bedoeld om de luchtkwaliteit\nte verbeteren. Nieuwe regels worden ingevoerd\nvoor bedrijven. Er werd veel over gesproken in\nhet parlement.\n\nDe maatregelen worden volgend jaar uitgevoerd.\nHet besluit is genomen na lang overleg.\nNiet iedereen is het ermee eens. De oppositie\nvindt dat er meer onderzoek nodig is."},
        {type:"mc",q:"In the text, 'werd aangekondigd' is:",opts:["Present passive","Past passive","State passive","Active voice"],ans:"Past passive",hint:"Werd = ___ tense of worden"},
        {type:"fb",opts:["is","werd","wordt","had"],hint:"The decision HAS BEEN made (result = zijn)",s:"Het besluit ___ genomen na lang overleg.",a:"is"},
        {type:"mc",q:"'Er werd veel over gesproken'  -  what type of passive?",opts:["Normal passive","State passive","Impersonal passive","Not passive"],ans:"Impersonal passive",hint:"Er + werd + PP, no real subject"},
        {type:"match",pairs:[{trg:"werd aangekondigd",src:"was announced"},{trg:"worden ingevoerd",src:"are being introduced"},{trg:"is genomen",src:"has been made"},{trg:"is bedoeld",src:"is intended"}]},
        {type:"fb",opts:["minister","maatregel","regel","wet"],hint:"A senior government official was asked to respond",s:"De ___ werd gevraagd om te reageren.",a:"minister"},
        {type:"mc",q:"'Het plan is bedoeld om de luchtkwaliteit te verbeteren.' 'Is bedoeld' is:",opts:["Active voice","Worden-passive (process)","Zijn-passive (state/result)","Future tense"],ans:"Zijn-passive (state/result)",hint:"Is + PP = ___ ___ (the plan IS intended)"},
        {type:"fb",opts:["aangekondigd","aankondigen","kondigt aan","aankondigde"],hint:"The plan was ANNOUNCED (past participle)",s:"Het plan werd gisteren ___.",a:"aangekondigd"},
        {type:"drag_fill",hint:"New measures were announced by a senior government official.",s:"Nieuwe {1} werden aangekondigd door de {2}.",blanks:{"1":"maatregelen","2":"minister"},pool:["maatregelen","minister","regels","wet"]},
        {type:"mc",q:"'Er werd veel over gesproken in het parlement.' What type of passive?",opts:["Normal passive","State passive","Impersonal passive","Active voice"],ans:"Impersonal passive",hint:"Er + werd + PP, no real subject"},
        {type:"fb",opts:["overleg","onderzoek","artikel","maatregel"],hint:"After lengthy CONSULTATION",s:"Het besluit is genomen na lang ___. (consultation)",a:"overleg"},
        {type:"match",pairs:[{trg:"de minister",src:"the minister"},{trg:"de maatregel",src:"the measure/policy"},{trg:"aankondigen",src:"to announce"},{trg:"het parlement",src:"parliament"}]},
        {type:"mc",q:"'Niet iedereen is het ermee eens.' means:",opts:["Everyone agrees","Not everyone agrees","Nobody agrees","The minister agrees"],ans:"Not everyone agrees",hint:"Niet iedereen = not everyone"},
        {type:"fb",opts:["werden","werd","worden","is"],hint:"Measures WERE announced (plural past)",s:"Nieuwe maatregelen ___ aangekondigd.",a:"werden"}
  ]},
  {id:"v2u16l7",title:"Door Wie? Waardoor?",icon:"🔍",xp:15,board:true,steps:[
        {type:"intro",title:"Door Wie? Waardoor?",desc:"Who did it? In passive sentences, 'door' (by) introduces the agent. Plus: passive with modals  -  'Het moet gedaan worden' (It must be done). The final piece of the passive puzzle.",goals:["door + agent: by whom","Passive + modals: moet/kan worden + PP","Word order in sub-clauses with passive","Ask 'Door wie?' and 'Waardoor?'"]},
        {type:"tip",title:"📐 Passive + Modals",text:"The passive can combine with modals (moeten, kunnen, etc.):\n\nHet moet gedaan worden. = It must be done.\nDat kan niet veranderd worden. = That can't be changed.\nHet zou besproken moeten worden. = It should be discussed.\n\nPattern: modal + past participle + worden\n\nIn a sub-clause (verb to end!):\n...dat het gedaan moet worden.\n...dat het besproken zou moeten worden.\n\nThe verbs stack at the end!\nThis is the multi-verb cluster from Unit 15 in action."},
        {type:"teach",trg:"door wie",src:"by whom",pos:"intj",gender:null,phonetic:"dohr vee",note:"Question: 'Door wie?' = By whom?\n'Door wie werd het gedaan?'\nVery common in news and formal contexts.",example:"A: Door wie werd het besluit genomen?\nB: Dat is belangrijk nieuws.\nA: Dat is zo.",exampleSrc:"A: By whom was the decision made?\nB: That's important news.\nA: That's true.",funFact:"Dutch and English are the closest major language pair in the world. Many words share common roots."},
        {type:"teach",trg:"waardoor",src:"by which / because of what",pos:"noun",gender:null,phonetic:"vahr-DOHR",note:"COMPOUND: waar + door.\nwaar + door = by what/which.\nUsed for THINGS (not people).\nPeople: 'Door wie?' Things: 'Waardoor?'",example:"A: Waardoor werd het probleem veroorzaakt?\nB: Dat weet ik ook niet zeker.\nA: Dat is zo.",exampleSrc:"A: What caused the problem? / By what was the problem caused?\nB: I'm not sure about that either.\nA: That's true.",funFact:"Dutch compounds are transparent once you learn the parts."},
        {type:"mc",q:"'Het moet gedaan worden.'  -  word order is:",opts:["modal + PP + worden","worden + PP + modal","PP + modal + worden","modal + worden + PP"],ans:"modal + PP + worden",hint:"Het MOET GEDAAN ___."},
        {type:"fb",opts:["Door","Van","Met","Voor"],hint:"BY whom was the decision made?",s:"___ wie werd het besluit genomen?",a:"Door"},
        {type:"mc",q:"In '...dat het gedaan moet worden', why is 'worden' last?",opts:["It's always last","Sub-clause: all verbs go to the end","Random order","Passive always ends sentences"],ans:"Sub-clause: all verbs go to the end",hint:"dat + ... + verb cluster at ___"},
        {type:"drag_fill",hint:"It SHOULD be discussed. (zou moeten worden)",s:"Het {1} besproken {2} worden.",blanks:{"1":"zou","2":"moeten"},pool:["zou","moeten","wordt","kan"]},
        {type:"match",pairs:[{trg:"moet worden gedaan",src:"must be done"},{trg:"kan worden veranderd",src:"can be changed"},{trg:"door wie?",src:"by whom?"},{trg:"waardoor?",src:"because of what?"}]},
        {type:"fb",opts:["worden","werd","is","wordt"],hint:"That CANNOT be changed. Modal + PP + passive auxiliary",s:"Dat kan niet veranderd ___.",a:"worden"},
        {type:"mc",q:"'Door wie?' asks about a person. For things, you ask:",opts:["Door wat?","Waardoor?","Waarom?","Hoe?"],ans:"Waardoor?",hint:"Waar + door = by what (for things/causes)"},
        {type:"fb",opts:["zou","had","werd","is"],hint:"It SHOULD be discussed. Conditional = zou",s:"Het ___ besproken moeten worden. (should  -  conditional)",a:"zou"},
        {type:"mc",q:"In '...dat het gedaan moet worden', why are verbs at the end?",opts:["Passive always ends sentences","Sub-clause: all verbs cluster at the end","It is a question","Random word order"],ans:"Sub-clause: all verbs cluster at the end",hint:"dat + ... + verb cluster at ___"},
        {type:"drag_fill",hint:"It must be done. That cannot be changed.",s:"Het moet {1} worden. Dat kan niet {2} worden.",blanks:{"1":"gedaan","2":"veranderd"},pool:["gedaan","veranderd","gemaakt","geschreven"]},
        {type:"fb",opts:["Waardoor","Door wie","Waarom","Wanneer"],hint:"For causes/things: waar + door",s:"___ werd het probleem veroorzaakt? (by what  -  thing/cause)",a:"Waardoor"},
        {type:"mc",q:"Passive + modal 'Het kan gedaan worden' in a sub-clause becomes:",opts:["...dat het gedaan kan worden.","...dat het kan gedaan worden.","...dat worden het gedaan kan.","...dat gedaan het kan worden."],ans:"...dat het gedaan kan worden.",hint:"Sub-clause: verbs cluster at end"},
        {type:"match",pairs:[{trg:"door wie?",src:"by whom? (people)"},{trg:"waardoor?",src:"by what? (things)"},{trg:"moet worden gedaan",src:"must be done"},{trg:"kan worden veranderd",src:"can be changed"}]},
        {type:"fb",opts:["werd","wordt","is","had"],hint:"The problem WAS caused by the storm",s:"Het probleem ___ veroorzaakt door de storm.",a:"werd"}
  ]},
  {id:"v2u16l8",title:"Unit 16 Review",icon:"🔄",xp:20,board:true,steps:[
        {type:"intro",title:"Unit 16 Review",desc:"The full passive voice toolkit. Process passive (worden), state passive (zijn), impersonal passive (er wordt), past passive (werd/werden), passive + modals, and the door-agent. Let's test it all.",goals:["All passive types reviewed","Active ↔ passive transformations","Recognize passive in context","worden vs zijn distinction"]},
        {type:"mc",q:"'De brief wordt geschreven'  -  which passive type?",opts:["Process passive (worden, present)","State passive (zijn)","Impersonal passive","Past passive"],ans:"Process passive (worden, present)",hint:"Wordt + PP = ___ ___ ___"},
        {type:"fb",opts:["is","wordt","werd","worden"],hint:"It's DONE = result/state passive (zijn)",s:"De brief ___ geschreven. Het is klaar.",a:"is"},
        {type:"mc",q:"Active: 'De minister nam het besluit.' → Passive:",opts:["Het besluit werd genomen door de minister.","De minister werd genomen.","Het besluit wordt genomen.","Het werd minister genomen."],ans:"Het besluit werd genomen door de minister.",hint:"Object → subject, ___ + PP, ___ + agent"},
        {type:"match",pairs:[{trg:"wordt geschreven",src:"is being written"},{trg:"werd geschreven",src:"was written"},{trg:"is geschreven",src:"has been written"},{trg:"er wordt gerookt",src:"people smoke / smoking happens"}]},
        {type:"fb",opts:["wordt","werd","is","zijn"],hint:"No smoking here (present impersonal)",s:"Er ___ hier niet gerookt.",a:"wordt"},
        {type:"drag_fill",hint:"It had to be discussed. (had moeten worden)",s:"Het {1} besproken moeten {2}.",blanks:{"1":"had","2":"worden"},pool:["had","worden","werd","zijn"]},
        {type:"mc",q:"'Door wie werd het gedaan?' asks:",opts:["When it was done","Where it was done","By whom it was done","Why it was done"],ans:"By whom it was done",hint:"Door wie = by ___"},
        {type:"fb",opts:["werd","wordt","is","had"],hint:"The law WAS adopted last year",s:"De wet ___ vorig jaar aangenomen.",a:"werd"},
        {type:"mc",q:"Worden-passive vs zijn-passive:",opts:["No difference","worden = process, zijn = result","worden = past, zijn = present","worden = formal, zijn = informal"],ans:"worden = process, zijn = result",hint:"Becoming vs being"},
        {type:"drag_fill",hint:"The rules ARE followed. The decision HAS BEEN made.",s:"De regels {1} gevolgd. Het besluit {2} genomen.",blanks:{"1":"worden","2":"is"},pool:["worden","is","werd","wordt"]},
        {type:"fb",opts:["wordt","werd","is","werden"],hint:"No smoking here: er WORDT + PP",s:"Er ___ hier niet gerookt. (present impersonal)",a:"wordt"},
        {type:"mc",q:"Active: 'Zij leest het boek.' What is the correct passive?",opts:["Het boek wordt gelezen.","Zij wordt gelezen.","Het boek is gelezen.","Het boek werd gelezen."],ans:"Het boek wordt gelezen.",hint:"Object becomes subject + ___ + PP (present)"},
        {type:"match",pairs:[{trg:"wordt + PP",src:"process passive (present)"},{trg:"werd + PP",src:"process passive (past)"},{trg:"is + PP",src:"state/result passive"},{trg:"er wordt + PP",src:"impersonal passive"}]},
        {type:"drag_fill",hint:"The problem WAS caused BY the storm.",s:"Het probleem {1} veroorzaakt {2} de storm.",blanks:{"1":"werd","2":"door"},pool:["werd","door","wordt","van"]},
        {type:"tr",mk:"v2u16_letter_was_written",dir:"produce"},
        {type:"tr",mk:"v2u16_no_smoking",dir:"produce"},
        {type:"tr",mk:"v2u16_decision_made",dir:"produce"}
  ]}
]};
