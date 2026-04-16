/*
Lesson: 7.1 Create Array of Users
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 7.1-create-array-of-users-v1.ts
  - 7.1-create-array-of-users-v2.ts
  - 7.1-create-array-of-users-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {}

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one sentence, describe why a consistent user shape matters for pipelines.
// It allows predicatable mapping and code execution that does not need defensive checks

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Define a `users` array with at least 3 objects using keys: id, name, age, email, active.
const users = [
  { id: 1, name: "Arvin", age: 36, email: "arvinjaysoncastro@gmail.com", active: true},
  { id: 2, name: "Armel", age: 34, email: "armelsg@gmail.com", active: true},
  { id: 3, name: "Mama Ding", age: 84, email: "ludenciacastro@gmail.com", active: true}
];

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Add one user under 18 and one user with active: false. Describe edge cases you included.
users.push({
  id: 4, name: "Marry", age: 4, email: "marry@gmail.com", active: true
});

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Sketch (in comments) how you'd create a lookup object keyed by `id` from the users array.
// const userLookup = {};
// for (const user of users) {
//   userLookup[user.id] = user;
// }

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Write 1–2 lines: why a numeric `id` is easier to use than a string `id` in this pipeline.
// effcient in memory and faster compared to string and ideal for indexing and lookup operations.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Create `users` with 5 entries following the processing shape. Place your implementation
// in a copied file named `7.1-create-array-of-users-v1.ts` when answering.
users.push({
  id: 5, name: "John", age: 24, email: "john@gmail.com", active: true
});

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Quick checks to run after implementation:
// - `users.length === 5`
// - `users.some(u => u.age < 18)` is true
// - no entry has a missing `name` or `id`
console.log(users.length === 5);
console.log(users.some(u => u.age < 18));
console.log(users.every(u => u.name && u.id));

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// One-sentence line to say: "I prepared a small, consistent users array with edge cases for age and activity."
// I prepared a small consistent users array with edge cases for age and activity.