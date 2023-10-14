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