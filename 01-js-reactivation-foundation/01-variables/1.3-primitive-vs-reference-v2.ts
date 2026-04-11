/*
Lesson: 1.3 Primitive vs Reference
Attempt: v2
Purpose: Targeted polishing pass only

Why this file exists:
- v1 already showed the correct code behavior.
- v2 should fix only the wording and instruction-matching issues.
- Do not redo the sections that were already correct.
*/

export {};

// ==================================================
// PART 1: EXPLANATION POLISH ONLY
// ==================================================

// Rewrite this more clearly in 1-3 sentences:
// What is a primitive value in JavaScript?
// primitives like string, number copy by value and reassigning value to the copy will not reassign value to the original.


// Rewrite this more clearly in 1-3 sentences:
// What is a reference value in JavaScript?
// objects and arrays copy by reference, pointing to the same instance so editing on one variable will affect every one since they use the same instance.


// Rewrite this more clearly in 1-3 sentences:
// Why can two variables change together when objects or arrays are involved?
// because they point by reference, having the same instance just named multiple times so editing one will edit the same instance.


// ==================================================
// PART 2: FINAL COMMENT POLISH ONLY
// ==================================================

// Write one short comment that explains why these results are different:
// - primitive copy example: the original stays unchanged
// - reference copy example: both variables reflect the mutation
// primitive copy by value so editing one does not automatically edit another.
// reference copies are pointing to the same referenced object or array so editing one will reflect to all.


// ==================================================
// PART 3: MEETING POLISH ONLY
// ==================================================

// Write one clean meeting answer in 2-3 lines:
// "What is the difference between primitive and reference assignment?"
// Rules:
// - write it once only
// - no repeated practice lines
// - keep it clear and direct
// primitive copy by value while reference copy by reference pointing to the same instance
// so updating the copied by value (primitive) does not update the original
// while updating the copied by reference (reference) updates the original