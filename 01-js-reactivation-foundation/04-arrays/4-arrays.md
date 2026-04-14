# 4 Arrays

Phase: JS Reactivation
Topic: Arrays
Status: Expanded

## Fast Goal
Use arrays to store, transform, select, and combine data with confidence.

## Brain Hook
Arrays hold the list. `map` reshapes it. `filter` trims it. `reduce` combines it.

## Why This Matters
Real app code constantly works with lists of users, products, tasks, and API results.
If you can move from raw array data to useful output fast, your code gets cleaner and more practical.

## Micro Rule
Start by knowing the array shape, then choose the right tool: read, map, filter, or reduce.

## Core Idea
An array is an ordered list.
You can access items by index, then use array methods to change how the list behaves without writing manual loops for every case.

- Array basics: store values and access items
- `map()`: keep the count, change each item
- `filter()`: keep matching items only
- `reduce()`: carry one running result across the whole array

## Code Examples

Basic array:

```ts
const scores = [10, 20, 30];
console.log(scores[0]);
```

Map:

```ts
const scores = [10, 20, 30];
const doubled = scores.map((score) => score * 2);
```

Filter:

```ts
const scores = [10, 20, 30];
const highScores = scores.filter((score) => score >= 20);
```

Reduce:

```ts
const scores = [10, 20, 30];
const total = scores.reduce((sum, score) => sum + score, 0);
```

## Fast Comparison

- Array basics: access or update items in the list
- `map()`: same number of items, new content
- `filter()`: fewer or equal items, same item shape
- `reduce()`: one final result from the whole array

## Mental Model
Think of an array like a conveyor belt.
`map()` repaints each item, `filter()` removes some items, and `reduce()` collects everything into one box.

## Tiny Example

```ts
const items = [1, 2, 3];
const result = items.map((item) => item + 1);
console.log(result);
```

## Output Prediction Drill

What is the output?

```ts
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const total = evenNumbers.reduce((sum, number) => sum + number, 0);

console.log(evenNumbers);
console.log(total);
```

Answer:

```ts
[2, 4]
6
```

## Practice
### Drill 1
Create an array called `colors` with three strings.
Print the first item and then add one more color.

### Drill 2
Create an array of numbers and use `map()` to make a new array where each number is doubled.

### Drill 3
Create an array of user objects with `name` and `active`.
Use `filter()` to keep only active users, then `map()` to get just their names.

### Drill 4
Explain in 1-2 lines what `reduce()` does and why it needs a running result.

## Your Task
You have a small product list.

1. Start with an array of product objects containing `name`, `price`, and `inStock`
2. Use `filter()` to keep only in-stock products
3. Use `map()` to get just the product names
4. Use `reduce()` to get the total price of the in-stock products
5. Print the filtered products, the names, and the total

## Expected Solution

```ts
const products = [
	{ name: "Pen", price: 10, inStock: true },
	{ name: "Notebook", price: 50, inStock: false },
	{ name: "Bag", price: 100, inStock: true },
];

const inStockProducts = products.filter((product) => product.inStock);
const names = inStockProducts.map((product) => product.name);
const total = inStockProducts.reduce((sum, product) => sum + product.price, 0);

console.log(inStockProducts);
console.log(names);
console.log(total);
```

## Common Mistakes

- Forgetting arrays use index-based access
- Using `map()` when you really want `filter()`
- Forgetting `filter()` needs a boolean result
- Forgetting `reduce()` needs a clear accumulator and initial value
- Losing track of the array shape after each step

## Debug Check

What is wrong here?

```ts
const numbers = [1, 2, 3];
const result = numbers.filter((number) => number * 2);
```

Answer:

This is not a clear filter condition. `filter()` should return a boolean-style condition for keeping or removing items.

## Meeting Answer
Arrays hold ordered data, and the core flow is: access items, map to transform, filter to select, and reduce to combine.

## Perfect Explanation
An array stores ordered values. `map()` transforms each item, `filter()` keeps matching items, and `reduce()` combines the whole array into one result.

## Guiding Questions

- What is the shape of the array right now?
- Do I want to transform, select, or combine?
- What should the output look like after this step?

## Done Signal

- You can create and read arrays without hesitation
- You know when to use `map()`, `filter()`, and `reduce()`
- You can track how the array shape changes across steps
- You can solve a small real-world list problem using all four ideas
