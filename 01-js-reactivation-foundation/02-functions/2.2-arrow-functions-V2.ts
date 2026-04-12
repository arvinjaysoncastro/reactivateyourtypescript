/*
Lesson: 2.2 Arrow Functions
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 2.2-arrow-functions-v1.ts
  - 2.2-arrow-functions-v2.ts
  - 2.2-arrow-functions-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What is an arrow function?
// Write 1-3 sentences below.
// arrow function is a short form of function used best for callbacks or when passing function like for map or setTimeout.

// In your own words:
// When are arrow functions commonly used?
// Write 1-3 sentences below.
// arrow functions are commonly used when passing function as parameters, callback functions.


// In your own words:
// What is one important difference between an arrow function and a regular function?
// Write 1-3 sentences below.
// important difference is for arrow functions when using with object declaration, calling this inside will not reference the object, instead will use the container or browser, but when using typescript it will be undefined.


// ==================================================
// PART 2: DRILL 1
// ==================================================

// Rewrite this idea as an arrow function called printHello.
// When called, it should print: Hello
// Call it two times.

const printHello = () => console.log('Hello');

printHello();
printHello();



// ==================================================
// PART 3: DRILL 2
// ==================================================

// Create an arrow function called formatPrice.
// It must take one parameter called amount.
// It must return a string in this format: $20
// Call it with two different numbers.

const formatPrice = (amount: number) => {
  let currency = "$";
  let fullAmountText = currency + amount;
  return fullAmountText;
};

const firstDollar: string = formatPrice(1);
const firstMillionDOllar : string = formatPrice(1000000);

// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an array called scores with three numbers.
// Use map with an arrow function to create a new array called doubledScores.
// Print doubledScores.
const scores = [100, 100, 100];
const doubledScores = scores.map((score: number) => score * 2);


// ==================================================
// PART 5: DRILL 4
// ==================================================

// In 1-2 lines:
// When would you choose an arrow function instead of a function declaration?
// i use arrow functions for map, setTimeout


// ==================================================
// PART 6: FINAL TASK
// ==================================================

// You have this data:
// const tasks = [
//   { title: "Email client", done: true },
//   { title: "Write report", done: false },
//   { title: "Fix bug", done: true },
// ];
//
// Requirements:
// 1. Create the tasks array.
const tasks = [
  { title: "Email client", done: true },
  { title: "Write report", done: false },
  { title: "Fix bug", done: true },
];
// 2. Use filter with an arrow function to keep only done tasks.
const doneTasks = tasks.filter((task) => { return task.done; });
// 3. Use map with an arrow function to get only the task titles.
const taskTitles = tasks.map((task) => { return { title: task.title }});
const doneTaskTitles = doneTasks.map((task) => { return { title: task.title }});
// instruction ambiguous, creating 2 titles lists
// 4. Print the final array.
console.log(taskTitles);
console.log(doneTaskTitles);

// 5. Add one short comment explaining what the arrow function is doing in either filter or map.
// the arrow function when used on filter will use the passed parameter, do instructions inside and return a boolean value to be used to decide if item will be included or not on the final array.
// the arrow function when used on map will return object to be used as new object for each array items.


// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which drill used one parameter?
// drill 1 using amoount as parameter, drill 2 using score as parameter, part 6 using task as parameter.
// 2. Which drill used an array method?
// drill 3 and part 6
// 3. What happens if you use braces in an arrow function but forget return?
// it will be evaluated as undefined as if returning undefined
// 4. What is one situation where a regular function is better than an arrow function?
// when you'll have to reference this keyword


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "An arrow function is a short function expression.
// It is common in callbacks and array methods.
// If I use braces, I must return the value myself."

// An arrow function is a short function expression
// It is common in callbacks and array methods.
// If I use braces, I must return the value myself.

// An arrow function is a short function expressions
// It is common in callbacks and array methods
// If I use braces, I must return the value myself.

// Arrow functions are short function expressions.
// It is common in callbacks and array methods.
// If I use braces, I must return the value myself.
