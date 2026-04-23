#!/usr/bin/env node
// Add natural A2-level Korean example dialogues to teach cards that ship
// without one. Inserts `example` + `exampleEn` immediately after the
// existing `phonetic` field in source.
//
// Every dialogue uses simple, contextually-natural Korean (2 turns, A2
// grammar: polite -아요/-어요 endings, common particles, no subjunctive or
// complex constructs). The source side is English.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');

// (trg, example, exampleEn) — one per teach card needing an example.
const examples = [
  // === kou14l1 — workplace vocab ===
  { trg:'직장', ex:'A: 직장이 어디에 있어요?\nB: 서울에 있어요.', en:'A: Where is your workplace?\nB: It is in Seoul.' },
  { trg:'회의', ex:'A: 오늘 회의가 있어요?\nB: 네, 오후 세 시에 있어요.', en:'A: Is there a meeting today?\nB: Yes, at 3 PM.' },
  { trg:'회사', ex:'A: 어느 회사에서 일해요?\nB: 한국전자에서 일해요.', en:'A: Which company do you work for?\nB: I work at Korea Electronics.' },
  { trg:'상사', ex:'A: 상사가 어때요?\nB: 정말 친절하세요.', en:'A: How is your boss?\nB: Really kind.' },
  { trg:'동료', ex:'A: 동료들과 잘 지내요?\nB: 네, 모두 친절해요.', en:'A: Do you get along with your colleagues?\nB: Yes, everyone is nice.' },
  { trg:'출근하다', ex:'A: 몇 시에 출근해요?\nB: 아침 아홉 시에 출근해요.', en:'A: What time do you go to work?\nB: I commute in at 9 AM.' },
  { trg:'퇴근하다', ex:'A: 언제 퇴근해요?\nB: 보통 여섯 시에 퇴근해요.', en:'A: When do you leave work?\nB: Usually at 6.' },
  { trg:'야근하다', ex:'A: 오늘 야근해요?\nB: 네, 프로젝트가 바빠서요.', en:'A: Are you working overtime today?\nB: Yes, the project is busy.' },
  { trg:'보고서', ex:'A: 보고서 다 썼어요?\nB: 아직이요. 내일까지 끝내야 해요.', en:'A: Did you finish the report?\nB: Not yet. I have to finish by tomorrow.' },
  { trg:'마감', ex:'A: 마감이 언제예요?\nB: 이번 주 금요일이에요.', en:'A: When is the deadline?\nB: This Friday.' },

  // === kou12l1 — hobbies ===
  { trg:'취미', ex:'A: 취미가 뭐예요?\nB: 제 취미는 독서예요.', en:'A: What is your hobby?\nB: My hobby is reading.' },
  { trg:'운동', ex:'A: 운동 자주 해요?\nB: 네, 매일 아침 공원에서 운동해요.', en:'A: Do you exercise often?\nB: Yes, every morning at the park.' },
  { trg:'등산', ex:'A: 등산 좋아해요?\nB: 네, 주말마다 등산 가요.', en:'A: Do you like hiking?\nB: Yes, I go hiking every weekend.' },
  { trg:'요리', ex:'A: 요리 잘해요?\nB: 보통이에요. 김치찌개는 잘 만들어요.', en:'A: Are you good at cooking?\nB: Average. I make kimchi stew well.' },
  { trg:'독서', ex:'A: 독서가 취미예요?\nB: 네, 매일 한 시간씩 책을 읽어요.', en:'A: Is reading your hobby?\nB: Yes, I read one hour every day.' },
  { trg:'음악', ex:'A: 어떤 음악 좋아해요?\nB: 재즈 음악을 제일 좋아해요.', en:'A: What kind of music do you like?\nB: I like jazz the most.' },
  { trg:'사진', ex:'A: 사진 찍는 거 좋아해요?\nB: 네, 사진이 제 취미예요.', en:'A: Do you like taking photos?\nB: Yes, photography is my hobby.' },

  // === kou12 — hobbies cont. ===
  { trg:'제일', ex:'A: 어떤 음식을 제일 좋아해요?\nB: 비빔밥을 제일 좋아해요.', en:'A: What food do you like most?\nB: I like bibimbap the most.' },
  { trg:'전화하다', ex:'A: 엄마한테 전화했어요?\nB: 네, 아까 전화했어요.', en:'A: Did you call your mom?\nB: Yes, I called a little while ago.' },
  { trg:'산책하다', ex:'A: 저녁에 뭐 해요?\nB: 공원에서 산책해요.', en:'A: What do you do in the evening?\nB: I take a walk in the park.' },
  { trg:'시작하다', ex:'A: 수업이 언제 시작해요?\nB: 아홉 시에 시작해요.', en:'A: When does class start?\nB: It starts at 9.' },
  { trg:'활발하다', ex:'A: 동생은 어때요?\nB: 정말 활발해요.', en:'A: How is your younger sibling?\nB: Really lively.' },
  { trg:'내성적이다', ex:'A: 성격이 어때요?\nB: 조금 내성적이에요.', en:'A: What is your personality like?\nB: A little introverted.' },
  { trg:'등산복', ex:'A: 등산복 샀어요?\nB: 네, 어제 백화점에서 샀어요.', en:'A: Did you buy hiking clothes?\nB: Yes, at the department store yesterday.' },
  { trg:'동호회', ex:'A: 동호회에 가입했어요?\nB: 네, 사진 동호회에 가입했어요.', en:'A: Did you join a club?\nB: Yes, I joined a photography club.' },
  { trg:'만화', ex:'A: 만화 좋아해요?\nB: 네, 일본 만화를 자주 봐요.', en:'A: Do you like manga?\nB: Yes, I often read Japanese manga.' },

  // === kou13 — feelings/atmosphere ===
  { trg:'눈치', ex:'A: 그 사람 어때요?\nB: 눈치가 정말 빨라요.', en:'A: How is that person?\nB: Really quick at reading the room.' },
  { trg:'분위기', ex:'A: 이 카페 어때요?\nB: 분위기가 아주 좋아요.', en:'A: How is this cafe?\nB: The atmosphere is really nice.' },

  // === kou14 — workplace cont. ===
  { trg:'제출하다', ex:'A: 보고서 제출했어요?\nB: 네, 오늘 아침에 제출했어요.', en:'A: Did you submit the report?\nB: Yes, this morning.' },
  { trg:'준비하다', ex:'A: 회의 준비했어요?\nB: 네, 다 준비했어요.', en:'A: Did you prepare for the meeting?\nB: Yes, everything is ready.' },
  { trg:'회식', ex:'A: 오늘 회식이에요?\nB: 네, 저녁 일곱 시에 있어요.', en:'A: Is today the company dinner?\nB: Yes, at 7 PM.' },
  { trg:'건배', ex:'A: 자, 한 잔 해요!\nB: 건배!', en:'A: Come on, let\'s have a drink!\nB: Cheers!' },
  { trg:'규칙', ex:'A: 회사 규칙이 뭐예요?\nB: 아홉 시까지 출근해야 해요.', en:'A: What are the company rules?\nB: You must arrive by 9.' },
  { trg:'금지', ex:'A: 여기서 담배 피워도 돼요?\nB: 아니요, 금지예요.', en:'A: Can I smoke here?\nB: No, it is forbidden.' },
  { trg:'허락', ex:'A: 부모님 허락 받았어요?\nB: 네, 허락 받았어요.', en:'A: Did you get your parents\' permission?\nB: Yes, I got permission.' },
  { trg:'선배', ex:'A: 저 분은 누구예요?\nB: 제 회사 선배예요.', en:'A: Who is that person?\nB: My senior at the company.' },
  { trg:'후배', ex:'A: 저 사람 알아요?\nB: 네, 제 대학 후배예요.', en:'A: Do you know that person?\nB: Yes, my junior from university.' },

  // === kou15 — education ===
  { trg:'교육', ex:'A: 한국은 교육을 중요하게 생각해요?\nB: 네, 아주 중요해요.', en:'A: Is education important in Korea?\nB: Yes, very important.' },
  { trg:'학교', ex:'A: 학교가 어디에 있어요?\nB: 시내에 있어요.', en:'A: Where is your school?\nB: It is downtown.' },
  { trg:'시험', ex:'A: 내일 시험 있어요?\nB: 네, 한국어 시험이 있어요.', en:'A: Do you have an exam tomorrow?\nB: Yes, a Korean exam.' },
  { trg:'학원', ex:'A: 저녁에 뭐 해요?\nB: 학원에 가요.', en:'A: What do you do in the evening?\nB: I go to a private academy.' },
  { trg:'성적', ex:'A: 이번 학기 성적이 어때요?\nB: 아주 좋아요.', en:'A: How are your grades this semester?\nB: Really good.' },
  { trg:'졸업하다', ex:'A: 언제 졸업해요?\nB: 내년 이월에 졸업해요.', en:'A: When do you graduate?\nB: Next February.' },
  { trg:'합격하다', ex:'A: 시험에 합격했어요?\nB: 네, 드디어 합격했어요!', en:'A: Did you pass the exam?\nB: Yes, I finally passed!' },
  { trg:'응원하다', ex:'A: 시험 잘 보세요.\nB: 고마워요, 응원해 주셔서.', en:'A: Good luck on your exam.\nB: Thank you for cheering me on.' },
  { trg:'긴장하다', ex:'A: 발표 긴장돼요?\nB: 네, 너무 긴장해요.', en:'A: Are you nervous about the presentation?\nB: Yes, really nervous.' },
  { trg:'관심', ex:'A: 역사에 관심 있어요?\nB: 네, 관심이 많아요.', en:'A: Are you interested in history?\nB: Yes, very interested.' },

  // === kou16 — online/communication ===
  { trg:'검색하다', ex:'A: 이 단어 뜻 알아요?\nB: 잠깐만요, 검색할게요.', en:'A: Do you know what this word means?\nB: One moment, I will search it.' },
  { trg:'공유하다', ex:'A: 파일 보내 주세요.\nB: 네, 지금 공유할게요.', en:'A: Please send me the file.\nB: Yes, I will share it now.' },
  { trg:'게시판', ex:'A: 공지사항 봤어요?\nB: 아니요, 게시판 확인할게요.', en:'A: Did you see the notice?\nB: No, I will check the board.' },
  { trg:'구독하다', ex:'A: 이 유튜브 채널 좋아요.\nB: 저도 구독했어요.', en:'A: This YouTube channel is good.\nB: I subscribed too.' },
  { trg:'전하다', ex:'A: 선생님한테 말해 주세요.\nB: 네, 꼭 전할게요.', en:'A: Please tell the teacher.\nB: Yes, I will pass it on for sure.' },
  { trg:'참석하다', ex:'A: 회의에 참석해요?\nB: 네, 오후 두 시에 참석해요.', en:'A: Are you attending the meeting?\nB: Yes, at 2 PM.' },
  { trg:'인증', ex:'A: 로그인이 안 돼요.\nB: 인증 번호 다시 받으세요.', en:'A: I cannot log in.\nB: Get a new verification code.' },
  { trg:'공감하다', ex:'A: 그 이야기 슬퍼요.\nB: 저도 정말 공감해요.', en:'A: That story is sad.\nB: I really relate to it too.' },
  { trg:'전달하다', ex:'A: 이 편지 엄마한테 주세요.\nB: 네, 전달할게요.', en:'A: Please give this letter to your mom.\nB: Yes, I will deliver it.' },
  { trg:'소식', ex:'A: 친구한테서 소식 왔어요?\nB: 네, 어제 이메일 왔어요.', en:'A: Did you hear from your friend?\nB: Yes, I got an email yesterday.' },
  { trg:'조회수', ex:'A: 그 영상 인기 있어요?\nB: 네, 조회수가 백만이에요.', en:'A: Is that video popular?\nB: Yes, a million views.' },

  // === kou17 — news ===
  { trg:'기사', ex:'A: 오늘 기사 읽었어요?\nB: 네, 아침에 읽었어요.', en:'A: Did you read today\'s article?\nB: Yes, this morning.' },
  { trg:'사건', ex:'A: 어제 무슨 사건 있었어요?\nB: 네, 뉴스에 나왔어요.', en:'A: Was there an incident yesterday?\nB: Yes, it was in the news.' },
  { trg:'사고', ex:'A: 교통 사고 봤어요?\nB: 네, 오는 길에 봤어요.', en:'A: Did you see the traffic accident?\nB: Yes, on the way here.' },
  { trg:'경제', ex:'A: 요즘 경제 어때요?\nB: 조금 어려워요.', en:'A: How is the economy these days?\nB: A bit tough.' },
  { trg:'정치', ex:'A: 정치에 관심 있어요?\nB: 아니요, 별로 없어요.', en:'A: Are you interested in politics?\nB: No, not really.' },
  { trg:'사회', ex:'A: 한국 사회는 어때요?\nB: 빠르게 변하고 있어요.', en:'A: How is Korean society?\nB: It is changing fast.' },
  { trg:'환경', ex:'A: 환경이 중요해요?\nB: 네, 아주 중요해요.', en:'A: Is the environment important?\nB: Yes, very important.' },
  { trg:'발표하다', ex:'A: 회사가 새 제품을 발표했어요?\nB: 네, 어제 발표했어요.', en:'A: Did the company announce a new product?\nB: Yes, yesterday.' },
  { trg:'보도하다', ex:'A: 그 뉴스 보도했어요?\nB: 네, 아침 뉴스에 보도했어요.', en:'A: Did they report that news?\nB: Yes, on the morning news.' },
  { trg:'체포하다', ex:'A: 그 사람 잡혔어요?\nB: 네, 경찰이 체포했어요.', en:'A: Was that person caught?\nB: Yes, the police arrested him.' },
  { trg:'개최하다', ex:'A: 올림픽은 어디서 해요?\nB: 파리에서 개최해요.', en:'A: Where are the Olympics held?\nB: They are held in Paris.' },
  { trg:'실시하다', ex:'A: 새 정책 언제 시작해요?\nB: 다음 달부터 실시해요.', en:'A: When does the new policy start?\nB: It starts next month.' },
  { trg:'한류', ex:'A: 한류 좋아해요?\nB: 네, K-팝을 자주 들어요.', en:'A: Do you like the Korean Wave?\nB: Yes, I often listen to K-pop.' },
  { trg:'방송', ex:'A: 이 방송 인기 있어요?\nB: 네, 아주 인기 많아요.', en:'A: Is this show popular?\nB: Yes, very popular.' },
  { trg:'시청자', ex:'A: 이 프로그램 시청자가 많아요?\nB: 네, 백만 명 이상이에요.', en:'A: Does this program have many viewers?\nB: Yes, over a million.' },
  { trg:'출연하다', ex:'A: 그 배우 어디에 나와요?\nB: 새 드라마에 출연해요.', en:'A: Where does that actor appear?\nB: In a new drama.' },
  { trg:'기자', ex:'A: 직업이 뭐예요?\nB: 저는 기자예요.', en:'A: What is your job?\nB: I am a reporter.' },
  { trg:'발전하다', ex:'A: 한국은 어때요?\nB: 빠르게 발전하고 있어요.', en:'A: How is Korea?\nB: It is developing quickly.' },
  { trg:'성장하다', ex:'A: 회사가 잘 돼요?\nB: 네, 많이 성장했어요.', en:'A: Is the company doing well?\nB: Yes, it has grown a lot.' },

  // === kou18 — food ===
  { trg:'반찬', ex:'A: 반찬이 뭐 있어요?\nB: 김치하고 나물이 있어요.', en:'A: What side dishes are there?\nB: Kimchi and vegetables.' },
  { trg:'삼겹살', ex:'A: 저녁에 뭐 먹을까요?\nB: 삼겹살 먹어요!', en:'A: What should we eat for dinner?\nB: Let\'s have pork belly!' },
  { trg:'냉면', ex:'A: 여름에 뭐 먹어요?\nB: 냉면을 자주 먹어요.', en:'A: What do you eat in summer?\nB: I often eat cold noodles.' },
  { trg:'삼계탕', ex:'A: 더운데 뭐 먹을까요?\nB: 삼계탕 어때요?', en:'A: It is hot. What should we eat?\nB: How about ginseng chicken soup?' },
  { trg:'배달', ex:'A: 요리하기 싫어요.\nB: 그럼 배달 시켜요.', en:'A: I do not want to cook.\nB: Then let\'s order delivery.' },
  { trg:'야식', ex:'A: 배고파요.\nB: 야식 시켜 먹을까요?', en:'A: I am hungry.\nB: Should we order a late night snack?' },

  // === kou19 — relationships ===
  { trg:'관계', ex:'A: 그 사람하고 관계가 어때요?\nB: 아주 친한 친구예요.', en:'A: What is your relationship with that person?\nB: We are really close friends.' },
  { trg:'연애하다', ex:'A: 요즘 연애해요?\nB: 네, 일 년 됐어요.', en:'A: Are you dating these days?\nB: Yes, it has been a year.' },
  { trg:'결혼하다', ex:'A: 언제 결혼해요?\nB: 내년 봄에 결혼해요.', en:'A: When are you getting married?\nB: Next spring.' },

  // === kou20 — culture ===
  { trg:'사계절', ex:'A: 한국은 사계절이 있어요?\nB: 네, 봄 여름 가을 겨울이 있어요.', en:'A: Does Korea have four seasons?\nB: Yes, spring summer fall winter.' },
  { trg:'체면', ex:'A: 한국 사람들은 체면을 중요하게 생각해요?\nB: 네, 아주 중요해요.', en:'A: Do Koreans value face?\nB: Yes, very much.' },
  { trg:'효도', ex:'A: 부모님한테 효도해요?\nB: 네, 자주 전화드려요.', en:'A: Do you practice filial piety?\nB: Yes, I call them often.' },
  { trg:'예절', ex:'A: 한국 예절이 어려워요?\nB: 처음에는 어려웠어요.', en:'A: Is Korean etiquette hard?\nB: It was hard at first.' },
];

