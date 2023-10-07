/* eslint-disable prettier/prettier */
enum ShapeKind {
    Circle, // 0
    Square, // 1
}

const myShape = ShapeKind.Circle;

// myShape.toFixed(1) => methods for numbers

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

const circle1: Circle = {
    radius: 4,
    kind: ShapeKind.Circle,
};

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior',
}

interface Dev {
    login: string;
    skills: string[];
    level: Grades;
}

const dev: Dev = {
    level: Grades.Junior,
    login: 'Alex',
    skills: ['HTML', 'CSS', 'JS'],
};

function upGrade(user: { level: Grades }) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}

upGrade(dev);

enum ErrorCode {
    NOT_AUTH = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    ERROR = 500,
}

enum StatusCode {
    SUCCESS = 'success',
    IN_PROGRESS = 'progress',
    FAILED = 'failed',
}

const response = {
    message: 'Payment successful',
    statusCode: StatusCode.SUCCESS,
};

if (response.statusCode === StatusCode.SUCCESS) { console.log(StatusCode.SUCCESS); }


function action(status: StatusCode): void { console.log(StatusCode); }

action(StatusCode.SUCCESS);

enum Sizes {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small',
}

const button: Sizes = Sizes.LARGE;

// enum StatusCode {
//      SUCCESS = 'success',
//     IN_PROGRESS = 'progress',
//     FAILED = 500,
// }

// action(StatusCode.SUCCESS); // ok
// action(500); //ok
// action('success'); // error

// function compute() {
//     return 3;
// }

// enum Roles {
//     ADMIN = 1,
//     USER = compute()
// }

// function test(x: { ADMIN: number }) { }

// test(Roles)
