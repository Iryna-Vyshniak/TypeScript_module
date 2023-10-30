export class Vehicle {
    drive(speed) {
        console.log(' Let us go with speed', speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed speed to', speed);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase);
    }
}
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog('speed was changed');
    }
}
const car1 = new Car();
car1.drive(55);
car1.stop();
//# sourceMappingURL=02-modifiers.js.map