// Fallback: for any unknown trg, generate a minimal dialogue from en.
function fallbackDialogue(trg, en) {
  // Very basic: use trg in both sides; en translation mirrors it.
  const enShort = String(en).split(/[,()]/)[0].trim();
  return {
    ex: `A: ${trg} 알아요?\nB: 네, ${trg}을/를 잘 알아요.`,
    en: `A: Do you know ${enShort}?\nB: Yes, I know ${enShort} well.`,
  };
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.js')) out.push(p);
  }
  return out;
}

const dir = path.join('src', 'data', 'korean-v2');
const files = walk(dir);

// For each example, find the teach card in source that has nl:"<trg>" AND
// no existing example: field, then inject example + exampleEn before funFact.
let applied = 0;
for (const ex of examples) {
  const nlNeedle = `nl:"${ex.trg}"`;
  for (const f of files) {
    let text = fs.readFileSync(f, 'utf8');
    if (!text.includes(nlNeedle)) continue;
    // Find the teach card block starting with this nl.
    const idx = text.indexOf(nlNeedle);
    if (idx < 0) continue;
    // Find the containing {type:"teach", ...} block by scanning backward
    // from idx to the opening `{`, then forward to the matching `}`.
    let start = idx;
    while (start > 0 && text[start] !== '{') start--;
    let depth = 1, i = start + 1;
    while (i < text.length && depth > 0) {
      const ch = text[i];
      if (ch === '"' || ch === "'") {
        const q = ch; i++;
        while (i < text.length && text[i] !== q) { if (text[i] === '\\') i += 2; else i++; }
        i++; continue;
      }
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      if (depth === 0) break;
      i++;
    }
    if (depth !== 0) continue;
    const end = i + 1;
    const block = text.slice(start, end);
    if (block.includes('example:')) continue;       // already has one
    if (!block.includes('type:"teach"')) continue;
    // Insert before funFact if present, else before closing brace.
    const funFactIdx = block.search(/,\s*funFact\s*:/);
    const insertAt = funFactIdx > 0 ? (start + funFactIdx) : (end - 1);
    // Build insert snippet.
    const exEsc = ex.ex.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const enEsc = ex.en.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const snippet = `,example:"${exEsc}",exampleEn:"${enEsc}"`;
    const newText = text.slice(0, insertAt) + snippet + text.slice(insertAt);
    if (apply) fs.writeFileSync(f, newText);
    applied++;
    break;
  }
}

console.log(`Applied: ${applied} / ${examples.length}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
