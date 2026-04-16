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
// variable declared inside a function are only accessible inside that function (and internal functions to that function).
// closure is ability to see variables declared outside the function.


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Write a function `g()` that returns a function always returning 3.
// Put your implementation in a version file.

function g() {
    let returnValue : number = 3;
    return function() {
        return returnValue;
    }
}

const x = g();
console.log(x());
console.log(x());

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Implement `makeAdder(n)` that returns a function adding `n`.

function makeAdder(adderNumber: number) {
    return function(newNumber: number) : number {
        return adderNumber + newNumber;
    }
}

const addFive = makeAdder(5);
console.log(addFive(3));8
console.log(addFive(6));11
console.log(addFive(9));14


// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Explain briefly why `get` and `set` returned from
// a function that closes over `secret` will share the same `secret` variable.

// because when you hae a factory (function that closes / outer function)
// has a function scoped variable secret
// because get and set are both returned in the same function execution
// they both close over the same secret variable from the function's scope so they reference the same instance

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why is `let` safer than `var` for avoiding leaks?
// let is safer because it is block scoped so variables don't leak outside {} blocks
// var if function scoped and can leak outside {} blocks like if or for causing bugs

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `makeCounter()` in your v file:
// returns: { inc:()=>number, dec:()=>number, get:()=>number }
// The counter should keep `count` private via closure.

function makeCounter() {
    let count: number = 0;
    return {
        inc: () => {
            count++;
            return count;
        },
        dec: () => {
            count--;
            return count;
        },
        get: () => {return count;}
    }
}

const c = makeCounter();
console.log(c.inc());
console.log(c.dec());
console.log(c.get());


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Does the returned function access only intended variables?
// yes
// - Are you returning a fresh accumulator or private state correctly?
// yes


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "Inner functions can access outer variables; closures keep them alive."
// Inner functions can access outer variables, closures keep them alive