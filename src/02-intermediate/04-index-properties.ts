// Index Properties
type Goods = {
    [key: string]: number;
};

type Fruits = {
    apples: number;
    banana: number;
    orange: number;
};

type FrozenGoods = {
    iceCream: number;
    fish: number;
    berry: number;
};

const fruits: Goods = {
    apples: 15,
    banana: 30,
    orange: 30,
};

const frozenGoods: Goods = {
    iceCream: 25,
    fish: 30,
    berry: 10,
};


// aliases StringDictionary can have any number of properties, 
// but all their keys must be strings and all their values also ​​must be strings.

type StringDictionary = {
    prop1: "value1",
    prop2: "value2",
};

// each key of the users object points to a user ID, and the value represents the details of that user.
type UserDictionary = {
    [id: number]: { name: string; age: number };
};

const users: UserDictionary = {
    1: { name: "John", age: 30 },
    2: { name: "Anna", age: 25 },
};



// Створення словника:
// Створіть інтерфейс для словника, де ключем є рядок, а значенням — число.
// Створіть кілька об'єктів цього типу, наприклад, для зберігання кількості товарів різних категорій.

type Dictionary = {
    [key: string]: number;
};

const ShopGoods = {
    toys: 123,
    exerciseBooks: 456,
    dairy: 23,
}

// Словник із змішаними значеннями:
// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число.
// Створіть декілька об'єктів цього типу.

type MixedType = {
    [key: string]: string | number;
};

const userInfo: MixedType = {
    name: "Bob",
    age: 23,
    country: "Ukraine",
};

const bookDetails: MixedType = {
    title: "Bible",
    pageCount: 350,
};

