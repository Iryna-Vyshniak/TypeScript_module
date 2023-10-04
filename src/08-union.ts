type Status = 'ok' | 'loading' | 'error';
type StatusX = 'idle' | 'loading' | 'finished' | 'rejected';

const statusX: Status = 'loading';
const statusXX: StatusX = 'idle'; // OK
// const statusXX: StatusX = ''; // ERROR

const arrUnion: (number | string)[] = [];

function printId(id: number | string): void {
    if (typeof id === 'string') console.log(id.toUpperCase());
    else console.log(id);
}

function welcome(person: [string, string] | string): number | string {
    if (Array.isArray(person)) {
        console.log('Vivat', person.join(' '));
        return person.length;
    } else {
        console.log('Vivat', person);
        return `Vivat, ${person}!`
    }
}


// Даний union-тип Level із рівнями позицій для розробників. Він призначений для інтерфейсу Developer.
// Необхідно створити функцію gradeDeveloper, яка прийматиме об'єкт користувача з ключем level та новий рівень. У тілі функції для отриманого об'єкта має призначатися наступний рівень.

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skills: string[],
    level: Level,
}

// create a function that change level of incoming developer
function gradeDeveloper(user: { level: Level }, newLevel: Level) {
    user.level = newLevel;
}

const dev1: Developer = {
    level: 'junior',
    login: 'Nick',
    skills: ['HTML', 'CSS', 'JS']
}

gradeDeveloper(dev1, 'middle')
gradeDeveloper(dev1, 'senior')