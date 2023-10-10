function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log("Infinite Loop");
    }
}
function recursion() {
    return recursion();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        case 'reject':
            // ...
            break;
        default:
            // eslint-disable-next-line no-case-declarations
            const _ = action;
            throw new Error('Unknown action');
    }
}
export function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else {
        return false;
    }
}
function isNumber(x) {
    // if some if ... else
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('srfdt'); // without this func if x another type - error typescript because undefined
}
//# sourceMappingURL=09-never.js.map