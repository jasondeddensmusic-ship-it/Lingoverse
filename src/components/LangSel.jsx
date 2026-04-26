import React from "react";
import { LANGUAGES } from '../data/metadata.js';
import CountryFlag from './CountryFlag.jsx';
import { clickableProps } from '../a11y.js';

function LangSel({selected,onSelect,baseLang}){
  // When Arabic is source, only German has Arabic-source content
  const available=baseLang==="ar"?LANGUAGES.filter(l=>l.code==="de"):LANGUAGES;
  return(
    <div role="radiogroup" aria-label="Language" style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
      {available.map(l=>(
        <div key={l.code} className={`lang-card ${selected===l.code?"active":""}`} {...clickableProps(()=>onSelect(l.code),{label:l.name,role:"radio"})} aria-checked={selected===l.code}>
          <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native" lang={l.code}>{l.native}</div>
        </div>
      ))}
    </div>
  );
}

export default LangSel;
