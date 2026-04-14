/*
Lesson: 4.3 Filter (Select)
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 4.3-filter-select-v1.ts
  - 4.3-filter-select-v2.ts
  - 4.3-filter-select-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what `filter` does.


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Given [0,1,2,3], write the single expression to get [2,3].


// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Given ['a','bb','ccc'], write the single expression to keep only length>1.


// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given
// const items = [{id:1,valid:true},{id:2,valid:false}]
// write the single expression to return only valid items.


// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, why must a predicate return a boolean?


// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `keepAdults(people)` where
// input: Array<{name:string;age:number}>
// output: Array<{name:string;age:number}> containing only ages >= 18


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Did you return a new array (no mutation)?
// - Does your predicate always produce a boolean?
// - Did you avoid misusing map/forEach for selection?


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "`filter` returns a subset of the array where each element passed the predicate."
