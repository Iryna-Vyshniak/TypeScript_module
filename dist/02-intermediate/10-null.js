/* eslint-disable @typescript-eslint/no-inferrable-types */
const n = null;
const n1 = null;
export function getUser() {
    if (Math.random() > 0.5) {
        // return; // bad variant because then we can have undefined user
        return null;
    }
    else {
        return { name: 'Nicholas' };
    }
}
const userQ = getUser();
// const uName = userQ.name; // userQ => undefined // ERROR
if (userQ) {
    const uName = userQ.name;
}
//# sourceMappingURL=10-null.js.map