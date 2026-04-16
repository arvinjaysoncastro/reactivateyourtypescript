/*
Lesson: 7.2 Filter Adults
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 7.2-filter-adults-v1.ts
  - 7.2-filter-adults-v2.ts
  - 7.2-filter-adults-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {}

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one sentence, explain why explicit type checks in predicates help prevent bugs.
// Explicit type checks in predicates help prevent bugs by ensuring that the logic operates on the expected data types, avoiding unintended behavior caused by implicit type coercion or incorrect assumptions about input values.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Write a simple predicate that returns true for `age >= 18`.
function isAdult(user: { age: number }): boolean {
  return user.age >= 18;
}

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Modify the predicate to also require `active === true`.
function isActiveAdult(user: { age: number; active: boolean }): boolean {
  return user.age >= 18 && user.active === true;
}

// ==================================================
// PART 4: DRILL 3
// ==================================================
// After filtering adults, map to emails. Sketch code in comments.
// const adultEmails = users.filter(isActiveAdult).map(user => user.email);

// ==================================================
// PART 5: DRILL 4
// ==================================================
// In 1–2 lines, explain why a predicate should avoid implicit coercion.
// A predicate should avoid implicit coercion because it can lead to unexpected results and bugs, as values that are not strictly of the expected type may be treated as truthy or falsy, causing the logic to behave incorrectly.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `function filterAdults(users)` in a copied file named
// `7.2-filter-adults-v1.ts` that returns users with numeric `age >= 18`.
function filterAdults(users: Array<{ name: string; age: number; active: boolean }>): Array<{ name: string; age: number; active: boolean }> {
  return users.filter(user => typeof user.age === 'number' && user.age >= 18 && user.active === true);
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Manual checks:
// - numeric age >=18 present
// - string age excluded
// - inactive users excluded if required
// Test cases
const testUsers = [
  { name: "Alice", age: 17, active: true },
  { name: "Bob", age: 18, active: true },
  { name: "Charlie", age: "19", active: true },
  { name: "Dave", age: 20, active: false },
  { name: "Eve", age: 21, active: true }
];

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// One-liner: "I filter users using an explicit numeric-age predicate to avoid coercion bugs."
// I filter users using an explicit numberic-age predicate to avolid coercion bugs.