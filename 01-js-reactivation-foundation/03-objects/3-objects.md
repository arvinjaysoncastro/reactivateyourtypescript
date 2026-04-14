# 3 Objects

Phase: JS Reactivation
Topic: Objects
Status: Expanded

## Fast Goal
Build, read, and reason about object data without losing track of structure or side effects.

## Brain Hook
Objects group data, paths find it, brackets unlock dynamic keys, and mutation changes the original.

## Why This Matters
Real JavaScript code constantly works with object-shaped data like users, settings, API responses, and nested app state.
If you can read object shape clearly, choose the right access style, and spot mutation risk early, your code becomes easier to trust and debug.

## Micro Rule
Read the object shape first, then choose the exact property path and know whether your update changes the same object or a new one.

## Core Idea
Objects group related data into one value using named properties.
You can read fixed properties with dot notation, dynamic properties with bracket notation, follow deeper paths for nested objects, and update properties directly when mutating the original object.

- object literal: group related values into one object
- dot vs bracket: fixed key vs dynamic key
- nested objects: follow the full path level by level
- mutation: changing the original object in place

## Code Examples

Object literal:

```ts
const user = {
	name: "Ava",
	city: "Cebu",
};
```

Dot vs bracket:

```ts
const key = "city";
console.log(user.city);
console.log(user[key]);
```

Nested access:

```ts
const profile = {
	contact: {
		email: "ava@example.com",
	},
};

console.log(profile.contact.email);
```

Mutation:

```ts
const settings = { theme: "light" };
settings.theme = "dark";
```

## Fast Comparison

- object literal: creates the object shape
- dot notation: fixed property access
- bracket notation: dynamic property access
- nested path: property inside property
- mutation: updates the same object instead of making a copy

## Mental Model
Think of an object like a labeled cabinet.
Dot notation opens a known drawer, bracket notation uses a label note first, nested objects are drawers inside drawers, and mutation changes what is already inside the cabinet.

## Tiny Example

```ts
const product = {
	title: "Notebook",
	meta: {
		price: 12,
	},
};

console.log(product.meta.price);
```

## Output Prediction Drill

What is the output?

```ts
const user = {
	name: "Ava",
	contact: {
		city: "Cebu",
	},
};

const alias = user;
alias.contact.city = "Manila";

console.log(user.contact.city);
console.log(alias.contact.city);
```

Answer:

```ts
"Manila"
"Manila"
```

## Practice
### Drill 1
Create an object literal called `book` with `title` and `pages`, then print `book.title`.

### Drill 2
Create an object called `settings`, store one property name in a variable, and read it with bracket notation.

### Drill 3
Create a nested object called `userProfile` with `contact.email`, then print and update the nested value.

### Drill 4
Explain in 1-2 lines why object mutation can affect more than one variable.

## Your Task
Create a small `userProfile` flow.

Requirements:
1. Create an object with `name`, `role`, and a nested `contact` object containing `email` and `city`
2. Print `name` with dot notation
3. Store `"role"` or `"name"` in a variable and print that property with bracket notation
4. Print one nested value from `contact`
5. Assign the object to a second variable and mutate one property through the second variable
6. Print both variables to prove the mutation affected the original object too

## Expected Solution

```ts
const userProfile = {
	name: "Ava",
	role: "dev",
	contact: {
		email: "ava@example.com",
		city: "Cebu",
	},
};

const selectedKey = "role";

console.log(userProfile.name);
console.log(userProfile[selectedKey]);
console.log(userProfile.contact.email);

const sharedProfile = userProfile;
sharedProfile.role = "lead";

console.log(userProfile);
console.log(sharedProfile);
```

## Common Mistakes

- forgetting `:` inside an object literal
- using dot notation when the key comes from a variable
- skipping one level in a nested object path
- expecting a shared object mutation to affect only one variable
- confusing mutation with creating a copied update

## Debug Check

What is wrong here?

```ts
const user = {
	contact: {
		email: "ava@example.com",
	},
};

const key = "email";
console.log(user.key);
console.log(user.email);
```

Answer:

Both access paths are wrong. `user.key` looks for a property literally named `key`, and `user.email` skips the `contact` level. The correct access is `user.contact[key]`.

## Meeting Answer
Objects group related data, dot and bracket notation read properties in different ways, nested objects require the full path, and mutation changes the original object in place.

## Perfect Explanation
An object literal creates structured data with named properties. Dot notation reads fixed keys, bracket notation reads dynamic keys, nested objects require full paths, and mutation updates the same object directly.

## Guiding Questions

- What is the full shape of this object?
- Is the key fixed, dynamic, or nested?
- Am I updating the original object or a separate copy?

## Done Signal

- You can create a clear object literal from memory
- You know when to use dot notation vs bracket notation
- You can read and update nested object paths correctly
- You can explain why shared-object mutation affects multiple variables
- You can combine object shape, access, nested paths, and mutation in one small task
