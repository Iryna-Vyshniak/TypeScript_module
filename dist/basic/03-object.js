"use strict";
const obj = {};
const objNextVariant = {};
const userData = {
    name: 'Tom',
    age: 30,
};
const userAge = {
    age: 30,
};
// let userNameLikeNumber: { name: string; age: number } = {
//     name: 10, // error
//     age: 30,
// };
const infoAddress = {
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
const user = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'San Francisco',
    age: 21,
};
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: true,
    name: 'X3',
};
car.name = 'X100';
const carNew = {
    wheels: 4,
    brand: 'Audi',
    type: '',
    isNew: true,
    name: 'X3',
};
// carNew.go = true;
carNew['go'] = true; // popular style guide
console.log('carNew: ', carNew); // {wheels: 4, brand: 'Audi', type: '', isNew: true, name: 'X3', go: true}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=03-object.js.map