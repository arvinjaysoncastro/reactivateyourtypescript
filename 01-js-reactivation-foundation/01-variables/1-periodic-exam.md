# 1 Variables Periodic Exam

Phase: JS Reactivation
Topic: Variables
Status: Periodic Exam Ready

## Coverage
- 1.1 Const vs Let
- 1.2 Immutability Mindset
- 1.3 Primitive vs Reference

## Fast Goal
Show that you can choose the right variable behavior and explain why data changes the way it does.

## Brain Hook
Protect the binding, prefer safe updates, and never forget what is copied vs shared.

## Why This Matters
Most bugs in early JavaScript come from changing the wrong thing or misunderstanding what was copied.
This exam checks whether you can reason clearly about reassignment, mutation, immutability, and shared references.

## Core Recall
- `const` blocks reassignment of the binding
- `let` allows reassignment
- immutability mindset prefers creating updated copies when that makes state safer and clearer
- primitives copy the value itself
- objects and arrays can share one reference
- shared references make direct mutation risky

## Fast Comparison
- `const` vs `let`: binding cannot move vs binding can move
- mutation vs immutability: change the original vs create an updated copy
- primitive vs reference: copied value vs shared underlying object/array

## Common Traps
- Thinking `const` means fully immutable
- Reassigning when the task only needs mutation
- Mutating shared objects and expecting other variables to stay unchanged
- Forgetting that arrays are reference values too
- Calling a direct mutation "immutable" just because the variable uses `const`

## Mini Review Examples

```ts
const user = { name: "Ava", active: false };
user.active = true;
```

```ts
const profile = { city: "Cebu" };
const updatedProfile = { ...profile, city: "Manila" };
```

```ts
let score1 = 10;
let score2 = score1;
score2 = 20;
```

```ts
const tags1 = ["js"];
const tags2 = tags1;
tags2.push("ts");
```

## Exam Readiness Check
- Can you explain why `const user = {}` still allows `user.name = "Ava"`?
- Can you explain why copy-based updates are safer than direct mutation in shared state?
- Can you predict whether two variables will change together after assignment?
- Can you choose when to use `let` without using it everywhere by habit?

## Meeting Answer
Good JavaScript variable reasoning means knowing what can be reassigned, what was copied, and when direct mutation is risky enough that a copied update is safer.

## Perfect Explanation
`const` protects the binding, not the inside of an object. Immutability prefers updated copies, and reference values can share one object so one mutation can affect multiple variables.

## Done Signal
- You can explain `const` vs `let` without mixing it up with immutability
- You can tell when a change is mutation vs reassignment
- You can explain primitive copy vs reference sharing clearly
- You can predict shared-mutation behavior before running the code
- You can choose a safe update strategy in a small practical task
