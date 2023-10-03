// -------- numbers ----------------------------------------------------------------
let x = 10.5;
x = -10;
x = 3.5;
x = 10_000;
let z = NaN;
let age = 10;
// let y = 12345n;
// age = '10' => error

let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log("res: ", res);



// -------- string ----------------------------------------------------------------
let str1: string;
str1 = 'Hello world';
let str2: string = 'something';
let symb = Symbol('as');
// let a = str1 + symb => error

// -------- boolean ----------------------------------------------------------------
let b = true;
b = false;
// b = 1 => error

// -------- nothing ----------------------------------------------------------------
let c: undefined = undefined;
let d: null = null;

// -------- literal ----------------------------------------------------------------
const num = 108;
const str3 = 'string';

// -------- universal ----------------------------------------------------------------
let e: any = 'str';
e = [];
e = {};
e = 7;
if (typeof e === 'string') {
    e.toUpperCase();
}

let xx: unknown = 2;
if (typeof e === 'string') {
    e.toUpperCase();
}

