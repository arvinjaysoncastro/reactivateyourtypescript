/*
Lesson: 2 Functions
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 2-functions-v1.ts
  - 2-functions-v2.ts
  - 2-functions-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what is a function declaration?
// a function is a named reusable block of code.

// In 1-2 sentences, when is an arrow function useful?
// an arrow function is a compact version usable for callbacks.

// In 1-2 sentences, what does `return` do?
// return inside a function, returns a value to the caller of the function.

// In 1-2 sentences, what makes a function higher-order?
// if it receives a function as a parameter of returns a function.

// ==================================================
// PART 2: SUBTOPIC 1 DRILL
// ==================================================

// Write a function declaration called `greetUser`.
//
// Requirements:
// 1. It must take one string parameter called `name`.
// 2. It must return a greeting string.
// 3. Print the returned result.

function greetUser (name: string) : string {
  let greeting = "Hi, " + name;
  return greeting;
}

console.log(greetUser("Arvin"));

// ==================================================
// PART 3: SUBTOPIC 2 DRILL
// ==================================================

// Create an arrow function called `doubleValue`.
//
// Requirements:
// 1. It must take one number.
// 2. It must return the doubled value.
// 3. Print the result of calling it.

const doubleValue = (num : number) => num * 2 ;
console.log(doubleValue(8));

// ==================================================
// PART 4: SUBTOPIC 3 DRILL
// ==================================================

// Create a function called `getFullName`.
//
// Requirements:
// 1. It must take `firstName` and `lastName`.
// 2. It must return one combined string.
// 3. Store the returned value in a variable.
// 4. Print that variable.

function getFullName (firstName: string, lastName: string) {
  const _fullName : string = firstName + " " + lastName;
  return _fullName;
}

const fullName = getFullName("Arvin Jayson", "Castro");
console.log(fullName);

// ==================================================
// PART 5: SUBTOPIC 4 DRILL
// ==================================================

// Create a higher-order function called `runForEachName`.
//
// Requirements:
// 1. It must take an array of strings.
// 2. It must take a callback function.
// 3. It must run the callback once for each name.
// 4. Use it with an arrow function callback that prints each name.

function runForEachName(strings: Array<string>, callbackFunction: (name: string) => void ) {
  strings.forEach((name) => {
    callbackFunction(name);
  });
}

runForEachName(
  ["Arvin Jayson", "Armel", "Mama Ding"], // strings
  (name: string) => { console.log(name); } // callbackFunction
);

// ==================================================
// PART 6: INTEGRATED FINAL TASK
// ==================================================

// Build a small user formatting flow.
//
// Requirements:
// 1. Write a function declaration called `formatUser` that returns `User: ` plus a name.
// 2. Create an array of user names.
// 3. Create a higher-order function that takes the array and a callback.
// 4. Pass an arrow function callback into it.
// 5. Inside the callback, call `formatUser` and print the returned string.
// 6. Add one short comment explaining how function declaration, arrow function, return value, and callback flow all worked together.

function formatUser (name: string) : string {
  const formattedLabel : string = "User: " + name;
  return formattedLabel;
} 

const userNames : Array<string> = ["Arvin Jayson", "Armel", "Mama Ding"];

function processUserNames (names: Array<string>, callbackFunction: (user: string) => void) {
  names.forEach((name) => {
    callbackFunction(name);
  });
}

processUserNames(userNames, (user: string) => { 
  const returnedValue: string = formatUser(user); 
  console.log(returnedValue);
});



// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. What is the difference between a function declaration and an arrow function?
// a function declaration is a reusable named group of instructions while an arrow function is a compact function expression.
// 2. Why is `return` different from `console.log()`?
// return returns value while console.log prints value as log.
// 3. When do you pass a function instead of calling it?
// you pass a function as parameter or callback function on higher order functions.
// 4. What makes `map()` a higher-order function?
// because it takes a function inside as parameter.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "Functions organize reusable logic.
// Arrow functions keep short callbacks compact, `return` sends data back, and higher-order functions work with other functions."

// Functions organize reusable logic.
// Arrow functions keep short callbacks compact, return sends data back and higher-order functions work with other functions as input or output or both.