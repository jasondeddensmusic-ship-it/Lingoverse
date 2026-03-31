import React from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import { getUserCefr } from '../helpers.js';

function Home({user,setPage,lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  return(
    <div className="anim">
      {/* Welcome header — immersive in the target language */}
      <div style={{textAlign:"center",padding:"16px 0 32px"}}>
        <h1 className="hd" style={{fontSize:30,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>{L?.welcomeBack||L?.greeting}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          <span style={{fontSize:18,fontWeight:700,color:"var(--purple-accent-text)"}}>{L?.native}</span>
          <CountryFlag code={lang} size={24}/>
        </div>
      </div>

      {/* 6 Category buttons — continue-button purple */}
      <div className="home-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:14,maxWidth:520,margin:"0 auto"}}>
        {[
          {p:"learn",icon:"books_stack",label:t("home_learn_path",baseLang),desc:t("home_structured",baseLang)},
          {p:"vocabulary",icon:"abc_blocks",label:t("vocab_title",baseLang),desc:t("home_dict_desc",baseLang)},
          {p:"grammar",icon:"clipboard",label:t("grammar_title",baseLang),desc:t("home_grammar_desc",baseLang)},
          {p:"idioms",icon:"chat_bubbles",label:t("idioms_title",baseLang),desc:t("home_idioms_desc",baseLang)},
          {p:"cefr-reference",icon:"globe",label:t("home_cefr_ref",baseLang),desc:t("home_official_lists",baseLang)},
          {p:"curriculum",icon:"brain",label:t("home_curriculum",baseLang),desc:t("home_personal_path",baseLang)},
          {p:"quiz",icon:"checkmark_green",label:t("home_quiz",baseLang),desc:t("home_test_knowledge",baseLang)},
        ].map(c=>{
          const restShadow="0 5px 16px rgba(85,53,181,0.35), 0 2px 4px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.18)";
          const hoverShadow="0 10px 28px rgba(85,53,181,0.45), 0 0 16px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)";
          return(
          <div key={c.p} role="button" className="home-tile" onClick={()=>setPage(c.p)} style={{borderRadius:24,padding:"24px 16px",textAlign:"center",cursor:"pointer",transition:"all .15s, transform 0.15s, box-shadow 0.15s, filter 0.15s",position:"relative",overflow:"hidden",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",border:"none",boxShadow:restShadow}}>
            {/* Candy shine — wide rounded pill */}
            <div style={{position:"absolute",top:0,left:"4%",right:"4%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{marginBottom:8,position:"relative",zIndex:2}}><AppIcon name={c.icon} size={44}/></div>
            <div style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:2,position:"relative",zIndex:2,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{c.label}</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:500,position:"relative",zIndex:2}}>{c.desc}</div>
          </div>);
        })}
      </div>

      {/* Recent progress teaser */}
      <div style={{marginTop:28,textAlign:"center"}}>
        <div className="gloss" style={{display:"inline-flex",gap:16,background:"var(--card-bg)",borderRadius:16,padding:"12px 24px",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)"}}>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightning_bolt" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.xp} XP</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="flame" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.streak} {t("home_day",baseLang)}</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="brain" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.wl} {t("home_words",baseLang)}</strong></span>
          {(()=>{const cefr=getUserCefr(user,lang);return <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="star" size={16}/><strong style={{color:"var(--gray-800)"}}>{cefr.level}</strong></span>;})()}
        </div>
      </div>
    </div>
  );
}

export default Home;
