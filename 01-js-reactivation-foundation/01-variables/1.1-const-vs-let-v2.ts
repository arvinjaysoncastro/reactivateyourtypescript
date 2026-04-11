/*
Lesson: 1.1 Const vs Let
Attempt: v2
Purpose: Polishing pass only

Why this file exists:
- v1 already proved you can write the basic code.
- v2 should focus only on the remaining weak spots.
- Do not redo everything. Fix precision.

Targets for v2:
1. Write a cleaner explanation of let.
2. Write a cleaner explanation of reassignment vs mutation.
3. Correct the final task so the output matches exactly.

Expected improvements from v1:
- clearer wording
- exact instruction matching
- less noise, more precision
*/

export {};

// ==================================================
// PART 1: POLISH THE EXPLANATIONS
// ==================================================

// Rewrite this cleanly in 1-3 sentences:
// What is let?
// Focus:
// - let is for variables that may be reassigned later
// - keep the wording simple
// - avoid broken or extra words
// let is a way to declare a variable that may change its value later.


// Rewrite this cleanly in 1-3 sentences:
// What is the difference between reassignment and mutation?
// Focus:
// - reassignment = variable gets a new value
// - mutation = same object, but its contents change
// - use simple language
// reassignment is when a variable is give a new value
// mutation is when the contents of an object change but the variable still points to the same object.


// Optional bonus:
// Rewrite this more precisely in 1 sentence:
// What happens if you try to reassign a const variable?
// when you try to reassign a const variable, you will get an error because const variables cannot be reassigned after they are declared.


// ==================================================
// PART 2: EXACTNESS DRILL
// ==================================================

// Write code that produces this exact final state:
// projectName = "Reactivation"
// step = 2
// mentor = { name: "Ava", active: true }
//
// Rules:
// 1. projectName must use const.
// 2. step must start at 1 and end at 2.
// 3. mentor must use const.
// 4. Change mentor.active from false to true.
// 5. The mentor name must be exactly "Ava".
// 6. Print the final values.

const projectName: string = "Reactivation";
let step: number = 1;
const mentor = { name: "Ava", active: false };

step = 2; // reassignment
mentor.active = true; // mutation


// ==================================================
// PART 3: SELF-CHECK
// ==================================================

// Answer after you finish:
// 1. Why is step allowed to change?
// because step is declared with let, which allows for reassignment, so we can change its value from 1 to 2.
// 2. Why is mentor.active allowed to change?
// because even if mentor is declared with const, and cannot be reassigned to a new object, we can still change the properties of the object that mentor points to, which is called mutation.
// 3. What would be illegal: changing mentor.active or reassigning mentor?
// reassigning mentor would be illegal because mentor is declared with const
// which means we cannot assign a new value to mentor
// rather we may only change the properties of the object that mentor points to, such as mentor.active, which is legal and allowed.
// 4. What was the exact mistake in v1 that you fixed here?
// kindly enlightnen me, in v1 the mentor name was "Arvin", instead of "Ava" which is the requirement of the instructions.


// ==================================================
// PART 4: MEETING PRACTICE
// ==================================================

// Write one clean meeting answer in 2-3 lines:
// "Why do teams prefer const by default?"
// teams prefer const by default because it helps prevent accidental reassignment of variables,
// which can lead to bugs and unintended consequenes in the code.
// Using const also makes it clear to other developers that the variable shoudnot be reassigned,
// improving both readability and maintainability of the codebase.


