/*
Lesson: 7.3 Map Names
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 7.3-map-names-v1.ts
  - 7.3-map-names-v2.ts
  - 7.3-map-names-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {}

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one sentence, explain why `map` should avoid mutating inputs.
// 'map' should avoid mutating inputs because it is designed to create a new array based on the original,
// and mutating the input can lead to unintended side effects and bugs in the code that relies on the original data.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Map users to an array of `name` strings.
function mapToNames(users: Array<{ name: string; age: number; active: boolean }>): string[] {
  return users.map(user => user.name);
}

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Map users to objects `{ id, displayName }` where `displayName` is `Name (age)`.
function mapToDisplayNames(users: Array<{ id: number; name: string; age: number; active: boolean }>): Array<{ id: number; displayName: string }> {
  return users.map(user => ({
    id: user.id,
    displayName: `${user.name} (${user.age})`
  }));
}

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Given filtered adults, map to emails and produce a CSV string of emails (sketch in comments).
// const adultEmailsCSV = filteredAdults.map(user => user.email).join(',');

// ==================================================
// PART 5: DRILL 4
// ==================================================
// In 1–2 lines, describe how to handle missing `name` or `age` when mapping.
// When mapping, if `name` or `age` is missing, we can provide a default value such as "Unknown" for name and "N/A" for age to ensure that the output remains consistent and informative.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement `function mapNames(users)` in a copied file `7.3-map-names-v1.ts` that
// returns `users.map(u => `${u.name} (${u.age})`)` with safe defaults documented.
function mapNames(users: Array<{ name?: string; age?: number }>): string[] {
  return users.map(user => {
    const name = user.name ?? "Unknown";
    const age = user.age !== undefined ? user.age : "N/A";
    return `${name} (${age})`;
  });
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Checks:
// - output array length equals input length
// - all items are strings
// - original input unchanged
// Test cases
const testUsers = [
  { name: "Alice", age: 30 },
  { name: "Bob" },
  { age: 25 },
  {}
];

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// One-liner: "I use `map` to transform each user into a concise display value without mutating the source."
// I use map to transform each user into a concise display value without mutating the source.
