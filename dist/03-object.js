"use strict";
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
console.log("carNew: ", carNew); // {wheels: 4, brand: 'Audi', type: '', isNew: true, name: 'X3', go: true}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=03-object.js.map