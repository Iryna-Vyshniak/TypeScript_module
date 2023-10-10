function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    // eslint-disable-next-line no-constant-condition
    while (true) { console.log("Infinite Loop") }
}

function recursion(): never {
    return recursion()
}

// const a: never = 1; // error
// const a: never = undefined; // error

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
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
            const _: never = action;
            throw new Error('Unknown action')
    }
}


export function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true
    } else {
        return false;
    }
}

function isNumber(x: string | number): boolean {
    // if some if ... else
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('srfdt') // without this func if x another type - error typescript because undefined
}