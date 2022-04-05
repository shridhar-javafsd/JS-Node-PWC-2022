// tsc 03-typescript-demo.ts
// node 03-typescript-demo.js

let num: number = 10;
let num2: number = "abc"; // 20 "abc" // Type 'string' is not assignable to type 'number'.ts(2322)
let num3: number = num + num2;
console.log(num3);
