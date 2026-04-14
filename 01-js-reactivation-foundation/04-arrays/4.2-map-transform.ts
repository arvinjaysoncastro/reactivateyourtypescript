/*
Lesson: 4.2 Map (Transform)
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 4.2-map-transform-v1.ts
  - 4.2-map-transform-v2.ts
  - 4.2-map-transform-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain in your own words what `map` does.
// map returns a new array of the transformed elements without updating the current array.


// ==================================================
// PART 2: DRILL 1
// ==================================================
// Small coding drill:
// Given the array [0,1,2], write the single expression that returns ["0","1","2"].
// Place your answer in a version file like `4.2-map-transform-v1.ts` — the base template must not contain solutions.


// ==================================================
// PART 3: DRILL 2
// ==================================================
// Given `const pairs = [{n:1},{n:2}]`, write a single expression using `map`
// that transforms `pairs` into `[1, 2]`.
// Keep this to one expression (no helper functions). Focus on accessing the `n` property.
// Put your answer in `4.2-map-transform-v1.ts`.

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given
// const items = [{id:1,name:'A'},{id:2,name:'B'}]
// write the single expression that returns ['A - 1','B - 2']
// Put your answer in `4.2-map-transform-v1.ts`.

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short explanation: In 1–2 lines, explain why `map` is preferred for transformations.
// transforming safely includes preserving original states which is native behavior of map as it creates a new array of transformed values from original and sends the new array as result.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) a function `formatUsers`:
// input: Array<{id:number;name:string;email:string}>
// output: string[] where each item is "Hi <name> — <email>"
// Build this in your version file. Keep this base file unchanged.
// Put your implementation in `4.2-map-transform-v1.ts`.


// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Checkpoints:
// - Did you return a new array (not mutate original)?
// - Does your callback always return a value for every item?
// - Did you avoid using forEach for the transformation?
// (Answer these in your version file.)

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Short speakable line: "`map` transforms each element and returns a new array of the same length."