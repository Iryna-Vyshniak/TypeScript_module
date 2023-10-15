export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
    return obj[key]
}

const obj1 = { a: 1, b: 2, c: 3 }
prop('a', obj1)
prop('b', obj1)
prop('c', obj1)
// prop('d', obj1) // error


interface ILaptop {
    brand: string
}

type F = ILaptop['brand']

export function keys<O extends object>(obj: O): Array<keyof O> {
    const currentKeys = [];

    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
}


export function values<O extends object>(obj: O): Array<O[keyof O]> {
    const currentValues = [];

    for (const key in obj) {
        currentValues.push(obj[key]);
    }

    return currentValues;
}