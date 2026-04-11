/*
Lesson: 1.1 Const vs Let
Attempt: v3
Purpose: Targeted correction pass only

Why this file exists:
- v2 already had some acceptable answers.
- v3 should include only the parts that still need correction.
- Answer only the remaining weak spots.
*/

export {};

// ==================================================
// PART 1: POLISH ONLY THE WEAK SPOT
// ==================================================

// Rewrite this cleanly in 1-3 sentences:
// What is the difference between reassignment and mutation?
// reassignment is when a variable is given a new value,
// while mutation is when the contents of an object (properties) change value.
// Focus:
// - reassignment = variable gets a new value
// - mutation = same object, but its contents change
// - use simple language



// ==================================================
// PART 2: EXACTNESS FIX ONLY
// ==================================================

// The main code is already correct.
// The missing part from v2 was rule 6.
// Add only what is needed so the final values are printed.
//
// Rules:
// - print projectName
// - print step
// - print mentor

const projectName: string = "Reactivation";
let step: number = 1;
const mentor = { name: "Ava", active: false };

step = 2;
mentor.active = true;
console.log(projectName, step, mentor);


// ==================================================
// PART 3: SELF-CHECK FIX ONLY
// ==================================================

// 4. What was the exact mistake in v1 that you fixed here?
// In v1, the mentor name was "Arvin" instead of "Ava",


// ==================================================
// PART 4: MEETING POLISH ONLY
// ==================================================

// Write one clean meeting answer in 2-3 lines:
// "Why do teams prefer const by default?"
// teams prefer const by default because it helps prevent accidental reassignment of variables.