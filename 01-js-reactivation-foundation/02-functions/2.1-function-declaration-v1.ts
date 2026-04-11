/*
Lesson: 2.1 Function Declaration
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 2.1-function-declaration-v1.ts
  - 2.1-function-declaration-v2.ts
  - 2.1-function-declaration-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What is a function declaration?
// Write 1-3 sentences below.
// A function is a collection of instructions grouped together and may be anonymous or named.
// It allows reusing of same instructions following DRY princples and reduces error and increases maintainability


// In your own words:
// What is a parameter?
// Write 1-3 sentences below.
// A parameter is sent as input to the function (may also be output) which the function can use together with its instructions inside.
// A parameter can also technically be a callback function too.


// In your own words:
// Why are named functions useful?
// Write 1-3 sentences below.
// It allows reusing them by caliing the function name.
// Also having a descriptive function name makes coding more self documenting and easy for teams to use.


// ==================================================
// PART 2: DRILL 1
// ==================================================

// Write a function called printHello.
// When called, it should print: Hello
// Call it two times.

function printHello() {
  console.log("Hello");
}

printHello();
printHello();


// ==================================================
// PART 3: DRILL 2
// ==================================================

// Write a function called printTask.
// It must take one parameter called taskName.
// When called, it should print the task name.
// Call it with two different values.

function printTask(taskName: string) {
  console.log(taskName);
}

printTask("Ace Exam");
printTask("Sign Contract");


// ==================================================
// PART 4: DRILL 3
// ==================================================

// Write a function called announceUser.
// It must take two parameters: name and age.
// When called, it should print one sentence using both values.
// Call it once.

function announceUser(name: string, age: number) {
  let sentence: string = "Hello " + name + ", you are now " + age + " years, blessing.";
  printTask(sentence);
}

announceUser("Arvin Jayson", 36);


// ==================================================
// PART 5: FINAL TASK
// ==================================================

// Create a function called describeBook.
// Requirements:
// 1. It must take two parameters: title and author.
// 2. It must print one sentence using both values.
// 3. Call it two times with different book data.
// 4. Add one short comment explaining what the parameters do.

function describeBook(title: string, author: string) {
  let sentence: string = "The book " + title + " is written by " + author;
  console.log(sentence);
}

describeBook("Joyful Practices", "AO");
describeBook("Bible", "God");

// each parameters are sent to the same functions to be used by the code inside, here we have a variable sentence constructing the sentence using both title and author.
// then the sentence is the one printed (where both title and author are part of the printed message)


// ==================================================
// PART 6: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. What was the name of your function in Drill 1?
// printHello
// 2. Which drill used one parameter?
// printTask
// 3. Which drill used two parameters?
// announceUser, describeBook
// 4. What is the difference between declaring a function and calling it?
// declaring a function is writing the instructions, declaring the paramenters and adding the name of the function (not exact order);
// calling the function is running the set of instructions declared by the function


// ==================================================
// PART 7: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "A function declaration creates a named reusable block of code.
// Parameters let the function receive input.
// The function runs only when it is called."

// A function declaration creates a named reusable block of code.
// Parameters let the function receive input.
// The function runs only when it is called.

// A function declaration creates a named reusable block of code.
// Paramters let the function receive input.
// The function runs only when it is called.

// A function declaration creates a named reusable block of code.
// Parameters let the function receive input.
// The function runs only when it is called.