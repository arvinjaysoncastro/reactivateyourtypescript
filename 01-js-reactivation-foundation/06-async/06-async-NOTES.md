# 6. Async

## 6.1 Promise Basics
A promise is a future value.
It starts as pending, then settles as fulfilled or rejected.
I handle it with `.then` and `.catch`, or with `await` inside an `async` function.

```ts
const p = new Promise<number>((resolve) => {
  setTimeout(() => resolve(5), 10);
});

p.then(value => console.log(value));
```

___

## 6.2 Async Await
`async` makes a function return a Promise.
`await` pauses that async function until the promise settles.
It makes async code read from top to bottom like synchronous code.

```ts
async function doubleAfter(ms: number, n: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, ms));
  return n * 2;
}
```

___

## 6.3 Chaining
Promise chaining preserves sequence because each `.then` receives the previous result.
If I return a promise from a `.then`, the chain waits for that async step before continuing.
This keeps multi-step async work in the correct order.

```ts
Promise.resolve(1)
  .then(n => n + 1)
  .then(n => n + 1)
  .then(result => console.log(result));
```

```ts
function chainAndSum(fns: Array<() => Promise<number>>): Promise<number> {
  return fns.reduce(
    (promise, fn) => promise.then(sum => fn().then(value => sum + value)),
    Promise.resolve(0)
  );
}
```

___

## 6.4 Simple Error Handling
Async code can fail, so I must handle rejections locally.
I use `.catch()` for promise chains or `try/catch` with `await`.
Good error handling returns a safe fallback instead of letting the app crash.

```ts
fetchData()
  .then(data => show(data))
  .catch(() => showFallback());
```

```ts
async function safeFetch(url: string) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch {
    return { status: 'fallback' };
  }
}
```

___

## Fast Summary
- Promise: a future value that will settle later.
- Async/await: a clearer way to write promise-based code.
- Chaining: return the next promise to preserve sequence.
- Error handling: catch failures locally and return a safe fallback.