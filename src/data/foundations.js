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
    // GERMAN FOUNDATIONS PLAYTHROUGH
    // 6 stages, 15 lessons, ~110 steps.
    // Covers alphabet, umlauts, Eszett, vowels, diphthongs,
    // consonant traps, spelling/capitalization, pronunciation,
    // and grammar preview (gender + V2 word order).
    // P8 compliant, no IPA slashes, no em-dashes, board:true all.
    // ══════════════════════════════════════════════════════════════

    // ── STAGE 1: THE ALPHABET & SPECIAL CHARACTERS ──
    {id:"de_fp_s1",title:"The Alphabet & Special Characters",desc:"German uses 26 letters plus 4 special characters: ä, ö, ü, ß",icon:"🔤",
      lessons:[
        {id:"de_fp_s1_l1",title:"The German Alphabet",icon:"🔤",xp:15,board:true,steps:[
          {type:"intro",title:"German uses the Latin alphabet",desc:"German has 26 base letters like English, plus 4 special characters: ä, ö, ü, and ß. Most consonants are similar to English, but several vowels and consonant combos sound very different.",goals:["Know the 26 base letters","Meet the 4 special German characters","Spot key differences from English"]},
          {type:"teach",kind:"info",nl:"Das Alphabet",en:"The Alphabet",phonetic:"dahs ahl-fah-BET",example:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",exampleEn:"26 base letters, same as English. Special chars: ä ö ü ß",note:"Letters Q, X, Y appear mainly in loanwords.\nThe letter J sounds like English Y (yes).\nThe letter W sounds like English V (very)."},
          {type:"teach",kind:"info",nl:"Unterschiede",en:"Key differences from English",phonetic:"OON-ter-shee-deh",example:"J = Y-sound. W = V-sound. V = F-sound. Z = TS-sound.",exampleEn:"These four letters are the biggest traps for English speakers",note:"English habits will mislead you here.\nTrain your ears: German J, W, V, Z all diverge from English."},
          {type:"mc",q:"In German, the letter J sounds like which English letter?",opts:["J as in jump","Y as in yes","G as in go","Zh as in measure"],ans:"Y as in yes",hint:"Think of the English word yes when you see German J"},
          {type:"mc",q:"In German, the letter W sounds like which English sound?",opts:["W as in water","F as in fox","V as in very","B as in boy"],ans:"V as in very",hint:"German W and English V share the same sound"},
          {type:"mc",q:"German has 26 base letters plus how many special characters?",opts:["Two: ä and ö","Three: ä, ö, and ü","Four: ä, ö, ü, and ß","Five including ch"],ans:"Four: ä, ö, ü, and ß",hint:"Three umlaut vowels plus one special consonant letter"},
          {type:"mc",q:"Which German letters appear mainly in loanwords?",opts:["B, D, G","Q, X, Y","J, W, V","Ä, Ö, Ü"],ans:"Q, X, Y",hint:"These three letters are rare in native German vocabulary"},
        ]},
        {id:"de_fp_s1_l2",title:"Umlauts: ä, ö, ü",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"Three vowels with two dots",desc:"Umlauts are modified vowels marked by two dots. They are full letters with their own distinct sounds, not decorations. ä, ö, ü each sound different from a, o, u.",goals:["Recognize ä, ö, ü as separate letters","Learn the approximate sound of each","Know that umlauts can change word meaning"]},
          {type:"teach",kind:"word",nl:"ä",en:"a-umlaut",phonetic:"like English e in bed",example:"A: Wie heißt das Tier?\nB: Das ist ein Bär.",exampleEn:"A: What is that animal called?\nB: That is a bear.",note:"Short ä sounds like English e in set.\nLong ä sounds like English a in say.\nExample pair: schlafen (sleep) vs. schläft (sleeps)."},
          {type:"teach",kind:"word",nl:"ö",en:"o-umlaut",phonetic:"round lips and say e",example:"A: Wie ist das Wetter?\nB: Es ist sehr schön.",exampleEn:"A: How is the weather?\nB: It is very beautiful.",note:"To produce ö: shape lips as if to say oh, then say eh.\nThis is one of the harder sounds for English speakers."},
          {type:"teach",kind:"word",nl:"ü",en:"u-umlaut",phonetic:"round lips and say ee",example:"A: Wo ist die Tür?\nB: Die Tür ist dort drüben.",exampleEn:"A: Where is the door?\nB: The door is over there.",note:"To produce ü: shape lips as if to say oo, then say ee.\nCompare: Mutter (mother) vs. Mütter (mothers)."},
          {type:"mc",q:"Which description best fits the sound of ö?",opts:["Say oh with flat lips","Round lips and say e","Exactly like English o","Like English oo in food"],ans:"Round lips and say e",hint:"Lip rounding is the key feature of ö"},
          {type:"mc",q:"Which description best fits the sound of ü?",opts:["Exactly like English u in cup","Round lips and say ee","Like English oo in food","Say ah with tight lips"],ans:"Round lips and say ee",hint:"Lip rounding plus an ee tongue position"},
          {type:"mc",q:"'Mutter' means mother. 'Mütter' means mothers. What signals the plural?",opts:["A different vowel letter","Adding -s to the end","The umlaut on the u","A prefix before the word"],ans:"The umlaut on the u",hint:"The dot pair above the vowel marks a grammatical change"},
          {type:"mc",q:"ä, ö, ü are best described as:",opts:["Decorative accent marks","Separate letters with distinct sounds","Variants of a, o, u with the same sound","Silent vowels used in formal writing"],ans:"Separate letters with distinct sounds",hint:"Two dots = a genuinely different letter and sound"},
        ]},
        {id:"de_fp_s1_l3",title:"Eszett: ß",icon:"📝",xp:15,board:true,steps:[
          {type:"intro",title:"The letter ß (Eszett)",desc:"ß is a single letter that represents a sharp S sound. When ß appears versus SS depends on whether the preceding vowel is long or short.",goals:["Recognize ß as a single letter","Know ß sounds like a sharp S","Learn the basic ß vs. SS rule"]},
          {type:"teach",kind:"word",nl:"ß (Eszett)",en:"sharp S",phonetic:"like ss in kiss",example:"A: Wie heißt du?\nB: Ich heiße Lukas.",exampleEn:"A: What is your name?\nB: My name is Lukas.",note:"ß only appears after long vowels or diphthongs.\nAfter short vowels: use SS instead.\nExample: Straße (long a) vs. Klasse (short a)."},
          {type:"teach",kind:"info",nl:"ß vs. SS Regel",en:"ß vs. SS rule",phonetic:"ess-TSET fair-zooss ES-ES",example:"Long vowel or diphthong + sharp S = ß.\nShort vowel + sharp S = SS.",exampleEn:"heißen (ei = diphthong) uses ß. Klasse (short a) uses SS.",note:"In Swiss German and some official contexts, SS replaces ß entirely.\nCapital ß was standardized as an official letter in 2017."},
          {type:"mc",q:"ß represents which sound?",opts:["A voiced Z sound","A soft G sound","A sharp voiceless S sound","A combination of S and H"],ans:"A sharp voiceless S sound",hint:"It is a special form of the letter S, not Z"},
          {type:"mc",q:"After a SHORT vowel, the sharp S is written as:",opts:["ß","SS","sz","s alone"],ans:"SS",hint:"Short vowels always take double S, not Eszett"},
          {type:"mc",q:"'Straße' (street) uses ß because the vowel before it is:",opts:["Short","Long","Silent","An umlaut only"],ans:"Long",hint:"Long vowel or diphthong + sharp S = ß"},
          {type:"mc",q:"If ß is unavailable on a keyboard, it is replaced by:",opts:["S alone","SZ","SS","Z alone"],ans:"SS",hint:"Double S is the standard substitute for ß"},
          {type:"mc",q:"'Klasse' (class) uses SS not ß because the a in Kla- is:",opts:["Long","A diphthong","Short","An umlaut"],ans:"Short",hint:"Short vowel = SS rule applies"},
        ]},
      ]},

    // ── STAGE 2: VOWELS ──
    {id:"de_fp_s2",title:"Vowels",desc:"Short and long vowels, umlauts as vowels, and diphthongs",icon:"🔊",
      lessons:[
        {id:"de_fp_s2_l1",title:"Short vs. Long Vowels",icon:"⚖️",xp:15,board:true,steps:[
          {type:"intro",title:"Vowel length changes meaning in German",desc:"German vowels can be short or long. Wrong length = different word. Long vowels are signaled by doubling (aa, ee, oo), by adding H, or by ie.",goals:["Recognize short vs. long vowels","Know the main ways German signals vowel length","See minimal pairs where length changes meaning"]},
          {type:"teach",kind:"info",nl:"Kurze Vokale",en:"Short vowels",phonetic:"KOOR-tsuh foh-KAH-luh",example:"a in Matte, e in Bett, i in bitte, o in Gott, u in Mutter",exampleEn:"Short vowels are clipped and brief",note:"Short vowels appear in closed syllables ending in a consonant.\nThey are briefer and less tense than long vowels."},
          {type:"teach",kind:"info",nl:"Lange Vokale",en:"Long vowels",phonetic:"LANG-uh foh-KAH-luh",example:"a in Vater (open syllable), aa in Saal, ah in Bahn, ie in viel",exampleEn:"Long vowels are held and drawn out",note:"Signals for long vowels:\n1. Double letter (aa, ee, oo)\n2. Vowel + H (Bahn, Wahl, Stuhl)\n3. ie always = long ee sound"},
          {type:"mc",q:"'Bett' (bed) has a short e. 'See' (lake) has a long e. The long e is signaled by:",opts:["Adding an H after it","Using the double letter ee","Writing a silent e","An accent mark above"],ans:"Using the double letter ee",hint:"German uses vowel doubling to force a long sound"},
          {type:"mc",q:"The letters ie in German always represent:",opts:["A short i sound","A long ee sound","Two separate syllables","The same as English ie in pie"],ans:"A long ee sound",hint:"ie is always one syllable and always a long ee sound"},
          {type:"mc",q:"'Stadt' (city) has a short a. 'Staat' (state) has a long a. What creates the long a?",opts:["The final t","The double aa","A stress mark","The st- cluster at the start"],ans:"The double aa",hint:"Double vowel letters always signal a long sound"},
          {type:"mc",q:"A vowel followed by H (like in Bahn) is typically:",opts:["Short","Long","Silent","An umlaut"],ans:"Long",hint:"H after a vowel acts as a length marker in German"},
        ]},
        {id:"de_fp_s2_l2",title:"Umlauts in Words",icon:"🔠",xp:15,board:true,steps:[
          {type:"intro",title:"ä, ö, ü in common vocabulary",desc:"Umlauts appear in everyday German words. They often mark plural forms or related words with a shifted meaning.",goals:["Spot umlauts in common words","Know umlauts can signal plural or related forms","Practice the sounds in context"]},
          {type:"teach",kind:"word",nl:"Bär",en:"bear",phonetic:"BAIR",example:"A: Was ist das?\nB: Das ist ein Bär.",exampleEn:"A: What is that?\nB: That is a bear.",note:"ä sounds like the vowel in English air. Plural: Bären."},
          {type:"teach",kind:"word",nl:"schön",en:"beautiful / nice",phonetic:"shurn (round lips)",example:"A: Wie ist das Wetter?\nB: Es ist sehr schön.",exampleEn:"A: How is the weather?\nB: It is very nice.",note:"ö = round lips and say uh. Very common word. Opposite: hässlich (ugly)."},
          {type:"teach",kind:"word",nl:"über",en:"over / about",phonetic:"UE-ber (round lips)",example:"A: Worüber redest du?\nB: Ich rede über das Buch.",exampleEn:"A: What are you talking about?\nB: I am talking about the book.",note:"ü = round lips and say ee. Core meaning is over or above. Also used as about a topic."},
          {type:"mc",q:"'Buch' means book. 'Bücher' means books. The umlaut on the u signals:",opts:["A different root word","The plural form","Past tense","A question form"],ans:"The plural form",hint:"German often uses umlauts to form plurals"},
          {type:"mc",q:"How would you produce the ö sound?",opts:["Say oh without lip rounding","Round lips and say uh or e","Say it like English oo","Say it like English er"],ans:"Round lips and say uh or e",hint:"Lip rounding is the distinctive feature of ö"},
          {type:"mc",q:"'Mutter' vs. 'Mütter', 'Bruder' vs. 'Brüder'. What pattern do you see?",opts:["Umlaut marks past tense","Umlaut marks plural in many nouns","Umlaut marks feminine gender","Umlaut placement is random"],ans:"Umlaut marks plural in many nouns",hint:"These pairs show the same noun in singular and plural"},
          {type:"mc",q:"The word grün (green) contains which umlaut?",opts:["ä","ö","ü","No umlaut"],ans:"ü",hint:"Look at the vowel letter in grün"},
        ]},
        {id:"de_fp_s2_l3",title:"Diphthongs: ei, au, eu/äu",icon:"🔀",xp:15,board:true,steps:[
          {type:"intro",title:"German has three main diphthongs",desc:"A diphthong is a gliding vowel: two vowel letters, one syllable. German has ei/ai, au, and eu/äu. Each diphthong has only one sound.",goals:["Decode ei/ai as one sound","Decode au as one sound","Decode eu and äu as one sound"]},
          {type:"teach",kind:"info",nl:"ei / ai",en:"like English eye or I",phonetic:"like the word eye",example:"ein (a/one), Wein (wine), Mai (May), Kaiser (emperor)",exampleEn:"ei and ai both sound like English eye",note:"ei is far more common than ai.\nEnglish cognates: ein = one, Wein = wine (compare English vine)."},
          {type:"teach",kind:"info",nl:"au",en:"like English ow in cow",phonetic:"like ow in cow",example:"auch (also), Haus (house), blau (blue), Maus (mouse)",exampleEn:"au sounds like the ow in now",note:"English cognates: Haus = house, Maus = mouse.\nThe au diphthong is stable: always sounds the same."},
          {type:"teach",kind:"info",nl:"eu / äu",en:"like English oy in boy",phonetic:"like oy in boy",example:"neu (new), heute (today), Häuser (houses), Träume (dreams)",exampleEn:"eu and äu both sound like oy",note:"äu often appears in umlaut plurals: Haus → Häuser.\neu and äu are the same sound with different spellings."},
          {type:"mc",q:"'Wein' (wine) contains which diphthong?",opts:["au","eu","ei","äu"],ans:"ei",hint:"Look at the two vowel letters in the word Wein"},
          {type:"mc",q:"'Haus' (house) → 'Häuser' (houses). The äu in the plural sounds like:",opts:["au as in cow","oy as in boy","ee as in see","ai as in air"],ans:"oy as in boy",hint:"äu and eu share the same oy sound"},
          {type:"mc",q:"'heute' (today) contains eu. This sounds like:",opts:["oy as in boy","ow as in cow","eye as in I","ay as in day"],ans:"oy as in boy",hint:"eu always makes the oy sound in German"},
          {type:"match",pairs:[{nl:"ei",en:"eye sound"},{nl:"au",en:"ow sound"},{nl:"eu",en:"oy sound"},{nl:"äu",en:"oy sound (umlaut plural form)"}]},
        ]},
      ]},

    // ── STAGE 3: CONSONANT TRAPS ──
    {id:"de_fp_s3",title:"Consonant Traps",desc:"ch, sch, z, w, v, s, sp, st: sounds that deceive English speakers",icon:"🧩",
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
    {id:"de_fp_s4",title:"Spelling & Capitalization",desc:"All nouns are capitalized. Compound words are one word.",icon:"✏️",
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
    {id:"de_fp_s5",title:"Pronunciation Patterns",desc:"Word stress, vowel length in open and closed syllables",icon:"🎵",
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
    {id:"de_fp_s6",title:"Grammar Preview",desc:"Three genders and V2 word order: what to expect in German",icon:"🏗️",
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
  ja:{name:"Learn Kana & Kanji",icon:"🇯🇵",blueprint:"kana",stages:[]},
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
  ro:{name:"Romanian Foundations Play",icon:"🇷🇴",blueprint:"latin_simple",stages:[]},
  ru:{name:"Russian Script Play",icon:"🇷🇺",blueprint:"cyrillic",stages:[]},
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
};

