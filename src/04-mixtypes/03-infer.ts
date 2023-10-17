/* eslint-disable @typescript-eslint/no-empty-function */

function fromPair(pair: [string, string]) {
    const [key, value] = pair;

    return { [key]: value }
}

//  infer визначає тип переданої ф-ції

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;

const MyPair: FirstArg<typeof fromPair> = ['myKey', 'myValue'] // [string, string]

fromPair(MyPair)

type ConstructorFirstArg<T> = T extends { new(arg: infer F, ...args: any[]): any } ? F : never;

class Computer {
    constructor(brand: string) { }
}

const brand: ConstructorFirstArg<typeof Computer> = '' // const brand: string

const dateArg: ConstructorFirstArg<typeof Date> = new Date() // const dateArg: string | number | Date

export { }