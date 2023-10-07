/* eslint-disable prefer-const */
// -------- numbers ----------------------------------------------------------------
const decimal = 6; // десяткові
const float = 3.14; // речові або число з плаваючою крапкою
const hex = 0xf00d; // шістнадцяткове
const binary = 0b1010; // двійкове
const octal = 0o744; // вісімкове
let x = 10.5;
x = -10;
x = 3.5;
x = 10_000;
const z = NaN;
const age = 10;
// let y = 12345n;
// age = '10' => error

const revenue = 1000;
const bonus = 500;
const res = revenue + bonus;
console.log('res: ', res);

// -------- string ----------------------------------------------------------------
let str1: string;
str1 = 'Hello world';
const str2 = 'something';
const symb = Symbol('as');
// let a = str1 + symb => error

// -------- boolean ----------------------------------------------------------------
let b = true;
b = false;
// b = 1 => error

// -------- nothing ----------------------------------------------------------------
const c = undefined;
const d = null;
const empty = null;
const notParam = undefined;

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

const xx: unknown = 2;
if (typeof e === 'string') {
    e.toUpperCase();
}

// it is not necessary to specify the data type if you pass it explicitly
const numA = 10;
const strA = 'Some string';
const boolA = true;
const emptyA = null;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notParamA = undefined;
