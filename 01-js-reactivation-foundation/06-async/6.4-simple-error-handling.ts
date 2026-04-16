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

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Create a small promise that rejects. Show how you'd attach a `.catch()`
// handler to log the error and return a simple fallback value.

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Write an `async` function skeleton that `await`s a promise and uses
// `try { ... } catch (err) { ... }` to handle failure. Describe the return
// shape you would use for success vs fallback.

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Given an array of URLs, sketch (in comments) how you'd `await` them in
// sequence and ensure a single failure provides a fallback for that item
// without stopping the remaining requests.

// ==================================================
// PART 5: DRILL 4
// ==================================================
// In 1–2 lines, explain why global unhandled rejection handlers shouldn't
// replace local error handling in critical code paths.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `async function safeFetch(url: string): Promise<any>` that:
// - attempts to fetch and parse JSON
// - on failure returns a deterministic fallback object
// - does not throw for expected network errors
// (When answering, copy this file to `6.4-simple-error-handling-v1.ts` and
// implement the function there.)

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Add 3 quick checks you will run in your head or console to verify behavior:
// - success path returns JSON
// - network failure returns fallback
// - malformed JSON is handled or surfaced intentionally

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Prepare one short sentence you can say: e.g.
// "I handle async failures locally and return a safe fallback so the app keeps working."
