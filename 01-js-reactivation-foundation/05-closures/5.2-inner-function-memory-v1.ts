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
// Closure is when a function can access variables from its outer scope even when the outer function has finished executing
// Inner functions remember  because they keep a reference to the lexical environment where they were cerated

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Write a function `g()` that returns a function always returning 3.
function g() {
    const returnValue : number = 3;
    return function() {
      return returnValue;
    }
}

const make3Factory = g();
console.log(make3Factory());

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Implement `makeAdder(n)` that returns a function adding `n` to its argument.

function makeAdder(n: number) {
  return function(newNumber: number) : number{
    return newNumber + n;
  }
}

const makeAdderFive = makeAdder(5);
console.log(makeAdderFive(5));// 10
console.log(makeAdderFive(5));// 10
console.log(makeAdderFive(5));// 10

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Explain briefly why two functions returned from the same factory share or don't share state.
// if two functions share the same factory execution, they will share the same root level scoped variables,
// but they won't share their internal scoped variables.
// factory from different executions don't share state.


// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why does closure allow state to persist between calls?
// closure allows state to persist because the inner function keeps a reference to variable in its outer scope
// even after the outer function has finished executing.
// this retained reference let the same variable instance be accessed and updated across multiple calls.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `createToggle(initial: boolean)` that returns
// { on:()=>void, off:()=>void, flip:()=>void, isOn:()=>boolean }
// Keep this base file unchanged.
function createToggle(initial: boolean) {
  let switchState : boolean = initial;
  return {
    on: () => {switchState = true; return switchState;},
    off: () => {switchState = false; return switchState;},
    flip: () => {switchState = !switchState; return switchState;},
    isOn: () : boolean => switchState
  }
}


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Does each factory call return independent state?
// no, it retains the same state upon creation. Alhtough it has its independent state if you create another execution.
// - Are private variables inaccessible from the outside?
// using let, no as they are block scoped

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "A closure is a function bundled with the variables it remembers."
// A closure is a function bundled with the variables it remembers.