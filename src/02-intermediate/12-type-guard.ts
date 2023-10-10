type Fish = { swim: () => void; }
type Bird = { fly: () => void; }

// Predicate functions are functions that return a single TRUE or FALSE.
// function predicat => pet is Fish like for   if ('swim' in animal) {return animal.swim();
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
    // or
    // return true;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}

//  not good variant - doesn`t use
// function isNull(val: any): val is null {
//     return !val;
// }

interface IUser {
    name: string,
    email: string,
    login: string
}

const user: IUser = {
    name: "John",
    email: "john@example.com",
    login: 'john'
}

interface IAdmin {
    name: string,
    role: number,
}

// narrowing
function logId(id: string | number) {
    if (typeof id === "string") {
        console.log(id); // string
    } else {
        console.log(id); // number
    }
    // id // string | number 
}
// or
// type guard
function isString(x: string | number): x is string {
    return typeof x === "string";
}

function logIds(id: string | number) {
    if (isString(id)) {
        console.log(id); // string
    } else {
        console.log(id); // number
    }
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
    return 'role' in user;
}

function isAdminAlternative(user: IUser | IAdmin): user is IAdmin {
    return (user as IAdmin).role !== undefined;
}

function setRoleZero(user: IUser | IAdmin) {
    if (isAdmin(user)) {
        return { ...user, role: 0, }
    } else {
        throw new Error('user is not admin')
    }
}

