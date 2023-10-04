function printPoint(point: { x: string; y: string }): void {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const object = {
    x: '1',
    y: '2',
    z: 4,
}

printPoint(object)

function printName(user: { firstName: string; lastName?: string }): void {
    console.log(`Hello`, user.firstName.toUpperCase());
    if (user.lastName) console.log(`Nice to meet you Mr.`, user.lastName.toUpperCase());
}

printName({ firstName: 'John' })
printName({ firstName: 'John', lastName: 'Doe' })


function getFullData(userEntity: { firstName: string, lastName: string }): string {
    console.log(`Hello`, userEntity.firstName.toUpperCase());
    return `Nice to meet you Mr. ${userEntity.lastName.toUpperCase()}`;
}

const userX = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'San Francisco',
    age: 34,
    skills: {
        dev: true,
        devops: true,
    }
}

// getFullData({ firstName: 'John' })  => error
getFullData({ firstName: 'John', lastName: 'Doe' })


// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface UserTest {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface AdminTest {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role?: string;
}

const userTest: UserTest = {
    login: 'Mike',
    email: 'mike@example.com',
    password: 'password',
    isOnline: false,
    lastVisited: new Date(2023, 4, 10),
}

const adminTest: AdminTest = {
    login: 'admin',
    email: 'admin@example.com',
    password: 'password',
    isOnline: false,
    lastVisited: new Date(2023, 4, 10),
    role: 'super admin',
}

function login(user: { login: string, password: string }) {
    if (user.login.length > 0 && user.password.length > 0) return `Welcome ${user.login}`
    return 'Please sign up';
}

login(userTest)
login(adminTest)
console.log("login(adminTest): ", login(adminTest));
console.log("login(userTest): ", login(userTest));