"use strict";
function fn(num, str, bool, empty) {
    // Some logic
}
function fnA(num = 10, str = 'Some string', bool = true, empty = null) {
    // Some logic
}
// ------------------------------------------------------------------
function getName(firstName, secondName) {
    if (typeof firstName !== 'string') {
        throw new Error('!!!');
    }
    return `${firstName} ${secondName}`;
}
// getName(true, false)
console.log(getName('Antony', 'Forex'));
// ------------------------------------------------------------------
function getFullName(firstName, secondName) {
    return secondName ? `${firstName} ${secondName}` : `${firstName}`;
}
getFullName('Antony');
console.log(getFullName('Antony'));
console.log(getFullName('Antony', 'Forex'));
// ------------------------------------------------------------------
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
sum(1, 7);
sum2(1, 7);
function log(name, userId) {
    console.log('Hello', name, 'with Id:', userId || 'anonym');
}
log('Vivat');
log('Bob', '123');
// ------------------------------------------------------------------
function crash() {
    throw new Error("crash");
}
// ------------------------------------------------------------------
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
// ------------------------------------------------------------------
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
//# sourceMappingURL=02-functions.js.map