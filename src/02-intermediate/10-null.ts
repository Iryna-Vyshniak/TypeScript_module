/* eslint-disable @typescript-eslint/no-inferrable-types */


const n: null = null;
const n1: any = null;

//  strictNullChecks: true

// const n2: number = null;  => ERROR
// const n3: string = null;
// const n4: boolean = null;
// const n5: undefined = null;


//  strictNullChecks: false

// const n2: number = null; // OK
// const n3: string = null;
// const n4: boolean = null;
// const n5: undefined = null;

//  we have some problems if use strictNullChecks: false
interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        // return; // bad variant because then we can have undefined user
        return null;
    } else {
        return { name: 'Nicholas' } as User;
    }
}

const userQ = getUser();
// const uName = userQ.name; // userQ => undefined // ERROR
if (userQ) {
    const uName = userQ.name;
}