class Vehicle {
  // private createdAt: Date;

  constructor(protected createdAt: Date) { }

  public drive(speed: number): void {
    console.log(' Let us go with speed', speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log('Stopped');
  }
  private log(speed: number) {
    console.log('Vehicle has changed speed to', speed, this.createdAt);
  }
  protected alternativeLog(text: string) {
    console.log(text.toUpperCase)
  }
}

export class Car extends Vehicle {
  // public color: string;
  // public maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(
      this.color,
      this.maxSpeed,
      this.createdAt
    );
  }
}

const car1 = new Car('red', 200)
// car1.color = 'blue'

// ----------------------------------------------------------
/* Що необхідно вказати в конструкторі для параметрів, що передаються, щоб використовувати спрощений запис?

answer: Модифікатор доступу до параметра та його тип. */

export class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }

  area(): number {
    return this.height * this.width;
  }

  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`)
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width)
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}