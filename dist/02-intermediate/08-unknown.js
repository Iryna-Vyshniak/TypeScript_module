"use strict";
let input;
input = 3;
input = ['sf', 'sdf'];
// let res: string = input; // error
function run(i) {
    if (typeof i === 'number') {
        i++;
    }
    else {
        i; // stays unknown
    }
}
run(input);
async function getData() {
    try {
        await fetch('');
    }
    catch (error) {
        // console.log(error.message); // error
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
async function getDataForce() {
    try {
        await fetch('');
    }
    catch (error) {
        const e = error;
        console.log(e.message);
    }
}
//# sourceMappingURL=08-unknown.js.map