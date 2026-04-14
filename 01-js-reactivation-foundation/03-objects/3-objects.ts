/*
Lesson: 3 Objects
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 3-objects-v1.ts
  - 3-objects-v2.ts
  - 3-objects-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In 1-2 sentences, what is an object literal?
// An object literal defines the shape of the object.

// In 1-2 sentences, when should you use dot notation and when should you use bracket notation?
// dot notation is used when you know the actual path, whole bracket notation is used for dynamic paths.

// In 1-2 sentences, what is a nested object?
// a nested object is an object within an object.

// In 1-2 sentences, what does object mutation mean?
// when an object is defined with const, and you updated its property value, that is you mutate its property value.

// ==================================================
// PART 2: SUBTOPIC 1 DRILL
// ==================================================

// Create an object called `book`.
//
// Requirements:
// 1. Include `title` and `pages`.
// 2. Print `book.title`.
// 3. Update one property.
// 4. Print the full object.

const book = {
    title: "Harry Potter",
    pages: 333
};

console.log(book.title);
book.pages = 444;
console.log(book);

// ==================================================
// PART 3: SUBTOPIC 2 DRILL
// ==================================================

// Create an object called `settings`.
//
// Requirements:
// 1. Include `theme`, `language`, and `mode`.
// 2. Store one property name in a variable called `key`.
// 3. Print one property with dot notation.
// 4. Print one property with bracket notation.
// 5. Add one short comment explaining why bracket notation was needed.

const settings = {
    theme: "dark",
    language: "english",
    mode: "read"
};

let key : keyof typeof settings = "theme";
console.log(settings.theme);
console.log(settings[key]);

// ==================================================
// PART 4: SUBTOPIC 3 DRILL
// ==================================================

// Create an object called `userProfile`.
//
// Requirements:
// 1. Include a top-level `name` property.
// 2. Include a nested `contact` object.
// 3. Inside `contact`, include `email` and `city`.
// 4. Print one nested value.
// 5. Update one nested value.
// 6. Print the full object.

const userProfile = {
    name: "Arvin Jayson",
    contact: {
        email: "arvinjaysoncastro@gmail.com",
        city: "City of San Fernando"
    }
};

console.log(userProfile.contact.city);
userProfile.contact.city = "City of San Fernando, Pampanga";

console.log(userProfile);

// ==================================================
// PART 5: SUBTOPIC 4 DRILL
// ==================================================

// Create an object called `account`.
//
// Requirements:
// 1. Include `owner`, `balance`, and `active`.
// 2. Assign it to a second variable.
// 3. Mutate one property through the second variable.
// 4. Print both variables.
// 5. Add one short comment explaining why both results changed.

const account = {
    owner: "Arvin Jayson Castro",
    balance: 123,
    active: false
};

const accountSharedCopy = account;

accountSharedCopy.active = true;

console.log(account);
console.log(accountSharedCopy);

// since we copied by reference (shared copy) instead of copy with immutability,
// they share / reference the same object, so updating the copy variable updated the original too

// ==================================================
// PART 6: INTEGRATED FINAL TASK
// ==================================================

// Build a small object flow that combines all 4 subtopics.
//
// Requirements:
// 1. Create an object called `userCard` with `name`, `role`, and a nested `contact` object.
// 2. Inside `contact`, include `email` and `city`.
// 3. Print `name` with dot notation.
// 4. Store `"role"` or `"name"` in a variable and print that property with bracket notation.
// 5. Print one nested value from `contact`.
// 6. Assign `userCard` to a second variable.
// 7. Mutate one property through the second variable.
// 8. Print both variables to prove the original object changed too.
// 9. Add one short comment explaining how object literals, property access, nested objects, and mutation all worked together.
const userCard = {
    name: "Arvin Jayson",
    role: "Techie",
    contact: {
        email: "arvinjaysoncastro@gmail.com",
        city: "City of San Fernando, Pampanga"
    }
};

console.log(userCard.name);

const key2 = "role";
console.log(userCard[key2]);

console.log(userCard.contact.email);

const userCardCopy = userCard;

userCardCopy.name = "Arvin Jayson Castro";

console.log(userCard);
console.log(userCardCopy);

// object literals define the shape and values inside an object
// property access can be done using dot notation (if we know direct path) or using bracket notation either using string or variable for dynamic access.
// nested objects are object within object and can be accessed by direct path starting from base (userCard) dot nested object name dot property.
// mutation works by updating a constant variable property value.


// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// Answer these in comments:
//
// 1. What is the difference between dot notation and bracket notation?
// dot notation is used for direct path access, bracket notation is used for dynamic path access.
// 2. Why can `user.email` fail if `email` is inside `user.contact`?
// because you need to access it using complete path which should be user.contact.email.
// 3. What does object mutation change?
// it changes the value assigned to the object property
// 4. Why can two variables reflect the same object update?
// because they point to the same object, when you update the object via one variable, you are actually editing the shared object so all variables pointing to it will have that update.

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

// Say this out loud in your own words:
//
// "Objects group related data into one value.
// Dot notation reads fixed keys, bracket notation reads dynamic keys, nested objects require full paths, and mutation changes the original object in place."
// Objects group related data into one value
// Dot notation reads fixed keys, bracket notation reads dynamic keys,
// nested objects require full paths and
// mutation changes the orginal object in place.