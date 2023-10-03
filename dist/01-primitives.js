"use strict";
// -------- numbers ----------------------------------------------------------------
let x = 10.5;
x = -10;
x = 3.5;
x = 10000;
let z = NaN;
let age = 10;
// let y = 12345n;
// age = '10' => error
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log("res: ", res);
// -------- string ----------------------------------------------------------------
let str1;
str1 = 'Hello world';
let str2 = 'something';
let symb = Symbol('as');
// let a = str1 + symb => error
// -------- boolean ----------------------------------------------------------------
let b = true;
b = false;
// b = 1 => error
// -------- nothing ----------------------------------------------------------------
let c = undefined;
let d = null;
// -------- literal ----------------------------------------------------------------
const num = 108;
const str3 = 'string';
// -------- universal ----------------------------------------------------------------
let e = 'str';
e = [];
e = {};
e = 7;
if (typeof e === 'string') {
    e.toUpperCase();
}
let xx = 2;
if (typeof e === 'string') {
    e.toUpperCase();
}
//# sourceMappingURL=01-primitives.js.map