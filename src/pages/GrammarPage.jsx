import React, { useState } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { ARTICLE_COLORS, t } from '../data/vocabulary.js';
import { BrandIcon } from '../components/shared.jsx';
import { DUTCH_GRAMMAR } from '../data/grammar/dutch.js';
import { GERMAN_GRAMMAR } from '../data/grammar/german.js';

/* ── Candy gloss helpers ── */
const glass={background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",boxShadow:"var(--card-shadow)",border:"2px solid var(--card-border)"};

const levelGradients={
  A1:"linear-gradient(135deg, rgba(46,205,167,0.08), rgba(46,205,167,0.02))",
  A2:"linear-gradient(135deg, rgba(74,143,231,0.08), rgba(74,143,231,0.02))",
  B1:"linear-gradient(135deg, rgba(245,166,35,0.08), rgba(245,166,35,0.02))",
  B2:"linear-gradient(135deg, rgba(123,94,232,0.08), rgba(123,94,232,0.02))",
  C1:"linear-gradient(135deg, rgba(245,101,101,0.08), rgba(245,101,101,0.02))",
  C2:"linear-gradient(135deg, rgba(150,150,173,0.08), rgba(150,150,173,0.02))",
};

function GrammarPage({lang,baseLang="en"}){
  const [openLevel,setOpenLevel]=useState("A1");
  const [openRule,setOpenRule]=useState(null);

  const GRAMMAR_REFS = { nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR };
  const grammarData = GRAMMAR_REFS[lang] || {};
  const noGrammarYet = !GRAMMAR_REFS[lang];

  const levels=["A1","A2","B1","B2","C1","C2"];
  const levelNames={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang),C1:t("level_advanced",baseLang),C2:t("level_mastery",baseLang)};
  const levelColors={A1:"var(--teal)",A2:"var(--blue)",B1:"var(--gold)",B2:"#7B5EE8",C1:"var(--coral)",C2:"var(--gray-600)"};
  const levelColorRaw={A1:"46,205,167",A2:"74,143,231",B1:"245,166,35",B2:"123,94,232",C1:"245,101,101",C2:"150,150,173"};
  const rules=grammarData[openLevel]||[];

  /* ── Rich text renderer (shared by rules + examples) ── */
  const renderRich=(text,lvColor,isArticleTopic)=>{
    return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
      if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)",fontWeight:700}}>{seg.slice(2,-2)}</strong>;
      if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)",fontStyle:"italic"}}>{seg.slice(1,-1)}</em>;
      if(isArticleTopic&&lang==="nl"){
        return seg.split(/\b(de|het|De|Het)\b/).map((aseg,ai)=>{
          const low=aseg.toLowerCase();
          if(low==="de"&&ARTICLE_COLORS.de)return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.de.pill,color:ARTICLE_COLORS.de.pillText,fontWeight:700,borderRadius:6,padding:"1px 6px",fontSize:"0.92em"}}>{aseg}</span>;
          if(low==="het"&&ARTICLE_COLORS.het)return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.het.pill,color:ARTICLE_COLORS.het.pillText,fontWeight:700,borderRadius:6,padding:"1px 6px",fontSize:"0.92em"}}>{aseg}</span>;
          return aseg;
        });
      }
      if(isArticleTopic&&lang==="de"){
        return seg.split(/\b(der|die|das|den|dem|des|ein|eine|einen|einem|eines|einer|Der|Die|Das|Den|Dem|Des|Ein|Eine|Einen|Einem|Eines|Einer)\b/).map((aseg,ai)=>{
          const low=aseg.toLowerCase();
          if(["der","den","dem","des","ein","einen","einem","eines"].includes(low)&&["der","den","dem","des"].includes(low))return <span key={si+"-"+ai} style={{background:"rgba(13,71,161,0.1)",color:"#0D47A1",fontWeight:700,borderRadius:6,padding:"1px 6px",fontSize:"0.92em"}}>{aseg}</span>;
          if(["die","eine","einer"].includes(low))return <span key={si+"-"+ai} style={{background:"rgba(183,28,28,0.1)",color:"#B71C1C",fontWeight:700,borderRadius:6,padding:"1px 6px",fontSize:"0.92em"}}>{aseg}</span>;
          if(["das","ein"].includes(low)&&aseg===aseg)return aseg;
          return aseg;
        });
      }
      return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
        if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.15)",color:"var(--gold-dark)",fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{part.slice(1,-1)}</span>;
        return part.split(/(→)/).map((bit,bi)=>{
          if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:lvColor,fontWeight:800,margin:"0 3px"}}>→</span>;
          return bit;
        });
      });
    });
  };

  return(
    <div className="anim">
      {/* ── Header with glass panel ── */}
      <div style={{textAlign:"center",marginBottom:28,padding:"24px 20px 20px",...glass,borderRadius:22,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
        <div style={{fontSize:40,marginBottom:10,position:"relative",filter:"drop-shadow(0 2px 8px rgba(123,94,232,0.3))"}}>📝</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6,position:"relative"}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14,position:"relative"}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* ── Coming soon placeholder ── */}
      {noGrammarYet && <div style={{textAlign:"center",padding:"40px 20px",...glass,borderRadius:22,marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
        <div style={{fontSize:48,marginBottom:12}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>Grammar reference coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)"}}>Check the CEFR Reference page for grammar constructs by level.</div>
      </div>}

      {/* ── Level tab pills (candy gloss) ── */}
      <div style={{display:"flex",gap:6,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>
        {levels.map(lv=>{
          const active=openLevel===lv;
          const rgb=levelColorRaw[lv];
          return(
            <button key={lv} onClick={()=>{setOpenLevel(lv);setOpenRule(null);}} style={{
              padding:"10px 20px",borderRadius:20,fontWeight:700,fontSize:13,cursor:"pointer",minHeight:44,
              transition:"all .2s ease",position:"relative",overflow:"hidden",letterSpacing:0.3,
              border:active?`2px solid rgba(${rgb},0.5)`:"2px solid var(--card-border)",
              background:active?`linear-gradient(180deg, rgba(${rgb},0.85) 0%, rgba(${rgb},0.95) 100%)`:"var(--card-bg)",
              color:active?"white":"var(--gray-500)",
              boxShadow:active?`0 4px 14px rgba(${rgb},0.3), 0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.1)`:"var(--card-shadow)",
              backdropFilter:active?"none":"var(--glass-blur)",WebkitBackdropFilter:active?"none":"var(--glass-blur)",
            }}>
              {lv}
            </button>
          );
        })}
      </div>

      {/* ── Topic count badge ── */}
      <div style={{textAlign:"center",marginBottom:22}}>
        <span style={{
          display:"inline-block",padding:"6px 16px",borderRadius:14,fontSize:13,fontWeight:600,
          color:"var(--gray-400)",
          background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",
          boxShadow:"var(--shadow-sm)",border:"1.5px solid var(--card-border)",
        }}>{levelNames[openLevel]} · {rules.length} {t("grammar_topics",baseLang)}</span>
      </div>

      {/* ── Grammar cards (frosted glass + candy accents) ── */}
      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {rules.map((r,i)=>{
          const isOpen=openRule===i;
          const lvColor=levelColors[openLevel];
          const rgb=levelColorRaw[openLevel];
          const isArticleTopic=r.title.includes("De vs Het")||r.title.includes("Articles")||r.title.includes("Artikel")||r.title.includes("Gender");
          return(
            <div key={i} className="anim" style={{
              animationDelay:`${i*0.04}s`,
              borderRadius:20,overflow:"hidden",
              transition:"all .25s ease",position:"relative",
              ...glass,
              background:isOpen?levelGradients[openLevel]:"var(--card-bg)",
              border:isOpen?`2px solid rgba(${rgb},0.35)`:"2px solid var(--card-border)",
              boxShadow:isOpen
                ?`0 8px 28px rgba(${rgb},0.12), 0 4px 12px rgba(0,0,0,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.03)`
                :"var(--card-shadow)",
            }}>
              {/* Candy gloss sheen overlay */}
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"40%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none",opacity:isOpen?0.6:0.4}}/>

              {/* ── Card header ── */}
              <div onClick={()=>setOpenRule(isOpen?null:i)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",cursor:"pointer",position:"relative",minHeight:56,WebkitTapHighlightColor:"transparent"}}>
                {/* Colored accent stripe on left */}
                <div style={{position:"absolute",left:0,top:"20%",bottom:"20%",width:4,borderRadius:"0 3px 3px 0",background:isOpen?lvColor:"transparent",transition:"all .2s",boxShadow:isOpen?`0 0 8px rgba(${rgb},0.4)`:"none"}}/>

                {/* Icon bubble with glow */}
                <div style={{
                  width:44,height:44,borderRadius:14,flexShrink:0,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:`linear-gradient(145deg, rgba(${rgb},0.12), rgba(${rgb},0.06))`,
                  border:`1.5px solid rgba(${rgb},0.15)`,
                  boxShadow:`inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 8px rgba(${rgb},0.1)`,
                }}>
                  <BrandIcon name={r.icon} size={22}/>
                </div>

                <div style={{flex:1}}>
                  <div className="hd" style={{fontWeight:700,fontSize:15,color:"var(--gray-800)"}}>{r.title}</div>
                </div>

                {/* Expand chevron with candy style */}
                <div style={{
                  width:28,height:28,borderRadius:10,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:isOpen?`rgba(${rgb},0.1)`:"var(--gray-50)",
                  border:`1.5px solid ${isOpen?`rgba(${rgb},0.2)`:"var(--gray-100)"}`,
                  transition:"all .2s",
                }}>
                  <span style={{fontSize:14,color:isOpen?lvColor:"var(--gray-300)",transition:"transform .25s ease",transform:isOpen?"rotate(180deg)":"none",display:"block",lineHeight:1}}>⌄</span>
                </div>
              </div>

              {/* ── Expanded content ── */}
              {isOpen&&<div className="anim" style={{padding:"0 20px 22px",position:"relative"}}>
                {/* Separator with gradient fade */}
                <div style={{height:1.5,background:`linear-gradient(90deg, transparent, rgba(${rgb},0.15), transparent)`,marginBottom:18}}/>

                {/* Explanation with subtle accent */}
                <div style={{
                  padding:"14px 16px",marginBottom:18,borderRadius:14,
                  background:"var(--purple-bg)",border:"1.5px solid var(--purple-border)",
                  boxShadow:"inset 0 1px 0 rgba(255,255,255,0.6)",
                }}>
                  <p style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,margin:0}}>{r.explanation}</p>
                </div>

                {/* De/Het color legend for Dutch article topics */}
                {r.title.includes("De vs Het")&&ARTICLE_COLORS.de&&<div style={{display:"flex",gap:12,marginBottom:18,flexWrap:"wrap"}}>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.de.pill,borderRadius:16,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.de.pillText}20`,boxShadow:`inset 0 1px 0 rgba(255,255,255,0.5), 0 3px 10px ${ARTICLE_COLORS.de.shadow}30`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.de.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:10,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.de.shadow}, inset 0 1px 0 rgba(255,255,255,0.3)`}}>de</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.de.pillText}}>{t("grammar_common",baseLang)}</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.de.pillText,opacity:0.8}}>≈ 75% {t("grammar_pct_nouns",baseLang)}</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>de man · de vrouw · de tafel · de school</div>
                  </div>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.het.pill,borderRadius:16,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.het.pillText}20`,boxShadow:`inset 0 1px 0 rgba(255,255,255,0.5), 0 3px 10px ${ARTICLE_COLORS.het.shadow}30`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.het.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:10,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.het.shadow}, inset 0 1px 0 rgba(255,255,255,0.3)`}}>het</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.het.pillText}}>{t("grammar_neuter",baseLang)}</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.het.pillText,opacity:0.8}}>≈ 25% {t("grammar_pct_nouns",baseLang)}</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>het huis · het kind · het boek · het water</div>
                  </div>
                </div>}

                {/* ── Rules box (frosted glass with accent bar) ── */}
                {r.rules&&<div style={{
                  borderRadius:16,padding:"18px 20px",marginBottom:18,position:"relative",overflow:"hidden",
                  background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",
                  border:"1.5px solid var(--card-border)",
                  boxShadow:"var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.7)",
                }}>
                  {/* Left accent bar */}
                  <div style={{position:"absolute",left:0,top:12,bottom:12,width:4,borderRadius:"0 3px 3px 0",background:`linear-gradient(180deg, rgba(${rgb},0.6), rgba(${rgb},0.2))`,boxShadow:`0 0 6px rgba(${rgb},0.2)`}}/>

                  <div style={{fontSize:11,fontWeight:700,color:lvColor,textTransform:"uppercase",letterSpacing:1.5,marginBottom:12,paddingLeft:8}}>📋 {t("grammar_rules",baseLang)}</div>
                  {r.rules.map((rule,j)=>{
                    if(rule==="")return <div key={j} style={{height:10}}/>;
                    const isHeader=/^[A-Z\s'""→\-:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                    return(
                      <div key={j} style={{
                        fontSize:isHeader?12:13,
                        color:isHeader?lvColor:"var(--gray-700)",
                        padding:isHeader?"10px 0 4px 8px":"5px 0 5px 8px",
                        lineHeight:1.7,display:"flex",gap:8,
                        fontWeight:isHeader?800:400,letterSpacing:isHeader?0.5:0,
                      }}>
                        {!isHeader&&<span style={{color:lvColor,fontWeight:800,flexShrink:0,fontSize:10,marginTop:4}}>●</span>}
                        <span>{renderRich(rule,lvColor,false)}</span>
                      </div>
                    );
                  })}
                </div>}

                {/* ── Examples box (warm gold glass) ── */}
                {r.examples&&<div style={{
                  borderRadius:16,padding:"18px 20px",position:"relative",overflow:"hidden",
                  background:"var(--gold-bg-light)",
                  border:"1.5px solid rgba(245,166,35,0.12)",
                  boxShadow:"0 2px 10px rgba(245,166,35,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}>
                  {/* Left gold accent bar */}
                  <div style={{position:"absolute",left:0,top:12,bottom:12,width:4,borderRadius:"0 3px 3px 0",background:"linear-gradient(180deg, rgba(245,166,35,0.5), rgba(245,166,35,0.15))",boxShadow:"0 0 6px rgba(245,166,35,0.15)"}}/>

                  <div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:12,paddingLeft:8}}>💬 {t("grammar_examples",baseLang)}</div>
                  {r.examples.map((ex,j)=>
                    <div key={j} style={{
                      fontSize:14,color:"var(--gray-700)",padding:"7px 0 7px 8px",lineHeight:1.7,
                      borderBottom:j<r.examples.length-1?"1px solid rgba(245,166,35,0.08)":"none",
                    }}>{renderRich(ex,lvColor,isArticleTopic)}</div>
                  )}
                </div>}
              </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GrammarPage;
