/*
Lesson: 5.2 Inner Function Memory
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 5.2-inner-function-memory-v1.ts
  - 5.2-inner-function-memory-v2.ts
  - 5.2-inner-function-memory-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what a closure is and why inner functions can "remember".


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Write a function `g()` that returns a function always returning 3.


// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Implement `makeAdder(n)` that returns a function adding `n` to its argument.


// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Explain briefly why two functions returned from the same factory share or don't share state.


// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why does closure allow state to persist between calls?


// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `createToggle(initial: boolean)` that returns
// { on:()=>void, off:()=>void, flip:()=>void, isOn:()=>boolean }
// Keep this base file unchanged.


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Does each factory call return independent state?
// - Are private variables inaccessible from the outside?


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "A closure is a function bundled with the variables it remembers."
