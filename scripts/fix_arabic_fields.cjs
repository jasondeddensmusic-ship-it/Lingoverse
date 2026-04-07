#!/usr/bin/env node
/**
 * Fix broken Arabic fields across all 36 AR unit files.
 * Phase 1: Fix known broken src patterns (mixed Arabic/English)
 * Phase 2: Translate English match pairs to Arabic
 * Phase 3: Translate mixed Arabic/English hints to full Arabic
 *
 * Usage: node scripts/fix_arabic_fields.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const dryRun = process.argv.includes('--dry-run');
const dir = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar');

// ── Phase 1: Known broken src translations ──
const SRC_FIXES = {
  // Gender-tagged words with English
  'المحاضرةr (male)': 'المحاضِر',
  'المحاضرةr (female)': 'المحاضِرة',
  'الجامعة cafeteria': 'مقصف الجامعة',
  'department store': 'متجر متعدد الأقسام',
  'the female boss': 'المديرة',
  'application': 'طلب التوظيف',
  'CV/resume': 'السيرة الذاتية',
  'the manager (male)': 'المدير',
  'female judge': 'القاضية',
  'مترجم (female)': 'المترجمة',
  'مستمع (female)': 'المستمعة',
  'متحدث، مُقدّم (female)': 'المتحدثة، المُقدّمة',
  'شاعر، كاتب أدبي (female)': 'الشاعرة، الكاتبة الأدبية',
  'راوٍ (female)': 'الراوية',
  'ممثل، نائب (female)': 'الممثلة، النائبة',
  'الطاهي، الشيف (female)': 'الطاهية، الشيفة',
  'المستأجر (female)': 'المستأجرة',
  'التاجر (female)': 'التاجرة',
  'المدير (female)': 'المديرة',
};

// ── Phase 2: English match pair translations ──
const MATCH_TRANSLATIONS = {
  // Common words across units
  'Hello': 'مرحبًا', 'hello': 'مرحبًا',
  'Excuse me': 'عذرًا', 'excuse me': 'عذرًا',
  'the train': 'القطار', 'train': 'القطار',
  'to speak': 'يتكلم', 'speak': 'يتكلم',
  'station': 'المحطة', 'train station': 'محطة القطار',
  'a little bit': 'قليلًا', 'a bit': 'قليلًا',
  'Good morning': 'صباح الخير', 'good morning': 'صباح الخير',
  'Good day': 'مساء الخير', 'good day': 'نهارك سعيد',
  'Good evening': 'مساء الخير', 'good evening': 'مساء الخير',
  'Goodbye': 'مع السلامة', 'goodbye': 'مع السلامة',
  'please': 'من فضلك', 'Please': 'من فضلك',
  'thank you': 'شكرًا', 'Thank you': 'شكرًا', 'thanks': 'شكرًا',
  'yes': 'نعم', 'Yes': 'نعم',
  'no': 'لا', 'No': 'لا',
  'water': 'ماء', 'the water': 'الماء',
  'bread': 'خبز', 'the bread': 'الخبز',
  'coffee': 'قهوة', 'the coffee': 'القهوة',
  'milk': 'حليب', 'the milk': 'الحليب',
  'I': 'أنا', 'you': 'أنتَ', 'he': 'هو', 'she': 'هي', 'we': 'نحن', 'they': 'هم',
  'to go': 'يذهب', 'to come': 'يأتي', 'to have': 'يملك', 'to be': 'يكون',
  'to want': 'يريد', 'to can': 'يستطيع', 'to must': 'يجب',
  'to eat': 'يأكل', 'to drink': 'يشرب', 'to sleep': 'ينام',
  'to read': 'يقرأ', 'to write': 'يكتب', 'to learn': 'يتعلم',
  'to work': 'يعمل', 'to live': 'يعيش', 'to buy': 'يشتري',
  'to see': 'يرى', 'to hear': 'يسمع', 'to say': 'يقول',
  'to give': 'يعطي', 'to take': 'يأخذ', 'to help': 'يساعد',
  'big': 'كبير', 'small': 'صغير', 'good': 'جيد', 'bad': 'سيئ',
  'new': 'جديد', 'old': 'قديم', 'beautiful': 'جميل', 'ugly': 'قبيح',
  'hot': 'حار', 'cold': 'بارد', 'warm': 'دافئ', 'cool': 'بارد',
  'fast': 'سريع', 'slow': 'بطيء', 'cheap': 'رخيص', 'expensive': 'غالي',
  'house': 'منزل', 'the house': 'المنزل', 'apartment': 'شقة', 'the apartment': 'الشقة',
  'room': 'غرفة', 'the room': 'الغرفة', 'kitchen': 'مطبخ', 'the kitchen': 'المطبخ',
  'city': 'مدينة', 'the city': 'المدينة', 'street': 'شارع', 'the street': 'الشارع',
  'man': 'رجل', 'woman': 'امرأة', 'child': 'طفل', 'friend': 'صديق',
  'family': 'عائلة', 'mother': 'أم', 'father': 'أب', 'brother': 'أخ', 'sister': 'أخت',
  'doctor': 'طبيب', 'teacher': 'معلم', 'student': 'طالب',
  'money': 'مال', 'the money': 'المال', 'time': 'وقت', 'the time': 'الوقت',
  'today': 'اليوم', 'tomorrow': 'غدًا', 'yesterday': 'أمس',
  'always': 'دائمًا', 'never': 'أبدًا', 'sometimes': 'أحيانًا', 'often': 'غالبًا',
  'here': 'هنا', 'there': 'هناك', 'where': 'أين', 'when': 'متى', 'why': 'لماذا', 'how': 'كيف',
  'and': 'و', 'or': 'أو', 'but': 'لكن', 'because': 'لأن',
  'with': 'مع', 'without': 'بدون', 'for': 'لـ', 'from': 'من', 'to': 'إلى', 'in': 'في',
  // B1-B2 vocab
  'application': 'طلب التوظيف', 'the application': 'طلب التوظيف',
  'CV/resume': 'السيرة الذاتية', 'resume': 'السيرة الذاتية',
  'success': 'النجاح', 'career': 'المسيرة المهنية',
  'impression': 'الانطباع', 'preparation': 'التحضير',
  'lecture': 'المحاضرة', 'discussion class': 'حلقة دراسية',
  'cafeteria': 'المقصف', 'faculty/department': 'الكلية',
  'faculty': 'الكلية', 'department': 'القسم',
  'economy': 'الاقتصاد', 'politics': 'السياسة', 'society': 'المجتمع',
  'environment': 'البيئة', 'nature': 'الطبيعة', 'science': 'العلم',
  'culture': 'الثقافة', 'art': 'الفن', 'music': 'الموسيقى',
  'health': 'الصحة', 'sport': 'الرياضة', 'travel': 'السفر',
  'experience': 'الخبرة', 'education': 'التعليم', 'knowledge': 'المعرفة',
  'opinion': 'الرأي', 'idea': 'الفكرة', 'problem': 'المشكلة', 'solution': 'الحل',
  'question': 'السؤال', 'answer': 'الجواب', 'example': 'المثال',
  'meaning': 'المعنى', 'reason': 'السبب', 'goal': 'الهدف',
  'right': 'الحق', 'law': 'القانون', 'rule': 'القاعدة',
  'freedom': 'الحرية', 'peace': 'السلام', 'war': 'الحرب',
  'power': 'القوة', 'government': 'الحكومة', 'state': 'الدولة',
  'development': 'التنمية', 'change': 'التغيير', 'progress': 'التقدم',
  'research': 'البحث', 'study': 'الدراسة', 'university': 'الجامعة',
  'to apply': 'يتقدم بطلب', 'to expect': 'يتوقع', 'to prepare': 'يحضّر',
  'to create': 'يُنشئ', 'to react': 'يتفاعل', 'to notice': 'يلاحظ',
  'polite': 'مؤدب', 'correct': 'صحيح', 'personal': 'شخصي', 'ready': 'مستعد',
  'to study': 'يدرس', 'to enroll': 'يسجّل', 'to research': 'يبحث',
  'academic': 'أكاديمي', 'scientific': 'علمي', 'fundamental': 'أساسي',
  'in particular': 'ولا سيما', 'in principle': 'من حيث المبدأ',
  'by means of': 'بواسطة', 'with regard to': 'فيما يتعلق بـ',
  'concerning': 'بخصوص', 'regarding': 'بشأن',
  // Common compound match targets
  'daily routine': 'الروتين اليومي', 'to get up': 'يستيقظ',
  'breakfast': 'الفطور', 'lunch': 'الغداء', 'dinner': 'العشاء',
  'morning': 'الصباح', 'afternoon': 'بعد الظهر', 'evening': 'المساء', 'night': 'الليل',
  'weather': 'الطقس', 'rain': 'المطر', 'sun': 'الشمس', 'snow': 'الثلج',
  'spring': 'الربيع', 'summer': 'الصيف', 'autumn': 'الخريف', 'winter': 'الشتاء',
  'Monday': 'الاثنين', 'Tuesday': 'الثلاثاء', 'Wednesday': 'الأربعاء',
  'Thursday': 'الخميس', 'Friday': 'الجمعة', 'Saturday': 'السبت', 'Sunday': 'الأحد',
  'January': 'يناير', 'February': 'فبراير', 'March': 'مارس',
  'to wish': 'يتمنى', 'to hope': 'يأمل', 'to believe': 'يعتقد',
  'to try': 'يحاول', 'to decide': 'يقرر', 'to choose': 'يختار',
  'to begin': 'يبدأ', 'to end': 'ينتهي', 'to continue': 'يستمر',
  'happy': 'سعيد', 'sad': 'حزين', 'angry': 'غاضب', 'tired': 'متعب',
  'important': 'مهم', 'difficult': 'صعب', 'easy': 'سهل', 'possible': 'ممكن',
  'necessary': 'ضروري', 'different': 'مختلف', 'same': 'نفس',
  // Extended B2 vocab
  'to translate': 'يترجم', 'translator': 'مترجم',
  'listener': 'مستمع', 'speaker': 'متحدث',
  'poet': 'شاعر', 'author': 'كاتب', 'narrator': 'راوٍ',
  'representative': 'ممثل', 'deputy': 'نائب',
  'tenant': 'مستأجر', 'landlord': 'المؤجر',
  'chef': 'طاهٍ', 'cook': 'طبّاخ',
  'trader': 'تاجر', 'merchant': 'تاجر',
  'to process': 'يعالج', 'to handle': 'يتعامل مع',
  'proud': 'فخور', 'envious': 'حسود', 'jealous': 'غيور',
};

// ── Phase 3: Hint translation patterns ──
const HINT_FIXES = [
  [/\bthe meaning of this word in context\b/gi, 'معنى هذه الكلمة في السياق'],
  [/\bthe meaning of this word\b/gi, 'معنى هذه الكلمة'],
  [/\bthink about the meaning\b/gi, 'فكّر في المعنى'],
  [/\bthink about what this word means\b/gi, 'فكّر فيما تعنيه هذه الكلمة'],
  [/\bWhich word fits in this context\?/gi, 'أي كلمة تناسب هذا السياق؟'],
  [/\bWhich word fits\?/gi, 'أي كلمة تناسب؟'],
  [/\bin this context\b/gi, 'في هذا السياق'],
  [/\bthe word\b/gi, 'الكلمة'],
  [/\bThis word\b/gi, 'هذه الكلمة'],
  [/\bthis word\b/gi, 'هذه الكلمة'],
];

let totalSrcFixes = 0;
let totalMatchFixes = 0;
let totalHintFixes = 0;

for (let i = 1; i <= 36; i++) {
  const pad = String(i).padStart(2, '0');
  const filePath = path.join(dir, `unit-${pad}.js`);
  let raw = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Phase 1: Fix broken src fields
  for (const [bad, good] of Object.entries(SRC_FIXES)) {
    const escaped = bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const rx = new RegExp(`src:"${escaped}"`, 'g');
    const count = (raw.match(rx) || []).length;
    if (count > 0) {
      raw = raw.replace(rx, `src:"${good}"`);
      totalSrcFixes += count;
      changed = true;
    }
  }

  // Phase 2: Fix English match pairs
  // Match pattern: {trg:"...",src:"ENGLISH"} where src has no Arabic
  raw = raw.replace(/\{trg:"([^"]+)",src:"([^"]+)"\}/g, (match, trg, src) => {
    // Skip if already Arabic
    if (/[\u0600-\u06FF]/.test(src)) return match;
    // Try to find translation
    const trans = MATCH_TRANSLATIONS[src] || MATCH_TRANSLATIONS[src.toLowerCase()];
    if (trans) {
      totalMatchFixes++;
      changed = true;
      return `{trg:"${trg}",src:"${trans}"}`;
    }
    return match;
  });

  // Phase 3: Fix mixed Arabic/English hints
  raw = raw.replace(/hint:"([^"]+)"/g, (match, hint) => {
    // Only fix if hint has BOTH Arabic AND English
    if (!/[\u0600-\u06FF]/.test(hint)) return match;
    if (!/[a-zA-Z]{3,}/.test(hint)) return match;

    let fixed = hint;
    for (const [rx, repl] of HINT_FIXES) {
      fixed = fixed.replace(rx, repl);
    }
    if (fixed !== hint) {
      totalHintFixes++;
      changed = true;
      return `hint:"${fixed}"`;
    }
    return match;
  });

  if (changed && !dryRun) {
    fs.writeFileSync(filePath, raw, 'utf8');
    console.log(`Fixed unit-${pad}.js`);
  } else if (changed) {
    console.log(`[DRY] Would fix unit-${pad}.js`);
  }
}

console.log(`\n=== RESULTS ===`);
console.log(`Broken src fixed: ${totalSrcFixes}`);
console.log(`Match pairs translated: ${totalMatchFixes}`);
console.log(`Mixed hints fixed: ${totalHintFixes}`);
console.log(`Total fixes: ${totalSrcFixes + totalMatchFixes + totalHintFixes}`);
if (dryRun) console.log('(DRY RUN — no files written)');
