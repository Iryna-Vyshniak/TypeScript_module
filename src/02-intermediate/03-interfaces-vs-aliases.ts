// 'Interface - має описувати структуру об'єктів, їхні методи та властивості. Інтерфейси переважно призначені для опису класів. Через це вони не можуть зберігати в собі примітивні значення, як це може робити Type, а також масиви та інші структури даних, які не є об'єктами. Ми просто не зможемо їх туди зберегти, оскільки за синтаксисом відразу йдуть фігурні дужки {}.

// ---- INTERFACES --------------------------------
// interface allows duplication and then merge them - we can expand interface
// interface use extends
// Class with implements
// sometimes use prefix I (for ex: IPerson) in naming

// interface IID = string | number //error
interface IID {
    ID: string | number
}

interface IAnimal {
    name: string;
}

interface IAnimal {
    age: number;
}

interface Dog extends IAnimal {
    bark: string;
}

const dog: Dog = {
    name: 'Fido',
    age: 5,
    bark: 'bow'
};

// ---- ALIASES --------------------------------
// use primitives, unions
// type Window can`t be created
// aliases types doesn`t allow dublication
// aliases types use intersection (&)

type ID = string | number;

type PuppyName = {
    name: string;
};

type PuppyAge = {
    age: number;
};

type Puppy = PuppyName & PuppyAge;

const puppy: Puppy = {
    name: 'Fido',
    age: 5,
};

type Cat = {
    meow: () => string;
};

type DogOrCat = Dog | Cat;
type DogAndCat = Dog & Cat;
