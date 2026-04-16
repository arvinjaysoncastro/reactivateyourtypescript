/*
Lesson: 6.3 Chaining
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 6.3-chaining-v1.ts
  - 6.3-chaining-v2.ts
  - 6.3-chaining-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory how promise chaining preserves sequence.
// Promise chaining preserves sequence because each .then waits for the previous step
// to finish and passes its result to the next.
// Returning a promise from a .then ensures the chanin pauses until that async step completes.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Chain two `.then` calls to increment a number twice.
const result = Promise.resolve(1)
    .then(n => n++)
    .then(n => n++);

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Chain a `.then` that returns a promise which resolves after 10ms with double the input.
const result2 = Promise.resolve(2)
  .then(n => new Promise(resolve =>
    setTimeout(() => resolve(n*2), 10)
  ));

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given an array of functions that return `Promise<number>`, write a single expression that runs them sequentially and returns a Promise<number> with the total sum.
function chainAndSum(fns: (() => Promise<number>)[]) : Promise<Number> {
  return fns.reduce(
    (p, fn) => p.then(sum => fn().then(v => sum + v)),
    Promise.resolve(0)
  );
}

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why must `then` callbacks return a promise when doing async work?
// Because returning a promise ensures the chain waits
// for that async step to finish before continuing.
// If you don't return it, the next .then runs too early and breaks the sequence.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `chainAndSum(promisesFns: Array<() => Promise<number>>): Promise<number>`
// Keep this base file unchanged.
async function chainAndSum2(promisesFns: Array<() => Promise<number>>) : Promise<number> {
  let sum = 0;

  for (const fn of promisesFns) {
    const v = await fn();
    sum += v;
  }

  return sum;
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Did you return the inner promises from `then` callbacks?
// Yes
// - Does the implementation run functions sequentially, not in parallel?
// Yes

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "Return the next promise from `then` to keep chaining and sequence."
// Return the next promise from then to keep chaining and sequence.