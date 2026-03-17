export interface QuickLineChallenge {
  prompt: string;
  codeBefore: string[];
  codeAfter: string[];
  answer: string;
  hint: string;
}

export const quickLineChallenges: QuickLineChallenge[] = [
  // Scope & Closures
  { prompt: 'Declare a block-scoped constant named PI with value 3.14159', codeBefore: [], codeAfter: ['console.log(PI);'], answer: 'const PI = 3.14159;', hint: 'Use const for block-scoped constants' },
  { prompt: 'Create a closure that captures a counter variable', codeBefore: ['function makeCounter() {', '  let count = 0;'], codeAfter: ['}'], answer: '  return () => ++count;', hint: 'Return a function that increments and returns count' },
  { prompt: 'Destructure name and age from the user object', codeBefore: ['const user = { name: "Alice", age: 30, email: "a@b.c" };'], codeAfter: ['console.log(name, age);'], answer: 'const { name, age } = user;', hint: 'Use curly braces for object destructuring' },
  { prompt: 'Use the spread operator to clone the array', codeBefore: ['const original = [1, 2, 3];'], codeAfter: ['console.log(copy);'], answer: 'const copy = [...original];', hint: 'Spread into a new array literal' },
  { prompt: 'Use optional chaining to safely access street', codeBefore: ['const user = { address: null };'], codeAfter: [], answer: 'const street = user.address?.street;', hint: 'Use ?. to short-circuit on null/undefined' },
  { prompt: 'Use nullish coalescing to provide a default', codeBefore: ['const input = null;'], codeAfter: ['console.log(value);'], answer: 'const value = input ?? "default";', hint: '?? only triggers on null/undefined, not on "" or 0' },
  { prompt: 'Create an arrow function that doubles a number', codeBefore: [], codeAfter: ['console.log(double(5)); // 10'], answer: 'const double = (n: number) => n * 2;', hint: 'Arrow function with implicit return' },
  { prompt: 'Use template literal for string interpolation', codeBefore: ['const name = "World";'], codeAfter: [], answer: 'const greeting = `Hello, ${name}!`;', hint: 'Use backticks and ${} for interpolation' },
  // this keyword
  { prompt: 'Bind the function to the user object', codeBefore: ['const user = { name: "Alice" };', 'function greet() { return `Hi, ${this.name}`; }'], codeAfter: ['console.log(boundGreet());'], answer: 'const boundGreet = greet.bind(user);', hint: 'Use .bind(obj) to permanently set this' },
  { prompt: 'Call the function with a specific this context', codeBefore: ['const obj = { x: 42 };', 'function getX() { return this.x; }'], codeAfter: [], answer: 'const result = getX.call(obj);', hint: '.call(obj) invokes with obj as this' },
  // Prototypes & Classes
  { prompt: 'Define a class that extends Animal', codeBefore: ['class Animal { constructor(public name: string) {} }'], codeAfter: ['  bark() { return "Woof!"; }', '}'], answer: 'class Dog extends Animal {', hint: 'Use extends for class inheritance' },
  { prompt: 'Add a private field to the class', codeBefore: ['class Counter {'], codeAfter: ['  increment() { this.#count++; }', '  get value() { return this.#count; }', '}'], answer: '  #count = 0;', hint: '# prefix creates a truly private field' },
  // Promises & Async
  { prompt: 'Create a promise that resolves after 1 second', codeBefore: [], codeAfter: [], answer: 'const delay = new Promise(resolve => setTimeout(resolve, 1000));', hint: 'Pass resolve to setTimeout' },
  { prompt: 'await both promises in parallel', codeBefore: ['async function fetchBoth() {', '  const p1 = fetch("/api/a");', '  const p2 = fetch("/api/b");'], codeAfter: ['}'], answer: '  const [a, b] = await Promise.all([p1, p2]);', hint: 'Promise.all runs promises in parallel' },
  { prompt: 'Handle promise rejection with catch', codeBefore: ['fetch("/api/data")'], codeAfter: ['  .catch(err => console.error(err));'], answer: '  .then(res => res.json())', hint: '.then() chains before .catch()' },
  { prompt: 'Create an async function that returns user data', codeBefore: [], codeAfter: ['  const res = await fetch("/api/user");', '  return res.json();', '}'], answer: 'async function getUser() {', hint: 'Use the async keyword before function' },
  // Event Loop
  { prompt: 'Queue a microtask', codeBefore: ['console.log("start");'], codeAfter: ['console.log("end");', '// Output: start, end, microtask'], answer: 'queueMicrotask(() => console.log("microtask"));', hint: 'queueMicrotask() schedules a microtask' },
  // Iterators & Generators
  { prompt: 'Make the object iterable with Symbol.iterator', codeBefore: ['const range = {', '  from: 1,', '  to: 3,'], codeAfter: ['      if (current <= this.to) return { value: current++, done: false };', '      return { done: true, value: undefined };', '    }', '  };', '  }', '};'], answer: '  [Symbol.iterator]() { let current = this.from; return {next: () => {', hint: 'Implement [Symbol.iterator] returning {next()}' },
  { prompt: 'Define a generator function that yields 1, 2, 3', codeBefore: [], codeAfter: ['  yield 2;', '  yield 3;', '}'], answer: 'function* nums() { yield 1;', hint: 'function* defines a generator' },
  // Proxy
  { prompt: 'Create a proxy that logs property access', codeBefore: ['const obj = { a: 1, b: 2 };'], codeAfter: ['  }', '});'], answer: 'const proxy = new Proxy(obj, { get(target, prop) { console.log(`get ${String(prop)}`); return target[prop];', hint: 'Use Proxy with a get trap' },
  // Type Coercion
  { prompt: 'Check for NaN correctly', codeBefore: ['const value = NaN;'], codeAfter: ['console.log(isNan); // true'], answer: 'const isNan = Number.isNaN(value);', hint: 'Use Number.isNaN() not isNaN()' },
  { prompt: 'Use strict equality instead of loose', codeBefore: ['const a = 0;', 'const b = "";'], codeAfter: ['// false with ===, true with =='], answer: 'const equal = a === b;', hint: '=== checks value and type without coercion' },
  // TypeScript Types
  { prompt: 'Define a union type for API response status', codeBefore: [], codeAfter: ['const s: Status = "loading";'], answer: 'type Status = "loading" | "success" | "error";', hint: 'Use | to create a union of string literals' },
  { prompt: 'Create an intersection type', codeBefore: ['type HasName = { name: string };', 'type HasAge = { age: number };'], codeAfter: ['const p: Person = { name: "Alice", age: 30 };'], answer: 'type Person = HasName & HasAge;', hint: 'Use & to combine types' },
  { prompt: 'Make all properties of User optional', codeBefore: ['interface User { id: number; name: string; email: string; }'], codeAfter: [], answer: 'type PartialUser = Partial<User>;', hint: 'Use the Partial<T> utility type' },
  { prompt: 'Pick only id and name from User', codeBefore: ['interface User { id: number; name: string; email: string; age: number; }'], codeAfter: [], answer: 'type UserSummary = Pick<User, "id" | "name">;', hint: 'Use Pick<T, K> to select specific properties' },
  { prompt: 'Define a readonly tuple type', codeBefore: [], codeAfter: ['// t[0] = "x"; // Error: readonly'], answer: 'const t = ["hello", 42] as const;', hint: 'Use as const for readonly literal tuples' },
  { prompt: 'Extract the return type of a function', codeBefore: ['function createUser() { return { id: 1, name: "Alice" }; }'], codeAfter: [], answer: 'type User = ReturnType<typeof createUser>;', hint: 'Use ReturnType<typeof fn>' },
  // Generics
  { prompt: 'Define a generic function that returns the first element', codeBefore: [], codeAfter: ['console.log(first([1, 2, 3])); // 1'], answer: 'function first<T>(arr: T[]): T | undefined { return arr[0]; }', hint: 'Use <T> for the generic parameter' },
  { prompt: 'Add a constraint: T must have an id property', codeBefore: [], codeAfter: ['  return items.find(item => item.id === id);', '}'], answer: 'function findById<T extends { id: number }>(items: T[], id: number): T | undefined {', hint: 'Use extends to constrain the generic' },
  { prompt: 'Create a generic interface for API responses', codeBefore: [], codeAfter: ['const res: ApiResponse<string[]> = { data: ["a"], error: null, loading: false };'], answer: 'interface ApiResponse<T> { data: T; error: string | null; loading: boolean; }', hint: 'Generic interface with <T> parameter' },
  // Type Guards
  { prompt: 'Write a type guard function for string', codeBefore: [], codeAfter: ['if (isString(value)) { value.toUpperCase(); }'], answer: 'function isString(value: unknown): value is string { return typeof value === "string"; }', hint: 'Return type is "value is string"' },
  { prompt: 'Use a discriminated union switch', codeBefore: ['type Shape = { kind: "circle"; r: number } | { kind: "square"; s: number };', 'function area(shape: Shape) {'], codeAfter: ['    case "square": return shape.s ** 2;', '  }', '}'], answer: '  switch (shape.kind) { case "circle": return Math.PI * shape.r ** 2;', hint: 'Switch on the discriminant property' },
  // Modules
  { prompt: 'Export a named function', codeBefore: [], codeAfter: ['  return a + b;', '}'], answer: 'export function add(a: number, b: number): number {', hint: 'Add export before the function keyword' },
  { prompt: 'Import with renaming', codeBefore: [], codeAfter: ['console.log(sum(1, 2));'], answer: 'import { add as sum } from "./math";', hint: 'Use { original as alias } syntax' },
  { prompt: 'Dynamic import a module', codeBefore: ['async function loadModule() {'], codeAfter: ['  chart.render();', '}'], answer: '  const { default: chart } = await import("./chart");', hint: 'import() returns a Promise' },
  // Error Handling
  { prompt: 'Create a custom error class', codeBefore: [], codeAfter: ['  }', '}'], answer: 'class NotFoundError extends Error { constructor(msg: string) { super(msg); this.name = "NotFoundError";', hint: 'Extend Error and set this.name' },
  { prompt: 'Use try-catch with specific error types', codeBefore: ['try {', '  riskyOperation();'], codeAfter: ['    console.warn("Not found");', '  } else { throw e; }', '}'], answer: '} catch (e) { if (e instanceof NotFoundError) {', hint: 'Use instanceof to check error type' },
  // Map, Set, WeakMap
  { prompt: 'Create a Map from entries', codeBefore: [], codeAfter: ['console.log(map.get("a")); // 1'], answer: 'const map = new Map([["a", 1], ["b", 2]]);', hint: 'Pass an array of [key, value] pairs' },
  { prompt: 'Store private data with WeakMap', codeBefore: ['const privates = new WeakMap();', 'class Secret {'], codeAfter: ['  }', '  get() { return privates.get(this).value; }', '}'], answer: '  constructor(value: string) { privates.set(this, { value });', hint: 'Use this as the WeakMap key' },
  // Performance
  { prompt: 'Create a debounced function', codeBefore: ['function debounce(fn: Function, ms: number) {', '  let timer: ReturnType<typeof setTimeout>;'], codeAfter: ['  };', '}'], answer: '  return (...args: any[]) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms);', hint: 'Clear previous timer and set a new one' },
  { prompt: 'Use Object.freeze for an immutable config', codeBefore: [], codeAfter: ['// config.api = "x"; // Error in strict mode'], answer: 'const config = Object.freeze({ api: "https://api.example.com", timeout: 5000 });', hint: 'Object.freeze prevents modifications' },
  // Advanced TypeScript
  { prompt: 'Use a conditional type to unwrap Promise', codeBefore: [], codeAfter: ['type A = Unwrap<Promise<string>>; // string', 'type B = Unwrap<number>; // number'], answer: 'type Unwrap<T> = T extends Promise<infer U> ? U : T;', hint: 'Use infer to extract the inner type' },
  { prompt: 'Create a mapped type that makes all values strings', codeBefore: ['interface Data { count: number; active: boolean; name: string; }'], codeAfter: [], answer: 'type Stringified<T> = { [K in keyof T]: string };', hint: 'Iterate with [K in keyof T] and map to string' },
  { prompt: 'Use template literal type for event names', codeBefore: ['type Event = "click" | "hover";'], codeAfter: ['// "onClick" | "onHover"'], answer: 'type Handler = `on${Capitalize<Event>}`;', hint: 'Use template literal types with Capitalize' },
  { prompt: 'Extract parameter types of a function', codeBefore: ['function greet(name: string, age: number) { }'], codeAfter: ['// [string, number]'], answer: 'type Params = Parameters<typeof greet>;', hint: 'Parameters<typeof fn> returns a tuple of parameter types' },
  { prompt: 'Create a Record type for a lookup table', codeBefore: [], codeAfter: ['map.success = "#0f0";'], answer: 'const map: Record<string, string> = { error: "#f00", warning: "#ff0" };', hint: 'Record<K, V> creates an object type with keys K and values V' },
  // Symbols
  { prompt: 'Create a unique symbol', codeBefore: [], codeAfter: ['const obj = { [id]: 42 };'], answer: 'const id = Symbol("id");', hint: 'Symbol() creates a unique identifier' },
  // Async Patterns
  { prompt: 'Use Promise.race to add a timeout', codeBefore: ['function fetchWithTimeout(url: string, ms: number) {'], codeAfter: ['  ]);', '}'], answer: '  return Promise.race([fetch(url), new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))', hint: 'Race the fetch against a timeout promise' },
  { prompt: 'Use for-await-of for async iteration', codeBefore: ['async function processStream(stream: AsyncIterable<string>) {'], codeAfter: ['    console.log(chunk);', '  }', '}'], answer: '  for await (const chunk of stream) {', hint: 'for await...of iterates over async iterables' },
  // Object & Array tricks
  { prompt: 'Swap two variables without a temp', codeBefore: ['let a = 1, b = 2;'], codeAfter: ['// a = 2, b = 1'], answer: '[a, b] = [b, a];', hint: 'Use destructuring assignment to swap' },
  { prompt: 'Remove duplicates from an array', codeBefore: ['const arr = [1, 2, 2, 3, 3, 3];'], codeAfter: ['// [1, 2, 3]'], answer: 'const unique = [...new Set(arr)];', hint: 'Set removes duplicates, spread converts back to array' },
  { prompt: 'Flatten a nested array', codeBefore: ['const nested = [[1, 2], [3, 4], [5]];'], codeAfter: ['// [1, 2, 3, 4, 5]'], answer: 'const flat = nested.flat();', hint: 'Array.flat() flattens one level by default' },
  { prompt: 'Create an object from key-value pairs', codeBefore: ['const entries: [string, number][] = [["a", 1], ["b", 2]];'], codeAfter: ['// { a: 1, b: 2 }'], answer: 'const obj = Object.fromEntries(entries);', hint: 'Object.fromEntries converts [key, value] pairs to an object' },
  { prompt: 'Use Array.from to create a range', codeBefore: [], codeAfter: ['// [0, 1, 2, 3, 4]'], answer: 'const range = Array.from({ length: 5 }, (_, i) => i);', hint: 'Array.from with a mapping function' },
  { prompt: 'Group array items by a property', codeBefore: ['const items = [{ type: "a", v: 1 }, { type: "b", v: 2 }, { type: "a", v: 3 }];'], codeAfter: ['// { a: [...], b: [...] }'], answer: 'const grouped = Object.groupBy(items, item => item.type);', hint: 'Object.groupBy groups by the returned key' },
];
