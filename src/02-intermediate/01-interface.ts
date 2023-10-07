/* eslint-disable prettier/prettier */
interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

interface UserDictionary {
    [index: number]: User
}

interface User {
    isOnline?: boolean,
}

interface Role {
    roleId: number,
}

interface Window {
    isAuth?: boolean,
}

window.isAuth

interface Person {
    readonly firstName: string,
    lastName: string,
    yearOfBirth?: Date,
    phone?: string,
}

interface Employee extends User, Person, Role {
    contractStart: Date,
}

interface Developer extends Employee {
    skills: string[],
    phone: string,
    level: 'junior' | 'middle' | 'senior'

    say(): void,
    log: (id: number) => string;
    code?: (arg: string) => void,
}

const user: Employee = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
}


const developer: Developer = {
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

    say: (): void => {
        console.log("Function -> void");
    },
    log: (id: number): string => {
        return `id: ${id}`;
    }
}
