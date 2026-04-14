/*
Lesson: 4.4 Reduce (Combine)
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - 4.4-reduce-combine-v1.ts
  - 4.4-reduce-combine-v2.ts
  - 4.4-reduce-combine-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

export {};

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================
// In one or two sentences, explain from memory what `reduce` does.
// reduce passes thru all array elements and process them to the accululator based on logic. when defining, accumulator has an initial value and once all items of the array has passed (sequentially), the final value of accumulator is returned.

// ==================================================
// PART 2: DRILL 1
// ==================================================
// Very small drill: Given [5,7,2], write the single expression using `reduce` to compute the sum.
const given1 = [5,7,2];
const given1Sum = given1.reduce((acc, item) => acc + item, 0);

// ==================================================
// PART 3: DRILL 2
// ==================================================
// Slightly harder: Given ['a','b','c'], write the single expression using `reduce` that returns 'abc'.
const given2 = ['a', 'b', 'c'];
const given2Result = given2.reduce((acc, item) => acc + item, "");

// ==================================================
// PART 4: DRILL 3
// ==================================================
// Real-shape drill: Given
// const rows = [{id:1,score:10},{id:2,score:5}]
// write a single expression that creates {1:10, 2:5}
const rows = [{id:1,score:10}
    ,{id:2,score:5}];
const rowsResult = rows.reduce((acc, r) => {acc[r.id] = r.score; return acc; }, {} as Record<number, number>);
// TO DO: Review again

// ==================================================
// PART 5: DRILL 4
// ==================================================
// Short written explanation: In 1–2 lines, explain why the initial value matters.
// The initial value of accumulator matters because it will be the base when adding items.

// ==================================================
// PART 6: FINAL TASK
// ==================================================
// Implement (in your v file) `totalPrice(items)` where
// input: Array<{price:number; qty:number}>
// output: number (sum of price * qty)
// Do the implementation in your version file.
function totalPrice(items: Array<{price:number; qty:number}>) : number {
  const total : number = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  return total;
}

// ==================================================
// PART 7: SELF-CHECK
// ==================================================
// Self-check items:
// - Did you return the accumulator each step?
// Yes
// - Did you pick an appropriate initial value?
// Yes
// - Did you avoid mutating unexpected state?
// Yes

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================
// Speakable line: "`reduce` walks the array updating an accumulator and returns the final value."
// reduce walks the array updating an accumulator and returns the final value;