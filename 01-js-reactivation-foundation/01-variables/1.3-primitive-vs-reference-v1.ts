/*
Lesson: 1.3 Primitive vs Reference
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 1.3-primitive-vs-reference-v1.ts
  - 1.3-primitive-vs-reference-v2.ts
  - 1.3-primitive-vs-reference-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// In your own words:
// What is a primitive value in JavaScript?
// Write 1-3 sentences below.
// primitive value create their own copy of data
// where updating one does NOT update the other one and vice versa
// SAMPLE are string, number


// In your own words:
// What is a reference value in JavaScript?
// Write 1-3 sentences below.
// reference vaues like object and arrays copy by reference
// so each copy are pointing to the same data
// and updating one, since they are all pointing to the same data will update all (same occurence).


// In your own words:
// Why can two variables change together when objects or arrays are involved?
// Write 1-3 sentences below.
// because copying by reference, you reference the same data
// like calling the same person with different nicknames, when he change something like clothes
// all of those nicknames are pointing to the same person with the same new clothes


// ==================================================
// PART 2: PRIMITIVE COPY DRILL
// ==================================================

// Instructions:
// 1. Create one primitive number called score1.
let score1 : number = 1;
// 2. Copy it into score2.
let score2 : number = score1;
// 3. Change only score2.
score2 = 2;
// 4. Print both values.
console.log(score1, score2);



// ==================================================
// PART 3: REFERENCE COPY DRILL
// ==================================================

// Instructions:
// 1. Create one object called player1.
const player1 = { name: "Arvin", age: 36 };
// 2. Assign it to player2.
const player2 = player1;
// 3. Change one property through player2.
player2.age = 37;
// 4. Print both values.
console.log(player1, player2);


// ==================================================
// PART 4: FINAL TASK
// ==================================================

// Final task instructions:
// Create:
// - one primitive example where the original stays unchanged
const str1 : string = "should be constant, unchanging";
let str2 : string = str1;
str2 = "now changed";
// - one reference example where both variables reflect the mutation
const person1 = { name: "Arvin", age: 36 };
const person2 = person1;
person2.age = 37; 

//
// Then:
// 1. Print all final values.
// 2. Write one short comment explaining why the results are different.
console.log(str1, str2); // str2 will have the new value while str1 will remain unchanged since we only updated the new primitive copy (copied by value, not reference).
console.log(person1.age, person2.age); // for person1 and person2, since we copied the object, we actually just pointed to the same object for both person1 and person2 so updating the age of person2 will reflect to person 1 since they point to the same object.



// ==================================================
// PART 5: SELF-CHECK
// ==================================================

// Answer these in comments after you finish:
// 1. Which example copied the value itself?
// score2, and my own str2
// 2. Which example copied a shared reference?
// player2 and my sample person2
// 3. Why did changing one object affect the other variable too?
// because they point to the same object
// 4. How would you avoid that shared mutation?
// by creating a new updated copy using immutability



// ==================================================
// PART 6: MEETING PRACTICE
// ==================================================

// Say this out loud after you finish:
// "Primitives copy the value itself.
// Objects and arrays can copy a shared reference.
// That is why one mutation can affect both variables."

// Primitives copy the value itself
// Objects and arrays can copy a shared reference
// That is why one mutation can affect both variables.

// Primitives copy the value itself
// Objects and arrays can copy a shared reference
// That is why one mutation can affect both variables.

// Primitives copy the value itself
// Objects and array copy by reference so they point to the same object or array
// That is why one mutation can affect both variables since there is technically only one object or array pointed by different variable names.