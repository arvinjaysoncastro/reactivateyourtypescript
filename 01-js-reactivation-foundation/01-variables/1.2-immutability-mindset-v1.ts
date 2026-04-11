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
// immutability in JavaScript means preference in creating new copies of data instead of changing the original data directly
// the reason for this is that immutability makes the behavior of the code easier to predict and debug
// because when we change data directly, it can lead to unintended consequences and make it harder to track down bugs
// while when we create new copies of data, we can keep the original data unchanged and have a clear history of changes,
// which makes it easier to understand how the data is being updated and debug any issues that may arise.


// In your own words:
// Why can direct mutation become risky in real code?
// Write 1-3 sentences below.
// direct mutation is risky because you lose the original data, and if other parts of the code rely on that original data,
// it can lead to unexpected behavior.


// In your own words:
// What is the safer mindset when updating data?
// Write 1-3 sentences below.
// the safer mindset when updating data is to prefer creating new copies of data instead of changing the original data directly.


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
const profile = {name: "Ava", city: "Cebu" };
const updatedProfile = { ...profile, city: "Manila" };


// ==================================================
// PART 3: ARRAY PRACTICE
// ==================================================

// Start with this array:
const skills = ["js", "ts"];
//
// Task:
// 1. Create a new array that adds "react".
// 2. Do not mutate the original array.
// 3. Print both arrays.
const updatedSkills = [...skills, "react"];
console.log(skills);
console.log(updatedSkills);



// ==================================================
// PART 4: OBJECT PRACTICE
// ==================================================

// Start with this object:
const user = { name: "Mika", active: false };
//
// Task:
// 1. Create a new object where active becomes true.
// 2. Do not mutate the original user object.
// 3. Print both objects.
const updatedUser = { ...user, active: true };
console.log(user);
console.log(updatedUser);



// ==================================================
// PART 5: FINAL TASK
// ==================================================

// Final task instructions:
// Start with:
const settings = {
  theme: "light",
  notifications: true,
};
//
// Create a NEW object called updatedSettings so that:
// - theme becomes "dark"
// - notifications stays true
// - the original settings object stays unchanged
// - print both settings and updatedSettings
const updatedSettings = { ...settings, theme: "dark" };
console.log(settings, updatedSettings);



// ==================================================
// PART 6: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which values stayed unchanged?
// line 56: profile, 65: skills, 82: user, 100: settings
// 2. Which values were updated through copying?
// updatedProfile.city, updatedSkills adding "react", updatedUser.active, settings.theme
// 3. Why is creating a new object or array often safer?
// becuase the original data remains unchanged which helps prevent unintended consequences and makes it easier to track changes and debug
// 4. What would be the mutating version of one of your answers?
// for example we can do settings.theme = "dark" which would mutate the original settings object instead of creating a new one.


// ==================================================
// PART 7: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "Immutability means we prefer creating updated copies
// instead of changing the original data directly.
// That makes behavior easier to predict and debug."

// Immutability means we prefer creating updated copies
// instead of changing the original data directly.
// That makes behavior easier to predict and debug.

// Immmutability means we prefer creating updated copies
// instead of changing the original data directly.
// That makes behavior easier to predict and debug.

// Immutability maens we prefer creating updated copies
// instead of changing the original data directly.
// That makes behavior easier to predict and debug.