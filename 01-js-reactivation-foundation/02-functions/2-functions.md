# 2 Functions

Phase: JS Reactivation
Topic: Functions
Status: Expanded

## Fast Goal
Write, return, and pass functions confidently in real JavaScript flow.

## Brain Hook
Functions hold logic, `return` gives output, arrows keep it compact, and higher-order functions use functions as data.

## Why This Matters
Functions are one of the main ways JavaScript organizes behavior.
If you can define them clearly, return useful values, and pass callbacks without confusion, everyday code becomes much easier to read and build.

## Micro Rule
First write the function clearly, then decide how it should be called, what it should return, and whether it should receive another function.

## Core Idea
A function is a reusable block of logic.
You can declare a named function, write an arrow function for compact cases, return a value so other code can use it, and pass a function into another function as a callback.

- function declaration: named reusable logic
- arrow function: short function expression, common in callbacks
- return value: sends usable output back to the caller
- higher-order function: takes a function or returns a function

## Code Examples

Function declaration:

```ts
function greet(name: string): string {
	return "Hello " + name;
}
```

Arrow function:

```ts
const double = (value: number): number => value * 2;
```

Higher-order function:

```ts
function runNow(action: () => void): void {
	action();
}
```

Bad return usage:

```ts
function add(a: number, b: number): void {
	console.log(a + b);
}
```

## Fast Comparison

- function declaration: best for main named logic
- arrow function: best for short expressions and callbacks
- `return`: gives data back
- `console.log()`: only prints data
- higher-order function: works with other functions

## Mental Model
Think of functions like tools in a toolbox.
Some tools do one job, some quickly shape data, some hand a result back, and some hand work to another tool.

## Tiny Example

```ts
function getName(): string {
	return "Ava";
}

console.log(getName());
```

## Output Prediction Drill

What is the output?

```ts
function runTwice(action: () => void): void {
	action();
	action();
}

runTwice(() => console.log("Go"));
```

Answer:

```txt
Go
Go
```

## Practice
### Drill 1
Write a function declaration called `sayHello` that returns a greeting string.

### Drill 2
Rewrite a small function as an arrow function that doubles a number.

### Drill 3
Create a function that returns a value, then pass an arrow callback into another function that runs it.

### Drill 4
Explain in 1-2 lines why `return` and `console.log()` are not the same thing.

## Your Task
Create a small user-processing flow.

Requirements:
1. Write a function declaration called `formatUser` that takes a name and returns `User: ` plus the name
2. Create an array of names
3. Use a higher-order function that takes a callback and runs it for each name
4. Pass an arrow function callback that uses `formatUser`
5. Print the formatted output for each user

## Expected Solution

```ts
function formatUser(name: string): string {
	return "User: " + name;
}

function processUsers(names: string[], callback: (name: string) => void): void {
	for (const name of names) {
		callback(name);
	}
}

processUsers(["Ava", "Noah", "Mina"], (name) => {
	console.log(formatUser(name));
});
```

## Common Mistakes

- forgetting `return` when the result must be reused
- calling a callback too early instead of passing the function
- using arrow functions where a regular method is clearer
- confusing printed output with returned output
- passing `sayHello()` when the function itself should be passed

## Debug Check

What is wrong here?

```ts
function runTask(callback: () => void): void {
	callback;
}

runTask(() => console.log("Done"));
```

Answer:

The callback is referenced but never executed. It should be called with `callback()`.

## Meeting Answer
Functions let us organize reusable logic, `return` gives useful output back, arrow functions keep short callbacks clean, and higher-order functions let one function work with another.

## Perfect Explanation
A function declaration defines reusable logic, an arrow function is a compact function expression, `return` sends a value back, and a higher-order function takes or returns a function.

## Guiding Questions

- Does this function need to return data or just perform an action?
- Is a function declaration or an arrow function clearer here?
- Am I passing a function itself, or accidentally calling it too early?

## Done Signal

- You can write a clear function declaration from memory
- You know when to use an arrow function
- You can explain `return` vs `console.log()` clearly
- You can pass a callback into another function without confusion
- You can combine declarations, arrows, returns, and higher-order flow in one small task
