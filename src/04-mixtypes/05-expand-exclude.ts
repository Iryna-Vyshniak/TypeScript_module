// Exclude - передаємо юніон, останній параметр - останній параметр - те, що хочемо виключити

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // type T0 = "b" | "c"  виключи 'a'
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // type T0 = "c", виключи 'a' | 'b'
type T2 = Exclude<string | number | (() => void), Function> // type T2 = string | number

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504
// останній параметр - виключити все, що не є числом
// звуження типу
type NumericStatus = Exclude<Status, string>; // type NumericStatus = 200 | 401 | 504 => набір union
type TextStatus = Exclude<Status, number>; // type StringStatus = "success" | "clientError" | "serverError" => набір union


// ----------------------------------------------------------------------------------

// Extract - передаємо юніон, останній параметр - те, що хочемо вибрати/витягни
type T00 = Extract<'a' | 'b' | 'c', 'a'>; // type T00 = "a"
type T01 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // type T01 = "a" | "b"
type T02 = Extract<string | number | (() => void), Function> // type T02 = () => void

interface IPerson {
    age: number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    education: string,
    skills: string[],
}

// keyof IPerson - ключі IPerson
// extract витягни з ключів IPerson набір ключів тих, які є 'firstName' | 'lastName' | 'fullName'
type PersonNames = Extract<keyof IPerson, 'firstName' | 'lastName' | 'fullName'>;
// type PersonNames = "firstName" | "lastName"

// ----------------------------------------------------------------

// NonNullable отримує якийсь один юніон і викидає пусті значення
type TO1 = NonNullable<string | number | undefined>;  // type TO1 = string | number
type TO2 = NonNullable<string[] | null | undefined>;  // type TO2 = string[]



export function keys<O extends object>(obj: O): Extract<keyof O, string>[] {
    const currentKeys = [];

    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
}

type Computer = {
    brand: string,
    year: number,
    isAvailable: boolean,
}

// Операція keyof Computer дасть нам union рядкових літералів, тому типи значень, які б бути призначені їм у межах аліасу Computer не важливі.
type T0O = Extract<keyof Computer, string>; // type T0O = "brand" | "year" | "isAvailable"

// Так як keyof Computer поверне union рядкових літералів, то утиліта Exclude виключить їх усі.
type T1O = Exclude<keyof Computer, string>; // type T1O = never

export { }