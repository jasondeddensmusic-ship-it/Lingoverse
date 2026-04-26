import React, { useState } from "react";
import { t } from '../data/vocabulary.js';

function DevGate({onAccess}){
  const [code,setCode]=useState("");
  const [error,setError]=useState(false);
  const [shake,setShake]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const handleSubmit=()=>{
    if(code==="koko"){onAccess();}
    else{setError(true);setShake(true);setTimeout(()=>setShake(false),500);setCode("");}
  };
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:dk?"transparent":"linear-gradient(135deg,#F8F6FF 0%,#EDE8FF 50%,#F0EAFF 100%)",fontFamily:"'Nunito','DM Sans','Inter',system-ui,sans-serif",position:"relative",zIndex:1}}>
      <div style={{textAlign:"center",padding:"48px 40px",borderRadius:28,background:dk?"rgba(40,38,60,0.85)":"white",boxShadow:dk?"0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)":"0 20px 60px rgba(123,94,232,0.12), 0 4px 16px rgba(0,0,0,0.04)",maxWidth:360,width:"90%",animation:shake?"shake 0.5s ease":"none"}}>
        <div style={{width:72,height:72,borderRadius:20,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:"0 8px 24px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>
          <span style={{fontSize:36}}>🔑</span>
        </div>
        <h1 style={{fontSize:24,fontWeight:800,color:dk?"#E8E6F0":"#2D2B55",marginBottom:6,fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>{t("dev_lingoverse","en")}</h1>
        <p style={{fontSize:13,color:dk?"#9590B0":"#8B85A8",marginBottom:28,lineHeight:1.5}}>Early access — enter developer code</p>
        <input aria-label={t("dev_access_code","en")} type="password" value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSubmit()} placeholder={t("dev_access_code","en")} autoFocus style={{width:"100%",padding:"14px 18px",borderRadius:14,border:error?`2px solid #F56565`:`2px solid ${dk?"rgba(123,94,232,0.3)":"#E0D8F8"}`,background:dk?"rgba(30,28,50,0.6)":"#FAFAFE",fontSize:16,fontFamily:"inherit",outline:"none",textAlign:"center",letterSpacing:8,color:dk?"#E8E6F0":"#2D2B55",transition:"border .2s",boxSizing:"border-box"}}/>
        {error&&<p style={{fontSize:12,color:"#F56565",marginTop:8,fontWeight:600}}>{t("dev_invalid","en")}</p>}
        <button onClick={handleSubmit} style={{marginTop:20,width:"100%",padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)",transition:"transform .1s",fontFamily:"inherit"}}>{t("dev_enter","en")}</button>
      </div>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}`}</style>
    </div>
  );
}

export default DevGate;
