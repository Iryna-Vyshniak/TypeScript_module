"use strict";
const nums = [1, 2, [3, 4, [12, [123]]]];
nums.push(1);
nums.push([1]);
nums.push([1, [123]]);
function isJSON(arg) { console.log(arg); }
isJSON('hi');
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: '' }]);
//# sourceMappingURL=13-recursive-type.js.map