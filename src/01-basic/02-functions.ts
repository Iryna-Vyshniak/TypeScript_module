/* eslint-disable prefer-const */
function fn(num: number, str: string, bool: boolean, empty: null) {
    // Some logic
}

function fnA(num = 10, str = 'Some string', bool = true, empty = null) {
    // Some logic
}

// ------------------------------------------------------------------
function getName(firstName: string, secondName: string): string {
    if (typeof firstName !== 'string') {
        throw new Error('!!!');
    }
    return `${firstName} ${secondName}`;
}
// getName(true, false)
console.log(getName('Antony', 'Forex'));

// ------------------------------------------------------------------
function getFullName(firstName: string, secondName?: string): string {
    return secondName ? `${firstName} ${secondName}` : `${firstName}`;
}
getFullName('Antony');
console.log(getFullName('Antony'));
console.log(getFullName('Antony', 'Forex'));

// ------------------------------------------------------------------
function sum(a: number, b: number): number {
    return a + b;
}
const sum2 = (a: number, b: number): number => a + b;
sum(1, 7);
sum2(1, 7);

// ----------------------------------------------------------------
let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
    console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); //  "First: Hello, Second: 42"

type CallbackType = (num1: number, num2: number) => number;

function calc(param1: number, param2: number, callback: CallbackType): void {
    console.log('Result:', callback(param1, param2));
}

calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

function doSomething(callback: () => void) {
    callback();
}

doSomething(() => {
    console.log('Callback function!');
});

function log(name: string, userId?: string): void {
    console.log('Hello', name, 'with Id:', userId || 'anonym');
}
log('Vivat');
log('Bob', '123');

function logMessage(message: string): void {
    console.log(message);
}

logMessage('Hello, world!');

type CallbackType2 = (...nums: number[]) => number;

function calc2(param1: number, param2: number, callback: CallbackType2): void {
    console.log('Result:', callback(param1, param2));
}

calc2(1, 1, (num1, num2) => num1 + num2);
calc2(10, 5, (num1, num2) => num1 - num2);

// ------------------------------------------------------------------
function crash(): never {
    throw new Error('crash');
}

function throwError(message: string): never {
    throw new Error(message);
}

// Function with infinite loop
function infiniteLoop(): never {
    // eslint-disable-next-line no-constant-condition
    while (true) { console.log("Infinite Loop") }

}

export { average };

// ------------------------------------------------------------------
function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}

// ------------------------------------------------------------------
function slice(str: string, start: number, end?: number): string {
    let newStr = '';

    let lastIndex: number;

    if (end) {
        lastIndex = end > str.length ? str.length : end;
    } else {
        lastIndex = str.length;
    }

    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }

    return newStr;
}

// ------------AFTER ENUM TUPLES ALIASES UNIONS ----------------------------------------------------

// type QuestionStatus = 'published' | 'draft' | 'deleted'
enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted',
}

interface Faqs {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status?: QuestionStatus;
}

async function getFaqs(req: { topicId: number; status?: QuestionStatus }): Promise<Faqs[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    const data: Faqs[] = await res.json();
    return data;
}

type UserXXX = {
    name: string;
    age: number;
    hobby: string[];
};

function userConstructor(name: string, age: number, hobby: string[]): UserXXX {
    return {
        name,
        age,
        hobby,
    };
}
