// 1. abstract  забороняємо створювати інстанси на основі класу => // const v1 = new Vehicle(); // ERROR
// 1. abstract  необхідно в інстансі створити вказаний метод, властивість  => // abstract drive(speed: number): void;
class Vehicle {
    stop() {
        console.log('Stopped');
    }
}
export class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
// const v1 = new Vehicle();
//# sourceMappingURL=04-abstract-class.js.map