/*
Lesson: 3.3 Nested Objects
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 3.3-nested-objects-v1.ts
  - 3.3-nested-objects-v2.ts
  - 3.3-nested-objects-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what is a nested object?
// A nested object is an object that is a property of another object.

// How do you read a value inside a nested object?
// You read a value inside a nested object by following the full property path,
// first referencing the outer object, then the inner object and so on until you reach the desired property.

// Why is it important to follow the full property path exactly?
// Because if you skip one part of the property path, you will get an error or undefined or if it even existings, it will point you to the wrong value, which can cause unexpected behaviors.

// ==================================================
// PART 2: DRILL 1
// ==================================================

// Create an object called `user`.
// It should have:
// - name
// - address
//
// Inside `address`, add:
// - city
// - zip
//
// Then print `user.address.city`.
const user = {
    name: "Arvin Jayson Castro",
    address: {
      city: "City of San Fernando",
      zip: 2000
    }
};

console.log(user.address.city);

// ==================================================
// PART 3: DRILL 2
// ==================================================

// Create an object called `company`.
// It should have:
// - name
// - owner
//
// Inside `owner`, add:
// - firstName
// - active
//
// Then:
// 1. print one nested property
// 2. update one nested property
// 3. print the full object
const company = {
  name: "CAREER TEAM",
  owner: {
    firstName: "J",
    active: false
  }
};

console.log(company.owner.firstName);
company.owner.active = true;
console.log(company);

// ==================================================
// PART 4: DRILL 3
// ==================================================

// Create an object called `order` for a real-world example.
// It should have:
// - id
// - customer
//
// Inside `customer`, add:
// - name
// - city
//
// Then:
// 1. print one nested value
// 2. update one nested value
// 3. print the final object

const order = {
  id: 1,
  customer: {
    name: "J",
    city: "City of San Fernando"
  }
};

console.log(order.customer.name);
order.customer.city = "Pasig City";
console.log(order);

// ==================================================
// PART 5: DRILL 4
// ==================================================

// Write short comment answers:
//
// 1. What makes an object "nested"?
// when you have an object as a property of on object.
// 2. Why can `user.email` fail if `email` is inside `user.contact`?
// because the first level keys of user may not include email, it will return undefined if you try to console.log it,
// also property name 'email' does not existing on type user, if you want to access email, you have to go thru user.contact first like user.contact.email.

// ==================================================
// PART 6: FINAL TASK
// ==================================================

// Create a `userProfile` object.
//
// Requirements:
// 1. Add a top-level `name` property.
// 2. Add a nested `contact` object.
// 3. Inside `contact`, include `email` and `phone`.
// 4. Print the email.
// 5. Update the phone.
// 6. Print the final object.
// 7. Add one short comment explaining the property path you used.

const userProfile = {
  name: "Arvin Jayson Castro", 
  contact: {
    email: "arvinjaysoncastro@gmail.com",
    phone: "09123456789"
  }
};

console.log(userProfile.contact.email);
userProfile.contact.phone = "+639123456789";
console.log(userProfile);
// for userProfile.contact.phone we accessed phone property of contact object, where contact is a nested object property of userProfile.

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. What is a nested object?
// a nested object is an object within an object.
// 2. How do you access a value two levels deep?
// by stating the base object . (dot) first level key . (dot) second level key
// note you may also use bracket notation baseObject[firstLevelKey][secondLevelKey];
// 3. Why is reading the object shape first important?
// because that is the primary data pointer.
// 4. What happens if you skip one part of the property path?
// you will go not to the intended leaf, thus having the unintended value or undefined, technically may have slight chance of virtually same data still, pointing to the wrong intended value.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "A nested object is an object inside another object.
// I access deep values by following the full property path in order."
// A nested object is an object inside another object.
// I access deep values by following the full property path in order.