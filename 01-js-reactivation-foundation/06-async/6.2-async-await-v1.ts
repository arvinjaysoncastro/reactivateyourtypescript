/*
Lesson: 6.2 Async Await
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 6.2-async-await-v1.ts
  - 6.2-async-await-v2.ts
  - 6.2-async-await-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what `async` and `await` do.
// async makes a funciton return a promise
// await pauses the function execution until the promise returns

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Convert a `.then` chain that returns 4 into an `async` function that returns 4.
async function getFour() {
  return 4;
}

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Implement `doubleAfter(ms,n)` that awaits a delay then returns `n*2`.
async function doubleAfter(ms: number, n: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, ms));
  return n * 2;
}

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given an array of URLs, write a single expression that fetches and parses all JSON responses using `await` and `Promise.all`.

function loadUrls(urls: string[])  {
  return Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
  );
}

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why wrap `await` in `try/catch`?
// Because an awaited promise can reject (throw an error), and try/catch lets you handle that failure safely instead of crashing or creating an unhandled rejection.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `fetchAndSum(urls: string[])` that returns a Promise<number>
// summing numeric JSON results from each URL. Keep this base file unchanged.
async function fetchAndSum(urls: string[]) : Promise<number>{
  const promiseResults = await Promise.allSettled(
    urls.map(url => fetch(url).then(res => res.json()))
  );

  const promiseResultsFulfilled = promiseResults.filter(pr => pr.status === "fulfilled");
  const sumPromiseResultsFulfilled = promiseResultsFulfilled.reduce((acc, c) => acc + c.value, 0);
  return sumPromiseResultsFulfilled;
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Are awaited calls wrapped or documented for error handling?
// not by default, you need to wrap them in try catch
// - Do you return a Promise from the async function?
// Yes

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "`await` pauses the async function until its promise settles; `async` makes the function return a Promise."
// await pauses the aysnc function until its promise settles; async makes the function return a Promise.