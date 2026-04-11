# Reactivate Your TypeScript

## Goal

Re-activate JavaScript and TypeScript fast enough to think clearly again, code from scratch, debug confidently, explain tradeoffs, and operate credibly in technical discussions.

This file is the course control center.
We will use it as the single working document and expand one section at a time.

## Folder System

The full modular structure now exists in the repo.

Primary navigation files:

- [START-HERE.md](START-HERE.md)
- [STUDY-DASHBOARD.md](STUDY-DASHBOARD.md)

- `01-js-reactivation-foundation/`
- `02-typescript-foundation/`
- `03-real-world-flow/`
- `04-architect-structure/`
- `05-interview-vp-level/`
- `06-intersection-js-ts/`
- `07-execution-rules/`
- `08-final-state/`

Each folder contains topic folders.
Each topic folder contains one file per sub-step.
Each file is intentionally scaffolded for short-focus sessions.

Use the structure like this:

1. Start at the phase folder.
2. Open one topic file only.
3. Ask me to expand that file.
4. We turn that single file into a full working lesson.

## How We Will Work

1. You open this file.
2. You pick one step, for example `1.1 const vs let` or `18.2 transform response`.
3. I update that exact section with:
	- a short explanation
	- one minimal code example
	- one practice task
	- one expected solution
	- one interview-style explanation prompt
4. You code the step.
5. We move to the next step only after the current one is clear.

## Operating Rules

- Max 25 minutes per block.
- No passive reading.
- Every step must produce code.
- Start small and finish the step in front of you.
- If something feels foggy, reduce scope instead of skipping ahead.

## What This Course Will Actually Build

- JavaScript fluency again
- TypeScript comfort under pressure
- Ability to explain code and decisions clearly
- Better instincts for architecture and service design
- A repeatable way to debug, build, and discuss systems

## Realistic Outcome

After finishing this plan, you should be able to enter meetings and contribute with confidence on implementation, debugging, reasoning, and communication.

Principal, architect, tech lead, and VP-level performance also depends on repetition, judgment, tradeoff analysis, and communication under ambiguity. This roadmap is designed to restore the technical base those roles require.

---

## Phase 1 - JS Reactivation (Foundation)

Time: 1-2 hours

### 1. Variables
- [ ] 1.1 const vs let
- [ ] 1.2 immutability mindset
- [ ] 1.3 primitive vs reference

### 2. Functions
- [ ] 2.1 function declaration
- [ ] 2.2 arrow functions
- [ ] 2.3 return values
- [ ] 2.4 higher-order functions

### 3. Objects
- [ ] 3.1 object literals
- [ ] 3.2 property access (dot vs bracket)
- [ ] 3.3 nested objects
- [ ] 3.4 object mutation

### 4. Arrays
- [ ] 4.1 array basics
- [ ] 4.2 map (transform)
- [ ] 4.3 filter (select)
- [ ] 4.4 reduce (combine)

### 5. Closures
- [ ] 5.1 function scope
- [ ] 5.2 inner function memory
- [ ] 5.3 counter pattern

### 6. Async
- [ ] 6.1 promise basics
- [ ] 6.2 async/await
- [ ] 6.3 chaining
- [ ] 6.4 simple error handling

### 7. Build #1 - User Processor
- [ ] 7.1 create array of users
- [ ] 7.2 filter adults
- [ ] 7.3 map names
- [ ] 7.4 print result

---

## Phase 2 - TypeScript Foundation

Time: 1-2 hours

### 8. Basic Types
- [ ] 8.1 string, number, boolean
- [ ] 8.2 type inference
- [ ] 8.3 explicit typing

### 9. Function Types
- [ ] 9.1 typed parameters
- [ ] 9.2 typed return values
- [ ] 9.3 void functions

### 10. Interfaces
- [ ] 10.1 defining shape
- [ ] 10.2 required fields
- [ ] 10.3 optional fields

### 11. Arrays + Objects (Typed)
- [ ] 11.1 typed arrays (User[])
- [ ] 11.2 typed objects
- [ ] 11.3 nested typing

### 12. Unions + Optional
- [ ] 12.1 union (A | B)
- [ ] 12.2 optional (?)
- [ ] 12.3 narrowing basics

