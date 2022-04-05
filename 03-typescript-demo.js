// tsc 03-typescript-demo.ts
// node 03-typescript-demo.js
var num = 10;
var num2 = "abc"; // 20 "abc" // Type 'string' is not assignable to type 'number'.ts(2322)
var num3 = num + num2;
console.log(num3);
