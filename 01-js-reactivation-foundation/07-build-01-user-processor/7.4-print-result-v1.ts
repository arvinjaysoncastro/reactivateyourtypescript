/*
Lesson: 7.4 Print Result
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 7.4-print-result-v1.ts
  - 7.4-print-result-v2.ts
  - 7.4-print-result-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {}

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one sentence, explain why returning a deterministic result shape helps testing.
// Returning a deterministic result shape helps testing because it allows us to make consistent assertions about the output,
// ensuring that our tests are reliable and can accurately verify the expected behavior of the function under various conditions.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Sketch `processor(users)` that filters adult active users and returns their names.
// function processor(users: Array<{ name: string; age: number; active: boolean }>): string[] {
//   return users
//     .filter(user => user.age >= 18 && user.active)
//     .map(user => user.name);
// }  

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Modify `processor` to limit to the first N results (describe how you'd add parameter).
// function processor(users: Array<{ name: string; age: number; active: boolean }>, limit: number): string[] {
//   return users
//     .filter(user => user.age >= 18 && user.active)
//     .slice(0, limit) // Add slice to limit results
//     .map(user => user.name);
// }  

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Return an object `{ count, items }` and describe why `count` is useful.
// function processor(users: Array<{ name: string; age: number; active: boolean }>, limit: number): { count: number; items: string[] } {
//   const filteredUsers = users.filter(user => user.age >= 18 && user.active);
//   const limitedUsers = filteredUsers.slice(0, limit);
//   return {
//     count: limitedUsers.length, // Count is useful for quickly understanding how many items are in the result without needing to check the array length separately.
//     items: limitedUsers.map(user => user.name)
//   };
// }

// ==================================================
// PART 5: DRILL 4
// ==================================================
// In 1–2 lines, explain why `console.log` alone is insufficient for automated checks.
// `console.log` alone is insufficient for automated checks because it requires manual inspection of the output, which can be error-prone and inefficient, whereas automated tests can programmatically verify the correctness of the output against expected results without human intervention.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `function processor(users): { count: number, items: string[] }` in a copied
// file named `7.4-print-result-v1.ts`. The function should not mutate `users`.

function processor(users: Array<{ name: string; age: number; active: boolean }>): { count: number; items: string[] } {
  const filteredUsers = users.filter(user => user.age >= 18 && user.active);
  return {
    count: filteredUsers.length,
    items: filteredUsers.map(user => user.name)
  };
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Quick checks:
// - returns object with `count` and `items`
// - items length equals count
// - handles empty input
// Test cases
const testUsers = [
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 17, active: true },
  { name: "Charlie", age: 25, active: false },
  { name: "David", age: 22, active: true }
];

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// One-liner: "I return a deterministic result object from the processor so we can assert behavior and inspect output."
// I return a deterministic result object from the processor so we can assert behavior and inspect output.