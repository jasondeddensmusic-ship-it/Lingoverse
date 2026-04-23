// PlacementQuiz — ceiling-test with forgiveness algorithm.
//
// Algorithm (owner-specified 2026-04-19):
//   - Start at A1.1
//   - Feed baseline questions from each sub-level
//   - Pass threshold per level: 3/5 correct → advance to next sub-level
//   - On every wrong answer: inject 2 reinforcement questions from the same level
//   - When reinforcement is completed (both correct): wrongStreak resets to 0
//   - Hard safety valve: 5 cumulative wrong-without-recovery → terminate
//   - Final level = highest sub-level where threshold was met before terminus
//
// UI follows VerumLingua design spine: frosted glass panel, candy pill
// buttons, teal for correct, coral for wrong, gold accents.

import React, { useState, useMemo } from 'react';
import { getPlacementBank } from '../data/placement-questions/index.js';

const BASELINE_PER_LEVEL = 5;
const PASS_THRESHOLD = 3;
const REINFORCEMENT_COUNT = 2;
const HARD_SAFETY_VALVE = 5;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PlacementQuiz({ onComplete, lang = 'es' }) {
  const bank = getPlacementBank(lang);
  const QUESTIONS_BY_LEVEL = bank ? bank.questionsByLevel : {};
  const LEVEL_ORDER = bank ? bank.levelOrder : ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

  function buildLevelQueue(level) {
    const pool = QUESTIONS_BY_LEVEL[level] || [];
    return shuffle(pool).slice(0, BASELINE_PER_LEVEL);
  }

  function pickReinforcement(level, askedIds) {
    const pool = (QUESTIONS_BY_LEVEL[level] || []).filter(q => !askedIds.has(q.id));
    return shuffle(pool).slice(0, REINFORCEMENT_COUNT);
  }
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [queue, setQueue] = useState(() => buildLevelQueue(LEVEL_ORDER[0]));
  const [askedIds, setAskedIds] = useState(new Set());
  const [levelResults, setLevelResults] = useState({}); // {'A1.1': {correct: 3, total: 5}}
  const [wrongStreak, setWrongStreak] = useState(0);
  const [inReinforcement, setInReinforcement] = useState(false);
  const [reinforcementRemaining, setReinforcementRemaining] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [done, setDone] = useState(false);
  const [finalLevel, setFinalLevel] = useState(null);

  const currentLevel = LEVEL_ORDER[currentLevelIdx];
  const currentQuestion = queue[0];
  const totalAsked = useMemo(() =>
    Object.values(levelResults).reduce((a, b) => a + b.total, 0),
    [levelResults]
  );

  function finalize(reason) {
    // Find the highest level where threshold was passed.
    let highest = null;
    for (const lvl of LEVEL_ORDER) {
      const res = levelResults[lvl];
      if (res && res.correct >= PASS_THRESHOLD) highest = lvl;
    }
    setFinalLevel(highest);
    setDone(true);
    if (onComplete) onComplete({ level: highest, reason, levelResults });
  }

  function handleSubmit() {
    if (selected === null || showFeedback) return;
    setShowFeedback(true);
    const isCorrect = selected === currentQuestion.ans;
    const newAskedIds = new Set(askedIds);
    newAskedIds.add(currentQuestion.id);

    // Update per-level results
    const lvlKey = currentQuestion.level;
    const prev = levelResults[lvlKey] || { correct: 0, total: 0 };
    const newResults = {
      ...levelResults,
      [lvlKey]: { correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }
    };

    // Compute next state (we'll apply after a short delay so feedback is visible)
    setTimeout(() => {
      let newQueue = queue.slice(1);
      let newStreak = wrongStreak;
      let newInReinforcement = inReinforcement;
      let newReinforcementRemaining = reinforcementRemaining;

      if (!isCorrect) {
        newStreak = wrongStreak + 1;
        const reinforcements = pickReinforcement(currentLevel, newAskedIds);
        newQueue = [...reinforcements, ...newQueue];
        newInReinforcement = true;
        newReinforcementRemaining = reinforcements.length;
      } else {
        if (inReinforcement) {
          newReinforcementRemaining = reinforcementRemaining - 1;
          if (newReinforcementRemaining <= 0) {
            // Recovered: streak resets, broad testing continues
            newStreak = 0;
            newInReinforcement = false;
          }
        }
      }

      // Safety valve
      if (newStreak >= HARD_SAFETY_VALVE) {
        setLevelResults(newResults);
        setAskedIds(newAskedIds);
        finalize('safety-valve');
        return;
      }

      // If queue is empty, decide whether to advance or terminate
      if (newQueue.length === 0) {
        const res = newResults[currentLevel] || { correct: 0, total: 0 };
        if (res.correct >= PASS_THRESHOLD) {
          // Advance
          const nextIdx = currentLevelIdx + 1;
          if (nextIdx >= LEVEL_ORDER.length) {
            setLevelResults(newResults);
            setAskedIds(newAskedIds);
            finalize('beyond-b2');
            return;
          }
          const nextLevel = LEVEL_ORDER[nextIdx];
          newQueue = buildLevelQueue(nextLevel);
          setCurrentLevelIdx(nextIdx);
          // Starting a new level: reset reinforcement state
          newInReinforcement = false;
          newReinforcementRemaining = 0;
        } else {
          // Failed to reach threshold at this level → terminate
          setLevelResults(newResults);
          setAskedIds(newAskedIds);
          finalize('level-threshold-missed');
          return;
        }
      }

      setLevelResults(newResults);
      setAskedIds(newAskedIds);
      setQueue(newQueue);
      setWrongStreak(newStreak);
      setInReinforcement(newInReinforcement);
      setReinforcementRemaining(newReinforcementRemaining);
      setSelected(null);
      setShowFeedback(false);
    }, 900);
  }

  if (done) {
    return (
      <div style={S.page}>
        <div style={S.panel}>
          <div style={S.badge}>PLACEMENT COMPLETE</div>
          <h1 style={S.h1}>
            {finalLevel ? `You're at ${finalLevel}` : "Let's start at A1.1"}
          </h1>
          <p style={S.body}>
            Based on {totalAsked} question{totalAsked === 1 ? '' : 's'}, we'll drop you in at
            your best fit. You can always retake this test later.
          </p>
          <div style={S.breakdown}>
            <div style={S.breakdownTitle}>Per-level breakdown:</div>
            {Object.entries(levelResults).map(([lvl, res]) => (
              <div key={lvl} style={S.breakdownRow}>
                <span style={S.breakdownLevel}>{lvl}</span>
                <span style={{
                  ...S.breakdownScore,
                  color: res.correct >= PASS_THRESHOLD ? 'var(--teal-dark)' : 'var(--coral)'
                }}>
                  {res.correct} / {res.total} {res.correct >= PASS_THRESHOLD ? '✓ passed' : '✗ missed'}
                </span>
              </div>
            ))}
          </div>
          <button style={S.primaryBtn} onClick={() => onComplete?.({ level: finalLevel, levelResults })}>
            Start learning at {finalLevel || 'A1.1'}
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div style={S.page}><div style={S.panel}>Loading…</div></div>;
  }

  const progress = {
    level: currentLevel,
    remainingInLevel: queue.filter(q => q.level === currentLevel).length,
    wrongStreak,
    inReinforcement,
  };

  return (
    <div style={S.page}>
      <div style={S.panel}>
        <div style={S.header}>
          <span style={S.badge}>
            {inReinforcement ? 'REINFORCEMENT' : 'PLACEMENT TEST'}
          </span>
          <span style={S.levelChip}>Level: {currentLevel}</span>
        </div>

        <div style={S.progressBar}>
          <div style={{
            ...S.progressFill,
            width: `${Math.min(100, (totalAsked / 25) * 100)}%`
          }} />
        </div>

        <div style={S.questionCount}>
          Question {totalAsked + 1}{inReinforcement ? ` · reinforcing at ${currentLevel}` : ''}
        </div>

        {currentQuestion.stem && (
          <div style={S.stemBubble}>
            <div style={S.stem}>{currentQuestion.stem}</div>
            {currentQuestion.stemSrc && <div style={S.stemSrc}>{currentQuestion.stemSrc}</div>}
          </div>
        )}
        <h2 style={S.question}>{currentQuestion.q}</h2>

        <div style={S.options}>
          {currentQuestion.opts.map((opt) => {
            const isSelected = selected === opt;
            const isCorrectAnswer = opt === currentQuestion.ans;
            let bg = 'var(--white)';
            let border = 'var(--gray-200)';
            let color = 'var(--gray-800)';

            if (showFeedback) {
              if (isCorrectAnswer) {
                bg = 'var(--teal-light)';
                border = 'var(--teal)';
                color = 'var(--teal-dark)';
              } else if (isSelected) {
                bg = 'var(--coral-light)';
                border = 'var(--coral)';
                color = 'var(--coral)';
              }
            } else if (isSelected) {
              bg = 'var(--blue-light)';
              border = 'var(--blue)';
            }

            return (
              <button
                key={opt}
                onClick={() => !showFeedback && setSelected(opt)}
                disabled={showFeedback}
                style={{
                  ...S.optionBtn,
                  background: bg,
                  borderColor: border,
                  color
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleSubmit}
          disabled={selected === null || showFeedback}
          style={{
            ...S.primaryBtn,
            opacity: selected === null || showFeedback ? 0.5 : 1
          }}
        >
          {showFeedback
            ? (selected === currentQuestion.ans ? '✓ Correct' : '✗ Not quite')
            : 'Submit answer'}
        </button>

        <div style={S.meta}>
          Streak: {wrongStreak > 0 ? `${wrongStreak} wrong` : 'clean'}
          {inReinforcement && ` · ${reinforcementRemaining} reinforcement left`}
        </div>
      </div>
    </div>
  );
}

const S = {
  page: {
    minHeight: '100vh',
    padding: '48px 24px',
    background: 'linear-gradient(135deg, var(--bg), var(--blue-pale))',
    fontFamily: "'Nunito', system-ui, sans-serif",
    color: 'var(--gray-800)'
  },
  panel: {
    maxWidth: 560,
    margin: '0 auto',
    padding: '32px 28px 26px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(250,248,255,0.82) 100%)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1.5px solid rgba(255,255,255,0.9)',
    borderRadius: 24,
    boxShadow: '0 20px 60px -10px rgba(123,94,232,0.18), 0 8px 24px -6px rgba(123,94,232,0.12), inset 0 1px 0 rgba(255,255,255,0.7)'
  },
  stemBubble: {
    background: 'linear-gradient(180deg, rgba(250,245,255,0.9) 0%, rgba(240,232,255,0.7) 100%)',
    border: '1.5px solid rgba(123,94,232,0.18)',
    borderRadius: 18,
    padding: '18px 20px',
    marginBottom: 18,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 12px rgba(123,94,232,0.08)'
  },
  stem: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1.45,
    color: '#1a1530',
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
  },
  stemSrc: {
    marginTop: 6,
    fontSize: 13,
    fontStyle: 'italic',
    color: 'var(--gray-500)',
    lineHeight: 1.4
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: 999,
    background: 'var(--teal-light)',
    color: 'var(--teal-dark)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.08em'
  },
  levelChip: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: 999,
    background: 'var(--gold-light)',
    color: 'var(--gold-dark)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.04em'
  },
  progressBar: {
    height: 6,
    background: 'var(--gray-100)',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 8
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, var(--teal), var(--blue))',
    borderRadius: 999,
    transition: 'width 0.4s ease'
  },
  questionCount: { fontSize: 13, color: 'var(--gray-500)', marginBottom: 20 },
  question: {
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif",
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 1.4,
    margin: '0 0 20px',
    color: 'var(--gray-800)'
  },
  options: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 },
  optionBtn: {
    padding: '14px 18px',
    borderRadius: 16,
    border: '2px solid',
    fontFamily: 'inherit',
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.18s ease',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(123,94,232,0.04)'
  },
  primaryBtn: {
    width: '100%',
    padding: '15px 18px',
    borderRadius: 18,
    border: 'none',
    background: 'linear-gradient(180deg, #C0AEF8 0%, #9A7EEE 45%, #7B5EE8 70%, #5840B8 100%)',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.12)'
  },
  meta: { fontSize: 12, color: 'var(--gray-400)', marginTop: 12, textAlign: 'center' },
  h1: {
    fontFamily: 'Quicksand, Nunito, system-ui, sans-serif',
    fontSize: 28,
    fontWeight: 800,
    margin: '8px 0 12px'
  },
  body: { fontSize: 15, lineHeight: 1.5, color: 'var(--gray-600)', marginBottom: 20 },
  breakdown: {
    background: 'var(--gray-50)',
    borderRadius: 'var(--radius)',
    padding: 16,
    marginBottom: 20
  },
  breakdownTitle: { fontSize: 12, fontWeight: 700, color: 'var(--gray-500)', marginBottom: 8, letterSpacing: '0.04em' },
  breakdownRow: { display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--gray-100)' },
  breakdownLevel: { fontWeight: 600, color: 'var(--gray-700)' },
  breakdownScore: { fontWeight: 600 }
};
