"use strict";
function len(arg) {
    return arg.length;
}
len('abs');
len(['abs']);
len({ length: 12 });
// len(123)  // ERROR
// len(true) // ERROR
const obj = { a: 1 };
// len(obj) // ERROR
const obj1 = { a: 1, length: 12 };
len(obj1); // ok
// object
//# sourceMappingURL=03-constraints.js.map