/*
Lesson: 5.3 Counter Pattern
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 5.3-counter-pattern-v1.ts
  - 5.3-counter-pattern-v2.ts
  - 5.3-counter-pattern-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what the counter pattern is and why it uses a closure.
// the counter patterns allows usage of both scope variable usage and closure,
// where counter is enclosed by the outer function, and the returned inner function has access to it via closure,
// even after the outer function completes execution.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Write a factory that returns a function `inc()` which increments and returns a private `count`.
function factory() {
  let count : number = 0;
  return function inc() {
    return ++count;
  }
}

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Return both `inc` and `get` from the factory and demonstrate independence between two instances.
function factory2() {
  let count : number = 0;
  return {
    inc: () => { return ++count; },
    get: () => count
  }
}

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Explain why two counters created by the same factory do not share `count`.
// if counters were created by 2 separate executions, then they have their own separate scopes

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why is a closure-based counter preferred to a global variable?
// because it is safer, as global variable is accesible globally can have unintended side effects from other unrelated functions.
// Closure encapsulates state,

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `makeCounter(initial?: number)` that returns
// { inc:()=>number, dec:()=>number, get:()=>number, reset:()=>void }
// Keep this base file unchanged.
function makeCounter(initial? : number) {
  let count: number = initial ?? 0;
  return {
    inc: () : number => ++count,
    dec: () : number => --count,
    get: () : number => count,
    reset: (): void => {
      count = initial ?? 0;
    }
  }
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Do multiple instances keep independent state?
// Yes, multiple instance created by different execution has independent states
// - Are private variables inaccessible from outside?
// 

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "The counter pattern uses a closure to keep private state per instance."
// The counter pattern uses a clouse to keep private state per instance.