let arrString: string[];
let arrNumber: number[];
let numbers: Array<number>;
let arrAny: any[];
let arrObj: object[];
const matrix: number[][] = [
    [1, 2],
    [3, 4],
];

const arrNums = [1, 2, 3, 4, 5];
const arrayAny: any[] = ['Dev', 'DevOps', 1, true];
const arrMixed: (number | string)[] = [1, 'two'];
const arrMixedNext: (string | number | boolean)[] = [1, 2, 3, 4, 5, true, ''];

const arrSrs1: string[] = [];
const arrStrs2: Array<string> = [];

arrSrs1.push('asv');

const users: {
    name: string,
    age: number,
}[] = [
        { name: 'Tom', age: 30 },
        { name: 'Jack', age: 25 },
        { name: 'Alice', age: 32 },
    ];

interface UserEx {
    name: string;
    age: number;
}

const usersEx: UserEx[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];

interface CarX {
    doors: number;
    brand: string;
}

const cars: CarX[] = [];
cars.push({
    doors: 4,
    brand: 'Audi',
});
console.log('cars: ', cars);

const arrOfArr: string[][] = [];
arrOfArr.push(['Audi', 'Sedan']);
arrOfArr.push(['Tesla']);
console.log('arrOfArr: ', arrOfArr); //  [['Audi', 'Sedan'],  ['Tesla']]

function printArr(arr: unknown[]): void {
    arr.forEach((el, idx, arr) => console.log(el, idx)); // Audi 0 Sedan 1
}
console.log(printArr(['Audi', 'Sedan']));

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLocaleUpperCase());
}

const sk = skills.filter((sk) => sk !== 'Testing');
export const skl = skills
    .filter((sk: string) => sk !== 'Testing')
    .map((sk) => sk + '! ')
    .reduce((a, b) => a + b, '');
console.log('skills: ', skl);
