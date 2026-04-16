// Unit 35 Batch 2 Lesson 2: サイバーセキュリティー (Cybersecurity)
const BATCH2_L_2 = {
  id:"jav2_u35l_b2_2", title:"サイバーセキュリティー", icon:"🔐", xp:15, board:true,
  steps:[
    {type:"intro", title:"サイバーセキュリティー",
     desc:"Cybersecurity is a critical concern for Japan's digital transformation. Learn vocabulary for threats, defenses, and information security that appears in technology news, corporate policies, and JLPT N1 passages about modern society.",
     goals:["Use cybersecurity vocabulary","Discuss digital threats and defenses","Understand information security concepts"]},

    {type:"teach", trg:"ふせいアクセス", src:"unauthorized access / hacking", pos:"noun", gender:null,
     note:"ふせい (unauthorized) + アクセス (access).\nふせいアクセスきんしほう = Unauthorized Access Law.",
     example:"A: ふせいアクセスによるこじんじょうほうのろうえいがはっせいしました。\nB: ひがいきぼはどのくらいですか？",
     exampleSrc:"A: A personal data leak occurred due to unauthorized access.\nB: How large is the scale of damage?",
     funFact:"不正アクセス uses 不正 (unauthorized/fraudulent) and the loanword アクセス. Japan's ふせいアクセスきんしほう (Unauthorized Computer Access Law) was enacted in 1999 and revised in 2012. As Japan accelerates digitalization, ふせいアクセス incidents have increased, targeting government agencies, corporations, and critical infrastructure."},

    {type:"teach", trg:"あんごうか", src:"encryption / encoding", pos:"noun", gender:null,
     note:"Kanji: 暗号化. あんごうかする = to encrypt.\nあんごうかつうしん = encrypted communication.",
     example:"A: じゅうようなデータはあんごうかしてほごするべきです。\nB: パスワードかんりもてっていしましょう。",
     exampleSrc:"A: Important data should be protected through encryption.\nB: Let us also be thorough with password management.",
     funFact:"暗号化 uses 暗号 (cipher/code) and 化 (-ification). Japan has a complex relationship with あんごう (codes). During WWII, Japan's encrypted communications were famously broken by Allied code-breakers. Today, Japan is a leader in あんごうか technology, with companies like NTT developing post-quantum encryption methods."},

    {type:"teach", trg:"マルウェア", src:"malware", pos:"noun", gender:null,
     note:"Loanword from English. コンピュータウイルス = computer virus.\nランサムウェア = ransomware.",
     example:"A: マルウェアかんせんをふせぐためにセキュリティソフトをどうにゅうしましょう。\nB: ていきてきなアップデートもわすれないでください。",
     exampleSrc:"A: Let us install security software to prevent malware infection.\nB: Please do not forget regular updates either.",
     funFact:"マルウェア (from 'malicious software') has become common in Japanese business vocabulary. ランサムウェア (ransomware) attacks targeting Japanese hospitals, municipalities, and companies have increased dramatically. The Japanese government's NISC (National center of Incident readiness and Strategy for Cybersecurity) coordinates national defense against such threats."},

    {type:"mc", q:"あんごうか means:", opts:["Encryption / encoding","Decryption","Data deletion","Data backup"], ans:"Encryption / encoding",
     hint:"This process converts readable data into coded form that requires a key to access."},

    {type:"teach", trg:"ろうえい", src:"leak / disclosure (of information)", pos:"noun", gender:null,
     note:"Kanji: 漏洩. じょうほうろうえい = information leak.\nきみつろうえい = classified information leak.",
     example:"A: じょうほうろうえいをふせぐためのたいさくがきゅうむです。\nB: じゅうぎょういんきょういくもじゅうようですね。",
     exampleSrc:"A: Measures to prevent information leaks are urgently needed.\nB: Employee education is also important.",
     funFact:"漏洩 uses 漏 (leak/drip) and 洩 (leak/divulge). じょうほうろうえい incidents in Japan range from corporate data breaches to government document leaks. Japan's Personal Information Protection Act (PIPA) was revised in 2022 to require mandatory breach notification. Companies face penalties for failing to protect personal data."},

    {type:"teach", trg:"にんしょう", src:"authentication / verification", pos:"noun", gender:null,
     note:"Kanji: 認証. にだんかいにんしょう = two-factor authentication.\nせいたいにんしょう = biometric authentication.",
     example:"A: にだんかいにんしょうをゆうこうにしてください。\nB: パスワードだけではふじゅうぶんですか？",
     exampleSrc:"A: Please enable two-factor authentication.\nB: Is a password alone insufficient?",
     funFact:"認証 uses 認 (recognize/certify) and 証 (prove/certificate). Japan is advancing にんしょう technology rapidly: facial recognition in airports, fingerprint authentication on smartphones, and マイナンバーカード (My Number Card) for digital identity. せいたいにんしょう (biometric authentication) using fingerprints, face, or veins is widely deployed in Japanese banking."},

    {type:"teach", trg:"ぜいじゃくせい", src:"vulnerability (security)", pos:"noun", gender:null,
     note:"Kanji: 脆弱性. システムのぜいじゃくせい = system vulnerability.\nぜいじゃくせいしんだん = vulnerability assessment.",
     example:"A: ソフトウェアのぜいじゃくせいがはっけんされました。\nB: はやめにパッチをてきようしてください。",
     exampleSrc:"A: A software vulnerability was discovered.\nB: Please apply the patch promptly.",
     funFact:"脆弱性 uses 脆弱 (fragile/vulnerable) and 性 (nature). In cybersecurity, ぜいじゃくせい refers to weaknesses in software, hardware, or processes that attackers can exploit. Japan's IPA (Information-technology Promotion Agency) maintains a vulnerability database and coordinates responsible disclosure between security researchers and software vendors."},

    {type:"fb", s:"じょうほう{1}をふせぐためのたいさくがきゅうむです。\n(Measures to prevent information leaks are urgently needed.)", a:"ろうえい", opts:["ろうえい","アクセス","にんしょう","あんごう"], sSrc:"Measures to prevent information leaks are urgently needed.",
     hint:"The noun for unauthorized disclosure of confidential data, like water leaking from a container."},

    {type:"teach", trg:"フィッシング", src:"phishing", pos:"noun", gender:null,
     note:"Loanword from English. フィッシングメール = phishing email.\nフィッシングさぎ = phishing scam.",
     example:"A: フィッシングメールにちゅういしてください。\nB: ふしんなリンクはクリックしないようにしましょう。",
     exampleSrc:"A: Please be careful of phishing emails.\nB: Let us avoid clicking suspicious links.",
     funFact:"フィッシング is the top サイバーこうげき (cyberattack) vector in Japan. Attackers impersonate banks, government agencies, and delivery services. Japanese-language フィッシング has become increasingly sophisticated, using natural Japanese and mimicking real websites. The annual losses from フィッシングさぎ in Japan reach billions of yen."},

    {type:"teach", trg:"ファイアウォール", src:"firewall", pos:"noun", gender:null,
     note:"Loanword from English. ネットワークファイアウォール = network firewall.\nA barrier between trusted and untrusted networks.",
     example:"A: かいしゃのネットワークはファイアウォールでほごされています。\nB: それだけではたりないばあいもありますね。",
     exampleSrc:"A: The company's network is protected by a firewall.\nB: There are cases where that alone is not enough.",
     funFact:"ファイアウォール is used as-is in Japanese IT vocabulary. Japanese cybersecurity combines Western technology with uniquely Japanese challenges: legacy systems in government offices, a shortage of security professionals, and cultural reluctance to report breaches. The government aims to train 250,000 cybersecurity professionals by 2025 to address the talent gap."},

    {type:"mc", q:"にだんかいにんしょう provides:", opts:["Extra security beyond just a password","Faster login speed","Automatic password generation","Free internet access"], ans:"Extra security beyond just a password",
     hint:"Two-factor authentication requires something you know (p...) plus something you have (phone/token)."},

    {type:"fb", s:"ソフトウェアの{1}がはっけんされました。\n(A software vulnerability was discovered.)", a:"ぜいじゃくせい", opts:["ぜいじゃくせい","あんごうか","にんしょう","ファイアウォール"], sSrc:"A software vulnerability was discovered.",
     hint:"The security term for a weakness or flaw that can be exploited by attackers."},

    {type:"match", pairs:[{trg:"ふせいアクセス",src:"unauthorized access"},{trg:"あんごうか",src:"encryption"},{trg:"マルウェア",src:"malware"},{trg:"ろうえい",src:"leak"}]},

    {type:"fb", s:"フィッシング{1}にちゅういしてください。\n(Please be careful of phishing emails.)", a:"メール", opts:["メール","サイト","アプリ","ソフト"], sSrc:"Please be careful of phishing emails.",
     hint:"The loanword for electronic messages, the most common vector for phishing attacks."},

    {type:"match", pairs:[{trg:"にんしょう",src:"authentication"},{trg:"ぜいじゃくせい",src:"vulnerability"},{trg:"フィッシング",src:"phishing"},{trg:"ファイアウォール",src:"firewall"}]},

    {type:"mc", q:"Japan faces a cybersecurity challenge because:", opts:["There is a shortage of security professionals","Japan does not use the internet","All systems are already perfectly secure","Cybercrime does not exist in Japan"], ans:"There is a shortage of security professionals",
     hint:"The government is actively working to train hundreds of thousands of cybersecurity specialists."},
  ]
};
export default BATCH2_L_2;
