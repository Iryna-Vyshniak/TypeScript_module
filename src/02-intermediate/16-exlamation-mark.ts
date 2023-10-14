// під час тестування - ok, production - not good

let word: string | null = null;
const num = 1;

if (num > 5) {
    word = 'abc'
}
console.log(word!.charAt(1)); // ! - точно знаємо що в word є значення, впевнені в цьому

function printName(name?: string) {
    // const fullName: string = name; //  ERROR
    const fullName: string = name!; //  OK
}

interface IPerson {
    name: string
    age: number
    sex: 'female' | 'male'
}

function printName2(person?: IPerson): void {
    console.log(person!.name);
}

const people: IPerson[] = [
    { name: 'John', age: 30, sex: 'male' },
    { name: 'Sarah', age: 25, sex: 'female' },
    { name: 'Michael', age: 35, sex: 'male' },
    { name: 'Emily', age: 28, sex: 'female' },
    { name: 'David', age: 32, sex: 'male' },
    { name: 'Jessica', age: 29, sex: 'female' },
    { name: 'Brian', age: 31, sex: 'male' },
    { name: 'Linda', age: 27, sex: 'female' },
    { name: 'Kevin', age: 33, sex: 'male' },
    { name: 'Amanda', age: 26, sex: 'female' },
]

// const femalePeople = people.find(person => person.sex === 'female') // IPerson | undefined
const femalePeople = people.find(person => person.sex === 'female')! // IPerson 