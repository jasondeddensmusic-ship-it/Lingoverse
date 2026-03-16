# Spanish A1-B2 Content Agent Prompt

> This document provides the exact briefing for content generation agents building Spanish curriculum units.
> Used with Rule 12 (D107): agents write to temp files, main session merges.

---

## AGENT BRIEFING TEMPLATE

Copy and customize the sections below when deploying a content agent for Spanish unit(s).

### TASK

You are building **Unit [N]** of the Spanish A1-B2 curriculum for LingoVerse.

Write the complete unit to `/tmp/esp-u[N].js` as a `module.exports = [...]` containing one unit object.

### OUTPUT FORMAT

Write EXACTLY this format to `/tmp/esp-u[N].js`:

```javascript
module.exports = [
{n:[N],lang:"es",track:"v1",title:"[Title]",sub:"[Subtitle]",icon:"[emoji]",level:"[A1.1-B2.2]",color:"#7B5EE8",lessons:[
// ===== L1: [Lesson Title] =====
{id:"esp[N]l1",title:"[Title]",icon:"[emoji]",xp:15,board:true,steps:[
{type:"intro",title:"[Title]",desc:"[Description]",goals:["goal1","goal2","goal3"]},
{type:"teach",kind:"word",nl:"[Spanish word with el/la]",en:"[English]",phonetic:"[ASCII phonetic]",example:"A: [Spanish dialogue line]\nB: [Spanish response]",exampleEn:"A: [English translation]\nB: [English translation]",note:"[Teaching note, max 100 chars]"},
// ... more steps ...
]},
// ... 8 lessons total ...
]}
];
```

### CRITICAL RULES (NON-NEGOTIABLE)

1. **8 lessons per unit.** No more, no less.
2. **18+ steps per lesson.** MINIMUM. Count them. If a lesson has 17 steps, add one more. This is P43.
3. **board:true** on EVERY lesson. No exceptions.
4. **Lesson IDs**: `esp[N]l[1-8]` (e.g., esp7l1, esp7l2, ..., esp7l8).
5. **Every teach card has A:/B: dialogues** in both `example` and `exampleEn` fields. Use `\n` to separate lines.
6. **Every noun teach card includes el/la** in the `nl` field (e.g., `nl:"el libro"`, `nl:"la mesa"`).
7. **Article colors**: el = blue (masculine), la = coral (feminine). The engine handles this automatically from ARTICLE_SYSTEMS.
8. **Phonetics**: ASCII-only, capitals for stress. NO IPA. Examples: "OH-la", "BWEH-nos DEE-as", "gra-THYAS".
9. **No em-dashes (---)** anywhere. Use periods, commas, colons, or `\n` bullets. (P22c)
10. **No CEFR labels** in learner-facing content. Never write A1, A2, B1, B2, C1 in any q, opts, ans, note, or desc field. (P49)

### STEP TYPES

| Type | Purpose | Required Fields |
|------|---------|----------------|
| `intro` | Lesson opener | title, desc, goals[] |
| `teach` | Word/concept card | nl, en, kind, phonetic, example, exampleEn, note |
| `tip` | Grammar/culture explanation | title, text |
| `mc` | Multiple choice quiz | q, opts[] (4 options), ans (must match one opt exactly), hint |
| `fb` | Fill-in-blank (SINGLE blank only) | s (with {1}), a, opts[] (4 options), hint |
| `match` | Matching pairs | pairs: [{nl, en}, ...] (4-6 pairs) |
| `drag_fill` | Multi-blank drag (2+ blanks) | s (with {1},{2},...), blanks:{1:"ans1",2:"ans2",...}, pool:[], hint |

**P48 CRITICAL**: `fb` steps may ONLY have ONE blank (`{1}`). If you need 2+ blanks, use `drag_fill` with a `blanks` object. NEVER put `{2}` or `{3}` in an `fb` step.

