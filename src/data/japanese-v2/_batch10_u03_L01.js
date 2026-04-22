// Batch 10 – Unit 03 (A1.1 What Is This?): Technology Items
const BATCH10_L1 = {
  id:"jav2_u03l_b10_1", title:"テクノロジー", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"テクノロジー",
     desc:"Learn vocabulary for everyday technology items. Many tech words in Japanese come from English, but some have unique Japanese terms.",
     goals:["Name common electronic devices","Understand katakana loanwords for technology","Ask about and describe gadgets"]},

    {type:"teach", trg:"スマホ", src:"smartphone", pos:"noun", gender:null,
     note:"Short for スマートフォン (smart phone).\nスマホを見(み)る = to look at one's phone.",
     example:"A: 新(あたら)しいスマホですか？\nB: はい、昨日(きのう)買(か)いました。",
     exampleSrc:"A: Is that a new smartphone?\nB: Yes, I bought it yesterday.",
     funFact:"スマホ is the standard abbreviation of スマートフォン. Japan had advanced mobile phones (ガラケー, or 'Galapagos phones') years before smartphones. These feature phones had mobile payments, TV, and internet before the iPhone existed."},

    {type:"teach", trg:"パソコン", src:"personal computer", pos:"noun", gender:null,
     note:"Short for パーソナルコンピューター.\nノートパソコン = laptop.",
     example:"A: パソコンが壊(こわ)れました。\nB: 修理(しゅうり)に出(だ)しましょう。",
     exampleSrc:"A: My computer broke.\nB: Let's send it for repair.",
     funFact:"パソコン is uniquely Japanese abbreviation. In English, people say PC, but in Japanese, パソコン is universal. Japanese companies like Fujitsu, NEC, and Toshiba were major パソコン manufacturers. ノートパソコン (laptop) is called ノートPC or just ノーパソ casually."},

    {type:"teach", trg:"電池(でんち)", src:"battery", pos:"noun", gender:null,
     note:"電(でん) = electricity, 池(ち) = pond/reservoir.\n電池(でんち)が切(き)れた = the battery died.",
     example:"A: スマホの電池(でんち)が切(き)れました。\nB: 充電(じゅうでん)してください。",
     exampleSrc:"A: My phone battery died.\nB: Please charge it.",
     funFact:"電池(でんち) literally means 'electricity pond,' imagining a reservoir of stored power. Japan's Panasonic (formerly Matsushita) is one of the world's largest 電池(でんち) manufacturers. The phrase 電池(でんち)が切(き)れた (battery cut out) is also slang for running out of energy."},

    {type:"teach", trg:"充電器(じゅうでんき)", src:"charger", pos:"noun", gender:null,
     note:"充電(じゅうでん) = charging, 器(き) = device.\n充電(じゅうでん)する = to charge.",
     example:"A: 充電器(じゅうでんき)を持(も)っていますか？\nB: はい、ここにあります。",
     exampleSrc:"A: Do you have a charger?\nB: Yes, it is here.",
     funFact:"充電器(じゅうでんき) is essential vocabulary for travelers in Japan. Many Japanese cafes and trains have USB charging ports. コンビニ (convenience stores) sell emergency chargers. The word 充電(じゅうでん) (充電) literally means 'fill with electricity.'"},

    {type:"teach", trg:"イヤホン", src:"earphones", pos:"noun", gender:null,
     note:"From English 'earphone.' Also: ヘッドホン = headphones.\nワイヤレスイヤホン = wireless earphones.",
     example:"A: イヤホンをつけてください。\nB: わかりました。",
     exampleSrc:"A: Please put on your earphones.\nB: Understood.",
     funFact:"In Japan, using イヤホン on trains is standard etiquette since playing audio out loud is extremely rude. Japanese trains are famously quiet, and イヤホン help maintain that peace. The term イヤフォン is also used, with the same meaning."},

    {type:"teach", trg:"プリンター", src:"printer", pos:"noun", gender:null,
     note:"From English 'printer.'\nプリンターで印刷(いんさつ)する = to print with a printer.",
     example:"A: プリンターが動(うご)きません。\nB: 紙(かみ)が詰(つ)まっていますね。",
     exampleSrc:"A: The printer is not working.\nB: Paper is jammed.",
     funFact:"Japan still relies heavily on printing. Japanese offices use プリンター extensively because physical stamps (はんこ) on printed documents are still legally required for many processes. The push to go paperless (ペーパーレス) is slowly changing this."},

    {type:"teach", trg:"電源(でんげん)", src:"power supply / power button", pos:"noun", gender:null,
     note:"電(でん) = electricity, 源(げん) = source.\n電源(でんげん)を入(い)れる = to turn on.",
     example:"A: 電源(でんげん)を入(い)れてください。\nB: ボタンはどこですか？",
     exampleSrc:"A: Please turn on the power.\nB: Where is the button?",
     funFact:"電源(でんげん) literally means 'electricity source.' 電源(でんげん)を切(き)る means to cut the power (turn off). Japanese electronics often have a separate 電源(でんげん)ボタン from other controls. The phrase 電源(でんげん)が入(はい)らない (power won't come on) is the first thing tech support asks about."},

    {type:"teach", trg:"画面(がめん)", src:"screen / display", pos:"noun", gender:null,
     note:"画(が) = painting, 面(めん) = surface.\n画面(がめん)が割(わ)れた = the screen cracked.",
     example:"A: 画面(がめん)が大(おお)きいですね。\nB: はい、動画(どうが)を見(み)るのに便利(べんり)です。",
     exampleSrc:"A: The screen is big.\nB: Yes, it is convenient for watching videos.",
     funFact:"画面(がめん) literally means 'picture surface.' Japanese people spend an average of several hours daily looking at screens, a phenomenon called 画面(がめん)時間(じかん) or the katakana スクリーンタイム. Japanese screens are known for high quality, with Sony and Sharp leading display technology."},

    {type:"mc", q:"What does 電池(でんち)が切(き)れた mean?", opts:["The battery died","The electricity went out","The charger broke","The screen cracked"], ans:"The battery died",
     hint:"電池(でんち) means b..., and 切(き)れた means it ran out or was cut off."},

    {type:"fb", s:"スマホの{1}が切(き)れました。充電(じゅうでん)してください。\n(My phone battery died. Please charge it.)", a:"電池(でんち)", opts:["電池(でんち)","電源(でんげん)","画面(がめん)","充電器(じゅうでんき)"], sSrc:"My phone battery died. Please charge it.",
     hint:"This word literally means 'electricity pond' and stores power in devices."},

    {type:"match", pairs:[
      {trg:"スマホ", src:"smartphone"},
      {trg:"パソコン", src:"personal computer"},
      {trg:"充電器(じゅうでんき)", src:"charger"},
      {trg:"画面(がめん)", src:"screen"}
    ]},

    {type:"mc", q:"What is a ノートパソコン?", opts:["A desktop computer","A laptop computer","A notebook for notes","A tablet device"], ans:"A laptop computer",
     hint:"ノート (notebook-sized) combined with パソコン (personal c...) gives you a portable c...."}
  ,{type:"match",pairs:[{trg:"イヤホン",src:"earphones"},{trg:"プリンター",src:"printer"},{trg:"電源(でんげん)",src:"power supply / power button"}]}]
};
export default BATCH10_L1;
