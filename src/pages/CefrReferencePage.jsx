import React, { useState, useMemo } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { POS_COLORS, pillGradient } from '../data/dictionary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import { GERMAN_CEFR } from '../data/cefr-reference/german.js';
import { KOREAN_CEFR } from '../data/cefr-reference/korean.js';
import { DUTCH_CEFR } from '../data/cefr-reference/dutch.js';
import { FRENCH_CEFR } from '../data/cefr-reference/french.js';
import { SPANISH_CEFR } from '../data/cefr-reference/spanish.js';

const CEFR_REFS = { de: GERMAN_CEFR, ko: KOREAN_CEFR, nl: DUTCH_CEFR, fr: FRENCH_CEFR, es: SPANISH_CEFR };

function CefrReferencePage({lang,user}){
  const dk=document.documentElement.classList.contains("dark");
  const ref = CEFR_REFS[lang];
  const [tab,setTab]=useState("vocab");
  const [level,setLevel]=useState("ALL");
  const [search,setSearch]=useState("");
  const [expandedGrammar,setExpandedGrammar]=useState(null);
  const learnedWords = user?.lw || new Set();

  // Progress stats per CEFR level
  const progress = useMemo(()=>{
    if(!ref?.vocabulary) return null;
    const levels=["A1","A2","B1","B2"];
    const out={total:{known:0,total:0}};
    levels.forEach(lv=>{
      const words=ref.vocabulary.filter(w=>w.l===lv);
      const known=words.filter(w=>learnedWords.has(w.w)||learnedWords.has(w.w?.toLowerCase())).length;
      out[lv]={known,total:words.length,pct:words.length?Math.round((known/words.length)*100):0};
      out.total.known+=known;
      out.total.total+=words.length;
    });
    out.total.pct=out.total.total?Math.round((out.total.known/out.total.total)*100):0;
    return out;
  },[ref?.vocabulary,learnedWords]);

  if(!ref) return(
    <div className="anim" style={{textAlign:"center",padding:"60px 20px"}}>
      <div style={{fontSize:48,marginBottom:16}}>{"📚"}</div>
      <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"var(--gray-800)",marginBottom:8,fontFamily:"'Quicksand',sans-serif"}}>{t("cefr_progress")}</h2>
      <p style={{color:"var(--gray-500)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("cefr_no_data")}</p>
      <p style={{color:"var(--gray-400)",fontSize:13,fontFamily:"'Nunito',sans-serif",marginTop:8}}>Available: {Object.keys(CEFR_REFS).map(k=>({de:"German",ko:"Korean",nl:"Dutch",fr:"French",es:"Spanish"}[k]||k)).join(", ")}</p>
    </div>
  );

  const levels=["ALL","A1","A2","B1","B2"];
  const tabs=[
    {id:"vocab",label:t("vocab_title"),icon:"📖",count:ref.vocabulary?.length||0},
    {id:"grammar",label:t("grammar_title"),icon:"📐",count:Object.values(ref.grammar||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"idioms",label:t("cefr_idioms_phrases"),icon:"💬",count:Object.values(ref.idioms||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"particles",label:t("cefr_particles"),icon:"🔗"},
    {id:"functions",label:t("cefr_functions"),icon:"🗣️"},
  ];

  // Filter vocabulary
  const filteredVocab = useMemo(()=>{
    if(!ref.vocabulary) return [];
    let items = ref.vocabulary;
    if(level!=="ALL") items = items.filter(w=>w.l===level);
    if(search.trim()){
      const q=search.toLowerCase().trim();
      items = items.filter(w=>(w.w||"").toLowerCase().includes(q)||(w.f||"").toLowerCase().includes(q)||(w.tr||"").toLowerCase().includes(q));
    }
    return items.sort((a,b)=>(a.w||"").localeCompare(b.w||"","de"));
  },[ref.vocabulary,level,search]);

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
      {/* Header — Progress Dashboard */}
      <div style={{textAlign:"center",padding:"16px 0 8px"}}>
        <h1 className="hd" style={{fontSize:24,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:4}}>
          {ref.meta?.languageName||lang.toUpperCase()} Progress
        </h1>
        <p style={{fontSize:12,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif"}}>
          {ref.meta?.sources?.[0]||"Official reference lists"}
        </p>
      </div>

      {/* Progress bars per level */}
      {progress&&<div style={{
        ...panelStyle,
        padding:"16px 18px 14px",marginBottom:16,
      }}>
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
        {/* Overall */}
        <div style={{position:"relative",zIndex:1,textAlign:"center",marginBottom:14}}>
          <div style={{fontSize:32,fontWeight:900,fontFamily:"'Quicksand',sans-serif",color:dk?"#fff":"var(--gray-800)",lineHeight:1}}>
            {progress.total.known}<span style={{fontSize:16,fontWeight:700,color:dk?"rgba(200,184,255,0.6)":"var(--gray-400)"}}> / {progress.total.total}</span>
          </div>
          <div style={{fontSize:11,fontWeight:700,color:dk?"rgba(200,184,255,0.6)":"var(--gray-500)",fontFamily:"'Nunito',sans-serif",marginTop:2,textTransform:"uppercase",letterSpacing:1}}>
            Words learned ({progress.total.pct}%)
          </div>
        </div>
        {/* Per-level bars */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,position:"relative",zIndex:1}}>
          {["A1","A2","B1","B2"].map(lv=>{
            const p=progress[lv];
            if(!p||!p.total) return null;
            return(
              <div key={lv} style={{
                background:dk?"rgba(0,0,0,0.2)":"rgba(255,255,255,0.7)",
                borderRadius:14,padding:"10px 12px",
                border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.3)",
              }}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
                  <span style={{fontSize:13,fontWeight:900,fontFamily:"'Quicksand',sans-serif",color:bandColor(lv)}}>{lv}</span>
                  <span style={{fontSize:11,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.7)":"var(--gray-500)"}}>
                    {p.known}/{p.total}
                  </span>
                </div>
                <div style={{height:6,borderRadius:3,background:dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",overflow:"hidden"}}>
                  <div style={{
                    height:"100%",borderRadius:3,
                    width:`${p.pct}%`,
                    background:`linear-gradient(90deg, ${bandColor(lv)}, ${bandColor(lv)}cc)`,
                    transition:"width .5s cubic-bezier(.4,0,.2,1)",
                    boxShadow:`0 0 8px ${bandColor(lv)}44`,
                  }}/>
                </div>
                <div style={{fontSize:10,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginTop:3,textAlign:"right"}}>{p.pct}%</div>
              </div>
            );
          })}
        </div>
      </div>}

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
          {/* Search */}
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
            <input
              type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder={t("vocab_search")}
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
            {t("cefr_showing")} {filteredVocab.length} {t("cefr_of")} {ref.vocabulary?.length||0} {t("cefr_words")}
          </div>

          {/* Word list — virtualized-ish: show first 200, load more on scroll */}
          <VocabTable words={filteredVocab} dk={dk} rowStyle={rowStyle} LevelPill={LevelPill} posLabel={posLabel} genderLabel={genderLabel} genderColor={genderColor} GlossArc={GlossArc} learnedWords={learnedWords}/>
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
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} {t("cefr_grammar_constructs")} ({items.length})</span>
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
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} {t("cefr_idioms_phrases")} ({items.length})</span>
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
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} {t("cefr_functions")} ({items.length})</span>
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
function VocabTable({words,dk,rowStyle,LevelPill,posLabel,genderLabel,genderColor,GlossArc,learnedWords}){
  const [showCount,setShowCount]=useState(100);
  const visible=words.slice(0,showCount);
  const lw=learnedWords||new Set();
  const posTag=(p)=>({noun:"N",verb:"V",adj:"ADJ",adv:"ADV",prep:"PREP",conj:"CONJ",pron:"PRON",part:"PART",intj:"INTJ",phrase:"PHR",prefix:"PFX",modal:"MOD",aux:"AUX",num:"NUM",det:"DET",abbrev:"ABBR",number:"NUM",particle:"PART",adjective:"ADJ",adverb:"ADV",preposition:"PREP",conjunction:"CONJ",pronoun:"PRON",interjection:"INTJ"}[p]||"");

  return(
    <div>
      {visible.map((w,i)=>{
        const isLearned=lw.has(w.w)||lw.has(w.w?.toLowerCase());
        return(
        <div key={i} style={{...rowStyle,padding:"10px 16px",opacity:isLearned?1:0.65}}>
          <GlossArc/>
          <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
            {/* Learned indicator */}
            <span style={{
              fontSize:11,flexShrink:0,width:18,textAlign:"center",
              color:isLearned?"#2ECDA7":"transparent",
            }}>{isLearned?"✓":""}</span>
            {/* Level pill — compact */}
            <span style={{
              display:"inline-block",padding:"2px 6px",borderRadius:8,fontSize:9,fontWeight:800,
              fontFamily:"'Quicksand',sans-serif",color:"#fff",minWidth:24,textAlign:"center",
              background:`linear-gradient(180deg, ${({A1:"#A890FF",A2:"#9B7AE8",B1:"#7B5EE8",B2:"#6545C8"}[w.l]||"#888")} 0%, ${({A1:"#8B6AE4",A2:"#7B5EE8",B1:"#6545C8",B2:"#5230B0"}[w.l]||"#666")} 100%)`,
              textShadow:"0 1px 1px rgba(0,0,0,0.2)",letterSpacing:0.5,flexShrink:0,
            }}>{w.l}</span>
            {/* Word + POS tag */}
            <div style={{flex:1,minWidth:0}}>
              <span style={{fontSize:14,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{w.w}</span>
              {w.f&&w.f!==w.w&&<span style={{fontSize:11,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontFamily:"'Nunito',sans-serif",marginLeft:6}}>{w.f}</span>}
              {w.p&&posTag(w.p)&&<span style={{fontSize:9,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(168,144,255,0.5)":"rgba(123,94,232,0.4)",marginLeft:6,letterSpacing:0.5}}>{posTag(w.p)}</span>}
              {w.g&&<span style={{fontSize:9,fontWeight:700,color:dk?"rgba(168,144,255,0.5)":"rgba(123,94,232,0.4)",marginLeft:4}}>{genderLabel(w.g)}</span>}
            </div>
            {/* Translation */}
            <span style={{fontSize:12,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",fontFamily:"'Nunito',sans-serif",fontWeight:500,textAlign:"right",flexShrink:0,maxWidth:"40%"}}>{w.tr}</span>
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
            {t("cefr_show_more")} ({words.length - showCount} {t("cefr_remaining")})
          </button>
        </div>
      )}

      {words.length===0&&(
        <div style={{textAlign:"center",padding:"40px 20px",color:"var(--gray-400)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>
          {t("cefr_no_match")}
        </div>
      )}
    </div>
  );
}

export default CefrReferencePage;
