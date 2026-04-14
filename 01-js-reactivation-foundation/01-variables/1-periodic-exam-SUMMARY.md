# 1 Variables Periodic Exam - Summary

## Lesson Identity

- Lesson: 1 Variables Periodic Exam
- Base exam file: [1-periodic-exam.ts](1-periodic-exam.ts)
- Review note: [1-periodic-exam.md](1-periodic-exam.md)

## Coverage

- 1.1 Const vs Let
- 1.2 Immutability Mindset
- 1.3 Primitive vs Reference

## Workflow Rule

The base exam file stays unchanged.

Version files will be created manually by the learner, such as:

- `1-periodic-exam-v1.ts`
- `1-periodic-exam-v2.ts`
- `1-periodic-exam-v3.ts`

Assessment happens on the versioned files.
Later attempts should only fix weak spots instead of repeating the full exam.

## Status

- Status: DONE

## Attempts

- v1: 84/100
- v2: 91/100
- v3: Pending

## Final Grade

- Rate: 91/100
- Strongest Attempt: v2

## Subtopic Signal

- 1.1 Const vs Let: Stronger than v1; the key idea is mostly correct, but the opening recall answer still describes `const` and `let` less precisely than it should.
- 1.2 Immutability Mindset: Understood; the copy-based updates are correct and clearly demonstrated.
- 1.3 Primitive vs Reference: Understood; shared-reference behavior is demonstrated correctly, with only minor wording polish still needed.

## Recurring Mistakes

- Concept Error: The remaining concept issue is mostly wording: `const` and `let` should both be described in terms of the binding, not as protecting or reassigning the "data" itself.
- Execution Error: The main execution issues from v1 were fixed in v2.
- Precision Error: A few answers still use slightly loose language, especially the first recall answer and some final comments around shared reference behavior.
- Clarity Error: Minor grammar and typo issues remain, such as awkward phrasing and small misspellings like `updateing` and `userPrfile`.

## Mastery Notes

- final correct understanding: `const` prevents reassignment of a binding, immutability prefers creating updated copies instead of mutating shared state directly, and primitive assignment copies the value while object or array assignment can share one reference.
- perfect explanation: `const` protects the binding, not the inside of an object. Immutability prefers updated copies, and reference values can share one underlying object or array so one mutation can affect multiple variables.

## Next Action

- Move to the next lesson or create `1-periodic-exam-v3.ts` only if you want a final polish pass on terminology and wording.
