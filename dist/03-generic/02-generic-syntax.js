"use strict";
// Array<string> - generic array
// string[]
// Promise<number>
function toArray(...args) {
    console.log(args);
    return args;
}
// toArray(1, 2, 3) // [1, 2, 3] 
// or
toArray(1, 2, 3); // [1, 2, 3]
toArray('ad', 'sd', 'gh'); // ['ad', 'sd', 'gh']
const head = (value) => value[0];
function append(el, list) {
    return list.concat(el);
}
append(1, [123, 34]);
append('1', ['123', '34']);
//# sourceMappingURL=02-generic-syntax.js.map