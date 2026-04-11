/*
Lesson: 1.3 Primitive vs Reference
Attempt: v4
Purpose: Final retry on the last weak spots only

Why this file exists:
- Fix only the remaining wording issue.
- Keep the answers short but complete.
- No extra noise.
*/

export {};

// What is a primitive value in JavaScript?
// Primitive variables like string and numbers when copied creates new instance of data, and editing the first copy does not edit the original.

// What is a reference value in JavaScript?
// reference variables like objects and arrays when copied directly copies the reference and points to the exact same data, thus editing the second variable will reflect to the first variable.

// Why can two variables change together when objects or arrays are involved?
// if you copy an array or object by reference since they point to the same data, one change affects the other variable.

// Write one short comment that explains why the results are different.
// the first one copies by value allowing preserving of either when the other is updated
// while the second one copies by reference so when you update the data since they point to the same data, both variables will reflect the change.