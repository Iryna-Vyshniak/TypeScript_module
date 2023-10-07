"use strict";
/* eslint-disable prettier/prettier */
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
const circle1 = {
    radius: 4,
    kind: ShapeKind.Circle,
};
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
const dev = {
    level: Grades.Junior,
    login: 'Alex',
    skills: ['HTML', 'CSS', 'JS'],
};
function upGrade(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}
upGrade(dev);
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOT_AUTH"] = 401] = "NOT_AUTH";
    ErrorCode[ErrorCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    ErrorCode[ErrorCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorCode[ErrorCode["CONFLICT"] = 409] = "CONFLICT";
    ErrorCode[ErrorCode["ERROR"] = 500] = "ERROR";
})(ErrorCode || (ErrorCode = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "success";
    StatusCode["IN_PROGRESS"] = "progress";
    StatusCode["FAILED"] = "failed";
})(StatusCode || (StatusCode = {}));
const response = {
    message: 'Payment successful',
    statusCode: StatusCode.SUCCESS,
};
if (response.statusCode === StatusCode.SUCCESS) {
    console.log(StatusCode.SUCCESS);
}
function action(status) { console.log(StatusCode); }
action(StatusCode.SUCCESS);
var Sizes;
(function (Sizes) {
    Sizes["LARGE"] = "large";
    Sizes["MEDIUM"] = "medium";
    Sizes["SMALL"] = "small";
})(Sizes || (Sizes = {}));
const button = Sizes.LARGE;
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
//# sourceMappingURL=09-enum.js.map