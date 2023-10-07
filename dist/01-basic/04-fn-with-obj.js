"use strict";
/* eslint-disable prettier/prettier */
function printPoint(point) {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}
const object = {
    x: '1',
    y: '2',
    z: 4,
};
printPoint(object);
function printName(user) {
    console.log(`Hello`, user.firstName.toUpperCase());
    if (user.lastName)
        console.log(`Nice to meet you Mr.`, user.lastName.toUpperCase());
}
printName({ firstName: 'John' });
printName({ firstName: 'John', lastName: 'Doe' });
function getFullData(userEntity) {
    console.log(`Hello`, userEntity.firstName.toUpperCase());
    return `Nice to meet you Mr. ${userEntity.lastName.toUpperCase()}`;
}
const userX = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'San Francisco',
    age: 34,
    skills: {
        dev: true,
        devops: true,
    },
};
// getFullData({ firstName: 'John' })  => error
getFullData({ firstName: 'John', lastName: 'Doe' });
const userTest = {
    login: 'Mike',
    email: 'mike@example.com',
    password: 'password',
    isOnline: false,
    lastVisited: new Date(2023, 4, 10),
};
const adminTest = {
    login: 'admin',
    email: 'admin@example.com',
    password: 'password',
    isOnline: false,
    lastVisited: new Date(2023, 4, 10),
    role: 'super admin',
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0)
        return `Welcome ${user.login}`;
    return 'Please sign up';
}
login(userTest);
login(adminTest);
console.log('login(adminTest): ', login(adminTest));
console.log('login(userTest): ', login(userTest));
//# sourceMappingURL=04-fn-with-obj.js.map