### HINT RULES (P8/P44)

- Hints must be 15+ characters.
- Hints must GUIDE, never REVEAL the answer.
- The hint must NOT contain the answer word/phrase.
- BAD: hint:"Use 'está' here" (reveals answer)
- GOOD: hint:"Location or condition uses a different verb than identity."

### TEACH-BEFORE-TEST (P34)

Every word that appears in a quiz (mc, fb, match, drag_fill) MUST have been taught in a teach card EARLIER in the same lesson or a previous lesson in the same unit. You cannot quiz words that haven't been introduced.

### LESSON STRUCTURE TEMPLATE

Each lesson should follow this approximate pattern:
1. `intro` (1 step)
2. `teach` cards (4-6 steps) - introduce new vocabulary/grammar
3. `tip` (1 step) - grammar explanation
4. Quiz mix (10-12 steps) - mc, fb, match, drag_fill
5. Total: 18-20 steps

### DIALOGUE FORMAT

Teach card dialogues scale by CEFR level:
- A1: 2-3 exchanges (4-6 lines)
- A2: 3-4 exchanges (6-8 lines)
- B1: 4-5 exchanges (8-10 lines)
- B2: 5+ exchanges (10+ lines)

Example A1 dialogue:
```
example:"A: ¡Hola! ¿Cómo te llamas?\nB: Me llamo María. ¿Y tú?\nA: Soy Carlos. Mucho gusto."
exampleEn:"A: Hello! What is your name?\nB: My name is María. And you?\nA: I am Carlos. Nice to meet you."
```

### SPANISH-SPECIFIC RULES

1. **el/la on every noun.** No exceptions. `nl:"el libro"`, not `nl:"libro"`.
2. **Inverted punctuation.** Always use ¿ and ¡ in Spanish sentences. `q:"¿Cómo se dice...?"`.
3. **Accent marks.** Always correct: á, é, í, ó, ú, ñ, ü. Missing accents = spelling errors.
4. **Ser vs estar.** When both verbs have been taught, always be precise about which to use and why.
5. **Verb conjugations.** Show all relevant persons when introducing a new verb. Use verb_table type for systematic conjugation display.
6. **Regional neutrality.** Default to neutral Latin American Spanish. Note Spain differences where relevant (vosotros, z=θ) but don't teach vosotros actively until B1+.
7. **Cognates.** Flag English-Spanish cognates with the `cognate` field on teach cards. Also flag false friends (embarazada ≠ embarrassed).

### SELF-VALIDATION (MANDATORY before returning)

After writing the unit, run this validation on your temp file:

```javascript
node -e "
delete require.cache['/tmp/esp-u[N].js'];
const units = require('/tmp/esp-u[N].js');
let issues = [];
units.forEach((u, i) => {
  if (!u) { issues.push('UNDEFINED at index ' + i); return; }
  u.lessons.forEach(l => {
    if (!l.board) issues.push(l.id + ': missing board:true');
    if (l.steps.length < 18) issues.push(l.id + ': only ' + l.steps.length + ' steps (need 18+)');
    l.steps.forEach((s, si) => {
      if (s.type === 'mc' && !s.ans) issues.push(l.id + ' step ' + si + ': mc missing ans');
      if (s.type === 'fb' && !s.a) issues.push(l.id + ' step ' + si + ': fb missing a');
      if (s.type === 'fb' && s.s && s.s.includes('{2}')) issues.push(l.id + ' step ' + si + ': P48 fb has {2}');
      if (s.type === 'teach' && !s.nl) issues.push(l.id + ' step ' + si + ': teach missing nl');
      if (s.type === 'teach' && !s.en) issues.push(l.id + ' step ' + si + ': teach missing en');
      if (s.type === 'drag_fill' && !s.blanks) issues.push(l.id + ' step ' + si + ': drag_fill missing blanks');
      if (s.type === 'match' && !s.pairs) issues.push(l.id + ' step ' + si + ': match missing pairs');
    });
  });
});
if (issues.length === 0) console.log('PASS: ' + units[0].lessons.length + ' lessons, all valid');
else { console.log('FAIL:'); issues.forEach(i => console.log('  ' + i)); }
"
```

