/*
Lesson: 1.2 Immutability Mindset
Attempt: v2
Purpose: Targeted correction pass only

Why this file exists:
- v1 already showed the core coding skill.
- v2 should fix only the parts that lowered the score.
- Do not redo the sections that were already correct.
*/

export {};

// ==================================================
// PART 1: EXPLANATION TIGHTENING ONLY
// ==================================================

// Rewrite this in only 1-3 sentences:
// What does "immutability" mean in JavaScript?
// Focus:
// - prefer new copies instead of changing the original data directly
// - keep it short
// - keep it clear
// immutability in JavaScript means preferring to create updated copies of data instead of changing the original data directly.


// ==================================================
// PART 2: SELF-CHECK PRECISION ONLY
// ==================================================

// Rewrite this answer more precisely:
// Which values were updated through copying?
// Focus:
// - name the updated copied values clearly
// - avoid naming only the changed property
// the values updated are updatedProfile.city from "Cebu" to "Manila" and updatedUser.active from false to true
// and updatedSettings.theme from "light" to "dark"
// and updatedSkills array which added a new skill "react" to the updatedSkill not the original skills


// ==================================================
// PART 3: MEETING POLISH ONLY
// ==================================================

// Write one clean meeting answer in 2-3 lines:
// "Why is immutability safer in real code?"
// Rules:
// - write it once only
// - no repeated practice lines
// - no spelling mistakes
// immutability is safer in real codebase because you maintain your original data
// while holding your updated data in a new copy, which makes it easy to track and debug,
// also preventing unintended consequences if the original is being used elsewhere in the code base.