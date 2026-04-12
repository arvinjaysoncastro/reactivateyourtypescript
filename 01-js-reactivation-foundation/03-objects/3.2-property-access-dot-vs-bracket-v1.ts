/*
Lesson: 3.2 Property Access Dot vs Bracket
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 3.2-property-access-dot-vs-bracket-v1.ts
  - 3.2-property-access-dot-vs-bracket-v2.ts
  - 3.2-property-access-dot-vs-bracket-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what is the difference between dot notation and bracket notation?

// When does dot notation work best?
// dot notation is used to access the object property directly, using dot / period + key, when you know what the key name is.

// When is bracket notation required?
// bracket notation is used to access the object property using string literal or via variable whose value equals to the key.

// ==================================================
// PART 2: DRILL 1
// ==================================================

// Create an object called `book`.
// It should have:
// - title
// - pages
//
// Then print `book.title`.

const book = { title: "Harry Potter", pages: 333 };
console.log(book["title"]);

// ==================================================
// PART 3: DRILL 2
// ==================================================

// Create an object called `book`.
// It should have:
// - title
// - pages
//
// Then:
// 1. print `book["title"]`
// 2. print `book.pages`
// note will use book2 since book is already defined above
const book2 = { title: "Harry Potter", pages: 333 };
console.log(book["title"]);
console.log(book.pages);
// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an object called `settings`.
// It should have:
// - theme
// - language
// - mode
//
// Then:
// 1. store one property name in a variable called `key`
// 2. read that property with bracket notation
// 3. read a different property with dot notation
// 4. print both results
const settings : { theme: string, language: string, mode: string } = { theme: "dark", language: "english", mode: "read" };
let key: keyof typeof settings = "theme";

let theme: string = settings[key];
// how to correct

let language = settings.language;

console.log(theme);
console.log(language);

// ==================================================
// PART 5: DRILL 4
// ==================================================

// Write short comment answers:
//
// 1. Why does `obj.key` not use the variable value inside `key`?
// because it will look for the literal key name "key" instead of the variable value which is "theme", and settings.key does not exist.
// 2. Why is bracket notation useful for dynamic key access?
// because it allows you to use a variable to access the property even before you know the exact key name.

// ==================================================
// PART 6: FINAL TASK
// ==================================================

// Create an object called `user`.
//
// Requirements:
// 1. Include at least 3 properties.
// 2. Print one fixed property with dot notation.
// 3. Store one property name in a variable called `selectedKey`.
// 4. Print that property using bracket notation.
// 5. Print both results.
// 6. Add one short comment explaining why bracket notation was needed.

const user = { name: "Arvin Jayson", age: 36, email: "arvinjaysoncastro@gmail.com" };
console.log(user.name);

const selectedKey: keyof typeof user = "email";
// const selectedKey = "email";
console.log(user[selectedKey]); // if we need selectedKey to be dynamic, we can use bracket notation to access the property value using the variable value as the key name.

console.log(user.name);
console.log(selectedKey);


// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. When should you use dot notation?
// You can use dot noation when you know exactly the property name of object to access.
// 2. When must you use bracket notation?
// You can use bracket notation when you want to access dynamic property thru a name from a variable or dynamic input.
// 3. What does `obj[key]` use: the literal word `key` or the variable value?
// It uses the variable value of key, not "key", unless it is also key = "key".
// 4. Why can `obj.key` give the wrong result in dynamic access?
// because if you are expecting a parameter named differently, which you saved on variable key, and you are not trying to access obj property named key, then the expression will produce undefined.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "Dot notation is best for fixed property names.
// Bracket notation is required when the property name is dynamic."
// Dot notation is best for fixed property names.
// Bracket notation is required when the property name is dynamic.