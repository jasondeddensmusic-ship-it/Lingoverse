import React, { useState, useEffect, Suspense } from "react";
import { LANGUAGES, BASE_LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { getPlacementBank } from '../data/placement-questions/index.js';
import CountryFlag from '../components/CountryFlag.jsx';

const PlacementQuiz = React.lazy(() => import('./PlacementQuiz.jsx'));

function Onboarding({ onComplete }) {
  // steps: "source" | "target" | "placement-choice" | "placement-quiz"
  const [step, setStep] = useState("source");
  const [baseSel, setBaseSel] = useState("en");
  const [targetSel, setTargetSel] = useState(null);

  // Ctrl+S → proceed through the wizard
  useEffect(() => {
    const h = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        if (step === "source" && baseSel) setStep("target");
        else if (step === "target" && targetSel) setStep("placement-choice");
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [step, baseSel, targetSel]);

  // Called when user picks "Skip — start from the beginning"
  function handleSkip() {
    onComplete(baseSel, targetSel, null);
  }

  // Called when PlacementQuiz finishes
  function handlePlacementDone({ level }) {
    onComplete(baseSel, targetSel, level || null);
  }

  // Whether this language has a quiz bank
  const hasBank = targetSel ? !!getPlacementBank(targetSel) : false;

  // ── Step 1: Source language ──
  if (step === "source") return (
    <div className="ob-overlay" style={{ overflowY: "auto", padding: 20 }}>
      <div className="ob-card" style={{ maxWidth: 520 }}>
        <div style={{ width: 76, height: 76, borderRadius: 19, margin: "0 auto 16px", overflow: "hidden", boxShadow: "0 8px 28px rgba(123,94,232,0.25)", position: "relative" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#7B5EE8,#A890FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CountryFlag code={baseSel} size={44} />
          </div>
        </div>
        <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, fontFamily: "'Quicksand',sans-serif" }}>
          {t("ob_i_speak", baseSel || "en")}
        </h2>
        <p style={{ color: "var(--gray-400)", marginBottom: 24, fontSize: 14, fontFamily: "'Nunito',sans-serif" }}>
          {t("ob_choose_native", baseSel || "en")}
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", maxWidth: 460, margin: "0 auto 28px" }}>
          {BASE_LANGUAGES.map(l => (
            <div key={l.code}
              className={`lang-card ${baseSel === l.code ? "active" : ""}`}
              onClick={() => setBaseSel(l.code)}
              style={{ cursor: "pointer", ...(l.rtl ? { direction: "rtl" } : {}) }}>
              <CountryFlag code={l.code} size={32} variant="plain" />
              <div className="name">{l.name}</div>
              <div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue"
          style={{ fontSize: 17, padding: "14px 36px", borderRadius: 16, opacity: baseSel ? 1 : .4, transition: "all .2s" }}
          disabled={!baseSel}
          onClick={() => baseSel && setStep("target")}>
          {t("ob_continue", baseSel || "en")} →
        </button>
      </div>
    </div>
  );

  // ── Step 2: Target language ──
  if (step === "target") return (
    <div className="ob-overlay" style={{ overflowY: "auto", padding: 20 }}>
      <div className="ob-card" style={{ maxWidth: 520 }}>
        <div style={{ width: 76, height: 76, borderRadius: 19, margin: "0 auto 16px", overflow: "hidden", boxShadow: "0 8px 28px rgba(123,94,232,0.25)", position: "relative" }}>
          {targetSel ? (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#7B5EE8,#A890FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CountryFlag code={targetSel} size={44} />
            </div>
          ) : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#7B5EE8,#A890FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 900, color: "#fff", fontFamily: "'Quicksand',sans-serif" }}>?</div>
          )}
        </div>
        <div style={{ marginBottom: 8 }}>
          <button onClick={() => setStep("source")}
            style={{ background: "none", border: "none", color: "var(--purple-accent-text)", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito',sans-serif" }}>
            {baseSel === "ar" ? "→ تغيير اللغة الأم" : "← Change source language"}
          </button>
        </div>
        <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, fontFamily: "'Quicksand',sans-serif" }}>
          {t("ob_i_want_learn", baseSel)}
        </h2>
        <p style={{ color: "var(--gray-400)", marginBottom: 24, fontSize: 14, fontFamily: "'Nunito',sans-serif" }}>
          {t("ob_choose_target", baseSel)}
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", maxWidth: 460, margin: "0 auto 28px" }}>
          {LANGUAGES.filter(l => l.code !== baseSel && (baseSel !== "ar" || l.code === "de")).map(l => (
            <div key={l.code}
              className={`lang-card ${targetSel === l.code ? "active" : ""}`}
              onClick={() => setTargetSel(l.code)}
              style={{ cursor: "pointer" }}>
              <CountryFlag code={l.code} size={32} variant="plain" />
              <div className="name">{l.name}</div>
              <div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue"
          style={{ fontSize: 17, padding: "14px 36px", borderRadius: 16, opacity: targetSel ? 1 : .4, transition: "all .2s" }}
          disabled={!targetSel}
          onClick={() => targetSel && setStep("placement-choice")}>
          {t("ob_continue", baseSel)} {targetSel ? <CountryFlag code={targetSel} size={16} /> : ""}
        </button>
      </div>
    </div>
  );

  // ── Step 3: Placement choice ──
  if (step === "placement-choice") {
    const langName = LANGUAGES.find(l => l.code === targetSel)?.name || targetSel;
    return (
      <div className="ob-overlay" style={{ overflowY: "auto", padding: 20 }}>
        <div className="ob-card" style={{ maxWidth: 480 }}>
          <div style={{ width: 76, height: 76, borderRadius: 19, margin: "0 auto 16px", overflow: "hidden", boxShadow: "0 8px 28px rgba(123,94,232,0.25)" }}>
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#7B5EE8,#A890FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CountryFlag code={targetSel} size={44} />
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <button onClick={() => setStep("target")}
              style={{ background: "none", border: "none", color: "var(--purple-accent-text)", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito',sans-serif" }}>
              ← Change target language
            </button>
          </div>

          <h2 className="hd" style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, fontFamily: "'Quicksand',sans-serif" }}>
            How much {langName} do you know?
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.55, marginBottom: 28, fontFamily: "'Nunito',sans-serif" }}>
            Take a short placement test and we will drop you in at the right level. Or skip and start from the very beginning.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {hasBank ? (
              <button className="btn btn-blue"
                style={{ fontSize: 16, padding: "15px 0", borderRadius: 16, width: "100%" }}
                onClick={() => setStep("placement-quiz")}>
                Take the placement test
              </button>
            ) : (
              <button className="btn btn-blue"
                style={{ fontSize: 16, padding: "15px 0", borderRadius: 16, width: "100%", opacity: 0.5, cursor: "not-allowed" }}
                disabled>
                Placement test (coming soon for {langName})
              </button>
            )}
            <button className="btn btn-outline"
              style={{ fontSize: 15, padding: "14px 0", borderRadius: 16, width: "100%" }}
              onClick={handleSkip}>
              Skip — I am new to {langName}
            </button>
          </div>

          <p style={{ color: "var(--gray-300)", fontSize: 11, marginTop: 16, fontFamily: "'Nunito',sans-serif", textAlign: "center" }}>
            The test takes about 5 minutes and adapts to your level.
          </p>
        </div>
      </div>
    );
  }

  // ── Step 4: Placement quiz ──
  if (step === "placement-quiz") {
    return (
      <Suspense fallback={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <div style={{ width: 36, height: 36, border: "4px solid rgba(123,94,232,0.15)", borderTopColor: "#7B5EE8", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        </div>
      }>
        <PlacementQuiz lang={targetSel} onComplete={handlePlacementDone} />
      </Suspense>
    );
  }

  return null;
}

export default Onboarding;
