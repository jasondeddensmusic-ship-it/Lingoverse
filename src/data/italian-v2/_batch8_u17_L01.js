// Batch 8. Unit 17 extra lesson. Media & Tech: Digital Life & Devices
const BATCH8_L1 = {id:"itv2_u17l_b8_1", title:"La vita digitale", icon:"💻", xp:15, board:true, steps:[
{type:"intro", title:"La vita digitale",
 desc:"Learn vocabulary for computers, devices, and navigating digital life in Italian.",
 goals:["Name computer hardware components","Describe digital activities","Troubleshoot basic tech problems"]},

{type:"teach", trg:"lo schermo", src:"the screen", pos:"noun", gender:"m",
 note:"Masculine noun. 'Schermo tattile' = touch screen.\n'Grande schermo' = big screen (cinema).",
 example:"A: Lo schermo del telefono si e rotto.\nB: Portalo a riparare al negozio.",
 exampleSrc:"A: The phone screen broke.\nB: Take it to be repaired at the shop.",
 funFact:"'Schermo' comes from the Germanic 'skirm' (shield/protection). A screen was originally something that shields or protects, like a fireplace screen."},

{type:"teach", trg:"la tastiera", src:"the keyboard", pos:"noun", gender:"f",
 note:"Feminine noun. From 'tasto' (key/button).\n'Tastiera italiana' has accented keys: e, a, o.",
 example:"A: La tastiera non funziona bene.\nB: Prova a pulirla, forse ci sono briciole.",
 exampleSrc:"A: The keyboard is not working well.\nB: Try cleaning it, maybe there are crumbs.",
 funFact:"Italian keyboards have a different layout from English ones. The @, [, ], and other symbols are in completely different positions. Many Italians struggle with English keyboards."},

{type:"teach", trg:"la stampante", src:"the printer", pos:"noun", gender:"f",
 note:"Feminine noun. 'Stampare' = to print. 'La stampa' = the press/printing.\n'Stampante laser/inkjet.'",
 example:"A: La stampante ha finito l'inchiostro.\nB: Compra le cartucce nuove.",
 exampleSrc:"A: The printer ran out of ink.\nB: Buy new cartridges.",
 funFact:"'La Stampa' is one of Italy's oldest newspapers, founded in 1867 in Turin. The name simply means 'The Press,' reflecting the newspaper's connection to the printing press."},

{type:"teach", trg:"la chiavetta USB", src:"the USB drive / flash drive", pos:"noun", gender:"f",
 note:"Feminine noun. 'Chiavetta' = little key.\n'Salvare sulla chiavetta' = to save on the USB.",
 example:"A: Hai la chiavetta con la presentazione?\nB: Si, eccola qui.",
 exampleSrc:"A: Do you have the USB with the presentation?\nB: Yes, here it is.",
 funFact:"Italians call it a 'chiavetta' (little key) because it resembles a small key. Some also say 'pennetta USB' (little pen USB). Both are widely understood."},

{type:"teach", trg:"aggiornare", src:"to update", pos:"verb", gender:null,
 note:"Regular -are verb. 'L'aggiornamento' = the update.\n'Aggiornare il software' = to update the software.",
 example:"A: Devi aggiornare il sistema operativo.\nB: Quanto tempo ci vuole?",
 exampleSrc:"A: You need to update the operating system.\nB: How long does it take?",
 funFact:"'Aggiornare' literally means 'to bring to the current day' (a + giorno). An 'aggiornamento' brings something up to date. Used for software, news, and personal updates."},

{type:"teach", trg:"il collegamento", src:"the connection / link", pos:"noun", gender:"m",
 note:"Masculine noun. 'Collegamento internet' = internet connection.\n'Collegare' = to connect.",
 example:"A: Il collegamento internet e molto lento.\nB: Prova a riavviare il router.",
 exampleSrc:"A: The internet connection is very slow.\nB: Try restarting the router.",
 funFact:"'In collegamento' is what Italian news anchors say when connecting to a remote reporter. 'Siamo in collegamento con Roma' = We are connected to Rome."},

{type:"teach", trg:"il caricatore", src:"the charger", pos:"noun", gender:"m",
 note:"Masculine noun. From 'caricare' (to charge/load).\n'Caricatore del telefono' = phone charger.",
 example:"A: Hai un caricatore? Il mio telefono e scarico.\nB: Si, usa il mio.",
 exampleSrc:"A: Do you have a charger? My phone is dead.\nB: Yes, use mine.",
 funFact:"Asking for a charger is one of the most common interactions in modern Italy. 'Il telefono e scarico' (the phone is dead) is an everyday emergency."},

{type:"teach", trg:"il file", src:"the file (digital)", pos:"noun", gender:"m",
 note:"Masculine noun. Borrowed from English. Invariable plural: i file.\n'Salvare un file' = to save a file.",
 example:"A: Dove hai salvato il file?\nB: Sul desktop, nella cartella 'Lavoro.'",
 exampleSrc:"A: Where did you save the file?\nB: On the desktop, in the 'Work' folder.",
 funFact:"Italian borrowed 'file' from English but pronounces it 'FEE-leh.' The Italian word for standing in line ('la fila') is almost identical, causing occasional confusion."},

{type:"teach", trg:"il backup", src:"the backup", pos:"noun", gender:"m",
 note:"Masculine noun. Borrowed from English.\n'Fare il backup' = to make a backup.",
 example:"A: Hai fatto il backup dei dati?\nB: No, lo faccio subito!",
 exampleSrc:"A: Did you make a backup of the data?\nB: No, I will do it right away!",
 funFact:"Italian tech vocabulary borrows heavily from English. Words like backup, download, software, and browser are used daily, though purists prefer 'copia di sicurezza' for backup."},

{type:"mc",
 q:"What does 'il telefono e scarico' mean?",
 opts:["The phone battery is dead","The phone is downloading","The phone is new","The phone is charging"],
 ans:"The phone battery is dead",
 hint:"'Scarico' means empty or drained. When a b... has no charge left, it is 'scarico.'"},

{type:"match", pairs:[
  {trg:"lo schermo", src:"the screen"},
  {trg:"la tastiera", src:"the keyboard"},
  {trg:"la stampante", src:"the printer"},
  {trg:"il caricatore", src:"the charger"}
]},

{type:"fb",
 s:"Devi {1} il sistema operativo all'ultima versione.",
 a:["aggiornare"],
 opts:["aggiornare","stampare","collegare","salvare"],
 hint:"This verb means 'to update.' You bring the software to the current version.",
 sSrc:"You need to {1} the operating system to the latest version."},

{type:"mc",
 q:"Why might the Italian word 'file' cause confusion?",
 opts:["It is always feminine","It sounds almost identical to 'fila' (queue)","It means something different in Italian","It is never used in Italy"],
 ans:"It sounds almost identical to 'fila' (queue)",
 hint:"The English borrowing 'file' (FEE-leh) and the Italian 'f...' (q...) sound very similar."},

{type:"fb",
 s:"Hai la {1} USB con la presentazione?",
 a:["chiavetta"],
 opts:["chiavetta","tastiera","stampante","cartuccia"],
 hint:"This is a small portable storage device. Its Italian name means 'little key' because of its shape.",
 sSrc:"Do you have the USB {1} with the presentation?"},

{type:"mc",
 q:"What does 'aggiornare' literally mean?",
 opts:["To restart","To connect","To bring to the current day","To make faster"],
 ans:"To bring to the current day",
 hint:"Break it down: 'a' (to) + 'giorno' (day). Bringing something up to the present day."}
,{type:"match",pairs:[{trg:"il collegamento",src:"the connection / link"},{trg:"il file",src:"the file (digital)"},{trg:"il backup",src:"the backup"}]}]};
export default BATCH8_L1;
