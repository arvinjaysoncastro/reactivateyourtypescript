You are working in EDIT/CREATE mode for ONE active phase/topic folder.

IMPORTANT MODE:
- Update files directly in the workspace.
- Do not reply with full file contents in chat if file editing succeeds.
- Create the required files directly on disk.
- Use ONLY the lesson files in the currently active phase/topic folder.
- Do NOT inspect the whole repo outside this active phase folder.
- If direct editing is not available, reply only with:
EDIT_MODE_NOT_AVAILABLE

GOAL:
Create a combined phase-level lesson pack that integrates the existing sub-lessons into one major lesson and one major exam.

IMPORTANT:
- Do NOT delete or overwrite the individual sub-lesson files.
- The individual lesson files remain the quiz-level units.
- The new combined files are the major integrated lesson and major exam.

TARGET GROUP:
Phase/Topic Group Name: <PHASE_GROUP_NAME>
Combined Base Name: <COMBINED_BASE_NAME>

Sub-lessons to integrate:
- <SUB_LESSON_1>
- <SUB_LESSON_2>
- <SUB_LESSON_3>
- <SUB_LESSON_4>

Create these new combined files in the same folder:
- <COMBINED_BASE_NAME>.md
- <COMBINED_BASE_NAME>.ts
- <COMBINED_BASE_NAME>-SUMMARY.md

==================================================
PART 1 — CREATE THE COMBINED PHASE LESSON MARKDOWN
==================================================

Create `<COMBINED_BASE_NAME>.md` as a combined lesson that integrates:
- <SUB_LESSON_1_SHORT>
- <SUB_LESSON_2_SHORT>
- <SUB_LESSON_3_SHORT>
- <SUB_LESSON_4_SHORT>

This file should feel like:
- one phase lesson
- one integrated mental model
- one higher-level pass
- still practical and recall-friendly

Use this structure:

# <PHASE_GROUP_NAME>

Phase: <PHASE_NAME>
Topic: <TOPIC_NAME>
Status: Expanded

## Fast Goal
## Brain Hook
## Why This Matters
## Micro Rule
## Core Idea
## Code Examples
## Fast Comparison
## Mental Model
## Tiny Example
## Output Prediction Drill
## Practice
### Drill 1
### Drill 2
### Drill 3
### Drill 4
## Your Task
## Expected Solution
## Common Mistakes
## Debug Check
## Meeting Answer
## Perfect Explanation
## Guiding Questions
## Done Signal

CONTENT RULES:
- Cover all listed sub-lessons in one coherent progression
- Keep the order logical from foundational to more advanced
- Keep examples short
- Keep wording concise
- TypeScript preferred
- Make the drills progressive across the whole topic flow
- The final task should combine all major subtopic skills in one realistic mini-problem

==================================================
PART 2 — CREATE THE COMBINED MAJOR EXAM FILE
==================================================

Create `<COMBINED_BASE_NAME>.ts` as the immutable base major exam file.

PURPOSE:
- This is the major exam for the full topic group
- It combines all listed sub-lessons in one retrieval exercise
- The learner will answer in:
  - <COMBINED_BASE_NAME>-v1.ts
  - <COMBINED_BASE_NAME>-v2.ts
  - <COMBINED_BASE_NAME>-v3.ts

TOP OF FILE:
Add a header comment like:

/*
Lesson: <PHASE_GROUP_NAME>
Purpose: Base exercise file

Rules for this file:
- Keep this file unedited as the master template.
- Copy it when you want to answer the exercise.
- Your answer files can be named like:
  - <COMBINED_BASE_NAME>-v1.ts
  - <COMBINED_BASE_NAME>-v2.ts
  - <COMBINED_BASE_NAME>-v3.ts
- Assessment will happen on the v files, not on this base file.
*/

Then include:

export {};

Then generate these exact parts:

// ==================================================
// PART 1: WRITE WHAT YOU UNDERSTAND
// ==================================================

// ==================================================
// PART 2: SUBTOPIC 1 DRILL
// ==================================================

// ==================================================
// PART 3: SUBTOPIC 2 DRILL
// ==================================================

// ==================================================
// PART 4: SUBTOPIC 3 DRILL
// ==================================================

// ==================================================
// PART 5: SUBTOPIC 4 DRILL
// ==================================================

// ==================================================
// PART 6: INTEGRATED FINAL TASK
// ==================================================

// ==================================================
// PART 7: SELF-CHECK
// ==================================================

// ==================================================
// PART 8: MEETING PRACTICE
// ==================================================

RULES:
- comments/instructions only
- no solutions
- no filled answers
- recall-first
- progressive
- each drill should test its subtopic clearly
- the integrated final task should combine all main subtopic skills
- make the final task realistic and practical

==================================================
PART 3 — CREATE THE COMBINED SUMMARY FILE
==================================================

Create `<COMBINED_BASE_NAME>-SUMMARY.md` with this structure:

# <PHASE_GROUP_NAME> - Summary

## Lesson Identity

- Lesson: <PHASE_GROUP_NAME>
- Base exercise file: [<COMBINED_BASE_NAME>.ts](<COMBINED_BASE_NAME>.ts)
- Lesson note: [<COMBINED_BASE_NAME>.md](<COMBINED_BASE_NAME>.md)

## Workflow Rule

The base file stays unchanged.

Version files will be created manually by the learner, such as:

- `<COMBINED_BASE_NAME>-v1.ts`
- `<COMBINED_BASE_NAME>-v2.ts`
- `<COMBINED_BASE_NAME>-v3.ts`

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

## Subtopic Signal

- <SUBTOPIC_LABEL_1>:
- <SUBTOPIC_LABEL_2>:
- <SUBTOPIC_LABEL_3>:
- <SUBTOPIC_LABEL_4>:

## Recurring Mistakes

- Concept Error:
- Execution Error:
- Precision Error:
- Clarity Error:

## Mastery Notes

- final correct understanding:
- perfect explanation:

## Next Action

- Complete `<COMBINED_BASE_NAME>-v1.ts`.

==================================================
PART 4 — FUTURE GRADING RULE
==================================================

When I later say:
- grade exam
- grade <COMBINED_BASE_NAME>-v1.ts
- grade <COMBINED_BASE_NAME>-v2.ts
- update summary

You must:
1. read only the submitted version file
2. grade it from 0–100
3. point out exact mistakes only
4. update `<COMBINED_BASE_NAME>-SUMMARY.md`
5. fill `Subtopic Signal` for:
   - <SUBTOPIC_LABEL_1>
   - <SUBTOPIC_LABEL_2>
   - <SUBTOPIC_LABEL_3>
   - <SUBTOPIC_LABEL_4>
6. keep later attempts focused only on weak spots

==================================================
SUCCESS RESPONSE
==================================================

If file operations succeed, do NOT print the files in chat.

Reply only with:

Created:
- <COMBINED_BASE_NAME>.md
- <COMBINED_BASE_NAME>.ts
- <COMBINED_BASE_NAME>-SUMMARY.md