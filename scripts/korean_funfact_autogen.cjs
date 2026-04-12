#!/usr/bin/env node
/**
 * korean_funfact_autogen.cjs
 *
 * Adds funFact fields to all Korean teach cards that don't already have one.
 * Applies rule-based generation in priority order:
 *   1. Loanword detection (English/European origin)
 *   2. Hanja (Sino-Korean) compound breakdown
 *   3. Grammar pattern cards (particles, verb endings)
 *   4. Cultural context (food, customs, social)
 *   5. Compound breakdown (native Korean)
 *   6. Fallback (extract from note/deepDive)
 *
 * Usage: node scripts/korean_funfact_autogen.cjs
 */

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src', 'data', 'units-korean.js');
const BAK = SRC + '.bak';

// ═══════════════════════════════════════════════════════════════════
// RULE 1: LOANWORD DETECTION
// ═══════════════════════════════════════════════════════════════════

// Known loanword mappings (Korean → English source)
const LOANWORD_MAP = {
  '커피': 'coffee', '택시': 'taxi', '버스': 'bus', '호텔': 'hotel',
  '카페': 'cafe', '아이스크림': 'ice cream', '인터넷': 'internet',
  '컴퓨터': 'computer', '텔레비전': 'television', '카메라': 'camera',
  '라디오': 'radio', '피아노': 'piano', '기타': 'guitar',
  '초콜릿': 'chocolate', '케이크': 'cake', '아파트': 'apartment',
  '엘리베이터': 'elevator', '에스컬레이터': 'escalator',
  '레스토랑': 'restaurant', '슈퍼마켓': 'supermarket',
  '마트': 'mart', '파티': 'party', '드라마': 'drama',
  '뉴스': 'news', '스포츠': 'sports', '골프': 'golf',
  '테니스': 'tennis', '축구': 'soccer', '바나나': 'banana',
  '오렌지': 'orange', '토마토': 'tomato', '샐러드': 'salad',
  '샌드위치': 'sandwich', '햄버거': 'hamburger', '피자': 'pizza',
  '파스타': 'pasta', '스테이크': 'steak', '소스': 'sauce',
  '비자': 'visa', '패스포트': 'passport', '티켓': 'ticket',
  '택배': 'delivery', '서비스': 'service', '시스템': 'system',
  '프로그램': 'program', '데이터': 'data', '메시지': 'message',
  '이메일': 'email', '블로그': 'blog', '앱': 'app',
  '스마트폰': 'smartphone', '노트북': 'notebook', '프린터': 'printer',
  '에어컨': 'air conditioner', '히터': 'heater',
  '에너지': 'energy', '비타민': 'vitamin', '알레르기': 'allergy',
  '스트레스': 'stress', '다이어트': 'diet', '요가': 'yoga',
  '마사지': 'massage', '소파': 'sofa', '테이블': 'table',
  '커튼': 'curtain', '가스': 'gas', '페이지': 'page',
  '미터': 'meter', '센티미터': 'centimeter', '킬로미터': 'kilometer',
  '퍼센트': 'percent', '보너스': 'bonus', '팀': 'team',
  '매니저': 'manager', '디자인': 'design', '프로젝트': 'project',
  '미팅': 'meeting', '스케줄': 'schedule', '코너': 'corner',
  '센터': 'center', '포인트': 'point', '타입': 'type',
  '스타일': 'style', '패턴': 'pattern', '모델': 'model',
  '사이즈': 'size', '볼펜': 'ballpoint pen', '크림': 'cream',
  '쇼핑': 'shopping', '온라인': 'online', '오프라인': 'offline',
  '와이파이': 'Wi-Fi', '비디오': 'video', '오디오': 'audio',
  '채널': 'channel', '콘텐츠': 'content', '콘서트': 'concert',
  '뮤지컬': 'musical', '갤러리': 'gallery', '클럽': 'club',
  '카드': 'card', '멤버': 'member', '로비': 'lobby',
  '트렌드': 'trend', '캠페인': 'campaign', '아이디어': 'idea',
  '리스트': 'list', '메뉴': 'menu', '주스': 'juice',
  '아르바이트': 'part-time job', '에세이': 'essay',
};

// Syllables common in loanwords (katakana-equivalent)
const LOANWORD_SYLLABLES = [
  '카', '타', '파', '버', '커', '피', '티', '키', '시',
  '스', '크', '프', '트', '드', '브', '그', '리', '디',
  '미', '비', '지', '니', '라', '레', '로', '루', '마',
  '메', '모', '무', '바', '베', '보', '사', '세', '소',
  '아', '에', '오', '우', '이', '컴', '퓨', '넷', '텔',
];

