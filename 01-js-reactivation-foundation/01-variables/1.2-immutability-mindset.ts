/*
Lesson: 1.2 Immutability Mindset
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 1.2-immutability-mindset-v1.ts
  - 1.2-immutability-mindset-v2.ts
  - 1.2-immutability-mindset-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What does "immutability" mean in JavaScript?
// Write 1-3 sentences below.


// In your own words:
// Why can direct mutation become risky in real code?
// Write 1-3 sentences below.


// In your own words:
// What is the safer mindset when updating data?
// Write 1-3 sentences below.


// ==================================================
// PART 2: BEFORE VS AFTER
// ==================================================

// Rewrite this mutating example into a safer copy-based update.
// Goal: keep the original object unchanged.
//
// Mutating version:
// const profile = { name: "Ava", city: "Cebu" };
// profile.city = "Manila";
//
// Write your immutable version below.



// ==================================================
// PART 3: ARRAY PRACTICE
// ==================================================

// Start with this array:
// const skills = ["js", "ts"];
//
// Task:
// 1. Create a new array that adds "react".
// 2. Do not mutate the original array.
// 3. Print both arrays.



// ==================================================
// PART 4: OBJECT PRACTICE
// ==================================================

// Start with this object:
// const user = { name: "Mika", active: false };
//
// Task:
// 1. Create a new object where active becomes true.
// 2. Do not mutate the original user object.
// 3. Print both objects.



// ==================================================
// PART 5: FINAL TASK
// ==================================================

// Final task instructions:
// Start with:
// const settings = {
//   theme: "light",
//   notifications: true,
// };
//
// Create a NEW object called updatedSettings so that:
// - theme becomes "dark"
// - notifications stays true
// - the original settings object stays unchanged
// - print both settings and updatedSettings



// ==================================================
// PART 6: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which values stayed unchanged?
// 2. Which values were updated through copying?
// 3. Why is creating a new object or array often safer?
// 4. What would be the mutating version of one of your answers?



// ==================================================
// PART 7: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "Immutability means we prefer creating updated copies
// instead of changing the original data directly.
// That makes behavior easier to predict and debug."