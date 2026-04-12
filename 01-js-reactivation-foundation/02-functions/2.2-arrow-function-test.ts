const tasks = [
  { title: "Email client", done: true },
  { title: "Write report", done: false },
  { title: "Fix bug", done: true },
];
const taskTitles = tasks.map((task) => { return { title: task.title }});

console.log( taskTitles );