// union type - its  ... | ... | ... | ... => or...or...or...

type Status = 'ok' | 'loading' | 'error';
type StatusX = 'idle' | 'loading' | 'finished' | 'rejected';

const statusX: Status = 'loading';
const statusXX: StatusX = 'idle'; // OK
// const statusXX: StatusX = ''; // ERROR

const arrUnion: (number | string)[] = [];

function printId(id: number | string): void {
  if (typeof id === 'string')
    console.log(id.toUpperCase()); // звуження типів до одного - runtime перевірка
  else console.log(id);
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    // звуження типів до одного - runtime перевірка
    console.log('Vivat', person.join(' '));
    return person.length;
  } else {
    console.log('Vivat', person);
    return `Vivat, ${person}!`;
  }
}

// Даний union-тип Level із рівнями позицій для розробників. Він призначений для інтерфейсу Developer.
// Необхідно створити функцію gradeDeveloper, яка прийматиме об'єкт користувача з ключем level та новий рівень. У тілі функції для отриманого об'єкта має призначатися наступний рівень.

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(user: { level: Level }, newLevel: Level) {
  user.level = newLevel;
}

const dev1: Developer = {
  level: 'junior',
  login: 'Nick',
  skills: ['HTML', 'CSS', 'JS'],
};

gradeDeveloper(dev1, 'middle');
gradeDeveloper(dev1, 'senior');

// ----------------------------------------------------------------

function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    // звуження типів до одного - runtime перевірка
    console.log(id.toLowerCase());
  } else if (typeof id === 'number') {
    console.log(id.toFixed(2));
  } else {
    console.log(id);
  }
}

logId(1);
logId('asd');
logId(true);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    // звуження типів до одного - runtime перевірка
    console.log(err[0]);
  } else {
    console.log(err);
  }
}

function logObj(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    // звуження типів до одного - runtime перевірка
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a + ' ' + b);
  } else {
    console.log(a.toString());
  }
}

export function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
