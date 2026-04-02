import React, { useState } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { ARTICLE_COLORS, t } from '../data/vocabulary.js';
import { BrandIcon } from '../components/shared.jsx';
import { DUTCH_GRAMMAR } from '../data/grammar/dutch.js';
import { GERMAN_GRAMMAR } from '../data/grammar/german.js';

function GrammarPage({lang,baseLang="en"}){
  const [openLevel,setOpenLevel]=useState("A1");
  const [openRule,setOpenRule]=useState(null);

  // Grammar data — loaded from language-specific modules
  const GRAMMAR_REFS = { nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR };
  const grammarData = GRAMMAR_REFS[lang] || {};
  // Placeholder for languages without grammar data yet
  const noGrammarYet = !GRAMMAR_REFS[lang];

  const levels=["A1","A2","B1","B2","C1","C2"];
  const levelNames={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang),C1:t("level_advanced",baseLang),C2:t("level_mastery",baseLang)};
  const levelColors={A1:"var(--teal)",A2:"var(--blue)",B1:"var(--gold)",B2:"#7B5EE8",C1:"var(--coral)",C2:"var(--gray-600)"};
  const rules=grammarData[openLevel]||[];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:36,marginBottom:8}}>📝</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* Coming soon for languages without grammar data */}
      {noGrammarYet && <div style={{textAlign:"center",padding:"40px 20px",background:"var(--card-bg)",borderRadius:20,border:"2px solid var(--gray-100)",marginBottom:24}}>
        <div style={{fontSize:48,marginBottom:12}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>Grammar reference coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)"}}>Check the CEFR Reference page for grammar constructs by level.</div>
      </div>}

      {/* Level tabs */}
      <div style={{display:"flex",gap:4,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>
        {levels.map(lv=>(
          <button key={lv} onClick={()=>{setOpenLevel(lv);setOpenRule(null);}} style={{padding:"8px 16px",borderRadius:14,border:`2px solid ${openLevel===lv?levelColors[lv]:"var(--gray-200)"}`,background:openLevel===lv?levelColors[lv]:"white",color:openLevel===lv?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>
            {lv}
          </button>
        ))}
      </div>

      <div style={{textAlign:"center",marginBottom:20}}>
        <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600}}>{levelNames[openLevel]} · {rules.length} {t("grammar_topics",baseLang)}</span>
      </div>

      {/* Grammar rules — expandable textbook cards */}
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {rules.map((r,i)=>{
          const isOpen=openRule===i;
          return(
            <div key={i} className="anim" style={{animationDelay:`${i*0.04}s`,background:"var(--card-bg)",borderRadius:20,border:`2px solid ${isOpen?levelColors[openLevel]:"var(--gray-100)"}`,overflow:"hidden",boxShadow:isOpen?"0 6px 20px rgba(0,0,0,0.06)":"0 2px 8px rgba(0,0,0,0.02)",transition:"all .2s"}}>
              {/* Header — always visible */}
              <div onClick={()=>setOpenRule(isOpen?null:i)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",cursor:"pointer"}}>
                <div style={{width:40,height:40,borderRadius:12,background:`${levelColors[openLevel]}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><BrandIcon name={r.icon} size={20}/></div>
                <div style={{flex:1}}>
                  <div className="hd" style={{fontWeight:700,fontSize:15,color:"var(--gray-800)"}}>{r.title}</div>
                </div>
                <span style={{fontSize:18,color:"var(--gray-300)",transition:"transform .2s",transform:isOpen?"rotate(180deg)":"none"}}>⌄</span>
              </div>

              {/* Expanded content — textbook style */}
              {isOpen&&<div className="anim" style={{padding:"0 20px 20px",borderTop:"1.5px solid var(--gray-50)"}}>
                {/* Explanation */}
                <p style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,marginTop:16,marginBottom:16}}>{r.explanation}</p>

                {/* De/Het color legend — shown for article-related topics */}
                {r.title.includes("De vs Het")&&<div style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"}}>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.de.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.de.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.de.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.de.shadow}`}}>de</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.de.pillText}}>{t("grammar_common",baseLang)}</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.de.pillText,opacity:0.8}}>≈ 75% {t("grammar_pct_nouns",baseLang)}</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>de man · de vrouw · de tafel · de school</div>
                  </div>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.het.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.het.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.het.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.het.shadow}`}}>het</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.het.pillText}}>{t("grammar_neuter",baseLang)}</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.het.pillText,opacity:0.8}}>≈ 25% {t("grammar_pct_nouns",baseLang)}</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>het huis · het kind · het boek · het water</div>
                  </div>
                </div>}

                {/* Rules box */}
                {r.rules&&<div style={{background:"linear-gradient(145deg, #F8F9FC, #F4F6FA)",borderRadius:14,padding:"16px 18px",marginBottom:16,border:"1.5px solid rgba(255,255,255,0.55)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:levelColors[openLevel],textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>📋 {t("grammar_rules",baseLang)}</div>
                  {r.rules.map((rule,j)=>{
                    if(rule==="")return <div key={j} style={{height:8}}/>;
                    const isHeader=/^[A-Z\s'""→—:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                    const renderRich=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part.split(/(→)/).map((bit,bi)=>{
                            if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:levelColors[openLevel],fontWeight:800,margin:"0 2px"}}>→</span>;
                            return bit;
                          });
                        });
                      });
                    };
                    return(
                      <div key={j} style={{fontSize:isHeader?12:13,color:isHeader?levelColors[openLevel]:"var(--gray-700)",padding:isHeader?"8px 0 3px":"5px 0",lineHeight:1.6,display:"flex",gap:8,fontWeight:isHeader?800:400,letterSpacing:isHeader?0.5:0}}>
                        {!isHeader&&<span style={{color:levelColors[openLevel],fontWeight:800,flexShrink:0}}>•</span>}
                        <span>{renderRich(rule)}</span>
                      </div>
                    );
                  })}
                </div>}

                {/* Examples box */}
                {r.examples&&<div style={{background:"var(--gold-bg-light)",borderRadius:14,padding:"16px 18px",border:"1.5px solid rgba(245,166,35,0.15)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>💬 {t("grammar_examples",baseLang)}</div>
                  {r.examples.map((ex,j)=>{
                    const isArticleTopic=r.title.includes("De vs Het")||r.title.includes("Articles");
                    // Apply rich text + article coloring
                    const renderRich2=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        if(isArticleTopic){
                          return seg.split(/\b(de|het|De|Het)\b/).map((aseg,ai)=>{
                            const low=aseg.toLowerCase();
                            if(low==="de")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.de.pill,color:ARTICLE_COLORS.de.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            if(low==="het")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.het.pill,color:ARTICLE_COLORS.het.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            return aseg;
                          });
                        }
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part;
                        });
                      });
                    };
                    return <div key={j} style={{fontSize:14,color:"var(--gray-700)",padding:"6px 0",lineHeight:1.7,borderBottom:j<r.examples.length-1?"1px solid rgba(245,166,35,0.1)":"none"}}>{renderRich2(ex)}</div>;
                  })}
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
