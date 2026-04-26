import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { LANGUAGES } from '../data/metadata.js';
import { ARTICLE_COLORS, t } from '../data/vocabulary.js';
import { NavArrow } from '../components/shared.jsx';
import { useBottomSheet, useSwipe } from '../hooks.js';
import { DUTCH_GRAMMAR } from '../data/grammar/dutch.js';
import { GERMAN_GRAMMAR } from '../data/grammar/german.js';
import { GERMAN_GRAMMAR_AR } from '../data/grammar/german-ar.js';
import { KOREAN_GRAMMAR } from '../data/grammar/korean.js';
import { FRENCH_GRAMMAR } from '../data/grammar/french.js';
import { SPANISH_GRAMMAR } from '../data/grammar/spanish.js';
import { ITALIAN_GRAMMAR } from '../data/grammar/italian.js';
import { JAPANESE_GRAMMAR } from '../data/grammar/japanese.js';
import { CHINESE_GRAMMAR } from '../data/grammar/chinese.js';
import { PORTUGUESE_GRAMMAR } from '../data/grammar/portuguese.js';
import { RUSSIAN_GRAMMAR } from '../data/grammar/russian.js';
import { scrimProps } from '../a11y.js';

/* ── All-purple brand palette ── */
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
  const [openIdx,setOpenIdx]=useState(null);
  const ddRef=useRef(null);
  const animDir=useRef("left");

  const isMobile=typeof window!=="undefined"&&window.innerWidth<600;

  const GRAMMAR_REFS={nl:DUTCH_GRAMMAR,de:baseLang==="ar"?GERMAN_GRAMMAR_AR:GERMAN_GRAMMAR,ko:KOREAN_GRAMMAR,fr:FRENCH_GRAMMAR,es:SPANISH_GRAMMAR,it:ITALIAN_GRAMMAR,ja:JAPANESE_GRAMMAR,zh:CHINESE_GRAMMAR,pt:PORTUGUESE_GRAMMAR,ru:RUSSIAN_GRAMMAR};
  const grammarData=GRAMMAR_REFS[lang]||{};
  const noGrammarYet=!GRAMMAR_REFS[lang];

  const levels=["A1","A2","B1","B2"];
  const levelLabels={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang)};
  const entries=grammarData[level]||[];

  const closePopup=useCallback(()=>setOpenIdx(null),[]);
  const goNext=useCallback(()=>{setOpenIdx(i=>{if(i===null||i>=entries.length-1)return i;animDir.current="left";return i+1;});},[entries.length]);
  const goPrev=useCallback(()=>{setOpenIdx(i=>{if(i===null||i<=0)return i;animDir.current="right";return i-1;});},[]);

  // Bottom sheet for mobile
  const bs=useBottomSheet(openIdx!==null&&isMobile,closePopup);

  // Swipe left/right between entries
  const swipe=useSwipe(goNext,goPrev,{enabled:openIdx!==null,threshold:50});

  // Attach swipe handlers to document when popup open
  useEffect(()=>{
    if(openIdx===null)return;
    const {onTouchStart,onTouchEnd}=swipe;
    document.addEventListener("touchstart",onTouchStart,{passive:true});
    document.addEventListener("touchend",onTouchEnd,{passive:true});
    return ()=>{document.removeEventListener("touchstart",onTouchStart);document.removeEventListener("touchend",onTouchEnd);};
  },[openIdx,swipe]);

  // Close dropdown on outside click
  useEffect(()=>{
    if(!showDD)return;
    const h=e=>{if(ddRef.current&&!ddRef.current.contains(e.target))setShowDD(false);};
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[showDD]);

  // Keyboard nav
  useEffect(()=>{
    if(openIdx===null)return;
    const h=e=>{
      if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();goNext();}
      if(e.key==="ArrowLeft"){e.preventDefault();goPrev();}
      if(e.key==="Escape"){e.preventDefault();closePopup();}
    };
    document.addEventListener("keydown",h);
    return ()=>document.removeEventListener("keydown",h);
  },[openIdx,goNext,goPrev,closePopup]);

  // Lock body scroll when popup open
  useEffect(()=>{
    if(openIdx!==null){document.body.style.overflow="hidden";}
    else{document.body.style.overflow="";}
    return ()=>{document.body.style.overflow="";};
  },[openIdx]);

  const entry=openIdx!==null?entries[openIdx]:null;

  /* ══════════════════════════════════════════════
     DETAIL CONTENT — shared between mobile + desktop
     ══════════════════════════════════════════════ */
  const renderDetail=(entry,idx)=>{
    const dir=animDir.current;
    return(
      <div key={idx} style={{animation:`gramSlide${dir==="left"?"Left":"Right"} 0.22s ease`}}>
        {/* ── Header bar ── */}
        <div style={{
          padding:"16px 20px",borderRadius:18,marginBottom:16,position:"relative",overflow:"hidden",
          background:dk
            ?"linear-gradient(135deg, rgba(123,94,232,0.35) 0%, rgba(80,60,180,0.25) 100%)"
            :"linear-gradient(135deg, rgba(123,94,232,0.12) 0%, rgba(160,140,240,0.06) 100%)",
          border:dk?"1px solid rgba(160,140,255,0.2)":"1px solid rgba(123,94,232,0.12)",
        }}>
          <div style={glossArc(dk,"35%")}/>
          <h3 className="hd" style={{fontSize:20,fontWeight:800,color:dk?"#E0D8FF":P,margin:0,position:"relative",zIndex:1,fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>{entry.title}</h3>
          <div style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.4)",marginTop:4,position:"relative",zIndex:1}}>{level} · {idx+1} / {entries.length}</div>
        </div>

        {/* ── Explanation (FIRST — teacher sets context before the grid) ── */}
        <div style={{
          padding:"18px 20px",marginBottom:28,borderRadius:18,position:"relative",overflow:"hidden",
          background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",
          border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.1)",
          boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.04)":"inset 0 1px 0 rgba(255,255,255,0.6)",
        }}>
          <div style={glossArc(dk,"30%")}/>
          <div style={{position:"relative",zIndex:1}}>
            {entry.explanation.split("\n").map((line,li)=>{
              if(line.trim()==="")return <div key={li} style={{height:12}}/>;
              return <p key={li} style={{fontSize:14.5,color:"var(--gray-600)",lineHeight:1.9,margin:li>0?"8px 0 0":"0",fontWeight:500}}>{renderRich(line)}</p>;
            })}
          </div>
        </div>

        {/* ── Conjugation table (proper HTML table for pixel-perfect alignment) ── */}
        {entry.table&&<div style={{marginBottom:28}}>
          <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>{entry.tableTitle||"Conjugation"}</div>
          <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch",borderRadius:18}}>
            <table style={{
              width:"100%",borderCollapse:"separate",borderSpacing:0,borderRadius:18,overflow:"hidden",
              border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(123,94,232,0.12)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
                :"0 6px 20px rgba(123,94,232,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}>
              <tbody>
                {entry.table.map((row,ri)=>(
                  <tr key={ri} style={{
                    background:ri===0
                      ?(dk?"linear-gradient(135deg, rgba(123,94,232,0.35), rgba(80,60,180,0.25))":"linear-gradient(135deg, rgba(123,94,232,0.12), rgba(160,140,240,0.06))")
                      :(ri%2===0
                        ?(dk?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.6)")
                        :(dk?"transparent":"rgba(123,94,232,0.015)")),
                  }}>
                    {row.map((cell,ci)=>{
                      const Tag=ri===0?"th":"td";
                      const wide=entry.table[0]?.length>=5;
                      return <Tag key={ci} style={{
                        padding:ri===0?(wide?"12px 10px":"13px 14px"):(wide?"11px 10px":"12px 14px"),
                        fontSize:ri===0?(wide?10:11):(wide?13:14),
                        fontWeight:ri===0?800:(ci===0?700:500),
                        color:ri===0
                          ?(dk?"rgba(220,210,255,0.9)":"rgba(90,60,200,0.85)")
                          :(ci===0?(dk?"rgba(200,180,255,0.8)":P):"var(--gray-700)"),
                        letterSpacing:ri===0?0.5:0,
                        textAlign:ci===0?"left":"center",
                        whiteSpace:"nowrap",
                        borderBottom:ri<entry.table.length-1?(dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)"):"none",
                      }}>{cell}</Tag>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}

        {/* ── Rules ── */}
        {entry.rules&&entry.rules.length>0&&<div style={{marginBottom:28}}>
          <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>{t("grammar_rules_patterns",baseLang)}</div>
          <div style={{
            padding:"18px 20px",borderRadius:18,position:"relative",overflow:"hidden",
            background:dk?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.7)",
            border:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
            boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.03)":"inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.02)",
          }}>
            <div style={{position:"absolute",left:0,top:16,bottom:16,width:3,borderRadius:"0 2px 2px 0",background:dk?"linear-gradient(180deg, rgba(160,140,255,0.4), rgba(160,140,255,0.1))":"linear-gradient(180deg, rgba(123,94,232,0.35), rgba(123,94,232,0.08))"}}/>
            {entry.rules.map((rule,j)=>{
              if(rule==="")return <div key={j} style={{height:16}}/>;
              const isHeader=/^[A-Z\s'"\u201C\u201D\u2192\-:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
              return(
                <div key={j} style={{
                  fontSize:isHeader?11:14,
                  color:isHeader?(dk?"rgba(200,180,255,0.7)":P):"var(--gray-700)",
                  padding:isHeader?"14px 0 6px 12px":"6px 0 6px 12px",
                  lineHeight:1.8,display:"flex",gap:10,
                  fontWeight:isHeader?800:400,letterSpacing:isHeader?1:0,
                  textTransform:isHeader?"uppercase":"none",
                  ...(isHeader&&j>0?{borderTop:dk?"1px solid rgba(255,255,255,0.04)":"1px solid rgba(123,94,232,0.04)",marginTop:6}:{}),
                }}>
                  {!isHeader&&<span style={{color:dk?"rgba(160,140,255,0.4)":"rgba(123,94,232,0.3)",fontWeight:800,flexShrink:0,fontSize:8,marginTop:7}}>●</span>}
                  <span style={{flex:1}}>{renderRich(rule)}</span>
                </div>
              );
            })}
          </div>
        </div>}

        {/* ── Examples ── */}
        {entry.examples&&entry.examples.length>0&&<div style={{marginBottom:12}}>
          <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>{t("grammar_examples",baseLang)}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {entry.examples.map((ex,j)=>{
              const parts=ex.split(" - ");
              const trg=parts[0]||ex;
              const src=parts.slice(1).join(" - ")||"";
              return(
                <div key={j} style={{
                  padding:"14px 18px",borderRadius:16,position:"relative",overflow:"hidden",
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.12) 0%, rgba(100,80,200,0.06) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.2) 0%, rgba(220,210,255,0.08) 100%)",
                  border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.18)",
                  boxShadow:dk
                    ?"inset 0 1px 0 rgba(255,255,255,0.04)"
                    :"inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(123,94,232,0.04)",
                }}>
                  <div style={glossArc(dk,"25%")}/>
                  <div style={{fontSize:14.5,fontWeight:700,color:"var(--gray-800)",lineHeight:1.65,marginBottom:src?5:0,position:"relative",zIndex:1}}>{renderRich(trg)}</div>
                  {src&&<div style={{fontSize:13.5,fontWeight:600,color:dk?"rgba(180,160,255,0.75)":"rgba(110,85,200,0.7)",lineHeight:1.55,position:"relative",zIndex:1}}>{src}</div>}
                </div>
              );
            })}
          </div>
        </div>}
      </div>
    );
  };

  /* ══════════════════════════════════════════════
     NAV FOOTER — shared between mobile + desktop
     ══════════════════════════════════════════════ */
  const renderNav=()=>(
    <div style={{
      padding:"14px 20px 18px",display:"flex",justifyContent:"center",alignItems:"center",gap:14,flexShrink:0,
      borderTop:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
      position:"relative",zIndex:1,
    }}>
      {openIdx>0?<NavArrow onClick={goPrev} isBack size={44}/>:<div style={{width:44}}/>}
      <span style={{fontSize:12,fontWeight:700,color:"var(--gray-400)",minWidth:60,textAlign:"center"}}>{openIdx+1} / {entries.length}</span>
      {openIdx<entries.length-1?<NavArrow onClick={goNext} size={44}/>:<div style={{width:44}}/>}
    </div>
  );

  return(
    <div className="anim">
      {/* ── Header ── */}
      <div style={{textAlign:"center",marginBottom:28}}>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* ── Coming soon ── */}
      {noGrammarYet&&<div style={{textAlign:"center",padding:"48px 24px",background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",borderRadius:22,border:"2px solid var(--card-border)",boxShadow:"var(--card-shadow)",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={glossArc(dk)}/>
        <div style={{fontSize:48,marginBottom:12,position:"relative"}}>📚</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8,position:"relative"}}>{t("grammar_title",baseLang)}</div>
        <div style={{fontSize:14,color:"var(--gray-400)",position:"relative",lineHeight:1.6,maxWidth:300,margin:"0 auto"}}>{t("grammar_sub",baseLang)}</div>
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

        {/* ── Full-width list cards (no emoji icons) ── */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {entries.map((r,i)=>(
            <button key={i} onClick={()=>{animDir.current="left";setOpenIdx(i);}} className="anim" style={{
              animationDelay:`${i*0.025}s`,
              padding:"16px 20px",borderRadius:16,cursor:"pointer",
              textAlign:"left",position:"relative",overflow:"hidden",
              background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",
              border:"1.5px solid var(--card-border)",
              boxShadow:"var(--card-shadow)",
              transition:"all .18s ease",
              display:"flex",flexDirection:"column",gap:4,
            }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--card-shadow-hover)";e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.borderColor=dk?"rgba(160,140,240,0.35)":"rgba(123,94,232,0.25)";}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--card-shadow)";e.currentTarget.style.transform="none";e.currentTarget.style.borderColor="";}}
            >
              <div style={glossArc(dk,"35%")}/>
              <div style={{display:"flex",alignItems:"center",gap:10,position:"relative",zIndex:1}}>
                <span className="hd" style={{fontSize:15,fontWeight:700,color:"var(--gray-800)",lineHeight:1.35,flex:1}}>{r.title}</span>
                {r.table&&<span style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":P,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.06)",padding:"3px 8px",borderRadius:8,letterSpacing:0.5,textTransform:"uppercase",flexShrink:0}}>{t("grammar_table",baseLang)}</span>}
              </div>
              <p style={{fontSize:13,color:"var(--gray-400)",lineHeight:1.5,margin:0,position:"relative",zIndex:1,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{r.explanation}</p>
            </button>
          ))}
        </div>
      </>}

      {/* ══════ MOBILE BOTTOM SHEET ══════ */}
      {entry&&isMobile&&ReactDOM.createPortal(<>
        <div className="bs-overlay" {...scrimProps(bs.dismiss)} style={{
          position:"fixed",inset:0,zIndex:10001,
          background:dk?"rgba(0,0,0,0.6)":"rgba(15,10,40,0.35)",
          backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",
        }}/>
        <div
          ref={bs.panelRef}
          className={"bs-panel"+(bs.closing?" closing":"")}
          onPointerDown={bs.onPointerDown}
          style={{
            position:"fixed",bottom:0,left:0,right:0,zIndex:10002,
            maxHeight:"90dvh",display:"flex",flexDirection:"column",
            borderRadius:"24px 24px 0 0",overflow:"hidden",
            background:dk
              ?"linear-gradient(180deg, rgba(45,40,75,0.98) 0%, rgba(32,28,58,0.98) 50%, rgba(26,24,50,0.98) 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,250,254,0.97) 50%, rgba(245,244,250,0.96) 100%)",
            border:dk?"1.5px solid rgba(160,140,240,0.25)":"1.5px solid var(--card-border)",
            boxShadow:dk
              ?"0 -8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.1)"
              :"0 -8px 40px rgba(0,0,0,0.12), 0 0 20px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.9)",
            transform:`translateY(${bs.translateY}px)`,
          }}
        >
          {/* Drag handle */}
          <div className="bs-handle" onPointerDown={bs.onPointerDown} style={{
            display:"flex",justifyContent:"center",padding:"10px 0 6px",cursor:"grab",flexShrink:0,
          }}>
            <div style={{width:40,height:4,borderRadius:2,background:dk?"rgba(255,255,255,0.2)":"rgba(123,94,232,0.2)"}}/>
          </div>

          {/* Scrollable content */}
          <div className="bs-content" style={{flex:1,overflowY:"auto",padding:"8px 18px 24px",WebkitOverflowScrolling:"touch"}}>
            {renderDetail(entry,openIdx)}
          </div>

          {/* Nav footer */}
          {renderNav()}
        </div>
      </>,document.body)}

      {/* ══════ DESKTOP MODAL ══════ */}
      {entry&&!isMobile&&ReactDOM.createPortal(<div role="presentation" tabIndex={-1} onKeyDown={e=>{if(e.key==="Escape"){e.preventDefault();closePopup();}}} style={{
        position:"fixed",inset:0,zIndex:10001,
        background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",
        backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:20,
      }} onClick={e=>{if(e.target===e.currentTarget)closePopup();}}>
        <div style={{
          width:"min(540px, 94vw)",maxHeight:"calc(100dvh - 48px)",
          display:"flex",flexDirection:"column",
          borderRadius:28,overflow:"hidden",position:"relative",
          background:dk
            ?"linear-gradient(180deg, rgba(45,40,75,0.95) 0%, rgba(32,28,58,0.92) 50%, rgba(26,24,50,0.9) 100%)"
            :"linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(250,250,254,0.95) 50%, rgba(245,244,250,0.93) 100%)",
          border:dk?"1.5px solid rgba(160,140,240,0.22)":"1.5px solid var(--card-border)",
          boxShadow:dk
            ?"0 24px 72px rgba(0,0,0,0.55), 0 8px 24px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -3px 0 rgba(0,0,0,0.25)"
            :"0 24px 72px rgba(0,0,0,0.12), 0 8px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(0,0,0,0.03)",
          animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <div style={glossArc(dk)}/>

          {/* Close button — desktop only */}
          <div style={{position:"absolute",top:14,right:14,zIndex:5}}>
            <button onClick={closePopup} style={{
              width:32,height:32,borderRadius:12,border:"none",cursor:"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",
              background:dk
                ?"linear-gradient(180deg, rgba(80,70,120,0.8) 0%, rgba(60,52,100,0.9) 100%)"
                :"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,238,250,0.9) 100%)",
              boxShadow:dk
                ?"0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                :"0 2px 8px rgba(123,94,232,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
              color:dk?"rgba(200,180,255,0.7)":P,
              fontSize:14,fontWeight:700,transition:"all .15s",position:"relative",overflow:"hidden",
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";}}
            >
              <div style={{...glossArc(dk,"40%"),left:"10%",right:"10%"}}/>
              <span style={{position:"relative",zIndex:1}}>✕</span>
            </button>
          </div>

          {/* Scrollable content */}
          <div style={{flex:1,overflowY:"auto",padding:"24px 24px 16px",position:"relative",zIndex:1,WebkitOverflowScrolling:"touch"}}>
            {renderDetail(entry,openIdx)}
          </div>

          {/* Nav footer */}
          {renderNav()}
        </div>
      </div>,document.body)}
    </div>
  );
}

export default GrammarPage;
