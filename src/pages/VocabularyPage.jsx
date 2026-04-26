import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { LANG_META } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { WORD_DB, GRAMMAR_PACKS, resolvePackColor, pillGradient, GRAMMAR_CATEGORIES, KOREAN_FORM_INDEX, GERMAN_EXAMPLE_INDEX, KOREAN_MORPHEME_INDEX, KOREAN_EXAMPLE_INDEX, KOREAN_IDIOM_INDEX, KOREAN_GRAMMAR_REFERENCE, conjugateVerb, getIrregInfo, nounWithParticles, conjugateGermanVerb, getGermanVerbInfo, nounWithCases } from '../data/dictionary.js';
import { cap } from '../utils.js';
import { SpeakerButton } from '../audio.jsx';
import { useBottomSheet } from '../hooks.js';

function VocabularyPage({lang,user,showToast,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const isMobile=typeof window!=="undefined"&&window.innerWidth<600;
  // Helper: pick translation based on baseLang
  const getTrans=(entry)=>baseLang==="ar"&&entry.ar?entry.ar:entry.en;

  // ── Data: all words from WORD_DB ──
  const allWords=useMemo(()=>{
    const db=WORD_DB[lang];
    if(!db||Object.keys(db).length===0) return [];
    return Object.values(db).filter(e=>{
      if(!e.isLemma)return false; // only lemmas (teach-card words + curated function words)
      if(e.pos==="unknown")return false;
      const w=(e.display||e.word||"").trim();
      if(w.includes(" "))return false;
      if(w.includes("("))return false;
      if(w.includes("→"))return false; // conjugation pairs belong in word entry, not list
      if(w.startsWith("-"))return false; // grammar suffixes belong in Grammar tab
      // Language-specific: Korean vocab must be hangul (syllables or jamo) + optional ~ prefix
      if(lang==="ko"){
        const raw=w.replace(/^~/,""); // strip ~ prefix for particles
        if(!raw)return false;
        if(!/^[\uAC00-\uD7AF\u3131-\u3163]+$/.test(raw))return false; // hangul only
      }
      return true;
    }).sort((a,b)=>(a.word||"").localeCompare(b.word||""));
  },[lang]);
  const taughtWords=useMemo(()=>allWords.filter(e=>e.taught),[allWords]);

  // ── Grammar pack resolution (mirrors lesson engine exactly) ──
  const langPacks=GRAMMAR_PACKS[lang]||null;
  const [allPackSelections,setAllPackSelections]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_pack_v3");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  const activePackId=allPackSelections[lang]||(langPacks?.defaultPack)||null;
  const activePack=useMemo(()=>{
    if(!langPacks)return null;
    return langPacks.packs.find(pk=>pk.id===activePackId)||langPacks.packs[0]||null;
  },[langPacks,activePackId]);
  useEffect(()=>{try{localStorage.setItem("vl_grammar_pack_v3",JSON.stringify(allPackSelections));}catch(e){}},[allPackSelections]);
  const selectPack=(packId)=>setAllPackSelections(prev=>({...prev,[lang]:packId}));
  // Per-language disabled categories
  const [disabledCats,setDisabledCats]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_disabled_v1");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  useEffect(()=>{try{localStorage.setItem("vl_grammar_disabled_v1",JSON.stringify(disabledCats));}catch(e){}},[disabledCats]);
  const langDisabled=disabledCats[lang]||[];
  const toggleCatDisabled=(key)=>setDisabledCats(prev=>{
    const cur=prev[lang]||[];
    const next=cur.includes(key)?cur.filter(k=>k!==key):[...cur,key];
    return {...prev,[lang]:next};
  });
  const [expandedLegend,setExpandedLegend]=useState(null);
  const [grammarEditMode,setGrammarEditMode]=useState(false);
  // Grammar colorizer: React state synced with localStorage (same key as lesson engine)
  const [grammarHl,setGrammarHl]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_hl");if(v!==null)return v==="true";}catch(e){}
    return false;
  });
  useEffect(()=>{try{localStorage.setItem("vl_grammar_hl",grammarHl?"true":"false");}catch(e){}},[grammarHl]);
  const [showGrammarSettings,setShowGrammarSettings]=useState(false);

  // ── State ──
  const [mode,setMode]=useState("search");
  const [search,setSearch]=useState("");
  const [expanded,setExpanded]=useState(null); // stores the actual entry object or null
  const closeExpanded=useCallback(()=>{setExpanded(null);setPopupTab("overview");},[]);
  const bs=useBottomSheet(!!expanded&&isMobile,closeExpanded);
  const [filterOpen,setFilterOpen]=useState(false);
  const [filterPOS,setFilterPOS]=useState(new Set());
  const [filterLevel,setFilterLevel]=useState(new Set());
  const [filterGender,setFilterGender]=useState(new Set());
  const [filterTaughtOnly,setFilterTaughtOnly]=useState(false);
  const [browsePath,setBrowsePath]=useState([]);
  const [reviewIndex,setReviewIndex]=useState(0);
  const [reviewFlipped,setReviewFlipped]=useState(false);
  const [reviewLevel,setReviewLevel]=useState(null);
  const [reviewShuffled,setReviewShuffled]=useState(false);
  const [reviewWords,setReviewWords]=useState([]);
  const searchRef=useRef(null);
  const [gramLevel,setGramLevel]=useState("A1");
  const [gramExpanded,setGramExpanded]=useState(null);
  const [gramSearch,setGramSearch]=useState("");
  const [gramCategory,setGramCategory]=useState("All");
  const [gramPoliteness,setGramPoliteness]=useState("all");

  // ── Helpers ──
  const getWordColor=(entry)=>{
    if(!grammarHl||!activePack)return null;
    let resolved=resolvePackColor(entry,activePack,dk);
    if(resolved&&langDisabled.length>0&&entry.pos){
      const p=entry.pos;
      const g=entry.gender||"";
      const catOff=langDisabled.some(k=>
        (k==="verb"&&p==="verb")||(k==="adjective"&&p==="adjective")||
        (k==="adverb"&&(p==="adverb"||p==="pronoun"||p.startsWith("pronoun_")||p==="demonstrative"))||
        (k==="noun"&&p==="noun"&&!g)||
        (k==="structure"&&(p==="preposition"||p==="conjunction"||p.startsWith("article")||p==="interjection"||p==="number"||p==="counter"||p==="negation"||p==="question"||p.startsWith("particle_")))||
        (k==="m"&&(p.endsWith("_m")||(g==="m"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="f"&&(p.endsWith("_f")||(g==="f"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="n"&&(p.endsWith("_n")||p.endsWith("_het")||(g==="n"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="c"&&(p.endsWith("_c")||(g==="c"&&(p==="noun"||p==="adjective"))))||
        (k==="indef"&&(p.endsWith("_indef")||(g==="indef"&&p.startsWith("article"))))||
        (k==="pl"&&(p.endsWith("_pl")||(g==="pl"&&(p==="noun"||p==="adjective"))))||
        (k==="topic"&&p==="particle_topic")||(k==="subj"&&p==="particle_subj")||
        (k==="obj"&&p==="particle_obj")||(k==="loc"&&(p==="particle_loc"||p==="particle_dir"))||
        (k==="conn"&&(p==="particle_conn"||p==="particle_comp"||p==="particle_poss"||p==="particle_other"))
      );
      if(catOff) resolved=null;
    }
    return resolved?resolved.color:null;
  };
  const posLabel=(pos)=>{if(!pos)return "";const base=pos.includes("_")?pos.split("_")[0]:pos;return cap(base);};
  const cefrLevels=["A1","A2","B1","B2"];
  const ttsLocale=LANG_META[lang]?.ttsLocale||"en-US";
  const genderLabels={m:"Masculine",f:"Feminine",n:"Neuter",c:"Common",pl:"Plural"};

  // ── Search + filter (with gender) ──
  const filteredWords=useMemo(()=>{
    let pool=allWords;
    if(filterTaughtOnly) pool=pool.filter(e=>e.taught);
    if(filterPOS.size>0) pool=pool.filter(e=>{const base=e.pos?(e.pos.includes("_")?e.pos.split("_")[0]:e.pos):"";return filterPOS.has(base);});
    if(filterLevel.size>0) pool=pool.filter(e=>{const lv=(e.level||"A1").substring(0,2);return filterLevel.has(lv);});
    if(filterGender.size>0) pool=pool.filter(e=>e.gender&&filterGender.has(e.gender));
    if(search){
      const s=search.toLowerCase();
      // Form-to-lemma resolution for Korean: if search matches a conjugated form, include the base word
      const formResolved=new Set();
      if(lang==="ko"&&KOREAN_FORM_INDEX){
        const lemma=KOREAN_FORM_INDEX[s];
        if(lemma) formResolved.add(lemma.toLowerCase());
      }
      pool=pool.filter(e=>{
        const w=(e.word||"").toLowerCase(),d=(e.display||"").toLowerCase(),en=(e.en||"").toLowerCase();
        return w.includes(s)||d.includes(s)||en.includes(s)||formResolved.has(w);
      }).sort((a,b)=>{
        const aW=(a.word||"").toLowerCase(),bW=(b.word||"").toLowerCase();
        // Resolved lemma gets top priority
        if(formResolved.has(aW)&&!formResolved.has(bW))return -1;
        if(formResolved.has(bW)&&!formResolved.has(aW))return 1;
        if(aW===s&&bW!==s)return -1;if(bW===s&&aW!==s)return 1;
        if(aW.startsWith(s)&&!bW.startsWith(s))return -1;if(bW.startsWith(s)&&!aW.startsWith(s))return 1;
        return aW.localeCompare(bW);
      });
    }
    return pool;
  },[allWords,search,filterPOS,filterLevel,filterGender,filterTaughtOnly]);

  // ── Browse: available letters (A-Z and language-specific like umlauts) ──
  // Browse uses BARE word (entry.word) — not display with article prefix
  // Korean: group by initial consonant (14 base jamo) instead of every unique syllable
  const CHOSEONG="\u3131\u3132\u3134\u3137\u3138\u3139\u3141\u3142\u3143\u3145\u3146\u3147\u3148\u3149\u314A\u314B\u314C\u314D\u314E";
  const BASE_CHO={"\u3131":"\u3131","\u3132":"\u3131","\u3134":"\u3134","\u3137":"\u3137","\u3138":"\u3137","\u3139":"\u3139","\u3141":"\u3141","\u3142":"\u3142","\u3143":"\u3142","\u3145":"\u3145","\u3146":"\u3145","\u3147":"\u3147","\u3148":"\u3148","\u3149":"\u3148","\u314A":"\u314A","\u314B":"\u314B","\u314C":"\u314C","\u314D":"\u314D","\u314E":"\u314E"};
  const getChoseong=(ch)=>{const c=ch.charCodeAt(0);if(c<0xAC00||c>0xD7AF)return null;return CHOSEONG[Math.floor((c-0xAC00)/588)];};
  const getBaseCho=(ch)=>{const cho=getChoseong(ch);return cho?(BASE_CHO[cho]||cho):null;};

  const browseLetters=useMemo(()=>{
    if(lang==="ko"){
      const set=new Set();
      allWords.forEach(e=>{const c=(e.word||"")[0];if(c){const b=getBaseCho(c);if(b)set.add(b);}});
      return [...set].sort((a,b)=>a.localeCompare(b));
    }
    const set=new Set();
    allWords.forEach(e=>{const c=(e.word||"")[0];if(c&&/\p{L}/u.test(c))set.add(c.toUpperCase());});
    return [...set].sort((a,b)=>a.localeCompare(b));
  },[allWords,lang]);

  const browseLetterCounts=useMemo(()=>{
    const counts={};
    allWords.forEach(e=>{
      const c=(e.word||"")[0];if(!c)return;
      const key=lang==="ko"?(getBaseCho(c)||""):c.toUpperCase();
      if(key)counts[key]=(counts[key]||0)+1;
    });
    return counts;
  },[allWords,lang]);

  const browseTwoLetters=useMemo(()=>{
    if(browsePath.length!==1)return [];
    if(lang==="ko"){
      // Korean: show unique first syllables whose initial consonant matches selected consonant
      const cho=browsePath[0];
      const set=new Set();
      allWords.forEach(e=>{const c=(e.word||"")[0];if(c&&getBaseCho(c)===cho)set.add(c);});
      return [...set].sort((a,b)=>a.localeCompare(b));
    }
    const prefix=browsePath[0].toLowerCase();
    const set=new Set();
    allWords.forEach(e=>{
      const w=(e.word||"").toLowerCase();
      if(w.startsWith(prefix)&&w.length>=2) set.add(w.substring(0,2));
    });
    return [...set].sort((a,b)=>a.localeCompare(b)).map(s=>s.charAt(0).toUpperCase()+s.charAt(1));
  },[allWords,browsePath,lang]);

  const browseWords=useMemo(()=>{
    if(browsePath.length!==2)return [];
    if(lang==="ko"){
      // Korean: match by first syllable (browsePath[1] is the full syllable)
      const syl=browsePath[1];
      return allWords.filter(e=>(e.word||"")[0]===syl);
    }
    const prefix=(browsePath[0]+browsePath[1]).toLowerCase();
    return allWords.filter(e=>(e.word||"").toLowerCase().startsWith(prefix));
  },[allWords,browsePath,lang]);

  // ── Review: init ──
  useEffect(()=>{
    let pool=taughtWords;
    if(reviewLevel) pool=pool.filter(e=>(e.level||"A1").startsWith(reviewLevel));
    if(reviewShuffled){
      const arr=[...pool];
      for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
      pool=arr;
    }
    setReviewWords(pool);setReviewIndex(0);setReviewFlipped(false);
  },[taughtWords,reviewLevel,reviewShuffled]);

  // ── Reusable styles ──
  const panelBg=dk?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)":"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)";
  const panelBorder=dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)";
  const panelShadow=dk?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)";
  const glossArc=dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)";
  const neonSh="0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(200,180,255,0.3), 0 2px 4px rgba(0,0,0,0.5)";
  const subNeon="0 0 8px rgba(255,255,255,0.5), 0 0 20px rgba(200,180,255,0.25), 0 1px 3px rgba(0,0,0,0.6)";
  const txtSh="0 2px 12px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.4)";
  // CSS chevron arrow (← arrows banned like em-dashes)
  const chevronL=<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:3,verticalAlign:"middle"}}><polyline points="7,1 3,5 7,9"/></svg>;
  const chevronR=<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:3,verticalAlign:"middle"}}><polyline points="3,1 7,5 3,9"/></svg>;

  // Maximum candy gloss tab style — matches btn-purple / candyBtn standard
  const tabStyle=(isActive)=>({
    display:"inline-flex",alignItems:"center",gap:6,padding:isMobile?"12px 20px":"12px 26px",borderRadius:18,
    fontSize:13,fontWeight:900,cursor:"pointer",transition:"all .3s cubic-bezier(.4,0,.2,1)",border:"none",fontFamily:"Quicksand, sans-serif",
    position:"relative",overflow:"hidden",letterSpacing:0.4,
    background:isActive?(dk?"linear-gradient(180deg,#E8DEFF 0%,#D4C8FF 4%,#C0AEF8 10%,#A488F0 22%,#8B6AE4 38%,#7B5EE8 52%,#6F4FD8 62%,#6545C8 72%,#5840B8 84%,#4A2BA6 92%,#3D1F8C 100%)":"linear-gradient(180deg,#DDD0FF 0%,#C8BAFF 6%,#B8A8FA 14%,#A488F0 24%,#9B7AE8 34%,#7B5EE8 52%,#6F4FD8 64%,#6545C8 76%,#5840B8 88%,#4A2BA6 96%,#3D1F8C 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)"),
    color:isActive?"white":(dk?"rgba(200,184,255,0.95)":"#6030C0"),
    textShadow:isActive?"0 1px 3px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.15)":"none",
    boxShadow:isActive?(dk?"0 0 24px rgba(123,94,232,0.6), 0 6px 20px rgba(85,53,181,0.55), 0 2px 6px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -4px 0 rgba(0,0,0,0.22)":"0 0 20px rgba(123,94,232,0.5), 0 6px 20px rgba(123,94,232,0.4), 0 2px 6px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.18)"):(dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), 0 1px 3px rgba(0,0,0,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"),
  });

  // ── Compound bubble style — matches Korean compound word / dialogue bubbles exactly ──
  const bubbleBg=dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)";
  const bubbleBorder=dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)";
  const bubbleShadow=dk?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)";
  const bubbleGloss=dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)";
  // ── Word row V6: compound bubble style, gloss arc, popup on click ──
  const WordRow=({entry})=>{
    const wColor=getWordColor(entry);
    const disp=entry.display||entry.word||"";
    // When grammarHl ON: entire word (article+noun) gets ONE unified color from resolvePackColor
    const transColor=grammarHl?"#7B5EE8":(dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)");
    return(
      <div onClick={()=>setExpanded(expanded===entry?null:entry)} style={{borderRadius:22,overflow:"hidden",marginBottom:8,transition:"all .25s",position:"relative",cursor:"pointer",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"13px 18px",position:"relative",zIndex:1}}>
          <div style={{flex:1,minWidth:0}}>
            <span style={{fontFamily:"Quicksand, sans-serif",fontWeight:800,fontSize:15,color:wColor||(dk?"rgba(255,255,255,0.92)":"var(--gray-800)")}}>{disp}</span>
          </div>
          <span style={{color:transColor,fontSize:13,fontWeight:700,textAlign:"right",maxWidth:"40%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flexShrink:0,...(baseLang==="ar"?{direction:"rtl"}:{})}}>{getTrans(entry)||""}</span>
          <SpeakerButton text={entry.word} lang={ttsLocale} size={13} showToast={showToast}/>
        </div>
      </div>
    );
  };

  // ── Word popup overlay (replaces inline expansion) ──
  const badgePill=(hex,label)=>(<span style={{display:"inline-block",padding:"3px 10px",borderRadius:10,fontSize:10,fontWeight:800,color:"white",letterSpacing:0.3,textShadow:"0 1px 2px rgba(0,0,0,0.2)",position:"relative",overflow:"hidden",background:dk?`linear-gradient(180deg,${hex}cc 0%,${hex} 50%,${hex}bb 100%)`:`linear-gradient(180deg,${hex}dd 0%,${hex} 55%,${hex}aa 100%)`,boxShadow:`0 2px 8px ${hex}44, inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)`}}>{label}</span>);

  // ── Deep Dictionary: 5-Tab Word Entry ──
  const [popupTab,setPopupTab]=useState("overview");
  const WordPopup=()=>{
    if(!expanded||typeof expanded!=="object")return null;
    const entry=expanded;
    const wColor=getWordColor(entry);
    const artEntry=entry.article;
    const disp=entry.display||entry.word||"";
    const isKorean=lang==="ko";
    const isGerman=lang==="de";
    const isVerb=entry.pos==="verb"||entry.pos==="adjective"||entry.kind==="verb"||entry.kind==="adjective"||(entry.word&&entry.word.endsWith&&entry.word.endsWith("다"));
    const isDeVerb=isGerman&&(entry.pos==="verb"||entry.pos==="aux");
    const isDeNoun=isGerman&&entry.pos==="noun"&&!!entry.gender;
    const wordKey=(entry.word||"").toLowerCase();

    // Tab data
    const tabs=isKorean?[
      {id:"overview",label:"Overview"},
      {id:"forms",label:isVerb?"Forms":"Particles"},
      {id:"examples",label:"Examples"},
      {id:"grammar",label:"Grammar"},
      {id:"related",label:"Related"},
    ]:isGerman?(()=>{
      const t=[{id:"overview",label:"Overview"}];
      if(isDeVerb)t.push({id:"forms",label:"Conjugation"});
      if(isDeNoun)t.push({id:"cases",label:"Cases"});
      t.push({id:"examples",label:"Examples"});
      return t;
    })():[
      {id:"overview",label:"Overview"},
    ];

    // Korean conjugation data (for Forms tab)
    const conjData=useMemo(()=>{
      if(!isKorean||!isVerb)return null;
      const dictForm=wordKey.endsWith("다")?wordKey:wordKey+"다";
      return conjugateVerb(dictForm);
    },[wordKey,isKorean,isVerb]);
    const irregInfo=useMemo(()=>{
      if(!isKorean||!isVerb)return null;
      const dictForm=wordKey.endsWith("다")?wordKey:wordKey+"다";
      return getIrregInfo(dictForm);
    },[wordKey,isKorean,isVerb]);

    // German conjugation data (for Forms tab)
    const deConjData=useMemo(()=>{
      if(!isGerman||!isDeVerb)return null;
      try{return conjugateGermanVerb(entry.word||wordKey);}catch(e){return null;}
    },[wordKey,isGerman,isDeVerb]);
    const deVerbInfo=useMemo(()=>{
      if(!isGerman||!isDeVerb)return null;
      try{return getGermanVerbInfo(entry.word||wordKey);}catch(e){return null;}
    },[wordKey,isGerman,isDeVerb]);

    // Particle combinations (for nouns)
    const particleData=useMemo(()=>{
      if(!isKorean||isVerb)return null;
      return nounWithParticles(entry.word||"");
    },[entry.word,isKorean,isVerb]);

    // Examples from curriculum (Korean)
    const examples=useMemo(()=>{
      if(!isKorean)return [];
      return KOREAN_EXAMPLE_INDEX[wordKey]||[];
    },[wordKey,isKorean]);

    // Examples from curriculum (German)
    const deExamples=useMemo(()=>{
      if(!isGerman)return [];
      return GERMAN_EXAMPLE_INDEX[wordKey]||[];
    },[wordKey,isGerman]);

    // German noun case declension table
    const deCaseData=useMemo(()=>{
      if(!isDeNoun)return null;
      try{return nounWithCases(entry.word||wordKey, entry.gender);}catch(e){return null;}
    },[wordKey,isDeNoun,entry.gender]);

    // Morpheme family
    const morphemes=useMemo(()=>{
      if(!isKorean)return [];
      const result=[];
      for(const[morph,data]of Object.entries(KOREAN_MORPHEME_INDEX)){
        if(data.words.some(w=>w.toLowerCase()===wordKey)){
          result.push({morph,hanja:data.hanja,meaning:data.meaning,family:data.words.filter(w=>w.toLowerCase()!==wordKey)});
        }
      }
      return result;
    },[wordKey,isKorean]);

    // Idioms containing this word
    const idioms=useMemo(()=>{
      if(!isKorean)return [];
      return KOREAN_IDIOM_INDEX[wordKey]||[];
    },[wordKey,isKorean]);

    // ── Tab styling ──
    const tabBg=(active)=>active
      ?(dk?"linear-gradient(180deg,#A488F0 0%,#7B5EE8 55%,#5840B8 100%)":"linear-gradient(180deg,#B8A8FA 0%,#7B5EE8 55%,#5840B8 100%)")
      :(dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)");
    const tabColor=(active)=>active?"white":(dk?"rgba(200,184,255,0.7)":"#6040C0");
    const sectionTitle=(text)=><div style={{fontSize:11,fontWeight:900,letterSpacing:1,textTransform:"uppercase",color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginBottom:8,marginTop:14}}>{text}</div>;
    const subNote=(text)=><div style={{fontSize:12,color:dk?"rgba(200,184,255,0.65)":"rgba(80,60,140,0.6)",lineHeight:1.5,fontWeight:600,marginBottom:8,whiteSpace:"pre-line"}}>{text}</div>;
    // Candy gloss bubble wrapper — used for all tab content cards
    const glossBubble=(children,opts={})=>{
      const mb=opts.mb??6;const k=opts.key;
      return <div key={k} style={{borderRadius:16,padding:"10px 14px",marginBottom:mb,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"relative",zIndex:1}}>{children}</div>
      </div>;
    };

    return(
      <div className={isMobile?"bs-overlay":""} onClick={()=>{if(isMobile)bs.dismiss();else{setExpanded(null);setPopupTab("overview");}}} style={isMobile?{}:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(6px)",animation:"fadeIn .2s"}}>
        <div ref={isMobile?bs.panelRef:undefined} className={isMobile?("bs-panel"+(bs.closing?" closing":"")):""} onPointerDown={isMobile?bs.onPointerDown:undefined} onClick={e=>e.stopPropagation()} style={{
          width:isMobile?"100%":"min(460px, 92vw)",
          maxHeight:isMobile?"85vh":"88vh",
          borderRadius:isMobile?"24px 24px 0 0":24,position:"relative",
          background:dk?"linear-gradient(180deg, rgba(40,30,70,0.98) 0%, rgba(30,24,55,0.98) 100%)":"linear-gradient(180deg, rgba(250,248,255,0.99) 0%, rgba(240,236,255,0.98) 100%)",
          border:dk?"1.5px solid rgba(123,94,232,0.4)":"1.5px solid rgba(180,165,240,0.5)",
          boxShadow:dk?"0 -8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3)":"0 -8px 40px rgba(123,94,232,0.15), 0 0 20px rgba(180,165,240,0.2)",
          padding:isMobile?"0 16px 32px":"28px 22px",
          ...(isMobile&&bs.translateY>0?{transform:`translateY(${bs.translateY}px)`}:{}),
        }}>
          {isMobile&&<div className="bs-handle" onPointerDown={bs.onPointerDown}/>}
          {!isMobile&&<span onClick={()=>{setExpanded(null);setPopupTab("overview");}} style={{position:"absolute",top:14,right:16,cursor:"pointer",fontSize:16,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.6)",zIndex:2}}>&#10005;</span>}
          <div className={isMobile?"bs-content":""}  style={isMobile?{padding:"0 0 16px"}:{overflow:"auto"}}>

          {/* Word header */}
          <div style={{borderRadius:20,overflow:"hidden",position:"relative",padding:"16px 18px 14px",marginBottom:12,background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
            <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
              <div style={{flex:1}}>
                <div style={{fontFamily:"Quicksand, sans-serif",fontWeight:900,fontSize:22,color:wColor||(dk?"rgba(255,255,255,0.95)":"var(--gray-800)"),marginBottom:2}}>{disp}</div>
                <div style={{fontSize:14,fontWeight:700,color:grammarHl?"#7B5EE8":(dk?"rgba(200,184,255,0.65)":"rgba(100,80,160,0.6)"),...(baseLang==="ar"?{direction:"rtl"}:{})}}>{getTrans(entry)||""}</div>
                {entry.phonetic&&<div style={{fontSize:11,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:2}}>{entry.phonetic}</div>}
              </div>
              <SpeakerButton text={entry.word} lang={ttsLocale} size={18} showToast={showToast}/>
            </div>
          </div>

          {/* Badge row */}
          <div style={{display:"flex",flexWrap:"wrap",gap:5,alignItems:"center",marginBottom:10}}>
            {entry.level&&badgePill("#7B5EE8",(entry.level||"A1").substring(0,2))}
            {entry.topikLevel&&badgePill("#2ECDA7","TOPIK "+(entry.topikLevel==="A"?"I":"II"))}
            {entry.pos&&badgePill(wColor||"#7B5EE8",posLabel(entry.pos))}
            {artEntry&&badgePill(wColor||"#7B5EE8",artEntry)}
            {entry.gender&&badgePill(wColor||"#6040C0",genderLabels[entry.gender]||entry.gender)}
            {isKorean&&isVerb&&irregInfo&&irregInfo.id!=="regular"&&badgePill("#FF6D00",irregInfo.label)}
            {entry.frequencyRank&&entry.frequencyRank<3000&&badgePill("#F59E0B","#"+entry.frequencyRank)}
          </div>

          {/* Tab bar */}
          {tabs.length>1&&<div style={{display:"flex",gap:4,marginBottom:14,overflowX:"auto",paddingBottom:2}}>
            {tabs.map(t=><button key={t.id} onClick={()=>setPopupTab(t.id)} style={{
              padding:"6px 12px",borderRadius:12,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:800,
              background:tabBg(popupTab===t.id),color:tabColor(popupTab===t.id),
              boxShadow:popupTab===t.id?"0 2px 8px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"inset 0 1px 0 rgba(255,255,255,0.1)",
              transition:"all .2s",whiteSpace:"nowrap",flexShrink:0,
            }}>{t.label}</button>)}
          </div>}

          {/* ═══ TAB: Overview ═══ */}
          {popupTab==="overview"&&<>
            {entry.note&&subNote(entry.note)}
            {entry.example&&<div style={{borderRadius:16,padding:"10px 14px",marginBottom:10,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
              <div style={{position:"relative",zIndex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:13,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontWeight:600,flex:1,lineHeight:1.5,whiteSpace:"pre-line"}}>{entry.example}</span>
                  <SpeakerButton text={entry.example} lang={ttsLocale} size={12} showToast={showToast}/>
                </div>
                {entry.exampleEn&&<div style={{fontSize:11,color:dk?"rgba(200,184,255,0.55)":"rgba(100,80,160,0.5)",fontStyle:"italic",marginTop:3,whiteSpace:"pre-line"}}>{entry.exampleEn}</div>}
              </div>
            </div>}
            {/* Fun fact (v2 signature feature) */}
            {entry.funFact&&glossBubble(<>
              <div style={{fontSize:11,fontWeight:900,letterSpacing:0.5,textTransform:"uppercase",color:dk?"rgba(245,166,35,0.7)":"rgba(200,130,10,0.65)",marginBottom:4}}>Fun Fact</div>
              <div style={{fontSize:12,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontWeight:600,lineHeight:1.5,whiteSpace:"pre-line"}}>{entry.funFact}</div>
            </>)}
            {entry.cognate&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700,marginTop:4}}>{entry.cognate}</div>}
            {/* Morpheme decomposition (Sino-Korean) */}
            {morphemes.length>0&&<>
              {sectionTitle("Etymology")}
              {morphemes.map((m,i)=><div key={i} style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.65)",fontWeight:600,marginBottom:4}}>
                <span style={{fontWeight:800,color:dk?"#A890FF":"#7B5EE8"}}>{m.morph}</span>
                {m.hanja&&<span style={{color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginLeft:4}}>({m.hanja})</span>}
                <span style={{marginLeft:6}}>{m.meaning}</span>
                {m.family.length>0&&<span style={{marginLeft:8,fontSize:11,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)"}}>
                  also in: {m.family.slice(0,5).join(", ")}
                </span>}
              </div>)}
            </>}
            {/* KOREAN_DICT particle info */}
            {entry.particle&&<>
              {sectionTitle("Particles")}
              {subNote(entry.particle)}
            </>}
            {/* KOREAN_DICT morph info */}
            {entry.morph&&!morphemes.length&&<>
              {sectionTitle("Etymology")}
              {subNote(entry.morph)}
            </>}
            {/* Uses from KOREAN_DICT */}
            {entry.uses&&entry.uses.length>0&&<>
              {sectionTitle("Common Usage")}
              {entry.uses.map((u,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{u.k}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:2}}>{u.e}</div>
              </>,{key:i}))}
            </>}
          </>}

          {/* ═══ TAB: Forms (Conjugation / Particles) ═══ */}
          {popupTab==="forms"&&isKorean&&<>
            {isVerb&&conjData&&<>
              {irregInfo&&irregInfo.id!=="regular"&&<div style={{fontSize:12,color:"#FF6D00",fontWeight:700,marginBottom:10}}>{irregInfo.ko} ({irregInfo.label})</div>}
              {/* Group by speech level */}
              {["해요체","합쇼체","반말","Connective","Modifier","Nominalization","Ability","Desire","Negation","Honorific"].map(group=>{
                const forms=Object.values(conjData).filter(f=>f.group===group);
                if(!forms.length)return null;
                return <div key={group}>
                  {sectionTitle(group)}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                    {forms.map((f,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                      <div style={{position:"relative",zIndex:1}}>
                        <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{f.form}</div>
                        <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{f.label}</div>
                      </div>
                    </div>)}
                  </div>
                </div>;
              })}
            </>}
            {!isVerb&&particleData&&<>
              {sectionTitle("Particle Combinations")}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                {particleData.map((p,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{p.form}</div>
                    <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{p.role} ({p.particle})</div>
                  </div>
                </div>)}
              </div>
            </>}
          </>}

          {/* ═══ TAB: Forms (German Conjugation) ═══ */}
          {popupTab==="forms"&&isGerman&&isDeVerb&&<>
            {deVerbInfo&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.65)",fontWeight:700,marginBottom:10}}>
              {deVerbInfo.label&&<span>{deVerbInfo.label} verb</span>}
              {deVerbInfo.notes&&<span style={{marginLeft:8,color:"#FF6D00"}}>{deVerbInfo.notes}</span>}
              {deVerbInfo.aux&&<span style={{marginLeft:8}}>Aux: {deVerbInfo.aux}</span>}
            </div>}
            {deConjData&&(()=>{
              // Group conjugation entries by their group field (Prasens, Prateritum, etc.)
              const groups={};
              for(const[key,f]of Object.entries(deConjData)){
                const g=f.group||"Other";
                if(!groups[g])groups[g]=[];
                groups[g].push(f);
              }
              const groupOrder=["Prasens","Prateritum","Perfekt","Imperativ","Konjunktiv II","Futur I"];
              const sorted=[...groupOrder.filter(g=>groups[g]),...Object.keys(groups).filter(g=>!groupOrder.includes(g))];
              return sorted.map(g=><div key={g}>
                {sectionTitle(g)}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                  {groups[g].map((f,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                    <div style={{position:"relative",zIndex:1}}>
                      <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{f.form}</div>
                      {f.label&&<div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{f.label}</div>}
                    </div>
                  </div>)}
                </div>
              </div>);
            })()}
            {!deConjData&&<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>Conjugation data not available for this verb.</div>}
          </>}

          {/* ═══ TAB: Cases (German nouns) ═══ */}
          {popupTab==="cases"&&isGerman&&isDeNoun&&<>
            {deCaseData&&deCaseData.length>0?<>
              {sectionTitle("Noun Declension")}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                {deCaseData.map((c,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{c.definite}</div>
                    {c.indefinite&&<div style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",marginTop:2}}>{c.indefinite}</div>}
                    <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:700,marginTop:2}}>{c.caseLabel}</div>
                  </div>
                </div>)}
              </div>
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>Case data not available for this noun.</div>}
          </>}

          {/* ═══ TAB: Examples (German) ═══ */}
          {popupTab==="examples"&&isGerman&&<>
            {deExamples.length>0?<>
              {sectionTitle(`${deExamples.length} example${deExamples.length>1?"s":""} from curriculum`)}
              {deExamples.map((ex,i)=>glossBubble(<>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1,lineHeight:1.5,whiteSpace:"pre-line"}}>{ex.target}</span>
                  <SpeakerButton text={ex.target} lang={ttsLocale} size={11} showToast={showToast}/>
                </div>
                {ex.source&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.65)",fontWeight:600,marginTop:3}}>{ex.source}</div>}
                <div style={{fontSize:9,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:3,fontWeight:700}}>Unit {ex.unitN} / {ex.lessonId}</div>
              </>,{key:i}))}
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>No curriculum examples found for this word.</div>}
          </>}

          {/* ═══ TAB: Examples (Korean) ═══ */}
          {popupTab==="examples"&&isKorean&&<>
            {examples.length>0?<>
              {sectionTitle(`${examples.length} example${examples.length>1?"s":""} from curriculum`)}
              {examples.map((ex,i)=>glossBubble(<>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1,lineHeight:1.5}}>{ex.korean}</span>
                  <SpeakerButton text={ex.korean} lang={ttsLocale} size={11} showToast={showToast}/>
                </div>
                {ex.english&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.65)",fontWeight:600,marginTop:3}}>{ex.english}</div>}
                <div style={{fontSize:9,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:3,fontWeight:700}}>Unit {ex.unitN} / {ex.lessonId}</div>
              </>,{key:i}))}
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>No curriculum examples found for this word yet.</div>}

            {/* Idioms */}
            {idioms.length>0&&<>
              {sectionTitle("Idioms & Expressions")}
              {idioms.map((id,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:800,color:dk?"#FFD600":"#C6A700"}}>{id.idiom}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600}}>{id.meaning}</div>
              </>,{key:i,mb:4}))}
            </>}
          </>}

          {/* ═══ TAB: Grammar ═══ */}
          {popupTab==="grammar"&&isKorean&&<>
            {entry.note&&<>{sectionTitle("Usage Notes")}{subNote(entry.note)}</>}
            {entry.particle&&<>{sectionTitle("Particle Patterns")}{subNote(entry.particle)}</>}
            {entry.uses&&entry.uses.length>0&&<>
              {sectionTitle("Usage Examples")}
              {entry.uses.map((u,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{u.k}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:2}}>{u.e}</div>
              </>,{key:i}))}
            </>}
            {/* DeepDive from teach card (if available via note match) */}
            {(!entry.note&&!entry.particle&&!(entry.uses&&entry.uses.length))&&
              <div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>
                {t("deep_grammar_soon",baseLang)}
              </div>}
          </>}

          {/* ═══ TAB: Related ═══ */}
          {popupTab==="related"&&isKorean&&<>
            {/* Morpheme families */}
            {morphemes.length>0&&<>
              {sectionTitle("Word Family")}
              {morphemes.map((m,i)=><div key={i} style={{marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:800,color:dk?"#A890FF":"#7B5EE8",marginBottom:4}}>
                  {m.morph} {m.hanja&&`(${m.hanja})`} = {m.meaning}
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                  {m.family.map((w,j)=>{
                    const famEntry=WORD_DB.ko&&WORD_DB.ko[w.toLowerCase()];
                    return <button key={j} onClick={()=>{if(famEntry){setExpanded(famEntry);setPopupTab("overview");}}} style={{
                      padding:"5px 12px",borderRadius:12,border:"none",cursor:famEntry?"pointer":"default",
                      fontFamily:"inherit",fontSize:12,fontWeight:700,
                      background:famEntry?tabBg(false):(dk?"rgba(255,255,255,0.04)":"rgba(240,234,255,0.4)"),
                      color:famEntry?(dk?"rgba(255,255,255,0.85)":"#6040C0"):(dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.3)"),
                      transition:"all .2s",
                    }}>{w} {famEntry?`(${famEntry.en||""})`:""}</button>;
                  })}
                </div>
              </div>)}
            </>}

            {/* Idioms */}
            {idioms.length>0&&<>
              {sectionTitle("Appears in Idioms")}
              {idioms.map((id,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:800,color:dk?"#FFD600":"#C6A700"}}>{id.idiom}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600}}>{id.meaning}</div>
              </>,{key:i,mb:4}))}
            </>}

            {/* Conjugated forms as related words (verbs only) */}
            {isVerb&&conjData&&!morphemes.length&&!idioms.length&&<>
              {sectionTitle("Conjugated Forms")}
              <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>
                {Object.values(conjData).slice(0,12).map((f,i)=><button key={i} onClick={()=>setPopupTab("forms")} style={{
                  padding:"5px 12px",borderRadius:12,border:"none",cursor:"pointer",
                  fontFamily:"inherit",fontSize:12,fontWeight:700,
                  background:dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)",
                  color:dk?"rgba(255,255,255,0.7)":"#6040C0",transition:"all .2s",
                }}>{f.form}</button>)}
              </div>
              <div style={{fontSize:11,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",fontWeight:600,textAlign:"center"}}>Tap any form to see all conjugations</div>
            </>}
            {(!morphemes.length&&!idioms.length&&!(isVerb&&conjData))&&
              <div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>
                No related words found yet.
              </div>}
          </>}

          {/* ═══ Ask Verumius fallback — shown when data is sparse ═══ */}
          {(isKorean||isGerman)&&(()=>{
            const hasNote=!!entry.note;
            const hasUses=entry.uses&&entry.uses.length>0;
            const hasParticle=!!entry.particle;
            const hasMorph=!!entry.morph;
            const hasFunFact=!!entry.funFact;
            const richCount=[hasNote,hasUses,hasParticle,hasMorph,hasFunFact].filter(Boolean).length;
            if(richCount>=2)return null;
            return <div style={{marginTop:12,textAlign:"center"}}>
              <button onClick={()=>{
                const langName=isKorean?"Korean":"German";
                const prompt=`Tell me everything about the ${langName} word "${entry.word}" (${entry.en||""}). Include: etymology, common collocations, example sentences at different CEFR levels, cultural context, and common mistakes learners make.${isGerman&&isDeVerb?" Include all conjugated forms and irregular patterns.":""}${isKorean?" Include all conjugated forms and idioms it appears in.":""}`;
                try{localStorage.setItem("vl_chat_prefill",prompt);}catch(e){}
                showToast&&showToast("Open Chat to ask Verumius!");
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06) translateY(-2px)";e.currentTarget.style.filter="brightness(1.12)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{
                padding:"10px 22px",borderRadius:16,border:"none",cursor:"pointer",fontFamily:"Quicksand, sans-serif",
                fontSize:13,fontWeight:800,transition:"all .25s",position:"relative",overflow:"hidden",
                background:dk?"linear-gradient(180deg,#F7D06B 0%,#F5A623 25%,#E8960A 55%,#D08E10 85%,#B87A08 100%)":"linear-gradient(180deg,#F7D06B 0%,#F5A623 25%,#E8960A 55%,#D08E10 85%,#B87A08 100%)",
                color:"white",textShadow:"0 1px 3px rgba(0,0,0,0.25)",
                boxShadow:"0 4px 16px rgba(245,166,35,0.45), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
              }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1}}>Ask Verumius about this word</span>
              </button>
            </div>;
          })()}
          </div>
        </div>
      </div>
    );
  };

  // ── Filter helpers ──
  const toggleFilter=(set,setter,val)=>{const n=new Set(set);if(n.has(val))n.delete(val);else n.add(val);setter(n);};
  const posTypes=useMemo(()=>{const s=new Set();allWords.forEach(e=>{const b=e.pos?(e.pos.includes("_")?e.pos.split("_")[0]:e.pos):"";if(b&&b!=="unknown")s.add(b);});return [...s].sort();},[allWords]);
  const activeLevels=useMemo(()=>{const s=new Set();allWords.forEach(e=>{const l=(e.level||"A1").substring(0,2);s.add(l);});return cefrLevels.filter(l=>s.has(l));},[allWords]);
  const activeGenders=useMemo(()=>{const s=new Set();allWords.forEach(e=>{if(e.gender)s.add(e.gender);});return ["m","f","n","c","pl"].filter(g=>s.has(g));},[allWords]);
  const hasActiveFilters=filterPOS.size>0||filterLevel.size>0||filterGender.size>0||filterTaughtOnly;

  // Candy chip with full gloss arc — used for review level pills and anywhere chipStyle is called
  const candyChip=(active)=>({
    padding:"7px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:800,transition:"all .25s",position:"relative",overflow:"hidden",
    background:active?(dk?"linear-gradient(180deg,#D4C8FF 0%,#C0AEF8 8%,#A488F0 20%,#8B6AE4 38%,#7B5EE8 52%,#6545C8 72%,#5840B8 88%,#4A2BA6 100%)":"linear-gradient(180deg,#C8BAFF 0%,#B8A8FA 10%,#9B7AE8 25%,#7B5EE8 55%,#6545C8 80%,#5840B8 92%,#4A2BA6 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
    color:active?"white":(dk?"rgba(200,184,255,0.8)":"#6040C0"),
    textShadow:active?"0 1px 3px rgba(0,0,0,0.3)":"none",
    boxShadow:active?(dk?"0 0 16px rgba(123,94,232,0.45), 0 4px 14px rgba(85,53,181,0.4), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 0 14px rgba(123,94,232,0.35), 0 4px 14px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)"):(dk?"inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 6px rgba(0,0,0,0.18)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.18)"),
  });
  const chipStyle=candyChip;

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════
  return(
    <div className="anim" style={{maxWidth:700,margin:"0 auto"}}>
      {expanded && typeof expanded === "object" && createPortal(<WordPopup/>, document.body)}
      {/* ── Header ── */}
      <div style={{textAlign:"center",marginBottom:20}}>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4,fontFamily:"Quicksand, sans-serif"}}>{t("vocab_title",baseLang)}</h2>
        <p style={{color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",fontSize:13}}>{allWords.length} {t("home_words",baseLang)}</p>
      </div>

      {/* ── Mode tabs ── */}
      <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:20,flexWrap:"wrap"}}>
        {[{id:"search",label:t("vocab_search_tab",baseLang)},{id:"browse",label:t("vocab_browse",baseLang)},{id:"review",label:t("vocab_review",baseLang)},...(lang==="ko"?[{id:"grammar",label:t("vocab_grammar_tab",baseLang)}]:[])].map(tab=>(
          <button key={tab.id} onClick={()=>{setMode(tab.id);setExpanded(null);setBrowsePath([]);}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.filter="brightness(1.18)";e.currentTarget.style.boxShadow=mode===tab.id?"0 0 32px rgba(123,94,232,0.7), 0 8px 24px rgba(85,53,181,0.6), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)":"0 0 20px rgba(123,94,232,0.3), 0 6px 18px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(0,0,0,0.08)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow="";}}
            style={tabStyle(mode===tab.id)}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:mode===tab.id?"linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.05) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SEARCH MODE                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="search"&&<div>
        {/* Search bar — sf-panel style frosted glass */}
        <div style={{position:"relative",borderRadius:20,overflow:"hidden",marginBottom:10,background:panelBg,border:panelBorder,boxShadow:panelShadow}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"11px 13px",background:dk?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.22)",borderRadius:20,position:"relative",zIndex:1}}>
            <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke={dk?"rgba(200,184,255,0.65)":"rgba(130,115,175,0.65)"} strokeWidth="2.3" strokeLinecap="round" style={{flexShrink:0}}><circle cx="6.5" cy="6.5" r="4.2"/><line x1="9.8" y1="9.8" x2="13.2" y2="13.2"/></svg>
            <input ref={searchRef} aria-label={t("vocab_search_ph",baseLang)} value={search} onChange={e=>{setSearch(e.target.value);setExpanded(null);}} placeholder={t("vocab_search_ph",baseLang)} style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:14,fontFamily:"'Nunito','DM Sans',system-ui,sans-serif",fontWeight:600,color:dk?"rgba(255,255,255,0.9)":"var(--gray-800)",caretColor:"#7B5EE8",minWidth:0}}/>
            {search&&<span onClick={()=>{setSearch("");searchRef.current?.focus();}} style={{cursor:"pointer",fontSize:14,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.75)",padding:"0 4px"}}>&#10005;</span>}
          </div>
        </div>

        {/* Grammar color toggle + Filter bar + count */}
        <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center"}}>
          {/* Aa grammar colorizer toggle — same as lesson engine */}
          <button onClick={()=>setGrammarHl(!grammarHl)} title={grammarHl?`${t("vocab_grammar_colors",baseLang)} ON`:`${t("vocab_grammar_colors",baseLang)} OFF`}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}
            style={{
              width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:14,fontWeight:900,fontFamily:"Quicksand, sans-serif",transition:"all .2s",
              background:grammarHl?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))"):(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
              boxShadow:grammarHl?(dk?"0 0 12px rgba(123,94,232,0.4),inset 0 1px 0 rgba(255,255,255,0.12)":"0 2px 10px rgba(123,94,232,0.2),inset 0 1px 0 rgba(255,255,255,0.9)"):"none",
              color:grammarHl?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"),
            }}>Aa</button>
          {/* Gear icon — opens grammar settings */}
          {grammarHl&&<button onClick={()=>setShowGrammarSettings(!showGrammarSettings)} title={t("vocab_color_settings",baseLang)}
            onMouseEnter={e=>{e.currentTarget.style.opacity="0.8";}}
            onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}
            style={{
              width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:15,transition:"all .2s",
              background:showGrammarSettings?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))"):(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
              color:showGrammarSettings?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"var(--gray-400)"),
              transform:showGrammarSettings?"rotate(60deg)":"rotate(0deg)",
            }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth={2}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth={2}/></svg>
          </button>}
          <button onClick={()=>setFilterOpen(p=>!p)}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.filter="brightness(1.18)";e.currentTarget.style.boxShadow="0 0 28px rgba(123,94,232,0.6), 0 8px 22px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow="";}}
            style={{
              padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",fontFamily:"Quicksand, sans-serif",fontSize:12,fontWeight:900,transition:"all .3s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",letterSpacing:0.3,
              background:filterOpen||hasActiveFilters?(dk?"linear-gradient(180deg,#E8DEFF 0%,#D4C8FF 4%,#C0AEF8 10%,#A488F0 22%,#8B6AE4 38%,#7B5EE8 52%,#6545C8 72%,#5840B8 88%,#4A2BA6 100%)":"linear-gradient(180deg,#DDD0FF 0%,#C8BAFF 6%,#B8A8FA 14%,#9B7AE8 30%,#7B5EE8 52%,#6545C8 76%,#5840B8 90%,#4A2BA6 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)"),
              color:filterOpen||hasActiveFilters?"white":(dk?"rgba(200,184,255,0.95)":"#6030C0"),
              textShadow:filterOpen||hasActiveFilters?"0 1px 3px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.15)":"none",
              boxShadow:filterOpen||hasActiveFilters?(dk?"0 0 24px rgba(123,94,232,0.6), 0 6px 20px rgba(85,53,181,0.55), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -4px 0 rgba(0,0,0,0.22)":"0 0 20px rgba(123,94,232,0.5), 0 6px 20px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.18)"):(dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"),
            }}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:filterOpen||hasActiveFilters?"linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>{t("vocab_filters",baseLang)} {hasActiveFilters?"*":""}</span>
          </button>
          {hasActiveFilters&&<button onClick={()=>{setFilterPOS(new Set());setFilterLevel(new Set());setFilterGender(new Set());setFilterTaughtOnly(false);}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.background=dk?"linear-gradient(180deg,#FFB0B0 0%,#FF8888 8%,#FF6B6B 20%,#F56565 38%,#E04848 55%,#D04444 72%,#B83333 88%,#A02828 100%)":"linear-gradient(180deg,#FFA8A8 0%,#FF8888 10%,#FF6B6B 22%,#F56565 40%,#E04848 58%,#D04444 75%,#B83333 90%,#A02828 100%)";e.currentTarget.style.color="white";e.currentTarget.style.boxShadow="0 0 24px rgba(245,101,101,0.55), 0 6px 20px rgba(220,60,60,0.45), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)";e.currentTarget.style.textShadow="0 1px 3px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.15)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.background=dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)";e.currentTarget.style.color=dk?"rgba(200,184,255,0.95)":"#6030C0";e.currentTarget.style.boxShadow=dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)";e.currentTarget.style.textShadow="none";}}
            style={{padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",fontSize:11,fontWeight:900,fontFamily:"Quicksand, sans-serif",transition:"all .3s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",letterSpacing:0.3,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)",color:dk?"rgba(200,184,255,0.95)":"#6030C0",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"}}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>{t("vocab_clear_all",baseLang)}</span>
          </button>}
          <span style={{flex:1}}/>
          <span style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>{filteredWords.length} {t("vocab_word",baseLang)}{filteredWords.length!==1?"s":""}</span>
        </div>

        {/* Grammar settings panel — copied from lesson engine, VerumLingua candy gloss */}
        {showGrammarSettings&&grammarHl&&isMobile&&<div onClick={()=>setShowGrammarSettings(false)} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",zIndex:9998,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}}/>}
        {showGrammarSettings&&grammarHl&&(()=>{
          if(!langPacks) return <div style={{marginTop:8,padding:"12px 14px",borderRadius:14,background:dk?"rgba(30,30,46,0.95)":"rgba(255,255,255,0.97)",border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(0,0,0,0.06)",boxShadow:dk?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 16px rgba(0,0,0,0.08)",fontSize:12,color:dk?"rgba(255,255,255,0.5)":"var(--gray-500)",marginBottom:14}}>No grammar packs available for this language yet.</div>;
          return <div style={{
            marginBottom:14,
            padding:isMobile?"22px 18px 30px":"18px 20px",
            borderRadius:isMobile?"24px 24px 0 0":20,
            background:dk
              ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
              :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
            border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
            boxShadow:dk
              ?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)"
              :"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",
            position:isMobile?"fixed":"relative",
            bottom:isMobile?0:undefined,left:isMobile?0:undefined,right:isMobile?0:undefined,
            zIndex:isMobile?9999:undefined,
            maxHeight:isMobile?"75vh":"auto",overflowY:"auto",overflow:"hidden",
            WebkitOverflowScrolling:"touch",
          }}>
            {/* Candy gloss arc */}
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
              background:dk
                ?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                :"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",
              pointerEvents:"none",borderRadius:"0 0 50% 50%",zIndex:1,
            }}/>
            {isMobile&&<div style={{width:40,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.5)",margin:"0 auto 16px",position:"relative",zIndex:2}}/>}
            <div style={{fontSize:13,fontWeight:800,color:dk?"rgba(200,190,240,0.7)":"rgba(80,60,140,0.7)",textTransform:"uppercase",letterSpacing:1.2,marginBottom:14,position:"relative",zIndex:2}}>
              {langPacks.label} {t("vocab_grammar_colors",baseLang)}
            </div>
            {/* Tab strip — candy pills */}
            <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:14,WebkitOverflowScrolling:"touch",position:"relative",zIndex:2}}>
              {langPacks.packs.map(pack=>{
                const isActive=pack.id===activePackId;
                const isP=!!pack.placeholder;
                return <button key={pack.id} onClick={()=>{if(!isP){selectPack(pack.id);setExpandedLegend(null);setGrammarEditMode(false);}}} disabled={isP} style={{
                  display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:16,
                  fontSize:12,fontWeight:800,cursor:isP?"default":"pointer",
                  transition:"all .2s",fontFamily:"inherit",border:"none",
                  opacity:isP?0.3:1,letterSpacing:0.3,position:"relative",overflow:"hidden",
                  background:isActive
                    ?(dk
                      ?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)"
                      :"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
                    :(dk
                      ?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)"
                      :"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
                  color:isActive?"white":(dk?"rgba(200,184,255,0.9)":"#7050D8"),
                  textShadow:isActive?"0 1px 2px rgba(0,0,0,0.2)":"none",
                  boxShadow:isActive
                    ?(dk
                      ?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)"
                      :"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)")
                    :(dk
                      ?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)"
                      :"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)"),
                }}>
                  <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",
                    background:isActive
                      ?"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)"
                      :"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
                    borderRadius:"0 0 50% 50%",pointerEvents:"none",
                  }}/>
                  <span style={{fontSize:14,fontWeight:900,lineHeight:1,position:"relative",zIndex:1}}>{pack.icon}</span>
                  <span style={{position:"relative",zIndex:1}}>{pack.label}</span>
                  {isP&&<span style={{fontSize:9,opacity:0.6,marginLeft:2,position:"relative",zIndex:1}}>soon</span>}
                </button>;
              })}
            </div>
            {/* Active pack legend — colored candy pills */}
            {activePack&&<div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:11,fontWeight:700,color:dk?"rgba(255,255,255,0.5)":"rgba(80,60,140,0.5)",marginBottom:10,lineHeight:1.4}}>{activePack.desc}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {activePack.legend.map(item=>{
                  const isOff=item.key&&langDisabled.includes(item.key);
                  const restSh=`0 4px 12px ${item.color}66, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`;
                  const glowSh=`0 0 28px ${item.color}88, 0 0 48px ${item.color}33, 0 8px 20px ${item.color}66, inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)`;
                  return <button key={item.label} onClick={()=>{
                    if(grammarEditMode&&item.key){toggleCatDisabled(item.key);}
                    else{setExpandedLegend(expandedLegend===item.label?null:item.label);}
                  }}
                  onMouseEnter={e=>{if(!isOff){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowSh;}}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=restSh;}}
                  style={{
                    display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:14,
                    fontSize:11,fontWeight:800,cursor:"pointer",border:"none",fontFamily:"inherit",
                    position:"relative",overflow:"hidden",transition:"all .2s",letterSpacing:0.3,
                    background:pillGradient(item.color),
                    color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.25)",
                    opacity:isOff?0.3:1,
                    boxShadow:restSh,
                  }}>
                    <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",
                      background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",
                      borderRadius:"0 0 50% 50%",pointerEvents:"none",
                    }}/>
                    <span style={{position:"relative",zIndex:1}}>{item.label}</span>
                    {grammarEditMode&&<span style={{position:"relative",zIndex:1,width:14,height:14,borderRadius:7,marginLeft:2,
                      border:"2px solid rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",
                      background:isOff?"transparent":"rgba(255,255,255,0.3)",fontSize:9,lineHeight:1,
                    }}>{isOff?"":"✓"}</span>}
                  </button>;
                })}
              </div>
              {/* Expanded explanation card */}
              {expandedLegend&&!grammarEditMode&&(()=>{
                const item=activePack.legend.find(l=>l.label===expandedLegend);
                if(!item||!item.desc) return null;
                return <div style={{
                  marginTop:10,padding:"10px 14px",borderRadius:13,
                  background:dk?"rgba(28,24,62,0.94)":"var(--card-bg)",
                  border:dk?"1.5px solid rgba(100,88,158,0.42)":"1.5px solid rgba(220,215,238,0.85)",
                  borderLeft:`3px solid ${item.color}`,
                  boxShadow:dk
                    ?"0 2px 8px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)"
                    :"0 2px 8px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
                  fontSize:12,fontWeight:600,lineHeight:1.5,
                  color:dk?"rgba(255,255,255,0.7)":"rgba(60,40,120,0.7)",
                }}>
                  <span style={{fontWeight:800,color:item.color}}>{item.label}</span>{" "}{item.desc}
                </div>;
              })()}
              {/* Edit toggle */}
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}>
                <button onClick={()=>{setGrammarEditMode(!grammarEditMode);setExpandedLegend(null);}} style={{
                  background:grammarEditMode?(dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)"):"transparent",
                  border:"none",cursor:"pointer",fontFamily:"inherit",
                  fontSize:11,fontWeight:700,letterSpacing:0.3,
                  color:grammarEditMode?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"rgba(80,60,140,0.4)"),
                  display:"flex",alignItems:"center",gap:4,padding:"4px 8px",borderRadius:8,
                  transition:"all .15s",
                }}>
                  <span style={{fontSize:13}}>{grammarEditMode?"✓":"✏️"}</span>
                  {grammarEditMode?t("vocab_done",baseLang):t("vocab_edit",baseLang)}
                </button>
              </div>
            </div>}
          </div>;
        })()}

        {/* Filter panel — frosted glass sf-panel style */}
        {filterOpen&&<div className="anim" style={{marginBottom:16,padding:16,borderRadius:20,position:"relative",overflow:"hidden",background:panelBg,border:panelBorder,boxShadow:panelShadow}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Part of Speech</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
              {posTypes.map(p=><button key={p} onClick={()=>toggleFilter(filterPOS,setFilterPOS,p)}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-1px)";e.currentTarget.style.filter="brightness(1.15)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={candyChip(filterPOS.has(p))}>{cap(p)}</button>)}
            </div>
            {activeGenders.length>0&&<>
              <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Gender</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
                {activeGenders.map(g=><button key={g} onClick={()=>toggleFilter(filterGender,setFilterGender,g)}
                  onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                  style={candyChip(filterGender.has(g))}>{genderLabels[g]||g}</button>)}
              </div>
            </>}
            <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Level</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
              {activeLevels.map(lv=><button key={lv} onClick={()=>toggleFilter(filterLevel,setFilterLevel,lv)}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-1px)";e.currentTarget.style.filter="brightness(1.15)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={candyChip(filterLevel.has(lv))}>{lv}</button>)}
            </div>
            <button onClick={()=>setFilterTaughtOnly(p=>!p)}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={candyChip(filterTaughtOnly)}>Taught only</button>
          </div>
        </div>}

        {/* Form-to-lemma resolution badge */}
        {search&&lang==="ko"&&KOREAN_FORM_INDEX&&KOREAN_FORM_INDEX[search.toLowerCase()]&&(()=>{
          const lemma=KOREAN_FORM_INDEX[search.toLowerCase()];
          const lemmaEntry=WORD_DB.ko&&WORD_DB.ko[lemma.toLowerCase()];
          return <div style={{borderRadius:16,padding:"10px 14px",marginBottom:10,background:dk?"linear-gradient(135deg,rgba(46,205,167,0.15),rgba(123,94,232,0.12))":"linear-gradient(135deg,rgba(46,205,167,0.12),rgba(123,94,232,0.08))",border:dk?"1px solid rgba(46,205,167,0.3)":"1px solid rgba(46,205,167,0.25)"}}>
            <div style={{fontSize:12,fontWeight:700,color:dk?"#5FE8C0":"#1AB090"}}>
              {search} is a form of <span style={{fontWeight:900,color:dk?"#fff":"#333"}}>{lemma}</span> {lemmaEntry?`(${lemmaEntry.en})`:""}
            </div>
          </div>;
        })()}
        {/* Word list */}
        {filteredWords.length===0&&<div style={{textAlign:"center",padding:40,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>
          <div style={{fontSize:14,fontWeight:600}}>No words found</div>
          <div style={{fontSize:12,marginTop:4}}>Try a different search or filter</div>
        </div>}
        <div style={{display:"grid",gap:0}}>
          {filteredWords.map((e,i)=><WordRow key={e.word+":"+i} entry={e}/>)}
        </div>
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BROWSE MODE (Alphabetical drill-down with candy pills) */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="browse"&&<div>
        {/* Level 1: Single letters — candy gradient pills */}
        {browsePath.length===0&&<div>
          <div style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginBottom:14,textAlign:"center"}}>{t("vocab_choose_letter",baseLang)}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
            {browseLetters.map(l=><button key={l} onClick={()=>setBrowsePath([l])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow="0 0 24px rgba(123,94,232,0.5), 0 8px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)";}}
              style={{
                display:"inline-flex",alignItems:"center",justifyContent:"center",
                width:isMobile?48:54,height:isMobile?48:54,borderRadius:16,border:"none",cursor:"pointer",
                fontFamily:"Quicksand, sans-serif",fontSize:isMobile?18:20,fontWeight:900,
                color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                boxShadow:dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
                position:"relative",overflow:"hidden",transition:"all .25s",
              }}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"44%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
                <span>{l}</span>
                {browseLetterCounts[l]&&<span style={{fontSize:8,fontWeight:700,opacity:0.7,lineHeight:1}}>{browseLetterCounts[l]}</span>}
              </span>
            </button>)}
          </div>
        </div>}

        {/* Level 2: Two-letter combos — same candy pills */}
        {browsePath.length===1&&<div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <button onClick={()=>setBrowsePath([])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{padding:"8px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontWeight:800,fontSize:12,position:"relative",overflow:"hidden",transition:"all .2s",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.8)":"#7050D8",boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)"}}>
              <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} Back</span>
            </button>
            <span style={{fontSize:22,fontWeight:900,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontFamily:"Quicksand, sans-serif"}}>{browsePath[0]}</span>
          </div>
          {browseTwoLetters.length===0?<div style={{textAlign:"center",padding:32,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13}}>No words starting with {browsePath[0]}</div>
          :<div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
            {browseTwoLetters.map(tl=><button key={tl} onClick={()=>setBrowsePath([browsePath[0],lang==="ko"?tl:tl.charAt(1)])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow="0 0 24px rgba(123,94,232,0.5), 0 8px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)";}}
              style={{
                display:"inline-flex",alignItems:"center",justifyContent:"center",
                padding:isMobile?"10px 16px":"10px 20px",borderRadius:14,border:"none",cursor:"pointer",
                fontFamily:"Quicksand, sans-serif",fontSize:isMobile?14:15,fontWeight:800,
                color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                boxShadow:dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
                position:"relative",overflow:"hidden",transition:"all .25s",minWidth:isMobile?52:60,
              }}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"44%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>{tl}</span>
            </button>)}
          </div>}
        </div>}

        {/* Level 3: Word list */}
        {browsePath.length===2&&<div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <button onClick={()=>setBrowsePath([browsePath[0]])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{padding:"8px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontWeight:800,fontSize:12,position:"relative",overflow:"hidden",transition:"all .2s",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.8)":"#7050D8",boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)"}}>
              <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} {browsePath[0]}</span>
            </button>
            <span style={{fontSize:22,fontWeight:900,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontFamily:"Quicksand, sans-serif"}}>{lang==="ko"?browsePath[1]:(browsePath[0]+browsePath[1])}</span>
            <span style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>{browseWords.length} word{browseWords.length!==1?"s":""}</span>
          </div>
          {browseWords.length===0?<div style={{textAlign:"center",padding:32,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13}}>No words found</div>
          :<div style={{display:"grid",gap:0}}>
            {browseWords.map((e,i)=><WordRow key={e.word+":"+i} entry={e}/>)}
          </div>}
        </div>}
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* REVIEW MODE                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="review"&&<div>
        {/* Level filter + shuffle */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
          <button onClick={()=>setReviewLevel(null)} style={chipStyle(!reviewLevel)}>All</button>
          {cefrLevels.map(lv=><button key={lv} onClick={()=>setReviewLevel(reviewLevel===lv?null:lv)} style={chipStyle(reviewLevel===lv)}>{lv}</button>)}
          <span style={{width:1,height:20,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.15)",margin:"0 4px"}}/>
          <button onClick={()=>setReviewShuffled(p=>!p)}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
            style={{
              padding:"6px 14px",borderRadius:12,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:700,transition:"all .25s",position:"relative",overflow:"hidden",
              background:reviewShuffled?(dk?"linear-gradient(180deg,#5FE8C0 0%,#2ECDA7 50%,#1AB090 100%)":"linear-gradient(180deg,#69F0CE 0%,#2ECDA7 50%,#1AB090 100%)"):(dk?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.65)"),
              color:reviewShuffled?"white":(dk?"rgba(200,184,255,0.7)":"#6040C0"),
              textShadow:reviewShuffled?"0 1px 2px rgba(0,0,0,0.2)":"none",
              boxShadow:reviewShuffled?"0 3px 10px rgba(46,205,167,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":(dk?"inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 4px rgba(0,0,0,0.15)":"inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 4px rgba(112,80,216,0.08)"),
            }}>Shuffle</button>
        </div>

        {reviewWords.length===0?
          <div style={{textAlign:"center",padding:40,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>
            <div style={{fontSize:14,fontWeight:600}}>No taught words yet</div>
            <div style={{fontSize:12,marginTop:4}}>{t("vocab_complete_lessons",baseLang)}</div>
          </div>
        :
          <div>
            {/* Progress */}
            <div style={{textAlign:"center",marginBottom:14}}>
              <span style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)"}}>{reviewIndex+1} / {reviewWords.length}</span>
              <div style={{height:3,borderRadius:2,background:dk?"rgba(255,255,255,0.06)":"rgba(123,94,232,0.08)",marginTop:6,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:2,background:pillGradient("#7B5EE8"),width:((reviewIndex+1)/reviewWords.length*100)+"%",transition:"width .3s"}}/>
              </div>
            </div>

            {/* Flashcard */}
            {(()=>{
              const card=reviewWords[reviewIndex];
              if(!card)return null;
              return <div onClick={()=>setReviewFlipped(p=>!p)} style={{
                cursor:"pointer",position:"relative",overflow:"hidden",borderRadius:22,padding:isMobile?"32px 24px":"40px 32px",
                minHeight:isMobile?220:260,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",
                background:panelBg,border:panelBorder,boxShadow:panelShadow,transition:"all .3s",
              }}>
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>

                {!reviewFlipped?
                  /* ── Front: just the word + speaker — NEON WHITE ── */
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:isMobile?28:36,fontWeight:900,color:"#fff",textShadow:neonSh,marginBottom:8,fontFamily:"Quicksand, sans-serif"}}>
                      {card.display||card.word}
                    </div>
                    <SpeakerButton text={card.word} lang={ttsLocale} size={20} showToast={showToast}/>
                    <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginTop:16,fontWeight:700,textShadow:subNeon}}>Tap to reveal</div>
                  </div>
                :
                  /* ── Back: translation NEON WHITE, details strong readable ── */
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:6,letterSpacing:1,textTransform:"uppercase",textShadow:neonSh}}>{card.display||card.word}</div>
                    <div style={{fontSize:isMobile?24:30,fontWeight:900,color:"#fff",textShadow:neonSh,marginBottom:12,fontFamily:"Quicksand, sans-serif"}}>{card.en}</div>
                    <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",marginBottom:10}}>
                      {card.level&&<span style={{display:"inline-block",padding:"3px 10px",borderRadius:8,fontSize:10,fontWeight:800,color:"white",background:"rgba(255,255,255,0.25)",textShadow:subNeon,letterSpacing:0.3,backdropFilter:"blur(4px)"}}>{(card.level||"A1").substring(0,2)}</span>}
                      <span style={{display:"inline-block",padding:"3px 10px",borderRadius:8,fontSize:10,fontWeight:700,color:"white",background:"rgba(255,255,255,0.2)",textShadow:subNeon,letterSpacing:0.5,textTransform:"uppercase",backdropFilter:"blur(4px)"}}>{posLabel(card.pos)}</span>
                    </div>
                    {card.example&&<div style={{fontSize:13,fontWeight:700,color:"rgba(30,20,60,0.85)",fontStyle:"italic",maxWidth:400,lineHeight:1.5,background:"rgba(255,255,255,0.35)",borderRadius:12,padding:"8px 12px",backdropFilter:"blur(4px)"}}>{card.example}</div>}
                    {card.exampleEn&&<div style={{fontSize:12,fontWeight:600,color:"rgba(30,20,60,0.7)",marginTop:4,fontStyle:"italic"}}>{card.exampleEn}</div>}
                  </div>
                }
              </div>;
            })()}

            {/* Navigation buttons */}
            <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:16}}>
              <button onClick={(e)=>{e.stopPropagation();setReviewFlipped(false);setReviewIndex(p=>Math.max(0,p-1));}}
                disabled={reviewIndex===0}
                onMouseEnter={e=>{if(reviewIndex>0){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={{
                  padding:"10px 24px",borderRadius:14,border:"none",cursor:reviewIndex===0?"default":"pointer",fontFamily:"inherit",fontSize:13,fontWeight:800,
                  opacity:reviewIndex===0?0.3:1,position:"relative",overflow:"hidden",transition:"all .25s",
                  background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",
                  color:dk?"rgba(200,184,255,0.9)":"#7050D8",
                  boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)",
                }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} Prev</span>
              </button>
              <button onClick={(e)=>{e.stopPropagation();setReviewFlipped(false);setReviewIndex(p=>Math.min(reviewWords.length-1,p+1));}}
                disabled={reviewIndex>=reviewWords.length-1}
                onMouseEnter={e=>{if(reviewIndex<reviewWords.length-1){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={{
                  padding:"10px 24px",borderRadius:14,border:"none",cursor:reviewIndex>=reviewWords.length-1?"default":"pointer",fontFamily:"inherit",fontSize:13,fontWeight:800,
                  opacity:reviewIndex>=reviewWords.length-1?0.3:1,position:"relative",overflow:"hidden",transition:"all .25s",
                  background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                  color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                  boxShadow:"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
                }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>Next {chevronR}</span>
              </button>
            </div>
          </div>
        }
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* GRAMMAR MODE (Korean grammar patterns by CEFR level)   */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="grammar"&&lang==="ko"&&(()=>{
        const ref=KOREAN_GRAMMAR_REFERENCE||[];
        const levels=["A1","A2","B1","B2"];
        const cats=["All",...GRAMMAR_CATEGORIES];
        const polLevels=[{id:"all",label:t("misc_all",baseLang)},{id:"formal",label:t("misc_formal",baseLang)},{id:"polite",label:t("misc_polite",baseLang)},{id:"casual",label:t("misc_casual",baseLang)},{id:"written",label:t("misc_written",baseLang)}];
        const q=gramSearch.toLowerCase().trim();
        const filtered=ref.filter(p=>{
          if(!(p.level||"A1").startsWith(gramLevel))return false;
          if(gramCategory!=="All"&&p.category!==gramCategory)return false;
          if(gramPoliteness!=="all"&&p.politeness!==gramPoliteness&&p.politeness!=="all")return false;
          if(q){
            const hay=(p.title+" "+p.text+" "+(p.en||"")+" "+(p.example||"")).toLowerCase();
            if(!hay.includes(q))return false;
          }
          return true;
        });
        const sourceLabel={tip:"Grammar Tip",verb_table:"Conjugation Table",grammar:"Pattern"};
        // Strip leading emojis from tip card titles and safely convert objects to strings
        const cleanTitle=(t)=>{if(!t)return"";const s=typeof t==="object"?(t.title||t.text||JSON.stringify(t)):String(t);return s.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]+\s*/u,"").trim();};
        const safeText=(t)=>{if(!t)return null;if(typeof t==="object")return t.title?String(t.title)+(t.text?"\n"+String(t.text):""):JSON.stringify(t);return String(t);};
        return <div>
          {/* Search bar */}
          <div style={{marginBottom:12,position:"relative"}}>
            <input aria-label="Search grammar patterns" value={gramSearch} onChange={e=>{setGramSearch(e.target.value);setGramExpanded(null);}} placeholder="Search grammar patterns..." style={{
              width:"100%",boxSizing:"border-box",padding:"10px 14px 10px 36px",borderRadius:16,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
              background:dk?"rgba(40,30,70,0.6)":"rgba(250,248,255,0.9)",color:dk?"white":"var(--gray-800)",fontSize:13,fontWeight:600,fontFamily:"inherit",outline:"none",
            }}/>
            <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:14,opacity:0.4}}>&#x1F50D;</span>
          </div>
          {/* Level tabs */}
          <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"}}>
            {levels.map(lv=><button key={lv} onClick={()=>{setGramLevel(lv);setGramExpanded(null);}} style={chipStyle(gramLevel===lv)}>{lv}</button>)}
          </div>
          {/* Category filter — scrollable row */}
          <div style={{display:"flex",gap:4,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
            {cats.map(c=><button key={c} onClick={()=>{setGramCategory(c);setGramExpanded(null);}} style={{
              padding:"5px 10px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:800,whiteSpace:"nowrap",flexShrink:0,
              background:gramCategory===c?(dk?"rgba(123,94,232,0.5)":"rgba(123,94,232,0.15)"):(dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)"),
              color:gramCategory===c?(dk?"white":"#7B5EE8"):(dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.4)"),
              transition:"all .2s",
            }}>{c}</button>)}
          </div>
          {/* Politeness filter */}
          <div style={{display:"flex",gap:4,marginBottom:14,justifyContent:"center"}}>
            {polLevels.map(p=><button key={p.id} onClick={()=>{setGramPoliteness(p.id);setGramExpanded(null);}} style={{
              padding:"4px 10px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:700,
              background:gramPoliteness===p.id?(dk?"rgba(245,166,35,0.4)":"rgba(245,166,35,0.15)"):(dk?"rgba(255,255,255,0.04)":"rgba(240,234,255,0.4)"),
              color:gramPoliteness===p.id?(dk?"#FFD600":"#C6A700"):(dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)"),
              transition:"all .2s",
            }}>{p.label}</button>)}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginBottom:10,textAlign:"center"}}>{filtered.length} grammar item{filtered.length!==1?"s":""}</div>
          {filtered.length===0&&<div style={{textAlign:"center",padding:30,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13,fontWeight:600}}>No grammar items match your filters.</div>}
          {filtered.map((item,i)=>{
            const isOpen=gramExpanded===i;
            return <div key={i} style={{marginBottom:8}}>
              <div onClick={()=>setGramExpanded(isOpen?null:i)} style={{borderRadius:18,overflow:"hidden",cursor:"pointer",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow,transition:"all .25s",position:"relative"}}>
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                <div style={{display:"flex",alignItems:"center",gap:8,padding:"13px 18px",position:"relative",zIndex:1}}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:"Quicksand, sans-serif",fontWeight:800,fontSize:15,color:dk?"rgba(255,255,255,0.92)":"var(--gray-800)",lineHeight:1.3}}>{cleanTitle(item.title)}</div>
                    <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginTop:2}}>{sourceLabel[item.source]||item.source} {item.category!=="General"?"· "+item.category:""}</div>
                  </div>
                  <span style={{fontSize:10,fontWeight:800,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",flexShrink:0}}>U{item.unitN}</span>
                </div>
              </div>
              {isOpen&&<div style={{margin:"4px 8px 0",borderRadius:16,padding:"14px 16px",background:dk?"rgba(30,28,50,0.7)":"rgba(255,255,255,0.85)",border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(200,190,240,0.3)"}}>
                {item.text&&<div style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.7)",marginBottom:8,lineHeight:1.6,whiteSpace:"pre-line"}}>{safeText(item.text)}</div>}
                {item.example&&typeof item.example==="string"&&<div style={{borderRadius:14,padding:"10px 14px",marginBottom:6,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1}}>{item.example}</span>
                      <SpeakerButton text={item.example} lang={ttsLocale} size={11} showToast={showToast}/>
                    </div>
                    {item.exampleEn&&typeof item.exampleEn==="string"&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:3}}>{item.exampleEn}</div>}
                  </div>
                </div>}
                {item.groups&&item.groups.length>0&&<div style={{marginBottom:6}}>
                  {item.groups.map((g,gi)=><div key={gi} style={{marginBottom:8}}>
                    <div style={{fontSize:11,fontWeight:800,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",marginBottom:4}}>{g.label||g.header||""}</div>
                    {(g.rows||[]).map((r,ri)=>{
                      const pronoun=r.pronoun||r[0]||"";const form=r.form||r[1]||"";const en=r.en||r[2]||"";
                      return <div key={ri} style={{display:"flex",gap:8,padding:"3px 0",fontSize:12,fontWeight:600}}>
                        <span style={{width:60,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",flexShrink:0}}>{pronoun}</span>
                        <span style={{color:dk?"rgba(255,255,255,0.9)":"var(--gray-800)",flex:1,fontWeight:700}}>{form}</span>
                        {en&&<span style={{color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",flexShrink:0}}>{en}</span>}
                      </div>;
                    })}
                    {(g.forms||[]).map((f,fi)=><div key={fi} style={{fontSize:12,fontWeight:600,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",padding:"2px 0"}}>{f}</div>)}
                  </div>)}
                </div>}
                {item.deepDive&&<div style={{fontSize:11,fontWeight:600,color:dk?"rgba(200,184,255,0.55)":"rgba(100,80,160,0.5)",marginTop:6,lineHeight:1.6,whiteSpace:"pre-line"}}>{safeText(item.deepDive)}</div>}
                <div style={{fontSize:9,fontWeight:700,color:dk?"rgba(200,184,255,0.3)":"rgba(100,80,160,0.3)",marginTop:6}}>Unit {item.unitN} / {item.lessonId}</div>
              </div>}
            </div>;
          })}
        </div>;
      })()}
    </div>
  );
}

export default VocabularyPage;
