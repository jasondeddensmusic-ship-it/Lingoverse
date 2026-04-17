// src/data/foundations.js — Extracted from verumlingua.jsx (structural refactor, no content changes)
// Contains: FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ

export const FOUNDATIONS_BY_LANG = {
  nl:{
    name:"Dutch Foundations",icon:"🇳🇱",
    sections:[
      // ══════════════════════════════════════════════════════════════
      // DUTCH FOUNDATIONS KNOWLEDGE — Reference Library
      // Manifesto Principle 12: grid-first, no meta, no tips,
      // organized by lookup topic, consistent color = meaning.
      // Color key for vowels: A=#E85D75 E=#F5A623 I=#2ECDAB O=#4A8FE7 U=#7B5EE8
      // ══════════════════════════════════════════════════════════════

      // ─────────── 1. THE ALPHABET ───────────
      {id:"nl_alphabet",title:"The Alphabet",icon:"🔤",desc:"26 letters — same as English, different sounds",
        items:[
          {fk:"fk_alphabet_overview",title:"The Dutch alphabet",audio_id:null,
            desc:"All 26 letters. IJ counts as a single letter in Dutch. Q, X, Y are loanword-only.",
            grid:{cols:7,headers:["","","","","","",""],rows:[
              {label:"Vowels",color:"#E85D75",cells:[{ch:"A",rom:"/aː/"},{ch:"E",rom:"/eː/"},{ch:"I",rom:"/i/"},{ch:"O",rom:"/oː/"},{ch:"U",rom:"/y/"},{ch:"IJ",rom:"/ɛi/"},{ch:"Y",rom:"/ɛi/"}]},
              {label:"Soft",color:"#4A8FE7",cells:[{ch:"B",rom:"/b/"},{ch:"D",rom:"/d/"},{ch:"F",rom:"/f/"},{ch:"G",rom:"/ɣ/"},{ch:"H",rom:"/ɦ/"},{ch:"J",rom:"/j/"},{ch:"L",rom:"/l/"}]},
              {label:"Hard",color:"#2ECDAB",cells:[{ch:"K",rom:"/k/"},{ch:"M",rom:"/m/"},{ch:"N",rom:"/n/"},{ch:"P",rom:"/p/"},{ch:"R",rom:"/r/"},{ch:"S",rom:"/s/"},{ch:"T",rom:"/t/"}]},
              {label:"Rare",color:"#9B9B9B",cells:[{ch:"C",rom:"→ k or s"},{ch:"V",rom:"/v/"},{ch:"W",rom:"/ʋ/"},{ch:"X",rom:"/ks/"},{ch:"Z",rom:"/z/"},{ch:"Q",rom:"loanwords"},{ch:"",rom:""}]},
            ]}},
      ]},

      // ─────────── 2. VOWELS ───────────
      {id:"nl_vowels",title:"Vowels",icon:"🔊",desc:"Short/long pairs, digraph vowels, diphthongs",
        items:[
          {fk:"fk_vowel_grid",title:"Short ↔ long vowel families",audio_id:null,
            desc:"Every Dutch vowel belongs to a family. Short vowels appear in closed syllables (single letter). Long vowels use double letters in closed syllables or single letters in open syllables.",
            grid:{cols:4,headers:["Short","Example","Long","Example"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"a",rom:"/ɑ/"},{ch:"man, kat, bak",rom:"closed syllable"},{ch:"aa / a",rom:"/aː/"},{ch:"maan / ma-nen",rom:"closed / open"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"e",rom:"/ɛ/"},{ch:"bed, pen, lek",rom:"closed syllable"},{ch:"ee / e",rom:"/eː/"},{ch:"been / be-nen",rom:"closed / open"}]},
              {label:"I",color:"#2ECDAB",cells:[{ch:"i",rom:"/ɪ/"},{ch:"pit, wil, kin",rom:"closed syllable"},{ch:"ie",rom:"/i/"},{ch:"bier, brief, niet",rom:"always ie"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"o",rom:"/ɔ/"},{ch:"bos, pot, vol",rom:"closed syllable"},{ch:"oo / o",rom:"/oː/"},{ch:"boom / bo-men",rom:"closed / open"}]},
              {label:"U",color:"var(--purple-accent-text)",cells:[{ch:"u",rom:"/ʏ/"},{ch:"bus, mus, kun",rom:"closed syllable"},{ch:"uu / u",rom:"/y/"},{ch:"vuur / vu-ren",rom:"closed / open"}]},
            ]}},
          {fk:"fk_vowel_digraph",title:"Digraph vowels: ie, oe, eu",audio_id:null,
            desc:"Three two-letter vowels that are inherently long. They never get doubled — they are already complete spellings.",
            grid:{cols:3,headers:["Digraph","Sound","Examples"],rows:[
              {label:"ie",color:"#2ECDAB",cells:[{ch:"ie",rom:"long partner of i"},{ch:"/i/",rom:"like English ee"},{ch:"bier, brief, niet",rom:"beer, letter, not"}]},
              {label:"oe",color:"#4A8FE7",cells:[{ch:"oe",rom:"unique digraph"},{ch:"/u/",rom:"like English oo"},{ch:"boek, groep, moeder",rom:"book, group, mother"}]},
              {label:"eu",color:"var(--purple-accent-text)",cells:[{ch:"eu",rom:"unique digraph"},{ch:"/ø/",rom:"round lips + ay"},{ch:"neus, deur, leuk",rom:"nose, door, fun"}]},
            ]}},
          {fk:"fk_vowel_digraph",title:"Diphthongs: ei/ij, ui, ou/au",audio_id:null,
            desc:"Three gliding vowels — each is ONE syllable. Two of them have competing spellings (taught under Irregularities).",
            grid:{cols:3,headers:["Diphthong","Sound","Spellings"],rows:[
              {label:"/ɛi/",color:"#E85D75",cells:[{ch:"ei / ij",rom:"two spellings exist"},{ch:"ay-glide",rom:"like English 'eye' but shorter"},{ch:"trein, vrij",rom:"train, free"}]},
              {label:"/œy/",color:"#F5A623",cells:[{ch:"ui",rom:"one spelling only"},{ch:"round + glide",rom:"no English match"},{ch:"huis, buiten, fruit",rom:"house, outside, fruit"}]},
              {label:"/ɑu/",color:"#4A8FE7",cells:[{ch:"ou / au",rom:"two spellings exist"},{ch:"ow-glide",rom:"like English 'ow' in how"},{ch:"oud, blauw",rom:"old, blue"}]},
            ]}},
          {fk:"fk_vowel_length",title:"Minimal pairs: short vs long",audio_id:null,
            desc:"Vowel length changes meaning. Every pair below differs only in the vowel.",
            grid:{cols:2,headers:["Short vowel","Long vowel"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"man",rom:"man"},{ch:"maan",rom:"moon"}]},
              {label:"A",color:"#E85D75",cells:[{ch:"tak",rom:"branch"},{ch:"taak",rom:"task"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"hel",rom:"hell"},{ch:"heel",rom:"whole"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"bos",rom:"forest"},{ch:"boos",rom:"angry"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"bot",rom:"bone"},{ch:"boot",rom:"boat"}]},
              {label:"U",color:"var(--purple-accent-text)",cells:[{ch:"mus",rom:"sparrow"},{ch:"muur",rom:"wall"}]},
            ]}},
          {fk:"fk_phonology",title:"Schwa: the unstressed vowel",audio_id:null,
            desc:"Schwa /ə/ is the most common vowel in Dutch. Always unstressed. Default spelling: e.",
            grid:{cols:3,headers:["Spelling","Sound","Example"],rows:[
              {label:"e",color:"#9B9B9B",cells:[{ch:"e",rom:"default spelling"},{ch:"/ə/",rom:"unstressed, weak"},{ch:"de, lopen, aardappel",rom:"the, walk, potato"}]},
            ]}},
      ]},

      // ─────────── 3. CONSONANTS ───────────
          {id:"nl_con_1",title:"🗣️ Regular & Tricky Consonants",icon:"🗣",desc:"Regular consonants, tricky sounds, and voiced/voiceless pairs",items:[
        
        {fk:"fk_letter_sound",title:"Consonants: regular",audio_id:null,
            desc:"These consonants work the same as in English. No surprises.",
            grid:{cols:6,headers:["","","","","",""],rows:[
              {label:"Regular",color:"#2ECDAB",cells:[{ch:"b",rom:"/b/"},{ch:"d",rom:"/d/"},{ch:"f",rom:"/f/"},{ch:"h",rom:"/ɦ/"},{ch:"k",rom:"/k/"},{ch:"l",rom:"/l/"}]},
              {label:"Regular",color:"#2ECDAB",cells:[{ch:"m",rom:"/m/"},{ch:"n",rom:"/n/"},{ch:"p",rom:"/p/"},{ch:"s",rom:"/s/"},{ch:"t",rom:"/t/"},{ch:"",rom:""}]},
            ]}},
        {fk:"fk_letter_sound",title:"Consonants: tricky for English speakers",audio_id:null,
            desc:"These look familiar but sound different in Dutch.",
            grid:{cols:3,headers:["Letter","Dutch sound","English trap"],rows:[
              {label:"g",color:"#F5A623",cells:[{ch:"g",rom:""},{ch:"throaty /x/ or /ɣ/",rom:"fricative"},{ch:"NOT like English g",rom:""}]},
              {label:"w",color:"#F5A623",cells:[{ch:"w",rom:""},{ch:"/ʋ/ — between w and v",rom:""},{ch:"NOT like English w",rom:""}]},
              {label:"j",color:"#F5A623",cells:[{ch:"j",rom:""},{ch:"/j/ — like English y",rom:""},{ch:"NOT like English j",rom:""}]},
              {label:"v",color:"#F5A623",cells:[{ch:"v",rom:""},{ch:"weak /v/, can → [f]",rom:""},{ch:"softer than English v",rom:""}]},
              {label:"r",color:"#F5A623",cells:[{ch:"r",rom:""},{ch:"varies by region",rom:"uvular, alveolar, or approx."},{ch:"all variants are correct",rom:""}]},
            ]}},
        {fk:"fk_phonology",title:"Voiced ↔ voiceless pairs",audio_id:null,
            desc:"Dutch has five voiced/voiceless consonant pairs. At word endings, voiced consonants automatically become voiceless (final devoicing).",
            grid:{cols:3,headers:["Voiced","Voiceless","At word end…"],rows:[
              {label:"",color:"#4A8FE7",cells:[{ch:"b",rom:"bad (bath)"},{ch:"p",rom:"pak (pack)"},{ch:"b → [p]",rom:"heb sounds like hep"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"d",rom:"dak (roof)"},{ch:"t",rom:"tak (branch)"},{ch:"d → [t]",rom:"hond sounds like hont"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"v",rom:"van (from)"},{ch:"f",rom:"fiets (bike)"},{ch:"v → [f]",rom:"leev → leef"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"z",rom:"zon (sun)"},{ch:"s",rom:"sok (sock)"},{ch:"z → [s]",rom:"huiz → huis"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"g",rom:"goed (good)"},{ch:"ch",rom:"lachen (laugh)"},{ch:"g → [ch]",rom:"same sound"}]},
            ]}},
      
      ]},
    {id:"nl_con_2",title:"🗣️ Digraphs & Clusters",icon:"🗣",desc:"Consonant digraphs (ch, ng, sch), clusters, and the Dutch g",items:[
        
        {fk:"fk_digraph_consonant",title:"Consonant digraphs: ch, ng, sch",audio_id:null,
            desc:"Two (or three) letters that make one sound. Digraphs are NEVER doubled in spelling.",
            grid:{cols:4,headers:["Digraph","Sound","Examples","Rule"],rows:[
              {label:"ch",color:"#E85D75",cells:[{ch:"ch",rom:""},{ch:"/x/",rom:"same as g"},{ch:"lachen, nacht, echt",rom:"laugh, night, real"},{ch:"never double",rom:"✗ lachchen"}]},
              {label:"ng",color:"#E85D75",cells:[{ch:"ng",rom:""},{ch:"/ŋ/",rom:"as in English sing"},{ch:"lang, zingen, vinger",rom:"long, sing, finger"},{ch:"never double",rom:"✗ langg"}]},
              {label:"sch",color:"#E85D75",cells:[{ch:"sch",rom:""},{ch:"/sx/",rom:"s + ch together"},{ch:"school, schip, schrijven",rom:"school, ship, write"},{ch:"cluster, not digraph",rom:"s + ch"}]},
            ]}},
        {fk:"fk_clusters",title:"Consonant clusters",audio_id:null,
            desc:"Dutch allows complex clusters. Up to 3 consonants at the start (first must be s), up to 4 at the end.",
            grid:{cols:3,headers:["Position","Patterns","Examples"],rows:[
              {label:"CC start",color:"#2ECDAB",cells:[{ch:"br, kl, sn, pl, tr",rom:"two consonants"},{ch:"stop + liquid, s + stop",rom:""},{ch:"bron, klas, snel, plat, trein",rom:""}]},
              {label:"CCC start",color:"#F5A623",cells:[{ch:"str, spr, schr",rom:"three consonants"},{ch:"always s + C + C",rom:""},{ch:"straat, spreek, schrik",rom:""}]},
              {label:"CC end",color:"#2ECDAB",cells:[{ch:"lk, nd, rts, mp",rom:"two consonants"},{ch:"common patterns",rom:""},{ch:"melk, hand, arts, kamp",rom:""}]},
              {label:"CCC end",color:"#F5A623",cells:[{ch:"rfst, ngst, rkt",rom:"three consonants"},{ch:"less common",rom:""},{ch:"herfst, angst, werkt",rom:""}]},
            ]}},
        {fk:"fk_consonant_special",title:"The Dutch g: regional variants",audio_id:null,
            desc:"The g/ch sound varies across regions. Northern = hard, throaty. Southern (Brabant, Limburg) = soft, gentle. Both are standard Dutch.",
            grid:{cols:3,headers:["Variant","Description","Region"],rows:[
              {label:"Hard",color:"#4A8FE7",cells:[{ch:"[x]",rom:"voiceless"},{ch:"raspy, back of throat",rom:""},{ch:"North, Randstad",rom:""}]},
              {label:"Soft",color:"#2ECDAB",cells:[{ch:"[ɣ]",rom:"voiced"},{ch:"gentle fricative",rom:""},{ch:"Brabant, Limburg",rom:""}]},
            ]}},
      
      ]},

      // ─────────── 4. THE SPELLING ENGINE ───────────
          {id:"nl_spe_1",title:"⚙️ Syllable Logic & Spelling",icon:"⚙",desc:"Open vs closed syllables, the core spelling rule, and consonant doubling",items:[
        
        {fk:"fk_syllable_logic",title:"Open vs closed syllables",audio_id:null,
            desc:"Open syllable = ends in a vowel → long. Closed syllable = ends in a consonant → short. This drives all Dutch vowel spelling.",
            grid:{cols:2,headers:["Open (→ long)","Closed (→ short)"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"la-ken",rom:"/aː/ — sheet"},{ch:"lak",rom:"/ɑ/ — lacquer"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"be-nen",rom:"/eː/ — legs"},{ch:"ben",rom:"/ɛ/ — am"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"bo-men",rom:"/oː/ — trees"},{ch:"bom",rom:"/ɔ/ — bomb"}]},
              {label:"U",color:"var(--purple-accent-text)",cells:[{ch:"vu-ren",rom:"/y/ — fires"},{ch:"vul",rom:"/ʏ/ — fill"}]},
            ]}},
        {fk:"fk_syllable_logic",title:"Spelling logic: single vs double vowels",audio_id:null,
            desc:"Three situations, three rules. The syllable type determines how many letters you write.",
            grid:{cols:3,headers:["Situation","Rule","Example"],rows:[
              {label:"",color:"#2ECDAB",cells:[{ch:"Long + open syllable",rom:""},{ch:"→ single letter",rom:"syllable signals length"},{ch:"ma-nen, bo-men",rom:"moons, trees"}]},
              {label:"",color:"#F5A623",cells:[{ch:"Long + closed syllable",rom:""},{ch:"→ double letter",rom:"aa, ee, oo, uu"},{ch:"maan, boom",rom:"moon, tree"}]},
              {label:"",color:"#E85D75",cells:[{ch:"Short + closed syllable",rom:""},{ch:"→ single letter",rom:"default"},{ch:"man, bom",rom:"man, bomb"}]},
            ]}},
        {fk:"fk_spelling_rules",title:"Consonant doubling: protecting short vowels",audio_id:null,
            desc:"Adding -en/-er/-e to a short-vowel word would open the syllable (making the vowel long — wrong). Fix: double the consonant to keep the syllable closed.",
            grid:{cols:3,headers:["Base","+ ending","Result"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"man",rom:"short /ɑ/"},{ch:"+ en",rom:"need to keep short"},{ch:"man-nen",rom:"✓ not *ma-nen"}]},
              {label:"A",color:"#E85D75",cells:[{ch:"kat",rom:"short /ɑ/"},{ch:"+ en",rom:"need to keep short"},{ch:"kat-ten",rom:"✓ not *ka-ten"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"bos",rom:"short /ɔ/"},{ch:"+ en",rom:"need to keep short"},{ch:"bos-sen",rom:"✓ not *bo-sen"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"bed",rom:"short /ɛ/"},{ch:"+ en",rom:"need to keep short"},{ch:"bed-den",rom:"✓ not *be-den"}]},
              {label:"I",color:"#2ECDAB",cells:[{ch:"wit",rom:"short /ɪ/"},{ch:"+ e",rom:"need to keep short"},{ch:"wit-te",rom:"✓ not *wi-te"}]},
            ]}},
      
      ]},
    {id:"nl_spe_2",title:"⚙️ Advanced Spelling Rules",icon:"⚙",desc:"Drop-one-letter, never-double digraphs, and the decision tree",items:[
        
        {fk:"fk_spelling_rules",title:"Drop one vowel: long vowel + ending",audio_id:null,
            desc:"When a double-vowel word gets an ending, the syllable opens — so one letter is enough to signal the long vowel.",
            grid:{cols:3,headers:["Base","+ ending","Result"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"maan",rom:"long /aː/"},{ch:"+ en",rom:"syllable opens"},{ch:"ma-nen",rom:"✓ not *maa-nen"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"boom",rom:"long /oː/"},{ch:"+ en",rom:"syllable opens"},{ch:"bo-men",rom:"✓ not *boo-men"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"been",rom:"long /eː/"},{ch:"+ en",rom:"syllable opens"},{ch:"be-nen",rom:"✓ not *bee-nen"}]},
              {label:"U",color:"var(--purple-accent-text)",cells:[{ch:"vuur",rom:"long /y/"},{ch:"+ en",rom:"syllable opens"},{ch:"vu-ren",rom:"✓ not *vuu-ren"}]},
            ]}},
        {fk:"fk_spelling_rules",title:"Digraphs: never doubled",audio_id:null,
            desc:"ch and ng are already two letters for one sound. They NEVER get doubled. ie, oe, eu are already two-letter vowels — never write ii, ooe, or euu.",
            grid:{cols:3,headers:["Digraph","Why no doubling","Wrong form"],rows:[
              {label:"ch",color:"#E85D75",cells:[{ch:"ch",rom:"consonant digraph"},{ch:"already 2 letters",rom:""},{ch:"✗ lachchen",rom:""}]},
              {label:"ng",color:"#E85D75",cells:[{ch:"ng",rom:"consonant digraph"},{ch:"already 2 letters",rom:""},{ch:"✗ zingngen",rom:""}]},
              {label:"ie",color:"#2ECDAB",cells:[{ch:"ie",rom:"vowel digraph"},{ch:"already long",rom:""},{ch:"✗ ii",rom:""}]},
              {label:"oe",color:"#4A8FE7",cells:[{ch:"oe",rom:"vowel digraph"},{ch:"already long",rom:""},{ch:"✗ ooe",rom:""}]},
              {label:"eu",color:"var(--purple-accent-text)",cells:[{ch:"eu",rom:"vowel digraph"},{ch:"already long",rom:""},{ch:"✗ euu",rom:""}]},
            ]}},
        {fk:"fk_spelling_algorithm",title:"The decision tree: vowel spelling",audio_id:null,
            desc:"A step-by-step lookup for any Dutch vowel spelling decision.",
            grid:{cols:2,headers:["Step / Situation","Action"],rows:[
              {label:"1",color:"#2ECDAB",cells:[{ch:"Split into syllables",rom:"first step always"},{ch:"find the boundary",rom:""}]},
              {label:"2",color:"#2ECDAB",cells:[{ch:"Open or closed?",rom:"does syllable end in vowel or consonant?"},{ch:"determines long/short",rom:""}]},
              {label:"3",color:"#F5A623",cells:[{ch:"Open + long vowel",rom:""},{ch:"write single letter: a, e, o, u",rom:"ma-nen, bo-men"}]},
              {label:"4",color:"#F5A623",cells:[{ch:"Closed + long vowel",rom:""},{ch:"write double letter: aa, ee, oo, uu",rom:"maan, boom"}]},
              {label:"5",color:"#E85D75",cells:[{ch:"Closed + short vowel",rom:""},{ch:"write single letter: a, e, i, o, u",rom:"man, bos"}]},
              {label:"6",color:"#4A8FE7",cells:[{ch:"Adding ending → short V?",rom:"syllable would open"},{ch:"double the consonant first",rom:"man → mannen"}]},
              {label:"7",color:"#4A8FE7",cells:[{ch:"Adding ending → long V?",rom:"syllable opens"},{ch:"drop one vowel letter",rom:"maan → manen"}]},
            ]}},
      
      ]},

      // ─────────── 5. STRESS & SCHWA ───────────
      {id:"nl_stress",title:"Stress & Schwa",icon:"🥁",desc:"Word stress rules and the unstressed vowel",
        items:[
          {fk:"fk_prosody",title:"Stress rules",audio_id:null,
            desc:"Where stress falls in Dutch words.",
            grid:{cols:3,headers:["Rule","Pattern","Examples"],rows:[
              {label:"Default",color:"#2ECDAB",cells:[{ch:"First syllable",rom:"most native words"},{ch:"ÉR-ste lettergreep",rom:""},{ch:"Éten, WÁter, HÚIzen",rom:"eat, water, houses"}]},
              {label:"Prefix",color:"#F5A623",cells:[{ch:"After be- ge- ver- ont-",rom:"prefix never stressed"},{ch:"prefix = unstressed",rom:""},{ch:"beGRÍJpen, geLÓven",rom:"understand, believe"}]},
              {label:"Loanword",color:"#4A8FE7",cells:[{ch:"Varies",rom:"keeps original stress"},{ch:"often final syllable",rom:""},{ch:"banaAN, telefÓON",rom:"banana, telephone"}]},
            ]}},
          {fk:"fk_prosody",title:"Schwa: always unstressed, spelled e",audio_id:null,
            desc:"Schwa /ə/ never carries stress. Default spelling is e. In casual speech, other unstressed vowels may reduce toward schwa — this is pronunciation only, not a spelling change.",
            examples:["de (the) — schwa","lopen → lo-pən","Formal = full vowels, informal = more reduction","Spelling always stays the same"]},
      ]},

      // ─────────── 6. IRREGULARITIES ───────────
          {id:"nl_irr_1",title:"🔀 IJ/EI & OU/AU",icon:"🔀",desc:"The competing diphthong pairs: ij vs ei and ou vs au, plus IJ as the 27th letter",items:[
        
        {fk:"fk_irregular",title:"/ɛi/ — two spellings: ij and ei",audio_id:null,
            desc:"Same sound, two spellings. Distribution is historical — no reliable rule. Learn each word individually.",
            grid:{cols:2,headers:["Spelled ij","Spelled ei"],rows:[
              {label:"",color:"#E85D75",cells:[{ch:"bij",rom:"at / near"},{ch:"klein",rom:"small"}]},
              {label:"",color:"#E85D75",cells:[{ch:"vrij",rom:"free"},{ch:"trein",rom:"train"}]},
              {label:"",color:"#E85D75",cells:[{ch:"wijn",rom:"wine"},{ch:"ei",rom:"egg"}]},
              {label:"",color:"#E85D75",cells:[{ch:"blij",rom:"happy"},{ch:"reis",rom:"trip"}]},
              {label:"⚠️",color:"#F5A623",cells:[{ch:"lijden",rom:"to suffer"},{ch:"leiden",rom:"to lead"}]},
            ]}},
        {fk:"fk_irregular",title:"IJ — the 27th letter",audio_id:null,
            desc:"IJ is treated as one letter. Both uppercase when capitalizing: IJsselmeer, not Ijsselmeer. In handwriting often one glyph: ĳ.",
            examples:["IJsselmeer (lake)","IJsland (Iceland)","vrij → VRIJ"]},
        {fk:"fk_irregular",title:"/ɑu/ — two spellings: ou and au",audio_id:null,
            desc:"Same sound, two spellings. ou is more common; au often in loanwords.",
            grid:{cols:2,headers:["Spelled ou","Spelled au"],rows:[
              {label:"",color:"#4A8FE7",cells:[{ch:"oud",rom:"old"},{ch:"blauw",rom:"blue"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"koud",rom:"cold"},{ch:"auto",rom:"car"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"bouw",rom:"construction"},{ch:"pauze",rom:"pause"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"goud",rom:"gold"},{ch:"saus",rom:"sauce"}]},
            ]}},
      
      ]},
    {id:"nl_irr_2",title:"🔀 Devoicing & Kofschip",icon:"🔀",desc:"Final devoicing, v/z alternation, and the 't kofschip rule",items:[
        
        {fk:"fk_irregular",title:"Final devoicing: sounds-like vs spelling",audio_id:null,
            desc:"At word end, voiced consonants become voiceless. Spelling keeps the underlying form. Find a related word to check.",
            grid:{cols:3,headers:["You hear","Correct spelling","Proof (related form)"],rows:[
              {label:"d",color:"#E85D75",cells:[{ch:"hont",rom:"voiceless at end"},{ch:"hond",rom:"dog"},{ch:"hon-den",rom:"→ d revealed"}]},
              {label:"d",color:"#E85D75",cells:[{ch:"bet",rom:"voiceless at end"},{ch:"bed",rom:"bed"},{ch:"bed-den",rom:"→ d revealed"}]},
              {label:"d",color:"#E85D75",cells:[{ch:"gelt",rom:"voiceless at end"},{ch:"geld",rom:"money"},{ch:"gel-den",rom:"→ d revealed"}]},
              {label:"v",color:"#F5A623",cells:[{ch:"briif",rom:"voiceless at end"},{ch:"brief",rom:"letter"},{ch:"brie-ven",rom:"→ v revealed"}]},
              {label:"z",color:"#4A8FE7",cells:[{ch:"huis",rom:"voiceless at end"},{ch:"huis",rom:"house"},{ch:"hui-zen",rom:"→ z revealed"}]},
            ]}},
        {fk:"fk_irregular",title:"V/Z alternation at word boundaries",audio_id:null,
            desc:"v and z at word start become f and s at word end. Adding an ending restores the original.",
            grid:{cols:2,headers:["Singular (end = voiceless)","Plural (original returns)"],rows:[
              {label:"v→f",color:"#F5A623",cells:[{ch:"brief",rom:"letter (f at end)"},{ch:"brieven",rom:"letters (v returns)"}]},
              {label:"z→s",color:"#4A8FE7",cells:[{ch:"huis",rom:"house (s at end)"},{ch:"huizen",rom:"houses (z returns)"}]},
              {label:"v→f",color:"#F5A623",cells:[{ch:"lief",rom:"sweet (f at end)"},{ch:"lieve",rom:"sweet (v returns)"}]},
              {label:"v→f",color:"#F5A623",cells:[{ch:"half",rom:"half (f at end)"},{ch:"halve",rom:"half (v returns)"}]},
            ]}},
        {fk:"fk_spelling_algorithm",title:"'t Kofschip: past tense -te vs -de",audio_id:null,
            desc:"Weak verbs: stem ends in t, k, f, s, ch, p → past = -te. Otherwise → -de. Final devoicing can mask the real consonant — always check the stem spelling.",
            grid:{cols:3,headers:["Stem ends in…","Past tense","Example"],rows:[
              {label:"'t kofschip",color:"#2ECDAB",cells:[{ch:"t, k, f, s, ch, p",rom:"voiceless"},{ch:"-te / -tten",rom:""},{ch:"werkte, fietste, maakte",rom:"worked, cycled, made"}]},
              {label:"Other",color:"#F5A623",cells:[{ch:"all other consonants",rom:"voiced or other"},{ch:"-de / -dden",rom:""},{ch:"leefde, reisde, leende",rom:"lived, traveled, borrowed"}]},
            ]}},
      
      ]},
    ]
  },
  de:{
    name:"German Foundations",icon:"🇩🇪",
    sections:[
      // ══════════════════════════════════════════════════════════════
      // GERMAN FOUNDATIONS KNOWLEDGE — Reference Library
      // Manifesto Principle 12: grid-first, no meta, no tips,
      // organized by lookup topic, consistent color = meaning.
      // Color key: consonants=#2ECDAB, tricky sounds=#F5A623,
      //            vowels=#E85D75, special=#4A8FE7, grammar=#7B5EE8
      // ══════════════════════════════════════════════════════════════

      // ─────────── 1. THE ALPHABET & SPECIAL CHARACTERS ───────────
      {id:"de_alphabet",title:"The Alphabet & Special Characters",icon:"🔤",desc:"26 letters same as English + Ä, Ö, Ü, ß",
        items:[
          {fk:"fk_alphabet_overview",title:"The German alphabet",audio_id:null,
            desc:"All 26 letters plus 4 special characters. The core alphabet is identical to English. The sounds are what differ.",
            grid:{cols:7,headers:["","","","","","",""],rows:[
              {label:"Vowels",color:"#E85D75",cells:[{ch:"A",rom:"ah"},{ch:"E",rom:"ay"},{ch:"I",rom:"ee"},{ch:"O",rom:"oh"},{ch:"U",rom:"oo"},{ch:"",rom:""},{ch:"",rom:""}]},
              {label:"Special",color:"#4A8FE7",cells:[{ch:"Ä",rom:"eh (like bed)"},{ch:"Ö",rom:"ur (rounded)"},{ch:"Ü",rom:"ee (rounded)"},{ch:"ß",rom:"sharp ss"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
              {label:"Tricky",color:"#F5A623",cells:[{ch:"W",rom:"sounds like V"},{ch:"V",rom:"sounds like F"},{ch:"J",rom:"sounds like Y"},{ch:"Z",rom:"sounds like TS"},{ch:"S",rom:"often Z-sound"},{ch:"R",rom:"uvular/rolled"},{ch:"",rom:""}]},
              {label:"Soft",color:"#2ECDAB",cells:[{ch:"B",rom:"b"},{ch:"D",rom:"d"},{ch:"F",rom:"f"},{ch:"G",rom:"g (hard)"},{ch:"H",rom:"h"},{ch:"K",rom:"k"},{ch:"L",rom:"l"}]},
              {label:"More",color:"#2ECDAB",cells:[{ch:"M",rom:"m"},{ch:"N",rom:"n"},{ch:"P",rom:"p"},{ch:"T",rom:"t"},{ch:"C",rom:"k or ts"},{ch:"Q",rom:"kv-sound"},{ch:"X",rom:"ks"}]},
            ]}},
          {fk:"fk_alphabet_overview",title:"The four English speaker traps",audio_id:null,
            desc:"Four letters look familiar but sound completely different. These trip up every English speaker on day one.",
            grid:{cols:3,headers:["Letter","German sound","English trap to avoid"],rows:[
              {label:"W",color:"#F5A623",cells:[{ch:"W",rom:"w"},{ch:"V-sound: VAH-ser",rom:"Wasser = water"},{ch:"NOT like English W",rom:""}]},
              {label:"V",color:"#F5A623",cells:[{ch:"V",rom:"v"},{ch:"F-sound: FAH-ter",rom:"Vater = father"},{ch:"NOT like English V",rom:""}]},
              {label:"J",color:"#F5A623",cells:[{ch:"J",rom:"j"},{ch:"Y-sound: yah",rom:"ja = yes"},{ch:"NOT like English J",rom:""}]},
              {label:"Z",color:"#F5A623",cells:[{ch:"Z",rom:"z"},{ch:"TS-sound: TSAYT",rom:"Zeit = time"},{ch:"NOT like English Z",rom:""}]},
            ]}},
          {fk:"fk_alphabet_overview",title:"German letter names",audio_id:null,
            desc:"How to say each letter when spelling a word aloud. Useful at the post office, doctor, or hotel.",
            grid:{cols:4,headers:["Letter","Name","Letter","Name"],rows:[
              {label:"",color:"#E85D75",cells:[{ch:"A",rom:"ah"},{ch:"B",rom:"bay"},{ch:"C",rom:"tsay"},{ch:"D",rom:"day"}]},
              {label:"",color:"#E85D75",cells:[{ch:"E",rom:"ay"},{ch:"F",rom:"eff"},{ch:"G",rom:"gay"},{ch:"H",rom:"hah"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"I",rom:"ee"},{ch:"J",rom:"yot"},{ch:"K",rom:"kah"},{ch:"L",rom:"ell"}]},
              {label:"",color:"#4A8FE7",cells:[{ch:"M",rom:"emm"},{ch:"N",rom:"enn"},{ch:"O",rom:"oh"},{ch:"P",rom:"pay"}]},
              {label:"",color:"#2ECDAB",cells:[{ch:"Q",rom:"koo"},{ch:"R",rom:"err"},{ch:"S",rom:"ess"},{ch:"T",rom:"tay"}]},
              {label:"",color:"#2ECDAB",cells:[{ch:"U",rom:"oo"},{ch:"V",rom:"fow"},{ch:"W",rom:"vay"},{ch:"X",rom:"iks"}]},
              {label:"Special",color:"#7B5EE8",cells:[{ch:"Y",rom:"oopsilon"},{ch:"Z",rom:"tset"},{ch:"Ä",rom:"ah-umlaut"},{ch:"ß",rom:"ess-tset"}]},
            ]}},
        ]},

      // ─────────── 2. VOWELS ───────────
      {id:"de_vowels",title:"Vowels",icon:"🔊",desc:"Short/long pairs, umlauts, diphthongs",
        items:[
          {fk:"fk_vowel_grid",title:"Short vs long vowel pairs",audio_id:null,
            desc:"Every German vowel has a short and a long version. Short vowels appear before double consonants or clusters. Long vowels appear before a single consonant or with a following silent H.",
            grid:{cols:4,headers:["Short","Example","Long","Example"],rows:[
              {label:"A",color:"#E85D75",cells:[{ch:"a (short)",rom:"like ah but clipped"},{ch:"Wasser, Mann, kalt",rom:"water, man, cold"},{ch:"a (long)",rom:"held ah sound"},{ch:"Name, Staat, Bahn",rom:"name, state, train"}]},
              {label:"E",color:"#F5A623",cells:[{ch:"e (short)",rom:"like e in bed"},{ch:"Bett, essen, Geld",rom:"bed, eat, money"},{ch:"e (long)",rom:"like ay in say"},{ch:"Meer, lesen, Weg",rom:"sea, read, path"}]},
              {label:"I",color:"#2ECDAB",cells:[{ch:"i (short)",rom:"like i in bit"},{ch:"mit, Bitte, Kind",rom:"with, please, child"},{ch:"ie (long)",rom:"like ee in see"},{ch:"Bier, Liebe, Brief",rom:"beer, love, letter"}]},
              {label:"O",color:"#4A8FE7",cells:[{ch:"o (short)",rom:"like o in off"},{ch:"Post, Gott, kommen",rom:"mail, God, come"},{ch:"o (long)",rom:"pure oh sound"},{ch:"Sohn, Brot, groß",rom:"son, bread, big"}]},
              {label:"U",color:"var(--purple-accent-text)",cells:[{ch:"u (short)",rom:"like u in put"},{ch:"Mutter, und, Hund",rom:"mother, and, dog"},{ch:"u (long)",rom:"pure oo sound"},{ch:"Uhr, gut, Stuhl",rom:"clock, good, chair"}]},
            ]}},
          {fk:"fk_diacritics",title:"The three umlauts: Ä, Ö, Ü",audio_id:null,
            desc:"Umlauts are separate vowels, not decorated letters. Each has a short and long version. The two dots signal a different vowel sound.",
            grid:{cols:4,headers:["Umlaut","Mouth position","Short example","Long example"],rows:[
              {label:"Ä",color:"#E85D75",cells:[{ch:"Ä / ä",rom:"like e in bed"},{ch:"open jaw, spread lips",rom:""},{ch:"Männer",rom:"men (short)"},{ch:"Mädchen, spät",rom:"girl, late (long)"}]},
              {label:"Ö",color:"#F5A623",cells:[{ch:"Ö / ö",rom:"no English match"},{ch:"say ay, round lips",rom:""},{ch:"öffnen",rom:"to open (short)"},{ch:"schön, hören",rom:"beautiful, hear (long)"}]},
              {label:"Ü",color:"var(--purple-accent-text)",cells:[{ch:"Ü / ü",rom:"no English match"},{ch:"say ee, round lips",rom:""},{ch:"müssen",rom:"must (short)"},{ch:"über, grün",rom:"over, green (long)"}]},
            ]}},
          {fk:"fk_vowel_length",title:"Three signals that always mean long vowel",audio_id:null,
            desc:"Three spelling patterns reliably signal a long vowel. No guessing needed once you recognize them.",
            grid:{cols:3,headers:["Signal","Rule","Examples"],rows:[
              {label:"Double vowel",color:"#2ECDAB",cells:[{ch:"aa, ee, oo",rom:"always long"},{ch:"doubled letter lengthens",rom:""},{ch:"Staat, Meer, Boot",rom:"state, sea, boat"}]},
              {label:"Silent H",color:"#2ECDAB",cells:[{ch:"vowel + H",rom:"H is silent, vowel is long"},{ch:"H lengthens, not pronounced",rom:""},{ch:"Bahn, Uhr, Sohn",rom:"train, clock, son"}]},
              {label:"IE",color:"#2ECDAB",cells:[{ch:"ie",rom:"always long ee-sound"},{ch:"standard long-I spelling",rom:""},{ch:"Liebe, Brief, vier",rom:"love, letter, four"}]},
            ]}},
          {fk:"fk_vowel_digraph",title:"Diphthongs: ei, au, eu/äu",audio_id:null,
            desc:"German has three diphthongs. Each glides between two vowel positions in a single syllable.",
            grid:{cols:3,headers:["Diphthong","Sound","Examples"],rows:[
              {label:"ei",color:"#E85D75",cells:[{ch:"ei / ai",rom:"like English eye"},{ch:"AY-glide toward EE",rom:""},{ch:"mein, Eis, Kaiser, Mai",rom:"my, ice, emperor, May"}]},
              {label:"au",color:"#F5A623",cells:[{ch:"au",rom:"like ow in now"},{ch:"AH-glide toward OO",rom:""},{ch:"Haus, auch, kaufen",rom:"house, also, buy"}]},
              {label:"eu / äu",color:"#4A8FE7",cells:[{ch:"eu / äu",rom:"like oy in boy"},{ch:"OY-glide, same sound",rom:""},{ch:"neu, heute, Häuser",rom:"new, today, houses"}]},
            ]}},
          {fk:"fk_vowel_length",title:"ß vs ss: the short/long vowel rule",audio_id:null,
            desc:"Both ß and ss spell an S-sound. The choice depends entirely on the vowel length before the sound.",
            grid:{cols:3,headers:["Vowel before S-sound","Spelling","Examples"],rows:[
              {label:"Long vowel",color:"#E85D75",cells:[{ch:"long vowel or diphthong",rom:""},{ch:"use ß",rom:""},{ch:"groß, Straße, heißen",rom:"big, street, be called"}]},
              {label:"Short vowel",color:"#F5A623",cells:[{ch:"short vowel",rom:""},{ch:"use ss",rom:""},{ch:"essen, Wasser, müssen",rom:"eat, water, must"}]},
              {label:"Switzerland",color:"#4A8FE7",cells:[{ch:"Swiss German and Liechtenstein",rom:""},{ch:"always ss, never ß",rom:""},{ch:"strasse, gross, heissen",rom:"Switzerland spellings"}]},
            ]}},
        ]},

      // ─────────── 3. CONSONANTS ───────────
      {id:"de_con_1",title:"Regular and Tricky Consonants",icon:"🗣",desc:"Regular consonants, the CH sounds, and final devoicing",
        items:[
          {fk:"fk_letter_sound",title:"Consonants: regular (same as English)",audio_id:null,
            desc:"These consonants make the same sound as in English. No surprises.",
            grid:{cols:6,headers:["","","","","",""],rows:[
              {label:"Regular",color:"#2ECDAB",cells:[{ch:"b",rom:"b (bag)"},{ch:"d",rom:"d (dog)"},{ch:"f",rom:"f (fan)"},{ch:"h",rom:"h (hat)"},{ch:"k",rom:"k (kit)"},{ch:"l",rom:"l (land)"}]},
              {label:"Regular",color:"#2ECDAB",cells:[{ch:"m",rom:"m (map)"},{ch:"n",rom:"n (no)"},{ch:"p",rom:"p (pan)"},{ch:"t",rom:"t (top)"},{ch:"ng",rom:"ng (sing)"},{ch:"",rom:""}]},
            ]}},
          {fk:"fk_letter_sound",title:"Consonants: tricky for English speakers",audio_id:null,
            desc:"These look familiar but sound different in German.",
            grid:{cols:3,headers:["Letter","German sound","Memory trick"],rows:[
              {label:"W",color:"#F5A623",cells:[{ch:"w",rom:""},{ch:"V-sound: VAH-ser",rom:"Wasser = water"},{ch:"W = V in German",rom:""}]},
              {label:"V",color:"#F5A623",cells:[{ch:"v",rom:""},{ch:"F-sound: FAH-ter",rom:"Vater = father"},{ch:"V = F in German",rom:""}]},
              {label:"J",color:"#F5A623",cells:[{ch:"j",rom:""},{ch:"Y-sound: yah",rom:"ja = yes"},{ch:"J = Y in German",rom:""}]},
              {label:"Z",color:"#F5A623",cells:[{ch:"z",rom:""},{ch:"TS-sound: TSAYT",rom:"Zeit = time"},{ch:"Z = TS in German",rom:""}]},
              {label:"S (before vowel)",color:"#F5A623",cells:[{ch:"s",rom:"at start of syllable"},{ch:"Z-sound: ZON-uh",rom:"Sonne = sun"},{ch:"Only at syllable start",rom:""}]},
              {label:"R",color:"#F5A623",cells:[{ch:"r",rom:""},{ch:"Uvular or rolled",rom:"varies by region"},{ch:"Back of throat, not English R",rom:""}]},
            ]}},
          {fk:"fk_consonant_special",title:"The two CH sounds: ich-Laut and ach-Laut",audio_id:null,
            desc:"CH is the most important sound in German. There are two versions. The vowel before CH determines which to use.",
            grid:{cols:4,headers:["Name","After which vowels","Sound description","Examples"],rows:[
              {label:"ich-Laut",color:"#E85D75",cells:[{ch:"ich-Laut",rom:"soft CH"},{ch:"after e, i, ä, ö, ü, consonants",rom:""},{ch:"Hissing from front of mouth, like H in huge",rom:""},{ch:"ich, nicht, Milch, möchte",rom:"I, not, milk, would like"}]},
              {label:"ach-Laut",color:"#F5A623",cells:[{ch:"ach-Laut",rom:"hard CH"},{ch:"after a, o, u, au",rom:""},{ch:"Raspy from back of throat, like Scottish loch",rom:""},{ch:"ach, Buch, auch, Nacht",rom:"oh, book, also, night"}]},
            ]}},
          {fk:"fk_phonology",title:"Final devoicing: voiced to voiceless at word end",audio_id:null,
            desc:"At word ends, voiced consonants (b, d, g) become their voiceless partners (p, t, k). Spelling stays the same. Find a related form to confirm the real spelling.",
            grid:{cols:3,headers:["You hear","Correct spelling","Proof form"],rows:[
              {label:"b to p",color:"#4A8FE7",cells:[{ch:"DEEEP",rom:"voiceless at end"},{ch:"Dieb",rom:"thief"},{ch:"Diebe: b revealed",rom:"thieves"}]},
              {label:"d to t",color:"#4A8FE7",cells:[{ch:"HOONT",rom:"voiceless at end"},{ch:"Hund",rom:"dog"},{ch:"Hunde: d revealed",rom:"dogs"}]},
              {label:"g to k",color:"#4A8FE7",cells:[{ch:"TAHK",rom:"voiceless at end"},{ch:"Tag",rom:"day"},{ch:"Tage: g revealed",rom:"days"}]},
              {label:"g to k",color:"#4A8FE7",cells:[{ch:"VEHK",rom:"voiceless at end"},{ch:"Weg",rom:"path"},{ch:"Wege: g revealed",rom:"paths"}]},
            ]}},
        ]},

      {id:"de_con_2",title:"Digraphs, Clusters and SP/ST",icon:"🗣",desc:"SCH, SP/ST, CK, consonant clusters",
        items:[
          {fk:"fk_digraph_consonant",title:"Consonant digraphs: SCH, NG, CK",audio_id:null,
            desc:"Two or three letters that make one sound. Never split when dividing syllables.",
            grid:{cols:4,headers:["Digraph","Sound","Examples","Note"],rows:[
              {label:"sch",color:"#E85D75",cells:[{ch:"sch",rom:""},{ch:"sh-sound",rom:"like English sh"},{ch:"Schule, schön, Tisch",rom:"school, beautiful, table"},{ch:"never double",rom:""}]},
              {label:"ng",color:"#E85D75",cells:[{ch:"ng",rom:""},{ch:"ng-sound",rom:"like English sing"},{ch:"singen, lang, Ring",rom:"sing, long, ring"},{ch:"never double",rom:""}]},
              {label:"ck",color:"#E85D75",cells:[{ch:"ck",rom:""},{ch:"k-sound after short vowel",rom:"signals short vowel"},{ch:"Zucker, Glück, stecken",rom:"sugar, luck, stick"},{ch:"same role as double consonant",rom:""}]},
              {label:"ph",color:"#4A8FE7",cells:[{ch:"ph",rom:""},{ch:"f-sound",rom:"loanwords only"},{ch:"Philosophie, Physik",rom:"philosophy, physics"},{ch:"loanwords only",rom:""}]},
            ]}},
          {fk:"fk_clusters",title:"SP and ST at the start of syllables",audio_id:null,
            desc:"SP and ST at the start of a syllable are pronounced SHP and SHT. This rule applies even inside compound words at each syllable boundary.",
            grid:{cols:3,headers:["Spelling","Pronunciation","Examples"],rows:[
              {label:"sp-",color:"#F5A623",cells:[{ch:"sp (start of syllable)",rom:""},{ch:"shp-sound, NOT sp",rom:""},{ch:"spielen, Sport, sprechen",rom:"play, sport, speak"}]},
              {label:"st-",color:"#F5A623",cells:[{ch:"st (start of syllable)",rom:""},{ch:"sht-sound, NOT st",rom:""},{ch:"stehen, Straße, verstehen",rom:"stand, street, understand"}]},
              {label:"Compound",color:"#2ECDAB",cells:[{ch:"sp/st inside compounds",rom:""},{ch:"rule applies at each boundary",rom:""},{ch:"Hauptstadt: HOWPT-shtat",rom:"capital city"}]},
            ]}},
          {fk:"fk_clusters",title:"Common consonant clusters",audio_id:null,
            desc:"German allows complex clusters at word boundaries. These stable combinations appear repeatedly in everyday vocabulary.",
            grid:{cols:3,headers:["Cluster","Position","Examples"],rows:[
              {label:"bl, br, fl, fr",color:"#2ECDAB",cells:[{ch:"bl, br, fl, fr",rom:"stop + liquid"},{ch:"word start",rom:""},{ch:"blau, bringen, fliegen, fragen",rom:"blue, bring, fly, ask"}]},
              {label:"kl, kn, gl, gr",color:"#2ECDAB",cells:[{ch:"kl, kn, gl, gr",rom:"stop + liquid or nasal"},{ch:"word start",rom:""},{ch:"klein, Knie, Glas, grün",rom:"small, knee, glass, green"}]},
              {label:"str, spr, schr",color:"#F5A623",cells:[{ch:"str, spr, schr",rom:"three-consonant onset"},{ch:"word start",rom:""},{ch:"Straße, sprechen, schreiben",rom:"street, speak, write"}]},
              {label:"-cht, -nft",color:"#4A8FE7",cells:[{ch:"-cht, -nft, -rts",rom:"coda clusters"},{ch:"word end",rom:""},{ch:"Nacht, Zunft, Wirtshaus",rom:"night, guild, inn"}]},
            ]}},
        ]},

      // ─────────── 4. SPELLING & WORD FORMATION ───────────
      {id:"de_spelling",title:"Spelling and Word Formation",icon:"⚙",desc:"Noun capitalization, compound nouns, umlaut alternations",
        items:[
          {fk:"fk_spelling_rules",title:"ALL nouns are capitalized in German",audio_id:null,
            desc:"Every noun, not just proper names, every common noun, is written with a capital first letter. This is one of German's most distinctive rules.",
            grid:{cols:2,headers:["German (all nouns capitalized)","English (only proper nouns)"],rows:[
              {label:"",color:"#7B5EE8",cells:[{ch:"Das Haus ist groß.",rom:""},{ch:"The house is big.",rom:""}]},
              {label:"",color:"#7B5EE8",cells:[{ch:"Ein Hund läuft schnell.",rom:""},{ch:"A dog runs fast.",rom:""}]},
              {label:"",color:"#7B5EE8",cells:[{ch:"Ich kaufe Brot und Milch.",rom:""},{ch:"I buy bread and milk.",rom:""}]},
              {label:"Rule",color:"#F5A623",cells:[{ch:"Brot, Milch, Hund, Haus",rom:"all capitalized"},{ch:"bread, milk, dog, house",rom:"all lowercase in English"}]},
            ]}},
          {fk:"fk_spelling_rules",title:"Compound nouns: German stacks words",audio_id:null,
            desc:"German builds new words by joining existing words without spaces. The last element determines the gender and meaning category. Earlier elements modify it.",
            grid:{cols:3,headers:["Compound","Parts","Meaning"],rows:[
              {label:"der",color:"#4A8FE7",cells:[{ch:"Bahnhof",rom:"der Bahnhof"},{ch:"Bahn (train) + Hof (yard)",rom:""},{ch:"train station",rom:""}]},
              {label:"die",color:"#E85D75",cells:[{ch:"Handtasche",rom:"die Handtasche"},{ch:"Hand (hand) + Tasche (bag)",rom:""},{ch:"handbag",rom:""}]},
              {label:"das",color:"#F5A623",cells:[{ch:"Schlafzimmer",rom:"das Schlafzimmer"},{ch:"Schlafen (sleep) + Zimmer (room)",rom:""},{ch:"bedroom",rom:""}]},
              {label:"Rule",color:"#7B5EE8",cells:[{ch:"Last element = head word",rom:""},{ch:"Its gender = the compound's gender",rom:""},{ch:"das Zimmer: always das",rom:""}]},
            ]}},
          {fk:"fk_spelling_rules",title:"Umlaut alternations in plurals and verb forms",audio_id:null,
            desc:"Many German words use umlauts in plural forms or verb conjugations. The stem vowel changes systematically. This is a pattern, not a random exception.",
            grid:{cols:3,headers:["Base form","Changed form","Pattern"],rows:[
              {label:"a to ä",color:"#E85D75",cells:[{ch:"Vater",rom:"father"},{ch:"Väter",rom:"fathers"},{ch:"a to ä in plural",rom:""}]},
              {label:"u to ü",color:"var(--purple-accent-text)",cells:[{ch:"Mutter",rom:"mother"},{ch:"Mütter",rom:"mothers"},{ch:"u to ü in plural",rom:""}]},
              {label:"au to äu",color:"#F5A623",cells:[{ch:"Haus",rom:"house"},{ch:"Häuser",rom:"houses"},{ch:"au to äu in plural",rom:""}]},
              {label:"a to ä (verb)",color:"#E85D75",cells:[{ch:"fahren",rom:"to drive"},{ch:"du fährst / er fährt",rom:"you/he drives"},{ch:"a to ä in conjugation",rom:""}]},
              {label:"a to ä (verb)",color:"#E85D75",cells:[{ch:"schlafen",rom:"to sleep"},{ch:"er schläft",rom:"he sleeps"},{ch:"a to ä in strong verb",rom:""}]},
            ]}},
          {fk:"fk_spelling_algorithm",title:"Spelling decision: ß or ss?",audio_id:null,
            desc:"A step-by-step check for any German ss/ß spelling decision.",
            grid:{cols:2,headers:["Step / Situation","Action"],rows:[
              {label:"1",color:"#2ECDAB",cells:[{ch:"Identify the vowel before the S-sound",rom:""},{ch:"Is it long or short?",rom:""}]},
              {label:"2",color:"#E85D75",cells:[{ch:"Long vowel or diphthong before the S-sound",rom:""},{ch:"Write ß: groß, Straße, heißen",rom:""}]},
              {label:"3",color:"#F5A623",cells:[{ch:"Short vowel before the S-sound",rom:""},{ch:"Write ss: Wasser, essen, müssen",rom:""}]},
              {label:"4",color:"#4A8FE7",cells:[{ch:"Writing in Switzerland or Liechtenstein",rom:""},{ch:"Always write ss, never ß",rom:""}]},
              {label:"5",color:"#7B5EE8",cells:[{ch:"Not sure of vowel length?",rom:""},{ch:"Find a related form to check",rom:""}]},
            ]}},
        ]},

      // ─────────── 5. STRESS & PRONUNCIATION ───────────
      {id:"de_stress",title:"Stress and Pronunciation",icon:"🥁",desc:"Word stress rules, prefix stress, and vowel reduction",
        items:[
          {fk:"fk_prosody",title:"Stress rules: where emphasis falls",audio_id:null,
            desc:"German word stress is mostly regular. Most native German words stress the first syllable. Prefixes and loanwords are the main exceptions.",
            grid:{cols:3,headers:["Rule","Pattern","Examples"],rows:[
              {label:"Default",color:"#2ECDAB",cells:[{ch:"First syllable",rom:"most native words"},{ch:"ÉR-ste Silbe",rom:""},{ch:"ÉSsen, WÁsser, HÁus",rom:"eat, water, house"}]},
              {label:"Inseparable prefix",color:"#F5A623",cells:[{ch:"be-, ge-, er-, ver-, zer-, ent-",rom:"never stressed"},{ch:"stress falls on stem",rom:""},{ch:"beGINnen, verSTEhen, erZÄHlen",rom:"begin, understand, tell"}]},
              {label:"Separable prefix",color:"#4A8FE7",cells:[{ch:"an-, auf-, aus-, ein-, mit-, ab-",rom:"always stressed"},{ch:"prefix carries the stress",rom:""},{ch:"ÁNfangen, ÁUFstehen, ÁBfahren",rom:"start, get up, depart"}]},
              {label:"Loanword",color:"#7B5EE8",cells:[{ch:"Varies by origin",rom:"keeps original stress"},{ch:"often last syllable",rom:""},{ch:"banaNA, TelefON, KaffEE",rom:"banana, telephone, coffee"}]},
            ]}},
          {fk:"fk_prosody",title:"Unstressed endings reduce toward a weak sound",audio_id:null,
            desc:"Stressed syllables are long and clear. Unstressed syllables, especially common endings, reduce to a short weak sound similar to the English schwa. Spelling never changes.",
            grid:{cols:3,headers:["Ending","Stress","Examples"],rows:[
              {label:"-e",color:"#9B9B9B",cells:[{ch:"-e",rom:"unstressed"},{ch:"weak eh-sound",rom:""},{ch:"Hose, lese, Liebe",rom:"trousers, I read, love"}]},
              {label:"-en",color:"#9B9B9B",cells:[{ch:"-en",rom:"unstressed"},{ch:"weak n-syllable",rom:""},{ch:"lesen, kommen, Garten",rom:"read, come, garden"}]},
              {label:"-er",color:"#9B9B9B",cells:[{ch:"-er",rom:"unstressed"},{ch:"weak uh-sound",rom:""},{ch:"Mutter, Wasser, Vater",rom:"mother, water, father"}]},
              {label:"-el",color:"#9B9B9B",cells:[{ch:"-el",rom:"unstressed"},{ch:"weak l-syllable",rom:""},{ch:"Vogel, Schlüssel, Mantel",rom:"bird, key, coat"}]},
            ]}},
          {fk:"fk_prosody",title:"Glottal stop before vowel-initial syllables",audio_id:null,
            desc:"German uses a small glottal stop (a brief closure in the throat) before syllables starting with a vowel. This keeps word and syllable boundaries clear.",
            grid:{cols:3,headers:["Type","Description","Example"],rows:[
              {label:"Word start",color:"#4A8FE7",cells:[{ch:"Vowel-initial word",rom:""},{ch:"tiny stop before the vowel",rom:""},{ch:"Apfel, Essen, Uhr",rom:"apple, food, clock"}]},
              {label:"Compound",color:"#4A8FE7",cells:[{ch:"Second element starts with vowel",rom:""},{ch:"glottal stop at the join",rom:""},{ch:"Beamter, Vorort",rom:"officer, suburb"}]},
            ]}},
        ]},

      // ─────────── 6. GRAMMAR PREVIEW ───────────
      {id:"de_grammar",title:"Grammar Preview",icon:"📐",desc:"3 genders, 4 cases, V2 word order: the essentials before Unit 1",
        items:[
          {fk:"fk_grammar_preview",title:"Three grammatical genders: der, die, das",audio_id:null,
            desc:"Every German noun has one of three genders: masculine (der), feminine (die), or neuter (das). Gender must be memorized with each noun. Article and adjective endings change based on gender.",
            grid:{cols:3,headers:["Masculine (der)","Feminine (die)","Neuter (das)"],rows:[
              {label:"People",color:"#7B5EE8",cells:[{ch:"der Mann",rom:"the man"},{ch:"die Frau",rom:"the woman"},{ch:"das Kind",rom:"the child"}]},
              {label:"Things",color:"#7B5EE8",cells:[{ch:"der Tisch",rom:"the table"},{ch:"die Schule",rom:"the school"},{ch:"das Haus",rom:"the house"}]},
              {label:"More",color:"#7B5EE8",cells:[{ch:"der Hund",rom:"the dog"},{ch:"die Stadt",rom:"the city"},{ch:"das Buch",rom:"the book"}]},
              {label:"Learn as",color:"#F5A623",cells:[{ch:"der Tisch",rom:"NOT just Tisch"},{ch:"die Stadt",rom:"NOT just Stadt"},{ch:"Gender is part of the word",rom:""}]},
            ]}},
          {fk:"fk_grammar_preview",title:"Four grammatical cases: a preview",audio_id:null,
            desc:"German has four cases. Cases show a noun's role in the sentence. They change article endings and sometimes noun forms. You will learn them step by step across the first 20 units.",
            grid:{cols:4,headers:["Case","Role","English equivalent","Example"],rows:[
              {label:"Nominative",color:"#2ECDAB",cells:[{ch:"Nominative",rom:"1st case"},{ch:"Subject: does the action",rom:""},{ch:"Der Mann schläft.",rom:"The man sleeps."}]},
              {label:"Accusative",color:"#E85D75",cells:[{ch:"Accusative",rom:"4th case"},{ch:"Direct object: receives action",rom:""},{ch:"Ich sehe den Mann.",rom:"I see the man."}]},
              {label:"Dative",color:"#4A8FE7",cells:[{ch:"Dative",rom:"3rd case"},{ch:"Indirect object: to/for whom",rom:""},{ch:"Ich gebe dem Mann Brot.",rom:"I give the man bread."}]},
              {label:"Genitive",color:"#7B5EE8",cells:[{ch:"Genitive",rom:"2nd case"},{ch:"Possession: of whom",rom:""},{ch:"Das Buch des Mannes.",rom:"The man's book."}]},
            ]}},
          {fk:"fk_grammar_preview",title:"V2 word order: verb always in position 2",audio_id:null,
            desc:"In German main clauses, the conjugated verb is ALWAYS in the second position. The first position can hold the subject, a time word, or any other element. In subordinate clauses, the verb moves to the end.",
            grid:{cols:3,headers:["Position 1","Position 2 (verb)","Rest of sentence"],rows:[
              {label:"Subject first",color:"#2ECDAB",cells:[{ch:"Ich",rom:"subject"},{ch:"esse",rom:"verb"},{ch:"Brot. (I eat bread.)",rom:""}]},
              {label:"Time first",color:"#F5A623",cells:[{ch:"Morgen",rom:"tomorrow"},{ch:"esse",rom:"verb"},{ch:"ich Brot. (Tomorrow I eat bread.)",rom:""}]},
              {label:"Object first",color:"#F5A623",cells:[{ch:"Brot",rom:"object"},{ch:"esse",rom:"verb"},{ch:"ich heute. (Bread I eat today.)",rom:""}]},
              {label:"Sub-clause",color:"#E85D75",cells:[{ch:"...weil",rom:"because"},{ch:"verb moves to END",rom:"verb-final"},{ch:"...weil ich Brot esse.",rom:"...because I eat bread."}]},
            ]}},
          {fk:"fk_grammar_preview",title:"Article color code used throughout LingoVerse",audio_id:null,
            desc:"Throughout the course, article colors appear consistently on noun teach cards to help you remember gender at a glance.",
            grid:{cols:3,headers:["Article","Gender","Color used"],rows:[
              {label:"der",color:"#4A8FE7",cells:[{ch:"der",rom:"masculine"},{ch:"Masculine",rom:""},{ch:"Blue: der Mann, der Tisch",rom:""}]},
              {label:"die",color:"#E85D75",cells:[{ch:"die",rom:"feminine"},{ch:"Feminine",rom:""},{ch:"Coral: die Frau, die Stadt",rom:""}]},
              {label:"das",color:"#F5A623",cells:[{ch:"das",rom:"neuter"},{ch:"Neuter",rom:""},{ch:"Gold: das Haus, das Kind",rom:""}]},
              {label:"die (pl)",color:"#9B9B9B",cells:[{ch:"die",rom:"plural (all genders)"},{ch:"Plural: always die",rom:""},{ch:"die Männer, die Frauen, die Häuser",rom:""}]},
            ]}},
        ]},

    ]
  },
  // ── FUTURE HOOKS — real inventories for non-Latin scripts ──
  ar:{name:"Arabic Foundations",icon:"🇸🇾",sections:[
    // ══════════════════════════════════════════════════════════════════
    // PHASE 0 — RTL orientation, cursive joining concept, dots, breakers
    // Curriculum: FK_AR_F0_01–F0_10 (script-level orientation)
    // ══════════════════════════════════════════════════════════════════
        {id:"ar_f0_1",title:"0.1 Reading Direction & Letter Shapes",icon:"→←",desc:"How Arabic text flows and how letters change shape",items:[
        
        {fk:"fk_rtl_basics",title:"Right-to-left navigation",desc:"Arabic text runs right-to-left. Words start at the right margin. Numbers and Latin text inside Arabic lines display left-to-right.",
        grid:{cols:2,headers:["Arabic","English"],rows:[
          {label:"Text",color:"#4A8FE7",cells:[{ch:"مرحبا",rom:"reads right to left"},{ch:"—",rom:"English reads left to right"}]},
          {label:"Digits",color:"#2ECDAB",cells:[{ch:"٢٠٢٦",rom:"digits read left to right even in Arabic"},{ch:"—",rom:"same direction, same value"}]},
          {label:"Books",color:"#F5A623",cells:[{ch:"كتاب",rom:"Arabic books open from the right"},{ch:"—",rom:"English books open from the left"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Arabic is cursive by default",desc:"Letters connect within words. Each letter takes a different shape depending on its position: isolated, initial, medial, or final.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"Position",color:"#4A8FE7",cells:[{ch:"•",rom:"stands alone"},{ch:"•—",rom:"starts a connection"},{ch:"—•—",rom:"connected on both sides"},{ch:"—•",rom:"ends a connection"}]},
          {label:"Example: ب",color:"#2ECDAB",cells:[{ch:"ب",rom:"ba — standalone"},{ch:"بـ",rom:"ba — start of word"},{ch:"ـبـ",rom:"ba — middle of word"},{ch:"ـب",rom:"ba — end of word"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Dots are part of letters",desc:"Many Arabic letters share the same base shape — dots are what distinguish them. Dots are letter IDENTITY, not optional decoration.",
        grid:{cols:3,headers:["1 dot below","2 dots above","3 dots above"],rows:[
          {label:"Same base",color:"#4A8FE7",cells:[{ch:"ب",rom:"ba"},{ch:"ت",rom:"ta"},{ch:"ث",rom:"tha"}]},
          {label:"Dots define",color:"#F5A623",cells:[{ch:"ب",rom:"1 dot below = ba"},{ch:"ت",rom:"2 dots above = ta"},{ch:"ث",rom:"3 dots above = tha"}]},
        ]}},
      
      ]},
    {id:"ar_f0_2",title:"0.2 Breakers, Punctuation & Policy",icon:"→←",desc:"The 6 non-connecting letters, Arabic punctuation, and romanization rules",items:[
        
        {fk:"fk_letter_joining",title:"The 6 breakers (non-connectors)",desc:"6 letters connect ONLY to the preceding letter (right side) and NEVER to the following letter (left side). They create a visible break inside words.",
        grid:{cols:6,headers:["ا","د","ذ","ر","ز","و"],rows:[
          {label:"Name",color:"#E85D75",cells:[{ch:"ا",rom:"alif"},{ch:"د",rom:"dal"},{ch:"ذ",rom:"dhal"},{ch:"ر",rom:"ra"},{ch:"ز",rom:"zay"},{ch:"و",rom:"waw"}]},
          {label:"Final form",color:"#F5A623",cells:[{ch:"ـا",rom:"final"},{ch:"ـد",rom:"final"},{ch:"ـذ",rom:"final"},{ch:"ـر",rom:"final"},{ch:"ـز",rom:"final"},{ch:"ـو",rom:"final"}]},
          {label:"Dots",color:"#4A8FE7",cells:[{ch:"—",rom:"none"},{ch:"—",rom:"none"},{ch:"1 dot ↑",rom:"above"},{ch:"—",rom:"none"},{ch:"1 dot ↑",rom:"above"},{ch:"—",rom:"none"}]},
        ]}},
        {fk:"fk_rtl_basics",title:"Arabic punctuation",desc:"Arabic uses mirrored punctuation marks placed in RTL context.",
        grid:{cols:4,headers:["؟","،","؛","!"],rows:[
          {label:"Meaning",color:"#4A8FE7",cells:[{ch:"؟",rom:"question mark"},{ch:"،",rom:"comma"},{ch:"؛",rom:"semicolon"},{ch:"!",rom:"exclamation"}]},
        ]}},
        {fk:"fk_rtl_basics",title:"Romanization policy",desc:"There is no single universal way to write Arabic in Latin letters. Romanization is OFF by default — used only as optional scaffolding, revealed after attempts, never in mastery gates.",
        grid:{cols:2,headers:["In lessons","In tests"],rows:[
          {label:"Default",color:"#2ECDAB",cells:[{ch:"عَرَبِي",rom:"Arabic script shown first"},{ch:"عَرَبِي",rom:"tests use Arabic only"}]},
          {label:"Help",color:"#F5A623",cells:[{ch:"عَرَبِي",rom:"tap to reveal: arabiy"},{ch:"—",rom:"no romanization in mastery gates"}]},
        ]}},
      
      ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 1 — Core high-frequency letter families + joining drills
    // Curriculum: FK_AR_F1_01–F1_11
    // ══════════════════════════════════════════════════════════════════
        {id:"ar_f1_1",title:"1.1 Teeth Base & Core Shapes",icon:"ب",desc:"The ب/ت/ث family, ن/ي, alif, and the anchor letters ل/م",items:[
        
        {fk:"fk_letter_joining",title:"Family: ب ت ث (dots on teeth base)",desc:"Same base shape — distinguished by dot count and placement. High-frequency family, essential to master first.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ب ba (1↓)",color:"#4A8FE7",cells:[{ch:"ب",rom:"isolated"},{ch:"بـ",rom:"initial"},{ch:"ـبـ",rom:"medial"},{ch:"ـب",rom:"final"}]},
          {label:"ت ta (2↑)",color:"#2ECDAB",cells:[{ch:"ت",rom:"isolated"},{ch:"تـ",rom:"initial"},{ch:"ـتـ",rom:"medial"},{ch:"ـت",rom:"final"}]},
          {label:"ث tha (3↑)",color:"#F5A623",cells:[{ch:"ث",rom:"isolated"},{ch:"ثـ",rom:"initial"},{ch:"ـثـ",rom:"medial"},{ch:"ـث",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Family: ن ي (dot/tail pattern)",desc:"ن has 1 dot above; ي has 2 dots below. Visually confusable in some positions — focus on dot placement.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ن nun (1↑)",color:"#4A8FE7",cells:[{ch:"ن",rom:"isolated"},{ch:"نـ",rom:"initial"},{ch:"ـنـ",rom:"medial"},{ch:"ـن",rom:"final"}]},
          {label:"ي ya (2↓)",color:"#2ECDAB",cells:[{ch:"ي",rom:"isolated"},{ch:"يـ",rom:"initial"},{ch:"ـيـ",rom:"medial"},{ch:"ـي",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"ا alif — breaker + long vowel",desc:"ا is one of the 6 breakers: it NEVER connects to the following letter. It also serves as a long vowel letter (/aː/).",
        grid:{cols:3,headers:["Isolated","Final","Rule"],rows:[
          {label:"ا alif",color:"#E85D75",cells:[{ch:"ا",rom:"standalone"},{ch:"ـا",rom:"after connector"},{ch:"ـا ‖",rom:"breaks — next letter restarts"}]},
        ]}},
        {fk:"fk_letter_joining",title:"ل lam & م mim — anchor letters",desc:"Two high-frequency joiners. ل is tall and forms important combinations (including with ا). م has a distinctive loop.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ل lam",color:"#4A8FE7",cells:[{ch:"ل",rom:"isolated"},{ch:"لـ",rom:"initial"},{ch:"ـلـ",rom:"medial"},{ch:"ـل",rom:"final"}]},
          {label:"م mim",color:"#2ECDAB",cells:[{ch:"م",rom:"isolated"},{ch:"مـ",rom:"initial"},{ch:"ـمـ",rom:"medial"},{ch:"ـم",rom:"final"}]},
        ]}},
      
      ]},
    {id:"ar_f1_2",title:"1.2 Kaf & Breaker Pairs",icon:"ب",desc:"ك kaf, plus the breaker pairs د/ذ and ر/ز",items:[
        
        {fk:"fk_letter_joining",title:"ك kaf — high-utility consonant",desc:"ك (kaf) is one of the most common Arabic consonants. It connects on both sides and has 4 positional forms.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ك kaf",color:"#F5A623",cells:[{ch:"ك",rom:"isolated"},{ch:"كـ",rom:"initial"},{ch:"ـكـ",rom:"medial"},{ch:"ـك",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Breaker pair: د dal / ذ dhal",desc:"Same base shape — ذ adds 1 dot above. Both are breakers (only 2 forms: isolated + final).",
        grid:{cols:4,headers:["Isolated","Final","Dots","Type"],rows:[
          {label:"د dal",color:"#4A8FE7",cells:[{ch:"د",rom:"isolated"},{ch:"ـد",rom:"final"},{ch:"—",rom:"no dots"},{ch:"—",rom:"breaker — 2 forms only"}]},
          {label:"ذ dhal",color:"#F5A623",cells:[{ch:"ذ",rom:"isolated"},{ch:"ـذ",rom:"final"},{ch:"•↑",rom:"1 dot above"},{ch:"—",rom:"breaker — 2 forms only"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Breaker pair: ر ra / ز zay",desc:"Same base shape — ز adds 1 dot above. Both are breakers.",
        grid:{cols:4,headers:["Isolated","Final","Dots","Type"],rows:[
          {label:"ر ra",color:"#4A8FE7",cells:[{ch:"ر",rom:"isolated"},{ch:"ـر",rom:"final"},{ch:"—",rom:"no dots"},{ch:"—",rom:"breaker — 2 forms only"}]},
          {label:"ز zay",color:"#F5A623",cells:[{ch:"ز",rom:"isolated"},{ch:"ـز",rom:"final"},{ch:"•↑",rom:"1 dot above"},{ch:"—",rom:"breaker — 2 forms only"}]},
        ]}},
      
      ]},
    {id:"ar_f1_3",title:"1.3 Teeth, Ha & Waw",icon:"ب",desc:"The س/ش teeth family, the shape-shifting ه, and و waw",items:[
        
        {fk:"fk_letter_joining",title:"Teeth family: س sin / ش shin",desc:"Same teeth base — ش adds 3 dots above. Common and must be read quickly.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"س sin (0)",color:"#4A8FE7",cells:[{ch:"س",rom:"isolated"},{ch:"سـ",rom:"initial"},{ch:"ـسـ",rom:"medial"},{ch:"ـس",rom:"final"}]},
          {label:"ش shin (3↑)",color:"#2ECDAB",cells:[{ch:"ش",rom:"isolated"},{ch:"شـ",rom:"initial"},{ch:"ـشـ",rom:"medial"},{ch:"ـش",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"ه ha — multiple print forms",desc:"ه can look very different across positions and fonts. Focus on joining points, not exact stroke style.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ه ha",color:"var(--purple-accent-text)",cells:[{ch:"ه",rom:"isolated"},{ch:"هـ",rom:"initial"},{ch:"ـهـ",rom:"medial"},{ch:"ـه",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"و waw — breaker + long vowel",desc:"و is one of the 6 breakers AND a long vowel letter (/uː/). No left connection.",
        grid:{cols:3,headers:["Isolated","Final","Rule"],rows:[
          {label:"و waw",color:"#E85D75",cells:[{ch:"و",rom:"standalone"},{ch:"ـو",rom:"after connector"},{ch:"ـو ‖",rom:"breaks — next letter restarts"}]},
        ]}},
      
      ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 2 — Remaining alphabet families + full reference + confusables
    // Curriculum: FK_AR_F2_01–F2_11
    // ══════════════════════════════════════════════════════════════════
        {id:"ar_f2_1",title:"2.1 Remaining Letter Families",icon:"ق",desc:"Bowl ج/ح/خ, heavy teeth ص/ض, tall ط/ظ, throat ع/غ, and cup ف/ق",items:[
        
        {fk:"fk_letter_joining",title:"Bowl family: ج ح خ",desc:"Same bowl-shaped base — distinguished by dot position. ج = 1 dot below, ح = no dot, خ = 1 dot above.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ج jim (1↓)",color:"#4A8FE7",cells:[{ch:"ج",rom:"isolated"},{ch:"جـ",rom:"initial"},{ch:"ـجـ",rom:"medial"},{ch:"ـج",rom:"final"}]},
          {label:"ح ha (0)",color:"#2ECDAB",cells:[{ch:"ح",rom:"isolated"},{ch:"حـ",rom:"initial"},{ch:"ـحـ",rom:"medial"},{ch:"ـح",rom:"final"}]},
          {label:"خ kha (1↑)",color:"#F5A623",cells:[{ch:"خ",rom:"isolated"},{ch:"خـ",rom:"initial"},{ch:"ـخـ",rom:"medial"},{ch:"ـخ",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Heavy teeth: ص sad / ض dad",desc:"Same base — ض adds 1 dot above. Do not confuse with the س/ش teeth family.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ص sad (0)",color:"#4A8FE7",cells:[{ch:"ص",rom:"isolated"},{ch:"صـ",rom:"initial"},{ch:"ـصـ",rom:"medial"},{ch:"ـص",rom:"final"}]},
          {label:"ض dad (1↑)",color:"#F5A623",cells:[{ch:"ض",rom:"isolated"},{ch:"ضـ",rom:"initial"},{ch:"ـضـ",rom:"medial"},{ch:"ـض",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Tall loop: ط ta / ظ dha",desc:"Same tall base — ظ adds 1 dot above.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ط ta (0)",color:"#4A8FE7",cells:[{ch:"ط",rom:"isolated"},{ch:"طـ",rom:"initial"},{ch:"ـطـ",rom:"medial"},{ch:"ـط",rom:"final"}]},
          {label:"ظ dha (1↑)",color:"#F5A623",cells:[{ch:"ظ",rom:"isolated"},{ch:"ظـ",rom:"initial"},{ch:"ـظـ",rom:"medial"},{ch:"ـظ",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Throat loop: ع ayn / غ ghayn",desc:"Same base — غ adds 1 dot above. High-impact for reading.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ع ayn (0)",color:"#4A8FE7",cells:[{ch:"ع",rom:"isolated"},{ch:"عـ",rom:"initial"},{ch:"ـعـ",rom:"medial"},{ch:"ـع",rom:"final"}]},
          {label:"غ ghayn (1↑)",color:"#F5A623",cells:[{ch:"غ",rom:"isolated"},{ch:"غـ",rom:"initial"},{ch:"ـغـ",rom:"medial"},{ch:"ـغ",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Dot-count pair: ف fa / ق qaf",desc:"ف has 1 dot above; ق has 2 dots above. Visually related in some fonts.",
        grid:{cols:4,headers:["Isolated","Initial","Medial","Final"],rows:[
          {label:"ف fa (1↑)",color:"#4A8FE7",cells:[{ch:"ف",rom:"isolated"},{ch:"فـ",rom:"initial"},{ch:"ـفـ",rom:"medial"},{ch:"ـف",rom:"final"}]},
          {label:"ق qaf (2↑)",color:"#F5A623",cells:[{ch:"ق",rom:"isolated"},{ch:"قـ",rom:"initial"},{ch:"ـقـ",rom:"medial"},{ch:"ـق",rom:"final"}]},
        ]}},
      
      ]},
    {id:"ar_f2_2",title:"2.2 Full Reference & Look-alikes",icon:"ق",desc:"Complete 28-letter table, confusable pairs, and breaker summary",items:[
        
        {fk:"fk_letter_grid",title:"Full 28-letter reference",desc:"Every Arabic letter in all 4 positions: Isolated (alone), Initial (start of word), Medial (middle), Final (end of word). Letters marked ★ are breakers — they only have 2 forms.",
        grid:{cols:5,headers:["Letter","Isolated","Initial","Medial","Final"],rows:[
          {label:"1",color:"#E85D75",cells:[{ch:"ا★",rom:"alif"},{ch:"ا",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـا",rom:"final"}]},
          {label:"2",color:"#4A8FE7",cells:[{ch:"ب",rom:"ba"},{ch:"ب",rom:"isolated"},{ch:"بـ",rom:"initial"},{ch:"ـبـ",rom:"medial"},{ch:"ـب",rom:"final"}]},
          {label:"3",color:"#4A8FE7",cells:[{ch:"ت",rom:"ta"},{ch:"ت",rom:"isolated"},{ch:"تـ",rom:"initial"},{ch:"ـتـ",rom:"medial"},{ch:"ـت",rom:"final"}]},
          {label:"4",color:"#4A8FE7",cells:[{ch:"ث",rom:"tha"},{ch:"ث",rom:"isolated"},{ch:"ثـ",rom:"initial"},{ch:"ـثـ",rom:"medial"},{ch:"ـث",rom:"final"}]},
          {label:"5",color:"#2ECDAB",cells:[{ch:"ج",rom:"jim"},{ch:"ج",rom:"isolated"},{ch:"جـ",rom:"initial"},{ch:"ـجـ",rom:"medial"},{ch:"ـج",rom:"final"}]},
          {label:"6",color:"#2ECDAB",cells:[{ch:"ح",rom:"ha"},{ch:"ح",rom:"isolated"},{ch:"حـ",rom:"initial"},{ch:"ـحـ",rom:"medial"},{ch:"ـح",rom:"final"}]},
          {label:"7",color:"#2ECDAB",cells:[{ch:"خ",rom:"kha"},{ch:"خ",rom:"isolated"},{ch:"خـ",rom:"initial"},{ch:"ـخـ",rom:"medial"},{ch:"ـخ",rom:"final"}]},
          {label:"8",color:"#E85D75",cells:[{ch:"د★",rom:"dal"},{ch:"د",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـد",rom:"final"}]},
          {label:"9",color:"#E85D75",cells:[{ch:"ذ★",rom:"dhal"},{ch:"ذ",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـذ",rom:"final"}]},
          {label:"10",color:"#E85D75",cells:[{ch:"ر★",rom:"ra"},{ch:"ر",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـر",rom:"final"}]},
          {label:"11",color:"#E85D75",cells:[{ch:"ز★",rom:"zay"},{ch:"ز",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـز",rom:"final"}]},
          {label:"12",color:"#F5A623",cells:[{ch:"س",rom:"sin"},{ch:"س",rom:"isolated"},{ch:"سـ",rom:"initial"},{ch:"ـسـ",rom:"medial"},{ch:"ـس",rom:"final"}]},
          {label:"13",color:"#F5A623",cells:[{ch:"ش",rom:"shin"},{ch:"ش",rom:"isolated"},{ch:"شـ",rom:"initial"},{ch:"ـشـ",rom:"medial"},{ch:"ـش",rom:"final"}]},
          {label:"14",color:"#F5A623",cells:[{ch:"ص",rom:"sad"},{ch:"ص",rom:"isolated"},{ch:"صـ",rom:"initial"},{ch:"ـصـ",rom:"medial"},{ch:"ـص",rom:"final"}]},
          {label:"15",color:"#F5A623",cells:[{ch:"ض",rom:"dad"},{ch:"ض",rom:"isolated"},{ch:"ضـ",rom:"initial"},{ch:"ـضـ",rom:"medial"},{ch:"ـض",rom:"final"}]},
          {label:"16",color:"var(--purple-accent-text)",cells:[{ch:"ط",rom:"ta"},{ch:"ط",rom:"isolated"},{ch:"طـ",rom:"initial"},{ch:"ـطـ",rom:"medial"},{ch:"ـط",rom:"final"}]},
          {label:"17",color:"var(--purple-accent-text)",cells:[{ch:"ظ",rom:"dha"},{ch:"ظ",rom:"isolated"},{ch:"ظـ",rom:"initial"},{ch:"ـظـ",rom:"medial"},{ch:"ـظ",rom:"final"}]},
          {label:"18",color:"var(--purple-accent-text)",cells:[{ch:"ع",rom:"ayn"},{ch:"ع",rom:"isolated"},{ch:"عـ",rom:"initial"},{ch:"ـعـ",rom:"medial"},{ch:"ـع",rom:"final"}]},
          {label:"19",color:"var(--purple-accent-text)",cells:[{ch:"غ",rom:"ghayn"},{ch:"غ",rom:"isolated"},{ch:"غـ",rom:"initial"},{ch:"ـغـ",rom:"medial"},{ch:"ـغ",rom:"final"}]},
          {label:"20",color:"#4A8FE7",cells:[{ch:"ف",rom:"fa"},{ch:"ف",rom:"isolated"},{ch:"فـ",rom:"initial"},{ch:"ـفـ",rom:"medial"},{ch:"ـف",rom:"final"}]},
          {label:"21",color:"#4A8FE7",cells:[{ch:"ق",rom:"qaf"},{ch:"ق",rom:"isolated"},{ch:"قـ",rom:"initial"},{ch:"ـقـ",rom:"medial"},{ch:"ـق",rom:"final"}]},
          {label:"22",color:"#4A8FE7",cells:[{ch:"ك",rom:"kaf"},{ch:"ك",rom:"isolated"},{ch:"كـ",rom:"initial"},{ch:"ـكـ",rom:"medial"},{ch:"ـك",rom:"final"}]},
          {label:"23",color:"#4A8FE7",cells:[{ch:"ل",rom:"lam"},{ch:"ل",rom:"isolated"},{ch:"لـ",rom:"initial"},{ch:"ـلـ",rom:"medial"},{ch:"ـل",rom:"final"}]},
          {label:"24",color:"#2ECDAB",cells:[{ch:"م",rom:"mim"},{ch:"م",rom:"isolated"},{ch:"مـ",rom:"initial"},{ch:"ـمـ",rom:"medial"},{ch:"ـم",rom:"final"}]},
          {label:"25",color:"#2ECDAB",cells:[{ch:"ن",rom:"nun"},{ch:"ن",rom:"isolated"},{ch:"نـ",rom:"initial"},{ch:"ـنـ",rom:"medial"},{ch:"ـن",rom:"final"}]},
          {label:"26",color:"#2ECDAB",cells:[{ch:"ه",rom:"ha"},{ch:"ه",rom:"isolated"},{ch:"هـ",rom:"initial"},{ch:"ـهـ",rom:"medial"},{ch:"ـه",rom:"final"}]},
          {label:"27",color:"#E85D75",cells:[{ch:"و★",rom:"waw"},{ch:"و",rom:"isolated"},{ch:"—",rom:"breaker"},{ch:"—",rom:"breaker"},{ch:"ـو",rom:"final"}]},
          {label:"28",color:"#2ECDAB",cells:[{ch:"ي",rom:"ya"},{ch:"ي",rom:"isolated"},{ch:"يـ",rom:"initial"},{ch:"ـيـ",rom:"medial"},{ch:"ـي",rom:"final"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Confusable dot clusters",desc:"Systematic dot discrimination across shape families. Most reading errors come from dot confusion.",
        grid:{cols:4,headers:["No dots","+ 1 dot","+ 2 dots","+ 3 dots"],rows:[
          {label:"Teeth",color:"#4A8FE7",cells:[{ch:"—",rom:"—"},{ch:"ب",rom:"ba — 1 below"},{ch:"ت",rom:"ta — 2 above"},{ch:"ث",rom:"tha — 3 above"}]},
          {label:"Bowl",color:"#2ECDAB",cells:[{ch:"ح",rom:"ha — no dots"},{ch:"ج",rom:"jim — 1 below"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Bowl +top",color:"#2ECDAB",cells:[{ch:"ح",rom:"ha — no dots"},{ch:"خ",rom:"kha — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Breaker",color:"#F5A623",cells:[{ch:"د",rom:"dal"},{ch:"ذ",rom:"dhal — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Breaker",color:"#F5A623",cells:[{ch:"ر",rom:"ra"},{ch:"ز",rom:"zay — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Heavy",color:"#E85D75",cells:[{ch:"ص",rom:"sad"},{ch:"ض",rom:"dad — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Heavy",color:"#E85D75",cells:[{ch:"ط",rom:"ta"},{ch:"ظ",rom:"dha — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Loop",color:"var(--purple-accent-text)",cells:[{ch:"ع",rom:"ayn"},{ch:"غ",rom:"ghayn — 1 above"},{ch:"—",rom:"—"},{ch:"—",rom:"—"}]},
          {label:"Cup",color:"var(--purple-accent-text)",cells:[{ch:"—",rom:"—"},{ch:"ف",rom:"fa — 1 above"},{ch:"ق",rom:"qaf — 2 above"},{ch:"—",rom:"—"}]},
          {label:"Teeth 2",color:"#4A8FE7",cells:[{ch:"س",rom:"sin"},{ch:"—",rom:"—"},{ch:"—",rom:"—"},{ch:"ش",rom:"shin — 3 above"}]},
        ]}},
        {fk:"fk_letter_joining",title:"All 6 breakers — consolidation",desc:"One lookup: the complete breaker rule. After any of these letters, the next letter takes isolated or initial form.",
        grid:{cols:2,headers:["The 6 breakers","What they do"],rows:[
          {label:"Undotted",color:"#E85D75",cells:[{ch:"ا  د  ر  و",rom:"alif, dal, ra, waw"},{ch:"دار",rom:"dal breaks — alif + ra restart"}]},
          {label:"Dotted",color:"#F5A623",cells:[{ch:"ذ  ز",rom:"dhal, zay (each has 1 dot)"},{ch:"زور",rom:"waw breaks — ra restarts"}]},
          {label:"Rule",color:"#4A8FE7",cells:[{ch:"ـا  ـد  ـذ  ـر  ـز  ـو",rom:"only 2 forms: isolated + final"},{ch:"كتاب",rom:"gap inside a word ≠ word boundary"}]},
        ]}},
      
      ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 3 — Harakat (vowel marks), sukun, shadda, long vowels
    // Curriculum: FK_AR_F3_01–F3_10
    // ══════════════════════════════════════════════════════════════════
        {id:"ar_f3_1",title:"3.1 Short Vowels & Sukun",icon:"◌َ",desc:"The 3 vowel marks (fatḥa, ḍamma, kasra), the silence mark, and shadda",items:[
        
        {fk:"fk_letter_joining",title:"Why vowels disappear in Arabic",desc:"Arabic is an abjad: a writing system that mainly writes consonants. Short vowels are shown with small marks called harakat. Beginner texts include them, but newspapers and books usually leave them off — readers fill in the vowels from context.",
        grid:{cols:2,headers:["With harakat","Without harakat"],rows:[
          {label:"Text",color:"#4A8FE7",cells:[{ch:"كَتَبَ",rom:"kataba (he wrote)"},{ch:"كتب",rom:"ktb (same word)"}]},
          {label:"Used in",color:"#2ECDAB",cells:[{ch:"كَتَبَ",rom:"learner texts show all vowel marks"},{ch:"كتب",rom:"newspapers and books leave them off"}]},
        ]}},
        {fk:"fk_letter_joining",title:"The 3 short vowel marks",desc:"Fatha = short /a/ (above), damma = short /u/ (above), kasra = short /i/ (below). Placed on the consonant they follow.",
        grid:{cols:3,headers:["Fatḥa — /a/","Ḍamma — /u/","Kasra — /i/"],rows:[
          {label:"On ب",color:"#4A8FE7",cells:[{ch:"بَ",rom:"ba — mark sits above"},{ch:"بُ",rom:"bu — mark sits above"},{ch:"بِ",rom:"bi — mark sits below"}]},
          {label:"On ك",color:"#2ECDAB",cells:[{ch:"كَ",rom:"ka"},{ch:"كُ",rom:"ku"},{ch:"كِ",rom:"ki"}]},
          {label:"On م",color:"#F5A623",cells:[{ch:"مَ",rom:"ma"},{ch:"مُ",rom:"mu"},{ch:"مِ",rom:"mi"}]},
          {label:"On ن",color:"#E85D75",cells:[{ch:"نَ",rom:"na"},{ch:"نُ",rom:"nu"},{ch:"نِ",rom:"ni"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Sukun — the silence mark",desc:"Sukun is a small circle placed above a letter. It means: no vowel after this consonant. Compare بَ (ba — has a vowel) with بْ (just \"b\" — silent, no vowel follows).",
        grid:{cols:3,headers:["With fatḥa","With sukun","Difference"],rows:[
          {label:"On ب",color:"#4A8FE7",cells:[{ch:"بَ",rom:"ba — has a vowel"},{ch:"بْ",rom:"b — no vowel after it"},{ch:"بَ ≠ بْ",rom:"sukun means silence"}]},
          {label:"On ت",color:"#2ECDAB",cells:[{ch:"تَ",rom:"ta — has a vowel"},{ch:"تْ",rom:"t — no vowel after it"},{ch:"تَ ≠ تْ",rom:"small circle above = no vowel"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Shadda — doubled consonant",desc:"Shadda is a small w-shape placed above a letter. It means you say that consonant twice — for example, بَّ sounds like \"bb\" instead of just \"b\".",
        grid:{cols:2,headers:["Without shadda","With shadda"],rows:[
          {label:"On ب",color:"#4A8FE7",cells:[{ch:"بَ",rom:"ba — single b"},{ch:"بَّ",rom:"bba — doubled b"}]},
          {label:"On ت",color:"#2ECDAB",cells:[{ch:"تَ",rom:"ta — single t"},{ch:"تَّ",rom:"tta — doubled t"}]},
          {label:"In word",color:"#F5A623",cells:[{ch:"كَتَبَ",rom:"kataba — he wrote"},{ch:"كَتَّبَ",rom:"kattaba — he dictated"}]},
        ]}},
      
      ]},
    {id:"ar_f3_2",title:"3.2 Tanwin, Long Vowels & Syllables",icon:"◌َ",desc:"The -n endings, long vowel letters, and reading your first syllables",items:[
        
        {fk:"fk_letter_joining",title:"Tanwin — the -n endings",desc:"Tanwin adds an \"-n\" sound to the end of a word. It appears as doubled vowel marks. You will see it in fully voweled Arabic texts like the Quran and textbooks.",
        grid:{cols:3,headers:["-an ending","-un ending","-in ending"],rows:[
          {label:"On ب",color:"#4A8FE7",cells:[{ch:"بًا",rom:"ban — fatḥatan"},{ch:"بٌ",rom:"bun — ḍammatan"},{ch:"بٍ",rom:"bin — kasratan"}]},
          {label:"On ك",color:"#2ECDAB",cells:[{ch:"كًا",rom:"kan"},{ch:"كٌ",rom:"kun"},{ch:"كٍ",rom:"kin"}]},
          {label:"In word",color:"#F5A623",cells:[{ch:"كِتَابًا",rom:"kitaaban"},{ch:"كِتَابٌ",rom:"kitaabun"},{ch:"كِتَابٍ",rom:"kitaabin"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Long vowels with ا و ي",desc:"Three letters can function as long vowel carriers: ا = /aː/, و = /uː/, ي = /iː/. They are LETTERS, not diacritics.",
        grid:{cols:3,headers:["Long /aː/","Long /uː/","Long /iː/"],rows:[
          {label:"Letter",color:"#4A8FE7",cells:[{ch:"ا",rom:"alif"},{ch:"و",rom:"waw"},{ch:"ي",rom:"ya"}]},
          {label:"Pattern",color:"#2ECDAB",cells:[{ch:"فَتْحة + ا",rom:"fatha + alif"},{ch:"ضَمَّة + و",rom:"damma + waw"},{ch:"كَسْرة + ي",rom:"kasra + ya"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Reading your first syllables",desc:"Start by combining one consonant with a vowel mark (open syllable, like بَ = ba). Then try consonant + vowel + consonant with sukun (closed syllable, like بَتْ = bat).",
        grid:{cols:2,headers:["Open (consonant + vowel)","Closed (consonant + vowel + consonant)"],rows:[
          {label:"Example",color:"#4A8FE7",cells:[{ch:"بَ",rom:"ba"},{ch:"بَتْ",rom:"bat"}]},
          {label:"Breakdown",color:"#2ECDAB",cells:[{ch:"ب + َ",rom:"consonant + vowel mark"},{ch:"ب + َ + تْ",rom:"consonant + vowel + consonant"}]},
          {label:"More",color:"#F5A623",cells:[{ch:"كُ",rom:"ku"},{ch:"كُتْ",rom:"kut"}]},
        ]}},
      
      ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 4 — Real-text readiness: ال, لا, digits, end-shapes, micro-words
    // Curriculum: FK_AR_F4_01–F4_10
    // ══════════════════════════════════════════════════════════════════
        {id:"ar_f4_1",title:"4.1 The & Combos",icon:"ال",desc:"The definite article ال, the lam-alif combo, and Arabic-Indic digits",items:[
        
        {fk:"fk_letter_joining",title:"The definite article ال",desc:"ال (pronounced: al) is Arabic for \"the\". It is the most common prefix — you will see it at the start of many words.",
        grid:{cols:2,headers:["Without ال","With ال"],rows:[
          {label:"Book",color:"#4A8FE7",cells:[{ch:"كِتَاب",rom:"kitab — a book"},{ch:"الكِتَاب",rom:"al-kitab — THE book"}]},
          {label:"Door",color:"#2ECDAB",cells:[{ch:"بَاب",rom:"bab — a door"},{ch:"البَاب",rom:"al-bab — THE door"}]},
          {label:"Boy",color:"#F5A623",cells:[{ch:"وَلَد",rom:"walad — a boy"},{ch:"الوَلَد",rom:"al-walad — THE boy"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Lam-alif combo: لا (laa)",desc:"When ل (lam) and ا (alif) appear next to each other, they always merge into one combined shape: لا (pronounced: laa). You cannot write them separately — they fuse automatically.",
        grid:{cols:2,headers:["Separate letters","Combined shape"],rows:[
          {label:"Shape",color:"#4A8FE7",cells:[{ch:"ل + ا",rom:"lam followed by alif"},{ch:"لا",rom:"laa — always merge into one shape"}]},
          {label:"In word",color:"#2ECDAB",cells:[{ch:"ل + ا",rom:"whenever you see ل then ا"},{ch:"لا",rom:"laa — means no / not"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Arabic-Indic digits ٠–٩",desc:"Arabic text can use Arabic-Indic numerals. Digit sequences read left-to-right inside RTL text.",
        grid:{cols:5,headers:["٠","١","٢","٣","٤"],rows:[
          {label:"Value",color:"#4A8FE7",cells:[{ch:"٠",rom:"0"},{ch:"١",rom:"1"},{ch:"٢",rom:"2"},{ch:"٣",rom:"3"},{ch:"٤",rom:"4"}]},
        ]}},
      
      ]},
    {id:"ar_f4_2",title:"4.2 End-shapes & First Words",icon:"ال",desc:"Look-alike letters at word endings, plus your first Arabic words to read",items:[
        
        {fk:"fk_letter_joining",title:"Arabic-Indic digits ٥–٩",desc:"Continuation of the digit reference.",
        grid:{cols:5,headers:["٥","٦","٧","٨","٩"],rows:[
          {label:"Value",color:"#2ECDAB",cells:[{ch:"٥",rom:"5"},{ch:"٦",rom:"6"},{ch:"٧",rom:"7"},{ch:"٨",rom:"8"},{ch:"٩",rom:"9"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Look-alikes: ة vs ه at the end of words",desc:"ة (called taa marbuuta, sounds like a soft \"a\" or \"t\") is extremely common at the end of Arabic words. It looks like ه (ha) but with 2 dots above. Mixing them up changes the word.",
        grid:{cols:2,headers:["ة — taa marbuuta","ه — ha"],rows:[
          {label:"Shape",color:"#4A8FE7",cells:[{ch:"ة",rom:"2 dots above — sounds like a/t"},{ch:"ه",rom:"no dots — sounds like h"}]},
          {label:"Final",color:"#F5A623",cells:[{ch:"ـة",rom:"very common word ending"},{ch:"ـه",rom:"a different letter entirely"}]},
          {label:"In word",color:"#2ECDAB",cells:[{ch:"مَدرَسَة",rom:"madrasa (school) — ends in ة"},{ch:"لَه",rom:"lahu (for him) — ends in ه"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Look-alikes: ى vs ي at the end of words",desc:"ى (called alif maqsuura, sounds like a long \"aa\") has NO dots. ي (ya, sounds like \"ee\") has 2 dots below. They look almost identical — always check for dots underneath.",
        grid:{cols:2,headers:["ى — alif maqsuura","ي — ya"],rows:[
          {label:"Dots?",color:"#4A8FE7",cells:[{ch:"ى",rom:"NO dots — sounds like long aa"},{ch:"ي",rom:"2 dots below — sounds like ee"}]},
          {label:"Final",color:"#F5A623",cells:[{ch:"ـى",rom:"dotless at end of word"},{ch:"ـي",rom:"2 dots below at end of word"}]},
          {label:"In word",color:"#2ECDAB",cells:[{ch:"عَلَى",rom:"alaa (on/upon) — ends in ى"},{ch:"فِي",rom:"fee (in) — ends in ي"}]},
        ]}},
        {fk:"fk_letter_joining",title:"Your first Arabic words",desc:"These are some of the shortest, most common Arabic words. Try to read the Arabic letters first, then check the meaning below.",
        grid:{cols:5,headers:["في","من","ما","لا","و"],rows:[
          {label:"Sound",color:"#4A8FE7",cells:[{ch:"في",rom:"fee"},{ch:"من",rom:"min"},{ch:"ما",rom:"maa"},{ch:"لا",rom:"laa"},{ch:"و",rom:"wa"}]},
          {label:"Means",color:"#2ECDAB",cells:[{ch:"في",rom:"in"},{ch:"من",rom:"from"},{ch:"ما",rom:"what"},{ch:"لا",rom:"no / not"},{ch:"و",rom:"and"}]},
          {label:"Letters",color:"#F5A623",cells:[{ch:"ف + ي",rom:"fa + ya"},{ch:"م + ن",rom:"mim + nun"},{ch:"م + ا",rom:"mim + alif"},{ch:"لا",rom:"lam-alif combo"},{ch:"و",rom:"just waw"}]},
        ]}},
      
      ]},
    // ══════════════════════════════════════════════════════════════════
    // TIPS — Consolidated common mistakes (Manifesto P12)
    // ══════════════════════════════════════════════════════════════════
    {id:"ar_tips",title:"⚠️ Common Mistakes & Tips",icon:"💡",desc:"Collected pitfalls for Arabic script beginners",items:[
      {fk:"fk_letter_joining",title:"Dot confusion",desc:"The #1 beginner error: missing, misplacing, or miscounting dots.",
        grid:{cols:3,headers:["✗ Wrong","✓ Right","Rule"],rows:[
          {label:"Missing dot",color:"#E85D75",cells:[{ch:"ب",rom:"ba — 1 dot below"},{ch:"ت",rom:"ta — 2 dots above"},{ch:"ث",rom:"tha — 3 dots above"}]},
          {label:"Wrong spot",color:"#F5A623",cells:[{ch:"ج",rom:"jim — 1 dot BELOW"},{ch:"خ",rom:"kha — 1 dot ABOVE"},{ch:"ح",rom:"ha — NO dots at all"}]},
        ]}},
      {fk:"fk_letter_joining",title:"Connection mistakes",desc:"Forcing connections where breaks should be, or breaking where connections should be.",
        grid:{cols:2,headers:["✗ Wrong","✓ Right"],rows:[
          {label:"Forced join",color:"#E85D75",cells:[{ch:"دار",rom:"the ا breaks — ر starts fresh"},{ch:"دابر",rom:"after ا, the ب starts in initial form"}]},
          {label:"False break",color:"#F5A623",cells:[{ch:"كتب",rom:"one word — letters connect"},{ch:"كتاب",rom:"ا breaks inside, but still one word"}]},
        ]}},
      {fk:"fk_letter_joining",title:"Harakat vs dots",desc:"Dots are part of the letter (permanent). Harakat are vowel marks (optional). Do not confuse them.",
        grid:{cols:2,headers:["Dots — part of the letter","Harakat — vowel marks"],rows:[
          {label:"Role",color:"#4A8FE7",cells:[{ch:"ب",rom:"the dot IS the letter — always required"},{ch:"بَ",rom:"the mark shows the vowel — optional"}]},
          {label:"Compare",color:"#2ECDAB",cells:[{ch:"ب ≠ ت ≠ ث",rom:"dots change which letter you see"},{ch:"بَ بُ بِ",rom:"marks change the vowel sound"}]},
          {label:"In print",color:"#F5A623",cells:[{ch:"ب ت ث",rom:"dots are always written"},{ch:"كتب",rom:"vowel marks usually left off"}]},
        ]}},
    ]},
  ]},ja:{name:"Japanese Foundations",icon:"🇯🇵",sections:[
    {id:"ja_hiragana",title:"Hiragana (ひらがな)",icon:"あ",desc:"46 base characters for native Japanese words",items:[
      {fk:"fk_syllabary",title:"Hiragana chart",desc:"Used for native Japanese words, grammar, and verb endings. Tap any character to see it up close!",
        examples:[],
        grid:{cols:5,headers:["a","i","u","e","o"],rows:[
          {label:"∅",color:"var(--purple-accent-text)",cells:[{ch:"あ",rom:"a"},{ch:"い",rom:"i"},{ch:"う",rom:"u"},{ch:"え",rom:"e"},{ch:"お",rom:"o"}]},
          {label:"k",color:"#4A8FE7",cells:[{ch:"か",rom:"ka"},{ch:"き",rom:"ki"},{ch:"く",rom:"ku"},{ch:"け",rom:"ke"},{ch:"こ",rom:"ko"}]},
          {label:"s",color:"#2ECDAB",cells:[{ch:"さ",rom:"sa"},{ch:"し",rom:"shi"},{ch:"す",rom:"su"},{ch:"せ",rom:"se"},{ch:"そ",rom:"so"}]},
          {label:"t",color:"#F5A623",cells:[{ch:"た",rom:"ta"},{ch:"ち",rom:"chi"},{ch:"つ",rom:"tsu"},{ch:"て",rom:"te"},{ch:"と",rom:"to"}]},
          {label:"n",color:"#E85D75",cells:[{ch:"な",rom:"na"},{ch:"に",rom:"ni"},{ch:"ぬ",rom:"nu"},{ch:"ね",rom:"ne"},{ch:"の",rom:"no"}]},
          {label:"h",color:"var(--purple-accent-text)",cells:[{ch:"は",rom:"ha"},{ch:"ひ",rom:"hi"},{ch:"ふ",rom:"fu"},{ch:"へ",rom:"he"},{ch:"ほ",rom:"ho"}]},
          {label:"m",color:"#4A8FE7",cells:[{ch:"ま",rom:"ma"},{ch:"み",rom:"mi"},{ch:"む",rom:"mu"},{ch:"め",rom:"me"},{ch:"も",rom:"mo"}]},
          {label:"y",color:"#2ECDAB",cells:[{ch:"や",rom:"ya"},{ch:"",rom:""},{ch:"ゆ",rom:"yu"},{ch:"",rom:""},{ch:"よ",rom:"yo"}]},
          {label:"r",color:"#F5A623",cells:[{ch:"ら",rom:"ra"},{ch:"り",rom:"ri"},{ch:"る",rom:"ru"},{ch:"れ",rom:"re"},{ch:"ろ",rom:"ro"}]},
          {label:"w/n",color:"#E85D75",cells:[{ch:"わ",rom:"wa"},{ch:"",rom:""},{ch:"ん",rom:"n"},{ch:"",rom:""},{ch:"を",rom:"wo"}]},
        ]}},
      {fk:"fk_syllabary",title:"Irregular readings",desc:"し is 'shi' (not si), ち is 'chi' (not ti), つ is 'tsu' (not tu), ふ is 'fu' (not hu). These are the most common mistakes.",
        examples:["し shi ✓ (not si ✗)","ち chi ✓ (not ti ✗)","つ tsu ✓ (not tu ✗)","ふ fu ✓ (not hu ✗)"]},
      {fk:"fk_voiced_marks",title:"Dakuten & handakuten",desc:"Voiced marks (゛) and half-voiced marks (゜) create additional sounds from basic kana.",
        examples:[],
        grid:{cols:5,headers:["a","i","u","e","o"],rows:[
          {label:"g-",color:"#4A8FE7",cells:[{ch:"が",rom:"ga"},{ch:"ぎ",rom:"gi"},{ch:"ぐ",rom:"gu"},{ch:"げ",rom:"ge"},{ch:"ご",rom:"go"}]},
          {label:"z-",color:"#2ECDAB",cells:[{ch:"ざ",rom:"za"},{ch:"じ",rom:"ji"},{ch:"ず",rom:"zu"},{ch:"ぜ",rom:"ze"},{ch:"ぞ",rom:"zo"}]},
          {label:"d-",color:"#F5A623",cells:[{ch:"だ",rom:"da"},{ch:"ぢ",rom:"di"},{ch:"づ",rom:"du"},{ch:"で",rom:"de"},{ch:"ど",rom:"do"}]},
          {label:"b-",color:"#E85D75",cells:[{ch:"ば",rom:"ba"},{ch:"び",rom:"bi"},{ch:"ぶ",rom:"bu"},{ch:"べ",rom:"be"},{ch:"ぼ",rom:"bo"}]},
          {label:"p-",color:"var(--purple-accent-text)",cells:[{ch:"ぱ",rom:"pa"},{ch:"ぴ",rom:"pi"},{ch:"ぷ",rom:"pu"},{ch:"ぺ",rom:"pe"},{ch:"ぽ",rom:"po"}]},
        ]}},
    ]},
    {id:"ja_katakana",title:"Katakana (カタカナ)",icon:"ア",desc:"46 base characters for foreign words & emphasis",items:[
      {fk:"fk_syllabary",title:"Katakana chart",desc:"Same sounds as hiragana but angular shapes. Used for loanwords (コーヒー coffee), emphasis, and onomatopoeia.",
        examples:[],
        grid:{cols:5,headers:["a","i","u","e","o"],rows:[
          {label:"∅",color:"var(--purple-accent-text)",cells:[{ch:"ア",rom:"a"},{ch:"イ",rom:"i"},{ch:"ウ",rom:"u"},{ch:"エ",rom:"e"},{ch:"オ",rom:"o"}]},
          {label:"k",color:"#4A8FE7",cells:[{ch:"カ",rom:"ka"},{ch:"キ",rom:"ki"},{ch:"ク",rom:"ku"},{ch:"ケ",rom:"ke"},{ch:"コ",rom:"ko"}]},
          {label:"s",color:"#2ECDAB",cells:[{ch:"サ",rom:"sa"},{ch:"シ",rom:"shi"},{ch:"ス",rom:"su"},{ch:"セ",rom:"se"},{ch:"ソ",rom:"so"}]},
          {label:"t",color:"#F5A623",cells:[{ch:"タ",rom:"ta"},{ch:"チ",rom:"chi"},{ch:"ツ",rom:"tsu"},{ch:"テ",rom:"te"},{ch:"ト",rom:"to"}]},
          {label:"n",color:"#E85D75",cells:[{ch:"ナ",rom:"na"},{ch:"ニ",rom:"ni"},{ch:"ヌ",rom:"nu"},{ch:"ネ",rom:"ne"},{ch:"ノ",rom:"no"}]},
          {label:"h",color:"var(--purple-accent-text)",cells:[{ch:"ハ",rom:"ha"},{ch:"ヒ",rom:"hi"},{ch:"フ",rom:"fu"},{ch:"ヘ",rom:"he"},{ch:"ホ",rom:"ho"}]},
          {label:"m",color:"#4A8FE7",cells:[{ch:"マ",rom:"ma"},{ch:"ミ",rom:"mi"},{ch:"ム",rom:"mu"},{ch:"メ",rom:"me"},{ch:"モ",rom:"mo"}]},
          {label:"y",color:"#2ECDAB",cells:[{ch:"ヤ",rom:"ya"},{ch:"",rom:""},{ch:"ユ",rom:"yu"},{ch:"",rom:""},{ch:"ヨ",rom:"yo"}]},
          {label:"r",color:"#F5A623",cells:[{ch:"ラ",rom:"ra"},{ch:"リ",rom:"ri"},{ch:"ル",rom:"ru"},{ch:"レ",rom:"re"},{ch:"ロ",rom:"ro"}]},
          {label:"w/n",color:"#E85D75",cells:[{ch:"ワ",rom:"wa"},{ch:"",rom:""},{ch:"ン",rom:"n"},{ch:"",rom:""},{ch:"ヲ",rom:"wo"}]},
        ]}},
      {fk:"fk_syllabary",title:"Long vowels in katakana",desc:"A dash ー extends the previous vowel. This is very common in loanwords.",
        examples:["コーヒー kōhī (coffee)","ケーキ kēki (cake)","ビール bīru (beer)"]},
      {fk:"fk_phonology",title:"Japanese pronunciation",desc:"Japanese has only 5 vowel sounds (a i u e o) and a simple CV syllable structure. Pitch accent (not stress) distinguishes some words. Double consonants (っ) create a pause.",
        examples:["はし hashi — 'chopsticks' or 'bridge' (pitch differs)","きって kitte (stamp) — っ = pause before t","おばさん obasan (aunt) vs おばあさん obaasan (grandmother) — vowel length matters"]},
      {fk:"fk_spelling_rules",title:"When to use which script",desc:"Hiragana: native Japanese words + grammar. Katakana: foreign loanwords + emphasis + onomatopoeia. Kanji: Chinese characters for content words. All three scripts mix in every sentence.",
        examples:["私はコーヒーを飲みます = kanji(私) + hiragana(は) + katakana(コーヒー) + hiragana(を) + kanji(飲) + hiragana(みます)"]},
    ]},
    {id:"ja_kanji",title:"Kanji (漢字) Introduction",icon:"漢",desc:"Chinese characters used in Japanese — what they are, how they work, and why they matter",items:[
      {fk:"fk_logographic",title:"What is kanji?",desc:"Kanji are Chinese characters adopted into Japanese. Each character represents a meaning (not just a sound). Japanese uses ~2,136 'daily use' kanji (常用漢字). At A1 you'll learn ~50-80. Unlike kana, kanji must be memorized individually — but radicals help.",
        examples:["山 = mountain (looks like a mountain!)","川 = river (looks like flowing water)","日 = sun / day","月 = moon / month","人 = person (looks like walking legs)"]},
      {fk:"fk_logographic",title:"On'yomi & Kun'yomi — two reading systems",desc:"Every kanji has at least two pronunciations. On'yomi (音読み) is the Chinese-derived reading, used in compound words. Kun'yomi (訓読み) is the native Japanese reading, used when the kanji stands alone. This is the single hardest thing about kanji.",
        examples:["山: on'yomi = サン (san), kun'yomi = やま (yama)","水: on'yomi = スイ (sui), kun'yomi = みず (mizu)","山水 (sanSUI = landscape) uses on'yomi","山 alone (yama = mountain) uses kun'yomi"]},
      {fk:"fk_logographic",title:"Basic radicals (部首)",desc:"Radicals are the building blocks of kanji. Learning ~30 common radicals lets you guess meaning and look up unfamiliar characters. The radical often sits on the left side and hints at the category.",
        grid:{cols:5,headers:["Radical","Meaning","","",""],rows:[
          {label:"Nature",color:"#4A8FE7",cells:[{ch:"日",rom:"sun/day"},{ch:"月",rom:"moon"},{ch:"水/氵",rom:"water"},{ch:"火/灬",rom:"fire"},{ch:"木",rom:"tree"}]},
          {label:"Human",color:"#2ECDAB",cells:[{ch:"人/亻",rom:"person"},{ch:"口",rom:"mouth"},{ch:"手/扌",rom:"hand"},{ch:"目",rom:"eye"},{ch:"心/忄",rom:"heart"}]},
          {label:"World",color:"#F5A623",cells:[{ch:"山",rom:"mountain"},{ch:"土",rom:"earth"},{ch:"石",rom:"stone"},{ch:"金/釒",rom:"metal"},{ch:"田",rom:"rice field"}]},
        ]}},
      {fk:"fk_logographic",title:"Kanji + hiragana: how they work together",desc:"Kanji carry the core meaning. Hiragana endings (okurigana) show grammar — tense, politeness, negation. This is why you NEED hiragana before kanji. Without okurigana, you can't conjugate anything.",
        examples:["食べる (ta-beru) = eat: 食 = kanji 'eat' + べる = hiragana ending","食べます (ta-bemasu) = eat (polite): same kanji, different ending","食べない (ta-benai) = don't eat: same kanji, negative ending","The kanji 食 stays constant — hiragana changes the grammar"]},
    ]},
  ]},
  ko:{name:"Korean Foundations",icon:"🇰🇷",sections:[
    // ══════════════════════════════════════════════════════════════════
    // PHASE 0 — Orientation to Hangul as a block system
    // Notebook: "What a syllable block is, that blocks contain smaller
    // parts, reading is left-to-right / top-to-bottom within a block."
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p0_orientation",title:"Phase 0: The Block System",icon:"🧱",desc:"What is a syllable block? How Korean writing is assembled, not linear.",items:[
      // PRESERVED from ko_hangul
      {fk:"fk_syllabary",title:"How Hangul works",desc:"Letters combine into syllable blocks. Each block = initial consonant + vowel (+ optional final consonant). The block is read left-to-right, top-to-bottom.",
        grid:{cols:3,headers:["Block","Components","Sound"],rows:[
          {label:"CV",color:"#4A8FE7",cells:[{ch:"가",rom:"block"},{ch:"ㄱ + ㅏ",rom:"initial + vowel"},{ch:"ga",rom:"2 parts"}]},
          {label:"CVC",color:"#2ECDAB",cells:[{ch:"한",rom:"block"},{ch:"ㅎ + ㅏ + ㄴ",rom:"init + vow + final"},{ch:"han",rom:"3 parts"}]},
          {label:"CVC",color:"#F5A623",cells:[{ch:"글",rom:"block"},{ch:"ㄱ + ㅡ + ㄹ",rom:"init + vow + final"},{ch:"geul",rom:"3 parts"}]},
        ]}},
      // NEW from notebook
      {fk:"fk_syllabary",title:"Block slots: Start + Vowel + (Bottom)",desc:"Every block has slots: a Start slot (always a consonant), a Vowel zone, and an optional Bottom slot (받침).",
        grid:{cols:3,headers:["Pattern","Slots","Example"],rows:[
          {label:"CV",color:"#4A8FE7",cells:[{ch:"[C] + [V]",rom:"no final"},{ch:"Start + Vowel",rom:"2 slots"},{ch:"가",rom:"ga"}]},
          {label:"CVC",color:"#2ECDAB",cells:[{ch:"[C] + [V] + [C]",rom:"with final"},{ch:"Start + Vowel + Bottom",rom:"3 slots"},{ch:"한",rom:"han"}]},
          {label:"Note",color:"#F5A623",cells:[{ch:"ㅇ fills Start",rom:"for vowel syllables"},{ch:"아 = ㅇ + ㅏ",rom:"ㅇ is silent"},{ch:"아",rom:"a"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 1 — Core vowels as shapes and directions
    // Notebook: ㅣ ㅡ ㅏ ㅓ ㅗ ㅜ, vertical vs horizontal categorization
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p1_vowels",title:"Phase 1: Core Vowels",icon:"ㅏ",desc:"6 base vowels — their shapes determine how blocks are built",items:[
      // PRESERVED from ko_vowels — basic vowels grid
      {fk:"fk_syllabary",title:"Basic vowels",desc:"10 basic vowel letters. Vertical strokes (ㅏ ㅓ ㅣ) go to the right of the consonant, horizontal strokes (ㅗ ㅜ ㅡ) go below.",
        examples:[],
        grid:{cols:5,headers:["","","","",""],rows:[
          {label:"Bright",color:"#F5A623",cells:[{ch:"ㅏ",rom:"a"},{ch:"ㅑ",rom:"ya"},{ch:"ㅗ",rom:"o"},{ch:"ㅛ",rom:"yo"},{ch:"ㅣ",rom:"i"}]},
          {label:"Dark",color:"var(--purple-accent-text)",cells:[{ch:"ㅓ",rom:"eo"},{ch:"ㅕ",rom:"yeo"},{ch:"ㅜ",rom:"u"},{ch:"ㅠ",rom:"yu"},{ch:"ㅡ",rom:"eu"}]},
        ]}},
      // NEW from notebook — the 6 core vowels as contrast pairs
      {fk:"fk_syllabary",title:"The 6 core vowels (learn these first)",desc:"Start with 6 high-utility vowels. Learn them as contrast pairs: ㅣ vs ㅡ (vertical line vs horizontal line), ㅏ vs ㅓ (stroke right vs left), ㅗ vs ㅜ (stroke above vs below). Vowel shapes are systematic — not random.",
        grid:{cols:3,headers:["Pair 1","Pair 2","Pair 3"],rows:[
          {label:"Shape A",color:"#4A8FE7",cells:[{ch:"ㅣ",rom:"i (vertical)"},{ch:"ㅏ",rom:"a (stroke right)"},{ch:"ㅗ",rom:"o (stroke above)"}]},
          {label:"Shape B",color:"#E85D75",cells:[{ch:"ㅡ",rom:"eu (horizontal)"},{ch:"ㅓ",rom:"eo (stroke left)"},{ch:"ㅜ",rom:"u (stroke below)"}]},
        ]}},
      {fk:"fk_syllabary",title:"Vertical vs horizontal: the layout rule",desc:"Vowel direction determines block layout. Vertical vowels sit RIGHT of the consonant. Horizontal vowels sit BELOW the consonant.",
        grid:{cols:3,headers:["Type","Vowels","Block Layout"],rows:[
          {label:"Vertical",color:"#4A8FE7",cells:[{ch:"ㅏ ㅓ ㅣ",rom:"tall strokes"},{ch:"[C left][V right]",rom:"side by side"},{ch:"가 거 기",rom:"consonant left"}]},
          {label:"Horizontal",color:"#2ECDAB",cells:[{ch:"ㅗ ㅜ ㅡ",rom:"wide strokes"},{ch:"[C top][V bottom]",rom:"stacked"},{ch:"고 구 그",rom:"consonant on top"}]},
        ]}},
      {fk:"fk_syllabary",title:"Mirror traps: ㅏ/ㅓ and ㅗ/ㅜ",desc:"The most common beginner mistake: confusing mirror-image vowels. Always check the direction of the short stroke.",
        grid:{cols:4,headers:["ㅏ","ㅓ","ㅗ","ㅜ"],rows:[
          {label:"Sound",color:"#4A8FE7",cells:[{ch:"ㅏ",rom:"a"},{ch:"ㅓ",rom:"eo"},{ch:"ㅗ",rom:"o"},{ch:"ㅜ",rom:"u"}]},
          {label:"Stroke",color:"#F5A623",cells:[{ch:"→",rom:"points RIGHT"},{ch:"←",rom:"points LEFT"},{ch:"↑",rom:"points UP"},{ch:"↓",rom:"points DOWN"}]},
          {label:"Example",color:"#2ECDAB",cells:[{ch:"아",rom:"a"},{ch:"어",rom:"eo"},{ch:"오",rom:"o"},{ch:"우",rom:"u"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 2 — Silent ㅇ and first real blocks
    // Notebook: "Korean syllables must start with a consonant; ㅇ is
    // silent placeholder." First blocks: 아 어 오 우 으 이
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p2_ieung",title:"Phase 2: Silent ㅇ & First Blocks",icon:"ㅇ",desc:"The empty starter — how Korean handles vowel-initial syllables",items:[
      {fk:"fk_syllabary",title:"ㅇ is silent at the start",desc:"Korean rule: every block MUST begin with a consonant. When the syllable starts with a vowel sound, ㅇ fills the Start slot with NO sound.",
        grid:{cols:2,headers:["ㅇ at Start (SILENT)","ㅇ at Bottom (ng)"],rows:[
          {label:"Role",color:"#4A8FE7",cells:[{ch:"Silent placeholder",rom:"no sound"},{ch:"Nasal consonant",rom:"/ŋ/ sound"}]},
          {label:"Example",color:"#2ECDAB",cells:[{ch:"아",rom:"a (not nga)"},{ch:"앙",rom:"ang"}]},
          {label:"Example",color:"#F5A623",cells:[{ch:"이",rom:"i (not ngi)"},{ch:"잉",rom:"jing"}]},
        ]}},
      {fk:"fk_syllabary",title:"Your first 6 blocks",desc:"Using ㅇ + each core vowel, you can now read and write 6 real syllable blocks. These are the simplest possible Korean syllables.",
        grid:{cols:6,headers:["아","어","오","우","으","이"],rows:[
          {label:"Sound",color:"#4A8FE7",cells:[{ch:"아",rom:"a"},{ch:"어",rom:"eo"},{ch:"오",rom:"o"},{ch:"우",rom:"u"},{ch:"으",rom:"eu"},{ch:"이",rom:"i"}]},
          {label:"Build",color:"#2ECDAB",cells:[{ch:"ㅇ+ㅏ",rom:"vert: ㅇ left"},{ch:"ㅇ+ㅓ",rom:"vert: ㅇ left"},{ch:"ㅇ+ㅗ",rom:"horiz: ㅇ top"},{ch:"ㅇ+ㅜ",rom:"horiz: ㅇ top"},{ch:"ㅇ+ㅡ",rom:"horiz: ㅇ top"},{ch:"ㅇ+ㅣ",rom:"vert: ㅇ left"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 3 — First consonants: ㄱ ㄴ ㅁ ㅅ
    // Notebook: "Visually simple, create many CV blocks, high-frequency"
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p3_consonants1",title:"Phase 3: First Consonants ㄱ ㄴ ㅁ ㅅ",icon:"ㄱ",desc:"4 visually distinct consonants — now you can build many real syllables",items:[
      {fk:"fk_syllabary",title:"ㄱ (g/k)",desc:"A simple angular shape. One of the most common Korean consonants. Combined with 6 core vowels, you get: 가 거 고 구 그 기. Practice each CV block.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㄱ+",color:"#4A8FE7",cells:[{ch:"가",rom:"ga"},{ch:"거",rom:"geo"},{ch:"고",rom:"go"},{ch:"구",rom:"gu"},{ch:"그",rom:"geu"},{ch:"기",rom:"gi"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㄴ (n)",desc:"Shaped like an 'L'. Combined with 6 core vowels: 나 너 노 누 느 니. Watch out: ㄱ and ㄴ can look similar at beginner speed.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㄴ+",color:"#2ECDAB",cells:[{ch:"나",rom:"na"},{ch:"너",rom:"neo"},{ch:"노",rom:"no"},{ch:"누",rom:"nu"},{ch:"느",rom:"neu"},{ch:"니",rom:"ni"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅁ (m)",desc:"A square shape. Combined with 6 core vowels: 마 머 모 무 므 미. Watch out: ㅁ (square) and ㅇ (circle) are both 'boxy'  -  look at the corners.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㅁ+",color:"#F5A623",cells:[{ch:"마",rom:"ma"},{ch:"머",rom:"meo"},{ch:"모",rom:"mo"},{ch:"무",rom:"mu"},{ch:"므",rom:"meu"},{ch:"미",rom:"mi"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅅ (s)",desc:"A hat/tent shape. Combined with 6 core vowels: 사 서 소 수 스 시. Note: 시 sounds closer to 'shi' than 'si'  -  learn the Korean sound, not the romanization.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㅅ+",color:"#E85D75",cells:[{ch:"사",rom:"sa"},{ch:"서",rom:"seo"},{ch:"소",rom:"so"},{ch:"수",rom:"su"},{ch:"스",rom:"seu"},{ch:"시",rom:"si"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 4 — Second consonants: ㄷ ㅂ ㅈ ㅎ
    // Notebook: "Still no 받침, explicit discrimination practice"
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p4_consonants2",title:"Phase 4: More Consonants ㄷ ㅂ ㅈ ㅎ",icon:"ㅂ",desc:"4 more consonants — still CV blocks only, no batchim yet",items:[
      {fk:"fk_syllabary",title:"ㄷ (d/t)",desc:"Combined with 6 core vowels: 다 더 도 두 드 디. Contrast with ㄱ: ㄷ has a flat top.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㄷ+",color:"#4A8FE7",cells:[{ch:"다",rom:"da"},{ch:"더",rom:"deo"},{ch:"도",rom:"do"},{ch:"두",rom:"du"},{ch:"드",rom:"deu"},{ch:"디",rom:"di"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅂ (b/p)",desc:"Combined with 6 core vowels: 바 버 보 부 브 비. Watch out: ㅂ vs ㅁ  -  both look 'boxy' but ㅂ has vertical lines extending down.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㅂ+",color:"#2ECDAB",cells:[{ch:"바",rom:"ba"},{ch:"버",rom:"beo"},{ch:"보",rom:"bo"},{ch:"부",rom:"bu"},{ch:"브",rom:"beu"},{ch:"비",rom:"bi"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅈ (j)",desc:"Combined with 6 core vowels: 자 저 조 주 즈 지. Watch out: ㅈ vs ㅅ  -  ㅈ has an extra horizontal stroke on top of the ㅅ shape.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㅈ+",color:"#F5A623",cells:[{ch:"자",rom:"ja"},{ch:"저",rom:"jeo"},{ch:"조",rom:"jo"},{ch:"주",rom:"ju"},{ch:"즈",rom:"jeu"},{ch:"지",rom:"ji"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅎ (h)",desc:"Combined with 6 core vowels: 하 허 호 후 흐 히. ㅎ is distinctive  -  aim for one clean syllable, don't over-aspirate.",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㅎ+",color:"#E85D75",cells:[{ch:"하",rom:"ha"},{ch:"허",rom:"heo"},{ch:"호",rom:"ho"},{ch:"후",rom:"hu"},{ch:"흐",rom:"heu"},{ch:"히",rom:"hi"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 5 — The special ㄹ and multi-syllable reading
    // Notebook: "ㄹ needs dedicated time — early fossilization risk"
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p5_rieul",title:"Phase 5: The Special ㄹ",icon:"ㄹ",desc:"ㄹ gets its own phase — it's high-frequency and unfamiliar to most learners",items:[
      {fk:"fk_syllabary",title:"ㄹ (r/l)",desc:"ㄹ is its own sound category — don't force it into English 'r' or 'l'. It changes slightly depending on position, but at this stage just recognize the shape and map it to the Korean sound. Combined with 6 core vowels:",
        grid:{cols:6,headers:["a","eo","o","u","eu","i"],rows:[
          {label:"ㄹ+",color:"var(--purple-accent-text)",cells:[{ch:"라",rom:"ra"},{ch:"러",rom:"reo"},{ch:"로",rom:"ro"},{ch:"루",rom:"ru"},{ch:"르",rom:"reu"},{ch:"리",rom:"ri"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㄹ vs ㄴ discrimination",desc:"ㄹ and ㄴ are the most confused consonant pair. Practice minimal pairs.",
        grid:{cols:6,headers:["라","나","리","니","루","누"],rows:[
          {label:"Sound",color:"#4A8FE7",cells:[{ch:"라",rom:"ra"},{ch:"나",rom:"na"},{ch:"리",rom:"ri"},{ch:"니",rom:"ni"},{ch:"루",rom:"ru"},{ch:"누",rom:"nu"}]},
          {label:"Shape",color:"#F5A623",cells:[{ch:"ㄹ",rom:"wavy/complex"},{ch:"ㄴ",rom:"simple L"},{ch:"ㄹ",rom:"wavy/complex"},{ch:"ㄴ",rom:"simple L"},{ch:"ㄹ",rom:"wavy/complex"},{ch:"ㄴ",rom:"simple L"}]},
        ]}},
      {fk:"fk_syllabary",title:"Multi-syllable reading",desc:"Multiple blocks = multiple syllables. Read each block separately, left to right.",
        grid:{cols:4,headers:["나라","나무","머리","하마"],rows:[
          {label:"Blocks",color:"#4A8FE7",cells:[{ch:"나 + 라",rom:"2 blocks"},{ch:"나 + 무",rom:"2 blocks"},{ch:"머 + 리",rom:"2 blocks"},{ch:"하 + 마",rom:"2 blocks"}]},
          {label:"Sound",color:"#2ECDAB",cells:[{ch:"나라",rom:"na-ra"},{ch:"나무",rom:"na-mu"},{ch:"머리",rom:"meo-ri"},{ch:"하마",rom:"ha-ma"}]},
          {label:"Meaning",color:"#F5A623",cells:[{ch:"나라",rom:"country"},{ch:"나무",rom:"tree"},{ch:"머리",rom:"head"},{ch:"하마",rom:"hippo"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 6 — Batchim starter pack
    // Notebook: "Only stable finals: ㄴ ㅁ ㄹ ㅇ. ㅇ role-switch is key."
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p6_batchim",title:"Phase 6: Batchim Starter Pack",icon:"ㄴ",desc:"The bottom slot — introducing final consonants with the 4 safest ones first",items:[
      // PRESERVED from ko_batchim
      {fk:"fk_phonology",title:"What is 받침 (batchim)?",desc:"받침 is the final consonant at the bottom of a syllable block. Not every syllable has one.",
        grid:{cols:4,headers:["가","간","강","갈"],rows:[
          {label:"Batchim",color:"#4A8FE7",cells:[{ch:"—",rom:"none"},{ch:"ㄴ",rom:"[n]"},{ch:"ㅇ",rom:"[ng]"},{ch:"ㄹ",rom:"[l]"}]},
          {label:"Sound",color:"#2ECDAB",cells:[{ch:"가",rom:"ga"},{ch:"간",rom:"gan"},{ch:"강",rom:"gang"},{ch:"갈",rom:"gal"}]},
          {label:"Type",color:"#F5A623",cells:[{ch:"CV",rom:"open syllable"},{ch:"CVC",rom:"closed"},{ch:"CVC",rom:"closed"},{ch:"CVC",rom:"closed"}]},
        ]}},
      // NEW from notebook — stable finals
      {fk:"fk_phonology",title:"Stable batchim set: ㄴ ㅁ ㄹ ㅇ",desc:"Start with these 4 finals because they behave consistently. ㄴ always sounds [n], ㅁ always sounds [m], ㄹ always sounds [l], ㅇ always sounds [ng]. No surprises — no neutralization yet.",
        grid:{cols:4,headers:["ㄴ final","ㅁ final","ㄹ final","ㅇ final"],rows:[
          {label:"안-",color:"#4A8FE7",cells:[{ch:"안",rom:"an"},{ch:"암",rom:"am"},{ch:"알",rom:"al"},{ch:"앙",rom:"ang"}]},
          {label:"난-",color:"#2ECDAB",cells:[{ch:"난",rom:"nan"},{ch:"남",rom:"nam"},{ch:"날",rom:"nal"},{ch:"낭",rom:"nang"}]},
          {label:"만-",color:"#F5A623",cells:[{ch:"만",rom:"man"},{ch:"맘",rom:"mam"},{ch:"말",rom:"mal"},{ch:"망",rom:"mang"}]},
        ]}},
      {fk:"fk_phonology",title:"ㅇ role-switch: silent → ng",desc:"Same letter, completely different role depending on position.",
        grid:{cols:4,headers:["아","앙","이","잉"],rows:[
          {label:"Position",color:"#4A8FE7",cells:[{ch:"ㅇ at Start",rom:"SILENT"},{ch:"ㅇ at Bottom",rom:"NG sound"},{ch:"ㅇ at Start",rom:"SILENT"},{ch:"ㅇ at Bottom",rom:"NG sound"}]},
          {label:"Sound",color:"#2ECDAB",cells:[{ch:"아",rom:"a"},{ch:"앙",rom:"ang"},{ch:"이",rom:"i"},{ch:"잉",rom:"jing"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 7 — Complex vowels (systematic expansion)
    // Notebook: 4 micro-sets (7A–7D), built from base vowels
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_p7_complex",title:"Phase 7: Complex Vowels",icon:"ㅘ",desc:"11 compound vowels built systematically from the base vowels you already know",items:[
      // PRESERVED from ko_vowels — compound vowels grid
      {fk:"fk_syllabary",title:"Compound vowels",desc:"11 vowels formed by combining basic vowels.",
        examples:[],
        grid:{cols:6,headers:["","","","","",""],rows:[
          {label:"W-",color:"#2ECDAB",cells:[{ch:"ㅘ",rom:"wa"},{ch:"ㅙ",rom:"wae"},{ch:"ㅚ",rom:"oe"},{ch:"ㅝ",rom:"wo"},{ch:"ㅞ",rom:"we"},{ch:"ㅟ",rom:"wi"}]},
          {label:"Y-/Other",color:"#E85D75",cells:[{ch:"ㅐ",rom:"ae"},{ch:"ㅔ",rom:"e"},{ch:"ㅒ",rom:"yae"},{ch:"ㅖ",rom:"ye"},{ch:"ㅢ",rom:"ui"},{ch:"",rom:""}]},
        ]}},
      // NEW from notebook — the 4 micro-sets
      {fk:"fk_syllabary",title:"Set 7A: ㅐ and ㅔ (spelling distinction)",desc:"These two vowels sound very similar in modern Korean (both close to 'e'). Different spellings you must recognize.",
        grid:{cols:2,headers:["ㅐ (ae)","ㅔ (e)"],rows:[
          {label:"Built from",color:"#4A8FE7",cells:[{ch:"ㅏ + ㅣ",rom:"a + i combined"},{ch:"ㅓ + ㅣ",rom:"eo + i combined"}]},
          {label:"Example",color:"#2ECDAB",cells:[{ch:"개",rom:"gae (dog)"},{ch:"게",rom:"ge (crab)"}]},
          {label:"Example",color:"#F5A623",cells:[{ch:"내",rom:"nae (my)"},{ch:"네",rom:"ne (yes/your)"}]},
        ]}},
      {fk:"fk_syllabary",title:"Set 7B: ㅑ ㅕ ㅛ ㅠ (y-versions)",desc:"These are 'y-versions' of base vowels. Visually: they have an EXTRA short stroke compared to the base. ㅑ = ㅏ + extra stroke. ㅕ = ㅓ + extra stroke. ㅛ = ㅗ + extra stroke. ㅠ = ㅜ + extra stroke.",
        grid:{cols:4,headers:["Base","Y-version","Base","Y-version"],rows:[
          {label:"",color:"#F5A623",cells:[{ch:"ㅏ",rom:"a"},{ch:"ㅑ",rom:"ya"},{ch:"ㅗ",rom:"o"},{ch:"ㅛ",rom:"yo"}]},
          {label:"",color:"var(--purple-accent-text)",cells:[{ch:"ㅓ",rom:"eo"},{ch:"ㅕ",rom:"yeo"},{ch:"ㅜ",rom:"u"},{ch:"ㅠ",rom:"yu"}]},
        ]}},
      {fk:"fk_syllabary",title:"Set 7C: ㅘ ㅝ ㅚ ㅟ (combinations)",desc:"Built from ㅗ/ㅜ combined with ㅏ/ㅓ/ㅣ: ㅘ = ㅗ+ㅏ, ㅝ = ㅜ+ㅓ, ㅚ = ㅗ+ㅣ, ㅟ = ㅜ+ㅣ. Same placement rules apply — only the vowel shape changes.",
        grid:{cols:4,headers:["ㅘ","ㅝ","ㅚ","ㅟ"],rows:[
          {label:"Parts",color:"#2ECDAB",cells:[{ch:"ㅗ+ㅏ",rom:"wa"},{ch:"ㅜ+ㅓ",rom:"wo"},{ch:"ㅗ+ㅣ",rom:"oe"},{ch:"ㅜ+ㅣ",rom:"wi"}]},
          {label:"Block",color:"#4A8FE7",cells:[{ch:"와",rom:"wa"},{ch:"워",rom:"wo"},{ch:"외",rom:"oe"},{ch:"위",rom:"wi"}]},
        ]}},
      {fk:"fk_syllabary",title:"Set 7D: ㅙ ㅞ ㅢ ㅒ ㅖ (most complex)",desc:"The densest vowels, saved for last. Rare but you must recognize them.",
        grid:{cols:5,headers:["ㅙ","ㅞ","ㅢ","ㅒ","ㅖ"],rows:[
          {label:"Built from",color:"#4A8FE7",cells:[{ch:"ㅗ+ㅏ+ㅣ",rom:"triple"},{ch:"ㅜ+ㅓ+ㅣ",rom:"triple"},{ch:"ㅡ+ㅣ",rom:"double"},{ch:"ㅑ+ㅣ",rom:"double"},{ch:"ㅕ+ㅣ",rom:"double"}]},
          {label:"Sound",color:"#2ECDAB",cells:[{ch:"wae",rom:"/wɛ/"},{ch:"we",rom:"/we/"},{ch:"ui",rom:"/ɰi/"},{ch:"yae",rom:"/jɛ/"},{ch:"ye",rom:"/je/"}]},
          {label:"Example",color:"#F5A623",cells:[{ch:"왜",rom:"why"},{ch:"웨",rom:"rare"},{ch:"의",rom:"possessive"},{ch:"얘",rom:"this kid"},{ch:"예",rom:"yes/example"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // PHASE 8 — Aspirated consonants (ㅋ ㅌ ㅍ ㅊ)
    // PHASE 9 — Tense/ssang consonants (ㄲ ㄸ ㅃ ㅆ ㅉ)
    // PHASE 10 — Sound rules: 7 final sounds, liaison, nasalization, aspiration
    // Notebook: ㅋㅌㅍㅊ, ㄲㄸㅃㅆㅉ, 7 final sounds, liaison/nasal/etc
    // ══════════════════════════════════════════════════════════════════
        {id:"ko_p8_1",title:"8.1 All Consonant Types",icon:"ㅋ",desc:"Basic, aspirated, and tense consonants — the complete set",items:[
        
        {fk:"fk_syllabary",title:"All 14 basic consonants",desc:"14 basic consonant letters (자음). The shapes were designed to represent tongue/mouth position.",
        examples:[],
        grid:{cols:7,headers:["","","","","","",""],rows:[
          {label:"Plain",color:"#4A8FE7",cells:[{ch:"ㄱ",rom:"g"},{ch:"ㄴ",rom:"n"},{ch:"ㄷ",rom:"d"},{ch:"ㄹ",rom:"r/l"},{ch:"ㅁ",rom:"m"},{ch:"ㅂ",rom:"b"},{ch:"ㅅ",rom:"s"}]},
          {label:"Other",color:"#2ECDAB",cells:[{ch:"ㅇ",rom:"ng"},{ch:"ㅈ",rom:"j"},{ch:"ㅊ",rom:"ch"},{ch:"ㅋ",rom:"k"},{ch:"ㅌ",rom:"t"},{ch:"ㅍ",rom:"p"},{ch:"ㅎ",rom:"h"}]},
        ]}},
      // NEW — aspirated as "+stroke" pattern,
        {fk:"fk_syllabary",title:"Aspirated consonants: add a stroke",desc:"4 aspirated consonants are made by adding an extra stroke to a plain consonant. This is a visual pattern, not random memorization: ㄱ→ㅋ, ㄷ→ㅌ, ㅂ→ㅍ, ㅈ→ㅊ.",
        grid:{cols:4,headers:["Plain","Aspirated","Plain","Aspirated"],rows:[
          {label:"",color:"#4A8FE7",cells:[{ch:"ㄱ",rom:"g"},{ch:"ㅋ",rom:"k"},{ch:"ㄷ",rom:"d"},{ch:"ㅌ",rom:"t"}]},
          {label:"",color:"#2ECDAB",cells:[{ch:"ㅂ",rom:"b"},{ch:"ㅍ",rom:"p"},{ch:"ㅈ",rom:"j"},{ch:"ㅊ",rom:"ch"}]},
        ]}},
      // PRESERVED — double consonants grid,
        {fk:"fk_syllabary",title:"Tense consonants: double the letter",desc:"5 tense/double consonants made by doubling a basic consonant. They have a stronger, tenser sound — distinct categories, not 'just louder.'",
        examples:[],
        grid:{cols:5,headers:["","","","",""],rows:[
          {label:"Tense",color:"#E85D75",cells:[{ch:"ㄲ",rom:"kk"},{ch:"ㄸ",rom:"tt"},{ch:"ㅃ",rom:"pp"},{ch:"ㅆ",rom:"ss"},{ch:"ㅉ",rom:"jj"}]},
        ]}},
      // PRESERVED — batchim neutralization grid,
      
      ]},
    {id:"ko_p8_2",title:"8.2 Batchim Rules",icon:"ㅋ",desc:"The 7 final sounds, batchim in real words, and liaison",items:[
        
        {fk:"fk_phonology",title:"The 7 final sounds (batchim neutralization)",desc:"Only 7 sounds are possible as batchim, regardless of which consonant is written. Multiple consonants merge into the same final sound. This is the single most important Korean pronunciation rule.",
        grid:{cols:7,headers:["[k]","[n]","[t]","[l]","[m]","[p]","[ng]"],rows:[
          {label:"Written",color:"#4A8FE7",cells:[{ch:"ㄱ ㄲ ㅋ",rom:"→ [k]"},{ch:"ㄴ",rom:"→ [n]"},{ch:"ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ",rom:"→ [t]"},{ch:"ㄹ",rom:"→ [l]"},{ch:"ㅁ",rom:"→ [m]"},{ch:"ㅂ ㅍ",rom:"→ [p]"},{ch:"ㅇ",rom:"→ [ng]"}]},
        ]}},
      // PRESERVED — batchim real words,
        {fk:"fk_phonology",title:"Batchim in real words",desc:"Different written consonants produce the same final sound (neutralization).",
        grid:{cols:5,headers:["부엌","옷","밥","꽃","한국"],rows:[
          {label:"Written",color:"#4A8FE7",cells:[{ch:"ㅋ",rom:"batchim"},{ch:"ㅅ",rom:"batchim"},{ch:"ㅂ",rom:"batchim"},{ch:"ㅊ",rom:"batchim"},{ch:"ㄱ",rom:"batchim"}]},
          {label:"Sounds as",color:"#F5A623",cells:[{ch:"[k]",rom:"neutralized"},{ch:"[t]",rom:"neutralized"},{ch:"[p]",rom:"neutralized"},{ch:"[t]",rom:"neutralized"},{ch:"[k]",rom:"neutralized"}]},
          {label:"Full",color:"#2ECDAB",cells:[{ch:"부엌",rom:"bu-eok"},{ch:"옷",rom:"ot"},{ch:"밥",rom:"bap"},{ch:"꽃",rom:"kkot"},{ch:"한국",rom:"han-guk"}]},
        ]}},
      // NEW — sound-change rules (recognition only, max 6 examples),
        {fk:"fk_phonology",title:"Sound rule 1: Liaison (연음)",desc:"When batchim meets ㅇ-initial next syllable, the consonant sound moves forward.",
        grid:{cols:4,headers:["한국어","먹어","일요일","읽어"],rows:[
          {label:"Written",color:"#4A8FE7",cells:[{ch:"한국어",rom:"3 blocks"},{ch:"먹어",rom:"2 blocks"},{ch:"일요일",rom:"3 blocks"},{ch:"읽어",rom:"2 blocks"}]},
          {label:"Spoken",color:"#2ECDAB",cells:[{ch:"한구거",rom:"han-gu-geo"},{ch:"머거",rom:"meo-geo"},{ch:"이료일",rom:"i-ryo-il"},{ch:"일거",rom:"il-geo"}]},
          {label:"Rule",color:"#F5A623",cells:[{ch:"ㄱ→거",rom:"ㄱ moves"},{ch:"ㄱ→거",rom:"ㄱ moves"},{ch:"ㄹ→료",rom:"ㄹ moves"},{ch:"ㄱ→거",rom:"ㄱ moves"}]},
        ]}},
      
      ]},
    {id:"ko_p8_3",title:"8.3 Sound Changes",icon:"ㅋ",desc:"Nasalization, tensing, and the full sound change summary",items:[
        
        {fk:"fk_phonology",title:"Sound rule 2: Nasalization",desc:"Before ㄴ/ㅁ, stop consonants become nasal: ㄱ→ㅇ, ㄷ→ㄴ, ㅂ→ㅁ.",
        grid:{cols:3,headers:["학년","받는","합니다"],rows:[
          {label:"Written",color:"#4A8FE7",cells:[{ch:"학년",rom:"hak-nyeon"},{ch:"받는",rom:"bat-neun"},{ch:"합니다",rom:"hap-ni-da"}]},
          {label:"Change",color:"#F5A623",cells:[{ch:"ㄱ → ㅇ",rom:"before ㄴ"},{ch:"ㄷ → ㄴ",rom:"before ㄴ"},{ch:"ㅂ → ㅁ",rom:"before ㄴ"}]},
          {label:"Spoken",color:"#2ECDAB",cells:[{ch:"항년",rom:"hang-nyeon"},{ch:"반는",rom:"ban-neun"},{ch:"함니다",rom:"ham-ni-da"}]},
        ]}},
      // PRESERVED — sound changes summary,
        {fk:"fk_phonology",title:"Korean sound changes (summary)",desc:"All major sound rules in one reference table.",
        grid:{cols:3,headers:["Rule","Trigger","Result"],rows:[
          {label:"Liaison",color:"#4A8FE7",cells:[{ch:"연음",rom:"liaison"},{ch:"Batchim + ㅇ next",rom:"final meets silent ㅇ"},{ch:"Consonant moves",rom:"한국어→한구거"}]},
          {label:"Nasal",color:"#2ECDAB",cells:[{ch:"비음화",rom:"nasalization"},{ch:"ㄱ/ㄷ/ㅂ + ㄴ/ㅁ",rom:"stop meets nasal"},{ch:"Stop → nasal",rom:"합니다→함니다"}]},
          {label:"Neutral",color:"#F5A623",cells:[{ch:"중화",rom:"neutralization"},{ch:"Any batchim",rom:"at syllable end"},{ch:"Only 7 sounds",rom:"[k][n][t][l][m][p][ng]"}]},
          {label:"Tensing",color:"var(--purple-accent-text)",cells:[{ch:"경음화",rom:"tensification"},{ch:"Specific combos",rom:"recognition only"},{ch:"Plain → tense",rom:"국밥→국빱"}]},
        ]}},
        {fk:"fk_phonology",title:"Sound rule 3: Tensing & other rules (recognition only)",desc:"Additional sound changes to RECOGNIZE, not memorize.",
        grid:{cols:3,headers:["Rule","Example","Result"],rows:[
          {label:"Tensing",color:"#4A8FE7",cells:[{ch:"경음화",rom:"tensification"},{ch:"국밥",rom:"guk + bap"},{ch:"국빱",rom:"guk-ppap"}]},
          {label:"ㅎ drop",color:"#2ECDAB",cells:[{ch:"ㅎ deletion",rom:"ㅎ disappears"},{ch:"좋아",rom:"joh + a"},{ch:"조아",rom:"jo-a"}]},
          {label:"Palatal",color:"#F5A623",cells:[{ch:"구개음화",rom:"palatalization"},{ch:"같이",rom:"gat + i"},{ch:"가치",rom:"ga-chi"}]},
        ]}},
      
      ]},
    // PRESERVED from ko_vowels — syllable block assembly (now at end as reference)
    {id:"ko_ref_assembly",title:"Reference: Syllable Block Assembly",icon:"🔧",desc:"Quick reference for block-building patterns",items:[
      {fk:"fk_spelling_rules",title:"Syllable block assembly",desc:"Every Korean syllable block follows one of these patterns.",
        grid:{cols:3,headers:["CV Block","CVC Block","With Batchim"],rows:[
          {label:"Pattern",color:"#4A8FE7",cells:[{ch:"[C] + [V]",rom:"2 parts"},{ch:"[C] + [V] + [C]",rom:"3 parts"},{ch:"Initial + Vowel + Final",rom:"full block"}]},
          {label:"Vertical V",color:"#2ECDAB",cells:[{ch:"가",rom:"ㄱ left, ㅏ right"},{ch:"간",rom:"ㄱ left, ㅏ right, ㄴ bottom"},{ch:"[C][V] side by side",rom:"+ bottom"}]},
          {label:"Horizontal V",color:"#F5A623",cells:[{ch:"고",rom:"ㄱ top, ㅗ bottom"},{ch:"곤",rom:"ㄱ top, ㅗ mid, ㄴ bottom"},{ch:"[C][V] stacked",rom:"+ bottom"}]},
        ]}},
    ]},
    // ══════════════════════════════════════════════════════════════════
    // TIPS — Consolidated from phases (Manifesto P12: tips in one place)
    // ══════════════════════════════════════════════════════════════════
    {id:"ko_tips",title:"⚠️ Common Mistakes & Tips",icon:"💡",desc:"Collected pitfalls from each learning phase — reference when stuck",items:[
      {fk:"fk_syllabary",title:"Blocks ≠ single letters",desc:"Each block is ASSEMBLED from parts. □ = one syllable, □□ = two syllables (not two letters). Don't treat 한 as one symbol  -  it's ㅎ + ㅏ + ㄴ.",
        grid:{cols:3,headers:["✗ Wrong","✓ Right","Why"],rows:[
          {label:"Reading",color:"#E85D75",cells:[{ch:"한 = 1 symbol",rom:"picture-reading"},{ch:"한 = ㅎ+ㅏ+ㄴ",rom:"decode parts"},{ch:"Blocks have slots",rom:"always decompose"}]},
          {label:"Boundary",color:"#F5A623",cells:[{ch:"한글 = 1 unit",rom:"blending across"},{ch:"한 + 글 = 2 blocks",rom:"each □ = 1 syllable"},{ch:"Square = boundary",rom:"never blend"}]},
        ]}},
      {fk:"fk_syllabary",title:"ㅇ mistakes",desc:"The #1 beginner trap: ㅇ at the start is SILENT — never say 'ng'. And every syllable needs ㅇ in the start slot if no consonant.",
        grid:{cols:2,headers:["✗ Wrong","✓ Right"],rows:[
          {label:"Sound",color:"#E85D75",cells:[{ch:"아 = 'nga'",rom:"pronouncing ㅇ"},{ch:"아 = 'a'",rom:"ㅇ is silent here"}]},
          {label:"Writing",color:"#F5A623",cells:[{ch:"ㅏ alone",rom:"vowel without block"},{ch:"아 (ㅇ+ㅏ)",rom:"always fill start slot"}]},
        ]}},
      {fk:"fk_syllabary",title:"Look-alike consonants",desc:"The most confused pairs. Focus on the defining visual feature.",
        grid:{cols:4,headers:["Pair 1","Pair 2","Pair 3","Pair 4"],rows:[
          {label:"Letters",color:"#4A8FE7",cells:[{ch:"ㄱ vs ㄴ",rom:"angles"},{ch:"ㅁ vs ㅇ",rom:"shape"},{ch:"ㅂ vs ㅁ",rom:"boxy"},{ch:"ㅈ vs ㅅ",rom:"strokes"}]},
          {label:"Tell apart",color:"#2ECDAB",cells:[{ch:"ㄱ: right-down",rom:"ㄴ: L-shape up"},{ch:"ㅁ: square",rom:"ㅇ: circle"},{ch:"ㅂ: open legs",rom:"ㅁ: closed box"},{ch:"ㅈ: bar on top",rom:"ㅅ: tent only"}]},
        ]}},
    ]},
  ]},
  zh:{name:"Chinese Foundations",icon:"🇨🇳",sections:[
    {id:"zh_pinyin",title:"Pinyin & Tones",icon:"拼",desc:"Romanization system with 4 tones + neutral",items:[
      {fk:"fk_romanization",title:"Pinyin",desc:"The official romanization of Mandarin. Essential for typing, pronunciation, and dictionary lookup.",examples:["nǐ hǎo (你好 — hello)"]},
      {fk:"fk_tone_system",title:"Four Tones",desc:"Tone 1: high flat (mā), Tone 2: rising (má), Tone 3: dipping (mǎ), Tone 4: falling (mà). Wrong tone = wrong word.",examples:["mā (mom) má (hemp) mǎ (horse) mà (scold)"]},
      {fk:"fk_tone_system",title:"Tone grid",desc:"Each syllable carries one of four tones (plus a neutral tone). Here is 'ma' in all tones:",
        examples:[],
        grid:{cols:5,headers:["Tone 1","Tone 2","Tone 3","Tone 4","Neutral"],rows:[
          {label:"mā",color:"#4A8FE7",cells:[{ch:"mā",rom:"flat ‾"},{ch:"má",rom:"rising /"},{ch:"mǎ",rom:"dip ∨"},{ch:"mà",rom:"fall \\"},{ch:"ma",rom:"neutral ·"}]},
          {label:"shī",color:"#2ECDAB",cells:[{ch:"shī",rom:"teacher"},{ch:"shí",rom:"ten"},{ch:"shǐ",rom:"history"},{ch:"shì",rom:"yes"},{ch:"shi",rom:"(particle)"}]},
        ]}},
    ]},
    {id:"zh_initials",title:"Pinyin Initials",icon:"声",desc:"21 consonant sounds that start syllables",items:[
      {fk:"fk_romanization",title:"Pinyin initial consonants",desc:"Mandarin has 21 initials. Some sound very different from English! Pay special attention to: zh/ch/sh (retroflex), z/c/s (dental), and q/x (palatal).",
        examples:[],
        grid:{cols:7,headers:["","","","","","",""],rows:[
          {label:"Labial",color:"#4A8FE7",cells:[{ch:"b",rom:"/p/"},{ch:"p",rom:"/pʰ/"},{ch:"m",rom:"/m/"},{ch:"f",rom:"/f/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"Dental",color:"#2ECDAB",cells:[{ch:"d",rom:"/t/"},{ch:"t",rom:"/tʰ/"},{ch:"n",rom:"/n/"},{ch:"l",rom:"/l/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"Velar",color:"#F5A623",cells:[{ch:"g",rom:"/k/"},{ch:"k",rom:"/kʰ/"},{ch:"h",rom:"/x/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"Palatal",color:"#E85D75",cells:[{ch:"j",rom:"/tɕ/"},{ch:"q",rom:"/tɕʰ/"},{ch:"x",rom:"/ɕ/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"Retro",color:"var(--purple-accent-text)",cells:[{ch:"zh",rom:"/tʂ/"},{ch:"ch",rom:"/tʂʰ/"},{ch:"sh",rom:"/ʂ/"},{ch:"r",rom:"/ɻ/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"Sibilant",color:"#4A8FE7",cells:[{ch:"z",rom:"/ts/"},{ch:"c",rom:"/tsʰ/"},{ch:"s",rom:"/s/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
        ]}},
      {fk:"fk_phonology",title:"Tone sandhi & finals",desc:"Tone 3 + Tone 3 → Tone 2 + Tone 3 (e.g., 你好 nǐhǎo → níhǎo). Finals include -n (front nasal) vs -ng (back nasal), and -ü (only after j/q/x/l/n). Mandarin has ~400 possible syllables (× 4 tones ≈ 1600).",
        examples:["你好 nǐhǎo → actually pronounced níhǎo — tone 3 sandhi","不 bù changes to bú before tone 4: 不是 búshì","-an /an/ vs -ang /aŋ/: 三 sān vs 桑 sāng"]},
      {fk:"fk_spelling_rules",title:"Radicals & character structure",desc:"Chinese characters are built from ~214 radicals (building blocks). The radical often hints at meaning: 氵(water) appears in 河 (river), 海 (sea), 洗 (wash). Knowing radicals helps guess meaning and look up characters.",
        examples:["木 (wood) → 林 (forest) → 森 (dense forest)","氵(water) → 河 (river), 海 (sea), 洗 (wash)","口 (mouth) → 吃 (eat), 喝 (drink), 唱 (sing)"]},
    ]},
    {id:"zh_finals",title:"Pinyin Finals (韵母)",icon:"韵",desc:"The vowel combinations that complete every Mandarin syllable — equally important as initials",items:[
      {fk:"fk_romanization",title:"Simple finals",desc:"6 basic vowels that can stand alone or combine with initials. These are the building blocks of all other finals. Note: 'ü' only appears after j, q, x, l, n (written as 'u' after j/q/x).",
        grid:{cols:6,headers:["a","o","e","i","u","ü"],rows:[
          {label:"Sound",color:"#4A8FE7",cells:[{ch:"a",rom:"/a/"},{ch:"o",rom:"/o/"},{ch:"e",rom:"/ɤ/"},{ch:"i",rom:"/i/"},{ch:"u",rom:"/u/"},{ch:"ü",rom:"/y/"}]},
          {label:"Example",color:"#2ECDAB",cells:[{ch:"八 bā",rom:"eight"},{ch:"波 bō",rom:"wave"},{ch:"得 dé",rom:"get"},{ch:"笔 bǐ",rom:"pen"},{ch:"五 wǔ",rom:"five"},{ch:"鱼 yú",rom:"fish"}]},
        ]}},
      {fk:"fk_romanization",title:"Compound finals",desc:"Two or three vowels combined. These are the sounds English speakers find hardest. Pay special attention to: -iu (actually -iou), -ui (actually -uei), and -ün (actually -üen).",
        grid:{cols:5,headers:["","","","",""],rows:[
          {label:"a-series",color:"#4A8FE7",cells:[{ch:"ai",rom:"/ai/"},{ch:"ao",rom:"/au/"},{ch:"an",rom:"/an/"},{ch:"ang",rom:"/aŋ/"},{ch:"",rom:""}]},
          {label:"e-series",color:"#2ECDAB",cells:[{ch:"ei",rom:"/ei/"},{ch:"en",rom:"/ən/"},{ch:"eng",rom:"/əŋ/"},{ch:"er",rom:"/əɻ/"},{ch:"",rom:""}]},
          {label:"i-series",color:"#F5A623",cells:[{ch:"ia",rom:"/ia/"},{ch:"iao",rom:"/iau/"},{ch:"ian",rom:"/iɛn/"},{ch:"iang",rom:"/iaŋ/"},{ch:"ie",rom:"/iɛ/"}]},
          {label:"i- cont.",color:"#F5A623",cells:[{ch:"in",rom:"/in/"},{ch:"ing",rom:"/iŋ/"},{ch:"iu",rom:"/iou/"},{ch:"iong",rom:"/yŋ/"},{ch:"",rom:""}]},
          {label:"u-series",color:"#E85D75",cells:[{ch:"ua",rom:"/ua/"},{ch:"uai",rom:"/uai/"},{ch:"uan",rom:"/uan/"},{ch:"uang",rom:"/uaŋ/"},{ch:"uo",rom:"/uo/"}]},
          {label:"u- cont.",color:"#E85D75",cells:[{ch:"ui",rom:"/uei/"},{ch:"un",rom:"/uən/"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          {label:"ü-series",color:"var(--purple-accent-text)",cells:[{ch:"üe",rom:"/yɛ/"},{ch:"üan",rom:"/yɛn/"},{ch:"ün",rom:"/yn/"},{ch:"",rom:""},{ch:"",rom:""}]},
        ]}},
      {fk:"fk_romanization",title:"The -n vs -ng trap",desc:"The difference between -n (tongue touches front teeth) and -ng (tongue stays back, nasal) is the #1 pronunciation mistake for English speakers. Mixing them up changes the word entirely.",
        examples:["三 sān (three) vs 桑 sāng (mulberry) — different final","新 xīn (new) vs 星 xīng (star) — n vs ng","ban vs bang, pin vs ping, min vs ming — always distinct"]},
      {fk:"fk_writing",title:"Stroke order basics",desc:"Characters must be written in a specific stroke order. The rules are consistent: left before right, top before bottom, outside before inside, horizontal before vertical. Correct stroke order makes characters look right and enables handwriting recognition.",
        examples:["一 (one) = 1 stroke: left → right","十 (ten) = 2 strokes: horizontal first, then vertical","人 (person) = 2 strokes: left-falling, then right-falling","三 (three) = 3 strokes: top → middle → bottom"]},
    ]},
  ]},
  // ── French Foundations (Pipeline Step 2 — placeholder) ──
  fr:{name:"French Foundations",icon:"🇫🇷",sections:[
    // ══════════════════════════════════════════════════════════════
    // FRENCH FOUNDATIONS KNOWLEDGE — Reference Library
    // 6 sections, ~25 items. Color key:
    // vowels=#E85D75, consonants=#2ECDAB, tricky=#F5A623,
    // special=#4A8FE7, grammar=#7B5EE8
    // ══════════════════════════════════════════════════════════════

    // ─────────── 1. THE ALPHABET & SPECIAL CHARACTERS ───────────
    {id:"fr_alphabet",title:"The Alphabet & Special Characters",icon:"🔤",desc:"26 letters plus accent marks and cedilla. Accents change pronunciation and meaning.",
      items:[
        {fk:"fk_alphabet_overview",title:"French letter grid",audio_id:null,
          desc:"Same 26 Latin letters as English. French adds accent marks (é, è, ê, ë, à, â, ù, û, ô, î, ï) and cedilla (ç). Letter names differ from English.",
          grid:{cols:9,headers:["","","","","","","","",""],rows:[
            {label:"A-I",color:"#002395",cells:[{ch:"A",rom:"ah"},{ch:"B",rom:"bay"},{ch:"C",rom:"say"},{ch:"D",rom:"day"},{ch:"E",rom:"uh"},{ch:"F",rom:"eff"},{ch:"G",rom:"zhay"},{ch:"H",rom:"ahsh"},{ch:"I",rom:"ee"}]},
            {label:"J-R",color:"#ED2939",cells:[{ch:"J",rom:"zhee"},{ch:"K",rom:"kah"},{ch:"L",rom:"ell"},{ch:"M",rom:"emm"},{ch:"N",rom:"enn"},{ch:"O",rom:"oh"},{ch:"P",rom:"pay"},{ch:"Q",rom:"kew"},{ch:"R",rom:"air"}]},
            {label:"S-Z",color:"#002395",cells:[{ch:"S",rom:"ess"},{ch:"T",rom:"tay"},{ch:"U",rom:"ew"},{ch:"V",rom:"vay"},{ch:"W",rom:"doo-bluh-vay"},{ch:"X",rom:"eeks"},{ch:"Y",rom:"ee-grek"},{ch:"Z",rom:"zed"},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_accents",title:"The five accent marks",audio_id:null,
          desc:"French uses 5 diacritical marks. Each one changes pronunciation or distinguishes homophones.",
          grid:{cols:3,headers:["Accent","Effect","Examples"],rows:[
            {label:"Acute",color:"#E85D75",cells:[{ch:"é (accent aigu)",rom:""},{ch:"Closed e sound: ay",rom:""},{ch:"café, étudiant, été",rom:""}]},
            {label:"Grave",color:"#F5A623",cells:[{ch:"è, à, ù (accent grave)",rom:""},{ch:"Open e (eh), or distinguishes words",rom:""},{ch:"crème, père, là, où",rom:""}]},
            {label:"Circumflex",color:"#4A8FE7",cells:[{ch:"ê, â, î, ô, û (accent circonflexe)",rom:""},{ch:"Historical marker, can affect sound",rom:""},{ch:"être, hôtel, fête, île",rom:""}]},
            {label:"Diaeresis",color:"#2ECDAB",cells:[{ch:"ë, ï, ü (tréma)",rom:""},{ch:"Pronounce both vowels separately",rom:""},{ch:"Noël, naïf, Saül",rom:""}]},
            {label:"Cedilla",color:"#7B5EE8",cells:[{ch:"ç (cédille)",rom:""},{ch:"Forces S sound before a, o, u",rom:""},{ch:"français, garçon, reçu",rom:""}]},
          ]}},
        {fk:"fk_alphabet_overview",title:"Letters that trap English speakers",audio_id:null,
          desc:"Several French letters look like English but sound different. H is always silent. R is from the throat.",
          grid:{cols:3,headers:["Letter","French sound","English trap to avoid"],rows:[
            {label:"H",color:"#F5A623",cells:[{ch:"H",rom:"h"},{ch:"ALWAYS silent",rom:"homme = omm"},{ch:"NOT like English hat",rom:""}]},
            {label:"R",color:"#F5A623",cells:[{ch:"R",rom:"r"},{ch:"Uvular, from back of throat",rom:"rouge = roozh"},{ch:"NOT like English run",rom:""}]},
            {label:"U",color:"#F5A623",cells:[{ch:"U",rom:"u"},{ch:"Rounded: say ee with round lips",rom:"tu = tew"},{ch:"NOT like English oo",rom:""}]},
            {label:"J",color:"#F5A623",cells:[{ch:"J",rom:"j"},{ch:"ZH sound: like s in pleasure",rom:"je = zhuh"},{ch:"NOT like English jump",rom:""}]},
            {label:"G (before e,i)",color:"#F5A623",cells:[{ch:"G",rom:"g"},{ch:"ZH sound before e and i",rom:"manger = mahn-ZHAY"},{ch:"NOT like English get",rom:""}]},
          ]}},
        {fk:"fk_alphabet_overview",title:"C and G: two sounds each",audio_id:null,
          desc:"C and G each have a hard and soft sound, determined by the vowel that follows.",
          grid:{cols:3,headers:["Letter + following vowel","Sound","Examples"],rows:[
            {label:"C + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard C",rom:""},{ch:"K sound",rom:""},{ch:"café, comment, culture",rom:""}]},
            {label:"C + e, i",color:"#E85D75",cells:[{ch:"Soft C",rom:""},{ch:"S sound",rom:""},{ch:"centre, cinéma, merci",rom:""}]},
            {label:"G + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard G",rom:""},{ch:"G sound as in go",rom:""},{ch:"gare, gomme, aigu",rom:""}]},
            {label:"G + e, i",color:"#E85D75",cells:[{ch:"Soft G",rom:""},{ch:"ZH sound",rom:""},{ch:"manger, fragile, rouge",rom:""}]},
          ]}},
      ]},

    // ─────────── 2. VOWELS: ORAL & NASAL ───────────
    {id:"fr_vowels",title:"Vowels: Oral & Nasal",icon:"🔊",desc:"Oral vowels, nasal vowels, and the tricky U vs OU distinction",
      items:[
        {fk:"fk_vowel_grid",title:"The oral vowel system",audio_id:null,
          desc:"French has more vowel sounds than English. The key ones: open vs closed E, open vs closed O, and the rounded U.",
          grid:{cols:3,headers:["Vowel","Sound","Examples"],rows:[
            {label:"a / à / â",color:"#E85D75",cells:[{ch:"a",rom:"ah"},{ch:"Open ah as in father",rom:""},{ch:"chat, table, là, pâte",rom:""}]},
            {label:"é / er / ez",color:"#F5A623",cells:[{ch:"é",rom:"ay"},{ch:"Closed ay as in say",rom:""},{ch:"café, parler, allez",rom:""}]},
            {label:"è / ê / ai / ei",color:"#4A8FE7",cells:[{ch:"è",rom:"eh"},{ch:"Open eh as in bed",rom:""},{ch:"mère, fête, lait, neige",rom:""}]},
            {label:"i / î / y",color:"#2ECDAB",cells:[{ch:"i",rom:"ee"},{ch:"Like ee in see",rom:""},{ch:"ici, île, stylo",rom:""}]},
            {label:"o / ô / au / eau",color:"#E85D75",cells:[{ch:"o",rom:"oh"},{ch:"Closed oh",rom:""},{ch:"mot, hôtel, auto, beau",rom:""}]},
            {label:"ou",color:"#F5A623",cells:[{ch:"ou",rom:"oo"},{ch:"Like oo in food",rom:""},{ch:"vous, toujours, rouge",rom:""}]},
            {label:"u / û",color:"#7B5EE8",cells:[{ch:"u",rom:"ew"},{ch:"Say ee with rounded lips. NOT oo.",rom:""},{ch:"tu, rue, lune, sûr",rom:""}]},
          ]}},
        {fk:"fk_nasal_vowels",title:"The four nasal vowels",audio_id:null,
          desc:"French nasal vowels are completely foreign to English speakers. The N or M is NOT pronounced. Instead, the vowel vibrates in the nose.",
          grid:{cols:4,headers:["Nasal","Spelling patterns","Sound description","Examples"],rows:[
            {label:"an/en",color:"#E85D75",cells:[{ch:"an, am, en, em",rom:""},{ch:"ah nasalized through nose",rom:"like ahng without the g"},{ch:"dans, chambre, enfant, temps",rom:""}]},
            {label:"on",color:"#F5A623",cells:[{ch:"on, om",rom:""},{ch:"oh nasalized through nose",rom:"like ong without the g"},{ch:"bon, nom, maison, pont",rom:""}]},
            {label:"in",color:"#4A8FE7",cells:[{ch:"in, im, ain, ein, yn",rom:""},{ch:"eh nasalized through nose",rom:"like ang without the g"},{ch:"vin, simple, pain, plein",rom:""}]},
            {label:"un",color:"#7B5EE8",cells:[{ch:"un, um",rom:""},{ch:"uh nasalized (merging with in)",rom:"like ung without the g"},{ch:"un, brun, parfum",rom:""}]},
          ]}},
        {fk:"fk_vowel_grid",title:"U vs OU: the critical distinction",audio_id:null,
          desc:"U and OU are completely different sounds in French. Mixing them changes the meaning of words.",
          grid:{cols:3,headers:["Sound","Mouth position","Minimal pairs"],rows:[
            {label:"U (tu)",color:"#7B5EE8",cells:[{ch:"u",rom:"ew"},{ch:"Say ee, then round lips tightly",rom:""},{ch:"tu (you), rue (street), vu (seen), dessus (above)",rom:""}]},
            {label:"OU (tout)",color:"#F5A623",cells:[{ch:"ou",rom:"oo"},{ch:"Like oo in food. Lips round, tongue back",rom:""},{ch:"tout (all), roue (wheel), vous (you formal), dessous (below)",rom:""}]},
            {label:"Contrast",color:"#E85D75",cells:[{ch:"u vs ou",rom:""},{ch:"tu vs tout, rue vs roue, vu vs vous, dessus vs dessous",rom:""},{ch:"Wrong vowel = different word!",rom:""}]},
          ]}},
      ]},

    // ─────────── 3. CONSONANTS & LIAISON ───────────
    {id:"fr_consonants",title:"Consonants & Liaison",icon:"🗣",desc:"The French R, liaison rules, and consonant combinations",
      items:[
        {fk:"fk_consonant_special",title:"The French R",audio_id:null,
          desc:"French R is uvular: produced at the back of the throat by vibrating the uvula. It sounds like a gentle gargle.",
          grid:{cols:3,headers:["Position","Sound","Examples"],rows:[
            {label:"Word start",color:"#F5A623",cells:[{ch:"R initial",rom:""},{ch:"Clear uvular friction",rom:""},{ch:"rouge, rue, regarder",rom:""}]},
            {label:"After consonant",color:"#2ECDAB",cells:[{ch:"R in cluster",rom:""},{ch:"Blended with preceding consonant",rom:""},{ch:"trois, grand, prendre",rom:""}]},
            {label:"Word end",color:"#E85D75",cells:[{ch:"R final",rom:""},{ch:"Soft, almost whispered",rom:""},{ch:"amour, manger, voir",rom:""}]},
          ]}},
        {fk:"fk_consonant_special",title:"Liaison: connecting words",audio_id:null,
          desc:"When a word ending in a normally-silent consonant is followed by a word starting with a vowel, the consonant is pronounced. This links the words.",
          grid:{cols:3,headers:["Type","Rule","Examples"],rows:[
            {label:"Mandatory",color:"#E85D75",cells:[{ch:"Must liaison",rom:""},{ch:"Article + noun, pronoun + verb, number + noun, adjective + noun",rom:""},{ch:"les amis (lez-ah-MEE), nous avons (nooz-ah-VON), deux enfants (duhz-on-FON)",rom:""}]},
            {label:"Optional",color:"#F5A623",cells:[{ch:"May liaison",rom:""},{ch:"After certain verbs, after pas",rom:""},{ch:"je suis allé (zhuh sweez-ah-LAY), pas encore (pahz-on-KOR)",rom:""}]},
            {label:"Forbidden",color:"#4A8FE7",cells:[{ch:"Never liaison",rom:""},{ch:"After et, before h aspiré, after singular nouns",rom:""},{ch:"et il (ay eel, NOT ez-eel), les haricots (lay ah-ree-KOH)",rom:""}]},
          ]}},
        {fk:"fk_letter_sound",title:"Common consonant combinations",audio_id:null,
          desc:"French consonant clusters: ch, gn, qu, ph, th, and double letters.",
          grid:{cols:3,headers:["Combo","Sound","Examples"],rows:[
            {label:"ch",color:"#2ECDAB",cells:[{ch:"ch",rom:""},{ch:"SH sound (not K like English)",rom:""},{ch:"chat, chose, chercher",rom:""}]},
            {label:"gn",color:"#2ECDAB",cells:[{ch:"gn",rom:""},{ch:"NY sound (like Spanish n with tilde)",rom:""},{ch:"montagne, gagner, signe",rom:""}]},
            {label:"qu",color:"#2ECDAB",cells:[{ch:"qu",rom:""},{ch:"K sound (u is silent)",rom:""},{ch:"que, quand, quatre",rom:""}]},
            {label:"ph",color:"#2ECDAB",cells:[{ch:"ph",rom:""},{ch:"F sound (same as English)",rom:""},{ch:"pharmacie, photo, éléphant",rom:""}]},
            {label:"th",color:"#F5A623",cells:[{ch:"th",rom:""},{ch:"T sound (NOT English th)",rom:""},{ch:"thé, théâtre, sympathique",rom:""}]},
          ]}},
      ]},

    // ─────────── 4. SILENT LETTERS & SPELLING PATTERNS ───────────
    {id:"fr_silent",title:"Silent Letters & Spelling",icon:"🔇",desc:"The CaReFuL rule, silent E, silent H, and spelling patterns",
      items:[
        {fk:"fk_spelling_rules",title:"The CaReFuL rule",audio_id:null,
          desc:"Most final consonants in French are SILENT. The exceptions are C, R, F, L. Mnemonic: CaReFuL.",
          grid:{cols:3,headers:["Letter","Rule","Examples"],rows:[
            {label:"C",color:"#2ECDAB",cells:[{ch:"Final C",rom:""},{ch:"Usually pronounced",rom:""},{ch:"avec, sac, parc (but blanc, estomac: silent)",rom:""}]},
            {label:"R",color:"#2ECDAB",cells:[{ch:"Final R",rom:""},{ch:"Usually pronounced",rom:""},{ch:"amour, voir, car (but parler, manger: silent in -er verbs)",rom:""}]},
            {label:"F",color:"#2ECDAB",cells:[{ch:"Final F",rom:""},{ch:"Usually pronounced",rom:""},{ch:"actif, bref, chef",rom:""}]},
            {label:"L",color:"#2ECDAB",cells:[{ch:"Final L",rom:""},{ch:"Usually pronounced",rom:""},{ch:"animal, sel, hotel",rom:""}]},
            {label:"Others",color:"#F5A623",cells:[{ch:"Final D, T, S, X, Z, P",rom:""},{ch:"Almost always SILENT",rom:""},{ch:"petit, dans, deux, riz, trop",rom:""}]},
          ]}},
        {fk:"fk_spelling_rules",title:"Silent E (e muet)",audio_id:null,
          desc:"E at the end of a word is usually silent. It serves to signal gender (feminine) or modify the preceding consonant.",
          grid:{cols:3,headers:["Pattern","Effect","Examples"],rows:[
            {label:"Final -e",color:"#E85D75",cells:[{ch:"-e at word end",rom:""},{ch:"Silent. Makes preceding consonant audible.",rom:""},{ch:"grande (grond), petite (puh-TEET), belle (bell)",rom:""}]},
            {label:"-ent (3rd pl.)",color:"#F5A623",cells:[{ch:"-ent verb ending",rom:""},{ch:"Completely silent. Key trap!",rom:""},{ch:"ils parlent (eel PARL), elles mangent (ell MONZH)",rom:""}]},
            {label:"-es plural",color:"#4A8FE7",cells:[{ch:"-es noun plural",rom:""},{ch:"Silent. Plural is invisible in speech.",rom:""},{ch:"les tables (lay TABL), les pommes (lay POM)",rom:""}]},
          ]}},
        {fk:"fk_spelling_rules",title:"Silent H and H aspiré",audio_id:null,
          desc:"H is ALWAYS silent in French. But there are two types: H muet (allows liaison and elision) and H aspiré (blocks them).",
          grid:{cols:3,headers:["Type","Behavior","Examples"],rows:[
            {label:"H muet",color:"#2ECDAB",cells:[{ch:"Silent H (most words)",rom:""},{ch:"Elision and liaison happen normally",rom:""},{ch:"l'homme, l'heure, les hommes (lez-OMM)",rom:""}]},
            {label:"H aspiré",color:"#F5A623",cells:[{ch:"Aspirated H (some words)",rom:""},{ch:"No elision, no liaison. Still silent!",rom:""},{ch:"le héros, les haricots (lay ah-ree-KOH)",rom:""}]},
          ]}},
      ]},

    // ─────────── 5. THE ACCENT SYSTEM ───────────
    {id:"fr_accents",title:"The Accent System",icon:"✨",desc:"When and why French uses accent marks",
      items:[
        {fk:"fk_accents",title:"Accent aigu (é): the most common",audio_id:null,
          desc:"The accent aigu only appears on E. It always produces a closed AY sound. It is the most frequent accent in French.",
          grid:{cols:3,headers:["Pattern","Usage","Examples"],rows:[
            {label:"Past participle -é",color:"#E85D75",cells:[{ch:"-é",rom:"ay"},{ch:"Past participle of -er verbs",rom:""},{ch:"parlé, mangé, regardé",rom:""}]},
            {label:"Word start",color:"#F5A623",cells:[{ch:"é-",rom:"ay"},{ch:"Common at start of words",rom:""},{ch:"étudiant, école, été",rom:""}]},
            {label:"Mid-word",color:"#4A8FE7",cells:[{ch:"-é-",rom:"ay"},{ch:"Clear ay sound",rom:""},{ch:"téléphone, général, répéter",rom:""}]},
          ]}},
        {fk:"fk_accents",title:"Accent grave (è, à, ù)",audio_id:null,
          desc:"On E: open EH sound. On A and U: distinguishes homophones (meaning only, no sound change).",
          grid:{cols:3,headers:["Letter","Effect","Examples"],rows:[
            {label:"è",color:"#E85D75",cells:[{ch:"è",rom:"eh"},{ch:"Open EH as in bed",rom:""},{ch:"mère, père, frère, problème",rom:""}]},
            {label:"à",color:"#F5A623",cells:[{ch:"à",rom:"ah"},{ch:"Distinguishes: à (at/to) vs a (has)",rom:""},{ch:"à la maison, il va à Paris",rom:""}]},
            {label:"ù",color:"#4A8FE7",cells:[{ch:"ù",rom:"oo"},{ch:"Only in one word: où (where) vs ou (or)",rom:""},{ch:"Où est la gare? vs café ou thé",rom:""}]},
          ]}},
        {fk:"fk_accents",title:"Circumflex, diaeresis, cedilla",audio_id:null,
          desc:"Circumflex marks historical lost S. Diaeresis separates vowels. Cedilla forces soft C.",
          grid:{cols:3,headers:["Mark","Purpose","Examples"],rows:[
            {label:"Circumflex ˆ",color:"#7B5EE8",cells:[{ch:"ê, â, î, ô, û",rom:""},{ch:"Historical: often where an S was lost. Can affect sound on ô.",rom:""},{ch:"hôtel (hostel), fête (feast), île (isle), hôpital (hospital)",rom:""}]},
            {label:"Diaeresis ¨",color:"#F5A623",cells:[{ch:"ë, ï, ü",rom:""},{ch:"Forces separate pronunciation of adjacent vowels.",rom:""},{ch:"Noël (no-ELL), naïf (nah-EEF)",rom:""}]},
            {label:"Cedilla ç",color:"#E85D75",cells:[{ch:"ç",rom:""},{ch:"Makes C soft (S sound) before a, o, u. Without it, C would be hard (K).",rom:""},{ch:"français, garçon, reçu, leçon",rom:""}]},
          ]}},
      ]},

    // ─────────── 6. GRAMMAR PREVIEW ───────────
    {id:"fr_grammar",title:"Grammar Preview",icon:"🏗️",desc:"Gender, articles, verb groups, and the Agreement Web",
      items:[
        {fk:"fk_grammar_overview",title:"Two genders: le and la",audio_id:null,
          desc:"Every French noun is either masculine (le) or feminine (la). Before vowels, both become l'. Gender must be memorized with each noun.",
          grid:{cols:3,headers:["Gender","Article","Examples"],rows:[
            {label:"Masculine",color:"#4A8FE7",cells:[{ch:"le (blue)",rom:""},{ch:"le livre, le chat, le soleil, le garçon",rom:""},{ch:"le often before consonant, l' before vowel",rom:""}]},
            {label:"Feminine",color:"#E85D75",cells:[{ch:"la (coral)",rom:""},{ch:"la maison, la table, la lune, la fille",rom:""},{ch:"la often before consonant, l' before vowel",rom:""}]},
            {label:"Elision",color:"#F5A623",cells:[{ch:"l'",rom:""},{ch:"l'homme (m), l'école (f), l'enfant",rom:""},{ch:"Gender hidden! Must memorize.",rom:""}]},
            {label:"Plural",color:"#2ECDAB",cells:[{ch:"les",rom:""},{ch:"les livres, les maisons, les enfants",rom:""},{ch:"Same article for both genders in plural",rom:""}]},
          ]}},
        {fk:"fk_grammar_overview",title:"The Agreement Web: French's central metaphor",audio_id:null,
          desc:"In French, everything agrees with everything: adjectives with nouns, past participles with subjects, pronouns with verbs. This web connects all parts of a sentence.",
          grid:{cols:3,headers:["Agreement type","Rule","Example"],rows:[
            {label:"Adjective",color:"#E85D75",cells:[{ch:"adj + noun",rom:""},{ch:"Adjective matches gender and number",rom:""},{ch:"un grand livre, une grande maison",rom:""}]},
            {label:"Past participle",color:"#F5A623",cells:[{ch:"pp + subject (etre)",rom:""},{ch:"With etre verbs, participle matches subject",rom:""},{ch:"elle est allée, ils sont partis",rom:""}]},
            {label:"Article",color:"#4A8FE7",cells:[{ch:"article + noun",rom:""},{ch:"Article matches gender and number",rom:""},{ch:"le/la/les, un/une/des",rom:""}]},
          ]}},
        {fk:"fk_grammar_overview",title:"Three verb groups + irregulars",audio_id:null,
          desc:"French verbs fall into three regular groups plus a set of common irregulars. Group 1 covers 90% of all verbs.",
          grid:{cols:3,headers:["Group","Ending","Examples"],rows:[
            {label:"Group 1",color:"#2ECDAB",cells:[{ch:"-er verbs (90%)",rom:""},{ch:"parler, manger, regarder, aimer",rom:""},{ch:"Most regular. Learn this pattern first.",rom:""}]},
            {label:"Group 2",color:"#4A8FE7",cells:[{ch:"-ir verbs (with -iss-)",rom:""},{ch:"finir, choisir, remplir, grandir",rom:""},{ch:"Regular: stem + -iss- in plural forms",rom:""}]},
            {label:"Group 3",color:"#F5A623",cells:[{ch:"-re and irregular -ir",rom:""},{ch:"vendre, prendre, partir, dormir",rom:""},{ch:"Less predictable. Learn individually.",rom:""}]},
            {label:"Key irregulars",color:"#E85D75",cells:[{ch:"Most common verbs",rom:""},{ch:"etre, avoir, aller, faire, pouvoir, vouloir",rom:""},{ch:"Memorize these. They appear constantly.",rom:""}]},
          ]}},
        {fk:"fk_grammar_overview",title:"Tu vs Vous: the social compass",audio_id:null,
          desc:"Tu is informal (one person you know). Vous is formal (strangers, elders) AND all plurals. The choice carries social weight.",
          grid:{cols:3,headers:["Pronoun","Use with","Social rule"],rows:[
            {label:"tu",color:"#2ECDAB",cells:[{ch:"tu (informal)",rom:""},{ch:"Friends, family, children, peers",rom:""},{ch:"Wait until offered. Using tu too early is rude.",rom:""}]},
            {label:"vous (formal)",color:"#7B5EE8",cells:[{ch:"vous (formal singular)",rom:""},{ch:"Strangers, elders, professionals",rom:""},{ch:"Default in any new interaction. Safe choice.",rom:""}]},
            {label:"vous (plural)",color:"#4A8FE7",cells:[{ch:"vous (all plurals)",rom:""},{ch:"Any group of 2+ people",rom:""},{ch:"Always vous for groups, regardless of familiarity.",rom:""}]},
          ]}},
      ]},
  ]},
  // ── English Foundations (Pipeline Step 2 — placeholder) ──
  en:{name:"English Foundations",icon:"🇬🇧",sections:[
    {id:"en_alphabet",title:"The English Alphabet",icon:"🔤",desc:"26 letters — but English spelling is famously irregular. The same letter can make many sounds!",
      items:[
        {fk:"fk_alphabet_overview",title:"English letter grid",desc:"Standard 26-letter Latin alphabet. English has no accent marks but compensates with complex spelling rules.",
          grid:{cols:9,headers:["","","","","","","","",""],rows:[
            {label:"A–I",color:"#012169",cells:[{ch:"A",rom:"/eɪ/"},{ch:"B",rom:"/biː/"},{ch:"C",rom:"/siː/"},{ch:"D",rom:"/diː/"},{ch:"E",rom:"/iː/"},{ch:"F",rom:"/ɛf/"},{ch:"G",rom:"/dʒiː/"},{ch:"H",rom:"/eɪtʃ/"},{ch:"I",rom:"/aɪ/"}]},
            {label:"J–R",color:"#C8102E",cells:[{ch:"J",rom:"/dʒeɪ/"},{ch:"K",rom:"/keɪ/"},{ch:"L",rom:"/ɛl/"},{ch:"M",rom:"/ɛm/"},{ch:"N",rom:"/ɛn/"},{ch:"O",rom:"/oʊ/"},{ch:"P",rom:"/piː/"},{ch:"Q",rom:"/kjuː/"},{ch:"R",rom:"/ɑːr/"}]},
            {label:"S–Z",color:"#012169",cells:[{ch:"S",rom:"/ɛs/"},{ch:"T",rom:"/tiː/"},{ch:"U",rom:"/juː/"},{ch:"V",rom:"/viː/"},{ch:"W",rom:"/ˈdʌbl̩juː/"},{ch:"X",rom:"/ɛks/"},{ch:"Y",rom:"/waɪ/"},{ch:"Z",rom:"/zɛd/"},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_spelling_traps",title:"Spelling traps",desc:"English spelling is not phonetic: 'ough' has 7+ pronunciations (though, through, thought, tough, cough, bough, hiccough).",
          examples:["though /ðoʊ/","through /θruː/","tough /tʌf/","cough /kɒf/"]},
        {fk:"fk_phonology",title:"Vowel sounds & stress",desc:"English has ~15 vowel sounds but only 5 vowel letters. Stress placement changes meaning: 'REcord' (noun) vs 'reCORD' (verb). Schwa /ə/ is the most common vowel sound.",
          examples:["record /ˈrekɔːd/ (noun) vs /rɪˈkɔːd/ (verb)","photograph /ˈfoʊtəgrɑːf/ — stress on 1st","photography /fəˈtɒgrəfi/ — stress shifts to 2nd"]},
        {fk:"fk_spelling_rules",title:"Common spelling patterns",desc:"English has silent letters (knife, write, psychology), doubled consonants that show short vowels (hopping vs hoping), and -tion/-sion suffixes pronounced /ʃən/.",
          examples:["knife /naɪf/ — silent k","write /raɪt/ — silent w","hopping (short o) vs hoping (long o)","nation /ˈneɪʃən/ — tion = /ʃən/"]},
      ]},
  ]},
  // ── Spanish Foundations ──
  // ══════════════════════════════════════════════════════════════
  // SPANISH FOUNDATIONS KNOWLEDGE — Reference Library
  // 5 sections, ~25 items. Color key:
  // vowels=#E85D75, consonants=#2ECDAB, tricky=#F5A623,
  // special=#4A8FE7, grammar=#7B5EE8
  // ══════════════════════════════════════════════════════════════
  es:{name:"Spanish Foundations",icon:"🇪🇸",sections:[

    // ─────────── 1. THE ALPHABET & SPECIAL CHARACTERS ───────────
    {id:"es_alphabet",title:"El Alfabeto y Caracteres Especiales",icon:"🔤",desc:"27 letters: the 26 Latin letters plus Ñ. Spanish spelling is nearly phonetic.",
      items:[
        {fk:"fk_alphabet_overview",title:"Spanish letter grid",desc:"Nearly perfect phonetic spelling. Every letter has a consistent sound. Ñ is its own letter, not an accent on N.",
          grid:{cols:9,headers:["","","","","","","","",""],rows:[
            {label:"A-I",color:"#AA151B",cells:[{ch:"A",rom:"ah"},{ch:"B",rom:"beh"},{ch:"C",rom:"seh"},{ch:"D",rom:"deh"},{ch:"E",rom:"eh"},{ch:"F",rom:"EH-feh"},{ch:"G",rom:"heh"},{ch:"H",rom:"AH-cheh"},{ch:"I",rom:"ee"}]},
            {label:"J-R",color:"#F1BF00",cells:[{ch:"J",rom:"HO-tah"},{ch:"K",rom:"kah"},{ch:"L",rom:"EH-leh"},{ch:"M",rom:"EH-meh"},{ch:"N",rom:"EH-neh"},{ch:"Ñ",rom:"EH-nyeh"},{ch:"O",rom:"oh"},{ch:"P",rom:"peh"},{ch:"Q",rom:"koo"}]},
            {label:"R-Z",color:"#AA151B",cells:[{ch:"R",rom:"EH-reh"},{ch:"S",rom:"EH-seh"},{ch:"T",rom:"teh"},{ch:"U",rom:"oo"},{ch:"V",rom:"oo-beh"},{ch:"W",rom:"DOH-bleh oo-beh"},{ch:"X",rom:"EH-kees"},{ch:"Y",rom:"yeh"},{ch:"Z",rom:"SEH-tah"}]},
          ]}},
        {fk:"fk_accents",title:"Accent marks and special punctuation",desc:"Accent marks (á é í ó ú) indicate stress, not different sounds. Diaeresis (ü) means 'pronounce the U'. Inverted marks (¿ ¡) open questions and exclamations.",
          grid:{cols:3,headers:["Mark","Function","Examples"],rows:[
            {label:"Acute accent",color:"#E85D75",cells:[{ch:"á é í ó ú",rom:""},{ch:"Shows non-default stress position",rom:""},{ch:"café, mamá, común, difícil",rom:""}]},
            {label:"Diaeresis",color:"#F5A623",cells:[{ch:"ü",rom:""},{ch:"Pronounce U in güe/güi",rom:""},{ch:"pingüino, bilingüe, vergüenza",rom:""}]},
            {label:"Inverted marks",color:"#4A8FE7",cells:[{ch:"¿ ¡",rom:""},{ch:"Open questions and exclamations",rom:""},{ch:"¿Cómo estás? ¡Hola!",rom:""}]},
            {label:"Tilde on Ñ",color:"#7B5EE8",cells:[{ch:"ñ",rom:""},{ch:"Separate letter, not an accent on N",rom:""},{ch:"español, año, niño, señor",rom:""}]},
          ]}},
        {fk:"fk_alphabet_overview",title:"Letters that trap English speakers",desc:"H is always silent. B and V sound identical. J sounds like English H. G before e/i is the same as J.",
          grid:{cols:3,headers:["Letter","Spanish sound","English trap to avoid"],rows:[
            {label:"H",color:"#F5A623",cells:[{ch:"H",rom:"h"},{ch:"ALWAYS silent",rom:"hola = ola"},{ch:"NOT like English hat",rom:""}]},
            {label:"J",color:"#F5A623",cells:[{ch:"J",rom:"j"},{ch:"Throaty H sound (like loch)",rom:"jefe = HEH-feh"},{ch:"NOT like English jump",rom:""}]},
            {label:"B/V",color:"#F5A623",cells:[{ch:"B = V",rom:"b/v"},{ch:"Identical sound in Spanish",rom:"beber = vever"},{ch:"NOT different as in English",rom:""}]},
            {label:"LL",color:"#F5A623",cells:[{ch:"LL",rom:"ll"},{ch:"Y sound (most regions)",rom:"llamar = ya-MAR"},{ch:"NOT like English L+L",rom:""}]},
            {label:"RR",color:"#F5A623",cells:[{ch:"RR",rom:"rr"},{ch:"Trilled R (tongue vibrates)",rom:"perro = PEH-rro"},{ch:"NOT like English R",rom:""}]},
          ]}},
        {fk:"fk_spelling_rules",title:"C and G: two sounds each",desc:"C and G each have a hard and soft sound, determined by the vowel that follows. QU and GU are used to keep hard sounds before e/i.",
          grid:{cols:3,headers:["Combo","Sound","Examples"],rows:[
            {label:"C + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard C",rom:""},{ch:"K sound",rom:""},{ch:"casa, comer, cubo",rom:""}]},
            {label:"C + e, i",color:"#E85D75",cells:[{ch:"Soft C",rom:""},{ch:"S sound (Latin Am) or TH (Spain)",rom:""},{ch:"cena, cinco, cielo",rom:""}]},
            {label:"QU + e, i",color:"#4A8FE7",cells:[{ch:"QU",rom:""},{ch:"K sound (U is silent)",rom:""},{ch:"queso, aquí, quién",rom:""}]},
            {label:"G + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard G",rom:""},{ch:"G as in go",rom:""},{ch:"gato, gordo, gusto",rom:""}]},
            {label:"G + e, i",color:"#E85D75",cells:[{ch:"Soft G",rom:""},{ch:"Throaty H (same as J)",rom:""},{ch:"gente, girar",rom:""}]},
            {label:"GU + e, i",color:"#4A8FE7",cells:[{ch:"GU",rom:""},{ch:"Hard G (U is silent)",rom:""},{ch:"guerra, guitarra, guía",rom:""}]},
          ]}},
      ]},

    // ─────────── 2. VOWELS & DIPHTHONGS ───────────
    {id:"es_vowels",title:"Vowels and Diphthongs",icon:"🔊",desc:"5 pure vowels (never reduced), diphthongs, and hiatus",
      items:[
        {fk:"fk_vowel_grid",title:"The five pure vowels",desc:"Spanish has exactly 5 vowel sounds. They NEVER change quality regardless of stress or position. This is much simpler than English (which has ~15).",
          grid:{cols:3,headers:["Vowel","Sound","Examples"],rows:[
            {label:"A",color:"#E85D75",cells:[{ch:"a",rom:"ah"},{ch:"Like English 'father', never like 'cat'",rom:""},{ch:"casa, hablar, mamá",rom:""}]},
            {label:"E",color:"#F5A623",cells:[{ch:"e",rom:"eh"},{ch:"Like English 'bed', never silent",rom:""},{ch:"mesa, verde, comer",rom:""}]},
            {label:"I",color:"#2ECDAB",cells:[{ch:"i",rom:"ee"},{ch:"Like English 'see', always short and crisp",rom:""},{ch:"sí, vivir, Chile",rom:""}]},
            {label:"O",color:"#4A8FE7",cells:[{ch:"o",rom:"oh"},{ch:"Like English 'go' but without the glide",rom:""},{ch:"oro, como, todo",rom:""}]},
            {label:"U",color:"#7B5EE8",cells:[{ch:"u",rom:"oo"},{ch:"Like English 'food', lips rounded",rom:""},{ch:"uno, uva, azul",rom:""}]},
          ]}},
        {fk:"fk_vowel_digraph",title:"Strong vs weak vowels",desc:"A, E, O are 'strong' vowels. I, U are 'weak' vowels. This distinction determines diphthongs, hiatus, and stress patterns.",
          grid:{cols:3,headers:["Type","Vowels","Rule"],rows:[
            {label:"Strong",color:"#E85D75",cells:[{ch:"A, E, O",rom:""},{ch:"Open, loud vowels",rom:""},{ch:"Two strong vowels = two syllables (hiatus)",rom:""}]},
            {label:"Weak",color:"#4A8FE7",cells:[{ch:"I, U",rom:""},{ch:"Closed, quiet vowels",rom:""},{ch:"Strong + weak = one syllable (diphthong)",rom:""}]},
          ]}},
        {fk:"fk_vowel_digraph",title:"Common diphthongs",desc:"When a strong vowel (A, E, O) pairs with a weak vowel (I, U), they form a single syllable. Very common in Spanish.",
          grid:{cols:3,headers:["Diphthong","Sound","Examples"],rows:[
            {label:"AI/AY",color:"#E85D75",cells:[{ch:"ai / ay",rom:""},{ch:"Like English 'eye'",rom:""},{ch:"baile, hay, aire",rom:""}]},
            {label:"EI/EY",color:"#F5A623",cells:[{ch:"ei / ey",rom:""},{ch:"Like English 'day'",rom:""},{ch:"seis, ley, reina",rom:""}]},
            {label:"IE",color:"#2ECDAB",cells:[{ch:"ie",rom:""},{ch:"ee-EH (glides from weak to strong)",rom:""},{ch:"tiene, bien, siempre",rom:""}]},
            {label:"UE",color:"#4A8FE7",cells:[{ch:"ue",rom:""},{ch:"oo-EH (very common in stem changes)",rom:""},{ch:"bueno, puerta, puede",rom:""}]},
            {label:"UA",color:"#7B5EE8",cells:[{ch:"ua",rom:""},{ch:"oo-AH",rom:""},{ch:"agua, cuatro, cuando",rom:""}]},
            {label:"OI/OY",color:"#E85D75",cells:[{ch:"oi / oy",rom:""},{ch:"Like English 'boy'",rom:""},{ch:"hoy, oigo, voy",rom:""}]},
          ]}},
        {fk:"fk_vowel_grid",title:"Vowel traps for English speakers",desc:"English reduces unstressed vowels to schwa. Spanish NEVER does this. Every vowel keeps its full sound.",
          examples:["chocolate: English = CHAWK-lit, Spanish = cho-co-LA-teh (all vowels clear)","animal: English = AN-uh-muhl, Spanish = a-nee-MAL (no schwa)","hospital: English = HAHS-pit-uhl, Spanish = os-pee-TAL (all vowels pure)","banana: English = buh-NAN-uh, Spanish = ba-NA-na (three clear A sounds)"]},
      ]},

    // ─────────── 3. CONSONANT CHALLENGES ───────────
    {id:"es_consonants",title:"Consonant Challenges",icon:"🗣️",desc:"Tricky consonant sounds: RR trill, D between vowels, and regional variation",
      items:[
        {fk:"fk_consonant_grid",title:"The RR trill vs single R",desc:"Single R is a quick tap (like the 'tt' in American 'butter'). Double RR is a full trill. Confusing them changes meanings!",
          grid:{cols:3,headers:["Sound","Position","Examples"],rows:[
            {label:"Single R tap",color:"#2ECDAB",cells:[{ch:"R between vowels",rom:""},{ch:"Quick tongue tap against ridge",rom:""},{ch:"pero (but), caro (expensive), para (for)",rom:""}]},
            {label:"RR trill",color:"#E85D75",cells:[{ch:"RR between vowels",rom:""},{ch:"Multiple tongue vibrations",rom:""},{ch:"perro (dog), carro (car), parra (vine)",rom:""}]},
            {label:"R = trill at start",color:"#F5A623",cells:[{ch:"R at word start",rom:""},{ch:"Always trilled like RR",rom:""},{ch:"rojo (red), rata (rat), río (river)",rom:""}]},
            {label:"R = trill after N/L/S",color:"#4A8FE7",cells:[{ch:"R after n, l, s",rom:""},{ch:"Also trilled",rom:""},{ch:"Enrique, alrededor, Israel",rom:""}]},
          ]}},
        {fk:"fk_consonant_grid",title:"D between vowels: the softening trap",desc:"D between vowels becomes very soft, almost like English 'th' in 'the'. At the end of words, it nearly disappears.",
          examples:["cansado = can-SA-tho (d softens between vowels)","nada = NA-tha (d between vowels is very soft)","Madrid = ma-DRITH (final d is almost silent)","verdad = ver-DATH (final d barely pronounced)"]},
        {fk:"fk_consonant_grid",title:"Regional consonant variation",desc:"Some consonants sound different depending on the region. Understanding this prevents confusion when hearing different Spanish speakers.",
          grid:{cols:3,headers:["Feature","Spain","Latin America"],rows:[
            {label:"Z, C+e/i",color:"#F5A623",cells:[{ch:"distincion",rom:""},{ch:"TH sound: zapato = tha-PA-to",rom:""},{ch:"S sound: zapato = sa-PA-to",rom:""}]},
            {label:"LL",color:"#4A8FE7",cells:[{ch:"varies",rom:""},{ch:"LY sound (some regions)",rom:""},{ch:"Y sound: calle = CA-yeh",rom:""}]},
            {label:"S at end",color:"#2ECDAB",cells:[{ch:"aspiration",rom:""},{ch:"Full S: estos = ES-tos",rom:""},{ch:"Often H or dropped: estos = EH-toh",rom:""}]},
          ]}},
        {fk:"fk_consonant_grid",title:"Silent H and identical B/V",desc:"H is ALWAYS silent in Spanish, no exceptions. B and V are pronounced identically. These are non-negotiable rules.",
          examples:["hola = OLA (H is silent)","hacer = a-SER (H is silent)","hombre = OM-breh (H is silent)","beso and vaso start with the SAME sound","burro and vuelta start with the SAME sound"]},
      ]},

    // ─────────── 4. STRESS RULES & ACCENT MARKS ───────────
    {id:"es_stress",title:"Stress Rules and Accent Marks",icon:"📐",desc:"Predictable stress system: two simple rules + accent marks for exceptions",
      items:[
        {fk:"fk_stress_rules",title:"The two default stress rules",desc:"Spanish stress is 95% predictable from spelling. Rule 1: Words ending in vowel, N, or S have stress on the second-to-last syllable. Rule 2: Words ending in any other consonant have stress on the last syllable.",
          grid:{cols:3,headers:["Ending","Default stress","Examples"],rows:[
            {label:"Vowel, N, S",color:"#2ECDAB",cells:[{ch:"Palabras llanas",rom:""},{ch:"Stress on second-to-last syllable",rom:""},{ch:"CA-sa, ha-BLAN, CO-mes, li-BRO",rom:""}]},
            {label:"Other consonant",color:"#E85D75",cells:[{ch:"Palabras agudas",rom:""},{ch:"Stress on last syllable",rom:""},{ch:"ha-BLAR, co-MER, ciu-DAD, es-pa-ÑOL",rom:""}]},
          ]}},
        {fk:"fk_stress_rules",title:"When accent marks appear",desc:"An accent mark (tilde) appears ONLY when the word breaks the default stress rules. If you see an accent, stress is NOT where the rules predict.",
          grid:{cols:3,headers:["Pattern","Why the accent","Examples"],rows:[
            {label:"Ends in vowel/N/S + last-syllable stress",color:"#F5A623",cells:[{ch:"Breaks Rule 1",rom:""},{ch:"Accent forces stress to last syllable",rom:""},{ch:"ca-FÉ, ma-MÁ, co-MÚN, tam-BIÉN",rom:""}]},
            {label:"Ends in consonant + penultimate stress",color:"#4A8FE7",cells:[{ch:"Breaks Rule 2",rom:""},{ch:"Accent forces stress earlier",rom:""},{ch:"FÁ-cil, ÁR-bol, a-ZÚ-car, lá-PIZ",rom:""}]},
            {label:"Third-to-last or earlier stress",color:"#7B5EE8",cells:[{ch:"Esdrújulas",rom:""},{ch:"Always have accent (always break rules)",rom:""},{ch:"MÚ-si-ca, te-LÉ-fo-no, mé-DI-co",rom:""}]},
          ]}},
        {fk:"fk_stress_rules",title:"Accent marks that distinguish meaning",desc:"Some word pairs are spelled identically except for the accent. The accent changes the meaning entirely.",
          grid:{cols:3,headers:["With accent","Without accent","Difference"],rows:[
            {label:"sí / si",color:"#E85D75",cells:[{ch:"sí",rom:""},{ch:"si",rom:""},{ch:"yes / if",rom:""}]},
            {label:"él / el",color:"#F5A623",cells:[{ch:"él",rom:""},{ch:"el",rom:""},{ch:"he / the",rom:""}]},
            {label:"tú / tu",color:"#4A8FE7",cells:[{ch:"tú",rom:""},{ch:"tu",rom:""},{ch:"you / your",rom:""}]},
            {label:"más / mas",color:"#2ECDAB",cells:[{ch:"más",rom:""},{ch:"mas",rom:""},{ch:"more / but (literary)",rom:""}]},
            {label:"qué / que",color:"#7B5EE8",cells:[{ch:"qué, cuándo, dónde",rom:""},{ch:"que, cuando, donde",rom:""},{ch:"question word / conjunction",rom:""}]},
          ]}},
      ]},

    // ─────────── 5. GRAMMAR PREVIEW ───────────
    {id:"es_grammar_preview",title:"Grammar at a Glance",icon:"📝",desc:"Key Spanish grammar concepts to recognize before diving into lessons",
      items:[
        {fk:"fk_grammar_preview",title:"Gender: el and la",desc:"Every Spanish noun is masculine (el) or feminine (la). Most nouns ending in -o are masculine, most ending in -a are feminine. But there are exceptions!",
          grid:{cols:3,headers:["Gender","Article","Common patterns"],rows:[
            {label:"Masculine",color:"#4A8FE7",cells:[{ch:"el",rom:""},{ch:"el libro, el gato, el sol",rom:""},{ch:"Most -o words, days, months, rivers, oceans",rom:""}]},
            {label:"Feminine",color:"#E85D75",cells:[{ch:"la",rom:""},{ch:"la casa, la mesa, la luna",rom:""},{ch:"Most -a words, -cion, -dad, -tad, -tud",rom:""}]},
            {label:"Exceptions",color:"#F5A623",cells:[{ch:"Watch out!",rom:""},{ch:"el día, el mapa, el problema",rom:""},{ch:"Some -a words are masculine (Greek origin)",rom:""}]},
            {label:"Stressed a-",color:"#7B5EE8",cells:[{ch:"el + fem noun",rom:""},{ch:"el agua, el águila, el alma",rom:""},{ch:"Use 'el' before stressed a-/ha- (still feminine!)",rom:""}]},
          ]}},
        {fk:"fk_grammar_preview",title:"Ser vs Estar: two verbs meaning 'to be'",desc:"The biggest challenge for English speakers. SER describes identity and permanent traits. ESTAR describes states, locations, and conditions.",
          grid:{cols:3,headers:["Verb","Uses","Examples"],rows:[
            {label:"SER",color:"#4A8FE7",cells:[{ch:"Identity, origin, time",rom:""},{ch:"Who/what something IS",rom:""},{ch:"Soy Juan. Es profesor. Son las tres.",rom:""}]},
            {label:"SER",color:"#4A8FE7",cells:[{ch:"Personality, material",rom:""},{ch:"Permanent characteristics",rom:""},{ch:"Es inteligente. Es de madera.",rom:""}]},
            {label:"ESTAR",color:"#2ECDAB",cells:[{ch:"Location, state",rom:""},{ch:"Where something is, how it feels",rom:""},{ch:"Estoy en casa. Estoy cansado.",rom:""}]},
            {label:"ESTAR",color:"#2ECDAB",cells:[{ch:"Emotion, condition",rom:""},{ch:"Temporary states",rom:""},{ch:"Estoy feliz. Está enfermo.",rom:""}]},
            {label:"Trap!",color:"#F5A623",cells:[{ch:"Same adjective, different verb",rom:""},{ch:"Changes meaning entirely!",rom:""},{ch:"Es aburrido (boring person) vs Está aburrido (bored)",rom:""}]},
          ]}},
        {fk:"fk_grammar_preview",title:"Three verb groups: -AR, -ER, -IR",desc:"All Spanish verbs belong to one of three groups based on their infinitive ending. Each group has its own conjugation pattern.",
          grid:{cols:3,headers:["Group","Infinitive ending","Example verbs"],rows:[
            {label:"-AR verbs",color:"#E85D75",cells:[{ch:"-ar (largest group, ~80%)",rom:""},{ch:"hablar, comer, vivir",rom:""},{ch:"hablar (speak), trabajar (work), estudiar (study)",rom:""}]},
            {label:"-ER verbs",color:"#F5A623",cells:[{ch:"-er",rom:""},{ch:"comer, beber, leer",rom:""},{ch:"comer (eat), beber (drink), aprender (learn)",rom:""}]},
            {label:"-IR verbs",color:"#4A8FE7",cells:[{ch:"-ir",rom:""},{ch:"vivir, escribir, abrir",rom:""},{ch:"vivir (live), escribir (write), abrir (open)",rom:""}]},
          ]}},
        {fk:"fk_grammar_preview",title:"Formal vs informal: Tu and Usted",desc:"Spanish has two ways to say 'you'. Getting it wrong is a social mistake. When in doubt, use usted.",
          grid:{cols:3,headers:["Form","Use with","Verb form"],rows:[
            {label:"Tú",color:"#2ECDAB",cells:[{ch:"Informal 'you'",rom:""},{ch:"Friends, family, children, peers",rom:""},{ch:"Tú hablas (you speak)",rom:""}]},
            {label:"Usted (Ud.)",color:"#7B5EE8",cells:[{ch:"Formal 'you'",rom:""},{ch:"Strangers, elders, authority, business",rom:""},{ch:"Usted habla (you speak) - uses 3rd person!",rom:""}]},
            {label:"Vosotros (Spain)",color:"#F5A623",cells:[{ch:"Informal plural 'you'",rom:""},{ch:"Spain only, NOT used in Latin America",rom:""},{ch:"Vosotros habláis (you all speak)",rom:""}]},
            {label:"Ustedes (Uds.)",color:"#4A8FE7",cells:[{ch:"Plural 'you'",rom:""},{ch:"All of Latin America for any context",rom:""},{ch:"Ustedes hablan (you all speak)",rom:""}]},
          ]}},
      ]},
  ]},
  // ── Romanian Foundations (Pipeline Step 2 — placeholder) ──
  ro:{name:"Romanian Foundations",icon:"🇷🇴",sections:[
    {id:"ro_alphabet",title:"Alfabetul Românesc",icon:"🔤",desc:"31 letters: 26 Latin letters plus 5 special characters: Ă Â Î Ș Ț. Romanian spelling is very regular.",
      items:[
        {fk:"fk_alphabet_overview",title:"Romanian letter grid",desc:"Romanian uses 5 extra characters: Ă (schwa), Â/Î (central close vowel), Ș (sh), Ț (ts). Spelling is phonetic.",
          grid:{cols:8,headers:["","","","","","","",""],rows:[
            {label:"A–H",color:"#002B7F",cells:[{ch:"A",rom:"/a/"},{ch:"Ă",rom:"/ə/"},{ch:"Â",rom:"/ɨ/"},{ch:"B",rom:"/b/"},{ch:"C",rom:"/k/"},{ch:"D",rom:"/d/"},{ch:"E",rom:"/e/"},{ch:"F",rom:"/f/"}]},
            {label:"G–O",color:"#FCD116",cells:[{ch:"G",rom:"/g/"},{ch:"H",rom:"/h/"},{ch:"I",rom:"/i/"},{ch:"Î",rom:"/ɨ/"},{ch:"J",rom:"/ʒ/"},{ch:"K",rom:"/k/"},{ch:"L",rom:"/l/"},{ch:"M",rom:"/m/"}]},
            {label:"N–T",color:"#CE1126",cells:[{ch:"N",rom:"/n/"},{ch:"O",rom:"/o/"},{ch:"P",rom:"/p/"},{ch:"Q",rom:"/k/"},{ch:"R",rom:"/r/"},{ch:"S",rom:"/s/"},{ch:"Ș",rom:"/ʃ/"},{ch:"T",rom:"/t/"}]},
            {label:"Ț–Z",color:"#002B7F",cells:[{ch:"Ț",rom:"/ts/"},{ch:"U",rom:"/u/"},{ch:"V",rom:"/v/"},{ch:"W",rom:"/v/"},{ch:"X",rom:"/ks/"},{ch:"Y",rom:"/j/"},{ch:"Z",rom:"/z/"},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_special_chars",title:"Special Romanian letters",desc:"Ă = schwa (like 'a' in 'about'), Â/Î = same sound (no English equivalent), Ș = 'sh', Ț = 'ts'. Â is used inside words, Î at the start/end.",
          examples:["România /ro.mɨ.ni.a/","țară (country)","și (and)","că (that)","în (in)"]},
        {fk:"fk_phonology",title:"Romanian pronunciation",desc:"Romanian is highly phonetic. Every letter has a consistent sound. Stress varies but is often on the penultimate syllable. The definite article is suffixed, not prefixed.",
          examples:["carte (book) → cartea (the book): article suffix","copil (child) → copilul (the child)","fată (girl): stress on 1st syllable","frumos (beautiful): stress on 2nd"]},
        {fk:"fk_spelling_rules",title:"Romanian spelling patterns",desc:"CE/CI = /tʃe/, /tʃi/. GE/GI = /dʒe/, /dʒi/. CHE/CHI = /ke/, /ki/. GHE/GHI = /ge/, /gi/. These digraph rules are 100% consistent.",
          examples:["cer /tʃer/ (sky)","gine /dʒine/","che /ke/","ghid /gid/ (guide)"]},
      ]},
  ]},
  // ── Russian Foundations (Pipeline Step 2 — placeholder) ──
  ja:{name:"Japanese Foundations",icon:"🇯🇵",sections:[
    {id:"ja_hiragana",title:"Hiragana Chart",icon:"あ",desc:"46 basic characters for native Japanese words and grammar",
      items:[
        {fk:"fk_hiragana_grid",title:"Basic hiragana grid",audio_id:null,
          desc:"Every hiragana is a consonant + vowel. 5 vowels x 10 consonant rows (minus gaps) = 46 characters.",
          grid:{cols:6,headers:["","a","i","u","e","o"],rows:[
            {label:"Vowels",color:"#E85D75",cells:[{ch:"",rom:""},{ch:"あ",rom:"a"},{ch:"い",rom:"i"},{ch:"う",rom:"u"},{ch:"え",rom:"e"},{ch:"お",rom:"o"}]},
            {label:"K",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"か",rom:"ka"},{ch:"き",rom:"ki"},{ch:"く",rom:"ku"},{ch:"け",rom:"ke"},{ch:"こ",rom:"ko"}]},
            {label:"S",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"さ",rom:"sa"},{ch:"し",rom:"shi"},{ch:"す",rom:"su"},{ch:"せ",rom:"se"},{ch:"そ",rom:"so"}]},
            {label:"T",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"た",rom:"ta"},{ch:"ち",rom:"chi"},{ch:"つ",rom:"tsu"},{ch:"て",rom:"te"},{ch:"と",rom:"to"}]},
            {label:"N",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"な",rom:"na"},{ch:"に",rom:"ni"},{ch:"ぬ",rom:"nu"},{ch:"ね",rom:"ne"},{ch:"の",rom:"no"}]},
            {label:"H",color:"#2ECDAB",cells:[{ch:"",rom:""},{ch:"は",rom:"ha"},{ch:"ひ",rom:"hi"},{ch:"ふ",rom:"fu"},{ch:"へ",rom:"he"},{ch:"ほ",rom:"ho"}]},
            {label:"M",color:"#2ECDAB",cells:[{ch:"",rom:""},{ch:"ま",rom:"ma"},{ch:"み",rom:"mi"},{ch:"む",rom:"mu"},{ch:"め",rom:"me"},{ch:"も",rom:"mo"}]},
            {label:"Y",color:"#F5A623",cells:[{ch:"",rom:""},{ch:"や",rom:"ya"},{ch:"",rom:""},{ch:"ゆ",rom:"yu"},{ch:"",rom:""},{ch:"よ",rom:"yo"}]},
            {label:"R",color:"#F5A623",cells:[{ch:"",rom:""},{ch:"ら",rom:"ra"},{ch:"り",rom:"ri"},{ch:"る",rom:"ru"},{ch:"れ",rom:"re"},{ch:"ろ",rom:"ro"}]},
            {label:"W/N",color:"#9B9B9B",cells:[{ch:"",rom:""},{ch:"わ",rom:"wa"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"を",rom:"wo"}]},
            {label:"",color:"#9B9B9B",cells:[{ch:"",rom:""},{ch:"ん",rom:"n"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          ]}},
      ]},
    {id:"ja_katakana",title:"Katakana Chart",icon:"カ",desc:"46 angular characters for foreign loanwords and emphasis",
      items:[
        {fk:"fk_katakana_grid",title:"Basic katakana grid",audio_id:null,
          desc:"Same sounds as hiragana, angular shapes. Used for foreign words: コーヒー (coffee), テレビ (TV).",
          grid:{cols:6,headers:["","a","i","u","e","o"],rows:[
            {label:"Vowels",color:"#E85D75",cells:[{ch:"",rom:""},{ch:"ア",rom:"a"},{ch:"イ",rom:"i"},{ch:"ウ",rom:"u"},{ch:"エ",rom:"e"},{ch:"オ",rom:"o"}]},
            {label:"K",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"カ",rom:"ka"},{ch:"キ",rom:"ki"},{ch:"ク",rom:"ku"},{ch:"ケ",rom:"ke"},{ch:"コ",rom:"ko"}]},
            {label:"S",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"サ",rom:"sa"},{ch:"シ",rom:"shi"},{ch:"ス",rom:"su"},{ch:"セ",rom:"se"},{ch:"ソ",rom:"so"}]},
            {label:"T",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"タ",rom:"ta"},{ch:"チ",rom:"chi"},{ch:"ツ",rom:"tsu"},{ch:"テ",rom:"te"},{ch:"ト",rom:"to"}]},
            {label:"N",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"ナ",rom:"na"},{ch:"ニ",rom:"ni"},{ch:"ヌ",rom:"nu"},{ch:"ネ",rom:"ne"},{ch:"ノ",rom:"no"}]},
            {label:"H",color:"#2ECDAB",cells:[{ch:"",rom:""},{ch:"ハ",rom:"ha"},{ch:"ヒ",rom:"hi"},{ch:"フ",rom:"fu"},{ch:"ヘ",rom:"he"},{ch:"ホ",rom:"ho"}]},
            {label:"M",color:"#2ECDAB",cells:[{ch:"",rom:""},{ch:"マ",rom:"ma"},{ch:"ミ",rom:"mi"},{ch:"ム",rom:"mu"},{ch:"メ",rom:"me"},{ch:"モ",rom:"mo"}]},
            {label:"Y",color:"#F5A623",cells:[{ch:"",rom:""},{ch:"ヤ",rom:"ya"},{ch:"",rom:""},{ch:"ユ",rom:"yu"},{ch:"",rom:""},{ch:"ヨ",rom:"yo"}]},
            {label:"R",color:"#F5A623",cells:[{ch:"",rom:""},{ch:"ラ",rom:"ra"},{ch:"リ",rom:"ri"},{ch:"ル",rom:"ru"},{ch:"レ",rom:"re"},{ch:"ロ",rom:"ro"}]},
            {label:"W/N",color:"#9B9B9B",cells:[{ch:"",rom:""},{ch:"ワ",rom:"wa"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"ヲ",rom:"wo"}]},
            {label:"",color:"#9B9B9B",cells:[{ch:"",rom:""},{ch:"ン",rom:"n"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          ]}},
      ]},
    {id:"ja_dakuten",title:"Voiced Sounds",icon:"゛",desc:"Dakuten (゛) and handakuten (゜) marks change consonants",
      items:[
        {fk:"fk_dakuten_grid",title:"Dakuten and handakuten chart",audio_id:null,
          desc:"Add ゛ to voice a consonant (k→g, s→z, t→d, h→b). Add ゜ to the H-row only for p-sounds.",
          grid:{cols:6,headers:["","a","i","u","e","o"],rows:[
            {label:"G (K+゛)",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"が",rom:"ga"},{ch:"ぎ",rom:"gi"},{ch:"ぐ",rom:"gu"},{ch:"げ",rom:"ge"},{ch:"ご",rom:"go"}]},
            {label:"Z (S+゛)",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"ざ",rom:"za"},{ch:"じ",rom:"ji"},{ch:"ず",rom:"zu"},{ch:"ぜ",rom:"ze"},{ch:"ぞ",rom:"zo"}]},
            {label:"D (T+゛)",color:"#4A8FE7",cells:[{ch:"",rom:""},{ch:"だ",rom:"da"},{ch:"ぢ",rom:"(ji)"},{ch:"づ",rom:"(zu)"},{ch:"で",rom:"de"},{ch:"ど",rom:"do"}]},
            {label:"B (H+゛)",color:"#2ECDAB",cells:[{ch:"",rom:""},{ch:"ば",rom:"ba"},{ch:"び",rom:"bi"},{ch:"ぶ",rom:"bu"},{ch:"べ",rom:"be"},{ch:"ぼ",rom:"bo"}]},
            {label:"P (H+゜)",color:"#E85D75",cells:[{ch:"",rom:""},{ch:"ぱ",rom:"pa"},{ch:"ぴ",rom:"pi"},{ch:"ぷ",rom:"pu"},{ch:"ぺ",rom:"pe"},{ch:"ぽ",rom:"po"}]},
          ]}},
      ]},
    {id:"ja_combo",title:"Combo Sounds",icon:"き���",desc:"Small ゃゅょ merge with i-column characters",
      items:[
        {fk:"fk_combo_grid",title:"Combination syllable chart",audio_id:null,
          desc:"Attach small ゃ(ya), ゅ(yu), ょ(yo) to i-column characters. SIZE MATTERS: きや = ki-ya (2), きゃ = kya (1).",
          grid:{cols:4,headers:["Base","+ ゃ","+ ゅ","+ ょ"],rows:[
            {label:"K",color:"#4A8FE7",cells:[{ch:"き",rom:"ki"},{ch:"きゃ",rom:"kya"},{ch:"きゅ",rom:"kyu"},{ch:"きょ",rom:"kyo"}]},
            {label:"S",color:"#4A8FE7",cells:[{ch:"し",rom:"shi"},{ch:"しゃ",rom:"sha"},{ch:"しゅ",rom:"shu"},{ch:"しょ",rom:"sho"}]},
            {label:"T",color:"#4A8FE7",cells:[{ch:"ち",rom:"chi"},{ch:"ちゃ",rom:"cha"},{ch:"ちゅ",rom:"chu"},{ch:"ちょ",rom:"cho"}]},
            {label:"N",color:"#2ECDAB",cells:[{ch:"に",rom:"ni"},{ch:"にゃ",rom:"nya"},{ch:"にゅ",rom:"nyu"},{ch:"にょ",rom:"nyo"}]},
            {label:"H",color:"#2ECDAB",cells:[{ch:"ひ",rom:"hi"},{ch:"ひゃ",rom:"hya"},{ch:"ひゅ",rom:"hyu"},{ch:"ひょ",rom:"hyo"}]},
            {label:"M",color:"#2ECDAB",cells:[{ch:"み",rom:"mi"},{ch:"みゃ",rom:"mya"},{ch:"みゅ",rom:"myu"},{ch:"みょ",rom:"myo"}]},
            {label:"R",color:"#F5A623",cells:[{ch:"り",rom:"ri"},{ch:"りゃ",rom:"rya"},{ch:"りゅ",rom:"ryu"},{ch:"りょ",rom:"ryo"}]},
          ]}},
      ]},
    {id:"ja_kanji_basics",title:"Kanji Basics",icon:"漢",desc:"Basic kanji awareness: readings, radicals, and furigana",
      items:[
        {fk:"fk_kanji_overview",title:"Kanji reading types",audio_id:null,
          desc:"Each kanji has kun'yomi (native Japanese) and on'yomi (Chinese-derived) readings. Furigana show pronunciation.",
          grid:{cols:4,headers:["Kanji","Meaning","Kun'yomi","On'yomi"],rows:[
            {label:"",color:"#E85D75",cells:[{ch:"山",rom:""},{ch:"Mountain",rom:""},{ch:"やま yama",rom:"standalone"},{ch:"さん san",rom:"compounds"}]},
            {label:"",color:"#4A8FE7",cells:[{ch:"水",rom:""},{ch:"Water",rom:""},{ch:"みず mizu",rom:"standalone"},{ch:"すい sui",rom:"compounds"}]},
            {label:"",color:"#2ECDAB",cells:[{ch:"日",rom:""},{ch:"Sun/Day",rom:""},{ch:"ひ hi",rom:"standalone"},{ch:"にち nichi",rom:"compounds"}]},
            {label:"",color:"#F5A623",cells:[{ch:"月",rom:""},{ch:"Moon/Month",rom:""},{ch:"つき tsuki",rom:"standalone"},{ch:"げつ getsu",rom:"compounds"}]},
            {label:"",color:"#E85D75",cells:[{ch:"人",rom:""},{ch:"Person",rom:""},{ch:"ひと hito",rom:"standalone"},{ch:"じん jin",rom:"compounds"}]},
            {label:"",color:"#4A8FE7",cells:[{ch:"大",rom:""},{ch:"Big",rom:""},{ch:"おおきい ookii",rom:"standalone"},{ch:"だい dai",rom:"compounds"}]},
            {label:"",color:"#2ECDAB",cells:[{ch:"木",rom:""},{ch:"Tree",rom:""},{ch:"き ki",rom:"standalone"},{ch:"もく moku",rom:"compounds"}]},
          ]}},
      ]},
  ]},
  it:{name:"Italian Foundations",icon:"🇮🇹",sections:[

    // ─────────── 1. THE ITALIAN ALPHABET & VOWELS ───────────
    {id:"it_alphabet",title:"L'Alfabeto e le Vocali",icon:"🔤",desc:"21 native letters plus 5 foreign letters (j, k, w, x, y). Italian is highly phonetic.",
      items:[
        {fk:"fk_alphabet_overview",title:"Italian letter grid",desc:"21 native letters. J, K, W, X, Y appear only in foreign loanwords. Spelling is almost perfectly phonetic.",
          grid:{cols:7,headers:["","","","","","",""],rows:[
            {label:"A-G",color:"#009246",cells:[{ch:"A",rom:"ah"},{ch:"B",rom:"bee"},{ch:"C",rom:"chee"},{ch:"D",rom:"dee"},{ch:"E",rom:"eh"},{ch:"F",rom:"EF-feh"},{ch:"G",rom:"jee"}]},
            {label:"H-P",color:"#FFFFFF",cells:[{ch:"H",rom:"AHK-ka"},{ch:"I",rom:"ee"},{ch:"L",rom:"EL-leh"},{ch:"M",rom:"EM-meh"},{ch:"N",rom:"EN-neh"},{ch:"O",rom:"oh"},{ch:"P",rom:"pee"}]},
            {label:"Q-Z",color:"#CE2B37",cells:[{ch:"Q",rom:"koo"},{ch:"R",rom:"ER-reh"},{ch:"S",rom:"ES-seh"},{ch:"T",rom:"tee"},{ch:"U",rom:"oo"},{ch:"V",rom:"vee"},{ch:"Z",rom:"DZEH-ta"}]},
            {label:"Foreign",color:"#999999",cells:[{ch:"J",rom:"ee LOON-ga"},{ch:"K",rom:"KAP-pa"},{ch:"W",rom:"DOP-pya voo"},{ch:"X",rom:"eeks"},{ch:"Y",rom:"EEP-see-lon"},{ch:"",rom:""},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_vowel_grid",title:"The five Italian vowels",desc:"Italian has 5 vowel letters but 7 vowel sounds. E and O each have an open and closed variant. A, I, U have one sound each.",
          grid:{cols:3,headers:["Vowel","Sound","Examples"],rows:[
            {label:"A",color:"#E85D75",cells:[{ch:"a",rom:"ah"},{ch:"Like English 'father', always the same",rom:""},{ch:"casa, mamma, banana",rom:""}]},
            {label:"E (open)",color:"#F5A623",cells:[{ch:"e aperta",rom:"eh"},{ch:"Like English 'bed'",rom:""},{ch:"bello, terra, festa",rom:""}]},
            {label:"E (closed)",color:"#F5A623",cells:[{ch:"e chiusa",rom:"ay"},{ch:"Like English 'day' but without the glide",rom:""},{ch:"sera, verde, mese",rom:""}]},
            {label:"I",color:"#2ECDAB",cells:[{ch:"i",rom:"ee"},{ch:"Like English 'see', always crisp",rom:""},{ch:"vino, pizza, amici",rom:""}]},
            {label:"O (open)",color:"#4A8FE7",cells:[{ch:"o aperta",rom:"aw"},{ch:"Like English 'or'",rom:""},{ch:"cosa, donna, morte",rom:""}]},
            {label:"O (closed)",color:"#4A8FE7",cells:[{ch:"o chiusa",rom:"oh"},{ch:"Like English 'go' without the glide",rom:""},{ch:"nome, sole, voce",rom:""}]},
            {label:"U",color:"#7B5EE8",cells:[{ch:"u",rom:"oo"},{ch:"Like English 'food', lips rounded",rom:""},{ch:"uno, luna, uva",rom:""}]},
          ]}},
        {fk:"fk_special_chars",title:"Accent marks in Italian",desc:"Grave accent (a, i, o, u) and acute accent (e only). Accents are written only on final-syllable stress words and a few short words.",
          grid:{cols:3,headers:["Mark","When used","Examples"],rows:[
            {label:"Grave (a, i, o, u)",color:"#E85D75",cells:[{ch:"a, i, o, u",rom:""},{ch:"Always grave on these vowels",rom:""},{ch:"citta, cosi, piu, andro",rom:""}]},
            {label:"Grave (e)",color:"#F5A623",cells:[{ch:"e (open sound)",rom:""},{ch:"Open e: common in everyday words",rom:""},{ch:"e (is), caffe, cioe",rom:""}]},
            {label:"Acute (e)",color:"#4A8FE7",cells:[{ch:"e (closed sound)",rom:""},{ch:"Closed e: why, because, neither",rom:""},{ch:"perche, affinche, ne",rom:""}]},
            {label:"Meaning pairs",color:"#7B5EE8",cells:[{ch:"Accent changes meaning",rom:""},{ch:"Same spelling, different words",rom:""},{ch:"e/e (and/is), si/si (himself/yes), la/la (the/there)",rom:""}]},
          ]}},
      ]},

    // ─────────── 2. CONSONANT RULES ───────────
    {id:"it_consonants",title:"Consonant Rules",icon:"🗣️",desc:"C/G hard and soft rules, digraphs (CH, GH, SC, GN, GL), and double consonants",
      items:[
        {fk:"fk_spelling_rules",title:"C and G: two sounds each",desc:"C and G each have a hard and soft sound determined by the following vowel. CH and GH force hard sounds before e/i.",
          grid:{cols:3,headers:["Combo","Sound","Examples"],rows:[
            {label:"C + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard C",rom:""},{ch:"K sound",rom:""},{ch:"casa, cosa, cuore",rom:""}]},
            {label:"C + e, i",color:"#E85D75",cells:[{ch:"Soft C",rom:""},{ch:"CH as in church",rom:""},{ch:"cena, cinema, ciao",rom:""}]},
            {label:"CH + e, i",color:"#4A8FE7",cells:[{ch:"CH",rom:""},{ch:"Forces hard K (H is silent)",rom:""},{ch:"che, chi, anche, chiave",rom:""}]},
            {label:"G + a, o, u",color:"#2ECDAB",cells:[{ch:"Hard G",rom:""},{ch:"G as in go",rom:""},{ch:"gatto, gonna, gusto",rom:""}]},
            {label:"G + e, i",color:"#E85D75",cells:[{ch:"Soft G",rom:""},{ch:"J as in jelly",rom:""},{ch:"gelato, giorno, gente",rom:""}]},
            {label:"GH + e, i",color:"#4A8FE7",cells:[{ch:"GH",rom:""},{ch:"Forces hard G (H is silent)",rom:""},{ch:"spaghetti, ghetto, ghiaccio",rom:""}]},
          ]}},
        {fk:"fk_consonant_grid",title:"Special Italian digraphs",desc:"SC, GN, and GLI produce sounds that have no single-letter equivalent. These are among the trickiest Italian sounds for English speakers.",
          grid:{cols:3,headers:["Digraph","Sound","Examples"],rows:[
            {label:"SC + e, i",color:"#E85D75",cells:[{ch:"sce, sci",rom:""},{ch:"SH as in shoe",rom:""},{ch:"scena, sci, pesce, uscire",rom:""}]},
            {label:"SCH + e, i",color:"#4A8FE7",cells:[{ch:"sche, schi",rom:""},{ch:"SK sound (forces hard)",rom:""},{ch:"schema, scherzare, fischio",rom:""}]},
            {label:"GN",color:"#F5A623",cells:[{ch:"gn",rom:""},{ch:"NY as in canyon",rom:""},{ch:"gnocchi, lasagna, bagno, sogno",rom:""}]},
            {label:"GLI",color:"#7B5EE8",cells:[{ch:"gli",rom:""},{ch:"LY as in million",rom:""},{ch:"figlio, moglie, aglio, famiglia",rom:""}]},
          ]}},
        {fk:"fk_consonant_grid",title:"Double consonants",desc:"Double consonants are CRITICAL in Italian. They are held longer (not repeated). Mixing them up changes meaning entirely!",
          grid:{cols:3,headers:["Single","Double","Meaning change"],rows:[
            {label:"p/pp",color:"#E85D75",cells:[{ch:"papa",rom:"single p"},{ch:"pappa",rom:"double pp"},{ch:"pope vs baby food",rom:""}]},
            {label:"n/nn",color:"#F5A623",cells:[{ch:"nono",rom:"single n"},{ch:"nonno",rom:"double nn"},{ch:"ninth vs grandfather",rom:""}]},
            {label:"l/ll",color:"#4A8FE7",cells:[{ch:"capello",rom:"single l"},{ch:"cappello",rom:"double pp"},{ch:"hair vs hat",rom:""}]},
            {label:"t/tt",color:"#2ECDAB",cells:[{ch:"caro",rom:"single r"},{ch:"carro",rom:"double rr"},{ch:"dear vs cart",rom:""}]},
            {label:"s/ss",color:"#7B5EE8",cells:[{ch:"casa",rom:"single s"},{ch:"cassa",rom:"double ss"},{ch:"house vs crate",rom:""}]},
          ]}},
        {fk:"fk_consonant_grid",title:"Silent H and other traps",desc:"H is ALWAYS silent in Italian. R is rolled/trilled. Z has two sounds (ts and dz).",
          examples:["H is ALWAYS silent: hotel = o-TEL, hanno = AN-no","R is rolled/trilled, never the English R sound","Z can be voiceless (ts): pizza, grazie, stazione","Z can be voiced (dz): zero, zona, pranzo","S between vowels is often voiced (z sound): casa, rosa"]},
      ]},

    // ─────────── 3. STRESS & ACCENT MARKS ───────────
    {id:"it_stress",title:"Stress and Accent Marks",icon:"📐",desc:"Most Italian words stress the second-to-last syllable. Accents appear only on final-syllable stress.",
      items:[
        {fk:"fk_stress_rules",title:"Default stress pattern",desc:"Most Italian words stress the penultimate (second-to-last) syllable. No accent mark is written because this is the default.",
          grid:{cols:3,headers:["Pattern","Rule","Examples"],rows:[
            {label:"Penultimate (most common)",color:"#2ECDAB",cells:[{ch:"Parole piane",rom:""},{ch:"Stress second-to-last syllable",rom:""},{ch:"ca-SA, ra-GAZ-zo, a-MI-co, par-LA-re",rom:""}]},
            {label:"Final (written accent)",color:"#E85D75",cells:[{ch:"Parole tronche",rom:""},{ch:"Accent mark on final vowel",rom:""},{ch:"cit-TA, per-CHE, gio-VEN-TU, ca-FE",rom:""}]},
            {label:"Third-to-last",color:"#F5A623",cells:[{ch:"Parole sdrucciole",rom:""},{ch:"No accent written (memorize these)",rom:""},{ch:"TA-vo-lo, NU-me-ro, TE-le-fo-no",rom:""}]},
          ]}},
        {fk:"fk_stress_rules",title:"Accent marks that distinguish meaning",desc:"Some short Italian words have identical spelling but different meanings. The accent mark is the only difference.",
          grid:{cols:3,headers:["With accent","Without accent","Difference"],rows:[
            {label:"e / e",color:"#E85D75",cells:[{ch:"e",rom:""},{ch:"e",rom:""},{ch:"is (verb) / and (conjunction)",rom:""}]},
            {label:"si / si",color:"#F5A623",cells:[{ch:"si",rom:""},{ch:"si",rom:""},{ch:"yes / himself, herself",rom:""}]},
            {label:"la / la",color:"#4A8FE7",cells:[{ch:"la",rom:""},{ch:"la",rom:""},{ch:"there / the (feminine article)",rom:""}]},
            {label:"da / da",color:"#2ECDAB",cells:[{ch:"da",rom:""},{ch:"da",rom:""},{ch:"gives (verb) / from (preposition)",rom:""}]},
            {label:"ne / ne",color:"#7B5EE8",cells:[{ch:"ne",rom:""},{ch:"ne",rom:""},{ch:"neither, nor / of it, some",rom:""}]},
          ]}},
      ]},

    // ─────────── 4. SPELLING PATTERNS ───────────
    {id:"it_spelling",title:"Spelling Patterns",icon:"📝",desc:"Gender, plurals, articles, and the apostrophe",
      items:[
        {fk:"fk_grammar_preview",title:"Gender and plural patterns",desc:"Italian nouns have masculine or feminine gender. Plurals change the final vowel, not by adding -s like English.",
          grid:{cols:3,headers:["Pattern","Singular to Plural","Examples"],rows:[
            {label:"Masc -o > -i",color:"#4A8FE7",cells:[{ch:"Masculine",rom:""},{ch:"-o becomes -i",rom:""},{ch:"ragazzo > ragazzi, libro > libri",rom:""}]},
            {label:"Fem -a > -e",color:"#E85D75",cells:[{ch:"Feminine",rom:""},{ch:"-a becomes -e",rom:""},{ch:"ragazza > ragazze, casa > case",rom:""}]},
            {label:"-e > -i (both)",color:"#F5A623",cells:[{ch:"Either gender",rom:""},{ch:"-e becomes -i",rom:""},{ch:"padre > padri, notte > notti",rom:""}]},
          ]}},
        {fk:"fk_grammar_preview",title:"The definite articles: il, lo, la, i, gli, le",desc:"Italian has six definite articles (English has just 'the'). The choice depends on gender AND the first letter(s) of the noun.",
          grid:{cols:3,headers:["Article","Used with","Examples"],rows:[
            {label:"il / i",color:"#4A8FE7",cells:[{ch:"il (sg), i (pl)",rom:""},{ch:"Masculine nouns starting with most consonants",rom:""},{ch:"il libro / i libri, il gatto / i gatti",rom:""}]},
            {label:"lo / gli",color:"#2ECDAB",cells:[{ch:"lo (sg), gli (pl)",rom:""},{ch:"Masculine nouns starting with z, s+consonant, gn, ps, x",rom:""},{ch:"lo zio / gli zii, lo studente / gli studenti",rom:""}]},
            {label:"la / le",color:"#E85D75",cells:[{ch:"la (sg), le (pl)",rom:""},{ch:"Feminine nouns",rom:""},{ch:"la casa / le case, la donna / le donne",rom:""}]},
            {label:"l' (apostrophe)",color:"#F5A623",cells:[{ch:"l' (sg)",rom:""},{ch:"Before any vowel (masculine or feminine)",rom:""},{ch:"l'uomo, l'acqua, l'amico, l'amica",rom:""}]},
          ]}},
      ]},
  ]},
  pt:{name:"Portuguese Foundations",icon:"🇧🇷",sections:[]},
  ru:{name:"Russian Foundations",icon:"🇷🇺",sections:[
    {id:"ru_cyrillic",title:"The Russian Alphabet (Кириллица)",icon:"🔤",desc:"33 letters: 10 vowels, 21 consonants, plus the soft sign (ь) and hard sign (ъ).",
      items:[
        {fk:"fk_alphabet_overview",title:"Cyrillic letter grid",desc:"Many letters look like Latin but sound different! А=A, В=V (not B!), Н=N (not H!), Р=R (not P!), С=S (not C!).",
          grid:{cols:8,headers:["","","","","","","",""],rows:[
            {label:"А–З",color:"#0039A6",cells:[{ch:"А",rom:"a"},{ch:"Б",rom:"b"},{ch:"В",rom:"v"},{ch:"Г",rom:"g"},{ch:"Д",rom:"d"},{ch:"Е",rom:"ye"},{ch:"Ё",rom:"yo"},{ch:"Ж",rom:"zh"}]},
            {label:"З–О",color:"#D52B1E",cells:[{ch:"З",rom:"z"},{ch:"И",rom:"i"},{ch:"Й",rom:"y"},{ch:"К",rom:"k"},{ch:"Л",rom:"l"},{ch:"М",rom:"m"},{ch:"Н",rom:"n"},{ch:"О",rom:"o"}]},
            {label:"П–Х",color:"#0039A6",cells:[{ch:"П",rom:"p"},{ch:"Р",rom:"r"},{ch:"С",rom:"s"},{ch:"Т",rom:"t"},{ch:"У",rom:"u"},{ch:"Ф",rom:"f"},{ch:"Х",rom:"kh"},{ch:"Ц",rom:"ts"}]},
            {label:"Ч–Я",color:"#D52B1E",cells:[{ch:"Ч",rom:"ch"},{ch:"Ш",rom:"sh"},{ch:"Щ",rom:"shch"},{ch:"Ъ",rom:"(hard)"},{ch:"Ы",rom:"y"},{ch:"Ь",rom:"(soft)"},{ch:"Э",rom:"e"},{ch:"Ю",rom:"yu"}]},
            {label:"Я",color:"#0039A6",cells:[{ch:"Я",rom:"ya"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_false_friends",title:"False friends (look-alike traps)",desc:"These Cyrillic letters look Latin but sound completely different. This is the #1 beginner mistake!",
          grid:{cols:6,headers:["Cyrillic","Sound","Not!","Cyrillic","Sound","Not!"],rows:[
            {label:"Traps",color:"#D52B1E",cells:[{ch:"В",rom:"v"},{ch:"(not B)",rom:""},{ch:"",rom:""},{ch:"Н",rom:"n"},{ch:"(not H)",rom:""},{ch:"",rom:""}]},
            {label:"",color:"#0039A6",cells:[{ch:"Р",rom:"r"},{ch:"(not P)",rom:""},{ch:"",rom:""},{ch:"С",rom:"s"},{ch:"(not C)",rom:""},{ch:"",rom:""}]},
            {label:"",color:"#D52B1E",cells:[{ch:"У",rom:"u"},{ch:"(not Y)",rom:""},{ch:"",rom:""},{ch:"Х",rom:"kh"},{ch:"(not X)",rom:""},{ch:"",rom:""}]},
          ]}},
        {fk:"fk_soft_hard",title:"Soft sign (ь) & Hard sign (ъ)",desc:"ь softens the preceding consonant (like adding a tiny 'y'). ъ separates a consonant from a following vowel. Neither makes a sound on its own.",
          examples:["мать /matʲ/ (mother): soft Т","объект /ɐbʲˈjekt/ (object): hard sign separates Б from Е"]},
        {fk:"fk_phonology",title:"Russian vowel reduction & stress",desc:"Unstressed О sounds like /ɐ/ (close to A). Unstressed Е/Я become /ɪ/. Stress is unpredictable and must be memorized per word. This vowel reduction is the #2 challenge after Cyrillic.",
          examples:["молоко /mɐlɐˈko/ (milk): the two О's before stress = /ɐ/","хорошо /xɐrɐˈʂo/ (good): stress on last О","Москва /mɐˈskva/ (Moscow): О before stress = /ɐ/"]},
        {fk:"fk_spelling_rules",title:"Russian spelling rules",desc:"After К Г Х Ж Ч Ш Щ, never write Ы (use И). After Ж Ч Ш Щ Ц, never write Ю/Я (use У/А). These 'spelling rules' are 100% consistent and simplify writing.",
          examples:["книги /ˈknʲigʲɪ/ (books): ГИ not ГЫ","чашка /ˈtʃaʂkə/ (cup): ША not ШЯ","хорошие /xɐˈroʂɨjə/ (good, pl.): ШИ not ШЫ"]},
      ]},
  ]},
  // ══════════════════════════════════════════════════════════════════
  // CHINESE (MANDARIN) FOUNDATIONS
  // ══════════════════════════════════════════════════════════════════
  zh:{name:"Chinese Foundations",icon:"🇨🇳",sections:[
    {id:"zh_tones",title:"The Four Tones",icon:"🎵",desc:"Mandarin has 4 tones + a neutral tone. Tones change meaning completely.",
      items:[
        {fk:"fk_tone_system",title:"Tone chart",audio_id:null,
          desc:"Each syllable has a tone. The same pinyin with different tones means completely different things. ma can mean mother, hemp, horse, or scold.",
          grid:{cols:4,headers:["Tone","Mark","Pattern","Example"],rows:[
            {label:"1st",color:"#D50000",cells:[{ch:"1st",rom:""},{ch:"\u0304",rom:"macron"},{ch:"High flat",rom:"mmmm"},{ch:"m\u0101 (mother)",rom:""}]},
            {label:"2nd",color:"#2ECDA7",cells:[{ch:"2nd",rom:""},{ch:"\u0301",rom:"acute"},{ch:"Rising",rom:"what?"},{ch:"m\u00E1 (hemp)",rom:""}]},
            {label:"3rd",color:"#4A8FE7",cells:[{ch:"3rd",rom:""},{ch:"\u030C",rom:"caron"},{ch:"Dip then rise",rom:"well..."},{ch:"m\u01CE (horse)",rom:""}]},
            {label:"4th",color:"#E8960A",cells:[{ch:"4th",rom:""},{ch:"\u0300",rom:"grave"},{ch:"Sharp falling",rom:"no!"},{ch:"m\u00E0 (scold)",rom:""}]},
          ]}},
      ]},
    {id:"zh_pinyin_initials",title:"Pinyin Initials",icon:"🔤",desc:"21 initial consonants in Mandarin, grouped by articulation",
      items:[
        {fk:"fk_pinyin_initials",title:"Pinyin initials chart",audio_id:null,
          desc:"Pinyin initials are the consonant sounds that begin a syllable. Some look like English but sound different. Pay special attention to the retroflex (zh, ch, sh, r) and palatal (j, q, x) groups.",
          grid:{cols:5,headers:["Group","","","",""],rows:[
            {label:"Labial",color:"#4A8FE7",cells:[{ch:"b",rom:"b as in 'ball'"},{ch:"p",rom:"p as in 'pan'"},{ch:"m",rom:"m as in 'mom'"},{ch:"f",rom:"f as in 'fun'"},{ch:"",rom:""}]},
            {label:"Alveolar",color:"#4A8FE7",cells:[{ch:"d",rom:"d as in 'dog'"},{ch:"t",rom:"t as in 'top'"},{ch:"n",rom:"n as in 'no'"},{ch:"l",rom:"l as in 'let'"},{ch:"",rom:""}]},
            {label:"Velar",color:"#2ECDAB",cells:[{ch:"g",rom:"g as in 'go'"},{ch:"k",rom:"k as in 'key'"},{ch:"h",rom:"h as in 'hat'"},{ch:"",rom:""},{ch:"",rom:""}]},
            {label:"Palatal",color:"#E85D75",cells:[{ch:"j",rom:"j like 'jee'"},{ch:"q",rom:"q like 'chee'"},{ch:"x",rom:"x like 'shee'"},{ch:"",rom:""},{ch:"",rom:""}]},
            {label:"Retroflex",color:"#F5A623",cells:[{ch:"zh",rom:"zh tongue curled"},{ch:"ch",rom:"ch tongue curled"},{ch:"sh",rom:"sh tongue curled"},{ch:"r",rom:"r tongue curled"},{ch:"",rom:""}]},
            {label:"Dental",color:"#9B9B9B",cells:[{ch:"z",rom:"z as in 'adds'"},{ch:"c",rom:"c as in 'cats'"},{ch:"s",rom:"s as in 'sun'"},{ch:"",rom:""},{ch:"",rom:""}]},
          ]}},
      ]},
    {id:"zh_pinyin_finals",title:"Pinyin Finals",icon:"🗣️",desc:"Simple and compound vowel sounds that complete each syllable",
      items:[
        {fk:"fk_pinyin_finals",title:"Pinyin finals chart",audio_id:null,
          desc:"Finals are the vowel parts of a syllable. Simple finals are single vowels. Compound finals combine vowels. Nasal finals end with -n or -ng.",
          grid:{cols:5,headers:["Type","","","",""],rows:[
            {label:"Simple",color:"#4A8FE7",cells:[{ch:"a",rom:"ah"},{ch:"o",rom:"oh"},{ch:"e",rom:"uh"},{ch:"i",rom:"ee"},{ch:"u",rom:"oo"}]},
            {label:"Special",color:"#E85D75",cells:[{ch:"\u00FC",rom:"like French u"},{ch:"er",rom:"arr"},{ch:"",rom:""},{ch:"",rom:""},{ch:"",rom:""}]},
            {label:"Compound",color:"#2ECDAB",cells:[{ch:"ai",rom:"eye"},{ch:"ei",rom:"ay"},{ch:"ao",rom:"ow"},{ch:"ou",rom:"oh"},{ch:"",rom:""}]},
            {label:"Nasal -n",color:"#F5A623",cells:[{ch:"an",rom:"ahn"},{ch:"en",rom:"uhn"},{ch:"in",rom:"een"},{ch:"un",rom:"wen"},{ch:"\u00FCn",rom:"u-en"}]},
            {label:"Nasal -ng",color:"#F5A623",cells:[{ch:"ang",rom:"ahng"},{ch:"eng",rom:"uhng"},{ch:"ing",rom:"eeng"},{ch:"ong",rom:"oong"},{ch:"",rom:""}]},
          ]}},
      ]},
    {id:"zh_radicals",title:"Common Radicals",icon:"⿱",desc:"Radicals are building blocks of Chinese characters. Learn 20 key radicals to decode new characters.",
      items:[
        {fk:"fk_logograph_intro",title:"Basic radicals",audio_id:null,
          desc:"Every Chinese character is made of components called radicals. Knowing radicals helps you guess meaning and look up characters. Here are 20 of the most common.",
          grid:{cols:4,headers:["Radical","Meaning","Example",""],rows:[
            {label:"People",color:"#4A8FE7",cells:[{ch:"人/亻",rom:"person"},{ch:"大",rom:"big"},{ch:"你 (you)",rom:"亻+ you"},{ch:"",rom:""}]},
            {label:"Nature",color:"#2ECDAB",cells:[{ch:"水/氵",rom:"water"},{ch:"火/灬",rom:"fire"},{ch:"河 (river)",rom:"氵+ can"},{ch:"",rom:""}]},
            {label:"Body",color:"#E85D75",cells:[{ch:"口",rom:"mouth"},{ch:"手/扌",rom:"hand"},{ch:"吃 (eat)",rom:"口+ beg"},{ch:"",rom:""}]},
            {label:"Nature",color:"#F5A623",cells:[{ch:"木",rom:"tree/wood"},{ch:"日",rom:"sun/day"},{ch:"明 (bright)",rom:"日+ moon"},{ch:"",rom:""}]},
            {label:"Place",color:"#9B7AE8",cells:[{ch:"门/門",rom:"door/gate"},{ch:"土",rom:"earth"},{ch:"地 (ground)",rom:"土+ also"},{ch:"",rom:""}]},
          ]}},
      ]},
    {id:"zh_strokes",title:"Basic Strokes",icon:"✍️",desc:"8 fundamental stroke types used to write all Chinese characters",
      items:[
        {fk:"fk_stroke_order",title:"Stroke types",audio_id:null,
          desc:"Chinese characters are written with a fixed set of strokes in a specific order. Learning the 8 basic strokes makes writing logical and consistent.",
          grid:{cols:4,headers:["Stroke","Name","Direction","Example"],rows:[
            {label:"1",color:"#4A8FE7",cells:[{ch:"\u4E00",rom:"horizontal"},{ch:"h\u00E9ng",rom:""},{ch:"left to right",rom:""},{ch:"\u4E00 (one)",rom:""}]},
            {label:"2",color:"#4A8FE7",cells:[{ch:"\u4E28",rom:"vertical"},{ch:"sh\u00F9",rom:""},{ch:"top to bottom",rom:""},{ch:"\u5341 (ten)",rom:""}]},
            {label:"3",color:"#2ECDAB",cells:[{ch:"\u4E3F",rom:"left-falling"},{ch:"pi\u011B",rom:""},{ch:"top-right to bottom-left",rom:""},{ch:"\u4EBA (person)",rom:""}]},
            {label:"4",color:"#2ECDAB",cells:[{ch:"\u4E36",rom:"dot"},{ch:"di\u01CEn",rom:""},{ch:"quick press",rom:""},{ch:"\u516D (six)",rom:""}]},
            {label:"5",color:"#E85D75",cells:[{ch:"\u2E81",rom:"right-falling"},{ch:"n\u00E0",rom:""},{ch:"top-left to bottom-right",rom:""},{ch:"\u516B (eight)",rom:""}]},
            {label:"6",color:"#E85D75",cells:[{ch:"\u30D5",rom:"turning"},{ch:"zh\u00E9",rom:""},{ch:"changes direction",rom:""},{ch:"\u53E3 (mouth)",rom:""}]},
            {label:"7",color:"#F5A623",cells:[{ch:"\u2E80",rom:"hook"},{ch:"g\u014Du",rom:""},{ch:"ends with upward flick",rom:""},{ch:"\u4E86 (le)",rom:""}]},
            {label:"8",color:"#F5A623",cells:[{ch:"~",rom:"rising"},{ch:"t\u00ED",rom:""},{ch:"bottom-left to top-right",rom:""},{ch:"\u6211 (I/me)",rom:""}]},
          ]}},
      ]},
  ]},
};


/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FK PLAYTHROUGH SYSTEM: "Play Through Foundations"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RULE: Every language in LANGUAGES must have an FK_PLAYTHROUGH entry
(even if it's just a placeholder with stages:[]).
This is enforced by DEV GUARD below.

SCRIPT_BLUEPRINTS defines the logical stage order per writing system.
FK_PLAYTHROUGH contains the actual lesson content.
Lessons reuse the same step shapes as the main LessonEngine:
  {type:"teach",kind:"info", ...}, {type:"mc", ...}, {type:"match", ...}, etc.
Progress is stored in user.progress.fkPlay[lang][lessonId].
This system NEVER touches user.progress.lessons or user.progress.foundation.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

export const FK_PLAYTHROUGH = {
  // ══════════════════════════════════════════════════════════════════
  // KOREAN HANGUL PLAYTHROUGH: Canonical from Research Notebook
  // 9 stages (Phase 0–8), 20 lessons, ~200 steps
  // Rules: never show Hangul not yet taught in phase, one concept per
  // step, teach→drill→use loop, ADHD/dyslexia-friendly.
  // ══════════════════════════════════════════════════════════════════
  ko:{
    name:"Learn Hangul",
    icon:"🇰🇷",
    blueprint:"hangul",
    stages:[
      // ── PHASE 0: Orientation (no real Hangul yet) ──
      {id:"ko_fp_p0",title:"Phase 0: The Block System",desc:"What Hangul blocks are, before seeing any letters",icon:"🧱",
        lessons:[
          {id:"ko_fp_p0_l1",title:"Blocks, Not Letters",icon:"🧱",xp:15,board:true,steps:[
            {type:"intro",title:"Welcome to Hangul!",desc:"Korean doesn't write letters in a line like English. It stacks letters into BLOCKS. Each block = one syllable. You'll understand the system before seeing a single letter.",goals:["Understand what a syllable block is","Know that blocks have slots","Learn the reading direction inside a block"]},
            {type:"teach",kind:"info",nl:"□",en:"A syllable block",phonetic:"",example:"□ = one block = one syllable",exampleEn:"Each square you see in Korean text is one syllable",note:"Think of each block as a small square. INSIDE the square are slots for consonants and vowels. The block is the basic unit of Korean writing, not individual letters.",diagram:"cv_v"},
            {type:"mc",q:"How many syllables does □□□ represent?",opts:["1","2","3","6"],ans:"3",hint:"Each □ = one syllable block"},
            {type:"teach",kind:"info",nl:"[C]+[V]",en:"Block slots",phonetic:"",example:"Every block has slots for its parts",exampleEn:"Start (consonant) + Vowel + optional BOTTOM",rules:[{from:"C",to:"Start slot",label:"always present"},{from:"V",to:"Vowel zone",label:"determines shape"},{from:"C₂",to:"BOTTOM slot",label:"optional (받침)"}],trigger:"inside every block",note:"The simplest block is just C+V. The BOTTOM slot comes later."},
            {type:"mc",q:"Inside a block, what is the reading direction?",opts:["Right to left, bottom to top","Circular, clockwise","Left to right, top to bottom","Random: you memorize each block"],ans:"Left to right, top to bottom",hint:"Same as English reading order, but inside one square"},
            {type:"mc",q:"A Korean syllable block is...",opts:["One letter","One word","One syllable made of assembled parts","A picture representing an idea"],ans:"One syllable made of assembled parts",hint:"Blocks are assembled from consonant + vowel parts"},
            {type:"tip",title:"Blocks Have Parts",text:"Common mistake: treating a block as a single picture.\nAlways look INSIDE for its parts:\n• Start consonant (always present)\n• Vowel (determines block shape)",deepDive:{title:"More Detail",text:"• BOTTOM consonant (optional: 받침)"},icon:"⚠️"},
          ]},
        ]},
      // ── PHASE 1: Core Vowels (ㅣ ㅡ ㅏ ㅓ ㅗ ㅜ only) ──
      {id:"ko_fp_p1",title:"Phase 1: Core Vowels",desc:"6 base vowels: the shapes that determine how every block is built",icon:"ㅏ",
        lessons:[
          {id:"ko_fp_p1_l1",title:"Vowel Pairs 1: Lines",icon:"ㅣ",xp:15,board:true,steps:[
            {type:"intro",title:"Your first vowels",desc:"You'll learn 6 vowels as 3 contrast pairs. Each pair is a mirror or rotation. Learn one, get the other free. This lesson: the two 'line' vowels.",goals:["Recognize ㅣ (VERTICAL line)","Recognize ㅡ (HORIZONTAL line)","Know which is VERTICAL vs HORIZONTAL family"]},
            {type:"teach",kind:"letter",nl:"ㅣ",en:"I",img:"📏",phonetic:"ee (like 'see')",example:"ㅣ",exampleEn:"A single VERTICAL stroke",note:"This is the simplest vowel: one VERTICAL line. It belongs to the VERTICAL family. Later it will sit to the RIGHT of a consonant.",diagram:"cv_v"},
            {type:"teach",kind:"letter",nl:"ㅡ",en:"Eu",img:"➖",phonetic:"no English equivalent, like a tight 'uh'",example:"ㅡ",exampleEn:"A single HORIZONTAL stroke",note:"One HORIZONTAL line. It belongs to the HORIZONTAL family. Later it will sit BELOW a consonant. Opposite orientation from ㅣ.",diagram:"cv_h"},
            {type:"mc",q:"Which vowel is a VERTICAL line?",opts:["ㅡ","ㅣ"],ans:"ㅣ",hint:"VERTICAL = up-and-down"},
            {type:"mc",q:"The vowel that sounds like 'eu' (a tight uh): which family does it belong to?",opts:["VERTICAL family","HORIZONTAL family"],ans:"HORIZONTAL family",hint:"Think about the shape of the vowel for this sound"},
            {type:"mc",q:"The vowel that sounds like 'i' (as in see): which family does it belong to?",opts:["HORIZONTAL family","VERTICAL family"],ans:"VERTICAL family",hint:"Think about the shape of the vowel for this sound"},
          ]},
          {id:"ko_fp_p1_l2",title:"Vowel Pairs 2 & 3: Strokes",icon:"ㅏ",xp:20,board:true,steps:[
            {type:"intro",title:"4 more vowels",desc:"Two more contrast pairs. Each pair differs ONLY by which direction the short stroke points.",goals:["Recognize ㅏ vs ㅓ (stroke RIGHT vs LEFT)","Recognize ㅗ vs ㅜ (stroke UP vs DOWN)","Sort all 6 into VERTICAL/HORIZONTAL families"]},
            {type:"teach",kind:"letter",nl:"ㅏ",en:"A",img:"👉",phonetic:"ah (as in 'father')",example:"ㅏ",exampleEn:"VERTICAL line + short stroke pointing RIGHT",note:"ㅏ = ㅣ with a short stroke pointing RIGHT. VERTICAL family. Sits to the right of a consonant.",diagram:"cv_v"},
            {type:"teach",kind:"letter",nl:"ㅓ",en:"Eo",img:"👈",phonetic:"uh (more open than 'uh')",example:"ㅓ",exampleEn:"VERTICAL line + short stroke pointing LEFT",note:"ㅓ = ㅣ with a short stroke pointing LEFT. Also VERTICAL family. The ONLY difference from ㅏ is the stroke direction. This is the #1 mirror trap for beginners.",diagram:"cv_v"},
            {type:"mc",q:"The Korean vowel for the sound 'a' (as in 'ah') has its short stroke pointing…",opts:["Left","Right","Up","Down"],ans:"Right",hint:"Picture the vowel shape in your mind"},
            {type:"teach",kind:"letter",nl:"ㅗ",en:"O",img:"👆",phonetic:"oh (as in 'go')",example:"ㅗ",exampleEn:"HORIZONTAL line + short stroke pointing UP",note:"ㅗ = ㅡ with a short stroke pointing UP. HORIZONTAL family. Sits BELOW a consonant.",diagram:"cv_h"},
            {type:"teach",kind:"letter",nl:"ㅜ",en:"U",img:"👇",phonetic:"oo (as in 'moon')",example:"ㅜ",exampleEn:"HORIZONTAL line + short stroke pointing DOWN",note:"ㅜ = ㅡ with a short stroke pointing DOWN. Also HORIZONTAL family. Mirror of ㅗ.",diagram:"cv_h"},
            {type:"mc",q:"The Korean vowel for the sound 'eo' (an open uh) has its short stroke pointing…",opts:["Right","Left","Up","Down"],ans:"Left",hint:"It is the mirror of the 'a' vowel"},
            {type:"mc",q:"Which of these are HORIZONTAL family?",opts:["ㅏ and ㅓ","ㅗ and ㅜ","ㅣ and ㅏ","ㅡ and ㅓ"],ans:"ㅗ and ㅜ",hint:"HORIZONTAL = based on the ㅡ line"},
            {type:"mc",q:"The Korean vowel for the sound 'o' (as in oh) has its short stroke pointing…",opts:["Up","Down"],ans:"Up",hint:"Picture the HORIZONTAL-family vowel for this sound"},
            {type:"mc",q:"VERTICAL family vowels sit ___ of the consonant later.",opts:["Below","To the right","Above","To the left"],ans:"To the right",hint:"VERTICAL spine → right side of block"},
            {type:"tip",title:"Mirror Trap Drill",text:"Always check the SHORT stroke direction:\n• ㅏ / ㅓ = Right vs Left\n• ㅗ / ㅜ = Up vs Down\nNever guess. Always check.",icon:"🪞"},
          ]},
        ]},
      // ── PHASE 2: Silent ㅇ & First Blocks (아 어 오 우 으 이 only) ──
      {id:"ko_fp_p2",title:"Phase 2: Silent ㅇ & First Blocks",desc:"Your first real Hangul blocks using ㅇ as the empty starter",icon:"ㅇ",
        lessons:[
          {id:"ko_fp_p2_l1",title:"The Silent Starter: ㅇ",icon:"ㅇ",xp:15,board:true,steps:[
            {type:"intro",title:"Every block needs a consonant",desc:"Korean rule: every syllable block MUST start with a consonant. But what about syllables that start with a vowel sound? That's where ㅇ comes in.",goals:["Learn that ㅇ is SILENT at the start","Build your first real blocks","Know the two block templates"]},
            {type:"teach",kind:"letter",nl:"ㅇ",en:"SILENT placeholder",img:"⭕",phonetic:"(silent in start position)",example:"ㅇ + vowel = vowel-initial syllable",exampleEn:"ㅇ fills the start slot when there's no consonant sound",note:"ㅇ in the Start slot has ZERO sound. It's just a slot-filler so the block has a consonant in the required position. Don't say 'ng' here. That sound only happens when ㅇ is at the BOTTOM of a block (you'll learn that later)."},
            {type:"mc",q:"When ㅇ is in the START slot of a block, it sounds like…",opts:["'ng' like in 'sing'","Nothing: silent","'oh'","'ah'"],ans:"Nothing: silent",hint:"SILENT placeholder = no sound"},
            {type:"mc",q:"Why does Korean use ㅇ at the start?",opts:["Every block must start with a consonant","It makes a special sound","It's decorative","It marks emphasis"],ans:"Every block must start with a consonant",hint:"Think about what the Start slot requires"},
          ]},
          {id:"ko_fp_p2_l2",title:"First 6 Blocks",icon:"아",xp:20,board:true,steps:[
            {type:"intro",title:"Building with ㅇ + vowels",desc:"Now combine ㅇ with each of the 6 core vowels to make your first real Korean syllable blocks.",goals:["Read all 6 vowel-initial blocks","Know which use LEFT placement vs TOP placement"]},
            {type:"teach",kind:"letter",nl:"아",en:"a",phonetic:"a",example:"ㅇ + ㅏ = 아",exampleEn:"VERTICAL vowel → ㅇ on the left, vowel on the right",note:"아 = 'a'. Since ㅏ is a VERTICAL vowel, ㅇ goes on the LEFT."},
            {type:"teach",kind:"letter",nl:"오",en:"o",phonetic:"o",example:"ㅇ + ㅗ = 오",exampleEn:"HORIZONTAL vowel → ㅇ on TOP, vowel BELOW",note:"오 = 'o'. Since ㅗ is a HORIZONTAL vowel, ㅇ goes on TOP."},
            {type:"mc",q:"You want to write the sound 'a'. The vowel ㅏ is VERTICAL. Where does ㅇ go?",opts:["On TOP","Left side","Right side","At the BOTTOM"],ans:"Left side",hint:"VERTICAL vowels → consonant goes on the LEFT"},
            {type:"mc",q:"You want to write the sound 'o'. The vowel ㅗ is HORIZONTAL. Where does the consonant go?",opts:["Left side","Right side","On TOP","At the BOTTOM"],ans:"On TOP",hint:"HORIZONTAL vowels → consonant goes on TOP"},
            {type:"mc",q:"You want to write the sound 'i'. The vowel ㅣ is VERTICAL. Where does ㅇ go?",opts:["On TOP","Left side","At the BOTTOM","Right side"],ans:"Left side",hint:"VERTICAL family = consonant on the left"},
            {type:"mc",q:"You want to write the sound 'eo'. The vowel ㅓ is VERTICAL. Where does ㅇ go?",opts:["On TOP","Left side","Right side","At the BOTTOM"],ans:"Left side",hint:"VERTICAL vowel → consonant on the left"},
            {type:"mc",q:"You want to write the sound 'u'. The vowel ㅜ is HORIZONTAL. Where does ㅇ go?",opts:["Left side","On TOP","Right side","At the BOTTOM"],ans:"On TOP",hint:"HORIZONTAL family = consonant on TOP"},
            {type:"mc",q:"What is the rule for HORIZONTAL vowels (ㅗ, ㅜ, ㅡ)?",opts:["Consonant goes on TOP","Consonant goes on the left","Consonant goes on the right","Consonant goes at the BOTTOM"],ans:"Consonant goes on TOP",hint:"Think: HORIZONTAL line BELOW, consonant ABOVE"},
            {type:"tip",title:"Two ㅇ Rules",text:"• Never write a vowel alone: ㅏ is wrong, 아 is correct\n• INITIAL ㅇ is SILENT (not 'ng')\n• BOTTOM ㅇ = 'ng' sound\nAlways use ㅇ as the SILENT placeholder at the start.",icon:"⚠️"},
          ]},
        ]},
      // ── PHASE 3: First Consonants ㄱ ㄴ ㅁ ㅅ (CV only) ──
      {id:"ko_fp_p3",title:"Phase 3: First Consonants",desc:"ㄱ ㄴ ㅁ ㅅ: build real blocks with all 6 vowels",icon:"ㄱ",
        lessons:[
          {id:"ko_fp_p3_l1",title:"ㄱ and ㄴ",icon:"ㄱ",xp:20,board:true,steps:[
            {type:"intro",title:"Your first real consonants",desc:"Time to replace ㅇ with real consonants. These 4 are visually simple and high-frequency.",goals:["Recognize and read ㄱ (g/k)","Recognize and read ㄴ (n)","Build blocks with all 6 vowels"]},
            {type:"teach",kind:"letter",nl:"ㄱ",en:"g/k",img:"📐",phonetic:"g (beginning) / k (end)",example:"가 거 고 구 그 기",exampleEn:"ga geo go gu geu gi",note:"ㄱ looks like a reversed L, or the number 7. The angle opens toward the bottom-left."},
            {type:"mc",q:"What sound does ㄱ make?",opts:["n","m","g/k","s"],ans:"g/k",hint:"The consonant shaped like a reversed L"},
            {type:"mc",q:"Read this syllable: 가",opts:["na","ga","ma","sa"],ans:"ga",hint:"What sound does the consonant make? Add the 'a' vowel."},
            {type:"teach",kind:"letter",nl:"ㄴ",en:"n",img:"📐",phonetic:"n",example:"나 너 노 누 느 니",exampleEn:"na neo no nu neu ni",note:"ㄴ looks like an L. The angle opens toward the top-right. Easy to remember: ㄴ = L = 'n' sound."},
            {type:"mc",q:"What sound does ㄴ make?",opts:["g/k","n","m","s"],ans:"n",hint:"The L-shaped consonant"},
            {type:"mc",q:"Read this syllable: 너",opts:["geo","meo","neo","seo"],ans:"neo",hint:"Identify the consonant, then the vowel."},
            {type:"mc",q:"Read this syllable: 고",opts:["no","go","mo","so"],ans:"go",hint:"Which consonant is at the TOP? What vowel is BELOW it?"},
          ]},
          {id:"ko_fp_p3_l2",title:"ㅁ and ㅅ",icon:"ㅁ",xp:20,board:true,steps:[
            {type:"intro",title:"Two more consonants",desc:"ㅁ (square) and ㅅ (tent/hat). After this lesson you know 4 consonants + ㅇ + 6 vowels. Enough for many syllables!",goals:["Recognize ㅁ (m): the square","Recognize ㅅ (s): the tent","Tell ㅁ apart from ㅇ"]},
            {type:"teach",kind:"letter",nl:"ㅁ",en:"m",img:"⬜",phonetic:"m",example:"마 머 모 무 므 미",exampleEn:"ma meo mo mu meu mi",note:"ㅁ is a square. Don't confuse it with ㅇ (circle). Look at the corners. ㅁ has 4 sharp corners; ㅇ is round."},
            {type:"mc",q:"What sound does ㅁ make?",opts:["g/k","n","m","s"],ans:"m",hint:"The square-shaped consonant"},
            {type:"mc",q:"Read this syllable: 모",opts:["go","no","mo","so"],ans:"mo",hint:"Square consonant + HORIZONTAL vowel BELOW"},
            {type:"teach",kind:"letter",nl:"ㅅ",en:"s",img:"⛺",phonetic:"s",example:"사 서 소 수 스 시",exampleEn:"sa seo so su seu si",note:"ㅅ looks like a tent or hat shape. Note: 시 sounds closer to 'shi' than 'si'. Learn the Korean sound, not the romanization."},
            {type:"mc",q:"What sound does ㅅ make?",opts:["m","s","j","h"],ans:"s",hint:"The tent-shaped consonant"},
            {type:"mc",q:"Read this syllable: 서",opts:["geo","meo","seo","neo"],ans:"seo",hint:"Tent consonant + which vowel?"},
            // Mixed review: full block reading
            {type:"mc",q:"Read this syllable: 니",opts:["mi","ni","si","gi"],ans:"ni",hint:"L-shaped consonant + 'i' vowel"},
            {type:"mc",q:"Read this syllable: 구",opts:["gu","nu","mu","su"],ans:"gu",hint:"Reversed-L consonant + 'u' vowel"},
          ]},
        ]},
      // ── PHASE 4: More Consonants ㄷ ㅂ ㅈ ㅎ (still CV only) ──
      {id:"ko_fp_p4",title:"Phase 4: More Consonants",desc:"ㄷ ㅂ ㅈ ㅎ: expanding your inventory, with confusion drills",icon:"ㅂ",
        lessons:[
          {id:"ko_fp_p4_l1",title:"ㄷ and ㅂ",icon:"ㄷ",xp:20,board:true,steps:[
            {type:"intro",title:"Consonants 5 & 6",desc:"Same block rules. No new structure, just new pieces. Focus on telling them apart from letters you already know.",goals:["Recognize ㄷ (d/t)","Recognize ㅂ (b/p)","Discriminate ㅂ vs ㅁ"]},
            {type:"teach",kind:"letter",nl:"ㄷ",en:"d/t",img:"📐",phonetic:"d (beginning) / t (end)",example:"다 더 도 두 드 디",exampleEn:"da deo do du deu di",note:"ㄷ has a flat top (like a table). Contrast: ㄱ has an open corner, ㄷ has a closed top line."},
            {type:"mc",q:"What sound does ㄷ make?",opts:["g/k","d/t","b/p","s"],ans:"d/t",hint:"The consonant with a flat top like a table"},
            {type:"mc",q:"Read this syllable: 도",opts:["go","bo","do","so"],ans:"do",hint:"Table-top consonant + HORIZONTAL vowel"},
            {type:"teach",kind:"letter",nl:"ㅂ",en:"b/p",img:"📐",phonetic:"b (beginning) / p (end)",example:"바 버 보 부 브 비",exampleEn:"ba beo bo bu beu bi",note:"ㅂ looks boxy but has vertical legs hanging down. Key discrimination: ㅂ vs ㅁ: ㅂ has an open bottom with legs, ㅁ is a fully closed square."},
            {type:"mc",q:"What sound does ㅂ make?",opts:["m","d/t","b/p","n"],ans:"b/p",hint:"The boxy consonant with legs hanging down"},
            {type:"mc",q:"Read this syllable: 비",opts:["mi","di","bi","si"],ans:"bi",hint:"Boxy-with-legs consonant + 'i' vowel"},
            {type:"mc",q:"Read this syllable: 두",opts:["bu","du","gu","mu"],ans:"du",hint:"Table-top consonant + 'u' vowel"},
          ]},
          {id:"ko_fp_p4_l2",title:"ㅈ and ㅎ",icon:"ㅈ",xp:20,board:true,steps:[
            {type:"intro",title:"Consonants 7 & 8",desc:"Two more consonants to complete your first set. After this you know 9 consonants (8 real + ㅇ) and 6 vowels.",goals:["Recognize ㅈ (j)","Recognize ㅎ (h)","Discriminate ㅈ vs ㅅ"]},
            {type:"teach",kind:"letter",nl:"ㅈ",en:"j",img:"📐",phonetic:"j (like 'j' in 'just')",example:"자 저 조 주 즈 지",exampleEn:"ja jeo jo ju jeu ji",note:"ㅈ = ㅅ with an extra horizontal stroke on TOP. That's the ONLY difference: ㅅ (tent) → ㅈ (tent + bar). Always check for the extra line."},
            {type:"mc",q:"What sound does ㅈ make?",opts:["s","j","h","d/t"],ans:"j",hint:"The tent shape with an extra bar on TOP"},
            {type:"mc",q:"Read this syllable: 저",opts:["seo","jeo","heo","deo"],ans:"jeo",hint:"Tent-with-bar consonant + which vowel?"},
            {type:"teach",kind:"letter",nl:"ㅎ",en:"h",img:"💨",phonetic:"h (gentle aspiration)",example:"하 허 호 후 흐 히",exampleEn:"ha heo ho hu heu hi",note:"ㅎ has a distinctive shape. Aim for one clean syllable. Don't over-aspirate (no 'huh-a' for 하, just 'ha')."},
            {type:"mc",q:"What sound does ㅎ make?",opts:["g/k","b/p","h","s"],ans:"h",hint:"The consonant for gentle aspiration"},
            {type:"mc",q:"Read this syllable: 호",opts:["go","so","ho","jo"],ans:"ho",hint:"Which consonant is this? Add the 'o' vowel."},
            // Mixed review: full block reading across all consonants
            {type:"mc",q:"Read this syllable: 시",opts:["ji","si","hi","ni"],ans:"si",hint:"Plain tent (no bar) + 'i' vowel. Remember: sounds more like 'shi'."},
          ]},
        ]},
      // ── PHASE 5: The Special ㄹ + Multi-syllable (still CV) ──
      {id:"ko_fp_p5",title:"Phase 5: The Special ㄹ",desc:"ㄹ gets dedicated time. Plus reading multi-block items",icon:"ㄹ",
        lessons:[
          {id:"ko_fp_p5_l1",title:"Meet ㄹ",icon:"ㄹ",xp:20,board:true,steps:[
            {type:"intro",title:"ㄹ: Its Own Category",desc:"ㄹ is high-frequency and unfamiliar to most learners. Don't force it into English 'r' or 'l'. It's its own sound. This phase exists to prevent fossilization.",goals:["Recognize ㄹ shape","Build blocks with ㄹ","Discriminate ㄹ vs ㄴ"]},
            {type:"teach",kind:"letter",nl:"ㄹ",en:"r/l (Korean category)",img:"〰️",phonetic:"between r and l. Its own category",example:"라 러 로 루 르 리",exampleEn:"ra reo ro ru reu ri",note:"ㄹ has a complex, wavy shape (multiple strokes). Don't swap it randomly with ㄴ. Recognize ㄹ, map it to the Korean sound. Refinement comes later."},
            {type:"mc",q:"What sound does ㄹ make?",opts:["n","r/l","m","h"],ans:"r/l",hint:"The complex, wavy consonant"},
            {type:"mc",q:"Read this syllable: 리",opts:["ni","ri","mi","hi"],ans:"ri",hint:"Wavy consonant + 'i' vowel"},
            {type:"mc",q:"Read this syllable: 루",opts:["nu","ru","mu","su"],ans:"ru",hint:"Wavy consonant + 'u' vowel"},
            {type:"mc",q:"Read this syllable: 너",opts:["reo","neo","meo","heo"],ans:"neo",hint:"Careful: is this the wavy one or the L-shaped one?"},
          ]},
          {id:"ko_fp_p5_l2",title:"Two-Block Reading",icon:"📖",xp:20,board:true,steps:[
            {type:"intro",title:"Multi-syllable items",desc:"Multiple blocks = multiple syllables. Read left to right, one block at a time. Don't skip blocks or guess!",goals:["Read two-block items block by block","Practice with all taught consonants"]},
            {type:"teach",kind:"info",nl:"나라",en:"na-ra (decoding practice)",phonetic:"na-ra",example:"나라 = country",exampleEn:"Read one block at a time, then combine",rules:[{from:"나",to:"na",label:"ㄴ + ㅏ"},{from:"라",to:"ra",label:"ㄹ + ㅏ"},{from:"나라",to:"na-ra",label:"country"}],trigger:"decode block by block",note:"Focus on the skill, not the meaning."},
            {type:"mc",q:"Read this: 나무",opts:["na-mu","ma-nu","sa-gu","na-bu"],ans:"na-mu",hint:"Decode block by block: first block, then second block."},
            {type:"mc",q:"Read this: 머리",opts:["meo-ri","geo-ni","beo-si","neo-mi"],ans:"meo-ri",hint:"Block 1: which consonant + which vowel? Block 2: same process."},
            {type:"mc",q:"How many syllable blocks are in a two-syllable word?",opts:["1","2","3","4"],ans:"2",hint:"One block per syllable"},
            {type:"mc",q:"Read this: 사기",opts:["sa-gi","ma-ni","ga-si","na-bi"],ans:"sa-gi",hint:"Tent consonant for block 1, reversed-L consonant for block 2."},
            {type:"tip",title:"Decoding Strategy",text:"If you catch yourself guessing, STOP.\n• Go back to block 1\n• Sound it out completely\n• Then move to block 2\nSpeed comes from accuracy, not from rushing.",icon:"🐢"},
          ]},
        ]},
      // ── PHASE 6: Block Architecture + Batchim (ㄴ ㅁ ㄹ ㅇ as finals) ──
      {id:"ko_fp_p6",title:"Phase 6: Block Architecture & Batchim",desc:"How blocks are stacked, and adding the BOTTOM slot",icon:"ㄴ",
        lessons:[
          {id:"ko_fp_p6_l1",title:"Block Layouts",icon:"🧱",xp:20,board:true,steps:[
            {type:"intro",title:"How Korean blocks are built",desc:"Every Korean syllable is a block. Each block has a consonant and a vowel as its core. Blocks come in a few shapes depending on how many parts they have and whether the vowel is VERTICAL or HORIZONTAL.",goals:["See 2 consonant + vowel layouts","See the BOTTOM consonant (batchim)","See the double BOTTOM consonant"]},
            {type:"teach",kind:"info",nl:"Consonant + VERTICAL Vowel",en:"Consonant LEFT, Vowel RIGHT",example:"ㄱ + ㅏ → 가 (ga)\nㄴ + ㅓ → 너 (neo)",note:"VERTICAL vowels (ㅏ ㅓ ㅣ) sit to the RIGHT of the consonant.",diagram:"cv_v"},
            {type:"teach",kind:"info",nl:"Consonant + HORIZONTAL Vowel",en:"Consonant on TOP, Vowel BELOW",example:"ㄱ + ㅗ → 고 (go)\nㄴ + ㅜ → 누 (nu)",note:"HORIZONTAL vowels (ㅗ ㅜ ㅡ) sit BELOW the consonant.",diagram:"cv_h"},
            {type:"mc",q:"Read this syllable: 기",opts:["ni","gi","mi","si"],ans:"gi",hint:"Consonant on the left + VERTICAL vowel on the right"},
            {type:"mc",q:"Read this syllable: 누",opts:["nu","mu","gu","su"],ans:"nu",hint:"Consonant on TOP + HORIZONTAL vowel BELOW"},
            {type:"teach",kind:"info",nl:"Consonant + Vowel + BOTTOM Consonant",en:"Same as above, plus a consonant at the BOTTOM",example:"ㄱ + ㅏ + ㄴ → 간 (gan)\nㄴ + ㅜ + ㄴ → 눈 (nun)",note:"받침 (batchim) = BOTTOM consonant. 가 (ga) → 간 (gan). The most common block type.",diagram:"cvc"},
            {type:"teach",kind:"info",nl:"Consonant + Vowel + Double BOTTOM",en:"Two consonants share the BOTTOM slot",example:"ㄷ + ㅏ + ㄹㄱ → 닭 (dak)",note:"Rare but real. Usually only ONE of the two BOTTOM consonants is pronounced.",diagram:"cvcc"},
            {type:"mc",q:"A CV block has how many parts?",opts:["1","2","3","4"],ans:"2",hint:"Consonant + Vowel"},
            {type:"mc",q:"A CVC block has how many parts?",opts:["1","2","3","4"],ans:"3",hint:"Consonant + Vowel + final Consonant at BOTTOM"},
          ]},
          {id:"ko_fp_p6_l2",title:"First Batchim: ㄴ ㅁ",icon:"⬇️",xp:20,board:true,steps:[
            {type:"intro",title:"Your first final consonants",desc:"ㄴ and ㅁ as batchim. These are stable: they always sound exactly like you'd expect: ㄴ = n, ㅁ = m.",goals:["Read CVC blocks with ㄴ final","Read CVC blocks with ㅁ final"]},
            {type:"teach",kind:"letter",nl:"안",en:"an",img:"⬇️",phonetic:"an",example:"ㅇ + ㅏ + ㄴ = 안",exampleEn:"The ㄴ at the BOTTOM adds 'n' to the end",note:"안 = 'an'. Compare: 아 = 'a'. The only difference is the ㄴ at the BOTTOM."},
            {type:"mc",q:"Read this syllable: 안",opts:["a","an","am","ang"],ans:"an",hint:"What's at the BOTTOM of the block?"},
            {type:"mc",q:"Read this syllable: 간",opts:["gan","gam","ga","gang"],ans:"gan",hint:"TOP consonant + vowel + BOTTOM consonant"},
            {type:"teach",kind:"letter",nl:"암",en:"am",img:"⬇️",phonetic:"am",example:"ㅇ + ㅏ + ㅁ = 암",exampleEn:"The ㅁ at the BOTTOM adds 'm' to the end",note:"암 = 'am'. ㅁ final is just as stable as ㄴ. Always sounds like 'm'."},
            {type:"mc",q:"Read this syllable: 남",opts:["nan","nam","na","nang"],ans:"nam",hint:"What consonant is at the BOTTOM?"},
            {type:"mc",q:"Read this syllable: 김",opts:["gin","gim","gi","ging"],ans:"gim",hint:"Reversed-L consonant + 'i' vowel + square consonant at BOTTOM"},
          ]},
          {id:"ko_fp_p6_l3",title:"Batchim: ㄹ ㅇ",icon:"🔄",xp:25,board:true,steps:[
            {type:"intro",title:"ㄹ as final + the ㅇ role-switch",desc:"ㄹ at the BOTTOM = 'l' sound. And the BIG one: ㅇ at the BOTTOM = 'ng'. Same letter, completely different role from ㅇ at the start (SILENT).",goals:["Read CVC blocks with ㄹ final","Master the ㅇ role-switch","Read blocks with ㅇ batchim"]},
            {type:"teach",kind:"letter",nl:"알",en:"al",img:"⬇️",phonetic:"al",example:"ㅇ + ㅏ + ㄹ = 알",exampleEn:"ㄹ at the BOTTOM = 'l' sound",note:"알 = 'al'. ㄹ as batchim always sounds like 'l'. Now you know all 4 stable batchim: ㄴ(n), ㅁ(m), ㄹ(l), ㅇ(ng)."},
            {type:"mc",q:"Read this syllable: 말",opts:["man","mal","ma","mang"],ans:"mal",hint:"Square consonant + 'a' vowel + wavy consonant at BOTTOM"},
            {type:"mc",q:"Read this syllable: 놀",opts:["non","nol","no","nom"],ans:"nol",hint:"L-shaped consonant + 'o' vowel + what at BOTTOM?"},
            {type:"teach",kind:"letter",nl:"앙",en:"ang",img:"🔄",phonetic:"ang",example:"ㅇ + ㅏ + ㅇ = 앙",exampleEn:"ㅇ at start = SILENT. ㅇ at BOTTOM = 'ng'!",note:"앙 = 'ang'. The same letter ㅇ appears TWICE but does completely different things. TOP = SILENT placeholder. BOTTOM = 'ng' like in 'sing'. This trips up every beginner."},
            {type:"mc",q:"Read this syllable: 강",opts:["gan","gam","ga","gang"],ans:"gang",hint:"What does ㅇ sound like at the BOTTOM?"},
            {type:"mc",q:"Read this syllable: 방",opts:["ban","bam","bang","bal"],ans:"bang",hint:"Boxy-with-legs consonant + 'a' + ㅇ at BOTTOM"},
            {type:"mc",q:"Read this syllable: 앙",opts:["a","an","am","ang"],ans:"ang",hint:"ㅇ at TOP = SILENT. ㅇ at BOTTOM = ?"},
            {type:"tip",title:"ㅇ Role Switch",text:"• ㅇ at TOP of block = SILENT placeholder\n• ㅇ at BOTTOM of block = 'ng' sound\nThis is non-negotiable. Drill until automatic.",icon:"🔑"},
          ]},
        ]},
      // ── PHASE 7: Complex Vowels (4 micro-sets) ──
      {id:"ko_fp_p7",title:"Phase 7: Complex Vowels",desc:"11 compound vowels built from the base vowels you already know",icon:"ㅘ",
        lessons:[
          {id:"ko_fp_p7_l1",title:"Set 7A: ㅐ and ㅔ",icon:"ㅐ",xp:15,board:true,steps:[
            {type:"intro",title:"Two vowels, similar sound",desc:"ㅐ and ㅔ sound very similar in modern Korean. But they are DIFFERENT SPELLINGS. You must recognize both.",goals:["Recognize ㅐ and ㅔ as separate vowels","Read syllables with ㅐ and ㅔ"]},
            {type:"teach",kind:"letter",nl:"ㅐ",en:"ae",img:"🔤",phonetic:"ae (like 'e' in 'bet')",example:"개, 내, 새",exampleEn:"gae, nae, sae",note:"ㅐ = ㅏ + ㅣ combined into one vowel. VERTICAL family."},
            {type:"teach",kind:"letter",nl:"ㅔ",en:"e",img:"🔤",phonetic:"e (also like 'e' in 'bet')",example:"게, 네, 세",exampleEn:"ge, ne, se",note:"ㅔ = ㅓ + ㅣ combined. Also VERTICAL family. In speech these sound almost identical. In writing they are DIFFERENT."},
            {type:"mc",q:"Read this syllable: 개",opts:["gae","ge","ga","gai"],ans:"gae",hint:"Reversed-L consonant + which compound vowel?"},
            {type:"mc",q:"Read this syllable: 네",opts:["nae","ne","na","ni"],ans:"ne",hint:"L-shaped consonant + ㅔ vowel"},
            {type:"mc",q:"Read this syllable: 새",opts:["se","sae","sa","si"],ans:"sae",hint:"Tent consonant + ㅐ vowel"},
          ]},
          {id:"ko_fp_p7_l2",title:"Set 7B: Y-Vowels",icon:"ㅑ",xp:15,board:true,steps:[
            {type:"intro",title:"Add an extra stroke = 'y' version",desc:"4 vowels that are 'y-versions' of base vowels. The pattern: add one extra short stroke.",goals:["Recognize ㅑ ㅕ ㅛ ㅠ","Read syllables with y-vowels"]},
            {type:"teach",kind:"letter",nl:"ㅑ / ㅕ",en:"ya / yeo",img:"🔤",phonetic:"ya / yeo",example:"야, 여",exampleEn:"ya, yeo",note:"ㅑ = ㅏ with an extra stroke → 'ya'. ㅕ = ㅓ with an extra stroke → 'yeo'. Same mirror pair logic."},
            {type:"teach",kind:"letter",nl:"ㅛ / ㅠ",en:"yo / yu",img:"🔤",phonetic:"yo / yu",example:"요, 유",exampleEn:"yo, yu",note:"ㅛ = ㅗ with an extra stroke → 'yo'. ㅠ = ㅜ with an extra stroke → 'yu'."},
            {type:"mc",q:"Read this syllable: 교",opts:["gyo","gyu","geo","go"],ans:"gyo",hint:"Reversed-L consonant + which y-vowel?"},
            {type:"mc",q:"Read this syllable: 녀",opts:["nyeo","nya","neo","na"],ans:"nyeo",hint:"L-shaped consonant + ㅕ vowel"},
            {type:"mc",q:"Read this syllable: 슈",opts:["syu","syo","su","so"],ans:"syu",hint:"Tent consonant + ㅠ vowel"},
          ]},
          {id:"ko_fp_p7_l3",title:"Set 7C: Combination Vowels",icon:"ㅘ",xp:15,board:true,steps:[
            {type:"intro",title:"Two vowels combined",desc:"ㅘ ㅝ ㅚ ㅟ are combinations of ㅗ/ㅜ with another vowel.",goals:["Recognize ㅘ ㅝ ㅚ ㅟ","Read syllables with combination vowels"]},
            {type:"teach",kind:"letter",nl:"ㅘ / ㅝ",en:"wa / wo",img:"🔤",phonetic:"wa / wo",example:"와, 워",exampleEn:"wa, wo",note:"ㅘ = ㅗ+ㅏ → 'wa'. ㅝ = ㅜ+ㅓ → 'wo'."},
            {type:"teach",kind:"letter",nl:"ㅚ / ㅟ",en:"oe / wi",img:"🔤",phonetic:"oe (≈we) / wi",example:"외, 위",exampleEn:"oe, wi",note:"ㅚ = ㅗ+ㅣ → 'oe'. ㅟ = ㅜ+ㅣ → 'wi'."},
            {type:"mc",q:"Read this syllable: 과",opts:["gwa","gwo","go","ga"],ans:"gwa",hint:"Reversed-L consonant + ㅘ vowel"},
            {type:"mc",q:"Read this syllable: 뭐",opts:["mwo","mwa","mo","mu"],ans:"mwo",hint:"Square consonant + ㅝ vowel"},
            {type:"mc",q:"Read this syllable: 귀",opts:["gwi","gwe","gui","gi"],ans:"gwi",hint:"Reversed-L consonant + ㅟ vowel"},
          ]},
          {id:"ko_fp_p7_l4",title:"Set 7D: Rare Complex Vowels",icon:"ㅢ",xp:15,board:true,steps:[
            {type:"intro",title:"The densest vowels",desc:"These are the rarest and most visually complex. Recognize them, but they appear infrequently.",goals:["Recognize ㅢ ㅙ ㅞ ㅒ ㅖ","Read syllables with rare vowels"]},
            {type:"teach",kind:"letter",nl:"ㅢ",en:"ui",img:"🔤",phonetic:"ui (varies by position)",example:"의",exampleEn:"ui. Used in the possessive particle",note:"ㅢ = ㅡ+ㅣ → 'ui'. Appears in 의 (possessive particle). Pronunciation varies. For now, just recognize the shape."},
            {type:"teach",kind:"letter",nl:"ㅙ ㅞ ㅒ ㅖ",en:"wae, we, yae, ye",img:"🔤",phonetic:"wae, we, yae, ye",example:"왜, 웨, 얘, 예",exampleEn:"wae, we, yae, ye",note:"Rare vowels. ㅙ = ㅗ+ㅏ+ㅣ, ㅞ = ㅜ+ㅓ+ㅣ, ㅒ = ㅑ+ㅣ, ㅖ = ㅕ+ㅣ. Recognize them when you see them."},
            {type:"mc",q:"Read this syllable: 왜",opts:["wae","wa","we","wi"],ans:"wae",hint:"ㅘ + ㅣ combined into one vowel"},
            {type:"mc",q:"Read this syllable: 예",opts:["ye","yae","ya","yo"],ans:"ye",hint:"ㅕ + ㅣ combined → 'ye'"},
          ]},
        ]},
      // ── PHASE 8: Aspirated Consonants ──
      {id:"ko_fp_p8",title:"Phase 8: Aspirated Consonants",desc:"ㅋ ㅌ ㅍ ㅊ: each plain consonant has a stronger, breathy sibling",icon:"ㅋ",
        lessons:[
          {id:"ko_fp_p8_l1",title:"ㅋ and ㅌ",icon:"ㅋ",xp:20,board:true,steps:[
            {type:"intro",title:"Plain → Aspirated",desc:"Korean has 3 types for many consonants: plain, aspirated, tense. Aspirated = add an extra stroke to the plain consonant. Breathier, stronger release.",goals:["Recognize ㅋ (aspirated ㄱ)","Recognize ㅌ (aspirated ㄷ)","Read syllables with aspirated consonants"]},
            {type:"teach",kind:"letter",nl:"ㅋ",en:"k (aspirated)",img:"💨",phonetic:"k (strong aspiration)",example:"카 커 코 쿠 크 키",exampleEn:"ka keo ko ku keu ki",note:"ㅋ = ㄱ + extra stroke. Stronger than ㄱ. Think: ㄱ is 'g/k', ㅋ is a heavier 'k' with a puff of air."},
            {type:"mc",q:"Read this syllable: 코",opts:["go","ko","to","po"],ans:"ko",hint:"This consonant looks like ㄱ with an extra stroke"},
            {type:"mc",q:"Read this syllable: 커",opts:["keo","geo","teo","peo"],ans:"keo",hint:"Aspirated ㄱ + ㅓ vowel"},
            {type:"teach",kind:"letter",nl:"ㅌ",en:"t (aspirated)",img:"💨",phonetic:"t (strong aspiration)",example:"타 터 토 투 트 티",exampleEn:"ta teo to tu teu ti",note:"ㅌ = ㄷ + extra stroke. Stronger than ㄷ. ㄷ is 'd/t', ㅌ is a heavier 't' with aspiration."},
            {type:"mc",q:"Read this syllable: 타",opts:["da","ta","pa","ka"],ans:"ta",hint:"This consonant looks like ㄷ with an extra stroke"},
            {type:"mc",q:"Read this syllable: 토",opts:["to","do","ko","po"],ans:"to",hint:"Aspirated ㄷ + ㅗ vowel"},
          ]},
          {id:"ko_fp_p8_l2",title:"ㅍ and ㅊ",icon:"ㅍ",xp:20,board:true,steps:[
            {type:"intro",title:"The other two aspirated consonants",desc:"ㅍ = aspirated ㅂ. ㅊ = aspirated ㅈ. Same rule: add a stroke = aspirated.",goals:["Recognize ㅍ (aspirated ㅂ)","Recognize ㅊ (aspirated ㅈ)","Read syllables with all 4 aspirated consonants"]},
            {type:"teach",kind:"letter",nl:"ㅍ",en:"p (aspirated)",img:"💨",phonetic:"p (strong aspiration)",example:"파 퍼 포 푸 프 피",exampleEn:"pa peo po pu peu pi",note:"ㅍ = ㅂ + extra stroke. ㅂ is 'b/p', ㅍ is a heavier 'p'."},
            {type:"mc",q:"Read this syllable: 피",opts:["bi","pi","ti","ki"],ans:"pi",hint:"Aspirated ㅂ + ㅣ vowel"},
            {type:"teach",kind:"letter",nl:"ㅊ",en:"ch (aspirated)",img:"💨",phonetic:"ch (strong aspiration)",example:"차 처 초 추 츠 치",exampleEn:"cha cheo cho chu cheu chi",note:"ㅊ = ㅈ + extra stroke. ㅈ is 'j', ㅊ is 'ch'. This pair has the biggest sound gap."},
            {type:"mc",q:"Read this syllable: 초",opts:["jo","cho","so","ho"],ans:"cho",hint:"Aspirated ㅈ + ㅗ vowel"},
            // Mixed review across all 4 aspirated
            {type:"mc",q:"Read this syllable: 쿠",opts:["ku","gu","tu","pu"],ans:"ku",hint:"Which aspirated consonant looks like ㄱ with an extra stroke?"},
            {type:"mc",q:"Read this syllable: 퍼",opts:["peo","beo","teo","keo"],ans:"peo",hint:"Which aspirated consonant looks like ㅂ with an extra stroke?"},
          ]},
        ]},
      // ── PHASE 9: Tense (Ssang) Consonants ──
      {id:"ko_fp_p9",title:"Phase 9: Tense Consonants",desc:"ㄲ ㄸ ㅃ ㅆ ㅉ: doubled consonants, tighter onset",icon:"ㄲ",
        lessons:[
          {id:"ko_fp_p9_l1",title:"ㄲ and ㄸ",icon:"ㄲ",xp:20,board:true,steps:[
            {type:"intro",title:"Doubled = Tense",desc:"Tense consonants are visually DOUBLED versions of plain ones. The sound is tighter and more explosive, NOT just louder. Don't confuse tense with aspirated.",goals:["Recognize ㄲ (tense ㄱ)","Recognize ㄸ (tense ㄷ)","Distinguish plain vs aspirated vs tense"]},
            {type:"teach",kind:"letter",nl:"ㄲ",en:"kk (tense)",img:"💪",phonetic:"kk (tight, no aspiration)",example:"까 꺼 꼬 꾸 끄 끼",exampleEn:"kka kkeo kko kku kkeu kki",note:"ㄲ = doubled ㄱ. No puff of air (unlike aspirated ㅋ). Tighter throat, sharper onset. The three types: ㄱ (plain g/k), ㅋ (aspirated k), ㄲ (tense kk)."},
            {type:"mc",q:"Read this syllable: 까",opts:["ga","ka","kka","gga"],ans:"kka",hint:"Doubled consonant = tense. No aspiration."},
            {type:"teach",kind:"letter",nl:"ㄸ",en:"tt (tense)",img:"💪",phonetic:"tt (tight, no aspiration)",example:"따 떠 또 뚜 뜨 띠",exampleEn:"tta tteo tto ttu tteu tti",note:"ㄸ = doubled ㄷ. Three types: ㄷ (plain d/t), ㅌ (aspirated t), ㄸ (tense tt)."},
            {type:"mc",q:"Read this syllable: 또",opts:["do","to","tto","ddo"],ans:"tto",hint:"Doubled ㄷ = tense"},
            {type:"mc",q:"Read this syllable: 끼",opts:["gi","ki","kki","ggi"],ans:"kki",hint:"Doubled ㄱ + ㅣ vowel"},
          ]},
          {id:"ko_fp_p9_l2",title:"ㅃ ㅆ ㅉ",icon:"ㅃ",xp:20,board:true,steps:[
            {type:"intro",title:"Three more tense consonants",desc:"ㅃ, ㅆ, and ㅉ complete the tense set. All 5 tense consonants are doubled versions of plain ones.",goals:["Recognize ㅃ (tense ㅂ)","Recognize ㅆ (tense ㅅ)","Recognize ㅉ (tense ㅈ)"]},
            {type:"teach",kind:"letter",nl:"ㅃ",en:"pp (tense)",img:"💪",phonetic:"pp",example:"빠 뻐 뽀 뿌 쁘 삐",exampleEn:"ppa ppeo ppo ppu ppeu ppi",note:"ㅃ = doubled ㅂ. Three types: ㅂ (plain b/p), ㅍ (aspirated p), ㅃ (tense pp)."},
            {type:"mc",q:"Read this syllable: 빠",opts:["ba","pa","ppa","bba"],ans:"ppa",hint:"Doubled ㅂ = tense"},
            {type:"teach",kind:"letter",nl:"ㅆ",en:"ss (tense)",img:"💪",phonetic:"ss",example:"싸 써 쏘 쑤 쓰 씨",exampleEn:"ssa sseo sso ssu sseu ssi",note:"ㅆ = doubled ㅅ. Unlike the others, ㅅ has NO aspirated version: only plain (ㅅ) and tense (ㅆ)."},
            {type:"mc",q:"Read this syllable: 쓰",opts:["su","sseu","seu","ssu"],ans:"sseu",hint:"Doubled ㅅ + ㅡ vowel"},
            {type:"teach",kind:"letter",nl:"ㅉ",en:"jj (tense)",img:"💪",phonetic:"jj",example:"짜 쩌 쪼 쭈 쯔 찌",exampleEn:"jja jjeo jjo jju jjeu jji",note:"ㅉ = doubled ㅈ. Three types: ㅈ (plain j), ㅊ (aspirated ch), ㅉ (tense jj)."},
            {type:"mc",q:"Read this syllable: 짜",opts:["ja","cha","jja","jaa"],ans:"jja",hint:"Doubled ㅈ = tense"},
            // Mixed review across all tense
            {type:"mc",q:"Read this syllable: 씨",opts:["si","chi","ssi","ji"],ans:"ssi",hint:"Doubled tent consonant + ㅣ vowel"},
          ]},
        ]},
      // ── PHASE 10: Advanced Batchim & Sound Rules ──
      {id:"ko_fp_p10",title:"Phase 10: Sound Rules",desc:"The 7 final sounds, liaison, nasalization, and aspiration",icon:"🔊",
        lessons:[
          {id:"ko_fp_p10_l1",title:"The 7 Final Sounds",icon:"7️⃣",xp:25,board:true,steps:[
            {type:"intro",title:"Batchim neutralization",desc:"Many different consonants at the bottom of a block all collapse into just 7 possible final sounds. This is the key to reading Korean aloud.",goals:["Know the 7 final sounds","Match batchim consonants to their actual pronunciation"]},
            {type:"teach",kind:"info",nl:"7 final sounds",en:"All batchim reduce to 7",phonetic:"",example:"옷 (ㅅ) and 꽃 (ㅊ) both end [t]",exampleEn:"Many letters, but only 7 possible endings",rules:[{from:"ㄱ ㅋ ㄲ",to:"[k]",ex:"약 → [yak]"},{from:"ㄴ",to:"[n]",ex:"산 → [san]"},{from:"ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ",to:"[t]",ex:"옷 → [ot]"},{from:"ㄹ",to:"[l]",ex:"달 → [dal]"},{from:"ㅁ",to:"[m]",ex:"밤 → [bam]"},{from:"ㅂ ㅍ",to:"[p]",ex:"밥 → [bap]"},{from:"ㅇ",to:"[ng]",ex:"강 → [gang]"}],trigger:"at syllable end (before pause or consonant)",note:"The [t] group is the biggest: 6 letters all become [t]."},
            {type:"mc",q:"Read this syllable (final sound): 옷",opts:["os","ot","ok","on"],ans:"ot",hint:"ㅅ at the bottom neutralizes to which of the 7 sounds?"},
            {type:"mc",q:"Read this syllable (final sound): 꽃",opts:["kkoch","kkot","kkos","kkok"],ans:"kkot",hint:"ㅊ at the bottom neutralizes to the same group as ㅅ"},
            {type:"mc",q:"Read this syllable (final sound): 부엌",opts:["bueok","bueoch","bueot","bueop"],ans:"bueok",hint:"ㅋ at the bottom neutralizes to [k]"},
            {type:"mc",q:"Read this syllable (final sound): 앞",opts:["ap","at","ak","am"],ans:"ap",hint:"ㅍ at the bottom neutralizes to [p]"},
          ]},
          {id:"ko_fp_p10_l2",title:"Liaison (연음)",icon:"➡️",xp:25,board:true,steps:[
            {type:"intro",title:"Batchim slides forward",desc:"When a block ends with batchim AND the next block starts with ㅇ (silent), the batchim sound 'moves' to become the next syllable's initial consonant. Extremely frequent.",goals:["Understand liaison","Read connected syllables with liaison"]},
            {type:"teach",kind:"info",nl:"연음 (liaison)",en:"Batchim moves to next ㅇ",phonetic:"",example:"한국어 → 한구거",exampleEn:"ㄱ from 국 slides to fill the ㅇ of 어",rules:[{from:"먹 + 어",to:"머거",ex:"먹어 → [머거]"},{from:"국 + 어",to:"구거",ex:"한국어 → [한구거]"},{from:"읽 + 어",to:"일거",ex:"읽어 → [일거]"}],trigger:"batchim + silent ㅇ",note:"The consonant slides forward to fill the empty ㅇ."},
            {type:"mc",q:"먹어 (eat): the ㄱ from 먹 meets ㅇ of 어. How is it pronounced?",opts:["meok-eo","meo-geo","meog-eo","me-keo"],ans:"meo-geo",hint:"The ㄱ slides forward into the next syllable"},
            {type:"mc",q:"음악 → 으막: what happened?",opts:["The ㄱ disappeared","The ㅁ batchim moved to the ㅇ-start of 악","Nothing changed","The vowel changed"],ans:"The ㅁ batchim moved to the ㅇ-start of 악",hint:"Batchim + ㅇ-start = liaison"},
          ]},
          {id:"ko_fp_p10_l3",title:"Nasalization & Aspiration",icon:"🔊",xp:25,board:true,steps:[
            {type:"intro",title:"Two more reading rules",desc:"Nasalization: stops become nasals before ㄴ/ㅁ. Aspiration: batchim consonant + ㅎ as next initial = aspirated version.",goals:["Recognize nasalization pattern","Recognize aspiration caused by ㅎ"]},
            {type:"teach",kind:"info",nl:"비음화 (nasalization)",en:"Stops become nasals before ㄴ/ㅁ",phonetic:"",example:"합니다 → 함니다",exampleEn:"ham-ni-da (ㅂ becomes ㅁ before ㄴ)",rules:[{from:"ㄱ + ㄴ/ㅁ",to:"ㅇ",label:"ng",ex:"학년 → 항년"},{from:"ㄷ + ㄴ/ㅁ",to:"ㄴ",label:"n",ex:"받는 → 반는"},{from:"ㅂ + ㄴ/ㅁ",to:"ㅁ",label:"m",ex:"합니다 → 함니다"}],trigger:"before ㄴ / ㅁ",note:"Before ㄴ or ㅁ, expect the nasal version."},
            {type:"mc",q:"합니다: ㅂ appears before ㄴ. What does ㅂ become?",opts:["[p]","[m]","[n]","[ng]"],ans:"[m]",hint:"ㅂ → ㅁ before ㄴ = nasalization"},
            {type:"mc",q:"학년: ㄱ appears before ㄴ. What does ㄱ become?",opts:["[k]","[ng]","[n]","[m]"],ans:"[ng]",hint:"ㄱ → ㅇ(ng) before ㄴ"},
            {type:"teach",kind:"info",nl:"격음화 (aspiration by ㅎ)",en:"Batchim + ㅎ = aspirated",phonetic:"",example:"막히다 → 마키다",exampleEn:"ㄱ + ㅎ → [ㅋ]",rules:[{from:"ㄱ + ㅎ",to:"ㅋ",ex:"막히다 → 마키다"},{from:"ㄷ + ㅎ",to:"ㅌ",ex:"닫히다 → 다티다"},{from:"ㅂ + ㅎ",to:"ㅍ",ex:"급하다 → 그파다"},{from:"ㅈ + ㅎ",to:"ㅊ",ex:"맞히다 → 마치다"}],trigger:"batchim + ㅎ as next initial",note:"ㅎ 'powers up' the preceding consonant."},
            {type:"mc",q:"막히다: ㄱ batchim + ㅎ initial. What sound?",opts:["[ㄱ+ㅎ] both pronounced","[ㅋ] aspirated","[ㄱ] only","[ㅎ] only"],ans:"[ㅋ] aspirated",hint:"ㄱ + ㅎ combines into the aspirated version of ㄱ"},
            {type:"mc",q:"급하다: ㅂ batchim + ㅎ initial. What sound?",opts:["[ㅂ+ㅎ]","[ㅍ] aspirated","[ㅂ] only","[ㅁ]"],ans:"[ㅍ] aspirated",hint:"ㅂ + ㅎ combines into the aspirated version of ㅂ"},
            {type:"tip",title:"Sound Rules Cheat Sheet",text:"Don't panic! Three rules cover 90%:\n• 받침 + ㅇ = liaison (carry sound over)\n• Stop + ㄴ / ㅁ = nasal shift\n• Consonant + ㅎ = aspirated",icon:"🧘"},
          ]},
        ]},
    ],
  },
  // ── Placeholder entries for other languages (required by DEV GUARD) ──
  nl:{name:"Dutch Foundations Play",icon:"🇳🇱",blueprint:"latin_complex",stages:[
      // ══════════════════════════════════════════════════════════════
      // DUTCH FOUNDATIONS PLAYTHROUGH
      // Teach → Drill → Use → Review. Anti-leak: MC stems never
      // visually reveal the answer. audio_id:null placeholders.
      // Manifesto P8/P12 compliant. 7 stages, ~20 lessons, ~150 steps.
      // ══════════════════════════════════════════════════════════════

      // ── STAGE 1: SHORT VOWELS & CVC ──
      {id:"nl_fp_s1",title:"Short Vowels & CVC",desc:"Five short vowels in simple words",icon:"🔤",
        lessons:[
          {id:"nl_fp_s1_l1",title:"Short a and Short o",icon:"🅰️",xp:15,board:true,steps:[
            {type:"intro",title:"Your first two vowels",desc:"Dutch has 5 short vowels. This lesson: short a /ɑ/ and short o /ɔ/ in CVC words (consonant-vowel-consonant).",goals:["Recognize short a /ɑ/","Recognize short o /ɔ/","Blend CVC words with these vowels"]},
            {type:"teach",kind:"word",nl:"man",en:"man",img:"👨",phonetic:"/mɑn/",example:"m-a-n → man",exampleEn:"Short a: like 'u' in English 'cup'",note:"Short a /ɑ/ in a closed syllable. Single letter a + consonant at end = short."},
            {type:"teach",kind:"word",nl:"pot",en:"pot",img:"🍲",phonetic:"/pɔt/",example:"p-o-t → pot",exampleEn:"Short o: like 'o' in English 'hot'",note:"Short o /ɔ/ in a closed syllable. Single letter o + consonant = short."},
            {type:"mc",q:"The word 'kat' (cat) has which vowel sound?",opts:["Short a","Long a","Short o","Long o"],ans:"Short a",hint:"Single letter a, closed syllable"},
            {type:"mc",q:"The word 'bos' (forest) has which vowel sound?",opts:["Short a","Short o","Long o","Short e"],ans:"Short o",hint:"Single letter o, closed syllable"},
            {type:"mc",q:"Which is a CVC word with short a?",opts:["maan","bak","boot","been"],ans:"bak",hint:"CVC = consonant + single vowel + consonant, no double letters"},
            {type:"mc",q:"Which is a CVC word with short o?",opts:["boom","vol","maan","bus"],ans:"vol",hint:"Single letter o + consonant at end"},
          ]},
          {id:"nl_fp_s1_l2",title:"Short e, i, u",icon:"📝",xp:15,board:true,steps:[
            {type:"intro",title:"Three more short vowels",desc:"Short e /ɛ/, short i /ɪ/, and short u /ʏ/. Short u has NO English equivalent. It is a rounded front vowel.",goals:["Recognize short e /ɛ/","Recognize short i /ɪ/","Recognize short u /ʏ/ (new sound!)"]},
            {type:"teach",kind:"word",nl:"bed",en:"bed",img:"🛏️",phonetic:"/bɛt/",example:"b-e-d → bed",exampleEn:"Short e: like 'e' in English 'bed'",note:"Short e /ɛ/. Note: the d sounds like t at the end (final devoicing). Spelling keeps d."},
            {type:"teach",kind:"word",nl:"pit",en:"seed",img:"🌱",phonetic:"/pɪt/",example:"p-i-t → pit",exampleEn:"Short i: like 'i' in English 'bit'",note:"Short i /ɪ/. Familiar for English speakers."},
            {type:"teach",kind:"word",nl:"bus",en:"bus",img:"🚌",phonetic:"/bʏs/",example:"b-u-s → bus",exampleEn:"Short u: NO English equivalent",note:"Short u /ʏ/ = rounded front vowel. Say 'i' (bit) with rounded lips."},
            {type:"mc",q:"'pen' has which short vowel?",opts:["Short i","Short e","Short u","Short a"],ans:"Short e",hint:"Single letter e, closed syllable"},
            {type:"mc",q:"'kin' (chin) has which short vowel?",opts:["Short e","Short i","Short u","Short a"],ans:"Short i",hint:"Single letter i, closed syllable"},
            {type:"mc",q:"Which short vowel has NO English equivalent?",opts:["Short a","Short e","Short u","Short i"],ans:"Short u",hint:"One of these requires rounding your lips differently"},
            {type:"mc",q:"Which word contains short u?",opts:["bus","bed","bos","bak"],ans:"bus",hint:"Letter u in a CVC word"},
          ]},
          {id:"nl_fp_s1_l3",title:"Short Vowel Review",icon:"🔄",xp:20,board:true,steps:[
            {type:"intro",title:"All five short vowels",desc:"Mix all five. Can you identify them in CVC words?",goals:["Distinguish all 5 short vowels","Apply closed-syllable logic consistently"]},
            {type:"mc",q:"What vowel is in 'lek' (leak)?",opts:["Short a","Short e","Short i","Short o"],ans:"Short e",hint:"Letter e, closed syllable"},
            {type:"mc",q:"What vowel is in 'vol' (full)?",opts:["Short a","Short e","Short o","Short u"],ans:"Short o",hint:"Letter o, closed syllable"},
            {type:"mc",q:"What vowel is in 'mus' (sparrow)?",opts:["Short o","Short u","Short i","Short a"],ans:"Short u",hint:"Letter u, closed syllable"},
            {type:"mc",q:"What vowel is in 'bak' (tray)?",opts:["Short e","Short o","Short a","Short i"],ans:"Short a",hint:"Letter a, closed syllable"},
            {type:"mc",q:"What vowel is in 'wil' (want)?",opts:["Short a","Short u","Short e","Short i"],ans:"Short i",hint:"Letter i, closed syllable"},
            {type:"mc",q:"All five short vowels occur in closed syllables. A closed syllable ends in a…",opts:["Vowel","Consonant","Digraph","Double letter"],ans:"Consonant",hint:"What 'closes' the syllable?"},
          ]},
      ]},

      // ── STAGE 2: LONG VOWELS & OPEN/CLOSED ──
      {id:"nl_fp_s2",title:"Long Vowels & Syllable Logic",desc:"The Dutch spelling engine: open vs closed",icon:"⚙️",
        lessons:[
          {id:"nl_fp_s2_l1",title:"Open vs Closed Syllables",icon:"🚪",xp:15,board:true,steps:[
            {type:"intro",title:"The most important rule in Dutch",desc:"Open syllable (ends in vowel) → long. Closed syllable (ends in consonant) → short. This one rule explains most of Dutch spelling.",goals:["Identify open syllables","Identify closed syllables","Predict vowel length from syllable type"]},
            {type:"teach",kind:"word",nl:"la-ken",en:"sheet",img:"🛏️",phonetic:"/laːkən/",example:"la- = open (ends in a) → long /aː/",exampleEn:"Open syllable: vowel at the end",note:"la- ends in a vowel. Open → LONG. One letter a is enough because the syllable signals length."},
            {type:"teach",kind:"word",nl:"lak",en:"lacquer",img:"🎨",phonetic:"/lɑk/",example:"lak = closed (ends in k) → short /ɑ/",exampleEn:"Closed syllable: consonant at the end",note:"lak ends in a consonant. Closed → SHORT. Same letter a, different sound."},
            {type:"mc",q:"A syllable ending in a vowel letter is…",opts:["Closed","Open","Long","Double"],ans:"Open",hint:"Not 'closed off' by a consonant"},
            {type:"mc",q:"In 'bo-men' (trees), the first syllable 'bo-' is…",opts:["Closed → short","Open → long","Double → long","Unstressed"],ans:"Open → long",hint:"Does 'bo' end in vowel or consonant?"},
            {type:"mc",q:"In 'bom' (bomb), the syllable is…",opts:["Open → long","Closed → short"],ans:"Closed → short",hint:"Does 'bom' end in vowel or consonant?"},
            {type:"mc",q:"Same letter 'a' in both 'lak' and 'la-ken'. Why different sounds?",opts:["Different words, random","Closed = short, open = long","The k changes the vowel","You memorize it"],ans:"Closed = short, open = long",hint:"Syllable type determines vowel length"},
          ]},
          {id:"nl_fp_s2_l2",title:"Double Vowels: aa, ee, oo, uu",icon:"🔠",xp:15,board:true,steps:[
            {type:"intro",title:"Forcing long in a closed syllable",desc:"Need a long vowel but the syllable is closed? Double the vowel: aa, ee, oo, uu.",goals:["Know when to use double vowels","Understand: closed syllable needs a length signal","Decode double-vowel words"]},
            {type:"teach",kind:"word",nl:"maan",en:"moon",img:"🌙",phonetic:"/maːn/",example:"maan: closed but LONG → use aa",exampleEn:"Double vowel forces the long sound",note:"Closed syllable (ends in n), but long vowel. The double aa overrides the closed-syllable default."},
            {type:"teach",kind:"word",nl:"boom",en:"tree",img:"🌳",phonetic:"/boːm/",example:"boom: closed but LONG → use oo",exampleEn:"Same principle",note:"Ends in m (closed), but long /oː/. oo forces it."},
            {type:"mc",q:"Why does 'maan' use aa instead of a?",opts:["It is a long word","Closed + long needs double vowel","Dutch always doubles vowels","The a is pronounced twice"],ans:"Closed + long needs double vowel",hint:"What does a closed syllable normally signal?"},
            {type:"mc",q:"Which word has a LONG vowel in a closed syllable?",opts:["man","bos","been","kat"],ans:"been",hint:"Look for a double vowel + consonant ending"},
            {type:"mc",q:"'vuur' (fire) uses uu because…",opts:["The u is said twice","Closed syllable needs long signal","All Dutch words double vowels","It is a loanword"],ans:"Closed syllable needs long signal",hint:"Closed + long needed = ?"},
          ]},
          {id:"nl_fp_s2_l3",title:"Short vs Long: Minimal Pairs",icon:"⚖️",xp:20,board:true,steps:[
            {type:"intro",title:"Vowel length changes meaning",desc:"Wrong length = different word. Practice distinguishing them.",goals:["Identify short vs long in pairs","Know that length changes meaning"]},
            {type:"mc",q:"'man' = man. 'maan' = …?",opts:["Woman","Moon","Many","Morning"],ans:"Moon",hint:"Short a vs long aa"},
            {type:"mc",q:"'bos' = forest. 'boos' = …?",opts:["Boss","Angry","Book","Big"],ans:"Angry",hint:"Short o vs long oo"},
            {type:"mc",q:"'hel' = hell. 'heel' = …?",opts:["Heel","Whole/very","Hello","Help"],ans:"Whole/very",hint:"Short e vs long ee"},
            {type:"mc",q:"Single vowel + closed syllable = …?",opts:["Long","Short","Silent","Doubled"],ans:"Short",hint:"Closed + single letter = ?"},
            {type:"mc",q:"Double vowel (aa, ee, oo, uu) = …?",opts:["Short","Silent","Long","Unstressed"],ans:"Long",hint:"Why double if not for length?"},
          ]},
      ]},

      // ── STAGE 3: CONSONANT COMBOS ──
      {id:"nl_fp_s3",title:"Consonant Combos",desc:"Digraphs ch/ng, clusters, the Dutch g",icon:"🧩",
        lessons:[
          {id:"nl_fp_s3_l1",title:"ch, ng, sch",icon:"🔗",xp:15,board:true,steps:[
            {type:"intro",title:"Consonant digraphs",desc:"ch = one sound. ng = one sound. sch = s + ch. Digraphs are NEVER doubled.",goals:["Decode ch as one sound","Decode ng as one sound","Know the never-double rule"]},
            {type:"teach",kind:"word",nl:"lachen",en:"to laugh",img:"😂",phonetic:"/lɑxən/",example:"ch → one sound /x/",exampleEn:"Same sound as Dutch g",note:"ch is a digraph: two letters, one sound /x/."},
            {type:"teach",kind:"word",nl:"lang",en:"long",img:"📏",phonetic:"/lɑŋ/",example:"ng → one sound /ŋ/",exampleEn:"Like English 'sing'",note:"ng is a digraph: two letters, one nasal /ŋ/."},
            {type:"mc",q:"How many sounds does 'ch' make?",opts:["Two separate sounds","Just one sound","Three sounds","None (silent)"],ans:"Just one sound",hint:"Two letters, but think about what you hear"},
            {type:"mc",q:"The word for 'night' contains which consonant digraph?",opts:["ch","ng","sch","nn"],ans:"ch",hint:"Which two letters = one sound in this word?"},
            {type:"mc",q:"Digraphs ch and ng are NEVER…",opts:["Used at word start","Pronounced","Doubled in spelling","In uppercase"],ans:"Doubled in spelling",hint:"Already two letters. Doubling makes no sense"},
            {type:"mc",q:"'sch' in 'school' is…",opts:["One sound","Two sounds: s + ch","Three sounds","Silent"],ans:"Two sounds: s + ch",hint:"sch = s + the ch digraph"},
          ]},
          {id:"nl_fp_s3_l2",title:"Clusters & the Dutch g",icon:"🧱",xp:15,board:true,steps:[
            {type:"intro",title:"Consonant clusters",desc:"Dutch allows 2-3 consonants at start, 2-4 at end. Blend them. Never insert a vowel. Also: the Dutch g sounds nothing like English g.",goals:["Blend CC/CCC onsets","Decode codas","Know Dutch g = throaty fricative"]},
            {type:"teach",kind:"word",nl:"straat",en:"street",img:"🛣️",phonetic:"/straːt/",example:"str = three consonants, one syllable",exampleEn:"CCC onset always starts with s",note:"Three consonants blended: s-t-r. Never 'se-te-raat'."},
            {type:"teach",kind:"word",nl:"goed",en:"good",img:"👍",phonetic:"/ɣut/",example:"g = throaty fricative /ɣ/ or /x/",exampleEn:"NOT like English g at all",note:"The Dutch g is a throaty sound (fricative). Northern = hard/raspy. Southern = soft/gentle. Both correct."},
            {type:"mc",q:"'straat' (street) has how many syllables?",opts:["One","Two","Three","Four"],ans:"One",hint:"Count vowel sounds, not letters"},
            {type:"mc",q:"Three-consonant onsets in Dutch always begin with which letter?",opts:["t","r","s","n"],ans:"s",hint:"Think about which consonant can start a cluster of three"},
            {type:"mc",q:"The Dutch g sounds like…",opts:["English g in 'go'","A throaty fricative","English h","English j"],ans:"A throaty fricative",hint:"It is NOT the English g sound"},
            {type:"mc",q:"Pronouncing 'bron' as 'be-ron' is an error called…",opts:["Wrong vowel","Vowel insertion","Wrong stress","Devoicing"],ans:"Vowel insertion",hint:"Adding a vowel between clustered consonants"},
          ]},
      ]},

      // ── STAGE 4: THE SPELLING ENGINE ──
      {id:"nl_fp_s4",title:"The Spelling Engine",desc:"Consonant doubling and vowel dropping",icon:"✖️",
        lessons:[
          {id:"nl_fp_s4_l1",title:"Consonant Doubling",icon:"✖️",xp:20,board:true,steps:[
            {type:"intro",title:"Protecting short vowels",desc:"Adding -en/-er/-e to a short-vowel word opens the syllable → vowel becomes long (wrong!). Fix: double the consonant.",goals:["Know WHY consonants double","Apply the rule","Avoid *manen (should be mannen)"]},
            {type:"teach",kind:"phrase",nl:"man → mannen",en:"man → men",img:"👥",phonetic:"/mɑn → mɑnən/",example:"man + en → *ma-nen would open syllable → wrong",exampleEn:"Double n: man-nen keeps syllable closed",note:"Without doubling: *ma-nen → open syllable → long a (wrong). Doubling n: man-nen → closed → short a (correct)."},
            {type:"teach",kind:"phrase",nl:"kat → katten",en:"cat → cats",img:"🐱",phonetic:"/kɑt → kɑtən/",example:"kat + en → kat-ten",exampleEn:"Double t keeps short a",note:"Same rule. Double t prevents the syllable from opening."},
            {type:"mc",q:"Why 'mannen' not 'manen'?",opts:["n is pronounced twice","Double n keeps syllable closed","All plurals double consonants","It is an irregular word"],ans:"Double n keeps syllable closed",hint:"What would *ma-nen do to the vowel?"},
            {type:"mc",q:"Plural of 'bos' (forest)?",opts:["bosen","bossen","boossen","boss"],ans:"bossen",hint:"Short o → double the consonant"},
            {type:"mc",q:"Plural of 'bed' (bed)?",opts:["beden","bedden","beeden","beds"],ans:"bedden",hint:"Short e + ending = double consonant"},
            {type:"mc",q:"Consonant doubling prevents…",opts:["Long pronunciation of consonant","The syllable from opening","Grammar errors","Spelling mistakes in English"],ans:"The syllable from opening",hint:"What happens to vowel length if syllable opens?"},
          ]},
          {id:"nl_fp_s4_l2",title:"Vowel Dropping",icon:"✂️",xp:20,board:true,steps:[
            {type:"intro",title:"Long vowel + ending → drop one",desc:"Double-vowel word (aa, ee, oo, uu) + ending → syllable opens → one letter is enough.",goals:["Know WHY a vowel letter drops","Apply the rule","Avoid *maanen (should be manen)"]},
            {type:"teach",kind:"phrase",nl:"maan → manen",en:"moon → moons",img:"🌙",phonetic:"/maːn → maːnən/",example:"maan + en → ma-nen (one a enough)",exampleEn:"Open syllable signals long",note:"maan = aa because closed. Adding -en opens: ma-nen. Open = long, so one a is enough."},
            {type:"teach",kind:"phrase",nl:"boom → bomen",en:"tree → trees",img:"🌳",phonetic:"/boːm → boːmən/",example:"boom + en → bo-men (one o enough)",exampleEn:"Same principle",note:"oo → o when syllable opens."},
            {type:"mc",q:"Why 'manen' not 'maanen'?",opts:["a is only said once","Open syllable already signals long","It is a random exception","Dutch drops all double vowels"],ans:"Open syllable already signals long",hint:"What does an open syllable tell you?"},
            {type:"mc",q:"Plural of 'boom' (tree)?",opts:["boomen","bomen","bommen","boomen"],ans:"bomen",hint:"Double vowel + ending → open → one letter"},
            {type:"mc",q:"Plural of 'been' (leg)?",opts:["beenen","benen","bennen","beennen"],ans:"benen",hint:"ee + en → open → one e enough"},
            {type:"mc",q:"Doubling consonants and dropping vowels are…",opts:["Completely unrelated rules","Two sides of the same coin","Grammar rules, not spelling","Only used for plurals"],ans:"Two sides of the same coin",hint:"One protects short, the other adjusts long"},
          ]},
          {id:"nl_fp_s4_l3",title:"Mixed: Doubling vs Dropping",icon:"🔄",xp:25,board:true,steps:[
            {type:"intro",title:"Which rule?",desc:"Base word + ending: double the consonant or drop a vowel?",goals:["Choose correctly","Apply consistently","Use logic, not memorization"]},
            {type:"mc",q:"'pak' + -en. Vowel is short. What happens?",opts:["paken","pakken","paaken","paken"],ans:"pakken",hint:"Short vowel → protect it"},
            {type:"mc",q:"'naam' + -en. Vowel is long. What happens?",opts:["naammen","namen","naamen","nammen"],ans:"namen",hint:"Long vowel → open syllable handles it"},
            {type:"mc",q:"'dik' + -e. Vowel is short. What happens?",opts:["dikke","dike","dieke","dikee"],ans:"dikke",hint:"Short → double consonant"},
            {type:"mc",q:"'groot' + -e. Vowel is long. What happens?",opts:["grootte","grote","groote","grotten"],ans:"grote",hint:"Long → drop one vowel letter"},
            {type:"mc",q:"'wit' + -e. Vowel is short.",opts:["wite","witte","wiete","wiet"],ans:"witte",hint:"Short i → double t"},
            {type:"mc",q:"'rood' + -e. Vowel is long.",opts:["rode","roode","rodde","rootte"],ans:"rode",hint:"Long oo → open → one o"},
          ]},
      ]},

      // ── STAGE 5: DIGRAPH VOWELS & DIPHTHONGS ──
      {id:"nl_fp_s5",title:"Digraph Vowels & Diphthongs",desc:"ie, oe, eu, ui: and the spelling splits",icon:"💎",
        lessons:[
          {id:"nl_fp_s5_l1",title:"ie, oe, eu",icon:"💎",xp:15,board:true,steps:[
            {type:"intro",title:"Three special vowel digraphs",desc:"ie = /i/, oe = /u/, eu = /ø/. Inherently long. Never doubled.",goals:["Decode ie, oe, eu","Know they are never doubled"]},
            {type:"teach",kind:"word",nl:"bier",en:"beer",img:"🍺",phonetic:"/bir/",example:"ie → long /i/",exampleEn:"Like English 'ee' in see",note:"ie is the long partner of short i. A digraph. Never write ii."},
            {type:"teach",kind:"word",nl:"boek",en:"book",img:"📚",phonetic:"/buk/",example:"oe → /u/",exampleEn:"Like English 'oo' in food",note:"oe = /u/. A unique Dutch digraph. Never doubled."},
            {type:"teach",kind:"word",nl:"neus",en:"nose",img:"👃",phonetic:"/nøs/",example:"eu → /ø/",exampleEn:"Round lips + say 'ay'",note:"eu = /ø/. No English equivalent. Shape lips for 'oh', say 'ay'."},
            {type:"mc",q:"'ie' in 'brief' represents which sound?",opts:["Short i","Long /i/ (like ee)","Long /eː/","/ɛi/"],ans:"Long /i/ (like ee)",hint:"ie = long version of short i"},
            {type:"mc",q:"'oe' in 'groep' represents…",opts:["/ø/ (round ay)","/u/ (like oo)","/oː/ (long o)","/ɔ/ (short o)"],ans:"/u/ (like oo)",hint:"Think: food, mood"},
            {type:"mc",q:"Why never write 'ii' for long i?",opts:["ii = different sound","Dutch uses ie instead","ii means short i","No long i exists"],ans:"Dutch uses ie instead",hint:"ie is already the complete long-i digraph"},
          ]},
          {id:"nl_fp_s5_l2",title:"ui and the Diphthongs",icon:"🔀",xp:15,board:true,steps:[
            {type:"intro",title:"Gliding vowels",desc:"Three diphthongs: ei/ij, ui, ou/au. Each is ONE syllable. Two have competing spellings.",goals:["Decode ui as /œy/","Know ei/ij = same sound","Know ou/au = same sound"]},
            {type:"teach",kind:"word",nl:"huis",en:"house",img:"🏠",phonetic:"/hœys/",example:"ui → /œy/ (round + glide)",exampleEn:"No English equivalent",note:"ui = diphthong /œy/. Round lips, glide forward. Only one spelling for this sound."},
            {type:"teach",kind:"word",nl:"trein",en:"train",img:"🚂",phonetic:"/trɛin/",example:"ei → /ɛi/ (same as ij!)",exampleEn:"Two spellings, one sound",note:"ei and ij both = /ɛi/. No rule predicts which. Learn per word. Decoding is the same either way."},
            {type:"mc",q:"'ui' in 'buiten' represents…",opts:["Short u","Long u","/œy/ (a diphthong)","/u/ (like oe)"],ans:"/œy/ (a diphthong)",hint:"ui is a gliding vowel, not a simple vowel"},
            {type:"mc",q:"'ei' in 'klein' and 'ij' in 'vrij': do they sound…",opts:["Different","The same","Similar but not identical","ei is longer"],ans:"The same",hint:"Two spellings for one sound"},
            {type:"mc",q:"'ou' in 'oud' and 'au' in 'blauw': do they sound…",opts:["Different","The same","au is longer","ou is softer"],ans:"The same",hint:"Same pattern as ei/ij"},
            {type:"mc",q:"How do you know whether to write ei or ij?",opts:["ei for short, ij for long","ij at start, ei at end","There is no rule: learn per word","ei for nouns, ij for verbs"],ans:"There is no rule: learn per word",hint:"This is where Dutch spelling becomes lexical"},
          ]},
      ]},

      // ── STAGE 6: IRREGULARITIES & REVIEW ──
      {id:"nl_fp_s6",title:"Irregularities & Final Review",desc:"Devoicing, spelling splits, and putting it all together",icon:"🔀",
        lessons:[
          {id:"nl_fp_s6_l1",title:"Final Devoicing",icon:"🔔",xp:20,board:true,steps:[
            {type:"intro",title:"Why spelling and sound disagree",desc:"At word end, Dutch voices consonants become voiceless. d sounds like t, v like f, z like s. But spelling keeps the original.",goals:["Know what final devoicing is","Use the stem-family strategy","Spell correctly despite sound changes"]},
            {type:"teach",kind:"word",nl:"hond",en:"dog",img:"🐕",phonetic:"/hɔnt/",example:"Sounds like 'hont' but spelled hond",exampleEn:"Check: honden → d is real",note:"d → t at word end. But the plural honden shows the d. Spelling follows the underlying consonant, not the surface sound."},
            {type:"teach",kind:"word",nl:"brief",en:"letter",img:"✉️",phonetic:"/brif/",example:"Ends in f-sound but related form: brieven → v",exampleEn:"The underlying consonant is v",note:"v → f at word end. Plural brieven reveals the v. Spelling tracks the underlying form."},
            {type:"mc",q:"'hond' (dog) sounds like 'hont' at the end. Why is it spelled with d?",opts:["It is irregular","Related form 'honden' reveals d","Dutch always writes d","The t is silent"],ans:"Related form 'honden' reveals d",hint:"Check the plural to find the real consonant"},
            {type:"mc",q:"'bed' sounds like 'bet'. How do you confirm the spelling?",opts:["Guess","Check related form: bedden → d","It is always d","Pronounce it louder"],ans:"Check related form: bedden → d",hint:"The stem-family strategy"},
            {type:"mc",q:"'huis' ends in s-sound. The plural 'huizen' reveals…",opts:["The s is real","The underlying consonant is z","It is irregular","The z is silent"],ans:"The underlying consonant is z",hint:"Plural brings back the voiced consonant"},
            {type:"mc",q:"The strategy for spelling word-final consonants is…",opts:["Always write t, f, s","Listen carefully and write what you hear","Find a related form where the consonant is not final","Memorize every word"],ans:"Find a related form where the consonant is not final",hint:"This is the stem-family strategy"},
          ]},
          {id:"nl_fp_s6_l2",title:"'t Kofschip",icon:"⚓",xp:15,board:true,steps:[
            {type:"intro",title:"Past tense: -te or -de?",desc:"Weak verbs: stem ends in t/k/f/s/ch/p → -te. Otherwise → -de. The mnemonic: 't kofschip.",goals:["Apply 't kofschip rule","Watch out for final devoicing masking stems"]},
            {type:"teach",kind:"grammar",nl:"werkte",en:"worked",img:"💼",phonetic:"/ʋɛrktə/",example:"werk → stem ends in k → 't kofschip → -te",exampleEn:"k is in 't kofschip",note:"The stem 'werk' ends in k. k is in 't kofschip (t, k, f, s, ch, p) → past tense = -te."},
            {type:"teach",kind:"word",nl:"leefde",en:"lived",img:"🏡",phonetic:"/leːvdə/",example:"leev- → stem ends in v (not in 't kofschip) → -de",exampleEn:"Watch out: sounds like f but stem has v",note:"The stem is leev- (leven). v is NOT in 't kofschip → -de. But at word end v → f, so 'leefde' has f in spelling. Tricky!"},
            {type:"mc",q:"Stem 'maak': past tense ending?",opts:["-de","-te"],ans:"-te",hint:"Is k in 't kofschip (t, k, f, s, ch, p)?"},
            {type:"mc",q:"Stem 'bouw': past tense ending?",opts:["-de","-te"],ans:"-de",hint:"Is w in 't kofschip?"},
            {type:"mc",q:"Stem 'fiets': past tense ending?",opts:["-de","-te"],ans:"-te",hint:"Does it end in a 't kofschip letter?"},
            {type:"mc",q:"Why is final devoicing dangerous for 't kofschip?",opts:["It changes the tense","It can mask the real stem consonant","It only affects vowels","It has no effect"],ans:"It can mask the real stem consonant",hint:"If v sounds like f at word end, which rule applies?"},
          ]},
          {id:"nl_fp_s6_l3",title:"Foundations Review",icon:"🏁",xp:30,board:true,steps:[
            {type:"intro",title:"Putting it all together",desc:"A final review across everything: vowels, syllables, spelling rules, digraphs, devoicing.",goals:["Apply all rules together","Decode unfamiliar words","Demonstrate spelling logic"]},
            {type:"mc",q:"In 'ma-ken' (to make), the first syllable is open. The vowel is…",opts:["Short a","Long a","Double a","Schwa"],ans:"Long a",hint:"Open syllable → ?"},
            {type:"mc",q:"'groot' + -e becomes…",opts:["grootte","grote","groote","grotten"],ans:"grote",hint:"Long vowel, ending opens syllable"},
            {type:"mc",q:"'dik' + -e becomes…",opts:["dike","dikke","dieke","dikee"],ans:"dikke",hint:"Short vowel, needs protection"},
            {type:"mc",q:"Which contains the digraph vowel oe?",opts:["moeder","bomen","goed","mond"],ans:"moeder",hint:"oe = two letters, one sound /u/"},
            {type:"mc",q:"'geld' (money) sounds like 'gelt'. The d is confirmed by…",opts:["Guessing","Related form: gelden → d","Pronunciation alone","It is always d"],ans:"Related form: gelden → d",hint:"Stem-family strategy"},
            {type:"mc",q:"'ei' and 'ij' represent…",opts:["Different sounds","The same sound /ɛi/","Short and long versions","Vowel and consonant"],ans:"The same sound /ɛi/",hint:"Two spellings, one diphthong"},
            {type:"mc",q:"A pseudoword 'blaan': you have never seen this word. Based on Dutch rules, the vowel is…",opts:["Short because it is one syllable","Long because aa = double vowel","Unknown: you must memorize it","Short because bl- is a cluster"],ans:"Long because aa = double vowel",hint:"What does a double vowel always mean?"},
            {type:"mc",q:"A pseudoword 'trom': based on rules, the vowel is…",opts:["Long","Short","Impossible to know","Depends on meaning"],ans:"Short",hint:"Single vowel + consonant ending = closed syllable = ?"},
          ]},
      ]},
  ]},
  de:{name:"German Foundations Play",icon:"🇩🇪",blueprint:"latin_complex",stages:[
    // ══════════════════════════════════════════════════════════════
    // GERMAN FOUNDATIONS PLAYTHROUGH (TEACHER BOARD STYLE)
    // Korean-quality progressive curriculum. Every concept EARNED
    // before tested. Visual, geometric, teacher-board layouts.
    // Arabic-aware from day one (baseLang bridges).
    // P8 compliant, no IPA slashes, no em-dashes, board:true all.
    // ══════════════════════════════════════════════════════════════

    // ── STAGE 1: THE ALPHABET SYSTEM ──
    // Phase 0 approach: understand the SYSTEM before drilling letters.
    // 4 lessons: Overview → Letter Traps → Umlauts → Eszett
    {id:"de_fp_s1",title:"The Alphabet System",desc:"German uses 26 familiar letters plus 4 special ones. Learn the system first.",icon:"🔤",
      lessons:[
        // ── L1: The System (no drilling yet, just orientation) ──
        {id:"de_fp_s1_l1",title:"Same Letters, Different Sounds",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"German uses the same alphabet as English",desc:"Good news: you already know 26 of the 30 German letters. Bad news: many of them SOUND completely different. This lesson is about understanding the system before memorizing anything.",goals:["See the 26 base letters you already know","Meet the 4 special German characters","Understand that SOUND, not shape, is where German diverges"]},
          {type:"teach",kind:"info",nl:"26 + 4",en:"The German letter inventory",phonetic:"",example:"Base: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\nSpecial: Ä  Ö  Ü  ß",exampleEn:"26 letters you know + 4 you need to learn",note:"The 26 base letters are IDENTICAL to English.\nThe shapes are familiar. The sounds are not.\nFour special characters exist nowhere in English:\nÄ, Ö, Ü (modified vowels) and ß (a special S)."},
          {type:"mc",q:"How many base letters does German share with English?",opts:["20","24","26","30"],ans:"26",hint:"The entire English alphabet is included in German"},
          {type:"mc",q:"German adds how many special characters beyond the 26?",opts:["Two","Three","Four","Six"],ans:"Four",hint:"Three vowels with dots plus one special consonant"},
          {type:"teach",kind:"info",nl:"Drei Gruppen",en:"Three groups of letters",phonetic:"",example:"Group 1: SAFE (same sound as English)\nB D F H K L M N P T\n\nGroup 2: TRAPS (look familiar, sound different)\nJ W V Z S R\n\nGroup 3: SPECIAL (new characters)\nÄ Ö Ü ß",exampleEn:"Safe letters, trap letters, and special characters",note:"Group 1 = relax, you know these.\nGroup 2 = WARNING. Your English habits will betray you.\nGroup 3 = brand new. You have to learn these from scratch."},
          {type:"mc",q:"Which group needs the most attention from an English speaker?",opts:["Safe letters (B, D, F)","Trap letters (J, W, V, Z)","Special characters (Ä, Ö, Ü, ß)","All groups equally"],ans:"Trap letters (J, W, V, Z)",hint:"These LOOK familiar but SOUND different, so your brain auto-corrects wrong"},
          {type:"mc",q:"The letters Ä, Ö, Ü are:",opts:["Decorated versions of A, O, U with the same sound","Completely new vowels with their own sounds","Only used in Swiss German","Consonants that look like vowels"],ans:"Completely new vowels with their own sounds",hint:"The two dots signal a genuinely different vowel sound"},
          {type:"tip",title:"The German Alphabet Map",text:"Think of it as 3 zones:\n\nSAFE ZONE: B D F H K L M N P T\nThese sound exactly like English. No effort needed.\n\nTRAP ZONE: J W V Z S R\nThese look English but sound German. Drill required.\n\nNEW ZONE: Ä Ö Ü ß\nThese are entirely new. Learn from scratch.\n\nFocus your energy on the TRAP and NEW zones."},
        ]},

        // ── L2: The Four Letter Traps ──
        {id:"de_fp_s1_l2",title:"The Four Letter Traps",icon:"⚠️",xp:15,board:true,steps:[
          {type:"intro",title:"Four letters that will trick you every time",desc:"J, W, V, and Z look identical to English but sound completely different. Your brain will auto-correct to the English sound. Fight it. This lesson drills each one individually.",goals:["Know that German J = English Y sound","Know that German W = English V sound","Know that German V = English F sound","Know that German Z = English TS sound"]},
          {type:"teach",kind:"info",nl:"J",en:"German J = Y sound",phonetic:"like Y in yes",example:"ja = yah (yes)\nJuni = YOO-nee (June)\nJahr = YAHR (year)",exampleEn:"Every German J sounds like English Y",note:"German J is NEVER the English J sound.\nEnglish jump = German J does not exist.\nThink: Ja = Ya. Always."},
          {type:"mc",q:"The German word 'ja' (yes) is pronounced:",opts:["jah (like jam)","yah (like yard)","zhah (like measure)","hah (like hat)"],ans:"yah (like yard)",hint:"German J always makes the Y sound"},
          {type:"teach",kind:"info",nl:"W",en:"German W = V sound",phonetic:"like V in very",example:"Wasser = VAHS-ser (water)\nWein = VINE (wine)\nwo = VOH (where)",exampleEn:"Every German W sounds like English V",note:"German W is NEVER the English W sound.\nNo lip rounding. Teeth on lower lip.\nThink: Wasser = Vasser. Always."},
          {type:"mc",q:"The German word 'Wasser' (water) starts with the sound:",opts:["W as in water","V as in very","F as in fox","B as in boy"],ans:"V as in very",hint:"German W and English V make the same sound"},
          {type:"teach",kind:"info",nl:"V",en:"German V = F sound",phonetic:"like F in fox",example:"Vater = FAH-ter (father)\nvier = FEER (four)\nvon = FON (from)",exampleEn:"Most German V words sound like English F",note:"German V is usually the F sound.\nException: foreign words (Verb, Vase) keep the V sound.\nNative German words: V = F. Always."},
          {type:"mc",q:"'Vater' (father) starts with the sound:",opts:["V as in very","F as in fox","W as in water","P as in park"],ans:"F as in fox",hint:"In native German words, V makes the F sound"},
          {type:"teach",kind:"info",nl:"Z",en:"German Z = TS sound",phonetic:"like TS in cats",example:"Zeit = TSAIT (time)\nzwei = TSVAI (two)\nzusammen = tsoo-ZAH-men (together)",exampleEn:"Every German Z sounds like TS",note:"German Z is NEVER the English Z buzzing sound.\nIt is a sharp TS, like the end of cats.\nThink: Zeit = TSait. Always."},
          {type:"mc",q:"'Zeit' (time) starts with the sound:",opts:["Z as in zoo","S as in sun","TS as in cats","TH as in the"],ans:"TS as in cats",hint:"German Z is always the sharp TS sound"},
          {type:"match",pairs:[{nl:"J",en:"Y sound (like yes)"},{nl:"W",en:"V sound (like very)"},{nl:"V",en:"F sound (like fox)"},{nl:"Z",en:"TS sound (like cats)"}]},
          {type:"mc",q:"A German word starts with W. You should pronounce it like English:",opts:["W","V","F","B"],ans:"V",hint:"German W swaps with English V"},
          {type:"mc",q:"A German word starts with V. In a native German word, pronounce it like:",opts:["V","F","W","P"],ans:"F",hint:"German V swaps with English F in native words"},
          {type:"tip",title:"The Swap Chain",text:"Memorize this chain:\n\nGerman J = English Y\nGerman W = English V\nGerman V = English F\nGerman Z = English TS\n\nFour letters. Four swaps. Drill until automatic."},
        ]},

        // ── L3: The Three Umlauts ──
        {id:"de_fp_s1_l3",title:"Ä, Ö, Ü: Three New Vowels",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"Three vowels that do not exist in English",desc:"The two dots above A, O, U are not decorations. They signal completely different vowel sounds. Each umlaut is its own letter. Ä, Ö, Ü are as different from A, O, U as A is from E.",goals:["Know Ä sounds like E in bed","Know Ö has no English match (round lips + E)","Know Ü has no English match (round lips + EE)","Understand umlauts change word meaning"]},
          {type:"teach",kind:"info",nl:"Ä",en:"A with umlaut",phonetic:"like E in bed",example:"Bär (bear) = BAIR\nMänner (men) = MEN-ner\nspät (late) = SHPAIT",exampleEn:"Ä sounds like the E in English bed or fair",note:"Ä is the easiest umlaut for English speakers.\nIt sounds like E in bed (short) or AI in fair (long).\nPair: Mann (man) vs. Männer (men). The umlaut marks plural."},
          {type:"mc",q:"The German letter Ä sounds most like:",opts:["A as in father","E as in bed","O as in go","U as in blue"],ans:"E as in bed",hint:"Despite looking like an A, it sounds like a different vowel entirely"},
          {type:"teach",kind:"info",nl:"Ö",en:"O with umlaut",phonetic:"round lips, say E",example:"schön (beautiful) = SHURN\nhören (to hear) = HUR-en\nöffnen (to open) = UFF-nen",exampleEn:"Ö has no English equivalent. Round your lips for O, then say E.",note:"How to make Ö:\n1. Shape your lips as if saying O (round)\n2. Keep lips round\n3. Try to say E\nThe result is Ö. Practice with: schön, hören, böse."},
          {type:"mc",q:"To produce the Ö sound, you should:",opts:["Open jaw wide and say A","Round lips like O, then say E","Close lips and hum","Say U with flat lips"],ans:"Round lips like O, then say E",hint:"Lip rounding is what makes Ö special"},
          {type:"teach",kind:"info",nl:"Ü",en:"U with umlaut",phonetic:"round lips, say EE",example:"über (over) = UE-ber\ngrün (green) = GRUEN\nTür (door) = TUER",exampleEn:"Ü has no English equivalent. Round your lips for U, then say EE.",note:"How to make Ü:\n1. Shape your lips as if saying OO (round)\n2. Keep lips round\n3. Try to say EE\nThe result is Ü. Practice with: Tür, grün, müssen."},
          {type:"mc",q:"To produce the Ü sound, you should:",opts:["Round lips like U, then say EE","Say OO as in moon","Open mouth wide and say AH","Say EE with flat lips"],ans:"Round lips like U, then say EE",hint:"Same trick as Ö but starting from U position instead of O"},
          {type:"teach",kind:"info",nl:"Umlauts change meaning",en:"Two dots = different word",phonetic:"",example:"Mutter (mother) vs. Mütter (mothers)\nschon (already) vs. schön (beautiful)\nfordern (demand) vs. fördern (promote)",exampleEn:"Umlauts are not optional. They change the word.",note:"Umlauts are grammatically active:\n1. They mark plurals: Haus vs. Häuser\n2. They mark verb forms: fahren vs. fährt\n3. They create new words: schon vs. schön\nNever drop an umlaut. It changes the word."},
          {type:"mc",q:"'Mutter' means mother. 'Mütter' means mothers. The umlaut signals:",opts:["Past tense","Plural form","Feminine gender","A question"],ans:"Plural form",hint:"Many German plurals are formed by adding an umlaut"},
          {type:"mc",q:"'schon' means already. 'schön' means beautiful. What changed?",opts:["A letter was added","The umlaut changed the vowel sound and meaning","The word stress shifted","Nothing, they sound the same"],ans:"The umlaut changed the vowel sound and meaning",hint:"Two dots on the O turned already into beautiful"},
          {type:"match",pairs:[{nl:"Ä",en:"sounds like E in bed"},{nl:"Ö",en:"round lips + E sound"},{nl:"Ü",en:"round lips + EE sound"}]},
        ]},

        // ── L4: Eszett (ß) ──
        {id:"de_fp_s1_l4",title:"ß: The Sharp S",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"One letter, one sound, one rule",desc:"ß (Eszett) is a single letter that makes a sharp S sound. It only appears after long vowels or diphthongs. After short vowels, German uses SS instead. One simple rule governs which you use.",goals:["Know ß makes a sharp S sound","Know the long vowel = ß rule","Know the short vowel = SS rule","See the rule in real words"]},
          {type:"teach",kind:"info",nl:"ß",en:"Eszett (sharp S)",phonetic:"sharp S, like ss in kiss",example:"Straße (street): long A, so ß\nheißen (to be called): diphthong ei, so ß\ngroß (big): long O, so ß",exampleEn:"ß always follows a LONG vowel or diphthong",note:"ß is NOT two letters. It is ONE letter.\nIt makes ONE sound: a sharp, voiceless S.\nIt ONLY appears after long vowels or diphthongs.\nNever at the start of a word."},
          {type:"mc",q:"ß makes which sound?",opts:["A buzzing Z","A sharp voiceless S","A SH sound","A TS sound"],ans:"A sharp voiceless S",hint:"Think of the S sound in English kiss, not the Z in zoo"},
          {type:"teach",kind:"info",nl:"ß vs. SS",en:"The one rule",phonetic:"",example:"LONG vowel + S sound = ß\nStraße, heißen, groß, Fuß\n\nSHORT vowel + S sound = SS\nKlasse, Wasser, essen, müssen",exampleEn:"Vowel length before the S sound determines the spelling",note:"The rule is simple:\nListen to the vowel BEFORE the S sound.\nIs it long or a diphthong? Use ß.\nIs it short? Use SS.\nNo exceptions in standard German."},
          {type:"mc",q:"'Straße' uses ß because the vowel before it is:",opts:["Short","Long","Silent","An umlaut"],ans:"Long",hint:"The A in Straße is a long vowel"},
          {type:"mc",q:"'Wasser' uses SS because the vowel before it is:",opts:["Long","A diphthong","Short","A consonant"],ans:"Short",hint:"The A in Wasser is a short vowel"},
          {type:"mc",q:"'heißen' (to be called) uses ß because before the S sound there is:",opts:["A short vowel","A long vowel","A diphthong (ei)","A consonant"],ans:"A diphthong (ei)",hint:"ei is a diphthong, and diphthongs always take ß"},
          {type:"mc",q:"If ß is not available on your keyboard, replace it with:",opts:["S alone","SZ","SS","Z"],ans:"SS",hint:"Double S is the universal substitute for ß"},
          {type:"tip",title:"ß vs SS Decision",text:"When you hear a sharp S in German, ask ONE question:\n\nIs the vowel before it LONG or a diphthong?\nYES = use ß (Straße, heißen, groß)\nNO = use SS (Klasse, Wasser, müssen)\n\nSwiss German never uses ß at all. They always write SS."},
        ]},
      ]},

    // ── STAGE 2: THE VOWEL ENGINE ──
    // Teacher board style: vowel length as a SYSTEM, then umlauts as
    // modifications, then diphthongs as glides. Each concept earned.
    {id:"de_fp_s2",title:"The Vowel Engine",desc:"Short vs long, umlauts, diphthongs: the system that drives German pronunciation",icon:"🔊",
      lessons:[
        // ── L1: Short vs Long (the length system) ──
        {id:"de_fp_s2_l1",title:"Short vs Long: Length Changes Meaning",icon:"⚖️",xp:15,board:true,steps:[
          {type:"intro",title:"In German, vowel length changes the word",desc:"Every German vowel has a SHORT and a LONG version. Wrong length = wrong word. Stadt (city) vs Staat (state). The ONLY difference is vowel length. German has clear spelling signals that tell you which.",goals:["Understand that vowel length changes meaning","Learn the 3 signals for long vowels","See minimal pairs where length is the only difference"]},
          {type:"teach",kind:"info",nl:"Kurz vs. Lang",en:"Short = clipped. Long = held.",phonetic:"",example:"SHORT (clipped, tense):\nMann, Bett, bitte, Gott, Mutter\n\nLONG (held, relaxed):\nName, Meer, Bier, Sohn, Stuhl",exampleEn:"Same 5 vowels (a e i o u), but each has 2 versions",note:"Short vowels: quick, closed mouth.\nLong vowels: held, more open.\nThis is NOT like English where length is optional.\nIn German, length IS meaning."},
          {type:"mc",q:"'Stadt' (city) has a short a. 'Staat' (state) has a long a. What is the ONLY difference?",opts:["Different consonants","Different vowel length","Different stress","Different word origin"],ans:"Different vowel length",hint:"The consonants are identical. Only the A length differs."},
          {type:"teach",kind:"info",nl:"Drei Signale für Länge",en:"Three signals that ALWAYS mean long",phonetic:"",example:"Signal 1: DOUBLE VOWEL\nSaal, Meer, Boot = long\n\nSignal 2: VOWEL + silent H\nBahn, Uhr, Sohn = long\n\nSignal 3: IE\nviel, Bier, Brief = always long ee",exampleEn:"See any of these three patterns? The vowel is guaranteed long.",note:"These 3 signals are 100% reliable:\n1. aa, ee, oo = always long\n2. aH, eH, iH, oH, uH = always long (H is silent)\n3. ie = always long ee\nNo exceptions."},
          {type:"mc",q:"'Meer' (sea) has ee. This means the vowel is:",opts:["Short","Long","Silent","Variable"],ans:"Long",hint:"Double vowel = always long. No exceptions."},
          {type:"mc",q:"'Bahn' (train) has a vowel followed by H. The H is:",opts:["Pronounced as H","Silent, but signals a long vowel","Part of a consonant cluster","Random and meaningless"],ans:"Silent, but signals a long vowel",hint:"H after a vowel = silent length marker"},
          {type:"mc",q:"The letters 'ie' in 'viel' (much) always represent:",opts:["Two separate vowels","A short i","A long ee sound","The same as English ie in pie"],ans:"A long ee sound",hint:"ie is ALWAYS one syllable, ALWAYS long ee in German"},
          {type:"tip",title:"The Length Decision Tree",text:"When you see a German vowel, ask:\n\n1. Is it doubled (aa, ee, oo)? LONG.\n2. Is it followed by silent H? LONG.\n3. Is it ie? LONG ee.\n4. Is it before a double consonant (tt, ss, mm)? SHORT.\n5. None of the above? Check syllable structure.\n\nThis tree works for 95% of German words."},
        ]},

        // ── L2: Umlauts as living vowels ──
        {id:"de_fp_s2_l2",title:"Umlauts in Action",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"Umlauts are GRAMMATICALLY active",desc:"You learned Ä, Ö, Ü as sounds in Stage 1. Now see them in action. Umlauts do three jobs: mark plurals, change verb forms, and create new words. They are not random. They follow patterns.",goals:["See umlauts marking plurals","See umlauts in verb conjugation","See umlauts creating word pairs"]},
          {type:"teach",kind:"info",nl:"Umlaut = Plural",en:"Many German plurals add an umlaut",phonetic:"",example:"Mann → Männer (man → men)\nHaus → Häuser (house → houses)\nBuch → Bücher (book → books)\nMutter → Mütter (mother → mothers)",exampleEn:"The back vowel shifts forward. a→ä, o→ö, u→ü, au→äu.",note:"This is one of the most common plural patterns.\nThe umlaut signals the SAME word in plural form.\nPattern: the back vowel moves forward in the mouth."},
          {type:"mc",q:"'Buch' (book) becomes 'Bücher' (books). What signals the plural?",opts:["Adding -er","The umlaut on u","Both the umlaut AND the -er ending","Changing the first letter"],ans:"Both the umlaut AND the -er ending",hint:"German plurals often combine an umlaut WITH a suffix"},
          {type:"teach",kind:"info",nl:"Umlaut = Verb form",en:"Some verbs shift vowels when conjugated",phonetic:"",example:"fahren → du fährst, er fährt\nschlafen → du schläfst, er schläft\nlaufen → du läufst, er läuft",exampleEn:"Strong verbs shift a→ä in du and er/sie/es forms",note:"This only happens with strong verbs.\nThe vowel shifts in the du and er/sie/es forms.\nfahren: ich fahre (no shift), du fährst (shift!)."},
          {type:"mc",q:"'fahren' (to drive) becomes 'du fährst'. The umlaut appears in:",opts:["All persons","Only ich","Only du and er/sie/es","Only wir and sie"],ans:"Only du and er/sie/es",hint:"Strong verb vowel shift only affects 2nd and 3rd person singular"},
          {type:"teach",kind:"info",nl:"Umlaut = New word",en:"Umlauts create related but different words",phonetic:"",example:"schon (already) → schön (beautiful)\nfordern (demand) → fördern (promote)\ndrucken (print) → drücken (press/push)",exampleEn:"Same consonant skeleton, different vowel = different word",note:"These pairs share a root but the umlaut shifts meaning.\nNever confuse them. The umlaut is not optional.\nschon and schön are as different as cat and cut."},
          {type:"mc",q:"'schon' means already. 'schön' means beautiful. If you drop the umlaut:",opts:["The meaning stays the same","You get a different word entirely","The word becomes informal","Nothing changes"],ans:"You get a different word entirely",hint:"Dropping an umlaut is like changing a vowel in English: cat vs cut"},
          {type:"mc",q:"'drucken' means to print. 'drücken' means to press. The umlaut:",opts:["Is decorative","Changes the meaning completely","Makes it past tense","Marks a question"],ans:"Changes the meaning completely",hint:"Same consonants, different vowel = different word"},
        ]},

        // ── L3: The Three Diphthongs ──
        {id:"de_fp_s2_l3",title:"Three Diphthongs: ei, au, eu",icon:"🔀",xp:15,board:true,steps:[
          {type:"intro",title:"Two letters, one gliding sound",desc:"A diphthong glides from one vowel position to another within a single syllable. German has exactly three. Each is stable: it always makes the same sound. Learn three sounds and you can read thousands of words.",goals:["Know ei/ai = eye sound","Know au = ow sound","Know eu/äu = oy sound"]},
          {type:"teach",kind:"info",nl:"ei / ai",en:"Sounds like English eye",phonetic:"like English eye or I",example:"ein (one) = AYNE\nmein (my) = MYNE\nWein (wine) = VYNE\nKaiser (emperor) = KYE-zer",exampleEn:"ei and ai both make the same sound: English eye.",note:"ei is extremely common. You will see it everywhere.\nai is rare (Mai, Kaiser, Bayern).\nBoth make the SAME sound: the English word eye.\nTrick: German EI = English I. German IE = English E."},
          {type:"mc",q:"'mein' (my) contains ei. This sounds like:",opts:["The English word me","The English word my","The English word men","The English word mean"],ans:"The English word my",hint:"German ei = the sound of English I or eye"},
          {type:"teach",kind:"info",nl:"au",en:"Sounds like English ow in cow",phonetic:"like ow in cow",example:"Haus (house) = HOWSS\nMaus (mouse) = MOWSS\nblau (blue) = BLOW\nauch (also) = OWKH",exampleEn:"au always sounds like ow in cow or now.",note:"Compare English cognates:\nHaus = house, Maus = mouse.\nThe au diphthong is 100% stable.\nAlways ow. Never changes."},
          {type:"mc",q:"'Haus' (house) contains au. This sounds like:",opts:["oo as in moon","ow as in cow","oh as in go","ah as in father"],ans:"ow as in cow",hint:"German au = English ow. Haus rhymes with house."},
          {type:"teach",kind:"info",nl:"eu / äu",en:"Both sound like English oy in boy",phonetic:"like oy in boy",example:"neu (new) = NOY\nheute (today) = HOY-teh\nHäuser (houses) = HOY-zer\nTräume (dreams) = TROY-meh",exampleEn:"eu and äu are the SAME sound: oy as in boy.",note:"eu and äu make identical sounds.\näu appears in umlaut-plurals: Haus → Häuser.\neu appears in base words: neu, heute, deutsch.\nBoth = oy. Always."},
          {type:"mc",q:"'heute' (today) contains eu. This sounds like:",opts:["oy as in boy","ow as in cow","eye as in I","ay as in day"],ans:"oy as in boy",hint:"eu = oy sound. heute = HOY-teh."},
          {type:"mc",q:"'Haus' → 'Häuser'. The au changed to äu. The sound changed from:",opts:["ow to oy","oy to ow","eye to ow","ow to eye"],ans:"ow to oy",hint:"au (ow) becomes äu (oy) in the umlaut plural"},
          {type:"match",pairs:[{nl:"ei",en:"eye sound (my, wine)"},{nl:"au",en:"ow sound (house, mouse)"},{nl:"eu",en:"oy sound (new, today)"},{nl:"äu",en:"oy sound (houses, dreams)"}]},
          {type:"tip",title:"The Diphthong Cheat Sheet",text:"Only three sounds to remember:\n\nei/ai = EYE (mein, Wein, Kaiser)\nau = OW (Haus, Maus, blau)\neu/äu = OY (neu, heute, Häuser)\n\nBonus memory trick:\nGerman EI = English I sound\nGerman IE = English E sound\nThe letters are SWAPPED between the languages."},
        ]},
      ]},

    // ── STAGE 3: CONSONANT TRAPS ──
    // Teacher board: ch has TWO sounds (back vs front), sch is always sh,
    // sp/st shift at word start, consonant clusters never insert vowels.
    {id:"de_fp_s3",title:"Consonant Traps",desc:"ch, sch, sp, st: the combos that sound nothing like English",icon:"🧩",
      lessons:[
        {id:"de_fp_s3_l1",title:"ch and sch",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"Two German consonant combos",desc:"ch has two sounds depending on the vowel before it. sch always sounds like English sh. Neither sounds like English ch in chair.",goals:["Learn the ach-Laut after a, o, u, au","Learn the ich-Laut after e, i, ä, ö, ü, ei, eu","Know sch always sounds like sh"]},
          {type:"teach",kind:"info",nl:"ch nach a, o, u, au (ach-Laut)",en:"ch after back vowels: throaty sound",phonetic:"like clearing your throat softly",example:"Bach (stream), doch (yet), Buch (book), auch (also)",exampleEn:"After back vowels: ch is a throaty fricative from the back of the mouth",note:"The ach-Laut comes from the back of the throat.\nEnglish speakers sometimes substitute K, but the friction is key."},
          {type:"teach",kind:"info",nl:"ch nach e, i, ä, ö, ü, ei, eu (ich-Laut)",en:"ch after front vowels: soft hiss",phonetic:"like h in huge",example:"ich (I), nicht (not), Mädchen (girl), echt (real)",exampleEn:"After front vowels: ch is a softer hissing sound from the front of the mouth",note:"The ich-Laut is softer, made near the front of the mouth.\nStart of words also uses ich-Laut: China, Chemie, Chirurg."},
          {type:"teach",kind:"info",nl:"sch",en:"always like English sh",phonetic:"sh as in shoe",example:"Schule (school), schön (beautiful), Mensch (person)",exampleEn:"sch = one sound, always sh. Never S + CH separately.",note:"sch is a trigraph: 3 letters, 1 sound.\nNever split sch into s + ch when pronouncing."},
          {type:"mc",q:"In 'Bach' (stream), the ch follows the vowel a. This produces:",opts:["The ich-Laut (front, soft)","The ach-Laut (back, throaty)","The English ch as in chair","A silent sound"],ans:"The ach-Laut (back, throaty)",hint:"After a, o, u, au the throaty version appears"},
          {type:"mc",q:"In 'ich' (I), the ch follows i. This produces:",opts:["The ach-Laut (back, throaty)","The ich-Laut (front, soft hiss)","The English ch as in chair","A hard K sound"],ans:"The ich-Laut (front, soft hiss)",hint:"After front vowels i, e, ä, ö, ü the soft version appears"},
          {type:"mc",q:"'Schule' (school) starts with sch. This sounds like:",opts:["S + K + H separately","SK as in skip","SH as in shoe","CH as in chair"],ans:"SH as in shoe",hint:"sch is always a single sh sound in German"},
          {type:"mc",q:"What determines which ch sound to use?",opts:["The letter after ch","The vowel before ch","The length of the word","Whether the word is a noun"],ans:"The vowel before ch",hint:"Back vowels (a, o, u, au) vs. front vowels (e, i, ä, ö, ü, ei, eu)"},
          {type:"tip",title:"The ch Decision",text:"Look at the vowel BEFORE ch:\n\nBACK vowels (a, o, u, au) = ach-Laut (throat)\nBach, doch, Buch, auch\n\nFRONT vowels (e, i, ä, ö, ü, ei, eu) = ich-Laut (hiss)\nich, nicht, Mädchen, echt\n\nWord START = ich-Laut\nChina, Chemie, Chirurg\n\nNever use the English ch sound. It does not exist in German."},
        ]},
        {id:"de_fp_s3_l2",title:"z, w, v and s",icon:"⚡",xp:15,board:true,steps:[
          {type:"intro",title:"Four letters with deceptive sounds",desc:"German z, w, v, and s each sound different from their English counterparts. These are the four biggest consonant traps for English speakers.",goals:["Know z = TS sound","Know w = V sound","Know v = F sound in native words","Know s before a vowel = Z sound"]},
          {type:"teach",kind:"info",nl:"z = TS",en:"z sounds like ts in cats",phonetic:"ts",example:"zehn (ten), Zeit (time), Herz (heart), tanzen (to dance)",exampleEn:"z always sounds like the ts in cats or pizza",note:"This catches English speakers off guard.\nzehn is NOT like English zen. It sounds like tsen."},
          {type:"teach",kind:"info",nl:"w = V",en:"w sounds like v in very",phonetic:"v",example:"Wasser (water), Wein (wine), wohnen (to live), wer (who)",exampleEn:"German w = English v. Never like English w in water.",note:"A very common trap. Wasser sounds like VAH-ser.\nThis letter is extremely frequent in German."},
          {type:"teach",kind:"info",nl:"v = F (in native words)",en:"v usually sounds like f in fox",phonetic:"f in native words, v in loanwords",example:"Vater (father), viel (much), Vogel (bird), Vase (vase)",exampleEn:"Native German words: v = F. Loanwords: v = V.",note:"Vater, vier, viel, von, vor all use F-sound.\nLoanwords like Vase, Violine keep the V-sound."},
          {type:"teach",kind:"info",nl:"s vor Vokal = Z-Laut",en:"s before a vowel sounds like z",phonetic:"z as in zebra",example:"sagen (to say), so (so), Sonne (sun), Seife (soap)",exampleEn:"S at start of a word before a vowel = voiced Z sound",note:"At word end or before consonants, s is voiceless like English s in sun.\nIn sp and st, the s is special (see next lesson)."},
          {type:"mc",q:"'Zehn' (ten) is pronounced:",opts:["Like English zen","Like tsen with ts + en","Like English seen","Like sen with soft s"],ans:"Like tsen with ts + en",hint:"z in German always makes the ts sound"},
          {type:"mc",q:"'Wasser' (water) begins with a sound like:",opts:["English W in water","English V in very","English B in base","English F in far"],ans:"English V in very",hint:"German W = English V sound"},
          {type:"mc",q:"'Vater' (father) begins with a sound like:",opts:["English V in very","English F in father","English W in water","English B in boy"],ans:"English F in father",hint:"In native German words, V sounds like F"},
          {type:"mc",q:"'Sonne' (sun) begins with s before a vowel. This s sounds like:",opts:["English S in sun (voiceless)","English Z in zebra (voiced)","English SH in shoe","English TH in the"],ans:"English Z in zebra (voiced)",hint:"S before a vowel at word start = voiced Z sound in German"},
        ]},
        {id:"de_fp_s3_l3",title:"sp, st, and Consonant Clusters",icon:"🧱",xp:15,board:true,steps:[
          {type:"intro",title:"sp and st at word start sound like shp and sht",desc:"When sp or st appear at the START of a word or stressed syllable, the s sounds like sh. This is one of the most distinctive German pronunciation features.",goals:["Know sp = shp at word start","Know st = sht at word start","Handle common German consonant clusters"]},
          {type:"teach",kind:"info",nl:"sp am Wortanfang = shp",en:"sp at word start = shp",phonetic:"shp",example:"spielen (to play), sprechen (to speak), Sport (sport)",exampleEn:"spielen = SHPEE-len. sprechen = SHPREH-khen.",note:"In the MIDDLE of a word, sp is pronounced normally as s + p.\nOnly at word START or stressed syllable start: sh + p."},
          {type:"teach",kind:"info",nl:"st am Wortanfang = sht",en:"st at word start = sht",phonetic:"sht",example:"stehen (to stand), Stadt (city), Stern (star), Straße (street)",exampleEn:"stehen = SHTEH-en. Stadt = SHTAHT.",note:"Same rule: only at word START or stressed syllable start.\nEnglish speakers say st, German says sht."},
          {type:"teach",kind:"info",nl:"Konsonantencluster",en:"Consonant clusters: blend them fully",phonetic:"no inserted vowels",example:"str- in Straße, schr- in schreiben, kn- in Knie, pf- in Pferd",exampleEn:"German allows clusters at word start that English avoids",note:"Knie (knee) = KNEE with the K fully pronounced.\nPferd (horse) = PFERD, both p and f are sounded.\nNever insert a vowel between clustered consonants."},
          {type:"mc",q:"'spielen' (to play) starts with sp. How is this pronounced?",opts:["SP as in English spa","SHP as in sh + p","SK as in skip","S and P spoken separately"],ans:"SHP as in sh + p",hint:"sp at word start = shp in German"},
          {type:"mc",q:"'Stadt' (city) starts with st. How is this pronounced?",opts:["ST as in English stop","SHT as in sh + t","SK as in skip","Just T with soft s"],ans:"SHT as in sh + t",hint:"st at word start = sht in German"},
          {type:"mc",q:"'Pferd' (horse) starts with pf. How do you pronounce this?",opts:["Only the F, the P is silent","Both P and F fully pronounced together","Like English F only","Like English P only"],ans:"Both P and F fully pronounced together",hint:"German pf is a genuine affricate, both sounds matter"},
          {type:"mc",q:"The sp/st rule applies at:",opts:["Every position in a word","Only at word start or stressed syllable start","Only at word end","Only in noun words"],ans:"Only at word start or stressed syllable start",hint:"In the middle of a word, sp and st keep their normal sounds"},
          {type:"tip",title:"Straße step by step",text:"Straße breaks down as: str (sht + r) + ah + ß + e.\nFull pronunciation: SHTRAH-seh.\nThe ß here = SS after a long vowel.\nThe sp/st rule affects only the opening cluster.",deepDive:"Straße is a great practice word. It contains sht, a long vowel, and ß all in one word. Work through it slowly before trying to say it at speed."},
        ]},
      ]},

    // ── STAGE 4: SPELLING & CAPITALIZATION ──
    // Teacher board: capitalization = noun detector, compounds = word LEGO.
    {id:"de_fp_s4",title:"Spelling Superpowers",desc:"Capitalization tells you every noun. Compounding builds infinite words.",icon:"✏️",
      lessons:[
        {id:"de_fp_s4_l1",title:"All Nouns Are Capitalized",icon:"🔡",xp:15,board:true,steps:[
          {type:"intro",title:"Every noun gets a capital letter",desc:"In German, ALL nouns are capitalized, regardless of position in the sentence. This applies to every noun, including abstract ones.",goals:["Know all nouns are capitalized","Recognize nouns by their capital letter","See how this differs from English"]},
          {type:"teach",kind:"info",nl:"Großschreibung der Nomen",en:"Noun capitalization",phonetic:"GROHS-shry-boong dair NOH-men",example:"Der Mann kauft das Buch im Laden.\nThe man buys the book in the shop.",exampleEn:"Mann, Buch, Laden all capitalized in German.\nIn English, none would be capitalized mid-sentence.",note:"This helps you identify nouns when reading.\nAny capitalized word that is not sentence-initial is a noun.\nAdjectives, verbs, and adverbs are NOT capitalized."},
          {type:"teach",kind:"info",nl:"Auch abstrakte Nomen",en:"Even abstract nouns are capitalized",phonetic:"owkh ahb-STRAK-teh NOH-men",example:"Liebe (love), Freiheit (freedom), Hoffnung (hope), Glück (luck)",exampleEn:"Abstract concepts are still nouns. They are still capitalized.",note:"English does not capitalize these words. German always does.\nIf you see a capitalized word mid-sentence, it is a noun."},
          {type:"mc",q:"In 'Der Mann kauft ein Buch', which words are nouns?",opts:["Der and kauft","Mann and Buch","ein and kauft","Der and ein"],ans:"Mann and Buch",hint:"Capitalized words mid-sentence are nouns in German"},
          {type:"mc",q:"How would 'love' be written mid-sentence in German?",opts:["love","LOVE","Liebe","liebe"],ans:"Liebe",hint:"All nouns are capitalized in German, including abstract ones"},
          {type:"mc",q:"You see a capitalized word in the middle of a German sentence. This tells you:",opts:["It is a proper name","It is a noun","It is important or emphasized","It starts a new clause"],ans:"It is a noun",hint:"Mid-sentence capitalization = noun in German"},
          {type:"mc",q:"Which of these would NOT be capitalized mid-sentence in German?",opts:["Tisch (table)","schnell (quickly)","Hund (dog)","Freiheit (freedom)"],ans:"schnell (quickly)",hint:"Adjectives and adverbs are not capitalized, only nouns"},
          {type:"fb",s:"In German, every noun is capitalized {1} in a sentence.",a:["always"],opts:["always","never","sometimes","only at the start"],hint:"There are no exceptions to German noun capitalization"},
        ]},
        {id:"de_fp_s4_l2",title:"Compound Nouns",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"German builds new words by combining existing ones",desc:"German compounds are written as one single word with no spaces. The last noun in the compound determines the gender. This creates some famously long words.",goals:["Know German compounds are one word","Know the last noun sets the gender","Read compounds by breaking them apart"]},
          {type:"teach",kind:"info",nl:"Zusammensetzung",en:"Compounding: fusing words into one",phonetic:"tsoo-ZAH-men-zet-soong",example:"Hand + Schuh = Handschuh (glove)\nFahr + Rad = Fahrrad (bicycle)\nBahn + Hof = Bahnhof (train station)",exampleEn:"Two or more words fused into one. No space. No hyphen.",note:"To decode a compound: find the boundary between the parts.\nHandschuh = Hand + Schuh. Something for the hand that is a shoe. A glove."},
          {type:"teach",kind:"info",nl:"Das Grundwort bestimmt das Genus",en:"The head noun sets the gender",phonetic:"dahs GROONT-vort beh-SHTIMMT dahs GAY-noos",example:"der Hof, der Bahnhof. das Rad, das Fahrrad. die Schule, die Grundschule.",exampleEn:"The LAST element of the compound carries the gender for the whole word.",note:"This is crucial: der/die/das applies to the LAST noun.\nFahrrad = das Fahrrad (because das Rad is neuter)."},
          {type:"mc",q:"'Handschuh' = Hand + Schuh. If 'der Schuh' is masculine, 'der Handschuh' is:",opts:["Feminine","Neuter","Masculine","Unknown without context"],ans:"Masculine",hint:"The last element (Schuh = der) determines gender"},
          {type:"mc",q:"'Flugzeug' = Flug + Zeug. If 'das Zeug' is neuter, 'das Flugzeug' is:",opts:["Masculine","Feminine","Neuter","Variable"],ans:"Neuter",hint:"The gender of the LAST noun in the compound applies to the whole word"},
          {type:"mc",q:"German compound nouns are always written:",opts:["As two separate words","With a hyphen between them","As one single word","With an apostrophe between"],ans:"As one single word",hint:"No spaces, no hyphens in German compound nouns"},
          {type:"mc",q:"You see 'Hausaufgabe' (homework). To understand it, you should:",opts:["Memorize it as one opaque unit","Break it into Haus + auf + Gabe to find meaning","Ignore the parts entirely","Ask what language it is from"],ans:"Break it into Haus + auf + Gabe to find meaning",hint:"Compounds can always be decoded by their component parts"},
          {type:"tip",title:"Donaudampfschifffahrtsgesellschaft",text:"A famous long compound:\nDonau + Dampf + Schiff + Fahrt + Gesellschaft\nDanube + Steam + Ship + Journey + Company\n= Danube Steamship Company.",deepDive:"This word is 42 letters long. It is a real historical company name. Once you know German compounding, you can read any compound no matter how long by breaking it at boundaries."},
        ]},
      ]},

    // ── STAGE 5: PRONUNCIATION PATTERNS ──
    // Teacher board: stress rules as a decision tree, syllable structure
    // as open (long) vs closed (short). Separable vs inseparable prefixes.
    {id:"de_fp_s5",title:"Stress and Rhythm",desc:"Where to put the stress, and how syllable structure predicts vowel length",icon:"🎵",
      lessons:[
        {id:"de_fp_s5_l1",title:"Word Stress",icon:"💬",xp:15,board:true,steps:[
          {type:"intro",title:"Stress in German words",desc:"German words are usually stressed on the FIRST syllable of the base word. Prefixes affect stress differently depending on whether they are separable or inseparable.",goals:["Know stress usually falls on the first syllable","Know separable verb prefixes get stress","Know inseparable prefixes do NOT get stress"]},
          {type:"teach",kind:"info",nl:"Betonung auf der ersten Silbe",en:"Stress on the first syllable",phonetic:"beh-TOH-noong owf dair AYR-sten ZIL-beh",example:"KAUfen (to buy), WOhnen (to live), SPREchen (to speak)",exampleEn:"Most native German words stress the first syllable of the root",note:"This is the default rule for native German vocabulary.\nUnlike English, German rarely stresses a middle syllable."},
          {type:"teach",kind:"info",nl:"Trennbare Verben: Präfix betont",en:"Separable verbs: prefix gets the stress",phonetic:"TREN-bah-reh FAIR-ben",example:"AUFstehen (to get up), ANrufen (to call), EINkaufen (to shop)",exampleEn:"Separable prefix = stress magnet. AUF-stehen, not auf-STEhen.",note:"Separable prefixes: auf, an, ein, aus, mit, vor, ab, zu, nach.\nThe prefix jumps to the end in main clauses but always keeps the stress."},
          {type:"teach",kind:"info",nl:"Untrennbare Verben: Präfix unbetont",en:"Inseparable verbs: prefix is unstressed",phonetic:"oon-TREN-bah-reh FAIR-ben",example:"verSTEhen (to understand), beKOMmen (to receive), erKLÄren (to explain)",exampleEn:"Inseparable prefix = no stress. Stress falls on the ROOT.",note:"Inseparable prefixes: ver-, be-, ge-, er-, ent-, emp-, miss-, zer-.\nThese never separate and are never stressed."},
          {type:"mc",q:"'kaufen' (to buy). Where is the stress?",opts:["On -fen","On kau-","On both syllables equally","It depends on the sentence"],ans:"On kau-",hint:"Native German words stress the first syllable of the root"},
          {type:"mc",q:"'aufstehen' (to get up) is a separable verb. Where is the stress?",opts:["On -ste-","On -hen","On AUF-","Equally distributed"],ans:"On AUF-",hint:"Separable prefixes always attract the stress"},
          {type:"mc",q:"'verstehen' (to understand) is an inseparable verb. Where is the stress?",opts:["On VER-","On -ste-","On -hen","On ver-ste-"],ans:"On -ste-",hint:"Inseparable prefixes are unstressed. Stress the root syllable."},
          {type:"mc",q:"Which prefix group is always stressed?",opts:["Inseparable prefixes (ver-, be-, ge-)","Separable prefixes (auf-, an-, ein-)","All prefixes equally","No prefixes are stressed"],ans:"Separable prefixes (auf-, an-, ein-)",hint:"Separable = stressed. Inseparable = unstressed."},
        ]},
        {id:"de_fp_s5_l2",title:"Vowel Length and Syllable Structure",icon:"📐",xp:15,board:true,steps:[
          {type:"intro",title:"Open syllables have long vowels, closed syllables have short",desc:"German vowel length often follows syllable structure. An open syllable (ending in a vowel) has a long vowel. A closed syllable (ending in a consonant) has a short vowel.",goals:["Identify open vs. closed syllables","Predict vowel length from syllable structure","Know explicit markers: double vowel, H, and ie"]},
          {type:"teach",kind:"info",nl:"Offene Silbe = langer Vokal",en:"Open syllable = long vowel",phonetic:"OH-fen-eh ZIL-beh",example:"sa-gen (to say): sa- is open → long a.\nna-me (name): na- is open → long a.",exampleEn:"Open syllable ends in a vowel. The vowel is long.",note:"Open syllable: the syllable ends in a vowel letter.\nNo consonant closes it, so the vowel is drawn out."},
          {type:"teach",kind:"info",nl:"Geschlossene Silbe = kurzer Vokal",en:"Closed syllable = short vowel",phonetic:"geh-SHLOH-seh-neh ZIL-beh",example:"Mann (man): closed → short a.\nBett (bed): closed → short e.",exampleEn:"Closed syllable ends in a consonant. The vowel is short.",note:"Closed syllable: a consonant follows the vowel in the same syllable.\nSingle vowel + consonant = short vowel."},
          {type:"teach",kind:"info",nl:"Explizite Längenzeichen",en:"Explicit length markers",phonetic:"eks-PLEE-tsee-teh LENG-en-tsei-khen",example:"1. Double vowel: Saal (hall), See (lake), Boot (boat).\n2. Vowel + H: Bahn (track), Wahl (choice), Uhr (clock).\n3. ie always long: viel (much), Bier (beer), Spiel (game).",exampleEn:"These markers override the default and force a long vowel.",note:"These three markers always mean long: aa/ee/oo, vowel+H, ie.\nThey appear in both open AND closed syllables."},
          {type:"mc",q:"In 'sa-gen', the syllable sa- ends in a vowel. The vowel is:",opts:["Short","Long","Unstressed","Silent"],ans:"Long",hint:"Open syllable = long vowel"},
          {type:"mc",q:"In 'Mann', the vowel a is followed by a consonant in the same syllable. The vowel is:",opts:["Long","Short","Doubled","An umlaut"],ans:"Short",hint:"Closed syllable = short vowel"},
          {type:"mc",q:"'Saal' (hall) has aa. This explicit length marker means the vowel is:",opts:["Short","Long","Ambiguous","Context-dependent"],ans:"Long",hint:"Double vowel letters always signal a long vowel"},
          {type:"mc",q:"'Bahn' (track, path) has a vowel followed by H. The a is:",opts:["Short","Long","Silent","An umlaut"],ans:"Long",hint:"Vowel + H is one of the three explicit long-vowel markers"},
          {type:"mc",q:"'ie' in 'viel' (much) is always:",opts:["Short","Long","Variable","An umlaut"],ans:"Long",hint:"ie is always a long ee sound in German, no exceptions"},
        ]},
      ]},

    // ── STAGE 6: GRAMMAR PREVIEW ──
    // Teacher board: gender as a color system (der=blue, die=coral, das=gold),
    // V2 word order as a sentence bracket. Preview only, not full grammar.
    {id:"de_fp_s6",title:"Grammar Preview",desc:"Three genders (der/die/das) and the V2 word order rule: the two pillars of German grammar",icon:"🏗️",
      lessons:[
        {id:"de_fp_s6_l1",title:"Three Genders: der, die, das",icon:"🎭",xp:20,board:true,steps:[
          {type:"intro",title:"Every German noun has a gender",desc:"German has three grammatical genders: masculine (der), feminine (die), and neuter (das). Gender affects articles, adjectives, and pronouns. It must be learned with each noun. Color-coding: der = blue, die = coral, das = gold.",goals:["Know the three genders: der, die, das","Know gender affects articles and adjectives","Accept that gender must be learned with each noun"]},
          {type:"teach",kind:"info",nl:"der (maskulin)",en:"masculine article",phonetic:"dair",example:"A: Ist das ein Hund?\nB: Ja, das ist der Hund.",exampleEn:"A: Is that a dog?\nB: Yes, that is the dog.",note:"der marks masculine nouns. Color: blue.\nSome patterns help: -er endings often masculine.\nBut many nouns have unpredictable gender. Learn it with each word."},
          {type:"teach",kind:"info",nl:"die (feminin)",en:"feminine article",phonetic:"dee",example:"A: Was ist das?\nB: Das ist die Stadt.",exampleEn:"A: What is that?\nB: That is the city.",note:"die marks feminine nouns. Color: coral.\nPatterns: -ung, -heit, -keit, -schaft, -tion endings are almost always feminine.\ndie is also the plural article for ALL genders."},
          {type:"teach",kind:"info",nl:"das (neutrum)",en:"neuter article",phonetic:"dahs",example:"A: Was liest du?\nB: Ich lese das Buch.",exampleEn:"A: What are you reading?\nB: I am reading the book.",note:"das marks neuter nouns. Color: gold.\nPatterns: -chen and -lein diminutives are ALWAYS neuter.\ndas Mädchen (the girl) is neuter even though the meaning is female."},
          {type:"tip",title:"Learn der/die/das with every noun",text:"Never learn a noun without its article.\nNot just: Hund. Always: der Hund.\nNot just: Sprache. Always: die Sprache.\nThe article is part of the vocabulary item.",deepDive:"This is the single most important habit in German learning. Every textbook, dictionary, and teacher will tell you the same thing. If you drill gender from day one, it becomes automatic. If you ignore it and try to add it later, it takes twice as long."},
          {type:"mc",q:"How many grammatical genders does German have?",opts:["One: no gender distinction","Two: masculine and feminine","Three: masculine, feminine, neuter","Four: masculine, feminine, neuter, common"],ans:"Three: masculine, feminine, neuter",hint:"der, die, das each represent a different gender"},
          {type:"mc",q:"Nouns with the diminutive ending -chen are always:",opts:["Masculine","Feminine","Neuter","Variable by meaning"],ans:"Neuter",hint:"das Mädchen is neuter despite referring to a girl"},
          {type:"mc",q:"What is the plural article for ALL German nouns, regardless of gender?",opts:["der","die","das","ein"],ans:"die",hint:"die is both feminine singular AND the plural article for all genders"},
          {type:"mc",q:"Best practice when learning a new German noun:",opts:["Learn the word alone first, article later","Learn the article together with the noun from day one","Only learn the article for feminine nouns","Guess the article from context"],ans:"Learn the article together with the noun from day one",hint:"Article is part of the vocabulary item. Never separate them."},
        ]},
        {id:"de_fp_s6_l2",title:"V2 Word Order",icon:"📐",xp:20,board:true,steps:[
          {type:"intro",title:"The verb is always second in main clauses",desc:"German has a strict rule: in a main clause, the VERB comes in position 2. The first position can be the subject, a time expression, an object, or an adverb. In subclauses, the verb goes to the END.",goals:["Know the V2 rule for main clauses","See how inversion works when subject leaves position 1","Know verbs go to the END in subclauses"]},
          {type:"teach",kind:"info",nl:"V2-Stellung im Hauptsatz",en:"V2 rule in main clauses",phonetic:"FOW-tsvy SHTEL-oong im HOWPT-zahts",example:"Ich kaufe Brot.\nHeute kaufe ich Brot.\nBrot kaufe ich heute.",exampleEn:"Verb is always in position 2. Subject can move around it.",note:"Position 1: anything can go here.\nPosition 2: ALWAYS the verb.\nWhen subject leaves position 1, subject and verb swap."},
          {type:"teach",kind:"info",nl:"Verbendstellung im Nebensatz",en:"Verb goes to the END in subclauses",phonetic:"FAIR-bent-shtel-oong im NAY-ben-zahts",example:"Ich weiß, dass er Brot kauft.\n(I know that he buys bread.)",exampleEn:"In a subclause (after weil, dass, wenn, ob...), verb is last.",note:"This is the sharpest contrast with English word order.\nMain clause: verb second. Subclause: verb last.\nThis rule is absolute in standard German."},
          {type:"teach",kind:"info",nl:"Modalverben: Infinitiv am Ende",en:"Modal verbs send the infinitive to the end",phonetic:"moh-DAHL-fair-ben",example:"Ich kann Deutsch sprechen.\nEr muss heute arbeiten.",exampleEn:"Modal verb is in position 2. The main verb infinitive goes to the end.",note:"Modal verbs (können, müssen, wollen, dürfen, sollen, mögen) always send the main verb to the end.\nThis creates the classic German sentence bracket structure."},
          {type:"mc",q:"In 'Heute kaufe ich Brot', what is in position 1?",opts:["ich (the subject)","kaufe (the verb)","Heute (a time expression)","Brot (the object)"],ans:"Heute (a time expression)",hint:"Any element can occupy position 1 in German"},
          {type:"mc",q:"In 'Heute kaufe ich Brot', what is in position 2?",opts:["ich","Heute","Brot","kaufe"],ans:"kaufe",hint:"V2 rule: verb is always in second position in main clauses"},
          {type:"mc",q:"'Ich weiß, dass er Brot kauft.' Where is the verb kauft in the subclause?",opts:["Position 1","Position 2","At the end","Wherever sounds natural"],ans:"At the end",hint:"Subclauses (dass, weil, wenn, ob...) send the verb to the very end"},
          {type:"mc",q:"'Ich kann Deutsch sprechen.' The modal kann is in position 2. Where is sprechen?",opts:["Position 1","Position 2","Position 3","At the end of the clause"],ans:"At the end of the clause",hint:"Modal verbs send the dependent infinitive to the end of the clause"},
          {type:"tip",title:"The German sentence bracket",text:"German creates a bracket around the middle of the sentence.\nLeft bracket: finite verb (position 2).\nRight bracket: infinitive or subclause verb (end).\nEverything else sits in between.\nExample: Ich habe heute Brot gekauft.",deepDive:"This bracket structure is called the Satzklammer (sentence bracket). It is fundamental to German and explains why long German sentences feel so different from English. Once you expect the bracket, reading German becomes much easier."},
        ]},
      ]},
  ]},
  // ══════════════════════════════════════════════════════════════════
  // GERMAN FOUNDATIONS — ARABIC SOURCE (de_ar)
  // Exact same structure as de:{}, but all metalanguage in Arabic (MSA).
  // Syrian teacher voice. Arabic-German contrastive bridges throughout.
  // German target-language fields (nl, example, q, s, opts, ans) untouched.
  // ══════════════════════════════════════════════════════════════════
  de_ar:{name:"أساسيات الألمانية",icon:"🇩🇪",blueprint:"latin_complex",srcLang:"ar",stages:[
    // ── المرحلة الأولى: نظام الأبجدية ──
    {id:"de_ar_fp_s1",title:"نظام الأبجدية",desc:"الألمانية تستخدم 26 حرفًا مألوفًا بالإضافة إلى 4 أحرف خاصة. تعلّم النظام أولًا.",icon:"🔤",
      lessons:[
        // ── الدرس 1: النظام ──
        {id:"de_ar_fp_s1_l1",title:"نفس الحروف، أصوات مختلفة",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"الألمانية تستخدم نفس الأبجدية الإنجليزية",desc:"الخبر الجيد: أنت تعرف 26 حرفًا من أصل 30 حرفًا ألمانيًا. الخبر السيئ: كثير منها يُنطق بشكل مختلف تمامًا. هذا الدرس يشرح النظام قبل الحفظ.",goals:["رؤية الحروف الـ26 الأساسية التي تعرفها","التعرّف على الأحرف الألمانية الأربعة الخاصة","فهم أن الصوت هو ما يميّز الألمانية، لا الشكل"]},
          {type:"teach",kind:"info",nl:"26 + 4",en:"المخزون الحرفي الألماني",phonetic:"",example:"Base: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\nSpecial: Ä  Ö  Ü  ß",exampleEn:"26 حرفًا تعرفها + 4 تحتاج أن تتعلمها",note:"الحروف الـ26 الأساسية مطابقة للإنجليزية.\nالأشكال مألوفة. الأصوات ليست كذلك.\nأربعة أحرف خاصة لا توجد في الإنجليزية:\nÄ وÖ وÜ (حروف علّة معدّلة) وß (حرف صامت خاص).\nمثل العربية، الأصوات هي الأساس وليس الشكل."},
          {type:"mc",q:"How many base letters does German share with English?",opts:["20","24","26","30"],ans:"26",hint:"الأبجدية الإنجليزية كاملة موجودة في الألمانية"},
          {type:"mc",q:"German adds how many special characters beyond the 26?",opts:["Two","Three","Four","Six"],ans:"Four",hint:"ثلاثة حروف علّة بنقطتين وحرف صامت خاص واحد"},
          {type:"teach",kind:"info",nl:"Drei Gruppen",en:"ثلاث مجموعات من الحروف",phonetic:"",example:"Group 1: SAFE (same sound as English)\nB D F H K L M N P T\n\nGroup 2: TRAPS (look familiar, sound different)\nJ W V Z S R\n\nGroup 3: SPECIAL (new characters)\nÄ Ö Ü ß",exampleEn:"حروف آمنة، حروف خادعة، وأحرف خاصة",note:"المجموعة 1 = مرتاح، أنت تعرفها.\nالمجموعة 2 = تحذير! عاداتك الإنجليزية ستخدعك.\nالمجموعة 3 = جديدة كليًا. يجب تعلّمها من الصفر."},
          {type:"mc",q:"Which group needs the most attention from an English speaker?",opts:["Safe letters (B, D, F)","Trap letters (J, W, V, Z)","Special characters (Ä, Ö, Ü, ß)","All groups equally"],ans:"Trap letters (J, W, V, Z)",hint:"هذه الحروف تبدو مألوفة لكنها تُنطق بشكل مختلف، فيصحّح دماغك تلقائيًا بشكل خاطئ"},
          {type:"mc",q:"The letters Ä, Ö, Ü are:",opts:["Decorated versions of A, O, U with the same sound","Completely new vowels with their own sounds","Only used in Swiss German","Consonants that look like vowels"],ans:"Completely new vowels with their own sounds",hint:"النقطتان تشيران إلى حرف علّة مختلف تمامًا"},
          {type:"tip",title:"خريطة الأبجدية الألمانية",text:"فكّر فيها كثلاث مناطق:\n\nالمنطقة الآمنة: B D F H K L M N P T\nهذه تُنطق مثل الإنجليزية تمامًا. لا جهد مطلوب.\n\nمنطقة الفخاخ: J W V Z S R\nتبدو إنجليزية لكنها تُنطق ألمانيًا. تحتاج تدريبًا.\n\nالمنطقة الجديدة: Ä Ö Ü ß\nجديدة كليًا. تعلّمها من الصفر.\n\nركّز طاقتك على منطقتي الفخاخ والجديدة."},
        ]},

        // ── الدرس 2: الحروف الخادعة الأربعة ──
        {id:"de_ar_fp_s1_l2",title:"الحروف الخادعة الأربعة",icon:"⚠️",xp:15,board:true,steps:[
          {type:"intro",title:"أربعة حروف ستخدعك في كل مرة",desc:"الحروف J وW وV وZ تبدو مطابقة للإنجليزية لكنها تُنطق بشكل مختلف تمامًا. دماغك سيصحّح تلقائيًا إلى الصوت الإنجليزي. قاوم ذلك. هذا الدرس يدرّب كل حرف على حدة.",goals:["معرفة أن J الألمانية = صوت Y الإنجليزية","معرفة أن W الألمانية = صوت V الإنجليزية","معرفة أن V الألمانية = صوت F الإنجليزية","معرفة أن Z الألمانية = صوت TS الإنجليزية"]},
          {type:"teach",kind:"info",nl:"J",en:"الحرف J الألماني = صوت Y",phonetic:"like Y in yes",example:"ja = yah (yes)\nJuni = YOO-nee (June)\nJahr = YAHR (year)",exampleEn:"كل J ألمانية تُنطق مثل Y الإنجليزية",note:"الـJ الألمانية ليست أبدًا صوت J الإنجليزي.\nصوت jump الإنجليزي لا يوجد في الألمانية.\nتذكّر: ja = يا. دائمًا.\nمثل حرف الياء في العربية!"},
          {type:"mc",q:"The German word 'ja' (yes) is pronounced:",opts:["jah (like jam)","yah (like yard)","zhah (like measure)","hah (like hat)"],ans:"yah (like yard)",hint:"الـJ الألمانية دائمًا تصدر صوت Y"},
          {type:"teach",kind:"info",nl:"W",en:"الحرف W الألماني = صوت V",phonetic:"like V in very",example:"Wasser = VAHS-ser (water)\nWein = VINE (wine)\nwo = VOH (where)",exampleEn:"كل W ألمانية تُنطق مثل V الإنجليزية",note:"الـW الألمانية ليست أبدًا صوت W الإنجليزي.\nلا تدوير للشفتين. الأسنان على الشفة السفلى.\nتذكّر: Wasser = فاسّر. دائمًا."},
          {type:"mc",q:"The German word 'Wasser' (water) starts with the sound:",opts:["W as in water","V as in very","F as in fox","B as in boy"],ans:"V as in very",hint:"الـW الألمانية والـV الإنجليزية نفس الصوت"},
          {type:"teach",kind:"info",nl:"V",en:"الحرف V الألماني = صوت F",phonetic:"like F in fox",example:"Vater = FAH-ter (father)\nvier = FEER (four)\nvon = FON (from)",exampleEn:"معظم كلمات V الألمانية تُنطق مثل F الإنجليزية",note:"الـV الألمانية عادة صوت F.\nاستثناء: الكلمات الأجنبية (Verb, Vase) تحتفظ بصوت V.\nالكلمات الألمانية الأصلية: V = F. دائمًا.\nتمامًا مثل حرف الفاء في العربية!"},
          {type:"mc",q:"'Vater' (father) starts with the sound:",opts:["V as in very","F as in fox","W as in water","P as in park"],ans:"F as in fox",hint:"في الكلمات الألمانية الأصلية، V تُنطق F"},
          {type:"teach",kind:"info",nl:"Z",en:"الحرف Z الألماني = صوت TS",phonetic:"like TS in cats",example:"Zeit = TSAIT (time)\nzwei = TSVAI (two)\nzusammen = tsoo-ZAH-men (together)",exampleEn:"كل Z ألمانية تُنطق TS",note:"الـZ الألمانية ليست أبدًا صوت الزين العربي.\nهي صوت TS حاد، مثل نهاية كلمة cats.\nتذكّر: Zeit = تسايت. دائمًا."},
          {type:"mc",q:"'Zeit' (time) starts with the sound:",opts:["Z as in zoo","S as in sun","TS as in cats","TH as in the"],ans:"TS as in cats",hint:"الـZ الألمانية دائمًا صوت TS الحاد"},
          {type:"match",pairs:[{nl:"J",en:"صوت Y (مثل yes)"},{nl:"W",en:"صوت V (مثل very)"},{nl:"V",en:"صوت F (مثل fox)"},{nl:"Z",en:"صوت TS (مثل cats)"}]},
          {type:"mc",q:"A German word starts with W. You should pronounce it like English:",opts:["W","V","F","B"],ans:"V",hint:"الـW الألمانية تتبادل مع V الإنجليزية"},
          {type:"mc",q:"A German word starts with V. In a native German word, pronounce it like:",opts:["V","F","W","P"],ans:"F",hint:"الـV الألمانية تتبادل مع F الإنجليزية في الكلمات الأصلية"},
          {type:"tip",title:"سلسلة التبادل",text:"احفظ هذه السلسلة:\n\nJ الألمانية = Y الإنجليزية\nW الألمانية = V الإنجليزية\nV الألمانية = F الإنجليزية\nZ الألمانية = TS الإنجليزية\n\nأربعة حروف. أربعة تبادلات. تدرّب حتى يصبح تلقائيًا."},
        ]},

        // ── الدرس 3: حروف العلّة الثلاثة المعدّلة (أوملاوت) ──
        {id:"de_ar_fp_s1_l3",title:"Ä وÖ وÜ: ثلاثة حروف علّة جديدة",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"ثلاثة حروف علّة لا توجد في الإنجليزية",desc:"النقطتان فوق A وO وU ليستا زخرفة. إنهما تشيران إلى أصوات حروف علّة مختلفة تمامًا. كل أوملاوت حرف مستقل. الفرق بين Ä وA كالفرق بين A وE.",goals:["معرفة أن Ä تُنطق مثل E في bed","معرفة أن Ö ليس لها مقابل إنجليزي (شفاه مدوّرة + E)","معرفة أن Ü ليس لها مقابل إنجليزي (شفاه مدوّرة + EE)","فهم أن الأوملاوت يغيّر معنى الكلمة"]},
          {type:"teach",kind:"info",nl:"Ä",en:"حرف A مع أوملاوت",phonetic:"like E in bed",example:"Bär (bear) = BAIR\nMänner (men) = MEN-ner\nspät (late) = SHPAIT",exampleEn:"Ä تُنطق مثل E في كلمة bed أو AI في fair",note:"Ä أسهل أوملاوت للمتحدثين بالعربية.\nتُنطق مثل E في bed (قصيرة) أو AI في fair (طويلة).\nمقارنة: Mann (رجل) مقابل Männer (رجال). الأوملاوت يشير للجمع.\nفي العربية أيضًا نغيّر حركات الكلمة للجمع!"},
          {type:"mc",q:"The German letter Ä sounds most like:",opts:["A as in father","E as in bed","O as in go","U as in blue"],ans:"E as in bed",hint:"رغم شكلها كحرف A، إلا أنها تُنطق كحرف علّة مختلف تمامًا"},
          {type:"teach",kind:"info",nl:"Ö",en:"حرف O مع أوملاوت",phonetic:"round lips, say E",example:"schön (beautiful) = SHURN\nhören (to hear) = HUR-en\nöffnen (to open) = UFF-nen",exampleEn:"Ö ليس لها مقابل إنجليزي. دوّر شفتيك كأنك تقول O، ثم قل E.",note:"كيف تنطق Ö:\n1. شكّل شفتيك كأنك تقول O (مدوّرة)\n2. أبقِ الشفاه مدوّرة\n3. حاول قول E\nالنتيجة هي Ö. تدرّب مع: schön, hören, böse."},
          {type:"mc",q:"To produce the Ö sound, you should:",opts:["Open jaw wide and say A","Round lips like O, then say E","Close lips and hum","Say U with flat lips"],ans:"Round lips like O, then say E",hint:"تدوير الشفاه هو ما يميّز Ö"},
          {type:"teach",kind:"info",nl:"Ü",en:"حرف U مع أوملاوت",phonetic:"round lips, say EE",example:"über (over) = UE-ber\ngrün (green) = GRUEN\nTür (door) = TUER",exampleEn:"Ü ليس لها مقابل إنجليزي. دوّر شفتيك كأنك تقول U، ثم قل EE.",note:"كيف تنطق Ü:\n1. شكّل شفتيك كأنك تقول OO (مدوّرة)\n2. أبقِ الشفاه مدوّرة\n3. حاول قول EE\nالنتيجة هي Ü. تدرّب مع: Tür, grün, müssen."},
          {type:"mc",q:"To produce the Ü sound, you should:",opts:["Round lips like U, then say EE","Say OO as in moon","Open mouth wide and say AH","Say EE with flat lips"],ans:"Round lips like U, then say EE",hint:"نفس الحيلة مع Ö لكن بدءًا من موضع U بدلًا من O"},
          {type:"teach",kind:"info",nl:"Umlauts change meaning",en:"النقطتان = كلمة مختلفة",phonetic:"",example:"Mutter (mother) vs. Mütter (mothers)\nschon (already) vs. schön (beautiful)\nfordern (demand) vs. fördern (promote)",exampleEn:"الأوملاوت ليس اختياريًا. إنه يغيّر الكلمة.",note:"الأوملاوت نشط نحويًا:\n1. يشير للجمع: Haus مقابل Häuser\n2. يغيّر أشكال الأفعال: fahren مقابل fährt\n3. يخلق كلمات جديدة: schon مقابل schön\nلا تحذف الأوملاوت أبدًا. إنه يغيّر الكلمة.\nمثل الحركات في العربية: كَتَبَ مقابل كُتُب!"},
          {type:"mc",q:"'Mutter' means mother. 'Mütter' means mothers. The umlaut signals:",opts:["Past tense","Plural form","Feminine gender","A question"],ans:"Plural form",hint:"كثير من صيغ الجمع الألمانية تُشكَّل بإضافة أوملاوت"},
          {type:"mc",q:"'schon' means already. 'schön' means beautiful. What changed?",opts:["A letter was added","The umlaut changed the vowel sound and meaning","The word stress shifted","Nothing, they sound the same"],ans:"The umlaut changed the vowel sound and meaning",hint:"النقطتان على O حوّلت 'بالفعل' إلى 'جميل'"},
          {type:"match",pairs:[{nl:"Ä",en:"تُنطق مثل E في bed"},{nl:"Ö",en:"شفاه مدوّرة + صوت E"},{nl:"Ü",en:"شفاه مدوّرة + صوت EE"}]},
        ]},

        // ── الدرس 4: الإسْتسِت (ß) ──
        {id:"de_ar_fp_s1_l4",title:"ß: حرف S الحاد",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"حرف واحد، صوت واحد، قاعدة واحدة",desc:"ß (إسْتسِت) هو حرف واحد يُصدر صوت S حاد. يظهر فقط بعد حروف العلّة الطويلة أو المزدوجة. بعد حروف العلّة القصيرة، تستخدم الألمانية SS بدلًا منه. قاعدة واحدة بسيطة تحكم الاختيار.",goals:["معرفة أن ß يُصدر صوت S حاد","معرفة قاعدة حرف العلّة الطويل = ß","معرفة قاعدة حرف العلّة القصير = SS","رؤية القاعدة في كلمات حقيقية"]},
          {type:"teach",kind:"info",nl:"ß",en:"إسْتسِت (S الحاد)",phonetic:"sharp S, like ss in kiss",example:"Straße (street): long A, so ß\nheißen (to be called): diphthong ei, so ß\ngroß (big): long O, so ß",exampleEn:"ß يأتي دائمًا بعد حرف علّة طويل أو مزدوج",note:"ß ليس حرفين. إنه حرف واحد.\nيُصدر صوتًا واحدًا: S حاد بلا اهتزاز.\nيظهر فقط بعد حروف العلّة الطويلة أو المزدوجة.\nلا يأتي أبدًا في بداية الكلمة."},
          {type:"mc",q:"ß makes which sound?",opts:["A buzzing Z","A sharp voiceless S","A SH sound","A TS sound"],ans:"A sharp voiceless S",hint:"فكّر في صوت S في كلمة kiss الإنجليزية، وليس Z في zoo"},
          {type:"teach",kind:"info",nl:"ß vs. SS",en:"القاعدة الوحيدة",phonetic:"",example:"LONG vowel + S sound = ß\nStraße, heißen, groß, Fuß\n\nSHORT vowel + S sound = SS\nKlasse, Wasser, essen, müssen",exampleEn:"طول حرف العلّة قبل صوت S يحدد الكتابة",note:"القاعدة بسيطة:\nاستمع لحرف العلّة قبل صوت S.\nهل هو طويل أو مزدوج؟ استخدم ß.\nهل هو قصير؟ استخدم SS.\nلا استثناءات في الألمانية الفصحى."},
          {type:"mc",q:"'Straße' uses ß because the vowel before it is:",opts:["Short","Long","Silent","An umlaut"],ans:"Long",hint:"حرف A في Straße هو حرف علّة طويل"},
          {type:"mc",q:"'Wasser' uses SS because the vowel before it is:",opts:["Long","A diphthong","Short","A consonant"],ans:"Short",hint:"حرف A في Wasser هو حرف علّة قصير"},
          {type:"mc",q:"'heißen' (to be called) uses ß because before the S sound there is:",opts:["A short vowel","A long vowel","A diphthong (ei)","A consonant"],ans:"A diphthong (ei)",hint:"ei هو حرف علّة مزدوج، والمزدوجات دائمًا تأخذ ß"},
          {type:"mc",q:"If ß is not available on your keyboard, replace it with:",opts:["S alone","SZ","SS","Z"],ans:"SS",hint:"SS المضاعف هو البديل العام لـ ß"},
          {type:"tip",title:"قرار ß مقابل SS",text:"عندما تسمع S حاد في الألمانية، اسأل سؤالًا واحدًا:\n\nهل حرف العلّة قبله طويل أو مزدوج؟\nنعم = استخدم ß (Straße, heißen, groß)\nلا = استخدم SS (Klasse, Wasser, müssen)\n\nالألمانية السويسرية لا تستخدم ß أبدًا. يكتبون دائمًا SS."},
        ]},
      ]},

    // ── المرحلة الثانية: محرّك حروف العلّة ──
    {id:"de_ar_fp_s2",title:"محرّك حروف العلّة",desc:"قصير مقابل طويل، أوملاوت، مزدوجات: النظام الذي يحرّك النطق الألماني",icon:"🔊",
      lessons:[
        // ── الدرس 1: قصير مقابل طويل ──
        {id:"de_ar_fp_s2_l1",title:"قصير مقابل طويل: الطول يغيّر المعنى",icon:"⚖️",xp:15,board:true,steps:[
          {type:"intro",title:"في الألمانية، طول حرف العلّة يغيّر الكلمة",desc:"كل حرف علّة ألماني له نسخة قصيرة ونسخة طويلة. الطول الخاطئ = كلمة خاطئة. Stadt (مدينة) مقابل Staat (دولة). الفرق الوحيد هو طول حرف العلّة. الألمانية لها إشارات إملائية واضحة تخبرك أيهما.",goals:["فهم أن طول حرف العلّة يغيّر المعنى","تعلّم الإشارات الثلاث لحروف العلّة الطويلة","رؤية أزواج متقابلة حيث الطول هو الفرق الوحيد"]},
          {type:"teach",kind:"info",nl:"Kurz vs. Lang",en:"قصير = مقطوع. طويل = ممدود.",phonetic:"",example:"SHORT (clipped, tense):\nMann, Bett, bitte, Gott, Mutter\n\nLONG (held, relaxed):\nName, Meer, Bier, Sohn, Stuhl",exampleEn:"نفس حروف العلّة الخمسة (a e i o u)، لكن لكل منها نسختان",note:"حروف العلّة القصيرة: سريعة، فم مغلق.\nحروف العلّة الطويلة: ممدودة، فم أكثر انفتاحًا.\nهذا ليس مثل الإنجليزية حيث الطول اختياري.\nفي الألمانية، الطول هو المعنى.\nمثل العربية: كَتَبَ (فعل) مقابل كُتُب (جمع). الحركات تغيّر المعنى!"},
          {type:"mc",q:"'Stadt' (city) has a short a. 'Staat' (state) has a long a. What is the ONLY difference?",opts:["Different consonants","Different vowel length","Different stress","Different word origin"],ans:"Different vowel length",hint:"الحروف الصامتة متطابقة. فقط طول حرف A يختلف."},
          {type:"teach",kind:"info",nl:"Drei Signale für Länge",en:"ثلاث إشارات تعني دائمًا طويل",phonetic:"",example:"Signal 1: DOUBLE VOWEL\nSaal, Meer, Boot = long\n\nSignal 2: VOWEL + silent H\nBahn, Uhr, Sohn = long\n\nSignal 3: IE\nviel, Bier, Brief = always long ee",exampleEn:"ترى أيًا من هذه الأنماط الثلاثة؟ حرف العلّة طويل حتمًا.",note:"هذه الإشارات الثلاث موثوقة 100%:\n1. aa, ee, oo = دائمًا طويل\n2. حرف علّة + H = دائمًا طويل (H صامت)\n3. ie = دائمًا ee طويل\nلا استثناءات."},
          {type:"mc",q:"'Meer' (sea) has ee. This means the vowel is:",opts:["Short","Long","Silent","Variable"],ans:"Long",hint:"حرف علّة مزدوج = دائمًا طويل. لا استثناءات."},
          {type:"mc",q:"'Bahn' (train) has a vowel followed by H. The H is:",opts:["Pronounced as H","Silent, but signals a long vowel","Part of a consonant cluster","Random and meaningless"],ans:"Silent, but signals a long vowel",hint:"H بعد حرف العلّة = علامة طول صامتة"},
          {type:"mc",q:"The letters 'ie' in 'viel' (much) always represent:",opts:["Two separate vowels","A short i","A long ee sound","The same as English ie in pie"],ans:"A long ee sound",hint:"ie دائمًا مقطع واحد، دائمًا ee طويل في الألمانية"},
          {type:"tip",title:"شجرة قرار الطول",text:"عندما ترى حرف علّة ألماني، اسأل:\n\n1. هل هو مزدوج (aa, ee, oo)؟ طويل.\n2. هل يتبعه H صامت؟ طويل.\n3. هل هو ie؟ ee طويل.\n4. هل قبل حرف صامت مزدوج (tt, ss, mm)؟ قصير.\n5. لا شيء مما سبق؟ تحقق من بنية المقطع.\n\nهذه الشجرة تعمل مع 95% من الكلمات الألمانية."},
        ]},

        // ── الدرس 2: الأوملاوت في العمل ──
        {id:"de_ar_fp_s2_l2",title:"الأوملاوت في العمل",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"الأوملاوت نشط نحويًا",desc:"تعلّمت Ä وÖ وÜ كأصوات في المرحلة الأولى. الآن شاهدها في العمل. الأوملاوت يقوم بثلاث وظائف: يشير للجمع، ويغيّر أشكال الأفعال، ويخلق كلمات جديدة. ليس عشوائيًا. يتبع أنماطًا.",goals:["رؤية الأوملاوت يشير للجمع","رؤية الأوملاوت في تصريف الأفعال","رؤية الأوملاوت يخلق أزواج كلمات"]},
          {type:"teach",kind:"info",nl:"Umlaut = Plural",en:"كثير من صيغ الجمع الألمانية تضيف أوملاوت",phonetic:"",example:"Mann → Männer (man → men)\nHaus → Häuser (house → houses)\nBuch → Bücher (book → books)\nMutter → Mütter (mother → mothers)",exampleEn:"حرف العلّة الخلفي يتحوّل للأمام. a→ä, o→ö, u→ü, au→äu.",note:"هذا أحد أشهر أنماط الجمع.\nالأوملاوت يشير لنفس الكلمة بصيغة الجمع.\nالنمط: حرف العلّة الخلفي يتقدّم في الفم.\nمثل جمع التكسير في العربية: كِتاب → كُتُب!"},
          {type:"mc",q:"'Buch' (book) becomes 'Bücher' (books). What signals the plural?",opts:["Adding -er","The umlaut on u","Both the umlaut AND the -er ending","Changing the first letter"],ans:"Both the umlaut AND the -er ending",hint:"صيغ الجمع الألمانية غالبًا تجمع بين أوملاوت ولاحقة"},
          {type:"teach",kind:"info",nl:"Umlaut = Verb form",en:"بعض الأفعال تغيّر حروف العلّة عند التصريف",phonetic:"",example:"fahren → du fährst, er fährt\nschlafen → du schläfst, er schläft\nlaufen → du läufst, er läuft",exampleEn:"الأفعال القوية تحوّل a→ä في صيغتي du وer/sie/es",note:"هذا يحدث فقط مع الأفعال القوية.\nحرف العلّة يتغيّر في صيغتي du وer/sie/es.\nfahren: ich fahre (لا تغيير)، du fährst (تغيير!).\nمثل الأفعال المعتلّة في العربية التي يتغيّر جذعها!"},
          {type:"mc",q:"'fahren' (to drive) becomes 'du fährst'. The umlaut appears in:",opts:["All persons","Only ich","Only du and er/sie/es","Only wir and sie"],ans:"Only du and er/sie/es",hint:"تغيير حرف العلّة في الأفعال القوية يؤثر فقط على المخاطب والغائب المفرد"},
          {type:"teach",kind:"info",nl:"Umlaut = New word",en:"الأوملاوت يخلق كلمات مترابطة لكن مختلفة",phonetic:"",example:"schon (already) → schön (beautiful)\nfordern (demand) → fördern (promote)\ndrucken (print) → drücken (press/push)",exampleEn:"نفس هيكل الحروف الصامتة، حرف علّة مختلف = كلمة مختلفة",note:"هذه الأزواج تتشارك جذرًا لكن الأوملاوت يغيّر المعنى.\nلا تخلط بينها أبدًا. الأوملاوت ليس اختياريًا.\nschon وschön مختلفتان كاختلاف cat وcut."},
          {type:"mc",q:"'schon' means already. 'schön' means beautiful. If you drop the umlaut:",opts:["The meaning stays the same","You get a different word entirely","The word becomes informal","Nothing changes"],ans:"You get a different word entirely",hint:"حذف الأوملاوت مثل تغيير حرف علّة في الإنجليزية: cat مقابل cut"},
          {type:"mc",q:"'drucken' means to print. 'drücken' means to press. The umlaut:",opts:["Is decorative","Changes the meaning completely","Makes it past tense","Marks a question"],ans:"Changes the meaning completely",hint:"نفس الحروف الصامتة، حرف علّة مختلف = كلمة مختلفة"},
        ]},

        // ── الدرس 3: حروف العلّة المزدوجة الثلاث ──
        {id:"de_ar_fp_s2_l3",title:"ثلاث مزدوجات: ei وau وeu",icon:"🔀",xp:15,board:true,steps:[
          {type:"intro",title:"حرفان، صوت انزلاقي واحد",desc:"المزدوج ينزلق من موضع حرف علّة إلى آخر ضمن مقطع واحد. الألمانية لها ثلاثة بالضبط. كل منها ثابت: يُصدر دائمًا نفس الصوت. تعلّم ثلاثة أصوات وستقرأ آلاف الكلمات.",goals:["معرفة أن ei/ai = صوت eye","معرفة أن au = صوت ow","معرفة أن eu/äu = صوت oy"]},
          {type:"teach",kind:"info",nl:"ei / ai",en:"تُنطق مثل eye الإنجليزية",phonetic:"like English eye or I",example:"ein (one) = AYNE\nmein (my) = MYNE\nWein (wine) = VYNE\nKaiser (emperor) = KYE-zer",exampleEn:"ei وai كلاهما يُصدران نفس الصوت: eye الإنجليزية.",note:"ei شائعة جدًا. ستراها في كل مكان.\nai نادرة (Mai, Kaiser, Bayern).\nكلاهما يُصدران نفس الصوت: كلمة eye الإنجليزية.\nحيلة: EI الألمانية = صوت I الإنجليزي. IE الألمانية = صوت E الإنجليزي.\nالحروف متبادلة بين اللغتين!"},
          {type:"mc",q:"'mein' (my) contains ei. This sounds like:",opts:["The English word me","The English word my","The English word men","The English word mean"],ans:"The English word my",hint:"EI الألمانية = صوت I أو eye الإنجليزي"},
          {type:"teach",kind:"info",nl:"au",en:"تُنطق مثل ow في cow",phonetic:"like ow in cow",example:"Haus (house) = HOWSS\nMaus (mouse) = MOWSS\nblau (blue) = BLOW\nauch (also) = OWKH",exampleEn:"au دائمًا تُنطق مثل ow في cow أو now.",note:"قارن مع المرادفات الإنجليزية:\nHaus = house, Maus = mouse.\nالمزدوج au ثابت 100%.\nدائمًا ow. لا يتغيّر أبدًا."},
          {type:"mc",q:"'Haus' (house) contains au. This sounds like:",opts:["oo as in moon","ow as in cow","oh as in go","ah as in father"],ans:"ow as in cow",hint:"AU الألمانية = ow الإنجليزية. Haus تتوافق مع house."},
          {type:"teach",kind:"info",nl:"eu / äu",en:"كلاهما يُنطق مثل oy في boy",phonetic:"like oy in boy",example:"neu (new) = NOY\nheute (today) = HOY-teh\nHäuser (houses) = HOY-zer\nTräume (dreams) = TROY-meh",exampleEn:"eu وäu نفس الصوت: oy كما في boy.",note:"eu وäu يُصدران أصواتًا متطابقة.\näu يظهر في جموع الأوملاوت: Haus → Häuser.\neu يظهر في الكلمات الأساسية: neu, heute, deutsch.\nكلاهما = oy. دائمًا."},
          {type:"mc",q:"'heute' (today) contains eu. This sounds like:",opts:["oy as in boy","ow as in cow","eye as in I","ay as in day"],ans:"oy as in boy",hint:"eu = صوت oy. heute = HOY-teh."},
          {type:"mc",q:"'Haus' → 'Häuser'. The au changed to äu. The sound changed from:",opts:["ow to oy","oy to ow","eye to ow","ow to eye"],ans:"ow to oy",hint:"au (ow) يصبح äu (oy) في جمع الأوملاوت"},
          {type:"match",pairs:[{nl:"ei",en:"صوت eye (mein, Wein)"},{nl:"au",en:"صوت ow (Haus, Maus)"},{nl:"eu",en:"صوت oy (neu, heute)"},{nl:"äu",en:"صوت oy (Häuser, Träume)"}]},
          {type:"tip",title:"ورقة غش المزدوجات",text:"ثلاثة أصوات فقط للتذكّر:\n\nei/ai = EYE (mein, Wein, Kaiser)\nau = OW (Haus, Maus, blau)\neu/äu = OY (neu, heute, Häuser)\n\nحيلة إضافية للذاكرة:\nEI الألمانية = صوت I الإنجليزي\nIE الألمانية = صوت E الإنجليزي\nالحروف متبادلة بين اللغتين."},
        ]},
      ]},

    // ── المرحلة الثالثة: فخاخ الحروف الصامتة ──
    {id:"de_ar_fp_s3",title:"فخاخ الحروف الصامتة",desc:"ch وsch وsp وst: التوليفات التي لا تشبه الإنجليزية أبدًا",icon:"🧩",
      lessons:[
        {id:"de_ar_fp_s3_l1",title:"ch وsch",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"توليفتان من الحروف الصامتة الألمانية",desc:"ch لها صوتان حسب حرف العلّة قبلها. sch دائمًا تُنطق مثل sh الإنجليزية. لا واحدة منهما تُنطق مثل ch في chair.",goals:["تعلّم الآخ-لاوت بعد a, o, u, au","تعلّم الإيخ-لاوت بعد e, i, ä, ö, ü, ei, eu","معرفة أن sch دائمًا تُنطق sh"]},
          {type:"teach",kind:"info",nl:"ch nach a, o, u, au (ach-Laut)",en:"ch بعد حروف العلّة الخلفية: صوت حلقي",phonetic:"like clearing your throat softly",example:"Bach (stream), doch (yet), Buch (book), auch (also)",exampleEn:"بعد حروف العلّة الخلفية: ch صوت احتكاكي حلقي من مؤخرة الفم",note:"الآخ-لاوت يأتي من مؤخرة الحلق.\nهذا الصوت مألوف جدًا لمتحدثي العربية!\nإنه مشابه لصوت الخاء (خ) في العربية."},
          {type:"teach",kind:"info",nl:"ch nach e, i, ä, ö, ü, ei, eu (ich-Laut)",en:"ch بعد حروف العلّة الأمامية: هسهسة ناعمة",phonetic:"like h in huge",example:"ich (I), nicht (not), Mädchen (girl), echt (real)",exampleEn:"بعد حروف العلّة الأمامية: ch صوت هسهسة أنعم من مقدمة الفم",note:"الإيخ-لاوت أنعم، يُصنع قرب مقدمة الفم.\nبداية الكلمات أيضًا تستخدم الإيخ-لاوت: China, Chemie, Chirurg."},
          {type:"teach",kind:"info",nl:"sch",en:"دائمًا مثل sh الإنجليزية",phonetic:"sh as in shoe",example:"Schule (school), schön (beautiful), Mensch (person)",exampleEn:"sch = صوت واحد، دائمًا sh. أبدًا S + CH منفصلين.",note:"sch ثلاثي الحروف: 3 أحرف، صوت واحد.\nلا تقسم sch إلى s + ch عند النطق.\nمثل حرف الشين (ش) في العربية تمامًا!"},
          {type:"mc",q:"In 'Bach' (stream), the ch follows the vowel a. This produces:",opts:["The ich-Laut (front, soft)","The ach-Laut (back, throaty)","The English ch as in chair","A silent sound"],ans:"The ach-Laut (back, throaty)",hint:"بعد a, o, u, au يظهر النوع الحلقي"},
          {type:"mc",q:"In 'ich' (I), the ch follows i. This produces:",opts:["The ach-Laut (back, throaty)","The ich-Laut (front, soft hiss)","The English ch as in chair","A hard K sound"],ans:"The ich-Laut (front, soft hiss)",hint:"بعد حروف العلّة الأمامية i, e, ä, ö, ü يظهر النوع الناعم"},
          {type:"mc",q:"'Schule' (school) starts with sch. This sounds like:",opts:["S + K + H separately","SK as in skip","SH as in shoe","CH as in chair"],ans:"SH as in shoe",hint:"sch دائمًا صوت sh واحد في الألمانية"},
          {type:"mc",q:"What determines which ch sound to use?",opts:["The letter after ch","The vowel before ch","The length of the word","Whether the word is a noun"],ans:"The vowel before ch",hint:"حروف علّة خلفية (a, o, u, au) مقابل أمامية (e, i, ä, ö, ü, ei, eu)"},
          {type:"tip",title:"قرار ch",text:"انظر لحرف العلّة قبل ch:\n\nحروف علّة خلفية (a, o, u, au) = آخ-لاوت (حلقي)\nBach, doch, Buch, auch\n\nحروف علّة أمامية (e, i, ä, ö, ü, ei, eu) = إيخ-لاوت (هسهسة)\nich, nicht, Mädchen, echt\n\nبداية الكلمة = إيخ-لاوت\nChina, Chemie, Chirurg\n\nلا تستخدم أبدًا صوت ch الإنجليزي. لا يوجد في الألمانية.\n\nللعرب: الآخ-لاوت قريب من صوت الخاء!"},
        ]},
        {id:"de_ar_fp_s3_l2",title:"z وw وv وs",icon:"⚡",xp:15,board:true,steps:[
          {type:"intro",title:"أربعة حروف بأصوات خادعة",desc:"الحروف z وw وv وs الألمانية كل منها يُنطق بشكل مختلف عن نظيره الإنجليزي. هذه أكبر أربعة فخاخ صامتة للمتحدثين بالإنجليزية.",goals:["معرفة أن z = صوت TS","معرفة أن w = صوت V","معرفة أن v = صوت F في الكلمات الأصلية","معرفة أن s قبل حرف علّة = صوت Z"]},
          {type:"teach",kind:"info",nl:"z = TS",en:"z تُنطق مثل ts في cats",phonetic:"ts",example:"zehn (ten), Zeit (time), Herz (heart), tanzen (to dance)",exampleEn:"z دائمًا تُنطق مثل ts في cats أو pizza",note:"هذا يفاجئ المتحدثين بالإنجليزية.\nzehn لا تُنطق مثل zen الإنجليزية. تُنطق tsen.\nليست مثل الزاي العربية! إنها صوت TS مركّب."},
          {type:"teach",kind:"info",nl:"w = V",en:"w تُنطق مثل v في very",phonetic:"v",example:"Wasser (water), Wein (wine), wohnen (to live), wer (who)",exampleEn:"W الألمانية = V الإنجليزية. أبدًا مثل W في water.",note:"فخ شائع جدًا. Wasser تُنطق VAH-ser.\nهذا الحرف شائع جدًا في الألمانية."},
          {type:"teach",kind:"info",nl:"v = F (in native words)",en:"v عادة تُنطق مثل f في fox",phonetic:"f in native words, v in loanwords",example:"Vater (father), viel (much), Vogel (bird), Vase (vase)",exampleEn:"الكلمات الألمانية الأصلية: v = F. الكلمات المستعارة: v = V.",note:"Vater, vier, viel, von, vor كلها بصوت F.\nالكلمات المستعارة مثل Vase, Violine تحتفظ بصوت V.\nمثل حرف الفاء في العربية!"},
          {type:"teach",kind:"info",nl:"s vor Vokal = Z-Laut",en:"s قبل حرف علّة تُنطق z",phonetic:"z as in zebra",example:"sagen (to say), so (so), Sonne (sun), Seife (soap)",exampleEn:"S في بداية الكلمة قبل حرف علّة = صوت Z مجهور",note:"في نهاية الكلمة أو قبل حروف صامتة، s مهموسة مثل s الإنجليزية في sun.\nفي sp وst، الـs خاصة (انظر الدرس التالي).\nصوت Z هذا مشابه لحرف الزاي في العربية!"},
          {type:"mc",q:"'Zehn' (ten) is pronounced:",opts:["Like English zen","Like tsen with ts + en","Like English seen","Like sen with soft s"],ans:"Like tsen with ts + en",hint:"z في الألمانية دائمًا تُصدر صوت ts"},
          {type:"mc",q:"'Wasser' (water) begins with a sound like:",opts:["English W in water","English V in very","English B in base","English F in far"],ans:"English V in very",hint:"W الألمانية = صوت V الإنجليزي"},
          {type:"mc",q:"'Vater' (father) begins with a sound like:",opts:["English V in very","English F in father","English W in water","English B in boy"],ans:"English F in father",hint:"في الكلمات الألمانية الأصلية، V تُنطق F"},
          {type:"mc",q:"'Sonne' (sun) begins with s before a vowel. This s sounds like:",opts:["English S in sun (voiceless)","English Z in zebra (voiced)","English SH in shoe","English TH in the"],ans:"English Z in zebra (voiced)",hint:"S قبل حرف علّة في بداية الكلمة = صوت Z مجهور في الألمانية"},
        ]},
        {id:"de_ar_fp_s3_l3",title:"sp وst وتجمعات الحروف الصامتة",icon:"🧱",xp:15,board:true,steps:[
          {type:"intro",title:"sp وst في بداية الكلمة تُنطقان shp وsht",desc:"عندما تظهر sp أو st في بداية الكلمة أو المقطع المشدد، الـs تُنطق sh. هذه أحد أميز سمات النطق الألماني.",goals:["معرفة أن sp = shp في بداية الكلمة","معرفة أن st = sht في بداية الكلمة","التعامل مع تجمعات الحروف الصامتة الألمانية الشائعة"]},
          {type:"teach",kind:"info",nl:"sp am Wortanfang = shp",en:"sp في بداية الكلمة = shp",phonetic:"shp",example:"spielen (to play), sprechen (to speak), Sport (sport)",exampleEn:"spielen = SHPEE-len. sprechen = SHPREH-khen.",note:"في وسط الكلمة، sp تُنطق عاديًا s + p.\nفقط في بداية الكلمة أو بداية المقطع المشدد: sh + p."},
          {type:"teach",kind:"info",nl:"st am Wortanfang = sht",en:"st في بداية الكلمة = sht",phonetic:"sht",example:"stehen (to stand), Stadt (city), Stern (star), Straße (street)",exampleEn:"stehen = SHTEH-en. Stadt = SHTAHT.",note:"نفس القاعدة: فقط في بداية الكلمة أو بداية المقطع المشدد.\nالمتحدثون بالإنجليزية يقولون st، الألمان يقولون sht."},
          {type:"teach",kind:"info",nl:"Konsonantencluster",en:"تجمعات الحروف الصامتة: ادمجها كليًا",phonetic:"no inserted vowels",example:"str- in Straße, schr- in schreiben, kn- in Knie, pf- in Pferd",exampleEn:"الألمانية تسمح بتجمعات في بداية الكلمة لا تسمح بها الإنجليزية",note:"Knie (ركبة) = تُنطق KNEE مع K مسموع.\nPferd (حصان) = PFERD، كلا الـp والـf مسموعان.\nلا تُدخل حرف علّة بين الحروف المتجمعة أبدًا.\nالعربية أيضًا لديها تجمعات صامتة (مثل: استخراج)، فهذا ليس غريبًا عليك!"},
          {type:"mc",q:"'spielen' (to play) starts with sp. How is this pronounced?",opts:["SP as in English spa","SHP as in sh + p","SK as in skip","S and P spoken separately"],ans:"SHP as in sh + p",hint:"sp في بداية الكلمة = shp في الألمانية"},
          {type:"mc",q:"'Stadt' (city) starts with st. How is this pronounced?",opts:["ST as in English stop","SHT as in sh + t","SK as in skip","Just T with soft s"],ans:"SHT as in sh + t",hint:"st في بداية الكلمة = sht في الألمانية"},
          {type:"mc",q:"'Pferd' (horse) starts with pf. How do you pronounce this?",opts:["Only the F, the P is silent","Both P and F fully pronounced together","Like English F only","Like English P only"],ans:"Both P and F fully pronounced together",hint:"pf الألمانية صوت مركّب حقيقي، كلا الصوتين مهمان"},
          {type:"mc",q:"The sp/st rule applies at:",opts:["Every position in a word","Only at word start or stressed syllable start","Only at word end","Only in noun words"],ans:"Only at word start or stressed syllable start",hint:"في وسط الكلمة، sp وst تحتفظان بأصواتهما العادية"},
          {type:"tip",title:"Straße خطوة بخطوة",text:"Straße تتحلل إلى: str (sht + r) + ah + ß + e.\nالنطق الكامل: SHTRAH-seh.\nالـß هنا = SS بعد حرف علّة طويل.\nقاعدة sp/st تؤثر فقط على التجمع الافتتاحي.",deepDive:"Straße كلمة ممتازة للتدريب. تحتوي على sht وحرف علّة طويل وß كلها في كلمة واحدة. تدرّب عليها ببطء قبل محاولة قولها بسرعة."},
        ]},
      ]},

    // ── المرحلة الرابعة: قوى الإملاء ──
    {id:"de_ar_fp_s4",title:"قوى الإملاء",desc:"الأحرف الكبيرة تكشف كل اسم. التركيب يبني كلمات لا نهائية.",icon:"✏️",
      lessons:[
        {id:"de_ar_fp_s4_l1",title:"كل الأسماء بحرف كبير",icon:"🔡",xp:15,board:true,steps:[
          {type:"intro",title:"كل اسم يحصل على حرف كبير",desc:"في الألمانية، كل الأسماء تُكتب بحرف كبير، بغض النظر عن موقعها في الجملة. هذا ينطبق على كل اسم، بما في ذلك الأسماء المجردة.",goals:["معرفة أن كل الأسماء تُكتب بحرف كبير","التعرّف على الأسماء من حرفها الكبير","رؤية كيف يختلف هذا عن الإنجليزية"]},
          {type:"teach",kind:"info",nl:"Großschreibung der Nomen",en:"الأحرف الكبيرة للأسماء",phonetic:"GROHS-shry-boong dair NOH-men",example:"Der Mann kauft das Buch im Laden.\nThe man buys the book in the shop.",exampleEn:"Mann وBuch وLaden كلها بأحرف كبيرة في الألمانية.\nفي الإنجليزية، لا واحدة منها ستُكتب بحرف كبير في وسط الجملة.",note:"هذا يساعدك على تحديد الأسماء عند القراءة.\nأي كلمة بحرف كبير ليست في بداية الجملة هي اسم.\nالصفات والأفعال والظروف لا تُكتب بحرف كبير.\nالعربية ليس فيها أحرف كبيرة، لكن هذه الميزة ستساعدك كثيرًا في قراءة الألمانية!"},
          {type:"teach",kind:"info",nl:"Auch abstrakte Nomen",en:"حتى الأسماء المجردة تُكتب بحرف كبير",phonetic:"owkh ahb-STRAK-teh NOH-men",example:"Liebe (love), Freiheit (freedom), Hoffnung (hope), Glück (luck)",exampleEn:"المفاهيم المجردة لا تزال أسماء. لا تزال تُكتب بحرف كبير.",note:"الإنجليزية لا تكتب هذه الكلمات بحرف كبير. الألمانية دائمًا تفعل.\nإذا رأيت كلمة بحرف كبير في وسط الجملة، فهي اسم."},
          {type:"mc",q:"In 'Der Mann kauft ein Buch', which words are nouns?",opts:["Der and kauft","Mann and Buch","ein and kauft","Der and ein"],ans:"Mann and Buch",hint:"الكلمات بأحرف كبيرة في وسط الجملة هي أسماء في الألمانية"},
          {type:"mc",q:"How would 'love' be written mid-sentence in German?",opts:["love","LOVE","Liebe","liebe"],ans:"Liebe",hint:"كل الأسماء تُكتب بحرف كبير في الألمانية، بما في ذلك المجردة"},
          {type:"mc",q:"You see a capitalized word in the middle of a German sentence. This tells you:",opts:["It is a proper name","It is a noun","It is important or emphasized","It starts a new clause"],ans:"It is a noun",hint:"الحرف الكبير في وسط الجملة = اسم في الألمانية"},
          {type:"mc",q:"Which of these would NOT be capitalized mid-sentence in German?",opts:["Tisch (table)","schnell (quickly)","Hund (dog)","Freiheit (freedom)"],ans:"schnell (quickly)",hint:"الصفات والظروف لا تُكتب بحرف كبير، فقط الأسماء"},
          {type:"fb",s:"In German, every noun is capitalized {1} in a sentence.",a:["always"],opts:["always","never","sometimes","only at the start"],hint:"لا توجد استثناءات لقاعدة الأحرف الكبيرة للأسماء الألمانية"},
        ]},
        {id:"de_ar_fp_s4_l2",title:"الأسماء المركّبة",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"الألمانية تبني كلمات جديدة بدمج كلمات موجودة",desc:"المركّبات الألمانية تُكتب ككلمة واحدة بدون مسافات. الاسم الأخير في المركّب يحدد الجنس. هذا يخلق بعض الكلمات الطويلة الشهيرة.",goals:["معرفة أن المركّبات الألمانية كلمة واحدة","معرفة أن الاسم الأخير يحدد الجنس","قراءة المركّبات بتفكيكها"]},
          {type:"teach",kind:"info",nl:"Zusammensetzung",en:"التركيب: دمج الكلمات في واحدة",phonetic:"tsoo-ZAH-men-zet-soong",example:"Hand + Schuh = Handschuh (glove)\nFahr + Rad = Fahrrad (bicycle)\nBahn + Hof = Bahnhof (train station)",exampleEn:"كلمتان أو أكثر مدمجتان في واحدة. بدون مسافة. بدون شرطة.",note:"لفك تشفير مركّب: ابحث عن الحدود بين الأجزاء.\nHandschuh = Hand + Schuh. شيء لليد وهو حذاء. قفاز.\nالعربية أيضًا تركّب الكلمات لكن بالإضافة: باب + البيت = باب البيت.\nالألمانية تلصقها معًا كقطعة واحدة!"},
          {type:"teach",kind:"info",nl:"Das Grundwort bestimmt das Genus",en:"الاسم الرئيسي يحدد الجنس",phonetic:"dahs GROONT-vort beh-SHTIMMT dahs GAY-noos",example:"der Hof, der Bahnhof. das Rad, das Fahrrad. die Schule, die Grundschule.",exampleEn:"العنصر الأخير في المركّب يحمل الجنس للكلمة كلها.",note:"هذا مهم جدًا: der/die/das ينطبق على الاسم الأخير.\nFahrrad = das Fahrrad (لأن das Rad محايد).\nمثل المضاف إليه في العربية: جنس المضاف هو المهم!"},
          {type:"mc",q:"'Handschuh' = Hand + Schuh. If 'der Schuh' is masculine, 'der Handschuh' is:",opts:["Feminine","Neuter","Masculine","Unknown without context"],ans:"Masculine",hint:"العنصر الأخير (Schuh = der) يحدد الجنس"},
          {type:"mc",q:"'Flugzeug' = Flug + Zeug. If 'das Zeug' is neuter, 'das Flugzeug' is:",opts:["Masculine","Feminine","Neuter","Variable"],ans:"Neuter",hint:"جنس الاسم الأخير في المركّب ينطبق على الكلمة كلها"},
          {type:"mc",q:"German compound nouns are always written:",opts:["As two separate words","With a hyphen between them","As one single word","With an apostrophe between"],ans:"As one single word",hint:"لا مسافات، لا شرطات في الأسماء المركّبة الألمانية"},
          {type:"mc",q:"You see 'Hausaufgabe' (homework). To understand it, you should:",opts:["Memorize it as one opaque unit","Break it into Haus + auf + Gabe to find meaning","Ignore the parts entirely","Ask what language it is from"],ans:"Break it into Haus + auf + Gabe to find meaning",hint:"المركّبات يمكن دائمًا فك تشفيرها من أجزائها المكوّنة"},
          {type:"tip",title:"Donaudampfschifffahrtsgesellschaft",text:"مركّب شهير طويل:\nDonau + Dampf + Schiff + Fahrt + Gesellschaft\nالدانوب + بخار + سفينة + رحلة + شركة\n= شركة سفن الدانوب البخارية.",deepDive:"هذه الكلمة تتكون من 42 حرفًا. إنها اسم شركة تاريخية حقيقية. بمجرد أن تعرف نظام التركيب الألماني، يمكنك قراءة أي مركّب مهما كان طويلًا بتفكيكه عند الحدود."},
        ]},
      ]},

    // ── المرحلة الخامسة: التشديد والإيقاع ──
    {id:"de_ar_fp_s5",title:"التشديد والإيقاع",desc:"أين تضع التشديد، وكيف تتنبأ بنية المقطع بطول حرف العلّة",icon:"🎵",
      lessons:[
        {id:"de_ar_fp_s5_l1",title:"تشديد الكلمة",icon:"💬",xp:15,board:true,steps:[
          {type:"intro",title:"التشديد في الكلمات الألمانية",desc:"الكلمات الألمانية عادة تُشدَّد على المقطع الأول من الكلمة الأساسية. البادئات تؤثر على التشديد بشكل مختلف حسب كونها منفصلة أو غير منفصلة.",goals:["معرفة أن التشديد عادة يقع على المقطع الأول","معرفة أن بادئات الأفعال المنفصلة تأخذ التشديد","معرفة أن البادئات غير المنفصلة لا تأخذ التشديد"]},
          {type:"teach",kind:"info",nl:"Betonung auf der ersten Silbe",en:"التشديد على المقطع الأول",phonetic:"beh-TOH-noong owf dair AYR-sten ZIL-beh",example:"KAUfen (to buy), WOhnen (to live), SPREchen (to speak)",exampleEn:"معظم الكلمات الألمانية الأصلية تشدّد المقطع الأول من الجذر",note:"هذه القاعدة الافتراضية للمفردات الألمانية الأصلية.\nعلى عكس الإنجليزية، الألمانية نادرًا ما تشدّد مقطعًا وسطيًا.\nالعربية أيضًا لها قواعد تشديد واضحة!"},
          {type:"teach",kind:"info",nl:"Trennbare Verben: Präfix betont",en:"الأفعال المنفصلة: البادئة تأخذ التشديد",phonetic:"TREN-bah-reh FAIR-ben",example:"AUFstehen (to get up), ANrufen (to call), EINkaufen (to shop)",exampleEn:"البادئة المنفصلة = مغناطيس التشديد. AUF-stehen، وليس auf-STEhen.",note:"البادئات المنفصلة: auf, an, ein, aus, mit, vor, ab, zu, nach.\nالبادئة تنتقل إلى النهاية في الجمل الرئيسية لكنها تحتفظ دائمًا بالتشديد."},
          {type:"teach",kind:"info",nl:"Untrennbare Verben: Präfix unbetont",en:"الأفعال غير المنفصلة: البادئة بدون تشديد",phonetic:"oon-TREN-bah-reh FAIR-ben",example:"verSTEhen (to understand), beKOMmen (to receive), erKLÄren (to explain)",exampleEn:"البادئة غير المنفصلة = بدون تشديد. التشديد يقع على الجذر.",note:"البادئات غير المنفصلة: ver-, be-, ge-, er-, ent-, emp-, miss-, zer-.\nهذه لا تنفصل أبدًا ولا تُشدَّد أبدًا."},
          {type:"mc",q:"'kaufen' (to buy). Where is the stress?",opts:["On -fen","On kau-","On both syllables equally","It depends on the sentence"],ans:"On kau-",hint:"الكلمات الألمانية الأصلية تشدّد المقطع الأول من الجذر"},
          {type:"mc",q:"'aufstehen' (to get up) is a separable verb. Where is the stress?",opts:["On -ste-","On -hen","On AUF-","Equally distributed"],ans:"On AUF-",hint:"البادئات المنفصلة دائمًا تجذب التشديد"},
          {type:"mc",q:"'verstehen' (to understand) is an inseparable verb. Where is the stress?",opts:["On VER-","On -ste-","On -hen","On ver-ste-"],ans:"On -ste-",hint:"البادئات غير المنفصلة بدون تشديد. شدّد مقطع الجذر."},
          {type:"mc",q:"Which prefix group is always stressed?",opts:["Inseparable prefixes (ver-, be-, ge-)","Separable prefixes (auf-, an-, ein-)","All prefixes equally","No prefixes are stressed"],ans:"Separable prefixes (auf-, an-, ein-)",hint:"منفصلة = مشدّدة. غير منفصلة = بدون تشديد."},
        ]},
        {id:"de_ar_fp_s5_l2",title:"طول حرف العلّة وبنية المقطع",icon:"📐",xp:15,board:true,steps:[
          {type:"intro",title:"المقاطع المفتوحة لها حروف علّة طويلة، والمغلقة قصيرة",desc:"طول حرف العلّة الألماني غالبًا يتبع بنية المقطع. المقطع المفتوح (ينتهي بحرف علّة) له حرف علّة طويل. المقطع المغلق (ينتهي بحرف صامت) له حرف علّة قصير.",goals:["تحديد المقاطع المفتوحة مقابل المغلقة","التنبؤ بطول حرف العلّة من بنية المقطع","معرفة العلامات الصريحة: حرف علّة مزدوج، H، وie"]},
          {type:"teach",kind:"info",nl:"Offene Silbe = langer Vokal",en:"مقطع مفتوح = حرف علّة طويل",phonetic:"OH-fen-eh ZIL-beh",example:"sa-gen (to say): sa- is open → long a.\nna-me (name): na- is open → long a.",exampleEn:"المقطع المفتوح ينتهي بحرف علّة. حرف العلّة طويل.",note:"المقطع المفتوح: ينتهي بحرف علّة.\nلا حرف صامت يغلقه، فحرف العلّة يمتد.\nمثل المقاطع المفتوحة في العربية: كَ-تَ-بَ."},
          {type:"teach",kind:"info",nl:"Geschlossene Silbe = kurzer Vokal",en:"مقطع مغلق = حرف علّة قصير",phonetic:"geh-SHLOH-seh-neh ZIL-beh",example:"Mann (man): closed → short a.\nBett (bed): closed → short e.",exampleEn:"المقطع المغلق ينتهي بحرف صامت. حرف العلّة قصير.",note:"المقطع المغلق: حرف صامت يتبع حرف العلّة في نفس المقطع.\nحرف علّة واحد + حرف صامت = حرف علّة قصير."},
          {type:"teach",kind:"info",nl:"Explizite Längenzeichen",en:"علامات الطول الصريحة",phonetic:"eks-PLEE-tsee-teh LENG-en-tsei-khen",example:"1. Double vowel: Saal (hall), See (lake), Boot (boat).\n2. Vowel + H: Bahn (track), Wahl (choice), Uhr (clock).\n3. ie always long: viel (much), Bier (beer), Spiel (game).",exampleEn:"هذه العلامات تتجاوز القاعدة الافتراضية وتفرض حرف علّة طويل.",note:"هذه العلامات الثلاث دائمًا تعني طويل: aa/ee/oo، حرف علّة+H، ie.\nتظهر في المقاطع المفتوحة والمغلقة على حد سواء."},
          {type:"mc",q:"In 'sa-gen', the syllable sa- ends in a vowel. The vowel is:",opts:["Short","Long","Unstressed","Silent"],ans:"Long",hint:"مقطع مفتوح = حرف علّة طويل"},
          {type:"mc",q:"In 'Mann', the vowel a is followed by a consonant in the same syllable. The vowel is:",opts:["Long","Short","Doubled","An umlaut"],ans:"Short",hint:"مقطع مغلق = حرف علّة قصير"},
          {type:"mc",q:"'Saal' (hall) has aa. This explicit length marker means the vowel is:",opts:["Short","Long","Ambiguous","Context-dependent"],ans:"Long",hint:"حروف العلّة المزدوجة دائمًا تشير إلى حرف علّة طويل"},
          {type:"mc",q:"'Bahn' (track, path) has a vowel followed by H. The a is:",opts:["Short","Long","Silent","An umlaut"],ans:"Long",hint:"حرف علّة + H هو أحد العلامات الثلاث لحرف العلّة الطويل"},
          {type:"mc",q:"'ie' in 'viel' (much) is always:",opts:["Short","Long","Variable","An umlaut"],ans:"Long",hint:"ie دائمًا صوت ee طويل في الألمانية، لا استثناءات"},
        ]},
      ]},

    // ── المرحلة السادسة: معاينة القواعد ──
    {id:"de_ar_fp_s6",title:"معاينة القواعد",desc:"ثلاثة أجناس (der/die/das) وقاعدة ترتيب الفعل الثاني: عمودا القواعد الألمانية",icon:"🏗️",
      lessons:[
        {id:"de_ar_fp_s6_l1",title:"ثلاثة أجناس: der وdie وdas",icon:"🎭",xp:20,board:true,steps:[
          {type:"intro",title:"كل اسم ألماني له جنس",desc:"الألمانية لها ثلاثة أجناس نحوية: مذكر (der)، مؤنث (die)، ومحايد (das). الجنس يؤثر على أدوات التعريف والصفات والضمائر. يجب تعلّمه مع كل اسم. الألوان: der = أزرق، die = مرجاني، das = ذهبي.",goals:["معرفة الأجناس الثلاثة: der وdie وdas","معرفة أن الجنس يؤثر على الأدوات والصفات","قبول أن الجنس يجب حفظه مع كل اسم"]},
          {type:"teach",kind:"info",nl:"der (maskulin)",en:"أداة التعريف المذكرة",phonetic:"dair",example:"A: Ist das ein Hund?\nB: Ja, das ist der Hund.",exampleEn:"أ: هل هذا كلب؟\nب: نعم، هذا هو الكلب.",note:"der يشير للأسماء المذكرة. اللون: أزرق.\nبعض الأنماط تساعد: نهايات -er غالبًا مذكرة.\nلكن كثير من الأسماء لها جنس غير متوقع. تعلّمه مع كل كلمة.\nالعربية أيضًا لها مذكر ومؤنث! الألمانية تضيف المحايد."},
          {type:"teach",kind:"info",nl:"die (feminin)",en:"أداة التعريف المؤنثة",phonetic:"dee",example:"A: Was ist das?\nB: Das ist die Stadt.",exampleEn:"أ: ما هذا؟\nب: هذه هي المدينة.",note:"die تشير للأسماء المؤنثة. اللون: مرجاني.\nأنماط: نهايات -ung, -heit, -keit, -schaft, -tion دائمًا تقريبًا مؤنثة.\ndie أيضًا أداة تعريف الجمع لكل الأجناس."},
          {type:"teach",kind:"info",nl:"das (neutrum)",en:"أداة التعريف المحايدة",phonetic:"dahs",example:"A: Was liest du?\nB: Ich lese das Buch.",exampleEn:"أ: ماذا تقرأ؟\nب: أقرأ الكتاب.",note:"das تشير للأسماء المحايدة. اللون: ذهبي.\nأنماط: تصغيرات -chen و-lein دائمًا محايدة.\ndas Mädchen (الفتاة) محايدة رغم أن المعنى أنثوي.\nالمحايد لا يوجد في العربية، وهذا الجنس الثالث يحتاج اهتمامًا خاصًا!"},
          {type:"tip",title:"تعلّم der/die/das مع كل اسم",text:"لا تتعلّم اسمًا بدون أداته أبدًا.\nليس فقط: Hund. دائمًا: der Hund.\nليس فقط: Sprache. دائمًا: die Sprache.\nالأداة جزء من المفردة.\nفي العربية نقول: الكلب (مذكر). نفس المبدأ في الألمانية!",deepDive:"هذه أهم عادة في تعلّم الألمانية. كل كتاب وقاموس ومعلّم سيخبرك بنفس الشيء. إذا تدرّبت على الجنس من اليوم الأول، يصبح تلقائيًا. إذا تجاهلته وحاولت إضافته لاحقًا، يأخذ ضعف الوقت."},
          {type:"mc",q:"How many grammatical genders does German have?",opts:["One: no gender distinction","Two: masculine and feminine","Three: masculine, feminine, neuter","Four: masculine, feminine, neuter, common"],ans:"Three: masculine, feminine, neuter",hint:"der وdie وdas كل منها يمثل جنسًا مختلفًا"},
          {type:"mc",q:"Nouns with the diminutive ending -chen are always:",opts:["Masculine","Feminine","Neuter","Variable by meaning"],ans:"Neuter",hint:"das Mädchen محايدة رغم الإشارة لفتاة"},
          {type:"mc",q:"What is the plural article for ALL German nouns, regardless of gender?",opts:["der","die","das","ein"],ans:"die",hint:"die هي المؤنثة المفردة وأيضًا أداة الجمع لكل الأجناس"},
          {type:"mc",q:"Best practice when learning a new German noun:",opts:["Learn the word alone first, article later","Learn the article together with the noun from day one","Only learn the article for feminine nouns","Guess the article from context"],ans:"Learn the article together with the noun from day one",hint:"الأداة جزء من المفردة. لا تفصلهما أبدًا."},
        ]},
        {id:"de_ar_fp_s6_l2",title:"ترتيب الفعل الثاني (V2)",icon:"📐",xp:20,board:true,steps:[
          {type:"intro",title:"الفعل دائمًا في المرتبة الثانية في الجمل الرئيسية",desc:"الألمانية لها قاعدة صارمة: في الجملة الرئيسية، الفعل يأتي في المرتبة الثانية. المرتبة الأولى يمكن أن تكون الفاعل، أو تعبير زمني، أو مفعول به، أو ظرف. في الجمل الفرعية، الفعل يذهب إلى النهاية.",goals:["معرفة قاعدة V2 للجمل الرئيسية","رؤية كيف يعمل التقديم والتأخير عندما يغادر الفاعل المرتبة الأولى","معرفة أن الأفعال تذهب إلى النهاية في الجمل الفرعية"]},
          {type:"teach",kind:"info",nl:"V2-Stellung im Hauptsatz",en:"قاعدة V2 في الجمل الرئيسية",phonetic:"FOW-tsvy SHTEL-oong im HOWPT-zahts",example:"Ich kaufe Brot.\nHeute kaufe ich Brot.\nBrot kaufe ich heute.",exampleEn:"الفعل دائمًا في المرتبة الثانية. الفاعل يمكن أن يتحرك حوله.",note:"المرتبة الأولى: أي شيء يمكن أن يأتي هنا.\nالمرتبة الثانية: دائمًا الفعل.\nعندما يغادر الفاعل المرتبة الأولى، الفاعل والفعل يتبادلان.\nالعربية مرنة في ترتيب الجملة أيضًا (فعلية واسمية)، لكن الألمانية صارمة في وضع الفعل ثانيًا!"},
          {type:"teach",kind:"info",nl:"Verbendstellung im Nebensatz",en:"الفعل يذهب إلى النهاية في الجمل الفرعية",phonetic:"FAIR-bent-shtel-oong im NAY-ben-zahts",example:"Ich weiß, dass er Brot kauft.\n(I know that he buys bread.)",exampleEn:"في الجملة الفرعية (بعد weil, dass, wenn, ob...)، الفعل آخرًا.",note:"هذا أحدّ تناقض مع ترتيب الكلمات الإنجليزي.\nجملة رئيسية: الفعل ثانيًا. جملة فرعية: الفعل آخرًا.\nهذه القاعدة مطلقة في الألمانية الفصحى.\nهذا مشابه لبعض تراكيب العربية حيث الفعل يأتي في النهاية!"},
          {type:"teach",kind:"info",nl:"Modalverben: Infinitiv am Ende",en:"الأفعال المساعدة ترسل المصدر إلى النهاية",phonetic:"moh-DAHL-fair-ben",example:"Ich kann Deutsch sprechen.\nEr muss heute arbeiten.",exampleEn:"الفعل المساعد في المرتبة الثانية. مصدر الفعل الرئيسي يذهب إلى النهاية.",note:"الأفعال المساعدة (können, müssen, wollen, dürfen, sollen, mögen) دائمًا ترسل الفعل الرئيسي إلى النهاية.\nهذا يخلق بنية قوس الجملة الألمانية الكلاسيكية."},
          {type:"mc",q:"In 'Heute kaufe ich Brot', what is in position 1?",opts:["ich (the subject)","kaufe (the verb)","Heute (a time expression)","Brot (the object)"],ans:"Heute (a time expression)",hint:"أي عنصر يمكن أن يشغل المرتبة الأولى في الألمانية"},
          {type:"mc",q:"In 'Heute kaufe ich Brot', what is in position 2?",opts:["ich","Heute","Brot","kaufe"],ans:"kaufe",hint:"قاعدة V2: الفعل دائمًا في المرتبة الثانية في الجمل الرئيسية"},
          {type:"mc",q:"'Ich weiß, dass er Brot kauft.' Where is the verb kauft in the subclause?",opts:["Position 1","Position 2","At the end","Wherever sounds natural"],ans:"At the end",hint:"الجمل الفرعية (dass, weil, wenn, ob...) ترسل الفعل إلى النهاية تمامًا"},
          {type:"mc",q:"'Ich kann Deutsch sprechen.' The modal kann is in position 2. Where is sprechen?",opts:["Position 1","Position 2","Position 3","At the end of the clause"],ans:"At the end of the clause",hint:"الأفعال المساعدة ترسل المصدر التابع إلى نهاية الجملة"},
          {type:"tip",title:"قوس الجملة الألمانية",text:"الألمانية تخلق قوسًا حول وسط الجملة.\nالقوس الأيسر: الفعل المصرّف (المرتبة الثانية).\nالقوس الأيمن: المصدر أو فعل الجملة الفرعية (النهاية).\nكل شيء آخر يجلس بينهما.\nمثال: Ich habe heute Brot gekauft.",deepDive:"بنية القوس هذه تُسمى Satzklammer (قوس الجملة). إنها أساسية في الألمانية وتفسّر لماذا الجمل الألمانية الطويلة تبدو مختلفة عن الإنجليزية. بمجرد أن تتوقع القوس، قراءة الألمانية تصبح أسهل بكثير."},
        ]},
      ]},
  ]},
  ar:{name:"Arabic Script Play",icon:"🇸🇾",blueprint:"arabic",stages:[
    // ════════════════ STAGE 1: RTL & Script Basics ════════════════
    {id:"ar_fp_s1",title:"Stage 1: Script Basics",desc:"How Arabic text works: direction, shapes, and dots",icon:"→←",
      lessons:[
        {id:"ar_fp_s1_l1",title:"Right to Left",icon:"←",xp:15,steps:[
          {type:"intro",title:"Arabic reads right to left",desc:"Unlike English, Arabic text starts on the right side and flows to the left. Numbers, however, are still read left to right.",goals:["Understand RTL direction","Know that numbers go left to right"]},
          {type:"mc",q:"Which direction does Arabic text flow?",opts:["Left to right","Right to left","Top to bottom","Bottom to top"],ans:"Right to left"},
          {type:"mc",q:"You open an Arabic book. Where does the first word appear?",opts:["Top left","Top right","Bottom left","Center"],ans:"Top right"},
          {type:"mc",q:"Arabic numbers are read:",opts:["Right to left like text","Left to right like English","Backwards","In any direction"],ans:"Left to right like English"},
        ]},
        {id:"ar_fp_s1_l2",title:"Letters Change Shape",icon:"✍️",xp:15,steps:[
          {type:"intro",title:"Arabic is cursive",desc:"Every Arabic letter connects to the next (except 6 special letters). The same letter looks different depending on where it appears in a word: beginning, middle, or end.",goals:["Know letters change shape by position","Know there are 4 possible forms"]},
          {type:"mc",q:"Arabic letters in a word are:",opts:["Separate like English print","Always connected (cursive)","Only sometimes connected","Written as circles"],ans:"Always connected (cursive)"},
          {type:"mc",q:"How many shape forms can an Arabic letter have?",opts:["1","2","4","26"],ans:"4"},
          {type:"mc",q:"The 4 forms of a letter depend on:",opts:["The vowel after it","Its position in the word","How fast you write","The letter before it only"],ans:"Its position in the word"},
          {type:"mc",q:"Arabic cursive means that most letters:",opts:["Float above the line","Connect to neighboring letters","Are written separately","Only connect on the left"],ans:"Connect to neighboring letters"},
        ]},
        {id:"ar_fp_s1_l3",title:"Dots Matter",icon:"•",xp:15,steps:[
          {type:"intro",title:"Dots are part of the letter",desc:"Many Arabic letters share the same base shape. Dots above or below tell you WHICH letter it is. Changing the dots changes the letter entirely.",goals:["Dots = letter identity","Same shape + different dots = different letter"]},
          {type:"mc",q:"Two Arabic letters have the same base shape. What makes them different?",opts:["Size","Dots above or below","Color","Thickness"],ans:"Dots above or below"},
          {type:"mc",q:"If you remove a dot from a letter, you get:",opts:["The same letter","A different letter entirely","A vowel","Nothing changes"],ans:"A different letter entirely"},
          {type:"mc",q:"Dots in Arabic letters are:",opts:["Optional decoration","Part of the letter identity","Only for beginners","Added later"],ans:"Part of the letter identity"},
        ]},
        {id:"ar_fp_s1_l4",title:"The 6 Breakers",icon:"✂️",xp:20,steps:[
          {type:"intro",title:"Six letters that break the chain",desc:"Most Arabic letters connect on both sides. But 6 letters (called breakers) ONLY connect to the letter before them  -  never to the letter after. The next letter has to restart.",goals:["Know there are 6 breaker letters","Understand they only connect backwards"]},
          {type:"mc",q:"Most Arabic letters connect on:",opts:["Only the right","Only the left","Both sides","Neither side"],ans:"Both sides"},
          {type:"mc",q:"How many 'breaker' letters exist in Arabic?",opts:["2","4","6","10"],ans:"6"},
          {type:"mc",q:"A breaker letter connects to:",opts:["Both neighbors","Only the letter before it","Only the letter after it","No letters at all"],ans:"Only the letter before it"},
          {type:"mc",q:"After a breaker letter, the next letter:",opts:["Connects normally","Restarts from scratch","Disappears","Gets a dot added"],ans:"Restarts from scratch"},
        ]},
    ]},
    // ════════════════ STAGE 2: First Letters ════════════════
    {id:"ar_fp_s2",title:"Stage 2: First Letters",desc:"Learn your first Arabic letters — one at a time, sound first.",icon:"ب",lessons:[
        {id:"ar_fp_s2_l1",title:"The Teeth Family",icon:"ب",xp:15,steps:[
          {type:"intro",title:"Three shapes, one base",desc:"These three letters all look the same  -  only the dots are different. Learn the sound each one makes.",goals:["Learn the sounds ba, ta, tha","Tell them apart by their dots"]},
          {type:"teach",kind:"letter",nl:"ب",en:"ba",phonetic:"ba",example:"Like 'b' in 'boy'",exampleEn:"1 dot below the teeth shape",note:"This is one of the most common Arabic letters.",forms:[{pos:"Isolated",glyph:"ب"},{pos:"Initial",glyph:"بـ"},{pos:"Medial",glyph:"ـبـ"},{pos:"Final",glyph:"ـب"}]},
          {type:"teach",kind:"letter",nl:"ت",en:"ta",phonetic:"ta",example:"Like 't' in 'tea'",exampleEn:"2 dots above the teeth shape",note:"Same shape as ba, but with 2 dots above.",forms:[{pos:"Isolated",glyph:"ت"},{pos:"Initial",glyph:"تـ"},{pos:"Medial",glyph:"ـتـ"},{pos:"Final",glyph:"ـت"}]},
          {type:"teach",kind:"letter",nl:"ث",en:"tha",phonetic:"tha",example:"Like 'th' in 'think'",exampleEn:"3 dots above the teeth shape",note:"Same shape again, but with 3 dots above.",forms:[{pos:"Isolated",glyph:"ث"},{pos:"Initial",glyph:"ثـ"},{pos:"Medial",glyph:"ـثـ"},{pos:"Final",glyph:"ـث"}]},
          {type:"mc",q:"What sound does this letter make?  ب",opts:["ba","ta","tha","na"],ans:"ba"},
          {type:"mc",q:"What sound does this letter make?  ت",opts:["tha","ba","ta","sa"],ans:"ta"},
          {type:"mc",q:"What sound does this letter make?  ث",opts:["ta","tha","ba","sha"],ans:"tha"},
          {type:"mc",q:"These three letters all share:",opts:["The same base shape","The same dots","The same sound","Nothing"],ans:"The same base shape"},
        ]},
        {id:"ar_fp_s2_l2",title:"Three New Shapes",icon:"ن",xp:15,steps:[
          {type:"intro",title:"A bowl, a tail, and a tall line",desc:"These three letters each have a unique shape. One of them is special  -  it breaks the chain.",goals:["Learn the sounds nun, ya, alif","Know that alif is a breaker"]},
          {type:"teach",kind:"letter",nl:"ن",en:"nun",phonetic:"n",example:"Like 'n' in 'noon'",exampleEn:"Bowl shape with 1 dot above",note:"Don't confuse with ba  -  nun's dot is ABOVE a bowl, ba's dot is BELOW a teeth shape.",forms:[{pos:"Isolated",glyph:"ن"},{pos:"Initial",glyph:"نـ"},{pos:"Medial",glyph:"ـنـ"},{pos:"Final",glyph:"ـن"}]},
          {type:"teach",kind:"letter",nl:"ي",en:"ya",phonetic:"y",example:"Like 'y' in 'yes'",exampleEn:"2 dots below",note:"Also used as the long 'ee' vowel sound.",forms:[{pos:"Isolated",glyph:"ي"},{pos:"Initial",glyph:"يـ"},{pos:"Medial",glyph:"ـيـ"},{pos:"Final",glyph:"ـي"}]},
          {type:"teach",kind:"letter",nl:"ا",en:"alif",phonetic:"aa / glottal stop",example:"A tall vertical line",exampleEn:"No dots  -  this is a BREAKER letter",note:"Alif never connects forward. It is one of the 6 breaker letters.",forms:[{pos:"Isolated",glyph:"ا"},{pos:"Final",glyph:"ـا"}],formNote:"Only 2 forms  -  breakers never connect to the next letter."},
          {type:"mc",q:"What sound does this letter make?  ن",opts:["n","b","y","m"],ans:"n"},
          {type:"mc",q:"What sound does this letter make?  ي",opts:["n","w","y","l"],ans:"y"},
          {type:"mc",q:"This letter is a breaker:  ا",opts:["True","False"],ans:"True"},
          {type:"mc",q:"How many forms does alif have?",opts:["2","3","4","1"],ans:"2"},
        ]},
        {id:"ar_fp_s2_l3",title:"Lam",icon:"ل",xp:15,steps:[
          {type:"intro",title:"The most common connector",desc:"Lam appears in almost every Arabic sentence. It is part of the word for 'the'  -  the most frequent word in Arabic.",goals:["Learn the sound lam","See all 4 forms","Know it appears in 'the'"]},
          {type:"teach",kind:"letter",nl:"ل",en:"lam",phonetic:"l",example:"Like 'l' in 'lamp'",exampleEn:"Tall curved stroke  -  connects both sides",note:"Part of ال (al = 'the'). You will see this letter everywhere.",forms:[{pos:"Isolated",glyph:"ل"},{pos:"Initial",glyph:"لـ"},{pos:"Medial",glyph:"ـلـ"},{pos:"Final",glyph:"ـل"}]},
          {type:"mc",q:"What sound does this letter make?  ل",opts:["l","m","n","r"],ans:"l"},
          {type:"mc",q:"This letter connects on:",opts:["Both sides","Only the right","Only the left","Neither side"],ans:"Both sides"},
          {type:"mc",q:"Which common Arabic word contains lam?",opts:["ال (the)","في (in)","من (from)","لا (no)"],ans:"ال (the)"},
        ]},
        {id:"ar_fp_s2_l4",title:"Mim",icon:"م",xp:15,steps:[
          {type:"intro",title:"The round loop",desc:"Mim is a small round shape. Like lam, it connects on both sides and appears very frequently.",goals:["Learn the sound mim","See all 4 forms","Distinguish mim from nun"]},
          {type:"teach",kind:"letter",nl:"م",en:"mim",phonetic:"m",example:"Like 'm' in 'moon'",exampleEn:"Small round loop  -  connects both sides",note:"Don't confuse with nun. Mim has no dots. Nun has 1 dot above.",forms:[{pos:"Isolated",glyph:"م"},{pos:"Initial",glyph:"مـ"},{pos:"Medial",glyph:"ـمـ"},{pos:"Final",glyph:"ـم"}]},
          {type:"mc",q:"What sound does this letter make?  م",opts:["m","n","l","b"],ans:"m"},
          {type:"mc",q:"How is mim different from nun?",opts:["Mim has no dots","Mim has 1 dot","Mim has 2 dots","They are identical"],ans:"Mim has no dots"},
          {type:"mc",q:"This letter connects on:",opts:["Both sides","Only the right","Only the left","Neither side"],ans:"Both sides"},
        ]},
    ]},
    // ════════════════ STAGE 3: More Letters ════════════════
    {id:"ar_fp_s3",title:"Stage 3: More Letters",desc:"Learn the remaining Arabic letters — breakers, families, and unique sounds.",icon:"د",lessons:[
        {id:"ar_fp_s3_l1",title:"The 6 Breakers",icon:"د",xp:20,steps:[
          {type:"intro",title:"Letters that break the chain",desc:"You already know alif and waw are breakers. Here are the other four. All 6 breakers only connect to the letter before them  -  never forward.",goals:["Meet all 6 breakers","Learn dal, dhal, ra, zay, waw","Know breakers only have 2 forms"]},
          {type:"teach",kind:"letter",nl:"د",en:"dal",phonetic:"d",example:"Like 'd' in 'door'",exampleEn:"Small angular hook  -  no dots",note:"Breaker: only connects to the letter before it. 2 forms only.",forms:[{pos:"Isolated",glyph:"د"},{pos:"Final",glyph:"ـد"}],formNote:"Breakers only have isolated and final forms."},
          {type:"teach",kind:"letter",nl:"ذ",en:"dhal",phonetic:"dh",example:"Like 'th' in 'this'",exampleEn:"Same hook as dal + 1 dot above",note:"Same shape as dal, but with a dot above. Also a breaker.",forms:[{pos:"Isolated",glyph:"ذ"},{pos:"Final",glyph:"ـذ"}]},
          {type:"teach",kind:"letter",nl:"ر",en:"ra",phonetic:"r",example:"Rolled 'r' sound",exampleEn:"Small downward swoop  -  no dots",note:"Breaker. Different shape from dal  -  ra swoops down smoothly.",forms:[{pos:"Isolated",glyph:"ر"},{pos:"Final",glyph:"ـر"}]},
          {type:"teach",kind:"letter",nl:"ز",en:"zay",phonetic:"z",example:"Like 'z' in 'zoo'",exampleEn:"Same swoop as ra + 1 dot above",note:"Same shape as ra, but with a dot above. Also a breaker.",forms:[{pos:"Isolated",glyph:"ز"},{pos:"Final",glyph:"ـز"}]},
          {type:"teach",kind:"letter",nl:"و",en:"waw",phonetic:"w / oo",example:"Like 'w' in 'wow' or long 'oo'",exampleEn:"Round hook shape",note:"Breaker. Also doubles as the long vowel 'oo'.",forms:[{pos:"Isolated",glyph:"و"},{pos:"Final",glyph:"ـو"}]},
          {type:"mc",q:"What sound does this letter make?  د",opts:["d","r","z","dh"],ans:"d"},
          {type:"mc",q:"What sound does this letter make?  ر",opts:["d","z","r","dh"],ans:"r"},
          {type:"mc",q:"What sound does this letter make?  و",opts:["w / oo","r","z","l"],ans:"w / oo"},
          {type:"mc",q:"How many breaker letters are there in total?",opts:["4","5","6","8"],ans:"6"},
          {type:"mc",q:"Breaker letters only have how many forms?",opts:["1","2","3","4"],ans:"2"},
          {type:"mc",q:"Adding a dot above د changes the sound to:",opts:["z","r","dh","w"],ans:"dh"},
        ]},
        {id:"ar_fp_s3_l2",title:"Sin, Shin, and Kaf",icon:"س",xp:15,steps:[
          {type:"intro",title:"Teeth rows and a new connector",desc:"Sin and shin look like a row of 3 small teeth. Kaf is a new shape that connects on both sides.",goals:["Learn sin, shin, kaf","Tell sin and shin apart by dots"]},
          {type:"teach",kind:"letter",nl:"س",en:"sin",phonetic:"s",example:"Like 's' in 'sun'",exampleEn:"3 small teeth in a row  -  no dots",note:"Looks like a zigzag or 3 small bumps.",forms:[{pos:"Isolated",glyph:"س"},{pos:"Initial",glyph:"سـ"},{pos:"Medial",glyph:"ـسـ"},{pos:"Final",glyph:"ـس"}]},
          {type:"teach",kind:"letter",nl:"ش",en:"shin",phonetic:"sh",example:"Like 'sh' in 'ship'",exampleEn:"Same 3 teeth + 3 dots above",note:"Same base as sin but with 3 dots above.",forms:[{pos:"Isolated",glyph:"ش"},{pos:"Initial",glyph:"شـ"},{pos:"Medial",glyph:"ـشـ"},{pos:"Final",glyph:"ـش"}]},
          {type:"teach",kind:"letter",nl:"ك",en:"kaf",phonetic:"k",example:"Like 'k' in 'kite'",exampleEn:"Connects both sides",note:"A tall letter with a small stroke inside.",forms:[{pos:"Isolated",glyph:"ك"},{pos:"Initial",glyph:"كـ"},{pos:"Medial",glyph:"ـكـ"},{pos:"Final",glyph:"ـك"}]},
          {type:"mc",q:"What sound does this letter make?  س",opts:["s","sh","z","th"],ans:"s"},
          {type:"mc",q:"What sound does this letter make?  ش",opts:["s","sh","ch","th"],ans:"sh"},
          {type:"mc",q:"What sound does this letter make?  ك",opts:["q","g","k","kh"],ans:"k"},
          {type:"mc",q:"Sin and shin share the same base shape. How do you tell them apart?",opts:["Shin has 3 dots above","Sin has dots","They look identical","Different base shape"],ans:"Shin has 3 dots above"},
        ]},
        {id:"ar_fp_s3_l3",title:"The Bowl Family",icon:"ج",xp:15,steps:[
          {type:"intro",title:"Three letters, one bowl shape",desc:"Jim, breathy ha, and kha all share a bowl shape. Only the dots differ  -  just like the teeth family.",goals:["Learn jim, ha, kha","Tell them apart by dot placement"]},
          {type:"teach",kind:"letter",nl:"ج",en:"jim",phonetic:"j",example:"Like 'j' in 'jump'",exampleEn:"Bowl shape + 1 dot below",note:"The dot is BELOW the bowl.",forms:[{pos:"Isolated",glyph:"ج"},{pos:"Initial",glyph:"جـ"},{pos:"Medial",glyph:"ـجـ"},{pos:"Final",glyph:"ـج"}]},
          {type:"teach",kind:"letter",nl:"ح",en:"breathy ha",phonetic:"breathy h",example:"A breathy 'h' from the throat  -  no English equivalent",exampleEn:"Bowl shape  -  NO dots",note:"The only bowl-family letter with no dots at all.",forms:[{pos:"Isolated",glyph:"ح"},{pos:"Initial",glyph:"حـ"},{pos:"Medial",glyph:"ـحـ"},{pos:"Final",glyph:"ـح"}]},
          {type:"teach",kind:"letter",nl:"خ",en:"kha",phonetic:"kh",example:"Like the 'ch' in Scottish 'loch'",exampleEn:"Bowl shape + 1 dot above",note:"Same bowl as breathy ha, but with a dot ABOVE.",forms:[{pos:"Isolated",glyph:"خ"},{pos:"Initial",glyph:"خـ"},{pos:"Medial",glyph:"ـخـ"},{pos:"Final",glyph:"ـخ"}]},
          {type:"mc",q:"What sound does this letter make?  ج",opts:["j","breathy h","kh","g"],ans:"j"},
          {type:"mc",q:"What sound does this letter make?  ح",opts:["j","breathy h","kh","regular h"],ans:"breathy h"},
          {type:"mc",q:"What sound does this letter make?  خ",opts:["j","breathy h","kh","k"],ans:"kh"},
        ]},
        {id:"ar_fp_s3_l4",title:"The Heavy Letters",icon:"ص",xp:20,steps:[
          {type:"intro",title:"Four emphatic sounds unique to Arabic",desc:"These letters have heavier, deeper sounds than their light counterparts. Two pairs: flat base and tall loop.",goals:["Learn sad, dad, heavy ta, heavy dha","Know these are the emphatic letters"]},
          {type:"teach",kind:"letter",nl:"ص",en:"to be sad",phonetic:"heavy s",example:"A heavier, deeper 's' sound",exampleEn:"Heavy flat base  -  no dots",note:"The heavy version of sin.",forms:[{pos:"Isolated",glyph:"ص"},{pos:"Initial",glyph:"صـ"},{pos:"Medial",glyph:"ـصـ"},{pos:"Final",glyph:"ـص"}]},
          {type:"teach",kind:"letter",nl:"ض",en:"dad",phonetic:"heavy d",example:"A heavier, deeper 'd' sound",exampleEn:"Same flat base + 1 dot above",note:"Arabic is sometimes called 'the language of dad' because this sound is unique to it.",forms:[{pos:"Isolated",glyph:"ض"},{pos:"Initial",glyph:"ضـ"},{pos:"Medial",glyph:"ـضـ"},{pos:"Final",glyph:"ـض"}]},
          {type:"teach",kind:"letter",nl:"ط",en:"heavy ta",phonetic:"heavy t",example:"A heavier, deeper 't' sound",exampleEn:"Tall loop shape  -  no dots",note:"The heavy version of regular ta.",forms:[{pos:"Isolated",glyph:"ط"},{pos:"Initial",glyph:"طـ"},{pos:"Medial",glyph:"ـطـ"},{pos:"Final",glyph:"ـط"}]},
          {type:"teach",kind:"letter",nl:"ظ",en:"heavy dha",phonetic:"heavy dh",example:"A heavier, deeper 'th' sound",exampleEn:"Same tall loop + 1 dot above",note:"The heavy version of dhal.",forms:[{pos:"Isolated",glyph:"ظ"},{pos:"Initial",glyph:"ظـ"},{pos:"Medial",glyph:"ـظـ"},{pos:"Final",glyph:"ـظ"}]},
          {type:"mc",q:"What sound does this letter make?  ص",opts:["heavy s","heavy d","heavy t","heavy dh"],ans:"heavy s"},
          {type:"mc",q:"What sound does this letter make?  ض",opts:["heavy s","heavy d","heavy t","heavy dh"],ans:"heavy d"},
          {type:"mc",q:"What sound does this letter make?  ط",opts:["heavy s","heavy d","heavy t","heavy dh"],ans:"heavy t"},
          {type:"mc",q:"What sound does this letter make?  ظ",opts:["heavy s","heavy d","heavy t","heavy dh"],ans:"heavy dh"},
          {type:"mc",q:"Which letter is unique to Arabic?",opts:["sad","dad","heavy ta","heavy dha"],ans:"dad"},
        ]},
        {id:"ar_fp_s3_l5",title:"Ha, Ayn, and Ghayn",icon:"ع",xp:15,steps:[
          {type:"intro",title:"The shape-shifter and the throat letters",desc:"Ha changes shape dramatically. Ayn and ghayn are throat sounds  -  ayn has no English equivalent.",goals:["Learn ha, ayn, ghayn","Know ayn is a throat squeeze"]},
          {type:"teach",kind:"letter",nl:"ه",en:"ha",phonetic:"h",example:"Like 'h' in 'hat'",exampleEn:"Changes shape a lot in different positions",note:"Not the same as breathy ha. This is a regular 'h' but its shape changes a lot.",forms:[{pos:"Isolated",glyph:"ه"},{pos:"Initial",glyph:"هـ"},{pos:"Medial",glyph:"ـهـ"},{pos:"Final",glyph:"ـه"}]},
          {type:"teach",kind:"letter",nl:"ع",en:"ayn",phonetic:"throat squeeze",example:"A squeezed throat sound  -  no English equivalent",exampleEn:"Open loop shape  -  no dots",note:"One of the most important Arabic sounds. Made by tightening the throat.",forms:[{pos:"Isolated",glyph:"ع"},{pos:"Initial",glyph:"عـ"},{pos:"Medial",glyph:"ـعـ"},{pos:"Final",glyph:"ـع"}]},
          {type:"teach",kind:"letter",nl:"غ",en:"ghayn",phonetic:"gh",example:"Like gargling  -  a guttural 'g'",exampleEn:"Same loop as ayn + 1 dot above",note:"Same shape as ayn but with a dot above.",forms:[{pos:"Isolated",glyph:"غ"},{pos:"Initial",glyph:"غـ"},{pos:"Medial",glyph:"ـغـ"},{pos:"Final",glyph:"ـغ"}]},
          {type:"mc",q:"What sound does this letter make?  ه",opts:["h","breathy h","kh","ayn"],ans:"h"},
          {type:"mc",q:"What sound does this letter make?  ع",opts:["gh","h","throat squeeze","kh"],ans:"throat squeeze"},
          {type:"mc",q:"What sound does this letter make?  غ",opts:["gh","throat squeeze","h","kh"],ans:"gh"},
          {type:"mc",q:"Ayn and ghayn share the same shape. How do you tell them apart?",opts:["Ghayn has 1 dot above","Ayn has 1 dot","Different shapes","Ghayn is bigger"],ans:"Ghayn has 1 dot above"},
        ]},
        {id:"ar_fp_s3_l6",title:"Fa and Qaf",icon:"ف",xp:15,steps:[
          {type:"intro",title:"The cup pair  -  last two letters!",desc:"Fa and qaf both have a cup shape. Fa has 1 dot, qaf has 2. These are the last two letters!",goals:["Learn fa and qaf","Complete all 28 letters"]},
          {type:"teach",kind:"letter",nl:"ف",en:"fa",phonetic:"f",example:"Like 'f' in 'fish'",exampleEn:"Cup shape + 1 dot above",note:"A familiar sound with a simple shape.",forms:[{pos:"Isolated",glyph:"ف"},{pos:"Initial",glyph:"فـ"},{pos:"Medial",glyph:"ـفـ"},{pos:"Final",glyph:"ـف"}]},
          {type:"teach",kind:"letter",nl:"ق",en:"qaf",phonetic:"deep q",example:"A deep 'k' sound from the back of the throat",exampleEn:"Cup shape + 2 dots above",note:"Deeper than kaf. Made further back in the throat.",forms:[{pos:"Isolated",glyph:"ق"},{pos:"Initial",glyph:"قـ"},{pos:"Medial",glyph:"ـقـ"},{pos:"Final",glyph:"ـق"}]},
          {type:"mc",q:"What sound does this letter make?  ف",opts:["f","q","k","v"],ans:"f"},
          {type:"mc",q:"What sound does this letter make?  ق",opts:["k","f","deep q","g"],ans:"deep q"},
          {type:"mc",q:"Fa and qaf share the same shape. How do you tell them apart?",opts:["Qaf has 2 dots, fa has 1","Fa has 2 dots","Different shapes","Qaf is bigger"],ans:"Qaf has 2 dots, fa has 1"},
          {type:"mc",q:"You now know all 28 Arabic letters! How many are breakers?",opts:["4","5","6","8"],ans:"6"},
        ]},
    ]},

    // ════════════════ STAGE 4: Vowel Marks (Harakat) ════════════════
    {id:"ar_fp_s4",title:"Stage 4: Vowel Marks",desc:"The short vowels, silence mark, and doubling",icon:"◌َ",
      lessons:[
        {id:"ar_fp_s4_l1",title:"Three Short Vowels",icon:"َ",xp:15,steps:[
          {type:"intro",title:"Arabic short vowels are small marks",desc:"Arabic mainly writes consonants. Short vowels are shown as tiny marks above or below letters. There are 3: fatha (a), damma (u), kasra (i).",goals:["Know 3 short vowel marks","Know they go above or below consonants"]},
          {type:"mc",q:"Short vowels in Arabic are written as:",opts:["Full-size letters","Small marks on consonants","Separate words","Colors"],ans:"Small marks on consonants"},
          {type:"mc",q:"How many short vowel marks does Arabic have?",opts:["2","3","5","7"],ans:"3"},
          {type:"mc",q:"The short vowel mark for the 'a' sound is placed:",opts:["Below the letter","Above the letter","Next to the letter","Inside the letter"],ans:"Above the letter"},
          {type:"mc",q:"The short vowel mark for the 'i' sound is placed:",opts:["Above the letter","Below the letter","To the right","To the left"],ans:"Below the letter"},
          {type:"mc",q:"The short vowel mark for the 'u' sound is placed:",opts:["Below the letter","To the left","Above the letter","Inside the letter"],ans:"Above the letter"},
        ]},
        {id:"ar_fp_s4_l2",title:"Sukun & Shadda",icon:"ْ",xp:15,steps:[
          {type:"intro",title:"Silence and doubling",desc:"Sukun (a small circle above) means NO vowel after this consonant. Shadda (a small w-shape above) means the consonant is DOUBLED  -  say it twice.",goals:["Know sukun = no vowel","Know shadda = double the consonant"]},
          {type:"mc",q:"A small circle above a letter means:",opts:["Long vowel","No vowel after it","The letter is doubled","The letter is silent"],ans:"No vowel after it"},
          {type:"mc",q:"A small w-shape (shadda) above a letter means:",opts:["The letter is silent","Skip this letter","Say this consonant twice","It is a question mark"],ans:"Say this consonant twice"},
          {type:"mc",q:"If you see sukun on ب, it means:",opts:["Say 'ba'","Say 'b'  -  no vowel","Say 'bu'","Skip the letter"],ans:"Say 'b'  -  no vowel"},
          {type:"mc",q:"If you see shadda on ت, it means:",opts:["Silent t","Say 't' once","Say 'tt'  -  double the t","Say 'ta'"],ans:"Say 'tt'  -  double the t"},
        ]},
        {id:"ar_fp_s4_l3",title:"Tanwin & Long Vowels",icon:"ً",xp:15,steps:[
          {type:"intro",title:"The -n endings and long vowels",desc:"Tanwin adds an 'n' sound to a vowel ending: -an, -un, -in. Long vowels use letters (ا for aa, و for oo, ي for ee) instead of marks.",goals:["Know tanwin = add n","Know long vowels use letters"]},
          {type:"mc",q:"Tanwin turns a short vowel into:",opts:["A long vowel","A vowel + n sound","A silent letter","A double vowel"],ans:"A vowel + n sound"},
          {type:"mc",q:"The three tanwin endings are:",opts:["-an, -un, -in","-a, -u, -i","-am, -um, -im","-al, -ul, -il"],ans:"-an, -un, -in"},
          {type:"mc",q:"Long vowel 'aa' uses which letter?",opts:["و","ي","ا","ه"],ans:"ا"},
          {type:"mc",q:"Long vowel 'oo' uses which letter?",opts:["ا","ي","و","ه"],ans:"و"},
          {type:"mc",q:"Long vowel 'ee' uses which letter?",opts:["ا","و","ي","ه"],ans:"ي"},
        ]},
        {id:"ar_fp_s4_l4",title:"Reading Syllables",icon:"📖",xp:20,steps:[
          {type:"intro",title:"Combining consonants and vowels",desc:"An open syllable is: consonant + vowel mark (like بَ = ba). A closed syllable adds a sukun consonant at the end (like بَتْ = bat).",goals:["Read open syllables","Read closed syllables"]},
          {type:"mc",q:"An open syllable in Arabic is:",opts:["Two consonants","A consonant + vowel mark","Three vowels","A vowel alone"],ans:"A consonant + vowel mark"},
          {type:"mc",q:"A closed syllable ends with:",opts:["A vowel mark","A consonant with sukun","Another vowel","Nothing"],ans:"A consonant with sukun"},
          {type:"mc",q:"What type of syllable is: consonant + fatha?",opts:["Closed","Open","Neither","Both"],ans:"Open"},
          {type:"mc",q:"What type of syllable is: consonant + fatha + consonant with sukun?",opts:["Open","Closed","Neither","Double"],ans:"Closed"},
        ]},
    ]},

    // ════════════════ STAGE 5: Real-Text Readiness ════════════════
    {id:"ar_fp_s5",title:"Stage 5: Real Text",desc:"Prefixes, special combos, look-alikes, and your first words",icon:"📰",
      lessons:[
        {id:"ar_fp_s5_l1",title:"The Word 'The': ال",icon:"ال",xp:15,steps:[
          {type:"intro",title:"The most common prefix",desc:"ال (alif + lam) means 'the' in Arabic. It attaches to the front of nouns. You will see it everywhere in Arabic text.",goals:["Recognize ال as 'the'","Know it attaches to nouns"]},
          {type:"mc",q:"ال at the start of a word means:",opts:["A question","A name","The","A verb"],ans:"The"},
          {type:"mc",q:"ال is made of which two letters?",opts:["ا + ن","ا + ل","ل + م","ا + م"],ans:"ا + ل"},
          {type:"mc",q:"Where does ال appear in a word?",opts:["At the end","In the middle","At the beginning","Anywhere"],ans:"At the beginning"},
        ]},
        {id:"ar_fp_s5_l2",title:"Lam-Alif Combo & Digits",icon:"لا",xp:15,steps:[
          {type:"intro",title:"A mandatory merge and Arabic digits",desc:"When ل and ا appear together, they ALWAYS merge into لا (laa). Also: Arabic uses its own digit shapes ٠١٢٣٤٥٦٧٨٩.",goals:["Recognize لا as one combined shape","Recognize Arabic-Indic digits"]},
          {type:"mc",q:"When ل and ا appear next to each other, they:",opts:["Stay separate","Always merge into one shape","Disappear","Switch places"],ans:"Always merge into one shape"},
          {type:"mc",q:"لا is pronounced:",opts:["la","laa","al","li"],ans:"laa"},
          {type:"mc",q:"Arabic uses its own shapes for:",opts:["Letters only","Numbers (digits)","Punctuation only","Nothing special"],ans:"Numbers (digits)"},
          {type:"mc",q:"Arabic-Indic digits read:",opts:["Right to left like text","Left to right like Western numbers","In any direction","Backwards"],ans:"Left to right like Western numbers"},
        ]},
        {id:"ar_fp_s5_l3",title:"Look-alikes: ة/ه and ى/ي",icon:"👁️",xp:15,steps:[
          {type:"intro",title:"Letters that look almost identical",desc:"ة and ه look alike but ة has 2 dots. ى and ي look alike but ي has 2 dots below. Mixing them up changes the meaning.",goals:["Distinguish ة from ه","Distinguish ى from ي"]},
          {type:"mc",q:"ة differs from ه by:",opts:["Size","2 dots above","Color","Position only"],ans:"2 dots above"},
          {type:"mc",q:"ة appears most often:",opts:["At the start of words","In the middle","At the end of words","Anywhere"],ans:"At the end of words"},
          {type:"mc",q:"ى differs from ي by:",opts:["ى has 2 dots below","ي has 2 dots below but ى has none","They are identical","Size"],ans:"ي has 2 dots below but ى has none"},
          {type:"mc",q:"If you see dots below at the end of a word, it is:",opts:["ى (alif maqsuura)","ي (ya)","ة (ta marbuuta)","ه (ha)"],ans:"ي (ya)"},
        ]},
        {id:"ar_fp_s5_l4",title:"Your First Words",icon:"🎓",xp:25,steps:[
          {type:"intro",title:"Reading real Arabic words",desc:"You now know all 28 letters, all vowel marks, the prefix ال, and common look-alikes. Time to put it all together with the shortest Arabic words.",goals:["Read short Arabic words","Apply everything you learned"]},
          {type:"mc",q:"في (fee) means:",opts:["From","In","What","No"],ans:"In"},
          {type:"mc",q:"من (min) means:",opts:["In","What","From","And"],ans:"From"},
          {type:"mc",q:"ما (maa) means:",opts:["In","From","And","What"],ans:"What"},
          {type:"mc",q:"لا (laa) means:",opts:["Yes","No / Not","The","And"],ans:"No / Not"},
          {type:"mc",q:"و (wa) means:",opts:["Or","But","And","The"],ans:"And"},
          {type:"mc",q:"You can now decode Arabic script! How many letters does the Arabic alphabet have?",opts:["22","26","28","30"],ans:"28"},
        ]},
    ]},
  ]},
  ja:{name:"Learn Kana & Kanji",icon:"🇯🇵",blueprint:"kana",stages:[
// ── PHASE 0: Orientation (3 scripts overview) ──
  {id:"ja_fp_p0",title:"Phase 0: Three Scripts",desc:"What Japanese writing is and why there are three scripts",icon:"\u{1F4DD}",
    lessons:[
      {id:"ja_fp_p0_l1",title:"The Three Scripts",icon:"\u{1F4DD}",xp:15,board:true,steps:[
        {type:"intro",title:"Welcome to Japanese Writing!",desc:"Japanese uses THREE writing systems, all at the same time. This might seem overwhelming, but each one has a clear job. You will learn them one at a time, starting with the most important one.",goals:["Know the names of the 3 scripts","Understand what each script is used for","Know which one you will learn first"]},
        {type:"teach",kind:"info",nl:"\u3072\u3089\u304C\u306A",en:"Hiragana",phonetic:"hee-rah-gah-nah",example:"\u3042\u3044\u3046\u3048\u304A",exampleEn:"a i u e o (the five hiragana vowels)",note:"Hiragana is the core script. It is used for native Japanese words, grammar particles, and verb endings. It has 46 basic characters. This is what you will learn first."},
        {type:"teach",kind:"info",nl:"\u30AB\u30BF\u30AB\u30CA",en:"Katakana",phonetic:"kah-tah-kah-nah",example:"\u30A2\u30A4\u30A6\u30A8\u30AA",exampleEn:"a i u e o (the five katakana vowels)",note:"Katakana is used for foreign loanwords, emphasis, and sound effects. It also has 46 basic characters. The sounds are exactly the same as hiragana, just with different shapes. You will learn it after hiragana."},
        {type:"teach",kind:"info",nl:"\u6F22\u5B57",en:"Kanji",phonetic:"kahn-jee",example:"\u5C71 \u5DDD \u65E5 \u6708",exampleEn:"mountain, river, sun, moon",note:"Kanji are Chinese characters adopted into Japanese. Each one carries meaning and has multiple possible readings. There are about 2,000 in daily use. You will build kanji awareness gradually after mastering hiragana and katakana."},
        {type:"mc",q:"Which script is used for native Japanese words and grammar?",opts:["Katakana","Kanji","Hiragana","Romaji"],ans:"Hiragana",hint:"This is the core script with 46 characters"},
        {type:"mc",q:"Which script is used for foreign loanwords like 'coffee' or 'computer'?",opts:["Hiragana","Katakana","Kanji","All three equally"],ans:"Katakana",hint:"Foreign words borrowed into Japanese use this script"},
        {type:"mc",q:"How many basic hiragana characters are there?",opts:["26","100","2,000","46"],ans:"46",hint:"It is more than English letters but far fewer than kanji"},
        {type:"tip",title:"All Three in One Sentence",text:"A real Japanese sentence often mixes all three scripts.\nFor example: \u6771\u4EAC\u30BF\u30EF\u30FC\u306F\u8D64\u3044 (Tokyo Tower is red)\n\u2022 \u6771\u4EAC = kanji (Tokyo)\n\u2022 \u30BF\u30EF\u30FC = katakana (Tower, a loanword)\n\u2022 \u306F\u8D64\u3044 = hiragana + kanji (is red)\nDon't worry about reading this yet. Just notice the visual mix.",icon:"\u{1F4A1}"},
      ]},
    ]},
  // ── PHASE 1: Hiragana Vowels (5 vowels) ──
  {id:"ja_fp_p1",title:"Phase 1: Hiragana Vowels",desc:"The 5 pure vowels that form the foundation of every hiragana character",icon:"\u3042",
    lessons:[
      {id:"ja_fp_p1_l1",title:"The Five Vowels",icon:"\u3042",xp:20,board:true,steps:[
        {type:"intro",title:"Your First Five Characters",desc:"Every hiragana character is built from a consonant plus one of these 5 vowels. Learn these first and you unlock the entire system. Japanese vowels are pure and short, never sliding into another sound like English vowels often do.",goals:["Read and recognize all 5 hiragana vowels","Know the correct pronunciation for each","Understand that Japanese vowels are pure, not diphthongs"]},
        {type:"teach",kind:"letter",nl:"\u3042",en:"A",img:"\u{1F4DD}",phonetic:"ah (as in father)",example:"\u3042\u304D (aki) = autumn",exampleEn:"The first character of the Japanese syllabary",note:"This is the very first hiragana. It has a crossbar and a swooping tail. Keep the sound short and open: 'ah', not 'ay'."},
        {type:"teach",kind:"letter",nl:"\u3044",en:"I",img:"\u{1F4DD}",phonetic:"ee (as in meet)",example:"\u3044\u306C (inu) = dog",exampleEn:"Two curved strokes side by side",note:"Two separate strokes that curve slightly. The sound is a crisp 'ee', never 'eye' or 'ih'. Keep it short and pure."},
        {type:"teach",kind:"letter",nl:"\u3046",en:"U",img:"\u{1F4DD}",phonetic:"oo (as in soon)",example:"\u3046\u307F (umi) = sea",exampleEn:"A single stroke with a small curve",note:"A compact character. The sound is 'oo' but with lips barely rounded. Much less lip rounding than English 'oo'. Keep it light."},
        {type:"mc",q:"Which hiragana makes the 'ah' sound?",opts:["\u3044","\u3046","\u3042","\u3048"],ans:"\u3042",hint:"It is the first character of the syllabary with a swooping tail"},
        {type:"mc",q:"Which hiragana makes the 'ee' sound?",opts:["\u3042","\u3046","\u304A","\u3044"],ans:"\u3044",hint:"Two curved strokes standing side by side"},
        {type:"teach",kind:"letter",nl:"\u3048",en:"E",img:"\u{1F4DD}",phonetic:"eh (as in bed)",example:"\u3048\u304D (eki) = train station",exampleEn:"A character with horizontal and vertical strokes",note:"The sound is a clean 'eh', like in 'bed'. Never 'ee' and never a long 'ay'. Pure and short."},
        {type:"teach",kind:"letter",nl:"\u304A",en:"O",img:"\u{1F4DD}",phonetic:"oh (as in go)",example:"\u304A\u304B\u3042\u3055\u3093 (okaasan) = mother",exampleEn:"A character with a cross and a swooping stroke",note:"The sound is a pure 'oh', without the 'w' glide that English speakers often add. Say 'oh' and stop. Do not let it slide into 'ow'."},
        {type:"mc",q:"Which hiragana makes the 'oh' sound?",opts:["\u3042","\u3048","\u304A","\u3046"],ans:"\u304A",hint:"The last of the five vowels, with a cross and a swoop"},
        {type:"mc",q:"Which hiragana makes the 'eh' sound?",opts:["\u3044","\u304A","\u3042","\u3048"],ans:"\u3048",hint:"The fourth vowel, sounds like the vowel in 'bed'"},
        {type:"mc",q:"What is special about Japanese vowels compared to English?",opts:["They are always long","They slide into other sounds","They are pure and short, with no glide","They change depending on the word"],ans:"They are pure and short, with no glide",hint:"English vowels often slide, but Japanese vowels stay constant"},
        {type:"tip",title:"The Vowel Foundation",text:"These 5 vowels are the backbone of Japanese.\nEvery single hiragana character is built from a consonant plus one of these vowels.\n\u2022 \u3042 (a), \u3044 (i), \u3046 (u), \u3048 (e), \u304A (o)\nMaster these and the rest of hiragana becomes a pattern.",icon:"\u{1F511}"},
      ]},
    ]},
  // ── PHASE 2: Hiragana K-S-T-N Rows (2 lessons) ──
  {id:"ja_fp_p2",title:"Phase 2: K-S-T-N Rows",desc:"Four consonant rows, each combining with the 5 vowels to make 20 new characters",icon:"\u304B",
    lessons:[
      // Lesson 1: K-row and S-row
      {id:"ja_fp_p2_l1",title:"K-row and S-row",icon:"\u304B",xp:20,board:true,steps:[
        {type:"intro",title:"Your First Consonant Rows",desc:"Now you add consonants to the vowels. The K-row adds a 'k' sound before each vowel. The S-row adds an 's' sound. One character in the S-row has a surprising pronunciation.",goals:["Read the 5 K-row characters","Read the 5 S-row characters","Know that \u3057 is 'shi', not 'si'"]},
        {type:"teach",kind:"letter",nl:"\u304B",en:"KA",img:"\u{1F4DD}",phonetic:"kah",example:"\u304B\u3055 (kasa) = umbrella",exampleEn:"K + A = KA, the first character of the K-row",note:"Looks like it has a cross with a sweeping stroke. The 'k' sound is clean, not aspirated like English 'k' in 'kite'."},
        {type:"teach",kind:"letter",nl:"\u304D",en:"KI",img:"\u{1F4DD}",phonetic:"kee",example:"\u304D\u3082\u306E (kimono) = kimono",exampleEn:"K + I = KI, the second character of the K-row",note:"Three horizontal-ish strokes. Keep the 'ee' pure and the 'k' clean."},
        {type:"teach",kind:"letter",nl:"\u304F",en:"KU",img:"\u{1F4DD}",phonetic:"koo",example:"\u304F\u3082 (kumo) = cloud",exampleEn:"K + U = KU, a simple character with two strokes",note:"One of the simplest hiragana to write. Just two strokes forming an angle. Remember: lips barely rounded for 'u'."},
        {type:"teach",kind:"letter",nl:"\u3051",en:"KE",img:"\u{1F4DD}",phonetic:"keh",example:"\u3051\u3080\u308A (kemuri) = smoke",exampleEn:"K + E = KE, the fourth character of the K-row",note:"Has a vertical line with branching strokes. The 'e' is a clean 'eh' sound."},
        {type:"teach",kind:"letter",nl:"\u3053",en:"KO",img:"\u{1F4DD}",phonetic:"koh",example:"\u3053\u3053 (koko) = here",exampleEn:"K + O = KO, two horizontal strokes",note:"Two simple horizontal strokes, one above the other. Remember: pure 'oh', no glide."},
        {type:"mc",q:"Read this character: \u304B",opts:["sa","ka","ta","na"],ans:"ka",hint:"This is the first character of the K-row"},
        {type:"mc",q:"Read this character: \u3053",opts:["ko","ku","ke","ki"],ans:"ko",hint:"Two simple horizontal strokes stacked"},
        {type:"teach",kind:"letter",nl:"\u3055",en:"SA",img:"\u{1F4DD}",phonetic:"sah",example:"\u3055\u304F\u3089 (sakura) = cherry blossom",exampleEn:"S + A = SA, the first character of the S-row",note:"Has a clean 's' sound, like English 's' in 'sun'. Three strokes curving together."},
        {type:"teach",kind:"letter",nl:"\u3057",en:"SHI",img:"\u{1F4DD}",phonetic:"shee (NOT see)",example:"\u3057\u308D (shiro) = white",exampleEn:"S + I = SHI, a common trap for beginners",note:"This is 'shi', NOT 'si'. This is the most important exception in the S-row. The character looks like a swooping curve. Always say 'shee'."},
        {type:"teach",kind:"letter",nl:"\u3059",en:"SU",img:"\u{1F4DD}",phonetic:"soo",example:"\u3059\u3057 (sushi) = sushi",exampleEn:"S + U = SU, a looping character",note:"A vertical stroke with a loop at the bottom. Clean 's' plus light 'oo'."},
        {type:"teach",kind:"letter",nl:"\u305B",en:"SE",img:"\u{1F4DD}",phonetic:"seh",example:"\u305B\u304B\u3044 (sekai) = world",exampleEn:"S + E = SE, with angular strokes",note:"Clean 's' plus 'eh'. Straightforward pronunciation, no surprises here."},
        {type:"teach",kind:"letter",nl:"\u305D",en:"SO",img:"\u{1F4DD}",phonetic:"soh",example:"\u305D\u3089 (sora) = sky",exampleEn:"S + O = SO, a curving character",note:"Clean 's' plus pure 'oh'. A flowing shape with a curve."},
        {type:"mc",q:"Read this character: \u3057",opts:["si","chi","su","shi"],ans:"shi",hint:"This S-row character has a special pronunciation"},
        {type:"mc",q:"Read this character: \u3059",opts:["sa","su","so","shi"],ans:"su",hint:"The S-row character with a loop at the bottom"},
        {type:"mc",q:"Read this character: \u304D",opts:["ki","shi","chi","ni"],ans:"ki",hint:"This K-row character has three horizontal strokes"},
        {type:"tip",title:"\u3057 is 'shi', Not 'si'",text:"The S-row mostly follows the pattern: sa, si, su, se, so.\nBut \u3057 breaks the pattern. It is 'shi', not 'si'.\nThis is not optional or regional. It is always 'shi'.\nWatch for two more exceptions like this in the T-row.",icon:"\u26A0\uFE0F"},
      ]},
      // Lesson 2: T-row and N-row
      {id:"ja_fp_p2_l2",title:"T-row and N-row",icon:"\u305F",xp:20,board:true,steps:[
        {type:"intro",title:"Two More Rows, Two More Traps",desc:"The T-row has TWO pronunciation exceptions. The N-row is perfectly regular. After this lesson you will know 30 hiragana characters.",goals:["Read the 5 T-row characters","Know that \u3061 is 'chi' and \u3064 is 'tsu'","Read the 5 N-row characters"]},
        {type:"teach",kind:"letter",nl:"\u305F",en:"TA",img:"\u{1F4DD}",phonetic:"tah",example:"\u305F\u307E\u3054 (tamago) = egg",exampleEn:"T + A = TA, the first character of the T-row",note:"Clean 't' plus 'ah'. The 't' is dental, with the tongue touching behind the upper teeth. Not the same tongue position as English 't'."},
        {type:"teach",kind:"letter",nl:"\u3061",en:"CHI",img:"\u{1F4DD}",phonetic:"chee (NOT tee)",example:"\u3061\u304B\u3089 (chikara) = power",exampleEn:"T + I = CHI, the first T-row exception",note:"This is 'chi', NOT 'ti'. Just like \u3057 is 'shi' instead of 'si', this character breaks the T-row pattern. Always 'chee', never 'tee'."},
        {type:"teach",kind:"letter",nl:"\u3064",en:"TSU",img:"\u{1F4DD}",phonetic:"tsoo (NOT too)",example:"\u3064\u304D (tsuki) = moon",exampleEn:"T + U = TSU, the second T-row exception",note:"This is 'tsu', NOT 'tu'. The 'ts' sound does not exist at the start of English words, but think of 'cats' and you will hear it. Practice: cats-oo."},
        {type:"teach",kind:"letter",nl:"\u3066",en:"TE",img:"\u{1F4DD}",phonetic:"teh",example:"\u3066\u304C\u307F (tegami) = letter",exampleEn:"T + E = TE, back to regular pronunciation",note:"Clean dental 't' plus 'eh'. No surprises here. Back to the regular pattern."},
        {type:"teach",kind:"letter",nl:"\u3068",en:"TO",img:"\u{1F4DD}",phonetic:"toh",example:"\u3068\u3082\u3060\u3061 (tomodachi) = friend",exampleEn:"T + O = TO, the last of the T-row",note:"Clean dental 't' plus pure 'oh'. Regular pronunciation."},
        {type:"mc",q:"Read this character: \u3061",opts:["ti","chi","shi","tsu"],ans:"chi",hint:"This T-row character has an unexpected pronunciation with a 'ch' sound"},
        {type:"mc",q:"Read this character: \u3064",opts:["tu","su","tsu","chu"],ans:"tsu",hint:"This T-row character starts with a sound found in the English word 'cats'"},
        {type:"mc",q:"Read this character: \u305F",opts:["ta","chi","tsu","na"],ans:"ta",hint:"The first character of the T-row, regular pronunciation"},
        {type:"teach",kind:"letter",nl:"\u306A",en:"NA",img:"\u{1F4DD}",phonetic:"nah",example:"\u306A\u3064 (natsu) = summer",exampleEn:"N + A = NA, the first character of the N-row",note:"The N-row is perfectly regular. No exceptions, no traps. Clean 'n' plus each vowel."},
        {type:"teach",kind:"letter",nl:"\u306B",en:"NI",img:"\u{1F4DD}",phonetic:"nee",example:"\u306B\u307B\u3093 (nihon) = Japan",exampleEn:"N + I = NI, used in the word for Japan",note:"Clean 'n' plus 'ee'. Appears in one of the most important words you will learn."},
        {type:"teach",kind:"letter",nl:"\u306C",en:"NU",img:"\u{1F4DD}",phonetic:"noo",example:"\u3044\u306C (inu) = dog",exampleEn:"N + U = NU, a looping character",note:"A character with a distinctive loop. Clean 'n' plus light 'oo'."},
        {type:"teach",kind:"letter",nl:"\u306D",en:"NE",img:"\u{1F4DD}",phonetic:"neh",example:"\u306D\u3053 (neko) = cat",exampleEn:"N + E = NE, used in the word for cat",note:"Clean 'n' plus 'eh'. Appears in another common word you will learn early."},
        {type:"teach",kind:"letter",nl:"\u306E",en:"NO",img:"\u{1F4DD}",phonetic:"noh",example:"\u306E\u308A (nori) = seaweed",exampleEn:"N + O = NO, a simple looping character",note:"One of the most recognizable hiragana. A simple spiral shape. Also used as the possessive particle (like English 'of' or apostrophe-s)."},
        {type:"mc",q:"Read this character: \u306D",opts:["ne","na","nu","no"],ans:"ne",hint:"The N-row character that appears in the word for cat"},
        {type:"mc",q:"Read this character: \u306E",opts:["nu","no","na","ni"],ans:"no",hint:"A simple spiral shape, also used as a possessive particle"},
        {type:"mc",q:"Which two T-row characters have irregular pronunciations?",opts:["\u305F and \u3066","\u3066 and \u3068","\u305F and \u3068","\u3061 and \u3064"],ans:"\u3061 and \u3064",hint:"One is 'chi' and the other is 'tsu'"},
        {type:"tip",title:"Three Pronunciation Traps So Far",text:"Remember these three exceptions. They never change:\n\u2022 \u3057 = shi (NOT si)\n\u2022 \u3061 = chi (NOT ti)\n\u2022 \u3064 = tsu (NOT tu)\nEverything else in the rows you have learned so far is perfectly regular.",icon:"\u26A0\uFE0F"},
      ]},
    ]},
  // ── PHASE 3: Hiragana H-M-Y-R-W-N Rows (2 lessons) ──
  {id:"ja_fp_p3",title:"Phase 3: H-M-Y-R-W-N Rows",desc:"The remaining hiragana rows, completing all 46 basic characters",icon:"\u306F",
    lessons:[
      // Lesson 1: H-row and M-row
      {id:"ja_fp_p3_l1",title:"H-row and M-row",icon:"\u306F",xp:20,board:true,steps:[
        {type:"intro",title:"H-row Has a Surprise",desc:"The H-row has one pronunciation exception and one very important grammar note. The M-row is perfectly regular. After this lesson you are past the halfway mark.",goals:["Read the 5 H-row characters","Know that \u3075 is 'fu', not 'hu'","Know that \u306F as a particle is read 'wa'","Read the 5 M-row characters"]},
        {type:"teach",kind:"letter",nl:"\u306F",en:"HA",img:"\u{1F4DD}",phonetic:"hah",example:"\u306F\u306A (hana) = flower",exampleEn:"H + A = HA, the first character of the H-row",note:"Clean 'h' plus 'ah'. Important: when \u306F is used as a grammar particle (topic marker), it is pronounced 'wa', not 'ha'. You will encounter this constantly. As a regular syllable in a word, it is always 'ha'."},
        {type:"teach",kind:"letter",nl:"\u3072",en:"HI",img:"\u{1F4DD}",phonetic:"hee",example:"\u3072\u3068 (hito) = person",exampleEn:"H + I = HI, a flowing character",note:"Clean 'h' plus 'ee'. A graceful character with a long flowing stroke."},
        {type:"teach",kind:"letter",nl:"\u3075",en:"FU",img:"\u{1F4DD}",phonetic:"foo (between f and h)",example:"\u3075\u3058 (fuji) = wisteria, also Mt. Fuji",exampleEn:"H + U = FU, not HU. A unique Japanese sound.",note:"This is 'fu', NOT 'hu'. But it is not exactly the English 'f' either. The Japanese 'f' is made by blowing air between both lips, not by biting the lower lip. It is softer, somewhere between 'f' and 'h'."},
        {type:"teach",kind:"letter",nl:"\u3078",en:"HE",img:"\u{1F4DD}",phonetic:"heh",example:"\u3078\u3084 (heya) = room",exampleEn:"H + E = HE, a simple angular character",note:"Clean 'h' plus 'eh'. One of the simplest hiragana to recognize: just a single angled stroke like a mountain peak. Note: when used as the direction particle (meaning 'toward'), it is pronounced 'e', not 'he'."},
        {type:"teach",kind:"letter",nl:"\u307B",en:"HO",img:"\u{1F4DD}",phonetic:"hoh",example:"\u307B\u3057 (hoshi) = star",exampleEn:"H + O = HO, a character with several strokes",note:"Clean 'h' plus pure 'oh'. A more complex character with multiple strokes."},
        {type:"mc",q:"Read this character: \u3075",opts:["hu","fu","ku","pu"],ans:"fu",hint:"This H-row character has a unique sound between 'f' and 'h'"},
        {type:"mc",q:"When \u306F is used as a topic-marking particle, how is it pronounced?",opts:["ha","ba","pa","wa"],ans:"wa",hint:"As a particle it changes pronunciation completely"},
        {type:"mc",q:"Read this character: \u307B",opts:["ho","ha","hi","he"],ans:"ho",hint:"The last character of the H-row, with multiple strokes"},
        {type:"teach",kind:"letter",nl:"\u307E",en:"MA",img:"\u{1F4DD}",phonetic:"mah",example:"\u307E\u3069 (mado) = window",exampleEn:"M + A = MA, the first character of the M-row",note:"The M-row is perfectly regular. No exceptions, no traps. Clean 'm' plus each vowel. This character has a slightly complex shape with a long horizontal stroke."},
        {type:"teach",kind:"letter",nl:"\u307F",en:"MI",img:"\u{1F4DD}",phonetic:"mee",example:"\u307F\u305A (mizu) = water",exampleEn:"M + I = MI, a compact looping character",note:"Clean 'm' plus 'ee'. A compact character with distinctive loops."},
        {type:"teach",kind:"letter",nl:"\u3080",en:"MU",img:"\u{1F4DD}",phonetic:"moo",example:"\u3080\u3057 (mushi) = insect",exampleEn:"M + U = MU, a character with a swooping tail",note:"Clean 'm' plus light 'oo'. Has a recognizable swooping tail at the end."},
        {type:"teach",kind:"letter",nl:"\u3081",en:"ME",img:"\u{1F4DD}",phonetic:"meh",example:"\u3081 (me) = eye",exampleEn:"M + E = ME, a flowing two-stroke character",note:"Clean 'm' plus 'eh'. A flowing character. The word for 'eye' is just this one character."},
        {type:"teach",kind:"letter",nl:"\u3082",en:"MO",img:"\u{1F4DD}",phonetic:"moh",example:"\u3082\u3082 (momo) = peach",exampleEn:"M + O = MO, a character with horizontal strokes",note:"Clean 'm' plus pure 'oh'. Also used as the particle meaning 'also' or 'too'."},
        {type:"mc",q:"Read this character: \u307F",opts:["mi","mu","me","ma"],ans:"mi",hint:"The M-row character with distinctive loops"},
        {type:"mc",q:"Read this character: \u3082",opts:["mu","ma","me","mo"],ans:"mo",hint:"The last M-row character, also used as a particle meaning 'also'"},
        {type:"mc",q:"Read this character: \u3078",opts:["he","ho","ha","fu"],ans:"he",hint:"The simple angular character shaped like a mountain peak"},
        {type:"tip",title:"Particle Pronunciation Changes",text:"Two H-row characters change pronunciation when used as particles:\n\u2022 \u306F = 'wa' (not 'ha') as the topic particle\n\u2022 \u3078 = 'e' (not 'he') as the direction particle\nAs regular syllables in words, they keep their normal sounds.\nYou will see these particles constantly once you start reading.",icon:"\u{1F4A1}"},
      ]},
      // Lesson 2: Y-row, R-row, W-row, and ん
      {id:"ja_fp_p3_l2",title:"Y-R-W Rows and \u3093",icon:"\u3084",xp:25,board:true,steps:[
        {type:"intro",title:"The Final Rows",desc:"The Y-row has only 3 characters. The R-row has 5 but with a unique sound. The W-row has only 2. And \u3093 stands alone as the only consonant without a vowel. After this lesson you know all 46 basic hiragana.",goals:["Read the 3 Y-row characters","Read the 5 R-row characters","Read the 2 W-row characters","Know that \u3093 is the only standalone consonant"]},
        {type:"teach",kind:"letter",nl:"\u3084",en:"YA",img:"\u{1F4DD}",phonetic:"yah",example:"\u3084\u307E (yama) = mountain",exampleEn:"Y + A = YA, the first of only 3 Y-row characters",note:"The Y-row is short: only ya, yu, yo. There is no 'yi' or 'ye' in modern hiragana."},
        {type:"teach",kind:"letter",nl:"\u3086",en:"YU",img:"\u{1F4DD}",phonetic:"yoo",example:"\u3086\u304D (yuki) = snow",exampleEn:"Y + U = YU, a compact two-stroke character",note:"Clean 'y' plus 'oo'. A compact character used in many common words."},
        {type:"teach",kind:"letter",nl:"\u3088",en:"YO",img:"\u{1F4DD}",phonetic:"yoh",example:"\u3088\u308B (yoru) = night",exampleEn:"Y + O = YO, the last of the Y-row",note:"Clean 'y' plus pure 'oh'. Also commonly used in greetings."},
        {type:"mc",q:"How many characters are in the Y-row?",opts:["2","3","4","5"],ans:"3",hint:"Some vowel combinations were dropped from modern Japanese"},
        {type:"mc",q:"Read this character: \u3086",opts:["ya","yu","yo","yi"],ans:"yu",hint:"The middle character of the Y-row, used in the word for snow"},
        {type:"teach",kind:"letter",nl:"\u3089",en:"RA",img:"\u{1F4DD}",phonetic:"rah (between r and l)",example:"\u3089\u3044\u306D\u3093 (rainen) = next year",exampleEn:"R + A = RA, with a uniquely Japanese 'r' sound",note:"The Japanese 'r' is completely different from the English 'r'. The tongue quickly taps the ridge behind the upper teeth, like a very fast 'd' or the 't' in the American pronunciation of 'butter'. It is also different from the English 'l'. It is its own sound."},
        {type:"teach",kind:"letter",nl:"\u308A",en:"RI",img:"\u{1F4DD}",phonetic:"ree (between r and l)",example:"\u308A\u3093\u3054 (ringo) = apple",exampleEn:"R + I = RI, a flowing two-stroke character",note:"Same unique 'r' sound plus 'ee'. Two graceful strokes flowing downward."},
        {type:"teach",kind:"letter",nl:"\u308B",en:"RU",img:"\u{1F4DD}",phonetic:"roo (between r and l)",example:"\u3055\u308B (saru) = monkey",exampleEn:"R + U = RU, a character with a looping tail",note:"Same unique 'r' sound plus 'oo'. Appears very frequently as a verb ending."},
        {type:"teach",kind:"letter",nl:"\u308C",en:"RE",img:"\u{1F4DD}",phonetic:"reh (between r and l)",example:"\u308C\u3044 (rei) = zero",exampleEn:"R + E = RE, an angular character",note:"Same unique 'r' sound plus 'eh'. Keep the tongue tap light and quick."},
        {type:"teach",kind:"letter",nl:"\u308D",en:"RO",img:"\u{1F4DD}",phonetic:"roh (between r and l)",example:"\u308D\u304F (roku) = six",exampleEn:"R + O = RO, a compact angular character",note:"Same unique 'r' sound plus pure 'oh'. The last of the R-row."},
        {type:"mc",q:"The Japanese 'r' sound is best described as:",opts:["Exactly like English 'r'","Exactly like English 'l'","A quick tongue tap, between 'r' and 'l'","A rolled 'r' like in Spanish"],ans:"A quick tongue tap, between 'r' and 'l'",hint:"The tongue quickly taps the ridge behind the upper teeth"},
        {type:"mc",q:"Read this character: \u308B",opts:["ru","ri","re","ro"],ans:"ru",hint:"The R-row character with a looping tail, common as a verb ending"},
        {type:"teach",kind:"letter",nl:"\u308F",en:"WA",img:"\u{1F4DD}",phonetic:"wah",example:"\u308F\u305F\u3057 (watashi) = I, me",exampleEn:"W + A = WA, the first of only 2 W-row characters",note:"The W-row is the shortest: only 'wa' and 'wo'. There is no 'wi', 'wu', or 'we' in modern hiragana."},
        {type:"teach",kind:"letter",nl:"\u3092",en:"WO (or O)",img:"\u{1F4DD}",phonetic:"oh (usually just 'o' in modern speech)",example:"\u3092 is the object-marking particle",exampleEn:"W + O = WO, but usually pronounced just 'o' today",note:"This character is almost exclusively used as the object-marking particle. In modern Japanese, most speakers pronounce it as plain 'o', identical to \u304A. You will see it constantly in sentences but rarely in regular words."},
        {type:"mc",q:"Read this character: \u308F",opts:["wa","wo","ra","na"],ans:"wa",hint:"The W-row character used in the word for 'I' or 'me'"},
        {type:"mc",q:"What is \u3092 mainly used for?",opts:["A greeting word","The object-marking particle","A question marker","A number"],ans:"The object-marking particle",hint:"You will see it in almost every Japanese sentence marking the object"},
        {type:"teach",kind:"letter",nl:"\u3093",en:"N",img:"\u{1F4DD}",phonetic:"n (or m before certain sounds)",example:"\u306B\u307B\u3093 (nihon) = Japan",exampleEn:"The ONLY hiragana that is a consonant without a vowel",note:"This is the only hiragana character that represents a standalone consonant. No vowel is attached. It appears at the end of syllables, never at the beginning of a word. Its pronunciation shifts slightly depending on what comes after it: 'n' before 't' or 'd', 'm' before 'b' or 'p', 'ng' before 'k' or 'g'."},
        {type:"mc",q:"What makes \u3093 unique among all hiragana?",opts:["It is the largest character","It is the only consonant that stands alone without a vowel","It is always silent","It can start any word"],ans:"It is the only consonant that stands alone without a vowel",hint:"Every other hiragana pairs a consonant with a vowel"},
        {type:"mc",q:"Read this character: \u3093",opts:["nu","no","n","na"],ans:"n",hint:"This standalone character has no vowel attached to it"},
        {type:"mc",q:"How many basic hiragana characters are there in total?",opts:["26","36","46","52"],ans:"46",hint:"You have now learned all of them across these lessons"},
        {type:"tip",title:"All 46 Basic Hiragana Complete!",text:"You now know all 46 basic hiragana characters:\n\u2022 5 vowels: \u3042 \u3044 \u3046 \u3048 \u304A\n\u2022 K-row: \u304B \u304D \u304F \u3051 \u3053\n\u2022 S-row: \u3055 \u3057 \u3059 \u305B \u305D\n\u2022 T-row: \u305F \u3061 \u3064 \u3066 \u3068\n\u2022 N-row: \u306A \u306B \u306C \u306D \u306E\n\u2022 H-row: \u306F \u3072 \u3075 \u3078 \u307B\n\u2022 M-row: \u307E \u307F \u3080 \u3081 \u3082\n\u2022 Y-row: \u3084 \u3086 \u3088\n\u2022 R-row: \u3089 \u308A \u308B \u308C \u308D\n\u2022 W-row: \u308F \u3092\n\u2022 \u3093\nNext up: voiced sounds (dakuten) that double your reading power.",icon:"\u{1F389}"},
      ]},
    ]},
  // ── PHASE 4: Dakuten + Handakuten (voiced and semi-voiced sounds) ──
  {id:"ja_fp_p4",title:"Phase 4: Voiced Sounds",desc:"Dakuten and handakuten marks that change consonant sounds",icon:"が",
    lessons:[
      // ── Lesson 1: Dakuten (゛) — voiced consonants ──
      {id:"ja_fp_p4_l1",title:"Dakuten: Voicing Mark",icon:"゛",xp:20,board:true,steps:[
        {type:"intro",title:"The Two Little Strokes",desc:"Japanese has a clever shortcut: add two small strokes (゛ called dakuten) to a character and its consonant becomes voiced. K becomes G, S becomes Z, T becomes D. One mark, many new sounds.",goals:["Understand what dakuten (゛) does","Learn the K-row voiced: ga gi gu ge go","Learn the S-row voiced: za ji zu ze zo"]},
        {type:"teach",kind:"info",nl:"゛ (dakuten)",en:"Voicing mark",phonetic:"",example:"か → が (ka → ga)",exampleEn:"Two small strokes in the upper-right corner voice the consonant",note:"Dakuten means 'muddy mark.' It turns unvoiced consonants into voiced ones. Think of it as 'switching on' the vocal cords. You already know the base characters, so this doubles your inventory."},
        {type:"teach",kind:"letter",nl:"が",en:"GA",img:"📝",phonetic:"ga (as in garden)",example:"が",exampleEn:"Voiced version of か (ka)",note:"Add ゛ to か → が. The voicing mark turns k into g. The shape is identical to か, just with two small strokes added."},
        {type:"teach",kind:"letter",nl:"ぎ",en:"GI",img:"📝",phonetic:"gi (as in give)",example:"ぎ",exampleEn:"Voiced version of き (ki)",note:"Add ゛ to き → ぎ. K-sound becomes g-sound."},
        {type:"teach",kind:"letter",nl:"ぐ",en:"GU",img:"📝",phonetic:"gu (as in goo)",example:"ぐ",exampleEn:"Voiced version of く (ku)",note:"Add ゛ to く → ぐ."},
        {type:"teach",kind:"letter",nl:"げ",en:"GE",img:"📝",phonetic:"ge (as in get)",example:"げ",exampleEn:"Voiced version of け (ke)",note:"Add ゛ to け → げ."},
        {type:"teach",kind:"letter",nl:"ご",en:"GO",img:"📝",phonetic:"go (as in go)",example:"ご",exampleEn:"Voiced version of こ (ko)",note:"Add ゛ to こ → ご."},
        {type:"mc",q:"What does adding ゛ (dakuten) to a character do?",opts:["Makes the sound longer","Voices the consonant","Changes the vowel","Removes the consonant"],ans:"Voices the consonant",hint:"Think about what happens to your throat when you say 'ka' vs 'ga'"},
        {type:"mc",q:"What is the voiced version of か (ka)?",opts:["ぎ","ご","が","ぐ"],ans:"が",hint:"The vowel stays the same, only the consonant changes from k to g"},
        {type:"mc",q:"Which reading is correct for ぐ?",opts:["gu","ku","zu","du"],ans:"gu",hint:"This is く with dakuten, so k becomes g"},
        {type:"teach",kind:"letter",nl:"ざ",en:"ZA",img:"📝",phonetic:"za (as in pizza)",example:"ざ",exampleEn:"Voiced version of さ (sa)",note:"Add ゛ to さ → ざ. S-sound becomes z-sound."},
        {type:"teach",kind:"letter",nl:"じ",en:"JI",img:"📝",phonetic:"ji (as in jeans)",example:"じ",exampleEn:"Voiced version of し (shi)",note:"Important: じ is pronounced 'ji', NOT 'zi'. This is a common trap. The base し (shi) already has an irregular sound, and its voiced version follows suit."},
        {type:"teach",kind:"letter",nl:"ず",en:"ZU",img:"📝",phonetic:"zu (as in zoo)",example:"ず",exampleEn:"Voiced version of す (su)",note:"Add ゛ to す → ず. S becomes z."},
        {type:"teach",kind:"letter",nl:"ぜ",en:"ZE",img:"📝",phonetic:"ze (as in zen)",example:"ぜ",exampleEn:"Voiced version of せ (se)",note:"Add ゛ to せ → ぜ."},
        {type:"teach",kind:"letter",nl:"ぞ",en:"ZO",img:"📝",phonetic:"zo (as in zone)",example:"ぞ",exampleEn:"Voiced version of そ (so)",note:"Add ゛ to そ → ぞ."},
        {type:"mc",q:"How is じ pronounced?",opts:["zi","si","ji","di"],ans:"ji",hint:"This one breaks the pattern. Think of し (shi) becoming voiced."},
        {type:"mc",q:"What is the voiced version of せ (se)?",opts:["ぜ","ぞ","ざ","ず"],ans:"ぜ",hint:"The vowel 'e' stays the same, only s becomes z"},
        {type:"teach",kind:"letter",nl:"だ",en:"DA",img:"📝",phonetic:"da (as in dark)",example:"だ",exampleEn:"Voiced version of た (ta)",note:"Add ゛ to た → だ. T-sound becomes d-sound."},
        {type:"teach",kind:"letter",nl:"ぢ",en:"DI/JI",img:"📝",phonetic:"ji (same as じ in modern Japanese)",example:"ぢ",exampleEn:"Voiced version of ち (chi). Rarely used.",note:"ぢ exists but is almost never used. In modern Japanese, じ is used instead in nearly all cases. You will see ぢ only in a few compound words like はなぢ (nosebleed)."},
        {type:"teach",kind:"letter",nl:"づ",en:"DU/ZU",img:"📝",phonetic:"zu (same as ず in modern Japanese)",example:"づ",exampleEn:"Voiced version of つ (tsu). Rarely used.",note:"Like ぢ, づ is almost never used. ず is the standard choice. You may see づ in つづく (to continue) and a few other compounds."},
        {type:"teach",kind:"letter",nl:"で",en:"DE",img:"📝",phonetic:"de (as in desk)",example:"で",exampleEn:"Voiced version of て (te)",note:"Add ゛ to て → で. Very common character. で is also the particle meaning 'at' or 'by means of.'"},
        {type:"teach",kind:"letter",nl:"ど",en:"DO",img:"📝",phonetic:"do (as in door)",example:"ど",exampleEn:"Voiced version of と (to)",note:"Add ゛ to と → ど."},
        {type:"mc",q:"Which two characters are rarely used because じ and ず replace them?",opts:["だ and で","ぢ and づ","ど and だ","で and ど"],ans:"ぢ and づ",hint:"These are the voiced versions of ち and つ, but they have near-identical sounds to other characters"},
        {type:"mc",q:"What is the reading of で?",opts:["de","te","ze","ge"],ans:"de",hint:"This is て with dakuten, so t becomes d"},
        {type:"tip",title:"Dakuten Summary So Far",text:"Three rows get dakuten:\n- K-row: か→が, き→ぎ, く→ぐ, け→げ, こ→ご\n- S-row: さ→ざ, し→じ(ji!), す→ず, せ→ぜ, そ→ぞ\n- T-row: た→だ, ち→ぢ(rare), つ→づ(rare), て→で, と→ど",icon:"📋"},
      ]},
      // ── Lesson 2: Handakuten (゜) + B-row dakuten ──
      {id:"ja_fp_p4_l2",title:"B-row and P-row",icon:"゜",xp:20,board:true,steps:[
        {type:"intro",title:"H-row: Three Versions",desc:"The H-row is unique in Japanese: it has three forms. Add dakuten (゛) to get B-sounds. Add handakuten (゜, a small circle) to get P-sounds. No other row has this triple system.",goals:["Learn the H-row voiced with dakuten: ba bi bu be bo","Learn the H-row with handakuten: pa pi pu pe po","Understand that handakuten (゜) only applies to the H-row"]},
        {type:"teach",kind:"letter",nl:"ば",en:"BA",img:"📝",phonetic:"ba (as in ball)",example:"ば",exampleEn:"Voiced version of は (ha)",note:"Add ゛ to は → ば. H-sound becomes b-sound. The H-row with dakuten gives B-sounds."},
        {type:"teach",kind:"letter",nl:"び",en:"BI",img:"📝",phonetic:"bi (as in bee)",example:"び",exampleEn:"Voiced version of ひ (hi)",note:"Add ゛ to ひ → び."},
        {type:"teach",kind:"letter",nl:"ぶ",en:"BU",img:"📝",phonetic:"bu (as in boo)",example:"ぶ",exampleEn:"Voiced version of ふ (fu)",note:"Add ゛ to ふ → ぶ."},
        {type:"teach",kind:"letter",nl:"べ",en:"BE",img:"📝",phonetic:"be (as in bet)",example:"べ",exampleEn:"Voiced version of へ (he)",note:"Add ゛ to へ → べ."},
        {type:"teach",kind:"letter",nl:"ぼ",en:"BO",img:"📝",phonetic:"bo (as in bone)",example:"ぼ",exampleEn:"Voiced version of ほ (ho)",note:"Add ゛ to ほ → ぼ."},
        {type:"mc",q:"What is the reading of ぶ?",opts:["fu","pu","bu","hu"],ans:"bu",hint:"This is ふ with dakuten (two strokes), so h/f becomes b"},
        {type:"mc",q:"Which character is the voiced version of へ (he)?",opts:["ぺ","べ","ぼ","ば"],ans:"べ",hint:"Dakuten on the H-row gives B-sounds, and the vowel stays 'e'"},
        {type:"teach",kind:"info",nl:"゜ (handakuten)",en:"Semi-voicing mark (small circle)",phonetic:"",example:"は → ぱ (ha → pa)",exampleEn:"A small circle in the upper-right corner, ONLY for the H-row",note:"Handakuten means 'half-muddy mark.' It is a small circle (゜) that ONLY works on the H-row. It changes h-sounds to p-sounds. No other row uses this mark."},
        {type:"teach",kind:"letter",nl:"ぱ",en:"PA",img:"📝",phonetic:"pa (as in park)",example:"ぱ",exampleEn:"H-row + handakuten = P-sound",note:"Add ゜ to は → ぱ. Small circle, not two strokes."},
        {type:"teach",kind:"letter",nl:"ぴ",en:"PI",img:"📝",phonetic:"pi (as in pea)",example:"ぴ",exampleEn:"ひ + ゜ = ぴ",note:"Add ゜ to ひ → ぴ."},
        {type:"teach",kind:"letter",nl:"ぷ",en:"PU",img:"📝",phonetic:"pu (as in poo)",example:"ぷ",exampleEn:"ふ + ゜ = ぷ",note:"Add ゜ to ふ → ぷ."},
        {type:"teach",kind:"letter",nl:"ぺ",en:"PE",img:"📝",phonetic:"pe (as in pet)",example:"ぺ",exampleEn:"へ + ゜ = ぺ",note:"Add ゜ to へ → ぺ."},
        {type:"teach",kind:"letter",nl:"ぽ",en:"PO",img:"📝",phonetic:"po (as in pole)",example:"ぽ",exampleEn:"ほ + ゜ = ぽ",note:"Add ゜ to ほ → ぽ."},
        {type:"mc",q:"What mark turns H-sounds into P-sounds?",opts:["Handakuten (゜, small circle)","Dakuten (゛, two strokes)","No mark needed","A horizontal line"],ans:"Handakuten (゜, small circle)",hint:"This is the ONLY mark that uses a circle shape"},
        {type:"mc",q:"Which row is the ONLY one that uses handakuten (゜)?",opts:["K-row","S-row","T-row","H-row"],ans:"H-row",hint:"Only one row has three versions: base, dakuten, and handakuten"},
        {type:"mc",q:"How many versions does は have?",opts:["1: は","2: は and ば","3: は, ば, and ぱ","4: は, ば, ぱ, and ふぁ"],ans:"3: は, ば, and ぱ",hint:"Base form + dakuten + handakuten = three versions"},
        {type:"tip",title:"The H-row Triple System",text:"The H-row is special. Three versions:\n- は(ha) ひ(hi) ふ(fu) へ(he) ほ(ho)\n- ば(ba) び(bi) ぶ(bu) べ(be) ぼ(bo)\n- ぱ(pa) ぴ(pi) ぷ(pu) ぺ(pe) ぽ(po)\nDakuten (゛) = B. Handakuten (゜) = P.",icon:"💡"},
        {type:"match",pairs:[{trg:"が",src:"ga"},{trg:"じ",src:"ji"},{trg:"で",src:"de"},{trg:"ば",src:"ba"},{trg:"ぱ",src:"pa"}]},
      ]},
    ]},
  // ── PHASE 5: Combo Sounds (small ゃ ゅ ょ) ──
  {id:"ja_fp_p5",title:"Phase 5: Combo Sounds",desc:"Small ya, yu, yo combine with i-column characters for new syllables",icon:"きゃ",
    lessons:[
      {id:"ja_fp_p5_l1",title:"Combination Syllables",icon:"きゃ",xp:25,board:true,steps:[
        {type:"intro",title:"Small Characters, Big Impact",desc:"Japanese creates new syllables by attaching a SMALL version of や(ya), ゆ(yu), or よ(yo) to characters from the i-column. The small character merges with the preceding sound into ONE syllable. Size matters here.",goals:["Understand how combo sounds work","Learn key combinations: kya, sha, cha, nya","Know the critical difference between big and small ya/yu/yo"]},
        {type:"teach",kind:"info",nl:"ゃ ゅ ょ (small)",en:"Combination markers",phonetic:"",example:"き + ゃ = きゃ (kya)",exampleEn:"The small character combines with the i-column character",note:"ONLY i-column characters (those ending in 'i') can combine with small ya/yu/yo. The 'i' sound drops out and is replaced by the ya/yu/yo. Result: one syllable, not two."},
        {type:"tip",title:"Size Matters",text:"This is critical:\n- きや = ki-ya (2 syllables, big や)\n- きゃ = kya (1 syllable, small ゃ)\nAlways check the SIZE of the second character.",icon:"⚠️"},
        {type:"teach",kind:"letter",nl:"きゃ きゅ きょ",en:"KYA KYU KYO",img:"📝",phonetic:"kya, kyu, kyo",example:"きゃ きゅ きょ",exampleEn:"K-row combos: ki + small ya/yu/yo",note:"き(ki) drops the 'i' and merges with ya/yu/yo. Result: kya, kyu, kyo."},
        {type:"teach",kind:"letter",nl:"しゃ しゅ しょ",en:"SHA SHU SHO",img:"📝",phonetic:"sha, shu, sho",example:"しゃ しゅ しょ",exampleEn:"S-row combos: shi + small ya/yu/yo",note:"し(shi) drops the 'i' and merges. Since し is already 'sh', the combos are sha, shu, sho. Very common in Japanese."},
        {type:"mc",q:"How many syllables is きゃ?",opts:["2","1","3","4"],ans:"1",hint:"The small ゃ merges with き into a single syllable"},
        {type:"mc",q:"How many syllables is きや (with BIG や)?",opts:["1","3","4","2"],ans:"2",hint:"Big や is a full character, so ki and ya are separate syllables"},
        {type:"teach",kind:"letter",nl:"ちゃ ちゅ ちょ",en:"CHA CHU CHO",img:"📝",phonetic:"cha, chu, cho",example:"ちゃ ちゅ ちょ",exampleEn:"T-row combos: chi + small ya/yu/yo",note:"ち(chi) drops the 'i' and merges. Since ち is already 'ch', the combos are cha, chu, cho."},
        {type:"teach",kind:"letter",nl:"にゃ にゅ にょ",en:"NYA NYU NYO",img:"📝",phonetic:"nya, nyu, nyo",example:"にゃ にゅ にょ",exampleEn:"N-row combos: ni + small ya/yu/yo",note:"に(ni) drops the 'i' and merges. にゃ (nya) appears in the word for 'cat meow.'"},
        {type:"mc",q:"What is the reading of しゅ?",opts:["shi-yu","su","syu","shu"],ans:"shu",hint:"し (shi) combines with small ゅ. The 'i' drops and 'yu' merges in."},
        {type:"mc",q:"What is the reading of ちょ?",opts:["chi-yo","tyo","ti-yo","cho"],ans:"cho",hint:"ち (chi) combines with small ょ. The 'i' drops and 'yo' merges in."},
        {type:"teach",kind:"letter",nl:"ひゃ ひゅ ひょ",en:"HYA HYU HYO",img:"📝",phonetic:"hya, hyu, hyo",example:"ひゃ ひゅ ひょ",exampleEn:"H-row combos: hi + small ya/yu/yo",note:"ひ(hi) drops the 'i' and merges with ya/yu/yo."},
        {type:"teach",kind:"letter",nl:"みゃ みゅ みょ",en:"MYA MYU MYO",img:"📝",phonetic:"mya, myu, myo",example:"みゃ みゅ みょ",exampleEn:"M-row combos: mi + small ya/yu/yo",note:"み(mi) drops the 'i' and merges."},
        {type:"teach",kind:"letter",nl:"りゃ りゅ りょ",en:"RYA RYU RYO",img:"📝",phonetic:"rya, ryu, ryo",example:"りゃ りゅ りょ",exampleEn:"R-row combos: ri + small ya/yu/yo",note:"り(ri) drops the 'i' and merges. りょ appears in りょうり (cooking)."},
        {type:"mc",q:"What is the reading of にゃ?",opts:["nya","ni-ya","na","ni"],ans:"nya",hint:"に (ni) drops the 'i' and merges with small ゃ"},
        {type:"mc",q:"What is the reading of りゅ?",opts:["ri-yu","ryu","ru","ri"],ans:"ryu",hint:"り (ri) drops the 'i' and merges with small ゅ"},
        {type:"teach",kind:"info",nl:"Dakuten combos",en:"Voiced characters also combine",phonetic:"",example:"ぎゃ(gya) じゃ(ja) びゃ(bya) ぴゃ(pya)",exampleEn:"Voiced and semi-voiced i-column characters work the same way",note:"The combo system works with dakuten and handakuten too:\n- ぎゃ(gya) ぎゅ(gyu) ぎょ(gyo)\n- じゃ(ja) じゅ(ju) じょ(jo)\n- びゃ(bya) びゅ(byu) びょ(byo)\n- ぴゃ(pya) ぴゅ(pyu) ぴょ(pyo)"},
        {type:"mc",q:"What is the reading of じゃ?",opts:["zi-ya","jya","ja","ji-ya"],ans:"ja",hint:"じ (ji) combines with small ゃ. Very common in casual speech."},
        {type:"mc",q:"What is the reading of ぎょ?",opts:["gi-yo","go","gi","gyo"],ans:"gyo",hint:"ぎ (gi) drops the 'i' and merges with small ょ"},
        {type:"match",pairs:[{trg:"きゃ",src:"kya"},{trg:"しゅ",src:"shu"},{trg:"ちょ",src:"cho"},{trg:"にゃ",src:"nya"},{trg:"じゃ",src:"ja"}]},
        {type:"tip",title:"Combo Sound Pattern",text:"The rule is always the same:\n1. Take an i-column character (ki, shi, chi, ni, hi, mi, ri, gi, ji, bi, pi)\n2. Drop the 'i'\n3. Add ya, yu, or yo\n4. Result: one syllable\nThe small size of ゃ ゅ ょ is the visual cue.",icon:"💡"},
      ]},
    ]},
  // ── PHASE 6: Katakana Basic (angular script for foreign words) ──
  {id:"ja_fp_p6",title:"Phase 6: Katakana Basic",desc:"The angular script used for foreign loanwords and emphasis",icon:"カ",
    lessons:[
      // ── Lesson 1: Vowels + K-S-T-N rows ──
      {id:"ja_fp_p6_l1",title:"Katakana: First Half",icon:"ア",xp:25,board:true,steps:[
        {type:"intro",title:"Same Sounds, New Shapes",desc:"Katakana represents the exact same sounds as hiragana, but with angular, straight-line shapes. It is used for foreign loanwords, emphasis, onomatopoeia, and scientific terms. You already know the sounds. Now learn the new shapes.",goals:["Learn katakana vowels: ア イ ウ エ オ","Learn katakana K-row: カ キ ク ケ コ","Learn katakana S-row and T-row","Spot confusing hiragana/katakana look-alikes"]},
        {type:"teach",kind:"info",nl:"カタカナ",en:"Katakana",phonetic:"ka-ta-ka-na",example:"コーヒー (koohii = coffee)",exampleEn:"Katakana is used for words borrowed from other languages",note:"Katakana looks more angular and sharp compared to hiragana's curves. Both scripts cover the same sounds. Think of katakana as the 'print' version and hiragana as the 'cursive' version."},
        {type:"teach",kind:"letter",nl:"ア",en:"A",img:"📝",phonetic:"a (as in father)",example:"ア",exampleEn:"Katakana version of あ",note:"ア looks nothing like あ. Memorize this fresh. Two strokes forming an angular shape."},
        {type:"teach",kind:"letter",nl:"イ",en:"I",img:"📝",phonetic:"i (as in see)",example:"イ",exampleEn:"Katakana version of い",note:"イ has two strokes meeting at an angle. Somewhat similar to い, but sharper."},
        {type:"teach",kind:"letter",nl:"ウ",en:"U",img:"📝",phonetic:"u (as in moon)",example:"ウ",exampleEn:"Katakana version of う",note:"ウ looks quite different from う. Angular top with a vertical stroke."},
        {type:"teach",kind:"letter",nl:"エ",en:"E",img:"📝",phonetic:"e (as in bed)",example:"エ",exampleEn:"Katakana version of え",note:"エ looks like a capital I or H-shape. Completely different from え."},
        {type:"teach",kind:"letter",nl:"オ",en:"O",img:"📝",phonetic:"o (as in go)",example:"オ",exampleEn:"Katakana version of お",note:"オ has a cross shape with a short tail. Don't confuse with ホ (ho) or カ (ka)."},
        {type:"mc",q:"Which is the KATAKANA version of the vowel 'a'?",opts:["ア","あ","カ","ウ"],ans:"ア",hint:"Look for the angular shape, not the curvy hiragana form"},
        {type:"mc",q:"Which is the KATAKANA version of the vowel 'u'?",opts:["う","フ","ウ","ク"],ans:"ウ",hint:"This vowel has an angular top with a vertical stroke below"},
        {type:"teach",kind:"letter",nl:"カ キ ク ケ コ",en:"KA KI KU KE KO",img:"📝",phonetic:"ka, ki, ku, ke, ko",example:"カ キ ク ケ コ",exampleEn:"Katakana K-row",note:"カ looks somewhat like か without the curve. キ resembles き but straighter. ク is angular with two strokes. ケ is similar to け but simplified. コ is a simple open box."},
        {type:"mc",q:"Which is the KATAKANA for 'ki'?",opts:["き","キ","ケ","カ"],ans:"キ",hint:"The katakana version is straighter and more angular than き"},
        {type:"mc",q:"Which is the KATAKANA for 'ko'?",opts:["こ","ユ","ニ","コ"],ans:"コ",hint:"This one looks like a simple open box shape"},
        {type:"teach",kind:"letter",nl:"サ シ ス セ ソ",en:"SA SHI SU SE SO",img:"📝",phonetic:"sa, shi, su, se, so",example:"サ シ ス セ ソ",exampleEn:"Katakana S-row",note:"Watch out: シ (shi) and ツ (tsu) are a classic confusion pair. シ has strokes going upper-left to lower-right. ソ (so) and ン (n) are another trap pair. Learn these carefully."},
        {type:"teach",kind:"letter",nl:"タ チ ツ テ ト",en:"TA CHI TSU TE TO",img:"📝",phonetic:"ta, chi, tsu, te, to",example:"タ チ ツ テ ト",exampleEn:"Katakana T-row",note:"ツ (tsu) is the famous confusion partner of シ (shi). ツ has strokes going upper-right to lower-left. The direction of the small strokes is opposite."},
        {type:"mc",q:"シ (shi) and ツ (tsu) look similar. How do you tell them apart?",opts:["シ has horizontal small strokes, ツ has vertical small strokes","They are identical","シ is bigger","ツ has a circle"],ans:"シ has horizontal small strokes, ツ has vertical small strokes",hint:"Look at the angle of the two small strokes in the upper part"},
        {type:"teach",kind:"letter",nl:"ナ ニ ヌ ネ ノ",en:"NA NI NU NE NO",img:"📝",phonetic:"na, ni, nu, ne, no",example:"ナ ニ ヌ ネ ノ",exampleEn:"Katakana N-row",note:"ナ looks like the hiragana な simplified. ニ (ni) is just two horizontal lines. ノ (no) is a single diagonal stroke."},
        {type:"mc",q:"Which katakana character is just two horizontal lines?",opts:["コ","フ","ニ","エ"],ans:"ニ",hint:"This is the katakana for 'ni', and it is the simplest two-stroke character"},
        {type:"mc",q:"Which is the KATAKANA for 'no'?",opts:["ノ","め","フ","ク"],ans:"ノ",hint:"This one is a single diagonal stroke, very simple"},
        {type:"tip",title:"Katakana Confusion Pairs",text:"Watch out for these easily confused pairs:\n- シ (shi) vs ツ (tsu): check small stroke direction\n- ソ (so) vs ン (n): stroke angle differs\n- ウ (u) vs ク (ku): ク has a more angular bend\n- コ (ko) vs ニ (ni): コ is open box, ニ is two lines",icon:"⚠️"},
        {type:"match",pairs:[{trg:"ア",src:"a"},{trg:"カ",src:"ka"},{trg:"シ",src:"shi"},{trg:"ツ",src:"tsu"},{trg:"ニ",src:"ni"}]},
      ]},
      // ── Lesson 2: H-M-Y-R-W-N rows ──
      {id:"ja_fp_p6_l2",title:"Katakana: Second Half",icon:"ハ",xp:25,board:true,steps:[
        {type:"intro",title:"Completing the Set",desc:"The remaining katakana rows. After this lesson you will know all 46 basic katakana characters. Dakuten and handakuten work the same way as in hiragana.",goals:["Learn katakana H through N rows","Know that dakuten/handakuten apply the same way","Mix hiragana and katakana recognition"]},
        {type:"teach",kind:"letter",nl:"ハ ヒ フ ヘ ホ",en:"HA HI FU HE HO",img:"📝",phonetic:"ha, hi, fu, he, ho",example:"ハ ヒ フ ヘ ホ",exampleEn:"Katakana H-row",note:"ハ looks like a wide V shape. フ (fu) is a simple angular curve. ヘ (he) looks identical to へ (hiragana). ホ looks like a cross with extra strokes."},
        {type:"teach",kind:"letter",nl:"マ ミ ム メ モ",en:"MA MI MU ME MO",img:"📝",phonetic:"ma, mi, mu, me, mo",example:"マ ミ ム メ モ",exampleEn:"Katakana M-row",note:"マ (ma) looks like a checkmark. ム (mu) has an angular shape. メ (me) is a simple X-like shape."},
        {type:"mc",q:"Which katakana character looks nearly identical to its hiragana version?",opts:["ハ (ha)","フ (fu)","ホ (ho)","ヘ (he)"],ans:"ヘ (he)",hint:"One katakana character kept the same shape as its hiragana counterpart"},
        {type:"teach",kind:"letter",nl:"ヤ ユ ヨ",en:"YA YU YO",img:"📝",phonetic:"ya, yu, yo",example:"ヤ ユ ヨ",exampleEn:"Katakana Y-row (only 3 characters)",note:"ヤ (ya) is angular with two main strokes. ユ (yu) is compact. ヨ (yo) looks like three horizontal lines connected. Same as hiragana: only ya, yu, yo exist."},
        {type:"teach",kind:"letter",nl:"ラ リ ル レ ロ",en:"RA RI RU RE RO",img:"📝",phonetic:"ra, ri, ru, re, ro",example:"ラ リ ル レ ロ",exampleEn:"Katakana R-row",note:"ラ (ra) looks like フ (fu) with an extra bend. リ (ri) is two short vertical strokes. ル (ru) looks like a small レ with a hook. ロ (ro) is a closed box (compare with コ which is open)."},
        {type:"mc",q:"How is ロ (ro) different from コ (ko)?",opts:["ロ is a closed box, コ is open on one side","They are identical","ロ has a dot","コ is bigger"],ans:"ロ is a closed box, コ is open on one side",hint:"Look at whether the bottom is closed or open"},
        {type:"teach",kind:"letter",nl:"ワ ヲ ン",en:"WA WO N",img:"📝",phonetic:"wa, wo, n",example:"ワ ヲ ン",exampleEn:"Katakana W-row + N",note:"ワ (wa) looks like ウ without the top mark. ヲ (wo) is rare in katakana. ン (n) is the standalone nasal. Watch out: ン looks like ソ (so) flipped."},
        {type:"mc",q:"Which two katakana characters are easily confused?",opts:["ア and カ","ン (n) and ソ (so)","エ and オ","タ and テ"],ans:"ン (n) and ソ (so)",hint:"These two have very similar angular shapes with a slight directional difference"},
        {type:"teach",kind:"info",nl:"Dakuten in katakana",en:"Same marks, same rules",phonetic:"",example:"カ→ガ(ga) サ→ザ(za) タ→ダ(da) ハ→バ(ba) ハ→パ(pa)",exampleEn:"Dakuten and handakuten apply to katakana the same way as hiragana",note:"Everything you learned about dakuten (゛) and handakuten (゜) applies to katakana.\n- K→G: ガ ギ グ ゲ ゴ\n- S→Z: ザ ジ ズ ゼ ゾ\n- T→D: ダ ヂ ヅ デ ド\n- H→B: バ ビ ブ ベ ボ\n- H→P: パ ピ プ ペ ポ"},
        {type:"mc",q:"What is the katakana for 'ga'?",opts:["カ","ザ","ダ","ガ"],ans:"ガ",hint:"Take カ (ka) and add dakuten to voice the consonant"},
        {type:"mc",q:"What is the katakana for 'pu'?",opts:["ブ","フ","ム","プ"],ans:"プ",hint:"Take フ (fu) and add handakuten (small circle) for the p-sound"},
        {type:"tip",title:"Katakana vs Hiragana",text:"Key difference: purpose, not sound.\n- Hiragana: native Japanese words, grammar particles, verb endings\n- Katakana: foreign loanwords, emphasis, onomatopoeia, scientific terms\nBoth scripts have the exact same sounds. Katakana is angular, hiragana is curvy.",icon:"💡"},
        {type:"match",pairs:[{trg:"ハ",src:"ha"},{trg:"ヤ",src:"ya"},{trg:"ル",src:"ru"},{trg:"ン",src:"n"},{trg:"ロ",src:"ro"}]},
      ]},
    ]},
  // ── PHASE 7: Katakana Special (loanword extensions) ──
  {id:"ja_fp_p7",title:"Phase 7: Katakana Special",desc:"Long vowels, double consonants, and extended sounds for foreign words",icon:"ー",
    lessons:[
      {id:"ja_fp_p7_l1",title:"Special Katakana Features",icon:"ー",xp:25,board:true,steps:[
        {type:"intro",title:"Beyond the Basics",desc:"Katakana has extra features that hiragana does not use. The long vowel mark (ー), special foreign sound combinations, and the small ッ for double consonants. These are essential for reading loanwords.",goals:["Learn the long vowel mark ー","Learn special combos for foreign sounds (fa, fi, ti, di)","Understand small ッ for double consonants","Practice reading common loanwords"]},
        {type:"teach",kind:"letter",nl:"ー",en:"Long vowel mark",img:"📝",phonetic:"(extends the previous vowel)",example:"コーヒー (koohii)",exampleEn:"The dash extends the vowel before it",note:"ー is a horizontal dash that stretches the previous vowel sound. コーヒー = ko-o-hi-i = coffee. This mark is used ONLY in katakana. Hiragana spells long vowels differently (by adding another vowel character)."},
        {type:"mc",q:"What does ー do in katakana?",opts:["Separates words","Extends the previous vowel","Makes a pause","Indicates emphasis"],ans:"Extends the previous vowel",hint:"Think of it as stretching the sound that came before it"},
        {type:"mc",q:"How is コーヒー (koohii) read?",opts:["ko-hi","ko-a-hi-a","koo-hii","kohi"],ans:"koo-hii",hint:"Each ー extends the vowel before it, so o becomes oo and i becomes ii"},
        {type:"teach",kind:"letter",nl:"ッ (small tsu)",en:"Double consonant",img:"📝",phonetic:"(brief pause, doubles the next consonant)",example:"ベッド (beddo)",exampleEn:"Small ッ creates a double consonant (geminate)",note:"Small ッ is NOT pronounced as 'tsu'. It creates a brief stop before the next consonant, making it a double sound. ベッド = be-d-do = bed. Think of it as a tiny pause or 'catch' in your throat."},
        {type:"mc",q:"How is ベッド read?",opts:["betudo","bedo","beddo","betdo"],ans:"beddo",hint:"The small ッ doubles the consonant that follows it"},
        {type:"mc",q:"How is ロッカー read?",opts:["rokkaa","rokaa","rotukaa","rokukaa"],ans:"rokkaa",hint:"Small ッ doubles the 'k' sound, and ー extends the final 'a'"},
        {type:"teach",kind:"info",nl:"Foreign sound combos",en:"Extended katakana for non-Japanese sounds",phonetic:"",example:"ファ(fa) フィ(fi) フェ(fe) フォ(fo)",exampleEn:"Combinations that represent sounds not native to Japanese",note:"Standard Japanese does not have 'f' sounds except for ふ (fu). To write foreign words with 'fa, fi, fe, fo', Japanese uses フ + small vowel characters:\n- ファ (fa), フィ (fi), フェ (fe), フォ (fo)\nThis is a modern extension."},
        {type:"teach",kind:"letter",nl:"ファ フィ フェ フォ",en:"FA FI FE FO",img:"📝",phonetic:"fa, fi, fe, fo",example:"ファン (fan)",exampleEn:"フ + small ァ/ィ/ェ/ォ",note:"These use small versions of the vowel katakana characters. ファン (fan) = fa-n. You will see these in many English loanwords."},
        {type:"mc",q:"How would you write 'fan' in katakana?",opts:["ハン","ファン","フアン","パン"],ans:"ファン",hint:"The 'fa' sound uses フ plus a small ァ, followed by ン for 'n'"},
        {type:"teach",kind:"letter",nl:"ティ ディ",en:"TI DI",img:"📝",phonetic:"ti (as in team), di (as in deed)",example:"ティー (tii = tea), ディスク (disuku = disk)",exampleEn:"テ/デ + small ィ for sounds not in native Japanese",note:"Native Japanese has チ (chi) and ヂ (ji) for the i-column of T and D rows. But foreign words need 'ti' and 'di' sounds. So: テ + small ィ = ティ (ti). デ + small ィ = ディ (di)."},
        {type:"mc",q:"How do you write the 'ti' sound (as in 'team') in katakana?",opts:["チ","ティ","テイ","ツィ"],ans:"ティ",hint:"テ plus a SMALL ィ gives the foreign 'ti' sound"},
        {type:"teach",kind:"letter",nl:"ヴァ ヴィ ヴ ヴェ ヴォ",en:"VA VI VU VE VO",img:"📝",phonetic:"va, vi, vu, ve, vo",example:"ヴァイオリン (vaiorin = violin)",exampleEn:"ヴ (vu) + small vowels for v-sounds",note:"Japanese does not have a native 'v' sound. ヴ is ウ with dakuten, representing 'vu'. Combined with small vowels: ヴァ(va), ヴィ(vi), ヴェ(ve), ヴォ(vo). These are quite rare. Many Japanese speakers pronounce them as b-sounds instead."},
        {type:"mc",q:"How is ヴ created?",opts:["ア + dakuten","ウ + dakuten","オ + dakuten","イ + dakuten"],ans:"ウ + dakuten",hint:"The v-sound character comes from adding dakuten to the 'u' vowel katakana"},
        {type:"tip",title:"Reading Loanwords",text:"Common patterns in katakana loanwords:\n- ー extends vowels: ケーキ (keeki = cake)\n- ッ doubles consonants: カップ (kappu = cup)\n- Foreign combos: ファイル (fairu = file)\n- Long words: コンピューター (konpyuutaa = computer)",icon:"📖"},
        {type:"teach",kind:"info",nl:"Common loanwords",en:"Practice reading these",phonetic:"",example:"テレビ (terebi = TV)\nコンピューター (konpyuutaa = computer)",exampleEn:"English words adapted into Japanese katakana",note:"Loanword tips:\n- テレビ = te-re-bi = television (TV)\n- コンピューター = ko-n-pyu-u-ta-a = computer\n- レストラン = re-su-to-ra-n = restaurant\n- チョコレート = cho-ko-re-e-to = chocolate"},
        {type:"mc",q:"What does テレビ mean?",opts:["Telephone","Television (TV)","Taxi","Table"],ans:"Television (TV)",hint:"Sound it out: te-re-bi. Think of a shortened form of a familiar English word."},
        {type:"mc",q:"How would you read チョコレート?",opts:["chokoreto (chocolate)","chikoreto","tiyokoreto","chokorato"],ans:"chokoreto (chocolate)",hint:"Break it down: チョ(cho) コ(ko) レ(re) ー(extends e) ト(to)"},
        {type:"mc",q:"What does the small ッ do in カップ (kappu)?",opts:["Adds a 'tsu' sound","Makes the word louder","Indicates a question","Doubles the 'p' consonant"],ans:"Doubles the 'p' consonant",hint:"Small ッ always doubles the consonant that follows it"},
        {type:"match",pairs:[{trg:"ー",src:"long vowel mark"},{trg:"ッ",src:"double consonant"},{trg:"ファ",src:"fa"},{trg:"ティ",src:"ti"},{trg:"テレビ",src:"TV"}]},
      ]},
    ]},
  {id:"ja_fp_p8",title:"Phase 8: Kanji Awareness",desc:"Chinese characters in Japanese: what they are, how they work, and why you don't need to panic",icon:"漢",
    lessons:[
      // ── Lesson 1: What Are Kanji? ──
      {id:"ja_fp_p8_l1",title:"What Are Kanji?",icon:"漢",xp:20,board:true,steps:[
        {type:"intro",title:"The Third Script",desc:"You've learned hiragana and katakana. Now meet kanji: Chinese characters adopted into Japanese over 1,500 years ago. Each one carries meaning AND sound. This lesson explains how they work.",goals:["Understand what kanji are and where they came from","Learn the two reading types: on'yomi and kun'yomi","Know that VerumLingua always shows furigana"]},

        {type:"teach",kind:"info",nl:"漢字",en:"Kanji (Chinese characters)",phonetic:"kan-ji",example:"山 川 日 月 水",exampleEn:"Mountain, river, sun, moon, water",note:"Kanji are logographs: each character represents a meaning, not just a sound. Japanese uses about 2,136 in daily life."},

        {type:"teach",kind:"info",nl:"意味",en:"Meaning-based writing",phonetic:"i-mi",example:"山 means 'mountain' whether you say it in Japanese or Chinese",exampleEn:"The character carries meaning independent of pronunciation",note:"Unlike hiragana and katakana (which represent sounds), each kanji represents a concept. That is why the same character can have multiple pronunciations."},

        {type:"mc",q:"What makes kanji different from hiragana and katakana?",opts:["Kanji represent meanings, not just sounds","Kanji are only used for foreign words","Kanji have fewer characters","Kanji are always read the same way"],ans:"Kanji represent meanings, not just sounds",hint:"Think about what each character carries beyond its pronunciation"},

        {type:"teach",kind:"info",nl:"訓読み",en:"Kun'yomi (native Japanese reading)",phonetic:"kun-yo-mi",example:"山 = やま (yama) when used alone",exampleEn:"Mountain (standalone word)",note:"Kun'yomi is the original Japanese word attached to the kanji. Used when the kanji appears alone or with hiragana endings (okurigana)."},

        {type:"teach",kind:"info",nl:"音読み",en:"On'yomi (Chinese-derived reading)",phonetic:"on-yo-mi",example:"山 = さん (san) in 富士山 (fujisan)",exampleEn:"San in Fujisan (Mt. Fuji)",note:"On'yomi came from Chinese pronunciation. Used mostly in compound words where two or more kanji sit together."},

        {type:"mc",q:"Which reading type is used when a kanji stands alone as a word?",opts:["On'yomi (Chinese-derived)","Kun'yomi (native Japanese)","Romaji","Katakana"],ans:"Kun'yomi (native Japanese)",hint:"The native Japanese reading applies to standalone kanji words"},

        {type:"mc",q:"Which reading type is typically used in compound words with multiple kanji?",opts:["Kun'yomi (native Japanese)","On'yomi (Chinese-derived)","Either one randomly","Neither"],ans:"On'yomi (Chinese-derived)",hint:"Compounds like 大学 use the Chinese-derived pronunciation"},

        {type:"teach",kind:"letter",nl:"山",en:"Mountain",phonetic:"yama (kun) / san (on)",example:"山 = やま (yama, standalone)\n富士山 = ふじさん (fujisan, compound)",exampleEn:"Mountain (standalone) / Mt. Fuji (compound)",note:"Your first kanji. Alone it is 'yama'. Inside a compound it becomes 'san'. The shape shows three peaks."},

        {type:"teach",kind:"letter",nl:"水",en:"Water",phonetic:"mizu (kun) / sui (on)",example:"水 = みず (mizu, standalone)\n水曜日 = すいようび (suiyoubi, Wednesday)",exampleEn:"Water (standalone) / Wednesday (lit. water-day)",note:"Alone: mizu. In the compound for Wednesday: sui. The character originally depicted flowing water."},

        {type:"mc",q:"山 by itself is read as...",opts:["san","yama","zan","ka"],ans:"yama",hint:"Standalone kanji use the native Japanese reading"},

        {type:"mc",q:"水 in the compound 水曜日 (Wednesday) is read as...",opts:["mizu","sui","mi","kawa"],ans:"sui",hint:"Compounds use the Chinese-derived reading"},

        {type:"teach",kind:"info",nl:"ふりがな",en:"Furigana (reading aid)",phonetic:"fu-ri-ga-na",example:"大学(だいがく)",exampleEn:"University, with small hiragana above showing the reading",note:"Furigana are small hiragana printed above kanji to show pronunciation. In VerumLingua, ALL kanji always have furigana so you can read everything."},

        {type:"tip",title:"No Panic Required",text:"You do NOT need to memorize kanji right now.\nVerumLingua shows furigana on every kanji.\nYou will learn them naturally through the lessons.\nFocus on recognizing the concept, not memorizing characters.",icon:""},

        {type:"mc",q:"What are furigana?",opts:["Small hiragana above kanji showing pronunciation","A type of katakana","The Chinese name for kanji","Punctuation marks in Japanese"],ans:"Small hiragana above kanji showing pronunciation",hint:"They are the small reading guides placed over characters"},

        {type:"mc",q:"How many kanji are used in daily Japanese life?",opts:["About 50","About 500","About 2,136","About 50,000"],ans:"About 2,136",hint:"The official jouyou kanji list has a specific number in the low thousands"},
      ]},

      // ── Lesson 2: Radicals and Reading Kanji ──
      {id:"ja_fp_p8_l2",title:"Radicals and Basic Kanji",icon:"木",xp:20,board:true,steps:[
        {type:"intro",title:"Building Blocks of Kanji",desc:"Kanji are not random squiggles. They are built from smaller parts called radicals. Learning radicals helps you guess meaning, remember characters, and look them up in dictionaries.",goals:["Understand what radicals (bushu) are","Recognize common radicals that hint at meaning","Meet 10 basic kanji with their meanings"]},

        {type:"teach",kind:"info",nl:"部首",en:"Radicals (bushu)",phonetic:"bu-shu",example:"氵= water radical, found in 海 (sea), 池 (pond), 泳 (swim)",exampleEn:"The water radical appears in many water-related kanji",note:"Radicals are the building blocks of kanji. Most kanji contain one or more radicals. About 214 radicals exist, but a few dozen cover the majority of common kanji."},

        {type:"teach",kind:"info",nl:"意味のヒント",en:"Radicals hint at meaning",phonetic:"i-mi no hin-to",example:"海 (sea) contains 氵(water)\n休 (rest) contains 人 (person) + 木 (tree)",exampleEn:"Sea has the water radical. Rest shows a person leaning on a tree.",note:"When you see a radical you recognize, you can often guess the general category of meaning. Water radical? Probably water-related. Tree radical? Probably plant-related."},

        {type:"mc",q:"What are radicals in the context of kanji?",opts:["The building block components of kanji","A type of pronunciation guide","Grammar particles","Verb conjugation patterns"],ans:"The building block components of kanji",hint:"Think of them as the smaller parts that make up each character"},

        {type:"mc",q:"If a kanji contains the water radical (氵), it probably relates to...",opts:["Fire or heat","Water or liquid","Wood or plants","Metal or money"],ans:"Water or liquid",hint:"Radicals hint at the category of meaning"},

        {type:"teach",kind:"letter",nl:"人",en:"Person",phonetic:"hito (kun) / jin, nin (on)",example:"人 = ひと (hito)\n日本人 = にほんじん (nihonjin, Japanese person)",exampleEn:"Person (standalone) / Japanese person (compound)",note:"One of the most common kanji. As a radical inside other kanji, it appears as 亻on the left side."},

        {type:"teach",kind:"letter",nl:"大",en:"Big",phonetic:"oo-kii (kun) / dai, tai (on)",example:"大きい = おおきい (ookii, big)\n大学 = だいがく (daigaku, university)",exampleEn:"Big (adjective) / University (lit. big-learning)",note:"A person with arms spread wide. Alone: ookii. In compounds: dai or tai."},

        {type:"teach",kind:"letter",nl:"小",en:"Small",phonetic:"chii-sai (kun) / shou (on)",example:"小さい = ちいさい (chiisai, small)\n小学校 = しょうがっこう (shougakkou, elementary school)",exampleEn:"Small (adjective) / Elementary school (lit. small-learning-place)",note:"The opposite of 大. Three small strokes. Alone: chiisai. In compounds: shou."},

        {type:"mc",q:"大学 (daigaku) literally means...",opts:["Big school","Small learning","Old university","New place"],ans:"Big school",hint:"大 means big and 学 relates to learning"},

        {type:"teach",kind:"letter",nl:"日",en:"Sun / Day",phonetic:"hi, nichi (kun) / nichi, jitsu (on)",example:"日 = ひ (hi, sun)\n日曜日 = にちようび (nichiyoubi, Sunday)",exampleEn:"Sun (standalone) / Sunday (lit. sun-day)",note:"Originally a picture of the sun. Also means 'day'. One of the most frequent kanji in Japanese."},

        {type:"teach",kind:"letter",nl:"月",en:"Moon / Month",phonetic:"tsuki (kun) / getsu, gatsu (on)",example:"月 = つき (tsuki, moon)\n月曜日 = げつようび (getsuyoubi, Monday)",exampleEn:"Moon (standalone) / Monday (lit. moon-day)",note:"Originally a crescent moon. Also means 'month'. January = 一月 (ichigatsu, lit. month-one)."},

        {type:"mc",q:"月曜日 (getsuyoubi) means Monday. What does 月 represent here?",opts:["Sun","Moon","Star","Earth"],ans:"Moon",hint:"Think about which celestial body Monday is named after in many languages"},

        {type:"teach",kind:"letter",nl:"火",en:"Fire",phonetic:"hi (kun) / ka (on)",example:"火 = ひ (hi, fire)\n火曜日 = かようび (kayoubi, Tuesday)",exampleEn:"Fire (standalone) / Tuesday (lit. fire-day)",note:"A picture of flames. As a radical it often appears as 灬 at the bottom of characters. Tuesday = fire-day."},

        {type:"teach",kind:"letter",nl:"木",en:"Tree",phonetic:"ki (kun) / moku, boku (on)",example:"木 = き (ki, tree)\n木曜日 = もくようび (mokuyoubi, Thursday)",exampleEn:"Tree (standalone) / Thursday (lit. tree-day)",note:"A tree with branches above and roots below. Very common as a radical in plant-related kanji. Two trees = 林 (hayashi, grove). Three trees = 森 (mori, forest)."},

        {type:"teach",kind:"letter",nl:"金",en:"Gold / Money",phonetic:"kane (kun) / kin (on)",example:"金 = かね (kane, money)\n金曜日 = きんようび (kinyoubi, Friday)",exampleEn:"Money (standalone) / Friday (lit. gold-day)",note:"Originally depicted gold nuggets. Today it means both gold and money. As a radical it appears in metal-related kanji."},

        {type:"teach",kind:"letter",nl:"土",en:"Earth / Soil",phonetic:"tsuchi (kun) / do (on)",example:"土 = つち (tsuchi, earth)\n土曜日 = どようび (doyoubi, Saturday)",exampleEn:"Earth (standalone) / Saturday (lit. earth-day)",note:"A mound of earth on the ground. Saturday = earth-day. As a radical it appears in place-related kanji."},

        {type:"mc",q:"The days of the week in Japanese use which set of kanji?",opts:["日 月 火 水 木 金 土","人 大 小 山 川 林 森","一 二 三 四 五 六 七","東 西 南 北 上 下 中"],ans:"日 月 火 水 木 金 土",hint:"Sun, moon, fire, water, tree, gold, earth correspond to the seven days"},

        {type:"teach",kind:"letter",nl:"川",en:"River",phonetic:"kawa (kun) / sen (on)",example:"川 = かわ (kawa, river)\n小川 = おがわ (ogawa, stream/surname)",exampleEn:"River (standalone) / Small river or common surname",note:"Three flowing lines representing a river. One of the simplest kanji to recognize."},

        {type:"mc",q:"Which kanji is a picture of three flowing lines?",opts:["山 (mountain)","川 (river)","水 (water)","火 (fire)"],ans:"川 (river)",hint:"Think of three parallel vertical strokes representing flowing water"},

        {type:"mc",q:"林 (grove) is made of two 木 (tree). What does 森 (forest) contain?",opts:["Two trees","Three trees","Four trees","One big tree"],ans:"Three trees",hint:"More trees make a denser grouping"},

        {type:"tip",title:"Kanji in VerumLingua",text:"Every kanji in the lessons comes with furigana.\nYou will learn kanji naturally as you study vocabulary.\nStart by recognizing meanings, not memorizing characters.\nRadicals are your friends: they reveal patterns.",icon:""},

        {type:"tip",title:"Furigana in Real Japanese",text:"Furigana appear in children's books, textbooks, and manga.\nNewspapers use them for unusual readings and names.\nAs you get more advanced, you rely on them less.\nBut even native speakers encounter unfamiliar kanji.",icon:""},

        {type:"mc",q:"Which radical would you expect to find in a kanji meaning 'pond'?",opts:["火 (fire)","氵(water)","木 (tree)","金 (metal)"],ans:"氵(water)",hint:"A pond is a body of water, so the water radical is logical"},
      ]},
    ]},
  ]},
  zh:{name:"Learn Pinyin & Characters",icon:"🇨🇳",blueprint:"hanzi",stages:[]},
  fr:{name:"French Foundations Play",icon:"🇫🇷",blueprint:"latin_simple",stages:[
    // ══════════════════════════════════════════════════════════════
    // FRENCH FOUNDATIONS PLAYTHROUGH
    // 6 stages, 15 lessons. Covers alphabet, accents, vowels (oral
    // + nasal), consonants, liaison, silent letters, spelling, and
    // grammar preview (gender + Agreement Web).
    // P8 compliant, no IPA slashes, no em-dashes, board:true all.
    // ══════════════════════════════════════════════════════════════

    // ── STAGE 1: THE ALPHABET & ACCENTS ──
    {id:"fr_fp_s1",title:"The Alphabet & Accents",desc:"French uses 26 letters plus 5 accent marks and cedilla",icon:"🔤",
      lessons:[
        {id:"fr_fp_s1_l1",title:"The French Alphabet",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"The French Alphabet",desc:"French uses the same 26 letters as English, but many sound different. Plus, French adds accent marks that change pronunciation and meaning.",goals:["Know the 26 base letters","Spot letters that sound different from English","Meet the accent marks"]},
          {type:"teach",kind:"info",nl:"L'alphabet français",en:"The French alphabet",phonetic:"lal-fah-BAY fron-SAY",example:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",exampleEn:"26 base letters, same as English. But H is always silent, R is from the throat, and U sounds like no English vowel.",note:"French letter names are different from English.\nA = ah, B = bay, C = say, D = day, E = uh.\nLearning the names helps with spelling aloud."},
          {type:"teach",kind:"info",nl:"Les pièges",en:"Letters that trap English speakers",phonetic:"lay pee-EZGH",example:"H is silent: homme = omm. R is uvular: rouge = roozh. U is rounded: tu = tew. J = ZH sound: je = zhuh.",exampleEn:"Four letters you must retrain your ears and mouth for",note:"H: always silent, never pronounced.\nR: from back of throat, not like English R.\nU: say ee with rounded lips, NOT oo.\nJ: like the s in pleasure."},
          {type:"mc",q:"In French, the letter H is:",opts:["Pronounced like English H","Always silent","Pronounced only at word start","Optional"],ans:"Always silent",hint:"French H has no sound at all."},
          {type:"mc",q:"The French R is produced:",opts:["With the tip of the tongue","At the back of the throat","With the lips","Same as English R"],ans:"At the back of the throat",hint:"French R is uvular, like a gentle gargle."},
          {type:"mc",q:"French U sounds like:",opts:["English oo in food","English uh in cup","Say ee with rounded lips","English ew in new"],ans:"Say ee with rounded lips",hint:"Position tongue for ee, then round your lips tightly."},
          {type:"mc",q:"French J sounds like:",opts:["English J in jump","ZH, like the s in pleasure","Y, like in yes","Silent"],ans:"ZH, like the s in pleasure",hint:"Je (I) is pronounced zhuh, not juh."},
        ]},
        {id:"fr_fp_s1_l2",title:"Accent Marks",icon:"✨",xp:15,board:true,steps:[
          {type:"intro",title:"Five accent marks",desc:"French uses five diacritical marks: accent aigu (é), accent grave (è, à, ù), circumflex (ê, â, î, ô, û), diaeresis (ë, ï), and cedilla (ç). Each one matters.",goals:["Recognize all 5 accent types","Know what each accent does","See how accents change meaning"]},
          {type:"teach",kind:"info",nl:"L'accent aigu: é",en:"Acute accent: always on E, always AY sound",phonetic:"lak-SON ay-GEW",example:"A: Tu as mangé?\nB: Oui, j'ai mangé au café.",exampleEn:"A: Did you eat?\nB: Yes, I ate at the café.",note:"é always sounds like ay in say.\nMost common accent in French.\nAppears in past participles: parlé, mangé, regardé."},
          {type:"teach",kind:"info",nl:"L'accent grave: è, à, ù",en:"Grave accent: open E, or distinguishes words",phonetic:"lak-SON grahv",example:"A: Où est ta mère?\nB: Elle est à la maison.",exampleEn:"A: Where is your mother?\nB: She is at home.",note:"è = open EH sound (mère, père, frère).\nà = distinguishes: à (to/at) vs a (has).\nù = only in où (where) vs ou (or)."},
          {type:"teach",kind:"info",nl:"La cédille: ç",en:"Cedilla: forces soft C before a, o, u",phonetic:"lah say-DEE-yuh",example:"A: Tu parles français?\nB: Oui, le garçon aussi!",exampleEn:"A: Do you speak French?\nB: Yes, the boy too!",note:"Without cedilla, C before a/o/u = K sound.\nWith cedilla: ça, garçon, leçon, reçu all have S sound.\nç never appears before e or i (C is already soft there)."},
          {type:"mc",q:"é always produces which sound?",opts:["Open EH as in bed","Closed AY as in say","Silent","OO as in food"],ans:"Closed AY as in say",hint:"The accent aigu always makes E sound like ay."},
          {type:"mc",q:"What is the difference between 'a' and 'à' in French?",opts:["No difference at all","a = has, à = to/at","a = to, à = has","à is formal, a is informal"],ans:"a = has, à = to/at",hint:"The accent grave distinguishes these two homophones."},
          {type:"mc",q:"In 'garçon', the cedilla on the C makes it sound like:",opts:["K","S","SH","CH"],ans:"S",hint:"Cedilla forces a soft S sound before a, o, u."},
          {type:"mc",q:"The circumflex (ˆ) in 'hôtel' historically marks:",opts:["A longer vowel","A lost letter S (hostel)","A silent letter","An emphasis mark"],ans:"A lost letter S (hostel)",hint:"Many circumflexes trace to an old S that dropped out."},
          {type:"match",pairs:[{nl:"é",en:"closed AY sound"},{nl:"è",en:"open EH sound"},{nl:"ç",en:"S sound before a/o/u"},{nl:"ê",en:"historical lost S"}]},
        ]},
      ]},

    // ── STAGE 2: VOWELS ──
    {id:"fr_fp_s2",title:"Vowels: Oral & Nasal",desc:"French vowels, the U vs OU trap, and the four nasal vowels",icon:"🔊",
      lessons:[
        {id:"fr_fp_s2_l1",title:"Oral Vowels",icon:"🔊",xp:15,board:true,steps:[
          {type:"intro",title:"French has more vowel sounds than English",desc:"French distinguishes open and closed E, open and closed O, and has the rounded U that does not exist in English. Getting these right is essential.",goals:["Distinguish open and closed E","Know U vs OU","Recognize the main vowel spellings"]},
          {type:"teach",kind:"info",nl:"é vs è",en:"Closed E vs Open E",phonetic:"ay vs eh",example:"A: Tu préfères le café ou le thé?\nB: Je préfère le thé avec du lait.",exampleEn:"A: Do you prefer coffee or tea?\nB: I prefer tea with milk.",note:"é = closed, like ay in say (café, été).\nè = open, like e in bed (mère, père).\nThis distinction matters for meaning and grammar."},
          {type:"teach",kind:"info",nl:"U vs OU",en:"The critical vowel distinction",phonetic:"ew vs oo",example:"A: Tu vas tout droit dans la rue?\nB: Oui, tout droit, puis à gauche.",exampleEn:"A: You go straight down the street?\nB: Yes, straight, then left.",note:"U (tu, rue): say ee with rounded lips.\nOU (tout, vous): like oo in food.\nMixing them changes meaning: tu (you) vs tout (all)."},
          {type:"teach",kind:"info",nl:"O sounds: o, ô, au, eau",en:"Multiple spellings for the O sound",phonetic:"oh",example:"A: C'est un beau château!\nB: Oui, le mot juste!",exampleEn:"A: It's a beautiful castle!\nB: Yes, exactly the right word!",note:"All produce similar OH sounds:\no in mot (word), ô in hôtel,\nau in auto, eau in beau.\neau is the most distinctly French spelling."},
          {type:"mc",q:"'tu' and 'tout' differ in which vowel?",opts:["tu has U (ew), tout has OU (oo)","Both have the same vowel","tu has OU, tout has U","Neither has a vowel"],ans:"tu has U (ew), tout has OU (oo)",hint:"U = ee with rounded lips. OU = oo as in food."},
          {type:"mc",q:"The letter combination 'eau' sounds like:",opts:["ee-ah-oo","oh","ee-ow","aw"],ans:"oh",hint:"eau, au, and ô all produce the same closed O sound."},
          {type:"mc",q:"'mère' (mother) has which type of E?",opts:["Closed E (ay)","Open E (eh)","Nasal E","Silent E"],ans:"Open E (eh)",hint:"The accent grave on è signals an open EH sound."},
          {type:"match",pairs:[{nl:"é (café)",en:"closed AY"},{nl:"è (mère)",en:"open EH"},{nl:"u (tu)",en:"rounded EW"},{nl:"ou (vous)",en:"OO as in food"}]},
        ]},
        {id:"fr_fp_s2_l2",title:"Nasal Vowels",icon:"👃",xp:15,board:true,steps:[
          {type:"intro",title:"Four vowels that vibrate in the nose",desc:"When a vowel is followed by N or M (and no vowel after), the vowel nasalizes. The N/M is NOT pronounced. This is completely foreign to English speakers.",goals:["Recognize the 4 nasal vowels by spelling","Know the N/M is not pronounced","Practice minimal pairs"]},
          {type:"teach",kind:"info",nl:"an / en",en:"First nasal: ah through the nose",phonetic:"on (like ong without the g)",example:"A: L'enfant mange dans la chambre.\nB: Depuis quand?",exampleEn:"A: The child eats in the bedroom.\nB: Since when?",note:"Spellings: an, am, en, em.\nDo NOT pronounce the N or M!\nThe vowel vibrates in the nasal cavity.\nExamples: dans, chambre, enfant, temps."},
          {type:"teach",kind:"info",nl:"on",en:"Second nasal: oh through the nose",phonetic:"on (like ong without the g)",example:"A: Ton nom, c'est quoi?\nB: Mon nom, c'est Simon.",exampleEn:"A: What is your name?\nB: My name is Simon.",note:"Spellings: on, om.\nExamples: bon, nom, maison, pont, bombe.\nThe O nasalizes. The N/M disappears."},
          {type:"teach",kind:"info",nl:"in / ain",en:"Third nasal: eh through the nose",phonetic:"an (like ang without the g)",example:"A: Tu veux du pain ou du vin?\nB: Du vin, s'il te plaît.",exampleEn:"A: Do you want bread or wine?\nB: Wine, please.",note:"Spellings: in, im, ain, ein, yn.\nExamples: vin, simple, pain, plein.\nThis nasal is brighter than an/en."},
          {type:"teach",kind:"info",nl:"un",en:"Fourth nasal: uh through the nose",phonetic:"un (like ung without the g)",example:"A: Tu as un parfum?\nB: Oui, un brun foncé.",exampleEn:"A: Do you have a perfume?\nB: Yes, a dark brown one.",note:"Spellings: un, um.\nExamples: un, brun, parfum.\nIn modern French, many speakers merge un with in.\nBut the distinction still exists in careful speech."},
          {type:"mc",q:"In 'enfant', the letters E-N produce:",opts:["The sounds eh then n separately","A nasal vowel (no N pronounced)","A silent syllable","An emphasis on the N"],ans:"A nasal vowel (no N pronounced)",hint:"Vowel + N/M before a consonant = nasal vowel. N disappears."},
          {type:"mc",q:"'bon' (good) contains which nasal vowel?",opts:["an/en nasal","on nasal","in nasal","un nasal"],ans:"on nasal",hint:"The letters O + N before a consonant or word end = on nasal."},
          {type:"mc",q:"'pain' (bread) contains which nasal vowel?",opts:["an/en nasal","on nasal","in/ain nasal","un nasal"],ans:"in/ain nasal",hint:"The letters A-I-N produce the in/ain nasal."},
          {type:"mc",q:"When does a vowel + N/M NOT nasalize?",opts:["When another vowel follows the N/M","When the word is short","When the word is a verb","It always nasalizes"],ans:"When another vowel follows the N/M",hint:"bonne = bon-nuh (not nasal). bon = nasal. The following vowel breaks it."},
          {type:"match",pairs:[{nl:"an/en (dans)",en:"nasalized AH"},{nl:"on (bon)",en:"nasalized OH"},{nl:"in/ain (vin)",en:"nasalized EH"},{nl:"un (brun)",en:"nasalized UH"}]},
        ]},
      ]},

    // ── STAGE 3: CONSONANTS & LIAISON ──
    {id:"fr_fp_s3",title:"Consonants & Liaison",desc:"The French R, CH, liaison rules, and consonant traps",icon:"🧩",
      lessons:[
        {id:"fr_fp_s3_l1",title:"The French R and CH",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"Two sounds that define French",desc:"The French R is uvular (from the throat) and CH always says SH. Neither sounds like English. Mastering these two sounds will transform your French.",goals:["Produce the uvular R","Know CH = SH always","Handle R in different positions"]},
          {type:"teach",kind:"info",nl:"Le R français",en:"The French R: uvular",phonetic:"like a gentle gargle",example:"A: Tu regardes le restaurant rouge?\nB: Oui, c'est le restaurant de Pierre.",exampleEn:"A: Are you looking at the red restaurant?\nB: Yes, it is Pierre's restaurant.",note:"Made at the back of the throat. The uvula vibrates.\nNot rolled (that is Spanish/Italian R).\nNot from the tongue tip (that is English R).\nPractice: gargle gently, then add a vowel."},
          {type:"teach",kind:"info",nl:"CH = SH",en:"CH always makes the SH sound",phonetic:"sh as in shoe",example:"A: Le chat cherche un chocolat.\nB: Les chats adorent le chocolat!",exampleEn:"A: The cat is looking for a chocolate.\nB: Cats love chocolate!",note:"NEVER like English CH in chair.\nAlways SH: chat = shah, chose = shohz.\nThis is one of the easiest French rules: ch = sh, always."},
          {type:"teach",kind:"info",nl:"GN = NY",en:"GN makes the NY sound",phonetic:"ny as in canyon",example:"A: La montagne est magnifique!\nB: C'est la campagne française.",exampleEn:"A: The mountain is magnificent!\nB: It is the French countryside.",note:"Like Spanish n with tilde, or English ny in canyon.\nmontagne = mon-TAH-nyuh.\nchampagne, signe, gagner all use this sound."},
          {type:"mc",q:"French CH in 'chat' (cat) sounds like:",opts:["CH as in chair","SH as in shoe","K as in cat","S as in city"],ans:"SH as in shoe",hint:"French CH is always the SH sound."},
          {type:"mc",q:"The French R is best described as:",opts:["Rolled with the tongue tip","Made at the back of the throat","Identical to English R","Always silent"],ans:"Made at the back of the throat",hint:"French R is uvular: throat vibration, not tongue."},
          {type:"mc",q:"GN in 'montagne' sounds like:",opts:["G then N separately","NY as in canyon","Just N","NG as in sing"],ans:"NY as in canyon",hint:"GN is a single sound: the NY combination."},
          {type:"match",pairs:[{nl:"R",en:"uvular (throat)"},{nl:"CH",en:"SH sound"},{nl:"GN",en:"NY sound"},{nl:"QU",en:"K sound (u silent)"}]},
        ]},
        {id:"fr_fp_s3_l2",title:"Liaison",icon:"🔗",xp:15,board:true,steps:[
          {type:"intro",title:"When silent consonants wake up",desc:"Liaison is one of the most distinctive features of French. A normally-silent final consonant is pronounced when the next word starts with a vowel. This connects words together.",goals:["Know when liaison is mandatory","Know when liaison is forbidden","Handle the most common liaisons"]},
          {type:"teach",kind:"info",nl:"Liaison obligatoire",en:"Mandatory liaison",phonetic:"lee-ay-ZON ob-lee-gah-TWAHR",example:"les amis = lez-ah-MEE\nnous avons = nooz-ah-VON\ndeux enfants = duhz-on-FON",exampleEn:"The friends, we have, two children: silent consonants wake up before vowels",note:"Required between:\n1. Article + noun: les amis, un enfant\n2. Pronoun + verb: nous avons, ils ont\n3. Number + noun: deux amis, trois ans\n4. Adjective + noun: petit ami, grand homme"},
          {type:"teach",kind:"info",nl:"Liaison interdite",en:"Forbidden liaison",phonetic:"lee-ay-ZON an-tair-DEET",example:"et il (ay eel, never ez-eel)\nles / haricots (lay ah-ree-KOH)",exampleEn:"After 'et' and before 'h aspiré': never link",note:"NEVER liaison after et (and).\nNEVER liaison before h aspiré words.\nNEVER liaison after a singular noun.\nThese are strict rules, not preferences."},
          {type:"teach",kind:"info",nl:"Comment ça sonne",en:"How liaison consonants sound",phonetic:"koh-MON sah SONN",example:"S/X → Z sound: les amis (lez), deux amis (duhz)\nD → T sound: grand ami (gron-tah-MEE)\nN → N sound: un ami (uhn-ah-MEE)",exampleEn:"The consonant in liaison often changes sound",note:"S and X both become Z in liaison.\nD becomes T in liaison.\nN stays N.\nThese sound changes are consistent."},
          {type:"mc",q:"In 'les amis' (the friends), the S in 'les' is:",opts:["Silent as usual","Pronounced as Z because of liaison","Pronounced as S","Dropped entirely"],ans:"Pronounced as Z because of liaison",hint:"S in liaison always becomes a Z sound."},
          {type:"mc",q:"Liaison after 'et' (and) is:",opts:["Mandatory","Optional","Forbidden","Depends on the word"],ans:"Forbidden",hint:"Et never triggers liaison. et il = ay eel."},
          {type:"mc",q:"In 'un ami' (a friend), the N in 'un' is:",opts:["Silent","Pronounced as N (liaison)","Pronounced as M","Dropped"],ans:"Pronounced as N (liaison)",hint:"The nasal vowel resolves, and the N connects to the next vowel."},
          {type:"mc",q:"Which triggers mandatory liaison?",opts:["Noun + adjective","Verb + verb","Article + noun starting with vowel","Et + any word"],ans:"Article + noun starting with vowel",hint:"Articles always link to following vowel-initial nouns."},
        ]},
        {id:"fr_fp_s3_l3",title:"Consonant Traps",icon:"⚡",xp:15,board:true,steps:[
          {type:"intro",title:"Letters that deceive English speakers",desc:"Several French consonant patterns look like English but sound different. TH says T. G before E/I says ZH. QU says K.",goals:["Know TH = T in French","Know G has two sounds","Handle QU and PH"]},
          {type:"teach",kind:"info",nl:"TH = T",en:"TH is just a T sound",phonetic:"t",example:"le thé (tay), le théâtre (tay-AH-truh), sympathique (san-pah-TEEK)",exampleEn:"French TH is NEVER the English th sound (as in the or think)",note:"No tongue between teeth. Just plain T.\nthé = tay (not thee). théâtre = tay-ah-truh.\nThis is one of the simplest rules."},
          {type:"teach",kind:"info",nl:"G: hard and soft",en:"G before a/o/u = hard. G before e/i = ZH.",phonetic:"g or zh",example:"Hard: gare (station), gomme (eraser), aigu (sharp)\nSoft: manger (to eat), fragile, rouge (red)",exampleEn:"The vowel after G determines its sound",note:"Hard G (before a, o, u): like English go.\nSoft G (before e, i): ZH sound, like s in pleasure.\nSame rule as C: vowel after determines hard or soft."},
          {type:"teach",kind:"info",nl:"QU = K",en:"QU always sounds like K (U is silent)",phonetic:"k",example:"que (kuh), quand (kon), quatre (KAH-truh), pourquoi (poor-KWAH)",exampleEn:"The U after Q is always silent in French",note:"Never say kwuh. Just k.\nque = kuh. quand = kon. qui = kee.\nException: in some words like aquarium, both letters sound."},
          {type:"mc",q:"French TH in 'thé' (tea) sounds like:",opts:["English TH in think","English TH in the","Just T","Just H"],ans:"Just T",hint:"French TH = plain T. No tongue between teeth."},
          {type:"mc",q:"G in 'manger' (to eat) sounds like:",opts:["Hard G as in go","ZH as in pleasure","Silent","J as in jump"],ans:"ZH as in pleasure",hint:"G before E = soft G = ZH sound."},
          {type:"mc",q:"QU in 'quatre' (four) sounds like:",opts:["KW as in queen","K only (U silent)","GW","Just Q alone"],ans:"K only (U silent)",hint:"QU = K in French. The U is always silent."},
          {type:"mc",q:"PH in 'pharmacie' sounds like:",opts:["P then H","F (same as English)","PH blended","Silent"],ans:"F (same as English)",hint:"PH = F in French, just like in English."},
        ]},
      ]},

    // ── STAGE 4: SILENT LETTERS & SPELLING ──
    {id:"fr_fp_s4",title:"Silent Letters & Spelling",desc:"The CaReFuL rule, silent E, and spelling patterns",icon:"🔇",
      lessons:[
        {id:"fr_fp_s4_l1",title:"Silent Final Consonants",icon:"🔇",xp:15,board:true,steps:[
          {type:"intro",title:"Most final consonants are silent",desc:"French spelling preserves many letters that are no longer pronounced. The mnemonic CaReFuL helps: C, R, F, L are usually pronounced at word end. Most others are silent.",goals:["Apply the CaReFuL rule","Know the major exceptions","Handle silent -ent in verbs"]},
          {type:"teach",kind:"info",nl:"La règle CaReFuL",en:"The CaReFuL rule: C, R, F, L are usually pronounced",phonetic:"kah-ruh-FUL",example:"C: avec, sac. R: amour, voir. F: actif, bref. L: animal, sel.\nSilent: petit (t), dans (s), deux (x), riz (z), trop (p).",exampleEn:"CaReFuL consonants are pronounced. Most others are silent at word end.",note:"CaReFuL = C, R, F, L: usually pronounced.\nD, T, S, X, Z, P at word end: usually silent.\nExceptions exist: blanc (C silent), parler (R silent in -er verbs)."},
          {type:"teach",kind:"info",nl:"-ent verbal",en:"The verb ending -ent is ALWAYS silent",phonetic:"silent!",example:"ils parlent = eel PARL (not par-LONT)\nelles mangent = ell MONZH (not mon-ZHONT)",exampleEn:"The third person plural -ent ending is completely silent",note:"This is the biggest spelling trap in French.\nils parlent looks like it should rhyme with parent.\nIt does NOT. The -ent is 100% silent on verbs.\nNon-verbs: moment, lent, argent DO pronounce the -ent."},
          {type:"mc",q:"The T in 'petit' (small) is:",opts:["Pronounced","Silent","Sometimes pronounced","Depends on accent"],ans:"Silent",hint:"Final T is not in CaReFuL. It is silent."},
          {type:"mc",q:"The R in 'amour' (love) is:",opts:["Silent","Pronounced","Optional","Depends on region"],ans:"Pronounced",hint:"R is in CaReFuL. Final R is usually pronounced."},
          {type:"mc",q:"In 'ils parlent' (they speak), the -ent is:",opts:["Pronounced as ONT","Pronounced as ENT","Completely silent","Pronounced as ON"],ans:"Completely silent",hint:"Verb ending -ent is always silent. ils parlent = eel PARL."},
          {type:"mc",q:"Which mnemonic helps remember which final consonants are usually pronounced?",opts:["CaReFuL: C, R, F, L","SToP: S, T, P","VoWeL: V, W, L","BReaD: B, R, D"],ans:"CaReFuL: C, R, F, L",hint:"C, R, F, L = the four consonants usually pronounced at word end."},
          {type:"match",pairs:[{nl:"Final C (avec)",en:"Pronounced"},{nl:"Final T (petit)",en:"Silent"},{nl:"Final F (actif)",en:"Pronounced"},{nl:"Final S (dans)",en:"Silent"}]},
        ]},
        {id:"fr_fp_s4_l2",title:"Silent E and Elision",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"Silent E and the l' contraction",desc:"E at the end of a word is usually silent. When le or la precedes a vowel, they contract to l'. This is called elision, and it is mandatory.",goals:["Know final E is usually silent","Understand mandatory elision","Handle l', j', n', d', s'"]},
          {type:"teach",kind:"info",nl:"Le E muet",en:"Silent E at word end",phonetic:"uh mew-AY",example:"grande = grond (not gron-DUH)\ntable = TAH-bluh (barely audible)\nrouge = roozh",exampleEn:"Final E is silent or barely whispered. But it makes the preceding consonant audible.",note:"Without the final E, the consonant would be silent:\ngrand = gron (D silent). grande = grond (D audible).\nFinal E signals feminine gender in many words."},
          {type:"teach",kind:"info",nl:"L'élision",en:"Elision: le/la become l' before vowels",phonetic:"lay-lee-ZYON",example:"le + homme = l'homme\nla + école = l'école\nje + ai = j'ai\nne + ai = n'ai",exampleEn:"When certain short words meet a vowel, they drop their vowel and merge",note:"Mandatory for: le, la, je, me, te, se, ne, de, que.\nle homme is WRONG. l'homme is correct.\nla école is WRONG. l'école is correct.\nThis is not optional. It is a strict rule."},
          {type:"mc",q:"'la école' in French is:",opts:["Correct as written","Wrong: must be l'école","Wrong: must be le école","Optional either way"],ans:"Wrong: must be l'école",hint:"Elision before vowels is mandatory. la + vowel = l'."},
          {type:"mc",q:"In 'grande' (big, feminine), the final E is:",opts:["Pronounced clearly as AY","Silent, but makes the D audible","Completely meaningless","Pronounced as EE"],ans:"Silent, but makes the D audible",hint:"Final E is silent but reveals the preceding consonant."},
          {type:"mc",q:"'je ai' in French must become:",opts:["je ai (two words)","j'ai (elision)","ji (shortened)","jai (no apostrophe)"],ans:"j'ai (elision)",hint:"Je drops its E before a vowel. Mandatory elision."},
          {type:"mc",q:"Elision in French is:",opts:["Optional for style","Mandatory before vowel-initial words","Only in formal speech","Only in writing"],ans:"Mandatory before vowel-initial words",hint:"French requires elision. It is never optional."},
        ]},
      ]},

    // ── STAGE 5: PRONUNCIATION PATTERNS ──
    {id:"fr_fp_s5",title:"Pronunciation Patterns",desc:"Word stress, rhythm, and common spelling-to-sound rules",icon:"🎵",
      lessons:[
        {id:"fr_fp_s5_l1",title:"Stress & Rhythm",icon:"💬",xp:15,board:true,steps:[
          {type:"intro",title:"French stress always falls on the last syllable",desc:"Unlike English (which stresses various syllables), French ALWAYS stresses the final syllable of a word or phrase. This gives French its distinctive flowing rhythm.",goals:["Know stress is always final","Understand syllable-timed rhythm","Contrast with English stress patterns"]},
          {type:"teach",kind:"info",nl:"L'accent tonique",en:"Stress on the last syllable",phonetic:"lak-SON toh-NEEK",example:"pa-RLEH (parler), res-toh-RON (restaurant), u-nee-vair-see-TAY (université)",exampleEn:"Stress always falls on the LAST syllable, no exceptions",note:"This is one of the simplest French rules.\nEvery word: stress the last syllable.\nIn a phrase, stress the last syllable of the last word.\nEnglish speakers must resist stressing earlier syllables."},
          {type:"teach",kind:"info",nl:"Le rythme syllabique",en:"Syllable-timed rhythm",phonetic:"luh REETM see-lah-BEEK",example:"English: I WANT to GO to the STORE (stress-timed).\nFrench: je-veux-al-ler-au-ma-ga-ZIN (syllable-timed).",exampleEn:"English bounces between stressed and unstressed. French flows evenly.",note:"French gives roughly equal time to each syllable.\nEnglish rushes through unstressed syllables.\nThis is why French sounds smooth and even."},
          {type:"mc",q:"In French, word stress falls on:",opts:["The first syllable","The second syllable","The last syllable","It varies by word"],ans:"The last syllable",hint:"French stress is always final. No exceptions."},
          {type:"mc",q:"'restaurant' in French is stressed as:",opts:["RES-toh-ron","res-TOH-ron","res-toh-RON","res-toh-ron (no stress)"],ans:"res-toh-RON",hint:"Last syllable is always stressed in French."},
          {type:"mc",q:"French rhythm is described as:",opts:["Stress-timed like English","Syllable-timed: even flow","Random timing","Monotone with no rhythm"],ans:"Syllable-timed: even flow",hint:"Each syllable gets roughly equal time, creating a flowing sound."},
          {type:"mc",q:"An English speaker learning French should focus on:",opts:["Stressing the first syllable more","Giving each syllable equal weight","Speaking faster","Adding more pauses"],ans:"Giving each syllable equal weight",hint:"French does not rush or skip syllables like English does."},
        ]},
        {id:"fr_fp_s5_l2",title:"Spelling-to-Sound Rules",icon:"📐",xp:15,board:true,steps:[
          {type:"intro",title:"French spelling is more regular than English",desc:"While French has many silent letters, the spelling-to-sound rules are actually quite consistent. Once you learn the patterns, you can pronounce almost any word.",goals:["Know the -tion, -ment, -eur patterns","Handle -ille and -aille","Recognize common endings"]},
          {type:"teach",kind:"info",nl:"-tion = -SYON",en:"-tion ending always says SYON",phonetic:"SYON",example:"nation (nah-SYON), situation (see-tew-ah-SYON), attention (ah-ton-SYON)",exampleEn:"Every -tion word ends in SYON, never SHUN like English",note:"This is highly regular. Hundreds of words follow this.\nEnglish -tion = SHUN. French -tion = SYON.\nThe T becomes an S sound before the -ion."},
          {type:"teach",kind:"info",nl:"-ment = -MON",en:"-ment ending says MON (nasal)",phonetic:"mon",example:"exactement (eg-zak-tuh-MON), vraiment (vreh-MON), moment (moh-MON)",exampleEn:"The -ment ending is a nasal MON, not MENT as in English",note:"-ment at word end = nasal MON.\nThe E before the nasal disappears into it.\nHundreds of adverbs end this way."},
          {type:"teach",kind:"info",nl:"-eur = -UR",en:"-eur ending: open vowel + R",phonetic:"ur",example:"docteur (dok-TUR), professeur (pro-feh-SUR), couleur (koo-LUR)",exampleEn:"French -eur ending: like English 'ur' in fur",note:"Very common ending for professions and abstract nouns.\nMasculine: le docteur, le professeur.\nFeminine forms often end in -euse: chanteuse, danseuse."},
          {type:"mc",q:"French -tion is pronounced:",opts:["SHUN like English","SYON","TYON","TION with all letters"],ans:"SYON",hint:"French -tion = SYON. The T becomes S before -ion."},
          {type:"mc",q:"French -ment in 'exactement' sounds like:",opts:["MENT as in English","MON (nasal)","MONT","MONG"],ans:"MON (nasal)",hint:"The -ment ending nasalizes to MON."},
          {type:"mc",q:"'-ille' in 'fille' (girl) sounds like:",opts:["ILL as in English pill","EE-yuh","ILL-eh","EEL"],ans:"EE-yuh",hint:"-ille usually produces a Y sound: fille = FEE-yuh."},
          {type:"mc",q:"French spelling-to-sound rules are:",opts:["Completely random","More regular than English once you learn the patterns","Identical to English","Impossible to learn"],ans:"More regular than English once you learn the patterns",hint:"French has more silent letters but more consistent rules."},
        ]},
      ]},

    // ── STAGE 6: GRAMMAR PREVIEW ──
    {id:"fr_fp_s6",title:"Grammar Preview",desc:"Two genders, the Agreement Web, and verb groups",icon:"🏗️",
      lessons:[
        {id:"fr_fp_s6_l1",title:"Two Genders: le and la",icon:"🎭",xp:20,board:true,steps:[
          {type:"intro",title:"Every French noun has a gender",desc:"French has two grammatical genders: masculine (le) and feminine (la). Gender affects articles, adjectives, and agreement. Before vowels, both become l'. Color-coding: le = blue, la = coral.",goals:["Know the two genders: le and la","Know gender affects the whole sentence","Accept that gender must be learned with each noun"]},
          {type:"teach",kind:"info",nl:"le (masculin)",en:"masculine article",phonetic:"luh",example:"A: Qu'est-ce que c'est?\nB: C'est le livre.",exampleEn:"A: What is it?\nB: It is the book.",note:"le marks masculine nouns. Color: blue.\nSome patterns help: -age, -ment endings are often masculine.\nBut many nouns have unpredictable gender. Learn it with each word."},
          {type:"teach",kind:"info",nl:"la (féminin)",en:"feminine article",phonetic:"lah",example:"A: Tu vois la maison?\nB: Oui, c'est la maison de Marie.",exampleEn:"A: Do you see the house?\nB: Yes, it is Marie's house.",note:"la marks feminine nouns. Color: coral.\nPatterns: -tion, -ité, -ence, -ure endings are almost always feminine.\nla is also used for specific feminine people: la fille, la mère."},
          {type:"teach",kind:"info",nl:"l' (élision)",en:"Before vowels: gender hidden!",phonetic:"l",example:"l'homme (masculine), l'école (feminine), l'enfant (masculine)",exampleEn:"Before vowels, le and la both become l'. You cannot hear the gender!",note:"This is why you MUST memorize gender.\nIs l'arbre masculine or feminine? (masculine: le arbre = l'arbre)\nIs l'eau masculine or feminine? (feminine: la eau = l'eau)\nYou only know from memory."},
          {type:"tip",title:"Learn le/la with every noun",text:"Never learn a noun without its article.\nNot just: livre. Always: le livre.\nNot just: maison. Always: la maison.\nThe article is part of the vocabulary item.\n\nPhonetic patterns help:\n-age = usually le (le voyage, le fromage)\n-ment = usually le (le moment, le gouvernement)\n-tion = usually la (la nation, la situation)\n-ité = usually la (la cité, la qualité)",deepDive:{title:"Why does French have gender?",text:"French evolved from Latin, which had three genders (masculine, feminine, neuter). Latin's neuter merged into masculine over centuries. The result: two genders with historical but not logical assignments.\n\nKnowing this helps: gender is a fossil, not a meaning system. Le soleil (sun, masculine) and la lune (moon, feminine) are arbitrary. In German, it is the opposite: die Sonne (sun, feminine) and der Mond (moon, masculine)."}},
          {type:"mc",q:"How many grammatical genders does French have?",opts:["One: no gender","Two: masculine and feminine","Three: masculine, feminine, neuter","Four genders"],ans:"Two: masculine and feminine",hint:"le (masculine) and la (feminine). That is it."},
          {type:"mc",q:"Before a vowel, le and la both become:",opts:["les","l'","un","de"],ans:"l'",hint:"Elision hides the gender before vowel-initial words."},
          {type:"mc",q:"Nouns ending in -tion are almost always:",opts:["Masculine (le)","Feminine (la)","Either gender","Neuter"],ans:"Feminine (la)",hint:"-tion endings: la nation, la situation, la tradition."},
          {type:"mc",q:"Best practice when learning a new French noun:",opts:["Learn the word alone first","Learn the article with the noun from day one","Only learn articles for feminine nouns","Guess from context"],ans:"Learn the article with the noun from day one",hint:"The article is part of the word. Always learn le/la together with the noun."},
        ]},
        {id:"fr_fp_s6_l2",title:"The Agreement Web",icon:"🕸️",xp:20,board:true,steps:[
          {type:"intro",title:"Everything agrees with everything",desc:"French's central metaphor is the Agreement Web. Adjectives agree with nouns in gender and number. Past participles agree with subjects. Articles match nouns. Every part of the sentence is connected.",goals:["Understand adjective agreement","See how agreement creates a web","Know this affects speaking and writing"]},
          {type:"teach",kind:"info",nl:"L'accord de l'adjectif",en:"Adjective agreement: gender and number",phonetic:"lah-KOR duh lad-zhek-TEEF",example:"un grand livre (m.sg.), une grande maison (f.sg.)\nde grands livres (m.pl.), de grandes maisons (f.pl.)",exampleEn:"The adjective changes form to match the noun's gender and number",note:"Masculine singular: grand (base form).\nFeminine: add -e: grande.\nPlural: add -s: grands / grandes.\nThe ending changes are often silent in speech!"},
          {type:"teach",kind:"info",nl:"L'accord du participe passé",en:"Past participle agreement with etre",phonetic:"lah-KOR dew par-tee-SEEP pah-SAY",example:"Il est allé. (m.sg.)\nElle est allée. (f.sg. +e)\nIls sont allés. (m.pl. +s)\nElles sont allées. (f.pl. +es)",exampleEn:"With etre verbs, the past participle matches the subject",note:"This applies ONLY with etre as the helper verb.\nWith avoir, no agreement (usually).\nThe extra letters are often silent in speech:\nallé, allée, allés, allées all sound the same!"},
          {type:"tip",title:"The Agreement Web: French's core pattern",text:"In French, grammar creates a web of connections:\n\n1. Article agrees with noun: le livre, la table\n2. Adjective agrees with noun: grand livre, grande table\n3. Past participle agrees with subject (etre): il est parti, elle est partie\n4. Pronoun agrees with referent: il le voit, elle la voit\n\nThis web is the heartbeat of French grammar. Every sentence is a small agreement puzzle.",deepDive:{title:"Why so much agreement?",text:"Latin had extensive agreement systems, and French inherited them. While English dropped most of its endings (Old English had them too), French kept them.\n\nThe good news: many agreement changes are SILENT in spoken French. Grand, grande, grands, grandes all sound nearly identical. So agreement matters more in writing than in speech.\n\nThe practical takeaway: learn to hear the base word. The written agreements will come with practice."}},
          {type:"mc",q:"The feminine form of 'grand' (big) is:",opts:["grand","grande","grands","grander"],ans:"grande",hint:"Add -e for feminine in most French adjectives."},
          {type:"mc",q:"In 'Elle est allée', the extra -e on allée indicates:",opts:["Past tense","Feminine subject","Plural","A question"],ans:"Feminine subject",hint:"With etre, the past participle agrees with the subject's gender."},
          {type:"mc",q:"French adjective agreement changes are often:",opts:["Loud and clear in speech","Silent in speech, visible in writing","Only in formal French","Optional"],ans:"Silent in speech, visible in writing",hint:"Grand/grande/grands/grandes often sound identical."},
          {type:"mc",q:"The Agreement Web means:",opts:["Only verbs change form","Articles, adjectives, and participles all match the noun","Only written French has agreement","Agreement is optional"],ans:"Articles, adjectives, and participles all match the noun",hint:"Everything connects to the noun's gender and number."},
        ]},
      ]},
  ]},
  en:{name:"English Foundations Play",icon:"🇬🇧",blueprint:"latin_simple",stages:[]},
  es:{name:"Spanish Foundations Play",icon:"🇪🇸",blueprint:"latin_simple",stages:[
    // ── STAGE 1: THE ALPHABET & Ñ ──
    {id:"es_fp_s1",title:"The Spanish Alphabet",desc:"27 letters, Ñ, and the sounds that differ from English",icon:"🔤",
      lessons:[
        {id:"es_fp_s1_l1",title:"The Alphabet & Ñ",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"Welcome to Spanish Sounds!",desc:"Spanish is one of the most phonetic languages in the world. What you see is what you say! This lesson covers the alphabet and the special letter Ñ.",goals:["Know Spanish has 27 letters (26 + Ñ)","Recognize Ñ as a separate letter","Understand Spanish is nearly phonetic"]},
          {type:"teach",kind:"info",nl:"El alfabeto",en:"The Spanish alphabet",phonetic:"el al-fa-BEH-to",example:"A: El alfabeto español tiene 27 letras.\nB: ¿Veintisiete? ¿No veintiséis?",exampleEn:"A: The Spanish alphabet has 27 letters.\nB: Twenty-seven? Not twenty-six?",note:"27 letters: the 26 Latin letters plus Ñ.\nÑ is NOT an accent on N. It is its own letter.\nIt comes after N in alphabetical order."},
          {type:"teach",kind:"info",nl:"Ñ",en:"The letter eñe",phonetic:"EH-nyeh",example:"A: ¿Cómo se dice 'year' en español?\nB: Año. A-Ñ-O.",exampleEn:"A: How do you say 'year' in Spanish?\nB: Año. A-Ñ-O.",note:"Ñ sounds like NY in canyon or onion.\nespaÑol, niÑo, señor, año, mañana.\nAlways written with the tilde (~) above."},
          {type:"mc",q:"How many letters does the Spanish alphabet have?",opts:["26","27","28","30"],ans:"27",hint:"One more than English, thanks to a unique letter."},
          {type:"mc",q:"Ñ sounds like the NY in which English word?",opts:["Funny","Canyon","Money","Nancy"],ans:"Canyon",hint:"Think of the ny sound blended together."},
          {type:"teach",kind:"info",nl:"H muda",en:"H is always silent",phonetic:"AH-cheh MOO-da",example:"A: ¿Cómo se pronuncia 'hola'?\nB: Se dice OLA. La H no suena.",exampleEn:"A: How do you pronounce 'hola'?\nB: You say OLA. The H has no sound.",note:"H is ALWAYS silent. No exceptions.\nhola = OLA, hombre = OM-breh, hacer = a-SER.\nNever pronounce the H in Spanish."},
          {type:"mc",q:"The H in 'hombre' (man) is:",opts:["Pronounced like English H","Always silent","Sometimes silent","Pronounced as a breathy sound"],ans:"Always silent",hint:"Spanish H makes zero sound. Always."},
          {type:"teach",kind:"info",nl:"B y V",en:"B and V sound identical",phonetic:"beh / oo-beh",example:"A: ¿'Beso' y 'vaso' empiezan con el mismo sonido?\nB: ¡Sí! B y V suenan igual.",exampleEn:"A: Do 'beso' and 'vaso' start with the same sound?\nB: Yes! B and V sound identical.",note:"B and V are the SAME sound in Spanish.\nSpanish speakers distinguish them by spelling only.\nbeber, vivir, boca, vino: all start the same way."},
          {type:"mc",q:"In Spanish, B and V are:",opts:["Different sounds like in English","Identical in sound","Opposite sounds","Silent letters"],ans:"Identical in sound",hint:"Unlike English, these two letters share one sound."},
          {type:"match",pairs:[{nl:"Ñ",en:"NY sound (canyon)"},{nl:"H",en:"Always silent"},{nl:"B/V",en:"Identical sounds"},{nl:"J",en:"Throaty H sound"}]},
        ]},
        {id:"es_fp_s1_l2",title:"Tricky Consonants",icon:"⚡",xp:15,board:true,steps:[
          {type:"intro",title:"Consonants that trap English speakers",desc:"Several Spanish consonants look familiar but sound different from English. J, LL, RR, and the soft C/G are the main traps.",goals:["Know J sounds like a throaty H","Know LL sounds like Y","Understand C and G each have two sounds"]},
          {type:"teach",kind:"info",nl:"J y G suave",en:"J and soft G: the throaty H sound",phonetic:"HO-ta / heh",example:"A: ¿Cómo suena la J en español?\nB: Como una H fuerte: jefe = HEH-feh.",exampleEn:"A: How does J sound in Spanish?\nB: Like a strong H: jefe = HEH-feh.",note:"J ALWAYS makes a throaty H sound (like Scottish loch).\nG before E or I makes the same sound.\njefe, gente, girar, jardín, general."},
          {type:"teach",kind:"info",nl:"LL",en:"LL: the Y sound",phonetic:"EH-yeh",example:"A: ¿Cómo se pronuncia 'calle'?\nB: CA-yeh. La LL suena como Y.",exampleEn:"A: How do you pronounce 'calle'?\nB: CA-yeh. LL sounds like Y.",note:"LL is NOT L+L. It sounds like Y in most regions.\nllamar = ya-MAR, calle = CA-yeh, pollo = PO-yo.\nSome regions say it differently (Argentina: SH sound)."},
          {type:"teach",kind:"info",nl:"C dura y suave",en:"C: two sounds depending on the vowel",phonetic:"seh",example:"A: ¿Por qué 'casa' y 'cena' suenan diferente?\nB: C antes de A,O,U = K. C antes de E,I = S.",exampleEn:"A: Why do 'casa' and 'cena' sound different?\nB: C before A,O,U = K. C before E,I = S.",note:"C + a, o, u = K sound: casa, comer, cubo.\nC + e, i = S sound: cena, cinco, cielo.\nIn Spain: C + e, i = TH sound (distincion)."},
          {type:"mc",q:"J in 'jardín' (garden) sounds like:",opts:["English J in jump","Throaty H like in loch","English Y in yes","Silent"],ans:"Throaty H like in loch",hint:"Spanish J always makes a throaty, airy sound."},
          {type:"mc",q:"LL in 'llamar' (to call) sounds like:",opts:["Two L sounds","Y as in yes","Silent","SH as in shoe"],ans:"Y as in yes",hint:"LL = Y sound in most Spanish dialects."},
          {type:"mc",q:"C in 'cena' (dinner) sounds like:",opts:["K as in cat","S as in sun","CH as in church","G as in go"],ans:"S as in sun",hint:"C before E or I becomes soft (S sound)."},
          {type:"mc",q:"G in 'gente' (people) sounds like:",opts:["G as in go","Throaty H (same as J)","Silent","S as in sun"],ans:"Throaty H (same as J)",hint:"G before E or I becomes soft, same as J."},
          {type:"teach",kind:"info",nl:"QU y GU",en:"QU and GU: keeping hard sounds before E/I",phonetic:"koo / goo",example:"A: ¿Por qué 'queso' se escribe con QU?\nB: Para mantener el sonido K antes de E.",exampleEn:"A: Why is 'queso' spelled with QU?\nB: To keep the K sound before E.",note:"QU + e/i = K sound (U is silent): queso, aquí.\nGU + e/i = hard G (U is silent): guerra, guitarra.\nGÜ + e/i = G + OO (U pronounced): pingüino."},
          {type:"mc",q:"The U in 'queso' (cheese) is:",opts:["Pronounced as OO","Silent","Pronounced as W","Optional"],ans:"Silent",hint:"In QU combinations, the U is never pronounced."},
          {type:"match",pairs:[{nl:"J (jefe)",en:"Throaty H"},{nl:"LL (calle)",en:"Y sound"},{nl:"C + e/i (cinco)",en:"S sound"},{nl:"QU (queso)",en:"K sound (U silent)"}]},
        ]},
      ]},

    // ── STAGE 2: VOWELS & PRONUNCIATION ──
    {id:"es_fp_s2",title:"Vowels & Pronunciation",desc:"5 pure vowels, diphthongs, and the RR trill",icon:"🔊",
      lessons:[
        {id:"es_fp_s2_l1",title:"The Five Pure Vowels",icon:"🔊",xp:15,board:true,steps:[
          {type:"intro",title:"Five vowels, five sounds, forever",desc:"Spanish has exactly 5 vowel sounds. Unlike English, they NEVER change quality. No schwa, no reduction, no surprises.",goals:["Know the 5 vowel sounds","Understand vowels never reduce","Recognize every vowel is always pronounced"]},
          {type:"teach",kind:"info",nl:"A",en:"The vowel A",phonetic:"ah",example:"A: ¿Cómo suena la A en español?\nB: Siempre AH, como en 'father'.",exampleEn:"A: How does A sound in Spanish?\nB: Always AH, as in 'father'.",note:"Always AH. Never changes.\ncasa, hablar, banana: every A sounds the same.\nUnlike English where A has 5+ different sounds."},
          {type:"teach",kind:"info",nl:"E",en:"The vowel E",phonetic:"eh",example:"A: ¿Y la E?\nB: Siempre EH, como en 'bed'.",exampleEn:"A: And the E?\nB: Always EH, as in 'bed'.",note:"Always EH. Never silent like English final E.\nmesa, verde, comer: every E is pronounced.\nchocolatE = cho-co-LA-teh (final E is said!)."},
          {type:"teach",kind:"info",nl:"I",en:"The vowel I",phonetic:"ee",example:"A: ¿La I?\nB: Siempre EE, como en 'see'.",exampleEn:"A: The I?\nB: Always EE, as in 'see'.",note:"Always EE. Short and crisp.\nsí, vivir, Chile: consistent EE sound.\nNever like English I in 'it' or 'ice'."},
          {type:"teach",kind:"info",nl:"O",en:"The vowel O",phonetic:"oh",example:"A: ¿La O?\nB: Siempre OH, sin deslizar como en inglés.",exampleEn:"A: The O?\nB: Always OH, without the English glide.",note:"Always OH. No glide at the end.\noro, como, todo: pure OH sound.\nEnglish 'go' glides to OOH. Spanish O stays pure."},
          {type:"teach",kind:"info",nl:"U",en:"The vowel U",phonetic:"oo",example:"A: ¿Y la U?\nB: Siempre OO, como en 'food'.",exampleEn:"A: And the U?\nB: Always OO, as in 'food'.",note:"Always OO. Lips rounded.\nuno, uva, azul: consistent OO sound.\nNever like English U in 'up' or 'use'."},
          {type:"mc",q:"The A in 'banana' in Spanish is pronounced:",opts:["Three different ways like English","Always the same AH sound","Silent at the end","Like the A in 'cat'"],ans:"Always the same AH sound",hint:"Each A makes the same pure AH. No schwa."},
          {type:"mc",q:"The final E in 'chocolate' in Spanish is:",opts:["Silent like in English","Always pronounced as EH","Pronounced as AY","Optional"],ans:"Always pronounced as EH",hint:"Spanish never has silent vowels. Every E is said."},
          {type:"mc",q:"How many distinct vowel sounds does Spanish have?",opts:["5","7","12","15"],ans:"5",hint:"One sound per vowel letter. Simple and consistent."},
          {type:"match",pairs:[{nl:"A",en:"AH (father)"},{nl:"E",en:"EH (bed)"},{nl:"I",en:"EE (see)"},{nl:"O",en:"OH (go, no glide)"},{nl:"U",en:"OO (food)"}]},
        ]},
        {id:"es_fp_s2_l2",title:"Diphthongs & RR Trill",icon:"🗣️",xp:15,board:true,steps:[
          {type:"intro",title:"Vowel combinations and the famous RR",desc:"When strong and weak vowels meet, they glide together in one syllable (diphthong). And the RR trill is the most iconic Spanish sound.",goals:["Know strong (A,E,O) vs weak (I,U) vowels","Recognize common diphthongs","Distinguish single R tap from RR trill"]},
          {type:"teach",kind:"info",nl:"Diptongos",en:"Diphthongs: vowel glides",phonetic:"deep-TONG-gos",example:"A: ¿'Bueno' tiene una sílaba o dos para UE?\nB: Una. UE es un diptongo.",exampleEn:"A: Does 'bueno' have one or two syllables for UE?\nB: One. UE is a diphthong.",note:"Strong + weak or weak + weak = ONE syllable:\nbueno (UE), tiene (IE), cuando (UA), seis (EI).\nTwo strong vowels = TWO syllables:\nle-er, ca-er, po-e-ta (hiatus, not diphthong)."},
          {type:"mc",q:"IE in 'tiene' (has) is:",opts:["Two separate syllables","One syllable (diphthong)","Silent","Three sounds"],ans:"One syllable (diphthong)",hint:"Strong E + weak I merge into one syllable."},
          {type:"teach",kind:"info",nl:"R y RR",en:"Single R (tap) vs RR (trill)",phonetic:"EH-reh / EH-rreh",example:"A: ¿Cuál es la diferencia entre 'pero' y 'perro'?\nB: Pero = but (R suave). Perro = dog (RR fuerte).",exampleEn:"A: What is the difference between 'pero' and 'perro'?\nB: Pero = but (soft R). Perro = dog (strong RR).",note:"Single R between vowels = quick tongue tap.\nRR between vowels = rolled trill.\nR at word start = always trilled: rojo, río.\nMixing them changes meaning: pero/perro, caro/carro."},
          {type:"mc",q:"'Pero' means 'but' and 'perro' means 'dog'. The difference is:",opts:["The vowel sound","Single R (tap) vs RR (trill)","Stress placement","The P sound"],ans:"Single R (tap) vs RR (trill)",hint:"One quick tap vs multiple tongue vibrations."},
          {type:"mc",q:"R at the START of a word like 'rojo' (red) is:",opts:["A single tap","Always trilled like RR","Silent","Soft like English R"],ans:"Always trilled like RR",hint:"Word-initial R is always strong, never a gentle tap."},
          {type:"mc",q:"Which vowel combination makes a diphthong (one syllable)?",opts:["A + E (two strong)","I + E (weak + strong)","O + A (two strong)","E + O (two strong)"],ans:"I + E (weak + strong)",hint:"Diphthongs need at least one weak vowel (I or U)."},
          {type:"match",pairs:[{nl:"R between vowels (pero)",en:"Quick tongue tap"},{nl:"RR (perro)",en:"Rolled trill"},{nl:"R at word start (rojo)",en:"Trilled (like RR)"},{nl:"IE/UE/AI",en:"Diphthong (one syllable)"}]},
        ]},
      ]},

    // ── STAGE 3: STRESS & ACCENT MARKS ──
    {id:"es_fp_s3",title:"Stress & Accent Marks",desc:"The predictable stress system and when accents appear",icon:"📐",
      lessons:[
        {id:"es_fp_s3_l1",title:"Default Stress Rules",icon:"📐",xp:15,board:true,steps:[
          {type:"intro",title:"Stress is predictable!",desc:"Spanish stress follows two simple rules that cover 95% of all words. Learn these rules and you can stress any new word correctly.",goals:["Apply Rule 1: vowel/N/S endings","Apply Rule 2: other consonant endings","Know that accents mark exceptions"]},
          {type:"teach",kind:"info",nl:"Regla 1",en:"Rule 1: Vowel, N, or S ending",phonetic:"REH-gla OO-no",example:"A: ¿Dónde va el acento en 'casa'?\nB: En la penúltima sílaba: CA-sa.",exampleEn:"A: Where does the stress go in 'casa'?\nB: On the second-to-last syllable: CA-sa.",note:"Words ending in a VOWEL, N, or S:\nStress the second-to-last syllable.\nCA-sa, HA-blan, CO-mes, li-BRO, e-XA-men."},
          {type:"teach",kind:"info",nl:"Regla 2",en:"Rule 2: Other consonant endings",phonetic:"REH-gla DOS",example:"A: ¿Y 'hablar'?\nB: Termina en R, así que el acento va al final: ha-BLAR.",exampleEn:"A: And 'hablar'?\nB: It ends in R, so stress goes on the last syllable: ha-BLAR.",note:"Words ending in any consonant EXCEPT N or S:\nStress the LAST syllable.\nha-BLAR, co-MER, ciu-DAD, es-pa-ÑOL, re-LOJ."},
          {type:"mc",q:"Where is the stress in 'libro' (book)?",opts:["LI-bro (second-to-last)","li-BRO (last)","LI-BRO (both equal)","lib-RO"],ans:"LI-bro (second-to-last)",hint:"Ends in a vowel. Rule 1: stress second-to-last."},
          {type:"mc",q:"Where is the stress in 'comer' (to eat)?",opts:["CO-mer (second-to-last)","co-MER (last)","CO-MER (both)","com-ER"],ans:"co-MER (last)",hint:"Ends in R (not vowel/N/S). Rule 2: stress last."},
          {type:"mc",q:"Where is the stress in 'examen' (exam)?",opts:["e-xa-MEN","e-XA-men","EX-a-men","exa-MEN"],ans:"e-XA-men",hint:"Ends in N. Rule 1: stress second-to-last."},
          {type:"mc",q:"Where is the stress in 'ciudad' (city)?",opts:["CIU-dad","ciu-DAD","ci-U-dad","CI-udad"],ans:"ciu-DAD",hint:"Ends in D (not vowel/N/S). Rule 2: stress last."},
          {type:"teach",kind:"info",nl:"Tilde = excepción",en:"Accent marks signal exceptions",phonetic:"TEEL-deh",example:"A: ¿Por qué 'café' tiene acento?\nB: Porque termina en vocal pero el acento está al final. Rompe la regla.",exampleEn:"A: Why does 'café' have an accent mark?\nB: Because it ends in a vowel but stress is on the last syllable. It breaks the rule.",note:"An accent mark appears ONLY when the word breaks the default rules.\ncafé ends in a vowel but stresses the LAST syllable.\nlápiz ends in a consonant but stresses the SECOND-TO-LAST.\nIf you see an accent, the stress is NOT where rules predict."},
          {type:"mc",q:"Why does 'mamá' have an accent mark?",opts:["It ends in a vowel but stress is on the last syllable, breaking Rule 1","All Spanish words have accents","The accent changes the vowel sound","It is a foreign word"],ans:"It ends in a vowel but stress is on the last syllable, breaking Rule 1",hint:"Vowel ending should mean penultimate stress. The accent overrides."},
          {type:"mc",q:"'Fácil' (easy) has an accent because:",opts:["It ends in L but stress is on the second-to-last syllable","It ends in a vowel","All adjectives get accents","It has two syllables"],ans:"It ends in L but stress is on the second-to-last syllable",hint:"Consonant ending should stress the last syllable. The accent overrides."},
          {type:"match",pairs:[{nl:"casa (vowel ending)",en:"CA-sa (Rule 1)"},{nl:"hablar (R ending)",en:"ha-BLAR (Rule 2)"},{nl:"café (accent mark)",en:"ca-FÉ (exception!)"},{nl:"examen (N ending)",en:"e-XA-men (Rule 1)"}]},
        ]},
        {id:"es_fp_s3_l2",title:"Meaning-Changing Accents",icon:"✨",xp:15,board:true,steps:[
          {type:"intro",title:"Same spelling, different meaning",desc:"Some Spanish word pairs look identical except for the accent mark. The accent changes the meaning entirely. These are critical to recognize.",goals:["Know el vs él, tu vs tú, si vs sí","Know question words always have accents","Understand accents distinguish homophones"]},
          {type:"teach",kind:"info",nl:"Acento diacrítico",en:"Accents that change meaning",phonetic:"dee-ah-KREE-tee-ko",example:"A: ¿'El' y 'él' son iguales?\nB: No. 'El' = the. 'Él' = he.",exampleEn:"A: Are 'el' and 'él' the same?\nB: No. 'El' = the. 'Él' = he.",note:"el = the (article). él = he (pronoun).\ntu = your. tú = you.\nsi = if. sí = yes.\nmas = but (literary). más = more.\nThe accent is the ONLY difference!"},
          {type:"mc",q:"'Tu casa' means 'your house'. 'Tú' with an accent means:",opts:["Your","You","House","The"],ans:"You",hint:"Without accent = possessive. With accent = pronoun."},
          {type:"mc",q:"'Si quieres' means 'if you want'. 'Sí' with an accent means:",opts:["If","Yes","But","No"],ans:"Yes",hint:"Without accent = if. With accent = affirmative."},
          {type:"teach",kind:"info",nl:"Palabras interrogativas",en:"Question words always have accents",phonetic:"een-teh-rro-ga-TEE-vas",example:"A: ¿Qué es eso?\nB: Es un libro. Que interesante.",exampleEn:"A: What is that?\nB: It's a book. How interesting.",note:"When asking a question, these words get accents:\n¿Qué? (what), ¿Cuándo? (when), ¿Dónde? (where),\n¿Cómo? (how), ¿Por qué? (why), ¿Quién? (who).\nAs connectors (no question): que, cuando, donde."},
          {type:"mc",q:"'¿Dónde estás?' uses an accent on 'dónde' because:",opts:["It is asking a question","All D words get accents","It ends in a vowel","It is a long word"],ans:"It is asking a question",hint:"Question words always carry an accent mark."},
          {type:"mc",q:"In 'Sé que tú lo sabes' (I know that you know it), which word is a question word?",opts:["Sé","que","tú","None, there is no question"],ans:"None, there is no question",hint:"This is a statement. 'que' here means 'that', no accent."},
          {type:"match",pairs:[{nl:"el (no accent)",en:"the (article)"},{nl:"él (accent)",en:"he (pronoun)"},{nl:"si (no accent)",en:"if"},{nl:"sí (accent)",en:"yes"}]},
        ]},
      ]},

    // ── STAGE 4: SPELLING PATTERNS ──
    {id:"es_fp_s4",title:"Spelling Patterns",desc:"Nearly phonetic spelling with a few key rules",icon:"📝",
      lessons:[
        {id:"es_fp_s4_l1",title:"Spelling-Sound Rules",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"Spanish spelling is almost phonetic",desc:"Unlike English, Spanish spelling is very consistent. A few key rules govern everything. Learn these and you can spell any word you hear.",goals:["Know the C/QU/Z pattern","Know the G/GU/GÜ pattern","Understand inverted punctuation"]},
          {type:"teach",kind:"info",nl:"C, QU, Z",en:"The K/S sound system",phonetic:"",example:"A: ¿Por qué 'casa' tiene C pero 'queso' tiene QU?\nB: Para mantener el sonido K antes de E.",exampleEn:"A: Why does 'casa' have C but 'queso' has QU?\nB: To keep the K sound before E.",note:"K sound before A,O,U: use C (casa, comer, cubo).\nK sound before E,I: use QU (queso, aquí).\nS sound before E,I: use C or Z (cena, zapato).\nS sound before A,O,U: use Z (zapato, zona, azul)."},
          {type:"mc",q:"To spell the K sound before E, Spanish uses:",opts:["C","K","QU","CK"],ans:"QU",hint:"C before E would make an S sound, so QU is needed."},
          {type:"teach",kind:"info",nl:"G, GU, GÜ",en:"The G sound system",phonetic:"",example:"A: ¿'Guerra' se escribe con GU?\nB: Sí, para tener G dura antes de E.",exampleEn:"A: Is 'guerra' spelled with GU?\nB: Yes, to have a hard G before E.",note:"Hard G before A,O,U: use G (gato, gordo, gusto).\nHard G before E,I: use GU (guerra, guitarra).\nG + OO before E,I: use GÜ (pingüino, bilingüe).\nSoft G (=J sound) before E,I: just G (gente, girar)."},
          {type:"mc",q:"To spell a hard G sound before I, Spanish uses:",opts:["G alone","GU (U silent)","GÜ (U pronounced)","J"],ans:"GU (U silent)",hint:"G alone before I would make a J sound. GU keeps it hard."},
          {type:"mc",q:"The Ü in 'pingüino' means:",opts:["The U is silent","Pronounce the U as OO","The word is foreign","The G is soft"],ans:"Pronounce the U as OO",hint:"The diaeresis tells you: say the U, do not skip it."},
          {type:"teach",kind:"info",nl:"¿ y ¡",en:"Inverted punctuation",phonetic:"",example:"A: ¿Por qué hay dos signos de pregunta?\nB: Uno abre y otro cierra. Así sabes desde el principio que es pregunta.",exampleEn:"A: Why are there two question marks?\nB: One opens and one closes. So you know from the start it is a question.",note:"Spanish opens questions with ¿ and closes with ?.\nSame for exclamations: ¡ opens, ! closes.\n¿Cómo estás? ¡Qué bonito!\nThis is mandatory, not optional."},
          {type:"mc",q:"Which is correctly punctuated?",opts:["Cómo estás?","¿Cómo estás?","¿Cómo estás","Como estas?"],ans:"¿Cómo estás?",hint:"Questions need BOTH opening ¿ and closing ? marks."},
          {type:"match",pairs:[{nl:"K before E/I",en:"Use QU (queso)"},{nl:"Hard G before E/I",en:"Use GU (guerra)"},{nl:"S before A/O/U",en:"Use Z (zapato)"},{nl:"G+OO before E/I",en:"Use GÜ (pingüino)"}]},
        ]},
        {id:"es_fp_s4_l2",title:"D Between Vowels & Regional Variation",icon:"🌎",xp:15,board:true,steps:[
          {type:"intro",title:"Sounds that shift by position and region",desc:"Some Spanish sounds change depending on where they appear in a word, and some vary by region. Understanding this prevents confusion.",goals:["Know D softens between vowels","Know Z/C distinction varies by region","Recognize key regional differences"]},
          {type:"teach",kind:"info",nl:"D intervocálica",en:"D between vowels softens",phonetic:"",example:"A: ¿'Cansado' suena como 'cansatho'?\nB: Sí, la D entre vocales se suaviza mucho.",exampleEn:"A: Does 'cansado' sound like 'cansatho'?\nB: Yes, D between vowels softens a lot.",note:"D between vowels becomes very soft, almost TH.\ncansado = can-SA-tho, nada = NA-tha.\nFinal D nearly disappears: Madrid = ma-DRITH.\nThis is natural, not sloppy speech."},
          {type:"mc",q:"The D in 'nada' (nothing) between vowels sounds:",opts:["Strong D like in English 'do'","Soft, almost like TH in 'the'","Silent","Like a T"],ans:"Soft, almost like TH in 'the'",hint:"Between vowels, D softens dramatically."},
          {type:"teach",kind:"info",nl:"Seseo vs distinción",en:"S sound vs TH sound for Z/C",phonetic:"seh-SEH-oh / dees-teen-SYON",example:"A: ¿Es 'zapato' o 'thapato'?\nB: Depende del país. En España: thapato. En América: sapato.",exampleEn:"A: Is it 'zapato' or 'thapato'?\nB: Depends on the country. Spain: thapato. Americas: sapato.",note:"In Latin America: Z and C before E/I = S sound (seseo).\nIn central/northern Spain: Z and C before E/I = TH sound.\nBoth are correct! Neither is wrong.\nThis course defaults to Latin American pronunciation."},
          {type:"mc",q:"In most of Latin America, Z in 'zapato' sounds like:",opts:["TH as in 'think'","S as in 'sun'","Z as in 'zoo'","SH as in 'shoe'"],ans:"S as in 'sun'",hint:"Latin America uses seseo: Z = S sound."},
          {type:"mc",q:"Which pronunciation of 'cinco' is from Spain?",opts:["SEEN-ko","THINK-oh","SINK-oh","CHIN-ko"],ans:"THINK-oh",hint:"Spain uses distincion: C before I = TH sound."},
          {type:"mc",q:"Is one regional pronunciation more correct than the other?",opts:["Yes, Spain is correct","Yes, Latin America is correct","No, both are equally valid","Only formal Spanish is correct"],ans:"No, both are equally valid",hint:"Both are standard. Neither is wrong or informal."},
          {type:"match",pairs:[{nl:"D between vowels",en:"Softens to TH-like"},{nl:"Final D (Madrid)",en:"Nearly silent"},{nl:"Seseo (Latin America)",en:"Z = S sound"},{nl:"Distinción (Spain)",en:"Z = TH sound"}]},
        ]},
      ]},

    // ── STAGE 5: GRAMMAR PREVIEW ──
    {id:"es_fp_s5",title:"Grammar Preview",desc:"Gender, ser vs estar, and verb groups at a glance",icon:"📖",
      lessons:[
        {id:"es_fp_s5_l1",title:"Gender & Articles",icon:"📖",xp:15,board:true,steps:[
          {type:"intro",title:"Every noun has a gender",desc:"In Spanish, every noun is masculine or feminine. You must learn the article (el/la) with every noun. Patterns help, but exceptions exist.",goals:["Know el = masculine, la = feminine","Know -o/-a patterns and exceptions","Understand articles are mandatory"]},
          {type:"teach",kind:"info",nl:"El y La",en:"Masculine and feminine articles",phonetic:"el / la",example:"A: ¿Es 'libro' masculino o femenino?\nB: Masculino. EL libro.",exampleEn:"A: Is 'libro' masculine or feminine?\nB: Masculine. THE book (el).",note:"el = masculine: el libro, el gato, el sol.\nla = feminine: la casa, la mesa, la luna.\nPlural: los (m), las (f).\nAlways learn the article WITH the noun!"},
          {type:"teach",kind:"info",nl:"Patrones",en:"Gender patterns",phonetic:"pa-TRO-nes",example:"A: ¿Cómo sé si es el o la?\nB: Casi siempre: -o = el, -a = la. Pero hay excepciones.",exampleEn:"A: How do I know if it is el or la?\nB: Almost always: -o = el, -a = la. But there are exceptions.",note:"Most -o words: masculine (el libro, el gato).\nMost -a words: feminine (la casa, la mesa).\nExceptions: el día, el mapa, el problema.\nEndings -ción, -dad, -tad: always feminine."},
          {type:"mc",q:"'El problema' is masculine even though it ends in -a because:",opts:["It comes from Greek (words ending in -ema/-ama)","All long words are masculine","It starts with P","It is an exception with no reason"],ans:"It comes from Greek (words ending in -ema/-ama)",hint:"Greek-origin -ma words: problema, sistema, tema are masculine."},
          {type:"mc",q:"A word ending in '-ción' like 'nación' is:",opts:["Masculine","Feminine","Could be either","Neutral"],ans:"Feminine",hint:"Words ending in -ción are always la."},
          {type:"teach",kind:"info",nl:"El agua",en:"El before stressed A in feminine nouns",phonetic:"el AH-gwa",example:"A: ¿'Agua' es masculino?\nB: No, es femenino. Pero decimos EL agua por la A acentuada.",exampleEn:"A: Is 'agua' masculine?\nB: No, it is feminine. But we say EL agua because of the stressed A.",note:"Feminine nouns starting with stressed A use 'el':\nel agua (but LAS aguas), el águila, el alma.\nThe noun is STILL feminine! Adjectives agree feminine:\nel agua fría (not frío). This is purely phonetic."},
          {type:"mc",q:"'El agua fría' uses 'el' because:",opts:["Agua is masculine","The stressed A after la would sound awkward","All liquid words use el","It is an irregular noun"],ans:"The stressed A after la would sound awkward",hint:"La + agua would blend. El agua is clearer. But agua stays feminine."},
          {type:"match",pairs:[{nl:"-o ending (libro)",en:"Usually masculine (el)"},{nl:"-a ending (casa)",en:"Usually feminine (la)"},{nl:"-ción ending (nación)",en:"Always feminine (la)"},{nl:"el agua, el águila",en:"Feminine but uses 'el'"}]},
        ]},
        {id:"es_fp_s5_l2",title:"Ser, Estar & Verb Groups",icon:"🔑",xp:15,board:true,steps:[
          {type:"intro",title:"Two verbs for 'to be' and three verb families",desc:"The biggest challenge in Spanish: SER and ESTAR both mean 'to be' but are NOT interchangeable. Plus, all verbs belong to one of three groups.",goals:["Know SER = identity, ESTAR = state","Know the three verb groups (-ar, -er, -ir)","Understand tú vs usted"]},
          {type:"teach",kind:"info",nl:"Ser",en:"SER: identity, origin, personality",phonetic:"sehr",example:"A: ¿De dónde eres?\nB: Soy de México. Soy estudiante.",exampleEn:"A: Where are you from?\nB: I am from Mexico. I am a student.",note:"SER for WHO you are, WHERE you are from, WHAT you are:\nSoy Juan (identity). Soy de España (origin).\nEs profesor (profession). Son las tres (time).\nEs inteligente (personality trait)."},
          {type:"teach",kind:"info",nl:"Estar",en:"ESTAR: location, state, emotion",phonetic:"es-TAR",example:"A: ¿Dónde estás?\nB: Estoy en casa. Estoy cansado.",exampleEn:"A: Where are you?\nB: I am at home. I am tired.",note:"ESTAR for WHERE you are, HOW you feel, current STATE:\nEstoy en Madrid (location). Estoy cansado (state).\nEstá enfermo (condition). Están contentos (emotion).\nTemporary situations, not permanent identity."},
          {type:"mc",q:"'Soy profesor' (I am a teacher) uses SER because:",opts:["Teaching is a temporary state","It describes identity/profession","It describes a location","It describes an emotion"],ans:"It describes identity/profession",hint:"SER for who/what you ARE fundamentally."},
          {type:"mc",q:"'Estoy cansado' (I am tired) uses ESTAR because:",opts:["Being tired is a permanent trait","It describes a temporary state","It describes nationality","It tells the time"],ans:"It describes a temporary state",hint:"ESTAR for how you feel RIGHT NOW."},
          {type:"teach",kind:"info",nl:"Tres grupos verbales",en:"Three verb groups",phonetic:"tres GROO-pos ver-BA-les",example:"A: ¿Cuántos grupos de verbos hay?\nB: Tres: -ar, -er, -ir. Los verbos en -ar son los más comunes.",exampleEn:"A: How many verb groups are there?\nB: Three: -ar, -er, -ir. The -ar verbs are the most common.",note:"-AR verbs (~80%): hablar, trabajar, estudiar.\n-ER verbs: comer, beber, aprender.\n-IR verbs: vivir, escribir, abrir.\nEach group has its own conjugation endings.\nYou will learn these in the main lessons."},
          {type:"mc",q:"Which verb group is by far the largest in Spanish?",opts:["-ar verbs","-er verbs","-ir verbs","Irregular verbs"],ans:"-ar verbs",hint:"About 80% of all Spanish verbs end in -ar."},
          {type:"teach",kind:"info",nl:"Tú y usted",en:"Informal and formal 'you'",phonetic:"too / oos-TED",example:"A: ¿Cómo estás? (a un amigo)\nB: ¿Cómo está usted? (a un desconocido)",exampleEn:"A: How are you? (to a friend)\nB: How are you? (to a stranger, formal)",note:"Tú = informal (friends, family, children).\nUsted = formal (strangers, elders, authority).\nWhen in doubt, use USTED. It is always safe.\nUsted uses 3rd person verb forms (same as he/she)."},
          {type:"mc",q:"When meeting an older stranger, you should use:",opts:["Tú (informal)","Usted (formal)","Either one","Neither"],ans:"Usted (formal)",hint:"When in doubt, formal is always the safe choice."},
          {type:"match",pairs:[{nl:"SER",en:"Identity, origin, personality"},{nl:"ESTAR",en:"Location, state, emotion"},{nl:"Tú",en:"Informal you (friends)"},{nl:"Usted",en:"Formal you (strangers)"}]},
        ]},
      ]},
  ]},
  it:{name:"Italian Foundations Play",icon:"🇮🇹",blueprint:"latin_simple",stages:[
    // ── STAGE 1: ORIENTATION ──
    {id:"it_fp_s1",title:"The Italian Alphabet",desc:"21 native letters, 5 vowels, and why Italian is beautifully phonetic",icon:"🔤",
      lessons:[
        {id:"it_fp_s1_l1",title:"Alphabet & Vowels",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"Welcome to Italian Sounds!",desc:"Italian is one of the most phonetic languages in the world. Every letter has a consistent sound, and almost everything is pronounced as written. This lesson covers the alphabet and vowels.",goals:["Know Italian has 21 native letters + 5 foreign","Understand Italian vowels are pure sounds","Recognize that double consonants matter"]},
          {type:"teach",kind:"info",nl:"L'alfabeto italiano",en:"The Italian alphabet",phonetic:"lal-fa-BEH-to ee-ta-LYA-no",example:"A: Quante lettere ha l'alfabeto italiano?\nB: Ventuno lettere native, piu cinque straniere.",exampleEn:"A: How many letters does the Italian alphabet have?\nB: Twenty-one native letters, plus five foreign ones.",note:"21 native letters: A through Z minus J, K, W, X, Y.\nJ, K, W, X, Y appear only in foreign loanwords.\nExamples: jeans, kiwi, weekend, taxi, yogurt."},
          {type:"mc",q:"How many native letters does the Italian alphabet have?",opts:["21","26","23","28"],ans:"21",hint:"Five letters from the English alphabet are foreign in Italian."},
          {type:"teach",kind:"info",nl:"Le vocali",en:"The five Italian vowels",phonetic:"leh vo-KA-lee",example:"A: Come suonano le vocali in italiano?\nB: Sempre uguali: A, E, I, O, U.",exampleEn:"A: How do Italian vowels sound?\nB: Always the same: A, E, I, O, U.",note:"A = AH (as in father). E = EH (as in bed).\nI = EE (as in see). O = OH (as in go).\nU = OO (as in food).\nUnlike English, they NEVER change quality."},
          {type:"mc",q:"The vowel A in Italian always sounds like:",opts:["AH as in father","A as in cat","AY as in day","UH as in cut"],ans:"AH as in father",hint:"Italian vowels are pure and consistent. A is always AH."},
          {type:"mc",q:"The vowel U in Italian always sounds like:",opts:["UH as in up","OO as in food","YOO as in use","AW as in awful"],ans:"OO as in food",hint:"Italian U is always a rounded OO sound."},
          {type:"teach",kind:"info",nl:"E e O: due suoni",en:"E and O each have two sounds",phonetic:"eh / oh",example:"A: La E italiana ha un solo suono?\nB: No, due: aperta (EH) e chiusa (AY).",exampleEn:"A: Does Italian E have only one sound?\nB: No, two: open (EH) and closed (AY).",note:"Open E = EH (as in bed): bello, terra, festa.\nClosed E = AY (no glide): sera, verde, perche.\nOpen O = AW (as in or): cosa, donna, notte.\nClosed O = OH (pure): nome, sole, come.\nDo not worry about memorizing which is which yet."},
          {type:"mc",q:"How many distinct vowel sounds does Italian have?",opts:["5","7","10","15"],ans:"7",hint:"Five vowel letters but E and O each have two variants."},
          {type:"teach",kind:"info",nl:"Le doppie",en:"Double consonants: critical in Italian",phonetic:"leh DOP-pyeh",example:"A: 'Papa' e 'pappa' sono uguali?\nB: No! Papa = pope. Pappa = baby food.",exampleEn:"A: Are 'papa' and 'pappa' the same?\nB: No! Papa = pope. Pappa = baby food.",note:"Double consonants are HELD LONGER, not repeated.\npapa (pope) vs pappa (baby food).\nnono (ninth) vs nonno (grandfather).\nGetting doubles wrong changes meaning entirely."},
          {type:"mc",q:"The difference between 'papa' (pope) and 'pappa' (baby food) is:",opts:["A longer P sound in pappa","Different vowels","Different stress","Different meaning of A"],ans:"A longer P sound in pappa",hint:"Double consonants are held longer. This changes the word."},
          {type:"match",pairs:[{nl:"21",en:"Native Italian letters"},{nl:"J, K, W, X, Y",en:"Foreign letters only"},{nl:"A, E, I, O, U",en:"Five vowel letters"},{nl:"Double consonants",en:"Held longer, change meaning"}]},
        ]},
      ]},

    // ── STAGE 2: ACCENT RULES ──
    {id:"it_fp_s2",title:"Accent Rules",desc:"Grave and acute accents, when they are required, and meaning-changing pairs",icon:"📐",
      lessons:[
        {id:"it_fp_s2_l1",title:"Italian Accent Marks",icon:"📐",xp:15,board:true,steps:[
          {type:"intro",title:"When accents appear in Italian",desc:"Most Italian words stress the second-to-last syllable and need no accent mark. Accents appear only when stress falls on the FINAL syllable, and on a few small words to distinguish meaning.",goals:["Know grave vs acute accent","Know when accents are required","Recognize meaning-changing accent pairs"]},
          {type:"teach",kind:"info",nl:"Accento grave",en:"The grave accent: a, i, o, u",phonetic:"ak-CHEN-to GRA-veh",example:"A: Che accento ha 'citta'?\nB: Accento grave: citta. Sempre grave su a, i, o, u.",exampleEn:"A: What accent does 'citta' have?\nB: Grave accent: citta. Always grave on a, i, o, u.",note:"A, I, O, U always take the grave accent (slants left).\ncitta (city), cosi (so), piu (more), gioventu (youth).\nNever acute on these four vowels in standard Italian."},
          {type:"mc",q:"Which accent mark do a, i, o, u always take in Italian?",opts:["Grave (slants left)","Acute (slants right)","Circumflex","No accent"],ans:"Grave (slants left)",hint:"These four vowels always use the grave accent in Italian."},
          {type:"teach",kind:"info",nl:"E con accento",en:"The tricky E: grave or acute?",phonetic:"eh kon ak-CHEN-to",example:"A: 'E' con accento: grave o acuto?\nB: Dipende! 'E' (is) = grave. 'Perche' = acute.",exampleEn:"A: 'E' with accent: grave or acute?\nB: It depends! 'E' (is) = grave. 'Perche' = acute.",note:"E with grave (e) = open EH: e (is), caffe, cioe.\nE with acute (e) = closed AY: perche, affinche, ne.\nThe grave is more common in everyday words.\nWhen in doubt, grave is the safer guess."},
          {type:"mc",q:"'Perche' (why/because) takes which accent on the E?",opts:["Grave (open E)","Acute (closed E)","No accent","Either one"],ans:"Acute (closed E)",hint:"Perche uses a closed E sound, so it gets the acute accent."},
          {type:"teach",kind:"info",nl:"Quando serve l'accento",en:"When accents are REQUIRED",phonetic:"KWAN-do SER-veh",example:"A: Tutte le parole italiane hanno l'accento?\nB: No, solo quelle con accento sull'ultima sillaba.",exampleEn:"A: Do all Italian words have an accent mark?\nB: No, only those with stress on the final syllable.",note:"Accent marks are REQUIRED on:\n1. Final-syllable stress: citta, liberta, universita, caffe.\n2. Single-syllable meaning pairs: e (is) vs e (and).\nNO accent needed on most words because the default\nstress is penultimate (second-to-last)."},
          {type:"mc",q:"Most Italian words stress which syllable?",opts:["The last syllable","The second-to-last syllable","The first syllable","It varies randomly"],ans:"The second-to-last syllable",hint:"The penultimate syllable is the default stress in Italian."},
          {type:"mc",q:"'Citta' (city) needs an accent because:",opts:["Stress falls on the final syllable","It has double letters","It is a foreign word","All nouns need accents"],ans:"Stress falls on the final syllable",hint:"When stress is on the last syllable, Italian writes an accent."},
          {type:"teach",kind:"info",nl:"Accenti che cambiano significato",en:"Accents that change meaning",phonetic:"",example:"A: 'E' e 'e' sono la stessa parola?\nB: No! 'E' = and. 'E' = is.",exampleEn:"A: Are 'e' and 'e' the same word?\nB: No! 'E' (no accent) = and. 'E' (accent) = is.",note:"e = and (conjunction). e = is (verb essere).\nsi = himself/herself. si = yes.\nla = the (article). la = there.\nda = from (preposition). da = gives (verb dare).\nThe accent is the ONLY difference!"},
          {type:"mc",q:"'E' without accent means 'and'. What does 'e' with accent mean?",opts:["Also and","Is (verb)","He/she","Or"],ans:"Is (verb)",hint:"The accent changes this tiny word from a conjunction to a verb."},
          {type:"mc",q:"'Si' without accent means 'himself'. What does 'si' with accent mean?",opts:["No","Yes","If","So"],ans:"Yes",hint:"Without accent = reflexive pronoun. With accent = affirmative."},
          {type:"teach",kind:"info",nl:"Errori comuni",en:"Common accent mistakes by English speakers",phonetic:"",example:"A: Gli inglesi spesso dimenticano gli accenti?\nB: Si! E confondono 'perche' con 'perche'.",exampleEn:"A: Do English speakers often forget accents?\nB: Yes! And they confuse 'perche' with 'perche'.",note:"Common mistakes:\n1. Forgetting the accent on citta, perche, piu.\n2. Using acute when grave is needed (or vice versa).\n3. Adding accents where none belong (Italian does NOT\nmark stress on penultimate syllables)."},
          {type:"match",pairs:[{nl:"e (grave)",en:"is (verb essere)"},{nl:"e (no accent)",en:"and (conjunction)"},{nl:"si (accent)",en:"yes"},{nl:"si (no accent)",en:"himself, herself"}]},
        ]},
      ]},

    // ── STAGE 3: PRONUNCIATION TRAPS ──
    {id:"it_fp_s3",title:"Pronunciation Traps",desc:"C/G rules, digraphs (SC, GN, GLI), double consonants, and silent H",icon:"⚡",
      lessons:[
        {id:"it_fp_s3_l1",title:"C and G Rules",icon:"⚡",xp:15,board:true,steps:[
          {type:"intro",title:"The two faces of C and G",desc:"C and G each have two sounds: hard and soft. The vowel that follows determines which one you hear. CH and GH force the hard sound before e and i.",goals:["Know C + a/o/u = K, C + e/i = CH","Know G + a/o/u = hard G, G + e/i = J","Know CH and GH force hard sounds"]},
          {type:"teach",kind:"info",nl:"C dura",en:"Hard C: before a, o, u",phonetic:"chee DOO-ra",example:"A: Come suona la C in 'casa'?\nB: Come K: CA-sa.",exampleEn:"A: How does C sound in 'casa'?\nB: Like K: CA-sa.",note:"C before A, O, U = K sound.\ncasa (house), cosa (thing), cuore (heart).\nAlso C before consonants: classe, clima."},
          {type:"teach",kind:"info",nl:"C dolce",en:"Soft C: before e, i",phonetic:"chee DOL-cheh",example:"A: E in 'cena'?\nB: Come CH in 'church': CHE-na.",exampleEn:"A: And in 'cena'?\nB: Like CH in 'church': CHE-na.",note:"C before E, I = CH sound (as in church).\ncena (dinner), cinema (cinema), ciao (hello).\nThis is DIFFERENT from Spanish where C + e/i = S."},
          {type:"mc",q:"C in 'cinema' sounds like:",opts:["K as in cat","CH as in church","S as in sun","SH as in shoe"],ans:"CH as in church",hint:"C before I in Italian always makes a CH sound."},
          {type:"teach",kind:"info",nl:"CH: forzare il suono duro",en:"CH forces hard K before e/i",phonetic:"",example:"A: Perche 'che' si scrive con CH?\nB: Per mantenere il suono K prima di E.",exampleEn:"A: Why is 'che' spelled with CH?\nB: To keep the K sound before E.",note:"CH before E, I = hard K sound.\nche (what/that), chi (who), chiave (key), anche (also).\nThe H is SILENT. It just keeps C hard."},
          {type:"mc",q:"CH in 'che' (what) sounds like:",opts:["CH as in church","K as in cat","SH as in shoe","H sound"],ans:"K as in cat",hint:"The H after C forces the hard K sound before E."},
          {type:"teach",kind:"info",nl:"G dura e dolce",en:"G: hard before a/o/u, soft before e/i",phonetic:"",example:"A: 'Gatto' e 'gelato' iniziano con lo stesso suono?\nB: No! Gatto = G dura. Gelato = G dolce.",exampleEn:"A: Do 'gatto' and 'gelato' start with the same sound?\nB: No! Gatto = hard G. Gelato = soft G.",note:"G + a, o, u = hard G: gatto (cat), gonna (skirt).\nG + e, i = soft J: gelato (ice cream), giorno (day).\nGH + e, i = forces hard G: spaghetti, ghiaccio (ice)."},
          {type:"mc",q:"G in 'gelato' sounds like:",opts:["G as in go","J as in jelly","H sound","Silent"],ans:"J as in jelly",hint:"G before E in Italian makes a soft J sound."},
          {type:"mc",q:"GH in 'spaghetti' sounds like:",opts:["J as in jelly","Hard G as in go","SH sound","Silent"],ans:"Hard G as in go",hint:"GH forces the hard G sound before E, just like CH forces K."},
          {type:"mc",q:"How do you spell the K sound before I in Italian?",opts:["CI","CHI","KI","GI"],ans:"CHI",hint:"C alone before I would make a CH sound. Add H to keep it hard."},
          {type:"match",pairs:[{nl:"C + a/o/u (casa)",en:"K sound"},{nl:"C + e/i (cena)",en:"CH sound (church)"},{nl:"CH + e/i (che)",en:"K sound (H keeps it hard)"},{nl:"G + e/i (gelato)",en:"J sound (jelly)"}]},
          {type:"tip",title:"The Italian C/G system vs Spanish",text:"In Spanish, soft C = S sound (cena = SEH-na).\nIn Italian, soft C = CH sound (cena = CHEH-na).\nIn Spanish, soft G = throaty H.\nIn Italian, soft G = J as in jelly.\nDo not mix them up if you know both languages!",icon:"💡"},
        ]},
        {id:"it_fp_s3_l2",title:"Digraphs & Double Consonants",icon:"🔊",xp:15,board:true,steps:[
          {type:"intro",title:"Italian sounds with no English equivalent",desc:"SC, GN, GLI, and double consonants are the sounds that trip up English speakers most. Master these and your Italian will sound authentic.",goals:["Know SC + e/i = SH sound","Know GN = NY sound, GLI = LY sound","Understand double consonants are held longer"]},
          {type:"teach",kind:"info",nl:"SC + e, i",en:"SC before e/i: the SH sound",phonetic:"sheh / shee",example:"A: Come si pronuncia 'scena'?\nB: SHEH-na. SC prima di E fa SH.",exampleEn:"A: How do you pronounce 'scena'?\nB: SHEH-na. SC before E makes SH.",note:"SC + e, i = SH as in shoe.\nscena (scene), sci (skiing), pesce (fish), uscire (to exit).\nSCH + e, i = SK sound: schema, scherzare (to joke)."},
          {type:"mc",q:"SC in 'pesce' (fish) sounds like:",opts:["SK as in skip","SH as in shoe","S as in sun","CH as in church"],ans:"SH as in shoe",hint:"SC before E always makes the SH sound in Italian."},
          {type:"teach",kind:"info",nl:"GN",en:"GN: the NY sound",phonetic:"nyah",example:"A: Come si dice 'gnocchi'?\nB: NYOK-kee. GN = NY come in 'canyon'.",exampleEn:"A: How do you say 'gnocchi'?\nB: NYOK-kee. GN = NY as in 'canyon'.",note:"GN = NY sound (as in canyon or onion).\ngnocchi (NYOK-kee), lasagna (la-ZA-nya),\nbagno (BA-nyo, bathroom), sogno (SO-nyo, dream).\nNever pronounce the G and N separately."},
          {type:"mc",q:"GN in 'lasagna' sounds like:",opts:["G + N separately","NY as in canyon","N sound only","NG as in sing"],ans:"NY as in canyon",hint:"GN is always one blended sound: NY."},
          {type:"teach",kind:"info",nl:"GLI",en:"GLI: the LY sound",phonetic:"lyee",example:"A: Come si pronuncia 'figlio'?\nB: FEE-lyo. GLI = LY come in 'million'.",exampleEn:"A: How do you pronounce 'figlio'?\nB: FEE-lyo. GLI = LY as in 'million'.",note:"GLI = LY sound (as in million or brilliant).\nfiglio (FEE-lyo, son), moglie (MO-lyeh, wife),\naglio (A-lyo, garlic), famiglia (fa-MEE-lya, family).\nException: negligenza, glicine (GL + vowel = normal GL)."},
          {type:"mc",q:"GLI in 'famiglia' (family) sounds like:",opts:["GL as in glow","LY as in million","G + LI separately","Silent"],ans:"LY as in million",hint:"GLI produces a blended LY sound unique to Italian."},
          {type:"teach",kind:"info",nl:"Le doppie",en:"Double consonants: hold them longer",phonetic:"leh DOP-pyeh",example:"A: Qual e la differenza tra 'pala' e 'palla'?\nB: Pala = shovel. Palla = ball. La doppia L e piu lunga.",exampleEn:"A: What is the difference between 'pala' and 'palla'?\nB: Pala = shovel. Palla = ball. The double L is held longer.",note:"Double consonants are HELD LONGER, not said twice.\nbello (BEL-lo), pizza (PEET-tsa), mamma (MAM-ma).\nMinimal pairs: pala/palla (shovel/ball),\ncasa/cassa (house/crate), papa/pappa (pope/baby food)."},
          {type:"mc",q:"Double consonants in Italian are:",opts:["Said twice quickly","Held for a longer time","Exactly the same as single","Always silent"],ans:"Held for a longer time",hint:"Think of it as lingering on the sound, not repeating it."},
          {type:"teach",kind:"info",nl:"H muta",en:"H is ALWAYS silent in Italian",phonetic:"AHK-ka MOO-ta",example:"A: Come si pronuncia 'hotel'?\nB: o-TEL. La H e sempre muta.",exampleEn:"A: How do you pronounce 'hotel'?\nB: o-TEL. The H is always silent.",note:"H is ALWAYS silent. No exceptions.\nhotel = o-TEL, hanno (they have) = AN-no.\nH exists to force hard C/G: che, chi, ghetto.\nIt also appears in verb forms: ho (I have), hai (you have)."},
          {type:"mc",q:"The H in 'hanno' (they have) is:",opts:["Pronounced as in English","Always silent","Sometimes pronounced","A breathy sound"],ans:"Always silent",hint:"Italian H makes zero sound. It is purely a spelling device."},
          {type:"teach",kind:"info",nl:"La R italiana",en:"R is rolled, not like English R",phonetic:"",example:"A: La R italiana e come quella inglese?\nB: No! E una vibrazione della lingua.",exampleEn:"A: Is the Italian R like the English R?\nB: No! It is a tongue vibration.",note:"Italian R is a tongue tap or trill against the ridge\nbehind the upper teeth. Never the English R.\nSingle R = quick tap. Double RR = longer trill.\ncaro (dear) vs carro (cart)."},
          {type:"mc",q:"Italian R is produced by:",opts:["Curling the tongue back like English","Tapping or trilling the tongue against the upper ridge","Using the throat like French R","Keeping the tongue flat"],ans:"Tapping or trilling the tongue against the upper ridge",hint:"Italian R involves the tip of the tongue vibrating."},
          {type:"match",pairs:[{nl:"SC + e/i (scena)",en:"SH sound (shoe)"},{nl:"GN (gnocchi)",en:"NY sound (canyon)"},{nl:"GLI (figlio)",en:"LY sound (million)"},{nl:"H (hotel)",en:"Always silent"}]},
        ]},
      ]},

    // ── STAGE 4: SPELLING PATTERNS ──
    {id:"it_fp_s4",title:"Spelling Patterns",desc:"Gender, plurals, articles, and the apostrophe",icon:"📝",
      lessons:[
        {id:"it_fp_s4_l1",title:"Gender, Plurals & Articles",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"The building blocks of Italian grammar",desc:"Every Italian noun has a gender (masculine or feminine) and changes its ending for plural. The article must match in gender and number. Understanding these patterns is essential.",goals:["Know -o = masculine, -a = feminine pattern","Know plural endings: -o>-i, -a>-e, -e>-i","Know the six definite articles"]},
          {type:"teach",kind:"info",nl:"Il genere",en:"Gender: masculine and feminine",phonetic:"eel JEH-neh-reh",example:"A: 'Libro' e maschile o femminile?\nB: Maschile. IL libro.",exampleEn:"A: Is 'libro' masculine or feminine?\nB: Masculine. THE book (il).",note:"Most words ending in -o are masculine: libro, gatto, vino.\nMost words ending in -a are feminine: casa, donna, pizza.\nWords ending in -e can be either: padre (m), notte (f).\nAlways learn the article WITH the noun!"},
          {type:"mc",q:"A word ending in -o like 'libro' is usually:",opts:["Masculine","Feminine","Either one","Neutral"],ans:"Masculine",hint:"The -o ending is the most reliable masculine marker."},
          {type:"mc",q:"A word ending in -a like 'casa' is usually:",opts:["Masculine","Feminine","Either one","Neutral"],ans:"Feminine",hint:"The -a ending is the most reliable feminine marker."},
          {type:"teach",kind:"info",nl:"Il plurale",en:"Plural endings: change the vowel",phonetic:"eel ploo-RA-leh",example:"A: Come si fa il plurale di 'ragazzo'?\nB: Ragazzi. La O diventa I.",exampleEn:"A: How do you make the plural of 'ragazzo'?\nB: Ragazzi. The O becomes I.",note:"Masculine -o > -i: ragazzo > ragazzi, libro > libri.\nFeminine -a > -e: ragazza > ragazze, casa > case.\nEither -e > -i: padre > padri, notte > notti.\nItalian does NOT add -s for plural like English!"},
          {type:"mc",q:"The plural of 'ragazza' (girl) is:",opts:["ragazzas","ragazze","ragazzi","ragazza"],ans:"ragazze",hint:"Feminine -a words change to -e in the plural."},
          {type:"mc",q:"The plural of 'libro' (book) is:",opts:["libros","libre","libri","libroi"],ans:"libri",hint:"Masculine -o words change to -i in the plural."},
          {type:"teach",kind:"info",nl:"Gli articoli determinativi",en:"The six definite articles",phonetic:"lyee ar-TEE-ko-lee",example:"A: In inglese c'e solo 'the'. E in italiano?\nB: Sei articoli! Il, lo, la, i, gli, le.",exampleEn:"A: In English there is only 'the'. And in Italian?\nB: Six articles! Il, lo, la, i, gli, le.",note:"il (masc sg, most consonants): il libro, il gatto.\nlo (masc sg, z/s+cons/gn/ps): lo zio, lo studente.\nla (fem sg): la casa, la donna.\ni (masc pl, most): i libri, i gatti.\ngli (masc pl, z/s+cons/gn/ps/vowels): gli zii, gli studenti.\nle (fem pl): le case, le donne."},
          {type:"mc",q:"Which article goes with 'studente' (male student)?",opts:["il studente","lo studente","la studente","i studente"],ans:"lo studente",hint:"Words starting with s + consonant use 'lo' for masculine."},
          {type:"teach",kind:"info",nl:"L'apostrofo",en:"The apostrophe before vowels",phonetic:"la-POS-tro-fo",example:"A: Si dice 'la amica' o 'l'amica'?\nB: L'amica. Si usa l'apostrofo prima di vocale.",exampleEn:"A: Do you say 'la amica' or 'l'amica'?\nB: L'amica. You use the apostrophe before a vowel.",note:"Before vowels, lo and la become l' (apostrophe).\nl'uomo (the man), l'acqua (the water),\nl'amico (the male friend), l'amica (the female friend).\nThis avoids two vowels crashing together."},
          {type:"mc",q:"'L'uomo' uses an apostrophe because:",opts:["It is a foreign word","The noun starts with a vowel","It is masculine","All nouns use apostrophes"],ans:"The noun starts with a vowel",hint:"Lo + uomo would sound awkward. L'uomo flows better."},
          {type:"match",pairs:[{nl:"-o ending (libro)",en:"Usually masculine"},{nl:"-a ending (casa)",en:"Usually feminine"},{nl:"-o > -i (libri)",en:"Masculine plural"},{nl:"-a > -e (case)",en:"Feminine plural"}]},
        ]},
      ]},
  ]},
  pt:{name:"Portuguese Foundations Play",icon:"🇧🇷",blueprint:"latin_simple",stages:[]},
  ro:{name:"Romanian Foundations Play",icon:"🇷🇴",blueprint:"latin_simple",stages:[]},
  ru:{name:"Russian Script Play",icon:"🇷🇺",blueprint:"cyrillic",stages:[]},
  // ══════════════════════════════════════════════════════════════════
  // CHINESE (MANDARIN) PINYIN & TONES PLAYTHROUGH
  // 6 stages (Phase 0-5), ~12 lessons
  // Follows SCRIPT_BLUEPRINTS.hanzi: orientation > tones > pinyin_initials > pinyin_finals > basic_strokes > radical_awareness
  // ══════════════════════════════════════════════════════════════════
  zh:{name:"Learn Pinyin & Tones",icon:"🇨🇳",blueprint:"hanzi",stages:[
  // ── PHASE 0: Orientation (Chinese writing overview) ──
  {id:"zh_fp_p0",title:"Phase 0: Chinese Writing",desc:"What Chinese characters are and how pinyin helps you read them",icon:"📝",
    lessons:[
      {id:"zh_fp_p0_l1",title:"Characters and Pinyin",icon:"📝",xp:15,board:true,steps:[
        {type:"intro",title:"Welcome to Chinese!",desc:"Chinese uses characters (hanzi) instead of an alphabet. Each character represents a syllable with meaning. Pinyin is the official romanization system that shows you how to pronounce characters. You will learn pinyin first, then start recognizing characters.",goals:["Know what hanzi (characters) are","Know what pinyin is and why it matters","Understand tones are essential in Chinese"]},
        {type:"teach",kind:"info",nl:"汉字",en:"Hanzi (Chinese characters)",phonetic:"hahn-dzuh",example:"山 川 日 月",exampleEn:"mountain, river, sun, moon",note:"Chinese has no alphabet. Each character is a unit of meaning and sound. There are about 3,000 characters in daily use. You will learn them gradually alongside pinyin."},
        {type:"teach",kind:"info",nl:"拼音",en:"Pinyin (romanization)",phonetic:"pin-yin",example:"ni hao = 你好",exampleEn:"Pinyin spells out the pronunciation using Latin letters",note:"Pinyin uses the Latin alphabet plus tone marks to show exactly how to pronounce each character. It is the standard system used in mainland China and taught worldwide. It is your bridge to reading Chinese."},
        {type:"teach",kind:"info",nl:"声调",en:"Tones",phonetic:"sheng-diao",example:"ma ma ma ma = four different words",exampleEn:"Same syllable, four tones, four completely different meanings",note:"Mandarin has 4 main tones plus a neutral tone. The tone is as important as the consonant and vowel. Saying the wrong tone changes the meaning entirely. You will master tones in the next phase."},
        {type:"mc",q:"What is pinyin?",opts:["A type of Chinese character","The romanization system for Chinese pronunciation","A Chinese dialect","A tone mark"],ans:"The romanization system for Chinese pronunciation",hint:"It uses Latin letters to spell out how characters sound"},
        {type:"mc",q:"How many tones does Mandarin have?",opts:["2","3","4 main tones (plus neutral)","6"],ans:"4 main tones (plus neutral)",hint:"Four distinct pitch patterns, each changing the meaning of a syllable"},
        {type:"mc",q:"Why are tones important in Chinese?",opts:["They are optional stylistic choices","They change the meaning of words completely","They only matter in formal speech","They are the same as English stress"],ans:"They change the meaning of words completely",hint:"The syllable 'ma' means mother, hemp, horse, or scold depending on tone"},
        {type:"tip",title:"Tones Are Not Optional",text:"In English, changing your pitch expresses emotion: 'Really?' (surprised) vs 'Really.' (flat).\nIn Chinese, changing pitch changes the WORD itself.\nma with tone 1 = mother.\nma with tone 3 = horse.\nGetting tones right is not about sounding polished. It is about being understood.",icon:"🔑"},
      ]},
    ]},
  // ── PHASE 1: The Four Tones ──
  {id:"zh_fp_p1",title:"Phase 1: The Four Tones",desc:"Master the 4 tones that make Chinese Chinese",icon:"🎵",
    lessons:[
      {id:"zh_fp_p1_l1",title:"Tones 1 and 2",icon:"🎵",xp:20,board:true,steps:[
        {type:"intro",title:"Your First Two Tones",desc:"Tone 1 is high and flat, like sustaining a musical note. Tone 2 rises, like asking a surprised 'What?' in English. These two are the easiest to distinguish.",goals:["Produce Tone 1 (high flat)","Produce Tone 2 (rising)","Distinguish Tone 1 from Tone 2"]},
        {type:"teach",kind:"info",nl:"第一声",en:"Tone 1: High Flat",phonetic:"",example:"ma (tone 1) = mother",exampleEn:"Hold a high, steady pitch. Like singing one sustained note.",note:"Tone 1 mark: macron (straight line above the vowel).\nExample: m\u0101 (mother), t\u0101 (he/she), b\u0101 (eight).\nKeep the pitch HIGH and FLAT. Do not let it drop."},
        {type:"teach",kind:"info",nl:"第二声",en:"Tone 2: Rising",phonetic:"",example:"ma (tone 2) = hemp/numb",exampleEn:"Start mid-pitch and rise, like asking 'What?' in surprise.",note:"Tone 2 mark: acute accent (rising line above the vowel).\nExample: m\u00E1 (hemp), sh\u00ED (ten), m\u00EDng (name).\nThink of the questioning 'Huh?' or 'What?' intonation."},
        {type:"mc",q:"Tone 1 sounds like:",opts:["A questioning rise","A sharp drop","A high sustained note","A dipping then rising sound"],ans:"A high sustained note",hint:"Think of holding one steady note while singing"},
        {type:"mc",q:"Tone 2 sounds like:",opts:["A falling pitch","A flat pitch","A rising pitch, like asking 'What?'","A dip then rise"],ans:"A rising pitch, like asking 'What?'",hint:"Think of your voice when you ask a surprised question"},
        {type:"mc",q:"Which tone mark is a straight line above the vowel?",opts:["Tone 2","Tone 3","Tone 4","Tone 1"],ans:"Tone 1",hint:"This mark looks like a flat, level line, matching the flat pitch"},
      ]},
      {id:"zh_fp_p1_l2",title:"Tones 3 and 4",icon:"🎵",xp:20,board:true,steps:[
        {type:"intro",title:"Tones 3 and 4",desc:"Tone 3 dips low then rises slightly. Tone 4 drops sharply, like a stern command. These two give English speakers the most trouble.",goals:["Produce Tone 3 (dip-rise)","Produce Tone 4 (falling)","Distinguish all 4 tones"]},
        {type:"teach",kind:"info",nl:"第三声",en:"Tone 3: Dip-Rise",phonetic:"",example:"ma (tone 3) = horse",exampleEn:"Start mid, dip LOW, then rise slightly. The dip is the key.",note:"Tone 3 mark: caron (v-shape above the vowel).\nExample: m\u01CE (horse), n\u01D0 (you), h\u01CEo (good).\nThe dip is the defining feature. In connected speech, Tone 3 often stays low without rising."},
        {type:"teach",kind:"info",nl:"第四声",en:"Tone 4: Falling",phonetic:"",example:"ma (tone 4) = scold",exampleEn:"Start high and drop sharply, like saying 'No!' firmly.",note:"Tone 4 mark: grave accent (falling line above the vowel).\nExample: m\u00E0 (scold), sh\u00EC (is), d\u00E0 (big).\nShort and decisive. Think of an angry 'No!' or a firm command."},
        {type:"teach",kind:"info",nl:"轻声",en:"Neutral Tone",phonetic:"",example:"mama = mom (second ma is neutral)",exampleEn:"Short, light, unstressed. No tone mark in pinyin.",note:"The neutral tone is short and light. It has no tone mark.\nCommon in: particles (de, le, ma), repeated syllables (mama),\nand some suffixes (zi in haizi 'child')."},
        {type:"mc",q:"Tone 3 sounds like:",opts:["High and flat","Rising","Dipping low then rising slightly","Sharply falling"],ans:"Dipping low then rising slightly",hint:"The pitch goes down into a valley then comes back up a little"},
        {type:"mc",q:"Tone 4 sounds like:",opts:["A question","A command: sharp and falling","A sustained note","A gentle dip"],ans:"A command: sharp and falling",hint:"Think of firmly saying 'No!' or giving a stern order"},
        {type:"mc",q:"Which word means 'horse'?",opts:["m\u0101","m\u00E1","m\u01CE","m\u00E0"],ans:"m\u01CE",hint:"This tone dips low. The caron mark looks like a small valley"},
        {type:"mc",q:"Which word means 'mother'?",opts:["m\u01CE","m\u00E0","m\u00E1","m\u0101"],ans:"m\u0101",hint:"This tone is high and flat. The mark is a straight line"},
        {type:"tip",title:"Tone Sandhi: Two Third Tones",text:"When two Tone 3 syllables appear together, the first one changes to Tone 2.\nExample: n\u01D0 h\u01CEo is actually pronounced n\u00ED h\u01CEo.\nThis is called tone sandhi. It is automatic and universal.\nYou do not need to memorize it as a rule. Just listen and imitate.",icon:"💡"},
      ]},
    ]},
  // ── PHASE 2: Pinyin Initials ──
  {id:"zh_fp_p2",title:"Phase 2: Pinyin Initials",desc:"21 consonant sounds at the beginning of Chinese syllables",icon:"🔤",
    lessons:[
      {id:"zh_fp_p2_l1",title:"Easy Initials (b p m f, d t n l, g k h)",icon:"🔤",xp:20,board:true,steps:[
        {type:"intro",title:"Familiar Consonants",desc:"Many Chinese initials sound similar to English. But watch out for b/p, d/t, g/k: in Chinese, the difference is aspiration (a puff of air), not voicing.",goals:["Know the 12 'easy' initials","Understand aspiration vs voicing","Pronounce b/p, d/t, g/k correctly"]},
        {type:"teach",kind:"info",nl:"b p m f",en:"Labial initials",phonetic:"",example:"ba pa ma fa",exampleEn:"b=ball, p=pan(with puff), m=mom, f=fun",note:"b is like English b but unaspirated (no puff of air).\np is like English p WITH a strong puff of air.\nm and f are the same as English."},
        {type:"teach",kind:"info",nl:"d t n l",en:"Alveolar initials",phonetic:"",example:"da ta na la",exampleEn:"d=dog, t=top(with puff), n=no, l=let",note:"d is unaspirated (like 'dog' but softer).\nt has a strong puff of air (hold your hand in front of your mouth).\nn and l are the same as English."},
        {type:"teach",kind:"info",nl:"g k h",en:"Velar initials",phonetic:"",example:"ga ka ha",exampleEn:"g=go, k=key(with puff), h=hat",note:"g is unaspirated (like 'go' but softer).\nk has a strong puff of air.\nh is like English h but slightly more guttural, from the back of the throat."},
        {type:"mc",q:"What is the key difference between Chinese b and p?",opts:["Voicing (vibration)","Aspiration (puff of air)","Tongue position","Lip shape"],ans:"Aspiration (puff of air)",hint:"Hold your hand near your mouth. One consonant blows air, the other does not."},
        {type:"mc",q:"How many 'easy' initial groups are there?",opts:["2 groups","3 groups (labial, alveolar, velar)","4 groups","5 groups"],ans:"3 groups (labial, alveolar, velar)",hint:"Grouped by where in the mouth the sound is made"},
        {type:"match",pairs:[{nl:"b",en:"ball (no puff)"},{nl:"p",en:"pan (with puff)"},{nl:"d",en:"dog (no puff)"},{nl:"t",en:"top (with puff)"}]},
      ]},
      {id:"zh_fp_p2_l2",title:"Tricky Initials (j q x, zh ch sh r, z c s)",icon:"🔤",xp:20,board:true,steps:[
        {type:"intro",title:"The Hard Sounds",desc:"These 9 initials have no direct English equivalents. The palatals (j, q, x) and retroflexes (zh, ch, sh, r) are the hardest sounds for English speakers.",goals:["Distinguish palatals from retroflexes from dentals","Know that j/q/x only pair with i and u-umlaut","Produce the retroflex zh/ch/sh/r sounds"]},
        {type:"teach",kind:"info",nl:"j q x",en:"Palatal initials",phonetic:"",example:"ji qi xi",exampleEn:"j=jee, q=chee(with puff), x=shee",note:"These sounds are made with the tongue touching the hard palate.\nj is like 'jee' but softer.\nq is like 'chee' WITH a puff of air.\nx is like 'shee' with tongue flat.\nThey ONLY appear before i or u-umlaut. Never before a, o, u."},
        {type:"teach",kind:"info",nl:"zh ch sh r",en:"Retroflex initials",phonetic:"",example:"zhi chi shi ri",exampleEn:"Tongue curled back, touching the roof of the mouth",note:"Curl your tongue tip back toward the roof of your mouth.\nzh is like English 'j' in 'judge' but with curled tongue.\nch is like English 'ch' in 'church' but with curled tongue + puff.\nsh is like English 'sh' but with curled tongue.\nr is unique: like a buzzy 'r' with curled tongue."},
        {type:"teach",kind:"info",nl:"z c s",en:"Dental initials",phonetic:"",example:"zi ci si",exampleEn:"z=adds, c=cats(with puff), s=sun",note:"Tongue tip touches the back of your front teeth.\nz is like 'ds' in 'adds' (NOT English 'z' buzz).\nc is like 'ts' in 'cats' WITH a puff of air.\ns is just like English 's' in 'sun'."},
        {type:"mc",q:"The palatals j, q, x can only appear before:",opts:["a and o","Any vowel","i and u-umlaut only","u and e"],ans:"i and u-umlaut only",hint:"These sounds require the tongue to be in a high front position"},
        {type:"mc",q:"Retroflex sounds (zh, ch, sh, r) are made by:",opts:["Pressing lips together","Curling the tongue tip back","Pressing tongue against teeth","Opening the mouth wide"],ans:"Curling the tongue tip back",hint:"The tongue tip touches the roof of the mouth behind the ridge"},
        {type:"match",pairs:[{nl:"j q x",en:"Palatal (tongue on hard palate)"},{nl:"zh ch sh r",en:"Retroflex (tongue curled back)"},{nl:"z c s",en:"Dental (tongue on teeth)"}]},
      ]},
    ]},
  // ── PHASE 3: Pinyin Finals ──
  {id:"zh_fp_p3",title:"Phase 3: Pinyin Finals",desc:"The vowel sounds that complete each Chinese syllable",icon:"🗣️",
    lessons:[
      {id:"zh_fp_p3_l1",title:"Simple and Compound Finals",icon:"🗣️",xp:20,board:true,steps:[
        {type:"intro",title:"The Vowel System",desc:"Chinese has 6 simple finals (single vowels), compound finals (vowel combinations), and nasal finals (ending in -n or -ng). Together with initials and tones, these make every possible Chinese syllable.",goals:["Know the 6 simple finals","Know the key compound finals","Distinguish -n from -ng endings"]},
        {type:"teach",kind:"info",nl:"a o e i u \u00FC",en:"The 6 simple finals",phonetic:"",example:"a o e i u \u00FC",exampleEn:"ah, oh, uh, ee, oo, \u00FC (French u)",note:"a = open 'ah' as in 'father'.\no = rounded 'oh' as in 'more'.\ne = unrounded 'uh' (NOT English 'ee').\ni = 'ee' as in 'see'.\nu = 'oo' as in 'moon'.\n\u00FC = like French 'u' or German '\u00FC'. Round lips, say 'ee'."},
        {type:"teach",kind:"info",nl:"ai ei ao ou",en:"Compound finals",phonetic:"",example:"ai ei ao ou",exampleEn:"ai=eye, ei=ay, ao=ow, ou=oh",note:"ai sounds like 'eye'.\nei sounds like 'ay' in 'say'.\nao sounds like 'ow' in 'how'.\nou sounds like 'oh' in 'go'.\nThese are smooth glides, not two separate vowels."},
        {type:"teach",kind:"info",nl:"-n vs -ng",en:"Nasal finals",phonetic:"",example:"an ang, en eng, in ing",exampleEn:"-n ends with tongue on ridge, -ng ends with back of tongue",note:"-n: tongue tip touches the ridge behind upper teeth. (an, en, in)\n-ng: back of tongue rises. Mouth stays open. (ang, eng, ing)\nThis distinction is critical. Many minimal pairs differ only by -n vs -ng."},
        {type:"mc",q:"The pinyin 'e' sounds like:",opts:["'ee' as in 'see'","'ay' as in 'say'","'uh' (unrounded, mid-back vowel)","'eh' as in 'bed'"],ans:"'uh' (unrounded, mid-back vowel)",hint:"This is the trickiest simple final for English speakers. It is NOT the 'e' you expect."},
        {type:"mc",q:"How do -n and -ng differ?",opts:["They sound the same","-n uses tongue tip, -ng uses back of tongue","Volume difference only","-n is nasal, -ng is not"],ans:"-n uses tongue tip, -ng uses back of tongue",hint:"Feel where your tongue is when you say 'an' vs 'ang'"},
        {type:"match",pairs:[{nl:"ai",en:"eye"},{nl:"ei",en:"ay (say)"},{nl:"ao",en:"ow (how)"},{nl:"ou",en:"oh (go)"}]},
      ]},
    ]},
  // ── PHASE 4: Basic Strokes ──
  {id:"zh_fp_p4",title:"Phase 4: Writing Basics",desc:"The fundamental strokes and stroke order rules for Chinese characters",icon:"✍️",
    lessons:[
      {id:"zh_fp_p4_l1",title:"Eight Basic Strokes",icon:"✍️",xp:15,board:true,steps:[
        {type:"intro",title:"How Characters Are Built",desc:"Every Chinese character, no matter how complex, is made from combinations of just 8 basic stroke types. Learning these strokes and the order rules makes writing logical.",goals:["Know the 8 basic stroke types","Understand top-to-bottom, left-to-right stroke order","Write simple characters using basic strokes"]},
        {type:"teach",kind:"info",nl:"\u6A2A \u7AD6 \u6487 \u6346",en:"The Four Core Strokes",phonetic:"heng shu pie na",example:"\u4E00 (horizontal) \u4E28 (vertical) \u4E3F (left-falling) \u4E36 (dot/right-falling)",exampleEn:"These four strokes build 80% of all characters",note:"Horizontal (heng): left to right. Like writing a dash.\nVertical (shu): top to bottom. Like drawing a line down.\nLeft-falling (pie): top-right to bottom-left. A diagonal slash.\nDot/right-falling (na): top-left to bottom-right, or a quick press."},
        {type:"teach",kind:"info",nl:"笔顺规则",en:"Stroke Order Rules",phonetic:"bi shun gui ze",example:"\u5341 = horizontal first, then vertical",exampleEn:"Top to bottom, left to right, outside before inside",note:"Rule 1: Top to bottom (\u4E09: three horizontals, top first).\nRule 2: Left to right (\u5DDD: three verticals, left first).\nRule 3: Horizontal before vertical (\u5341: horizontal then vertical).\nRule 4: Outside before inside (\u56DE: outer box first)."},
        {type:"mc",q:"How many basic stroke types are there in Chinese?",opts:["4","6","8","12"],ans:"8",hint:"A classic mnemonic in Chinese calligraphy uses the character yong (forever) which contains all of them"},
        {type:"mc",q:"When writing the character for 'ten' (\u5341), which stroke comes first?",opts:["The vertical stroke","The horizontal stroke","Either one","They are written simultaneously"],ans:"The horizontal stroke",hint:"The rule is: horizontal before vertical when they cross"},
      ]},
    ]},
  // ── PHASE 5: Radical Awareness ──
  {id:"zh_fp_p5",title:"Phase 5: Radicals",desc:"Learn to decode characters using their component parts",icon:"⿱",
    lessons:[
      {id:"zh_fp_p5_l1",title:"Character Building Blocks",icon:"⿱",xp:15,board:true,steps:[
        {type:"intro",title:"Radicals: The DNA of Characters",desc:"Most characters are compounds made of smaller parts. The radical often hints at the meaning, while the other component hints at the pronunciation. Learning common radicals lets you guess meanings of new characters.",goals:["Know what a radical is","Recognize 10 high-frequency radicals","Use radicals to guess character meaning"]},
        {type:"teach",kind:"info",nl:"亻(人)",en:"Person radical",phonetic:"ren",example:"\u4ED6 (he), \u4F60 (you), \u4F4F (live), \u4F5C (do/make)",exampleEn:"All have the 'person' radical on the left",note:"When 人 (person) appears as a radical on the left side of a character, it becomes a thin version: 亻.\nCharacters with 亻 often relate to people or human actions."},
        {type:"teach",kind:"info",nl:"氵(水)",en:"Water radical",phonetic:"shui",example:"\u6CB3 (river), \u6D77 (sea), \u6C61 (lake), \u6D17 (wash)",exampleEn:"All have the 'water' radical on the left",note:"水 (water) becomes three drops 氵 when used as a radical.\nCharacters with 氵 almost always relate to water, liquids, or flowing."},
        {type:"teach",kind:"info",nl:"口",en:"Mouth radical",phonetic:"kou",example:"\u5403 (eat), \u5582 (hey), \u5537 (oh), \u5473 (taste)",exampleEn:"All have the 'mouth' radical",note:"口 (mouth) keeps its shape as a radical.\nCharacters with 口 often relate to eating, speaking, or sounds."},
        {type:"teach",kind:"info",nl:"木",en:"Tree/Wood radical",phonetic:"mu",example:"\u6797 (forest), \u684C (table), \u679C (fruit), \u6821 (school)",exampleEn:"All have the 'tree' radical",note:"木 (tree) appears in characters related to wood, trees, and things made of wood.\nTwo trees = 林 (forest/grove). Three trees = 森 (dense forest)."},
        {type:"mc",q:"A character with 氵 on the left probably relates to:",opts:["Fire","People","Water","Metal"],ans:"Water",hint:"This radical is three drops, representing a liquid element"},
        {type:"mc",q:"The radical 亻 is a simplified form of:",opts:["大 (big)","人 (person)","口 (mouth)","木 (tree)"],ans:"人 (person)",hint:"When this character appears as a component on the left, it becomes slimmer"},
        {type:"mc",q:"Why are radicals useful for learners?",opts:["They tell you the exact pronunciation","They help guess meaning of unknown characters","They are required for typing","They replace pinyin"],ans:"They help guess meaning of unknown characters",hint:"The radical component often connects to the semantic field of the character"},
        {type:"tip",title:"Semantic + Phonetic = Most Characters",text:"About 80% of Chinese characters are 'phono-semantic compounds'.\nOne part hints at meaning (the radical), the other hints at pronunciation.\nExample: 妈 (mother) = 女 (woman radical) + 马 (horse, gives the 'ma' sound).\nThis is NOT random. Once you know common radicals, you can decode thousands of characters.",icon:"🔑"},
      ]},
    ]},
  ]},
};

// ══════════════════════════════════════════════════════════════════
// FK GATE QUIZ — Allows advanced learners to skip Foundations
// Notebook: "Gate must detect 'memorized common words' vs 'general
// decoding skill,' so it uses unfamiliar syllables and pseudo-words."
// 5 task types: A (jamo identify), B (build from audio), C (decode
// pseudo-words), D (batchim mapping), E (liaison recognition).
// Pass: A+B≥90%, C≥85%, D+E≥80%. Fail → diagnostic routing.
// ══════════════════════════════════════════════════════════════════
export const FK_GATE_QUIZ = {
  ko:{
    title:"Hangul Gate Quiz",
    desc:"Can you already decode Hangul? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Jamo Speed Identify (10 items) ──
      // "Show a single jamo; learner chooses its sound category from 3 options."
      {id:"gate_a",title:"Task A: Jamo Recognition",desc:"Identify the sound of each jamo.",type:"mc",category:"AB",items:[
        {q:"What sound does ㅁ make?",opts:["m","n","b"],ans:"m"},
        {q:"What sound does ㄱ make?",opts:["n","g/k","d"],ans:"g/k"},
        {q:"What sound does ㅅ make?",opts:["j","h","s"],ans:"s"},
        {q:"What sound does ㅏ make?",opts:["o","a","u"],ans:"a"},
        {q:"What sound does ㅜ make?",opts:["u","eu","o"],ans:"u"},
        {q:"What sound does ㄹ make?",opts:["n","m","r/l"],ans:"r/l"},
        {q:"What sound does ㅓ make?",opts:["a","eo","i"],ans:"eo"},
        {q:"What sound does ㅎ make?",opts:["h","s","j"],ans:"h"},
        {q:"What sound does ㅗ make?",opts:["u","eu","o"],ans:"o"},
        {q:"What sound does ㅈ make?",opts:["s","j","ch"],ans:"j"},
      ]},
      // ── Task B: Build from Audio (10 items) ──
      // "Hear a syllable; pick the correct block from options."
      {id:"gate_b",title:"Task B: Block Assembly",desc:"Pick the correct block for each syllable.",type:"mc",category:"AB",items:[
        {q:"Which block represents 'na'?",opts:["나","가","다","마"],ans:"나"},
        {q:"Which block represents 'go'?",opts:["노","고","도","모"],ans:"고"},
        {q:"Which block represents 'su'?",opts:["수","주","무","누"],ans:"수"},
        {q:"Which block represents 'hi'?",opts:["시","비","히","지"],ans:"히"},
        {q:"Which block represents 'beo'?",opts:["더","너","버","서"],ans:"버"},
        {q:"Which block represents 'o' (vowel only)?",opts:["아","오","우","으"],ans:"오"},
        {q:"Which block represents 'ri'?",opts:["니","리","미","시"],ans:"리"},
        {q:"Which block represents 'ja'?",opts:["자","사","하","나"],ans:"자"},
        {q:"Which block represents 'mu'?",opts:["누","구","루","무"],ans:"무"},
        {q:"Which block represents 'eu' (vowel only)?",opts:["이","으","우","아"],ans:"으"},
      ]},
      // ── Task C: Decode Pseudo-Words (8 items) ──
      // "50% pseudo-words (phonotactically legal), 50% low-frequency real words."
      {id:"gate_c",title:"Task C: Decode Syllables",desc:"Read each 2-block item and pick the correct pronunciation.",type:"mc",category:"C",items:[
        {q:"How do you read 누비?",opts:["nu-bi","na-bi","mu-bi","nu-mi"],ans:"nu-bi"},
        {q:"How do you read 다로? (pseudo)",opts:["da-ro","na-ro","da-mo","ta-lo"],ans:"da-ro"},
        {q:"How do you read 하기?",opts:["ha-gi","ho-gi","ha-bi","he-gi"],ans:"ha-gi"},
        {q:"How do you read 거시? (pseudo)",opts:["geo-si","go-si","geu-si","ga-si"],ans:"geo-si"},
        {q:"How do you read 소리?",opts:["so-ri","su-ri","sa-ri","si-ri"],ans:"so-ri"},
        {q:"How do you read 무자? (pseudo)",opts:["mu-ja","mo-ja","mu-sa","ma-ja"],ans:"mu-ja"},
        {q:"How do you read 버노? (pseudo)",opts:["beo-no","ba-no","bu-no","bo-no"],ans:"beo-no"},
        {q:"How do you read 마루?",opts:["ma-ru","mo-ru","mu-ru","ma-nu"],ans:"ma-ru"},
      ]},
      // ── Task D: Batchim Mapping (8 items) ──
      // "Show a CVC block; learner selects which of the 7 final sounds it ends with."
      {id:"gate_d",title:"Task D: Batchim Mapping",desc:"Which of the 7 final sounds does each block end with?",type:"mc",category:"DE",items:[
        {q:"옷 ends with ㅅ. What final sound?",opts:["[s]","[t]","[k]","[n]"],ans:"[t]"},
        {q:"밥 ends with ㅂ. What final sound?",opts:["[p]","[t]","[m]","[b]"],ans:"[p]"},
        {q:"국 ends with ㄱ. What final sound?",opts:["[k]","[t]","[g]","[n]"],ans:"[k]"},
        {q:"꽃 ends with ㅊ. What final sound?",opts:["[ch]","[t]","[k]","[p]"],ans:"[t]"},
        {q:"앙 ends with ㅇ. What final sound?",opts:["[ng]","[n]","[m]","(silent)"],ans:"[ng]"},
        {q:"말 ends with ㄹ. What final sound?",opts:["[l]","[n]","[r]","[t]"],ans:"[l]"},
        {q:"밖 ends with ㄲ. What final sound?",opts:["[k]","[kk]","[t]","[p]"],ans:"[k]"},
        {q:"남 ends with ㅁ. What final sound?",opts:["[m]","[n]","[p]","[ng]"],ans:"[m]"},
      ]},
      // ── Task E: Liaison Recognition (5 items) ──
      // "Show two blocks; ask which audio matches the connected pronunciation."
      {id:"gate_e",title:"Task E: Liaison & Sound Rules",desc:"How does the connected pronunciation change?",type:"mc",category:"DE",items:[
        {q:"한국어: ㄱ from 국 meets ㅇ in 어. What happens?",opts:["han-gu-geo (ㄱ moves forward)","han-guk-eo (each block stays separate)","han-gung-eo (ㄱ becomes nasal)","han-gu-eo (ㄱ drops completely)"],ans:"han-gu-geo (ㄱ moves forward)"},
        {q:"먹어: ㄱ from 먹 meets ㅇ in 어. Result?",opts:["meo-geo (liaison)","meok-eo (no change)","meong-eo","meo-eo (ㄱ drops)"],ans:"meo-geo (liaison)"},
        {q:"합니다: ㅂ before ㄴ. Result?",opts:["ham-ni-da (ㅂ→ㅁ nasal)","hap-ni-da (no change)","hab-ni-da","hang-ni-da"],ans:"ham-ni-da (ㅂ→ㅁ nasal)"},
        {q:"학년: ㄱ before ㄴ. Result?",opts:["hang-nyeon (ㄱ→ㅇ nasal)","hak-nyeon (no change)","han-nyeon","hag-nyeon"],ans:"hang-nyeon (ㄱ→ㅇ nasal)"},
        {q:"받는: ㄷ before ㄴ. Result?",opts:["ban-neun (ㄷ→ㄴ nasal)","bat-neun (no change)","bad-neun","bam-neun"],ans:"ban-neun (ㄷ→ㄴ nasal)"},
      ]},
    ],
    // Diagnostic routing: fail → which phase to study
    diagnosticRouting:{
      A:"Phase 1-2: You need more practice recognizing vowels and consonants.",
      B:"Phase 2-4: Practice building blocks from consonants + vowels.",
      C:"Phase 3-5: Keep practicing decoding CV and multi-syllable blocks.",
      D:"Phase 6: Study batchim and the 7 final sounds table (Phase 10).",
      E:"Phase 10: Study liaison (연음) and nasalization rules.",
    },
  },
  // ══════════════════════════════════════════════════════════════
  // DUTCH GATE QUIZ — Test out of Foundations
  // 5 tasks (A-E), 35 items, maps to Playthrough stages 1-6
  // Anti-leak compliant: no answer in question stem
  // ══════════════════════════════════════════════════════════════
  nl:{
    title:"Dutch Foundations Gate Quiz",
    desc:"Already know Dutch spelling rules? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Vowel Recognition (8 items) — maps to Stage 1 ──
      {id:"gate_a",title:"Task A: Vowel Recognition",desc:"Identify the vowel sound in each word.",type:"mc",category:"AB",items:[
        {q:"What vowel is in 'kat' (cat)?",opts:["Short a","Long a","Short o"],ans:"Short a"},
        {q:"What vowel is in 'boom' (tree)?",opts:["Short o","Long o","Short u"],ans:"Long o"},
        {q:"What vowel is in 'bus' (bus)?",opts:["Short o","Short u","Short i"],ans:"Short u"},
        {q:"What vowel is in 'been' (leg)?",opts:["Short e","Long e","Short i"],ans:"Long e"},
        {q:"What vowel is in 'pit' (seed)?",opts:["Short i","Short e","Short u"],ans:"Short i"},
        {q:"What vowel is in 'maan' (moon)?",opts:["Short a","Long a","Long o"],ans:"Long a"},
        {q:"What vowel is in 'vuur' (fire)?",opts:["Long u","Short u","Long o"],ans:"Long u"},
        {q:"What vowel is in 'bos' (forest)?",opts:["Short a","Long o","Short o"],ans:"Short o"},
      ]},
      // ── Task B: Syllable Logic (8 items) — maps to Stages 2-3 ──
      {id:"gate_b",title:"Task B: Syllable Logic",desc:"Apply open/closed syllable rules.",type:"mc",category:"AB",items:[
        {q:"In 'la-ken' (sheet), the first syllable is…",opts:["Closed → short","Open → long","Double → long"],ans:"Open → long"},
        {q:"In 'lak' (lacquer), the syllable is…",opts:["Open → long","Closed → short"],ans:"Closed → short"},
        {q:"Why does 'maan' use aa?",opts:["Closed + long needs double","Open syllable signals long","It is an irregular word"],ans:"Closed + long needs double"},
        {q:"'man' vs 'maan' — the difference is…",opts:["Vowel length only","Different consonants","Different stress"],ans:"Vowel length only"},
        {q:"'bo-men' has a single o because…",opts:["Open syllable signals long","It is an exception","Short o"],ans:"Open syllable signals long"},
        {q:"In 'bom' (bomb), the vowel is short because…",opts:["Double vowel","Closed syllable","Open syllable"],ans:"Closed syllable"},
        {q:"Which has a long vowel?",opts:["tak","taak","kat"],ans:"taak"},
        {q:"Which has a short vowel?",opts:["boom","bot","boot"],ans:"bot"},
      ]},
      // ── Task C: Spelling Engine (8 items) — maps to Stage 4 ──
      {id:"gate_c",title:"Task C: Spelling Rules",desc:"Apply doubling, dropping, and digraph rules.",type:"mc",category:"C",items:[
        {q:"Plural of 'man' (man)?",opts:["manen","mannen","maannen"],ans:"mannen"},
        {q:"Plural of 'maan' (moon)?",opts:["manen","maanen","mannen"],ans:"manen"},
        {q:"Plural of 'kat' (cat)?",opts:["katen","katten","kaaten"],ans:"katten"},
        {q:"Plural of 'boom' (tree)?",opts:["bomen","boomen","bommen"],ans:"bomen"},
        {q:"'dik' + -e becomes…",opts:["dike","dikke","dieke"],ans:"dikke"},
        {q:"'groot' + -e becomes…",opts:["groote","grote","grotten"],ans:"grote"},
        {q:"'wit' + -e becomes…",opts:["wite","witte","wiete"],ans:"witte"},
        {q:"'rood' + -e becomes…",opts:["roode","rode","rodde"],ans:"rode"},
      ]},
      // ── Task D: Consonant Decoding (6 items) — maps to Stage 3 ──
      {id:"gate_d",title:"Task D: Consonant Decoding",desc:"Decode digraphs, clusters, and tricky consonants.",type:"mc",category:"DE",items:[
        {q:"'ch' in Dutch represents how many sounds?",opts:["Two","One","Three"],ans:"One"},
        {q:"'straat' (street) has how many syllables?",opts:["One","Two","Three"],ans:"One"},
        {q:"The Dutch g sounds like…",opts:["English g in 'go'","A throaty fricative","English h"],ans:"A throaty fricative"},
        {q:"'sch' in 'school' is…",opts:["One sound","Two sounds: s + ch","Three sounds"],ans:"Two sounds: s + ch"},
        {q:"Digraphs ch and ng can be doubled in spelling.",opts:["True","False"],ans:"False"},
        {q:"Three-consonant onsets in Dutch always start with…",opts:["t","s","r"],ans:"s"},
      ]},
      // ── Task E: Irregularities (5 items) — maps to Stage 6 ──
      {id:"gate_e",title:"Task E: Irregularities",desc:"Handle devoicing, spelling splits, and past tense.",type:"mc",category:"DE",items:[
        {q:"'hond' (dog) sounds like 'hont'. The spelling uses d because…",opts:["Plural 'honden' reveals d","Dutch always writes d","It is silent"],ans:"Plural 'honden' reveals d"},
        {q:"'ei' and 'ij' represent…",opts:["Different sounds","The same sound","Short and long versions"],ans:"The same sound"},
        {q:"Stem 'werk' — past tense ending?",opts:["-de","-te"],ans:"-te"},
        {q:"'ou' and 'au' represent…",opts:["Different sounds","The same sound","Short and long versions"],ans:"The same sound"},
        {q:"Stem 'bouw': past tense ending?",opts:["-de","-te"],ans:"-de"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stage 1: Practice identifying short and long vowels in CVC words.",
      B:"Stage 2: Study open/closed syllable logic and double vowels.",
      C:"Stage 4: Practice consonant doubling and vowel dropping rules.",
      D:"Stage 3: Study consonant digraphs (ch, ng) and clusters.",
      E:"Stage 6: Study final devoicing, ei/ij splits, and 't kofschip.",
    },
  },
  ar:{
    title:"Arabic Script Gate Quiz",
    desc:"Can you already decode Arabic script? Pass to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      {id:"gate_a",title:"Task A: Letter Recognition",desc:"Name the sound each Arabic letter makes.",type:"mc",category:"AB",items:[
        {q:"What sound does this letter make?  ب",opts:["ba","ta","tha","na"],ans:"ba"},
        {q:"What sound does this letter make?  ت",opts:["ba","ta","tha","sa"],ans:"ta"},
        {q:"What sound does this letter make?  ح",opts:["ja","breathy ha","kha","ha"],ans:"breathy ha"},
        {q:"What does this letter represent?  ا",opts:["la","long aa / glottal","da","ra"],ans:"long aa / glottal"},
        {q:"What sound does this letter make?  ش",opts:["sa","sha","tha","ba"],ans:"sha"},
        {q:"What sound does this letter make?  ق",opts:["fa","deep q","gha","ayn"],ans:"deep q"},
        {q:"What sound does this letter make?  ض",opts:["heavy sa","heavy da","heavy ta","heavy dha"],ans:"heavy da"},
        {q:"What sound does this letter make?  ع",opts:["gha","fa","throat squeeze","qa"],ans:"throat squeeze"},
      ]},
      {id:"gate_b",title:"Task B: Breakers & Pairs",desc:"Identify breaker letters and dot-based pairs.",type:"mc",category:"AB",items:[
        {q:"How many breaker letters exist in Arabic?",opts:["2","4","6","8"],ans:"6"},
        {q:"A breaker letter connects to:",opts:["Both neighbors","Only the letter before it","Only the letter after it","Nothing"],ans:"Only the letter before it"},
        {q:"Which of these is a breaker?",opts:["ب","ل","د","م"],ans:"د"},
        {q:"Adding 1 dot above ر changes the sound from 'r' to:",opts:["z","dh","d","w"],ans:"z"},
        {q:"Adding 1 dot above د changes the sound from 'd' to:",opts:["z","r","dh","w"],ans:"dh"},
        {q:"Which pair are BOTH breakers?",opts:["ب and ت","س and ش","ر and ز","ل and م"],ans:"ر and ز"},
        {q:"Which is NOT a breaker letter?",opts:["ا","و","ر","ب"],ans:"ب"},
        {q:"Breaker letters have how many position forms?",opts:["1","2","3","4"],ans:"2"},
      ]},
      {id:"gate_c",title:"Task C: Vowel Marks",desc:"Identify short vowels, sukun, shadda, and tanwin.",type:"mc",category:"C",items:[
        {q:"How many short vowel marks does Arabic have?",opts:["2","3","4","5"],ans:"3"},
        {q:"A small diagonal stroke ABOVE a letter is:",opts:["Kasra (i)","Fatha (a)","Damma (u)","Sukun"],ans:"Fatha (a)"},
        {q:"A small diagonal stroke BELOW a letter is:",opts:["Fatha (a)","Damma (u)","Kasra (i)","Shadda"],ans:"Kasra (i)"},
        {q:"A small circle above a letter means:",opts:["Double the consonant","No vowel follows","Long vowel","The a sound"],ans:"No vowel follows"},
        {q:"Shadda means:",opts:["No vowel","The letter is silent","Say the consonant twice","Long vowel"],ans:"Say the consonant twice"},
        {q:"Tanwin adds what sound to a vowel?",opts:["An m sound","An n sound","An l sound","An r sound"],ans:"An n sound"},
        {q:"Long vowel 'aa' uses which letter?",opts:["و","ي","ا","ه"],ans:"ا"},
        {q:"Long vowel 'ee' uses which letter?",opts:["ا","و","ي","ه"],ans:"ي"},
      ]},
      {id:"gate_d",title:"Task D: Special Features",desc:"The definite article, lam-alif combo, and look-alikes.",type:"mc",category:"DE",items:[
        {q:"What does ال at the start of a word mean?",opts:["A question","And","The","From"],ans:"The"},
        {q:"When ل and ا appear together they:",opts:["Stay separate","Always merge into one shape","Disappear","Switch order"],ans:"Always merge into one shape"},
        {q:"How does ة differ from ه?",opts:["ة has 2 dots above","ه has 2 dots above","They are identical","ة is bigger"],ans:"ة has 2 dots above"},
        {q:"How does ى differ from ي?",opts:["ى has dots below","ي has 2 dots below but ى has none","They sound the same","ى is bigger"],ans:"ي has 2 dots below but ى has none"},
        {q:"Arabic text reads:",opts:["Left to right","Right to left","Top to bottom","Varies"],ans:"Right to left"},
        {q:"Arabic numbers read:",opts:["Right to left","Left to right","Backwards","Any direction"],ans:"Left to right"},
      ]},
      {id:"gate_e",title:"Task E: Read First Words",desc:"Decode short Arabic words.",type:"mc",category:"DE",items:[
        {q:"في means:",opts:["From","And","In","No"],ans:"In"},
        {q:"من means:",opts:["In","What","And","From"],ans:"From"},
        {q:"لا means:",opts:["Yes","The","No / Not","And"],ans:"No / Not"},
        {q:"و means:",opts:["Or","And","The","In"],ans:"And"},
        {q:"ما means:",opts:["In","From","And","What"],ans:"What"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stages 2-3: Review letter families and their shapes.",
      B:"Stage 1: Study breaker letters and how Arabic connects.",
      C:"Stage 4: Study vowel marks (harakat), sukun, and shadda.",
      D:"Stage 5: Study the definite article, look-alikes, and special features.",
      E:"Stage 5: Practice reading your first Arabic words.",
    },
  },
  // ══════════════════════════════════════════════════════════════
  // GERMAN GATE QUIZ — Test out of Foundations
  // 5 tasks (A-E), 35 items, maps to German Playthrough stages
  // Anti-leak compliant: no answer in question stem, P8 clean
  // ══════════════════════════════════════════════════════════════
  de:{
    title:"German Foundations Gate Quiz",
    desc:"Already know German pronunciation rules? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Vowel & Umlaut Recognition (8 items) — maps to Stages 1-2 ──
      {id:"gate_a",title:"Task A: Vowel and Umlaut Recognition",desc:"Identify the vowel or umlaut sound in each word.",type:"mc",category:"AB",items:[
        {q:"What vowel sound is in 'Mann' (man)?",opts:["Short a","Long a","Umlaut a"],ans:"Short a"},
        {q:"What vowel sound is in 'Bahn' (train)?",opts:["Short a","Long a","Umlaut a"],ans:"Long a"},
        {q:"The umlaut in 'Bäcker' (baker) changes the vowel to…",opts:["a sound like in 'father'","e-like sound, brighter than a","u-like sound, rounded"],ans:"e-like sound, brighter than a"},
        {q:"What vowel sound is in 'Hut' (hat)?",opts:["Short u","Long u","Umlaut u"],ans:"Short u"},
        {q:"The umlaut in 'Mütter' (mothers) changes the vowel to…",opts:["rounded front sound, like French u","back of mouth u","plain short u"],ans:"rounded front sound, like French u"},
        {q:"What vowel sound is in 'Boot' (boat)?",opts:["Short o","Long o","Umlaut o"],ans:"Long o"},
        {q:"The umlaut in 'Töne' (tones) changes the vowel to…",opts:["plain short o","rounded front o, like French eu","back-of-mouth o"],ans:"rounded front o, like French eu"},
        {q:"What vowel sound is in 'Bitte' (please)?",opts:["Short i","Long i","Short e"],ans:"Short i"},
      ]},
      // ── Task B: Consonant Decoding (8 items) — maps to Stage 3 ──
      {id:"gate_b",title:"Task B: Consonant Decoding",desc:"Identify the sound each German consonant or cluster produces.",type:"mc",category:"AB",items:[
        {q:"The letter z in German produces…",opts:["plain z as in zoo","ts sound as in bits","soft s as in measure"],ans:"ts sound as in bits"},
        {q:"The letter w in German sounds like…",opts:["English w as in water","English v as in vase","English f as in fish"],ans:"English v as in vase"},
        {q:"The letter v in German usually sounds like…",opts:["English v as in vase","English f as in fish","English w as in water"],ans:"English f as in fish"},
        {q:"The cluster sch in German produces…",opts:["sk sound","sh sound as in show","s plus ch as in loch"],ans:"sh sound as in show"},
        {q:"'sp' at the start of a German word sounds like…",opts:["sp as in English 'speak'","shp, with sh at the front","zp, with buzzing z"],ans:"shp, with sh at the front"},
        {q:"The cluster st at the start of a German word sounds like…",opts:["st as in English 'stop'","sht, with sh at the front","zt, with buzzing z"],ans:"sht, with sh at the front"},
        {q:"The letter combination ch after a front vowel (i, e) sounds like…",opts:["hard k sound","soft hissing sound, like h with friction","guttural back-of-throat sound"],ans:"soft hissing sound, like h with friction"},
        {q:"The Eszett (ss) in German represents…",opts:["a double s sound","a soft z sound","a silent letter"],ans:"a double s sound"},
      ]},
      // ── Task C: Spelling and Capitalization (8 items) — maps to Stage 4 ──
      {id:"gate_c",title:"Task C: Spelling and Capitalization",desc:"Apply German capitalization and spelling rules.",type:"mc",category:"C",items:[
        {q:"In German, nouns are…",opts:["always lowercase","always capitalized","capitalized only at sentence start"],ans:"always capitalized"},
        {q:"Which word is spelled correctly in German?",opts:["das haus","das Haus","Das haus"],ans:"das Haus"},
        {q:"The word 'Donaudampfschiff' is an example of…",opts:["a loan word","a compound noun","a superlative form"],ans:"a compound noun"},
        {q:"German compound nouns take their grammatical gender from…",opts:["the first part","the last part","the longest part"],ans:"the last part"},
        {q:"The Eszett (ss) is used after…",opts:["a short vowel or diphthong","a long vowel or diphthong","any vowel at all"],ans:"a long vowel or diphthong"},
        {q:"'Strasse' written with ss instead of ss signals that the preceding vowel is…",opts:["long","short","stressed"],ans:"short"},
        {q:"The umlaut letters ä, ö, ü can be written without the dots as…",opts:["ae, oe, ue","a, o, u","ah, oh, uh"],ans:"ae, oe, ue"},
        {q:"Which of these is written correctly?",opts:["Ich bin ein student.","Ich bin ein Student.","ich bin ein Student."],ans:"Ich bin ein Student."},
      ]},
      // ── Task D: Pronunciation Patterns (6 items) — maps to Stage 5 ──
      {id:"gate_d",title:"Task D: Pronunciation Patterns",desc:"Identify stress, vowel length, and diphthong patterns.",type:"mc",category:"DE",items:[
        {q:"In most German words, stress falls on…",opts:["the final syllable","the first syllable (root)","the middle syllable"],ans:"the first syllable (root)"},
        {q:"A vowel followed by a double consonant is…",opts:["long","short","silent"],ans:"short"},
        {q:"A vowel followed by a single consonant and then another vowel is…",opts:["short","long","silent"],ans:"long"},
        {q:"The diphthong 'ei' in German sounds like…",opts:["ee as in feet","ay-ee glide as in eye","oy as in boy"],ans:"ay-ee glide as in eye"},
        {q:"The diphthong 'eu' in German sounds like…",opts:["ay-oo blend","oy as in boy","ee-oo blend"],ans:"oy as in boy"},
        {q:"A double vowel in German (aa, ee, oo) indicates…",opts:["stress on that syllable","a long vowel sound","two separate syllables"],ans:"a long vowel sound"},
      ]},
      // ── Task E: Grammar Awareness (5 items) — maps to Stage 6 ──
      {id:"gate_e",title:"Task E: Grammar Awareness",desc:"Demonstrate awareness of German grammatical features.",type:"mc",category:"DE",items:[
        {q:"German nouns have how many grammatical genders?",opts:["Two","Three","Four"],ans:"Three"},
        {q:"The definite article for a masculine noun in German is…",opts:["die","das","der"],ans:"der"},
        {q:"In a standard German statement, the verb must be…",opts:["the first word","the second element","the last word"],ans:"the second element"},
        {q:"In a German subordinate clause introduced by 'weil' (because), the verb moves to…",opts:["the front","the second position","the end"],ans:"the end"},
        {q:"German has how many main grammatical cases?",opts:["Two","Three","Four"],ans:"Four"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stage 1-2: Practice identifying short and long vowels, and the three umlauts (ae, oe, ue).",
      B:"Stage 3: Study consonant sounds including ch, z, w, v, sch, and sp/st clusters.",
      C:"Stage 4: Study noun capitalization, compound nouns, and Eszett spelling rules.",
      D:"Stage 5: Practice vowel length signals, word stress, and German diphthongs.",
      E:"Stage 6: Review the three-gender system, V2 word order, and the case system.",
    },
  },
  // ══════════════════════════════════════════════════════════════
  // FRENCH GATE QUIZ — Test out of Foundations
  // 5 tasks (A-E), 35 items, maps to French Playthrough stages
  // Anti-leak compliant: no answer in question stem, P8 clean
  // ══════════════════════════════════════════════════════════════
  fr:{
    title:"French Foundations Gate Quiz",
    desc:"Already know French pronunciation rules? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Vowel & Accent Recognition (8 items) — maps to Stages 1-2 ──
      {id:"gate_a",title:"Task A: Vowel and Accent Recognition",desc:"Identify French vowel sounds and accent effects.",type:"mc",category:"AB",items:[
        {q:"The accent in 'café' (é) produces which sound?",opts:["Open EH as in bed","Closed AY as in say","Silent"],ans:"Closed AY as in say"},
        {q:"The accent in 'mère' (è) produces which sound?",opts:["Closed AY as in say","Open EH as in bed","OO as in food"],ans:"Open EH as in bed"},
        {q:"French U in 'tu' sounds like:",opts:["OO as in food","EE with rounded lips","UH as in cup"],ans:"EE with rounded lips"},
        {q:"French OU in 'vous' sounds like:",opts:["EE with rounded lips","OO as in food","OH as in boat"],ans:"OO as in food"},
        {q:"The cedilla in 'garçon' makes the C sound like:",opts:["K","S","SH"],ans:"S"},
        {q:"'eau' in 'beau' (beautiful) sounds like:",opts:["EE-AH-OO","OH","OW as in cow"],ans:"OH"},
        {q:"The nasal vowel in 'bon' is produced by:",opts:["Pronouncing the N clearly","Nasalizing the O without saying N","Doubling the vowel sound"],ans:"Nasalizing the O without saying N"},
        {q:"'an' and 'en' in French represent:",opts:["Two different sounds","The same nasal vowel","Two separate syllables"],ans:"The same nasal vowel"},
      ]},
      // ── Task B: Nasal Vowel & Liaison (7 items) — maps to Stages 2-3 ──
      {id:"gate_b",title:"Task B: Nasal Vowels and Liaison",desc:"Identify nasal vowels and liaison behavior.",type:"mc",category:"AB",items:[
        {q:"In 'enfant', the letters E-N produce:",opts:["E then N separately","A nasal vowel (N not pronounced)","A silent syllable"],ans:"A nasal vowel (N not pronounced)"},
        {q:"'pain' (bread) contains which nasal vowel?",opts:["an/en nasal","on nasal","in/ain nasal"],ans:"in/ain nasal"},
        {q:"A vowel + N/M does NOT nasalize when:",opts:["The word is short","Another vowel follows the N/M","The word is a verb"],ans:"Another vowel follows the N/M"},
        {q:"In 'les amis', the S in 'les' is:",opts:["Silent as usual","Pronounced as Z (liaison)","Pronounced as S"],ans:"Pronounced as Z (liaison)"},
        {q:"Liaison after 'et' (and) is:",opts:["Mandatory","Optional","Forbidden"],ans:"Forbidden"},
        {q:"Mandatory liaison occurs between:",opts:["Any two words","Article and vowel-initial noun","Verb and verb","After et"],ans:"Article and vowel-initial noun"},
        {q:"In liaison, a final S or X sounds like:",opts:["S","Z","SH"],ans:"Z"},
      ]},
      // ── Task C: Silent Letters & Spelling (8 items) — maps to Stage 4 ──
      {id:"gate_c",title:"Task C: Silent Letters and Spelling",desc:"Apply the CaReFuL rule and silent letter patterns.",type:"mc",category:"C",items:[
        {q:"The CaReFuL rule means these final consonants are usually pronounced:",opts:["C, R, F, L","S, T, P","D, G, B"],ans:"C, R, F, L"},
        {q:"The final T in 'petit' (small) is:",opts:["Pronounced","Silent","Sometimes pronounced"],ans:"Silent"},
        {q:"The final R in 'amour' (love) is:",opts:["Silent","Pronounced","Optional"],ans:"Pronounced"},
        {q:"In 'ils parlent' (they speak), the -ent ending is:",opts:["Pronounced as ONT","Completely silent","Pronounced as ENT"],ans:"Completely silent"},
        {q:"'la + école' must become:",opts:["la école","l'école","le école"],ans:"l'école"},
        {q:"Final E in 'grande' serves to:",opts:["Add a syllable","Make the preceding D audible","Change the vowel sound"],ans:"Make the preceding D audible"},
        {q:"French H is:",opts:["Pronounced like English H","Always silent","Sometimes pronounced"],ans:"Always silent"},
        {q:"H aspiré blocks:",opts:["Nothing","Elision and liaison","Pronunciation of the next letter"],ans:"Elision and liaison"},
      ]},
      // ── Task D: Pronunciation Patterns (6 items) — maps to Stage 5 ──
      {id:"gate_d",title:"Task D: Pronunciation Patterns",desc:"Identify stress, rhythm, and spelling-to-sound patterns.",type:"mc",category:"DE",items:[
        {q:"In French, word stress falls on:",opts:["The first syllable","The last syllable","The penultimate syllable"],ans:"The last syllable"},
        {q:"French -tion (as in 'nation') is pronounced:",opts:["SHUN like English","SYON","TYON"],ans:"SYON"},
        {q:"French -ment (as in 'exactement') ends with:",opts:["MENT as in English","MON (nasal)","MONG"],ans:"MON (nasal)"},
        {q:"French CH in 'chat' sounds like:",opts:["CH as in chair","SH as in shoe","K as in cat"],ans:"SH as in shoe"},
        {q:"French TH in 'thé' sounds like:",opts:["TH as in think","Just T","SH as in shoe"],ans:"Just T"},
        {q:"French rhythm is best described as:",opts:["Stress-timed like English","Syllable-timed with even flow","Free rhythm with no pattern"],ans:"Syllable-timed with even flow"},
      ]},
      // ── Task E: Grammar Awareness (6 items) — maps to Stage 6 ──
      {id:"gate_e",title:"Task E: Grammar Awareness",desc:"Demonstrate awareness of French grammatical features.",type:"mc",category:"DE",items:[
        {q:"French nouns have how many grammatical genders?",opts:["One","Two","Three"],ans:"Two"},
        {q:"Before a vowel, 'le' and 'la' both become:",opts:["les","l'","un"],ans:"l'"},
        {q:"The feminine form of 'grand' (big) is:",opts:["grand","grande","grands"],ans:"grande"},
        {q:"In 'Elle est allée', the extra -e on 'allée' signals:",opts:["Past tense","Feminine subject","Plural"],ans:"Feminine subject"},
        {q:"The most common French verb group is:",opts:["-er verbs (Group 1)","Irregular verbs","-ir verbs (Group 2)"],ans:"-er verbs (Group 1)"},
        {q:"'Vous' is used for:",opts:["Formal singular and all plurals","Only plural groups","Only formal situations"],ans:"Formal singular and all plurals"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stages 1-2: Practice accent marks, oral vowels, and the U vs OU distinction.",
      B:"Stages 2-3: Study nasal vowels, liaison rules, and consonant sounds (R, CH, GN).",
      C:"Stage 4: Study the CaReFuL rule, silent letters, elision, and silent E patterns.",
      D:"Stage 5: Practice word stress (always final), syllable rhythm, and spelling-to-sound rules.",
      E:"Stage 6: Review the two-gender system, the Agreement Web, and verb groups.",
    },
  },
  // ══════════════════════════════════════════════════════════════
  // SPANISH GATE QUIZ — Test out of Foundations
  // 5 tasks (A-E), 35 items, maps to Spanish Playthrough stages
  // Anti-leak compliant: no answer in question stem, P8 clean
  // ══════════════════════════════════════════════════════════════
  es:{
    title:"Spanish Foundations Gate Quiz",
    desc:"Already know Spanish pronunciation and spelling rules? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Vowel & Consonant Recognition (8 items) — maps to Stages 1-2 ──
      {id:"gate_a",title:"Task A: Sound Recognition",desc:"Identify Spanish vowel and consonant sounds.",type:"mc",category:"AB",items:[
        {q:"How many distinct vowel sounds does Spanish have?",opts:["5","7","12","15"],ans:"5"},
        {q:"The vowel A in Spanish always sounds like:",opts:["AH as in father","A as in cat","AY as in day"],ans:"AH as in father"},
        {q:"H in Spanish is:",opts:["Pronounced like English H","Always silent","Sometimes silent"],ans:"Always silent"},
        {q:"B and V in Spanish are:",opts:["Different sounds like English","Identical in pronunciation","B is hard, V is soft"],ans:"Identical in pronunciation"},
        {q:"Ñ sounds like:",opts:["Regular N","NY as in canyon","Silent N","NG as in sing"],ans:"NY as in canyon"},
        {q:"J in 'jefe' sounds like:",opts:["English J in jump","Throaty H like Scottish loch","English Y in yes","Silent"],ans:"Throaty H like Scottish loch"},
        {q:"LL in 'calle' sounds like:",opts:["L+L as in English","Y as in yes","Silent","SH as in shoe"],ans:"Y as in yes"},
        {q:"The final E in Spanish words is:",opts:["Always silent like in English","Always pronounced","Sometimes silent","Pronounced only in formal speech"],ans:"Always pronounced"},
      ]},
      // ── Task B: R/RR and Diphthongs (7 items) — maps to Stage 2 ──
      {id:"gate_b",title:"Task B: R/RR and Vowel Combinations",desc:"Distinguish R tap from RR trill and identify diphthongs.",type:"mc",category:"AB",items:[
        {q:"Single R between vowels in 'pero' (but) is:",opts:["A rolled trill","A quick tongue tap","Same as English R"],ans:"A quick tongue tap"},
        {q:"RR in 'perro' (dog) is:",opts:["A quick tongue tap","A rolled trill","Two separate R sounds"],ans:"A rolled trill"},
        {q:"R at the START of 'rojo' (red) is:",opts:["A gentle tap","Always trilled like RR","Silent","Like English R"],ans:"Always trilled like RR"},
        {q:"'Bueno' has the vowel combination UE. This is:",opts:["Two separate syllables","One syllable (diphthong)","Three sounds"],ans:"One syllable (diphthong)"},
        {q:"Strong vowels in Spanish are:",opts:["A, E, O","I, U","A, I, U"],ans:"A, E, O"},
        {q:"Two strong vowels next to each other form:",opts:["A diphthong (one syllable)","Separate syllables (hiatus)","A silent vowel"],ans:"Separate syllables (hiatus)"},
        {q:"Unstressed vowels in Spanish:",opts:["Reduce to schwa like English","Keep their full, pure sound","Are sometimes dropped"],ans:"Keep their full, pure sound"},
      ]},
      // ── Task C: Stress & Accent Rules (8 items) — maps to Stage 3 ──
      {id:"gate_c",title:"Task C: Stress and Accent Marks",desc:"Apply the two stress rules and understand accent marks.",type:"mc",category:"C",items:[
        {q:"Words ending in a vowel, N, or S are stressed on:",opts:["The last syllable","The second-to-last syllable","The first syllable"],ans:"The second-to-last syllable"},
        {q:"Words ending in a consonant other than N or S are stressed on:",opts:["The second-to-last syllable","The last syllable","The third-to-last syllable"],ans:"The last syllable"},
        {q:"Where is the stress in 'hablan' (they speak)?",opts:["ha-BLAN (last)","HA-blan (second-to-last)","HAB-lan (first)"],ans:"HA-blan (second-to-last)"},
        {q:"Where is the stress in 'ciudad' (city)?",opts:["CIU-dad","ciu-DAD","CI-udad"],ans:"ciu-DAD"},
        {q:"'Café' has an accent mark because:",opts:["It ends in a vowel but stresses the last syllable","All food words get accents","It is a foreign word"],ans:"It ends in a vowel but stresses the last syllable"},
        {q:"'Fácil' (easy) has an accent mark because:",opts:["It ends in L but stresses the second-to-last syllable","All adjectives need accents","It has more than two syllables"],ans:"It ends in L but stresses the second-to-last syllable"},
        {q:"'Tú' (you) vs 'tu' (your): the accent distinguishes:",opts:["Pronunciation","Meaning","Both are the same"],ans:"Meaning"},
        {q:"Question words like '¿qué?' and '¿dónde?' always have:",opts:["No accent","An accent mark","Capital letters"],ans:"An accent mark"},
      ]},
      // ── Task D: Spelling Patterns (6 items) — maps to Stage 4 ──
      {id:"gate_d",title:"Task D: Spelling Patterns",desc:"Apply Spanish spelling-sound rules.",type:"mc",category:"DE",items:[
        {q:"To spell the K sound before E in Spanish, use:",opts:["C","K","QU","CK"],ans:"QU"},
        {q:"To spell a hard G before I in Spanish, use:",opts:["G alone","GU (U silent)","GÜ","J"],ans:"GU (U silent)"},
        {q:"The diaeresis in 'pingüino' means:",opts:["The U is silent","Pronounce the U","The G is soft"],ans:"Pronounce the U"},
        {q:"Spanish questions use:",opts:["Only ? at the end","¿ at the start and ? at the end","Only ¿ at the start"],ans:"¿ at the start and ? at the end"},
        {q:"C before A, O, U produces:",opts:["S sound","K sound","CH sound"],ans:"K sound"},
        {q:"D between vowels in 'nada' becomes:",opts:["Stronger","Softer, almost TH-like","Silent"],ans:"Softer, almost TH-like"},
      ]},
      // ── Task E: Grammar Awareness (6 items) — maps to Stage 5 ──
      {id:"gate_e",title:"Task E: Grammar Awareness",desc:"Demonstrate awareness of Spanish grammatical features.",type:"mc",category:"DE",items:[
        {q:"Spanish nouns have how many grammatical genders?",opts:["One","Two","Three"],ans:"Two"},
        {q:"Most nouns ending in -o are:",opts:["Feminine","Masculine","Neutral"],ans:"Masculine"},
        {q:"SER is used for:",opts:["Location and temporary states","Identity, origin, and permanent traits","Actions happening right now"],ans:"Identity, origin, and permanent traits"},
        {q:"ESTAR is used for:",opts:["Identity and profession","Location, state, and emotion","Time and dates"],ans:"Location, state, and emotion"},
        {q:"The largest verb group in Spanish is:",opts:["-ar verbs","-er verbs","-ir verbs"],ans:"-ar verbs"},
        {q:"When meeting a stranger, you should use:",opts:["Tú (informal)","Usted (formal)","Vosotros"],ans:"Usted (formal)"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stages 1-2: Practice the alphabet, Ñ, H (silent), B/V, J, LL, and vowel sounds.",
      B:"Stage 2: Study R vs RR, diphthongs (strong + weak vowels), and vowel purity.",
      C:"Stage 3: Study the two default stress rules and when accent marks appear.",
      D:"Stage 4: Practice C/QU/Z patterns, G/GU/GÜ patterns, and inverted punctuation.",
      E:"Stage 5: Review el/la gender, ser vs estar, verb groups, and tú vs usted.",
    },
  },
  // ══════════════════════════════════════════════════════════════
  // ITALIAN GATE QUIZ — Test out of Foundations
  // 5 tasks (A-E), 33 items, maps to Italian Playthrough stages 1-4
  // Anti-leak compliant: no answer in question stem, PP8 clean
  // ══════════════════════════════════════════════════════════════
  it:{
    title:"Italian Foundations Gate Quiz",
    desc:"Already know Italian pronunciation and spelling rules? Pass this quiz to skip Foundations.",
    passCriteria:{AB:90,C:85,DE:80},
    tasks:[
      // ── Task A: Alphabet & Vowel Recognition (7 items) — maps to Stage 1 ──
      {id:"gate_a",title:"Task A: Alphabet & Vowels",desc:"Identify Italian alphabet and vowel basics.",type:"mc",category:"AB",items:[
        {q:"How many native letters does the Italian alphabet have?",opts:["21","26","23","28"],ans:"21"},
        {q:"Which letters are NOT native to the Italian alphabet?",opts:["J, K, W, X, Y","A, E, I, O, U","Q, X, Z","B, D, F, G"],ans:"J, K, W, X, Y"},
        {q:"How many distinct vowel sounds does Italian have?",opts:["5","7","10","3"],ans:"7"},
        {q:"The vowel A in Italian always sounds like:",opts:["AH as in father","A as in cat","AY as in day"],ans:"AH as in father"},
        {q:"The vowel U in Italian always sounds like:",opts:["UH as in up","OO as in food","YOO as in use"],ans:"OO as in food"},
        {q:"E and O in Italian each have:",opts:["One sound only","Two sounds (open and closed)","Three sounds","No fixed sound"],ans:"Two sounds (open and closed)"},
        {q:"Double consonants in Italian are:",opts:["Pronounced the same as single","Held for a longer time","Always silent","Said twice quickly"],ans:"Held for a longer time"},
      ]},
      // ── Task B: Accent Rules (7 items) — maps to Stage 2 ──
      {id:"gate_b",title:"Task B: Accent Rules",desc:"Apply Italian accent mark rules.",type:"mc",category:"AB",items:[
        {q:"Most Italian words stress which syllable?",opts:["The last syllable","The second-to-last syllable","The first syllable"],ans:"The second-to-last syllable"},
        {q:"Accent marks in Italian are REQUIRED when:",opts:["Every word needs one","Stress falls on the final syllable","Stress falls on the first syllable"],ans:"Stress falls on the final syllable"},
        {q:"A, I, O, U always take which accent in Italian?",opts:["Acute (slants right)","Grave (slants left)","Circumflex","No accent"],ans:"Grave (slants left)"},
        {q:"'Perche' (why/because) takes which accent on E?",opts:["Grave","Acute","No accent","Either one"],ans:"Acute"},
        {q:"'E' with no accent means:",opts:["Is (verb)","And (conjunction)","He/she","The"],ans:"And (conjunction)"},
        {q:"'E' with a grave accent means:",opts:["And","Is (verb)","Or","But"],ans:"Is (verb)"},
        {q:"'Si' with an accent means:",opts:["Himself","If","Yes","So"],ans:"Yes"},
      ]},
      // ── Task C: C/G Pronunciation Rules (8 items) — maps to Stage 3 ──
      {id:"gate_c",title:"Task C: C and G Pronunciation",desc:"Apply hard/soft C and G rules.",type:"mc",category:"C",items:[
        {q:"C before E in 'cena' (dinner) sounds like:",opts:["K as in cat","CH as in church","S as in sun","SH as in shoe"],ans:"CH as in church"},
        {q:"C before A in 'casa' (house) sounds like:",opts:["CH as in church","K as in cat","S as in sun"],ans:"K as in cat"},
        {q:"CH in 'che' (what) sounds like:",opts:["CH as in church","K as in cat","SH as in shoe"],ans:"K as in cat"},
        {q:"G in 'gelato' sounds like:",opts:["G as in go","J as in jelly","H sound","Silent"],ans:"J as in jelly"},
        {q:"GH in 'spaghetti' sounds like:",opts:["J as in jelly","Hard G as in go","SH sound","Silent"],ans:"Hard G as in go"},
        {q:"SC in 'pesce' (fish) sounds like:",opts:["SK as in skip","SH as in shoe","S as in sun"],ans:"SH as in shoe"},
        {q:"GN in 'gnocchi' sounds like:",opts:["G + N separately","NY as in canyon","NG as in sing"],ans:"NY as in canyon"},
        {q:"GLI in 'figlio' (son) sounds like:",opts:["GL as in glow","LY as in million","G + LI separately"],ans:"LY as in million"},
      ]},
      // ── Task D: Double Consonants & Silent H (6 items) — maps to Stage 3 ──
      {id:"gate_d",title:"Task D: Doubles, H, and R",desc:"Distinguish double consonants and know silent H.",type:"mc",category:"DE",items:[
        {q:"'Papa' means 'pope'. 'Pappa' with double P means:",opts:["Father","Baby food","Grandfather","Paper"],ans:"Baby food"},
        {q:"'Nono' means 'ninth'. 'Nonno' with double N means:",opts:["None","Grandfather","Number","Noon"],ans:"Grandfather"},
        {q:"H in Italian is:",opts:["Pronounced like English H","Always silent","Sometimes silent","A breathy sound"],ans:"Always silent"},
        {q:"Italian R is produced by:",opts:["Curling the tongue back","Tapping or trilling at the upper ridge","Using the throat","Keeping the tongue flat"],ans:"Tapping or trilling at the upper ridge"},
        {q:"The difference between 'casa' (house) and 'cassa' (crate) is:",opts:["The S is held longer in cassa","Different vowels","Different stress","No difference"],ans:"The S is held longer in cassa"},
        {q:"'Hanno' (they have) is pronounced:",opts:["HAN-no (H sounded)","AN-no (H silent)","HA-no","AH-no"],ans:"AN-no (H silent)"},
      ]},
      // ── Task E: Spelling Patterns (5 items) — maps to Stage 4 ──
      {id:"gate_e",title:"Task E: Gender, Plurals & Articles",desc:"Apply Italian spelling and grammar patterns.",type:"mc",category:"DE",items:[
        {q:"Most nouns ending in -o are:",opts:["Feminine","Masculine","Neutral"],ans:"Masculine"},
        {q:"The plural of 'ragazzo' (boy) is:",opts:["ragazzos","ragazze","ragazzi","ragazza"],ans:"ragazzi"},
        {q:"The plural of 'casa' (house) is:",opts:["casas","case","casi","casa"],ans:"case"},
        {q:"Which article goes with 'zio' (uncle)?",opts:["il zio","lo zio","la zio"],ans:"lo zio"},
        {q:"Before a vowel, 'lo' and 'la' become:",opts:["il","l' (apostrophe)","le","i"],ans:"l' (apostrophe)"},
      ]},
    ],
    diagnosticRouting:{
      A:"Stage 1: Review the Italian alphabet, vowel sounds, and double consonant basics.",
      B:"Stage 2: Study grave vs acute accents, when they are required, and meaning-changing pairs.",
      C:"Stage 3: Practice C/G hard and soft rules, CH/GH, and Italian digraphs (SC, GN, GLI).",
      D:"Stage 3: Study double consonants, silent H, and the Italian R sound.",
      E:"Stage 4: Review gender patterns, plural endings, and the six definite articles.",
    },
  },
  ja:{
title:"Kana Gate Quiz",
  desc:"Can you already read hiragana and katakana? Pass this quiz to skip Foundations.",
  passCriteria:{AB:90,C:85,DE:80},
  tasks:[
    // ── Task A: Hiragana Recognition (10 items, category AB) ──
    {id:"gate_a",title:"Task A: Hiragana Recognition",desc:"Identify the sound of each hiragana character.",type:"mc",category:"AB",items:[
      {q:"What sound does き make?",opts:["ka","ki","ku"],ans:"ki"},
      {q:"What sound does す make?",opts:["su","sa","shi"],ans:"su"},
      {q:"What sound does ち make?",opts:["ti","chi","tsu"],ans:"chi"},
      {q:"What sound does ふ make?",opts:["hu","fu","ho"],ans:"fu"},
      {q:"What sound does を make?",opts:["wo","no","mo"],ans:"wo"},
      {q:"What sound does ん make?",opts:["n","mu","nu"],ans:"n"},
      {q:"What sound does め make?",opts:["mu","mo","me"],ans:"me"},
      {q:"What sound does よ make?",opts:["ya","yu","yo"],ans:"yo"},
      {q:"What sound does ぬ make?",opts:["na","nu","ne"],ans:"nu"},
      {q:"What sound does ほ make?",opts:["ha","he","ho"],ans:"ho"},
    ]},

    // ── Task B: Katakana Recognition (10 items, category AB) ──
    {id:"gate_b",title:"Task B: Katakana Recognition",desc:"Identify the sound of each katakana character.",type:"mc",category:"AB",items:[
      {q:"What sound does ク make?",opts:["ku","ke","ka"],ans:"ku"},
      {q:"What sound does シ make?",opts:["tsu","shi","so"],ans:"shi"},
      {q:"What sound does テ make?",opts:["ta","te","to"],ans:"te"},
      {q:"What sound does フ make?",opts:["ho","fu","he"],ans:"fu"},
      {q:"What sound does ン make?",opts:["so","n","shi"],ans:"n"},
      {q:"What sound does モ make?",opts:["mu","me","mo"],ans:"mo"},
      {q:"What sound does ヨ make?",opts:["yo","ya","yu"],ans:"yo"},
      {q:"What sound does ル make?",opts:["re","ri","ru"],ans:"ru"},
      {q:"What sound does ワ make?",opts:["wa","wo","we"],ans:"wa"},
      {q:"What sound does ヘ make?",opts:["he","ho","ha"],ans:"he"},
    ]},

    // ── Task C: Read Hiragana Words (8 items, category C) ──
    {id:"gate_c",title:"Task C: Read Words",desc:"Read hiragana words and pick the correct romaji.",type:"mc",category:"C",items:[
      {q:"How do you read きょう?",opts:["kiyou","kyou","kyuu","kiyo"],ans:"kyou"},
      {q:"How do you read がっこう?",opts:["gakou","gatkou","gakkou","gakoou"],ans:"gakkou"},
      {q:"How do you read おんがく?",opts:["onngaku","ogaku","ongaku","ounaku"],ans:"ongaku"},
      {q:"How do you read しんぶん?",opts:["shinbun","sinbun","shimbun","shibun"],ans:"shinbun"},
      {q:"How do you read りょうり?",opts:["riyouri","ryori","riyori","ryouri"],ans:"ryouri"},
      {q:"How do you read びょういん?",opts:["biyouin","byouin","byouinn","biouin"],ans:"byouin"},
      {q:"How do you read ちゅうごく?",opts:["tiuugoku","chugoku","chuugoku","chiugoku"],ans:"chuugoku"},
      {q:"How do you read せんせい?",opts:["sensee","sennsei","sesei","sensei"],ans:"sensei"},
    ]},

    // ── Task D: Katakana Word Reading (8 items, category DE) ──
    {id:"gate_d",title:"Task D: Katakana Words",desc:"Read katakana loanwords and pick the correct romaji.",type:"mc",category:"DE",items:[
      {q:"How do you read コーヒー?",opts:["kohii","kouhii","koohii","kahii"],ans:"koohii"},
      {q:"How do you read テレビ?",opts:["terebi","teribi","telebi","terubi"],ans:"terebi"},
      {q:"How do you read コンピューター?",opts:["kompyuutaa","konpyutaa","konpiuutaa","konpyuutaa"],ans:"konpyuutaa"},
      {q:"How do you read パン?",opts:["paan","pan","pen","pon"],ans:"pan"},
      {q:"How do you read ベッド?",opts:["bedo","betto","beddo","beto"],ans:"beddo"},
      {q:"How do you read チョコレート?",opts:["chokoreto","chokoreeto","tyokoreeto","chokoleto"],ans:"chokoreeto"},
      {q:"How do you read アイスクリーム?",opts:["aiskurimu","aisukurimu","aisukremu","aisukuriimu"],ans:"aisukuriimu"},
      {q:"How do you read レストラン?",opts:["resutorann","restoran","resutoran","resutran"],ans:"resutoran"},
    ]},

    // ── Task E: Script Identification (5 items, category DE) ──
    {id:"gate_e",title:"Task E: Script Identification",desc:"Identify which writing system each word uses.",type:"mc",category:"DE",items:[
      {q:"東京 uses which script?",opts:["Kanji","Hiragana","Katakana","Romaji"],ans:"Kanji"},
      {q:"テレビ uses which script?",opts:["Hiragana","Katakana","Kanji","Romaji"],ans:"Katakana"},
      {q:"おはよう uses which script?",opts:["Katakana","Kanji","Hiragana","Romaji"],ans:"Hiragana"},
      {q:"サッカー uses which script?",opts:["Hiragana","Kanji","Romaji","Katakana"],ans:"Katakana"},
      {q:"食べる uses which combination?",opts:["Kanji only","Hiragana only","Kanji + Hiragana","Katakana + Kanji"],ans:"Kanji + Hiragana"},
    ]},
  ],
  diagnosticRouting:{
    A:"Phase 1-3: You need more practice recognizing hiragana characters.",
    B:"Phase 6-7: You need more practice recognizing katakana characters.",
    C:"Phase 4-5: Practice reading dakuten, combo sounds, and long vowels.",
    D:"Phase 7: Practice reading katakana specials, long vowels, and double consonants.",
    E:"Phase 0: Review the three-script system and when each script is used.",
  },
  },
  // ══════════════════════════════════════════════════════════════
  // CHINESE GATE QUIZ — Test out of Pinyin/Tones Foundations
  // ══════════════════════════════════════════════════════════════
  zh:{
  title:"Pinyin & Tones Gate Quiz",
  desc:"Already know pinyin and tones? Pass this quiz to skip Foundations.",
  passCriteria:{AB:90,C:85,DE:80},
  tasks:[
    // ── Task A: Tone Identification (10 items, category AB) ──
    {id:"gate_a",title:"Task A: Tone Identification",desc:"Identify the correct tone for each pinyin syllable.",type:"mc",category:"AB",items:[
      {q:"Which tone is marked with a straight line above the vowel ( \u0304 )?",opts:["Tone 2 (rising)","Tone 1 (high flat)","Tone 3 (dip-rise)","Tone 4 (falling)"],ans:"Tone 1 (high flat)"},
      {q:"m\u01CE means 'horse'. What tone is this?",opts:["Tone 1","Tone 2","Tone 3","Tone 4"],ans:"Tone 3"},
      {q:"sh\u00EC means 'is/yes'. What tone is this?",opts:["Tone 1","Tone 2","Tone 3","Tone 4"],ans:"Tone 4"},
      {q:"m\u00E1 means 'hemp/numb'. What tone is this?",opts:["Tone 1","Tone 2","Tone 3","Tone 4"],ans:"Tone 2"},
      {q:"When two Tone 3 syllables appear together, the first changes to:",opts:["Tone 1","Tone 2","Tone 4","It stays Tone 3"],ans:"Tone 2"},
      {q:"b\u00F9 (not) before a Tone 4 word changes to:",opts:["Tone 1","Tone 2","Tone 3","It stays Tone 4"],ans:"Tone 2"},
      {q:"The neutral tone is:",opts:["Always marked with a dot","Short, light, and has no mark","The same as Tone 1","Only used in questions"],ans:"Short, light, and has no mark"},
      {q:"d\u0101 means 'hit'. What tone is this?",opts:["Tone 4","Tone 3","Tone 2","Tone 1"],ans:"Tone 1"},
      {q:"Which tone drops sharply from high to low?",opts:["Tone 1","Tone 2","Tone 3","Tone 4"],ans:"Tone 4"},
      {q:"Which tone starts mid, dips low, then rises slightly?",opts:["Tone 1","Tone 2","Tone 3","Tone 4"],ans:"Tone 3"},
    ]},
    // ── Task B: Pinyin Initial Recognition (10 items, category AB) ──
    {id:"gate_b",title:"Task B: Pinyin Initials",desc:"Identify the correct pronunciation for each initial.",type:"mc",category:"AB",items:[
      {q:"The initial 'q' in pinyin sounds like:",opts:["English 'k'","'ch' with a puff of air (palatal)","English 'q'","A click sound"],ans:"'ch' with a puff of air (palatal)"},
      {q:"The initial 'x' in pinyin sounds like:",opts:["English 'x' (ks)","'sh' with tongue flat (palatal)","English 's'","A buzzing sound"],ans:"'sh' with tongue flat (palatal)"},
      {q:"Retroflex initials (zh, ch, sh, r) are made by:",opts:["Pressing lips together","Curling the tongue tip backward","Pressing tongue on teeth","Blowing air through lips"],ans:"Curling the tongue tip backward"},
      {q:"The difference between Chinese 'b' and 'p' is:",opts:["Voicing","Aspiration (puff of air)","Lip position","Volume"],ans:"Aspiration (puff of air)"},
      {q:"'j', 'q', 'x' can only appear before which finals?",opts:["a, o, u","Any final","i and \u00FC only","e and o"],ans:"i and \u00FC only"},
      {q:"The initial 'c' in pinyin sounds like:",opts:["English 'c' in 'cat'","'ts' in 'cats' with a puff","English 's'","English 'ch'"],ans:"'ts' in 'cats' with a puff"},
      {q:"The initial 'z' in pinyin sounds like:",opts:["English 'z' (buzzing)","'ds' in 'adds' (no buzz)","English 'th'","English 'j'"],ans:"'ds' in 'adds' (no buzz)"},
      {q:"Which group are the dental initials?",opts:["b p m f","j q x","zh ch sh r","z c s"],ans:"z c s"},
      {q:"Which group are the palatal initials?",opts:["b p m f","j q x","zh ch sh r","z c s"],ans:"j q x"},
      {q:"The initial 'r' in Chinese is closest to:",opts:["English 'r' in 'red'","A buzzy retroflex sound","French 'r'","English 'l'"],ans:"A buzzy retroflex sound"},
    ]},
    // ── Task C: Pinyin Finals (8 items, category C) ──
    {id:"gate_c",title:"Task C: Pinyin Finals",desc:"Identify vowel sounds and nasal endings.",type:"mc",category:"C",items:[
      {q:"The pinyin 'e' (alone) sounds like:",opts:["'ee' as in 'see'","'uh' (unrounded mid-back vowel)","'eh' as in 'bed'","'ay' as in 'say'"],ans:"'uh' (unrounded mid-back vowel)"},
      {q:"'\u00FC' sounds like:",opts:["English 'oo'","French 'u' (lips rounded, say 'ee')","English 'uh'","English 'you'"],ans:"French 'u' (lips rounded, say 'ee')"},
      {q:"How do -n and -ng endings differ?",opts:["They sound the same","-n uses tongue tip, -ng uses back of tongue","Only pitch differs","-n is louder"],ans:"-n uses tongue tip, -ng uses back of tongue"},
      {q:"'ai' sounds like:",opts:["English 'eye'","English 'ay'","English 'ah'","English 'oi'"],ans:"English 'eye'"},
      {q:"'ou' sounds like:",opts:["English 'oo'","English 'oh' (as in 'go')","English 'ow' (as in 'cow')","English 'oi'"],ans:"English 'oh' (as in 'go')"},
      {q:"'ao' sounds like:",opts:["English 'ah'","English 'oh'","English 'ow' (as in 'cow')","English 'oo'"],ans:"English 'ow' (as in 'cow')"},
      {q:"In 'ian', the actual pronunciation is closer to:",opts:["ee-an","ee-en","yan","yen"],ans:"ee-en"},
      {q:"'iu' is actually short for:",opts:["ee-oo","ee-oh-oo (iou)","oo-ee","ih-uh"],ans:"ee-oh-oo (iou)"},
    ]},
    // ── Task D: Character/Radical Recognition (8 items, category DE) ──
    {id:"gate_d",title:"Task D: Radical Recognition",desc:"Identify common radicals and their meanings.",type:"mc",category:"DE",items:[
      {q:"The radical \u4ebb relates to:",opts:["Water","Person","Fire","Wood"],ans:"Person"},
      {q:"The radical \u6C35 relates to:",opts:["Earth","Metal","Water","Sun"],ans:"Water"},
      {q:"The radical \u53E3 relates to:",opts:["Hand","Mouth","Eye","Ear"],ans:"Mouth"},
      {q:"The radical \u6728 relates to:",opts:["Fire","Metal","Stone","Tree/Wood"],ans:"Tree/Wood"},
      {q:"In the character \u5987 (m\u0101, mother), which part is the radical?",opts:["\u5973 (woman)","马 (horse)","Both equally","Neither"],ans:"\u5973 (woman)"},
      {q:"Characters with \u706B/\u706C radical usually relate to:",opts:["Water","Fire/Heat","Wind","Earth"],ans:"Fire/Heat"},
      {q:"What percentage of characters are phono-semantic compounds?",opts:["About 20%","About 50%","About 80%","About 95%"],ans:"About 80%"},
      {q:"In a phono-semantic compound, the radical typically hints at:",opts:["Pronunciation","Meaning","Tone","Stroke count"],ans:"Meaning"},
    ]},
    // ── Task E: Pinyin Reading (5 items, category DE) ──
    {id:"gate_e",title:"Task E: Read Pinyin",desc:"Read pinyin words and identify correct meanings.",type:"mc",category:"DE",items:[
      {q:"n\u01D0 h\u01CEo means:",opts:["Goodbye","Hello/You good","Thank you","Sorry"],ans:"Hello/You good"},
      {q:"xi\u00E8xie means:",opts:["Hello","Sorry","Thank you","Goodbye"],ans:"Thank you"},
      {q:"z\u00E0iji\u00E0n means:",opts:["Hello","Sorry","Good morning","Goodbye"],ans:"Goodbye"},
      {q:"du\u00EC bu q\u01D0 means:",opts:["Thank you","Sorry","You're welcome","Hello"],ans:"Sorry"},
      {q:"l\u01CEosh\u012B means:",opts:["Student","Doctor","Teacher","Friend"],ans:"Teacher"},
    ]},
  ],
  diagnosticRouting:{
    A:"Phase 1: Practice the four tones and tone marks.",
    B:"Phase 2: Study the 21 pinyin initials, especially palatals and retroflexes.",
    C:"Phase 3: Practice pinyin finals, especially compound and nasal finals.",
    D:"Phase 5: Study common radicals and character composition.",
    E:"Phase 0-1: Review basic Chinese concepts and start with pinyin and tones.",
  },
  },
};

