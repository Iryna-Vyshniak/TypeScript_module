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
    return `${firstName} ${secondName}`
}
// getName(true, false)
console.log(getName('Antony', 'Forex'))


// ------------------------------------------------------------------
function getFullName(firstName: string, secondName?: string): string {
    return secondName ? `${firstName} ${secondName}` : `${firstName}`
}
getFullName('Antony')
console.log(getFullName('Antony'))
console.log(getFullName('Antony', 'Forex'))


// ------------------------------------------------------------------
function sum(a: number, b: number): number {
    return a + b;
}
const sum2 = (a: number, b: number): number => a + b;
sum(1, 7)
sum2(1, 7)

function log(name: string, userId?: string): void {
    console.log('Hello', name, 'with Id:', userId || 'anonym');
}
log('Vivat')
log('Bob', '123')


// ------------------------------------------------------------------
function crash(): never {
    throw new Error("crash");
}


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