Report PASS or FAIL with details. Fix any issues before returning.

---

## CURRICULUM PLAN REFERENCE

### A1 (U1-U8): Survival Spanish — DELE A1

| Unit | Title | Topics |
|------|-------|--------|
| U1 | ¡Hola! | Greetings, goodbyes, tu/usted, por favor/gracias |
| U2 | Mi Familia | Family, ser/estar basics, possessives, descriptions |
| U3 | Numeros y Colores | Numbers 0-31, days of week, colors, adjective agreement |
| U4 | ¡A Comer! | Food, drinks, restaurants, gustar, estar+food |
| U5 | Mi Dia | Reflexive verbs, -ar conjugation, time, weekend |
| U6 | La Casa | Rooms, furniture, -er/-ir verbs, hay/estar, prepositions |
| **U7** | **¿Donde Esta?** | **Directions, transport, ir+a, venir de, imperative tu** |
| **U8** | **De Compras** | **Shopping, clothing, numbers to 1000, demonstratives** |

### A2 (U9-U16): Expanding — DELE A2

| Unit | Title | Topics |
|------|-------|--------|
| U9 | ¿Que Paso? | Preterito indefinido (regular), time expressions |
| U10 | Historias | Preterito indefinido (irregular: ser/ir, tener, hacer, etc.) |
| U11 | Cuando Era Nino | Preterito imperfecto (descriptions, habits, ongoing past) |
| U12 | Cuentame | Indefinido vs imperfecto (the critical distinction) |
| U13 | Los Pronombres | Object pronouns (lo/la/le/les, me/te/nos), a personal |
| U14 | Planes | Future simple + ir+a+infinitivo, predictions |
| U15 | Comparaciones | Comparatives, superlatives, adjective agreement |
| U16 | Si Pudiera... | Conditional, me gustaria, polite requests |

### B1 (U17-U24): Independent — DELE B1

| Unit | Title | Topics |
|------|-------|--------|
| U17 | Quiero Que... | Subjuntivo presente (regular), common triggers |
| U18 | Es Importante Que... | Subjuntivo (irregular: ser, estar, ir, haber, saber) |
| U19 | Lo Que Necesitas | Relative pronouns (que, quien, donde, cual) |
| U20 | Antes de Eso | Pluscuamperfecto, sequencing, reported speech |
| U21 | En Las Noticias | Passive voice, se pasiva, news language |
| U22 | Estoy Haciendo | Gerundio, progressive tenses, cause/manner |
| U23 | Sin Embargo | Advanced connectors (aunque+subj, a pesar de, etc.) |
| U24 | El Mundo Laboral | Work culture, formal register, cover letters |

### B2 (U25-U30): Proficient — DELE B2 / SIELE

| Unit | Title | Topics |
|------|-------|--------|
| U25 | Si Hubiera Sabido | Subjuntivo imperfecto, advanced triggers |
| U26 | Habria Sido | Condicional compuesto, regrets, reproaches |
| U27 | La Nominalizacion | Academic register, formal writing |
| U28 | Por Un Lado | Discourse markers, essay structure |
| U29 | Refranes | Proverbs, idioms, figurative language |
| U30 | Hacia el C1 | DELE B2/SIELE prep, review, C1 preview |

---

## VOCABULARY TAUGHT SO FAR (U1-U6)

The agent must know what has been taught to avoid redundancy and ensure teach-before-test:

### U1 (Greetings): hola, buenos dias, buenas tardes, buenas noches, adios, hasta luego, hasta manana, senor, senora, por favor, gracias, de nada, tu, usted, como estas, como esta usted, bien, mal, asi asi, muy bien, que tal

