/*
Lesson: 6.4 Simple Error Handling
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 6.4-simple-error-handling-v1.ts
  - 6.4-simple-error-handling-v2.ts
  - 6.4-simple-error-handling-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {}

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain why you must catch promise rejections
// and what a deterministic fallback means.
// You must catch promise rejections to handle failures safely and prevent crashes or unhandled errors.
// A deterministic fallback means returning a predictable, safe value when the operations fail.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Create a small promise that rejects. Show how you'd attach a `.catch()`
// handler to log the error and return a simple fallback value.
Promise.reject()
  .catch((e : Error) => {
    console.log("Error: " + e.message);
  });

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Write an `async` function skeleton that `await`s a promise and uses
// `try { ... } catch (err) { ... }` to handle failure. Describe the return
// shape you would use for success vs fallback.

async function base() : Promise<any> {
  try {
    return await fetch("");
  }
  catch  {
    return null;
  }
}

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Given an array of URLs, sketch (in comments) how you'd `await` them in
// sequence and ensure a single failure provides a fallback for that item
// without stopping the remaining requests.

// for each url
// try: 
// await fetch + parse
// push result
// catch:
// push fallback value
// continue loop (never stop)


// ==================================================
// PART 5: DRILL 4
// ==================================================
// In 1–2 lines, explain why global unhandled rejection handlers shouldn't
// replace local error handling in critical code paths.
// because global are useful for logging
// while local is best to target specific function level errors related to the instruction

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `async function safeFetch(url: string): Promise<any>` that:
// - attempts to fetch and parse JSON
// - on failure returns a deterministic fallback object
// - does not throw for expected network errors
// (When answering, copy this file to `6.4-simple-error-handling-v1.ts` and
// implement the function there.)

async function safeFetch(url: string) : Promise<any>
{
  fetch(url)
    .then((res) => {return res.json()})
    .catch(() => {
      return 0;
    });
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Add 3 quick checks you will run in your head or console to verify behavior:
// - success path returns JSON
// success of fetch
// - network failure returns fallback
// not by default
// - malformed JSON is handled or surfaced intentionally
// true

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Prepare one short sentence you can say: e.g.
// "I handle async failures locally and return a safe fallback so the app keeps working."
// I handle async failures locally and return a safe fallback so the app keeps working.