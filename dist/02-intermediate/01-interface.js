const user = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
};
export const developer = {
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
    say: () => {
        console.log("Function -> void");
    },
    log: (id) => {
        return `id: ${id}`;
    }
};
// interface IPaymentRequest extends IPayment { }
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// function get(): IResponseSuccess | IResponseFailed { }
//# sourceMappingURL=01-interface.js.map