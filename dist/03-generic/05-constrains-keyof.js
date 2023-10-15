export function prop(key, obj) {
    return obj[key];
}
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
prop('b', obj1);
prop('c', obj1);
export function keys(obj) {
    const currentKeys = [];
    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
export function values(obj) {
    const currentValues = [];
    for (const key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
//# sourceMappingURL=05-constrains-keyof.js.map