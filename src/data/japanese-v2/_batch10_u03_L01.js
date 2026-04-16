// Batch 10 – Unit 03 (A1.1 What Is This?): Technology Items
const BATCH10_L1 = {
  id:"jav2_u03l_b10_1", title:"テクノロジー", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"テクノロジー",
     desc:"Learn vocabulary for everyday technology items. Many tech words in Japanese come from English, but some have unique Japanese terms.",
     goals:["Name common electronic devices","Understand katakana loanwords for technology","Ask about and describe gadgets"]},

    {type:"teach", trg:"スマホ", src:"smartphone", pos:"noun", gender:null,
     note:"Short for スマートフォン (smart phone).\nスマホをみる = to look at one's phone.",
     example:"A: あたらしいスマホですか？\nB: はい、きのうかいました。",
     exampleSrc:"A: Is that a new smartphone?\nB: Yes, I bought it yesterday.",
     funFact:"スマホ is the standard abbreviation of スマートフォン. Japan had advanced mobile phones (ガラケー, or 'Galapagos phones') years before smartphones. These feature phones had mobile payments, TV, and internet before the iPhone existed."},

    {type:"teach", trg:"パソコン", src:"personal computer", pos:"noun", gender:null,
     note:"Short for パーソナルコンピューター.\nノートパソコン = laptop.",
     example:"A: パソコンがこわれました。\nB: しゅうりにだしましょう。",
     exampleSrc:"A: My computer broke.\nB: Let's send it for repair.",
     funFact:"パソコン is uniquely Japanese abbreviation. In English, people say PC, but in Japanese, パソコン is universal. Japanese companies like Fujitsu, NEC, and Toshiba were major パソコン manufacturers. ノートパソコン (laptop) is called ノートPC or just ノーパソ casually."},

    {type:"teach", trg:"でんち", src:"battery", pos:"noun", gender:null,
     note:"でん = electricity, ち = pond/reservoir.\nでんちがきれた = the battery died.",
     example:"A: スマホのでんちがきれました。\nB: じゅうでんしてください。",
     exampleSrc:"A: My phone battery died.\nB: Please charge it.",
     funFact:"でんち (電池) literally means 'electricity pond,' imagining a reservoir of stored power. Japan's Panasonic (formerly Matsushita) is one of the world's largest でんち manufacturers. The phrase でんちがきれた (battery cut out) is also slang for running out of energy."},

    {type:"teach", trg:"じゅうでんき", src:"charger", pos:"noun", gender:null,
     note:"じゅうでん = charging, き = device.\nじゅうでんする = to charge.",
     example:"A: じゅうでんきをもっていますか？\nB: はい、ここにあります。",
     exampleSrc:"A: Do you have a charger?\nB: Yes, it is here.",
     funFact:"じゅうでんき is essential vocabulary for travelers in Japan. Many Japanese cafes and trains have USB charging ports. コンビニ (convenience stores) sell emergency chargers. The word じゅうでん (充電) literally means 'fill with electricity.'"},

    {type:"teach", trg:"イヤホン", src:"earphones", pos:"noun", gender:null,
     note:"From English 'earphone.' Also: ヘッドホン = headphones.\nワイヤレスイヤホン = wireless earphones.",
     example:"A: イヤホンをつけてください。\nB: わかりました。",
     exampleSrc:"A: Please put on your earphones.\nB: Understood.",
     funFact:"In Japan, using イヤホン on trains is standard etiquette since playing audio out loud is extremely rude. Japanese trains are famously quiet, and イヤホン help maintain that peace. The term イヤフォン is also used, with the same meaning."},

    {type:"teach", trg:"プリンター", src:"printer", pos:"noun", gender:null,
     note:"From English 'printer.'\nプリンターでいんさつする = to print with a printer.",
     example:"A: プリンターがうごきません。\nB: かみがつまっていますね。",
     exampleSrc:"A: The printer is not working.\nB: Paper is jammed.",
     funFact:"Japan still relies heavily on printing. Japanese offices use プリンター extensively because physical stamps (はんこ) on printed documents are still legally required for many processes. The push to go paperless (ペーパーレス) is slowly changing this."},

    {type:"teach", trg:"でんげん", src:"power supply / power button", pos:"noun", gender:null,
     note:"でん = electricity, げん = source.\nでんげんをいれる = to turn on.",
     example:"A: でんげんをいれてください。\nB: ボタンはどこですか？",
     exampleSrc:"A: Please turn on the power.\nB: Where is the button?",
     funFact:"でんげん (電源) literally means 'electricity source.' でんげんをきる means to cut the power (turn off). Japanese electronics often have a separate でんげんボタン from other controls. The phrase でんげんがはいらない (power won't come on) is the first thing tech support asks about."},

    {type:"teach", trg:"がめん", src:"screen / display", pos:"noun", gender:null,
     note:"が = painting, めん = surface.\nがめんがわれた = the screen cracked.",
     example:"A: がめんがおおきいですね。\nB: はい、どうがをみるのにべんりです。",
     exampleSrc:"A: The screen is big.\nB: Yes, it is convenient for watching videos.",
     funFact:"がめん (画面) literally means 'picture surface.' Japanese people spend an average of several hours daily looking at screens, a phenomenon called がめんじかん or the katakana スクリーンタイム. Japanese screens are known for high quality, with Sony and Sharp leading display technology."},

    {type:"mc", q:"What does でんちがきれた mean?", opts:["The battery died","The electricity went out","The charger broke","The screen cracked"], ans:"The battery died",
     hint:"でんち means b..., and きれた means it ran out or was cut off."},

    {type:"fb", s:"スマホの{1}がきれました。じゅうでんしてください。\n(My phone battery died. Please charge it.)", a:"でんち", opts:["でんち","でんげん","がめん","じゅうでんき"], sSrc:"My phone battery died. Please charge it.",
     hint:"This word literally means 'electricity pond' and stores power in devices."},

    {type:"match", pairs:[
      {trg:"スマホ", src:"smartphone"},
      {trg:"パソコン", src:"personal computer"},
      {trg:"じゅうでんき", src:"charger"},
      {trg:"がめん", src:"screen"}
    ]},

    {type:"mc", q:"What is a ノートパソコン?", opts:["A laptop computer","A notebook for notes","A tablet device","A desktop computer"], ans:"A laptop computer",
     hint:"ノート (notebook-sized) combined with パソコン (personal computer) gives you a portable computer."}
  ]
};
export default BATCH10_L1;
