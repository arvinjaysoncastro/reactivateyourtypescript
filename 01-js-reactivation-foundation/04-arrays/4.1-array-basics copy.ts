/*
Lesson: 4.1 Array Basics
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 4.1-array-basics-v1.ts
  - 4.1-array-basics-v2.ts
  - 4.1-array-basics-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two lines, explain what an array is and when to use it.
// an array contains collection of primitives, objects or arrays.
// you can access the contents of the array in 0 based index.
// you use array to house collecctions like data returned from a function returning a collection.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Create an array with three strings and read the second item.
const strings: Array<string> = [
    "first", "second", "third"
];

console.log(strings[1]); // second item is accessed by 2-1 = 1 strings[1] since arrays in javascript uses 0 based indexing

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Add an item to the end of an array and remove the first item. Show the final array.
strings.push("fourth");
strings.splice(0, 1); // starting from the first (0 based index), remove 1 item

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Given an array of objects `[{id:number,score:number}]`, write code that returns
// a new array of scores increased by 10. Do not mutate the original array.
const objectArray : [{id:number, score:number}] = [{id: 1, score: 1}];
const scores = objectArray.map(item => item.score + 10);

// ==================================================
// PART 5: DRILL 4
// ==================================================
// In one short sentence, explain why copying an array is important before mutating.
// copying an array (immutability) before mutating ensures preserving original values of the array

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `topTwo(names: string[]): string[]` that returns the first two names
// without mutating the input.
function topTwo(names: string[]) : string[] {
    if(names.length >= 2) {
        let topTwoNames = [...names];
        topTwoNames = topTwoNames.splice(2, topTwoNames.length - 2);
        return topTwoNames;
    }
    else {
        throw Error("names array should have at least 2.");
    }
};

const names = ["first", "second", "third"];
console.log(topTwo(names));

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Check 1: Did you avoid mutating the original arrays?
// Yes, to preserve original value, first we created a non reference copy using spread operator
// Check 2: Do all functions return new arrays where appropriate?
// there may be functions that by design update the array input

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Say out loud: "An array is an ordered collection; use non-mutating transforms like map to create new arrays."
// An array is an ordered collection, use non-mutating transforms like map to create new arrays.