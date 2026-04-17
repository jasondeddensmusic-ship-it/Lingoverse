import React, { useState, useMemo } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { POS_COLORS, GENDER_COLORS, WORD_DB, pillGradient } from '../data/dictionary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import { GERMAN_CEFR } from '../data/cefr-reference/german.js';
import { KOREAN_CEFR } from '../data/cefr-reference/korean.js';
import { DUTCH_CEFR } from '../data/cefr-reference/dutch.js';
import { FRENCH_CEFR } from '../data/cefr-reference/french.js';
import { SPANISH_CEFR } from '../data/cefr-reference/spanish.js';
import { ITALIAN_CEFR } from '../data/cefr-reference/italian.js';
import { JAPANESE_CEFR } from '../data/cefr-reference/japanese.js';

const CEFR_REFS = { de: GERMAN_CEFR, ko: KOREAN_CEFR, nl: DUTCH_CEFR, fr: FRENCH_CEFR, es: SPANISH_CEFR, it: ITALIAN_CEFR, ja: JAPANESE_CEFR };

function CefrReferencePage({lang, baseLang="en", user}){
  const dk=document.documentElement.classList.contains("dark");
  const ref = CEFR_REFS[lang];
  const [tab,setTab]=useState("vocab");
  const [level,setLevel]=useState("ALL");
  const [search,setSearch]=useState("");
  const [expandedGrammar,setExpandedGrammar]=useState(null);
  const [filterMode,setFilterMode]=useState("all"); // "all" | "learning" | "learned"
  const [posFilter,setPosFilter]=useState("ALL"); // "ALL" | "noun" | "verb" | "adj" | etc.

  // Build lowercase Set from user.lw for O(1) lookups
  const learnedSet = useMemo(()=>{
    if(!user?.lw) return new Set();
    const s=new Set();
    for(const w of user.lw) s.add(w.toLowerCase());
    return s;
  },[user?.lw]);

  // Check if a CEFR word is learned — normalize: strip "sich " prefix, trailing hyphens, parens
  const isLearned = (word)=>{
    if(!word || learnedSet.size===0) return false;
    const w = word.toLowerCase().replace(/^sich\s+/,"").replace(/[-()]/g,"").trim();
    if(learnedSet.has(w)) return true;
    // Also check the raw word
    if(learnedSet.has(word.toLowerCase())) return true;
    return false;
  };

  // Per-level progress stats
  const progressStats = useMemo(()=>{
    if(!ref?.vocabulary) return null;
    const stats={total:0,learned:0,levels:{}};
    for(const lv of ["A1","A2","B1","B2"]){
      stats.levels[lv]={total:0,learned:0};
    }
    for(const w of ref.vocabulary){
      stats.total++;
      const lvObj=stats.levels[w.l];
      if(lvObj) lvObj.total++;
      if(isLearned(w.w)){
        stats.learned++;
        if(lvObj) lvObj.learned++;
      }
    }
    return stats;
  },[ref?.vocabulary,learnedSet]);

  if(!ref) return(
    <div className="anim" style={{textAlign:"center",padding:"60px 20px"}}>
      <div style={{fontSize:48,marginBottom:16}}>{"📚"}</div>
      <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"var(--gray-800)",marginBottom:8,fontFamily:"'Quicksand',sans-serif"}}>CEFR Reference</h2>
      <p style={{color:"var(--gray-500)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("cefr_no_data",baseLang)}</p>
      <p style={{color:"var(--gray-400)",fontSize:13,fontFamily:"'Nunito',sans-serif",marginTop:8}}>Available: {Object.keys(CEFR_REFS).map(k=>({de:"German",ko:"Korean",nl:"Dutch",fr:"French",es:"Spanish"}[k]||k)).join(", ")}</p>
    </div>
  );

  const levels=["ALL","A1","A2","B1","B2"];
  const tabs=[
    {id:"vocab",label:t("cefr_vocabulary",baseLang),icon:"📖",count:ref.vocabulary?.length||0},
    {id:"grammar",label:t("cefr_grammar_constructs",baseLang),icon:"📐",count:Object.values(ref.grammar||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"idioms",label:t("cefr_idioms_phrases",baseLang),icon:"💬",count:Object.values(ref.idioms||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"particles",label:t("cefr_particles",baseLang),icon:"🔗"},
    {id:"functions",label:t("cefr_functions",baseLang),icon:"🗣️"},
  ];

  // POS categories for filter
  const posCategories = useMemo(()=>{
    if(!ref.vocabulary) return [];
    const counts={};
    for(const w of ref.vocabulary){
      const p=w.p||"other";
      counts[p]=(counts[p]||0)+1;
    }
    // Group into main categories
    const groups=[
      {id:"noun",label:t("pos_nouns",baseLang),match:["noun"],count:counts.noun||0},
      {id:"verb",label:t("pos_verbs",baseLang),match:["verb","modal","aux"],count:(counts.verb||0)+(counts.modal||0)+(counts.aux||0)},
      {id:"adj",label:t("pos_adjectives",baseLang),match:["adj","adjective"],count:(counts.adj||0)+(counts.adjective||0)},
      {id:"adv",label:t("pos_adverbs",baseLang),match:["adv","adverb"],count:(counts.adv||0)+(counts.adverb||0)},
      {id:"prep",label:t("pos_prepositions",baseLang),match:["prep","preposition"],count:(counts.prep||0)+(counts.preposition||0)},
      {id:"other",label:t("pos_other",baseLang),match:["conj","conjunction","pron","pronoun","part","particle","intj","interjection","num","number","det","phrase","prefix","abbrev"],count:Object.entries(counts).filter(([k])=>!["noun","verb","modal","aux","adj","adjective","adv","adverb","prep","preposition"].includes(k)).reduce((s,[,v])=>s+v,0)},
    ];
    return groups.filter(g=>g.count>0);
  },[ref.vocabulary]);

  // Filter + deduplicate vocabulary
  const filteredVocab = useMemo(()=>{
    if(!ref.vocabulary) return [];
    let items = ref.vocabulary;
    if(level!=="ALL") items = items.filter(w=>w.l===level);
    if(posFilter!=="ALL"){
      const cat=posCategories.find(c=>c.id===posFilter);
      if(cat) items=items.filter(w=>cat.match.includes(w.p));
    }
    if(filterMode==="learning") items = items.filter(w=>!isLearned(w.w));
    if(filterMode==="learned") items = items.filter(w=>isLearned(w.w));
    if(search.trim()){
      const q=search.toLowerCase().trim();
      items = items.filter(w=>(w.w||"").toLowerCase().includes(q)||(w.f||"").toLowerCase().includes(q)||(w.tr||"").toLowerCase().includes(q));
    }
    // Deduplicate: group by word, keep lowest level, collect all examples
    const lvOrder={A1:0,A2:1,B1:2,B2:3};
    const map=new Map();
    for(const w of items){
      const key=w.w.toLowerCase();
      if(!map.has(key)){
        map.set(key,{...w,examples:w.ex?[{ex:w.ex,tr:w.tr,trAr:w.trAr,l:w.l}]:[]});
      } else {
        const existing=map.get(key);
        if(w.ex) existing.examples.push({ex:w.ex,tr:w.tr,trAr:w.trAr,l:w.l});
        // Keep lowest level
        if((lvOrder[w.l]??9)<(lvOrder[existing.l]??9)){
          existing.l=w.l;
          // Also take article/gender if the existing doesn't have it
          if(!existing.a&&w.a) existing.a=w.a;
          if(!existing.g&&w.g) existing.g=w.g;
        }
      }
    }
    return [...map.values()].sort((a,b)=>(a.w||"").localeCompare(b.w||"","de"));
  },[ref.vocabulary,level,search,filterMode,learnedSet,posFilter,posCategories]);

  // Grammar grouped by level
  const grammarByLevel = useMemo(()=>{
    if(!ref.grammar) return {};
    const out={A1:[],A2:[],B1:[],B2:[]};
    for(const lv of ["A1","A2","B1","B2"]){
      if(ref.grammar[lv]) out[lv]=ref.grammar[lv];
    }
    return out;
  },[ref.grammar]);

  const bandColor=(lv)=>({A1:"#9B7AE8",A2:"#8B6AE4",B1:"#7B5EE8",B2:"#6545C8"}[lv]||"#888");

  const posLabel=(p)=>({noun:"Noun",verb:"Verb",adj:"Adjective",adv:"Adverb",prep:"Preposition",conj:"Conjunction",pron:"Pronoun",part:"Particle",interj:"Interjection",phrase:"Phrase",prefix:"Prefix",modal:"Modal verb",aux:"Auxiliary",num:"Number",det:"Determiner",abbrev:"Abbreviation"}[p]||p||"");
  const genderLabel=(g)=>({m:"masc",f:"fem",n:"neut",pl:"plural"}[g]||g||"");
  const genderColor=(g)=>({m:"#0091FF",f:"#D50000",n:"#FF8F00",pl:"#00BFA5"}[g]||"#888");

  // Pill component
  const LevelPill=({lv,small})=>(
    <span style={{display:"inline-block",padding:small?"1px 6px":"2px 8px",borderRadius:10,fontSize:small?10:11,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"#fff",background:pillGradient(bandColor(lv)),textShadow:"0 1px 2px rgba(0,0,0,0.25)",letterSpacing:0.5,boxShadow:`0 2px 6px ${bandColor(lv)}44, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)`}}>{lv}</span>
  );

  // Compound bubble row style
  const rowStyle={
    background:dk
      ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
      :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
    boxShadow:dk
      ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
      :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
    borderRadius:22,padding:"10px 14px",position:"relative",overflow:"hidden",marginBottom:6,
  };

  // Gloss arc for rows
  const GlossArc=()=>(
    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
  );

  // Frosted panel style
  const panelStyle={
    background:dk
      ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
      :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
    border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
    boxShadow:dk
      ?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)"
      :"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",
    borderRadius:20,padding:"16px",position:"relative",overflow:"hidden",marginBottom:16,
  };

  return(
    <div className="anim" style={{maxWidth:900,margin:"0 auto",padding:"0 12px"}}>
      {/* Header */}
      <div style={{textAlign:"center",padding:"16px 0 12px"}}>
        <h1 className="hd" style={{fontSize:24,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:4}}>
          {ref.meta?.languageName||lang.toUpperCase()} {t("cefr_title",baseLang)}
        </h1>
        <p style={{fontSize:12,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif"}}>
          {t("cefr_official_lists",baseLang)}: A1-B2
        </p>
      </div>

      {/* Progress Overview — clean inline bars, no nested bubbles */}
      {progressStats && progressStats.total > 0 && (
        <div style={{marginBottom:16,padding:"0 2px"}}>
          {/* Big number line */}
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:6,marginBottom:12}}>
            <span style={{fontSize:32,fontWeight:900,fontFamily:"'Quicksand',sans-serif",color:dk?"#E8E0FF":"#5840B8",lineHeight:1}}>{progressStats.learned}</span>
            <span style={{fontSize:14,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)"}}>/ {progressStats.total} {t("cefr_words_learned",baseLang)}</span>
          </div>
          {/* Compact level bars */}
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {["A1","A2","B1","B2"].map(lv=>{
              const s=progressStats.levels[lv];
              if(!s||s.total===0) return null;
              const pct=Math.round((s.learned/s.total)*100);
              const c=bandColor(lv);
              return(
                <div key={lv} style={{display:"flex",alignItems:"center",gap:8}}>
                  <LevelPill lv={lv} small/>
                  <div style={{flex:1,height:6,borderRadius:3,background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.1)",overflow:"hidden"}}>
                    <div style={{height:"100%",borderRadius:3,width:`${pct}%`,background:`linear-gradient(90deg, ${c}, ${c}CC)`,boxShadow:`0 0 6px ${c}44`,transition:"width .5s ease"}}/>
                  </div>
                  <span style={{fontSize:11,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.4)",minWidth:42,textAlign:"right"}}>{s.learned}/{s.total}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Section tabs */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginBottom:16}}>
        {tabs.map(tb=>{
          const active=tab===tb.id;
          return(
            <button key={tb.id} onClick={()=>setTab(tb.id)} style={{
              padding:"8px 14px",borderRadius:16,border:"none",cursor:"pointer",
              fontFamily:"'Quicksand',sans-serif",fontWeight:900,fontSize:13,letterSpacing:0.3,
              position:"relative",overflow:"hidden",
              transition:"all .25s cubic-bezier(.4,0,.2,1)",
              background:active
                ?(dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
                :(dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
              color:active?"white":(dk?"rgba(200,184,255,0.9)":"#7050D8"),
              textShadow:active?"0 1px 2px rgba(0,0,0,0.2)":"none",
              boxShadow:active
                ?(dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)")
                :(dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)"),
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:active?"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>{tb.icon} {tb.label}{tb.count!=null?` (${tb.count})`:""}</span>
            </button>
          );
        })}
      </div>

      {/* Level filter — shared across all tabs */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",marginBottom:12}}>
        {levels.map(lv=>{
          const active=level===lv;
          const c=lv==="ALL"?"#888":bandColor(lv);
          return(
            <button key={lv} onClick={()=>setLevel(lv)} style={{
              padding:"5px 12px",borderRadius:14,border:"none",cursor:"pointer",
              fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:12,
              background:active?pillGradient(c):(dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"),
              color:active?"#fff":(dk?"rgba(255,255,255,0.6)":"var(--gray-600)"),
              textShadow:active?"0 1px 2px rgba(0,0,0,0.25)":"none",
              boxShadow:active?`0 3px 10px ${c}55, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)`:"none",
              transition:"all .2s ease",
            }}>
              {lv}
            </button>
          );
        })}
      </div>

      {/* VOCABULARY TAB */}
      {tab==="vocab"&&(
        <div>
          {/* Filter toggle pills */}
          {learnedSet.size > 0 && (
            <div style={{display:"flex",gap:6,marginBottom:12}}>
              {[{id:"all",label:t("cefr_all_words",baseLang)},{id:"learning",label:t("cefr_still_learning",baseLang)},{id:"learned",label:t("cefr_learned",baseLang)}].map(fm=>{
                const active=filterMode===fm.id;
                return(
                  <button key={fm.id} onClick={()=>setFilterMode(fm.id)} style={{
                    padding:"5px 14px",borderRadius:14,border:"none",cursor:"pointer",
                    fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:12,
                    background:active
                      ?(dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
                      :(dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"),
                    color:active?"#fff":(dk?"rgba(200,184,255,0.7)":"#7050D8"),
                    textShadow:active?"0 1px 2px rgba(0,0,0,0.2)":"none",
                    boxShadow:active
                      ?(dk?"0 0 12px rgba(123,94,232,0.3), 0 3px 10px rgba(85,53,181,0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.15)":"0 3px 12px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)")
                      :"none",
                    transition:"all .2s ease",
                  }}>{fm.label}</button>
                );
              })}
            </div>
          )}

          {/* POS filter pills */}
          <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:10}}>
            {[{id:"ALL",label:"All"},...posCategories].map(cat=>{
              const active=posFilter===cat.id;
              return(
                <button key={cat.id} onClick={()=>setPosFilter(cat.id)} style={{
                  padding:"4px 10px",borderRadius:12,border:"none",cursor:"pointer",
                  fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:11,
                  background:active
                    ?(dk?"rgba(123,94,232,0.5)":"rgba(123,94,232,0.15)")
                    :(dk?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)"),
                  color:active?(dk?"#E8E0FF":"#5840B8"):(dk?"rgba(200,184,255,0.5)":"var(--gray-400)"),
                  border:active?(dk?"1px solid rgba(123,94,232,0.4)":"1px solid rgba(123,94,232,0.25)"):"1px solid transparent",
                  transition:"all .15s ease",
                }}>{cat.label}{cat.count!=null?` (${cat.count})`:""}</button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
            <input
              type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder={t("cefr_search_ph",baseLang)}
              style={{
                flex:1,padding:"7px 12px",borderRadius:12,
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                background:dk?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.8)",
                color:"var(--gray-800)",fontSize:13,fontFamily:"'Nunito',sans-serif",
                outline:"none",
              }}
            />
          </div>

          {/* Stats */}
          <div style={{fontSize:12,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif",marginBottom:10}}>
            {t("cefr_showing",baseLang)} {filteredVocab.length} {t("cefr_of",baseLang)} {ref.vocabulary?.length||0} {t("cefr_words",baseLang)}
            {learnedSet.size > 0 && progressStats && <span> ({progressStats.learned} learned)</span>}
          </div>

          {/* Word list — virtualized-ish: show first 200, load more on scroll */}
          <VocabTable words={filteredVocab} dk={dk} lang={lang} baseLang={baseLang} rowStyle={rowStyle} LevelPill={LevelPill} posLabel={posLabel} genderLabel={genderLabel} genderColor={genderColor} GlossArc={GlossArc} isLearned={isLearned} hasProgress={learnedSet.size>0}/>
        </div>
      )}

      {/* GRAMMAR TAB */}
      {tab==="grammar"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=grammarByLevel[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Grammar Constructs ({items.length})</span>
                </div>
                {items.map((g,gi)=>(
                  <div key={gi} style={{...rowStyle,cursor:"pointer"}} onClick={()=>setExpandedGrammar(expandedGrammar===`${lv}-${gi}`?null:`${lv}-${gi}`)}>
                    <GlossArc/>
                    <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"flex-start",gap:10}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{g.name||g.construct||"Unnamed"}</div>
                        {g.desc&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontFamily:"'Nunito',sans-serif",marginTop:2}}>{g.desc}</div>}
                        {expandedGrammar===`${lv}-${gi}`&&(
                          <div style={{marginTop:8,fontSize:12,fontFamily:"'Nunito',sans-serif",color:"var(--gray-600)"}}>
                            {g.example&&<div style={{marginBottom:4}}><strong>Example:</strong> {g.example}</div>}
                            {g.exampleEn&&<div style={{color:"#2ECDA7",marginBottom:4}}>{g.exampleEn}</div>}
                            {g.note&&<div style={{fontStyle:"italic",color:"var(--gray-500)"}}>{g.note}</div>}
                          </div>
                        )}
                      </div>
                      <span style={{fontSize:11,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif"}}>{expandedGrammar===`${lv}-${gi}`?"▲":"▼"}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* IDIOMS TAB */}
      {tab==="idioms"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=ref.idioms?.[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Idioms & Phrases ({items.length})</span>
                </div>
                {items.map((itm,i)=>(
                  <div key={i} style={rowStyle}>
                    <GlossArc/>
                    <div style={{position:"relative",zIndex:1}}>
                      <div style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{itm.phrase||itm}</div>
                      {itm.meaning&&<div style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",marginTop:2}}>{itm.meaning}</div>}
                      {itm.lit&&<div style={{fontSize:11,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif",fontStyle:"italic",marginTop:1}}>Lit: {itm.lit}</div>}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* PARTICLES & CONNECTORS TAB */}
      {tab==="particles"&&(
        <div>
          {/* Korean-style particles (by level) */}
          {ref.particles&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Particles</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const items=ref.particles?.[lv];
                if(!items||!items.length) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {items.map((pt,i)=>(
                        <div key={i} style={rowStyle}>
                          <GlossArc/>
                          <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
                            <span style={{fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",fontSize:15,minWidth:60}}>{pt.w}</span>
                            <span style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",textTransform:"uppercase",letterSpacing:0.5,minWidth:60}}>{pt.cat}</span>
                            <span style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",fontWeight:600}}>{pt.meaning}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Modal particles (German-style) */}
          {ref.modalParticles&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Modal Particles</h3>
              {["A2","B1","B2"].map(lv=>{
                const items=ref.modalParticles?.[lv];
                if(!items||!items.length) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {items.map((p2,i)=>(
                        <div key={i} style={rowStyle}>
                          <GlossArc/>
                          <div style={{position:"relative",zIndex:1}}>
                            <span style={{fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",fontSize:14}}>{p2.word}</span>
                            {p2.meaning&&<span style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",marginLeft:8}}>{p2.meaning}</span>}
                            {p2.example&&<div style={{fontSize:11,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif",fontStyle:"italic",marginTop:2}}>{p2.example}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Prepositions */}
          {ref.prepositions&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Prepositions by Case</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const obj=ref.prepositions?.[lv];
                if(!obj) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {Object.entries(obj).map(([caseType,preps])=>(
                        <div key={caseType} style={{marginBottom:6}}>
                          <span style={{fontSize:12,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:dk?"rgba(200,184,255,0.7)":"rgba(100,80,180,0.65)",textTransform:"uppercase",letterSpacing:0.6}}>{caseType}:</span>
                          <span style={{fontSize:13,fontFamily:"'Nunito',sans-serif",color:"var(--gray-700)",marginLeft:6}}>{preps.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Conjunctions */}
          {ref.conjunctions&&(
            <div style={panelStyle}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Conjunctions</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const obj=ref.conjunctions?.[lv];
                if(!obj) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {Object.entries(obj).map(([conj,items])=>(
                        <div key={conj} style={{marginBottom:6}}>
                          <span style={{fontSize:12,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:dk?"rgba(200,184,255,0.7)":"rgba(100,80,180,0.65)",textTransform:"uppercase",letterSpacing:0.6}}>{conj}:</span>
                          <span style={{fontSize:13,fontFamily:"'Nunito',sans-serif",color:"var(--gray-700)",marginLeft:6}}>{items.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* COMMUNICATIVE FUNCTIONS TAB */}
      {tab==="functions"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=ref.communicativeFunctions?.[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Functions ({items.length})</span>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {items.map((fn,i)=>(
                    <span key={i} style={{
                      display:"inline-block",padding:"6px 12px",borderRadius:14,
                      fontSize:12,fontWeight:700,fontFamily:"'Nunito',sans-serif",
                      background:dk?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.85)",
                      border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.35)",
                      color:dk?"rgba(255,255,255,0.8)":"var(--gray-700)",
                    }}>{fn}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Sub-component: vocabulary table with pagination
function VocabTable({words,dk,lang,baseLang="en",rowStyle,LevelPill,posLabel,genderLabel,genderColor,GlossArc,isLearned,hasProgress}){
  const dict = WORD_DB[lang] || {};
  // Look up English meaning from WORD_DB
  const getMeaning=(word)=>{
    const key = (word||"").toLowerCase().replace(/^sich\s+/,"");
    const entry = dict[key];
    return entry?.en || null;
  };
  const [showCount,setShowCount]=useState(100);
  const [expanded,setExpanded]=useState(null);
  const visible=words.slice(0,showCount);
  const posTag=(p)=>({noun:"N",verb:"V",adj:"ADJ",adv:"ADV",prep:"PREP",conj:"CONJ",pron:"PRON",part:"PART",intj:"INTJ",phrase:"PHR",prefix:"PFX",modal:"MOD",aux:"AUX",num:"NUM",det:"DET",abbrev:"ABBR",number:"NUM",particle:"PART",adjective:"ADJ",adverb:"ADV",preposition:"PREP",conjunction:"CONJ",pronoun:"PRON",interjection:"INTJ"}[p]||"");

  // Word color: ONLY nouns get gender color, everything else is default text
  const wordColor=(w)=>{
    if(w.g && GENDER_COLORS[w.g]) return GENDER_COLORS[w.g][dk?"dark":"light"];
    return dk?"var(--gray-200)":"var(--gray-800)";
  };

  return(
    <div>
      {visible.map((w,i)=>{
        const learned = hasProgress && isLearned(w.w);
        const isOpen = expanded === i;
        return(
        <div key={i}
          onClick={()=>setExpanded(isOpen?null:i)}
          style={{...rowStyle,padding:"10px 14px",opacity:learned?0.5:1,transition:"all .2s ease",cursor:"pointer"}}>
          <GlossArc/>
          <div style={{position:"relative",zIndex:1}}>
            {/* Line 1: headword + English meaning */}
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:15,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:wordColor(w)}}>{w.w}</span>
              {getMeaning(w.w)&&<span style={{fontSize:12,fontWeight:600,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{getMeaning(w.w)}</span>}
              {!getMeaning(w.w)&&<div style={{flex:1}}/>}
              {hasProgress && learned && (
                <svg width="14" height="11" viewBox="0 0 10 8" fill="none" style={{flexShrink:0}}>
                  <path d="M1 3.5L3.5 6L9 1" stroke={dk?"#A488F0":"#7B5EE8"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            {/* Expanded detail */}
            {isOpen && (
              <div style={{marginTop:4,marginLeft:4}}>
                {/* Noun: article inline */}
                {w.a&&<div style={{fontSize:13,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:wordColor(w),marginBottom:3}}>{w.a} {w.w}{w.pl?`, pl: ${w.pl}`:""}</div>}
                {/* Examples (deduplicated, may have multiple) */}
                {(w.examples||[]).map((ex,ei)=>(
                  <div key={ei} style={{marginBottom:ei<(w.examples||[]).length-1?6:0}}>
                    <div style={{fontSize:13,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(220,215,240,0.8)":"var(--gray-700)",lineHeight:1.5}}>{ex.ex}</div>
                    {(baseLang==="ar"&&ex.trAr?ex.trAr:ex.tr)&&<div style={{fontSize:12,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(168,144,255,0.5)":"rgba(110,85,200,0.55)",lineHeight:1.4,fontStyle:"italic",direction:baseLang==="ar"?"rtl":"ltr"}}>{baseLang==="ar"&&ex.trAr?ex.trAr:ex.tr}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        );
      })}

      {showCount<words.length&&(
        <div style={{textAlign:"center",padding:"12px 0"}}>
          <button onClick={()=>setShowCount(s=>s+200)} style={{
            padding:"8px 24px",borderRadius:16,border:"none",cursor:"pointer",
            fontFamily:"'Quicksand',sans-serif",fontWeight:900,fontSize:13,
            background:dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))",
            color:dk?"#B8A8FA":"#7B5EE8",
            boxShadow:dk?"0 0 12px rgba(123,94,232,0.4),inset 0 1px 0 rgba(255,255,255,0.12)":"0 2px 10px rgba(123,94,232,0.2),inset 0 1px 0 rgba(255,255,255,0.9)",
          }}>
            Show more ({words.length - showCount} remaining)
          </button>
        </div>
      )}

      {words.length===0&&(
        <div style={{textAlign:"center",padding:"40px 20px",color:"var(--gray-400)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>
          {t("cefr_no_match",baseLang)}
        </div>
      )}
    </div>
  );
}

export default CefrReferencePage;
