"use strict";
const statusX = 'loading';
const statusXX = 'idle'; // OK
// const statusXX: StatusX = ''; // ERROR
const arrUnion = [];
function printId(id) {
    if (typeof id === 'string')
        console.log(id.toUpperCase());
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
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
    skills: ['HTML', 'CSS', 'JS']
};
gradeDeveloper(dev1, 'middle');
gradeDeveloper(dev1, 'senior');
//# sourceMappingURL=08-union.js.map