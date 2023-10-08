const user = {
    login: 'q@q.ua',
    password: 'qwerty',
};
function multiply(a, b = 5, c) {
    if (!c) {
        return a * b;
    }
    return a * b * c;
}
multiply(5);
function testPass(user) {
    var _a;
    // const t = user.password ?  user.password.type : undefined;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function testPassX(user) {
    const t = user.password.type; // sure that the password will never be undefined, always have type
}
export function test(params) {
    const t = params && multiply(5); // if params is undefined or null -> do function multiply(5)
}
//# sourceMappingURL=06-optional.js.map