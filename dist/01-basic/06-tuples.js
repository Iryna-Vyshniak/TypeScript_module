"use strict";
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prefer-const */
// Tuple - is a data type that allows you to define an array with a fixed number of elements whose types are known but do not necessarily have to be the same.
let tupleType;
tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Wrong types
// tupleType = ['hello', true, true]; // Error. More values ​than a tuple
let date;
date = [7, 11, 2023]; // OK
const pairsTuple = [
    ['key', 'value'],
    ['key2', 'value2'],
];
const dataTuple = [1, false, 'lodash'];
const skillsTuple = [1, 'Dev'];
const idSkill = skillsTuple[0];
const roleSkill = skillsTuple[1];
const [id, role] = skillsTuple;
const newTuple = ['Doe', 27, new Date(), 'John', 'Snow'];
const arrTuple = [7, 'sdf', true, true, false]; // OK
// const arrTuple: [number, string, ...boolean[]] = [7, 'sdf', true, true] // OK
// const arrTuple: [number, string, ...boolean[]] = [7, 'sdf'] // OK
// csv
const doc = [];
doc.push(['Michail', 'Derekson', 23, new Date(2000, 12, 1)]);
//# sourceMappingURL=06-tuples.js.map