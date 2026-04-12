/*
Lesson: 3.1 Object Literals
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 3.1-object-literals-v1.ts
  - 3.1-object-literals-v2.ts
  - 3.1-object-literals-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what is an object literal?

// When should you use one object instead of several separate variables?
// when data are related, you create an object, service as a named container for key value pairs or related data.

// How do you read or update one property on an object?
// using dot notation ".".

// ==================================================
// PART 2: DRILL 1
// ==================================================

// Create an object called `book`.
// It should have:
// - title
// - pages
//
// Then print `book.title`.
const book = { title: "Harry Potter", pages: 333 };

// ==================================================
// PART 3: DRILL 2
// ==================================================

// Create an object called `student`.
// It should have:
// - name
// - level
// - active
//
// Then:
// 1. print `student.level`
// 2. change `active`
// 3. print the full object

const student = { name: "Arvin Jayson", level: 3, active: false};
console.log(student.level);
student.active = true;
console.log(student);

// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an object called `order` for a real-world example.
// It should have:
// - id
// - item
// - paid
//
// Then:
// 1. print one property with dot notation
// 2. update `paid`
// 3. print the final object
const order = { id: 1, item: "book", paid: false};
console.log(order.item);
order.paid = true;
console.log(order);

// ==================================================
// PART 5: DRILL 4
// ==================================================

// Write short comment answers:
//
// 1. Why is an object useful when values belong to one thing?
// because as a named container, you get to group them in meaningful box or container.
// especially useful when you have multiple objects of different kinds,
// you can add order in your code, and soon add oop principles.

// 2. What does dot notation help you do?
// it allows you to access the properties of any named objects for clear and easy access.

// ==================================================
// PART 6: FINAL TASK
// ==================================================

// Create a `userProfile` object for a small app.
//
// Requirements:
// 1. Include at least 4 properties.
// 2. Use clear property names.
// 3. Print one property.
// 4. Update one property.
// 5. Print the final object.
// 6. Add one short comment explaining what the object represents.

const userProfile = {
    id: 1,
    name: "Arvin Jayson Castro",
    portfolioLink: "https://arvinjaysoncastro.com",
    age: 36
};

console.log(userProfile.name);
userProfile.age = 37;

console.log(userProfile);

// the object represents a userProfile containing id, name, portfolioLink and age properties.

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. What symbol is used between a property name and value in an object literal?
// : colon
// 2. How do you read `user.name`?
// user dot name, by accessing the object's name property via dot notation, where name is the key.
// 3. How do you change one property on an existing object?
// by accessing the object via dot notation, for example object name (dot) property key name equals "new value"; object.key = 1;
// 4. Why is an object better than scattered variables for related data?
// because being grouped into meaningful containers, you can have a better mental and program data group.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "An object literal lets me group related data into one value with named properties.
// I can read and update those properties clearly with dot notation."

// An object literal lets me group related data into one value with named properties.
// I can read and updated those properties clearly with dot notation.