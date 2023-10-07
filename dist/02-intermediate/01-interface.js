"use strict";
window.isAuth;
const user = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
};
const developer = {
    roleId: 1,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
    skills: ['JS', 'TypeScript'],
    phone: "",
    level: "junior",
    say: () => {
        console.log("Function -> void");
    },
    log: (id) => {
        return `id: ${id}`;
    }
};
//# sourceMappingURL=01-interface.js.map