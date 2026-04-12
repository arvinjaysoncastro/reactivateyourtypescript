You are working in EDIT/CREATE mode for ONE active lesson file.

IMPORTANT MODE:
- Update files directly in the workspace.
- Do not reply with full file contents in chat if file editing succeeds.
- Update the active file in place.
- Create the required sibling files in the same folder.
- Use ONLY the currently active file as the source of truth.
- Do NOT inspect the whole repo.
- Do NOT compare against other files.
- If direct editing is not available, reply only with:
EDIT_MODE_NOT_AVAILABLE

GOAL:
Create a lesson pack optimized for:
- lesson imprinting
- active recall
- exam-style retrieval
- later grading
- weak-spot correction
- better long-term memory

FILES TO UPDATE / CREATE:
Using the active file base name, do this:

1. Update:
- <base-name>.md

2. Create if missing:
- <base-name>.ts
- <base-name>-SUMMARY.md

Example:
If active file is:
- 3.1-object-literals.md

Then update/create:
- 3.1-object-literals.md
- 3.1-object-literals.ts
- 3.1-object-literals-SUMMARY.md

==================================================
PART 1 — UPDATE THE ACTIVE LESSON MARKDOWN
==================================================

Update the active markdown file into a fully expanded lesson note.

Use this exact section order:

# <Lesson Title>

Phase: <from active file if available>
Topic: <from active file if available>
Status: Expanded

## Fast Goal
- one short sentence

## Brain Hook
- one short memorable line

## Why This Matters
- short real-world value
- explain why this concept matters in real coding

## Micro Rule
- one short practical rule

## Core Idea
- simple explanation
- no long theory
- direct and recall-friendly

## Code Examples
- include at least one good example
- include one bad example if useful
- keep examples short

## Fast Comparison
- only if applicable
- short contrast between similar ideas

## Mental Model
- one simple analogy

## Tiny Example
- one very small example

## Output Prediction Drill
- include one short code sample
- ask what the output is
- include the answer

## Practice
### Drill 1
- basic

### Drill 2
- slightly harder

### Drill 3
- object/array or real-world style if applicable

### Drill 4
- explain in 1–2 lines

## Your Task
- one small implementation or transformation task

## Expected Solution
- short and correct
- directly tied to the task

## Common Mistakes
- short bullet-style lines

## Debug Check
- broken code
- ask what is wrong
- include short answer

## Meeting Answer
- one short strong explanation someone can say out loud

## Perfect Explanation
- 1–2 precise lines only

## Guiding Questions
- add 2–3 short questions
- these should help the learner think before answering

## Done Signal
- 3–5 short mastery indicators

RULES FOR THE MARKDOWN:
- concise
- practical
- execution-focused
- no long theory
- active recall focused
- progressive
- TypeScript examples preferred
- written to support later execution mode
- no extra sections

==================================================
PART 2 — CREATE THE BASE EXAM FILE
==================================================

Create <base-name>.ts as the immutable master exercise template.

PURPOSE:
- This is the recall/exam file.
- It must NEVER be edited after creation.
- The learner will copy it into:
  - <base-name>-v1.ts
  - <base-name>-v2.ts
  - <base-name>-v3.ts

TOP OF FILE:
Add this exact style of header comment:

/*
Lesson: <Lesson Title>
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - <base-name>-v1.ts
  - <base-name>-v2.ts
  - <base-name>-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

Then include:

export {};

Then generate these exact sections:

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// ==================================================
// PART 2: DRILL 1
// ==================================================

// ==================================================
// PART 3: DRILL 2
// ==================================================

// ==================================================
// PART 4: DRILL 3
// ==================================================

// ==================================================
// PART 5: DRILL 4
// ==================================================

// ==================================================
// PART 6: FINAL TASK
// ==================================================

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

CONTENT RULES FOR THE EXAM FILE:
- comments/instructions only
- no solutions
- no filled answers
- no long paragraphs
- progressive difficulty
- recall-first
- learner must explain in own words first
- learner must then write code
- learner must then do one practical final task
- self-check must test understanding, not trivia
- meeting practice must be short and speakable
- final task should combine the concept in a realistic way
- keep everything based only on the active lesson topic

RECALL DESIGN RULES:
- Part 1 must force explanation from memory
- Part 2 must be very small and easy to start
- Part 3 must add one more step
- Part 4 must use an object/array/real-world shape when possible
- Part 5 must force short written explanation
- Part 6 must combine the lesson idea in one practical task
- Part 7 must reinforce exact weak-point recall
- Part 8 must make the learner say the concept clearly

==================================================
PART 3 — CREATE THE SUMMARY FILE
==================================================

Create <base-name>-SUMMARY.md using this exact structure:

# <Lesson Title> - Summary

## Lesson Identity

- Lesson: <Lesson Title>
- Base exercise file: [<base-name>.ts](<base-name>.ts)
- Lesson note: [<base-name>.md](<base-name>.md)

## Workflow Rule

The base file stays unchanged.

Version files will be created manually by the learner, such as:

- `<base-name>-v1.ts`
- `<base-name>-v2.ts`
- `<base-name>-v3.ts`

Assessment happens on the versioned files.
Later attempts should only fix weak spots instead of repeating the full lesson.

## Status

- Status: STARTED

## Attempts

- v1: Pending
- v2: Pending
- v3: Pending

## Final Grade

- Rate: /100
- Strongest Attempt:

## Recurring Mistakes

- Concept Error:
- Execution Error:
- Precision Error:
- Clarity Error:

## Mastery Notes

- final correct understanding:
- perfect explanation:

## Next Action

- Complete v1.

RULES FOR SUMMARY:
- concise
- strict
- no invented grades
- no extra commentary
- built for repeated updates after grading

==================================================
PART 4 — FUTURE GRADING / RECALL LOCK-IN RULE
==================================================

When I later say things like:
- grade exam
- kindly grade
- grade v1
- grade v2
- update summary

You must:
1. read only the submitted version file
2. grade it from 0–100
3. point out exact mistakes only
4. identify whether understanding is conceptually correct
5. update the matching SUMMARY file in place
6. keep later attempts focused only on weak spots
7. never rewrite the whole lesson unless I ask

WHEN UPDATING THE SUMMARY AFTER GRADING:
- update Status to ONGOING or DONE
- update Attempts
- update Final Grade
- update Strongest Attempt
- update Recurring Mistakes
- update Mastery Notes
- update Next Action

GRADING PHILOSOPHY:
- reward correct understanding and working code
- deduct for conceptual confusion
- deduct for incorrect or incomplete implementation
- deduct for imprecise explanations
- deduct for weak clarity when the lesson asks for a definition
- do not force perfection if the core understanding is correct

==================================================
PART 5 — SUCCESS RESPONSE
==================================================

If file operations succeed, do NOT print the files in chat.

Reply only in this short format:

Updated:
- <base-name>.md

Created:
- <base-name>.ts
- <base-name>-SUMMARY.md