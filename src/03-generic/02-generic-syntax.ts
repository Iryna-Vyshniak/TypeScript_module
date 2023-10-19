// Array<string> - generic array
// string[]
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string> // string
type XType2 = TypeFactory<number> // number
type XType3 = TypeFactory<boolean> // boolean


function toArray<T>(...args: T[]): T[] {
    console.log(args);
    return args;
}

// toArray(1, 2, 3) // [1, 2, 3] 
// or
toArray<number>(1, 2, 3) // [1, 2, 3]
toArray('ad', 'sd', 'gh') // ['ad', 'sd', 'gh']


const head = <T>(value: T[]): T => value[0];

function append<T>(el: T, list: T[]): T[] {
    return list.concat(el)
}

append(1, [123, 34])
append('1', ['123', '34'])

function identity<T>(arg: T): T {
    return arg;
}

// function identityX<string>(arg: string): string {
//   return arg;
// }

// function identityXX<number>(arg: number): number {
//   return arg;
// }

const outputX = identity<string>("myString");
const outputXX = identity<number>(100);



// загальнa функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.

function reverse<K>(items: K[]): K[] {
    return items.reverse();
}
const numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]

const strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]

// let i const - звертаємся по назві змінної
// <> - звертаємося по назві дженерика
