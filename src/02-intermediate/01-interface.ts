interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

interface UserDictionary {
    [index: number]: User
}

interface User {
    isOnline?: boolean,
}

interface Role {
    roleId: number,
}

// interface Window {
//     isAuth?: boolean,
// }

// window.isAuth

interface Person {
    readonly firstName: string,
    lastName: string,
    yearOfBirth?: Date,
    phone?: string,
}

interface Employee extends User, Person, Role {
    contractStart: Date,
}

interface Developer extends Employee {
    skills: string[],
    phone: string,
    level: 'junior' | 'middle' | 'senior'

    say(): void,
    log: (id: number) => string;
    code?: (arg: string) => void,
}

const user: Employee = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
}


export const developer: Developer = {
    roleId: 1,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
    skills: ['JS', 'TypeScript'],
    phone: "",
    level: "junior",

    say: (): void => {
        console.log("Function -> void");
    },
    log: (id: number): string => {
        return `id: ${id}`;
    }
}


// ---------------------------------------------------------------------

interface IPayment {
    "sum": number,
    "from": number,
    "to": number
}

// interface IPaymentRequest extends IPayment { }

enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed",
}

interface IDataSuccess extends IPayment {
    "databaseId": number,
}

interface IDataFailed {
    "errorMessage": string,
    "errorCode": number
}

// doesn`t good
// interface IResponse {
//     "status": PaymentStatus,
//     "data": IDataSuccess | IDataFailed
// }

// better variant
interface IResponseSuccess {
    "status": PaymentStatus.SUCCESS,
    "data": IDataSuccess
}

interface IResponseFailed {
    "status": PaymentStatus.FAILED,
    "data": IDataFailed
}

// function get(): IResponseSuccess | IResponseFailed { }

type f = (response: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;

// type guard
function isSuccess(res: Res): res is IResponseSuccess {
    if (res.status === PaymentStatus.SUCCESS) {
        return true
    }
    return false;
}

function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage)
    }
}