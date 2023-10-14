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
//# sourceMappingURL=02-generic-syntax.js.map