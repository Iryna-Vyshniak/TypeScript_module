const obj: object = {};
const objNextVariant: {} = {};

const userData: { name: string, age: number } = {
    name: 'Tom',
    age: 30,
};

const userAge: { name?: string, age: number } = {
    age: 30,
};

// let userNameLikeNumber: { name: string; age: number } = {
//     name: 10, // error
//     age: 30,
// };

const infoAddress: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string,
        },
    },
} = {
    officeId: 77,
    isOpened: false,
    contacts: {
        phone: '+19100000000',
        email: 'my@yahoo.com',
        address: {
            city: 'New York, NY',
        },
    },
};

// ---- with INTERFACE -------------------------------------------------------

interface User {
    firstName: string;
    lastName: string;
    city: string;
    age: number;
}

const user: User = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'San Francisco',
    age: 21,
};

interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown;
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: true,
    name: 'X3',
};

car.name = 'X100';

const carNew: Car = {
    wheels: 4,
    brand: 'Audi',
    type: '',
    isNew: true,
    name: 'X3',
};

// carNew.go = true;
carNew['go'] = true; // popular style guide
console.log('carNew: ', carNew); // {wheels: 4, brand: 'Audi', type: '', isNew: true, name: 'X3', go: true}

interface Page {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
        createAt: Date,
        updateAt: Date,
    };
}

const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};

export const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
