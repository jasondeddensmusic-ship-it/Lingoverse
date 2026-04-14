// Korean B2 — Batch 4, Lesson 20: Protection and Fortune
// Words: 보수, 보수적, 보안, 보완하다, 보자기, 보장, 보장되다, 보장하다, 보전, 보조, 보존, 보존하다, 보충하다, 보편적, 보호되다, 보호하다, 복, 복사, 복사기, 복사하다

const LESSON_20 = {
  id:"kov2_b2b4_l20", title:"보호와 복", icon:"🛡️", xp:15, board:true,
  steps:[
    {type:"intro", title:"보호와 복",
     desc:"Learn words about protection, conservation, and fortune. This lesson completes the 보- vocabulary cluster with guarantee, preservation, and blessing words.",
     goals:["Master 20 words about protection, conservation, and copying","Understand 보- Hanja compounds (protect, preserve, guarantee)","Use 복- words for blessings and reproduction"]},

    {type:"teach", trg:"보수", src:"repair; conservative; pay/remuneration", pos:"noun", gender:null,
     note:"Multiple Hanja.\n補修 (repair), 保守 (conservative), 報酬 (pay).",
     example:"A: 건물 보수 공사가 시작됐어요.\nB: 공사 기간이 얼마나 돼요?",
     exampleSrc:"A: Building repair work has started.\nB: How long is the construction period?",
     funFact:"Three different 보수: 도로 보수 (road repair), 보수적 (conservative), 보수를 받다 (receive pay). Context is crucial."},

    {type:"teach", trg:"보수적", src:"conservative (as modifier)", pos:"noun", gender:null,
     note:"보수 (conservative) + 적 (characteristic).\nFavoring traditional values and caution.",
     example:"A: 우리 부모님은 좀 보수적이세요.\nB: 세대 차이가 있을 수 있지.",
     exampleSrc:"A: My parents are a bit conservative.\nB: There can be a generation gap.",
     funFact:"From Hanja 保守的. The opposite is 진보적 (progressive). Korean politics has strong 보수/진보 divisions."},

    {type:"teach", trg:"보안", src:"security", pos:"noun", gender:null,
     note:"Sino-Korean. 保 (protect) + 安 (safe).\nKeeping something safe from threats.",
     example:"A: 회사 보안이 강화됐어요.\nB: 새 출입 카드를 받아야 해요.",
     exampleSrc:"A: Company security has been strengthened.\nB: We need to get new access cards.",
     funFact:"From Hanja 保安. 사이버 보안 (cybersecurity), 보안 검색 (security screening), 보안 요원 (security guard)."},

    {type:"teach", trg:"보완하다", src:"to supplement, to complement, to improve", pos:"verb", gender:null,
     note:"Sino-Korean. 補 (supplement) + 完 (complete) + 하다.\nTo fill in what is lacking.",
     example:"A: 부족한 부분을 보완해야 해요.\nB: 어떤 점을 개선하면 될까요?",
     exampleSrc:"A: We need to supplement the lacking areas.\nB: What points should we improve?",
     funFact:"From Hanja 補完. 보완책 (supplementary measure), 상호 보완 (mutual complement). Different from 보안 (security)."},

    {type:"teach", trg:"보자기", src:"wrapping cloth", pos:"noun", gender:null,
     note:"Native Korean word.\nA square cloth used for wrapping items.",
     example:"A: 보자기로 선물을 싸면 예뻐요.\nB: 한국 전통 포장이구나.",
     exampleSrc:"A: Wrapping gifts in a wrapping cloth is pretty.\nB: That is traditional Korean packaging.",
     funFact:"보자기 wrapping (bojagi) is an eco-friendly Korean tradition now gaining global attention as sustainable gift wrap."},

    {type:"mc",
     q:"'보완하다'와 '보안'은 어떻게 다른가요?",
     opts:["보완은 부족한 걸 채우고, 보안은 안전을 지키는 것","같은 뜻이다","보안이 보완의 줄임말이다","보완만 동사로 쓸 수 있다"],
     ans:"보완은 부족한 걸 채우고, 보안은 안전을 지키는 것",
     hint:"One means to supplement what is lacking (補完), the other means security/protection (保安). Different Hanja!"},

    {type:"teach", trg:"보장", src:"guarantee, assurance", pos:"noun", gender:null,
     note:"Sino-Korean. 保 (protect) + 障 (barrier).\nPromising something will be maintained.",
     example:"A: 품질 보장이 되나요?\nB: 네, 1년 무상 수리를 보장합니다.",
     exampleSrc:"A: Is quality guaranteed?\nB: Yes, we guarantee one year of free repairs.",
     funFact:"From Hanja 保障. 안전 보장 (safety guarantee), 인권 보장 (human rights assurance), 보장 제도 (guarantee system)."},

    {type:"teach", trg:"보장되다", src:"to be guaranteed, to be assured", pos:"verb", gender:null,
     note:"보장 (guarantee) + 되다 (passive).\nSomething is assured or secured.",
     example:"A: 기본권은 헌법으로 보장돼요.\nB: 모든 국민이 동등한 권리를 가져요.",
     exampleSrc:"A: Basic rights are guaranteed by the constitution.\nB: All citizens have equal rights.",
     funFact:"보장되다 is the passive form used in legal and formal contexts: 권리가 보장되다 (rights are guaranteed)."},

    {type:"teach", trg:"보장하다", src:"to guarantee, to assure", pos:"verb", gender:null,
     note:"보장 (guarantee) + 하다 (to do).\nTo actively promise or secure something.",
     example:"A: 안전을 보장할 수 있나요?\nB: 최선을 다하겠습니다.",
     exampleSrc:"A: Can you guarantee safety?\nB: We will do our best.",
     funFact:"보장하다 (active: we guarantee) vs. 보장되다 (passive: it is guaranteed). The classic -하다/-되다 pair."},

    {type:"teach", trg:"보전", src:"preservation, conservation", pos:"noun", gender:null,
     note:"Sino-Korean. 保 (protect) + 全 (complete).\nKeeping something intact and whole.",
     example:"A: 자연 보전이 중요해요.\nB: 다음 세대를 위해 지켜야 해요.",
     exampleSrc:"A: Nature preservation is important.\nB: We must protect it for the next generation.",
     funFact:"From Hanja 保全. 보전 vs. 보존: 보전 emphasizes keeping intact, 보존 emphasizes maintaining over time."},

    {type:"teach", trg:"보조", src:"assistance, support, auxiliary", pos:"noun", gender:null,
     note:"Sino-Korean. 補 (supplement) + 助 (help).\nHelping or supporting a main function.",
     example:"A: 정부 보조금을 신청했어요.\nB: 승인되면 좋겠네요.",
     exampleSrc:"A: I applied for a government subsidy.\nB: I hope it gets approved.",
     funFact:"From Hanja 補助. 보조금 (subsidy), 보조 배터리 (power bank), 보조 교사 (assistant teacher)."},

    {type:"fb",
     s:"국민의 기본권은 헌법으로 {1}됩니다.",
     a:["보장"],
     opts:["보장","보안","보수","보조"],
     hint:"This Sino-Korean noun means guarantee or assurance, often used in legal and rights contexts.",
     sSrc:"Citizens' basic rights are {1} by the constitution."},

    {type:"teach", trg:"보존", src:"preservation, conservation (over time)", pos:"noun", gender:null,
     note:"Sino-Korean. 保 (protect) + 存 (exist).\nMaintaining something in its current state.",
     example:"A: 유적지 보존에 힘쓰고 있어요.\nB: 역사를 지키는 중요한 일이에요.",
     exampleSrc:"A: We are working hard on historic site preservation.\nB: It is important work protecting history.",
     funFact:"From Hanja 保存. 식품 보존 (food preservation), 환경 보존 (environmental conservation), 보존 처리 (conservation treatment)."},

    {type:"teach", trg:"보존하다", src:"to preserve, to conserve", pos:"verb", gender:null,
     note:"보존 (preservation) + 하다 (to do).\nTo keep something in its existing state.",
     example:"A: 이 건물을 원형 그대로 보존해야 해요.\nB: 문화유산으로 지정합시다.",
     exampleSrc:"A: We must preserve this building in its original form.\nB: Let us designate it as cultural heritage.",
     funFact:"보존하다 implies careful maintenance over time. Compare: 보관하다 (store), 보전하다 (keep intact)."},

    {type:"teach", trg:"보충하다", src:"to supplement, to replenish", pos:"verb", gender:null,
     note:"Sino-Korean. 補 (supplement) + 充 (fill) + 하다.\nTo add what is missing.",
     example:"A: 비타민으로 영양을 보충하세요.\nB: 어떤 비타민이 좋아요?",
     exampleSrc:"A: Supplement your nutrition with vitamins.\nB: Which vitamins are good?",
     funFact:"From Hanja 補充. 수분 보충 (hydration), 인력 보충 (staffing replenishment), 보충 수업 (supplementary class)."},

    {type:"teach", trg:"보편적", src:"universal, general (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 普 (broad) + 遍 (everywhere) + 的.\nApplying widely to all.",
     example:"A: 인권은 보편적 가치예요.\nB: 모든 사람에게 동등하게 적용돼야 해요.",
     exampleSrc:"A: Human rights are a universal value.\nB: They should apply equally to everyone.",
     funFact:"From Hanja 普遍的. 보편적 복지 (universal welfare), 보편적 진리 (universal truth). A key TOPIK vocabulary word."},

    {type:"teach", trg:"보호되다", src:"to be protected", pos:"verb", gender:null,
     note:"보호 (protection) + 되다 (passive).\nSomething receives protection.",
     example:"A: 멸종 위기 동물이 법으로 보호돼요.\nB: 보호 구역도 있어요.",
     exampleSrc:"A: Endangered animals are protected by law.\nB: There are also protected areas.",
     funFact:"보호되다 is used in legal contexts: 개인정보가 보호되다 (personal information is protected)."},

    {type:"mc",
     q:"'보편적'은 어떤 의미인가요?",
     opts:["모든 곳에 널리 적용되는","특정 지역에만 해당하는","일시적인","비밀스러운"],
     ans:"모든 곳에 널리 적용되는",
     hint:"The Hanja 普 means 'broadly' and 遍 means 'everywhere.' Together they mean applying universally."},

    {type:"teach", trg:"보호하다", src:"to protect, to safeguard", pos:"verb", gender:null,
     note:"Sino-Korean. 保 (protect) + 護 (guard) + 하다.\nTo keep someone or something safe.",
     example:"A: 환경을 보호해야 해요.\nB: 작은 실천부터 시작합시다.",
     exampleSrc:"A: We need to protect the environment.\nB: Let us start with small actions.",
     funFact:"From Hanja 保護. 보호자 (guardian), 보호 구역 (protected area), 아동 보호 (child protection)."},

    {type:"teach", trg:"복", src:"fortune, blessing, luck", pos:"noun", gender:null,
     note:"Sino-Korean. 福 (fortune).\nGood luck and blessings.",
     example:"A: 새해 복 많이 받으세요!\nB: 감사합니다, 당신도요!",
     exampleSrc:"A: May you receive many blessings in the new year!\nB: Thank you, you too!",
     funFact:"복 is everywhere in Korean culture: 복주머니 (fortune pouch), 복덕방 (real estate office, old name), 복권 (lottery)."},

    {type:"teach", trg:"복사", src:"copy, reproduction", pos:"noun", gender:null,
     note:"Sino-Korean. 複 (duplicate) + 寫 (write).\nMaking an identical copy.",
     example:"A: 이 서류 복사 좀 해 주세요.\nB: 몇 부 필요하세요?",
     exampleSrc:"A: Please make copies of this document.\nB: How many copies do you need?",
     funFact:"From Hanja 複寫. 복사본 (copy, as opposed to 원본, original), 컬러 복사 (color copy), 복사 붙여넣기 (copy and paste)."},

    {type:"teach", trg:"복사기", src:"copy machine, photocopier", pos:"noun", gender:null,
     note:"복사 (copy) + 기 (器, machine).\nA machine for making copies.",
     example:"A: 복사기가 고장 났어요.\nB: 수리 업체에 연락해야겠네요.",
     exampleSrc:"A: The copy machine is broken.\nB: We need to contact the repair service.",
     funFact:"Korean offices rely heavily on 복사기. The more modern term 프린터 (printer) is also common for combined devices."},

    {type:"teach", trg:"복사하다", src:"to copy, to duplicate", pos:"verb", gender:null,
     note:"복사 (copy) + 하다 (to do).\nTo make an identical reproduction.",
     example:"A: 파일을 USB에 복사해 주세요.\nB: 네, 바로 하겠습니다.",
     exampleSrc:"A: Please copy the file to the USB.\nB: Yes, I will do it right away.",
     funFact:"복사하다 works for both paper (서류를 복사하다) and digital (파일을 복사하다). Ctrl+C is 복사 in Korean menus."},

    {type:"fb",
     s:"멸종 위기 동물은 법으로 {1}되고 있습니다.",
     a:["보호"],
     opts:["보호","보존","보장","보완"],
     hint:"This Sino-Korean verb means to protect or safeguard, often used for environmental and legal protection.",
     sSrc:"Endangered animals are being {1} by law."},

    {type:"match", pairs:[
      {trg:"보수적", src:"conservative"},
      {trg:"보편적", src:"universal"},
      {trg:"보자기", src:"wrapping cloth"},
      {trg:"복", src:"fortune, blessing"}
    ]}
  ]
};
export default LESSON_20;
