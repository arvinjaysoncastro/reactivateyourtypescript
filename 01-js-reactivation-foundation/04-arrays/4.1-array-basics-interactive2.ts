Yes bro — here’s a **copyable `.md` lesson** for **4.1 Array Basics** in the format you described:

* quick summary notes at the top
* then divider
* then interactive section
* your answers go under `## Output Prediction Drill`

Use filename:

```text
4.1-array-basics-interactive.md
```

---

````md
# 4.1 Array Basics — Interactive

Phase: JS Reactivation  
Topic: Arrays  
Status: Interactive

## Quick Summary Notes

- An array is an **ordered collection**.
- Arrays use **zero-based indexing**.
- The first item is index `0`.
- You read values with bracket notation like `arr[1]`.
- `push()` adds to the end and **mutates** the array.
- `map()` returns a **new array**.
- `slice(start, end)` returns a new array and stops **before** `end`.
- Copy arrays safely with:
  - `arr.slice()`
  - `[...arr]`

## Perfect Explanation

An array is an ordered collection accessed by zero-based index.  
Use methods like `map()` and `slice()` to create new arrays safely.

## Initial Projected Steps

1. What an array is  
2. Index access  
3. Update by index  
4. Add items with `push()`  
5. Mutating vs non-mutating methods  
6. `map()` transform  
7. Shared reference vs copied array  
8. `slice(start, end)`  
9. Precision lock  

**Initial projected step count:** 9  
**Starting percent:** 0%

---

# Interactive Lesson

---

## Step 1 — What an array is

### Teacher
An array is an ordered collection of values.

### Student A
**Question:** What reads the second item in an array?  
**Answer:** `2`

### Teacher Feedback
Not yet. Arrays are zero-based.  
The first item is index `0`, so the second item is index `1`.

### Your Turn
What index reads the second item in an array?

## Output Prediction Drill
Your answer:

---

## Step 2 — Read by index

### Teacher
Given:

```ts
const colors = ["red", "blue", "green"];
````

* `"red"` is index `0`
* `"blue"` is index `1`
* `"green"` is index `2`

### Student B

**Question:** How do we read `"blue"`?
**Answer:** `colors[2]`

### Teacher Feedback

Not yet. `"blue"` is at index `1`.

### Your Turn

What expression reads `"green"`?

## Output Prediction Drill

Your answer:

---

## Step 3 — Update by index

### Teacher

You can replace an item using its index.

```ts
const nums = [1, 2, 3];
nums[2] = 10;
```

Final array:

```ts
[1, 2, 10]
```

### Student C

**Question:** What is the final array after `nums[0] = 5` for `[10, 20, 30]`?
**Answer:** `[10, 20, 5]`

### Teacher Feedback

Not yet. Index `0` is the first item.
Correct result: `[5, 20, 30]`

### Your Turn

What is the final array here?

```ts
const nums = [1, 2, 3];
nums[2] = 10;
```

## Output Prediction Drill

Your answer:

---

## Step 4 — Add items with `push()`

### Teacher

`push()` adds to the **end** of an array.

```ts
const items = ["x", "y"];
items.push("z");
```

Final array:

```ts
["x", "y", "z"]
```

### Student D

**Question:** What does `push("z")` do to `["x", "y"]`?
**Answer:** `["z", "x", "y"]`

### Teacher Feedback

Not yet. `push()` adds to the end, not the beginning.

### Your Turn

What is the final array here?

```ts
const items = ["x", "y"];
items.push("z");
```

## Output Prediction Drill

Your answer:

---

## Step 5 — Mutating vs non-mutating

### Teacher

Some methods change the original array. Some return a new one.

### Mutates

* `push()`
* `pop()`
* `splice()`

### Returns new array

* `map()`
* `filter()`
* `slice()`

### Student E

**Question:** Does `map()` mutate the original array?
**Answer:** Yes

### Teacher Feedback

Not yet. `map()` returns a new array.

### Your Turn

Does `push()` mutate the original array?

## Output Prediction Drill

Your answer:

---

## Step 6 — `map()` transforms

### Teacher

`map()` transforms each item and returns a new array.

```ts
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
```

Now:

* `nums` is still `[1, 2, 3]`
* `doubled` is `[2, 4, 6]`

### Student F

**Question:** What is `[1, 2, 3].map(n => n + 1)`?
**Answer:** `[2, 3, 4]`

### Teacher Feedback

Correct.

### Your Turn

What is the result of this?

```ts
[2, 4, 6].map(n => n / 2)
```

## Output Prediction Drill

Your answer:

---

## Step 7 — Shared reference vs copied array

### Teacher

This does **not** make a real copy:

```ts
const a = [1, 2];
const b = a;
```

Now `a` and `b` point to the **same array**.

### Student G

**Question:** What does this print?

```ts
const a = [1, 2];
const b = a;
b.push(3);

console.log(a);
```

**Answer:** `[1, 2]`

### Teacher Feedback

Not yet. `b` and `a` point to the same array.
Correct output: `[1, 2, 3]`

### Your Turn

What does this print?

```ts
const a = [1, 2];
const b = a;
b.push(3);

console.log(a);
```

## Output Prediction Drill

Your answer:

---

## Step 8 — `slice(start, end)`

### Teacher

`slice(start, end)`:

* starts at `start`
* stops **before** `end`

```ts
const names = ["a", "b", "c"];
const topTwo = names.slice(0, 2);
```

Result:

```ts
["a", "b"]
```

### Student H

**Question:** What does `["x", "y", "z"].slice(0, 2)` return?
**Answer:** `["x", "y"]`

### Teacher Feedback

Correct.

### Your Turn

What does this return?

```ts
const nums = [5, 10, 15];
nums.slice(1, 3);
```

## Output Prediction Drill

Your answer:

---

## Step 9 — Precision Lock

### Teacher

Now we check exact understanding.

### Student I

**Question:** What does this return?

```ts
const nums = [1, 2, 3, 4];
nums.slice(1, 4);
```

**Answer:** `[2, 3, 4]`

### Teacher Feedback

Correct.

### Your Turn

What does this return?

```ts
const letters = ["a", "b", "c", "d"];
letters.slice(2, 4);
```

## Output Prediction Drill

Your answer:

---

# Rolling Summary

## Status

* STARTED / ONGOING / DONE

## Current Percent

* 0%

## Strong Areas

* Pending

## Weak Spots

* Pending

## Common Errors

* Concept Error:
* Execution Error:
* Precision Error:
* Clarity Error:

## Final Understanding

* Pending

## Perfect Explanation

* Pending

## Next Action

* Continue step by step and update the percent after each answer.

```

---

## My recommendation
For now, this is enough.  
Do **not** add an exam yet.

Better exam timing:
- after `4.1`
- `4.2`
- `4.3`

Then do one grouped arrays checkpoint.

If you want, next I’ll make the same `.md` format for `4.2 Map Transform`.
```
