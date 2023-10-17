const x = 16;
const isXNegative = x >= 0 ? 'no' : 'yes'; //  'no' | 'yes' => union

interface StringRecord {
    [key: string]: string
}
interface DateRecord {
    [key: string]: Date
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>;
type Obj2 = MyRecord<number>;

const o1: Obj1 = {
    id: '123',
}

const o2: Obj2 = {
    dateBirth: new Date(20, 11, 1999),
}

type answer1 = 64 extends number ? true : false; // number includes 64 or is 64 number or not => true
type answer2 = number extends 64 ? true : false; // false
type answer3 = string[] extends any ? true : false; // true
type answer4 = string[] extends any[] ? true : false; // true 
type answer5 = never extends any ? true : false; // true
type answer6 = any extends any ? true : false; // true
type answer7 = Date extends { new(...args: any[]): any } ? true : false; // false
type answer8 = typeof Date extends { new(...args: any[]): any } ? true : false; // true

type T0 = typeof NaN extends number ? true : false // true
type T1 = number extends any ? true : false // true
type T2 = string extends 'a' | 'b' | 'c' ? true : false // false
type T3 = { getDay(): number } extends Date ? true : false // false
type T4 = { getDay(): number } extends typeof Date ? true : false // false
type T5 = (number | string) extends string ? true : false; // false





export { }