You are generating a complete lesson pack for ONE active lesson file only.

IMPORTANT SCOPE RULE:
- Use ONLY the currently active file as the source of truth.
- Do NOT inspect the whole repo.
- Do NOT compare against other files.
- Do NOT infer from the broader project unless explicitly written in the active file.
- Everything must be self-contained from the active lesson only.

GOAL:
Create these 3 files for the active lesson:

1. lesson.md
   - full structured teaching note

2. lesson.ts
   - immutable base exercise template
   - this is the exam/practice file
   - learner will copy this into versioned files like:
     - lesson-v1.ts
     - lesson-v2.ts
     - lesson-v3.ts

3. lesson-SUMMARY.md
   - grading + tracking template
   - later this file will be updated when I say: grade exam

GENERAL STYLE:
- concise
- practical
- execution-focused
- no long theory
- active recall focused
- progressive drills
- short clean wording
- TypeScript preferred
- no fluff
- learner should be forced to think and write code

==================================================
PART A — GENERATE lesson.md
==================================================

Create lesson.md using this exact section order:

# lesson.md

# <Lesson Title>

Phase: <from active file if available>
Topic: <from active file if available>
Status: Ready for expansion

## Fast Goal
- one short sentence

## Brain Hook
- one short memorable line

## Why This Matters
- short real-world value
- explain why this concept matters in actual coding

## Micro Rule
- one short practical rule

## Core Idea
- clear and simple explanation
- no long theory
- show the core mental model directly

## Code Examples
- include at least one good example
- include one bad example if useful for contrast
- keep examples short

## Fast Comparison
- include only if applicable
- short contrast between two related things

## Mental Model
- simple analogy

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
- one small transformation or implementation task

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
- short, strong explanation someone can say in a meeting

## Perfect Explanation
- 1–2 precise lines only

## Guiding Questions
- add 2–3 short questions
- these should help the learner think before answering

## Done Signal
- clear mastery indicators
- 3–5 short bullets

RULES FOR lesson.md:
- output complete markdown content
- keep it compact
- keep it execution-friendly
- support future execution mode
- do not add anything outside the lesson content

==================================================
PART B — GENERATE lesson.ts
==================================================

Create lesson.ts as the immutable base exercise template.

PURPOSE:
- This is the master exercise file.
- It must NEVER be edited after creation.
- The learner will answer in copied version files only.

REQUIRED HEADER COMMENT:
At the top, include a block comment like this structure:

/*
Lesson: <Lesson Title>
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - <lesson-slug>-v1.ts
  - <lesson-slug>-v2.ts
  - <lesson-slug>-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

Then include:

export {};

Then generate the exercise using these exact parts and section dividers:

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

- Add 2–3 short written prompts in comments
- These should ask the learner to explain the concept in their own words

// ==================================================
// PART 2: DRILL 1
// ==================================================

- one small coding drill

// ==================================================
// PART 3: DRILL 2
// ==================================================

- one slightly harder coding drill

// ==================================================
// PART 4: DRILL 3
// ==================================================

- one array/object/real-world drill if applicable

// ==================================================
// PART 5: DRILL 4
// ==================================================

- one short explanation drill in comments

// ==================================================
// PART 6: FINAL TASK
// ==================================================

- one practical final task combining the lesson idea
- include short numbered requirements
- if useful, ask for one short comment only

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

- add 3–4 recall questions in comments
- short and direct

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

- add one short explanation script to say out loud
- concise and clean

RULES FOR lesson.ts:
- comments and instructions only
- no solutions
- no filled answers
- no test code unless the lesson naturally needs it as part of the instructions
- progressive difficulty
- recall-first
- should feel like an exam/practice file
- keep it minimal and executable as a template
- do not add anything outside the file

==================================================
PART C — GENERATE lesson-SUMMARY.md
==================================================

Create lesson-SUMMARY.md using this exact structure:

# <Lesson Title> - Summary

## Lesson Identity

- Lesson: <Lesson Title>
- Base exercise file: [<base-file-name>](<base-file-name>)
- Lesson note: [<lesson-markdown-file>](<lesson-markdown-file>)

## Workflow Rule

The base file stays unchanged.

Version files will be created manually by the learner, such as:

- `<lesson-slug>-v1.ts`
- `<lesson-slug>-v2.ts`
- `<lesson-slug>-v3.ts`

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

RULES FOR lesson-SUMMARY.md:
- clean markdown
- concise
- no invented grades
- reusable structure
- no extra commentary outside the file

==================================================
PART D — FUTURE GRADING MODE RULE
==================================================

This rule is for later behavior:

When I later say:
- grade exam
- kindly grade
- update summary
- grade v1 / v2 / v3

You must:
1. read only the submitted version file content
2. grade it from 0–100
3. identify exact mistakes with no fluff
4. determine strongest attempt
5. update lesson-SUMMARY.md accordingly
6. keep later attempts focused only on weak spots
7. never rewrite the whole lesson unless I ask

When updating lesson-SUMMARY.md after grading:
- update Status to ONGOING or DONE as appropriate
- fill Attempts
- fill Final Grade
- fill Recurring Mistakes
- fill Mastery Notes
- update Next Action

==================================================
OUTPUT FORMAT
==================================================

Output exactly in this order:

1. lesson.md
2. lesson.ts
3. lesson-SUMMARY.md

Use clear separators like:

=== lesson.md ===
<content>

=== lesson.ts ===
<content>

=== lesson-SUMMARY.md ===
<content>

Do not output any explanation before or after.

Now generate the complete 3-file lesson pack from the active file only.