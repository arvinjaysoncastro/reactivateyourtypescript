You are generating ONE summary markdown file for a coding exercise lesson.

TASK:
Create a lesson summary file that tracks attempts, grading, recurring mistakes, mastery notes, and next action.

OUTPUT RULES:
- Output only the final markdown content
- Do not add markdown fences
- Do not explain anything outside the file
- Do not generate the base exercise file
- Do not generate lesson.md

PURPOSE:
This summary file tracks the learner's progress across versioned attempt files such as:
- <lesson-slug>-v1.ts
- <lesson-slug>-v2.ts
- <lesson-slug>-v3.ts

STYLE:
- concise
- practical
- strict
- clean markdown
- no fluff
- grading-oriented

REQUIRED STRUCTURE:

# <Lesson Title> - Summary

## Lesson Identity
- Lesson: <Lesson Title>
- Base exercise file: [<base-file-name>](<base-file-name>)
- Lesson note: [<lesson-markdown-file>](<lesson-markdown-file>)

## Workflow Rule
Explain briefly:
- base file stays unchanged
- version files are created manually
- assessment happens on version files
- later attempts should only fix weak spots

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
- one short action line telling the learner what to do next

RULES:
- keep it compact
- do not over-explain
- do not invent grades unless they are provided
- keep the structure reusable across lessons

Now generate the summary file for this lesson:
[PASTE LESSON TITLE, BASE FILE NAME, AND LESSON NOTE FILE NAME HERE]