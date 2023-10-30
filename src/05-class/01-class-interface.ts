interface ICar {
  go(speed: number): void,
}

export class Car implements ICar {
  go(speed: number) {
    console.log(' Let us go with speed', speed.toFixed());
  }
  stop() {
    console.log('Stopped');
  }
}

const car = new Car;
