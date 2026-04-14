/*
Lesson: 4.1 Array Basics — Integrated Interactive Lesson
Purpose: Teach with guided questions, evaluate minimal answers, and track understanding %.

Rules:
- This file provides short teaching prompts and programmatic evaluators.
- Use `teachStep(n)` to get the brief teaching + question for step `n`.
- Use `evaluateAnswer(n, yourAnswer)` to check the answer programmatically; it returns { correct, feedback, percent }.
- The assistant in chat will mirror these checks when you say "kindly continue".

Usage (example in Node/ts-node):
  import { teachStep, evaluateAnswer } from './4.1-array-basics-integrated';
  console.log(teachStep(1));
  console.log(evaluateAnswer(1, '[2,4,6]'));

This file is a helper — the interactive conversation (chat) will ask the same
guided questions and grade your short answers using the same logic.
*/

export {};

type EvalResult = { correct: boolean; feedback: string; percent: number };

const STEPS = [
  {
    id: 0,
    teach: 'Arrays are ordered collections indexed from 0. Read an item by its index.',
    question: 'In one short line: what index reads the second item of an array?',
    hint: 'Zero-based indexing: first item = 0',
  },
  {
    id: 1,
    teach: '`map` transforms each item and returns a new array; it does not mutate the original by itself.',
    question: 'What is the result of `[1,2,3].map(x => x * 2)`? Answer with a simple array literal.',
    hint: 'Multiply each element by 2',
  },
  {
    id: 2,
    teach: '`forEach` runs a callback for side effects and returns `undefined`.',
    question: 'Does `forEach` return a new array? (true/false)',
    hint: 'Think: is there an array returned from `forEach`?',
  },
  {
    id: 3,
    teach: 'To increase `score` by 10 without mutating: use `map` and return new objects.',
    question: "Given `[{id:1,score:5}]`, what is the mapped result after adding 10 to score? Answer with a JSON-like array literal.",
    hint: 'Expect [{"id":1,"score":15}]',
  },
  {
    id: 4,
    teach: 'Prefer non-mutating copy patterns: `slice` or spread `[...]`.',
    question: "What does `topTwo(['a','b','c'])` return? Answer with an array literal.",
    hint: "First two items: ['a','b']",
  },
];

function normalize(ans: any): string {
  if (ans === null || ans === undefined) return '';
  if (Array.isArray(ans) || typeof ans === 'object') return JSON.stringify(ans);
  return String(ans).trim().toLowerCase();
}

export function teachStep(n: number) {
  const step = STEPS.find(s => s.id === n);
  if (!step) return null;
  return { teach: step.teach, question: step.question, hint: step.hint };
}

export function evaluateAnswer(n: number, answer: any): EvalResult {
  const step = STEPS.find(s => s.id === n);
  if (!step) return { correct: false, feedback: 'Unknown step', percent: 0 };
  const a = normalize(answer);
  switch (n) {
    case 0: {
      const ok = a === '1' || a.includes('strings[1]') || /(^|\D)1(\D|$)/.test(a);
      return { correct: ok, feedback: ok ? 'Correct' : 'Expect index 1 (zero-based).', percent: ok ? 100 : 0 };
    }
    case 1: {
      const ok = a === '[2,4,6]' || a === '2,4,6' || a === '2,4,6' || a.includes('2') && a.includes('6');
      return { correct: ok, feedback: ok ? 'Correct: [2,4,6]' : 'Expect [2,4,6]', percent: ok ? 100 : 0 };
    }
    case 2: {
      const ok = a === 'false' || a === 'no' || a === 'n';
      return { correct: ok, feedback: ok ? 'Correct: forEach does not return a new array.' : 'forEach returns undefined; it does not produce a new array.', percent: ok ? 100 : 0 };
    }
    case 3: {
      const ok = a === '[{"id":1,"score":15}]' || a === '[{"id":1,"score":15}]' || a.includes('15');
      return { correct: ok, feedback: ok ? 'Correct: scores increased by 10.' : 'Expect [{"id":1,"score":15}]', percent: ok ? 100 : 0 };
    }
    case 4: {
      const ok = a === '["a","b"]' || a === "['a','b']" || a === 'a,b' || a.includes('a') && a.includes('b');
      return { correct: ok, feedback: ok ? 'Correct: ["a","b"]' : 'Expect ["a","b"]', percent: ok ? 100 : 0 };
    }
    default:
      return { correct: false, feedback: 'No checker for this step', percent: 0 };
  }
}

// Utility: compute overall understanding from a map of step->percent
export function overallPercent(stepPercents: Record<number, number>) {
  const keys = Object.keys(stepPercents).map(k => Number(k));
  if (keys.length === 0) return 0;
  const sum = keys.reduce((s, k) => s + (stepPercents[k] || 0), 0);
  return Math.round(sum / keys.length);
}

// Short guide for the chat flow (for the assistant):
// 1) Call teachStep(i) and present the short teach + question to the learner.
// 2) Learner answers in chat (short answer). Assistant calls evaluateAnswer(i, answer).
// 3) Assistant responds: mark correct/wrong, give feedback, and show percent for that step.
// 4) When learner says "kindly continue", assistant computes a running overallPercent and decides whether to move on or provide subtle training on weak steps.

// End of integrated helper file

// start here with either q1 or lesson 1