/*
Lesson: 4.1 Array Basics (Focused v1 fixes)
Purpose: Focused exercise file to address exact mistakes from last submission

Rules for this file:
- This file is a focused v1 attempt — only fix the listed weak spots.
- Do not change unrelated sections of the lesson.
- Keep answers below; this file will be graded.
*/

export {};

// ==================================================
// FIX 1: PART 4 — CORRECT use of `map` and typing
// ==================================================
// Given: an array of objects with shape {id:number, score:number}
// Task: produce a new array of objects where each `score` is increased by 10
// Requirements:
// - Use correct TypeScript array typing.
// - Use `map` and ensure the callback returns the new value.
// - Do NOT mutate the original array.
// Write your answer below (no extra explanation required):

// const objectArray: {id:number, score:number}[] = [ /* ... */ ];
// const increasedArray = /* your code */

const objectArray: {id:number, score:number}[] = [{id: 1, score: 2}, {id: 2, score: 2}, {id: 3, score: 2}];

const increasedArray = objectArray.map((x) => {
    return {id: x.id, score: x.score + 10}
});



// ==================================================
// FIX 2: PART 5 — ONE-LINE EXPLANATION
// ==================================================
// Task: In one short sentence, explain why copying an array is important before mutating.

// Answer:
// to preserve the original data of the original array, we must create an updated copy of the array with immutability in mind.


// ==================================================
// FIX 3: PART 6 — IMPLEMENT `topTwo`
// ==================================================
// Task: Implement `topTwo(names: string[]): string[]` returning first two names
// Requirements: do not mutate the input.

// function topTwo(names: string[]): string[] {
//   // your implementation
// }

function topTwo(names: string[]): string[] {
  return [names[0], names[1]];
}

// ==================================================
// FIX 4: PART 3 — SHOW VERIFICATION OUTPUT
// ==================================================
// Task: After performing push + splice on the sample `strings` array, print
// the final array to the console to verify results.

// Example placeholder (fill in and run locally):
// const strings = ['first','second','third'];
// // add and remove
// console.log(strings);

const strings = ['first','second','third'];
const newStrings = [...strings];
strings.push("fourth");
newStrings.splice(2, strings.length - 2);
// add and remove
console.log(newStrings);


// ==================================================
// SELF-CHECK
// ==================================================
// - Did you avoid mutating original arrays? (yes/no)
// - Does `map` return an array of the expected shape? (yes/no)
// yes
// yes