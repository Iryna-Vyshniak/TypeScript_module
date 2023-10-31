
// 1. abstract  забороняємо створювати інстанси на основі класу => // const v1 = new Vehicle(); // ERROR
// 1. abstract  необхідно в інстансі створити вказаний метод, властивість  => // abstract drive(speed: number): void;
abstract class Vehicle {
  abstract color: string; // придумали, але ще не дали реалізацію

  abstract drive(speed: number): void;

  public stop() {
    console.log('Stopped');
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  drive(speed: number) { // реалізуємо необхідний метод, який вказали в Vehicle
    console.log(speed);
  }
}

// const v1 = new Vehicle();