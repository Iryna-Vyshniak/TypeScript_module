"use strict";
// union type - its  ... | ... | ... | ... => or...or...or...
const statusX = 'loading';
const statusXX = 'idle'; // OK
// const statusXX: StatusX = ''; // ERROR
const arrUnion = [];
function printId(id) {
    if (typeof id === 'string')
        console.log(id.toUpperCase()); // звуження типів до одного - runtime перевірка
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
        // звуження типів до одного - runtime перевірка
        console.log('Vivat', person.join(' '));
        return person.length;
    }
    else {
        console.log('Vivat', person);
        return `Vivat, ${person}!`;
    }
}
// create a function that change level of incoming developer
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: 'Nick',
    skills: ['HTML', 'CSS', 'JS'],
};
gradeDeveloper(dev1, 'middle');
gradeDeveloper(dev1, 'senior');
// ----------------------------------------------------------------
function logId(id) {
    if (typeof id === 'string') {
        // звуження типів до одного - runtime перевірка
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number') {
        console.log(id.toFixed(2));
    }
    else {
        console.log(id);
    }
}
logId(1);
logId('asd');
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        // звуження типів до одного - runtime перевірка
        console.log(err[0]);
    }
    else {
        console.log(err);
    }
}
function logObj(obj) {
    if ('a' in obj) {
        // звуження типів до одного - runtime перевірка
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a + ' ' + b);
    }
    else {
        console.log(a.toString());
    }
}
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
//# sourceMappingURL=08-union.js.map