// Unit 20 Expansion. Lesson 6: 役所(やくしょ)の手続(てつづ)き (Administrative Situations)
// PP58 gap fill: F22 "Handle administrative situations" (B1)
// PP65: all Japanese content uses kanji+furigana
// PP61: all metalanguage in English
// PP63: examples use only words taught here or in prior units
// PP64: every teach card quizzed
// PP67: 2+ production fb steps

const LESSON_ADMIN = {
  id:"jav2_u20l_burocr",
  title:"役所(やくしょ)の手続(てつづ)き",
  icon:"🏛️",
  xp:15,
  board:true,
  steps:[

  {type:"intro", title:"Handling Administrative Situations",
   desc:"Learn vocabulary for Japanese bureaucracy: 役所 (city hall), 住民票 (resident record), 在留カード (residence card), forms. Tested on JLPT N3 and essential for living in Japan.",
   goals:["Navigate the 役所(やくしょ) (city hall)","Request official documents","Use polite Japanese in administrative contexts"]},

  {type:"teach", trg:"住民票(じゅうみんひょう)", src:"resident record / certificate of residence", pos:"noun", gender:null,
   note:"Official document proving your registered address in Japan.\n役所(やくしょ)で発行(はっこう)してもらえます = obtainable at city hall.",
   example:"A: 住民票(じゅうみんひょう)が必要(ひつよう)です。\nB: 役所(やくしょ)で申請(しんせい)できますよ。",
   exampleSrc:"A: I need a resident record.\nB: You can apply for it at city hall.",
   funFact:"The 住民票 is Japan's most-requested official document. It proves your address for opening bank accounts, signing leases, school enrollment, and more. Non-Japanese residents get a similar document called 住民票(じゅうみんひょう) since 2012, when the alien registration system was merged into the regular residency system."},

  {type:"teach", trg:"在留(ざいりゅう)カード", src:"residence card (for foreign nationals)", pos:"noun", gender:null,
   note:"ID card issued to non-Japanese residents staying over 3 months.\n在留(ざいりゅう) = residence / stay.",
   example:"A: 在留(ざいりゅう)カードはお持(も)ちですか？\nB: はい、こちらです。",
   exampleSrc:"A: Do you have your residence card?\nB: Yes, here it is.",
   funFact:"The 在留カード replaced the old 外国人登録証明書 (alien registration card) in 2012. It is issued at the airport on arrival and must be carried at all times. The card shows your visa status (在留資格), period of stay, and whether you are allowed to work. Immigration officers and police can ask to see it."},

  {type:"teach", trg:"手続(てつづ)き", src:"procedure / paperwork / formalities", pos:"noun", gender:null,
   note:"Refers to any official process requiring steps or forms.\n手続(てつづ)きをする = to complete a procedure.",
   example:"A: 手続(てつづ)きはどこでできますか？\nB: 一階(いっかい)の窓口(まどぐち)でお願(ねが)いします。",
   exampleSrc:"A: Where can I complete the procedure?\nB: Please go to the counter on the first floor.",
   funFact:"手続き literally combines 手 (hand) and 続き (continuation), suggesting a chain of steps done by hand. Japan is known for its elaborate administrative procedures. Hanko (personal seals) were traditionally required for almost all official forms, though digital reforms since 2020 have gradually reduced this requirement."},

  {type:"teach", trg:"申請(しんせい)する", src:"to apply / to submit an application", pos:"verb", gender:null,
   note:"Used when formally applying for documents, permits, or benefits.\n申請書(しんせいしょ) = application form.",
   example:"A: 住民票(じゅうみんひょう)を申請(しんせい)したいのですが。\nB: こちらの書類(しょるい)に名前(なまえ)と住所(じゅうしょ)を書(か)いてください。",
   exampleSrc:"A: I would like to apply for a resident record.\nB: Please write your name and address on these documents.",
   funFact:"申請 uses the kanji 申 (to state/report) and 請 (to request). This formal compound appears across all official contexts: visa applications (ビザの申請), benefit claims (給付金(きゅうふきん)の申請), and permit requests. Online申請 (digital applications) became widespread after Japan's 2020 administrative digitization push."},

  {type:"teach", trg:"更新(こうしん)する", src:"to renew / to update", pos:"verb", gender:null,
   note:"Used for renewing visas, ID cards, driver's licenses, and contracts.\n在留(ざいりゅう)カードを更新(こうしん)する = to renew a residence card.",
   example:"A: 在留(ざいりゅう)カードを更新(こうしん)したいです。\nB: 有効期限(ゆうこうきげん)の確認(かくにん)をします。",
   exampleSrc:"A: I would like to renew my residence card.\nB: I will confirm the expiration date.",
   funFact:"更新 combines 更 (again/renew) and 新 (new). Beyond official documents, it is used for software updates (アプリを更新する), contract renewals (契約(けいやく)を更新する), and even refreshing a web page (ページを更新する). The concept of renewing and refreshing runs through many everyday digital and administrative contexts in Japan."},

  {type:"teach", trg:"書類(しょるい)", src:"documents / paperwork / written materials", pos:"noun", gender:null,
   note:"General term for official papers and forms.\n書類(しょるい)を提出(ていしゅつ)する = to submit documents.",
   example:"A: 必要(ひつよう)な書類(しょるい)を教(おし)えてください。\nB: パスポートと申請書(しんせいしょ)が必要(ひつよう)です。",
   exampleSrc:"A: Please tell me what documents are needed.\nB: A passport and application form are required.",
   funFact:"書類 literally means 'writing types' or 'document varieties.' Japanese bureaucracy is famously document-heavy: a simple address change can require multiple 書類. The phrase 書類選考(しょるいせんこう) (document screening) is the first hurdle in Japanese job applications, where resumes and cover letters are reviewed before any interview."},

  {type:"teach", trg:"記入(きにゅう)する", src:"to fill in / to write in (a form)", pos:"verb", gender:null,
   note:"Specifically for writing information into a form or blank space.\n記入(きにゅう)してください = please fill this in.",
   example:"A: こちらの用紙(ようし)に記入(きにゅう)してください。\nB: 名前(なまえ)と住所(じゅうしょ)でいいですか？",
   exampleSrc:"A: Please fill in this form.\nB: Is name and address OK?",
   funFact:"記入 combines 記 (record/write) and 入 (enter/put in). You will hear 記入してください constantly at city halls, hospitals, banks, and post offices. The related noun 記入欄(きにゅうらん) means 'field to fill in' on a form. Forgetting a single field often means starting the whole form over in Japan's paper-based admin system."},

  {type:"tip", title:"At the City Hall (役所(やくしょ)で)",
   text:"Key phrases for administrative visits:\n記入(きにゅう)してください = please fill in this form\n申請書(しんせいしょ) = application form\n証明書(しょうめいしょ) = certificate / proof\n有効期限(ゆうこうきげん) = expiration date\n\nPolite request patterns (from 謙譲語(けんじょうご)):\n〜していただけますか = could you please do...\n〜をお願(ねが)いしたいのですが = I would like to request...\n\nUseful responses:\nお待(ま)ちください = please wait\nこちらへどうぞ = please come this way",
   deepDive:{title:"Why Keigo Matters at City Hall",
    text:"Administrative offices are formal contexts requiring polite speech. When making requests, use the humble pattern:\n\n住民票(じゅうみんひょう)を申請(しんせい)したいのですが = I would like to apply for a resident record.\n\nThe のですが ending softens the request. Adding いただけますか makes it even more polite:\n確認(かくにん)していただけますか = Could you please confirm?\n\nStaff respond with sonkeigo (honorific): いらっしゃいますか (are you here?), なさいますか (will you do?). Recognizing both directions of keigo helps you navigate any official encounter."}},

  {type:"mc", q:"住民票(じゅうみんひょう) is:", opts:["a residence card for foreigners","a resident record proving your address","an application form","a renewal notice"], ans:"a resident record proving your address",
   hint:"This document proves where you live in Japan. It is issued by the 役所(やくしょ) and needed for many official purposes."},

  {type:"mc", q:"在留(ざいりゅう)カード is specifically issued to:", opts:["Japanese citizens only","all residents for ID","foreign nationals staying over 3 months","students over 18"], ans:"foreign nationals staying over 3 months",
   hint:"The kanji 在留 means '…/residing.' This card is not for Japanese citizens but for people from other countries living in Japan."},

  {type:"fb", s:"パスポートと{1}が必要(ひつよう)です。\n(A passport and documents are required.)", a:"書類(しょるい)", opts:["書類(しょるい)","手続(てつづ)き","申請(しんせい)","更新(こうしん)"], sSrc:"A passport and documents are required.",
   hint:"The general word for official papers or written materials needed for an application."},

  {type:"fb", s:"こちらの用紙(ようし)に{1}してください。\n(Please fill in this form.)", a:"記入(きにゅう)", opts:["記入(きにゅう)","申請(しんせい)","更新(こうしん)","確認(かくにん)"], sSrc:"Please fill in this form.",
   hint:"The verb meaning to write information INTO a form or blank, not to apply or renew."},

  {type:"match", pairs:[
    {trg:"住民票(じゅうみんひょう)", src:"resident record"},
    {trg:"在留(ざいりゅう)カード", src:"residence card (foreigners)"},
    {trg:"手続(てつづ)き", src:"procedure / paperwork"},
    {trg:"書類(しょるい)", src:"documents / written materials"}
  ]},

  {type:"match", pairs:[
    {trg:"申請(しんせい)する", src:"to apply"},
    {trg:"更新(こうしん)する", src:"to renew"},
    {trg:"記入(きにゅう)する", src:"to fill in a form"},
    {trg:"確認(かくにん)する", src:"to confirm"}
  ]},

  {type:"fb", s:"在留(ざいりゅう)カードを{1}したいです。\n(I would like to renew my residence card.)", a:"更新(こうしん)", opts:["更新(こうしん)","申請(しんせい)","記入(きにゅう)","手続(てつづ)き"], sSrc:"I would like to renew my residence card.",
   hint:"Use the する-verb that means to renew or update something, not to apply from scratch."},

]};
export default LESSON_ADMIN;