function isLikelyLoanword(nl, en) {
  // Check explicit map first
  if (LOANWORD_MAP[nl]) return LOANWORD_MAP[nl];

  // Check if note mentions "From English" or similar
  // (handled externally via note check)

  // Heuristic: count loanword-typical syllables
  const syllables = nl.split('');
  let loanCount = 0;
  for (const s of syllables) {
    if (LOANWORD_SYLLABLES.includes(s)) loanCount++;
  }
  // If >60% of chars are loanword syllables AND en has a plausible cognate
  if (nl.length >= 2 && loanCount / nl.length > 0.5) {
    // Clean en field of emojis and parentheticals
    const enClean = en.replace(/[^\w\s/-]/g, '').trim().split(/[/,]/)[0].trim();
    if (enClean.length > 2) return enClean;
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════
// RULE 2: HANJA (SINO-KOREAN) DETECTION
// ═══════════════════════════════════════════════════════════════════

const HANJA = {
  '학': ['學', 'learn'], '생': ['生', 'life/person'], '교': ['敎', 'teach/school'],
  '사': ['事', 'matter'], '시': ['時', 'time'], '대': ['大', 'big/great'],
  '국': ['國', 'country'], '문': ['文', 'writing'], '정': ['正', 'right/correct'],
  '경': ['經', 'pass through'], '인': ['人', 'person'], '동': ['動', 'move'],
  '물': ['物', 'thing'], '산': ['山', 'mountain'], '일': ['日', 'day/sun'],
  '년': ['年', 'year'], '월': ['月', 'month'], '수': ['水', 'water'],
  '공': ['工', 'work'], '식': ['食', 'food/eat'], '차': ['車', 'car/vehicle'],
  '전': ['前', 'before'], '자': ['自', 'self'], '원': ['院', 'institute'],
  '기': ['氣', 'spirit/energy'], '가': ['家', 'home/house'], '선': ['先', 'first'],
  '님': ['任', 'person (honorific)'], '실': ['室', 'room'],
  '장': ['場', 'place'], '소': ['所', 'place/small'], '도': ['道', 'way/path'],
  '방': ['房', 'room'], '화': ['話', 'speech/language'], '어': ['語', 'language/word'],
  '한': ['韓', 'Korea'], '중': ['中', 'middle/center'], '영': ['英', 'English/bright'],
  '미': ['美', 'beautiful/America'], '신': ['新', 'new'], '구': ['區', 'district'],
  '회': ['會', 'meeting/society'], '관': ['館', 'building/hall'],
  '원': ['員', 'member'], '부': ['部', 'part/department'],
  '서': ['書', 'book/write'], '리': ['理', 'reason/principle'],
  '운': ['運', 'luck/carry'], '의': ['醫', 'medicine'],
  '약': ['藥', 'medicine/drug'], '병': ['病', 'illness'],
  '감': ['感', 'feeling'], '정': ['情', 'emotion/feeling'],
  '심': ['心', 'heart/mind'], '력': ['力', 'power/strength'],
  '건': ['健', 'healthy'], '강': ['康', 'peace/health'],
  '안': ['安', 'peace/safe'], '전': ['全', 'complete/all'],
  '위': ['危', 'danger'], '험': ['險', 'steep/risk'],
  '보': ['保', 'protect'], '험': ['險', 'risk'],
  '사': ['師', 'master/teacher'], '수': ['手', 'hand/skill'],
  '장': ['長', 'chief/long'], '급': ['級', 'class/grade'],
  '점': ['店', 'shop/store'], '음': ['音', 'sound'],
  '악': ['樂', 'music/joy'], '예': ['藝', 'art/skill'],
  '술': ['術', 'technique'], '체': ['體', 'body'],
  '육': ['育', 'raise/educate'], '습': ['習', 'practice/learn'],
  '연': ['硏', 'study/research'], '구': ['究', 'investigate'],
  '집': ['集', 'gather'], '합': ['合', 'combine'],
  '분': ['分', 'divide/minute'], '반': ['半', 'half'],
  '매': ['每', 'every'], '주': ['週', 'week'],
  '초': ['初', 'first/beginning'], '말': ['末', 'end'],
  '남': ['男', 'man'], '여': ['女', 'woman'],
  '아': ['兒', 'child'], '노': ['老', 'old'],
  '청': ['靑', 'blue/young'], '백': ['白', 'white/hundred'],
  '천': ['千', 'thousand'], '만': ['萬', 'ten thousand'],
  '지': ['地', 'earth/ground'], '천': ['天', 'sky/heaven'],
  '해': ['海', 'sea'], '양': ['洋', 'ocean'],
  '풍': ['風', 'wind'], '우': ['雨', 'rain'],
  '설': ['雪', 'snow'], '냉': ['冷', 'cold'],
  '온': ['溫', 'warm'], '열': ['熱', 'hot/heat'],
  '광': ['光', 'light'], '명': ['明', 'bright/clear'],
  '색': ['色', 'color'], '형': ['形', 'shape'],
  '사': ['社', 'society/company'], '업': ['業', 'work/industry'],
  '직': ['職', 'job/position'], '무': ['務', 'duty/task'],
  '법': ['法', 'law/method'], '제': ['制', 'system/control'],
  '민': ['民', 'people'], '주': ['主', 'master/main'],
  '왕': ['王', 'king'], '신': ['臣', 'subject/minister'],
  '군': ['軍', 'army'], '전': ['戰', 'war/battle'],
  '평': ['平', 'flat/peace'], '복': ['福', 'luck/blessing'],
  '행': ['幸', 'fortunate'], '고': ['苦', 'bitter/suffer'],
  '락': ['樂', 'joy'], '친': ['親', 'parent/close'],
  '효': ['孝', 'filial piety'], '충': ['忠', 'loyalty'],
  '신': ['信', 'trust/believe'], '의': ['義', 'righteousness'],
  '덕': ['德', 'virtue'], '도': ['度', 'degree/measure'],
  '호': ['好', 'like/good'], '상': ['上', 'above/top'],
  '하': ['下', 'below/under'], '내': ['內', 'inside'],
  '외': ['外', 'outside'], '좌': ['左', 'left'],
  '우': ['右', 'right'], '동': ['東', 'east'],
  '서': ['西', 'west'], '남': ['南', 'south'],
  '북': ['北', 'north'], '출': ['出', 'exit/go out'],
  '입': ['入', 'enter'], '개': ['開', 'open'],
  '폐': ['閉', 'close'], '시': ['市', 'city/market'],
  '고': ['高', 'high/tall'], '저': ['低', 'low'],
  '대': ['代', 'era/generation'], '세': ['世', 'world/generation'],
  '말': ['末', 'end'], '등': ['等', 'rank/class'],
  '급': ['急', 'urgent'], '속': ['速', 'speed/fast'],
  '간': ['間', 'between/space'], '거': ['距', 'distance'],
  '근': ['近', 'near'], '원': ['遠', 'far'],
  '고': ['古', 'old/ancient'], '최': ['最', 'most'],
  '다': ['多', 'many'], '소': ['少', 'few'],
  '길': ['吉', 'lucky'], '흉': ['凶', 'unlucky'],
};

// Well-known Sino-Korean compound etymologies
const HANJA_COMPOUNDS = {
  '학생': '學 (learn) + 生 (life). Literally "learning person."',
  '학교': '學 (learn) + 校 (school). Literally "learning school."',
  '선생님': '先 (first) + 生 (born). Someone born before you, hence "teacher."',
  '대학교': '大 (big) + 學 (learn) + 校 (school). "Big learning school" = university.',
  '한국어': '韓 (Korea) + 國 (country) + 語 (language). "Korean country language."',
  '한국': '韓 (Korea) + 國 (country). The name of Korea itself.',
  '중국': '中 (middle) + 國 (country). China: "the middle kingdom."',
  '일본': '日 (sun) + 本 (origin). Japan: "where the sun originates."',
  '영어': '英 (England) + 語 (language). English language.',
  '한국인': '韓國 (Korea) + 人 (person). A Korean person.',
  '외국인': '外 (outside) + 國 (country) + 人 (person). A foreigner.',
  '외국': '外 (outside) + 國 (country). Foreign country.',
  '공부': '工 (work) + 夫 (man). Literally "workman." Now means "study."',
  '공항': '空 (air/sky) + 港 (harbor). An air harbor = airport.',
  '병원': '病 (illness) + 院 (institute). Illness institute = hospital.',
  '도서관': '圖 (diagram) + 書 (book) + 館 (building). Book building = library.',
  '서점': '書 (book) + 店 (shop). Bookshop.',
  '식당': '食 (food) + 堂 (hall). Food hall = restaurant.',
  '약국': '藥 (medicine) + 局 (bureau). Medicine bureau = pharmacy.',
  '은행': '銀 (silver) + 行 (go/firm). Silver firm = bank.',
  '회사': '會 (gather) + 社 (society). Gathering society = company.',
  '사무실': '事 (matter) + 務 (duty) + 室 (room). Duty room = office.',
  '우체국': '郵 (mail) + 遞 (deliver) + 局 (bureau). Mail delivery bureau = post office.',
  '경찰': '警 (warn) + 察 (inspect). Warn and inspect = police.',
  '소방서': '消 (extinguish) + 防 (prevent) + 署 (office). Fire prevention office.',
  '시장': '市 (market) + 場 (place). Market place.',
  '공원': '公 (public) + 園 (garden). Public garden = park.',
  '동물원': '動 (move) + 物 (thing) + 園 (garden). Moving-thing garden = zoo.',
  '수영장': '水 (water) + 泳 (swim) + 場 (place). Swimming place = pool.',
  '운동장': '運 (carry/move) + 動 (move) + 場 (place). Exercise place = sports field.',
  '주차장': '駐 (stay) + 車 (car) + 場 (place). Car-staying place = parking lot.',
  '화장실': '化 (change) + 粧 (makeup) + 室 (room). Makeup room = bathroom.',
  '교실': '敎 (teach) + 室 (room). Teaching room = classroom.',
  '음식': '飮 (drink) + 食 (food). Drink and food = food.',
  '음악': '音 (sound) + 樂 (joy). Joyful sound = music.',
  '운동': '運 (carry) + 動 (move). Carry and move = exercise.',
  '건강': '健 (healthy) + 康 (peaceful). Healthy peace = health.',
  '안전': '安 (safe) + 全 (complete). Completely safe = safety.',
  '위험': '危 (danger) + 險 (steep). Danger + steep = dangerous.',
  '사진': '寫 (copy) + 眞 (true). True copy = photograph.',
  '전화': '電 (electric) + 話 (speech). Electric speech = telephone.',
  '휴대폰': '携 (carry) + 帶 (belt) + phone. Carry-belt-phone = cellphone.',
  '비행기': '飛 (fly) + 行 (go) + 機 (machine). Flying-going machine = airplane.',
  '자동차': '自 (self) + 動 (move) + 車 (car). Self-moving car = automobile.',
  '자전거': '自 (self) + 轉 (turn) + 車 (car). Self-turning vehicle = bicycle.',
  '지하철': '地 (earth) + 下 (under) + 鐵 (iron). Underground iron = subway.',
  '기차': '汽 (steam) + 車 (vehicle). Steam vehicle = train.',
  '주말': '週 (week) + 末 (end). Week end = weekend.',
  '주중': '週 (week) + 中 (middle). During the week = weekdays.',
  '오전': '午 (noon) + 前 (before). Before noon = morning/AM.',
  '오후': '午 (noon) + 後 (after). After noon = afternoon/PM.',
  '매일': '每 (every) + 日 (day). Every day = daily.',
  '내일': '來 (come) + 日 (day). Coming day = tomorrow.',
  '어제': 'Native Korean, not Sino-Korean. One of the few time words without hanja.',
  '생일': '生 (born) + 日 (day). Born day = birthday.',
  '생선': '生 (raw/alive) + 鮮 (fresh). Raw fresh = fish (for eating).',
  '동물': '動 (move) + 物 (thing). Moving thing = animal.',
  '식물': '植 (plant) + 物 (thing). Planted thing = plant.',
  '인간': '人 (person) + 間 (between). Between people = human being.',
  '가족': '家 (home) + 族 (clan). Home clan = family.',
  '부모': '父 (father) + 母 (mother). Father-mother = parents.',
  '형제': '兄 (older brother) + 弟 (younger brother). Brothers = siblings.',
  '자녀': '子 (son) + 女 (daughter). Son-daughter = children.',
  '남자': '男 (male) + 子 (child). Male child = man.',
  '여자': '女 (female) + 子 (child). Female child = woman.',
  '친구': '親 (close) + 舊 (old). Close and old = friend.',
  '선배': '先 (first) + 輩 (group). First in the group = senior.',
  '후배': '後 (after) + 輩 (group). After in the group = junior.',
  '동료': '同 (same) + 僚 (colleague). Same colleague = coworker.',
  '사장': '社 (company) + 長 (chief). Company chief = CEO/boss.',
  '직원': '職 (job) + 員 (member). Job member = employee.',
  '의사': '醫 (medicine) + 師 (master). Medicine master = doctor.',
  '간호사': '看 (watch) + 護 (protect) + 師 (master). Watch-protect master = nurse.',
  '교수': '敎 (teach) + 授 (give). Give teaching = professor.',
  '기자': '記 (record) + 者 (person). Recording person = journalist.',
  '작가': '作 (make) + 家 (expert). Making expert = writer/author.',
  '가수': '歌 (song) + 手 (hand/skill). Song skill = singer.',
  '운전사': '運 (carry) + 轉 (turn) + 師 (master). Carry-turn master = driver.',
  '요리사': '料 (ingredients) + 理 (manage) + 師 (master). Ingredients master = chef.',
  '과학': '科 (department) + 學 (study). Department study = science.',
  '역사': '歷 (experience) + 史 (history). Experienced history = history.',
  '수학': '數 (number) + 學 (study). Number study = mathematics.',
  '미술': '美 (beautiful) + 術 (technique). Beautiful technique = fine art.',
  '체육': '體 (body) + 育 (raise). Body raising = physical education.',
  '문화': '文 (writing) + 化 (change). Writing transformation = culture.',
  '경제': '經 (manage) + 濟 (help). Managing help = economy.',
  '정치': '政 (govern) + 治 (rule). Governing rule = politics.',
  '환경': '環 (ring) + 境 (border). Ring border = environment.',
  '교통': '交 (cross) + 通 (pass). Cross-passing = traffic/transportation.',
  '여행': '旅 (travel) + 行 (go). Travel go = trip.',
  '출장': '出 (go out) + 張 (stretch). Go out and stretch = business trip.',
  '회의': '會 (meet) + 議 (discuss). Meet and discuss = meeting.',
  '시험': '試 (try) + 驗 (test). Try and test = exam.',
  '준비': '準 (standard) + 備 (prepare). Standard preparation = preparation.',
  '연습': '練 (train) + 習 (practice). Train and practice = practice.',
  '경험': '經 (pass through) + 驗 (test). Pass through tests = experience.',
  '성공': '成 (achieve) + 功 (merit). Achieve merit = success.',
  '실패': '失 (lose) + 敗 (defeat). Lose and defeat = failure.',
  '결과': '結 (tie) + 果 (fruit). Tied fruit = result.',
  '문제': '問 (ask) + 題 (topic). Question topic = problem.',
  '대답': '對 (face) + 答 (answer). Face and answer = reply.',
  '질문': '質 (quality) + 問 (ask). Quality asking = question.',
  '의견': '意 (mind) + 見 (see). Mind seeing = opinion.',
  '생각': 'Native Korean word, not Sino-Korean. One of the most common native verbs.',
  '느낌': 'Native Korean from 느끼다 (to feel). Pure Korean, no hanja.',
  '처방전': '處 (handle) + 方 (method) + 箋 (paper). Handle-method paper = prescription.',
  '동호회': '同 (same) + 好 (like) + 會 (meeting). Same-interest meeting = club.',
  '만화': '漫 (random) + 畫 (picture). Random pictures = comics/manga.',
  '냉장고': '冷 (cold) + 藏 (store) + 庫 (storage). Cold storage box = refrigerator.',
  '세탁기': '洗 (wash) + 濯 (rinse) + 機 (machine). Washing machine.',
  '청소기': '淸 (clean) + 掃 (sweep) + 機 (machine). Cleaning machine = vacuum.',
  '정수기': '淨 (pure) + 水 (water) + 機 (machine). Pure water machine = water purifier.',
  '가전제품': '家 (home) + 電 (electric) + 製 (make) + 品 (goods). Home electric goods = appliances.',
  '반도체': '半 (half) + 導 (guide) + 體 (body). Half-guiding body = semiconductor.',
  '인공지능': '人 (person) + 工 (work) + 知 (know) + 能 (ability). Artificial intelligence.',
  '대기업': '大 (big) + 企 (plan) + 業 (industry). Big planned industry = conglomerate.',
  '중소기업': '中 (medium) + 小 (small) + 企 (plan) + 業 (industry). Small-medium enterprise.',
};

function tryHanja(nl, note) {
  // Check explicit compound map first
  if (HANJA_COMPOUNDS[nl]) {
    return 'From hanja: ' + HANJA_COMPOUNDS[nl];
  }

  // Check if note mentions hanja/Sino-Korean/Chinese
  const noteHasHanja = note && /한자|hanja|sino|chinese char/i.test(note);
  // Check if note has COMPOUND breakdown
  const compoundMatch = note && note.match(/COMPOUND:\s*(.+?)(?:\.|$)/);

  if (compoundMatch) {
    const breakdown = compoundMatch[1].trim();
    if (breakdown.length < 120) {
      return 'Sino-Korean compound: ' + breakdown.replace(/\s*\n\s*/g, ' ');
    }
  }

  // Try to decompose 2-3 syllable words using HANJA dictionary
  if (nl.length >= 2 && nl.length <= 4) {
    const chars = [...nl];
    const parts = [];
    let matchCount = 0;
    for (const ch of chars) {
      if (HANJA[ch]) {
        parts.push(HANJA[ch][0] + ' (' + HANJA[ch][1] + ')');
        matchCount++;
      }
    }
    // Need at least 2 matching syllables for a valid decomposition
    if (matchCount >= 2 && matchCount === chars.length) {
      const decomp = parts.join(' + ');
      if (decomp.length < 130) {
        return 'From hanja: ' + decomp + '.';
      }
    }
  }

  return null;
}

// ═══════════════════════════════════════════════════════════════════
// RULE 3: GRAMMAR PATTERN CARDS
// ═══════════════════════════════════════════════════════════════════

const PARTICLE_FACTS = {
  '는 / 은': 'The topic marker. Sets the stage for what the sentence is about. Korean uses particles where English uses word order.',
  '이 / 가': 'The subject marker. Highlights NEW information. Distinguishes "who did it" from "what we are talking about."',
  '을 / 를': 'The object marker. Tells you what the verb acts on. Often dropped in casual speech.',
  '에': 'Marks location or time. One particle, two jobs. Context tells you which.',
  '에서': 'Marks where an action happens. Compare: 학교에 (toward school) vs 학교에서 (at school, doing something).',
  '도': 'Means "also/too." Replaces other particles: 저는 → 저도 (me too). Very common in daily speech.',
  '의': 'Possessive marker, like English "of" or apostrophe-s. Often dropped in casual Korean.',
  '로 / 으로': 'Marks direction, means, or material. "By bus" = 버스로. One of the most versatile particles.',
  '까지': 'Means "until/up to." Marks an endpoint in time or space.',
  '부터': 'Means "from/since." Marks a starting point. Often paired with 까지.',
  '만': 'Means "only/just." 커피만 (only coffee). Simple but powerful limiter.',
  '처럼': 'Means "like/similar to." Makes comparisons: 영화처럼 (like a movie).',
  '한테': 'Means "to (a person)." Casual form. Formal version is 에게.',
  '에게': 'Means "to (a person)." Formal/written form of 한테.',
  '이나': 'Means "or" between nouns, or "as many as" for surprise. Context decides.',
  '밖에': 'Means "only/nothing but." Always followed by a negative verb. 하나밖에 없어요 (there is only one).',
  '마다': 'Means "every." 매일마다 is redundant. Just 매일 or 날마다.',
  '보다': 'Comparison particle: "more than." 커피보다 차 (tea more than coffee).',
};

const GRAMMAR_ENDING_FACTS = {
  '아요/어요/해요': 'The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.',
  'ㅂ니다/습니다': 'The formal polite ending. Used in news, speeches, and with strangers. Shows maximum respect.',
  '았/었/했': 'Past tense markers. Korean uses just one past tense where English has several.',
  '겠': 'Expresses intention or guess. Context decides: "I will" vs "it seems."',
  '세요/으세요': 'Honorific ending. Elevates the subject of the sentence. Used when talking about elders.',
  '지 마세요': 'Polite "please don\'t." The negative command form. Very useful in daily life.',
  '(으)면': 'The "if/when" connector. Attaches directly to verb stems. One of the first grammar patterns to master.',
  '(으)니까': '"Because" with strong reasoning. Often used to justify suggestions or commands.',
  '는데': 'Background/contrast connector. One of the hardest but most useful Korean grammar patterns.',
  '거든요': '"You see, the reason is..." Gives background explanation. Very natural in conversation.',
  '네요': 'Exclamatory ending expressing surprise or realization. "Oh, (I see that)..."',
  '(으)ㄹ 수 있다': '"Can/able to." The main ability expression. Very frequently used.',
  '(으)ㄹ 거예요': 'Future tense. "Will/going to." Expresses plans or predictions.',
  '고 싶다': '"Want to (do)." Attaches to verb stems. One of the first desire expressions learned.',
  '아/어 보다': '"Try doing." 먹어 보세요 = please try eating it. Common recommendation pattern.',
  '아/어야 하다': '"Must/have to." Obligation expression. 해야 해요 = I have to do it.',
  '(으)면서': '"While doing." Simultaneous action connector. 음악을 들으면서 공부해요.',
  '기 때문에': '"Because of." Noun-based reason expression. More formal than (으)니까.',
  '(으)ㄴ/는 것 같다': '"It seems like." Softens statements. Koreans prefer indirect expression.',
  '도록': '"So that/in order to." Purpose connector for formal contexts.',
  '(으)려고': '"In order to/intending to." Common purpose expression.',
};

function tryGrammarFact(nl, kind, pos, en, note) {
  if (kind === 'grammar' || kind === 'particle' || pos === 'part') {
    // Check particle map
    for (const [key, fact] of Object.entries(PARTICLE_FACTS)) {
      if (nl.includes(key) || key.includes(nl.trim())) {
        return fact;
      }
    }
    // Check grammar ending map
    for (const [key, fact] of Object.entries(GRAMMAR_ENDING_FACTS)) {
      const parts = key.replace(/[()]/g, '').split('/');
      if (parts.some(p => nl.includes(p))) {
        return fact;
      }
    }
    // Generic grammar card fact
    if (kind === 'grammar') {
      if (pos === 'part') return 'Korean particles attach after nouns to mark their role. No equivalent in English.';
      if (pos === 'aux' || pos === 'verb') return 'Korean verb endings change meaning dramatically. Mastering endings is the key to fluency.';
      if (en && en.includes('not') || en && en.includes('negat')) return 'Korean has two negation systems: pre-verb 안 and post-verb -지 않다. Both are used daily.';
      return 'Korean grammar works by stacking endings onto verb/adjective stems. Each ending adds meaning.';
    }
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════
// RULE 4: CULTURAL CONTEXT
// ═══════════════════════════════════════════════════════════════════

const CULTURAL_FACTS = {
  '김치': 'Korea\'s national dish. UNESCO Intangible Cultural Heritage since 2013. Over 200 varieties exist.',
  '반말': 'Using casual speech with someone older is considered very disrespectful in Korean culture.',
  '존댓말': 'Korean has 7 speech levels. Most learners need just 2: polite informal and formal polite.',
  '소주': 'Korea\'s most popular alcohol. Jinro soju is the world\'s best-selling spirit by volume.',
  '치맥': 'Fried chicken + beer. A beloved Korean combo, especially popular during sports events.',
  '한복': 'Traditional Korean clothing. Now mostly worn during holidays like Chuseok and Seollal.',
  '떡볶이': 'Spicy rice cakes. Korea\'s most popular street food. Found at every market and convenience store.',
  '삼겹살': 'Pork belly BBQ. So popular that March 3rd (3.3 = sam.sam) is unofficial Samgyeopsal Day.',
  '불고기': 'Marinated beef BBQ. One of Korea\'s most famous dishes worldwide.',
  '비빔밥': 'Mixed rice bowl. The name literally means "mixed rice." Each region has its own version.',
  '라면': 'Korean instant noodles. Korea has the highest per-capita instant noodle consumption in the world.',
  '노래방': 'Karaoke room. "Song room" in Korean. A hugely popular social activity for all ages.',
  '찜질방': 'Korean spa/sauna. A social hub where Koreans eat, sleep, and hang out for hours.',
  '편의점': 'Convenience stores in Korea are everywhere. You can pay bills, print documents, and eat there.',
  '지하철': 'Seoul\'s subway is one of the world\'s longest and most efficient. All signs are in 4 languages.',
  '한글': 'Created by King Sejong in 1443. Designed to be easy to learn. Called "the most scientific alphabet."',
  '설날': 'Korean Lunar New Year. Families gather, wear hanbok, play games, and eat tteokguk (rice cake soup).',
  '추석': 'Korean harvest festival (mid-autumn). As important as Seollal. Families visit ancestral graves.',
  '아이돌': 'K-pop idols. The Korean entertainment industry trains performers for years before debut.',
  '재벌': 'Korean conglomerates (Samsung, Hyundai, LG). They shape nearly every aspect of Korean life.',
  '눈치': 'The art of reading the room. A core Korean social skill with no English equivalent.',
  '정': 'Deep emotional bond. A uniquely Korean concept of affection that develops over shared experiences.',
  '화이팅': 'Korean fighting/cheering expression. Borrowed from English but used very differently.',
  '빨리빨리': 'Korea\'s "hurry hurry" culture. Speed is valued in business, service, and daily life.',
  '오빠': 'What a younger woman calls an older male friend/brother. Also used for boyfriends and male celebrities.',
  '언니': 'What a younger woman calls an older female friend/sister. Important in Korean social hierarchy.',
  '형': 'What a younger man calls an older male friend/brother. Key relationship term.',
  '누나': 'What a younger man calls an older female friend/sister. Shows respect and closeness.',
  '아저씨': '"Uncle/mister." Used for middle-aged men. Can be offensive if the person feels too young for it.',
  '아줌마': '"Auntie." Used for middle-aged women. Some find it endearing, others find it rude.',
  '선배': 'Senior (school/work). The senior-junior hierarchy is central to Korean social structure.',
  '후배': 'Junior (school/work). Juniors are expected to show respect and use polite language to seniors.',
  '감사합니다': 'The formal "thank you." You will hear and use this more than almost any other phrase.',
  '미안합니다': 'Formal "I\'m sorry." Koreans apologize frequently as a social lubricant.',
  '수고하셨습니다': '"You worked hard." Said to coworkers at the end of the day. No direct English equivalent.',
  '밥 먹었어요?': '"Have you eaten?" A common Korean greeting that shows care, not just about food.',
  '나이': 'Age is asked early in Korean conversations because it determines the speech level you must use.',
  '동네': 'Neighborhood. Korean neighborhoods are tight-knit communities with their own character.',
  '시장': 'Traditional market. Every Korean city has vibrant markets with food, clothes, and daily goods.',
};

function tryCulturalFact(nl, en) {
  if (CULTURAL_FACTS[nl]) return CULTURAL_FACTS[nl];
  // Partial match for compound words
  for (const [key, fact] of Object.entries(CULTURAL_FACTS)) {
    if (nl.includes(key) && nl.length <= key.length + 2) return fact;
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════
// RULE 5: COMPOUND BREAKDOWN (native Korean)
// ═══════════════════════════════════════════════════════════════════

function tryCompoundBreakdown(nl, note) {
  // Check if note already has a compound breakdown
  if (note && /COMPOUND:|compound:|합성어/i.test(note)) {
    const match = note.match(/COMPOUND:\s*(.+?)(?:\.\s|\n|$)/i);
    if (match) {
      const breakdown = match[1].trim();
      if (breakdown.length < 130) {
        return 'Compound word: ' + breakdown.replace(/\s*\n\s*/g, ' ') + '.';
      }
    }
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════
// RULE 6: FALLBACK (extract from note/deepDive)
// ═══════════════════════════════════════════════════════════════════

function generateFallback(nl, en, note, deepDive, kind, pos) {
  const enClean = (en || '').replace(/[^\w\s/,'-]/g, '').trim();

  // Try to extract an interesting fact from deepDive
  if (deepDive) {
    const ddText = typeof deepDive === 'object' ? (deepDive.text || '') : String(deepDive);
    // Look for cultural/usage nuggets
    const sentences = ddText.split(/[.\n]/).filter(s => s.trim().length > 15 && s.trim().length < 140);
    for (const s of sentences) {
      const trimmed = s.trim();
      // Skip Korean-heavy sentences, keep English explanations
      if (/^[A-Za-z]/.test(trimmed) && !/^\s*[→←]/.test(trimmed) && !/^[A-Z]:/.test(trimmed)) {
        if (trimmed.length < 145) return trimmed.endsWith('.') ? trimmed : trimmed + '.';
      }
    }
  }

  // Extract from note
  if (note) {
    const sentences = note.split(/[.\n]/).filter(s => s.trim().length > 15 && s.trim().length < 140);
    for (const s of sentences) {
      const trimmed = s.trim();
      if (/^[A-Za-z]/.test(trimmed) && !/^→/.test(trimmed) && !/COMPOUND/i.test(trimmed) && !/^[A-Z]:/.test(trimmed)) {
        if (trimmed.length < 145) return trimmed.endsWith('.') ? trimmed : trimmed + '.';
      }
    }
  }

  // Generate based on kind/pos
  if (kind === 'verb' || pos === 'verb') {
    return 'Korean verbs don\'t change for person or number. "I go" and "they go" use the same verb form.';
  }
  if (kind === 'adjective' || pos === 'adj') {
    return 'Korean adjectives conjugate like verbs. They can end sentences without a separate "to be."';
  }
  if (kind === 'phrase' || pos === 'intj') {
    return 'Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.';
  }
  if (kind === 'connector') {
    return 'Korean sentence connectors are essential for natural speech. They link ideas like glue.';
  }
  if (kind === 'adverb' || pos === 'adv') {
    return 'Korean adverbs usually come right before the verb they modify. Word order is flexible.';
  }
  if (kind === 'noun' || pos === 'noun') {
    return 'Korean nouns don\'t have plural forms or articles. Context and particles do the job.';
  }
  if (kind === 'exclamation' || kind === 'slang') {
    return 'Korean has rich informal expressions. Using them at the right time shows cultural fluency.';
  }

  // Ultimate fallback
  return 'Used frequently in everyday Korean conversation. Practice it in context for natural recall.';
}

// ═══════════════════════════════════════════════════════════════════
// MAIN PROCESSING
// ═══════════════════════════════════════════════════════════════════

function escapeForJS(str) {
  // Ensure the string is safe for JS double-quoted string
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '')
    .replace(/\t/g, ' ');
}

function run() {
  console.log('Reading', SRC);
  const src = fs.readFileSync(SRC, 'utf8');

  // Backup
  fs.writeFileSync(BAK, src);
  console.log('Backup saved to', BAK);

  const stats = { total: 0, added: 0, alreadyHas: 0, rules: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0} };

  // Regex to match teach cards - we look for the pattern and insert funFact after gender:null
  // We process line by line to avoid issues with multi-line regex
  const lines = src.split('\n');
  const output = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line has a teach card
    if (!/{type:"teach"/.test(line)) {
      output.push(line);
      continue;
    }

    stats.total++;

    // Check if already has funFact
    if (/funFact:/.test(line)) {
      stats.alreadyHas++;
      output.push(line);
      continue;
    }

    // Extract fields from the teach card
    const nlMatch = line.match(/nl:"([^"]*(?:\\.[^"]*)*)"/);
    const enMatch = line.match(/en:"([^"]*(?:\\.[^"]*)*)"/);
    const noteMatch = line.match(/note:"([^"]*(?:\\.[^"]*)*)"/);
    const kindMatch = line.match(/kind:"([^"]*)"/);
    const posMatch = line.match(/pos:"([^"]*)"/);

    // Extract deepDive - it could be an object or string
    let deepDiveText = '';
    const ddObjMatch = line.match(/deepDive:\{[^}]*text:"([^"]*(?:\\.[^"]*)*)"/);
    const ddStrMatch = line.match(/deepDive:"([^"]*(?:\\.[^"]*)*)"/);
    if (ddObjMatch) deepDiveText = ddObjMatch[1];
    else if (ddStrMatch) deepDiveText = ddStrMatch[1];

    const nl = nlMatch ? nlMatch[1].replace(/\\"/g, '"') : '';
    const en = enMatch ? enMatch[1].replace(/\\"/g, '"') : '';
    const note = noteMatch ? noteMatch[1].replace(/\\"/g, '"').replace(/\\n/g, '\n') : '';
    const kind = kindMatch ? kindMatch[1] : '';
    const pos = posMatch ? posMatch[1] : '';
    const deepDive = deepDiveText.replace(/\\"/g, '"').replace(/\\n/g, '\n');

    let funFact = null;
    let ruleUsed = 0;

    // Rule 1: Loanword detection
    const loanSource = isLikelyLoanword(nl, en);
    if (loanSource && (note.toLowerCase().includes('from english') || note.toLowerCase().includes('from french') || note.toLowerCase().includes('from german') || LOANWORD_MAP[nl])) {
      funFact = 'Loanword from English "' + loanSource + '." Korean adapted it using Hangul phonetics.';
      ruleUsed = 1;
    }
    // Also catch when note mentions "From English" explicitly
    if (!funFact && loanSource && /from (english|french|german|japanese|portuguese)/i.test(note)) {
      funFact = 'Loanword from English "' + loanSource + '." Korean adapted it using Hangul phonetics.';
      ruleUsed = 1;
    }
    // Explicit loanword map without note check
    if (!funFact && LOANWORD_MAP[nl]) {
      funFact = 'Loanword from English "' + LOANWORD_MAP[nl] + '." Korean adapted it using Hangul phonetics.';
      ruleUsed = 1;
    }

    // Rule 2: Hanja detection
    if (!funFact) {
      funFact = tryHanja(nl, note);
      if (funFact) ruleUsed = 2;
    }

    // Rule 3: Grammar patterns
    if (!funFact) {
      funFact = tryGrammarFact(nl, kind, pos, en, note);
      if (funFact) ruleUsed = 3;
    }

    // Rule 4: Cultural context
    if (!funFact) {
      funFact = tryCulturalFact(nl, en);
      if (funFact) ruleUsed = 4;
    }

    // Rule 5: Compound breakdown from note
    if (!funFact) {
      funFact = tryCompoundBreakdown(nl, note);
      if (funFact) ruleUsed = 5;
    }

    // Rule 6: Fallback
    if (!funFact) {
      funFact = generateFallback(nl, en, note, deepDive || { text: deepDiveText }, kind, pos);
      ruleUsed = 6;
    }

    // Truncate to ~150 chars if needed
    if (funFact && funFact.length > 155) {
      // Try to cut at last sentence boundary before 150
      const cutIdx = funFact.lastIndexOf('.', 148);
      if (cutIdx > 50) {
        funFact = funFact.substring(0, cutIdx + 1);
      } else {
        funFact = funFact.substring(0, 148).trim() + '...';
      }
    }

    // Clean: no em-dashes
    funFact = funFact.replace(/\u2014/g, '. ').replace(/\u2013/g, ', ');

    // Escape for JS string
    const escaped = escapeForJS(funFact);

    // Insert funFact after gender:null, or after phonetic: field, or after en: field
    let modified;
    if (/gender:null,/.test(line)) {
      modified = line.replace(
        /gender:null,/,
        'gender:null,funFact:"' + escaped + '",'
      );
    } else if (/phonetic:"[^"]*",/.test(line)) {
      modified = line.replace(
        /(phonetic:"[^"]*",)/,
        '$1funFact:"' + escaped + '",'
      );
    } else if (/en:"[^"]*",/.test(line)) {
      modified = line.replace(
        /(en:"[^"]*",)/,
        '$1funFact:"' + escaped + '",'
      );
    } else {
      // Last resort: insert after {type:"teach",
      modified = line.replace(
        /(\{type:"teach",)/,
        '$1funFact:"' + escaped + '",'
      );
    }

    output.push(modified);
    stats.added++;
    stats.rules[ruleUsed]++;
  }

  const result = output.join('\n');
  fs.writeFileSync(SRC, result, 'utf8');

  console.log('\n=== Korean funFact Auto-Generation Results ===');
  console.log('Total teach cards found:', stats.total);
  console.log('Already had funFact:', stats.alreadyHas);
  console.log('funFacts added:', stats.added);
  console.log('\nBy rule:');
  console.log('  Rule 1 (Loanword):', stats.rules[1]);
  console.log('  Rule 2 (Hanja):', stats.rules[2]);
  console.log('  Rule 3 (Grammar):', stats.rules[3]);
  console.log('  Rule 4 (Cultural):', stats.rules[4]);
  console.log('  Rule 5 (Compound):', stats.rules[5]);
  console.log('  Rule 6 (Fallback):', stats.rules[6]);
  console.log('\nDone. File written to', SRC);
}

run();
