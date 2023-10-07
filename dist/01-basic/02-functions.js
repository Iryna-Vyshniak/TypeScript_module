/* eslint-disable prettier/prettier */
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
// ----------------------------------------------------------------
let myFunc;
myFunc = (first, second) => {
    console.log(`First: ${first}, Second: ${second}`);
};
myFunc('Hello', 42); //  "First: Hello, Second: 42"
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);
function doSomething(callback) {
    callback();
}
doSomething(() => {
    console.log('Callback function!');
});
function log(name, userId) {
    console.log('Hello', name, 'with Id:', userId || 'anonym');
}
log('Vivat');
log('Bob', '123');
function logMessage(message) {
    console.log(message);
}
logMessage('Hello, world!');
function calc2(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc2(1, 1, (num1, num2) => num1 + num2);
calc2(10, 5, (num1, num2) => num1 - num2);
// ------------------------------------------------------------------
function crash() {
    throw new Error('crash');
}
function throwError(message) {
    throw new Error(message);
}
// Function with infinite loop
function infiniteLoop() {
    while (true) { }
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
// ------------AFTER ENUM TUPLES ALIASES UNIONS ----------------------------------------------------
// type QuestionStatus = 'published' | 'draft' | 'deleted'
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}
function userConstructor(name, age, hobby) {
    return {
        name,
        age,
        hobby,
    };
}
export {};
//# sourceMappingURL=02-functions.js.map