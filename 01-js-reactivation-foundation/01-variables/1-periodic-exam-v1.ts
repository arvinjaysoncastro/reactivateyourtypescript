/*
Lesson: 1 Variables Periodic Exam
Purpose: Periodic exam file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exam.
- Your answer files can be named like:
  - 1-periodic-exam-v1.ts
  - 1-periodic-exam-v2.ts
  - 1-periodic-exam-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: MEMORY RECALL
// ==================================================

// In 1-2 sentences, explain the difference between `const` and `let`.
// const prohibits reassigning of data to variable;
// let allows reassigning of data to variable.

// In 1-2 sentences, explain what immutability mindset means.
// immutability means preferring creating an updated copy instead of updating the original.

// In 1-2 sentences, explain the difference between primitive values and reference values.
// primitive values when copied creates new instance variables.
// reference values when copies points to the same instance variable, editing is reflected to all.

// ==================================================
// PART 2: CONST VS LET CHECK
// ==================================================

// Write code that shows both correct choices.
//
// Requirements:
// 1. Create one string variable that should never be reassigned.
// 2. Create one number variable that starts at 1 and later becomes 2.
// 3. Use `const` and `let` correctly.
// 4. Print both final values.

const fullName : string = "Arvin Jayson Tamayo Castro";
let count: number = 1;
count = 2;
console.log(fullName);
console.log(count);

// ==================================================
// PART 3: IMMUTABILITY CHECK
// ==================================================

// Start with an object that represents one user.
//
// Requirements:
// 1. Include at least 2 properties.
// 2. Create a new updated object instead of mutating the original directly.
// 3. Change one property in the new object.
// 4. Print both the original object and the updated object.
// 5. Add one short comment explaining why this is safer than direct mutation.
const user = {
    id: 1,
    name: "Arvin Jayson Castro",
    email: "arvinjaysoncastro@gmail.com"
};

const updatedUser = {
    ...user,
    id: 2
};

updatedUser.email = "aoofficial127@gmail.com";

console.log(user);
console.log(updatedUser);

// since we create a new updated object, instead of mutating the original,
// we preserve the original values enabling back tracking for debugging;
// also if there are other parts of code referencing the original, they will still have
// the original values to reference with.

// ==================================================
// PART 4: PRIMITIVE VS REFERENCE CHECK
// ==================================================

// Write code that shows both behaviors clearly.
//
// Requirements:
// 1. Create one primitive copy example where the original stays unchanged.
// 2. Create one object or array reference example where both values reflect a shared change.
// 3. Print all final values.
// 4. Add one short comment explaining why the outputs differ.

const book1 : string = "Harry Potter";
let book2 = book1;
book2 = "Bible";

const books1 : Array<string> = ["Harry Potter", "Bible"];
const books2 = books1;
books2.push("Dune");

console.log(book1, book2);
console.log(books1, books2);

// for the book1 and book2 since they are primitive copy, the copy creates a new instance so editing it does not reflect on the original.
// for the books1 and books2 since they are copied by reference, they point to the same array instance so editing the copy reflects to the original.

// ==================================================
// PART 5: MIXED APPLICATION TASK
// ==================================================

// Create a small `settings` example that combines at least 2 concepts.
//
// Requirements:
// 1. Use `const` and `let` appropriately.
// 2. Show one safe copy-based object update.
// 3. Add one short comment explaining whether the original object changed or not.

const settings = {
    isOn: false,
    env: "dev",
    isRegistrationActive: false
};

const qaSettings = {
    ...settings,
    env: "qa"
};

// here we create an updated copy of settings to qa settings, editing the env part (env = qa)
// preserving the original settings (which holds env = dev)


// ==================================================
// PART 6: FINAL INTEGRATED PROBLEM
// ==================================================

// You are tracking a user's progress in a small app.
//
// Build a solution that combines all 3 subtopics.
//
// Requirements:
// 1. Create one primitive variable that can be reassigned as progress changes.
// 2. Create one `const` object called `userProfile`.
// 3. Include at least 3 properties in `userProfile`.
// 4. Create a new updated copy of `userProfile` instead of mutating the original directly.
// 5. Also create one shared-reference example that proves how object assignment can affect two variables.
// 6. Print the original object, the updated copy, and the shared-reference result.
// 7. Add one short comment explaining all 3 ideas together: const/let choice, immutability, and reference behavior.

let progress : number = 1;

const userProfile = {
    id: 1,
    name: "Arvin Jayson Castro",
    email: "arvinjaysoncastro@gmail.com"
};

const updatedUserProfile = {
    ...userProfile,
    id: 2 // not part of the ask
};

const sharedProfile = userProfile;
sharedProfile.email = "aoofficial127@gmail.com";

console.log(userProfile);
console.log(updatedUser);
console.log(sharedProfile);


// using let on progress allows editing the primitive value
// below not part of the ask
console.log(progress);
progress = 100;
console.log(progress);

// userProfile is the original object
// we created updated copy for updatedUser, edited the id which did not reflect to the original userProfile: immutability in practice.
// we created a shared copy for sharedProfile, edited the email which reflected to the original userProfile


// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. Does `const` make an object fully immutable?
// no, to make it fully immutable you must use Object.freeze, but that too is shallow
// so you need to recursively freeze for deeper immutability
// 2. When is `let` the correct choice?
// when you want to allow reassigning of primitives
// 3. Why is a copied update often safer than direct mutation?
// because you preserve the original data that may be used by existing codebase else where
// 4. What gets copied in primitive assignment?
// the value
// 5. Why can object assignment cause two variables to change together?
// because they point to the same instance of data

// ==================================================
// PART 8: ORAL EXPLANATION
// ==================================================

// Say this out loud in your own words:
//
// "`const` protects the binding, not the inside of an object.
// Immutability means preferring updated copies, and reference values can share one object so one mutation can affect multiple variables."

// const protects the shape, not the actual values of properties
// immutability prefers creating updated copies
// while reference values share same instance which editing one affects all pointing to the same instance.
