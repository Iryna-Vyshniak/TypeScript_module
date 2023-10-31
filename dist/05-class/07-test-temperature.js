export class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
const temp0 = Temperature.fromFahrenheit(63);
temp0.celsius;
const temp1 = new Temperature(25);
temp1.fahrenheit = 33;
//# sourceMappingURL=07-test-temperature.js.map