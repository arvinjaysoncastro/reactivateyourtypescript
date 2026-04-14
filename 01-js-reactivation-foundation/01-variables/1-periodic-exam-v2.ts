/*
Lesson: 1 Variables Periodic Exam
Purpose: Correction-only attempt file

Rules for this file:
- This file fixes only the weak spots from v1.
- Your answer files can be named like:
  - 1-periodic-exam-v1.ts
  - 1-periodic-exam-v2.ts
  - 1-periodic-exam-v3.ts
- Assessment will happen on the v files.
*/

export {};

// ==================================================
// PART 1: PRECISION RECALL
// ==================================================

// Rewrite these with exact terms.

// 1. In 1-2 sentences, explain the difference between `const` and `let`.
// Use the word `binding` correctly.
// const protects the data of primities and bindings of objects and arrays.
// let allows reassigning of data of primitives and objects and arrays.

// 2. In 1-2 sentences, explain the difference between primitive values and reference values.
// Use the phrases `copied value` and `shared reference`.
// primitives like string and number are copied by value so updating the copy DOES NOT reflect to the original.
// while objects and arrays are copied by shared reference, so updating the copy DOES reflect ot the original

// ==================================================
// PART 2: MIXED APPLICATION FIX
// ==================================================

// Re-do the mixed `settings` task from v1.
//
// Requirements:
// 1. Use `const` and `let` appropriately.
// 2. Show one safe copy-based object update.
// 3. Print the original object, the updated object, and the `let` value.
// 4. Add one short comment explaining whether the original object changed or not.

const settings = {
    isOn: true,
    isProd: false,
    isAllowRegister: false
};

const settingsCopy = {
    ...settings,
    isProd: true
};

let environment = "dev";
let environmentCopy = environment;
environmentCopy = "prod";

console.log(settings); // original settings
console.log(settingsCopy); // updated copy (immutability in practice, used spread operator)
console.log(environment); // let allows editing of primitives
console.log(environmentCopy); // a copy of the original primitive, when updated does not reflect to the original



// ==================================================
// PART 3: FINAL INTEGRATED FIX
// ==================================================

// Re-do only the final integrated problem from v1.
//
// Requirements:
// 1. Create one primitive variable that can be reassigned as progress changes.
// 2. Create one `const` object called `userProfile`.
// 3. Include at least 3 properties in `userProfile`.
// 4. Create a new updated copy of `userProfile` instead of mutating the original directly.
// 5. Also create one shared-reference example that proves how object assignment can affect two variables.
// 6. Print `progress`, the original object, `updatedUserProfile`, and the shared-reference result.
// 7. Do not print the wrong variable name from an earlier section.
// 8. Add one short comment explaining all 3 ideas together: const/let choice, immutability, and reference behavior.

let progress : number = 1;
progress = 100;
const userProfile = {
    id: 1,
    name: "Arvin Jayson Castro",
    email: "arvinjaysontamayocastro@gmail.com"
};
const updatedUserProfile = {
    ...userProfile,
    email: "arvinjaysoncastro@gmail.com"
};

const sharedReference = updatedUserProfile;
sharedReference.name = "Arvin Jayson Tamayo Castro";

console.log(progress, userProfile, updatedUserProfile, sharedReference);

// we can see progress allow editing even if primitive since we used let which allows reassigning,
// userProfile is untouched, even though we added a copy using updatedUserProfile (immutability)
// updateing the sharedReference updated the updatedUserProfile again but not the userPrfile


// ==================================================
// PART 4: SELF-CHECK POLISH
// ==================================================

// Answer these in comments using exact language.
//
// 1. Does `const` make an object fully immutable?
// const protects the binding but not the inside of an object.
// 2. When is `let` the correct choice?
// when you intend to reassign value
// 3. Why is a copied update often safer than direct mutation?
// because it does not update the original, preserving the value while still having a new variable containing the copy with the changes
// 4. What gets copied in primitive assignment?
// when copying a primitive assignment, the value is copied
// 5. Why can object assignment cause two variables to change together?
// since reference values share one object, so one mutation can affect multiple variables.
// ==================================================
// PART 5: ORAL EXPLANATION POLISH
// ==================================================

// Rewrite this in your own words, but keep the terms exact.
//
// "`const` protects the binding, not the inside of an object.
// Immutability means preferring updated copies, and reference values can share one object so one mutation can affect multiple variables."

// const protects the binding, not the inside of an object,
// Immutability means preferring updated copies, and reference values can share one object so one mutation can affect multiple variables.