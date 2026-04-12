/*
Lesson: 2.2 Arrow Functions
Attempt: v3
Purpose: Correction-only retry

Rules for this file:
- Fix only the weak spots from the previous attempt.
- Do not rewrite the full lesson.
- Keep answers short, precise, and direct.
*/

export {};

// ==================================================
// PART 1: DRILL 3 FIX
// ==================================================

// Create an array called scores with three numbers.
// Use map with an arrow function to create a new array called doubledScores.
// Print doubledScores.
const scores = [100, 200, 300];
const doubledScores = scores.map(score => score * 2);
console.log(doubledScores);



// ==================================================
// PART 2: FINAL TASK FIX
// ==================================================

// You have this data:
// const tasks = [
//   { title: "Email client", done: true },
//   { title: "Write report", done: false },
//   { title: "Fix bug", done: true },
// ];
//
// Fix the final task exactly:
// 1. Keep only done tasks using filter with an arrow function.
// 2. Transform only the done tasks into an array of title strings.
// 3. Print only the final array of strings.
// 4. Add one short comment explaining what the arrow function is doing.

const tasks = [
  { title: "Email client", done: true },
  { title: "Write report", done: false },
  { title: "Fix bug", done: true },
];

// arrow function combined with filter, this will return doneTasks (task.done is true)
const doneTasks = tasks.filter(task => task.done === true);

// arrow function conbined with map, this will return doneTasksTitles (list of object with title property)
const doneTasksTitles = doneTasks.map(doneTask => {title: doneTask.title });
console.log(doneTasksTitles);



// ==================================================
// PART 3: SELF-CHECK FIX
// ==================================================

// Answer these in short comments:
// 1. Which drill used one parameter?
// drill 2
// 2. What happens if you use braces in an arrow function but forget return?
// you must use 'return' to return the intended value, else it will be undefined.
// 3. What is one situation where a regular function is better than an arrow function?
// when defining object methods, using regular functions removes ambiguity when referencing "this"


// ==================================================
// PART 4: MEETING PRACTICE FIX
// ==================================================

// Write this once, cleanly:
// "An arrow function is a short function expression.
// It is common in callbacks and array methods.
// If I use braces, I must return the value myself."

// An arrow function is a short function expression.
// It is common in callbacks and array methods.
// If I use braces, I must return the value myself.