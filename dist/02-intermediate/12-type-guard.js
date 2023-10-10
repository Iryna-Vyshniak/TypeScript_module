"use strict";
// Predicate functions are functions that return a single TRUE or FALSE.
// function predicat => pet is Fish like for   if ('swim' in animal) {return animal.swim();
function isFish(pet) {
    return pet.swim !== undefined;
    // or
    // return true;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
const user = {
    name: "John",
    email: "john@example.com",
    login: 'john'
};
// narrowing
function logId(id) {
    if (typeof id === "string") {
        console.log(id); // string
    }
    else {
        console.log(id); // number
    }
    // id // string | number 
}
// or
// type guard
function isString(x) {
    return typeof x === "string";
}
function logIds(id) {
    if (isString(id)) {
        console.log(id); // string
    }
    else {
        console.log(id); // number
    }
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        return { ...user, role: 0, };
    }
    else {
        throw new Error('user is not admin');
    }
}
//# sourceMappingURL=12-type-guard.js.map