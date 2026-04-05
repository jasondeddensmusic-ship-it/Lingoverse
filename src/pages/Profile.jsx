import React, { useState } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { VOCAB, ACHS, t } from '../data/vocabulary.js';
import { getLevel, xpNext, xpCurr, clamp } from '../utils.js';
import { AppIcon, BrandIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import GlossyPopup from '../components/GlossyPopup.jsx';
import { getUserCefr } from '../helpers.js';

function Profile({user,lang,baseLang="en",setLang,onLogout,flags=[],setFlags,setPage}){
  const dk=document.documentElement.classList.contains("dark");
  const lv=getLevel(user.xp);
  const c=xpCurr(user.xp),n=xpNext(user.xp);
  const pct=((user.xp-c)/(n-c))*100;
  const L=LANGUAGES.find(l=>l.code===lang);
  const vocab=VOCAB[lang]||[];
  const learnedPct=vocab.length>0?Math.round((user.wl/vocab.length)*100):0;
  const [showManifesto,setShowManifesto]=useState(false);
  const [showAchievements,setShowAchievements]=useState(false);

  return(
    <div className="anim">
      {/* Profile header — purple gradient like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"28px 24px",marginBottom:24,position:"relative",overflow:"hidden",border:"2px solid rgba(255,255,255,0.18)",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",textAlign:"center"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        {/* Settings gear */}
        {setPage&&<button onClick={()=>setPage("settings")} style={{position:"absolute",top:14,right:14,zIndex:3,width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.15)",transition:"all .15s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.25)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.15)";}}
        ><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button>}
        <div style={{position:"relative",zIndex:2}}>
          <div style={{width:88,height:88,borderRadius:24,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.15)"}}><AppIcon name="avatar" size={60}/></div>
          <h2 style={{fontSize:24,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:"0 0 4px",fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_title",baseLang)}</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.75)",margin:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>{t("prof_learning",baseLang)} {L?.native} <CountryFlag code={lang} size={16}/></p>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:20}}>
        {[
          {icon:"lightning_bolt",value:user.xp,label:t("prof_total_xp",baseLang)},
          {icon:"flame",value:`${user.streak} ${t("prof_days",baseLang)}`,label:t("prof_streak",baseLang)},
          {icon:"trophy",value:`${t("prof_level",baseLang)} ${lv}`,label:t("prof_rank",baseLang)},
          {icon:"brain",value:user.wl,label:t("prof_words_learned",baseLang)},
        ].map((s,i)=>(
          <div key={i} style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 16px",textAlign:"center",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
            <div style={{marginBottom:4}}><AppIcon name={s.icon} size={36}/></div>
            <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent)"}}>{s.value}</div>
            <div style={{fontSize:11,color:"var(--gray-500)",textTransform:"uppercase",letterSpacing:1.5,fontWeight:600}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CEFR Level */}
      {(()=>{const cefr=getUserCefr(user,lang);return(
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #7B5EE8 50%, #5840B8 90%, #4A2BA6 100%)",borderRadius:18,padding:"16px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:16,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 14px rgba(123,94,232,0.3), 0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 16px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 10px rgba(0,0,0,0.15)"}}>{cefr.band}</div>
          <div style={{flex:1,position:"relative",zIndex:2}}>
            <div style={{fontSize:14,fontWeight:700,color:"white",marginBottom:2,textShadow:"0 1px 3px rgba(0,0,0,0.2)"}}>CEFR Level: {cefr.level}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.7)"}}>{cefr.label} • {cefr.desc}</div>
          </div>
        </div>
      );})()}

      {/* XP Progress bar */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:16,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)"}}>{t("prof_level",baseLang)} {lv} → {lv+1}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.xp-c} / {n-c} XP</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(pct,2,100)}%`}}/></div>
      </div>

      {/* Vocabulary progress */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:20,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)",display:"flex",alignItems:"center",gap:6}}><AppIcon name="abc_blocks" size={20}/>{t("prof_vocab_progress",baseLang)}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.wl} / {vocab.length}</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(learnedPct,1,100)}%`,background:"linear-gradient(90deg, #A890FF, #7B5EE8)"}}/></div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginTop:6}}>{learnedPct}% {t("prof_of",baseLang)} {L?.native} {t("prof_dict_mastered",baseLang)}</div>
      </div>

      {/* Action buttons row */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
        <button role="button" onClick={()=>setShowAchievements(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="crown" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>{t("prof_achievements_btn",baseLang)}</span>
        </button>
        <button role="button" onClick={()=>setShowManifesto(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="clipboard" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>{t("prof_manifesto_btn",baseLang)}</span>
        </button>
      </div>

      {/* Achievements popup */}
      {showAchievements&&<GlossyPopup title={t("prof_achievements_btn",baseLang)} onClose={()=>setShowAchievements(false)}>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {ACHS.map(a=>{
            const ul=user.achs.includes(a.id);
            return <div key={a.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:14,background:ul?(dk?"rgba(46,205,167,0.1)":"rgba(46,205,167,0.06)"):(dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)"),border:ul?`1.5px solid var(--teal)`:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",opacity:ul?1:0.5}}>
              <div style={{fontSize:24,flexShrink:0}}>{a.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700,color:ul?"var(--teal)":"var(--gray-600)"}}>{t(a.nameKey,baseLang)}</div>
                <div style={{fontSize:11,color:"var(--gray-400)"}}>{t(a.descKey,baseLang)}</div>
              </div>
              <span style={{padding:"3px 10px",borderRadius:8,background:ul?"rgba(46,205,167,0.1)":"rgba(123,94,232,0.06)",color:ul?"var(--teal)":"var(--purple-accent-text)",fontSize:11,fontWeight:700}}>+{a.xp}</span>
            </div>;
          })}
        </div>
      </GlossyPopup>}

      {/* Manifesto popup */}
      {showManifesto&&<GlossyPopup title={t("prof_manifesto_title",baseLang)} onClose={()=>setShowManifesto(false)}>
        <div style={{fontSize:13,lineHeight:1.8,color:"var(--gray-600)"}}>
          <p style={{fontWeight:700,color:"var(--gray-800)",marginBottom:12}}>{t("prof_manifesto_intro",baseLang)}</p>
          {["prof_p1","prof_p2","prof_p3","prof_p4","prof_p5","prof_p6"].map((key,i)=>
            <div key={i} style={{marginBottom:12}}><div style={{fontWeight:700,color:"var(--purple-accent-text)",marginBottom:2}}>{i+1}) {t(key,baseLang)}</div></div>
          )}
        </div>
      </GlossyPopup>}

      {/* Language switcher */}
      <div style={{marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <AppIcon name="globe" size={22}/>
          <h3 style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_switch_lang",baseLang)}</h3>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
          {LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${lang===l.code?"active":""}`} onClick={()=>setLang(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div style={{textAlign:"center",paddingTop:16,borderTop:dk?"2px solid rgba(123,94,232,0.15)":"2px solid rgba(123,94,232,0.06)"}}><button onClick={onLogout} style={{fontSize:14,padding:"12px 32px",borderRadius:14,border:"2px solid var(--coral)",background:"var(--card-bg)",color:"var(--coral)",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{t("profile_logout",baseLang)}</button></div>
    </div>
  );
}

export default Profile;
