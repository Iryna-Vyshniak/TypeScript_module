type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'k';
type Union3 = Union1 | Union2; // 'a' | 'b' | 'c' | 'd' | 'e' | 'k'
type Union4 = Union1 & Union2; // 'a' | 'c'
type Union5 = { a: string, b: string, c: number } & { a: string, f: boolean, z: null };

const exampleUnion: Union5 = {
    a: 'a',
    b: 'b',
    c: 1,
    f: true,
    z: null
}


type User = {
    readonly email: string;
    readonly login: string;
    password: string;
    isOnline?: boolean;
};

type UserDictionary = {
    [index: number]: User;
} & User;

// type User = {                // => error because duplicates are not allowed
//     isOnline?: boolean,
// }

type Role = {
    roleId: number;
};

type Person = {
    readonly firstName: string;
    lastName: string;
    yearOfBirth?: Date;
    phone?: string;
} & User & Role;

type Employee = {
    contractStart: Date;
} & Person;

type Developer = {
    skills: string[];
    phone: string;
    level: 'junior' | 'middle' | 'senior';

    say(): void;
    log: (id: number) => string;
    code?: (arg: string) => void;
} & Employee;

const user: Employee = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
};

export const developer: Developer = {
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
};
