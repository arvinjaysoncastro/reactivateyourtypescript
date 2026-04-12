You are generating ONE base exercise file for a coding lesson.

TASK:
Create a TypeScript base exercise file for the given lesson.

OUTPUT RULES:
- Output only the final `.ts` file content
- Do not add markdown fences
- Do not explain anything outside the file
- Do not generate answers
- Do not generate a summary file
- Do not generate lesson.md

PURPOSE:
This file is the immutable master exercise template.
The learner will copy it into versioned files like:
- <lesson-slug>-v1.ts
- <lesson-slug>-v2.ts
- <lesson-slug>-v3.ts

Assessment happens only on the versioned files, never on the base file.

STYLE:
- concise
- practical
- execution-focused
- recall-first
- no fluff
- short instructions
- progressive drills
- beginner-clear but not childish
- TypeScript only

FILE STRUCTURE:
1. Opening block comment:
   - Lesson title
   - Purpose: Base exercise file
   - Rules:
     - Keep this file unedited as the master template
     - Copy it when answering
     - Version files are assessed, not this file

2. `export {};`

3. Use clear section dividers like:
   - PART 1: WRITE WHAT YOU UNDERSTAND
   - PART 2: DRILL 1
   - PART 3: DRILL 2
   - PART 4: DRILL 3
   - PART 5: DRILL 4
   - PART 6: FINAL TASK
   - PART 7: SELF-CHECK
   - PART 8: MEETING PRACTICE

REQUIRED CONTENT:
- Part 1:
  2–3 short written-understanding prompts in comments
- Part 2:
  one basic coding drill
- Part 3:
  one slightly harder coding drill
- Part 4:
  one real-world or array/object drill
- Part 5:
  one short explanation drill in comments
- Part 6:
  one final task combining the lesson idea in a practical way
- Part 7:
  3–4 self-check questions in comments
- Part 8:
  one short meeting-practice explanation to say out loud

RULES FOR CONTENT:
- no solutions
- instructions/comments only
- progressive difficulty
- final task should feel like a mini-use case
- self-check questions should test recall, not trivia
- meeting practice should be short, clean, and speakable
- all content must match the exact lesson topic

Now generate the base exercise file for this lesson:
[PASTE LESSON TITLE AND TOPIC HERE]