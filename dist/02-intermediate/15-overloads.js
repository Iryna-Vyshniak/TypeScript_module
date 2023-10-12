function add(a, b) {
    return a + b;
}
// add('', 1) // ERROR
add(1, 7);
add('1', '7');
export function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(12, 8);
function head(value) {
    return value[0];
}
head('string');
head([1, 2, 4, 34]);
head([true, false, true, false]);
const x = head('asd'); // string
const y = head([23, 45, 67]); // number
//# sourceMappingURL=15-overloads.js.map