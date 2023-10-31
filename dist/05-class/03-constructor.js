class Vehicle {
    // private createdAt: Date;
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log(' Let us go with speed', speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed speed to', speed, this.createdAt);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase);
    }
}
export class Car extends Vehicle {
    // public color: string;
    // public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed, this.createdAt);
    }
}
const car1 = new Car('red', 200);
// car1.color = 'blue'
// ----------------------------------------------------------
/* Що необхідно вказати в конструкторі для параметрів, що передаються, щоб використовувати спрощений запис?

answer: Модифікатор доступу до параметра та його тип. */
export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was create at ${new Date()}`);
    }
}
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
//# sourceMappingURL=03-constructor.js.map