### U2 (Family): la familia, el padre/la madre, el hermano/la hermana, el abuelo/la abuela, el hijo/la hija, el tio/la tia, el primo/la prima, soy, eres, es, somos, son, mi, tu, su, nuestro, grande, pequeno, alto, bajo, joven, viejo, guapo, bonito, inteligente, simpatico, estar (estoy, estas, esta), contento, cansado, enfermo, triste

### U3 (Numbers/Colors): numbers 0-31, lunes-domingo, rojo, azul, verde, amarillo, blanco, negro, marron, naranja, rosa, morado, claro, oscuro, que dia es hoy, cuantos, hay

### U4 (Food): la manzana, la naranja, el platano, la fresa, la uva, la zanahoria, la cebolla, el tomate, la lechuga, el ajo, el agua, el cafe, el te, la leche, el zumo, la cerveza, el vino, el desayuno, el almuerzo, la cena, la comida, el pan, el queso, el arroz, la carne, el pescado, el pollo, el huevo, la sopa, la ensalada, dulce, salado, picante, caliente, frio, rico, gustar (me gusta/gustan), querer (quiero, quieres, quiere), la carta, la cuenta, de primero, de segundo, de postre, camarero

### U5 (Daily Routine): despertarse, levantarse, ducharse, vestirse, desayunar, hablar, estudiar, trabajar, cocinar, comprar, llamar, escuchar, comer, beber, leer, escribir, dormir, ver, ir, lavarse, peinarse, acostarse, sentarse, cepillarse, primero, luego, despues, antes de, despues de, finalmente, por la manana/tarde/noche, a las + hora, temprano, tarde, siempre, nunca, a veces, descansar, jugar, pasear, salir, cenar

### U6 (Home): la casa, la cocina, el salon, el dormitorio, el bano, el jardin, la mesa, la silla, la cama, el sofa, la nevera, el armario, comer, beber, vivir, escribir, leer, abrir, hay, estar, cerca, lejos, sobre, debajo de, al lado de, entre, delante de, detras de, del, al, la ventana, la puerta, la lampara, la alfombra, el escritorio, ser vs estar, limpiar, cocinar, lavar, hacer la cama, tener que

---

## SAMPLE UNIT (first 2 lessons of U1 for format reference)

