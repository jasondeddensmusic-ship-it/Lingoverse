import React, { useState, useEffect } from "react";
import { LANGUAGES, BASE_LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import CountryFlag from '../components/CountryFlag.jsx';

function Onboarding({onComplete}){
  const dk=document.documentElement.classList.contains("dark");
  const [step,setStep]=useState("source"); // source | target
  const [baseSel,setBaseSel]=useState("en");
  const [targetSel,setTargetSel]=useState(null);

  // Ctrl+S → proceed
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(step==="source"&&baseSel){setStep("target");}
        else if(step==="target"&&targetSel) onComplete(baseSel,targetSel);
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[step,baseSel,targetSel]);

  // Step 1: Source language selection
  if(step==="source") return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={baseSel} size={44}/></div>
        </div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4,fontFamily:"'Quicksand',sans-serif"}}>{t("ob_i_speak",baseSel||"en")}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("ob_choose_native",baseSel||"en")}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {BASE_LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${baseSel===l.code?"active":""}`} onClick={()=>setBaseSel(l.code)} style={{cursor:"pointer",...(l.rtl?{direction:"rtl"}:{})}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue" style={{fontSize:17,padding:"14px 36px",borderRadius:16,opacity:baseSel?1:.4,transition:"all .2s"}} disabled={!baseSel} onClick={()=>baseSel&&setStep("target")}>
          {t("ob_continue",baseSel||"en")} →
        </button>
      </div>
    </div>
  );

  // Step 2: Target language selection
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          {targetSel?(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={targetSel} size={44}/></div>
          ):(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:900,color:"#fff",fontFamily:"'Quicksand',sans-serif"}}>?</div>
          )}
        </div>
        <div style={{marginBottom:8}}><button onClick={()=>setStep("source")} style={{background:"none",border:"none",color:"var(--purple-accent-text)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>{baseSel==="ar"?"→ تغيير اللغة الأم":"← Change source language"}</button></div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4,fontFamily:"'Quicksand',sans-serif"}}>{t("ob_i_want_learn",baseSel)}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("ob_choose_target",baseSel)}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {LANGUAGES.filter(l=>l.code!==baseSel).map(l=>(
            <div key={l.code} className={`lang-card ${targetSel===l.code?"active":""}`} onClick={()=>setTargetSel(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue" style={{fontSize:17,padding:"14px 36px",borderRadius:16,opacity:targetSel?1:.4,transition:"all .2s"}} disabled={!targetSel} onClick={()=>targetSel&&onComplete(baseSel,targetSel)}>
          {t("ob_start_learning",baseSel)} {targetSel?<CountryFlag code={targetSel} size={16}/>:""}
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
