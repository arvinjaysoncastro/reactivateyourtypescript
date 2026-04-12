/*
Lesson: 2.4 Higher-Order Functions
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 2.4-higher-order-functions-v1.ts
  - 2.4-higher-order-functions-v2.ts
  - 2.4-higher-order-functions-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What is a higher-order function?
// Write 1-3 sentences below.
// is when a function accepts as parameter for input or output another function.


// In your own words:
// What is a callback?
// Write 1-3 sentences below.
// a callback is when a function receives a given function that can be called from inside the function body.


// In your own words:
// What is the difference between passing a function and calling a function?
// Write 1-3 sentences below.
// passing a function is sending the function for use of the receiving function
// calling a function is actually running the function.


// ==================================================
// PART 2: DRILL 1
// ==================================================

// Write a function called runNow.
// It must take one parameter called action.
// action will be a callback function.
// When runNow is called, it should execute action once.
// Call runNow with a callback that prints: Hello

function runNow(action: () => void) : void {
  action();
}

runNow(() => console.log("Hello"));


// ==================================================
// PART 3: DRILL 2
// ==================================================

// Write a function called runThreeTimes.
// It must take one parameter called action.
// It should run the callback three times.
// Call it with a callback that prints: Go
function runThreeTimes(action: () => void) : void {
  let callTime = 3;
  while (callTime != 0) {
    action();
    callTime--;
  }
}

runThreeTimes(() => console.log("Go"));

// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an array called scores with three numbers.
// Use map with a callback to create a new array called doubledScores.
// Print doubledScores.

const scores = [100, 200, 300];

const doubledScores = scores.map(score => { return score * 2; });
console.log(doubledScores);


// ==================================================
// PART 5: DRILL 4
// ==================================================

// In 1-2 lines:
// What makes a function higher-order?
// It should have either at least one of the following true, it accepts a function as parameter or returns a function as return value or both.


// ==================================================
// PART 6: FINAL TASK
// ==================================================

// Create a function called processUsers.
// Requirements:
// 1. It must take two parameters: names and callback.
// 2. names should be an array of strings.
// 3. It must loop through the names.
// 4. It must call callback once for each name.
// 5. Call processUsers with a callback that prints: User: plus the name.
// 6. Add one short comment explaining what the callback is doing.

function processUsers(names: Array<string>, callback: (name: string) => void) {
   names.forEach(name => {
    callback(name);
   });
}

const names : Array<string> = ["Arvin", "Armel", "Mama Ding"];
processUsers(names, (name: string) => {
  const message = "User: " + name;
  console.log(message);
}); // the callback receives a string parameter and prints "User: " + name


// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which drill used a callback parameter?
// Drills 1, 2, 3 and Part 6
// 2. Which drill used map?
// Drill 3
// 3. What is the difference between passing a function and calling it?
// Passing a function is not running it, calling a function runs it
// 4. Why is map a higher-order function?
// because it sends function as parameter for callback


// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "A higher-order function uses another function.
// A callback is a function passed into another function.
// I pass the function first, then the higher-order function decides when to run it."

// A higher-order funciton uses another function.
// A callback is a function passed into another function.
// I pass the function first, then the higher-order function decides when to run it.