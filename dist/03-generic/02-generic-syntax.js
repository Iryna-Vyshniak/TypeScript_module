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
function identity(arg) {
    return arg;
}
// function identityX<string>(arg: string): string {
//   return arg;
// }
// function identityXX<number>(arg: number): number {
//   return arg;
// }
const outputX = identity("myString");
const outputXX = identity(100);
// загальнa функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.
function reverse(items) {
    return items.reverse();
}
const numbers = reverse([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]
const strings = reverse(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]
// let i const - звертаємся по назві змінної
// <> - звертаємося по назві дженерика
//# sourceMappingURL=02-generic-syntax.js.map