// Batch 8 – Unit 03 (A1.1 What Is This?): School & Office Items
const BATCH8_L1 = {
  id:"jav2_u03l_b8_1", title:"がっこうとオフィス", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"がっこうとオフィス",
     desc:"Learn vocabulary for common items found in schools and offices. These everyday objects appear constantly in Japanese textbooks and daily life conversations.",
     goals:["Name common school supplies and furniture","Identify office equipment","Use これ/それ/あれ with new items"]},

    {type:"teach", trg:"けしゴム", src:"eraser", pos:"noun", gender:null,
     note:"けす (to erase) + ゴム (rubber/gum, loanword).\nAlso called イレーサー in some contexts.",
     example:"A: けしゴムをかしてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me an eraser.\nB: Here you go.",
     funFact:"Japanese けしゴム are famous worldwide for their quality. Brands like MONO and Ain are considered the best erasers ever made. Japanese stationery culture (ぶんぐ) is a serious business, with dedicated stores and collectors."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also called じょうぎ (more technical term).\nものさし is the everyday word used in schools.",
     example:"A: ものさしでせんをひいてください。\nB: はい、わかりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Okay, understood.",
     funFact:"ものさし literally means 'thing measurer.' In Japanese, ものさし is also used metaphorically: 'じぶんのものさしではかる' means 'to measure by your own standards.' Bamboo rulers (たけものさし) were traditional school supplies for centuries."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always singular in Japanese even though scissors have two blades.\nはさみでかみをきる = to cut paper with scissors.",
     example:"A: はさみはどこですか？\nB: ひきだしのなかにあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are in the drawer.",
     funFact:"はさみ comes from the verb はさむ (to pinch/clip between). Japanese scissors are known for their sharpness. Traditional Japanese scissors (にほんばさみ) have a U-shaped spring design completely different from Western scissors."},

    {type:"teach", trg:"のり", src:"glue / paste", pos:"noun", gender:null,
     note:"Liquid glue or stick glue. スティックのり = glue stick.\nのりづけする = to glue/paste.",
     example:"A: のりでかみをはってください。\nB: はい、スティックのりでいいですか？",
     exampleSrc:"A: Please paste the paper with glue.\nB: Okay, is a glue stick fine?",
     funFact:"のり also means 'seaweed' (海苔), a completely different word with the same sound. Context makes it clear. Japanese craft culture uses のり extensively. Traditional のり was made from rice (ごはんのり) and was used for paper crafts like おりがみ for centuries."},

    {type:"teach", trg:"ひきだし", src:"drawer", pos:"noun", gender:null,
     note:"From ひく (to pull) + だす (to take out).\nつくえのひきだし = desk drawer.",
     example:"A: ペンはひきだしにいれてください。\nB: どのひきだしですか？",
     exampleSrc:"A: Please put the pen in the drawer.\nB: Which drawer?",
     funFact:"ひきだし literally means 'pull-out.' In Japanese schools, each student has a つくえ (desk) with a ひきだし. The teacher sometimes does ひきだしけんさ (drawer inspection) to make sure students keep their belongings organized."},

    {type:"mc", q:"What is けしゴム?", opts:["An eraser","A ruler","Scissors","Glue"], ans:"An eraser",
     hint:"This word combines けす (to erase) with ゴム (rubber)."},

    {type:"teach", trg:"こくばん", src:"blackboard / chalkboard", pos:"noun", gender:null,
     note:"Kanji: 黒板 (black + board). こくばんけし = board eraser.\nホワイトボード = whiteboard.",
     example:"A: こくばんのじがみえますか？\nB: すみません、みえません。",
     exampleSrc:"A: Can you see the writing on the blackboard?\nB: Sorry, I cannot see it.",
     funFact:"Japanese classrooms traditionally use こくばん, though ホワイトボード and digital screens are replacing them. The こくばんけし (board eraser) cleaning duty is a classic school task. Japanese こくばんアート (blackboard art) by graduating students has become an internet sensation."},

    {type:"teach", trg:"たなに", src:"on the shelf", pos:"noun", gender:null,
     note:"たな = shelf. たなにおく = to put on a shelf.\nほんだな = bookshelf.",
     example:"A: じしょはたなにあります。\nB: どのたなですか？",
     exampleSrc:"A: The dictionary is on the shelf.\nB: Which shelf?",
     funFact:"たな (棚) appears in many compound words: ほんだな (bookshelf), かべだな (wall shelf), れいぞうこのたな (refrigerator shelf). The phrase たなぼた is short for 'たなからぼたもち' (rice cake falling from the shelf), meaning unexpected good luck."},

    {type:"teach", trg:"ホチキス", src:"stapler", pos:"noun", gender:null,
     note:"Named after the Hotchkiss brand that first sold them in Japan.\nホチキスでとめる = to staple.",
     example:"A: このしりょうをホチキスでとめてください。\nB: はい、いまとめます。",
     exampleSrc:"A: Please staple these documents.\nB: Okay, I will staple them now.",
     funFact:"Japan calls staplers ホチキス after the E.H. Hotchkiss company that imported the first ones to Japan in 1903. This is a classic example of a brand name becoming the generic word, like Xerox for photocopying. Other countries call it a stapler."},

    {type:"teach", trg:"コピーき", src:"copy machine / photocopier", pos:"noun", gender:null,
     note:"コピー (copy, loanword) + き (machine).\nコピーする = to photocopy.",
     example:"A: コピーきはどこですか？\nB: ろうかのつきあたりにあります。",
     exampleSrc:"A: Where is the copy machine?\nB: It is at the end of the hallway.",
     funFact:"Japanese convenience stores all have multifunction コピーき that can print, scan, fax, and even print photos from your smartphone. This is why Japanese people rarely own home printers. The コンビニ (convenience store) コピーき costs about 10 yen per page."},

    {type:"teach", trg:"ファイル", src:"file / folder / binder", pos:"noun", gender:null,
     note:"Loanword from English. クリアファイル = clear file/folder.\nVery common office supply in Japan.",
     example:"A: しりょうをファイルにいれてください。\nB: クリアファイルでいいですか？",
     exampleSrc:"A: Please put the documents in a file.\nB: Is a clear file okay?",
     funFact:"クリアファイル (clear plastic folders) are uniquely popular in Japan. They are used for everything: storing documents, protecting printouts, even as souvenirs. Museums, anime series, and companies all sell branded クリアファイル as merchandise."},

    {type:"fb", s:"はさみは{1}のなかにあります。\n(The scissors are in the drawer.)", a:"ひきだし", opts:["ひきだし","たな","つくえ","こくばん"], sSrc:"The scissors are in the drawer.",
     hint:"This word means a pull-out compartment in a desk or cabinet."},

    {type:"teach", trg:"でんたく", src:"calculator", pos:"noun", gender:null,
     note:"Short for でんしたくじょうけいさんき (electronic desktop calculator).\nでんたくをつかう = to use a calculator.",
     example:"A: でんたくをかしてください。\nB: スマホのでんたくでいいですか？",
     exampleSrc:"A: Please lend me a calculator.\nB: Is the smartphone calculator okay?",
     funFact:"でんたく is short for a very long word: 電子卓上計算機 (electronic desktop calculation machine). Japanese companies like Casio and Sharp pioneered pocket calculators in the 1970s. The そろばん (abacus) was Japan's calculator for centuries and is still taught in schools."},

    {type:"teach", trg:"じしょ", src:"dictionary", pos:"noun", gender:null,
     note:"Kanji: 辞書. でんしじしょ = electronic dictionary.\nじしょをひく = to look up in a dictionary.",
     example:"A: このことばのいみがわかりません。\nB: じしょでしらべてみてください。",
     exampleSrc:"A: I do not understand the meaning of this word.\nB: Please try looking it up in a dictionary.",
     funFact:"でんしじしょ (electronic dictionaries) were hugely popular in Japan before smartphones. Casio and Sharp made specialized devices with multiple dictionaries built in. Japanese students still use paper じしょ in some schools. こくごじしょ (Japanese language dictionary) is a school essential."},

    {type:"match", pairs:[{trg:"けしゴム",src:"eraser"},{trg:"はさみ",src:"scissors"},{trg:"のり",src:"glue"},{trg:"ホチキス",src:"stapler"},{trg:"でんたく",src:"calculator"}],
     hint:"Match each Japanese item name with its English translation."},

    {type:"mc", q:"Why are staplers called ホチキス in Japan?", opts:["Named after the Hotchkiss brand that first imported them","It is the Japanese pronunciation of 'hook kiss'","It is an abbreviation of a longer word","Named after a Japanese inventor"], ans:"Named after the Hotchkiss brand that first imported them",
     hint:"This is a case of a b... name becoming the generic word for the product."},

    {type:"fb", s:"このことばを{1}でしらべてください。\n(Please look up this word in a dictionary.)", a:"じしょ", opts:["じしょ","でんたく","ノート","ファイル"], sSrc:"Please look up this word in a dictionary.",
     hint:"This reference book helps you find the meanings of words."},

    {type:"mc", q:"What does コピーき mean?", opts:["Copy machine","Coffee maker","Computer","Calculator"], ans:"Copy machine",
     hint:"This compound word joins the loanword for 'c...' with the Japanese word for 'm....'"}
  ]
};
export default BATCH8_L1;
