import React, { useState, useRef, useEffect, useCallback } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { ARTICLE_COLORS, t } from '../data/vocabulary.js';
import { NavArrow } from '../components/shared.jsx';
import { DUTCH_GRAMMAR } from '../data/grammar/dutch.js';
import { GERMAN_GRAMMAR } from '../data/grammar/german.js';

/* ── All-purple brand palette (NO per-level colors) ── */
const P="#7B5EE8";
const glossArc=(dk,h="42%")=>({position:"absolute",top:0,left:"5%",right:"5%",height:h,borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none",zIndex:0});

/* ── Rich text renderer ── */
const renderRich=(text)=>{
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
    if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)",fontWeight:700}}>{seg.slice(2,-2)}</strong>;
    if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:P,fontStyle:"italic"}}>{seg.slice(1,-1)}</em>;
    return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
      if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(123,94,232,0.08)",color:P,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{part.slice(1,-1)}</span>;
      return part.split(/(→)/).map((bit,bi)=>{
        if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:P,fontWeight:800,margin:"0 3px"}}>→</span>;
        return bit;
      });
    });
  });
};

function GrammarPage({lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const [level,setLevel]=useState("A1");
  const [showDD,setShowDD]=useState(false);
  const [openIdx,setOpenIdx]=useState(null); // which card is open in popup
  const ddRef=useRef(null);

  const GRAMMAR_REFS = { nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR };
  const grammarData = GRAMMAR_REFS[lang] || {};
  const noGrammarYet = !GRAMMAR_REFS[lang];

  const levels=["A1","A2","B1","B2"];
  const levelLabels={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang)};
  const entries=grammarData[level]||[];

  // Close dropdown on outside click
  useEffect(()=>{
    if(!showDD)return;
    const h=e=>{if(ddRef.current&&!ddRef.current.contains(e.target))setShowDD(false);};
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[showDD]);

  // Keyboard nav in popup
  useEffect(()=>{
    if(openIdx===null)return;
    const h=e=>{
      if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();if(openIdx<entries.length-1)setOpenIdx(i=>i+1);}
      if(e.key==="ArrowLeft"){e.preventDefault();if(openIdx>0)setOpenIdx(i=>i-1);}
      if(e.key==="Escape"){e.preventDefault();setOpenIdx(null);}
    };
    document.addEventListener("keydown",h);
    return ()=>document.removeEventListener("keydown",h);
  },[openIdx,entries.length]);

  // Lock body scroll when popup open
  useEffect(()=>{
    if(openIdx!==null){document.body.style.overflow="hidden";}
    else{document.body.style.overflow="";}
    return ()=>{document.body.style.overflow="";};
  },[openIdx]);

  const entry=openIdx!==null?entries[openIdx]:null;

  return(
    <div className="anim">
      {/* ── Header ── */}
      <div style={{textAlign:"center",marginBottom:28}}>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* ── Coming soon ── */}
      {noGrammarYet && <div style={{textAlign:"center",padding:"48px 24px",background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",borderRadius:22,border:"2px solid var(--card-border)",boxShadow:"var(--card-shadow)",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={glossArc(dk)}/>
        <div style={{fontSize:48,marginBottom:12,position:"relative"}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8,position:"relative"}}>Grammar reference coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)",position:"relative"}}>Check the CEFR Reference page for grammar constructs by level.</div>
      </div>}

      {!noGrammarYet&&<>
        {/* ── Level dropdown pill ── */}
        <div style={{display:"flex",justifyContent:"center",marginBottom:28}} ref={ddRef}>
          <div style={{position:"relative"}}>
            <button onClick={()=>setShowDD(!showDD)} style={{
              display:"flex",alignItems:"center",gap:10,
              padding:"12px 22px",borderRadius:20,cursor:"pointer",
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
                :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
              border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.3), 0 0 10px rgba(123,94,232,0.2), inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -2px 0 rgba(0,0,0,0.15)"
                :"0 4px 16px rgba(123,94,232,0.15), 0 0 10px rgba(165,148,238,0.2), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -2px 0 rgba(110,85,200,0.08)",
              position:"relative",overflow:"hidden",transition:"all .2s",minHeight:48,
            }}>
              <div style={glossArc(dk,"40%")}/>
              <span style={{fontSize:15,fontWeight:800,color:dk?"#E0D8FF":P,position:"relative",zIndex:1}}>{level}</span>
              <span style={{fontSize:13,fontWeight:600,color:dk?"rgba(220,210,255,0.7)":"rgba(110,85,200,0.7)",position:"relative",zIndex:1}}>{levelLabels[level]}</span>
              <span style={{fontSize:12,color:dk?"rgba(220,210,255,0.5)":"rgba(110,85,200,0.5)",transition:"transform .2s",transform:showDD?"rotate(180deg)":"none",position:"relative",zIndex:1}}>▾</span>
            </button>

            {/* Dropdown */}
            {showDD&&<div className="anim" style={{
              position:"absolute",top:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",
              minWidth:200,borderRadius:16,overflow:"hidden",zIndex:100,
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.6) 0%, rgba(80,60,180,0.45) 100%)"
                :"linear-gradient(180deg, rgba(220,213,255,0.98) 0%, rgba(235,230,255,0.96) 100%)",
              border:dk?"1.5px solid rgba(160,140,255,0.4)":"1.5px solid rgba(165,148,238,0.5)",
              boxShadow:dk
                ?"0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3)"
                :"0 12px 40px rgba(123,94,232,0.2), 0 0 16px rgba(165,148,238,0.2)",
            }}>
              {levels.map(lv=>{
                const active=lv===level;
                const count=(grammarData[lv]||[]).length;
                return <button key={lv} onClick={()=>{setLevel(lv);setShowDD(false);setOpenIdx(null);}} style={{
                  display:"flex",alignItems:"center",gap:10,width:"100%",
                  padding:"12px 18px",border:"none",cursor:"pointer",
                  background:active?(dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.08)"):"transparent",
                  borderBottom:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(165,148,238,0.15)",
                  transition:"background .12s",
                }}
                  onMouseEnter={e=>{if(!active)e.currentTarget.style.background=dk?"rgba(255,255,255,0.06)":"rgba(123,94,232,0.04)";}}
                  onMouseLeave={e=>{if(!active)e.currentTarget.style.background="transparent";}}
                >
                  <span style={{fontSize:14,fontWeight:800,color:dk?"#E0D8FF":P}}>{lv}</span>
                  <span style={{fontSize:13,fontWeight:600,color:dk?"rgba(220,210,255,0.6)":"rgba(110,85,200,0.55)",flex:1}}>{levelLabels[lv]}</span>
                  <span style={{fontSize:12,fontWeight:700,color:dk?"rgba(220,210,255,0.4)":"rgba(110,85,200,0.4)"}}>{count}</span>
                </button>;
              })}
            </div>}
          </div>
        </div>

        {/* ── Topic count ── */}
        <div style={{textAlign:"center",marginBottom:20}}>
          <span style={{fontSize:13,fontWeight:600,color:"var(--gray-400)"}}>{entries.length} {t("grammar_topics",baseLang)}</span>
        </div>

        {/* ── Tile grid ── */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:10}}>
          {entries.map((r,i)=>(
            <button key={i} onClick={()=>setOpenIdx(i)} className="anim" style={{
              animationDelay:`${i*0.03}s`,
              padding:"16px 14px",borderRadius:16,cursor:"pointer",
              textAlign:"left",position:"relative",overflow:"hidden",
              background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",
              border:"1.5px solid var(--card-border)",
              boxShadow:"var(--card-shadow)",
              transition:"all .2s ease",minHeight:64,
              display:"flex",alignItems:"center",
            }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--card-shadow-hover)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.borderColor=dk?"rgba(160,140,240,0.35)":"rgba(123,94,232,0.25)";}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--card-shadow)";e.currentTarget.style.transform="none";e.currentTarget.style.borderColor="";}}
            >
              <div style={glossArc(dk,"38%")}/>
              <span className="hd" style={{fontSize:13,fontWeight:700,color:"var(--gray-700)",lineHeight:1.35,position:"relative",zIndex:1}}>{r.title}</span>
            </button>
          ))}
        </div>
      </>}

      {/* ══════ POPUP MODAL ══════ */}
      {entry&&<div style={{
        position:"fixed",inset:0,zIndex:10001,
        background:dk?"rgba(0,0,0,0.6)":"rgba(15,10,40,0.35)",
        backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:16,
      }} onClick={e=>{if(e.target===e.currentTarget)setOpenIdx(null);}}>
        <div className="anim" style={{
          width:"min(520px, 94vw)",maxHeight:"calc(100dvh - 40px)",
          display:"flex",flexDirection:"column",
          borderRadius:24,overflow:"hidden",position:"relative",
          background:dk
            ?"linear-gradient(180deg, rgba(45,40,75,0.92) 0%, rgba(32,28,58,0.88) 50%, rgba(26,24,50,0.85) 100%)"
            :"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,254,0.92) 50%, rgba(245,244,250,0.9) 100%)",
          border:dk?"1.5px solid rgba(160,140,240,0.2)":"1.5px solid var(--card-border)",
          boxShadow:dk
            ?"0 24px 72px rgba(0,0,0,0.55), 0 8px 24px rgba(123,94,232,0.28), inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.28)"
            :"0 24px 72px rgba(0,0,0,0.14), 0 8px 24px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.92), inset 0 -2px 0 rgba(0,0,0,0.04)",
        }}>
          {/* Gloss arc */}
          <div style={glossArc(dk)}/>

          {/* ── Top bar ── */}
          <div style={{
            padding:"14px 18px 12px",display:"flex",alignItems:"center",gap:10,flexShrink:0,
            borderBottom:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.08)",
            position:"relative",zIndex:1,
          }}>
            <span style={{fontSize:11,fontWeight:700,color:dk?"rgba(200,180,255,0.6)":P,letterSpacing:1.5,textTransform:"uppercase"}}>{level}</span>
            <span style={{fontSize:12,fontWeight:600,color:"var(--gray-400)",flex:1}}>{openIdx+1} / {entries.length}</span>
            {/* Close button */}
            <button onClick={()=>setOpenIdx(null)} style={{
              width:28,height:28,borderRadius:10,border:"none",cursor:"pointer",
              background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)",
              color:dk?"rgba(200,180,255,0.7)":P,
              fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all .15s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.15)":"rgba(123,94,232,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)";}}
            >✕</button>
          </div>

          {/* ── Scrollable content ── */}
          <div style={{flex:1,overflowY:"auto",padding:"20px 20px 16px",position:"relative",zIndex:1,WebkitOverflowScrolling:"touch"}}>
            {/* Title */}
            <h3 className="hd" style={{fontSize:22,fontWeight:800,color:dk?"#E0D8FF":P,marginBottom:8,textAlign:"center",fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>{entry.title}</h3>

            {/* Explanation in glass bubble */}
            <div style={{
              padding:"16px 18px",marginBottom:20,borderRadius:16,
              background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",
              border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.1)",
              boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.04)":"inset 0 1px 0 rgba(255,255,255,0.6)",
            }}>
              <p style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.85,margin:0,fontWeight:500}}>{entry.explanation}</p>
            </div>

            {/* ── Rules section ── */}
            {entry.rules&&<div style={{marginBottom:20}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>Rules & Patterns</div>
              <div style={{
                padding:"16px 18px",borderRadius:16,position:"relative",overflow:"hidden",
                background:dk?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.7)",
                border:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
                boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.03)":"inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.02)",
              }}>
                {/* Left accent bar */}
                <div style={{position:"absolute",left:0,top:14,bottom:14,width:3,borderRadius:"0 2px 2px 0",background:dk?`linear-gradient(180deg, rgba(160,140,255,0.4), rgba(160,140,255,0.1))`:`linear-gradient(180deg, rgba(123,94,232,0.35), rgba(123,94,232,0.08))`}}/>

                {entry.rules.map((rule,j)=>{
                  if(rule==="")return <div key={j} style={{height:10}}/>;
                  const isHeader=/^[A-Z\s'""→\-:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                  return(
                    <div key={j} style={{
                      fontSize:isHeader?11:13.5,
                      color:isHeader?(dk?"rgba(200,180,255,0.7)":P):"var(--gray-700)",
                      padding:isHeader?"10px 0 4px 10px":"4px 0 4px 10px",
                      lineHeight:1.75,display:"flex",gap:8,
                      fontWeight:isHeader?800:400,letterSpacing:isHeader?1:0,
                      textTransform:isHeader?"uppercase":"none",
                    }}>
                      {!isHeader&&<span style={{color:dk?"rgba(160,140,255,0.4)":"rgba(123,94,232,0.3)",fontWeight:800,flexShrink:0,fontSize:8,marginTop:6}}>●</span>}
                      <span style={{flex:1}}>{renderRich(rule)}</span>
                    </div>
                  );
                })}
              </div>
            </div>}

            {/* ── Conjugation table (if entry has table field) ── */}
            {entry.table&&<div style={{marginBottom:20}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>{entry.tableTitle||"Conjugation"}</div>
              <div style={{borderRadius:16,overflow:"hidden",border:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.08)"}}>
                {entry.table.map((row,ri)=>(
                  <div key={ri} style={{
                    display:"grid",gridTemplateColumns:entry.tableCols||"1fr 1fr",
                    borderBottom:ri<entry.table.length-1?(dk?"1px solid rgba(255,255,255,0.04)":"1px solid rgba(123,94,232,0.05)"):"none",
                    background:ri===0?(dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.04)"):(ri%2===0?(dk?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.5)"):"transparent"),
                  }}>
                    {row.map((cell,ci)=>(
                      <div key={ci} style={{
                        padding:"10px 14px",fontSize:ri===0?11:13,fontWeight:ri===0?700:ci===0?600:400,
                        color:ri===0?(dk?"rgba(200,180,255,0.7)":P):(ci===0?"var(--gray-600)":"var(--gray-700)"),
                        letterSpacing:ri===0?0.5:0,textTransform:ri===0?"uppercase":"none",
                      }}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>}

            {/* ── Examples in compound bubbles ── */}
            {entry.examples&&<div style={{marginBottom:8}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>Examples</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {entry.examples.map((ex,j)=>{
                  const parts=ex.split(" - ");
                  const trg=parts[0]||ex;
                  const src=parts.slice(1).join(" - ")||"";
                  return(
                    <div key={j} style={{
                      padding:"12px 16px",borderRadius:14,position:"relative",overflow:"hidden",
                      background:dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.12) 0%, rgba(100,80,200,0.06) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.25) 0%, rgba(220,210,255,0.12) 100%)",
                      border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.2)",
                      boxShadow:dk
                        ?"inset 0 1px 0 rgba(255,255,255,0.04)"
                        :"inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(123,94,232,0.04)",
                    }}>
                      <div style={{fontSize:14,fontWeight:700,color:"var(--gray-800)",lineHeight:1.6,marginBottom:src?4:0}}>{renderRich(trg)}</div>
                      {src&&<div style={{fontSize:13,fontWeight:600,color:"var(--teal)",lineHeight:1.5}}>{src}</div>}
                    </div>
                  );
                })}
              </div>
            </div>}
          </div>

          {/* ── Navigation footer ── */}
          <div style={{
            padding:"14px 20px 18px",display:"flex",justifyContent:"center",alignItems:"center",gap:14,flexShrink:0,
            borderTop:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
            position:"relative",zIndex:1,
          }}>
            {openIdx>0&&<NavArrow onClick={()=>setOpenIdx(i=>i-1)} isBack size={44}/>}
            {openIdx===0&&<div style={{width:44}}/>}
            <span style={{fontSize:12,fontWeight:700,color:"var(--gray-400)",minWidth:60,textAlign:"center"}}>{openIdx+1} / {entries.length}</span>
            {openIdx<entries.length-1&&<NavArrow onClick={()=>setOpenIdx(i=>i+1)} size={44}/>}
            {openIdx===entries.length-1&&<div style={{width:44}}/>}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default GrammarPage;
