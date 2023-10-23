export { }

function f1(arg: { a: number; b: string }) {
    return arg.a + arg.b
}

type T0 = Parameters<() => string>; // type T0 = []
type T1 = Parameters<(s: string) => void>; // type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>; /// type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>; // type T3 = [arg: {a: number; b: string;}]
type T4 = Parameters<any>; // type T4 = unknown[]
type T5 = Parameters<never>; // type T5 = never
// type T6 = Parameters<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.  type T6 = never
// type T7 = Parameters<Function>; // interface Function => Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.
// type T7 = never


//----------------------------------------------------------------

type T8 = ConstructorParameters<ErrorConstructor> // type T8 = [message?: string | undefined]

class Car {
    constructor(brand: string, model: string)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { }
}
type T9 = ConstructorParameters<typeof Car> // type T9 = [brand: string, model: string]

type T10 = ConstructorParameters<ErrorConstructor>; // type T10 = [message?: string]
type T11 = ConstructorParameters<FunctionConstructor>; // type T11 = string[]
type T12 = ConstructorParameters<RegExpConstructor>; // type T12 = [pattern: string | RegExp, flags?: string]

class C {
    constructor(a: number, b: string)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { }
}
type T13 = ConstructorParameters<typeof C>; // type T13 = [a: number, b: string]
type T14 = ConstructorParameters<any>; //type T14 = unknown[]

// type T15 = ConstructorParameters<Function>; //Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T15 = never