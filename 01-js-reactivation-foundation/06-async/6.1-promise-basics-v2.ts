/*
Lesson: 6.1 Promise Basics
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 6.1-promise-basics-v1.ts
  - 6.1-promise-basics-v2.ts
  - 6.1-promise-basics-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what a Promise is.
// a Promise is a container for a result of a value that may return later.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Create a Promise that resolves to 5 after 10ms and log it with `.then`.
const p = new Promise<number>
(
  (resolve, reject) => {
    setTimeout(() => resolve(5), 10);
  }
);

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Write an `async` function that awaits the promise from Drill 1 and returns its double.
async function getValue() {
  const v : number = await p;
  return v * 2;
}

const actualValue : number = await getValue();

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given an array of `Promise<number>`, write a single expression that returns a Promise resolving to their sum.
const arr = (promises: Promise<number>[]) => {
  let settledPromises = Promise.allSettled(promises).then(
    results => 
      results
        .filter(r => r.status === "fulfilled")
        .reduce((sum, r) => sum + r.value, 0)
  )
  return settledPromises;
};

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, explain why unhandled rejections are dangerous and how to prevent them.
// because they fail silently and may produce unexpected behavior and logic producing bugs.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `sumResolved(promises: Promise<number>[]) => Promise<number>`
// Keep this base file unchanged.
async function sumResolved(promises: Promise<number>[]) : Promise<number> {
  const allResult = await Promise.allSettled(promises);
  const filteredResult = allResult.filter(r => r.status === "fulfilled");
  const sumFilteredResult = filteredResult.reduce((sum, fr) => sum + fr.value, 0); 
  return sumFilteredResult;
};

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Did you return a Promise from async functions?
// Yes
// - Did you handle rejections or provide documentation for callers?
// Yes


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "A promise is a future value; use `then`/`catch` or `await` to handle it."
// A promise is a future value, use then, catch or await to handle it.