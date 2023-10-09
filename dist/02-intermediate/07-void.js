"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1); // a = void
function multiply(a, b) {
    if (!b) {
        return a * a;
    }
}
const f1 = () => { console.log('This func is void'); };
const f2 = () => {
    return true; // ignore return because void
};
const bX = f2(); // void
const skills = ['Dev', 'Guard'];
const user = {
    s: ['s']
};
skills.forEach(skill => user.s.push(skill));
const v = undefined;
//# sourceMappingURL=07-void.js.map