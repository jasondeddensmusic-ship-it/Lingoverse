import React, { useState } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import { DUTCH_IDIOMS } from '../data/grammar/idioms-dutch.js';
import { GERMAN_IDIOMS } from '../data/grammar/idioms-german.js';

function IdiomsPage({lang,baseLang="en"}){
  const IDIOM_REFS = { nl: DUTCH_IDIOMS, de: GERMAN_IDIOMS };
  const idioms = IDIOM_REFS[lang] || [];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:36,marginBottom:8}}>💬</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("idioms_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("idioms_sub",baseLang)} {LANGUAGES.find(l=>l.code===lang)?.native||""}</p>
      </div>

      {idioms.length===0 && <div style={{textAlign:"center",padding:"40px 20px",background:"var(--card-bg)",borderRadius:20,border:"2px solid var(--gray-100)",marginBottom:24}}>
        <div style={{fontSize:48,marginBottom:12}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>Idioms coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)"}}>Check the CEFR Reference page for expressions by level.</div>
      </div>}

      <div style={{display:"grid",gap:14}}>
        {idioms.map((id,i)=>(
          <div key={i} style={{background:"linear-gradient(145deg, #F8F4FF, #FFF8F4)",borderRadius:20,border:"1.5px solid rgba(123,94,232,0.12)",padding:"20px 22px",boxShadow:"0 3px 12px rgba(0,0,0,0.03)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{padding:"3px 12px",borderRadius:10,background:"var(--purple-flat)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{id.level}</span>
            </div>
            <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:4}}>"{id.trg}"</div>
            <div style={{fontSize:14,color:"var(--teal-dark)",fontWeight:700,marginBottom:2}}>→ {id.src}</div>
            <div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",marginBottom:10}}>Literally: "{id.lit}"</div>
            {id.note&&<div style={{fontSize:13,color:"var(--gray-500)",lineHeight:1.6,background:"rgba(255,255,255,0.6)",borderRadius:12,padding:"10px 14px"}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,verticalAlign:"middle"}}/>{id.note}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IdiomsPage;
