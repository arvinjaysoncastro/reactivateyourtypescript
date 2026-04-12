/*
Lesson: 3.4 Object Mutation
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 3.4-object-mutation-v1.ts
  - 3.4-object-mutation-v2.ts
  - 3.4-object-mutation-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what does object mutation mean?
// Object mutation means changing a value of the property of the object.

// How can you tell when an object is being changed in place?
// If you access its properties and change one or more value.

// Why can mutation be risky when two variables share the same object?
// because if your mentat or domain model, or logic expects 2 separate entities, since they share the same data, breaking that domain rule where you update the second 1, the first 1 will be updated too since they use and point to the same data.

// ==================================================
// PART 2: DRILL 1
// ==================================================

// Create an object called `book`.
// It should have:
// - title
// - pages
//
// Then mutate `pages`.

const book = {
  title: "Harry Potter",
  pages: 333
};

book.pages = 555;

// ==================================================
// PART 3: DRILL 2
// ==================================================

// Create an object called `user`.
// It should have:
// - name
// - active
//
// Then:
// 1. print `active`
// 2. mutate `active`
// 3. print the full object

const user = {
  name: "Arvin Jayson Castro",
  active: false
}

console.log(user.active);
user.active = true;
console.log(user);

// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an object called `settings`.
// It should have:
// - theme
// - language
//
// Then:
// 1. assign it to another variable
// 2. mutate one property through the second variable
// 3. print both variables
// 4. observe whether both changed

const settings = {
  theme: "dark",
  language: "english"
};

const newSettings = settings;
newSettings.theme = "light";

console.log(settings);
console.log(newSettings);

// ==================================================
// PART 5: DRILL 4
// ==================================================

// Write short comment answers:
//
// 1. Why does mutating a shared object affect both variables?
// because they point on the same data, the same computer memory location
// 2. What is the difference between mutation and creating a copied update?
// mutation points to the same user, copied update creates a new version, not sharing the same memory space

// ==================================================
// PART 6: FINAL TASK
// ==================================================

// Create an object called `account`.
//
// Requirements:
// 1. Include `owner`, `balance`, and `active`.
// 2. Print `balance`.
// 3. Mutate `balance`.
// 4. Mutate `active`.
// 5. Print the final object.
// 6. Add one short comment explaining that the original object changed in place.

const account = {
  owner: "Arvin Jayson Castro",
  balance: 1000000,
  active: false
};

console.log(account.balance);
account.balance = 1000000000;
account.active = true;
console.log(account);
// since we updated the properties of account, we mutated the object preserving the shape yet updating the internal values which is valid in javascript.

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. What does object mutation mean?
// Object mutation is updating the values of properties of object without changing the shape of the object.
// 2. Does changing `user.name` create a new object?
// no, you only update the value of the object property
// 3. Why can shared references make mutation risky?
// because you produce unexpected behavior since they share the same data, which might be unintended.
// 4. How is mutation different from reassignment?
// reassignment creates a new data, mutation uses the same data but change the property data.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "Object mutation means changing the original object in place.
// If two variables share that object, both will see the change."
// Object mutation means changing the original object in place.
// If two variables share that object, both will see the change.