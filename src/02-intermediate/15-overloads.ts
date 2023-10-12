// function add(a: number | string, b: number | string): string | number {
//     return a + b; // ERROR thats why use overloads functions
// }
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    return a + b
}

// add('', 1) // ERROR
add(1, 7)
add('1', '7')



type asyncCb = (res: number) => number;

export function asyncSum(a: number, b: number): Promise<number>;
export function asyncSum(a: number, b: number, cb: asyncCb): number;

export function asyncSum(a: number, b: number, cb?: asyncCb): any {
    const result = a + b;
    if (cb) {
        return cb(result)
    }

    return Promise.resolve(result);
}

asyncSum(12, 8)


// ----------------------------------------------------------------

//  function head(value: string | number[] | boolean[]): string | number | boolean {
//   return value[0];
// } 

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

function head(value: any): any {
    return value[0];
}

head('string');
head([1, 2, 4, 34]);
head([true, false, true, false]);

const x = head('asd') // string
const y = head([23, 45, 67]) // number

