export class Circle {
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Circle.pi * this.radius * this.radius;
    }
}
Circle.pi = 3.14;
const c1 = new Circle(20);
c1.radius;
c1.area;
class Ellipse extends Circle {
    constructor(radius) {
        super(radius);
        this.radius = radius;
        Circle.pi;
    }
}
//# sourceMappingURL=06-static.js.map