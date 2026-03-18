import { useState, useCallback } from 'react';
import { course } from '../data';
import { useProgress } from '../context/ProgressContext';
import type { QuizQuestion } from '../types';

/* ── map final-test questions to the most relevant module ── */
const finalTestModuleMap: Record<string, number> = {
  'ft-1':  5,  // typeof typeof → Type Coercion
  'ft-2':  2,  // var/setTimeout loop → Closures & Hoisting
  'ft-3':  5,  // [1,2,3].map(parseInt) → Type Coercion
  'ft-4':  16, // never exhaustive → Type Guards & Narrowing
  'ft-5':  7,  // Promise chain → Promises & Async/Await
  'ft-6':  14, // Partial / Required → Advanced Types
  'ft-7':  5,  // 0.1 + 0.2 → Type Coercion
  'ft-8':  2,  // TDZ → Scope, Closures & Hoisting
  'ft-9':  16, // never return type → Type Guards & Narrowing
  'ft-10': 5,  // [] == false → Type Coercion
  'ft-11': 10, // Proxy vs defineProperty → Proxy & Reflect
  'ft-12': 9,  // Generator spread → Iterators & Generators
  'ft-13': 14, // Branded types → Advanced Types
  'ft-14': 8,  // Event loop order → Event Loop & Microtasks
  'ft-15': 14, // Conditional type distribution → Advanced Types
  'ft-16': 7,  // Promise.all → Promises & Async/Await
  'ft-17': 13, // satisfies → TypeScript Fundamentals
  'ft-18': 11, // WeakMap GC → WeakRef, WeakMap & Memory
  'ft-19': 12, // ESM live bindings → Module Systems
  'ft-20': 14, // Parameters<T> → Advanced Types
};

function getSourceModule(questionId: string): { number: number; title: string } | null {
  // Module test questions follow the pattern "modN-qM"
  const moduleMatch = questionId.match(/^mod(\d+)-q/);
  if (moduleMatch) {
    const idx = parseInt(moduleMatch[1], 10) - 1;
    const mod = course.modules[idx];
    if (mod) return { number: idx + 1, title: mod.title };
  }
  // Final test questions are mapped explicitly
  const modNum = finalTestModuleMap[questionId];
  if (modNum) {
    const mod = course.modules[modNum - 1];
    if (mod) return { number: modNum, title: mod.title };
  }
  return null;
}

function getAllQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  for (const mod of course.modules) {
    questions.push(...mod.test);
  }
  questions.push(...course.finalTest);
  return questions;
}

const allQuestions = getAllQuestions();

function pickRandom(): QuizQuestion {
  return allQuestions[Math.floor(Math.random() * allQuestions.length)];
}

interface Props {
  onClose: () => void;
}

export function RandomQuestion({ onClose }: Props) {
  const { dispatch } = useProgress();
  const [question, setQuestion] = useState<QuizQuestion>(pickRandom);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showStreakEnd, setShowStreakEnd] = useState(false);
  const [endedStreak, setEndedStreak] = useState(0);

  const next = useCallback(() => {
    setQuestion(pickRandom());
    setSelected(null);
    setRevealed(false);
    setShowStreakEnd(false);
  }, []);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === question.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: true, streak: newStreak } });
    } else {
      setEndedStreak(streak);
      setShowStreakEnd(true);
      setStreak(0);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: false, streak: 0 } });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="rq-question">{question.question}</h3>
        {!showStreakEnd && (
          <>
            <div className="rq-options">
              {question.options.map((opt, i) => {
                let cls = 'option';
                if (selected === i) cls += ' selected';
                if (revealed) {
                  if (i === question.correctAnswer) cls += ' correct';
                  else if (selected === i) cls += ' incorrect';
                }
                return (
                  <button key={i} className={cls} onClick={() => handleSelect(i)}>{opt}</button>
                );
              })}
            </div>
            {revealed && selected === question.correctAnswer && (
              <>
                <p className="rq-explanation">{question.explanation}</p>
                {(() => { const src = getSourceModule(question.id); return src ? <p className="rq-source">📖 Covered in <strong>Module {src.number}: {src.title}</strong></p> : null; })()}
                <div className="rq-actions">
                  <span className="rq-streak">🔥 Streak: {streak}</span>
                  <button className="btn btn-primary" onClick={next}>Next Random Question →</button>
                </div>
              </>
            )}
          </>
        )}
        {showStreakEnd && (
          <div className="rq-streak-end">
            {endedStreak > 0
              ? <p>Incorrect. However, that was <strong>{endedStreak}</strong> correct answer{endedStreak !== 1 ? 's' : ''} in a row. Congrats!</p>
              : <p>Incorrect.</p>}
            <p className="rq-explanation">{question.explanation}</p>
            {(() => { const src = getSourceModule(question.id); return src ? <p className="rq-source">📖 Review <strong>Module {src.number}: {src.title}</strong></p> : null; })()}
            <button className="btn btn-primary" onClick={next}>Continue →</button>
          </div>
        )}
      </div>
    </div>
  );
}
