// Batch 8 – Unit 03 (A1.1 What Is This?): School & Office Items
const BATCH8_L1 = {
  id:"jav2_u03l_b8_1", title:"学校(がっこう)とオフィス", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"学校(がっこう)とオフィス",
     desc:"Learn vocabulary for common items found in schools and offices. These everyday objects appear constantly in Japanese textbooks and daily life conversations.",
     goals:["Name common school supplies and furniture","Identify office equipment","Use これ/それ/あれ with new items"]},

    {type:"teach", trg:"消(け)しゴム", src:"eraser", pos:"noun", gender:null,
     note:"消(け)す (to erase) + ゴム (rubber/gum, loanword).\nAlso called イレーサー in some contexts.",
     example:"A: 消(け)しゴムをかしてください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please lend me an eraser.\nB: Here you go.",
     funFact:"Japanese 消(け)しゴム are famous worldwide for their quality. Brands like MONO and Ain are considered the best erasers ever made. Japanese stationery culture (文具(ぶんぐ)) is a serious business, with dedicated stores and collectors."},

    {type:"teach", trg:"ものさし", src:"ruler", pos:"noun", gender:null,
     note:"Also called 定規(じょうぎ) (more technical term).\nものさし is the everyday word used in schools.",
     example:"A: ものさしで線(せん)をひいてください。\nB: はい、わかりました。",
     exampleSrc:"A: Please draw a line with a ruler.\nB: Okay, understood.",
     funFact:"ものさし literally means 'thing measurer.' In Japanese, ものさし is also used metaphorically: '自分(じぶん)のものさしではかる' means 'to measure by your own standards.' Bamboo rulers (竹(たけ)ものさし) were traditional school supplies for centuries."},

    {type:"teach", trg:"はさみ", src:"scissors", pos:"noun", gender:null,
     note:"Always singular in Japanese even though scissors have two blades.\nはさみで紙(かみ)を切(き)る = to cut paper with scissors.",
     example:"A: はさみはどこですか？\nB: 引(ひ)き出(だ)しの中(なか)にあります。",
     exampleSrc:"A: Where are the scissors?\nB: They are in the drawer.",
     funFact:"はさみ comes from the verb はさむ (to pinch/clip between). Japanese scissors are known for their sharpness. Traditional Japanese scissors (日本(にほん)ばさみ) have a U-shaped spring design completely different from Western scissors."},

    {type:"teach", trg:"のり", src:"glue / paste", pos:"noun", gender:null,
     note:"Liquid glue or stick glue. スティックのり = glue stick.\nのりづけする = to glue/paste.",
     example:"A: のりで紙(かみ)をはってください。\nB: はい、スティックのりでいいですか？",
     exampleSrc:"A: Please paste the paper with glue.\nB: Okay, is a glue stick fine?",
     funFact:"のり also means 'seaweed' (海苔(のり)), a completely different word with the same sound. Context makes it clear. Japanese craft culture uses のり extensively. Traditional のり was made from rice (ご飯(はん)のり) and was used for paper crafts like 折(お)り紙(がみ) for centuries."},

    {type:"teach", trg:"引(ひ)き出(だ)し", src:"drawer", pos:"noun", gender:null,
     note:"From 引(ひ)く (to pull) + 出(だ)す (to take out).\n机(つくえ)の引(ひ)き出(だ)し = desk drawer.",
     example:"A: ペンは引(ひ)き出(だ)しに入(い)れてください。\nB: どの引(ひ)き出(だ)しですか？",
     exampleSrc:"A: Please put the pen in the drawer.\nB: Which drawer?",
     funFact:"引(ひ)き出(だ)し literally means 'pull-out.' In Japanese schools, each student has a 机(つくえ) (desk) with a 引(ひ)き出(だ)し. The teacher sometimes does 引(ひ)き出(だ)し検査(けんさ) (drawer inspection) to make sure students keep their belongings organized."},

    {type:"mc", q:"What is 消(け)しゴム?", opts:["An eraser","A ruler","Scissors","Glue"], ans:"An eraser",
     hint:"This word combines 消(け)す (to erase) with ゴム (rubber)."},

    {type:"teach", trg:"黒板(こくばん)", src:"blackboard / chalkboard", pos:"noun", gender:null,
     note:"Kanji: 黒板 (black + board). 黒板消(こくばんけ)し = board eraser.\nホワイトボード = whiteboard.",
     example:"A: 黒板(こくばん)の字(じ)が見(み)えますか？\nB: すみません、見(み)えません。",
     exampleSrc:"A: Can you see the writing on the blackboard?\nB: Sorry, I cannot see it.",
     funFact:"Japanese classrooms traditionally use 黒板(こくばん), though ホワイトボード and digital screens are replacing them. The 黒板消(こくばんけ)し (board eraser) cleaning duty is a classic school task. Japanese 黒板(こくばん)アート (blackboard art) by graduating students has become an internet sensation."},

    {type:"teach", trg:"棚(たな)に", src:"on the shelf", pos:"noun", gender:null,
     note:"棚(たな) = shelf. 棚(たな)に置(お)く = to put on a shelf.\n本棚(ほんだな) = bookshelf.",
     example:"A: 辞書(じしょ)は棚(たな)にあります。\nB: どの棚(たな)ですか？",
     exampleSrc:"A: The dictionary is on the shelf.\nB: Which shelf?",
     funFact:"棚(たな) appears in many compound words: 本棚(ほんだな) (bookshelf), 壁棚(かべだな) (wall shelf), 冷蔵庫(れいぞうこ)の棚(たな) (refrigerator shelf). The phrase たなぼた is short for '棚(たな)からぼたもち' (rice cake falling from the shelf), meaning unexpected good luck."},

    {type:"teach", trg:"ホチキス", src:"stapler", pos:"noun", gender:null,
     note:"Named after the Hotchkiss brand that first sold them in Japan.\nホチキスでとめる = to staple.",
     example:"A: この資料(しりょう)をホチキスでとめてください。\nB: はい、いまとめます。",
     exampleSrc:"A: Please staple these documents.\nB: Okay, I will staple them now.",
     funFact:"Japan calls staplers ホチキス after the E.H. Hotchkiss company that imported the first ones to Japan in 1903. This is a classic example of a brand name becoming the generic word, like Xerox for photocopying. Other countries call it a stapler."},

    {type:"teach", trg:"コピー機(き)", src:"copy machine / photocopier", pos:"noun", gender:null,
     note:"コピー (copy, loanword) + 機(き) (machine).\nコピーする = to photocopy.",
     example:"A: コピー機(き)はどこですか？\nB: 廊下(ろうか)の突(つ)き当(あ)たりにあります。",
     exampleSrc:"A: Where is the copy machine?\nB: It is at the end of the hallway.",
     funFact:"Japanese convenience stores all have multifunction コピー機(き) that can print, scan, fax, and even print photos from your smartphone. This is why Japanese people rarely own home printers. The コンビニ (convenience store) コピー機(き) costs about 10 yen per page."},

    {type:"teach", trg:"ファイル", src:"file / folder / binder", pos:"noun", gender:null,
     note:"Loanword from English. クリアファイル = clear file/folder.\nVery common office supply in Japan.",
     example:"A: 資料(しりょう)をファイルに入(い)れてください。\nB: クリアファイルでいいですか？",
     exampleSrc:"A: Please put the documents in a file.\nB: Is a clear file okay?",
     funFact:"クリアファイル (clear plastic folders) are uniquely popular in Japan. They are used for everything: storing documents, protecting printouts, even as souvenirs. Museums, anime series, and companies all sell branded クリアファイル as merchandise."},

    {type:"fb", s:"はさみは{1}のなかにあります。\n(The scissors are in the drawer.)", a:"引(ひ)き出(だ)し", opts:["引(ひ)き出(だ)し","棚(たな)","机(つくえ)","黒板(こくばん)"], sSrc:"The scissors are in the drawer.",
     hint:"This word means a pull-out compartment in a desk or cabinet."},

    {type:"teach", trg:"電卓(でんたく)", src:"calculator", pos:"noun", gender:null,
     note:"Short for 電子(でんし)卓上(たくじょう)計算機(けいさんき) (electronic desktop calculator).\n電卓(でんたく)を使(つか)う = to use a calculator.",
     example:"A: 電卓(でんたく)をかしてください。\nB: スマホの電卓(でんたく)でいいですか？",
     exampleSrc:"A: Please lend me a calculator.\nB: Is the smartphone calculator okay?",
     funFact:"電卓(でんたく) is short for a very long word: 電子(でんし)卓上(たくじょう)計算機(けいさんき) (electronic desktop calculation machine). Japanese companies like Casio and Sharp pioneered pocket calculators in the 1970s. The 算盤(そろばん) (abacus) was Japan's calculator for centuries and is still taught in schools."},

    {type:"teach", trg:"辞書(じしょ)", src:"dictionary", pos:"noun", gender:null,
     note:"Kanji: 辞書. 電子(でんし)辞書(じしょ) = electronic dictionary.\n辞書(じしょ)をひく = to look up in a dictionary.",
     example:"A: この言葉(ことば)の意味(いみ)がわかりません。\nB: 辞書(じしょ)で調(しら)べてみてください。",
     exampleSrc:"A: I do not understand the meaning of this word.\nB: Please try looking it up in a dictionary.",
     funFact:"電子(でんし)辞書(じしょ) (electronic dictionaries) were hugely popular in Japan before smartphones. Casio and Sharp made specialized devices with multiple dictionaries built in. Japanese students still use paper 辞書(じしょ) in some schools. 国語(こくご)辞書(じしょ) (Japanese language dictionary) is a school essential."},

    {type:"match", pairs:[{trg:"消(け)しゴム",src:"eraser"},{trg:"はさみ",src:"scissors"},{trg:"のり",src:"glue"},{trg:"ホチキス",src:"stapler"},{trg:"電卓(でんたく)",src:"calculator"}],
     hint:"Match each Japanese item name with its English translation."},

    {type:"mc", q:"Why are staplers called ホチキス in Japan?", opts:["Named after the Hotchkiss brand that first imported them","It is the Japanese pronunciation of 'hook kiss'","It is an abbreviation of a longer word","Named after a Japanese inventor"], ans:"Named after the Hotchkiss brand that first imported them",
     hint:"This is a case of a b... name becoming the generic word for the product."},

    {type:"fb", s:"この言葉(ことば)を{1}で調(しら)べてください。\n(Please look up this word in a dictionary.)", a:"辞書(じしょ)", opts:["辞書(じしょ)","電卓(でんたく)","ノート","ファイル"], sSrc:"Please look up this word in a dictionary.",
     hint:"This reference book helps you find the meanings of words."},

    {type:"mc", q:"What does コピー機(き) mean?", opts:["Copy machine","Coffee maker","Computer","Calculator"], ans:"Copy machine",
     hint:"This compound word joins the loanword for 'c...' with the Japanese word for 'm....'"}
  ,{type:"match",pairs:[{trg:"ものさし",src:"ruler"},{trg:"黒板(こくばん)",src:"blackboard / chalkboard"},{trg:"棚(たな)に",src:"on the shelf"},{trg:"コピー機(き)",src:"copy machine / photocopier"},{trg:"ファイル",src:"file / folder / binder"}]}]
};
export default BATCH8_L1;
