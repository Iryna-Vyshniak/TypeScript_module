// narrowing - звуження типів
function example(x) {
    if (typeof x === 'string') {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }
    else if (typeof x === 'number') {
        return x.toPrecision(2);
    }
    else if (typeof x === undefined) {
        console.log('No value');
    }
    else {
        x;
    }
}
function example2(strs) {
    // if(Array.isArray(strs)) {strs.concat(['example1', 'example2'])} or
    if (strs && typeof strs === 'object') { // відкидаємо null, перевірка на непусте значення 
        strs.concat(['Hello world']);
    }
    else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getDay();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
export const exampleA = 5;
const exampleB = exampleA.toString();
const exampleC = 'world123';
const exampleD = parseInt(exampleC);
// const exampleE = new String(exampleA); // String object String {'5'}
const exampleE = new String(exampleA).valueOf();
console.log("exampleE: ", typeof exampleE, exampleE); // string string 5
// const exampleF = new Boolean(exampleA) // Boolean object Boolean {true}
const exampleF = new Boolean(exampleA).valueOf(); // boolean object Boolean {true}
console.log("exampleF: ", typeof exampleF, exampleF); // exampleF:  boolean true
const user = {
    name: "John",
    email: "john@example.com",
    login: 'john'
};
const userU = {
    name: "John",
    email: "john@example.com",
    login: 'john'
};
// not recomend because doesn`t use with React 
const userUx = {
    name: "John",
    email: "john@example.com",
    login: 'john'
};
const admin = {
    ...user,
    role: 1,
};
// functin maping
export function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
//# sourceMappingURL=11-narrowing.js.map