// narrowing - звуження типів


function example(x?: string | number) {
    if (typeof x === 'string') {
        return x.charAt(0).toUpperCase() + x.slice(1)
    }
    else if (typeof x === 'number') {
        return x.toPrecision(2)
    }
    else if (typeof x === undefined) {
        console.log('No value');
    }
    else { x }
}

function example2(strs: string | string[] | null) {
    // if(Array.isArray(strs)) {strs.concat(['example1', 'example2'])} or
    if (strs && typeof strs === 'object') { // відкидаємо null, перевірка на непусте значення 
        strs.concat(['Hello world']);
    } else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}

function example3(x: number[] | Date) {
    if (x instanceof Date) {
        x.getDay();
    }
    else {
        x.concat([]);
    }
}

type Fish = { swim: () => void; }
type Bird = { fly: () => void; }

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}


export const exampleA = 5;
const exampleB: string = exampleA.toString();
const exampleC = 'world123';
const exampleD: number = parseInt(exampleC);
// const exampleE = new String(exampleA); // String object String {'5'}
const exampleE = new String(exampleA).valueOf();
console.log("exampleE: ", typeof exampleE, exampleE); // string string 5
// const exampleF = new Boolean(exampleA) // Boolean object Boolean {true}
const exampleF = new Boolean(exampleA).valueOf() // boolean object Boolean {true}
console.log("exampleF: ", typeof exampleF, exampleF); // exampleF:  boolean true

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

const userU = {
    name: "John",
    email: "john@example.com",
    login: 'john'
} as IUser;

// not recomend because doesn`t use with React 
const userUx = <IUser>{
    name: "John",
    email: "john@example.com",
    login: 'john'
};

interface IAdmin {
    name: string,
    role: number,
}

const admin: IAdmin = {
    ...user,
    role: 1,
}

// functin maping
export function userToAdmin(user: IUser): IAdmin {
    return {
        name: user.name,
        role: 1
    }
}