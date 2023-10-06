// Алиас это всё то, что мы обозначаем словом type.

// Такую запись как:

// type Status = 'idle' | 'loading' | 'finished' | 'rejected';

// надо читать как "эй ts, создай мне алиас типа под именем Status и сохрани в него тип юниона, который состоит из таких-то конкретных литералов".

// Под алиасом может храниться что угодно - сигнатура функции, набор свойств объекта, массив или кортеж...

// А юнион в свою очередь - это конкретный тип, который можно как сохранить под конкретным именем(алиасом), так и использовать напрямую в качестве описания типа параметров функции или свойств объекта.

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes'; // OK
answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.


type MyBoolean = false | true;
type mixedType = string | number | boolean;

type Pair = [string, string];
type Pairs = Pair[];


type DiffCar = {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown;
}

type UserType = {
    name: string,
    age: number,
    skills: string[],
}

const userType: UserType = {
    name: 'Alexander',
    age: 36,
    skills: ['active', 'tolerance'],
}

type Coordinate = [number, number];

type UserWithCoords = {
    id: number | string;
    name: string;
    age: number;
    coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
    id: 1,
    name: 'Alice',
    age: 32,
    coords: [10, 20],
};

type UrlStr = string;
type HttpMethod = 'POST' | 'GET'

function fetchWithAuth(url: UrlStr, method: HttpMethod): 1 | -1 {
    return 1;
}


fetchWithAuth('url', 'GET');

type Size = 'small' | 'medium' | 'large';

const btn: Size = 'large';
