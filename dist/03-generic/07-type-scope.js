export function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith1 = tuplePairCreator(1);
const val = toTupleWith1(2); // [number, number]
const val2 = toTupleWith1('score'); // [number, string]
// ----------------------------------------------------------------
export function createMap(list) {
    return function (cb) {
        const result = [];
        for (const el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3]);
const result = mapNums(num => num + 2);
//# sourceMappingURL=07-type-scope.js.map