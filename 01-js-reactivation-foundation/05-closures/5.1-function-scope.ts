/*
Lesson: 5.1 Function Scope
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 5.1-function-scope-v1.ts
  - 5.1-function-scope-v2.ts
  - 5.1-function-scope-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what function scope and closures are.


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Write a function `g()` that returns a function always returning 3.
// Put your implementation in a version file.


// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Implement `makeAdder(n)` that returns a function adding `n`.


// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Explain briefly why `get` and `set` returned from
// a function that closes over `secret` will share the same `secret` variable.


// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why is `let` safer than `var` for avoiding leaks?


// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `makeCounter()` in your v file:
// returns: { inc:()=>number, dec:()=>number, get:()=>number }
// The counter should keep `count` private via closure.


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Does the returned function access only intended variables?
// - Are you returning a fresh accumulator or private state correctly?


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "Inner functions can access outer variables; closures keep them alive."