### 13. Build #2 - Typed Processor
- [ ] 13.1 define User interface
- [ ] 13.2 type user array
- [ ] 13.3 type functions
- [ ] 13.4 ensure return types

---

## Phase 3 - Real World Flow

Time: 2-3 hours

### 14. Fetch API
- [ ] 14.1 fetch() basics
- [ ] 14.2 response handling
- [ ] 14.3 JSON parsing

### 15. Async Flow
- [ ] 15.1 sequential async
- [ ] 15.2 parallel async
- [ ] 15.3 promise chaining

### 16. Error Handling
- [ ] 16.1 try/catch
- [ ] 16.2 safe fallback
- [ ] 16.3 logging

### 17. Data Transformation
- [ ] 17.1 API to internal model
- [ ] 17.2 mapping data
- [ ] 17.3 filtering invalid data

### 18. Build #3 - User API Service
- [ ] 18.1 fetch users
- [ ] 18.2 transform response
- [ ] 18.3 handle errors
- [ ] 18.4 return typed data

---

## Phase 4 - Architect Structure

Time: 2-3 hours

### 19. Separation of Concerns
- [ ] 19.1 controller layer
- [ ] 19.2 service layer
- [ ] 19.3 data/model layer

### 20. Service Pattern
- [ ] 20.1 business logic isolation
- [ ] 20.2 reusable methods
- [ ] 20.3 state handling

### 21. Clean Code
- [ ] 21.1 small functions
- [ ] 21.2 clear naming
- [ ] 21.3 single responsibility

### 22. Build #4 - Mini System
- [ ] 22.1 create UserService
- [ ] 22.2 add addUser()
- [ ] 22.3 add getAdults()
- [ ] 22.4 connect API + service

---

## Phase 5 - Interview / VP Level

Time: 2-4 hours

### 23. JS Mastery Review
- [ ] 23.1 closures explanation
- [ ] 23.2 async explanation
- [ ] 23.3 array transformations

### 24. TS Mastery Review
- [ ] 24.1 interfaces vs types
- [ ] 24.2 unions vs optional
- [ ] 24.3 generics (basic)

### 25. System Thinking
- [ ] 25.1 data flow explanation
- [ ] 25.2 service design
- [ ] 25.3 API structure

### 26. Communication
- [ ] 26.1 explain decisions
- [ ] 26.2 simplify complexity
- [ ] 26.3 lead discussion

### 27. Build #5 - Final System
- [ ] 27.1 typed API
- [ ] 27.2 service layer
- [ ] 27.3 data processing
- [ ] 27.4 error-safe execution

---

## Intersection (JS <-> TS)

### 28. Shared Concepts
- [ ] 28.1 functions
- [ ] 28.2 objects
- [ ] 28.3 arrays
- [ ] 28.4 async

### 29. TS Adds
- [ ] 29.1 types
- [ ] 29.2 interfaces
- [ ] 29.3 compile-time safety

---

## Execution Rules

### 30. Focus Rules
- [ ] 30.1 max 25 min per block
- [ ] 30.2 no passive reading
- [ ] 30.3 always code

### 31. Anti-Fog Rules
- [ ] 31.1 start small
- [ ] 31.2 finish each step
- [ ] 31.3 no jumping

---

## Final State

### 32. After Completion
- [ ] 32.1 think in JS again
- [ ] 32.2 use TS naturally
- [ ] 32.3 build real features
- [ ] 32.4 explain like VP

---

## Session Template

When you choose a step, I will fill it using this format:

### Example Step Expansion

Topic: `1.1 const vs let`

Goal:
- Understand reassignment rules
- Know when mutation is still possible
- Use the safer default

Explain:
- `const` prevents reassignment of the variable binding.
- `let` allows reassignment.
- `const` does not make objects deeply immutable.

Example:

```ts
const user = { name: "Ava" };
user.name = "Liam";

let count = 1;
count = 2;
```

Practice:
- Create one `const` object and mutate a property.
- Create one `let` variable and reassign it.
- Explain why those are different operations.

Interview Prompt:
- "Why do most teams prefer const by default?"

---

## Recommended Start

Start with `1.1 const vs let`.

If you want, the next move is simple:
tell me `expand 1.1` and I will turn this file into the first active lesson.
