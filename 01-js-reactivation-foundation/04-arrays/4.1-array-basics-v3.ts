/*
Lesson: 4.1 Array Basics (v3)
Purpose: Focused fixes — show verification, avoid mutating, defensive `topTwo`.

This file is the learner's v3 submission. Keep answers here only.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two lines, explain what an array is and when to use it.
// (answer in your v-file)
// An array is a collection of values.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Create an array with three strings and read the second item.
// (perform in your v-file)
const strings: string[] = ["first", "second", "third"];
console.log(strings[1]);

// ==================================================
// PART 3: DRILL 2 (WRONG AREA - VERIFICATION)
// ==================================================
// Add an item to the end of an array and remove the first item. Show the final array.
// NOTE: previously the return value of `splice` was logged (removed items).
// Paste only the minimal verification code that shows the final array here.

// ANSWER (paste only the corrected verification lines here):
const updatedStrings: string[] = [...strings, "fourth"];
updatedStrings.splice(0, 1);
console.log(updatedStrings);


// ==================================================
// PART 4: DRILL 3 (WRONG AREA - MAP)
// ==================================================
// Given an array of objects `[{id:number, score:number}]`, write code that returns
// a new array of objects with `score` increased by 10. Do not mutate the original array.
// Requirements: correct TypeScript typing and a `map` callback that returns the new value.

// ANSWER (paste only the corrected lines here):
const array: {id:number, score:number}[] = [{id: 1, score: 1}];
const newArray: {id:number, score:number}[] = array.map((x) => {
    return {id: x.id, score: x.score + 10}
});


// ==================================================
// PART 5: DRILL 4
// ==================================================
// In one short sentence, explain why copying an array is important before mutating.
// (answer in one short sentence in your v-file)
// creating an updated copy using spread operator ensures original array is note reassigned.
// ==================================================
// PART 6: FINAL TASK (WRONG AREA - topTwo)
// ==================================================
// Implement `topTwo(names: string[]): string[]` that returns the first two names
// without mutating the input. Provide a minimal, non-mutating implementation.


// ANSWER (paste only your corrected function here):
function topTwo(names: string[]): string[] {
    const updatedNames = [...names];
    return updatedNames.splice(0,1);
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// - Did you change only the minimal lines requested above? (yes/no)
// yes
// - Do your changes avoid mutating originals unless intended? (yes/no)
// yes
// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Say out loud: "An array is an ordered collection; use non-mutating transforms like map to create new arrays."

// An array is an ordered collection; use non-mutating transforms like map to create new arrays.