```javascript
{n:1,lang:"es",track:"v1",title:"¡Hola!",sub:"Greetings & Goodbyes",icon:"👋",level:"A1.1",color:"#7B5EE8",lessons:[
{id:"esp1l1",title:"¡Buenos días!",icon:"☀️",xp:15,board:true,steps:[
{type:"intro",title:"¡Buenos días!",desc:"Your first Spanish words! Learn to greet people at any time of day.",goals:["Say hello in Spanish","Use time-appropriate greetings","Know when to use each greeting"]},
{type:"teach",kind:"word",nl:"Hola",en:"Hello",phonetic:"OH-la",example:"A: ¡Hola!\nB: ¡Hola! ¿Qué tal?",exampleEn:"A: Hello!\nB: Hello! How are you?",note:"Universal greeting. Works any time of day, with anyone."},
{type:"teach",kind:"phrase",nl:"Buenos días",en:"Good morning",phonetic:"BWEH-nos DEE-as",example:"A: ¡Buenos días!\nB: ¡Buenos días! ¿Cómo estás?",exampleEn:"A: Good morning!\nB: Good morning! How are you?",note:"Used from sunrise until around noon or lunchtime."},
{type:"teach",kind:"phrase",nl:"Buenas tardes",en:"Good afternoon",phonetic:"BWEH-nas TAR-des",example:"A: ¡Buenas tardes, señora!\nB: ¡Buenas tardes!",exampleEn:"A: Good afternoon, ma'am!\nB: Good afternoon!",note:"Used from lunchtime until sunset. BuenAS because tarde is feminine."},
{type:"teach",kind:"phrase",nl:"Buenas noches",en:"Good evening / Good night",phonetic:"BWEH-nas NO-ches",example:"A: ¡Buenas noches!\nB: ¡Buenas noches! Hasta mañana.",exampleEn:"A: Good evening!\nB: Good evening! See you tomorrow.",note:"Used from sunset onward. Also means good night when saying goodbye."},
{type:"tip",title:"Buenos vs Buenas",text:"Buenos días uses buenos (masculine) because día is masculine.\nBuenas tardes and buenas noches use buenas (feminine) because tarde and noche are feminine.\nThis is your first taste of gender agreement!",icon:"💡"},
{type:"mc",q:"Which greeting works at ANY time of day?",opts:["Buenos días","Buenas tardes","Hola","Buenas noches"],ans:"Hola",hint:"One greeting has no time restriction at all."},
{type:"mc",q:"At 3 PM, you would say:",opts:["Buenos días","Buenas tardes","Buenas noches","Buenas mañanas"],ans:"Buenas tardes",hint:"Afternoon falls between lunch and sunset."},
{type:"mc",q:"Why is it 'buenAS tardes' but 'buenOS días'?",opts:["Tarde is feminine, día is masculine","It is random","Tardes is plural","Días is shorter"],ans:"Tarde is feminine, día is masculine",hint:"The adjective matches the gender of the noun it describes."},
{type:"fb",s:"¡{1} días!",a:"Buenos",opts:["Buenos","Buenas","Bueno","Buena"],hint:"Morning greeting uses the masculine form."},
{type:"fb",s:"¡Buenas {1}!",a:"tardes",opts:["tardes","días","noches","mañanas"],hint:"This greeting is for the afternoon hours."},
{type:"teach",kind:"word",nl:"el señor",en:"sir / Mr.",phonetic:"seh-NYOR",example:"A: ¡Buenos días, señor García!\nB: ¡Buenos días!",exampleEn:"A: Good morning, Mr. García!\nB: Good morning!",note:"Formal address for a man. Used with or without the last name."},
{type:"teach",kind:"word",nl:"la señora",en:"ma'am / Mrs.",phonetic:"seh-NYOR-a",example:"A: ¡Buenas tardes, señora López!\nB: ¡Buenas tardes!",exampleEn:"A: Good afternoon, Mrs. López!\nB: Good afternoon!",note:"Formal address for a woman. Señorita is used for young women."},
{type:"mc",q:"To greet a woman formally in the evening:",opts:["¡Buenos noches, señor!","¡Buenas noches, señora!","¡Hola, señorita noches!","¡Buenos tardes, señora!"],ans:"¡Buenas noches, señora!",hint:"Evening + formal female address. Remember the feminine form."},
{type:"match",pairs:[{nl:"Hola",en:"Hello (anytime)"},{nl:"Buenos días",en:"Good morning"},{nl:"Buenas tardes",en:"Good afternoon"},{nl:"Buenas noches",en:"Good evening"}]},
{type:"mc",q:"At 9 PM, arriving at a restaurant, you say:",opts:["¡Buenos días!","¡Buenas tardes!","¡Buenas noches!","¡Buenas mañanas!"],ans:"¡Buenas noches!",hint:"9 PM is well after sunset."},
{type:"fb",s:"¡Buenas {1}, señora!",a:"noches",opts:["noches","tardes","días","hola"],hint:"This greeting is used after sunset."},
{type:"mc",q:"Your Spanish teacher arrives. You say 'Good morning, sir'. Which is correct?",opts:["¡Buenos días, señor!","¡Buenas días, señor!","¡Buenos noches, señor!","¡Hola días, señor!"],ans:"¡Buenos días, señor!",hint:"Morning = masculine agreement. Formal male = señor."},
]},
// ===== L2: Saying Goodbye =====
// ... continues with 18+ steps ...
]}
```
