/* Узагальнені типи (Generics) - це один із потужних інструментів TypeScript, що допомагають створювати код, який можна використовувати повторно, зберігаючи водночас строгу типізацію. Дозволяють визначити "узагальнений" тип, який потім може бути спеціалізований для роботи з різними іншими типами. Замість того, щоб визначати окремі функції для кожного можливого типу даних, ви можете визначити одну функцію, яка працює з "будь-яким" типом даних.

Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і збрерігати типізацію

Використиння дженериків TypeScript:
- Для функцій, класів та інтерфейсів/аліасів, а також методів класів та інтерфейсів.*/

// function head(value: string): string;
// function head(value: number[]): number;
// function head(value: string[]): string;
// function head(value: boolean[]): boolean;
// function head(value: Date[]): Date;

// function head(value: any): any {
//     return value[0];
// }

// head('string');
// head([1, 2, 4, 34]);
// head([true, false, true, false]);

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;

function head(value: any): any {
    return value[0];
}

head('certain');

// interface IModelData<T> {
//     title: string
//     value: string //  or number[]  or boolean
// }

interface IModelData<T> {
    title: string
    value: T
}

const obj1: IModelData<number> = {
    title: 'Model',
    value: 12
}

// obj1.value = true // ERROR
obj1.value = 5 // OK

export const obj2: IModelData<Array<number>> = {
    title: 'Model',
    value: [12, 4]
}

// obj1.value = true // ERROR
// obj2.value = 5 // ERROR
obj2.value.push(1) // OK


// ----------------------------------------------------------------

let arr: Array<string | number> = [];

// arr = ['str', 10, true]; // Error
arr = ['str', 10]; // OK