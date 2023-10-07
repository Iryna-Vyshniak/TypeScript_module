"use strict";
let arrString;
let arrNumber;
let numbers;
let arrAny;
let arrObj;
const matrix = [
    [1, 2],
    [3, 4],
];
const arrNums = [1, 2, 3, 4, 5];
const arrayAny = ['Dev', 'DevOps', 1, true];
const arrMixed = [1, 'two'];
const arrMixedNext = [1, 2, 3, 4, 5, true, ''];
const arrSrs1 = [];
const arrStrs2 = [];
arrSrs1.push('asv');
const users = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];
const usersEx = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];
const cars = [];
cars.push({
    doors: 4,
    brand: 'Audi',
});
console.log('cars: ', cars);
const arrOfArr = [];
arrOfArr.push(['Audi', 'Sedan']);
arrOfArr.push(['Tesla']);
console.log('arrOfArr: ', arrOfArr); //  [['Audi', 'Sedan'],  ['Tesla']]
function printArr(arr) {
    arr.forEach((el, idx, arr) => console.log(el, idx)); // Audi 0 Sedan 1
}
console.log(printArr(['Audi', 'Sedan']));
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLocaleUpperCase());
}
const sk = skills.filter((sk) => sk !== 'Testing');
const skl = skills
    .filter((sk) => sk !== 'Testing')
    .map((sk) => sk + '! ')
    .reduce((a, b) => a + b, '');
console.log('skills: ', skl);
//# sourceMappingURL=05-arrays.js.map