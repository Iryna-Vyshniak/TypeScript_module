export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.height * this.width;
    }
}
const rect1 = new Rectangle(20, 12);
rect1.area;
export class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
const c1 = new Car('green', 1500);
c1.maxSpeed = 0;
c1.maxSpeed;
//# sourceMappingURL=05-get-set.js.map