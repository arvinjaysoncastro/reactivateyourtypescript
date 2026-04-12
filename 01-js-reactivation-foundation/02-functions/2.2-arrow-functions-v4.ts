/*
Lesson: 2.2 Arrow Functions
Attempt: v4
Purpose: Final correction-only retry

Rules for this file:
- Fix only the last remaining weak spot.
- Do not rewrite the full lesson.
- Keep the answer short and precise.
*/

export {};

// ==================================================
// FINAL TASK ONLY
// ==================================================

// You have this data:
// const tasks = [
//   { title: "Email client", done: true },
//   { title: "Write report", done: false },
//   { title: "Fix bug", done: true },
// ];
//
// Fix only these points:
// 1. Keep only done tasks using filter with an arrow function.
// 2. Use map to return only title strings from the done tasks.
// 3. Print only the final array of strings.
// 4. Add one short comment explaining what the map arrow function returns.


const tasks = [
  { title: "Email client", done: true },
  { title: "Write report", done: false },
  { title: "Fix bug", done: true },
];

const doneTasks = tasks.filter( task => { return task.done === true; }); // filters done is true tasks only

const doneTaskTitles = doneTasks.map( task => { return task.title; }); // returns list of titles strings not object with title only

console.log(doneTaskTitles);