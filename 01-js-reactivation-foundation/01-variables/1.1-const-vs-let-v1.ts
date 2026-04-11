/*
Lesson: 1.1 Const vs Let
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 1.1-const-vs-let-v1.ts
  - 1.1-const-vs-let-v2.ts
  - 1.1-const-vs-let-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What is const?
// Write 1-3 sentences below.
// const and let are two ways to declare variables in Javascript.
// const is used for variables with no intention to reassign (CONSTANTS)
// when you declare a variable with const, you must assign it a value, if you try to declare a const variable without a value, you will get a syntax error.
// when you reassign value to const you will get a type error.
// when you define the form using const, you may mutate the properties of the form but not reassign the form as a whole.


// In your own words:
// What is let?
// Write 1-3 sentences below.
// let is used for variables that you intend to reassign later with no restriction on the type of value it can HTMLBodyElement.


// In your own words:
// What is the difference between reassignment and mutation?
// Write 1-3 sentences below.
// reassignment changes the value to a completely new value
// mutation changes the properties of the value, not the value itself, where properties are like pointers.


// In your own words:
// Why do many teams prefer const by default?
// Write 1-3 sentences below.
// so that accidental reassignment does not happen, or they will be notified of it immediately.


// ==================================================
// PART 2: PRACTICE DRILL 1
// ==================================================

// Drill 1 instructions:
// 1. Create one const string called teamName.
// 2. Create one let number called sprintCount.
// 3. Reassign only sprintCount.
// 4. Print both values.
const teamName: string = "You got this";
let sprintCount: number = 36;
sprintCount = 37;
console.log(teamName, sprintCount);



// ==================================================
// PART 3: PRACTICE DRILL 2
// ==================================================

// Drill 2 instructions:
// 1. Create a const object called developer.
// 2. Add these properties:
//    - name
//    - years
// 3. Update only the years property.
// 4. Print the final object.
const developer: { name: string; years: number } = { name: "Arvin", years: 36};
developer.years = 37;
console.log(developer);


// ==================================================
// PART 4: FINAL TASK
// ==================================================

// Final task instructions:
// Write code that produces this final state:
// projectName = "Reactivation"
// step = 2
// mentor = { name: "Ava", active: true }
//
// Rules:
// 1. projectName must use const.
// 2. step must start at 1 and end at 2.
// 3. mentor must use const.
// 4. Change mentor.active from false to true.
// 5. Print the final values.
const projectName: string = "Reactivation";
let step: number = 1;
step = 2;
const mentor: { name: string; active: boolean } = { name: "Arvin", active: false };
mentor.active = true;

console.log(projectName, step, mentor);


// ==================================================
// PART 5: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which variables used const?
// teamName, developer, projectName, mentor
// 2. Which variable used let, and why?
// sprintCount, step, because they are to be reassigned values later in the code.
// 3. Which line was mutation?
// line 78 for developer.years and line 102 for mentor.active
// 4. Which line was reassignment?
// line 61 for sprintCount, line 100 for step
// 5. What would fail if you tried to reassign a const variable?
// you will have a type error beacuse const variables cannot be reassigned, actual error message is "Cannot assign to 'variableName' because it is a constant."


// ==================================================
// PART 6: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "const prevents reassignment of the variable binding.
// const prevents reassignnment of the variable binding
// const prevents reassignment of the variable binding
// const prevents reassignment of the variable binding
// let allows reassignment.
// let allows reassignment
// let allows reassingment
// let allows reassignment
// A const object can still have its properties mutated."
// A const object can still have its properties mutated
// A const object can still have its properties mutated
// A const object can still have its properties mutated

// const prevents reassignment of the variable bindigns
// let allows reassignement
// a const object can still have its properties mutated