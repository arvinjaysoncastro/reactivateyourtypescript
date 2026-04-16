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
// A promise is a placeholder for a result that will ARRIVE LATER, not now.


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Create a Promise that resolves to 5 after 10ms and log it with `.then`.
// const p = new Promise<number>((resolve) =>
//     setTimeout(() => resolve(5), 10)
// );

// p.then(v => console.log("Drill 1 :" + v));

function createPromise() {
  return new Promise<number>((resolve) => 
    setTimeout(() => resolve(5), 10)
  );
}

createPromise().then(v => console.log("Drill 1 : " + v));
// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Write an `async` function that awaits the promise from Drill 1 and returns its double.
// async function wait() {
//   const x = await p;
//   return x * 2;
// }
async function wait() {
  const x = await createPromise();
  return x * 2;
}

wait().then(v => console.log("Drill 2 : " + v));

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given an array of `Promise<number>`, write a single expression that returns a Promise resolving to their sum.
const sum = (arr: Promise<number>[]) =>
  Promise.all(arr).then(nums => nums.reduce((sum, n) => sum + n, 0));

// const sumWithErrors = async (arr: Promise<number>[]) => {
//   const results = await Promise.allSettled(arr);

//   const errors = results.filter(r => r.status === "rejected");
//   if (errors.length) {
//     console.warn("Some promises failed:", errors);
//   }

//   return results
//     .filter(r => r.status === "fulfilled")
//     .reduce((total, r) => total + r.value, 0);
// };
// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, explain why unhandled rejections are dangerous and how to prevent them.
// Unhandled rejections are dangerous because failed async operations can silently break logic,
// or crash process leading to unpredicatable behavior.
// Prevent them by using .catch, try / catch with async await and adding a global unhandledRejection handler as a safety net

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `sumResolved(promises: Promise<number>[]) => Promise<number>`
// Keep this base file unchanged.
export const sumResolved = (promises: Promise<number>[]) : Promise<number> =>
    Promise.allSettled(promises).then(results =>
      results
        .filter(r => r.status === "fulfilled")
        .reduce((total, r) => total + r.value, 0)
    );


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
// A promise is a future value; use then, catch await to handle it
